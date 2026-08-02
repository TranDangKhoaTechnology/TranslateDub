import {
    p as W,
    T as ze,
    y as F,
    a6 as dt,
    x as k,
    B as G,
    z as t,
    E as A,
    q as _,
    a7 as ft,
    a8 as pt,
    d as gt,
    A as vt,
    b as ht,
    i as c,
    r as z,
    f as J,
    t as ce,
    D as m,
    U as H,
    S as de,
    l as te,
    H as $e,
    a9 as B,
    R as O,
    $ as Se,
    aa as _e,
    j as Re,
    h as Ge,
    ab as Ne,
    v as Ye,
    s as ue,
    W as mt,
    N as Ae,
    O as Ee,
    M as ye,
    ac as Je,
    F as Fe,
    L as Te,
    I as Ct,
    J as xt,
    ad as bt,
    ae as ee,
    P as wt
} from "./_plugin-vue_export-helper-s9b7xfAc.js";
import {
    D as Ce,
    i as Ue,
    T as Oe,
    g as Me,
    S as ke
} from "./Dropdown-CFYvsfbz.js";
import {
    u as j,
    f as yt,
    B as me,
    i as $t,
    m as St,
    T as Xe,
    r as _t,
    M as Ft
} from "./TranslateEngineModelMigration-8m3_IKzn.js";
const xe = e => {
        let i = 0;
        for (let l = 0; l < e.length; l++) {
            const a = e.charCodeAt(l);
            i = (i << 5) - i + a, i = i & i
        }
        return Math.abs(i)
    },
    Ke = (e, i) => Math.floor(e / Math.pow(10, i) % 10),
    De = (e, i) => !(Ke(e, i) % 2),
    Y = (e, i, l) => {
        const a = e % i;
        return l && Ke(e, l) % 2 === 0 ? -a : a
    },
    ge = (e, i, l) => i[e % l],
    kt = e => {
        e.slice(0, 1) === "#" && (e = e.slice(1));
        const i = parseInt(e.substring(0, 2), 16),
            l = parseInt(e.substring(2, 4), 16),
            a = parseInt(e.substring(4, 6), 16);
        return (i * 299 + l * 587 + a * 114) / 1e3 >= 128 ? "#000000" : "#FFFFFF"
    },
    Et = 4,
    Ze = 80;
function Lt(e, i) {
    const l = xe(e),
        a = i && i.length;
    return Array.from({
        length: Et
    }, (v, o) => ({
        color: ge(l + o, i, a),
        translateX: Y(l * (o + 1), Ze / 2 - (o + 17), 1),
        translateY: Y(l * (o + 1), Ze / 2 - (o + 17), 2),
        rotate: Y(l * (o + 1), 360),
        isSquare: De(l, 2)
    }))
}
const Bt = W({
        props: {
            id: {
                type: String,
                required: !1,
                default: "mask__bauhaus"
            },
            colors: {
                type: Array,
                required: !0
            },
            name: {
                type: String,
                required: !0
            },
            square: {
                type: Boolean,
                required: !1,
                default: !1
            },
            size: {
                type: Number,
                required: !0
            },
            title: {
                type: Boolean,
                required: !1,
                default: !1
            }
        },
        setup(e) {
            return {
                properties: _(() => Lt(e.name, e.colors)),
                SIZE: Ze
            }
        }
    }),
    ve = (e, i) => {
        const l = e.__vccOpts || e;
        for (const [a, v] of i) l[a] = v;
        return l
    },
    Mt = ["viewBox", "width", "height"],
    It = {
        key: 0
    },
    Vt = ["id", "width", "height"],
    At = ["width", "height", "rx"],
    Tt = ["mask"],
    Dt = ["width", "height", "fill"],
    Zt = ["x", "y", "width", "height", "fill", "transform"],
    qt = ["cx", "cy", "fill", "r", "transform"],
    zt = ["y1", "x2", "y2", "stroke", "transform"];
function Ut(e, i, l, a, v, o) {
    return F(), k("svg", {
        viewBox: `0 0 ${e.SIZE} ${e.SIZE}`,
        fill: "none",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        width: e.size,
        height: e.size
    }, [e.title ? (F(), k("title", It, A(e.name), 1)) : G("", !0), t("mask", {
        id: e.id,
        maskUnits: "userSpaceOnUse",
        x: 0,
        y: 0,
        width: e.SIZE,
        height: e.SIZE
    }, [t("rect", {
        width: e.SIZE,
        height: e.SIZE,
        rx: e.square ? void 0 : e.SIZE * 2,
        fill: "#FFFFFF"
    }, null, 8, At)], 8, Vt), t("g", {
        mask: `url(#${e.id})`
    }, [t("rect", {
        width: e.SIZE,
        height: e.SIZE,
        fill: e.properties[0].color
    }, null, 8, Dt), t("rect", {
        x: (e.SIZE - 60) / 2,
        y: (e.SIZE - 20) / 2,
        width: e.SIZE,
        height: e.properties[1].isSquare ? e.SIZE : e.SIZE / 8,
        fill: e.properties[1].color,
        transform: `translate(${e.properties[1].translateX} ${e.properties[1].translateY}) rotate(${e.properties[1].rotate} ${e.SIZE/2} ${e.SIZE/2})`
    }, null, 8, Zt), t("circle", {
        cx: e.SIZE / 2,
        cy: e.SIZE / 2,
        fill: e.properties[2].color,
        r: e.SIZE / 5,
        transform: `translate(${e.properties[2].translateX} ${e.properties[2].translateY})`
    }, null, 8, qt), t("line", {
        x1: 0,
        y1: e.SIZE / 2,
        x2: e.SIZE,
        y2: e.SIZE / 2,
        "stroke-width": 2,
        stroke: e.properties[3].color,
        transform: `translate(${e.properties[3].translateX} ${e.properties[3].translateY}) rotate(${e.properties[3].rotate} ${e.SIZE/2} ${e.SIZE/2})`
    }, null, 8, zt)], 8, Tt)], 8, Mt)
}
const Ht = ve(Bt, [
        ["render", Ut]
    ]),
    he = 36;
function Ot(e, i) {
    const l = xe(e),
        a = i && i.length,
        v = ge(l, i, a),
        o = Y(l, 10, 1),
        y = o < 5 ? o + he / 9 : o,
        n = Y(l, 10, 2),
        E = n < 5 ? n + he / 9 : n;
    return {
        wrapperColor: v,
        faceColor: kt(v),
        backgroundColor: ge(l + 13, i, a),
        wrapperTranslateX: y,
        wrapperTranslateY: E,
        wrapperRotate: Y(l, 360),
        wrapperScale: 1 + Y(l, he / 12) / 10,
        isMouthOpen: De(l, 2),
        isCircle: De(l, 1),
        eyeSpread: Y(l, 5),
        mouthSpread: Y(l, 3),
        faceRotate: Y(l, 10, 3),
        faceTranslateX: y > he / 6 ? y / 2 : Y(l, 8, 1),
        faceTranslateY: E > he / 6 ? E / 2 : Y(l, 7, 2)
    }
}
const Pt = W({
        props: {
            id: {
                type: String,
                required: !1,
                default: "mask__beam"
            },
            colors: {
                type: Array,
                required: !0
            },
            name: {
                type: String,
                required: !0
            },
            square: {
                type: Boolean,
                required: !1,
                default: !1
            },
            size: {
                type: Number,
                required: !0
            },
            title: {
                type: Boolean,
                required: !1,
                default: !1
            }
        },
        setup(e) {
            return {
                data: _(() => Ot(e.name, e.colors)),
                SIZE: he
            }
        }
    }),
    Wt = ["viewBox", "width", "height"],
    jt = {
        key: 0
    },
    Rt = ["id", "width", "height"],
    Gt = ["width", "height", "rx"],
    Nt = ["mask"],
    Yt = ["width", "height", "fill"],
    Jt = ["width", "height", "transform", "fill", "rx"],
    Xt = ["transform"],
    Kt = ["d", "stroke"],
    Qt = ["d", "fill"],
    e1 = ["x", "fill"],
    t1 = ["x", "fill"];
function l1(e, i, l, a, v, o) {
    return F(), k("svg", {
        viewBox: `0 0 ${e.SIZE} ${e.SIZE}`,
        fill: "none",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        width: e.size,
        height: e.size
    }, [e.title ? (F(), k("title", jt, A(e.name), 1)) : G("", !0), t("mask", {
        id: e.id,
        maskUnits: "userSpaceOnUse",
        x: 0,
        y: 0,
        width: e.SIZE,
        height: e.SIZE
    }, [t("rect", {
        width: e.SIZE,
        height: e.SIZE,
        rx: e.square ? void 0 : e.SIZE * 2,
        fill: "#FFFFFF"
    }, null, 8, Gt)], 8, Rt), t("g", {
        mask: `url(#${e.id})`
    }, [t("rect", {
        width: e.SIZE,
        height: e.SIZE,
        fill: e.data.backgroundColor
    }, null, 8, Yt), t("rect", {
        x: 0,
        y: 0,
        width: e.SIZE,
        height: e.SIZE,
        transform: `translate(${e.data.wrapperTranslateX} ${e.data.wrapperTranslateY}) rotate(${e.data.wrapperRotate} ${e.SIZE/2} ${e.SIZE/2}) scale(${e.data.wrapperScale})`,
        fill: e.data.wrapperColor,
        rx: e.data.isCircle ? e.SIZE : e.SIZE / 6
    }, null, 8, Jt), t("g", {
        transform: `translate(${e.data.faceTranslateX} ${e.data.faceTranslateY}) rotate(${e.data.faceRotate} ${e.SIZE/2} ${e.SIZE/2})`
    }, [e.data.isMouthOpen ? (F(), k("path", {
        key: 0,
        d: `M15 ${19+e.data.mouthSpread}c2 1
        4 1 6 0`,
        stroke: e.data.faceColor,
        fill: "none",
        "stroke-linecap": "round"
    }, null, 8, Kt)) : (F(), k("path", {
        key: 1,
        d: `M13,${19+e.data.mouthSpread} a1,0.75 0 0,0 10,0`,
        fill: e.data.faceColor
    }, null, 8, Qt)), t("rect", {
        x: 14 - e.data.eyeSpread,
        y: 14,
        width: 1.5,
        height: 2,
        rx: 1,
        stroke: "none",
        fill: e.data.faceColor
    }, null, 8, e1), t("rect", {
        x: 20 + e.data.eyeSpread,
        y: 14,
        width: 1.5,
        height: 2,
        rx: 1,
        stroke: "none",
        fill: e.data.faceColor
    }, null, 8, t1)], 8, Xt)], 8, Nt)], 8, Wt)
}
const i1 = ve(Pt, [
        ["render", l1]
    ]),
    a1 = 3,
    Be = 80;
function o1(e, i) {
    const l = xe(e),
        a = i && i.length;
    return Array.from({
        length: a1
    }, (v, o) => ({
        color: ge(l + o, i, a),
        translateX: Y(l * (o + 1), Be / 10, 1),
        translateY: Y(l * (o + 1), Be / 10, 2),
        scale: 1.2 + Y(l * (o + 1), Be / 20) / 10,
        rotate: Y(l * (o + 1), 360, 1)
    }))
}
const n1 = W({
        props: {
            id: {
                type: String,
                required: !1,
                default: "mask__marble"
            },
            colors: {
                type: Array,
                required: !0
            },
            name: {
                type: String,
                required: !0
            },
            square: {
                type: Boolean,
                required: !1,
                default: !1
            },
            size: {
                type: Number,
                required: !0
            },
            title: {
                type: Boolean,
                required: !1,
                default: !1
            }
        },
        setup(e) {
            return {
                properties: _(() => o1(e.name, e.colors)),
                SIZE: Be
            }
        }
    }),
    s1 = e => (ft("data-v-dad16028"), e = e(), pt(), e),
    r1 = ["viewBox", "width", "height"],
    u1 = {
        key: 0
    },
    c1 = ["id", "width", "height"],
    d1 = ["width", "height", "rx"],
    f1 = ["mask"],
    p1 = ["width", "height", "fill"],
    g1 = ["fill", "transform"],
    v1 = ["fill", "transform"],
    h1 = s1(() => t("defs", null, [t("filter", {
        id: "prefix__filter0_f",
        filterUnits: "userSpaceOnUse",
        "color-interpolation-filters": "sRGB"
    }, [t("feFlood", {
        "flood-opacity": 0,
        result: "BackgroundImageFix"
    }), t("feBlend", { in: "SourceGraphic",
        in2: "BackgroundImageFix",
        result: "shape"
    }), t("feGaussianBlur", {
        stdDeviation: 7,
        result: "effect1_foregroundBlur"
    })])], -1));
function m1(e, i, l, a, v, o) {
    return F(), k("svg", {
        viewBox: `0 0 ${e.SIZE} ${e.SIZE}`,
        fill: "none",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        width: e.size,
        height: e.size
    }, [e.title ? (F(), k("title", u1, A(e.name), 1)) : G("", !0), t("mask", {
        id: e.id,
        maskUnits: "userSpaceOnUse",
        x: 0,
        y: 0,
        width: e.SIZE,
        height: e.SIZE
    }, [t("rect", {
        width: e.SIZE,
        height: e.SIZE,
        rx: e.square ? void 0 : e.SIZE * 2,
        fill: "#FFFFFF"
    }, null, 8, d1)], 8, c1), t("g", {
        mask: `url(#${e.id})`
    }, [t("rect", {
        width: e.SIZE,
        height: e.SIZE,
        fill: e.properties[0].color
    }, null, 8, p1), t("path", {
        filter: "url(#prefix__filter0_f)",
        d: "M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z",
        fill: e.properties[1].color,
        transform: `translate(${e.properties[1].translateX} ${e.properties[1].translateY}) rotate(${e.properties[1].rotate} ${e.SIZE/2} ${e.SIZE/2}) scale(${e.properties[2].scale})`
    }, null, 8, g1), t("path", {
        filter: "url(#prefix__filter0_f)",
        class: "mix-blend-overlay",
        d: "M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z",
        fill: e.properties[2].color,
        transform: `translate(${e.properties[2].translateX} ${e.properties[2].translateY}) rotate(${e.properties[2].rotate} ${e.SIZE/2} ${e.SIZE/2}) scale(${e.properties[2].scale})`
    }, null, 8, v1)], 8, f1), h1], 8, r1)
}
const C1 = ve(n1, [
        ["render", m1],
        ["__scopeId", "data-v-dad16028"]
    ]),
    x1 = 64,
    b1 = 80;
function w1(e, i) {
    const l = xe(e),
        a = i && i.length;
    return Array.from({
        length: x1
    }, (v, o) => ge(l % (o + 1), i, a))
}
const y1 = W({
        props: {
            id: {
                type: String,
                required: !1,
                default: "mask__pixel"
            },
            colors: {
                type: Array,
                required: !0
            },
            name: {
                type: String,
                required: !0
            },
            square: {
                type: Boolean,
                required: !1,
                default: !1
            },
            size: {
                type: Number,
                required: !0
            },
            title: {
                type: Boolean,
                required: !1,
                default: !1
            }
        },
        setup(e) {
            return {
                pixelColors: _(() => w1(e.name, e.colors)),
                SIZE: b1
            }
        }
    }),
    $1 = ["viewBox", "width", "height"],
    S1 = {
        key: 0
    },
    _1 = ["id", "width", "height"],
    F1 = ["width", "height", "rx"],
    k1 = ["mask"],
    E1 = ["fill"],
    L1 = ["fill"],
    B1 = ["fill"],
    M1 = ["fill"],
    I1 = ["fill"],
    V1 = ["fill"],
    A1 = ["fill"],
    T1 = ["fill"],
    D1 = ["fill"],
    Z1 = ["fill"],
    q1 = ["fill"],
    z1 = ["fill"],
    U1 = ["fill"],
    H1 = ["fill"],
    O1 = ["fill"],
    P1 = ["fill"],
    W1 = ["fill"],
    j1 = ["fill"],
    R1 = ["fill"],
    G1 = ["fill"],
    N1 = ["fill"],
    Y1 = ["fill"],
    J1 = ["fill"],
    X1 = ["fill"],
    K1 = ["fill"],
    Q1 = ["fill"],
    el = ["fill"],
    tl = ["fill"],
    ll = ["fill"],
    il = ["fill"],
    al = ["fill"],
    ol = ["fill"],
    nl = ["fill"],
    sl = ["fill"],
    rl = ["fill"],
    ul = ["fill"],
    cl = ["fill"],
    dl = ["fill"],
    fl = ["fill"],
    pl = ["fill"],
    gl = ["fill"],
    vl = ["fill"],
    hl = ["fill"],
    ml = ["fill"],
    Cl = ["fill"],
    xl = ["fill"],
    bl = ["fill"],
    wl = ["fill"],
    yl = ["fill"],
    $l = ["fill"],
    Sl = ["fill"],
    _l = ["fill"],
    Fl = ["fill"],
    kl = ["fill"],
    El = ["fill"],
    Ll = ["fill"],
    Bl = ["fill"],
    Ml = ["fill"],
    Il = ["fill"],
    Vl = ["fill"],
    Al = ["fill"],
    Tl = ["fill"],
    Dl = ["fill"],
    Zl = ["fill"];
