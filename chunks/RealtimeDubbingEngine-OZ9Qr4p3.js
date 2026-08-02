var jt = Object.defineProperty;
var Ke = u => {
    throw TypeError(u)
};
var zt = (u, t, e) => t in u ? jt(u, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : u[t] = e;
var b = (u, t, e) => zt(u, typeof t != "symbol" ? t + "" : t, e),
    Oe = (u, t, e) => t.has(u) || Ke("Cannot " + e);
var S = (u, t, e) => (Oe(u, t, "read from private field"), e ? e.call(u) : t.get(u)),
    I = (u, t, e) => t.has(u) ? Ke("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(u) : t.set(u, e),
    P = (u, t, e, i) => (Oe(u, t, "write to private field"), i ? i.call(u, e) : t.set(u, e), e),
    C = (u, t, e) => (Oe(u, t, "access private method"), e);
var le = (u, t, e, i) => ({
    set _(n) {
        P(u, t, n, e)
    },
    get _() {
        return S(u, t, i)
    }
});
import {
    C as de,
    c as K,
    g as Xt,
    v as _e,
    a as mt,
    b as Qt,
    d as Yt,
    S as gt,
    n as Je,
    i as ue,
    e as Y,
    E as H,
    f as Z,
    h as Zt,
    r as Le,
    j as qt,
    k as Kt,
    l as Jt,
    m as er,
    o as tr,
    w as rr,
    p as Qe,
    q as Ye,
    s as ir,
    t as nr,
    u as Ze,
    x as _t,
    B as ar,
    y as or,
    z as sr,
    A as lr,
    T as ur,
    D as et,
    F as cr,
    G as dr,
    L as Be
} from "./local-player-C_4uyEHf.js";
import {
    C as A,
    c as ce,
    d as we,
    A as F,
    s as De,
    ag as tt,
    ah as fr,
    ai as hr,
    m as pr,
    _ as X,
    aj as bt,
    g as mr,
    ak as gr,
    al as _r
} from "./_plugin-vue_export-helper-s9b7xfAc.js";
import {
    B as j,
    b as yt
} from "./TranslateEngineModelMigration-8m3_IKzn.js";
import {
    p as br
} from "./PronunciationVoiceCapabilities-BCl-gm3V.js";
import {
    d as Fe,
    b as rt,
    a as yr
} from "./SubtitleOverlayStyle-DOfNoHcs.js";
class vr {
    constructor(t) {
        this.fn = t
    }
    next(t) {
        return $e(this.fn).next(t)
    }
}
const $e = (u, t, e = 0) => ({
    duration: e,
    next(i) {
        const n = u(i, t);
        return typeof n == "number" ? $e(u, t, n) : $e(u, n.state, n.delay)
    }
});
class vt {
    constructor(t) {
        this.threshold = t, this.state = 0
    }
    success() {
        this.state = 0
    }
    failure() {
        return ++this.state >= this.threshold
    }
}
class Sr {
    get state() {
        return {
            windows: this.windows,
            currentWindow: this.currentWindow,
            currentFailures: this.currentFailures,
            currentSuccesses: this.currentSuccesses
        }
    }
    set state(t) {
        Object.assign(this, t)
    }
    constructor({
        threshold: t,
        duration: e,
        minimumRps: i
    }) {
        if (this.windows = [], this.currentWindow = 0, this.currentFailures = 0, this.currentSuccesses = 0, t <= 0 || t >= 1) throw new RangeError(`SamplingBreaker threshold should be between (0, 1), got ${t}`);
        this.threshold = t;
        const n = Math.max(5, Math.ceil(e / 1e3));
        for (let o = 0; o < n; o++) this.windows.push({
            startedAt: 0,
            failures: 0,
            successes: 0
        });
        this.windowSize = Math.round(e / n), this.duration = this.windowSize * n, i ? this.minimumRpms = i / 1e3 : this.minimumRpms = 5 / (t * 1e3)
    }
    success(t) {
        t === de.HalfOpen && this.resetWindows(), this.push(!0)
    }
    failure(t) {
        if (this.push(!1), t !== de.Closed) return !0;
        const e = this.currentSuccesses + this.currentFailures;
        return e < this.duration * this.minimumRpms ? !1 : this.currentFailures > this.threshold * e
    }
    resetWindows() {
        this.currentFailures = 0, this.currentSuccesses = 0;
        for (const t of this.windows) t.failures = 0, t.successes = 0, t.startedAt = 0
    }
    rotateWindow(t) {
        const e = (this.currentWindow + 1) % this.windows.length;
        this.currentFailures -= this.windows[e].failures, this.currentSuccesses -= this.windows[e].successes;
        const i = this.windows[e] = {
            failures: 0,
            successes: 0,
            startedAt: t
        };
        return this.currentWindow = e, i
    }
    push(t) {
        const e = Date.now();
        let i = this.windows[this.currentWindow];
        e - i.startedAt >= this.windowSize && (i = this.rotateWindow(e)), t ? (i.successes++, this.currentSuccesses++) : (i.failures++, this.currentFailures++)
    }
}
class St {
    constructor(t) {
        b(this, "lastAppliedVideoPlaybackRate");
        this.mediaDurationCalculator = t
    }
    isPlaybackSpeedChangedByUser(t) {
        if (this.isRecentlyAppliedVideoPlaybackRate(t)) return !1;
        const e = t.playbackRate.toString();
        return t.playbackRate === 1 || e.length <= 4
    }
    setVideoPlaybackRate(t, e) {
        const i = this.checkVideoRate(e);
        this.lastAppliedVideoPlaybackRate = {
            rate: i,
            appliedAt: Date.now()
        }, t.playbackRate = i
    }
    isRecentlyAppliedVideoPlaybackRate(t, e = .005, i = 2500) {
        const n = this.lastAppliedVideoPlaybackRate;
        return n ? Date.now() - n.appliedAt <= i && Math.abs(t.playbackRate - n.rate) <= e : !1
    }
    clampVideo(t) {
        if (t < .75) return .751;
        const e = Math.min(t, 1.251);
        return e === t && e.toString().length <= 4 ? e + .001 : e
    }
    checkVideoRate(t) {
        return Number.isFinite(t) && t > 0 ? t : 1
    }
    clampAudio(t) {
        return t < .9 ? .9 : Math.min(t, 2.5)
    }
}
class wt extends St {
    constructor(t) {
        super(t), this.mediaDurationCalculator = t
    }
    adjusterPlaybackRate(t, e, i, n) {
        const o = t.entries().next().value,
            l = o[0],
            c = o[1];
        let [h, d] = this.mediaDurationCalculator.getMediaPlaybackDuration(l, c, e, n);
        if (h < d) {
            this.setVideoPlaybackRate(e, i);
            let s = this.clampAudio(d / Math.max(h, .1)) * i;
            c == null || c.rate(s)
        } else this.setVideoPlaybackRate(e, i), c == null || c.rate(i)
    }
}
class At extends St {
    constructor(t) {
        super(t), this.mediaDurationCalculator = t
    }
    adjusterPlaybackRate(t, e, i, n) {
        var s;
        const o = n,
            l = [],
            c = new Map;
        for (const [f, g] of t.entries()) {
            const p = f.end - o;
            if (p <= 0) continue;
            if (g.state() !== "loaded") {
                console.warn("sub audio state == " + g.state());
                continue
            }
            const m = f.dur / g.duration(),
                y = p / m;
            c.set(f, {
                videoDur: p,
                audioDur: y
            }), p < y ? l.push({
                sub: f,
                audio: g
            }) : g.rate(i)
        }
        if (l.length === 0) {
            this.setVideoPlaybackRate(e, i);
            return
        }
        this.setVideoPlaybackRate(e, i);
        for (const f of l) {
            const {
                videoDur: g,
                audioDur: p
            } = c.get(f.sub), m = p / Math.max(g, .1);
            (s = f.audio) == null || s.rate(this.clampAudio(m) * i)
        }
    }
}
class wr extends wt {
    clampVideo(t) {
        return t < .76 ? .76 : Math.min(t, 1.25)
    }
    checkVideoRate(t) {
        const e = Math.min(Math.max(t, .76), 1.99);
        return Math.round(e * 100) / 100
    }
    isPlaybackSpeedChangedByUser(t) {
        return this.isRecentlyAppliedVideoPlaybackRate(t) ? !1 : super.isPlaybackSpeedChangedByUser(t)
    }
}
class Ar extends At {
    clampVideo(t) {
        return t < .76 ? .76 : Math.min(t, 1.25)
    }
    checkVideoRate(t) {
        const e = Math.min(Math.max(t, .76), 1.99);
        return Math.round(e * 100) / 100
    }
    isPlaybackSpeedChangedByUser(t) {
        return this.isRecentlyAppliedVideoPlaybackRate(t) ? !1 : super.isPlaybackSpeedChangedByUser(t)
    }
}
function Tr(u, t, e, i) {
    var l;
    const n = ((l = i == null ? void 0 : i.playbackRateAdjustment) == null ? void 0 : l.videoRateMode) === "twoDecimalVideoRate",
        o = u > 1;
    return n ? o ? new Ar(e) : new wr(t) : o ? new At(e) : new wt(t)
}
class kr {
    getMediaPlaybackDuration(t, e, i, n) {
        let o = t.end - n;
        o < .1 && (o = .1);
        let l = e.duration();
        return [o, l]
    }
}
class Er {
    getMediaPlaybackDuration(t, e, i, n) {
        const o = t.end - n,
            l = t.dur / e.duration(),
            c = o / l;
        return [o, c]
    }
}
const J = class J {
    constructor(t) {
        this.media = t
    }
    static shouldEnable(t) {
        var e;
        return j.isIos() ? ((e = t.capabilities) == null ? void 0 : e.iosMuteController) === "xLike" : !1
    }
    findMuteButton() {
        return document.querySelector(J.MUTE_BUTTON_SELECTOR)
    }
    isMuted() {
        const t = this.findMuteButton();
        return t ? t.querySelector(J.MUTED_ICON_SELECTOR) !== null : (console.warn("[IosXMuteButtonController] Mute button not found for state check"), !1)
    }
    mute() {
        return this.isMuted() ? (console.log("[IosXMuteButtonController] Already muted, skip"), !0) : this.clickMuteButton("mute")
    }
    unmute() {
        return this.isMuted() ? this.clickMuteButton("unmute") : (console.log("[IosXMuteButtonController] Already unmuted, skip"), !0)
    }
    clickMuteButton(t) {
        const e = this.findMuteButton();
        return e ? (e.click(), console.log(`[IosXMuteButtonController] Mute button clicked for ${t}`), !0) : (console.warn("[IosXMuteButtonController] Mute button not found"), !1)
    }
};
b(J, "MUTE_BUTTON_SELECTOR", 'button[data-testid^="immersive-tweet-mute-button-"]'), b(J, "MUTED_ICON_SELECTOR", 'svg[data-testid^="immersive-tweet-unmute-icon-"]');
let ae = J;
const Pr = 1e-5;
function Tt(u) {
    var t;
    return ((t = u == null ? void 0 : u.unmutedVolumeWorkaround) == null ? void 0 : t.minVolume) || Pr
}
function kt(u, t) {
    u.muted = !1, u.volume = Tt(t)
}
function Ir(u, t, e) {
    u.muted = !1, u.volume = t > 0 ? t : Tt(e)
}
class Cr {
    constructor(t, e) {
        b(this, "iosXMuteButtonController");
        this.media = t, this.rule = e, e && ae.shouldEnable(e) && (this.iosXMuteButtonController = new ae(t)), this.updateVideoOriginVolume()
    }
    updateVideoOriginVolume() {
        this.iosXMuteButtonController ? A.iosOpenOriginVolume ? this.iosXMuteButtonController.unmute() : this.iosXMuteButtonController.mute() : j.isIos() ? this.media.muted = !A.iosOpenOriginVolume : Ir(this.media, A.originalVolume, this.rule)
    }
    terminate() {}
}
var Ve = {};
/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
var it;
function xr() {
    return it || (it = 1, function (u) {
        (function () {
            var t = function () {
                this.init()
            };
            t.prototype = {
                init: function () {
                    var r = this || e;
                    return r._counter = 1e3, r._html5AudioPool = [], r.html5PoolSize = 10, r._codecs = {}, r._howls = [], r._muted = !1, r._volume = 1, r._canPlayEvent = "canplaythrough", r._navigator = typeof window < "u" && window.navigator ? window.navigator : null, r.masterGain = null, r.noAudio = !1, r.usingWebAudio = !0, r.autoSuspend = !0, r.ctx = null, r.autoUnlock = !0, r._setup(), r
                },
                volume: function (r) {
                    var a = this || e;
                    if (r = parseFloat(r), a.ctx || _(), typeof r < "u" && r >= 0 && r <= 1) {
                        if (a._volume = r, a._muted) return a;
                        a.usingWebAudio && a.masterGain.gain.setValueAtTime(r, e.ctx.currentTime);
                        for (var s = 0; s < a._howls.length; s++)
                            if (!a._howls[s]._webAudio)
                                for (var f = a._howls[s]._getSoundIds(), g = 0; g < f.length; g++) {
                                    var p = a._howls[s]._soundById(f[g]);
                                    p && p._node && (p._node.volume = p._volume * r)
                                }
                        return a
                    }
                    return a._volume
                },
                mute: function (r) {
                    var a = this || e;
                    a.ctx || _(), a._muted = r, a.usingWebAudio && a.masterGain.gain.setValueAtTime(r ? 0 : a._volume, e.ctx.currentTime);
                    for (var s = 0; s < a._howls.length; s++)
                        if (!a._howls[s]._webAudio)
                            for (var f = a._howls[s]._getSoundIds(), g = 0; g < f.length; g++) {
                                var p = a._howls[s]._soundById(f[g]);
                                p && p._node && (p._node.muted = r ? !0 : p._muted)
                            }
                    return a
                },
                stop: function () {
                    for (var r = this || e, a = 0; a < r._howls.length; a++) r._howls[a].stop();
                    return r
                },
                unload: function () {
                    for (var r = this || e, a = r._howls.length - 1; a >= 0; a--) r._howls[a].unload();
                    return r.usingWebAudio && r.ctx && typeof r.ctx.close < "u" && (r.ctx.close(), r.ctx = null, _()), r
                },
                codecs: function (r) {
                    return (this || e)._codecs[r.replace(/^x-/, "")]
                },
                _setup: function () {
                    var r = this || e;
                    if (r.state = r.ctx && r.ctx.state || "suspended", r._autoSuspend(), !r.usingWebAudio)
                        if (typeof Audio < "u") try {
                            var a = new Audio;
                            typeof a.oncanplaythrough > "u" && (r._canPlayEvent = "canplay")
                        } catch {
                            r.noAudio = !0
                        } else r.noAudio = !0;
                    try {
                        var a = new Audio;
                        a.muted && (r.noAudio = !0)
                    } catch {}
                    return r.noAudio || r._setupCodecs(), r
                },
                _setupCodecs: function () {
                    var r = this || e,
                        a = null;
                    try {
                        a = typeof Audio < "u" ? new Audio : null
                    } catch {
                        return r
                    }
                    if (!a || typeof a.canPlayType != "function") return r;
                    var s = a.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                        f = r._navigator ? r._navigator.userAgent : "",
                        g = f.match(/OPR\/(\d+)/g),
                        p = g && parseInt(g[0].split("/")[1], 10) < 33,
                        m = f.indexOf("Safari") !== -1 && f.indexOf("Chrome") === -1,
                        y = f.match(/Version\/(.*?) /),
                        v = m && y && parseInt(y[1], 10) < 15;
                    return r._codecs = {
                        mp3: !!(!p && (s || a.canPlayType("audio/mp3;").replace(/^no$/, ""))),
                        mpeg: !!s,
                        opus: !!a.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                        ogg: !!a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                        oga: !!a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                        wav: !!(a.canPlayType('audio/wav; codecs="1"') || a.canPlayType("audio/wav")).replace(/^no$/, ""),
                        aac: !!a.canPlayType("audio/aac;").replace(/^no$/, ""),
                        caf: !!a.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                        m4a: !!(a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""),
                        m4b: !!(a.canPlayType("audio/x-m4b;") || a.canPlayType("audio/m4b;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""),
                        mp4: !!(a.canPlayType("audio/x-mp4;") || a.canPlayType("audio/mp4;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""),
                        weba: !!(!v && a.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                        webm: !!(!v && a.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                        dolby: !!a.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                        flac: !!(a.canPlayType("audio/x-flac;") || a.canPlayType("audio/flac;")).replace(/^no$/, "")
                    }, r
                },
                _unlockAudio: function () {
                    var r = this || e;
                    if (!(r._audioUnlocked || !r.ctx)) {
                        r._audioUnlocked = !1, r.autoUnlock = !1, !r._mobileUnloaded && r.ctx.sampleRate !== 44100 && (r._mobileUnloaded = !0, r.unload()), r._scratchBuffer = r.ctx.createBuffer(1, 1, 22050);
                        var a = function (s) {
                            for (; r._html5AudioPool.length < r.html5PoolSize;) try {
                                var f = new Audio;
                                f._unlocked = !0, r._releaseHtml5Audio(f)
                            } catch {
                                r.noAudio = !0;
                                break
                            }
                            for (var g = 0; g < r._howls.length; g++)
                                if (!r._howls[g]._webAudio)
                                    for (var p = r._howls[g]._getSoundIds(), m = 0; m < p.length; m++) {
                                        var y = r._howls[g]._soundById(p[m]);
                                        y && y._node && !y._node._unlocked && (y._node._unlocked = !0, y._node.load())
                                    }
                            r._autoResume();
                            var v = r.ctx.createBufferSource();
                            v.buffer = r._scratchBuffer, v.connect(r.ctx.destination), typeof v.start > "u" ? v.noteOn(0) : v.start(0), typeof r.ctx.resume == "function" && r.ctx.resume(), v.onended = function () {
                                v.disconnect(0), r._audioUnlocked = !0, document.removeEventListener("touchstart", a, !0), document.removeEventListener("touchend", a, !0), document.removeEventListener("click", a, !0), document.removeEventListener("keydown", a, !0);
                                for (var w = 0; w < r._howls.length; w++) r._howls[w]._emit("unlock")
                            }
                        };
                        return document.addEventListener("touchstart", a, !0), document.addEventListener("touchend", a, !0), document.addEventListener("click", a, !0), document.addEventListener("keydown", a, !0), r
                    }
                },
                _obtainHtml5Audio: function () {
                    var r = this || e;
                    if (r._html5AudioPool.length) return r._html5AudioPool.pop();
                    var a = new Audio().play();
                    return a && typeof Promise < "u" && (a instanceof Promise || typeof a.then == "function") && a.catch(function () {
                        console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
                    }), new Audio
                },
                _releaseHtml5Audio: function (r) {
                    var a = this || e;
                    return r._unlocked && a._html5AudioPool.push(r), a
                },
                _autoSuspend: function () {
                    var r = this;
                    if (!(!r.autoSuspend || !r.ctx || typeof r.ctx.suspend > "u" || !e.usingWebAudio)) {
                        for (var a = 0; a < r._howls.length; a++)
                            if (r._howls[a]._webAudio) {
                                for (var s = 0; s < r._howls[a]._sounds.length; s++)
                                    if (!r._howls[a]._sounds[s]._paused) return r
                            }
                        return r._suspendTimer && clearTimeout(r._suspendTimer), r._suspendTimer = setTimeout(function () {
                            if (r.autoSuspend) {
                                r._suspendTimer = null, r.state = "suspending";
                                var f = function () {
                                    r.state = "suspended", r._resumeAfterSuspend && (delete r._resumeAfterSuspend, r._autoResume())
                                };
                                r.ctx.suspend().then(f, f)
                            }
                        }, 3e4), r
                    }
                },
                _autoResume: function () {
                    var r = this;
                    if (!(!r.ctx || typeof r.ctx.resume > "u" || !e.usingWebAudio)) return r.state === "running" && r.ctx.state !== "interrupted" && r._suspendTimer ? (clearTimeout(r._suspendTimer), r._suspendTimer = null) : r.state === "suspended" || r.state === "running" && r.ctx.state === "interrupted" ? (r.ctx.resume().then(function () {
                        r.state = "running";
                        for (var a = 0; a < r._howls.length; a++) r._howls[a]._emit("resume")
                    }), r._suspendTimer && (clearTimeout(r._suspendTimer), r._suspendTimer = null)) : r.state === "suspending" && (r._resumeAfterSuspend = !0), r
                }
            };
            var e = new t,
                i = function (r) {
                    var a = this;
                    if (!r.src || r.src.length === 0) {
                        console.error("An array of source files must be passed with any new Howl.");
                        return
                    }
                    a.init(r)
                };
            i.prototype = {
                init: function (r) {
                    var a = this;
                    return e.ctx || _(), a._autoplay = r.autoplay || !1, a._format = typeof r.format != "string" ? r.format : [r.format], a._html5 = r.html5 || !1, a._muted = r.mute || !1, a._loop = r.loop || !1, a._pool = r.pool || 5, a._preload = typeof r.preload == "boolean" || r.preload === "metadata" ? r.preload : !0, a._rate = r.rate || 1, a._sprite = r.sprite || {}, a._src = typeof r.src != "string" ? r.src : [r.src], a._volume = r.volume !== void 0 ? r.volume : 1, a._xhr = {
                        method: r.xhr && r.xhr.method ? r.xhr.method : "GET",
                        headers: r.xhr && r.xhr.headers ? r.xhr.headers : null,
                        withCredentials: r.xhr && r.xhr.withCredentials ? r.xhr.withCredentials : !1
                    }, a._duration = 0, a._state = "unloaded", a._sounds = [], a._endTimers = {}, a._queue = [], a._playLock = !1, a._onend = r.onend ? [{
                        fn: r.onend
                    }] : [], a._onfade = r.onfade ? [{
                        fn: r.onfade
                    }] : [], a._onload = r.onload ? [{
                        fn: r.onload
                    }] : [], a._onloaderror = r.onloaderror ? [{
                        fn: r.onloaderror
                    }] : [], a._onplayerror = r.onplayerror ? [{
                        fn: r.onplayerror
                    }] : [], a._onpause = r.onpause ? [{
                        fn: r.onpause
                    }] : [], a._onplay = r.onplay ? [{
                        fn: r.onplay
                    }] : [], a._onstop = r.onstop ? [{
                        fn: r.onstop
                    }] : [], a._onmute = r.onmute ? [{
                        fn: r.onmute
                    }] : [], a._onvolume = r.onvolume ? [{
                        fn: r.onvolume
                    }] : [], a._onrate = r.onrate ? [{
                        fn: r.onrate
                    }] : [], a._onseek = r.onseek ? [{
                        fn: r.onseek
                    }] : [], a._onunlock = r.onunlock ? [{
                        fn: r.onunlock
                    }] : [], a._onresume = [], a._webAudio = e.usingWebAudio && !a._html5, typeof e.ctx < "u" && e.ctx && e.autoUnlock && e._unlockAudio(), e._howls.push(a), a._autoplay && a._queue.push({
                        event: "play",
                        action: function () {
                            a.play()
                        }
                    }), a._preload && a._preload !== "none" && a.load(), a
                },
                load: function () {
                    var r = this,
                        a = null;
                    if (e.noAudio) {
                        r._emit("loaderror", null, "No audio support.");
                        return
                    }
                    typeof r._src == "string" && (r._src = [r._src]);
                    for (var s = 0; s < r._src.length; s++) {
                        var f, g;
                        if (r._format && r._format[s]) f = r._format[s];
                        else {
                            if (g = r._src[s], typeof g != "string") {
                                r._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                                continue
                            }
                            f = /^data:audio\/([^;,]+);/i.exec(g), f || (f = /\.([^.]+)$/.exec(g.split("?", 1)[0])), f && (f = f[1].toLowerCase())
                        }
                        if (f || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), f && e.codecs(f)) {
                            a = r._src[s];
                            break
                        }
                    }
                    if (!a) {
                        r._emit("loaderror", null, "No codec support for selected audio sources.");
                        return
                    }
                    return r._src = a, r._state = "loading", window.location.protocol === "https:" && a.slice(0, 5) === "http:" && (r._html5 = !0, r._webAudio = !1), new n(r), r._webAudio && l(r), r
                },
                play: function (r, a) {
                    var s = this,
                        f = null;
                    if (typeof r == "number") f = r, r = null;
                    else {
                        if (typeof r == "string" && s._state === "loaded" && !s._sprite[r]) return null;
                        if (typeof r > "u" && (r = "__default", !s._playLock)) {
                            for (var g = 0, p = 0; p < s._sounds.length; p++) s._sounds[p]._paused && !s._sounds[p]._ended && (g++, f = s._sounds[p]._id);
                            g === 1 ? r = null : f = null
                        }
                    }
                    var m = f ? s._soundById(f) : s._inactiveSound();
                    if (!m) return null;
                    if (f && !r && (r = m._sprite || "__default"), s._state !== "loaded") {
                        m._sprite = r, m._ended = !1;
                        var y = m._id;
                        return s._queue.push({
                            event: "play",
                            action: function () {
                                s.play(y)
                            }
                        }), y
                    }
                    if (f && !m._paused) return a || s._loadQueue("play"), m._id;
                    s._webAudio && e._autoResume();
                    var v = Math.max(0, m._seek > 0 ? m._seek : s._sprite[r][0] / 1e3),
                        w = Math.max(0, (s._sprite[r][0] + s._sprite[r][1]) / 1e3 - v),
                        k = w * 1e3 / Math.abs(m._rate),
                        x = s._sprite[r][0] / 1e3,
                        B = (s._sprite[r][0] + s._sprite[r][1]) / 1e3;
                    m._sprite = r, m._ended = !1;
                    var L = function () {
                        m._paused = !1, m._seek = v, m._start = x, m._stop = B, m._loop = !!(m._loop || s._sprite[r][2])
                    };
                    if (v >= B) {
                        s._ended(m);
                        return
                    }
                    var E = m._node;
                    if (s._webAudio) {
                        var Te = function () {
                            s._playLock = !1, L(), s._refreshBuffer(m);
                            var q = m._muted || s._muted ? 0 : m._volume;
                            E.gain.setValueAtTime(q, e.ctx.currentTime), m._playStart = e.ctx.currentTime, typeof E.bufferSource.start > "u" ? m._loop ? E.bufferSource.noteGrainOn(0, v, 86400) : E.bufferSource.noteGrainOn(0, v, w) : m._loop ? E.bufferSource.start(0, v, 86400) : E.bufferSource.start(0, v, w), k !== 1 / 0 && (s._endTimers[m._id] = setTimeout(s._ended.bind(s, m), k)), a || setTimeout(function () {
                                s._emit("play", m._id), s._loadQueue()
                            }, 0)
                        };
                        e.state === "running" && e.ctx.state !== "interrupted" ? Te() : (s._playLock = !0, s.once("resume", Te), s._clearTimer(m._id))
                    } else {
                        var oe = function () {
                            E.currentTime = v, E.muted = m._muted || s._muted || e._muted || E.muted, E.volume = m._volume * e.volume(), E.playbackRate = m._rate;
                            try {
                                var q = E.play();
                                if (q && typeof Promise < "u" && (q instanceof Promise || typeof q.then == "function") ? (s._playLock = !0, L(), q.then(function () {
                                        s._playLock = !1, E._unlocked = !0, a ? s._loadQueue() : s._emit("play", m._id)
                                    }).catch(function () {
                                        s._playLock = !1, s._emit("playerror", m._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), m._ended = !0, m._paused = !0
                                    })) : a || (s._playLock = !1, L(), s._emit("play", m._id)), E.playbackRate = m._rate, E.paused) {
                                    s._emit("playerror", m._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                    return
                                }
                                r !== "__default" || m._loop ? s._endTimers[m._id] = setTimeout(s._ended.bind(s, m), k) : (s._endTimers[m._id] = function () {
                                    s._ended(m), E.removeEventListener("ended", s._endTimers[m._id], !1)
                                }, E.addEventListener("ended", s._endTimers[m._id], !1))
                            } catch (Wt) {
                                s._emit("playerror", m._id, Wt)
                            }
                        };
                        E.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" && (E.src = s._src, E.load());
                        var se = window && window.ejecta || !E.readyState && e._navigator.isCocoonJS;
                        if (E.readyState >= 3 || se) oe();
                        else {
                            s._playLock = !0, s._state = "loading";
                            var qe = function () {
                                s._state = "loaded", oe(), E.removeEventListener(e._canPlayEvent, qe, !1)
                            };
                            E.addEventListener(e._canPlayEvent, qe, !1), s._clearTimer(m._id)
                        }
                    }
                    return m._id
                },
                pause: function (r) {
                    var a = this;
                    if (a._state !== "loaded" || a._playLock) return a._queue.push({
                        event: "pause",
                        action: function () {
                            a.pause(r)
                        }
                    }), a;
                    for (var s = a._getSoundIds(r), f = 0; f < s.length; f++) {
                        a._clearTimer(s[f]);
                        var g = a._soundById(s[f]);
                        if (g && !g._paused && (g._seek = a.seek(s[f]), g._rateSeek = 0, g._paused = !0, a._stopFade(s[f]), g._node))
                            if (a._webAudio) {
                                if (!g._node.bufferSource) continue;
                                typeof g._node.bufferSource.stop > "u" ? g._node.bufferSource.noteOff(0) : g._node.bufferSource.stop(0), a._cleanBuffer(g._node)
                            } else(!isNaN(g._node.duration) || g._node.duration === 1 / 0) && g._node.pause();
                        arguments[1] || a._emit("pause", g ? g._id : null)
                    }
                    return a
                },
                stop: function (r, a) {
                    var s = this;
                    if (s._state !== "loaded" || s._playLock) return s._queue.push({
                        event: "stop",
                        action: function () {
                            s.stop(r)
                        }
                    }), s;
                    for (var f = s._getSoundIds(r), g = 0; g < f.length; g++) {
                        s._clearTimer(f[g]);
                        var p = s._soundById(f[g]);
                        p && (p._seek = p._start || 0, p._rateSeek = 0, p._paused = !0, p._ended = !0, s._stopFade(f[g]), p._node && (s._webAudio ? p._node.bufferSource && (typeof p._node.bufferSource.stop > "u" ? p._node.bufferSource.noteOff(0) : p._node.bufferSource.stop(0), s._cleanBuffer(p._node)) : (!isNaN(p._node.duration) || p._node.duration === 1 / 0) && (p._node.currentTime = p._start || 0, p._node.pause(), p._node.duration === 1 / 0 && s._clearSound(p._node))), a || s._emit("stop", p._id))
                    }
                    return s
                },
                mute: function (r, a) {
                    var s = this;
                    if (s._state !== "loaded" || s._playLock) return s._queue.push({
                        event: "mute",
                        action: function () {
                            s.mute(r, a)
                        }
                    }), s;
                    if (typeof a > "u")
                        if (typeof r == "boolean") s._muted = r;
                        else return s._muted;
                    for (var f = s._getSoundIds(a), g = 0; g < f.length; g++) {
                        var p = s._soundById(f[g]);
                        p && (p._muted = r, p._interval && s._stopFade(p._id), s._webAudio && p._node ? p._node.gain.setValueAtTime(r ? 0 : p._volume, e.ctx.currentTime) : p._node && (p._node.muted = e._muted ? !0 : r), s._emit("mute", p._id))
                    }
                    return s
                },
                volume: function () {
                    var r = this,
                        a = arguments,
                        s, f;
                    if (a.length === 0) return r._volume;
                    if (a.length === 1 || a.length === 2 && typeof a[1] > "u") {
                        var g = r._getSoundIds(),
                            p = g.indexOf(a[0]);
                        p >= 0 ? f = parseInt(a[0], 10) : s = parseFloat(a[0])
                    } else a.length >= 2 && (s = parseFloat(a[0]), f = parseInt(a[1], 10));
                    var m;
                    if (typeof s < "u" && s >= 0 && s <= 1) {
                        if (r._state !== "loaded" || r._playLock) return r._queue.push({
                            event: "volume",
                            action: function () {
                                r.volume.apply(r, a)
                            }
                        }), r;
                        typeof f > "u" && (r._volume = s), f = r._getSoundIds(f);
                        for (var y = 0; y < f.length; y++) m = r._soundById(f[y]), m && (m._volume = s, a[2] || r._stopFade(f[y]), r._webAudio && m._node && !m._muted ? m._node.gain.setValueAtTime(s, e.ctx.currentTime) : m._node && !m._muted && (m._node.volume = s * e.volume()), r._emit("volume", m._id))
                    } else return m = f ? r._soundById(f) : r._sounds[0], m ? m._volume : 0;
                    return r
                },
                fade: function (r, a, s, f) {
                    var g = this;
                    if (g._state !== "loaded" || g._playLock) return g._queue.push({
                        event: "fade",
                        action: function () {
                            g.fade(r, a, s, f)
                        }
                    }), g;
                    r = Math.min(Math.max(0, parseFloat(r)), 1), a = Math.min(Math.max(0, parseFloat(a)), 1), s = parseFloat(s), g.volume(r, f);
                    for (var p = g._getSoundIds(f), m = 0; m < p.length; m++) {
                        var y = g._soundById(p[m]);
                        if (y) {
                            if (f || g._stopFade(p[m]), g._webAudio && !y._muted) {
                                var v = e.ctx.currentTime,
                                    w = v + s / 1e3;
                                y._volume = r, y._node.gain.setValueAtTime(r, v), y._node.gain.linearRampToValueAtTime(a, w)
                            }
                            g._startFadeInterval(y, r, a, s, p[m], typeof f > "u")
                        }
                    }
                    return g
                },
                _startFadeInterval: function (r, a, s, f, g, p) {
                    var m = this,
                        y = a,
                        v = s - a,
                        w = Math.abs(v / .01),
                        k = Math.max(4, w > 0 ? f / w : f),
                        x = Date.now();
                    r._fadeTo = s, r._interval = setInterval(function () {
                        var B = (Date.now() - x) / f;
                        x = Date.now(), y += v * B, y = Math.round(y * 100) / 100, v < 0 ? y = Math.max(s, y) : y = Math.min(s, y), m._webAudio ? r._volume = y : m.volume(y, r._id, !0), p && (m._volume = y), (s < a && y <= s || s > a && y >= s) && (clearInterval(r._interval), r._interval = null, r._fadeTo = null, m.volume(s, r._id), m._emit("fade", r._id))
                    }, k)
                },
                _stopFade: function (r) {
                    var a = this,
                        s = a._soundById(r);
                    return s && s._interval && (a._webAudio && s._node.gain.cancelScheduledValues(e.ctx.currentTime), clearInterval(s._interval), s._interval = null, a.volume(s._fadeTo, r), s._fadeTo = null, a._emit("fade", r)), a
                },
                loop: function () {
                    var r = this,
                        a = arguments,
                        s, f, g;
                    if (a.length === 0) return r._loop;
                    if (a.length === 1)
                        if (typeof a[0] == "boolean") s = a[0], r._loop = s;
                        else return g = r._soundById(parseInt(a[0], 10)), g ? g._loop : !1;
                    else a.length === 2 && (s = a[0], f = parseInt(a[1], 10));
                    for (var p = r._getSoundIds(f), m = 0; m < p.length; m++) g = r._soundById(p[m]), g && (g._loop = s, r._webAudio && g._node && g._node.bufferSource && (g._node.bufferSource.loop = s, s && (g._node.bufferSource.loopStart = g._start || 0, g._node.bufferSource.loopEnd = g._stop, r.playing(p[m]) && (r.pause(p[m], !0), r.play(p[m], !0)))));
                    return r
                },
                rate: function () {
                    var r = this,
                        a = arguments,
                        s, f;
                    if (a.length === 0) f = r._sounds[0]._id;
                    else if (a.length === 1) {
                        var g = r._getSoundIds(),
                            p = g.indexOf(a[0]);
                        p >= 0 ? f = parseInt(a[0], 10) : s = parseFloat(a[0])
                    } else a.length === 2 && (s = parseFloat(a[0]), f = parseInt(a[1], 10));
                    var m;
                    if (typeof s == "number") {
                        if (r._state !== "loaded" || r._playLock) return r._queue.push({
                            event: "rate",
                            action: function () {
                                r.rate.apply(r, a)
                            }
                        }), r;
                        typeof f > "u" && (r._rate = s), f = r._getSoundIds(f);
                        for (var y = 0; y < f.length; y++)
                            if (m = r._soundById(f[y]), m) {
                                r.playing(f[y]) && (m._rateSeek = r.seek(f[y]), m._playStart = r._webAudio ? e.ctx.currentTime : m._playStart), m._rate = s, r._webAudio && m._node && m._node.bufferSource ? m._node.bufferSource.playbackRate.setValueAtTime(s, e.ctx.currentTime) : m._node && (m._node.playbackRate = s);
                                var v = r.seek(f[y]),
                                    w = (r._sprite[m._sprite][0] + r._sprite[m._sprite][1]) / 1e3 - v,
                                    k = w * 1e3 / Math.abs(m._rate);
                                (r._endTimers[f[y]] || !m._paused) && (r._clearTimer(f[y]), r._endTimers[f[y]] = setTimeout(r._ended.bind(r, m), k)), r._emit("rate", m._id)
                            }
                    } else return m = r._soundById(f), m ? m._rate : r._rate;
                    return r
                },
                seek: function () {
                    var r = this,
                        a = arguments,
                        s, f;
                    if (a.length === 0) r._sounds.length && (f = r._sounds[0]._id);
                    else if (a.length === 1) {
                        var g = r._getSoundIds(),
                            p = g.indexOf(a[0]);
                        p >= 0 ? f = parseInt(a[0], 10) : r._sounds.length && (f = r._sounds[0]._id, s = parseFloat(a[0]))
                    } else a.length === 2 && (s = parseFloat(a[0]), f = parseInt(a[1], 10));
                    if (typeof f > "u") return 0;
                    if (typeof s == "number" && (r._state !== "loaded" || r._playLock)) return r._queue.push({
                        event: "seek",
                        action: function () {
                            r.seek.apply(r, a)
                        }
                    }), r;
                    var m = r._soundById(f);
                    if (m)
                        if (typeof s == "number" && s >= 0) {
                            var y = r.playing(f);
                            y && r.pause(f, !0), m._seek = s, m._ended = !1, r._clearTimer(f), !r._webAudio && m._node && !isNaN(m._node.duration) && (m._node.currentTime = s);
                            var v = function () {
                                y && r.play(f, !0), r._emit("seek", f)
                            };
                            if (y && !r._webAudio) {
                                var w = function () {
                                    r._playLock ? setTimeout(w, 0) : v()
                                };
                                setTimeout(w, 0)
                            } else v()
                        } else if (r._webAudio) {
                        var k = r.playing(f) ? e.ctx.currentTime - m._playStart : 0,
                            x = m._rateSeek ? m._rateSeek - m._seek : 0;
                        return m._seek + (x + k * Math.abs(m._rate))
                    } else return m._node.currentTime;
                    return r
                },
                playing: function (r) {
                    var a = this;
                    if (typeof r == "number") {
                        var s = a._soundById(r);
                        return s ? !s._paused : !1
                    }
                    for (var f = 0; f < a._sounds.length; f++)
                        if (!a._sounds[f]._paused) return !0;
                    return !1
                },
                duration: function (r) {
                    var a = this,
                        s = a._duration,
                        f = a._soundById(r);
                    return f && (s = a._sprite[f._sprite][1] / 1e3), s
                },
                state: function () {
                    return this._state
                },
                unload: function () {
                    for (var r = this, a = r._sounds, s = 0; s < a.length; s++) a[s]._paused || r.stop(a[s]._id), r._webAudio || (r._clearSound(a[s]._node), a[s]._node.removeEventListener("error", a[s]._errorFn, !1), a[s]._node.removeEventListener(e._canPlayEvent, a[s]._loadFn, !1), a[s]._node.removeEventListener("ended", a[s]._endFn, !1), e._releaseHtml5Audio(a[s]._node)), delete a[s]._node, r._clearTimer(a[s]._id);
                    var f = e._howls.indexOf(r);
                    f >= 0 && e._howls.splice(f, 1);
                    var g = !0;
                    for (s = 0; s < e._howls.length; s++)
                        if (e._howls[s]._src === r._src || r._src.indexOf(e._howls[s]._src) >= 0) {
                            g = !1;
                            break
                        }
                    return o && g && delete o[r._src], e.noAudio = !1, r._state = "unloaded", r._sounds = [], r = null, null
                },
                on: function (r, a, s, f) {
                    var g = this,
                        p = g["_on" + r];
                    return typeof a == "function" && p.push(f ? {
                        id: s,
                        fn: a,
                        once: f
                    } : {
                        id: s,
                        fn: a
                    }), g
                },
                off: function (r, a, s) {
                    var f = this,
                        g = f["_on" + r],
                        p = 0;
                    if (typeof a == "number" && (s = a, a = null), a || s)
                        for (p = 0; p < g.length; p++) {
                            var m = s === g[p].id;
                            if (a === g[p].fn && m || !a && m) {
                                g.splice(p, 1);
                                break
                            }
                        } else if (r) f["_on" + r] = [];
                        else {
                            var y = Object.keys(f);
                            for (p = 0; p < y.length; p++) y[p].indexOf("_on") === 0 && Array.isArray(f[y[p]]) && (f[y[p]] = [])
                        }
                    return f
                },
                once: function (r, a, s) {
                    var f = this;
                    return f.on(r, a, s, 1), f
                },
                _emit: function (r, a, s) {
                    for (var f = this, g = f["_on" + r], p = g.length - 1; p >= 0; p--)(!g[p].id || g[p].id === a || r === "load") && (setTimeout((function (m) {
                        m.call(this, a, s)
                    }).bind(f, g[p].fn), 0), g[p].once && f.off(r, g[p].fn, g[p].id));
                    return f._loadQueue(r), f
                },
                _loadQueue: function (r) {
                    var a = this;
                    if (a._queue.length > 0) {
                        var s = a._queue[0];
                        s.event === r && (a._queue.shift(), a._loadQueue()), r || s.action()
                    }
                    return a
                },
                _ended: function (r) {
                    var a = this,
                        s = r._sprite;
                    if (!a._webAudio && r._node && !r._node.paused && !r._node.ended && r._node.currentTime < r._stop) return setTimeout(a._ended.bind(a, r), 100), a;
                    var f = !!(r._loop || a._sprite[s][2]);
                    if (a._emit("end", r._id), !a._webAudio && f && a.stop(r._id, !0).play(r._id), a._webAudio && f) {
                        a._emit("play", r._id), r._seek = r._start || 0, r._rateSeek = 0, r._playStart = e.ctx.currentTime;
                        var g = (r._stop - r._start) * 1e3 / Math.abs(r._rate);
                        a._endTimers[r._id] = setTimeout(a._ended.bind(a, r), g)
                    }
                    return a._webAudio && !f && (r._paused = !0, r._ended = !0, r._seek = r._start || 0, r._rateSeek = 0, a._clearTimer(r._id), a._cleanBuffer(r._node), e._autoSuspend()), !a._webAudio && !f && a.stop(r._id, !0), a
                },
                _clearTimer: function (r) {
                    var a = this;
                    if (a._endTimers[r]) {
                        if (typeof a._endTimers[r] != "function") clearTimeout(a._endTimers[r]);
                        else {
                            var s = a._soundById(r);
                            s && s._node && s._node.removeEventListener("ended", a._endTimers[r], !1)
                        }
                        delete a._endTimers[r]
                    }
                    return a
                },
                _soundById: function (r) {
                    for (var a = this, s = 0; s < a._sounds.length; s++)
                        if (r === a._sounds[s]._id) return a._sounds[s];
                    return null
                },
                _inactiveSound: function () {
                    var r = this;
                    r._drain();
                    for (var a = 0; a < r._sounds.length; a++)
                        if (r._sounds[a]._ended) return r._sounds[a].reset();
                    return new n(r)
                },
                _drain: function () {
                    var r = this,
                        a = r._pool,
                        s = 0,
                        f = 0;
                    if (!(r._sounds.length < a)) {
                        for (f = 0; f < r._sounds.length; f++) r._sounds[f]._ended && s++;
                        for (f = r._sounds.length - 1; f >= 0; f--) {
                            if (s <= a) return;
                            r._sounds[f]._ended && (r._webAudio && r._sounds[f]._node && r._sounds[f]._node.disconnect(0), r._sounds.splice(f, 1), s--)
                        }
                    }
                },
                _getSoundIds: function (r) {
                    var a = this;
                    if (typeof r > "u") {
                        for (var s = [], f = 0; f < a._sounds.length; f++) s.push(a._sounds[f]._id);
                        return s
                    } else return [r]
                },
                _refreshBuffer: function (r) {
                    var a = this;
                    return r._node.bufferSource = e.ctx.createBufferSource(), r._node.bufferSource.buffer = o[a._src], r._panner ? r._node.bufferSource.connect(r._panner) : r._node.bufferSource.connect(r._node), r._node.bufferSource.loop = r._loop, r._loop && (r._node.bufferSource.loopStart = r._start || 0, r._node.bufferSource.loopEnd = r._stop || 0), r._node.bufferSource.playbackRate.setValueAtTime(r._rate, e.ctx.currentTime), a
                },
                _cleanBuffer: function (r) {
                    var a = this,
                        s = e._navigator && e._navigator.vendor.indexOf("Apple") >= 0;
                    if (!r.bufferSource) return a;
                    if (e._scratchBuffer && r.bufferSource && (r.bufferSource.onended = null, r.bufferSource.disconnect(0), s)) try {
                        r.bufferSource.buffer = e._scratchBuffer
                    } catch {}
                    return r.bufferSource = null, a
                },
                _clearSound: function (r) {
                    var a = /MSIE |Trident\//.test(e._navigator && e._navigator.userAgent);
                    a || (r.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
                }
            };
            var n = function (r) {
                this._parent = r, this.init()
            };
            n.prototype = {
                init: function () {
                    var r = this,
                        a = r._parent;
                    return r._muted = a._muted, r._loop = a._loop, r._volume = a._volume, r._rate = a._rate, r._seek = 0, r._paused = !0, r._ended = !0, r._sprite = "__default", r._id = ++e._counter, a._sounds.push(r), r.create(), r
                },
                create: function () {
                    var r = this,
                        a = r._parent,
                        s = e._muted || r._muted || r._parent._muted ? 0 : r._volume;
                    return a._webAudio ? (r._node = typeof e.ctx.createGain > "u" ? e.ctx.createGainNode() : e.ctx.createGain(), r._node.gain.setValueAtTime(s, e.ctx.currentTime), r._node.paused = !0, r._node.connect(e.masterGain)) : e.noAudio || (r._node = e._obtainHtml5Audio(), r._errorFn = r._errorListener.bind(r), r._node.addEventListener("error", r._errorFn, !1), r._loadFn = r._loadListener.bind(r), r._node.addEventListener(e._canPlayEvent, r._loadFn, !1), r._endFn = r._endListener.bind(r), r._node.addEventListener("ended", r._endFn, !1), r._node.src = a._src, r._node.preload = a._preload === !0 ? "auto" : a._preload, r._node.volume = s * e.volume(), r._node.load()), r
                },
                reset: function () {
                    var r = this,
                        a = r._parent;
                    return r._muted = a._muted, r._loop = a._loop, r._volume = a._volume, r._rate = a._rate, r._seek = 0, r._rateSeek = 0, r._paused = !0, r._ended = !0, r._sprite = "__default", r._id = ++e._counter, r
                },
                _errorListener: function () {
                    var r = this;
                    r._parent._emit("loaderror", r._id, r._node.error ? r._node.error.code : 0), r._node.removeEventListener("error", r._errorFn, !1)
                },
                _loadListener: function () {
                    var r = this,
                        a = r._parent;
                    a._duration = Math.ceil(r._node.duration * 10) / 10, Object.keys(a._sprite).length === 0 && (a._sprite = {
                        __default: [0, a._duration * 1e3]
                    }), a._state !== "loaded" && (a._state = "loaded", a._emit("load"), a._loadQueue()), r._node.removeEventListener(e._canPlayEvent, r._loadFn, !1)
                },
                _endListener: function () {
                    var r = this,
                        a = r._parent;
                    a._duration === 1 / 0 && (a._duration = Math.ceil(r._node.duration * 10) / 10, a._sprite.__default[1] === 1 / 0 && (a._sprite.__default[1] = a._duration * 1e3), a._ended(r)), r._node.removeEventListener("ended", r._endFn, !1)
                }
            };
            var o = {},
                l = function (r) {
                    var a = r._src;
                    if (o[a]) {
                        r._duration = o[a].duration, d(r);
                        return
                    }
                    if (/^data:[^;]+;base64,/.test(a)) {
                        for (var s = atob(a.split(",")[1]), f = new Uint8Array(s.length), g = 0; g < s.length; ++g) f[g] = s.charCodeAt(g);
                        h(f.buffer, r)
                    } else {
                        var p = new XMLHttpRequest;
                        p.open(r._xhr.method, a, !0), p.withCredentials = r._xhr.withCredentials, p.responseType = "arraybuffer", r._xhr.headers && Object.keys(r._xhr.headers).forEach(function (m) {
                            p.setRequestHeader(m, r._xhr.headers[m])
                        }), p.onload = function () {
                            var m = (p.status + "")[0];
                            if (m !== "0" && m !== "2" && m !== "3") {
                                r._emit("loaderror", null, "Failed loading audio file with status: " + p.status + ".");
                                return
                            }
                            h(p.response, r)
                        }, p.onerror = function () {
                            r._webAudio && (r._html5 = !0, r._webAudio = !1, r._sounds = [], delete o[a], r.load())
                        }, c(p)
                    }
                },
                c = function (r) {
                    try {
                        r.send()
                    } catch {
                        r.onerror()
                    }
                },
                h = function (r, a) {
                    var s = function () {
                            a._emit("loaderror", null, "Decoding audio data failed.")
                        },
                        f = function (g) {
                            g && a._sounds.length > 0 ? (o[a._src] = g, d(a, g)) : s()
                        };
                    typeof Promise < "u" && e.ctx.decodeAudioData.length === 1 ? e.ctx.decodeAudioData(r).then(f).catch(s) : e.ctx.decodeAudioData(r, f, s)
                },
                d = function (r, a) {
                    a && !r._duration && (r._duration = a.duration), Object.keys(r._sprite).length === 0 && (r._sprite = {
                        __default: [0, r._duration * 1e3]
                    }), r._state !== "loaded" && (r._state = "loaded", r._emit("load"), r._loadQueue())
                },
                _ = function () {
                    if (e.usingWebAudio) {
                        try {
                            typeof AudioContext < "u" ? e.ctx = new AudioContext : typeof webkitAudioContext < "u" ? e.ctx = new webkitAudioContext : e.usingWebAudio = !1
                        } catch {
                            e.usingWebAudio = !1
                        }
                        e.ctx || (e.usingWebAudio = !1);
                        var r = /iP(hone|od|ad)/.test(e._navigator && e._navigator.platform),
                            a = e._navigator && e._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                            s = a ? parseInt(a[1], 10) : null;
                        if (r && s && s < 9) {
                            var f = /safari/.test(e._navigator && e._navigator.userAgent.toLowerCase());
                            e._navigator && !f && (e.usingWebAudio = !1)
                        }
                        e.usingWebAudio && (e.masterGain = typeof e.ctx.createGain > "u" ? e.ctx.createGainNode() : e.ctx.createGain(), e.masterGain.gain.setValueAtTime(e._muted ? 0 : e._volume, e.ctx.currentTime), e.masterGain.connect(e.ctx.destination)), e._setup()
                    }
                };
            u.Howler = e, u.Howl = i, typeof ce < "u" ? (ce.HowlerGlobal = t, ce.Howler = e, ce.Howl = i, ce.Sound = n) : typeof window < "u" && (window.HowlerGlobal = t, window.Howler = e, window.Howl = i, window.Sound = n)
        })();
        /*!
         *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
         *  
         *  howler.js v2.2.4
         *  howlerjs.com
         *
         *  (c) 2013-2020, James Simpson of GoldFire Studios
         *  goldfirestudios.com
         *
         *  MIT License
         */
        (function () {
            HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function (e) {
                var i = this;
                if (!i.ctx || !i.ctx.listener) return i;
                for (var n = i._howls.length - 1; n >= 0; n--) i._howls[n].stereo(e);
                return i
            }, HowlerGlobal.prototype.pos = function (e, i, n) {
                var o = this;
                if (!o.ctx || !o.ctx.listener) return o;
                if (i = typeof i != "number" ? o._pos[1] : i, n = typeof n != "number" ? o._pos[2] : n, typeof e == "number") o._pos = [e, i, n], typeof o.ctx.listener.positionX < "u" ? (o.ctx.listener.positionX.setTargetAtTime(o._pos[0], Howler.ctx.currentTime, .1), o.ctx.listener.positionY.setTargetAtTime(o._pos[1], Howler.ctx.currentTime, .1), o.ctx.listener.positionZ.setTargetAtTime(o._pos[2], Howler.ctx.currentTime, .1)) : o.ctx.listener.setPosition(o._pos[0], o._pos[1], o._pos[2]);
                else return o._pos;
                return o
            }, HowlerGlobal.prototype.orientation = function (e, i, n, o, l, c) {
                var h = this;
                if (!h.ctx || !h.ctx.listener) return h;
                var d = h._orientation;
                if (i = typeof i != "number" ? d[1] : i, n = typeof n != "number" ? d[2] : n, o = typeof o != "number" ? d[3] : o, l = typeof l != "number" ? d[4] : l, c = typeof c != "number" ? d[5] : c, typeof e == "number") h._orientation = [e, i, n, o, l, c], typeof h.ctx.listener.forwardX < "u" ? (h.ctx.listener.forwardX.setTargetAtTime(e, Howler.ctx.currentTime, .1), h.ctx.listener.forwardY.setTargetAtTime(i, Howler.ctx.currentTime, .1), h.ctx.listener.forwardZ.setTargetAtTime(n, Howler.ctx.currentTime, .1), h.ctx.listener.upX.setTargetAtTime(o, Howler.ctx.currentTime, .1), h.ctx.listener.upY.setTargetAtTime(l, Howler.ctx.currentTime, .1), h.ctx.listener.upZ.setTargetAtTime(c, Howler.ctx.currentTime, .1)) : h.ctx.listener.setOrientation(e, i, n, o, l, c);
                else return d;
                return h
            }, Howl.prototype.init = function (e) {
                return function (i) {
                    var n = this;
                    return n._orientation = i.orientation || [1, 0, 0], n._stereo = i.stereo || null, n._pos = i.pos || null, n._pannerAttr = {
                        coneInnerAngle: typeof i.coneInnerAngle < "u" ? i.coneInnerAngle : 360,
                        coneOuterAngle: typeof i.coneOuterAngle < "u" ? i.coneOuterAngle : 360,
                        coneOuterGain: typeof i.coneOuterGain < "u" ? i.coneOuterGain : 0,
                        distanceModel: typeof i.distanceModel < "u" ? i.distanceModel : "inverse",
                        maxDistance: typeof i.maxDistance < "u" ? i.maxDistance : 1e4,
                        panningModel: typeof i.panningModel < "u" ? i.panningModel : "HRTF",
                        refDistance: typeof i.refDistance < "u" ? i.refDistance : 1,
                        rolloffFactor: typeof i.rolloffFactor < "u" ? i.rolloffFactor : 1
                    }, n._onstereo = i.onstereo ? [{
                        fn: i.onstereo
                    }] : [], n._onpos = i.onpos ? [{
                        fn: i.onpos
                    }] : [], n._onorientation = i.onorientation ? [{
                        fn: i.onorientation
                    }] : [], e.call(this, i)
                }
            }(Howl.prototype.init), Howl.prototype.stereo = function (e, i) {
                var n = this;
                if (!n._webAudio) return n;
                if (n._state !== "loaded") return n._queue.push({
                    event: "stereo",
                    action: function () {
                        n.stereo(e, i)
                    }
                }), n;
                var o = typeof Howler.ctx.createStereoPanner > "u" ? "spatial" : "stereo";
                if (typeof i > "u")
                    if (typeof e == "number") n._stereo = e, n._pos = [e, 0, 0];
                    else return n._stereo;
                for (var l = n._getSoundIds(i), c = 0; c < l.length; c++) {
                    var h = n._soundById(l[c]);
                    if (h)
                        if (typeof e == "number") h._stereo = e, h._pos = [e, 0, 0], h._node && (h._pannerAttr.panningModel = "equalpower", (!h._panner || !h._panner.pan) && t(h, o), o === "spatial" ? typeof h._panner.positionX < "u" ? (h._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime), h._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), h._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : h._panner.setPosition(e, 0, 0) : h._panner.pan.setValueAtTime(e, Howler.ctx.currentTime)), n._emit("stereo", h._id);
                        else return h._stereo
                }
                return n
            }, Howl.prototype.pos = function (e, i, n, o) {
                var l = this;
                if (!l._webAudio) return l;
                if (l._state !== "loaded") return l._queue.push({
                    event: "pos",
                    action: function () {
                        l.pos(e, i, n, o)
                    }
                }), l;
                if (i = typeof i != "number" ? 0 : i, n = typeof n != "number" ? -.5 : n, typeof o > "u")
                    if (typeof e == "number") l._pos = [e, i, n];
                    else return l._pos;
                for (var c = l._getSoundIds(o), h = 0; h < c.length; h++) {
                    var d = l._soundById(c[h]);
                    if (d)
                        if (typeof e == "number") d._pos = [e, i, n], d._node && ((!d._panner || d._panner.pan) && t(d, "spatial"), typeof d._panner.positionX < "u" ? (d._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime), d._panner.positionY.setValueAtTime(i, Howler.ctx.currentTime), d._panner.positionZ.setValueAtTime(n, Howler.ctx.currentTime)) : d._panner.setPosition(e, i, n)), l._emit("pos", d._id);
                        else return d._pos
                }
                return l
            }, Howl.prototype.orientation = function (e, i, n, o) {
                var l = this;
                if (!l._webAudio) return l;
                if (l._state !== "loaded") return l._queue.push({
                    event: "orientation",
                    action: function () {
                        l.orientation(e, i, n, o)
                    }
                }), l;
                if (i = typeof i != "number" ? l._orientation[1] : i, n = typeof n != "number" ? l._orientation[2] : n, typeof o > "u")
                    if (typeof e == "number") l._orientation = [e, i, n];
                    else return l._orientation;
                for (var c = l._getSoundIds(o), h = 0; h < c.length; h++) {
                    var d = l._soundById(c[h]);
                    if (d)
                        if (typeof e == "number") d._orientation = [e, i, n], d._node && (d._panner || (d._pos || (d._pos = l._pos || [0, 0, -.5]), t(d, "spatial")), typeof d._panner.orientationX < "u" ? (d._panner.orientationX.setValueAtTime(e, Howler.ctx.currentTime), d._panner.orientationY.setValueAtTime(i, Howler.ctx.currentTime), d._panner.orientationZ.setValueAtTime(n, Howler.ctx.currentTime)) : d._panner.setOrientation(e, i, n)), l._emit("orientation", d._id);
                        else return d._orientation
                }
                return l
            }, Howl.prototype.pannerAttr = function () {
                var e = this,
                    i = arguments,
                    n, o, l;
                if (!e._webAudio) return e;
                if (i.length === 0) return e._pannerAttr;
                if (i.length === 1)
                    if (typeof i[0] == "object") n = i[0], typeof o > "u" && (n.pannerAttr || (n.pannerAttr = {
                        coneInnerAngle: n.coneInnerAngle,
                        coneOuterAngle: n.coneOuterAngle,
                        coneOuterGain: n.coneOuterGain,
                        distanceModel: n.distanceModel,
                        maxDistance: n.maxDistance,
                        refDistance: n.refDistance,
                        rolloffFactor: n.rolloffFactor,
                        panningModel: n.panningModel
                    }), e._pannerAttr = {
                        coneInnerAngle: typeof n.pannerAttr.coneInnerAngle < "u" ? n.pannerAttr.coneInnerAngle : e._coneInnerAngle,
                        coneOuterAngle: typeof n.pannerAttr.coneOuterAngle < "u" ? n.pannerAttr.coneOuterAngle : e._coneOuterAngle,
                        coneOuterGain: typeof n.pannerAttr.coneOuterGain < "u" ? n.pannerAttr.coneOuterGain : e._coneOuterGain,
                        distanceModel: typeof n.pannerAttr.distanceModel < "u" ? n.pannerAttr.distanceModel : e._distanceModel,
                        maxDistance: typeof n.pannerAttr.maxDistance < "u" ? n.pannerAttr.maxDistance : e._maxDistance,
                        refDistance: typeof n.pannerAttr.refDistance < "u" ? n.pannerAttr.refDistance : e._refDistance,
                        rolloffFactor: typeof n.pannerAttr.rolloffFactor < "u" ? n.pannerAttr.rolloffFactor : e._rolloffFactor,
                        panningModel: typeof n.pannerAttr.panningModel < "u" ? n.pannerAttr.panningModel : e._panningModel
                    });
                    else return l = e._soundById(parseInt(i[0], 10)), l ? l._pannerAttr : e._pannerAttr;
                else i.length === 2 && (n = i[0], o = parseInt(i[1], 10));
                for (var c = e._getSoundIds(o), h = 0; h < c.length; h++)
                    if (l = e._soundById(c[h]), l) {
                        var d = l._pannerAttr;
                        d = {
                            coneInnerAngle: typeof n.coneInnerAngle < "u" ? n.coneInnerAngle : d.coneInnerAngle,
                            coneOuterAngle: typeof n.coneOuterAngle < "u" ? n.coneOuterAngle : d.coneOuterAngle,
                            coneOuterGain: typeof n.coneOuterGain < "u" ? n.coneOuterGain : d.coneOuterGain,
                            distanceModel: typeof n.distanceModel < "u" ? n.distanceModel : d.distanceModel,
                            maxDistance: typeof n.maxDistance < "u" ? n.maxDistance : d.maxDistance,
                            refDistance: typeof n.refDistance < "u" ? n.refDistance : d.refDistance,
                            rolloffFactor: typeof n.rolloffFactor < "u" ? n.rolloffFactor : d.rolloffFactor,
                            panningModel: typeof n.panningModel < "u" ? n.panningModel : d.panningModel
                        };
                        var _ = l._panner;
                        _ || (l._pos || (l._pos = e._pos || [0, 0, -.5]), t(l, "spatial"), _ = l._panner), _.coneInnerAngle = d.coneInnerAngle, _.coneOuterAngle = d.coneOuterAngle, _.coneOuterGain = d.coneOuterGain, _.distanceModel = d.distanceModel, _.maxDistance = d.maxDistance, _.refDistance = d.refDistance, _.rolloffFactor = d.rolloffFactor, _.panningModel = d.panningModel
                    }
                return e
            }, Sound.prototype.init = function (e) {
                return function () {
                    var i = this,
                        n = i._parent;
                    i._orientation = n._orientation, i._stereo = n._stereo, i._pos = n._pos, i._pannerAttr = n._pannerAttr, e.call(this), i._stereo ? n.stereo(i._stereo) : i._pos && n.pos(i._pos[0], i._pos[1], i._pos[2], i._id)
                }
            }(Sound.prototype.init), Sound.prototype.reset = function (e) {
                return function () {
                    var i = this,
                        n = i._parent;
                    return i._orientation = n._orientation, i._stereo = n._stereo, i._pos = n._pos, i._pannerAttr = n._pannerAttr, i._stereo ? n.stereo(i._stereo) : i._pos ? n.pos(i._pos[0], i._pos[1], i._pos[2], i._id) : i._panner && (i._panner.disconnect(0), i._panner = void 0, n._refreshBuffer(i)), e.call(this)
                }
            }(Sound.prototype.reset);
            var t = function (e, i) {
                i = i || "spatial", i === "spatial" ? (e._panner = Howler.ctx.createPanner(), e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle, e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle, e._panner.coneOuterGain = e._pannerAttr.coneOuterGain, e._panner.distanceModel = e._pannerAttr.distanceModel, e._panner.maxDistance = e._pannerAttr.maxDistance, e._panner.refDistance = e._pannerAttr.refDistance, e._panner.rolloffFactor = e._pannerAttr.rolloffFactor, e._panner.panningModel = e._pannerAttr.panningModel, typeof e._panner.positionX < "u" ? (e._panner.positionX.setValueAtTime(e._pos[0], Howler.ctx.currentTime), e._panner.positionY.setValueAtTime(e._pos[1], Howler.ctx.currentTime), e._panner.positionZ.setValueAtTime(e._pos[2], Howler.ctx.currentTime)) : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]), typeof e._panner.orientationX < "u" ? (e._panner.orientationX.setValueAtTime(e._orientation[0], Howler.ctx.currentTime), e._panner.orientationY.setValueAtTime(e._orientation[1], Howler.ctx.currentTime), e._panner.orientationZ.setValueAtTime(e._orientation[2], Howler.ctx.currentTime)) : e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2])) : (e._panner = Howler.ctx.createStereoPanner(), e._panner.pan.setValueAtTime(e._stereo, Howler.ctx.currentTime)), e._panner.connect(e._node), e._paused || e._parent.pause(e._id, !0).play(e._id, !0)
            }
        })()
    }(Ve)), Ve
}
var Et = xr();
class Lr {
    constructor(t, e, i, n) {
        b(this, "audio");
        b(this, "audioId");
        b(this, "onAudioPlayHandler", this.onAudioPlay.bind(this));
        b(this, "onVideoPlayingHandler", this.onVideoPlaying.bind(this));
        b(this, "onVideoPauseHandler", this.onVideoPause.bind(this));
        b(this, "onVideoSeekedHandler", this.onVideoSeeked.bind(this));
        b(this, "onVideoWaitingHandler", this.onVideoWaiting.bind(this));
        b(this, "onVideoRateChangeHandler", this.onVideoRateChange.bind(this));
        this.media = e, this.getMediaCurrentTime = i, this.rule = n, this.audio = new Et.Howl({
            src: [t],
            html5: !0
        }), this.audio.once("play", this.onAudioPlayHandler), K(this.media).on("playing", this.onVideoPlayingHandler).on("pause", this.onVideoPauseHandler).on("seeked", this.onVideoSeekedHandler).on("waiting", this.onVideoWaitingHandler).on("ratechange", this.onVideoRateChangeHandler), this.updateVideoOriginVolume(), this.media.paused || this.audioPlay()
    }
    terminate() {
        this.audio.stop(this.audioId), this.audio.unload(), K(this.media).off("playing", this.onVideoPlayingHandler).off("pause", this.onVideoPauseHandler).off("seeked", this.onVideoSeekedHandler).off("waiting", this.onVideoWaitingHandler).off("ratechange", this.onVideoRateChangeHandler)
    }
    updateVideoOriginVolume() {
        j.isIos() ? this.media.muted = !0 : kt(this.media, this.rule)
    }
    onAudioPlay() {
        this.audioId && (this.audio.seek(this.getMediaCurrentTime(), this.audioId), this.audio.rate(this.media.playbackRate, this.audioId))
    }
    onVideoPlaying() {
        this.audioPlay()
    }
    audioPlay() {
        this.audioId ? this.audio.play(this.audioId) : this.audioId = this.audio.play()
    }
    onVideoPause() {
        this.audioId && this.audio.pause(this.audioId)
    }
    onVideoSeeked() {
        this.audioId && this.audio.seek(this.getMediaCurrentTime(), this.audioId)
    }
    onVideoWaiting() {
        this.audioId && this.audio.pause(this.audioId)
    }
    onVideoRateChange() {
        this.audioId && this.audio.rate(this.media.playbackRate, this.audioId)
    }
}
function Rr(u) {
    return {
        all: u = u || new Map,
        on: function (t, e) {
            var i = u.get(t);
            i ? i.push(e) : u.set(t, [e])
        },
        off: function (t, e) {
            var i = u.get(t);
            i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : u.set(t, []))
        },
        emit: function (t, e) {
            var i = u.get(t);
            i && i.slice().map(function (n) {
                n(e)
            }), (i = u.get("*")) && i.slice().map(function (n) {
                n(t, e)
            })
        }
    }
}
class Mr extends F {
    constructor() {
        super(...arguments);
        b(this, "baseURL", globalThis.__DUBBING_LOCAL_API_BASE__);
        b(this, "timeout", 6e4)
    }
    async generateDubbing(e, i) {
        try {
            const n = new AbortController;
            F.abortControllerMap.set(i, n);
            const o = `${this.baseURL}/api/v2/dubbing/generateDubbing`,
                l = await De.getItem("local:SESSION"), c = {
                    "Content-Type": "application/json"
                };
            l && (c.Ck = l);
            const h = setTimeout(() => n.abort(), this.timeout),
                d = await fetch(o, {
                    method: "POST",
                    headers: c,
                    body: JSON.stringify(e),
                    signal: n.signal,
                    credentials: "include"
                });
            if (clearTimeout(h), d.status >= 200 && d.status < 300) return await d.json();
            throw new Error(`generateDubbing occur error - Status: ${d.status}, StatusText: ${d.statusText}`)
        } finally {
            F.abortControllerMap.delete(i)
        }
    }
}
const [an, Dr] = we("DubbingApiService", () => new Mr);
class Or extends F {
    abortRequest(t) {
        for (let e of t) {
            const i = F.abortControllerMap.get(e);
            i && (F.abortControllerMap.delete(e), i.abort())
        }
    }
}
const [on, Pt] = we("AbortApiService", () => new Or);
class Br {
    constructor() {
        b(this, "dubbingApiService", Dr());
        b(this, "fallbackTtsApiService", Xt());
        b(this, "abortApiService", Pt());
        b(this, "fetchAbortControllers", new Map)
    }
    async process(t) {
        var l;
        const e = t.isEdgeFallback === !0 ? await this.callFallbackTts(t): await this.callGenerateDubbing(t), i = [];
        for (let c = 0; c < t.dubbingSubtitles.length; c++) {
            const h = e.subtitleDubbingResults[c];
            i.push(h.ttsUrl)
        }
        const n = await this.fetchAudioBuffers(i, t.requestId), o = [];
        for (let c = 0; c < t.dubbingSubtitles.length; c++) {
            const h = t.dubbingSubtitles[c],
                d = e.subtitleDubbingResults[c],
                _ = n[c],
                r = t.isEdgeFallback === !0 ? !!((l = h.aiTranslation) != null && l.trim()) : d.useAiTranslate;
            o.push({
                index: h.index,
                translation: d.translateResult,
                useAiTranslate: r,
                audioUrl: d.ttsUrl,
                audioBuffer: _
            })
        }
        return o
    }
    async callGenerateDubbing(t) {
        return this.dubbingApiService.generateDubbing({
            subtitles: t.dubbingSubtitles,
            config: t.config,
            videoDetails: t.videoDetails,
            v2Version: !0
        }, t.requestId)
    }
    async callFallbackTts(t) {
        const i = {
            dubbingRequest: {
                subtitles: t.dubbingSubtitles.map(n => {
                    const o = {
                        index: n.index,
                        text: n.text,
                        translation: this.pickTranslation(n),
                        start: n.start,
                        end: n.end
                    };
                    return n.audioVoiceName !== void 0 && (o.audioVoiceName = n.audioVoiceName), o
                }),
                config: t.config,
                videoDetails: t.videoDetails,
                v2Version: !0
            },
            failureContext: this.toBackendFailureContext(t.fallbackContext, t.platform)
        };
        return this.fallbackTtsApiService.fallbackTts(i, t.requestId)
    }
    pickTranslation(t) {
        var n, o;
        const e = (n = t.aiTranslation) == null ? void 0 : n.trim();
        if (e) return e;
        const i = (o = t.googleTranslation) == null ? void 0 : o.trim();
        return i || t.text
    }
    toBackendFailureContext(t, e) {
        const i = (() => {
                try {
                    return yt.runtime.getManifest().version ?? "unknown"
                } catch {
                    return "unknown"
                }
            })(),
            n = {
                chain: "FRONTEND_EDGE_AZURE",
                platform: e,
                extensionVersion: i
            };
        return t && (n.fallbackReason = t.fallbackReason, n.breakerState = t.breakerState, n.attemptCount = t.attemptCount, n.elapsedMs = t.elapsedMs, n.sourceLanguage = t.sourceLanguage, n.failureTrace = t.failureTrace, t.primaryError && (n.primaryErrorName = t.primaryError.name, n.primaryErrorMessage = t.primaryError.message, n.primaryErrorStack = t.primaryError.stack, n.primaryErrorStatus = t.primaryError.status, n.primaryErrorCode = t.primaryError.errorCode, n.primaryErrorSubtitleIndex = t.primaryError.subtitleIndex, n.rawErrorStage = t.primaryError.rawErrorStage, n.rawErrorSource = t.primaryError.rawErrorSource, n.rawErrorName = t.primaryError.rawErrorName, n.rawErrorMessage = t.primaryError.rawErrorMessage, n.rawErrorStack = t.primaryError.rawErrorStack, n.rawErrorCause = t.primaryError.rawErrorCause, n.rawErrorStatus = t.primaryError.rawErrorStatus, n.rawErrorCode = t.primaryError.rawErrorCode)), n
    }
    async abort(t) {
        t.length > 0 && await this.abortApiService.abortRequest(t);
        for (const e of t) {
            const i = this.fetchAbortControllers.get(e);
            if (i) {
                for (const [, n] of i) n.abort();
                this.fetchAbortControllers.delete(e)
            }
        }
    }
    async fetchAudioBuffers(t, e) {
        return (await Promise.allSettled(t.map(n => this.fetchMp3(n, e)))).map((n, o) => {
            if (n.status === "fulfilled") return n.value;
            const l = t[o], c = typeof l == "string" && l.startsWith("data:") ? `${l.slice(0,48)}… (${l.length} chars)` : l;
            console.error(`[BackendDubbingProvider] Error fetching audio buffer for ${c}:`, n.reason)
        })
    }
    async fetchMp3(t, e) {
        const i = _e(),
            n = new AbortController;
        let o = this.fetchAbortControllers.get(e);
        o || (o = new Map, this.fetchAbortControllers.set(e, o)), o.set(i, n);
        try {
            if (typeof t == "string" && t.startsWith("data:")) {
                const e = t.indexOf(",");
                if (e < 0) throw new Error("Invalid audio data URL");
                const i = t.slice(0, e), n = t.slice(e + 1);
                if (i.includes(";base64")) return Yr(n.replace(/\s/g, ""));
                return new TextEncoder().encode(decodeURIComponent(n)).buffer
            }
            const l = await mt(t), c = await fetch(l, {
                signal: n.signal
            });
            if (!c.ok) throw new Error(`Failed to fetch ${t}: ${c.statusText}`);
            return await c.arrayBuffer()
        } finally {
            o.delete(i), o.size === 0 && this.fetchAbortControllers.delete(e)
        }
    }
}
class Fr {
    constructor() {
        b(this, "translateApiService", Qt())
    }
    async translate(t) {
        return !t.texts || t.texts.length === 0 ? [] : (t.requestId ? await this.translateApiService.translateForFetch(t.texts, t.fromLanguage, t.toLanguage, t.videoId, t.platform, t.requestId): await this.translateApiService.translate(t.texts, t.fromLanguage, t.toLanguage, t.videoId, t.platform)).map(i => ({
            text: i.text,
            useAi: !1
        }))
    }
}
function Vr(u) {
    const t = new Error(`TranslateV2ApiService: request timed out after ${u}ms`);
    return t.name = "AbortError", t.status = 408, t.code = "TRANSLATE_ONLY_TIMEOUT", t
}
class Nr extends F {
    constructor() {
        super(...arguments);
        b(this, "baseURL", globalThis.__DUBBING_LOCAL_API_BASE__);
        b(this, "timeout", 6e4)
    }
    async translate(e, i) {
        let n = null;
        try {
            const o = new AbortController;
            F.abortControllerMap.set(i, o);
            const l = `${this.baseURL}/api/v2/ai-translate/translate`,
                c = await De.getItem("local:SESSION"), h = {
                    "Content-Type": "application/json"
                };
            c && (h.Ck = c), n = setTimeout(() => o.abort(Vr(this.timeout)), this.timeout);
            const d = await fetch(l, {
                method: "POST",
                headers: h,
                body: JSON.stringify(e),
                signal: o.signal,
                credentials: "include"
            });
            if (d.status >= 200 && d.status < 300) return await d.json();
            throw new Error(`ai-translate v2 occur error - Status: ${d.status}, StatusText: ${d.statusText}`)
        } finally {
            n !== null && clearTimeout(n), F.abortControllerMap.delete(i)
        }
    }
}
const [sn, Ur] = we("TranslateV2ApiService", () => new Nr), Hr = new Map;
function $r(u) {
    if (u) return Hr.get(u)
}
class Gr {
    constructor() {
        b(this, "translateV2ApiService", Ur())
    }
    async translate(t) {
        if (!t.texts || t.texts.length === 0) return [];
        const e = t.requestId || _e(),
            i = this.buildTranslateV2Request(t),
            n = await this.translateV2ApiService.translate(i, e), o = (n == null ? void 0 : n.subtitleTranslateResults) ?? [];
        if (o.length !== t.texts.length) throw new Error(`AiTranslationProvider: v2 response length mismatch (expect=${t.texts.length}, got=${o.length})`);
        return o.map(l => ({
            text: l.translateResult ?? "",
            useAi: !!l.useAiTranslate
        }))
    }
    buildTranslateV2Request(t) {
        const e = $r(t.videoId);
        return {
            videoId: t.videoId,
            title: t.title || "",
            model: t.model,
            toLanguage: t.toLanguage,
            ...e ? {
                domain: e
            } : {},
            translationRulesEnabled: A.translationRulesEnabled,
            skipTranslation: !1,
            subtitles: t.texts.map((i, n) => {
                var c, h, d;
                const o = (c = t.subtitles) == null ? void 0 : c[n],
                    l = {
                        index: (o == null ? void 0 : o.index) ?? n,
                        text: i,
                        googleTranslation: (o == null ? void 0 : o.googleTranslation) || "",
                        start: (o == null ? void 0 : o.start) ?? 0,
                        end: (o == null ? void 0 : o.end) ?? 0
                    };
                return (h = o == null ? void 0 : o.contextBefore) != null && h.length && (l.contextBefore = o.contextBefore), (d = o == null ? void 0 : o.contextAfter) != null && d.length && (l.contextAfter = o.contextAfter), l
            })
        }
    }
}
class fe {
    static get(t) {
        return fe.isGoogleModel(t) ? new Fr : new Gr
    }
    static isGoogleModel(t) {
        return !t || t === "google"
    }
}
const Wr = .5,
    jr = 3,
    Ne = Symbol("affectedSynthIndexes");
class zr {
    constructor() {
        b(this, "edgeAzureTtsApiService", Yt());
        b(this, "abortApiService", Pt());
        b(this, "subtitleLanguageDecisionService", new gt);
        b(this, "endpointLease", null);
        b(this, "endpointLeaseVideoId", null);
        b(this, "dragonHdFallbackVideoId", null);
        b(this, "dragonHdPrimaryFailureCounts", new Map);
        b(this, "dragonHdDirectFallbackVoices", new Map);
        b(this, "translationRequestIds", new Set)
    }
    async process(t) {
        const {
            dubbingSubtitles: e,
            config: i
        } = t;
        if (e.length === 0) return [];
        this.resetEndpointLeaseIfVideoChanged(t.videoDetails.videoId);
        try {
            const n = await this.resolveTranslations(t);
            for (let _ = 0; _ < e.length; _++) n[_].useAi && (e[_].aiTranslation = n[_].text);
            const o = Je(i.toLanguage),
                l = br(o, t.pronunciationRules),
                c = e.map((_, r) => {
                    const a = this.pickVoice(_, i.voice),
                        s = n[r].text;
                    return {
                        text: s,
                        voice: a,
                        pronunciationSpans: Fe(s, l, a),
                        targetLocale: i.toLanguage
                    }
                }),
                h = c.map(() => performance.now());
            let d;
            try {
                d = await this.synthesizeBatchWithEndpointToken(c, t.requestId, t.videoDetails.videoId), d = await this.retryDragonHdVoiceWithFallback(c, d, t.requestId, t.videoDetails.videoId, l), d = await this.retryTtsWithGoogleTranslationWhenLanguageMismatch(t, n, c, d, t.requestId, l)
            } catch (_) {
                throw this.recordPreOutcomeNetworkErrorMetrics(t, c, h, _), _
            }
            if (t.metricsRecorder)
                for (let _ = 0; _ < e.length; _++) {
                    const r = d[_],
                        a = performance.now() - h[_],
                        s = nt(c[_].text);
                    ue(r) ? t.metricsRecorder.recordItem({
                        outcome: "failure",
                        elapsedMs: a,
                        attempt: 1,
                        textBytes: s,
                        errorStatus: r.status,
                        errorCode: Y(r.status, r.error)
                    }) : t.metricsRecorder.recordItem({
                        outcome: "success",
                        elapsedMs: a,
                        attempt: 1,
                        textBytes: s
                    })
                }
            return this.assembleResultsOrThrow(e, n, d)
        } finally {
            this.translationRequestIds.delete(t.requestId)
        }
    }
    assembleResultsOrThrow(t, e, i) {
        const n = i.map((f, g) => ({
            outcome: f,
            subtitleIndex: t[g].index
        })).find(f => ue(f.outcome) && f.outcome.status === 403);
        if (n) {
            const f = n.outcome;
            throw new H(`LocalEdgeAzureDubbingProvider: 403 hard trip at subtitle index=${n.subtitleIndex}, error=${f.error}`, {
                status: 403,
                subtitleIndex: n.subtitleIndex,
                rawErrorInfo: f.rawErrorInfo
            })
        }
        const o = [],
            l = [];
        for (let f = 0; f < t.length; f++) {
            const g = t[f],
                p = i[f];
            if (ue(p)) {
                const m = Y(p.status, p.error);
                l.push({
                    subtitleIndex: g.index,
                    outcome: p
                }), o.push({
                    index: g.index,
                    translation: e[f].text,
                    useAiTranslate: e[f].useAi,
                    audioUrl: void 0,
                    audioBuffer: void 0,
                    error: {
                        status: p.status,
                        message: p.error,
                        errorCode: m
                    }
                })
            } else o.push({
                index: g.index,
                translation: e[f].text,
                useAiTranslate: e[f].useAi,
                audioUrl: void 0,
                audioBuffer: Yr(p.audioBase64)
            })
        }
        if (l.length === 0) return o;
        const c = t.length,
            h = l.find(f => Y(f.outcome.status, f.outcome.error) === "rate_limited");
        if (h) throw new Z(this.buildBatchFailureMessage(l.length, c, h), {
            status: h.outcome.status,
            errorCode: "rate_limited",
            subtitleIndex: h.subtitleIndex,
            rawErrorInfo: h.outcome.rawErrorInfo
        });
        const d = l.filter(f => {
            const g = Y(f.outcome.status, f.outcome.error);
            return g === "server_error" || g === "rate_limited" || g === "timeout" || g === "network"
        });
        if (d.length / c < Wr) return o;
        const r = d[0],
            a = Y(r.outcome.status, r.outcome.error),
            s = this.buildBatchFailureMessage(l.length, c, r);
        throw new Z(s, {
            status: r.outcome.status,
            errorCode: a,
            subtitleIndex: r.subtitleIndex,
            rawErrorInfo: r.outcome.rawErrorInfo
        })
    }
    isEndpointLeaseFresh(t) {
        return Date.now() < t.expiredAt - Zt.TOKEN_REFRESH_BEFORE_EXPIRY_MS
    }
    resetEndpointLeaseIfVideoChanged(t) {
        this.endpointLeaseVideoId && this.endpointLeaseVideoId !== t && (this.endpointLease = null, this.endpointLeaseVideoId = null), this.dragonHdFallbackVideoId !== t && (this.dragonHdFallbackVideoId = t, this.dragonHdPrimaryFailureCounts.clear(), this.dragonHdDirectFallbackVoices.clear())
    }
    async getEndpointLease(t, e) {
        if (this.endpointLease && this.isEndpointLeaseFresh(this.endpointLease)) return this.endpointLease;
        try {
            return this.endpointLease = await this.edgeAzureTtsApiService.getEndpointToken(t), this.endpointLeaseVideoId = e, this.endpointLease
        } catch (i) {
            const n = i,
                o = (n == null ? void 0 : n.message) || String(i),
                l = Y(n == null ? void 0 : n.status, o),
                c = `LocalEdgeAzureDubbingProvider: endpoint token failed, error=${o}`;
            throw l === "forbidden" ? new H(c, {
                status: n == null ? void 0 : n.status,
                rawErrorInfo: Le(i)
            }) : new Z(c, {
                status: n == null ? void 0 : n.status,
                errorCode: l,
                rawErrorInfo: Le(i)
            })
        }
    }
    async synthesizeBatchWithEndpointToken(t, e, i, n) {
        const o = n ?? t.map((l, c) => c);
        try {
            const l = await this.getEndpointLease(e, i), c = await this.edgeAzureTtsApiService.synthesizeBatch(t, e, l.ep);
            return this.retryAuthFailuresWithFreshEndpoint(t, c, e, i, o)
        } catch (l) {
            throw this.attachAffectedSynthIndexes(l, o), l
        }
    }
    async retryAuthFailuresWithFreshEndpoint(t, e, i, n, o) {
        const l = [];
        for (let r = 0; r < e.length; r++) {
            const a = e[r];
            ue(a) && a.status === 401 && l.push({
                index: r,
                item: t[r]
            })
        }
        if (l.length === 0) return e;
        this.endpointLease = null, this.endpointLeaseVideoId = null;
        const c = await this.getEndpointLease(i, n), h = await this.edgeAzureTtsApiService.synthesizeBatch(l.map(({
            item: r
        }) => r), i, c.ep);
        if (h.every(r => ue(r) && r.status === 401)) {
            const r = h[0],
                a = new H(`LocalEdgeAzureDubbingProvider: auth still 401 after fresh endpoint refresh, ${h.length}/${h.length} retry items still 401, error=${r.error}`, {
                    status: 401,
                    errorCode: "auth",
                    rawErrorInfo: r.rawErrorInfo
                });
            throw this.attachAffectedSynthIndexes(a, l.map(({
                index: s
            }) => o[s] ?? s)), a
        }
        const _ = e.slice();
        for (let r = 0; r < l.length; r++) _[l[r].index] = h[r];
        return _
    }
    recordPreOutcomeNetworkErrorMetrics(t, e, i, n) {
        if (!t.metricsRecorder) return;
        const o = this.toPreOutcomeMetricsError(n);
        if (!o) return;
        const l = this.readAffectedSynthIndexes(n),
            c = this.resolveAffectedSynthIndexes(l, e.length),
            h = performance.now();
        for (const d of c) {
            const _ = e[d];
            t.metricsRecorder.recordItem({
                outcome: "failure",
                elapsedMs: h - (i[d] ?? h),
                attempt: 1,
                textBytes: nt((_ == null ? void 0 : _.text) ?? ""),
                errorStatus: o.status,
                errorCode: o.errorCode
            })
        }
    }
    toPreOutcomeMetricsError(t) {
        if (t instanceof Z) return {
            status: t.status,
            errorCode: t.errorCode
        };
        if (!t || typeof t != "object") return null;
        const e = t;
        if (typeof e.status != "number") return null;
        const i = e.message || String(t);
        return {
            status: e.status,
            errorCode: Y(e.status, i)
        }
    }
    attachAffectedSynthIndexes(t, e) {
        if (!t || typeof t != "object") return;
        const i = t;
        if (i[Ne] === void 0) try {
            i[Ne] = e
        } catch {}
    }
    readAffectedSynthIndexes(t) {
        if (!(!t || typeof t != "object")) return t[Ne]
    }
    resolveAffectedSynthIndexes(t, e) {
        return t !== void 0 ? Array.from(new Set(t.filter(i => Number.isInteger(i) && i >= 0 && i < e))) : Array.from({
            length: e
        }, (i, n) => n)
    }
    buildBatchFailureMessage(t, e, i) {
        return `LocalEdgeAzureDubbingProvider: batch failure ${t}/${e}, representative error: subtitle index=${i.subtitleIndex}` + (i.outcome.status !== void 0 ? `, status=${i.outcome.status}` : "") + `, error=${i.outcome.error}`
    }
    async retryDragonHdVoiceWithFallback(t, e, i, n, o) {
        return qt({
            synthItems: t,
            outcomes: e,
            synthesize: (l, c) => this.synthesizeBatchWithEndpointToken(l, i, n, c),
            buildFallbackItem: (l, c) => ({ ...l,
                voice: c,
                pronunciationSpans: Fe(l.text, o, c)
            }),
            onPrimaryFailure: (l, c) => this.recordDragonHdPrimaryFailure(l, c),
            onPrimarySuccess: l => this.resetDragonHdPrimaryFailureCount(l)
        })
    }
    recordDragonHdPrimaryFailure(t, e) {
        const i = (this.dragonHdPrimaryFailureCounts.get(t) || 0) + 1;
        this.dragonHdPrimaryFailureCounts.set(t, i), i >= jr && this.dragonHdDirectFallbackVoices.set(t, e)
    }
    resetDragonHdPrimaryFailureCount(t) {
        this.dragonHdPrimaryFailureCounts.delete(t)
    }
    async retryTtsWithGoogleTranslationWhenLanguageMismatch(t, e, i, n, o, l) {
        return t.config.skipTranslation ? n : Kt({
            synthItems: i,
            outcomes: n,
            requestId: o,
            toLanguage: t.config.toLanguage,
            synthesize: (c, h) => this.synthesizeBatchWithEndpointToken(c, o, t.videoDetails.videoId, h),
            translateWithGoogle: ({
                text: c,
                fromLanguage: h
            }) => this.translateOneWithGoogle(t, c, h),
            buildRetryItem: (c, h) => ({ ...c,
                text: h,
                pronunciationSpans: Fe(h, l, c.voice)
            }),
            onRetryText: (c, h) => {
                e[c] = {
                    text: h,
                    useAi: !1
                }, t.dubbingSubtitles[c].aiTranslation = void 0, t.dubbingSubtitles[c].googleTranslation = h
            },
            detectLanguage: c => this.detectLanguage(c),
            expectedLanguageForSynthItem: c => this.expectedLanguageForSynthItem(c),
            isSameLanguage: (c, h) => this.subtitleLanguageDecisionService.isSameLanguage(c, h),
            isLikelySameChineseRegionalFamily: (c, h) => this.subtitleLanguageDecisionService.isLikelySameChineseRegionalFamily(c, h)
        })
    }
    expectedLanguageForSynthItem(t) {
        const e = Jt(t.voice);
        return er(t.voice) && Je(t.targetLocale) || e
    }
    async detectLanguage(t) {
        return this.subtitleLanguageDecisionService.detectLanguageFromSubtitleText([{
            text: t
        }])
    }
    async translateOneWithGoogle(t, e, i) {
        try {
            const n = fe.get("google"),
                [o] = await n.translate({
                    texts: [e],
                    fromLanguage: i,
                    toLanguage: t.config.toLanguage,
                    videoId: t.videoDetails.videoId,
                    platform: t.platform,
                    model: "google",
                    requestId: t.requestId
                });
            return o == null ? void 0 : o.text
        } catch (n) {
            console.warn("[LocalEdgeAzureDubbingProvider] google retry after TTS language mismatch failed", n);
            return
        }
    }
    async abort(t) {
        if (t.length !== 0) {
            try {
                await this.abortApiService.abortRequest(t)
            } catch (e) {
                console.warn("[LocalEdgeAzureDubbingProvider] abortRequest failed", e)
            }
            for (const e of t) this.translationRequestIds.delete(e)
        }
    }
    async resolveTranslations(t) {
        const {
            dubbingSubtitles: e,
            config: i
        } = t;
        if (i.skipTranslation) return e.map(d => ({
            text: d.text,
            useAi: !1
        }));
        if (this.isGoogleModel(i.model)) return this.buildGoogleFallbackOutcomes(e);
        const n = e.map(d => {
                const _ = d.aiTranslation;
                return _ != null && _.trim() ? {
                    text: _,
                    useAi: !0
                } : void 0
            }),
            o = e.map((d, _) => ({
                subtitle: d,
                index: _
            })).filter(({
                index: d
            }) => !n[d]);
        if (o.length === 0) return n;
        const l = fe.get(i.model),
            c = {
                texts: o.map(({
                    subtitle: d
                }) => d.text),
                subtitles: o.map(({
                    subtitle: d
                }) => {
                    var r, a;
                    const _ = {
                        index: d.index,
                        text: d.text,
                        googleTranslation: d.googleTranslation,
                        start: d.start,
                        end: d.end
                    };
                    return d.aiTranslation && (_.aiTranslation = d.aiTranslation), d.audioVoiceName && (_.audioVoiceName = d.audioVoiceName), (r = d.contextBefore) != null && r.length && (_.contextBefore = d.contextBefore), (a = d.contextAfter) != null && a.length && (_.contextAfter = d.contextAfter), _
                }),
                fromLanguage: t.sourceLanguage,
                toLanguage: i.toLanguage,
                videoId: t.videoDetails.videoId,
                title: t.videoDetails.title,
                platform: t.platform,
                model: i.model,
                requestId: t.requestId
            };
        this.translationRequestIds.add(t.requestId);
        let h;
        try {
            h = await l.translate(c)
        } catch (d) {
            if (Qr(d)) return console.warn("[LocalEdgeAzureDubbingProvider] translateOnly timed out, using prefilled googleTranslation", d), this.mergeTranslatedOutcomes(n, o.map(({
                subtitle: _
            }) => this.buildGoogleFallbackOutcome(_)), o);
            if (Xr(d)) throw d;
            return console.warn("[LocalEdgeAzureDubbingProvider] translateOnly failed, using prefilled googleTranslation", d), this.mergeTranslatedOutcomes(n, o.map(({
                subtitle: _
            }) => this.buildGoogleFallbackOutcome(_)), o)
        }
        if (h.length !== o.length) throw new Error(`LocalEdgeAzureDubbingProvider: AI translation length mismatch (expect=${o.length}, got=${h.length})`);
        return this.mergeTranslatedOutcomes(n, h, o)
    }
    buildGoogleFallbackOutcomes(t) {
        return t.map(e => this.buildGoogleFallbackOutcome(e))
    }
    buildGoogleFallbackOutcome(t) {
        return {
            text: t.googleTranslation || t.text,
            useAi: !1
        }
    }
    mergeTranslatedOutcomes(t, e, i) {
        const n = t.slice();
        for (let o = 0; o < i.length; o++) n[i[o].index] = e[o];
        return n
    }
    pickVoice(t, e) {
        let i = t.audioVoiceName || e;
        if (!i) {
            const lang = String(t.targetLocale || "en").toLowerCase();
            if (lang.startsWith("vi")) i = "vi-VN-HoaiMyNeural";
            else if (lang.startsWith("es")) i = "es-ES-ElviraNeural";
            else if (lang.startsWith("zh")) i = "zh-CN-XiaoxiaoNeural";
            else if (lang.startsWith("ja")) i = "ja-JP-NanamiNeural";
            else if (lang.startsWith("ko")) i = "ko-KR-SunHiNeural";
            else if (lang.startsWith("fr")) i = "fr-FR-EloiseNeural";
            else if (lang.startsWith("de")) i = "de-DE-KatjaNeural";
            else if (lang.startsWith("ru")) i = "ru-RU-SvetlanaNeural";
            else i = "en-US-AvaNeural";
        }
        return this.dragonHdDirectFallbackVoices.get(i) || i
    }
    isGoogleModel(t) {
        return fe.isGoogleModel(t)
    }
}
function nt(u) {
    return u ? typeof TextEncoder < "u" ? new TextEncoder().encode(u).length : unescape(encodeURIComponent(u)).length : 0
}
function Xr(u) {
    if (!u || typeof u != "object") return !1;
    const t = u;
    return t.name === "AbortError" || t.code === "ERR_CANCELED"
}
function Qr(u) {
    if (!u || typeof u != "object") return !1;
    const t = u;
    return t.name === "AbortError" && t.status === 408 && t.code === "TRANSLATE_ONLY_TIMEOUT"
}
function Yr(u) {
    const t = Uint8Array;
    if (typeof t.fromBase64 == "function") return t.fromBase64(u).buffer;
    const e = atob(u),
        i = e.length,
        n = new Uint8Array(i);
    for (let o = 0; o < i; o++) n[o] = e.charCodeAt(o);
    return n.buffer
}
const Zr = .5,
    qr = 6e4,
    Kr = .05,
    It = 6e4,
    Ct = 30 * 6e4,
    Jr = 5 * 6e4,
    ei = 30 * 6e4,
    ti = 3;
let V = null,
    N = null,
    U = null;
const he = new Set;
function ri() {
    return V || (V = Qe(nr(H), {
        breaker: new vt(1),
        halfOpenAfter: new Ye({
            initialDelay: Jr,
            maxDelay: ei,
            generator: ir
        })
    }), V.onBreak(() => W($())), V.onReset(() => W($())), V.onHalfOpen(() => W($())), V)
}
function ii() {
    return N || (N = Qe(Ze(u => _t(u) && !(u instanceof H)), {
        halfOpenAfter: new Ye({
            initialDelay: It,
            maxDelay: Ct
        }),
        breaker: new Sr({
            threshold: Zr,
            duration: qr,
            minimumRps: Kr
        })
    }), N.onBreak(() => W($())), N.onReset(() => W($())), N.onHalfOpen(() => W($())), N)
}
function ni() {
    return U || (U = Qe(Ze(u => _t(u) && !(u instanceof H)), {
        halfOpenAfter: new Ye({
            initialDelay: It,
            maxDelay: Ct
        }),
        breaker: new vt(ti)
    }), U.onBreak(() => W($())), U.onReset(() => W($())), U.onHalfOpen(() => W($())), U)
}
function xt(u) {
    return u === "azure"
}
function ai(u) {
    return xt(u) ? ni() : ii()
}
function W(u) {
    var t;
    for (const e of he) try {
        (t = e.onStateChange) == null || t.call(e, u)
    } catch (i) {
        console.warn("[EdgeBreakerPolicy] state listener error", i)
    }
}
function oi(u) {
    var t;
    for (const e of he) try {
        (t = e.onFallbackInvoked) == null || t.call(e, u)
    } catch (i) {
        console.warn("[EdgeBreakerPolicy] fallback listener error", i)
    }
}
function si(u, t, e) {
    var i;
    try {
        (i = t == null ? void 0 : t.onFallback) == null || i.call(t, u, e)
    } catch (n) {
        console.warn("[EdgeBreakerPolicy] options.onFallback error", n)
    }
    oi(u)
}
class Ae {
    static async execute(t, e, i, n) {
        const o = ri(),
            l = ai(n == null ? void 0 : n.voiceType),
            c = pe(l.state);
        let h = "breaker_open",
            d = null;
        const _ = tr(Ze(a => a instanceof H ? (h = "hard_trip_cooldown", d = a, !0) : a instanceof Z && a.errorCode === "rate_limited" ? (h = "rate_limited", d = a, !0) : a instanceof ar ? (pe(o.state) === "open" ? h = "hard_trip_cooldown" : h = c === "half_open" ? "halfopen_probe_failed" : "breaker_open", d = a, !0) : !1), async () => (si(h, n, d), i(t)));
        return rr(_, o, l).execute(() => e(t))
    }
    static currentState(t) {
        return $(t)
    }
    static subscribe(t) {
        var e;
        he.add(t);
        try {
            (e = t.onStateChange) == null || e.call(t, Ae.currentState())
        } catch {}
        return () => he.delete(t)
    }
    static __resetForTest() {
        V = null, N = null, U = null, he.clear()
    }
}
function pe(u) {
    return u === de.Open || u === de.Isolated ? "open" : u === de.HalfOpen ? "half_open" : "closed"
}
function Ue(...u) {
    return u.includes("open") ? "open" : u.includes("half_open") ? "half_open" : "closed"
}
function $(u) {
    const t = V ? pe(V.state) : "closed",
        e = N ? pe(N.state) : "closed",
        i = U ? pe(U.state) : "closed";
    return xt(u) ? Ue(t, i) : u !== void 0 ? Ue(t, e) : Ue(t, e, i)
}
class li extends F {
    constructor() {
        super(...arguments);
        b(this, "baseURL", globalThis.__DUBBING_LOCAL_API_BASE__);
        b(this, "timeout", 5e3)
    }
    async resolveChain(e) {
        const i = new AbortController,
            n = setTimeout(() => i.abort(), this.timeout);
        try {
            const o = `${this.baseURL}/api/v2/dubbing/resolveChain`,
                l = await De.getItem("local:SESSION"), c = {
                    "Content-Type": "application/json"
                };
            l && (c.Ck = l);
            const h = await fetch(o, {
                method: "POST",
                headers: c,
                body: JSON.stringify(e),
                signal: i.signal,
                credentials: "include"
            });
            if (h.status >= 200 && h.status < 300) return await h.json();
            throw new Error(`resolveChain occur error - Status: ${h.status}, StatusText: ${h.statusText}`)
        } finally {
            clearTimeout(n)
        }
    }
}
const [ln, ui] = we("ChainResolveApiService", () => new li);
function ci() {
    return {
        chain: "FRONTEND_EDGE_AZURE",
        ruleName: "client-fallback",
        fromFallback: !0
    }
}
function di(u) {
    return {
        chain: u.chain === "FRONTEND_EDGE_AZURE" ? "FRONTEND_EDGE_AZURE" : "BACKEND_GENERATE_DUBBING",
        ruleName: u.ruleName || "unknown",
        fromFallback: !1
    }
}
class fi {
    static async resolve(t) {
        try {
            const e = ui(),
                i = {
                    voiceType: t.voiceType,
                    targetLanguage: t.targetLanguage,
                    videoId: t.videoId
                },
                n = await e.resolveChain(i);
            return di(n)
        } catch (e) {
            return console.warn("[ChainResolveService] resolveChain failed, fallback", e), ci()
        }
    }
}
function at(u) {
    const {
        pronunciationRules: t,
        ...e
    } = u;
    return e
}
let Ee = null,
    Pe = null;
function ot() {
    return Ee || (Ee = new Br), Ee
}
function hi() {
    return Pe || (Pe = new zr), Pe
}
class me {
    static async get(t) {
        if (A.isUseMemberFreeVoiceType()) return me.buildBackendInvoker("forced-member-free");
        const e = await fi.resolve(t);
        return e.chain === "BACKEND_GENERATE_DUBBING" ? me.buildBackendInvoker(e.ruleName) : me.buildLocalInvoker(t.voiceType, e.ruleName)
    }
    static __resetForTest() {
        Ee = null, Pe = null
    }
    static buildBackendInvoker(t) {
        const e = ot();
        return {
            chain: "BACKEND_GENERATE_DUBBING",
            ruleName: t,
            breakerEnabled: !1,
            invoke: i => e.process(at(i)),
            abort: i => e.abort(i)
        }
    }
    static buildLocalInvoker(t, e) {
        const i = hi(),
            n = ot();
        return {
            chain: "FRONTEND_EDGE_AZURE",
            ruleName: e,
            breakerEnabled: !0,
            invoke: o => {
                let l, c = null;
                return Ae.execute(o, h => gi(i, h), h => n.process({ ...at(h),
                    isEdgeFallback: !0,
                    fallbackContext: pi(l, c, t, h.attemptIndex, h.batchStartedAt, h.sourceLanguage, h.failureTrace)
                }), {
                    onFallback: (h, d) => {
                        var _;
                        l = h, c = d, (_ = o.metricsRecorder) == null || _.markFallback(h)
                    },
                    voiceType: t
                })
            },
            abort: async o => {
                await Promise.all([i.abort(o), n.abort(o)])
            }
        }
    }
}
function pi(u, t, e, i, n, o, l) {
    const c = l ? l.slice() : [];
    t && Mt(c, Lt("fallback_trigger", t, i, n, u));
    const h = {
            fallbackReason: u,
            breakerState: Ae.currentState(e),
            attemptCount: i,
            elapsedMs: typeof n == "number" ? Date.now() - n : void 0,
            sourceLanguage: o && o !== "unknown" ? o : void 0,
            failureTrace: c.length > 0 ? c : void 0
        },
        d = mi(t, c);
    return d && (h.primaryError = d), h
}
function mi(u, t) {
    const e = t.find(o => o.stage === "primary_error");
    if (e) return {
        name: e.name,
        message: e.message,
        stack: e.stack,
        status: e.status,
        errorCode: e.errorCode,
        subtitleIndex: e.subtitleIndex,
        rawErrorStage: e.rawErrorStage,
        rawErrorSource: e.rawErrorSource,
        rawErrorName: e.rawErrorName,
        rawErrorMessage: e.rawErrorMessage,
        rawErrorStack: e.rawErrorStack,
        rawErrorCause: e.rawErrorCause,
        rawErrorStatus: e.rawErrorStatus,
        rawErrorCode: e.rawErrorCode
    };
    if (!u || typeof u != "object") return;
    const i = u,
        n = u instanceof Z || u instanceof H;
    return {
        name: i.name,
        message: i.message,
        stack: i.stack,
        status: n ? i.status : void 0,
        errorCode: n ? i.errorCode : void 0,
        subtitleIndex: n ? i.subtitleIndex : void 0,
        ...Rt(Le(u))
    }
}
async function gi(u, t) {
    try {
        return await u.process(t)
    } catch (e) {
        throw Mt(t.failureTrace, Lt("primary_error", e, t.attemptIndex, t.batchStartedAt)), e
    }
}
function Lt(u, t, e, i, n) {
    const o = typeof i == "number" ? Date.now() - i : void 0;
    if (!t || typeof t != "object") return {
        stage: u,
        fallbackReason: n,
        attempt: e,
        elapsedMs: o,
        name: typeof t,
        message: String(t)
    };
    const l = t,
        c = t instanceof Z || t instanceof H;
    return {
        stage: u,
        fallbackReason: n,
        attempt: e,
        elapsedMs: o,
        name: l.name,
        message: l.message,
        stack: l.stack,
        status: c ? l.status : void 0,
        errorCode: c ? l.errorCode : void 0,
        subtitleIndex: c ? l.subtitleIndex : void 0,
        ...Rt(Le(t))
    }
}
function Rt(u) {
    return u ? {
        rawErrorStage: u.stage,
        rawErrorSource: u.source,
        rawErrorName: u.rawErrorName,
        rawErrorMessage: u.rawErrorMessage,
        rawErrorStack: u.rawErrorStack,
        rawErrorCause: u.rawErrorCause,
        rawErrorStatus: u.rawErrorStatus,
        rawErrorCode: u.rawErrorCode
    } : {}
}
function Mt(u, t) {
    if (!u) return;
    const e = 30;
    u.length >= e && u.splice(0, u.length - e + 1), u.push(t)
}
function _i(u) {
    if (!u || typeof u != "object") return !1;
    const t = u;
    return t.name === "AbortError" || t.code === "ERR_CANCELED"
}
class bi extends F {
    constructor() {
        super(...arguments);
        b(this, "baseURL", globalThis.__DUBBING_LOCAL_API_BASE__);
        b(this, "timeout", 3e3)
    }
    async report(e) {
        const i = new AbortController,
            n = setTimeout(() => i.abort(), this.timeout);
        try {
            const o = `${this.baseURL}/api/v2/dubbing/reportFrontendDubbingMetrics`,
                l = await De.getItem("local:SESSION"), c = {
                    "Content-Type": "application/json"
                };
            l && (c.Ck = l), await fetch(o, {
                method: "POST",
                headers: c,
                body: JSON.stringify(e),
                signal: i.signal,
                credentials: "include"
            })
        } catch (o) {
            if (_i(o)) return;
            throw o
        } finally {
            clearTimeout(n)
        }
    }
}
const [un, yi] = we("MetricsReportApiService", () => new bi), vi = (() => {
    try {
        return yt.runtime.getManifest().version ?? "unknown"
    } catch {
        return "unknown"
    }
})();
class Si {
    constructor(t) {
        b(this, "meta");
        b(this, "items", []);
        b(this, "flushed", !1);
        b(this, "lastFallbackReason");
        b(this, "lastFinalOutcome");
        b(this, "lastRetryCount");
        this.meta = t
    }
    recordItem(t) {
        this.flushed || this.items.push(t)
    }
    markFallback(t) {
        this.flushed || (this.lastFallbackReason = t)
    }
    markFinalOutcome(t, e) {
        this.flushed || (this.lastFinalOutcome = t, this.lastRetryCount = Number.isFinite(e) && e >= 0 ? Math.floor(e) : 0)
    }
    inferFinalProvider() {
        if (this.lastFinalOutcome !== void 0) return this.lastFallbackReason !== void 0 ? "backend" : "edge"
    }
    flush() {
        if (!this.flushed) {
            this.flushed = !0;
            try {
                const t = wi(this.meta.voiceType) ? st(() => Ae.currentState(this.meta.voiceType), "closed") : void 0,
                    e = {
                        voiceType: this.meta.voiceType,
                        voiceName: this.meta.voiceName,
                        targetLanguage: this.meta.targetLanguage,
                        chain: this.meta.chain,
                        platform: st(() => j.isIos() ? "ios" : "pc", "pc"),
                        extensionVersion: vi,
                        breakerState: t,
                        fallbackReason: this.lastFallbackReason,
                        batchFinalOutcome: this.lastFinalOutcome,
                        finalProvider: this.inferFinalProvider(),
                        retryCount: this.lastRetryCount,
                        items: this.items.map(i => Ti(i))
                    };
                Dt.report(e)
            } catch (t) {
                console.warn("[MetricsCollector] flush failed", t)
            }
        }
    }
}
function st(u, t) {
    try {
        return u()
    } catch {
        return t
    }
}
function wi(u) {
    return u ? u === "free" || u === "azure" : !0
}
function Ai(u) {
    if (!u || typeof u != "object") return !1;
    const t = u;
    return t.name === "AbortError" || t.code === "ERR_CANCELED"
}
function Ti(u) {
    return {
        outcome: u.outcome,
        elapsedMs: Math.max(0, Math.round(u.elapsedMs)),
        attempt: Math.max(0, Math.floor(u.attempt)),
        textBytes: u.textBytes,
        errorStatus: u.errorStatus,
        errorCode: u.errorCode,
        fallbackReason: u.fallbackReason
    }
}
class Dt {
    static startBatch(t) {
        return new Si(t)
    }
    static async report(t) {
        try {
            await yi().report(t)
        } catch (e) {
            if (Ai(e)) {
                console.warn("[MetricsCollector] report aborted (timeout or cancelled; metrics are best-effort)");
                return
            }
            console.warn("[MetricsCollector] report failed", e)
        }
    }
}
const ki = {
        recordItem: () => {},
        markFallback: () => {},
        markFinalOutcome: () => {},
        flush: () => {}
    },
    Ei = "https://youtube-dubbing-1251726835.cos.ap-singapore.myqcloud.com/azure-tts/empty_audio.mp3";
function Ge(u) {
    return u.audioBlobUrl !== void 0 || u.audioUrl !== void 0
}
class Pi {
    constructor(t) {
        b(this, "activeRequestIds", new Set);
        b(this, "batchAbortControllers", new Map);
        b(this, "invokerPromise");
        b(this, "pronunciationRules");
        b(this, "subtitleLanguageDecisionService", new gt);
        b(this, "retryPolicy", sr(lr, {
            maxAttempts: 1,
            backoff: new vr((t, e) => {
                if (!this.contentProcessingPipeline.isRunning) throw new Error("stop");
                if ("error" in t.result && t.result.error instanceof H || "error" in t.result && t.result.error === e) throw t.result.error;
                return {
                    delay: 100 * Math.pow(2, t.attempt),
                    state: "error" in t.result ? t.result.error : void 0
                }
            })
        }));
        var e, i, n;
        this.contentProcessingPipeline = t, this.invokerPromise = me.get({
            voiceType: A.voicesType,
            targetLanguage: A.toLanguage,
            videoId: (i = (e = this.contentProcessingPipeline) == null ? void 0 : e.metadata) == null ? void 0 : i.videoId
        }), this.pronunciationRules = or((n = this.contentProcessingPipeline) == null ? void 0 : n.metadata)
    }
    async abortDubbingRequest() {
        var i;
        if (this.activeRequestIds.size === 0) return;
        const t = Array.from(this.activeRequestIds);
        for (const n of t)(i = this.batchAbortControllers.get(n)) == null || i.abort(new Error("stop"));
        const e = await Promise.race([this.invokerPromise, new Promise(n => setTimeout(() => n(null), 200))]);
        e && await e.abort(t)
    }
    async processContentBatch(t, e, i, n) {
        var _;
        const o = await this.resolveBatchSkipTranslation(t, e, i, n), l = n.resolvedSubtitleLanguage ?? ((_ = n.subtitleMetadata) == null ? void 0 : _.language), c = this.createDubbingSubtitles(t, e, i, o, l);
        if (c.length === 0) return [];
        const h = _e();
        this.activeRequestIds.add(h);
        const d = new AbortController;
        this.batchAbortControllers.set(h, d);
        try {
            const r = await this.invokerPromise;
            this.assertBatchRunning(d.signal);
            const a = r.chain === "FRONTEND_EDGE_AZURE" ? Dt.startBatch({
                voiceType: A.voicesType,
                voiceName: this.pickBatchVoiceName(c),
                targetLanguage: A.toLanguage,
                chain: r.chain
            }) : ki;
            let s = 0;
            const f = Date.now(),
                g = [];
            let p;
            try {
                p = await this.retryPolicy.execute(() => (s++, r.invoke({
                    dubbingSubtitles: c,
                    config: this.createDubbingConfig(o),
                    videoDetails: this.createVideoDetails(n),
                    sourceLanguage: this.resolveSourceLanguageForProvider(n, l),
                    platform: j.isIos() ? "ios" : "pc",
                    requestId: h,
                    metricsRecorder: a,
                    attemptIndex: s,
                    batchStartedAt: f,
                    failureTrace: g,
                    pronunciationRules: this.pronunciationRules
                }))), this.assertBatchRunning(d.signal), a.markFinalOutcome("success", Math.max(0, s - 1))
            } catch (y) {
                const w = this.isUserCancelError(y) ? "aborted" : "failure";
                throw a.markFinalOutcome(w, Math.max(0, s - 1)), y
            } finally {
                a.flush()
            }
            this.assertBatchRunning(d.signal);
            const m = 40;
            for (let y = 0; y < c.length; y++) {
                this.assertBatchRunning(d.signal);
                const v = c[y],
                    w = t[v.index],
                    k = p[y];
                k.useAiTranslate ? w.aiTranslation = k.translation : (w.googleTranslation = k.translation, w.aiTranslation = void 0);
                let x;
                if (k.error ? (console.warn(`[DubbingService] use empty audio placeholder for subtitle index=${v.index} due to provider error`, k.error), x = Ei) : k.audioUrl && (x = k.audioUrl), x && (w.audioUrl = x), k.audioBuffer) w.audioBlobUrl = URL.createObjectURL(new Blob([k.audioBuffer], {
                    type: "audio/mpeg"
                }));
                else if (x) try {
                    const L = await this.fetchAudioBlobUrl(x, d.signal);
                    this.assertBatchRunning(d.signal), w.audioBlobUrl = L
                } catch (L) {
                    if (this.isStopOrAbortError(L)) throw L;
                    console.warn(`[DubbingService] keep audioUrl fallback after blob prefetch failed for subtitle index=${v.index}`, L)
                }
                this.assertBatchRunning(d.signal);
                const B = w.aiTranslation || w.googleTranslation || w.text;
                if (B && B.length > m) {
                    const L = this.splitText(B, m);
                    if (L.length > 1) {
                        const E = ur.distributeTimeProportionally(L, w.start, w.end, 50, A.toLanguage);
                        this.assertBatchRunning(d.signal), w.segments = L.map((Te, oe) => {
                            const se = E[oe];
                            return { ...w,
                                id: void 0,
                                text: oe === 0 ? w.text : "",
                                aiTranslation: Te,
                                googleTranslation: void 0,
                                start: se.start,
                                end: se.end,
                                dur: se.dur,
                                parentSubtitle: w,
                                processPunctuation: !0
                            }
                        })
                    }
                }
            }
            return c.map(y => y.index)
        } finally {
            this.activeRequestIds.delete(h), this.batchAbortControllers.delete(h)
        }
    }
    pickBatchVoiceName(t) {
        return t.length > 0 && t[0].audioVoiceName ? t[0].audioVoiceName : A.voice || "unknown"
    }
    resolveSourceLanguageForProvider(t, e) {
        var i;
        return e && e !== "unknown" ? e : t.resolvedSubtitleLanguage && t.resolvedSubtitleLanguage !== "unknown" ? t.resolvedSubtitleLanguage : (i = t.subtitleMetadata) != null && i.language ? t.subtitleMetadata.language : A.fromLanguage
    }
    createVideoDetails(t) {
        return {
            videoId: t.videoId,
            title: t.title,
            subtitleLevel: t.subtitleLevel
        }
    }
    createDubbingConfig(t) {
        return {
            model: A.translateEngine,
            voice: A.voice,
            voiceType: A.voicesType,
            toLanguage: A.toLanguage,
            skipTranslation: t
        }
    }
    async fetchAudioBlobUrl(t, e) {
        this.assertBatchRunning(e);
        const i = await mt(t);
        if (this.assertBatchRunning(e), i.startsWith("blob:")) return i;
        const n = await fetch(i, {
            signal: e
        });
        if (!n.ok) throw new Error(`Failed to fetch audio ${t}: ${n.statusText}`);
        const o = await n.blob();
        return this.assertBatchRunning(e), URL.createObjectURL(o)
    }
    assertBatchRunning(t) {
        if (t != null && t.aborted || !this.contentProcessingPipeline.isRunning) throw new Error("stop")
    }
    isStopOrAbortError(t) {
        if (!t || typeof t != "object") return !1;
        const e = t;
        return e.message === "stop" || e.name === "AbortError" || e.code === "ERR_CANCELED"
    }
    isUserCancelError(t) {
        if (!t || typeof t != "object") return !1;
        const e = t;
        return e.message === "stop" || e.code === "ERR_CANCELED"
    }
    async resolveBatchSkipTranslation(t, e, i, n) {
        if (!A.skipTranslationWhenSameLanguage) return !1;
        let o = n.resolvedSubtitleLanguage;
        if (!o || o === "unknown") {
            const l = this.getBatchPendingSubtitles(t, e, i);
            o = await this.subtitleLanguageDecisionService.detectLanguageFromSubtitleText(l), o && o !== "unknown" && (n.resolvedSubtitleLanguage = o)
        }
        return !o || o === "unknown" ? !1 : this.subtitleLanguageDecisionService.isSameLanguage(o, A.toLanguage)
    }
    getBatchPendingSubtitles(t, e, i) {
        return et.of(t).enumerate().slice(e, i - e).filter(([n, o]) => !Ge(o)).map(([n, o]) => o).toArray()
    }
    createDubbingSubtitles(t, e, i, n, o) {
        return et.of(t).enumerate().slice(e, i - e).filter(([l, c]) => !Ge(c)).limit(3).map(([l, c]) => {
            const d = n ? cr.normalizeCjkSpacingForDubbing(c.text, o) : c.text;
            n && (c.googleTranslation = d);
            const _ = {
                text: d,
                index: l,
                googleTranslation: n ? d : c.googleTranslation || "",
                aiTranslation: n ? void 0 : c.aiTranslation,
                start: c.start,
                end: c.end
            };
            return c.audioVoiceName && (_.audioVoiceName = c.audioVoiceName), n || this.attachTranslationContext(_, t, l), _
        }).toArray().filter(l => l !== void 0)
    }
    attachTranslationContext(t, e, i) {
        var h, d;
        const l = [];
        for (let _ = Math.max(0, i - 3); _ < i; _++) {
            const r = e[_];
            if (!((h = r == null ? void 0 : r.text) != null && h.trim())) continue;
            const a = {
                    text: r.text
                },
                s = r.aiTranslation || r.googleTranslation;
            s != null && s.trim() && (a.translation = s), l.push(a)
        }
        const c = [];
        for (let _ = i + 1; _ <= i + 2 && _ < e.length; _++) {
            const r = e[_];
            (d = r == null ? void 0 : r.text) != null && d.trim() && c.push({
                text: r.text
            })
        }
        l.length > 0 && (t.contextBefore = l), c.length > 0 && (t.contextAfter = c)
    }
    splitText(t, e) {
        if (t.length <= e) return [t];
        const i = [];
        let n = t;
        const o = 5;
        for (; n.length > e;) {
            let l = -1;
            l = this.findBestSplitPoint(n, e, o), l === -1 && (l = n.lastIndexOf(" ", e), l !== -1 && (l += 1)), (l === -1 || l <= o) && (l = e), i.push(n.substring(0, l).trim()), n = n.substring(l).trim()
        }
        return n.length > 0 && i.push(n), i
    }
    findBestSplitPoint(t, e, i) {
        const n = Math.min(t.length, e),
            o = i,
            l = t.substring(0, n),
            c = [".", "!", "?", "。", "！", "？"];
        for (let d = l.length - 1; d >= o; d--) {
            const _ = l[d];
            if (c.includes(_)) {
                if (_ === "." && this.isSpecialDotUsage(t, d)) continue;
                return d + 1
            }
        }
        const h = [",", ";", "，", "；", ":", "："];
        for (let d = l.length - 1; d >= o; d--) {
            const _ = l[d];
            if (h.includes(_)) return d + 1
        }
        return -1
    }
    isSpecialDotUsage(t, e) {
        const i = t.substring(Math.max(0, e - 20), e),
            n = t.substring(e + 1, Math.min(t.length, e + 10));
        return !!(/\d$/.test(i) && /^\d/.test(n) || n.length > 0 && /^[a-zA-Z]/.test(n) || /\w+\.\w+$/.test(i + "."))
    }
}
function lt(u) {
    return String(u || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
function Ii(u, t, e) {
    const i = String(u.text || "").trim(),
        n = String(u.aiTranslation ?? u.googleTranslation ?? i).trim();
    if (!t || !i || !n || i === n) return {
        kind: "single",
        lines: [{
            role: "translated",
            text: n || i
        }]
    };
    const o = pr(e).order,
        l = {
            role: "translated",
            text: n
        },
        c = {
            role: "original",
            text: i
        };
    return {
        kind: "bilingual",
        lines: o === "original-first" ? [c, l] : [l, c]
    }
}
function Ot(u, t, e) {
    var o;
    const i = Ii(u, t, e);
    if (i.kind === "single") {
        const l = lt(((o = i.lines[0]) == null ? void 0 : o.text) || "");
        return `<c.${tt}>${l}</c>`
    }
    const n = i.lines.map(l => `<c.${l.role==="translated"?fr:hr}>${lt(l.text)}</c>`).join(`
`);
    return `<c.${tt}>${n}</c>`
}
function Bt(u, t) {
    var e;
    for (const i of u) i.id && t.set(i.id, i), (e = i.segments) != null && e.length && Bt(i.segments, t)
}
function Ci(u, t, e, i) {
    const n = new Map;
    Bt(t, n);
    for (const o of Array.from(u.cues || [])) {
        const l = n.get(o.id);
        !l || !("text" in o) || (o.text = Ot(l, e, i))
    }
}
const ge = class ge {
    constructor(t, e, i, n) {
        b(this, "dubbingService");
        b(this, "isRunning", !0);
        this.metadata = t, this.subtitleTrack = e, this.getAdTimeOffset = i, this.onCueEnter = n, this.dubbingService = new Pi(this)
    }
    async processNextSingleBatch(t, e) {
        return await this.processNextBatch(t, e, !0, t.length)
    }
    async processNextBatch(t, e, i, n) {
        let o = e;
        for (; o < n && this.isRunning;) {
            const l = t[o];
            if (Ge(l)) {
                o++;
                continue
            }
            if (o = await this.processBatch(t, o, n), i) break
        }
        return o
    }
    async stop() {
        this.isRunning = !1, await this.dubbingService.abortDubbingRequest()
    }
    async processBatch(t, e, i) {
        const n = await this.dubbingService.processContentBatch(t, e, i, this.metadata);
        if (X.isEmpty(n)) return t.length;
        const o = X.last(n) + 1;
        return await this.addSubtitleToTrack(n, t), o
    }
    async addSubtitleToTrack(t, e) {
        return ge.processBatchLock = ge.processBatchLock.then(() => {
            for (let i of t) {
                const n = e[i];
                if (!n.id) {
                    const o = n.segments && n.segments.length > 0 ? n.segments : [n];
                    for (const l of o) {
                        let c;
                        try {
                            const h = l.start + this.getAdTimeOffset();
                            X.isFinite(h) || console.log(`subtitle start time is not finite, subtitle.start == ${l.start} , adTimeOffset == ${this.getAdTimeOffset()}`), c = new VTTCue(h, l.end + this.getAdTimeOffset(), Ot(l, A.bilingualSubtitleEnabled, A.bilingualSubtitleStyle));
                            const d = bt(A.subtitleStyle);
                            c.snapToLines = !1, c.line = d.line, c.lineAlign = d.lineAlign, c.id = _e(), c.addEventListener("enter", _ => this.onCueEnter(l)), this.subtitleTrack.addCue(c)
                        } finally {
                            c && (l.id = c.id)
                        }
                    }
                    n.segments && n.segments.length > 0 && (n.id = "processed_parent_" + _e())
                }
            }
        })
    }
};
b(ge, "processBatchLock", Promise.resolve());
let We = ge;
const xi = 300,
    Li = 1e3;
class Ri {
    constructor(t, e, i, n, o) {
        b(this, "contentProcessingPipeline");
        b(this, "sleepTimer");
        b(this, "sleepResolver");
        this.metadata = t, this.getCurrentSubtitleIndex = o, this.contentProcessingPipeline = new We(t, e, i, n)
    }
    async processNextBatch(t) {
        return await this.contentProcessingPipeline.processNextSingleBatch(this.metadata.subtitles, t)
    }
    async start(t) {
        let e = t;
        const i = this.metadata.subtitles;
        for (; e < i.length && this.contentProcessingPipeline.isRunning;) {
            let n;
            try {
                n = this.getCurrentSubtitleIndex()
            } catch (l) {
                throw console.error("[DirectContentProcessingPipeline] getCurrentSubtitleIndex failed", {
                    currentIndex: e,
                    subtitlesLength: i.length
                }, l), l
            }
            if (!Number.isInteger(n) || n < 0 || n >= i.length) {
                console.warn("[DirectContentProcessingPipeline] stop async buffering due to invalid anchor index", {
                    anchorIndex: n,
                    currentIndex: e,
                    subtitlesLength: i.length
                });
                break
            }
            if (i[e].start - i[n].start > xi) {
                await this.sleep(Li);
                continue
            }
            try {
                e = await this.contentProcessingPipeline.processNextSingleBatch(i, e)
            } catch (l) {
                if ((l == null ? void 0 : l.message) === "stop") break;
                throw l
            }
        }
    }
    async stop() {
        return this.wakeSleep(), await this.contentProcessingPipeline.stop(), !0
    }
    sleep(t) {
        return new Promise(e => {
            const i = () => {
                this.sleepTimer = void 0, this.sleepResolver = void 0, e()
            };
            this.sleepResolver = i, this.sleepTimer = setTimeout(i, t)
        })
    }
    wakeSleep() {
        if (!this.sleepResolver) return;
        this.sleepTimer !== void 0 && (clearTimeout(this.sleepTimer), this.sleepTimer = void 0);
        const t = this.sleepResolver;
        this.sleepResolver = void 0, t()
    }
}
var He = {
        exports: {}
    },
    ut;
function Mi() {
    return ut || (ut = 1, function (u) {
        var t = Object.prototype.hasOwnProperty,
            e = "~";
        function i() {}
        Object.create && (i.prototype = Object.create(null), new i().__proto__ || (e = !1));
        function n(h, d, _) {
            this.fn = h, this.context = d, this.once = _ || !1
        }
        function o(h, d, _, r, a) {
            if (typeof _ != "function") throw new TypeError("The listener must be a function");
            var s = new n(_, r || h, a),
                f = e ? e + d : d;
            return h._events[f] ? h._events[f].fn ? h._events[f] = [h._events[f], s] : h._events[f].push(s) : (h._events[f] = s, h._eventsCount++), h
        }
        function l(h, d) {
            --h._eventsCount === 0 ? h._events = new i : delete h._events[d]
        }
        function c() {
            this._events = new i, this._eventsCount = 0
        }
        c.prototype.eventNames = function () {
            var d = [],
                _, r;
            if (this._eventsCount === 0) return d;
            for (r in _ = this._events) t.call(_, r) && d.push(e ? r.slice(1) : r);
            return Object.getOwnPropertySymbols ? d.concat(Object.getOwnPropertySymbols(_)) : d
        }, c.prototype.listeners = function (d) {
            var _ = e ? e + d : d,
                r = this._events[_];
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var a = 0, s = r.length, f = new Array(s); a < s; a++) f[a] = r[a].fn;
            return f
        }, c.prototype.listenerCount = function (d) {
            var _ = e ? e + d : d,
                r = this._events[_];
            return r ? r.fn ? 1 : r.length : 0
        }, c.prototype.emit = function (d, _, r, a, s, f) {
            var g = e ? e + d : d;
            if (!this._events[g]) return !1;
            var p = this._events[g],
                m = arguments.length,
                y, v;
            if (p.fn) {
                switch (p.once && this.removeListener(d, p.fn, void 0, !0), m) {
                case 1:
                    return p.fn.call(p.context), !0;
                case 2:
                    return p.fn.call(p.context, _), !0;
                case 3:
                    return p.fn.call(p.context, _, r), !0;
                case 4:
                    return p.fn.call(p.context, _, r, a), !0;
                case 5:
                    return p.fn.call(p.context, _, r, a, s), !0;
                case 6:
                    return p.fn.call(p.context, _, r, a, s, f), !0
                }
                for (v = 1, y = new Array(m - 1); v < m; v++) y[v - 1] = arguments[v];
                p.fn.apply(p.context, y)
            } else {
                var w = p.length,
                    k;
                for (v = 0; v < w; v++) switch (p[v].once && this.removeListener(d, p[v].fn, void 0, !0), m) {
                case 1:
                    p[v].fn.call(p[v].context);
                    break;
                case 2:
                    p[v].fn.call(p[v].context, _);
                    break;
                case 3:
                    p[v].fn.call(p[v].context, _, r);
                    break;
                case 4:
                    p[v].fn.call(p[v].context, _, r, a);
                    break;
                default:
                    if (!y)
                        for (k = 1, y = new Array(m - 1); k < m; k++) y[k - 1] = arguments[k];
                    p[v].fn.apply(p[v].context, y)
                }
            }
            return !0
        }, c.prototype.on = function (d, _, r) {
            return o(this, d, _, r, !1)
        }, c.prototype.once = function (d, _, r) {
            return o(this, d, _, r, !0)
        }, c.prototype.removeListener = function (d, _, r, a) {
            var s = e ? e + d : d;
            if (!this._events[s]) return this;
            if (!_) return l(this, s), this;
            var f = this._events[s];
            if (f.fn) f.fn === _ && (!a || f.once) && (!r || f.context === r) && l(this, s);
            else {
                for (var g = 0, p = [], m = f.length; g < m; g++)(f[g].fn !== _ || a && !f[g].once || r && f[g].context !== r) && p.push(f[g]);
                p.length ? this._events[s] = p.length === 1 ? p[0] : p : l(this, s)
            }
            return this
        }, c.prototype.removeAllListeners = function (d) {
            var _;
            return d ? (_ = e ? e + d : d, this._events[_] && l(this, _)) : (this._events = new i, this._eventsCount = 0), this
        }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = e, c.EventEmitter = c, u.exports = c
    }(He)), He.exports
}
var Di = Mi();
const Oi = mr(Di);
class Ft extends Error {
    constructor(t) {
        super(t), this.name = "TimeoutError"
    }
}
class Bi extends Error {
    constructor(t) {
        super(), this.name = "AbortError", this.message = t
    }
}
const ct = u => globalThis.DOMException === void 0 ? new Bi(u) : new DOMException(u),
    dt = u => {
        const t = u.reason === void 0 ? ct("This operation was aborted.") : u.reason;
        return t instanceof Error ? t : ct(t)
    };
function Fi(u, t) {
    const {
        milliseconds: e,
        fallback: i,
        message: n,
        customTimers: o = {
            setTimeout,
            clearTimeout
        }
    } = t;
    let l, c;
    const d = new Promise((_, r) => {
        if (typeof e != "number" || Math.sign(e) !== 1) throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${e}\``);
        if (t.signal) {
            const {
                signal: s
            } = t;
            s.aborted && r(dt(s)), c = () => {
                r(dt(s))
            }, s.addEventListener("abort", c, {
                once: !0
            })
        }
        if (e === Number.POSITIVE_INFINITY) {
            u.then(_, r);
            return
        }
        const a = new Ft;
        l = o.setTimeout.call(void 0, () => {
            if (i) {
                try {
                    _(i())
                } catch (s) {
                    r(s)
                }
                return
            }
            typeof u.cancel == "function" && u.cancel(), n === !1 ? _() : n instanceof Error ? r(n) : (a.message = n ?? `Promise timed out after ${e} milliseconds`, r(a))
        }, e), (async () => {
            try {
                _(await u)
            } catch (s) {
                r(s)
            }
        })()
    }).finally(() => {
        d.clear(), c && t.signal && t.signal.removeEventListener("abort", c)
    });
    return d.clear = () => {
        o.clearTimeout.call(void 0, l), l = void 0
    }, d
}
function Vi(u, t, e) {
    let i = 0,
        n = u.length;
    for (; n > 0;) {
        const o = Math.trunc(n / 2);
        let l = i + o;
        e(u[l], t) <= 0 ? (i = ++l, n -= o + 1) : n = o
    }
    return i
}
var M;
class Ni {
    constructor() {
        I(this, M, [])
    }
    enqueue(t, e) {
        e = {
            priority: 0,
            ...e
        };
        const i = {
            priority: e.priority,
            id: e.id,
            run: t
        };
        if (this.size === 0 || S(this, M)[this.size - 1].priority >= e.priority) {
            S(this, M).push(i);
            return
        }
        const n = Vi(S(this, M), i, (o, l) => l.priority - o.priority);
        S(this, M).splice(n, 0, i)
    }
    setPriority(t, e) {
        const i = S(this, M).findIndex(o => o.id === t);
        if (i === -1) throw new ReferenceError(`No promise function with the id "${t}" exists in the queue.`);
        const [n] = S(this, M).splice(i, 1);
        this.enqueue(n.run, {
            priority: e,
            id: t
        })
    }
    dequeue() {
        const t = S(this, M).shift();
        return t == null ? void 0 : t.run
    }
    filter(t) {
        return S(this, M).filter(e => e.priority === t.priority).map(e => e.run)
    }
    get size() {
        return S(this, M).length
    }
}
M = new WeakMap;
var ee, te, Q, be, re, ye, D, ie, R, ve, O, ne, G, Se, Re, T, Vt, Nt, Ut, Ht, $t, Ie, je, ze, Ce, Gt, xe;
class Ui extends Oi {
    constructor(e) {
        var i, n;
        super();
        I(this, T);
        I(this, ee);
        I(this, te);
        I(this, Q, 0);
        I(this, be);
        I(this, re);
        I(this, ye, 0);
        I(this, D);
        I(this, ie);
        I(this, R);
        I(this, ve);
        I(this, O, 0);
        I(this, ne);
        I(this, G);
        I(this, Se);
        I(this, Re, 1n);
        b(this, "timeout");
        if (e = {
                carryoverConcurrencyCount: !1,
                intervalCap: Number.POSITIVE_INFINITY,
                interval: 0,
                concurrency: Number.POSITIVE_INFINITY,
                autoStart: !0,
                queueClass: Ni,
                ...e
            }, !(typeof e.intervalCap == "number" && e.intervalCap >= 1)) throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${((i=e.intervalCap)==null?void 0:i.toString())??""}\` (${typeof e.intervalCap})`);
        if (e.interval === void 0 || !(Number.isFinite(e.interval) && e.interval >= 0)) throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${((n=e.interval)==null?void 0:n.toString())??""}\` (${typeof e.interval})`);
        P(this, ee, e.carryoverConcurrencyCount), P(this, te, e.intervalCap === Number.POSITIVE_INFINITY || e.interval === 0), P(this, be, e.intervalCap), P(this, re, e.interval), P(this, R, new e.queueClass), P(this, ve, e.queueClass), this.concurrency = e.concurrency, this.timeout = e.timeout, P(this, Se, e.throwOnTimeout === !0), P(this, G, e.autoStart === !1)
    }
    get concurrency() {
        return S(this, ne)
    }
    set concurrency(e) {
        if (!(typeof e == "number" && e >= 1)) throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${e}\` (${typeof e})`);
        P(this, ne, e), C(this, T, Ce).call(this)
    }
    setPriority(e, i) {
        S(this, R).setPriority(e, i)
    }
    async add(e, i = {}) {
        return i.id ?? (i.id = (le(this, Re)._++).toString()), i = {
            timeout: this.timeout,
            throwOnTimeout: S(this, Se),
            ...i
        }, new Promise((n, o) => {
            S(this, R).enqueue(async () => {
                var l;
                le(this, O)._++, le(this, Q)._++;
                try {
                    (l = i.signal) == null || l.throwIfAborted();
                    let c = e({
                        signal: i.signal
                    });
                    i.timeout && (c = Fi(Promise.resolve(c), {
                        milliseconds: i.timeout
                    })), i.signal && (c = Promise.race([c, C(this, T, Gt).call(this, i.signal)]));
                    const h = await c;
                    n(h), this.emit("completed", h)
                } catch (c) {
                    if (c instanceof Ft && !i.throwOnTimeout) {
                        n();
                        return
                    }
                    o(c), this.emit("error", c)
                } finally {
                    C(this, T, Ut).call(this)
                }
            }, i), this.emit("add"), C(this, T, Ie).call(this)
        })
    }
    async addAll(e, i) {
        return Promise.all(e.map(async n => this.add(n, i)))
    }
    start() {
        return S(this, G) ? (P(this, G, !1), C(this, T, Ce).call(this), this) : this
    }
    pause() {
        P(this, G, !0)
    }
    clear() {
        P(this, R, new(S(this, ve)))
    }
    async onEmpty() {
        S(this, R).size !== 0 && await C(this, T, xe).call(this, "empty")
    }
    async onSizeLessThan(e) {
        S(this, R).size < e || await C(this, T, xe).call(this, "next", () => S(this, R).size < e)
    }
    async onIdle() {
        S(this, O) === 0 && S(this, R).size === 0 || await C(this, T, xe).call(this, "idle")
    }
    get size() {
        return S(this, R).size
    }
    sizeBy(e) {
        return S(this, R).filter(e).length
    }
    get pending() {
        return S(this, O)
    }
    get isPaused() {
        return S(this, G)
    }
}
ee = new WeakMap, te = new WeakMap, Q = new WeakMap, be = new WeakMap, re = new WeakMap, ye = new WeakMap, D = new WeakMap, ie = new WeakMap, R = new WeakMap, ve = new WeakMap, O = new WeakMap, ne = new WeakMap, G = new WeakMap, Se = new WeakMap, Re = new WeakMap, T = new WeakSet, Vt = function () {
    return S(this, te) || S(this, Q) < S(this, be)
}, Nt = function () {
    return S(this, O) < S(this, ne)
}, Ut = function () {
    le(this, O)._--, C(this, T, Ie).call(this), this.emit("next")
}, Ht = function () {
    C(this, T, ze).call(this), C(this, T, je).call(this), P(this, ie, void 0)
}, $t = function () {
    const e = Date.now();
    if (S(this, D) === void 0) {
        const i = S(this, ye) - e;
        if (i < 0) P(this, Q, S(this, ee) ? S(this, O) : 0);
        else return S(this, ie) === void 0 && P(this, ie, setTimeout(() => {
            C(this, T, Ht).call(this)
        }, i)), !0
    }
    return !1
}, Ie = function () {
    if (S(this, R).size === 0) return S(this, D) && clearInterval(S(this, D)), P(this, D, void 0), this.emit("empty"), S(this, O) === 0 && this.emit("idle"), !1;
    if (!S(this, G)) {
        const e = !S(this, T, $t);
        if (S(this, T, Vt) && S(this, T, Nt)) {
            const i = S(this, R).dequeue();
            return i ? (this.emit("active"), i(), e && C(this, T, je).call(this), !0) : !1
        }
    }
    return !1
}, je = function () {
    S(this, te) || S(this, D) !== void 0 || (P(this, D, setInterval(() => {
        C(this, T, ze).call(this)
    }, S(this, re))), P(this, ye, Date.now() + S(this, re)))
}, ze = function () {
    S(this, Q) === 0 && S(this, O) === 0 && S(this, D) && (clearInterval(S(this, D)), P(this, D, void 0)), P(this, Q, S(this, ee) ? S(this, O) : 0), C(this, T, Ce).call(this)
}, Ce = function () {
    for (; C(this, T, Ie).call(this););
}, Gt = async function (e) {
    return new Promise((i, n) => {
        e.addEventListener("abort", () => {
            n(e.reason)
        }, {
            once: !0
        })
    })
}, xe = async function (e, i) {
    return new Promise(n => {
        const o = () => {
            i && !i() || (this.off(e, o), n())
        };
        this.on(e, o)
    })
};
class Hi {
    constructor(t, e, i, n) {
        b(this, "apiUse", !1);
        b(this, "enterListeners", []);
        b(this, "exitListeners", []);
        b(this, "track");
        b(this, "enterSubtitle");
        b(this, "iosXMuteButtonController");
        var l;
        this.media = t, this.metadata = e, this.rule = n, this.rule && ae.shouldEnable(this.rule) && (this.iosXMuteButtonController = new ae(t)), i() !== void 0 ? (this.enterSubtitle = !0, this.closeVideoOriginVolume()) : (this.enterSubtitle = !1, this.openVideoOriginVolume());
        const o = e.originSubtitles;
        this.track = this.media.addTextTrack("subtitles", "youtube-dubbing-origin-" + this.metadata.videoId, (l = e.subtitleMetadata) == null ? void 0 : l.language), this.track.mode = "hidden", o.forEach((c, h) => {
            const d = new VTTCue(c.start, c.end, c.text),
                _ = () => this.onSubtitleEnter(h),
                r = () => this.onSubtitleExit(h);
            d.addEventListener("enter", _), d.addEventListener("exit", r), this.enterListeners.push(_), this.exitListeners.push(r), this.track.addCue(d)
        })
    }
    onSubtitleEnter(t) {
        this.enterSubtitle = !0, this.apiUse = !0, this.closeVideoOriginVolume()
    }
    onSubtitleExit(t) {
        if (t < this.metadata.originSubtitles.length - 1) {
            const e = this.metadata.originSubtitles[t];
            if (this.metadata.originSubtitles[t + 1].start - e.end < 1) return
        }
        this.enterSubtitle = !1, this.apiUse = !0, this.openVideoOriginVolume()
    }
    openVideoOriginVolume() {
        this.iosXMuteButtonController ? this.iosXMuteButtonController.unmute() : j.isIos() ? this.media.muted = !1 : (this.media.muted = !1, this.media.volume = 1)
    }
    closeVideoOriginVolume() {
        this.iosXMuteButtonController ? this.iosXMuteButtonController.mute() : j.isIos() ? this.media.muted = !0 : kt(this.media, this.rule)
    }
    updateVideoOriginVolume() {
        if (this.apiUse) {
            this.apiUse = !1;
            return
        }
        this.enterSubtitle ? this.closeVideoOriginVolume() : this.openVideoOriginVolume()
    }
    terminate() {
        if (this.track.cues) {
            for (let t = 0; t < this.track.cues.length; t++) {
                const e = this.track.cues[t];
                e && (e.removeEventListener("enter", this.enterListeners[t]), e.removeEventListener("exit", this.exitListeners[t]))
            }
            for (; this.track.cues.length > 0;) this.track.removeCue(this.track.cues[0])
        }
        this.track.mode = "disabled"
    }
}
const $i = "data-yd-subtitle-overlay-wrapper",
    Gi = "10000",
    Me = class Me {
        constructor(t) {
            b(this, "media");
            b(this, "mountParent");
            b(this, "wrapper");
            b(this, "overlay");
            b(this, "bilingualLineStyle");
            b(this, "styleScopeId");
            b(this, "renderer");
            b(this, "knownCues", new Set);
            b(this, "onWindowResizeHandler", this.syncLayout.bind(this));
            b(this, "onFullscreenChangeHandler", this.syncLayout.bind(this));
            b(this, "parentPositionPatched", !1);
            b(this, "originalParentInlinePosition");
            b(this, "currentPresentation");
            b(this, "singlePresentation");
            b(this, "bilingualPresentation");
            this.media = t, this.mountParent = this.resolveMountParent(t), this.originalParentInlinePosition = this.mountParent.style.position, getComputedStyle(this.mountParent).position === "static" && (this.mountParent.style.position = "relative", this.parentPositionPatched = !0), this.wrapper = document.createElement("div"), this.wrapper.setAttribute($i, "true"), this.styleScopeId = `yd-subtitle-overlay-${++Me.nextInstanceId}`, this.wrapper.setAttribute("data-yd-subtitle-overlay-id", this.styleScopeId), this.wrapper.style.position = "absolute", this.wrapper.style.pointerEvents = "none", this.wrapper.style.overflow = "hidden", this.wrapper.style.zIndex = Gi, this.wrapper.style.visibility = "hidden", this.overlay = document.createElement("div"), this.overlay.style.position = "absolute", this.overlay.style.inset = "0", this.overlay.style.pointerEvents = "none", this.bilingualLineStyle = document.createElement("style"), this.wrapper.appendChild(this.bilingualLineStyle), this.wrapper.appendChild(this.overlay), this.mountParent.appendChild(this.wrapper), this.renderer = new dr(this.overlay), window.addEventListener("resize", this.onWindowResizeHandler), document.addEventListener("fullscreenchange", this.onFullscreenChangeHandler), this.syncLayout()
        }
        setVisible(t) {
            this.wrapper.style.visibility = t ? "visible" : "hidden"
        }
        applyStyle(t, e, i = {}) {
            this.singlePresentation = rt(t, e, { ...i,
                bilingualEnabled: !1
            }), this.bilingualPresentation = rt(t, e, { ...i,
                bilingualEnabled: !0
            });
            const n = i.bilingualEnabled === !0 ? this.bilingualPresentation : this.singlePresentation;
            this.currentPresentation = n, this.syncBilingualLineStyle(this.bilingualPresentation), this.overlay.style.fontFamily = n.fontFamily, this.overlay.style.fontWeight = n.fontWeight;
            for (const [o, l] of Object.entries(n.cssVars)) this.overlay.style.setProperty(o, l);
            this.renderer.update(!0), this.syncRenderedCuePresentation()
        }
        syncTrack(t) {
            const e = new Set(Array.from(t.cues || []));
            for (const i of Array.from(this.knownCues)) e.has(i) || (this.knownCues.delete(i), this.renderer.removeCue(i));
            for (const i of e) this.knownCues.has(i) || (this.knownCues.add(i), this.renderer.addCue(i))
        }
        setCurrentTime(t) {
            this.syncLayout(), this.renderer.currentTime = t, this.syncRenderedCuePresentation()
        }
        forceRender() {
            this.syncLayout(), this.renderer.update(!0), this.syncRenderedCuePresentation()
        }
        reset() {
            this.knownCues.clear(), this.renderer.reset()
        }
        destroy() {
            window.removeEventListener("resize", this.onWindowResizeHandler), document.removeEventListener("fullscreenchange", this.onFullscreenChangeHandler), this.renderer.destroy(), this.wrapper.remove(), this.parentPositionPatched && this.mountParent.style.position === "relative" && (this.mountParent.style.position = this.originalParentInlinePosition)
        }
        resolveMountParent(t) {
            const e = t.parentElement;
            return e instanceof HTMLElement ? e : document.body
        }
        syncLayout() {
            const t = this.mountParent.getBoundingClientRect(),
                e = this.media.getBoundingClientRect(),
                i = e.top - t.top,
                n = e.left - t.left,
                o = e.width || this.media.clientWidth,
                l = e.height || this.media.clientHeight;
            this.wrapper.style.top = `${i}px`, this.wrapper.style.left = `${n}px`, this.wrapper.style.width = `${o}px`, this.wrapper.style.height = `${l}px`
        }
        syncRenderedCuePresentation() {
            if (!this.currentPresentation) return;
            const t = Array.from(this.overlay.querySelectorAll("[part='cue']")),
                e = t.map(o => this.resolveCuePresentation(o)),
                i = e.find(o => o.bilingual) ?? this.singlePresentation ?? this.currentPresentation;
            this.overlay.querySelectorAll("[part='cue-display']").forEach(o => this.applyCueDisplayStyle(o, i)), t.forEach((o, l) => {
                this.applyCueStyle(o, e[l])
            })
        }
        resolveCuePresentation(t) {
            var o;
            const e = (o = this.bilingualPresentation) == null ? void 0 : o.bilingual;
            if (!e) return this.currentPresentation;
            const i = t.querySelectorAll(`.${e.translatedClassName}, [class*='${e.translatedClassName}']`),
                n = t.querySelectorAll(`.${e.originalClassName}, [class*='${e.originalClassName}']`);
            return i.length > 0 && n.length > 0 ? this.bilingualPresentation : this.singlePresentation ?? this.currentPresentation
        }
        syncBilingualLineStyle(t) {
            const e = t.bilingual;
            if (!e) {
                this.bilingualLineStyle.textContent = "";
                return
            }
            const i = (o, l) => {
                    const c = { ...o,
                        "margin-top": l ? `${e.lineGapPx}px` : "0px"
                    };
                    return Object.entries(c).map(([h, d]) => `${h}: ${d} !important;`).join(`
`)
                },
                n = `[data-yd-subtitle-overlay-id="${this.styleScopeId}"]`;
            this.bilingualLineStyle.textContent = `
${n} .${e.translatedClassName} {
${i(e.translatedStyle,e.secondLineRole==="translated")}
}
${n} .${e.originalClassName} {
${i(e.originalStyle,e.secondLineRole==="original")}
}
        `.trim()
        }
        applyCueDisplayStyle(t, e) {
            var o;
            const i = ((o = e.bilingual) == null ? void 0 : o.textAlign) ?? "center",
                n = yr(e.cueDisplayStyle, i);
            for (const [l, c] of Object.entries(n)) t.style.setProperty(l, c)
        }
        applyCueStyle(t, e) {
            for (const [l, c] of Object.entries(e.cueStyle)) t.style.setProperty(l, c);
            if (!e.bilingual) return;
            const i = e.bilingual,
                n = t.querySelectorAll(`.${i.translatedClassName}, [class*='${i.translatedClassName}']`),
                o = t.querySelectorAll(`.${i.originalClassName}, [class*='${i.originalClassName}']`);
            n.forEach(l => {
                const c = i.secondLineRole === "translated";
                this.applyLineStyle(l, i.translatedStyle, c ? i.lineGapPx : 0)
            }), o.forEach(l => {
                const c = i.secondLineRole === "original";
                this.applyLineStyle(l, i.originalStyle, c ? i.lineGapPx : 0)
            })
        }
        applyLineStyle(t, e, i) {
            for (const [n, o] of Object.entries(e)) t.style.setProperty(n, o);
            i > 0 ? t.style.setProperty("margin-top", `${i}px`) : t.style.removeProperty("margin-top")
        }
    };
