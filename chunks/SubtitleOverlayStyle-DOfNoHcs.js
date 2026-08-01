import {
    s as p
} from "./PronunciationVoiceCapabilities-BCl-gm3V.js";
import {
    am as x,
    m,
    an as b,
    ao as S,
    ap as P,
    aq as w,
    ar as h,
    ai as y,
    ah as T
} from "./_plugin-vue_export-helper-s9b7xfAc.js";
function z(e, o, a) {
    if (!e || o.length === 0 || !p(a)) return [];
    const t = [];
    o.forEach((n, r) => {
        const s = L(n.matchText, n.targetText, n.targetOccurrence);
        if (!(s < 0))
            for (const c of d(e, n.matchText)) {
                const l = c + s,
                    u = l + n.targetText.length;
                t.push({
                    matchStart: c,
                    matchEnd: c + n.matchText.length,
                    matchLength: n.matchText.length,
                    ruleIndex: r,
                    span: {
                        start: l,
                        end: u,
                        alphabet: n.alphabet,
                        phoneme: n.phoneme
                    }
                })
            }
    }), t.sort((n, r) => r.matchLength - n.matchLength || n.matchStart - r.matchStart || n.ruleIndex - r.ruleIndex);
    const i = [];
    for (const n of t) i.some(r => O(n.span.start, n.span.end, r.span.start, r.span.end)) || i.push(n);
    return i.map(n => n.span).sort((n, r) => n.start - r.start || n.end - r.end)
}
function L(e, o, a) {
    return !e || !o || !Number.isSafeInteger(a) || a < 1 ? -1 : d(e, o)[a - 1] ?? -1
}
function I(e, o, a) {
    const i = d(e, o).indexOf(a);
    return i < 0 ? 0 : i + 1
}
function d(e, o) {
    if (!o || o.length > e.length) return [];
    const a = [];
    let t = 0;
    for (; t <= e.length - o.length;) {
        const i = e.indexOf(o, t);
        if (i < 0) break;
        a.push(i), t = i + 1
    }
    return a
}
function O(e, o, a, t) {
    return e < t && a < o
}
function A(e, o = "center") {
    const a = "24px",
        t = e.top ?? "auto",
        i = e.bottom ?? "auto",
        n = e.transform ?? "none";
    return {
        position: "absolute",
        overflow: "visible",
        contain: "content",
        direction: "ltr",
        "box-sizing": "border-box",
        "white-space": "pre-line",
        "unicode-bidi": "plaintext",
        "min-width": "min-content",
        "min-height": "min-content",
        left: a,
        right: a,
        top: t,
        bottom: i,
        width: "auto",
        transform: n,
        "text-align": o,
        "--cue-left": a,
        "--cue-right": a,
        "--cue-top": t,
        "--cue-bottom": i,
        "--cue-width": "auto",
        "--cue-text-align": o,
        "--cue-transform": n
    }
}
function E(e, o, a = {}) {
    const t = x(e, o),
        i = Math.round(t.fontSizePx * .4 * 10) / 10,
        n = Math.round(t.fontSizePx * .6 * 10) / 10,
        r = a.bilingualEnabled === !0,
        s = m(a.bilingualStyle),
        c = r ? b(s) : "center",
        l = {
            cssVars: {
                "--cue-color": t.color,
                "--cue-bg-color": t.backgroundColor,
                "--cue-font-size": `${t.fontSizePx}px`,
                "--cue-line-height": `${t.lineHeightPx}px`,
                "--cue-text-shadow": t.textShadow,
                "--cue-box-shadow": "none",
                "--cue-outline": "none"
            },
            cueDisplayStyle: S(e),
            cueStyle: {
                "background-color": t.backgroundColor,
                "box-shadow": "none",
                "box-sizing": "border-box",
                color: t.color,
                display: "inline-block",
                "font-family": t.fontFamily,
                "font-size": `${t.fontSizePx}px`,
                "font-weight": t.fontWeight,
                "line-height": `${t.lineHeightPx}px`,
                outline: "none",
                padding: `${i}px ${n}px`,
                "text-shadow": t.textShadow,
                "white-space": "pre-wrap",
                "text-align": c
            },
            fontFamily: t.fontFamily,
            fontWeight: t.fontWeight
        };
    if (!r) return l;
    const u = P(e, o),
        f = w(e, o, s),
        g = s.order === "original-first" ? "translated" : "original";
    return { ...l,
        cueStyle: { ...l.cueStyle,
            color: t.color,
            "font-size": "0px",
            "line-height": "0px",
            "text-shadow": "none"
        },
        bilingual: {
            enabled: !0,
            lineGapPx: s.lineGapPx,
            textAlign: c,
            translatedClassName: T,
            originalClassName: y,
            translatedStyle: h(u),
            originalStyle: h(f),
            secondLineRole: g
        }
    }
}
export {
    A as a, E as b, I as c, z as d, L as f
};