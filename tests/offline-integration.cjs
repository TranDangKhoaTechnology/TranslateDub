const assert = require("assert");
const crypto = require("crypto");
const cp = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "manifest.json"), "utf8"));
function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    if (file === ".git" || file === "node_modules") return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else {
      results.push(path.relative(root, fullPath).replace(/\\/g, "/"));
    }
  });
  return results;
}

const allFiles = getFiles(root);
const jsFiles = allFiles.filter((file) => file.endsWith(".js"));

for (const file of jsFiles) {
  const bytes = fs.readFileSync(path.join(root, file));
  const source = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  assert(!source.includes(" ? ? "), `${file} contains a beautifier-corrupted nullish operator`);
  assert(!source.includes("\\ u"), `${file} contains a beautifier-corrupted Unicode escape`);
  for (const character of source) {
    const codePoint = character.codePointAt(0);
    const nonCharacter = (codePoint >= 0xfdd0 && codePoint <= 0xfdef)
      || (codePoint & 0xffff) === 0xfffe
      || (codePoint & 0xffff) === 0xffff;
    assert(!nonCharacter, `${file} contains a Unicode noncharacter rejected by Chrome`);
  }
  cp.execFileSync(process.execPath, ["--check", file], { cwd: root, stdio: "pipe" });
}

const searchableFiles = allFiles.filter((file) => /\.(?:js|json|html|css|svg)$/i.test(file));
const allText = searchableFiles.map((file) => fs.readFileSync(path.join(root, file), "utf8")).join("\n");
const removedNamePattern = new RegExp(["trans", "duck"].join(""), "i");
assert(!removedNamePattern.test(allText), "A removed domain/name is still present");
assert(!allText.includes(["off", "line://local"].join("")), "The obsolete custom URL protocol remains");

const bundles = jsFiles.filter((file) => file !== "offline-core.js")
  .map((file) => fs.readFileSync(path.join(root, file), "utf8")).join("\n");
