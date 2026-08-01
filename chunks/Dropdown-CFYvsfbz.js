var K = Object.defineProperty;
var X = (a, t, e) => t in a ? K(a, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : a[t] = e;
var I = (a, t, e) => X(a, typeof t != "symbol" ? t + "" : t, e);
import {
    p as M,
    x as _,
    y as S,
    F as R,
    z as r,
    E as C,
    O as U,
    o as j,
    k as Y,
    l as G,
    d as $,
    s as O,
    a5 as J,
    n as W,
    m as q,
    af as Z,
    i as b,
    q as E,
    a9 as f,
    t as Q,
    ac as ee,
    R as te,
    B as A,
    D as w,
    ad as N,
    I as ae,
    J as ne,
    N as B,
    ae as ie,
    H as oe,
    L as se,
    u as re
} from "./_plugin-vue_export-helper-s9b7xfAc.js";
const le = ["aria-checked"],
    ue = {
        class: "sr-only"
    },
    _e = M({
        __name: "Toggle",
        props: {
            modelValue: {
                type: Boolean
            },
            label: {},
            onIcon: {},
            offIcon: {}
        },
        emits: ["update:modelValue"],
        setup(a) {
            return (t, e) => (S(), _("button", {
                type: "button",
                class: R(["relative inline-flex h-[18px] w-[32px] items-center rounded-full transition-colors", t.modelValue ? "bg-violet-500" : "bg-[#D5D5D5]"]),
                "aria-checked": t.modelValue,
                role: "switch",
                onClick: e[0] || (e[0] = n => t.$emit("update:modelValue", !t.modelValue))
            }, [r("span", ue, C(t.label), 1), r("span", {
                class: R(["absolute h-[14px] w-[14px] transform rounded-full bg-white shadow-md transition-transform", t.modelValue ? "right-[2px]" : "left-[2px]"])
            }, null, 2)], 10, le))
        }
    }),
    ca = U(_e, [
        ["__scopeId", "data-v-28b739d8"]
    ]),
    Se = "Could not establish connection. Receiving end does not exist.";
function ce(a) {
    return a instanceof Error ? a.message : typeof a == "string" ? a : ""
}
function ga(a) {
    return ce(a).includes(Se)
}
function ge() {
    return {
        toLanguage: G.toLanguage,
        fromLanguage: "en-US",
        skipTranslationWhenSameLanguage: !1,
        userSubtitleSegmentationEnabled: !0,
        subtitleSize: 20,
        gender: "1",
        voice: G.getDefaultVoiceValue(),
        pauseVideo: !1,
        translateEngine: "google",
        voicesType: "free",
        videoVolumeControlModel: !1,
        showSubtitle: !1,
        bilingualSubtitleEnabled: !1,
        originalVolume: 0,
        translationVolume: 100,
        floatingBall: !0,
        iosOpenOriginVolume: !1,
        multiSpeakers: "[]",
        subtitleStyle: Y(),
        bilingualSubtitleStyle: j(),
        subtitlePriority: "ai",
        memberDubbingTipsDismissed: !1,
        memberFreeVoiceAzureTipDismissed: !1,
        memberPlatformSubtitlePriorityTipDismissed: !1,
        sidebarEntry: !0,
        disabledSites: [],
        translationRulesEnabled: !0
    }
}
const de = ["pingfang", "heiti", "kaiti", "songti", "fangsong", "dongqingheiti", "lantinghei", "stsong", "wawati", "weibei", "xingkai", "yuanti"],
    me = ["hiragino_mincho_pron", "hiragino_kaku_gothic_pron"],
    he = ["apple_sd_gothic_neo", "nanum_gothic"],
    Ee = ["kohinoor_devanagari", "devanagari_mt", "sama_devanagari", "tiro_devanagari_hindi", "shobhika"],
    Te = ["geeza_pro", "damascus", "al_nile", "al_bayan", "diwan_kufi"],
    fe = ["arial_hebrew", "arial_hebrew_scholar"],
    Ae = ["thonburi", "ayuthaya"],
    pe = ["tiro_bangla"],
    Re = ["gujarati_sangam_mn", "kohinoor_gujarati", "mukta_vaani"],
    ye = ["sama_gurmukhi", "lahore_gurmukhi", "tiro_gurmukhi"],
    Pe = ["tamil_mn", "sama_tamil", "october_tamil"],
    Ie = ["kohinoor_telugu", "telugu_mn", "tiro_telugu"],
    be = ["sama_malayalam", "malayalam_mn", "malayalam_sangam_mn"],
    we = ["kannada_mn", "kannada_sangam_mn", "noto_sans_kannada", "noto_serif_kannada"],
    Ne = ["khmer_sangam_mn"],
    Ce = ["lao_sangam_mn", "lao_mn"],
    ve = ["myanmar_mn", "noto_serif_myanmar"],
    Le = ["sinhala_mn"],
    ke = ["kefa_iii"],
    Fe = ["oriya_sangam_mn", "noto_sans_oriya"],
    T = ["arial_unicode_ms", "arial", "courier_new", "georgia", "tahoma", "times_new_roman", "trebuchet_ms", "verdana", "helvetica_neue"],
    Ge = ["arial_unicode_ms", ...Te, "arial", "courier_new", "tahoma", "times_new_roman"],
    Oe = ["arial_unicode_ms", ...fe, "arial", "courier_new", "tahoma", "times_new_roman"],
    Be = ["arial_unicode_ms", ...Ae, "tahoma"],
    Me = [...pe, "arial_unicode_ms"],
    Ue = [...Re, "arial_unicode_ms"],
    De = [...ye, "arial_unicode_ms"],
    xe = [...Pe, "arial_unicode_ms"],
    Ve = [...Ie, "arial_unicode_ms"],
    He = [...be, "arial_unicode_ms"],
    ze = [...we, "arial_unicode_ms"],
    Ke = [...Ne, "arial_unicode_ms"],
    Xe = [...Ce, "arial_unicode_ms"],
    je = [...ve, "arial_unicode_ms"],
    Ye = [...Le, "arial_unicode_ms"],
    $e = [...ke, "arial_unicode_ms"],
    Je = [...Fe, "arial_unicode_ms"],
    We = ["arial_unicode_ms"],
    qe = new Set(["hi", "mr", "ne", "kok", "sa"]),
    Ze = new Set(["ar", "fa", "ur", "ps", "sd", "ug", "ckb", "ks"]),
    Qe = new Set(["he", "yi"]),
    et = new Set(["th"]),
    tt = new Set(["as", "bn"]),
    at = new Set(["gu"]),
    nt = new Set(["pa"]),
    it = new Set(["ta"]),
    ot = new Set(["te"]),
    st = new Set(["ml"]),
    rt = new Set(["kn"]),
    lt = new Set(["km"]),
    ut = new Set(["lo"]),
    _t = new Set(["my"]),
    St = new Set(["si"]),
    ct = new Set(["am"]),
    gt = new Set(["or"]),
    dt = new Set([]),
    mt = new Set(["hani", "hans", "hant"]),
    ht = new Set(["hira", "hrkt", "jpan", "kana"]),
    Et = new Set(["hang", "kore"]),
    Tt = new Set(["deva"]),
    ft = new Set(["arab"]),
    At = new Set(["hebr"]),
    pt = new Set(["thai"]),
    Rt = new Set(["beng"]),
    yt = new Set(["gujr"]),
    Pt = new Set(["guru"]),
    It = new Set(["taml"]),
    bt = new Set(["telu"]),
    wt = new Set(["mlym"]),
    Nt = new Set(["knda"]),
    Ct = new Set(["khmr"]),
    vt = new Set(["laoo"]),
    Lt = new Set(["mymr"]),
    kt = new Set(["sinh"]),
    Ft = new Set(["ethi"]),
    Gt = new Set(["orya"]),
    Ot = new Set([]),
    Bt = new Set(["none", "default", "custom"]),
    Mt = {
        none: "None",
        default: "Default",
        pingfang: "苹方",
        heiti: "华文黑体",
        kaiti: "华文楷体",
        songti: "华文宋体",
        fangsong: "华文仿宋",
        dongqingheiti: "冬青黑体",
        lantinghei: "兰亭黑",
        stsong: "宋体",
        wawati: "娃娃体",
        weibei: "魏碑",
        xingkai: "行楷",
        yuanti: "圆体",
        arial_unicode_ms: "Arial Unicode MS",
        arial: "Arial",
        courier_new: "Courier New",
        georgia: "Georgia",
        tahoma: "Tahoma",
        times_new_roman: "Times New Roman",
        trebuchet_ms: "Trebuchet MS",
        verdana: "Verdana",
        helvetica_neue: "Helvetica Neue",
        hiragino_mincho_pron: "ヒラギノ明朝 ProN",
        hiragino_kaku_gothic_pron: "ヒラギノ角ゴ ProN",
        kohinoor_devanagari: "Kohinoor Devanagari",
        devanagari_mt: "Devanagari MT",
        sama_devanagari: "Sama Devanagari",
        tiro_devanagari_hindi: "Tiro Devanagari Hindi",
        shobhika: "Shobhika",
        apple_sd_gothic_neo: "Apple SD Gothic Neo",
        nanum_gothic: "나눔고딕",
        geeza_pro: "Geeza Pro",
        damascus: "Damascus",
        al_nile: "Al Nile",
        al_bayan: "Al Bayan",
        diwan_kufi: "Diwan Kufi",
        arial_hebrew: "Arial Hebrew",
        arial_hebrew_scholar: "Arial Hebrew Scholar",
        thonburi: "Thonburi",
        ayuthaya: "Ayuthaya",
        tiro_bangla: "Tiro Bangla",
        gujarati_sangam_mn: "Gujarati Sangam MN",
        kohinoor_gujarati: "Kohinoor Gujarati",
        mukta_vaani: "Mukta Vaani",
        sama_gurmukhi: "Sama Gurmukhi",
        lahore_gurmukhi: "Lahore Gurmukhi",
        tiro_gurmukhi: "Tiro Gurmukhi",
        tamil_mn: "Tamil MN",
        sama_tamil: "Sama Tamil",
        october_tamil: "October Tamil",
        kohinoor_telugu: "Kohinoor Telugu",
        telugu_mn: "Telugu MN",
        tiro_telugu: "Tiro Telugu",
        sama_malayalam: "Sama Malayalam",
        malayalam_mn: "Malayalam MN",
        malayalam_sangam_mn: "Malayalam Sangam MN",
        kannada_mn: "Kannada MN",
        kannada_sangam_mn: "Kannada Sangam MN",
        noto_sans_kannada: "Noto Sans Kannada",
        noto_serif_kannada: "Noto Serif Kannada",
        khmer_sangam_mn: "Khmer Sangam MN",
        lao_sangam_mn: "Lao Sangam MN",
        lao_mn: "Lao MN",
        myanmar_mn: "Myanmar MN",
        noto_serif_myanmar: "Noto Serif Myanmar",
        sinhala_mn: "Sinhala MN",
        kefa_iii: "Kefa III",
        oriya_sangam_mn: "Oriya Sangam MN",
        noto_sans_oriya: "Noto Sans Oriya",
        custom: "Custom"
    };
function Ut(a) {
    return typeof a != "string" ? "en" : a.trim().replace(/_/g, "-").toLowerCase() || "en"
}
function Dt(a) {
    const e = Ut(a).split("-").filter(Boolean),
        n = e[0] || "en",
        o = e.slice(1).find(c => /^[a-z]{4}$/.test(c)) || null;
    return {
        primaryLanguage: n,
        scriptSubtag: o
    }
}
function p(...a) {
    const t = new Set,
        e = [];
    for (const n of a)
        for (const o of n) t.has(o) || (t.add(o), e.push(o));
    return e
}
function xt(a) {
    const {
        primaryLanguage: t,
        scriptSubtag: e
    } = Dt(a);
    return t === "zh" || e && mt.has(e) ? p(de, T) : t === "ja" || e && ht.has(e) ? p(me, T) : t === "ko" || e && Et.has(e) ? p(he, T) : qe.has(t) || e && Tt.has(e) ? p(Ee, T) : Ze.has(t) || e && ft.has(e) ? Ge : Qe.has(t) || e && At.has(e) ? Oe : et.has(t) || e && pt.has(e) ? Be : tt.has(t) || e && Rt.has(e) ? Me : at.has(t) || e && yt.has(e) ? Ue : nt.has(t) || e && Pt.has(e) ? De : it.has(t) || e && It.has(e) ? xe : ot.has(t) || e && bt.has(e) ? Ve : st.has(t) || e && wt.has(e) ? He : rt.has(t) || e && Nt.has(e) ? ze : lt.has(t) || e && Ct.has(e) ? Ke : ut.has(t) || e && vt.has(e) ? Xe : _t.has(t) || e && Lt.has(e) ? je : St.has(t) || e && kt.has(e) ? Ye : ct.has(t) || e && Ft.has(e) ? $e : gt.has(t) || e && Gt.has(e) ? Je : dt.has(t) || e && Ot.has(e) ? We : T
}
function Vt(a) {
    return ["none", ...xt(a)]
}
function da(a) {
    return Mt[a] || a
}
function Ht(a, t) {
    return Bt.has(a) ? !0 : Vt(t).includes(a)
}
function zt(a, t) {
    const e = { ...a,
        positionOffsets: { ...a.positionOffsets
        }
    };
    return Ht(e.fontPreset, t) || (e.fontPreset = "none"), e
}
class Kt {
    constructor(t) {
        I(this, "pendingOperation", Promise.resolve());
        this.deps = t
    }
    async patchSettings(t) {
        return this.enqueue(async () => {
            const e = await this.deps.loadSettings(), n = this.normalizeSettings({ ...this.deps.createDefaultSettingsConfig(),
                ...e || {}
            }), o = this.normalizeSettings({ ...n,
                ...t
            });
            o.multiSpeakers = this.normalizeMultiSpeakers(n, o, t);
            const c = Object.prototype.hasOwnProperty.call(t, "bilingualSubtitleStyle"),
                g = !!(e && Object.prototype.hasOwnProperty.call(e, "bilingualSubtitleStyle"));
            return !c && !g && delete o.bilingualSubtitleStyle, await this.deps.saveSettings(o), o
        })
    }
    async appendDisabledSite(t) {
        return this.enqueue(async () => {
            const e = await this.deps.loadSettings(), n = this.normalizeSettings({ ...this.deps.createDefaultSettingsConfig(),
                ...e || {}
            }), o = J(t), c = Array.isArray(n.disabledSites) ? [...n.disabledSites] : [];
            o && !c.includes(o) && c.push(o);
            const g = this.normalizeSettings({ ...n,
                disabledSites: c
            });
            return g.multiSpeakers = g.multiSpeakers || "[]", !!(e && Object.prototype.hasOwnProperty.call(e, "bilingualSubtitleStyle")) || delete g.bilingualSubtitleStyle, await this.deps.saveSettings(g), g
        })
    }
    async loadCurrentSettings() {
        const t = await this.deps.loadSettings(), e = { ...this.deps.createDefaultSettingsConfig(),
            ...t || {}
        };
        return this.normalizeSettings(e)
    }
    normalizeSettings(t) {
        return delete t.useTranslateV2, t.subtitleStyle = zt(W(t.subtitleStyle), t.toLanguage), t.bilingualSubtitleStyle !== void 0 && (t.bilingualSubtitleStyle = q(t.bilingualSubtitleStyle)), t
    }
    normalizeMultiSpeakers(t, e, n) {
        return !Object.prototype.hasOwnProperty.call(n, "multiSpeakers") && t.toLanguage !== e.toLanguage ? "[]" : e.multiSpeakers || "[]"
    }
    enqueue(t) {
        const e = this.pendingOperation.catch(() => {}).then(t);
        return this.pendingOperation = e.then(() => {}, () => {}), e
    }
}
function Xt(a = {}) {
    return new Kt({
        createDefaultSettingsConfig: a.createDefaultSettingsConfig || jt,
        loadSettings: a.loadSettings || (() => O.getItem("local:settings")),
        saveSettings: a.saveSettings || (t => O.setItem("local:settings", t))
    })
}
function jt() {
    return { ...ge(),
        sidebarEntry: !0
    }
}
const [ma, ha] = $("LocalSettingsMutationService", () => Xt()), {
    sendMessage: m
} = Z();
function Yt(a) {
    return !!a && typeof a == "object" && "settings" in a && !("toLanguage" in a)
}
class $t {
    static logSubtitlePriorityDebug(t) {
        try {
            console.log(`${this.SUBTITLE_PRIORITY_DEBUG_PREFIX} ${JSON.stringify(t)}`)
        } catch (e) {
            console.log(`${this.SUBTITLE_PRIORITY_DEBUG_PREFIX} ${JSON.stringify({event:"notify-settings-saved",serializationError:String(e)})}`)
        }
    }
    static normalizeSettingsSavedPayload(t) {
        return Yt(t) ? t : {
            settings: t,
            source: "popup"
        }
    }
    static async notifyOriginalVolumeChange(t, e) {
        return m("notifyOriginalVolumeChange", t, e)
    }
    static async notifyTranslationVolumeChange(t, e) {
        return m("notifyTranslationVolumeChange", t, e)
    }
    static async notifySubtitleSizeChange(t, e) {
        return m("notifySubtitleSizeChange", t, e)
    }
    static async notifySubtitleStyleChange(t, e) {
        return m("notifySubtitleStyleChange", t, e)
    }
    static async notifySettingsSaved(t, e) {
        const n = this.normalizeSettingsSavedPayload(t);
        return this.logSubtitlePriorityDebug({
            event: "notify-settings-saved",
            source: n.source,
            tabId: e,
            dirtyFields: Array.isArray(n.dirtyFields) && n.dirtyFields.length > 0 ? n.dirtyFields : Object.keys(n.settings || {}),
            settings: n.settings,
            url: typeof window < "u" ? window.location.href : ""
        }), m("notifySettingsSaved", n, e)
    }
    static async isPlaying(t) {
        return m("isPlaying", void 0, t)
    }
    static async swapVolumeSettings(t) {
        return m("swapVolumeSettings", void 0, t)
    }
}
I($t, "SUBTITLE_PRIORITY_DEBUG_PREFIX", "[YD][subtitle-priority-debug]");
const Jt = ["aria-label"],
    Wt = {
        class: "justify-start items-center gap-2 flex"
    },
    qt = ["innerHTML"],
    Zt = {
        key: 1,
        class: "text-black text-sm font-normal leading-normal"
    },
    Qt = {
        key: 0,
        class: "origin-top-right absolute left-0 right-0 mt-2 rounded-xl shadow-lg bg-white ring-1 ring-black/5 focus:outline-none z-50 max-h-60 overflow-y-auto"
    },
    ea = {
        role: "menu",
        "aria-orientation": "vertical",
        "aria-labelledby": "options-menu",
        class: "bg-white w-full"
    },
    ta = {
        key: 0,
        class: "px-4 py-2 border-b border-gray-100"
    },
    aa = ["placeholder"],
    na = ["onClick"],
    ia = {
        class: "justify-start items-center gap-2 flex"
    },
    oa = ["innerHTML"],
    sa = {
        key: 0,
        "data-svg-wrapper": "",
        class: "ml-auto"
    },
    ra = {
        key: 1,
        class: "px-4 py-3 text-sm text-gray-500 bg-white"
    },
    la = M({
        __name: "Dropdown",
        props: {
            modelValue: {},
            options: {},
            label: {},
            placeholder: {},
            emptyText: {},
            searchable: {
                type: Boolean
            },
            searchPlaceholder: {}
        },
        emits: ["update:modelValue"],
        setup(a, {
            emit: t
        }) {
            const e = a,
                n = b.t("dropdownPlaceholder") || "请选择",
                o = b.t("dropdownNoOptions") || "没有可用选项",
                c = b.t("dropdownSearch") || "搜索...",
                g = E(() => e.placeholder || n),
                v = E(() => e.emptyText || o),
                D = E(() => e.searchPlaceholder || c),
                x = t,
                h = E(() => e.options || []),
                d = f(!1),
                y = f(null),
                u = f(""),
                P = f(null),
                L = E(() => {
                    if (!e.searchable || u.value.trim() === "") return h.value.map((s, l) => ({ ...s,
                        originalIndex: l
                    }));
                    const i = u.value.toLowerCase();
                    return h.value.map((s, l) => ({ ...s,
                        originalIndex: l
                    })).filter(s => s.text.toLowerCase().includes(i) || s.value.toLowerCase().includes(i))
                }),
                V = () => {
                    d.value = !d.value, d.value && e.searchable ? re(() => {
                        P.value && P.value.focus()
                    }) : u.value = ""
                },
                H = i => {
                    i !== e.modelValue && x("update:modelValue", i), d.value = !1, u.value = ""
                },
                k = i => {
                    y.value && !y.value.contains(i.target) && (d.value = !1, u.value = "")
                },
                F = i => {
                    i.key === "Escape" && d.value && (d.value = !1, u.value = "")
                };
            return Q(() => {
                document.addEventListener("click", k), document.addEventListener("keydown", F)
            }), ee(() => {
                document.removeEventListener("click", k), document.removeEventListener("keydown", F)
            }), te(() => e.options, () => {
                u.value = ""
            }, {
                deep: !0
            }), (i, s) => (S(), _("div", {
                class: "relative inline-block text-left w-full",
                ref_key: "dropdownRef",
                ref: y
            }, [r("div", null, [r("button", {
                onClick: V,
                type: "button",
                class: R(["h-12 px-4 py-3 bg-white rounded-xl border border-black/10 justify-between items-center inline-flex w-full", {
                    "border-purple-500": w(d)
                }]),
                "aria-label": i.label
            }, [r("div", Wt, [N(i.$slots, "icon", {}, void 0, !0), N(i.$slots, "text", {}, () => [h.value.length > 0 && i.modelValue >= 0 && i.modelValue < h.value.length ? (S(), _("span", {
                key: 0,
                class: "text-black text-sm font-normal leading-normal",
                innerHTML: h.value[i.modelValue].text
            }, null, 8, qt)) : (S(), _("span", Zt, C(g.value), 1))], !0)]), s[2] || (s[2] = r("div", {
                "data-svg-wrapper": "",
                class: "ml-auto"
            }, [r("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, [r("path", {
                d: "M5.26171 5.33334L10.7376 5.33334C10.9185 5.33334 11.063 5.39155 11.1712 5.50797C11.2793 5.62391 11.3334 5.75942 11.3334 5.91449C11.3334 5.96315 11.3265 6.01397 11.3127 6.06693C11.2995 6.11941 11.2791 6.16975 11.2515 6.21794L8.49919 10.3997C8.43529 10.4885 8.36205 10.5553 8.27948 10.6001C8.19739 10.6445 8.10425 10.6667 8.00004 10.6667C7.89584 10.6667 7.80269 10.6445 7.7206 10.6001C7.63852 10.5557 7.56528 10.4889 7.50089 10.3997L4.74855 6.21794C4.72151 6.16975 4.70112 6.11893 4.68735 6.0655C4.67359 6.01206 4.66671 5.96124 4.66671 5.91305C4.66671 5.75751 4.72078 5.62201 4.82891 5.50654C4.93705 5.39108 5.08132 5.33334 5.26171 5.33334Z",
                fill: "black",
                "fill-opacity": "0.6"
            })])], -1))], 10, Jt)]), w(d) ? (S(), _("div", Qt, [r("div", ea, [i.searchable ? (S(), _("div", ta, [ae(r("input", {
                type: "text",
                "onUpdate:modelValue": s[0] || (s[0] = l => ie(u) ? u.value = l : null),
                class: "w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500",
                placeholder: D.value,
                onClick: s[1] || (s[1] = B(() => {}, ["stop"])),
                ref_key: "searchInputRef",
                ref: P
            }, null, 8, aa), [
                [ne, w(u)]
            ])])) : A("", !0), (S(!0), _(oe, null, se(L.value, (l, z) => (S(), _("a", {
                key: z,
                onClick: B(ua => H(l.originalIndex), ["stop"]),
                class: R(["flex items-center h-12 px-4 text-sm text-black hover:bg-purple-50 cursor-pointer bg-white", {
                    "bg-purple-50": l.originalIndex === i.modelValue
                }]),
                role: "menuitem"
            }, [r("div", ia, [N(i.$slots, "option-icon", {
                option: h.value[l.originalIndex],
                index: l.originalIndex
            }, void 0, !0), r("span", {
                class: "text-black text-sm font-normal leading-normal",
                innerHTML: l.text
            }, null, 8, oa)]), l.originalIndex === i.modelValue ? (S(), _("div", sa, s[3] || (s[3] = [r("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, [r("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M6 10L4 12L10 18L20 8L18 6L10 14L6 10Z",
                fill: "#9554F3"
            })], -1)]))) : A("", !0)], 10, na))), 128)), L.value.length === 0 ? (S(), _("div", ra, C(v.value), 1)) : A("", !0)])])) : A("", !0)], 512))
        }
    }),
    Ea = U(la, [
        ["__scopeId", "data-v-7f89c851"]
    ]);
export {
    Ea as D, $t as S, ca as T, Vt as a, da as b, ge as c, ha as g, ga as i, zt as n
};