b(Me, "nextInstanceId", 0);
let Xe = Me;
const ft = 1,
    Wi = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=";
function ji() {
    return j.isIos() ? new Qi : new zi
}
class zi {
    constructor() {
        b(this, "serviceName", "howler")
    }
    create(t, e) {
        return new Xi(t, e)
    }
}
class Xi {
    constructor(t, e) {
        b(this, "audio");
        b(this, "audioId");
        this.audio = new Et.Howl({
            src: [t],
            format: ["mp3"],
            // Web Audio is required so local-player export can route the
            // translated voice through Howler.masterGain into MediaRecorder.
            html5: !1
        }), this.audio.once("loaderror", (i, n) => {
            e.onLoadError(n)
        }), this.audio.once("playerror", (i, n) => {
            e.onPlayError(n)
        }), this.audio.once("play", () => {
            e.onReady()
        }), this.audio.once("end", () => {
            e.onEnd()
        })
    }
    play() {
        this.audioId = this.audio.play()
    }
    resume() {
        if (this.audioId !== void 0) {
            this.audio.play(this.audioId);
            return
        }
        this.play()
    }
    pause() {
        this.audioId !== void 0 && this.audio.pause(this.audioId)
    }
    stop() {
        this.audioId !== void 0 && this.audio.stop(this.audioId)
    }
    unload() {
        this.audio.unload()
    }
    isPlaying() {
        return this.audioId !== void 0 && this.audio.playing(this.audioId)
    }
    seek(t) {
        return this.audioId === void 0 ? 0 : (t !== void 0 && this.audio.seek(t, this.audioId), this.audio.seek(this.audioId))
    }
    duration() {
        return this.audioId === void 0 ? 0 : this.audio.duration(this.audioId) ?? 0
    }
    rate(t) {
        return this.audioId === void 0 ? t ?? 1 : (t !== void 0 && this.audio.rate(t, this.audioId), this.audio.rate(this.audioId))
    }
    volume(t) {
        this.audio.volume(t)
    }
    state() {
        return this.audio.state()
    }
}
class Qi {
    constructor() {
        b(this, "serviceName", "ios-safari-native")
    }
    create(t, e) {
        return new qi(t, e)
    }
}
class Yi {
    constructor() {
        b(this, "availableAudioElements", []);
        b(this, "unlockedAudioElements", new Set);
        b(this, "prewarmPromise")
    }
    prewarm(t) {
        const e = Math.min(ft, Math.max(0, t));
        if (this.availableAudioElements.length >= e) return Promise.resolve();
        if (this.prewarmPromise) return this.prewarmPromise;
        const i = e - this.availableAudioElements.length,
            n = Promise.all(Array.from({
                length: i
            }, (o, l) => this.prewarmOne(l + 1, i))).then(() => {}).finally(() => {
                this.prewarmPromise === n && (this.prewarmPromise = void 0)
            });
        return this.prewarmPromise = n, n
    }
    acquire(t) {
        const n = this.availableAudioElements.pop() ?? this.firstUnlockedAudioElement() ?? new Audio;
        n.pause(), n.src = t, n.preload = "auto", n.volume = 1;
        try {
            n.load()
        } catch (o) {
            console.warn("[IosSafariDubbingAudioService] audio load after acquire failed:", o)
        }
        return n
    }
    firstUnlockedAudioElement() {
        for (const t of this.unlockedAudioElements) return t
    }
    release(t) {
        const e = this.unlockedAudioElements.has(t) && this.availableAudioElements.length < ft;
        t.pause(), t.removeAttribute("src");
        try {
            t.load()
        } catch (i) {
            console.warn("[IosSafariDubbingAudioService] audio release load failed:", i)
        }
        e && !this.availableAudioElements.includes(t) && this.availableAudioElements.push(t)
    }
    reset() {
        for (const t of this.availableAudioElements) {
            t.pause(), t.removeAttribute("src");
            try {
                t.load()
            } catch (e) {
                console.warn("[IosSafariDubbingAudioService] audio pool reset failed:", e)
            }
        }
        this.availableAudioElements.length = 0, this.unlockedAudioElements.clear(), this.prewarmPromise = void 0
    }
    prewarmOne(t, e) {
        const i = Zi(),
            n = new Audio(i.src);
        return n.preload = "auto", n.volume = .01, new Promise(o => {
            let l = !1;
            const c = () => {
                    l || (l = !0, n.removeEventListener("playing", d), n.removeEventListener("error", _), setTimeout(() => {
                        n.pause(), n.removeAttribute("src"), n.volume = 1;
                        try {
                            n.load()
                        } catch (r) {
                            console.warn("[IosSafariDubbingAudioService] warmup audio cleanup failed:", r)
                        }
                        i.revoke(), this.unlockedAudioElements.add(n), this.availableAudioElements.push(n), o()
                    }, 100))
                },
                h = () => {
                    if (!l) {
                        l = !0, n.removeEventListener("playing", d), n.removeEventListener("error", _), n.pause(), n.removeAttribute("src");
                        try {
                            n.load()
                        } catch (r) {
                            console.warn("[IosSafariDubbingAudioService] warmup audio reject cleanup failed:", r)
                        }
                        i.revoke(), o()
                    }
                },
                d = () => c(),
                _ = () => h();
            n.addEventListener("playing", d, {
                once: !0
            }), n.addEventListener("error", _, {
                once: !0
            });
            try {
                const r = n.play();
                r !== void 0 && r.then(() => c()).catch(() => h())
            } catch {
                h()
            }
        })
    }
}
function Zi() {
    if (typeof Blob > "u" || typeof URL > "u" || typeof URL.createObjectURL != "function") return {
        src: Wi,
        revoke: () => {}
    };
    const u = 8e3,
        e = Math.max(1, Math.floor(u * 120 / 1e3)),
        i = 2,
        n = e * i,
        o = new ArrayBuffer(44 + n),
        l = new DataView(o);
    ke(l, 0, "RIFF"), l.setUint32(4, 36 + n, !0), ke(l, 8, "WAVE"), ke(l, 12, "fmt "), l.setUint32(16, 16, !0), l.setUint16(20, 1, !0), l.setUint16(22, 1, !0), l.setUint32(24, u, !0), l.setUint32(28, u * i, !0), l.setUint16(32, i, !0), l.setUint16(34, 16, !0), ke(l, 36, "data"), l.setUint32(40, n, !0);
    const c = URL.createObjectURL(new Blob([o], {
        type: "audio/wav"
    }));
    return {
        src: c,
        revoke: () => URL.revokeObjectURL(c)
    }
}
function ke(u, t, e) {
    for (let i = 0; i < e.length; i++) u.setUint8(t + i, e.charCodeAt(i))
}
const ht = new Yi;
class qi {
    constructor(t, e) {
        b(this, "audio");
        b(this, "handleLoadError");
        b(this, "handlePlayError");
        b(this, "handleReady");
        b(this, "handleEnded");
        this.audio = ht.acquire(t), this.audio.preload = "auto", this.handleLoadError = () => {
            e.onLoadError(this.audio.error)
        }, this.handlePlayError = i => {
            e.onPlayError(i)
        }, this.handleReady = () => {
            e.onReady()
        }, this.handleEnded = () => {
            e.onEnd()
        }, this.audio.addEventListener("error", this.handleLoadError, {
            once: !0
        }), this.audio.addEventListener("playerror", this.handlePlayError, {
            once: !0
        }), this.audio.addEventListener("loadedmetadata", this.handleReady, {
            once: !0
        }), this.audio.addEventListener("ended", this.handleEnded, {
            once: !0
        })
    }
    play() {
        this.playNativeAudio()
    }
    resume() {
        this.playNativeAudio()
    }
    pause() {
        this.audio.pause()
    }
    stop() {
        this.audio.pause(), this.seek(0)
    }
    unload() {
        this.removeListeners(), ht.release(this.audio)
    }
    isPlaying() {
        return !this.audio.paused && !this.audio.ended
    }
    seek(t) {
        if (t !== void 0 && Number.isFinite(t)) try {
            this.audio.currentTime = t
        } catch (e) {
            console.warn("[IosSafariDubbingAudioService] audio seek failed:", e)
        }
        return this.audio.currentTime || 0
    }
    duration() {
        return this.audio.duration || 0
    }
    rate(t) {
        return t !== void 0 && Number.isFinite(t) && (this.audio.playbackRate = t), this.audio.playbackRate || 1
    }
    volume(t) {
        try {
            this.audio.volume = t
        } catch (e) {
            console.warn("[IosSafariDubbingAudioService] audio volume update failed:", e)
        }
    }
    state() {
        return this.audio.error ? "error" : this.audio.readyState >= 1 ? "loaded" : "loading"
    }
    playNativeAudio() {
        const t = this.audio.play();
        t !== void 0 && t.catch(e => {
            this.audio.error || this.handlePlayError(e)
        })
    }
    removeListeners() {
        this.audio.removeEventListener("error", this.handleLoadError), this.audio.removeEventListener("playerror", this.handlePlayError), this.audio.removeEventListener("loadedmetadata", this.handleReady), this.audio.removeEventListener("ended", this.handleEnded)
    }
}
const z = class z {
    constructor(t, e, i, n, o, l, c = {}) {
        b(this, "subtitleTrack");
        b(this, "currentPlayingSubtitleMap", new Map);
        b(this, "dubbingAudioService", ji());
        b(this, "emitter", Rr());
        b(this, "onTimeUpdateHandler", this.onTimeUpdate.bind(this));
        b(this, "onPauseHandler", this.onPause.bind(this));
        b(this, "onSeekingHandler", this.onSeeking.bind(this));
        b(this, "onSeekedHandler", this.onSeeked.bind(this));
        b(this, "onPlayingHandler", this.onPlaying.bind(this));
        b(this, "onWaitingHandler", this.onWaiting.bind(this));
        b(this, "onVolumeChangeHandler", this.onVolumeChange.bind(this));
        b(this, "onRateChangeHandler", this.onRateChange.bind(this));
        b(this, "stop", !1);
        b(this, "firstPlaySubtitle", !0);
        b(this, "getAdTimeOffset", () => {
            if (this.rule.site !== "youtube" || this.metadata.duration === 0 || Number.isNaN(this.metadata.duration) || !X.isFinite(this.metadata.duration)) return 0;
            const t = this.media.duration - this.metadata.duration;
            return t < 1 || !X.isFinite(t) ? 0 : t
        });
        b(this, "rateAdjuster");
        b(this, "currentSubtitleIndex", 0);
        b(this, "originPlaybackRate", 1);
        b(this, "pendingPlayQueue", []);
        b(this, "subtitleProcessingPipeline");
        b(this, "videoVolumeControl");
        b(this, "isSeeked", !1);
        b(this, "isSeekingForUpdate", !1);
        b(this, "queue", new Ui({
            concurrency: 1
        }));
        b(this, "hasMembershipValue");
        b(this, "useSubtitleOverlay");
        b(this, "subtitleOverlay");
        if (this.metadata = t, this.media = e, this.isMember = i, this.rule = o, this.hasMembershipValue = n, this.useSubtitleOverlay = e instanceof HTMLVideoElement && !j.isIos(), this.subtitleTrack = e.addTextTrack("subtitles", "youtube-dubbing", A.toLanguage), this.useSubtitleOverlay && e instanceof HTMLVideoElement) {
            const h = c.createSubtitleOverlayRenderer ?? (d => new Xe(d));
            this.subtitleOverlay = h(e)
        }
        this.ensureSubtitleTrackMode(), this.updateSubtitleStyle(), l ? this.media.playbackRate = l : o.startResetPlaybackRate ? this.media.playbackRate = 1 : this.media.playbackRate < 1 && (this.media.playbackRate = 1), this.originPlaybackRate = this.media.playbackRate, K(this.media).on("pause", this.onPauseHandler).on("timeupdate", this.onTimeUpdateHandler).on("seeking", this.onSeekingHandler).on("seeked", this.onSeekedHandler).on("playing", this.onPlayingHandler).on("waiting", this.onWaitingHandler).on("volumechange", this.onVolumeChangeHandler).on("ratechange", this.onRateChangeHandler), this.videoVolumeControl = this.initVideoVolumeControl()
    }
    initVideoVolumeControl() {
        return A.videoVolumeControlModel ? this.metadata.backgroundMusicUrl ? new Lr(this.metadata.backgroundMusicUrl, this.media, this.getCurrentTime.bind(this), this.rule) : new Hi(this.media, this.metadata, this.findCurrentSubtitle.bind(this), this.rule) : new Cr(this.media, this.rule)
    }
    reInitVideoVolumeControl() {
        this.videoVolumeControl && (this.videoVolumeControl.terminate(), this.videoVolumeControl = void 0), this.videoVolumeControl = this.initVideoVolumeControl()
    }
    findCurrentSubtitle() {
        if (this.recalculateCurrentSubtitleIndex(), this.currentSubtitleIndex >= 0 && this.currentSubtitleIndex < this.metadata.subtitles.length) {
            const t = this.metadata.subtitles[this.currentSubtitleIndex],
                e = this.getCurrentTime();
            if (e >= t.start && e <= t.end) return t
        }
    }
    recalculateCurrentSubtitleIndex() {
        this.currentSubtitleIndex = this.findCurrentSubtitleIndex()
    }
    async destroy(t) {
        var e, i, n;
        if (this.stop = !0, this.subtitleTrack.cues)
            for (; this.subtitleTrack.cues.length > 0;) this.subtitleTrack.removeCue(this.subtitleTrack.cues[0]);
        (e = this.subtitleOverlay) == null || e.destroy(), this.subtitleTrack.mode = "disabled", K(this.media).off("pause", this.onPauseHandler).off("timeupdate", this.onTimeUpdateHandler).off("seeking", this.onSeekingHandler).off("seeked", this.onSeekedHandler).off("playing", this.onPlayingHandler).off("waiting", this.onWaitingHandler).off("volumechange", this.onVolumeChangeHandler).off("ratechange", this.onRateChangeHandler), this.stopAllCurrentDubbing(), this.queue.clear(), this.media.playbackRate = this.originPlaybackRate, t ? this.clearAllAudiosAndTranslation() : this.clearAllAudios(), (i = this.videoVolumeControl) == null || i.terminate(), await ((n = this.subtitleProcessingPipeline) == null ? void 0 : n.stop()), await this.queue.onIdle()
    }
    getMetadata() {
        return this.metadata
    }
    hasMembership() {
        return this.hasMembershipValue
    }
    clearAllAudios() {
        for (let t of this.metadata.subtitles) {
            if (t.audioId = void 0, t.id = void 0, t.segments) {
                for (const e of t.segments) e.audioBlobUrl && URL.revokeObjectURL(e.audioBlobUrl), e.audioUrl = void 0;
                t.segments = void 0
            }
            t.audioBlobUrl && (URL.revokeObjectURL(t.audioBlobUrl), t.audioBlobUrl = void 0), t.audioUrl = void 0
        }
    }
    clearAllAudiosAndTranslation() {
        for (let t of this.metadata.subtitles) {
            if (t.audioId = void 0, t.id = void 0, t.googleTranslation = void 0, t.aiTranslation = void 0, t.segments) {
                for (const e of t.segments) e.audioBlobUrl && URL.revokeObjectURL(e.audioBlobUrl), e.audioUrl = void 0;
                t.segments = void 0
            }
            t.audioBlobUrl && (URL.revokeObjectURL(t.audioBlobUrl), t.audioBlobUrl = void 0), t.audioUrl = void 0
        }
    }
    isPlaybackSpeedChangedByUser() {
        if (this.rateAdjuster) return this.rateAdjuster.isPlaybackSpeedChangedByUser(this.media);
        const t = this.media.playbackRate.toString();
        return this.media.playbackRate === 1 || t.length <= 4
    }
    onRateChange() {
        this.stop || this.currentPlayingSubtitleMap.size !== 0 && (!this.isPlaybackSpeedChangedByUser() || this.media.playbackRate === 0 || (this.originPlaybackRate = this.media.playbackRate, this.synchronizeVideoAndDubbingSpeed()))
    }
    synchronizeVideoAndDubbingSpeed() {
        this.rateAdjuster = Tr(this.currentPlayingSubtitleMap.size, new kr, new Er, this.rule);
        const t = new Map;
        for (let e of this.currentPlayingSubtitleMap) e[1].state() === "loaded" && t.set(e[0], e[1]);
        t.size > 0 && this.rateAdjuster.adjusterPlaybackRate(t, this.media, this.originPlaybackRate, this.getCurrentTime())
    }
    updateSubtitleDisplay() {
        var t, e, i;
        if (this.updateSubtitleContent(), this.useSubtitleOverlay) {
            this.subtitleTrack.mode = "hidden", (t = this.subtitleOverlay) == null || t.syncTrack(this.subtitleTrack), (e = this.subtitleOverlay) == null || e.setVisible(A.showSubtitle), (i = this.subtitleOverlay) == null || i.setCurrentTime(this.media.currentTime);
            return
        }
        A.showSubtitle ? this.subtitleTrack.mode = "showing" : this.subtitleTrack.mode = "hidden"
    }
    updateSubtitleContent() {
        var t, e, i, n, o;
        Ci(this.subtitleTrack, ((t = this.metadata) == null ? void 0 : t.subtitles) || [], A.bilingualSubtitleEnabled, A.bilingualSubtitleStyle), this.useSubtitleOverlay && ((e = this.subtitleOverlay) == null || e.reset(), (i = this.subtitleOverlay) == null || i.syncTrack(this.subtitleTrack), (n = this.subtitleOverlay) == null || n.setCurrentTime(this.media.currentTime), (o = this.subtitleOverlay) == null || o.forceRender(), this.updateSubtitleStyle())
    }
    ensureSubtitleTrackMode() {
        if (this.useSubtitleOverlay) {
            this.subtitleTrack.mode !== "hidden" && (this.subtitleTrack.mode = "hidden");
            return
        }
        A.showSubtitle ? this.subtitleTrack.mode !== "showing" && (this.subtitleTrack.mode = "showing") : this.subtitleTrack.mode !== "hidden" && (this.subtitleTrack.mode = "hidden")
    }
    updateSubtitleSize() {
        this.updateSubtitleStyle()
    }
    updateSubtitleStyle() {
        var i, n, o, l, c;
        K(`#${z.SUBTITLE_STYLE_ID}`).remove();
        const t = A.bilingualSubtitleEnabled === !0;
        if (this.useSubtitleOverlay) {
            (i = this.subtitleOverlay) == null || i.syncTrack(this.subtitleTrack), (n = this.subtitleOverlay) == null || n.applyStyle(A.subtitleStyle, A.subtitleSize, {
                bilingualEnabled: t,
                bilingualStyle: A.bilingualSubtitleStyle
            }), (o = this.subtitleOverlay) == null || o.setVisible(A.showSubtitle), this.applyCuePosition(), (l = this.subtitleOverlay) == null || l.setCurrentTime(this.media.currentTime), (c = this.subtitleOverlay) == null || c.forceRender();
            return
        }
        const e = t ? gr({
            subtitleStyle: A.subtitleStyle,
            subtitleSize: A.subtitleSize,
            bilingualStyle: A.bilingualSubtitleStyle,
            cueClassName: z.CUE_STYLE_CLASS
        }) : _r(A.subtitleStyle, A.subtitleSize, z.CUE_STYLE_CLASS);
        K("<style>").attr("id", z.SUBTITLE_STYLE_ID).html(e).appendTo("head"), this.applyCuePosition()
    }
    applyCuePosition() {
        if (!this.subtitleTrack.cues) return;
        const t = bt(A.subtitleStyle);
        for (let e = 0; e < this.subtitleTrack.cues.length; e++) {
            const i = this.subtitleTrack.cues[e];
            i instanceof VTTCue && (i.snapToLines = !1, i.line = t.line, i.lineAlign = t.lineAlign)
        }
    }
    updateCurrentDubbingVolume() {
        for (let [t, e] of this.currentPlayingSubtitleMap.entries()) e.volume(A.translationVolume)
    }
    onVolumeChange() {
        var t;
        this.stop || (t = this.videoVolumeControl) == null || t.updateVideoOriginVolume()
    }
    onWaiting() {
        this.stop || this.isCurrentTimeInPlayingSubtitles() || (this.isSeekingForUpdate || Be.show(this.media), this.pauseAllCurrentDubbing())
    }
    onPause() {
        if (this.stop || this.media.ended) return;
        const t = this.getCurrentTime();
        this.currentSubtitleIndex >= 0 && this.currentSubtitleIndex < this.metadata.subtitles.length && !this.isSubtitleAudioReady(t) && Be.show(this.media), this.pauseAllCurrentDubbing()
    }
    onPlaying() {
        var t, e;
        this.stop || (Be.remove(), (t = this.videoVolumeControl) == null || t.updateVideoOriginVolume(), this.resumeAllCurrentDubbing(), (e = this.videoVolumeControl) == null || e.updateVideoOriginVolume())
    }
    pauseAllCurrentDubbing() {
        for (let [t, e] of this.currentPlayingSubtitleMap.entries()) e !== void 0 && e.isPlaying() && e.pause()
    }
    resumeAllCurrentDubbing() {
        for (let [t, e] of this.currentPlayingSubtitleMap.entries()) e !== void 0 && (e.isPlaying() || e.resume())
    }
    stopAllCurrentDubbing() {
        try {
            for (let [t, e] of this.currentPlayingSubtitleMap.entries()) e.stop(), e.unload()
        } finally {
            this.currentPlayingSubtitleMap.clear(), this.pendingPlayQueue = []
        }
    }
    onTimeUpdate() {
        var i, n, o;
        const t = this.metadata.subtitles;
        if (this.isSeekingForUpdate || this.stop || !X.isFinite(this.media.currentTime) || (this.ensureSubtitleTrackMode(), this.useSubtitleOverlay && ((i = this.subtitleOverlay) == null || i.syncTrack(this.subtitleTrack), (n = this.subtitleOverlay) == null || n.setVisible(A.showSubtitle), (o = this.subtitleOverlay) == null || o.setCurrentTime(this.media.currentTime)), this.currentSubtitleIndex === t.length - 1 || this.currentSubtitleIndex < 0)) return;
        const e = this.getCurrentTime();
        this.isSubtitleAudioReady(e) || this.mediaPause()
    }
    mediaPause() {
        this.media.pause()
    }
    isSubtitleAudioReady(t) {
        if (this.recalculateCurrentSubtitleIndex(), this.currentSubtitleIndex < 0) return !0;
        const e = this.metadata.subtitles;
        for (; this.currentSubtitleIndex < e.length && t >= e[this.currentSubtitleIndex].start;) {
            const i = e[this.currentSubtitleIndex],
                n = i.parentSubtitle || i;
            if (!n.audioBlobUrl && !n.audioUrl && !n.id && !n.audioUrl || !n.audioUrl && !n.audioBlobUrl) return !1;
            this.currentSubtitleIndex++
        }
        return !0
    }
    onSeeking() {
        this.stop || this.isCurrentTimeInPlayingSubtitles() || (this.isSeeked = !0, this.isSeekingForUpdate = !0, this.stopAllCurrentDubbing(), this.resetVideoPlaybackRate(), this.queue.clear())
    }
    async onSeeked() {
        if (this.stop) return;
        if (this.isCurrentTimeInPlayingSubtitles()) {
            this.isSeekingForUpdate = !1, this.isSeeked = !1;
            return
        }
        this.isSeekingForUpdate = !1, await this.start().catch(e => console.error(e))
    }
    resetVideoPlaybackRate() {
        this.originPlaybackRate <= 1.998 ? this.media.playbackRate = this.originPlaybackRate + .001 : this.media.playbackRate = this.originPlaybackRate - .001
    }
    async start() {
        this.stop || (this.queue.clear(), await this.queue.add(async () => {
            if (!this.stop && (this.subtitleProcessingPipeline && await this.subtitleProcessingPipeline.stop(), !this.stop && X.isFinite(this.getCurrentTime()) && (this.recalculateCurrentSubtitleIndex(), !this.stop))) {
                if (this.currentSubtitleIndex >= 0 && this.currentSubtitleIndex < this.metadata.subtitles.length) {
                    this.subtitleProcessingPipeline = new Ri(this.metadata, this.subtitleTrack, this.getAdTimeOffset.bind(this), this.onCueEnter.bind(this), this.findCurrentSubtitleIndex.bind(this));
                    const t = await this.subtitleProcessingPipeline.processNextBatch(this.currentSubtitleIndex);
                    if (t === -1 || this.stop || (this.subtitleProcessingPipeline.start(t).catch(e => {
                            e.message !== "stop" && console.error("Failed to start subtitle processing pipeline:", e)
                        }), this.stop)) return
                }
                await this.media.play()
            }
        }))
    }
    findCurrentSubtitleIndex() {
        const t = this.getCurrentTime(),
            e = this.metadata.subtitles;
        if (!e || e.length === 0) return -1;
        const i = X.sortedLastIndexBy(e, {
            start: t
        }, "start");
        for (let n = 0; n < i; n++) {
            const o = e[n];
            if (t >= o.start && t <= o.end) return n
        }
        if (i < e.length) {
            const n = e[i];
            return t >= n.start && t <= n.end, i
        }
        return -1
    }
    getCurrentTime() {
        return this.media.currentTime - this.getAdTimeOffset()
    }
    isSeek() {
        return this.media.seeking || this.isSeeked
    }
    isCurrentTimeInPlayingSubtitles() {
        if (this.currentPlayingSubtitleMap.size === 0) return !1;
        const t = this.getCurrentTime();
        for (const [e, i] of this.currentPlayingSubtitleMap)
            if (t < e.start || t > e.end) return !1;
        return !0
    }
    onCueEnter(t, e, i = !1) {
        var h;
        if (this.stop) return !1;
        this.emitter.emit("subtitleEnter");
        const n = this.isSeek();
        n && (this.isSeeked = !1, this.isSeekingForUpdate = !1);
        let o = ((h = this.subtitleTrack.activeCues) == null ? void 0 : h.length) ?? 0;
        const l = this.getPlaybackTargetSubtitle(t);
        if (this.currentPlayingSubtitleMap.size > 0)
            for (let d of this.currentPlayingSubtitleMap) {
                let _ = d[0];
                if (this.isSamePlaybackTarget(_, l)) return !1
            }
        return o <= 1 && (this.currentPlayingSubtitleMap.size > 0 || !i && this.pendingPlayQueue.length > 0) ? (this.addToPendingPlayQueue(t), !1) : (this.firstPlaySubtitle && (this.firstPlaySubtitle = !1, e = !1), e === void 0 && (e = !n), t.parentSubtitle ? e ? (t.start === t.parentSubtitle.start && this.playSubtitle(t.parentSubtitle, !0, !0), !0) : (this.playSubtitle(t.parentSubtitle, !1, !0), !0) : (this.playSubtitle(t, e), !0))
    }
    getPlaybackTargetSubtitle(t) {
        return t.parentSubtitle ?? t
    }
    isSamePlaybackTarget(t, e) {
        const i = this.getPlaybackTargetSubtitle(t),
            n = this.getPlaybackTargetSubtitle(e);
        return i === n || !!(i.id && n.id && i.id === n.id)
    }
    addToPendingPlayQueue(t) {
        const e = this.getPlaybackTargetSubtitle(t);
        this.pendingPlayQueue.some(n => n !== void 0 && this.isSamePlaybackTarget(n, e)) || this.pendingPlayQueue.push(t)
    }
    playSubtitle(t, e, i = !0) {
        if (this.stop) return;
        this.media.paused && this.media.play().catch(l => console.error("Failed to play audio:", l.name ?? l.message));
        const n = i && t.audioBlobUrl ? t.audioBlobUrl : t.audioUrl;
        if (!n) {
            console.warn("[RealtimeDubbingEngine] skip subtitle without playable audio source:", t.id);
            return
        }
        let o;
        o = this.dubbingAudioService.create(n, {
            onLoadError: l => this.onLoadError(t, i, l),
            onPlayError: l => {
                this.stop || (console.error(`[RealtimeDubbingEngine] playerror - subtitle id: ${t.id}, error:`, l), this.cleanupFailedAudio(t, o, `playerror: ${l}`))
            },
            onReady: () => {
                try {
                    this.onAudioLoadedMetadata(t, e, o)
                } catch (l) {
                    console.error("[RealtimeDubbingEngine] play event - Error in onAudioLoadedMetadata:", l), this.cleanupFailedAudio(t, o, `play-event-error: ${l}`)
                }
            },
            onEnd: () => {
                this.onAudioEnd(t, o)
            }
        }), this.currentPlayingSubtitleMap.set(t, o), o.volume(A.translationVolume), o.play()
    }
    onLoadError(t, e, i) {
        if (!this.stop)
            if (e) {
                console.warn("[RealtimeDubbingEngine] onLoadError - Retrying with audioUrl for subtitle:", t.id, i);
                const n = this.currentPlayingSubtitleMap.get(t);
                n && this.cleanupFailedAudio(t, n, "loaderror-retry"), this.playSubtitle(t, !0, !1)
            } else {
                console.error("[RealtimeDubbingEngine] onLoadError - Failed to load audio after retry, giving up on subtitle:", t.id, i);
                const n = this.currentPlayingSubtitleMap.get(t);
                n && this.cleanupFailedAudio(t, n, "loaderror-final")
            }
    }
    cleanupFailedAudio(t, e, i) {
        if (!this.stop) {
            console.error(`[RealtimeDubbingEngine] cleanupFailedAudio - Cleaning up failed audio, reason: ${i}, subtitle id: ${t.id}`);
            try {
                if (this.currentPlayingSubtitleMap.delete(t), e) {
                    try {
                        e.isPlaying() && e.stop()
                    } catch (n) {
                        console.warn("[RealtimeDubbingEngine] cleanupFailedAudio - Error stopping audio:", n)
                    }
                    try {
                        e.unload()
                    } catch (n) {
                        console.warn("[RealtimeDubbingEngine] cleanupFailedAudio - Error unloading audio:", n)
                    }
                }
                this.currentPlayingSubtitleMap.size === 0 && this.emitter.emit("subtitleExit"), this.resetVideoPlaybackRate(), this.processPendingQueue()
            } catch (n) {
                console.error("[RealtimeDubbingEngine] cleanupFailedAudio - Cleanup error:", n)
            }
        }
    }
    onAudioEnd(t, e) {
        if (!this.stop) try {
            this.currentPlayingSubtitleMap.delete(t), e.unload(), this.currentPlayingSubtitleMap.size === 0 && this.emitter.emit("subtitleExit"), this.resetVideoPlaybackRate(), this.processPendingQueue()
        } catch (i) {
            console.error("[RealtimeDubbingEngine] onAudioEnd - error:", i)
        }
    }
    onAudioLoadedMetadata(t, e, i) {
        if (!this.stop) try {
            if (this.currentPlayingSubtitleMap.set(t, i), this.synchronizeVideoAndDubbingSpeed(), !e) {
                const n = this.calculateAudioStartTime(t, i);
                i.seek(n)
            }
        } catch (n) {
            console.error("[RealtimeDubbingEngine] onAudioLoadedMetadata - error:", n), this.cleanupFailedAudio(t, i, `metadata-error: ${n}`)
        }
    }
    calculateAudioStartTime(t, e) {
        const i = this.getCurrentTime();
        if (i - t.start < 1 || i < t.start || i > t.end) return 0;
        const o = e.duration(),
            l = e.rate();
        let c = t.end;
        t.segments && t.segments.length > 0 && (c = t.segments[t.segments.length - 1].end);
        const h = c - i;
        let d = o - h * l;
        return d = Math.max(0, Math.min(d, o)), isFinite(d) ? d : 0
    }
    processPendingQueue() {
        const t = this.pendingPlayQueue.length;
        for (let e = 0; e < t; e++) {
            const i = this.pendingPlayQueue[e];
            this.pendingPlayQueue[e] = void 0, i && this.onCueEnter(i, !0, !0)
        }
        this.pendingPlayQueue = this.pendingPlayQueue.filter(e => e !== void 0)
    }
};
b(z, "SUBTITLE_STYLE_ID", "subtitle-style"), b(z, "CUE_STYLE_CLASS", "youtube-dubbing-cue");
let pt = z;
export {
    pt as
    default
};
