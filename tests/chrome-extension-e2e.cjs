const assert = require("assert");
const cp = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const profile = path.join(root, ".tmp-chrome-e2e");
const chromePath = "C:\\Users\\trand\\.cache\\puppeteer\\chrome\\win64-150.0.7871.24\\chrome-win64\\chrome.exe";
const extensionId = "oglffgiaiekgeicdgkdlnlkhliajdlja";
const port = 9333;

assert(fs.existsSync(chromePath), `Chrome not found: ${chromePath}`);
assert.equal(path.dirname(profile), root, "Temporary Chrome profile escaped the workspace");
if (fs.existsSync(profile)) fs.rmSync(profile, { recursive: true, force: true });
fs.mkdirSync(profile, { recursive: true });

const chrome = cp.spawn(chromePath, [
  "--disable-gpu",
  "--enable-logging=stderr",
  "--v=1",
  "--window-position=-32000,-32000",
  "--window-size=900,700",
  "--no-first-run",
  "--no-default-browser-check",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profile}`,
  `--disable-extensions-except=${root}`,
  `--load-extension=${root}`,
  "about:blank",
], { stdio: ["ignore", "ignore", "pipe"], windowsHide: true });

let chromeStderr = "";
chrome.stderr.on("data", (chunk) => { chromeStderr += chunk.toString(); });
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function retry(task, timeout = 20000) {
  const started = Date.now();
  let lastError;
  while (Date.now() - started < timeout) {
    try { return await task(); } catch (error) { lastError = error; await sleep(250); }
  }
  throw lastError || new Error("Timed out");
}

async function json(pathname, init) {
  const response = await fetch(`http://127.0.0.1:${port}${pathname}`, init);
  if (!response.ok) throw new Error(`DevTools HTTP ${response.status}: ${pathname}`);
  return response.json();
}

class Cdp {
  constructor(url) {
    this.url = url;
    this.id = 0;
    this.pending = new Map();
    this.events = [];
  }
  async open() {
    this.ws = new WebSocket(this.url);
    await new Promise((resolve, reject) => {
      this.ws.addEventListener("open", resolve, { once: true });
      this.ws.addEventListener("error", reject, { once: true });
    });
    this.ws.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (message.id) {
        const pending = this.pending.get(message.id);
        if (!pending) return;
        this.pending.delete(message.id);
        message.error ? pending.reject(new Error(message.error.message)) : pending.resolve(message.result);
      } else this.events.push(message);
    });
    await this.send("Runtime.enable");
    await this.send("Log.enable");
    return this;
  }
  send(method, params = {}) {
    const id = ++this.id;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
  }
  async evaluate(expression) {
    const result = await this.send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
    if (result.exceptionDetails) throw new Error(result.exceptionDetails.text || "Evaluation failed");
    return result.result.value;
  }
  extensionErrors() {
    return this.events.flatMap((event) => {
      if (event.method === "Runtime.exceptionThrown") {
        const details = event.params.exceptionDetails;
        const frames = details.stackTrace?.callFrames || [];
        if (!frames.some((frame) => frame.url?.startsWith(`chrome-extension://${extensionId}/`))) return [];
        return [`${details.exception?.description || details.text || "Exception"}\n${frames.map((frame) => frame.url).join("\n")}`];
      }
      if (event.method === "Log.entryAdded" && event.params.entry.level === "error") {
        return [event.params.entry.text];
      }
      if (event.method === "Runtime.consoleAPICalled" && event.params.type === "error") {
        return [event.params.args.map((arg) => arg.value || arg.description || "").join(" ")];
      }
      return [];
    }).filter((message) => /chrome-extension:|Network Error|offline:\/\/|membership|VideoPlayer\.start/i.test(message));
  }
  close() { this.ws?.close(); }
}

async function openTarget(url) {
  return json(`/json/new?${encodeURIComponent(url)}`, { method: "PUT" });
}

