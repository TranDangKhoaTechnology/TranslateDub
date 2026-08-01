var wn = Object.defineProperty;
var Fn = (r, t, a) => t in r ? wn(r, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: a
}) : r[t] = a;
var kt = (r, t, a) => Fn(r, typeof t != "symbol" ? t + "" : t, a);
import {
    d as Ml,
    A as Ul,
    s as dt,
    f as Oe,
    p as pt,
    q as S,
    l as Ze,
    r as g,
    Q as vt,
    R as Ae,
    t as Pt,
    x as b,
    y as d,
    H as ee,
    z as e,
    T as Ve,
    B as N,
    E as o,
    N as ke,
    I as ae,
    K as Ie,
    L as oe,
    J as _e,
    U as G,
    F as U,
    W as wt,
    i as Et,
    O as Ht,
    D as se,
    X as Je,
    Y as Ge,
    Z as Sn,
    n as Ft,
    m as St,
    M as it,
    $ as Pe,
    a0 as Gt,
    k as Vl,
    o as Ol,
    a1 as En,
    a2 as Bn,
    a3 as Dn,
    a4 as Cn,
    b as _l,
    u as $n,
    w as Tn,
    G as rt,
    a5 as An,
    S as Pn,
    P as Ln
} from "./_plugin-vue_export-helper-s9b7xfAc.js";
import {
    T as ie,
    i as In,
    g as Gl,
    S as zt,
    a as Rn,
    b as Mn,
    D as Te,
    c as wl,
    n as Un
} from "./Dropdown-CFYvsfbz.js";
import {
    S as bt,
    i as Vn,
    g as On,
    a as Fl
} from "./PronunciationVoiceCapabilities-BCl-gm3V.js";
import {
    f as Gn,
    c as Nn,
    b as jn,
    a as zn
} from "./SubtitleOverlayStyle-DOfNoHcs.js";
class qn extends Ul {
    constructor() {
        super(...arguments);
        kt(this, "baseURL", globalThis.__DUBBING_LOCAL_API_BASE__);
        kt(this, "timeout", 15e3)
    }
    async request(a, u, p) {
        const k = new AbortController,
            $ = setTimeout(() => k.abort(), this.timeout);
        try {
            const D = await dt.getItem("local:SESSION"), C = {
                "Content-Type": "application/json"
            };
            D && (C.Ck = D);
            const B = await fetch(`${this.baseURL}${u}`, {
                method: a,
                headers: C,
                body: p === void 0 ? void 0 : JSON.stringify(p),
                signal: k.signal,
                credentials: "include"
            });
            if (B.status >= 200 && B.status < 300) return await B.json();
            throw new Error(`translate-preference occur error - Status: ${B.status}, StatusText: ${B.statusText}`)
        } finally {
            clearTimeout($)
        }
    }
    async listDomains() {
        return this.request("GET", "/api/v2/translate-preference/domains")
    }
    async listGlossary() {
        return this.request("GET", "/api/v2/translate-preference/glossary")
    }
    async listGlossaryPage(a) {
        var p, k;
        const u = new URLSearchParams({
            toLanguage: a.toLanguage
        });
        return (p = a.domain) != null && p.trim() && u.set("domain", a.domain.trim()), (k = a.keyword) != null && k.trim() && u.set("keyword", a.keyword.trim()), a.userAfterId !== void 0 && u.set("userAfterId", String(a.userAfterId)), a.builtinAfterId !== void 0 && u.set("builtinAfterId", String(a.builtinAfterId)), a.limit !== void 0 && u.set("limit", String(a.limit)), this.request("GET", `/api/v2/translate-preference/glossary-page?${u.toString()}`)
    }
    async listBuiltinGlossaryDomains(a) {
        const u = new URLSearchParams({
            toLanguage: a
        });
        return this.request("GET", `/api/v2/translate-preference/builtin-glossary/domains?${u.toString()}`)
    }
    async updateBuiltinGlossaryDomain(a, u) {
        return this.request("PUT", `/api/v2/translate-preference/builtin-glossary/domains/${encodeURIComponent(a)}`, u)
    }
    async updateBuiltinGlossaryDomains(a) {
        return this.request("PUT", "/api/v2/translate-preference/builtin-glossary/domains", a)
    }
    async listBuiltinGlossary(a) {
        const u = new URLSearchParams({
            toLanguage: a.toLanguage
        });
        return a.domain && u.set("domain", a.domain), a.keyword && u.set("keyword", a.keyword), this.request("GET", `/api/v2/translate-preference/builtin-glossary?${u.toString()}`)
    }
    async createGlossary(a) {
        return this.request("POST", "/api/v2/translate-preference/glossary", a)
    }
    async updateGlossary(a, u) {
        return this.request("PUT", `/api/v2/translate-preference/glossary/${a}`, u)
    }
    async deleteGlossary(a) {
        return this.request("DELETE", `/api/v2/translate-preference/glossary/${a}`)
    }
    async blockBuiltinGlossaryTerm(a) {
        return this.request("POST", "/api/v2/translate-preference/builtin-glossary/blocked", a)
    }
    async restoreBuiltinGlossaryTerm(a) {
        return this.request("DELETE", "/api/v2/translate-preference/builtin-glossary/blocked", a)
    }
    async listReplacement() {
        return this.request("GET", "/api/v2/translate-preference/replacement")
    }
    async listReplacementPage(a = {}) {
        var $, D;
        const u = new URLSearchParams;
        ($ = a.domain) != null && $.trim() && u.set("domain", a.domain.trim()), (D = a.keyword) != null && D.trim() && u.set("keyword", a.keyword.trim()), a.afterId !== void 0 && u.set("afterId", String(a.afterId)), a.limit !== void 0 && u.set("limit", String(a.limit));
        const p = u.toString(),
            k = p ? `?${p}` : "";
        return this.request("GET", `/api/v2/translate-preference/replacement-page${k}`)
    }
    async listReplacementCatalogPage(a = {}) {
        var $, D;
        const u = new URLSearchParams;
        ($ = a.domain) != null && $.trim() && u.set("domain", a.domain.trim()), (D = a.keyword) != null && D.trim() && u.set("keyword", a.keyword.trim()), a.userAfterId !== void 0 && u.set("userAfterId", String(a.userAfterId)), a.builtinAfterId !== void 0 && u.set("builtinAfterId", String(a.builtinAfterId)), a.limit !== void 0 && u.set("limit", String(a.limit));
        const p = u.toString(),
            k = p ? `?${p}` : "";
        return this.request("GET", `/api/v2/translate-preference/replacement-catalog-page${k}`)
    }
    async listBuiltinTextReplacementDomains() {
        return this.request("GET", "/api/v2/translate-preference/builtin-text-replacement/domains")
    }
    async updateBuiltinTextReplacementDomain(a, u) {
        return this.request("PUT", `/api/v2/translate-preference/builtin-text-replacement/domains/${encodeURIComponent(a)}`, u)
    }
    async updateBuiltinTextReplacementDomains(a) {
        return this.request("PUT", "/api/v2/translate-preference/builtin-text-replacement/domains", a)
    }
    async blockBuiltinTextReplacementRule(a) {
        return this.request("POST", "/api/v2/translate-preference/builtin-text-replacement/blocked", a)
    }
    async restoreBuiltinTextReplacementRule(a) {
        return this.request("DELETE", "/api/v2/translate-preference/builtin-text-replacement/blocked", a)
    }
    async createReplacement(a) {
        return this.request("POST", "/api/v2/translate-preference/replacement", a)
    }
    async updateReplacement(a, u) {
        return this.request("PUT", `/api/v2/translate-preference/replacement/${a}`, u)
    }
    async deleteReplacement(a) {
        return this.request("DELETE", `/api/v2/translate-preference/replacement/${a}`)
    }
    async listTranslatedTextReplacementPage(a) {
        var p, k;
        const u = new URLSearchParams;
        return u.set("toLanguage", a.toLanguage), (p = a.domain) != null && p.trim() && u.set("domain", a.domain.trim()), (k = a.keyword) != null && k.trim() && u.set("keyword", a.keyword.trim()), a.afterId !== void 0 && u.set("afterId", String(a.afterId)), a.limit !== void 0 && u.set("limit", String(a.limit)), this.request("GET", `/api/v2/translate-preference/translated-text-replacement-page?${u.toString()}`)
    }
    async createTranslatedTextReplacement(a) {
        return this.request("POST", "/api/v2/translate-preference/translated-text-replacement", a)
    }
    async updateTranslatedTextReplacement(a, u) {
        return this.request("PUT", `/api/v2/translate-preference/translated-text-replacement/${a}`, u)
    }
    async deleteTranslatedTextReplacement(a) {
        return this.request("DELETE", `/api/v2/translate-preference/translated-text-replacement/${a}`)
    }
}
const [x0, Nl] = Ml("TranslatePreferenceApiService", () => new qn);
function Sl(r) {
    const t = r == null ? void 0 : r.trim();
    return t || void 0
}
function Le(r) {
    const t = globalThis.__DUBBING_I18N_GET_UI_LANGUAGE__().toLowerCase(),
        a = t.startsWith("zh") ? r.labelZh : r.labelEn,
        u = t.startsWith("zh") ? r.labelEn : r.labelZh;
    return Sl(a) || Sl(u) || r.code
}
const Wn = {
        class: "space-y-5 border-t border-black/5 p-5"
    },
    Hn = {
        class: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between"
    },
    Kn = {
        class: "min-w-0"
    },
    Zn = {
        class: "text-sm font-medium text-black"
    },
    Qn = {
        class: "mt-1 text-sm text-black/50"
    },
    Yn = ["disabled"],
    Xn = ["aria-label"],
    Jn = ["value"],
    ea = ["aria-label"],
    ta = ["value"],
    la = ["placeholder"],
    na = ["disabled"],
    aa = ["disabled", "aria-label", "title"],
    oa = {
        key: 0,
        class: "text-sm text-red-500"
    },
    ua = {
        key: 1
    },
    sa = {
        class: "hidden overflow-x-auto md:block"
    },
    ia = {
        class: "w-full min-w-[760px] table-fixed overflow-hidden rounded-lg border border-black/10"
    },
    ra = {
        class: "border-b border-black/5 bg-neutral-50 text-left text-xs font-medium uppercase tracking-wider text-black/40"
    },
    ca = {
        class: "w-[18%] px-4 py-2.5"
    },
    da = {
        class: "w-[27%] px-4 py-2.5"
    },
    ba = {
        class: "w-[27%] px-4 py-2.5"
    },
    pa = {
        class: "w-[13%] whitespace-nowrap px-4 py-2.5"
    },
    va = {
        class: "w-[15%] whitespace-nowrap px-4 py-2.5 text-right"
    },
    fa = {
        class: "divide-y divide-black/5"
    },
    ma = {
        class: "min-w-0 px-4 py-2.5 text-black/70"
    },
    ga = ["title"],
    xa = {
        class: "min-w-0 px-4 py-2.5"
    },
    ha = ["title"],
    ya = {
        class: "min-w-0 px-4 py-2.5"
    },
    ka = ["title"],
    _a = {
        class: "px-4 py-2.5"
    },
    wa = {
        class: "px-4 py-2.5 text-right"
    },
    Fa = {
        class: "flex justify-end gap-1.5"
    },
    Sa = ["aria-label", "title", "onClick"],
    Ea = ["aria-label", "title", "onClick"],
    Ba = {
        class: "space-y-3 md:hidden"
    },
    Da = {
        class: "grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-start gap-2 text-sm font-medium text-black"
    },
    Ca = ["title"],
    $a = ["title"],
    Ta = {
        class: "mt-3 flex flex-wrap items-center gap-1.5"
    },
    Aa = {
        class: "max-w-full truncate rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium text-black/60"
    },
    Pa = {
        class: "mt-3 flex items-center justify-between gap-3"
    },
    La = {
        class: "flex justify-end gap-2"
    },
    Ia = ["onClick"],
    Ra = ["onClick"],
    Ma = {
        key: 2,
        class: "rounded-lg border border-dashed border-black/10 py-8 text-center text-sm text-black/35"
    },
    Ua = {
        class: "flex flex-col gap-3 border-t border-black/5 pt-4 sm:flex-row sm:items-center sm:justify-between"
    },
    Va = {
        class: "text-sm text-black/45"
    },
    Oa = {
        class: "flex gap-2"
    },
    Ga = ["disabled"],
    Na = ["disabled"],
    ja = {
        key: 3,
        class: "text-sm text-red-500"
    },
    za = {
        class: "flex h-full w-full max-w-xl flex-col bg-white shadow-2xl"
    },
    qa = {
        class: "flex items-start justify-between gap-4 border-b border-black/10 px-5 py-4"
    },
    Wa = {
        class: "text-base font-semibold text-black"
    },
    Ha = {
        class: "mt-1 text-sm text-black/50"
    },
    Ka = {
        class: "flex-1 space-y-5 overflow-y-auto p-5"
    },
    Za = {
        class: "mb-1 block text-sm font-medium text-black"
    },
    Qa = ["value"],
    Ya = {
        class: "mb-1 block text-sm font-medium text-black"
    },
    Xa = ["value"],
    Ja = {
        class: "mb-1 block text-sm font-medium text-black"
    },
    eo = ["placeholder"],
    to = {
        class: "mb-1 block text-sm font-medium text-black"
    },
    lo = ["placeholder"],
    no = {
        class: "flex items-center justify-between gap-4 rounded-lg border border-black/10 p-4"
    },
    ao = {
        class: "text-sm font-medium text-black"
    },
    oo = {
        class: "mt-1 text-xs text-black/45"
    },
    uo = {
        class: "flex justify-end gap-2 border-t border-black/10 p-5"
    },
    so = ["disabled"],
    io = 20,
    Nt = "__all__",
    ro = pt({
        __name: "TranslatedTextReplacementPanel",
        props: {
            domainOptions: {}
        },
        setup(r) {
            const t = r,
                a = Nl(),
                u = (w, F) => {
                    const x = Et.t(w);
                    return typeof x == "string" && x.trim() && x.trim() !== w ? x.trim() : F
                },
                p = w => w.replace(/_/g, "-"),
                k = S(() => Object.entries(Ze.languageMap).map(([w, F]) => ({
                    code: p(w),
                    label: F
                }))),
                $ = S(() => {
                    var w, F;
                    return ((w = t.domainOptions.find(x => x.code === "general")) == null ? void 0 : w.code) ?? ((F = t.domainOptions[0]) == null ? void 0 : F.code) ?? "general"
                }),
                D = g([]),
                C = g(p(Ze.toLanguage)),
                B = g(Nt),
                f = g(""),
                V = g(""),
                W = g(1),
                K = g({
                    afterId: 0
                }),
                Z = g({
                    afterId: 0
                }),
                T = g([]),
                I = g(!1),
                A = g(!1),
                Q = g(!1),
                R = g(""),
                M = g(""),
                j = g(new Set),
                Y = g(!1),
                le = g(null),
                te = g(!1),
                z = vt({
                    domain: "general",
                    toLanguage: p(Ze.toLanguage),
                    findText: "",
                    replaceText: "",
                    enabled: !0
                }),
                re = S(() => t.domainOptions),
                ue = S(() => T.value.length > 0 && !A.value),
                de = S(() => I.value && !A.value),
                me = S(() => !!z.toLanguage.trim() && !!z.findText.trim() && !!z.replaceText.trim());
            function ne(w) {
                return Le(w)
            }
            function ge(w) {
                const F = t.domainOptions.find(x => x.code === w);
                return F ? ne(F) : w
            }
            function Re() {
                return B.value === Nt ? void 0 : B.value
            }
            function _(w, F) {
                const x = new Set(j.value);
                F ? x.add(w) : x.delete(w), j.value = x
            }
            function pe(w, F) {
                D.value = D.value.map(x => x.id === w ? { ...x,
                    enabled: F
                } : x)
            }
            async function xe(w = K.value) {
                A.value = !0, R.value = "";
                try {
                    const F = await a.listTranslatedTextReplacementPage({
                        toLanguage: p(C.value),
                        domain: Re(),
                        keyword: V.value,
                        afterId: w.afterId,
                        limit: io
                    });
                    if (F.code !== 0 || !F.data) {
                        R.value = F.message || u("preferenceLoadFailed", "加载失败，请确认已登录后重试。");
                        return
                    }
                    D.value = F.data.items ?? [], K.value = { ...w
                    }, Z.value = {
                        afterId: Math.max(0, F.data.nextAfterId ?? w.afterId)
                    }, I.value = F.data.hasMore
                } catch (F) {
                    console.error("load translated text replacement page failed", F), R.value = u("preferenceLoadFailed", "加载失败，请确认已登录后重试。")
                } finally {
                    A.value = !1
                }
            }
            async function ve() {
                T.value = [], W.value = 1, await xe({
                    afterId: 0
                })
            }
            async function E() {
                V.value = f.value.trim(), await ve()
            }
            async function Ee() {
                f.value = "", V.value = "", await ve()
            }
            async function we() {
                de.value && (T.value.push({ ...K.value
                }), W.value += 1, await xe(Z.value))
            }
            async function he() {
                if (!ue.value) return;
                const w = T.value.pop() ?? {
                    afterId: 0
                };
                W.value = Math.max(1, W.value - 1), await xe(w)
            }
            function Be(w) {
                le.value = (w == null ? void 0 : w.id) ?? null, z.domain = (w == null ? void 0 : w.domain) ?? $.value, z.toLanguage = p((w == null ? void 0 : w.toLanguage) ?? C.value), z.findText = (w == null ? void 0 : w.findText) ?? "", z.replaceText = (w == null ? void 0 : w.replaceText) ?? "", z.enabled = (w == null ? void 0 : w.enabled) ?? !0, M.value = "", Y.value = !0
            }
            function ye() {
                Y.value = !1, le.value = null
            }
            async function Fe() {
                if (!me.value || Q.value) return;
                Q.value = !0, M.value = "";
                const w = {
                    domain: z.domain,
                    toLanguage: p(z.toLanguage),
                    findText: z.findText.trim(),
                    replaceText: z.replaceText.trim(),
                    enabled: z.enabled
                };
                try {
                    const F = le.value === null ? await a.createTranslatedTextReplacement(w): await a.updateTranslatedTextReplacement(le.value, w);
                    if (F.code !== 0) {
                        M.value = F.message || u("preferenceActionFailed", "操作失败，请稍后重试。");
                        return
                    }
                    const x = C.value !== w.toLanguage || B.value !== w.domain;
                    C.value = w.toLanguage, B.value = w.domain, ye(), x || await ve()
                } catch (F) {
                    console.error("save translated text replacement failed", F), M.value = u("preferenceActionFailed", "操作失败，请稍后重试。")
                } finally {
                    Q.value = !1
                }
            }
            async function De(w, F) {
                const x = D.value.find(J => J.id === w);
                if (!x || j.value.has(w) || x.enabled === F) return;
                const q = x.enabled;
                _(w, !0), pe(w, F), M.value = "";
                try {
                    const J = await a.updateTranslatedTextReplacement(w, {
                        domain: x.domain,
                        toLanguage: p(x.toLanguage),
                        findText: x.findText,
                        replaceText: x.replaceText,
                        enabled: F
                    });
                    if (J.code !== 0) {
                        pe(w, q), M.value = J.message || u("preferenceActionFailed", "操作失败，请稍后重试。");
                        return
                    }
                    J.data && (D.value = D.value.map(Ce => Ce.id === w ? J.data : Ce))
                } catch (J) {
                    console.error("toggle translated text replacement failed", J), pe(w, q), M.value = u("preferenceActionFailed", "操作失败，请稍后重试。")
                } finally {
                    _(w, !1)
                }
            }
            async function Se(w) {
                if (!Q.value) {
                    Q.value = !0, M.value = "";
                    try {
                        const F = await a.deleteTranslatedTextReplacement(w);
                        if (F.code !== 0) {
                            M.value = F.message || u("preferenceActionFailed", "操作失败，请稍后重试。");
                            return
                        }
                        await xe(K.value)
                    } catch (F) {
                        console.error("delete translated text replacement failed", F), M.value = u("preferenceActionFailed", "操作失败，请稍后重试。")
                    } finally {
                        Q.value = !1
                    }
                }
            }
            return Ae([C, B], ([w, F], [x, q]) => {
                te.value && (w !== x || F !== q) && ve()
            }), Pt(async () => {
                const w = await dt.getItem("local:settings");
                C.value = p((w == null ? void 0 : w.toLanguage) || Ze.toLanguage), z.toLanguage = C.value, te.value = !0, await ve()
            }), (w, F) => (d(), b(ee, null, [e("section", Wn, [e("div", Hn, [e("div", Kn, [e("h3", Zn, o(u("translatedReplacementTitle", "译文替换")), 1), e("p", Qn, o(u("translatedReplacementDescription", "翻译完成后，按个人规则替换译文中的词汇或短语。")), 1)]), e("button", {
                type: "button",
                class: "shrink-0 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-700 disabled:opacity-50",
                disabled: Q.value,
                onClick: F[0] || (F[0] = x => Be())
            }, o(u("translatedReplacementCreateButton", "新增译文替换")), 9, Yn)]), e("form", {
                class: "grid gap-2 md:grid-cols-[minmax(132px,0.8fr)_minmax(132px,0.8fr)_minmax(220px,1.4fr)_auto_auto]",
                onSubmit: ke(E, ["prevent"])
            }, [ae(e("select", {
                "onUpdate:modelValue": F[1] || (F[1] = x => C.value = x),
                class: "min-w-0 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none focus:border-violet-400",
                "aria-label": u("translatedReplacementLanguage", "目标语言")
            }, [(d(!0), b(ee, null, oe(k.value, x => (d(), b("option", {
                key: x.code,
                value: x.code
            }, o(x.label), 9, Jn))), 128))], 8, Xn), [
                [Ie, C.value]
            ]), ae(e("select", {
                "onUpdate:modelValue": F[2] || (F[2] = x => B.value = x),
                class: "min-w-0 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none focus:border-violet-400",
                "aria-label": u("preferenceDomain", "领域")
            }, [e("option", {
                value: Nt
            }, o(u("preferenceAllDomains", "全部领域")), 1), (d(!0), b(ee, null, oe(re.value, x => (d(), b("option", {
                key: x.code,
                value: x.code
            }, o(ne(x)), 9, ta))), 128))], 8, ea), [
                [Ie, B.value]
            ]), ae(e("input", {
                "onUpdate:modelValue": F[3] || (F[3] = x => f.value = x),
                type: "search",
                placeholder: u("translatedReplacementSearchPlaceholder", "搜索译文内容"),
                class: "min-w-0 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black placeholder-black/30 outline-none focus:border-violet-400"
            }, null, 8, la), [
                [_e, f.value]
            ]), e("button", {
                type: "submit",
                class: "whitespace-nowrap rounded-lg border border-black/10 px-3 py-2 text-sm font-medium text-black/65 transition-colors hover:bg-neutral-50 disabled:opacity-50",
                disabled: A.value
            }, o(u("preferenceSearch", "搜索")), 9, na), V.value ? (d(), b("button", {
                key: 0,
                type: "button",
                class: "flex h-10 w-10 items-center justify-center rounded-lg text-black/45 transition-colors hover:bg-neutral-50 hover:text-black disabled:opacity-50",
                disabled: A.value,
                "aria-label": u("preferenceClearSearch", "清除"),
                title: u("preferenceClearSearch", "清除"),
                onClick: Ee
            }, F[9] || (F[9] = [e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": "true"
            }, [e("path", {
                d: "M18 6 6 18M6 6l12 12",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
            })], -1)]), 8, aa)) : N("", !0)], 32), R.value ? (d(), b("p", oa, o(R.value), 1)) : N("", !0), D.value.length > 0 ? (d(), b("div", ua, [e("div", sa, [e("table", ia, [e("thead", null, [e("tr", ra, [e("th", ca, o(u("preferenceDomain", "领域")), 1), e("th", da, o(u("translatedReplacementFindText", "译文内容")), 1), e("th", ba, o(u("translatedReplacementReplaceText", "替换为")), 1), e("th", pa, o(u("preferenceStatus", "状态")), 1), e("th", va, o(u("preferenceActions", "操作")), 1)])]), e("tbody", fa, [(d(!0), b(ee, null, oe(D.value, x => (d(), b("tr", {
                key: x.id,
                class: "text-sm text-black transition-colors hover:bg-neutral-50/50"
            }, [e("td", ma, [e("span", {
                class: "block truncate",
                title: ge(x.domain)
            }, o(ge(x.domain)), 9, ga)]), e("td", xa, [e("span", {
                class: "block truncate",
                title: x.findText
            }, o(x.findText), 9, ha)]), e("td", ya, [e("span", {
                class: "block truncate",
                title: x.replaceText
            }, o(x.replaceText), 9, ka)]), e("td", _a, [G(ie, {
                "model-value": x.enabled,
                label: u("preferenceEnabled", "启用"),
                class: U(j.value.has(x.id) ? "pointer-events-none opacity-50" : ""),
                "aria-disabled": j.value.has(x.id) ? "true" : void 0,
                "onUpdate:modelValue": q => De(x.id, q)
            }, null, 8, ["model-value", "label", "class", "aria-disabled", "onUpdate:modelValue"])]), e("td", wa, [e("div", Fa, [e("button", {
                type: "button",
                class: "inline-flex h-8 w-8 items-center justify-center rounded-md text-black/55 transition-colors hover:bg-black/5 hover:text-black",
                "aria-label": u("preferenceEdit", "编辑"),
                title: u("preferenceEdit", "编辑"),
                onClick: q => Be(x)
            }, F[10] || (F[10] = [e("svg", {
                width: "15",
                height: "15",
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": "true"
            }, [e("path", {
                d: "M4 20h4.5L19 9.5 14.5 5 4 15.5V20Z",
                stroke: "currentColor",
                "stroke-width": "1.8",
                "stroke-linejoin": "round"
            }), e("path", {
                d: "m13.5 6 4.5 4.5",
                stroke: "currentColor",
                "stroke-width": "1.8",
                "stroke-linecap": "round"
            })], -1)]), 8, Sa), e("button", {
                type: "button",
                class: "inline-flex h-8 w-8 items-center justify-center rounded-md text-red-500/80 transition-colors hover:bg-red-50 hover:text-red-500",
                "aria-label": u("preferenceDelete", "删除"),
                title: u("preferenceDelete", "删除"),
                onClick: q => Se(x.id)
            }, F[11] || (F[11] = [e("svg", {
                width: "15",
                height: "15",
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": "true"
            }, [e("path", {
                d: "M5 7h14M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7l1-3h4l1 3",
                stroke: "currentColor",
                "stroke-width": "1.8",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            })], -1)]), 8, Ea)])])]))), 128))])])]), e("div", Ba, [(d(!0), b(ee, null, oe(D.value, x => (d(), b("article", {
                key: `mobile-translated-${x.id}`,
                class: "rounded-lg border border-black/10 bg-white p-4"
            }, [e("div", Da, [e("span", {
                class: "mobile-line-clamp-2",
                title: x.findText
            }, o(x.findText), 9, Ca), F[12] || (F[12] = e("span", {
                class: "pt-0.5 text-black/30",
                "aria-hidden": "true"
            }, "→", -1)), e("span", {
                class: "mobile-line-clamp-2",
                title: x.replaceText
            }, o(x.replaceText), 9, $a)]), e("div", Ta, [e("span", Aa, o(ge(x.domain)), 1), e("span", {
                class: U(["rounded-full px-2 py-1 text-xs font-medium", x.enabled ? "bg-emerald-50 text-emerald-700" : "bg-neutral-100 text-black/45"])
            }, o(x.enabled ? u("preferenceStatusEnabled", "已启用") : u("preferenceStatusDisabled", "已停用")), 3)]), e("div", Pa, [G(ie, {
                "model-value": x.enabled,
                label: u("preferenceEnabled", "启用"),
                class: U(j.value.has(x.id) ? "pointer-events-none opacity-50" : ""),
                "onUpdate:modelValue": q => De(x.id, q)
            }, null, 8, ["model-value", "label", "class", "onUpdate:modelValue"]), e("div", La, [e("button", {
                type: "button",
                class: "rounded-md px-3 py-1.5 text-sm text-black/65 active:bg-black/5",
                onClick: q => Be(x)
            }, o(u("preferenceEdit", "编辑")), 9, Ia), e("button", {
                type: "button",
                class: "rounded-md px-3 py-1.5 text-sm text-red-500 active:bg-red-50",
                onClick: q => Se(x.id)
            }, o(u("preferenceDelete", "删除")), 9, Ra)])])]))), 128))])])) : A.value ? N("", !0) : (d(), b("p", Ma, o(V.value ? u("translatedReplacementSearchEmpty", "没有匹配的译文替换。") : u("translatedReplacementEmpty", "暂无译文替换规则。")), 1)), e("div", Ua, [e("span", Va, o(u("preferencePageLabel", "第 {page} 页").replace("{page}", String(W.value))), 1), e("div", Oa, [e("button", {
                type: "button",
                class: "rounded-lg border border-black/10 px-3 py-2 text-sm font-medium text-black/60 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40",
                disabled: !ue.value,
                onClick: he
            }, o(u("preferencePreviousPage", "上一页")), 9, Ga), e("button", {
                type: "button",
                class: "rounded-lg border border-black/10 px-3 py-2 text-sm font-medium text-black/60 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40",
                disabled: !de.value,
                onClick: we
            }, o(u("preferenceNextPage", "下一页")), 9, Na)])]), M.value ? (d(), b("p", ja, o(M.value), 1)) : N("", !0)]), (d(), Ve(wt, {
                to: "body"
            }, [Y.value ? (d(), b("div", {
                key: 0,
                class: "fixed inset-0 z-[2147483647] flex justify-end bg-black/40",
                onClick: ke(ye, ["self"])
            }, [e("div", za, [e("div", qa, [e("div", null, [e("h3", Wa, o(le.value === null ? u("translatedReplacementCreateTitle", "新增译文替换") : u("translatedReplacementEditTitle", "编辑译文替换")), 1), e("p", Ha, o(u("translatedReplacementEditorDescription", "仅替换翻译完成后的译文，不修改原文或翻译缓存。")), 1)]), e("button", {
                type: "button",
                class: "rounded-md p-2 text-black/45 hover:bg-black/5 hover:text-black",
                onClick: ye
            }, F[13] || (F[13] = [e("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": "true"
            }, [e("path", {
                d: "M18 6 6 18M6 6l12 12",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
            })], -1)]))]), e("form", {
                class: "flex min-h-0 flex-1 flex-col",
                onSubmit: ke(Fe, ["prevent"])
            }, [e("div", Ka, [e("label", null, [e("span", Za, o(u("translatedReplacementLanguage", "目标语言")), 1), ae(e("select", {
                "onUpdate:modelValue": F[4] || (F[4] = x => z.toLanguage = x),
                class: "w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none focus:border-violet-400"
            }, [(d(!0), b(ee, null, oe(k.value, x => (d(), b("option", {
                key: x.code,
                value: x.code
            }, o(x.label), 9, Qa))), 128))], 512), [
                [Ie, z.toLanguage]
            ])]), e("label", null, [e("span", Ya, o(u("preferenceDomain", "领域")), 1), ae(e("select", {
                "onUpdate:modelValue": F[5] || (F[5] = x => z.domain = x),
                class: "w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none focus:border-violet-400"
            }, [(d(!0), b(ee, null, oe(re.value, x => (d(), b("option", {
                key: x.code,
                value: x.code
            }, o(ne(x)), 9, Xa))), 128))], 512), [
                [Ie, z.domain]
            ])]), e("label", null, [e("span", Ja, o(u("translatedReplacementFindText", "译文内容")), 1), ae(e("input", {
                "onUpdate:modelValue": F[6] || (F[6] = x => z.findText = x),
                maxlength: "256",
                class: "w-full rounded-lg border border-black/10 px-3 py-2 text-sm text-black outline-none focus:border-violet-400",
                placeholder: u("translatedReplacementFindPlaceholder", "译文中的词汇或短语")
            }, null, 8, eo), [
                [_e, z.findText]
            ])]), e("label", null, [e("span", to, o(u("translatedReplacementReplaceText", "替换为")), 1), ae(e("input", {
                "onUpdate:modelValue": F[7] || (F[7] = x => z.replaceText = x),
                maxlength: "512",
                class: "w-full rounded-lg border border-black/10 px-3 py-2 text-sm text-black outline-none focus:border-violet-400",
                placeholder: u("translatedReplacementReplacePlaceholder", "希望显示的词汇或短语")
            }, null, 8, lo), [
                [_e, z.replaceText]
            ])]), e("div", no, [e("div", null, [e("p", ao, o(u("preferenceEnabled", "启用")), 1), e("p", oo, o(u("translatedReplacementEnabledDescription", "关闭后保留规则，但不会应用到译文。")), 1)]), G(ie, {
                "model-value": z.enabled,
                label: u("preferenceEnabled", "启用"),
                "onUpdate:modelValue": F[8] || (F[8] = x => z.enabled = x)
            }, null, 8, ["model-value", "label"])])]), e("div", uo, [e("button", {
                type: "button",
                class: "rounded-lg border border-black/10 px-4 py-2 text-sm font-medium text-black/65 hover:bg-neutral-50",
                onClick: ye
            }, o(u("cancelButton", "取消")), 1), e("button", {
                type: "submit",
                class: "rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700 disabled:opacity-50",
                disabled: Q.value || !me.value
            }, o(u("save", "保存")), 9, so)])], 32)])])) : N("", !0)]))], 64))
        }
    }),
    co = Ht(ro, [
        ["__scopeId", "data-v-1ded95a2"]
    ]);
