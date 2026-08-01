import {
    P as t,
    K as o
} from "./local-player-C_4uyEHf.js";
import "./_plugin-vue_export-helper-s9b7xfAc.js";
import "./TranslateEngineModelMigration-8m3_IKzn.js";
import "./PronunciationVoiceCapabilities-BCl-gm3V.js";
const d = {
    p() {
        return new t({
            code: o.BadSignature,
            reason: "missing WEBVTT file header",
            line: 1
        })
    },
    q(n, e) {
        return new t({
            code: o.BadTimestamp,
            reason: `cue start timestamp \`${n}\` is invalid on line ${e}`,
            line: e
        })
    },
    r(n, e) {
        return new t({
            code: o.BadTimestamp,
            reason: `cue end timestamp \`${n}\` is invalid on line ${e}`,
            line: e
        })
    },
    s(n, e, r) {
        return new t({
            code: o.BadTimestamp,
            reason: `cue end timestamp \`${e}\` is greater than start \`${n}\` on line ${r}`,
            line: r
        })
    },
    w(n, e, r) {
        return new t({
            code: o.BadSettingValue,
            reason: `invalid value for cue setting \`${n}\` on line ${r} (value: ${e})`,
            line: r
        })
    },
    v(n, e, r) {
        return new t({
            code: o.UnknownSetting,
            reason: `unknown cue setting \`${n}\` on line ${r} (value: ${e})`,
            line: r
        })
    },
    u(n, e, r) {
        return new t({
            code: o.BadSettingValue,
            reason: `invalid value for region setting \`${n}\` on line ${r} (value: ${e})`,
            line: r
        })
    },
    t(n, e, r) {
        return new t({
            code: o.UnknownSetting,
            reason: `unknown region setting \`${n}\` on line ${r} (value: ${e})`,
            line: r
        })
    },
    T(n, e) {
        return new t({
            code: o.BadFormat,
            reason: `format missing for \`${n}\` block on line ${e}`,
            line: e
        })
    }
};
export {
    d as ParseErrorBuilder
};