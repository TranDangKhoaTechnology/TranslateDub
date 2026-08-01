const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const write = (file, value) => fs.writeFileSync(path.join(root, file), value);
const obsoleteLocalBase = ["off", "line://local"].join("");

const dictionaries = {};
for (const locale of ["en", "vi"]) {
  dictionaries[locale] = JSON.parse(read(`_locales/${locale}/messages.json`));
}
write(
  "runtime-i18n-data.js",
  `globalThis.__DUBBING_LOCALE_MESSAGES__=${JSON.stringify(dictionaries)};\n`,
);

const bundles = [
  "background.js",
  "content-scripts/content.js",
  "content-scripts/googleDriveButton.js",
  "content-scripts/metadata.js",
  "content-scripts/sidebar.js",
  "chunks/_plugin-vue_export-helper-s9b7xfAc.js",
  "chunks/popup-DHhN3U9v.js",
  "chunks/options-BtE4vpBt.js",
  "chunks/local-player-C_4uyEHf.js",
  "chunks/RealtimeDubbingEngine-OZ9Qr4p3.js",
  "chunks/PronunciationVoiceCapabilities-BCl-gm3V.js",
];
const delayedContentBundles = new Set([
  "content-scripts/content.js",
  "content-scripts/googleDriveButton.js",
  "content-scripts/metadata.js",
  "content-scripts/sidebar.js",
]);
const contentBootstrap = `/* DUBBING_I18N_READY */
globalThis.__DUBBING_I18N_GET_MESSAGE__ ??= (key, substitutions) => {
  try { return chrome.i18n.getMessage(key, substitutions) || ""; } catch { return ""; }
};
globalThis.__DUBBING_I18N_GET_UI_LANGUAGE__ ??= () => {
  try { return chrome.i18n.getUILanguage() || "en"; } catch { return "en"; }
};
Promise.resolve(globalThis.__DUBBING_I18N_READY__).then(() => {`;

for (const file of bundles) {
  let source = read(file);
  source = source.replace(
    /[A-Za-z_$][\w$]*\.i18n\.getMessage\(/g,
    "globalThis.__DUBBING_I18N_GET_MESSAGE__(",
  );
  source = source.replace(
    /[A-Za-z_$][\w$]*\.i18n\.getUILanguage\(\)/g,
    "globalThis.__DUBBING_I18N_GET_UI_LANGUAGE__()",
  );
  source = source.replace(
    /async save\(([A-Za-z_$][\w$]*)\)\{const ([A-Za-z_$][\w$]*)=await ([A-Za-z_$][\w$]*)\.post\("\/api\/v2\/watchLog\/save",\1\);if\(\2\.status>=200&&\2\.status<300\)return \2\.data\}/g,
    "async save(){return!0}",
  );
  source = source
    .replaceAll(JSON.stringify(`${obsoleteLocalBase}/api/servertime`), 'globalThis.__DUBBING_LOCAL_API_BASE__+"/api/servertime"')
    .replaceAll(JSON.stringify(obsoleteLocalBase), "globalThis.__DUBBING_LOCAL_API_BASE__");
  if (delayedContentBundles.has(file)) {
    if (source.startsWith("/* DUBBING_I18N_READY */")) {
      source = source.replace(
        /\/\* DUBBING_I18N_READY \*\/[\s\S]*?globalThis\.__DUBBING_I18N_READY__\.then\(\(\)\s*=>\s*\{\r?\n/,
        `${contentBootstrap}\n`,
      );
    } else {
      source = `${contentBootstrap}\n${source}\n});\n`;
    }
  }
  write(file, source);
}

console.log("Runtime localization data and bundle hooks updated.");