async function bo(r, t, a) {
    const p = (await Promise.allSettled(t.map(k => a(r, k)))).find(k => k.status === "rejected" && !In(k.reason));
    if (p) throw p.reason
}
class po {
    constructor(t, a) {
        kt(this, "tail", Promise.resolve());
        kt(this, "generation", 0);
        this.persistedValue = t, this.deps = a
    }
    setPersistedValue(t) {
        this.persistedValue = t
    }
    update(t) {
        const a = ++this.generation;
        this.deps.onOptimisticValue(t);
        const u = this.tail.then(async () => {
            let p;
            try {
                p = await this.deps.patchSettings(t), this.persistedValue = t
            } catch (k) {
                a === this.generation && this.deps.onSaveError(k, this.persistedValue);
                return
            }
            try {
                await this.deps.broadcastSettings(p)
            } catch (k) {
                a === this.generation && this.deps.onBroadcastError(k)
            }
        });
        return this.tail = u.catch(() => {}), u
    }
}
const vo = {
        class: "overflow-hidden rounded-lg border border-black/10 bg-white"
    },
    fo = {
        class: "flex items-center justify-between gap-6 border-b border-black/5 p-5"
    },
    mo = {
        class: "min-w-0"
    },
    go = {
        class: "text-sm font-medium text-black"
    },
    xo = {
        class: "mt-1 text-sm text-black/50"
    },
    ho = {
        class: "shrink-0"
    },
    yo = {
        key: 1,
        class: "block h-[18px] w-[32px] animate-pulse rounded-full bg-black/10",
        "aria-hidden": "true"
    },
    ko = {
        class: "flex gap-8 border-b border-black/5 px-5"
    },
    _o = {
        key: 0,
        class: "px-5 pt-4 text-sm text-red-500"
    },
    wo = {
        key: 1,
        class: "px-5 pt-4 text-sm text-red-500"
    },
    Fo = {
        class: "space-y-5 p-5"
    },
    So = {
        key: 0
    },
    Eo = {
        class: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
    },
    Bo = {
        class: "min-w-0"
    },
    Do = {
        class: "flex flex-wrap items-center gap-2"
    },
    Co = {
        class: "text-sm font-medium text-black"
    },
    $o = {
        class: "rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium text-black/55"
    },
    To = {
        class: "mt-2 flex flex-wrap items-center gap-1.5"
    },
    Ao = {
        key: 0,
        class: "rounded-full bg-neutral-100 px-2 py-1 text-xs text-black/45"
    },
    Po = {
        key: 1,
        class: "text-xs text-black/45"
    },
    Lo = {
        class: "overflow-hidden border-t border-black/5"
    },
    Io = {
        class: "space-y-3 border-b border-black/5 px-5 py-4"
    },
    Ro = {
        class: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
    },
    Mo = {
        class: "min-w-0"
    },
    Uo = {
        class: "text-sm font-medium text-black"
    },
    Vo = {
        class: "mt-1 text-sm text-black/50"
    },
    Oo = ["disabled"],
    Go = ["aria-label"],
    No = ["value"],
    jo = ["aria-label"],
    zo = ["value"],
    qo = ["placeholder"],
    Wo = ["disabled"],
    Ho = ["disabled", "aria-label", "title"],
    Ko = {
        key: 0
    },
    Zo = {
        class: "hidden overflow-x-auto md:block"
    },
    Qo = {
        class: "w-full min-w-[900px] table-fixed"
    },
    Yo = {
        class: "border-b border-black/5 bg-neutral-50 text-left text-xs font-medium uppercase tracking-wider text-black/40"
    },
    Xo = {
        class: "w-[15%] px-4 py-2.5"
    },
    Jo = {
        class: "w-[24%] px-4 py-2.5"
    },
    eu = {
        class: "w-[24%] px-4 py-2.5"
    },
    tu = {
        class: "w-[10%] px-4 py-2.5"
    },
    lu = {
        class: "w-[13%] px-4 py-2.5"
    },
    nu = {
        class: "w-[14%] px-4 py-2.5 text-right"
    },
    au = {
        class: "divide-y divide-black/5"
    },
    ou = {
        class: "min-w-0 px-4 py-2.5 text-black/70"
    },
    uu = ["title"],
    su = {
        class: "min-w-0 px-4 py-2.5"
    },
    iu = ["title"],
    ru = {
        class: "min-w-0 px-4 py-2.5"
    },
    cu = ["title"],
    du = {
        class: "px-4 py-2.5"
    },
    bu = {
        class: "truncate"
    },
    pu = {
        class: "px-4 py-2.5"
    },
    vu = {
        key: 0,
        class: "flex items-center gap-2"
    },
    fu = ["aria-disabled"],
    mu = {
        key: 0,
        class: "flex items-center gap-2"
    },
    gu = ["aria-disabled"],
    xu = {
        class: "truncate"
    },
    hu = {
        class: "px-4 py-2.5 text-right"
    },
    yu = {
        key: 0,
        class: "flex justify-end gap-1.5"
    },
    ku = ["aria-label", "title", "onClick"],
    _u = ["aria-label", "title", "onClick"],
    wu = {
        class: "space-y-3 px-4 py-4 md:hidden"
    },
    Fu = {
        class: "grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-start gap-2 text-sm font-medium text-black"
    },
    Su = ["title"],
    Eu = ["title"],
    Bu = {
        class: "mt-3 flex flex-wrap items-center gap-1.5"
    },
    Du = ["title"],
    Cu = {
        class: "mt-3 flex items-center justify-between gap-3"
    },
    $u = {
        key: 2,
        class: "text-xs text-black/35"
    },
    Tu = {
        key: 3,
        class: "flex justify-end gap-2"
    },
    Au = ["onClick"],
    Pu = ["onClick"],
    Lu = {
        key: 1,
        class: "px-5 py-8 text-center text-sm text-black/35"
    },
    Iu = {
        class: "flex flex-col gap-3 border-t border-black/5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
    },
    Ru = {
        class: "text-sm text-black/45"
    },
    Mu = {
        class: "flex gap-2"
    },
    Uu = ["disabled"],
    Vu = ["disabled"],
    Ou = {
        key: 3,
        class: "space-y-5 border-t border-black/5 p-5"
    },
    Gu = {
        class: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between"
    },
    Nu = {
        class: "min-w-0"
    },
    ju = {
        class: "text-sm font-medium text-black"
    },
    zu = {
        class: "mt-1 text-sm text-black/50"
    },
    qu = {
        class: "flex shrink-0 flex-wrap gap-2"
    },
    Wu = ["disabled"],
    Hu = ["disabled"],
    Ku = ["aria-label"],
    Zu = ["value"],
    Qu = ["placeholder"],
    Yu = ["disabled"],
    Xu = ["disabled", "aria-label", "title"],
    Ju = {
        class: "text-sm text-black/50"
    },
    es = {
        key: 0
    },
    ts = {
        class: "hidden overflow-x-auto md:block"
    },
    ls = {
        class: "w-full min-w-[900px] table-fixed overflow-hidden rounded-lg border border-black/10"
    },
    ns = {
        class: "border-b border-black/5 bg-neutral-50 text-left text-xs font-medium uppercase tracking-wider text-black/40"
    },
    as = {
        class: "w-[15%] px-4 py-2.5"
    },
    os = {
        class: "w-[24%] px-4 py-2.5"
    },
    us = {
        class: "w-[24%] px-4 py-2.5"
    },
    ss = {
        class: "w-[10%] px-4 py-2.5"
    },
    is = {
        class: "w-[13%] whitespace-nowrap px-4 py-2.5"
    },
    rs = {
        class: "w-[14%] whitespace-nowrap px-4 py-2.5 text-right"
    },
    cs = {
        class: "divide-y divide-black/5"
    },
    ds = {
        class: "min-w-0 px-4 py-2.5 text-black/70"
    },
    bs = ["title"],
    ps = {
        class: "min-w-0 px-4 py-2.5"
    },
    vs = ["title"],
    fs = {
        class: "min-w-0 px-4 py-2.5"
    },
    ms = ["title"],
    gs = {
        class: "px-4 py-2.5"
    },
    xs = {
        class: "truncate"
    },
    hs = {
        class: "px-4 py-2.5"
    },
    ys = {
        class: "flex items-center gap-2"
    },
    ks = ["aria-disabled"],
    _s = {
        class: "px-4 py-2.5 text-right"
    },
    ws = {
        key: 0,
        class: "flex justify-end gap-1.5"
    },
    Fs = ["aria-label", "title", "onClick"],
    Ss = ["aria-label", "title", "onClick"],
    Es = {
        key: 1,
        class: "text-xs text-black/35"
    },
    Bs = {
        class: "space-y-3 md:hidden"
    },
    Ds = {
        class: "grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-start gap-2 text-sm font-medium text-black"
    },
    Cs = ["title"],
    $s = ["title"],
    Ts = {
        class: "mt-3 flex flex-wrap items-center gap-1.5"
    },
    As = ["title"],
    Ps = {
        class: "mt-3 flex items-center justify-between gap-3"
    },
    Ls = {
        key: 0,
        class: "flex justify-end gap-2"
    },
    Is = ["onClick"],
    Rs = ["onClick"],
    Ms = {
        key: 1,
        class: "rounded-lg border border-dashed border-black/10 py-8 text-center text-sm text-black/35"
    },
    Us = {
        class: "flex flex-col gap-3 border-t border-black/5 pt-4 sm:flex-row sm:items-center sm:justify-between"
    },
    Vs = {
        class: "text-sm text-black/45"
    },
    Os = {
        class: "flex gap-2"
    },
    Gs = ["disabled"],
    Ns = ["disabled"],
    js = {
        key: 5,
        class: "border-t border-black/5 px-5 py-4 text-sm text-red-500"
    },
    zs = {
        class: "flex h-full w-full max-w-xl flex-col bg-white shadow-2xl"
    },
    qs = {
        class: "border-b border-black/10 px-5 py-4"
    },
    Ws = {
        class: "flex items-start justify-between gap-3"
    },
    Hs = {
        class: "min-w-0"
    },
    Ks = {
        class: "text-base font-semibold text-black"
    },
    Zs = {
        class: "mt-1 text-sm text-black/50"
    },
    Qs = {
        class: "flex min-h-0 flex-1 flex-col px-5 py-5"
    },
    Ys = {
        class: "grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:items-center"
    },
    Xs = ["placeholder"],
    Js = ["disabled"],
    ei = ["disabled"],
    ti = {
        class: "mt-4 min-h-0 flex-1 overflow-y-auto pr-1"
    },
    li = {
        key: 0,
        class: "space-y-2"
    },
    ni = {
        class: "min-w-0"
    },
    ai = {
        class: "truncate text-sm font-medium text-black"
    },
    oi = {
        class: "mt-0.5 text-xs text-black/45"
    },
    ui = {
        key: 1,
        class: "rounded-lg border border-dashed border-black/10 py-8 text-center text-sm text-black/35"
    },
    si = {
        class: "border-t border-black/10 pt-4 text-sm text-black/45"
    },
    ii = {
        class: "flex h-full w-full max-w-xl flex-col bg-white shadow-2xl"
    },
    ri = {
        class: "border-b border-black/10 px-5 py-4"
    },
    ci = {
        class: "flex items-start justify-between gap-3"
    },
    di = {
        class: "min-w-0"
    },
    bi = {
        class: "text-base font-semibold text-black"
    },
    pi = {
        class: "mt-1 text-sm text-black/50"
    },
    vi = {
        class: "flex min-h-0 flex-1 flex-col px-5 py-5"
    },
    fi = {
        class: "grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:items-center"
    },
    mi = ["placeholder"],
    gi = ["disabled"],
    xi = ["disabled"],
    hi = {
        class: "mt-4 min-h-0 flex-1 overflow-y-auto pr-1"
    },
    yi = {
        key: 0,
        class: "space-y-2"
    },
    ki = {
        class: "min-w-0"
    },
    _i = {
        class: "truncate text-sm font-medium text-black"
    },
    wi = {
        class: "mt-0.5 text-xs text-black/45"
    },
    Fi = {
        key: 1,
        class: "rounded-lg border border-dashed border-black/10 py-8 text-center text-sm text-black/35"
    },
    Si = {
        class: "border-t border-black/10 pt-4 text-sm text-black/45"
    },
    Ei = {
        class: "flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
    },
    Bi = {
        class: "border-b border-black/10 px-5 py-4"
    },
    Di = {
        class: "flex items-start justify-between gap-3"
    },
    Ci = {
        class: "text-base font-semibold text-black"
    },
    $i = {
        class: "mt-1 text-sm text-black/50"
    },
    Ti = {
        class: "flex-1 overflow-y-auto px-5 py-5"
    },
    Ai = {
        key: 0,
        class: "space-y-4"
    },
    Pi = {
        class: "block"
    },
    Li = {
        class: "mb-1 block text-sm font-medium text-black"
    },
    Ii = ["value"],
    Ri = {
        class: "block"
    },
    Mi = {
        class: "mb-1 block text-sm font-medium text-black"
    },
    Ui = ["value"],
    Vi = {
        class: "block"
    },
    Oi = {
        class: "mb-1 block text-sm font-medium text-black"
    },
    Gi = ["placeholder"],
    Ni = {
        class: "block"
    },
    ji = {
        class: "mb-1 block text-sm font-medium text-black"
    },
    zi = ["placeholder"],
    qi = {
        class: "rounded-lg border border-black/10 bg-neutral-50 px-3 py-3"
    },
    Wi = {
        key: 1,
        class: "space-y-4"
    },
    Hi = {
        class: "block"
    },
    Ki = {
        class: "mb-1 block text-sm font-medium text-black"
    },
    Zi = ["value"],
    Qi = {
        class: "block"
    },
    Yi = {
        class: "mb-1 block text-sm font-medium text-black"
    },
    Xi = ["placeholder"],
    Ji = {
        class: "block"
    },
    er = {
        class: "mb-1 block text-sm font-medium text-black"
    },
    tr = ["placeholder"],
    lr = {
        class: "rounded-lg border border-black/10 bg-neutral-50 px-3 py-3"
    },
    nr = {
        class: "flex justify-end gap-2 border-t border-black/10 px-5 py-4"
    },
    ar = ["disabled"],
    El = 20,
    ct = "__all__",
    or = 4,
    ur = pt({
        __name: "TranslationPreferencesPanel",
        setup(r) {
            const t = (l, i) => {
                    const n = Et.t(l);
                    if (typeof n != "string") return i;
                    const y = n.trim();
                    return !y || y === l ? i : y
                },
                a = {
                    userAfterId: 0,
                    builtinAfterId: 0
                },
                u = {
                    userAfterId: 0,
                    builtinAfterId: 0
                },
                p = Nl(),
                k = g("glossary"),
                $ = g(!0),
                D = g(!1),
                C = g([]),
                B = g([]),
                f = g([]),
                V = g([]),
                W = g([]),
                K = g([]),
                Z = g(L(Ze.toLanguage)),
                T = g(""),
                I = g(""),
                A = g(""),
                Q = g(!1),
                R = g(new Set),
                M = g(null),
                j = g(null),
                Y = g(null),
                le = g(0),
                te = g("idle"),
                z = g(!1),
                re = g(""),
                ue = g(""),
                de = g(ct),
                me = g(1),
                ne = g(!1),
                ge = g({ ...a
                }),
                Re = g({ ...a
                }),
                _ = g([]),
                pe = g(!1),
                xe = g(""),
                ve = g(""),
                E = g(ct),
                Ee = g(1),
                we = g(!1),
                he = g({ ...u
                }),
                Be = g({ ...u
                }),
                ye = g([]),
                Fe = g(!1),
                De = g(!1),
                Se = g(""),
                w = g(!1),
                F = g(""),
                x = new po(!0, {
                    patchSettings: l => Gl().patchSettings({
                        translationRulesEnabled: l
                    }),
                    broadcastSettings: on,
                    onOptimisticValue: l => {
                        $.value = l
                    },
                    onSaveError: (l, i) => {
                        $.value = i, console.error("save translationRulesEnabled failed", l), A.value = t("preferenceActionFailed", "操作失败，请稍后重试。")
                    },
                    onBroadcastError: l => {
                        console.error("broadcast translationRulesEnabled failed", l), A.value = t("preferenceActionFailed", "操作失败，请稍后重试。")
                    }
                }),
                q = vt({
                    domain: "general",
                    toLanguage: L(Ze.toLanguage),
                    sourceTerm: "",
                    targetTerm: "",
                    enabled: !0
                }),
                J = vt({
                    domain: "general",
                    findText: "",
                    replaceText: "",
                    enabled: !0
                }),
                Ce = S(() => Object.entries(Ze.languageMap).map(([l, i]) => ({
                    code: L(l),
                    label: i
                }))),
                ze = {
                    zh: "zh-CN",
                    en: "en-US",
                    de: "de-DE",
                    es: "es-ES",
                    fr: "fr-FR",
                    pt: "pt-BR",
                    ar: "ar-SA",
                    nl: "nl-NL",
                    ta: "ta-IN",
                    bn: "bn-IN",
                    ur: "ur-PK",
                    sw: "sw-KE",
                    sr: "sr-RS",
                    nb: "nb-NO",
                    no: "nb-NO",
                    cy: "cy-GB",
                    am: "am-ET",
                    bg: "bg-BG",
                    ca: "ca-ES",
                    cs: "cs-CZ",
                    da: "da-DK",
                    el: "el-GR",
                    et: "et-EE",
                    fi: "fi-FI",
                    fil: "fil-PH",
                    gu: "gu-IN",
                    hr: "hr-HR",
                    hu: "hu-HU",
                    id: "id-ID",
                    kn: "kn-IN",
                    lt: "lt-LT",
                    lv: "lv-LV",
                    mr: "mr-IN",
                    ms: "ms-MY",
                    ml: "ml-IN",
                    pl: "pl-PL",
                    ro: "ro-RO",
                    sk: "sk-SK",
                    sl: "sl-SI",
                    sv: "sv-SE",
                    te: "te-IN",
                    th: "th-TH"
                },
                fe = S(() => {
                    var l;
                    return ((l = C.value[0]) == null ? void 0 : l.code) ?? "general"
                }),
                Ne = S(() => C.value),
                qe = S(() => V.value.length > 0),
                P = S(() => _.value.length > 0 && !pe.value),
                m = S(() => ne.value && !pe.value),
                O = S(() => ye.value.length > 0 && !Fe.value),
                be = S(() => we.value && !Fe.value),
                je = S(() => V.value.filter(l => l.enabled).length),
                et = S(() => V.value.filter(l => l.enabled).slice(0, or)),
                Qe = S(() => Math.max(je.value - et.value.length, 0)),
                tt = S(() => t("builtinGlossaryEnabledSummary", "已启用 {enabled} / {total}").replace("{enabled}", String(je.value)).replace("{total}", String(V.value.length))),
                lt = S(() => mt(de.value)),
                nt = S(() => mt(E.value)),
                Ye = S(() => `${Hl(Z.value)} \xB7 ${lt.value}`),
                at = S(() => nt.value),
                ot = S(() => {
                    const l = F.value.trim().toLowerCase();
                    return l ? W.value.filter(i => {
                        const n = Le(i).toLowerCase();
                        return i.code.toLowerCase().includes(l) || n.includes(l)
                    }) : W.value
                }),
                Me = S(() => {
                    const l = Se.value.trim().toLowerCase();
                    return l ? V.value.filter(i => {
                        const n = Le(i).toLowerCase();
                        return i.code.toLowerCase().includes(l) || n.includes(l)
                    }) : V.value
                }),
                v = S(() => {
                    const l = L(Z.value),
                        i = B.value.filter(y => L(y.toLanguage) === l).map(y => ({
                            source: "user",
                            id: y.id,
                            domain: y.domain,
                            toLanguage: L(y.toLanguage),
                            sourceTerm: y.sourceTerm,
                            targetTerm: y.targetTerm,
                            enabled: y.enabled
                        })),
                        n = K.value.map(y => ({
                            source: "builtin",
                            id: y.id,
                            domain: y.domain,
                            toLanguage: L(y.toLanguage),
                            sourceTerm: y.sourceTerm,
                            targetTerm: y.targetTerm,
                            blocked: y.blocked,
                            domainEnabled: y.domainEnabled
                        }));
                    return [...i, ...n]
                }),
                c = S(() => M.value === "glossary" ? j.value === null ? t("glossaryCreateButton", "新增个人术语") : t("glossaryEditTitle", "编辑个人术语") : Y.value === null ? t("replacementCreateButton", "新增个人错词替换") : t("replacementEditTitle", "编辑个人错词替换")),
                s = S(() => M.value === "glossary" ? t("glossaryEditorDescription", "仅个人术语支持新增、编辑、启用和删除。") : t("replacementEditorDescription", "仅个人错词替换会在 AI 翻译前生效。")),
                h = S(() => M.value === "glossary" ? j.value !== null : Y.value !== null);
            function L(l) {
                return l.replace(/_/g, "-")
            }
            function $e(l) {
                const i = C.value.find(n => n.code === l);
                return i ? Le(i) : l
            }
            function mt(l) {
                return l === ct ? t("preferenceAllDomains", "全部领域") : $e(l)
            }
            function Qt(l) {
                return l === ct ? void 0 : l
            }
            function Hl(l) {
                const i = L(l),
                    n = Kl(i);
                return (n == null ? void 0 : n.label) ?? i
            }
            function Kl(l) {
                const n = L(l).toLowerCase(),
                    y = Ce.value.find(ce => ce.code.toLowerCase() === n);
                if (y) return y;
                const H = n.split("-")[0],
                    X = ze[H];
                if (X) {
                    const ce = Ce.value.find(Xe => Xe.code.toLowerCase() === X.toLowerCase());
                    if (ce) return ce
                }
                return Ce.value.find(ce => ce.code.toLowerCase().startsWith(`${H}-`))
            }
            function Yt(l) {
                return l.source === "user" ? `user-${l.id}` : `builtin-${l.id}`
            }
            function gt(l) {
                return `glossary:user:${l}`
            }
            function xt(l) {
                return `glossary:builtin:${l}`
            }
            function ut(l) {
                return l.source === "builtin" ? `replacement:builtin:${l.id}` : `replacement:user:${l.id}`
            }
            function Xt(l) {
                return `${l.source}-${l.id}`
            }
            function Jt(l) {
                return l.source !== "builtin"
            }
            function Zl(l) {
                return l.domainEnabled === !1 ? t("builtinGlossaryDomainDisabledStatus", "领域未启用") : l.blocked ? t("builtinGlossaryBlockedStatus", "已不使用") : t("preferenceStatusEnabled", "已启用")
            }
            function Ql(l) {
                return l.domainEnabled === !1 ? "bg-neutral-100 text-black/45" : l.blocked ? "bg-red-50 text-red-500" : "bg-emerald-50 text-emerald-600"
            }
            function Ue(l) {
                return R.value.has(l)
            }
            function st(l) {
                return Ue(l) ? "pointer-events-none opacity-60" : ""
            }
            function We(l, i) {
                const n = new Set(R.value);
                i ? n.add(l) : n.delete(l), R.value = n
            }
            function ht(l) {
                return l.source === "user"
            }
            function Lt(l) {
                return l.domainEnabled ? l.blocked ? t("builtinGlossaryBlockedStatus", "已不使用") : t("preferenceStatusEnabled", "已启用") : t("builtinGlossaryDomainDisabledStatus", "领域未启用")
            }
            function el(l) {
                return l.domainEnabled ? l.blocked ? "bg-red-50 text-red-500" : "bg-emerald-50 text-emerald-600" : "bg-neutral-100 text-black/45"
            }
            function tl(l) {
                return l ? t("preferenceStatusEnabled", "已启用") : t("preferenceStatusDisabled", "已停用")
            }
            function ll(l) {
                return l ? "bg-emerald-50 text-emerald-600" : "bg-neutral-100 text-black/45"
            }
            function nl(l) {
                q.domain = (l == null ? void 0 : l.domain) ?? fe.value, q.toLanguage = L((l == null ? void 0 : l.toLanguage) ?? Z.value), q.sourceTerm = (l == null ? void 0 : l.sourceTerm) ?? "", q.targetTerm = (l == null ? void 0 : l.targetTerm) ?? "", q.enabled = (l == null ? void 0 : l.enabled) ?? !0
            }
            function al(l) {
                J.domain = (l == null ? void 0 : l.domain) ?? fe.value, J.findText = (l == null ? void 0 : l.findText) ?? "", J.replaceText = (l == null ? void 0 : l.replaceText) ?? "", J.enabled = (l == null ? void 0 : l.enabled) ?? !0
            }
            function ol(l) {
                return {
                    userAfterId: l.userAfterId,
                    builtinAfterId: l.builtinAfterId
                }
            }
            function ul(l) {
                return {
                    userAfterId: l.userAfterId,
                    builtinAfterId: l.builtinAfterId
                }
            }
            function Bt(l) {
                return typeof l == "number" && Number.isFinite(l) && l > 0 ? l : 0
            }
            function Yl(l) {
                return {
                    id: l.id,
                    username: "",
                    domain: l.domain,
                    toLanguage: L(l.toLanguage),
                    sourceTerm: l.sourceTerm,
                    targetTerm: l.targetTerm,
                    enabled: l.enabled
                }
            }
            function Xl(l) {
                return {
                    id: l.id,
                    domain: l.domain,
                    toLanguage: L(l.toLanguage),
                    sourceTerm: l.sourceTerm,
                    targetTerm: l.targetTerm,
                    enabled: l.enabled,
                    blocked: l.blocked === !0,
                    domainEnabled: l.domainEnabled !== !1
                }
            }
            function He(l) {
                A.value = l || t("preferenceActionFailed", "操作失败，请稍后重试。")
            }
            function It(l, i) {
                B.value = B.value.map(n => n.id === l ? { ...n,
                    enabled: i
                } : n)
            }
            function Jl(l) {
                B.value = B.value.map(i => i.id === l.id ? { ...l,
                    toLanguage: L(l.toLanguage)
                } : i)
            }
            function Rt(l, i, n = "user") {
                f.value = f.value.map(y => y.id === l && (y.source ?? "user") === n ? { ...y,
                    enabled: i
                } : y)
            }
            function en(l) {
                f.value = f.value.map(i => i.id === l.id && (i.source ?? "user") === (l.source ?? "user") ? { ...i,
                    ...l
                } : i)
            }
            function Mt(l, i) {
                K.value = K.value.map(n => n.id === l ? { ...n,
                    blocked: i,
                    enabled: !i
                } : n)
            }
            function tn(l, i) {
                const n = new Set(l);
                V.value = V.value.map(y => n.has(y.code) ? { ...y,
                    enabled: i
                } : y)
            }
            function sl(l, i) {
                const n = new Set(l);
                K.value = K.value.map(y => n.has(y.domain) ? { ...y,
                    domainEnabled: i
                } : y)
            }
            function il(l, i) {
                tn(l, i), sl(l, i)
            }
            function ln(l) {
                B.value = l.filter(i => i.source === "user").map(Yl), K.value = l.filter(i => i.source === "builtin").map(Xl)
            }
            function nn() {
                De.value = !0
            }
            function rl() {
                De.value = !1, Se.value = ""
            }
            function cl(l) {
                M.value = "glossary", j.value = (l == null ? void 0 : l.id) ?? null, Y.value = null, nl(l)
            }
            function dl(l) {
                const i = B.value.find(n => n.id === l);
                i && cl(i)
            }
            function Ut(l) {
                l && "source" in l && l.source === "builtin" || (M.value = "replacement", Y.value = (l == null ? void 0 : l.id) ?? null, j.value = null, al(l))
            }
            function yt() {
                M.value = null, j.value = null, Y.value = null
            }
            async function an(l) {
                A.value = "", await x.update(l)
            }
            async function on(l) {
                const i = await Oe.tabs.query({});
                await bo(l, i.flatMap(n => typeof n.id == "number" ? [n.id] : []), (n, y) => zt.notifySettingsSaved({
                    settings: n,
                    dirtyFields: ["translationRulesEnabled"],
                    source: "options"
                }, y))
            }
            async function un(l) {
                const i = ++le.value,
                    n = L(l);
                te.value = "idle", I.value = "", V.value = [], K.value = [];
                try {
                    const y = await p.listBuiltinGlossaryDomains(n);
                    if (i !== le.value) return;
                    V.value = (y == null ? void 0 : y.data) ?? [], te.value = "success", I.value = ""
                } catch (y) {
                    if (i !== le.value) return;
                    console.error("load builtin glossary failed", y), V.value = [], K.value = [], te.value = "error", I.value = t("preferenceLoadFailed", "加载失败，请确认已登录后重试。")
                }
            }
            async function Dt(l = ge.value) {
                const i = ol(l);
                pe.value = !0, T.value = "", B.value = [], K.value = [];
                try {
                    const n = await p.listGlossaryPage({
                        toLanguage: L(Z.value),
                        domain: Qt(de.value),
                        keyword: ue.value,
                        userAfterId: i.userAfterId,
                        builtinAfterId: i.builtinAfterId,
                        limit: El
                    });
                    if (n.code !== 0 || !n.data) {
                        T.value = n.message || t("preferenceLoadFailed", "加载失败，请确认已登录后重试。");
                        return
                    }
                    const y = n.data;
                    ln(y.items ?? []), ge.value = i, ne.value = y.hasMore, Re.value = {
                        userAfterId: Bt(y.nextUserAfterId),
                        builtinAfterId: Bt(y.nextBuiltinAfterId)
                    }
                } catch (n) {
                    console.error("load glossary page failed", n), T.value = t("preferenceLoadFailed", "加载失败，请确认已登录后重试。")
                } finally {
                    pe.value = !1
                }
            }
            async function bl() {
                try {
                    const l = await p.listBuiltinTextReplacementDomains();
                    if (l.code !== 0 || !l.data) {
                        W.value = [];
                        return
                    }
                    W.value = l.data
                } catch (l) {
                    console.error("load builtin text replacement domains failed", l), W.value = []
                }
            }
            async function Ct(l = he.value) {
                const i = ul(l);
                Fe.value = !0, T.value = "", f.value = [];
                try {
                    const n = await p.listReplacementCatalogPage({
                        domain: Qt(E.value),
                        keyword: ve.value,
                        userAfterId: i.userAfterId,
                        builtinAfterId: i.builtinAfterId,
                        limit: El
                    });
                    if (n.code !== 0 || !n.data) {
                        T.value = n.message || t("preferenceLoadFailed", "加载失败，请确认已登录后重试。");
                        return
                    }
                    const y = n.data;
                    f.value = (y.items ?? []).map(H => ({ ...H,
                        source: H.source ?? "user",
                        enabled: H.enabled ?? !0,
                        blocked: H.blocked ?? !1,
                        domainEnabled: H.domainEnabled ?? !0
                    })), he.value = i, we.value = y.hasMore, Be.value = {
                        userAfterId: Bt(y.nextUserAfterId),
                        builtinAfterId: Bt(y.nextBuiltinAfterId)
                    }
                } catch (n) {
                    console.error("load replacement page failed", n), T.value = t("preferenceLoadFailed", "加载失败，请确认已登录后重试。")
                } finally {
                    Fe.value = !1
                }
            }
            async function $t() {
                _.value = [], me.value = 1, await Dt(a)
            }
            async function Tt() {
                ye.value = [], Ee.value = 1, await Ct(u)
            }
            async function Vt() {
                await un(Z.value), await $t()
            }
            async function sn() {
                T.value = "", I.value = "", te.value = "idle";
                try {
                    const l = await dt.getItem("local:settings");
                    $.value = (l == null ? void 0 : l.translationRulesEnabled) !== !1, x.setPersistedValue($.value), D.value = !0, Z.value = L((l == null ? void 0 : l.toLanguage) || Ze.toLanguage);
                    const i = await p.listDomains();
                    C.value = (i == null ? void 0 : i.data) ?? [], nl(), al(), await Promise.all([Vt(), bl(), Tt()])
                } catch (l) {
                    D.value = !0, console.error("load translation preferences failed", l), T.value = t("preferenceLoadFailed", "加载失败，请确认已登录后重试。")
                } finally {
                    z.value = !0
                }
            }
            async function rn() {
                await Dt(ge.value)
            }
            async function At() {
                await Ct(he.value)
            }
            async function cn() {
                ue.value = re.value.trim(), await $t()
            }
            async function dn() {
                re.value = "", ue.value = "", await $t()
            }
            async function bn() {
                m.value && (_.value.push(ol(ge.value)), me.value += 1, await Dt(Re.value))
            }
            async function pn() {
                if (!P.value) return;
                const l = _.value.pop() ?? a;
                me.value = Math.max(1, me.value - 1), await Dt(l)
            }
            async function vn() {
                ve.value = xe.value.trim(), await Tt()
            }
            async function fn() {
                xe.value = "", ve.value = "", await Tt()
            }
            async function mn() {
                be.value && (ye.value.push(ul(he.value)), Ee.value += 1, await Ct(Be.value))
            }
            async function gn() {
                if (!O.value) return;
                const l = ye.value.pop() ?? u;
                Ee.value = Math.max(1, Ee.value - 1), await Ct(l)
            }
            async function Ke(l) {
                if (!Q.value) {
                    Q.value = !0, A.value = "";
                    try {
                        await l()
                    } catch (i) {
                        console.error("translation preference action failed", i), A.value = t("preferenceActionFailed", "操作失败，请稍后重试。")
                    } finally {
                        Q.value = !1
                    }
                }
            }
            async function Ot() {
                if (M.value === "glossary") {
                    await xn();
                    return
                }
                await hn()
            }
            async function xn() {
                !q.sourceTerm.trim() || !q.targetTerm.trim() || !q.toLanguage.trim() || await Ke(async () => {
                    const l = {
                            domain: q.domain,
                            toLanguage: L(q.toLanguage.trim()),
                            sourceTerm: q.sourceTerm.trim(),
                            targetTerm: q.targetTerm.trim(),
                            enabled: q.enabled
                        },
                        i = j.value === null ? await p.createGlossary(l): await p.updateGlossary(j.value, l);
                    if (i.code !== 0) {
                        A.value = i.message || t("preferenceActionFailed", "操作失败，请稍后重试。");
                        return
                    }
                    Z.value = l.toLanguage, await Vt(), yt()
                })
            }
            async function hn() {
                !J.findText.trim() || !J.replaceText.trim() || await Ke(async () => {
                    const l = {
                            domain: J.domain,
                            findText: J.findText.trim(),
                            replaceText: J.replaceText.trim(),
                            enabled: J.enabled
                        },
                        i = Y.value === null ? await p.createReplacement(l): await p.updateReplacement(Y.value, l);
                    if (i.code !== 0) {
                        A.value = i.message || t("preferenceActionFailed", "操作失败，请稍后重试。");
                        return
                    }
                    await At(), yt()
                })
            }
            async function pl(l, i) {
                const n = B.value.find(X => X.id === l);
                if (!n) return;
                const y = gt(l);
                if (Ue(y) || n.enabled === i) return;
                const H = n.enabled;
                We(y, !0), A.value = "", It(l, i);
                try {
                    const X = await p.updateGlossary(n.id, {
                        domain: n.domain,
                        toLanguage: L(n.toLanguage),
                        sourceTerm: n.sourceTerm,
                        targetTerm: n.targetTerm,
                        enabled: i
                    });
                    if (X.code !== 0) {
                        It(l, H), He(X.message);
                        return
                    }
                    Jl(X.data ?? { ...n,
                        enabled: i
                    })
                } catch (X) {
                    console.error("toggle glossary failed", X), It(l, H), He()
                } finally {
                    We(y, !1)
                }
            }
            async function vl(l) {
                await Ke(async () => {
                    const i = await p.deleteGlossary(l);
                    if (i.code !== 0) {
                        A.value = i.message || t("preferenceActionFailed", "操作失败，请稍后重试。");
                        return
                    }
                    await rn()
                })
            }
            async function fl(l, i) {
                var H;
                if (!l) return;
                if (l.source === "builtin") {
                    await yn(l, i);
                    return
                }
                const n = ut(l);
                if (Ue(n) || l.enabled === i) return;
                const y = l.enabled;
                We(n, !0), A.value = "", Rt(l.id, i, "user");
                try {
                    const X = await p.updateReplacement(l.id, {
                        domain: l.domain,
                        findText: l.findText,
                        replaceText: l.replaceText,
                        enabled: i
                    });
                    if (X.code !== 0) {
                        Rt(l.id, y, "user"), He(X.message);
                        return
                    }
                    en({ ...l,
                        ...X.data ?? {},
                        source : "user",
                        enabled : ((H = X.data) == null ? void 0 : H.enabled) ?? i
                    })
                } catch (X) {
                    console.error("toggle replacement failed", X), Rt(l.id, y, "user"), He()
                } finally {
                    We(n, !1)
                }
            }
            async function yn(l, i) {
                if (l.domainEnabled === !1) return;
                const n = ut(l);
                if (Ue(n)) return;
                const y = !!l.blocked,
                    H = !i;
                if (y !== H) {
                    We(n, !0), A.value = "", f.value = f.value.map(X => X.source === "builtin" && X.id === l.id ? { ...X,
                        blocked: H,
                        enabled: !H && X.domainEnabled !== !1
                    } : X);
                    try {
                        const X = {
                                domain: l.domain,
                                findText: l.findText
                            },
                            ce = H ? await p.blockBuiltinTextReplacementRule(X): await p.restoreBuiltinTextReplacementRule(X);
                        ce.code !== 0 && (f.value = f.value.map(Xe => Xe.source === "builtin" && Xe.id === l.id ? { ...Xe,
                            blocked: y,
                            enabled: !y && Xe.domainEnabled !== !1
                        } : Xe), He(ce.message))
                    } catch (X) {
                        console.error("toggle builtin text replacement rule failed", X), f.value = f.value.map(ce => ce.source === "builtin" && ce.id === l.id ? { ...ce,
                            blocked: y,
                            enabled: !y && ce.domainEnabled !== !1
                        } : ce), He()
                    } finally {
                        We(n, !1)
                    }
                }
            }
            async function ml(l) {
                await Ke(async () => {
                    const i = await p.deleteReplacement(l);
                    if (i.code !== 0) {
                        A.value = i.message || t("preferenceActionFailed", "操作失败，请稍后重试。");
                        return
                    }
                    await At()
                })
            }
            async function kn(l, i) {
                await Ke(async () => {
                    const n = W.value;
                    W.value = n.map(H => H.code === l.code ? { ...H,
                        enabled: i
                    } : H);
                    const y = await p.updateBuiltinTextReplacementDomain(l.code, {
                        enabled: i
                    });
                    if (y.code !== 0) {
                        W.value = n, A.value = y.message || t("preferenceActionFailed", "操作失败，请稍后重试。");
                        return
                    }
                    y.data && (W.value = W.value.map(H => H.code === l.code ? { ...H,
                        ...y.data
                    } : H)), await At()
                })
            }
            async function gl(l) {
                const i = W.value.map(n => n.code);
                i.length !== 0 && await Ke(async () => {
                    const n = W.value;
                    W.value = n.map(H => ({ ...H,
                        enabled: l
                    }));
                    const y = await p.updateBuiltinTextReplacementDomains({
                        domains: i,
                        enabled: l
                    });
                    if (y.code !== 0) {
                        W.value = n, A.value = y.message || t("preferenceActionFailed", "操作失败，请稍后重试。");
                        return
                    }
                    await bl(), await At()
                })
            }
            async function _n(l, i) {
                await Ke(async () => {
                    const n = V.value,
                        y = K.value;
                    il([l.code], i);
                    const H = await p.updateBuiltinGlossaryDomain(l.code, {
                        toLanguage: L(Z.value),
                        enabled: i
                    });
                    if (H.code !== 0) {
                        V.value = n, K.value = y, A.value = H.message || t("preferenceActionFailed", "操作失败，请稍后重试。");
                        return
                    }
                    H.data && (V.value = V.value.map(X => X.code === l.code ? H.data : X), sl([l.code], H.data.enabled))
                })
            }
            async function xl(l) {
                const i = V.value.filter(n => n.enabled !== l);
                i.length !== 0 && await Ke(async () => {
                    const n = i.map(ce => ce.code),
                        y = V.value,
                        H = K.value,
                        X = () => {
                            V.value = y, K.value = H
                        };
                    il(n, l);
                    try {
                        const ce = await p.updateBuiltinGlossaryDomains({
                            toLanguage: L(Z.value),
                            enabled: l,
                            domains: n
                        });
                        ce.code !== 0 && (X(), A.value = ce.message || t("preferenceActionFailed", "操作失败，请稍后重试。"))
                    } catch (ce) {
                        throw X(), ce
                    }
                })
            }
            async function hl(l) {
                await kl(l, !0)
            }
            async function yl(l) {
                await kl(l, !1)
            }
            async function kl(l, i) {
                const n = xt(l.id);
                if (Ue(n) || l.blocked === i) return;
                const y = l.blocked;
                We(n, !0), A.value = "", Mt(l.id, i);
                try {
                    const H = {
                            toLanguage: L(Z.value),
                            domain: l.domain,
                            sourceTerm: l.sourceTerm
                        },
                        X = i ? await p.blockBuiltinGlossaryTerm(H): await p.restoreBuiltinGlossaryTerm(H);
                    if (X.code !== 0) {
                        Mt(l.id, y), He(X.message);
                        return
                    }
                } catch (H) {
                    console.error("toggle builtin glossary row failed", H), Mt(l.id, y), He()
                } finally {
                    We(n, !1)
                }
            }
            return Ae(Z, (l, i) => {
                !z.value || !l || l === i || Vt()
            }), Ae(de, (l, i) => {
                l !== i && $t()
            }), Ae(E, (l, i) => {
                l !== i && Tt()
            }), Pt(() => {
                sn()
            }), (l, i) => (d(), b("div", null, [e("section", vo, [e("div", fo, [e("div", mo, [e("h3", go, o(t("translationRulesEnabledLabel", "在 AI 翻译中应用术语库与替换规则")), 1), e("p", xo, o(t("translationRulesEnabledDescription", "开启后，AI 翻译会使用下方配置；关闭后，已有配置仍会保留。")), 1)]), e("div", ho, [D.value ? (d(), Ve(ie, {
                key: 0,
                "model-value": $.value,
                label: t("translationRulesEnabledLabel", "在 AI 翻译中应用术语库与替换规则"),
                "onUpdate:modelValue": an
            }, null, 8, ["model-value", "label"])) : (d(), b("span", yo))])]), e("div", ko, [e("button", {
                type: "button",
                class: U(["border-b-2 px-1 py-4 text-sm font-medium transition-colors", k.value === "glossary" ? "border-violet-600 text-violet-600" : "border-transparent text-black/55 hover:text-black"]),
                onClick: i[0] || (i[0] = n => k.value = "glossary")
            }, o(t("glossaryTitle", "术语库")), 3), e("button", {
                type: "button",
                class: U(["border-b-2 px-1 py-4 text-sm font-medium transition-colors", k.value === "replacement" ? "border-violet-600 text-violet-600" : "border-transparent text-black/55 hover:text-black"]),
                onClick: i[1] || (i[1] = n => k.value = "replacement")
            }, o(t("replacementTitle", "原文错词替换")), 3), e("button", {
                type: "button",
                class: U(["border-b-2 px-1 py-4 text-sm font-medium transition-colors", k.value === "translatedReplacement" ? "border-violet-600 text-violet-600" : "border-transparent text-black/55 hover:text-black"]),
                onClick: i[2] || (i[2] = n => k.value = "translatedReplacement")
            }, o(t("translatedReplacementTitle", "译文替换")), 3)]), k.value !== "translatedReplacement" && T.value ? (d(), b("p", _o, o(T.value), 1)) : N("", !0), k.value !== "translatedReplacement" && I.value ? (d(), b("p", wo, o(I.value), 1)) : N("", !0), k.value === "glossary" ? (d(), b(ee, {
                key: 2
            }, [e("section", Fo, [qe.value ? (d(), b("section", So, [e("div", Eo, [e("div", Bo, [e("div", Do, [e("h4", Co, o(t("builtinGlossaryDomainsTitle", "内置术语领域")), 1), e("span", $o, o(tt.value), 1)]), e("div", To, [(d(!0), b(ee, null, oe(et.value, n => (d(), b("span", {
                key: `summary-${n.toLanguage}-${n.code}`,
                class: "rounded-full bg-neutral-100 px-2 py-1 text-xs text-black/60"
            }, o(se(Le)(n)), 1))), 128)), Qe.value > 0 ? (d(), b("span", Ao, " +" + o(Qe.value), 1)) : N("", !0)])]), e("button", {
                type: "button",
                class: "shrink-0 rounded-lg border border-black/10 px-3 py-2 text-sm font-medium text-black/65 transition-colors hover:bg-neutral-50 hover:text-black",
                onClick: nn
            }, o(t("builtinGlossaryManageDomains", "管理领域")), 1)])])) : N("", !0), te.value === "success" && !qe.value ? (d(), b("p", Po, o(t("builtinGlossaryEmptyHint", "当前目标语言暂无内置术语，你仍然可以添加个人术语。")), 1)) : N("", !0)]), e("section", Lo, [e("div", Io, [e("div", Ro, [e("div", Mo, [e("h3", Uo, o(t("glossaryTableTitle", "当前语言术语")), 1), e("p", Vo, o(Ye.value), 1)]), e("button", {
                type: "button",
                class: "shrink-0 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-700 disabled:opacity-50",
                disabled: Q.value,
                onClick: i[3] || (i[3] = n => cl())
            }, o(t("glossaryCreateButton", "新增个人术语")), 9, Oo)]), e("form", {
                class: "grid gap-2 md:grid-cols-[minmax(132px,0.8fr)_minmax(132px,0.85fr)_minmax(220px,1.4fr)_auto_auto]",
                onSubmit: ke(cn, ["prevent"])
            }, [ae(e("select", {
                "onUpdate:modelValue": i[4] || (i[4] = n => Z.value = n),
                class: "min-w-0 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none focus:border-violet-400",
                "aria-label": t("preferenceLanguage", "语言")
            }, [(d(!0), b(ee, null, oe(Ce.value, n => (d(), b("option", {
                key: n.code,
                value: n.code
            }, o(n.label), 9, No))), 128))], 8, Go), [
                [Ie, Z.value]
            ]), ae(e("select", {
                "onUpdate:modelValue": i[5] || (i[5] = n => de.value = n),
                class: "min-w-0 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none focus:border-violet-400",
                "aria-label": t("preferenceDomain", "领域")
            }, [e("option", {
                value: ct
            }, o(t("preferenceAllDomains", "全部领域")), 1), (d(!0), b(ee, null, oe(Ne.value, n => (d(), b("option", {
                key: `glossary-filter-${n.code}`,
                value: n.code
            }, o(se(Le)(n)), 9, zo))), 128))], 8, jo), [
                [Ie, de.value]
            ]), ae(e("input", {
                "onUpdate:modelValue": i[6] || (i[6] = n => re.value = n),
                type: "search",
                placeholder: t("glossarySearchPlaceholder", "搜索原文术语"),
                class: "min-w-0 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black placeholder-black/30 outline-none focus:border-violet-400"
            }, null, 8, qo), [
                [_e, re.value]
            ]), e("button", {
                type: "submit",
                class: "whitespace-nowrap rounded-lg border border-black/10 px-3 py-2 text-sm font-medium text-black/65 transition-colors hover:bg-neutral-50 disabled:opacity-50",
                disabled: pe.value
            }, o(t("preferenceSearch", "搜索")), 9, Wo), ue.value ? (d(), b("button", {
                key: 0,
                type: "button",
                class: "flex h-10 w-10 items-center justify-center rounded-lg text-black/45 transition-colors hover:bg-neutral-50 hover:text-black disabled:opacity-50",
                disabled: pe.value,
                "aria-label": t("preferenceClearSearch", "清除"),
                title: t("preferenceClearSearch", "清除"),
                onClick: dn
            }, i[28] || (i[28] = [e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": "true"
            }, [e("path", {
                d: "M18 6 6 18M6 6l12 12",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
            })], -1)]), 8, Ho)) : N("", !0)], 32)]), v.value.length > 0 ? (d(), b("div", Ko, [e("div", Zo, [e("table", Qo, [e("thead", null, [e("tr", Yo, [e("th", Xo, o(t("preferenceDomain", "领域")), 1), e("th", Jo, o(t("glossarySourceTerm", "原文术语")), 1), e("th", eu, o(t("glossaryTargetTerm", "指定译法")), 1), e("th", tu, o(t("preferenceSource", "来源")), 1), e("th", lu, o(t("preferenceStatus", "状态")), 1), e("th", nu, o(t("preferenceActions", "操作")), 1)])]), e("tbody", au, [(d(!0), b(ee, null, oe(v.value, n => (d(), b("tr", {
                key: Yt(n),
                class: "text-sm text-black transition-colors hover:bg-neutral-50/50"
            }, [e("td", ou, [e("span", {
                class: "block truncate",
                title: $e(n.domain)
            }, o($e(n.domain)), 9, uu)]), e("td", su, [e("span", {
                class: "block truncate",
                title: n.sourceTerm
            }, o(n.sourceTerm), 9, iu)]), e("td", ru, [e("span", {
                class: "block truncate",
                title: n.targetTerm
            }, o(n.targetTerm), 9, cu)]), e("td", du, [e("span", {
                class: U(["inline-flex max-w-full rounded-full px-2 py-1 text-xs font-medium", n.source === "user" ? "bg-violet-50 text-violet-700" : "bg-neutral-100 text-black/60"])
            }, [e("span", bu, o(n.source === "user" ? t("preferenceSourceUser", "个人") : t("preferenceSourceBuiltin", "内置")), 1)], 2)]), e("td", pu, [ht(n) ? (d(), b("div", vu, [e("div", {
                class: U(st(gt(n.id))),
                "aria-disabled": Ue(gt(n.id)) ? "true" : void 0
            }, [G(ie, {
                "model-value": n.enabled,
                label: t("preferenceEnabled", "启用"),
                "onUpdate:modelValue": y => pl(n.id, y)
            }, null, 8, ["model-value", "label", "onUpdate:modelValue"])], 10, fu)])) : (d(), b(ee, {
                key: 1
            }, [n.domainEnabled ? (d(), b("div", mu, [e("div", {
                class: U(st(xt(n.id))),
                "aria-disabled": Ue(xt(n.id)) ? "true" : void 0
            }, [G(ie, {
                "model-value": !n.blocked,
                label: t("preferenceEnabled", "启用"),
                "onUpdate:modelValue": y => y ? yl(n) : hl(n)
            }, null, 8, ["model-value", "label", "onUpdate:modelValue"])], 10, gu)])) : (d(), b("span", {
                key: 1,
                class: U(["inline-flex max-w-full rounded-full px-2 py-1 text-xs font-medium", el(n)])
            }, [e("span", xu, o(Lt(n)), 1)], 2))], 64))]), e("td", hu, [ht(n) ? (d(), b("div", yu, [e("button", {
                type: "button",
                class: "inline-flex h-8 w-8 items-center justify-center rounded-md text-black/55 transition-colors hover:bg-black/5 hover:text-black",
                "aria-label": t("preferenceEdit", "编辑"),
                title: t("preferenceEdit", "编辑"),
                onClick: y => dl(n.id)
            }, i[29] || (i[29] = [e("svg", {
                width: "15",
                height: "15",
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": "true"
            }, [e("path", {
                d: "M4 20h4.5L19 9.5 14.5 5 4 15.5V20Z",
                stroke: "currentColor",
                "stroke-width": "1.8",
                "stroke-linejoin": "round"
            }), e("path", {
                d: "m13.5 6 4.5 4.5",
                stroke: "currentColor",
                "stroke-width": "1.8",
                "stroke-linecap": "round"
            })], -1)]), 8, ku), e("button", {
                type: "button",
                class: "inline-flex h-8 w-8 items-center justify-center rounded-md text-red-500/80 transition-colors hover:bg-red-50 hover:text-red-500",
                "aria-label": t("preferenceDelete", "删除"),
                title: t("preferenceDelete", "删除"),
                onClick: y => vl(n.id)
            }, i[30] || (i[30] = [e("svg", {
                width: "15",
                height: "15",
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": "true"
            }, [e("path", {
                d: "M5 7h14M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7l1-3h4l1 3",
                stroke: "currentColor",
                "stroke-width": "1.8",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            })], -1)]), 8, _u)])) : N("", !0)])]))), 128))])])]), e("div", wu, [(d(!0), b(ee, null, oe(v.value, n => (d(), b("article", {
                key: `mobile-${Yt(n)}`,
                class: "rounded-lg border border-black/10 bg-white p-4"
            }, [e("div", Fu, [e("span", {
                class: "mobile-line-clamp-2",
                title: n.sourceTerm
            }, o(n.sourceTerm), 9, Su), i[31] || (i[31] = e("span", {
                class: "pt-0.5 text-black/30",
                "aria-hidden": "true"
            }, "→", -1)), e("span", {
                class: "mobile-line-clamp-2",
                title: n.targetTerm
            }, o(n.targetTerm), 9, Eu)]), e("div", Bu, [e("span", {
                class: "max-w-full truncate rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium text-black/60",
                title: $e(n.domain)
            }, o($e(n.domain)), 9, Du), e("span", {
                class: U(["rounded-full px-2 py-1 text-xs font-medium", n.source === "user" ? "bg-violet-50 text-violet-700" : "bg-neutral-100 text-black/60"])
            }, o(n.source === "user" ? t("preferenceSourceUser", "个人") : t("preferenceSourceBuiltin", "内置")), 3), ht(n) ? (d(), b("span", {
                key: 0,
                class: U(["rounded-full px-2 py-1 text-xs font-medium", ll(n.enabled)])
            }, o(tl(n.enabled)), 3)) : (d(), b("span", {
                key: 1,
                class: U(["rounded-full px-2 py-1 text-xs font-medium", el(n)])
            }, o(Lt(n)), 3))]), e("div", Cu, [ht(n) ? (d(), Ve(ie, {
                key: 0,
                "model-value": n.enabled,
                label: t("preferenceEnabled", "启用"),
                class: U(st(gt(n.id))),
                "aria-disabled": Ue(gt(n.id)) ? "true" : void 0,
                "onUpdate:modelValue": y => pl(n.id, y)
            }, null, 8, ["model-value", "label", "class", "aria-disabled", "onUpdate:modelValue"])) : n.domainEnabled ? (d(), Ve(ie, {
                key: 1,
                "model-value": !n.blocked,
                label: t("preferenceEnabled", "启用"),
                class: U(st(xt(n.id))),
                "aria-disabled": Ue(xt(n.id)) ? "true" : void 0,
                "onUpdate:modelValue": y => y ? yl(n) : hl(n)
            }, null, 8, ["model-value", "label", "class", "aria-disabled", "onUpdate:modelValue"])) : (d(), b("span", $u, o(Lt(n)), 1)), ht(n) ? (d(), b("div", Tu, [e("button", {
                type: "button",
                class: "rounded-md px-3 py-1.5 text-sm text-black/65 transition-colors active:bg-black/5",
                onClick: y => dl(n.id)
            }, o(t("preferenceEdit", "编辑")), 9, Au), e("button", {
                type: "button",
                class: "rounded-md px-3 py-1.5 text-sm text-red-500 transition-colors active:bg-red-50",
                onClick: y => vl(n.id)
            }, o(t("preferenceDelete", "删除")), 9, Pu)])) : N("", !0)])]))), 128))])])) : (d(), b("p", Lu, o(ue.value ? t("glossarySearchEmpty", "没有匹配的术语。") : t("glossaryCombinedEmpty", "当前语言下还没有个人术语，你可以先新增个人术语。")), 1)), e("div", Iu, [e("span", Ru, o(t("preferencePageLabel", "第 {page} 页").replace("{page}", String(me.value))), 1), e("div", Mu, [e("button", {
                type: "button",
                class: "rounded-lg border border-black/10 px-3 py-2 text-sm font-medium text-black/60 transition-colors hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40",
                disabled: !P.value,
                onClick: pn
            }, o(t("preferencePreviousPage", "上一页")), 9, Uu), e("button", {
                type: "button",
                class: "rounded-lg border border-black/10 px-3 py-2 text-sm font-medium text-black/60 transition-colors hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40",
                disabled: !m.value,
                onClick: bn
            }, o(t("preferenceNextPage", "下一页")), 9, Vu)])])])], 64)) : k.value === "replacement" ? (d(), b("section", Ou, [e("div", Gu, [e("div", Nu, [e("h3", ju, o(t("replacementTitle", "原文错词替换")), 1), e("p", zu, o(t("replacementDescription", "修正常见字幕识别错误（如 cloud code → Claude Code），在 AI 翻译前自动替换。含个人与内置规则。")), 1)]), e("div", qu, [e("button", {
                type: "button",
                class: "rounded-lg border border-black/10 px-4 py-2 text-sm font-medium text-black/70 transition-colors hover:bg-neutral-50 disabled:opacity-50",
                disabled: Q.value,
                onClick: i[7] || (i[7] = n => w.value = !0)
            }, o(t("builtinGlossaryManageDomains", "管理领域")), 9, Wu), e("button", {
                type: "button",
                class: "rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-700 disabled:opacity-50",
                disabled: Q.value,
                onClick: i[8] || (i[8] = n => Ut())
            }, o(t("replacementCreateButton", "新增个人错词替换")), 9, Hu)])]), e("form", {
                class: "grid gap-2 md:grid-cols-[minmax(140px,0.9fr)_minmax(260px,1.5fr)_auto_auto]",
                onSubmit: ke(vn, ["prevent"])
            }, [ae(e("select", {
                "onUpdate:modelValue": i[9] || (i[9] = n => E.value = n),
                class: "min-w-0 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none focus:border-violet-400",
                "aria-label": t("preferenceDomain", "领域")
            }, [e("option", {
                value: ct
            }, o(t("preferenceAllDomains", "全部领域")), 1), (d(!0), b(ee, null, oe(Ne.value, n => (d(), b("option", {
                key: `replacement-filter-${n.code}`,
                value: n.code
            }, o(se(Le)(n)), 9, Zu))), 128))], 8, Ku), [
                [Ie, E.value]
            ]), ae(e("input", {
                "onUpdate:modelValue": i[10] || (i[10] = n => xe.value = n),
                type: "search",
                placeholder: t("replacementSearchPlaceholder", "搜索错词"),
                class: "min-w-0 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black placeholder-black/30 outline-none focus:border-violet-400"
            }, null, 8, Qu), [
                [_e, xe.value]
            ]), e("button", {
                type: "submit",
                class: "whitespace-nowrap rounded-lg border border-black/10 px-3 py-2 text-sm font-medium text-black/65 transition-colors hover:bg-neutral-50 disabled:opacity-50",
                disabled: Fe.value
            }, o(t("preferenceSearch", "搜索")), 9, Yu), ve.value ? (d(), b("button", {
                key: 0,
                type: "button",
                class: "flex h-10 w-10 items-center justify-center rounded-lg text-black/45 transition-colors hover:bg-neutral-50 hover:text-black disabled:opacity-50",
                disabled: Fe.value,
                "aria-label": t("preferenceClearSearch", "清除"),
                title: t("preferenceClearSearch", "清除"),
                onClick: fn
            }, i[32] || (i[32] = [e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": "true"
            }, [e("path", {
                d: "M18 6 6 18M6 6l12 12",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
            })], -1)]), 8, Xu)) : N("", !0)], 32), e("p", Ju, o(at.value), 1), f.value.length > 0 ? (d(), b("div", es, [e("div", ts, [e("table", ls, [e("thead", null, [e("tr", ns, [e("th", as, o(t("preferenceDomain", "领域")), 1), e("th", os, o(t("replacementFindText", "错词")), 1), e("th", us, o(t("replacementReplaceText", "替换为")), 1), e("th", ss, o(t("preferenceSource", "来源")), 1), e("th", is, o(t("preferenceStatus", "状态")), 1), e("th", rs, o(t("preferenceActions", "操作")), 1)])]), e("tbody", cs, [(d(!0), b(ee, null, oe(f.value, n => (d(), b("tr", {
                key: Xt(n),
                class: "text-sm text-black transition-colors hover:bg-neutral-50/50"
            }, [e("td", ds, [e("span", {
                class: "block truncate",
                title: $e(n.domain)
            }, o($e(n.domain)), 9, bs)]), e("td", ps, [e("span", {
                class: "block truncate",
                title: n.findText
            }, o(n.findText), 9, vs)]), e("td", fs, [e("span", {
                class: "block truncate",
                title: n.replaceText
            }, o(n.replaceText), 9, ms)]), e("td", gs, [e("span", {
                class: U(["inline-flex max-w-full rounded-full px-2 py-1 text-xs font-medium", n.source === "user" ? "bg-violet-50 text-violet-700" : "bg-neutral-100 text-black/60"])
            }, [e("span", xs, o(n.source === "user" ? t("preferenceSourceUser", "个人") : t("preferenceSourceBuiltin", "内置")), 1)], 2)]), e("td", hs, [e("div", ys, [e("div", {
                class: U(st(ut(n))),
                "aria-disabled": Ue(ut(n)) || n.source === "builtin" && n.domainEnabled === !1 ? "true" : void 0
            }, [G(ie, {
                "model-value": n.source === "builtin" ? !n.blocked && n.domainEnabled !== !1 : n.enabled,
                label: t("preferenceEnabled", "启用"),
                "onUpdate:modelValue": y => fl(n, y)
            }, null, 8, ["model-value", "label", "onUpdate:modelValue"])], 10, ks)])]), e("td", _s, [Jt(n) ? (d(), b("div", ws, [e("button", {
                type: "button",
                class: "inline-flex h-8 w-8 items-center justify-center rounded-md text-black/55 transition-colors hover:bg-black/5 hover:text-black",
                "aria-label": t("preferenceEdit", "编辑"),
                title: t("preferenceEdit", "编辑"),
                onClick: y => Ut(n)
            }, i[33] || (i[33] = [e("svg", {
                width: "15",
                height: "15",
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": "true"
            }, [e("path", {
                d: "M4 20h4.5L19 9.5 14.5 5 4 15.5V20Z",
                stroke: "currentColor",
                "stroke-width": "1.8",
                "stroke-linejoin": "round"
            }), e("path", {
                d: "m13.5 6 4.5 4.5",
                stroke: "currentColor",
                "stroke-width": "1.8",
                "stroke-linecap": "round"
            })], -1)]), 8, Fs), e("button", {
                type: "button",
                class: "inline-flex h-8 w-8 items-center justify-center rounded-md text-red-500/80 transition-colors hover:bg-red-50 hover:text-red-500",
                "aria-label": t("preferenceDelete", "删除"),
                title: t("preferenceDelete", "删除"),
                onClick: y => ml(n.id)
            }, i[34] || (i[34] = [e("svg", {
                width: "15",
                height: "15",
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": "true"
            }, [e("path", {
                d: "M5 7h14M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7l1-3h4l1 3",
                stroke: "currentColor",
                "stroke-width": "1.8",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            })], -1)]), 8, Ss)])) : (d(), b("span", Es, o(t("builtinGlossaryReadOnlyHint", "内置规则")), 1))])]))), 128))])])]), e("div", Bs, [(d(!0), b(ee, null, oe(f.value, n => (d(), b("article", {
                key: `mobile-replacement-${Xt(n)}`,
                class: "rounded-lg border border-black/10 bg-white p-4"
            }, [e("div", Ds, [e("span", {
                class: "mobile-line-clamp-2",
                title: n.findText
            }, o(n.findText), 9, Cs), i[35] || (i[35] = e("span", {
                class: "pt-0.5 text-black/30",
                "aria-hidden": "true"
            }, "→", -1)), e("span", {
                class: "mobile-line-clamp-2",
                title: n.replaceText
            }, o(n.replaceText), 9, $s)]), e("div", Ts, [e("span", {
                class: "max-w-full truncate rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium text-black/60",
                title: $e(n.domain)
            }, o($e(n.domain)), 9, As), e("span", {
                class: U(["rounded-full px-2 py-1 text-xs font-medium", n.source === "user" ? "bg-violet-50 text-violet-700" : "bg-neutral-100 text-black/60"])
            }, o(n.source === "user" ? t("preferenceSourceUser", "个人") : t("preferenceSourceBuiltin", "内置")), 3), e("span", {
                class: U(["rounded-full px-2 py-1 text-xs font-medium", n.source === "builtin" ? Ql(n) : ll(n.enabled)])
            }, o(n.source === "builtin" ? Zl(n) : tl(n.enabled)), 3)]), e("div", Ps, [G(ie, {
                "model-value": n.source === "builtin" ? !n.blocked && n.domainEnabled !== !1 : n.enabled,
                label: t("preferenceEnabled", "启用"),
                class: U(st(ut(n))),
                "aria-disabled": Ue(ut(n)) || n.source === "builtin" && n.domainEnabled === !1 ? "true" : void 0,
                "onUpdate:modelValue": y => fl(n, y)
            }, null, 8, ["model-value", "label", "class", "aria-disabled", "onUpdate:modelValue"]), Jt(n) ? (d(), b("div", Ls, [e("button", {
                type: "button",
                class: "rounded-md px-3 py-1.5 text-sm text-black/65 transition-colors active:bg-black/5",
                onClick: y => Ut(n)
            }, o(t("preferenceEdit", "编辑")), 9, Is), e("button", {
                type: "button",
                class: "rounded-md px-3 py-1.5 text-sm text-red-500 transition-colors active:bg-red-50",
                onClick: y => ml(n.id)
            }, o(t("preferenceDelete", "删除")), 9, Rs)])) : N("", !0)])]))), 128))])])) : (d(), b("p", Ms, o(ve.value ? t("replacementSearchEmpty", "没有匹配的错词替换。") : t("replacementEmpty", "暂无替换规则。")), 1)), e("div", Us, [e("span", Vs, o(t("preferencePageLabel", "第 {page} 页").replace("{page}", String(Ee.value))), 1), e("div", Os, [e("button", {
                type: "button",
                class: "rounded-lg border border-black/10 px-3 py-2 text-sm font-medium text-black/60 transition-colors hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40",
                disabled: !O.value,
                onClick: gn
            }, o(t("preferencePreviousPage", "上一页")), 9, Gs), e("button", {
                type: "button",
                class: "rounded-lg border border-black/10 px-3 py-2 text-sm font-medium text-black/60 transition-colors hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40",
                disabled: !be.value,
                onClick: mn
            }, o(t("preferenceNextPage", "下一页")), 9, Ns)])])])) : (d(), Ve(co, {
                key: 4,
                "domain-options": C.value
            }, null, 8, ["domain-options"])), k.value !== "translatedReplacement" && A.value ? (d(), b("p", js, o(A.value), 1)) : N("", !0)]), (d(), Ve(wt, {
                to: "body"
            }, [De.value ? (d(), b("div", {
                key: 0,
                class: "fixed inset-0 z-[2147483647] flex justify-end bg-black/40",
                onClick: ke(rl, ["self"])
            }, [e("div", zs, [e("div", qs, [e("div", Ws, [e("div", Hs, [e("h3", Ks, o(t("builtinGlossaryManageDomainsTitle", "管理内置术语领域")), 1), e("p", Zs, o(t("builtinGlossaryManageDomainsDescription", "按目标语言启用或停用内置术语领域。")), 1)]), e("button", {
                type: "button",
                class: "rounded-md p-2 text-black/35 transition-colors hover:bg-black/5 hover:text-black",
                onClick: rl
            }, " ✕ ")])]), e("div", Qs, [e("div", Ys, [ae(e("input", {
                "onUpdate:modelValue": i[11] || (i[11] = n => Se.value = n),
                type: "search",
                placeholder: t("builtinGlossaryDomainSearchPlaceholder", "搜索领域"),
                class: "min-w-0 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black placeholder-black/30 outline-none focus:border-violet-400"
            }, null, 8, Xs), [
                [_e, Se.value]
            ]), e("button", {
                type: "button",
                class: "whitespace-nowrap rounded-lg border border-black/10 px-3 py-2 text-sm font-medium text-black/65 transition-colors hover:bg-neutral-50 disabled:opacity-50",
                disabled: Q.value,
                onClick: i[12] || (i[12] = n => xl(!0))
            }, o(t("builtinGlossaryEnableAllDomains", "全部启用")), 9, Js), e("button", {
                type: "button",
                class: "whitespace-nowrap rounded-lg border border-black/10 px-3 py-2 text-sm font-medium text-black/65 transition-colors hover:bg-neutral-50 disabled:opacity-50",
                disabled: Q.value,
                onClick: i[13] || (i[13] = n => xl(!1))
            }, o(t("builtinGlossaryDisableAllDomains", "全部停用")), 9, ei)]), e("div", ti, [Me.value.length > 0 ? (d(), b("div", li, [(d(!0), b(ee, null, oe(Me.value, n => (d(), b("div", {
                key: `manager-${n.toLanguage}-${n.code}`,
                class: "flex items-center justify-between gap-3 rounded-lg border border-black/10 bg-white px-3 py-3"
            }, [e("div", ni, [e("div", ai, o(se(Le)(n)), 1), e("div", oi, o(t("builtinGlossaryDomainCount", "{count} 条内置术语").replace("{count}", String(n.termCount))), 1)]), G(ie, {
                "model-value": n.enabled,
                label: se(Le)(n),
                "onUpdate:modelValue": y => _n(n, y)
            }, null, 8, ["model-value", "label", "onUpdate:modelValue"])]))), 128))])) : (d(), b("p", ui, o(t("builtinGlossaryDomainSearchEmpty", "没有匹配的领域。")), 1))]), e("div", si, o(t("builtinGlossaryDomainTotal", "共 {count} 个领域").replace("{count}", String(V.value.length))), 1)])])])) : N("", !0)])), (d(), Ve(wt, {
                to: "body"
            }, [w.value ? (d(), b("div", {
                key: 0,
                class: "fixed inset-0 z-[2147483647] flex justify-end bg-black/40",
                onClick: i[18] || (i[18] = ke(n => w.value = !1, ["self"]))
            }, [e("div", ii, [e("div", ri, [e("div", ci, [e("div", di, [e("h3", bi, o(t("builtinTextReplacementManageDomainsTitle", "管理内置错词领域")), 1), e("p", pi, o(t("builtinTextReplacementManageDomainsDescription", "启用或停用内置错词替换领域（与目标语言无关）。")), 1)]), e("button", {
                type: "button",
                class: "rounded-md p-2 text-black/35 transition-colors hover:bg-black/5 hover:text-black",
                onClick: i[14] || (i[14] = n => w.value = !1)
            }, " ✕ ")])]), e("div", vi, [e("div", fi, [ae(e("input", {
                "onUpdate:modelValue": i[15] || (i[15] = n => F.value = n),
                type: "search",
                placeholder: t("builtinGlossaryDomainSearchPlaceholder", "搜索领域"),
                class: "min-w-0 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black placeholder-black/30 outline-none focus:border-violet-400"
            }, null, 8, mi), [
                [_e, F.value]
            ]), e("button", {
                type: "button",
                class: "whitespace-nowrap rounded-lg border border-black/10 px-3 py-2 text-sm font-medium text-black/65 transition-colors hover:bg-neutral-50 disabled:opacity-50",
                disabled: Q.value,
                onClick: i[16] || (i[16] = n => gl(!0))
            }, o(t("builtinGlossaryEnableAllDomains", "全部启用")), 9, gi), e("button", {
                type: "button",
                class: "whitespace-nowrap rounded-lg border border-black/10 px-3 py-2 text-sm font-medium text-black/65 transition-colors hover:bg-neutral-50 disabled:opacity-50",
                disabled: Q.value,
                onClick: i[17] || (i[17] = n => gl(!1))
            }, o(t("builtinGlossaryDisableAllDomains", "全部停用")), 9, xi)]), e("div", hi, [ot.value.length > 0 ? (d(), b("div", yi, [(d(!0), b(ee, null, oe(ot.value, n => (d(), b("div", {
                key: `tr-manager-${n.code}`,
                class: "flex items-center justify-between gap-3 rounded-lg border border-black/10 bg-white px-3 py-3"
            }, [e("div", ki, [e("div", _i, o(se(Le)(n)), 1), e("div", wi, o(t("builtinTextReplacementDomainCount", "{count} 条内置错词").replace("{count}", String(n.ruleCount ?? n.termCount))), 1)]), G(ie, {
                "model-value": n.enabled,
                label: se(Le)(n),
                "onUpdate:modelValue": y => kn(n, y)
            }, null, 8, ["model-value", "label", "onUpdate:modelValue"])]))), 128))])) : (d(), b("p", Fi, o(t("builtinGlossaryDomainSearchEmpty", "没有匹配的领域。")), 1))]), e("div", Si, o(t("builtinGlossaryDomainTotal", "共 {count} 个领域").replace("{count}", String(W.value.length))), 1)])])])) : N("", !0)])), (d(), Ve(wt, {
                to: "body"
            }, [M.value ? (d(), b("div", {
                key: 0,
                class: "fixed inset-0 z-[2147483647] flex justify-end bg-black/40",
                onClick: ke(yt, ["self"])
            }, [e("div", Ei, [e("div", Bi, [e("div", Di, [e("div", null, [e("h3", Ci, o(c.value), 1), e("p", $i, o(s.value), 1)]), e("button", {
                type: "button",
                class: "rounded-md p-2 text-black/35 transition-colors hover:bg-black/5 hover:text-black",
                onClick: yt
            }, " ✕ ")])]), e("div", Ti, [M.value === "glossary" ? (d(), b("div", Ai, [e("label", Pi, [e("span", Li, o(t("preferenceDomain", "领域")), 1), ae(e("select", {
                "onUpdate:modelValue": i[19] || (i[19] = n => q.domain = n),
                class: "w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none focus:border-violet-400"
            }, [(d(!0), b(ee, null, oe(C.value, n => (d(), b("option", {
                key: n.code,
                value: n.code
            }, o(se(Le)(n)), 9, Ii))), 128))], 512), [
                [Ie, q.domain]
            ])]), e("label", Ri, [e("span", Mi, o(t("preferenceLanguage", "语言")), 1), ae(e("select", {
                "onUpdate:modelValue": i[20] || (i[20] = n => q.toLanguage = n),
                class: "w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none focus:border-violet-400"
            }, [(d(!0), b(ee, null, oe(Ce.value, n => (d(), b("option", {
                key: n.code,
                value: n.code
            }, o(n.label), 9, Ui))), 128))], 512), [
                [Ie, q.toLanguage]
            ])]), e("label", Vi, [e("span", Oi, o(t("glossarySourceTerm", "原文术语")), 1), ae(e("input", {
                "onUpdate:modelValue": i[21] || (i[21] = n => q.sourceTerm = n),
                type: "text",
                placeholder: t("glossarySourcePlaceholder", "原文术语"),
                class: "w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black placeholder-black/30 outline-none focus:border-violet-400"
            }, null, 8, Gi), [
                [_e, q.sourceTerm]
            ])]), e("label", Ni, [e("span", ji, o(t("glossaryTargetTerm", "指定译法")), 1), ae(e("input", {
                "onUpdate:modelValue": i[22] || (i[22] = n => q.targetTerm = n),
                type: "text",
                placeholder: t("glossaryTargetPlaceholder", "指定译法"),
                class: "w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black placeholder-black/30 outline-none focus:border-violet-400",
                onKeydown: Je(Ot, ["enter"])
            }, null, 40, zi), [
                [_e, q.targetTerm]
            ])]), e("div", qi, [G(ie, {
                "model-value": q.enabled,
                label: t("preferenceEnabled", "启用"),
                "onUpdate:modelValue": i[23] || (i[23] = n => q.enabled = n)
            }, null, 8, ["model-value", "label"])])])) : (d(), b("div", Wi, [e("label", Hi, [e("span", Ki, o(t("preferenceDomain", "领域")), 1), ae(e("select", {
                "onUpdate:modelValue": i[24] || (i[24] = n => J.domain = n),
                class: "w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none focus:border-violet-400"
            }, [(d(!0), b(ee, null, oe(C.value, n => (d(), b("option", {
                key: n.code,
                value: n.code
            }, o(se(Le)(n)), 9, Zi))), 128))], 512), [
                [Ie, J.domain]
            ])]), e("label", Qi, [e("span", Yi, o(t("replacementFindText", "错词")), 1), ae(e("input", {
                "onUpdate:modelValue": i[25] || (i[25] = n => J.findText = n),
                type: "text",
                placeholder: t("replacementFindPlaceholder", "原文中的错词，如 cloud code"),
                class: "w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black placeholder-black/30 outline-none focus:border-violet-400"
            }, null, 8, Xi), [
                [_e, J.findText]
            ])]), e("label", Ji, [e("span", er, o(t("replacementReplaceText", "替换为")), 1), ae(e("input", {
                "onUpdate:modelValue": i[26] || (i[26] = n => J.replaceText = n),
                type: "text",
                placeholder: t("replacementReplacePlaceholder", "替换为，如 claude code"),
                class: "w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black placeholder-black/30 outline-none focus:border-violet-400",
                onKeydown: Je(Ot, ["enter"])
            }, null, 40, tr), [
                [_e, J.replaceText]
            ])]), e("div", lr, [G(ie, {
                "model-value": J.enabled,
                label: t("preferenceEnabled", "启用"),
                "onUpdate:modelValue": i[27] || (i[27] = n => J.enabled = n)
            }, null, 8, ["model-value", "label"])])]))]), e("div", nr, [e("button", {
                type: "button",
                class: "rounded-lg px-4 py-2 text-sm text-black/60 transition-colors hover:bg-black/5 hover:text-black",
                onClick: yt
            }, o(t("cancelButton", "取消")), 1), e("button", {
                type: "button",
                class: "rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-700 disabled:opacity-50",
                disabled: Q.value,
                onClick: Ot
            }, o(h.value ? t("save", "保存") : t("preferenceAdd", "添加")), 9, ar)])])])) : N("", !0)]))]))
        }
    }),
    Bl = Ht(ur, [
        ["__scopeId", "data-v-24ab7106"]
    ]),
    sr = {
        locale: bt,
        profileId: "pinyin-tone",
        alphabet: "sapi",
        modifierOptions: Object.freeze(["1", "2", "3", "4", "5"])
    };
