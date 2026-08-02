/* Bilibili download UI for popup — adds a download section below the Vue app. */
(function installBilibiliPopup(global) {
  "use strict";
  if (global.__BILIBILI_DOWNLOAD_POPUP__) return;
  global.__BILIBILI_DOWNLOAD_POPUP__ = true;

  const api = global.__BILIBILI_DOWNLOAD_API__;
  const runtime = global.chrome?.runtime || global.browser?.runtime;

  const STYLES = `
    #yd-bili-download-section { margin: 10px; padding: 12px; border: 1px solid rgba(120,80,255,.35); border-radius: 10px; background: linear-gradient(160deg,#f6f3ff,#efeaff); font-family: system-ui,sans-serif; }
    #yd-bili-download-section .yd-bili-title { font-size: 13px; font-weight: 700; color: #5b21b6; margin-bottom: 8px; display:flex; align-items:center; gap:6px; }
    #yd-bili-download-section button.yd-bili-btn { width: 100%; margin: 4px 0; padding: 9px; border: 0; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 13px; color: #fff; background: linear-gradient(135deg,#7c3aed,#6366f1); }
    #yd-bili-download-section button.yd-bili-btn:hover { filter: brightness(1.1); }
    #yd-bili-download-section button.yd-bili-btn:disabled { opacity: .5; cursor: not-allowed; }
    #yd-bili-download-section .yd-bili-status { font-size: 12px; color: #555; margin: 6px 0; line-height: 1.4; white-space: pre-line; }
    #yd-bili-download-section .yd-bili-result { display: flex; align-items: center; gap: 6px; margin: 5px 0; padding: 8px; border: 1px solid #ddd; border-radius: 8px; background: #fff; }
    #yd-bili-download-section .yd-bili-result .yd-bili-meta { flex: 1; font-size: 12px; color: #333; line-height: 1.3; }
    #yd-bili-download-section .yd-bili-result .yd-bili-meta b { color: #4c1d95; }
    #yd-bili-download-section .yd-bili-small { font-size: 11px; padding: 5px 8px; border: 0; border-radius: 6px; cursor: pointer; background: #eee; color: #333; }
    #yd-bili-download-section .yd-bili-small:hover { background: #ddd; }
    #yd-bili-download-section .yd-bili-cover { width: 64px; height: 40px; object-fit: cover; border-radius: 5px; }
  `;

  function injectStyle() {
    if (document.getElementById("yd-bili-style")) return;
    const s = document.createElement("style");
    s.id = "yd-bili-style";
    s.textContent = STYLES;
    (document.head || document.documentElement).appendChild(s);
  }

  function statusEl() {
    return document.getElementById("yd-bili-status");
  }

  function setStatus(text) {
    const el = statusEl();
    if (el) el.textContent = text;
  }

  function renderResults(data) {
    const list = document.getElementById("yd-bili-results");
    if (!list) return;
    list.innerHTML = "";
    if (!data || !Array.isArray(data.results) || data.results.length === 0) {
      setStatus("Không tìm thấy nguồn video phù hợp.");
      return;
    }
    const cover = data.cover
      ? `<img class="yd-bili-cover" src="${data.cover}" alt="cover"/>`
      : "";
    const header = document.createElement("div");
    header.className = "yd-bili-title";
    header.innerHTML = `${cover}<span>${data.title || "Bilibili video"}</span>`;
    list.appendChild(header);

    data.results.forEach((r) => {
      const row = document.createElement("div");
      row.className = "yd-bili-result";
      const kindLabel =
        r.kind === "video_audio" ? "Video + audio"
        : r.kind === "video" ? "Video (không âm thanh)"
        : r.kind === "audio" ? "Audio"
        : r.kind === "cover" ? "Ảnh bìa"
        : r.kind;
      const exp = r.expiresAt
        ? `<div style="color:#b45309;font-size:11px;">Hết hạn lúc: ${new Date(r.expiresAt).toLocaleTimeString()}</div>`
        : "";
      const meta = document.createElement("div");
      meta.className = "yd-bili-meta";
      meta.innerHTML = `<div><b>${kindLabel}</b> ${r.qualityLabel ? "· " + r.qualityLabel : ""} ${r.extension ? "· " + r.extension : ""}${r.size ? " · " + Math.round(r.size/1048576) + " MB" : ""}</div>${exp}`;
      row.appendChild(meta);

      const copyBtn = document.createElement("button");
      copyBtn.className = "yd-bili-small";
      copyBtn.textContent = "Sao chép";
      copyBtn.onclick = () => {
        navigator.clipboard?.writeText(r.url).then(
          () => setStatus("Đã sao chép URL."),
          () => setStatus("Không sao chép được."),
        );
      };
      const openBtn = document.createElement("button");
      openBtn.className = "yd-bili-small";
      openBtn.textContent = "Mở";
      openBtn.onclick = () => {
        runtime?.tabs?.create({ url: r.url, active: true });
      };
      const dlBtn = document.createElement("button");
      dlBtn.className = "yd-bili-small";
      dlBtn.textContent = "Tải";
      dlBtn.onclick = () => {
        dlBtn.disabled = true;
        dlBtn.textContent = "Đang tải...";
        runtime?.sendMessage({ type: "BILIBILI_DOWNLOAD_FILE", url: r.url, filename: api.safeFilename(data.title || "bilibili", r.extension), timestamp: Date.now() }, (resp) => {
          dlBtn.disabled = false;
          dlBtn.textContent = "Tải";
          if (resp && resp.ok) setStatus("Đã bắt đầu tải xuống.");
          else setStatus(resp && resp.error ? "Tải lỗi: " + resp.error : "Tải lỗi.");
        });
      };
      row.appendChild(copyBtn);
      row.appendChild(openBtn);
      row.appendChild(dlBtn);
      list.appendChild(row);
    });
    setStatus(`Đã tìm thấy ${data.results.length} nguồn.`);
  }

  async function getActiveTab() {
    return new Promise((resolve) => {
      runtime?.tabs?.query({ active: true, currentWindow: true }, (tabs) => resolve(tabs && tabs[0]));
    });
  }

  async function refreshButton() {
    const section = document.getElementById("yd-bili-download-section");
    const btn = document.getElementById("yd-bili-download-btn");
    if (!section || !btn) return;
    const tab = await getActiveTab();
    if (!tab || !tab.url) {
      section.style.display = "none";
      return;
    }
    const norm = api.normalizeBilibiliUrl(tab.url);
    if (!norm.ok || !api.extractBvid(tab.url)) {
      section.style.display = "none";
      return;
    }
    section.style.display = "block";
    btn.onclick = () => {
      btn.disabled = true;
      btn.textContent = "Đang phân tích...";
      setStatus("Đang gọi API Bilibili...");
      runtime?.sendMessage({ type: "BILIBILI_DOWNLOAD", url: tab.url, timestamp: Date.now() }, (resp) => {
        btn.disabled = false;
        btn.textContent = "Lấy link tải";
        if (resp && resp.ok) renderResults(resp.data);
        else setStatus("Lỗi: " + (resp && resp.error ? resp.error : "UNKNOWN_ERROR"));
      });
    };
  }

  function mount() {
    injectStyle();
    if (document.getElementById("yd-bili-download-section")) return;
    const section = document.createElement("div");
    section.id = "yd-bili-download-section";
    section.style.display = "none";
    section.innerHTML = `
      <div class="yd-bili-title">📥 Bilibili Download</div>
      <button id="yd-bili-download-btn" class="yd-bili-btn">Lấy link tải</button>
      <div id="yd-bili-status" class="yd-bili-status"></div>
      <div id="yd-bili-results"></div>
    `;
    const app = document.getElementById("app");
    (app ? app.parentNode : document.body).appendChild(section);
    refreshButton();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount, { once: true });
  } else {
    mount();
  }
})(globalThis);