function ql(e, i, l, a, v, o) {
    return F(), k("svg", {
        viewBox: `0 0 ${e.SIZE} ${e.SIZE}`,
        fill: "none",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        width: e.size,
        height: e.size
    }, [e.title ? (F(), k("title", S1, A(e.name), 1)) : G("", !0), t("mask", {
        id: e.id,
        "mask-type": "alpha",
        maskUnits: "userSpaceOnUse",
        x: 0,
        y: 0,
        width: e.SIZE,
        height: e.SIZE
    }, [t("rect", {
        width: e.SIZE,
        height: e.SIZE,
        rx: e.square ? void 0 : e.SIZE * 2,
        fill: "#FFFFFF"
    }, null, 8, F1)], 8, _1), t("g", {
        mask: `url(#${e.id})`
    }, [t("rect", {
        width: 10,
        height: 10,
        fill: e.pixelColors[0]
    }, null, 8, E1), t("rect", {
        x: 20,
        width: 10,
        height: 10,
        fill: e.pixelColors[1]
    }, null, 8, L1), t("rect", {
        x: 40,
        width: 10,
        height: 10,
        fill: e.pixelColors[2]
    }, null, 8, B1), t("rect", {
        x: 60,
        width: 10,
        height: 10,
        fill: e.pixelColors[3]
    }, null, 8, M1), t("rect", {
        x: 10,
        width: 10,
        height: 10,
        fill: e.pixelColors[4]
    }, null, 8, I1), t("rect", {
        x: 30,
        width: 10,
        height: 10,
        fill: e.pixelColors[5]
    }, null, 8, V1), t("rect", {
        x: 50,
        width: 10,
        height: 10,
        fill: e.pixelColors[6]
    }, null, 8, A1), t("rect", {
        x: 70,
        width: 10,
        height: 10,
        fill: e.pixelColors[7]
    }, null, 8, T1), t("rect", {
        y: 10,
        width: 10,
        height: 10,
        fill: e.pixelColors[8]
    }, null, 8, D1), t("rect", {
        y: 20,
        width: 10,
        height: 10,
        fill: e.pixelColors[9]
    }, null, 8, Z1), t("rect", {
        y: 30,
        width: 10,
        height: 10,
        fill: e.pixelColors[10]
    }, null, 8, q1), t("rect", {
        y: 40,
        width: 10,
        height: 10,
        fill: e.pixelColors[11]
    }, null, 8, z1), t("rect", {
        y: 50,
        width: 10,
        height: 10,
        fill: e.pixelColors[12]
    }, null, 8, U1), t("rect", {
        y: 60,
        width: 10,
        height: 10,
        fill: e.pixelColors[13]
    }, null, 8, H1), t("rect", {
        y: 70,
        width: 10,
        height: 10,
        fill: e.pixelColors[14]
    }, null, 8, O1), t("rect", {
        x: 20,
        y: 10,
        width: 10,
        height: 10,
        fill: e.pixelColors[15]
    }, null, 8, P1), t("rect", {
        x: 20,
        y: 20,
        width: 10,
        height: 10,
        fill: e.pixelColors[16]
    }, null, 8, W1), t("rect", {
        x: 20,
        y: 30,
        width: 10,
        height: 10,
        fill: e.pixelColors[17]
    }, null, 8, j1), t("rect", {
        x: 20,
        y: 40,
        width: 10,
        height: 10,
        fill: e.pixelColors[18]
    }, null, 8, R1), t("rect", {
        x: 20,
        y: 50,
        width: 10,
        height: 10,
        fill: e.pixelColors[19]
    }, null, 8, G1), t("rect", {
        x: 20,
        y: 60,
        width: 10,
        height: 10,
        fill: e.pixelColors[20]
    }, null, 8, N1), t("rect", {
        x: 20,
        y: 70,
        width: 10,
        height: 10,
        fill: e.pixelColors[21]
    }, null, 8, Y1), t("rect", {
        x: 40,
        y: 10,
        width: 10,
        height: 10,
        fill: e.pixelColors[22]
    }, null, 8, J1), t("rect", {
        x: 40,
        y: 20,
        width: 10,
        height: 10,
        fill: e.pixelColors[23]
    }, null, 8, X1), t("rect", {
        x: 40,
        y: 30,
        width: 10,
        height: 10,
        fill: e.pixelColors[24]
    }, null, 8, K1), t("rect", {
        x: 40,
        y: 40,
        width: 10,
        height: 10,
        fill: e.pixelColors[25]
    }, null, 8, Q1), t("rect", {
        x: 40,
        y: 50,
        width: 10,
        height: 10,
        fill: e.pixelColors[26]
    }, null, 8, el), t("rect", {
        x: 40,
        y: 60,
        width: 10,
        height: 10,
        fill: e.pixelColors[27]
    }, null, 8, tl), t("rect", {
        x: 40,
        y: 70,
        width: 10,
        height: 10,
        fill: e.pixelColors[28]
    }, null, 8, ll), t("rect", {
        x: 60,
        y: 10,
        width: 10,
        height: 10,
        fill: e.pixelColors[29]
    }, null, 8, il), t("rect", {
        x: 60,
        y: 20,
        width: 10,
        height: 10,
        fill: e.pixelColors[30]
    }, null, 8, al), t("rect", {
        x: 60,
        y: 30,
        width: 10,
        height: 10,
        fill: e.pixelColors[31]
    }, null, 8, ol), t("rect", {
        x: 60,
        y: 40,
        width: 10,
        height: 10,
        fill: e.pixelColors[32]
    }, null, 8, nl), t("rect", {
        x: 60,
        y: 50,
        width: 10,
        height: 10,
        fill: e.pixelColors[33]
    }, null, 8, sl), t("rect", {
        x: 60,
        y: 60,
        width: 10,
        height: 10,
        fill: e.pixelColors[34]
    }, null, 8, rl), t("rect", {
        x: 60,
        y: 70,
        width: 10,
        height: 10,
        fill: e.pixelColors[35]
    }, null, 8, ul), t("rect", {
        x: 10,
        y: 10,
        width: 10,
        height: 10,
        fill: e.pixelColors[36]
    }, null, 8, cl), t("rect", {
        x: 10,
        y: 20,
        width: 10,
        height: 10,
        fill: e.pixelColors[37]
    }, null, 8, dl), t("rect", {
        x: 10,
        y: 30,
        width: 10,
        height: 10,
        fill: e.pixelColors[38]
    }, null, 8, fl), t("rect", {
        x: 10,
        y: 40,
        width: 10,
        height: 10,
        fill: e.pixelColors[39]
    }, null, 8, pl), t("rect", {
        x: 10,
        y: 50,
        width: 10,
        height: 10,
        fill: e.pixelColors[40]
    }, null, 8, gl), t("rect", {
        x: 10,
        y: 60,
        width: 10,
        height: 10,
        fill: e.pixelColors[41]
    }, null, 8, vl), t("rect", {
        x: 10,
        y: 70,
        width: 10,
        height: 10,
        fill: e.pixelColors[42]
    }, null, 8, hl), t("rect", {
        x: 30,
        y: 10,
        width: 10,
        height: 10,
        fill: e.pixelColors[43]
    }, null, 8, ml), t("rect", {
        x: 30,
        y: 20,
        width: 10,
        height: 10,
        fill: e.pixelColors[44]
    }, null, 8, Cl), t("rect", {
        x: 30,
        y: 30,
        width: 10,
        height: 10,
        fill: e.pixelColors[45]
    }, null, 8, xl), t("rect", {
        x: 30,
        y: 40,
        width: 10,
        height: 10,
        fill: e.pixelColors[46]
    }, null, 8, bl), t("rect", {
        x: 30,
        y: 50,
        width: 10,
        height: 10,
        fill: e.pixelColors[47]
    }, null, 8, wl), t("rect", {
        x: 30,
        y: 60,
        width: 10,
        height: 10,
        fill: e.pixelColors[48]
    }, null, 8, yl), t("rect", {
        x: 30,
        y: 70,
        width: 10,
        height: 10,
        fill: e.pixelColors[49]
    }, null, 8, $l), t("rect", {
        x: 50,
        y: 10,
        width: 10,
        height: 10,
        fill: e.pixelColors[50]
    }, null, 8, Sl), t("rect", {
        x: 50,
        y: 20,
        width: 10,
        height: 10,
        fill: e.pixelColors[51]
    }, null, 8, _l), t("rect", {
        x: 50,
        y: 30,
        width: 10,
        height: 10,
        fill: e.pixelColors[52]
    }, null, 8, Fl), t("rect", {
        x: 50,
        y: 40,
        width: 10,
        height: 10,
        fill: e.pixelColors[53]
    }, null, 8, kl), t("rect", {
        x: 50,
        y: 50,
        width: 10,
        height: 10,
        fill: e.pixelColors[54]
    }, null, 8, El), t("rect", {
        x: 50,
        y: 60,
        width: 10,
        height: 10,
        fill: e.pixelColors[55]
    }, null, 8, Ll), t("rect", {
        x: 50,
        y: 70,
        width: 10,
        height: 10,
        fill: e.pixelColors[56]
    }, null, 8, Bl), t("rect", {
        x: 70,
        y: 10,
        width: 10,
        height: 10,
        fill: e.pixelColors[57]
    }, null, 8, Ml), t("rect", {
        x: 70,
        y: 20,
        width: 10,
        height: 10,
        fill: e.pixelColors[58]
    }, null, 8, Il), t("rect", {
        x: 70,
        y: 30,
        width: 10,
        height: 10,
        fill: e.pixelColors[59]
    }, null, 8, Vl), t("rect", {
        x: 70,
        y: 40,
        width: 10,
        height: 10,
        fill: e.pixelColors[60]
    }, null, 8, Al), t("rect", {
        x: 70,
        y: 50,
        width: 10,
        height: 10,
        fill: e.pixelColors[61]
    }, null, 8, Tl), t("rect", {
        x: 70,
        y: 60,
        width: 10,
        height: 10,
        fill: e.pixelColors[62]
    }, null, 8, Dl), t("rect", {
        x: 70,
        y: 70,
        width: 10,
        height: 10,
        fill: e.pixelColors[63]
    }, null, 8, Zl)], 8, k1)], 8, $1)
}
const zl = ve(y1, [
        ["render", ql]
    ]),
    Ul = 90,
    Hl = 5;
function Ol(e, i) {
    const l = xe(e),
        a = i && i.length,
        v = Array.from({
            length: Hl
        }, (y, n) => ge(l + n, i, a)),
        o = [];
    return o[0] = v[0], o[1] = v[1], o[2] = v[1], o[3] = v[2], o[4] = v[2], o[5] = v[3], o[6] = v[3], o[7] = v[0], o[8] = v[4], o
}
const Pl = W({
        props: {
            id: {
                type: String,
                required: !1,
                default: "mask__ring"
            },
            colors: {
                type: Array,
                required: !0
            },
            name: {
                type: String,
                required: !0
            },
            square: {
                type: Boolean,
                required: !1,
                default: !1
            },
            size: {
                type: Number,
                required: !0
            },
            title: {
                type: Boolean,
                required: !1,
                default: !1
            }
        },
        setup(e) {
            return {
                ringColors: _(() => Ol(e.name, e.colors)),
                SIZE: Ul
            }
        }
    }),
    Wl = ["viewBox", "width", "height"],
    jl = {
        key: 0
    },
    Rl = ["id", "width", "height"],
    Gl = ["width", "height", "rx"],
    Nl = ["mask"],
    Yl = ["fill"],
    Jl = ["fill"],
    Xl = ["fill"],
    Kl = ["fill"],
    Ql = ["fill"],
    ei = ["fill"],
    ti = ["fill"],
    li = ["fill"],
    ii = ["fill"];
function ai(e, i, l, a, v, o) {
    return F(), k("svg", {
        viewBox: `0 0 ${e.SIZE} ${e.SIZE}`,
        fill: "none",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        width: e.size,
        height: e.size
    }, [e.title ? (F(), k("title", jl, A(e.name), 1)) : G("", !0), t("mask", {
        id: e.id,
        maskUnits: "userSpaceOnUse",
        x: 0,
        y: 0,
        width: e.SIZE,
        height: e.SIZE
    }, [t("rect", {
        width: e.SIZE,
        height: e.SIZE,
        rx: e.square ? void 0 : e.SIZE * 2,
        fill: "#FFFFFF"
    }, null, 8, Gl)], 8, Rl), t("g", {
        mask: `url(#${e.id})`
    }, [t("path", {
        d: "M0 0h90v45H0z",
        fill: e.ringColors[0]
    }, null, 8, Yl), t("path", {
        d: "M0 45h90v45H0z",
        fill: e.ringColors[1]
    }, null, 8, Jl), t("path", {
        d: "M83 45a38 38 0 00-76 0h76z",
        fill: e.ringColors[2]
    }, null, 8, Xl), t("path", {
        d: "M83 45a38 38 0 01-76 0h76z",
        fill: e.ringColors[3]
    }, null, 8, Kl), t("path", {
        d: "M77 45a32 32 0 10-64 0h64z",
        fill: e.ringColors[4]
    }, null, 8, Ql), t("path", {
        d: "M77 45a32 32 0 11-64 0h64z",
        fill: e.ringColors[5]
    }, null, 8, ei), t("path", {
        d: "M71 45a26 26 0 00-52 0h52z",
        fill: e.ringColors[6]
    }, null, 8, ti), t("path", {
        d: "M71 45a26 26 0 01-52 0h52z",
        fill: e.ringColors[7]
    }, null, 8, li), t("circle", {
        cx: 45,
        cy: 45,
        r: 23,
        fill: e.ringColors[8]
    }, null, 8, ii)], 8, Nl)], 8, Wl)
}
const oi = ve(Pl, [
        ["render", ai]
    ]),
    ni = 4,
    si = 80;
function ri(e, i) {
    const l = xe(e),
        a = i && i.length;
    return Array.from({
        length: ni
    }, (v, o) => ge(l + o, i, a))
}
const ui = W({
        props: {
            id: {
                type: String,
                required: !1,
                default: "mask__sunset"
            },
            colors: {
                type: Array,
                required: !0
            },
            name: {
                type: String,
                required: !0
            },
            square: {
                type: Boolean,
                required: !1,
                default: !1
            },
            size: {
                type: Number,
                required: !0
            },
            title: {
                type: Boolean,
                required: !1,
                default: !1
            }
        },
        setup(e) {
            const i = _(() => ri(e.name, e.colors)),
                l = _(() => e.name.replace(/\s/g, ""));
            return {
                sunsetColors: i,
                formattedName: l,
                SIZE: si
            }
        }
    }),
    ci = ["viewBox", "width", "height"],
    di = {
        key: 0
    },
    fi = ["id", "width", "height"],
    pi = ["width", "height", "rx"],
    gi = ["mask"],
    vi = ["fill"],
    hi = ["fill"],
    mi = ["id", "x1", "x2", "y2"],
    Ci = ["stop-color"],
    xi = ["stop-color"],
    bi = ["id", "x1", "y1", "x2", "y2"],
    wi = ["stop-color"],
    yi = ["stop-color"];
function $i(e, i, l, a, v, o) {
    return F(), k("svg", {
        viewBox: `0 0 ${e.SIZE} ${e.SIZE}`,
        fill: "none",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        width: e.size,
        height: e.size
    }, [e.title ? (F(), k("title", di, A(e.name), 1)) : G("", !0), t("mask", {
        id: e.id,
        maskUnits: "userSpaceOnUse",
        x: 0,
        y: 0,
        width: e.SIZE,
        height: e.SIZE
    }, [t("rect", {
        width: e.SIZE,
        height: e.SIZE,
        rx: e.square ? void 0 : e.SIZE * 2,
        fill: "#FFFFFF"
    }, null, 8, pi)], 8, fi), t("g", {
        mask: `url(#${e.id})`
    }, [t("path", {
        fill: `url(#gradient_paint0_linear_${e.formattedName})`,
        d: "M0 0h80v40H0z"
    }, null, 8, vi), t("path", {
        fill: `url(#gradient_paint1_linear_${e.formattedName})`,
        d: "M0 40h80v40H0z"
    }, null, 8, hi)], 8, gi), t("defs", null, [t("linearGradient", {
        id: `gradient_paint0_linear_${e.formattedName}`,
        x1: e.SIZE / 2,
        y1: 0,
        x2: e.SIZE / 2,
        y2: e.SIZE / 2,
        gradientUnits: "userSpaceOnUse"
    }, [t("stop", {
        "stop-color": e.sunsetColors[0]
    }, null, 8, Ci), t("stop", {
        offset: 1,
        "stop-color": e.sunsetColors[1]
    }, null, 8, xi)], 8, mi), t("linearGradient", {
        id: `gradient_paint1_linear_${e.formattedName}`,
        x1: e.SIZE / 2,
        y1: e.SIZE / 2,
        x2: e.SIZE / 2,
        y2: e.SIZE,
        gradientUnits: "userSpaceOnUse"
    }, [t("stop", {
        "stop-color": e.sunsetColors[2]
    }, null, 8, wi), t("stop", {
        offset: 1,
        "stop-color": e.sunsetColors[3]
    }, null, 8, yi)], 8, bi)])], 8, ci)
}
const Si = ve(ui, [
        ["render", $i]
    ]),
    _i = W({
        name: "Avatar",
        props: {
            id: {
                type: String,
                required: !1
            },
            variant: {
                type: String,
                required: !1,
                default: "marble",
                validator(e) {
                    return ["bauhaus", "beam", "marble", "pixel", "ring", "sunset"].includes(e)
                }
            },
            colors: {
                type: Array,
                required: !1,
                default: () => ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]
            },
            name: {
                type: String,
                required: !1,
                default: "Clara Barton"
            },
            square: {
                type: Boolean,
                required: !1,
                default: !1
            },
            size: {
                type: Number,
                required: !1,
                default: 40
            },
            title: {
                type: Boolean,
                required: !1,
                default: !1
            }
        },
        setup() {
            return {}
        },
        components: {
            AvatarBauhaus: Ht,
            AvatarBeam: i1,
            AvatarMarble: C1,
            AvatarPixel: zl,
            AvatarRing: oi,
            AvatarSunset: Si
        }
    });
