const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

// Load the helper in a Node-like global (atob/TextDecoder available in Node 16+)
globalThis.atob = (s) => Buffer.from(s, "base64").toString("binary");
require(path.join(root, "bilibili-download.js"));
const api = globalThis.__BILIBILI_DOWNLOAD_API__;

// --- URL validation ---
assert.equal(api.normalizeBilibiliUrl("https://www.bilibili.com/video/BV1AakQYwE97/").ok, true, "standard BV url");
assert.equal(api.normalizeBilibiliUrl("https://www.bilibili.com/video/BV1AakQYwE97/?spm_id_from=333").ok, true, "BV url with query");
assert.equal(api.normalizeBilibiliUrl("www.bilibili.com/video/BV1AakQYwE97/").ok, true, "url without scheme");
assert.equal(api.normalizeBilibiliUrl("https://b23.tv/abc123").ok, true, "b23.tv");
assert.equal(api.normalizeBilibiliUrl("https://www.youtube.com/watch?v=x").ok, false, "youtube rejected");
assert.equal(api.normalizeBilibiliUrl("javascript:alert(1)").ok, false, "javascript rejected");
assert.equal(api.normalizeBilibiliUrl("data:text/html,x").ok, false, "data rejected");
assert.equal(api.normalizeBilibiliUrl("").ok, false, "empty rejected");
assert.equal(api.normalizeBilibiliUrl("   ").ok, false, "whitespace rejected");

// --- BV extraction ---
assert.equal(api.extractBvid("https://www.bilibili.com/video/BV1AakQYwE97/"), "BV1AakQYwE97");
assert.equal(api.extractBvid("https://b23.tv/abc"), null, "b23 has no bv in path");

// --- Media URL validation ---
assert.equal(api.isBilibiliMediaUrl("https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/1.mp4?e=1"), true);
assert.equal(api.isBilibiliMediaUrl("https://example.hdslb.com/x.mp4"), true);
assert.equal(api.isBilibiliMediaUrl("https://bilivideo.com.attacker.example/x.mp4"), false, "spoofed host rejected");
assert.equal(api.isBilibiliMediaUrl("https://attacker.com/?url=bilivideo.com"), false);
assert.equal(api.isBilibiliMediaUrl("javascript:alert(1)"), false);

// --- Deadline ---
assert.equal(api.extractExpiration("https://x.bilivideo.com/a.mp4?deadline=1785613608"), 1785613608 * 1000);
assert.equal(api.extractExpiration("https://x.bilivideo.com/a.mp4"), undefined);
assert.equal(api.extractExpiration("https://x.bilivideo.com/a.mp4?deadline=abc"), undefined);
assert.equal(api.extractExpiration("https://x.bilivideo.com/a.mp4?deadline=-5"), undefined);

// --- Base64 payload ---
assert.equal(api.decodeBase64Utf8("SGVsbG8="), "Hello");
assert.equal(api.decodeBase64Utf8("SGVsbG8"), "Hello", "missing padding");
assert.equal(api.decodeBase64Utf8("SGVsbG9fV29ybGQ="), "Hello_World", "url safe handled");
// UTF-8 Vietnamese
const viPayload = Buffer.from("Xin chào Việt Nam", "utf8").toString("base64");
assert.equal(api.decodeBase64Utf8(viPayload), "Xin chào Việt Nam");
// UTF-8 Chinese
const zhPayload = Buffer.from("你好世界", "utf8").toString("base64");
assert.equal(api.decodeBase64Utf8(zhPayload), "你好世界");

// --- SnapWC payload decode ---
const payloadObj = { title: "Test video", type: "video+audio", item: { quality_note: "Original", ext: "mp4", url: "https://upos-sz-mirrorcos.bilivideo.com/x.mp4?deadline=1785613608" } };
const payloadB64 = Buffer.from(JSON.stringify(payloadObj), "utf8").toString("base64");
const decoded = api.decodeSnapwcPayload("https://snapwc.com/iframe-download?payload=" + payloadB64);
assert.equal(decoded.title, "Test video");
assert.equal(decoded.item.url.includes("bilivideo.com"), true);

// --- Normalize results ---
const results = api.normalizeMediaResults(payloadObj);
assert.equal(results.length >= 1, true);
assert.equal(results[0].kind, "video_audio");
assert.equal(results[0].expiresAt, 1785613608 * 1000);

// --- safeFilename ---
assert.equal(api.safeFilename('a/b\\c:d*e?f"g<h>i|j', "mp4"), "a_b_c_d_e_f_g_h_i_j.mp4");
assert.equal(api.safeFilename("../etc/passwd", "mp4"), ".._etc_passwd.mp4", "path traversal blocked");
assert.equal(api.safeFilename("video", "mp4"), "video.mp4");
assert.equal(api.safeFilename("", "mp4"), "bilibili-video.mp4");

console.log("ALL BILIBILI UNIT TESTS PASSED");
