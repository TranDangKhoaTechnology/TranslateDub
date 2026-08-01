import {
    V as h,
    H as i,
    I as o
} from "./local-player-C_4uyEHf.js";
import "./_plugin-vue_export-helper-s9b7xfAc.js";
import "./TranslateEngineModelMigration-8m3_IKzn.js";
import "./PronunciationVoiceCapabilities-BCl-gm3V.js";
const u = /,/g,
    c = "-->";
class n extends h {
    parse(s, e) {
        var r, a;
        if (s === "") this.a && (this.j.push(this.a), (a = (r = this.f).onCue) == null || a.call(r, this.a), this.a = null), this.c = i.None;
        else if (this.c === i.Cue) this.a.text += (this.a.text ? `
` : "") + s;
        else if (s.includes(c)) {
            const t = this.o(s, e);
            t && (this.a = new o(t[0], t[1], t[2].join(" ")), this.a.id = this.l, this.c = i.Cue)
        }
        this.l = s
    }
    o(s, e) {
        return super.o(s.replace(u, "."), e)
    }
}
function S() {
    return new n
}
export {
    n as SRTParser, S as
    default
};