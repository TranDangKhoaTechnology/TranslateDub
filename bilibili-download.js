/* Bilibili download helper — shared pure logic (works in background + popup + tests). */
(function installBilibiliDownload(global) {
  "use strict";
  if (global.__BILIBILI_DOWNLOAD__) return;
  global.__BILIBILI_DOWNLOAD__ = true;

  function normalizeBilibiliUrl(input) {
    let raw = String(input || "").trim();
    if (!raw) return { ok: false, error: "EMPTY_INPUT" };
    if (!/^https?:\/\//i.test(raw)) raw = "https://" + raw;
    let url;
    try {
      url = new URL(raw);
    } catch {
      return { ok: false, error: "INVALID_URL" };
    }
    const host = url.hostname.toLowerCase();
    const isBili = host === "bilibili.com" || host.endsWith(".bilibili.com");
    const isB23 = host === "b23.tv" || host.endsWith(".b23.tv");
    if (!isBili && !isB23) return { ok: false, error: "UNSUPPORTED_URL" };
    if (url.protocol !== "https:" && url.protocol !== "http:") {
      return { ok: false, error: "UNSUPPORTED_URL" };
    }
    return { ok: true, url: url.href, host };
  }

  // Extract a BV id from a Bilibili URL path.
  function extractBvid(input) {
    let url;
    try {
      url = new URL(normalizeBilibiliUrl(input).ok ? normalizeBilibiliUrl(input).url : input);
    } catch {
      return null;
    }
    const m = url.pathname.match(/\/video\/(BV[0-9A-Za-z]+)/i);
    return m ? m[1] : null;
  }

  function isBilibiliMediaUrl(value) {
    try {
      const url = new URL(value);
      const host = url.hostname.toLowerCase();
      return (
        host === "bilivideo.com" ||
        host.endsWith(".bilivideo.com") ||
        host === "bilivideo.cn" ||
        host.endsWith(".bilivideo.cn") ||
        host === "hdslb.com" ||
        host.endsWith(".hdslb.com") ||
        host.startsWith("upos-") && host.endsWith(".akamaized.net")
      );
    } catch {
      return false;
    }
  }

  function extractExpiration(mediaUrl) {
    try {
      const url = new URL(mediaUrl);
      const deadline = Number(url.searchParams.get("deadline"));
      if (Number.isFinite(deadline) && deadline > 0) return deadline * 1000;
    } catch {}
    return undefined;
  }

  function safeFilename(title, ext) {
    let name = String(title || "bilibili-video")
      .replace(/[\\/:*?"<>|\r\n\t]+/g, "_")
      .trim()
      .slice(0, 120);
    if (!name) name = "bilibili-video";
    if (ext && !name.toLowerCase().endsWith("." + ext.toLowerCase())) {
      name = name + "." + ext;
    }
    return name;
  }

  function decodeBase64Utf8(input) {
    let normalized = String(input).replace(/-/g, "+").replace(/_/g, "/");
    while (normalized.length % 4 !== 0) normalized += "=";
    const binary = atob(normalized);
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
    return new TextDecoder("utf-8", { fatal: false }).decode(bytes);
  }

  function decodeSnapwcPayload(downloadUrl) {
    const url = new URL(downloadUrl);
    const payload = url.searchParams.get("payload");
    if (!payload) throw new Error("SNAPWC_PAYLOAD_MISSING");
    if (payload.length > 500000) throw new Error("SNAPWC_PAYLOAD_TOO_LARGE");
    const text = decodeBase64Utf8(payload);
    const parsed = JSON.parse(text);
    return parsed;
  }

  // Normalize parser/payload response into a list of media results.
  function normalizeMediaResults(payload) {
    const results = [];
    const push = (item, kind, source) => {
      if (!item || typeof item.url !== "string" || !item.url) return;
      if (!isBilibiliMediaUrl(item.url) && !item.url.startsWith("blob:")) return;
      results.push({
        id: `${kind}-${results.length}`,
        title: payload.title || "Bilibili video",
        kind,
        qualityLabel: item.quality_note || (item.quality ? String(item.quality) : undefined),
        extension: item.ext || undefined,
        protocol: item.protocol || "https",
        size: Number(item.size) || undefined,
        url: item.url,
        expiresAt: extractExpiration(item.url),
        source,
      });
    };
    if (payload.item) {
      const typeStr = String(payload.type || "").toLowerCase();
      let k;
      if (typeStr.includes("+") || typeStr.includes("video")) k = "video_audio";
      else if (typeStr.includes("audio")) k = "audio";
      else if (typeStr.includes("cover") || typeStr.includes("image")) k = "cover";
      else k = "video_audio";
      push(payload.item, k, "snapwc_payload");
    }
    if (Array.isArray(payload.items)) {
      payload.items.forEach((it) => push(it, it.kind || "video_audio", "parser_response"));
    }
    return results;
  }

  global.__BILIBILI_DOWNLOAD_API__ = {
    normalizeBilibiliUrl,
    extractBvid,
    isBilibiliMediaUrl,
    extractExpiration,
    safeFilename,
    decodeBase64Utf8,
    decodeSnapwcPayload,
    normalizeMediaResults,
  };
})(globalThis);
