var iosinjectscript = function() {
    "use strict";
    var Sc = Object.defineProperty;
    var _c = (ke, Se, Be) => Se in ke ? Sc(ke, Se, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Be
    }) : ke[Se] = Be;
    var $t = (ke, Se, Be) => _c(ke, typeof Se != "symbol" ? Se + "" : Se, Be);

    function ke(e) {
        return e == null || typeof e == "function" ? {
            main: e
        } : e
    }
    var Se = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function Be(e) {
        if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
        var t = e.default;
        if (typeof t == "function") {
            var r = function n() {
                return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
            };
            r.prototype = t.prototype
        } else r = {};
        return Object.defineProperty(r, "__esModule", {
            value: !0
        }), Object.keys(e).forEach(function(n) {
            var o = Object.getOwnPropertyDescriptor(e, n);
            Object.defineProperty(r, n, o.get ? o : {
                enumerable: !0,
                get: function() {
                    return e[n]
                }
            })
        }), r
    }
    var Z = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof global < "u" && global || {},
        ie = {
            searchParams: "URLSearchParams" in Z,
            iterable: "Symbol" in Z && "iterator" in Symbol,
            blob: "FileReader" in Z && "Blob" in Z && function() {
                try {
                    return new Blob, !0
                } catch {
                    return !1
                }
            }(),
            formData: "FormData" in Z,
            arrayBuffer: "ArrayBuffer" in Z
        };

    function Xi(e) {
        return e && DataView.prototype.isPrototypeOf(e)
    }
    if (ie.arrayBuffer) var Ji = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
        Yi = ArrayBuffer.isView || function(e) {
            return e && Ji.indexOf(Object.prototype.toString.call(e)) > -1
        };

    function ze(e) {
        if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "") throw new TypeError('Invalid character in header field name: "' + e + '"');
        return e.toLowerCase()
    }

    function Lt(e) {
        return typeof e != "string" && (e = String(e)), e
    }

    function Dt(e) {
        var t = {
            next: function() {
                var r = e.shift();
                return {
                    done: r === void 0,
                    value: r
                }
            }
        };
        return ie.iterable && (t[Symbol.iterator] = function() {
            return t
        }), t
    }

    function X(e) {
        this.map = {}, e instanceof X ? e.forEach(function(t, r) {
            this.append(r, t)
        }, this) : Array.isArray(e) ? e.forEach(function(t) {
            if (t.length != 2) throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + t.length);
            this.append(t[0], t[1])
        }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
            this.append(t, e[t])
        }, this)
    }
    X.prototype.append = function(e, t) {
        e = ze(e), t = Lt(t);
        var r = this.map[e];
        this.map[e] = r ? r + ", " + t : t
    }, X.prototype.delete = function(e) {
        delete this.map[ze(e)]
    }, X.prototype.get = function(e) {
        return e = ze(e), this.has(e) ? this.map[e] : null
    }, X.prototype.has = function(e) {
        return this.map.hasOwnProperty(ze(e))
    }, X.prototype.set = function(e, t) {
        this.map[ze(e)] = Lt(t)
    }, X.prototype.forEach = function(e, t) {
        for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
    }, X.prototype.keys = function() {
        var e = [];
        return this.forEach(function(t, r) {
            e.push(r)
        }), Dt(e)
    }, X.prototype.values = function() {
        var e = [];
        return this.forEach(function(t) {
            e.push(t)
        }), Dt(e)
    }, X.prototype.entries = function() {
        var e = [];
        return this.forEach(function(t, r) {
            e.push([r, t])
        }), Dt(e)
    }, ie.iterable && (X.prototype[Symbol.iterator] = X.prototype.entries);

    function Ut(e) {
        if (!e._noBody) {
            if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0
        }
    }

    function _n(e) {
        return new Promise(function(t, r) {
            e.onload = function() {
                t(e.result)
            }, e.onerror = function() {
                r(e.error)
            }
        })
    }

    function Zi(e) {
        var t = new FileReader,
            r = _n(t);
        return t.readAsArrayBuffer(e), r
    }

    function ea(e) {
        var t = new FileReader,
            r = _n(t),
            n = /charset=([A-Za-z0-9_-]+)/.exec(e.type),
            o = n ? n[1] : "utf-8";
        return t.readAsText(e, o), r
    }

    function ta(e) {
        for (var t = new Uint8Array(e), r = new Array(t.length), n = 0; n < t.length; n++) r[n] = String.fromCharCode(t[n]);
        return r.join("")
    }

    function En(e) {
        if (e.slice) return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)), t.buffer
    }

    function An() {
        return this.bodyUsed = !1, this._initBody = function(e) {
            this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : ie.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : ie.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : ie.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : ie.arrayBuffer && ie.blob && Xi(e) ? (this._bodyArrayBuffer = En(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : ie.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || Yi(e)) ? this._bodyArrayBuffer = En(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : ie.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, ie.blob && (this.blob = function() {
            var e = Ut(this);
            if (e) return e;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }), this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
                var e = Ut(this);
                return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
            } else {
                if (ie.blob) return this.blob().then(Zi);
                throw new Error("could not read as ArrayBuffer")
            }
        }, this.text = function() {
            var e = Ut(this);
            if (e) return e;
            if (this._bodyBlob) return ea(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(ta(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }, ie.formData && (this.formData = function() {
            return this.text().then(oa)
        }), this.json = function() {
            return this.text().then(JSON.parse)
        }, this
    }
    var ra = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];

    function na(e) {
        var t = e.toUpperCase();
        return ra.indexOf(t) > -1 ? t : e
    }

    function Pe(e, t) {
        if (!(this instanceof Pe)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        t = t || {};
        var r = t.body;
        if (e instanceof Pe) {
            if (e.bodyUsed) throw new TypeError("Already read");
            this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new X(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !r && e._bodyInit != null && (r = e._bodyInit, e.bodyUsed = !0)
        } else this.url = String(e);
        if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new X(t.headers)), this.method = na(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
                if ("AbortController" in Z) {
                    var i = new AbortController;
                    return i.signal
                }
            }(), this.referrer = null, (this.method === "GET" || this.method === "HEAD") && r) throw new TypeError("Body not allowed for GET or HEAD requests");
        if (this._initBody(r), (this.method === "GET" || this.method === "HEAD") && (t.cache === "no-store" || t.cache === "no-cache")) {
            var n = /([?&])_=[^&]*/;
            if (n.test(this.url)) this.url = this.url.replace(n, "$1_=" + new Date().getTime());
            else {
                var o = /\?/;
                this.url += (o.test(this.url) ? "&" : "?") + "_=" + new Date().getTime()
            }
        }
    }
    Pe.prototype.clone = function() {
        return new Pe(this, {
            body: this._bodyInit
        })
    };

    function oa(e) {
        var t = new FormData;
        return e.trim().split("&").forEach(function(r) {
            if (r) {
                var n = r.split("="),
                    o = n.shift().replace(/\+/g, " "),
                    i = n.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(o), decodeURIComponent(i))
            }
        }), t
    }

    function ia(e) {
        var t = new X,
            r = e.replace(/\r?\n[\t ]+/g, " ");
        return r.split("\r").map(function(n) {
            return n.indexOf(`
`) === 0 ? n.substr(1, n.length) : n
        }).forEach(function(n) {
            var o = n.split(":"),
                i = o.shift().trim();
            if (i) {
                var a = o.join(":").trim();
                try {
                    t.append(i, a)
                } catch (s) {
                    console.warn("Response " + s.message)
                }
            }
        }), t
    }
    An.call(Pe.prototype);

    function me(e, t) {
        if (!(this instanceof me)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        if (t || (t = {}), this.type = "default", this.status = t.status === void 0 ? 200 : t.status, this.status < 200 || this.status > 599) throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
        this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText === void 0 ? "" : "" + t.statusText, this.headers = new X(t.headers), this.url = t.url || "", this._initBody(e)
    }
    An.call(me.prototype), me.prototype.clone = function() {
        return new me(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new X(this.headers),
            url: this.url
        })
    }, me.error = function() {
        var e = new me(null, {
            status: 200,
            statusText: ""
        });
        return e.ok = !1, e.status = 0, e.type = "error", e
    };
    var aa = [301, 302, 303, 307, 308];
    me.redirect = function(e, t) {
        if (aa.indexOf(t) === -1) throw new RangeError("Invalid status code");
        return new me(null, {
            status: t,
            headers: {
                location: e
            }
        })
    };
    var Ie = Z.DOMException;
    try {
        new Ie
    } catch {
        Ie = function(t, r) {
            this.message = t, this.name = r;
            var n = Error(t);
            this.stack = n.stack
        }, Ie.prototype = Object.create(Error.prototype), Ie.prototype.constructor = Ie
    }

    function Nt(e, t) {
        return new Promise(function(r, n) {
            var o = new Pe(e, t);
            if (o.signal && o.signal.aborted) return n(new Ie("Aborted", "AbortError"));
            var i = new XMLHttpRequest;

            function a() {
                i.abort()
            }
            i.onload = function() {
                var f = {
                    statusText: i.statusText,
                    headers: ia(i.getAllResponseHeaders() || "")
                };
                o.url.indexOf("file://") === 0 && (i.status < 200 || i.status > 599) ? f.status = 200 : f.status = i.status, f.url = "responseURL" in i ? i.responseURL : f.headers.get("X-Request-URL");
                var l = "response" in i ? i.response : i.responseText;
                setTimeout(function() {
                    r(new me(l, f))
                }, 0)
            }, i.onerror = function() {
                setTimeout(function() {
                    n(new TypeError("Network request failed"))
                }, 0)
            }, i.ontimeout = function() {
                setTimeout(function() {
                    n(new TypeError("Network request timed out"))
                }, 0)
            }, i.onabort = function() {
                setTimeout(function() {
                    n(new Ie("Aborted", "AbortError"))
                }, 0)
            };

            function s(f) {
                try {
                    return f === "" && Z.location.href ? Z.location.href : f
                } catch {
                    return f
                }
            }
            if (i.open(o.method, s(o.url), !0), o.credentials === "include" ? i.withCredentials = !0 : o.credentials === "omit" && (i.withCredentials = !1), "responseType" in i && (ie.blob ? i.responseType = "blob" : ie.arrayBuffer && (i.responseType = "arraybuffer")), t && typeof t.headers == "object" && !(t.headers instanceof X || Z.Headers && t.headers instanceof Z.Headers)) {
                var u = [];
                Object.getOwnPropertyNames(t.headers).forEach(function(f) {
                    u.push(ze(f)), i.setRequestHeader(f, Lt(t.headers[f]))
                }), o.headers.forEach(function(f, l) {
                    u.indexOf(l) === -1 && i.setRequestHeader(l, f)
                })
            } else o.headers.forEach(function(f, l) {
                i.setRequestHeader(l, f)
            });
            o.signal && (o.signal.addEventListener("abort", a), i.onreadystatechange = function() {
                i.readyState === 4 && o.signal.removeEventListener("abort", a)
            }), i.send(typeof o._bodyInit > "u" ? null : o._bodyInit)
        })
    }
    Nt.polyfill = !0, Z.fetch || (Z.fetch = Nt, Z.Headers = X, Z.Request = Pe, Z.Response = me);
    const sa = Be(Object.freeze(Object.defineProperty({
        __proto__: null,
        get DOMException() {
            return Ie
        },
        Headers: X,
        Request: Pe,
        Response: me,
        fetch: Nt
    }, Symbol.toStringTag, {
        value: "Module"
    })));
    var Ft, xn;

    function ua() {
        return xn || (xn = 1, Ft = function(e) {
            var t = {};

            function r(n) {
                if (t[n]) return t[n].exports;
                var o = t[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return e[n].call(o.exports, o, o.exports, r), o.loaded = !0, o.exports
            }
            return r.m = e, r.c = t, r.p = "", r(0)
        }([function(e, t, r) {
            var n = r(1),
                o = typeof importScripts == "function";
            e.exports = n(o ? self : window)
        }, function(e, t, r) {
            function n(a) {
                if (Array.isArray(a)) {
                    for (var s = 0, u = Array(a.length); s < a.length; s++) u[s] = a[s];
                    return u
                } else return Array.from(a)
            }
            var o = [];

            function i(a) {
                for (var s = arguments.length, u = Array(s > 1 ? s - 1 : 0), f = 1; f < s; f++) u[f - 1] = arguments[f];
                var l = o.reduce(function(v, c) {
                        return [c].concat(v)
                    }, []),
                    y = Promise.resolve(u);
                return l.forEach(function(v) {
                    var c = v.request,
                        d = v.requestError;
                    (c || d) && (y = y.then(function(h) {
                        return c.apply(void 0, n(h))
                    }, d))
                }), y = y.then(function(v) {
                    var c = new(Function.prototype.bind.apply(Request, [null].concat(n(v))));
                    return a(c).then(function(d) {
                        return d.request = c, d
                    }).catch(function(d) {
                        return d.request = c, Promise.reject(d)
                    })
                }), l.forEach(function(v) {
                    var c = v.response,
                        d = v.responseError;
                    (c || d) && (y = y.then(c, d))
                }), y
            }
            e.exports = function(s) {
                if (!s.fetch) try {
                    r(2)
                } catch {
                    throw Error("No fetch available. Unable to register fetch-intercept")
                }
                return s.fetch = function(u) {
                    return function() {
                        for (var f = arguments.length, l = Array(f), y = 0; y < f; y++) l[y] = arguments[y];
                        return i.apply(void 0, [u].concat(l))
                    }
                }(s.fetch), {
                    register: function(f) {
                        return o.push(f),
                            function() {
                                var l = o.indexOf(f);
                                l >= 0 && o.splice(l, 1)
                            }
                    },
                    clear: function() {
                        o = []
                    }
                }
            }
        }, function(e, t) {
            e.exports = sa
        }])), Ft
    }
    var ca = ua();
    const Rn = (e, t) => Array.prototype.slice.call(e, t);
    let at = null;
    typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? at = self : typeof global < "u" ? at = global : window && (at = window);
    const Ve = at,
        jt = at.document,
        On = ["load", "loadend", "loadstart"],
        kt = ["progress", "abort", "error", "timeout"],
        Tn = e => ["returnValue", "totalSize", "position"].includes(e),
        ht = function(e, t) {
            for (let r in e) {
                if (Tn(r)) continue;
                const n = e[r];
                try {
                    t[r] = n
                } catch {}
            }
            return t
        },
        Pn = function(e, t, r) {
            const n = o => function(i) {
                const a = {};
                for (let s in i) {
                    if (Tn(s)) continue;
                    const u = i[s];
                    a[s] = u === t ? r : u
                }
                return r.dispatchEvent(o, a)
            };
            for (let o of Array.from(e)) r._has(o) && (t[`on${o}`] = n(o))
        },
        fa = function(e) {
            if (jt && jt.createEventObject != null) {
                const t = jt.createEventObject();
                return t.type = e, t
            }
            try {
                return new Event(e)
            } catch {
                return {
                    type: e
                }
            }
        },
        mt = function(e) {
            let t = {};
            const r = o => t[o] || [],
                n = {};
            return n.addEventListener = function(o, i, a) {
                t[o] = r(o), !(t[o].indexOf(i) >= 0) && (a = a === void 0 ? t[o].length : a, t[o].splice(a, 0, i))
            }, n.removeEventListener = function(o, i) {
                if (o === void 0) {
                    t = {};
                    return
                }
                i === void 0 && (t[o] = []);
                const a = r(o).indexOf(i);
                a !== -1 && r(o).splice(a, 1)
            }, n.dispatchEvent = function() {
                const o = Rn(arguments),
                    i = o.shift();
                e || (o[0] = ht(o[0], fa(i)), Object.defineProperty(o[0], "target", {
                    writable: !1,
                    value: this
                }));
                const a = n[`on${i}`];
                a && a.apply(n, o);
                const s = r(i).concat(r("*"));
                for (let u = 0; u < s.length; u++) s[u].apply(n, o)
            }, n._has = o => !!(t[o] || n[`on${o}`]), e && (n.listeners = o => Rn(r(o)), n.on = n.addEventListener, n.off = n.removeEventListener, n.fire = n.dispatchEvent, n.once = function(o, i) {
                var a = function() {
                    return n.off(o, a), i.apply(null, arguments)
                };
                return n.on(o, a)
            }, n.destroy = () => t = {}), n
        },
        In = `\r
`,
        la = function(e) {
            return Object.entries(e).map(([n, o]) => `${n.toLowerCase()}: ${o}`).join(In)
        },
        da = function(e, t) {
            const r = e.split(In);
            t == null && (t = {});
            for (let n of r)
                if (/([^:]+):\s*(.+)/.test(n)) {
                    const o = RegExp.$1 != null ? RegExp.$1.toLowerCase() : void 0,
                        i = RegExp.$2;
                    t[o] == null && (t[o] = i)
                } return t
        };
    var Bt = {
        convert: function(e, t) {
            switch (typeof e) {
                case "object":
                    return la(e);
                case "string":
                    return da(e, t)
            }
            return []
        }
    };
    const st = mt(!0),
        Mn = e => e === void 0 ? null : e,
        ut = Ve.XMLHttpRequest,
        He = function() {
            const t = new ut,
                r = {};
            let n = null,
                o, i, a;
            var s = 0;
            const u = function() {
                    if (a.status = n || t.status, n !== -1 && (a.statusText = t.statusText), n !== -1) {
                        const p = Bt.convert(t.getAllResponseHeaders());
                        for (let g in p) {
                            const x = p[g];
                            if (!a.headers[g]) {
                                const A = g.toLowerCase();
                                a.headers[A] = x
                            }
                        }
                        return
                    }
                },
                f = function() {
                    if (!t.responseType || t.responseType === "text") {
                        a.text = t.responseText, a.data = t.responseText;
                        try {
                            a.xml = t.responseXML
                        } catch {}
                    } else t.responseType === "document" ? (a.xml = t.responseXML, a.data = t.responseXML) : a.data = t.response;
                    "responseURL" in t && (a.finalUrl = t.responseURL)
                },
                l = function() {
                    h.status = a.status, h.statusText = a.statusText
                },
                y = function() {
                    "text" in a && (h.responseText = a.text), "xml" in a && (h.responseXML = a.xml), "data" in a && (h.response = a.data), "finalUrl" in a && (h.responseURL = a.finalUrl)
                },
                v = function() {
                    o || h.dispatchEvent("load", {}), h.dispatchEvent("loadend", {}), o && (h.readyState = 0)
                },
                c = function(p) {
                    for (; p > s && s < 4;) h.readyState = ++s, s === 1 && h.dispatchEvent("loadstart", {}), s === 2 && l(), s === 4 && (l(), y()), h.dispatchEvent("readystatechange", {}), s === 4 && (r.async === !1 ? v() : setTimeout(v, 0))
                },
                d = function(p) {
                    if (p !== 4) {
                        c(p);
                        return
                    }
                    const g = st.listeners("after");
                    var x = function() {
                        if (g.length > 0) {
                            const A = g.shift();
                            A.length === 2 ? (A(r, a), x()) : A.length === 3 && r.async ? A(r, a, x) : x()
                        } else c(4)
                    };
                    x()
                };
            var h = mt();
            r.xhr = h, t.onreadystatechange = function(p) {
                try {
                    t.readyState === 2 && u()
                } catch {}
                t.readyState === 4 && (i = !1, u(), f()), d(t.readyState)
            };
            const m = function() {
                o = !0
            };
            h.addEventListener("error", m), h.addEventListener("timeout", m), h.addEventListener("abort", m), h.addEventListener("progress", function(p) {
                s < 3 ? d(3) : t.readyState <= 3 && h.dispatchEvent("readystatechange", {})
            }), "withCredentials" in t && (h.withCredentials = !1), h.status = 0;
            for (let p of Array.from(kt.concat(On))) h[`on${p}`] = null;
            if (h.open = function(p, g, x, A, P) {
                    s = 0, o = !1, i = !1, r.headers = {}, r.headerNames = {}, r.status = 0, r.method = p, r.url = g, r.async = x !== !1, r.user = A, r.pass = P, a = {}, a.headers = {}, d(1)
                }, h.send = function(p) {
                    let g, x;
                    for (g of ["type", "timeout", "withCredentials"]) x = g === "type" ? "responseType" : g, x in h && (r[g] = h[x]);
                    r.body = p;
                    const A = function() {
                            Pn(kt, t, h), h.upload && Pn(kt.concat(On), t.upload, h.upload), i = !0, t.open(r.method, r.url, r.async, r.user, r.pass);
                            for (g of ["type", "timeout", "withCredentials"]) x = g === "type" ? "responseType" : g, g in r && (t[x] = r[g]);
                            for (let S in r.headers) {
                                const E = r.headers[S];
                                S && t.setRequestHeader(S, E)
                            }
                            t.send(r.body)
                        },
                        P = st.listeners("before");
                    var M = function() {
                        if (!P.length) return A();
                        const S = function(_) {
                            if (typeof _ == "object" && (typeof _.status == "number" || typeof a.status == "number")) {
                                ht(_, a), "data" in _ || (_.data = _.response || _.text), d(4);
                                return
                            }
                            M()
                        };
                        S.head = function(_) {
                            ht(_, a), d(2)
                        }, S.progress = function(_) {
                            ht(_, a), d(3)
                        };
                        const E = P.shift();
                        E.length === 1 ? S(E(r)) : E.length === 2 && r.async ? E(r, S) : S()
                    };
                    M()
                }, h.abort = function() {
                    n = -1, i ? t.abort() : h.dispatchEvent("abort", {})
                }, h.setRequestHeader = function(p, g) {
                    const x = p != null ? p.toLowerCase() : void 0,
                        A = r.headerNames[x] = r.headerNames[x] || p;
                    r.headers[A] && (g = r.headers[A] + ", " + g), r.headers[A] = g
                }, h.getResponseHeader = p => Mn(a.headers[p ? p.toLowerCase() : void 0]), h.getAllResponseHeaders = () => Mn(Bt.convert(a.headers)), t.overrideMimeType && (h.overrideMimeType = function() {
                    t.overrideMimeType.apply(t, arguments)
                }), t.upload) {
                let p = mt();
                h.upload = p, r.upload = p
            }
            return h.UNSENT = 0, h.OPENED = 1, h.HEADERS_RECEIVED = 2, h.LOADING = 3, h.DONE = 4, h.response = "", h.responseText = "", h.responseXML = null, h.readyState = 0, h.statusText = "", h
        };
    He.UNSENT = 0, He.OPENED = 1, He.HEADERS_RECEIVED = 2, He.LOADING = 3, He.DONE = 4;
    var Ht = {
        patch() {
            ut && (Ve.XMLHttpRequest = He)
        },
        unpatch() {
            ut && (Ve.XMLHttpRequest = ut)
        },
        Native: ut,
        Xhook: He
    };

    function ya(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
        return r
    }

    function pa(e, t, r, n) {
        function o(i) {
            return i instanceof r ? i : new r(function(a) {
                a(i)
            })
        }
        return new(r || (r = Promise))(function(i, a) {
            function s(l) {
                try {
                    f(n.next(l))
                } catch (y) {
                    a(y)
                }
            }

            function u(l) {
                try {
                    f(n.throw(l))
                } catch (y) {
                    a(y)
                }
            }

            function f(l) {
                l.done ? i(l.value) : o(l.value).then(s, u)
            }
            f((n = n.apply(e, [])).next())
        })
    }
    const ct = Ve.fetch;

    function ha(e) {
        const t = ["method", "headers", "body", "mode", "credentials", "cache", "redirect", "referrer", "referrerPolicy", "integrity", "keepalive", "signal", "url"];
        let r = {};
        return t.forEach(n => r[n] = e[n]), r
    }

    function qn(e) {
        return e instanceof Headers ? Cn([...e.entries()]) : Array.isArray(e) ? Cn(e) : e
    }

    function Cn(e) {
        return e.reduce((t, [r, n]) => (t[r] = n, t), {})
    }
    const $n = function(e, t = {
        headers: {}
    }) {
        let r = Object.assign(Object.assign({}, t), {
            isFetch: !0
        });
        if (e instanceof Request) {
            const i = ha(e),
                a = Object.assign(Object.assign({}, qn(i.headers)), qn(r.headers));
            r = Object.assign(Object.assign(Object.assign({}, i), t), {
                headers: a,
                acceptedRequest: !0
            })
        } else r.url = e;
        const n = st.listeners("before"),
            o = st.listeners("after");
        return new Promise(function(i, a) {
            let s = i;
            const u = function(v) {
                    if (!o.length) return s(v);
                    const c = o.shift();
                    return c.length === 2 ? (c(r, v), u(v)) : c.length === 3 ? c(r, v, u) : u(v)
                },
                f = function(v) {
                    if (v !== void 0) {
                        const c = new Response(v.body || v.text, v);
                        i(c), u(c);
                        return
                    }
                    l()
                },
                l = function() {
                    if (!n.length) {
                        y();
                        return
                    }
                    const v = n.shift();
                    if (v.length === 1) return f(v(r));
                    if (v.length === 2) return v(r, f)
                },
                y = () => pa(this, void 0, void 0, function*() {
                    const {
                        url: v,
                        isFetch: c,
                        acceptedRequest: d
                    } = r, h = ya(r, ["url", "isFetch", "acceptedRequest"]);
                    return e instanceof Request && h.body instanceof ReadableStream && (h.body = yield new Response(h.body).text()), ct(v, h).then(m => u(m)).catch(function(m) {
                        return s = a, u(m), a(m)
                    })
                });
            l()
        })
    };
    var Gt = {
        patch() {
            ct && (Ve.fetch = $n)
        },
        unpatch() {
            ct && (Ve.fetch = ct)
        },
        Native: ct,
        Xhook: $n
    };
    const ue = st;
    ue.EventEmitter = mt, ue.before = function(e, t) {
        if (e.length < 1 || e.length > 2) throw "invalid hook";
        return ue.on("before", e, t)
    }, ue.after = function(e, t) {
        if (e.length < 2 || e.length > 3) throw "invalid hook";
        return ue.on("after", e, t)
    }, ue.enable = function() {
        Ht.patch(), Gt.patch()
    }, ue.disable = function() {
        Ht.unpatch(), Gt.unpatch()
    }, ue.XMLHttpRequest = Ht.Native, ue.fetch = Gt.Native, ue.headers = Bt.convert, ue.enable();
    class W extends Error {}
    class Me extends Error {}
    var Ke = function(e) {
            return this instanceof Ke ? (this.v = e, this) : new Ke(e)
        },
        ma = function(e, t, r) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var n = r.apply(e, t || []),
                o, i = [];
            return o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", a), o[Symbol.asyncIterator] = function() {
                return this
            }, o;

            function a(c) {
                return function(d) {
                    return Promise.resolve(d).then(c, y)
                }
            }

            function s(c, d) {
                n[c] && (o[c] = function(h) {
                    return new Promise(function(m, p) {
                        i.push([c, h, m, p]) > 1 || u(c, h)
                    })
                }, d && (o[c] = d(o[c])))
            }

            function u(c, d) {
                try {
                    f(n[c](d))
                } catch (h) {
                    v(i[0][3], h)
                }
            }

            function f(c) {
                c.value instanceof Ke ? Promise.resolve(c.value.v).then(l, y) : v(i[0][2], c)
            }

            function l(c) {
                u("next", c)
            }

            function y(c) {
                u("throw", c)
            }

            function v(c, d) {
                c(d), i.shift(), i.length && u(i[0][0], i[0][1])
            }
        },
        ce;
    (function(e) {
        e[e.SHORTEST = 0] = "SHORTEST", e[e.LONGEST = 1] = "LONGEST", e[e.STRICT_EQUAL = 2] = "STRICT_EQUAL"
    })(ce || (ce = {}));

    function* Qe(e, t, ...r) {
        if (r.length === 0) return;
        const n = [];
        for (const o of r) n.push(Qn(o));
        e: for (;;) {
            const o = ho.map(n, u => u.next()),
                i = [];
            let a = !0,
                s = !1;
            for (const u of o) {
                let f;
                u.done ? (a = !1, f = t) : (s = !0, f = u.value), i.push(f)
            }
            if (!a && s) switch (e) {
                case ce.SHORTEST:
                    break e;
                case ce.STRICT_EQUAL:
                    throw new Me("Iterators must have equal lengths")
            }
            if (!s) break;
            yield i
        }
    }

    function va(e, t, ...r) {
        return ma(this, arguments, function*() {
            if (r.length === 0) return yield Ke(void 0);
            const o = [];
            for (const i of r) o.push(za(i));
            e: for (;;) {
                const i = [];
                for (const f of o) {
                    const l = yield Ke(f.next());
                    i.push(l)
                }
                const a = [];
                let s = !0,
                    u = !1;
                for (const f of i) {
                    let l;
                    f.done ? (s = !1, l = t) : (u = !0, l = f.value), a.push(l)
                }
                if (!s && u) switch (e) {
                    case ce.SHORTEST:
                        break e;
                    case ce.STRICT_EQUAL:
                        throw new Me("Iterators must have equal lengths")
                }
                if (!u) break;
                yield yield Ke(a)
            }
        })
    }
    class Ln {
        constructor() {
            this.addedMap = new Map, this.deletedMap = new Map
        }
        addUsage(t, r) {
            this.addedMap.has(t) || this.addedMap.set(t, new Map);
            const n = this.addedMap.get(t);
            n.has(r) || n.set(r, 0), n.set(r, n.get(r) + 1)
        }
        deleteUsage(t) {
            this.deletedMap.has(t) ? this.deletedMap.set(t, this.deletedMap.get(t) + 1) : this.deletedMap.set(t, 1)
        }
        getOwnersCount(t) {
            var r, n;
            const o = (r = this.deletedMap.get(t)) !== null && r !== void 0 ? r : 0;
            return de.of((n = this.addedMap.get(t)) !== null && n !== void 0 ? n : new Map).map(i => i[1]).filter(i => i > o).toValue(i => i + 1, 0)
        }
        getUsagesCount(t, r = 1) {
            var n, o;
            const i = (n = this.deletedMap.get(t)) !== null && n !== void 0 ? n : 0;
            let a = de.of((o = this.addedMap.get(t)) !== null && o !== void 0 ? o : new Map).map(s => s[1]).map(s => s - i).filter(s => s > 0).toArray();
            for (; a.length > r;) {
                const s = mo.toMin(a);
                a = de.of(a).map(u => u - s).filter(u => u > 0).toArray()
            }
            return mo.toSum(a)
        }
    }
    class le {}
    class ga {
        constructor(t, r) {
            this.related = [], this.positions = [], this.cache = new Map, this.lastCacheIndex = 0, this.isValid = !0, this.iterator = t;
            for (let n = 0; n < r; ++n) this.related.push(new wa(this, n)), this.positions.push(0);
            this.cacheNextValue()
        }
        current(t) {
            const r = this.getPosition(t);
            return this.cache.get(r)
        }
        next(t) {
            const [r, n, o] = [this.getPosition(t), Math.min(...this.positions), Math.max(...this.positions)];
            r === o && this.cacheNextValue(), this.positions[t.getId()]++, n < Math.min(...this.positions) && this.cache.delete(n)
        }
        valid(t) {
            return this.getPosition(t) < this.lastCacheIndex || this.isValid
        }
        getRelatedIterables() {
            return this.related
        }
        cacheNextValue() {
            const t = this.iterator.next();
            t.done || this.cache.set(this.lastCacheIndex++, t.value), this.isValid = !t.done
        }
        getPosition(t) {
            return this.positions[t.getId()]
        }
    }
    class wa {
        constructor(t, r) {
            this.parent = t, this.id = r
        }
        getId() {
            return this.id
        }
        valid() {
            return this.parent.valid(this)
        }
        next() {
            const t = {
                value: this.current(),
                done: !this.valid()
            };
            return t.done || this.parent.next(this), t
        }
        current() {
            return this.parent.valid(this) ? this.parent.current(this) : void 0
        }*[Symbol.iterator]() {
            for (; this.parent.valid(this);) yield this.parent.current(this), this.parent.next(this)
        }
    }
    var ba = function(e) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var t = e[Symbol.asyncIterator],
                r;
            return t ? t.call(e) : (e = typeof __values == "function" ? __values(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
                return this
            }, r);

            function n(i) {
                r[i] = e[i] && function(a) {
                    return new Promise(function(s, u) {
                        a = e[i](a), o(s, u, a.done, a.value)
                    })
                }
            }

            function o(i, a, s, u) {
                Promise.resolve(u).then(function(f) {
                    i({
                        value: f,
                        done: s
                    })
                }, a)
            }
        },
        Xe = function(e) {
            return this instanceof Xe ? (this.v = e, this) : new Xe(e)
        },
        Sa = function(e, t, r) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var n = r.apply(e, t || []),
                o, i = [];
            return o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", a), o[Symbol.asyncIterator] = function() {
                return this
            }, o;

            function a(c) {
                return function(d) {
                    return Promise.resolve(d).then(c, y)
                }
            }

            function s(c, d) {
                n[c] && (o[c] = function(h) {
                    return new Promise(function(m, p) {
                        i.push([c, h, m, p]) > 1 || u(c, h)
                    })
                }, d && (o[c] = d(o[c])))
            }

            function u(c, d) {
                try {
                    f(n[c](d))
                } catch (h) {
                    v(i[0][3], h)
                }
            }

            function f(c) {
                c.value instanceof Xe ? Promise.resolve(c.value.v).then(l, y) : v(i[0][2], c)
            }

            function l(c) {
                u("next", c)
            }

            function y(c) {
                u("throw", c)
            }

            function v(c, d) {
                c(d), i.shift(), i.length && u(i[0][0], i[0][1])
            }
        };

    function* Dn(...e) {
        for (const t of Qe(ce.SHORTEST, void 0, ...e)) yield t
    }

    function _a(...e) {
        return Sa(this, arguments, function*() {
            var r, n, o, i;
            try {
                for (var a = !0, s = ba(va(ce.SHORTEST, void 0, ...e)), u; u = yield Xe(s.next()), r = u.done, !r; a = !0) i = u.value, a = !1, yield yield Xe(i)
            } catch (f) {
                n = {
                    error: f
                }
            } finally {
                try {
                    !a && !r && (o = s.return) && (yield Xe(o.call(s)))
                } finally {
                    if (n) throw n.error
                }
            }
        })
    }

    function* Ea(e, ...t) {
        for (const r of Qe(ce.LONGEST, e, ...t)) yield r
    }

    function* Aa(...e) {
        for (const t of Qe(ce.LONGEST, void 0, ...e)) yield t
    }

    function* Un(...e) {
        for (const t of Qe(ce.STRICT_EQUAL, void 0, ...e)) yield t
    }

    function* xa(...e) {
        for (const t of e)
            for (const r of L(t)) yield r
    }
    var ae = function(e, t, r, n) {
            function o(i) {
                return i instanceof r ? i : new r(function(a) {
                    a(i)
                })
            }
            return new(r || (r = Promise))(function(i, a) {
                function s(l) {
                    try {
                        f(n.next(l))
                    } catch (y) {
                        a(y)
                    }
                }

                function u(l) {
                    try {
                        f(n.throw(l))
                    } catch (y) {
                        a(y)
                    }
                }

                function f(l) {
                    l.done ? i(l.value) : o(l.value).then(s, u)
                }
                f((n = n.apply(e, t || [])).next())
            })
        },
        vt = function(e) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var t = e[Symbol.asyncIterator],
                r;
            return t ? t.call(e) : (e = typeof __values == "function" ? __values(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
                return this
            }, r);

            function n(i) {
                r[i] = e[i] && function(a) {
                    return new Promise(function(s, u) {
                        a = e[i](a), o(s, u, a.done, a.value)
                    })
                }
            }

            function o(i, a, s, u) {
                Promise.resolve(u).then(function(f) {
                    i({
                        value: f,
                        done: s
                    })
                }, a)
            }
        };

    function ve(e, t, r) {
        let n = r;
        for (const o of L(e)) n = t(n, o);
        return n
    }

    function _e(e, t, r) {
        return ae(this, void 0, void 0, function*() {
            var n, o, i, a;
            let s = r;
            try {
                for (var u = !0, f = vt(H(e)), l; l = yield f.next(), n = l.done, !n; u = !0) a = l.value, u = !1, s = yield t(s, a)
            } catch (y) {
                o = {
                    error: y
                }
            } finally {
                try {
                    !u && !n && (i = f.return) && (yield i.call(f))
                } finally {
                    if (o) throw o.error
                }
            }
            return s
        })
    }

    function Nn(e) {
        const [t, r] = ve(e, (n, o) => {
            const [i, a] = n;
            return [i + 1, a + Number(o)]
        }, [0, 0]);
        return t ? r / t : void 0
    }

    function Ra(e) {
        return ae(this, void 0, void 0, function*() {
            const [t, r] = yield _e(e, (n, o) => {
                const [i, a] = n;
                return [i + 1, a + Number(o)]
            }, [0, 0]);
            return t ? r / t : void 0
        })
    }

    function Fn(e, t) {
        return t !== void 0 ? ve(e, (r, n) => t(n) > t(r ?? n) ? n : r ?? n) : ve(e, (r, n) => {
            const o = r ?? n,
                i = n;
            return o >= i ? o : i
        })
    }

    function Oa(e, t) {
        return ae(this, void 0, void 0, function*() {
            return t !== void 0 ? yield _e(e, (r, n) => ae(this, void 0, void 0, function*() {
                return (yield t(n)) > (yield t(r ?? n)) ? n : r ?? n
            })): yield _e(e, (r, n) => {
                const o = r ?? n,
                    i = n;
                return o >= i ? o : i
            })
        })
    }

    function jn(e, t) {
        return t !== void 0 ? ve(e, (r, n) => t(n) < t(r ?? n) ? n : r ?? n) : ve(e, (r, n) => {
            const o = r ?? n,
                i = n;
            return o <= i ? o : i
        })
    }

    function Ta(e, t) {
        return ae(this, void 0, void 0, function*() {
            return t !== void 0 ? yield _e(e, (r, n) => ae(this, void 0, void 0, function*() {
                return (yield t(n)) < (yield t(r ?? n)) ? n : r ?? n
            })): yield _e(e, (r, n) => {
                const o = r ?? n,
                    i = n;
                return o <= i ? o : i
            })
        })
    }

    function Wt(e, t) {
        const r = t !== void 0 ? t : n => n;
        return ve(e, (n, o) => {
            var i, a, s, u;
            return n = n, [r(o) <= r((i = n[0]) !== null && i !== void 0 ? i : o) ? o : (a = n[0]) !== null && a !== void 0 ? a : o, r(o) >= r((s = n[1]) !== null && s !== void 0 ? s : o) ? o : (u = n[1]) !== null && u !== void 0 ? u : o]
        }, [void 0, void 0])
    }

    function kn(e, t) {
        return ae(this, void 0, void 0, function*() {
            const r = t !== void 0 ? t : n => n;
            return yield _e(e, (n, o) => ae(this, void 0, void 0, function*() {
                var i, a, s, u;
                return n = n, [(yield r(o)) <= (yield r((i = n[0]) !== null && i !== void 0 ? i : o)) ? o : (a = n[0]) !== null && a !== void 0 ? a : o, (yield r(o)) >= (yield r((s = n[1]) !== null && s !== void 0 ? s : o)) ? o : (u = n[1]) !== null && u !== void 0 ? u : o]
            }), [void 0, void 0])
        })
    }

    function Bn(e) {
        const [t, r] = Wt(wt(e, n => Number(n)));
        return (r ?? 0) - (t ?? 0)
    }

    function Pa(e) {
        return ae(this, void 0, void 0, function*() {
            const [t, r] = yield kn(Xn(e, n => Number(n)));
            return (r ?? 0) - (t ?? 0)
        })
    }

    function Hn(e) {
        return ve(e, (t, r) => t + Number(r), 0)
    }

    function Ia(e) {
        return ae(this, void 0, void 0, function*() {
            return yield _e(e, (t, r) => t + Number(r), 0)
        })
    }

    function Gn(e) {
        return ve(e, (t, r) => (t ?? 1) * r)
    }

    function Ma(e) {
        return ae(this, void 0, void 0, function*() {
            return yield _e(e, (t, r) => (t ?? 1) * r)
        })
    }

    function gt(e) {
        switch (!0) {
            case e instanceof Array:
                return e.length;
            case Je(e):
                return e.length;
            case e instanceof Set:
                return e.size;
            case e instanceof Map:
                return e.size
        }
        return ve(e, t => t + 1, 0)
    }

    function qa(e) {
        return ae(this, void 0, void 0, function*() {
            switch (!0) {
                case e instanceof Array:
                case Je(e):
                case e instanceof Set:
                case e instanceof Map:
                    return gt(e)
            }
            return yield _e(e, t => t + 1, 0)
        })
    }

    function Wn(e) {
        for (const t of L(e)) return t;
        throw new Me("Collection is empty")
    }

    function Ca(e) {
        return ae(this, void 0, void 0, function*() {
            var t, r, n, o;
            try {
                for (var i = !0, a = vt(H(e)), s; s = yield a.next(), t = s.done, !t; i = !0) return o = s.value, i = !1, o
            } catch (u) {
                r = {
                    error: u
                }
            } finally {
                try {
                    !i && !t && (n = a.return) && (yield n.call(a))
                } finally {
                    if (r) throw r.error
                }
            }
            throw new Me("Collection is empty")
        })
    }

    function zn(e) {
        let t = !0,
            r;
        for (const n of L(e)) r = n, t = !1;
        if (t) throw new Me("Collection is empty");
        return r
    }

    function $a(e) {
        return ae(this, void 0, void 0, function*() {
            var t, r, n, o;
            let i = !0,
                a;
            try {
                for (var s = !0, u = vt(H(e)), f; f = yield u.next(), t = f.done, !t; s = !0) o = f.value, s = !1, a = o, i = !1
            } catch (l) {
                r = {
                    error: l
                }
            } finally {
                try {
                    !s && !t && (n = u.return) && (yield n.call(u))
                } finally {
                    if (r) throw r.error
                }
            }
            if (i) throw new Me("Collection is empty");
            return a
        })
    }

    function Vn(e) {
        let t = le,
            r = le;
        for (const n of L(e)) t === le && (t = n), r = n;
        if (t === le) throw new Me("Collection is empty");
        return [t, r]
    }

    function La(e) {
        return ae(this, void 0, void 0, function*() {
            var t, r, n, o;
            let i = le,
                a = le;
            try {
                for (var s = !0, u = vt(H(e)), f; f = yield u.next(), t = f.done, !t; s = !0) {
                    o = f.value, s = !1;
                    const l = o;
                    i === le && (i = l), a = l
                }
            } catch (l) {
                r = {
                    error: l
                }
            } finally {
                try {
                    !s && !t && (n = u.return) && (yield n.call(u))
                } finally {
                    if (r) throw r.error
                }
            }
            if (i === le) throw new Me("Collection is empty");
            return [i, a]
        })
    }

    function Da(e, t) {
        for (const r of L(e))
            if (!t(r)) return !1;
        return !0
    }

    function Ua(e) {
        const t = new Set;
        for (const r of L(e)) {
            if (t.has(r)) return !1;
            t.add(r)
        }
        return !0
    }

    function Na(e, t) {
        for (const r of L(e))
            if (t(r)) return !0;
        return !1
    }

    function Fa(e, t, r) {
        if (t < 0) return !1;
        r === void 0 && (r = o => !!o);
        let n = 0;
        for (const o of L(e))
            if (r(o) && (n++, n > t)) return !1;
        return n === t
    }

    function Ee(e) {
        return e == null ? !1 : typeof e[Symbol.iterator] == "function"
    }

    function ft(e) {
        return e == null ? !1 : typeof e[Symbol.asyncIterator] == "function"
    }

    function qe(e) {
        return e == null ? !1 : e.next !== void 0 && typeof e.next == "function"
    }

    function ja(e) {
        for (const [t, r] of lt(L(e)))
            if (t < r) return !1;
        return !0
    }

    function ka(e) {
        for (const [t, r] of lt(L(e)))
            if (t > r) return !1;
        return !0
    }

    function Je(e) {
        return typeof e == "string" || e instanceof String
    }

    function Ba(e, t) {
        for (const r of L(e))
            if (t(r)) return !1;
        return !0
    }

    function Ha(...e) {
        try {
            for (const t of Un(...e))
                for (const [r, n] of lt(t))
                    if (r !== n) return !1
        } catch {
            return !1
        }
        return !0
    }

    function Ga(...e) {
        if (e.length <= 1) return !0;
        const t = e.map(r => gt(r));
        return new Set(t).size === 1
    }
    var Wa = function(e, t, r, n) {
            function o(i) {
                return i instanceof r ? i : new r(function(a) {
                    a(i)
                })
            }
            return new(r || (r = Promise))(function(i, a) {
                function s(l) {
                    try {
                        f(n.next(l))
                    } catch (y) {
                        a(y)
                    }
                }

                function u(l) {
                    try {
                        f(n.throw(l))
                    } catch (y) {
                        a(y)
                    }
                }

                function f(l) {
                    l.done ? i(l.value) : o(l.value).then(s, u)
                }
                f((n = n.apply(e, t || [])).next())
            })
        },
        Ae = function(e) {
            return this instanceof Ae ? (this.v = e, this) : new Ae(e)
        },
        zt = function(e, t, r) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var n = r.apply(e, t || []),
                o, i = [];
            return o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", a), o[Symbol.asyncIterator] = function() {
                return this
            }, o;

            function a(c) {
                return function(d) {
                    return Promise.resolve(d).then(c, y)
                }
            }

            function s(c, d) {
                n[c] && (o[c] = function(h) {
                    return new Promise(function(m, p) {
                        i.push([c, h, m, p]) > 1 || u(c, h)
                    })
                }, d && (o[c] = d(o[c])))
            }

            function u(c, d) {
                try {
                    f(n[c](d))
                } catch (h) {
                    v(i[0][3], h)
                }
            }

            function f(c) {
                c.value instanceof Ae ? Promise.resolve(c.value.v).then(l, y) : v(i[0][2], c)
            }

            function l(c) {
                u("next", c)
            }

            function y(c) {
                u("throw", c)
            }

            function v(c, d) {
                c(d), i.shift(), i.length && u(i[0][0], i[0][1])
            }
        },
        Kn = function(e) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var t = e[Symbol.asyncIterator],
                r;
            return t ? t.call(e) : (e = typeof __values == "function" ? __values(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
                return this
            }, r);

            function n(i) {
                r[i] = e[i] && function(a) {
                    return new Promise(function(s, u) {
                        a = e[i](a), o(s, u, a.done, a.value)
                    })
                }
            }

            function o(i, a, s, u) {
                Promise.resolve(u).then(function(f) {
                    i({
                        value: f,
                        done: s
                    })
                }, a)
            }
        };

    function L(e) {
        if (Ee(e)) return e;
        if (qe(e)) return {
            [Symbol.iterator]() {
                return e
            }
        };
        if (typeof e == "object" && e !== null) return function*() {
            for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (yield [t, e[t]])
        }();
        throw new W("Given collection is not iterable or iterator.")
    }

    function H(e) {
        if (ft(e)) return e;
        if (qe(e)) return {
            [Symbol.asyncIterator]() {
                return zt(this, arguments, function*() {
                    for (;;) {
                        const r = yield Ae(e.next());
                        if (r.done) return yield Ae(void 0);
                        yield yield Ae(r.value)
                    }
                })
            }
        };
        if (typeof e == "object" && e !== null && (e = L(e)), Ee(e)) return {
            [Symbol.asyncIterator]() {
                return zt(this, arguments, function*() {
                    for (const r of e) yield yield Ae(r)
                })
            }
        };
        throw new W("Given collection is not async iterable or iterator.")
    }

    function Qn(e) {
        if (qe(e)) return e;
        if (Ee(e)) return function*() {
            for (const t of e) yield t
        }();
        throw new W("Given collection is not iterable or iterator.")
    }

    function za(e) {
        if ((qe(e) || Ee(e)) && (e = H(e)), ft(e)) return function() {
            return zt(this, arguments, function*() {
                var t, r, n, o;
                try {
                    for (var i = !0, a = Kn(e), s; s = yield Ae(a.next()), t = s.done, !t; i = !0) o = s.value, i = !1, yield yield Ae(o)
                } catch (u) {
                    r = {
                        error: u
                    }
                } finally {
                    try {
                        !i && !t && (n = a.return) && (yield Ae(n.call(a)))
                    } finally {
                        if (r) throw r.error
                    }
                }
            })
        }();
        throw new W("Given collection is not iterable or iterator.")
    }

    function Ye(e) {
        if (Array.isArray(e)) return e;
        const t = [];
        for (const r of L(e)) t.push(r);
        return t
    }

    function Va(e) {
        return Wa(this, void 0, void 0, function*() {
            var t, r, n, o;
            if (Array.isArray(e)) return e;
            const i = [];
            try {
                for (var a = !0, s = Kn(H(e)), u; u = yield s.next(), t = u.done, !t; a = !0) {
                    o = u.value, a = !1;
                    const f = o;
                    i.push(f)
                }
            } catch (f) {
                r = {
                    error: f
                }
            } finally {
                try {
                    !a && !t && (n = s.return) && (yield n.call(s))
                } finally {
                    if (r) throw r.error
                }
            }
            return i
        })
    }

    function Ka(e) {
        const t = new Map;
        for (const [r, n] of L(e)) t.set(r, n);
        return t
    }

    function Qa(e) {
        const t = new Set;
        for (const r of L(e)) t.add(r);
        return t
    }

    function Vt(e, t) {
        return new ga(Qn(e), t).getRelatedIterables()
    }
    var Oe = function(e) {
            return this instanceof Oe ? (this.v = e, this) : new Oe(e)
        },
        Xa = function(e) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var t = e[Symbol.asyncIterator],
                r;
            return t ? t.call(e) : (e = typeof __values == "function" ? __values(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
                return this
            }, r);

            function n(i) {
                r[i] = e[i] && function(a) {
                    return new Promise(function(s, u) {
                        a = e[i](a), o(s, u, a.done, a.value)
                    })
                }
            }

            function o(i, a, s, u) {
                Promise.resolve(u).then(function(f) {
                    i({
                        value: f,
                        done: s
                    })
                }, a)
            }
        },
        Ja = function(e, t, r) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var n = r.apply(e, t || []),
                o, i = [];
            return o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", a), o[Symbol.asyncIterator] = function() {
                return this
            }, o;

            function a(c) {
                return function(d) {
                    return Promise.resolve(d).then(c, y)
                }
            }

            function s(c, d) {
                n[c] && (o[c] = function(h) {
                    return new Promise(function(m, p) {
                        i.push([c, h, m, p]) > 1 || u(c, h)
                    })
                }, d && (o[c] = d(o[c])))
            }

            function u(c, d) {
                try {
                    f(n[c](d))
                } catch (h) {
                    v(i[0][3], h)
                }
            }

            function f(c) {
                c.value instanceof Oe ? Promise.resolve(c.value.v).then(l, y) : v(i[0][2], c)
            }

            function l(c) {
                u("next", c)
            }

            function y(c) {
                u("throw", c)
            }

            function v(c, d) {
                c(d), i.shift(), i.length && u(i[0][0], i[0][1])
            }
        };

    function* Kt(e, t) {
        const r = new Set;
        if (e instanceof Map) {
            t === void 0 && (t = n => n[1]);
            for (const n of e) {
                const o = t(n);
                r.has(o) || (yield n, r.add(o))
            }
        } else {
            t === void 0 && (t = n => n);
            for (const n of L(e)) {
                const o = t(n);
                r.has(o) || (yield n, r.add(o))
            }
        }
    }

    function Ya(e, t) {
        return Ja(this, arguments, function*() {
            var n, o, i, a;
            const s = new Set;
            if (e instanceof Map)
                for (const y of Kt(e, t)) yield yield Oe(yield Oe(y));
            else {
                t === void 0 && (t = y => y);
                try {
                    for (var u = !0, f = Xa(H(e)), l; l = yield Oe(f.next()), n = l.done, !n; u = !0) {
                        a = l.value, u = !1;
                        const y = a,
                            v = t(y);
                        s.has(v) || (yield yield Oe(y), s.add(v))
                    }
                } catch (y) {
                    o = {
                        error: y
                    }
                } finally {
                    try {
                        !u && !n && (i = f.return) && (yield Oe(i.call(f)))
                    } finally {
                        if (o) throw o.error
                    }
                }
            }
        })
    }

    function* Za(...e) {
        yield* Qt(e.length, ...e)
    }

    function* Qt(e, ...t) {
        const r = new Ln,
            n = Qe(ce.LONGEST, le, ...t);
        for (const o of n)
            for (const [i, a] of St(o)) a !== le && (r.addUsage(a, `${i}`), r.getOwnersCount(a) === e && (yield a, r.deleteUsage(a)))
    }

    function* es(...e) {
        const t = new Ln,
            r = new Set,
            n = Qe(ce.LONGEST, le, ...e);
        for (const o of n)
            for (const [i, a] of St(o)) a !== le && (t.addUsage(a, `${i}`), r.add(a), t.getOwnersCount(a) === e.length && t.deleteUsage(a));
        for (const o of r)
            for (const i of ho.repeat(o, t.getUsagesCount(o))) yield i
    }

    function* ts(...e) {
        yield* Qt(1, ...e)
    }
    var V = function(e) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var t = e[Symbol.asyncIterator],
                r;
            return t ? t.call(e) : (e = typeof __values == "function" ? __values(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
                return this
            }, r);

            function n(i) {
                r[i] = e[i] && function(a) {
                    return new Promise(function(s, u) {
                        a = e[i](a), o(s, u, a.done, a.value)
                    })
                }
            }

            function o(i, a, s, u) {
                Promise.resolve(u).then(function(f) {
                    i({
                        value: f,
                        done: s
                    })
                }, a)
            }
        },
        T = function(e) {
            return this instanceof T ? (this.v = e, this) : new T(e)
        },
        J = function(e, t, r) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var n = r.apply(e, t || []),
                o, i = [];
            return o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", a), o[Symbol.asyncIterator] = function() {
                return this
            }, o;

            function a(c) {
                return function(d) {
                    return Promise.resolve(d).then(c, y)
                }
            }

            function s(c, d) {
                n[c] && (o[c] = function(h) {
                    return new Promise(function(m, p) {
                        i.push([c, h, m, p]) > 1 || u(c, h)
                    })
                }, d && (o[c] = d(o[c])))
            }

            function u(c, d) {
                try {
                    f(n[c](d))
                } catch (h) {
                    v(i[0][3], h)
                }
            }

            function f(c) {
                c.value instanceof T ? Promise.resolve(c.value.v).then(l, y) : v(i[0][2], c)
            }

            function l(c) {
                u("next", c)
            }

            function y(c) {
                u("throw", c)
            }

            function v(c, d) {
                c(d), i.shift(), i.length && u(i[0][0], i[0][1])
            }
        };

    function* wt(e, t) {
        for (const r of L(e)) yield t(r)
    }

    function Xn(e, t) {
        return J(this, arguments, function*() {
            var n, o, i, a;
            try {
                for (var s = !0, u = V(H(e)), f; f = yield T(u.next()), n = f.done, !n; s = !0) a = f.value, s = !1, yield yield T(yield T(t(a)))
            } catch (l) {
                o = {
                    error: l
                }
            } finally {
                try {
                    !s && !n && (i = u.return) && (yield T(i.call(u)))
                } finally {
                    if (o) throw o.error
                }
            }
        })
    }

    function* Jn(e, t) {
        for (const [r, n] of Dn(e, t)) n && (yield r)
    }

    function rs(e, t) {
        return J(this, arguments, function*() {
            var n, o, i, a;
            try {
                for (var s = !0, u = V(_a(e, t)), f; f = yield T(u.next()), n = f.done, !n; s = !0) {
                    a = f.value, s = !1;
                    const [l, y] = a;
                    y && (yield yield T(l))
                }
            } catch (l) {
                o = {
                    error: l
                }
            } finally {
                try {
                    !s && !n && (i = u.return) && (yield T(i.call(u)))
                } finally {
                    if (o) throw o.error
                }
            }
        })
    }

    function* Yn(e, t) {
        let r = !0;
        for (const n of L(e)) {
            if (r) {
                if (!t(n)) {
                    r = !1, yield n;
                    continue
                }
                continue
            }
            yield n
        }
    }

    function ns(e, t) {
        return J(this, arguments, function*() {
            var n, o, i, a;
            let s = !0;
            try {
                for (var u = !0, f = V(H(e)), l; l = yield T(f.next()), n = l.done, !n; u = !0) {
                    a = l.value, u = !1;
                    const y = a;
                    if (s) {
                        if (!(yield T(t(y)))) {
                            s = !1, yield yield T(y);
                            continue
                        }
                        continue
                    }
                    yield yield T(y)
                }
            } catch (y) {
                o = {
                    error: y
                }
            } finally {
                try {
                    !u && !n && (i = f.return) && (yield T(i.call(f)))
                } finally {
                    if (o) throw o.error
                }
            }
        })
    }

    function* Zn(e, t) {
        for (const r of L(e))
            if (t(r)) yield r;
            else break
    }

    function os(e, t) {
        return J(this, arguments, function*() {
            var n, o, i, a;
            try {
                for (var s = !0, u = V(H(e)), f; f = yield T(u.next()), n = f.done, !n; s = !0) {
                    a = f.value, s = !1;
                    const l = a;
                    if (yield T(t(l))) yield yield T(l);
                    else break
                }
            } catch (l) {
                o = {
                    error: l
                }
            } finally {
                try {
                    !s && !n && (i = u.return) && (yield T(i.call(u)))
                } finally {
                    if (o) throw o.error
                }
            }
        })
    }

    function* is(e, t) {
        if (t < 0) throw new W(`Number of repetitions cannot be negative: ${t}`);
        for (let r = t; r > 0; --r) yield e
    }

    function as(e, t) {
        return J(this, arguments, function*() {
            if (t < 0) throw new W(`Number of repetitions cannot be negative: ${t}`);
            const n = yield T(e);
            for (let o = t; o > 0; --o) yield yield T(n)
        })
    }

    function* eo(e, t) {
        for (const r of L(e)) {
            const n = t(r, t);
            if (Ee(n))
                for (const o of L(n)) yield o;
            else yield n
        }
    }

    function ss(e, t) {
        return J(this, arguments, function*() {
            var n, o, i, a, s, u, f, l;
            try {
                for (var y = !0, v = V(H(e)), c; c = yield T(v.next()), n = c.done, !n; y = !0) {
                    a = c.value, y = !1;
                    const g = yield T(t(a, t));
                    if (Ee(g) || ft(g)) try {
                        for (var d = !0, h = (u = void 0, V(H(g))), m; m = yield T(h.next()), s = m.done, !s; d = !0) l = m.value, d = !1, yield yield T(l)
                    } catch (x) {
                        u = {
                            error: x
                        }
                    } finally {
                        try {
                            !d && !s && (f = h.return) && (yield T(f.call(h)))
                        } finally {
                            if (u) throw u.error
                        }
                    } else yield yield T(g)
                }
            } catch (p) {
                o = {
                    error: p
                }
            } finally {
                try {
                    !y && !n && (i = v.return) && (yield T(i.call(v)))
                } finally {
                    if (o) throw o.error
                }
            }
        })
    }

    function* Xt(e, t = 1 / 0) {
        if (t < 1) {
            for (let r of L(e)) e instanceof Map && (r = r[1]), yield r;
            return
        }
        for (let r of L(e))
            if (e instanceof Map && (r = r[1]), (Ee(r) || qe(r)) && !Je(r))
                for (const n of Xt(r, t - 1)) yield n;
            else yield r
    }

    function to(e) {
        return J(this, arguments, function*(r, n = 1 / 0) {
            var o, i, a, s, u, f, l, y, v, c, d, h;
            if (n < 1) {
                try {
                    for (var m = !0, p = V(H(r)), g; g = yield T(p.next()), o = g.done, !o; m = !0) {
                        s = g.value, m = !1;
                        let _ = s;
                        r instanceof Map && (_ = _[1]), yield yield T(_)
                    }
                } catch (_) {
                    i = {
                        error: _
                    }
                } finally {
                    try {
                        !m && !o && (a = p.return) && (yield T(a.call(p)))
                    } finally {
                        if (i) throw i.error
                    }
                }
                return yield T(void 0)
            }
            try {
                for (var x = !0, A = V(H(r)), P; P = yield T(A.next()), u = P.done, !u; x = !0) {
                    y = P.value, x = !1;
                    let _ = y;
                    if (r instanceof Map && (_ = _[1]), (ft(_) || Ee(_) || qe(_)) && !Je(_)) try {
                        for (var M = !0, S = (c = void 0, V(to(_, n - 1))), E; E = yield T(S.next()), v = E.done, !v; M = !0) h = E.value, M = !1, yield yield T(h)
                    } catch (O) {
                        c = {
                            error: O
                        }
                    } finally {
                        try {
                            !M && !v && (d = S.return) && (yield T(d.call(S)))
                        } finally {
                            if (c) throw c.error
                        }
                    } else yield yield T(_)
                }
            } catch (_) {
                f = {
                    error: _
                }
            } finally {
                try {
                    !x && !u && (l = A.return) && (yield T(l.call(A)))
                } finally {
                    if (f) throw f.error
                }
            }
        })
    }

    function* ro(e, t) {
        for (const r of L(e)) t(r) && (yield r)
    }

    function us(e, t) {
        return J(this, arguments, function*() {
            var n, o, i, a;
            try {
                for (var s = !0, u = V(H(e)), f; f = yield T(u.next()), n = f.done, !n; s = !0) {
                    a = f.value, s = !1;
                    const l = a;
                    (yield T(t(l))) && (yield yield T(l))
                }
            } catch (l) {
                o = {
                    error: l
                }
            } finally {
                try {
                    !s && !n && (i = u.return) && (yield T(i.call(u)))
                } finally {
                    if (o) throw o.error
                }
            }
        })
    }

    function* bt(e, t, r, n = !0) {
        if (t < 1) throw new W(`Chunk size must be \u2265 1. Got ${t}`);
        if (r >= t) throw new W("Overlap size must be less than chunk size");
        let o = [],
            i = !1;
        for (const a of L(e)) i = !1, o.push(a), o.length === t && (yield o, o = o.slice(t - r), i = !0);
        !i && o.length > 0 && n && (yield o)
    }

    function Jt(e, t, r) {
        return J(this, arguments, function*(o, i, a, s = !0) {
            var u, f, l, y;
            if (i < 1) throw new W(`Chunk size must be \u2265 1. Got ${i}`);
            if (a >= i) throw new W("Overlap size must be less than chunk size");
            let v = [],
                c = !1;
            try {
                for (var d = !0, h = V(H(o)), m; m = yield T(h.next()), u = m.done, !u; d = !0) {
                    y = m.value, d = !1;
                    const p = y;
                    c = !1, v.push(p), v.length === i && (yield yield T(v), v = v.slice(i - a), c = !0)
                }
            } catch (p) {
                f = {
                    error: p
                }
            } finally {
                try {
                    !d && !u && (l = h.return) && (yield T(l.call(h)))
                } finally {
                    if (f) throw f.error
                }
            }!c && v.length > 0 && s && (yield yield T(v))
        })
    }

    function* no(e, t) {
        for (const r of bt(e, t, 0)) yield r
    }

    function cs(e, t) {
        return J(this, arguments, function*() {
            var n, o, i, a;
            try {
                for (var s = !0, u = V(Jt(e, t, 0)), f; f = yield T(u.next()), n = f.done, !n; s = !0) a = f.value, s = !1, yield yield T(a)
            } catch (l) {
                o = {
                    error: l
                }
            } finally {
                try {
                    !s && !n && (i = u.return) && (yield T(i.call(u)))
                } finally {
                    if (o) throw o.error
                }
            }
        })
    }

    function* lt(e) {
        const t = bt(e, 2, 1, !1);
        for (const r of t) yield r
    }

    function fs(e) {
        return J(this, arguments, function*() {
            var r, n, o, i;
            const a = Jt(e, 2, 1, !1);
            try {
                for (var s = !0, u = V(a), f; f = yield T(u.next()), r = f.done, !r; s = !0) i = f.value, s = !1, yield yield T(i)
            } catch (l) {
                n = {
                    error: l
                }
            } finally {
                try {
                    !s && !r && (o = u.return) && (yield T(o.call(u)))
                } finally {
                    if (n) throw n.error
                }
            }
        })
    }

    function* oo(e, t) {
        if (t < 0) throw new W(`Limit must be \u2265 0. Got ${t}`);
        let r = 0;
        for (const n of L(e)) {
            if (r >= t) return;
            yield n, ++r
        }
    }

    function ls(e, t) {
        return J(this, arguments, function*() {
            var n, o, i, a;
            if (t < 0) throw new W(`Limit must be \u2265 0. Got ${t}`);
            let s = 0;
            try {
                for (var u = !0, f = V(H(e)), l; l = yield T(f.next()), n = l.done, !n; u = !0) {
                    a = l.value, u = !1;
                    const y = a;
                    if (s >= t) return yield T(void 0);
                    yield yield T(y), ++s
                }
            } catch (y) {
                o = {
                    error: y
                }
            } finally {
                try {
                    !u && !n && (i = f.return) && (yield T(i.call(f)))
                } finally {
                    if (o) throw o.error
                }
            }
        })
    }

    function* St(e) {
        let t = 0;
        for (const r of L(e)) yield [t++, r]
    }

    function ds(e) {
        return J(this, arguments, function*() {
            var r, n, o, i;
            let a = 0;
            try {
                for (var s = !0, u = V(H(e)), f; f = yield T(u.next()), r = f.done, !r; s = !0) {
                    i = f.value, s = !1;
                    const l = i;
                    yield yield T([a++, l])
                }
            } catch (l) {
                n = {
                    error: l
                }
            } finally {
                try {
                    !s && !r && (o = u.return) && (yield T(o.call(u)))
                } finally {
                    if (n) throw n.error
                }
            }
        })
    }

    function* io(e, t = 0, r, n = 1) {
        if (t < 0) throw new W("Parameter 'start' cannot be negative");
        if (r !== void 0 && r < 0) throw new W("Parameter 'count' cannot be negative");
        if (n <= 0) throw new W("Parameter 'step' must be positive");
        let o = 0,
            i = 0;
        for (const a of L(e))
            if (!(o++ < t || (o - t - 1) % n !== 0)) {
                if (i++ === r && r !== void 0) break;
                yield a
            }
    }

    function ys(e) {
        return J(this, arguments, function*(r, n = 0, o, i = 1) {
            var a, s, u, f;
            if (n < 0) throw new W("Parameter 'start' cannot be negative");
            if (o !== void 0 && o < 0) throw new W("Parameter 'count' cannot be negative");
            if (i <= 0) throw new W("Parameter 'step' must be positive");
            let l = 0,
                y = 0;
            try {
                for (var v = !0, c = V(H(r)), d; d = yield T(c.next()), a = d.done, !a; v = !0) {
                    f = d.value, v = !1;
                    const h = f;
                    if (!(l++ < n || (l - n - 1) % i !== 0)) {
                        if (y++ === o && o !== void 0) break;
                        yield yield T(h)
                    }
                }
            } catch (h) {
                s = {
                    error: h
                }
            } finally {
                try {
                    !v && !a && (u = c.return) && (yield T(u.call(c)))
                } finally {
                    if (s) throw s.error
                }
            }
        })
    }

    function* ao(e) {
        for (const [t] of L(e)) yield t
    }

    function ps(e) {
        return J(this, arguments, function*() {
            var r, n, o, i;
            try {
                for (var a = !0, s = V(H(e)), u; u = yield T(s.next()), r = u.done, !r; a = !0) {
                    i = u.value, a = !1;
                    const [f] = i;
                    yield yield T(f)
                }
            } catch (f) {
                n = {
                    error: f
                }
            } finally {
                try {
                    !a && !r && (o = s.return) && (yield T(o.call(s)))
                } finally {
                    if (n) throw n.error
                }
            }
        })
    }

    function* so(e, t, r = 0) {
        if (t < 0 || r < 0) throw new W;
        let n = -r;
        for (const o of L(e))(n < 0 || n >= t) && (yield o), ++n
    }

    function hs(e, t) {
        return J(this, arguments, function*(n, o, i = 0) {
            var a, s, u, f;
            if (o < 0 || i < 0) throw new W;
            let l = -i;
            try {
                for (var y = !0, v = V(H(n)), c; c = yield T(v.next()), a = c.done, !a; y = !0) {
                    f = c.value, y = !1;
                    const d = f;
                    (l < 0 || l >= o) && (yield yield T(d)), ++l
                }
            } catch (d) {
                s = {
                    error: d
                }
            } finally {
                try {
                    !y && !a && (u = v.return) && (yield T(u.call(v)))
                } finally {
                    if (s) throw s.error
                }
            }
        })
    }

    function* uo(e) {
        for (const [, t] of L(e)) yield t
    }

    function ms(e) {
        return J(this, arguments, function*() {
            var r, n, o, i;
            try {
                for (var a = !0, s = V(H(e)), u; u = yield T(s.next()), r = u.done, !r; a = !0) {
                    i = u.value, a = !1;
                    const [, f] = i;
                    yield yield T(f)
                }
            } catch (f) {
                n = {
                    error: f
                }
            } finally {
                try {
                    !a && !r && (o = s.return) && (yield T(o.call(s)))
                } finally {
                    if (n) throw n.error
                }
            }
        })
    }

    function* co(e, t, r) {
        const n = new Map,
            o = i => {
                n.has(i) || (r !== void 0 ? n.set(i, {}) : n.set(i, []))
            };
        for (const i of L(e)) {
            const a = t(i),
                s = r !== void 0 ? r(i) : void 0,
                u = (Ee(a) || qe(a)) && !Je(a) ? a : [a];
            for (const f of Kt(u)) o(f), s === void 0 ? n.get(f).push(i) : n.get(f)[s] = i
        }
        for (const i of n) yield i
    }

    function vs(e, t, r) {
        return J(this, arguments, function*() {
            var o, i, a, s, u, f, l, y;
            const v = new Map,
                c = A => {
                    v.has(A) || (r !== void 0 ? v.set(A, {}) : v.set(A, []))
                };
            try {
                for (var d = !0, h = V(H(e)), m; m = yield T(h.next()), o = m.done, !o; d = !0) {
                    s = m.value, d = !1;
                    const A = s,
                        P = yield T(t(A)), M = r !== void 0 ? yield T(r(A)): void 0, S = (ft(P) || Ee(P) || qe(P)) && !Je(P) ? P : [P];
                    try {
                        for (var p = !0, g = (f = void 0, V(Ya(S))), x; x = yield T(g.next()), u = x.done, !u; p = !0) {
                            y = x.value, p = !1;
                            const E = y;
                            c(E), M === void 0 ? v.get(E).push(A) : v.get(E)[M] = A
                        }
                    } catch (E) {
                        f = {
                            error: E
                        }
                    } finally {
                        try {
                            !p && !u && (l = g.return) && (yield T(l.call(g)))
                        } finally {
                            if (f) throw f.error
                        }
                    }
                }
            } catch (A) {
                i = {
                    error: A
                }
            } finally {
                try {
                    !d && !o && (a = h.return) && (yield T(a.call(h)))
                } finally {
                    if (i) throw i.error
                }
            }
            for (const A of v) yield yield T(A)
        })
    }

    function* fo(e, t) {
        const r = Ye(e);
        t !== void 0 ? r.sort(t) : r.sort();
        for (const n of r) yield n
    }

    function gs(e, t) {
        return J(this, arguments, function*() {
            const n = yield T(Va(e));
            t !== void 0 ? n.sort(t) : n.sort();
            for (const o of n) yield yield T(o)
        })
    }
    var lo = function(e) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var t = e[Symbol.asyncIterator],
                r;
            return t ? t.call(e) : (e = typeof __values == "function" ? __values(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
                return this
            }, r);

            function n(i) {
                r[i] = e[i] && function(a) {
                    return new Promise(function(s, u) {
                        a = e[i](a), o(s, u, a.done, a.value)
                    })
                }
            }

            function o(i, a, s, u) {
                Promise.resolve(u).then(function(f) {
                    i({
                        value: f,
                        done: s
                    })
                }, a)
            }
        },
        Ce = function(e) {
            return this instanceof Ce ? (this.v = e, this) : new Ce(e)
        },
        ws = function(e) {
            var t, r;
            return t = {}, n("next"), n("throw", function(o) {
                throw o
            }), n("return"), t[Symbol.iterator] = function() {
                return this
            }, t;

            function n(o, i) {
                t[o] = e[o] ? function(a) {
                    return (r = !r) ? {
                        value: Ce(e[o](a)),
                        done: !1
                    } : i ? i(a) : a
                } : i
            }
        },
        bs = function(e, t, r) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var n = r.apply(e, t || []),
                o, i = [];
            return o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", a), o[Symbol.asyncIterator] = function() {
                return this
            }, o;

            function a(c) {
                return function(d) {
                    return Promise.resolve(d).then(c, y)
                }
            }

            function s(c, d) {
                n[c] && (o[c] = function(h) {
                    return new Promise(function(m, p) {
                        i.push([c, h, m, p]) > 1 || u(c, h)
                    })
                }, d && (o[c] = d(o[c])))
            }

            function u(c, d) {
                try {
                    f(n[c](d))
                } catch (h) {
                    v(i[0][3], h)
                }
            }

            function f(c) {
                c.value instanceof Ce ? Promise.resolve(c.value.v).then(l, y) : v(i[0][2], c)
            }

            function l(c) {
                u("next", c)
            }

            function y(c) {
                u("throw", c)
            }

            function v(c, d) {
                c(d), i.shift(), i.length && u(i[0][0], i[0][1])
            }
        };

    function* Ss(e = 1, t = 1) {
        for (let r = e;; r += t) yield r
    }

    function* yo(e) {
        const t = [...L(e)];
        if (t.length !== 0)
            for (;;)
                for (const r of t) yield r
    }

    function _s(e) {
        return bs(this, arguments, function*() {
            var r, n, o, i;
            const a = [];
            try {
                for (var s = !0, u = lo(H(e)), f; f = yield Ce(u.next()), r = f.done, !r; s = !0) {
                    i = f.value, s = !1;
                    const l = i;
                    a.push(l), yield yield Ce(l)
                }
            } catch (l) {
                n = {
                    error: l
                }
            } finally {
                try {
                    !s && !r && (o = u.return) && (yield Ce(o.call(u)))
                } finally {
                    if (n) throw n.error
                }
            }
            yield Ce(yield* ws(lo(yo(a))))
        })
    }

    function* Es(e) {
        for (;;) yield e
    }
    var Yt = function(e) {
        return this instanceof Yt ? (this.v = e, this) : new Yt(e)
    };

    function* As(e, t) {
        let r = 0;
        for (const n of po(L(e), t)) r++, yield n / r
    }

    function* xs(e, t) {
        t !== void 0 && (yield t);
        let r = t ?? 0;
        for (const n of L(e)) r -= Number(n), yield r
    }

    function* Rs(e, t) {
        t !== void 0 && (yield t);
        let r = t ?? -1 / 0;
        for (const n of L(e)) r = Math.max(r, n), yield r
    }

    function* Os(e, t) {
        t !== void 0 && (yield t);
        let r = t ?? 1 / 0;
        for (const n of L(e)) r = Math.min(r, n), yield r
    }

    function* Ts(e, t) {
        t !== void 0 && (yield t);
        let r = t ?? 1;
        for (const n of L(e)) r *= Number(n), yield r
    }

    function* po(e, t) {
        t !== void 0 && (yield t);
        let r = t ?? 0;
        for (const n of L(e)) r += Number(n), yield r
    }
    var _t = function(e) {
        return this instanceof _t ? (this.v = e, this) : new _t(e)
    };

    function* Ps(...e) {
        if (e.length === 0) return;
        if (e.length === 1) {
            for (const n of L(e[0])) yield [n];
            return
        }
        const r = Ye(wt(e, n => Ye(n))).reduce((n, o) => n.flatMap(i => o.map(a => [...i, a])), [
            []
        ]);
        for (const n of r) yield n
    }

    function* Is(e, t) {
        if (t < 0) throw new W("Parameter 'length' cannot be negative");
        const r = Ye(e);

        function* n(o, i) {
            if (o.length === t) yield o.slice();
            else
                for (let a = 0; a < i.length; a++) {
                    const s = [...o, i[a]],
                        u = i.slice(0, a).concat(i.slice(a + 1));
                    yield* n(s, u)
                }
        }
        yield* n([], r)
    }

    function* Ms(e, t) {
        if (t < 0) throw new W("Parameter 'length' cannot be negative");
        const r = Ye(e),
            n = r.length;
        if (t === 0) {
            yield [];
            return
        }
        if (t > n || t < 0) return;
        const o = Array.from({
            length: t
        }, (i, a) => a);
        for (yield o.map(i => r[i]);;) {
            let i = t - 1;
            for (; i >= 0 && o[i] === i + n - t;) i--;
            if (i < 0) break;
            o[i]++;
            for (let a = i + 1; a < t; a++) o[a] = o[a - 1] + 1;
            yield o.map(a => r[a])
        }
    }
    class de {
        static of (t) {
            return new de(L(t))
        }
        static ofEmpty() {
            return new de([])
        }
        static ofCount(t = 1, r = 1) {
            return new de(Zt.count(t, r))
        }
        static ofCycle(t) {
            return new de(Zt.cycle(t))
        }
        static ofRepeat(t) {
            return new de(Zt.repeat(t))
        }
        zipWith(...t) {
            return this.data = Dn(this.data, ...t), this
        }
        zipFilledWith(t, ...r) {
            return this.data = Ea(t, this.data, ...r), this
        }
        zipLongestWith(...t) {
            return this.data = Aa(this.data, ...t), this
        }
        zipEqualWith(...t) {
            return this.data = Un(this.data, ...t), this
        }
        chainWith(...t) {
            return this.data = xa(this.data, ...t), this
        }
        chunkwiseOverlap(t, r, n = !0) {
            return this.data = bt(this.data, t, r, n), this
        }
        chunkwise(t) {
            return this.data = no(this.data, t), this
        }
        compress(t) {
            return this.data = Jn(this.data, t), this
        }
        dropWhile(t) {
            return this.data = Yn(this.data, t), this
        }
        filter(t) {
            return this.data = ro(this.data, t), this
        }
        enumerate() {
            return this.data = St(this.data), this
        }
        keys() {
            return this.data = ao(this.data), this
        }
        limit(t) {
            return this.data = oo(this.data, t), this
        }
        map(t) {
            return this.data = wt(this.data, t), this
        }
        flatMap(t) {
            return this.data = eo(this.data, t), this
        }
        flatten(t = 1 / 0) {
            return this.data = Xt(this.data, t), this
        }
        groupBy(t, r) {
            return this.data = co(this.data, t, r), this
        }
        pairwise() {
            return this.data = lt(this.data), this
        }
        runningAverage(t) {
            return this.data = As(this.data, t), this
        }
        runningDifference(t) {
            return this.data = xs(this.data, t), this
        }
        runningMax(t) {
            return this.data = Rs(this.data, t), this
        }
        runningMin(t) {
            return this.data = Os(this.data, t), this
        }
        runningProduct(t) {
            return this.data = Ts(this.data, t), this
        }
        runningTotal(t) {
            return this.data = po(this.data, t), this
        }
        skip(t, r = 0) {
            return this.data = so(this.data, t, r), this
        }
        slice(t = 0, r, n = 1) {
            return this.data = io(this.data, t, r, n), this
        }
        takeWhile(t) {
            return this.data = Zn(this.data, t), this
        }
        values() {
            return this.data = uo(this.data), this
        }
        sort(t) {
            return this.data = fo(this.data, t), this
        }
        distinct(t) {
            return this.data = Kt(this.data, t), this
        }
        intersectionWith(...t) {
            return this.data = Za(this.data, ...t), this
        }
        partialIntersectionWith(t, ...r) {
            return this.data = Qt(t, this.data, ...r), this
        }
        symmetricDifferenceWith(...t) {
            return this.data = es(this.data, ...t), this
        }
        unionWith(...t) {
            return this.data = ts(this.data, ...t), this
        }
        cartesianProductWith(...t) {
            return this.data = Ps(this.data, ...t), this
        }
        permutations(t) {
            return this.data = Is(this.data, t), this
        }
        combinations(t) {
            return this.data = Ms(this.data, t), this
        }
        peek(t) {
            const [r, n] = Vt(this.data, 2);
            this.data = r;
            for (const o of n) t(o);
            return this
        }
        peekStream(t) {
            const [r, n] = Vt(this.data, 2);
            return this.data = r, t(de.of(n)), this
        }
        toValue(t, r) {
            return ve(this, t, r)
        }
        toAverage() {
            return Nn(this)
        }
        toCount() {
            return gt(this)
        }
        toMax(t) {
            return Fn(this, t)
        }
        toMin(t) {
            return jn(this, t)
        }
        toMinMax(t) {
            return Wt(this, t)
        }
        toFirst() {
            return Wn(this)
        }
        toFirstAndLast() {
            return Vn(this)
        }
        toLast() {
            return zn(this)
        }
        toSum() {
            return Hn(this)
        }
        toProduct() {
            return Gn(this)
        }
        toRange() {
            return Bn(this)
        }
        allMatch(t) {
            return Da(this, t)
        }
        allUnique() {
            return Ua(this)
        }
        anyMatch(t) {
            return Na(this, t)
        }
        exactlyN(t, r) {
            return Fa(this, t, r)
        }
        isSorted() {
            return ka(this)
        }
        isReversed() {
            return ja(this)
        }
        noneMatch(t) {
            return Ba(this, t)
        }
        sameWith(...t) {
            return Ha(this.data, ...t)
        }
        sameCountWith(...t) {
            return Ga(this.data, ...t)
        }
        tee(t) {
            return Vt(this.data, t).map(r => new de(r))
        }
        toArray() {
            return Ye(this)
        }
        toMap() {
            return Ka(this)
        }
        toSet() {
            return Qa(this)
        }*[Symbol.iterator]() {
            for (const t of this.data) yield t
        }
        constructor(t) {
            this.data = t
        }
    }
    const ho = {
            chunkwise: no,
            chunkwiseOverlap: bt,
            compress: Jn,
            dropWhile: Yn,
            enumerate: St,
            filter: ro,
            flatMap: eo,
            flatten: Xt,
            groupBy: co,
            keys: ao,
            limit: oo,
            map: wt,
            pairwise: lt,
            repeat: is,
            skip: so,
            slice: io,
            sort: fo,
            takeWhile: Zn,
            values: uo,
            chunkwiseAsync: cs,
            chunkwiseOverlapAsync: Jt,
            compressAsync: rs,
            dropWhileAsync: ns,
            enumerateAsync: ds,
            filterAsync: us,
            flatMapAsync: ss,
            flattenAsync: to,
            groupByAsync: vs,
            keysAsync: ps,
            limitAsync: ls,
            mapAsync: Xn,
            pairwiseAsync: fs,
            repeatAsync: as,
            skipAsync: hs,
            sliceAsync: ys,
            sortAsync: gs,
            takeWhileAsync: os,
            valuesAsync: ms
        },
        Zt = {
            count: Ss,
            cycle: yo,
            cycleAsync: _s,
            repeat: Es
        },
        mo = {
            toAverage: Nn,
            toCount: gt,
            toFirst: Wn,
            toFirstAndLast: Vn,
            toLast: zn,
            toMax: Fn,
            toMin: jn,
            toMinMax: Wt,
            toProduct: Gn,
            toRange: Bn,
            toSum: Hn,
            toValue: ve,
            toAverageAsync: Ra,
            toCountAsync: qa,
            toFirstAsync: Ca,
            toFirstAndLastAsync: La,
            toLastAsync: $a,
            toMaxAsync: Oa,
            toMinAsync: Ta,
            toMinMaxAsync: kn,
            toProductAsync: Ma,
            toRangeAsync: Pa,
            toSumAsync: Ia,
            toValueAsync: _e
        };
    var xe = {},
        vo;

    function qs() {
        if (vo) return xe;
        vo = 1, Object.defineProperty(xe, "__esModule", {
            value: !0
        }), xe.TokenData = void 0, xe.parse = y, xe.compile = v, xe.match = h, xe.pathToRegexp = m, xe.stringify = A;
        const e = "/",
            t = S => S,
            r = /^[$_\p{ID_Start}]$/u,
            n = /^[$\u200c\u200d\p{ID_Continue}]$/u,
            o = "https://git.new/pathToRegexpError",
            i = {
                "{": "{",
                "}": "}",
                "(": "(",
                ")": ")",
                "[": "[",
                "]": "]",
                "+": "+",
                "?": "?",
                "!": "!"
            };

        function a(S) {
            return S.replace(/[{}()\[\]+?!:*]/g, "\\$&")
        }

        function s(S) {
            return S.replace(/[.+*?^${}()[\]|/\\]/g, "\\$&")
        }

        function* u(S) {
            const E = [...S];
            let _ = 0;

            function O() {
                let I = "";
                if (r.test(E[++_]))
                    for (I += E[_]; n.test(E[++_]);) I += E[_];
                else if (E[_] === '"') {
                    let R = _;
                    for (; _ < E.length;) {
                        if (E[++_] === '"') {
                            _++, R = 0;
                            break
                        }
                        E[_] === "\\" ? I += E[++_] : I += E[_]
                    }
                    if (R) throw new TypeError(`Unterminated quote at ${R}: ${o}`)
                }
                if (!I) throw new TypeError(`Missing parameter name at ${_}: ${o}`);
                return I
            }
            for (; _ < E.length;) {
                const I = E[_],
                    R = i[I];
                if (R) yield {
                    type: R,
                    index: _++,
                    value: I
                };
                else if (I === "\\") yield {
                    type: "ESCAPED",
                    index: _++,
                    value: E[_++]
                };
                else if (I === ":") {
                    const C = O();
                    yield {
                        type: "PARAM",
                        index: _,
                        value: C
                    }
                } else if (I === "*") {
                    const C = O();
                    yield {
                        type: "WILDCARD",
                        index: _,
                        value: C
                    }
                } else yield {
                    type: "CHAR",
                    index: _,
                    value: E[_++]
                }
            }
            return {
                type: "END",
                index: _,
                value: ""
            }
        }
        class f {
            constructor(E) {
                this.tokens = E
            }
            peek() {
                if (!this._peek) {
                    const E = this.tokens.next();
                    this._peek = E.value
                }
                return this._peek
            }
            tryConsume(E) {
                const _ = this.peek();
                if (_.type === E) return this._peek = void 0, _.value
            }
            consume(E) {
                const _ = this.tryConsume(E);
                if (_ !== void 0) return _;
                const {
                    type: O,
                    index: I
                } = this.peek();
                throw new TypeError(`Unexpected ${O} at ${I}, expected ${E}: ${o}`)
            }
            text() {
                let E = "",
                    _;
                for (; _ = this.tryConsume("CHAR") || this.tryConsume("ESCAPED");) E += _;
                return E
            }
        }
        class l {
            constructor(E) {
                this.tokens = E
            }
        }
        xe.TokenData = l;

        function y(S, E = {}) {
            const {
                encodePath: _ = t
            } = E, O = new f(u(S));

            function I(C) {
                const q = [];
                for (;;) {
                    const U = O.text();
                    U && q.push({
                        type: "text",
                        value: _(U)
                    });
                    const z = O.tryConsume("PARAM");
                    if (z) {
                        q.push({
                            type: "param",
                            name: z
                        });
                        continue
                    }
                    const re = O.tryConsume("WILDCARD");
                    if (re) {
                        q.push({
                            type: "wildcard",
                            name: re
                        });
                        continue
                    }
                    if (O.tryConsume("{")) {
                        q.push({
                            type: "group",
                            tokens: I("}")
                        });
                        continue
                    }
                    return O.consume(C), q
                }
            }
            const R = I("END");
            return new l(R)
        }

        function v(S, E = {}) {
            const {
                encode: _ = encodeURIComponent,
                delimiter: O = e
            } = E, I = S instanceof l ? S : y(S, E), R = c(I.tokens, O, _);
            return function(q = {}) {
                const [U, ...z] = R(q);
                if (z.length) throw new TypeError(`Missing parameters: ${z.join(", ")}`);
                return U
            }
        }

        function c(S, E, _) {
            const O = S.map(I => d(I, E, _));
            return I => {
                const R = [""];
                for (const C of O) {
                    const [q, ...U] = C(I);
                    R[0] += q, R.push(...U)
                }
                return R
            }
        }

        function d(S, E, _) {
            if (S.type === "text") return () => [S.value];
            if (S.type === "group") {
                const I = c(S.tokens, E, _);
                return R => {
                    const [C, ...q] = I(R);
                    return q.length ? [""] : [C]
                }
            }
            const O = _ || t;
            return S.type === "wildcard" && _ !== !1 ? I => {
                const R = I[S.name];
                if (R == null) return ["", S.name];
                if (!Array.isArray(R) || R.length === 0) throw new TypeError(`Expected "${S.name}" to be a non-empty array`);
                return [R.map((C, q) => {
                    if (typeof C != "string") throw new TypeError(`Expected "${S.name}/${q}" to be a string`);
                    return O(C)
                }).join(E)]
            } : I => {
                const R = I[S.name];
                if (R == null) return ["", S.name];
                if (typeof R != "string") throw new TypeError(`Expected "${S.name}" to be a string`);
                return [O(R)]
            }
        }

        function h(S, E = {}) {
            const {
                decode: _ = decodeURIComponent,
                delimiter: O = e
            } = E, {
                regexp: I,
                keys: R
            } = m(S, E), C = R.map(q => _ === !1 ? t : q.type === "param" ? _ : U => U.split(O).map(_));
            return function(U) {
                const z = I.exec(U);
                if (!z) return !1;
                const re = z[0],
                    $ = Object.create(null);
                for (let K = 1; K < z.length; K++) {
                    if (z[K] === void 0) continue;
                    const ee = R[K - 1],
                        ge = C[K - 1];
                    $[ee.name] = ge(z[K])
                }
                return {
                    path: re,
                    params: $
                }
            }
        }

        function m(S, E = {}) {
            const {
                delimiter: _ = e,
                end: O = !0,
                sensitive: I = !1,
                trailing: R = !0
            } = E, C = [], q = [], U = I ? "" : "i", re = (Array.isArray(S) ? S : [S]).map(ee => ee instanceof l ? ee : y(ee, E));
            for (const {
                    tokens: ee
                } of re)
                for (const ge of p(ee, 0, [])) {
                    const Re = g(ge, _, C);
                    q.push(Re)
                }
            let $ = `^(?:${q.join("|")})`;
            return R && ($ += `(?:${s(_)}$)?`), $ += O ? "$" : `(?=${s(_)}|$)`, {
                regexp: new RegExp($, U),
                keys: C
            }
        }

        function* p(S, E, _) {
            if (E === S.length) return yield _;
            const O = S[E];
            if (O.type === "group") {
                const I = _.slice();
                for (const R of p(O.tokens, 0, I)) yield* p(S, E + 1, R)
            } else _.push(O);
            yield* p(S, E + 1, _)
        }

        function g(S, E, _) {
            let O = "",
                I = "",
                R = !0;
            for (let C = 0; C < S.length; C++) {
                const q = S[C];
                if (q.type === "text") {
                    O += s(q.value), I += q.value, R || (R = q.value.includes(E));
                    continue
                }
                if (q.type === "param" || q.type === "wildcard") {
                    if (!R && !I) throw new TypeError(`Missing text after "${q.name}": ${o}`);
                    q.type === "param" ? O += `(${x(E,R?"":I)}+)` : O += "([\\s\\S]+)", _.push(q), I = "", R = !1;
                    continue
                }
            }
            return O
        }

        function x(S, E) {
            return E.length < 2 ? S.length < 2 ? `[^${s(S+E)}]` : `(?:(?!${s(S)})[^${s(E)}])` : S.length < 2 ? `(?:(?!${s(E)})[^${s(S)}])` : `(?:(?!${s(E)}|${s(S)})[\\s\\S])`
        }

        function A(S) {
            return S.tokens.map(function E(_, O, I) {
                if (_.type === "text") return a(_.value);
                if (_.type === "group") return `{${_.tokens.map(E).join("")}}`;
                const C = P(_.name) && M(I[O + 1]) ? _.name : JSON.stringify(_.name);
                if (_.type === "param") return `:${C}`;
                if (_.type === "wildcard") return `*${C}`;
                throw new TypeError(`Unexpected token: ${_}`)
            }).join("")
        }

        function P(S) {
            const [E, ..._] = S;
            return r.test(E) ? _.every(O => n.test(O)) : !1
        }

        function M(S) {
            return (S == null ? void 0 : S.type) !== "text" ? !0 : !n.test(S.value[0])
        }
        return xe
    }
    var go = qs(),
        er, wo;

    function Ze() {
        return wo || (wo = 1, er = TypeError), er
    }
    const Cs = Be(Object.freeze(Object.defineProperty({
        __proto__: null,
        default: {}
    }, Symbol.toStringTag, {
        value: "Module"
    })));
    var tr, bo;

    function Et() {
        if (bo) return tr;
        bo = 1;
        var e = typeof Map == "function" && Map.prototype,
            t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
            r = e && t && typeof t.get == "function" ? t.get : null,
            n = e && Map.prototype.forEach,
            o = typeof Set == "function" && Set.prototype,
            i = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
            a = o && i && typeof i.get == "function" ? i.get : null,
            s = o && Set.prototype.forEach,
            u = typeof WeakMap == "function" && WeakMap.prototype,
            f = u ? WeakMap.prototype.has : null,
            l = typeof WeakSet == "function" && WeakSet.prototype,
            y = l ? WeakSet.prototype.has : null,
            v = typeof WeakRef == "function" && WeakRef.prototype,
            c = v ? WeakRef.prototype.deref : null,
            d = Boolean.prototype.valueOf,
            h = Object.prototype.toString,
            m = Function.prototype.toString,
            p = String.prototype.match,
            g = String.prototype.slice,
            x = String.prototype.replace,
            A = String.prototype.toUpperCase,
            P = String.prototype.toLowerCase,
            M = RegExp.prototype.test,
            S = Array.prototype.concat,
            E = Array.prototype.join,
            _ = Array.prototype.slice,
            O = Math.floor,
            I = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
            R = Object.getOwnPropertySymbols,
            C = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
            q = typeof Symbol == "function" && typeof Symbol.iterator == "object",
            U = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === q || !0) ? Symbol.toStringTag : null,
            z = Object.prototype.propertyIsEnumerable,
            re = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(w) {
                return w.__proto__
            } : null);

        function $(w, b) {
            if (w === 1 / 0 || w === -1 / 0 || w !== w || w && w > -1e3 && w < 1e3 || M.call(/e/, b)) return b;
            var F = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
            if (typeof w == "number") {
                var k = w < 0 ? -O(-w) : O(w);
                if (k !== w) {
                    var B = String(k),
                        D = g.call(b, B.length + 1);
                    return x.call(B, F, "$&_") + "." + x.call(x.call(D, /([0-9]{3})/g, "$&_"), /_$/, "")
                }
            }
            return x.call(b, F, "$&_")
        }
        var K = Cs,
            ee = K.custom,
            ge = ne(ee) ? ee : null,
            Re = {
                __proto__: null,
                double: '"',
                single: "'"
            },
            $e = {
                __proto__: null,
                double: /(["\\])/g,
                single: /(['\\])/g
            };
        tr = function w(b, F, k, B) {
            var D = F || {};
            if (se(D, "quoteStyle") && !se(Re, D.quoteStyle)) throw new TypeError('option "quoteStyle" must be "single" or "double"');
            if (se(D, "maxStringLength") && (typeof D.maxStringLength == "number" ? D.maxStringLength < 0 && D.maxStringLength !== 1 / 0 : D.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
            var Fe = se(D, "customInspect") ? D.customInspect : !0;
            if (typeof Fe != "boolean" && Fe !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
            if (se(D, "indent") && D.indent !== null && D.indent !== "	" && !(parseInt(D.indent, 10) === D.indent && D.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
            if (se(D, "numericSeparator") && typeof D.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
            var We = D.numericSeparator;
            if (typeof b > "u") return "undefined";
            if (b === null) return "null";
            if (typeof b == "boolean") return b ? "true" : "false";
            if (typeof b == "string") return ji(b, D);
            if (typeof b == "number") {
                if (b === 0) return 1 / 0 / b > 0 ? "0" : "-0";
                var fe = String(b);
                return We ? $(b, fe) : fe
            }
            if (typeof b == "bigint") {
                var je = String(b) + "n";
                return We ? $(b, je) : je
            }
            var hn = typeof D.depth > "u" ? 5 : D.depth;
            if (typeof k > "u" && (k = 0), k >= hn && hn > 0 && typeof b == "object") return De(b) ? "[Array]" : "[Object]";
            var ot = gc(D, k);
            if (typeof B > "u") B = [];
            else if (Ne(B, b) >= 0) return "[Circular]";

            function be(it, Ct, bc) {
                if (Ct && (B = _.call(B), B.push(Ct)), bc) {
                    var Qi = {
                        depth: D.depth
                    };
                    return se(D, "quoteStyle") && (Qi.quoteStyle = D.quoteStyle), w(it, Qi, k + 1, B)
                }
                return w(it, D, k + 1, B)
            }
            if (typeof b == "function" && !te(b)) {
                var Bi = et(b),
                    Hi = Mt(b, be);
                return "[Function" + (Bi ? ": " + Bi : " (anonymous)") + "]" + (Hi.length > 0 ? " { " + E.call(Hi, ", ") + " }" : "")
            }
            if (ne(b)) {
                var Gi = q ? x.call(String(b), /^(Symbol\(.*\))_[^)]*$/, "$1") : C.call(b);
                return typeof b == "object" && !q ? yt(Gi) : Gi
            }
            if (hc(b)) {
                for (var pt = "<" + P.call(String(b.nodeName)), mn = b.attributes || [], qt = 0; qt < mn.length; qt++) pt += " " + mn[qt].name + "=" + Le(Te(mn[qt].value), "double", D);
                return pt += ">", b.childNodes && b.childNodes.length && (pt += "..."), pt += "</" + P.call(String(b.nodeName)) + ">", pt
            }
            if (De(b)) {
                if (b.length === 0) return "[]";
                var vn = Mt(b, be);
                return ot && !vc(vn) ? "[" + pn(vn, ot) + "]" : "[ " + E.call(vn, ", ") + " ]"
            }
            if (N(b)) {
                var gn = Mt(b, be);
                return !("cause" in Error.prototype) && "cause" in b && !z.call(b, "cause") ? "{ [" + String(b) + "] " + E.call(S.call("[cause]: " + be(b.cause), gn), ", ") + " }" : gn.length === 0 ? "[" + String(b) + "]" : "{ [" + String(b) + "] " + E.call(gn, ", ") + " }"
            }
            if (typeof b == "object" && Fe) {
                if (ge && typeof b[ge] == "function" && K) return K(b, {
                    depth: hn - k
                });
                if (Fe !== "symbol" && typeof b.inspect == "function") return b.inspect()
            }
            if (we(b)) {
                var Wi = [];
                return n && n.call(b, function(it, Ct) {
                    Wi.push(be(Ct, b, !0) + " => " + be(it, b))
                }), ki("Map", r.call(b), Wi, ot)
            }
            if (nt(b)) {
                var zi = [];
                return s && s.call(b, function(it) {
                    zi.push(be(it, b))
                }), ki("Set", a.call(b), zi, ot)
            }
            if (tt(b)) return yn("WeakMap");
            if (pc(b)) return yn("WeakSet");
            if (rt(b)) return yn("WeakRef");
            if (j(b)) return yt(be(Number(b)));
            if (pe(b)) return yt(be(I.call(b)));
            if (Y(b)) return yt(d.call(b));
            if (Q(b)) return yt(be(String(b)));
            if (typeof window < "u" && b === window) return "{ [object Window] }";
            if (typeof globalThis < "u" && b === globalThis || typeof Se < "u" && b === Se) return "{ [object globalThis] }";
            if (!Ue(b) && !te(b)) {
                var wn = Mt(b, be),
                    Vi = re ? re(b) === Object.prototype : b instanceof Object || b.constructor === Object,
                    bn = b instanceof Object ? "" : "null prototype",
                    Ki = !Vi && U && Object(b) === b && U in b ? g.call(he(b), 8, -1) : bn ? "Object" : "",
                    wc = Vi || typeof b.constructor != "function" ? "" : b.constructor.name ? b.constructor.name + " " : "",
                    Sn = wc + (Ki || bn ? "[" + E.call(S.call([], Ki || [], bn || []), ": ") + "] " : "");
                return wn.length === 0 ? Sn + "{}" : ot ? Sn + "{" + pn(wn, ot) + "}" : Sn + "{ " + E.call(wn, ", ") + " }"
            }
            return String(b)
        };

        function Le(w, b, F) {
            var k = F.quoteStyle || b,
                B = Re[k];
            return B + w + B
        }

        function Te(w) {
            return x.call(String(w), /"/g, "&quot;")
        }

        function ye(w) {
            return !U || !(typeof w == "object" && (U in w || typeof w[U] < "u"))
        }

        function De(w) {
            return he(w) === "[object Array]" && ye(w)
        }

        function Ue(w) {
            return he(w) === "[object Date]" && ye(w)
        }

        function te(w) {
            return he(w) === "[object RegExp]" && ye(w)
        }

        function N(w) {
            return he(w) === "[object Error]" && ye(w)
        }

        function Q(w) {
            return he(w) === "[object String]" && ye(w)
        }

        function j(w) {
            return he(w) === "[object Number]" && ye(w)
        }

        function Y(w) {
            return he(w) === "[object Boolean]" && ye(w)
        }

        function ne(w) {
            if (q) return w && typeof w == "object" && w instanceof Symbol;
            if (typeof w == "symbol") return !0;
            if (!w || typeof w != "object" || !C) return !1;
            try {
                return C.call(w), !0
            } catch {}
            return !1
        }

        function pe(w) {
            if (!w || typeof w != "object" || !I) return !1;
            try {
                return I.call(w), !0
            } catch {}
            return !1
        }
        var oe = Object.prototype.hasOwnProperty || function(w) {
            return w in this
        };

        function se(w, b) {
            return oe.call(w, b)
        }

        function he(w) {
            return h.call(w)
        }

        function et(w) {
            if (w.name) return w.name;
            var b = p.call(m.call(w), /^function\s*([\w$]+)/);
            return b ? b[1] : null
        }

        function Ne(w, b) {
            if (w.indexOf) return w.indexOf(b);
            for (var F = 0, k = w.length; F < k; F++)
                if (w[F] === b) return F;
            return -1
        }

        function we(w) {
            if (!r || !w || typeof w != "object") return !1;
            try {
                r.call(w);
                try {
                    a.call(w)
                } catch {
                    return !0
                }
                return w instanceof Map
            } catch {}
            return !1
        }

        function tt(w) {
            if (!f || !w || typeof w != "object") return !1;
            try {
                f.call(w, f);
                try {
                    y.call(w, y)
                } catch {
                    return !0
                }
                return w instanceof WeakMap
            } catch {}
            return !1
        }

        function rt(w) {
            if (!c || !w || typeof w != "object") return !1;
            try {
                return c.call(w), !0
            } catch {}
            return !1
        }

        function nt(w) {
            if (!a || !w || typeof w != "object") return !1;
            try {
                a.call(w);
                try {
                    r.call(w)
                } catch {
                    return !0
                }
                return w instanceof Set
            } catch {}
            return !1
        }

        function pc(w) {
            if (!y || !w || typeof w != "object") return !1;
            try {
                y.call(w, y);
                try {
                    f.call(w, f)
                } catch {
                    return !0
                }
                return w instanceof WeakSet
            } catch {}
            return !1
        }

        function hc(w) {
            return !w || typeof w != "object" ? !1 : typeof HTMLElement < "u" && w instanceof HTMLElement ? !0 : typeof w.nodeName == "string" && typeof w.getAttribute == "function"
        }

        function ji(w, b) {
            if (w.length > b.maxStringLength) {
                var F = w.length - b.maxStringLength,
                    k = "... " + F + " more character" + (F > 1 ? "s" : "");
                return ji(g.call(w, 0, b.maxStringLength), b) + k
            }
            var B = $e[b.quoteStyle || "single"];
            B.lastIndex = 0;
            var D = x.call(x.call(w, B, "\\$1"), /[\x00-\x1f]/g, mc);
            return Le(D, "single", b)
        }

        function mc(w) {
            var b = w.charCodeAt(0),
                F = {
                    8: "b",
                    9: "t",
                    10: "n",
                    12: "f",
                    13: "r"
                } [b];
            return F ? "\\" + F : "\\x" + (b < 16 ? "0" : "") + A.call(b.toString(16))
        }

        function yt(w) {
            return "Object(" + w + ")"
        }

        function yn(w) {
            return w + " { ? }"
        }

        function ki(w, b, F, k) {
            var B = k ? pn(F, k) : E.call(F, ", ");
            return w + " (" + b + ") {" + B + "}"
        }

        function vc(w) {
            for (var b = 0; b < w.length; b++)
                if (Ne(w[b], `
`) >= 0) return !1;
            return !0
        }

        function gc(w, b) {
            var F;
            if (w.indent === "	") F = "	";
            else if (typeof w.indent == "number" && w.indent > 0) F = E.call(Array(w.indent + 1), " ");
            else return null;
            return {
                base: F,
                prev: E.call(Array(b + 1), F)
            }
        }

        function pn(w, b) {
            if (w.length === 0) return "";
            var F = `
` + b.prev + b.base;
            return F + E.call(w, "," + F) + `
` + b.prev
        }

        function Mt(w, b) {
            var F = De(w),
                k = [];
            if (F) {
                k.length = w.length;
                for (var B = 0; B < w.length; B++) k[B] = se(w, B) ? b(w[B], w) : ""
            }
            var D = typeof R == "function" ? R(w) : [],
                Fe;
            if (q) {
                Fe = {};
                for (var We = 0; We < D.length; We++) Fe["$" + D[We]] = D[We]
            }
            for (var fe in w) se(w, fe) && (F && String(Number(fe)) === fe && fe < w.length || q && Fe["$" + fe] instanceof Symbol || (M.call(/[^\w$]/, fe) ? k.push(b(fe, w) + ": " + b(w[fe], w)) : k.push(fe + ": " + b(w[fe], w))));
            if (typeof R == "function")
                for (var je = 0; je < D.length; je++) z.call(w, D[je]) && k.push("[" + b(D[je]) + "]: " + b(w[D[je]], w));
            return k
        }
        return tr
    }
    var rr, So;

    function $s() {
        if (So) return rr;
        So = 1;
        var e = Et(),
            t = Ze(),
            r = function(s, u, f) {
                for (var l = s, y;
                    (y = l.next) != null; l = y)
                    if (y.key === u) return l.next = y.next, f || (y.next = s.next, s.next = y), y
            },
            n = function(s, u) {
                if (s) {
                    var f = r(s, u);
                    return f && f.value
                }
            },
            o = function(s, u, f) {
                var l = r(s, u);
                l ? l.value = f : s.next = {
                    key: u,
                    next: s.next,
                    value: f
                }
            },
            i = function(s, u) {
                return s ? !!r(s, u) : !1
            },
            a = function(s, u) {
                if (s) return r(s, u, !0)
            };
        return rr = function() {
            var u, f = {
                assert: function(l) {
                    if (!f.has(l)) throw new t("Side channel does not contain " + e(l))
                },
                delete: function(l) {
                    var y = u && u.next,
                        v = a(u, l);
                    return v && y && y === v && (u = void 0), !!v
                },
                get: function(l) {
                    return n(u, l)
                },
                has: function(l) {
                    return i(u, l)
                },
                set: function(l, y) {
                    u || (u = {
                        next: void 0
                    }), o(u, l, y)
                }
            };
            return f
        }, rr
    }
    var nr, _o;

    function Eo() {
        return _o || (_o = 1, nr = Object), nr
    }
    var or, Ao;

    function Ls() {
        return Ao || (Ao = 1, or = Error), or
    }
    var ir, xo;

    function Ds() {
        return xo || (xo = 1, ir = EvalError), ir
    }
    var ar, Ro;

    function Us() {
        return Ro || (Ro = 1, ar = RangeError), ar
    }
    var sr, Oo;

    function Ns() {
        return Oo || (Oo = 1, sr = ReferenceError), sr
    }
    var ur, To;

    function Fs() {
        return To || (To = 1, ur = SyntaxError), ur
    }
    var cr, Po;

    function js() {
        return Po || (Po = 1, cr = URIError), cr
    }
    var fr, Io;

    function ks() {
        return Io || (Io = 1, fr = Math.abs), fr
    }
    var lr, Mo;

    function Bs() {
        return Mo || (Mo = 1, lr = Math.floor), lr
    }
    var dr, qo;

    function Hs() {
        return qo || (qo = 1, dr = Math.max), dr
    }
    var yr, Co;

    function Gs() {
        return Co || (Co = 1, yr = Math.min), yr
    }
    var pr, $o;

    function Ws() {
        return $o || ($o = 1, pr = Math.pow), pr
    }
    var hr, Lo;

    function zs() {
        return Lo || (Lo = 1, hr = Math.round), hr
    }
    var mr, Do;

    function Vs() {
        return Do || (Do = 1, mr = Number.isNaN || function(t) {
            return t !== t
        }), mr
    }
    var vr, Uo;

    function Ks() {
        if (Uo) return vr;
        Uo = 1;
        var e = Vs();
        return vr = function(r) {
            return e(r) || r === 0 ? r : r < 0 ? -1 : 1
        }, vr
    }
    var gr, No;

    function Qs() {
        return No || (No = 1, gr = Object.getOwnPropertyDescriptor), gr
    }
    var wr, Fo;

    function jo() {
        if (Fo) return wr;
        Fo = 1;
        var e = Qs();
        if (e) try {
            e([], "length")
        } catch {
            e = null
        }
        return wr = e, wr
    }
    var br, ko;

    function Xs() {
        if (ko) return br;
        ko = 1;
        var e = Object.defineProperty || !1;
        if (e) try {
            e({}, "a", {
                value: 1
            })
        } catch {
            e = !1
        }
        return br = e, br
    }
    var Sr, Bo;

    function Js() {
        return Bo || (Bo = 1, Sr = function() {
            if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
            if (typeof Symbol.iterator == "symbol") return !0;
            var t = {},
                r = Symbol("test"),
                n = Object(r);
            if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") return !1;
            var o = 42;
            t[r] = o;
            for (var i in t) return !1;
            if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0) return !1;
            var a = Object.getOwnPropertySymbols(t);
            if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r)) return !1;
            if (typeof Object.getOwnPropertyDescriptor == "function") {
                var s = Object.getOwnPropertyDescriptor(t, r);
                if (s.value !== o || s.enumerable !== !0) return !1
            }
            return !0
        }), Sr
    }
    var _r, Ho;

    function Ys() {
        if (Ho) return _r;
        Ho = 1;
        var e = typeof Symbol < "u" && Symbol,
            t = Js();
        return _r = function() {
            return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t()
        }, _r
    }
    var Er, Go;

    function Wo() {
        return Go || (Go = 1, Er = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Er
    }
    var Ar, zo;

    function Vo() {
        if (zo) return Ar;
        zo = 1;
        var e = Eo();
        return Ar = e.getPrototypeOf || null, Ar
    }
    var xr, Ko;

    function Zs() {
        if (Ko) return xr;
        Ko = 1;
        var e = "Function.prototype.bind called on incompatible ",
            t = Object.prototype.toString,
            r = Math.max,
            n = "[object Function]",
            o = function(u, f) {
                for (var l = [], y = 0; y < u.length; y += 1) l[y] = u[y];
                for (var v = 0; v < f.length; v += 1) l[v + u.length] = f[v];
                return l
            },
            i = function(u, f) {
                for (var l = [], y = f, v = 0; y < u.length; y += 1, v += 1) l[v] = u[y];
                return l
            },
            a = function(s, u) {
                for (var f = "", l = 0; l < s.length; l += 1) f += s[l], l + 1 < s.length && (f += u);
                return f
            };
        return xr = function(u) {
            var f = this;
            if (typeof f != "function" || t.apply(f) !== n) throw new TypeError(e + f);
            for (var l = i(arguments, 1), y, v = function() {
                    if (this instanceof y) {
                        var p = f.apply(this, o(l, arguments));
                        return Object(p) === p ? p : this
                    }
                    return f.apply(u, o(l, arguments))
                }, c = r(0, f.length - l.length), d = [], h = 0; h < c; h++) d[h] = "$" + h;
            if (y = Function("binder", "return function (" + a(d, ",") + "){ return binder.apply(this,arguments); }")(v), f.prototype) {
                var m = function() {};
                m.prototype = f.prototype, y.prototype = new m, m.prototype = null
            }
            return y
        }, xr
    }
    var Rr, Qo;

    function At() {
        if (Qo) return Rr;
        Qo = 1;
        var e = Zs();
        return Rr = Function.prototype.bind || e, Rr
    }
    var Or, Xo;

    function Tr() {
        return Xo || (Xo = 1, Or = Function.prototype.call), Or
    }
    var Pr, Jo;

    function Yo() {
        return Jo || (Jo = 1, Pr = Function.prototype.apply), Pr
    }
    var Ir, Zo;

    function eu() {
        return Zo || (Zo = 1, Ir = typeof Reflect < "u" && Reflect && Reflect.apply), Ir
    }
    var Mr, ei;

    function tu() {
        if (ei) return Mr;
        ei = 1;
        var e = At(),
            t = Yo(),
            r = Tr(),
            n = eu();
        return Mr = n || e.call(r, t), Mr
    }
    var qr, ti;

    function ri() {
        if (ti) return qr;
        ti = 1;
        var e = At(),
            t = Ze(),
            r = Tr(),
            n = tu();
        return qr = function(i) {
            if (i.length < 1 || typeof i[0] != "function") throw new t("a function is required");
            return n(e, r, i)
        }, qr
    }
    var Cr, ni;

    function ru() {
        if (ni) return Cr;
        ni = 1;
        var e = ri(),
            t = jo(),
            r;
        try {
            r = [].__proto__ === Array.prototype
        } catch (a) {
            if (!a || typeof a != "object" || !("code" in a) || a.code !== "ERR_PROTO_ACCESS") throw a
        }
        var n = !!r && t && t(Object.prototype, "__proto__"),
            o = Object,
            i = o.getPrototypeOf;
        return Cr = n && typeof n.get == "function" ? e([n.get]) : typeof i == "function" ? function(s) {
            return i(s == null ? s : o(s))
        } : !1, Cr
    }
    var $r, oi;

    function nu() {
        if (oi) return $r;
        oi = 1;
        var e = Wo(),
            t = Vo(),
            r = ru();
        return $r = e ? function(o) {
            return e(o)
        } : t ? function(o) {
            if (!o || typeof o != "object" && typeof o != "function") throw new TypeError("getProto: not an object");
            return t(o)
        } : r ? function(o) {
            return r(o)
        } : null, $r
    }
    var Lr, ii;

    function ou() {
        if (ii) return Lr;
        ii = 1;
        var e = Function.prototype.call,
            t = Object.prototype.hasOwnProperty,
            r = At();
        return Lr = r.call(e, t), Lr
    }
    var Dr, ai;

    function Ur() {
        if (ai) return Dr;
        ai = 1;
        var e, t = Eo(),
            r = Ls(),
            n = Ds(),
            o = Us(),
            i = Ns(),
            a = Fs(),
            s = Ze(),
            u = js(),
            f = ks(),
            l = Bs(),
            y = Hs(),
            v = Gs(),
            c = Ws(),
            d = zs(),
            h = Ks(),
            m = Function,
            p = function(te) {
                try {
                    return m('"use strict"; return (' + te + ").constructor;")()
                } catch {}
            },
            g = jo(),
            x = Xs(),
            A = function() {
                throw new s
            },
            P = g ? function() {
                try {
                    return arguments.callee, A
                } catch {
                    try {
                        return g(arguments, "callee").get
                    } catch {
                        return A
                    }
                }
            }() : A,
            M = Ys()(),
            S = nu(),
            E = Vo(),
            _ = Wo(),
            O = Yo(),
            I = Tr(),
            R = {},
            C = typeof Uint8Array > "u" || !S ? e : S(Uint8Array),
            q = {
                __proto__: null,
                "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
                "%Array%": Array,
                "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
                "%ArrayIteratorPrototype%": M && S ? S([][Symbol.iterator]()) : e,
                "%AsyncFromSyncIteratorPrototype%": e,
                "%AsyncFunction%": R,
                "%AsyncGenerator%": R,
                "%AsyncGeneratorFunction%": R,
                "%AsyncIteratorPrototype%": R,
                "%Atomics%": typeof Atomics > "u" ? e : Atomics,
                "%BigInt%": typeof BigInt > "u" ? e : BigInt,
                "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
                "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
                "%Boolean%": Boolean,
                "%DataView%": typeof DataView > "u" ? e : DataView,
                "%Date%": Date,
                "%decodeURI%": decodeURI,
                "%decodeURIComponent%": decodeURIComponent,
                "%encodeURI%": encodeURI,
                "%encodeURIComponent%": encodeURIComponent,
                "%Error%": r,
                "%eval%": eval,
                "%EvalError%": n,
                "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
                "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
                "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
                "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
                "%Function%": m,
                "%GeneratorFunction%": R,
                "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
                "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
                "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
                "%isFinite%": isFinite,
                "%isNaN%": isNaN,
                "%IteratorPrototype%": M && S ? S(S([][Symbol.iterator]())) : e,
                "%JSON%": typeof JSON == "object" ? JSON : e,
                "%Map%": typeof Map > "u" ? e : Map,
                "%MapIteratorPrototype%": typeof Map > "u" || !M || !S ? e : S(new Map()[Symbol.iterator]()),
                "%Math%": Math,
                "%Number%": Number,
                "%Object%": t,
                "%Object.getOwnPropertyDescriptor%": g,
                "%parseFloat%": parseFloat,
                "%parseInt%": parseInt,
                "%Promise%": typeof Promise > "u" ? e : Promise,
                "%Proxy%": typeof Proxy > "u" ? e : Proxy,
                "%RangeError%": o,
                "%ReferenceError%": i,
                "%Reflect%": typeof Reflect > "u" ? e : Reflect,
                "%RegExp%": RegExp,
                "%Set%": typeof Set > "u" ? e : Set,
                "%SetIteratorPrototype%": typeof Set > "u" || !M || !S ? e : S(new Set()[Symbol.iterator]()),
                "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
                "%String%": String,
                "%StringIteratorPrototype%": M && S ? S("" [Symbol.iterator]()) : e,
                "%Symbol%": M ? Symbol : e,
                "%SyntaxError%": a,
                "%ThrowTypeError%": P,
                "%TypedArray%": C,
                "%TypeError%": s,
                "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
                "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
                "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
                "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
                "%URIError%": u,
                "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
                "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
                "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
                "%Function.prototype.call%": I,
                "%Function.prototype.apply%": O,
                "%Object.defineProperty%": x,
                "%Object.getPrototypeOf%": E,
                "%Math.abs%": f,
                "%Math.floor%": l,
                "%Math.max%": y,
                "%Math.min%": v,
                "%Math.pow%": c,
                "%Math.round%": d,
                "%Math.sign%": h,
                "%Reflect.getPrototypeOf%": _
            };
        if (S) try {
            null.error
        } catch (te) {
            var U = S(S(te));
            q["%Error.prototype%"] = U
        }
        var z = function te(N) {
                var Q;
                if (N === "%AsyncFunction%") Q = p("async function () {}");
                else if (N === "%GeneratorFunction%") Q = p("function* () {}");
                else if (N === "%AsyncGeneratorFunction%") Q = p("async function* () {}");
                else if (N === "%AsyncGenerator%") {
                    var j = te("%AsyncGeneratorFunction%");
                    j && (Q = j.prototype)
                } else if (N === "%AsyncIteratorPrototype%") {
                    var Y = te("%AsyncGenerator%");
                    Y && S && (Q = S(Y.prototype))
                }
                return q[N] = Q, Q
            },
            re = {
                __proto__: null,
                "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                "%ArrayPrototype%": ["Array", "prototype"],
                "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                "%ArrayProto_values%": ["Array", "prototype", "values"],
                "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                "%BooleanPrototype%": ["Boolean", "prototype"],
                "%DataViewPrototype%": ["DataView", "prototype"],
                "%DatePrototype%": ["Date", "prototype"],
                "%ErrorPrototype%": ["Error", "prototype"],
                "%EvalErrorPrototype%": ["EvalError", "prototype"],
                "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                "%FunctionPrototype%": ["Function", "prototype"],
                "%Generator%": ["GeneratorFunction", "prototype"],
                "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                "%JSONParse%": ["JSON", "parse"],
                "%JSONStringify%": ["JSON", "stringify"],
                "%MapPrototype%": ["Map", "prototype"],
                "%NumberPrototype%": ["Number", "prototype"],
                "%ObjectPrototype%": ["Object", "prototype"],
                "%ObjProto_toString%": ["Object", "prototype", "toString"],
                "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                "%PromisePrototype%": ["Promise", "prototype"],
                "%PromiseProto_then%": ["Promise", "prototype", "then"],
                "%Promise_all%": ["Promise", "all"],
                "%Promise_reject%": ["Promise", "reject"],
                "%Promise_resolve%": ["Promise", "resolve"],
                "%RangeErrorPrototype%": ["RangeError", "prototype"],
                "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                "%RegExpPrototype%": ["RegExp", "prototype"],
                "%SetPrototype%": ["Set", "prototype"],
                "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                "%StringPrototype%": ["String", "prototype"],
                "%SymbolPrototype%": ["Symbol", "prototype"],
                "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                "%TypeErrorPrototype%": ["TypeError", "prototype"],
                "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                "%URIErrorPrototype%": ["URIError", "prototype"],
                "%WeakMapPrototype%": ["WeakMap", "prototype"],
                "%WeakSetPrototype%": ["WeakSet", "prototype"]
            },
            $ = At(),
            K = ou(),
            ee = $.call(I, Array.prototype.concat),
            ge = $.call(O, Array.prototype.splice),
            Re = $.call(I, String.prototype.replace),
            $e = $.call(I, String.prototype.slice),
            Le = $.call(I, RegExp.prototype.exec),
            Te = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
            ye = /\\(\\)?/g,
            De = function(N) {
                var Q = $e(N, 0, 1),
                    j = $e(N, -1);
                if (Q === "%" && j !== "%") throw new a("invalid intrinsic syntax, expected closing `%`");
                if (j === "%" && Q !== "%") throw new a("invalid intrinsic syntax, expected opening `%`");
                var Y = [];
                return Re(N, Te, function(ne, pe, oe, se) {
                    Y[Y.length] = oe ? Re(se, ye, "$1") : pe || ne
                }), Y
            },
            Ue = function(N, Q) {
                var j = N,
                    Y;
                if (K(re, j) && (Y = re[j], j = "%" + Y[0] + "%"), K(q, j)) {
                    var ne = q[j];
                    if (ne === R && (ne = z(j)), typeof ne > "u" && !Q) throw new s("intrinsic " + N + " exists, but is not available. Please file an issue!");
                    return {
                        alias: Y,
                        name: j,
                        value: ne
                    }
                }
                throw new a("intrinsic " + N + " does not exist!")
            };
        return Dr = function(N, Q) {
            if (typeof N != "string" || N.length === 0) throw new s("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof Q != "boolean") throw new s('"allowMissing" argument must be a boolean');
            if (Le(/^%?[^%]*%?$/, N) === null) throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var j = De(N),
                Y = j.length > 0 ? j[0] : "",
                ne = Ue("%" + Y + "%", Q),
                pe = ne.name,
                oe = ne.value,
                se = !1,
                he = ne.alias;
            he && (Y = he[0], ge(j, ee([0, 1], he)));
            for (var et = 1, Ne = !0; et < j.length; et += 1) {
                var we = j[et],
                    tt = $e(we, 0, 1),
                    rt = $e(we, -1);
                if ((tt === '"' || tt === "'" || tt === "`" || rt === '"' || rt === "'" || rt === "`") && tt !== rt) throw new a("property names with quotes must have matching quotes");
                if ((we === "constructor" || !Ne) && (se = !0), Y += "." + we, pe = "%" + Y + "%", K(q, pe)) oe = q[pe];
                else if (oe != null) {
                    if (!(we in oe)) {
                        if (!Q) throw new s("base intrinsic for " + N + " exists, but the property is not available.");
                        return
                    }
                    if (g && et + 1 >= j.length) {
                        var nt = g(oe, we);
                        Ne = !!nt, Ne && "get" in nt && !("originalValue" in nt.get) ? oe = nt.get : oe = oe[we]
                    } else Ne = K(oe, we), oe = oe[we];
                    Ne && !se && (q[pe] = oe)
                }
            }
            return oe
        }, Dr
    }
    var Nr, si;

    function ui() {
        if (si) return Nr;
        si = 1;
        var e = Ur(),
            t = ri(),
            r = t([e("%String.prototype.indexOf%")]);
        return Nr = function(o, i) {
            var a = e(o, !!i);
            return typeof a == "function" && r(o, ".prototype.") > -1 ? t([a]) : a
        }, Nr
    }
    var Fr, ci;

    function fi() {
        if (ci) return Fr;
        ci = 1;
        var e = Ur(),
            t = ui(),
            r = Et(),
            n = Ze(),
            o = e("%Map%", !0),
            i = t("Map.prototype.get", !0),
            a = t("Map.prototype.set", !0),
            s = t("Map.prototype.has", !0),
            u = t("Map.prototype.delete", !0),
            f = t("Map.prototype.size", !0);
        return Fr = !!o && function() {
            var y, v = {
                assert: function(c) {
                    if (!v.has(c)) throw new n("Side channel does not contain " + r(c))
                },
                delete: function(c) {
                    if (y) {
                        var d = u(y, c);
                        return f(y) === 0 && (y = void 0), d
                    }
                    return !1
                },
                get: function(c) {
                    if (y) return i(y, c)
                },
                has: function(c) {
                    return y ? s(y, c) : !1
                },
                set: function(c, d) {
                    y || (y = new o), a(y, c, d)
                }
            };
            return v
        }, Fr
    }
    var jr, li;

    function iu() {
        if (li) return jr;
        li = 1;
        var e = Ur(),
            t = ui(),
            r = Et(),
            n = fi(),
            o = Ze(),
            i = e("%WeakMap%", !0),
            a = t("WeakMap.prototype.get", !0),
            s = t("WeakMap.prototype.set", !0),
            u = t("WeakMap.prototype.has", !0),
            f = t("WeakMap.prototype.delete", !0);
        return jr = i ? function() {
            var y, v, c = {
                assert: function(d) {
                    if (!c.has(d)) throw new o("Side channel does not contain " + r(d))
                },
                delete: function(d) {
                    if (i && d && (typeof d == "object" || typeof d == "function")) {
                        if (y) return f(y, d)
                    } else if (n && v) return v.delete(d);
                    return !1
                },
                get: function(d) {
                    return i && d && (typeof d == "object" || typeof d == "function") && y ? a(y, d) : v && v.get(d)
                },
                has: function(d) {
                    return i && d && (typeof d == "object" || typeof d == "function") && y ? u(y, d) : !!v && v.has(d)
                },
                set: function(d, h) {
                    i && d && (typeof d == "object" || typeof d == "function") ? (y || (y = new i), s(y, d, h)) : n && (v || (v = n()), v.set(d, h))
                }
            };
            return c
        } : n, jr
    }
    var kr, di;

    function au() {
        if (di) return kr;
        di = 1;
        var e = Ze(),
            t = Et(),
            r = $s(),
            n = fi(),
            o = iu(),
            i = o || n || r;
        return kr = function() {
            var s, u = {
                assert: function(f) {
                    if (!u.has(f)) throw new e("Side channel does not contain " + t(f))
                },
                delete: function(f) {
                    return !!s && s.delete(f)
                },
                get: function(f) {
                    return s && s.get(f)
                },
                has: function(f) {
                    return !!s && s.has(f)
                },
                set: function(f, l) {
                    s || (s = i()), s.set(f, l)
                }
            };
            return u
        }, kr
    }
    var Br, yi;

    function Hr() {
        if (yi) return Br;
        yi = 1;
        var e = String.prototype.replace,
            t = /%20/g,
            r = {
                RFC1738: "RFC1738",
                RFC3986: "RFC3986"
            };
        return Br = {
            default: r.RFC3986,
            formatters: {
                RFC1738: function(n) {
                    return e.call(n, t, "+")
                },
                RFC3986: function(n) {
                    return String(n)
                }
            },
            RFC1738: r.RFC1738,
            RFC3986: r.RFC3986
        }, Br
    }
    var Gr, pi;

    function hi() {
        if (pi) return Gr;
        pi = 1;
        var e = Hr(),
            t = Object.prototype.hasOwnProperty,
            r = Array.isArray,
            n = function() {
                for (var m = [], p = 0; p < 256; ++p) m.push("%" + ((p < 16 ? "0" : "") + p.toString(16)).toUpperCase());
                return m
            }(),
            o = function(p) {
                for (; p.length > 1;) {
                    var g = p.pop(),
                        x = g.obj[g.prop];
                    if (r(x)) {
                        for (var A = [], P = 0; P < x.length; ++P) typeof x[P] < "u" && A.push(x[P]);
                        g.obj[g.prop] = A
                    }
                }
            },
            i = function(p, g) {
                for (var x = g && g.plainObjects ? {
                        __proto__: null
                    } : {}, A = 0; A < p.length; ++A) typeof p[A] < "u" && (x[A] = p[A]);
                return x
            },
            a = function m(p, g, x) {
                if (!g) return p;
                if (typeof g != "object" && typeof g != "function") {
                    if (r(p)) p.push(g);
                    else if (p && typeof p == "object")(x && (x.plainObjects || x.allowPrototypes) || !t.call(Object.prototype, g)) && (p[g] = !0);
                    else return [p, g];
                    return p
                }
                if (!p || typeof p != "object") return [p].concat(g);
                var A = p;
                return r(p) && !r(g) && (A = i(p, x)), r(p) && r(g) ? (g.forEach(function(P, M) {
                    if (t.call(p, M)) {
                        var S = p[M];
                        S && typeof S == "object" && P && typeof P == "object" ? p[M] = m(S, P, x) : p.push(P)
                    } else p[M] = P
                }), p) : Object.keys(g).reduce(function(P, M) {
                    var S = g[M];
                    return t.call(P, M) ? P[M] = m(P[M], S, x) : P[M] = S, P
                }, A)
            },
            s = function(p, g) {
                return Object.keys(g).reduce(function(x, A) {
                    return x[A] = g[A], x
                }, p)
            },
            u = function(m, p, g) {
                var x = m.replace(/\+/g, " ");
                if (g === "iso-8859-1") return x.replace(/%[0-9a-f]{2}/gi, unescape);
                try {
                    return decodeURIComponent(x)
                } catch {
                    return x
                }
            },
            f = 1024,
            l = function(p, g, x, A, P) {
                if (p.length === 0) return p;
                var M = p;
                if (typeof p == "symbol" ? M = Symbol.prototype.toString.call(p) : typeof p != "string" && (M = String(p)), x === "iso-8859-1") return escape(M).replace(/%u[0-9a-f]{4}/gi, function(C) {
                    return "%26%23" + parseInt(C.slice(2), 16) + "%3B"
                });
                for (var S = "", E = 0; E < M.length; E += f) {
                    for (var _ = M.length >= f ? M.slice(E, E + f) : M, O = [], I = 0; I < _.length; ++I) {
                        var R = _.charCodeAt(I);
                        if (R === 45 || R === 46 || R === 95 || R === 126 || R >= 48 && R <= 57 || R >= 65 && R <= 90 || R >= 97 && R <= 122 || P === e.RFC1738 && (R === 40 || R === 41)) {
                            O[O.length] = _.charAt(I);
                            continue
                        }
                        if (R < 128) {
                            O[O.length] = n[R];
                            continue
                        }
                        if (R < 2048) {
                            O[O.length] = n[192 | R >> 6] + n[128 | R & 63];
                            continue
                        }
                        if (R < 55296 || R >= 57344) {
                            O[O.length] = n[224 | R >> 12] + n[128 | R >> 6 & 63] + n[128 | R & 63];
                            continue
                        }
                        I += 1, R = 65536 + ((R & 1023) << 10 | _.charCodeAt(I) & 1023), O[O.length] = n[240 | R >> 18] + n[128 | R >> 12 & 63] + n[128 | R >> 6 & 63] + n[128 | R & 63]
                    }
                    S += O.join("")
                }
                return S
            },
            y = function(p) {
                for (var g = [{
                        obj: {
                            o: p
                        },
                        prop: "o"
                    }], x = [], A = 0; A < g.length; ++A)
                    for (var P = g[A], M = P.obj[P.prop], S = Object.keys(M), E = 0; E < S.length; ++E) {
                        var _ = S[E],
                            O = M[_];
                        typeof O == "object" && O !== null && x.indexOf(O) === -1 && (g.push({
                            obj: M,
                            prop: _
                        }), x.push(O))
                    }
                return o(g), p
            },
            v = function(p) {
                return Object.prototype.toString.call(p) === "[object RegExp]"
            },
            c = function(p) {
                return !p || typeof p != "object" ? !1 : !!(p.constructor && p.constructor.isBuffer && p.constructor.isBuffer(p))
            },
            d = function(p, g) {
                return [].concat(p, g)
            },
            h = function(p, g) {
                if (r(p)) {
                    for (var x = [], A = 0; A < p.length; A += 1) x.push(g(p[A]));
                    return x
                }
                return g(p)
            };
        return Gr = {
            arrayToObject: i,
            assign: s,
            combine: d,
            compact: y,
            decode: u,
            encode: l,
            isBuffer: c,
            isRegExp: v,
            maybeMap: h,
            merge: a
        }, Gr
    }
    var Wr, mi;

    function su() {
        if (mi) return Wr;
        mi = 1;
        var e = au(),
            t = hi(),
            r = Hr(),
            n = Object.prototype.hasOwnProperty,
            o = {
                brackets: function(m) {
                    return m + "[]"
                },
                comma: "comma",
                indices: function(m, p) {
                    return m + "[" + p + "]"
                },
                repeat: function(m) {
                    return m
                }
            },
            i = Array.isArray,
            a = Array.prototype.push,
            s = function(h, m) {
                a.apply(h, i(m) ? m : [m])
            },
            u = Date.prototype.toISOString,
            f = r.default,
            l = {
                addQueryPrefix: !1,
                allowDots: !1,
                allowEmptyArrays: !1,
                arrayFormat: "indices",
                charset: "utf-8",
                charsetSentinel: !1,
                commaRoundTrip: !1,
                delimiter: "&",
                encode: !0,
                encodeDotInKeys: !1,
                encoder: t.encode,
                encodeValuesOnly: !1,
                filter: void 0,
                format: f,
                formatter: r.formatters[f],
                indices: !1,
                serializeDate: function(m) {
                    return u.call(m)
                },
                skipNulls: !1,
                strictNullHandling: !1
            },
            y = function(m) {
                return typeof m == "string" || typeof m == "number" || typeof m == "boolean" || typeof m == "symbol" || typeof m == "bigint"
            },
            v = {},
            c = function h(m, p, g, x, A, P, M, S, E, _, O, I, R, C, q, U, z, re) {
                for (var $ = m, K = re, ee = 0, ge = !1;
                    (K = K.get(v)) !== void 0 && !ge;) {
                    var Re = K.get(m);
                    if (ee += 1, typeof Re < "u") {
                        if (Re === ee) throw new RangeError("Cyclic object value");
                        ge = !0
                    }
                    typeof K.get(v) > "u" && (ee = 0)
                }
                if (typeof _ == "function" ? $ = _(p, $) : $ instanceof Date ? $ = R($) : g === "comma" && i($) && ($ = t.maybeMap($, function(pe) {
                        return pe instanceof Date ? R(pe) : pe
                    })), $ === null) {
                    if (P) return E && !U ? E(p, l.encoder, z, "key", C) : p;
                    $ = ""
                }
                if (y($) || t.isBuffer($)) {
                    if (E) {
                        var $e = U ? p : E(p, l.encoder, z, "key", C);
                        return [q($e) + "=" + q(E($, l.encoder, z, "value", C))]
                    }
                    return [q(p) + "=" + q(String($))]
                }
                var Le = [];
                if (typeof $ > "u") return Le;
                var Te;
                if (g === "comma" && i($)) U && E && ($ = t.maybeMap($, E)), Te = [{
                    value: $.length > 0 ? $.join(",") || null : void 0
                }];
                else if (i(_)) Te = _;
                else {
                    var ye = Object.keys($);
                    Te = O ? ye.sort(O) : ye
                }
                var De = S ? String(p).replace(/\./g, "%2E") : String(p),
                    Ue = x && i($) && $.length === 1 ? De + "[]" : De;
                if (A && i($) && $.length === 0) return Ue + "[]";
                for (var te = 0; te < Te.length; ++te) {
                    var N = Te[te],
                        Q = typeof N == "object" && N && typeof N.value < "u" ? N.value : $[N];
                    if (!(M && Q === null)) {
                        var j = I && S ? String(N).replace(/\./g, "%2E") : String(N),
                            Y = i($) ? typeof g == "function" ? g(Ue, j) : Ue : Ue + (I ? "." + j : "[" + j + "]");
                        re.set(m, ee);
                        var ne = e();
                        ne.set(v, re), s(Le, h(Q, Y, g, x, A, P, M, S, g === "comma" && U && i($) ? null : E, _, O, I, R, C, q, U, z, ne))
                    }
                }
                return Le
            },
            d = function(m) {
                if (!m) return l;
                if (typeof m.allowEmptyArrays < "u" && typeof m.allowEmptyArrays != "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
                if (typeof m.encodeDotInKeys < "u" && typeof m.encodeDotInKeys != "boolean") throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
                if (m.encoder !== null && typeof m.encoder < "u" && typeof m.encoder != "function") throw new TypeError("Encoder has to be a function.");
                var p = m.charset || l.charset;
                if (typeof m.charset < "u" && m.charset !== "utf-8" && m.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                var g = r.default;
                if (typeof m.format < "u") {
                    if (!n.call(r.formatters, m.format)) throw new TypeError("Unknown format option provided.");
                    g = m.format
                }
                var x = r.formatters[g],
                    A = l.filter;
                (typeof m.filter == "function" || i(m.filter)) && (A = m.filter);
                var P;
                if (m.arrayFormat in o ? P = m.arrayFormat : "indices" in m ? P = m.indices ? "indices" : "repeat" : P = l.arrayFormat, "commaRoundTrip" in m && typeof m.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
                var M = typeof m.allowDots > "u" ? m.encodeDotInKeys === !0 ? !0 : l.allowDots : !!m.allowDots;
                return {
                    addQueryPrefix: typeof m.addQueryPrefix == "boolean" ? m.addQueryPrefix : l.addQueryPrefix,
                    allowDots: M,
                    allowEmptyArrays: typeof m.allowEmptyArrays == "boolean" ? !!m.allowEmptyArrays : l.allowEmptyArrays,
                    arrayFormat: P,
                    charset: p,
                    charsetSentinel: typeof m.charsetSentinel == "boolean" ? m.charsetSentinel : l.charsetSentinel,
                    commaRoundTrip: !!m.commaRoundTrip,
                    delimiter: typeof m.delimiter > "u" ? l.delimiter : m.delimiter,
                    encode: typeof m.encode == "boolean" ? m.encode : l.encode,
                    encodeDotInKeys: typeof m.encodeDotInKeys == "boolean" ? m.encodeDotInKeys : l.encodeDotInKeys,
                    encoder: typeof m.encoder == "function" ? m.encoder : l.encoder,
                    encodeValuesOnly: typeof m.encodeValuesOnly == "boolean" ? m.encodeValuesOnly : l.encodeValuesOnly,
                    filter: A,
                    format: g,
                    formatter: x,
                    serializeDate: typeof m.serializeDate == "function" ? m.serializeDate : l.serializeDate,
                    skipNulls: typeof m.skipNulls == "boolean" ? m.skipNulls : l.skipNulls,
                    sort: typeof m.sort == "function" ? m.sort : null,
                    strictNullHandling: typeof m.strictNullHandling == "boolean" ? m.strictNullHandling : l.strictNullHandling
                }
            };
        return Wr = function(h, m) {
            var p = h,
                g = d(m),
                x, A;
            typeof g.filter == "function" ? (A = g.filter, p = A("", p)) : i(g.filter) && (A = g.filter, x = A);
            var P = [];
            if (typeof p != "object" || p === null) return "";
            var M = o[g.arrayFormat],
                S = M === "comma" && g.commaRoundTrip;
            x || (x = Object.keys(p)), g.sort && x.sort(g.sort);
            for (var E = e(), _ = 0; _ < x.length; ++_) {
                var O = x[_],
                    I = p[O];
                g.skipNulls && I === null || s(P, c(I, O, M, S, g.allowEmptyArrays, g.strictNullHandling, g.skipNulls, g.encodeDotInKeys, g.encode ? g.encoder : null, g.filter, g.sort, g.allowDots, g.serializeDate, g.format, g.formatter, g.encodeValuesOnly, g.charset, E))
            }
            var R = P.join(g.delimiter),
                C = g.addQueryPrefix === !0 ? "?" : "";
            return g.charsetSentinel && (g.charset === "iso-8859-1" ? C += "utf8=%26%2310003%3B&" : C += "utf8=%E2%9C%93&"), R.length > 0 ? C + R : ""
        }, Wr
    }
    var zr, vi;

    function uu() {
        if (vi) return zr;
        vi = 1;
        var e = hi(),
            t = Object.prototype.hasOwnProperty,
            r = Array.isArray,
            n = {
                allowDots: !1,
                allowEmptyArrays: !1,
                allowPrototypes: !1,
                allowSparse: !1,
                arrayLimit: 20,
                charset: "utf-8",
                charsetSentinel: !1,
                comma: !1,
                decodeDotInKeys: !1,
                decoder: e.decode,
                delimiter: "&",
                depth: 5,
                duplicates: "combine",
                ignoreQueryPrefix: !1,
                interpretNumericEntities: !1,
                parameterLimit: 1e3,
                parseArrays: !0,
                plainObjects: !1,
                strictDepth: !1,
                strictNullHandling: !1,
                throwOnLimitExceeded: !1
            },
            o = function(v) {
                return v.replace(/&#(\d+);/g, function(c, d) {
                    return String.fromCharCode(parseInt(d, 10))
                })
            },
            i = function(v, c, d) {
                if (v && typeof v == "string" && c.comma && v.indexOf(",") > -1) return v.split(",");
                if (c.throwOnLimitExceeded && d >= c.arrayLimit) throw new RangeError("Array limit exceeded. Only " + c.arrayLimit + " element" + (c.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
                return v
            },
            a = "utf8=%26%2310003%3B",
            s = "utf8=%E2%9C%93",
            u = function(c, d) {
                var h = {
                        __proto__: null
                    },
                    m = d.ignoreQueryPrefix ? c.replace(/^\?/, "") : c;
                m = m.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
                var p = d.parameterLimit === 1 / 0 ? void 0 : d.parameterLimit,
                    g = m.split(d.delimiter, d.throwOnLimitExceeded ? p + 1 : p);
                if (d.throwOnLimitExceeded && g.length > p) throw new RangeError("Parameter limit exceeded. Only " + p + " parameter" + (p === 1 ? "" : "s") + " allowed.");
                var x = -1,
                    A, P = d.charset;
                if (d.charsetSentinel)
                    for (A = 0; A < g.length; ++A) g[A].indexOf("utf8=") === 0 && (g[A] === s ? P = "utf-8" : g[A] === a && (P = "iso-8859-1"), x = A, A = g.length);
                for (A = 0; A < g.length; ++A)
                    if (A !== x) {
                        var M = g[A],
                            S = M.indexOf("]="),
                            E = S === -1 ? M.indexOf("=") : S + 1,
                            _, O;
                        E === -1 ? (_ = d.decoder(M, n.decoder, P, "key"), O = d.strictNullHandling ? null : "") : (_ = d.decoder(M.slice(0, E), n.decoder, P, "key"), O = e.maybeMap(i(M.slice(E + 1), d, r(h[_]) ? h[_].length : 0), function(R) {
                            return d.decoder(R, n.decoder, P, "value")
                        })), O && d.interpretNumericEntities && P === "iso-8859-1" && (O = o(String(O))), M.indexOf("[]=") > -1 && (O = r(O) ? [O] : O);
                        var I = t.call(h, _);
                        I && d.duplicates === "combine" ? h[_] = e.combine(h[_], O) : (!I || d.duplicates === "last") && (h[_] = O)
                    } return h
            },
            f = function(v, c, d, h) {
                var m = 0;
                if (v.length > 0 && v[v.length - 1] === "[]") {
                    var p = v.slice(0, -1).join("");
                    m = Array.isArray(c) && c[p] ? c[p].length : 0
                }
                for (var g = h ? c : i(c, d, m), x = v.length - 1; x >= 0; --x) {
                    var A, P = v[x];
                    if (P === "[]" && d.parseArrays) A = d.allowEmptyArrays && (g === "" || d.strictNullHandling && g === null) ? [] : e.combine([], g);
                    else {
                        A = d.plainObjects ? {
                            __proto__: null
                        } : {};
                        var M = P.charAt(0) === "[" && P.charAt(P.length - 1) === "]" ? P.slice(1, -1) : P,
                            S = d.decodeDotInKeys ? M.replace(/%2E/g, ".") : M,
                            E = parseInt(S, 10);
                        !d.parseArrays && S === "" ? A = {
                            0: g
                        } : !isNaN(E) && P !== S && String(E) === S && E >= 0 && d.parseArrays && E <= d.arrayLimit ? (A = [], A[E] = g) : S !== "__proto__" && (A[S] = g)
                    }
                    g = A
                }
                return g
            },
            l = function(c, d, h, m) {
                if (c) {
                    var p = h.allowDots ? c.replace(/\.([^.[]+)/g, "[$1]") : c,
                        g = /(\[[^[\]]*])/,
                        x = /(\[[^[\]]*])/g,
                        A = h.depth > 0 && g.exec(p),
                        P = A ? p.slice(0, A.index) : p,
                        M = [];
                    if (P) {
                        if (!h.plainObjects && t.call(Object.prototype, P) && !h.allowPrototypes) return;
                        M.push(P)
                    }
                    for (var S = 0; h.depth > 0 && (A = x.exec(p)) !== null && S < h.depth;) {
                        if (S += 1, !h.plainObjects && t.call(Object.prototype, A[1].slice(1, -1)) && !h.allowPrototypes) return;
                        M.push(A[1])
                    }
                    if (A) {
                        if (h.strictDepth === !0) throw new RangeError("Input depth exceeded depth option of " + h.depth + " and strictDepth is true");
                        M.push("[" + p.slice(A.index) + "]")
                    }
                    return f(M, d, h, m)
                }
            },
            y = function(c) {
                if (!c) return n;
                if (typeof c.allowEmptyArrays < "u" && typeof c.allowEmptyArrays != "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
                if (typeof c.decodeDotInKeys < "u" && typeof c.decodeDotInKeys != "boolean") throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
                if (c.decoder !== null && typeof c.decoder < "u" && typeof c.decoder != "function") throw new TypeError("Decoder has to be a function.");
                if (typeof c.charset < "u" && c.charset !== "utf-8" && c.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                if (typeof c.throwOnLimitExceeded < "u" && typeof c.throwOnLimitExceeded != "boolean") throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
                var d = typeof c.charset > "u" ? n.charset : c.charset,
                    h = typeof c.duplicates > "u" ? n.duplicates : c.duplicates;
                if (h !== "combine" && h !== "first" && h !== "last") throw new TypeError("The duplicates option must be either combine, first, or last");
                var m = typeof c.allowDots > "u" ? c.decodeDotInKeys === !0 ? !0 : n.allowDots : !!c.allowDots;
                return {
                    allowDots: m,
                    allowEmptyArrays: typeof c.allowEmptyArrays == "boolean" ? !!c.allowEmptyArrays : n.allowEmptyArrays,
                    allowPrototypes: typeof c.allowPrototypes == "boolean" ? c.allowPrototypes : n.allowPrototypes,
                    allowSparse: typeof c.allowSparse == "boolean" ? c.allowSparse : n.allowSparse,
                    arrayLimit: typeof c.arrayLimit == "number" ? c.arrayLimit : n.arrayLimit,
                    charset: d,
                    charsetSentinel: typeof c.charsetSentinel == "boolean" ? c.charsetSentinel : n.charsetSentinel,
                    comma: typeof c.comma == "boolean" ? c.comma : n.comma,
                    decodeDotInKeys: typeof c.decodeDotInKeys == "boolean" ? c.decodeDotInKeys : n.decodeDotInKeys,
                    decoder: typeof c.decoder == "function" ? c.decoder : n.decoder,
                    delimiter: typeof c.delimiter == "string" || e.isRegExp(c.delimiter) ? c.delimiter : n.delimiter,
                    depth: typeof c.depth == "number" || c.depth === !1 ? +c.depth : n.depth,
                    duplicates: h,
                    ignoreQueryPrefix: c.ignoreQueryPrefix === !0,
                    interpretNumericEntities: typeof c.interpretNumericEntities == "boolean" ? c.interpretNumericEntities : n.interpretNumericEntities,
                    parameterLimit: typeof c.parameterLimit == "number" ? c.parameterLimit : n.parameterLimit,
                    parseArrays: c.parseArrays !== !1,
                    plainObjects: typeof c.plainObjects == "boolean" ? c.plainObjects : n.plainObjects,
                    strictDepth: typeof c.strictDepth == "boolean" ? !!c.strictDepth : n.strictDepth,
                    strictNullHandling: typeof c.strictNullHandling == "boolean" ? c.strictNullHandling : n.strictNullHandling,
                    throwOnLimitExceeded: typeof c.throwOnLimitExceeded == "boolean" ? c.throwOnLimitExceeded : !1
                }
            };
        return zr = function(v, c) {
            var d = y(c);
            if (v === "" || v === null || typeof v > "u") return d.plainObjects ? {
                __proto__: null
            } : {};
            for (var h = typeof v == "string" ? u(v, d) : v, m = d.plainObjects ? {
                    __proto__: null
                } : {}, p = Object.keys(h), g = 0; g < p.length; ++g) {
                var x = p[g],
                    A = l(x, h[x], d, typeof v == "string");
                m = e.merge(m, A, d)
            }
            return d.allowSparse === !0 ? m : e.compact(m)
        }, zr
    }
    var Vr, gi;

    function cu() {
        if (gi) return Vr;
        gi = 1;
        var e = su(),
            t = uu(),
            r = Hr();
        return Vr = {
            formats: r,
            parse: t,
            stringify: e
        }, Vr
    }
    var Kr = cu();
    class xt {
        static completeUrl(t) {
            return t.startsWith("//") ? window.location.protocol + t : t.startsWith("/") ? window.location.origin + t : t
        }
        static resolveUrl(t, r) {
            try {
                return new URL(t).href
            } catch {
                try {
                    return new URL(t, r).href
                } catch {
                    return t
                }
            }
        }
        static extractVideoId(t, r) {
            const n = go.match(r),
                o = new URL(t).pathname,
                i = n(o);
            if (i) return i.params.videoId
        }
        static endsWith(t, r) {
            try {
                return new URL(t).pathname.endsWith(r)
            } catch {
                return !1
            }
        }
        static addParam(t, r, n) {
            try {
                const o = new URL(t);
                return o.searchParams.set(r, n), o.toString()
            } catch {
                const i = t.includes("?") ? "&" : "?";
                return `${t}${i}${encodeURIComponent(r)}=${encodeURIComponent(n)}`
            }
        }
        static replaceParam(t, r, n) {
            try {
                const o = new URL(t);
                return o.searchParams.has(r) ? (o.searchParams.set(r, n), o.toString()) : t
            } catch {
                try {
                    const i = t.indexOf("#"),
                        a = i >= 0 ? t.substring(i) : "",
                        s = i >= 0 ? t.substring(0, i) : t,
                        u = s.indexOf("?");
                    if (u === -1) return t;
                    const f = s.substring(0, u),
                        y = s.substring(u + 1).split("&");
                    let v = !1;
                    const c = y.map(d => {
                        if (!d) return d;
                        const h = d.indexOf("="),
                            m = h >= 0 ? d.substring(0, h) : d;
                        return decodeURIComponent(m) === r ? (v = !0, `${m}=${encodeURIComponent(n)}`) : d
                    });
                    return v ? `${f}?${c.join("&")}${a}` : t
                } catch {
                    return t
                }
            }
        }
        static removeQueryParams(t) {
            try {
                const r = new URL(t);
                return r.search = "", r.toString()
            } catch {
                return t
            }
        }
    }
    const fu = "domestika_",
        wi = "domestika";

    function Qr(e) {
        const t = e == null ? void 0 : e.trim();
        if (!t || !/^\d+$/.test(t)) return;
        const r = Number.parseInt(t, 10);
        if (!(!Number.isFinite(r) || r <= 0)) return String(r)
    }

    function lu(e) {
        const t = Qr(e);
        return t ? `${fu}${t}` : void 0
    }

    function Xr(e) {
        try {
            const t = new URL(e),
                r = yu(t);
            if (r) return r;
            const n = t.searchParams.get("fallback_url"),
                o = n ? Xr(bi(n)) : void 0;
            if (o) return o;
            const i = t.searchParams.get("static_playlist_url"),
                a = i ? Xr(bi(i)) : void 0;
            if (a) return a;
            const s = t.pathname.split("/").filter(Boolean),
                u = s.indexOf("videos");
            if (u < 0 || s.length < u + 4) return;
            const f = s.slice(u + 1, u + 4);
            return f.length !== 3 || f.some(l => !/^\d{3}$/.test(l)) ? void 0 : Qr(f.join(""))
        } catch {
            return
        }
    }

    function du(e) {
        return lu(Xr(e))
    }

    function yu(e) {
        const t = e.pathname.match(/\/video_item_m3u8\/(\d+)\.m3u8$/);
        return Qr(t == null ? void 0 : t[1])
    }

    function bi(e) {
        try {
            return decodeURIComponent(e)
        } catch {
            return e
        }
    }
    const pu = "mindvalley",
        Jr = "nma_art",
        hu = `${Jr}_`;

    function mu(e) {
        if (!e) return !1;
        try {
            const t = new URL(e);
            return t.hostname === "s3.amazonaws.com" && /^\/video\.streaming\/[^/]+\/[^/]+\.m3u8$/i.test(t.pathname)
        } catch {
            return !1
        }
    }

    function vu(e) {
        if (mu(e)) try {
            const r = (new URL(e).pathname.split("/").pop() || "").replace(/\.m3u8$/i, "").trim();
            return r ? `${hu}${r}` : void 0
        } catch {
            return
        }
    }
    const gu = "zenva";

    function wu(e) {
        const t = bu(e);
        return t ? `${gu}_${t}` : void 0
    }

    function bu(e) {
        var t;
        try {
            const n = new URL(e).pathname.match(/\/closed-captions\/[^/]+\/[^/]+_([a-z]{2})\.vtt$/i);
            return (t = n == null ? void 0 : n[1]) == null ? void 0 : t.toLowerCase()
        } catch {
            return
        }
    }
    const Su = "common",
        _u = "hotmart",
        Eu = "ucdavis_kaltura",
        Au = "kaltura",
        xu = "sap_learning";

    function Ru(e) {
        const t = Yr(e.url),
            r = Yr(e.documentUrl),
            n = Yr(e.initiator);
        return Zr(t) || Zr(r) || Zr(n) ? _u : en(t) || en(r) || en(n) ? Eu : Si(r) || Si(n) ? xu : tn(t) || tn(r) || tn(n) ? Au : Su
    }

    function Yr(e) {
        if (e) try {
            return new URL(e).hostname.toLowerCase()
        } catch {
            return
        }
    }

    function Zr(e) {
        return e === "player.hotmart.com" || !!(e != null && e.endsWith(".play.hotmart.com"))
    }

    function en(e) {
        return e === "video.ucdavis.edu"
    }

    function Si(e) {
        return e === "learning.sap.com"
    }

    function tn(e) {
        return e === "cdnapisec.kaltura.com" || !!(e != null && e.endsWith(".kaltura.com"))
    }
    const rn = "chartacademy";

    function _i(e, t) {
        const r = Ei(e),
            n = Ei(t);
        if (!(!r || !n)) return `${rn}_${r}_${n}`
    }

    function Ou(e) {
        try {
            const {
                pathname: t
            } = new URL(e), r = t.match(/^\/masterclasses\/([^/]+)\/video\/([^/]+)\/?$/);
            if (r) return _i(r[1], r[2]);
            const n = t.match(/^\/api\/master_classes\/([^/]+)\/videos\/([^/]+)\/?$/);
            if (n) return _i(n[1], n[2])
        } catch {
            return
        }
    }

    function Ei(e) {
        if (e == null) return;
        const t = String(e).trim();
        return t.length > 0 ? t : void 0
    }

    function Tu(e) {
        const t = r => {
            if (!r) return !1;
            try {
                const n = new URL(r).hostname;
                return n === "dzen.ru" || n.endsWith(".dzen.ru")
            } catch {
                return !1
            }
        };
        return t(e.initiator) || t(e.documentUrl)
    }

    function dt(e) {
        if (e) try {
            return new URL(e)
        } catch {
            return
        }
    }

    function Ai(e, t) {
        var n;
        const r = e == null ? void 0 : e.find(o => o.name.toLowerCase() === t.toLowerCase());
        return ((n = r == null ? void 0 : r.value) == null ? void 0 : n.toLowerCase()) || ""
    }

    function Pu(e, t) {
        return Ai(e.responseHeaders, t)
    }

    function Iu(e, t) {
        return Ai(e.requestHeaders, t)
    }

    function Mu(e) {
        return (e == null ? void 0 : e.pathname.startsWith("/c/")) === !0
    }

    function qu(e) {
        const t = dt(e.url);
        if (!t) return !1;
        const r = Iu(e, "referer"),
            n = [e.initiator, e.documentUrl, r].map(dt).filter(o => o !== void 0);
        return !n.length || n.some(o => o.origin !== t.origin) ? !1 : [dt(e.documentUrl), dt(r), dt(e.initiator)].some(Mu)
    }

    function Cu(e) {
        return e.method.toLowerCase() !== "get" || e.type !== "xmlhttprequest" || !Pu(e, "content-type").includes("json") ? !1 : qu(e)
    }
    class $u {
        constructor() {
            $t(this, "rules");
            $t(this, "patternCache", new Map);
            this.rules = this.createRules()
        }
        getRules() {
            return this.rules
        }
        getRuleById(t) {
            return this.rules.find(r => r.id === t)
        }
        match(t, r) {
            return t.method.toLowerCase() !== r.method.toLowerCase() || r.urlExclude && this.toRegex(r.urlExclude).test(t.url) ? !1 : r.urlPattern.some(n => this.toRegex(n).test(t.url))
        }
        computeSearch(t, r) {
            return t.computeSearch ? t.computeSearch(r) : t.search
        }
        computeResultType(t, r) {
            var i;
            if (typeof t != "string") {
                const a = (i = r == null ? void 0 : r.computeResultType) == null ? void 0 : i.call(r, t);
                return a || this.computeResultType(t.url)
            }
            const n = t;
            try {
                if (new URL(n).hostname === "cdn.qstv.on.epicgames.com") return "m3u8"
            } catch {}
            if (xt.endsWith(n, ".vtt") || xt.endsWith(n, ".webvtt") || n.includes("/vtt") || n.includes("/video-captions-webvtt/")) return "vtt";
            if (xt.endsWith(n, ".srt")) return "srt";
            if (xt.endsWith(n, ".m3u8")) return "m3u8";
            if (n.includes(".mp4")) return "mp4";
            const o = n.toLowerCase();
            if (o.includes("douyinvod.com") && (o.includes("mime_type=video_mp4") || o.includes("mime_type=video%2fmp4"))) return "mp4";
            try {
                const a = new URL(n);
                if (a.hostname.endsWith(".okcdn.ru") && (a.hostname.startsWith("vkvd") || a.hostname.startsWith("vd")) && a.searchParams.has("expires") && a.searchParams.has("type")) return "mp4"
            } catch {}
            return "json"
        }
        createRules() {
            const t = r => `${r}-request-info`;
            return [{
                id: "udemy",
                urlPattern: ["*://*.udemy.com/api-2.0/users/me/subscribed-courses/*/lectures/*", "*://*.udemy.cn/api-2.0/users/me/subscribed-courses/*/lectures/*"],
                urlExclude: "*://*.udemy.*/api-2.0/users/me/subscribed-courses/*/lectures/*/social-bookmarks/*",
                method: "GET",
                search: "udemy",
                computeStorageKey: () => "udemy-request-info",
                computeSearch: r => {
                    const n = r.url;
                    return `udemy_${go.match("/api-2.0/users/me/subscribed-courses/:course_id/lectures/:lecture_id")(new URL(n).pathname).params.lecture_id}`
                }
            }, {
                id: "chartacademy-video-api",
                urlPattern: ["*://app.chartacademy.com/api/master_classes/*/videos/*"],
                method: "GET",
                search: rn,
                computeStorageKey: t,
                computeSearch: r => Ou(r.url) || rn,
                computeResultType: () => "json"
            }, {
                id: "circle-academy-posts-api",
                urlPattern: ["*://circle-academy.circle.so/internal_api/spaces/*/posts*"],
                method: "GET",
                search: "circle_academy",
                computeStorageKey: t,
                computeResultType: () => "json"
            }, {
                id: "circle-course-lesson-api",
                urlPattern: ["*://*/internal_api/courses/*/sections/*/lessons*"],
                method: "GET",
                search: "circle_academy",
                computeStorageKey: t,
                computeResultType: () => "json",
                requestHeaderNames: ["referer"],
                filter: Cu
            }, {
                id: "youtube",
                urlPattern: ["*://*.youtube.com/api/timedtext*", "*://*.youtube-nocookie.com/api/timedtext*"],
                method: "GET",
                search: "youtube",
                computeStorageKey: () => "youtube-request-info",
                computeSearch: r => `youtube_${Kr.parse(new URL(r.url).search.substring(1)).v}`,
                filter: r => {
                    var u, f, l;
                    if (r.type !== "xmlhttprequest") return !1;
                    const n = (u = r.responseHeaders) == null ? void 0 : u.find(y => y.name.toLowerCase() === "content-length");
                    if (n != null && n.value) {
                        const y = Number(n.value);
                        if (Number.isFinite(y) && y === 0) return !1
                    }
                    const o = r.url;
                    if (!Kr.parse(new URL(o).search.substring(1)).v) return !1;
                    const a = (f = r.responseHeaders) == null ? void 0 : f.find(y => y.name.toLowerCase() === "content-type"),
                        s = ((l = a == null ? void 0 : a.value) == null ? void 0 : l.toLowerCase()) || "";
                    return !(!s.includes("json") && !s.includes("xml"))
                }
            }, {
                id: "google_drive_youtube",
                urlPattern: ["*://drive.google.com/*/timedtext*", "*://drive.google.com/timedtext*"],
                method: "GET",
                search: "google_drive_youtube",
                computeStorageKey: () => "google-drive-youtube-request-info",
                computeSearch: r => `google_drive_${Kr.parse(new URL(r.url).search.substring(1)).v}`,
                filter: r => !(r.type !== "xmlhttprequest" || !new URL(r.url).pathname.endsWith("/timedtext"))
            }, {
                id: "dropbox",
                urlPattern: ["*://*/p/transcript/*"],
                method: "GET",
                search: "dropbox",
                computeStorageKey: t
            }, {
                id: "domestika-video-m3u8",
                urlPattern: ["*://cdn-videos.domestika.org/videos/*/master.m3u8*", "*://lambda-videos.domestika.org/master.m3u8*", "*://www.domestika.org/api/v2/video_item_m3u8/*.m3u8*"],
                method: "GET",
                search: wi,
                computeStorageKey: t,
                computeSearch: r => du(r.url) || wi
            }, {
                id: "mindvalley-video-m3u8",
                urlPattern: ["*://assets.mindvalley.com/api/v1/assets/*.m3u8*"],
                method: "GET",
                search: pu,
                computeStorageKey: t
            }, {
                id: "nma-art-video-m3u8",
                urlPattern: ["*://s3.amazonaws.com/video.streaming/*/*.m3u8*"],
                method: "GET",
                search: Jr,
                computeStorageKey: t,
                computeSearch: r => vu(r.url) || Jr
            }, {
                id: "common-m3u8",
                urlPattern: ["*://*/*.m3u8*"],
                method: "GET",
                search: "common",
                computeStorageKey: t,
                computeSearch: r => Ru(r)
            }, {
                id: "douyin-video",
                urlPattern: ["*://*.douyinvod.com/*mime_type=video*"],
                method: "GET",
                search: "common",
                computeStorageKey: t
            }, {
                id: "vkvideo-okcdn-mpd",
                description: "VK Video DASH manifest with subtitle AdaptationSets",
                urlPattern: ["*://*.okcdn.ru/?*asubs=y*"],
                method: "GET",
                search: "vkvideo",
                computeStorageKey: t,
                filter: r => {
                    var n, o, i;
                    try {
                        const a = new URL(r.url),
                            s = ((i = (o = (n = r.responseHeaders) == null ? void 0 : n.find(u => u.name.toLowerCase() === "content-type")) == null ? void 0 : o.value) == null ? void 0 : i.toLowerCase()) ?? "";
                        return a.hostname.startsWith("vkvd") && a.hostname.endsWith(".okcdn.ru") && a.searchParams.get("asubs") === "y" && (s.includes("application/dash+xml") || s.includes("application/xml") || a.searchParams.has("id"))
                    } catch {
                        return !1
                    }
                },
                computeResultType: () => "mpd"
            }, {
                id: "vkvideo-okcdn-video",
                urlPattern: ["*://*.okcdn.ru/?expires=*"],
                method: "GET",
                search: "common",
                computeStorageKey: t,
                filter: r => {
                    try {
                        const n = new URL(r.url);
                        return n.hostname.endsWith(".okcdn.ru") ? n.hostname.startsWith("vkvd") ? !0 : Tu(r) : !1
                    } catch {
                        return !1
                    }
                }
            }, {
                id: "epicgames-qstv-manifest",
                urlPattern: ["*://cdn.qstv.on.epicgames.com/*"],
                method: "GET",
                search: "common",
                computeStorageKey: t
            }, {
                id: "illinois-zoom-vtt",
                urlPattern: ["*://illinois.zoom.us/rec/play/vtt*"],
                method: "GET",
                search: "common",
                computeStorageKey: t
            }, {
                id: "zenva-closed-captions-vtt",
                urlPattern: ["*://academy.zenva.com/wp-content/uploads/closed-captions/*/*.vtt*"],
                method: "GET",
                search: "zenva",
                computeStorageKey: t,
                computeSearch: r => wu(r.url) || "zenva_en"
            }, {
                id: "common-vtt",
                urlPattern: ["*://*/*.vtt*"],
                method: "GET",
                search: "common",
                computeStorageKey: t
            }, {
                id: "hubspot-video-transcript-vtt",
                urlPattern: ["*://*.hs-sites.com/media-transcripts/*/*.vtt*"],
                method: "GET",
                search: "hubspot_video",
                computeStorageKey: t
            }, {
                id: "artstation-learning-vtt",
                urlPattern: ["*://cdn.artstation.com/encoded_videos/*/subtitles/*.vtt*"],
                method: "GET",
                search: "artstation",
                computeStorageKey: t
            }, {
                id: "common-webvtt",
                urlPattern: ["*://*/*.webvtt*"],
                method: "GET",
                search: "common",
                computeStorageKey: t
            }, {
                id: "common-srt",
                urlPattern: ["*://*/*.srt*"],
                method: "GET",
                search: "common",
                computeStorageKey: t
            }, {
                id: "linkedin-learning-vtt",
                urlPattern: ["*://dms.licdn.com/playlist/vid/*/video-captions-webvtt/*"],
                method: "GET",
                search: "linkedin_learning",
                computeStorageKey: t
            }, {
                id: "learn-microsoft-video-entry",
                urlPattern: ["*://learn.microsoft.com/api/video/public/v1/entries/*"],
                method: "GET",
                search: "learn_microsoft",
                computeStorageKey: t
            }, {
                id: "vidtube-get-sources",
                urlPattern: ["*://vidtube.site/stream/getSources*", "*://*.vidtube.site/stream/getSources*"],
                method: "GET",
                search: "vidtube",
                computeStorageKey: t
            }, {
                id: "twitter-graphql",
                urlPattern: ["*://*.twitter.com/i/api/graphql/*TweetDetail*", "*://*.twitter.com/i/api/graphql/*HomeTimeline*", "*://*.twitter.com/i/api/graphql/*HomeLatestTimeline*", "*://*.twitter.com/i/api/graphql/*UserTweets*", "*://*.twitter.com/i/api/graphql/*ListLatestTweetsTimeline*", "*://*.twitter.com/i/api/graphql/*SearchTimeline*", "*://*.twitter.com/i/api/graphql/*TweetResultByRestId*", "*://twitter.com/i/api/graphql/*TweetDetail*", "*://twitter.com/i/api/graphql/*HomeTimeline*", "*://twitter.com/i/api/graphql/*HomeLatestTimeline*", "*://twitter.com/i/api/graphql/*UserTweets*", "*://twitter.com/i/api/graphql/*ListLatestTweetsTimeline*", "*://twitter.com/i/api/graphql/*SearchTimeline*", "*://twitter.com/i/api/graphql/*TweetResultByRestId*", "*://*.x.com/i/api/graphql/*TweetDetail*", "*://*.x.com/i/api/graphql/*HomeTimeline*", "*://*.x.com/i/api/graphql/*HomeLatestTimeline*", "*://*.x.com/i/api/graphql/*UserTweets*", "*://*.x.com/i/api/graphql/*ListLatestTweetsTimeline*", "*://*.x.com/i/api/graphql/*SearchTimeline*", "*://*.x.com/i/api/graphql/*TweetResultByRestId*", "*://x.com/i/api/graphql/*TweetDetail*", "*://x.com/i/api/graphql/*HomeTimeline*", "*://x.com/i/api/graphql/*HomeLatestTimeline*", "*://x.com/i/api/graphql/*UserTweets*", "*://x.com/i/api/graphql/*ListLatestTweetsTimeline*", "*://x.com/i/api/graphql/*SearchTimeline*", "*://x.com/i/api/graphql/*TweetResultByRestId*"],
                method: "GET",
                search: "twitter",
                computeStorageKey: () => "twitter-request-info",
                computeSearch: r => {
                    const n = r.url.match(/graphql\/[^/]+\/(\w+)/);
                    return n ? `twitter_api_${n[1]}` : "twitter_api_unknown"
                }
            }, {
                id: "facebook-graphql",
                urlPattern: ["*://*.facebook.com/api/graphql/*", "*://facebook.com/api/graphql/*"],
                method: "POST",
                search: "facebook",
                computeStorageKey: () => "facebook-request-info",
                computeSearch: () => "facebook_graphql"
            }]
        }
        escapeRegex(t) {
            return t.replace(/[.+?^${}()|[\]\\]/g, "\\$&")
        }
        toRegex(t) {
            let r = this.patternCache.get(t);
            if (r) return r;
            let n = t,
                o = "";
            n.startsWith("*://") && (o = "(?:https?:\\/\\/)", n = n.substring(4));
            const i = n.split("*").map(this.escapeRegex).join(".*"),
                a = new RegExp(`^${o}${i}$`, "i");
            return this.patternCache.set(t, a), a
        }
    }
    const Lu = [EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, globalThis.DOMException, globalThis.AssertionError, globalThis.SystemError].filter(Boolean).map(e => [e.name, e]),
        Du = new Map(Lu);
    class nn extends Error {
        constructor(r) {
            super(nn._prepareSuperMessage(r));
            $t(this, "name", "NonError")
        }
        static _prepareSuperMessage(r) {
            try {
                return JSON.stringify(r)
            } catch {
                return String(r)
            }
        }
    }
    const Uu = [{
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
        on = new WeakSet,
        Nu = e => {
            on.add(e);
            const t = e.toJSON();
            return on.delete(e), t
        },
        xi = e => Du.get(e) ?? Error,
        an = ({
            from: e,
            seen: t,
            to: r,
            forceEnumerable: n,
            maxDepth: o,
            depth: i,
            useToJSON: a,
            serialize: s
        }) => {
            if (!r)
                if (Array.isArray(e)) r = [];
                else if (!s && Ri(e)) {
                const f = xi(e.name);
                r = new f
            } else r = {};
            if (t.push(e), i >= o) return r;
            if (a && typeof e.toJSON == "function" && !on.has(e)) return Nu(e);
            const u = f => an({
                from: f,
                seen: [...t],
                forceEnumerable: n,
                maxDepth: o,
                depth: i,
                useToJSON: a,
                serialize: s
            });
            for (const [f, l] of Object.entries(e)) {
                if (l && l instanceof Uint8Array && l.constructor.name === "Buffer") {
                    r[f] = "[object Buffer]";
                    continue
                }
                if (l !== null && typeof l == "object" && typeof l.pipe == "function") {
                    r[f] = "[object Stream]";
                    continue
                }
                if (typeof l != "function") {
                    if (!l || typeof l != "object") {
                        try {
                            r[f] = l
                        } catch {}
                        continue
                    }
                    if (!t.includes(e[f])) {
                        i++, r[f] = u(e[f]);
                        continue
                    }
                    r[f] = "[Circular]"
                }
            }
            for (const {
                    property: f,
                    enumerable: l
                } of Uu) typeof e[f] < "u" && e[f] !== null && Object.defineProperty(r, f, {
                value: Ri(e[f]) ? u(e[f]) : e[f],
                enumerable: n ? !0 : l,
                configurable: !0,
                writable: !0
            });
            return r
        };

    function Fu(e, t = {}) {
        const {
            maxDepth: r = Number.POSITIVE_INFINITY,
            useToJSON: n = !0
        } = t;
        return typeof e == "object" && e !== null ? an({
            from: e,
            seen: [],
            forceEnumerable: !0,
            maxDepth: r,
            depth: 0,
            useToJSON: n,
            serialize: !0
        }) : typeof e == "function" ? `[Function: ${e.name||"anonymous"}]` : e
    }

    function ju(e, t = {}) {
        const {
            maxDepth: r = Number.POSITIVE_INFINITY
        } = t;
        if (e instanceof Error) return e;
        if (ku(e)) {
            const n = xi(e.name);
            return an({
                from: e,
                seen: [],
                to: new n,
                maxDepth: r,
                depth: 0,
                serialize: !1
            })
        }
        return new nn(e)
    }

    function Ri(e) {
        return !!e && typeof e == "object" && "name" in e && "message" in e && "stack" in e
    }

    function ku(e) {
        return !!e && typeof e == "object" && "message" in e && !Array.isArray(e)
    }
    var Bu = Object.defineProperty,
        Hu = Object.defineProperties,
        Gu = Object.getOwnPropertyDescriptors,
        Rt = Object.getOwnPropertySymbols,
        Oi = Object.prototype.hasOwnProperty,
        Ti = Object.prototype.propertyIsEnumerable,
        Pi = (e, t, r) => t in e ? Bu(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r,
        sn = (e, t) => {
            for (var r in t || (t = {})) Oi.call(t, r) && Pi(e, r, t[r]);
            if (Rt)
                for (var r of Rt(t)) Ti.call(t, r) && Pi(e, r, t[r]);
            return e
        },
        un = (e, t) => Hu(e, Gu(t)),
        Wu = (e, t) => {
            var r = {};
            for (var n in e) Oi.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (e != null && Rt)
                for (var n of Rt(e)) t.indexOf(n) < 0 && Ti.call(e, n) && (r[n] = e[n]);
            return r
        },
        Ii = (e, t, r) => new Promise((n, o) => {
            var i = u => {
                    try {
                        s(r.next(u))
                    } catch (f) {
                        o(f)
                    }
                },
                a = u => {
                    try {
                        s(r.throw(u))
                    } catch (f) {
                        o(f)
                    }
                },
                s = u => u.done ? n(u.value) : Promise.resolve(u.value).then(i, a);
            s((r = r.apply(e, t)).next())
        });

    function zu(e) {
        let t, r = {};

        function n() {
            Object.entries(r).length === 0 && (t == null || t(), t = void 0)
        }
        let o = Math.floor(Math.random() * 1e4);

        function i() {
            return o++
        }
        return {
            sendMessage(a, s, ...u) {
                return Ii(this, null, function*() {
                    var f, l, y, v;
                    const c = {
                            id: i(),
                            type: a,
                            data: s,
                            timestamp: Date.now()
                        },
                        d = (l = yield(f = e.verifyMessageData) == null ? void 0 : f.call(e, c)) != null ? l : c;
                    (y = e.logger) == null || y.debug(`[messaging] sendMessage {id=${d.id}} \u2500\u1405`, d, ...u);
                    const h = yield e.sendMessage(d, ...u), {
                        res: m,
                        err: p
                    } = h ?? {
                        err: new Error("No response")
                    };
                    if ((v = e.logger) == null || v.debug(`[messaging] sendMessage {id=${d.id}} \u140A\u2500`, {
                            res: m,
                            err: p
                        }), p != null) throw ju(p);
                    return m
                })
            },
            onMessage(a, s) {
                var u, f, l;
                if (t == null && ((u = e.logger) == null || u.debug(`[messaging] "${a}" initialized the message listener for this context`), t = e.addRootListener(y => {
                        var v, c;
                        if (typeof y.type != "string" || typeof y.timestamp != "number") {
                            if (e.breakError) return;
                            const m = Error(`[messaging] Unknown message format, must include the 'type' & 'timestamp' fields, received: ${JSON.stringify(y)}`);
                            throw (v = e.logger) == null || v.error(m), m
                        }(c = e == null ? void 0 : e.logger) == null || c.debug("[messaging] Received message", y);
                        const d = r[y.type];
                        if (d == null) return;
                        const h = d(y);
                        return Promise.resolve(h).then(m => {
                            var p, g;
                            return (g = (p = e.verifyMessageData) == null ? void 0 : p.call(e, m)) != null ? g : m
                        }).then(m => {
                            var p;
                            return (p = e == null ? void 0 : e.logger) == null || p.debug(`[messaging] onMessage {id=${y.id}} \u2500\u1405`, {
                                res: m
                            }), {
                                res: m
                            }
                        }).catch(m => {
                            var p;
                            return (p = e == null ? void 0 : e.logger) == null || p.debug(`[messaging] onMessage {id=${y.id}} \u2500\u1405`, {
                                err: m
                            }), {
                                err: Fu(m)
                            }
                        })
                    })), r[a] != null) {
                    const y = Error(`[messaging] In this JS context, only one listener can be setup for ${a}`);
                    throw (f = e.logger) == null || f.error(y), y
                }
                return r[a] = s, (l = e.logger) == null || l.log(`[messaging] Added listener for ${a}`), () => {
                    delete r[a], n()
                }
            },
            removeAllListeners() {
                Object.keys(r).forEach(a => {
                    delete r[a]
                }), n()
            }
        }
    }
    for (var Ge = 256, Mi = [], qi = 256, Ot; Ge--;) Mi[Ge] = (Ge + 256).toString(16).substring(1);

    function Vu(e) {
        var t = 0,
            r = 11;
        if (!Ot || Ge + r > qi * 2)
            for (Ot = "", Ge = 0; t < qi; t++) Ot += Mi[Math.random() * 256 | 0];
        return Ot.substring(Ge, Ge++ + r)
    }

    function Ci(e, t = {
        targetScope: window ?? void 0
    }) {
        return typeof cloneInto < "u" ? cloneInto(e, t.targetScope) : e
    }
    var cn = "@webext-core/messaging/custom-events",
        fn = "@webext-core/messaging/custom-events/response";

    function Ku(e) {
        const t = e.namespace,
            r = Vu(),
            n = [],
            o = a => new Promise(s => {
                const u = f => {
                    const {
                        detail: l
                    } = f;
                    l.namespace === t && l.instanceId !== r && l.message.type === a.detail.message.type && s(l.response)
                };
                n.push(() => window.removeEventListener(fn, u)), window.addEventListener(fn, u), window.dispatchEvent(a)
            }),
            i = zu(un(sn({}, e), {
                sendMessage(a) {
                    const s = {
                            message: a,
                            namespace: t,
                            instanceId: r
                        },
                        u = new CustomEvent(cn, {
                            detail: Ci(s)
                        });
                    return o(u)
                },
                addRootListener(a) {
                    const s = u => Ii(this, null, function*() {
                        const f = u,
                            {
                                detail: l
                            } = f,
                            y = Wu(f, ["detail"]);
                        if (l.namespace !== t || l.instanceId === r) return;
                        const v = un(sn({}, l.message), {
                                event: y
                            }),
                            d = {
                                response: yield a(v),
                                message: v,
                                instanceId: r,
                                namespace: t
                            },
                            h = new CustomEvent(fn, {
                                detail: Ci(d)
                            });
                        window.dispatchEvent(h)
                    });
                    return window.addEventListener(cn, s), () => window.removeEventListener(cn, s)
                },
                verifyMessageData(a) {
                    return structuredClone(a)
                }
            }));
        return un(sn({}, i), {
            removeAllListeners() {
                i.removeAllListeners(), n.forEach(a => a())
            }
        })
    }
    const Qu = "test";
    typeof window < "u" && !window.pageContentRpc && (window.pageContentRpc = Ku({
        namespace: "kocjgbieikboloadkgcijaceaadcegnl"
    }));

    function ln(e) {
        return e.includes("/i/api/graphql/") ? ["TweetDetail", "TweetResultByRestId", "HomeTimeline", "HomeLatestTimeline", "UserTweets", "ListLatestTweetsTimeline", "SearchTimeline"].some(r => e.includes(r)) : !1
    }

    function Xu(e) {
        var n, o, i, a, s, u, f, l, y, v, c, d, h, m, p, g, x, A, P, M, S, E, _, O, I, R;
        const t = [],
            r = new Set;
        try {
            const C = [(o = (n = e == null ? void 0 : e.data) == null ? void 0 : n.threaded_conversation_with_injections_v2) == null ? void 0 : o.instructions, (s = (a = (i = e == null ? void 0 : e.data) == null ? void 0 : i.home) == null ? void 0 : a.home_timeline_urt) == null ? void 0 : s.instructions, (v = (y = (l = (f = (u = e == null ? void 0 : e.data) == null ? void 0 : u.user) == null ? void 0 : f.result) == null ? void 0 : l.timeline_v2) == null ? void 0 : y.timeline) == null ? void 0 : v.instructions, (m = (h = (d = (c = e == null ? void 0 : e.data) == null ? void 0 : c.list) == null ? void 0 : d.tweets_timeline) == null ? void 0 : h.timeline) == null ? void 0 : m.instructions, (A = (x = (g = (p = e == null ? void 0 : e.data) == null ? void 0 : p.search_by_raw_query) == null ? void 0 : g.search_timeline) == null ? void 0 : x.timeline) == null ? void 0 : A.instructions];
            for (const U of C) U && Array.isArray(U) && Ju(U, t, r);
            const q = [(M = (P = e == null ? void 0 : e.data) == null ? void 0 : P.tweetResult) == null ? void 0 : M.result, (S = e == null ? void 0 : e.data) == null ? void 0 : S.tweetResult, (_ = (E = e == null ? void 0 : e.data) == null ? void 0 : E.tweet) == null ? void 0 : _.result, (O = e == null ? void 0 : e.data) == null ? void 0 : O.tweet, (R = (I = e == null ? void 0 : e.data) == null ? void 0 : I.tweet_results) == null ? void 0 : R.result];
            for (const U of q) Tt(U, t, r)
        } catch (C) {
            console.warn("[TwitterApiParser] Failed to extract mappings:", C)
        }
        return t
    }

    function Ju(e, t, r) {
        for (const n of e)
            if (n.type === "TimelineAddEntries") {
                const o = n.entries || [];
                for (const i of o) Yu(i, t, r)
            }
    }

    function Yu(e, t, r) {
        var n, o, i, a, s, u;
        try {
            const f = (n = e == null ? void 0 : e.content) == null ? void 0 : n.itemContent;
            (f == null ? void 0 : f.__typename) === "TimelineTweet" && Tt((o = f.tweet_results) == null ? void 0 : o.result, t, r);
            const l = ((i = e == null ? void 0 : e.content) == null ? void 0 : i.items) || [];
            for (const y of l) {
                const v = (u = (s = (a = y == null ? void 0 : y.item) == null ? void 0 : a.itemContent) == null ? void 0 : s.tweet_results) == null ? void 0 : u.result;
                v && Tt(v, t, r)
            }
        } catch {}
    }

    function Tt(e, t, r) {
        var a;
        if (!e) return;
        const n = Zu(e),
            o = n == null ? void 0 : n.rest_id;
        if (!o) return;
        const i = ec(n);
        if (i) $i(o, i, t, r);
        else {
            const s = tc(n);
            s && $i(o, s, t, r)
        }(a = n.quoted_status_result) != null && a.result && Tt(n.quoted_status_result.result, t, r)
    }

    function Zu(e) {
        var r;
        let t = e;
        for (let n = 0; n < 5 && t && typeof t == "object"; n++) {
            if (t.rest_id) return t;
            if ((r = t.tweet_results) != null && r.result) {
                t = t.tweet_results.result;
                continue
            }
            if (t.result) {
                t = t.result;
                continue
            }
            if (t.tweet) {
                t = t.tweet;
                continue
            }
            break
        }
        return t
    }

    function ec(e) {
        var r, n, o;
        const t = ((n = (r = e == null ? void 0 : e.legacy) == null ? void 0 : r.extended_entities) == null ? void 0 : n.media) || [];
        for (const i of t) {
            if (i.type !== "video") continue;
            const a = ((o = i.video_info) == null ? void 0 : o.variants) || [];
            for (const s of a)
                if (s.content_type === "application/x-mpegURL" && s.url) return s.url
        }
        return null
    }

    function tc(e) {
        var a, s, u, f, l, y;
        const t = ((a = e == null ? void 0 : e.card) == null ? void 0 : a.legacy) ?? ((u = (s = e == null ? void 0 : e.legacy) == null ? void 0 : s.card) == null ? void 0 : u.legacy);
        if (!t || t.name !== "unified_card") return null;
        const r = t.binding_values;
        if (!Array.isArray(r)) return null;
        const n = (l = (f = r.find(v => (v == null ? void 0 : v.key) === "unified_card")) == null ? void 0 : f.value) == null ? void 0 : l.string_value;
        if (typeof n != "string" || n.length === 0) return null;
        let o;
        try {
            o = JSON.parse(n)
        } catch {
            return null
        }
        const i = o == null ? void 0 : o.media_entities;
        if (!i || typeof i != "object") return null;
        for (const v of Object.values(i)) {
            const c = ((y = v == null ? void 0 : v.video_info) == null ? void 0 : y.variants) || [];
            for (const d of c)
                if (d.content_type === "application/x-mpegURL" && d.url) return d.url
        }
        return null
    }

    function $i(e, t, r, n) {
        const o = `${e}|${t}`;
        n.has(o) || (n.add(o), r.push({
            tweetId: e,
            m3u8Url: t
        }))
    }
    const G = (...e) => {
            console.log("[ios-webRequest]", ...e)
        },
        dn = "__youtube_dubbing_ios_interceptor",
        rc = () => {
            var e;
            if (G("iosInjectScript pageContentRpc ready"), window[dn]) {
                G("iosInjectScript already initialized");
                return
            }
            window[dn] = !0, fc(), dc(), G("iosInjectScript ready"), (e = window.pageContentRpc) == null || e.sendMessage("iosInterceptorReady", {
                flag: dn
            })
        },
        Li = () => {
            if (window.pageContentRpc === void 0) {
                G("iosInjectScript waiting for pageContentRpc"), setTimeout(Li, 100);
                return
            }
            rc()
        };

    function nc() {
        console.log("[debug-metadata] enter inject script", Qu), G("iosInjectScript init");
        try {
            const e = ue.fetch;
            e && window.fetch !== e && (G("restoring native fetch after xhook patch"), window.fetch = e)
        } catch (e) {
            console.error("[ios-webRequest] restore native fetch failed", e)
        }
        Li()
    }
    const oc = ke(() => {
            nc()
        }),
        ic = e => e ? de.of(e.split(/\r?\n/)).map(t => t.trim()).filter(t => t.length > 0).map(t => {
            const r = t.indexOf(":");
            if (r === -1) return {
                name: t,
                value: ""
            };
            const n = t.substring(0, r).trim(),
                o = t.substring(r + 1).trim();
            return {
                name: n,
                value: o
            }
        }).toArray() : [],
        ac = e => {
            const t = [];
            return e.forEach((r, n) => {
                t.push({
                    name: n,
                    value: r
                })
            }), t
        },
        sc = e => e ? typeof e == "string" ? ic(e) : Object.entries(e).map(([t, r]) => ({
            name: t,
            value: r
        })) : [],
        Di = e => e.includes("youtubedubbing=true"),
        Ui = e => ({
            url: e.url,
            method: e.method,
            type: e.type,
            responseHeaders: e.responseHeaders ?? []
        }),
        uc = e => {
            var t;
            G("dispatchCapturedPayload", e), (t = window.pageContentRpc) == null || t.sendMessage("iosRequestCaptured", e)
        },
        Ni = (e, t) => {
            var r;
            if (ln(e)) try {
                const n = JSON.parse(t),
                    o = Xu(n);
                if (o.length === 0) {
                    G("Twitter GraphQL: no video mappings found", {
                        url: e.substring(0, 80)
                    });
                    return
                }
                G("Twitter GraphQL: extracted mappings", {
                    url: e.substring(0, 80),
                    count: o.length,
                    tweetIds: o.map(i => i.tweetId)
                }), (r = window.pageContentRpc) == null || r.sendMessage("iosTwitterMappings", o)
            } catch (n) {
                G("Twitter GraphQL: parse error", {
                    url: e.substring(0, 80),
                    error: n
                })
            }
        },
        Pt = new $u,
        cc = Pt.getRules(),
        Fi = (e, t) => {
            var r;
            if (t && t > 400) {
                G("processMatch skip status", {
                    url: e.url,
                    status: t
                });
                return
            }
            for (const n of cc) {
                if (!Pt.match(e, n)) continue;
                const o = {
                    url: e.url,
                    method: e.method,
                    type: e.type,
                    responseHeaders: (r = e.responseHeaders) == null ? void 0 : r.map(s => ({
                        name: s.name,
                        value: s.value ?? void 0
                    })),
                    statusCode: t ?? 200
                };
                if (n.filter && !n.filter(o)) {
                    G("processMatch filter rejected", {
                        ruleId: n.id,
                        url: e.url,
                        status: t
                    });
                    continue
                }
                const i = Pt.computeSearch(n, e),
                    a = {
                        ruleId: n.id,
                        url: e.url,
                        method: e.method,
                        site: i,
                        resultType: Pt.computeResultType(e.url),
                        now: Date.now()
                    };
                G("processMatch matched rule", {
                    ruleId: n.id,
                    url: e.url,
                    status: t,
                    site: i
                }), uc(a)
            }
        },
        fc = () => {
            G("setupXmlHttpRequestInterceptor start"), ue.after((e, t) => {
                try {
                    const r = (e == null ? void 0 : e.url) ?? "";
                    if (!r || Di(r)) return G("xhook.after skip", {
                        url: r,
                        reason: "empty-or-flagged"
                    }), t;
                    const n = (e == null ? void 0 : e.method) ?? "GET",
                        o = sc(t.headers),
                        i = Ui({
                            url: r,
                            method: n,
                            type: "xmlhttprequest",
                            responseHeaders: o
                        }),
                        a = typeof t.status == "number" ? t.status : void 0;
                    G("xhook.after captured", {
                        url: r,
                        method: n,
                        status: a,
                        headerCount: o.length
                    }), Fi(i, a), ln(r) && t.text && Ni(r, t.text)
                } catch (r) {
                    console.error("[ios-webRequest] xhr intercept error", r)
                }
                return t
            }), G("setupXmlHttpRequestInterceptor registered")
        },
        lc = (e, t) => e ? {
            url: e.url,
            method: e.method || "GET"
        } : {
            url: (t == null ? void 0 : t.url) ?? "",
            method: "GET"
        },
        dc = () => {
            G("setupFetchInterceptor start"), ca.register({
                request(e, t) {
                    return G("fetch intercept request", {
                        url: e,
                        method: t == null ? void 0 : t.method
                    }), [e, t]
                },
                response(e) {
                    try {
                        const {
                            url: t,
                            method: r
                        } = lc(e.request, e);
                        if (!t || Di(t)) return G("fetch intercept skip", {
                            url: t,
                            method: r
                        }), e;
                        const n = ac(e.headers),
                            o = Ui({
                                url: t,
                                method: r,
                                type: "xmlhttprequest",
                                responseHeaders: n
                            });
                        G("fetch intercept captured", {
                            url: t,
                            method: r,
                            status: e.status,
                            headerCount: n.length
                        }), Fi(o, e.status), ln(t) && e.clone().text().then(i => {
                            Ni(t, i)
                        }).catch(i => {
                            G("Twitter GraphQL: failed to read response body", {
                                url: t.substring(0, 80),
                                err: i
                            })
                        })
                    } catch (t) {
                        console.error("[ios-webRequest] fetch intercept error", t)
                    }
                    return e
                },
                responseError(e) {
                    return console.error("[ios-webRequest] fetch intercept responseError", e), Promise.reject(e)
                }
            }), G("setupFetchInterceptor registered")
        };

    function Oc() {}

    function It(e, ...t) {}
    const yc = {
        debug: (...e) => It(console.debug, ...e),
        log: (...e) => It(console.log, ...e),
        warn: (...e) => It(console.warn, ...e),
        error: (...e) => It(console.error, ...e)
    };
    return (async () => {
        try {
            return await oc.main()
        } catch (e) {
            throw yc.error('The unlisted script "iosInjectScript" crashed on startup!', e), e
        }
    })()
}();
iosinjectscript;    