async function main() {
  await retry(() => json("/json/version"));
  const startupTargets = await retry(async () => {
    const targets = await json("/json/list");
    if (!targets.some((target) => target.url.startsWith(`chrome-extension://${extensionId}/`))) {
      throw new Error(`No extension target yet: ${JSON.stringify(targets.map((target) => ({ type: target.type, url: target.url })))}`);
    }
    return targets;
  });
  const loadedExtensionTarget = startupTargets.find((target) => target.url.startsWith(`chrome-extension://${extensionId}/`));
  const loadedExtensionId = new URL(loadedExtensionTarget.url).hostname;
  assert.equal(loadedExtensionId, extensionId, `Unexpected extension id from ${loadedExtensionTarget.url}`);

  const popupTarget = await openTarget(`chrome-extension://${extensionId}/popup.html`);
  const popup = await new Cdp(popupTarget.webSocketDebuggerUrl).open();
  await sleep(4000);
  const popupState = await popup.evaluate(`(()=>({
    title:document.title,
    appText:document.querySelector('#app')?.innerText||'',
    language:document.documentElement.lang,
    selector:document.querySelector('[data-dubbing-system-language] select')?.value||null
  }))()`);
  assert(
    popupState.appText.trim().length > 20,
    `Popup application did not render: ${JSON.stringify(popupState)}\n${popup.events.map((event) => JSON.stringify(event)).slice(-20).join("\n")}`,
  );
  assert(popupState.selector, "System-language selector did not render in popup");
  assert.equal(popup.extensionErrors().length, 0, `Popup errors:\n${popup.extensionErrors().join("\n")}`);

  await popup.evaluate(`(async()=>{
    const select=document.querySelector('[data-dubbing-system-language] select');
    select.value='vi';select.dispatchEvent(new Event('change',{bubbles:true}));
    await new Promise(resolve=>setTimeout(resolve,500));
  })()`);
  const vietnameseState = await popup.evaluate(`({
    language:document.documentElement.lang,
    selector:document.querySelector('[data-dubbing-system-language] select')?.value,
    appText:document.querySelector('#app')?.innerText||''
  })`);
  assert.equal(vietnameseState.language, "vi", "Vietnamese document locale was not applied");
  assert.equal(vietnameseState.selector, "vi", "Vietnamese selection was not remembered");
  assert(/Dịch vụ dịch/.test(vietnameseState.appText) && /Lưu/.test(vietnameseState.appText), "Popup text did not switch to Vietnamese");

  const youtubeTarget = await openTarget("https://www.youtube.com/watch?v=boF4cX338k4");
  const youtube = await new Cdp(youtubeTarget.webSocketDebuggerUrl).open();
  await retry(async () => {
    const injected = await youtube.evaluate(`Boolean(document.querySelector('.youtube-dubbing-button,.youtube-dubbing-container,.yd-sidebar-panel'))`);
    if (!injected) throw new Error("TranslateDub controls are not injected yet");
    return true;
  }, 35000);
  const clicked = await youtube.evaluate(`(()=>{
    const button=document.querySelector('.youtube-dubbing-button,.youtube-dubbing-play-btn-img');
    if(!button)return false;(button.closest('button')||button).click();return true;
  })()`);
  assert(clicked, "TranslateDub dubbing button was not clickable");
  await sleep(20000);
  const youtubeErrors = youtube.extensionErrors();
  assert.equal(youtubeErrors.length, 0, `YouTube extension errors:\n${youtubeErrors.join("\n")}`);
  const modal = await youtube.evaluate(`document.querySelector('.swal2-popup')?.innerText||''`);
  assert(!/Network Error/i.test(modal), `Network Error modal is still visible: ${modal}`);

  const targets = await json("/json/list");
  const workerTarget = targets.find((target) => target.type === "service_worker" && target.url.includes(extensionId));
  assert(workerTarget, "Extension service worker was not registered");
  const worker = await new Cdp(workerTarget.webSocketDebuggerUrl).open();
  await sleep(1000);
  assert.equal(worker.extensionErrors().length, 0, `Service-worker errors:\n${worker.extensionErrors().join("\n")}`);

  console.log("Chrome popup OK:", popupState);
  console.log("Runtime language switch OK:", { language: vietnameseState.language, selector: vietnameseState.selector });
  console.log("YouTube injection and dubbing click OK");
  console.log("Extension service worker OK");
  popup.close(); youtube.close(); worker.close();
}

async function removeTemporaryProfile() {
  for (let attempt = 0; attempt < 12; attempt++) {
    try {
      if (fs.existsSync(profile)) fs.rmSync(profile, { recursive: true, force: true });
      return;
    } catch (error) {
      if (attempt === 11) throw error;
      await sleep(500);
    }
  }
}

main().finally(async () => {
  try { cp.execFileSync("taskkill", ["/PID", String(chrome.pid), "/T", "/F"], { stdio: "ignore" }); } catch {}
  await sleep(1000);
  await removeTemporaryProfile();
}).catch((error) => {
  console.error(error.stack || error);
  if (chromeStderr.trim()) {
    const relevant = chromeStderr.split(/\r?\n/).filter((line) => /extension|manifest|TranslateDub|error/i.test(line));
    console.error((relevant.length ? relevant.join("\n") : chromeStderr).slice(-20000));
  }
  process.exitCode = 1;
});