function ir(r) {
    return Vn(r) ? sr : void 0
}
function rr(r) {
    const t = ir(r);
    if (!t) throw new Error("Unsupported pronunciation locale");
    return t
}
function cr(r, t, a) {
    if (r.locale !== bt) throw new Error("Unsupported pronunciation locale");
    const u = t.trim(),
        p = (a == null ? void 0 : a.trim()) ?? "";
    if (!u) throw new Error("Pronunciation input is required");
    if (!r.modifierOptions.includes(p)) throw new Error("Pronunciation modifier is required");
    const k = `${u} ${p}`;
    if (k.length > 512 || dr(k)) throw new Error("Invalid phoneme");
    return {
        alphabet: "sapi",
        phoneme: k
    }
}
function dr(r) {
    return Array.from(r).some(t => {
        const a = t.codePointAt(0) ?? 0;
        return a >= 0 && a <= 8 || a >= 11 && a <= 12 || a >= 14 && a <= 31
    })
}
function jl(r) {
    if (!r) return [];
    const t = Intl.Segmenter;
    return t ? Array.from(new t("zh-CN", {
        granularity: "grapheme"
    }).segment(r), a => ({
        text: a.segment,
        start: a.index,
        end: a.index + a.segment.length
    })) : fr(r)
}
function zl(r, t) {
    const a = jl(r);
    return t === "fine" ? a.map(u => ({ ...u,
        selectable: !qt(u.text) && !Wt(u.text) && !Dl(u.text),
        kind: qt(u.text) ? "separator" : Wt(u.text) ? "punctuation" : Dl(u.text) ? "symbol" : "grapheme"
    })) : vr(pr(a))
}
function ql(r, t, a, u, p) {
    if (a < 0 || u < 0 || a >= t.length || u >= t.length || !t[a].selectable || !t[u].selectable) return null;
    const k = Math.min(a, u),
        $ = Math.max(a, u),
        D = t[k].start,
        C = t[$].end,
        B = r.slice(D, C),
        f = Nn(r, B, D);
    return f > 0 ? {
        startGrapheme: k,
        endGrapheme: $,
        startPart: k,
        endPart: $,
        start: D,
        end: C,
        targetText: B,
        targetOccurrence: f,
        mode: p
    } : null
}
function br(r, t, a, u = ["primary", "fine"]) {
    const p = Gn(r, t, a);
    if (p < 0) return null;
    const k = p + t.length;
    for (const $ of u) {
        const D = zl(r, $),
            C = D.findIndex(V => V.selectable && V.start === p),
            B = D.findIndex(V => V.selectable && V.end === k);
        if (C < 0 || B < C) continue;
        const f = ql(r, D, C, B, $);
        if ((f == null ? void 0 : f.targetOccurrence) === a && f.targetText === t) return f
    }
    return null
}
function pr(r) {
    const t = [];
    for (const a of r)
        if (mr(a.text)) t.push({ ...a,
            selectable: !0,
            kind: "han"
        });
        else if (gr(a.text)) {
        const u = t.at(-1);
        (u == null ? void 0 : u.kind) === "word" && u.end === a.start ? (u.text += a.text, u.end = a.end) : t.push({ ...a,
            selectable: !0,
            kind: "word"
        })
    } else qt(a.text) ? t.push({ ...a,
        selectable: !1,
        kind: "separator"
    }) : Wt(a.text) ? t.push({ ...a,
        selectable: !1,
        kind: "punctuation"
    }) : t.push({ ...a,
        selectable: !1,
        kind: "symbol"
    });
    return t
}
function vr(r) {
    const t = [],
        a = new Set(["-", "‐", "‑", "."]);
    for (let u = 0; u < r.length; u += 1) {
        const p = r[u];
        if (p.kind !== "word" || !new RegExp("\\p{L}", "u").test(p.text)) {
            t.push(p);
            continue
        }
        let k = p.text,
            $ = p.end,
            D = u;
        for (; D + 2 < r.length;) {
            const C = r[D + 1],
                B = r[D + 2];
            if (!a.has(C.text) || C.start !== $ || B.kind !== "word" || !new RegExp("^\\p{N}+$", "u").test(B.text) || B.start !== C.end) break;
            k += C.text + B.text, $ = B.end, D += 2
        }
        t.push(D === u ? p : {
            text: k,
            start: p.start,
            end: $,
            selectable: !0,
            kind: "word"
        }), u = D
    }
    return t
}
function fr(r) {
    const t = [];
    let a = 0,
        u = 0;
    for (const p of Array.from(r)) {
        const k = a,
            $ = k + p.length;
        a = $;
        const D = t.at(-1);
        !!D && (xr(p) || D.text.endsWith("‍") || p === "‍" || Cl(p) && u % 2 === 1 || D.text === "\r" && p === `
`) ? (D.text += p, D.end = $) : t.push({
            text: p,
            start: k,
            end: $
        }), u = Cl(p) ? u + 1 : 0
    }
    return t
}
function qt(r) {
    return new RegExp("^\\p{White_Space}+$", "u").test(r)
}
function Wt(r) {
    return new RegExp("^\\p{P}+$", "u").test(r)
}
function Dl(r) {
    return new RegExp("^\\p{Cf}+$", "u").test(r)
}
function mr(r) {
    return new RegExp("^\\p{Script=Han}\\p{M}*$", "u").test(r)
}
function gr(r) {
    return /^[\p{L}\p{N}\p{M}]+$/u.test(r)
}
function xr(r) {
    return new RegExp("^\\p{M}$", "u").test(r) || new RegExp("^\\p{Emoji_Modifier}$", "u").test(r) || r === "︎" || r === "️"
}
function Cl(r) {
    return new RegExp("^\\p{Regional_Indicator}$", "u").test(r)
}
function $l(r, t) {
    if (!t) throw new Error("Reading target is required");
    if (r.locale !== bt) throw new Error("Unsupported pronunciation locale");
    const a = Er(t);
    return a.length > 0 && !Sr(t) ? {
        targetText: t,
        composition: "source-aligned-sequence",
        units: a
    } : {
        targetText: t,
        composition: "whole-span",
        units: [ft(t, 0, t.length)]
    }
}
function hr(r, t) {
    return {
        targetText: r,
        composition: t.composition,
        units: t.units.map(a => ({
            sourceStart: a.sourceStart,
            sourceEnd: a.sourceEnd,
            sourceText: a.sourceText,
            pronunciationInput: a.pronunciationInput,
            pronunciationModifier: a.pronunciationModifier ?? ""
        }))
    }
}
function yr(r, t, a) {
    const u = r.units[t];
    if (!u || a <= u.sourceStart || a >= u.sourceEnd) throw new Error("Reading split offset is outside the unit");
    if (!Kt(r.targetText).has(a)) throw new Error("Reading split must use a grapheme boundary");
    const p = r.units.map(Wl);
    return p.splice(t, 1, ft(r.targetText, u.sourceStart, a), ft(r.targetText, a, u.sourceEnd)), { ...r,
        composition: "source-aligned-sequence",
        units: p
    }
}
function kr(r, t, a) {
    return Array.from(Kt(r)).filter(u => u > t && u < a).sort((u, p) => u - p)
}
function _r(r, t) {
    const a = r.units[t],
        u = r.units[t + 1];
    if (!a || !u || a.sourceEnd > u.sourceStart) throw new Error("Reading units cannot be merged");
    const p = r.units.map(Wl);
    p.splice(t, 2, ft(r.targetText, a.sourceStart, u.sourceEnd));
    const k = p.length === 1 && p[0].sourceStart === 0 && p[0].sourceEnd === r.targetText.length;
    return { ...r,
        composition: k ? "whole-span" : "source-aligned-sequence",
        units: p
    }
}
function wr(r, t, a) {
    Fr(t, a);
    const u = a.units.map(C => {
            var W;
            const B = C.pronunciationInput.trim();
            if (!B || B.length > 256 || Al(B)) throw new Error("Pronunciation input is invalid");
            const f = C.pronunciationModifier.trim(),
                V = a.composition === "whole-span" && ((W = r.modifierOptions) != null && W.length) ? {
                    alphabet: r.alphabet,
                    phoneme: B
                } : cr(r, B, f || void 0);
            return {
                sourceStart: C.sourceStart,
                sourceEnd: C.sourceEnd,
                sourceText: C.sourceText,
                pronunciationInput: B,
                pronunciationModifier: f || null,
                phoneme: V.phoneme
            }
        }),
        k = a.composition === "whole-span" ? u[0].phoneme : u.map(C => C.phoneme).join(" - ");
    if (!k || k.length > 512 || Al(k)) throw new Error("Compiled phoneme is invalid");
    const $ = u.map(C => C.pronunciationInput).join(" ");
    if ($.length > 256) throw new Error("Pronunciation input summary is too long");
    const D = u.length === 1 ? u[0].pronunciationModifier : null;
    return {
        alphabet: r.alphabet,
        phoneme: k,
        pronunciationInput: $,
        pronunciationModifier: D,
        reading: {
            readingVersion: 2,
            composition: a.composition,
            units: u,
            compiledPhoneme: k
        }
    }
}
function Fr(r, t) {
    if (t.targetText !== r || t.units.length === 0 || t.units.length > 64) throw new Error("Reading source is invalid");
    const a = Kt(r);
    let u = 0;
    for (const p of t.units) {
        if (!Number.isSafeInteger(p.sourceStart) || !Number.isSafeInteger(p.sourceEnd) || p.sourceStart < u || p.sourceEnd <= p.sourceStart || p.sourceEnd > r.length || !a.has(p.sourceStart) || !a.has(p.sourceEnd) || r.slice(p.sourceStart, p.sourceEnd) !== p.sourceText) throw new Error("Reading source unit does not match target source");
        if (Tl(r.slice(u, p.sourceStart))) throw new Error("Reading units cannot omit pronounceable source text");
        u = p.sourceEnd
    }
    if (Tl(r.slice(u))) throw new Error("Reading units cannot omit pronounceable source text");
    if (t.composition === "whole-span" && (t.units.length !== 1 || t.units[0].sourceStart !== 0 || t.units[0].sourceEnd !== r.length)) throw new Error("Whole-span reading must cover the target")
}
function Tl(r) {
    return /[\p{Letter}\p{Number}\p{Mark}]/u.test(r)
}
function Sr(r) {
    return Zt(r).some(t => /[\p{Letter}\p{Number}\p{Mark}]/u.test(t.text) && !new RegExp("^\\p{Script=Han}\\p{M}*$", "u").test(t.text))
}
function Er(r) {
    const t = Zt(r),
        a = [];
    let u = -1,
        p = -1;
    const k = () => {
        u >= 0 && (a.push(ft(r, u, p)), u = -1, p = -1)
    };
    for (const $ of t) new RegExp("\\p{Script=Han}", "u").test($.text) ? (k(), a.push(ft(r, $.start, $.end))) : /[\p{Letter}\p{Number}\p{Mark}]/u.test($.text) ? (u < 0 && (u = $.start), p = $.end) : k();
    return k(), a
}
function ft(r, t, a) {
    return {
        sourceStart: t,
        sourceEnd: a,
        sourceText: r.slice(t, a),
        pronunciationInput: "",
        pronunciationModifier: ""
    }
}
function Wl(r) {
    return { ...r
    }
}
function Kt(r) {
    const t = new Set([0, r.length]);
    for (const a of Zt(r)) t.add(a.start), t.add(a.end);
    return t
}
function Zt(r) {
    return jl(r)
}
function Al(r) {
    return Array.from(r).some(t => {
        const a = t.codePointAt(0) ?? 0;
        return a >= 0 && a <= 8 || a >= 11 && a <= 12 || a >= 14 && a <= 31
    })
}
const Br = {
        class: "overflow-hidden rounded-xl border border-black/10 bg-white"
    },
    Dr = {
        class: "border-b border-black/5 p-5"
    },
    Cr = {
        class: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
    },
    $r = {
        class: "text-lg font-semibold text-black"
    },
    Tr = {
        class: "mt-1 text-sm text-black/50"
    },
    Ar = ["disabled"],
    Pr = ["placeholder"],
    Lr = ["aria-label"],
    Ir = {
        value: "all"
    },
    Rr = {
        value: "enabled"
    },
    Mr = {
        value: "disabled"
    },
    Ur = ["disabled"],
    Vr = {
        key: 0,
        class: "border-b border-black/5 px-5 py-3 text-sm text-red-500"
    },
    Or = {
        key: 1,
        class: "px-5 py-12 text-center text-sm text-black/35"
    },
    Gr = {
        class: "hidden overflow-x-auto md:block"
    },
    Nr = {
        class: "w-full min-w-[820px] table-fixed"
    },
    jr = {
        class: "border-b border-black/5 bg-neutral-50 text-left text-xs font-medium uppercase tracking-wide text-black/40"
    },
    zr = {
        class: "w-[24%] px-4 py-3"
    },
    qr = {
        class: "w-[19%] px-4 py-3"
    },
    Wr = {
        class: "w-[27%] px-4 py-3"
    },
    Hr = {
        class: "w-[13%] px-4 py-3"
    },
    Kr = {
        class: "w-[17%] px-4 py-3 text-right"
    },
    Zr = {
        class: "divide-y divide-black/5"
    },
    Qr = {
        class: "px-4 py-3"
    },
    Yr = ["title"],
    Xr = {
        class: "px-4 py-3 text-black/70"
    },
    Jr = {
        class: "px-4 py-3"
    },
    ec = ["title"],
    tc = {
        class: "px-4 py-3"
    },
    lc = {
        class: "px-4 py-3 text-right"
    },
    nc = {
        class: "flex justify-end gap-1"
    },
    ac = ["aria-label", "onClick"],
    oc = ["aria-label", "onClick"],
    uc = {
        class: "space-y-3 p-4 md:hidden"
    },
    sc = {
        class: "break-words text-sm font-medium text-black"
    },
    ic = {
        class: "mt-2 grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-1 text-xs"
    },
    rc = {
        class: "text-black/40"
    },
    cc = {
        class: "text-black/40"
    },
    dc = {
        class: "break-all font-mono"
    },
    bc = {
        class: "mt-4 flex items-center justify-between gap-3"
    },
    pc = {
        class: "flex gap-2"
    },
    vc = ["onClick"],
    fc = ["onClick"],
    mc = {
        key: 3,
        class: "px-5 py-12 text-center text-sm text-black/35"
    },
    gc = {
        class: "flex items-center justify-between gap-3 border-t border-black/5 px-5 py-4"
    },
    xc = {
        class: "text-sm text-black/45"
    },
    hc = {
        class: "flex gap-2"
    },
    yc = ["disabled"],
    kc = ["disabled"],
    _c = {
        class: "flex items-start justify-between gap-3 border-b border-black/10 px-5 py-4"
    },
    wc = {
        class: "text-base font-semibold text-black"
    },
    Fc = {
        class: "mt-1 text-sm text-black/50"
    },
    Sc = {
        class: "min-h-0 flex-1 space-y-5 overflow-y-auto px-5 py-5"
    },
    Ec = {
        class: "block text-sm font-medium text-black"
    },
    Bc = ["placeholder"],
    Dc = {
        class: "flex flex-wrap items-center justify-between gap-3"
    },
    Cc = {
        class: "text-sm font-medium text-black"
    },
    $c = {
        class: "flex items-center gap-2"
    },
    Tc = ["aria-label"],
    Ac = ["data-part-index", "onPointerdown", "onPointerenter", "onClick", "onKeydown"],
    Pc = {
        key: 1,
        class: "whitespace-pre text-base leading-10 text-black/45",
        "aria-hidden": "true"
    },
    Lc = {
        key: 1,
        class: "mt-2 rounded-lg border border-dashed border-black/10 px-3 py-5 text-center text-sm text-black/35"
    },
    Ic = {
        key: 2,
        class: "mt-2 text-sm text-violet-700"
    },
    Rc = {
        key: 3,
        class: "mt-2 text-sm text-red-500"
    },
    Mc = {
        key: 0,
        class: "space-y-3"
    },
    Uc = {
        class: "flex items-start justify-between gap-3"
    },
    Vc = {
        class: "text-sm font-medium text-black"
    },
    Oc = {
        class: "mt-1 text-xs text-black/45"
    },
    Gc = {
        class: "shrink-0 rounded-full bg-violet-50 px-2 py-1 text-xs font-medium text-violet-700"
    },
    Nc = ["onClick"],
    jc = {
        class: "rounded-lg border border-black/10 bg-neutral-50 p-3"
    },
    zc = {
        class: "flex flex-wrap items-center justify-between gap-2"
    },
    qc = {
        class: "rounded bg-white px-2 py-1 text-sm font-medium text-black",
        lang: "zh-CN",
        dir: "ltr"
    },
    Wc = {
        key: 0,
        class: "flex flex-wrap items-center justify-end gap-1"
    },
    Hc = {
        class: "text-xs text-black/40"
    },
    Kc = ["onClick"],
    Zc = {
        class: "block text-xs font-medium text-black/65"
    },
    Qc = ["onUpdate:modelValue", "placeholder"],
    Yc = {
        key: 0,
        class: "block text-xs font-medium text-black/65"
    },
    Xc = ["onUpdate:modelValue"],
    Jc = {
        value: ""
    },
    ed = ["value"],
    td = {
        key: 1,
        class: "rounded-lg bg-neutral-50 px-3 py-2 text-xs text-black/55"
    },
    ld = {
        key: 2,
        class: "text-sm text-red-500"
    },
    nd = {
        class: "flex justify-end gap-3 border-t border-black/10 px-5 py-4 pb-[calc(16px+env(safe-area-inset-bottom))]"
    },
    ad = ["disabled"],
    Pl = pt({
        __name: "PronunciationSettingsPanel",
        setup(r) {
            const t = On(),
                a = rr(bt),
                u = g("all"),
                p = g(""),
                k = g(""),
                $ = g([]),
                D = g(!1),
                C = g(""),
                B = g(!1),
                f = g(null),
                V = g([void 0]),
                W = g(0),
                K = g(new Set),
                Z = g(!1),
                T = g(null),
                I = g(!1),
                A = g(""),
                Q = g(""),
                R = g(null),
                M = g("primary"),
                j = g(null),
                Y = g(null),
                le = g(!1),
                te = g(null),
                z = g(null),
                re = g(!1),
                ue = g(null);
            let de = !1,
                me = !1;
            const ne = vt({
                    matchText: "",
                    enabled: !0
                }),
                ge = S(() => zl(ne.matchText, M.value)),
                Re = S(() => {
                    var v;
                    return ((v = j.value) == null ? void 0 : v.composition) === "source-aligned-sequence"
                }),
                _ = S(() => {
                    if (Y.value && !le.value) return {
                        alphabet: Y.value.alphabet,
                        phoneme: Y.value.phoneme,
                        pronunciationInput: Y.value.pronunciationInput,
                        pronunciationModifier: Y.value.pronunciationModifier ?? null,
                        reading: null
                    };
                    if (!R.value || !j.value) return null;
                    try {
                        return wr(a, R.value.targetText, j.value)
                    } catch {
                        return null
                    }
                }),
                pe = S(() => !!(ne.matchText.trim() && R.value && _.value && !Q.value)),
                xe = S(() => {
                    var v;
                    return ((v = j.value) == null ? void 0 : v.composition) === "source-aligned-sequence" ? E("pronunciationPerUnitHint", "每一段填写自己的读法与声调；需要时可继续拆分或合并。") : E("pronunciationWholeToneHint", "整体读法请直接填写包含完整声调的音标；拆分后可为每段单独选择声调。")
                }),
                ve = S(() => R.value ? E("pronunciationSelectionSummary", "已选择：{text}；第 {occurrence} 处").replace("{text}", R.value.targetText).replace("{occurrence}", String(R.value.targetOccurrence)) : "");
            Ae(() => ne.matchText, () => {
                de || (F(), j.value = null, Y.value = null, le.value = !0, A.value = "")
            }, {
                flush: "sync"
            }), Pt(we);
            function E(v, c) {
                const s = Et.t(v);
                return typeof s == "string" && s.trim() && s !== v ? s.trim() : c
            }
            function Ee(v) {
                return v === "5" ? E("pronunciationNeutralTone", "Neutral tone") : E("pronunciationNumberedTone", "Tone {tone}").replace("{tone}", v)
            }
            async function we() {
                D.value = !0, C.value = "";
                try {
                    const v = await t.listRulesPage({
                        targetLocale: bt,
                        status: u.value,
                        keyword: k.value || void 0,
                        afterId: V.value[W.value],
                        limit: 20
                    });
                    $.value = v.items, B.value = v.hasMore, f.value = v.nextAfterId ?? null
                } catch (v) {
                    $.value = [], B.value = !1, C.value = Me(v)
                } finally {
                    D.value = !1
                }
            }
            async function he() {
                V.value = [void 0], W.value = 0, await we()
            }
            function Be() {
                k.value = p.value.trim(), he()
            }
            function ye() {
                W.value !== 0 && (W.value -= 1, we())
            }
            function Fe() {
                !B.value || f.value === null || (V.value = V.value.slice(0, W.value + 1), V.value.push(f.value), W.value += 1, we())
            }
            function De() {
                de = !0, T.value = null, ne.matchText = "", ne.enabled = !0, M.value = "primary", R.value = null, j.value = null, Y.value = null, le.value = !0, Q.value = "", A.value = "", de = !1, Z.value = !0
            }
            function Se(v) {
                var c, s;
                de = !0, T.value = v.id, ne.matchText = v.matchText, ne.enabled = v.enabled, R.value = br(v.matchText, v.targetText, v.targetOccurrence), M.value = ((c = R.value) == null ? void 0 : c.mode) ?? "primary", R.value && ((s = v.reading) == null ? void 0 : s.readingVersion) === 2 ? (j.value = hr(R.value.targetText, v.reading), Y.value = null, le.value = !1) : R.value ? (j.value = ot(v), Y.value = v, le.value = !1) : (j.value = null, Y.value = v, le.value = !1), Q.value = R.value ? "" : E("pronunciationSelectionRestoreFailed", "旧规则的纠正位置无法定位，请重新选择后再保存。 "), A.value = "", de = !1, Z.value = !0
            }
            function w() {
                I.value || (Z.value = !1)
            }
            function F() {
                R.value = null, te.value = null, z.value = null, ue.value = null, Q.value = ""
            }
            function x(v, c) {
                var L;
                const s = (L = R.value) == null ? void 0 : L.targetText,
                    h = ql(ne.matchText, ge.value, v, c, M.value);
                if (R.value = h != null && h.targetText.length && h.targetText.length <= 128 ? h : null, Q.value = h && h.targetText.length > 128 ? E("pronunciationSelectionTooLong", "纠正部分最多 128 个字符。") : R.value ? "" : E("pronunciationSelectionInvalid", "请选择连续文字。 "), !R.value) {
                    j.value = null, Y.value = null, le.value = !0;
                    return
                }
                R.value && R.value.targetText !== s && (j.value = $l(a, R.value.targetText), Y.value = null, le.value = !0)
            }
            function q(v) {
                M.value !== v && (M.value = v, F(), j.value = null, Y.value = null, le.value = !0)
            }
            function J(v) {
                Qe() || (me = !1, te.value = v, z.value = v, re.value = !0, x(v, v))
            }
            function Ce(v) {
                re.value && te.value !== null && (me || (me = te.value !== v), x(te.value, v))
            }
            function ze() {
                re.value = !1, te.value = null
            }
            function fe(v) {
                if (!Qe()) {
                    if (me) {
                        me = !1;
                        return
                    }
                    x(v, v), z.value = v;
                    return
                }
                ue.value === null ? (ue.value = v, z.value = v, x(v, v)) : (x(ue.value, v), ue.value = null)
            }
            function Ne(v, c) {
                var mt;
                if (v.key !== "ArrowLeft" && v.key !== "ArrowRight") return;
                v.preventDefault();
                const h = v.key === "ArrowRight" ? 1 : -1,
                    L = P(c, h);
                if (L < 0) return;
                const $e = (mt = v.currentTarget.parentElement) == null ? void 0 : mt.querySelector(`button[data-part-index="${L}"]`);
                $e == null || $e.focus(), v.shiftKey && R.value ? (z.value ?? (z.value = c), x(z.value, L)) : (z.value = L, x(L, L))
            }
            function qe(v) {
                return !!(R.value && v >= R.value.startPart && v <= R.value.endPart)
            }
            function P(v, c) {
                for (let s = v + c; s >= 0 && s < ge.value.length; s += c)
                    if (ge.value[s].selectable) return s;
                return -1
            }
            function m() {
                le.value = !0, Y.value = null, A.value = ""
            }
            function O(v) {
                return j.value ? kr(j.value.targetText, v.sourceStart, v.sourceEnd) : []
            }
            function be(v, c) {
                const s = c - v.sourceStart;
                return `${v.sourceText.slice(0,s)}｜${v.sourceText.slice(s)}`
            }
            function je(v, c) {
                if (j.value) try {
                    j.value = yr(j.value, v, c), m()
                } catch (s) {
                    A.value = Me(s)
                }
            }
            function et(v) {
                if (j.value) try {
                    j.value = _r(j.value, v), m()
                } catch (c) {
                    A.value = Me(c)
                }
            }
            function Qe() {
                return typeof window < "u" && window.matchMedia("(pointer: coarse)").matches
            }
            async function tt() {
                if (!(!pe.value || !R.value || !_.value)) {
                    I.value = !0, A.value = "";
                    try {
                        const v = {
                            targetLocale: bt,
                            matchText: ne.matchText,
                            targetText: R.value.targetText,
                            targetOccurrence: R.value.targetOccurrence,
                            profileId: a.profileId,
                            alphabet: _.value.alphabet,
                            pronunciationInput: _.value.pronunciationInput,
                            pronunciationModifier: _.value.pronunciationModifier,
                            phoneme: _.value.phoneme,
                            reading: Y.value && !le.value ? null : _.value.reading,
                            enabled: ne.enabled
                        };
                        T.value === null ? await t.createRule(v): await t.updateRule(T.value, v), Z.value = !1, await he()
                    } catch (v) {
                        A.value = Me(v)
                    } finally {
                        I.value = !1
                    }
                }
            }
            async function lt(v, c) {
                if (K.value.has(v.id)) return;
                const s = v.enabled;
                v.enabled = c, K.value = new Set(K.value).add(v.id), C.value = "";
                try {
                    const h = await t.setRuleEnabled(v.id, c);
                    v.enabled = h.enabled
                } catch (h) {
                    v.enabled = s, C.value = Me(h)
                } finally {
                    const h = new Set(K.value);
                    h.delete(v.id), K.value = h
                }
            }
            async function nt(v) {
                if (window.confirm(E("pronunciationDeleteConfirm", "确定删除这条发音规则吗？"))) {
                    C.value = "";
                    try {
                        await t.deleteRule(v.id), await we()
                    } catch (c) {
                        C.value = Me(c)
                    }
                }
            }
            function Ye(v) {
                const c = v.matchText.indexOf(v.targetText);
                return c >= 0 && v.matchText.indexOf(v.targetText, c + 1) >= 0 ? `${v.targetText} \xB7 ${E("pronunciationOccurrence","\u7B2C {occurrence} \u5904").replace("{occurrence}",String(v.targetOccurrence))}` : v.targetText
            }
            function at(v) {
                var c;
                return ((c = v.reading) == null ? void 0 : c.readingVersion) === 2 ? v.reading.units.map(s => s.pronunciationModifier ? `${s.pronunciationInput} \xB7 ${s.pronunciationModifier}` : s.pronunciationInput).join(" / ") : v.pronunciationModifier ? `${v.pronunciationInput} \xB7 ${v.pronunciationModifier}` : v.pronunciationInput
            }
            function ot(v) {
                const c = $l(a, v.targetText);
                return c.units.length === 1 && c.composition === "source-aligned-sequence" ? (c.units[0].pronunciationInput = v.pronunciationInput, c.units[0].pronunciationModifier = v.pronunciationModifier ?? "", c) : {
                    targetText: v.targetText,
                    composition: "whole-span",
                    units: [{
                        sourceStart: 0,
                        sourceEnd: v.targetText.length,
                        sourceText: v.targetText,
                        pronunciationInput: v.phoneme,
                        pronunciationModifier: ""
                    }]
                }
            }
            function Me(v) {
                return v instanceof Error ? v.message : E("pronunciationUnknownError", "操作失败，请稍后重试。 ")
            }
            return (v, c) => (d(), b(ee, null, [e("section", Br, [e("header", Dr, [e("div", Cr, [e("div", null, [e("h2", $r, o(E("pronunciationSettingsTitle", "发音设置")), 1), e("p", Tr, o(E("pronunciationSettingsDescription", "为翻译后的文字设置个人读法，仅应用于本地配音。")), 1)]), e("button", {
                type: "button",
                class: "shrink-0 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700 disabled:opacity-50",
                disabled: D.value,
                onClick: De
            }, o(E("pronunciationNewRule", "新建规则")), 9, Ar)]), e("form", {
                class: "mt-4 grid gap-2 sm:grid-cols-[minmax(180px,1.3fr)_minmax(120px,.7fr)_auto]",
                onSubmit: ke(Be, ["prevent"])
            }, [ae(e("input", {
                "onUpdate:modelValue": c[0] || (c[0] = s => p.value = s),
                type: "search",
                maxlength: "256",
                class: "min-w-0 rounded-lg border border-black/10 px-3 py-2 text-sm outline-none placeholder:text-black/30 focus:border-violet-400",
                placeholder: E("pronunciationSearchPlaceholder", "搜索匹配文字")
            }, null, 8, Pr), [
                [_e, p.value]
            ]), ae(e("select", {
                "onUpdate:modelValue": c[1] || (c[1] = s => u.value = s),
                class: "min-w-0 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-violet-400",
                "aria-label": E("pronunciationStatus", "状态")
            }, [e("option", Ir, o(E("preferenceAllStatuses", "全部")), 1), e("option", Rr, o(E("preferenceEnabled", "启用")), 1), e("option", Mr, o(E("preferenceDisabled", "禁用")), 1)], 8, Lr), [
                [Ie, u.value]
            ]), e("button", {
                type: "submit",
                class: "rounded-lg border border-black/10 px-4 py-2 text-sm font-medium text-black/65 hover:bg-neutral-50 disabled:opacity-50",
                disabled: D.value
            }, o(E("preferenceSearch", "搜索")), 9, Ur)], 32)]), C.value ? (d(), b("p", Vr, o(C.value), 1)) : N("", !0), D.value ? (d(), b("div", Or, o(E("pronunciationLoading", "加载中…")), 1)) : $.value.length ? (d(), b(ee, {
                key: 2
            }, [e("div", Gr, [e("table", Nr, [e("thead", jr, [e("tr", null, [e("th", zr, o(E("pronunciationMatchText", "匹配文字")), 1), e("th", qr, o(E("pronunciationTargetText", "纠正部分")), 1), e("th", Wr, o(E("pronunciationReading", "指定读法")), 1), e("th", Hr, o(E("pronunciationStatus", "状态")), 1), e("th", Kr, o(E("preferenceActions", "操作")), 1)])]), e("tbody", Zr, [(d(!0), b(ee, null, oe($.value, s => (d(), b("tr", {
                key: s.id,
                class: "text-sm hover:bg-neutral-50/60"
            }, [e("td", Qr, [e("span", {
                class: "block truncate",
                title: s.matchText
            }, o(s.matchText), 9, Yr)]), e("td", Xr, o(Ye(s)), 1), e("td", Jr, [e("span", {
                class: "block truncate font-mono text-xs",
                title: s.phoneme
            }, o(at(s)), 9, ec)]), e("td", tc, [G(ie, {
                "model-value": s.enabled,
                label: E("preferenceEnabled", "启用"),
                class: U(K.value.has(s.id) ? "pointer-events-none opacity-50" : ""),
                "onUpdate:modelValue": h => lt(s, h)
            }, null, 8, ["model-value", "label", "class", "onUpdate:modelValue"])]), e("td", lc, [e("div", nc, [e("button", {
                type: "button",
                class: "inline-flex h-8 w-8 items-center justify-center rounded-md text-black/55 hover:bg-black/5 hover:text-black",
                "aria-label": E("preferenceEdit", "编辑"),
                onClick: h => Se(s)
            }, "✎", 8, ac), e("button", {
                type: "button",
                class: "inline-flex h-8 w-8 items-center justify-center rounded-md text-red-500/80 hover:bg-red-50",
                "aria-label": E("preferenceDelete", "删除"),
                onClick: h => nt(s)
            }, "⌫", 8, oc)])])]))), 128))])])]), e("div", uc, [(d(!0), b(ee, null, oe($.value, s => (d(), b("article", {
                key: `mobile-${s.id}`,
                class: "rounded-lg border border-black/10 p-4"
            }, [e("div", sc, o(s.matchText), 1), e("div", ic, [e("span", rc, o(E("pronunciationTargetText", "纠正部分")), 1), e("span", null, o(Ye(s)), 1), e("span", cc, o(E("pronunciationReading", "指定读法")), 1), e("span", dc, o(at(s)), 1)]), e("div", bc, [G(ie, {
                "model-value": s.enabled,
                label: E("preferenceEnabled", "启用"),
                class: U(K.value.has(s.id) ? "pointer-events-none opacity-50" : ""),
                "onUpdate:modelValue": h => lt(s, h)
            }, null, 8, ["model-value", "label", "class", "onUpdate:modelValue"]), e("div", pc, [e("button", {
                type: "button",
                class: "rounded-md px-3 py-1.5 text-sm text-black/65 active:bg-black/5",
                onClick: h => Se(s)
            }, o(E("preferenceEdit", "编辑")), 9, vc), e("button", {
                type: "button",
                class: "rounded-md px-3 py-1.5 text-sm text-red-500 active:bg-red-50",
                onClick: h => nt(s)
            }, o(E("preferenceDelete", "删除")), 9, fc)])])]))), 128))])], 64)) : (d(), b("div", mc, o(E("pronunciationEmpty", "当前筛选条件下暂无个人发音规则。")), 1)), e("footer", gc, [e("span", xc, o(E("preferencePageLabel", "第 {page} 页").replace("{page}", String(W.value + 1))), 1), e("div", hc, [e("button", {
                type: "button",
                class: "rounded-lg border border-black/10 px-3 py-2 text-sm text-black/60 disabled:opacity-40",
                disabled: W.value === 0 || D.value,
                onClick: ye
            }, o(E("preferencePreviousPage", "上一页")), 9, yc), e("button", {
                type: "button",
                class: "rounded-lg border border-black/10 px-3 py-2 text-sm text-black/60 disabled:opacity-40",
                disabled: !B.value || D.value,
                onClick: Fe
            }, o(E("preferenceNextPage", "下一页")), 9, kc)])])]), (d(), Ve(wt, {
                to: "body"
            }, [Z.value ? (d(), b("div", {
                key: 0,
                class: "fixed inset-0 z-[2147483647] flex justify-end bg-black/40",
                onClick: ke(w, ["self"])
            }, [e("form", {
                class: "flex h-full w-full max-w-xl flex-col bg-white shadow-2xl",
                onSubmit: ke(tt, ["prevent"])
            }, [e("header", _c, [e("div", null, [e("h3", wc, o(T.value === null ? E("pronunciationNewRule", "新建规则") : E("pronunciationEditRule", "编辑发音规则")), 1), e("p", Fc, o(E("pronunciationEditorHint", "选择匹配文字中需要纠正的连续部分，再填写指定读法。")), 1)]), e("button", {
                type: "button",
                class: "rounded-md p-2 text-black/40 hover:bg-black/5",
                onClick: w
            }, "✕")]), e("div", Sc, [e("label", Ec, [Ge(o(E("pronunciationMatchText", "匹配文字")) + " ", 1), ae(e("textarea", {
                "onUpdate:modelValue": c[2] || (c[2] = s => ne.matchText = s),
                maxlength: "256",
                rows: "3",
                class: "mt-2 w-full resize-y rounded-lg border border-black/10 px-3 py-2.5 text-sm outline-none focus:border-violet-400",
                placeholder: E("pronunciationMatchPlaceholder", "例如：行行好")
            }, null, 8, Bc), [
                [_e, ne.matchText]
            ])]), e("div", null, [e("div", Dc, [e("span", Cc, o(E("pronunciationSelectTarget", "选择需要纠正的文字")), 1), e("div", $c, [e("div", {
                class: "inline-flex rounded-lg border border-black/10 bg-neutral-50 p-0.5",
                role: "group",
                "aria-label": E("pronunciationSelectionGranularity", "选择粒度")
            }, [e("button", {
                type: "button",
                class: U(["rounded-md px-2.5 py-1 text-xs font-medium", M.value === "primary" ? "bg-white text-violet-700 shadow-sm" : "text-black/45"]),
                onClick: c[3] || (c[3] = s => q("primary"))
            }, o(E("pronunciationPrimarySelection", "智能选择")), 3), e("button", {
                type: "button",
                class: U(["rounded-md px-2.5 py-1 text-xs font-medium", M.value === "fine" ? "bg-white text-violet-700 shadow-sm" : "text-black/45"]),
                onClick: c[4] || (c[4] = s => q("fine"))
            }, o(E("pronunciationFineSelection", "逐字精细")), 3)], 8, Tc), R.value ? (d(), b("button", {
                key: 0,
                type: "button",
                class: "text-sm font-medium text-violet-600",
                onClick: F
            }, o(E("pronunciationReselect", "重新选择")), 1)) : N("", !0)])]), ge.value.length ? (d(), b("div", {
                key: 0,
                class: "mt-2 flex min-h-14 flex-wrap content-start rounded-lg border border-black/10 bg-neutral-50 p-2",
                lang: "zh-CN",
                dir: "ltr",
                onPointerleave: ze
            }, [(d(!0), b(ee, null, oe(ge.value, (s, h) => (d(), b(ee, {
                key: `${s.start}-${s.end}-${s.text}`
            }, [s.selectable ? (d(), b("button", {
                key: 0,
                type: "button",
                "data-part-index": h,
                class: U(["min-h-10 min-w-8 select-none rounded px-2 text-base leading-10 outline-none transition-colors focus:ring-2 focus:ring-violet-400", qe(h) ? "bg-violet-600 text-white" : "hover:bg-violet-100"]),
                onPointerdown: ke(L => J(h), ["prevent"]),
                onPointerenter: L => Ce(h),
                onPointerup: ke(ze, ["prevent"]),
                onClick: ke(L => fe(h), ["prevent"]),
                onKeydown: L => Ne(L, h)
            }, o(s.text), 43, Ac)) : (d(), b("span", Pc, o(s.text), 1))], 64))), 128))], 32)) : (d(), b("p", Lc, o(E("pronunciationEnterMatchFirst", "请先输入匹配文字")), 1)), R.value ? (d(), b("p", Ic, o(ve.value), 1)) : Q.value ? (d(), b("p", Rc, o(Q.value), 1)) : N("", !0)]), j.value ? (d(), b("div", Mc, [e("div", Uc, [e("div", null, [e("div", Vc, o(E("pronunciationReading", "指定读法")), 1), e("p", Oc, o(xe.value), 1)]), e("span", Gc, o(j.value.composition === "whole-span" ? E("pronunciationWholeReading", "整体读法") : E("pronunciationUnitReading", "分段读法")), 1)]), (d(!0), b(ee, null, oe(j.value.units, (s, h) => (d(), b(ee, {
                key: `${s.sourceStart}-${s.sourceEnd}`
            }, [h > 0 ? (d(), b("button", {
                key: 0,
                type: "button",
                class: "mx-auto block rounded-md border border-dashed border-violet-300 px-2.5 py-1 text-xs font-medium text-violet-600 hover:bg-violet-50",
                onClick: L => et(h - 1)
            }, "↑ " + o(E("pronunciationMergeUnits", "合并相邻读法")), 9, Nc)) : N("", !0), e("article", jc, [e("div", zc, [e("span", qc, o(s.sourceText), 1), O(s).length ? (d(), b("div", Wc, [e("span", Hc, o(E("pronunciationSplitAt", "拆分于")), 1), (d(!0), b(ee, null, oe(O(s), L => (d(), b("button", {
                key: L,
                type: "button",
                class: "rounded border border-black/10 bg-white px-2 py-1 text-xs text-black/60 hover:border-violet-300 hover:text-violet-700",
                onClick: $e => je(h, L)
            }, o(be(s, L)), 9, Kc))), 128))])) : N("", !0)]), e("div", {
                class: U(["mt-3 grid gap-2", Re.value ? "sm:grid-cols-[minmax(0,1fr)_minmax(120px,.45fr)]" : ""])
            }, [e("label", Zc, [Ge(o(E("pronunciationPinyinSyllable", "Pinyin syllable")) + " ", 1), ae(e("input", {
                "onUpdate:modelValue": L => s.pronunciationInput = L,
                dir: "ltr",
                maxlength: "256",
                class: "mt-1.5 w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 font-mono text-sm outline-none focus:border-violet-400",
                placeholder: E("pronunciationPinyinPlaceholder", "Enter a Pinyin syllable"),
                onInput: m
            }, null, 40, Qc), [
                [_e, s.pronunciationInput]
            ])]), Re.value ? (d(), b("label", Yc, [Ge(o(E("pronunciationModifier", "声调")) + " ", 1), ae(e("select", {
                "onUpdate:modelValue": L => s.pronunciationModifier = L,
                class: "mt-1.5 w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-violet-400",
                onChange: m
            }, [e("option", Jc, o(E("pronunciationSelectModifier", "请选择")), 1), (d(!0), b(ee, null, oe(se(a).modifierOptions, L => (d(), b("option", {
                key: L,
                value: L
            }, o(Ee(L)), 9, ed))), 128))], 40, Xc), [
                [Ie, s.pronunciationModifier]
            ])])) : N("", !0)], 2)])], 64))), 128))])) : N("", !0), _.value ? (d(), b("p", td, [c[5] || (c[5] = Ge("SSML: ")), e("code", null, o(_.value.alphabet) + " \xB7 " + o(_.value.phoneme), 1)])) : N("", !0), A.value ? (d(), b("p", ld, o(A.value), 1)) : N("", !0)]), e("footer", nd, [e("button", {
                type: "button",
                class: "rounded-lg border border-black/10 px-4 py-2 text-sm font-medium text-black/65",
                onClick: w
            }, o(E("preferenceCancel", "取消")), 1), e("button", {
                type: "submit",
                class: "rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-40",
                disabled: !pe.value || I.value
            }, o(I.value ? E("pronunciationSaving", "保存中…") : E("preferenceSave", "保存")), 9, ad)])], 32)])) : N("", !0)]))], 64))
        }
    }),
    od = {
        class: "space-y-6 md:space-y-8",
        "data-testid": "subtitle-style-settings-panel"
    },
    ud = ["aria-label"],
    sd = ["aria-selected"],
    id = ["aria-selected"],
    rd = {
        class: "relative overflow-hidden rounded-xl bg-gray-900"
    },
    cd = {
        class: "absolute right-3 top-3 z-10 rounded-md bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm"
    },
    dd = {
        class: "relative aspect-video max-h-[240px] overflow-hidden bg-gray-900 md:max-h-none"
    },
    bd = ["src"],
    pd = {
        class: "rounded-xl border border-black/10 bg-white p-4 md:p-5"
    },
    vd = {
        class: "flex min-w-0 items-center gap-2 sm:gap-3"
    },
    fd = {
        class: "min-w-0 flex-1"
    },
    md = {
        class: "flex h-12 w-[76px] shrink-0 items-center rounded-xl border border-black/10 bg-white px-3 focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-100"
    },
    gd = ["value", "aria-label"],
    xd = {
        key: 0,
        class: "space-y-4 rounded-xl border border-black/10 bg-white p-4 md:p-5",
        "data-testid": "subtitle-style-bilingual-layout"
    },
    hd = {
        class: "text-sm font-semibold text-black md:text-[15px]"
    },
    yd = {
        class: "grid grid-cols-1 items-center gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(180px,0.8fr)] sm:gap-6"
    },
    kd = {
        class: "min-w-0 text-sm font-medium text-black/80"
    },
    _d = {
        class: "grid grid-cols-1 items-center gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(180px,0.8fr)] sm:gap-6"
    },
    wd = {
        class: "min-w-0 text-sm font-medium text-black/80"
    },
    Fd = {
        class: "flex h-12 w-full items-center rounded-xl border border-black/10 bg-white px-3 focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-100 sm:max-w-[180px] sm:ml-auto"
    },
    Sd = ["value", "aria-label"],
    Ed = {
        class: "grid grid-cols-1 items-center gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(180px,0.8fr)] sm:gap-6"
    },
    Bd = {
        class: "min-w-0 text-sm font-medium text-black/80"
    },
    Dd = {
        class: "space-y-4 rounded-xl border border-black/10 bg-white p-4 md:p-5"
    },
    Cd = {
        class: "space-y-1"
    },
    $d = {
        class: "text-sm font-semibold text-black md:text-[15px]"
    },
    Td = {
        key: 0,
        class: "text-xs text-black/50"
    },
    Ad = {
        class: "flex min-w-0 items-center gap-3"
    },
    Pd = {
        key: 0,
        class: "space-y-4 rounded-xl border border-black/10 bg-white p-4 md:p-5",
        "data-testid": "subtitle-style-original-section"
    },
    Ld = {
        class: "text-sm font-semibold text-black md:text-[15px]"
    },
    Id = {
        class: "flex items-center justify-between gap-3"
    },
    Rd = {
        class: "min-w-0 text-sm font-medium text-black/80"
    },
    Md = {
        class: "flex h-12 w-full items-center rounded-xl border border-black/10 bg-white px-3 focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-100"
    },
    Ud = ["value", "aria-label"],
    Vd = {
        class: "flex min-w-0 items-center gap-3"
    },
    Od = {
        class: "space-y-4 rounded-xl border border-black/10 bg-white p-4 md:p-5"
    },
    Gd = {
        class: "text-sm font-semibold text-black md:text-[15px]"
    },
    Nd = {
        class: "flex min-w-0 items-center gap-3"
    },
    jd = {
        class: "flex flex-wrap items-center justify-end gap-3 pb-2"
    },
    zd = 20,
    Ll = pt({
        __name: "SubtitleStyleSettingsPanel",
        props: {
            subtitleStyle: {
                type: Object,
                required: !0
            },
            bilingualSubtitleStyle: {
                type: Object,
                required: !0
            },
            subtitleSizePercent: {
                type: Number,
                required: !0
            },
            previewBgUrl: {
                type: String,
                required: !0
            },
            targetLanguage: {
                type: String,
                required: !0
            }
        },
        emits: ["update:subtitleStyle", "update:bilingualSubtitleStyle", "update:subtitleSizePercent", "restoreDefaults"],
        setup(r, {
            emit: t
        }) {
            const a = r,
                u = t,
                p = [50, 70, 80, 90, 100, 110, 120, 130, 150],
                k = g("translated"),
                $ = g(""),
                D = g(String(Sn)),
                C = g("80"),
                B = pt({
                    name: "SettingRow",
                    props: {
                        label: {
                            type: String,
                            required: !0
                        }
                    },
                    setup(c, {
                        slots: s
                    }) {
                        return () => {
                            var h;
                            return Gt("div", {
                                class: "grid grid-cols-1 items-center gap-2"
                            }, [Gt("label", {
                                class: "min-w-0 text-sm font-medium text-black/80"
                            }, c.label), Gt("div", {
                                class: "min-w-0"
                            }, (h = s.default) == null ? void 0 : h.call(s))])
                        }
                    }
                }),
                f = (c, s) => {
                    const h = Et.t(c);
                    if (typeof h != "string") return s;
                    const L = h.trim();
                    return !L || L === c ? s : L
                };
            function V(c) {
                return ["min-w-0 flex-1 rounded-lg px-3 py-2 text-center text-sm font-medium transition-colors sm:flex-none sm:px-4", c ? "bg-white text-violet-600 shadow-sm" : "text-black/60 hover:text-black"].join(" ")
            }
            const W = S(() => a.bilingualSubtitleStyle.original.followTranslatedStyle ? "pointer-events-none opacity-50" : "");
            function K(c) {
                u("update:subtitleStyle", Ft({ ...a.subtitleStyle,
                    ...c,
                    positionOffsets: { ...a.subtitleStyle.positionOffsets,
                        ...c.positionOffsets || {}
                    }
                }))
            }
            function Z(c) {
                u("update:bilingualSubtitleStyle", St({ ...a.bilingualSubtitleStyle,
                    ...c,
                    original: { ...a.bilingualSubtitleStyle.original,
                        ...c.original || {}
                    }
                }))
            }
            const T = S(() => [{
                    value: "top",
                    label: f("subtitleStylePositionTop", "Top")
                }, {
                    value: "middle",
                    label: f("subtitleStylePositionMiddle", "Middle")
                }, {
                    value: "bottom",
                    label: f("subtitleStylePositionBottom", "Bottom")
                }]),
                I = S(() => {
                    const c = Rn(a.targetLanguage);
                    return [c[0] || "none", "default", ...c.slice(1)].map(h => ({
                        value: h,
                        label: h === "none" ? f("subtitleStyleFontNone", "None") : h === "default" ? f("subtitleStyleFontDefault", "Default") : Mn(h)
                    }))
                }),
                A = S(() => [{
                    value: "#FFFFFF",
                    label: f("subtitleStyleColorWhite", "White")
                }, {
                    value: "#FFFF00",
                    label: f("subtitleStyleColorYellow", "Yellow")
                }, {
                    value: "#FFA500",
                    label: f("subtitleStyleColorOrange", "Orange")
                }, {
                    value: "#808080",
                    label: f("subtitleStyleColorGray", "Gray")
                }, {
                    value: "#D1D5DB",
                    label: f("subtitleStyleColorLightGray", "Light gray")
                }, {
                    value: "#00FF00",
                    label: f("subtitleStyleColorGreen", "Green")
                }, {
                    value: "#00FFFF",
                    label: f("subtitleStyleColorCyan", "Cyan")
                }, {
                    value: "#0000FF",
                    label: f("subtitleStyleColorBlue", "Blue")
                }, {
                    value: "#FF00FF",
                    label: f("subtitleStyleColorMagenta", "Magenta")
                }, {
                    value: "#FF0000",
                    label: f("subtitleStyleColorRed", "Red")
                }, {
                    value: "#000000",
                    label: f("subtitleStyleColorBlack", "Black")
                }]),
                Q = S(() => [{
                    value: 400,
                    label: "400"
                }, {
                    value: 500,
                    label: "500"
                }, {
                    value: 600,
                    label: "600"
                }, {
                    value: 700,
                    label: "700"
                }]),
                R = S(() => [{
                    value: 0,
                    label: "0%"
                }, {
                    value: 25,
                    label: "25%"
                }, {
                    value: 50,
                    label: "50%"
                }, {
                    value: 75,
                    label: "75%"
                }, {
                    value: 100,
                    label: "100%"
                }]),
                M = S(() => [{
                    value: "none",
                    label: f("subtitleStyleEdgeNone", "None")
                }, {
                    value: "shadow",
                    label: f("subtitleStyleEdgeShadow", "Shadow")
                }, {
                    value: "outline",
                    label: f("subtitleStyleEdgeOutline", "Outline")
                }]),
                j = S(() => [{
                    value: "translated-first",
                    label: f("subtitleStyleOrderTranslatedFirst", "Translation on top")
                }, {
                    value: "original-first",
                    label: f("subtitleStyleOrderOriginalFirst", "Original on top")
                }]),
                Y = S(() => [{
                    value: "left",
                    label: f("subtitleStyleTextAlignLeft", "Left")
                }, {
                    value: "center",
                    label: f("subtitleStyleTextAlignCenter", "Center")
                }, {
                    value: "right",
                    label: f("subtitleStyleTextAlignRight", "Right")
                }]),
                le = S(() => p.map(c => ({
                    value: c,
                    label: `${c}%`
                })));
            function te(c) {
                return c.map(s => ({
                    value: String(s.value),
                    text: s.label
                }))
            }
            const z = S(() => te(T.value)),
                re = S(() => te(I.value)),
                ue = S(() => te(A.value)),
                de = S(() => te(Q.value)),
                me = S(() => te(R.value)),
                ne = S(() => te(M.value)),
                ge = S(() => te(j.value)),
                Re = S(() => te(Y.value)),
                _ = S(() => te(le.value)),
                pe = S({
                    get: () => Math.max(0, T.value.findIndex(c => c.value === a.subtitleStyle.position)),
                    set: c => {
                        const s = T.value[c];
                        s && K({
                            position: s.value
                        })
                    }
                }),
                xe = S({
                    get: () => Math.max(0, I.value.findIndex(c => c.value === a.subtitleStyle.fontPreset)),
                    set: c => {
                        const s = I.value[c];
                        s && K({
                            fontPreset: s.value
                        })
                    }
                }),
                ve = S({
                    get: () => Math.max(0, A.value.findIndex(c => c.value === a.subtitleStyle.textColor)),
                    set: c => {
                        const s = A.value[c];
                        s && K({
                            textColor: s.value
                        })
                    }
                }),
                E = S({
                    get: () => Math.max(0, Q.value.findIndex(c => c.value === a.subtitleStyle.fontWeight)),
                    set: c => {
                        const s = Q.value[c];
                        s && K({
                            fontWeight: s.value
                        })
                    }
                }),
                Ee = S({
                    get: () => Math.max(0, A.value.findIndex(c => c.value === a.subtitleStyle.backgroundColor)),
                    set: c => {
                        const s = A.value[c];
                        s && K({
                            backgroundColor: s.value
                        })
                    }
                }),
                we = S({
                    get: () => Math.max(0, R.value.findIndex(c => c.value === a.subtitleStyle.backgroundOpacity)),
                    set: c => {
                        const s = R.value[c];
                        s && K({
                            backgroundOpacity: s.value
                        })
                    }
                }),
                he = S({
                    get: () => Math.max(0, M.value.findIndex(c => c.value === a.subtitleStyle.edgeStyle)),
                    set: c => {
                        const s = M.value[c];
                        s && K({
                            edgeStyle: s.value
                        })
                    }
                }),
                Be = S({
                    get: () => Math.max(0, le.value.findIndex(c => c.value === a.subtitleSizePercent)),
                    set: c => {
                        const s = le.value[c];
                        s && u("update:subtitleSizePercent", s.value)
                    }
                }),
                ye = S({
                    get: () => Math.max(0, j.value.findIndex(c => c.value === a.bilingualSubtitleStyle.order)),
                    set: c => {
                        const s = j.value[c];
                        s && Z({
                            order: s.value
                        })
                    }
                }),
                Fe = S({
                    get: () => Math.max(0, Y.value.findIndex(c => c.value === a.bilingualSubtitleStyle.textAlign)),
                    set: c => {
                        const s = Y.value[c];
                        s && Z({
                            textAlign: s.value
                        })
                    }
                }),
                De = S({
                    get: () => Math.max(0, I.value.findIndex(c => c.value === a.bilingualSubtitleStyle.original.fontPreset)),
                    set: c => {
                        const s = I.value[c];
                        s && Z({
                            original: {
                                fontPreset: s.value
                            }
                        })
                    }
                }),
                Se = S({
                    get: () => Math.max(0, A.value.findIndex(c => c.value === a.bilingualSubtitleStyle.original.textColor)),
                    set: c => {
                        const s = A.value[c];
                        s && Z({
                            original: {
                                textColor: s.value
                            }
                        })
                    }
                }),
                w = S({
                    get: () => Math.max(0, Q.value.findIndex(c => c.value === a.bilingualSubtitleStyle.original.fontWeight)),
                    set: c => {
                        const s = Q.value[c];
                        s && Z({
                            original: {
                                fontWeight: s.value
                            }
                        })
                    }
                }),
                F = S({
                    get: () => Math.max(0, M.value.findIndex(c => c.value === a.bilingualSubtitleStyle.original.edgeStyle)),
                    set: c => {
                        const s = M.value[c];
                        s && Z({
                            original: {
                                edgeStyle: s.value
                            }
                        })
                    }
                }),
                x = S(() => Ft({ ...a.subtitleStyle
                })),
                q = S(() => St(a.bilingualSubtitleStyle)),
                J = S(() => x.value.positionOffsets[x.value.position]),
                Ce = S(() => Math.max(8, Math.round(zd * a.subtitleSizePercent / 100))),
                ze = {
                    margin: "1%",
                    userSelect: "none",
                    wordSpacing: "normal",
                    wordBreak: "break-word",
                    boxSizing: "border-box"
                },
                fe = S(() => jn(x.value, Ce.value, {
                    bilingualEnabled: k.value === "bilingual",
                    bilingualStyle: q.value
                })),
                Ne = S(() => {
                    var c;
                    return zn(fe.value.cueDisplayStyle, ((c = fe.value.bilingual) == null ? void 0 : c.textAlign) ?? "center")
                }),
                qe = S(() => fe.value.cueStyle),
                P = S(() => f("subtitleStylePreviewText", "He thought this young man had great potential.")),
                m = S(() => f("subtitleStylePreviewOriginalText", "He thought this young man had great potential.")),
                O = S(() => {
                    const c = fe.value.bilingual;
                    if (!c) return [];
                    const s = {
                            role: "translated",
                            text: P.value,
                            style: { ...c.translatedStyle
                            }
                        },
                        h = {
                            role: "original",
                            text: m.value,
                            style: { ...c.originalStyle
                            }
                        },
                        L = q.value.order === "original-first" ? [h, s] : [s, h];
                    return L[1] && c.lineGapPx > 0 && (L[1] = { ...L[1],
                        style: { ...L[1].style,
                            "margin-top": `${c.lineGapPx}px`
                        }
                    }), L
                });
            function be(c, s) {
                const h = Number(typeof c == "string" ? c.trim() : c);
                return Number.isFinite(h) ? Math.max(0, Math.min(100, Math.round(h))) : s
            }
            function je(c) {
                K({
                    positionOffsets: { ...a.subtitleStyle.positionOffsets,
                        [a.subtitleStyle.position]: be(c, J.value)
                    }
                })
            }
            function et(c) {
                $.value = c, c.trim() !== "" && je(c)
            }
            function Qe() {
                const c = be($.value, J.value);
                je(c), $.value = String(c)
            }
            function tt(c, s) {
                const h = Number(typeof c == "string" ? c.trim() : c);
                return Number.isFinite(h) ? Math.max(En, Math.min(Bn, Math.round(h))) : s
            }
            function lt(c) {
                D.value = c, c.trim() !== "" && Z({
                    lineGapPx: tt(c, a.bilingualSubtitleStyle.lineGapPx)
                })
            }
            function nt() {
                const c = tt(D.value, a.bilingualSubtitleStyle.lineGapPx);
                Z({
                    lineGapPx: c
                }), D.value = String(c)
            }
            function Ye(c, s) {
                const h = Number(typeof c == "string" ? c.trim() : c);
                return Number.isFinite(h) ? Math.max(Dn, Math.min(Cn, Math.round(h))) : s
            }
            function at(c) {
                C.value = c, c.trim() !== "" && Z({
                    original: {
                        sizePercent: Ye(c, a.bilingualSubtitleStyle.original.sizePercent)
                    }
                })
            }
            function ot() {
                const c = Ye(C.value, a.bilingualSubtitleStyle.original.sizePercent);
                Z({
                    original: {
                        sizePercent: c
                    }
                }), C.value = String(c)
            }
            function Me(c) {
                Z({
                    original: {
                        followTranslatedStyle: c
                    }
                })
            }
            function v() {
                u("update:subtitleStyle", Vl()), u("update:bilingualSubtitleStyle", Ol()), u("update:subtitleSizePercent", 100), u("restoreDefaults")
            }
            return Ae(J, c => {
                $.value = String(c)
            }, {
                immediate: !0
            }), Ae(() => a.bilingualSubtitleStyle.lineGapPx, c => {
                D.value = String(c)
            }, {
                immediate: !0
            }), Ae(() => a.bilingualSubtitleStyle.original.sizePercent, c => {
                C.value = String(c)
            }, {
                immediate: !0
            }), (c, s) => (d(), b("div", od, [e("div", {
                class: "inline-flex w-full max-w-full rounded-xl border border-black/10 bg-neutral-50 p-1 sm:w-auto",
                role: "tablist",
                "aria-label": f("subtitleStyleEditorViewLabel", "Style editor view")
            }, [e("button", {
                type: "button",
                role: "tab",
                "aria-selected": k.value === "translated",
                class: U(V(k.value === "translated")),
                "data-testid": "subtitle-style-editor-translated",
                onClick: s[0] || (s[0] = h => k.value = "translated")
            }, o(f("subtitleStyleEditorViewTranslated", "Translation only")), 11, sd), e("button", {
                type: "button",
                role: "tab",
                "aria-selected": k.value === "bilingual",
                class: U(V(k.value === "bilingual")),
                "data-testid": "subtitle-style-editor-bilingual",
                onClick: s[1] || (s[1] = h => k.value = "bilingual")
            }, o(f("subtitleStyleEditorViewBilingual", "Bilingual")), 11, id)], 8, ud), e("section", rd, [e("span", cd, o(f("subtitleStylePreviewTitle", "Preview")), 1), e("div", dd, [e("img", {
                src: r.previewBgUrl,
                alt: "",
                class: "absolute inset-0 h-full w-full object-cover"
            }, null, 8, bd), s[22] || (s[22] = e("div", {
                class: "pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black/60"
            }, null, -1)), e("div", {
                class: "pointer-events-none absolute inset-0",
                style: ze
            }, [e("div", {
                style: it(Ne.value)
            }, [e("div", {
                style: it(qe.value),
                "data-testid": "subtitle-style-preview-cue"
            }, [k.value === "bilingual" && O.value.length > 1 ? (d(!0), b(ee, {
                key: 0
            }, oe(O.value, (h, L) => (d(), b("div", {
                key: `${h.role}-${L}`,
                class: U(h.role === "translated" ? "youtube-dubbing-cue-translated" : "youtube-dubbing-cue-original"),
                style: it(h.style)
            }, o(h.text), 7))), 128)) : (d(), b(ee, {
                key: 1
            }, [Ge(o(P.value), 1)], 64))], 4)], 4)])])]), e("section", pd, [G(se(B), {
                label: f("subtitleStylePosition", "Subtitle Position")
            }, {
                default: Pe(() => [e("div", vd, [e("div", fd, [G(Te, {
                    options: z.value,
                    modelValue: pe.value,
                    "onUpdate:modelValue": s[2] || (s[2] = h => pe.value = h),
                    label: f("subtitleStylePosition", "Subtitle Position"),
                    class: "w-full"
                }, null, 8, ["options", "modelValue", "label"])]), e("label", md, [e("input", {
                    value: $.value,
                    type: "number",
                    min: "0",
                    max: "100",
                    step: "1",
                    inputmode: "numeric",
                    "aria-label": `${f("subtitleStylePosition","Subtitle Position")} %`,
                    class: "w-full bg-transparent text-right text-sm text-black outline-none",
                    onInput: s[3] || (s[3] = h => et(h.target.value)),
                    onBlur: Qe,
                    onKeydown: s[4] || (s[4] = Je(ke(h => h.target.blur(), ["prevent"]), ["enter"]))
                }, null, 40, gd), s[23] || (s[23] = e("span", {
                    class: "ml-1 shrink-0 text-sm text-black/50"
                }, "%", -1))])])]),
                _: 1
            }, 8, ["label"])]), k.value === "bilingual" ? (d(), b("section", xd, [e("h3", hd, o(f("subtitleStyleLayoutSectionTitle", "Bilingual layout")), 1), e("div", yd, [e("label", kd, o(f("subtitleStyleOrder", "Subtitle order")), 1), G(Te, {
                options: ge.value,
                modelValue: ye.value,
                "onUpdate:modelValue": s[5] || (s[5] = h => ye.value = h),
                label: f("subtitleStyleOrder", "Subtitle order"),
                class: "w-full min-w-0"
            }, null, 8, ["options", "modelValue", "label"])]), e("div", _d, [e("label", wd, o(f("subtitleStyleLineGap", "Line spacing")), 1), e("label", Fd, [e("input", {
                value: D.value,
                type: "number",
                min: "0",
                max: "40",
                step: "1",
                inputmode: "numeric",
                "aria-label": f("subtitleStyleLineGap", "Line spacing"),
                class: "w-full bg-transparent text-right text-sm text-black outline-none",
                onInput: s[6] || (s[6] = h => lt(h.target.value)),
                onBlur: nt,
                onKeydown: s[7] || (s[7] = Je(ke(h => h.target.blur(), ["prevent"]), ["enter"]))
            }, null, 40, Sd), s[24] || (s[24] = e("span", {
                class: "ml-1 shrink-0 text-sm text-black/50"
            }, "px", -1))])]), e("div", Ed, [e("label", Bd, o(f("subtitleStyleTextAlign", "Horizontal alignment")), 1), G(Te, {
                options: Re.value,
                modelValue: Fe.value,
                "onUpdate:modelValue": s[8] || (s[8] = h => Fe.value = h),
                label: f("subtitleStyleTextAlign", "Horizontal alignment"),
                class: "w-full min-w-0"
            }, null, 8, ["options", "modelValue", "label"])])])) : N("", !0), e("div", {
                class: U(k.value === "bilingual" ? "grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5" : "grid grid-cols-1 gap-4")
            }, [e("section", Dd, [e("div", Cd, [e("h3", $d, o(f("subtitleStyleTranslatedSectionTitle", "Translation style")), 1), k.value === "bilingual" ? (d(), b("p", Td, o(f("subtitleStyleUsesCurrentSettings", "Uses current translation settings")), 1)) : N("", !0)]), G(se(B), {
                label: f("subtitleStyleFontFamily", "Font Family")
            }, {
                default: Pe(() => [G(Te, {
                    options: re.value,
                    modelValue: xe.value,
                    "onUpdate:modelValue": s[9] || (s[9] = h => xe.value = h),
                    label: f("subtitleStyleFontFamily", "Font Family"),
                    searchable: !0,
                    class: "w-full min-w-0"
                }, null, 8, ["options", "modelValue", "label"])]),
                _: 1
            }, 8, ["label"]), G(se(B), {
                label: f("subtitleStyleFontSize", "Font Size")
            }, {
                default: Pe(() => [G(Te, {
                    options: _.value,
                    modelValue: Be.value,
                    "onUpdate:modelValue": s[10] || (s[10] = h => Be.value = h),
                    label: f("subtitleStyleFontSize", "Font Size"),
                    class: "w-full min-w-0"
                }, null, 8, ["options", "modelValue", "label"])]),
                _: 1
            }, 8, ["label"]), G(se(B), {
                label: f("subtitleStyleTextColor", "Text Color")
            }, {
                default: Pe(() => [e("div", Ad, [e("span", {
                    class: "h-4 w-4 shrink-0 rounded-full border border-black/10",
                    style: it({
                        backgroundColor: r.subtitleStyle.textColor
                    })
                }, null, 4), G(Te, {
                    options: ue.value,
                    modelValue: ve.value,
                    "onUpdate:modelValue": s[11] || (s[11] = h => ve.value = h),
                    label: f("subtitleStyleTextColor", "Text Color"),
                    class: "min-w-0 flex-1"
                }, null, 8, ["options", "modelValue", "label"])])]),
                _: 1
            }, 8, ["label"]), G(se(B), {
                label: f("subtitleStyleFontWeight", "Font Weight")
            }, {
                default: Pe(() => [G(Te, {
                    options: de.value,
                    modelValue: E.value,
                    "onUpdate:modelValue": s[12] || (s[12] = h => E.value = h),
                    label: f("subtitleStyleFontWeight", "Font Weight"),
                    class: "w-full min-w-0"
                }, null, 8, ["options", "modelValue", "label"])]),
                _: 1
            }, 8, ["label"]), G(se(B), {
                label: f("subtitleStyleEdgeStyle", "Edge Style")
            }, {
                default: Pe(() => [G(Te, {
                    options: ne.value,
                    modelValue: he.value,
                    "onUpdate:modelValue": s[13] || (s[13] = h => he.value = h),
                    label: f("subtitleStyleEdgeStyle", "Edge Style"),
                    class: "w-full min-w-0"
                }, null, 8, ["options", "modelValue", "label"])]),
                _: 1
            }, 8, ["label"])]), k.value === "bilingual" ? (d(), b("section", Pd, [e("h3", Ld, o(f("subtitleStyleOriginalSectionTitle", "Original style")), 1), e("div", Id, [e("label", Rd, o(f("subtitleStyleFollowTranslated", "Match translation style")), 1), G(ie, {
                "model-value": r.bilingualSubtitleStyle.original.followTranslatedStyle,
                label: f("subtitleStyleFollowTranslated", "Match translation style"),
                "onUpdate:modelValue": Me
            }, null, 8, ["model-value", "label"])]), G(se(B), {
                label: f("subtitleStyleFontFamily", "Font Family")
            }, {
                default: Pe(() => [e("div", {
                    class: U(W.value)
                }, [G(Te, {
                    options: re.value,
                    modelValue: De.value,
                    "onUpdate:modelValue": s[14] || (s[14] = h => De.value = h),
                    label: f("subtitleStyleFontFamily", "Font Family"),
                    searchable: !0,
                    class: "w-full min-w-0"
                }, null, 8, ["options", "modelValue", "label"])], 2)]),
                _: 1
            }, 8, ["label"]), G(se(B), {
                label: f("subtitleStyleOriginalSizePercent", "Font size ratio")
            }, {
                default: Pe(() => [e("label", Md, [e("input", {
                    value: C.value,
                    type: "number",
                    min: "50",
                    max: "150",
                    step: "1",
                    inputmode: "numeric",
                    "aria-label": f("subtitleStyleOriginalSizePercent", "Font size ratio"),
                    class: "w-full bg-transparent text-right text-sm text-black outline-none",
                    onInput: s[15] || (s[15] = h => at(h.target.value)),
                    onBlur: ot,
                    onKeydown: s[16] || (s[16] = Je(ke(h => h.target.blur(), ["prevent"]), ["enter"]))
                }, null, 40, Ud), s[25] || (s[25] = e("span", {
                    class: "ml-1 shrink-0 text-sm text-black/50"
                }, "%", -1))])]),
                _: 1
            }, 8, ["label"]), G(se(B), {
                label: f("subtitleStyleTextColor", "Text Color")
            }, {
                default: Pe(() => [e("div", Vd, [e("span", {
                    class: "h-4 w-4 shrink-0 rounded-full border border-black/10",
                    style: it({
                        backgroundColor: r.bilingualSubtitleStyle.original.followTranslatedStyle ? r.subtitleStyle.textColor : r.bilingualSubtitleStyle.original.textColor
                    })
                }, null, 4), e("div", {
                    class: U(["min-w-0 flex-1", W.value])
                }, [G(Te, {
                    options: ue.value,
                    modelValue: Se.value,
                    "onUpdate:modelValue": s[17] || (s[17] = h => Se.value = h),
                    label: f("subtitleStyleTextColor", "Text Color"),
                    class: "min-w-0 w-full"
                }, null, 8, ["options", "modelValue", "label"])], 2)])]),
                _: 1
            }, 8, ["label"]), G(se(B), {
                label: f("subtitleStyleFontWeight", "Font Weight")
            }, {
                default: Pe(() => [e("div", {
                    class: U(W.value)
                }, [G(Te, {
                    options: de.value,
                    modelValue: w.value,
                    "onUpdate:modelValue": s[18] || (s[18] = h => w.value = h),
                    label: f("subtitleStyleFontWeight", "Font Weight"),
                    class: "w-full min-w-0"
                }, null, 8, ["options", "modelValue", "label"])], 2)]),
                _: 1
            }, 8, ["label"]), G(se(B), {
                label: f("subtitleStyleEdgeStyle", "Edge Style")
            }, {
                default: Pe(() => [e("div", {
                    class: U(W.value)
                }, [G(Te, {
                    options: ne.value,
                    modelValue: F.value,
                    "onUpdate:modelValue": s[19] || (s[19] = h => F.value = h),
                    label: f("subtitleStyleEdgeStyle", "Edge Style"),
                    class: "w-full min-w-0"
                }, null, 8, ["options", "modelValue", "label"])], 2)]),
                _: 1
            }, 8, ["label"])])) : N("", !0)], 2), e("section", Od, [e("h3", Gd, o(f("subtitleStyleSharedBackgroundSectionTitle", "Shared background")), 1), G(se(B), {
                label: f("subtitleStyleBackgroundColor", "Background Color")
            }, {
                default: Pe(() => [e("div", Nd, [e("span", {
                    class: "h-4 w-4 shrink-0 rounded-full border border-black/10",
                    style: it({
                        backgroundColor: r.subtitleStyle.backgroundColor
                    })
                }, null, 4), G(Te, {
                    options: ue.value,
                    modelValue: Ee.value,
                    "onUpdate:modelValue": s[20] || (s[20] = h => Ee.value = h),
                    label: f("subtitleStyleBackgroundColor", "Background Color"),
                    class: "min-w-0 flex-1"
                }, null, 8, ["options", "modelValue", "label"])])]),
                _: 1
            }, 8, ["label"]), G(se(B), {
                label: f("subtitleStyleBackgroundOpacity", "Background Opacity")
            }, {
                default: Pe(() => [G(Te, {
                    options: me.value,
                    modelValue: we.value,
                    "onUpdate:modelValue": s[21] || (s[21] = h => we.value = h),
                    label: f("subtitleStyleBackgroundOpacity", "Background Opacity"),
                    class: "w-full min-w-0"
                }, null, 8, ["options", "modelValue", "label"])]),
                _: 1
            }, 8, ["label"])]), e("div", jd, [e("button", {
                type: "button",
                class: "inline-flex h-11 items-center justify-center rounded-xl border border-black/10 bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-neutral-50 active:bg-neutral-100",
                "data-testid": "subtitle-style-restore-defaults",
                onClick: v
            }, o(f("subtitleStyleRestoreDefaults", "Restore defaults")), 1)])]))
        }
    });
