var W1 = Object.defineProperty;
var J1 = (e, a, i) => a in e ? W1(e, a, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : e[a] = i;
var De = (e, a, i) => J1(e, typeof a != "symbol" ? a + "" : a, i);
(function () {
    const a = document.createElement("link").relList;
    if (a && a.supports && a.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) t(l);
    new MutationObserver(l => {
        for (const s of l)
            if (s.type === "childList")
                for (const c of s.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && t(c)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });
    function i(l) {
        const s = {};
        return l.integrity && (s.integrity = l.integrity), l.referrerPolicy && (s.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? s.credentials = "include" : l.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }
    function t(l) {
        if (l.ep) return;
        l.ep = !0;
        const s = i(l);
        fetch(l.href, s)
    }
})();
try {} catch (e) {
    console.error("[wxt] Failed to initialize plugins", e)
}
/**
 * @vue/shared v3.5.16
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
/*! #__NO_SIDE_EFFECTS__ */
function zo(e) {
    const a = Object.create(null);
    for (const i of e.split(",")) a[i] = 1;
    return i => i in a
}
const Ye = {},
    nu = [],
    vn = () => {},
    $1 = () => !1,
    Ur = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    Ko = e => e.startsWith("onUpdate:"),
    Ma = Object.assign,
    Ho = (e, a) => {
        const i = e.indexOf(a);
        i > -1 && e.splice(i, 1)
    },
    j1 = Object.prototype.hasOwnProperty,
    Ue = (e, a) => j1.call(e, a),
    pe = Array.isArray,
    iu = e => it(e) === "[object Map]",
    Or = e => it(e) === "[object Set]",
    ad = e => it(e) === "[object Date]",
    Se = e => typeof e == "function",
    ea = e => typeof e == "string",
    pn = e => typeof e == "symbol",
    We = e => e !== null && typeof e == "object",
    $f = e => (We(e) || Se(e)) && Se(e.then) && Se(e.catch),
    jf = Object.prototype.toString,
    it = e => jf.call(e),
    q1 = e => it(e).slice(8, -1),
    qf = e => it(e) === "[object Object]",
    Uo = e => ea(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    Gu = zo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Gr = e => {
        const a = Object.create(null);
        return i => a[i] || (a[i] = e(i))
    },
    Q1 = /-(\w)/g,
    cn = Gr(e => e.replace(Q1, (a, i) => i ? i.toUpperCase() : "")),
    e3 = /\B([A-Z])/g,
    Ei = Gr(e => e.replace(e3, "-$1").toLowerCase()),
    Zr = Gr(e => e.charAt(0).toUpperCase() + e.slice(1)),
    ps = Gr(e => e ? `on${Zr(e)}` : ""),
    fi = (e, a) => !Object.is(e, a),
    fr = (e, ...a) => {
        for (let i = 0; i < e.length; i++) e[i](...a)
    },
    Qf = (e, a, i, t = !1) => {
        Object.defineProperty(e, a, {
            configurable: !0,
            enumerable: !1,
            writable: t,
            value: i
        })
    },
    Mr = e => {
        const a = parseFloat(e);
        return isNaN(a) ? e : a
    };
let nd;
const Yr = () => nd || (nd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Oo(e) {
    if (pe(e)) {
        const a = {};
        for (let i = 0; i < e.length; i++) {
            const t = e[i],
                l = ea(t) ? u3(t) : Oo(t);
            if (l)
                for (const s in l) a[s] = l[s]
        }
        return a
    } else if (ea(e) || We(e)) return e
}
const a3 = /;(?![^(]*\))/g,
    n3 = /:([^]+)/,
    i3 = /\/\*[^]*?\*\//g;
function u3(e) {
    const a = {};
    return e.replace(i3, "").split(a3).forEach(i => {
        if (i) {
            const t = i.split(n3);
            t.length > 1 && (a[t[0].trim()] = t[1].trim())
        }
    }), a
}
function Go(e) {
    let a = "";
    if (ea(e)) a = e;
    else if (pe(e))
        for (let i = 0; i < e.length; i++) {
            const t = Go(e[i]);
            t && (a += t + " ")
        } else if (We(e))
            for (const i in e) e[i] && (a += i + " ");
    return a.trim()
}
const t3 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    r3 = zo(t3);
function em(e) {
    return !!e || e === ""
}
function l3(e, a) {
    if (e.length !== a.length) return !1;
    let i = !0;
    for (let t = 0; i && t < e.length; t++) i = Vr(e[t], a[t]);
    return i
}
function Vr(e, a) {
    if (e === a) return !0;
    let i = ad(e),
        t = ad(a);
    if (i || t) return i && t ? e.getTime() === a.getTime() : !1;
    if (i = pn(e), t = pn(a), i || t) return e === a;
    if (i = pe(e), t = pe(a), i || t) return i && t ? l3(e, a) : !1;
    if (i = We(e), t = We(a), i || t) {
        if (!i || !t) return !1;
        const l = Object.keys(e).length,
            s = Object.keys(a).length;
        if (l !== s) return !1;
        for (const c in e) {
            const g = e.hasOwnProperty(c),
                f = a.hasOwnProperty(c);
            if (g && !f || !g && f || !Vr(e[c], a[c])) return !1
        }
    }
    return String(e) === String(a)
}
function s3(e, a) {
    return e.findIndex(i => Vr(i, a))
}
const am = e => !!(e && e.__v_isRef === !0),
    o3 = e => ea(e) ? e : e == null ? "" : pe(e) || We(e) && (e.toString === jf || !Se(e.toString)) ? am(e) ? o3(e.value) : JSON.stringify(e, nm, 2) : String(e),
    nm = (e, a) => am(a) ? nm(e, a.value) : iu(a) ? {
        [`Map(${a.size})`]: [...a.entries()].reduce((i, [t, l], s) => (i[As(t, s) + " =>"] = l, i), {})
    } : Or(a) ? {
        [`Set(${a.size})`]: [...a.values()].map(i => As(i))
    } : pn(a) ? As(a) : We(a) && !pe(a) && !qf(a) ? String(a) : a,
    As = (e, a = "") => {
        var i;
        return pn(e) ? `Symbol(${(i=e.description)!=null?i:a})` : e
    };
/**
 * @vue/reactivity v3.5.16
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Ka;
class c3 {
    constructor(a = !1) {
        this.detached = a, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ka, !a && Ka && (this.index = (Ka.scopes || (Ka.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let a, i;
            if (this.scopes)
                for (a = 0, i = this.scopes.length; a < i; a++) this.scopes[a].pause();
            for (a = 0, i = this.effects.length; a < i; a++) this.effects[a].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let a, i;
            if (this.scopes)
                for (a = 0, i = this.scopes.length; a < i; a++) this.scopes[a].resume();
            for (a = 0, i = this.effects.length; a < i; a++) this.effects[a].resume()
        }
    }
    run(a) {
        if (this._active) {
            const i = Ka;
            try {
                return Ka = this, a()
            } finally {
                Ka = i
            }
        }
    }
    on() {
        ++this._on === 1 && (this.prevScope = Ka, Ka = this)
    }
    off() {
        this._on > 0 && --this._on === 0 && (Ka = this.prevScope, this.prevScope = void 0)
    }
    stop(a) {
        if (this._active) {
            this._active = !1;
            let i, t;
            for (i = 0, t = this.effects.length; i < t; i++) this.effects[i].stop();
            for (this.effects.length = 0, i = 0, t = this.cleanups.length; i < t; i++) this.cleanups[i]();
            if (this.cleanups.length = 0, this.scopes) {
                for (i = 0, t = this.scopes.length; i < t; i++) this.scopes[i].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !a) {
                const l = this.parent.scopes.pop();
                l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index)
            }
            this.parent = void 0
        }
    }
}
function g3() {
    return Ka
}
let Xe;
const Ns = new WeakSet;
class im {
    constructor(a) {
        this.fn = a, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ka && Ka.active && Ka.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65, Ns.has(this) && (Ns.delete(this), this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || tm(this)
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        this.flags |= 2, id(this), rm(this);
        const a = Xe,
            i = En;
        Xe = this, En = !0;
        try {
            return this.fn()
        } finally {
            lm(this), Xe = a, En = i, this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let a = this.deps; a; a = a.nextDep) Vo(a);
            this.deps = this.depsTail = void 0, id(this), this.onStop && this.onStop(), this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? Ns.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        Eo(this) && this.run()
    }
    get dirty() {
        return Eo(this)
    }
}
let um = 0,
    Zu, Yu;
function tm(e, a = !1) {
    if (e.flags |= 8, a) {
        e.next = Yu, Yu = e;
        return
    }
    e.next = Zu, Zu = e
}
function Zo() {
    um++
}
function Yo() {
    if (--um > 0) return;
    if (Yu) {
        let a = Yu;
        for (Yu = void 0; a;) {
            const i = a.next;
            a.next = void 0, a.flags &= -9, a = i
        }
    }
    let e;
    for (; Zu;) {
        let a = Zu;
        for (Zu = void 0; a;) {
            const i = a.next;
            if (a.next = void 0, a.flags &= -9, a.flags & 1) try {
                a.trigger()
            } catch (t) {
                e || (e = t)
            }
            a = i
        }
    }
    if (e) throw e
}
function rm(e) {
    for (let a = e.deps; a; a = a.nextDep) a.version = -1, a.prevActiveLink = a.dep.activeLink, a.dep.activeLink = a
}
function lm(e) {
    let a, i = e.depsTail,
        t = i;
    for (; t;) {
        const l = t.prevDep;
        t.version === -1 ? (t === i && (i = l), Vo(t), d3(t)) : a = t, t.dep.activeLink = t.prevActiveLink, t.prevActiveLink = void 0, t = l
    }
    e.deps = a, e.depsTail = i
}
function Eo(e) {
    for (let a = e.deps; a; a = a.nextDep)
        if (a.dep.version !== a.version || a.dep.computed && (sm(a.dep.computed) || a.dep.version !== a.version)) return !0;
    return !!e._dirty
}
function sm(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === $u) || (e.globalVersion = $u, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Eo(e)))) return;
    e.flags |= 2;
    const a = e.dep,
        i = Xe,
        t = En;
    Xe = e, En = !0;
    try {
        rm(e);
        const l = e.fn(e._value);
        (a.version === 0 || fi(l, e._value)) && (e.flags |= 128, e._value = l, a.version++)
    } catch (l) {
        throw a.version++, l
    } finally {
        Xe = i, En = t, lm(e), e.flags &= -3
    }
}
function Vo(e, a = !1) {
    const {
        dep: i,
        prevSub: t,
        nextSub: l
    } = e;
    if (t && (t.nextSub = l, e.prevSub = void 0), l && (l.prevSub = t, e.nextSub = void 0), i.subs === e && (i.subs = t, !t && i.computed)) {
        i.computed.flags &= -5;
        for (let s = i.computed.deps; s; s = s.nextDep) Vo(s, !0)
    }!a && !--i.sc && i.map && i.map.delete(i.key)
}
function d3(e) {
    const {
        prevDep: a,
        nextDep: i
    } = e;
    a && (a.nextDep = i, e.prevDep = void 0), i && (i.prevDep = a, e.nextDep = void 0)
}
let En = !0;
const om = [];
function Wn() {
    om.push(En), En = !1
}
function Jn() {
    const e = om.pop();
    En = e === void 0 ? !0 : e
}
function id(e) {
    const {
        cleanup: a
    } = e;
    if (e.cleanup = void 0, a) {
        const i = Xe;
        Xe = void 0;
        try {
            a()
        } finally {
            Xe = i
        }
    }
}
let $u = 0;
class f3 {
    constructor(a, i) {
        this.sub = a, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class Xo {
    constructor(a) {
        this.computed = a, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0
    }
    track(a) {
        if (!Xe || !En || Xe === this.computed) return;
        let i = this.activeLink;
        if (i === void 0 || i.sub !== Xe) i = this.activeLink = new f3(Xe, this), Xe.deps ? (i.prevDep = Xe.depsTail, Xe.depsTail.nextDep = i, Xe.depsTail = i) : Xe.deps = Xe.depsTail = i, cm(i);
        else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
            const t = i.nextDep;
            t.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = t), i.prevDep = Xe.depsTail, i.nextDep = void 0, Xe.depsTail.nextDep = i, Xe.depsTail = i, Xe.deps === i && (Xe.deps = t)
        }
        return i
    }
    trigger(a) {
        this.version++, $u++, this.notify(a)
    }
    notify(a) {
        Zo();
        try {
            for (let i = this.subs; i; i = i.prevSub) i.sub.notify() && i.sub.dep.notify()
        } finally {
            Yo()
        }
    }
}
function cm(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
        const a = e.dep.computed;
        if (a && !e.dep.subs) {
            a.flags |= 20;
            for (let t = a.deps; t; t = t.nextDep) cm(t)
        }
        const i = e.dep.subs;
        i !== e && (e.prevSub = i, i && (i.nextSub = e)), e.dep.subs = e
    }
}
const po = new WeakMap,
    _i = Symbol(""),
    Ao = Symbol(""),
    ju = Symbol("");
function Na(e, a, i) {
    if (En && Xe) {
        let t = po.get(e);
        t || po.set(e, t = new Map);
        let l = t.get(i);
        l || (t.set(i, l = new Xo), l.map = t, l.key = i), l.track()
    }
}
function Yn(e, a, i, t, l, s) {
    const c = po.get(e);
    if (!c) {
        $u++;
        return
    }
    const g = f => {
        f && f.trigger()
    };
    if (Zo(), a === "clear") c.forEach(g);
    else {
        const f = pe(e),
            A = f && Uo(i);
        if (f && i === "length") {
            const h = Number(t);
            c.forEach((p, C) => {
                (C === "length" || C === ju || !pn(C) && C >= h) && g(p)
            })
        } else switch ((i !== void 0 || c.has(void 0)) && g(c.get(i)), A && g(c.get(ju)), a) {
        case "add":
            f ? A && g(c.get("length")) : (g(c.get(_i)), iu(e) && g(c.get(Ao)));
            break;
        case "delete":
            f || (g(c.get(_i)), iu(e) && g(c.get(Ao)));
            break;
        case "set":
            iu(e) && g(c.get(_i));
            break
        }
    }
    Yo()
}
function eu(e) {
    const a = He(e);
    return a === e ? a : (Na(a, "iterate", ju), on(e) ? a : a.map(ha))
}
function Xr(e) {
    return Na(e = He(e), "iterate", ju), e
}
const m3 = {
    __proto__: null,
    [Symbol.iterator]() {
        return ys(this, Symbol.iterator, ha)
    },
    concat(...e) {
        return eu(this).concat(...e.map(a => pe(a) ? eu(a) : a))
    },
    entries() {
        return ys(this, "entries", e => (e[1] = ha(e[1]), e))
    },
    every(e, a) {
        return On(this, "every", e, a, void 0, arguments)
    },
    filter(e, a) {
        return On(this, "filter", e, a, i => i.map(ha), arguments)
    },
    find(e, a) {
        return On(this, "find", e, a, ha, arguments)
    },
    findIndex(e, a) {
        return On(this, "findIndex", e, a, void 0, arguments)
    },
    findLast(e, a) {
        return On(this, "findLast", e, a, ha, arguments)
    },
    findLastIndex(e, a) {
        return On(this, "findLastIndex", e, a, void 0, arguments)
    },
    forEach(e, a) {
        return On(this, "forEach", e, a, void 0, arguments)
    },
    includes(...e) {
        return Cs(this, "includes", e)
    },
    indexOf(...e) {
        return Cs(this, "indexOf", e)
    },
    join(e) {
        return eu(this).join(e)
    },
    lastIndexOf(...e) {
        return Cs(this, "lastIndexOf", e)
    },
    map(e, a) {
        return On(this, "map", e, a, void 0, arguments)
    },
    pop() {
        return Pu(this, "pop")
    },
    push(...e) {
        return Pu(this, "push", e)
    },
    reduce(e, ...a) {
        return ud(this, "reduce", e, a)
    },
    reduceRight(e, ...a) {
        return ud(this, "reduceRight", e, a)
    },
    shift() {
        return Pu(this, "shift")
    },
    some(e, a) {
        return On(this, "some", e, a, void 0, arguments)
    },
    splice(...e) {
        return Pu(this, "splice", e)
    },
    toReversed() {
        return eu(this).toReversed()
    },
    toSorted(e) {
        return eu(this).toSorted(e)
    },
    toSpliced(...e) {
        return eu(this).toSpliced(...e)
    },
    unshift(...e) {
        return Pu(this, "unshift", e)
    },
    values() {
        return ys(this, "values", ha)
    }
};
function ys(e, a, i) {
    const t = Xr(e),
        l = t[a]();
    return t !== e && !on(e) && (l._next = l.next, l.next = () => {
        const s = l._next();
        return s.value && (s.value = i(s.value)), s
    }), l
}
const h3 = Array.prototype;
function On(e, a, i, t, l, s) {
    const c = Xr(e),
        g = c !== e && !on(e),
        f = c[a];
    if (f !== h3[a]) {
        const p = f.apply(e, s);
        return g ? ha(p) : p
    }
    let A = i;
    c !== e && (g ? A = function (p, C) {
        return i.call(this, ha(p), C, e)
    } : i.length > 2 && (A = function (p, C) {
        return i.call(this, p, C, e)
    }));
    const h = f.call(c, A, t);
    return g && l ? l(h) : h
}
function ud(e, a, i, t) {
    const l = Xr(e);
    let s = i;
    return l !== e && (on(e) ? i.length > 3 && (s = function (c, g, f) {
        return i.call(this, c, g, f, e)
    }) : s = function (c, g, f) {
        return i.call(this, c, ha(g), f, e)
    }), l[a](s, ...t)
}
function Cs(e, a, i) {
    const t = He(e);
    Na(t, "iterate", ju);
    const l = t[a](...i);
    return (l === -1 || l === !1) && jo(i[0]) ? (i[0] = He(i[0]), t[a](...i)) : l
}
function Pu(e, a, i = []) {
    Wn(), Zo();
    const t = He(e)[a].apply(e, i);
    return Yo(), Jn(), t
}
const E3 = zo("__proto__,__v_isRef,__isVue"),
    gm = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(pn));
function p3(e) {
    pn(e) || (e = String(e));
    const a = He(this);
    return Na(a, "has", e), a.hasOwnProperty(e)
}
class dm {
    constructor(a = !1, i = !1) {
        this._isReadonly = a, this._isShallow = i
    }
    get(a, i, t) {
        if (i === "__v_skip") return a.__v_skip;
        const l = this._isReadonly,
            s = this._isShallow;
        if (i === "__v_isReactive") return !l;
        if (i === "__v_isReadonly") return l;
        if (i === "__v_isShallow") return s;
        if (i === "__v_raw") return t === (l ? s ? B3 : Em : s ? hm : mm).get(a) || Object.getPrototypeOf(a) === Object.getPrototypeOf(t) ? a : void 0;
        const c = pe(a);
        if (!l) {
            let f;
            if (c && (f = m3[i])) return f;
            if (i === "hasOwnProperty") return p3
        }
        const g = Reflect.get(a, i, Ca(a) ? a : t);
        return (pn(i) ? gm.has(i) : E3(i)) || (l || Na(a, "get", i), s) ? g : Ca(g) ? c && Uo(i) ? g : g.value : We(g) ? l ? pm(g) : Jo(g) : g
    }
}
class fm extends dm {
    constructor(a = !1) {
        super(!1, a)
    }
    set(a, i, t, l) {
        let s = a[i];
        if (!this._isShallow) {
            const f = mi(s);
            if (!on(t) && !mi(t) && (s = He(s), t = He(t)), !pe(a) && Ca(s) && !Ca(t)) return f ? !1 : (s.value = t, !0)
        }
        const c = pe(a) && Uo(i) ? Number(i) < a.length : Ue(a, i),
            g = Reflect.set(a, i, t, Ca(a) ? a : l);
        return a === He(l) && (c ? fi(t, s) && Yn(a, "set", i, t) : Yn(a, "add", i, t)), g
    }
    deleteProperty(a, i) {
        const t = Ue(a, i);
        a[i];
        const l = Reflect.deleteProperty(a, i);
        return l && t && Yn(a, "delete", i, void 0), l
    }
    has(a, i) {
        const t = Reflect.has(a, i);
        return (!pn(i) || !gm.has(i)) && Na(a, "has", i), t
    }
    ownKeys(a) {
        return Na(a, "iterate", pe(a) ? "length" : _i), Reflect.ownKeys(a)
    }
}
class A3 extends dm {
    constructor(a = !1) {
        super(!0, a)
    }
    set(a, i) {
        return !0
    }
    deleteProperty(a, i) {
        return !0
    }
}
const N3 = new fm,
    y3 = new A3,
    C3 = new fm(!0);
const No = e => e,
    ir = e => Reflect.getPrototypeOf(e);
function M3(e, a, i) {
    return function (...t) {
        const l = this.__v_raw,
            s = He(l),
            c = iu(s),
            g = e === "entries" || e === Symbol.iterator && c,
            f = e === "keys" && c,
            A = l[e](...t),
            h = i ? No : a ? Sr : ha;
        return !a && Na(s, "iterate", f ? Ao : _i), {
            next() {
                const {
                    value: p,
                    done: C
                } = A.next();
                return C ? {
                    value: p,
                    done: C
                } : {
                    value: g ? [h(p[0]), h(p[1])] : h(p),
                    done: C
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function ur(e) {
    return function (...a) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function S3(e, a) {
    const i = {
        get(l) {
            const s = this.__v_raw,
                c = He(s),
                g = He(l);
            e || (fi(l, g) && Na(c, "get", l), Na(c, "get", g));
            const {
                has: f
            } = ir(c), A = a ? No : e ? Sr : ha;
            if (f.call(c, l)) return A(s.get(l));
            if (f.call(c, g)) return A(s.get(g));
            s !== c && s.get(l)
        },
        get size() {
            const l = this.__v_raw;
            return !e && Na(He(l), "iterate", _i), Reflect.get(l, "size", l)
        },
        has(l) {
            const s = this.__v_raw,
                c = He(s),
                g = He(l);
            return e || (fi(l, g) && Na(c, "has", l), Na(c, "has", g)), l === g ? s.has(l) : s.has(l) || s.has(g)
        },
        forEach(l, s) {
            const c = this,
                g = c.__v_raw,
                f = He(g),
                A = a ? No : e ? Sr : ha;
            return !e && Na(f, "iterate", _i), g.forEach((h, p) => l.call(s, A(h), A(p), c))
        }
    };
    return Ma(i, e ? {
        add: ur("add"),
        set: ur("set"),
        delete: ur("delete"),
        clear: ur("clear")
    } : {
        add(l) {
            !a && !on(l) && !mi(l) && (l = He(l));
            const s = He(this);
            return ir(s).has.call(s, l) || (s.add(l), Yn(s, "add", l, l)), this
        },
        set(l, s) {
            !a && !on(s) && !mi(s) && (s = He(s));
            const c = He(this),
                {
                    has: g,
                    get: f
                } = ir(c);
            let A = g.call(c, l);
            A || (l = He(l), A = g.call(c, l));
            const h = f.call(c, l);
            return c.set(l, s), A ? fi(s, h) && Yn(c, "set", l, s) : Yn(c, "add", l, s), this
        },
        delete(l) {
            const s = He(this),
                {
                    has: c,
                    get: g
                } = ir(s);
            let f = c.call(s, l);
            f || (l = He(l), f = c.call(s, l)), g && g.call(s, l);
            const A = s.delete(l);
            return f && Yn(s, "delete", l, void 0), A
        },
        clear() {
            const l = He(this),
                s = l.size !== 0,
                c = l.clear();
            return s && Yn(l, "clear", void 0, void 0), c
        }
    }), ["keys", "values", "entries", Symbol.iterator].forEach(l => {
        i[l] = M3(l, e, a)
    }), i
}
function Wo(e, a) {
    const i = S3(e, a);
    return (t, l, s) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? t : Reflect.get(Ue(i, l) && l in t ? i : t, l, s)
}
const w3 = {
        get: Wo(!1, !1)
    },
    I3 = {
        get: Wo(!1, !0)
    },
    b3 = {
        get: Wo(!0, !1)
    };
const mm = new WeakMap,
    hm = new WeakMap,
    Em = new WeakMap,
    B3 = new WeakMap;
function v3(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function D3(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : v3(q1(e))
}
function Jo(e) {
    return mi(e) ? e : $o(e, !1, N3, w3, mm)
}
function T3(e) {
    return $o(e, !1, C3, I3, hm)
}
function pm(e) {
    return $o(e, !0, y3, b3, Em)
}
function $o(e, a, i, t, l) {
    if (!We(e) || e.__v_raw && !(a && e.__v_isReactive)) return e;
    const s = D3(e);
    if (s === 0) return e;
    const c = l.get(e);
    if (c) return c;
    const g = new Proxy(e, s === 2 ? t : i);
    return l.set(e, g), g
}
function uu(e) {
    return mi(e) ? uu(e.__v_raw) : !!(e && e.__v_isReactive)
}
function mi(e) {
    return !!(e && e.__v_isReadonly)
}
function on(e) {
    return !!(e && e.__v_isShallow)
}
function jo(e) {
    return e ? !!e.__v_raw : !1
}
function He(e) {
    const a = e && e.__v_raw;
    return a ? He(a) : e
}
function x3(e) {
    return !Ue(e, "__v_skip") && Object.isExtensible(e) && Qf(e, "__v_skip", !0), e
}
const ha = e => We(e) ? Jo(e) : e,
    Sr = e => We(e) ? pm(e) : e;
function Ca(e) {
    return e ? e.__v_isRef === !0 : !1
}
function w9(e) {
    return Am(e, !1)
}
function I9(e) {
    return Am(e, !0)
}
function Am(e, a) {
    return Ca(e) ? e : new F3(e, a)
}
class F3 {
    constructor(a, i) {
        this.dep = new Xo, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? a : He(a), this._value = i ? a : ha(a), this.__v_isShallow = i
    }
    get value() {
        return this.dep.track(), this._value
    }
    set value(a) {
        const i = this._rawValue,
            t = this.__v_isShallow || on(a) || mi(a);
        a = t ? a : He(a), fi(a, i) && (this._rawValue = a, this._value = t ? a : ha(a), this.dep.trigger())
    }
}
function _3(e) {
    return Ca(e) ? e.value : e
}
const R3 = {
    get: (e, a, i) => a === "__v_raw" ? e : _3(Reflect.get(e, a, i)),
    set: (e, a, i, t) => {
        const l = e[a];
        return Ca(l) && !Ca(i) ? (l.value = i, !0) : Reflect.set(e, a, i, t)
    }
};
function Nm(e) {
    return uu(e) ? e : new Proxy(e, R3)
}
class L3 {
    constructor(a, i, t) {
        this.fn = a, this.setter = i, this._value = void 0, this.dep = new Xo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = $u - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = t
    }
    notify() {
        if (this.flags |= 16, !(this.flags & 8) && Xe !== this) return tm(this, !0), !0
    }
    get value() {
        const a = this.dep.track();
        return sm(this), a && (a.version = this.dep.version), this._value
    }
    set value(a) {
        this.setter && this.setter(a)
    }
}
function P3(e, a, i = !1) {
    let t, l;
    return Se(e) ? t = e : (t = e.get, l = e.set), new L3(t, l, i)
}
const tr = {},
    wr = new WeakMap;
let Ti;
function k3(e, a = !1, i = Ti) {
    if (i) {
        let t = wr.get(i);
        t || wr.set(i, t = []), t.push(e)
    }
}
function z3(e, a, i = Ye) {
    const {
        immediate: t,
        deep: l,
        once: s,
        scheduler: c,
        augmentJob: g,
        call: f
    } = i, A = U => l ? U : on(U) || l === !1 || l === 0 ? Vn(U, 1) : Vn(U);
    let h, p, C, x, Y = !1,
        w = !1;
    if (Ca(e) ? (p = () => e.value, Y = on(e)) : uu(e) ? (p = () => A(e), Y = !0) : pe(e) ? (w = !0, Y = e.some(U => uu(U) || on(U)), p = () => e.map(U => {
            if (Ca(U)) return U.value;
            if (uu(U)) return A(U);
            if (Se(U)) return f ? f(U, 2) : U()
        })) : Se(e) ? a ? p = f ? () => f(e, 2) : e : p = () => {
            if (C) {
                Wn();
                try {
                    C()
                } finally {
                    Jn()
                }
            }
            const U = Ti;
            Ti = h;
            try {
                return f ? f(e, 3, [x]) : e(x)
            } finally {
                Ti = U
            }
        } : p = vn, a && l) {
        const U = p,
            O = l === !0 ? 1 / 0 : l;
        p = () => Vn(U(), O)
    }
    const v = g3(),
        B = () => {
            h.stop(), v && v.active && Ho(v.effects, h)
        };
    if (s && a) {
        const U = a;
        a = (...O) => {
            U(...O), B()
        }
    }
    let R = w ? new Array(e.length).fill(tr) : tr;
    const V = U => {
        if (!(!(h.flags & 1) || !h.dirty && !U))
            if (a) {
                const O = h.run();
                if (l || Y || (w ? O.some((z, Q) => fi(z, R[Q])) : fi(O, R))) {
                    C && C();
                    const z = Ti;
                    Ti = h;
                    try {
                        const Q = [O, R === tr ? void 0 : w && R[0] === tr ? [] : R, x];
                        R = O, f ? f(a, 3, Q) : a(...Q)
                    } finally {
                        Ti = z
                    }
                }
            } else h.run()
    };
    return g && g(V), h = new im(p), h.scheduler = c ? () => c(V, !1) : V, x = U => k3(U, !1, h), C = h.onStop = () => {
        const U = wr.get(h);
        if (U) {
            if (f) f(U, 4);
            else
                for (const O of U) O();
            wr.delete(h)
        }
    }, a ? t ? V(!0) : R = h.run() : c ? c(V.bind(null, !0), !0) : h.run(), B.pause = h.pause.bind(h), B.resume = h.resume.bind(h), B.stop = B, B
}
function Vn(e, a = 1 / 0, i) {
    if (a <= 0 || !We(e) || e.__v_skip || (i = i || new Set, i.has(e))) return e;
    if (i.add(e), a--, Ca(e)) Vn(e.value, a, i);
    else if (pe(e))
        for (let t = 0; t < e.length; t++) Vn(e[t], a, i);
    else if (Or(e) || iu(e)) e.forEach(t => {
        Vn(t, a, i)
    });
    else if (qf(e)) {
        for (const t in e) Vn(e[t], a, i);
        for (const t of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, t) && Vn(e[t], a, i)
    }
    return e
}
/**
 * @vue/runtime-core v3.5.16
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function ut(e, a, i, t) {
    try {
        return t ? e(...t) : e()
    } catch (l) {
        Wr(l, a, i)
    }
}
function Dn(e, a, i, t) {
    if (Se(e)) {
        const l = ut(e, a, i, t);
        return l && $f(l) && l.catch(s => {
            Wr(s, a, i)
        }), l
    }
    if (pe(e)) {
        const l = [];
        for (let s = 0; s < e.length; s++) l.push(Dn(e[s], a, i, t));
        return l
    }
}
function Wr(e, a, i, t = !0) {
    const l = a ? a.vnode : null,
        {
            errorHandler: s,
            throwUnhandledErrorInProduction: c
        } = a && a.appContext.config || Ye;
    if (a) {
        let g = a.parent;
        const f = a.proxy,
            A = `https://vuejs.org/error-reference/#runtime-${i}`;
        for (; g;) {
            const h = g.ec;
            if (h) {
                for (let p = 0; p < h.length; p++)
                    if (h[p](e, f, A) === !1) return
            }
            g = g.parent
        }
        if (s) {
            Wn(), ut(s, null, 10, [e, f, A]), Jn();
            return
        }
    }
    K3(e, i, l, t, c)
}
function K3(e, a, i, t = !0, l = !1) {
    if (l) throw e;
    console.error(e)
}
const Ta = [];
let wn = -1;
const tu = [];
let oi = null,
    au = 0;
const ym = Promise.resolve();
let Ir = null;
function Cm(e) {
    const a = Ir || ym;
    return e ? a.then(this ? e.bind(this) : e) : a
}
function H3(e) {
    let a = wn + 1,
        i = Ta.length;
    for (; a < i;) {
        const t = a + i >>> 1,
            l = Ta[t],
            s = qu(l);
        s < e || s === e && l.flags & 2 ? a = t + 1 : i = t
    }
    return a
}
function qo(e) {
    if (!(e.flags & 1)) {
        const a = qu(e),
            i = Ta[Ta.length - 1];
        !i || !(e.flags & 2) && a >= qu(i) ? Ta.push(e) : Ta.splice(H3(a), 0, e), e.flags |= 1, Mm()
    }
}
function Mm() {
    Ir || (Ir = ym.then(wm))
}
function U3(e) {
    pe(e) ? tu.push(...e) : oi && e.id === -1 ? oi.splice(au + 1, 0, e) : e.flags & 1 || (tu.push(e), e.flags |= 1), Mm()
}
function td(e, a, i = wn + 1) {
    for (; i < Ta.length; i++) {
        const t = Ta[i];
        if (t && t.flags & 2) {
            if (e && t.id !== e.uid) continue;
            Ta.splice(i, 1), i--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2)
        }
    }
}
function Sm(e) {
    if (tu.length) {
        const a = [...new Set(tu)].sort((i, t) => qu(i) - qu(t));
        if (tu.length = 0, oi) {
            oi.push(...a);
            return
        }
        for (oi = a, au = 0; au < oi.length; au++) {
            const i = oi[au];
            i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2
        }
        oi = null, au = 0
    }
}
const qu = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function wm(e) {
    try {
        for (wn = 0; wn < Ta.length; wn++) {
            const a = Ta[wn];
            a && !(a.flags & 8) && (a.flags & 4 && (a.flags &= -2), ut(a, a.i, a.i ? 15 : 14), a.flags & 4 || (a.flags &= -2))
        }
    } finally {
        for (; wn < Ta.length; wn++) {
            const a = Ta[wn];
            a && (a.flags &= -2)
        }
        wn = -1, Ta.length = 0, Sm(), Ir = null, (Ta.length || tu.length) && wm()
    }
}
let Ea = null,
    Jr = null;
function br(e) {
    const a = Ea;
    return Ea = e, Jr = e && e.type.__scopeId || null, a
}
function b9(e) {
    Jr = e
}
function B9() {
    Jr = null
}
function O3(e, a = Ea, i) {
    if (!a || e._n) return e;
    const t = (...l) => {
        t._d && Ad(-1);
        const s = br(a);
        let c;
        try {
            c = e(...l)
        } finally {
            br(s), t._d && Ad(1)
        }
        return c
    };
    return t._n = !0, t._c = !0, t._d = !0, t
}
function v9(e, a) {
    if (Ea === null) return e;
    const i = Qr(Ea),
        t = e.dirs || (e.dirs = []);
    for (let l = 0; l < a.length; l++) {
        let [s, c, g, f = Ye] = a[l];
        s && (Se(s) && (s = {
            mounted: s,
            updated: s
        }), s.deep && Vn(c), t.push({
            dir: s,
            instance: i,
            value: c,
            oldValue: void 0,
            arg: g,
            modifiers: f
        }))
    }
    return e
}
function Bi(e, a, i, t) {
    const l = e.dirs,
        s = a && a.dirs;
    for (let c = 0; c < l.length; c++) {
        const g = l[c];
        s && (g.oldValue = s[c].value);
        let f = g.dir[t];
        f && (Wn(), Dn(f, i, 8, [e.el, g, e, a]), Jn())
    }
}
const Im = Symbol("_vte"),
    G3 = e => e.__isTeleport,
    Vu = e => e && (e.disabled || e.disabled === ""),
    rd = e => e && (e.defer || e.defer === ""),
    ld = e => typeof SVGElement < "u" && e instanceof SVGElement,
    sd = e => typeof MathMLElement == "function" && e instanceof MathMLElement,
    yo = (e, a) => {
        const i = e && e.to;
        return ea(i) ? a ? a(i) : null : i
    },
    bm = {
        name: "Teleport",
        __isTeleport: !0,
        process(e, a, i, t, l, s, c, g, f, A) {
            const {
                mc: h,
                pc: p,
                pbc: C,
                o: {
                    insert: x,
                    querySelector: Y,
                    createText: w,
                    createComment: v
                }
            } = A, B = Vu(a.props);
            let {
                shapeFlag: R,
                children: V,
                dynamicChildren: U
            } = a;
            if (e == null) {
                const O = a.el = w(""),
                    z = a.anchor = w("");
                x(O, i, t), x(z, i, t);
                const Q = (k, $) => {
                        R & 16 && (l && l.isCE && (l.ce._teleportTarget = k), h(V, k, $, l, s, c, g, f))
                    },
                    L = () => {
                        const k = a.target = yo(a.props, Y),
                            $ = Bm(k, a, w, x);
                        k && (c !== "svg" && ld(k) ? c = "svg" : c !== "mathml" && sd(k) && (c = "mathml"), B || (Q(k, $), mr(a, !1)))
                    };
                B && (Q(i, z), mr(a, !0)), rd(a.props) ? (a.el.__isMounted = !1, Da(() => {
                    L(), delete a.el.__isMounted
                }, s)) : L()
            } else {
                if (rd(a.props) && e.el.__isMounted === !1) {
                    Da(() => {
                        bm.process(e, a, i, t, l, s, c, g, f, A)
                    }, s);
                    return
                }
                a.el = e.el, a.targetStart = e.targetStart;
                const O = a.anchor = e.anchor,
                    z = a.target = e.target,
                    Q = a.targetAnchor = e.targetAnchor,
                    L = Vu(e.props),
                    k = L ? i : z,
                    $ = L ? O : Q;
                if (c === "svg" || ld(z) ? c = "svg" : (c === "mathml" || sd(z)) && (c = "mathml"), U ? (C(e.dynamicChildren, U, k, l, s, c, g), n0(e, a, !0)) : f || p(e, a, k, $, l, s, c, g, !1), B) L ? a.props && e.props && a.props.to !== e.props.to && (a.props.to = e.props.to) : rr(a, i, O, A, 1);
                else if ((a.props && a.props.to) !== (e.props && e.props.to)) {
                    const le = a.target = yo(a.props, Y);
                    le && rr(a, le, null, A, 0)
                } else L && rr(a, z, Q, A, 1);
                mr(a, B)
            }
        },
        remove(e, a, i, {
            um: t,
            o: {
                remove: l
            }
        }, s) {
            const {
                shapeFlag: c,
                children: g,
                anchor: f,
                targetStart: A,
                targetAnchor: h,
                target: p,
                props: C
            } = e;
            if (p && (l(A), l(h)), s && l(f), c & 16) {
                const x = s || !Vu(C);
                for (let Y = 0; Y < g.length; Y++) {
                    const w = g[Y];
                    t(w, a, i, x, !!w.dynamicChildren)
                }
            }
        },
        move: rr,
        hydrate: Z3
    };
function rr(e, a, i, {
    o: {
        insert: t
    },
    m: l
}, s = 2) {
    s === 0 && t(e.targetAnchor, a, i);
    const {
        el: c,
        anchor: g,
        shapeFlag: f,
        children: A,
        props: h
    } = e, p = s === 2;
    if (p && t(c, a, i), (!p || Vu(h)) && f & 16)
        for (let C = 0; C < A.length; C++) l(A[C], a, i, 2);
    p && t(g, a, i)
}
function Z3(e, a, i, t, l, s, {
    o: {
        nextSibling: c,
        parentNode: g,
        querySelector: f,
        insert: A,
        createText: h
    }
}, p) {
    const C = a.target = yo(a.props, f);
    if (C) {
        const x = Vu(a.props),
            Y = C._lpa || C.firstChild;
        if (a.shapeFlag & 16)
            if (x) a.anchor = p(c(e), a, g(e), i, t, l, s), a.targetStart = Y, a.targetAnchor = Y && c(Y);
            else {
                a.anchor = c(e);
                let w = Y;
                for (; w;) {
                    if (w && w.nodeType === 8) {
                        if (w.data === "teleport start anchor") a.targetStart = w;
                        else if (w.data === "teleport anchor") {
                            a.targetAnchor = w, C._lpa = a.targetAnchor && c(a.targetAnchor);
                            break
                        }
                    }
                    w = c(w)
                }
                a.targetAnchor || Bm(C, a, h, A), p(Y && c(Y), a, C, i, t, l, s)
            }
        mr(a, x)
    }
    return a.anchor && c(a.anchor)
}
const D9 = bm;
function mr(e, a) {
    const i = e.ctx;
    if (i && i.ut) {
        let t, l;
        for (a ? (t = e.el, l = e.anchor) : (t = e.targetStart, l = e.targetAnchor); t && t !== l;) t.nodeType === 1 && t.setAttribute("data-v-owner", i.uid), t = t.nextSibling;
        i.ut()
    }
}
function Bm(e, a, i, t) {
    const l = a.targetStart = i(""),
        s = a.targetAnchor = i("");
    return l[Im] = s, e && (t(l, e), t(s, e)), s
}
function Qo(e, a) {
    e.shapeFlag & 6 && e.component ? (e.transition = a, Qo(e.component.subTree, a)) : e.shapeFlag & 128 ? (e.ssContent.transition = a.clone(e.ssContent), e.ssFallback.transition = a.clone(e.ssFallback)) : e.transition = a
} /*! #__NO_SIDE_EFFECTS__ */
function T9(e, a) {
    return Se(e) ? Ma({
        name: e.name
    }, a, {
        setup: e
    }) : e
}
function vm(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}
function Br(e, a, i, t, l = !1) {
    if (pe(e)) {
        e.forEach((Y, w) => Br(Y, a && (pe(a) ? a[w] : a), i, t, l));
        return
    }
    if (ru(t) && !l) {
        t.shapeFlag & 512 && t.type.__asyncResolved && t.component.subTree.component && Br(e, a, i, t.component.subTree);
        return
    }
    const s = t.shapeFlag & 4 ? Qr(t.component) : t.el,
        c = l ? null : s,
        {
            i: g,
            r: f
        } = e,
        A = a && a.r,
        h = g.refs === Ye ? g.refs = {} : g.refs,
        p = g.setupState,
        C = He(p),
        x = p === Ye ? () => !1 : Y => Ue(C, Y);
    if (A != null && A !== f && (ea(A) ? (h[A] = null, x(A) && (p[A] = null)) : Ca(A) && (A.value = null)), Se(f)) ut(f, g, 12, [c, h]);
    else {
        const Y = ea(f),
            w = Ca(f);
        if (Y || w) {
            const v = () => {
                if (e.f) {
                    const B = Y ? x(f) ? p[f] : h[f] : f.value;
                    l ? pe(B) && Ho(B, s) : pe(B) ? B.includes(s) || B.push(s) : Y ? (h[f] = [s], x(f) && (p[f] = h[f])) : (f.value = [s], e.k && (h[e.k] = f.value))
                } else Y ? (h[f] = c, x(f) && (p[f] = c)) : w && (f.value = c, e.k && (h[e.k] = c))
            };
            c ? (v.id = -1, Da(v, i)) : v()
        }
    }
}
Yr().requestIdleCallback;
Yr().cancelIdleCallback;
const ru = e => !!e.type.__asyncLoader,
    Dm = e => e.type.__isKeepAlive;
function Y3(e, a) {
    Tm(e, "a", a)
}
function V3(e, a) {
    Tm(e, "da", a)
}
function Tm(e, a, i = ya) {
    const t = e.__wdc || (e.__wdc = () => {
        let l = i;
        for (; l;) {
            if (l.isDeactivated) return;
            l = l.parent
        }
        return e()
    });
    if ($r(a, t, i), i) {
        let l = i.parent;
        for (; l && l.parent;) Dm(l.parent.vnode) && X3(t, a, i, l), l = l.parent
    }
}
function X3(e, a, i, t) {
    const l = $r(a, e, t, !0);
    xm(() => {
        Ho(t[a], l)
    }, i)
}
function $r(e, a, i = ya, t = !1) {
    if (i) {
        const l = i[e] || (i[e] = []),
            s = a.__weh || (a.__weh = (...c) => {
                Wn();
                const g = tt(i),
                    f = Dn(a, i, e, c);
                return g(), Jn(), f
            });
        return t ? l.unshift(s) : l.push(s), s
    }
}
const jn = e => (a, i = ya) => {
        (!at || e === "sp") && $r(e, (...t) => a(...t), i)
    },
    W3 = jn("bm"),
    J3 = jn("m"),
    $3 = jn("bu"),
    j3 = jn("u"),
    q3 = jn("bum"),
    xm = jn("um"),
    Q3 = jn("sp"),
    eM = jn("rtg"),
    aM = jn("rtc");
function nM(e, a = ya) {
    $r("ec", e, a)
}
const iM = "components",
    Fm = Symbol.for("v-ndc");
function x9(e) {
    return ea(e) ? uM(iM, e, !1) || e : e || Fm
}
function uM(e, a, i = !0, t = !1) {
    const l = Ea || ya;
    if (l) {
        const s = l.type; {
            const g = VM(s, !1);
            if (g && (g === a || g === cn(a) || g === Zr(cn(a)))) return s
        }
        const c = od(l[e] || s[e], a) || od(l.appContext[e], a);
        return !c && t ? s : c
    }
}
function od(e, a) {
    return e && (e[a] || e[cn(a)] || e[Zr(cn(a))])
}
function F9(e, a, i, t) {
    let l;
    const s = i,
        c = pe(e);
    if (c || ea(e)) {
        const g = c && uu(e);
        let f = !1,
            A = !1;
        g && (f = !on(e), A = mi(e), e = Xr(e)), l = new Array(e.length);
        for (let h = 0, p = e.length; h < p; h++) l[h] = a(f ? A ? Sr(ha(e[h])) : ha(e[h]) : e[h], h, void 0, s)
    } else if (typeof e == "number") {
        l = new Array(e);
        for (let g = 0; g < e; g++) l[g] = a(g + 1, g, void 0, s)
    } else if (We(e))
        if (e[Symbol.iterator]) l = Array.from(e, (g, f) => a(g, f, void 0, s));
        else {
            const g = Object.keys(e);
            l = new Array(g.length);
            for (let f = 0, A = g.length; f < A; f++) {
                const h = g[f];
                l[f] = a(e[h], h, f, s)
            }
        }
    else l = [];
    return l
}
function _9(e, a, i = {}, t, l) {
    if (Ea.ce || Ea.parent && ru(Ea.parent) && Ea.parent.ce) return a !== "default" && (i.name = a), Io(), bo(sn, null, [xa("slot", i, t && t())], 64);
    let s = e[a];
    s && s._c && (s._d = !1), Io();
    const c = s && _m(s(i)),
        g = i.key || c && c.key,
        f = bo(sn, {
            key: (g && !pn(g) ? g : `_${a}`) + (!c && t ? "_fb" : "")
        }, c || (t ? t() : []), c && e._ === 1 ? 64 : -2);
    return !l && f.scopeId && (f.slotScopeIds = [f.scopeId + "-s"]), s && s._c && (s._d = !0), f
}
function _m(e) {
    return e.some(a => et(a) ? !(a.type === $n || a.type === sn && !_m(a.children)) : !0) ? e : null
}
const Co = e => e ? Qm(e) ? Qr(e) : Co(e.parent) : null,
    Xu = Ma(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => Co(e.parent),
        $root: e => Co(e.root),
        $host: e => e.ce,
        $emit: e => e.emit,
        $options: e => Lm(e),
        $forceUpdate: e => e.f || (e.f = () => {
            qo(e.update)
        }),
        $nextTick: e => e.n || (e.n = Cm.bind(e.proxy)),
        $watch: e => bM.bind(e)
    }),
    Ms = (e, a) => e !== Ye && !e.__isScriptSetup && Ue(e, a),
    tM = {
        get({
            _: e
        }, a) {
            if (a === "__v_skip") return !0;
            const {
                ctx: i,
                setupState: t,
                data: l,
                props: s,
                accessCache: c,
                type: g,
                appContext: f
            } = e;
            let A;
            if (a[0] !== "$") {
                const x = c[a];
                if (x !== void 0) switch (x) {
                case 1:
                    return t[a];
                case 2:
                    return l[a];
                case 4:
                    return i[a];
                case 3:
                    return s[a]
                } else {
                    if (Ms(t, a)) return c[a] = 1, t[a];
                    if (l !== Ye && Ue(l, a)) return c[a] = 2, l[a];
                    if ((A = e.propsOptions[0]) && Ue(A, a)) return c[a] = 3, s[a];
                    if (i !== Ye && Ue(i, a)) return c[a] = 4, i[a];
                    Mo && (c[a] = 0)
                }
            }
            const h = Xu[a];
            let p, C;
            if (h) return a === "$attrs" && Na(e.attrs, "get", ""), h(e);
            if ((p = g.__cssModules) && (p = p[a])) return p;
            if (i !== Ye && Ue(i, a)) return c[a] = 4, i[a];
            if (C = f.config.globalProperties, Ue(C, a)) return C[a]
        },
        set({
            _: e
        }, a, i) {
            const {
                data: t,
                setupState: l,
                ctx: s
            } = e;
            return Ms(l, a) ? (l[a] = i, !0) : t !== Ye && Ue(t, a) ? (t[a] = i, !0) : Ue(e.props, a) || a[0] === "$" && a.slice(1) in e ? !1 : (s[a] = i, !0)
        },
        has({
            _: {
                data: e,
                setupState: a,
                accessCache: i,
                ctx: t,
                appContext: l,
                propsOptions: s
            }
        }, c) {
            let g;
            return !!i[c] || e !== Ye && Ue(e, c) || Ms(a, c) || (g = s[0]) && Ue(g, c) || Ue(t, c) || Ue(Xu, c) || Ue(l.config.globalProperties, c)
        },
        defineProperty(e, a, i) {
            return i.get != null ? e._.accessCache[a] = 0 : Ue(i, "value") && this.set(e, a, i.value, null), Reflect.defineProperty(e, a, i)
        }
    };
function cd(e) {
    return pe(e) ? e.reduce((a, i) => (a[i] = null, a), {}) : e
}
let Mo = !0;
function rM(e) {
    const a = Lm(e),
        i = e.proxy,
        t = e.ctx;
    Mo = !1, a.beforeCreate && gd(a.beforeCreate, e, "bc");
    const {
        data: l,
        computed: s,
        methods: c,
        watch: g,
        provide: f,
        inject: A,
        created: h,
        beforeMount: p,
        mounted: C,
        beforeUpdate: x,
        updated: Y,
        activated: w,
        deactivated: v,
        beforeDestroy: B,
        beforeUnmount: R,
        destroyed: V,
        unmounted: U,
        render: O,
        renderTracked: z,
        renderTriggered: Q,
        errorCaptured: L,
        serverPrefetch: k,
        expose: $,
        inheritAttrs: le,
        components: ge,
        directives: te,
        filters: ye
    } = a;
    if (A && lM(A, t, null), c)
        for (const X in c) {
            const ee = c[X];
            Se(ee) && (t[X] = ee.bind(i))
        }
    if (l) {
        const X = l.call(i, i);
        We(X) && (e.data = Jo(X))
    }
    if (Mo = !0, s)
        for (const X in s) {
            const ee = s[X],
                xe = Se(ee) ? ee.bind(i, i) : Se(ee.get) ? ee.get.bind(i, i) : vn,
                Ne = !Se(ee) && Se(ee.set) ? ee.set.bind(i) : vn,
                Oe = WM({
                    get: xe,
                    set: Ne
                });
            Object.defineProperty(t, X, {
                enumerable: !0,
                configurable: !0,
                get: () => Oe.value,
                set: wa => Oe.value = wa
            })
        }
    if (g)
        for (const X in g) Rm(g[X], t, i, X);
    if (f) {
        const X = Se(f) ? f.call(i) : f;
        Reflect.ownKeys(X).forEach(ee => {
            fM(ee, X[ee])
        })
    }
    h && gd(h, e, "c");
    function D(X, ee) {
        pe(ee) ? ee.forEach(xe => X(xe.bind(i))) : ee && X(ee.bind(i))
    }
    if (D(W3, p), D(J3, C), D($3, x), D(j3, Y), D(Y3, w), D(V3, v), D(nM, L), D(aM, z), D(eM, Q), D(q3, R), D(xm, U), D(Q3, k), pe($))
        if ($.length) {
            const X = e.exposed || (e.exposed = {});
            $.forEach(ee => {
                Object.defineProperty(X, ee, {
                    get: () => i[ee],
                    set: xe => i[ee] = xe
                })
            })
        } else e.exposed || (e.exposed = {});
    O && e.render === vn && (e.render = O), le != null && (e.inheritAttrs = le), ge && (e.components = ge), te && (e.directives = te), k && vm(e)
}
function lM(e, a, i = vn) {
    pe(e) && (e = So(e));
    for (const t in e) {
        const l = e[t];
        let s;
        We(l) ? "default" in l ? s = hr(l.from || t, l.default, !0) : s = hr(l.from || t) : s = hr(l), Ca(s) ? Object.defineProperty(a, t, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: c => s.value = c
        }) : a[t] = s
    }
}
function gd(e, a, i) {
    Dn(pe(e) ? e.map(t => t.bind(a.proxy)) : e.bind(a.proxy), a, i)
}
function Rm(e, a, i, t) {
    let l = t.includes(".") ? Xm(i, t) : () => i[t];
    if (ea(e)) {
        const s = a[e];
        Se(s) && ws(l, s)
    } else if (Se(e)) ws(l, e.bind(i));
    else if (We(e))
        if (pe(e)) e.forEach(s => Rm(s, a, i, t));
        else {
            const s = Se(e.handler) ? e.handler.bind(i) : a[e.handler];
            Se(s) && ws(l, s, e)
        }
}
function Lm(e) {
    const a = e.type,
        {
            mixins: i,
            extends: t
        } = a,
        {
            mixins: l,
            optionsCache: s,
            config: {
                optionMergeStrategies: c
            }
        } = e.appContext,
        g = s.get(a);
    let f;
    return g ? f = g : !l.length && !i && !t ? f = a : (f = {}, l.length && l.forEach(A => vr(f, A, c, !0)), vr(f, a, c)), We(a) && s.set(a, f), f
}
function vr(e, a, i, t = !1) {
    const {
        mixins: l,
        extends: s
    } = a;
    s && vr(e, s, i, !0), l && l.forEach(c => vr(e, c, i, !0));
    for (const c in a)
        if (!(t && c === "expose")) {
            const g = sM[c] || i && i[c];
            e[c] = g ? g(e[c], a[c]) : a[c]
        }
    return e
}
const sM = {
    data: dd,
    props: fd,
    emits: fd,
    methods: Ku,
    computed: Ku,
    beforeCreate: va,
    created: va,
    beforeMount: va,
    mounted: va,
    beforeUpdate: va,
    updated: va,
    beforeDestroy: va,
    beforeUnmount: va,
    destroyed: va,
    unmounted: va,
    activated: va,
    deactivated: va,
    errorCaptured: va,
    serverPrefetch: va,
    components: Ku,
    directives: Ku,
    watch: cM,
    provide: dd,
    inject: oM
};
function dd(e, a) {
    return a ? e ? function () {
        return Ma(Se(e) ? e.call(this, this) : e, Se(a) ? a.call(this, this) : a)
    } : a : e
}
function oM(e, a) {
    return Ku(So(e), So(a))
}
function So(e) {
    if (pe(e)) {
        const a = {};
        for (let i = 0; i < e.length; i++) a[e[i]] = e[i];
        return a
    }
    return e
}
function va(e, a) {
    return e ? [...new Set([].concat(e, a))] : a
}
function Ku(e, a) {
    return e ? Ma(Object.create(null), e, a) : a
}
function fd(e, a) {
    return e ? pe(e) && pe(a) ? [...new Set([...e, ...a])] : Ma(Object.create(null), cd(e), cd(a ?? {})) : a
}
function cM(e, a) {
    if (!e) return a;
    if (!a) return e;
    const i = Ma(Object.create(null), e);
    for (const t in a) i[t] = va(e[t], a[t]);
    return i
}
function Pm() {
    return {
        app: null,
        config: {
            isNativeTag: $1,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let gM = 0;
function dM(e, a) {
    return function (t, l = null) {
        Se(t) || (t = Ma({}, t)), l != null && !We(l) && (l = null);
        const s = Pm(),
            c = new WeakSet,
            g = [];
        let f = !1;
        const A = s.app = {
            _uid: gM++,
            _component: t,
            _props: l,
            _container: null,
            _context: s,
            _instance: null,
            version: JM,
            get config() {
                return s.config
            },
            set config(h) {},
            use(h, ...p) {
                return c.has(h) || (h && Se(h.install) ? (c.add(h), h.install(A, ...p)) : Se(h) && (c.add(h), h(A, ...p))), A
            },
            mixin(h) {
                return s.mixins.includes(h) || s.mixins.push(h), A
            },
            component(h, p) {
                return p ? (s.components[h] = p, A) : s.components[h]
            },
            directive(h, p) {
                return p ? (s.directives[h] = p, A) : s.directives[h]
            },
            mount(h, p, C) {
                if (!f) {
                    const x = A._ceVNode || xa(t, l);
                    return x.appContext = s, C === !0 ? C = "svg" : C === !1 && (C = void 0), e(x, h, C), f = !0, A._container = h, h.__vue_app__ = A, Qr(x.component)
                }
            },
            onUnmount(h) {
                g.push(h)
            },
            unmount() {
                f && (Dn(g, A._instance, 16), e(null, A._container), delete A._container.__vue_app__)
            },
            provide(h, p) {
                return s.provides[h] = p, A
            },
            runWithContext(h) {
                const p = lu;
                lu = A;
                try {
                    return h()
                } finally {
                    lu = p
                }
            }
        };
        return A
    }
}
let lu = null;
function fM(e, a) {
    if (ya) {
        let i = ya.provides;
        const t = ya.parent && ya.parent.provides;
        t === i && (i = ya.provides = Object.create(t)), i[e] = a
    }
}
function hr(e, a, i = !1) {
    const t = ya || Ea;
    if (t || lu) {
        let l = lu ? lu._context.provides : t ? t.parent == null || t.ce ? t.vnode.appContext && t.vnode.appContext.provides : t.parent.provides : void 0;
        if (l && e in l) return l[e];
        if (arguments.length > 1) return i && Se(a) ? a.call(t && t.proxy) : a
    }
}
const km = {},
    zm = () => Object.create(km),
    Km = e => Object.getPrototypeOf(e) === km;
function mM(e, a, i, t = !1) {
    const l = {},
        s = zm();
    e.propsDefaults = Object.create(null), Hm(e, a, l, s);
    for (const c in e.propsOptions[0]) c in l || (l[c] = void 0);
    i ? e.props = t ? l : T3(l) : e.type.props ? e.props = l : e.props = s, e.attrs = s
}
function hM(e, a, i, t) {
    const {
        props: l,
        attrs: s,
        vnode: {
            patchFlag: c
        }
    } = e, g = He(l), [f] = e.propsOptions;
    let A = !1;
    if ((t || c > 0) && !(c & 16)) {
        if (c & 8) {
            const h = e.vnode.dynamicProps;
            for (let p = 0; p < h.length; p++) {
                let C = h[p];
                if (jr(e.emitsOptions, C)) continue;
                const x = a[C];
                if (f)
                    if (Ue(s, C)) x !== s[C] && (s[C] = x, A = !0);
                    else {
                        const Y = cn(C);
                        l[Y] = wo(f, g, Y, x, e, !1)
                    }
                else x !== s[C] && (s[C] = x, A = !0)
            }
        }
    } else {
        Hm(e, a, l, s) && (A = !0);
        let h;
        for (const p in g)(!a || !Ue(a, p) && ((h = Ei(p)) === p || !Ue(a, h))) && (f ? i && (i[p] !== void 0 || i[h] !== void 0) && (l[p] = wo(f, g, p, void 0, e, !0)) : delete l[p]);
        if (s !== g)
            for (const p in s)(!a || !Ue(a, p)) && (delete s[p], A = !0)
    }
    A && Yn(e.attrs, "set", "")
}
function Hm(e, a, i, t) {
    const [l, s] = e.propsOptions;
    let c = !1,
        g;
    if (a)
        for (let f in a) {
            if (Gu(f)) continue;
            const A = a[f];
            let h;
            l && Ue(l, h = cn(f)) ? !s || !s.includes(h) ? i[h] = A : (g || (g = {}))[h] = A : jr(e.emitsOptions, f) || (!(f in t) || A !== t[f]) && (t[f] = A, c = !0)
        }
    if (s) {
        const f = He(i),
            A = g || Ye;
        for (let h = 0; h < s.length; h++) {
            const p = s[h];
            i[p] = wo(l, f, p, A[p], e, !Ue(A, p))
        }
    }
    return c
}
function wo(e, a, i, t, l, s) {
    const c = e[i];
    if (c != null) {
        const g = Ue(c, "default");
        if (g && t === void 0) {
            const f = c.default;
            if (c.type !== Function && !c.skipFactory && Se(f)) {
                const {
                    propsDefaults: A
                } = l;
                if (i in A) t = A[i];
                else {
                    const h = tt(l);
                    t = A[i] = f.call(null, a), h()
                }
            } else t = f;
            l.ce && l.ce._setProp(i, t)
        }
        c[0] && (s && !g ? t = !1 : c[1] && (t === "" || t === Ei(i)) && (t = !0))
    }
    return t
}
const EM = new WeakMap;
function Um(e, a, i = !1) {
    const t = i ? EM : a.propsCache,
        l = t.get(e);
    if (l) return l;
    const s = e.props,
        c = {},
        g = [];
    let f = !1;
    if (!Se(e)) {
        const h = p => {
            f = !0;
            const [C, x] = Um(p, a, !0);
            Ma(c, C), x && g.push(...x)
        };
        !i && a.mixins.length && a.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h)
    }
    if (!s && !f) return We(e) && t.set(e, nu), nu;
    if (pe(s))
        for (let h = 0; h < s.length; h++) {
            const p = cn(s[h]);
            md(p) && (c[p] = Ye)
        } else if (s)
            for (const h in s) {
                const p = cn(h);
                if (md(p)) {
                    const C = s[h],
                        x = c[p] = pe(C) || Se(C) ? {
                            type: C
                        } : Ma({}, C),
                        Y = x.type;
                    let w = !1,
                        v = !0;
                    if (pe(Y))
                        for (let B = 0; B < Y.length; ++B) {
                            const R = Y[B],
                                V = Se(R) && R.name;
                            if (V === "Boolean") {
                                w = !0;
                                break
                            } else V === "String" && (v = !1)
                        } else w = Se(Y) && Y.name === "Boolean";
                    x[0] = w, x[1] = v, (w || Ue(x, "default")) && g.push(p)
                }
            }
    const A = [c, g];
    return We(e) && t.set(e, A), A
}
function md(e) {
    return e[0] !== "$" && !Gu(e)
}
const e0 = e => e[0] === "_" || e === "$stable",
    a0 = e => pe(e) ? e.map(bn) : [bn(e)],
    pM = (e, a, i) => {
        if (a._n) return a;
        const t = O3((...l) => a0(a(...l)), i);
        return t._c = !1, t
    },
    Om = (e, a, i) => {
        const t = e._ctx;
        for (const l in e) {
            if (e0(l)) continue;
            const s = e[l];
            if (Se(s)) a[l] = pM(l, s, t);
            else if (s != null) {
                const c = a0(s);
                a[l] = () => c
            }
        }
    },
    Gm = (e, a) => {
        const i = a0(a);
        e.slots.default = () => i
    },
    Zm = (e, a, i) => {
        for (const t in a)(i || !e0(t)) && (e[t] = a[t])
    },
    AM = (e, a, i) => {
        const t = e.slots = zm();
        if (e.vnode.shapeFlag & 32) {
            const l = a._;
            l ? (Zm(t, a, i), i && Qf(t, "_", l, !0)) : Om(a, t)
        } else a && Gm(e, a)
    },
    NM = (e, a, i) => {
        const {
            vnode: t,
            slots: l
        } = e;
        let s = !0,
            c = Ye;
        if (t.shapeFlag & 32) {
            const g = a._;
            g ? i && g === 1 ? s = !1 : Zm(l, a, i) : (s = !a.$stable, Om(a, l)), c = a
        } else a && (Gm(e, a), c = {
            default: 1
        });
        if (s)
            for (const g in l) !e0(g) && c[g] == null && delete l[g]
    },
    Da = _M;
function yM(e) {
    return CM(e)
}
function CM(e, a) {
    const i = Yr();
    i.__VUE__ = !0;
    const {
        insert: t,
        remove: l,
        patchProp: s,
        createElement: c,
        createText: g,
        createComment: f,
        setText: A,
        setElementText: h,
        parentNode: p,
        nextSibling: C,
        setScopeId: x = vn,
        insertStaticContent: Y
    } = e, w = (y, S, _, j = null, G = null, W = null, ne = void 0, ae = null, q = !!S.dynamicChildren) => {
        if (y === S) return;
        y && !ku(y, S) && (j = An(y), wa(y, G, W, !0), y = null), S.patchFlag === -2 && (q = !1, S.dynamicChildren = null);
        const {
            type: J,
            ref: de,
            shapeFlag: ue
        } = S;
        switch (J) {
        case qr:
            v(y, S, _, j);
            break;
        case $n:
            B(y, S, _, j);
            break;
        case Er:
            y == null && R(S, _, j, ne);
            break;
        case sn:
            ge(y, S, _, j, G, W, ne, ae, q);
            break;
        default:
            ue & 1 ? O(y, S, _, j, G, W, ne, ae, q) : ue & 6 ? te(y, S, _, j, G, W, ne, ae, q) : (ue & 64 || ue & 128) && J.process(y, S, _, j, G, W, ne, ae, q, Nn)
        }
        de != null && G && Br(de, y && y.ref, W, S || y, !S)
    }, v = (y, S, _, j) => {
        if (y == null) t(S.el = g(S.children), _, j);
        else {
            const G = S.el = y.el;
            S.children !== y.children && A(G, S.children)
        }
    }, B = (y, S, _, j) => {
        y == null ? t(S.el = f(S.children || ""), _, j) : S.el = y.el
    }, R = (y, S, _, j) => {
        [y.el, y.anchor] = Y(y.children, S, _, j, y.el, y.anchor)
    }, V = ({
        el: y,
        anchor: S
    }, _, j) => {
        let G;
        for (; y && y !== S;) G = C(y), t(y, _, j), y = G;
        t(S, _, j)
    }, U = ({
        el: y,
        anchor: S
    }) => {
        let _;
        for (; y && y !== S;) _ = C(y), l(y), y = _;
        l(S)
    }, O = (y, S, _, j, G, W, ne, ae, q) => {
        S.type === "svg" ? ne = "svg" : S.type === "math" && (ne = "mathml"), y == null ? z(S, _, j, G, W, ne, ae, q) : k(y, S, G, W, ne, ae, q)
    }, z = (y, S, _, j, G, W, ne, ae) => {
        let q, J;
        const {
            props: de,
            shapeFlag: ue,
            transition: oe,
            dirs: Ae
        } = y;
        if (q = y.el = c(y.type, W, de && de.is, de), ue & 8 ? h(q, y.children) : ue & 16 && L(y.children, q, null, j, G, Ss(y, W), ne, ae), Ae && Bi(y, null, j, "created"), Q(q, y, y.scopeId, ne, j), de) {
            for (const Le in de) Le !== "value" && !Gu(Le) && s(q, Le, null, de[Le], W, j);
            "value" in de && s(q, "value", null, de.value, W), (J = de.onVnodeBeforeMount) && Sn(J, j, y)
        }
        Ae && Bi(y, null, j, "beforeMount");
        const be = MM(G, oe);
        be && oe.beforeEnter(q), t(q, S, _), ((J = de && de.onVnodeMounted) || be || Ae) && Da(() => {
            J && Sn(J, j, y), be && oe.enter(q), Ae && Bi(y, null, j, "mounted")
        }, G)
    }, Q = (y, S, _, j, G) => {
        if (_ && x(y, _), j)
            for (let W = 0; W < j.length; W++) x(y, j[W]);
        if (G) {
            let W = G.subTree;
            if (S === W || Jm(W.type) && (W.ssContent === S || W.ssFallback === S)) {
                const ne = G.vnode;
                Q(y, ne, ne.scopeId, ne.slotScopeIds, G.parent)
            }
        }
    }, L = (y, S, _, j, G, W, ne, ae, q = 0) => {
        for (let J = q; J < y.length; J++) {
            const de = y[J] = ae ? ci(y[J]) : bn(y[J]);
            w(null, de, S, _, j, G, W, ne, ae)
        }
    }, k = (y, S, _, j, G, W, ne) => {
        const ae = S.el = y.el;
        let {
            patchFlag: q,
            dynamicChildren: J,
            dirs: de
        } = S;
        q |= y.patchFlag & 16;
        const ue = y.props || Ye,
            oe = S.props || Ye;
        let Ae;
        if (_ && vi(_, !1), (Ae = oe.onVnodeBeforeUpdate) && Sn(Ae, _, S, y), de && Bi(S, y, _, "beforeUpdate"), _ && vi(_, !0), (ue.innerHTML && oe.innerHTML == null || ue.textContent && oe.textContent == null) && h(ae, ""), J ? $(y.dynamicChildren, J, ae, _, j, Ss(S, G), W) : ne || ee(y, S, ae, null, _, j, Ss(S, G), W, !1), q > 0) {
            if (q & 16) le(ae, ue, oe, _, G);
            else if (q & 2 && ue.class !== oe.class && s(ae, "class", null, oe.class, G), q & 4 && s(ae, "style", ue.style, oe.style, G), q & 8) {
                const be = S.dynamicProps;
                for (let Le = 0; Le < be.length; Le++) {
                    const Pe = be[Le],
                        ga = ue[Pe],
                        la = oe[Pe];
                    (la !== ga || Pe === "value") && s(ae, Pe, ga, la, G, _)
                }
            }
            q & 1 && y.children !== S.children && h(ae, S.children)
        } else !ne && J == null && le(ae, ue, oe, _, G);
        ((Ae = oe.onVnodeUpdated) || de) && Da(() => {
            Ae && Sn(Ae, _, S, y), de && Bi(S, y, _, "updated")
        }, j)
    }, $ = (y, S, _, j, G, W, ne) => {
        for (let ae = 0; ae < S.length; ae++) {
            const q = y[ae],
                J = S[ae],
                de = q.el && (q.type === sn || !ku(q, J) || q.shapeFlag & 198) ? p(q.el) : _;
            w(q, J, de, null, j, G, W, ne, !0)
        }
    }, le = (y, S, _, j, G) => {
        if (S !== _) {
            if (S !== Ye)
                for (const W in S) !Gu(W) && !(W in _) && s(y, W, S[W], null, G, j);
            for (const W in _) {
                if (Gu(W)) continue;
                const ne = _[W],
                    ae = S[W];
                ne !== ae && W !== "value" && s(y, W, ae, ne, G, j)
            }
            "value" in _ && s(y, "value", S.value, _.value, G)
        }
    }, ge = (y, S, _, j, G, W, ne, ae, q) => {
        const J = S.el = y ? y.el : g(""),
            de = S.anchor = y ? y.anchor : g("");
        let {
            patchFlag: ue,
            dynamicChildren: oe,
            slotScopeIds: Ae
        } = S;
        Ae && (ae = ae ? ae.concat(Ae) : Ae), y == null ? (t(J, _, j), t(de, _, j), L(S.children || [], _, de, G, W, ne, ae, q)) : ue > 0 && ue & 64 && oe && y.dynamicChildren ? ($(y.dynamicChildren, oe, _, G, W, ne, ae), (S.key != null || G && S === G.subTree) && n0(y, S, !0)) : ee(y, S, _, de, G, W, ne, ae, q)
    }, te = (y, S, _, j, G, W, ne, ae, q) => {
        S.slotScopeIds = ae, y == null ? S.shapeFlag & 512 ? G.ctx.activate(S, _, j, ne, q) : ye(S, _, j, G, W, ne, q) : re(y, S, q)
    }, ye = (y, S, _, j, G, W, ne) => {
        const ae = y.component = UM(y, j, G);
        if (Dm(y) && (ae.ctx.renderer = Nn), OM(ae, !1, ne), ae.asyncDep) {
            if (G && G.registerDep(ae, D, ne), !y.el) {
                const q = ae.subTree = xa($n);
                B(null, q, S, _)
            }
        } else D(ae, y, S, _, G, W, ne)
    }, re = (y, S, _) => {
        const j = S.component = y.component;
        if (xM(y, S, _))
            if (j.asyncDep && !j.asyncResolved) {
                X(j, S, _);
                return
            } else j.next = S, j.update();
        else S.el = y.el, j.vnode = S
    }, D = (y, S, _, j, G, W, ne) => {
        const ae = () => {
            if (y.isMounted) {
                let {
                    next: ue,
                    bu: oe,
                    u: Ae,
                    parent: be,
                    vnode: Le
                } = y; {
                    const _a = Ym(y);
                    if (_a) {
                        ue && (ue.el = Le.el, X(y, ue, ne)), _a.asyncDep.then(() => {
                            y.isUnmounted || ae()
                        });
                        return
                    }
                }
                let Pe = ue,
                    ga;
                vi(y, !1), ue ? (ue.el = Le.el, X(y, ue, ne)) : ue = Le, oe && fr(oe), (ga = ue.props && ue.props.onVnodeBeforeUpdate) && Sn(ga, be, ue, Le), vi(y, !0);
                const la = Ed(y),
                    Fa = y.subTree;
                y.subTree = la, w(Fa, la, p(Fa.el), An(Fa), y, G, W), ue.el = la.el, Pe === null && FM(y, la.el), Ae && Da(Ae, G), (ga = ue.props && ue.props.onVnodeUpdated) && Da(() => Sn(ga, be, ue, Le), G)
            } else {
                let ue;
                const {
                    el: oe,
                    props: Ae
                } = S, {
                    bm: be,
                    m: Le,
                    parent: Pe,
                    root: ga,
                    type: la
                } = y, Fa = ru(S);
                vi(y, !1), be && fr(be), !Fa && (ue = Ae && Ae.onVnodeBeforeMount) && Sn(ue, Pe, S), vi(y, !0); {
                    ga.ce && ga.ce._injectChildStyle(la);
                    const _a = y.subTree = Ed(y);
                    w(null, _a, _, j, y, G, W), S.el = _a.el
                }
                if (Le && Da(Le, G), !Fa && (ue = Ae && Ae.onVnodeMounted)) {
                    const _a = S;
                    Da(() => Sn(ue, Pe, _a), G)
                }(S.shapeFlag & 256 || Pe && ru(Pe.vnode) && Pe.vnode.shapeFlag & 256) && y.a && Da(y.a, G), y.isMounted = !0, S = _ = j = null
            }
        };
        y.scope.on();
        const q = y.effect = new im(ae);
        y.scope.off();
        const J = y.update = q.run.bind(q),
            de = y.job = q.runIfDirty.bind(q);
        de.i = y, de.id = y.uid, q.scheduler = () => qo(de), vi(y, !0), J()
    }, X = (y, S, _) => {
        S.component = y;
        const j = y.vnode.props;
        y.vnode = S, y.next = null, hM(y, S.props, j, _), NM(y, S.children, _), Wn(), td(y), Jn()
    }, ee = (y, S, _, j, G, W, ne, ae, q = !1) => {
        const J = y && y.children,
            de = y ? y.shapeFlag : 0,
            ue = S.children,
            {
                patchFlag: oe,
                shapeFlag: Ae
            } = S;
        if (oe > 0) {
            if (oe & 128) {
                Ne(J, ue, _, j, G, W, ne, ae, q);
                return
            } else if (oe & 256) {
                xe(J, ue, _, j, G, W, ne, ae, q);
                return
            }
        }
        Ae & 8 ? (de & 16 && pi(J, G, W), ue !== J && h(_, ue)) : de & 16 ? Ae & 16 ? Ne(J, ue, _, j, G, W, ne, ae, q) : pi(J, G, W, !0) : (de & 8 && h(_, ""), Ae & 16 && L(ue, _, j, G, W, ne, ae, q))
    }, xe = (y, S, _, j, G, W, ne, ae, q) => {
        y = y || nu, S = S || nu;
        const J = y.length,
            de = S.length,
            ue = Math.min(J, de);
        let oe;
        for (oe = 0; oe < ue; oe++) {
            const Ae = S[oe] = q ? ci(S[oe]) : bn(S[oe]);
            w(y[oe], Ae, _, null, G, W, ne, ae, q)
        }
        J > de ? pi(y, G, W, !0, !1, ue) : L(S, _, j, G, W, ne, ae, q, ue)
    }, Ne = (y, S, _, j, G, W, ne, ae, q) => {
        let J = 0;
        const de = S.length;
        let ue = y.length - 1,
            oe = de - 1;
        for (; J <= ue && J <= oe;) {
            const Ae = y[J],
                be = S[J] = q ? ci(S[J]) : bn(S[J]);
            if (ku(Ae, be)) w(Ae, be, _, null, G, W, ne, ae, q);
            else break;
            J++
        }
        for (; J <= ue && J <= oe;) {
            const Ae = y[ue],
                be = S[oe] = q ? ci(S[oe]) : bn(S[oe]);
            if (ku(Ae, be)) w(Ae, be, _, null, G, W, ne, ae, q);
            else break;
            ue--, oe--
        }
        if (J > ue) {
            if (J <= oe) {
                const Ae = oe + 1,
                    be = Ae < de ? S[Ae].el : j;
                for (; J <= oe;) w(null, S[J] = q ? ci(S[J]) : bn(S[J]), _, be, G, W, ne, ae, q), J++
            }
        } else if (J > oe)
            for (; J <= ue;) wa(y[J], G, W, !0), J++;
        else {
            const Ae = J,
                be = J,
                Le = new Map;
            for (J = be; J <= oe; J++) {
                const da = S[J] = q ? ci(S[J]) : bn(S[J]);
                da.key != null && Le.set(da.key, J)
            }
            let Pe, ga = 0;
            const la = oe - be + 1;
            let Fa = !1,
                _a = 0;
            const Fn = new Array(la);
            for (J = 0; J < la; J++) Fn[J] = 0;
            for (J = Ae; J <= ue; J++) {
                const da = y[J];
                if (ga >= la) {
                    wa(da, G, W, !0);
                    continue
                }
                let Ra;
                if (da.key != null) Ra = Le.get(da.key);
                else
                    for (Pe = be; Pe <= oe; Pe++)
                        if (Fn[Pe - be] === 0 && ku(da, S[Pe])) {
                            Ra = Pe;
                            break
                        }
                Ra === void 0 ? wa(da, G, W, !0) : (Fn[Ra - be] = J + 1, Ra >= _a ? _a = Ra : Fa = !0, w(da, S[Ra], _, null, G, W, ne, ae, q), ga++)
            }
            const Ki = Fa ? SM(Fn) : nu;
            for (Pe = Ki.length - 1, J = la - 1; J >= 0; J--) {
                const da = be + J,
                    Ra = S[da],
                    mt = da + 1 < de ? S[da + 1].el : j;
                Fn[J] === 0 ? w(null, Ra, _, mt, G, W, ne, ae, q) : Fa && (Pe < 0 || J !== Ki[Pe] ? Oe(Ra, _, mt, 2) : Pe--)
            }
        }
    }, Oe = (y, S, _, j, G = null) => {
        const {
            el: W,
            type: ne,
            transition: ae,
            children: q,
            shapeFlag: J
        } = y;
        if (J & 6) {
            Oe(y.component.subTree, S, _, j);
            return
        }
        if (J & 128) {
            y.suspense.move(S, _, j);
            return
        }
        if (J & 64) {
            ne.move(y, S, _, Nn);
            return
        }
        if (ne === sn) {
            t(W, S, _);
            for (let ue = 0; ue < q.length; ue++) Oe(q[ue], S, _, j);
            t(y.anchor, S, _);
            return
        }
        if (ne === Er) {
            V(y, S, _);
            return
        }
        if (j !== 2 && J & 1 && ae)
            if (j === 0) ae.beforeEnter(W), t(W, S, _), Da(() => ae.enter(W), G);
            else {
                const {
                    leave: ue,
                    delayLeave: oe,
                    afterLeave: Ae
                } = ae, be = () => {
                    y.ctx.isUnmounted ? l(W) : t(W, S, _)
                }, Le = () => {
                    ue(W, () => {
                        be(), Ae && Ae()
                    })
                };
                oe ? oe(W, be, Le) : Le()
            }
        else t(W, S, _)
    }, wa = (y, S, _, j = !1, G = !1) => {
        const {
            type: W,
            props: ne,
            ref: ae,
            children: q,
            dynamicChildren: J,
            shapeFlag: de,
            patchFlag: ue,
            dirs: oe,
            cacheIndex: Ae
        } = y;
        if (ue === -2 && (G = !1), ae != null && (Wn(), Br(ae, null, _, y, !0), Jn()), Ae != null && (S.renderCache[Ae] = void 0), de & 256) {
            S.ctx.deactivate(y);
            return
        }
        const be = de & 1 && oe,
            Le = !ru(y);
        let Pe;
        if (Le && (Pe = ne && ne.onVnodeBeforeUnmount) && Sn(Pe, S, y), de & 6) zi(y.component, _, j);
        else {
            if (de & 128) {
                y.suspense.unmount(_, j);
                return
            }
            be && Bi(y, null, S, "beforeUnmount"), de & 64 ? y.type.remove(y, S, _, Nn, j) : J && !J.hasOnce && (W !== sn || ue > 0 && ue & 64) ? pi(J, S, _, !1, !0) : (W === sn && ue & 384 || !G && de & 16) && pi(q, S, _), j && dt(y)
        }(Le && (Pe = ne && ne.onVnodeUnmounted) || be) && Da(() => {
            Pe && Sn(Pe, S, y), be && Bi(y, null, S, "unmounted")
        }, _)
    }, dt = y => {
        const {
            type: S,
            el: _,
            anchor: j,
            transition: G
        } = y;
        if (S === sn) {
            Qn(_, j);
            return
        }
        if (S === Er) {
            U(y);
            return
        }
        const W = () => {
            l(_), G && !G.persisted && G.afterLeave && G.afterLeave()
        };
        if (y.shapeFlag & 1 && G && !G.persisted) {
            const {
                leave: ne,
                delayLeave: ae
            } = G, q = () => ne(_, W);
            ae ? ae(y.el, W, q) : q()
        } else W()
    }, Qn = (y, S) => {
        let _;
        for (; y !== S;) _ = C(y), l(y), y = _;
        l(S)
    }, zi = (y, S, _) => {
        const {
            bum: j,
            scope: G,
            job: W,
            subTree: ne,
            um: ae,
            m: q,
            a: J,
            parent: de,
            slots: {
                __: ue
            }
        } = y;
        hd(q), hd(J), j && fr(j), de && pe(ue) && ue.forEach(oe => {
            de.renderCache[oe] = void 0
        }), G.stop(), W && (W.flags |= 8, wa(ne, y, S, _)), ae && Da(ae, S), Da(() => {
            y.isUnmounted = !0
        }, S), S && S.pendingBranch && !S.isUnmounted && y.asyncDep && !y.asyncResolved && y.suspenseId === S.pendingId && (S.deps--, S.deps === 0 && S.resolve())
    }, pi = (y, S, _, j = !1, G = !1, W = 0) => {
        for (let ne = W; ne < y.length; ne++) wa(y[ne], S, _, j, G)
    }, An = y => {
        if (y.shapeFlag & 6) return An(y.component.subTree);
        if (y.shapeFlag & 128) return y.suspense.next();
        const S = C(y.anchor || y.el),
            _ = S && S[Im];
        return _ ? C(_) : S
    };
    let xn = !1;
    const ft = (y, S, _) => {
            y == null ? S._vnode && wa(S._vnode, null, null, !0) : w(S._vnode || null, y, S, null, null, null, _), S._vnode = y, xn || (xn = !0, td(), Sm(), xn = !1)
        },
        Nn = {
            p: w,
            um: wa,
            m: Oe,
            r: dt,
            mt: ye,
            mc: L,
            pc: ee,
            pbc: $,
            n: An,
            o: e
        };
    return {
        render: ft,
        hydrate: void 0,
        createApp: dM(ft)
    }
}
function Ss({
    type: e,
    props: a
}, i) {
    return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && a && a.encoding && a.encoding.includes("html") ? void 0 : i
}
function vi({
    effect: e,
    job: a
}, i) {
    i ? (e.flags |= 32, a.flags |= 4) : (e.flags &= -33, a.flags &= -5)
}
function MM(e, a) {
    return (!e || e && !e.pendingBranch) && a && !a.persisted
}
function n0(e, a, i = !1) {
    const t = e.children,
        l = a.children;
    if (pe(t) && pe(l))
        for (let s = 0; s < t.length; s++) {
            const c = t[s];
            let g = l[s];
            g.shapeFlag & 1 && !g.dynamicChildren && ((g.patchFlag <= 0 || g.patchFlag === 32) && (g = l[s] = ci(l[s]), g.el = c.el), !i && g.patchFlag !== -2 && n0(c, g)), g.type === qr && (g.el = c.el), g.type === $n && !g.el && (g.el = c.el)
        }
}
function SM(e) {
    const a = e.slice(),
        i = [0];
    let t, l, s, c, g;
    const f = e.length;
    for (t = 0; t < f; t++) {
        const A = e[t];
        if (A !== 0) {
            if (l = i[i.length - 1], e[l] < A) {
                a[t] = l, i.push(t);
                continue
            }
            for (s = 0, c = i.length - 1; s < c;) g = s + c >> 1, e[i[g]] < A ? s = g + 1 : c = g;
            A < e[i[s]] && (s > 0 && (a[t] = i[s - 1]), i[s] = t)
        }
    }
    for (s = i.length, c = i[s - 1]; s-- > 0;) i[s] = c, c = a[c];
    return i
}
function Ym(e) {
    const a = e.subTree.component;
    if (a) return a.asyncDep && !a.asyncResolved ? a : Ym(a)
}
function hd(e) {
    if (e)
        for (let a = 0; a < e.length; a++) e[a].flags |= 8
}
const wM = Symbol.for("v-scx"),
    IM = () => hr(wM);
function ws(e, a, i) {
    return Vm(e, a, i)
}
function Vm(e, a, i = Ye) {
    const {
        immediate: t,
        deep: l,
        flush: s,
        once: c
    } = i, g = Ma({}, i), f = a && t || !a && s !== "post";
    let A;
    if (at) {
        if (s === "sync") {
            const x = IM();
            A = x.__watcherHandles || (x.__watcherHandles = [])
        } else if (!f) {
            const x = () => {};
            return x.stop = vn, x.resume = vn, x.pause = vn, x
        }
    }
    const h = ya;
    g.call = (x, Y, w) => Dn(x, h, Y, w);
    let p = !1;
    s === "post" ? g.scheduler = x => {
        Da(x, h && h.suspense)
    } : s !== "sync" && (p = !0, g.scheduler = (x, Y) => {
        Y ? x() : qo(x)
    }), g.augmentJob = x => {
        a && (x.flags |= 4), p && (x.flags |= 2, h && (x.id = h.uid, x.i = h))
    };
    const C = z3(e, a, g);
    return at && (A ? A.push(C) : f && C()), C
}
function bM(e, a, i) {
    const t = this.proxy,
        l = ea(e) ? e.includes(".") ? Xm(t, e) : () => t[e] : e.bind(t, t);
    let s;
    Se(a) ? s = a : (s = a.handler, i = a);
    const c = tt(this),
        g = Vm(l, s.bind(t), i);
    return c(), g
}
function Xm(e, a) {
    const i = a.split(".");
    return () => {
        let t = e;
        for (let l = 0; l < i.length && t; l++) t = t[i[l]];
        return t
    }
}
const BM = (e, a) => a === "modelValue" || a === "model-value" ? e.modelModifiers : e[`${a}Modifiers`] || e[`${cn(a)}Modifiers`] || e[`${Ei(a)}Modifiers`];
function vM(e, a, ...i) {
    if (e.isUnmounted) return;
    const t = e.vnode.props || Ye;
    let l = i;
    const s = a.startsWith("update:"),
        c = s && BM(t, a.slice(7));
    c && (c.trim && (l = i.map(h => ea(h) ? h.trim() : h)), c.number && (l = i.map(Mr)));
    let g, f = t[g = ps(a)] || t[g = ps(cn(a))];
    !f && s && (f = t[g = ps(Ei(a))]), f && Dn(f, e, 6, l);
    const A = t[g + "Once"];
    if (A) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[g]) return;
        e.emitted[g] = !0, Dn(A, e, 6, l)
    }
}
function Wm(e, a, i = !1) {
    const t = a.emitsCache,
        l = t.get(e);
    if (l !== void 0) return l;
    const s = e.emits;
    let c = {},
        g = !1;
    if (!Se(e)) {
        const f = A => {
            const h = Wm(A, a, !0);
            h && (g = !0, Ma(c, h))
        };
        !i && a.mixins.length && a.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
    }
    return !s && !g ? (We(e) && t.set(e, null), null) : (pe(s) ? s.forEach(f => c[f] = null) : Ma(c, s), We(e) && t.set(e, c), c)
}
function jr(e, a) {
    return !e || !Ur(a) ? !1 : (a = a.slice(2).replace(/Once$/, ""), Ue(e, a[0].toLowerCase() + a.slice(1)) || Ue(e, Ei(a)) || Ue(e, a))
}
function Ed(e) {
    const {
        type: a,
        vnode: i,
        proxy: t,
        withProxy: l,
        propsOptions: [s],
        slots: c,
        attrs: g,
        emit: f,
        render: A,
        renderCache: h,
        props: p,
        data: C,
        setupState: x,
        ctx: Y,
        inheritAttrs: w
    } = e, v = br(e);
    let B, R;
    try {
        if (i.shapeFlag & 4) {
            const U = l || t,
                O = U;
            B = bn(A.call(O, U, h, p, x, C, Y)), R = g
        } else {
            const U = a;
            B = bn(U.length > 1 ? U(p, {
                attrs: g,
                slots: c,
                emit: f
            }) : U(p, null)), R = a.props ? g : DM(g)
        }
    } catch (U) {
        Wu.length = 0, Wr(U, e, 1), B = xa($n)
    }
    let V = B;
    if (R && w !== !1) {
        const U = Object.keys(R),
            {
                shapeFlag: O
            } = V;
        U.length && O & 7 && (s && U.some(Ko) && (R = TM(R, s)), V = du(V, R, !1, !0))
    }
    return i.dirs && (V = du(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(i.dirs) : i.dirs), i.transition && Qo(V, i.transition), B = V, br(v), B
}
const DM = e => {
        let a;
        for (const i in e)(i === "class" || i === "style" || Ur(i)) && ((a || (a = {}))[i] = e[i]);
        return a
    },
    TM = (e, a) => {
        const i = {};
        for (const t in e)(!Ko(t) || !(t.slice(9) in a)) && (i[t] = e[t]);
        return i
    };
function xM(e, a, i) {
    const {
        props: t,
        children: l,
        component: s
    } = e, {
        props: c,
        children: g,
        patchFlag: f
    } = a, A = s.emitsOptions;
    if (a.dirs || a.transition) return !0;
    if (i && f >= 0) {
        if (f & 1024) return !0;
        if (f & 16) return t ? pd(t, c, A) : !!c;
        if (f & 8) {
            const h = a.dynamicProps;
            for (let p = 0; p < h.length; p++) {
                const C = h[p];
                if (c[C] !== t[C] && !jr(A, C)) return !0
            }
        }
    } else return (l || g) && (!g || !g.$stable) ? !0 : t === c ? !1 : t ? c ? pd(t, c, A) : !0 : !!c;
    return !1
}
function pd(e, a, i) {
    const t = Object.keys(a);
    if (t.length !== Object.keys(e).length) return !0;
    for (let l = 0; l < t.length; l++) {
        const s = t[l];
        if (a[s] !== e[s] && !jr(i, s)) return !0
    }
    return !1
}
function FM({
    vnode: e,
    parent: a
}, i) {
    for (; a;) {
        const t = a.subTree;
        if (t.suspense && t.suspense.activeBranch === e && (t.el = e.el), t === e)(e = a.vnode).el = i, a = a.parent;
        else break
    }
}
const Jm = e => e.__isSuspense;
function _M(e, a) {
    a && a.pendingBranch ? pe(e) ? a.effects.push(...e) : a.effects.push(e) : U3(e)
}
const sn = Symbol.for("v-fgt"),
    qr = Symbol.for("v-txt"),
    $n = Symbol.for("v-cmt"),
    Er = Symbol.for("v-stc"),
    Wu = [];
let Ja = null;
function Io(e = !1) {
    Wu.push(Ja = e ? null : [])
}
function RM() {
    Wu.pop(), Ja = Wu[Wu.length - 1] || null
}
let Qu = 1;
function Ad(e, a = !1) {
    Qu += e, e < 0 && Ja && a && (Ja.hasOnce = !0)
}
function $m(e) {
    return e.dynamicChildren = Qu > 0 ? Ja || nu : null, RM(), Qu > 0 && Ja && Ja.push(e), e
}
function R9(e, a, i, t, l, s) {
    return $m(qm(e, a, i, t, l, s, !0))
}
function bo(e, a, i, t, l) {
    return $m(xa(e, a, i, t, l, !0))
}
function et(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function ku(e, a) {
    return e.type === a.type && e.key === a.key
}
const jm = ({
        key: e
    }) => e ?? null,
    pr = ({
        ref: e,
        ref_key: a,
        ref_for: i
    }) => (typeof e == "number" && (e = "" + e), e != null ? ea(e) || Ca(e) || Se(e) ? {
        i: Ea,
        r: e,
        k: a,
        f: !!i
    } : e : null);
function qm(e, a = null, i = null, t = 0, l = null, s = e === sn ? 0 : 1, c = !1, g = !1) {
    const f = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: a,
        key: a && jm(a),
        ref: a && pr(a),
        scopeId: Jr,
        slotScopeIds: null,
        children: i,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: s,
        patchFlag: t,
        dynamicProps: l,
        dynamicChildren: null,
        appContext: null,
        ctx: Ea
    };
    return g ? (i0(f, i), s & 128 && e.normalize(f)) : i && (f.shapeFlag |= ea(i) ? 8 : 16), Qu > 0 && !c && Ja && (f.patchFlag > 0 || s & 6) && f.patchFlag !== 32 && Ja.push(f), f
}
const xa = LM;
function LM(e, a = null, i = null, t = 0, l = null, s = !1) {
    if ((!e || e === Fm) && (e = $n), et(e)) {
        const g = du(e, a, !0);
        return i && i0(g, i), Qu > 0 && !s && Ja && (g.shapeFlag & 6 ? Ja[Ja.indexOf(e)] = g : Ja.push(g)), g.patchFlag = -2, g
    }
    if (XM(e) && (e = e.__vccOpts), a) {
        a = PM(a);
        let {
            class: g,
            style: f
        } = a;
        g && !ea(g) && (a.class = Go(g)), We(f) && (jo(f) && !pe(f) && (f = Ma({}, f)), a.style = Oo(f))
    }
    const c = ea(e) ? 1 : Jm(e) ? 128 : G3(e) ? 64 : We(e) ? 4 : Se(e) ? 2 : 0;
    return qm(e, a, i, t, l, c, s, !0)
}
function PM(e) {
    return e ? jo(e) || Km(e) ? Ma({}, e) : e : null
}
function du(e, a, i = !1, t = !1) {
    const {
        props: l,
        ref: s,
        patchFlag: c,
        children: g,
        transition: f
    } = e, A = a ? zM(l || {}, a) : l, h = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: A,
        key: A && jm(A),
        ref: a && a.ref ? i && s ? pe(s) ? s.concat(pr(a)) : [s, pr(a)] : pr(a) : s,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: g,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: a && e.type !== sn ? c === -1 ? 16 : c | 16 : c,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: f,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && du(e.ssContent),
        ssFallback: e.ssFallback && du(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return f && t && Qo(h, f.clone(h)), h
}
function kM(e = " ", a = 0) {
    return xa(qr, null, e, a)
}
function L9(e, a) {
    const i = xa(Er, null, e);
    return i.staticCount = a, i
}
function P9(e = "", a = !1) {
    return a ? (Io(), bo($n, null, e)) : xa($n, null, e)
}
function bn(e) {
    return e == null || typeof e == "boolean" ? xa($n) : pe(e) ? xa(sn, null, e.slice()) : et(e) ? ci(e) : xa(qr, null, String(e))
}
function ci(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : du(e)
}
function i0(e, a) {
    let i = 0;
    const {
        shapeFlag: t
    } = e;
    if (a == null) a = null;
    else if (pe(a)) i = 16;
    else if (typeof a == "object")
        if (t & 65) {
            const l = a.default;
            l && (l._c && (l._d = !1), i0(e, l()), l._c && (l._d = !0));
            return
        } else {
            i = 32;
            const l = a._;
            !l && !Km(a) ? a._ctx = Ea : l === 3 && Ea && (Ea.slots._ === 1 ? a._ = 1 : (a._ = 2, e.patchFlag |= 1024))
        }
    else Se(a) ? (a = {
        default: a,
        _ctx: Ea
    }, i = 32) : (a = String(a), t & 64 ? (i = 16, a = [kM(a)]) : i = 8);
    e.children = a, e.shapeFlag |= i
}
function zM(...e) {
    const a = {};
    for (let i = 0; i < e.length; i++) {
        const t = e[i];
        for (const l in t)
            if (l === "class") a.class !== t.class && (a.class = Go([a.class, t.class]));
            else if (l === "style") a.style = Oo([a.style, t.style]);
        else if (Ur(l)) {
            const s = a[l],
                c = t[l];
            c && s !== c && !(pe(s) && s.includes(c)) && (a[l] = s ? [].concat(s, c) : c)
        } else l !== "" && (a[l] = t[l])
    }
    return a
}
function Sn(e, a, i, t = null) {
    Dn(e, a, 7, [i, t])
}
const KM = Pm();
let HM = 0;
function UM(e, a, i) {
    const t = e.type,
        l = (a ? a.appContext : e.appContext) || KM,
        s = {
            uid: HM++,
            vnode: e,
            type: t,
            parent: a,
            appContext: l,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new c3(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: a ? a.provides : Object.create(l.provides),
            ids: a ? a.ids : ["", 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Um(t, l),
            emitsOptions: Wm(t, l),
            emit: null,
            emitted: null,
            propsDefaults: Ye,
            inheritAttrs: t.inheritAttrs,
            ctx: Ye,
            data: Ye,
            props: Ye,
            attrs: Ye,
            slots: Ye,
            refs: Ye,
            setupState: Ye,
            setupContext: null,
            suspense: i,
            suspenseId: i ? i.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return s.ctx = {
        _: s
    }, s.root = a ? a.root : s, s.emit = vM.bind(null, s), e.ce && e.ce(s), s
}
let ya = null,
    Dr, Bo; {
    const e = Yr(),
        a = (i, t) => {
            let l;
            return (l = e[i]) || (l = e[i] = []), l.push(t), s => {
                l.length > 1 ? l.forEach(c => c(s)) : l[0](s)
            }
        };
    Dr = a("__VUE_INSTANCE_SETTERS__", i => ya = i), Bo = a("__VUE_SSR_SETTERS__", i => at = i)
}
const tt = e => {
        const a = ya;
        return Dr(e), e.scope.on(), () => {
            e.scope.off(), Dr(a)
        }
    },
    Nd = () => {
        ya && ya.scope.off(), Dr(null)
    };
function Qm(e) {
    return e.vnode.shapeFlag & 4
}
let at = !1;
function OM(e, a = !1, i = !1) {
    a && Bo(a);
    const {
        props: t,
        children: l
    } = e.vnode, s = Qm(e);
    mM(e, t, s, a), AM(e, l, i || a);
    const c = s ? GM(e, a) : void 0;
    return a && Bo(!1), c
}
function GM(e, a) {
    const i = e.type;
    e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, tM);
    const {
        setup: t
    } = i;
    if (t) {
        Wn();
        const l = e.setupContext = t.length > 1 ? YM(e) : null,
            s = tt(e),
            c = ut(t, e, 0, [e.props, l]),
            g = $f(c);
        if (Jn(), s(), (g || e.sp) && !ru(e) && vm(e), g) {
            if (c.then(Nd, Nd), a) return c.then(f => {
                yd(e, f)
            }).catch(f => {
                Wr(f, e, 0)
            });
            e.asyncDep = c
        } else yd(e, c)
    } else eh(e)
}
function yd(e, a, i) {
    Se(a) ? e.type.__ssrInlineRender ? e.ssrRender = a : e.render = a : We(a) && (e.setupState = Nm(a)), eh(e)
}
function eh(e, a, i) {
    const t = e.type;
    e.render || (e.render = t.render || vn); {
        const l = tt(e);
        Wn();
        try {
            rM(e)
        } finally {
            Jn(), l()
        }
    }
}
const ZM = {
    get(e, a) {
        return Na(e, "get", ""), e[a]
    }
};
function YM(e) {
    const a = i => {
        e.exposed = i || {}
    };
    return {
        attrs: new Proxy(e.attrs, ZM),
        slots: e.slots,
        emit: e.emit,
        expose: a
    }
}
function Qr(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Nm(x3(e.exposed)), {
        get(a, i) {
            if (i in a) return a[i];
            if (i in Xu) return Xu[i](e)
        },
        has(a, i) {
            return i in a || i in Xu
        }
    })) : e.proxy
}
function VM(e, a = !0) {
    return Se(e) ? e.displayName || e.name : e.name || a && e.__name
}
function XM(e) {
    return Se(e) && "__vccOpts" in e
}
const WM = (e, a) => P3(e, a, at);
function k9(e, a, i) {
    const t = arguments.length;
    return t === 2 ? We(a) && !pe(a) ? et(a) ? xa(e, null, [a]) : xa(e, a) : xa(e, null, a) : (t > 3 ? i = Array.prototype.slice.call(arguments, 2) : t === 3 && et(i) && (i = [i]), xa(e, a, i))
}
const JM = "3.5.16";
/**
 * @vue/runtime-dom v3.5.16
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let vo;
const Cd = typeof window < "u" && window.trustedTypes;
if (Cd) try {
    vo = Cd.createPolicy("vue", {
        createHTML: e => e
    })
} catch {}
const ah = vo ? e => vo.createHTML(e) : e => e,
    $M = "http://www.w3.org/2000/svg",
    jM = "http://www.w3.org/1998/Math/MathML",
    Gn = typeof document < "u" ? document : null,
    Md = Gn && Gn.createElement("template"),
    qM = {
        insert: (e, a, i) => {
            a.insertBefore(e, i || null)
        },
        remove: e => {
            const a = e.parentNode;
            a && a.removeChild(e)
        },
        createElement: (e, a, i, t) => {
            const l = a === "svg" ? Gn.createElementNS($M, e) : a === "mathml" ? Gn.createElementNS(jM, e) : i ? Gn.createElement(e, {
                is: i
            }) : Gn.createElement(e);
            return e === "select" && t && t.multiple != null && l.setAttribute("multiple", t.multiple), l
        },
        createText: e => Gn.createTextNode(e),
        createComment: e => Gn.createComment(e),
        setText: (e, a) => {
            e.nodeValue = a
        },
        setElementText: (e, a) => {
            e.textContent = a
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => Gn.querySelector(e),
        setScopeId(e, a) {
            e.setAttribute(a, "")
        },
        insertStaticContent(e, a, i, t, l, s) {
            const c = i ? i.previousSibling : a.lastChild;
            if (l && (l === s || l.nextSibling))
                for (; a.insertBefore(l.cloneNode(!0), i), !(l === s || !(l = l.nextSibling)););
            else {
                Md.innerHTML = ah(t === "svg" ? `<svg>${e}</svg>` : t === "mathml" ? `<math>${e}</math>` : e);
                const g = Md.content;
                if (t === "svg" || t === "mathml") {
                    const f = g.firstChild;
                    for (; f.firstChild;) g.appendChild(f.firstChild);
                    g.removeChild(f)
                }
                a.insertBefore(g, i)
            }
            return [c ? c.nextSibling : a.firstChild, i ? i.previousSibling : a.lastChild]
        }
    },
    QM = Symbol("_vtc");
function eS(e, a, i) {
    const t = e[QM];
    t && (a = (a ? [a, ...t] : [...t]).join(" ")), a == null ? e.removeAttribute("class") : i ? e.setAttribute("class", a) : e.className = a
}
const Sd = Symbol("_vod"),
    aS = Symbol("_vsh"),
    nS = Symbol(""),
    iS = /(^|;)\s*display\s*:/;
function uS(e, a, i) {
    const t = e.style,
        l = ea(i);
    let s = !1;
    if (i && !l) {
        if (a)
            if (ea(a))
                for (const c of a.split(";")) {
                    const g = c.slice(0, c.indexOf(":")).trim();
                    i[g] == null && Ar(t, g, "")
                } else
                    for (const c in a) i[c] == null && Ar(t, c, "");
        for (const c in i) c === "display" && (s = !0), Ar(t, c, i[c])
    } else if (l) {
        if (a !== i) {
            const c = t[nS];
            c && (i += ";" + c), t.cssText = i, s = iS.test(i)
        }
    } else a && e.removeAttribute("style");
    Sd in e && (e[Sd] = s ? t.display : "", e[aS] && (t.display = "none"))
}
const wd = /\s*!important$/;
function Ar(e, a, i) {
    if (pe(i)) i.forEach(t => Ar(e, a, t));
    else if (i == null && (i = ""), a.startsWith("--")) e.setProperty(a, i);
    else {
        const t = tS(e, a);
        wd.test(i) ? e.setProperty(Ei(t), i.replace(wd, ""), "important") : e[t] = i
    }
}
const Id = ["Webkit", "Moz", "ms"],
    Is = {};
function tS(e, a) {
    const i = Is[a];
    if (i) return i;
    let t = cn(a);
    if (t !== "filter" && t in e) return Is[a] = t;
    t = Zr(t);
    for (let l = 0; l < Id.length; l++) {
        const s = Id[l] + t;
        if (s in e) return Is[a] = s
    }
    return a
}
const bd = "http://www.w3.org/1999/xlink";
function Bd(e, a, i, t, l, s = r3(a)) {
    t && a.startsWith("xlink:") ? i == null ? e.removeAttributeNS(bd, a.slice(6, a.length)) : e.setAttributeNS(bd, a, i) : i == null || s && !em(i) ? e.removeAttribute(a) : e.setAttribute(a, s ? "" : pn(i) ? String(i) : i)
}
function vd(e, a, i, t, l) {
    if (a === "innerHTML" || a === "textContent") {
        i != null && (e[a] = a === "innerHTML" ? ah(i) : i);
        return
    }
    const s = e.tagName;
    if (a === "value" && s !== "PROGRESS" && !s.includes("-")) {
        const g = s === "OPTION" ? e.getAttribute("value") || "" : e.value,
            f = i == null ? e.type === "checkbox" ? "on" : "" : String(i);
        (g !== f || !("_value" in e)) && (e.value = f), i == null && e.removeAttribute(a), e._value = i;
        return
    }
    let c = !1;
    if (i === "" || i == null) {
        const g = typeof e[a];
        g === "boolean" ? i = em(i) : i == null && g === "string" ? (i = "", c = !0) : g === "number" && (i = 0, c = !0)
    }
    try {
        e[a] = i
    } catch {}
    c && e.removeAttribute(l || a)
}
function xi(e, a, i, t) {
    e.addEventListener(a, i, t)
}
function rS(e, a, i, t) {
    e.removeEventListener(a, i, t)
}
const Dd = Symbol("_vei");
function lS(e, a, i, t, l = null) {
    const s = e[Dd] || (e[Dd] = {}),
        c = s[a];
    if (t && c) c.value = t;
    else {
        const [g, f] = sS(a);
        if (t) {
            const A = s[a] = gS(t, l);
            xi(e, g, A, f)
        } else c && (rS(e, g, c, f), s[a] = void 0)
    }
}
const Td = /(?:Once|Passive|Capture)$/;
function sS(e) {
    let a;
    if (Td.test(e)) {
        a = {};
        let t;
        for (; t = e.match(Td);) e = e.slice(0, e.length - t[0].length), a[t[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Ei(e.slice(2)), a]
}
let bs = 0;
const oS = Promise.resolve(),
    cS = () => bs || (oS.then(() => bs = 0), bs = Date.now());
function gS(e, a) {
    const i = t => {
        if (!t._vts) t._vts = Date.now();
        else if (t._vts <= i.attached) return;
        Dn(dS(t, i.value), a, 5, [t])
    };
    return i.value = e, i.attached = cS(), i
}
function dS(e, a) {
    if (pe(a)) {
        const i = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            i.call(e), e._stopped = !0
        }, a.map(t => l => !l._stopped && t && t(l))
    } else return a
}
const xd = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    fS = (e, a, i, t, l, s) => {
        const c = l === "svg";
        a === "class" ? eS(e, t, c) : a === "style" ? uS(e, i, t) : Ur(a) ? Ko(a) || lS(e, a, i, t, s) : (a[0] === "." ? (a = a.slice(1), !0) : a[0] === "^" ? (a = a.slice(1), !1) : mS(e, a, t, c)) ? (vd(e, a, t), !e.tagName.includes("-") && (a === "value" || a === "checked" || a === "selected") && Bd(e, a, t, c, s, a !== "value")) : e._isVueCE && (/[A-Z]/.test(a) || !ea(t)) ? vd(e, cn(a), t, s, a) : (a === "true-value" ? e._trueValue = t : a === "false-value" && (e._falseValue = t), Bd(e, a, t, c))
    };
function mS(e, a, i, t) {
    if (t) return !!(a === "innerHTML" || a === "textContent" || a in e && xd(a) && Se(i));
    if (a === "spellcheck" || a === "draggable" || a === "translate" || a === "autocorrect" || a === "form" || a === "list" && e.tagName === "INPUT" || a === "type" && e.tagName === "TEXTAREA") return !1;
    if (a === "width" || a === "height") {
        const l = e.tagName;
        if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE") return !1
    }
    return xd(a) && ea(i) ? !1 : a in e
}
const Tr = e => {
    const a = e.props["onUpdate:modelValue"] || !1;
    return pe(a) ? i => fr(a, i) : a
};
function hS(e) {
    e.target.composing = !0
}
function Fd(e) {
    const a = e.target;
    a.composing && (a.composing = !1, a.dispatchEvent(new Event("input")))
}
const su = Symbol("_assign"),
    z9 = {
        created(e, {
            modifiers: {
                lazy: a,
                trim: i,
                number: t
            }
        }, l) {
            e[su] = Tr(l);
            const s = t || l.props && l.props.type === "number";
            xi(e, a ? "change" : "input", c => {
                if (c.target.composing) return;
                let g = e.value;
                i && (g = g.trim()), s && (g = Mr(g)), e[su](g)
            }), i && xi(e, "change", () => {
                e.value = e.value.trim()
            }), a || (xi(e, "compositionstart", hS), xi(e, "compositionend", Fd), xi(e, "change", Fd))
        },
        mounted(e, {
            value: a
        }) {
            e.value = a ?? ""
        },
        beforeUpdate(e, {
            value: a,
            oldValue: i,
            modifiers: {
                lazy: t,
                trim: l,
                number: s
            }
        }, c) {
            if (e[su] = Tr(c), e.composing) return;
            const g = (s || e.type === "number") && !/^0\d/.test(e.value) ? Mr(e.value) : e.value,
                f = a ?? "";
            g !== f && (document.activeElement === e && e.type !== "range" && (t && a === i || l && e.value.trim() === f) || (e.value = f))
        }
    },
    K9 = {
        deep: !0,
        created(e, {
            value: a,
            modifiers: {
                number: i
            }
        }, t) {
            const l = Or(a);
            xi(e, "change", () => {
                const s = Array.prototype.filter.call(e.options, c => c.selected).map(c => i ? Mr(xr(c)) : xr(c));
                e[su](e.multiple ? l ? new Set(s) : s : s[0]), e._assigning = !0, Cm(() => {
                    e._assigning = !1
                })
            }), e[su] = Tr(t)
        },
        mounted(e, {
            value: a
        }) {
            _d(e, a)
        },
        beforeUpdate(e, a, i) {
            e[su] = Tr(i)
        },
        updated(e, {
            value: a
        }) {
            e._assigning || _d(e, a)
        }
    };
function _d(e, a) {
    const i = e.multiple,
        t = pe(a);
    if (!(i && !t && !Or(a))) {
        for (let l = 0, s = e.options.length; l < s; l++) {
            const c = e.options[l],
                g = xr(c);
            if (i)
                if (t) {
                    const f = typeof g;
                    f === "string" || f === "number" ? c.selected = a.some(A => String(A) === String(g)) : c.selected = s3(a, g) > -1
                } else c.selected = a.has(g);
            else if (Vr(xr(c), a)) {
                e.selectedIndex !== l && (e.selectedIndex = l);
                return
            }
        }!i && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}
function xr(e) {
    return "_value" in e ? e._value : e.value
}
const ES = ["ctrl", "shift", "alt", "meta"],
    pS = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => "button" in e && e.button !== 0,
        middle: e => "button" in e && e.button !== 1,
        right: e => "button" in e && e.button !== 2,
        exact: (e, a) => ES.some(i => e[`${i}Key`] && !a.includes(i))
    },
    H9 = (e, a) => {
        const i = e._withMods || (e._withMods = {}),
            t = a.join(".");
        return i[t] || (i[t] = (l, ...s) => {
            for (let c = 0; c < a.length; c++) {
                const g = pS[a[c]];
                if (g && g(l, a)) return
            }
            return e(l, ...s)
        })
    },
    AS = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
    },
    U9 = (e, a) => {
        const i = e._withKeys || (e._withKeys = {}),
            t = a.join(".");
        return i[t] || (i[t] = l => {
            if (!("key" in l)) return;
            const s = Ei(l.key);
            if (a.some(c => c === s || AS[c] === s)) return e(l)
        })
    },
    NS = Ma({
        patchProp: fS
    }, qM);
let Rd;
function yS() {
    return Rd || (Rd = yM(NS))
}
const O9 = (...e) => {
    const a = yS().createApp(...e),
        {
            mount: i
        } = a;
    return a.mount = t => {
        const l = MS(t);
        if (!l) return;
        const s = a._component;
        !Se(s) && !s.render && !s.template && (s.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
        const c = i(l, !1, CS(l));
        return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c
    }, a
};
function CS(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}
function MS(e) {
    return ea(e) ? document.querySelector(e) : e
}
/*!
 * sweetalert2-neutral v11.15.9-neutral
 * Released under the MIT License.
 */
function nh(e, a, i) {
    if (typeof e == "function" ? e === a : e.has(a)) return arguments.length < 3 ? a : i;
    throw new TypeError("Private element is not present on this object")
}
function SS(e, a) {
    if (a.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
}
function Ld(e, a) {
    return e.get(nh(e, a))
}
function wS(e, a, i) {
    SS(e, a), a.set(e, i)
}
function IS(e, a, i) {
    return e.set(nh(e, a), i), i
}
const bS = 100,
    fe = {},
    BS = () => {
        fe.previousActiveElement instanceof HTMLElement ? (fe.previousActiveElement.focus(), fe.previousActiveElement = null) : document.body && document.body.focus()
    },
    vS = e => new Promise(a => {
        if (!e) return a();
        const i = window.scrollX,
            t = window.scrollY;
        fe.restoreFocusTimeout = setTimeout(() => {
            BS(), a()
        }, bS), window.scrollTo(i, t)
    }),
    ih = "swal2-",
    DS = ["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error", "draggable", "dragging"],
    F = DS.reduce((e, a) => (e[a] = ih + a, e), {}),
    TS = ["success", "warning", "info", "question", "error"],
    Fr = TS.reduce((e, a) => (e[a] = ih + a, e), {}),
    uh = "SweetAlert2:",
    u0 = e => e.charAt(0).toUpperCase() + e.slice(1),
    Ua = e => {
        console.warn(`${uh} ${typeof e=="object"?e.join(" "):e}`)
    },
    Pi = e => {
        console.error(`${uh} ${e}`)
    },
    Pd = [],
    xS = e => {
        Pd.includes(e) || (Pd.push(e), Ua(e))
    },
    th = function (e) {
        let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        xS(`"${e}" is deprecated and will be removed in the next major release.${a?` Use "${a}" instead.`:""}`)
    },
    el = e => typeof e == "function" ? e() : e,
    t0 = e => e && typeof e.toPromise == "function",
    rt = e => t0(e) ? e.toPromise() : Promise.resolve(e),
    r0 = e => e && Promise.resolve(e) === e,
    Oa = () => document.body.querySelector(`.${F.container}`),
    lt = e => {
        const a = Oa();
        return a ? a.querySelector(e) : null
    },
    ja = e => lt(`.${e}`),
    ke = () => ja(F.popup),
    hu = () => ja(F.icon),
    FS = () => ja(F["icon-content"]),
    rh = () => ja(F.title),
    l0 = () => ja(F["html-container"]),
    lh = () => ja(F.image),
    s0 = () => ja(F["progress-steps"]),
    al = () => ja(F["validation-message"]),
    Tn = () => lt(`.${F.actions} .${F.confirm}`),
    Eu = () => lt(`.${F.actions} .${F.cancel}`),
    ki = () => lt(`.${F.actions} .${F.deny}`),
    _S = () => ja(F["input-label"]),
    pu = () => lt(`.${F.loader}`),
    st = () => ja(F.actions),
    sh = () => ja(F.footer),
    nl = () => ja(F["timer-progress-bar"]),
    o0 = () => ja(F.close),
    RS = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
    c0 = () => {
        const e = ke();
        if (!e) return [];
        const a = e.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),
            i = Array.from(a).sort((s, c) => {
                const g = parseInt(s.getAttribute("tabindex") || "0"),
                    f = parseInt(c.getAttribute("tabindex") || "0");
                return g > f ? 1 : g < f ? -1 : 0
            }),
            t = e.querySelectorAll(RS),
            l = Array.from(t).filter(s => s.getAttribute("tabindex") !== "-1");
        return [...new Set(i.concat(l))].filter(s => Ha(s))
    },
    g0 = () => Xn(document.body, F.shown) && !Xn(document.body, F["toast-shown"]) && !Xn(document.body, F["no-backdrop"]),
    il = () => {
        const e = ke();
        return e ? Xn(e, F.toast) : !1
    },
    LS = () => {
        const e = ke();
        return e ? e.hasAttribute("data-loading") : !1
    },
    qa = (e, a) => {
        if (e.textContent = "", a) {
            const t = new DOMParser().parseFromString(a, "text/html"),
                l = t.querySelector("head");
            l && Array.from(l.childNodes).forEach(c => {
                e.appendChild(c)
            });
            const s = t.querySelector("body");
            s && Array.from(s.childNodes).forEach(c => {
                c instanceof HTMLVideoElement || c instanceof HTMLAudioElement ? e.appendChild(c.cloneNode(!0)) : e.appendChild(c)
            })
        }
    },
    Xn = (e, a) => {
        if (!a) return !1;
        const i = a.split(/\s+/);
        for (let t = 0; t < i.length; t++)
            if (!e.classList.contains(i[t])) return !1;
        return !0
    },
    PS = (e, a) => {
        Array.from(e.classList).forEach(i => {
            !Object.values(F).includes(i) && !Object.values(Fr).includes(i) && !Object.values(a.showClass || {}).includes(i) && e.classList.remove(i)
        })
    },
    $a = (e, a, i) => {
        if (PS(e, a), !a.customClass) return;
        const t = a.customClass[i];
        if (t) {
            if (typeof t != "string" && !t.forEach) {
                Ua(`Invalid type of customClass.${i}! Expected string or iterable object, got "${typeof t}"`);
                return
            }
            Re(e, t)
        }
    },
    ul = (e, a) => {
        if (!a) return null;
        switch (a) {
        case "select":
        case "textarea":
        case "file":
            return e.querySelector(`.${F.popup} > .${F[a]}`);
        case "checkbox":
            return e.querySelector(`.${F.popup} > .${F.checkbox} input`);
        case "radio":
            return e.querySelector(`.${F.popup} > .${F.radio} input:checked`) || e.querySelector(`.${F.popup} > .${F.radio} input:first-child`);
        case "range":
            return e.querySelector(`.${F.popup} > .${F.range} input`);
        default:
            return e.querySelector(`.${F.popup} > .${F.input}`)
        }
    },
    oh = e => {
        if (e.focus(), e.type !== "file") {
            const a = e.value;
            e.value = "", e.value = a
        }
    },
    ch = (e, a, i) => {
        !e || !a || (typeof a == "string" && (a = a.split(/\s+/).filter(Boolean)), a.forEach(t => {
            Array.isArray(e) ? e.forEach(l => {
                i ? l.classList.add(t) : l.classList.remove(t)
            }) : i ? e.classList.add(t) : e.classList.remove(t)
        }))
    },
    Re = (e, a) => {
        ch(e, a, !0)
    },
    gn = (e, a) => {
        ch(e, a, !1)
    },
    gi = (e, a) => {
        const i = Array.from(e.children);
        for (let t = 0; t < i.length; t++) {
            const l = i[t];
            if (l instanceof HTMLElement && Xn(l, a)) return l
        }
    },
    Ri = (e, a, i) => {
        i === `${parseInt(i)}` && (i = parseInt(i)), i || parseInt(i) === 0 ? e.style.setProperty(a, typeof i == "number" ? `${i}px` : i) : e.style.removeProperty(a)
    },
    oa = function (e) {
        let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
        e && (e.style.display = a)
    },
    Sa = e => {
        e && (e.style.display = "none")
    },
    d0 = function (e) {
        let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "block";
        e && new MutationObserver(() => {
            ot(e, e.innerHTML, a)
        }).observe(e, {
            childList: !0,
            subtree: !0
        })
    },
    kd = (e, a, i, t) => {
        const l = e.querySelector(a);
        l && l.style.setProperty(i, t)
    },
    ot = function (e, a) {
        let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
        a ? oa(e, i) : Sa(e)
    },
    Ha = e => !!(e && (e.offsetWidth || e.offsetHeight || e.getClientRects().length)),
    kS = () => !Ha(Tn()) && !Ha(ki()) && !Ha(Eu()),
    zd = e => e.scrollHeight > e.clientHeight,
    gh = e => {
        const a = window.getComputedStyle(e),
            i = parseFloat(a.getPropertyValue("animation-duration") || "0"),
            t = parseFloat(a.getPropertyValue("transition-duration") || "0");
        return i > 0 || t > 0
    },
    f0 = function (e) {
        let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        const i = nl();
        i && Ha(i) && (a && (i.style.transition = "none", i.style.width = "100%"), setTimeout(() => {
            i.style.transition = `width ${e/1e3}s linear`, i.style.width = "0%"
        }, 10))
    },
    zS = () => {
        const e = nl();
        if (!e) return;
        const a = parseInt(window.getComputedStyle(e).width);
        e.style.removeProperty("transition"), e.style.width = "100%";
        const i = parseInt(window.getComputedStyle(e).width),
            t = a / i * 100;
        e.style.width = `${t}%`
    },
    KS = () => typeof window > "u" || typeof document > "u",
    HS = `
 <div aria-labelledby="${F.title}" aria-describedby="${F["html-container"]}" class="${F.popup}" tabindex="-1">
   <button type="button" class="${F.close}"></button>
   <ul class="${F["progress-steps"]}"></ul>
   <div class="${F.icon}"></div>
   <img class="${F.image}" />
   <h2 class="${F.title}" id="${F.title}"></h2>
   <div class="${F["html-container"]}" id="${F["html-container"]}"></div>
   <input class="${F.input}" id="${F.input}" />
   <input type="file" class="${F.file}" />
   <div class="${F.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${F.select}" id="${F.select}"></select>
   <div class="${F.radio}"></div>
   <label class="${F.checkbox}">
     <input type="checkbox" id="${F.checkbox}" />
     <span class="${F.label}"></span>
   </label>
   <textarea class="${F.textarea}" id="${F.textarea}"></textarea>
   <div class="${F["validation-message"]}" id="${F["validation-message"]}"></div>
   <div class="${F.actions}">
     <div class="${F.loader}"></div>
     <button type="button" class="${F.confirm}"></button>
     <button type="button" class="${F.deny}"></button>
     <button type="button" class="${F.cancel}"></button>
   </div>
   <div class="${F.footer}"></div>
   <div class="${F["timer-progress-bar-container"]}">
     <div class="${F["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, ""),
    US = () => {
        const e = Oa();
        return e ? (e.remove(), gn([document.documentElement, document.body], [F["no-backdrop"], F["toast-shown"], F["has-column"]]), !0) : !1
    },
    Di = () => {
        fe.currentInstance.resetValidationMessage()
    },
    OS = () => {
        const e = ke(),
            a = gi(e, F.input),
            i = gi(e, F.file),
            t = e.querySelector(`.${F.range} input`),
            l = e.querySelector(`.${F.range} output`),
            s = gi(e, F.select),
            c = e.querySelector(`.${F.checkbox} input`),
            g = gi(e, F.textarea);
        a.oninput = Di, i.onchange = Di, s.onchange = Di, c.onchange = Di, g.oninput = Di, t.oninput = () => {
            Di(), l.value = t.value
        }, t.onchange = () => {
            Di(), l.value = t.value
        }
    },
    GS = e => typeof e == "string" ? document.querySelector(e) : e,
    ZS = e => {
        const a = ke();
        a.setAttribute("role", e.toast ? "alert" : "dialog"), a.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || a.setAttribute("aria-modal", "true")
    },
    YS = e => {
        window.getComputedStyle(e).direction === "rtl" && Re(Oa(), F.rtl)
    },
    VS = e => {
        const a = US();
        if (KS()) {
            Pi("SweetAlert2 requires document to initialize");
            return
        }
        const i = document.createElement("div");
        i.className = F.container, a && Re(i, F["no-transition"]), qa(i, HS);
        const t = GS(e.target);
        t.appendChild(i), ZS(e), YS(t), OS()
    },
    m0 = (e, a) => {
        e instanceof HTMLElement ? a.appendChild(e) : typeof e == "object" ? XS(e, a) : e && qa(a, e)
    },
    XS = (e, a) => {
        e.jquery ? WS(a, e) : qa(a, e.toString())
    },
    WS = (e, a) => {
        if (e.textContent = "", 0 in a)
            for (let i = 0; i in a; i++) e.appendChild(a[i].cloneNode(!0));
        else e.appendChild(a.cloneNode(!0))
    },
    JS = (e, a) => {
        const i = st(),
            t = pu();
        !i || !t || (!a.showConfirmButton && !a.showDenyButton && !a.showCancelButton ? Sa(i) : oa(i), $a(i, a, "actions"), $S(i, t, a), qa(t, a.loaderHtml || ""), $a(t, a, "loader"))
    };
function $S(e, a, i) {
    const t = Tn(),
        l = ki(),
        s = Eu();
    !t || !l || !s || (Bs(t, "confirm", i), Bs(l, "deny", i), Bs(s, "cancel", i), jS(t, l, s, i), i.reverseButtons && (i.toast ? (e.insertBefore(s, t), e.insertBefore(l, t)) : (e.insertBefore(s, a), e.insertBefore(l, a), e.insertBefore(t, a))))
}
function jS(e, a, i, t) {
    if (!t.buttonsStyling) {
        gn([e, a, i], F.styled);
        return
    }
    Re([e, a, i], F.styled), t.confirmButtonColor && (e.style.backgroundColor = t.confirmButtonColor, Re(e, F["default-outline"])), t.denyButtonColor && (a.style.backgroundColor = t.denyButtonColor, Re(a, F["default-outline"])), t.cancelButtonColor && (i.style.backgroundColor = t.cancelButtonColor, Re(i, F["default-outline"]))
}
function Bs(e, a, i) {
    const t = u0(a);
    ot(e, i[`show${t}Button`], "inline-block"), qa(e, i[`${a}ButtonText`] || ""), e.setAttribute("aria-label", i[`${a}ButtonAriaLabel`] || ""), e.className = F[a], $a(e, i, `${a}Button`)
}
const qS = (e, a) => {
        const i = o0();
        i && (qa(i, a.closeButtonHtml || ""), $a(i, a, "closeButton"), ot(i, a.showCloseButton), i.setAttribute("aria-label", a.closeButtonAriaLabel || ""))
    },
    QS = (e, a) => {
        const i = Oa();
        i && (e2(i, a.backdrop), a2(i, a.position), n2(i, a.grow), $a(i, a, "container"))
    };
function e2(e, a) {
    typeof a == "string" ? e.style.background = a : a || Re([document.documentElement, document.body], F["no-backdrop"])
}
function a2(e, a) {
    a && (a in F ? Re(e, F[a]) : (Ua('The "position" parameter is not valid, defaulting to "center"'), Re(e, F.center)))
}
function n2(e, a) {
    a && Re(e, F[`grow-${a}`])
}
var Je = {
    innerParams: new WeakMap,
    domCache: new WeakMap
};
const i2 = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
    u2 = (e, a) => {
        const i = ke();
        if (!i) return;
        const t = Je.innerParams.get(e),
            l = !t || a.input !== t.input;
        i2.forEach(s => {
            const c = gi(i, F[s]);
            c && (l2(s, a.inputAttributes), c.className = F[s], l && Sa(c))
        }), a.input && (l && t2(a), s2(a))
    },
    t2 = e => {
        if (!e.input) return;
        if (!ia[e.input]) {
            Pi(`Unexpected type of input! Expected ${Object.keys(ia).join(" | ")}, got "${e.input}"`);
            return
        }
        const a = dh(e.input);
        if (!a) return;
        const i = ia[e.input](a, e);
        oa(a), e.inputAutoFocus && setTimeout(() => {
            oh(i)
        })
    },
    r2 = e => {
        for (let a = 0; a < e.attributes.length; a++) {
            const i = e.attributes[a].name;
            ["id", "type", "value", "style"].includes(i) || e.removeAttribute(i)
        }
    },
    l2 = (e, a) => {
        const i = ke();
        if (!i) return;
        const t = ul(i, e);
        if (t) {
            r2(t);
            for (const l in a) t.setAttribute(l, a[l])
        }
    },
    s2 = e => {
        if (!e.input) return;
        const a = dh(e.input);
        a && $a(a, e, "input")
    },
    h0 = (e, a) => {
        !e.placeholder && a.inputPlaceholder && (e.placeholder = a.inputPlaceholder)
    },
    ct = (e, a, i) => {
        if (i.inputLabel) {
            const t = document.createElement("label"),
                l = F["input-label"];
            t.setAttribute("for", e.id), t.className = l, typeof i.customClass == "object" && Re(t, i.customClass.inputLabel), t.innerText = i.inputLabel, a.insertAdjacentElement("beforebegin", t)
        }
    },
    dh = e => {
        const a = ke();
        if (a) return gi(a, F[e] || F.input)
    },
    _r = (e, a) => {
        ["string", "number"].includes(typeof a) ? e.value = `${a}` : r0(a) || Ua(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof a}"`)
    },
    ia = {};
ia.text = ia.email = ia.password = ia.number = ia.tel = ia.url = ia.search = ia.date = ia["datetime-local"] = ia.time = ia.week = ia.month = (e, a) => (_r(e, a.inputValue), ct(e, e, a), h0(e, a), e.type = a.input, e);
ia.file = (e, a) => (ct(e, e, a), h0(e, a), e);
ia.range = (e, a) => {
    const i = e.querySelector("input"),
        t = e.querySelector("output");
    return _r(i, a.inputValue), i.type = a.input, _r(t, a.inputValue), ct(i, e, a), e
};
ia.select = (e, a) => {
    if (e.textContent = "", a.inputPlaceholder) {
        const i = document.createElement("option");
        qa(i, a.inputPlaceholder), i.value = "", i.disabled = !0, i.selected = !0, e.appendChild(i)
    }
    return ct(e, e, a), e
};
ia.radio = e => (e.textContent = "", e);
ia.checkbox = (e, a) => {
    const i = ul(ke(), "checkbox");
    i.value = "1", i.checked = !!a.inputValue;
    const t = e.querySelector("span");
    return qa(t, a.inputPlaceholder || a.inputLabel), i
};
ia.textarea = (e, a) => {
    _r(e, a.inputValue), h0(e, a), ct(e, e, a);
    const i = t => parseInt(window.getComputedStyle(t).marginLeft) + parseInt(window.getComputedStyle(t).marginRight);
    return setTimeout(() => {
        if ("MutationObserver" in window) {
            const t = parseInt(window.getComputedStyle(ke()).width),
                l = () => {
                    if (!document.body.contains(e)) return;
                    const s = e.offsetWidth + i(e);
                    s > t ? ke().style.width = `${s}px` : Ri(ke(), "width", a.width)
                };
            new MutationObserver(l).observe(e, {
                attributes: !0,
                attributeFilter: ["style"]
            })
        }
    }), e
};
const o2 = (e, a) => {
        const i = l0();
        i && (d0(i), $a(i, a, "htmlContainer"), a.html ? (m0(a.html, i), oa(i, "block")) : a.text ? (i.textContent = a.text, oa(i, "block")) : Sa(i), u2(e, a))
    },
    c2 = (e, a) => {
        const i = sh();
        i && (d0(i), ot(i, a.footer, "block"), a.footer && m0(a.footer, i), $a(i, a, "footer"))
    },
    g2 = (e, a) => {
        const i = Je.innerParams.get(e),
            t = hu();
        if (t) {
            if (i && a.icon === i.icon) {
                Hd(t, a), Kd(t, a);
                return
            }
            if (!a.icon && !a.iconHtml) {
                Sa(t);
                return
            }
            if (a.icon && Object.keys(Fr).indexOf(a.icon) === -1) {
                Pi(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${a.icon}"`), Sa(t);
                return
            }
            oa(t), Hd(t, a), Kd(t, a), Re(t, a.showClass && a.showClass.icon)
        }
    },
    Kd = (e, a) => {
        for (const [i, t] of Object.entries(Fr)) a.icon !== i && gn(e, t);
        Re(e, a.icon && Fr[a.icon]), h2(e, a), d2(), $a(e, a, "icon")
    },
    d2 = () => {
        const e = ke();
        if (!e) return;
        const a = window.getComputedStyle(e).getPropertyValue("background-color"),
            i = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
        for (let t = 0; t < i.length; t++) i[t].style.backgroundColor = a
    },
    f2 = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,
    m2 = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
    Hd = (e, a) => {
        if (!a.icon && !a.iconHtml) return;
        let i = e.innerHTML,
            t = "";
        a.iconHtml ? t = Ud(a.iconHtml) : a.icon === "success" ? (t = f2, i = i.replace(/ style=".*?"/g, "")) : a.icon === "error" ? t = m2 : a.icon && (t = Ud({
            question: "?",
            warning: "!",
            info: "i"
        } [a.icon])), i.trim() !== t.trim() && qa(e, t)
    },
    h2 = (e, a) => {
        if (a.iconColor) {
            e.style.color = a.iconColor, e.style.borderColor = a.iconColor;
            for (const i of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) kd(e, i, "background-color", a.iconColor);
            kd(e, ".swal2-success-ring", "border-color", a.iconColor)
        }
    },
    Ud = e => `<div class="${F["icon-content"]}">${e}</div>`,
    E2 = (e, a) => {
        const i = lh();
        if (i) {
            if (!a.imageUrl) {
                Sa(i);
                return
            }
            oa(i, ""), i.setAttribute("src", a.imageUrl), i.setAttribute("alt", a.imageAlt || ""), Ri(i, "width", a.imageWidth), Ri(i, "height", a.imageHeight), i.className = F.image, $a(i, a, "image")
        }
    };
let E0 = !1,
    fh = 0,
    mh = 0,
    hh = 0,
    Eh = 0;
const p2 = e => {
        e.addEventListener("mousedown", Rr), document.body.addEventListener("mousemove", Lr), e.addEventListener("mouseup", Pr), e.addEventListener("touchstart", Rr), document.body.addEventListener("touchmove", Lr), e.addEventListener("touchend", Pr)
    },
    A2 = e => {
        e.removeEventListener("mousedown", Rr), document.body.removeEventListener("mousemove", Lr), e.removeEventListener("mouseup", Pr), e.removeEventListener("touchstart", Rr), document.body.removeEventListener("touchmove", Lr), e.removeEventListener("touchend", Pr)
    },
    Rr = e => {
        const a = ke();
        if (e.target === a || hu().contains(e.target)) {
            E0 = !0;
            const i = ph(e);
            fh = i.clientX, mh = i.clientY, hh = parseInt(a.style.insetInlineStart) || 0, Eh = parseInt(a.style.insetBlockStart) || 0, Re(a, "swal2-dragging")
        }
    },
    Lr = e => {
        const a = ke();
        if (E0) {
            let {
                clientX: i,
                clientY: t
            } = ph(e);
            a.style.insetInlineStart = `${hh+(i-fh)}px`, a.style.insetBlockStart = `${Eh+(t-mh)}px`
        }
    },
    Pr = () => {
        const e = ke();
        E0 = !1, gn(e, "swal2-dragging")
    },
    ph = e => {
        let a = 0,
            i = 0;
        return e.type.startsWith("mouse") ? (a = e.clientX, i = e.clientY) : e.type.startsWith("touch") && (a = e.touches[0].clientX, i = e.touches[0].clientY), {
            clientX: a,
            clientY: i
        }
    },
    N2 = (e, a) => {
        const i = Oa(),
            t = ke();
        if (!(!i || !t)) {
            if (a.toast) {
                Ri(i, "width", a.width), t.style.width = "100%";
                const l = pu();
                l && t.insertBefore(l, hu())
            } else Ri(t, "width", a.width);
            Ri(t, "padding", a.padding), a.color && (t.style.color = a.color), a.background && (t.style.background = a.background), Sa(al()), y2(t, a), a.draggable && !a.toast ? (Re(t, F.draggable), p2(t)) : (gn(t, F.draggable), A2(t))
        }
    },
    y2 = (e, a) => {
        const i = a.showClass || {};
        e.className = `${F.popup} ${Ha(e)?i.popup:""}`, a.toast ? (Re([document.documentElement, document.body], F["toast-shown"]), Re(e, F.toast)) : Re(e, F.modal), $a(e, a, "popup"), typeof a.customClass == "string" && Re(e, a.customClass), a.icon && Re(e, F[`icon-${a.icon}`])
    },
    C2 = (e, a) => {
        const i = s0();
        if (!i) return;
        const {
            progressSteps: t,
            currentProgressStep: l
        } = a;
        if (!t || t.length === 0 || l === void 0) {
            Sa(i);
            return
        }
        oa(i), i.textContent = "", l >= t.length && Ua("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), t.forEach((s, c) => {
            const g = M2(s);
            if (i.appendChild(g), c === l && Re(g, F["active-progress-step"]), c !== t.length - 1) {
                const f = S2(a);
                i.appendChild(f)
            }
        })
    },
    M2 = e => {
        const a = document.createElement("li");
        return Re(a, F["progress-step"]), qa(a, e), a
    },
    S2 = e => {
        const a = document.createElement("li");
        return Re(a, F["progress-step-line"]), e.progressStepsDistance && Ri(a, "width", e.progressStepsDistance), a
    },
    w2 = (e, a) => {
        const i = rh();
        i && (d0(i), ot(i, a.title || a.titleText, "block"), a.title && m0(a.title, i), a.titleText && (i.innerText = a.titleText), $a(i, a, "title"))
    },
    Ah = (e, a) => {
        N2(e, a), QS(e, a), C2(e, a), g2(e, a), E2(e, a), w2(e, a), qS(e, a), o2(e, a), JS(e, a), c2(e, a);
        const i = ke();
        typeof a.didRender == "function" && i && a.didRender(i), fe.eventEmitter.emit("didRender", i)
    },
    I2 = () => Ha(ke()),
    Nh = () => {
        var e;
        return (e = Tn()) === null || e === void 0 ? void 0 : e.click()
    },
    b2 = () => {
        var e;
        return (e = ki()) === null || e === void 0 ? void 0 : e.click()
    },
    B2 = () => {
        var e;
        return (e = Eu()) === null || e === void 0 ? void 0 : e.click()
    },
    Au = Object.freeze({
        cancel: "cancel",
        backdrop: "backdrop",
        close: "close",
        esc: "esc",
        timer: "timer"
    }),
    yh = e => {
        e.keydownTarget && e.keydownHandlerAdded && (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, {
            capture: e.keydownListenerCapture
        }), e.keydownHandlerAdded = !1)
    },
    v2 = (e, a, i) => {
        yh(e), a.toast || (e.keydownHandler = t => T2(a, t, i), e.keydownTarget = a.keydownListenerCapture ? window : ke(), e.keydownListenerCapture = a.keydownListenerCapture, e.keydownTarget.addEventListener("keydown", e.keydownHandler, {
            capture: e.keydownListenerCapture
        }), e.keydownHandlerAdded = !0)
    },
    Do = (e, a) => {
        var i;
        const t = c0();
        if (t.length) {
            e = e + a, e === t.length ? e = 0 : e === -1 && (e = t.length - 1), t[e].focus();
            return
        }(i = ke()) === null || i === void 0 || i.focus()
    },
    Ch = ["ArrowRight", "ArrowDown"],
    D2 = ["ArrowLeft", "ArrowUp"],
    T2 = (e, a, i) => {
        e && (a.isComposing || a.keyCode === 229 || (e.stopKeydownPropagation && a.stopPropagation(), a.key === "Enter" ? x2(a, e) : a.key === "Tab" ? F2(a) : [...Ch, ...D2].includes(a.key) ? _2(a.key) : a.key === "Escape" && R2(a, e, i)))
    },
    x2 = (e, a) => {
        if (!el(a.allowEnterKey)) return;
        const i = ul(ke(), a.input);
        if (e.target && i && e.target instanceof HTMLElement && e.target.outerHTML === i.outerHTML) {
            if (["textarea", "file"].includes(a.input)) return;
            Nh(), e.preventDefault()
        }
    },
    F2 = e => {
        const a = e.target,
            i = c0();
        let t = -1;
        for (let l = 0; l < i.length; l++)
            if (a === i[l]) {
                t = l;
                break
            }
        e.shiftKey ? Do(t, -1) : Do(t, 1), e.stopPropagation(), e.preventDefault()
    },
    _2 = e => {
        const a = st(),
            i = Tn(),
            t = ki(),
            l = Eu();
        if (!a || !i || !t || !l) return;
        const s = [i, t, l];
        if (document.activeElement instanceof HTMLElement && !s.includes(document.activeElement)) return;
        const c = Ch.includes(e) ? "nextElementSibling" : "previousElementSibling";
        let g = document.activeElement;
        if (g) {
            for (let f = 0; f < a.children.length; f++) {
                if (g = g[c], !g) return;
                if (g instanceof HTMLButtonElement && Ha(g)) break
            }
            g instanceof HTMLButtonElement && g.focus()
        }
    },
    R2 = (e, a, i) => {
        el(a.allowEscapeKey) && (e.preventDefault(), i(Au.esc))
    };
var fu = {
    swalPromiseResolve: new WeakMap,
    swalPromiseReject: new WeakMap
};
const L2 = () => {
        const e = Oa();
        Array.from(document.body.children).forEach(i => {
            i.contains(e) || (i.hasAttribute("aria-hidden") && i.setAttribute("data-previous-aria-hidden", i.getAttribute("aria-hidden") || ""), i.setAttribute("aria-hidden", "true"))
        })
    },
    Mh = () => {
        Array.from(document.body.children).forEach(a => {
            a.hasAttribute("data-previous-aria-hidden") ? (a.setAttribute("aria-hidden", a.getAttribute("data-previous-aria-hidden") || ""), a.removeAttribute("data-previous-aria-hidden")) : a.removeAttribute("aria-hidden")
        })
    },
    Sh = typeof window < "u" && !!window.GestureEvent,
    P2 = () => {
        if (Sh && !Xn(document.body, F.iosfix)) {
            const e = document.body.scrollTop;
            document.body.style.top = `${e*-1}px`, Re(document.body, F.iosfix), k2()
        }
    },
    k2 = () => {
        const e = Oa();
        if (!e) return;
        let a;
        e.ontouchstart = i => {
            a = z2(i)
        }, e.ontouchmove = i => {
            a && (i.preventDefault(), i.stopPropagation())
        }
    },
    z2 = e => {
        const a = e.target,
            i = Oa(),
            t = l0();
        return !i || !t || K2(e) || H2(e) ? !1 : a === i || !zd(i) && a instanceof HTMLElement && a.tagName !== "INPUT" && a.tagName !== "TEXTAREA" && !(zd(t) && t.contains(a))
    },
    K2 = e => e.touches && e.touches.length && e.touches[0].touchType === "stylus",
    H2 = e => e.touches && e.touches.length > 1,
    U2 = () => {
        if (Xn(document.body, F.iosfix)) {
            const e = parseInt(document.body.style.top, 10);
            gn(document.body, F.iosfix), document.body.style.top = "", document.body.scrollTop = e * -1
        }
    },
    O2 = () => {
        const e = document.createElement("div");
        e.className = F["scrollbar-measure"], document.body.appendChild(e);
        const a = e.getBoundingClientRect().width - e.clientWidth;
        return document.body.removeChild(e), a
    };
let ou = null;
const G2 = e => {
        ou === null && (document.body.scrollHeight > window.innerHeight || e === "scroll") && (ou = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = `${ou+O2()}px`)
    },
    Z2 = () => {
        ou !== null && (document.body.style.paddingRight = `${ou}px`, ou = null)
    };
function wh(e, a, i, t) {
    il() ? Od(e, t) : (vS(i).then(() => Od(e, t)), yh(fe)), Sh ? (a.setAttribute("style", "display:none !important"), a.removeAttribute("class"), a.innerHTML = "") : a.remove(), g0() && (Z2(), U2(), Mh()), Y2()
}
function Y2() {
    gn([document.documentElement, document.body], [F.shown, F["height-auto"], F["no-backdrop"], F["toast-shown"]])
}
function di(e) {
    e = X2(e);
    const a = fu.swalPromiseResolve.get(this),
        i = V2(this);
    this.isAwaitingPromise ? e.isDismissed || (gt(this), a(e)) : i && a(e)
}
const V2 = e => {
    const a = ke();
    if (!a) return !1;
    const i = Je.innerParams.get(e);
    if (!i || Xn(a, i.hideClass.popup)) return !1;
    gn(a, i.showClass.popup), Re(a, i.hideClass.popup);
    const t = Oa();
    return gn(t, i.showClass.backdrop), Re(t, i.hideClass.backdrop), W2(e, a, i), !0
};
function Ih(e) {
    const a = fu.swalPromiseReject.get(this);
    gt(this), a && a(e)
}
const gt = e => {
        e.isAwaitingPromise && (delete e.isAwaitingPromise, Je.innerParams.get(e) || e._destroy())
    },
    X2 = e => typeof e > "u" ? {
        isConfirmed: !1,
        isDenied: !1,
        isDismissed: !0
    } : Object.assign({
        isConfirmed: !1,
        isDenied: !1,
        isDismissed: !1
    }, e),
    W2 = (e, a, i) => {
        var t;
        const l = Oa(),
            s = gh(a);
        typeof i.willClose == "function" && i.willClose(a), (t = fe.eventEmitter) === null || t === void 0 || t.emit("willClose", a), s ? J2(e, a, l, i.returnFocus, i.didClose) : wh(e, l, i.returnFocus, i.didClose)
    },
    J2 = (e, a, i, t, l) => {
        fe.swalCloseEventFinishedCallback = wh.bind(null, e, i, t, l);
        const s = function (c) {
            if (c.target === a) {
                var g;
                (g = fe.swalCloseEventFinishedCallback) === null || g === void 0 || g.call(fe), delete fe.swalCloseEventFinishedCallback, a.removeEventListener("animationend", s), a.removeEventListener("transitionend", s)
            }
        };
        a.addEventListener("animationend", s), a.addEventListener("transitionend", s)
    },
    Od = (e, a) => {
        setTimeout(() => {
            var i;
            typeof a == "function" && a.bind(e.params)(), (i = fe.eventEmitter) === null || i === void 0 || i.emit("didClose"), e._destroy && e._destroy()
        })
    },
    mu = e => {
        let a = ke();
        if (a || new xo, a = ke(), !a) return;
        const i = pu();
        il() ? Sa(hu()) : $2(a, e), oa(i), a.setAttribute("data-loading", "true"), a.setAttribute("aria-busy", "true"), a.focus()
    },
    $2 = (e, a) => {
        const i = st(),
            t = pu();
        !i || !t || (!a && Ha(Tn()) && (a = Tn()), oa(i), a && (Sa(a), t.setAttribute("data-button-to-replace", a.className), i.insertBefore(t, a)), Re([e, i], F.loading))
    },
    j2 = (e, a) => {
        a.input === "select" || a.input === "radio" ? nw(e, a) : ["text", "email", "number", "tel", "textarea"].some(i => i === a.input) && (t0(a.inputValue) || r0(a.inputValue)) && (mu(Tn()), iw(e, a))
    },
    q2 = (e, a) => {
        const i = e.getInput();
        if (!i) return null;
        switch (a.input) {
        case "checkbox":
            return Q2(i);
        case "radio":
            return ew(i);
        case "file":
            return aw(i);
        default:
            return a.inputAutoTrim ? i.value.trim() : i.value
        }
    },
    Q2 = e => e.checked ? 1 : 0,
    ew = e => e.checked ? e.value : null,
    aw = e => e.files && e.files.length ? e.getAttribute("multiple") !== null ? e.files : e.files[0] : null,
    nw = (e, a) => {
        const i = ke();
        if (!i) return;
        const t = l => {
            a.input === "select" ? uw(i, kr(l), a) : a.input === "radio" && tw(i, kr(l), a)
        };
        t0(a.inputOptions) || r0(a.inputOptions) ? (mu(Tn()), rt(a.inputOptions).then(l => {
            e.hideLoading(), t(l)
        })) : typeof a.inputOptions == "object" ? t(a.inputOptions) : Pi(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof a.inputOptions}`)
    },
    iw = (e, a) => {
        const i = e.getInput();
        i && (Sa(i), rt(a.inputValue).then(t => {
            i.value = a.input === "number" ? `${parseFloat(t)||0}` : `${t}`, oa(i), i.focus(), e.hideLoading()
        }).catch(t => {
            Pi(`Error in inputValue promise: ${t}`), i.value = "", oa(i), i.focus(), e.hideLoading()
        }))
    };
function uw(e, a, i) {
    const t = gi(e, F.select);
    if (!t) return;
    const l = (s, c, g) => {
        const f = document.createElement("option");
        f.value = g, qa(f, c), f.selected = bh(g, i.inputValue), s.appendChild(f)
    };
    a.forEach(s => {
        const c = s[0],
            g = s[1];
        if (Array.isArray(g)) {
            const f = document.createElement("optgroup");
            f.label = c, f.disabled = !1, t.appendChild(f), g.forEach(A => l(f, A[1], A[0]))
        } else l(t, g, c)
    }), t.focus()
}
function tw(e, a, i) {
    const t = gi(e, F.radio);
    if (!t) return;
    a.forEach(s => {
        const c = s[0],
            g = s[1],
            f = document.createElement("input"),
            A = document.createElement("label");
        f.type = "radio", f.name = F.radio, f.value = c, bh(c, i.inputValue) && (f.checked = !0);
        const h = document.createElement("span");
        qa(h, g), h.className = F.label, A.appendChild(f), A.appendChild(h), t.appendChild(A)
    });
    const l = t.querySelectorAll("input");
    l.length && l[0].focus()
}
const kr = e => {
        const a = [];
        return e instanceof Map ? e.forEach((i, t) => {
            let l = i;
            typeof l == "object" && (l = kr(l)), a.push([t, l])
        }) : Object.keys(e).forEach(i => {
            let t = e[i];
            typeof t == "object" && (t = kr(t)), a.push([i, t])
        }), a
    },
    bh = (e, a) => !!a && a.toString() === e.toString(),
    rw = e => {
        const a = Je.innerParams.get(e);
        e.disableButtons(), a.input ? Bh(e, "confirm") : A0(e, !0)
    },
    lw = e => {
        const a = Je.innerParams.get(e);
        e.disableButtons(), a.returnInputValueOnDeny ? Bh(e, "deny") : p0(e, !1)
    },
    sw = (e, a) => {
        e.disableButtons(), a(Au.cancel)
    },
    Bh = (e, a) => {
        const i = Je.innerParams.get(e);
        if (!i.input) {
            Pi(`The "input" parameter is needed to be set when using returnInputValueOn${u0(a)}`);
            return
        }
        const t = e.getInput(),
            l = q2(e, i);
        i.inputValidator ? ow(e, l, a) : t && !t.checkValidity() ? (e.enableButtons(), e.showValidationMessage(i.validationMessage || t.validationMessage)) : a === "deny" ? p0(e, l) : A0(e, l)
    },
    ow = (e, a, i) => {
        const t = Je.innerParams.get(e);
        e.disableInput(), Promise.resolve().then(() => rt(t.inputValidator(a, t.validationMessage))).then(s => {
            e.enableButtons(), e.enableInput(), s ? e.showValidationMessage(s) : i === "deny" ? p0(e, a) : A0(e, a)
        })
    },
    p0 = (e, a) => {
        const i = Je.innerParams.get(e || void 0);
        i.showLoaderOnDeny && mu(ki()), i.preDeny ? (e.isAwaitingPromise = !0, Promise.resolve().then(() => rt(i.preDeny(a, i.validationMessage))).then(l => {
            l === !1 ? (e.hideLoading(), gt(e)) : e.close({
                isDenied: !0,
                value: typeof l > "u" ? a : l
            })
        }).catch(l => vh(e || void 0, l))) : e.close({
            isDenied: !0,
            value: a
        })
    },
    Gd = (e, a) => {
        e.close({
            isConfirmed: !0,
            value: a
        })
    },
    vh = (e, a) => {
        e.rejectPromise(a)
    },
    A0 = (e, a) => {
        const i = Je.innerParams.get(e || void 0);
        i.showLoaderOnConfirm && mu(), i.preConfirm ? (e.resetValidationMessage(), e.isAwaitingPromise = !0, Promise.resolve().then(() => rt(i.preConfirm(a, i.validationMessage))).then(l => {
            Ha(al()) || l === !1 ? (e.hideLoading(), gt(e)) : Gd(e, typeof l > "u" ? a : l)
        }).catch(l => vh(e || void 0, l))) : Gd(e, a)
    };
function zr() {
    const e = Je.innerParams.get(this);
    if (!e) return;
    const a = Je.domCache.get(this);
    Sa(a.loader), il() ? e.icon && oa(hu()) : cw(a), gn([a.popup, a.actions], F.loading), a.popup.removeAttribute("aria-busy"), a.popup.removeAttribute("data-loading"), a.confirmButton.disabled = !1, a.denyButton.disabled = !1, a.cancelButton.disabled = !1
}
const cw = e => {
    const a = e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));
    a.length ? oa(a[0], "inline-block") : kS() && Sa(e.actions)
};
function Dh() {
    const e = Je.innerParams.get(this),
        a = Je.domCache.get(this);
    return a ? ul(a.popup, e.input) : null
}
function Th(e, a, i) {
    const t = Je.domCache.get(e);
    a.forEach(l => {
        t[l].disabled = i
    })
}
function xh(e, a) {
    const i = ke();
    if (!(!i || !e))
        if (e.type === "radio") {
            const t = i.querySelectorAll(`[name="${F.radio}"]`);
            for (let l = 0; l < t.length; l++) t[l].disabled = a
        } else e.disabled = a
}
function Fh() {
    Th(this, ["confirmButton", "denyButton", "cancelButton"], !1)
}
function _h() {
    Th(this, ["confirmButton", "denyButton", "cancelButton"], !0)
}
function Rh() {
    xh(this.getInput(), !1)
}
function Lh() {
    xh(this.getInput(), !0)
}
function Ph(e) {
    const a = Je.domCache.get(this),
        i = Je.innerParams.get(this);
    qa(a.validationMessage, e), a.validationMessage.className = F["validation-message"], i.customClass && i.customClass.validationMessage && Re(a.validationMessage, i.customClass.validationMessage), oa(a.validationMessage);
    const t = this.getInput();
    t && (t.setAttribute("aria-invalid", "true"), t.setAttribute("aria-describedby", F["validation-message"]), oh(t), Re(t, F.inputerror))
}
function kh() {
    const e = Je.domCache.get(this);
    e.validationMessage && Sa(e.validationMessage);
    const a = this.getInput();
    a && (a.removeAttribute("aria-invalid"), a.removeAttribute("aria-describedby"), gn(a, F.inputerror))
}
const cu = {
        title: "",
        titleText: "",
        text: "",
        html: "",
        footer: "",
        icon: void 0,
        iconColor: void 0,
        iconHtml: void 0,
        template: void 0,
        toast: !1,
        draggable: !1,
        animation: !0,
        showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show"
        },
        hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide"
        },
        customClass: {},
        target: "body",
        color: void 0,
        backdrop: !0,
        heightAuto: !0,
        allowOutsideClick: !0,
        allowEscapeKey: !0,
        allowEnterKey: !0,
        stopKeydownPropagation: !0,
        keydownListenerCapture: !1,
        showConfirmButton: !0,
        showDenyButton: !1,
        showCancelButton: !1,
        preConfirm: void 0,
        preDeny: void 0,
        confirmButtonText: "OK",
        confirmButtonAriaLabel: "",
        confirmButtonColor: void 0,
        denyButtonText: "No",
        denyButtonAriaLabel: "",
        denyButtonColor: void 0,
        cancelButtonText: "Cancel",
        cancelButtonAriaLabel: "",
        cancelButtonColor: void 0,
        buttonsStyling: !0,
        reverseButtons: !1,
        focusConfirm: !0,
        focusDeny: !1,
        focusCancel: !1,
        returnFocus: !0,
        showCloseButton: !1,
        closeButtonHtml: "&times;",
        closeButtonAriaLabel: "Close this dialog",
        loaderHtml: "",
        showLoaderOnConfirm: !1,
        showLoaderOnDeny: !1,
        imageUrl: void 0,
        imageWidth: void 0,
        imageHeight: void 0,
        imageAlt: "",
        timer: void 0,
        timerProgressBar: !1,
        width: void 0,
        padding: void 0,
        background: void 0,
        input: void 0,
        inputPlaceholder: "",
        inputLabel: "",
        inputValue: "",
        inputOptions: {},
        inputAutoFocus: !0,
        inputAutoTrim: !0,
        inputAttributes: {},
        inputValidator: void 0,
        returnInputValueOnDeny: !1,
        validationMessage: void 0,
        grow: !1,
        position: "center",
        progressSteps: [],
        currentProgressStep: void 0,
        progressStepsDistance: void 0,
        willOpen: void 0,
        didOpen: void 0,
        didRender: void 0,
        willClose: void 0,
        didClose: void 0,
        didDestroy: void 0,
        scrollbarPadding: !0
    },
    gw = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "draggable", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
    dw = {
        allowEnterKey: void 0
    },
    fw = ["allowOutsideClick", "allowEnterKey", "backdrop", "draggable", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
    zh = e => Object.prototype.hasOwnProperty.call(cu, e),
    Kh = e => gw.indexOf(e) !== -1,
    Hh = e => dw[e],
    mw = e => {
        zh(e) || Ua(`Unknown parameter "${e}"`)
    },
    hw = e => {
        fw.includes(e) && Ua(`The parameter "${e}" is incompatible with toasts`)
    },
    Ew = e => {
        const a = Hh(e);
        a && th(e, a)
    },
    pw = e => {
        e.backdrop === !1 && e.allowOutsideClick && Ua('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
        for (const a in e) mw(a), e.toast && hw(a), Ew(a)
    };
function Uh(e) {
    const a = ke(),
        i = Je.innerParams.get(this);
    if (!a || Xn(a, i.hideClass.popup)) {
        Ua("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
        return
    }
    const t = Aw(e),
        l = Object.assign({}, i, t);
    Ah(this, l), Je.innerParams.set(this, l), Object.defineProperties(this, {
        params: {
            value: Object.assign({}, this.params, e),
            writable: !1,
            enumerable: !0
        }
    })
}
const Aw = e => {
    const a = {};
    return Object.keys(e).forEach(i => {
        Kh(i) ? a[i] = e[i] : Ua(`Invalid parameter to update: ${i}`)
    }), a
};
function Oh() {
    const e = Je.domCache.get(this),
        a = Je.innerParams.get(this);
    if (!a) {
        Gh(this);
        return
    }
    e.popup && fe.swalCloseEventFinishedCallback && (fe.swalCloseEventFinishedCallback(), delete fe.swalCloseEventFinishedCallback), typeof a.didDestroy == "function" && a.didDestroy(), fe.eventEmitter.emit("didDestroy"), Nw(this)
}
const Nw = e => {
        Gh(e), delete e.params, delete fe.keydownHandler, delete fe.keydownTarget, delete fe.currentInstance
    },
    Gh = e => {
        e.isAwaitingPromise ? (vs(Je, e), e.isAwaitingPromise = !0) : (vs(fu, e), vs(Je, e), delete e.isAwaitingPromise, delete e.disableButtons, delete e.enableButtons, delete e.getInput, delete e.disableInput, delete e.enableInput, delete e.hideLoading, delete e.disableLoading, delete e.showValidationMessage, delete e.resetValidationMessage, delete e.close, delete e.closePopup, delete e.closeModal, delete e.closeToast, delete e.rejectPromise, delete e.update, delete e._destroy)
    },
    vs = (e, a) => {
        for (const i in e) e[i].delete(a)
    };
var yw = Object.freeze({
    __proto__: null,
    _destroy: Oh,
    close: di,
    closeModal: di,
    closePopup: di,
    closeToast: di,
    disableButtons: _h,
    disableInput: Lh,
    disableLoading: zr,
    enableButtons: Fh,
    enableInput: Rh,
    getInput: Dh,
    handleAwaitingPromise: gt,
    hideLoading: zr,
    rejectPromise: Ih,
    resetValidationMessage: kh,
    showValidationMessage: Ph,
    update: Uh
});
const Cw = (e, a, i) => {
        e.toast ? Mw(e, a, i) : (ww(a), Iw(a), bw(e, a, i))
    },
    Mw = (e, a, i) => {
        a.popup.onclick = () => {
            e && (Sw(e) || e.timer || e.input) || i(Au.close)
        }
    },
    Sw = e => !!(e.showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton);
let Kr = !1;
const ww = e => {
        e.popup.onmousedown = () => {
            e.container.onmouseup = function (a) {
                e.container.onmouseup = () => {}, a.target === e.container && (Kr = !0)
            }
        }
    },
    Iw = e => {
        e.container.onmousedown = a => {
            a.target === e.container && a.preventDefault(), e.popup.onmouseup = function (i) {
                e.popup.onmouseup = () => {}, (i.target === e.popup || i.target instanceof HTMLElement && e.popup.contains(i.target)) && (Kr = !0)
            }
        }
    },
    bw = (e, a, i) => {
        a.container.onclick = t => {
            if (Kr) {
                Kr = !1;
                return
            }
            t.target === a.container && el(e.allowOutsideClick) && i(Au.backdrop)
        }
    },
    Bw = e => typeof e == "object" && e.jquery,
    Zd = e => e instanceof Element || Bw(e),
    vw = e => {
        const a = {};
        return typeof e[0] == "object" && !Zd(e[0]) ? Object.assign(a, e[0]) : ["title", "html", "icon"].forEach((i, t) => {
            const l = e[t];
            typeof l == "string" || Zd(l) ? a[i] = l : l !== void 0 && Pi(`Unexpected type of ${i}! Expected "string" or "Element", got ${typeof l}`)
        }), a
    };
function Dw() {
    for (var e = arguments.length, a = new Array(e), i = 0; i < e; i++) a[i] = arguments[i];
    return new this(...a)
}
function Tw(e) {
    class a extends this {
        _main(t, l) {
            return super._main(t, Object.assign({}, e, l))
        }
    }
    return a
}
const xw = () => fe.timeout && fe.timeout.getTimerLeft(),
    Zh = () => {
        if (fe.timeout) return zS(), fe.timeout.stop()
    },
    Yh = () => {
        if (fe.timeout) {
            const e = fe.timeout.start();
            return f0(e), e
        }
    },
    Fw = () => {
        const e = fe.timeout;
        return e && (e.running ? Zh() : Yh())
    },
    _w = e => {
        if (fe.timeout) {
            const a = fe.timeout.increase(e);
            return f0(a, !0), a
        }
    },
    Rw = () => !!(fe.timeout && fe.timeout.isRunning());
let Yd = !1;
const To = {};
function Lw() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
    To[e] = this, Yd || (document.body.addEventListener("click", Pw), Yd = !0)
}
const Pw = e => {
    for (let a = e.target; a && a !== document; a = a.parentNode)
        for (const i in To) {
            const t = a.getAttribute(i);
            if (t) {
                To[i].fire({
                    template: t
                });
                return
            }
        }
};
class kw {
    constructor() {
        this.events = {}
    }
    _getHandlersByEventName(a) {
        return typeof this.events[a] > "u" && (this.events[a] = []), this.events[a]
    }
    on(a, i) {
        const t = this._getHandlersByEventName(a);
        t.includes(i) || t.push(i)
    }
    once(a, i) {
        var t = this;
        const l = function () {
            t.removeListener(a, l);
            for (var s = arguments.length, c = new Array(s), g = 0; g < s; g++) c[g] = arguments[g];
            i.apply(t, c)
        };
        this.on(a, l)
    }
    emit(a) {
        for (var i = arguments.length, t = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++) t[l - 1] = arguments[l];
        this._getHandlersByEventName(a).forEach(s => {
            try {
                s.apply(this, t)
            } catch (c) {
                console.error(c)
            }
        })
    }
    removeListener(a, i) {
        const t = this._getHandlersByEventName(a),
            l = t.indexOf(i);
        l > -1 && t.splice(l, 1)
    }
    removeAllListeners(a) {
        this.events[a] !== void 0 && (this.events[a].length = 0)
    }
    reset() {
        this.events = {}
    }
}
fe.eventEmitter = new kw;
const zw = (e, a) => {
        fe.eventEmitter.on(e, a)
    },
    Kw = (e, a) => {
        fe.eventEmitter.once(e, a)
    },
    Hw = (e, a) => {
        if (!e) {
            fe.eventEmitter.reset();
            return
        }
        a ? fe.eventEmitter.removeListener(e, a) : fe.eventEmitter.removeAllListeners(e)
    };
var Uw = Object.freeze({
    __proto__: null,
    argsToParams: vw,
    bindClickHandler: Lw,
    clickCancel: B2,
    clickConfirm: Nh,
    clickDeny: b2,
    enableLoading: mu,
    fire: Dw,
    getActions: st,
    getCancelButton: Eu,
    getCloseButton: o0,
    getConfirmButton: Tn,
    getContainer: Oa,
    getDenyButton: ki,
    getFocusableElements: c0,
    getFooter: sh,
    getHtmlContainer: l0,
    getIcon: hu,
    getIconContent: FS,
    getImage: lh,
    getInputLabel: _S,
    getLoader: pu,
    getPopup: ke,
    getProgressSteps: s0,
    getTimerLeft: xw,
    getTimerProgressBar: nl,
    getTitle: rh,
    getValidationMessage: al,
    increaseTimer: _w,
    isDeprecatedParameter: Hh,
    isLoading: LS,
    isTimerRunning: Rw,
    isUpdatableParameter: Kh,
    isValidParameter: zh,
    isVisible: I2,
    mixin: Tw,
    off: Hw,
    on: zw,
    once: Kw,
    resumeTimer: Yh,
    showLoading: mu,
    stopTimer: Zh,
    toggleTimer: Fw
});
class Ow {
    constructor(a, i) {
        this.callback = a, this.remaining = i, this.running = !1, this.start()
    }
    start() {
        return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
    }
    stop() {
        return this.started && this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date().getTime() - this.started.getTime()), this.remaining
    }
    increase(a) {
        const i = this.running;
        return i && this.stop(), this.remaining += a, i && this.start(), this.remaining
    }
    getTimerLeft() {
        return this.running && (this.stop(), this.start()), this.remaining
    }
    isRunning() {
        return this.running
    }
}
const Vh = ["swal-title", "swal-html", "swal-footer"],
    Gw = e => {
        const a = typeof e.template == "string" ? document.querySelector(e.template) : e.template;
        if (!a) return {};
        const i = a.content;
        return jw(i), Object.assign(Zw(i), Yw(i), Vw(i), Xw(i), Ww(i), Jw(i), $w(i, Vh))
    },
    Zw = e => {
        const a = {};
        return Array.from(e.querySelectorAll("swal-param")).forEach(t => {
            Li(t, ["name", "value"]);
            const l = t.getAttribute("name"),
                s = t.getAttribute("value");
            !l || !s || (typeof cu[l] == "boolean" ? a[l] = s !== "false" : typeof cu[l] == "object" ? a[l] = JSON.parse(s) : a[l] = s)
        }), a
    },
    Yw = e => {
        const a = {};
        return Array.from(e.querySelectorAll("swal-function-param")).forEach(t => {
            const l = t.getAttribute("name"),
                s = t.getAttribute("value");
            !l || !s || (a[l] = new Function(`return ${s}`)())
        }), a
    },
    Vw = e => {
        const a = {};
        return Array.from(e.querySelectorAll("swal-button")).forEach(t => {
            Li(t, ["type", "color", "aria-label"]);
            const l = t.getAttribute("type");
            !l || !["confirm", "cancel", "deny"].includes(l) || (a[`${l}ButtonText`] = t.innerHTML, a[`show${u0(l)}Button`] = !0, t.hasAttribute("color") && (a[`${l}ButtonColor`] = t.getAttribute("color")), t.hasAttribute("aria-label") && (a[`${l}ButtonAriaLabel`] = t.getAttribute("aria-label")))
        }), a
    },
    Xw = e => {
        const a = {},
            i = e.querySelector("swal-image");
        return i && (Li(i, ["src", "width", "height", "alt"]), i.hasAttribute("src") && (a.imageUrl = i.getAttribute("src") || void 0), i.hasAttribute("width") && (a.imageWidth = i.getAttribute("width") || void 0), i.hasAttribute("height") && (a.imageHeight = i.getAttribute("height") || void 0), i.hasAttribute("alt") && (a.imageAlt = i.getAttribute("alt") || void 0)), a
    },
    Ww = e => {
        const a = {},
            i = e.querySelector("swal-icon");
        return i && (Li(i, ["type", "color"]), i.hasAttribute("type") && (a.icon = i.getAttribute("type")), i.hasAttribute("color") && (a.iconColor = i.getAttribute("color")), a.iconHtml = i.innerHTML), a
    },
    Jw = e => {
        const a = {},
            i = e.querySelector("swal-input");
        i && (Li(i, ["type", "label", "placeholder", "value"]), a.input = i.getAttribute("type") || "text", i.hasAttribute("label") && (a.inputLabel = i.getAttribute("label")), i.hasAttribute("placeholder") && (a.inputPlaceholder = i.getAttribute("placeholder")), i.hasAttribute("value") && (a.inputValue = i.getAttribute("value")));
        const t = Array.from(e.querySelectorAll("swal-input-option"));
        return t.length && (a.inputOptions = {}, t.forEach(l => {
            Li(l, ["value"]);
            const s = l.getAttribute("value");
            if (!s) return;
            const c = l.innerHTML;
            a.inputOptions[s] = c
        })), a
    },
    $w = (e, a) => {
        const i = {};
        for (const t in a) {
            const l = a[t],
                s = e.querySelector(l);
            s && (Li(s, []), i[l.replace(/^swal-/, "")] = s.innerHTML.trim())
        }
        return i
    },
    jw = e => {
        const a = Vh.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
        Array.from(e.children).forEach(i => {
            const t = i.tagName.toLowerCase();
            a.includes(t) || Ua(`Unrecognized element <${t}>`)
        })
    },
    Li = (e, a) => {
        Array.from(e.attributes).forEach(i => {
            a.indexOf(i.name) === -1 && Ua([`Unrecognized attribute "${i.name}" on <${e.tagName.toLowerCase()}>.`, `${a.length?`Allowed attributes are: ${a.join(", ")}`:"To set the value, use HTML within the element."}`])
        })
    },
    Xh = 10,
    qw = e => {
        const a = Oa(),
            i = ke();
        typeof e.willOpen == "function" && e.willOpen(i), fe.eventEmitter.emit("willOpen", i);
        const l = window.getComputedStyle(document.body).overflowY;
        aI(a, i, e), setTimeout(() => {
            Qw(a, i)
        }, Xh), g0() && (eI(a, e.scrollbarPadding, l), L2()), !il() && !fe.previousActiveElement && (fe.previousActiveElement = document.activeElement), typeof e.didOpen == "function" && setTimeout(() => e.didOpen(i)), fe.eventEmitter.emit("didOpen", i), gn(a, F["no-transition"])
    },
    Hr = e => {
        const a = ke();
        if (e.target !== a) return;
        const i = Oa();
        a.removeEventListener("animationend", Hr), a.removeEventListener("transitionend", Hr), i.style.overflowY = "auto"
    },
    Qw = (e, a) => {
        gh(a) ? (e.style.overflowY = "hidden", a.addEventListener("animationend", Hr), a.addEventListener("transitionend", Hr)) : e.style.overflowY = "auto"
    },
    eI = (e, a, i) => {
        P2(), a && i !== "hidden" && G2(i), setTimeout(() => {
            e.scrollTop = 0
        })
    },
    aI = (e, a, i) => {
        Re(e, i.showClass.backdrop), i.animation ? (a.style.setProperty("opacity", "0", "important"), oa(a, "grid"), setTimeout(() => {
            Re(a, i.showClass.popup), a.style.removeProperty("opacity")
        }, Xh)) : oa(a, "grid"), Re([document.documentElement, document.body], F.shown), i.heightAuto && i.backdrop && !i.toast && Re([document.documentElement, document.body], F["height-auto"])
    };
var Vd = {
    email: (e, a) => /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e) ? Promise.resolve() : Promise.resolve(a || "Invalid email address"),
    url: (e, a) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(a || "Invalid URL")
};
function nI(e) {
    e.inputValidator || (e.input === "email" && (e.inputValidator = Vd.email), e.input === "url" && (e.inputValidator = Vd.url))
}
function iI(e) {
    (!e.target || typeof e.target == "string" && !document.querySelector(e.target) || typeof e.target != "string" && !e.target.appendChild) && (Ua('Target parameter is not valid, defaulting to "body"'), e.target = "body")
}
function uI(e) {
    nI(e), e.showLoaderOnConfirm && !e.preConfirm && Ua(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), iI(e), typeof e.title == "string" && (e.title = e.title.split(`
`).join("<br />")), VS(e)
}
let In;
var lr = new WeakMap;
class ua {
    constructor() {
        if (wS(this, lr, void 0), typeof window > "u") return;
        In = this;
        for (var a = arguments.length, i = new Array(a), t = 0; t < a; t++) i[t] = arguments[t];
        const l = Object.freeze(this.constructor.argsToParams(i));
        this.params = l, this.isAwaitingPromise = !1, IS(lr, this, this._main(In.params))
    }
    _main(a) {
        let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (pw(Object.assign({}, i, a)), fe.currentInstance) {
            const s = fu.swalPromiseResolve.get(fe.currentInstance),
                {
                    isAwaitingPromise: c
                } = fe.currentInstance;
            fe.currentInstance._destroy(), c || s({
                isDismissed: !0
            }), g0() && Mh()
        }
        fe.currentInstance = In;
        const t = rI(a, i);
        uI(t), Object.freeze(t), fe.timeout && (fe.timeout.stop(), delete fe.timeout), clearTimeout(fe.restoreFocusTimeout);
        const l = lI(In);
        return Ah(In, t), Je.innerParams.set(In, t), tI(In, l, t)
    }
    then(a) {
        return Ld(lr, this).then(a)
    } finally(a) {
        return Ld(lr, this).finally(a)
    }
}
const tI = (e, a, i) => new Promise((t, l) => {
        const s = c => {
            e.close({
                isDismissed: !0,
                dismiss: c
            })
        };
        fu.swalPromiseResolve.set(e, t), fu.swalPromiseReject.set(e, l), a.confirmButton.onclick = () => {
            rw(e)
        }, a.denyButton.onclick = () => {
            lw(e)
        }, a.cancelButton.onclick = () => {
            sw(e, s)
        }, a.closeButton.onclick = () => {
            s(Au.close)
        }, Cw(i, a, s), v2(fe, i, s), j2(e, i), qw(i), sI(fe, i, s), oI(a, i), setTimeout(() => {
            a.container.scrollTop = 0
        })
    }),
    rI = (e, a) => {
        const i = Gw(e),
            t = Object.assign({}, cu, a, i, e);
        return t.showClass = Object.assign({}, cu.showClass, t.showClass), t.hideClass = Object.assign({}, cu.hideClass, t.hideClass), t.animation === !1 && (t.showClass = {
            backdrop: "swal2-noanimation"
        }, t.hideClass = {}), t
    },
    lI = e => {
        const a = {
            popup: ke(),
            container: Oa(),
            actions: st(),
            confirmButton: Tn(),
            denyButton: ki(),
            cancelButton: Eu(),
            loader: pu(),
            closeButton: o0(),
            validationMessage: al(),
            progressSteps: s0()
        };
        return Je.domCache.set(e, a), a
    },
    sI = (e, a, i) => {
        const t = nl();
        Sa(t), a.timer && (e.timeout = new Ow(() => {
            i("timer"), delete e.timeout
        }, a.timer), a.timerProgressBar && (oa(t), $a(t, a, "timerProgressBar"), setTimeout(() => {
            e.timeout && e.timeout.running && f0(a.timer)
        })))
    },
    oI = (e, a) => {
        if (!a.toast) {
            if (!el(a.allowEnterKey)) {
                th("allowEnterKey"), dI();
                return
            }
            cI(e) || gI(e, a) || Do(-1, 1)
        }
    },
    cI = e => {
        const a = Array.from(e.popup.querySelectorAll("[autofocus]"));
        for (const i of a)
            if (i instanceof HTMLElement && Ha(i)) return i.focus(), !0;
        return !1
    },
    gI = (e, a) => a.focusDeny && Ha(e.denyButton) ? (e.denyButton.focus(), !0) : a.focusCancel && Ha(e.cancelButton) ? (e.cancelButton.focus(), !0) : a.focusConfirm && Ha(e.confirmButton) ? (e.confirmButton.focus(), !0) : !1,
    dI = () => {
        document.activeElement instanceof HTMLElement && typeof document.activeElement.blur == "function" && document.activeElement.blur()
    };
ua.prototype.disableButtons = _h;
ua.prototype.enableButtons = Fh;
ua.prototype.getInput = Dh;
ua.prototype.disableInput = Lh;
ua.prototype.enableInput = Rh;
ua.prototype.hideLoading = zr;
ua.prototype.disableLoading = zr;
ua.prototype.showValidationMessage = Ph;
ua.prototype.resetValidationMessage = kh;
ua.prototype.close = di;
ua.prototype.closePopup = di;
ua.prototype.closeModal = di;
ua.prototype.closeToast = di;
ua.prototype.rejectPromise = Ih;
ua.prototype.update = Uh;
ua.prototype._destroy = Oh;
Object.assign(ua, Uw);
Object.keys(yw).forEach(e => {
    ua[e] = function () {
        return In && In[e] ? In[e](...arguments) : null
    }
});
ua.DismissReason = Au;
ua.version = "11.15.9";
const xo = ua;
xo.default = xo;
typeof document < "u" && function (e, a) {
    var i = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(i), i.styleSheet) i.styleSheet.disabled || (i.styleSheet.cssText = a);
    else try {
        i.innerHTML = a
    } catch {
        i.innerText = a
    }
}(document, 'body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:hsl(0,0%,33%);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid hsl(0,0%,85%);border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:hsl(0,0%,94%);color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:rgb(249.95234375,205.965625,167.74765625);color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:rgb(156.7033492823,224.2822966507,246.2966507177);color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:rgb(200.8064516129,217.9677419355,225.1935483871);color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');
var sr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qn(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function G9(e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var a = e.default;
    if (typeof a == "function") {
        var i = function t() {
            return this instanceof t ? Reflect.construct(a, arguments, this.constructor) : a.apply(this, arguments)
        };
        i.prototype = a.prototype
    } else i = {};
    return Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function (t) {
        var l = Object.getOwnPropertyDescriptor(e, t);
        Object.defineProperty(i, t, l.get ? l : {
            enumerable: !0,
            get: function () {
                return e[t]
            }
        })
    }), i
}
var Vf, Xf;
const Xd = (Xf = (Vf = globalThis.browser) == null ? void 0 : Vf.runtime) != null && Xf.id ? globalThis.browser : globalThis.chrome;
function fI() {
    return {
        t: (a, ...i) => {
            let t, l;
            i.forEach((g, f) => {
                if (g != null)
                    if (typeof g == "number") l = g;
                    else if (Array.isArray(g)) t = g;
                else throw Error(`Unknown argument at index ${f}. Must be a number for pluralization, substitution array, or options object.`)
            }), l != null && t == null && (t = [String(l)]);
            let s;
            if (t != null && t.length) {
                const g = t == null ? void 0 : t.map(f => String(f));
                s = globalThis.__DUBBING_I18N_GET_MESSAGE__(a.replaceAll(".", "_"), g)
            } else s = globalThis.__DUBBING_I18N_GET_MESSAGE__(a.replaceAll(".", "_"));
            if (s || console.warn(`[i18n] Message not found: "${a}"`), l == null) return s;
            const c = s.split(" | ");
            switch (c.length) {
            case 1:
                return c[0];
            case 2:
                return c[l === 1 ? 0 : 1];
            case 3:
                return c[l === 0 || l === 1 ? l : 2];
            default:
                throw Error("Unknown plural formatting")
            }
        }
    }
}
const Z9 = fI();
var Wd = Object.prototype.hasOwnProperty;
function Fo(e, a) {
    var i, t;
    if (e === a) return !0;
    if (e && a && (i = e.constructor) === a.constructor) {
        if (i === Date) return e.getTime() === a.getTime();
        if (i === RegExp) return e.toString() === a.toString();
        if (i === Array) {
            if ((t = e.length) === a.length)
                for (; t-- && Fo(e[t], a[t]););
            return t === -1
        }
        if (!i || typeof e == "object") {
            t = 0;
            for (i in e)
                if (Wd.call(e, i) && ++t && !Wd.call(a, i) || !(i in a) || !Fo(e[i], a[i])) return !1;
            return Object.keys(a).length === t
        }
    }
    return e !== e && a !== a
}
const mI = new Error("request for lock canceled");
var hI = function (e, a, i, t) {
    function l(s) {
        return s instanceof i ? s : new i(function (c) {
            c(s)
        })
    }
    return new(i || (i = Promise))(function (s, c) {
        function g(h) {
            try {
                A(t.next(h))
            } catch (p) {
                c(p)
            }
        }
        function f(h) {
            try {
                A(t.throw(h))
            } catch (p) {
                c(p)
            }
        }
        function A(h) {
            h.done ? s(h.value) : l(h.value).then(g, f)
        }
        A((t = t.apply(e, a || [])).next())
    })
};
class EI {
    constructor(a, i = mI) {
        this._value = a, this._cancelError = i, this._queue = [], this._weightedWaiters = []
    }
    acquire(a = 1, i = 0) {
        if (a <= 0) throw new Error(`invalid weight ${a}: must be positive`);
        return new Promise((t, l) => {
            const s = {
                    resolve: t,
                    reject: l,
                    weight: a,
                    priority: i
                },
                c = Wh(this._queue, g => i <= g.priority);
            c === -1 && a <= this._value ? this._dispatchItem(s) : this._queue.splice(c + 1, 0, s)
        })
    }
    runExclusive(a) {
        return hI(this, arguments, void 0, function* (i, t = 1, l = 0) {
            const [s, c] = yield this.acquire(t, l);
            try {
                return yield i(s)
            } finally {
                c()
            }
        })
    }
    waitForUnlock(a = 1, i = 0) {
        if (a <= 0) throw new Error(`invalid weight ${a}: must be positive`);
        return this._couldLockImmediately(a, i) ? Promise.resolve() : new Promise(t => {
            this._weightedWaiters[a - 1] || (this._weightedWaiters[a - 1] = []), pI(this._weightedWaiters[a - 1], {
                resolve: t,
                priority: i
            })
        })
    }
    isLocked() {
        return this._value <= 0
    }
    getValue() {
        return this._value
    }
    setValue(a) {
        this._value = a, this._dispatchQueue()
    }
    release(a = 1) {
        if (a <= 0) throw new Error(`invalid weight ${a}: must be positive`);
        this._value += a, this._dispatchQueue()
    }
    cancel() {
        this._queue.forEach(a => a.reject(this._cancelError)), this._queue = []
    }
    _dispatchQueue() {
        for (this._drainUnlockWaiters(); this._queue.length > 0 && this._queue[0].weight <= this._value;) this._dispatchItem(this._queue.shift()), this._drainUnlockWaiters()
    }
    _dispatchItem(a) {
        const i = this._value;
        this._value -= a.weight, a.resolve([i, this._newReleaser(a.weight)])
    }
    _newReleaser(a) {
        let i = !1;
        return () => {
            i || (i = !0, this.release(a))
        }
    }
    _drainUnlockWaiters() {
        if (this._queue.length === 0)
            for (let a = this._value; a > 0; a--) {
                const i = this._weightedWaiters[a - 1];
                i && (i.forEach(t => t.resolve()), this._weightedWaiters[a - 1] = [])
            } else {
                const a = this._queue[0].priority;
                for (let i = this._value; i > 0; i--) {
                    const t = this._weightedWaiters[i - 1];
                    if (!t) continue;
                    const l = t.findIndex(s => s.priority <= a);
                    (l === -1 ? t : t.splice(0, l)).forEach(s => s.resolve())
                }
            }
    }
    _couldLockImmediately(a, i) {
        return (this._queue.length === 0 || this._queue[0].priority < i) && a <= this._value
    }
}
function pI(e, a) {
    const i = Wh(e, t => a.priority <= t.priority);
    e.splice(i + 1, 0, a)
}
function Wh(e, a) {
    for (let i = e.length - 1; i >= 0; i--)
        if (a(e[i])) return i;
    return -1
}
var AI = function (e, a, i, t) {
    function l(s) {
        return s instanceof i ? s : new i(function (c) {
            c(s)
        })
    }
    return new(i || (i = Promise))(function (s, c) {
        function g(h) {
            try {
                A(t.next(h))
            } catch (p) {
                c(p)
            }
        }
        function f(h) {
            try {
                A(t.throw(h))
            } catch (p) {
                c(p)
            }
        }
        function A(h) {
            h.done ? s(h.value) : l(h.value).then(g, f)
        }
        A((t = t.apply(e, a || [])).next())
    })
};
class NI {
    constructor(a) {
        this._semaphore = new EI(1, a)
    }
    acquire() {
        return AI(this, arguments, void 0, function* (a = 0) {
            const [, i] = yield this._semaphore.acquire(1, a);
            return i
        })
    }
    runExclusive(a, i = 0) {
        return this._semaphore.runExclusive(() => a(), 1, i)
    }
    isLocked() {
        return this._semaphore.isLocked()
    }
    waitForUnlock(a = 0) {
        return this._semaphore.waitForUnlock(1, a)
    }
    release() {
        this._semaphore.isLocked() && this._semaphore.release()
    }
    cancel() {
        return this._semaphore.cancel()
    }
}
var Wf, Jf;
const Nr = ((Jf = (Wf = globalThis.browser) == null ? void 0 : Wf.runtime) == null ? void 0 : Jf.id) == null ? globalThis.chrome : globalThis.browser,
    yI = CI();
function CI() {
    const e = {
            local: or("local"),
            session: or("session"),
            sync: or("sync"),
            managed: or("managed")
        },
        a = w => {
            const v = e[w];
            if (v == null) {
                const B = Object.keys(e).join(", ");
                throw Error(`Invalid area "${w}". Options: ${B}`)
            }
            return v
        },
        i = w => {
            const v = w.indexOf(":"),
                B = w.substring(0, v),
                R = w.substring(v + 1);
            if (R == null) throw Error(`Storage key should be in the form of "area:key", but received "${w}"`);
            return {
                driverArea: B,
                driverKey: R,
                driver: a(B)
            }
        },
        t = w => w + "$",
        l = (w, v) => {
            const B = { ...w
            };
            return Object.entries(v).forEach(([R, V]) => {
                V == null ? delete B[R] : B[R] = V
            }), B
        },
        s = (w, v) => w ?? v ?? null,
        c = w => typeof w == "object" && !Array.isArray(w) ? w : {},
        g = async (w, v, B) => {
            const R = await w.getItem(v);
            return s(R, (B == null ? void 0 : B.fallback) ?? (B == null ? void 0 : B.defaultValue))
        }, f = async (w, v) => {
            const B = t(v),
                R = await w.getItem(B);
            return c(R)
        }, A = async (w, v, B) => {
            await w.setItem(v, B ?? null)
        }, h = async (w, v, B) => {
            const R = t(v),
                V = c(await w.getItem(R));
            await w.setItem(R, l(V, B))
        }, p = async (w, v, B) => {
            if (await w.removeItem(v), B != null && B.removeMeta) {
                const R = t(v);
                await w.removeItem(R)
            }
        }, C = async (w, v, B) => {
            const R = t(v);
            if (B == null) await w.removeItem(R);
            else {
                const V = c(await w.getItem(R));
                [B].flat().forEach(U => delete V[U]), await w.setItem(R, V)
            }
        }, x = (w, v, B) => w.watch(v, B);
    return {
        getItem: async (w, v) => {
            const {
                driver: B,
                driverKey: R
            } = i(w);
            return await g(B, R, v)
        }, getItems: async w => {
            const v = new Map,
                B = new Map,
                R = [];
            w.forEach(U => {
                let O, z;
                typeof U == "string" ? O = U : "getValue" in U ? (O = U.key, z = {
                    fallback: U.fallback
                }) : (O = U.key, z = U.options), R.push(O);
                const {
                    driverArea: Q,
                    driverKey: L
                } = i(O), k = v.get(Q) ?? [];
                v.set(Q, k.concat(L)), B.set(O, z)
            });
            const V = new Map;
            return await Promise.all(Array.from(v.entries()).map(async ([U, O]) => {
                (await e[U].getItems(O)).forEach(Q => {
                    const L = `${U}:${Q.key}`,
                        k = B.get(L),
                        $ = s(Q.value, (k == null ? void 0 : k.fallback) ?? (k == null ? void 0 : k.defaultValue));
                    V.set(L, $)
                })
            })), R.map(U => ({
                key: U,
                value: V.get(U)
            }))
        }, getMeta: async w => {
            const {
                driver: v,
                driverKey: B
            } = i(w);
            return await f(v, B)
        }, getMetas: async w => {
            const v = w.map(V => {
                    const U = typeof V == "string" ? V : V.key,
                        {
                            driverArea: O,
                            driverKey: z
                        } = i(U);
                    return {
                        key: U,
                        driverArea: O,
                        driverKey: z,
                        driverMetaKey: t(z)
                    }
                }),
                B = v.reduce((V, U) => {
                    var O;
                    return V[O = U.driverArea] ?? (V[O] = []), V[U.driverArea].push(U), V
                }, {}),
                R = {};
            return await Promise.all(Object.entries(B).map(async ([V, U]) => {
                const O = await Nr.storage[V].get(U.map(z => z.driverMetaKey));
                U.forEach(z => {
                    R[z.key] = O[z.driverMetaKey] ?? {}
                })
            })), v.map(V => ({
                key: V.key,
                meta: R[V.key]
            }))
        }, setItem: async (w, v) => {
            const {
                driver: B,
                driverKey: R
            } = i(w);
            await A(B, R, v)
        }, setItems: async w => {
            const v = {};
            w.forEach(B => {
                const {
                    driverArea: R,
                    driverKey: V
                } = i("key" in B ? B.key : B.item.key);
                v[R] ?? (v[R] = []), v[R].push({
                    key: V,
                    value: B.value
                })
            }), await Promise.all(Object.entries(v).map(async ([B, R]) => {
                await a(B).setItems(R)
            }))
        }, setMeta: async (w, v) => {
            const {
                driver: B,
                driverKey: R
            } = i(w);
            await h(B, R, v)
        }, setMetas: async w => {
            const v = {};
            w.forEach(B => {
                const {
                    driverArea: R,
                    driverKey: V
                } = i("key" in B ? B.key : B.item.key);
                v[R] ?? (v[R] = []), v[R].push({
                    key: V,
                    properties: B.meta
                })
            }), await Promise.all(Object.entries(v).map(async ([B, R]) => {
                const V = a(B),
                    U = R.map(({
                        key: L
                    }) => t(L));
                console.log(B, U);
                const O = await V.getItems(U), z = Object.fromEntries(O.map(({
                    key: L,
                    value: k
                }) => [L, c(k)])), Q = R.map(({
                    key: L,
                    properties: k
                }) => {
                    const $ = t(L);
                    return {
                        key: $,
                        value: l(z[$] ?? {}, k)
                    }
                });
                await V.setItems(Q)
            }))
        }, removeItem: async (w, v) => {
            const {
                driver: B,
                driverKey: R
            } = i(w);
            await p(B, R, v)
        }, removeItems: async w => {
            const v = {};
            w.forEach(B => {
                let R, V;
                typeof B == "string" ? R = B : "getValue" in B ? R = B.key : "item" in B ? (R = B.item.key, V = B.options) : (R = B.key, V = B.options);
                const {
                    driverArea: U,
                    driverKey: O
                } = i(R);
                v[U] ?? (v[U] = []), v[U].push(O), V != null && V.removeMeta && v[U].push(t(O))
            }), await Promise.all(Object.entries(v).map(async ([B, R]) => {
                await a(B).removeItems(R)
            }))
        }, clear: async w => {
            await a(w).clear()
        }, removeMeta: async (w, v) => {
            const {
                driver: B,
                driverKey: R
            } = i(w);
            await C(B, R, v)
        }, snapshot: async (w, v) => {
            var V;
            const R = await a(w).snapshot();
            return (V = v == null ? void 0 : v.excludeKeys) == null || V.forEach(U => {
                delete R[U], delete R[t(U)]
            }), R
        }, restoreSnapshot: async (w, v) => {
            await a(w).restoreSnapshot(v)
        }, watch: (w, v) => {
            const {
                driver: B,
                driverKey: R
            } = i(w);
            return x(B, R, v)
        }, unwatch() {
            Object.values(e).forEach(w => {
                w.unwatch()
            })
        }, defineItem: (w, v) => {
            const {
                driver: B,
                driverKey: R
            } = i(w), {
                version: V = 1,
                migrations: U = {}
            } = v ?? {};
            if (V < 1) throw Error("Storage item version cannot be less than 1. Initial versions should be set to 1, not 0.");
            const O = async () => {
                var D;
                const $ = t(R),
                    [{
                        value: le
                    }, {
                        value: ge
                    }] = await B.getItems([R, $]);
                if (le == null) return;
                const te = (ge == null ? void 0 : ge.v) ?? 1;
                if (te > V) throw Error(`Version downgrade detected (v${te} -> v${V}) for "${w}"`);
                if (te === V) return;
                console.debug(`[@wxt-dev/storage] Running storage migration for ${w}: v${te} -> v${V}`);
                const ye = Array.from({
                    length: V - te
                }, (X, ee) => te + ee + 1);
                let re = le;
                for (const X of ye) try {
                    re = await ((D = U == null ? void 0 : U[X]) == null ? void 0 : D.call(U, re)) ?? re
                } catch (ee) {
                    throw new MI(w, X, {
                        cause: ee
                    })
                }
                await B.setItems([{
                    key: R,
                    value: re
                }, {
                    key: $,
                    value: { ...ge,
                        v: V
                    }
                }]), console.debug(`[@wxt-dev/storage] Storage migration completed for ${w} v${V}`, {
                    migratedValue: re
                })
            }, z = (v == null ? void 0 : v.migrations) == null ? Promise.resolve() : O().catch($ => {
                console.error(`[@wxt-dev/storage] Migration failed for ${w}`, $)
            }), Q = new NI, L = () => (v == null ? void 0 : v.fallback) ?? (v == null ? void 0 : v.defaultValue) ?? null, k = () => Q.runExclusive(async () => {
                const $ = await B.getItem(R);
                if ($ != null || (v == null ? void 0 : v.init) == null) return $;
                const le = await v.init();
                return await B.setItem(R, le), le
            });
            return z.then(k), {
                key: w,
                get defaultValue() {
                    return L()
                },
                get fallback() {
                    return L()
                },
                getValue: async () => (await z, v != null && v.init ? await k(): await g(B, R, v)), getMeta: async () => (await z, await f(B, R)), setValue: async $ => (await z, await A(B, R, $)), setMeta: async $ => (await z, await h(B, R, $)), removeValue: async $ => (await z, await p(B, R, $)), removeMeta: async $ => (await z, await C(B, R, $)), watch: $ => x(B, R, (le, ge) => $(le ?? L(), ge ?? L())), migrate: O
            }
        }
    }
}
function or(e) {
    const a = () => {
            if (Nr.runtime == null) throw Error(["'wxt/storage' must be loaded in a web extension environment", `
 - If thrown during a build, see https://github.com/wxt-dev/wxt/issues/371`, ` - If thrown during tests, mock 'wxt/browser' correctly. See https://wxt.dev/guide/go-further/testing.html
`].join(`
`));
            if (Nr.storage == null) throw Error("You must add the 'storage' permission to your manifest to use 'wxt/storage'");
            const t = Nr.storage[e];
            if (t == null) throw Error(`"browser.storage.${e}" is undefined`);
            return t
        },
        i = new Set;
    return {
        getItem: async t => (await a().get(t))[t], getItems: async t => {
            const l = await a().get(t);
            return t.map(s => ({
                key: s,
                value: l[s] ?? null
            }))
        }, setItem: async (t, l) => {
            l == null ? await a().remove(t): await a().set({
                [t]: l
            })
        }, setItems: async t => {
            const l = t.reduce((s, {
                key: c,
                value: g
            }) => (s[c] = g, s), {});
            await a().set(l)
        }, removeItem: async t => {
            await a().remove(t)
        }, removeItems: async t => {
            await a().remove(t)
        }, clear: async () => {
            await a().clear()
        }, snapshot: async () => await a().get(), restoreSnapshot: async t => {
            await a().set(t)
        }, watch(t, l) {
            const s = c => {
                const g = c[t];
                g != null && (Fo(g.newValue, g.oldValue) || l(g.newValue ?? null, g.oldValue ?? null))
            };
            return a().onChanged.addListener(s), i.add(s), () => {
                a().onChanged.removeListener(s), i.delete(s)
            }
        }, unwatch() {
            i.forEach(t => {
                a().onChanged.removeListener(t)
            }), i.clear()
        }
    }
}
class MI extends Error {
    constructor(a, i, t) {
        super(`v${i} migration failed for "${a}"`, t), this.key = a, this.version = i
    }
}
var cr = {
        exports: {}
    },
    Ds, Jd;
function Jh() {
    return Jd || (Jd = 1, Ds = function (a, i) {
        return function () {
            for (var l = new Array(arguments.length), s = 0; s < l.length; s++) l[s] = arguments[s];
            return a.apply(i, l)
        }
    }), Ds
}
var Ts, $d;
function ca() {
    if ($d) return Ts;
    $d = 1;
    var e = Jh(),
        a = Object.prototype.toString,
        i = function (D) {
            return function (X) {
                var ee = a.call(X);
                return D[ee] || (D[ee] = ee.slice(8, -1).toLowerCase())
            }
        }(Object.create(null));
    function t(D) {
        return D = D.toLowerCase(),
            function (ee) {
                return i(ee) === D
            }
    }
    function l(D) {
        return Array.isArray(D)
    }
    function s(D) {
        return typeof D > "u"
    }
    function c(D) {
        return D !== null && !s(D) && D.constructor !== null && !s(D.constructor) && typeof D.constructor.isBuffer == "function" && D.constructor.isBuffer(D)
    }
    var g = t("ArrayBuffer");
    function f(D) {
        var X;
        return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? X = ArrayBuffer.isView(D) : X = D && D.buffer && g(D.buffer), X
    }
    function A(D) {
        return typeof D == "string"
    }
    function h(D) {
        return typeof D == "number"
    }
    function p(D) {
        return D !== null && typeof D == "object"
    }
    function C(D) {
        if (i(D) !== "object") return !1;
        var X = Object.getPrototypeOf(D);
        return X === null || X === Object.prototype
    }
    var x = t("Date"),
        Y = t("File"),
        w = t("Blob"),
        v = t("FileList");
    function B(D) {
        return a.call(D) === "[object Function]"
    }
    function R(D) {
        return p(D) && B(D.pipe)
    }
    function V(D) {
        var X = "[object FormData]";
        return D && (typeof FormData == "function" && D instanceof FormData || a.call(D) === X || B(D.toString) && D.toString() === X)
    }
    var U = t("URLSearchParams");
    function O(D) {
        return D.trim ? D.trim() : D.replace(/^\s+|\s+$/g, "")
    }
    function z() {
        return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u"
    }
    function Q(D, X) {
        if (!(D === null || typeof D > "u"))
            if (typeof D != "object" && (D = [D]), l(D))
                for (var ee = 0, xe = D.length; ee < xe; ee++) X.call(null, D[ee], ee, D);
            else
                for (var Ne in D) Object.prototype.hasOwnProperty.call(D, Ne) && X.call(null, D[Ne], Ne, D)
    }
    function L() {
        var D = {};
        function X(Ne, Oe) {
            C(D[Oe]) && C(Ne) ? D[Oe] = L(D[Oe], Ne) : C(Ne) ? D[Oe] = L({}, Ne) : l(Ne) ? D[Oe] = Ne.slice() : D[Oe] = Ne
        }
        for (var ee = 0, xe = arguments.length; ee < xe; ee++) Q(arguments[ee], X);
        return D
    }
    function k(D, X, ee) {
        return Q(X, function (Ne, Oe) {
            ee && typeof Ne == "function" ? D[Oe] = e(Ne, ee) : D[Oe] = Ne
        }), D
    }
    function $(D) {
        return D.charCodeAt(0) === 65279 && (D = D.slice(1)), D
    }
    function le(D, X, ee, xe) {
        D.prototype = Object.create(X.prototype, xe), D.prototype.constructor = D, ee && Object.assign(D.prototype, ee)
    }
    function ge(D, X, ee) {
        var xe, Ne, Oe, wa = {};
        X = X || {};
        do {
            for (xe = Object.getOwnPropertyNames(D), Ne = xe.length; Ne-- > 0;) Oe = xe[Ne], wa[Oe] || (X[Oe] = D[Oe], wa[Oe] = !0);
            D = Object.getPrototypeOf(D)
        } while (D && (!ee || ee(D, X)) && D !== Object.prototype);
        return X
    }
    function te(D, X, ee) {
        D = String(D), (ee === void 0 || ee > D.length) && (ee = D.length), ee -= X.length;
        var xe = D.indexOf(X, ee);
        return xe !== -1 && xe === ee
    }
    function ye(D) {
        if (!D) return null;
        var X = D.length;
        if (s(X)) return null;
        for (var ee = new Array(X); X-- > 0;) ee[X] = D[X];
        return ee
    }
    var re = function (D) {
        return function (X) {
            return D && X instanceof D
        }
    }(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array));
    return Ts = {
        isArray: l,
        isArrayBuffer: g,
        isBuffer: c,
        isFormData: V,
        isArrayBufferView: f,
        isString: A,
        isNumber: h,
        isObject: p,
        isPlainObject: C,
        isUndefined: s,
        isDate: x,
        isFile: Y,
        isBlob: w,
        isFunction: B,
        isStream: R,
        isURLSearchParams: U,
        isStandardBrowserEnv: z,
        forEach: Q,
        merge: L,
        extend: k,
        trim: O,
        stripBOM: $,
        inherits: le,
        toFlatObject: ge,
        kindOf: i,
        kindOfTest: t,
        endsWith: te,
        toArray: ye,
        isTypedArray: re,
        isFileList: v
    }, Ts
}
var xs, jd;
function N0() {
    if (jd) return xs;
    jd = 1;
    var e = ca();
    function a(i) {
        return encodeURIComponent(i).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    return xs = function (t, l, s) {
        if (!l) return t;
        var c;
        if (s) c = s(l);
        else if (e.isURLSearchParams(l)) c = l.toString();
        else {
            var g = [];
            e.forEach(l, function (h, p) {
                h === null || typeof h > "u" || (e.isArray(h) ? p = p + "[]" : h = [h], e.forEach(h, function (x) {
                    e.isDate(x) ? x = x.toISOString() : e.isObject(x) && (x = JSON.stringify(x)), g.push(a(p) + "=" + a(x))
                }))
            }), c = g.join("&")
        }
        if (c) {
            var f = t.indexOf("#");
            f !== -1 && (t = t.slice(0, f)), t += (t.indexOf("?") === -1 ? "?" : "&") + c
        }
        return t
    }, xs
}
var Fs, qd;
function SI() {
    if (qd) return Fs;
    qd = 1;
    var e = ca();
    function a() {
        this.handlers = []
    }
    return a.prototype.use = function (t, l, s) {
        return this.handlers.push({
            fulfilled: t,
            rejected: l,
            synchronous: s ? s.synchronous : !1,
            runWhen: s ? s.runWhen : null
        }), this.handlers.length - 1
    }, a.prototype.eject = function (t) {
        this.handlers[t] && (this.handlers[t] = null)
    }, a.prototype.forEach = function (t) {
        e.forEach(this.handlers, function (s) {
            s !== null && t(s)
        })
    }, Fs = a, Fs
}
var _s, Qd;
function wI() {
    if (Qd) return _s;
    Qd = 1;
    var e = ca();
    return _s = function (i, t) {
        e.forEach(i, function (s, c) {
            c !== t && c.toUpperCase() === t.toUpperCase() && (i[t] = s, delete i[c])
        })
    }, _s
}
var Rs, ef;
function Nu() {
    if (ef) return Rs;
    ef = 1;
    var e = ca();
    function a(l, s, c, g, f) {
        Error.call(this), this.message = l, this.name = "AxiosError", s && (this.code = s), c && (this.config = c), g && (this.request = g), f && (this.response = f)
    }
    e.inherits(a, Error, {
        toJSON: function () {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code,
                status: this.response && this.response.status ? this.response.status : null
            }
        }
    });
    var i = a.prototype,
        t = {};
    return ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED"].forEach(function (l) {
        t[l] = {
            value: l
        }
    }), Object.defineProperties(a, t), Object.defineProperty(i, "isAxiosError", {
        value: !0
    }), a.from = function (l, s, c, g, f, A) {
        var h = Object.create(i);
        return e.toFlatObject(l, h, function (C) {
            return C !== Error.prototype
        }), a.call(h, l.message, s, c, g, f), h.name = l.name, A && Object.assign(h, A), h
    }, Rs = a, Rs
}
var Ls, af;
function $h() {
    return af || (af = 1, Ls = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    }), Ls
}
var Ps, nf;
function jh() {
    if (nf) return Ps;
    nf = 1;
    var e = ca();
    function a(i, t) {
        t = t || new FormData;
        var l = [];
        function s(g) {
            return g === null ? "" : e.isDate(g) ? g.toISOString() : e.isArrayBuffer(g) || e.isTypedArray(g) ? typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g
        }
        function c(g, f) {
            if (e.isPlainObject(g) || e.isArray(g)) {
                if (l.indexOf(g) !== -1) throw Error("Circular reference detected in " + f);
                l.push(g), e.forEach(g, function (h, p) {
                    if (!e.isUndefined(h)) {
                        var C = f ? f + "." + p : p,
                            x;
                        if (h && !f && typeof h == "object") {
                            if (e.endsWith(p, "{}")) h = JSON.stringify(h);
                            else if (e.endsWith(p, "[]") && (x = e.toArray(h))) {
                                x.forEach(function (Y) {
                                    !e.isUndefined(Y) && t.append(C, s(Y))
                                });
                                return
                            }
                        }
                        c(h, C)
                    }
                }), l.pop()
            } else t.append(f, s(g))
        }
        return c(i), t
    }
    return Ps = a, Ps
}
var ks, uf;
function qh() {
    if (uf) return ks;
    uf = 1;
    var e = Nu();
    return ks = function (i, t, l) {
        var s = l.config.validateStatus;
        !l.status || !s || s(l.status) ? i(l) : t(new e("Request failed with status code " + l.status, [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(l.status / 100) - 4], l.config, l.request, l))
    }, ks
}
var zs, tf;
function II() {
    if (tf) return zs;
    tf = 1;
    var e = ca();
    return zs = e.isStandardBrowserEnv() ? function () {
        return {
            write: function (t, l, s, c, g, f) {
                var A = [];
                A.push(t + "=" + encodeURIComponent(l)), e.isNumber(s) && A.push("expires=" + new Date(s).toGMTString()), e.isString(c) && A.push("path=" + c), e.isString(g) && A.push("domain=" + g), f === !0 && A.push("secure"), document.cookie = A.join("; ")
            },
            read: function (t) {
                var l = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                return l ? decodeURIComponent(l[3]) : null
            },
            remove: function (t) {
                this.write(t, "", Date.now() - 864e5)
            }
        }
    }() : function () {
        return {
            write: function () {},
            read: function () {
                return null
            },
            remove: function () {}
        }
    }(), zs
}
var Ks, rf;
function bI() {
    return rf || (rf = 1, Ks = function (a) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)
    }), Ks
}
var Hs, lf;
function BI() {
    return lf || (lf = 1, Hs = function (a, i) {
        return i ? a.replace(/\/+$/, "") + "/" + i.replace(/^\/+/, "") : a
    }), Hs
}
var Us, sf;
function y0() {
    if (sf) return Us;
    sf = 1;
    var e = bI(),
        a = BI();
    return Us = function (t, l) {
        return t && !e(l) ? a(t, l) : l
    }, Us
}
var Os, of ;
function vI() {
    if ( of ) return Os; of = 1;
    var e = ca(),
        a = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    return Os = function (t) {
        var l = {},
            s, c, g;
        return t && e.forEach(t.split(`
`), function (A) {
            if (g = A.indexOf(":"), s = e.trim(A.substr(0, g)).toLowerCase(), c = e.trim(A.substr(g + 1)), s) {
                if (l[s] && a.indexOf(s) >= 0) return;
                s === "set-cookie" ? l[s] = (l[s] ? l[s] : []).concat([c]) : l[s] = l[s] ? l[s] + ", " + c : c
            }
        }), l
    }, Os
}
var Gs, cf;
function DI() {
    if (cf) return Gs;
    cf = 1;
    var e = ca();
    return Gs = e.isStandardBrowserEnv() ? function () {
        var i = /(msie|trident)/i.test(navigator.userAgent),
            t = document.createElement("a"),
            l;
        function s(c) {
            var g = c;
            return i && (t.setAttribute("href", g), g = t.href), t.setAttribute("href", g), {
                href: t.href,
                protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                host: t.host,
                search: t.search ? t.search.replace(/^\?/, "") : "",
                hash: t.hash ? t.hash.replace(/^#/, "") : "",
                hostname: t.hostname,
                port: t.port,
                pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
            }
        }
        return l = s(window.location.href),
            function (g) {
                var f = e.isString(g) ? s(g) : g;
                return f.protocol === l.protocol && f.host === l.host
            }
    }() : function () {
        return function () {
            return !0
        }
    }(), Gs
}
var Zs, gf;
function tl() {
    if (gf) return Zs;
    gf = 1;
    var e = Nu(),
        a = ca();
    function i(t) {
        e.call(this, t ?? "canceled", e.ERR_CANCELED), this.name = "CanceledError"
    }
    return a.inherits(i, e, {
        __CANCEL__: !0
    }), Zs = i, Zs
}
var Ys, df;
function TI() {
    return df || (df = 1, Ys = function (a) {
        var i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(a);
        return i && i[1] || ""
    }), Ys
}
var Vs, ff;
function mf() {
    if (ff) return Vs;
    ff = 1;
    var e = ca(),
        a = qh(),
        i = II(),
        t = N0(),
        l = y0(),
        s = vI(),
        c = DI(),
        g = $h(),
        f = Nu(),
        A = tl(),
        h = TI();
    return Vs = function (C) {
        return new Promise(function (Y, w) {
            var v = C.data,
                B = C.headers,
                R = C.responseType,
                V;
            function U() {
                C.cancelToken && C.cancelToken.unsubscribe(V), C.signal && C.signal.removeEventListener("abort", V)
            }
            e.isFormData(v) && e.isStandardBrowserEnv() && delete B["Content-Type"];
            var O = new XMLHttpRequest;
            if (C.auth) {
                var z = C.auth.username || "",
                    Q = C.auth.password ? unescape(encodeURIComponent(C.auth.password)) : "";
                B.Authorization = "Basic " + btoa(z + ":" + Q)
            }
            var L = l(C.baseURL, C.url);
            O.open(C.method.toUpperCase(), t(L, C.params, C.paramsSerializer), !0), O.timeout = C.timeout;
            function k() {
                if (O) {
                    var ge = "getAllResponseHeaders" in O ? s(O.getAllResponseHeaders()) : null,
                        te = !R || R === "text" || R === "json" ? O.responseText : O.response,
                        ye = {
                            data: te,
                            status: O.status,
                            statusText: O.statusText,
                            headers: ge,
                            config: C,
                            request: O
                        };
                    a(function (D) {
                        Y(D), U()
                    }, function (D) {
                        w(D), U()
                    }, ye), O = null
                }
            }
            if ("onloadend" in O ? O.onloadend = k : O.onreadystatechange = function () {
                    !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(k)
                }, O.onabort = function () {
                    O && (w(new f("Request aborted", f.ECONNABORTED, C, O)), O = null)
                }, O.onerror = function () {
                    w(new f("Network Error", f.ERR_NETWORK, C, O, O)), O = null
                }, O.ontimeout = function () {
                    var te = C.timeout ? "timeout of " + C.timeout + "ms exceeded" : "timeout exceeded",
                        ye = C.transitional || g;
                    C.timeoutErrorMessage && (te = C.timeoutErrorMessage), w(new f(te, ye.clarifyTimeoutError ? f.ETIMEDOUT : f.ECONNABORTED, C, O)), O = null
                }, e.isStandardBrowserEnv()) {
                var $ = (C.withCredentials || c(L)) && C.xsrfCookieName ? i.read(C.xsrfCookieName) : void 0;
                $ && (B[C.xsrfHeaderName] = $)
            }
            "setRequestHeader" in O && e.forEach(B, function (te, ye) {
                typeof v > "u" && ye.toLowerCase() === "content-type" ? delete B[ye] : O.setRequestHeader(ye, te)
            }), e.isUndefined(C.withCredentials) || (O.withCredentials = !!C.withCredentials), R && R !== "json" && (O.responseType = C.responseType), typeof C.onDownloadProgress == "function" && O.addEventListener("progress", C.onDownloadProgress), typeof C.onUploadProgress == "function" && O.upload && O.upload.addEventListener("progress", C.onUploadProgress), (C.cancelToken || C.signal) && (V = function (ge) {
                O && (w(!ge || ge && ge.type ? new A : ge), O.abort(), O = null)
            }, C.cancelToken && C.cancelToken.subscribe(V), C.signal && (C.signal.aborted ? V() : C.signal.addEventListener("abort", V))), v || (v = null);
            var le = h(L);
            if (le && ["http", "https", "file"].indexOf(le) === -1) {
                w(new f("Unsupported protocol " + le + ":", f.ERR_BAD_REQUEST, C));
                return
            }
            O.send(v)
        })
    }, Vs
}
var Xs, hf;
function xI() {
    return hf || (hf = 1, Xs = null), Xs
}
var Ws, Ef;
function C0() {
    if (Ef) return Ws;
    Ef = 1;
    var e = ca(),
        a = wI(),
        i = Nu(),
        t = $h(),
        l = jh(),
        s = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
    function c(h, p) {
        !e.isUndefined(h) && e.isUndefined(h["Content-Type"]) && (h["Content-Type"] = p)
    }
    function g() {
        var h;
        return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (h = mf()), h
    }
    function f(h, p, C) {
        if (e.isString(h)) try {
            return (p || JSON.parse)(h), e.trim(h)
        } catch (x) {
            if (x.name !== "SyntaxError") throw x
        }
        return (C || JSON.stringify)(h)
    }
    var A = {
        transitional: t,
        adapter: g(),
        transformRequest: [function (p, C) {
            if (a(C, "Accept"), a(C, "Content-Type"), e.isFormData(p) || e.isArrayBuffer(p) || e.isBuffer(p) || e.isStream(p) || e.isFile(p) || e.isBlob(p)) return p;
            if (e.isArrayBufferView(p)) return p.buffer;
            if (e.isURLSearchParams(p)) return c(C, "application/x-www-form-urlencoded;charset=utf-8"), p.toString();
            var x = e.isObject(p),
                Y = C && C["Content-Type"],
                w;
            if ((w = e.isFileList(p)) || x && Y === "multipart/form-data") {
                var v = this.env && this.env.FormData;
                return l(w ? {
                    "files[]": p
                } : p, v && new v)
            } else if (x || Y === "application/json") return c(C, "application/json"), f(p);
            return p
        }],
        transformResponse: [function (p) {
            var C = this.transitional || A.transitional,
                x = C && C.silentJSONParsing,
                Y = C && C.forcedJSONParsing,
                w = !x && this.responseType === "json";
            if (w || Y && e.isString(p) && p.length) try {
                return JSON.parse(p)
            } catch (v) {
                if (w) throw v.name === "SyntaxError" ? i.from(v, i.ERR_BAD_RESPONSE, this, null, this.response) : v
            }
            return p
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
            FormData: xI()
        },
        validateStatus: function (p) {
            return p >= 200 && p < 300
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }
    };
    return e.forEach(["delete", "get", "head"], function (p) {
        A.headers[p] = {}
    }), e.forEach(["post", "put", "patch"], function (p) {
        A.headers[p] = e.merge(s)
    }), Ws = A, Ws
}
var Js, pf;
function FI() {
    if (pf) return Js;
    pf = 1;
    var e = ca(),
        a = C0();
    return Js = function (t, l, s) {
        var c = this || a;
        return e.forEach(s, function (f) {
            t = f.call(c, t, l)
        }), t
    }, Js
}
var $s, Af;
function Qh() {
    return Af || (Af = 1, $s = function (a) {
        return !!(a && a.__CANCEL__)
    }), $s
}
var js, Nf;
function _I() {
    if (Nf) return js;
    Nf = 1;
    var e = ca(),
        a = FI(),
        i = Qh(),
        t = C0(),
        l = tl();
    function s(c) {
        if (c.cancelToken && c.cancelToken.throwIfRequested(), c.signal && c.signal.aborted) throw new l
    }
    return js = function (g) {
        s(g), g.headers = g.headers || {}, g.data = a.call(g, g.data, g.headers, g.transformRequest), g.headers = e.merge(g.headers.common || {}, g.headers[g.method] || {}, g.headers), e.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (h) {
            delete g.headers[h]
        });
        var f = g.adapter || t.adapter;
        return f(g).then(function (h) {
            return s(g), h.data = a.call(g, h.data, h.headers, g.transformResponse), h
        }, function (h) {
            return i(h) || (s(g), h && h.response && (h.response.data = a.call(g, h.response.data, h.response.headers, g.transformResponse))), Promise.reject(h)
        })
    }, js
}
var qs, yf;
function eE() {
    if (yf) return qs;
    yf = 1;
    var e = ca();
    return qs = function (i, t) {
        t = t || {};
        var l = {};
        function s(p, C) {
            return e.isPlainObject(p) && e.isPlainObject(C) ? e.merge(p, C) : e.isPlainObject(C) ? e.merge({}, C) : e.isArray(C) ? C.slice() : C
        }
        function c(p) {
            if (e.isUndefined(t[p])) {
                if (!e.isUndefined(i[p])) return s(void 0, i[p])
            } else return s(i[p], t[p])
        }
        function g(p) {
            if (!e.isUndefined(t[p])) return s(void 0, t[p])
        }
        function f(p) {
            if (e.isUndefined(t[p])) {
                if (!e.isUndefined(i[p])) return s(void 0, i[p])
            } else return s(void 0, t[p])
        }
        function A(p) {
            if (p in t) return s(i[p], t[p]);
            if (p in i) return s(void 0, i[p])
        }
        var h = {
            url: g,
            method: g,
            data: g,
            baseURL: f,
            transformRequest: f,
            transformResponse: f,
            paramsSerializer: f,
            timeout: f,
            timeoutMessage: f,
            withCredentials: f,
            adapter: f,
            responseType: f,
            xsrfCookieName: f,
            xsrfHeaderName: f,
            onUploadProgress: f,
            onDownloadProgress: f,
            decompress: f,
            maxContentLength: f,
            maxBodyLength: f,
            beforeRedirect: f,
            transport: f,
            httpAgent: f,
            httpsAgent: f,
            cancelToken: f,
            socketPath: f,
            responseEncoding: f,
            validateStatus: A
        };
        return e.forEach(Object.keys(i).concat(Object.keys(t)), function (C) {
            var x = h[C] || c,
                Y = x(C);
            e.isUndefined(Y) && x !== A || (l[C] = Y)
        }), l
    }, qs
}
var Qs, Cf;
function aE() {
    return Cf || (Cf = 1, Qs = {
        version: "0.27.2"
    }), Qs
}
var eo, Mf;
function RI() {
    if (Mf) return eo;
    Mf = 1;
    var e = aE().version,
        a = Nu(),
        i = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(function (s, c) {
        i[s] = function (f) {
            return typeof f === s || "a" + (c < 1 ? "n " : " ") + s
        }
    });
    var t = {};
    i.transitional = function (c, g, f) {
        function A(h, p) {
            return "[Axios v" + e + "] Transitional option '" + h + "'" + p + (f ? ". " + f : "")
        }
        return function (h, p, C) {
            if (c === !1) throw new a(A(p, " has been removed" + (g ? " in " + g : "")), a.ERR_DEPRECATED);
            return g && !t[p] && (t[p] = !0, console.warn(A(p, " has been deprecated since v" + g + " and will be removed in the near future"))), c ? c(h, p, C) : !0
        }
    };
    function l(s, c, g) {
        if (typeof s != "object") throw new a("options must be an object", a.ERR_BAD_OPTION_VALUE);
        for (var f = Object.keys(s), A = f.length; A-- > 0;) {
            var h = f[A],
                p = c[h];
            if (p) {
                var C = s[h],
                    x = C === void 0 || p(C, h, s);
                if (x !== !0) throw new a("option " + h + " must be " + x, a.ERR_BAD_OPTION_VALUE);
                continue
            }
            if (g !== !0) throw new a("Unknown option " + h, a.ERR_BAD_OPTION)
        }
    }
    return eo = {
        assertOptions: l,
        validators: i
    }, eo
}
var ao, Sf;
function LI() {
    if (Sf) return ao;
    Sf = 1;
    var e = ca(),
        a = N0(),
        i = SI(),
        t = _I(),
        l = eE(),
        s = y0(),
        c = RI(),
        g = c.validators;
    function f(A) {
        this.defaults = A, this.interceptors = {
            request: new i,
            response: new i
        }
    }
    return f.prototype.request = function (h, p) {
        typeof h == "string" ? (p = p || {}, p.url = h) : p = h || {}, p = l(this.defaults, p), p.method ? p.method = p.method.toLowerCase() : this.defaults.method ? p.method = this.defaults.method.toLowerCase() : p.method = "get";
        var C = p.transitional;
        C !== void 0 && c.assertOptions(C, {
            silentJSONParsing: g.transitional(g.boolean),
            forcedJSONParsing: g.transitional(g.boolean),
            clarifyTimeoutError: g.transitional(g.boolean)
        }, !1);
        var x = [],
            Y = !0;
        this.interceptors.request.forEach(function (z) {
            typeof z.runWhen == "function" && z.runWhen(p) === !1 || (Y = Y && z.synchronous, x.unshift(z.fulfilled, z.rejected))
        });
        var w = [];
        this.interceptors.response.forEach(function (z) {
            w.push(z.fulfilled, z.rejected)
        });
        var v;
        if (!Y) {
            var B = [t, void 0];
            for (Array.prototype.unshift.apply(B, x), B = B.concat(w), v = Promise.resolve(p); B.length;) v = v.then(B.shift(), B.shift());
            return v
        }
        for (var R = p; x.length;) {
            var V = x.shift(),
                U = x.shift();
            try {
                R = V(R)
            } catch (O) {
                U(O);
                break
            }
        }
        try {
            v = t(R)
        } catch (O) {
            return Promise.reject(O)
        }
        for (; w.length;) v = v.then(w.shift(), w.shift());
        return v
    }, f.prototype.getUri = function (h) {
        h = l(this.defaults, h);
        var p = s(h.baseURL, h.url);
        return a(p, h.params, h.paramsSerializer)
    }, e.forEach(["delete", "get", "head", "options"], function (h) {
        f.prototype[h] = function (p, C) {
            return this.request(l(C || {}, {
                method: h,
                url: p,
                data: (C || {}).data
            }))
        }
    }), e.forEach(["post", "put", "patch"], function (h) {
        function p(C) {
            return function (Y, w, v) {
                return this.request(l(v || {}, {
                    method: h,
                    headers: C ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: Y,
                    data: w
                }))
            }
        }
        f.prototype[h] = p(), f.prototype[h + "Form"] = p(!0)
    }), ao = f, ao
}
var no, wf;
function PI() {
    if (wf) return no;
    wf = 1;
    var e = tl();
    function a(i) {
        if (typeof i != "function") throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (c) {
            t = c
        });
        var l = this;
        this.promise.then(function (s) {
            if (l._listeners) {
                var c, g = l._listeners.length;
                for (c = 0; c < g; c++) l._listeners[c](s);
                l._listeners = null
            }
        }), this.promise.then = function (s) {
            var c, g = new Promise(function (f) {
                l.subscribe(f), c = f
            }).then(s);
            return g.cancel = function () {
                l.unsubscribe(c)
            }, g
        }, i(function (c) {
            l.reason || (l.reason = new e(c), t(l.reason))
        })
    }
    return a.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
    }, a.prototype.subscribe = function (t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }, a.prototype.unsubscribe = function (t) {
        if (this._listeners) {
            var l = this._listeners.indexOf(t);
            l !== -1 && this._listeners.splice(l, 1)
        }
    }, a.source = function () {
        var t, l = new a(function (c) {
            t = c
        });
        return {
            token: l,
            cancel: t
        }
    }, no = a, no
}
var io, If;
function kI() {
    return If || (If = 1, io = function (a) {
        return function (t) {
            return a.apply(null, t)
        }
    }), io
}
var uo, bf;
function zI() {
    if (bf) return uo;
    bf = 1;
    var e = ca();
    return uo = function (i) {
        return e.isObject(i) && i.isAxiosError === !0
    }, uo
}
var Bf;
function KI() {
    if (Bf) return cr.exports;
    Bf = 1;
    var e = ca(),
        a = Jh(),
        i = LI(),
        t = eE(),
        l = C0();
    function s(g) {
        var f = new i(g),
            A = a(i.prototype.request, f);
        return e.extend(A, i.prototype, f), e.extend(A, f), A.create = function (p) {
            return s(t(g, p))
        }, A
    }
    var c = s(l);
    return c.Axios = i, c.CanceledError = tl(), c.CancelToken = PI(), c.isCancel = Qh(), c.VERSION = aE().version, c.toFormData = jh(), c.AxiosError = Nu(), c.Cancel = c.CanceledError, c.all = function (f) {
        return Promise.all(f)
    }, c.spread = kI(), c.isAxiosError = zI(), cr.exports = c, cr.exports.default = c, cr.exports
}
var to, vf;
function HI() {
    return vf || (vf = 1, to = KI()), to
}
var UI = HI();
const Bn = qn(UI);
var OI = qh();
const GI = qn(OI);
var ZI = N0();
const YI = qn(ZI);
var VI = y0();
const XI = qn(VI);
var ro = ca();
async function WI(e) {
    const a = $I(e),
        i = [JI(a, e)];
    e.timeout && e.timeout > 0 && i.push(new Promise(l => {
        setTimeout(() => {
            const s = e.timeoutErrorMessage ? e.timeoutErrorMessage : "timeout of " + e.timeout + "ms exceeded";
            l(nE(s, e, "ECONNABORTED", a))
        }, e.timeout)
    }));
    const t = await Promise.race(i);
    return new Promise((l, s) => {
        t instanceof Error ? s(t) : Object.prototype.toString.call(e.settle) === "[object Function]" ? e.settle(l, s, t) : GI(l, s, t)
    })
}
async function JI(e, a) {
    let i;
    try {
        i = await fetch(e)
    } catch {
        return nE("Network Error", a, "ERR_NETWORK", e)
    }
    const t = {
        ok: i.ok,
        status: i.status,
        statusText: i.statusText,
        headers: new Headers(i.headers),
        config: a,
        request: e
    };
    if (i.status >= 200 && i.status !== 204) switch (a.responseType) {
    case "arraybuffer":
        t.data = await i.arrayBuffer();
        break;
    case "blob":
        t.data = await i.blob();
        break;
    case "json":
        t.data = await i.json();
        break;
    case "formData":
        t.data = await i.formData();
        break;
    default:
        t.data = await i.text();
        break
    }
    return t
}
function $I(e) {
    const a = new Headers(e.headers);
    if (e.auth) {
        const c = e.auth.username || "",
            g = e.auth.password ? decodeURI(encodeURIComponent(e.auth.password)) : "";
        a.set("Authorization", `Basic ${btoa(c+":"+g)}`)
    }
    const i = e.method.toUpperCase(),
        t = {
            headers: a,
            method: i
        };
    i !== "GET" && i !== "HEAD" && (t.body = e.data, ro.isFormData(t.body) && ro.isStandardBrowserEnv() && a.delete("Content-Type")), e.mode && (t.mode = e.mode), e.cache && (t.cache = e.cache), e.integrity && (t.integrity = e.integrity), e.redirect && (t.redirect = e.redirect), e.referrer && (t.referrer = e.referrer), ro.isUndefined(e.withCredentials) || (t.credentials = e.withCredentials ? "include" : "omit");
    const l = XI(e.baseURL, e.url),
        s = YI(l, e.params, e.paramsSerializer);
    return new Request(s, t)
}
function nE(e, a, i, t, l) {
    if (Bn.AxiosError && typeof Bn.AxiosError == "function") return new Bn.AxiosError(e, Bn.AxiosError[i], a, t, l);
    var s = new Error(e);
    return jI(s, a, i, t, l)
}
function jI(e, a, i, t, l) {
    return e.config = a, i && (e.code = i), e.request = t, e.response = l, e.isAxiosError = !0, e.toJSON = function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }, e
}
var lo, Df;
function qI() {
    if (Df) return lo;
    Df = 1;
    const e = new Set(["ENOTFOUND", "ENETUNREACH", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_CRL", "UNABLE_TO_DECRYPT_CERT_SIGNATURE", "UNABLE_TO_DECRYPT_CRL_SIGNATURE", "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY", "CERT_SIGNATURE_FAILURE", "CRL_SIGNATURE_FAILURE", "CERT_NOT_YET_VALID", "CERT_HAS_EXPIRED", "CRL_NOT_YET_VALID", "CRL_HAS_EXPIRED", "ERROR_IN_CERT_NOT_BEFORE_FIELD", "ERROR_IN_CERT_NOT_AFTER_FIELD", "ERROR_IN_CRL_LAST_UPDATE_FIELD", "ERROR_IN_CRL_NEXT_UPDATE_FIELD", "OUT_OF_MEM", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "CERT_CHAIN_TOO_LONG", "CERT_REVOKED", "INVALID_CA", "PATH_LENGTH_EXCEEDED", "INVALID_PURPOSE", "CERT_UNTRUSTED", "CERT_REJECTED", "HOSTNAME_MISMATCH"]);
    return lo = a => !e.has(a && a.code), lo
}
var QI = qI();
const eb = qn(QI);
function Tf(e, a, i, t, l, s, c) {
    try {
        var g = e[s](c),
            f = g.value
    } catch (A) {
        i(A);
        return
    }
    g.done ? a(f) : Promise.resolve(f).then(t, l)
}
function iE(e) {
    return function () {
        var a = this,
            i = arguments;
        return new Promise(function (t, l) {
            var s = e.apply(a, i);
            function c(f) {
                Tf(s, t, l, c, g, "next", f)
            }
            function g(f) {
                Tf(s, t, l, c, g, "throw", f)
            }
            c(void 0)
        })
    }
}
function xf(e, a) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(e);
        a && (t = t.filter(function (l) {
            return Object.getOwnPropertyDescriptor(e, l).enumerable
        })), i.push.apply(i, t)
    }
    return i
}
function so(e) {
    for (var a = 1; a < arguments.length; a++) {
        var i = arguments[a] != null ? arguments[a] : {};
        a % 2 ? xf(Object(i), !0).forEach(function (t) {
            ab(e, t, i[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : xf(Object(i)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
        })
    }
    return e
}
function ab(e, a, i) {
    return a in e ? Object.defineProperty(e, a, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = i, e
}
var uE = "axios-retry";
function tE(e) {
    var a = ["ERR_CANCELED", "ECONNABORTED"];
    return !e.response && !!e.code && !a.includes(e.code) && eb(e)
}
var rE = ["get", "head", "options"],
    nb = rE.concat(["put", "delete"]);
function M0(e) {
    return e.code !== "ECONNABORTED" && (!e.response || e.response.status >= 500 && e.response.status <= 599)
}
function ib(e) {
    return e.config ? M0(e) && rE.indexOf(e.config.method) !== -1 : !1
}
function lE(e) {
    return e.config ? M0(e) && nb.indexOf(e.config.method) !== -1 : !1
}
function sE(e) {
    return tE(e) || lE(e)
}
function ub() {
    return 0
}
function tb() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 100,
        i = Math.pow(2, e) * a,
        t = i * .2 * Math.random();
    return i + t
}
var rb = {
    retries: 3,
    retryCondition: sE,
    retryDelay: ub,
    shouldResetTimeout: !1,
    onRetry: () => {}
};
function lb(e, a) {
    return so(so(so({}, rb), a), e[uE])
}
function Ff(e, a) {
    var i = lb(e, a);
    return i.retryCount = i.retryCount || 0, e[uE] = i, i
}
function sb(e, a) {
    e.defaults.agent === a.agent && delete a.agent, e.defaults.httpAgent === a.httpAgent && delete a.httpAgent, e.defaults.httpsAgent === a.httpsAgent && delete a.httpsAgent
}
function ob(e, a) {
    return _o.apply(this, arguments)
}
function _o() {
    return _o = iE(function* (e, a) {
        var {
            retries: i,
            retryCondition: t
        } = e, l = e.retryCount < i && t(a);
        if (typeof l == "object") try {
            var s = yield l;
            return s !== !1
        } catch {
            return !1
        }
        return l
    }), _o.apply(this, arguments)
}
function hi(e, a) {
    var i = e.interceptors.request.use(l => {
            var s = Ff(l, a);
            return s.lastRequestTime = Date.now(), l
        }),
        t = e.interceptors.response.use(null, function () {
            var l = iE(function* (s) {
                var {
                    config: c
                } = s;
                if (!c) return Promise.reject(s);
                var g = Ff(c, a);
                if (yield ob(g, s)) {
                    g.retryCount += 1;
                    var {
                        retryDelay: f,
                        shouldResetTimeout: A,
                        onRetry: h
                    } = g, p = f(g.retryCount, s);
                    if (sb(e, c), !A && c.timeout && g.lastRequestTime) {
                        var C = Date.now() - g.lastRequestTime,
                            x = c.timeout - C - p;
                        if (x <= 0) return Promise.reject(s);
                        c.timeout = x
                    }
                    return c.transformRequest = [Y => Y], yield h(g.retryCount, s, c), new Promise(Y => setTimeout(() => Y(e(c)), p))
                }
                return Promise.reject(s)
            });
            return function (s) {
                return l.apply(this, arguments)
            }
        }());
    return {
        requestInterceptorId: i,
        responseInterceptorId: t
    }
}
hi.isNetworkError = tE;
hi.isSafeRequestError = ib;
hi.isIdempotentRequestError = lE;
hi.isNetworkOrIdempotentRequestError = sE;
hi.exponentialDelay = tb;
hi.isRetryableError = M0;
class cb {}
Bn.defaults.baseURL = globalThis.__DUBBING_LOCAL_API_BASE__, Bn.defaults.withCredentials = !0, Bn.defaults.headers.post["Content-Type"] = "application/json", Bn.defaults.adapter = globalThis.__DUBBING_AXIOS_ADAPTER__ || WI, Bn.interceptors.request.use(async a => {
        var i;
        return a.headers && (delete a.headers["x-request-from"], delete a.headers["X-Request-From"], delete a.headers["X-request-from"]), (i = a.url) != null && i.includes("/api/v2") && a.headers && (a.headers.Ck = await yI.getItem("local:SESSION")), a
    },
    function (a) {
        return Promise.reject(a)
    }), hi(Bn, {
    retries: 3,
    retryDelay: hi.exponentialDelay
}), De(cb, "abortControllerMap", new Map);
var yr = {
        exports: {}
    },
    gb = yr.exports,
    _f;
function db() {
    return _f || (_f = 1, function (e, a) {
        (function (i, t) {
            t(e)
        })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : gb, function (i) {
            if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) throw new Error("This script should only be loaded in a browser extension.");
            if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id) i.exports = globalThis.browser;
            else {
                const t = "The message port closed before a response was received.",
                    l = s => {
                        const c = {
                            alarms: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                clearAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            bookmarks: {
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getChildren: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getRecent: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getSubTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTree: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            browserAction: {
                                disable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                enable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                getBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                openPopup: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            browsingData: {
                                remove: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                removeCache: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCookies: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeDownloads: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFormData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeHistory: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeLocalStorage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePasswords: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePluginData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                settings: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            commands: {
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            contextMenus: {
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            cookies: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAllCookieStores: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            devtools: {
                                inspectedWindow: {
                                    eval: {
                                        minArgs: 1,
                                        maxArgs: 2,
                                        singleCallbackArg: !1
                                    }
                                },
                                panels: {
                                    create: {
                                        minArgs: 3,
                                        maxArgs: 3,
                                        singleCallbackArg: !0
                                    },
                                    elements: {
                                        createSidebarPane: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        }
                                    }
                                }
                            },
                            downloads: {
                                cancel: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                download: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                erase: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFileIcon: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                open: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                pause: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFile: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                resume: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            extension: {
                                isAllowedFileSchemeAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                isAllowedIncognitoAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            history: {
                                addUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                deleteRange: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getVisits: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            i18n: {
                                detectLanguage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAcceptLanguages: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            identity: {
                                launchWebAuthFlow: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            idle: {
                                queryState: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            management: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getSelf: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setEnabled: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                uninstallSelf: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            notifications: {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPermissionLevel: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            pageAction: {
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                hide: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            permissions: {
                                contains: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                request: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            runtime: {
                                getBackgroundPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPlatformInfo: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                openOptionsPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                requestUpdateCheck: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                sendMessage: {
                                    minArgs: 1,
                                    maxArgs: 3
                                },
                                sendNativeMessage: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                setUninstallURL: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            sessions: {
                                getDevices: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getRecentlyClosed: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                restore: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            storage: {
                                local: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                },
                                managed: {
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    }
                                },
                                sync: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                }
                            },
                            tabs: {
                                captureVisibleTab: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                detectLanguage: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                discard: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                duplicate: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                executeScript: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getZoom: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getZoomSettings: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goBack: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goForward: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                highlight: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                insertCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                query: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                reload: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                sendMessage: {
                                    minArgs: 2,
                                    maxArgs: 3
                                },
                                setZoom: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                setZoomSettings: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                update: {
                                    minArgs: 1,
                                    maxArgs: 2
                                }
                            },
                            topSites: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            webNavigation: {
                                getAllFrames: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFrame: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            webRequest: {
                                handlerBehaviorChanged: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            windows: {
                                create: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getLastFocused: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            }
                        };
                        if (Object.keys(c).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
                        class g extends WeakMap {
                            constructor(Q, L = void 0) {
                                super(L), this.createItem = Q
                            }
                            get(Q) {
                                return this.has(Q) || this.set(Q, this.createItem(Q)), super.get(Q)
                            }
                        }
                        const f = z => z && typeof z == "object" && typeof z.then == "function",
                            A = (z, Q) => (...L) => {
                                s.runtime.lastError ? z.reject(new Error(s.runtime.lastError.message)) : Q.singleCallbackArg || L.length <= 1 && Q.singleCallbackArg !== !1 ? z.resolve(L[0]) : z.resolve(L)
                            },
                            h = z => z == 1 ? "argument" : "arguments",
                            p = (z, Q) => function (k, ...$) {
                                if ($.length < Q.minArgs) throw new Error(`Expected at least ${Q.minArgs} ${h(Q.minArgs)} for ${z}(), got ${$.length}`);
                                if ($.length > Q.maxArgs) throw new Error(`Expected at most ${Q.maxArgs} ${h(Q.maxArgs)} for ${z}(), got ${$.length}`);
                                return new Promise((le, ge) => {
                                    if (Q.fallbackToNoCallback) try {
                                        k[z](...$, A({
                                            resolve: le,
                                            reject: ge
                                        }, Q))
                                    } catch (te) {
                                        console.warn(`${z} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, te), k[z](...$), Q.fallbackToNoCallback = !1, Q.noCallback = !0, le()
                                    } else Q.noCallback ? (k[z](...$), le()) : k[z](...$, A({
                                        resolve: le,
                                        reject: ge
                                    }, Q))
                                })
                            },
                            C = (z, Q, L) => new Proxy(Q, {
                                apply(k, $, le) {
                                    return L.call($, z, ...le)
                                }
                            });
                        let x = Function.call.bind(Object.prototype.hasOwnProperty);
                        const Y = (z, Q = {}, L = {}) => {
                                let k = Object.create(null),
                                    $ = {
                                        has(ge, te) {
                                            return te in z || te in k
                                        },
                                        get(ge, te, ye) {
                                            if (te in k) return k[te];
                                            if (!(te in z)) return;
                                            let re = z[te];
                                            if (typeof re == "function")
                                                if (typeof Q[te] == "function") re = C(z, z[te], Q[te]);
                                                else if (x(L, te)) {
                                                let D = p(te, L[te]);
                                                re = C(z, z[te], D)
                                            } else re = re.bind(z);
                                            else if (typeof re == "object" && re !== null && (x(Q, te) || x(L, te))) re = Y(re, Q[te], L[te]);
                                            else if (x(L, "*")) re = Y(re, Q[te], L["*"]);
                                            else return Object.defineProperty(k, te, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get() {
                                                    return z[te]
                                                },
                                                set(D) {
                                                    z[te] = D
                                                }
                                            }), re;
                                            return k[te] = re, re
                                        },
                                        set(ge, te, ye, re) {
                                            return te in k ? k[te] = ye : z[te] = ye, !0
                                        },
                                        defineProperty(ge, te, ye) {
                                            return Reflect.defineProperty(k, te, ye)
                                        },
                                        deleteProperty(ge, te) {
                                            return Reflect.deleteProperty(k, te)
                                        }
                                    },
                                    le = Object.create(z);
                                return new Proxy(le, $)
                            },
                            w = z => ({
                                addListener(Q, L, ...k) {
                                    Q.addListener(z.get(L), ...k)
                                },
                                hasListener(Q, L) {
                                    return Q.hasListener(z.get(L))
                                },
                                removeListener(Q, L) {
                                    Q.removeListener(z.get(L))
                                }
                            }),
                            v = new g(z => typeof z != "function" ? z : function (L) {
                                const k = Y(L, {}, {
                                    getContent: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                });
                                z(k)
                            }),
                            B = new g(z => typeof z != "function" ? z : function (L, k, $) {
                                let le = !1,
                                    ge, te = new Promise(X => {
                                        ge = function (ee) {
                                            le = !0, X(ee)
                                        }
                                    }),
                                    ye;
                                try {
                                    ye = z(L, k, ge)
                                } catch (X) {
                                    ye = Promise.reject(X)
                                }
                                const re = ye !== !0 && f(ye);
                                if (ye !== !0 && !re && !le) return !1;
                                const D = X => {
                                    X.then(ee => {
                                        $(ee)
                                    }, ee => {
                                        let xe;
                                        ee && (ee instanceof Error || typeof ee.message == "string") ? xe = ee.message : xe = "An unexpected error occurred", $({
                                            __mozWebExtensionPolyfillReject__: !0,
                                            message: xe
                                        })
                                    }).catch(ee => {
                                        console.error("Failed to send onMessage rejected reply", ee)
                                    })
                                };
                                return D(re ? ye : te), !0
                            }),
                            R = ({
                                reject: z,
                                resolve: Q
                            }, L) => {
                                s.runtime.lastError ? s.runtime.lastError.message === t ? Q() : z(new Error(s.runtime.lastError.message)) : L && L.__mozWebExtensionPolyfillReject__ ? z(new Error(L.message)) : Q(L)
                            },
                            V = (z, Q, L, ...k) => {
                                if (k.length < Q.minArgs) throw new Error(`Expected at least ${Q.minArgs} ${h(Q.minArgs)} for ${z}(), got ${k.length}`);
                                if (k.length > Q.maxArgs) throw new Error(`Expected at most ${Q.maxArgs} ${h(Q.maxArgs)} for ${z}(), got ${k.length}`);
                                return new Promise(($, le) => {
                                    const ge = R.bind(null, {
                                        resolve: $,
                                        reject: le
                                    });
                                    k.push(ge), L.sendMessage(...k)
                                })
                            },
                            U = {
                                devtools: {
                                    network: {
                                        onRequestFinished: w(v)
                                    }
                                },
                                runtime: {
                                    onMessage: w(B),
                                    onMessageExternal: w(B),
                                    sendMessage: V.bind(null, "sendMessage", {
                                        minArgs: 1,
                                        maxArgs: 3
                                    })
                                },
                                tabs: {
                                    sendMessage: V.bind(null, "sendMessage", {
                                        minArgs: 2,
                                        maxArgs: 3
                                    })
                                }
                            },
                            O = {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            };
                        return c.privacy = {
                            network: {
                                "*": O
                            },
                            services: {
                                "*": O
                            },
                            websites: {
                                "*": O
                            }
                        }, Y(s, U, c)
                    };
                i.exports = l(chrome)
            }
        })
    }(yr)), yr.exports
}
var fb = db();
const oE = qn(fb),
    mb = [EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, globalThis.DOMException, globalThis.AssertionError, globalThis.SystemError].filter(Boolean).map(e => [e.name, e]),
    hb = new Map(mb);
class S0 extends Error {
    constructor(i) {
        super(S0._prepareSuperMessage(i));
        De(this, "name", "NonError")
    }
    static _prepareSuperMessage(i) {
        try {
            return JSON.stringify(i)
        } catch {
            return String(i)
        }
    }
}
const Eb = [{
        property: "name",
        enumerable: !1
    }, {
        property: "message",
        enumerable: !1
    }, {
        property: "stack",
        enumerable: !1
    }, {
        property: "code",
        enumerable: !0
    }, {
        property: "cause",
        enumerable: !1
    }],
    Ro = new WeakSet,
    pb = e => {
        Ro.add(e);
        const a = e.toJSON();
        return Ro.delete(e), a
    },
    cE = e => hb.get(e) ?? Error,
    w0 = ({
        from: e,
        seen: a,
        to: i,
        forceEnumerable: t,
        maxDepth: l,
        depth: s,
        useToJSON: c,
        serialize: g
    }) => {
        if (!i)
            if (Array.isArray(e)) i = [];
            else if (!g && Rf(e)) {
            const A = cE(e.name);
            i = new A
        } else i = {};
        if (a.push(e), s >= l) return i;
        if (c && typeof e.toJSON == "function" && !Ro.has(e)) return pb(e);
        const f = A => w0({
            from: A,
            seen: [...a],
            forceEnumerable: t,
            maxDepth: l,
            depth: s,
            useToJSON: c,
            serialize: g
        });
        for (const [A, h] of Object.entries(e)) {
            if (h && h instanceof Uint8Array && h.constructor.name === "Buffer") {
                i[A] = "[object Buffer]";
                continue
            }
            if (h !== null && typeof h == "object" && typeof h.pipe == "function") {
                i[A] = "[object Stream]";
                continue
            }
            if (typeof h != "function") {
                if (!h || typeof h != "object") {
                    try {
                        i[A] = h
                    } catch {}
                    continue
                }
                if (!a.includes(e[A])) {
                    s++, i[A] = f(e[A]);
                    continue
                }
                i[A] = "[Circular]"
            }
        }
        for (const {
                property: A,
                enumerable: h
            } of Eb) typeof e[A] < "u" && e[A] !== null && Object.defineProperty(i, A, {
            value: Rf(e[A]) ? f(e[A]) : e[A],
            enumerable: t ? !0 : h,
            configurable: !0,
            writable: !0
        });
        return i
    };
function Ab(e, a = {}) {
    const {
        maxDepth: i = Number.POSITIVE_INFINITY,
        useToJSON: t = !0
    } = a;
    return typeof e == "object" && e !== null ? w0({
        from: e,
        seen: [],
        forceEnumerable: !0,
        maxDepth: i,
        depth: 0,
        useToJSON: t,
        serialize: !0
    }) : typeof e == "function" ? `[Function: ${e.name||"anonymous"}]` : e
}
function Nb(e, a = {}) {
    const {
        maxDepth: i = Number.POSITIVE_INFINITY
    } = a;
    if (e instanceof Error) return e;
    if (yb(e)) {
        const t = cE(e.name);
        return w0({
            from: e,
            seen: [],
            to: new t,
            maxDepth: i,
            depth: 0,
            serialize: !1
        })
    }
    return new S0(e)
}
function Rf(e) {
    return !!e && typeof e == "object" && "name" in e && "message" in e && "stack" in e
}
function yb(e) {
    return !!e && typeof e == "object" && "message" in e && !Array.isArray(e)
}
var Cb = Object.defineProperty,
    Mb = Object.defineProperties,
    Sb = Object.getOwnPropertyDescriptors,
    Lf = Object.getOwnPropertySymbols,
    wb = Object.prototype.hasOwnProperty,
    Ib = Object.prototype.propertyIsEnumerable,
    Pf = (e, a, i) => a in e ? Cb(e, a, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
    }) : e[a] = i,
    kf = (e, a) => {
        for (var i in a || (a = {})) wb.call(a, i) && Pf(e, i, a[i]);
        if (Lf)
            for (var i of Lf(a)) Ib.call(a, i) && Pf(e, i, a[i]);
        return e
    },
    zf = (e, a) => Mb(e, Sb(a)),
    bb = (e, a, i) => new Promise((t, l) => {
        var s = f => {
                try {
                    g(i.next(f))
                } catch (A) {
                    l(A)
                }
            },
            c = f => {
                try {
                    g(i.throw(f))
                } catch (A) {
                    l(A)
                }
            },
            g = f => f.done ? t(f.value) : Promise.resolve(f.value).then(s, c);
        g((i = i.apply(e, a)).next())
    });
function Bb(e) {
    let a, i = {};
    function t() {
        Object.entries(i).length === 0 && (a == null || a(), a = void 0)
    }
    let l = Math.floor(Math.random() * 1e4);
    function s() {
        return l++
    }
    return {
        sendMessage(c, g, ...f) {
            return bb(this, null, function* () {
                var A, h, p, C;
                const x = {
                        id: s(),
                        type: c,
                        data: g,
                        timestamp: Date.now()
                    },
                    Y = (h = yield(A = e.verifyMessageData) == null ? void 0 : A.call(e, x)) != null ? h : x;
                (p = e.logger) == null || p.debug(`[messaging] sendMessage {id=${Y.id}} ─ᐅ`, Y, ...f);
                const w = yield e.sendMessage(Y, ...f), {
                    res: v,
                    err: B
                } = w ?? {
                    err: new Error("No response")
                };
                if ((C = e.logger) == null || C.debug(`[messaging] sendMessage {id=${Y.id}} ᐊ─`, {
                        res: v,
                        err: B
                    }), B != null) throw Nb(B);
                return v
            })
        },
        onMessage(c, g) {
            var f, A, h;
            if (a == null && ((f = e.logger) == null || f.debug(`[messaging] "${c}" initialized the message listener for this context`), a = e.addRootListener(p => {
                    var C, x;
                    if (typeof p.type != "string" || typeof p.timestamp != "number") {
                        if (e.breakError) return;
                        const v = Error(`[messaging] Unknown message format, must include the 'type' & 'timestamp' fields, received: ${JSON.stringify(p)}`);
                        throw (C = e.logger) == null || C.error(v), v
                    }(x = e == null ? void 0 : e.logger) == null || x.debug("[messaging] Received message", p);
                    const Y = i[p.type];
                    if (Y == null) return;
                    const w = Y(p);
                    return Promise.resolve(w).then(v => {
                        var B, R;
                        return (R = (B = e.verifyMessageData) == null ? void 0 : B.call(e, v)) != null ? R : v
                    }).then(v => {
                        var B;
                        return (B = e == null ? void 0 : e.logger) == null || B.debug(`[messaging] onMessage {id=${p.id}} ─ᐅ`, {
                            res: v
                        }), {
                            res: v
                        }
                    }).catch(v => {
                        var B;
                        return (B = e == null ? void 0 : e.logger) == null || B.debug(`[messaging] onMessage {id=${p.id}} ─ᐅ`, {
                            err: v
                        }), {
                            err: Ab(v)
                        }
                    })
                })), i[c] != null) {
                const p = Error(`[messaging] In this JS context, only one listener can be setup for ${c}`);
                throw (A = e.logger) == null || A.error(p), p
            }
            return i[c] = g, (h = e.logger) == null || h.log(`[messaging] Added listener for ${c}`), () => {
                delete i[c], t()
            }
        },
        removeAllListeners() {
            Object.keys(i).forEach(c => {
                delete i[c]
            }), t()
        }
    }
}
var Cr = {
        exports: {}
    },
    vb = Cr.exports,
    Kf;
function Db() {
    return Kf || (Kf = 1, function (e, a) {
        (function (i, t) {
            t(e)
        })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : vb, function (i) {
            var t, l;
            if (!((l = (t = globalThis.chrome) == null ? void 0 : t.runtime) != null && l.id)) throw new Error("This script should only be loaded in a browser extension.");
            if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
                const s = "The message port closed before a response was received.",
                    c = g => {
                        const f = {
                            alarms: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                clearAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            bookmarks: {
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getChildren: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getRecent: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getSubTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTree: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            browserAction: {
                                disable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                enable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                getBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                openPopup: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            browsingData: {
                                remove: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                removeCache: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCookies: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeDownloads: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFormData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeHistory: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeLocalStorage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePasswords: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePluginData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                settings: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            commands: {
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            contextMenus: {
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            cookies: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAllCookieStores: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            devtools: {
                                inspectedWindow: {
                                    eval: {
                                        minArgs: 1,
                                        maxArgs: 2,
                                        singleCallbackArg: !1
                                    }
                                },
                                panels: {
                                    create: {
                                        minArgs: 3,
                                        maxArgs: 3,
                                        singleCallbackArg: !0
                                    },
                                    elements: {
                                        createSidebarPane: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        }
                                    }
                                }
                            },
                            downloads: {
                                cancel: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                download: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                erase: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFileIcon: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                open: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                pause: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFile: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                resume: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            extension: {
                                isAllowedFileSchemeAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                isAllowedIncognitoAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            history: {
                                addUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                deleteRange: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getVisits: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            i18n: {
                                detectLanguage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAcceptLanguages: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            identity: {
                                launchWebAuthFlow: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            idle: {
                                queryState: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            management: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getSelf: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setEnabled: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                uninstallSelf: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            notifications: {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPermissionLevel: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            pageAction: {
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                hide: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            permissions: {
                                contains: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                request: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            runtime: {
                                getBackgroundPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPlatformInfo: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                openOptionsPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                requestUpdateCheck: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                sendMessage: {
                                    minArgs: 1,
                                    maxArgs: 3
                                },
                                sendNativeMessage: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                setUninstallURL: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            sessions: {
                                getDevices: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getRecentlyClosed: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                restore: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            storage: {
                                local: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                },
                                managed: {
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    }
                                },
                                sync: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                }
                            },
                            tabs: {
                                captureVisibleTab: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                detectLanguage: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                discard: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                duplicate: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                executeScript: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getZoom: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getZoomSettings: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goBack: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goForward: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                highlight: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                insertCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                query: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                reload: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                sendMessage: {
                                    minArgs: 2,
                                    maxArgs: 3
                                },
                                setZoom: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                setZoomSettings: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                update: {
                                    minArgs: 1,
                                    maxArgs: 2
                                }
                            },
                            topSites: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            webNavigation: {
                                getAllFrames: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFrame: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            webRequest: {
                                handlerBehaviorChanged: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            windows: {
                                create: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getLastFocused: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            }
                        };
                        if (Object.keys(f).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
                        class A extends WeakMap {
                            constructor(k, $ = void 0) {
                                super($), this.createItem = k
                            }
                            get(k) {
                                return this.has(k) || this.set(k, this.createItem(k)), super.get(k)
                            }
                        }
                        const h = L => L && typeof L == "object" && typeof L.then == "function",
                            p = (L, k) => (...$) => {
                                g.runtime.lastError ? L.reject(new Error(g.runtime.lastError.message)) : k.singleCallbackArg || $.length <= 1 && k.singleCallbackArg !== !1 ? L.resolve($[0]) : L.resolve($)
                            },
                            C = L => L == 1 ? "argument" : "arguments",
                            x = (L, k) => function (le, ...ge) {
                                if (ge.length < k.minArgs) throw new Error(`Expected at least ${k.minArgs} ${C(k.minArgs)} for ${L}(), got ${ge.length}`);
                                if (ge.length > k.maxArgs) throw new Error(`Expected at most ${k.maxArgs} ${C(k.maxArgs)} for ${L}(), got ${ge.length}`);
                                return new Promise((te, ye) => {
                                    if (k.fallbackToNoCallback) try {
                                        le[L](...ge, p({
                                            resolve: te,
                                            reject: ye
                                        }, k))
                                    } catch (re) {
                                        console.warn(`${L} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, re), le[L](...ge), k.fallbackToNoCallback = !1, k.noCallback = !0, te()
                                    } else k.noCallback ? (le[L](...ge), te()) : le[L](...ge, p({
                                        resolve: te,
                                        reject: ye
                                    }, k))
                                })
                            },
                            Y = (L, k, $) => new Proxy(k, {
                                apply(le, ge, te) {
                                    return $.call(ge, L, ...te)
                                }
                            });
                        let w = Function.call.bind(Object.prototype.hasOwnProperty);
                        const v = (L, k = {}, $ = {}) => {
                                let le = Object.create(null),
                                    ge = {
                                        has(ye, re) {
                                            return re in L || re in le
                                        },
                                        get(ye, re, D) {
                                            if (re in le) return le[re];
                                            if (!(re in L)) return;
                                            let X = L[re];
                                            if (typeof X == "function")
                                                if (typeof k[re] == "function") X = Y(L, L[re], k[re]);
                                                else if (w($, re)) {
                                                let ee = x(re, $[re]);
                                                X = Y(L, L[re], ee)
                                            } else X = X.bind(L);
                                            else if (typeof X == "object" && X !== null && (w(k, re) || w($, re))) X = v(X, k[re], $[re]);
                                            else if (w($, "*")) X = v(X, k[re], $["*"]);
                                            else return Object.defineProperty(le, re, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get() {
                                                    return L[re]
                                                },
                                                set(ee) {
                                                    L[re] = ee
                                                }
                                            }), X;
                                            return le[re] = X, X
                                        },
                                        set(ye, re, D, X) {
                                            return re in le ? le[re] = D : L[re] = D, !0
                                        },
                                        defineProperty(ye, re, D) {
                                            return Reflect.defineProperty(le, re, D)
                                        },
                                        deleteProperty(ye, re) {
                                            return Reflect.deleteProperty(le, re)
                                        }
                                    },
                                    te = Object.create(L);
                                return new Proxy(te, ge)
                            },
                            B = L => ({
                                addListener(k, $, ...le) {
                                    k.addListener(L.get($), ...le)
                                },
                                hasListener(k, $) {
                                    return k.hasListener(L.get($))
                                },
                                removeListener(k, $) {
                                    k.removeListener(L.get($))
                                }
                            }),
                            R = new A(L => typeof L != "function" ? L : function ($) {
                                const le = v($, {}, {
                                    getContent: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                });
                                L(le)
                            }),
                            V = new A(L => typeof L != "function" ? L : function ($, le, ge) {
                                let te = !1,
                                    ye, re = new Promise(xe => {
                                        ye = function (Ne) {
                                            te = !0, xe(Ne)
                                        }
                                    }),
                                    D;
                                try {
                                    D = L($, le, ye)
                                } catch (xe) {
                                    D = Promise.reject(xe)
                                }
                                const X = D !== !0 && h(D);
                                if (D !== !0 && !X && !te) return !1;
                                const ee = xe => {
                                    xe.then(Ne => {
                                        ge(Ne)
                                    }, Ne => {
                                        let Oe;
                                        Ne && (Ne instanceof Error || typeof Ne.message == "string") ? Oe = Ne.message : Oe = "An unexpected error occurred", ge({
                                            __mozWebExtensionPolyfillReject__: !0,
                                            message: Oe
                                        })
                                    }).catch(Ne => {
                                        console.error("Failed to send onMessage rejected reply", Ne)
                                    })
                                };
                                return ee(X ? D : re), !0
                            }),
                            U = ({
                                reject: L,
                                resolve: k
                            }, $) => {
                                g.runtime.lastError ? g.runtime.lastError.message === s ? k() : L(new Error(g.runtime.lastError.message)) : $ && $.__mozWebExtensionPolyfillReject__ ? L(new Error($.message)) : k($)
                            },
                            O = (L, k, $, ...le) => {
                                if (le.length < k.minArgs) throw new Error(`Expected at least ${k.minArgs} ${C(k.minArgs)} for ${L}(), got ${le.length}`);
                                if (le.length > k.maxArgs) throw new Error(`Expected at most ${k.maxArgs} ${C(k.maxArgs)} for ${L}(), got ${le.length}`);
                                return new Promise((ge, te) => {
                                    const ye = U.bind(null, {
                                        resolve: ge,
                                        reject: te
                                    });
                                    le.push(ye), $.sendMessage(...le)
                                })
                            },
                            z = {
                                devtools: {
                                    network: {
                                        onRequestFinished: B(R)
                                    }
                                },
                                runtime: {
                                    onMessage: B(V),
                                    onMessageExternal: B(V),
                                    sendMessage: O.bind(null, "sendMessage", {
                                        minArgs: 1,
                                        maxArgs: 3
                                    })
                                },
                                tabs: {
                                    sendMessage: O.bind(null, "sendMessage", {
                                        minArgs: 2,
                                        maxArgs: 3
                                    })
                                }
                            },
                            Q = {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            };
                        return f.privacy = {
                            network: {
                                "*": Q
                            },
                            services: {
                                "*": Q
                            },
                            websites: {
                                "*": Q
                            }
                        }, v(g, z, f)
                    };
                i.exports = c(chrome)
            } else i.exports = globalThis.browser
        })
    }(Cr)), Cr.exports
}
var Tb = Db();
const gr = qn(Tb);
function xb(e) {
    return Bb(zf(kf({}, e), {
        sendMessage(a, i) {
            if (i == null) return gr.runtime.sendMessage(a);
            const t = typeof i == "number" ? {
                tabId: i
            } : i;
            return gr.tabs.sendMessage(t.tabId, a, t.frameId != null ? {
                frameId: t.frameId
            } : void 0)
        },
        addRootListener(a) {
            const i = (t, l) => a(typeof t == "object" ? zf(kf({}, t), {
                sender: l
            }) : t);
            return gr.runtime.onMessage.addListener(i), () => gr.runtime.onMessage.removeListener(i)
        }
    }))
}
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var oo, Hf;
function Fb() {
    return Hf || (Hf = 1, oo = function (a) {
        return a != null && typeof a == "object" && Array.isArray(a) === !1
    }), oo
}
/*!
 * get-value <https://github.com/jonschlinkert/get-value>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */
var co, Uf;
function _b() {
    if (Uf) return co;
    Uf = 1;
    const e = Fb();
    co = function (s, c, g) {
        if (e(g) || (g = {
                default: g
            }), !l(s)) return typeof g.default < "u" ? g.default : s;
        typeof c == "number" && (c = String(c));
        const f = Array.isArray(c),
            A = typeof c == "string",
            h = g.separator || ".",
            p = g.joinChar || (typeof h == "string" ? h : ".");
        if (!A && !f) return s;
        if (A && c in s) return t(c, s, g) ? s[c] : g.default;
        let C = f ? c : i(c, h, g),
            x = C.length,
            Y = 0;
        do {
            let w = C[Y];
            for (typeof w == "number" && (w = String(w)); w && w.slice(-1) === "\\";) w = a([w.slice(0, -1), C[++Y] || ""], p, g);
            if (w in s) {
                if (!t(w, s, g)) return g.default;
                s = s[w]
            } else {
                let v = !1,
                    B = Y + 1;
                for (; B < x;)
                    if (w = a([w, C[B++]], p, g), v = w in s) {
                        if (!t(w, s, g)) return g.default;
                        s = s[w], Y = B - 1;
                        break
                    }
                if (!v) return g.default
            }
        } while (++Y < x && l(s));
        return Y === x ? s : g.default
    };
    function a(s, c, g) {
        return typeof g.join == "function" ? g.join(s) : s[0] + c + s[1]
    }
    function i(s, c, g) {
        return typeof g.split == "function" ? g.split(s) : s.split(c)
    }
    function t(s, c, g) {
        return typeof g.isValid == "function" ? g.isValid(s, c) : !0
    }
    function l(s) {
        return e(s) || Array.isArray(s) || typeof s == "function"
    }
    return co
}
var Rb = _b();
const Lb = qn(Rb);
var Pb = (e, a, i) => new Promise((t, l) => {
    var s = f => {
            try {
                g(i.next(f))
            } catch (A) {
                l(A)
            }
        },
        c = f => {
            try {
                g(i.throw(f))
            } catch (A) {
                l(A)
            }
        },
        g = f => f.done ? t(f.value) : Promise.resolve(f.value).then(s, c);
    g((i = i.apply(e, a)).next())
});
function kb() {
    if (!zb()) return !1;
    const e = oE.runtime.getManifest();
    return e.background ? e.manifest_version === 3 ? Ub() : Hb() : !1
}
function zb() {
    var e;
    return !!((e = oE.runtime) != null && e.id)
}
var Kb = ["/_generated_background_page.html"];
function Hb() {
    return typeof window < "u" && Kb.includes(location.pathname)
}
function Ub() {
    return typeof window > "u"
}
function Y9(e, a, i) {
    let t;
    const l = `proxy-service.${e}`,
        {
            onMessage: s,
            sendMessage: c
        } = xb(i);
    function g(f) {
        const A = () => {},
            h = new Proxy(A, {
                apply(p, C, x) {
                    return Pb(this, null, function* () {
                        return yield c(l, {
                            path: f,
                            args: x
                        })
                    })
                },
                get(p, C, x) {
                    return C === "__proxy" || typeof C == "symbol" ? Reflect.get(p, C, x) : g(f == null ? C : `${f}.${C}`)
                }
            });
        return h.__proxy = !0, h
    }
    return [function (...A) {
        return t = a(...A), s(l, ({
            data: h
        }) => {
            const p = h.path == null ? t : Lb(t ?? {}, h.path);
            if (p) return Promise.resolve(p.bind(t)(...h.args))
        }), t
    }, function () {
        if (!kb()) return g();
        if (t == null) throw Error(`Failed to get an instance of ${e}: in background, but registerService has not been called. Did you forget to call registerService?`);
        return t
    }]
}
var Hu = {
    exports: {}
};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var Ob = Hu.exports,
    Of;
function Gb() {
    return Of || (Of = 1, function (e, a) {
        (function () {
            var i, t = "4.17.20",
                l = 200,
                s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                c = "Expected a function",
                g = "__lodash_hash_undefined__",
                f = 500,
                A = "__lodash_placeholder__",
                h = 1,
                p = 2,
                C = 4,
                x = 1,
                Y = 2,
                w = 1,
                v = 2,
                B = 4,
                R = 8,
                V = 16,
                U = 32,
                O = 64,
                z = 128,
                Q = 256,
                L = 512,
                k = 30,
                $ = "...",
                le = 800,
                ge = 16,
                te = 1,
                ye = 2,
                re = 3,
                D = 1 / 0,
                X = 9007199254740991,
                ee = 17976931348623157e292,
                xe = NaN,
                Ne = 4294967295,
                Oe = Ne - 1,
                wa = Ne >>> 1,
                dt = [
                    ["ary", z],
                    ["bind", w],
                    ["bindKey", v],
                    ["curry", R],
                    ["curryRight", V],
                    ["flip", L],
                    ["partial", U],
                    ["partialRight", O],
                    ["rearg", Q]
                ],
                Qn = "[object Arguments]",
                zi = "[object Array]",
                pi = "[object AsyncFunction]",
                An = "[object Boolean]",
                xn = "[object Date]",
                ft = "[object DOMException]",
                Nn = "[object Error]",
                yu = "[object Function]",
                y = "[object GeneratorFunction]",
                S = "[object Map]",
                _ = "[object Number]",
                j = "[object Null]",
                G = "[object Object]",
                W = "[object Promise]",
                ne = "[object Proxy]",
                ae = "[object RegExp]",
                q = "[object Set]",
                J = "[object String]",
                de = "[object Symbol]",
                ue = "[object Undefined]",
                oe = "[object WeakMap]",
                Ae = "[object WeakSet]",
                be = "[object ArrayBuffer]",
                Le = "[object DataView]",
                Pe = "[object Float32Array]",
                ga = "[object Float64Array]",
                la = "[object Int8Array]",
                Fa = "[object Int16Array]",
                _a = "[object Int32Array]",
                Fn = "[object Uint8Array]",
                Ki = "[object Uint8ClampedArray]",
                da = "[object Uint16Array]",
                Ra = "[object Uint32Array]",
                mt = /\b__p \+= '';/g,
                pE = /\b(__p \+=) '' \+/g,
                AE = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                b0 = /&(?:amp|lt|gt|quot|#39);/g,
                B0 = /[&<>"']/g,
                NE = RegExp(b0.source),
                yE = RegExp(B0.source),
                CE = /<%-([\s\S]+?)%>/g,
                ME = /<%([\s\S]+?)%>/g,
                v0 = /<%=([\s\S]+?)%>/g,
                SE = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                wE = /^\w*$/,
                IE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                rl = /[\\^$.*+?()[\]{}|]/g,
                bE = RegExp(rl.source),
                D0 = /^\s+|\s+$/g,
                T0 = /^\s+/,
                BE = /\s+$/,
                vE = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                DE = /\{\n\/\* \[wrapped with (.+)\] \*/,
                TE = /,? & /,
                xE = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                FE = /\\(\\)?/g,
                _E = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                x0 = /\w*$/,
                RE = /^[-+]0x[0-9a-f]+$/i,
                LE = /^0b[01]+$/i,
                PE = /^\[object .+?Constructor\]$/,
                kE = /^0o[0-7]+$/i,
                zE = /^(?:0|[1-9]\d*)$/,
                KE = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                ht = /($^)/,
                HE = /['\n\r\u2028\u2029\\]/g,
                Et = "\\ud800-\\udfff",
                UE = "\\u0300-\\u036f",
                OE = "\\ufe20-\\ufe2f",
                GE = "\\u20d0-\\u20ff",
                F0 = UE + OE + GE,
                _0 = "\\u2700-\\u27bf",
                R0 = "a-z\\xdf-\\xf6\\xf8-\\xff",
                ZE = "\\xac\\xb1\\xd7\\xf7",
                YE = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                VE = "\\u2000-\\u206f",
                XE = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                L0 = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                P0 = "\\ufe0e\\ufe0f",
                k0 = ZE + YE + VE + XE,
                ll = "['’]",
                WE = "[" + Et + "]",
                z0 = "[" + k0 + "]",
                pt = "[" + F0 + "]",
                K0 = "\\d+",
                JE = "[" + _0 + "]",
                H0 = "[" + R0 + "]",
                U0 = "[^" + Et + k0 + K0 + _0 + R0 + L0 + "]",
                sl = "\\ud83c[\\udffb-\\udfff]",
                $E = "(?:" + pt + "|" + sl + ")",
                O0 = "[^" + Et + "]",
                ol = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                cl = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                Hi = "[" + L0 + "]",
                G0 = "\\u200d",
                Z0 = "(?:" + H0 + "|" + U0 + ")",
                jE = "(?:" + Hi + "|" + U0 + ")",
                Y0 = "(?:" + ll + "(?:d|ll|m|re|s|t|ve))?",
                V0 = "(?:" + ll + "(?:D|LL|M|RE|S|T|VE))?",
                X0 = $E + "?",
                W0 = "[" + P0 + "]?",
                qE = "(?:" + G0 + "(?:" + [O0, ol, cl].join("|") + ")" + W0 + X0 + ")*",
                QE = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                ep = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                J0 = W0 + X0 + qE,
                ap = "(?:" + [JE, ol, cl].join("|") + ")" + J0,
                np = "(?:" + [O0 + pt + "?", pt, ol, cl, WE].join("|") + ")",
                ip = RegExp(ll, "g"),
                up = RegExp(pt, "g"),
                gl = RegExp(sl + "(?=" + sl + ")|" + np + J0, "g"),
                tp = RegExp([Hi + "?" + H0 + "+" + Y0 + "(?=" + [z0, Hi, "$"].join("|") + ")", jE + "+" + V0 + "(?=" + [z0, Hi + Z0, "$"].join("|") + ")", Hi + "?" + Z0 + "+" + Y0, Hi + "+" + V0, ep, QE, K0, ap].join("|"), "g"),
                rp = RegExp("[" + G0 + Et + F0 + P0 + "]"),
                lp = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                sp = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                op = -1,
                $e = {};
            $e[Pe] = $e[ga] = $e[la] = $e[Fa] = $e[_a] = $e[Fn] = $e[Ki] = $e[da] = $e[Ra] = !0, $e[Qn] = $e[zi] = $e[be] = $e[An] = $e[Le] = $e[xn] = $e[Nn] = $e[yu] = $e[S] = $e[_] = $e[G] = $e[ae] = $e[q] = $e[J] = $e[oe] = !1;
            var Ve = {};
            Ve[Qn] = Ve[zi] = Ve[be] = Ve[Le] = Ve[An] = Ve[xn] = Ve[Pe] = Ve[ga] = Ve[la] = Ve[Fa] = Ve[_a] = Ve[S] = Ve[_] = Ve[G] = Ve[ae] = Ve[q] = Ve[J] = Ve[de] = Ve[Fn] = Ve[Ki] = Ve[da] = Ve[Ra] = !0, Ve[Nn] = Ve[yu] = Ve[oe] = !1;
            var cp = {
                    \u00C0: "A",
                    \u00C1: "A",
                    \u00C2: "A",
                    \u00C3: "A",
                    \u00C4: "A",
                    \u00C5: "A",
                    \u00E0: "a",
                    \u00E1: "a",
                    \u00E2: "a",
                    \u00E3: "a",
                    \u00E4: "a",
                    \u00E5: "a",
                    \u00C7: "C",
                    \u00E7: "c",
                    \u00D0: "D",
                    \u00F0: "d",
                    \u00C8: "E",
                    \u00C9: "E",
                    \u00CA: "E",
                    \u00CB: "E",
                    \u00E8: "e",
                    \u00E9: "e",
                    \u00EA: "e",
                    \u00EB: "e",
                    \u00CC: "I",
                    \u00CD: "I",
                    \u00CE: "I",
                    \u00CF: "I",
                    \u00EC: "i",
                    \u00ED: "i",
                    \u00EE: "i",
                    \u00EF: "i",
                    \u00D1: "N",
                    \u00F1: "n",
                    \u00D2: "O",
                    \u00D3: "O",
                    \u00D4: "O",
                    \u00D5: "O",
                    \u00D6: "O",
                    \u00D8: "O",
                    \u00F2: "o",
                    \u00F3: "o",
                    \u00F4: "o",
                    \u00F5: "o",
                    \u00F6: "o",
                    \u00F8: "o",
                    \u00D9: "U",
                    \u00DA: "U",
                    \u00DB: "U",
                    \u00DC: "U",
                    \u00F9: "u",
                    \u00FA: "u",
                    \u00FB: "u",
                    \u00FC: "u",
                    \u00DD: "Y",
                    \u00FD: "y",
                    \u00FF: "y",
                    \u00C6: "Ae",
                    \u00E6: "ae",
                    \u00DE: "Th",
                    \u00FE: "th",
                    \u00DF: "ss",
                    \u0100: "A",
                    \u0102: "A",
                    \u0104: "A",
                    \u0101: "a",
                    \u0103: "a",
                    \u0105: "a",
                    \u0106: "C",
                    \u0108: "C",
                    \u010A: "C",
                    \u010C: "C",
                    \u0107: "c",
                    \u0109: "c",
                    \u010B: "c",
                    \u010D: "c",
                    \u010E: "D",
                    \u0110: "D",
                    \u010F: "d",
                    \u0111: "d",
                    \u0112: "E",
                    \u0114: "E",
                    \u0116: "E",
                    \u0118: "E",
                    \u011A: "E",
                    \u0113: "e",
                    \u0115: "e",
                    \u0117: "e",
                    \u0119: "e",
                    \u011B: "e",
                    \u011C: "G",
                    \u011E: "G",
                    \u0120: "G",
                    \u0122: "G",
                    \u011D: "g",
                    \u011F: "g",
                    \u0121: "g",
                    \u0123: "g",
                    \u0124: "H",
                    \u0126: "H",
                    \u0125: "h",
                    \u0127: "h",
                    \u0128: "I",
                    \u012A: "I",
                    \u012C: "I",
                    \u012E: "I",
                    \u0130: "I",
                    \u0129: "i",
                    \u012B: "i",
                    \u012D: "i",
                    \u012F: "i",
                    \u0131: "i",
                    \u0134: "J",
                    \u0135: "j",
                    \u0136: "K",
                    \u0137: "k",
                    \u0138: "k",
                    \u0139: "L",
                    \u013B: "L",
                    \u013D: "L",
                    \u013F: "L",
                    \u0141: "L",
                    \u013A: "l",
                    \u013C: "l",
                    \u013E: "l",
                    \u0140: "l",
                    \u0142: "l",
                    \u0143: "N",
                    \u0145: "N",
                    \u0147: "N",
                    \u014A: "N",
                    \u0144: "n",
                    \u0146: "n",
                    \u0148: "n",
                    \u014B: "n",
                    \u014C: "O",
                    \u014E: "O",
                    \u0150: "O",
                    \u014D: "o",
                    \u014F: "o",
                    \u0151: "o",
                    \u0154: "R",
                    \u0156: "R",
                    \u0158: "R",
                    \u0155: "r",
                    \u0157: "r",
                    \u0159: "r",
                    \u015A: "S",
                    \u015C: "S",
                    \u015E: "S",
                    \u0160: "S",
                    \u015B: "s",
                    \u015D: "s",
                    \u015F: "s",
                    \u0161: "s",
                    \u0162: "T",
                    \u0164: "T",
                    \u0166: "T",
                    \u0163: "t",
                    \u0165: "t",
                    \u0167: "t",
                    \u0168: "U",
                    \u016A: "U",
                    \u016C: "U",
                    \u016E: "U",
                    \u0170: "U",
                    \u0172: "U",
                    \u0169: "u",
                    \u016B: "u",
                    \u016D: "u",
                    \u016F: "u",
                    \u0171: "u",
                    \u0173: "u",
                    \u0174: "W",
                    \u0175: "w",
                    \u0176: "Y",
                    \u0177: "y",
                    \u0178: "Y",
                    \u0179: "Z",
                    \u017B: "Z",
                    \u017D: "Z",
                    \u017A: "z",
                    \u017C: "z",
                    \u017E: "z",
                    \u0132: "IJ",
                    \u0133: "ij",
                    \u0152: "Oe",
                    \u0153: "oe",
                    \u0149: "'n",
                    \u017F: "s"
                },
                gp = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                dp = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                fp = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "": "u2028",
                    "": "u2029"
                },
                mp = parseFloat,
                hp = parseInt,
                $0 = typeof sr == "object" && sr && sr.Object === Object && sr,
                Ep = typeof self == "object" && self && self.Object === Object && self,
                fa = $0 || Ep || Function("return this")(),
                dl = a && !a.nodeType && a,
                Ai = dl && !0 && e && !e.nodeType && e,
                j0 = Ai && Ai.exports === dl,
                fl = j0 && $0.process,
                Qa = function () {
                    try {
                        var b = Ai && Ai.require && Ai.require("util").types;
                        return b || fl && fl.binding && fl.binding("util")
                    } catch {}
                }(),
                q0 = Qa && Qa.isArrayBuffer,
                Q0 = Qa && Qa.isDate,
                ec = Qa && Qa.isMap,
                ac = Qa && Qa.isRegExp,
                nc = Qa && Qa.isSet,
                ic = Qa && Qa.isTypedArray;
            function Ga(b, P, T) {
                switch (T.length) {
                case 0:
                    return b.call(P);
                case 1:
                    return b.call(P, T[0]);
                case 2:
                    return b.call(P, T[0], T[1]);
                case 3:
                    return b.call(P, T[0], T[1], T[2])
                }
                return b.apply(P, T)
            }
            function pp(b, P, T, se) {
                for (var Ce = -1, ze = b == null ? 0 : b.length; ++Ce < ze;) {
                    var ta = b[Ce];
                    P(se, ta, T(ta), b)
                }
                return se
            }
            function en(b, P) {
                for (var T = -1, se = b == null ? 0 : b.length; ++T < se && P(b[T], T, b) !== !1;);
                return b
            }
            function Ap(b, P) {
                for (var T = b == null ? 0 : b.length; T-- && P(b[T], T, b) !== !1;);
                return b
            }
            function uc(b, P) {
                for (var T = -1, se = b == null ? 0 : b.length; ++T < se;)
                    if (!P(b[T], T, b)) return !1;
                return !0
            }
            function ei(b, P) {
                for (var T = -1, se = b == null ? 0 : b.length, Ce = 0, ze = []; ++T < se;) {
                    var ta = b[T];
                    P(ta, T, b) && (ze[Ce++] = ta)
                }
                return ze
            }
            function At(b, P) {
                var T = b == null ? 0 : b.length;
                return !!T && Ui(b, P, 0) > -1
            }
            function ml(b, P, T) {
                for (var se = -1, Ce = b == null ? 0 : b.length; ++se < Ce;)
                    if (T(P, b[se])) return !0;
                return !1
            }
            function je(b, P) {
                for (var T = -1, se = b == null ? 0 : b.length, Ce = Array(se); ++T < se;) Ce[T] = P(b[T], T, b);
                return Ce
            }
            function ai(b, P) {
                for (var T = -1, se = P.length, Ce = b.length; ++T < se;) b[Ce + T] = P[T];
                return b
            }
            function hl(b, P, T, se) {
                var Ce = -1,
                    ze = b == null ? 0 : b.length;
                for (se && ze && (T = b[++Ce]); ++Ce < ze;) T = P(T, b[Ce], Ce, b);
                return T
            }
            function Np(b, P, T, se) {
                var Ce = b == null ? 0 : b.length;
                for (se && Ce && (T = b[--Ce]); Ce--;) T = P(T, b[Ce], Ce, b);
                return T
            }
            function El(b, P) {
                for (var T = -1, se = b == null ? 0 : b.length; ++T < se;)
                    if (P(b[T], T, b)) return !0;
                return !1
            }
            var yp = pl("length");
            function Cp(b) {
                return b.split("")
            }
            function Mp(b) {
                return b.match(xE) || []
            }
            function tc(b, P, T) {
                var se;
                return T(b, function (Ce, ze, ta) {
                    if (P(Ce, ze, ta)) return se = ze, !1
                }), se
            }
            function Nt(b, P, T, se) {
                for (var Ce = b.length, ze = T + (se ? 1 : -1); se ? ze-- : ++ze < Ce;)
                    if (P(b[ze], ze, b)) return ze;
                return -1
            }
            function Ui(b, P, T) {
                return P === P ? Rp(b, P, T) : Nt(b, rc, T)
            }
            function Sp(b, P, T, se) {
                for (var Ce = T - 1, ze = b.length; ++Ce < ze;)
                    if (se(b[Ce], P)) return Ce;
                return -1
            }
            function rc(b) {
                return b !== b
            }
            function lc(b, P) {
                var T = b == null ? 0 : b.length;
                return T ? Nl(b, P) / T : xe
            }
            function pl(b) {
                return function (P) {
                    return P == null ? i : P[b]
                }
            }
            function Al(b) {
                return function (P) {
                    return b == null ? i : b[P]
                }
            }
            function sc(b, P, T, se, Ce) {
                return Ce(b, function (ze, ta, Ze) {
                    T = se ? (se = !1, ze) : P(T, ze, ta, Ze)
                }), T
            }
            function wp(b, P) {
                var T = b.length;
                for (b.sort(P); T--;) b[T] = b[T].value;
                return b
            }
            function Nl(b, P) {
                for (var T, se = -1, Ce = b.length; ++se < Ce;) {
                    var ze = P(b[se]);
                    ze !== i && (T = T === i ? ze : T + ze)
                }
                return T
            }
            function yl(b, P) {
                for (var T = -1, se = Array(b); ++T < b;) se[T] = P(T);
                return se
            }
            function Ip(b, P) {
                return je(P, function (T) {
                    return [T, b[T]]
                })
            }
            function Za(b) {
                return function (P) {
                    return b(P)
                }
            }
            function Cl(b, P) {
                return je(P, function (T) {
                    return b[T]
                })
            }
            function Cu(b, P) {
                return b.has(P)
            }
            function oc(b, P) {
                for (var T = -1, se = b.length; ++T < se && Ui(P, b[T], 0) > -1;);
                return T
            }
            function cc(b, P) {
                for (var T = b.length; T-- && Ui(P, b[T], 0) > -1;);
                return T
            }
            function bp(b, P) {
                for (var T = b.length, se = 0; T--;) b[T] === P && ++se;
                return se
            }
            var Bp = Al(cp),
                vp = Al(gp);
            function Dp(b) {
                return "\\" + fp[b]
            }
            function Tp(b, P) {
                return b == null ? i : b[P]
            }
            function Oi(b) {
                return rp.test(b)
            }
            function xp(b) {
                return lp.test(b)
            }
            function Fp(b) {
                for (var P, T = []; !(P = b.next()).done;) T.push(P.value);
                return T
            }
            function Ml(b) {
                var P = -1,
                    T = Array(b.size);
                return b.forEach(function (se, Ce) {
                    T[++P] = [Ce, se]
                }), T
            }
            function gc(b, P) {
                return function (T) {
                    return b(P(T))
                }
            }
            function ni(b, P) {
                for (var T = -1, se = b.length, Ce = 0, ze = []; ++T < se;) {
                    var ta = b[T];
                    (ta === P || ta === A) && (b[T] = A, ze[Ce++] = T)
                }
                return ze
            }
            function yt(b) {
                var P = -1,
                    T = Array(b.size);
                return b.forEach(function (se) {
                    T[++P] = se
                }), T
            }
            function _p(b) {
                var P = -1,
                    T = Array(b.size);
                return b.forEach(function (se) {
                    T[++P] = [se, se]
                }), T
            }
            function Rp(b, P, T) {
                for (var se = T - 1, Ce = b.length; ++se < Ce;)
                    if (b[se] === P) return se;
                return -1
            }
            function Lp(b, P, T) {
                for (var se = T + 1; se--;)
                    if (b[se] === P) return se;
                return se
            }
            function Gi(b) {
                return Oi(b) ? kp(b) : yp(b)
            }
            function dn(b) {
                return Oi(b) ? zp(b) : Cp(b)
            }
            var Pp = Al(dp);
            function kp(b) {
                for (var P = gl.lastIndex = 0; gl.test(b);) ++P;
                return P
            }
            function zp(b) {
                return b.match(gl) || []
            }
            function Kp(b) {
                return b.match(tp) || []
            }
            var Hp = function b(P) {
                    P = P == null ? fa : Zi.defaults(fa.Object(), P, Zi.pick(fa, sp));
                    var T = P.Array,
                        se = P.Date,
                        Ce = P.Error,
                        ze = P.Function,
                        ta = P.Math,
                        Ze = P.Object,
                        Sl = P.RegExp,
                        Up = P.String,
                        an = P.TypeError,
                        Ct = T.prototype,
                        Op = ze.prototype,
                        Yi = Ze.prototype,
                        Mt = P["__core-js_shared__"],
                        St = Op.toString,
                        Ge = Yi.hasOwnProperty,
                        Gp = 0,
                        dc = function () {
                            var n = /[^.]+$/.exec(Mt && Mt.keys && Mt.keys.IE_PROTO || "");
                            return n ? "Symbol(src)_1." + n : ""
                        }(),
                        wt = Yi.toString,
                        Zp = St.call(Ze),
                        Yp = fa._,
                        Vp = Sl("^" + St.call(Ge).replace(rl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        It = j0 ? P.Buffer : i,
                        ii = P.Symbol,
                        bt = P.Uint8Array,
                        fc = It ? It.allocUnsafe : i,
                        Bt = gc(Ze.getPrototypeOf, Ze),
                        mc = Ze.create,
                        hc = Yi.propertyIsEnumerable,
                        vt = Ct.splice,
                        Ec = ii ? ii.isConcatSpreadable : i,
                        Mu = ii ? ii.iterator : i,
                        Ni = ii ? ii.toStringTag : i,
                        Dt = function () {
                            try {
                                var n = wi(Ze, "defineProperty");
                                return n({}, "", {}), n
                            } catch {}
                        }(),
                        Xp = P.clearTimeout !== fa.clearTimeout && P.clearTimeout,
                        Wp = se && se.now !== fa.Date.now && se.now,
                        Jp = P.setTimeout !== fa.setTimeout && P.setTimeout,
                        Tt = ta.ceil,
                        xt = ta.floor,
                        wl = Ze.getOwnPropertySymbols,
                        $p = It ? It.isBuffer : i,
                        pc = P.isFinite,
                        jp = Ct.join,
                        qp = gc(Ze.keys, Ze),
                        ra = ta.max,
                        pa = ta.min,
                        Qp = se.now,
                        e4 = P.parseInt,
                        Ac = ta.random,
                        a4 = Ct.reverse,
                        Il = wi(P, "DataView"),
                        Su = wi(P, "Map"),
                        bl = wi(P, "Promise"),
                        Vi = wi(P, "Set"),
                        wu = wi(P, "WeakMap"),
                        Iu = wi(Ze, "create"),
                        Ft = wu && new wu,
                        Xi = {},
                        n4 = Ii(Il),
                        i4 = Ii(Su),
                        u4 = Ii(bl),
                        t4 = Ii(Vi),
                        r4 = Ii(wu),
                        _t = ii ? ii.prototype : i,
                        bu = _t ? _t.valueOf : i,
                        Nc = _t ? _t.toString : i;
                    function m(n) {
                        if (Qe(n) && !Me(n) && !(n instanceof Fe)) {
                            if (n instanceof nn) return n;
                            if (Ge.call(n, "__wrapped__")) return yg(n)
                        }
                        return new nn(n)
                    }
                    var Wi = function () {
                        function n() {}
                        return function (u) {
                            if (!qe(u)) return {};
                            if (mc) return mc(u);
                            n.prototype = u;
                            var r = new n;
                            return n.prototype = i, r
                        }
                    }();
                    function Rt() {}
                    function nn(n, u) {
                        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!u, this.__index__ = 0, this.__values__ = i
                    }
                    m.templateSettings = {
                        escape: CE,
                        evaluate: ME,
                        interpolate: v0,
                        variable: "",
                        imports: {
                            _: m
                        }
                    }, m.prototype = Rt.prototype, m.prototype.constructor = m, nn.prototype = Wi(Rt.prototype), nn.prototype.constructor = nn;
                    function Fe(n) {
                        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ne, this.__views__ = []
                    }
                    function l4() {
                        var n = new Fe(this.__wrapped__);
                        return n.__actions__ = La(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = La(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = La(this.__views__), n
                    }
                    function s4() {
                        if (this.__filtered__) {
                            var n = new Fe(this);
                            n.__dir__ = -1, n.__filtered__ = !0
                        } else n = this.clone(), n.__dir__ *= -1;
                        return n
                    }
                    function o4() {
                        var n = this.__wrapped__.value(),
                            u = this.__dir__,
                            r = Me(n),
                            o = u < 0,
                            d = r ? n.length : 0,
                            E = CA(0, d, this.__views__),
                            N = E.start,
                            M = E.end,
                            I = M - N,
                            K = o ? M : N - 1,
                            H = this.__iteratees__,
                            Z = H.length,
                            ie = 0,
                            ce = pa(I, this.__takeCount__);
                        if (!r || !o && d == I && ce == I) return Gc(n, this.__actions__);
                        var Ee = [];
                        e: for (; I-- && ie < ce;) {
                            K += u;
                            for (var Be = -1, he = n[K]; ++Be < Z;) {
                                var Te = H[Be],
                                    _e = Te.iteratee,
                                    Xa = Te.type,
                                    Ba = _e(he);
                                if (Xa == ye) he = Ba;
                                else if (!Ba) {
                                    if (Xa == te) continue e;
                                    break e
                                }
                            }
                            Ee[ie++] = he
                        }
                        return Ee
                    }
                    Fe.prototype = Wi(Rt.prototype), Fe.prototype.constructor = Fe;
                    function yi(n) {
                        var u = -1,
                            r = n == null ? 0 : n.length;
                        for (this.clear(); ++u < r;) {
                            var o = n[u];
                            this.set(o[0], o[1])
                        }
                    }
                    function c4() {
                        this.__data__ = Iu ? Iu(null) : {}, this.size = 0
                    }
                    function g4(n) {
                        var u = this.has(n) && delete this.__data__[n];
                        return this.size -= u ? 1 : 0, u
                    }
                    function d4(n) {
                        var u = this.__data__;
                        if (Iu) {
                            var r = u[n];
                            return r === g ? i : r
                        }
                        return Ge.call(u, n) ? u[n] : i
                    }
                    function f4(n) {
                        var u = this.__data__;
                        return Iu ? u[n] !== i : Ge.call(u, n)
                    }
                    function m4(n, u) {
                        var r = this.__data__;
                        return this.size += this.has(n) ? 0 : 1, r[n] = Iu && u === i ? g : u, this
                    }
                    yi.prototype.clear = c4, yi.prototype.delete = g4, yi.prototype.get = d4, yi.prototype.has = f4, yi.prototype.set = m4;
                    function _n(n) {
                        var u = -1,
                            r = n == null ? 0 : n.length;
                        for (this.clear(); ++u < r;) {
                            var o = n[u];
                            this.set(o[0], o[1])
                        }
                    }
                    function h4() {
                        this.__data__ = [], this.size = 0
                    }
                    function E4(n) {
                        var u = this.__data__,
                            r = Lt(u, n);
                        if (r < 0) return !1;
                        var o = u.length - 1;
                        return r == o ? u.pop() : vt.call(u, r, 1), --this.size, !0
                    }
                    function p4(n) {
                        var u = this.__data__,
                            r = Lt(u, n);
                        return r < 0 ? i : u[r][1]
                    }
                    function A4(n) {
                        return Lt(this.__data__, n) > -1
                    }
                    function N4(n, u) {
                        var r = this.__data__,
                            o = Lt(r, n);
                        return o < 0 ? (++this.size, r.push([n, u])) : r[o][1] = u, this
                    }
                    _n.prototype.clear = h4, _n.prototype.delete = E4, _n.prototype.get = p4, _n.prototype.has = A4, _n.prototype.set = N4;
                    function Rn(n) {
                        var u = -1,
                            r = n == null ? 0 : n.length;
                        for (this.clear(); ++u < r;) {
                            var o = n[u];
                            this.set(o[0], o[1])
                        }
                    }
                    function y4() {
                        this.size = 0, this.__data__ = {
                            hash: new yi,
                            map: new(Su || _n),
                            string: new yi
                        }
                    }
                    function C4(n) {
                        var u = Xt(this, n).delete(n);
                        return this.size -= u ? 1 : 0, u
                    }
                    function M4(n) {
                        return Xt(this, n).get(n)
                    }
                    function S4(n) {
                        return Xt(this, n).has(n)
                    }
                    function w4(n, u) {
                        var r = Xt(this, n),
                            o = r.size;
                        return r.set(n, u), this.size += r.size == o ? 0 : 1, this
                    }
                    Rn.prototype.clear = y4, Rn.prototype.delete = C4, Rn.prototype.get = M4, Rn.prototype.has = S4, Rn.prototype.set = w4;
                    function Ci(n) {
                        var u = -1,
                            r = n == null ? 0 : n.length;
                        for (this.__data__ = new Rn; ++u < r;) this.add(n[u])
                    }
                    function I4(n) {
                        return this.__data__.set(n, g), this
                    }
                    function b4(n) {
                        return this.__data__.has(n)
                    }
                    Ci.prototype.add = Ci.prototype.push = I4, Ci.prototype.has = b4;
                    function fn(n) {
                        var u = this.__data__ = new _n(n);
                        this.size = u.size
                    }
                    function B4() {
                        this.__data__ = new _n, this.size = 0
                    }
                    function v4(n) {
                        var u = this.__data__,
                            r = u.delete(n);
                        return this.size = u.size, r
                    }
                    function D4(n) {
                        return this.__data__.get(n)
                    }
                    function T4(n) {
                        return this.__data__.has(n)
                    }
                    function x4(n, u) {
                        var r = this.__data__;
                        if (r instanceof _n) {
                            var o = r.__data__;
                            if (!Su || o.length < l - 1) return o.push([n, u]), this.size = ++r.size, this;
                            r = this.__data__ = new Rn(o)
                        }
                        return r.set(n, u), this.size = r.size, this
                    }
                    fn.prototype.clear = B4, fn.prototype.delete = v4, fn.prototype.get = D4, fn.prototype.has = T4, fn.prototype.set = x4;
                    function yc(n, u) {
                        var r = Me(n),
                            o = !r && bi(n),
                            d = !r && !o && si(n),
                            E = !r && !o && !d && qi(n),
                            N = r || o || d || E,
                            M = N ? yl(n.length, Up) : [],
                            I = M.length;
                        for (var K in n)(u || Ge.call(n, K)) && !(N && (K == "length" || d && (K == "offset" || K == "parent") || E && (K == "buffer" || K == "byteLength" || K == "byteOffset") || zn(K, I))) && M.push(K);
                        return M
                    }
                    function Cc(n) {
                        var u = n.length;
                        return u ? n[kl(0, u - 1)] : i
                    }
                    function F4(n, u) {
                        return Wt(La(n), Mi(u, 0, n.length))
                    }
                    function _4(n) {
                        return Wt(La(n))
                    }
                    function Bl(n, u, r) {
                        (r !== i && !mn(n[u], r) || r === i && !(u in n)) && Ln(n, u, r)
                    }
                    function Bu(n, u, r) {
                        var o = n[u];
                        (!(Ge.call(n, u) && mn(o, r)) || r === i && !(u in n)) && Ln(n, u, r)
                    }
                    function Lt(n, u) {
                        for (var r = n.length; r--;)
                            if (mn(n[r][0], u)) return r;
                        return -1
                    }
                    function R4(n, u, r, o) {
                        return ui(n, function (d, E, N) {
                            u(o, d, r(d), N)
                        }), o
                    }
                    function Mc(n, u) {
                        return n && Cn(u, sa(u), n)
                    }
                    function L4(n, u) {
                        return n && Cn(u, ka(u), n)
                    }
                    function Ln(n, u, r) {
                        u == "__proto__" && Dt ? Dt(n, u, {
                            configurable: !0,
                            enumerable: !0,
                            value: r,
                            writable: !0
                        }) : n[u] = r
                    }
                    function vl(n, u) {
                        for (var r = -1, o = u.length, d = T(o), E = n == null; ++r < o;) d[r] = E ? i : ss(n, u[r]);
                        return d
                    }
                    function Mi(n, u, r) {
                        return n === n && (r !== i && (n = n <= r ? n : r), u !== i && (n = n >= u ? n : u)), n
                    }
                    function un(n, u, r, o, d, E) {
                        var N, M = u & h,
                            I = u & p,
                            K = u & C;
                        if (r && (N = d ? r(n, o, d, E) : r(n)), N !== i) return N;
                        if (!qe(n)) return n;
                        var H = Me(n);
                        if (H) {
                            if (N = SA(n), !M) return La(n, N)
                        } else {
                            var Z = Aa(n),
                                ie = Z == yu || Z == y;
                            if (si(n)) return Vc(n, M);
                            if (Z == G || Z == Qn || ie && !d) {
                                if (N = I || ie ? {} : gg(n), !M) return I ? dA(n, L4(N, n)) : gA(n, Mc(N, n))
                            } else {
                                if (!Ve[Z]) return d ? n : {};
                                N = wA(n, Z, M)
                            }
                        }
                        E || (E = new fn);
                        var ce = E.get(n);
                        if (ce) return ce;
                        E.set(n, N), Hg(n) ? n.forEach(function (he) {
                            N.add(un(he, u, r, he, n, E))
                        }) : zg(n) && n.forEach(function (he, Te) {
                            N.set(Te, un(he, u, r, Te, n, E))
                        });
                        var Ee = K ? I ? Wl : Xl : I ? ka : sa,
                            Be = H ? i : Ee(n);
                        return en(Be || n, function (he, Te) {
                            Be && (Te = he, he = n[Te]), Bu(N, Te, un(he, u, r, Te, n, E))
                        }), N
                    }
                    function P4(n) {
                        var u = sa(n);
                        return function (r) {
                            return Sc(r, n, u)
                        }
                    }
                    function Sc(n, u, r) {
                        var o = r.length;
                        if (n == null) return !o;
                        for (n = Ze(n); o--;) {
                            var d = r[o],
                                E = u[d],
                                N = n[d];
                            if (N === i && !(d in n) || !E(N)) return !1
                        }
                        return !0
                    }
                    function wc(n, u, r) {
                        if (typeof n != "function") throw new an(c);
                        return Ru(function () {
                            n.apply(i, r)
                        }, u)
                    }
                    function vu(n, u, r, o) {
                        var d = -1,
                            E = At,
                            N = !0,
                            M = n.length,
                            I = [],
                            K = u.length;
                        if (!M) return I;
                        r && (u = je(u, Za(r))), o ? (E = ml, N = !1) : u.length >= l && (E = Cu, N = !1, u = new Ci(u));
                        e: for (; ++d < M;) {
                            var H = n[d],
                                Z = r == null ? H : r(H);
                            if (H = o || H !== 0 ? H : 0, N && Z === Z) {
                                for (var ie = K; ie--;)
                                    if (u[ie] === Z) continue e;
                                I.push(H)
                            } else E(u, Z, o) || I.push(H)
                        }
                        return I
                    }
                    var ui = jc(yn),
                        Ic = jc(Tl, !0);
                    function k4(n, u) {
                        var r = !0;
                        return ui(n, function (o, d, E) {
                            return r = !!u(o, d, E), r
                        }), r
                    }
                    function Pt(n, u, r) {
                        for (var o = -1, d = n.length; ++o < d;) {
                            var E = n[o],
                                N = u(E);
                            if (N != null && (M === i ? N === N && !Va(N) : r(N, M))) var M = N,
                                I = E
                        }
                        return I
                    }
                    function z4(n, u, r, o) {
                        var d = n.length;
                        for (r = we(r), r < 0 && (r = -r > d ? 0 : d + r), o = o === i || o > d ? d : we(o), o < 0 && (o += d), o = r > o ? 0 : Og(o); r < o;) n[r++] = u;
                        return n
                    }
                    function bc(n, u) {
                        var r = [];
                        return ui(n, function (o, d, E) {
                            u(o, d, E) && r.push(o)
                        }), r
                    }
                    function ma(n, u, r, o, d) {
                        var E = -1,
                            N = n.length;
                        for (r || (r = bA), d || (d = []); ++E < N;) {
                            var M = n[E];
                            u > 0 && r(M) ? u > 1 ? ma(M, u - 1, r, o, d) : ai(d, M) : o || (d[d.length] = M)
                        }
                        return d
                    }
                    var Dl = qc(),
                        Bc = qc(!0);
                    function yn(n, u) {
                        return n && Dl(n, u, sa)
                    }
                    function Tl(n, u) {
                        return n && Bc(n, u, sa)
                    }
                    function kt(n, u) {
                        return ei(u, function (r) {
                            return Kn(n[r])
                        })
                    }
                    function Si(n, u) {
                        u = ri(u, n);
                        for (var r = 0, o = u.length; n != null && r < o;) n = n[Mn(u[r++])];
                        return r && r == o ? n : i
                    }
                    function vc(n, u, r) {
                        var o = u(n);
                        return Me(n) ? o : ai(o, r(n))
                    }
                    function Ia(n) {
                        return n == null ? n === i ? ue : j : Ni && Ni in Ze(n) ? yA(n) : _A(n)
                    }
                    function xl(n, u) {
                        return n > u
                    }
                    function K4(n, u) {
                        return n != null && Ge.call(n, u)
                    }
                    function H4(n, u) {
                        return n != null && u in Ze(n)
                    }
                    function U4(n, u, r) {
                        return n >= pa(u, r) && n < ra(u, r)
                    }
                    function Fl(n, u, r) {
                        for (var o = r ? ml : At, d = n[0].length, E = n.length, N = E, M = T(E), I = 1 / 0, K = []; N--;) {
                            var H = n[N];
                            N && u && (H = je(H, Za(u))), I = pa(H.length, I), M[N] = !r && (u || d >= 120 && H.length >= 120) ? new Ci(N && H) : i
                        }
                        H = n[0];
                        var Z = -1,
                            ie = M[0];
                        e: for (; ++Z < d && K.length < I;) {
                            var ce = H[Z],
                                Ee = u ? u(ce) : ce;
                            if (ce = r || ce !== 0 ? ce : 0, !(ie ? Cu(ie, Ee) : o(K, Ee, r))) {
                                for (N = E; --N;) {
                                    var Be = M[N];
                                    if (!(Be ? Cu(Be, Ee) : o(n[N], Ee, r))) continue e
                                }
                                ie && ie.push(Ee), K.push(ce)
                            }
                        }
                        return K
                    }
                    function O4(n, u, r, o) {
                        return yn(n, function (d, E, N) {
                            u(o, r(d), E, N)
                        }), o
                    }
                    function Du(n, u, r) {
                        u = ri(u, n), n = hg(n, u);
                        var o = n == null ? n : n[Mn(rn(u))];
                        return o == null ? i : Ga(o, n, r)
                    }
                    function Dc(n) {
                        return Qe(n) && Ia(n) == Qn
                    }
                    function G4(n) {
                        return Qe(n) && Ia(n) == be
                    }
                    function Z4(n) {
                        return Qe(n) && Ia(n) == xn
                    }
                    function Tu(n, u, r, o, d) {
                        return n === u ? !0 : n == null || u == null || !Qe(n) && !Qe(u) ? n !== n && u !== u : Y4(n, u, r, o, Tu, d)
                    }
                    function Y4(n, u, r, o, d, E) {
                        var N = Me(n),
                            M = Me(u),
                            I = N ? zi : Aa(n),
                            K = M ? zi : Aa(u);
                        I = I == Qn ? G : I, K = K == Qn ? G : K;
                        var H = I == G,
                            Z = K == G,
                            ie = I == K;
                        if (ie && si(n)) {
                            if (!si(u)) return !1;
                            N = !0, H = !1
                        }
                        if (ie && !H) return E || (E = new fn), N || qi(n) ? sg(n, u, r, o, d, E) : AA(n, u, I, r, o, d, E);
                        if (!(r & x)) {
                            var ce = H && Ge.call(n, "__wrapped__"),
                                Ee = Z && Ge.call(u, "__wrapped__");
                            if (ce || Ee) {
                                var Be = ce ? n.value() : n,
                                    he = Ee ? u.value() : u;
                                return E || (E = new fn), d(Be, he, r, o, E)
                            }
                        }
                        return ie ? (E || (E = new fn), NA(n, u, r, o, d, E)) : !1
                    }
                    function V4(n) {
                        return Qe(n) && Aa(n) == S
                    }
                    function _l(n, u, r, o) {
                        var d = r.length,
                            E = d,
                            N = !o;
                        if (n == null) return !E;
                        for (n = Ze(n); d--;) {
                            var M = r[d];
                            if (N && M[2] ? M[1] !== n[M[0]] : !(M[0] in n)) return !1
                        }
                        for (; ++d < E;) {
                            M = r[d];
                            var I = M[0],
                                K = n[I],
                                H = M[1];
                            if (N && M[2]) {
                                if (K === i && !(I in n)) return !1
                            } else {
                                var Z = new fn;
                                if (o) var ie = o(K, H, I, n, u, Z);
                                if (!(ie === i ? Tu(H, K, x | Y, o, Z) : ie)) return !1
                            }
                        }
                        return !0
                    }
                    function Tc(n) {
                        if (!qe(n) || vA(n)) return !1;
                        var u = Kn(n) ? Vp : PE;
                        return u.test(Ii(n))
                    }
                    function X4(n) {
                        return Qe(n) && Ia(n) == ae
                    }
                    function W4(n) {
                        return Qe(n) && Aa(n) == q
                    }
                    function J4(n) {
                        return Qe(n) && er(n.length) && !!$e[Ia(n)]
                    }
                    function xc(n) {
                        return typeof n == "function" ? n : n == null ? za : typeof n == "object" ? Me(n) ? Rc(n[0], n[1]) : _c(n) : Qg(n)
                    }
                    function Rl(n) {
                        if (!_u(n)) return qp(n);
                        var u = [];
                        for (var r in Ze(n)) Ge.call(n, r) && r != "constructor" && u.push(r);
                        return u
                    }
                    function $4(n) {
                        if (!qe(n)) return FA(n);
                        var u = _u(n),
                            r = [];
                        for (var o in n) o == "constructor" && (u || !Ge.call(n, o)) || r.push(o);
                        return r
                    }
                    function Ll(n, u) {
                        return n < u
                    }
                    function Fc(n, u) {
                        var r = -1,
                            o = Pa(n) ? T(n.length) : [];
                        return ui(n, function (d, E, N) {
                            o[++r] = u(d, E, N)
                        }), o
                    }
                    function _c(n) {
                        var u = $l(n);
                        return u.length == 1 && u[0][2] ? fg(u[0][0], u[0][1]) : function (r) {
                            return r === n || _l(r, n, u)
                        }
                    }
                    function Rc(n, u) {
                        return ql(n) && dg(u) ? fg(Mn(n), u) : function (r) {
                            var o = ss(r, n);
                            return o === i && o === u ? os(r, n) : Tu(u, o, x | Y)
                        }
                    }
                    function zt(n, u, r, o, d) {
                        n !== u && Dl(u, function (E, N) {
                            if (d || (d = new fn), qe(E)) j4(n, u, N, r, zt, o, d);
                            else {
                                var M = o ? o(es(n, N), E, N + "", n, u, d) : i;
                                M === i && (M = E), Bl(n, N, M)
                            }
                        }, ka)
                    }
                    function j4(n, u, r, o, d, E, N) {
                        var M = es(n, r),
                            I = es(u, r),
                            K = N.get(I);
                        if (K) {
                            Bl(n, r, K);
                            return
                        }
                        var H = E ? E(M, I, r + "", n, u, N) : i,
                            Z = H === i;
                        if (Z) {
                            var ie = Me(I),
                                ce = !ie && si(I),
                                Ee = !ie && !ce && qi(I);
                            H = I, ie || ce || Ee ? Me(M) ? H = M : aa(M) ? H = La(M) : ce ? (Z = !1, H = Vc(I, !0)) : Ee ? (Z = !1, H = Xc(I, !0)) : H = [] : Lu(I) || bi(I) ? (H = M, bi(M) ? H = Gg(M) : (!qe(M) || Kn(M)) && (H = gg(I))) : Z = !1
                        }
                        Z && (N.set(I, H), d(H, I, o, E, N), N.delete(I)), Bl(n, r, H)
                    }
                    function Lc(n, u) {
                        var r = n.length;
                        if (r) return u += u < 0 ? r : 0, zn(u, r) ? n[u] : i
                    }
                    function Pc(n, u, r) {
                        u.length ? u = je(u, function (E) {
                            return Me(E) ? function (N) {
                                return Si(N, E.length === 1 ? E[0] : E)
                            } : E
                        }) : u = [za];
                        var o = -1;
                        u = je(u, Za(me()));
                        var d = Fc(n, function (E, N, M) {
                            var I = je(u, function (K) {
                                return K(E)
                            });
                            return {
                                criteria: I,
                                index: ++o,
                                value: E
                            }
                        });
                        return wp(d, function (E, N) {
                            return cA(E, N, r)
                        })
                    }
                    function q4(n, u) {
                        return kc(n, u, function (r, o) {
                            return os(n, o)
                        })
                    }
                    function kc(n, u, r) {
                        for (var o = -1, d = u.length, E = {}; ++o < d;) {
                            var N = u[o],
                                M = Si(n, N);
                            r(M, N) && xu(E, ri(N, n), M)
                        }
                        return E
                    }
                    function Q4(n) {
                        return function (u) {
                            return Si(u, n)
                        }
                    }
                    function Pl(n, u, r, o) {
                        var d = o ? Sp : Ui,
                            E = -1,
                            N = u.length,
                            M = n;
                        for (n === u && (u = La(u)), r && (M = je(n, Za(r))); ++E < N;)
                            for (var I = 0, K = u[E], H = r ? r(K) : K;
                                (I = d(M, H, I, o)) > -1;) M !== n && vt.call(M, I, 1), vt.call(n, I, 1);
                        return n
                    }
                    function zc(n, u) {
                        for (var r = n ? u.length : 0, o = r - 1; r--;) {
                            var d = u[r];
                            if (r == o || d !== E) {
                                var E = d;
                                zn(d) ? vt.call(n, d, 1) : Hl(n, d)
                            }
                        }
                        return n
                    }
                    function kl(n, u) {
                        return n + xt(Ac() * (u - n + 1))
                    }
                    function eA(n, u, r, o) {
                        for (var d = -1, E = ra(Tt((u - n) / (r || 1)), 0), N = T(E); E--;) N[o ? E : ++d] = n, n += r;
                        return N
                    }
                    function zl(n, u) {
                        var r = "";
                        if (!n || u < 1 || u > X) return r;
                        do u % 2 && (r += n), u = xt(u / 2), u && (n += n); while (u);
                        return r
                    }
                    function ve(n, u) {
                        return as(mg(n, u, za), n + "")
                    }
                    function aA(n) {
                        return Cc(Qi(n))
                    }
                    function nA(n, u) {
                        var r = Qi(n);
                        return Wt(r, Mi(u, 0, r.length))
                    }
                    function xu(n, u, r, o) {
                        if (!qe(n)) return n;
                        u = ri(u, n);
                        for (var d = -1, E = u.length, N = E - 1, M = n; M != null && ++d < E;) {
                            var I = Mn(u[d]),
                                K = r;
                            if (I === "__proto__" || I === "constructor" || I === "prototype") return n;
                            if (d != N) {
                                var H = M[I];
                                K = o ? o(H, I, M) : i, K === i && (K = qe(H) ? H : zn(u[d + 1]) ? [] : {})
                            }
                            Bu(M, I, K), M = M[I]
                        }
                        return n
                    }
                    var Kc = Ft ? function (n, u) {
                            return Ft.set(n, u), n
                        } : za,
                        iA = Dt ? function (n, u) {
                            return Dt(n, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: gs(u),
                                writable: !0
                            })
                        } : za;
                    function uA(n) {
                        return Wt(Qi(n))
                    }
                    function tn(n, u, r) {
                        var o = -1,
                            d = n.length;
                        u < 0 && (u = -u > d ? 0 : d + u), r = r > d ? d : r, r < 0 && (r += d), d = u > r ? 0 : r - u >>> 0, u >>>= 0;
                        for (var E = T(d); ++o < d;) E[o] = n[o + u];
                        return E
                    }
                    function tA(n, u) {
                        var r;
                        return ui(n, function (o, d, E) {
                            return r = u(o, d, E), !r
                        }), !!r
                    }
                    function Kt(n, u, r) {
                        var o = 0,
                            d = n == null ? o : n.length;
                        if (typeof u == "number" && u === u && d <= wa) {
                            for (; o < d;) {
                                var E = o + d >>> 1,
                                    N = n[E];
                                N !== null && !Va(N) && (r ? N <= u : N < u) ? o = E + 1 : d = E
                            }
                            return d
                        }
                        return Kl(n, u, za, r)
                    }
                    function Kl(n, u, r, o) {
                        var d = 0,
                            E = n == null ? 0 : n.length;
                        if (E === 0) return 0;
                        u = r(u);
                        for (var N = u !== u, M = u === null, I = Va(u), K = u === i; d < E;) {
                            var H = xt((d + E) / 2),
                                Z = r(n[H]),
                                ie = Z !== i,
                                ce = Z === null,
                                Ee = Z === Z,
                                Be = Va(Z);
                            if (N) var he = o || Ee;
                            else K ? he = Ee && (o || ie) : M ? he = Ee && ie && (o || !ce) : I ? he = Ee && ie && !ce && (o || !Be) : ce || Be ? he = !1 : he = o ? Z <= u : Z < u;
                            he ? d = H + 1 : E = H
                        }
                        return pa(E, Oe)
                    }
                    function Hc(n, u) {
                        for (var r = -1, o = n.length, d = 0, E = []; ++r < o;) {
                            var N = n[r],
                                M = u ? u(N) : N;
                            if (!r || !mn(M, I)) {
                                var I = M;
                                E[d++] = N === 0 ? 0 : N
                            }
                        }
                        return E
                    }
                    function Uc(n) {
                        return typeof n == "number" ? n : Va(n) ? xe : +n
                    }
                    function Ya(n) {
                        if (typeof n == "string") return n;
                        if (Me(n)) return je(n, Ya) + "";
                        if (Va(n)) return Nc ? Nc.call(n) : "";
                        var u = n + "";
                        return u == "0" && 1 / n == -D ? "-0" : u
                    }
                    function ti(n, u, r) {
                        var o = -1,
                            d = At,
                            E = n.length,
                            N = !0,
                            M = [],
                            I = M;
                        if (r) N = !1, d = ml;
                        else if (E >= l) {
                            var K = u ? null : EA(n);
                            if (K) return yt(K);
                            N = !1, d = Cu, I = new Ci
                        } else I = u ? [] : M;
                        e: for (; ++o < E;) {
                            var H = n[o],
                                Z = u ? u(H) : H;
                            if (H = r || H !== 0 ? H : 0, N && Z === Z) {
                                for (var ie = I.length; ie--;)
                                    if (I[ie] === Z) continue e;
                                u && I.push(Z), M.push(H)
                            } else d(I, Z, r) || (I !== M && I.push(Z), M.push(H))
                        }
                        return M
                    }
                    function Hl(n, u) {
                        return u = ri(u, n), n = hg(n, u), n == null || delete n[Mn(rn(u))]
                    }
                    function Oc(n, u, r, o) {
                        return xu(n, u, r(Si(n, u)), o)
                    }
                    function Ht(n, u, r, o) {
                        for (var d = n.length, E = o ? d : -1;
                            (o ? E-- : ++E < d) && u(n[E], E, n););
                        return r ? tn(n, o ? 0 : E, o ? E + 1 : d) : tn(n, o ? E + 1 : 0, o ? d : E)
                    }
                    function Gc(n, u) {
                        var r = n;
                        return r instanceof Fe && (r = r.value()), hl(u, function (o, d) {
                            return d.func.apply(d.thisArg, ai([o], d.args))
                        }, r)
                    }
                    function Ul(n, u, r) {
                        var o = n.length;
                        if (o < 2) return o ? ti(n[0]) : [];
                        for (var d = -1, E = T(o); ++d < o;)
                            for (var N = n[d], M = -1; ++M < o;) M != d && (E[d] = vu(E[d] || N, n[M], u, r));
                        return ti(ma(E, 1), u, r)
                    }
                    function Zc(n, u, r) {
                        for (var o = -1, d = n.length, E = u.length, N = {}; ++o < d;) {
                            var M = o < E ? u[o] : i;
                            r(N, n[o], M)
                        }
                        return N
                    }
                    function Ol(n) {
                        return aa(n) ? n : []
                    }
                    function Gl(n) {
                        return typeof n == "function" ? n : za
                    }
                    function ri(n, u) {
                        return Me(n) ? n : ql(n, u) ? [n] : Ng(Ke(n))
                    }
                    var rA = ve;
                    function li(n, u, r) {
                        var o = n.length;
                        return r = r === i ? o : r, !u && r >= o ? n : tn(n, u, r)
                    }
                    var Yc = Xp || function (n) {
                        return fa.clearTimeout(n)
                    };
                    function Vc(n, u) {
                        if (u) return n.slice();
                        var r = n.length,
                            o = fc ? fc(r) : new n.constructor(r);
                        return n.copy(o), o
                    }
                    function Zl(n) {
                        var u = new n.constructor(n.byteLength);
                        return new bt(u).set(new bt(n)), u
                    }
                    function lA(n, u) {
                        var r = u ? Zl(n.buffer) : n.buffer;
                        return new n.constructor(r, n.byteOffset, n.byteLength)
                    }
                    function sA(n) {
                        var u = new n.constructor(n.source, x0.exec(n));
                        return u.lastIndex = n.lastIndex, u
                    }
                    function oA(n) {
                        return bu ? Ze(bu.call(n)) : {}
                    }
                    function Xc(n, u) {
                        var r = u ? Zl(n.buffer) : n.buffer;
                        return new n.constructor(r, n.byteOffset, n.length)
                    }
                    function Wc(n, u) {
                        if (n !== u) {
                            var r = n !== i,
                                o = n === null,
                                d = n === n,
                                E = Va(n),
                                N = u !== i,
                                M = u === null,
                                I = u === u,
                                K = Va(u);
                            if (!M && !K && !E && n > u || E && N && I && !M && !K || o && N && I || !r && I || !d) return 1;
                            if (!o && !E && !K && n < u || K && r && d && !o && !E || M && r && d || !N && d || !I) return -1
                        }
                        return 0
                    }
                    function cA(n, u, r) {
                        for (var o = -1, d = n.criteria, E = u.criteria, N = d.length, M = r.length; ++o < N;) {
                            var I = Wc(d[o], E[o]);
                            if (I) {
                                if (o >= M) return I;
                                var K = r[o];
                                return I * (K == "desc" ? -1 : 1)
                            }
                        }
                        return n.index - u.index
                    }
                    function Jc(n, u, r, o) {
                        for (var d = -1, E = n.length, N = r.length, M = -1, I = u.length, K = ra(E - N, 0), H = T(I + K), Z = !o; ++M < I;) H[M] = u[M];
                        for (; ++d < N;)(Z || d < E) && (H[r[d]] = n[d]);
                        for (; K--;) H[M++] = n[d++];
                        return H
                    }
                    function $c(n, u, r, o) {
                        for (var d = -1, E = n.length, N = -1, M = r.length, I = -1, K = u.length, H = ra(E - M, 0), Z = T(H + K), ie = !o; ++d < H;) Z[d] = n[d];
                        for (var ce = d; ++I < K;) Z[ce + I] = u[I];
                        for (; ++N < M;)(ie || d < E) && (Z[ce + r[N]] = n[d++]);
                        return Z
                    }
                    function La(n, u) {
                        var r = -1,
                            o = n.length;
                        for (u || (u = T(o)); ++r < o;) u[r] = n[r];
                        return u
                    }
                    function Cn(n, u, r, o) {
                        var d = !r;
                        r || (r = {});
                        for (var E = -1, N = u.length; ++E < N;) {
                            var M = u[E],
                                I = o ? o(r[M], n[M], M, r, n) : i;
                            I === i && (I = n[M]), d ? Ln(r, M, I) : Bu(r, M, I)
                        }
                        return r
                    }
                    function gA(n, u) {
                        return Cn(n, jl(n), u)
                    }
                    function dA(n, u) {
                        return Cn(n, og(n), u)
                    }
                    function Ut(n, u) {
                        return function (r, o) {
                            var d = Me(r) ? pp : R4,
                                E = u ? u() : {};
                            return d(r, n, me(o, 2), E)
                        }
                    }
                    function Ji(n) {
                        return ve(function (u, r) {
                            var o = -1,
                                d = r.length,
                                E = d > 1 ? r[d - 1] : i,
                                N = d > 2 ? r[2] : i;
                            for (E = n.length > 3 && typeof E == "function" ? (d--, E) : i, N && ba(r[0], r[1], N) && (E = d < 3 ? i : E, d = 1), u = Ze(u); ++o < d;) {
                                var M = r[o];
                                M && n(u, M, o, E)
                            }
                            return u
                        })
                    }
                    function jc(n, u) {
                        return function (r, o) {
                            if (r == null) return r;
                            if (!Pa(r)) return n(r, o);
                            for (var d = r.length, E = u ? d : -1, N = Ze(r);
                                (u ? E-- : ++E < d) && o(N[E], E, N) !== !1;);
                            return r
                        }
                    }
                    function qc(n) {
                        return function (u, r, o) {
                            for (var d = -1, E = Ze(u), N = o(u), M = N.length; M--;) {
                                var I = N[n ? M : ++d];
                                if (r(E[I], I, E) === !1) break
                            }
                            return u
                        }
                    }
                    function fA(n, u, r) {
                        var o = u & w,
                            d = Fu(n);
                        function E() {
                            var N = this && this !== fa && this instanceof E ? d : n;
                            return N.apply(o ? r : this, arguments)
                        }
                        return E
                    }
                    function Qc(n) {
                        return function (u) {
                            u = Ke(u);
                            var r = Oi(u) ? dn(u) : i,
                                o = r ? r[0] : u.charAt(0),
                                d = r ? li(r, 1).join("") : u.slice(1);
                            return o[n]() + d
                        }
                    }
                    function $i(n) {
                        return function (u) {
                            return hl(jg($g(u).replace(ip, "")), n, "")
                        }
                    }
                    function Fu(n) {
                        return function () {
                            var u = arguments;
                            switch (u.length) {
                            case 0:
                                return new n;
                            case 1:
                                return new n(u[0]);
                            case 2:
                                return new n(u[0], u[1]);
                            case 3:
                                return new n(u[0], u[1], u[2]);
                            case 4:
                                return new n(u[0], u[1], u[2], u[3]);
                            case 5:
                                return new n(u[0], u[1], u[2], u[3], u[4]);
                            case 6:
                                return new n(u[0], u[1], u[2], u[3], u[4], u[5]);
                            case 7:
                                return new n(u[0], u[1], u[2], u[3], u[4], u[5], u[6])
                            }
                            var r = Wi(n.prototype),
                                o = n.apply(r, u);
                            return qe(o) ? o : r
                        }
                    }
                    function mA(n, u, r) {
                        var o = Fu(n);
                        function d() {
                            for (var E = arguments.length, N = T(E), M = E, I = ji(d); M--;) N[M] = arguments[M];
                            var K = E < 3 && N[0] !== I && N[E - 1] !== I ? [] : ni(N, I);
                            if (E -= K.length, E < r) return ug(n, u, Ot, d.placeholder, i, N, K, i, i, r - E);
                            var H = this && this !== fa && this instanceof d ? o : n;
                            return Ga(H, this, N)
                        }
                        return d
                    }
                    function eg(n) {
                        return function (u, r, o) {
                            var d = Ze(u);
                            if (!Pa(u)) {
                                var E = me(r, 3);
                                u = sa(u), r = function (M) {
                                    return E(d[M], M, d)
                                }
                            }
                            var N = n(u, r, o);
                            return N > -1 ? d[E ? u[N] : N] : i
                        }
                    }
                    function ag(n) {
                        return kn(function (u) {
                            var r = u.length,
                                o = r,
                                d = nn.prototype.thru;
                            for (n && u.reverse(); o--;) {
                                var E = u[o];
                                if (typeof E != "function") throw new an(c);
                                if (d && !N && Vt(E) == "wrapper") var N = new nn([], !0)
                            }
                            for (o = N ? o : r; ++o < r;) {
                                E = u[o];
                                var M = Vt(E),
                                    I = M == "wrapper" ? Jl(E) : i;
                                I && Ql(I[0]) && I[1] == (z | R | U | Q) && !I[4].length && I[9] == 1 ? N = N[Vt(I[0])].apply(N, I[3]) : N = E.length == 1 && Ql(E) ? N[M]() : N.thru(E)
                            }
                            return function () {
                                var K = arguments,
                                    H = K[0];
                                if (N && K.length == 1 && Me(H)) return N.plant(H).value();
                                for (var Z = 0, ie = r ? u[Z].apply(this, K) : H; ++Z < r;) ie = u[Z].call(this, ie);
                                return ie
                            }
                        })
                    }
                    function Ot(n, u, r, o, d, E, N, M, I, K) {
                        var H = u & z,
                            Z = u & w,
                            ie = u & v,
                            ce = u & (R | V),
                            Ee = u & L,
                            Be = ie ? i : Fu(n);
                        function he() {
                            for (var Te = arguments.length, _e = T(Te), Xa = Te; Xa--;) _e[Xa] = arguments[Xa];
                            if (ce) var Ba = ji(he),
                                Wa = bp(_e, Ba);
                            if (o && (_e = Jc(_e, o, d, ce)), E && (_e = $c(_e, E, N, ce)), Te -= Wa, ce && Te < K) {
                                var na = ni(_e, Ba);
                                return ug(n, u, Ot, he.placeholder, r, _e, na, M, I, K - Te)
                            }
                            var hn = Z ? r : this,
                                Un = ie ? hn[n] : n;
                            return Te = _e.length, M ? _e = RA(_e, M) : Ee && Te > 1 && _e.reverse(), H && I < Te && (_e.length = I), this && this !== fa && this instanceof he && (Un = Be || Fu(Un)), Un.apply(hn, _e)
                        }
                        return he
                    }
                    function ng(n, u) {
                        return function (r, o) {
                            return O4(r, n, u(o), {})
                        }
                    }
                    function Gt(n, u) {
                        return function (r, o) {
                            var d;
                            if (r === i && o === i) return u;
                            if (r !== i && (d = r), o !== i) {
                                if (d === i) return o;
                                typeof r == "string" || typeof o == "string" ? (r = Ya(r), o = Ya(o)) : (r = Uc(r), o = Uc(o)), d = n(r, o)
                            }
                            return d
                        }
                    }
                    function Yl(n) {
                        return kn(function (u) {
                            return u = je(u, Za(me())), ve(function (r) {
                                var o = this;
                                return n(u, function (d) {
                                    return Ga(d, o, r)
                                })
                            })
                        })
                    }
                    function Zt(n, u) {
                        u = u === i ? " " : Ya(u);
                        var r = u.length;
                        if (r < 2) return r ? zl(u, n) : u;
                        var o = zl(u, Tt(n / Gi(u)));
                        return Oi(u) ? li(dn(o), 0, n).join("") : o.slice(0, n)
                    }
                    function hA(n, u, r, o) {
                        var d = u & w,
                            E = Fu(n);
                        function N() {
                            for (var M = -1, I = arguments.length, K = -1, H = o.length, Z = T(H + I), ie = this && this !== fa && this instanceof N ? E : n; ++K < H;) Z[K] = o[K];
                            for (; I--;) Z[K++] = arguments[++M];
                            return Ga(ie, d ? r : this, Z)
                        }
                        return N
                    }
                    function ig(n) {
                        return function (u, r, o) {
                            return o && typeof o != "number" && ba(u, r, o) && (r = o = i), u = Hn(u), r === i ? (r = u, u = 0) : r = Hn(r), o = o === i ? u < r ? 1 : -1 : Hn(o), eA(u, r, o, n)
                        }
                    }
                    function Yt(n) {
                        return function (u, r) {
                            return typeof u == "string" && typeof r == "string" || (u = ln(u), r = ln(r)), n(u, r)
                        }
                    }
                    function ug(n, u, r, o, d, E, N, M, I, K) {
                        var H = u & R,
                            Z = H ? N : i,
                            ie = H ? i : N,
                            ce = H ? E : i,
                            Ee = H ? i : E;
                        u |= H ? U : O, u &= ~(H ? O : U), u & B || (u &= -4);
                        var Be = [n, u, d, ce, Z, Ee, ie, M, I, K],
                            he = r.apply(i, Be);
                        return Ql(n) && Eg(he, Be), he.placeholder = o, pg(he, n, u)
                    }
                    function Vl(n) {
                        var u = ta[n];
                        return function (r, o) {
                            if (r = ln(r), o = o == null ? 0 : pa(we(o), 292), o && pc(r)) {
                                var d = (Ke(r) + "e").split("e"),
                                    E = u(d[0] + "e" + (+d[1] + o));
                                return d = (Ke(E) + "e").split("e"), +(d[0] + "e" + (+d[1] - o))
                            }
                            return u(r)
                        }
                    }
                    var EA = Vi && 1 / yt(new Vi([, -0]))[1] == D ? function (n) {
                        return new Vi(n)
                    } : ms;
                    function tg(n) {
                        return function (u) {
                            var r = Aa(u);
                            return r == S ? Ml(u) : r == q ? _p(u) : Ip(u, n(u))
                        }
                    }
                    function Pn(n, u, r, o, d, E, N, M) {
                        var I = u & v;
                        if (!I && typeof n != "function") throw new an(c);
                        var K = o ? o.length : 0;
                        if (K || (u &= -97, o = d = i), N = N === i ? N : ra(we(N), 0), M = M === i ? M : we(M), K -= d ? d.length : 0, u & O) {
                            var H = o,
                                Z = d;
                            o = d = i
                        }
                        var ie = I ? i : Jl(n),
                            ce = [n, u, r, o, d, H, Z, E, N, M];
                        if (ie && xA(ce, ie), n = ce[0], u = ce[1], r = ce[2], o = ce[3], d = ce[4], M = ce[9] = ce[9] === i ? I ? 0 : n.length : ra(ce[9] - K, 0), !M && u & (R | V) && (u &= -25), !u || u == w) var Ee = fA(n, u, r);
                        else u == R || u == V ? Ee = mA(n, u, M) : (u == U || u == (w | U)) && !d.length ? Ee = hA(n, u, r, o) : Ee = Ot.apply(i, ce);
                        var Be = ie ? Kc : Eg;
                        return pg(Be(Ee, ce), n, u)
                    }
                    function rg(n, u, r, o) {
                        return n === i || mn(n, Yi[r]) && !Ge.call(o, r) ? u : n
                    }
                    function lg(n, u, r, o, d, E) {
                        return qe(n) && qe(u) && (E.set(u, n), zt(n, u, i, lg, E), E.delete(u)), n
                    }
                    function pA(n) {
                        return Lu(n) ? i : n
                    }
                    function sg(n, u, r, o, d, E) {
                        var N = r & x,
                            M = n.length,
                            I = u.length;
                        if (M != I && !(N && I > M)) return !1;
                        var K = E.get(n),
                            H = E.get(u);
                        if (K && H) return K == u && H == n;
                        var Z = -1,
                            ie = !0,
                            ce = r & Y ? new Ci : i;
                        for (E.set(n, u), E.set(u, n); ++Z < M;) {
                            var Ee = n[Z],
                                Be = u[Z];
                            if (o) var he = N ? o(Be, Ee, Z, u, n, E) : o(Ee, Be, Z, n, u, E);
                            if (he !== i) {
                                if (he) continue;
                                ie = !1;
                                break
                            }
                            if (ce) {
                                if (!El(u, function (Te, _e) {
                                        if (!Cu(ce, _e) && (Ee === Te || d(Ee, Te, r, o, E))) return ce.push(_e)
                                    })) {
                                    ie = !1;
                                    break
                                }
                            } else if (!(Ee === Be || d(Ee, Be, r, o, E))) {
                                ie = !1;
                                break
                            }
                        }
                        return E.delete(n), E.delete(u), ie
                    }
                    function AA(n, u, r, o, d, E, N) {
                        switch (r) {
                        case Le:
                            if (n.byteLength != u.byteLength || n.byteOffset != u.byteOffset) return !1;
                            n = n.buffer, u = u.buffer;
                        case be:
                            return !(n.byteLength != u.byteLength || !E(new bt(n), new bt(u)));
                        case An:
                        case xn:
                        case _:
                            return mn(+n, +u);
                        case Nn:
                            return n.name == u.name && n.message == u.message;
                        case ae:
                        case J:
                            return n == u + "";
                        case S:
                            var M = Ml;
                        case q:
                            var I = o & x;
                            if (M || (M = yt), n.size != u.size && !I) return !1;
                            var K = N.get(n);
                            if (K) return K == u;
                            o |= Y, N.set(n, u);
                            var H = sg(M(n), M(u), o, d, E, N);
                            return N.delete(n), H;
                        case de:
                            if (bu) return bu.call(n) == bu.call(u)
                        }
                        return !1
                    }
                    function NA(n, u, r, o, d, E) {
                        var N = r & x,
                            M = Xl(n),
                            I = M.length,
                            K = Xl(u),
                            H = K.length;
                        if (I != H && !N) return !1;
                        for (var Z = I; Z--;) {
                            var ie = M[Z];
                            if (!(N ? ie in u : Ge.call(u, ie))) return !1
                        }
                        var ce = E.get(n),
                            Ee = E.get(u);
                        if (ce && Ee) return ce == u && Ee == n;
                        var Be = !0;
                        E.set(n, u), E.set(u, n);
                        for (var he = N; ++Z < I;) {
                            ie = M[Z];
                            var Te = n[ie],
                                _e = u[ie];
                            if (o) var Xa = N ? o(_e, Te, ie, u, n, E) : o(Te, _e, ie, n, u, E);
                            if (!(Xa === i ? Te === _e || d(Te, _e, r, o, E) : Xa)) {
                                Be = !1;
                                break
                            }
                            he || (he = ie == "constructor")
                        }
                        if (Be && !he) {
                            var Ba = n.constructor,
                                Wa = u.constructor;
                            Ba != Wa && "constructor" in n && "constructor" in u && !(typeof Ba == "function" && Ba instanceof Ba && typeof Wa == "function" && Wa instanceof Wa) && (Be = !1)
                        }
                        return E.delete(n), E.delete(u), Be
                    }
                    function kn(n) {
                        return as(mg(n, i, Sg), n + "")
                    }
                    function Xl(n) {
                        return vc(n, sa, jl)
                    }
                    function Wl(n) {
                        return vc(n, ka, og)
                    }
                    var Jl = Ft ? function (n) {
                        return Ft.get(n)
                    } : ms;
                    function Vt(n) {
                        for (var u = n.name + "", r = Xi[u], o = Ge.call(Xi, u) ? r.length : 0; o--;) {
                            var d = r[o],
                                E = d.func;
                            if (E == null || E == n) return d.name
                        }
                        return u
                    }
                    function ji(n) {
                        var u = Ge.call(m, "placeholder") ? m : n;
                        return u.placeholder
                    }
                    function me() {
                        var n = m.iteratee || ds;
                        return n = n === ds ? xc : n, arguments.length ? n(arguments[0], arguments[1]) : n
                    }
                    function Xt(n, u) {
                        var r = n.__data__;
                        return BA(u) ? r[typeof u == "string" ? "string" : "hash"] : r.map
                    }
                    function $l(n) {
                        for (var u = sa(n), r = u.length; r--;) {
                            var o = u[r],
                                d = n[o];
                            u[r] = [o, d, dg(d)]
                        }
                        return u
                    }
                    function wi(n, u) {
                        var r = Tp(n, u);
                        return Tc(r) ? r : i
                    }
                    function yA(n) {
                        var u = Ge.call(n, Ni),
                            r = n[Ni];
                        try {
                            n[Ni] = i;
                            var o = !0
                        } catch {}
                        var d = wt.call(n);
                        return o && (u ? n[Ni] = r : delete n[Ni]), d
                    }
                    var jl = wl ? function (n) {
                            return n == null ? [] : (n = Ze(n), ei(wl(n), function (u) {
                                return hc.call(n, u)
                            }))
                        } : hs,
                        og = wl ? function (n) {
                            for (var u = []; n;) ai(u, jl(n)), n = Bt(n);
                            return u
                        } : hs,
                        Aa = Ia;
                    (Il && Aa(new Il(new ArrayBuffer(1))) != Le || Su && Aa(new Su) != S || bl && Aa(bl.resolve()) != W || Vi && Aa(new Vi) != q || wu && Aa(new wu) != oe) && (Aa = function (n) {
                        var u = Ia(n),
                            r = u == G ? n.constructor : i,
                            o = r ? Ii(r) : "";
                        if (o) switch (o) {
                        case n4:
                            return Le;
                        case i4:
                            return S;
                        case u4:
                            return W;
                        case t4:
                            return q;
                        case r4:
                            return oe
                        }
                        return u
                    });
                    function CA(n, u, r) {
                        for (var o = -1, d = r.length; ++o < d;) {
                            var E = r[o],
                                N = E.size;
                            switch (E.type) {
                            case "drop":
                                n += N;
                                break;
                            case "dropRight":
                                u -= N;
                                break;
                            case "take":
                                u = pa(u, n + N);
                                break;
                            case "takeRight":
                                n = ra(n, u - N);
                                break
                            }
                        }
                        return {
                            start: n,
                            end: u
                        }
                    }
                    function MA(n) {
                        var u = n.match(DE);
                        return u ? u[1].split(TE) : []
                    }
                    function cg(n, u, r) {
                        u = ri(u, n);
                        for (var o = -1, d = u.length, E = !1; ++o < d;) {
                            var N = Mn(u[o]);
                            if (!(E = n != null && r(n, N))) break;
                            n = n[N]
                        }
                        return E || ++o != d ? E : (d = n == null ? 0 : n.length, !!d && er(d) && zn(N, d) && (Me(n) || bi(n)))
                    }
                    function SA(n) {
                        var u = n.length,
                            r = new n.constructor(u);
                        return u && typeof n[0] == "string" && Ge.call(n, "index") && (r.index = n.index, r.input = n.input), r
                    }
                    function gg(n) {
                        return typeof n.constructor == "function" && !_u(n) ? Wi(Bt(n)) : {}
                    }
                    function wA(n, u, r) {
                        var o = n.constructor;
                        switch (u) {
                        case be:
                            return Zl(n);
                        case An:
                        case xn:
                            return new o(+n);
                        case Le:
                            return lA(n, r);
                        case Pe:
                        case ga:
                        case la:
                        case Fa:
                        case _a:
                        case Fn:
                        case Ki:
                        case da:
                        case Ra:
                            return Xc(n, r);
                        case S:
                            return new o;
                        case _:
                        case J:
                            return new o(n);
                        case ae:
                            return sA(n);
                        case q:
                            return new o;
                        case de:
                            return oA(n)
                        }
                    }
                    function IA(n, u) {
                        var r = u.length;
                        if (!r) return n;
                        var o = r - 1;
                        return u[o] = (r > 1 ? "& " : "") + u[o], u = u.join(r > 2 ? ", " : " "), n.replace(vE, `{
/* [wrapped with ` + u + `] */
`)
                    }
                    function bA(n) {
                        return Me(n) || bi(n) || !!(Ec && n && n[Ec])
                    }
                    function zn(n, u) {
                        var r = typeof n;
                        return u = u ?? X, !!u && (r == "number" || r != "symbol" && zE.test(n)) && n > -1 && n % 1 == 0 && n < u
                    }
                    function ba(n, u, r) {
                        if (!qe(r)) return !1;
                        var o = typeof u;
                        return (o == "number" ? Pa(r) && zn(u, r.length) : o == "string" && u in r) ? mn(r[u], n) : !1
                    }
                    function ql(n, u) {
                        if (Me(n)) return !1;
                        var r = typeof n;
                        return r == "number" || r == "symbol" || r == "boolean" || n == null || Va(n) ? !0 : wE.test(n) || !SE.test(n) || u != null && n in Ze(u)
                    }
                    function BA(n) {
                        var u = typeof n;
                        return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? n !== "__proto__" : n === null
                    }
                    function Ql(n) {
                        var u = Vt(n),
                            r = m[u];
                        if (typeof r != "function" || !(u in Fe.prototype)) return !1;
                        if (n === r) return !0;
                        var o = Jl(r);
                        return !!o && n === o[0]
                    }
                    function vA(n) {
                        return !!dc && dc in n
                    }
                    var DA = Mt ? Kn : Es;
                    function _u(n) {
                        var u = n && n.constructor,
                            r = typeof u == "function" && u.prototype || Yi;
                        return n === r
                    }
                    function dg(n) {
                        return n === n && !qe(n)
                    }
                    function fg(n, u) {
                        return function (r) {
                            return r == null ? !1 : r[n] === u && (u !== i || n in Ze(r))
                        }
                    }
                    function TA(n) {
                        var u = qt(n, function (o) {
                                return r.size === f && r.clear(), o
                            }),
                            r = u.cache;
                        return u
                    }
                    function xA(n, u) {
                        var r = n[1],
                            o = u[1],
                            d = r | o,
                            E = d < (w | v | z),
                            N = o == z && r == R || o == z && r == Q && n[7].length <= u[8] || o == (z | Q) && u[7].length <= u[8] && r == R;
                        if (!(E || N)) return n;
                        o & w && (n[2] = u[2], d |= r & w ? 0 : B);
                        var M = u[3];
                        if (M) {
                            var I = n[3];
                            n[3] = I ? Jc(I, M, u[4]) : M, n[4] = I ? ni(n[3], A) : u[4]
                        }
                        return M = u[5], M && (I = n[5], n[5] = I ? $c(I, M, u[6]) : M, n[6] = I ? ni(n[5], A) : u[6]), M = u[7], M && (n[7] = M), o & z && (n[8] = n[8] == null ? u[8] : pa(n[8], u[8])), n[9] == null && (n[9] = u[9]), n[0] = u[0], n[1] = d, n
                    }
                    function FA(n) {
                        var u = [];
                        if (n != null)
                            for (var r in Ze(n)) u.push(r);
                        return u
                    }
                    function _A(n) {
                        return wt.call(n)
                    }
                    function mg(n, u, r) {
                        return u = ra(u === i ? n.length - 1 : u, 0),
                            function () {
                                for (var o = arguments, d = -1, E = ra(o.length - u, 0), N = T(E); ++d < E;) N[d] = o[u + d];
                                d = -1;
                                for (var M = T(u + 1); ++d < u;) M[d] = o[d];
                                return M[u] = r(N), Ga(n, this, M)
                            }
                    }
                    function hg(n, u) {
                        return u.length < 2 ? n : Si(n, tn(u, 0, -1))
                    }
                    function RA(n, u) {
                        for (var r = n.length, o = pa(u.length, r), d = La(n); o--;) {
                            var E = u[o];
                            n[o] = zn(E, r) ? d[E] : i
                        }
                        return n
                    }
                    function es(n, u) {
                        if (!(u === "constructor" && typeof n[u] == "function") && u != "__proto__") return n[u]
                    }
                    var Eg = Ag(Kc),
                        Ru = Jp || function (n, u) {
                            return fa.setTimeout(n, u)
                        },
                        as = Ag(iA);
                    function pg(n, u, r) {
                        var o = u + "";
                        return as(n, IA(o, LA(MA(o), r)))
                    }
                    function Ag(n) {
                        var u = 0,
                            r = 0;
                        return function () {
                            var o = Qp(),
                                d = ge - (o - r);
                            if (r = o, d > 0) {
                                if (++u >= le) return arguments[0]
                            } else u = 0;
                            return n.apply(i, arguments)
                        }
                    }
                    function Wt(n, u) {
                        var r = -1,
                            o = n.length,
                            d = o - 1;
                        for (u = u === i ? o : u; ++r < u;) {
                            var E = kl(r, d),
                                N = n[E];
                            n[E] = n[r], n[r] = N
                        }
                        return n.length = u, n
                    }
                    var Ng = TA(function (n) {
                        var u = [];
                        return n.charCodeAt(0) === 46 && u.push(""), n.replace(IE, function (r, o, d, E) {
                            u.push(d ? E.replace(FE, "$1") : o || r)
                        }), u
                    });
                    function Mn(n) {
                        if (typeof n == "string" || Va(n)) return n;
                        var u = n + "";
                        return u == "0" && 1 / n == -D ? "-0" : u
                    }
                    function Ii(n) {
                        if (n != null) {
                            try {
                                return St.call(n)
                            } catch {}
                            try {
                                return n + ""
                            } catch {}
                        }
                        return ""
                    }
                    function LA(n, u) {
                        return en(dt, function (r) {
                            var o = "_." + r[0];
                            u & r[1] && !At(n, o) && n.push(o)
                        }), n.sort()
                    }
                    function yg(n) {
                        if (n instanceof Fe) return n.clone();
                        var u = new nn(n.__wrapped__, n.__chain__);
                        return u.__actions__ = La(n.__actions__), u.__index__ = n.__index__, u.__values__ = n.__values__, u
                    }
                    function PA(n, u, r) {
                        (r ? ba(n, u, r) : u === i) ? u = 1: u = ra(we(u), 0);
                        var o = n == null ? 0 : n.length;
                        if (!o || u < 1) return [];
                        for (var d = 0, E = 0, N = T(Tt(o / u)); d < o;) N[E++] = tn(n, d, d += u);
                        return N
                    }
                    function kA(n) {
                        for (var u = -1, r = n == null ? 0 : n.length, o = 0, d = []; ++u < r;) {
                            var E = n[u];
                            E && (d[o++] = E)
                        }
                        return d
                    }
                    function zA() {
                        var n = arguments.length;
                        if (!n) return [];
                        for (var u = T(n - 1), r = arguments[0], o = n; o--;) u[o - 1] = arguments[o];
                        return ai(Me(r) ? La(r) : [r], ma(u, 1))
                    }
                    var KA = ve(function (n, u) {
                            return aa(n) ? vu(n, ma(u, 1, aa, !0)) : []
                        }),
                        HA = ve(function (n, u) {
                            var r = rn(u);
                            return aa(r) && (r = i), aa(n) ? vu(n, ma(u, 1, aa, !0), me(r, 2)) : []
                        }),
                        UA = ve(function (n, u) {
                            var r = rn(u);
                            return aa(r) && (r = i), aa(n) ? vu(n, ma(u, 1, aa, !0), i, r) : []
                        });
                    function OA(n, u, r) {
                        var o = n == null ? 0 : n.length;
                        return o ? (u = r || u === i ? 1 : we(u), tn(n, u < 0 ? 0 : u, o)) : []
                    }
                    function GA(n, u, r) {
                        var o = n == null ? 0 : n.length;
                        return o ? (u = r || u === i ? 1 : we(u), u = o - u, tn(n, 0, u < 0 ? 0 : u)) : []
                    }
                    function ZA(n, u) {
                        return n && n.length ? Ht(n, me(u, 3), !0, !0) : []
                    }
                    function YA(n, u) {
                        return n && n.length ? Ht(n, me(u, 3), !0) : []
                    }
                    function VA(n, u, r, o) {
                        var d = n == null ? 0 : n.length;
                        return d ? (r && typeof r != "number" && ba(n, u, r) && (r = 0, o = d), z4(n, u, r, o)) : []
                    }
                    function Cg(n, u, r) {
                        var o = n == null ? 0 : n.length;
                        if (!o) return -1;
                        var d = r == null ? 0 : we(r);
                        return d < 0 && (d = ra(o + d, 0)), Nt(n, me(u, 3), d)
                    }
                    function Mg(n, u, r) {
                        var o = n == null ? 0 : n.length;
                        if (!o) return -1;
                        var d = o - 1;
                        return r !== i && (d = we(r), d = r < 0 ? ra(o + d, 0) : pa(d, o - 1)), Nt(n, me(u, 3), d, !0)
                    }
                    function Sg(n) {
                        var u = n == null ? 0 : n.length;
                        return u ? ma(n, 1) : []
                    }
                    function XA(n) {
                        var u = n == null ? 0 : n.length;
                        return u ? ma(n, D) : []
                    }
                    function WA(n, u) {
                        var r = n == null ? 0 : n.length;
                        return r ? (u = u === i ? 1 : we(u), ma(n, u)) : []
                    }
                    function JA(n) {
                        for (var u = -1, r = n == null ? 0 : n.length, o = {}; ++u < r;) {
                            var d = n[u];
                            o[d[0]] = d[1]
                        }
                        return o
                    }
                    function wg(n) {
                        return n && n.length ? n[0] : i
                    }
                    function $A(n, u, r) {
                        var o = n == null ? 0 : n.length;
                        if (!o) return -1;
                        var d = r == null ? 0 : we(r);
                        return d < 0 && (d = ra(o + d, 0)), Ui(n, u, d)
                    }
                    function jA(n) {
                        var u = n == null ? 0 : n.length;
                        return u ? tn(n, 0, -1) : []
                    }
                    var qA = ve(function (n) {
                            var u = je(n, Ol);
                            return u.length && u[0] === n[0] ? Fl(u) : []
                        }),
                        QA = ve(function (n) {
                            var u = rn(n),
                                r = je(n, Ol);
                            return u === rn(r) ? u = i : r.pop(), r.length && r[0] === n[0] ? Fl(r, me(u, 2)) : []
                        }),
                        eN = ve(function (n) {
                            var u = rn(n),
                                r = je(n, Ol);
                            return u = typeof u == "function" ? u : i, u && r.pop(), r.length && r[0] === n[0] ? Fl(r, i, u) : []
                        });
                    function aN(n, u) {
                        return n == null ? "" : jp.call(n, u)
                    }
                    function rn(n) {
                        var u = n == null ? 0 : n.length;
                        return u ? n[u - 1] : i
                    }
                    function nN(n, u, r) {
                        var o = n == null ? 0 : n.length;
                        if (!o) return -1;
                        var d = o;
                        return r !== i && (d = we(r), d = d < 0 ? ra(o + d, 0) : pa(d, o - 1)), u === u ? Lp(n, u, d) : Nt(n, rc, d, !0)
                    }
                    function iN(n, u) {
                        return n && n.length ? Lc(n, we(u)) : i
                    }
                    var uN = ve(Ig);
                    function Ig(n, u) {
                        return n && n.length && u && u.length ? Pl(n, u) : n
                    }
                    function tN(n, u, r) {
                        return n && n.length && u && u.length ? Pl(n, u, me(r, 2)) : n
                    }
                    function rN(n, u, r) {
                        return n && n.length && u && u.length ? Pl(n, u, i, r) : n
                    }
                    var lN = kn(function (n, u) {
                        var r = n == null ? 0 : n.length,
                            o = vl(n, u);
                        return zc(n, je(u, function (d) {
                            return zn(d, r) ? +d : d
                        }).sort(Wc)), o
                    });
                    function sN(n, u) {
                        var r = [];
                        if (!(n && n.length)) return r;
                        var o = -1,
                            d = [],
                            E = n.length;
                        for (u = me(u, 3); ++o < E;) {
                            var N = n[o];
                            u(N, o, n) && (r.push(N), d.push(o))
                        }
                        return zc(n, d), r
                    }
                    function ns(n) {
                        return n == null ? n : a4.call(n)
                    }
                    function oN(n, u, r) {
                        var o = n == null ? 0 : n.length;
                        return o ? (r && typeof r != "number" && ba(n, u, r) ? (u = 0, r = o) : (u = u == null ? 0 : we(u), r = r === i ? o : we(r)), tn(n, u, r)) : []
                    }
                    function cN(n, u) {
                        return Kt(n, u)
                    }
                    function gN(n, u, r) {
                        return Kl(n, u, me(r, 2))
                    }
                    function dN(n, u) {
                        var r = n == null ? 0 : n.length;
                        if (r) {
                            var o = Kt(n, u);
                            if (o < r && mn(n[o], u)) return o
                        }
                        return -1
                    }
                    function fN(n, u) {
                        return Kt(n, u, !0)
                    }
                    function mN(n, u, r) {
                        return Kl(n, u, me(r, 2), !0)
                    }
                    function hN(n, u) {
                        var r = n == null ? 0 : n.length;
                        if (r) {
                            var o = Kt(n, u, !0) - 1;
                            if (mn(n[o], u)) return o
                        }
                        return -1
                    }
                    function EN(n) {
                        return n && n.length ? Hc(n) : []
                    }
                    function pN(n, u) {
                        return n && n.length ? Hc(n, me(u, 2)) : []
                    }
                    function AN(n) {
                        var u = n == null ? 0 : n.length;
                        return u ? tn(n, 1, u) : []
                    }
                    function NN(n, u, r) {
                        return n && n.length ? (u = r || u === i ? 1 : we(u), tn(n, 0, u < 0 ? 0 : u)) : []
                    }
                    function yN(n, u, r) {
                        var o = n == null ? 0 : n.length;
                        return o ? (u = r || u === i ? 1 : we(u), u = o - u, tn(n, u < 0 ? 0 : u, o)) : []
                    }
                    function CN(n, u) {
                        return n && n.length ? Ht(n, me(u, 3), !1, !0) : []
                    }
                    function MN(n, u) {
                        return n && n.length ? Ht(n, me(u, 3)) : []
                    }
                    var SN = ve(function (n) {
                            return ti(ma(n, 1, aa, !0))
                        }),
                        wN = ve(function (n) {
                            var u = rn(n);
                            return aa(u) && (u = i), ti(ma(n, 1, aa, !0), me(u, 2))
                        }),
                        IN = ve(function (n) {
                            var u = rn(n);
                            return u = typeof u == "function" ? u : i, ti(ma(n, 1, aa, !0), i, u)
                        });
                    function bN(n) {
                        return n && n.length ? ti(n) : []
                    }
                    function BN(n, u) {
                        return n && n.length ? ti(n, me(u, 2)) : []
                    }
                    function vN(n, u) {
                        return u = typeof u == "function" ? u : i, n && n.length ? ti(n, i, u) : []
                    }
                    function is(n) {
                        if (!(n && n.length)) return [];
                        var u = 0;
                        return n = ei(n, function (r) {
                            if (aa(r)) return u = ra(r.length, u), !0
                        }), yl(u, function (r) {
                            return je(n, pl(r))
                        })
                    }
                    function bg(n, u) {
                        if (!(n && n.length)) return [];
                        var r = is(n);
                        return u == null ? r : je(r, function (o) {
                            return Ga(u, i, o)
                        })
                    }
                    var DN = ve(function (n, u) {
                            return aa(n) ? vu(n, u) : []
                        }),
                        TN = ve(function (n) {
                            return Ul(ei(n, aa))
                        }),
                        xN = ve(function (n) {
                            var u = rn(n);
                            return aa(u) && (u = i), Ul(ei(n, aa), me(u, 2))
                        }),
                        FN = ve(function (n) {
                            var u = rn(n);
                            return u = typeof u == "function" ? u : i, Ul(ei(n, aa), i, u)
                        }),
                        _N = ve(is);
                    function RN(n, u) {
                        return Zc(n || [], u || [], Bu)
                    }
                    function LN(n, u) {
                        return Zc(n || [], u || [], xu)
                    }
                    var PN = ve(function (n) {
                        var u = n.length,
                            r = u > 1 ? n[u - 1] : i;
                        return r = typeof r == "function" ? (n.pop(), r) : i, bg(n, r)
                    });
                    function Bg(n) {
                        var u = m(n);
                        return u.__chain__ = !0, u
                    }
                    function kN(n, u) {
                        return u(n), n
                    }
                    function Jt(n, u) {
                        return u(n)
                    }
                    var zN = kn(function (n) {
                        var u = n.length,
                            r = u ? n[0] : 0,
                            o = this.__wrapped__,
                            d = function (E) {
                                return vl(E, n)
                            };
                        return u > 1 || this.__actions__.length || !(o instanceof Fe) || !zn(r) ? this.thru(d) : (o = o.slice(r, +r + (u ? 1 : 0)), o.__actions__.push({
                            func: Jt,
                            args: [d],
                            thisArg: i
                        }), new nn(o, this.__chain__).thru(function (E) {
                            return u && !E.length && E.push(i), E
                        }))
                    });
                    function KN() {
                        return Bg(this)
                    }
                    function HN() {
                        return new nn(this.value(), this.__chain__)
                    }
                    function UN() {
                        this.__values__ === i && (this.__values__ = Ug(this.value()));
                        var n = this.__index__ >= this.__values__.length,
                            u = n ? i : this.__values__[this.__index__++];
                        return {
                            done: n,
                            value: u
                        }
                    }
                    function ON() {
                        return this
                    }
                    function GN(n) {
                        for (var u, r = this; r instanceof Rt;) {
                            var o = yg(r);
                            o.__index__ = 0, o.__values__ = i, u ? d.__wrapped__ = o : u = o;
                            var d = o;
                            r = r.__wrapped__
                        }
                        return d.__wrapped__ = n, u
                    }
                    function ZN() {
                        var n = this.__wrapped__;
                        if (n instanceof Fe) {
                            var u = n;
                            return this.__actions__.length && (u = new Fe(this)), u = u.reverse(), u.__actions__.push({
                                func: Jt,
                                args: [ns],
                                thisArg: i
                            }), new nn(u, this.__chain__)
                        }
                        return this.thru(ns)
                    }
                    function YN() {
                        return Gc(this.__wrapped__, this.__actions__)
                    }
                    var VN = Ut(function (n, u, r) {
                        Ge.call(n, r) ? ++n[r] : Ln(n, r, 1)
                    });
                    function XN(n, u, r) {
                        var o = Me(n) ? uc : k4;
                        return r && ba(n, u, r) && (u = i), o(n, me(u, 3))
                    }
                    function WN(n, u) {
                        var r = Me(n) ? ei : bc;
                        return r(n, me(u, 3))
                    }
                    var JN = eg(Cg),
                        $N = eg(Mg);
                    function jN(n, u) {
                        return ma($t(n, u), 1)
                    }
                    function qN(n, u) {
                        return ma($t(n, u), D)
                    }
                    function QN(n, u, r) {
                        return r = r === i ? 1 : we(r), ma($t(n, u), r)
                    }
                    function vg(n, u) {
                        var r = Me(n) ? en : ui;
                        return r(n, me(u, 3))
                    }
                    function Dg(n, u) {
                        var r = Me(n) ? Ap : Ic;
                        return r(n, me(u, 3))
                    }
                    var ey = Ut(function (n, u, r) {
                        Ge.call(n, r) ? n[r].push(u) : Ln(n, r, [u])
                    });
                    function ay(n, u, r, o) {
                        n = Pa(n) ? n : Qi(n), r = r && !o ? we(r) : 0;
                        var d = n.length;
                        return r < 0 && (r = ra(d + r, 0)), ar(n) ? r <= d && n.indexOf(u, r) > -1 : !!d && Ui(n, u, r) > -1
                    }
                    var ny = ve(function (n, u, r) {
                            var o = -1,
                                d = typeof u == "function",
                                E = Pa(n) ? T(n.length) : [];
                            return ui(n, function (N) {
                                E[++o] = d ? Ga(u, N, r) : Du(N, u, r)
                            }), E
                        }),
                        iy = Ut(function (n, u, r) {
                            Ln(n, r, u)
                        });
                    function $t(n, u) {
                        var r = Me(n) ? je : Fc;
                        return r(n, me(u, 3))
                    }
                    function uy(n, u, r, o) {
                        return n == null ? [] : (Me(u) || (u = u == null ? [] : [u]), r = o ? i : r, Me(r) || (r = r == null ? [] : [r]), Pc(n, u, r))
                    }
                    var ty = Ut(function (n, u, r) {
                        n[r ? 0 : 1].push(u)
                    }, function () {
                        return [
                            [],
                            []
                        ]
                    });
                    function ry(n, u, r) {
                        var o = Me(n) ? hl : sc,
                            d = arguments.length < 3;
                        return o(n, me(u, 4), r, d, ui)
                    }
                    function ly(n, u, r) {
                        var o = Me(n) ? Np : sc,
                            d = arguments.length < 3;
                        return o(n, me(u, 4), r, d, Ic)
                    }
                    function sy(n, u) {
                        var r = Me(n) ? ei : bc;
                        return r(n, Qt(me(u, 3)))
                    }
                    function oy(n) {
                        var u = Me(n) ? Cc : aA;
                        return u(n)
                    }
                    function cy(n, u, r) {
                        (r ? ba(n, u, r) : u === i) ? u = 1: u = we(u);
                        var o = Me(n) ? F4 : nA;
                        return o(n, u)
                    }
                    function gy(n) {
                        var u = Me(n) ? _4 : uA;
                        return u(n)
                    }
                    function dy(n) {
                        if (n == null) return 0;
                        if (Pa(n)) return ar(n) ? Gi(n) : n.length;
                        var u = Aa(n);
                        return u == S || u == q ? n.size : Rl(n).length
                    }
                    function fy(n, u, r) {
                        var o = Me(n) ? El : tA;
                        return r && ba(n, u, r) && (u = i), o(n, me(u, 3))
                    }
                    var my = ve(function (n, u) {
                            if (n == null) return [];
                            var r = u.length;
                            return r > 1 && ba(n, u[0], u[1]) ? u = [] : r > 2 && ba(u[0], u[1], u[2]) && (u = [u[0]]), Pc(n, ma(u, 1), [])
                        }),
                        jt = Wp || function () {
                            return fa.Date.now()
                        };
                    function hy(n, u) {
                        if (typeof u != "function") throw new an(c);
                        return n = we(n),
                            function () {
                                if (--n < 1) return u.apply(this, arguments)
                            }
                    }
                    function Tg(n, u, r) {
                        return u = r ? i : u, u = n && u == null ? n.length : u, Pn(n, z, i, i, i, i, u)
                    }
                    function xg(n, u) {
                        var r;
                        if (typeof u != "function") throw new an(c);
                        return n = we(n),
                            function () {
                                return --n > 0 && (r = u.apply(this, arguments)), n <= 1 && (u = i), r
                            }
                    }
                    var us = ve(function (n, u, r) {
                            var o = w;
                            if (r.length) {
                                var d = ni(r, ji(us));
                                o |= U
                            }
                            return Pn(n, o, u, r, d)
                        }),
                        Fg = ve(function (n, u, r) {
                            var o = w | v;
                            if (r.length) {
                                var d = ni(r, ji(Fg));
                                o |= U
                            }
                            return Pn(u, o, n, r, d)
                        });
                    function _g(n, u, r) {
                        u = r ? i : u;
                        var o = Pn(n, R, i, i, i, i, i, u);
                        return o.placeholder = _g.placeholder, o
                    }
                    function Rg(n, u, r) {
                        u = r ? i : u;
                        var o = Pn(n, V, i, i, i, i, i, u);
                        return o.placeholder = Rg.placeholder, o
                    }
                    function Lg(n, u, r) {
                        var o, d, E, N, M, I, K = 0,
                            H = !1,
                            Z = !1,
                            ie = !0;
                        if (typeof n != "function") throw new an(c);
                        u = ln(u) || 0, qe(r) && (H = !!r.leading, Z = "maxWait" in r, E = Z ? ra(ln(r.maxWait) || 0, u) : E, ie = "trailing" in r ? !!r.trailing : ie);
                        function ce(na) {
                            var hn = o,
                                Un = d;
                            return o = d = i, K = na, N = n.apply(Un, hn), N
                        }
                        function Ee(na) {
                            return K = na, M = Ru(Te, u), H ? ce(na) : N
                        }
                        function Be(na) {
                            var hn = na - I,
                                Un = na - K,
                                ed = u - hn;
                            return Z ? pa(ed, E - Un) : ed
                        }
                        function he(na) {
                            var hn = na - I,
                                Un = na - K;
                            return I === i || hn >= u || hn < 0 || Z && Un >= E
                        }
                        function Te() {
                            var na = jt();
                            if (he(na)) return _e(na);
                            M = Ru(Te, Be(na))
                        }
                        function _e(na) {
                            return M = i, ie && o ? ce(na) : (o = d = i, N)
                        }
                        function Xa() {
                            M !== i && Yc(M), K = 0, o = I = d = M = i
                        }
                        function Ba() {
                            return M === i ? N : _e(jt())
                        }
                        function Wa() {
                            var na = jt(),
                                hn = he(na);
                            if (o = arguments, d = this, I = na, hn) {
                                if (M === i) return Ee(I);
                                if (Z) return Yc(M), M = Ru(Te, u), ce(I)
                            }
                            return M === i && (M = Ru(Te, u)), N
                        }
                        return Wa.cancel = Xa, Wa.flush = Ba, Wa
                    }
                    var Ey = ve(function (n, u) {
                            return wc(n, 1, u)
                        }),
                        py = ve(function (n, u, r) {
                            return wc(n, ln(u) || 0, r)
                        });
                    function Ay(n) {
                        return Pn(n, L)
                    }
                    function qt(n, u) {
                        if (typeof n != "function" || u != null && typeof u != "function") throw new an(c);
                        var r = function () {
                            var o = arguments,
                                d = u ? u.apply(this, o) : o[0],
                                E = r.cache;
                            if (E.has(d)) return E.get(d);
                            var N = n.apply(this, o);
                            return r.cache = E.set(d, N) || E, N
                        };
                        return r.cache = new(qt.Cache || Rn), r
                    }
                    qt.Cache = Rn;
                    function Qt(n) {
                        if (typeof n != "function") throw new an(c);
                        return function () {
                            var u = arguments;
                            switch (u.length) {
                            case 0:
                                return !n.call(this);
                            case 1:
                                return !n.call(this, u[0]);
                            case 2:
                                return !n.call(this, u[0], u[1]);
                            case 3:
                                return !n.call(this, u[0], u[1], u[2])
                            }
                            return !n.apply(this, u)
                        }
                    }
                    function Ny(n) {
                        return xg(2, n)
                    }
                    var yy = rA(function (n, u) {
                            u = u.length == 1 && Me(u[0]) ? je(u[0], Za(me())) : je(ma(u, 1), Za(me()));
                            var r = u.length;
                            return ve(function (o) {
                                for (var d = -1, E = pa(o.length, r); ++d < E;) o[d] = u[d].call(this, o[d]);
                                return Ga(n, this, o)
                            })
                        }),
                        ts = ve(function (n, u) {
                            var r = ni(u, ji(ts));
                            return Pn(n, U, i, u, r)
                        }),
                        Pg = ve(function (n, u) {
                            var r = ni(u, ji(Pg));
                            return Pn(n, O, i, u, r)
                        }),
                        Cy = kn(function (n, u) {
                            return Pn(n, Q, i, i, i, u)
                        });
                    function My(n, u) {
                        if (typeof n != "function") throw new an(c);
                        return u = u === i ? u : we(u), ve(n, u)
                    }
                    function Sy(n, u) {
                        if (typeof n != "function") throw new an(c);
                        return u = u == null ? 0 : ra(we(u), 0), ve(function (r) {
                            var o = r[u],
                                d = li(r, 0, u);
                            return o && ai(d, o), Ga(n, this, d)
                        })
                    }
                    function wy(n, u, r) {
                        var o = !0,
                            d = !0;
                        if (typeof n != "function") throw new an(c);
                        return qe(r) && (o = "leading" in r ? !!r.leading : o, d = "trailing" in r ? !!r.trailing : d), Lg(n, u, {
                            leading: o,
                            maxWait: u,
                            trailing: d
                        })
                    }
                    function Iy(n) {
                        return Tg(n, 1)
                    }
                    function by(n, u) {
                        return ts(Gl(u), n)
                    }
                    function By() {
                        if (!arguments.length) return [];
                        var n = arguments[0];
                        return Me(n) ? n : [n]
                    }
                    function vy(n) {
                        return un(n, C)
                    }
                    function Dy(n, u) {
                        return u = typeof u == "function" ? u : i, un(n, C, u)
                    }
                    function Ty(n) {
                        return un(n, h | C)
                    }
                    function xy(n, u) {
                        return u = typeof u == "function" ? u : i, un(n, h | C, u)
                    }
                    function Fy(n, u) {
                        return u == null || Sc(n, u, sa(u))
                    }
                    function mn(n, u) {
                        return n === u || n !== n && u !== u
                    }
                    var _y = Yt(xl),
                        Ry = Yt(function (n, u) {
                            return n >= u
                        }),
                        bi = Dc(function () {
                            return arguments
                        }()) ? Dc : function (n) {
                            return Qe(n) && Ge.call(n, "callee") && !hc.call(n, "callee")
                        },
                        Me = T.isArray,
                        Ly = q0 ? Za(q0) : G4;
                    function Pa(n) {
                        return n != null && er(n.length) && !Kn(n)
                    }
                    function aa(n) {
                        return Qe(n) && Pa(n)
                    }
                    function Py(n) {
                        return n === !0 || n === !1 || Qe(n) && Ia(n) == An
                    }
                    var si = $p || Es,
                        ky = Q0 ? Za(Q0) : Z4;
                    function zy(n) {
                        return Qe(n) && n.nodeType === 1 && !Lu(n)
                    }
                    function Ky(n) {
                        if (n == null) return !0;
                        if (Pa(n) && (Me(n) || typeof n == "string" || typeof n.splice == "function" || si(n) || qi(n) || bi(n))) return !n.length;
                        var u = Aa(n);
                        if (u == S || u == q) return !n.size;
                        if (_u(n)) return !Rl(n).length;
                        for (var r in n)
                            if (Ge.call(n, r)) return !1;
                        return !0
                    }
                    function Hy(n, u) {
                        return Tu(n, u)
                    }
                    function Uy(n, u, r) {
                        r = typeof r == "function" ? r : i;
                        var o = r ? r(n, u) : i;
                        return o === i ? Tu(n, u, i, r) : !!o
                    }
                    function rs(n) {
                        if (!Qe(n)) return !1;
                        var u = Ia(n);
                        return u == Nn || u == ft || typeof n.message == "string" && typeof n.name == "string" && !Lu(n)
                    }
                    function Oy(n) {
                        return typeof n == "number" && pc(n)
                    }
                    function Kn(n) {
                        if (!qe(n)) return !1;
                        var u = Ia(n);
                        return u == yu || u == y || u == pi || u == ne
                    }
                    function kg(n) {
                        return typeof n == "number" && n == we(n)
                    }
                    function er(n) {
                        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= X
                    }
                    function qe(n) {
                        var u = typeof n;
                        return n != null && (u == "object" || u == "function")
                    }
                    function Qe(n) {
                        return n != null && typeof n == "object"
                    }
                    var zg = ec ? Za(ec) : V4;
                    function Gy(n, u) {
                        return n === u || _l(n, u, $l(u))
                    }
                    function Zy(n, u, r) {
                        return r = typeof r == "function" ? r : i, _l(n, u, $l(u), r)
                    }
                    function Yy(n) {
                        return Kg(n) && n != +n
                    }
                    function Vy(n) {
                        if (DA(n)) throw new Ce(s);
                        return Tc(n)
                    }
                    function Xy(n) {
                        return n === null
                    }
                    function Wy(n) {
                        return n == null
                    }
                    function Kg(n) {
                        return typeof n == "number" || Qe(n) && Ia(n) == _
                    }
                    function Lu(n) {
                        if (!Qe(n) || Ia(n) != G) return !1;
                        var u = Bt(n);
                        if (u === null) return !0;
                        var r = Ge.call(u, "constructor") && u.constructor;
                        return typeof r == "function" && r instanceof r && St.call(r) == Zp
                    }
                    var ls = ac ? Za(ac) : X4;
                    function Jy(n) {
                        return kg(n) && n >= -X && n <= X
                    }
                    var Hg = nc ? Za(nc) : W4;
                    function ar(n) {
                        return typeof n == "string" || !Me(n) && Qe(n) && Ia(n) == J
                    }
                    function Va(n) {
                        return typeof n == "symbol" || Qe(n) && Ia(n) == de
                    }
                    var qi = ic ? Za(ic) : J4;
                    function $y(n) {
                        return n === i
                    }
                    function jy(n) {
                        return Qe(n) && Aa(n) == oe
                    }
                    function qy(n) {
                        return Qe(n) && Ia(n) == Ae
                    }
                    var Qy = Yt(Ll),
                        eC = Yt(function (n, u) {
                            return n <= u
                        });
                    function Ug(n) {
                        if (!n) return [];
                        if (Pa(n)) return ar(n) ? dn(n) : La(n);
                        if (Mu && n[Mu]) return Fp(n[Mu]());
                        var u = Aa(n),
                            r = u == S ? Ml : u == q ? yt : Qi;
                        return r(n)
                    }
                    function Hn(n) {
                        if (!n) return n === 0 ? n : 0;
                        if (n = ln(n), n === D || n === -D) {
                            var u = n < 0 ? -1 : 1;
                            return u * ee
                        }
                        return n === n ? n : 0
                    }
                    function we(n) {
                        var u = Hn(n),
                            r = u % 1;
                        return u === u ? r ? u - r : u : 0
                    }
                    function Og(n) {
                        return n ? Mi(we(n), 0, Ne) : 0
                    }
                    function ln(n) {
                        if (typeof n == "number") return n;
                        if (Va(n)) return xe;
                        if (qe(n)) {
                            var u = typeof n.valueOf == "function" ? n.valueOf() : n;
                            n = qe(u) ? u + "" : u
                        }
                        if (typeof n != "string") return n === 0 ? n : +n;
                        n = n.replace(D0, "");
                        var r = LE.test(n);
                        return r || kE.test(n) ? hp(n.slice(2), r ? 2 : 8) : RE.test(n) ? xe : +n
                    }
                    function Gg(n) {
                        return Cn(n, ka(n))
                    }
                    function aC(n) {
                        return n ? Mi(we(n), -X, X) : n === 0 ? n : 0
                    }
                    function Ke(n) {
                        return n == null ? "" : Ya(n)
                    }
                    var nC = Ji(function (n, u) {
                            if (_u(u) || Pa(u)) {
                                Cn(u, sa(u), n);
                                return
                            }
                            for (var r in u) Ge.call(u, r) && Bu(n, r, u[r])
                        }),
                        Zg = Ji(function (n, u) {
                            Cn(u, ka(u), n)
                        }),
                        nr = Ji(function (n, u, r, o) {
                            Cn(u, ka(u), n, o)
                        }),
                        iC = Ji(function (n, u, r, o) {
                            Cn(u, sa(u), n, o)
                        }),
                        uC = kn(vl);
                    function tC(n, u) {
                        var r = Wi(n);
                        return u == null ? r : Mc(r, u)
                    }
                    var rC = ve(function (n, u) {
                            n = Ze(n);
                            var r = -1,
                                o = u.length,
                                d = o > 2 ? u[2] : i;
                            for (d && ba(u[0], u[1], d) && (o = 1); ++r < o;)
                                for (var E = u[r], N = ka(E), M = -1, I = N.length; ++M < I;) {
                                    var K = N[M],
                                        H = n[K];
                                    (H === i || mn(H, Yi[K]) && !Ge.call(n, K)) && (n[K] = E[K])
                                }
                            return n
                        }),
                        lC = ve(function (n) {
                            return n.push(i, lg), Ga(Yg, i, n)
                        });
                    function sC(n, u) {
                        return tc(n, me(u, 3), yn)
                    }
                    function oC(n, u) {
                        return tc(n, me(u, 3), Tl)
                    }
                    function cC(n, u) {
                        return n == null ? n : Dl(n, me(u, 3), ka)
                    }
                    function gC(n, u) {
                        return n == null ? n : Bc(n, me(u, 3), ka)
                    }
                    function dC(n, u) {
                        return n && yn(n, me(u, 3))
                    }
                    function fC(n, u) {
                        return n && Tl(n, me(u, 3))
                    }
                    function mC(n) {
                        return n == null ? [] : kt(n, sa(n))
                    }
                    function hC(n) {
                        return n == null ? [] : kt(n, ka(n))
                    }
                    function ss(n, u, r) {
                        var o = n == null ? i : Si(n, u);
                        return o === i ? r : o
                    }
                    function EC(n, u) {
                        return n != null && cg(n, u, K4)
                    }
                    function os(n, u) {
                        return n != null && cg(n, u, H4)
                    }
                    var pC = ng(function (n, u, r) {
                            u != null && typeof u.toString != "function" && (u = wt.call(u)), n[u] = r
                        }, gs(za)),
                        AC = ng(function (n, u, r) {
                            u != null && typeof u.toString != "function" && (u = wt.call(u)), Ge.call(n, u) ? n[u].push(r) : n[u] = [r]
                        }, me),
                        NC = ve(Du);
                    function sa(n) {
                        return Pa(n) ? yc(n) : Rl(n)
                    }
                    function ka(n) {
                        return Pa(n) ? yc(n, !0) : $4(n)
                    }
                    function yC(n, u) {
                        var r = {};
                        return u = me(u, 3), yn(n, function (o, d, E) {
                            Ln(r, u(o, d, E), o)
                        }), r
                    }
                    function CC(n, u) {
                        var r = {};
                        return u = me(u, 3), yn(n, function (o, d, E) {
                            Ln(r, d, u(o, d, E))
                        }), r
                    }
                    var MC = Ji(function (n, u, r) {
                            zt(n, u, r)
                        }),
                        Yg = Ji(function (n, u, r, o) {
                            zt(n, u, r, o)
                        }),
                        SC = kn(function (n, u) {
                            var r = {};
                            if (n == null) return r;
                            var o = !1;
                            u = je(u, function (E) {
                                return E = ri(E, n), o || (o = E.length > 1), E
                            }), Cn(n, Wl(n), r), o && (r = un(r, h | p | C, pA));
                            for (var d = u.length; d--;) Hl(r, u[d]);
                            return r
                        });
                    function wC(n, u) {
                        return Vg(n, Qt(me(u)))
                    }
                    var IC = kn(function (n, u) {
                        return n == null ? {} : q4(n, u)
                    });
                    function Vg(n, u) {
                        if (n == null) return {};
                        var r = je(Wl(n), function (o) {
                            return [o]
                        });
                        return u = me(u), kc(n, r, function (o, d) {
                            return u(o, d[0])
                        })
                    }
                    function bC(n, u, r) {
                        u = ri(u, n);
                        var o = -1,
                            d = u.length;
                        for (d || (d = 1, n = i); ++o < d;) {
                            var E = n == null ? i : n[Mn(u[o])];
                            E === i && (o = d, E = r), n = Kn(E) ? E.call(n) : E
                        }
                        return n
                    }
                    function BC(n, u, r) {
                        return n == null ? n : xu(n, u, r)
                    }
                    function vC(n, u, r, o) {
                        return o = typeof o == "function" ? o : i, n == null ? n : xu(n, u, r, o)
                    }
                    var Xg = tg(sa),
                        Wg = tg(ka);
                    function DC(n, u, r) {
                        var o = Me(n),
                            d = o || si(n) || qi(n);
                        if (u = me(u, 4), r == null) {
                            var E = n && n.constructor;
                            d ? r = o ? new E : [] : qe(n) ? r = Kn(E) ? Wi(Bt(n)) : {} : r = {}
                        }
                        return (d ? en : yn)(n, function (N, M, I) {
                            return u(r, N, M, I)
                        }), r
                    }
                    function TC(n, u) {
                        return n == null ? !0 : Hl(n, u)
                    }
                    function xC(n, u, r) {
                        return n == null ? n : Oc(n, u, Gl(r))
                    }
                    function FC(n, u, r, o) {
                        return o = typeof o == "function" ? o : i, n == null ? n : Oc(n, u, Gl(r), o)
                    }
                    function Qi(n) {
                        return n == null ? [] : Cl(n, sa(n))
                    }
                    function _C(n) {
                        return n == null ? [] : Cl(n, ka(n))
                    }
                    function RC(n, u, r) {
                        return r === i && (r = u, u = i), r !== i && (r = ln(r), r = r === r ? r : 0), u !== i && (u = ln(u), u = u === u ? u : 0), Mi(ln(n), u, r)
                    }
                    function LC(n, u, r) {
                        return u = Hn(u), r === i ? (r = u, u = 0) : r = Hn(r), n = ln(n), U4(n, u, r)
                    }
                    function PC(n, u, r) {
                        if (r && typeof r != "boolean" && ba(n, u, r) && (u = r = i), r === i && (typeof u == "boolean" ? (r = u, u = i) : typeof n == "boolean" && (r = n, n = i)), n === i && u === i ? (n = 0, u = 1) : (n = Hn(n), u === i ? (u = n, n = 0) : u = Hn(u)), n > u) {
                            var o = n;
                            n = u, u = o
                        }
                        if (r || n % 1 || u % 1) {
                            var d = Ac();
                            return pa(n + d * (u - n + mp("1e-" + ((d + "").length - 1))), u)
                        }
                        return kl(n, u)
                    }
                    var kC = $i(function (n, u, r) {
                        return u = u.toLowerCase(), n + (r ? Jg(u) : u)
                    });
                    function Jg(n) {
                        return cs(Ke(n).toLowerCase())
                    }
                    function $g(n) {
                        return n = Ke(n), n && n.replace(KE, Bp).replace(up, "")
                    }
                    function zC(n, u, r) {
                        n = Ke(n), u = Ya(u);
                        var o = n.length;
                        r = r === i ? o : Mi(we(r), 0, o);
                        var d = r;
                        return r -= u.length, r >= 0 && n.slice(r, d) == u
                    }
                    function KC(n) {
                        return n = Ke(n), n && yE.test(n) ? n.replace(B0, vp) : n
                    }
                    function HC(n) {
                        return n = Ke(n), n && bE.test(n) ? n.replace(rl, "\\$&") : n
                    }
                    var UC = $i(function (n, u, r) {
                            return n + (r ? "-" : "") + u.toLowerCase()
                        }),
                        OC = $i(function (n, u, r) {
                            return n + (r ? " " : "") + u.toLowerCase()
                        }),
                        GC = Qc("toLowerCase");
                    function ZC(n, u, r) {
                        n = Ke(n), u = we(u);
                        var o = u ? Gi(n) : 0;
                        if (!u || o >= u) return n;
                        var d = (u - o) / 2;
                        return Zt(xt(d), r) + n + Zt(Tt(d), r)
                    }
                    function YC(n, u, r) {
                        n = Ke(n), u = we(u);
                        var o = u ? Gi(n) : 0;
                        return u && o < u ? n + Zt(u - o, r) : n
                    }
                    function VC(n, u, r) {
                        n = Ke(n), u = we(u);
                        var o = u ? Gi(n) : 0;
                        return u && o < u ? Zt(u - o, r) + n : n
                    }
                    function XC(n, u, r) {
                        return r || u == null ? u = 0 : u && (u = +u), e4(Ke(n).replace(T0, ""), u || 0)
                    }
                    function WC(n, u, r) {
                        return (r ? ba(n, u, r) : u === i) ? u = 1 : u = we(u), zl(Ke(n), u)
                    }
                    function JC() {
                        var n = arguments,
                            u = Ke(n[0]);
                        return n.length < 3 ? u : u.replace(n[1], n[2])
                    }
                    var $C = $i(function (n, u, r) {
                        return n + (r ? "_" : "") + u.toLowerCase()
                    });
                    function jC(n, u, r) {
                        return r && typeof r != "number" && ba(n, u, r) && (u = r = i), r = r === i ? Ne : r >>> 0, r ? (n = Ke(n), n && (typeof u == "string" || u != null && !ls(u)) && (u = Ya(u), !u && Oi(n)) ? li(dn(n), 0, r) : n.split(u, r)) : []
                    }
                    var qC = $i(function (n, u, r) {
                        return n + (r ? " " : "") + cs(u)
                    });
                    function QC(n, u, r) {
                        return n = Ke(n), r = r == null ? 0 : Mi(we(r), 0, n.length), u = Ya(u), n.slice(r, r + u.length) == u
                    }
                    function e1(n, u, r) {
                        var o = m.templateSettings;
                        r && ba(n, u, r) && (u = i), n = Ke(n), u = nr({}, u, o, rg);
                        var d = nr({}, u.imports, o.imports, rg),
                            E = sa(d),
                            N = Cl(d, E),
                            M, I, K = 0,
                            H = u.interpolate || ht,
                            Z = "__p += '",
                            ie = Sl((u.escape || ht).source + "|" + H.source + "|" + (H === v0 ? _E : ht).source + "|" + (u.evaluate || ht).source + "|$", "g"),
                            ce = "//# sourceURL=" + (Ge.call(u, "sourceURL") ? (u.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++op + "]") + `
`;
                        n.replace(ie, function (he, Te, _e, Xa, Ba, Wa) {
                            return _e || (_e = Xa), Z += n.slice(K, Wa).replace(HE, Dp), Te && (M = !0, Z += `' +
__e(` + Te + `) +
'`), Ba && (I = !0, Z += `';
` + Ba + `;
__p += '`), _e && (Z += `' +
((__t = (` + _e + `)) == null ? '' : __t) +
'`), K = Wa + he.length, he
                        }), Z += `';
`;
                        var Ee = Ge.call(u, "variable") && u.variable;
                        Ee || (Z = `with (obj) {
` + Z + `
}
`), Z = (I ? Z.replace(mt, "") : Z).replace(pE, "$1").replace(AE, "$1;"), Z = "function(" + (Ee || "obj") + `) {
` + (Ee ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (M ? ", __e = _.escape" : "") + (I ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Z + `return __p
}`;
                        var Be = qg(function () {
                            return ze(E, ce + "return " + Z).apply(i, N)
                        });
                        if (Be.source = Z, rs(Be)) throw Be;
                        return Be
                    }
                    function a1(n) {
                        return Ke(n).toLowerCase()
                    }
                    function n1(n) {
                        return Ke(n).toUpperCase()
                    }
                    function i1(n, u, r) {
                        if (n = Ke(n), n && (r || u === i)) return n.replace(D0, "");
                        if (!n || !(u = Ya(u))) return n;
                        var o = dn(n),
                            d = dn(u),
                            E = oc(o, d),
                            N = cc(o, d) + 1;
                        return li(o, E, N).join("")
                    }
                    function u1(n, u, r) {
                        if (n = Ke(n), n && (r || u === i)) return n.replace(BE, "");
                        if (!n || !(u = Ya(u))) return n;
                        var o = dn(n),
                            d = cc(o, dn(u)) + 1;
                        return li(o, 0, d).join("")
                    }
                    function t1(n, u, r) {
                        if (n = Ke(n), n && (r || u === i)) return n.replace(T0, "");
                        if (!n || !(u = Ya(u))) return n;
                        var o = dn(n),
                            d = oc(o, dn(u));
                        return li(o, d).join("")
                    }
                    function r1(n, u) {
                        var r = k,
                            o = $;
                        if (qe(u)) {
                            var d = "separator" in u ? u.separator : d;
                            r = "length" in u ? we(u.length) : r, o = "omission" in u ? Ya(u.omission) : o
                        }
                        n = Ke(n);
                        var E = n.length;
                        if (Oi(n)) {
                            var N = dn(n);
                            E = N.length
                        }
                        if (r >= E) return n;
                        var M = r - Gi(o);
                        if (M < 1) return o;
                        var I = N ? li(N, 0, M).join("") : n.slice(0, M);
                        if (d === i) return I + o;
                        if (N && (M += I.length - M), ls(d)) {
                            if (n.slice(M).search(d)) {
                                var K, H = I;
                                for (d.global || (d = Sl(d.source, Ke(x0.exec(d)) + "g")), d.lastIndex = 0; K = d.exec(H);) var Z = K.index;
                                I = I.slice(0, Z === i ? M : Z)
                            }
                        } else if (n.indexOf(Ya(d), M) != M) {
                            var ie = I.lastIndexOf(d);
                            ie > -1 && (I = I.slice(0, ie))
                        }
                        return I + o
                    }
                    function l1(n) {
                        return n = Ke(n), n && NE.test(n) ? n.replace(b0, Pp) : n
                    }
                    var s1 = $i(function (n, u, r) {
                            return n + (r ? " " : "") + u.toUpperCase()
                        }),
                        cs = Qc("toUpperCase");
                    function jg(n, u, r) {
                        return n = Ke(n), u = r ? i : u, u === i ? xp(n) ? Kp(n) : Mp(n) : n.match(u) || []
                    }
                    var qg = ve(function (n, u) {
                            try {
                                return Ga(n, i, u)
                            } catch (r) {
                                return rs(r) ? r : new Ce(r)
                            }
                        }),
                        o1 = kn(function (n, u) {
                            return en(u, function (r) {
                                r = Mn(r), Ln(n, r, us(n[r], n))
                            }), n
                        });
                    function c1(n) {
                        var u = n == null ? 0 : n.length,
                            r = me();
                        return n = u ? je(n, function (o) {
                            if (typeof o[1] != "function") throw new an(c);
                            return [r(o[0]), o[1]]
                        }) : [], ve(function (o) {
                            for (var d = -1; ++d < u;) {
                                var E = n[d];
                                if (Ga(E[0], this, o)) return Ga(E[1], this, o)
                            }
                        })
                    }
                    function g1(n) {
                        return P4(un(n, h))
                    }
                    function gs(n) {
                        return function () {
                            return n
                        }
                    }
                    function d1(n, u) {
                        return n == null || n !== n ? u : n
                    }
                    var f1 = ag(),
                        m1 = ag(!0);
                    function za(n) {
                        return n
                    }
                    function ds(n) {
                        return xc(typeof n == "function" ? n : un(n, h))
                    }
                    function h1(n) {
                        return _c(un(n, h))
                    }
                    function E1(n, u) {
                        return Rc(n, un(u, h))
                    }
                    var p1 = ve(function (n, u) {
                            return function (r) {
                                return Du(r, n, u)
                            }
                        }),
                        A1 = ve(function (n, u) {
                            return function (r) {
                                return Du(n, r, u)
                            }
                        });
                    function fs(n, u, r) {
                        var o = sa(u),
                            d = kt(u, o);
                        r == null && !(qe(u) && (d.length || !o.length)) && (r = u, u = n, n = this, d = kt(u, sa(u)));
                        var E = !(qe(r) && "chain" in r) || !!r.chain,
                            N = Kn(n);
                        return en(d, function (M) {
                            var I = u[M];
                            n[M] = I, N && (n.prototype[M] = function () {
                                var K = this.__chain__;
                                if (E || K) {
                                    var H = n(this.__wrapped__),
                                        Z = H.__actions__ = La(this.__actions__);
                                    return Z.push({
                                        func: I,
                                        args: arguments,
                                        thisArg: n
                                    }), H.__chain__ = K, H
                                }
                                return I.apply(n, ai([this.value()], arguments))
                            })
                        }), n
                    }
                    function N1() {
                        return fa._ === this && (fa._ = Yp), this
                    }
                    function ms() {}
                    function y1(n) {
                        return n = we(n), ve(function (u) {
                            return Lc(u, n)
                        })
                    }
                    var C1 = Yl(je),
                        M1 = Yl(uc),
                        S1 = Yl(El);
                    function Qg(n) {
                        return ql(n) ? pl(Mn(n)) : Q4(n)
                    }
                    function w1(n) {
                        return function (u) {
                            return n == null ? i : Si(n, u)
                        }
                    }
                    var I1 = ig(),
                        b1 = ig(!0);
                    function hs() {
                        return []
                    }
                    function Es() {
                        return !1
                    }
                    function B1() {
                        return {}
                    }
                    function v1() {
                        return ""
                    }
                    function D1() {
                        return !0
                    }
                    function T1(n, u) {
                        if (n = we(n), n < 1 || n > X) return [];
                        var r = Ne,
                            o = pa(n, Ne);
                        u = me(u), n -= Ne;
                        for (var d = yl(o, u); ++r < n;) u(r);
                        return d
                    }
                    function x1(n) {
                        return Me(n) ? je(n, Mn) : Va(n) ? [n] : La(Ng(Ke(n)))
                    }
                    function F1(n) {
                        var u = ++Gp;
                        return Ke(n) + u
                    }
                    var _1 = Gt(function (n, u) {
                            return n + u
                        }, 0),
                        R1 = Vl("ceil"),
                        L1 = Gt(function (n, u) {
                            return n / u
                        }, 1),
                        P1 = Vl("floor");
                    function k1(n) {
                        return n && n.length ? Pt(n, za, xl) : i
                    }
                    function z1(n, u) {
                        return n && n.length ? Pt(n, me(u, 2), xl) : i
                    }
                    function K1(n) {
                        return lc(n, za)
                    }
                    function H1(n, u) {
                        return lc(n, me(u, 2))
                    }
                    function U1(n) {
                        return n && n.length ? Pt(n, za, Ll) : i
                    }
                    function O1(n, u) {
                        return n && n.length ? Pt(n, me(u, 2), Ll) : i
                    }
                    var G1 = Gt(function (n, u) {
                            return n * u
                        }, 1),
                        Z1 = Vl("round"),
                        Y1 = Gt(function (n, u) {
                            return n - u
                        }, 0);
                    function V1(n) {
                        return n && n.length ? Nl(n, za) : 0
                    }
                    function X1(n, u) {
                        return n && n.length ? Nl(n, me(u, 2)) : 0
                    }
                    return m.after = hy, m.ary = Tg, m.assign = nC, m.assignIn = Zg, m.assignInWith = nr, m.assignWith = iC, m.at = uC, m.before = xg, m.bind = us, m.bindAll = o1, m.bindKey = Fg, m.castArray = By, m.chain = Bg, m.chunk = PA, m.compact = kA, m.concat = zA, m.cond = c1, m.conforms = g1, m.constant = gs, m.countBy = VN, m.create = tC, m.curry = _g, m.curryRight = Rg, m.debounce = Lg, m.defaults = rC, m.defaultsDeep = lC, m.defer = Ey, m.delay = py, m.difference = KA, m.differenceBy = HA, m.differenceWith = UA, m.drop = OA, m.dropRight = GA, m.dropRightWhile = ZA, m.dropWhile = YA, m.fill = VA, m.filter = WN, m.flatMap = jN, m.flatMapDeep = qN, m.flatMapDepth = QN, m.flatten = Sg, m.flattenDeep = XA, m.flattenDepth = WA, m.flip = Ay, m.flow = f1, m.flowRight = m1, m.fromPairs = JA, m.functions = mC, m.functionsIn = hC, m.groupBy = ey, m.initial = jA, m.intersection = qA, m.intersectionBy = QA, m.intersectionWith = eN, m.invert = pC, m.invertBy = AC, m.invokeMap = ny, m.iteratee = ds, m.keyBy = iy, m.keys = sa, m.keysIn = ka, m.map = $t, m.mapKeys = yC, m.mapValues = CC, m.matches = h1, m.matchesProperty = E1, m.memoize = qt, m.merge = MC, m.mergeWith = Yg, m.method = p1, m.methodOf = A1, m.mixin = fs, m.negate = Qt, m.nthArg = y1, m.omit = SC, m.omitBy = wC, m.once = Ny, m.orderBy = uy, m.over = C1, m.overArgs = yy, m.overEvery = M1, m.overSome = S1, m.partial = ts, m.partialRight = Pg, m.partition = ty, m.pick = IC, m.pickBy = Vg, m.property = Qg, m.propertyOf = w1, m.pull = uN, m.pullAll = Ig, m.pullAllBy = tN, m.pullAllWith = rN, m.pullAt = lN, m.range = I1, m.rangeRight = b1, m.rearg = Cy, m.reject = sy, m.remove = sN, m.rest = My, m.reverse = ns, m.sampleSize = cy, m.set = BC, m.setWith = vC, m.shuffle = gy, m.slice = oN, m.sortBy = my, m.sortedUniq = EN, m.sortedUniqBy = pN, m.split = jC, m.spread = Sy, m.tail = AN, m.take = NN, m.takeRight = yN, m.takeRightWhile = CN, m.takeWhile = MN, m.tap = kN, m.throttle = wy, m.thru = Jt, m.toArray = Ug, m.toPairs = Xg, m.toPairsIn = Wg, m.toPath = x1, m.toPlainObject = Gg, m.transform = DC, m.unary = Iy, m.union = SN, m.unionBy = wN, m.unionWith = IN, m.uniq = bN, m.uniqBy = BN, m.uniqWith = vN, m.unset = TC, m.unzip = is, m.unzipWith = bg, m.update = xC, m.updateWith = FC, m.values = Qi, m.valuesIn = _C, m.without = DN, m.words = jg, m.wrap = by, m.xor = TN, m.xorBy = xN, m.xorWith = FN, m.zip = _N, m.zipObject = RN, m.zipObjectDeep = LN, m.zipWith = PN, m.entries = Xg, m.entriesIn = Wg, m.extend = Zg, m.extendWith = nr, fs(m, m), m.add = _1, m.attempt = qg, m.camelCase = kC, m.capitalize = Jg, m.ceil = R1, m.clamp = RC, m.clone = vy, m.cloneDeep = Ty, m.cloneDeepWith = xy, m.cloneWith = Dy, m.conformsTo = Fy, m.deburr = $g, m.defaultTo = d1, m.divide = L1, m.endsWith = zC, m.eq = mn, m.escape = KC, m.escapeRegExp = HC, m.every = XN, m.find = JN, m.findIndex = Cg, m.findKey = sC, m.findLast = $N, m.findLastIndex = Mg, m.findLastKey = oC, m.floor = P1, m.forEach = vg, m.forEachRight = Dg, m.forIn = cC, m.forInRight = gC, m.forOwn = dC, m.forOwnRight = fC, m.get = ss, m.gt = _y, m.gte = Ry, m.has = EC, m.hasIn = os, m.head = wg, m.identity = za, m.includes = ay, m.indexOf = $A, m.inRange = LC, m.invoke = NC, m.isArguments = bi, m.isArray = Me, m.isArrayBuffer = Ly, m.isArrayLike = Pa, m.isArrayLikeObject = aa, m.isBoolean = Py, m.isBuffer = si, m.isDate = ky, m.isElement = zy, m.isEmpty = Ky, m.isEqual = Hy, m.isEqualWith = Uy, m.isError = rs, m.isFinite = Oy, m.isFunction = Kn, m.isInteger = kg, m.isLength = er, m.isMap = zg, m.isMatch = Gy, m.isMatchWith = Zy, m.isNaN = Yy, m.isNative = Vy, m.isNil = Wy, m.isNull = Xy, m.isNumber = Kg, m.isObject = qe, m.isObjectLike = Qe, m.isPlainObject = Lu, m.isRegExp = ls, m.isSafeInteger = Jy, m.isSet = Hg, m.isString = ar, m.isSymbol = Va, m.isTypedArray = qi, m.isUndefined = $y, m.isWeakMap = jy, m.isWeakSet = qy, m.join = aN, m.kebabCase = UC, m.last = rn, m.lastIndexOf = nN, m.lowerCase = OC, m.lowerFirst = GC, m.lt = Qy, m.lte = eC, m.max = k1, m.maxBy = z1, m.mean = K1, m.meanBy = H1, m.min = U1, m.minBy = O1, m.stubArray = hs, m.stubFalse = Es, m.stubObject = B1, m.stubString = v1, m.stubTrue = D1, m.multiply = G1, m.nth = iN, m.noConflict = N1, m.noop = ms, m.now = jt, m.pad = ZC, m.padEnd = YC, m.padStart = VC, m.parseInt = XC, m.random = PC, m.reduce = ry, m.reduceRight = ly, m.repeat = WC, m.replace = JC, m.result = bC, m.round = Z1, m.runInContext = b, m.sample = oy, m.size = dy, m.snakeCase = $C, m.some = fy, m.sortedIndex = cN, m.sortedIndexBy = gN, m.sortedIndexOf = dN, m.sortedLastIndex = fN, m.sortedLastIndexBy = mN, m.sortedLastIndexOf = hN, m.startCase = qC, m.startsWith = QC, m.subtract = Y1, m.sum = V1, m.sumBy = X1, m.template = e1, m.times = T1, m.toFinite = Hn, m.toInteger = we, m.toLength = Og, m.toLower = a1, m.toNumber = ln, m.toSafeInteger = aC, m.toString = Ke, m.toUpper = n1, m.trim = i1, m.trimEnd = u1, m.trimStart = t1, m.truncate = r1, m.unescape = l1, m.uniqueId = F1, m.upperCase = s1, m.upperFirst = cs, m.each = vg, m.eachRight = Dg, m.first = wg, fs(m, function () {
                        var n = {};
                        return yn(m, function (u, r) {
                            Ge.call(m.prototype, r) || (n[r] = u)
                        }), n
                    }(), {
                        chain: !1
                    }), m.VERSION = t, en(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (n) {
                        m[n].placeholder = m
                    }), en(["drop", "take"], function (n, u) {
                        Fe.prototype[n] = function (r) {
                            r = r === i ? 1 : ra(we(r), 0);
                            var o = this.__filtered__ && !u ? new Fe(this) : this.clone();
                            return o.__filtered__ ? o.__takeCount__ = pa(r, o.__takeCount__) : o.__views__.push({
                                size: pa(r, Ne),
                                type: n + (o.__dir__ < 0 ? "Right" : "")
                            }), o
                        }, Fe.prototype[n + "Right"] = function (r) {
                            return this.reverse()[n](r).reverse()
                        }
                    }), en(["filter", "map", "takeWhile"], function (n, u) {
                        var r = u + 1,
                            o = r == te || r == re;
                        Fe.prototype[n] = function (d) {
                            var E = this.clone();
                            return E.__iteratees__.push({
                                iteratee: me(d, 3),
                                type: r
                            }), E.__filtered__ = E.__filtered__ || o, E
                        }
                    }), en(["head", "last"], function (n, u) {
                        var r = "take" + (u ? "Right" : "");
                        Fe.prototype[n] = function () {
                            return this[r](1).value()[0]
                        }
                    }), en(["initial", "tail"], function (n, u) {
                        var r = "drop" + (u ? "" : "Right");
                        Fe.prototype[n] = function () {
                            return this.__filtered__ ? new Fe(this) : this[r](1)
                        }
                    }), Fe.prototype.compact = function () {
                        return this.filter(za)
                    }, Fe.prototype.find = function (n) {
                        return this.filter(n).head()
                    }, Fe.prototype.findLast = function (n) {
                        return this.reverse().find(n)
                    }, Fe.prototype.invokeMap = ve(function (n, u) {
                        return typeof n == "function" ? new Fe(this) : this.map(function (r) {
                            return Du(r, n, u)
                        })
                    }), Fe.prototype.reject = function (n) {
                        return this.filter(Qt(me(n)))
                    }, Fe.prototype.slice = function (n, u) {
                        n = we(n);
                        var r = this;
                        return r.__filtered__ && (n > 0 || u < 0) ? new Fe(r) : (n < 0 ? r = r.takeRight(-n) : n && (r = r.drop(n)), u !== i && (u = we(u), r = u < 0 ? r.dropRight(-u) : r.take(u - n)), r)
                    }, Fe.prototype.takeRightWhile = function (n) {
                        return this.reverse().takeWhile(n).reverse()
                    }, Fe.prototype.toArray = function () {
                        return this.take(Ne)
                    }, yn(Fe.prototype, function (n, u) {
                        var r = /^(?:filter|find|map|reject)|While$/.test(u),
                            o = /^(?:head|last)$/.test(u),
                            d = m[o ? "take" + (u == "last" ? "Right" : "") : u],
                            E = o || /^find/.test(u);
                        d && (m.prototype[u] = function () {
                            var N = this.__wrapped__,
                                M = o ? [1] : arguments,
                                I = N instanceof Fe,
                                K = M[0],
                                H = I || Me(N),
                                Z = function (Te) {
                                    var _e = d.apply(m, ai([Te], M));
                                    return o && ie ? _e[0] : _e
                                };
                            H && r && typeof K == "function" && K.length != 1 && (I = H = !1);
                            var ie = this.__chain__,
                                ce = !!this.__actions__.length,
                                Ee = E && !ie,
                                Be = I && !ce;
                            if (!E && H) {
                                N = Be ? N : new Fe(this);
                                var he = n.apply(N, M);
                                return he.__actions__.push({
                                    func: Jt,
                                    args: [Z],
                                    thisArg: i
                                }), new nn(he, ie)
                            }
                            return Ee && Be ? n.apply(this, M) : (he = this.thru(Z), Ee ? o ? he.value()[0] : he.value() : he)
                        })
                    }), en(["pop", "push", "shift", "sort", "splice", "unshift"], function (n) {
                        var u = Ct[n],
                            r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
                            o = /^(?:pop|shift)$/.test(n);
                        m.prototype[n] = function () {
                            var d = arguments;
                            if (o && !this.__chain__) {
                                var E = this.value();
                                return u.apply(Me(E) ? E : [], d)
                            }
                            return this[r](function (N) {
                                return u.apply(Me(N) ? N : [], d)
                            })
                        }
                    }), yn(Fe.prototype, function (n, u) {
                        var r = m[u];
                        if (r) {
                            var o = r.name + "";
                            Ge.call(Xi, o) || (Xi[o] = []), Xi[o].push({
                                name: u,
                                func: r
                            })
                        }
                    }), Xi[Ot(i, v).name] = [{
                        name: "wrapper",
                        func: i
                    }], Fe.prototype.clone = l4, Fe.prototype.reverse = s4, Fe.prototype.value = o4, m.prototype.at = zN, m.prototype.chain = KN, m.prototype.commit = HN, m.prototype.next = UN, m.prototype.plant = GN, m.prototype.reverse = ZN, m.prototype.toJSON = m.prototype.valueOf = m.prototype.value = YN, m.prototype.first = m.prototype.head, Mu && (m.prototype[Mu] = ON), m
                },
                Zi = Hp();
            Ai ? ((Ai.exports = Zi)._ = Zi, dl._ = Zi) : fa._ = Zi
        }).call(Ob)
    }(Hu, Hu.exports)), Hu.exports
}
var Zb = Gb();
const dr = qn(Zb),
    Lo = {
        "en-IE": {
            0: ["Emily"],
            1: ["Connor"]
        },
        "ar-KW": {
            0: ["Noura"],
            1: ["Fahed"]
        },
        "sw-TZ": {
            0: ["Rehema"],
            1: ["Daudi"]
        },
        "ms-MY": {
            0: ["Yasmin"],
            1: ["Osman"]
        },
        "en-IN": {
            0: ["Neerja"],
            1: ["Prabhat"]
        },
        "es-BO": {
            0: ["Sofia"],
            1: ["Marcelo"]
        },
        "ar-SY": {
            0: ["Amany"],
            1: ["Laith"]
        },
        "en-ZA": {
            0: ["Leah"],
            1: ["Luke"]
        },
        "ta-IN": {
            0: ["Pallavi"],
            1: ["Valluvar"]
        },
        "el-GR": {
            0: ["Athina"],
            1: ["Nestoras"]
        },
        "nl-NL": {
            0: ["Fenna", "Colette"],
            1: ["Maarten"]
        },
        "zu-ZA": {
            0: ["Thando"],
            1: ["Themba"]
        },
        "ar-LB": {
            0: ["Layla"],
            1: ["Rami"]
        },
        "en-AU": {
            0: ["Natasha"],
            1: ["William"]
        },
        "he-IL": {
            0: ["Hila"],
            1: ["Avri"]
        },
        "mk-MK": {
            0: ["Marija"],
            1: ["Aleksandar"]
        },
        "ar-TN": {
            0: ["Reem"],
            1: ["Hedi"]
        },
        "ar-LY": {
            0: ["Iman"],
            1: ["Omar"]
        },
        "hu-HU": {
            0: ["Noemi"],
            1: ["Tamas"]
        },
        "ml-IN": {
            0: ["Sobhana"],
            1: ["Midhun"]
        },
        "es-SV": {
            0: ["Lorena"],
            1: ["Rodrigo"]
        },
        "es-CR": {
            0: ["Maria"],
            1: ["Juan"]
        },
        "es-CL": {
            0: ["Catalina"],
            1: ["Lorenzo"]
        },
        "fr-CA": {
            0: ["Sylvie"],
            1: ["Antoine", "Jean"]
        },
        "es-CO": {
            0: ["Salome"],
            1: ["Gonzalo"]
        },
        "jv-ID": {
            0: ["Siti"],
            1: ["Dimas"]
        },
        "pl-PL": {
            0: ["Zofia"],
            1: ["Marek"]
        },
        "pt-PT": {
            0: ["Raquel"],
            1: ["Duarte"]
        },
        "ar-EG": {
            0: ["Salma"],
            1: ["Shakir"]
        },
        "es-CU": {
            0: ["Belkys"],
            1: ["Manuel"]
        },
        "fr-BE": {
            0: ["Charline"],
            1: ["Gerard"]
        },
        "ga-IE": {
            0: ["Orla"],
            1: ["Colm"]
        },
        "cy-GB": {
            0: ["Nia"],
            1: ["Aled"]
        },
        "ar-DZ": {
            0: ["Amina"],
            1: ["Ismael"]
        },
        "en-SG": {
            0: ["Luna"],
            1: ["Wayne"]
        },
        "ar-MA": {
            0: ["Mouna"],
            1: ["Jamal"]
        },
        "fil-PH": {
            0: ["Blessica"],
            1: ["Angelo"]
        },
        "ta-SG": {
            0: ["Venba"],
            1: ["Anbu"]
        },
        "en-KE": {
            0: ["Asilia"],
            1: ["Chilemba"]
        },
        "es-HN": {
            0: ["Karla"],
            1: ["Carlos"]
        },
        "nb-NO": {
            0: ["Pernille"],
            1: ["Finn"]
        },
        "hr-HR": {
            0: ["Gabrijela"],
            1: ["Srecko"]
        },
        "es-PR": {
            0: ["Karina"],
            1: ["Victor"]
        },
        "af-ZA": {
            0: ["Adri"],
            1: ["Willem"]
        },
        "gl-ES": {
            0: ["Sabela"],
            1: ["Roi"]
        },
        "es-PY": {
            0: ["Tania"],
            1: ["Mario"]
        },
        "de-AT": {
            0: ["Ingrid"],
            1: ["Jonas"]
        },
        "ta-LK": {
            0: ["Saranya"],
            1: ["Kumar"]
        },
        "is-IS": {
            0: ["Gudrun"],
            1: ["Gunnar"]
        },
        "my-MM": {
            0: ["Nilar"],
            1: ["Thiha"]
        },
        "bg-BG": {
            0: ["Kalina"],
            1: ["Borislav"]
        },
        "cs-CZ": {
            0: ["Vlasta"],
            1: ["Antonin"]
        },
        "en-PH": {
            0: ["Rosa"],
            1: ["James"]
        },
        "uz-UZ": {
            0: ["Madina"],
            1: ["Sardor"]
        },
        "zh-TW": {
            0: ["HsiaoYu", "HsiaoChen"],
            1: ["YunJhe"]
        },
        "en-HK": {
            0: ["Yan"],
            1: ["Sam"]
        },
        "ko-KR": {
            0: ["SunHi"],
            1: ["InJoon"]
        },
        "sk-SK": {
            0: ["Viktoria"],
            1: ["Lukas"]
        },
        "ps-AF": {
            0: ["Latifa"],
            1: ["GulNawaz"]
        },
        "ar-OM": {
            0: ["Aysha"],
            1: ["Abdullah"]
        },
        "ru-RU": {
            0: ["Svetlana"],
            1: ["Dmitry"]
        },
        "sq-AL": {
            0: ["Anila"],
            1: ["Ilir"]
        },
        "es-AR": {
            0: ["Elena"],
            1: ["Tomas"]
        },
        "sv-SE": {
            0: ["Sofie"],
            1: ["Mattias"]
        },
        "am-ET": {
            0: ["Mekdes"],
            1: ["Ameha"]
        },
        "mr-IN": {
            0: ["Aarohi"],
            1: ["Manohar"]
        },
        "da-DK": {
            0: ["Christel"],
            1: ["Jeppe"]
        },
        "mn-MN": {
            0: ["Yesui"],
            1: ["Bataa"]
        },
        "uk-UA": {
            0: ["Polina"],
            1: ["Ostap"]
        },
        "en-US": {
            0: ["Michelle", "Ana", "Aria", "Jenny"],
            1: ["Roger", "Christopher", "Eric", "Steffan", "Guy"]
        },
        "ta-MY": {
            0: ["Kani"],
            1: ["Surya"]
        },
        "gu-IN": {
            0: ["Dhwani"],
            1: ["Niranjan"]
        },
        "lv-LV": {
            0: ["Everita"],
            1: ["Nils"]
        },
        "nl-BE": {
            0: ["Dena"],
            1: ["Arnaud"]
        },
        "zh-CN": {
            0: ["Xiaoxiao", "Xiaoyi"],
            1: ["Yunyang", "Yunxia", "Yunxi", "Yunjian"]
        },
        "ur-PK": {
            0: ["Uzma"],
            1: ["Asad"]
        },
        "te-IN": {
            0: ["Shruti"],
            1: ["Mohan"]
        },
        "hi-IN": {
            0: ["Swara"],
            1: ["Madhur"]
        },
        "en-NG": {
            0: ["Ezinne"],
            1: ["Abeo"]
        },
        "de-CH": {
            0: ["Leni"],
            1: ["Jan"]
        },
        "ja-JP": {
            0: ["Nanami"],
            1: ["Keita"]
        },
        "bs-BA": {
            0: ["Vesna"],
            1: ["Goran"]
        },
        "ar-YE": {
            0: ["Maryam"],
            1: ["Saleh"]
        },
        "ne-NP": {
            0: ["Hemkala"],
            1: ["Sagar"]
        },
        "ka-GE": {
            0: ["Eka"],
            1: ["Giorgi"]
        },
        "ar-QA": {
            0: ["Amal"],
            1: ["Moaz"]
        },
        "es-GT": {
            0: ["Marta"],
            1: ["Andres"]
        },
        "es-GQ": {
            0: ["Teresa"],
            1: ["Javier"]
        },
        "es-PE": {
            0: ["Camila"],
            1: ["Alex"]
        },
        "en-NZ": {
            0: ["Molly"],
            1: ["Mitchell"]
        },
        "fa-IR": {
            0: ["Dilara"],
            1: ["Farid"]
        },
        "es-PA": {
            0: ["Margarita"],
            1: ["Roberto"]
        },
        "ro-RO": {
            0: ["Alina"],
            1: ["Emil"]
        },
        "mt-MT": {
            0: ["Grace"],
            1: ["Joseph"]
        },
        "et-EE": {
            0: ["Anu"],
            1: ["Kert"]
        },
        "tr-TR": {
            0: ["Emel"],
            1: ["Ahmet"]
        },
        "fr-FR": {
            0: ["Denise", "Eloise"],
            1: ["Henri"]
        },
        "vi-VN": {
            0: ["HoaiMy"],
            1: ["NamMinh"]
        },
        "en-GB": {
            0: ["Maisie", "Libby", "Sonia"],
            1: ["Thomas", "Ryan"]
        },
        "km-KH": {
            0: ["Sreymom"],
            1: ["Piseth"]
        },
        "fi-FI": {
            0: ["Noora"],
            1: ["Harri"]
        },
        "az-AZ": {
            0: ["Banu"],
            1: ["Babek"]
        },
        "en-CA": {
            0: ["Clara"],
            1: ["Liam"]
        },
        "lt-LT": {
            0: ["Ona"],
            1: ["Leonas"]
        },
        "ar-AE": {
            0: ["Fatima"],
            1: ["Hamdan"]
        },
        "sl-SI": {
            0: ["Petra"],
            1: ["Rok"]
        },
        "es-DO": {
            0: ["Ramona"],
            1: ["Emilio"]
        },
        "ar-IQ": {
            0: ["Rana"],
            1: ["Bassel"]
        },
        "bn-IN": {
            0: ["Tanishaa"],
            1: ["Bashkar"]
        },
        "si-LK": {
            0: ["Thilini"],
            1: ["Sameera"]
        },
        "fr-CH": {
            0: ["Ariane"],
            1: ["Fabrice"]
        },
        "es-EC": {
            0: ["Andrea"],
            1: ["Luis"]
        },
        "es-US": {
            0: ["Paloma"],
            1: ["Alonso"]
        },
        "kn-IN": {
            0: ["Sapna"],
            1: ["Gagan"]
        },
        "lo-LA": {
            0: ["Keomany"],
            1: ["Chanthavong"]
        },
        "ar-SA": {
            0: ["Zariyah"],
            1: ["Hamed"]
        },
        "ca-ES": {
            0: ["Joana"],
            1: ["Enric"]
        },
        "de-DE": {
            0: ["Katja", "Amala"],
            1: ["Conrad", "Killian"]
        },
        "zh-HK": {
            0: ["HiuGaai", "HiuMaan"],
            1: ["WanLung"]
        },
        "pt-BR": {
            0: ["Francisca"],
            1: ["Antonio"]
        },
        "sr-RS": {
            0: ["Sophie"],
            1: ["Nicholas"]
        },
        "es-UY": {
            0: ["Valentina"],
            1: ["Mateo"]
        },
        "sw-KE": {
            0: ["Zuri"],
            1: ["Rafiki"]
        },
        "ar-BH": {
            0: ["Laila"],
            1: ["Ali"]
        },
        "es-ES": {
            0: ["Elvira"],
            1: ["Alvaro"]
        },
        "kk-KZ": {
            0: ["Aigul"],
            1: ["Daulet"]
        },
        "ar-JO": {
            0: ["Sana"],
            1: ["Taim"]
        },
        "es-VE": {
            0: ["Paola"],
            1: ["Sebastian"]
        },
        "so-SO": {
            0: ["Ubax"],
            1: ["Muuse"]
        },
        "en-TZ": {
            0: ["Imani"],
            1: ["Elimu"]
        },
        "su-ID": {
            0: ["Tuti"],
            1: ["Jajang"]
        },
        "es-MX": {
            0: ["Dalia"],
            1: ["Jorge"]
        },
        "it-IT": {
            0: ["Elsa", "Isabella"],
            1: ["Diego"]
        },
        "ur-IN": {
            0: ["Gul"],
            1: ["Salman"]
        },
        "bn-BD": {
            0: ["Nabanita"],
            1: ["Pradeep"]
        },
        "id-ID": {
            0: ["Gadis"],
            1: ["Ardi"]
        },
        "es-NI": {
            0: ["Yolanda"],
            1: ["Federico"]
        },
        "th-TH": {
            0: ["Premwadee"],
            1: ["Niwat"]
        }
    },
    Uu = {
        AvaMultilingual: {
            code: "en-US-AvaMultilingualNeural",
            language: "en-US",
            displayName: "Ava Multilingual",
            localName: "Ava Multilingual"
        },
        EmmaMultilingual: {
            code: "en-US-EmmaMultilingualNeural",
            language: "en-US",
            displayName: "Emma Multilingual",
            localName: "Emma Multilingual"
        },
        AndrewMultilingual: {
            code: "en-US-AndrewMultilingualNeural",
            language: "en-US",
            displayName: "Andrew Multilingual",
            localName: "Andrew Multilingual"
        },
        BrianMultilingual: {
            code: "en-US-BrianMultilingualNeural",
            language: "en-US",
            displayName: "Brian Multilingual",
            localName: "Brian Multilingual"
        },
        JennyMultilingual: {
            code: "en-US-JennyMultilingualNeural",
            language: "en-US",
            displayName: "Jenny Multilingual",
            localName: "Jenny Multilingual"
        },
        RyanMultilingual: {
            code: "en-US-RyanMultilingualNeural",
            language: "en-US",
            displayName: "Ryan Multilingual",
            localName: "Ryan Multilingual"
        },
        SeraphinaMultilingual: {
            code: "de-DE-SeraphinaMultilingualNeural",
            language: "de-DE",
            displayName: "Seraphina Multilingual",
            localName: "Seraphina Mehrsprachig"
        },
        FlorianMultilingual: {
            code: "de-DE-FlorianMultilingualNeural",
            language: "de-DE",
            displayName: "Florian Multilingual",
            localName: "Florian Mehrsprachig"
        },
        VivienneMultilingual: {
            code: "fr-FR-VivienneMultilingualNeural",
            language: "fr-FR",
            displayName: "Vivienne Multilingual",
            localName: "Vivienne Multilingue"
        },
        RemyMultilingual: {
            code: "fr-FR-RemyMultilingualNeural",
            language: "fr-FR",
            displayName: "Remy Multilingual",
            localName: "R\xE9my Multilingue"
        },
        MasaruMultilingual: {
            code: "ja-JP-MasaruMultilingualNeural",
            language: "ja-JP",
            displayName: "Masaru Multilingual",
            localName: "勝 多言語"
        },
        YunyiMultilingual: {
            code: "zh-CN-YunyiMultilingualNeural",
            language: "zh-CN",
            displayName: "Yunyi Multilingual",
            localName: "云逸 多语言"
        },
        XiaoxiaoMultilingual: {
            code: "zh-CN-XiaoxiaoMultilingualNeural",
            language: "zh-CN",
            displayName: "Xiaoxiao Multilingual",
            localName: "晓晓 多语言"
        },
        XiaochenMultilingual: {
            code: "zh-CN-XiaochenMultilingualNeural",
            language: "zh-CN",
            displayName: "Xiaochen Multilingual",
            localName: "晓辰 多语言"
        },
        XiaoyuMultilingual: {
            code: "zh-CN-XiaoyuMultilingualNeural",
            language: "zh-CN",
            displayName: "Xiaoyu Multilingual",
            localName: "晓雨 多语言"
        },
        "Xiaochen:DragonHDLatestNeural": {
            code: "zh-CN-Xiaochen:DragonHDLatestNeural",
            language: "zh-CN",
            displayName: "Xiaochen:DragonHDLatestNeural",
            localName: "晓辰(龙)"
        },
        "Seraphina:DragonHDLatestNeural": {
            code: "de-DE-Seraphina:DragonHDLatestNeural",
            language: "de-DE",
            displayName: "Seraphina:DragonHDLatest",
            localName: "Seraphina:DragonHD"
        },
        "Aria:DragonHDLatestNeural": {
            code: "en-US-Aria:DragonHDLatestNeural",
            language: "en-US",
            displayName: "Aria:DragonHDLatest",
            localName: "Aria:DragonHD"
        },
        "Ava:DragonHDLatestNeural": {
            code: "en-US-Ava:DragonHDLatestNeural",
            language: "en-US",
            displayName: "Ava:DragonHDLatest",
            localName: "Ava:DragonHD"
        },
        "Emma:DragonHDLatestNeural": {
            code: "en-US-Emma:DragonHDLatestNeural",
            language: "en-US",
            displayName: "Emma:DragonHDLatest",
            localName: "Emma:DragonHD"
        },
        "Emma2:DragonHDLatestNeural": {
            code: "en-US-Emma2:DragonHDLatestNeural",
            language: "en-US",
            displayName: "Emma2:DragonHDLatest",
            localName: "Emma2:DragonHD"
        },
        "Jenny:DragonHDLatestNeural": {
            code: "en-US-Jenny:DragonHDLatestNeural",
            language: "en-US",
            displayName: "Jenny:DragonHDLatest",
            localName: "Jenny:DragonHD"
        },
        "Andrew:DragonHDLatestNeural": {
            code: "en-US-Andrew:DragonHDLatestNeural",
            language: "en-US",
            displayName: "Andrew:DragonHDLatest",
            localName: "Andrew:DragonHD"
        },
        "Andrew2:DragonHDLatestNeural": {
            code: "en-US-Andrew2:DragonHDLatestNeural",
            language: "en-US",
            displayName: "Andrew2:DragonHDLatest",
            localName: "Andrew2:DragonHD"
        },
        "Davis:DragonHDLatestNeural": {
            code: "en-US-Davis:DragonHDLatestNeural",
            language: "en-US",
            displayName: "Davis:DragonHDLatest",
            localName: "Davis:DragonHD"
        },
        "Steffan:DragonHDLatestNeural": {
            code: "en-US-Steffan:DragonHDLatestNeural",
            language: "en-US",
            displayName: "Steffan:DragonHDLatest",
            localName: "Steffan:DragonHD"
        },
        "Masaru:DragonHDLatestNeural": {
            code: "ja-JP-Masaru:DragonHDLatestNeural",
            language: "ja-JP",
            displayName: "Masaru:DragonHDLatest",
            localName: "Masaru:DragonHD"
        },
        Alba: {
            code: "ca-ES-AlbaNeural",
            language: "ca-ES",
            displayName: "Alba",
            localName: "Alba"
        },
        Gisela: {
            code: "de-DE-GiselaNeural",
            language: "de-DE",
            displayName: "Gisela",
            localName: "Gisela"
        },
        Elke: {
            code: "de-DE-ElkeNeural",
            language: "de-DE",
            displayName: "Elke",
            localName: "Elke"
        },
        Klarissa: {
            code: "de-DE-KlarissaNeural",
            language: "de-DE",
            displayName: "Klarissa",
            localName: "Klarissa"
        },
        Louisa: {
            code: "de-DE-LouisaNeural",
            language: "de-DE",
            displayName: "Louisa",
            localName: "Louisa"
        },
        Maja: {
            code: "de-DE-MajaNeural",
            language: "de-DE",
            displayName: "Maja",
            localName: "Maja"
        },
        Tanja: {
            code: "de-DE-TanjaNeural",
            language: "de-DE",
            displayName: "Tanja",
            localName: "Tanja"
        },
        Bernd: {
            code: "de-DE-BerndNeural",
            language: "de-DE",
            displayName: "Bernd",
            localName: "Bernd"
        },
        Kasper: {
            code: "de-DE-KasperNeural",
            language: "de-DE",
            displayName: "Kasper",
            localName: "Kasper"
        },
        Christoph: {
            code: "de-DE-ChristophNeural",
            language: "de-DE",
            displayName: "Christoph",
            localName: "Christoph"
        },
        Klaus: {
            code: "de-DE-KlausNeural",
            language: "de-DE",
            displayName: "Klaus",
            localName: "Klaus"
        },
        Ralf: {
            code: "de-DE-RalfNeural",
            language: "de-DE",
            displayName: "Ralf",
            localName: "Ralf"
        },
        Annette: {
            code: "en-AU-AnnetteNeural",
            language: "en-AU",
            displayName: "Annette",
            localName: "Annette"
        },
        Carly: {
            code: "en-AU-CarlyNeural",
            language: "en-AU",
            displayName: "Carly",
            localName: "Carly"
        },
        Elsie: {
            code: "en-AU-ElsieNeural",
            language: "en-AU",
            displayName: "Elsie",
            localName: "Elsie"
        },
        Freya: {
            code: "en-AU-FreyaNeural",
            language: "en-AU",
            displayName: "Freya",
            localName: "Freya"
        },
        Joanne: {
            code: "en-AU-JoanneNeural",
            language: "en-AU",
            displayName: "Joanne",
            localName: "Joanne"
        },
        Kim: {
            code: "en-AU-KimNeural",
            language: "en-AU",
            displayName: "Kim",
            localName: "Kim"
        },
        Tina: {
            code: "en-AU-TinaNeural",
            language: "en-AU",
            displayName: "Tina",
            localName: "Tina"
        },
        Darren: {
            code: "en-AU-DarrenNeural",
            language: "en-AU",
            displayName: "Darren",
            localName: "Darren"
        },
        Duncan: {
            code: "en-AU-DuncanNeural",
            language: "en-AU",
            displayName: "Duncan",
            localName: "Duncan"
        },
        Ken: {
            code: "en-AU-KenNeural",
            language: "en-AU",
            displayName: "Ken",
            localName: "Ken"
        },
        Neil: {
            code: "en-AU-NeilNeural",
            language: "en-AU",
            displayName: "Neil",
            localName: "Neil"
        },
        Tim: {
            code: "en-AU-TimNeural",
            language: "en-AU",
            displayName: "Tim",
            localName: "Tim"
        },
        Abbi: {
            code: "en-GB-AbbiNeural",
            language: "en-GB",
            displayName: "Abbi",
            localName: "Abbi"
        },
        Bella: {
            code: "en-GB-BellaNeural",
            language: "en-GB",
            displayName: "Bella",
            localName: "Bella"
        },
        Hollie: {
            code: "en-GB-HollieNeural",
            language: "en-GB",
            displayName: "Hollie",
            localName: "Hollie"
        },
        Maisie: {
            code: "en-GB-MaisieNeural",
            language: "en-GB",
            displayName: "Maisie",
            localName: "Maisie"
        },
        Olivia: {
            code: "en-GB-OliviaNeural",
            language: "en-GB",
            displayName: "Olivia",
            localName: "Olivia"
        },
        Mia: {
            code: "en-GB-MiaNeural",
            language: "en-GB",
            displayName: "Mia",
            localName: "Mia"
        },
        Alfie: {
            code: "en-GB-AlfieNeural",
            language: "en-GB",
            displayName: "Alfie",
            localName: "Alfie"
        },
        Elliot: {
            code: "en-GB-ElliotNeural",
            language: "en-GB",
            displayName: "Elliot",
            localName: "Elliot"
        },
        Ethan: {
            code: "en-GB-EthanNeural",
            language: "en-GB",
            displayName: "Ethan",
            localName: "Ethan"
        },
        Noah: {
            code: "en-GB-NoahNeural",
            language: "en-GB",
            displayName: "Noah",
            localName: "Noah"
        },
        Oliver: {
            code: "en-GB-OliverNeural",
            language: "en-GB",
            displayName: "Oliver",
            localName: "Oliver"
        },
        Aashi: {
            code: "en-IN-AashiNeural",
            language: "en-IN",
            displayName: "Aashi",
            localName: "Aashi"
        },
        Ananya: {
            code: "en-IN-AnanyaNeural",
            language: "en-IN",
            displayName: "Ananya",
            localName: "Ananya"
        },
        Kavya: {
            code: "en-IN-KavyaNeural",
            language: "en-IN",
            displayName: "Kavya",
            localName: "Kavya"
        },
        Jane: {
            code: "en-US-JaneNeural",
            language: "en-US",
            displayName: "Jane",
            localName: "Jane"
        },
        Sara: {
            code: "en-US-SaraNeural",
            language: "en-US",
            displayName: "Sara",
            localName: "Sara"
        },
        Nancy: {
            code: "en-US-NancyNeural",
            language: "en-US",
            displayName: "Nancy",
            localName: "Nancy"
        },
        Amber: {
            code: "en-US-AmberNeural",
            language: "en-US",
            displayName: "Amber",
            localName: "Amber"
        },
        Ashley: {
            code: "en-US-AshleyNeural",
            language: "en-US",
            displayName: "Ashley",
            localName: "Ashley"
        },
        Cora: {
            code: "en-US-CoraNeural",
            language: "en-US",
            displayName: "Cora",
            localName: "Cora"
        },
        Elizabeth: {
            code: "en-US-ElizabethNeural",
            language: "en-US",
            displayName: "Elizabeth",
            localName: "Elizabeth"
        },
        Michelle: {
            code: "en-US-MichelleNeural",
            language: "en-US",
            displayName: "Michelle",
            localName: "Michelle"
        },
        Monica: {
            code: "en-US-MonicaNeural",
            language: "en-US",
            displayName: "Monica",
            localName: "Monica"
        },
        AIGenerate2: {
            code: "en-US-AIGenerate2Neural",
            language: "en-US",
            displayName: "AIGenerate2",
            localName: "AIGenerate2"
        },
        Blue: {
            code: "en-US-BlueNeural",
            language: "en-US",
            displayName: "Blue",
            localName: "Blue"
        },
        Davis: {
            code: "en-US-DavisNeural",
            language: "en-US",
            displayName: "Davis",
            localName: "Davis"
        },
        Jason: {
            code: "en-US-JasonNeural",
            language: "en-US",
            displayName: "Jason",
            localName: "Jason"
        },
        Tony: {
            code: "en-US-TonyNeural",
            language: "en-US",
            displayName: "Tony",
            localName: "Tony"
        },
        Brandon: {
            code: "en-US-BrandonNeural",
            language: "en-US",
            displayName: "Brandon",
            localName: "Brandon"
        },
        Jacob: {
            code: "en-US-JacobNeural",
            language: "en-US",
            displayName: "Jacob",
            localName: "Jacob"
        },
        AIGenerate1: {
            code: "en-US-AIGenerate1Neural",
            language: "en-US",
            displayName: "AIGenerate1",
            localName: "AIGenerate1"
        },
        Abril: {
            code: "es-ES-AbrilNeural",
            language: "es-ES",
            displayName: "Abril",
            localName: "Abril"
        },
        Estrella: {
            code: "es-ES-EstrellaNeural",
            language: "es-ES",
            displayName: "Estrella",
            localName: "Estrella"
        },
        Irene: {
            code: "es-ES-IreneNeural",
            language: "es-ES",
            displayName: "Irene",
            localName: "Irene"
        },
        Laia: {
            code: "es-ES-LaiaNeural",
            language: "es-ES",
            displayName: "Laia",
            localName: "Laia"
        },
        Lia: {
            code: "es-ES-LiaNeural",
            language: "es-ES",
            displayName: "Lia",
            localName: "Lia"
        },
        Triana: {
            code: "es-ES-TrianaNeural",
            language: "es-ES",
            displayName: "Triana",
            localName: "Triana"
        },
        Vera: {
            code: "es-ES-VeraNeural",
            language: "es-ES",
            displayName: "Vera",
            localName: "Vera"
        },
        Ximena: {
            code: "es-ES-XimenaNeural",
            language: "es-ES",
            displayName: "Ximena",
            localName: "Ximena"
        },
        Arnau: {
            code: "es-ES-ArnauNeural",
            language: "es-ES",
            displayName: "Arnau",
            localName: "Arnau"
        },
        Dario: {
            code: "es-ES-DarioNeural",
            language: "es-ES",
            displayName: "Dario",
            localName: "Dario"
        },
        Elias: {
            code: "es-ES-EliasNeural",
            language: "es-ES",
            displayName: "Elias",
            localName: "Elias"
        },
        Nil: {
            code: "es-ES-NilNeural",
            language: "es-ES",
            displayName: "Nil",
            localName: "Nil"
        },
        Saul: {
            code: "es-ES-SaulNeural",
            language: "es-ES",
            displayName: "Saul",
            localName: "Saul"
        },
        Teo: {
            code: "es-ES-TeoNeural",
            language: "es-ES",
            displayName: "Teo",
            localName: "Teo"
        },
        Beatriz: {
            code: "es-MX-BeatrizNeural",
            language: "es-MX",
            displayName: "Beatriz",
            localName: "Beatriz"
        },
        Candela: {
            code: "es-MX-CandelaNeural",
            language: "es-MX",
            displayName: "Candela",
            localName: "Candela"
        },
        Carlota: {
            code: "es-MX-CarlotaNeural",
            language: "es-MX",
            displayName: "Carlota",
            localName: "Carlota"
        },
        Larissa: {
            code: "es-MX-LarissaNeural",
            language: "es-MX",
            displayName: "Larissa",
            localName: "Larissa"
        },
        Marina: {
            code: "es-MX-MarinaNeural",
            language: "es-MX",
            displayName: "Marina",
            localName: "Marina"
        },
        Nuria: {
            code: "es-MX-NuriaNeural",
            language: "es-MX",
            displayName: "Nuria",
            localName: "Nuria"
        },
        Renata: {
            code: "es-MX-RenataNeural",
            language: "es-MX",
            displayName: "Renata",
            localName: "Renata"
        },
        Cecilio: {
            code: "es-MX-CecilioNeural",
            language: "es-MX",
            displayName: "Cecilio",
            localName: "Cecilio"
        },
        Gerardo: {
            code: "es-MX-GerardoNeural",
            language: "es-MX",
            displayName: "Gerardo",
            localName: "Gerardo"
        },
        Liberto: {
            code: "es-MX-LibertoNeural",
            language: "es-MX",
            displayName: "Liberto",
            localName: "Liberto"
        },
        Luciano: {
            code: "es-MX-LucianoNeural",
            language: "es-MX",
            displayName: "Luciano",
            localName: "Luciano"
        },
        Pelayo: {
            code: "es-MX-PelayoNeural",
            language: "es-MX",
            displayName: "Pelayo",
            localName: "Pelayo"
        },
        Yago: {
            code: "es-MX-YagoNeural",
            language: "es-MX",
            displayName: "Yago",
            localName: "Yago"
        },
        Selma: {
            code: "fi-FI-SelmaNeural",
            language: "fi-FI",
            displayName: "Selma",
            localName: "Selma"
        },
        Thierry: {
            code: "fr-CA-ThierryNeural",
            language: "fr-CA",
            displayName: "Thierry",
            localName: "Thierry"
        },
        Jacqueline: {
            code: "fr-FR-JacquelineNeural",
            language: "fr-FR",
            displayName: "Jacqueline",
            localName: "Jacqueline"
        },
        Josephine: {
            code: "fr-FR-JosephineNeural",
            language: "fr-FR",
            displayName: "Josephine",
            localName: "Josephine"
        },
        Brigitte: {
            code: "fr-FR-BrigitteNeural",
            language: "fr-FR",
            displayName: "Brigitte",
            localName: "Brigitte"
        },
        Coralie: {
            code: "fr-FR-CoralieNeural",
            language: "fr-FR",
            displayName: "Coralie",
            localName: "Coralie"
        },
        Celeste: {
            code: "fr-FR-CelesteNeural",
            language: "fr-FR",
            displayName: "Celeste",
            localName: "Celeste"
        },
        Yvette: {
            code: "fr-FR-YvetteNeural",
            language: "fr-FR",
            displayName: "Yvette",
            localName: "Yvette"
        },
        Claude: {
            code: "fr-FR-ClaudeNeural",
            language: "fr-FR",
            displayName: "Claude",
            localName: "Claude"
        },
        Alain: {
            code: "fr-FR-AlainNeural",
            language: "fr-FR",
            displayName: "Alain",
            localName: "Alain"
        },
        Jerome: {
            code: "fr-FR-JeromeNeural",
            language: "fr-FR",
            displayName: "Jerome",
            localName: "Jerome"
        },
        Maurice: {
            code: "fr-FR-MauriceNeural",
            language: "fr-FR",
            displayName: "Maurice",
            localName: "Maurice"
        },
        Yves: {
            code: "fr-FR-YvesNeural",
            language: "fr-FR",
            displayName: "Yves",
            localName: "Yves"
        },
        "Ananya-hi": {
            code: "hi-IN-AnanyaNeural",
            language: "hi-IN",
            displayName: "Ananya",
            localName: "अनन्या"
        },
        "Kavya-hi": {
            code: "hi-IN-KavyaNeural",
            language: "hi-IN",
            displayName: "Kavya",
            localName: "काव्या"
        },
        Fabiola: {
            code: "it-IT-FabiolaNeural",
            language: "it-IT",
            displayName: "Fabiola",
            localName: "Fabiola"
        },
        Fiamma: {
            code: "it-IT-FiammaNeural",
            language: "it-IT",
            displayName: "Fiamma",
            localName: "Fiamma"
        },
        Imelda: {
            code: "it-IT-ImeldaNeural",
            language: "it-IT",
            displayName: "Imelda",
            localName: "Imelda"
        },
        Irma: {
            code: "it-IT-IrmaNeural",
            language: "it-IT",
            displayName: "Irma",
            localName: "Irma"
        },
        Palmira: {
            code: "it-IT-PalmiraNeural",
            language: "it-IT",
            displayName: "Palmira",
            localName: "Palmira"
        },
        Pierina: {
            code: "it-IT-PierinaNeural",
            language: "it-IT",
            displayName: "Pierina",
            localName: "Pierina"
        },
        Benigno: {
            code: "it-IT-BenignoNeural",
            language: "it-IT",
            displayName: "Benigno",
            localName: "Benigno"
        },
        Calimero: {
            code: "it-IT-CalimeroNeural",
            language: "it-IT",
            displayName: "Calimero",
            localName: "Calimero"
        },
        Cataldo: {
            code: "it-IT-CataldoNeural",
            language: "it-IT",
            displayName: "Cataldo",
            localName: "Cataldo"
        },
        Gianni: {
            code: "it-IT-GianniNeural",
            language: "it-IT",
            displayName: "Gianni",
            localName: "Gianni"
        },
        Giuseppe: {
            code: "it-IT-GiuseppeNeural",
            language: "it-IT",
            displayName: "Giuseppe",
            localName: "Giuseppe"
        },
        Lisandro: {
            code: "it-IT-LisandroNeural",
            language: "it-IT",
            displayName: "Lisandro",
            localName: "Lisandro"
        },
        Rinaldo: {
            code: "it-IT-RinaldoNeural",
            language: "it-IT",
            displayName: "Rinaldo",
            localName: "Rinaldo"
        },
        Shiori: {
            code: "ja-JP-ShioriNeural",
            language: "ja-JP",
            displayName: "Shiori",
            localName: "志織"
        },
        Mayu: {
            code: "ja-JP-MayuNeural",
            language: "ja-JP",
            displayName: "Mayu",
            localName: "真夕"
        },
        Aoi: {
            code: "ja-JP-AoiNeural",
            language: "ja-JP",
            displayName: "Aoi",
            localName: "碧衣"
        },
        Naoki: {
            code: "ja-JP-NaokiNeural",
            language: "ja-JP",
            displayName: "Naoki",
            localName: "直紀"
        },
        Daichi: {
            code: "ja-JP-DaichiNeural",
            language: "ja-JP",
            displayName: "Daichi",
            localName: "大智"
        },
        JiMin: {
            code: "ko-KR-JiMinNeural",
            language: "ko-KR",
            displayName: "JiMin",
            localName: "지민"
        },
        SeoHyeon: {
            code: "ko-KR-SeoHyeonNeural",
            language: "ko-KR",
            displayName: "SeoHyeon",
            localName: "서현"
        },
        SoonBok: {
            code: "ko-KR-SoonBokNeural",
            language: "ko-KR",
            displayName: "SoonBok",
            localName: "순복"
        },
        YuJin: {
            code: "ko-KR-YuJinNeural",
            language: "ko-KR",
            displayName: "YuJin",
            localName: "유진"
        },
        BongJin: {
            code: "ko-KR-BongJinNeural",
            language: "ko-KR",
            displayName: "BongJin",
            localName: "봉진"
        },
        GookMin: {
            code: "ko-KR-GookMinNeural",
            language: "ko-KR",
            displayName: "GookMin",
            localName: "국민"
        },
        Hyunsu: {
            code: "ko-KR-HyunsuNeural",
            language: "ko-KR",
            displayName: "Hyunsu",
            localName: "현수"
        },
        Nilar: {
            code: "my-MM-NilarNeural",
            language: "my-MM",
            displayName: "Nilar",
            localName: "နီလာ"
        },
        Thiha: {
            code: "my-MM-ThihaNeural",
            language: "my-MM",
            displayName: "Thiha",
            localName: "သီဟ"
        },
        Iselin: {
            code: "nb-NO-IselinNeural",
            language: "nb-NO",
            displayName: "Iselin",
            localName: "Iselin"
        },
        Agnieszka: {
            code: "pl-PL-AgnieszkaNeural",
            language: "pl-PL",
            displayName: "Agnieszka",
            localName: "Agnieszka"
        },
        Giovanna: {
            code: "pt-BR-GiovannaNeural",
            language: "pt-BR",
            displayName: "Giovanna",
            localName: "Giovanna"
        },
        Leila: {
            code: "pt-BR-LeilaNeural",
            language: "pt-BR",
            displayName: "Leila",
            localName: "Leila"
        },
        Leticia: {
            code: "pt-BR-LeticiaNeural",
            language: "pt-BR",
            displayName: "Leticia",
            localName: "Leticia"
        },
        Yara: {
            code: "pt-BR-YaraNeural",
            language: "pt-BR",
            displayName: "Yara",
            localName: "Yara"
        },
        Manuela: {
            code: "pt-BR-ManuelaNeural",
            language: "pt-BR",
            displayName: "Manuela",
            localName: "Manuela"
        },
        Thalita: {
            code: "pt-BR-ThalitaNeural",
            language: "pt-BR",
            displayName: "Thalita",
            localName: "Thalita"
        },
        Elza: {
            code: "pt-BR-ElzaNeural",
            language: "pt-BR",
            displayName: "Elza",
            localName: "Elza"
        },
        Brenda: {
            code: "pt-BR-BrendaNeural",
            language: "pt-BR",
            displayName: "Brenda",
            localName: "Brenda"
        },
        Julio: {
            code: "pt-BR-JulioNeural",
            language: "pt-BR",
            displayName: "Julio",
            localName: "Julio"
        },
        Humberto: {
            code: "pt-BR-HumbertoNeural",
            language: "pt-BR",
            displayName: "Humberto",
            localName: "Humberto"
        },
        Nicolau: {
            code: "pt-BR-NicolauNeural",
            language: "pt-BR",
            displayName: "Nicolau",
            localName: "Nicolau"
        },
        Valerio: {
            code: "pt-BR-ValerioNeural",
            language: "pt-BR",
            displayName: "Valerio",
            localName: "Valerio"
        },
        Fabio: {
            code: "pt-BR-FabioNeural",
            language: "pt-BR",
            displayName: "Fabio",
            localName: "Fabio"
        },
        Donato: {
            code: "pt-BR-DonatoNeural",
            language: "pt-BR",
            displayName: "Donato",
            localName: "Donato"
        },
        Fernanda: {
            code: "pt-PT-FernandaNeural",
            language: "pt-PT",
            displayName: "Fernanda",
            localName: "Fernanda"
        },
        Dariya: {
            code: "ru-RU-DariyaNeural",
            language: "ru-RU",
            displayName: "Dariya",
            localName: "Дария"
        },
        Nicholas: {
            code: "sr-RS-NicholasNeural",
            language: "sr-RS",
            displayName: "Nicholas",
            localName: "Никола"
        },
        Sophie: {
            code: "sr-RS-SophieNeural",
            language: "sr-RS",
            displayName: "Sophie",
            localName: "Софија"
        },
        Hillevi: {
            code: "sv-SE-HilleviNeural",
            language: "sv-SE",
            displayName: "Hillevi",
            localName: "Hillevi"
        },
        Achara: {
            code: "th-TH-AcharaNeural",
            language: "th-TH",
            displayName: "Achara",
            localName: "อัจฉรา"
        },
        Xiaohan: {
            code: "zh-CN-XiaohanNeural",
            language: "zh-CN",
            displayName: "Xiaohan",
            localName: "晓涵"
        },
        Xiaomeng: {
            code: "zh-CN-XiaomengNeural",
            language: "zh-CN",
            displayName: "Xiaomeng",
            localName: "晓梦"
        },
        Xiaomo: {
            code: "zh-CN-XiaomoNeural",
            language: "zh-CN",
            displayName: "Xiaomo",
            localName: "晓莫"
        },
        Xiaoqiu: {
            code: "zh-CN-XiaoqiuNeural",
            language: "zh-CN",
            displayName: "Xiaoqiu",
            localName: "晓秋"
        },
        Xiaorui: {
            code: "zh-CN-XiaoruiNeural",
            language: "zh-CN",
            displayName: "Xiaorui",
            localName: "晓睿"
        },
        Xiaoshuang: {
            code: "zh-CN-XiaoshuangNeural",
            language: "zh-CN",
            displayName: "Xiaoshuang",
            localName: "晓双"
        },
        Xiaoyan: {
            code: "zh-CN-XiaoyanNeural",
            language: "zh-CN",
            displayName: "Xiaoyan",
            localName: "晓颜"
        },
        Xiaoxuan: {
            code: "zh-CN-XiaoxuanNeural",
            language: "zh-CN",
            displayName: "Xiaoxuan",
            localName: "晓萱"
        },
        Xiaoyou: {
            code: "zh-CN-XiaoyouNeural",
            language: "zh-CN",
            displayName: "Xiaoyou",
            localName: "晓悠"
        },
        Xiaozhen: {
            code: "zh-CN-XiaozhenNeural",
            language: "zh-CN",
            displayName: "Xiaozhen",
            localName: "晓甄"
        },
        Xiaorou: {
            code: "zh-CN-XiaorouNeural",
            language: "zh-CN",
            displayName: "Xiaorou",
            localName: "晓柔"
        },
        Xiaotong: {
            code: "wuu-CN-XiaotongNeural",
            language: "zh-CN",
            displayName: "Xiaotong",
            localName: "晓彤"
        },
        XiaoMin: {
            code: "yue-CN-XiaoMinNeural",
            language: "zh-CN",
            displayName: "XiaoMin",
            localName: "晓敏"
        },
        Xiaobei: {
            code: "zh-CN-liaoning-XiaobeiNeural",
            language: "zh-CN",
            displayName: "Xiaobei",
            localName: "晓北 辽宁"
        },
        Xiaoni: {
            code: "zh-CN-shaanxi-XiaoniNeural",
            language: "zh-CN",
            displayName: "Xiaoni",
            localName: "晓妮 陕西"
        },
        Yunfeng: {
            code: "zh-CN-yunfengNeural",
            language: "zh-CN",
            displayName: "Yunfeng",
            localName: "云枫"
        },
        Yunhao: {
            code: "zh-CN-yunhaoNeural",
            language: "zh-CN",
            displayName: "Yunhao",
            localName: "云皓"
        },
        Yunjie: {
            code: "zh-CN-yunjieNeural",
            language: "zh-CN",
            displayName: "Yunjie",
            localName: "云杰"
        },
        Yunye: {
            code: "zh-CN-yunyeNeural",
            language: "zh-CN",
            displayName: "Yunye",
            localName: "云野"
        },
        Yunze: {
            code: "zh-CN-yunzeNeural",
            language: "zh-CN",
            displayName: "Yunze",
            localName: "云泽"
        },
        Yunzhe: {
            code: "wuu-CN-YunzheNeural",
            language: "zh-CN",
            displayName: "Yunzhe",
            localName: "云哲"
        },
        YunSong: {
            code: "yue-CN-YunSongNeural",
            language: "zh-CN",
            displayName: "YunSong",
            localName: "云松"
        },
        Yunqi: {
            code: "zh-CN-guangxi-YunqiNeural",
            language: "zh-CN",
            displayName: "Yunqi",
            localName: "云奇 广西"
        },
        Yundeng: {
            code: "zh-CN-henan-YundengNeural",
            language: "zh-CN",
            displayName: "Yundeng",
            localName: "云登 河南"
        },
        Yunbiao: {
            code: "zh-CN-liaoning-YunbiaoNeural",
            language: "zh-CN",
            displayName: "Yunbiao",
            localName: "云彪 辽宁"
        },
        Yunxiang: {
            code: "zh-CN-shandong-YunxiangNeural",
            language: "zh-CN",
            displayName: "Yunxiang",
            localName: "云翔 山东"
        },
        "Yunxi-SiChuan": {
            code: "zh-CN-sichuan-YunxiNeural",
            language: "zh-CN",
            displayName: "Yunxi",
            localName: "云希 四川"
        },
        Emily: {
            code: "en-IE-EmilyNeural",
            language: "en-IE",
            displayName: "Emily",
            localName: "Emily"
        },
        Connor: {
            code: "en-IE-ConnorNeural",
            language: "en-IE",
            displayName: "Connor",
            localName: "Connor"
        },
        Noura: {
            code: "ar-KW-NouraNeural",
            language: "ar-KW",
            displayName: "Noura",
            localName: "نورا"
        },
        Fahed: {
            code: "ar-KW-FahedNeural",
            language: "ar-KW",
            displayName: "Fahed",
            localName: "فهد"
        },
        Rehema: {
            code: "sw-TZ-RehemaNeural",
            language: "sw-TZ",
            displayName: "Rehema",
            localName: "Rehema"
        },
        Daudi: {
            code: "sw-TZ-DaudiNeural",
            language: "sw-TZ",
            displayName: "Daudi",
            localName: "Daudi"
        },
        Yasmin: {
            code: "ms-MY-YasminNeural",
            language: "ms-MY",
            displayName: "Yasmin",
            localName: "Yasmin"
        },
        Osman: {
            code: "ms-MY-OsmanNeural",
            language: "ms-MY",
            displayName: "Osman",
            localName: "Osman"
        },
        Neerja: {
            code: "en-IN-NeerjaNeural",
            language: "en-IN",
            displayName: "Neerja",
            localName: "Neerja"
        },
        Prabhat: {
            code: "en-IN-PrabhatNeural",
            language: "en-IN",
            displayName: "Prabhat",
            localName: "Prabhat"
        },
        Sofia: {
            code: "es-BO-SofiaNeural",
            language: "es-BO",
            displayName: "Sofia",
            localName: "Sofia"
        },
        Marcelo: {
            code: "es-BO-MarceloNeural",
            language: "es-BO",
            displayName: "Marcelo",
            localName: "Marcelo"
        },
        Amany: {
            code: "ar-SY-AmanyNeural",
            language: "ar-SY",
            displayName: "Amany",
            localName: "أماني"
        },
        Laith: {
            code: "ar-SY-LaithNeural",
            language: "ar-SY",
            displayName: "Laith",
            localName: "ليث"
        },
        Leah: {
            code: "en-ZA-LeahNeural",
            language: "en-ZA",
            displayName: "Leah",
            localName: "Leah"
        },
        Luke: {
            code: "en-ZA-LukeNeural",
            language: "en-ZA",
            displayName: "Luke",
            localName: "Luke"
        },
        Pallavi: {
            code: "ta-IN-PallaviNeural",
            language: "ta-IN",
            displayName: "Pallavi",
            localName: "பல்லவி"
        },
        Valluvar: {
            code: "ta-IN-ValluvarNeural",
            language: "ta-IN",
            displayName: "Valluvar",
            localName: "வள்ளுவர்"
        },
        Athina: {
            code: "el-GR-AthinaNeural",
            language: "el-GR",
            displayName: "Athina",
            localName: "Αθηνά"
        },
        Nestoras: {
            code: "el-GR-NestorasNeural",
            language: "el-GR",
            displayName: "Nestoras",
            localName: "Νέστορας"
        },
        Fenna: {
            code: "nl-NL-FennaNeural",
            language: "nl-NL",
            displayName: "Fenna",
            localName: "Fenna"
        },
        Colette: {
            code: "nl-NL-ColetteNeural",
            language: "nl-NL",
            displayName: "Colette",
            localName: "Colette"
        },
        Maarten: {
            code: "nl-NL-MaartenNeural",
            language: "nl-NL",
            displayName: "Maarten",
            localName: "Maarten"
        },
        Thando: {
            code: "zu-ZA-ThandoNeural",
            language: "zu-ZA",
            displayName: "Thando",
            localName: "Thando"
        },
        Themba: {
            code: "zu-ZA-ThembaNeural",
            language: "zu-ZA",
            displayName: "Themba",
            localName: "Themba"
        },
        Layla: {
            code: "ar-LB-LaylaNeural",
            language: "ar-LB",
            displayName: "Layla",
            localName: "ليلى"
        },
        Rami: {
            code: "ar-LB-RamiNeural",
            language: "ar-LB",
            displayName: "Rami",
            localName: "رامي"
        },
        Natasha: {
            code: "en-AU-NatashaNeural",
            language: "en-AU",
            displayName: "Natasha",
            localName: "Natasha"
        },
        William: {
            code: "en-AU-WilliamNeural",
            language: "en-AU",
            displayName: "William",
            localName: "William"
        },
        Hila: {
            code: "he-IL-HilaNeural",
            language: "he-IL",
            displayName: "Hila",
            localName: "הילה"
        },
        Avri: {
            code: "he-IL-AvriNeural",
            language: "he-IL",
            displayName: "Avri",
            localName: "אברי"
        },
        Marija: {
            code: "mk-MK-MarijaNeural",
            language: "mk-MK",
            displayName: "Marija",
            localName: "Марија"
        },
        Aleksandar: {
            code: "mk-MK-AleksandarNeural",
            language: "mk-MK",
            displayName: "Aleksandar",
            localName: "Александар"
        },
        Reem: {
            code: "ar-TN-ReemNeural",
            language: "ar-TN",
            displayName: "Reem",
            localName: "ريم"
        },
        Hedi: {
            code: "ar-TN-HediNeural",
            language: "ar-TN",
            displayName: "Hedi",
            localName: "هادي"
        },
        Iman: {
            code: "ar-LY-ImanNeural",
            language: "ar-LY",
            displayName: "Iman",
            localName: "إيمان"
        },
        Omar: {
            code: "ar-LY-OmarNeural",
            language: "ar-LY",
            displayName: "Omar",
            localName: "أحمد"
        },
        Noemi: {
            code: "hu-HU-NoemiNeural",
            language: "hu-HU",
            displayName: "Noemi",
            localName: "No\xE9mi"
        },
        Tamas: {
            code: "hu-HU-TamasNeural",
            language: "hu-HU",
            displayName: "Tamas",
            localName: "Tam\xE1s"
        },
        Sobhana: {
            code: "ml-IN-SobhanaNeural",
            language: "ml-IN",
            displayName: "Sobhana",
            localName: "ശോഭന"
        },
        Midhun: {
            code: "ml-IN-MidhunNeural",
            language: "ml-IN",
            displayName: "Midhun",
            localName: "മിഥുൻ"
        },
        Lorena: {
            code: "es-SV-LorenaNeural",
            language: "es-SV",
            displayName: "Lorena",
            localName: "Lorena"
        },
        Rodrigo: {
            code: "es-SV-RodrigoNeural",
            language: "es-SV",
            displayName: "Rodrigo",
            localName: "Rodrigo"
        },
        Maria: {
            code: "es-CR-MariaNeural",
            language: "es-CR",
            displayName: "Maria",
            localName: "Mar\xEDa"
        },
        Juan: {
            code: "es-CR-JuanNeural",
            language: "es-CR",
            displayName: "Juan",
            localName: "Juan"
        },
        Catalina: {
            code: "es-CL-CatalinaNeural",
            language: "es-CL",
            displayName: "Catalina",
            localName: "Catalina"
        },
        Lorenzo: {
            code: "es-CL-LorenzoNeural",
            language: "es-CL",
            displayName: "Lorenzo",
            localName: "Lorenzo"
        },
        Sylvie: {
            code: "fr-CA-SylvieNeural",
            language: "fr-CA",
            displayName: "Sylvie",
            localName: "Sylvie"
        },
        Antoine: {
            code: "fr-CA-AntoineNeural",
            language: "fr-CA",
            displayName: "Antoine",
            localName: "Antoine"
        },
        Jean: {
            code: "fr-CA-JeanNeural",
            language: "fr-CA",
            displayName: "Jean",
            localName: "Jean"
        },
        Salome: {
            code: "es-CO-SalomeNeural",
            language: "es-CO",
            displayName: "Salome",
            localName: "Salome"
        },
        Gonzalo: {
            code: "es-CO-GonzaloNeural",
            language: "es-CO",
            displayName: "Gonzalo",
            localName: "Gonzalo"
        },
        Siti: {
            code: "jv-ID-SitiNeural",
            language: "jv-ID",
            displayName: "Siti",
            localName: "Siti"
        },
        Dimas: {
            code: "jv-ID-DimasNeural",
            language: "jv-ID",
            displayName: "Dimas",
            localName: "Dimas"
        },
        Zofia: {
            code: "pl-PL-ZofiaNeural",
            language: "pl-PL",
            displayName: "Zofia",
            localName: "Zofia"
        },
        Marek: {
            code: "pl-PL-MarekNeural",
            language: "pl-PL",
            displayName: "Marek",
            localName: "Marek"
        },
        Raquel: {
            code: "pt-PT-RaquelNeural",
            language: "pt-PT",
            displayName: "Raquel",
            localName: "Raquel"
        },
        Duarte: {
            code: "pt-PT-DuarteNeural",
            language: "pt-PT",
            displayName: "Duarte",
            localName: "Duarte"
        },
        Salma: {
            code: "ar-EG-SalmaNeural",
            language: "ar-EG",
            displayName: "Salma",
            localName: "سلمى"
        },
        Shakir: {
            code: "ar-EG-ShakirNeural",
            language: "ar-EG",
            displayName: "Shakir",
            localName: "شاكر"
        },
        Belkys: {
            code: "es-CU-BelkysNeural",
            language: "es-CU",
            displayName: "Belkys",
            localName: "Belkys"
        },
        Manuel: {
            code: "es-CU-ManuelNeural",
            language: "es-CU",
            displayName: "Manuel",
            localName: "Manuel"
        },
        Charline: {
            code: "fr-BE-CharlineNeural",
            language: "fr-BE",
            displayName: "Charline",
            localName: "Charline"
        },
        Gerard: {
            code: "fr-BE-GerardNeural",
            language: "fr-BE",
            displayName: "Gerard",
            localName: "Gerard"
        },
        Orla: {
            code: "ga-IE-OrlaNeural",
            language: "ga-IE",
            displayName: "Orla",
            localName: "Orla"
        },
        Colm: {
            code: "ga-IE-ColmNeural",
            language: "ga-IE",
            displayName: "Colm",
            localName: "Colm"
        },
        Nia: {
            code: "cy-GB-NiaNeural",
            language: "cy-GB",
            displayName: "Nia",
            localName: "Nia"
        },
        Aled: {
            code: "cy-GB-AledNeural",
            language: "cy-GB",
            displayName: "Aled",
            localName: "Aled"
        },
        Amina: {
            code: "ar-DZ-AminaNeural",
            language: "ar-DZ",
            displayName: "Amina",
            localName: "أمينة"
        },
        Ismael: {
            code: "ar-DZ-IsmaelNeural",
            language: "ar-DZ",
            displayName: "Ismael",
            localName: "إسماعيل"
        },
        Luna: {
            code: "en-SG-LunaNeural",
            language: "en-SG",
            displayName: "Luna",
            localName: "Luna"
        },
        Wayne: {
            code: "en-SG-WayneNeural",
            language: "en-SG",
            displayName: "Wayne",
            localName: "Wayne"
        },
        Mouna: {
            code: "ar-MA-MounaNeural",
            language: "ar-MA",
            displayName: "Mouna",
            localName: "منى"
        },
        Jamal: {
            code: "ar-MA-JamalNeural",
            language: "ar-MA",
            displayName: "Jamal",
            localName: "جمال"
        },
        Blessica: {
            code: "fil-PH-BlessicaNeural",
            language: "fil-PH",
            displayName: "Blessica",
            localName: "Blessica"
        },
        Angelo: {
            code: "fil-PH-AngeloNeural",
            language: "fil-PH",
            displayName: "Angelo",
            localName: "Angelo"
        },
        Venba: {
            code: "ta-SG-VenbaNeural",
            language: "ta-SG",
            displayName: "Venba",
            localName: "வெண்பா"
        },
        Anbu: {
            code: "ta-SG-AnbuNeural",
            language: "ta-SG",
            displayName: "Anbu",
            localName: "அன்பு"
        },
        Asilia: {
            code: "en-KE-AsiliaNeural",
            language: "en-KE",
            displayName: "Asilia",
            localName: "Asilia"
        },
        Chilemba: {
            code: "en-KE-ChilembaNeural",
            language: "en-KE",
            displayName: "Chilemba",
            localName: "Chilemba"
        },
        Karla: {
            code: "es-HN-KarlaNeural",
            language: "es-HN",
            displayName: "Karla",
            localName: "Karla"
        },
        Carlos: {
            code: "es-HN-CarlosNeural",
            language: "es-HN",
            displayName: "Carlos",
            localName: "Carlos"
        },
        Pernille: {
            code: "nb-NO-PernilleNeural",
            language: "nb-NO",
            displayName: "Pernille",
            localName: "Pernille"
        },
        Finn: {
            code: "nb-NO-FinnNeural",
            language: "nb-NO",
            displayName: "Finn",
            localName: "Finn"
        },
        Gabrijela: {
            code: "hr-HR-GabrijelaNeural",
            language: "hr-HR",
            displayName: "Gabrijela",
            localName: "Gabrijela"
        },
        Srecko: {
            code: "hr-HR-SreckoNeural",
            language: "hr-HR",
            displayName: "Srecko",
            localName: "Srecko"
        },
        Karina: {
            code: "es-PR-KarinaNeural",
            language: "es-PR",
            displayName: "Karina",
            localName: "Karina"
        },
        Victor: {
            code: "es-PR-VictorNeural",
            language: "es-PR",
            displayName: "Victor",
            localName: "Victor"
        },
        Adri: {
            code: "af-ZA-AdriNeural",
            language: "af-ZA",
            displayName: "Adri",
            localName: "Adri"
        },
        Willem: {
            code: "af-ZA-WillemNeural",
            language: "af-ZA",
            displayName: "Willem",
            localName: "Willem"
        },
        Sabela: {
            code: "gl-ES-SabelaNeural",
            language: "gl-ES",
            displayName: "Sabela",
            localName: "Sabela"
        },
        Roi: {
            code: "gl-ES-RoiNeural",
            language: "gl-ES",
            displayName: "Roi",
            localName: "Roi"
        },
        Tania: {
            code: "es-PY-TaniaNeural",
            language: "es-PY",
            displayName: "Tania",
            localName: "Tania"
        },
        Mario: {
            code: "es-PY-MarioNeural",
            language: "es-PY",
            displayName: "Mario",
            localName: "Mario"
        },
        Ingrid: {
            code: "de-AT-IngridNeural",
            language: "de-AT",
            displayName: "Ingrid",
            localName: "Ingrid"
        },
        Jonas: {
            code: "de-AT-JonasNeural",
            language: "de-AT",
            displayName: "Jonas",
            localName: "Jonas"
        },
        Saranya: {
            code: "ta-LK-SaranyaNeural",
            language: "ta-LK",
            displayName: "Saranya",
            localName: "சரண்யா"
        },
        Kumar: {
            code: "ta-LK-KumarNeural",
            language: "ta-LK",
            displayName: "Kumar",
            localName: "குமார்"
        },
        Gudrun: {
            code: "is-IS-GudrunNeural",
            language: "is-IS",
            displayName: "Gudrun",
            localName: "Gu\xF0r\xFAn"
        },
        Gunnar: {
            code: "is-IS-GunnarNeural",
            language: "is-IS",
            displayName: "Gunnar",
            localName: "Gunnar"
        },
        Kalina: {
            code: "bg-BG-KalinaNeural",
            language: "bg-BG",
            displayName: "Kalina",
            localName: "Калина"
        },
        Borislav: {
            code: "bg-BG-BorislavNeural",
            language: "bg-BG",
            displayName: "Borislav",
            localName: "Борислав"
        },
        Vlasta: {
            code: "cs-CZ-VlastaNeural",
            language: "cs-CZ",
            displayName: "Vlasta",
            localName: "Vlasta"
        },
        Antonin: {
            code: "cs-CZ-AntoninNeural",
            language: "cs-CZ",
            displayName: "Antonin",
            localName: "Antonin"
        },
        Rosa: {
            code: "en-PH-RosaNeural",
            language: "en-PH",
            displayName: "Rosa",
            localName: "Rosa"
        },
        James: {
            code: "en-PH-JamesNeural",
            language: "en-PH",
            displayName: "James",
            localName: "James"
        },
        Madina: {
            code: "uz-UZ-MadinaNeural",
            language: "uz-UZ",
            displayName: "Madina",
            localName: "Madina"
        },
        Sardor: {
            code: "uz-UZ-SardorNeural",
            language: "uz-UZ",
            displayName: "Sardor",
            localName: "Сардор"
        },
        HsiaoYu: {
            code: "zh-TW-HsiaoYuNeural",
            language: "zh-TW",
            displayName: "HsiaoYu",
            localName: "曉雨"
        },
        HsiaoChen: {
            code: "zh-TW-HsiaoChenNeural",
            language: "zh-TW",
            displayName: "HsiaoChen",
            localName: "曉臻"
        },
        YunJhe: {
            code: "zh-TW-YunJheNeural",
            language: "zh-TW",
            displayName: "YunJhe",
            localName: "雲哲"
        },
        Yan: {
            code: "en-HK-YanNeural",
            language: "en-HK",
            displayName: "Yan",
            localName: "Yan"
        },
        Sam: {
            code: "en-HK-SamNeural",
            language: "en-HK",
            displayName: "Sam",
            localName: "Sam"
        },
        SunHi: {
            code: "ko-KR-SunHiNeural",
            language: "ko-KR",
            displayName: "SunHi",
            localName: "선히"
        },
        InJoon: {
            code: "ko-KR-InJoonNeural",
            language: "ko-KR",
            displayName: "InJoon",
            localName: "인준"
        },
        Viktoria: {
            code: "sk-SK-ViktoriaNeural",
            language: "sk-SK",
            displayName: "Viktoria",
            localName: "Vikt\xF3ria"
        },
        Lukas: {
            code: "sk-SK-LukasNeural",
            language: "sk-SK",
            displayName: "Lukas",
            localName: "Luk\xE1\u0161"
        },
        Latifa: {
            code: "ps-AF-LatifaNeural",
            language: "ps-AF",
            displayName: "Latifa",
            localName: "لطيفه"
        },
        GulNawaz: {
            code: "ps-AF-GulNawazNeural",
            language: "ps-AF",
            displayName: "Gul Nawaz",
            localName: " ګل نواز"
        },
        Aysha: {
            code: "ar-OM-AyshaNeural",
            language: "ar-OM",
            displayName: "Aysha",
            localName: "عائشة"
        },
        Abdullah: {
            code: "ar-OM-AbdullahNeural",
            language: "ar-OM",
            displayName: "Abdullah",
            localName: "عبدالله"
        },
        Svetlana: {
            code: "ru-RU-SvetlanaNeural",
            language: "ru-RU",
            displayName: "Svetlana",
            localName: "Светлана"
        },
        Dmitry: {
            code: "ru-RU-DmitryNeural",
            language: "ru-RU",
            displayName: "Dmitry",
            localName: "Дмитрий"
        },
        Anila: {
            code: "sq-AL-AnilaNeural",
            language: "sq-AL",
            displayName: "Anila",
            localName: "Anila"
        },
        Ilir: {
            code: "sq-AL-IlirNeural",
            language: "sq-AL",
            displayName: "Ilir",
            localName: "Ilir"
        },
        Elena: {
            code: "es-AR-ElenaNeural",
            language: "es-AR",
            displayName: "Elena",
            localName: "Elena"
        },
        Tomas: {
            code: "es-AR-TomasNeural",
            language: "es-AR",
            displayName: "Tomas",
            localName: "Tomas"
        },
        Sofie: {
            code: "sv-SE-SofieNeural",
            language: "sv-SE",
            displayName: "Sofie",
            localName: "Sofie"
        },
        Mattias: {
            code: "sv-SE-MattiasNeural",
            language: "sv-SE",
            displayName: "Mattias",
            localName: "Mattias"
        },
        Mekdes: {
            code: "am-ET-MekdesNeural",
            language: "am-ET",
            displayName: "Mekdes",
            localName: "መቅደስ"
        },
        Ameha: {
            code: "am-ET-AmehaNeural",
            language: "am-ET",
            displayName: "Ameha",
            localName: "አምሀ"
        },
        Aarohi: {
            code: "mr-IN-AarohiNeural",
            language: "mr-IN",
            displayName: "Aarohi",
            localName: "आरोही"
        },
        Manohar: {
            code: "mr-IN-ManoharNeural",
            language: "mr-IN",
            displayName: "Manohar",
            localName: "मनोहर"
        },
        Christel: {
            code: "da-DK-ChristelNeural",
            language: "da-DK",
            displayName: "Christel",
            localName: "Christel"
        },
        Jeppe: {
            code: "da-DK-JeppeNeural",
            language: "da-DK",
            displayName: "Jeppe",
            localName: "Jeppe"
        },
        Yesui: {
            code: "mn-MN-YesuiNeural",
            language: "mn-MN",
            displayName: "Yesui",
            localName: "Есүй"
        },
        Bataa: {
            code: "mn-MN-BataaNeural",
            language: "mn-MN",
            displayName: "Bataa",
            localName: "Батаа"
        },
        Polina: {
            code: "uk-UA-PolinaNeural",
            language: "uk-UA",
            displayName: "Polina",
            localName: "Поліна"
        },
        Ostap: {
            code: "uk-UA-OstapNeural",
            language: "uk-UA",
            displayName: "Ostap",
            localName: "Остап"
        },
        Ana: {
            code: "en-US-AnaNeural",
            language: "en-US",
            displayName: "Ana",
            localName: "Ana"
        },
        Aria: {
            code: "en-US-AriaNeural",
            language: "en-US",
            displayName: "Aria",
            localName: "Aria"
        },
        Jenny: {
            code: "en-US-JennyNeural",
            language: "en-US",
            displayName: "Jenny",
            localName: "Jenny"
        },
        Roger: {
            code: "en-US-RogerNeural",
            language: "en-US",
            displayName: "Roger",
            localName: "Roger"
        },
        Christopher: {
            code: "en-US-ChristopherNeural",
            language: "en-US",
            displayName: "Christopher",
            localName: "Christopher"
        },
        Eric: {
            code: "en-US-EricNeural",
            language: "en-US",
            displayName: "Eric",
            localName: "Eric"
        },
        Steffan: {
            code: "en-US-SteffanNeural",
            language: "en-US",
            displayName: "Steffan",
            localName: "Steffan"
        },
        Guy: {
            code: "en-US-GuyNeural",
            language: "en-US",
            displayName: "Guy",
            localName: "Guy"
        },
        Kani: {
            code: "ta-MY-KaniNeural",
            language: "ta-MY",
            displayName: "Kani",
            localName: "கனி"
        },
        Surya: {
            code: "ta-MY-SuryaNeural",
            language: "ta-MY",
            displayName: "Surya",
            localName: "சூர்யா"
        },
        Dhwani: {
            code: "gu-IN-DhwaniNeural",
            language: "gu-IN",
            displayName: "Dhwani",
            localName: "ધ્વની"
        },
        Niranjan: {
            code: "gu-IN-NiranjanNeural",
            language: "gu-IN",
            displayName: "Niranjan",
            localName: "નિરંજન"
        },
        Everita: {
            code: "lv-LV-EveritaNeural",
            language: "lv-LV",
            displayName: "Everita",
            localName: "Everita"
        },
        Nils: {
            code: "lv-LV-NilsNeural",
            language: "lv-LV",
            displayName: "Nils",
            localName: "Nils"
        },
        Dena: {
            code: "nl-BE-DenaNeural",
            language: "nl-BE",
            displayName: "Dena",
            localName: "Dena"
        },
        Arnaud: {
            code: "nl-BE-ArnaudNeural",
            language: "nl-BE",
            displayName: "Arnaud",
            localName: "Arnaud"
        },
        Xiaoyi: {
            code: "zh-CN-XiaoyiNeural",
            language: "zh-CN",
            displayName: "Xiaoyi",
            localName: "晓伊"
        },
        Xiaoxiao: {
            code: "zh-CN-XiaoxiaoNeural",
            language: "zh-CN",
            displayName: "Xiaoxiao",
            localName: "晓晓"
        },
        Yunyang: {
            code: "zh-CN-YunyangNeural",
            language: "zh-CN",
            displayName: "Yunyang",
            localName: "云扬"
        },
        Yunxia: {
            code: "zh-CN-YunxiaNeural",
            language: "zh-CN",
            displayName: "Yunxia",
            localName: "云夏"
        },
        Yunxi: {
            code: "zh-CN-YunxiNeural",
            language: "zh-CN",
            displayName: "Yunxi",
            localName: "云希"
        },
        Yunjian: {
            code: "zh-CN-YunjianNeural",
            language: "zh-CN",
            displayName: "Yunjian",
            localName: "云健"
        },
        Uzma: {
            code: "ur-PK-UzmaNeural",
            language: "ur-PK",
            displayName: "Uzma",
            localName: "عظمیٰ"
        },
        Asad: {
            code: "ur-PK-AsadNeural",
            language: "ur-PK",
            displayName: "Asad",
            localName: "اسد"
        },
        Shruti: {
            code: "te-IN-ShrutiNeural",
            language: "te-IN",
            displayName: "Shruti",
            localName: "శ్రుతి"
        },
        Mohan: {
            code: "te-IN-MohanNeural",
            language: "te-IN",
            displayName: "Mohan",
            localName: "మోహన్"
        },
        Swara: {
            code: "hi-IN-SwaraNeural",
            language: "hi-IN",
            displayName: "Swara",
            localName: "स्वरा"
        },
        Madhur: {
            code: "hi-IN-MadhurNeural",
            language: "hi-IN",
            displayName: "Madhur",
            localName: "मधुर"
        },
        Ezinne: {
            code: "en-NG-EzinneNeural",
            language: "en-NG",
            displayName: "Ezinne",
            localName: "Ezinne"
        },
        Abeo: {
            code: "en-NG-AbeoNeural",
            language: "en-NG",
            displayName: "Abeo",
            localName: "Abeo"
        },
        Leni: {
            code: "de-CH-LeniNeural",
            language: "de-CH",
            displayName: "Leni",
            localName: "Leni"
        },
        Jan: {
            code: "de-CH-JanNeural",
            language: "de-CH",
            displayName: "Jan",
            localName: "Jan"
        },
        Nanami: {
            code: "ja-JP-NanamiNeural",
            language: "ja-JP",
            displayName: "Nanami",
            localName: "七海"
        },
        Keita: {
            code: "ja-JP-KeitaNeural",
            language: "ja-JP",
            displayName: "Keita",
            localName: "圭太"
        },
        Vesna: {
            code: "bs-BA-VesnaNeural",
            language: "bs-BA",
            displayName: "Vesna",
            localName: "Vesna"
        },
        Goran: {
            code: "bs-BA-GoranNeural",
            language: "bs-BA",
            displayName: "Goran",
            localName: "Goran"
        },
        Maryam: {
            code: "ar-YE-MaryamNeural",
            language: "ar-YE",
            displayName: "Maryam",
            localName: "مريم"
        },
        Saleh: {
            code: "ar-YE-SalehNeural",
            language: "ar-YE",
            displayName: "Saleh",
            localName: "صالح"
        },
        Hemkala: {
            code: "ne-NP-HemkalaNeural",
            language: "ne-NP",
            displayName: "Hemkala",
            localName: "हेमकला"
        },
        Sagar: {
            code: "ne-NP-SagarNeural",
            language: "ne-NP",
            displayName: "Sagar",
            localName: "सागर"
        },
        Eka: {
            code: "ka-GE-EkaNeural",
            language: "ka-GE",
            displayName: "Eka",
            localName: "ეკა"
        },
        Giorgi: {
            code: "ka-GE-GiorgiNeural",
            language: "ka-GE",
            displayName: "Giorgi",
            localName: "გიორგი"
        },
        Amal: {
            code: "ar-QA-AmalNeural",
            language: "ar-QA",
            displayName: "Amal",
            localName: "أمل"
        },
        Moaz: {
            code: "ar-QA-MoazNeural",
            language: "ar-QA",
            displayName: "Moaz",
            localName: "معاذ"
        },
        Marta: {
            code: "es-GT-MartaNeural",
            language: "es-GT",
            displayName: "Marta",
            localName: "Marta"
        },
        Andres: {
            code: "es-GT-AndresNeural",
            language: "es-GT",
            displayName: "Andres",
            localName: "\xC1ndres"
        },
        Teresa: {
            code: "es-GQ-TeresaNeural",
            language: "es-GQ",
            displayName: "Teresa",
            localName: "Teresa"
        },
        Javier: {
            code: "es-GQ-JavierNeural",
            language: "es-GQ",
            displayName: "Javier",
            localName: "Javier"
        },
        Camila: {
            code: "es-PE-CamilaNeural",
            language: "es-PE",
            displayName: "Camila",
            localName: "Camila"
        },
        Alex: {
            code: "es-PE-AlexNeural",
            language: "es-PE",
            displayName: "Alex",
            localName: "\xC1lex"
        },
        Molly: {
            code: "en-NZ-MollyNeural",
            language: "en-NZ",
            displayName: "Molly",
            localName: "Molly"
        },
        Mitchell: {
            code: "en-NZ-MitchellNeural",
            language: "en-NZ",
            displayName: "Mitchell",
            localName: "Mitchell"
        },
        Dilara: {
            code: "fa-IR-DilaraNeural",
            language: "fa-IR",
            displayName: "Dilara",
            localName: "دلارا"
        },
        Farid: {
            code: "fa-IR-FaridNeural",
            language: "fa-IR",
            displayName: "Farid",
            localName: "فرید"
        },
        Margarita: {
            code: "es-PA-MargaritaNeural",
            language: "es-PA",
            displayName: "Margarita",
            localName: "Margarita"
        },
        Roberto: {
            code: "es-PA-RobertoNeural",
            language: "es-PA",
            displayName: "Roberto",
            localName: "Roberto"
        },
        Alina: {
            code: "ro-RO-AlinaNeural",
            language: "ro-RO",
            displayName: "Alina",
            localName: "Alina"
        },
        Emil: {
            code: "ro-RO-EmilNeural",
            language: "ro-RO",
            displayName: "Emil",
            localName: "Emil"
        },
        Grace: {
            code: "mt-MT-GraceNeural",
            language: "mt-MT",
            displayName: "Grace",
            localName: "Grace"
        },
        Joseph: {
            code: "mt-MT-JosephNeural",
            language: "mt-MT",
            displayName: "Joseph",
            localName: "Joseph"
        },
        Anu: {
            code: "et-EE-AnuNeural",
            language: "et-EE",
            displayName: "Anu",
            localName: "Anu"
        },
        Kert: {
            code: "et-EE-KertNeural",
            language: "et-EE",
            displayName: "Kert",
            localName: "Kert"
        },
        Emel: {
            code: "tr-TR-EmelNeural",
            language: "tr-TR",
            displayName: "Emel",
            localName: "Emel"
        },
        Ahmet: {
            code: "tr-TR-AhmetNeural",
            language: "tr-TR",
            displayName: "Ahmet",
            localName: "Ahmet"
        },
        Denise: {
            code: "fr-FR-DeniseNeural",
            language: "fr-FR",
            displayName: "Denise",
            localName: "Denise"
        },
        Eloise: {
            code: "fr-FR-EloiseNeural",
            language: "fr-FR",
            displayName: "Eloise",
            localName: "Eloise"
        },
        Henri: {
            code: "fr-FR-HenriNeural",
            language: "fr-FR",
            displayName: "Henri",
            localName: "Henri"
        },
        HoaiMy: {
            code: "vi-VN-HoaiMyNeural",
            language: "vi-VN",
            displayName: "HoaiMy",
            localName: "Ho\xE0i My"
        },
        NamMinh: {
            code: "vi-VN-NamMinhNeural",
            language: "vi-VN",
            displayName: "NamMinh",
            localName: "Nam Minh"
        },
        Libby: {
            code: "en-GB-LibbyNeural",
            language: "en-GB",
            displayName: "Libby",
            localName: "Libby"
        },
        Sonia: {
            code: "en-GB-SoniaNeural",
            language: "en-GB",
            displayName: "Sonia",
            localName: "Sonia"
        },
        Thomas: {
            code: "en-GB-ThomasNeural",
            language: "en-GB",
            displayName: "Thomas",
            localName: "Thomas"
        },
        Ryan: {
            code: "en-GB-RyanNeural",
            language: "en-GB",
            displayName: "Ryan",
            localName: "Ryan"
        },
        Sreymom: {
            code: "km-KH-SreymomNeural",
            language: "km-KH",
            displayName: "Sreymom",
            localName: "ស្រីមុំ"
        },
        Piseth: {
            code: "km-KH-PisethNeural",
            language: "km-KH",
            displayName: "Piseth",
            localName: "ពិសិដ្ឋ"
        },
        Noora: {
            code: "fi-FI-NooraNeural",
            language: "fi-FI",
            displayName: "Noora",
            localName: "Noora"
        },
        Harri: {
            code: "fi-FI-HarriNeural",
            language: "fi-FI",
            displayName: "Harri",
            localName: "Harri"
        },
        Banu: {
            code: "az-AZ-BanuNeural",
            language: "az-AZ",
            displayName: "Banu",
            localName: "Banu"
        },
        Babek: {
            code: "az-AZ-BabekNeural",
            language: "az-AZ",
            displayName: "Babek",
            localName: "Babək"
        },
        Clara: {
            code: "en-CA-ClaraNeural",
            language: "en-CA",
            displayName: "Clara",
            localName: "Clara"
        },
        Liam: {
            code: "en-CA-LiamNeural",
            language: "en-CA",
            displayName: "Liam",
            localName: "Liam"
        },
        Ona: {
            code: "lt-LT-OnaNeural",
            language: "lt-LT",
            displayName: "Ona",
            localName: "Ona"
        },
        Leonas: {
            code: "lt-LT-LeonasNeural",
            language: "lt-LT",
            displayName: "Leonas",
            localName: "Leonas"
        },
        Fatima: {
            code: "ar-AE-FatimaNeural",
            language: "ar-AE",
            displayName: "Fatima",
            localName: "فاطمة"
        },
        Hamdan: {
            code: "ar-AE-HamdanNeural",
            language: "ar-AE",
            displayName: "Hamdan",
            localName: "حمدان"
        },
        Petra: {
            code: "sl-SI-PetraNeural",
            language: "sl-SI",
            displayName: "Petra",
            localName: "Petra"
        },
        Rok: {
            code: "sl-SI-RokNeural",
            language: "sl-SI",
            displayName: "Rok",
            localName: "Rok"
        },
        Ramona: {
            code: "es-DO-RamonaNeural",
            language: "es-DO",
            displayName: "Ramona",
            localName: "Ramona"
        },
        Emilio: {
            code: "es-DO-EmilioNeural",
            language: "es-DO",
            displayName: "Emilio",
            localName: "Emilio"
        },
        Rana: {
            code: "ar-IQ-RanaNeural",
            language: "ar-IQ",
            displayName: "Rana",
            localName: "رنا"
        },
        Bassel: {
            code: "ar-IQ-BasselNeural",
            language: "ar-IQ",
            displayName: "Bassel",
            localName: "باسل"
        },
        Tanishaa: {
            code: "bn-IN-TanishaaNeural",
            language: "bn-IN",
            displayName: "Tanishaa",
            localName: "তানিশা"
        },
        Bashkar: {
            code: "bn-IN-BashkarNeural",
            language: "bn-IN",
            displayName: "Bashkar",
            localName: "ভাস্কর"
        },
        Thilini: {
            code: "si-LK-ThiliniNeural",
            language: "si-LK",
            displayName: "Thilini",
            localName: "තිළිණි"
        },
        Sameera: {
            code: "si-LK-SameeraNeural",
            language: "si-LK",
            displayName: "Sameera",
            localName: "සමීර"
        },
        Ariane: {
            code: "fr-CH-ArianeNeural",
            language: "fr-CH",
            displayName: "Ariane",
            localName: "Ariane"
        },
        Fabrice: {
            code: "fr-CH-FabriceNeural",
            language: "fr-CH",
            displayName: "Fabrice",
            localName: "Fabrice"
        },
        Andrea: {
            code: "es-EC-AndreaNeural",
            language: "es-EC",
            displayName: "Andrea",
            localName: "Andrea"
        },
        Luis: {
            code: "es-EC-LuisNeural",
            language: "es-EC",
            displayName: "Luis",
            localName: "Luis"
        },
        Paloma: {
            code: "es-US-PalomaNeural",
            language: "es-US",
            displayName: "Paloma",
            localName: "Paloma"
        },
        Alonso: {
            code: "es-US-AlonsoNeural",
            language: "es-US",
            displayName: "Alonso",
            localName: "Alonso"
        },
        Sapna: {
            code: "kn-IN-SapnaNeural",
            language: "kn-IN",
            displayName: "Sapna",
            localName: "ಸಪ್ನಾ"
        },
        Gagan: {
            code: "kn-IN-GaganNeural",
            language: "kn-IN",
            displayName: "Gagan",
            localName: "ಗಗನ್"
        },
        Keomany: {
            code: "lo-LA-KeomanyNeural",
            language: "lo-LA",
            displayName: "Keomany",
            localName: "ແກ້ວມະນີ"
        },
        Chanthavong: {
            code: "lo-LA-ChanthavongNeural",
            language: "lo-LA",
            displayName: "Chanthavong",
            localName: "ຈັນທະວົງ"
        },
        Zariyah: {
            code: "ar-SA-ZariyahNeural",
            language: "ar-SA",
            displayName: "Zariyah",
            localName: "زارية"
        },
        Hamed: {
            code: "ar-SA-HamedNeural",
            language: "ar-SA",
            displayName: "Hamed",
            localName: "حامد"
        },
        Joana: {
            code: "ca-ES-JoanaNeural",
            language: "ca-ES",
            displayName: "Joana",
            localName: "Joana"
        },
        Enric: {
            code: "ca-ES-EnricNeural",
            language: "ca-ES",
            displayName: "Enric",
            localName: "Enric"
        },
        Katja: {
            code: "de-DE-KatjaNeural",
            language: "de-DE",
            displayName: "Katja",
            localName: "Katja"
        },
        Amala: {
            code: "de-DE-AmalaNeural",
            language: "de-DE",
            displayName: "Amala",
            localName: "Amala"
        },
        Conrad: {
            code: "de-DE-ConradNeural",
            language: "de-DE",
            displayName: "Conrad",
            localName: "Conrad"
        },
        Killian: {
            code: "de-DE-KillianNeural",
            language: "de-DE",
            displayName: "Killian",
            localName: "Killian"
        },
        HiuGaai: {
            code: "zh-HK-HiuGaaiNeural",
            language: "zh-HK",
            displayName: "HiuGaai",
            localName: "曉佳"
        },
        HiuMaan: {
            code: "zh-HK-HiuMaanNeural",
            language: "zh-HK",
            displayName: "HiuMaan",
            localName: "曉曼"
        },
        WanLung: {
            code: "zh-HK-WanLungNeural",
            language: "zh-HK",
            displayName: "WanLung",
            localName: "雲龍"
        },
        Francisca: {
            code: "pt-BR-FranciscaNeural",
            language: "pt-BR",
            displayName: "Francisca",
            localName: "Francisca"
        },
        Antonio: {
            code: "pt-BR-AntonioNeural",
            language: "pt-BR",
            displayName: "Antonio",
            localName: "Antonio"
        },
        Valentina: {
            code: "es-UY-ValentinaNeural",
            language: "es-UY",
            displayName: "Valentina",
            localName: "Valentina"
        },
        Mateo: {
            code: "es-UY-MateoNeural",
            language: "es-UY",
            displayName: "Mateo",
            localName: "Mateo"
        },
        Zuri: {
            code: "sw-KE-ZuriNeural",
            language: "sw-KE",
            displayName: "Zuri",
            localName: "Zuri"
        },
        Rafiki: {
            code: "sw-KE-RafikiNeural",
            language: "sw-KE",
            displayName: "Rafiki",
            localName: "Rafiki"
        },
        Laila: {
            code: "ar-BH-LailaNeural",
            language: "ar-BH",
            displayName: "Laila",
            localName: "ليلى"
        },
        Ali: {
            code: "ar-BH-AliNeural",
            language: "ar-BH",
            displayName: "Ali",
            localName: "علي"
        },
        Elvira: {
            code: "es-ES-ElviraNeural",
            language: "es-ES",
            displayName: "Elvira",
            localName: "Elvira"
        },
        Alvaro: {
            code: "es-ES-AlvaroNeural",
            language: "es-ES",
            displayName: "Alvaro",
            localName: "Alvaro"
        },
        Aigul: {
            code: "kk-KZ-AigulNeural",
            language: "kk-KZ",
            displayName: "Aigul",
            localName: "Айгүл"
        },
        Daulet: {
            code: "kk-KZ-DauletNeural",
            language: "kk-KZ",
            displayName: "Daulet",
            localName: "Дәулет"
        },
        Sana: {
            code: "ar-JO-SanaNeural",
            language: "ar-JO",
            displayName: "Sana",
            localName: "سناء"
        },
        Taim: {
            code: "ar-JO-TaimNeural",
            language: "ar-JO",
            displayName: "Taim",
            localName: "تيم"
        },
        Paola: {
            code: "es-VE-PaolaNeural",
            language: "es-VE",
            displayName: "Paola",
            localName: "Paola"
        },
        Sebastian: {
            code: "es-VE-SebastianNeural",
            language: "es-VE",
            displayName: "Sebastian",
            localName: "Sebasti\xE1n"
        },
        Ubax: {
            code: "so-SO-UbaxNeural",
            language: "so-SO",
            displayName: "Ubax",
            localName: "Ubax"
        },
        Muuse: {
            code: "so-SO-MuuseNeural",
            language: "so-SO",
            displayName: "Muuse",
            localName: "Muuse"
        },
        Imani: {
            code: "en-TZ-ImaniNeural",
            language: "en-TZ",
            displayName: "Imani",
            localName: "Imani"
        },
        Elimu: {
            code: "en-TZ-ElimuNeural",
            language: "en-TZ",
            displayName: "Elimu",
            localName: "Elimu"
        },
        Tuti: {
            code: "su-ID-TutiNeural",
            language: "su-ID",
            displayName: "Tuti",
            localName: "Tuti"
        },
        Jajang: {
            code: "su-ID-JajangNeural",
            language: "su-ID",
            displayName: "Jajang",
            localName: "Jajang"
        },
        Dalia: {
            code: "es-MX-DaliaNeural",
            language: "es-MX",
            displayName: "Dalia",
            localName: "Dalia"
        },
        Jorge: {
            code: "es-MX-JorgeNeural",
            language: "es-MX",
            displayName: "Jorge",
            localName: "Jorge"
        },
        Elsa: {
            code: "it-IT-ElsaNeural",
            language: "it-IT",
            displayName: "Elsa",
            localName: "Elsa"
        },
        Isabella: {
            code: "it-IT-IsabellaNeural",
            language: "it-IT",
            displayName: "Isabella",
            localName: "Isabella"
        },
        Diego: {
            code: "it-IT-DiegoNeural",
            language: "it-IT",
            displayName: "Diego",
            localName: "Diego"
        },
        Gul: {
            code: "ur-IN-GulNeural",
            language: "ur-IN",
            displayName: "Gul",
            localName: "گل"
        },
        Salman: {
            code: "ur-IN-SalmanNeural",
            language: "ur-IN",
            displayName: "Salman",
            localName: "سلمان"
        },
        Nabanita: {
            code: "bn-BD-NabanitaNeural",
            language: "bn-BD",
            displayName: "Nabanita",
            localName: "নবনীতা"
        },
        Pradeep: {
            code: "bn-BD-PradeepNeural",
            language: "bn-BD",
            displayName: "Pradeep",
            localName: "প্রদ্বীপ"
        },
        Gadis: {
            code: "id-ID-GadisNeural",
            language: "id-ID",
            displayName: "Gadis",
            localName: "Gadis"
        },
        Ardi: {
            code: "id-ID-ArdiNeural",
            language: "id-ID",
            displayName: "Ardi",
            localName: "Ardi"
        },
        Yolanda: {
            code: "es-NI-YolandaNeural",
            language: "es-NI",
            displayName: "Yolanda",
            localName: "Yolanda"
        },
        Federico: {
            code: "es-NI-FedericoNeural",
            language: "es-NI",
            displayName: "Federico",
            localName: "Federico"
        },
        Premwadee: {
            code: "th-TH-PremwadeeNeural",
            language: "th-TH",
            displayName: "Premwadee",
            localName: "เปรมวดี"
        },
        Niwat: {
            code: "th-TH-NiwatNeural",
            language: "th-TH",
            displayName: "Niwat",
            localName: "นิวัฒน์"
        }
    },
    Gf = {
        "af-ZA": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "am-ET": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "ar-AE": {
            0: [],
            1: []
        },
        "ar-BH": {
            0: [],
            1: []
        },
        "ar-DZ": {
            0: [],
            1: []
        },
        "ar-EG": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "ar-IQ": {
            0: [],
            1: []
        },
        "ar-JO": {
            0: [],
            1: []
        },
        "ar-KW": {
            0: [],
            1: []
        },
        "ar-LB": {
            0: [],
            1: []
        },
        "ar-LY": {
            0: [],
            1: []
        },
        "ar-MA": {
            0: [],
            1: []
        },
        "ar-OM": {
            0: [],
            1: []
        },
        "ar-QA": {
            0: [],
            1: []
        },
        "ar-SA": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "ar-SY": {
            0: [],
            1: []
        },
        "ar-TN": {
            0: [],
            1: []
        },
        "ar-YE": {
            0: [],
            1: []
        },
        "az-AZ": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "bg-BG": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "bn-BD": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "bn-IN": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "bs-BA": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "ca-ES": {
            0: ["Alba", "AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "cs-CZ": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "cy-GB": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "da-DK": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "de-AT": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "de-CH": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "de-DE": {
            0: ["Seraphina:DragonHDLatestNeural", "Gisela", "Elke", "Klarissa", "Louisa", "Maja", "Tanja", "AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["Bernd", "Kasper", "Christoph", "Klaus", "Ralf", "AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "el-GR": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "en-AU": {
            0: ["Annette", "Carly", "Elsie", "Freya", "Joanne", "Kim", "Tina", "AvaMultilingual", "EmmaMultilingual", "JennyMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["Darren", "Duncan", "Ken", "Neil", "Tim", "AndrewMultilingual", "BrianMultilingual", "RyanMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "en-CA": {
            0: ["AvaMultilingual", "EmmaMultilingual", "JennyMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "RyanMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "en-GB": {
            0: ["Abbi", "Bella", "Hollie", "Olivia", "Mia", "AvaMultilingual", "EmmaMultilingual", "JennyMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["Alfie", "Elliot", "Ethan", "Noah", "Oliver", "RyanMultilingual", "AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "en-HK": {
            0: ["JennyMultilingual"],
            1: ["RyanMultilingual"]
        },
        "en-IE": {
            0: ["AvaMultilingual", "EmmaMultilingual", "JennyMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "RyanMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "en-IN": {
            0: ["Aashi", "Ananya", "Kavya", "AvaMultilingual", "EmmaMultilingual", "JennyMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "RyanMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "en-KE": {
            0: [],
            1: []
        },
        "en-NG": {
            0: [],
            1: []
        },
        "en-NZ": {
            0: [],
            1: []
        },
        "en-PH": {
            0: [],
            1: []
        },
        "en-SG": {
            0: [],
            1: []
        },
        "en-TZ": {
            0: [],
            1: []
        },
        "en-US": {
            0: ["Aria:DragonHDLatestNeural", "Ava:DragonHDLatestNeural", "Emma:DragonHDLatestNeural", "Emma2:DragonHDLatestNeural", "Jenny:DragonHDLatestNeural", "Jane", "Sara", "Nancy", "Amber", "Ashley", "Cora", "Elizabeth", "Monica", "AIGenerate2", "Blue", "JennyMultilingual", "AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["Andrew:DragonHDLatestNeural", "Andrew2:DragonHDLatestNeural", "Davis:DragonHDLatestNeural", "Steffan:DragonHDLatestNeural", "Davis", "Jason", "Tony", "Brandon", "Jacob", "AIGenerate1", "Blue", "AndrewMultilingual", "BrianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual", "FlorianMultilingual"]
        },
        "en-ZA": {
            0: [],
            1: []
        },
        "es-AR": {
            0: [],
            1: []
        },
        "es-BO": {
            0: [],
            1: []
        },
        "es-CL": {
            0: [],
            1: []
        },
        "es-CO": {
            0: [],
            1: []
        },
        "es-CR": {
            0: [],
            1: []
        },
        "es-CU": {
            0: [],
            1: []
        },
        "es-DO": {
            0: [],
            1: []
        },
        "es-EC": {
            0: [],
            1: []
        },
        "es-ES": {
            0: ["Abril", "Estrella", "Irene", "Laia", "Lia", "Triana", "Vera", "Ximena", "AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["Arnau", "Dario", "Elias", "Nil", "Saul", "Teo", "AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "es-GQ": {
            0: [],
            1: []
        },
        "es-GT": {
            0: [],
            1: []
        },
        "es-HN": {
            0: [],
            1: []
        },
        "es-MX": {
            0: ["Beatriz", "Candela", "Carlota", "Larissa", "Marina", "Nuria", "Renata", "AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["Cecilio", "Gerardo", "Liberto", "Luciano", "Pelayo", "Yago", "AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "es-NI": {
            0: [],
            1: []
        },
        "es-PA": {
            0: [],
            1: []
        },
        "es-PE": {
            0: [],
            1: []
        },
        "es-PR": {
            0: [],
            1: []
        },
        "es-PY": {
            0: [],
            1: []
        },
        "es-SV": {
            0: [],
            1: []
        },
        "es-US": {
            0: [],
            1: []
        },
        "es-UY": {
            0: [],
            1: []
        },
        "es-VE": {
            0: [],
            1: []
        },
        "et-EE": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "eu-ES": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "fa-IR": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "fi-FI": {
            0: ["Selma", "AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "fil-PH": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "RyanMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "fr-BE": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "fr-CA": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["Thierry", "AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "fr-CH": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "fr-FR": {
            0: ["Jacqueline", "Josephine", "Brigitte", "Coralie", "Celeste", "Yvette", "AvaMultilingual", "EmmaMultilingual", "VivienneMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["Claude", "Alain", "Jerome", "Maurice", "Yves", "AndrewMultilingual", "BrianMultilingual", "RemyMultilingual", "FlorianMultilingual", "RyanMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "ga-IE": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "gl-ES": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "gu-IN": {
            0: [],
            1: []
        },
        "he-IL": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "hi-IN": {
            0: ["Ananya-hi", "Kavya-hi", "AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "hr-HR": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "hu-HU": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "hy-AM": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "id-ID": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "is-IS": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "it-IT": {
            0: ["Fabiola", "Fiamma", "Imelda", "Irma", "Palmira", "Pierina", "AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["Benigno", "Calimero", "Cataldo", "Gianni", "Giuseppe", "Lisandro", "Rinaldo", "AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "ja-JP": {
            0: ["Shiori", "Mayu", "Aoi", "AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["Masaru:DragonHDLatestNeural", "Naoki", "Daichi", "AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "jv-ID": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "ka-GE": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "kk-KZ": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "km-KH": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "kn-IN": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "ko-KR": {
            0: ["JiMin", "SeoHyeon", "SoonBok", "YuJin", "SeraphinaMultilingual", "AvaMultilingual", "EmmaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["BongJin", "GookMin", "Hyunsu", "AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "lo-LA": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "lt-LT": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "lv-LV": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "mk-MK": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "ml-IN": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "mn-MN": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "mr-IN": {
            0: [],
            1: []
        },
        "ms-MY": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "mt-MT": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "my-MM": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "nb-NO": {
            0: ["Iselin", "AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "ne-NP": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "nl-BE": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "nl-NL": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "pl-PL": {
            0: ["Agnieszka", "AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "ps-AF": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "pt-BR": {
            0: ["Giovanna", "Leila", "Leticia", "Yara", "Manuela", "Thalita", "Elza", "Brenda", "AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["Julio", "Humberto", "Nicolau", "Valerio", "Fabio", "Donato", "AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "pt-PT": {
            0: ["Fernanda", "AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "ro-RO": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "ru-RU": {
            0: ["Dariya", "AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "si-LK": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "sk-SK": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "sl-SI": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "so-SO": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "sq-AL": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "sr-RS": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "su-ID": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "sv-SE": {
            0: ["Hillevi", "AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "sw-KE": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "sw-TZ": {
            0: [],
            1: []
        },
        "ta-IN": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "ta-LK": {
            0: [],
            1: []
        },
        "ta-MY": {
            0: [],
            1: []
        },
        "ta-SG": {
            0: [],
            1: []
        },
        "te-IN": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "th-TH": {
            0: ["Achara", "AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "tr-TR": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "uk-UA": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "ur-IN": {
            0: [],
            1: []
        },
        "ur-PK": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "uz-UZ": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "vi-VN": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "zh-CN": {
            0: ["Xiaochen:DragonHDLatestNeural", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual", "Xiaohan", "Xiaomeng", "Xiaomo", "Xiaoqiu", "Xiaorui", "Xiaoshuang", "Xiaoyan", "Xiaoxuan", "Xiaoyou", "Xiaozhen", "Xiaorou", "Xiaotong", "XiaoMin", "Xiaobei", "Xiaoni"],
            1: ["YunyiMultilingual", "Yunfeng", "Yunhao", "Yunjie", "Yunye", "Yunze", "Yunzhe", "YunSong", "Yunqi", "Yundeng", "Yunbiao", "Yunxiang", "Yunxi-SiChuan"]
        },
        "zh-HK": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "zh-TW": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "JennyMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RyanMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        },
        "zu-ZA": {
            0: ["AvaMultilingual", "EmmaMultilingual", "SeraphinaMultilingual", "VivienneMultilingual", "XiaoxiaoMultilingual", "XiaochenMultilingual", "XiaoyuMultilingual"],
            1: ["AndrewMultilingual", "BrianMultilingual", "FlorianMultilingual", "RemyMultilingual", "MasaruMultilingual", "YunyiMultilingual"]
        }
    },
    Zf = {
        "zh-CN": {
            0: ["zf_001", "zf_002", "zf_003", "zf_004", "zf_005", "zf_006", "zf_007", "zf_008", "zf_017", "zf_018", "zf_019", "zf_021", "zf_022", "zf_023", "zf_024", "zf_026", "zf_027", "zf_028", "zf_032", "zf_036", "zf_038", "zf_039", "zf_040", "zf_042", "zf_043", "zf_044", "zf_046", "zf_047", "zf_048", "zf_049", "zf_051", "zf_059", "zf_060", "zf_067", "zf_070", "zf_071", "zf_072", "zf_073", "zf_074", "zf_075", "zf_076", "zf_077", "zf_078", "zf_079", "zf_083", "zf_084", "zf_085", "zf_086", "zf_087", "zf_088", "zf_090", "zf_092", "zf_093", "zf_094", "zf_099"],
            1: ["zm_009", "zm_010", "zm_011", "zm_012", "zm_013", "zm_014", "zm_015", "zm_016", "zm_020", "zm_025", "zm_029", "zm_030", "zm_031", "zm_033", "zm_034", "zm_035", "zm_037", "zm_041", "zm_045", "zm_050", "zm_052", "zm_053", "zm_054", "zm_055", "zm_056", "zm_057", "zm_058", "zm_061", "zm_062", "zm_063", "zm_064", "zm_065", "zm_066", "zm_068", "zm_069", "zm_080", "zm_081", "zm_082", "zm_089", "zm_091", "zm_095", "zm_096", "zm_097", "zm_098", "zm_100"]
        },
        "en-GB": {
            0: ["bf_emma"]
        },
        "en-US": {
            0: ["af_bella", "af_heart", "af_nicole"]
        },
        "es-ES": {
            0: ["ef_dora"],
            1: ["em_alex", "em_santa"]
        },
        "fr-FR": {
            0: ["ff_siwis"]
        },
        "pt-BR": {
            0: ["pf_dora"],
            1: ["pm_alex", "pm_santa"]
        }
    },
    Yb = {
        zf_001: {
            code: "zf_001",
            language: "zh-CN",
            displayName: "知夏",
            localName: "知夏"
        },
        zf_002: {
            code: "zf_002",
            language: "zh-CN",
            displayName: "景禾",
            localName: "景禾"
        },
        zf_003: {
            code: "zf_003",
            language: "zh-CN",
            displayName: "知宁",
            localName: "知宁"
        },
        zf_004: {
            code: "zf_004",
            language: "zh-CN",
            displayName: "予晴",
            localName: "予晴"
        },
        zf_005: {
            code: "zf_005",
            language: "zh-CN",
            displayName: "映棠",
            localName: "映棠"
        },
        zf_006: {
            code: "zf_006",
            language: "zh-CN",
            displayName: "时雨",
            localName: "时雨"
        },
        zf_007: {
            code: "zf_007",
            language: "zh-CN",
            displayName: "闻溪",
            localName: "闻溪"
        },
        zf_008: {
            code: "zf_008",
            language: "zh-CN",
            displayName: "念初",
            localName: "念初"
        },
        zf_017: {
            code: "zf_017",
            language: "zh-CN",
            displayName: "书遥",
            localName: "书遥"
        },
        zf_018: {
            code: "zf_018",
            language: "zh-CN",
            displayName: "以澄",
            localName: "以澄"
        },
        zf_019: {
            code: "zf_019",
            language: "zh-CN",
            displayName: "向柠",
            localName: "向柠"
        },
        zf_021: {
            code: "zf_021",
            language: "zh-CN",
            displayName: "予安",
            localName: "予安"
        },
        zf_022: {
            code: "zf_022",
            language: "zh-CN",
            displayName: "予棠",
            localName: "予棠"
        },
        zf_023: {
            code: "zf_023",
            language: "zh-CN",
            displayName: "沐言",
            localName: "沐言"
        },
        zf_024: {
            code: "zf_024",
            language: "zh-CN",
            displayName: "听岚",
            localName: "听岚"
        },
        zf_026: {
            code: "zf_026",
            language: "zh-CN",
            displayName: "今禾",
            localName: "今禾"
        },
        zf_027: {
            code: "zf_027",
            language: "zh-CN",
            displayName: "知微",
            localName: "知微"
        },
        zf_028: {
            code: "zf_028",
            language: "zh-CN",
            displayName: "清妍",
            localName: "清妍"
        },
        zf_032: {
            code: "zf_032",
            language: "zh-CN",
            displayName: "予澈",
            localName: "予澈"
        },
        zf_036: {
            code: "zf_036",
            language: "zh-CN",
            displayName: "时澄",
            localName: "时澄"
        },
        zf_038: {
            code: "zf_038",
            language: "zh-CN",
            displayName: "雨棠",
            localName: "雨棠"
        },
        zf_039: {
            code: "zf_039",
            language: "zh-CN",
            displayName: "可晴",
            localName: "可晴"
        },
        zf_040: {
            code: "zf_040",
            language: "zh-CN",
            displayName: "予澜",
            localName: "予澜"
        },
        zf_042: {
            code: "zf_042",
            language: "zh-CN",
            displayName: "知澄",
            localName: "知澄"
        },
        zf_043: {
            code: "zf_043",
            language: "zh-CN",
            displayName: "今岚",
            localName: "今岚"
        },
        zf_044: {
            code: "zf_044",
            language: "zh-CN",
            displayName: "闻澈",
            localName: "闻澈"
        },
        zf_046: {
            code: "zf_046",
            language: "zh-CN",
            displayName: "景川",
            localName: "景川"
        },
        zf_047: {
            code: "zf_047",
            language: "zh-CN",
            displayName: "念禾",
            localName: "念禾"
        },
        zf_048: {
            code: "zf_048",
            language: "zh-CN",
            displayName: "向晴",
            localName: "向晴"
        },
        zf_049: {
            code: "zf_049",
            language: "zh-CN",
            displayName: "时宁",
            localName: "时宁"
        },
        zf_051: {
            code: "zf_051",
            language: "zh-CN",
            displayName: "林夏",
            localName: "林夏"
        },
        zf_059: {
            code: "zf_059",
            language: "zh-CN",
            displayName: "言溪",
            localName: "言溪"
        },
        zf_060: {
            code: "zf_060",
            language: "zh-CN",
            displayName: "予柠",
            localName: "予柠"
        },
        zf_067: {
            code: "zf_067",
            language: "zh-CN",
            displayName: "书晴",
            localName: "书晴"
        },
        zf_070: {
            code: "zf_070",
            language: "zh-CN",
            displayName: "以宁",
            localName: "以宁"
        },
        zf_071: {
            code: "zf_071",
            language: "zh-CN",
            displayName: "今澈",
            localName: "今澈"
        },
        zf_072: {
            code: "zf_072",
            language: "zh-CN",
            displayName: "可岚",
            localName: "可岚"
        },
        zf_073: {
            code: "zf_073",
            language: "zh-CN",
            displayName: "念晴",
            localName: "念晴"
        },
        zf_074: {
            code: "zf_074",
            language: "zh-CN",
            displayName: "向禾",
            localName: "向禾"
        },
        zf_075: {
            code: "zf_075",
            language: "zh-CN",
            displayName: "听澄",
            localName: "听澄"
        },
        zf_076: {
            code: "zf_076",
            language: "zh-CN",
            displayName: "言澈",
            localName: "言澈"
        },
        zf_077: {
            code: "zf_077",
            language: "zh-CN",
            displayName: "知岚",
            localName: "知岚"
        },
        zf_078: {
            code: "zf_078",
            language: "zh-CN",
            displayName: "映晴",
            localName: "映晴"
        },
        zf_079: {
            code: "zf_079",
            language: "zh-CN",
            displayName: "书宁",
            localName: "书宁"
        },
        zf_083: {
            code: "zf_083",
            language: "zh-CN",
            displayName: "以夏",
            localName: "以夏"
        },
        zf_084: {
            code: "zf_084",
            language: "zh-CN",
            displayName: "允棠",
            localName: "允棠"
        },
        zf_085: {
            code: "zf_085",
            language: "zh-CN",
            displayName: "允晴",
            localName: "允晴"
        },
        zf_086: {
            code: "zf_086",
            language: "zh-CN",
            displayName: "初棠",
            localName: "初棠"
        },
        zf_087: {
            code: "zf_087",
            language: "zh-CN",
            displayName: "初晴",
            localName: "初晴"
        },
        zf_088: {
            code: "zf_088",
            language: "zh-CN",
            displayName: "景澄",
            localName: "景澄"
        },
        zf_090: {
            code: "zf_090",
            language: "zh-CN",
            displayName: "向棠",
            localName: "向棠"
        },
        zf_092: {
            code: "zf_092",
            language: "zh-CN",
            displayName: "听夏",
            localName: "听夏"
        },
        zf_093: {
            code: "zf_093",
            language: "zh-CN",
            displayName: "允夏",
            localName: "允夏"
        },
        zf_094: {
            code: "zf_094",
            language: "zh-CN",
            displayName: "映澄",
            localName: "映澄"
        },
        zf_099: {
            code: "zf_099",
            language: "zh-CN",
            displayName: "言棠",
            localName: "言棠"
        },
        zm_009: {
            code: "zm_009",
            language: "zh-CN",
            displayName: "景廷",
            localName: "景廷"
        },
        zm_010: {
            code: "zm_010",
            language: "zh-CN",
            displayName: "时野",
            localName: "时野"
        },
        zm_011: {
            code: "zm_011",
            language: "zh-CN",
            displayName: "予川",
            localName: "予川"
        },
        zm_012: {
            code: "zm_012",
            language: "zh-CN",
            displayName: "今野",
            localName: "今野"
        },
        zm_013: {
            code: "zm_013",
            language: "zh-CN",
            displayName: "言川",
            localName: "言川"
        },
        zm_014: {
            code: "zm_014",
            language: "zh-CN",
            displayName: "知野",
            localName: "知野"
        },
        zm_015: {
            code: "zm_015",
            language: "zh-CN",
            displayName: "以川",
            localName: "以川"
        },
        zm_016: {
            code: "zm_016",
            language: "zh-CN",
            displayName: "景野",
            localName: "景野"
        },
        zm_020: {
            code: "zm_020",
            language: "zh-CN",
            displayName: "时川",
            localName: "时川"
        },
        zm_025: {
            code: "zm_025",
            language: "zh-CN",
            displayName: "言野",
            localName: "言野"
        },
        zm_029: {
            code: "zm_029",
            language: "zh-CN",
            displayName: "予野",
            localName: "予野"
        },
        zm_030: {
            code: "zm_030",
            language: "zh-CN",
            displayName: "以野",
            localName: "以野"
        },
        zm_031: {
            code: "zm_031",
            language: "zh-CN",
            displayName: "知川",
            localName: "知川"
        },
        zm_033: {
            code: "zm_033",
            language: "zh-CN",
            displayName: "今川",
            localName: "今川"
        },
        zm_034: {
            code: "zm_034",
            language: "zh-CN",
            displayName: "景珩",
            localName: "景珩"
        },
        zm_035: {
            code: "zm_035",
            language: "zh-CN",
            displayName: "言峻",
            localName: "言峻"
        },
        zm_037: {
            code: "zm_037",
            language: "zh-CN",
            displayName: "景屿",
            localName: "景屿"
        },
        zm_041: {
            code: "zm_041",
            language: "zh-CN",
            displayName: "以舟",
            localName: "以舟"
        },
        zm_045: {
            code: "zm_045",
            language: "zh-CN",
            displayName: "予廷",
            localName: "予廷"
        },
        zm_050: {
            code: "zm_050",
            language: "zh-CN",
            displayName: "知珩",
            localName: "知珩"
        },
        zm_052: {
            code: "zm_052",
            language: "zh-CN",
            displayName: "今珂",
            localName: "今珂"
        },
        zm_053: {
            code: "zm_053",
            language: "zh-CN",
            displayName: "言屿",
            localName: "言屿"
        },
        zm_054: {
            code: "zm_054",
            language: "zh-CN",
            displayName: "以珩",
            localName: "以珩"
        },
        zm_055: {
            code: "zm_055",
            language: "zh-CN",
            displayName: "予屿",
            localName: "予屿"
        },
        zm_056: {
            code: "zm_056",
            language: "zh-CN",
            displayName: "知廷",
            localName: "知廷"
        },
        zm_057: {
            code: "zm_057",
            language: "zh-CN",
            displayName: "今屿",
            localName: "今屿"
        },
        zm_058: {
            code: "zm_058",
            language: "zh-CN",
            displayName: "时珂",
            localName: "时珂"
        },
        zm_061: {
            code: "zm_061",
            language: "zh-CN",
            displayName: "言廷",
            localName: "言廷"
        },
        zm_062: {
            code: "zm_062",
            language: "zh-CN",
            displayName: "以屿",
            localName: "以屿"
        },
        zm_063: {
            code: "zm_063",
            language: "zh-CN",
            displayName: "予珂",
            localName: "予珂"
        },
        zm_064: {
            code: "zm_064",
            language: "zh-CN",
            displayName: "知屿",
            localName: "知屿"
        },
        zm_065: {
            code: "zm_065",
            language: "zh-CN",
            displayName: "今廷",
            localName: "今廷"
        },
        zm_066: {
            code: "zm_066",
            language: "zh-CN",
            displayName: "时屿",
            localName: "时屿"
        },
        zm_068: {
            code: "zm_068",
            language: "zh-CN",
            displayName: "言珂",
            localName: "言珂"
        },
        zm_069: {
            code: "zm_069",
            language: "zh-CN",
            displayName: "以廷",
            localName: "以廷"
        },
        zm_080: {
            code: "zm_080",
            language: "zh-CN",
            displayName: "予珩",
            localName: "予珩"
        },
        zm_081: {
            code: "zm_081",
            language: "zh-CN",
            displayName: "知舟",
            localName: "知舟"
        },
        zm_082: {
            code: "zm_082",
            language: "zh-CN",
            displayName: "今舟",
            localName: "今舟"
        },
        zm_089: {
            code: "zm_089",
            language: "zh-CN",
            displayName: "时廷",
            localName: "时廷"
        },
        zm_091: {
            code: "zm_091",
            language: "zh-CN",
            displayName: "言舟",
            localName: "言舟"
        },
        zm_095: {
            code: "zm_095",
            language: "zh-CN",
            displayName: "以珀",
            localName: "以珀"
        },
        zm_096: {
            code: "zm_096",
            language: "zh-CN",
            displayName: "予珀",
            localName: "予珀"
        },
        zm_097: {
            code: "zm_097",
            language: "zh-CN",
            displayName: "知珀",
            localName: "知珀"
        },
        zm_098: {
            code: "zm_098",
            language: "zh-CN",
            displayName: "今珀",
            localName: "今珀"
        },
        zm_100: {
            code: "zm_100",
            language: "zh-CN",
            displayName: "时珀",
            localName: "时珀"
        },
        af_bella: {
            code: "af_bella",
            language: "en-US",
            displayName: "Bella",
            localName: "Bella"
        },
        af_heart: {
            code: "af_heart",
            language: "en-US",
            displayName: "Heart",
            localName: "Heart"
        },
        af_nicole: {
            code: "af_nicole",
            language: "en-US",
            displayName: "Nicole",
            localName: "Nicole"
        },
        bf_emma: {
            code: "bf_emma",
            language: "en-GB",
            displayName: "Emma",
            localName: "Emma"
        },
        ef_dora: {
            code: "ef_dora",
            language: "es-ES",
            displayName: "Dora",
            localName: "Dora"
        },
        em_alex: {
            code: "em_alex",
            language: "es-ES",
            displayName: "Alex",
            localName: "Alex"
        },
        em_santa: {
            code: "em_santa",
            language: "es-ES",
            displayName: "Santa",
            localName: "Santa"
        },
        ff_siwis: {
            code: "ff_siwis",
            language: "fr-FR",
            displayName: "Siwis",
            localName: "Siwis"
        },
        pf_dora: {
            code: "pf_dora",
            language: "pt-BR",
            displayName: "Dora",
            localName: "Dora"
        },
        pm_alex: {
            code: "pm_alex",
            language: "pt-BR",
            displayName: "Alex",
            localName: "Alex"
        },
        pm_santa: {
            code: "pm_santa",
            language: "pt-BR",
            displayName: "Santa",
            localName: "Santa"
        }
    };
class go {
    static isEdgeVoice(a) {
        let i = Lo[Fi.toLanguage][0];
        if (dr.isArray(i)) {
            for (let l of i)
                if (Uu[l].code === a) return !0
        }
        let t = Lo[Fi.toLanguage][1];
        if (dr.isArray(t)) {
            for (let l of t)
                if (Uu[l].code === a) return !0
        }
        return !1
    }
    static isAzureVoice(a) {
        let i = Gf[Fi.toLanguage][0];
        if (dr.isArray(i)) {
            for (let l of i)
                if (Uu[l].code === a) return !0
        }
        let t = Gf[Fi.toLanguage][1];
        if (dr.isArray(t)) {
            for (let l of t)
                if (Uu[l].code === a) return !0
        }
        return !1
    }
    static isVoxCpmVoice(a) {
        if (!a) return !1;
        const i = Yb[a];
        if (!i) return !1;
        const t = Zf[Fi.toLanguage] || Zf[i.language];
        return t ? [...t[0] || [], ...t[1] || []].includes(a) : !1
    }
}
function Vb(e) {
    return e.trim().toLowerCase().replace(/^www\./, "").replace(/\.$/, "")
}
function Xb(e) {
    return e.startsWith("//") ? `https:${e}` : /^[a-z][a-z\d+.-]*:\/\//i.test(e) ? e : `https://${e}`
}
function Po(e) {
    const a = (e || "").trim();
    if (!a) return null;
    try {
        const i = new URL(Xb(a)),
            t = Vb(i.hostname);
        return t ? {
            hostname: t,
            port: i.port
        } : null
    } catch {
        return null
    }
}
function V9(e) {
    const a = Po(e);
    return a ? a.port ? `${a.hostname}:${a.port}` : a.hostname : ""
}
function Wb(e, a) {
    const i = Po(e),
        t = Po(a);
    return !i || !t || !(i.hostname === t.hostname || i.hostname.endsWith(`.${t.hostname}`)) ? !1 : t.port ? i.port === t.port : !0
}
function Jb(e, a) {
    return (Array.isArray(a) ? a : []).some(t => Wb(e, t))
}
const $b = ["top", "middle", "bottom"],
    jb = ["none", "default", "pingfang", "heiti", "kaiti", "songti", "fangsong", "dongqingheiti", "lantinghei", "stsong", "wawati", "weibei", "xingkai", "yuanti", "arial_unicode_ms", "arial", "courier_new", "georgia", "tahoma", "times_new_roman", "trebuchet_ms", "verdana", "helvetica_neue", "hiragino_mincho_pron", "hiragino_kaku_gothic_pron", "kohinoor_devanagari", "devanagari_mt", "sama_devanagari", "tiro_devanagari_hindi", "shobhika", "apple_sd_gothic_neo", "nanum_gothic", "geeza_pro", "damascus", "al_nile", "al_bayan", "diwan_kufi", "arial_hebrew", "arial_hebrew_scholar", "thonburi", "ayuthaya", "tiro_bangla", "gujarati_sangam_mn", "kohinoor_gujarati", "mukta_vaani", "sama_gurmukhi", "lahore_gurmukhi", "tiro_gurmukhi", "tamil_mn", "sama_tamil", "october_tamil", "kohinoor_telugu", "telugu_mn", "tiro_telugu", "sama_malayalam", "malayalam_mn", "malayalam_sangam_mn", "kannada_mn", "kannada_sangam_mn", "noto_sans_kannada", "noto_serif_kannada", "khmer_sangam_mn", "lao_sangam_mn", "lao_mn", "myanmar_mn", "noto_serif_myanmar", "sinhala_mn", "kefa_iii", "oriya_sangam_mn", "noto_sans_oriya", "custom"],
    qb = [400, 500, 600, 700],
    Qb = [0, 25, 50, 75, 100],
    eB = ["none", "shadow", "outline"],
    aB = /^#([0-9a-fA-F]{6})$/,
    nB = /[^a-zA-Z0-9,\- _"'#]/g,
    gE = {
        top: 10,
        middle: 0,
        bottom: 10
    },
    iB = {
        top: 15,
        middle: 0,
        bottom: 15
    },
    Zn = {
        position: "bottom",
        positionOffsets: { ...gE
        },
        fontPreset: "none",
        customFontFamily: "",
        textColor: "#FFFFFF",
        fontWeight: 400,
        backgroundColor: "#000000",
        backgroundOpacity: 75,
        edgeStyle: "none"
    },
    fo = {
        none: "inherit",
        default: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        pingfang: "'PingFang SC', 'Hiragino Sans GB', sans-serif",
        heiti: "'STHeiti', 'Heiti SC', sans-serif",
        kaiti: "'Kaiti SC', 'KaiTi', serif",
        songti: "'STSong', 'SimSun', serif",
        fangsong: "'FangSong', 'STFangsong', serif",
        dongqingheiti: "'Hiragino Sans GB', '冬青黑体简体中文', sans-serif",
        lantinghei: "'LanTingHei SC', 'FZLanTingHei', sans-serif",
        stsong: "'STSong', serif",
        wawati: "'Wawati SC', cursive",
        weibei: "'STKaiti', 'WeiBei SC', serif",
        xingkai: "'STXingkai', 'Xingkai SC', cursive",
        yuanti: "'STYuanti', 'Yuanti SC', sans-serif",
        arial_unicode_ms: "'Arial Unicode MS', Arial, sans-serif",
        arial: "Arial, Helvetica, sans-serif",
        courier_new: "'Courier New', monospace",
        georgia: "Georgia, 'Times New Roman', serif",
        tahoma: "Tahoma, sans-serif",
        times_new_roman: "'Times New Roman', Times, serif",
        trebuchet_ms: "'Trebuchet MS', sans-serif",
        verdana: "Verdana, sans-serif",
        helvetica_neue: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        hiragino_mincho_pron: "'Hiragino Mincho ProN', serif",
        hiragino_kaku_gothic_pron: "'Hiragino Kaku Gothic ProN', sans-serif",
        kohinoor_devanagari: "'Kohinoor Devanagari', serif",
        devanagari_mt: "'Devanagari MT', serif",
        sama_devanagari: "'Sama Devanagari', serif",
        tiro_devanagari_hindi: "'Tiro Devanagari Hindi', serif",
        shobhika: "'Shobhika', serif",
        apple_sd_gothic_neo: "'Apple SD Gothic Neo', sans-serif",
        nanum_gothic: "'Nanum Gothic', sans-serif",
        geeza_pro: "'Geeza Pro', serif",
        damascus: "'Damascus', serif",
        al_nile: "'Al Nile', serif",
        al_bayan: "'Al Bayan', serif",
        diwan_kufi: "'Diwan Kufi', sans-serif",
        arial_hebrew: "'Arial Hebrew', sans-serif",
        arial_hebrew_scholar: "'Arial Hebrew Scholar', serif",
        thonburi: "'Thonburi', sans-serif",
        ayuthaya: "'Ayuthaya', serif",
        tiro_bangla: "'Tiro Bangla', serif",
        gujarati_sangam_mn: "'Gujarati Sangam MN', serif",
        kohinoor_gujarati: "'Kohinoor Gujarati', serif",
        mukta_vaani: "'Mukta Vaani', sans-serif",
        sama_gurmukhi: "'Sama Gurmukhi', serif",
        lahore_gurmukhi: "'Lahore Gurmukhi', serif",
        tiro_gurmukhi: "'Tiro Gurmukhi', serif",
        tamil_mn: "'Tamil MN', serif",
        sama_tamil: "'Sama Tamil', serif",
        october_tamil: "'October Tamil', serif",
        kohinoor_telugu: "'Kohinoor Telugu', serif",
        telugu_mn: "'Telugu MN', serif",
        tiro_telugu: "'Tiro Telugu', serif",
        sama_malayalam: "'Sama Malayalam', serif",
        malayalam_mn: "'Malayalam MN', serif",
        malayalam_sangam_mn: "'Malayalam Sangam MN', serif",
        kannada_mn: "'Kannada MN', serif",
        kannada_sangam_mn: "'Kannada Sangam MN', serif",
        noto_sans_kannada: "'Noto Sans Kannada', sans-serif",
        noto_serif_kannada: "'Noto Serif Kannada', serif",
        khmer_sangam_mn: "'Khmer Sangam MN', serif",
        lao_sangam_mn: "'Lao Sangam MN', serif",
        lao_mn: "'Lao MN', serif",
        myanmar_mn: "'Myanmar MN', serif",
        noto_serif_myanmar: "'Noto Serif Myanmar', serif",
        sinhala_mn: "'Sinhala MN', serif",
        kefa_iii: "'Kefa III', serif",
        oriya_sangam_mn: "'Oriya Sangam MN', serif",
        noto_sans_oriya: "'Noto Sans Oriya', sans-serif"
    };
function ko(e, a) {
    if (typeof e != "string") return a;
    const i = e.trim();
    return aB.test(i) ? i.toUpperCase() : a
}
function uB(e) {
    return typeof e != "string" ? "" : e.replace(nB, "").trim().slice(0, 120)
}
function mo(e, a) {
    const i = typeof e == "string" ? Number(e.trim()) : e;
    return Number.isFinite(i) ? Math.max(0, Math.min(100, Math.round(i))) : a
}
function tB(e) {
    const a = typeof e == "object" && e !== null ? e : void 0,
        i = a ? gE : iB;
    return {
        top: mo(a == null ? void 0 : a.top, i.top),
        middle: mo(a == null ? void 0 : a.middle, i.middle),
        bottom: mo(a == null ? void 0 : a.bottom, i.bottom)
    }
}
function gu(e) {
    return Math.max(0, Math.min(100, e))
}
function dE(e) {
    const {
        position: a,
        positionOffsets: i
    } = e;
    return i[a]
}
function rB() {
    return { ...Zn,
        positionOffsets: { ...Zn.positionOffsets
        }
    }
}
function fE(e) {
    const a = e || {},
        i = $b.includes(a.position) ? a.position : Zn.position,
        t = jb.includes(a.fontPreset) ? a.fontPreset : Zn.fontPreset,
        l = qb.includes(a.fontWeight) ? a.fontWeight : Zn.fontWeight,
        s = Qb.includes(a.backgroundOpacity) ? a.backgroundOpacity : Zn.backgroundOpacity,
        c = eB.includes(a.edgeStyle) ? a.edgeStyle : Zn.edgeStyle;
    return {
        position: i,
        positionOffsets: tB(a.positionOffsets),
        fontPreset: t,
        customFontFamily: uB(a.customFontFamily),
        textColor: ko(a.textColor, Zn.textColor),
        fontWeight: l,
        backgroundColor: ko(a.backgroundColor, Zn.backgroundColor),
        backgroundOpacity: s,
        edgeStyle: c
    }
}
function lB(e) {
    return e.fontPreset === "custom" ? e.customFontFamily.trim() || fo.none : fo[e.fontPreset] || fo.none
}
function sB(e) {
    const a = lB(e);
    return a.trim().toLowerCase() === "inherit" ? "sans-serif" : a
}
function nt(e, a) {
    const i = Math.max(12, Math.round(a)),
        t = Math.max(12, Math.round(i * 1.35));
    return {
        backgroundColor: oB(e.backgroundColor, e.backgroundOpacity),
        color: e.textColor,
        fontFamily: sB(e),
        fontSizePx: i,
        fontWeight: String(e.fontWeight),
        lineHeightPx: t,
        textShadow: cB(e.edgeStyle)
    }
}
function X9(e) {
    const a = dE(e);
    return e.position === "top" ? {
        line: gu(a),
        lineAlign: "start"
    } : e.position === "middle" ? {
        line: gu(50 + a),
        lineAlign: "center"
    } : {
        line: gu(100 - a),
        lineAlign: "end"
    }
}
function W9(e) {
    const a = dE(e);
    return e.position === "top" ? {
        top: `${gu(a)}%`
    } : e.position === "middle" ? {
        top: `${gu(50+a)}%`,
        transform: "translateY(-50%)"
    } : {
        bottom: `${gu(a)}%`
    }
}
function J9(e, a, i) {
    const t = nt(e, a),
        l = `
                color: ${t.color};
                background-color: ${t.backgroundColor};
                text-shadow: ${t.textShadow};
                font-family: ${t.fontFamily};
                font-size: ${t.fontSizePx}px;
                font-style: normal;
                font-weight: ${t.fontWeight};
                line-height: ${t.lineHeightPx}px;
    `;
    return `
              ::cue(.${i}),
              video::cue(.${i}) {
${l}
              }
            `
}
function oB(e, a) {
    const i = ko(e, "#000000"),
        t = Math.max(0, Math.min(100, a)) / 100,
        l = parseInt(i.slice(1, 3), 16),
        s = parseInt(i.slice(3, 5), 16),
        c = parseInt(i.slice(5, 7), 16);
    return `rgba(${l}, ${s}, ${c}, ${t})`
}
function cB(e) {
    return e === "shadow" ? "0 2px 6px rgba(0, 0, 0, 0.85)" : e === "outline" ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" : "none"
}
const gB = ["translated-first", "original-first"],
    dB = ["left", "center", "right"],
    fB = [400, 500, 600, 700],
    mB = ["none", "shadow", "outline"],
    hB = /^#([0-9a-fA-F]{6})$/,
    EB = /[^a-zA-Z0-9,\- _"'#]/g,
    pB = 6,
    mE = 0,
    hE = 40,
    AB = 80,
    NB = 50,
    yB = 150,
    CB = "#D1D5DB",
    Ou = {
        followTranslatedStyle: !1,
        fontPreset: "default",
        customFontFamily: "",
        sizePercent: AB,
        textColor: CB,
        fontWeight: 400,
        edgeStyle: "shadow"
    },
    Ju = {
        order: "translated-first",
        lineGapPx: pB,
        textAlign: "center",
        original: { ...Ou
        }
    },
    MB = "youtube-dubbing-cue",
    SB = "youtube-dubbing-cue-translated",
    wB = "youtube-dubbing-cue-original";
function IB(e, a) {
    if (typeof e != "string") return a;
    const i = e.trim();
    return hB.test(i) ? i.toUpperCase() : a
}
function bB(e) {
    return typeof e != "string" ? "" : e.replace(EB, "").trim().slice(0, 120)
}
function I0(e, a, i, t) {
    const l = Number(typeof e == "string" ? e.trim() : e);
    return Number.isFinite(l) ? Math.max(a, Math.min(i, Math.round(l))) : t
}
function BB(e) {
    const a = e || {},
        i = fE({
            fontPreset: a.fontPreset,
            customFontFamily: a.customFontFamily,
            textColor: a.textColor,
            fontWeight: a.fontWeight,
            edgeStyle: a.edgeStyle
        }),
        t = fB.includes(a.fontWeight) ? a.fontWeight : Ou.fontWeight,
        l = mB.includes(a.edgeStyle) ? a.edgeStyle : Ou.edgeStyle;
    return {
        followTranslatedStyle: a.followTranslatedStyle === !0,
        fontPreset: i.fontPreset,
        customFontFamily: bB(a.customFontFamily),
        sizePercent: I0(a.sizePercent, NB, yB, Ou.sizePercent),
        textColor: IB(a.textColor, Ou.textColor),
        fontWeight: t,
        edgeStyle: l
    }
}
function vB() {
    return { ...Ju,
        original: { ...Ju.original
        }
    }
}
function EE(e) {
    const a = e || {},
        i = gB.includes(a.order) ? a.order : Ju.order,
        t = dB.includes(a.textAlign) ? a.textAlign : Ju.textAlign;
    return {
        order: i,
        lineGapPx: I0(a.lineGapPx, mE, hE, Ju.lineGapPx),
        textAlign: t,
        original: BB(a.original)
    }
}
function DB(e, a) {
    const i = Math.max(12, Math.round(e)),
        t = Math.round(i * (a.original.sizePercent / 100));
    return Math.max(10, t)
}
function TB(e, a, i) {
    const t = DB(a, i);
    if (i.original.followTranslatedStyle) return { ...nt(e, t),
        backgroundColor: "transparent"
    };
    const l = { ...e,
        fontPreset: i.original.fontPreset,
        customFontFamily: i.original.customFontFamily,
        textColor: i.original.textColor,
        fontWeight: i.original.fontWeight,
        edgeStyle: i.original.edgeStyle,
        backgroundOpacity: 0
    };
    return { ...nt(l, t),
        backgroundColor: "transparent"
    }
}
function xB(e, a) {
    return { ...nt(e, a),
        backgroundColor: "transparent"
    }
}
function Yf(e, a = 0) {
    const i = e.lineHeightPx + I0(a, mE, hE, 0);
    return `
                color: ${e.color};
                background-color: transparent;
                text-shadow: ${e.textShadow};
                font-family: ${e.fontFamily};
                font-size: ${e.fontSizePx}px;
                font-style: normal;
                font-weight: ${e.fontWeight};
                line-height: ${i}px;
    `
}
function $9(e) {
    const a = e.cueClassName || MB,
        i = e.translatedClassName || SB,
        t = e.originalClassName || wB,
        l = EE(e.bilingualStyle),
        s = nt(e.subtitleStyle, e.subtitleSize),
        c = xB(e.subtitleStyle, e.subtitleSize),
        g = TB(e.subtitleStyle, e.subtitleSize, l);
    return `
              ::cue(.${a}),
              video::cue(.${a}) {
                color: ${s.color};
                background-color: ${s.backgroundColor};
                text-shadow: ${s.textShadow};
                font-family: ${s.fontFamily};
                font-size: ${s.fontSizePx}px;
                font-style: normal;
                font-weight: ${s.fontWeight};
                line-height: ${s.lineHeightPx}px;
              }
              ::cue(.${i}),
              video::cue(.${i}) {
${Yf(c,l.lineGapPx)}
              }
              ::cue(.${t}),
              video::cue(.${t}) {
${Yf(g,l.lineGapPx)}
              }
            `
}
function j9(e, a) {
    return {
        color: e.color,
        "background-color": "transparent",
        "font-family": e.fontFamily,
        "font-size": `${e.fontSizePx}px`,
        "font-weight": e.fontWeight,
        "line-height": `${e.lineHeightPx}px`,
        "text-shadow": e.textShadow,
        display: "block",
        "white-space": "pre-wrap"
    }
}
function q9(e) {
    return e.textAlign
}
const Ie = class Ie {
    static get fromLanguage() {
        return this._fromLanguage
    }
    static set fromLanguage(a) {
        this._fromLanguage = a
    }
    static get skipTranslationWhenSameLanguage() {
        return this._skipTranslationWhenSameLanguage
    }
    static set skipTranslationWhenSameLanguage(a) {
        this._skipTranslationWhenSameLanguage = a
    }
    static get toLanguage() {
        return this._toLanguage
    }
    static set toLanguage(a) {
        this._toLanguage = a
    }
    static get gender() {
        return this._gender
    }
    static set gender(a) {
        this._gender = a
    }
    static get voice() {
        return this._voice
    }
    static set voice(a) {
        this._voice = a
    }
    static get originalVolume() {
        return this._originalVolume
    }
    static set originalVolume(a) {
        this._originalVolume = a
    }
    static get translationVolume() {
        return this._translationVolume
    }
    static set translationVolume(a) {
        this._translationVolume = a
    }
    static get adjustmentModel() {
        return this._adjustmentModel
    }
    static set adjustmentModel(a) {
        this._adjustmentModel = a
    }
    static get loadingContainerDiv() {
        return this._loadingContainerDiv
    }
    static set loadingContainerDiv(a) {
        this._loadingContainerDiv = a
    }
    static get translateEngine() {
        return this._translateEngine
    }
    static set translateEngine(a) {
        this._translateEngine = a
    }
    static set voicesType(a) {
        this._voicesType = a
    }
    static get voicesType() {
        return this._voicesType
    }
    static set videoVolumeControlModel(a) {
        this._videoVolumeControlModel = a
    }
    static get videoVolumeControlModel() {
        return this._videoVolumeControlModel
    }
    static set iosOpenOriginVolume(a) {
        this._iosOpenOriginVolume = a
    }
    static get iosOpenOriginVolume() {
        return this._iosOpenOriginVolume
    }
    static set showSubtitle(a) {
        this._showSubtitle = a
    }
    static get showSubtitle() {
        return this._showSubtitle
    }
    static set bilingualSubtitleEnabled(a) {
        this._bilingualSubtitleEnabled = a
    }
    static get bilingualSubtitleEnabled() {
        return this._bilingualSubtitleEnabled
    }
    static set floatingBall(a) {
        this._floatingBall = a
    }
    static get floatingBall() {
        return this._floatingBall
    }
    static set multiSpeaker(a) {
        this._multiSpeaker = a
    }
    static get multiSpeaker() {
        return this._multiSpeaker
    }
    static hasMultipleSpeakers() {
        return this._multiSpeaker && this._multiSpeaker.length > 1
    }
    static set subtitleSize(a) {
        this._subtitleSize = a
    }
    static get subtitleSize() {
        return this._subtitleSize
    }
    static set subtitleStyle(a) {
        this._subtitleStyle = fE(a)
    }
    static get subtitleStyle() {
        return this._subtitleStyle
    }
    static set bilingualSubtitleStyle(a) {
        this._bilingualSubtitleStyle = EE(a)
    }
    static get bilingualSubtitleStyle() {
        return this._bilingualSubtitleStyle
    }
    static set subtitlePriority(a) {
        this._subtitlePriority = a
    }
    static get subtitlePriority() {
        return this._subtitlePriority
    }
    static set memberDubbingTipsDismissed(a) {
        this._memberDubbingTipsDismissed = a
    }
    static get memberDubbingTipsDismissed() {
        return this._memberDubbingTipsDismissed
    }
    static set memberFreeVoiceAzureTipDismissed(a) {
        this._memberFreeVoiceAzureTipDismissed = a
    }
    static get memberFreeVoiceAzureTipDismissed() {
        return this._memberFreeVoiceAzureTipDismissed
    }
    static set memberPlatformSubtitlePriorityTipDismissed(a) {
        this._memberPlatformSubtitlePriorityTipDismissed = a
    }
    static get memberPlatformSubtitlePriorityTipDismissed() {
        return this._memberPlatformSubtitlePriorityTipDismissed
    }
    static set sidebarEntry(a) {
        this._sidebarEntry = a
    }
    static get sidebarEntry() {
        return this._sidebarEntry
    }
    static set disabledSites(a) {
        this._disabledSites = a
    }
    static get disabledSites() {
        return this._disabledSites
    }
    static set translationRulesEnabled(a) {
        this._translationRulesEnabled = a
    }
    static get translationRulesEnabled() {
        return this._translationRulesEnabled
    }
    static isHostnameDisabled(a) {
        return Jb(a, this._disabledSites)
    }
    static isVoiceTypeMatchMultiVoice() {
        if (!Array.isArray(Ie.multiSpeaker) || Ie.multiSpeaker.length === 0) return !1;
        const a = Ie.isUseMemberFreeVoiceType() ? go.isVoxCpmVoice : Ie.isUseFreeVoiceType() ? go.isEdgeVoice : go.isAzureVoice;
        return Ie.multiSpeaker.every(i => a(i))
    }
    static isUseFreeVoiceType() {
        return !Ie.voicesType || Ie.voicesType === "free"
    }
    static isUseMemberFreeVoiceType() {
        return Ie.voicesType === "memberFree"
    }
    static matchFromLanguage(a) {
        let i = this._fromLanguage.toLowerCase(),
            t = a.toLowerCase();
        return i === "zh-cn" ? t === "zh-hans" || t === "zh-cn" || t === "cn" ? !0 : i.startsWith(a) : i === "zh-hk" || i === "zh-tw" ? t === "zh-hant" || t === "zh-hk" || t === "zh-tw" || t === "tw" || t === "hk" ? !0 : i.startsWith(a) : t === i ? !0 : t.length > i.length ? t.startsWith(i) : i.startsWith(t)
    }
    static get segmentationStrategy() {
        return this._segmentationStrategy
    }
    static set segmentationStrategy(a) {
        this._segmentationStrategy = a
    }
    static get enableSmartSegmentation() {
        return this._enableSmartSegmentation
    }
    static set enableSmartSegmentation(a) {
        this._enableSmartSegmentation = a
    }
    static get userSubtitleSegmentationEnabled() {
        return this._userSubtitleSegmentationEnabled
    }
    static set userSubtitleSegmentationEnabled(a) {
        this._userSubtitleSegmentationEnabled = a
    }
    static get longSubtitleThreshold() {
        return this._longSubtitleThreshold
    }
    static set longSubtitleThreshold(a) {
        this._longSubtitleThreshold = a
    }
};
De(Ie, "_fromLanguage", "en-US"), De(Ie, "_toLanguage", "zh_CN"), De(Ie, "_skipTranslationWhenSameLanguage", !1), De(Ie, "_gender", "1"), De(Ie, "_voice", ""), De(Ie, "_originalVolume", 0), De(Ie, "_translationVolume", 1), De(Ie, "_videoVolumeControlModel", !1), De(Ie, "_adjustmentModel", !0), De(Ie, "_loadingContainerDiv"), De(Ie, "_translateEngine", "google"), De(Ie, "_voicesType", "free"), De(Ie, "_iosOpenOriginVolume", !1), De(Ie, "_showSubtitle", !1), De(Ie, "_bilingualSubtitleEnabled", !1), De(Ie, "_floatingBall", !0), De(Ie, "_multiSpeaker", []), De(Ie, "_subtitleSize", 20), De(Ie, "_subtitleStyle", rB()), De(Ie, "_bilingualSubtitleStyle", vB()), De(Ie, "_subtitlePriority", "ai"), De(Ie, "_memberDubbingTipsDismissed", !1), De(Ie, "_memberFreeVoiceAzureTipDismissed", !1), De(Ie, "_memberPlatformSubtitlePriorityTipDismissed", !1), De(Ie, "_sidebarEntry", !0), De(Ie, "_disabledSites", []), De(Ie, "_translationRulesEnabled", !0), De(Ie, "_segmentationStrategy", "reverse"), De(Ie, "_enableSmartSegmentation", !0), De(Ie, "_userSubtitleSegmentationEnabled", !0), De(Ie, "_longSubtitleThreshold", 60);
let Fi = Ie;
const FB = {
        "en-IE": "爱尔兰(英语)",
        "ar-KW": "科威特",
        "sw-TZ": "坦桑尼亚(斯瓦希里)",
        "ms-MY": "马来西亚(马来语)",
        "en-IN": "印度(英语)",
        "es-BO": "玻利维亚",
        "ar-SY": "叙利亚",
        "en-ZA": "南非(英语)",
        "ta-IN": "印度(泰米尔语)",
        "el-GR": "希腊",
        "nl-NL": "荷兰",
        "zu-ZA": "南非(祖鲁语)",
        "ar-LB": "黎巴嫩",
        "en-AU": "澳大利亚",
        "he-IL": "以色列",
        "mk-MK": "北马其顿",
        "ar-TN": "突尼斯",
        "ar-LY": "利比亚",
        "hu-HU": "匈牙利",
        "ml-IN": "印度(马拉雅拉姆语)",
        "es-SV": "萨尔瓦多",
        "es-CR": "哥斯达黎加",
        "es-CL": "智利",
        "fr-CA": "加拿大(法语)",
        "es-CO": "哥伦比亚",
        "jv-ID": "印度尼西亚(爪哇语)",
        "pl-PL": "波兰",
        "pt-PT": "葡萄牙",
        "ar-EG": "埃及",
        "es-CU": "古巴",
        "fr-BE": "比利时(法语)",
        "ga-IE": "爱尔兰(爱尔兰语)",
        "cy-GB": "英国(威尔士语)",
        "ar-DZ": "阿尔及利亚",
        "en-SG": "新加坡(英语)",
        "ar-MA": "摩洛哥",
        "fil-PH": "菲律宾(菲律宾语)",
        "ta-SG": "新加坡(泰米尔语)",
        "en-KE": "肯尼亚(英语)",
        "es-HN": "洪都拉斯",
        "nb-NO": "挪威",
        "hr-HR": "克罗地亚",
        "es-PR": "波多黎各",
        "af-ZA": "南非(阿非利卡语)",
        "gl-ES": "西班牙(加利西亚语)",
        "es-PY": "巴拉圭",
        "de-AT": "奥地利",
        "ta-LK": "斯里兰卡(泰米尔语)",
        "is-IS": "冰岛",
        "my-MM": "缅甸",
        "bg-BG": "保加利亚",
        "cs-CZ": "捷克",
        "en-PH": "菲律宾(英语)",
        "uz-UZ": "乌兹别克斯坦",
        "zh-TW": "中国台湾",
        "en-HK": "中国香港(英语)",
        "ko-KR": "韩国",
        "sk-SK": "斯洛伐克",
        "ps-AF": "阿富汗",
        "ar-OM": "阿曼",
        "ru-RU": "俄罗斯",
        "sq-AL": "阿尔巴尼亚",
        "es-AR": "阿根廷",
        "sv-SE": "瑞典",
        "am-ET": "埃塞俄比亚",
        "mr-IN": "印度(马拉地语)",
        "da-DK": "丹麦",
        "mn-MN": "蒙古",
        "uk-UA": "乌克兰",
        "en-US": "美国(英语)",
        "ta-MY": "马来西亚(泰米尔语)",
        "gu-IN": "印度(古吉拉特语)",
        "lv-LV": "拉脱维亚",
        "nl-BE": "比利时(荷兰语)",
        "zh-CN": "中国",
        "ur-PK": "巴基斯坦",
        "te-IN": "印度(泰卢固语)",
        "hi-IN": "印度(印地语)",
        "en-NG": "尼日利亚",
        "de-CH": "瑞士(德语)",
        "ja-JP": "日本",
        "bs-BA": "波斯尼亚",
        "ar-YE": "也门",
        "ne-NP": "尼泊尔",
        "ka-GE": "格鲁吉亚",
        "ar-QA": "卡塔尔",
        "es-GT": "危地马拉",
        "es-GQ": "几内亚",
        "es-PE": "秘鲁",
        "en-NZ": "新西兰",
        "fa-IR": "伊朗",
        "es-PA": "巴拿马",
        "ro-RO": "罗马尼亚",
        "mt-MT": "马耳他",
        "et-EE": "爱沙尼亚",
        "tr-TR": "土耳其",
        "fr-FR": "法国",
        "vi-VN": "越南",
        "en-GB": "英国",
        "km-KH": "柬埔寨",
        "fi-FI": "芬兰",
        "az-AZ": "阿塞拜疆",
        "en-CA": "加拿大(英语)",
        "lt-LT": "立陶宛",
        "ar-AE": "阿拉伯联合酋长",
        "sl-SI": "斯洛文尼亚",
        "es-DO": "多米尼加",
        "ar-IQ": "伊拉克",
        "bn-IN": "印度(孟加拉语)",
        "si-LK": "斯里兰卡(僧伽罗语)",
        "fr-CH": "瑞士(法语)",
        "es-EC": "厄瓜多尔",
        "es-US": "美国(西班牙语)",
        "kn-IN": "印度(卡纳达语)",
        "lo-LA": "老挝",
        "ar-SA": "沙特阿拉伯",
        "ca-ES": "西班牙(加泰罗尼亚语)",
        "de-DE": "德国",
        "zh-HK": "中国香港(中文)",
        "pt-BR": "巴西",
        "sr-RS": "塞尔维亚",
        "es-UY": "乌拉圭",
        "sw-KE": "肯尼亚(斯瓦希里语)",
        "ar-BH": "巴林",
        "es-ES": "西班牙(西班牙语)",
        "kk-KZ": "哈萨克斯坦",
        "ar-JO": "约旦",
        "es-VE": "委内瑞拉",
        "so-SO": "索马里",
        "en-TZ": "坦桑尼亚(英语)",
        "su-ID": "印度尼西亚(巽他语)",
        "es-MX": "墨西哥",
        "it-IT": "意大利",
        "ur-IN": "印度(乌尔都语)",
        "bn-BD": "孟加拉",
        "id-ID": "印度尼西亚",
        "es-NI": "尼加拉瓜",
        "th-TH": "泰国"
    },
    _B = {
        "en-IE": "アイルランド",
        "ar-KW": "クウェート",
        "sw-TZ": "タンザニア",
        "ms-MY": "マレーシア",
        "en-IN": "印(英)",
        "es-BO": "ボリビア",
        "ar-SY": "シリア",
        "en-ZA": "南ア(英)",
        "ta-IN": "印(タ)",
        "el-GR": "ギリシャ",
        "nl-NL": "蘭",
        "zu-ZA": "南ア(ズ)",
        "ar-LB": "レバノン",
        "en-AU": "豪州",
        "he-IL": "イスラエル",
        "mk-MK": "北マケドニア",
        "ar-TN": "チュニジア",
        "ar-LY": "リビア",
        "hu-HU": "ハンガリー",
        "ml-IN": "印(マラヤラム)",
        "es-SV": "エルサルバドル",
        "es-CR": "コスタリカ",
        "es-CL": "チリ",
        "fr-CA": "加(仏)",
        "es-CO": "コロンビア",
        "jv-ID": "尼(ジャワ)",
        "pl-PL": "ポーランド",
        "pt-PT": "葡",
        "ar-EG": "エジプト",
        "es-CU": "キューバ",
        "fr-BE": "白(仏)",
        "ga-IE": "アイルランド(ゲ)",
        "cy-GB": "英(ウ)",
        "ar-DZ": "アルジェリア",
        "en-SG": "星(英)",
        "ar-MA": "モロッコ",
        "fil-PH": "比",
        "ta-SG": "星(タ)",
        "en-KE": "ケニア(英)",
        "es-HN": "ホンジュラス",
        "nb-NO": "諾",
        "hr-HR": "クロアチア",
        "es-PR": "プエルトリコ",
        "af-ZA": "南ア(ア)",
        "gl-ES": "西(ガ)",
        "es-PY": "パラグアイ",
        "de-AT": "墺",
        "ta-LK": "スリランカ(タ)",
        "is-IS": "アイスランド",
        "my-MM": "緬",
        "bg-BG": "ブルガリア",
        "cs-CZ": "チェコ",
        "en-PH": "比(英)",
        "uz-UZ": "ウズベク",
        "zh-TW": "台湾",
        "en-HK": "港(英)",
        "ko-KR": "韓",
        "sk-SK": "スロバキア",
        "ps-AF": "アフガン",
        "ar-OM": "オマーン",
        "ru-RU": "露",
        "sq-AL": "アルバニア",
        "es-AR": "亜",
        "sv-SE": "瑞典",
        "am-ET": "エチオピア",
        "mr-IN": "印(マラ)",
        "da-DK": "丁",
        "mn-MN": "蒙",
        "uk-UA": "ウクライナ",
        "en-US": "米(英)",
        "ta-MY": "馬(タ)",
        "gu-IN": "印(グ)",
        "lv-LV": "ラトビア",
        "nl-BE": "白(蘭)",
        "zh-CN": "中",
        "ur-PK": "パキスタン",
        "te-IN": "印(テ)",
        "hi-IN": "印(ヒ)",
        "en-NG": "ナイジェリア",
        "de-CH": "瑞(独)",
        "ja-JP": "日",
        "bs-BA": "ボスニア",
        "ar-YE": "イエメン",
        "ne-NP": "ネパール",
        "ka-GE": "ジョージア",
        "ar-QA": "カタール",
        "es-GT": "グアテマラ",
        "es-GQ": "ギニア",
        "es-PE": "ペルー",
        "en-NZ": "NZ",
        "fa-IR": "イラン",
        "es-PA": "パナマ",
        "ro-RO": "ルーマニア",
        "mt-MT": "マルタ",
        "et-EE": "エストニア",
        "tr-TR": "土",
        "fr-FR": "仏",
        "vi-VN": "越",
        "en-GB": "英",
        "km-KH": "カンボジア",
        "fi-FI": "フィン",
        "az-AZ": "アゼル",
        "en-CA": "加(英)",
        "lt-LT": "リトアニア",
        "ar-AE": "UAE",
        "sl-SI": "スロベニア",
        "es-DO": "ドミニカ",
        "ar-IQ": "イラク",
        "bn-IN": "印(ベ)",
        "si-LK": "スリランカ(シ)",
        "fr-CH": "瑞(仏)",
        "es-EC": "エクアドル",
        "es-US": "米(西)",
        "kn-IN": "印(カ)",
        "lo-LA": "ラオス",
        "ar-SA": "サウジ",
        "ca-ES": "西(カ)",
        "de-DE": "独",
        "zh-HK": "港",
        "pt-BR": "伯",
        "sr-RS": "セルビア",
        "es-UY": "ウルグアイ",
        "sw-KE": "ケニア(ス)",
        "ar-BH": "バーレーン",
        "es-ES": "西",
        "kk-KZ": "カザフ",
        "ar-JO": "ヨルダン",
        "es-VE": "ベネズエラ",
        "so-SO": "ソマリア",
        "en-TZ": "タンザニア(英)",
        "su-ID": "尼(ス)",
        "es-MX": "墨",
        "it-IT": "伊",
        "ur-IN": "印(ウ)",
        "bn-BD": "バングラ",
        "id-ID": "尼",
        "es-NI": "ニカラグア",
        "th-TH": "泰"
    },
    RB = {
        "en-IE": "아일랜드(영어)",
        "ar-KW": "쿠웨이트",
        "sw-TZ": "탄자니아(스와힐리어)",
        "ms-MY": "말레이시아(말레이어)",
        "en-IN": "인도(영어)",
        "es-BO": "볼리비아",
        "ar-SY": "시리아",
        "en-ZA": "남아프리카(영어)",
        "ta-IN": "인도(타밀어)",
        "el-GR": "그리스",
        "nl-NL": "네덜란드",
        "zu-ZA": "남아프리카(줄루어)",
        "ar-LB": "레바논",
        "en-AU": "오스트레일리아",
        "he-IL": "이스라엘",
        "mk-MK": "북마케도니아",
        "ar-TN": "튀니지",
        "ar-LY": "리비아",
        "hu-HU": "헝가리",
        "ml-IN": "인도(말라얄람어)",
        "es-SV": "엘살바도르",
        "es-CR": "코스타리카",
        "es-CL": "칠레",
        "fr-CA": "캐나다(프랑스어)",
        "es-CO": "콜롬비아",
        "jv-ID": "인도네시아(자바어)",
        "pl-PL": "폴란드",
        "pt-PT": "포르투갈",
        "ar-EG": "이집트",
        "es-CU": "쿠바",
        "fr-BE": "벨기에(프랑스어)",
        "ga-IE": "아일랜드(아일랜드어)",
        "cy-GB": "영국(웨일스어)",
        "ar-DZ": "알제리",
        "en-SG": "싱가포르(영어)",
        "ar-MA": "모로코",
        "fil-PH": "필리핀(필리핀어)",
        "ta-SG": "싱가포르(타밀어)",
        "en-KE": "케냐(영어)",
        "es-HN": "온두라스",
        "nb-NO": "노르웨이",
        "hr-HR": "크로아티아",
        "es-PR": "푸에르토리코",
        "af-ZA": "남아공(아어)",
        "gl-ES": "스페인(갈리시아어)",
        "es-PY": "파라과이",
        "de-AT": "오스트리아",
        "ta-LK": "스리랑카(타밀어)",
        "is-IS": "아이슬란드",
        "my-MM": "미얀마",
        "bg-BG": "불가리아",
        "cs-CZ": "체코",
        "en-PH": "필리핀(영어)",
        "uz-UZ": "우즈베키스탄",
        "zh-TW": "중국 타이완",
        "en-HK": "중국 홍콩(영어)",
        "ko-KR": "한국",
        "sk-SK": "슬로바키아",
        "ps-AF": "아프가니스탄",
        "ar-OM": "오만",
        "ru-RU": "러시아",
        "sq-AL": "알바니아",
        "es-AR": "아르헨티나",
        "sv-SE": "스웨덴",
        "am-ET": "에티오피아",
        "mr-IN": "인도(마라티어)",
        "da-DK": "덴마크",
        "mn-MN": "몽골",
        "uk-UA": "우크라이나",
        "en-US": "미국(영어)",
        "ta-MY": "말레이시아(타밀어)",
        "gu-IN": "인도(구자라트어)",
        "lv-LV": "라트비아",
        "nl-BE": "벨기에(네덜란드어)",
        "zh-CN": "중국",
        "ur-PK": "파키스탄",
        "te-IN": "인도(텔루구어)",
        "hi-IN": "인도(힌디어)",
        "en-NG": "나이지리아",
        "de-CH": "스위스(독일어)",
        "ja-JP": "일본",
        "bs-BA": "보스니아",
        "ar-YE": "예멘",
        "ne-NP": "네팔",
        "ka-GE": "조지아",
        "ar-QA": "카타르",
        "es-GT": "과테말라",
        "es-GQ": "기니",
        "es-PE": "페루",
        "en-NZ": "뉴질랜드",
        "fa-IR": "이란",
        "es-PA": "파나마",
        "ro-RO": "루마니아",
        "mt-MT": "말타",
        "et-EE": "에스토니아",
        "tr-TR": "터키",
        "fr-FR": "프랑스",
        "vi-VN": "베트남",
        "en-GB": "영국",
        "km-KH": "캄보디아",
        "fi-FI": "핀란드",
        "az-AZ": "아제르바이잔",
        "en-CA": "캐나다(영어)",
        "lt-LT": "리투아니아",
        "ar-AE": "아랍에미리트",
        "sl-SI": "슬로베니아",
        "es-DO": "도미니카",
        "ar-IQ": "이라크",
        "bn-IN": "인도(벵골어)",
        "si-LK": "스리랑카(싱할라어)",
        "fr-CH": "스위스(프랑스어)",
        "es-EC": "에콰도르",
        "es-US": "미국(스페인어)",
        "kn-IN": "인도(칸나다어)",
        "lo-LA": "라오스",
        "ar-SA": "사우디아라비아",
        "ca-ES": "스페인(카탈로니아어)",
        "de-DE": "독일",
        "zh-HK": "홍콩(중국어)",
        "pt-BR": "브라질",
        "sr-RS": "세르비아",
        "es-UY": "우루과이",
        "sw-KE": "케냐(스와힐리어)",
        "ar-BH": "바레인",
        "es-ES": "스페인(스페인어)",
        "kk-KZ": "카자흐스탄",
        "ar-JO": "요르단",
        "es-VE": "베네수엘라",
        "so-SO": "소말리아",
        "en-TZ": "탄자니아(영어)",
        "su-ID": "인도네시아(순다어)",
        "es-MX": "멕시코",
        "it-IT": "이탈리아",
        "ur-IN": "인도(우르두어)",
        "bn-BD": "방글라데시",
        "id-ID": "인니어",
        "es-NI": "니카라과",
        "th-TH": "태국"
    },
    LB = {
        "en-IE": "Ai-len",
        "ar-KW": "C\xF4-o\xE9t",
        "sw-TZ": "Tan-da-ni-a",
        "ms-MY": "Ma-lai-xi-a",
        "en-IN": "Ấn Độ",
        "es-BO": "B\xF4-li-vi-a",
        "ar-SY": "Xi-ri",
        "en-ZA": "Nam Phi",
        "ta-IN": "Ấn Độ",
        "el-GR": "Hy Lạp",
        "nl-NL": "H\xE0 Lan",
        "zu-ZA": "Nam Phi",
        "ar-LB": "Li-băng",
        "en-AU": "\xDAc",
        "he-IL": "I-xra-en",
        "mk-MK": "Ma-x\xEA-\u0111\xF4-ni-a",
        "ar-TN": "Tuy-ni-xi",
        "ar-LY": "Li-bi",
        "hu-HU": "Hung-ga-ri",
        "ml-IN": "Ấn Độ",
        "es-SV": "En Xan-va-đo",
        "es-CR": "Cốt-xta Ri-ca",
        "es-CL": "Chi-l\xEA",
        "fr-CA": "Ca-na-đa",
        "es-CO": "C\xF4-l\xF4m-bi-a",
        "jv-ID": "In-\u0111\xF4-n\xEA-xi-a",
        "pl-PL": "Ba Lan",
        "pt-PT": "B\u1ED3 \u0110\xE0o Nha",
        "ar-EG": "Ai Cập",
        "es-CU": "Cu-ba",
        "fr-BE": "Bỉ",
        "ga-IE": "Ai-len",
        "cy-GB": "Anh",
        "ar-DZ": "An-gi\xEA-ri",
        "en-SG": "Xin-ga-po",
        "ar-MA": "Ma-rốc",
        "fil-PH": "Phi-l\xEDp-pin",
        "ta-SG": "Xin-ga-po",
        "en-KE": "K\xEA-ni-a",
        "es-HN": "H\xF4n-\u0111u-r\xE1t",
        "nb-NO": "Na Uy",
        "hr-HR": "Cr\xF4-a-ti-a",
        "es-PR": "Pu-\xE9c-t\xF4 Ri-c\xF4",
        "af-ZA": "Nam Phi",
        "gl-ES": "T\xE2y Ban Nha",
        "es-PY": "Pa-ra-guay",
        "de-AT": "\xC1o",
        "ta-LK": "Sri Lan-ka",
        "is-IS": "Ai-xơ-len",
        "my-MM": "Mi-an-ma",
        "bg-BG": "Bun-ga-ri",
        "cs-CZ": "S\xE9c",
        "en-PH": "Phi-l\xEDp-pin",
        "uz-UZ": "U-d\u01A1-b\xEA-ki-xtan",
        "zh-TW": "\u0110\xE0i Loan",
        "en-HK": "H\u1ED3ng K\xF4ng",
        "ko-KR": "H\xE0n Qu\u1ED1c",
        "sk-SK": "Xl\xF4-va-ki-a",
        "ps-AF": "\xC1p-ga-ni-xtan",
        "ar-OM": "\xD4-man",
        "ru-RU": "Nga",
        "sq-AL": "An-ba-ni",
        "es-AR": "\xC1c-hen-ti-na",
        "sv-SE": "Thụy Điển",
        "am-ET": "\xCA-ti-\xF4-pi-a",
        "mr-IN": "Ấn Độ",
        "da-DK": "Đan Mạch",
        "mn-MN": "M\xF4ng C\u1ED5",
        "uk-UA": "U-crai-na",
        "en-US": "Hoa Kỳ",
        "ta-MY": "Ma-lai-xi-a",
        "gu-IN": "Ấn Độ",
        "lv-LV": "L\xE1t-vi-a",
        "nl-BE": "Bỉ",
        "zh-CN": "Trung Quốc",
        "ur-PK": "Pa-ki-xtan",
        "te-IN": "Ấn Độ",
        "hi-IN": "Ấn Độ",
        "en-NG": "Ni-gi\xEA-ri-a",
        "de-CH": "Thụy Sĩ",
        "ja-JP": "Nhật Bản",
        "bs-BA": "B\xF4-xni-a",
        "ar-YE": "Y-\xEA-men",
        "ne-NP": "N\xEA-pan",
        "ka-GE": "Gruzia",
        "ar-QA": "Ca-ta",
        "es-GT": "Goa-t\xEA-ma-la",
        "es-GQ": "Ghi-n\xEA X\xEDch \u0110\u1EA1o",
        "es-PE": "P\xEA-ru",
        "en-NZ": "Niu Di-l\xE2n",
        "fa-IR": "I-ran",
        "es-PA": "Pa-na-ma",
        "ro-RO": "Ru-ma-ni",
        "mt-MT": "Man-ta",
        "et-EE": "E-xt\xF4-ni-a",
        "tr-TR": "Thổ Nhĩ Kỳ",
        "fr-FR": "Ph\xE1p",
        "vi-VN": "Việt Nam",
        "en-GB": "Anh",
        "km-KH": "Campuchia",
        "fi-FI": "Phần Lan",
        "az-AZ": "A-d\xE9c-bai-gian",
        "en-CA": "Ca-na-đa",
        "lt-LT": "Li-tu-a-ni-a",
        "ar-AE": "UAE",
        "sl-SI": "Xl\xF4-ven-ni-a",
        "es-DO": "\u0110\xF4-mi-ni-ca",
        "ar-IQ": "I-rắc",
        "bn-IN": "Ấn Độ",
        "si-LK": "Sri Lan-ka",
        "fr-CH": "Thụy Sĩ",
        "es-EC": "\xCA-cu-a-\u0111o",
        "es-US": "Hoa Kỳ",
        "kn-IN": "Ấn Độ",
        "lo-LA": "L\xE0o",
        "ar-SA": "\u1EA2 R\u1EADp X\xEA-\xFAt",
        "ca-ES": "T\xE2y Ban Nha",
        "de-DE": "Đức",
        "zh-HK": "H\u1ED3ng K\xF4ng",
        "pt-BR": "Bra-xin",
        "sr-RS": "X\xE9c-bi-a",
        "es-UY": "U-ru-guay",
        "sw-KE": "K\xEA-ni-a",
        "ar-BH": "Ba-ranh",
        "es-ES": "T\xE2y Ban Nha",
        "kk-KZ": "Ka-dắc-xtan",
        "ar-JO": "Gio\xF3c-\u0111an",
        "es-VE": "V\xEA-n\xEA-xu-\xEA-la",
        "so-SO": "X\xF4-ma-li",
        "en-TZ": "Tan-da-ni-a",
        "su-ID": "In-\u0111\xF4-n\xEA-xi-a",
        "es-MX": "M\xEA-xi-c\xF4",
        "it-IT": "\xDD",
        "ur-IN": "Ấn Độ",
        "bn-BD": "B\u0103ng-la-\u0111\xE9t",
        "id-ID": "In-\u0111\xF4-n\xEA-xi-a",
        "es-NI": "Ni-ca-ra-goa",
        "th-TH": "Th\xE1i Lan"
    },
    PB = {
        "en-IE": "Irland(Engl.)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tansania(Sw.)",
        "ms-MY": "Malaysia(Mal.)",
        "en-IN": "Indien(Engl.)",
        "es-BO": "Bolivien",
        "ar-SY": "Syrien",
        "en-ZA": "S\xFCdafrika(Engl.)",
        "ta-IN": "Indien(Tamil)",
        "el-GR": "Griechenland",
        "nl-NL": "Niederlande",
        "zu-ZA": "S\xFCdafrika(Zulu)",
        "ar-LB": "Libanon",
        "en-AU": "Australien",
        "he-IL": "Israel",
        "mk-MK": "Nordmazedonien",
        "ar-TN": "Tunesien",
        "ar-LY": "Libyen",
        "hu-HU": "Ungarn",
        "ml-IN": "Indien(Malayal.)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Kanada(Frz.)",
        "es-CO": "Kolumbien",
        "jv-ID": "Indonesien(Jav.)",
        "pl-PL": "Polen",
        "pt-PT": "Portugal",
        "ar-EG": "\xC4gypten",
        "es-CU": "Kuba",
        "fr-BE": "Belgien(Frz.)",
        "ga-IE": "Irland(G\xE4l.)",
        "cy-GB": "UK(Walisisch)",
        "ar-DZ": "Algerien",
        "en-SG": "Singapur(Engl.)",
        "ar-MA": "Marokko",
        "fil-PH": "Philippinen(Fil.)",
        "ta-SG": "Singapur(Tamil)",
        "en-KE": "Kenia(Engl.)",
        "es-HN": "Honduras",
        "nb-NO": "Norwegen",
        "hr-HR": "Kroatien",
        "es-PR": "Puerto Rico",
        "af-ZA": "S\xFCdafrika(Afr.)",
        "gl-ES": "Spanien(Galiz.)",
        "es-PY": "Paraguay",
        "de-AT": "\xD6sterreich",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Island",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgarien",
        "cs-CZ": "Tschechien",
        "en-PH": "Philippinen(Engl.)",
        "uz-UZ": "Usbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "Hongkong(Engl.)",
        "ko-KR": "S\xFCdkorea",
        "sk-SK": "Slowakei",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russland",
        "sq-AL": "Albanien",
        "es-AR": "Argentinien",
        "sv-SE": "Schweden",
        "am-ET": "\xC4thiopien",
        "mr-IN": "Indien(Marathi)",
        "da-DK": "D\xE4nemark",
        "mn-MN": "Mongolei",
        "uk-UA": "Ukraine",
        "en-US": "USA(Engl.)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "Indien(Gujar.)",
        "lv-LV": "Lettland",
        "nl-BE": "Belgien(Ndl.)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "Indien(Telugu)",
        "hi-IN": "Indien(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Schweiz(Dt.)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnien",
        "ar-YE": "Jemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgien",
        "ar-QA": "Katar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "Neuseeland",
        "fa-IR": "Iran",
        "es-PA": "Panama",
        "ro-RO": "Rum\xE4nien",
        "mt-MT": "Malta",
        "et-EE": "Estland",
        "tr-TR": "T\xFCrkei",
        "fr-FR": "Frankreich",
        "vi-VN": "Vietnam",
        "en-GB": "UK",
        "km-KH": "Kambodscha",
        "fi-FI": "Finnland",
        "az-AZ": "Aserbaidschan",
        "en-CA": "Kanada(Engl.)",
        "lt-LT": "Litauen",
        "ar-AE": "VAE",
        "sl-SI": "Slowenien",
        "es-DO": "Dominikan.Rep.",
        "ar-IQ": "Irak",
        "bn-IN": "Indien(Beng.)",
        "si-LK": "Sri Lanka(Sinh.)",
        "fr-CH": "Schweiz(Frz.)",
        "es-EC": "Ecuador",
        "es-US": "USA(Span.)",
        "kn-IN": "Indien(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi-Arabien",
        "ca-ES": "Spanien(Katal.)",
        "de-DE": "Deutschland",
        "zh-HK": "Hongkong(Chin.)",
        "pt-BR": "Brasilien",
        "sr-RS": "Serbien",
        "es-UY": "Uruguay",
        "sw-KE": "Kenia(Swahili)",
        "ar-BH": "Bahrain",
        "es-ES": "Spanien(Span.)",
        "kk-KZ": "Kasachstan",
        "ar-JO": "Jordanien",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tansania(Engl.)",
        "su-ID": "Indonesien(Sund.)",
        "es-MX": "Mexiko",
        "it-IT": "Italien",
        "ur-IN": "Indien(Urdu)",
        "bn-BD": "Bangladesch",
        "id-ID": "Indonesien",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    kB = {
        "en-IE": "Irlanda (ingl\xE9s)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania (suajili)",
        "ms-MY": "Malasia (malayo)",
        "en-IN": "India (ingl\xE9s)",
        "es-BO": "Bolivia",
        "ar-SY": "Siria",
        "en-ZA": "Sud\xE1frica (ingl\xE9s)",
        "ta-IN": "India (tamil)",
        "el-GR": "Grecia",
        "nl-NL": "Pa\xEDses Bajos",
        "zu-ZA": "Sud\xE1frica (zul\xFA)",
        "ar-LB": "L\xEDbano",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "Macedonia del Norte",
        "ar-TN": "T\xFAnez",
        "ar-LY": "Libia",
        "hu-HU": "Hungr\xEDa",
        "ml-IN": "India (malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canad\xE1 (franc\xE9s)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia (javan\xE9s)",
        "pl-PL": "Polonia",
        "pt-PT": "Portugal",
        "ar-EG": "Egipto",
        "es-CU": "Cuba",
        "fr-BE": "B\xE9lgica (franc\xE9s)",
        "ga-IE": "Irlanda (ga\xE9lico)",
        "cy-GB": "Reino Unido (gal\xE9s)",
        "ar-DZ": "Argelia",
        "en-SG": "Singapur (ingl\xE9s)",
        "ar-MA": "Marruecos",
        "fil-PH": "Filipinas (filipino)",
        "ta-SG": "Singapur (tamil)",
        "en-KE": "Kenia (ingl\xE9s)",
        "es-HN": "Honduras",
        "nb-NO": "Noruega",
        "hr-HR": "Croacia",
        "es-PR": "Puerto Rico",
        "af-ZA": "Sud\xE1frica (afrik\xE1ans)",
        "gl-ES": "Espa\xF1a (gallego)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka (tamil)",
        "is-IS": "Islandia",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Chequia",
        "en-PH": "Filipinas (ingl\xE9s)",
        "uz-UZ": "Uzbekist\xE1n",
        "zh-TW": "Taiw\xE1n",
        "en-HK": "Hong Kong (ingl\xE9s)",
        "ko-KR": "Corea",
        "sk-SK": "Eslovaquia",
        "ps-AF": "Afganist\xE1n",
        "ar-OM": "Om\xE1n",
        "ru-RU": "Rusia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Suecia",
        "am-ET": "Etiop\xEDa",
        "mr-IN": "India (marat\xED)",
        "da-DK": "Dinamarca",
        "mn-MN": "Mongolia",
        "uk-UA": "Ucrania",
        "en-US": "EE.UU. (ingl\xE9s)",
        "ta-MY": "Malasia (tamil)",
        "gu-IN": "India (gujarati)",
        "lv-LV": "Letonia",
        "nl-BE": "B\xE9lgica (neerland\xE9s)",
        "zh-CN": "China",
        "ur-PK": "Pakist\xE1n",
        "te-IN": "India (telugu)",
        "hi-IN": "India (hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Suiza (alem\xE1n)",
        "ja-JP": "Jap\xF3n",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Catar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Per\xFA",
        "en-NZ": "Nueva Zelanda",
        "fa-IR": "Ir\xE1n",
        "es-PA": "Panam\xE1",
        "ro-RO": "Rumania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turqu\xEDa",
        "fr-FR": "Francia",
        "vi-VN": "Vietnam",
        "en-GB": "Reino Unido",
        "km-KH": "Camboya",
        "fi-FI": "Finlandia",
        "az-AZ": "Azerbaiy\xE1n",
        "en-CA": "Canad\xE1 (ingl\xE9s)",
        "lt-LT": "Lituania",
        "ar-AE": "Emiratos \xC1rabes",
        "sl-SI": "Eslovenia",
        "es-DO": "Rep. Dominicana",
        "ar-IQ": "Irak",
        "bn-IN": "India (bengal\xED)",
        "si-LK": "Sri Lanka (cingal\xE9s)",
        "fr-CH": "Suiza (franc\xE9s)",
        "es-EC": "Ecuador",
        "es-US": "EE.UU. (espa\xF1ol)",
        "kn-IN": "India (canar\xE9s)",
        "lo-LA": "Laos",
        "ar-SA": "Arabia Saudita",
        "ca-ES": "Espa\xF1a (catal\xE1n)",
        "de-DE": "Alemania",
        "zh-HK": "Hong Kong (chino)",
        "pt-BR": "Brasil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenia (suajili)",
        "ar-BH": "Bar\xE9in",
        "es-ES": "Espa\xF1a (espa\xF1ol)",
        "kk-KZ": "Kazajist\xE1n",
        "ar-JO": "Jordania",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania (ingl\xE9s)",
        "su-ID": "Indonesia (sundan\xE9s)",
        "es-MX": "M\xE9xico",
        "it-IT": "Italia",
        "ur-IN": "India (urdu)",
        "bn-BD": "Banglad\xE9s",
        "id-ID": "Indonesia",
        "es-NI": "Nicaragua",
        "th-TH": "Tailandia"
    },
    zB = {
        "en-IE": "Irlande (angl.)",
        "ar-KW": "Kowe\xEFt",
        "sw-TZ": "Tanzanie (swah.)",
        "ms-MY": "Malaisie (mal.)",
        "en-IN": "Inde (angl.)",
        "es-BO": "Bolivie",
        "ar-SY": "Syrie",
        "en-ZA": "Afrique S. (angl.)",
        "ta-IN": "Inde (tam.)",
        "el-GR": "Gr\xE8ce",
        "nl-NL": "Pays-Bas",
        "zu-ZA": "Afrique S. (zul.)",
        "ar-LB": "Liban",
        "en-AU": "Australie (angl.)",
        "he-IL": "Isra\xEBl",
        "mk-MK": "Mac\xE9doine N.",
        "ar-TN": "Tunisie",
        "ar-LY": "Libye",
        "hu-HU": "Hongrie",
        "ml-IN": "Inde (malay.)",
        "es-SV": "Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chili",
        "fr-CA": "Canada (fr.)",
        "es-CO": "Colombie",
        "jv-ID": "Indon\xE9sie (jav.)",
        "pl-PL": "Pologne",
        "pt-PT": "Portugal",
        "ar-EG": "\xC9gypte",
        "es-CU": "Cuba",
        "fr-BE": "Belgique (fr.)",
        "ga-IE": "Irlande (irl.)",
        "cy-GB": "UK (gall.)",
        "ar-DZ": "Alg\xE9rie",
        "en-SG": "Singapour (angl.)",
        "ar-MA": "Maroc",
        "fil-PH": "Philippines (fil.)",
        "ta-SG": "Singapour (tam.)",
        "en-KE": "Kenya (angl.)",
        "es-HN": "Honduras",
        "nb-NO": "Norv\xE8ge",
        "hr-HR": "Croatie",
        "es-PR": "Porto Rico",
        "af-ZA": "Afrique S. (afrik.)",
        "gl-ES": "Espagne (gal.)",
        "es-PY": "Paraguay",
        "de-AT": "Autriche",
        "ta-LK": "Sri Lanka (tam.)",
        "is-IS": "Islande",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgarie",
        "cs-CZ": "Tch\xE9quie",
        "en-PH": "Philippines (angl.)",
        "uz-UZ": "Ouzb\xE9kistan",
        "zh-TW": "Ta\xEFwan",
        "en-HK": "HK (angl.)",
        "ko-KR": "Cor\xE9e",
        "sk-SK": "Slovaquie",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russie",
        "sq-AL": "Albanie",
        "es-AR": "Argentine",
        "sv-SE": "Su\xE8de",
        "am-ET": "\xC9thiopie",
        "mr-IN": "Inde (mar.)",
        "da-DK": "Danemark",
        "mn-MN": "Mongolie",
        "uk-UA": "Ukraine",
        "en-US": "USA (angl.)",
        "ta-MY": "Malaisie (tam.)",
        "gu-IN": "Inde (guj.)",
        "lv-LV": "Lettonie",
        "nl-BE": "Belgique (n\xE9erl.)",
        "zh-CN": "Chine",
        "ur-PK": "Pakistan",
        "te-IN": "Inde (t\xE9l.)",
        "hi-IN": "Inde (hin.)",
        "en-NG": "Nigeria",
        "de-CH": "Suisse (all.)",
        "ja-JP": "Japon",
        "bs-BA": "Bosnie",
        "ar-YE": "Y\xE9men",
        "ne-NP": "N\xE9pal",
        "ka-GE": "G\xE9orgie",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guin\xE9e",
        "es-PE": "P\xE9rou",
        "en-NZ": "NZ (angl.)",
        "fa-IR": "Iran",
        "es-PA": "Panama",
        "ro-RO": "Roumanie",
        "mt-MT": "Malte",
        "et-EE": "Estonie",
        "tr-TR": "Turquie",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "UK (angl.)",
        "km-KH": "Cambodge",
        "fi-FI": "Finlande",
        "az-AZ": "Azerba\xEFdjan",
        "en-CA": "Canada (angl.)",
        "lt-LT": "Lituanie",
        "ar-AE": "\xC9mirats A. U.",
        "sl-SI": "Slov\xE9nie",
        "es-DO": "Dominicaine",
        "ar-IQ": "Irak",
        "bn-IN": "Inde (beng.)",
        "si-LK": "Sri Lanka (cing.)",
        "fr-CH": "Suisse (fr.)",
        "es-EC": "\xC9quateur",
        "es-US": "USA (esp.)",
        "kn-IN": "Inde (kan.)",
        "lo-LA": "Laos",
        "ar-SA": "Arabie S.",
        "ca-ES": "Espagne (cat.)",
        "de-DE": "Allemagne",
        "zh-HK": "HK (chin.)",
        "pt-BR": "Br\xE9sil",
        "sr-RS": "Serbie",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya (swah.)",
        "ar-BH": "Bahre\xEFn",
        "es-ES": "Espagne (esp.)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordanie",
        "es-VE": "Venezuela",
        "so-SO": "Somalie",
        "en-TZ": "Tanzanie (angl.)",
        "su-ID": "Indon\xE9sie (soun.)",
        "es-MX": "Mexique",
        "it-IT": "Italie",
        "ur-IN": "Inde (ourd.)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indon\xE9sie",
        "es-NI": "Nicaragua",
        "th-TH": "Tha\xEFlande"
    },
    KB = {
        "en-IE": "आयरलैंड (अंग्रेजी)",
        "ar-KW": "कुवैत",
        "sw-TZ": "तंजानिया (स्वाहिली)",
        "ms-MY": "मलेशिया (मलय)",
        "en-IN": "भारत (अंग्रेजी)",
        "es-BO": "बोलीविया",
        "ar-SY": "सीरिया",
        "en-ZA": "दक्षिण अफ्रीका (अंग्रेजी)",
        "ta-IN": "भारत (तमिल)",
        "el-GR": "ग्रीस",
        "nl-NL": "नीदरलैंड",
        "zu-ZA": "दक्षिण अफ्रीका (जुलु)",
        "ar-LB": "लेबनान",
        "en-AU": "ऑस्ट्रेलिया",
        "he-IL": "इज़राइल",
        "mk-MK": "उत्तर मैसेडोनिया",
        "ar-TN": "ट्यूनीशिया",
        "ar-LY": "लीबिया",
        "hu-HU": "हंगरी",
        "ml-IN": "भारत (मलयालम)",
        "es-SV": "एल सल्वाडोर",
        "es-CR": "कोस्टा रिका",
        "es-CL": "चिली",
        "fr-CA": "कनाडा (फ्रेंच)",
        "es-CO": "कोलंबिया",
        "jv-ID": "इंडोनेशिया (जावानीस)",
        "pl-PL": "पोलैंड",
        "pt-PT": "पुर्तगाल",
        "ar-EG": "मिस्र",
        "es-CU": "क्यूबा",
        "fr-BE": "बेल्जियम (फ्रेंच)",
        "ga-IE": "आयरलैंड (आयरिश)",
        "cy-GB": "यूके (वेल्श)",
        "ar-DZ": "अल्जीरिया",
        "en-SG": "सिंगापुर (अंग्रेजी)",
        "ar-MA": "मोरक्को",
        "fil-PH": "फिलीपींस (फिलिपिनो)",
        "ta-SG": "सिंगापुर (तमिल)",
        "en-KE": "केन्या (अंग्रेजी)",
        "es-HN": "होंडुरास",
        "nb-NO": "नॉर्वे",
        "hr-HR": "क्रोएशिया",
        "es-PR": "प्यूर्टो रिको",
        "af-ZA": "दक्षिण अफ्रीका (अफ्रीकांस)",
        "gl-ES": "स्पेन (गैलिशियन)",
        "es-PY": "पराग्वे",
        "de-AT": "ऑस्ट्रिया",
        "ta-LK": "श्रीलंका (तमिल)",
        "is-IS": "आइसलैंड",
        "my-MM": "म्यांमार",
        "bg-BG": "बुल्गारिया",
        "cs-CZ": "चेक",
        "en-PH": "फिलीपींस (अंग्रेजी)",
        "uz-UZ": "उज़्बेकिस्तान",
        "zh-TW": "चीन ताइवान",
        "en-HK": "हांगकांग (अंग्रेजी)",
        "ko-KR": "कोरिया",
        "sk-SK": "स्लोवाकिया",
        "ps-AF": "अफगानिस्तान",
        "ar-OM": "ओमान",
        "ru-RU": "रूस",
        "sq-AL": "अल्बानिया",
        "es-AR": "अर्जेंटीना",
        "sv-SE": "स्वीडन",
        "am-ET": "इथियोपिया",
        "mr-IN": "भारत (मराठी)",
        "da-DK": "डेनमार्क",
        "mn-MN": "मंगोलिया",
        "uk-UA": "यूक्रेन",
        "en-US": "अमेरिका (अंग्रेजी)",
        "ta-MY": "मलेशिया (तमिल)",
        "gu-IN": "भारत (गुजराती)",
        "lv-LV": "लातविया",
        "nl-BE": "बेल्जियम (डच)",
        "zh-CN": "चीन",
        "ur-PK": "पाकिस्तान",
        "te-IN": "भारत (तेलुगु)",
        "hi-IN": "भारत (हिंदी)",
        "en-NG": "नाइजीरिया",
        "de-CH": "स्विट्जरलैंड (जर्मन)",
        "ja-JP": "जापान",
        "bs-BA": "बोस्निया",
        "ar-YE": "यमन",
        "ne-NP": "नेपाल",
        "ka-GE": "जॉर्जिया",
        "ar-QA": "कतर",
        "es-GT": "ग्वाटेमाला",
        "es-GQ": "गिनी",
        "es-PE": "पेरू",
        "en-NZ": "न्यूजीलैंड",
        "fa-IR": "ईरान",
        "es-PA": "पनामा",
        "ro-RO": "रोमानिया",
        "mt-MT": "माल्टा",
        "et-EE": "एस्टोनिया",
        "tr-TR": "तुर्की",
        "fr-FR": "फ्रांस",
        "vi-VN": "वियतनाम",
        "en-GB": "यूके",
        "km-KH": "कंबोडिया",
        "fi-FI": "फिनलैंड",
        "az-AZ": "अज़रबैजान",
        "en-CA": "कनाडा (अंग्रेजी)",
        "lt-LT": "लिथुआनिया",
        "ar-AE": "संयुक्त अरब अमीरात",
        "sl-SI": "स्लोवेनिया",
        "es-DO": "डोमिनिकन",
        "ar-IQ": "इराक",
        "bn-IN": "भारत (बंगाली)",
        "si-LK": "श्रीलंका (सिंहली)",
        "fr-CH": "स्विट्जरलैंड (फ्रेंच)",
        "es-EC": "इक्वाडोर",
        "es-US": "अमेरिका (स्पेनिश)",
        "kn-IN": "भारत (कन्नड़)",
        "lo-LA": "लाओस",
        "ar-SA": "सऊदी अरब",
        "ca-ES": "स्पेन (कातालान)",
        "de-DE": "जर्मनी",
        "zh-HK": "हांगकांग (चीनी)",
        "pt-BR": "ब्राजील",
        "sr-RS": "सर्बिया",
        "es-UY": "उरुग्वे",
        "sw-KE": "केन्या (स्वाहिली)",
        "ar-BH": "बहरीन",
        "es-ES": "स्पेन (स्पेनिश)",
        "kk-KZ": "कजाकिस्तान",
        "ar-JO": "जॉर्डन",
        "es-VE": "वेनेजुएला",
        "so-SO": "सोमालिया",
        "en-TZ": "तंजानिया (अंग्रेजी)",
        "su-ID": "इंडोनेशिया (सुंदानी)",
        "es-MX": "मेक्सिको",
        "it-IT": "इटली",
        "ur-IN": "भारत (उर्दू)",
        "bn-BD": "बांग्लादेश",
        "id-ID": "इंडोनेशिया",
        "es-NI": "निकारागुआ",
        "th-TH": "थाईलैंड"
    },
    HB = {
        "en-IE": "Irlanda(ingl.)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(sw.)",
        "ms-MY": "Malaysia(mal.)",
        "en-IN": "India(ingl.)",
        "es-BO": "Bolivia",
        "ar-SY": "Siria",
        "en-ZA": "Sudafrica(ing.)",
        "ta-IN": "India(tam.)",
        "el-GR": "Grecia",
        "nl-NL": "Paesi Bassi",
        "zu-ZA": "Sudafrica(zu.)",
        "ar-LB": "Libano",
        "en-AU": "Australia",
        "he-IL": "Israele",
        "mk-MK": "Macedonia N.",
        "ar-TN": "Tunisia",
        "ar-LY": "Libia",
        "hu-HU": "Ungheria",
        "ml-IN": "India(mal.)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Cile",
        "fr-CA": "Canada(fr.)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(gia.)",
        "pl-PL": "Polonia",
        "pt-PT": "Portogallo",
        "ar-EG": "Egitto",
        "es-CU": "Cuba",
        "fr-BE": "Belgio(fr.)",
        "ga-IE": "Irlanda(gae.)",
        "cy-GB": "Regno U.(gal.)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(ing.)",
        "ar-MA": "Marocco",
        "fil-PH": "Filippine(fil.)",
        "ta-SG": "Singapore(tam.)",
        "en-KE": "Kenya(ingl.)",
        "es-HN": "Honduras",
        "nb-NO": "Norvegia",
        "hr-HR": "Croazia",
        "es-PR": "Porto Rico",
        "af-ZA": "Sudafrica(afr.)",
        "gl-ES": "Spagna(gal.)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(tam.)",
        "is-IS": "Islanda",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Rep. Ceca",
        "en-PH": "Filippine(ing.)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "Hong Kong(ing.)",
        "ko-KR": "Corea",
        "sk-SK": "Slovacchia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Svezia",
        "am-ET": "Etiopia",
        "mr-IN": "India(mar.)",
        "da-DK": "Danimarca",
        "mn-MN": "Mongolia",
        "uk-UA": "Ucraina",
        "en-US": "USA(ingl.)",
        "ta-MY": "Malaysia(tam.)",
        "gu-IN": "India(guj.)",
        "lv-LV": "Lettonia",
        "nl-BE": "Belgio(ol.)",
        "zh-CN": "Cina",
        "ur-PK": "Pakistan",
        "te-IN": "India(tel.)",
        "hi-IN": "India(hin.)",
        "en-NG": "Nigeria",
        "de-CH": "Svizzera(ted.)",
        "ja-JP": "Giappone",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Per\xF9",
        "en-NZ": "Nuova Zel.",
        "fa-IR": "Iran",
        "es-PA": "Panama",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turchia",
        "fr-FR": "Francia",
        "vi-VN": "Vietnam",
        "en-GB": "Regno Unito",
        "km-KH": "Cambogia",
        "fi-FI": "Finlandia",
        "az-AZ": "Azerbaigian",
        "en-CA": "Canada(ingl.)",
        "lt-LT": "Lituania",
        "ar-AE": "Emirati Ar.",
        "sl-SI": "Slovenia",
        "es-DO": "Rep. Dom.",
        "ar-IQ": "Iraq",
        "bn-IN": "India(ben.)",
        "si-LK": "Sri Lanka(sin.)",
        "fr-CH": "Svizzera(fr.)",
        "es-EC": "Ecuador",
        "es-US": "USA(spagn.)",
        "kn-IN": "India(kan.)",
        "lo-LA": "Laos",
        "ar-SA": "Arabia Saud.",
        "ca-ES": "Spagna(cat.)",
        "de-DE": "Germania",
        "zh-HK": "Hong Kong(cin.)",
        "pt-BR": "Brasile",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya(sw.)",
        "ar-BH": "Bahrein",
        "es-ES": "Spagna(sp.)",
        "kk-KZ": "Kazakistan",
        "ar-JO": "Giordania",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(ing.)",
        "su-ID": "Indonesia(sun.)",
        "es-MX": "Messico",
        "it-IT": "Italia",
        "ur-IN": "India(urd.)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia",
        "es-NI": "Nicaragua",
        "th-TH": "Thailandia"
    },
    UB = {
        "en-IE": "Ирл.(анг.)",
        "ar-KW": "Кувейт",
        "sw-TZ": "Танз.(суа.)",
        "ms-MY": "Малайз.(м.)",
        "en-IN": "Инд.(анг.)",
        "es-BO": "Боливия",
        "ar-SY": "Сирия",
        "en-ZA": "ЮАР(анг.)",
        "ta-IN": "Инд.(там.)",
        "el-GR": "Греция",
        "nl-NL": "Нидерл.",
        "zu-ZA": "ЮАР(зул.)",
        "ar-LB": "Ливан",
        "en-AU": "Австрал.",
        "he-IL": "Израиль",
        "mk-MK": "С.Макед.",
        "ar-TN": "Тунис",
        "ar-LY": "Ливия",
        "hu-HU": "Венгрия",
        "ml-IN": "Инд.(мал.)",
        "es-SV": "Сальвад.",
        "es-CR": "Коста-Р.",
        "es-CL": "Чили",
        "fr-CA": "Кан.(фр.)",
        "es-CO": "Колумб.",
        "jv-ID": "Индон.(яв.)",
        "pl-PL": "Польша",
        "pt-PT": "Португ.",
        "ar-EG": "Египет",
        "es-CU": "Куба",
        "fr-BE": "Бел.(фр.)",
        "ga-IE": "Ирл.(ир.)",
        "cy-GB": "Брит.(вал.)",
        "ar-DZ": "Алжир",
        "en-SG": "Синг.(анг.)",
        "ar-MA": "Марокко",
        "fil-PH": "Фил.(фил.)",
        "ta-SG": "Синг.(там.)",
        "en-KE": "Кен.(анг.)",
        "es-HN": "Гондур.",
        "nb-NO": "Норвег.",
        "hr-HR": "Хорват.",
        "es-PR": "Пуэрто-Р.",
        "af-ZA": "ЮАР(афр.)",
        "gl-ES": "Исп.(гал.)",
        "es-PY": "Парагв.",
        "de-AT": "Австрия",
        "ta-LK": "Шри-Л.(там.)",
        "is-IS": "Исланд.",
        "my-MM": "Мьянма",
        "bg-BG": "Болгар.",
        "cs-CZ": "Чехия",
        "en-PH": "Фил.(анг.)",
        "uz-UZ": "Узбек.",
        "zh-TW": "Тайвань",
        "en-HK": "Гонк.(анг.)",
        "ko-KR": "Корея",
        "sk-SK": "Словак.",
        "ps-AF": "Афган.",
        "ar-OM": "Оман",
        "ru-RU": "Россия",
        "sq-AL": "Албан.",
        "es-AR": "Аргент.",
        "sv-SE": "Швеция",
        "am-ET": "Эфиоп.",
        "mr-IN": "Инд.(мар.)",
        "da-DK": "Дания",
        "mn-MN": "Монгол.",
        "uk-UA": "Украина",
        "en-US": "США(анг.)",
        "ta-MY": "Малайз.(т.)",
        "gu-IN": "Инд.(гуд.)",
        "lv-LV": "Латвия",
        "nl-BE": "Бел.(нид.)",
        "zh-CN": "Китай",
        "ur-PK": "Пакист.",
        "te-IN": "Инд.(тел.)",
        "hi-IN": "Инд.(хин.)",
        "en-NG": "Нигер.",
        "de-CH": "Швейц.(нем.)",
        "ja-JP": "Япония",
        "bs-BA": "Босния",
        "ar-YE": "Йемен",
        "ne-NP": "Непал",
        "ka-GE": "Грузия",
        "ar-QA": "Катар",
        "es-GT": "Гватем.",
        "es-GQ": "Гвинея",
        "es-PE": "Перу",
        "en-NZ": "Нов.Зел.",
        "fa-IR": "Иран",
        "es-PA": "Панама",
        "ro-RO": "Румын.",
        "mt-MT": "Мальта",
        "et-EE": "Эстон.",
        "tr-TR": "Турция",
        "fr-FR": "Франция",
        "vi-VN": "Вьетн.",
        "en-GB": "Британ.",
        "km-KH": "Камбод.",
        "fi-FI": "Финл.",
        "az-AZ": "Азерб.",
        "en-CA": "Кан.(анг.)",
        "lt-LT": "Литва",
        "ar-AE": "ОАЭ",
        "sl-SI": "Словен.",
        "es-DO": "Доминик.",
        "ar-IQ": "Ирак",
        "bn-IN": "Инд.(бен.)",
        "si-LK": "Шри-Л.(син.)",
        "fr-CH": "Швейц.(фр.)",
        "es-EC": "Эквад.",
        "es-US": "США(исп.)",
        "kn-IN": "Инд.(кан.)",
        "lo-LA": "Лаос",
        "ar-SA": "С.Аравия",
        "ca-ES": "Исп.(кат.)",
        "de-DE": "Герман.",
        "zh-HK": "Гонк.(кит.)",
        "pt-BR": "Бразил.",
        "sr-RS": "Сербия",
        "es-UY": "Уругв.",
        "sw-KE": "Кен.(суа.)",
        "ar-BH": "Бахрейн",
        "es-ES": "Исп.(исп.)",
        "kk-KZ": "Казах.",
        "ar-JO": "Иордан.",
        "es-VE": "Венес.",
        "so-SO": "Сомали",
        "en-TZ": "Танз.(анг.)",
        "su-ID": "Индон.(сун.)",
        "es-MX": "Мексика",
        "it-IT": "Италия",
        "ur-IN": "Инд.(урд.)",
        "bn-BD": "Бангл.",
        "id-ID": "Индон.",
        "es-NI": "Никараг.",
        "th-TH": "Таил."
    },
    OB = {
        "en-IE": "Irlanda (Ing.)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanz\xE2nia (Sua.)",
        "ms-MY": "Mal\xE1sia (Mal.)",
        "en-IN": "\xCDndia (Ing.)",
        "es-BO": "Bol\xEDvia",
        "ar-SY": "S\xEDria",
        "en-ZA": "\xC1f. Sul (Ing.)",
        "ta-IN": "\xCDndia (T\xE2m.)",
        "el-GR": "Gr\xE9cia",
        "nl-NL": "Holanda",
        "zu-ZA": "\xC1f. Sul (Zul.)",
        "ar-LB": "L\xEDbano",
        "en-AU": "Austr\xE1lia",
        "he-IL": "Israel",
        "mk-MK": "Maced. N.",
        "ar-TN": "Tun\xEDsia",
        "ar-LY": "L\xEDbia",
        "hu-HU": "Hungria",
        "ml-IN": "\xCDndia (Mal.)",
        "es-SV": "El Salv.",
        "es-CR": "Costa R.",
        "es-CL": "Chile",
        "fr-CA": "Canad\xE1 (Fra.)",
        "es-CO": "Col\xF4mbia",
        "jv-ID": "Indon. (Jav.)",
        "pl-PL": "Pol\xF4nia",
        "pt-PT": "Portugal",
        "ar-EG": "Egito",
        "es-CU": "Cuba",
        "fr-BE": "B\xE9lg. (Fra.)",
        "ga-IE": "Irlanda (Irl.)",
        "cy-GB": "R. Unido (Gal.)",
        "ar-DZ": "Arg\xE9lia",
        "en-SG": "Singap. (Ing.)",
        "ar-MA": "Marrocos",
        "fil-PH": "Filip. (Fil.)",
        "ta-SG": "Singap. (T\xE2m.)",
        "en-KE": "Qu\xEAnia (Ing.)",
        "es-HN": "Honduras",
        "nb-NO": "Noruega",
        "hr-HR": "Cro\xE1cia",
        "es-PR": "P. Rico",
        "af-ZA": "\xC1f. Sul (Afr.)",
        "gl-ES": "Espanha (Gal.)",
        "es-PY": "Paraguai",
        "de-AT": "\xC1ustria",
        "ta-LK": "Sri L. (T\xE2m.)",
        "is-IS": "Isl\xE2ndia",
        "my-MM": "Mianmar",
        "bg-BG": "Bulg\xE1ria",
        "cs-CZ": "Tch\xE9quia",
        "en-PH": "Filip. (Ing.)",
        "uz-UZ": "Uzbequist\xE3o",
        "zh-TW": "Taiwan",
        "en-HK": "H. Kong (Ing.)",
        "ko-KR": "Coreia",
        "sk-SK": "Eslov\xE1quia",
        "ps-AF": "Afeganist\xE3o",
        "ar-OM": "Om\xE3",
        "ru-RU": "R\xFAssia",
        "sq-AL": "Alb\xE2nia",
        "es-AR": "Argentina",
        "sv-SE": "Su\xE9cia",
        "am-ET": "Eti\xF3pia",
        "mr-IN": "\xCDndia (Mar.)",
        "da-DK": "Dinamarca",
        "mn-MN": "Mong\xF3lia",
        "uk-UA": "Ucr\xE2nia",
        "en-US": "EUA (Ing.)",
        "ta-MY": "Mal\xE1sia (T\xE2m.)",
        "gu-IN": "\xCDndia (Guz.)",
        "lv-LV": "Let\xF4nia",
        "nl-BE": "B\xE9lg. (Hol.)",
        "zh-CN": "China",
        "ur-PK": "Paquist\xE3o",
        "te-IN": "\xCDndia (Tel.)",
        "hi-IN": "\xCDndia (Hin.)",
        "en-NG": "Nig\xE9ria",
        "de-CH": "Su\xED\xE7a (Ale.)",
        "ja-JP": "Jap\xE3o",
        "bs-BA": "B\xF3snia",
        "ar-YE": "I\xEAmen",
        "ne-NP": "Nepal",
        "ka-GE": "Ge\xF3rgia",
        "ar-QA": "Catar",
        "es-GT": "Guatemala",
        "es-GQ": "Guin\xE9",
        "es-PE": "Peru",
        "en-NZ": "N. Zel\xE2ndia",
        "fa-IR": "Ir\xE3",
        "es-PA": "Panam\xE1",
        "ro-RO": "Rom\xEAnia",
        "mt-MT": "Malta",
        "et-EE": "Est\xF4nia",
        "tr-TR": "Turquia",
        "fr-FR": "Fran\xE7a",
        "vi-VN": "Vietn\xE3",
        "en-GB": "R. Unido",
        "km-KH": "Camboja",
        "fi-FI": "Finl\xE2ndia",
        "az-AZ": "Azerbaij\xE3o",
        "en-CA": "Canad\xE1 (Ing.)",
        "lt-LT": "Litu\xE2nia",
        "ar-AE": "Emir. \xC1rabes",
        "sl-SI": "Eslov\xEAnia",
        "es-DO": "Dominic.",
        "ar-IQ": "Iraque",
        "bn-IN": "\xCDndia (Ben.)",
        "si-LK": "Sri L. (Sin.)",
        "fr-CH": "Su\xED\xE7a (Fra.)",
        "es-EC": "Equador",
        "es-US": "EUA (Esp.)",
        "kn-IN": "\xCDndia (Can.)",
        "lo-LA": "Laos",
        "ar-SA": "Ar\xE1b. Saudita",
        "ca-ES": "Espanha (Cat.)",
        "de-DE": "Alemanha",
        "zh-HK": "H. Kong (Chi.)",
        "pt-BR": "Brasil",
        "sr-RS": "S\xE9rvia",
        "es-UY": "Uruguai",
        "sw-KE": "Qu\xEAnia (Sua.)",
        "ar-BH": "Bahrein",
        "es-ES": "Espanha (Esp.)",
        "kk-KZ": "Cazaquist\xE3o",
        "ar-JO": "Jord\xE2nia",
        "es-VE": "Venezuela",
        "so-SO": "Som\xE1lia",
        "en-TZ": "Tanz\xE2nia (Ing.)",
        "su-ID": "Indon. (Sun.)",
        "es-MX": "M\xE9xico",
        "it-IT": "It\xE1lia",
        "ur-IN": "\xCDndia (Urd.)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indon\xE9sia",
        "es-NI": "Nicar\xE1gua",
        "th-TH": "Tail\xE2ndia"
    },
    GB = {
        "en-IE": "Irlanda (ing.)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanz\xE2nia (sua.)",
        "ms-MY": "Mal\xE1sia (mal.)",
        "en-IN": "\xCDndia (ing.)",
        "es-BO": "Bol\xEDvia",
        "ar-SY": "S\xEDria",
        "en-ZA": "\xC1f. Sul (ing.)",
        "ta-IN": "\xCDndia (t\xE2m.)",
        "el-GR": "Gr\xE9cia",
        "nl-NL": "Pa\xEDses Baixos",
        "zu-ZA": "\xC1f. Sul (zulu)",
        "ar-LB": "L\xEDbano",
        "en-AU": "Austr\xE1lia",
        "he-IL": "Israel",
        "mk-MK": "Maced\xF4nia N.",
        "ar-TN": "Tun\xEDsia",
        "ar-LY": "L\xEDbia",
        "hu-HU": "Hungria",
        "ml-IN": "\xCDndia (mala.)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canad\xE1 (fra.)",
        "es-CO": "Col\xF4mbia",
        "jv-ID": "Indon\xE9sia (jav.)",
        "pl-PL": "Pol\xF4nia",
        "pt-PT": "Portugal",
        "ar-EG": "Egito",
        "es-CU": "Cuba",
        "fr-BE": "B\xE9lgica (fra.)",
        "ga-IE": "Irlanda (irl.)",
        "cy-GB": "R. Unido (gal.)",
        "ar-DZ": "Arg\xE9lia",
        "en-SG": "Singapura (ing.)",
        "ar-MA": "Marrocos",
        "fil-PH": "Filipinas (fil.)",
        "ta-SG": "Singapura (t\xE2m.)",
        "en-KE": "Qu\xEAnia (ing.)",
        "es-HN": "Honduras",
        "nb-NO": "Noruega",
        "hr-HR": "Cro\xE1cia",
        "es-PR": "Porto Rico",
        "af-ZA": "\xC1f. Sul (afric.)",
        "gl-ES": "Espanha (gal.)",
        "es-PY": "Paraguai",
        "de-AT": "\xC1ustria",
        "ta-LK": "Sri Lanka (t\xE2m.)",
        "is-IS": "Isl\xE2ndia",
        "my-MM": "Mianmar",
        "bg-BG": "Bulg\xE1ria",
        "cs-CZ": "Tch\xE9quia",
        "en-PH": "Filipinas (ing.)",
        "uz-UZ": "Uzbequist\xE3o",
        "zh-TW": "Taiwan",
        "en-HK": "Hong Kong (ing.)",
        "ko-KR": "Coreia",
        "sk-SK": "Eslov\xE1quia",
        "ps-AF": "Afeganist\xE3o",
        "ar-OM": "Om\xE3",
        "ru-RU": "R\xFAssia",
        "sq-AL": "Alb\xE2nia",
        "es-AR": "Argentina",
        "sv-SE": "Su\xE9cia",
        "am-ET": "Eti\xF3pia",
        "mr-IN": "\xCDndia (mar.)",
        "da-DK": "Dinamarca",
        "mn-MN": "Mong\xF3lia",
        "uk-UA": "Ucr\xE2nia",
        "en-US": "EUA (ing.)",
        "ta-MY": "Mal\xE1sia (t\xE2m.)",
        "gu-IN": "\xCDndia (guz.)",
        "lv-LV": "Let\xF4nia",
        "nl-BE": "B\xE9lgica (hol.)",
        "zh-CN": "China",
        "ur-PK": "Paquist\xE3o",
        "te-IN": "\xCDndia (tel.)",
        "hi-IN": "\xCDndia (hin.)",
        "en-NG": "Nig\xE9ria (ing.)",
        "de-CH": "Su\xED\xE7a (ale.)",
        "ja-JP": "Jap\xE3o",
        "bs-BA": "B\xF3snia",
        "ar-YE": "I\xEAmen",
        "ne-NP": "Nepal",
        "ka-GE": "Ge\xF3rgia",
        "ar-QA": "Catar",
        "es-GT": "Guatemala",
        "es-GQ": "Guin\xE9 Eq.",
        "es-PE": "Peru",
        "en-NZ": "Nova Zel\xE2ndia",
        "fa-IR": "Ir\xE3",
        "es-PA": "Panam\xE1",
        "ro-RO": "Rom\xEAnia",
        "mt-MT": "Malta",
        "et-EE": "Est\xF4nia",
        "tr-TR": "Turquia",
        "fr-FR": "Fran\xE7a",
        "vi-VN": "Vietn\xE3",
        "en-GB": "Reino Unido",
        "km-KH": "Camboja",
        "fi-FI": "Finl\xE2ndia",
        "az-AZ": "Azerbaij\xE3o",
        "en-CA": "Canad\xE1 (ing.)",
        "lt-LT": "Litu\xE2nia",
        "ar-AE": "Emirados \xC1rabes",
        "sl-SI": "Eslov\xEAnia",
        "es-DO": "Rep. Dominicana",
        "ar-IQ": "Iraque",
        "bn-IN": "\xCDndia (ben.)",
        "si-LK": "Sri Lanka (sin.)",
        "fr-CH": "Su\xED\xE7a (fra.)",
        "es-EC": "Equador",
        "es-US": "EUA (esp.)",
        "kn-IN": "\xCDndia (can.)",
        "lo-LA": "Laos",
        "ar-SA": "Ar\xE1bia Saudita",
        "ca-ES": "Espanha (cat.)",
        "de-DE": "Alemanha",
        "zh-HK": "Hong Kong (chin.)",
        "pt-BR": "Brasil",
        "sr-RS": "S\xE9rvia",
        "es-UY": "Uruguai",
        "sw-KE": "Qu\xEAnia (sua.)",
        "ar-BH": "Bahrein",
        "es-ES": "Espanha",
        "kk-KZ": "Cazaquist\xE3o",
        "ar-JO": "Jord\xE2nia",
        "es-VE": "Venezuela",
        "so-SO": "Som\xE1lia",
        "en-TZ": "Tanz\xE2nia (ing.)",
        "su-ID": "Indon\xE9sia (sun.)",
        "es-MX": "M\xE9xico",
        "it-IT": "It\xE1lia",
        "ur-IN": "\xCDndia (urd.)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indon\xE9sia",
        "es-NI": "Nicar\xE1gua",
        "th-TH": "Tail\xE2ndia"
    },
    ZB = {
        "en-IE": "İrlanda(İng)",
        "ar-KW": "Kuveyt",
        "sw-TZ": "Tanzanya(Sv)",
        "ms-MY": "Malezya(Mly)",
        "en-IN": "Hindistan(İng)",
        "es-BO": "Bolivya",
        "ar-SY": "Suriye",
        "en-ZA": "G.Afrika(İng)",
        "ta-IN": "Hindistan(Tml)",
        "el-GR": "Yunanistan",
        "nl-NL": "Hollanda",
        "zu-ZA": "G.Afrika(Zulu)",
        "ar-LB": "L\xFCbnan",
        "en-AU": "Avustralya",
        "he-IL": "İsrail",
        "mk-MK": "K.Makedonya",
        "ar-TN": "Tunus",
        "ar-LY": "Libya",
        "hu-HU": "Macaristan",
        "ml-IN": "Hindistan(Mlm)",
        "es-SV": "El Salvador",
        "es-CR": "Kosta Rika",
        "es-CL": "Şili",
        "fr-CA": "Kanada(Fr)",
        "es-CO": "Kolombiya",
        "jv-ID": "Endonezya(Cv)",
        "pl-PL": "Polonya",
        "pt-PT": "Portekiz",
        "ar-EG": "Mısır",
        "es-CU": "K\xFCba",
        "fr-BE": "Bel\xE7ika(Fr)",
        "ga-IE": "İrlanda(İrl)",
        "cy-GB": "Britanya(Gal)",
        "ar-DZ": "Cezayir",
        "en-SG": "Singapur(İng)",
        "ar-MA": "Fas",
        "fil-PH": "Filipinler(Fil)",
        "ta-SG": "Singapur(Tml)",
        "en-KE": "Kenya(İng)",
        "es-HN": "Honduras",
        "nb-NO": "Norve\xE7",
        "hr-HR": "Hırvatistan",
        "es-PR": "Porto Riko",
        "af-ZA": "G.Afrika(Afr)",
        "gl-ES": "İspanya(Gal)",
        "es-PY": "Paraguay",
        "de-AT": "Avusturya",
        "ta-LK": "Sri Lanka(Tml)",
        "is-IS": "İzlanda",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaristan",
        "cs-CZ": "\xC7ekya",
        "en-PH": "Filipinler(İng)",
        "uz-UZ": "\xD6zbekistan",
        "zh-TW": "\xC7in Tayvan",
        "en-HK": "Hong Kong(İng)",
        "ko-KR": "Kore",
        "sk-SK": "Slovakya",
        "ps-AF": "Afganistan",
        "ar-OM": "Umman",
        "ru-RU": "Rusya",
        "sq-AL": "Arnavutluk",
        "es-AR": "Arjantin",
        "sv-SE": "\u0130sve\xE7",
        "am-ET": "Etiyopya",
        "mr-IN": "Hindistan(Mrt)",
        "da-DK": "Danimarka",
        "mn-MN": "Moğolistan",
        "uk-UA": "Ukrayna",
        "en-US": "Amerika(İng)",
        "ta-MY": "Malezya(Tml)",
        "gu-IN": "Hindistan(Guj)",
        "lv-LV": "Letonya",
        "nl-BE": "Bel\xE7ika(Hol)",
        "zh-CN": "\xC7in",
        "ur-PK": "Pakistan",
        "te-IN": "Hindistan(Tel)",
        "hi-IN": "Hindistan(Hin)",
        "en-NG)": "Nijerya",
        "de-CH": "\u0130svi\xE7re(Alm)",
        "ja-JP": "Japonya",
        "bs-BA": "Bosna",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "G\xFCrcistan",
        "ar-QA": "Katar",
        "es-GT": "Guatemala",
        "es-GQ": "Gine",
        "es-PE": "Peru",
        "en-NZ": "Yeni Zelanda",
        "fa-IR": "İran",
        "es-PA": "Panama",
        "ro-RO": "Romanya",
        "mt-MT": "Malta",
        "et-EE": "Estonya",
        "tr-TR": "T\xFCrkiye",
        "fr-FR": "Fransa",
        "vi-VN": "Vietnam",
        "en-GB": "Britanya",
        "km-KH": "Kambo\xE7ya",
        "fi-FI": "Finlandiya",
        "az-AZ": "Azerbaycan",
        "en-CA": "Kanada(İng)",
        "lt-LT": "Litvanya",
        "ar-AE": "BAE",
        "sl-SI": "Slovenya",
        "es-DO": "Dominik",
        "ar-IQ": "Irak",
        "bn-IN": "Hindistan(Bng)",
        "si-LK": "Sri Lanka(Sin)",
        "fr-CH": "\u0130svi\xE7re(Fr)",
        "es-EC": "Ekvador",
        "es-US": "Amerika(İsp)",
        "kn-IN": "Hindistan(Kan)",
        "lo-LA": "Laos",
        "ar-SA": "Suudi Arabistan",
        "ca-ES": "İspanya(Kat)",
        "de-DE": "Almanya",
        "zh-HK": "Hong Kong(\xC7in)",
        "pt-BR": "Brezilya",
        "sr-RS": "Sırbistan",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya(Sv)",
        "ar-BH": "Bahreyn",
        "es-ES": "İspanya(İsp)",
        "kk-KZ": "Kazakistan",
        "ar-JO": "\xDCrd\xFCn",
        "es-VE": "Venezuela",
        "so-SO": "Somali",
        "en-TZ": "Tanzanya(İng)",
        "su-ID": "Endonezya(Sun)",
        "es-MX": "Meksika",
        "it-IT": "İtalya",
        "ur-IN": "Hindistan(Urd)",
        "bn-BD": "Bangladeş",
        "id-ID": "Endonezya",
        "es-NI": "Nikaragua",
        "th-TH": "Tayland"
    },
    YB = {
        "en-IE": "ไอร์แลนด์(อังกฤษ)",
        "ar-KW": "คูเวต",
        "sw-TZ": "แทนซาเนีย(สวาฮิลี)",
        "ms-MY": "มาเลเซีย(มาเลย์)",
        "en-IN": "อินเดีย(อังกฤษ)",
        "es-BO": "โบลิเวีย",
        "ar-SY": "ซีเรีย",
        "en-ZA": "แอฟริกาใต้(อังกฤษ)",
        "ta-IN": "อินเดีย(ทมิฬ)",
        "el-GR": "กรีซ",
        "nl-NL": "เนเธอร์แลนด์",
        "zu-ZA": "แอฟริกาใต้(ซูลู)",
        "ar-LB": "เลบานอน",
        "en-AU": "ออสเตรเลีย",
        "he-IL": "อิสราเอล",
        "mk-MK": "นอร์ทมาซิโดเนีย",
        "ar-TN": "ตูนิเซีย",
        "ar-LY": "ลิเบีย",
        "hu-HU": "ฮังการี",
        "ml-IN": "อินเดีย(มลยาฬัม)",
        "es-SV": "เอลซัลวาดอร์",
        "es-CR": "คอสตาริกา",
        "es-CL": "ชิลี",
        "fr-CA": "แคนาดา(ฝรั่งเศส)",
        "es-CO": "โคลอมเบีย",
        "jv-ID": "อินโดนีเซีย(ชวา)",
        "pl-PL": "โปแลนด์",
        "pt-PT": "โปรตุเกส",
        "ar-EG": "อียิปต์",
        "es-CU": "คิวบา",
        "fr-BE": "เบลเยียม(ฝรั่งเศส)",
        "ga-IE": "ไอร์แลนด์(ไอริช)",
        "cy-GB": "สหราชอาณาจักร(เวลส์)",
        "ar-DZ": "แอลจีเรีย",
        "en-SG": "สิงคโปร์(อังกฤษ)",
        "ar-MA": "โมร็อกโก",
        "fil-PH": "ฟิลิปปินส์(ฟิลิปปินส์)",
        "ta-SG": "สิงคโปร์(ทมิฬ)",
        "en-KE": "เคนยา(อังกฤษ)",
        "es-HN": "ฮอนดูรัส",
        "nb-NO": "นอร์เวย์",
        "hr-HR": "โครเอเชีย",
        "es-PR": "เปอร์โตริโก",
        "af-ZA": "แอฟริกาใต้(แอฟริกานส์)",
        "gl-ES": "สเปน(กาลิเซีย)",
        "es-PY": "ปารากวัย",
        "de-AT": "ออสเตรีย",
        "ta-LK": "ศรีลังกา(ทมิฬ)",
        "is-IS": "ไอซ์แลนด์",
        "my-MM": "เมียนมาร์",
        "bg-BG": "บัลแกเรีย",
        "cs-CZ": "เช็ก",
        "en-PH": "ฟิลิปปินส์(อังกฤษ)",
        "uz-UZ": "อุซเบกิสถาน",
        "zh-TW": "ไต้หวัน",
        "en-HK": "ฮ่องกง(อังกฤษ)",
        "ko-KR": "เกาหลี",
        "sk-SK": "สโลวาเกีย",
        "ps-AF": "อัฟกานิสถาน",
        "ar-OM": "โอมาน",
        "ru-RU": "รัสเซีย",
        "sq-AL": "แอลเบเนีย",
        "es-AR": "อาร์เจนตินา",
        "sv-SE": "สวีเดน",
        "am-ET": "เอธิโอเปีย",
        "mr-IN": "อินเดีย(มราฐี)",
        "da-DK": "เดนมาร์ก",
        "mn-MN": "มองโกเลีย",
        "uk-UA": "ยูเครน",
        "en-US": "สหรัฐ(อังกฤษ)",
        "ta-MY": "มาเลเซีย(ทมิฬ)",
        "gu-IN": "อินเดีย(คุชราต)",
        "lv-LV": "ลัตเวีย",
        "nl-BE": "เบลเยียม(ดัตช์)",
        "zh-CN": "จีน",
        "ur-PK": "ปากีสถาน",
        "te-IN": "อินเดีย(เตลูกู)",
        "hi-IN": "อินเดีย(ฮินดี)",
        "en-NG": "ไนจีเรีย",
        "de-CH": "สวิส(เยอรมัน)",
        "ja-JP": "ญี่ปุ่น",
        "bs-BA": "บอสเนีย",
        "ar-YE": "เยเมน",
        "ne-NP": "เนปาล",
        "ka-GE": "จอร์เจีย",
        "ar-QA": "กาตาร์",
        "es-GT": "กัวเตมาลา",
        "es-GQ": "กินี",
        "es-PE": "เปรู",
        "en-NZ": "นิวซีแลนด์",
        "fa-IR": "อิหร่าน",
        "es-PA": "ปานามา",
        "ro-RO": "โรมาเนีย",
        "mt-MT": "มอลตา",
        "et-EE": "เอสโตเนีย",
        "tr-TR": "ตุรกี",
        "fr-FR": "ฝรั่งเศส",
        "vi-VN": "เวียดนาม",
        "en-GB": "สหราชอาณาจักร",
        "km-KH": "กัมพูชา",
        "fi-FI": "ฟินแลนด์",
        "az-AZ": "อาเซอร์ไบจาน",
        "en-CA": "แคนาดา(อังกฤษ)",
        "lt-LT": "ลิทัวเนีย",
        "ar-AE": "สหรัฐอาหรับเอมิเรตส์",
        "sl-SI": "สโลวีเนีย",
        "es-DO": "โดมินิกา",
        "ar-IQ": "อิรัก",
        "bn-IN": "อินเดีย(เบงกาลี)",
        "si-LK": "ศรีลังกา(สิงหล)",
        "fr-CH": "สวิส(ฝรั่งเศส)",
        "es-EC": "เอกวาดอร์",
        "es-US": "สหรัฐ(สเปน)",
        "kn-IN": "อินเดีย(กันนาดา)",
        "lo-LA": "ลาว",
        "ar-SA": "ซาอุดีอาระเบีย",
        "ca-ES": "สเปน(คาตาลัน)",
        "de-DE": "เยอรมนี",
        "zh-HK": "ฮ่องกง(จีน)",
        "pt-BR": "บราซิล",
        "sr-RS": "เซอร์เบีย",
        "es-UY": "อุรุกวัย",
        "sw-KE": "เคนยา(สวาฮิลี)",
        "ar-BH": "บาห์เรน",
        "es-ES": "สเปน(สเปน)",
        "kk-KZ": "คาซัคสถาน",
        "ar-JO": "จอร์แดน",
        "es-VE": "เวเนซุเอลา",
        "so-SO": "โซมาเลีย",
        "en-TZ": "แทนซาเนีย(อังกฤษ)",
        "su-ID": "อินโดนีเซีย(ซุนดา)",
        "es-MX": "เม็กซิโก",
        "it-IT": "อิตาลี",
        "ur-IN": "อินเดีย(อูรดู)",
        "bn-BD": "บังกลาเทศ",
        "id-ID": "อินโดนีเซีย",
        "es-NI": "นิการากัว",
        "th-TH": "ไทย"
    },
    VB = {
        "en-IE": "Ірландія(англ.)",
        "ar-KW": "Кувейт",
        "sw-TZ": "Танзанія(суах.)",
        "ms-MY": "Малайзія(малай.)",
        "en-IN": "Індія(англ.)",
        "es-BO": "Болівія",
        "ar-SY": "Сирія",
        "en-ZA": "ПАР(англ.)",
        "ta-IN": "Індія(таміл.)",
        "el-GR": "Греція",
        "nl-NL": "Нідерланди",
        "zu-ZA": "ПАР(зулу)",
        "ar-LB": "Ліван",
        "en-AU": "Австралія",
        "he-IL": "Ізраїль",
        "mk-MK": "Пн. Македонія",
        "ar-TN": "Туніс",
        "ar-LY": "Лівія",
        "hu-HU": "Угорщина",
        "ml-IN": "Індія(малаял.)",
        "es-SV": "Сальвадор",
        "es-CR": "Коста-Рика",
        "es-CL": "Чилі",
        "fr-CA": "Канада(фр.)",
        "es-CO": "Колумбія",
        "jv-ID": "Індонезія(яв.)",
        "pl-PL": "Польща",
        "pt-PT": "Португалія",
        "ar-EG": "Єгипет",
        "es-CU": "Куба",
        "fr-BE": "Бельгія(фр.)",
        "ga-IE": "Ірландія(ірл.)",
        "cy-GB": "Британія(вал.)",
        "ar-DZ": "Алжир",
        "en-SG": "Сінгапур(англ.)",
        "ar-MA": "Марокко",
        "fil-PH": "Філіппіни(філ.)",
        "ta-SG": "Сінгапур(таміл.)",
        "en-KE": "Кенія(англ.)",
        "es-HN": "Гондурас",
        "nb-NO": "Норвегія",
        "hr-HR": "Хорватія",
        "es-PR": "Пуерто-Рико",
        "af-ZA": "ПАР(африк.)",
        "gl-ES": "Іспанія(галіс.)",
        "es-PY": "Парагвай",
        "de-AT": "Австрія",
        "ta-LK": "Шрі-Ланка(таміл.)",
        "is-IS": "Ісландія",
        "my-MM": "М'янма",
        "bg-BG": "Болгарія",
        "cs-CZ": "Чехія",
        "en-PH": "Філіппіни(англ.)",
        "uz-UZ": "Узбекистан",
        "zh-TW": "Тайвань",
        "en-HK": "Гонконг(англ.)",
        "ko-KR": "Корея",
        "sk-SK": "Словаччина",
        "ps-AF": "Афганістан",
        "ar-OM": "Оман",
        "ru-RU": "Росія",
        "sq-AL": "Албанія",
        "es-AR": "Аргентина",
        "sv-SE": "Швеція",
        "am-ET": "Ефіопія",
        "mr-IN": "Індія(марат.)",
        "da-DK": "Данія",
        "mn-MN": "Монголія",
        "uk-UA": "Україна",
        "en-US": "США(англ.)",
        "ta-MY": "Малайзія(таміл.)",
        "gu-IN": "Індія(гудж.)",
        "lv-LV": "Латвія",
        "nl-BE": "Бельгія(нід.)",
        "zh-CN": "Китай",
        "ur-PK": "Пакистан",
        "te-IN": "Індія(тел.)",
        "hi-IN": "Індія(гінді)",
        "en-NG": "Нігерія(англ.)",
        "de-CH": "Швейцарія(нім.)",
        "ja-JP": "Японія",
        "bs-BA": "Боснія",
        "ar-YE": "Ємен",
        "ne-NP": "Непал",
        "ka-GE": "Грузія",
        "ar-QA": "Катар",
        "es-GT": "Гватемала",
        "es-GQ": "Екв. Гвінея",
        "es-PE": "Перу",
        "en-NZ": "Нова Зеландія",
        "fa-IR": "Іран",
        "es-PA": "Панама",
        "ro-RO": "Румунія",
        "mt-MT": "Мальта",
        "et-EE": "Естонія",
        "tr-TR": "Туреччина",
        "fr-FR": "Франція",
        "vi-VN": "В'єтнам",
        "en-GB": "Британія",
        "km-KH": "Камбоджа",
        "fi-FI": "Фінляндія",
        "az-AZ": "Азербайджан",
        "en-CA": "Канада(англ.)",
        "lt-LT": "Литва",
        "ar-AE": "ОАЕ",
        "sl-SI": "Словенія",
        "es-DO": "Домінікана",
        "ar-IQ": "Ірак",
        "bn-IN": "Індія(бенг.)",
        "si-LK": "Шрі-Ланка(синг.)",
        "fr-CH": "Швейцарія(фр.)",
        "es-EC": "Еквадор",
        "es-US": "США(ісп.)",
        "kn-IN": "Індія(кан.)",
        "lo-LA": "Лаос",
        "ar-SA": "Сауд. Аравія",
        "ca-ES": "Іспанія(кат.)",
        "de-DE": "Німеччина",
        "zh-HK": "Гонконг(кит.)",
        "pt-BR": "Бразилія",
        "sr-RS": "Сербія",
        "es-UY": "Уругвай",
        "sw-KE": "Кенія(суах.)",
        "ar-BH": "Бахрейн",
        "es-ES": "Іспанія",
        "kk-KZ": "Казахстан",
        "ar-JO": "Йорданія",
        "es-VE": "Венесуела",
        "so-SO": "Сомалі",
        "en-TZ": "Танзанія(англ.)",
        "su-ID": "Індонезія(сунд.)",
        "es-MX": "Мексика",
        "it-IT": "Італія",
        "ur-IN": "Індія(урду)",
        "bn-BD": "Бангладеш",
        "id-ID": "Індонезія",
        "es-NI": "Нікарагуа",
        "th-TH": "Таїланд"
    },
    XB = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    WB = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    JB = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    $B = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    jB = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    qB = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    QB = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    e9 = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    a9 = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    n9 = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Bahasa Indonesia",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    i9 = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    u9 = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    t9 = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    r9 = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    l9 = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    s9 = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    o9 = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    c9 = {
        "en-IE": "Irland (engelsk)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania (swahili)",
        "ms-MY": "Malaysia (malayisk)",
        "en-IN": "India (engelsk)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "S\xF8r-Afrika (engelsk)",
        "ta-IN": "India (tamil)",
        "el-GR": "Hellas",
        "nl-NL": "Nederland",
        "zu-ZA": "S\xF8r-Afrika (zulu)",
        "ar-LB": "Libanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "Nord-Makedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Ungarn",
        "ml-IN": "India (malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada (fransk)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia (javanesisk)",
        "pl-PL": "Polen",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgia (fransk)",
        "ga-IE": "Irland (irsk)",
        "cy-GB": "Storbritannia (walisisk)",
        "ar-DZ": "Algerie",
        "en-SG": "Singapore (engelsk)",
        "ar-MA": "Marokko",
        "fil-PH": "Filippinene (filipino)",
        "ta-SG": "Singapore (tamil)",
        "en-KE": "Kenya (engelsk)",
        "es-HN": "Honduras",
        "nb-NO": "Norge",
        "hr-HR": "Kroatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "S\xF8r-Afrika (afrikaans)",
        "gl-ES": "Spania (galisisk)",
        "es-PY": "Paraguay",
        "de-AT": "\xD8sterrike",
        "ta-LK": "Sri Lanka (tamil)",
        "is-IS": "Island",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Tsjekkia",
        "en-PH": "Filippinene (engelsk)",
        "uz-UZ": "Usbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "Hongkong (engelsk)",
        "ko-KR": "S\xF8r-Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russland",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sverige",
        "am-ET": "Etiopia",
        "mr-IN": "India (marathi)",
        "da-DK": "Danmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraina",
        "en-US": "USA (engelsk)",
        "ta-MY": "Malaysia (tamil)",
        "gu-IN": "India (gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgia (nederlandsk)",
        "zh-CN": "Kina",
        "ur-PK": "Pakistan",
        "te-IN": "India (telugu)",
        "hi-IN": "India (hindi)",
        "en-NG": "Nigeria (engelsk)",
        "de-CH": "Sveits (tysk)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Jemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Ekvatorial-Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Panama",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estland",
        "tr-TR": "Tyrkia",
        "fr-FR": "Frankrike",
        "vi-VN": "Vietnam",
        "en-GB": "Storbritannia",
        "km-KH": "Kambodsja",
        "fi-FI": "Finland",
        "az-AZ": "Aserbajdsjan",
        "en-CA": "Canada (engelsk)",
        "lt-LT": "Litauen",
        "ar-AE": "De forente arabiske emirater",
        "sl-SI": "Slovenia",
        "es-DO": "Den dominikanske republikk",
        "ar-IQ": "Irak",
        "bn-IN": "India (bengali)",
        "si-LK": "Sri Lanka (singalesisk)",
        "fr-CH": "Sveits (fransk)",
        "es-EC": "Ecuador",
        "es-US": "USA (spansk)",
        "kn-IN": "India (kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi-Arabia",
        "ca-ES": "Spania (katalansk)",
        "de-DE": "Tyskland",
        "zh-HK": "Hongkong (kinesisk)",
        "pt-BR": "Brasil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya (swahili)",
        "ar-BH": "Bahrain",
        "es-ES": "Spania",
        "kk-KZ": "Kasakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania (engelsk)",
        "su-ID": "Indonesia (sundanesisk)",
        "es-MX": "Mexico",
        "it-IT": "Italia",
        "ur-IN": "India (urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia (indonesisk)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    g9 = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    d9 = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    f9 = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    m9 = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    h9 = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    E9 = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    p9 = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    A9 = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    N9 = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    y9 = {
        "en-IE": "Ireland(english)",
        "ar-KW": "Kuwait",
        "sw-TZ": "Tanzania(Swahili)",
        "ms-MY": "Malaysia(Malay)",
        "en-IN": "India(English)",
        "es-BO": "Bolivia",
        "ar-SY": "Syria",
        "en-ZA": "SA(English)",
        "ta-IN": "India(Tamil)",
        "el-GR": "Greece",
        "nl-NL": "Netherlands",
        "zu-ZA": "SA(Zulu)",
        "ar-LB": "Lebanon",
        "en-AU": "Australia",
        "he-IL": "Israel",
        "mk-MK": "North Macedonia",
        "ar-TN": "Tunisia",
        "ar-LY": "Libya",
        "hu-HU": "Hungary",
        "ml-IN": "India(Malayalam)",
        "es-SV": "El Salvador",
        "es-CR": "Costa Rica",
        "es-CL": "Chile",
        "fr-CA": "Canada(French)",
        "es-CO": "Colombia",
        "jv-ID": "Indonesia(Javanese)",
        "pl-PL": "Poland",
        "pt-PT": "Portugal",
        "ar-EG": "Egypt",
        "es-CU": "Cuba",
        "fr-BE": "Belgium(French)",
        "ga-IE": "Ireland(Irish)",
        "cy-GB": "UK(Welsh)",
        "ar-DZ": "Algeria",
        "en-SG": "Singapore(English)",
        "ar-MA": "Morocco",
        "fil-PH": "Philippines(Filipino)",
        "ta-SG": "Singapore(Tamil)",
        "en-KE": "Kenya(English)",
        "es-HN": "Honduras",
        "nb-NO": "Norway",
        "hr-HR": "Croatia",
        "es-PR": "Puerto Rico",
        "af-ZA": "SA(Afrikaans)",
        "gl-ES": "Spain(Galician)",
        "es-PY": "Paraguay",
        "de-AT": "Austria",
        "ta-LK": "Sri Lanka(Tamil)",
        "is-IS": "Iceland",
        "my-MM": "Myanmar",
        "bg-BG": "Bulgaria",
        "cs-CZ": "Czech Republic",
        "en-PH": "Philippines(English)",
        "uz-UZ": "Uzbekistan",
        "zh-TW": "Taiwan",
        "en-HK": "HK(English)",
        "ko-KR": "South Korea",
        "sk-SK": "Slovakia",
        "ps-AF": "Afghanistan",
        "ar-OM": "Oman",
        "ru-RU": "Russia",
        "sq-AL": "Albania",
        "es-AR": "Argentina",
        "sv-SE": "Sweden",
        "am-ET": "Ethiopia",
        "mr-IN": "India(Marathi)",
        "da-DK": "Denmark",
        "mn-MN": "Mongolia",
        "uk-UA": "Ukraine",
        "en-US": "US(English)",
        "ta-MY": "Malaysia(Tamil)",
        "gu-IN": "India(Gujarati)",
        "lv-LV": "Latvia",
        "nl-BE": "Belgium(Dutch)",
        "zh-CN": "China",
        "ur-PK": "Pakistan",
        "te-IN": "India(Telugu)",
        "hi-IN": "India(Hindi)",
        "en-NG": "Nigeria",
        "de-CH": "Switzerland(German)",
        "ja-JP": "Japan",
        "bs-BA": "Bosnia",
        "ar-YE": "Yemen",
        "ne-NP": "Nepal",
        "ka-GE": "Georgia",
        "ar-QA": "Qatar",
        "es-GT": "Guatemala",
        "es-GQ": "Guinea",
        "es-PE": "Peru",
        "en-NZ": "New Zealand",
        "fa-IR": "Iran",
        "es-PA": "Iran",
        "ro-RO": "Romania",
        "mt-MT": "Malta",
        "et-EE": "Estonia",
        "tr-TR": "Turkey",
        "fr-FR": "France",
        "vi-VN": "Vietnam",
        "en-GB": "United Kingdom",
        "km-KH": "Cambodia",
        "fi-FI": "Finland",
        "az-AZ": "Azerbaijan",
        "en-CA": "Canada(English)",
        "lt-LT": "Lithuania",
        "ar-AE": "UAE",
        "sl-SI": "Slovenia",
        "es-DO": "Dominica",
        "ar-IQ": "Iraq",
        "bn-IN": "India(Bengali)",
        "si-LK": "Sri Lanka(Sinhala)",
        "fr-CH": "Switzerland(French)",
        "es-EC": "Ecuador",
        "es-US": "US(Spanish)",
        "kn-IN": "India(Kannada)",
        "lo-LA": "Laos",
        "ar-SA": "Saudi Arabia",
        "ca-ES": "Spain(Catalan)",
        "de-DE": "Germany",
        "zh-HK": "HK (Chinese)",
        "pt-BR": "Brazil",
        "sr-RS": "Serbia",
        "es-UY": "Uruguay",
        "sw-KE": "Kenya",
        "ar-BH": "Bahrain",
        "es-ES": "Espa\xF1a(Spain)",
        "kk-KZ": "Kazakhstan",
        "ar-JO": "Jordan",
        "es-VE": "Venezuela",
        "so-SO": "Somalia",
        "en-TZ": "Tanzania(english)",
        "su-ID": "Indonesia(Sundanese)",
        "es-MX": "Mexico",
        "it-IT": "Italy",
        "ur-IN": "India(Urdu)",
        "bn-BD": "Bangladesh",
        "id-ID": "Indonesia(Indonesian)",
        "es-NI": "Nicaragua",
        "th-TH": "Thailand"
    },
    C9 = {
        "en-IE": "愛爾蘭(英語)",
        "ar-KW": "科威特",
        "sw-TZ": "坦尚尼亞(斯瓦希里語)",
        "ms-MY": "馬來西亞(馬來語)",
        "en-IN": "印度(英語)",
        "es-BO": "玻利維亞",
        "ar-SY": "敘利亞",
        "en-ZA": "南非(英語)",
        "ta-IN": "印度(泰米爾語)",
        "el-GR": "希臘",
        "nl-NL": "荷蘭",
        "zu-ZA": "南非(祖魯語)",
        "ar-LB": "黎巴嫩",
        "en-AU": "澳洲",
        "he-IL": "以色列",
        "mk-MK": "北馬其頓",
        "ar-TN": "突尼西亞",
        "ar-LY": "利比亞",
        "hu-HU": "匈牙利",
        "ml-IN": "印度(馬拉雅拉姆語)",
        "es-SV": "薩爾瓦多",
        "es-CR": "哥斯大黎加",
        "es-CL": "智利",
        "fr-CA": "加拿大(法語)",
        "es-CO": "哥倫比亞",
        "jv-ID": "印尼(爪哇語)",
        "pl-PL": "波蘭",
        "pt-PT": "葡萄牙",
        "ar-EG": "埃及",
        "es-CU": "古巴",
        "fr-BE": "比利時(法語)",
        "ga-IE": "愛爾蘭(愛爾蘭語)",
        "cy-GB": "英國(威爾斯語)",
        "ar-DZ": "阿爾及利亞",
        "en-SG": "新加坡(英語)",
        "ar-MA": "摩洛哥",
        "fil-PH": "菲律賓(菲律賓語)",
        "ta-SG": "新加坡(泰米爾語)",
        "en-KE": "肯亞(英語)",
        "es-HN": "宏都拉斯",
        "nb-NO": "挪威",
        "hr-HR": "克羅埃西亞",
        "es-PR": "波多黎各",
        "af-ZA": "南非(南非語)",
        "gl-ES": "西班牙(加利西亞語)",
        "es-PY": "巴拉圭",
        "de-AT": "奧地利",
        "ta-LK": "斯里蘭卡(泰米爾語)",
        "is-IS": "冰島",
        "my-MM": "緬甸",
        "bg-BG": "保加利亞",
        "cs-CZ": "捷克",
        "en-PH": "菲律賓(英語)",
        "uz-UZ": "烏茲別克",
        "zh-TW": "台灣",
        "en-HK": "香港(英語)",
        "ko-KR": "韓國",
        "sk-SK": "斯洛伐克",
        "ps-AF": "阿富汗",
        "ar-OM": "阿曼",
        "ru-RU": "俄羅斯",
        "sq-AL": "阿爾巴尼亞",
        "es-AR": "阿根廷",
        "sv-SE": "瑞典",
        "am-ET": "衣索比亞",
        "mr-IN": "印度(馬拉地語)",
        "da-DK": "丹麥",
        "mn-MN": "蒙古",
        "uk-UA": "烏克蘭",
        "en-US": "美國(英語)",
        "ta-MY": "馬來西亞(泰米爾語)",
        "gu-IN": "印度(古吉拉特語)",
        "lv-LV": "拉脫維亞",
        "nl-BE": "比利時(荷蘭語)",
        "zh-CN": "中國",
        "ur-PK": "巴基斯坦",
        "te-IN": "印度(泰盧固語)",
        "hi-IN": "印度(印地語)",
        "en-NG": "奈及利亞(英語)",
        "de-CH": "瑞士(德語)",
        "ja-JP": "日本",
        "bs-BA": "波士尼亞",
        "ar-YE": "葉門",
        "ne-NP": "尼泊爾",
        "ka-GE": "喬治亞",
        "ar-QA": "卡達",
        "es-GT": "瓜地馬拉",
        "es-GQ": "赤道幾內亞",
        "es-PE": "祕魯",
        "en-NZ": "紐西蘭(英語)",
        "fa-IR": "伊朗",
        "es-PA": "巴拿馬",
        "ro-RO": "羅馬尼亞",
        "mt-MT": "馬爾他",
        "et-EE": "愛沙尼亞",
        "tr-TR": "土耳其",
        "fr-FR": "法國",
        "vi-VN": "越南",
        "en-GB": "英國(英語)",
        "km-KH": "柬埔寨",
        "fi-FI": "芬蘭",
        "az-AZ": "亞塞拜然",
        "en-CA": "加拿大(英語)",
        "lt-LT": "立陶宛",
        "ar-AE": "阿聯",
        "sl-SI": "斯洛維尼亞",
        "es-DO": "多明尼加",
        "ar-IQ": "伊拉克",
        "bn-IN": "印度(孟加拉語)",
        "si-LK": "斯里蘭卡(僧伽羅語)",
        "fr-CH": "瑞士(法語)",
        "es-EC": "厄瓜多",
        "es-US": "美國(西語)",
        "kn-IN": "印度(卡納達語)",
        "lo-LA": "寮國",
        "ar-SA": "沙烏地阿拉伯",
        "ca-ES": "西班牙(加泰隆尼亞語)",
        "de-DE": "德國",
        "zh-HK": "香港(中文)",
        "pt-BR": "巴西",
        "sr-RS": "塞爾維亞",
        "es-UY": "烏拉圭",
        "sw-KE": "肯亞(斯瓦希里語)",
        "ar-BH": "巴林",
        "es-ES": "西班牙(西語)",
        "kk-KZ": "哈薩克",
        "ar-JO": "約旦",
        "es-VE": "委內瑞拉",
        "so-SO": "索馬利亞",
        "en-TZ": "坦尚尼亞(英語)",
        "su-ID": "印尼(巽他語)",
        "es-MX": "墨西哥",
        "it-IT": "義大利",
        "ur-IN": "印度(烏爾都語)",
        "bn-BD": "孟加拉",
        "id-ID": "印尼",
        "es-NI": "尼加拉瓜",
        "th-TH": "泰國"
    };
class M9 {
    constructor() {
        De(this, "_toLanguage");
        De(this, "_voice");
        De(this, "_LanguageMap");
        De(this, "_voiceMap");
        De(this, "_defaultLocaleMap", {
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
        });
        this._LanguageMap = this.initLanguageMap(), this._toLanguage = this.initDefaultTargetLanguage(), this._voiceMap = this.initDefaultVoiceMap(), this._voice = Uu[this.initDefaultSelectedVoice()].code
    }
    get toLanguage() {
        return this._toLanguage
    }
    get voiceMap() {
        return this._voiceMap
    }
    get voice() {
        return this._voice
    }
    getDefaultVoiceValue() {
        return this._voice.startsWith(this._toLanguage) ? this._voice : this._toLanguage + "-" + this._voice + "Neural"
    }
    get languageMap() {
        return this._LanguageMap
    }
    resolveNavigatorLocale() {
        var t;
        const a = globalThis.navigator;
        if (!a) return;
        const i = ((t = a.languages) == null ? void 0 : t.find(Boolean)) || a.language;
        if (i) return i.replace(/_/g, "-")
    }
    resolveExtensionUiLocale() {
        var i, t, l, s;
        const a = globalThis.browser;
        try {
            const c = ((t = (i = a == null ? void 0 : a.i18n) == null ? void 0 : i.getUILanguage) == null ? void 0 : t.call(i)) || ((s = (l = a == null ? void 0 : a.i18n) == null ? void 0 : l.getMessage) == null ? void 0 : s.call(l, "@@ui_locale"));
            return c ? c.replace(/_/g, "-") : void 0
        } catch {
            return
        }
    }
    resolveUiLocale() {
        return this.resolveExtensionUiLocale() || this.resolveNavigatorLocale() || "en-US"
    }
    initLanguageMap() {
        const a = this.resolveUiLocale().toLowerCase();
        return a.startsWith("zh-tw") || a.startsWith("zh-hant") ? C9 : a.startsWith("zh") ? FB : a.startsWith("ja") ? _B : a.startsWith("ko") ? RB : a.startsWith("vi") ? LB : a.startsWith("de") ? PB : a.startsWith("es") ? kB : a.startsWith("fr") ? zB : a.startsWith("hi") ? KB : a.startsWith("it") ? HB : a.startsWith("ru") ? UB : a.startsWith("pt-br") ? GB : a.startsWith("pt") ? OB : a.startsWith("uk") ? VB : a.startsWith("tr") ? ZB : a.startsWith("th") ? YB : a.startsWith("bg") ? XB : a.startsWith("cs") ? WB : a.startsWith("da") ? JB : a.startsWith("el") ? $B : a.startsWith("fil") ? jB : a.startsWith("gu") ? qB : a.startsWith("hr") ? QB : a.startsWith("hu") ? e9 : a.startsWith("id") ? n9 : a.startsWith("kn") ? a9 : a.startsWith("lt") ? i9 : a.startsWith("lv") ? l9 : a.startsWith("mr") ? u9 : a.startsWith("ms") ? t9 : a.startsWith("ml") ? r9 : a.startsWith("nl") ? s9 : a.startsWith("no") ? c9 : a.startsWith("nb") ? o9 : a.startsWith("sr") ? f9 : a.startsWith("pl") ? g9 : a.startsWith("ro") ? d9 : a.startsWith("sl") ? m9 : a.startsWith("sk") ? h9 : a.startsWith("sv") ? E9 : a.startsWith("sw") ? p9 : a.startsWith("te") ? A9 : a.startsWith("ta") ? N9 : y9
    }
    initDefaultTargetLanguage() {
        const a = this.resolveNavigatorLocale() || this.resolveUiLocale(),
            i = a.split("-")[0];
        if (i.toLowerCase() === "es") {
            const l = this._defaultLocaleMap.es;
            if (l && this._LanguageMap[l]) return l
        }
        if (this._LanguageMap[a]) return a;
        if (!a.includes("-")) {
            const l = this._defaultLocaleMap[a];
            if (l && this._LanguageMap[l]) return l
        }
        if (i === "no") {
            const l = this._defaultLocaleMap[i];
            if (l && this._LanguageMap[l]) return l
        }
        for (let l in this._LanguageMap)
            if (l.startsWith(i)) return l;
        return "en-US"
    }
    initDefaultSelectedVoice() {
        var i, t;
        const a = this._voiceMap[this._toLanguage];
        return ((i = a == null ? void 0 : a["1"]) == null ? void 0 : i[0]) ?? ((t = a == null ? void 0 : a["0"]) == null ? void 0 : t[0]) ?? ""
    }
    initDefaultVoiceMap() {
        return Lo
    }
}
let ho;
function zu() {
    return ho || (ho = new M9), ho
}
const Q9 = {
        get toLanguage() {
            return zu().toLanguage
        },
        get voiceMap() {
            return zu().voiceMap
        },
        get voice() {
            return zu().voice
        },
        get languageMap() {
            return zu().languageMap
        },
        getDefaultVoiceValue() {
            return zu().getDefaultVoiceValue()
        }
    },
    ev = (e, a) => {
        const i = e.__vccOpts || e;
        for (const [t, l] of a) i[t] = l;
        return i
    };
export {
    O3 as $, cb as A, P9 as B, Fi as C, _3 as D, o3 as E, Go as F, L9 as G, sn as H, v9 as I, z9 as J, K9 as K, F9 as L, Oo as M, H9 as N, ev as O, O9 as P, Jo as Q, ws as R, xo as S, bo as T, xa as U, go as V, D9 as W, U9 as X, kM as Y, pB as Z, dr as _, G9 as a, k9 as a0, mE as a1, hE as a2, NB as a3, yB as a4, V9 as a5, x9 as a6, b9 as a7, B9 as a8, I9 as a9, Zf as aa, Yb as ab, xm as ac, _9 as ad, Ca as ae, xb as af, MB as ag, SB as ah, wB as ai, X9 as aj, $9 as ak, J9 as al, nt as am, q9 as an, W9 as ao, xB as ap, TB as aq, j9 as ar, Bn as b, sr as c, Y9 as d, Jb as e, oE as f, qn as g, Gf as h, Z9 as i, Lo as j, rB as k, Q9 as l, EE as m, fE as n, vB as o, T9 as p, WM as q, w9 as r, yI as s, J3 as t, Cm as u, Uu as v, q3 as w, R9 as x, Io as y, qm as z
};