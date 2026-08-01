globalThis.__DUBBING_OFFLINE_BACKGROUND__ = true;

// Safe-load i18n scripts with fallback to prevent crash if they fail
try { importScripts("runtime-i18n-data.js"); } catch (e) { console.error("[i18n] Failed to load runtime-i18n-data.js:", e); }
try { importScripts("runtime-i18n.js"); } catch (e) { console.error("[i18n] Failed to load runtime-i18n.js:", e); }

// Ensure i18n functions always exist as safe no-ops if not defined by above scripts
if (typeof globalThis.__DUBBING_I18N_GET_MESSAGE__ !== "function") {
  globalThis.__DUBBING_I18N_GET_MESSAGE__ = function(name) { return name || ""; };
}
if (typeof globalThis.__DUBBING_I18N_GET_UI_LANGUAGE__ !== "function") {
  globalThis.__DUBBING_I18N_GET_UI_LANGUAGE__ = function() { return "en"; };
}

importScripts("offline-core.js");
importScripts("background.js");

// Refresh already-open YouTube tabs once after an unpacked-extension update,
// so Chrome cannot keep an obsolete content-script instance alive.
const currentRuntimeVersion = chrome.runtime.getManifest().version;
chrome.storage.local.get("__translateDubRuntimeVersion").then(async (result) => {
  const previousRuntimeVersion = result.__translateDubRuntimeVersion;
  await chrome.storage.local.set({ __translateDubRuntimeVersion: currentRuntimeVersion });
  if (!previousRuntimeVersion || previousRuntimeVersion === currentRuntimeVersion) return;
  const tabs = await chrome.tabs.query({ url: ["*://*.youtube.com/*", "*://*.youtube-nocookie.com/*"] });
  await Promise.all(tabs.filter((tab) => Number.isInteger(tab.id)).map((tab) => chrome.tabs.reload(tab.id)));
}).catch(() => {});