class qd extends Ul {
    async getEmailNotificationSetting() {
        try {
            return (await _l.get("/api/v2/user/email-notification/setting")).data
        } catch (t) {
            throw console.error("get email notification setting occur error", t), t
        }
    }
    async updateEmailNotificationSetting(t) {
        try {
            const a = await _l.post("/api/v2/user/email-notification/setting", {
                notifyEnabled: t
            });
            return a.status >= 200 && a.status < 300
        } catch (a) {
            throw console.error("update email notification setting occur error", a), a
        }
    }
}
const [h0, jt] = Ml("EmailNotificationApiService", () => new qd);
function Wd(r, t) {
    return !t.notifySettingsSaved && !t.notifyStyleChange ? null : {
        id: r,
        dirtyFields: [...t.dirtyFields],
        notifySettingsSaved: !!t.notifySettingsSaved,
        notifyStyleChange: !!t.notifyStyleChange,
        savedSettings: null,
        status: "pending"
    }
}
function Hd(r, t) {
    const a = {};
    return t.has("showSubtitle") && (a.showSubtitle = r.showSubtitle), t.has("subtitleSizePercent") && (a.subtitleSize = r.subtitleSize), t.has("subtitleStyle") && (a.subtitleStyle = r.subtitleStyle ? { ...r.subtitleStyle
    } : void 0), t.has("bilingualSubtitleStyle") && (a.bilingualSubtitleStyle = r.bilingualSubtitleStyle ? { ...r.bilingualSubtitleStyle,
        original: { ...r.bilingualSubtitleStyle.original
        }
    } : void 0), t.has("subtitlePriority") && (a.subtitlePriority = r.subtitlePriority), t.has("skipTranslationWhenSameLanguage") && (a.skipTranslationWhenSameLanguage = r.skipTranslationWhenSameLanguage), t.has("userSubtitleSegmentationEnabled") && (a.userSubtitleSegmentationEnabled = r.userSubtitleSegmentationEnabled), t.has("disabledSites") && (a.disabledSites = Array.isArray(r.disabledSites) ? [...r.disabledSites] : []), a
}
function Il(r) {
    if (r.length === 0 || r.some(k => k.status === "pending")) return null;
    const a = r.splice(0, r.length).filter(k => k.status === "fulfilled" && k.savedSettings),
        u = a[a.length - 1];
    if (!(u != null && u.savedSettings)) return null;
    const p = new Set;
    return a.forEach(k => {
        k.dirtyFields.forEach($ => p.add($))
    }), {
        notifySettingsSaved: a.some(k => k.notifySettingsSaved),
        notifyStyleChange: a.some(k => k.notifyStyleChange),
        savedSettings: u.savedSettings,
        settingsSavedMessage: {
            settings: Hd(u.savedSettings, p),
            dirtyFields: Array.from(p),
            source: "options"
        }
    }
}
function Kd(r) {
    let t = !1,
        a = 0,
        u = 0;
    const p = new Set,
        k = [];
    function $() {
        return k.length > 0
    }
    function D() {
        return a > 0 || t || $()
    }
    function C() {
        if (D()) return;
        const T = Array.from(p);
        p.clear(), T.forEach(I => I())
    }
    function B() {
        return D() ? new Promise(T => {
            p.add(T)
        }) : Promise.resolve()
    }
    function f(T) {
        const I = r.getState(),
            A = {};
        return T.has("showSubtitle") && (A.showSubtitle = I.showSubtitle), T.has("subtitleSizePercent") && (A.subtitleSize = r.percentToSubtitleSize(I.subtitleSizePercent)), T.has("subtitleStyle") && (A.subtitleStyle = r.normalizeSubtitleStyleConfig({ ...I.subtitleStyle
        })), T.has("bilingualSubtitleStyle") && (A.bilingualSubtitleStyle = r.normalizeBilingualSubtitleStyleConfig({ ...I.bilingualSubtitleStyle,
            original: { ...I.bilingualSubtitleStyle.original
            }
        })), T.has("subtitlePriority") && (A.subtitlePriority = I.subtitlePriority), T.has("skipTranslationWhenSameLanguage") && (A.skipTranslationWhenSameLanguage = I.skipTranslationWhenSameLanguage), T.has("userSubtitleSegmentationEnabled") && (A.userSubtitleSegmentationEnabled = I.userSubtitleSegmentationEnabled), T.has("disabledSites") && (A.disabledSites = [...I.disabledSites]), A
    }
    function V(T) {
        const I = new Set(T.dirtyFields);
        return I.size === 0 ? Promise.resolve({}) : Promise.resolve().then(() => r.saveSettingsPatch(f(I)))
    }
    async function W(T) {
        if (T.notifyStyleChange) try {
            await r.broadcastStyleChange({
                showSubtitle: T.savedSettings.showSubtitle,
                subtitleSize: T.savedSettings.subtitleSize,
                subtitleStyle: T.savedSettings.subtitleStyle,
                bilingualSubtitleStyle: T.savedSettings.bilingualSubtitleStyle
            })
        } catch (I) {
            console.error("广播字幕样式变更失败:", I)
        }
        if (T.notifySettingsSaved) try {
            await r.broadcastSettingsSaved(T.settingsSavedMessage)
        } catch (I) {
            console.error("广播设置保存事件失败:", I)
        }
    }
    async function K() {
        if (t) return;
        const T = Il(k);
        if (!T) {
            C();
            return
        }
        t = !0;
        try {
            let I = T;
            for (; I;) await W(I), I = Il(k)
        } finally {
            t = !1, C()
        }
    }
    function Z(T) {
        if (!T) return K(), Promise.resolve();
        if (T.dirtyFields.length === 0) return Promise.resolve();
        const I = Wd(++u, T);
        return I && k.push(I), a += 1, V(T).then(R => {
            I && (I.savedSettings = R, I.status = "fulfilled", K())
        }).catch(R => {
            throw I && (I.status = "rejected", K()), R
        }).finally(() => {
            a -= 1, C()
        })
    }
    return {
        isBusy: D,
        persist: Z,
        waitForIdle: B
    }
}
function Zd(r) {
    let t = !1,
        a = !1,
        u = null;
    async function p() {
        for (; !t && a;) {
            if (await r.waitForSaveQueueIdle(), t) return;
            a = !1;
            const D = await r.loadLatestSettings();
            if (t) return;
            if (r.isSaveQueueBusy()) {
                a = !0;
                continue
            }
            await r.syncSettingsState(D)
        }
    }
    function k() {
        return t ? Promise.resolve() : (a = !0, u || (u = p().finally(() => {
            u = null, a && !t && k()
        })), u)
    }
    function $() {
        t = !0, a = !1
    }
    return {
        dispose: $,
        requestResync: k
    }
}
async function Qd(r, t) {
    const a = r.value;
    r.value = !0;
    try {
        await t(), await $n()
    } finally {
        r.value = a
    }
}
function Yd(r, t) {
    const a = r.toLowerCase();
    return a.includes("safari") && !a.includes("chrome") && !a.includes("chromium") ? {
        type: "instructions",
        message: t.safariTip
    } : a.includes("edg") || a.includes("edge") ? {
        type: "confirm-and-open",
        url: "edge://extensions/shortcuts",
        message: t.edgeTip
    } : a.includes("firefox") ? {
        type: "confirm-and-open",
        url: "about:addons",
        message: t.firefoxTip
    } : {
        type: "open",
        url: "chrome://extensions/shortcuts"
    }
}
async function Xd(r) {
    const t = Yd(r.userAgent, r.messages);
    if (t.type === "instructions") {
        await r.showMessage({
            title: r.messages.title,
            text: t.message,
            icon: "info",
            confirmButtonText: r.messages.dismissButton
        });
        return
    }
    t.type === "confirm-and-open" && await r.showMessage({
        title: r.messages.title,
        text: t.message,
        icon: "info",
        confirmButtonText: r.messages.actionButton
    });
    try {
        await r.createTab({
            url: t.url
        })
    } catch (a) {
        console.error("[ShortcutSettingsNavigator] Failed to open browser shortcut settings", a), await r.showMessage({
            title: r.messages.title,
            text: r.messages.genericTip,
            icon: "warning",
            confirmButtonText: r.messages.dismissButton
        })
    }
}
const Jd = {
        key: 0,
        class: "flex h-screen flex-col overflow-hidden bg-neutral-100"
    },
    eb = {
        class: "flex h-16 shrink-0 items-center gap-3 border-b border-black/10 bg-white px-6"
    },
    tb = {
        class: "text-xs text-black/30"
    },
    lb = {
        class: "flex flex-1 overflow-hidden"
    },
    nb = {
        class: "w-64 shrink-0 border-r border-black/10 bg-white px-4 py-6 space-y-1"
    },
    ab = {
        class: "flex-1 overflow-y-auto"
    },
    ob = {
        key: 0,
        class: "mx-auto max-w-[896px] px-8 py-8 lg:px-16 space-y-8"
    },
    ub = {
        key: 1,
        class: "mx-auto w-full max-w-[1024px] px-4 py-8 lg:px-6"
    },
    sb = {
        key: 2,
        class: "mx-auto w-full max-w-[1024px] px-4 py-8 lg:px-6"
    },
    ib = {
        key: 3,
        class: "mx-auto max-w-[896px] px-16 py-8 space-y-6"
    },
    rb = {
        class: "text-lg font-semibold text-black"
    },
    cb = {
        class: "mt-1 text-sm text-black/50"
    },
    db = {
        class: "flex gap-3"
    },
    bb = ["placeholder"],
    pb = {
        key: 0,
        class: "overflow-hidden rounded-lg border border-black/10 bg-white"
    },
    vb = {
        class: "w-full"
    },
    fb = {
        class: "border-b border-black/5 bg-neutral-50"
    },
    mb = {
        class: "px-5 py-3 text-left text-xs font-medium uppercase tracking-wider text-black/40"
    },
    gb = {
        class: "w-24 px-5 py-3 text-right text-xs font-medium uppercase tracking-wider text-black/40"
    },
    xb = {
        class: "divide-y divide-black/5"
    },
    hb = {
        class: "px-5 py-3 text-sm text-black"
    },
    yb = {
        class: "px-5 py-3 text-right"
    },
    kb = ["onClick"],
    _b = {
        class: "text-black/30 group-hover:text-red-500 transition-colors",
        width: "16",
        height: "16",
        fill: "none",
        viewBox: "0 0 16 16",
        style: {
            "min-width": "16px",
            "min-height": "16px"
        }
    },
    wb = {
        key: 1,
        class: "flex flex-col items-center justify-center rounded-lg border border-dashed border-black/10 bg-white py-12"
    },
    Fb = {
        class: "mt-3 text-sm text-black/30"
    },
    Sb = {
        key: 4,
        class: "mx-auto max-w-[896px] px-16 py-8 space-y-6"
    },
    Eb = {
        class: "text-lg font-semibold text-black"
    },
    Bb = {
        class: "mt-1 text-sm text-black/50"
    },
    Db = {
        class: "rounded-lg border border-black/10 bg-white"
    },
    Cb = {
        class: "flex items-center justify-between gap-6 border-b border-black/5 p-5"
    },
    $b = {
        class: "min-w-0"
    },
    Tb = {
        class: "text-sm font-medium text-black"
    },
    Ab = {
        class: "mt-1 text-sm text-black/50"
    },
    Pb = {
        key: 0,
        class: "h-[18px] w-[32px] animate-pulse rounded-full bg-black/10"
    },
    Lb = {
        class: "flex items-center justify-between gap-6 border-b border-black/5 p-5"
    },
    Ib = {
        class: "min-w-0"
    },
    Rb = {
        class: "text-sm font-medium text-black"
    },
    Mb = {
        class: "mt-1 text-sm text-black/50"
    },
    Ub = {
        class: "shrink-0"
    },
    Vb = {
        class: "flex items-center justify-between gap-6 border-b border-black/5 p-5"
    },
    Ob = {
        class: "min-w-0"
    },
    Gb = {
        class: "text-sm font-medium text-black"
    },
    Nb = {
        class: "mt-1 text-sm text-black/50"
    },
    jb = {
        class: "shrink-0"
    },
    zb = {
        class: "px-5 pb-5 pt-4"
    },
    qb = {
        class: "text-sm font-medium text-black"
    },
    Wb = {
        class: "mt-0.5 text-xs text-black/50"
    },
    Hb = {
        class: "mt-4 space-y-3"
    },
    Kb = {
        key: 0,
        class: "h-2 w-2 rounded-full bg-violet-600"
    },
    Zb = {
        class: "text-sm font-medium text-black"
    },
    Qb = {
        class: "text-xs font-medium text-black/50"
    },
    Yb = {
        key: 0,
        class: "h-2 w-2 rounded-full bg-violet-600"
    },
    Xb = {
        class: "text-sm font-medium text-black"
    },
    Jb = {
        class: "text-xs font-medium text-black/50"
    },
    ep = {
        class: "min-w-0"
    },
    tp = {
        class: "block text-sm font-medium text-black"
    },
    lp = {
        class: "mt-1 block text-sm text-black/50"
    },
    np = {
        key: 0,
        class: "text-sm text-red-500"
    },
    ap = {
        key: 1,
        class: "flex h-screen flex-col overflow-hidden bg-[#F7F7FA] text-black"
    },
    op = {
        class: "mobile-options-main flex-1 overflow-y-auto px-4 pb-5 pt-5"
    },
    up = {
        key: 0,
        class: "space-y-5"
    },
    sp = {
        class: "text-[22px] font-semibold leading-tight text-black"
    },
    ip = {
        class: "mt-2 text-sm leading-6 text-black/50"
    },
    rp = {
        class: "overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm shadow-black/[0.03]"
    },
    cp = {
        class: "flex items-center justify-between gap-4 border-b border-black/5 p-4"
    },
    dp = {
        class: "min-w-0"
    },
    bp = {
        class: "text-[15px] font-semibold text-black"
    },
    pp = {
        class: "mt-1 text-sm leading-6 text-black/50"
    },
    vp = {
        key: 0,
        class: "h-[18px] w-[32px] animate-pulse rounded-full bg-black/10"
    },
    fp = {
        class: "flex items-center justify-between gap-4 border-b border-black/5 p-4"
    },
    mp = {
        class: "min-w-0"
    },
    gp = {
        class: "text-[15px] font-semibold text-black"
    },
    xp = {
        class: "mt-1 text-sm leading-6 text-black/50"
    },
    hp = {
        class: "shrink-0"
    },
    yp = {
        class: "flex items-center justify-between gap-4 border-b border-black/5 p-4"
    },
    kp = {
        class: "min-w-0"
    },
    _p = {
        class: "text-[15px] font-semibold text-black"
    },
    wp = {
        class: "mt-1 text-sm leading-6 text-black/50"
    },
    Fp = {
        class: "shrink-0"
    },
    Sp = {
        class: "p-4"
    },
    Ep = {
        class: "text-[15px] font-semibold text-black"
    },
    Bp = {
        class: "mt-1 text-sm leading-6 text-black/50"
    },
    Dp = {
        class: "mt-4 space-y-3"
    },
    Cp = {
        key: 0,
        class: "h-2.5 w-2.5 rounded-full bg-violet-500"
    },
    $p = {
        class: "min-w-0"
    },
    Tp = {
        class: "block text-[15px] font-semibold text-black"
    },
    Ap = {
        class: "mt-1 block text-sm leading-6 text-black/50"
    },
    Pp = {
        key: 0,
        class: "h-2.5 w-2.5 rounded-full bg-violet-500"
    },
    Lp = {
        class: "min-w-0"
    },
    Ip = {
        class: "block text-[15px] font-semibold text-black"
    },
    Rp = {
        class: "mt-1 block text-sm leading-6 text-black/50"
    },
    Mp = {
        class: "min-w-0"
    },
    Up = {
        class: "block text-[15px] font-semibold text-black"
    },
    Vp = {
        class: "mt-1 block text-sm leading-6 text-black/50"
    },
    Op = {
        key: 0,
        class: "text-sm text-red-500"
    },
    Gp = {
        key: 1,
        class: "space-y-4"
    },
    Np = {
        class: "flex items-center gap-3"
    },
    jp = ["aria-label"],
    zp = {
        class: "min-w-0 text-[22px] font-semibold leading-tight text-black"
    },
    qp = {
        key: 2,
        class: "space-y-5"
    },
    Wp = {
        key: 3,
        class: "space-y-5"
    },
    Hp = {
        key: 4,
        class: "space-y-6"
    },
    Kp = {
        class: "flex items-center gap-3"
    },
    Zp = ["aria-label"],
    Qp = {
        class: "min-w-0 text-[22px] font-semibold leading-tight text-black"
    },
    Yp = {
        class: "text-sm leading-6 text-black/50"
    },
    Xp = {
        class: "flex gap-3"
    },
    Jp = ["placeholder"],
    e0 = {
        key: 0,
        class: "overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm shadow-black/[0.03]"
    },
    t0 = {
        class: "min-w-0 truncate text-sm font-medium text-black"
    },
    l0 = ["onClick", "aria-label"],
    n0 = {
        class: "text-black/30 group-active:text-red-500 transition-colors",
        width: "16",
        height: "16",
        fill: "none",
        viewBox: "0 0 16 16",
        style: {
            "min-width": "16px",
            "min-height": "16px"
        }
    },
    a0 = {
        key: 1,
        class: "flex min-h-[252px] flex-col items-center justify-center rounded-xl border border-black/10 bg-white py-12 shadow-sm shadow-black/[0.03]"
    },
    o0 = {
        class: "mt-5 text-sm text-black/30"
    },
    u0 = {
        class: "max-w-full truncate"
    },
    s0 = {
        class: "max-w-full truncate"
    },
    i0 = {
        class: "max-w-full truncate"
    },
    r0 = {
        class: "max-w-full truncate"
    },
    c0 = {
        class: "max-w-full truncate"
    },
    _t = 20,
    Rl = "(max-width: 767px)",
    d0 = pt({
        __name: "App",
        setup(r) {
            const t = [50, 70, 80, 90, 100, 110, 120, 130, 150],
                a = wl(),
                u = g("preferences"),
                p = g(me()),
                k = g(!1),
                $ = g(100),
                D = g(_t),
                C = g(a.toLanguage),
                B = vt(Vl()),
                f = vt(Ol()),
                V = g(!0),
                W = g("0.0.0"),
                K = g(""),
                Z = g(""),
                T = g(!0),
                I = g(!1),
                A = g(!0),
                Q = g(!1),
                R = g(""),
                M = g("ai"),
                j = g(!1),
                Y = g(!0);
            let le, te;
            const z = g([]),
                re = g(""),
                ue = S(() => !V.value && Fl(C.value, globalThis.__DUBBING_I18N_GET_UI_LANGUAGE__())),
                de = S(() => A.value || Q.value || !I.value);
            function me() {
                return typeof window > "u" ? !1 : typeof window.matchMedia != "function" ? window.innerWidth <= 767 : window.matchMedia(Rl).matches
            }
            function ne() {
                p.value = me()
            }
            function ge() {
                ne(), !(typeof window > "u" || typeof window.matchMedia != "function") && (te = window.matchMedia(Rl), typeof te.addEventListener == "function" ? te.addEventListener("change", ne) : te.addListener(ne))
            }
            function Re() {
                te && (typeof te.removeEventListener == "function" ? te.removeEventListener("change", ne) : te.removeListener(ne), te = void 0)
            }
            const _ = (P, m) => {
                const O = Et.t(P);
                if (typeof O != "string") return m;
                const be = O.trim();
                return !be || be === P ? m : be
            };
            function pe(P) {
                Object.assign(B, Ft(P))
            }
            function xe(P) {
                const m = St(P);
                Object.assign(f, m, {
                    original: { ...m.original
                    }
                })
            }
            function ve(P) {
                $.value = P, D.value = E(P)
            }
            function E(P) {
                return Math.max(8, Math.round(_t * P / 100))
            }
            function Ee(P) {
                const m = Math.round(Math.max(8, P) / _t * 100);
                return t.reduce((O, be) => Math.abs(be - m) < Math.abs(O - m) ? be : O)
            }
            function we(P) {
                return An(P)
            }
            async function he() {
                const P = we(re.value);
                if (P) {
                    if (z.value.includes(P)) {
                        re.value = "";
                        return
                    }
                    z.value.push(P), re.value = "", await ye()
                }
            }
            async function Be(P) {
                z.value.splice(P, 1), await ye()
            }
            async function ye() {
                await fe.persist({
                    dirtyFields: ["disabledSites"],
                    notifySettingsSaved: !0
                })
            }
            function Fe(P) {
                const m = { ...wl(),
                    ...P || {}
                };
                C.value = m.toLanguage || a.toLanguage, !Fl(C.value, globalThis.__DUBBING_I18N_GET_UI_LANGUAGE__()) && u.value === "pronunciationSettings" && (u.value = "preferences"), k.value = !!m.showSubtitle, $.value = Ee(m.subtitleSize || _t), D.value = Math.max(8, m.subtitleSize || _t), z.value = Array.isArray(m.disabledSites) ? [...m.disabledSites] : [], M.value = m.subtitlePriority === "platform" ? "platform" : "ai", j.value = typeof m.skipTranslationWhenSameLanguage == "boolean" ? m.skipTranslationWhenSameLanguage : !1, Y.value = typeof m.userSubtitleSegmentationEnabled == "boolean" ? m.userSubtitleSegmentationEnabled : !0;
                const O = Un(Ft(m.subtitleStyle), C.value);
                Object.assign(B, O);
                const be = St(m.bilingualSubtitleStyle);
                Object.assign(f, be, {
                    original: { ...be.original
                    }
                })
            }
            async function De(P) {
                await Qd(V, () => {
                    Fe(P)
                })
            }
            async function Se() {
                const P = await dt.getItem("local:settings");
                await De(P)
            }
            async function w() {
                A.value = !0, R.value = "";
                try {
                    T.value = await jt().getEmailNotificationSetting(), I.value = !0
                } catch (P) {
                    I.value = !1, R.value = _("emailNotificationSaveFailed", "保存失败，请稍后重试。"), console.error("加载邮件通知设置失败:", P)
                } finally {
                    A.value = !1
                }
            }
            async function F(P) {
                if (de.value || P === T.value) return;
                const m = T.value;
                T.value = P, R.value = "", Q.value = !0;
                try {
                    await jt().updateEmailNotificationSetting(P);
                    try {
                        T.value = await jt().getEmailNotificationSetting()
                    } catch (O) {
                        R.value = _("emailNotificationSaveFailed", "保存失败，请稍后重试。"), console.error("刷新邮件通知设置失败:", O)
                    }
                } catch (O) {
                    T.value = m, R.value = _("emailNotificationSaveFailed", "保存失败，请稍后重试。"), console.error("更新邮件通知设置失败:", O)
                } finally {
                    Q.value = !1
                }
            }
            function x(P) {
                j.value = P
            }
            function q(P) {
                Y.value = P
            }
            async function J() {
                await Xd({
                    userAgent: navigator.userAgent,
                    messages: {
                        title: _("shortcutSettings", "快捷键设置"),
                        genericTip: _("browserShortcutSettingsTip", "请在浏览器扩展设置中配置快捷键"),
                        safariTip: _("safariShortcutSettingsTip", "请在 Safari > 偏好设置 > 扩展中设置快捷键"),
                        edgeTip: _("edgeShortcutSettingsTip", "正在打开 Edge 扩展快捷键设置页面"),
                        firefoxTip: _("firefoxShortcutSettingsTip", "正在打开 Firefox 附加组件页面"),
                        actionButton: _("shortcutSettings", "快捷键设置"),
                        dismissButton: _("back", "返回")
                    },
                    createTab: P => Oe.tabs.create(P),
                    showMessage: P => Pn.fire(P)
                })
            }
            async function Ce(P) {
                const m = await Oe.tabs.query({});
                await Promise.allSettled(m.filter(O => typeof O.id == "number").map(O => zt.notifySubtitleStyleChange(P, O.id)))
            }
            async function ze(P) {
                const m = await Oe.tabs.query({});
                await Promise.allSettled(m.filter(O => typeof O.id == "number").map(O => zt.notifySettingsSaved(P, O.id)))
            }
            const fe = Kd({
                    async broadcastSettingsSaved(P) {
                        await ze(P)
                    },
                    async broadcastStyleChange(P) {
                        await Ce(P)
                    },
                    getState() {
                        return {
                            disabledSites: [...z.value],
                            showSubtitle: k.value,
                            skipTranslationWhenSameLanguage: j.value,
                            userSubtitleSegmentationEnabled: Y.value,
                            subtitlePriority: M.value,
                            subtitleSizePercent: $.value,
                            subtitleStyle: { ...B,
                                positionOffsets: { ...B.positionOffsets
                                }
                            },
                            bilingualSubtitleStyle: { ...f,
                                original: { ...f.original
                                }
                            }
                        }
                    },
                    normalizeSubtitleStyleConfig: Ft,
                    normalizeBilingualSubtitleStyleConfig: St,
                    percentToSubtitleSize: E,
                    async saveSettingsPatch(P) {
                        return Gl().patchSettings(P)
                    }
                }),
                Ne = Zd({
                    isSaveQueueBusy() {
                        return fe.isBusy()
                    },
                    async loadLatestSettings() {
                        return dt.getItem("local:settings")
                    },
                    syncSettingsState: De,
                    async waitForSaveQueueIdle() {
                        await fe.waitForIdle()
                    }
                });
            function qe() {
                le == null || le(), le = dt.watch("local:settings", () => {
                    Ne.requestResync()
                })
            }
            return Ae($, async () => {
                V.value || (D.value = E($.value), await fe.persist({
                    dirtyFields: ["subtitleSizePercent"],
                    notifyStyleChange: !0
                }))
            }), Ae(B, async () => {
                V.value || await fe.persist({
                    dirtyFields: ["subtitleStyle"],
                    notifyStyleChange: !0
                })
            }, {
                deep: !0
            }), Ae(f, async () => {
                V.value || await fe.persist({
                    dirtyFields: ["bilingualSubtitleStyle"],
                    notifyStyleChange: !0
                })
            }, {
                deep: !0
            }), Ae(M, async () => {
                V.value || await fe.persist({
                    dirtyFields: ["subtitlePriority"],
                    notifySettingsSaved: !0
                })
            }), Ae(j, async () => {
                V.value || await fe.persist({
                    dirtyFields: ["skipTranslationWhenSameLanguage"],
                    notifySettingsSaved: !0
                })
            }), Ae(Y, async () => {
                V.value || await fe.persist({
                    dirtyFields: ["userSubtitleSegmentationEnabled"],
                    notifySettingsSaved: !0
                })
            }), Pt(async () => {
                try {
                    ge(), W.value = Oe.runtime.getManifest().version, K.value = Oe.runtime.getURL("icon/48.png"), Z.value = Oe.runtime.getURL("/images/subtitle_preview_bg.png"), qe(), await Promise.all([Se(), w()])
                } catch (P) {
                    console.error("加载 options 设置失败:", P)
                } finally {
                    V.value = !1
                }
            }), Tn(() => {
                Re(), le == null || le(), le = void 0, Ne.dispose()
            }), (P, m) => p.value ? (d(), b("div", ap, [m[37] || (m[37] = rt('<header class="flex h-[72px] shrink-0 items-center gap-3 border-b border-black/10 bg-white px-5" data-v-101993d0><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" class="shrink-0" data-v-101993d0><rect width="24" height="24" rx="5.4" fill="url(#mobileOptionsLogoPaint)" data-v-101993d0></rect><path d="M10.2656 7.24376C9.46817 6.71212 8.39999 7.28379 8.39999 8.24222V15.7578C8.39999 16.7162 9.46817 17.2879 10.2656 16.7562L15.9023 12.9985C16.6148 12.5235 16.6148 11.4765 15.9023 11.0015L10.2656 7.24376Z" fill="white" data-v-101993d0></path><defs data-v-101993d0><linearGradient id="mobileOptionsLogoPaint" x1="4.5" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse" data-v-101993d0><stop stop-color="#6408F6" data-v-101993d0></stop><stop offset="1" stop-color="#CB51FF" data-v-101993d0></stop></linearGradient></defs></svg><span class="min-w-0 flex-1 truncate text-[17px] font-semibold text-black" data-v-101993d0>YouTube Dubbing</span></header>', 1)), e("main", op, [u.value === "preferences" ? (d(), b("section", up, [e("div", null, [e("h2", sp, o(_("preferencesTitle", "基本设置")), 1), e("p", ip, o(_("preferencesDescription", "在这里管理基础偏好设置。")), 1)]), e("section", rp, [e("div", cp, [e("div", dp, [e("h3", bp, o(_("emailNotificationLabel", "邮件通知")), 1), e("p", pp, o(_("emailNotificationDescription", "字幕识别完成后，通过邮件通知我。")), 1)]), e("div", {
                class: U(["shrink-0", de.value ? "pointer-events-none opacity-60" : ""])
            }, [I.value ? (d(), Ve(ie, {
                key: 1,
                "model-value": T.value,
                label: _("emailNotificationLabel", "邮件通知"),
                "onUpdate:modelValue": F
            }, null, 8, ["model-value", "label"])) : (d(), b("div", vp))], 2)]), e("div", fp, [e("div", mp, [e("h3", gp, o(_("skipTranslationWhenSameLanguageLabel", "同语言字幕是跳过翻译")), 1), e("p", xp, o(_("skipTranslationWhenSameLanguageDescription", "开启后，当字幕语言与目标语言一致时，直接配音，不再翻译。")), 1)]), e("div", hp, [G(ie, {
                "model-value": j.value,
                label: _("skipTranslationWhenSameLanguageLabel", "同语言字幕是跳过翻译"),
                "onUpdate:modelValue": x
            }, null, 8, ["model-value", "label"])])]), e("div", yp, [e("div", kp, [e("h3", _p, o(_("userSubtitleSegmentationEnabledLabel", "用户字幕智能断句")), 1), e("p", wp, o(_("userSubtitleSegmentationEnabledDescription", "开启后，对用户编辑或本地上传的字幕自动断句；关闭后保留原始分段。")), 1)]), e("div", Fp, [G(ie, {
                "model-value": Y.value,
                label: _("userSubtitleSegmentationEnabledLabel", "用户字幕智能断句"),
                "onUpdate:modelValue": q
            }, null, 8, ["model-value", "label"])])]), e("div", Sp, [e("h3", Ep, o(_("subtitlePriorityTitle", "字幕翻译优先级")), 1), e("p", Bp, o(_("subtitlePriorityDescription", "选择优先使用哪种字幕来源进行翻译。")), 1), e("div", Dp, [e("label", {
                class: U(["flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-4 transition-colors", M.value === "ai" ? "border-violet-500 bg-white" : "border-black/10 bg-white"]),
                onClick: m[8] || (m[8] = O => M.value = "ai")
            }, [e("span", {
                class: U(["relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full", M.value === "ai" ? "border-2 border-violet-500" : "border border-black/20"])
            }, [M.value === "ai" ? (d(), b("span", Cp)) : N("", !0)], 2), e("span", $p, [e("span", Tp, o(_("subtitlePriorityAiSubtitle", "插件 AI 识别字幕")), 1), e("span", Ap, o(_("subtitlePriorityAiSubtitleDesc", "优先使用插件自身的 AI 语音识别生成的字幕，准确度更高。")), 1)])], 2), e("label", {
                class: U(["flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-4 transition-colors", M.value === "platform" ? "border-violet-500 bg-white" : "border-black/10 bg-white"]),
                onClick: m[9] || (m[9] = O => M.value = "platform")
            }, [e("span", {
                class: U(["relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full", M.value === "platform" ? "border-2 border-violet-500" : "border border-black/20"])
            }, [M.value === "platform" ? (d(), b("span", Pp)) : N("", !0)], 2), e("span", Lp, [e("span", Ip, o(_("subtitlePriorityPlatformSubtitle", "平台自带字幕")), 1), e("span", Rp, o(_("subtitlePriorityPlatformSubtitleDesc", "优先使用视频平台提供的原始字幕。")), 1)])], 2)])]), e("button", {
                type: "button",
                class: "flex w-full items-center justify-between gap-4 p-4 text-left transition-colors active:bg-black/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-500",
                onClick: J
            }, [e("span", Mp, [e("span", Up, o(_("shortcutSettings", "快捷键设置")), 1), e("span", Vp, o(_("browserShortcutSettingsTip", "请在浏览器扩展设置中配置快捷键")), 1)]), m[27] || (m[27] = e("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                class: "shrink-0 text-black/35",
                "aria-hidden": "true"
            }, [e("rect", {
                width: "20",
                height: "16",
                x: "2",
                y: "4",
                rx: "2"
            }), e("path", {
                d: "M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10"
            })], -1))])]), R.value ? (d(), b("p", Op, o(R.value), 1)) : N("", !0)])) : N("", !0), u.value === "subtitleStyle" ? (d(), b("section", Gp, [e("div", Np, [e("button", {
                type: "button",
                class: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-black transition-colors active:bg-black/5",
                "aria-label": _("preferencesSectionTitle", "基本设置"),
                onClick: m[10] || (m[10] = O => u.value = "preferences")
            }, m[28] || (m[28] = [e("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none"
            }, [e("path", {
                d: "M15 5 8 12l7 7",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            })], -1)]), 8, jp), e("h2", zp, o(_("subtitleStyleSectionTitle", "字幕样式")), 1)]), G(Ll, {
                "subtitle-style": B,
                "bilingual-subtitle-style": f,
                "subtitle-size-percent": $.value,
                "preview-bg-url": Z.value,
                "target-language": C.value,
                "onUpdate:subtitleStyle": pe,
                "onUpdate:bilingualSubtitleStyle": xe,
                "onUpdate:subtitleSizePercent": ve
            }, null, 8, ["subtitle-style", "bilingual-subtitle-style", "subtitle-size-percent", "preview-bg-url", "target-language"])])) : N("", !0), u.value === "translationPreferences" ? (d(), b("section", qp, [G(Bl)])) : N("", !0), u.value === "pronunciationSettings" && ue.value ? (d(), b("section", Wp, [G(Pl)])) : N("", !0), u.value === "disabledSites" ? (d(), b("section", Hp, [e("div", Kp, [e("button", {
                type: "button",
                class: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-black transition-colors active:bg-black/5",
                "aria-label": _("preferencesSectionTitle", "基本设置"),
                onClick: m[11] || (m[11] = O => u.value = "preferences")
            }, m[29] || (m[29] = [e("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none"
            }, [e("path", {
                d: "M15 5 8 12l7 7",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            })], -1)]), 8, Zp), e("h2", Qp, o(_("disabledSitesTitle", "禁用站点管理")), 1)]), e("p", Yp, o(_("disabledSitesDescription", "在以下站点上，悬浮球将不会显示。你可以在此添加或移除禁用的站点。")), 1), e("div", Xp, [ae(e("input", {
                "onUpdate:modelValue": m[12] || (m[12] = O => re.value = O),
                type: "text",
                placeholder: _("disabledSitesPlaceholder", "输入域名，例如 youtube.com"),
                class: "min-w-0 flex-1 rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder-black/30 outline-none transition-colors focus:border-violet-400 focus:ring-2 focus:ring-violet-100",
                onKeydown: Je(he, ["enter"])
            }, null, 40, Jp), [
                [_e, re.value]
            ]), e("button", {
                onClick: he,
                class: "shrink-0 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition-colors active:bg-violet-800"
            }, o(_("disabledSitesAdd", "添加")), 1)]), z.value.length > 0 ? (d(), b("div", e0, [(d(!0), b(ee, null, oe(z.value, (O, be) => (d(), b("div", {
                key: O,
                class: "flex items-center justify-between gap-3 border-b border-black/5 px-4 py-3 last:border-b-0"
            }, [e("span", t0, o(O), 1), e("button", {
                onClick: je => Be(be),
                class: "rounded-md p-2 transition-colors active:bg-red-50 group",
                "aria-label": _("disabledSitesActions", "操作")
            }, [(d(), b("svg", n0, m[30] || (m[30] = [rt('<g data-v-101993d0><g clip-path="url(#mobileDeleteClip)" stroke-linejoin="round" stroke-width="1.2" stroke="currentColor" data-v-101993d0><path d="M3 3.332v11.333h10V3.332H3Z" data-v-101993d0></path><path stroke-linecap="square" d="M6.667 6.668v4.333M9.333 6.668v4.333M1.333 3.332h13.334" data-v-101993d0></path><path d="m5.333 3.332 1.097-2h3.162l1.075 2H5.333Z" data-v-101993d0></path></g><defs data-v-101993d0><clipPath id="mobileDeleteClip" data-v-101993d0><path fill="currentColor" d="M0 0h16v16H0z" data-v-101993d0></path></clipPath></defs></g>', 1)])))], 8, l0)]))), 128))])) : (d(), b("div", a0, [m[31] || (m[31] = e("span", {
                class: "flex h-12 w-12 items-center justify-center rounded-full border-2 border-black/10 text-black/20"
            }, [e("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "30",
                height: "30",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }, [e("path", {
                d: "M8 12h8"
            })])], -1)), e("p", o0, o(_("disabledSitesEmpty", "暂无禁用站点")), 1)]))])) : N("", !0)]), e("nav", {
                class: U(["grid shrink-0 border-t border-black/10 bg-white px-1 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2", ue.value ? "grid-cols-5" : "grid-cols-4"])
            }, [ue.value ? (d(), b("button", {
                key: 0,
                type: "button",
                class: U(["flex flex-col items-center justify-center gap-1 rounded-lg py-2 text-[11px] font-medium transition-colors", u.value === "pronunciationSettings" ? "text-violet-600" : "text-black/55"]),
                onClick: m[13] || (m[13] = O => u.value = "pronunciationSettings")
            }, [m[32] || (m[32] = e("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                fill: "none"
            }, [e("path", {
                d: "M9 18V5l10-2v13",
                stroke: "currentColor",
                "stroke-width": "1.8",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }), e("circle", {
                cx: "6",
                cy: "18",
                r: "3",
                stroke: "currentColor",
                "stroke-width": "1.8"
            }), e("circle", {
                cx: "16",
                cy: "16",
                r: "3",
                stroke: "currentColor",
                "stroke-width": "1.8"
            })], -1)), e("span", u0, o(_("optionsNavPronunciationShort", "发音")), 1)], 2)) : N("", !0), e("button", {
                type: "button",
                class: U(["flex flex-col items-center justify-center gap-1 rounded-lg py-2 text-[12px] font-medium transition-colors", u.value === "preferences" ? "text-violet-600" : "text-black/55"]),
                onClick: m[14] || (m[14] = O => u.value = "preferences")
            }, [m[33] || (m[33] = e("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                fill: "none"
            }, [e("path", {
                d: "m12 3 2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8L12 3Z",
                stroke: "currentColor",
                "stroke-width": "1.8",
                "stroke-linejoin": "round"
            })], -1)), e("span", s0, o(_("optionsNavPreferencesShort", "基础")), 1)], 2), e("button", {
                type: "button",
                class: U(["flex flex-col items-center justify-center gap-1 rounded-lg py-2 text-[12px] font-medium transition-colors", u.value === "subtitleStyle" ? "text-violet-600" : "text-black/55"]),
                onClick: m[15] || (m[15] = O => u.value = "subtitleStyle")
            }, [m[34] || (m[34] = e("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                fill: "none"
            }, [e("rect", {
                x: "4",
                y: "5",
                width: "16",
                height: "4",
                rx: "1.2",
                stroke: "currentColor",
                "stroke-width": "1.8"
            }), e("rect", {
                x: "4",
                y: "15",
                width: "16",
                height: "4",
                rx: "1.2",
                stroke: "currentColor",
                "stroke-width": "1.8"
            }), e("path", {
                d: "M8 9v6M16 9v6",
                stroke: "currentColor",
                "stroke-width": "1.8",
                "stroke-linecap": "round"
            })], -1)), e("span", i0, o(_("optionsNavSubtitleShort", "字幕")), 1)], 2), e("button", {
                type: "button",
                class: U(["flex flex-col items-center justify-center gap-1 rounded-lg py-2 text-[12px] font-medium transition-colors", u.value === "translationPreferences" ? "text-violet-600" : "text-black/55"]),
                onClick: m[16] || (m[16] = O => u.value = "translationPreferences")
            }, [m[35] || (m[35] = e("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                fill: "none"
            }, [e("path", {
                d: "m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6",
                stroke: "currentColor",
                "stroke-width": "1.8",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            })], -1)), e("span", r0, o(_("optionsNavAiShort", "AI")), 1)], 2), e("button", {
                type: "button",
                class: U(["flex flex-col items-center justify-center gap-1 rounded-lg py-2 text-[12px] font-medium transition-colors", u.value === "disabledSites" ? "text-violet-600" : "text-black/55"]),
                onClick: m[17] || (m[17] = O => u.value = "disabledSites")
            }, [m[36] || (m[36] = e("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                fill: "none"
            }, [e("circle", {
                cx: "12",
                cy: "12",
                r: "8",
                stroke: "currentColor",
                "stroke-width": "1.8"
            }), e("path", {
                d: "M7 17 17 7",
                stroke: "currentColor",
                "stroke-width": "1.8",
                "stroke-linecap": "round"
            })], -1)), e("span", c0, o(_("optionsNavSitesShort", "站点")), 1)], 2)], 2)])) : (d(), b("div", Jd, [e("header", eb, [m[18] || (m[18] = rt('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" data-v-101993d0><rect width="24" height="24" rx="5.4" fill="url(#optionsLogoPaint)" data-v-101993d0></rect><path d="M10.2656 7.24376C9.46817 6.71212 8.39999 7.28379 8.39999 8.24222V15.7578C8.39999 16.7162 9.46817 17.2879 10.2656 16.7562L15.9023 12.9985C16.6148 12.5235 16.6148 11.4765 15.9023 11.0015L10.2656 7.24376Z" fill="white" data-v-101993d0></path><defs data-v-101993d0><linearGradient id="optionsLogoPaint" x1="4.5" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse" data-v-101993d0><stop stop-color="#6408F6" data-v-101993d0></stop><stop offset="1" stop-color="#CB51FF" data-v-101993d0></stop></linearGradient></defs></svg><span class="text-lg font-semibold text-black" data-v-101993d0>YouTube Dubbing</span>', 2)), e("span", tb, "V" + o(W.value), 1)]), e("div", lb, [e("aside", nb, [e("div", {
                class: U(["flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors", u.value === "preferences" ? "bg-purple-50 text-violet-600" : "text-black/60 hover:bg-neutral-50 hover:text-black"]),
                onClick: m[0] || (m[0] = O => u.value = "preferences")
            }, [m[19] || (m[19] = e("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }, [e("path", {
                d: "M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 0 0-5-5.91V4a1 1 0 1 0-2 0v1.09A6 6 0 0 0 6 11v3.2a2 2 0 0 1-.6 1.4L4 17h5"
            }), e("path", {
                d: "M9 17a3 3 0 0 0 6 0"
            })], -1)), Ge(" " + o(_("preferencesSectionTitle", "基本设置")), 1)], 2), e("div", {
                class: U(["flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors", u.value === "subtitleStyle" ? "bg-purple-50 text-violet-600" : "text-black/60 hover:bg-neutral-50 hover:text-black"]),
                onClick: m[1] || (m[1] = O => u.value = "subtitleStyle")
            }, [m[20] || (m[20] = rt('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-101993d0><rect x="2" y="16" width="20" height="4" rx="1" data-v-101993d0></rect><rect x="2" y="4" width="20" height="4" rx="1" data-v-101993d0></rect><line x1="6" y1="20" x2="6" y2="16" data-v-101993d0></line><line x1="14" y1="8" x2="14" y2="4" data-v-101993d0></line></svg>', 1)), Ge(" " + o(_("subtitleStyleSectionTitle", "字幕样式")), 1)], 2), e("div", {
                class: U(["flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors", u.value === "translationPreferences" ? "bg-purple-50 text-violet-600" : "text-black/60 hover:bg-neutral-50 hover:text-black"]),
                onClick: m[2] || (m[2] = O => u.value = "translationPreferences")
            }, [m[21] || (m[21] = rt('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-101993d0><path d="m5 8 6 6" data-v-101993d0></path><path d="m4 14 6-6 2-3" data-v-101993d0></path><path d="M2 5h12" data-v-101993d0></path><path d="M7 2h1" data-v-101993d0></path><path d="m22 22-5-10-5 10" data-v-101993d0></path><path d="M14 18h6" data-v-101993d0></path></svg>', 1)), Ge(" " + o(_("translationPreferencesSectionTitle", "AI 翻译")), 1)], 2), ue.value ? (d(), b("div", {
                key: 0,
                class: U(["flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors", u.value === "pronunciationSettings" ? "bg-purple-50 text-violet-600" : "text-black/60 hover:bg-neutral-50 hover:text-black"]),
                onClick: m[3] || (m[3] = O => u.value = "pronunciationSettings")
            }, [m[22] || (m[22] = e("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }, [e("path", {
                d: "M9 18V5l10-2v13"
            }), e("circle", {
                cx: "6",
                cy: "18",
                r: "3"
            }), e("circle", {
                cx: "16",
                cy: "16",
                r: "3"
            })], -1)), Ge(" " + o(_("pronunciationSettingsSectionTitle", "发音设置")), 1)], 2)) : N("", !0), e("div", {
                class: U(["flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors", u.value === "disabledSites" ? "bg-purple-50 text-violet-600" : "text-black/60 hover:bg-neutral-50 hover:text-black"]),
                onClick: m[4] || (m[4] = O => u.value = "disabledSites")
            }, [m[23] || (m[23] = e("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }, [e("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }), e("line", {
                x1: "4.93",
                y1: "4.93",
                x2: "19.07",
                y2: "19.07"
            })], -1)), Ge(" " + o(_("disabledSitesSectionTitle", "禁用站点")), 1)], 2)]), e("main", ab, [u.value === "subtitleStyle" ? (d(), b("div", ob, [G(Ll, {
                "subtitle-style": B,
                "bilingual-subtitle-style": f,
                "subtitle-size-percent": $.value,
                "preview-bg-url": Z.value,
                "target-language": C.value,
                "onUpdate:subtitleStyle": pe,
                "onUpdate:bilingualSubtitleStyle": xe,
                "onUpdate:subtitleSizePercent": ve
            }, null, 8, ["subtitle-style", "bilingual-subtitle-style", "subtitle-size-percent", "preview-bg-url", "target-language"])])) : N("", !0), u.value === "translationPreferences" ? (d(), b("div", ub, [G(Bl)])) : N("", !0), u.value === "pronunciationSettings" && ue.value ? (d(), b("div", sb, [G(Pl)])) : N("", !0), u.value === "disabledSites" ? (d(), b("div", ib, [e("div", null, [e("h2", rb, o(_("disabledSitesTitle", "禁用站点管理")), 1), e("p", cb, o(_("disabledSitesDescription", "在以下站点上，悬浮球将不会显示。你可以在此添加或移除禁用的站点。")), 1)]), e("div", db, [ae(e("input", {
                "onUpdate:modelValue": m[5] || (m[5] = O => re.value = O),
                type: "text",
                placeholder: _("disabledSitesPlaceholder", "输入域名，例如 youtube.com"),
                class: "flex-1 rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm text-black placeholder-black/30 outline-none transition-colors focus:border-violet-400 focus:ring-2 focus:ring-violet-100",
                onKeydown: Je(he, ["enter"])
            }, null, 40, bb), [
                [_e, re.value]
            ]), e("button", {
                onClick: he,
                class: "shrink-0 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-700 active:bg-violet-800"
            }, o(_("disabledSitesAdd", "添加")), 1)]), z.value.length > 0 ? (d(), b("div", pb, [e("table", vb, [e("thead", null, [e("tr", fb, [e("th", mb, o(_("disabledSitesDomain", "域名")), 1), e("th", gb, o(_("disabledSitesActions", "操作")), 1)])]), e("tbody", xb, [(d(!0), b(ee, null, oe(z.value, (O, be) => (d(), b("tr", {
                key: O,
                class: "transition-colors hover:bg-neutral-50/50"
            }, [e("td", hb, o(O), 1), e("td", yb, [e("button", {
                onClick: je => Be(be),
                class: "rounded-md p-1.5 transition-colors hover:bg-red-50 group"
            }, [(d(), b("svg", _b, m[24] || (m[24] = [rt('<g data-v-101993d0><g clip-path="url(#deletea)" stroke-linejoin="round" stroke-width="1.2" stroke="currentColor" data-v-101993d0><path d="M3 3.332v11.333h10V3.332H3Z" data-v-101993d0></path><path stroke-linecap="square" d="M6.667 6.668v4.333M9.333 6.668v4.333M1.333 3.332h13.334" data-v-101993d0></path><path d="m5.333 3.332 1.097-2h3.162l1.075 2H5.333Z" data-v-101993d0></path></g><defs data-v-101993d0><clipPath id="deletea" data-v-101993d0><path fill="currentColor" d="M0 0h16v16H0z" data-v-101993d0></path></clipPath></defs></g>', 1)])))], 8, kb)])]))), 128))])])])) : (d(), b("div", wb, [m[25] || (m[25] = e("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "40",
                height: "40",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                class: "text-black/15"
            }, [e("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }), e("path", {
                d: "M8 12h8"
            })], -1)), e("p", Fb, o(_("disabledSitesEmpty", "暂无禁用站点")), 1)]))])) : N("", !0), u.value === "preferences" ? (d(), b("div", Sb, [e("div", null, [e("h2", Eb, o(_("preferencesTitle", "基本设置")), 1), e("p", Bb, o(_("preferencesDescription", "在这里管理基础偏好设置。")), 1)]), e("section", Db, [e("div", Cb, [e("div", $b, [e("h3", Tb, o(_("emailNotificationLabel", "邮件通知")), 1), e("p", Ab, o(_("emailNotificationDescription", "字幕识别完成后，通过邮件通知我。")), 1)]), e("div", {
                class: U(["shrink-0", de.value ? "pointer-events-none opacity-60" : ""])
            }, [I.value ? (d(), Ve(ie, {
                key: 1,
                "model-value": T.value,
                label: _("emailNotificationLabel", "邮件通知"),
                "onUpdate:modelValue": F
            }, null, 8, ["model-value", "label"])) : (d(), b("div", Pb))], 2)]), e("div", Lb, [e("div", Ib, [e("h3", Rb, o(_("skipTranslationWhenSameLanguageLabel", "同语言字幕是跳过翻译")), 1), e("p", Mb, o(_("skipTranslationWhenSameLanguageDescription", "开启后，当字幕语言与目标语言一致时，直接配音，不再翻译。")), 1)]), e("div", Ub, [G(ie, {
                "model-value": j.value,
                label: _("skipTranslationWhenSameLanguageLabel", "同语言字幕是跳过翻译"),
                "onUpdate:modelValue": x
            }, null, 8, ["model-value", "label"])])]), e("div", Vb, [e("div", Ob, [e("h3", Gb, o(_("userSubtitleSegmentationEnabledLabel", "用户字幕智能断句")), 1), e("p", Nb, o(_("userSubtitleSegmentationEnabledDescription", "开启后，对用户编辑或本地上传的字幕自动断句；关闭后保留原始分段。")), 1)]), e("div", jb, [G(ie, {
                "model-value": Y.value,
                label: _("userSubtitleSegmentationEnabledLabel", "用户字幕智能断句"),
                "onUpdate:modelValue": q
            }, null, 8, ["model-value", "label"])])]), e("div", zb, [e("h3", qb, o(_("subtitlePriorityTitle", "字幕翻译优先级")), 1), e("p", Wb, o(_("subtitlePriorityDescription", "选择优先使用哪种字幕来源进行翻译。")), 1), e("div", Hb, [e("label", {
                class: U(["flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3", M.value === "ai" ? "border-violet-600" : "border-black/10"]),
                onClick: m[6] || (m[6] = O => M.value = "ai")
            }, [e("span", {
                class: U(["relative flex h-4 w-4 shrink-0 items-center justify-center rounded-full", M.value === "ai" ? "border-2 border-violet-600" : "border border-black/20"])
            }, [M.value === "ai" ? (d(), b("span", Kb)) : N("", !0)], 2), e("div", null, [e("p", Zb, o(_("subtitlePriorityAiSubtitle", "插件 AI 识别字幕")), 1), e("p", Qb, o(_("subtitlePriorityAiSubtitleDesc", "优先使用插件自身的 AI 语音识别生成的字幕，准确度更高。")), 1)])], 2), e("label", {
                class: U(["flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3", M.value === "platform" ? "border-violet-600" : "border-black/10"]),
                onClick: m[7] || (m[7] = O => M.value = "platform")
            }, [e("span", {
                class: U(["relative flex h-4 w-4 shrink-0 items-center justify-center rounded-full", M.value === "platform" ? "border-2 border-violet-600" : "border border-black/20"])
            }, [M.value === "platform" ? (d(), b("span", Yb)) : N("", !0)], 2), e("div", null, [e("p", Xb, o(_("subtitlePriorityPlatformSubtitle", "平台自带字幕")), 1), e("p", Jb, o(_("subtitlePriorityPlatformSubtitleDesc", "优先使用视频平台提供的原始字幕。")), 1)])], 2)])]), e("button", {
                type: "button",
                class: "flex w-full items-center justify-between gap-6 p-5 text-left transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-500",
                onClick: J
            }, [e("span", ep, [e("span", tp, o(_("shortcutSettings", "快捷键设置")), 1), e("span", lp, o(_("browserShortcutSettingsTip", "请在浏览器扩展设置中配置快捷键")), 1)]), m[26] || (m[26] = e("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                class: "shrink-0 text-black/35",
                "aria-hidden": "true"
            }, [e("rect", {
                width: "20",
                height: "16",
                x: "2",
                y: "4",
                rx: "2"
            }), e("path", {
                d: "M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10"
            })], -1))])]), R.value ? (d(), b("p", np, o(R.value), 1)) : N("", !0)])) : N("", !0)])])]))
        }
    }),
    b0 = Ht(d0, [
        ["__scopeId", "data-v-101993d0"]
    ]);
Ln(b0).mount("#app");