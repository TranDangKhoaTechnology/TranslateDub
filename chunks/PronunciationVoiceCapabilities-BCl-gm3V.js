var d = Object.defineProperty;
var h = (t, n, e) => n in t ? d(t, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : t[n] = e;
var o = (t, n, e) => h(t, typeof n != "symbol" ? n + "" : n, e);
import {
    d as D,
    A as N,
    s as L
} from "./_plugin-vue_export-helper-s9b7xfAc.js";
class P extends N {
    constructor() {
        super(...arguments);
        o(this, "baseURL", globalThis.__DUBBING_LOCAL_API_BASE__);
        o(this, "timeout", 15e3)
    }
    async listRulesPage(e) {
        var i;
        const r = new URLSearchParams({
            targetLocale: e.targetLocale,
            status: e.status ?? "all"
        });
        return (i = e.keyword) != null && i.trim() && r.set("keyword", e.keyword.trim()), e.afterId !== void 0 && r.set("afterId", String(e.afterId)), e.limit !== void 0 && r.set("limit", String(e.limit)), this.request("GET", `/api/v2/pronunciation-preference/rules-page?${r.toString()}`)
    }
    async createRule(e) {
        return this.request("POST", "/api/v2/pronunciation-preference/rules", e)
    }
    async updateRule(e, r) {
        return this.request("PUT", `/api/v2/pronunciation-preference/rules/${e}`, r)
    }
    async deleteRule(e) {
        await this.request("DELETE", `/api/v2/pronunciation-preference/rules/${e}`)
    }
    async setRuleEnabled(e, r) {
        return this.request("PUT", `/api/v2/pronunciation-preference/rules/${e}/enabled`, {
            enabled: r
        })
    }
    async runtime(e) {
        const r = new URLSearchParams({
            targetLocale: e
        });
        return this.request("GET", `/api/v2/pronunciation-preference/runtime?${r.toString()}`)
    }
    async request(e, r, i) {
        const s = new AbortController,
            p = setTimeout(() => s.abort(), this.timeout);
        try {
            const u = await L.getItem("local:SESSION"), c = {
                "Content-Type": "application/json"
            };
            u && (c.Ck = u);
            const a = await fetch(`${this.baseURL}${r}`, {
                method: e,
                headers: c,
                body: i === void 0 ? void 0 : JSON.stringify(i),
                signal: s.signal,
                credentials: "include"
            });
            if (!a.ok) {
                const S = await a.text().catch(() => "");
                throw new Error(`pronunciation-preference request failed: ${a.status}` + (S ? ` ${S.slice(0,160)}` : ""))
            }
            if (a.status === 204 || a.headers.get("content-length") === "0") return;
            const l = await a.text();
            return l ? JSON.parse(l) : void 0
        } finally {
            clearTimeout(p)
        }
    }
}
const [U, C] = D("PronunciationPreferenceApiService", () => new P), w = "zh-CN";
function g(t) {
    return f(t) === w.toLowerCase()
}
function m(t) {
    const n = f(t);
    return n === "zh" || n.startsWith("zh-")
}
function H(t, n) {
    return g(t) && m(n)
}
function A(t, n) {
    return g(t) && (n != null && n.length) ? n : []
}
function f(t) {
    return (t == null ? void 0 : t.trim().replace(/_/g, "-").toLowerCase()) ?? ""
}
const v = new Set(["wuu-CN-XiaotongNeural", "wuu-CN-YunzheNeural", "de-DE-Seraphina:DragonHDLatestNeural", "en-US-Andrew2:DragonHDLatestNeural", "en-US-Andrew:DragonHDLatestNeural", "en-US-Aria:DragonHDLatestNeural", "en-US-Ava:DragonHDLatestNeural", "en-US-Davis:DragonHDLatestNeural", "en-US-Emma2:DragonHDLatestNeural", "en-US-Emma:DragonHDLatestNeural", "en-US-Jenny:DragonHDLatestNeural", "en-US-Steffan:DragonHDLatestNeural", "ja-JP-Masaru:DragonHDLatestNeural", "zh-CN-Xiaochen:DragonHDLatestNeural"]);
function I(t) {
    return !v.has(t)
}
export {
    w as S, H as a, C as g, g as i, A as p, I as s
};