await globalThis.__DUBBING_I18N_READY__;
const entry = document.querySelector("script[data-dubbing-ui-entry]")?.dataset.dubbingUiEntry;
if (!entry) throw new Error("Missing localized UI entry module");
await import(entry);
