var Se = Object.defineProperty;
var Oe = (u, n, e) => n in u ? Se(u, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : u[n] = e;
var T = (u, n, e) => Oe(u, typeof n != "symbol" ? n + "" : n, e);
import {
    d as We,
    A as Pe,
    b as xe,
    r as G,
    Q as Ce,
    g as Ie,
    h as se
} from "./_plugin-vue_export-helper-s9b7xfAc.js";
var Ee, Ae;
const Re = (Ae = (Ee = globalThis.browser) == null ? void 0 : Ee.runtime) != null && Ae.id ? globalThis.browser : globalThis.chrome,
    De = Re;
class Be extends Pe {
    async getMember() {
        return {
            exists: !1,
            balance: 0
        }
    }
    async getPopupInfo() {
        return this.getMember()
    }
}
const [Ye, Le] = We("MemberApiService", () => new Be);
class qe {
    constructor() {
        T(this, "_popupInfo", G(null));
        T(this, "_isLoading", G(!1));
        T(this, "_isLoaded", G(!1));
        T(this, "_error", G(null));
        T(this, "_loadPromise", null);
        T(this, "_computed", Ce({
            isLoggedIn: !1,
            isMember: !1,
            isMemberHavBalance: !1,
            username: null,
            balance: 0,
            memberExpireTime: "",
            remainingDays: 0,
            membershipLevel: void 0
        }));
        this.updateComputedProperties()
    }
    async getPopupInfo() {
        if (this._isLoaded.value && this._popupInfo.value) return this._popupInfo.value;
        if (this._loadPromise) return this._loadPromise;
        this._isLoading.value = !0, this._error.value = null, this._loadPromise = Le().getPopupInfo();
        try {
            const n = await this._loadPromise;
            return "error" in n ? this._popupInfo.value = null : this._popupInfo.value = n, this._isLoaded.value = !0, this.updateComputedProperties(), n
        } catch (n) {
            throw this._error.value = n instanceof Error ? n.message : "Unknown error", n
        } finally {
            this._isLoading.value = !1, this._loadPromise = null
        }
    }
    async refreshPopupInfo() {
        return this._isLoaded.value = !1, this._popupInfo.value = null, this._loadPromise = null, this.getPopupInfo()
    }
    updateComputedProperties() {
        const n = this._popupInfo.value;
        if (!n) {
            this._computed.isLoggedIn = !1, this._computed.isMember = !1, this._computed.isMemberHavBalance = !1, this._computed.username = null, this._computed.balance = 0, this._computed.memberExpireTime = "", this._computed.remainingDays = 0;
            return
        }
        if (this._computed.isLoggedIn = n.username !== void 0 && n.username !== null, this._computed.isMember = n.exists || !1, this._computed.isMemberHavBalance = this._computed.isMember && n.balance > 0, this._computed.username = n.username || null, this._computed.balance = n.balance || 0, n.membership) {
            this._computed.memberExpireTime = n.membership.expire;
            const e = new Date(n.membership.expire),
                s = new Date;
            s.setHours(0, 0, 0, 0), e.setHours(0, 0, 0, 0);
            const h = e.getTime() - s.getTime();
            this._computed.remainingDays = Math.max(0, Math.ceil(h / (1e3 * 60 * 60 * 24))), this._computed.membershipLevel = n.membership.level
        } else this._computed.memberExpireTime = "", this._computed.remainingDays = 0, this._computed.membershipLevel = void 0
    }
    clearUserInfo() {
        this._popupInfo.value = null, this._isLoaded.value = !1, this._loadPromise = null, this.updateComputedProperties()
    }
    get popupInfo() {
        return this._popupInfo
    }
    get isLoading() {
        return this._isLoading
    }
    get isLoaded() {
        return this._isLoaded
    }
    get error() {
        return this._error
    }
    get computed() {
        return this._computed
    }
}
const Xe = new qe;
var R = {
        exports: {}
    },
    Ne = R.exports,
    _e;
function ze() {
    return _e || (_e = 1, function (u, n) {
        (function (e, s) {
            var h = "1.0.40",
                g = "",
                ae = "?",
                K = "function",
                B = "undefined",
                Y = "object",
                L = "string",
                oe = "major",
                r = "model",
                a = "name",
                i = "type",
                t = "vendor",
                o = "version",
                x = "architecture",
                S = "console",
                c = "mobile",
                d = "tablet",
                v = "smarttv",
                A = "wearable",
                X = "embedded",
                Z = 500,
                q = "Amazon",
                O = "Apple",
                ne = "ASUS",
                ue = "BlackBerry",
                N = "Browser",
                z = "Chrome",
                ye = "Edge",
                U = "Firefox",
                W = "Google",
                le = "Huawei",
                Q = "LG",
                J = "Microsoft",
                be = "Motorola",
                P = "Opera",
                C = "Samsung",
                ce = "Sharp",
                F = "Sony",
                ee = "Xiaomi",
                ie = "Zebra",
                de = "Facebook",
                we = "Chromium OS",
                pe = "Mac OS",
                me = " Browser",
                Te = function (w, p) {
                    var b = {};
                    for (var f in w) p[f] && p[f].length % 2 === 0 ? b[f] = p[f].concat(w[f]) : b[f] = w[f];
                    return b
                },
                j = function (w) {
                    for (var p = {}, b = 0; b < w.length; b++) p[w[b].toUpperCase()] = w[b];
                    return p
                },
                fe = function (w, p) {
                    return typeof w === L ? M(p).indexOf(M(w)) !== -1 : !1
                },
                M = function (w) {
                    return w.toLowerCase()
                },
                Me = function (w) {
                    return typeof w === L ? w.replace(/[^\d\.]/g, g).split(".")[0] : s
                },
                re = function (w, p) {
                    if (typeof w === L) return w = w.replace(/^\s\s*/, g), typeof p === B ? w : w.substring(0, Z)
                },
                I = function (w, p) {
                    for (var b = 0, f, y, k, m, l, E; b < p.length && !l;) {
                        var te = p[b],
                            ve = p[b + 1];
                        for (f = y = 0; f < te.length && !l && te[f];)
                            if (l = te[f++].exec(w), l)
                                for (k = 0; k < ve.length; k++) E = l[++y], m = ve[k], typeof m === Y && m.length > 0 ? m.length === 2 ? typeof m[1] == K ? this[m[0]] = m[1].call(this, E) : this[m[0]] = m[1] : m.length === 3 ? typeof m[1] === K && !(m[1].exec && m[1].test) ? this[m[0]] = E ? m[1].call(this, E, m[2]) : s : this[m[0]] = E ? E.replace(m[1], m[2]) : s : m.length === 4 && (this[m[0]] = E ? m[3].call(this, E.replace(m[1], m[2])) : s) : this[m] = E || s;
                        b += 2
                    }
                },
                H = function (w, p) {
                    for (var b in p)
                        if (typeof p[b] === Y && p[b].length > 0) {
                            for (var f = 0; f < p[b].length; f++)
                                if (fe(p[b][f], w)) return b === ae ? s : b
                        } else if (fe(p[b], w)) return b === ae ? s : b;
                    return p.hasOwnProperty("*") ? p["*"] : w
                },
                $e = {
                    "1.0": "/8",
                    "1.2": "/1",
                    "1.3": "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                },
                he = {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2e3: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    "8.1": "NT 6.3",
                    10: ["NT 6.4", "NT 10.0"],
                    RT: "ARM"
                },
                ge = {
                    browser: [
                        [/\b(?:crmo|crios)\/([\w\.]+)/i],
                        [o, [a, "Chrome"]],
                        [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                        [o, [a, "Edge"]],
                        [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                        [a, o],
                        [/opios[\/ ]+([\w\.]+)/i],
                        [o, [a, P + " Mini"]],
                        [/\bop(?:rg)?x\/([\w\.]+)/i],
                        [o, [a, P + " GX"]],
                        [/\bopr\/([\w\.]+)/i],
                        [o, [a, P]],
                        [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                        [o, [a, "Baidu"]],
                        [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
                        [o, [a, "Maxthon"]],
                        [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                        [a, o],
                        [/quark(?:pc)?\/([-\w\.]+)/i],
                        [o, [a, "Quark"]],
                        [/\bddg\/([\w\.]+)/i],
                        [o, [a, "DuckDuckGo"]],
                        [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                        [o, [a, "UC" + N]],
                        [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                        [o, [a, "WeChat"]],
                        [/konqueror\/([\w\.]+)/i],
                        [o, [a, "Konqueror"]],
                        [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                        [o, [a, "IE"]],
                        [/ya(?:search)?browser\/([\w\.]+)/i],
                        [o, [a, "Yandex"]],
                        [/slbrowser\/([\w\.]+)/i],
                        [o, [a, "Smart Lenovo " + N]],
                        [/(avast|avg)\/([\w\.]+)/i],
                        [
                            [a, /(.+)/, "$1 Secure " + N], o
                        ],
                        [/\bfocus\/([\w\.]+)/i],
                        [o, [a, U + " Focus"]],
                        [/\bopt\/([\w\.]+)/i],
                        [o, [a, P + " Touch"]],
                        [/coc_coc\w+\/([\w\.]+)/i],
                        [o, [a, "Coc Coc"]],
                        [/dolfin\/([\w\.]+)/i],
                        [o, [a, "Dolphin"]],
                        [/coast\/([\w\.]+)/i],
                        [o, [a, P + " Coast"]],
                        [/miuibrowser\/([\w\.]+)/i],
                        [o, [a, "MIUI" + me]],
                        [/fxios\/([\w\.-]+)/i],
                        [o, [a, U]],
                        [/\bqihoobrowser\/?([\w\.]*)/i],
                        [o, [a, "360"]],
                        [/\b(qq)\/([\w\.]+)/i],
                        [
                            [a, /(.+)/, "$1Browser"], o
                        ],
                        [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
                        [
                            [a, /(.+)/, "$1" + me], o
                        ],
                        [/samsungbrowser\/([\w\.]+)/i],
                        [o, [a, C + " Internet"]],
                        [/metasr[\/ ]?([\d\.]+)/i],
                        [o, [a, "Sogou Explorer"]],
                        [/(sogou)mo\w+\/([\d\.]+)/i],
                        [
                            [a, "Sogou Mobile"], o
                        ],
                        [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
                        [a, o],
                        [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
                        [a],
                        [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
                        [o, a],
                        [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                        [
                            [a, de], o
                        ],
                        [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                        [a, o],
                        [/\bgsa\/([\w\.]+) .*safari\//i],
                        [o, [a, "GSA"]],
                        [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                        [o, [a, "TikTok"]],
                        [/headlesschrome(?:\/([\w\.]+)| )/i],
                        [o, [a, z + " Headless"]],
                        [/ wv\).+(chrome)\/([\w\.]+)/i],
                        [
                            [a, z + " WebView"], o
                        ],
                        [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                        [o, [a, "Android " + N]],
                        [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                        [a, o],
                        [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                        [o, [a, "Mobile Safari"]],
                        [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                        [o, a],
                        [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                        [a, [o, H, $e]],
                        [/(webkit|khtml)\/([\w\.]+)/i],
                        [a, o],
                        [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                        [
                            [a, "Netscape"], o
                        ],
                        [/(wolvic|librewolf)\/([\w\.]+)/i],
                        [a, o],
                        [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                        [o, [a, U + " Reality"]],
                        [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                        [a, [o, /_/g, "."]],
                        [/(cobalt)\/([\w\.]+)/i],
                        [a, [o, /master.|lts./, ""]]
                    ],
                    cpu: [
                        [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                        [
                            [x, "amd64"]
                        ],
                        [/(ia32(?=;))/i],
                        [
                            [x, M]
                        ],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [
                            [x, "ia32"]
                        ],
                        [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                        [
                            [x, "arm64"]
                        ],
                        [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                        [
                            [x, "armhf"]
                        ],
                        [/windows (ce|mobile); ppc;/i],
                        [
                            [x, "arm"]
                        ],
                        [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                        [
                            [x, /ower/, g, M]
                        ],
                        [/(sun4\w)[;\)]/i],
                        [
                            [x, "sparc"]
                        ],
                        [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                        [
                            [x, M]
                        ]
                    ],
                    device: [
                        [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                        [r, [t, C],
                            [i, d]
                        ],
                        [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
                        [r, [t, C],
                            [i, c]
                        ],
                        [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                        [r, [t, O],
                            [i, c]
                        ],
                        [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                        [r, [t, O],
                            [i, d]
                        ],
                        [/(macintosh);/i],
                        [r, [t, O]],
                        [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                        [r, [t, ce],
                            [i, c]
                        ],
                        [/(?:honor)([-\w ]+)[;\)]/i],
                        [r, [t, "Honor"],
                            [i, c]
                        ],
                        [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                        [r, [t, le],
                            [i, d]
                        ],
                        [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                        [r, [t, le],
                            [i, c]
                        ],
                        [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],
                        [
                            [r, /_/g, " "],
                            [t, ee],
                            [i, c]
                        ],
                        [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                        [
                            [r, /_/g, " "],
                            [t, ee],
                            [i, d]
                        ],
                        [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                        [r, [t, "OPPO"],
                            [i, c]
                        ],
                        [/\b(opd2\d{3}a?) bui/i],
                        [r, [t, "OPPO"],
                            [i, d]
                        ],
                        [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                        [r, [t, "Vivo"],
                            [i, c]
                        ],
                        [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                        [r, [t, "Realme"],
                            [i, c]
                        ],
                        [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                        [r, [t, be],
                            [i, c]
                        ],
                        [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                        [r, [t, be],
                            [i, d]
                        ],
                        [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                        [r, [t, Q],
                            [i, d]
                        ],
                        [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                        [r, [t, Q],
                            [i, c]
                        ],
                        [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                        [r, [t, "Lenovo"],
                            [i, d]
                        ],
                        [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                        [
                            [r, /_/g, " "],
                            [t, "Nokia"],
                            [i, c]
                        ],
                        [/(pixel c)\b/i],
                        [r, [t, W],
                            [i, d]
                        ],
                        [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                        [r, [t, W],
                            [i, c]
                        ],
                        [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                        [r, [t, F],
                            [i, c]
                        ],
                        [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                        [
                            [r, "Xperia Tablet"],
                            [t, F],
                            [i, d]
                        ],
                        [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                        [r, [t, "OnePlus"],
                            [i, c]
                        ],
                        [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                        [r, [t, q],
                            [i, d]
                        ],
                        [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                        [
                            [r, /(.+)/g, "Fire Phone $1"],
                            [t, q],
                            [i, c]
                        ],
                        [/(playbook);[-\w\),; ]+(rim)/i],
                        [r, t, [i, d]],
                        [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                        [r, [t, ue],
                            [i, c]
                        ],
                        [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                        [r, [t, ne],
                            [i, d]
                        ],
                        [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                        [r, [t, ne],
                            [i, c]
                        ],
                        [/(nexus 9)/i],
                        [r, [t, "HTC"],
                            [i, d]
                        ],
                        [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                        [t, [r, /_/g, " "],
                            [i, c]
                        ],
                        [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
                        [r, [t, "TCL"],
                            [i, d]
                        ],
                        [/(itel) ((\w+))/i],
                        [
                            [t, M], r, [i, H, {
                                tablet: ["p10001l", "w7001"],
                                "*": "mobile"
                            }]
                        ],
                        [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                        [r, [t, "Acer"],
                            [i, d]
                        ],
                        [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                        [r, [t, "Meizu"],
                            [i, c]
                        ],
                        [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                        [r, [t, "Ulefone"],
                            [i, c]
                        ],
                        [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
                        [r, [t, "Energizer"],
                            [i, c]
                        ],
                        [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
                        [r, [t, "Cat"],
                            [i, c]
                        ],
                        [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
                        [r, [t, "Smartfren"],
                            [i, c]
                        ],
                        [/droid.+; (a(?:015|06[35]|142p?))/i],
                        [r, [t, "Nothing"],
                            [i, c]
                        ],
                        [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                        [t, r, [i, c]],
                        [/(imo) (tab \w+)/i, /(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                        [t, r, [i, d]],
                        [/(surface duo)/i],
                        [r, [t, J],
                            [i, d]
                        ],
                        [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                        [r, [t, "Fairphone"],
                            [i, c]
                        ],
                        [/(u304aa)/i],
                        [r, [t, "AT&T"],
                            [i, c]
                        ],
                        [/\bsie-(\w*)/i],
                        [r, [t, "Siemens"],
                            [i, c]
                        ],
                        [/\b(rct\w+) b/i],
                        [r, [t, "RCA"],
                            [i, d]
                        ],
                        [/\b(venue[\d ]{2,7}) b/i],
                        [r, [t, "Dell"],
                            [i, d]
                        ],
                        [/\b(q(?:mv|ta)\w+) b/i],
                        [r, [t, "Verizon"],
                            [i, d]
                        ],
                        [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                        [r, [t, "Barnes & Noble"],
                            [i, d]
                        ],
                        [/\b(tm\d{3}\w+) b/i],
                        [r, [t, "NuVision"],
                            [i, d]
                        ],
                        [/\b(k88) b/i],
                        [r, [t, "ZTE"],
                            [i, d]
                        ],
                        [/\b(nx\d{3}j) b/i],
                        [r, [t, "ZTE"],
                            [i, c]
                        ],
                        [/\b(gen\d{3}) b.+49h/i],
                        [r, [t, "Swiss"],
                            [i, c]
                        ],
                        [/\b(zur\d{3}) b/i],
                        [r, [t, "Swiss"],
                            [i, d]
                        ],
                        [/\b((zeki)?tb.*\b) b/i],
                        [r, [t, "Zeki"],
                            [i, d]
                        ],
                        [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                        [
                            [t, "Dragon Touch"], r, [i, d]
                        ],
                        [/\b(ns-?\w{0,9}) b/i],
                        [r, [t, "Insignia"],
                            [i, d]
                        ],
                        [/\b((nxa|next)-?\w{0,9}) b/i],
                        [r, [t, "NextBook"],
                            [i, d]
                        ],
                        [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                        [
                            [t, "Voice"], r, [i, c]
                        ],
                        [/\b(lvtel\-)?(v1[12]) b/i],
                        [
                            [t, "LvTel"], r, [i, c]
                        ],
                        [/\b(ph-1) /i],
                        [r, [t, "Essential"],
                            [i, c]
                        ],
                        [/\b(v(100md|700na|7011|917g).*\b) b/i],
                        [r, [t, "Envizen"],
                            [i, d]
                        ],
                        [/\b(trio[-\w\. ]+) b/i],
                        [r, [t, "MachSpeed"],
                            [i, d]
                        ],
                        [/\btu_(1491) b/i],
                        [r, [t, "Rotor"],
                            [i, d]
                        ],
                        [/(shield[\w ]+) b/i],
                        [r, [t, "Nvidia"],
                            [i, d]
                        ],
                        [/(sprint) (\w+)/i],
                        [t, r, [i, c]],
                        [/(kin\.[onetw]{3})/i],
                        [
                            [r, /\./g, " "],
                            [t, J],
                            [i, c]
                        ],
                        [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                        [r, [t, ie],
                            [i, d]
                        ],
                        [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                        [r, [t, ie],
                            [i, c]
                        ],
                        [/smart-tv.+(samsung)/i],
                        [t, [i, v]],
                        [/hbbtv.+maple;(\d+)/i],
                        [
                            [r, /^/, "SmartTV"],
                            [t, C],
                            [i, v]
                        ],
                        [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                        [
                            [t, Q],
                            [i, v]
                        ],
                        [/(apple) ?tv/i],
                        [t, [r, O + " TV"],
                            [i, v]
                        ],
                        [/crkey/i],
                        [
                            [r, z + "cast"],
                            [t, W],
                            [i, v]
                        ],
                        [/droid.+aft(\w+)( bui|\))/i],
                        [r, [t, q],
                            [i, v]
                        ],
                        [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                        [r, [t, ce],
                            [i, v]
                        ],
                        [/(bravia[\w ]+)( bui|\))/i],
                        [r, [t, F],
                            [i, v]
                        ],
                        [/(mitv-\w{5}) bui/i],
                        [r, [t, ee],
                            [i, v]
                        ],
                        [/Hbbtv.*(technisat) (.*);/i],
                        [t, r, [i, v]],
                        [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                        [
                            [t, re],
                            [r, re],
                            [i, v]
                        ],
                        [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                        [
                            [i, v]
                        ],
                        [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                        [t, r, [i, S]],
                        [/droid.+; (shield) bui/i],
                        [r, [t, "Nvidia"],
                            [i, S]
                        ],
                        [/(playstation [345portablevi]+)/i],
                        [r, [t, F],
                            [i, S]
                        ],
                        [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                        [r, [t, J],
                            [i, S]
                        ],
                        [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
                        [r, [t, C],
                            [i, A]
                        ],
                        [/((pebble))app/i],
                        [t, r, [i, A]],
                        [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                        [r, [t, O],
                            [i, A]
                        ],
                        [/droid.+; (glass) \d/i],
                        [r, [t, W],
                            [i, A]
                        ],
                        [/droid.+; (wt63?0{2,3})\)/i],
                        [r, [t, ie],
                            [i, A]
                        ],
                        [/droid.+; (glass) \d/i],
                        [r, [t, W],
                            [i, A]
                        ],
                        [/(pico) (4|neo3(?: link|pro)?)/i],
                        [t, r, [i, A]],
                        [/; (quest( \d| pro)?)/i],
                        [r, [t, de],
                            [i, A]
                        ],
                        [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                        [t, [i, X]],
                        [/(aeobc)\b/i],
                        [r, [t, q],
                            [i, X]
                        ],
                        [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                        [r, [i, c]],
                        [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                        [r, [i, d]],
                        [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                        [
                            [i, d]
                        ],
                        [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                        [
                            [i, c]
                        ],
                        [/(android[-\w\. ]{0,9});.+buil/i],
                        [r, [t, "Generic"]]
                    ],
                    engine: [
                        [/windows.+ edge\/([\w\.]+)/i],
                        [o, [a, ye + "HTML"]],
                        [/(arkweb)\/([\w\.]+)/i],
                        [a, o],
                        [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                        [o, [a, "Blink"]],
                        [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                        [a, o],
                        [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                        [o, a]
                    ],
                    os: [
                        [/microsoft (windows) (vista|xp)/i],
                        [a, o],
                        [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                        [a, [o, H, he]],
                        [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                        [
                            [o, H, he],
                            [a, "Windows"]
                        ],
                        [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                        [
                            [o, /_/g, "."],
                            [a, "iOS"]
                        ],
                        [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                        [
                            [a, pe],
                            [o, /_/g, "."]
                        ],
                        [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                        [o, a],
                        [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                        [a, o],
                        [/\(bb(10);/i],
                        [o, [a, ue]],
                        [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                        [o, [a, "Symbian"]],
                        [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                        [o, [a, U + " OS"]],
                        [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                        [o, [a, "webOS"]],
                        [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                        [o, [a, "watchOS"]],
                        [/crkey\/([\d\.]+)/i],
                        [o, [a, z + "cast"]],
                        [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                        [
                            [a, we], o
                        ],
                        [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                        [a, o],
                        [/(sunos) ?([\w\.\d]*)/i],
                        [
                            [a, "Solaris"], o
                        ],
                        [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                        [a, o]
                    ]
                },
                _ = function (w, p) {
                    if (typeof w === Y && (p = w, w = s), !(this instanceof _)) return new _(w, p).getResult();
                    var b = typeof e !== B && e.navigator ? e.navigator : s,
                        f = w || (b && b.userAgent ? b.userAgent : g),
                        y = b && b.userAgentData ? b.userAgentData : s,
                        k = p ? Te(ge, p) : ge,
                        m = b && b.userAgent == f;
                    return this.getBrowser = function () {
                        var l = {};
                        return l[a] = s, l[o] = s, I.call(l, f, k.browser), l[oe] = Me(l[o]), m && b && b.brave && typeof b.brave.isBrave == K && (l[a] = "Brave"), l
                    }, this.getCPU = function () {
                        var l = {};
                        return l[x] = s, I.call(l, f, k.cpu), l
                    }, this.getDevice = function () {
                        var l = {};
                        return l[t] = s, l[r] = s, l[i] = s, I.call(l, f, k.device), m && !l[i] && y && y.mobile && (l[i] = c), m && l[r] == "Macintosh" && b && typeof b.standalone !== B && b.maxTouchPoints && b.maxTouchPoints > 2 && (l[r] = "iPad", l[i] = d), l
                    }, this.getEngine = function () {
                        var l = {};
                        return l[a] = s, l[o] = s, I.call(l, f, k.engine), l
                    }, this.getOS = function () {
                        var l = {};
                        return l[a] = s, l[o] = s, I.call(l, f, k.os), m && !l[a] && y && y.platform && y.platform != "Unknown" && (l[a] = y.platform.replace(/chrome os/i, we).replace(/macos/i, pe)), l
                    }, this.getResult = function () {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }, this.getUA = function () {
                        return f
                    }, this.setUA = function (l) {
                        return f = typeof l === L && l.length > Z ? re(l, Z) : l, this
                    }, this.setUA(f), this
                };
            _.VERSION = h, _.BROWSER = j([a, o, oe]), _.CPU = j([x]), _.DEVICE = j([r, t, i, S, c, v, d, A, X]), _.ENGINE = _.OS = j([a, o]), u.exports && (n = u.exports = _), n.UAParser = _;
            var $ = typeof e !== B && (e.jQuery || e.Zepto);
            if ($ && !$.ua) {
                var V = new _;
                $.ua = V.getResult(), $.ua.get = function () {
                    return V.getUA()
                }, $.ua.set = function (w) {
                    V.setUA(w);
                    var p = V.getResult();
                    for (var b in p) $.ua[b] = p[b]
                }
            }
        })(typeof window == "object" ? window : Ne)
    }(R, R.exports)), R.exports
}
var Ue = ze();
const Fe = Ie(Ue);
class je {
    static isMobile() {
        return "ontouchstart" in document.documentElement
    }
}
class Ze {
    static isIos() {
        var e;
        const {
            browser: n
        } = Fe(navigator.userAgent);
        return je.isMobile() && ((e = n.name) == null ? void 0 : e.includes("Safari"))
    }
    static isFirefox() {
        return !1
    }
}
function Qe(u, n) {
    const e = u.toString(),
        s = (n || He()).replace("_", "-");
    if (s.startsWith("zh")) return `${e}天`;
    if (s.startsWith("ja")) return `${e}日`;
    if (s.startsWith("ko")) return `${e}일`;
    if (s.startsWith("vi")) return `${e} ng\xE0y`;
    if (s.startsWith("de")) return e === "1" ? `${e} Tag` : `${e} Tage`;
    if (s.startsWith("es")) return e === "1" ? `${e} d\xEDa` : `${e} d\xEDas`;
    if (s.startsWith("ca")) return e === "1" ? `${e} dia` : `${e} dies`;
    if (s.startsWith("fr")) return e === "1" ? `${e} jour` : `${e} jours`;
    if (s.startsWith("hi")) return `${e} दिन`;
    if (s.startsWith("it")) return e === "1" ? `${e} giorno` : `${e} giorni`;
    if (s.startsWith("uk")) {
        const h = u % 10,
            g = u % 100;
        return g >= 11 && g <= 14 ? `${e} днів` : h === 1 ? `${e} день` : h >= 2 && h <= 4 ? `${e} дні` : `${e} днів`
    }
    if (s.startsWith("ru")) {
        const h = u % 10,
            g = u % 100;
        return g >= 11 && g <= 19 ? `${e} дней` : h === 1 ? `${e} день` : h >= 2 && h <= 4 ? `${e} дня` : `${e} дней`
    }
    if (s.startsWith("pt")) return e === "1" ? `${e} dia` : `${e} dias`;
    if (s.startsWith("tr")) return `${e} g\xFCn`;
    if (s.startsWith("th")) return `${e} วัน`;
    if (s.startsWith("am")) return `${e} ቀናት`;
    if (s.startsWith("bg")) return e === "1" ? `${e} ден` : `${e} дни`;
    if (s.startsWith("bn")) return `${e} দিন`;
    if (s.startsWith("cs")) return u === 1 ? `${e} den` : u >= 2 && u <= 4 ? `${e} dny` : `${e} dn\xED`;
    if (s.startsWith("da")) return e === "1" ? `${e} dag` : `${e} dage`;
    if (s.startsWith("gu")) return `${e}દિવસ`;
    if (s.startsWith("el")) return `${e}ημ.`;
    if (s.startsWith("et")) return `${e} p`;
    if (s.startsWith("fil")) return `${e} araw`;
    if (s.startsWith("fi")) return `${e} pv`;
    if (s.startsWith("hr")) return `${e} d`;
    if (s.startsWith("hu")) return `${e}\xA0nap`;
    if (s.startsWith("id")) return `${e} hari`;
    if (s.startsWith("lt")) return `${e} d.`;
    if (s.startsWith("lv")) {
        const h = u % 10;
        return u % 100 === 11 ? `${e}\xA0dienas` : h === 1 ? `${e}\xA0diena` : `${e}\xA0dienas`
    }
    if (s.startsWith("nb") || s.startsWith("no")) return `${e} d`;
    if (s.startsWith("kn")) return `${e} ದಿನ`;
    if (s.startsWith("mr")) return `${e}\xA0\u0926\u093F\u0935\u0938`;
    if (s.startsWith("ms")) return `${e}\xA0hari`;
    if (s.startsWith("ml")) return `${e}ദിനം`;
    if (s.startsWith("nl")) return e === "1" ? `${e} dag` : `${e} dgn`;
    if (s.startsWith("pl")) {
        const h = u % 10,
            g = u % 100;
        return u === 1 ? `${e} dzień` : g >= 12 && g <= 14 ? `${e} dni` : h >= 2 && h <= 4 ? `${e} dni` : `${e} dni`
    }
    if (s.startsWith("sk")) return u === 1 ? `${e} deň` : u >= 2 && u <= 4 ? `${e} dni` : `${e} dn\xED`;
    if (s.startsWith("ro")) return e === "1" ? `${e} zi` : `${e} zile`;
    if (s.startsWith("sl")) {
        const h = u % 100;
        return h === 1 ? `${e} dan` : h === 2 ? `${e} dneva` : `${e} dni`
    }
    if (s.startsWith("sv")) return e === "1" ? `${e} dag` : `${e} dagar`;
    if (s.startsWith("sw")) return `${e} siku`;
    if (s.startsWith("te")) return `${e} రోజు`;
    if (s.startsWith("ta")) return `${e}நாள்`;
    if (s.startsWith("sr")) {
        const h = u % 10,
            g = u % 100;
        return g >= 11 && g <= 14 ? `${e} dana` : h === 1 ? `${e} dan` : `${e} dana`
    }
    return e === "1" ? `${e} day` : `${e} days`
}
function He() {
    try {
        return De.i18n.getUILanguage()
    } catch {
        return "en"
    }
}
class D {
    static requiresCredit(n, e) {
        return this.CREDIT_REQUIRED_MODELS.has(n)
    }
    static isFreeModel(n, e) {
        return n === "google" && e === "free"
    }
    static isFreeOrTrialEngine(n) {
        return n === "gemini-1.5-flash" || n === "gemini-2.5-flash" || n === "gemini-3-flash-preview" || n === "gemini-3.1-flash-lite-preview" || n === "google"
    }
}
T(D, "CREDIT_REQUIRED_MODELS", new Set(["gpt-4-turbo-2024-04-09", "claude-3-opus-20240229", "claude-3-7-sonnet-20250219", "gpt-5.4", "gpt-5.5", "gpt-5.2", "claude-opus-4-7", "claude-sonnet-4-6", "claude-opus-4-5-20251101", "claude-sonnet-4-5-20250929"]));
function Je(u, n) {
    const {
        translateEngine: e,
        voiceType: s
    } = n;
    if (u.exists && u.membership) {
        if (u.membership.level < 0 && !D.isFreeOrTrialEngine(e)) return {
            allowed: !1,
            reason: "trial-member-model-limit",
            messageKey: "trialMemberModelLimit"
        };
        if (D.requiresCredit(e, s)) {
            if (u.balance <= 0) return {
                allowed: !1,
                reason: "insufficient-balance",
                messageKey: "insufficientBalanceAlertMsg"
            };
            if (u.balance < 1) return {
                allowed: !0,
                warningKey: "balanceRunningLow"
            }
        }
        return {
            allowed: !0
        }
    }
    return s === "memberFree" ? {
        allowed: !1,
        reason: "member-free-requires-membership",
        messageKey: "memberFreeRequireMembership"
    } : s === "azure" ? {
        allowed: !1,
        reason: "azure-requires-membership",
        messageKey: "azureRequireMembership"
    } : D.isFreeModel(e, s) ? {
        allowed: !0
    } : D.requiresCredit(e, s) ? u.balance <= 0 ? {
        allowed: !1,
        reason: "non-member-insufficient-balance-and-membership",
        messageKey: "insufficientBalanceAndMembership"
    } : {
        allowed: !1,
        reason: "non-member-insufficient-membership",
        messageKey: "insufficientMembership"
    } : {
        allowed: !1,
        reason: "non-member-ai-membership-required",
        messageKey: "membershipRequiredForAI"
    }
}
function ei(u) {
    if (!u) return !1;
    const n = se[u];
    if (n) return ke(n);
    const e = u.split("-")[0];
    if (!e) return !1;
    for (const s of Object.keys(se))
        if ((s === u || s.startsWith(e + "-") || s === e) && ke(se[s])) return !0;
    return !1
}
function ke(u) {
    var s, h;
    if (!u) return !1;
    const n = ((s = u[0]) == null ? void 0 : s.length) ?? 0,
        e = ((h = u[1]) == null ? void 0 : h.length) ?? 0;
    return n > 0 || e > 0
}
const Ve = {
    "gpt-4o-mini-2024-07-18": "gpt-5.4-mini",
    openai: "gpt-5.4-mini",
    "gpt-3.5-turbo": "gpt-5.4-mini",
    "gpt-5-mini": "gpt-5.4-mini",
    "gpt-4-turbo-2024-04-09": "gpt-5.4",
    "gpt-5": "gpt-5.4",
    "gpt-5.2": "gpt-5.4",
    "gpt-5.5": "gpt-5.4",
    "claude-3-haiku-20240307": "claude-haiku-4-5-20251001",
    "claude-3-5-haiku-20241022": "claude-haiku-4-5-20251001",
    "claude-3-opus-20240229": "claude-opus-4-7",
    "claude-opus-4-1-20250805": "claude-opus-4-7",
    "claude-opus-4-5-20251101": "claude-opus-4-7",
    "claude-3-7-sonnet-20250219": "claude-sonnet-4-6",
    "claude-sonnet-4-5-20250929": "claude-sonnet-4-6",
    "gemini-1.5-flash": "gemini-3.1-flash-lite-preview",
    "gemini-2.5-flash": "gemini-3.1-flash-lite-preview",
    "gemini-3-flash-preview": "gemini-3.1-flash-lite-preview",
    "deepseek-v3": "deepseek-v4-flash",
    "deepseek-v3.1-250821": "deepseek-v4-flash",
    "deepseek-v3.2": "deepseek-v4-flash"
};
function ii(u) {
    return Ve[u] || u
}
export {
    Ze as B, je as M, D as T, De as b, Qe as f, Le as g, ei as i, ii as m, Je as r, Xe as u
};