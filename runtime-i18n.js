(function installRuntimeI18n(global) {
  "use strict";

  if (
    global.__DUBBING_RUNTIME_I18N__
    && global.__DUBBING_I18N_READY__
    && typeof global.__DUBBING_I18N_GET_MESSAGE__ === "function"
    && typeof global.__DUBBING_I18N_GET_UI_LANGUAGE__ === "function"
  ) return;
  global.__DUBBING_RUNTIME_I18N__ = true;

  const dictionaries = global.__DUBBING_LOCALE_MESSAGES__ || { en: {}, vi: {} };
  const chromeApi = global.chrome || global.browser;
  const nativeGetMessage = chromeApi?.i18n?.getMessage?.bind(chromeApi.i18n);
  const nativeGetUiLanguage = chromeApi?.i18n?.getUILanguage?.bind(chromeApi.i18n);
  const nativeLocale = (() => {
    try { return nativeGetUiLanguage?.() || global.navigator?.language || "en"; }
    catch { return global.navigator?.language || "en"; }
  })();
  const normalizeLocale = (value) => String(value || "").toLowerCase().startsWith("vi") ? "vi" : "en";
  let preference = "auto";
  let activeLocale = normalizeLocale(nativeLocale);

  function substitute(message, placeholders, substitutions) {
    const values = Array.isArray(substitutions)
      ? substitutions.map(String)
      : substitutions == null ? [] : [String(substitutions)];
    let result = String(message || "");
    for (const [name, definition] of Object.entries(placeholders || {})) {
      const content = String(definition?.content || "").replace(/\$(\d+)/g, (_match, index) => values[Number(index) - 1] || "");
      result = result.replace(new RegExp(`\\$${name}\\$`, "gi"), content);
    }
    return result.replace(/\$(\d+)/g, (_match, index) => values[Number(index) - 1] || "").replace(/\$\$/g, "$");
  }

  function getMessage(name, substitutions) {
    if (name === "@@ui_locale") return activeLocale;
    const entry = dictionaries[activeLocale]?.[name] || dictionaries.en?.[name];
    if (entry?.message != null) return substitute(entry.message, entry.placeholders, substitutions);
    try { return nativeGetMessage?.(name, substitutions) || ""; } catch { return ""; }
  }

  global.__DUBBING_I18N_GET_MESSAGE__ = getMessage;
  global.__DUBBING_I18N_GET_UI_LANGUAGE__ = () => activeLocale;

  const reverseMessages = { en: new Map(), vi: new Map() };
  for (const sourceLocale of ["en", "vi"]) {
    for (const [key, entry] of Object.entries(dictionaries[sourceLocale] || {})) {
      const source = String(entry?.message || "").trim();
      if (source && !source.includes("$") && !source.includes("{") && !source.includes("}")) {
        reverseMessages[sourceLocale].set(source, key);
      }
    }
  }

  function translateValue(value) {
    const text = String(value || "");
    const trimmed = text.trim();
    if (!trimmed) return text;
    let key;
    for (const map of Object.values(reverseMessages)) {
      key = map.get(trimmed);
      if (key) break;
    }
    if (!key) return text;
    const translated = getMessage(key);
    return translated ? text.replace(trimmed, translated) : text;
  }

  function isExtensionSurface(element) {
    if (global.location?.protocol === "chrome-extension:" || global.location?.protocol === "moz-extension:") return true;
    return Boolean(element?.closest?.(
      ".yd-sidebar-panel,.swal2-container,.toastify,.youtube-dubbing-container,[class*='youtube-dubbing']",
    ));
  }

  function translateTree(root) {
    if (typeof document === "undefined" || !root) return;
    const element = root.nodeType === Node.ELEMENT_NODE ? root : root.parentElement;
    if (!isExtensionSurface(element) || element?.closest?.("[data-dubbing-i18n-ignore]")) return;
    if (root.nodeType === Node.TEXT_NODE) root.nodeValue = translateValue(root.nodeValue);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!node.parentElement?.closest?.("[data-dubbing-i18n-ignore]")) node.nodeValue = translateValue(node.nodeValue);
    }
    const elements = root.nodeType === Node.ELEMENT_NODE ? [root, ...root.querySelectorAll("*")] : [];
    for (const item of elements) {
      if (item.closest?.("[data-dubbing-i18n-ignore]")) continue;
      for (const attribute of ["title", "aria-label", "placeholder", "alt"]) {
        if (item.hasAttribute?.(attribute)) item.setAttribute(attribute, translateValue(item.getAttribute(attribute)));
      }
    }
  }

  function languageLabels() {
    return activeLocale === "vi"
      ? { label: "Ngôn ngữ hệ thống", auto: "Theo trình duyệt", en: "English", vi: "Tiếng Việt" }
      : { label: "System language", auto: "Use browser language", en: "English", vi: "Tiếng Việt" };
  }

  function mountLanguageSelector() {
    if (typeof document === "undefined" || !document.body) return;
    const roots = global.location?.protocol?.endsWith("extension:")
      ? [document.body]
      : [...document.querySelectorAll(".yd-sidebar-panel")];
    for (const root of roots) {
      if (root.querySelector("[data-dubbing-system-language]")) continue;
      const labels = languageLabels();
      const wrapper = document.createElement("label");
      wrapper.dataset.dubbingSystemLanguage = "true";
      wrapper.dataset.dubbingI18nIgnore = "true";
      wrapper.title = labels.label;
      wrapper.innerHTML = `<span>${labels.label}</span><select aria-label="${labels.label}"><option value="auto">${labels.auto}</option><option value="en">English</option><option value="vi">Tiếng Việt</option></select>`;
      Object.assign(wrapper.style, {
        display: "flex", alignItems: "center", gap: "8px", padding: "7px 10px",
        border: "1px solid rgba(0,0,0,.12)", borderRadius: "9px", background: "#fff",
        color: "#333", font: "500 12px/1.2 system-ui,sans-serif", zIndex: "2147483647",
      });
      const select = wrapper.querySelector("select");
      Object.assign(select.style, { border: "0", outline: "0", background: "transparent", color: "#5b21b6", fontWeight: "600" });
      select.value = preference;
      select.addEventListener("change", async () => {
        preference = select.value;
        applyLocale(preference === "auto" ? normalizeLocale(nativeLocale) : normalizeLocale(preference));
        const storage = chromeApi?.storage?.local;
        if (storage?.get && storage?.set) {
          const result = await storage.get("settings");
          await storage.set({ systemLanguage: preference, settings: { ...(result?.settings || {}), systemLanguage: preference } });
        }
      });
      if (global.location?.protocol?.endsWith("extension:")) {
        Object.assign(wrapper.style, { position: "fixed", right: "12px", top: "10px" });
        document.body.appendChild(wrapper);
      } else {
        Object.assign(wrapper.style, { margin: "10px" });
        root.appendChild(wrapper);
      }
    }
  }

  function applyLocale(locale) {
    activeLocale = normalizeLocale(locale);
    if (typeof document !== "undefined") {
      document.documentElement.lang = activeLocale;
      translateTree(document.documentElement);
      document.querySelectorAll("[data-dubbing-system-language]").forEach((node) => node.remove());
      mountLanguageSelector();
      document.dispatchEvent(new CustomEvent("dubbing-system-language-changed", { detail: { locale: activeLocale } }));
    }
  }

  const storage = chromeApi?.storage?.local;
  global.__DUBBING_I18N_READY__ = (async () => {
    try {
      const result = storage?.get ? await storage.get(["systemLanguage", "settings"]) : {};
      preference = result?.systemLanguage || result?.settings?.systemLanguage || "auto";
    } catch { preference = "auto"; }
    applyLocale(preference === "auto" ? nativeLocale : preference);
  })();

  chromeApi?.storage?.onChanged?.addListener?.((changes, area) => {
    if (area !== "local") return;
    const next = changes.systemLanguage?.newValue || changes.settings?.newValue?.systemLanguage;
    if (!next || next === preference) return;
    preference = next;
    applyLocale(preference === "auto" ? nativeLocale : preference);
  });

  if (typeof document !== "undefined") {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) for (const node of mutation.addedNodes) translateTree(node);
      mountLanguageSelector();
    });
    const start = () => {
      mountLanguageSelector();
      translateTree(document.documentElement);
      observer.observe(document.documentElement, { childList: true, subtree: true });
    };
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", start, { once: true }) : start();
  }
})(globalThis);