assert(!bundles.includes("globalThis.__DUBBING_I18N_READY__.then"), "A content bundle still assumes the i18n readiness Promise exists");
assert(!bundles.includes('username:"Local"'), "A fake local account remains");
assert(
  fs.readFileSync(path.join(root, "offline-core.js"), "utf8").includes("__DUBBING_GET_COMMUNITY_MEMBER__"),
  "The shared community-access provider is missing",
);
const offlineCoreSource = fs.readFileSync(path.join(root, "offline-core.js"), "utf8");
const backgroundSource = fs.readFileSync(path.join(root, "background.js"), "utf8");
assert(
  offlineCoreSource.includes("let googleTtsBlockedUntil = 0") &&
    offlineCoreSource.includes("googleTtsBlockedUntil = Date.now() + 60 * 1000"),
  "Google TTS 429 responses are not protected by a cooldown",
);
assert(
  backgroundSource.includes("__translateDubGetAzureEndpointLease") &&
    backgroundSource.includes("disableGoogleFallback: true") &&
    backgroundSource.includes("voiceLocaleMatch"),
  "Background Azure TTS does not preserve voice locale or still performs a hidden Google fallback",
);
assert(
  backgroundSource.includes("__DUBBING_SYNTHESIZE_AZURE_TTS__") &&
    offlineCoreSource.includes("dubbingReq?.config?.voice"),
  "Website dubbing does not preserve the selected Azure voice",
);
assert(
  !offlineCoreSource.includes("if (exactLabels.test(label)) node.remove()"),
  "Account cleanup still removes Vue-owned DOM nodes",
);
assert(
  !/async getMember\(\)\s*\{\s*return \{\s*exists: !1,\s*balance: 0/.test(bundles),
  "A bundle still defaults users to a restricted free account",
);
for (const parts of [["membership", "getMembership"], ["membership", "getPopupInfo"], ["log", "Out"]]) {
  const remoteAuthPath = `/api/v2/${parts.join("/").replace("log/Out", "logOut")}`;
  assert(!bundles.includes(remoteAuthPath), `Remote auth path remains: ${remoteAuthPath}`);
}
assert(!/\.post\(`?\/api\/v2\/translateAll/.test(bundles), "A translate path still uses Axios");
assert.equal(
  (bundles.match(/defaults\.adapter=globalThis\.__DUBBING_AXIOS_ADAPTER__/g) || []).length,
  (bundles.match(/defaults\.adapter=/g) || []).length,
  "Every bundled Axios instance must use the offline adapter",
);
const injectedSource = fs.readFileSync(path.join(root, "injectScript.js"), "utf8");
assert(!injectedSource.includes("fetch(e,r).catch(()=>fetch(e,r))"), "Immediate timedtext fetch retry remains");
assert(!/xr\(e,\{credentials:"include"\}\)\.catch\([^)]*=>xr/.test(injectedSource), "Immediate clean-fetch retry remains");
assert(
  injectedSource.includes("this.cleanFetchFrame = t, this.cleanFetch = e.fetch.bind(e)"),
  "Clean fetch must stay bound to a live iframe window",
);
assert(
  injectedSource.includes("subtitle preload failed; preserving metadata"),
  "Subtitle preload failures must not terminate the metadata observable",
);
assert.equal((injectedSource.match(/__DUBBING_TIMEDTEXT_FETCH__/g) || []).length, 4, "Timedtext guard is not wired into both paths");
assert.equal(manifest.background.service_worker, "background-entry.js");
for (const entry of manifest.content_scripts) {
  if (entry.world === "MAIN") {
    assert.equal(entry.js?.[0], "timedtext-guard.js", "The MAIN-world timedtext guard is missing");
  } else {
    assert.deepEqual(
      entry.js?.slice(0, 3),
      ["runtime-i18n-data.js", "runtime-i18n.js", "offline-core.js"],
      "Runtime localization and offline core must load before every content script",
    );
  }
}
for (const file of [
  "content-scripts/content.js",
  "content-scripts/googleDriveButton.js",
  "content-scripts/metadata.js",
  "content-scripts/sidebar.js",
]) {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  assert(source.startsWith("/* DUBBING_I18N_READY */"), `${file} has no guarded bootstrap`);
  assert(source.includes("Promise.resolve(globalThis.__DUBBING_I18N_READY__).then"), `${file} cannot start without the i18n bootstrap`);
}
for (const page of ["popup.html", "options.html", "local-player.html"]) {
  const html = fs.readFileSync(path.join(root, page), "utf8");
  assert(html.indexOf("/runtime-i18n-data.js") >= 0, `${page} does not load locale data`);
  assert(html.indexOf("/runtime-i18n.js") >= 0, `${page} does not load runtime localization`);
  assert(html.indexOf("/offline-core.js") >= 0, `${page} does not load the offline core`);
  assert(html.indexOf("/offline-core.js") < html.indexOf('type="module"'), `${page} loads its module too early`);
}
assert(
  !fs.readFileSync(path.join(root, "local-player.html"), "utf8").includes("/assets/theme-upgrade.css"),
  "local-player.html still loads the global theme override",
);
const localPlayerBundle = fs.readFileSync(path.join(root, "chunks/local-player-C_4uyEHf.js"), "utf8");
const realtimeDubbingBundle = fs.readFileSync(path.join(root, "chunks/RealtimeDubbingEngine-OZ9Qr4p3.js"), "utf8");
const websiteContentBundle = fs.readFileSync(path.join(root, "content-scripts/content.js"), "utf8");
assert(
  realtimeDubbingBundle.includes('t.startsWith("data:")') &&
    realtimeDubbingBundle.includes('return Yr(n.replace(/\\s/g, ""))') &&
    websiteContentBundle.includes('e.startsWith("data:")') &&
    websiteContentBundle.includes('return Y2e(i.replace(/\\s/g, ""))'),
  "Inline TTS data URLs are still fetched instead of decoded directly",
);
assert(
  realtimeDubbingBundle.includes('l.slice(0,48)') && websiteContentBundle.includes('u.slice(0, 48)'),
  "Audio provider errors can still dump an entire base64 recording to the console",
);
assert(
  realtimeDubbingBundle.includes('b(this, "retryPolicy", sr(lr, {\n            maxAttempts: 1,'),
  "Realtime dubbing can still retry a failed TTS batch for too long",
);
assert(
  fs.readFileSync(path.join(root, "content-scripts/content.js"), "utf8").includes('"retryPolicy",\n          lE(oE, {\n            maxAttempts: 1,'),
  "Website realtime dubbing can still retry a failed TTS batch for too long",
);
assert(
  fs.readFileSync(path.join(root, "content-scripts/content.js"), "utf8").includes("const failedEngine = this.dubbingEngine;") &&
    fs.readFileSync(path.join(root, "content-scripts/content.js"), "utf8").includes("await failedEngine.destroy(!0)"),
  "A failed website dubbing start can leave a ghost engine restarting forever",
);
assert(
  localPlayerBundle.includes("checkNeedsSegmentation: deferLongVideoTranslation ? () => !1") &&
    fs.readFileSync(path.join(root, "content-scripts/content.js"), "utf8").includes("checkNeedsSegmentation: deferLongVideoTranslation"),
  "Long videos still block startup by translating every subtitle up front",
);
const localPlayerFixesCss = fs.readFileSync(path.join(root, "assets/local-player-fixes.css"), "utf8");
assert(
  !/\.swal2-(?:select|input|textarea)[^{]*\{[^}]*display:\s*block\s*!important/s.test(localPlayerFixesCss),
  "Local-player CSS forces unused SweetAlert controls to appear",
);
assert(
  localPlayerBundle.includes('role="status" aria-live="polite"')
    && localPlayerBundle.includes("localPlayerDubbingTranslating")
    && localPlayerBundle.includes("localPlayerDubbingCreatingVoice"),
  "Local dubbing does not expose accessible, phase-based progress",
);
assert(
  localPlayerBundle.includes('typeof e.showSubtitle == "boolean" ? e.showSubtitle : !0')
    && localPlayerBundle.includes("localPlayerShowSubtitles")
    && localPlayerBundle.includes("localPlayerBilingualSubtitles"),
  "Local-player subtitle display settings are missing or disabled by default",
);
assert(
  !localPlayerBundle.includes("navigator.mediaDevices.getDisplayMedia")
    && localPlayerBundle.includes("HTMLCanvasElement.prototype.captureStream")
    && localPlayerBundle.includes("H.ctx.createMediaStreamDestination()")
    && localPlayerBundle.includes("H.masterGain.connect(Nn)")
    && localPlayerBundle.includes("localPlayerRecordDubbedVideo")
    && localPlayerBundle.includes("-dubbed.webm"),
  "Local-player direct dubbed-video export is missing or still captures the screen",
);
assert(
  localPlayerBundle.includes("H.contains(ne) || (he.value = !1)"),
  "Local-player dragleave must ignore transitions between descendants",
);
assert(
  localPlayerBundle.includes("await $c(H, z.value || void 0)"),
  "Dropping a subtitle while its manager is open must associate it with that video",
);
assert(
  /\.local-player\.dragging::after\s*\{[^}]*pointer-events:\s*none/.test(localPlayerFixesCss),
  "Local-player drop overlay must not intercept drag events",
);
assert(
  manifest.content_scripts.some((entry) => entry.css?.includes("content-scripts/translate-dub-overrides.css")),
  "TranslateDub-owned overlay styles are not loaded",
);
assert(
  !fs.readFileSync(path.join(root, "runtime-i18n.js"), "utf8").includes(".swal2-container,.toastify"),
  "Runtime localization still treats host-page overlays as extension UI",
);
assert(
  fs.readFileSync(path.join(root, "content-scripts/content.js"), "utf8")
    .includes("@scope (.youtube-dubbing-swal-container)"),
  "Runtime SweetAlert styles are not scoped to TranslateDub",
);
const contentCss = fs.readFileSync(path.join(root, "content-scripts/content.css"), "utf8");
assert(
  !/\.swal2-(?:select|input|textarea)[^{]*\{[^}]*display:\s*block\s*!important/s.test(
    fs.readFileSync(path.join(root, "content-scripts/translate-dub-overrides.css"), "utf8"),
  ),
  "Content-script CSS forces unused SweetAlert controls to appear",
);
assert(
  contentCss.includes("@scope (.youtube-dubbing-swal-container){.swal2-popup"),
  "Extracted SweetAlert styles are not scoped to TranslateDub",
);
assert(
  !/(^|})\.swal2-popup \.swal2-actions button/.test(contentCss),
  "An unscoped SweetAlert override can still affect host websites",
);
assert(!bundles.includes('/api/v2/watchLog/save'), "Remote watch logging remains");

function runRuntimeI18nSmoke() {
  const source = `
    let changed;
    global.chrome={i18n:{getUILanguage:()=>\"en-US\",getMessage:()=>\"\"},storage:{
      local:{get:async()=>({systemLanguage:\"vi\"}),set:async()=>{}},
      onChanged:{addListener(listener){changed=listener}}
    }};
    require('./runtime-i18n-data.js');
    require('./runtime-i18n.js');
    global.__DUBBING_I18N_READY__.then(()=>{
      if(global.__DUBBING_I18N_GET_UI_LANGUAGE__()!==\"vi\")throw new Error('saved locale was not restored');
      if(global.__DUBBING_I18N_GET_MESSAGE__('advancedSettings')!==\"Cài đặt nâng cao\")throw new Error('Vietnamese message mismatch');
      changed({systemLanguage:{newValue:\"en\"}},\"local\");
      if(global.__DUBBING_I18N_GET_MESSAGE__('advancedSettings')!==\"Advanced Settings\")throw new Error('live language change failed');
      console.log('runtime i18n OK');
    }).catch(e=>{console.error(e);process.exit(1)});
  `;
  return cp.execFileSync(process.execPath, ["-e", source], { cwd: root, encoding: "utf8" }).trim();
}

function runTtsBridgeSmoke() {
  const source = `
    global.chrome={runtime:{
      getURL:path=>'chrome-extension://test/'+path,
      sendMessage(message,callback){
        if(message.type!=='DUBBING_OFFLINE_TTS')throw new Error('unexpected message '+message.type);
        callback({ok:true,audioBase64:'SUQzBAAAAAA=',contentType:'audio/mpeg'});
      }
    }};
    global.fetch=async()=>{throw new Error('content script must not fetch TTS directly')};
    require('./offline-core.js');
    global.__DUBBING_GOOGLE_TTS_FALLBACK__('Xin chào','vi').then(audio=>{
      if(audio.audioBase64!=='SUQzBAAAAAA='||audio.contentType!=='audio/mpeg')throw new Error('TTS bridge response mismatch');
      console.log('background TTS bridge OK');
    }).catch(e=>{console.error(e);process.exit(1)});
  `;
  return cp.execFileSync(process.execPath, ["-e", source], { cwd: root, encoding: "utf8" }).trim();
}

function runOfflineCoreSmoke() {
  const source = `
    global.__DUBBING_OFFLINE_BACKGROUND__=true;
    global.chrome={runtime:{getURL:path=>'chrome-extension://test/'+path,onMessage:{addListener(){}}},storage:{local:{
      get:async()=>({settings:{translateEngine:'gpt-5.4',voicesType:'azure',toLanguage:'vi'}}),
      set:async()=>{throw new Error('community mode must not downgrade selected models')}
    }}};
    let ttsFetchCount=0;
    global.fetch=async u=>{
      if(String(u).startsWith('https://translate.googleapis.com/'))
        return new Response(JSON.stringify([[['Xin chào']]]),{status:200,headers:{'Content-Type':'application/json'}});
      if(String(u).startsWith('https://translate.google.com/translate_tts')) {
        ttsFetchCount++;
        return new Response(new Uint8Array([73,68,51,4,0,0,0,0]),{status:200,headers:{'Content-Type':'audio/mpeg'}});
      }
      throw new Error('unexpected network '+u)
    };
    require('./offline-core.js');
    (async()=>{
      const base=global.__DUBBING_LOCAL_API_BASE__;
      const translated=await fetch(base+'/api/v2/translateAll?language=en&to=vi',{method:'POST',body:JSON.stringify(['Hello'])}).then(r=>r.json());
      if(translated.translations?.[0]?.text!=='Xin chào')throw new Error('translation response mismatch');
      const chain=await fetch(base+'/api/v2/dubbing/resolveChain',{method:'POST'}).then(r=>r.json());
      if(chain.chain!=='BACKEND_GENERATE_DUBBING')throw new Error('direct offline dubbing route mismatch');
      const fallback=await fetch(base+'/api/v2/dubbing/fallbackTts',{method:'POST',body:JSON.stringify({dubbingRequest:{config:{toLanguage:'vi'},subtitles:[{index:3,translation:'Xin chào'}]}})}).then(r=>r.json());
      const fallbackItem=fallback.subtitleDubbingResults?.[0];
      if(fallbackItem?.index!==3||fallbackItem?.translateResult!=='Xin chào'||!fallbackItem?.ttsUrl?.startsWith('data:audio/mpeg;base64,'))throw new Error('self-contained fallback TTS mismatch');
      const direct=await fetch(base+'/api/v2/dubbing/generateDubbing',{method:'POST',body:JSON.stringify({config:{toLanguage:'vi'},subtitles:[{index:5,text:'Xin chào'}]})}).then(r=>r.json());
      if(!direct.subtitleDubbingResults?.[0]?.ttsUrl?.startsWith('data:audio/mpeg;base64,'))throw new Error('direct offline dubbing response mismatch');
      const fetchesBeforeLongTts=ttsFetchCount;
      await fetch(base+'/api/v2/dubbing/fallbackTts',{method:'POST',body:JSON.stringify({dubbingRequest:{config:{toLanguage:'vi'},subtitles:[{index:9,translation:'甲'.repeat(400)}]}})}).then(r=>r.json());
      if(ttsFetchCount-fetchesBeforeLongTts<3)throw new Error('long TTS text was not split into safe chunks');
      const member=await fetch(base+'/api/v2/membership/getPopupInfo').then(r=>r.json());
      if(!member.exists||member.balance<=0||member.membership?.level<0||!member.community)throw new Error('community access mismatch');
      const userSubtitles=await fetch(base+'/api/v2/subtitle/getUserSubtitleList?videoId=local-test').then(r=>r.json());
      if(!Array.isArray(userSubtitles.subtitles)||userSubtitles.isUserEdited!==false)throw new Error('user subtitle response mismatch');
      const aiSubtitles=await fetch(base+'/api/v2/subtitle/getYoutubeSubtitleList?videoId=local-test&version=1.0').then(r=>r.json());
      if(!Array.isArray(aiSubtitles))throw new Error('AI subtitle response mismatch');
      const taskStatus=await fetch(base+'/api/v2/subtitle/checkCommonTaskSubmitted?videoId=local-test').then(r=>r.json());
      if(taskStatus.submitted!==false)throw new Error('subtitle task status mismatch');
      const voiceSegments=await fetch(base+'/api/v2/voiceClone/queryVoiceSegments?videoId=bili-test').then(r=>r.json());
      if(!Array.isArray(voiceSegments)||voiceSegments.length!==0)throw new Error('voice segments offline response mismatch');
      const ai=await fetch(base+'/api/v2/ai-translate/translate',{method:'POST',body:JSON.stringify({toLanguage:'vi',subtitles:[{index:7,text:'Hello'}]})}).then(r=>r.json());
      if(ai.subtitleTranslateResults?.[0]?.index!==7)throw new Error('AI compatibility response mismatch');
      const chainRuntime=await fetch(base+'/api/v2/pronunciation-preference/runtime?targetLocale=vi').then(r=>r.json());
      if(!Array.isArray(chainRuntime.rules))throw new Error('pronunciation response mismatch');
      const axiosResult=await global.__DUBBING_AXIOS_ADAPTER__({
        baseURL:base,url:'/api/v2/watchLog/save',method:'post',data:'{}',
        headers:{toJSON:()=>({'Content-Type':'application/json'})},withCredentials:true
      });
      if(axiosResult.status!==204||axiosResult.data!=='')throw new Error('Axios offline adapter mismatch');
      console.log('offline core OK');
    })().catch(e=>{console.error(e);process.exit(1)});
  `;
  return cp.execFileSync(process.execPath, ["-e", source], { cwd: root, encoding: "utf8" }).trim();
}

function runContentBridgeSmoke() {
  const source = `
    global.chrome={runtime:{getURL:path=>'chrome-extension://test/'+path,
      sendMessage:(message,callback)=>callback({ok:true,translations:message.texts.map(text=>'VI:'+text)}),
      lastError:null
    },storage:{local:{get:async()=>({}),set:async()=>{}}}};
    global.fetch=async u=>{throw new Error('content context made a direct network call: '+u)};
    require('./offline-core.js');
    fetch(global.__DUBBING_LOCAL_API_BASE__+'/api/v2/translateAll?language=en&to=vi',{method:'POST',body:JSON.stringify(['Hello','World'])})
      .then(r=>r.json()).then(result=>{
        if(result.translations.map(x=>x.text).join('|')!=='VI:Hello|VI:World')throw new Error('bridge response mismatch');
        console.log('content bridge OK');
      }).catch(e=>{console.error(e);process.exit(1)});
  `;
  return cp.execFileSync(process.execPath, ["-e", source], { cwd: root, encoding: "utf8" }).trim();
}

function runTimedtextGuardSmoke() {
  const source = `
    let calls=0;
    require('./timedtext-guard.js');
    const okFetcher=async()=>{calls++;return new Response('caption data',{status:200})};
    (async()=>{
      const results=await Promise.all(Array.from({length:6},()=>global.__DUBBING_TIMEDTEXT_FETCH__('https://www.youtube.com/api/timedtext?v=test',{},okFetcher)));
      if(calls!==1)throw new Error('concurrent requests were not deduplicated: '+calls);
      if((await Promise.all(results.map(r=>r.text()))).some(x=>x!=='caption data'))throw new Error('response clone mismatch');
      await global.__DUBBING_TIMEDTEXT_FETCH__('https://www.youtube.com/api/timedtext?v=test',{},okFetcher);
      if(calls!==1)throw new Error('successful response was not cached');
      let limitedCalls=0;
      const limitedFetcher=async()=>{limitedCalls++;return new Response('',{status:429})};
      await global.__DUBBING_TIMEDTEXT_FETCH__('https://www.youtube.com/api/timedtext?v=limited',{},limitedFetcher);
      await global.__DUBBING_TIMEDTEXT_FETCH__('https://www.youtube.com/api/timedtext?v=limited',{},limitedFetcher);
      if(limitedCalls!==1)throw new Error('429 cooldown failed: '+limitedCalls);
      console.log('timedtext guard OK');
    })().catch(e=>{console.error(e);process.exit(1)});
  `;
  return cp.execFileSync(process.execPath, ["-e", source], { cwd: root, encoding: "utf8" }).trim();
}

async function testGoogleTranslate() {
  const query = new URLSearchParams({ client: "gtx", sl: "en", tl: "vi", dt: "t", q: "Hello world" });
  const response = await fetch(`https://translate.googleapis.com/translate_a/single?${query}`, {
    signal: AbortSignal.timeout(15000),
  });
  assert(response.ok, `Google Translate returned HTTP ${response.status}`);
  const payload = await response.json();
  const text = payload?.[0]?.map((part) => part?.[0] || "").join("");
  assert(text && text !== "Hello world", "Google Translate returned no translation");
  return text;
}

function edgeSignature(endpoint, date = new Date()) {
  const appId = "MSTranslatorAndroidApp";
  const secret = Buffer.from("oik6PdDdMnOXemTbwvMn9de/h9lFnfBaCWbGMMZqqoSaQaqUOqjVGm5NqsmjcBI1x+sS9ugjB55HEJWRiFXYFw==", "base64");
  const requestId = crypto.randomUUID().replaceAll("-", "");
  const formattedDate = date.toUTCString().replace(/GMT/, "").trim().toLowerCase() + " GMT";
  const encodedEndpoint = encodeURIComponent(endpoint.split("://")[1] || "");
  const value = (appId + encodedEndpoint + formattedDate + requestId).toLowerCase();
  const digest = crypto.createHmac("sha256", secret).update(value).digest("base64");
  return { requestId, value: `${appId}::${digest}::${formattedDate}::${requestId}` };
}

async function testEdgeTts() {
  const endpoint = "https://dev.microsofttranslator.com/apps/endpoint?api-version=1.0";
  const signed = edgeSignature(endpoint);
  const tokenResponse = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Accept-Language": "zh-Hans",
      "X-ClientVersion": "4.0.530a 5fe1dc6c",
      "X-UserId": "0f04d16a175c411e",
      "X-HomeGeographicRegion": "zh-Hans-CN",
      "X-ClientTraceId": signed.requestId,
      "X-MT-Signature": signed.value,
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0",
      "Content-Type": "application/json; charset=utf-8",
    },
    body: "",
    signal: AbortSignal.timeout(20000),
  });
  if (!tokenResponse.ok) {
    throw new Error(`Edge token returned HTTP ${tokenResponse.status}: ${await tokenResponse.text()}`);
  }
  const endpointToken = await tokenResponse.json();
  assert(endpointToken.t && endpointToken.r, "Edge token payload is incomplete");

  const results = {};
  await Promise.all(["vi-VN-NamMinhNeural", "vi-VN-HoaiMyNeural"].map(async (voice) => {
    const ssml = `<speak version="1.0" xml:lang="vi-VN"><voice name="${voice}">Xin chào, đây là bài kiểm tra lồng tiếng.</voice></speak>`;
    const audioResponse = await fetch(`https://${endpointToken.r}.tts.speech.microsoft.com/cognitiveservices/v1`, {
      method: "POST",
      headers: {
        Authorization: endpointToken.t,
        "Content-Type": "application/ssml+xml",
        "User-Agent": "Mozilla/5.0",
        "X-Microsoft-OutputFormat": "audio-24khz-48kbitrate-mono-mp3",
      },
      body: ssml,
      signal: AbortSignal.timeout(30000),
    });
    if (!audioResponse.ok) {
      throw new Error(`${voice} returned HTTP ${audioResponse.status}: ${await audioResponse.text()}`);
    }
    const audio = await audioResponse.arrayBuffer();
    assert(audio.byteLength > 1000, `${voice} audio is too small: ${audio.byteLength}`);
    assert(/audio/i.test(audioResponse.headers.get("content-type") || ""), `${voice} content type is not audio`);
    results[voice] = { bytes: audio.byteLength, contentType: audioResponse.headers.get("content-type") };
  }));
  return results;
}

(async () => {
  console.log(`syntax OK: ${jsFiles.length} files`);
  console.log(runOfflineCoreSmoke());
  console.log(runRuntimeI18nSmoke());
  console.log(runTtsBridgeSmoke());
  console.log(runContentBridgeSmoke());
  console.log(runTimedtextGuardSmoke());
  console.log("Google Translate OK:", await testGoogleTranslate());
  console.log("Edge TTS OK:", await testEdgeTts());
  console.log("ALL OFFLINE INTEGRATION TESTS PASSED");
})().catch((error) => {
  console.error(error.stack || error);
  process.exit(1);
});