function Fi(e, i, l, a, v, o) {
    return F(), ze(dt(`avatar-${e.variant}`), {
        id: e.id,
        colors: e.colors,
        name: e.name,
        square: e.square,
        size: e.size,
        title: e.title
    }, null, 8, ["id", "colors", "name", "square", "size", "title"])
}
const ki = ve(_i, [
    ["render", Fi]
]);
class Ei extends vt {
    async logout() {}
}
const [o0, Li] = gt("LogoutApiService", () => new Ei);
function Qe(e) {
    return (e || "").replace("_", "-").toLowerCase()
}
function Bi(e) {
    return {
        day: String(e.getDate()).padStart(2, "0"),
        dayNumber: e.getDate(),
        month: String(e.getMonth() + 1).padStart(2, "0"),
        monthNumber: e.getMonth() + 1,
        year: e.getFullYear(),
        hours: String(e.getHours()).padStart(2, "0"),
        minutes: String(e.getMinutes()).padStart(2, "0"),
        seconds: String(e.getSeconds()).padStart(2, "0")
    }
}
function Mi(e, i) {
    const l = Qe(i);
    return l.startsWith("da") || l.startsWith("lv") || l.startsWith("uk") ? `${e.replace(".",",")}\xA0$` : l.startsWith("nb") || l.startsWith("no") ? `$ ${e.replace(".",",")}` : l === "pt-br" || l.startsWith("pt-br-") ? `US$ ${e.replace(".",",")}` : `$ ${e}`
}
function Ii(e, i, l) {
    if (!e) return "";
    const a = Qe(l),
        v = new Date(e),
        {
            day: o,
            dayNumber: y,
            month: n,
            monthNumber: E,
            year: g,
            hours: f,
            minutes: u,
            seconds: s
        } = Bi(v);
    if (a.startsWith("ca")) return `${i} ${o}/${n}/${g} ${f}:${u}`;
    if (a.startsWith("fr")) return `${i} ${o}/${n}/${g} ${f}:${u}`;
    if (a.startsWith("it")) return `${i} ${o}/${n}/${g} ${f}:${u}`;
    if (a.startsWith("bg")) return `${i} ${o}.${n}.${g} г.`;
    if (a.startsWith("am")) return `${i} ${g}-${n}-${o} ${f}:${u}:${s}`;
    if (a.startsWith("bn")) return `${i} ${g}-${n}-${o} ${f}:${u}:${s}`;
    if (a.startsWith("cs")) return `${i}: ${y}. ${E}. ${g} ${f}:${u}`;
    if (a.startsWith("da")) return `${i} ${o}.${n}.${g} ${f}:${u}`;
    if (a.startsWith("el")) return `${i} ${g}-${n}-${o} ${f}:${u}`;
    if (a.startsWith("et")) return `${i} ${o}.${n}.${g} ${f}:${u}`;
    if (a.startsWith("fil")) return `${i} ${g}-${n}-${o} ${f}:${u}`;
    if (a.startsWith("fi")) return `${i} ${y}.${E}.${g} klo ${f}.${u}`;
    if (a.startsWith("gu")) return `${g}-${n}-${o} ${f}:${u}:${s} ${i}`;
    if (a.startsWith("ja")) return `${i} ${g}/${n}/${o} ${f}:${u}`;
    if (a.startsWith("ko")) return `${i} ${g}.${n}.${o} ${f}:${u}`;
    if (a.startsWith("kn")) return `${g}-${n}-${o} ${f}:${u}:${s} ${i}`;
    if (a.startsWith("hr")) return `${i} ${o}.${n}.${g} ${f}:${u}`;
    if (a.startsWith("hu")) return `${i}: ${g}.${n}.${o}. ${f}:${u}`;
    if (a.startsWith("id")) {
        const M = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"][v.getMonth()];
        return `${i} ${o} ${M} ${g} ${f}.${u}.${s}`
    }
    return a.startsWith("ta") ? `${i} ${o}.${n}.${g} ${f}:${u}` : a.startsWith("ml") ? `${g}-${n}-${o} ${f}:${u}\xA0${i}` : a.startsWith("lt") ? `${i} ${g}-${n}-${o} ${f}:${u}:${s}` : a.startsWith("lv") ? `${i}: ${g}-${n}-${o} ${f}:${u}` : a.startsWith("mr") ? `${i} ${g}-${n}-${o} ${f}:${u}` : a.startsWith("ms") ? `${i} ${g}-${n}-${o} ${f}:${u}` : a.startsWith("nl") ? `${i} ${g}-${n}-${o} ${f}:${u}` : a.startsWith("nb") || a.startsWith("no") ? `${i} ${o}.${n}.${g} ${f}:${u}` : a.startsWith("pl") ? `${i}: ${o}.${n}.${g} ${f}:${u}` : a.startsWith("pt") ? `${i} ${o}/${n}/${g} ${f}:${u}` : a.startsWith("ro") ? `${i} ${o}.${n}.${g}, ${f}:${u}` : a.startsWith("sk") ? `${i}: ${g}-${n}-${o} ${f}:${u}:${s}` : a.startsWith("sl") ? `${i}: ${g}-${n}-${o} ${f}:${u}:${s}` : a.startsWith("sr") ? `${i}: ${o}.${n}.${g} ${f}:${u}` : a.startsWith("sv") ? `${i} ${g}-${n}-${o} ${f}:${u}` : a.startsWith("sw") ? `${i} ${g}-${n}-${o} ${f}:${u}:${s}` : a.startsWith("te") ? `${i}: ${g}-${n}-${o} ${f}:${u}:${s}` : a.startsWith("uk") ? `${i} ${o}.${n}.${g} ${f}:${u}` : a.startsWith("ru") ? `${i} ${o}.${n}.${g} ${f}:${u}` : a.startsWith("zh") ? `${g}-${n}-${o} ${f}:${u}:${s} ${i}` : `${e} ${i}`
}
const Vi = {
        class: "overflow-hidden w-full",
        role: "region",
        "aria-label": "Account Information"
    },
    Ai = {
        class: "flex overflow-hidden flex-col px-4 pt-6 pb-11 w-full"
    },
    Ti = {
        class: "flex justify-between items-center w-full text-sm leading-6 text-black underline whitespace-nowrap"
    },
    Di = ["alt", "aria-label"],
    Zi = {
        class: "mt-3.5 w-full",
        "aria-label": "User Profile"
    },
    qi = {
        class: "w-full text-sm"
    },
    zi = {
        class: "flex overflow-hidden gap-2 items-center px-3 py-2.5 w-full text-base font-medium text-center text-black whitespace-nowrap rounded-xl min-h-[73px]"
    },
    Ui = {
        class: "flex gap-4 justify-center items-center self-stretch my-auto"
    },
    Hi = {
        class: "shrink-0 self-stretch my-auto w-[54px] h-[54px]"
    },
    Oi = {
        class: "self-stretch my-auto"
    },
    Pi = {
        key: 0,
        class: "flex overflow-hidden gap-2 items-center px-6 py-4 mt-2 w-full bg-white rounded-xl border border-solid border-black border-opacity-10 min-h-14"
    },
    Wi = {
        class: "flex flex-1 shrink gap-5 justify-between items-center self-stretch my-auto w-full basis-0 min-w-60"
    },
    ji = {
        class: "flex gap-1 items-center self-stretch px-2 py-1 my-auto font-medium leading-none whitespace-nowrap rounded-lg shadow-[-28px_211px_60px_rgba(0,0,0,0)]",
        style: {
            "border-radius": "8px",
            background: "linear-gradient(244deg, rgba(183, 124, 68, 0.90) -22.78%, rgba(254, 229, 187, 0.90) 21.66%, rgba(191, 133, 74, 0.90) 73.36%, rgba(252, 223, 179, 0.90) 116.08%, rgba(192, 134, 75, 0.90) 157.62%, rgba(251, 232, 212, 0.90) 205.07%), #FFF",
            "box-shadow": "-28px 211px 60px 0px rgba(0, 0, 0, 0.00), -18px 135px 55px 0px rgba(0, 0, 0, 0.01), -10px 76px 46px 0px rgba(0, 0, 0, 0.03), -4px 34px 34px 0px rgba(0, 0, 0, 0.04), -1px 8px 19px 0px rgba(0, 0, 0, 0.05)"
        }
    },
    Ri = ["alt"],
    Gi = {
        class: "self-stretch my-auto"
    },
    Ni = {
        class: "self-stretch my-auto leading-6 text-black"
    },
    Yi = {
        class: "flex overflow-hidden justify-between items-center px-6 py-4 mt-2 w-full leading-6 text-black bg-white rounded-xl border border-solid border-black border-opacity-10 min-h-14"
    },
    Ji = {
        class: "flex flex-1 shrink gap-5 justify-between items-center self-stretch my-auto w-full basis-0 min-w-60"
    },
    Xi = {
        class: "self-stretch my-auto"
    },
    Ki = {
        class: "self-stretch my-auto font-medium"
    },
    Qi = {
        class: "gap-2 self-stretch my-auto"
    },
    ea = ["alt"],
    et = W({
        __name: "AccountCard",
        emits: ["back"],
        setup(e) {
            const i = c.t("back") || "返回",
                l = c.t("backToSettings") || "返回设置",
                a = c.t("logout") || "退出登录",
                v = c.t("memberUser") || "会员",
                o = c.t("membershipIcon") || "会员图标",
                y = c.t("membershipExpires") || "会员到期",
                n = c.t("accountBalance") || "账户余额",
                E = c.t("shortcutSettings") || "快捷键设置",
                g = c.t("subscriptionRecharge") || "订阅 & 充值",
                f = c.t("browserShortcutSettingsTip") || "请在浏览器扩展设置中配置快捷键",
                u = c.t("safariShortcutSettingsTip") || "请在Safari浏览器的Safari菜单 > 偏好设置 > 扩展中设置快捷键",
                s = c.t("edgeShortcutSettingsTip") || "正在为您打开Edge扩展快捷键设置页面",
                p = c.t("firefoxShortcutSettingsTip") || "正在为您打开Firefox附加组件页面，请在扩展和主题中设置快捷键",
                M = c.t("confirmButton") || "确认",
                C = _(() => j.computed.username),
                T = _(() => j.computed.memberExpireTime),
                w = _(() => j.computed.balance),
                V = _(D);
            function D() {
                return j.popupInfo.value
            }
            const x = z(Math.random().toString(36).substring(2, 10)),
                N = ["pixel", "sunset", "ring", "bauhaus", "marble"],
                ie = z(N[Math.floor(Math.random() * N.length)]),
                d = [
                    ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"],
                    ["#7BD5F5", "#787FF6", "#4ADEDE", "#1CA7EC", "#1F2F98"],
                    ["#F48020", "#FAA030", "#FBC040", "#FFF050", "#FFFFA0"],
                    ["#D1DFE8", "#A6C1D5", "#6290C3", "#1C4966", "#083051"],
                    ["#FFBE0B", "#FB5607", "#FF006E", "#8338EC", "#3A86FF"]
                ],
                S = z(d[Math.floor(Math.random() * d.length)]),
                U = _(() => (Math.floor(w.value * 100) / 100).toFixed(2)),
                ae = _(() => Mi(U.value, globalThis.__DUBBING_I18N_GET_UI_LANGUAGE__())),
                q = _(() => Ii(T.value, y, globalThis.__DUBBING_I18N_GET_UI_LANGUAGE__()));
            ce(() => {
                j.getPopupInfo().catch(R => {
                    console.error("获取用户信息失败:", R)
                })
            });
            const oe = () => {
                    Li().logout().then(() => {
                        j.clearUserInfo(), window.close()
                    }).catch(R => {
                        console.error("退出登录失败:", R)
                    })
                },
                ne = () => {
                    const R = navigator.userAgent.toLowerCase();
                    if (R.includes("safari") && !R.includes("chrome")) {
                        de.fire({
                            title: E,
                            text: u,
                            icon: "info",
                            confirmButtonText: M
                        });
                        return
                    }
                    let X = "chrome://extensions/shortcuts",
                        K = !1,
                        re = "";
                    R.includes("edg") || R.includes("edge") ? (X = "edge://extensions/shortcuts", re = s, K = !0) : R.includes("firefox") && (X = "about:addons", re = p, K = !0), K ? de.fire({
                        title: E,
                        text: re,
                        icon: "info",
                        confirmButtonText: M
                    }).then(() => {
                        se(X)
                    }) : se(X)
                },
                se = R => {
                    try {
                        J.tabs.create({
                            url: R
                        })
                    } catch (X) {
                        console.error("无法打开快捷键设置页面:", X), de.fire({
                            title: E,
                            text: f,
                            icon: "warning",
                            confirmButtonText: M
                        })
                    }
                },
                be = () => {
                    window.open("about:blank", "_blank")
                };
            return (R, X) => {
                var K;
                return F(), k("article", Vi, [t("main", Ai, [t("div", Ti, [t("img", {
                    src: "https://cdn.builder.io/api/v1/image/assets/e1cb22ca81764b91b42f05cb3a0538dd/9c2467df47f8b5a5500fe62a7db03ab202b53294f6f3f281163754c7201e32e8?placeholderIfAbsent=true",
                    alt: m(i),
                    class: "object-contain shrink-0 w-8 aspect-square cursor-pointer hover:opacity-80",
                    onClick: X[0] || (X[0] = re => R.$emit("back")),
                    role: "button",
                    "aria-label": m(l)
                }, null, 8, Di), t("button", {
                    class: "hover:text-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500 rounded",
                    onClick: oe
                }, A(m(a)), 1)]), t("section", Zi, [t("div", qi, [t("div", zi, [t("div", Ui, [t("div", Hi, [H(m(ki), {
                    size: 54,
                    name: x.value,
                    variant: ie.value,
                    colors: S.value
                }, null, 8, ["name", "variant", "colors"])]), t("span", Oi, A(C.value), 1)])]), (K = V.value) != null && K.membership ? (F(), k("div", Pi, [t("div", Wi, [t("div", ji, [t("img", {
                    src: "https://cdn.builder.io/api/v1/image/assets/e1cb22ca81764b91b42f05cb3a0538dd/a7abb7825a70aad3efd0244d9b5d4792ae741de73fa04d0cded71009216250cc?placeholderIfAbsent=true",
                    alt: m(o),
                    class: "object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                }, null, 8, Ri), t("span", Gi, A(m(v)), 1)]), t("span", Ni, A(q.value), 1)])])) : G("", !0), t("div", Yi, [t("div", Ji, [t("span", Xi, A(m(n)), 1), t("span", Ki, A(ae.value), 1)])]), t("button", {
                    class: "flex overflow-hidden gap-10 justify-between items-center px-6 py-4 mt-2 w-full leading-6 text-black whitespace-nowrap bg-white rounded-xl border border-solid border-black border-opacity-10 min-h-14 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-500",
                    onClick: ne
                }, [t("span", Qi, A(m(E)), 1), t("img", {
                    src: "https://cdn.builder.io/api/v1/image/assets/e1cb22ca81764b91b42f05cb3a0538dd/f802edba400fcb1144658ed673a08deac1e621d1e8d797464289c5bbc0df13f7?placeholderIfAbsent=true",
                    alt: m(E),
                    class: "object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                }, null, 8, ea)])]), t("button", {
                    class: "overflow-hidden gap-2 self-stretch p-3 mt-8 max-w-full text-base font-medium text-white bg-violet-500 rounded-xl border border-solid border-black border-opacity-10 min-h-12 w-[344px] hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500",
                    onClick: be
                }, A(m(g)), 1)])])])
            }
        }
    }),
    ta = {
        class: "flex justify-between items-center p-6 bg-white"
    },
    la = ["aria-label"],
    ia = {
        class: "text-xs leading-6 text-black text-opacity-30"
    },
    aa = {
        class: "flex gap-3 items-center"
    },
    oa = ["aria-label"],
    na = {
        class: "text-sm leading-4 text-stone-600"
    },
    sa = {
        class: "justify-start text-white text-sm font-medium font-['PingFang_SC'] leading-[14px] whitespace-nowrap"
    },
    ra = ["aria-label"],
    ua = ["aria-label"],
    ca = {
        class: "justify-start text-white text-base font-medium font-['PingFang_SC'] leading-normal whitespace-nowrap"
    },
    da = {
        key: 0,
        class: "absolute right-4 top-20 z-50"
    },
    fa = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<rect width="24" height="24" rx="5.4" fill="url(#paint0_linear_1_35)"/>
<path d="M10.2656 7.24376C9.46817 6.71212 8.39999 7.28379 8.39999 8.24222V15.7578C8.39999 16.7162 9.46817 17.2879 10.2656 16.7562L15.9023 12.9985C16.6148 12.5235 16.6148 11.4765 15.9023 11.0015L10.2656 7.24376Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_1_35" x1="4.5" y1="-5.25266e-07" x2="24" y2="24" gradientUnits="userSpaceOnUse">
<stop stop-color="#6408F6"/>
<stop offset="1" stop-color="#CB51FF"/>
</linearGradient>
</defs>
</svg>
`,
    pa = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_1_669)">
    <path d="M1.86655 3.46655L4.66655 5.33322L7.45722 1.42655C7.51889 1.34013 7.6003 1.26969 7.69469 1.22108C7.78908 1.17248 7.89372 1.14713 7.99988 1.14713C8.10605 1.14713 8.21068 1.17248 8.30507 1.22108C8.39946 1.26969 8.48088 1.34013 8.54255 1.42655L11.3332 5.33322L14.1332 3.46655C14.2392 3.39605 14.3631 3.35735 14.4904 3.35504C14.6176 3.35273 14.7429 3.38689 14.8514 3.4535C14.9598 3.5201 15.047 3.61636 15.1024 3.73091C15.1579 3.84545 15.1795 3.97348 15.1645 4.09988L14.0692 13.4112C14.0501 13.5734 13.9722 13.7229 13.8501 13.8314C13.7281 13.9399 13.5705 13.9999 13.4072 13.9999H2.59255C2.42926 13.9999 2.27166 13.9399 2.14963 13.8314C2.02761 13.7229 1.94965 13.5734 1.93055 13.4112L0.835216 4.09922C0.820416 3.97287 0.842073 3.84493 0.89763 3.73049C0.953187 3.61606 1.04032 3.51991 1.14876 3.45339C1.25719 3.38687 1.38239 3.35277 1.50958 3.3551C1.63676 3.35743 1.76063 3.3961 1.86655 3.46655ZM7.99988 9.99988C8.35351 9.99988 8.69264 9.85941 8.94269 9.60936C9.19274 9.35931 9.33322 9.02017 9.33322 8.66655C9.33322 8.31293 9.19274 7.97379 8.94269 7.72374C8.69264 7.47369 8.35351 7.33322 7.99988 7.33322C7.64626 7.33322 7.30712 7.47369 7.05707 7.72374C6.80703 7.97379 6.66655 8.31293 6.66655 8.66655C6.66655 9.02017 6.80703 9.35931 7.05707 9.60936C7.30712 9.85941 7.64626 9.99988 7.99988 9.99988Z" fill="url(#paint0_linear_1_669)"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_1_669" x1="7.99993" y1="1.14713" x2="7.99993" y2="13.9999" gradientUnits="userSpaceOnUse">
      <stop stop-color="#211414"/>
      <stop offset="1" stop-color="#976541"/>
    </linearGradient>
    <clipPath id="clip0_1_669">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,
    ga = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_1_45)">
    <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.023 15.416C7.491 17.606 9.695 19 12.16 19C14.624 19 16.829 17.607 18.296 15.416C16.6317 13.8606 14.4379 12.9968 12.16 13C9.88171 12.9966 7.68751 13.8604 6.023 15.416ZM12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8C15 7.20435 14.6839 6.44129 14.1213 5.87868C13.5587 5.31607 12.7956 5 12 5C11.2044 5 10.4413 5.31607 9.87868 5.87868C9.31607 6.44129 9 7.20435 9 8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11Z" fill="#513876"/>
  </g>
  <defs>
    <clipPath id="clip0_1_45">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,
    va = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 1C12.5523 1 13 1.44772 13 2V3.0557C13.9405 3.22397 14.8264 3.56277 15.6228 4.04101L16.3712 3.29266C16.7617 2.90213 17.3949 2.90213 17.7854 3.29266L20.7071 6.21436C21.0976 6.60489 21.0976 7.23805 20.7071 7.62858L19.959 8.37672C20.4372 9.17316 20.776 10.0591 20.9443 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H20.9443C20.776 13.9409 20.4372 14.8268 19.959 15.6233L20.7071 16.3714C21.0976 16.762 21.0976 17.3951 20.7071 17.7856L17.7854 20.7073C17.3949 21.0979 16.7617 21.0979 16.3712 20.7073L15.6228 19.959C14.8264 20.4372 13.9405 20.776 13 20.9443V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V20.9443C10.0595 20.776 9.17359 20.4372 8.37718 19.959L7.62883 20.7073C7.23831 21.0979 6.60514 21.0979 6.21462 20.7073L3.29291 17.7856C2.90239 17.3951 2.90239 16.762 3.29291 16.3714L4.04104 15.6233C3.56279 14.8268 3.22399 13.9409 3.05572 13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H3.05572C3.22399 10.0591 3.56279 9.17316 4.04104 8.37672L3.29291 7.62858C2.90239 7.23805 2.90239 6.60489 3.29291 6.21436L6.21462 3.29266C6.60514 2.90213 7.23831 2.90213 7.62883 3.29266L8.37718 4.04101C9.17359 3.56277 10.0595 3.22397 11 3.0557V2C11 1.44772 11.4477 1 12 1ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z" fill="#513876"/>
</svg>
`,
    ha = `
<svg xmlns="http://www.w3.org/2000/svg" width="76" height="18" viewBox="0 0 76 18" fill="none">
  <path d="M71.4302 4.23767C72.202 4.23767 72.8993 4.33856 73.5222 4.54036C74.1585 4.7287 74.6934 4.97758 75.1267 5.287C75.3975 5.47534 75.6073 5.68386 75.7563 5.91256C75.9188 6.14126 76 6.43722 76 6.80045V13.8632C76 14.5762 75.8646 15.1883 75.5938 15.6996C75.323 16.2242 74.9506 16.6547 74.4767 16.991C74.0164 17.3408 73.468 17.5964 72.8316 17.7578C72.2088 17.9193 71.5385 18 70.8209 18C69.5888 18 68.6206 17.8318 67.9166 17.4955C67.2125 17.1726 66.8604 16.6413 66.8604 15.9013C66.8604 15.5919 66.9214 15.3161 67.0432 15.074C67.1786 14.8453 67.3276 14.6704 67.49 14.5493C67.8827 14.7646 68.3228 14.9462 68.8102 15.0942C69.3112 15.2422 69.8257 15.3161 70.3538 15.3161C71.0849 15.3161 71.6672 15.1951 72.1004 14.9529C72.5337 14.7108 72.7504 14.3206 72.7504 13.7825V13.4596C72.1952 13.7018 71.5182 13.8229 70.7194 13.8229C70.1101 13.8229 69.5278 13.7354 68.9727 13.5605C68.4311 13.3722 67.9504 13.0897 67.5307 12.713C67.1245 12.3229 66.7927 11.8251 66.5355 11.2197C66.2917 10.6144 66.1699 9.89462 66.1699 9.06054C66.1699 8.23991 66.2985 7.52691 66.5558 6.92153C66.8266 6.31614 67.1922 5.81839 67.6525 5.42825C68.1264 5.02466 68.6816 4.7287 69.318 4.54036C69.9679 4.33856 70.672 4.23767 71.4302 4.23767ZM72.6894 7.16368C72.5947 7.10987 72.4525 7.05606 72.2629 7.00224C72.0869 6.94843 71.8635 6.92153 71.5927 6.92153C70.9292 6.92153 70.4282 7.10987 70.0897 7.48655C69.7648 7.84978 69.6023 8.37444 69.6023 9.06054C69.6023 9.84081 69.7648 10.4058 70.0897 10.7556C70.4282 11.0919 70.8548 11.2601 71.3693 11.2601C71.9244 11.2601 72.3645 11.1323 72.6894 10.8767V7.16368Z" fill="black"/>
  <path d="M61.0313 8.13229C61.0313 7.71525 60.9094 7.41256 60.6657 7.22422C60.4355 7.02242 60.1173 6.92153 59.7111 6.92153C59.4403 6.92153 59.1695 6.95516 58.8987 7.02242C58.6414 7.08969 58.418 7.19058 58.2285 7.32511V14.3274C58.0931 14.3677 57.8764 14.4081 57.5785 14.4484C57.2942 14.4888 56.9963 14.509 56.6849 14.509C56.387 14.509 56.1162 14.4888 55.8725 14.4484C55.6423 14.4081 55.446 14.3274 55.2835 14.2063C55.121 14.0852 54.9924 13.9238 54.8976 13.722C54.8163 13.5067 54.7757 13.2309 54.7757 12.8946V6.84081C54.7757 6.47758 54.8502 6.18161 54.9991 5.95292C55.1616 5.72422 55.3783 5.5157 55.6491 5.32735C56.1094 5.00448 56.6849 4.74215 57.3754 4.54036C58.0795 4.33856 58.8581 4.23767 59.7111 4.23767C61.2411 4.23767 62.4191 4.57399 63.2451 5.24664C64.071 5.90583 64.484 6.82735 64.484 8.01121V14.3274C64.3486 14.3677 64.1319 14.4081 63.8341 14.4484C63.5497 14.4888 63.2518 14.509 62.9404 14.509C62.6425 14.509 62.3717 14.4888 62.128 14.4484C61.8978 14.4081 61.7015 14.3274 61.539 14.2063C61.3765 14.0852 61.2479 13.9238 61.1531 13.722C61.0719 13.5067 61.0313 13.2309 61.0313 12.8946V8.13229Z" fill="black"/>
  <path d="M48.9624 1.81614C48.9624 1.30493 49.1317 0.874439 49.4702 0.524663C49.8222 0.174888 50.2826 0 50.8513 0C51.4199 0 51.8735 0.174888 52.212 0.524663C52.5641 0.874439 52.7401 1.30493 52.7401 1.81614C52.7401 2.32735 52.5641 2.75785 52.212 3.10762C51.8735 3.4574 51.4199 3.63229 50.8513 3.63229C50.2826 3.63229 49.8222 3.4574 49.4702 3.10762C49.1317 2.75785 48.9624 2.32735 48.9624 1.81614ZM52.5776 14.3274C52.4287 14.3543 52.2053 14.3879 51.9074 14.4283C51.623 14.4821 51.3319 14.509 51.034 14.509C50.7362 14.509 50.4654 14.4888 50.2216 14.4484C49.9915 14.4081 49.7951 14.3274 49.6326 14.2063C49.4702 14.0852 49.3415 13.9238 49.2468 13.722C49.1655 13.5067 49.1249 13.2309 49.1249 12.8946V4.68161C49.2738 4.65471 49.4905 4.62108 49.7748 4.58072C50.0727 4.52691 50.3706 4.5 50.6685 4.5C50.9663 4.5 51.2304 4.52018 51.4606 4.56054C51.7043 4.6009 51.9074 4.68161 52.0699 4.80269C52.2323 4.92377 52.3542 5.09193 52.4354 5.30718C52.5302 5.50897 52.5776 5.77803 52.5776 6.11435V14.3274Z" fill="black"/>
  <path d="M37.1045 1.21076C37.2399 1.1704 37.4565 1.13004 37.7544 1.08969C38.0523 1.03587 38.3569 1.00897 38.6683 1.00897C38.9662 1.00897 39.2303 1.02915 39.4604 1.06951C39.7042 1.10987 39.9073 1.19058 40.0697 1.31166C40.2322 1.43274 40.3541 1.6009 40.4353 1.81614C40.5166 2.01794 40.5572 2.287 40.5572 2.62332V4.6009C40.8957 4.46637 41.2139 4.3722 41.5118 4.31839C41.8232 4.26457 42.1617 4.23767 42.5273 4.23767C43.1772 4.23767 43.7933 4.35202 44.3755 4.58072C44.9577 4.80942 45.4722 5.14574 45.9191 5.58969C46.3659 6.02018 46.7179 6.5583 46.9752 7.20404C47.2325 7.84978 47.3611 8.59641 47.3611 9.44395C47.3611 10.3184 47.2257 11.0852 46.9549 11.7444C46.6976 12.3901 46.332 12.9283 45.8581 13.3587C45.3842 13.7892 44.802 14.1188 44.1115 14.3475C43.4345 14.5628 42.683 14.6704 41.857 14.6704C40.9634 14.6704 40.2051 14.5628 39.5823 14.3475C38.9594 14.1457 38.4314 13.8901 37.9981 13.5807C37.4023 13.1637 37.1045 12.6256 37.1045 11.9664V1.21076ZM41.857 11.9664C42.4799 11.9664 42.9605 11.7578 43.2991 11.3408C43.6511 10.9103 43.8271 10.278 43.8271 9.44395C43.8271 8.59641 43.6511 7.96413 43.2991 7.54709C42.947 7.13004 42.4731 6.92153 41.8773 6.92153C41.6065 6.92153 41.3696 6.94843 41.1665 7.00224C40.9769 7.05606 40.7671 7.13677 40.5369 7.24439V11.6435C40.6858 11.7377 40.8618 11.8184 41.0649 11.8857C41.2816 11.9395 41.5456 11.9664 41.857 11.9664Z" fill="black"/>
  <path d="M25.1246 1.21076C25.26 1.1704 25.4767 1.13004 25.7745 1.08969C26.0724 1.03587 26.3771 1.00897 26.6885 1.00897C26.9864 1.00897 27.2504 1.02915 27.4806 1.06951C27.7243 1.10987 27.9274 1.19058 28.0899 1.31166C28.2524 1.43274 28.3742 1.6009 28.4555 1.81614C28.5367 2.01794 28.5773 2.287 28.5773 2.62332V4.6009C28.9159 4.46637 29.234 4.3722 29.5319 4.31839C29.8434 4.26457 30.1819 4.23767 30.5474 4.23767C31.1974 4.23767 31.8134 4.35202 32.3957 4.58072C32.9779 4.80942 33.4924 5.14574 33.9392 5.58969C34.3861 6.02018 34.7381 6.5583 34.9954 7.20404C35.2526 7.84978 35.3813 8.59641 35.3813 9.44395C35.3813 10.3184 35.2459 11.0852 34.9751 11.7444C34.7178 12.3901 34.3522 12.9283 33.8783 13.3587C33.4044 13.7892 32.8222 14.1188 32.1316 14.3475C31.4546 14.5628 30.7031 14.6704 29.8772 14.6704C28.9836 14.6704 28.2253 14.5628 27.6025 14.3475C26.9796 14.1457 26.4516 13.8901 26.0183 13.5807C25.4225 13.1637 25.1246 12.6256 25.1246 11.9664V1.21076ZM29.8772 11.9664C30.5 11.9664 30.9807 11.7578 31.3192 11.3408C31.6713 10.9103 31.8473 10.278 31.8473 9.44395C31.8473 8.59641 31.6713 7.96413 31.3192 7.54709C30.9672 7.13004 30.4933 6.92153 29.8975 6.92153C29.6267 6.92153 29.3898 6.94843 29.1867 7.00224C28.9971 7.05606 28.7872 7.13677 28.557 7.24439V11.6435C28.706 11.7377 28.882 11.8184 29.0851 11.8857C29.3018 11.9395 29.5658 11.9664 29.8772 11.9664Z" fill="black"/>
  <path d="M13.2629 4.68161C13.3983 4.64126 13.6081 4.6009 13.8925 4.56054C14.1904 4.52018 14.495 4.5 14.8064 4.5C15.1043 4.5 15.3683 4.52018 15.5985 4.56054C15.8422 4.6009 16.0453 4.68161 16.2078 4.80269C16.3703 4.92377 16.4922 5.09193 16.5734 5.30718C16.6682 5.50897 16.7156 5.77803 16.7156 6.11435V10.4529C16.7156 11.0045 16.851 11.4013 17.1218 11.6435C17.3926 11.8722 17.7853 11.9865 18.2998 11.9865C18.6112 11.9865 18.8617 11.9596 19.0513 11.9058C19.2544 11.852 19.4101 11.7982 19.5184 11.7444V4.68161C19.6538 4.64126 19.8637 4.6009 20.148 4.56054C20.4459 4.52018 20.7505 4.5 21.062 4.5C21.3598 4.5 21.6239 4.52018 21.8541 4.56054C22.0978 4.6009 22.3009 4.68161 22.4634 4.80269C22.6258 4.92377 22.7477 5.09193 22.8289 5.30718C22.9237 5.50897 22.9711 5.77803 22.9711 6.11435V12.2489C22.9711 12.9215 22.6868 13.426 22.1181 13.7623C21.6442 14.0583 21.0755 14.2803 20.412 14.4283C19.7621 14.5897 19.0513 14.6704 18.2795 14.6704C17.5483 14.6704 16.8713 14.5897 16.2484 14.4283C15.6391 14.2668 15.1111 14.0179 14.6643 13.6816C14.2174 13.3453 13.8722 12.9148 13.6284 12.3901C13.3847 11.852 13.2629 11.2063 13.2629 10.4529V4.68161Z" fill="black"/>
  <path d="M3.53397 11.7242C3.68291 11.7511 3.8657 11.778 4.08234 11.8049C4.29898 11.8184 4.50209 11.8251 4.69165 11.8251C5.15201 11.8251 5.57175 11.7578 5.95088 11.6233C6.34354 11.4888 6.67527 11.2803 6.94608 10.9978C7.23042 10.7152 7.44706 10.352 7.596 9.90807C7.75848 9.45067 7.83972 8.90583 7.83972 8.27354C7.83972 7.06278 7.55538 6.15471 6.9867 5.54933C6.41801 4.93049 5.65977 4.62108 4.71196 4.62108C4.5224 4.62108 4.32607 4.6278 4.12296 4.64126C3.9334 4.65471 3.73707 4.67489 3.53397 4.70179V11.7242ZM4.67134 14.6704C4.44116 14.6704 4.17712 14.6637 3.87924 14.6502C3.58136 14.6368 3.26994 14.6099 2.94497 14.5695C2.63355 14.5291 2.31536 14.4753 1.9904 14.4081C1.67897 14.3543 1.38786 14.2735 1.11706 14.1659C0.372353 13.8834 0 13.3924 0 12.6928V3.26906C0 2.98655 0.0744705 2.7713 0.223412 2.62332C0.385893 2.46188 0.602535 2.33408 0.873337 2.23991C1.45556 2.05157 2.07164 1.93049 2.72156 1.87668C3.37149 1.80942 3.95371 1.77578 4.46824 1.77578C5.52436 1.77578 6.47894 1.90359 7.33197 2.15919C8.19854 2.4148 8.93647 2.81166 9.54578 3.34978C10.1686 3.87444 10.6493 4.54036 10.9878 5.34753C11.3263 6.15471 11.4956 7.10987 11.4956 8.213C11.4956 9.28924 11.3331 10.2309 11.0081 11.0381C10.6831 11.8318 10.216 12.5045 9.60671 13.0561C9.01094 13.5942 8.29332 13.9978 7.45383 14.2668C6.61434 14.5359 5.68685 14.6704 4.67134 14.6704Z" fill="black"/>
</svg>
`,
    ma = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<g clip-path="url(#clip0_1_542)">
<path d="M1.86655 3.46655L4.66655 5.33322L7.45722 1.42655C7.51889 1.34013 7.6003 1.26969 7.69469 1.22108C7.78908 1.17248 7.89372 1.14713 7.99988 1.14713C8.10605 1.14713 8.21068 1.17248 8.30507 1.22108C8.39946 1.26969 8.48088 1.34013 8.54255 1.42655L11.3332 5.33322L14.1332 3.46655C14.2392 3.39605 14.3631 3.35735 14.4904 3.35504C14.6176 3.35273 14.7429 3.38689 14.8514 3.4535C14.9598 3.5201 15.047 3.61636 15.1024 3.73091C15.1579 3.84545 15.1795 3.97348 15.1645 4.09988L14.0692 13.4112C14.0501 13.5734 13.9722 13.7229 13.8501 13.8314C13.7281 13.9399 13.5705 13.9999 13.4072 13.9999H2.59255C2.42926 13.9999 2.27166 13.9399 2.14963 13.8314C2.02761 13.7229 1.94965 13.5734 1.93055 13.4112L0.835216 4.09922C0.820416 3.97287 0.842073 3.84493 0.89763 3.73049C0.953187 3.61606 1.04032 3.51991 1.14876 3.45339C1.25719 3.38687 1.38239 3.35277 1.50958 3.3551C1.63676 3.35743 1.76063 3.3961 1.86655 3.46655ZM7.99988 9.99988C8.35351 9.99988 8.69264 9.85941 8.94269 9.60936C9.19274 9.35931 9.33322 9.02017 9.33322 8.66655C9.33322 8.31293 9.19274 7.97379 8.94269 7.72374C8.69264 7.47369 8.35351 7.33322 7.99988 7.33322C7.64626 7.33322 7.30712 7.47369 7.05707 7.72374C6.80703 7.97379 6.66655 8.31293 6.66655 8.66655C6.66655 9.02017 6.80703 9.35931 7.05707 9.60936C7.30712 9.85941 7.64626 9.99988 7.99988 9.99988Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1_542">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
`,
    Ca = W({
        __name: "PanelHeader",
        emits: ["showAccount"],
        setup(e) {
            const i = z(!1),
                l = z(""),
                a = z(te.toLanguage),
                v = _(() => j.computed.isLoggedIn),
                o = _(() => j.computed.isMember);
            _(() => j.computed.memberExpireTime);
            const y = _(() => j.computed.remainingDays.toString()),
                n = _(() => c.t("name") || "YouTube Dubbing"),
                E = _(() => c.t("subscriptionRecharge") || "Membership plans"),
                g = _(() => c.t("userAccountAriaLabel") || "User account"),
                f = _(() => c.t("sidebarSettings") || "Settings"),
                u = _(() => yt(Number(y.value || 0), a.value)),
                s = _(() => c.t("subscribe") || "Subscribe"),
                p = _(() => c.t("login") || "Login");
            ce(() => {
                try {
                    l.value = J.runtime.getManifest().version
                } catch (V) {
                    console.error("获取版本号失败:", V), l.value = "2.8.4"
                }
                try {
                    const V = globalThis.__DUBBING_I18N_GET_UI_LANGUAGE__().replace("_", "-");
                    a.value = V || te.toLanguage
                } catch (V) {
                    console.error("获取UI语言失败:", V), a.value = te.toLanguage
                }
                j.getPopupInfo().catch(V => {
                    console.error("获取会员信息失败:", V)
                })
            });
            const M = () => {
                    me.isIos() ? window.open("about:blank", "_blank") : J.tabs.create({
                        url: "about:blank"
                    })
                },
                C = () => {
                    me.isIos() ? window.open("about:blank", "_blank") : J.tabs.create({
                        url: "about:blank"
                    })
                },
                T = async () => {
                    try {
                        await J.runtime.openOptionsPage()
                    } catch (V) {
                        console.error("打开 options 页面失败，尝试 fallback:", V);
                        const D = J.runtime.getURL("options.html");
                        me.isIos() ? window.open(D, "_blank") : J.tabs.create({
                            url: D
                        })
                    }
                }, w = () => {
                    me.isIos() ? window.open("https://www.youtube-dubbing.com/", "_blank") : J.tabs.create({
                        url: "https://www.youtube-dubbing.com/"
                    })
                };
            return (V, D) => (F(), k($e, null, [t("header", ta, [t("div", {
                class: "flex gap-2 items-center cursor-pointer",
                onClick: w,
                role: "button",
                "aria-label": n.value
            }, [t("div", {
                innerHTML: fa
            }), t("div", {
                innerHTML: ha
            }), t("span", ia, "V" + A(l.value), 1)], 8, la), t("div", aa, [o.value ? (F(), k("div", {
                key: 0,
                class: "flex gap-1 items-center px-2 py-1 rounded-lg shadow-[0_8px_19px_rgba(0,0,0,0.05)] cursor-pointer",
                style: {
                    "border-radius": "8px",
                    background: "linear-gradient(244deg, rgba(183, 124, 68, 0.90) -22.78%, rgba(254, 229, 187, 0.90) 21.66%, rgba(191, 133, 74, 0.90) 73.36%, rgba(252, 223, 179, 0.90) 116.08%, rgba(192, 134, 75, 0.90) 157.62%, rgba(251, 232, 212, 0.90) 205.07%), #FFF",
                    "box-shadow": "-28px 211px 60px 0px rgba(0, 0, 0, 0.00), -18px 135px 55px 0px rgba(0, 0, 0, 0.01), -10px 76px 46px 0px rgba(0, 0, 0, 0.03), -4px 34px 34px 0px rgba(0, 0, 0, 0.04), -1px 8px 19px 0px rgba(0, 0, 0, 0.05)"
                },
                onClick: M,
                role: "button",
                "aria-label": E.value
            }, [t("div", {
                innerHTML: pa
            }), t("span", na, A(u.value), 1)], 8, oa)) : v.value ? (F(), k("div", {
                key: 1,
                class: "px-2 py-1 bg-[#9554f3] rounded-lg inline-flex justify-start items-center gap-[3px]",
                onClick: M,
                role: "button"
            }, [t("div", {
                class: "w-4 h-4 relative overflow-hidden"
            }, [D[2] || (D[2] = t("div", {
                class: "w-4 h-4 left-0 top-0 absolute"
            }, null, -1)), t("div", {
                innerHTML: ma
            })]), t("div", sa, A(s.value), 1)])) : G("", !0), v.value ? (F(), k("div", {
                key: 2,
                innerHTML: va,
                class: "cursor-pointer hover:opacity-80 transition-opacity",
                onClick: T,
                role: "button",
                "aria-label": f.value
            }, null, 8, ra)) : G("", !0), v.value ? (F(), k("div", {
                key: 3,
                innerHTML: ga,
                class: "cursor-pointer hover:opacity-80 transition-opacity",
                onClick: D[0] || (D[0] = x => V.$emit("showAccount")),
                role: "button",
                "aria-label": g.value
            }, null, 8, ua)) : (F(), k("div", {
                key: 4,
                class: "w-20 h-8 p-3 bg-[#9554f3] rounded-xl outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-center items-center gap-2 overflow-hidden",
                onClick: C,
                role: "button"
            }, [t("div", ca, A(p.value), 1)]))])]), i.value ? (F(), k("div", da, [H(et, {
                onClose: D[1] || (D[1] = x => i.value = !1)
            })])) : G("", !0)], 64))
        }
    }),
    xa = {
        class: "flex gap-2 px-4 py-0 mb-3 w-full box-border"
    },
    ba = {
        class: "flex-1"
    },
    wa = {
        class: "text-black text-sm font-normal font-['PingFang SC'] leading-normal"
    },
    ya = {
        class: "flex-1"
    },
    $a = {
        class: "text-black text-sm font-normal font-['PingFang SC'] leading-normal"
    },
    Sa = W({
        __name: "LanguageSelector",
        props: {
            fromLanguage: {},
            toLanguage: {}
        },
        emits: ["update:fromLanguage", "update:toLanguage", "languageChange"],
        setup(e, {
            emit: i
        }) {
            var N, ie;
            const l = ((N = c.t("source_languages")) == null ? void 0 : N.replace(":", "")) || "源语言",
                a = ((ie = c.t("target_languages")) == null ? void 0 : ie.replace(":", "")) || "目标语言",
                v = c.t("selectSourceLanguage") || "选择源语言",
                o = c.t("selectTargetLanguage") || "选择目标语言",
                y = c.t("searchSourceLanguage") || "搜索源语言...",
                n = c.t("searchTargetLanguage") || "搜索目标语言...",
                E = c.t("loading") || "加载中...",
                g = te.languageMap,
                f = e,
                u = i,
                s = B([]),
                p = B(!0);
            ce(() => {
                try {
                    const d = [];
                    for (let S in g) d.push({
                        value: S,
                        text: g[S]
                    });
                    s.value = d, M.value = f.fromLanguage || "en-US", C.value = f.toLanguage || te.toLanguage
                } catch (d) {
                    console.error("Failed to initialize language options:", d)
                } finally {
                    p.value = !1
                }
            });
            const M = B(f.fromLanguage || "en-US"),
                C = B(f.toLanguage || te.toLanguage);
            O(() => f.fromLanguage, d => {
                d && d !== M.value && (M.value = d)
            }), O(() => f.toLanguage, d => {
                d && d !== C.value && (C.value = d)
            });
            const T = _(() => {
                    if (s.value.length === 0) return -1;
                    const d = s.value.findIndex(S => S.value === M.value);
                    return d >= 0 ? d : 0
                }),
                w = _(() => {
                    if (s.value.length === 0) return -1;
                    const d = s.value.findIndex(S => S.value === C.value);
                    return d >= 0 ? d : 0
                }),
                V = d => {
                    d >= 0 && d < s.value.length && (M.value = s.value[d].value, u("update:fromLanguage", M.value), u("languageChange"))
                },
                D = d => {
                    d >= 0 && d < s.value.length && (C.value = s.value[d].value, u("update:toLanguage", C.value), u("languageChange"))
                },
                x = d => {
                    try {
                        return g[d] || d
                    } catch (S) {
                        return console.error("Failed to get language name:", S), d
                    }
                };
            return (d, S) => (F(), k("div", xa, [t("div", ba, [H(Ce, {
                modelValue: T.value,
                options: m(s),
                label: m(l),
                placeholder: m(v),
                emptyText: m(E),
                searchable: "",
                searchPlaceholder: m(y),
                "onUpdate:modelValue": V
            }, {
                text: Se(() => [t("span", wa, A(x(m(M))), 1)]),
                _: 1
            }, 8, ["modelValue", "options", "label", "placeholder", "emptyText", "searchPlaceholder"])]), S[0] || (S[0] = t("div", {
                class: "flex items-center justify-center w-6"
            }, [t("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, [t("path", {
                d: "M5 12H19",
                stroke: "black",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }), t("path", {
                d: "M12 5L19 12L12 19",
                stroke: "black",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            })])], -1)), t("div", ya, [H(Ce, {
                modelValue: w.value,
                options: m(s),
                label: m(a),
                placeholder: m(o),
                emptyText: m(E),
                searchable: "",
                searchPlaceholder: m(n),
                "onUpdate:modelValue": D
            }, {
                text: Se(() => [t("span", $a, A(x(m(C))), 1)]),
                _: 1
            }, 8, ["modelValue", "options", "label", "placeholder", "emptyText", "searchPlaceholder"])])]))
        }
    });
function tt(e) {
    if (!e) return null;
    if (_e[e]) return e;
    const i = e.split("-")[0];
    for (const l of Object.keys(_e))
        if (l === e || l.startsWith(i + "-") || l === i) return l;
    return null
}
function _a(e) {
    return tt(e) !== null
}
const Fa = {
        class: "px-4 py-0 mb-2"
    },
    ka = {
        class: "flex items-center w-full gap-2"
    },
    Ea = {
        class: "w-[99px]"
    },
    La = {
        class: "flex flex-1 items-center bg-white rounded-xl border border-solid border-black border-opacity-10"
    },
    Ba = {
        class: "w-[69px] flex items-center"
    },
    Ma = {
        class: "flex-1 flex items-center"
    },
    Ia = {
        class: "w-[320px] bg-white rounded-2xl p-6 shadow-2xl flex flex-col gap-4"
    },
    Va = {
        class: "text-base font-medium text-black"
    },
    Aa = {
        class: "text-sm text-black/70 leading-relaxed"
    },
    Ta = {
        class: "flex gap-2 justify-end"
    },
    pe = "memberFree",
    Da = W({
        __name: "VoiceControls",
        props: {
            toLanguage: {},
            voiceType: {},
            gender: {},
            voice: {}
        },
        emits: ["update:voiceType", "update:gender", "update:voice"],
        setup(e, {
            emit: i
        }) {
            const l = e,
                a = i,
                v = _(() => _a(l.toLanguage)),
                o = _(() => $t(l.toLanguage)),
                y = _(() => {
                    const r = [{
                        value: "free",
                        text: c.t("free") || "免费"
                    }];
                    return o.value && r.push({
                        value: "azure",
                        text: "Azure"
                    }), r
                }),
                n = _(() => {
                    var L, P;
                    if (u.value !== pe) return ["1", "0"];
                    const r = tt(l.toLanguage);
                    if (!r) return ["1", "0"];
                    const h = _e[r],
                        $ = [];
                    return (L = h == null ? void 0 : h["1"]) != null && L.length && $.push("1"), (P = h == null ? void 0 : h["0"]) != null && P.length && $.push("0"), $.length > 0 ? $ : ["1", "0"]
                }),
                E = _(() => [{
                    value: "1",
                    text: c.t("man") || "男"
                }, {
                    value: "0",
                    text: c.t("woman") || "女"
                }].filter(h => n.value.includes(h.value))),
                g = [{
                    value: "1",
                    text: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6562 1.875H9.71875C9.66719 1.875 9.625 1.91719 9.625 1.96875V2.84375C9.625 2.89531 9.66719 2.9375 9.71875 2.9375H12.225L9.11094 6.05156C8.32969 5.45 7.37656 5.125 6.375 5.125C5.17344 5.125 4.04219 5.59375 3.19375 6.44375C2.34531 7.29375 1.875 8.42344 1.875 9.625C1.875 10.8266 2.34375 11.9578 3.19375 12.8062C4.04219 13.6562 5.17344 14.125 6.375 14.125C7.57656 14.125 8.70781 13.6562 9.55625 12.8062C10.4062 11.9578 10.875 10.8266 10.875 9.625C10.875 8.62344 10.55 7.67344 9.95 6.89219L13.0625 3.77969V6.28125C13.0625 6.33281 13.1047 6.375 13.1562 6.375H14.0312C14.0828 6.375 14.125 6.33281 14.125 6.28125V2.34375C14.125 2.08594 13.9141 1.875 13.6562 1.875ZM6.375 12.9375C4.54844 12.9375 3.0625 11.4516 3.0625 9.625C3.0625 7.79844 4.54844 6.3125 6.375 6.3125C8.20156 6.3125 9.6875 7.79844 9.6875 9.625C9.6875 11.4516 8.20156 12.9375 6.375 12.9375Z" fill="#0062FF"/>
</svg>`
                }, {
                    value: "0",
                    text: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.1375 8.575C11.975 7.7375 12.4375 6.62188 12.4375 5.4375C12.4375 4.25156 11.9766 3.1375 11.1375 2.3C10.3 1.4625 9.18438 1 8 1C6.81562 1 5.7 1.46094 4.8625 2.3C4.025 3.13906 3.5625 4.25156 3.5625 5.4375C3.5625 6.43437 3.88906 7.38125 4.49062 8.15469C4.60469 8.30156 4.72813 8.44062 4.86094 8.575C4.99375 8.70781 5.13437 8.83125 5.27969 8.94531C5.89844 9.42656 6.62813 9.73281 7.40625 9.83594V11.5H5.625C5.55625 11.5 5.5 11.5562 5.5 11.625V12.5625C5.5 12.6313 5.55625 12.6875 5.625 12.6875H7.40625V14.875C7.40625 14.9438 7.4625 15 7.53125 15H8.46875C8.5375 15 8.59375 14.9438 8.59375 14.875V12.6875H10.375C10.4438 12.6875 10.5 12.6313 10.5 12.5625V11.625C10.5 11.5562 10.4438 11.5 10.375 11.5H8.59375V9.83594C9.55469 9.70781 10.4406 9.27187 11.1375 8.575ZM8 8.6875C7.13125 8.6875 6.31719 8.35 5.70156 7.73594C5.0875 7.12188 4.75 6.30625 4.75 5.4375C4.75 4.56875 5.0875 3.75469 5.70156 3.13906C6.31562 2.52344 7.13125 2.1875 8 2.1875C8.86875 2.1875 9.68281 2.525 10.2984 3.13906C10.9125 3.75312 11.25 4.56875 11.25 5.4375C11.25 6.30625 10.9125 7.12031 10.2984 7.73594C9.68281 8.35 8.86875 8.6875 8 8.6875Z" fill="#FF6161"/>
</svg>`
                }],
                f = _(() => g.filter(r => n.value.includes(r.value))),
                u = z(l.voiceType || "free"),
                s = z(l.gender || "1"),
                p = z(l.voice || ""),
                M = z(!1),
                C = _(() => u.value === pe ? _e : u.value === "free" ? Re : Ge),
                T = _(() => u.value === pe ? Ne : Ye);
            function w() {
                return !1
            }
            O(() => l.voiceType, r => {
                if (r && r !== u.value) {
                    if (u.value = r, w()) return;
                    if (u.value === pe && !n.value.includes(s.value)) {
                        const h = n.value[0];
                        h && (s.value = h, a("update:gender", s.value))
                    }
                    if (x.value.length > 0) {
                        const h = p.value;
                        h && x.value.some(L => L.value === h) || re()
                    }
                    a("update:voice", p.value)
                }
            }), O(() => l.gender, r => {
                if (r && r !== s.value) {
                    const h = p.value;
                    if (s.value = r, x.value.length > 0)
                        if (!(h && x.value.some(L => L.value === h))) re();
                        else {
                            const L = x.value.find(P => P.value === h);
                            L && (q.value = L.text)
                        }
                    a("update:gender", s.value), a("update:voice", p.value)
                }
            }), O(() => l.voice, r => {
                if (r && r !== p.value && x.value.some($ => $.value === r)) {
                    p.value = r;
                    const $ = x.value.find(L => L.value === r);
                    $ && (q.value = $.text)
                }
            });
            const V = _(() => y.value.findIndex(r => r.value === u.value)),
                D = _(() => E.value.findIndex(r => r.value === s.value)),
                x = _(N);
            function N() {
                if (!l.toLanguage) return [];
                try {
                    const r = s.value;
                    if (!C.value[l.toLanguage]) {
                        const h = d(l.toLanguage);
                        return h ? ie(h, r) : []
                    }
                    return ie(l.toLanguage, r)
                } catch (r) {
                    return console.error("获取声音选项失败:", r), []
                }
            }
            function ie(r, h) {
                const $ = C.value[r][h] || [];
                if ($.length === 0) return console.warn(`语言 "${r}" 的 ${h==="0"?"女声":"男声"} 没有可用声音`), [];
                const L = T.value;
                return $.filter(P => L[P]).map(P => {
                    const le = L[P];
                    return {
                        value: le.code,
                        text: r === le.language ? le.localName : le.displayName
                    }
                })
            }
            const d = r => {
                    const h = r.split("-")[0];
                    for (const $ of Object.keys(C.value))
                        if ($.startsWith(h + "-")) return $;
                    return null
                },
                S = _(() => {
                    if (x.value.length === 0) return -1;
                    const r = x.value.findIndex(h => h.value === p.value);
                    return r >= 0 ? r : 0
                }),
                U = z(c.t("free") || "Free"),
                ae = z(c.t("man") || "Male"),
                q = z("");
            O(v, () => {
                w()
            }, {
                immediate: !0
            }), O(o, () => {
                w()
            }, {
                immediate: !0
            });
            const oe = async r => {
                if (r >= 0 && r < y.value.length) {
                    const h = y.value[r].value;
                    if (h === pe && !await R()) return;
                    const $ = p.value;
                    if (u.value = h, U.value = y.value[r].text, u.value === pe && !n.value.includes(s.value)) {
                        const L = n.value[0];
                        L && (s.value = L, a("update:gender", s.value))
                    }
                    if (x.value.length > 0)
                        if ($ && x.value.some(L => L.value === $)) {
                            p.value = $;
                            const L = x.value.find(P => P.value === $);
                            L && (q.value = L.text)
                        } else p.value = x.value[0].value, q.value = x.value[0].text;
                    a("update:voice", p.value), a("update:voiceType", u.value)
                }
            }, ne = r => {
                if (r >= 0 && r < E.value.length) {
                    const h = p.value;
                    if (s.value = E.value[r].value, ae.value = E.value[r].text, x.value.length > 0)
                        if (h && x.value.some(L => L.value === h)) {
                            p.value = h;
                            const L = x.value.find(P => P.value === h);
                            L && (q.value = L.text)
                        } else p.value = x.value[0].value, q.value = x.value[0].text;
                    a("update:gender", s.value), a("update:voice", p.value)
                }
            }, se = r => {
                r >= 0 && r < x.value.length && (p.value = x.value[r].value, q.value = x.value[r].text, a("update:voice", p.value))
            }, be = async () => {
                const h = (await ue.getItem("local:settings") || {}).voice;
                if (h && x.value.some($ => $.value === h)) {
                    p.value = h;
                    const $ = x.value.find(L => L.value === h);
                    $ && (q.value = $.text), a("update:voice", p.value);
                    return
                }
                if (l.voice && x.value.some($ => $.value === l.voice)) {
                    p.value = l.voice;
                    const $ = x.value.find(L => L.value === l.voice);
                    $ && (q.value = $.text), a("update:voice", p.value);
                    return
                }
                x.value.length > 0 && (p.value = x.value[0].value, q.value = x.value[0].text, a("update:voice", p.value))
            };
            ce(async () => {
                try {
                    const L = (await ue.getItem("local:settings") || {}).voicesType;
                    L && L !== u.value && (u.value = L, a("update:voiceType", u.value)), w()
                } catch ($) {
                    console.error("从settings对象加载声音设置失败:", $)
                }
                let r = !1;
                const h = O(x, async $ => {
                    $.length > 0 && !r && (await be(), r = !0, h())
                })
            });
            async function R() {
                return !0
            }
            const X = () => {
                    var h, $;
                    M.value = !1;
                    const r = "about:blank";
                    try {
                        ($ = (h = globalThis.BrowserUtils) == null ? void 0 : h.isIos) != null && $.call(h) ? window.open(r, "_blank") : J.tabs.create({
                            url: r
                        })
                    } catch {
                        window.open(r, "_blank")
                    }
                },
                K = () => {
                    M.value = !1
                };
            O(x, (r, h) => {
                if (r.length > 0) {
                    const $ = p.value && r.some(L => L.value === p.value);
                    if (!p.value || !$) re() && a("update:voice", p.value);
                    else {
                        const L = r.find(P => P.value === p.value);
                        L && (q.value = L.text)
                    }
                }
            }), O(() => l.toLanguage, (r, h) => {
                if (r && r !== h && x.value.length > 0) {
                    const $ = p.value;
                    if (!($ && x.value.some(P => P.value === $))) {
                        if (l.voice)
                            if (x.value.some(le => le.value === l.voice)) {
                                p.value = l.voice;
                                const le = x.value.find(Le => Le.value === l.voice);
                                le && (q.value = le.text)
                            } else p.value = x.value[0].value, q.value = x.value[0].text;
                        else p.value = x.value[0].value, q.value = x.value[0].text;
                        a("update:voice", p.value)
                    }
                }
            });
            const re = () => {
                if (x.value.length > 0) {
                    if (p.value && x.value.some(h => h.value === p.value)) {
                        const h = x.value.find($ => $.value === p.value);
                        return h && (q.value = h.text), !0
                    }
                    if (l.voice && x.value.some(h => h.value === l.voice)) {
                        p.value = l.voice;
                        const h = x.value.find($ => $.value === l.voice);
                        return h && (q.value = h.text), !0
                    }
                    return p.value = x.value[0].value, q.value = x.value[0].text, !0
                }
                return !1
            };
            return (r, h) => (F(), k("div", Fa, [t("div", ka, [t("div", Ea, [H(Ce, {
                modelValue: V.value,
                options: y.value,
                label: ("i18n" in r ? r.i18n : m(c)).t("voicesType"),
                "onUpdate:modelValue": oe
            }, null, 8, ["modelValue", "options", "label"])]), t("div", La, [t("div", Ba, [H(Ce, {
                modelValue: D.value,
                options: f.value,
                label: ("i18n" in r ? r.i18n : m(c)).t("sex"),
                "onUpdate:modelValue": ne
            }, null, 8, ["modelValue", "options", "label"])]), h[0] || (h[0] = t("div", {
                class: "mx-4 my-0 w-px h-6 bg-black bg-opacity-10"
            }, null, -1)), t("div", Ma, [H(Ce, {
                modelValue: S.value,
                options: x.value,
                label: ("i18n" in r ? r.i18n : m(c)).t("voices"),
                "onUpdate:modelValue": se
            }, null, 8, ["modelValue", "options", "label"])])])]), (F(), ze(mt, {
                to: "body"
            }, [M.value ? (F(), k("div", {
                key: 0,
                class: "fixed inset-0 z-[2147483647] flex items-center justify-center bg-black/40",
                onClick: Ae(K, ["self"])
            }, [t("div", Ia, [t("div", Va, A(("i18n" in r ? r.i18n : m(c)).t("memberFree") || "Members Free"), 1), t("div", Aa, A(("i18n" in r ? r.i18n : m(c)).t("memberFreeRequireMembership") || "This voice type is for members only. Upgrade to use it free."), 1), t("div", Ta, [t("button", {
                class: "px-4 py-2 rounded-lg text-sm text-black/60 hover:bg-black/5",
                onClick: K
            }, A(("i18n" in r ? r.i18n : m(c)).t("cancelButton") || "Cancel"), 1), t("button", {
                class: "px-4 py-2 rounded-lg text-sm text-white bg-[#9554f3] hover:bg-[#8542e3]",
                onClick: X
            }, A(("i18n" in r ? r.i18n : m(c)).t("subscribe") || "Subscribe"), 1)])])])) : G("", !0)]))]))
        }
    }),
    Za = Ee(Da, [
        ["__scopeId", "data-v-6e1734c7"]
    ]),
    qa = {
        class: "volume-slider"
    },
    za = ["value"],
    Ua = {
        class: "slider-container"
    },
    Ha = W({
        __name: "VolumeSlider",
        props: {
            modelValue: {},
            label: {},
            width: {}
        },
        emits: ["update:modelValue", "input"],
        setup(e, {
            emit: i
        }) {
            const l = e,
                a = i,
                v = _(() => l.modelValue),
                o = y => {
                    const n = y.target;
                    a("update:modelValue", Number(n.value)), a("input")
                };
            return (y, n) => (F(), k("div", {
                class: "relative",
                style: ye({
                    width: y.width
                })
            }, [t("div", qa, [t("input", {
                type: "range",
                value: v.value,
                min: "0",
                max: "100",
                class: "slider-input",
                onInput: o
            }, null, 40, za), t("div", Ua, [n[1] || (n[1] = t("div", {
                class: "slider-bg"
            }, [t("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "97",
                height: "16",
                viewBox: "0 0 97 16",
                fill: "none"
            }, [t("path", {
                d: "M0 14.3999C0 13.5984 0.593082 12.9205 1.38753 12.814L94.7343 0.303645C95.9337 0.142901 97 1.0758 97 2.28592V14C97 15.1046 96.1046 16 95 16H1.60007C0.716373 16 0 15.2836 0 14.3999Z",
                fill: "#E6E6E6"
            })])], -1)), t("div", {
                class: "slider-progress",
                style: ye({
                    clipPath: `inset(0 ${100-v.value}% 0 0)`
                })
            }, n[0] || (n[0] = [t("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "97",
                height: "16",
                viewBox: "0 0 97 16",
                fill: "none"
            }, [t("path", {
                d: "M0 14.3999C0 13.5984 0.593082 12.9205 1.38753 12.814L94.7343 0.303645C95.9337 0.142901 97 1.0758 97 2.28592V14C97 15.1046 96.1046 16 95 16H1.60007C0.716373 16 0 15.2836 0 14.3999Z",
                fill: "#9554F3"
            })], -1)]), 4)]), t("div", {
                class: "slider-handle",
                style: ye({
                    left: `${v.value}%`
                })
            }, null, 4)])], 4))
        }
    }),
    Pe = Ee(Ha, [
        ["__scopeId", "data-v-a793dff7"]
    ]);
async function lt() {
    const i = (await J.tabs.query({
        active: !0,
        currentWindow: !0
    }))[0];
    if (typeof (i == null ? void 0 : i.id) == "number") return i.id
}
async function qe(e, i) {
    try {
        const l = await lt();
        if (l === void 0) return;
        await e(l)
    } catch (l) {
        if (Ue(l)) return;
        console.warn(i, l)
    }
}
async function Oa(e, i, l) {
    try {
        const a = await lt();
        return a === void 0 ? i : await e(a)
    } catch (a) {
        return Ue(a) || console.warn(l, a), i
    }
}
const Pa = {
        class: "px-4 py-0 mb-2"
    },
    Wa = {
        key: 0,
        class: "flex items-center p-3 mb-2 bg-white rounded-xl border border-solid border-black border-opacity-10 w-full box-border"
    },
    ja = {
        class: "flex-1 flex justify-between items-center"
    },
    Ra = {
        class: "text-left font-medium text-gray-900"
    },
    Ga = {
        class: "flex-shrink-0 relative h-6",
        style: {
            width: "84px"
        }
    },
    Na = {
        class: "flex-1 flex justify-between items-center"
    },
    Ya = {
        class: "text-left font-medium text-gray-900"
    },
    Ja = {
        class: "flex-shrink-0 relative h-6",
        style: {
            width: "84px"
        }
    },
    Xa = {
        class: "flex items-center p-3 mb-2 bg-white rounded-xl border border-solid border-black border-opacity-10"
    },
    Ka = {
        class: "flex-1 flex justify-between items-center"
    },
    Qa = {
        class: "text-left font-medium text-gray-900"
    },
    eo = {
        class: "flex-shrink-0"
    },
    to = {
        class: "flex-1 flex justify-between items-center"
    },
    lo = {
        class: "text-left font-medium text-gray-900"
    },
    io = {
        class: "flex-shrink-0"
    },
    ao = W({
        __name: "AudioControls",
        props: {
            originalVolume: {},
            translatedVolume: {},
            backgroundAudio: {
                type: Boolean
            },
            floatingBall: {
                type: Boolean
            }
        },
        emits: ["update:originalVolume", "update:translatedVolume", "update:backgroundVolume", "update:backgroundAudio", "update:floatingBall"],
        setup(e, {
            emit: i
        }) {
            const l = e,
                a = i,
                v = _(() => me.isIos()),
                o = z(l.originalVolume ?? 50),
                y = z(l.translatedVolume ?? 50),
                n = z(50),
                E = z(l.backgroundAudio ?? !1),
                g = z(l.floatingBall ?? !0);
            O(() => l.originalVolume, s => {
                s !== void 0 && s !== o.value && (o.value = s)
            }), O(() => l.translatedVolume, s => {
                s !== void 0 && s !== y.value && (y.value = s)
            }), O(() => l.backgroundAudio, s => {
                s !== void 0 && s !== E.value && (E.value = s)
            }), O(() => l.floatingBall, s => {
                s !== void 0 && s !== g.value && (g.value = s)
            }), ce(async () => {
                try {
                    const s = await ue.getItem("local:settings") || {};
                    l.originalVolume === void 0 && (o.value = s.originalVolume), l.translatedVolume === void 0 && (y.value = s.translationVolume), l.backgroundAudio === void 0 && (E.value = s.videoVolumeControlModel), l.floatingBall === void 0 && (g.value = s.floatingBall)
                } catch (s) {
                    console.error("从settings对象加载音频设置失败:", s), l.originalVolume === void 0 && (o.value = 50), l.translatedVolume === void 0 && (y.value = 50), l.backgroundAudio === void 0 && (E.value = !1), l.floatingBall === void 0 && (g.value = !0)
                }
            }), O(E, s => {
                s ? n.value === 0 && (n.value = 50) : n.value = 0, a("update:backgroundAudio", s)
            });
            const f = async () => {
                a("update:originalVolume", o.value);
                try {
                    await Me().patchSettings({
                        originalVolume: o.value
                    }), qe(s => ke.notifyOriginalVolumeChange(o.value, s), "实时更新原声音量失败")
                } catch (s) {
                    console.error("更新原声音量设置失败", s)
                }
            }, u = async () => {
                a("update:translatedVolume", y.value);
                try {
                    await Me().patchSettings({
                        translationVolume: y.value
                    }), qe(s => ke.notifyTranslationVolumeChange(y.value, s), "实时更新翻译声音量失败")
                } catch (s) {
                    console.error("更新翻译声音量设置失败", s)
                }
            };
            return O(n, s => {
                a("update:backgroundVolume", s)
            }), O(g, s => {
                a("update:floatingBall", s)
            }), (s, p) => (F(), k("div", Pa, [v.value ? G("", !0) : (F(), k("div", Wa, [t("div", ja, [t("span", Ra, A(m(c).t("originalAudio")), 1), t("div", Ga, [H(Pe, {
                modelValue: o.value,
                "onUpdate:modelValue": p[0] || (p[0] = M => o.value = M),
                label: m(c).t("originalAudio"),
                width: "100%",
                onInput: f
            }, null, 8, ["modelValue", "label"])])]), p[4] || (p[4] = t("div", {
                class: "mx-4 my-0 w-px h-6 bg-black bg-opacity-10"
            }, null, -1)), t("div", Na, [t("span", Ya, A(m(c).t("translatedAudio")), 1), t("div", Ja, [H(Pe, {
                modelValue: y.value,
                "onUpdate:modelValue": p[1] || (p[1] = M => y.value = M),
                label: m(c).t("translatedAudio"),
                width: "100%",
                onInput: u
            }, null, 8, ["modelValue", "label"])])])])), t("div", Xa, [t("div", Ka, [t("div", Qa, A(m(c).t("backgroundAudio")), 1), t("div", eo, [H(Oe, {
                modelValue: E.value,
                "onUpdate:modelValue": p[2] || (p[2] = M => E.value = M),
                label: m(c).t("backgroundAudio")
            }, null, 8, ["modelValue", "label"])])]), p[5] || (p[5] = t("div", {
                class: "mx-4 my-0 w-px h-6 bg-black bg-opacity-10"
            }, null, -1)), t("div", to, [t("div", lo, A(m(c).t("textToSpeechToggle")), 1), t("div", io, [H(Oe, {
                modelValue: g.value,
                "onUpdate:modelValue": p[3] || (p[3] = M => g.value = M),
                label: m(c).t("textToSpeech")
            }, null, 8, ["modelValue", "label"])])])])]))
        }
    }),
    oo = Ee(ao, [
        ["__scopeId", "data-v-b3f7fc2f"]
    ]);
function it(e) {
    return e.showSubtitle ? e.bilingualSubtitleEnabled === !0 ? "bilingual" : "translated" : "off"
}
function no(e) {
    return {
        showSubtitle: e !== "off",
        bilingualSubtitleEnabled: e === "bilingual"
    }
}
const so = {
        class: "px-4 py-0 mb-2"
    },
    ro = {
        class: "flex items-center p-3 bg-white rounded-xl border border-solid border-black border-opacity-10 w-full box-border"
    },
    uo = ["aria-expanded", "aria-label"],
    co = ["aria-label"],
    fo = ["aria-checked", "onClick"],
    po = {
        key: 0,
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg"
    },
    go = {
        class: "flex-1 flex justify-between items-center"
    },
    vo = {
        class: "text-left font-medium text-gray-900"
    },
    ho = {
        class: "flex-shrink-0 relative w-24 h-6"
    },
    mo = {
        class: "subtitle-size-slider"
    },
    Co = {
        class: "slider-container"
    },
    xo = W({
        __name: "SubtitleControls",
        props: {
            subtitleDisplayMode: {},
            subtitleSize: {}
        },
        emits: ["update:subtitleDisplayMode", "update:subtitleSize"],
        setup(e, {
            emit: i
        }) {
            const l = e,
                a = i,
                v = z(l.subtitleDisplayMode ?? "off"),
                o = z(!1),
                y = z(null),
                n = z(20);
            O(() => l.subtitleDisplayMode, C => {
                C !== void 0 && C !== v.value && (v.value = C)
            }), O(() => l.subtitleSize, C => {
                C !== void 0 && C !== n.value && (n.value = C)
            });
            const E = async () => {
                if (l.subtitleSize !== void 0) n.value = l.subtitleSize;
                else try {
                    const C = await ue.getItem("local:settings") || {};
                    n.value = C.subtitleSize
                } catch (C) {
                    console.error("从browser.storage.local加载字幕大小失败:", C), n.value = 20
                }
            };
            O(v, C => {
                a("update:subtitleDisplayMode", C)
            }), O(n, C => {
                a("update:subtitleSize", C)
            });
            const g = async () => {
                const C = n.value;
                try {
                    await Me().patchSettings({
                        subtitleSize: C
                    }), a("update:subtitleSize", C), qe(T => ke.notifySubtitleSizeChange(C, T), "实时更新字幕大小失败")
                } catch (T) {
                    console.error("更新字幕大小设置失败", T)
                }
            }, f = _(() => [{
                value: "translated",
                label: c.t("subtitleModeTranslated")
            }, {
                value: "bilingual",
                label: c.t("subtitleModeBilingual")
            }, {
                value: "off",
                label: c.t("subtitleModeOff")
            }]), u = _(() => {
                var C;
                return ((C = f.value.find(T => T.value === v.value)) == null ? void 0 : C.label) || ""
            }), s = C => {
                v.value = C, o.value = !1
            }, p = C => {
                y.value && !y.value.contains(C.target) && (o.value = !1)
            }, M = C => {
                C.key === "Escape" && (o.value = !1)
            };
            return ce(async () => {
                if (document.addEventListener("click", p), document.addEventListener("keydown", M), l.subtitleDisplayMode === void 0) try {
                    const C = await ue.getItem("local:settings") || {};
                    v.value = it(C)
                } catch (C) {
                    console.error("从browser.storage.local加载字幕显示模式失败:", C), v.value = "off"
                }
                await E()
            }), Je(() => {
                document.removeEventListener("click", p), document.removeEventListener("keydown", M)
            }), (C, T) => (F(), k("div", so, [t("div", ro, [t("div", {
                ref_key: "subtitleModeMenuRef",
                ref: y,
                class: "flex-1 flex justify-between items-center relative"
            }, [t("button", {
                type: "button",
                class: "flex items-center gap-1 text-left font-medium text-gray-900 bg-transparent border-none p-0 cursor-pointer",
                "aria-haspopup": "menu",
                "aria-expanded": o.value,
                "aria-label": `${("i18n"in C?C.i18n:m(c)).t("subtitles")}：${u.value}`,
                onClick: T[0] || (T[0] = Ae(w => o.value = !o.value, ["stop"]))
            }, [t("span", null, A(u.value), 1), (F(), k("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 16 16",
                fill: "none",
                "aria-hidden": "true",
                class: Fe(["transition-transform", o.value ? "rotate-180" : ""]),
                xmlns: "http://www.w3.org/2000/svg"
            }, T[2] || (T[2] = [t("path", {
                d: "M5.26171 5.33334L10.7376 5.33334C10.9185 5.33334 11.063 5.39155 11.1712 5.50797C11.2793 5.62391 11.3334 5.75942 11.3334 5.91449C11.3334 5.96315 11.3265 6.01397 11.3127 6.06693C11.2995 6.11941 11.2791 6.16975 11.2515 6.21794L8.49919 10.3997C8.43529 10.4885 8.36205 10.5553 8.27948 10.6001C8.19739 10.6445 8.10425 10.6667 8.00004 10.6667C7.89584 10.6667 7.80269 10.6445 7.7206 10.6001C7.63852 10.5557 7.56528 10.4889 7.50089 10.3997L4.74855 6.21794C4.72151 6.16975 4.70112 6.11893 4.68735 6.0655C4.67359 6.01206 4.66671 5.96124 4.66671 5.91305C4.66671 5.75751 4.72078 5.62201 4.82891 5.50654C4.93705 5.39108 5.08132 5.33334 5.26171 5.33334Z",
                fill: "currentColor",
                "fill-opacity": "0.6"
            }, null, -1)]), 2))], 8, uo), o.value ? (F(), k("div", {
                key: 0,
                class: "absolute left-0 bottom-full mb-2 z-50 w-48 overflow-hidden rounded-xl border border-black/10 bg-white shadow-lg",
                role: "menu",
                "aria-label": ("i18n" in C ? C.i18n : m(c)).t("subtitleDisplayMode")
            }, [(F(!0), k($e, null, Te(f.value, w => (F(), k("button", {
                key: w.value,
                type: "button",
                role: "menuitemradio",
                "aria-checked": v.value === w.value,
                class: Fe(["w-full h-10 px-3 flex items-center justify-between text-sm text-left border-none cursor-pointer", v.value === w.value ? "bg-violet-50 text-violet-700" : "bg-white text-gray-900 hover:bg-gray-50"]),
                onClick: Ae(V => s(w.value), ["stop"])
            }, [t("span", null, A(w.label), 1), v.value === w.value ? (F(), k("svg", po, T[3] || (T[3] = [t("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M6 10L4 12L10 18L20 8L18 6L10 14L6 10Z",
                fill: "currentColor"
            }, null, -1)]))) : G("", !0)], 10, fo))), 128))], 8, co)) : G("", !0)], 512), T[6] || (T[6] = t("div", {
                class: "mx-4 my-0 w-px h-6 bg-black bg-opacity-10"
            }, null, -1)), t("div", go, [t("div", vo, A(("i18n" in C ? C.i18n : m(c)).t("subtitleSize")), 1), t("div", ho, [t("div", mo, [Ct(t("input", {
                type: "range",
                "onUpdate:modelValue": T[1] || (T[1] = w => n.value = w),
                min: "0",
                max: "100",
                class: "slider-input",
                onInput: g
            }, null, 544), [
                [xt, n.value]
            ]), t("div", Co, [T[5] || (T[5] = t("div", {
                class: "slider-bg"
            }, [t("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "97",
                height: "16",
                viewBox: "0 0 97 16",
                fill: "none"
            }, [t("path", {
                d: "M0 14.3999C0 13.5984 0.593082 12.9205 1.38753 12.814L94.7343 0.303645C95.9337 0.142901 97 1.0758 97 2.28592V14C97 15.1046 96.1046 16 95 16H1.60007C0.716373 16 0 15.2836 0 14.3999Z",
                fill: "#E6E6E6"
            })])], -1)), t("div", {
                class: "slider-progress",
                style: ye({
                    clipPath: `inset(0 ${100-n.value}% 0 0)`
                })
            }, T[4] || (T[4] = [t("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "97",
                height: "16",
                viewBox: "0 0 97 16",
                fill: "none"
            }, [t("path", {
                d: "M0 14.3999C0 13.5984 0.593082 12.9205 1.38753 12.814L94.7343 0.303645C95.9337 0.142901 97 1.0758 97 2.28592V14C97 15.1046 96.1046 16 95 16H1.60007C0.716373 16 0 15.2836 0 14.3999Z",
                fill: "#9554F3"
            })], -1)]), 4)]), t("div", {
                class: "slider-handle",
                style: ye({
                    left: `${n.value}%`
                })
            }, null, 4)])])])])]))
        }
    }),
    bo = Ee(xo, [
        ["__scopeId", "data-v-b939ba87"]
    ]),
    wo = {
        class: "px-4 py-0"
    },
    yo = {
        class: "flex flex-wrap gap-4"
    },
    $o = {
        class: "mr-2 w-6 h-6 text-sm font-black leading-6 text-center text-violet-900 bg-violet-100 rounded-md"
    },
    So = {
        class: "relative flex-1"
    },
    _o = ["onClick"],
    Fo = {
        key: 0,
        class: "custom-dropdown origin-top-right absolute left-0 right-0 mt-2 rounded-xl shadow-lg bg-white ring-1 ring-black/5 focus:outline-none z-10 max-h-60 overflow-y-auto"
    },
    ko = {
        role: "menu",
        "aria-orientation": "vertical"
    },
    Eo = ["onClick"],
    Lo = {
        class: "justify-start items-center gap-2 flex"
    },
    Bo = {
        class: "text-black text-sm font-normal leading-normal"
    },
    Mo = {
        key: 0,
        class: "ml-auto"
    },
    Io = ["onClick", "aria-label"],
    Vo = W({
        __name: "SpeakerList",
        props: {
            toLanguage: {
                default: te.toLanguage
            },
            voiceType: {
                default: "free"
            }
        },
        setup(e, {
            expose: i
        }) {
            const l = e,
                a = c.t("selectSpeaker") || "选择",
                v = c.t("deleteSpeaker") || "删除",
                o = c.t("speaker") || "说话人",
                y = (d, S = "") => ({
                    id: d,
                    name: `${o} ${d}`,
                    number: d,
                    voice: S
                }),
                n = () => {
                    f.value = [y(1)], w.value = null
                },
                E = () => {
                    f.value.forEach((d, S) => {
                        d.number = S + 1, d.name = `${o} ${S+1}`
                    })
                },
                g = d => {
                    if (!d) {
                        n();
                        return
                    }
                    const S = Array.isArray(d) ? d : JSON.parse(d);
                    if (!Array.isArray(S) || S.length === 0) {
                        n();
                        return
                    }
                    f.value = S.map((U, ae) => y(ae + 1, String(U || "")))
                },
                f = z([y(1)]),
                u = z(null),
                s = () => {
                    const d = f.value.length > 0 ? Math.max(...f.value.map(U => U.id)) + 1 : 1,
                        S = f.value.length + 1;
                    f.value.push({
                        id: d,
                        name: `${o} ${S}`,
                        number: S,
                        voice: ""
                    }), E()
                },
                p = _(() => l.voiceType === "memberFree" ? _e : l.voiceType === "free" ? Re : Ge),
                M = _(() => l.voiceType === "memberFree" ? Ne : Ye),
                C = _(() => {
                    if (!l.toLanguage || !p.value[l.toLanguage]) return [];
                    const d = p.value[l.toLanguage],
                        S = M.value,
                        U = [];
                    for (let ae in d) {
                        const q = d[ae];
                        if (q)
                            for (let oe of q) {
                                if (!S[oe]) {
                                    console.error(`声音名称在 voiceCodeMap 中未找到: ${oe}`);
                                    continue
                                }
                                const ne = S[oe],
                                    se = l.toLanguage === ne.language ? ne.localName : ne.displayName;
                                U.push({
                                    value: ne.code,
                                    text: se
                                })
                            }
                    }
                    return U
                }),
                T = d => {
                    if (f.value = f.value.filter(S => S.id !== d), f.value.length === 0) {
                        n();
                        return
                    }
                    E()
                },
                w = z(null),
                V = d => {
                    w.value === d ? w.value = null : w.value = d
                },
                D = (d, S) => {
                    d.voice = S, w.value = null
                },
                x = d => {
                    if (!d) return "";
                    const S = C.value.find(U => U.value === d);
                    return S ? S.text : ""
                },
                N = d => {
                    if (w.value !== null) {
                        const S = d.target;
                        !S.closest(".custom-select-trigger") && !S.closest(".custom-dropdown") && (w.value = null)
                    }
                };
            return O(() => l.toLanguage, d => {
                if (d) {
                    if (u.value === null) {
                        u.value = d;
                        return
                    }
                    d !== u.value && (u.value = d, n())
                }
            }), ce(async () => {
                try {
                    const d = await ue.getItem("local:settings") || {};
                    g(d.multiSpeakers), u.value = d.toLanguage || l.toLanguage || te.toLanguage
                } catch (d) {
                    console.error("从browser.storage.local加载多发言人数据失败", d), n(), u.value = l.toLanguage || te.toLanguage
                }
                document.addEventListener("click", N)
            }), Je(() => {
                document.removeEventListener("click", N)
            }), i({
                addSpeaker: s,
                getSpeakersData: () => f.value.map(d => d.voice)
            }), (d, S) => (F(), k("div", wo, [t("div", yo, [(F(!0), k($e, null, Te(f.value, (U, ae) => (F(), k("div", {
                key: U.id,
                class: "speaker-item flex justify-between items-center p-3 bg-white rounded-xl border border-solid border-black border-opacity-10"
            }, [t("div", $o, A(U.number), 1), t("div", So, [t("div", {
                class: "custom-select-trigger flex items-center justify-between w-full cursor-pointer",
                onClick: q => V(U.id)
            }, [t("span", {
                class: Fe(["text-sm", {
                    "text-gray-400": !U.voice
                }])
            }, A(x(U.voice) || m(a)), 3), S[0] || (S[0] = t("div", {
                class: "pointer-events-none flex items-center px-2 text-gray-700"
            }, [t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, [t("path", {
                d: "M5.26171 5.33334L10.7376 5.33334C10.9185 5.33334 11.063 5.39155 11.1712 5.50797C11.2793 5.62391 11.3334 5.75942 11.3334 5.91449C11.3334 5.96315 11.3265 6.01397 11.3127 6.06693C11.2995 6.11941 11.2791 6.16975 11.2515 6.21794L8.49919 10.3997C8.43529 10.4885 8.36205 10.5553 8.27948 10.6001C8.19739 10.6445 8.10425 10.6667 8.00004 10.6667C7.89584 10.6667 7.80269 10.6445 7.7206 10.6001C7.63852 10.5557 7.56528 10.4889 7.50089 10.3997L4.74855 6.21794C4.72151 6.16975 4.70112 6.11893 4.68735 6.0655C4.67359 6.01206 4.66671 5.96124 4.66671 5.91305C4.66671 5.75751 4.72078 5.62201 4.82891 5.50654C4.93705 5.39108 5.08132 5.33334 5.26171 5.33334Z",
                fill: "black",
                "fill-opacity": "0.6"
            })])], -1))], 8, _o), w.value === U.id ? (F(), k("div", Fo, [t("div", ko, [(F(!0), k($e, null, Te(C.value, q => (F(), k("a", {
                key: q.value,
                onClick: oe => D(U, q.value),
                class: Fe(["flex items-center h-12 px-4 text-sm text-black hover:bg-purple-50 cursor-pointer", {
                    "bg-purple-50": U.voice === q.value
                }]),
                role: "menuitem"
            }, [t("div", Lo, [t("span", Bo, A(q.text), 1)]), U.voice === q.value ? (F(), k("div", Mo, S[1] || (S[1] = [t("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, [t("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M6 10L4 12L10 18L20 8L18 6L10 14L6 10Z",
                fill: "#9554F3"
            })], -1)]))) : G("", !0)], 10, Eo))), 128))])])) : G("", !0)]), t("button", {
                onClick: q => T(U.id),
                class: "p-0 m-0",
                "aria-label": `${m(v)} ${U.name}`
            }, S[2] || (S[2] = [t("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none"
            }, [t("path", {
                d: "M12 4C7.581 4 4 7.582 4 12C4 16.418 7.581 20 12 20C16.419 20 20 16.418 20 12C20 7.582 16.419 4 12 4ZM15.707 14.293C15.8945 14.4805 15.9998 14.7348 15.9998 15C15.9998 15.2652 15.8945 15.5195 15.707 15.707C15.5195 15.8945 15.2652 15.9998 15 15.9998C14.7348 15.9998 14.4805 15.8945 14.293 15.707L12 13.414L9.707 15.707C9.61435 15.8002 9.50419 15.8741 9.38285 15.9246C9.26152 15.9751 9.13141 16.001 9 16.001C8.86859 16.001 8.73848 15.9751 8.61715 15.9246C8.49581 15.8741 8.38565 15.8002 8.293 15.707C8.10553 15.5195 8.00021 15.2652 8.00021 15C8.00021 14.7348 8.10553 14.4805 8.293 14.293L10.586 12L8.293 9.707C8.10549 9.51949 8.00015 9.26518 8.00015 9C8.00015 8.73482 8.10549 8.48051 8.293 8.293C8.48051 8.10549 8.73482 8.00015 9 8.00015C9.26518 8.00015 9.51949 8.10549 9.707 8.293L12 10.586L14.293 8.293C14.4805 8.10549 14.7348 8.00015 15 8.00015C15.2652 8.00015 15.5195 8.10549 15.707 8.293C15.8945 8.48051 15.9998 8.73482 15.9998 9C15.9998 9.26518 15.8945 9.51949 15.707 9.707L13.414 12L15.707 14.293Z",
                fill: "#D5D5D5"
            })], -1)]), 8, Io)]))), 128))])]))
        }
    }),
    Ao = Ee(Vo, [
        ["__scopeId", "data-v-06318c76"]
    ]),
    To = {
        class: "flex items-center px-4 py-0 mb-3"
    },
    Do = {
        class: "text-sm font-medium text-black"
    },
    Ve = W({
        __name: "SectionHeader",
        props: {
            title: {}
        },
        setup(e) {
            return (i, l) => (F(), k("header", To, [l[0] || (l[0] = t("div", {
                class: "mr-2 w-0.5 h-3.5 bg-violet-500"
            }, null, -1)), t("h2", Do, A(i.title), 1), bt(i.$slots, "default")]))
        }
    }),
    Zo = {
        class: "px-4 py-0 mb-2"
    },
    qo = {
        class: "flex items-center p-3 bg-white rounded-xl border border-solid border-black border-opacity-10"
    },
    zo = {
        class: "w-6 h-6 flex items-center justify-center"
    },
    Uo = ["innerHTML"],
    Ho = {
        class: "w-6 h-6 flex items-center justify-center"
    },
    Oo = ["innerHTML"],
    Po = W({
        __name: "TranslationService",
        props: {
            translateEngine: {}
        },
        emits: ["update:translateEngine"],
        setup(e, {
            emit: i
        }) {
            const l = e,
                a = w => w === "google" ? "google" : w.startsWith("gemini") ? "gemini" : w.startsWith("deepseek") ? "deepseek" : w.startsWith("gpt") || w === "openai" ? "openai" : w.startsWith("claude") ? "claude" : "default",
                v = w => {
                    const V = "#9554F3";
                    switch (a(w)) {
                    case "google":
                        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
<linearGradient id="1FVp1uSPYeHGkvmnthLSma_0rqu8jqJI1c7_gr1" x1="-273.501" x2="-257.876" y1="70.939" y2="86.564" gradientTransform="translate(298.36 -52.072)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#dae4ed"></stop><stop offset="1" stop-color="#c2ccd5"></stop></linearGradient><path fill="url(#1FVp1uSPYeHGkvmnthLSma_0rqu8jqJI1c7_gr1)" d="M44.001,40.553V15.445	c0-1.901-1.544-3.445-3.445-3.445H15.001l13,24l-2,8l14.555-0.001C42.457,43.998,44.001,42.454,44.001,40.553z"></path><path fill="#195cbd" fill-rule="evenodd" d="M26.001,43.999l7-8l-6-4	l-4,4L26.001,43.999z" clip-rule="evenodd"></path><linearGradient id="1FVp1uSPYeHGkvmnthLSmb_0rqu8jqJI1c7_gr2" x1="-274.952" x2="-262.322" y1="72.88" y2="85.51" gradientTransform="translate(300.643 -52.881)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#768088"></stop><stop offset="1" stop-color="#535f69"></stop></linearGradient><path fill="url(#1FVp1uSPYeHGkvmnthLSmb_0rqu8jqJI1c7_gr2)" d="M30.361,25.001h2.261	c1.539,2.655,4.321,5.491,7.659,8.524l-1.345,1.479C35.427,31.815,32.014,28.439,30.361,25.001z"></path><linearGradient id="1FVp1uSPYeHGkvmnthLSmc_0rqu8jqJI1c7_gr3" x1="-275.539" x2="-262.91" y1="73.468" y2="86.098" gradientTransform="translate(300.643 -52.881)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#768088"></stop><stop offset="1" stop-color="#535f69"></stop></linearGradient><path fill="url(#1FVp1uSPYeHGkvmnthLSmc_0rqu8jqJI1c7_gr3)" d="M26.674,33.974c-0.237-0.499-0.024-1.096,0.475-1.332	c3.871-1.835,7.677-6.564,8.888-10.911c0.148-0.532,0.7-0.843,1.232-0.695c0.532,0.148,0.843,0.7,0.695,1.232	c-1.352,4.856-5.517,10.076-9.957,12.18C27.507,34.686,26.91,34.473,26.674,33.974z"></path><linearGradient id="1FVp1uSPYeHGkvmnthLSmd_0rqu8jqJI1c7_gr4" x1="-272.548" x2="-259.918" y1="70.476" y2="83.106" gradientTransform="translate(300.643 -52.881)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#768088"></stop><stop offset="1" stop-color="#535f69"></stop></linearGradient><path fill="url(#1FVp1uSPYeHGkvmnthLSmd_0rqu8jqJI1c7_gr4)" d="M24.001,22.999v-1.999H41v1.999H24.001z"></path><linearGradient id="1FVp1uSPYeHGkvmnthLSme_0rqu8jqJI1c7_gr5" x1="-271.798" x2="-259.168" y1="69.726" y2="82.356" gradientTransform="translate(300.643 -52.881)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#768088"></stop><stop offset="1" stop-color="#535f69"></stop></linearGradient><path fill="url(#1FVp1uSPYeHGkvmnthLSme_0rqu8jqJI1c7_gr5)" d="M31.001,21.999v-2.999h2.999v2.999H31.001z"></path><linearGradient id="1FVp1uSPYeHGkvmnthLSmf_0rqu8jqJI1c7_gr6" x1="-283.973" x2="-263.897" y1="74.695" y2="94.771" gradientTransform="translate(289.41 -63.269)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#55adfd"></stop><stop offset="1" stop-color="#438ffd"></stop></linearGradient><path fill="url(#1FVp1uSPYeHGkvmnthLSmf_0rqu8jqJI1c7_gr6)" d="M4,32.553V7.445c0-1.901,1.544-3.445,3.445-3.445	h14.555l11,32L7.446,35.998C5.544,35.998,4,34.454,4,32.553z"></path><path fill="#fff" fill-rule="evenodd" d="M9.001,19.999	c0-3.312,2.687-6,6-6c1.656,0,3.156,0.672,4.241,1.759l-1.415,1.415c-0.724-0.724-1.724-1.173-2.827-1.173c-2.208,0-4,1.793-4,4	c0,2.208,1.792,4,4,4c2.207,0,4-1.792,4-4c0-0.344-0.044-0.68-0.127-1h2.043c0.055,0.325,0.084,0.66,0.084,1c0,3.313-2.688,6-6,6	C11.687,25.999,9.001,23.313,9.001,19.999z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M19.001,18.999h-4v2h5	L19.001,18.999z" clip-rule="evenodd"></path>
</svg>`;
                    case "gemini":
                        return `<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gemini-gradient" x1="0%" x2="68.73%" y1="100%" y2="30.395%">
            <stop offset="0%" stop-color="#1C7DFF"></stop>
            <stop offset="52.021%" stop-color="#1C69FF"></stop>
            <stop offset="100%" stop-color="#F0DCD6"></stop>
          </linearGradient>
        </defs>
        <path d="M12 24A14.304 14.304 0 000 12 14.304 14.304 0 0012 0a14.305 14.305 0 0012 12 14.305 14.305 0 00-12 12" fill="url(#gemini-gradient)" fill-rule="nonzero"></path>
      </svg>`;
                    case "deepseek":
                        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
        <path fill="#536dfe" d="M47.496,10.074c-0.508-0.249-0.727,0.226-1.025,0.467c-0.102,0.078-0.188,0.179-0.274,0.272	c-0.743,0.794-1.611,1.315-2.746,1.253c-1.658-0.093-3.074,0.428-4.326,1.696c-0.266-1.564-1.15-2.498-2.495-3.097	c-0.704-0.311-1.416-0.623-1.909-1.3c-0.344-0.482-0.438-1.019-0.61-1.548c-0.11-0.319-0.219-0.646-0.587-0.7	c-0.399-0.062-0.555,0.272-0.712,0.553c-0.626,1.144-0.868,2.405-0.845,3.681c0.055,2.871,1.267,5.159,3.676,6.785	c0.274,0.187,0.344,0.373,0.258,0.646c-0.164,0.56-0.36,1.105-0.532,1.665c-0.11,0.358-0.274,0.436-0.657,0.28	c-1.322-0.552-2.464-1.369-3.473-2.358c-1.713-1.657-3.262-3.486-5.194-4.918c-0.454-0.335-0.907-0.646-1.377-0.942	c-1.971-1.914,0.258-3.486,0.774-3.673c0.54-0.195,0.188-0.864-1.557-0.856c-1.744,0.008-3.34,0.591-5.374,1.369	c-0.297,0.117-0.61,0.202-0.931,0.272c-1.846-0.35-3.763-0.428-5.765-0.202c-3.77,0.42-6.782,2.202-8.996,5.245	c-2.66,3.657-3.285,7.812-2.519,12.147c0.806,4.568,3.137,8.349,6.719,11.306c3.716,3.066,7.994,4.568,12.876,4.28	c2.965-0.171,6.266-0.568,9.989-3.719c0.939,0.467,1.924,0.654,3.559,0.794c1.259,0.117,2.472-0.062,3.411-0.257	c1.471-0.311,1.369-1.673,0.837-1.922C34,36,33.471,35.441,33.471,35.441c2.19-2.591,5.491-5.284,6.782-14.007	c0.102-0.692,0.016-1.128,0-1.689c-0.008-0.342,0.07-0.475,0.462-0.514c1.079-0.125,2.128-0.42,3.09-0.949	c2.793-1.525,3.919-4.031,4.185-7.034C48.028,10.79,47.981,10.315,47.496,10.074z M23.161,37.107	c-4.177-3.284-6.203-4.365-7.04-4.319c-0.782,0.047-0.641,0.942-0.469,1.525c0.18,0.576,0.415,0.973,0.743,1.478	c0.227,0.335,0.383,0.833-0.227,1.206c-1.345,0.833-3.684-0.28-3.794-0.335c-2.722-1.603-4.998-3.72-6.602-6.614	c-1.549-2.786-2.448-5.774-2.597-8.964c-0.039-0.77,0.188-1.043,0.954-1.183c1.009-0.187,2.049-0.226,3.059-0.078	c4.263,0.623,7.893,2.529,10.936,5.548c1.737,1.72,3.051,3.774,4.404,5.782c1.439,2.132,2.988,4.163,4.959,5.828	c0.696,0.584,1.252,1.027,1.783,1.354C27.667,38.515,24.991,38.554,23.161,37.107L23.161,37.107z M25.164,24.228	c0-0.342,0.274-0.615,0.618-0.615c0.078,0,0.149,0.015,0.211,0.039c0.086,0.031,0.164,0.078,0.227,0.148	c0.11,0.109,0.172,0.265,0.172,0.428c0,0.342-0.274,0.615-0.618,0.615S25.164,24.571,25.164,24.228L25.164,24.228z M31.382,27.419	c-0.399,0.163-0.798,0.303-1.181,0.319c-0.595,0.031-1.244-0.21-1.596-0.506c-0.548-0.459-0.939-0.716-1.103-1.517	c-0.07-0.342-0.031-0.872,0.031-1.175c0.141-0.654-0.016-1.074-0.477-1.455c-0.376-0.311-0.853-0.397-1.377-0.397	c-0.196,0-0.375-0.086-0.508-0.156c-0.219-0.109-0.399-0.381-0.227-0.716c0.055-0.109,0.321-0.373,0.383-0.42	c0.712-0.405,1.533-0.272,2.292,0.031c0.704,0.288,1.236,0.817,2.003,1.564c0.782,0.903,0.923,1.152,1.369,1.829	c0.352,0.529,0.673,1.074,0.892,1.696C32.016,26.905,31.844,27.224,31.382,27.419L31.382,27.419z"></path>
      </svg>`;
                    case "openai":
                        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
        <linearGradient id="openai_gradient" x1="3.842" x2="46.225" y1="4.692" y2="45.288" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#32de9f"></stop>
          <stop offset="1" stop-color="#0ea982"></stop>
        </linearGradient>
        <path fill="url(#openai_gradient)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"></path>
        <path fill="white" d="M37.116,24.361c-0.325-1.215-0.976-2.284-1.868-3.126c0.729-1.713,0.619-3.68-0.313-5.295 c-0.894-1.548-2.337-2.656-4.064-3.118c-1.216-0.325-2.468-0.297-3.644,0.057c-1.121-1.49-2.865-2.379-4.739-2.379 c-3.154,0-5.799,2.196-6.503,5.137c-0.006,0.001-0.012-0.002-0.019-0.001c-1.866,0.231-3.474,1.298-4.413,2.924 c-0.894,1.548-1.131,3.352-0.669,5.079c0.326,1.216,0.977,2.286,1.87,3.128c-0.729,1.714-0.624,3.673,0.311,5.293 c0.894,1.548,2.337,2.656,4.064,3.119c0.576,0.154,1.162,0.231,1.743,0.231c0.645,0,1.283-0.104,1.901-0.289 c1.12,1.493,2.858,2.381,4.74,2.381c3.157,0,5.804-2.2,6.506-5.145c1.851-0.225,3.491-1.29,4.43-2.915 C37.342,27.892,37.579,26.088,37.116,24.361z M30.538,14.063c1.396,0.373,2.561,1.269,3.283,2.519 c0.674,1.168,0.799,2.571,0.366,3.836c-0.064-0.04-0.124-0.084-0.189-0.122l-5.894-3.403c-0.201-0.115-0.449-0.114-0.649,0.004 l-6.556,3.883l-0.033-2.962l5.569-3.215C27.685,13.881,29.143,13.691,30.538,14.063z M27.045,22.197l0.04,3.538l-3.045,1.803 l-3.085-1.735l-0.04-3.538l3.045-1.803L27.045,22.197z M17.08,17.193c0-2.982,2.426-5.408,5.408-5.408 c1.356,0,2.631,0.589,3.509,1.599c-0.067,0.036-0.138,0.066-0.204,0.105l-5.895,3.403c-0.201,0.116-0.324,0.332-0.321,0.564 l0.085,7.619l-2.581-1.452L17.08,17.193z M12.125,23.306c-0.373-1.395-0.181-2.853,0.541-4.103c0.681-1.18,1.815-1.976,3.14-2.233 c-0.003,0.075-0.012,0.148-0.012,0.224V24c0,0.232,0.125,0.446,0.328,0.561l6.64,3.735l-2.548,1.509l-5.568-3.216 C13.394,25.868,12.499,24.702,12.125,23.306z M17.462,33.937c-1.396-0.374-2.561-1.269-3.283-2.519 c-0.677-1.173-0.803-2.572-0.368-3.838c0.065,0.041,0.126,0.086,0.192,0.124l5.894,3.403c0.099,0.057,0.21,0.086,0.321,0.086 c0.114,0,0.227-0.03,0.328-0.09l6.556-3.883l0.033,2.962l-5.569,3.215C20.316,34.119,18.858,34.311,17.462,33.937z M30.92,30.807 c0,2.982-2.426,5.408-5.408,5.408c-1.362,0-2.632-0.591-3.509-1.603c0.067-0.036,0.139-0.063,0.206-0.102l5.895-3.403 c0.201-0.116,0.324-0.332,0.321-0.564l-0.086-7.618l2.581,1.452V30.807z M35.334,28.797c-0.679,1.176-1.826,1.984-3.14,2.239 c0.003-0.077,0.012-0.152,0.012-0.229V24c0-0.232-0.125-0.446-0.328-0.561l-6.64-3.735l2.548-1.509l5.568,3.216 c1.251,0.722,2.146,1.888,2.52,3.283C36.248,26.089,36.056,27.547,35.334,28.797z"></path>
      </svg>`;
                    case "claude":
                        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
        <path fill="#d19b75" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"></path>
        <path fill="#252525" d="M22.197,14.234h-4.404L10.037,33.67c0-0.096,4.452,0,4.452,0l1.484-4.069h8.234l1.58,4.069h4.261 L22.197,14.234z M17.362,26.059l2.729-6.894l2.633,6.894C22.723,26.059,17.266,26.059,17.362,26.059z"></path>
        <path fill="#252525" d="M25.963,14.234L33.59,33.67h4.356l-7.803-19.436C30.144,14.234,25.963,14.186,25.963,14.234z"></path>
      </svg>`;
                    default:
                        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H17V4H10V2H8V4H1V6H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM15.88 17L17.5 12.67L19.12 17H15.88Z" fill="${V}"/>
      </svg>`
                    }
                },
                o = _(y);
            function y() {
                const w = [{
                        value: "google",
                        text: "google"
                    }],
                    V = [{
                        value: "gemini-3.1-flash-lite-preview",
                        text: "gemini-3.1-flash-lite-preview"
                    }, {
                        value: "deepseek-v4-flash",
                        text: "deepseek-v4-flash"
                    }, {
                        value: "gpt-5.4-mini",
                        text: "gpt-5.4-mini"
                    }, {
                        value: "claude-haiku-4-5-20251001",
                        text: "claude-haiku-4-5"
                    }],
                    D = [{
                        value: "gpt-5.4",
                        text: "gpt-5.4"
                    }, {
                        value: "claude-opus-4-7",
                        text: "claude-opus-4.7"
                    }, {
                        value: "claude-sonnet-4-6",
                        text: "claude-sonnet-4.6"
                    }];
                if (me.isIos()) {
                    const x = [...w];
                    return f.value && (x.push(...V), u.value && x.push(...D)), x
                } else return [...w, ...V, ...D]
            }
            const n = z(c.t("freeForVip") || "会员免费"),
                E = z(c.t("rechargeLimit") || "额度限制"),
                g = z(c.t("tooExpensive") || "较贵"),
                f = _(() => j.computed.isMember),
                u = _(() => j.computed.isMemberHavBalance),
                s = i,
                p = z(0),
                M = _(() => p.value >= 0 && p.value < o.value.length ? o.value[p.value] : null);
            function C(w, V = !1) {
                if (!w) return;
                const D = St(w),
                    x = o.value.findIndex(N => N.value === D);
                if (x !== -1) {
                    p.value = x, D !== w && s("update:translateEngine", D);
                    return
                }
                V && (p.value = o.value.findIndex(N => N.value === "google"), s("update:translateEngine", "google"))
            }
            O(() => l.translateEngine, w => {
                C(w)
            }), ce(async () => {
                try {
                    await j.getPopupInfo()
                } catch (w) {
                    console.error("获取用户信息失败", w)
                }
                C(l.translateEngine, !0)
            });
            const T = w => {
                const V = o.value[w];
                V && s("update:translateEngine", V.value)
            };
            return (w, V) => (F(), k("div", Zo, [t("div", qo, [H(Ce, {
                label: ("i18n" in w ? w.i18n : m(c)).t("translationServiceTitle") || "Translation Service",
                options: o.value,
                modelValue: p.value,
                "onUpdate:modelValue": [V[0] || (V[0] = D => p.value = D), T],
                class: "w-full"
            }, {
                icon: Se(() => {
                    var D;
                    return [t("div", zo, [t("span", {
                        innerHTML: v(((D = M.value) == null ? void 0 : D.value) || "google")
                    }, null, 8, Uo)])]
                }),
                "option-icon": Se(({
                    option: D
                }) => [t("div", Ho, [t("span", {
                    innerHTML: v(D.value)
                }, null, 8, Oo)])]),
                _: 1
            }, 8, ["label", "options", "modelValue"])])]))
        }
    }),
    we = "free",
    We = "azure",
    je = e => Xe.requiresCredit(e || "google", we),
    Wo = (e, i) => {
        const l = e.translateEngine || "google",
            a = i.translateEngine || "google";
        if (je(l) && je(a) && l !== a) return !0;
        const v = e.voiceType || we,
            o = i.voiceType || we;
        return !(e.voice !== i.voice) || v === We && o === We ? !1 : v !== we && o !== we
    };
function jo(e) {
    return !e.isMobile && !0
}
const Ro = {
        class: "rounded-xl border border-solid bg-neutral-100 border-black border-opacity-10 shadow-[0_12px_24px_rgba(0,0,0,0.16)] w-[376px] box-border flex flex-col h-[600px] overflow-hidden"
    },
    Go = {
        class: "px-0 py-2 overflow-y-auto flex-grow"
    },
    No = {
        class: "px-0 pt-2 pb-1"
    },
    Yo = {
        class: "px-0 pt-1 pb-2"
    },
    Jo = {
        class: "px-0 pt-1 pb-2 mb-1"
    },
    Xo = ["aria-label", "title"],
    Ko = {
        class: "min-w-0 truncate whitespace-nowrap"
    },
    Qo = {
        key: 1,
        class: "flex-grow overflow-y-auto"
    },
    e0 = W({
        __name: "SettingsPanel",
        setup(e) {
            const i = B(""),
                l = B(""),
                a = B("free"),
                v = B("1"),
                o = B(""),
                y = B("google"),
                n = B(0),
                E = B(100),
                g = B("off"),
                f = B(20),
                u = B(!1),
                s = B(!0),
                p = B(!0),
                M = B(!1),
                C = B(null),
                T = B(!1),
                w = B(c.t("vipRequiredTitle")),
                V = B(c.t("vipRequiredText")),
                D = B(c.t("vipAndBalanceRequiredTitle")),
                x = B(c.t("vipAndBalanceRequiredText")),
                N = B(c.t("balanceRequiredTitle")),
                ie = B(c.t("balanceRequiredText"));
            B(c.t("lowBalanceTitle")), B(c.t("lowBalanceText")), B(c.t("freeOptionTipText")), B(c.t("translateEngineTipText")), B(c.t("voiceTypeTipText")), B(c.t("vipFreeOptionTipText")), B(c.t("vipTranslateEngineTipText"));
            const d = B(c.t("pay")),
                S = B(c.t("cancelButton")),
                U = B(c.t("confirmButton")),
                ae = B(c.t("switchModelWarning")),
                q = B(c.t("saveFailedTitle")),
                oe = B(c.t("saveFailedText")),
                ne = B(c.t("save_settings")),
                se = B(c.t("localPlayerEntryButton")),
                be = B(c.t("translationServiceTitle")),
                R = B(c.t("voicesAndSubtitlesTitle")),
                X = B(c.t("speakersTitle")),
                K = _(() => jo({
                    isMobile: Ft.isMobile()
                }));
            ce(async () => {
                try {
                    const b = await ue.getItem("local:settings");
                    b ? (l.value = b.fromLanguage || "en-US", i.value = b.toLanguage || te.toLanguage, v.value = b.gender || "1", o.value = b.voice || "", p.value = b.pauseVideo || !1, y.value = b.translateEngine || "google", a.value = b.voicesType || "free", u.value = b.videoVolumeControlModel || !1, g.value = it(b), M.value = b.iosOpenOriginVolume || !1, s.value = typeof b.floatingBall == "boolean" ? b.floatingBall : !0, n.value = b.originalVolume, E.value = b.translationVolume, f.value = b.subtitleSize) : (l.value = "en-US", i.value = te.toLanguage, v.value = "1", o.value = "", p.value = !1, y.value = "google", a.value = "free", u.value = !1, g.value = "off", M.value = !1, s.value = !0, n.value = 0, E.value = 100, f.value = 20)
                } catch (b) {
                    console.error("从browser.storage.local加载settings失败:", b), l.value = "en-US", i.value = te.toLanguage, v.value = "1", o.value = "", p.value = !1, y.value = "google", a.value = "free", u.value = !1, g.value = "off", M.value = !1, s.value = !0, n.value = 0, E.value = 100, f.value = 20
                }
                try {
                    await j.getPopupInfo()
                } catch (b) {
                    console.error("获取用户信息失败", b)
                }
            });
            const re = () => {
                    C.value && C.value.addSpeaker()
                },
                r = async () => Oa(b => ke.isPlaying(b), !1, "检查当前标签页播放状态失败"), h = async () => !await $() || !L() ? !1 : await le(), $ = async () => {
                    try {
                        const b = await ue.getItem("local:settings") || {};
                        return b.translateEngine !== void 0 && P(b.translateEngine) ? !0 : b.voicesType !== void 0 && b.voicesType !== "free"
                    } catch (b) {
                        return console.error("检查AI服务使用状态失败:", b), !1
                    }
                }, L = () => P(y.value) || a.value !== "free", P = b => Xe.requiresCredit(b, "free"), le = async () => {
                    try {
                        const b = await ue.getItem("local:settings") || {};
                        return Wo({
                            translateEngine: b.translateEngine,
                            voiceType: b.voicesType,
                            voice: b.voice
                        }, {
                            translateEngine: y.value,
                            voiceType: a.value,
                            voice: o.value
                        })
                    } catch (b) {
                        return console.error("检查AI服务变更状态失败:", b), !1
                    }
                }, Le = () => {
                    window.open("about:blank", "_blank")
                }, at = async () => {
                    const b = J.runtime.getURL("local-player.html");
                    try {
                        await J.tabs.create({
                            url: b
                        }), window.close()
                    } catch {
                        window.open(b, "_blank")
                    }
                }, ot = async b => {
                    const Z = (await J.tabs.query({})).filter(Q => typeof Q.id == "number").map(Q => nt(b, Q.id));
                    await Promise.all(Z)
                }, nt = async (b, I) => {
                    try {
                        await ke.notifySettingsSaved(b, I)
                    } catch (Z) {
                        if (Ue(Z)) return;
                        console.warn("广播保存后的设置失败", Z)
                    }
                }, He = async () => {
                    try {
                        let b = [];
                        C.value && (b = C.value.getSpeakersData());
                        let I = JSON.stringify(b);
                        const Z = no(g.value),
                            Q = {
                                toLanguage: i.value,
                                fromLanguage: l.value,
                                subtitleSize: f.value,
                                gender: v.value,
                                voice: o.value,
                                pauseVideo: p.value,
                                translateEngine: y.value,
                                voicesType: a.value,
                                videoVolumeControlModel: u.value,
                                ...Z,
                                originalVolume: n.value,
                                translationVolume: E.value,
                                floatingBall: s.value,
                                iosOpenOriginVolume: M.value,
                                multiSpeakers: I
                            },
                            fe = await Me().patchSettings(Q);
                        return await ot(fe), window.close(), !0
                    } catch (b) {
                        return console.error("保存设置失败", b), await de.fire({
                            title: q.value,
                            text: oe.value,
                            icon: "error",
                            confirmButtonText: U.value
                        }), !1
                    }
                }, st = async () => {
                    const b = _t(await rt(), {
                        translateEngine: y.value,
                        voiceType: a.value
                    });
                    return b.allowed ? null : b.messageKey
                }, rt = async () => {
                    try {
                        const b = await j.getPopupInfo();
                        if (!("error" in b)) return b
                    } catch (b) {
                        console.error("获取用户信息失败", b)
                    }
                    return {
                        ...globalThis.__DUBBING_GET_COMMUNITY_MEMBER__()
                    }
                }, ut = async () => {
                    const b = await st();
                    if (b) {
                        let Q = "",
                            fe = "";
                        switch (b) {
                        case "trialMemberModelLimit":
                            await de.fire(c.t("trialMemberModelLimit"));
                            return;
                        case "azureRequireMembership":
                            await de.fire({
                                title: w.value,
                                text: c.t("azureRequireMembership"),
                                icon: "info",
                                showCancelButton: !0,
                                confirmButtonText: d.value,
                                cancelButtonText: S.value
                            }).then(Ie => {
                                Ie.isConfirmed && Le()
                            });
                            return;
                        case "insufficientBalanceAndMembership":
                            Q = D.value, fe = x.value;
                            break;
                        case "insufficientMembership":
                        case "membershipRequiredForAI":
                            Q = w.value, fe = V.value;
                            break;
                        case "insufficientBalanceAlertMsg":
                            Q = N.value, fe = ie.value;
                            break;
                        default:
                            Q = D.value, fe = x.value
                        }
                        de.fire({
                            title: Q,
                            text: fe,
                            icon: "info",
                            showCancelButton: !0,
                            confirmButtonText: d.value,
                            cancelButtonText: S.value
                        }).then(Ie => {
                            Ie.isConfirmed && Le()
                        });
                        return
                    }
                    let I = await r(), Z = await h();
                    I !== void 0 && I && Z ? (await de.fire({
                        title: ae.value,
                        showCancelButton: !0,
                        confirmButtonText: U.value,
                        cancelButtonText: S.value
                    })).isConfirmed && await He(): await He()
                }, ct = () => {
                    T.value = !0
                };
            return (b, I) => (F(), k("div", Ro, [H(Ca, {
                onShowAccount: ct
            }), m(T) ? (F(), k("div", Qo, [H(et, {
                onBack: I[12] || (I[12] = Z => T.value = !1)
            })])) : (F(), k($e, {
                key: 0
            }, [t("main", Go, [H(Sa, {
                toLanguage: m(i),
                "onUpdate:toLanguage": I[0] || (I[0] = Z => ee(i) ? i.value = Z : null),
                fromLanguage: m(l),
                "onUpdate:fromLanguage": I[1] || (I[1] = Z => ee(l) ? l.value = Z : null)
            }, null, 8, ["toLanguage", "fromLanguage"]), t("section", No, [H(Ve, {
                title: m(be)
            }, null, 8, ["title"]), H(Po, {
                translateEngine: m(y),
                "onUpdate:translateEngine": I[2] || (I[2] = Z => ee(y) ? y.value = Z : null)
            }, null, 8, ["translateEngine"])]), t("section", Yo, [H(Ve, {
                title: m(R)
            }, null, 8, ["title"]), H(Za, {
                "to-language": m(i),
                voiceType: m(a),
                "onUpdate:voiceType": I[3] || (I[3] = Z => ee(a) ? a.value = Z : null),
                gender: m(v),
                "onUpdate:gender": I[4] || (I[4] = Z => ee(v) ? v.value = Z : null),
                voice: m(o),
                "onUpdate:voice": I[5] || (I[5] = Z => ee(o) ? o.value = Z : null)
            }, null, 8, ["to-language", "voiceType", "gender", "voice"]), H(oo, {
                originalVolume: m(n),
                "onUpdate:originalVolume": I[6] || (I[6] = Z => ee(n) ? n.value = Z : null),
                translatedVolume: m(E),
                "onUpdate:translatedVolume": I[7] || (I[7] = Z => ee(E) ? E.value = Z : null),
                backgroundAudio: m(u),
                "onUpdate:backgroundAudio": I[8] || (I[8] = Z => ee(u) ? u.value = Z : null),
                floatingBall: m(s),
                "onUpdate:floatingBall": I[9] || (I[9] = Z => ee(s) ? s.value = Z : null)
            }, null, 8, ["originalVolume", "translatedVolume", "backgroundAudio", "floatingBall"]), H(bo, {
                subtitleDisplayMode: m(g),
                "onUpdate:subtitleDisplayMode": I[10] || (I[10] = Z => ee(g) ? g.value = Z : null),
                subtitleSize: m(f),
                "onUpdate:subtitleSize": I[11] || (I[11] = Z => ee(f) ? f.value = Z : null)
            }, null, 8, ["subtitleDisplayMode", "subtitleSize"])]), t("section", Jo, [H(Ve, {
                title: m(X)
            }, {
                default: Se(() => [t("button", {
                    class: "ml-auto",
                    onClick: re
                }, I[13] || (I[13] = [t("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, [t("path", {
                    d: "M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z",
                    fill: "#9554F3"
                })], -1)]))]),
                _: 1
            }, 8, ["title"]), H(Ao, {
                ref_key: "speakerListRef",
                ref: C,
                toLanguage: m(i),
                voiceType: m(a)
            }, null, 8, ["toLanguage", "voiceType"])])]), t("div", {
                class: Fe(["px-4 pb-3 pt-3 flex-shrink-0 grid gap-2", m(K) ? "grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]" : "grid-cols-1"])
            }, [m(K) ? (F(), k("button", {
                key: 0,
                type: "button",
                class: "p-2 w-full min-w-0 overflow-hidden text-sm font-medium leading-5 text-violet-700 bg-violet-50 rounded-lg cursor-pointer border border-violet-200 flex items-center justify-center gap-1.5",
                "aria-label": m(se),
                title: m(se),
                onClick: at
            }, [I[14] || (I[14] = t("svg", {
                class: "w-5 h-5 flex-shrink-0",
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg"
            }, [t("rect", {
                x: "3",
                y: "5",
                width: "18",
                height: "14",
                rx: "2",
                stroke: "currentColor",
                "stroke-width": "1.8"
            }), t("path", {
                d: "M10 9.5L15 12L10 14.5V9.5Z",
                fill: "currentColor"
            })], -1)), t("span", Ko, A(m(se)), 1)], 8, Xo)) : G("", !0), t("button", {
                type: "button",
                class: "p-2 w-full text-sm font-medium leading-5 text-white bg-violet-500 rounded-lg cursor-pointer border-none",
                onClick: ut
            }, A(m(ne)), 1)], 2)], 64))]))
        }
    }),
    t0 = W({
        __name: "App",
        setup(e) {
            return (i, l) => (F(), ze(e0))
        }
    });
wt(t0).mount("#app");
