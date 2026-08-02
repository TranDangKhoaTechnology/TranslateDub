/* Bilibili download background handler — direct Bilibili API (view + playurl). */
(function installBilibiliDownloadBg(global) {
  "use strict";
  if (global.__BILIBILI_DOWNLOAD_BG__) return;
  global.__BILIBILI_DOWNLOAD_BG__ = true;

  const api = global.__BILIBILI_DOWNLOAD_API__;
  const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36";

  async function biliFetch(url, extraHeaders) {
    const res = await fetch(url, {
      headers: {
        "User-Agent": UA,
        "Referer": "https://www.bilibili.com/",
        ...(extraHeaders || {}),
      },
    });
    if (!res.ok) throw new Error("BILI_HTTP_" + res.status);
    return res;
  }

  async function getVideoInfo(bvid) {
    const res = await biliFetch(
      "https://api.bilibili.com/x/web-interface/view?bvid=" + encodeURIComponent(bvid),
    );
    const data = await res.json();
    if (data.code !== 0 || !data.data) throw new Error("BILI_VIEW_FAILED:" + (data.message || data.code));
    const d = data.data;
    return {
      bvid,
      aid: d.aid,
      cid: d.cid,
      title: d.title || "Bilibili video",
      duration: d.duration,
      cover: d.pic || "",
      pages: (d.pages || []).map((p) => ({ page: p.page, cid: p.cid, part: p.part })),
    };
  }

  async function getPlayInfo(bvid, cid, qn = 64) {
    const res = await biliFetch(
      "https://api.bilibili.com/x/player/playurl?bvid=" +
        encodeURIComponent(bvid) +
        "&cid=" +
        encodeURIComponent(cid) +
        "&qn=" +
        qn +
        "&fnval=16&platform=html5&high_quality=1",
    );
    const data = await res.json();
    if (data.code !== 0 || !data.data) throw new Error("BILI_PLAYURL_FAILED:" + (data.message || data.code));
    const dd = data.data;
    const results = [];
    // Progressive (merged mp4)
    for (const u of dd.durl || []) {
      if (api.isBilibiliMediaUrl(u.url)) {
        results.push({
          id: "video_" + results.length,
          title: "Bilibili video",
          kind: "video_audio",
          qualityLabel: "Quality " + (dd.quality || qn),
          extension: (u.url.match(/\.(\w+)(?:\?|$)/) || [])[1] || "mp4",
          protocol: "https",
          size: u.size || undefined,
          url: u.url,
          expiresAt: api.extractExpiration(u.url),
          source: "bilibili_playurl",
        });
      }
    }
    // DASH video-only + audio-only
    const dash = dd.dash || {};
    const pick = (arr) => arr && arr[0] ? { ...arr[0], baseUrl: arr[0].baseUrl || arr[0].base_url } : null;
    const vid = pick(dash.video);
    const aud = pick(dash.audio);
    if (vid && api.isBilibiliMediaUrl(vid.baseUrl)) {
      results.push({
        id: "video_" + results.length,
        title: "Bilibili video",
        kind: "video",
        qualityLabel: "Video " + (vid.id || ""),
        extension: vid.mimeType ? vid.mimeType.split("/")[1] : "mp4",
        protocol: "https",
        size: vid.bandwidth ? Math.round(Number(vid.bandwidth) / 8) : undefined,
        url: vid.baseUrl,
        expiresAt: api.extractExpiration(vid.baseUrl),
        source: "bilibili_playurl",
      });
    }
    if (aud && api.isBilibiliMediaUrl(aud.baseUrl)) {
      results.push({
        id: "audio_" + results.length,
        title: "Bilibili audio",
        kind: "audio",
        qualityLabel: "Audio " + (aud.id || ""),
        extension: aud.mimeType ? aud.mimeType.split("/")[1] : "m4a",
        protocol: "https",
        size: aud.bandwidth ? Math.round(Number(aud.bandwidth) / 8) : undefined,
        url: aud.baseUrl,
        expiresAt: api.extractExpiration(aud.baseUrl),
        source: "bilibili_playurl",
      });
    }
    if (results.length === 0) throw new Error("NO_MEDIA_FOUND");
    return results;
  }

  async function parseBilibili(inputUrl) {
    const norm = api.normalizeBilibiliUrl(inputUrl);
    if (!norm.ok) throw new Error(norm.error);
    const bvid = api.extractBvid(norm.url);
    if (!bvid) throw new Error("UNSUPPORTED_URL");
    const info = await getVideoInfo(bvid);
    const results = await getPlayInfo(bvid, info.cid);
    return {
      title: info.title,
      cover: info.cover,
      sourceUrl: norm.url,
      results,
    };
  }

  const runtime = global.chrome?.runtime || global.browser?.runtime;
  runtime?.onMessage?.addListener((message, _sender, sendResponse) => {
    if (message?.type !== "BILIBILI_DOWNLOAD") return undefined;
    parseBilibili(message.url)
      .then((data) => sendResponse({ ok: true, data }))
      .catch((error) => {
        const code = String(error?.message || error || "UNKNOWN_ERROR");
        sendResponse({ ok: false, error: code });
      });
    return true;
  });

  runtime?.onMessage?.addListener((message, _sender, sendResponse) => {
    if (message?.type !== "BILIBILI_DOWNLOAD_FILE") return undefined;
    const url = String(message.url || "");
    const filename = api.safeFilename(message.filename || "bilibili-video", undefined);
    if (!api.isBilibiliMediaUrl(url) && !url.startsWith("blob:")) {
      sendResponse({ ok: false, error: "INVALID_MEDIA_URL" });
      return;
    }
    const chromeApi = global.chrome || global.browser;
    if (!chromeApi?.downloads?.download) {
      sendResponse({ ok: false, error: "DOWNLOAD_UNAVAILABLE" });
      return;
    }
    try {
      chromeApi.downloads.download(
        { url, filename, saveAs: true, conflictAction: "uniquify" },
        (downloadId) => {
          if (global.chrome?.runtime?.lastError) {
            sendResponse({ ok: false, error: String(global.chrome.runtime.lastError.message) });
            return;
          }
          sendResponse({ ok: true, downloadId });
        },
      );
      return true;
    } catch (e) {
      sendResponse({ ok: false, error: String(e?.message || e) });
      return;
    }
  });
})(globalThis);
