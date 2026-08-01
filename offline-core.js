(function installOfflineDubbingCore(global) {
  "use strict";

  if (global.__DUBBING_OFFLINE_CORE__) return;
  global.__DUBBING_OFFLINE_CORE__ = true;

  const extensionRuntime = global.chrome?.runtime || global.browser?.runtime;
  const LOCAL_API_BASE = extensionRuntime?.getURL
    ? extensionRuntime.getURL("offline-api")
    : "https://local.translatedub.invalid/offline-api";
  global.__DUBBING_LOCAL_API_BASE__ = LOCAL_API_BASE;
  const MESSAGE_TYPE = "DUBBING_OFFLINE_TRANSLATE";
  const originalFetch = global.fetch.bind(global);
  const isBackground = Boolean(global.__DUBBING_OFFLINE_BACKGROUND__);

  function jsonResponse(payload, status = 200) {
    return new Response(JSON.stringify(payload), {
      status,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  }

  function normalizeLanguage(language, fallback) {
    const value = String(language || fallback || "auto").replaceAll("_", "-");
    return value.split("-")[0] || fallback || "auto";
  }
  const VOICE_CODE_MAP = {
    "namminh": "vi-VN-NamMinhNeural",
    "nam minh": "vi-VN-NamMinhNeural",
    "hoaimy": "vi-VN-HoaiMyNeural",
    "hoài my": "vi-VN-HoaiMyNeural",
    "vi-vn-namminhneural": "vi-VN-NamMinhNeural",
    "vi-vn-hoaimyneural": "vi-VN-HoaiMyNeural",
    "ava": "en-US-AvaNeural",
    "jenny": "en-US-JennyNeural",
    "guy": "en-US-GuyNeural",
    "aria": "en-US-AriaNeural",
    "elvira": "es-ES-ElviraNeural",
    "xiaoxiao": "zh-CN-XiaoxiaoNeural",
    "nanami": "ja-JP-NanamiNeural",
    "sunhi": "ko-KR-SunHiNeural",
    "denise": "fr-FR-DeniseNeural",
    "katja": "de-DE-KatjaNeural",
    "svetlana": "ru-RU-SvetlanaNeural"
  };

  function resolveVoiceCode(voice, locale) {
    if (!voice) return String(locale || "").startsWith("vi") ? "vi-VN-NamMinhNeural" : "en-US-AvaNeural";
    const key = String(voice).trim().toLowerCase();
    if (VOICE_CODE_MAP[key]) return VOICE_CODE_MAP[key];
    if (key.includes("-") && key.endsWith("neural")) return voice;
    for (const [k, v] of Object.entries(VOICE_CODE_MAP)) {
      if (key.includes(k) || k.includes(key)) return v;
    }
    return String(locale || "").startsWith("vi") ? "vi-VN-NamMinhNeural" : "en-US-AvaNeural";
  }
  global.__DUBBING_RESOLVE_VOICE_CODE__ = resolveVoiceCode;


  async function translateDirect(texts, fromLanguage, toLanguage, signal) {
    const source = normalizeLanguage(fromLanguage, "auto");
    const target = normalizeLanguage(toLanguage, "en");
    const values = Array.isArray(texts) ? texts : [];

    return Promise.all(values.map(async (value) => {
      const text = typeof value === "string" ? value : String(value?.text || "");
      if (!text.trim() || source === target) return text;

      const query = new URLSearchParams({
        client: "gtx",
        sl: source,
        tl: target,
        dt: "t",
        q: text,
      });
      const url = `https://translate.googleapis.com/translate_a/single?${query}`;
      const response = await originalFetch(
        url,
        { method: "GET", signal },
      );
      if (!response.ok) throw new Error(`Google Translate HTTP ${response.status}`);
      const payload = await response.json();
      return Array.isArray(payload?.[0])
        ? payload[0].map((part) => Array.isArray(part) ? part[0] || "" : "").join("")
        : text;
    }));
  }

  function translateThroughBackground(texts, fromLanguage, toLanguage) {
    const runtime = global.chrome?.runtime || global.browser?.runtime;
    if (!runtime?.sendMessage) return translateDirect(texts, fromLanguage, toLanguage);

    return new Promise((resolve, reject) => {
      runtime.sendMessage({ type: MESSAGE_TYPE, texts, fromLanguage, toLanguage, timestamp: Date.now() }, (reply) => {
        const lastError = global.chrome?.runtime?.lastError;
        if (lastError) return reject(new Error(lastError.message));
        if (!reply?.ok) return reject(new Error(reply?.error || "Offline translation failed"));
        resolve(reply.translations);
      });
    });
  }

  const translate = isBackground ? translateDirect : translateThroughBackground;

  async function fetchGoogleTtsBase64(text, lang = "vi") {
    const target = normalizeLanguage(lang, "vi");
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(String(text).slice(0, 500))}&tl=${target}&client=tw-ob`;
    const res = await originalFetch(url);
    if (!res.ok) throw new Error(`Google TTS HTTP ${res.status}`);
    const buf = await res.arrayBuffer();
    const bytes = new Uint8Array(buf);
    let binary = "";
    const chunkSize = 8192;
    for (let i = 0; i < bytes.length; i += chunkSize) {
      binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize));
    }
    return {
      audioBase64: btoa(binary),
      contentType: res.headers.get("content-type") || "audio/mpeg"
    };
  }
  global.__DUBBING_GOOGLE_TTS_FALLBACK__ = fetchGoogleTtsBase64;

  async function readJsonBody(input, init) {
    const body = init?.body;
    if (typeof body === "string" && body) {
      try { return JSON.parse(body); } catch { return {}; }
    }
    if (input instanceof Request) {
      try { return await input.clone().json(); } catch { return {}; }
    }
    return {};
  }

  async function routeOfflineRequest(url, input, init) {
    const body = await readJsonBody(input, init);
    const localUrl = new URL(url.href.slice(LOCAL_API_BASE.length) || "/", "https://local.invalid");
    const path = localUrl.pathname;

    if (path === "/api/servertime") {
      return jsonResponse({ epochMillis: Date.now() });
    }

    if (path === "/api/v2/translateAll") {
      const inputTexts = Array.isArray(body)
        ? body
        : Array.isArray(body?.texts)
        ? body.texts
        : Array.isArray(body?.subtitles)
        ? body.subtitles.map((s) => (typeof s === "string" ? s : s.text || ""))
        : [];
      const translated = await translate(
        inputTexts,
        localUrl.searchParams.get("language") || body?.fromLanguage || "auto",
        localUrl.searchParams.get("to") || body?.toLanguage || "en",
      );
      return jsonResponse({ translations: translated.map((text) => ({ text })) });
    }

    if (path === "/api/v2/ai-translate/translate") {
      const subtitles = Array.isArray(body?.subtitles) ? body.subtitles : [];
      const translated = await translate(
        subtitles.map((subtitle) => subtitle.googleTranslation || subtitle.text || ""),
        body?.fromLanguage || "auto",
        body?.toLanguage || "en",
      );
      return jsonResponse({
        subtitleTranslateResults: translated.map((translateResult, index) => ({
          index: subtitles[index]?.index ?? index,
          translateResult,
          useAiTranslate: false,
        })),
      });
    }

    if (path === "/api/v2/dubbing/translateOnly") {
      const subtitles = Array.isArray(body?.subtitles)
        ? body.subtitles
        : Array.isArray(body?.texts)
        ? body.texts
        : Array.isArray(body)
        ? body
        : [];
      const translated = await translate(
        subtitles.map((subtitle) => typeof subtitle === "string" ? subtitle : subtitle.text || ""),
        body?.fromLanguage || body?.language || "auto",
        body?.toLanguage || body?.targetLanguage || "en",
      );
      return jsonResponse({ translations: translated.map((text) => ({ text })) });
    }

    if (path === "/api/v2/dubbing/resolveChain") {
      return jsonResponse({ chain: "FRONTEND_EDGE_AZURE", ruleName: "offline-client" });
    }

    if (path === "/api/v2/dubbing/fallbackTts") {
      const dubbingReq = body?.dubbingRequest || body || {};
      const subtitles = Array.isArray(dubbingReq?.subtitles)
        ? dubbingReq.subtitles
        : Array.isArray(body?.subtitles)
        ? body.subtitles
        : [];
      const targetLang = dubbingReq?.config?.toLanguage || dubbingReq?.toLanguage || body?.toLanguage || "vi";

      return jsonResponse({
        subtitleDubbingResults: subtitles.map((s, idx) => {
          const txt = s.translation || s.text || s.googleTranslation || "";
          const ttsUrl = txt.trim()
            ? `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(txt.trim())}&tl=${targetLang}&client=tw-ob`
            : "";
          return {
            index: s.index ?? idx,
            ttsUrl,
            error: null
          };
        })
      });
    }

    if (path.includes("/api/v2/membership/")) {
      return jsonResponse({ exists: false, balance: 0 });
    }

    if (path.endsWith("/pronunciation-preference/runtime")) {
      return jsonResponse({ rules: [] });
    }

    if (path === "/api/v2/ai-translate/prepare") return jsonResponse({});
    if (path.includes("reportFrontendDubbingMetrics") || path.includes("watchLog")) {
      return new Response(null, { status: 204 });
    }

    return jsonResponse({
      offline: true,
      error: `Offline endpoint unavailable: ${path}`,
    }, 503);
  }

  global.fetch = function offlineFetch(input, init) {
    let url;
    try { url = new URL(typeof input === "string" ? input : input.url); }
    catch { return originalFetch(input, init); }
    return url.href === LOCAL_API_BASE || url.href.startsWith(`${LOCAL_API_BASE}/`)
      ? routeOfflineRequest(url, input, init)
      : originalFetch(input, init);
  };

  // The original bundles also contain Axios services. Their XHR adapter cannot
  // open our private `offline:` URLs, so expose an Axios-compatible adapter that
  // sends those requests through the local fetch router above.
  global.__DUBBING_AXIOS_ADAPTER__ = async function offlineAxiosAdapter(config) {
    const rawUrl = String(config?.url || "");
    const baseUrl = String(config?.baseURL || LOCAL_API_BASE);
    const url = rawUrl.startsWith(LOCAL_API_BASE)
      ? rawUrl
      : `${baseUrl.replace(/\/$/, "")}/${rawUrl.replace(/^\//, "")}`;
    const headers = {};
    const sourceHeaders = config?.headers;
    if (sourceHeaders?.toJSON) Object.assign(headers, sourceHeaders.toJSON());
    else if (sourceHeaders) Object.assign(headers, sourceHeaders);

    const method = String(config?.method || "get").toUpperCase();
    const response = await global.fetch(url, {
      method,
      headers,
      body: method === "GET" || method === "HEAD" ? undefined : config?.data,
      signal: config?.signal,
      credentials: config?.withCredentials ? "include" : "same-origin",
    });
    const responseType = config?.responseType;
    let data;
    if (responseType === "arraybuffer") data = await response.arrayBuffer();
    else if (responseType === "blob") data = await response.blob();
    else if (responseType === "stream") data = response.body;
    else data = await response.text();

    const result = {
      data,
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      config,
      request: null,
    };
    if (response.ok) return result;

    const error = new Error(`Request failed with status code ${response.status}`);
    error.name = "AxiosError";
    error.code = response.status >= 500 ? "ERR_BAD_RESPONSE" : "ERR_BAD_REQUEST";
    error.config = config;
    error.response = result;
    throw error;
  };

  if (isBackground) {
    const runtime = global.chrome?.runtime || global.browser?.runtime;
    runtime?.onMessage?.addListener((message, _sender, sendResponse) => {
      if (message?.type !== MESSAGE_TYPE) return undefined;
      translateDirect(message.texts, message.fromLanguage, message.toLanguage)
        .then((translations) => sendResponse({ ok: true, translations }))
        .catch((error) => sendResponse({ ok: false, error: error?.message || String(error) }));
      return true;
    });
  }

  const storage = global.chrome?.storage?.local || global.browser?.storage?.local;
  if (storage?.get && storage?.set) {
    Promise.resolve(storage.get("settings")).then((result) => {
      const settings = result?.settings;
      if (!settings || (settings.translateEngine === "google" && settings.voicesType === "free")) return;
      return storage.set({ settings: { ...settings, translateEngine: "google", voicesType: "free" } });
    }).catch(() => {});
  }

  function removeAccountControls() {
    if (typeof document === "undefined") return;
    const roots = location.protocol === "chrome-extension:"
      ? [document]
      : Array.from(document.querySelectorAll(".yd-sidebar-panel"));
    const exactLabels = /^(login|log in|sign in|logout|log out|subscribe|subscription|membership plans|user account|đăng nhập|đăng xuất|đăng ký|gói thành viên|tài khoản người dùng|登录|退出登录|订阅|会员|用户账户)$/i;

    for (const root of roots) {
      root.querySelectorAll(".yd-sidebar-panel-login-btn,.yd-sidebar-panel-footer-left").forEach((node) => node.remove());
      root.querySelectorAll("button,[role='button'],a").forEach((node) => {
        const label = (node.getAttribute("aria-label") || node.textContent || "").trim().replace(/\s+/g, " ");
        if (exactLabels.test(label)) node.remove();
      });
    }
  }

  function injectThemeUpgradeStyles() {
    if (typeof document === "undefined" || document.getElementById("translatedub-theme-upgrade")) return;
    const styleNode = document.createElement("style");
    styleNode.id = "translatedub-theme-upgrade";
    styleNode.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

      .yd-sidebar-panel, .yd-floating-ball-menu, .custom-play-btn-container, [data-yd-element-id] {
        font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
      }

      /* Injected Sidebar Panel Styling */
      .yd-sidebar-panel {
        background: linear-gradient(160deg, #150e2a 0%, #0d071a 50%, #06030c 100%) !important;
        color: #f8fafc !important;
        border-left: 1px solid rgba(255, 255, 255, 0.12) !important;
        box-shadow: -12px 0 36px rgba(0, 0, 0, 0.5) !important;
        backdrop-filter: blur(20px) !important;
      }

      /* Floating Button Enhancement */
      .yd-floating-ball, .custom-play-btn-container, [class*="yd-floating-ball"] {
        background: linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #3b82f6 100%) !important;
        box-shadow: 0 4px 20px rgba(168, 85, 247, 0.5), 0 0 12px rgba(99, 102, 241, 0.4) !important;
        border: 1px solid rgba(255, 255, 255, 0.3) !important;
        border-radius: 50% !important;
        transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
      }

      /* High Contrast Dropdowns & Options */
      .custom-dropdown, [role="listbox"], select, option {
        background-color: #20193a !important;
        color: #ffffff !important;
        border: 1px solid rgba(168, 85, 247, 0.5) !important;
      }

      .custom-dropdown > div, .custom-dropdown button, [role="option"], .custom-dropdown .bg-white {
        background-color: #20193a !important;
        color: #f1f5f9 !important;
      }

      .custom-dropdown > div:hover, .custom-dropdown button:hover, [role="option"]:hover, select option:hover {
        background-color: #34285c !important;
        color: #ffffff !important;
      }

      /* Hardcoded light elements override */
      [style*="background: #eee"], [style*="background: #e0e0e0"], [style*="background:#eee"], [style*="background:#e0e0e0"] {
        background: rgba(255, 255, 255, 0.1) !important;
      }
      [style*="background: #fff3cd"], [style*="background:#fff3cd"] {
        background: rgba(245, 158, 11, 0.15) !important;
        border-color: rgba(245, 158, 11, 0.4) !important;
        color: #fbbf24 !important;
      }

      /* Subtitle Overlay Styling on Player */
      :where([part=captions] [part=cue]), .ytp-caption-segment-text {
        background-color: rgba(15, 10, 30, 0.9) !important;
        color: #ffffff !important;
        border-radius: 8px !important;
        border: 1px solid rgba(255, 255, 255, 0.15) !important;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5) !important;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8) !important;
      }
    `;
    (document.head || document.documentElement).appendChild(styleNode);
  }

  if (typeof document !== "undefined") {
    const startAccountUiCleanup = () => {
      removeAccountControls();
      injectThemeUpgradeStyles();
      new MutationObserver(() => {
        removeAccountControls();
        injectThemeUpgradeStyles();
      }).observe(document.documentElement, {
        childList: true,
        subtree: true,
      });
    };
    document.readyState === "loading"
      ? document.addEventListener("DOMContentLoaded", startAccountUiCleanup, { once: true })
      : startAccountUiCleanup();
  }
})(globalThis);
