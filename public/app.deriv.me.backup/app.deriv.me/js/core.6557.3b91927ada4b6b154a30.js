/*! For license information please see core.6557.3b91927ada4b6b154a30.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
    [6557], {
        394559: (e, t, s) => {
            var i, r;
            ! function(n) {
                if (void 0 === (r = "function" == typeof(i = n) ? i.call(t, s, t, e) : i) || (e.exports = r), e.exports = n(), !!0) {
                    var o = window.Cookies,
                        a = window.Cookies = n();
                    a.noConflict = function() {
                        return window.Cookies = o, a
                    }
                }
            }((function() {
                function e() {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                        var s = arguments[e];
                        for (var i in s) t[i] = s[i]
                    }
                    return t
                }

                function t(e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                }
                return function s(i) {
                    function r() {}

                    function n(t, s, n) {
                        if ("undefined" != typeof document) {
                            "number" == typeof(n = e({
                                path: "/"
                            }, r.defaults, n)).expires && (n.expires = new Date(1 * new Date + 864e5 * n.expires)), n.expires = n.expires ? n.expires.toUTCString() : "";
                            try {
                                var o = JSON.stringify(s);
                                /^[\{\[]/.test(o) && (s = o)
                            } catch (e) {}
                            s = i.write ? i.write(s, t) : encodeURIComponent(String(s)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                            var a = "";
                            for (var c in n) n[c] && (a += "; " + c, !0 !== n[c] && (a += "=" + n[c].split(";")[0]));
                            return document.cookie = t + "=" + s + a
                        }
                    }

                    function o(e, s) {
                        if ("undefined" != typeof document) {
                            for (var r = {}, n = document.cookie ? document.cookie.split("; ") : [], o = 0; o < n.length; o++) {
                                var a = n[o].split("="),
                                    c = a.slice(1).join("=");
                                s || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                                try {
                                    var d = t(a[0]);
                                    if (c = (i.read || i)(c, d) || t(c), s) try {
                                        c = JSON.parse(c)
                                    } catch (e) {}
                                    if (r[d] = c, e === d) break
                                } catch (e) {}
                            }
                            return e ? r[e] : r
                        }
                    }
                    return r.set = n, r.get = function(e) {
                        return o(e, !1)
                    }, r.getJSON = function(e) {
                        return o(e, !0)
                    }, r.remove = function(t, s) {
                        n(t, "", e(s, {
                            expires: -1
                        }))
                    }, r.defaults = {}, r.withConverter = s, r
                }((function() {}))
            }))
        },
        993843: (e, t, s) => {
            "use strict";
            s.d(t, {
                m0: () => ye,
                ZF: () => fe,
                Mp: () => Ce
            });
            var i = s(286326),
                r = s(294035);
            const n = {
                    [r.Zh.derivP2pProduction]: "blue.derivws.com",
                    [r.Zh.derivP2pStaging]: "red.derivws.com"
                },
                o = () => {
                    const e = window.location.origin,
                        t = window.location.hostname,
                        {
                            getAppId: s
                        } = r.Zo,
                        i = s(),
                        o = r.Sp.getValue(r.ql.configAppId),
                        a = r.Sp.getValue(r.ql.configServerURL);
                    e === r.Zh.derivP2pStaging && (!o || !a) && (r.Sp.setValue(r.ql.configServerURL, n[e]), r.Sp.setValue(r.ql.configAppId, `${r.AO.domainAppId[t]}`));
                    const c = r.Sp.getValue(r.ql.configServerURL) || localStorage.getItem("config.server_url");
                    let d = "oauth.deriv.com";
                    c && /qa/.test(String(c)) ? d = c : t.includes(".deriv.me") ? d = "oauth.deriv.me" : t.includes(".deriv.be") && (d = "oauth.deriv.be");
                    return {
                        appId: r.Sp.getValue(r.ql.configAppId) || i,
                        lang: r.Sp.getValue(r.ql.i18nLanguage),
                        serverUrl: d
                    }
                };

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s) e[i] = s[i]
                }
                return e
            }
            var c = function e(t, s) {
                function i(e, i, r) {
                    if (!(typeof document > "u")) {
                        "number" == typeof(r = a({}, s, r)).expires && (r.expires = new Date(Date.now() + 864e5 * r.expires)), r.expires && (r.expires = r.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                        var n = "";
                        for (var o in r) r[o] && (n += "; " + o, !0 !== r[o] && (n += "=" + r[o].split(";")[0]));
                        return document.cookie = e + "=" + t.write(i, e) + n
                    }
                }
                return Object.create({
                    set: i,
                    get: function(e) {
                        if (!(typeof document > "u" || arguments.length && !e)) {
                            for (var s = document.cookie ? document.cookie.split("; ") : [], i = {}, r = 0; r < s.length; r++) {
                                var n = s[r].split("="),
                                    o = n.slice(1).join("=");
                                try {
                                    var a = decodeURIComponent(n[0]);
                                    if (i[a] = t.read(o, a), e === a) break
                                } catch {}
                            }
                            return e ? i[e] : i
                        }
                    },
                    remove: function(e, t) {
                        i(e, "", a({}, t, {
                            expires: -1
                        }))
                    },
                    withAttributes: function(t) {
                        return e(this.converter, a({}, this.attributes, t))
                    },
                    withConverter: function(t) {
                        return e(a({}, this.converter, t), this.attributes)
                    }
                }, {
                    attributes: {
                        value: Object.freeze(s)
                    },
                    converter: {
                        value: Object.freeze(t)
                    }
                })
            }({
                read: function(e) {
                    return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
                },
                write: function(e) {
                    return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
                }
            }, {
                path: "/"
            });
            var d = Object.defineProperty,
                l = (e, t, s) => ((e, t, s) => t in e ? d(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: s
                }) : e[t] = s)(e, "symbol" != typeof t ? t + "" : t, s),
                h = (e => (e.FailedToFetchOIDCConfiguration = "FailedToFetchOIDCConfiguration", e.AuthenticationRequestFailed = "AuthenticationRequestFailed", e.AccessTokenRequestFailed = "AccessTokenRequestFailed", e.LegacyTokenRequestFailed = "LegacyTokenRequestFailed", e.RevokeTokenRequestFailed = "RevokeTokenRequestFailed", e.UserManagerCreationFailed = "UserManagerCreationFailed", e.OneTimeCodeMissing = "OneTimeCodeMissing", e.FailedToRemoveSession = "FailedToRemoveSession", e))(h || {});
            class u extends Error {
                constructor(e, t) {
                    super(t), l(this, "type"), this.name = e, this.type = e
                }
            }
            class g extends Error {}

            function p(e) {
                let t = e.replace(/-/g, "+").replace(/_/g, "/");
                switch (t.length % 4) {
                    case 0:
                        break;
                    case 2:
                        t += "==";
                        break;
                    case 3:
                        t += "=";
                        break;
                    default:
                        throw new Error("base64 string is not of the correct length")
                }
                try {
                    return function(e) {
                        return decodeURIComponent(atob(e).replace(/(.)/g, ((e, t) => {
                            let s = t.charCodeAt(0).toString(16).toUpperCase();
                            return s.length < 2 && (s = "0" + s), "%" + s
                        })))
                    }(t)
                } catch {
                    return atob(t)
                }
            }
            g.prototype.name = "InvalidTokenError";
            var _, w, m, f = {
                    debug: () => {},
                    info: () => {},
                    warn: () => {},
                    error: () => {}
                },
                S = (e => (e[e.NONE = 0] = "NONE", e[e.ERROR = 1] = "ERROR", e[e.WARN = 2] = "WARN", e[e.INFO = 3] = "INFO", e[e.DEBUG = 4] = "DEBUG", e))(S || {});
            (m = S || (S = {})).reset = function() {
                _ = 3, w = f
            }, m.setLevel = function(e) {
                if (!(0 <= e && e <= 4)) throw new Error("Invalid log level");
                _ = e
            }, m.setLogger = function(e) {
                w = e
            };
            var y = class e {
                constructor(e) {
                    this._name = e
                }
                debug(...t) {
                    _ >= 4 && w.debug(e._format(this._name, this._method), ...t)
                }
                info(...t) {
                    _ >= 3 && w.info(e._format(this._name, this._method), ...t)
                }
                warn(...t) {
                    _ >= 2 && w.warn(e._format(this._name, this._method), ...t)
                }
                error(...t) {
                    _ >= 1 && w.error(e._format(this._name, this._method), ...t)
                }
                throw (e) {
                    throw this.error(e), e
                }
                create(e) {
                    const t = Object.create(this);
                    return t._method = e, t.debug("begin"), t
                }
                static createStatic(t, s) {
                    const i = new e(`${t}.${s}`);
                    return i.debug("begin"), i
                }
                static _format(e, t) {
                    const s = `[${e}]`;
                    return t ? `${s} ${t}:` : s
                }
                static debug(t, ...s) {
                    _ >= 4 && w.debug(e._format(t), ...s)
                }
                static info(t, ...s) {
                    _ >= 3 && w.info(e._format(t), ...s)
                }
                static warn(t, ...s) {
                    _ >= 2 && w.warn(e._format(t), ...s)
                }
                static error(t, ...s) {
                    _ >= 1 && w.error(e._format(t), ...s)
                }
            };
            S.reset();
            var v = class {
                    static decode(e) {
                        try {
                            return function(e, t) {
                                if ("string" != typeof e) throw new g("Invalid token specified: must be a string");
                                t || (t = {});
                                const s = !0 === t.header ? 0 : 1,
                                    i = e.split(".")[s];
                                if ("string" != typeof i) throw new g(`Invalid token specified: missing part #${s+1}`);
                                let r;
                                try {
                                    r = p(i)
                                } catch (e) {
                                    throw new g(`Invalid token specified: invalid base64 for part #${s+1} (${e.message})`)
                                }
                                try {
                                    return JSON.parse(r)
                                } catch (e) {
                                    throw new g(`Invalid token specified: invalid json for part #${s+1} (${e.message})`)
                                }
                            }(e)
                        } catch (e) {
                            throw y.error("JwtUtils.decode", e), e
                        }
                    }
                    static async generateSignedJwt(e, t, s) {
                        const i = `${T.encodeBase64Url((new TextEncoder).encode(JSON.stringify(e)))}.${T.encodeBase64Url((new TextEncoder).encode(JSON.stringify(t)))}`,
                            r = await window.crypto.subtle.sign({
                                name: "ECDSA",
                                hash: {
                                    name: "SHA-256"
                                }
                            }, s, (new TextEncoder).encode(i));
                        return `${i}.${T.encodeBase64Url(new Uint8Array(r))}`
                    }
                },
                k = e => btoa([...new Uint8Array(e)].map((e => String.fromCharCode(e))).join("")),
                b = class e {
                    static _randomWord() {
                        const e = new Uint32Array(1);
                        return crypto.getRandomValues(e), e[0]
                    }
                    static generateUUIDv4() {
                        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (t => (+t ^ e._randomWord() & 15 >> +t / 4).toString(16))).replace(/-/g, "")
                    }
                    static generateCodeVerifier() {
                        return e.generateUUIDv4() + e.generateUUIDv4() + e.generateUUIDv4()
                    }
                    static async generateCodeChallenge(e) {
                        if (!crypto.subtle) throw new Error("Crypto.subtle is available only in secure contexts (HTTPS).");
                        try {
                            const t = (new TextEncoder).encode(e),
                                s = await crypto.subtle.digest("SHA-256", t);
                            return k(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                        } catch (e) {
                            throw y.error("CryptoUtils.generateCodeChallenge", e), e
                        }
                    }
                    static generateBasicAuth(e, t) {
                        const s = (new TextEncoder).encode([e, t].join(":"));
                        return k(s)
                    }
                    static async hash(e, t) {
                        const s = (new TextEncoder).encode(t),
                            i = await crypto.subtle.digest(e, s);
                        return new Uint8Array(i)
                    }
                    static async customCalculateJwkThumbprint(t) {
                        let s;
                        switch (t.kty) {
                            case "RSA":
                                s = {
                                    e: t.e,
                                    kty: t.kty,
                                    n: t.n
                                };
                                break;
                            case "EC":
                                s = {
                                    crv: t.crv,
                                    kty: t.kty,
                                    x: t.x,
                                    y: t.y
                                };
                                break;
                            case "OKP":
                                s = {
                                    crv: t.crv,
                                    kty: t.kty,
                                    x: t.x
                                };
                                break;
                            case "oct":
                                s = {
                                    crv: t.k,
                                    kty: t.kty
                                };
                                break;
                            default:
                                throw new Error("Unknown jwk type")
                        }
                        const i = await e.hash("SHA-256", JSON.stringify(s));
                        return e.encodeBase64Url(i)
                    }
                    static async generateDPoPProof({
                        url: t,
                        accessToken: s,
                        httpMethod: i,
                        keyPair: r,
                        nonce: n
                    }) {
                        let o, a;
                        const c = {
                            jti: window.crypto.randomUUID(),
                            htm: i ? ? "GET",
                            htu: t,
                            iat: Math.floor(Date.now() / 1e3)
                        };
                        s && (o = await e.hash("SHA-256", s), a = e.encodeBase64Url(o), c.ath = a), n && (c.nonce = n);
                        try {
                            const e = await crypto.subtle.exportKey("jwk", r.publicKey),
                                t = {
                                    alg: "ES256",
                                    typ: "dpop+jwt",
                                    jwk: {
                                        crv: e.crv,
                                        kty: e.kty,
                                        x: e.x,
                                        y: e.y
                                    }
                                };
                            return await v.generateSignedJwt(t, c, r.privateKey)
                        } catch (e) {
                            throw e instanceof TypeError ? new Error(`Error exporting dpop public key: ${e.message}`) : e
                        }
                    }
                    static async generateDPoPJkt(t) {
                        try {
                            const s = await crypto.subtle.exportKey("jwk", t.publicKey);
                            return await e.customCalculateJwkThumbprint(s)
                        } catch (e) {
                            throw e instanceof TypeError ? new Error(`Could not retrieve dpop keys from storage: ${e.message}`) : e
                        }
                    }
                    static async generateDPoPKeys() {
                        return await window.crypto.subtle.generateKey({
                            name: "ECDSA",
                            namedCurve: "P-256"
                        }, !1, ["sign", "verify"])
                    }
                };
            b.encodeBase64Url = e => k(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
            var T = b,
                I = class {
                    constructor(e) {
                        this._name = e, this._callbacks = [], this._logger = new y(`Event('${this._name}')`)
                    }
                    addHandler(e) {
                        return this._callbacks.push(e), () => this.removeHandler(e)
                    }
                    removeHandler(e) {
                        const t = this._callbacks.lastIndexOf(e);
                        t >= 0 && this._callbacks.splice(t, 1)
                    }
                    async raise(...e) {
                        this._logger.debug("raise:", ...e);
                        for (const t of this._callbacks) await t(...e)
                    }
                },
                E = class {
                    static center({ ...e
                    }) {
                        var t;
                        return null == e.width && (e.width = null != (t = [800, 720, 600, 480].find((e => e <= window.outerWidth / 1.618))) ? t : 360), null != e.left || (e.left = Math.max(0, Math.round(window.screenX + (window.outerWidth - e.width) / 2))), null != e.height && (null != e.top || (e.top = Math.max(0, Math.round(window.screenY + (window.outerHeight - e.height) / 2)))), e
                    }
                    static serialize(e) {
                        return Object.entries(e).filter((([, e]) => null != e)).map((([e, t]) => `${e}=${"boolean"!=typeof t?t:t?"yes":"no"}`)).join(",")
                    }
                },
                x = class e extends I {
                    constructor() {
                        super(...arguments), this._logger = new y(`Timer('${this._name}')`), this._timerHandle = null, this._expiration = 0, this._callback = () => {
                            const t = this._expiration - e.getEpochTime();
                            this._logger.debug("timer completes in", t), this._expiration <= e.getEpochTime() && (this.cancel(), super.raise())
                        }
                    }
                    static getEpochTime() {
                        return Math.floor(Date.now() / 1e3)
                    }
                    init(t) {
                        const s = this._logger.create("init");
                        t = Math.max(Math.floor(t), 1);
                        const i = e.getEpochTime() + t;
                        if (this.expiration === i && this._timerHandle) return void s.debug("skipping since already initialized for expiration at", this.expiration);
                        this.cancel(), s.debug("using duration", t), this._expiration = i;
                        const r = Math.min(t, 5);
                        this._timerHandle = setInterval(this._callback, 1e3 * r)
                    }
                    get expiration() {
                        return this._expiration
                    }
                    cancel() {
                        this._logger.create("cancel"), this._timerHandle && (clearInterval(this._timerHandle), this._timerHandle = null)
                    }
                },
                R = class {
                    static readParams(e, t = "query") {
                        if (!e) throw new TypeError("Invalid URL");
                        const s = new URL(e, "http://127.0.0.1")["fragment" === t ? "hash" : "search"];
                        return new URLSearchParams(s.slice(1))
                    }
                },
                C = class extends Error {
                    constructor(e, t) {
                        var s, i, r;
                        if (super(e.error_description || e.error || ""), this.form = t, this.name = "ErrorResponse", !e.error) throw y.error("ErrorResponse", "No error passed"), new Error("No error passed");
                        this.error = e.error, this.error_description = null != (s = e.error_description) ? s : null, this.error_uri = null != (i = e.error_uri) ? i : null, this.state = e.userState, this.session_state = null != (r = e.session_state) ? r : null, this.url_state = e.url_state
                    }
                },
                P = class extends Error {
                    constructor(e) {
                        super(e), this.name = "ErrorTimeout"
                    }
                },
                U = class {
                    constructor(e) {
                        this._logger = new y("AccessTokenEvents"), this._expiringTimer = new x("Access token expiring"), this._expiredTimer = new x("Access token expired"), this._expiringNotificationTimeInSeconds = e.expiringNotificationTimeInSeconds
                    }
                    load(e) {
                        const t = this._logger.create("load");
                        if (e.access_token && void 0 !== e.expires_in) {
                            const s = e.expires_in;
                            if (t.debug("access token present, remaining duration:", s), s > 0) {
                                let e = s - this._expiringNotificationTimeInSeconds;
                                e <= 0 && (e = 1), t.debug("registering expiring timer, raising in", e, "seconds"), this._expiringTimer.init(e)
                            } else t.debug("canceling existing expiring timer because we're past expiration."), this._expiringTimer.cancel();
                            const i = s + 1;
                            t.debug("registering expired timer, raising in", i, "seconds"), this._expiredTimer.init(i)
                        } else this._expiringTimer.cancel(), this._expiredTimer.cancel()
                    }
                    unload() {
                        this._logger.debug("unload: canceling existing access token timers"), this._expiringTimer.cancel(), this._expiredTimer.cancel()
                    }
                    addAccessTokenExpiring(e) {
                        return this._expiringTimer.addHandler(e)
                    }
                    removeAccessTokenExpiring(e) {
                        this._expiringTimer.removeHandler(e)
                    }
                    addAccessTokenExpired(e) {
                        return this._expiredTimer.addHandler(e)
                    }
                    removeAccessTokenExpired(e) {
                        this._expiredTimer.removeHandler(e)
                    }
                },
                O = class {
                    constructor(e, t, s, i, r) {
                        this._callback = e, this._client_id = t, this._intervalInSeconds = i, this._stopOnError = r, this._logger = new y("CheckSessionIFrame"), this._timer = null, this._session_state = null, this._message = e => {
                            e.origin === this._frame_origin && e.source === this._frame.contentWindow && ("error" === e.data ? (this._logger.error("error message from check session op iframe"), this._stopOnError && this.stop()) : "changed" === e.data ? (this._logger.debug("changed message from check session op iframe"), this.stop(), this._callback()) : this._logger.debug(e.data + " message from check session op iframe"))
                        };
                        const n = new URL(s);
                        this._frame_origin = n.origin, this._frame = window.document.createElement("iframe"), this._frame.style.visibility = "hidden", this._frame.style.position = "fixed", this._frame.style.left = "-1000px", this._frame.style.top = "0", this._frame.width = "0", this._frame.height = "0", this._frame.src = n.href
                    }
                    load() {
                        return new Promise((e => {
                            this._frame.onload = () => {
                                e()
                            }, window.document.body.appendChild(this._frame), window.addEventListener("message", this._message, !1)
                        }))
                    }
                    start(e) {
                        if (this._session_state === e) return;
                        this._logger.create("start"), this.stop(), this._session_state = e;
                        const t = () => {
                            !this._frame.contentWindow || !this._session_state || this._frame.contentWindow.postMessage(this._client_id + " " + this._session_state, this._frame_origin)
                        };
                        t(), this._timer = setInterval(t, 1e3 * this._intervalInSeconds)
                    }
                    stop() {
                        this._logger.create("stop"), this._session_state = null, this._timer && (clearInterval(this._timer), this._timer = null)
                    }
                },
                q = class {
                    constructor() {
                        this._logger = new y("InMemoryWebStorage"), this._data = {}
                    }
                    clear() {
                        this._logger.create("clear"), this._data = {}
                    }
                    getItem(e) {
                        return this._logger.create(`getItem('${e}')`), this._data[e]
                    }
                    setItem(e, t) {
                        this._logger.create(`setItem('${e}')`), this._data[e] = t
                    }
                    removeItem(e) {
                        this._logger.create(`removeItem('${e}')`), delete this._data[e]
                    }
                    get length() {
                        return Object.getOwnPropertyNames(this._data).length
                    }
                    key(e) {
                        return Object.getOwnPropertyNames(this._data)[e]
                    }
                },
                A = class extends Error {
                    constructor(e, t) {
                        super(t), this.name = "ErrorDPoPNonce", this.nonce = e
                    }
                },
                N = class {
                    constructor(e = [], t = null, s = {}) {
                        this._jwtHandler = t, this._extraHeaders = s, this._logger = new y("JsonService"), this._contentTypes = [], this._contentTypes.push(...e, "application/json"), t && this._contentTypes.push("application/jwt")
                    }
                    async fetchWithTimeout(e, t = {}) {
                        const {
                            timeoutInSeconds: s,
                            ...i
                        } = t;
                        if (!s) return await fetch(e, i);
                        const r = new AbortController,
                            n = setTimeout((() => r.abort()), 1e3 * s);
                        try {
                            return await fetch(e, { ...t,
                                signal: r.signal
                            })
                        } catch (e) {
                            throw e instanceof DOMException && "AbortError" === e.name ? new P("Network timed out") : e
                        } finally {
                            clearTimeout(n)
                        }
                    }
                    async getJson(e, {
                        token: t,
                        credentials: s,
                        timeoutInSeconds: i
                    } = {}) {
                        const r = this._logger.create("getJson"),
                            n = {
                                Accept: this._contentTypes.join(", ")
                            };
                        let o;
                        t && (r.debug("token passed, setting Authorization header"), n.Authorization = "Bearer " + t), this.appendExtraHeaders(n);
                        try {
                            r.debug("url:", e), o = await this.fetchWithTimeout(e, {
                                method: "GET",
                                headers: n,
                                timeoutInSeconds: i,
                                credentials: s
                            })
                        } catch (e) {
                            throw r.error("Network Error"), e
                        }
                        r.debug("HTTP response received, status", o.status);
                        const a = o.headers.get("Content-Type");
                        if (a && !this._contentTypes.find((e => a.startsWith(e))) && r.throw(new Error(`Invalid response Content-Type: ${a??"undefined"}, from URL: ${e}`)), o.ok && this._jwtHandler && null != a && a.startsWith("application/jwt")) return await this._jwtHandler(await o.text());
                        let c;
                        try {
                            c = await o.json()
                        } catch (e) {
                            throw r.error("Error parsing JSON response", e), o.ok ? e : new Error(`${o.statusText} (${o.status})`)
                        }
                        if (!o.ok) throw r.error("Error from server:", c), c.error ? new C(c) : new Error(`${o.statusText} (${o.status}): ${JSON.stringify(c)}`);
                        return c
                    }
                    async postForm(e, {
                        body: t,
                        basicAuth: s,
                        timeoutInSeconds: i,
                        initCredentials: r,
                        extraHeaders: n
                    }) {
                        const o = this._logger.create("postForm"),
                            a = {
                                Accept: this._contentTypes.join(", "),
                                "Content-Type": "application/x-www-form-urlencoded",
                                ...n
                            };
                        let c;
                        void 0 !== s && (a.Authorization = "Basic " + s), this.appendExtraHeaders(a);
                        try {
                            o.debug("url:", e), c = await this.fetchWithTimeout(e, {
                                method: "POST",
                                headers: a,
                                body: t,
                                timeoutInSeconds: i,
                                credentials: r
                            })
                        } catch (e) {
                            throw o.error("Network error"), e
                        }
                        o.debug("HTTP response received, status", c.status);
                        const d = c.headers.get("Content-Type");
                        if (d && !this._contentTypes.find((e => d.startsWith(e)))) throw new Error(`Invalid response Content-Type: ${d??"undefined"}, from URL: ${e}`);
                        const l = await c.text();
                        let h = {};
                        if (l) try {
                            h = JSON.parse(l)
                        } catch (e) {
                            throw o.error("Error parsing JSON response", e), c.ok ? e : new Error(`${c.statusText} (${c.status})`)
                        }
                        if (!c.ok) {
                            if (o.error("Error from server:", h), c.headers.has("dpop-nonce")) {
                                const e = c.headers.get("dpop-nonce");
                                throw new A(e, `${JSON.stringify(h)}`)
                            }
                            throw h.error ? new C(h, t) : new Error(`${c.statusText} (${c.status}): ${JSON.stringify(h)}`)
                        }
                        return h
                    }
                    appendExtraHeaders(e) {
                        const t = this._logger.create("appendExtraHeaders"),
                            s = Object.keys(this._extraHeaders),
                            i = ["authorization", "accept", "content-type"];
                        0 !== s.length && s.forEach((s => {
                            if (i.includes(s.toLocaleLowerCase())) return void t.warn("Protected header could not be overridden", s, i);
                            const r = "function" == typeof this._extraHeaders[s] ? this._extraHeaders[s]() : this._extraHeaders[s];
                            r && "" !== r && (e[s] = r)
                        }))
                    }
                },
                F = class {
                    constructor(e) {
                        this._settings = e, this._logger = new y("MetadataService"), this._signingKeys = null, this._metadata = null, this._metadataUrl = this._settings.metadataUrl, this._jsonService = new N(["application/jwk-set+json"], null, this._settings.extraHeaders), this._settings.signingKeys && (this._logger.debug("using signingKeys from settings"), this._signingKeys = this._settings.signingKeys), this._settings.metadata && (this._logger.debug("using metadata from settings"), this._metadata = this._settings.metadata), this._settings.fetchRequestCredentials && (this._logger.debug("using fetchRequestCredentials from settings"), this._fetchRequestCredentials = this._settings.fetchRequestCredentials)
                    }
                    resetSigningKeys() {
                        this._signingKeys = null
                    }
                    async getMetadata() {
                        const e = this._logger.create("getMetadata");
                        if (this._metadata) return e.debug("using cached values"), this._metadata;
                        if (!this._metadataUrl) throw e.throw(new Error("No authority or metadataUrl configured on settings")), null;
                        e.debug("getting metadata from", this._metadataUrl);
                        const t = await this._jsonService.getJson(this._metadataUrl, {
                            credentials: this._fetchRequestCredentials,
                            timeoutInSeconds: this._settings.requestTimeoutInSeconds
                        });
                        return e.debug("merging remote JSON with seed metadata"), this._metadata = Object.assign({}, this._settings.metadataSeed, t), this._metadata
                    }
                    getIssuer() {
                        return this._getMetadataProperty("issuer")
                    }
                    getAuthorizationEndpoint() {
                        return this._getMetadataProperty("authorization_endpoint")
                    }
                    getUserInfoEndpoint() {
                        return this._getMetadataProperty("userinfo_endpoint")
                    }
                    getTokenEndpoint(e = !0) {
                        return this._getMetadataProperty("token_endpoint", e)
                    }
                    getCheckSessionIframe() {
                        return this._getMetadataProperty("check_session_iframe", !0)
                    }
                    getEndSessionEndpoint() {
                        return this._getMetadataProperty("end_session_endpoint", !0)
                    }
                    getRevocationEndpoint(e = !0) {
                        return this._getMetadataProperty("revocation_endpoint", e)
                    }
                    getKeysEndpoint(e = !0) {
                        return this._getMetadataProperty("jwks_uri", e)
                    }
                    async _getMetadataProperty(e, t = !1) {
                        const s = this._logger.create(`_getMetadataProperty('${e}')`),
                            i = await this.getMetadata();
                        if (s.debug("resolved"), void 0 === i[e]) {
                            if (!0 === t) return void s.warn("Metadata does not contain optional property");
                            s.throw(new Error("Metadata does not contain property " + e))
                        }
                        return i[e]
                    }
                    async getSigningKeys() {
                        const e = this._logger.create("getSigningKeys");
                        if (this._signingKeys) return e.debug("returning signingKeys from cache"), this._signingKeys;
                        const t = await this.getKeysEndpoint(!1);
                        e.debug("got jwks_uri", t);
                        const s = await this._jsonService.getJson(t, {
                            timeoutInSeconds: this._settings.requestTimeoutInSeconds
                        });
                        if (e.debug("got key set", s), !Array.isArray(s.keys)) throw e.throw(new Error("Missing keys on keyset")), null;
                        return this._signingKeys = s.keys, this._signingKeys
                    }
                },
                j = class {
                    constructor({
                        prefix: e = "oidc.",
                        store: t = localStorage
                    } = {}) {
                        this._logger = new y("WebStorageStateStore"), this._store = t, this._prefix = e
                    }
                    async set(e, t) {
                        this._logger.create(`set('${e}')`), e = this._prefix + e, await this._store.setItem(e, t)
                    }
                    async get(e) {
                        return this._logger.create(`get('${e}')`), e = this._prefix + e, await this._store.getItem(e)
                    }
                    async remove(e) {
                        this._logger.create(`remove('${e}')`), e = this._prefix + e;
                        const t = await this._store.getItem(e);
                        return await this._store.removeItem(e), t
                    }
                    async getAllKeys() {
                        this._logger.create("getAllKeys");
                        const e = await this._store.length,
                            t = [];
                        for (let s = 0; s < e; s++) {
                            const e = await this._store.key(s);
                            e && 0 === e.indexOf(this._prefix) && t.push(e.substr(this._prefix.length))
                        }
                        return t
                    }
                },
                M = class {
                    constructor({
                        authority: e,
                        metadataUrl: t,
                        metadata: s,
                        signingKeys: i,
                        metadataSeed: r,
                        client_id: n,
                        client_secret: o,
                        response_type: a = "code",
                        scope: c = "openid",
                        redirect_uri: d,
                        post_logout_redirect_uri: l,
                        client_authentication: h = "client_secret_post",
                        prompt: u,
                        display: g,
                        max_age: p,
                        ui_locales: _,
                        acr_values: w,
                        resource: m,
                        response_mode: f,
                        filterProtocolClaims: S = !0,
                        loadUserInfo: y = !1,
                        requestTimeoutInSeconds: v,
                        staleStateAgeInSeconds: k = 900,
                        mergeClaimsStrategy: b = {
                            array: "replace"
                        },
                        disablePKCE: T = !1,
                        stateStore: I,
                        revokeTokenAdditionalContentTypes: E,
                        fetchRequestCredentials: x,
                        refreshTokenAllowedScope: R,
                        extraQueryParams: C = {},
                        extraTokenParams: P = {},
                        extraHeaders: U = {},
                        dpop: O,
                        omitScopeWhenRequesting: A = !1
                    }) {
                        var N;
                        if (this.authority = e, t ? this.metadataUrl = t : (this.metadataUrl = e, e && (this.metadataUrl.endsWith("/") || (this.metadataUrl += "/"), this.metadataUrl += ".well-known/openid-configuration")), this.metadata = s, this.metadataSeed = r, this.signingKeys = i, this.client_id = n, this.client_secret = o, this.response_type = a, this.scope = c, this.redirect_uri = d, this.post_logout_redirect_uri = l, this.client_authentication = h, this.prompt = u, this.display = g, this.max_age = p, this.ui_locales = _, this.acr_values = w, this.resource = m, this.response_mode = f, this.filterProtocolClaims = S ? ? !0, this.loadUserInfo = !!y, this.staleStateAgeInSeconds = k, this.mergeClaimsStrategy = b, this.omitScopeWhenRequesting = A, this.disablePKCE = !!T, this.revokeTokenAdditionalContentTypes = E, this.fetchRequestCredentials = x || "same-origin", this.requestTimeoutInSeconds = v, I) this.stateStore = I;
                        else {
                            const e = typeof window < "u" ? window.localStorage : new q;
                            this.stateStore = new j({
                                store: e
                            })
                        }
                        if (this.refreshTokenAllowedScope = R, this.extraQueryParams = C, this.extraTokenParams = P, this.extraHeaders = U, this.dpop = O, this.dpop && (null == (N = this.dpop) || !N.store)) throw new Error("A DPoPStore is required when dpop is enabled")
                    }
                },
                H = class {
                    constructor(e, t) {
                        this._settings = e, this._metadataService = t, this._logger = new y("UserInfoService"), this._getClaimsFromJwt = async e => {
                            const t = this._logger.create("_getClaimsFromJwt");
                            try {
                                const s = v.decode(e);
                                return t.debug("JWT decoding successful"), s
                            } catch (e) {
                                throw t.error("Error parsing JWT response"), e
                            }
                        }, this._jsonService = new N(void 0, this._getClaimsFromJwt, this._settings.extraHeaders)
                    }
                    async getClaims(e) {
                        const t = this._logger.create("getClaims");
                        e || this._logger.throw(new Error("No token passed"));
                        const s = await this._metadataService.getUserInfoEndpoint();
                        t.debug("got userinfo url", s);
                        const i = await this._jsonService.getJson(s, {
                            token: e,
                            credentials: this._settings.fetchRequestCredentials,
                            timeoutInSeconds: this._settings.requestTimeoutInSeconds
                        });
                        return t.debug("got claims", i), i
                    }
                },
                D = class {
                    constructor(e, t) {
                        this._settings = e, this._metadataService = t, this._logger = new y("TokenClient"), this._jsonService = new N(this._settings.revokeTokenAdditionalContentTypes, null, this._settings.extraHeaders)
                    }
                    async exchangeCode({
                        grant_type: e = "authorization_code",
                        redirect_uri: t = this._settings.redirect_uri,
                        client_id: s = this._settings.client_id,
                        client_secret: i = this._settings.client_secret,
                        extraHeaders: r,
                        ...n
                    }) {
                        const o = this._logger.create("exchangeCode");
                        s || o.throw(new Error("A client_id is required")), t || o.throw(new Error("A redirect_uri is required")), n.code || o.throw(new Error("A code is required"));
                        const a = new URLSearchParams({
                            grant_type: e,
                            redirect_uri: t
                        });
                        for (const [e, t] of Object.entries(n)) null != t && a.set(e, t);
                        let c;
                        switch (this._settings.client_authentication) {
                            case "client_secret_basic":
                                if (!i) throw o.throw(new Error("A client_secret is required")), null;
                                c = T.generateBasicAuth(s, i);
                                break;
                            case "client_secret_post":
                                a.append("client_id", s), i && a.append("client_secret", i)
                        }
                        const d = await this._metadataService.getTokenEndpoint(!1);
                        o.debug("got token endpoint");
                        const l = await this._jsonService.postForm(d, {
                            body: a,
                            basicAuth: c,
                            timeoutInSeconds: this._settings.requestTimeoutInSeconds,
                            initCredentials: this._settings.fetchRequestCredentials,
                            extraHeaders: r
                        });
                        return o.debug("got response"), l
                    }
                    async exchangeCredentials({
                        grant_type: e = "password",
                        client_id: t = this._settings.client_id,
                        client_secret: s = this._settings.client_secret,
                        scope: i = this._settings.scope,
                        ...r
                    }) {
                        const n = this._logger.create("exchangeCredentials");
                        t || n.throw(new Error("A client_id is required"));
                        const o = new URLSearchParams({
                            grant_type: e
                        });
                        this._settings.omitScopeWhenRequesting || o.set("scope", i);
                        for (const [e, t] of Object.entries(r)) null != t && o.set(e, t);
                        let a;
                        switch (this._settings.client_authentication) {
                            case "client_secret_basic":
                                if (!s) throw n.throw(new Error("A client_secret is required")), null;
                                a = T.generateBasicAuth(t, s);
                                break;
                            case "client_secret_post":
                                o.append("client_id", t), s && o.append("client_secret", s)
                        }
                        const c = await this._metadataService.getTokenEndpoint(!1);
                        n.debug("got token endpoint");
                        const d = await this._jsonService.postForm(c, {
                            body: o,
                            basicAuth: a,
                            timeoutInSeconds: this._settings.requestTimeoutInSeconds,
                            initCredentials: this._settings.fetchRequestCredentials
                        });
                        return n.debug("got response"), d
                    }
                    async exchangeRefreshToken({
                        grant_type: e = "refresh_token",
                        client_id: t = this._settings.client_id,
                        client_secret: s = this._settings.client_secret,
                        timeoutInSeconds: i,
                        extraHeaders: r,
                        ...n
                    }) {
                        const o = this._logger.create("exchangeRefreshToken");
                        t || o.throw(new Error("A client_id is required")), n.refresh_token || o.throw(new Error("A refresh_token is required"));
                        const a = new URLSearchParams({
                            grant_type: e
                        });
                        for (const [e, t] of Object.entries(n)) Array.isArray(t) ? t.forEach((t => a.append(e, t))) : null != t && a.set(e, t);
                        let c;
                        switch (this._settings.client_authentication) {
                            case "client_secret_basic":
                                if (!s) throw o.throw(new Error("A client_secret is required")), null;
                                c = T.generateBasicAuth(t, s);
                                break;
                            case "client_secret_post":
                                a.append("client_id", t), s && a.append("client_secret", s)
                        }
                        const d = await this._metadataService.getTokenEndpoint(!1);
                        o.debug("got token endpoint");
                        const l = await this._jsonService.postForm(d, {
                            body: a,
                            basicAuth: c,
                            timeoutInSeconds: i,
                            initCredentials: this._settings.fetchRequestCredentials,
                            extraHeaders: r
                        });
                        return o.debug("got response"), l
                    }
                    async revoke(e) {
                        var t;
                        const s = this._logger.create("revoke");
                        e.token || s.throw(new Error("A token is required"));
                        const i = await this._metadataService.getRevocationEndpoint(!1);
                        s.debug(`got revocation endpoint, revoking ${null!=(t=e.token_type_hint)?t:"default token type"}`);
                        const r = new URLSearchParams;
                        for (const [t, s] of Object.entries(e)) null != s && r.set(t, s);
                        r.set("client_id", this._settings.client_id), this._settings.client_secret && r.set("client_secret", this._settings.client_secret), await this._jsonService.postForm(i, {
                            body: r,
                            timeoutInSeconds: this._settings.requestTimeoutInSeconds
                        }), s.debug("got response")
                    }
                },
                W = class {
                    constructor(e, t, s) {
                        this._settings = e, this._metadataService = t, this._claimsService = s, this._logger = new y("ResponseValidator"), this._userInfoService = new H(this._settings, this._metadataService), this._tokenClient = new D(this._settings, this._metadataService)
                    }
                    async validateSigninResponse(e, t, s) {
                        const i = this._logger.create("validateSigninResponse");
                        this._processSigninState(e, t), i.debug("state processed"), await this._processCode(e, t, s), i.debug("code processed"), e.isOpenId && this._validateIdTokenAttributes(e), i.debug("tokens validated"), await this._processClaims(e, null == t ? void 0 : t.skipUserInfo, e.isOpenId), i.debug("claims processed")
                    }
                    async validateCredentialsResponse(e, t) {
                        const s = this._logger.create("validateCredentialsResponse");
                        e.isOpenId && e.id_token && this._validateIdTokenAttributes(e), s.debug("tokens validated"), await this._processClaims(e, t, e.isOpenId), s.debug("claims processed")
                    }
                    async validateRefreshResponse(e, t) {
                        const s = this._logger.create("validateRefreshResponse");
                        e.userState = t.data, null != e.session_state || (e.session_state = t.session_state), null != e.scope || (e.scope = t.scope), e.isOpenId && e.id_token && (this._validateIdTokenAttributes(e, t.id_token), s.debug("ID Token validated")), e.id_token || (e.id_token = t.id_token, e.profile = t.profile);
                        const i = e.isOpenId && !!e.id_token;
                        await this._processClaims(e, !1, i), s.debug("claims processed")
                    }
                    validateSignoutResponse(e, t) {
                        const s = this._logger.create("validateSignoutResponse");
                        if (t.id !== e.state && s.throw(new Error("State does not match")), s.debug("state validated"), e.userState = t.data, e.error) throw s.warn("Response was error", e.error), new C(e)
                    }
                    _processSigninState(e, t) {
                        const s = this._logger.create("_processSigninState");
                        if (t.id !== e.state && s.throw(new Error("State does not match")), t.client_id || s.throw(new Error("No client_id on state")), t.authority || s.throw(new Error("No authority on state")), this._settings.authority !== t.authority && s.throw(new Error("authority mismatch on settings vs. signin state")), this._settings.client_id && this._settings.client_id !== t.client_id && s.throw(new Error("client_id mismatch on settings vs. signin state")), s.debug("state validated"), e.userState = t.data, e.url_state = t.url_state, null != e.scope || (e.scope = t.scope), e.error) throw s.warn("Response was error", e.error), new C(e);
                        t.code_verifier && !e.code && s.throw(new Error("Expected code in response"))
                    }
                    async _processClaims(e, t = !1, s = !0) {
                        const i = this._logger.create("_processClaims");
                        if (e.profile = this._claimsService.filterProtocolClaims(e.profile), t || !this._settings.loadUserInfo || !e.access_token) return void i.debug("not loading user info");
                        i.debug("loading user info");
                        const r = await this._userInfoService.getClaims(e.access_token);
                        i.debug("user info claims received from user info endpoint"), s && r.sub !== e.profile.sub && i.throw(new Error("subject from UserInfo response does not match subject in ID Token")), e.profile = this._claimsService.mergeClaims(e.profile, this._claimsService.filterProtocolClaims(r)), i.debug("user info claims received, updated profile:", e.profile)
                    }
                    async _processCode(e, t, s) {
                        const i = this._logger.create("_processCode");
                        if (e.code) {
                            i.debug("Validating code");
                            const r = await this._tokenClient.exchangeCode({
                                client_id: t.client_id,
                                client_secret: t.client_secret,
                                code: e.code,
                                redirect_uri: t.redirect_uri,
                                code_verifier: t.code_verifier,
                                extraHeaders: s,
                                ...t.extraTokenParams
                            });
                            Object.assign(e, r)
                        } else i.debug("No code to process")
                    }
                    _validateIdTokenAttributes(e, t) {
                        var s;
                        const i = this._logger.create("_validateIdTokenAttributes");
                        i.debug("decoding ID Token JWT");
                        const r = v.decode(null != (s = e.id_token) ? s : "");
                        if (r.sub || i.throw(new Error("ID Token is missing a subject claim")), t) {
                            const e = v.decode(t);
                            r.sub !== e.sub && i.throw(new Error("sub in id_token does not match current sub")), r.auth_time && r.auth_time !== e.auth_time && i.throw(new Error("auth_time in id_token does not match original auth_time")), r.azp && r.azp !== e.azp && i.throw(new Error("azp in id_token does not match original azp")), !r.azp && e.azp && i.throw(new Error("azp not in id_token, but present in original id_token"))
                        }
                        e.profile = r
                    }
                },
                $ = class e {
                    constructor(e) {
                        this.id = e.id || T.generateUUIDv4(), this.data = e.data, e.created && e.created > 0 ? this.created = e.created : this.created = x.getEpochTime(), this.request_type = e.request_type, this.url_state = e.url_state
                    }
                    toStorageString() {
                        return new y("State").create("toStorageString"), JSON.stringify({
                            id: this.id,
                            data: this.data,
                            created: this.created,
                            request_type: this.request_type,
                            url_state: this.url_state
                        })
                    }
                    static fromStorageString(t) {
                        return y.createStatic("State", "fromStorageString"), Promise.resolve(new e(JSON.parse(t)))
                    }
                    static async clearStaleState(t, s) {
                        const i = y.createStatic("State", "clearStaleState"),
                            r = x.getEpochTime() - s,
                            n = await t.getAllKeys();
                        i.debug("got keys", n);
                        for (let s = 0; s < n.length; s++) {
                            const o = n[s],
                                a = await t.get(o);
                            let c = !1;
                            if (a) try {
                                const t = await e.fromStorageString(a);
                                i.debug("got item from key:", o, t.created), t.created <= r && (c = !0)
                            } catch (e) {
                                i.error("Error parsing state for key:", o, e), c = !0
                            } else i.debug("no item in storage for key:", o), c = !0;
                            c && (i.debug("removed item for key:", o), t.remove(o))
                        }
                    }
                },
                L = class e extends $ {
                    constructor(e) {
                        super(e), this.code_verifier = e.code_verifier, this.code_challenge = e.code_challenge, this.authority = e.authority, this.client_id = e.client_id, this.redirect_uri = e.redirect_uri, this.scope = e.scope, this.client_secret = e.client_secret, this.extraTokenParams = e.extraTokenParams, this.response_mode = e.response_mode, this.skipUserInfo = e.skipUserInfo
                    }
                    static async create(t) {
                        const s = !0 === t.code_verifier ? T.generateCodeVerifier() : t.code_verifier || void 0,
                            i = s ? await T.generateCodeChallenge(s) : void 0;
                        return new e({ ...t,
                            code_verifier: s,
                            code_challenge: i
                        })
                    }
                    toStorageString() {
                        return new y("SigninState").create("toStorageString"), JSON.stringify({
                            id: this.id,
                            data: this.data,
                            created: this.created,
                            request_type: this.request_type,
                            url_state: this.url_state,
                            code_verifier: this.code_verifier,
                            authority: this.authority,
                            client_id: this.client_id,
                            redirect_uri: this.redirect_uri,
                            scope: this.scope,
                            client_secret: this.client_secret,
                            extraTokenParams: this.extraTokenParams,
                            response_mode: this.response_mode,
                            skipUserInfo: this.skipUserInfo
                        })
                    }
                    static fromStorageString(t) {
                        y.createStatic("SigninState", "fromStorageString");
                        const s = JSON.parse(t);
                        return e.create(s)
                    }
                },
                J = class e {
                    constructor(e) {
                        this.url = e.url, this.state = e.state
                    }
                    static async create({
                        url: t,
                        authority: s,
                        client_id: i,
                        redirect_uri: r,
                        response_type: n,
                        scope: o,
                        state_data: a,
                        response_mode: c,
                        request_type: d,
                        client_secret: l,
                        nonce: h,
                        url_state: u,
                        resource: g,
                        skipUserInfo: p,
                        extraQueryParams: _,
                        extraTokenParams: w,
                        disablePKCE: m,
                        dpopJkt: f,
                        omitScopeWhenRequesting: S,
                        ...y
                    }) {
                        if (!t) throw this._logger.error("create: No url passed"), new Error("url");
                        if (!i) throw this._logger.error("create: No client_id passed"), new Error("client_id");
                        if (!r) throw this._logger.error("create: No redirect_uri passed"), new Error("redirect_uri");
                        if (!n) throw this._logger.error("create: No response_type passed"), new Error("response_type");
                        if (!o) throw this._logger.error("create: No scope passed"), new Error("scope");
                        if (!s) throw this._logger.error("create: No authority passed"), new Error("authority");
                        const v = await L.create({
                                data: a,
                                request_type: d,
                                url_state: u,
                                code_verifier: !m,
                                client_id: i,
                                authority: s,
                                redirect_uri: r,
                                response_mode: c,
                                client_secret: l,
                                scope: o,
                                extraTokenParams: w,
                                skipUserInfo: p
                            }),
                            k = new URL(t);
                        k.searchParams.append("client_id", i), k.searchParams.append("redirect_uri", r), k.searchParams.append("response_type", n), S || k.searchParams.append("scope", o), h && k.searchParams.append("nonce", h), f && k.searchParams.append("dpop_jkt", f);
                        let b = v.id;
                        u && (b = `${b};${u}`), k.searchParams.append("state", b), v.code_challenge && (k.searchParams.append("code_challenge", v.code_challenge), k.searchParams.append("code_challenge_method", "S256")), g && (Array.isArray(g) ? g : [g]).forEach((e => k.searchParams.append("resource", e)));
                        for (const [e, t] of Object.entries({
                                response_mode: c,
                                ...y,
                                ..._
                            })) null != t && k.searchParams.append(e, t.toString());
                        return new e({
                            url: k.href,
                            state: v
                        })
                    }
                };
            J._logger = new y("SigninRequest");
            var K = J,
                z = class {
                    constructor(e) {
                        if (this.access_token = "", this.token_type = "", this.profile = {}, this.state = e.get("state"), this.session_state = e.get("session_state"), this.state) {
                            const e = decodeURIComponent(this.state).split(";");
                            this.state = e[0], e.length > 1 && (this.url_state = e.slice(1).join(";"))
                        }
                        this.error = e.get("error"), this.error_description = e.get("error_description"), this.error_uri = e.get("error_uri"), this.code = e.get("code")
                    }
                    get expires_in() {
                        if (void 0 !== this.expires_at) return this.expires_at - x.getEpochTime()
                    }
                    set expires_in(e) {
                        "string" == typeof e && (e = Number(e)), void 0 !== e && e >= 0 && (this.expires_at = Math.floor(e) + x.getEpochTime())
                    }
                    get isOpenId() {
                        var e;
                        return (null == (e = this.scope) ? void 0 : e.split(" ").includes("openid")) || !!this.id_token
                    }
                },
                B = class {
                    constructor({
                        url: e,
                        state_data: t,
                        id_token_hint: s,
                        post_logout_redirect_uri: i,
                        extraQueryParams: r,
                        request_type: n,
                        client_id: o
                    }) {
                        if (this._logger = new y("SignoutRequest"), !e) throw this._logger.error("ctor: No url passed"), new Error("url");
                        const a = new URL(e);
                        s && a.searchParams.append("id_token_hint", s), o && a.searchParams.append("client_id", o), i && (a.searchParams.append("post_logout_redirect_uri", i), t && (this.state = new $({
                            data: t,
                            request_type: n
                        }), a.searchParams.append("state", this.state.id)));
                        for (const [e, t] of Object.entries({ ...r
                            })) null != t && a.searchParams.append(e, t.toString());
                        this.url = a.href
                    }
                },
                V = class {
                    constructor(e) {
                        this.state = e.get("state"), this.error = e.get("error"), this.error_description = e.get("error_description"), this.error_uri = e.get("error_uri")
                    }
                },
                Q = ["nbf", "jti", "auth_time", "nonce", "acr", "amr", "azp", "at_hash"],
                Z = ["sub", "iss", "aud", "exp", "iat"],
                G = class {
                    constructor(e) {
                        this._settings = e, this._logger = new y("ClaimsService")
                    }
                    filterProtocolClaims(e) {
                        const t = { ...e
                        };
                        if (this._settings.filterProtocolClaims) {
                            let e;
                            e = Array.isArray(this._settings.filterProtocolClaims) ? this._settings.filterProtocolClaims : Q;
                            for (const s of e) Z.includes(s) || delete t[s]
                        }
                        return t
                    }
                    mergeClaims(e, t) {
                        const s = { ...e
                        };
                        for (const [e, i] of Object.entries(t))
                            if (s[e] !== i)
                                if (Array.isArray(s[e]) || Array.isArray(i))
                                    if ("replace" == this._settings.mergeClaimsStrategy.array) s[e] = i;
                                    else {
                                        const t = Array.isArray(s[e]) ? s[e] : [s[e]];
                                        for (const e of Array.isArray(i) ? i : [i]) t.includes(e) || t.push(e);
                                        s[e] = t
                                    }
                        else "object" == typeof s[e] && "object" == typeof i ? s[e] = this.mergeClaims(s[e], i) : s[e] = i;
                        return s
                    }
                },
                Y = class {
                    constructor(e, t) {
                        this.keys = e, this.nonce = t
                    }
                },
                X = class {
                    constructor(e, t) {
                        this._logger = new y("OidcClient"), this.settings = e instanceof M ? e : new M(e), this.metadataService = t ? ? new F(this.settings), this._claimsService = new G(this.settings), this._validator = new W(this.settings, this.metadataService, this._claimsService), this._tokenClient = new D(this.settings, this.metadataService)
                    }
                    async createSigninRequest({
                        state: e,
                        request: t,
                        request_uri: s,
                        request_type: i,
                        id_token_hint: r,
                        login_hint: n,
                        skipUserInfo: o,
                        nonce: a,
                        url_state: c,
                        response_type: d = this.settings.response_type,
                        scope: l = this.settings.scope,
                        redirect_uri: h = this.settings.redirect_uri,
                        prompt: u = this.settings.prompt,
                        display: g = this.settings.display,
                        max_age: p = this.settings.max_age,
                        ui_locales: _ = this.settings.ui_locales,
                        acr_values: w = this.settings.acr_values,
                        resource: m = this.settings.resource,
                        response_mode: f = this.settings.response_mode,
                        extraQueryParams: S = this.settings.extraQueryParams,
                        extraTokenParams: y = this.settings.extraTokenParams,
                        dpopJkt: v,
                        omitScopeWhenRequesting: k = this.settings.omitScopeWhenRequesting
                    }) {
                        const b = this._logger.create("createSigninRequest");
                        if ("code" !== d) throw new Error("Only the Authorization Code flow (with PKCE) is supported");
                        const T = await this.metadataService.getAuthorizationEndpoint();
                        b.debug("Received authorization endpoint", T);
                        const I = await K.create({
                            url: T,
                            authority: this.settings.authority,
                            client_id: this.settings.client_id,
                            redirect_uri: h,
                            response_type: d,
                            scope: l,
                            state_data: e,
                            url_state: c,
                            prompt: u,
                            display: g,
                            max_age: p,
                            ui_locales: _,
                            id_token_hint: r,
                            login_hint: n,
                            acr_values: w,
                            dpopJkt: v,
                            resource: m,
                            request: t,
                            request_uri: s,
                            extraQueryParams: S,
                            extraTokenParams: y,
                            request_type: i,
                            response_mode: f,
                            client_secret: this.settings.client_secret,
                            skipUserInfo: o,
                            nonce: a,
                            disablePKCE: this.settings.disablePKCE,
                            omitScopeWhenRequesting: k
                        });
                        await this.clearStaleState();
                        const E = I.state;
                        return await this.settings.stateStore.set(E.id, E.toStorageString()), I
                    }
                    async readSigninResponseState(e, t = !1) {
                        const s = this._logger.create("readSigninResponseState"),
                            i = new z(R.readParams(e, this.settings.response_mode));
                        if (!i.state) throw s.throw(new Error("No state in response")), null;
                        const r = await this.settings.stateStore[t ? "remove" : "get"](i.state);
                        if (!r) throw s.throw(new Error("No matching state found in storage")), null;
                        return {
                            state: await L.fromStorageString(r),
                            response: i
                        }
                    }
                    async processSigninResponse(e, t) {
                        const s = this._logger.create("processSigninResponse"),
                            {
                                state: i,
                                response: r
                            } = await this.readSigninResponseState(e, !0);
                        if (s.debug("received state from storage; validating response"), this.settings.dpop && this.settings.dpop.store) {
                            const e = await this.getDpopProof(this.settings.dpop.store);
                            t = { ...t,
                                DPoP: e
                            }
                        }
                        try {
                            await this._validator.validateSigninResponse(r, i, t)
                        } catch (e) {
                            if (!(e instanceof A && this.settings.dpop)) throw e; {
                                const s = await this.getDpopProof(this.settings.dpop.store, e.nonce);
                                t.DPoP = s, await this._validator.validateSigninResponse(r, i, t)
                            }
                        }
                        return r
                    }
                    async getDpopProof(e, t) {
                        let s, i;
                        return (await e.getAllKeys()).includes(this.settings.client_id) ? (i = await e.get(this.settings.client_id), i.nonce !== t && t && (i.nonce = t, await e.set(this.settings.client_id, i))) : (s = await T.generateDPoPKeys(), i = new Y(s, t), await e.set(this.settings.client_id, i)), await T.generateDPoPProof({
                            url: await this.metadataService.getTokenEndpoint(!1),
                            httpMethod: "POST",
                            keyPair: i.keys,
                            nonce: i.nonce
                        })
                    }
                    async processResourceOwnerPasswordCredentials({
                        username: e,
                        password: t,
                        skipUserInfo: s = !1,
                        extraTokenParams: i = {}
                    }) {
                        const r = await this._tokenClient.exchangeCredentials({
                                username: e,
                                password: t,
                                ...i
                            }),
                            n = new z(new URLSearchParams);
                        return Object.assign(n, r), await this._validator.validateCredentialsResponse(n, s), n
                    }
                    async useRefreshToken({
                        state: e,
                        redirect_uri: t,
                        resource: s,
                        timeoutInSeconds: i,
                        extraHeaders: r,
                        extraTokenParams: n
                    }) {
                        var o;
                        const a = this._logger.create("useRefreshToken");
                        let c, d;
                        if (void 0 === this.settings.refreshTokenAllowedScope) c = e.scope;
                        else {
                            const t = this.settings.refreshTokenAllowedScope.split(" ");
                            c = ((null == (o = e.scope) ? void 0 : o.split(" ")) || []).filter((e => t.includes(e))).join(" ")
                        }
                        if (this.settings.dpop && this.settings.dpop.store) {
                            const e = await this.getDpopProof(this.settings.dpop.store);
                            r = { ...r,
                                DPoP: e
                            }
                        }
                        try {
                            d = await this._tokenClient.exchangeRefreshToken({
                                refresh_token: e.refresh_token,
                                scope: c,
                                redirect_uri: t,
                                resource: s,
                                timeoutInSeconds: i,
                                extraHeaders: r,
                                ...n
                            })
                        } catch (o) {
                            if (!(o instanceof A && this.settings.dpop)) throw o;
                            r.DPoP = await this.getDpopProof(this.settings.dpop.store, o.nonce), d = await this._tokenClient.exchangeRefreshToken({
                                refresh_token: e.refresh_token,
                                scope: c,
                                redirect_uri: t,
                                resource: s,
                                timeoutInSeconds: i,
                                extraHeaders: r,
                                ...n
                            })
                        }
                        const l = new z(new URLSearchParams);
                        return Object.assign(l, d), a.debug("validating response", l), await this._validator.validateRefreshResponse(l, { ...e,
                            scope: c
                        }), l
                    }
                    async createSignoutRequest({
                        state: e,
                        id_token_hint: t,
                        client_id: s,
                        request_type: i,
                        post_logout_redirect_uri: r = this.settings.post_logout_redirect_uri,
                        extraQueryParams: n = this.settings.extraQueryParams
                    } = {}) {
                        const o = this._logger.create("createSignoutRequest"),
                            a = await this.metadataService.getEndSessionEndpoint();
                        if (!a) throw o.throw(new Error("No end session endpoint")), null;
                        o.debug("Received end session endpoint", a), !s && r && !t && (s = this.settings.client_id);
                        const c = new B({
                            url: a,
                            id_token_hint: t,
                            client_id: s,
                            post_logout_redirect_uri: r,
                            state_data: e,
                            extraQueryParams: n,
                            request_type: i
                        });
                        await this.clearStaleState();
                        const d = c.state;
                        return d && (o.debug("Signout request has state to persist"), await this.settings.stateStore.set(d.id, d.toStorageString())), c
                    }
                    async readSignoutResponseState(e, t = !1) {
                        const s = this._logger.create("readSignoutResponseState"),
                            i = new V(R.readParams(e, this.settings.response_mode));
                        if (!i.state) {
                            if (s.debug("No state in response"), i.error) throw s.warn("Response was error:", i.error), new C(i);
                            return {
                                state: void 0,
                                response: i
                            }
                        }
                        const r = await this.settings.stateStore[t ? "remove" : "get"](i.state);
                        if (!r) throw s.throw(new Error("No matching state found in storage")), null;
                        return {
                            state: await $.fromStorageString(r),
                            response: i
                        }
                    }
                    async processSignoutResponse(e) {
                        const t = this._logger.create("processSignoutResponse"),
                            {
                                state: s,
                                response: i
                            } = await this.readSignoutResponseState(e, !0);
                        return s ? (t.debug("Received state from storage; validating response"), this._validator.validateSignoutResponse(i, s)) : t.debug("No state from storage; skipping response validation"), i
                    }
                    clearStaleState() {
                        return this._logger.create("clearStaleState"), $.clearStaleState(this.settings.stateStore, this.settings.staleStateAgeInSeconds)
                    }
                    async revokeToken(e, t) {
                        return this._logger.create("revokeToken"), await this._tokenClient.revoke({
                            token: e,
                            token_type_hint: t
                        })
                    }
                },
                ee = class {
                    constructor(e) {
                        this._userManager = e, this._logger = new y("SessionMonitor"), this._start = async e => {
                            const t = e.session_state;
                            if (!t) return;
                            const s = this._logger.create("_start");
                            if (e.profile ? (this._sub = e.profile.sub, s.debug("session_state", t, ", sub", this._sub)) : (this._sub = void 0, s.debug("session_state", t, ", anonymous user")), this._checkSessionIFrame) this._checkSessionIFrame.start(t);
                            else try {
                                const e = await this._userManager.metadataService.getCheckSessionIframe();
                                if (e) {
                                    s.debug("initializing check session iframe");
                                    const i = this._userManager.settings.client_id,
                                        r = this._userManager.settings.checkSessionIntervalInSeconds,
                                        n = this._userManager.settings.stopCheckSessionOnError,
                                        o = new O(this._callback, i, e, r, n);
                                    await o.load(), this._checkSessionIFrame = o, o.start(t)
                                } else s.warn("no check session iframe found in the metadata")
                            } catch (e) {
                                s.error("Error from getCheckSessionIframe:", e instanceof Error ? e.message : e)
                            }
                        }, this._stop = () => {
                            const e = this._logger.create("_stop");
                            if (this._sub = void 0, this._checkSessionIFrame && this._checkSessionIFrame.stop(), this._userManager.settings.monitorAnonymousSession) {
                                const t = setInterval((async () => {
                                    clearInterval(t);
                                    try {
                                        const e = await this._userManager.querySessionStatus();
                                        if (e) {
                                            const t = {
                                                session_state: e.session_state,
                                                profile: e.sub ? {
                                                    sub: e.sub
                                                } : null
                                            };
                                            this._start(t)
                                        }
                                    } catch (t) {
                                        e.error("error from querySessionStatus", t instanceof Error ? t.message : t)
                                    }
                                }), 1e3)
                            }
                        }, this._callback = async () => {
                            const e = this._logger.create("_callback");
                            try {
                                const t = await this._userManager.querySessionStatus();
                                let s = !0;
                                t && this._checkSessionIFrame ? t.sub === this._sub ? (s = !1, this._checkSessionIFrame.start(t.session_state), e.debug("same sub still logged in at OP, session state has changed, restarting check session iframe; session_state", t.session_state), await this._userManager.events._raiseUserSessionChanged()) : e.debug("different subject signed into OP", t.sub) : e.debug("subject no longer signed into OP"), s ? this._sub ? await this._userManager.events._raiseUserSignedOut() : await this._userManager.events._raiseUserSignedIn() : e.debug("no change in session detected, no event to raise")
                            } catch (t) {
                                this._sub && (e.debug("Error calling queryCurrentSigninSession; raising signed out event", t), await this._userManager.events._raiseUserSignedOut())
                            }
                        }, e || this._logger.throw(new Error("No user manager passed")), this._userManager.events.addUserLoaded(this._start), this._userManager.events.addUserUnloaded(this._stop), this._init().catch((e => {
                            this._logger.error(e)
                        }))
                    }
                    async _init() {
                        this._logger.create("_init");
                        const e = await this._userManager.getUser();
                        if (e) this._start(e);
                        else if (this._userManager.settings.monitorAnonymousSession) {
                            const e = await this._userManager.querySessionStatus();
                            if (e) {
                                const t = {
                                    session_state: e.session_state,
                                    profile: e.sub ? {
                                        sub: e.sub
                                    } : null
                                };
                                this._start(t)
                            }
                        }
                    }
                },
                te = class e {
                    constructor(e) {
                        var t;
                        this.id_token = e.id_token, this.session_state = null != (t = e.session_state) ? t : null, this.access_token = e.access_token, this.refresh_token = e.refresh_token, this.token_type = e.token_type, this.scope = e.scope, this.profile = e.profile, this.expires_at = e.expires_at, this.state = e.userState, this.url_state = e.url_state
                    }
                    get expires_in() {
                        if (void 0 !== this.expires_at) return this.expires_at - x.getEpochTime()
                    }
                    set expires_in(e) {
                        void 0 !== e && (this.expires_at = Math.floor(e) + x.getEpochTime())
                    }
                    get expired() {
                        const e = this.expires_in;
                        if (void 0 !== e) return e <= 0
                    }
                    get scopes() {
                        var e, t;
                        return null != (t = null == (e = this.scope) ? void 0 : e.split(" ")) ? t : []
                    }
                    toStorageString() {
                        return new y("User").create("toStorageString"), JSON.stringify({
                            id_token: this.id_token,
                            session_state: this.session_state,
                            access_token: this.access_token,
                            refresh_token: this.refresh_token,
                            token_type: this.token_type,
                            scope: this.scope,
                            profile: this.profile,
                            expires_at: this.expires_at
                        })
                    }
                    static fromStorageString(t) {
                        return y.createStatic("User", "fromStorageString"), new e(JSON.parse(t))
                    }
                },
                se = "oidc-client",
                ie = class {
                    constructor() {
                        this._abort = new I("Window navigation aborted"), this._disposeHandlers = new Set, this._window = null
                    }
                    async navigate(e) {
                        const t = this._logger.create("navigate");
                        if (!this._window) throw new Error("Attempted to navigate on a disposed window");
                        t.debug("setting URL in window"), this._window.location.replace(e.url);
                        const {
                            url: s,
                            keepOpen: i
                        } = await new Promise(((s, i) => {
                            const r = r => {
                                var n;
                                const o = r.data,
                                    a = null != (n = e.scriptOrigin) ? n : window.location.origin;
                                if (r.origin === a && (null == o ? void 0 : o.source) === se) {
                                    try {
                                        const s = R.readParams(o.url, e.response_mode).get("state");
                                        if (s || t.warn("no state found in response url"), r.source !== this._window && s !== e.state) return
                                    } catch {
                                        this._dispose(), i(new Error("Invalid response from window"))
                                    }
                                    s(o)
                                }
                            };
                            window.addEventListener("message", r, !1), this._disposeHandlers.add((() => window.removeEventListener("message", r, !1))), this._disposeHandlers.add(this._abort.addHandler((e => {
                                this._dispose(), i(e)
                            })))
                        }));
                        return t.debug("got response from window"), this._dispose(), i || this.close(), {
                            url: s
                        }
                    }
                    _dispose() {
                        this._logger.create("_dispose");
                        for (const e of this._disposeHandlers) e();
                        this._disposeHandlers.clear()
                    }
                    static _notifyParent(e, t, s = !1, i = window.location.origin) {
                        e.postMessage({
                            source: se,
                            url: t,
                            keepOpen: s
                        }, i)
                    }
                },
                re = {
                    location: !1,
                    toolbar: !1,
                    height: 640,
                    closePopupWindowAfterInSeconds: -1
                },
                ne = "_blank",
                oe = 60,
                ae = 2,
                ce = class extends M {
                    constructor(e) {
                        const {
                            popup_redirect_uri: t = e.redirect_uri,
                            popup_post_logout_redirect_uri: s = e.post_logout_redirect_uri,
                            popupWindowFeatures: i = re,
                            popupWindowTarget: r = ne,
                            redirectMethod: n = "assign",
                            redirectTarget: o = "self",
                            iframeNotifyParentOrigin: a = e.iframeNotifyParentOrigin,
                            iframeScriptOrigin: c = e.iframeScriptOrigin,
                            requestTimeoutInSeconds: d,
                            silent_redirect_uri: l = e.redirect_uri,
                            silentRequestTimeoutInSeconds: h,
                            automaticSilentRenew: u = !0,
                            validateSubOnSilentRenew: g = !0,
                            includeIdTokenInSilentRenew: p = !1,
                            monitorSession: _ = !1,
                            monitorAnonymousSession: w = !1,
                            checkSessionIntervalInSeconds: m = ae,
                            query_status_response_type: f = "code",
                            stopCheckSessionOnError: S = !0,
                            revokeTokenTypes: y = ["access_token", "refresh_token"],
                            revokeTokensOnSignout: v = !1,
                            includeIdTokenInSilentSignout: k = !1,
                            accessTokenExpiringNotificationTimeInSeconds: b = oe,
                            userStore: T
                        } = e;
                        if (super(e), this.popup_redirect_uri = t, this.popup_post_logout_redirect_uri = s, this.popupWindowFeatures = i, this.popupWindowTarget = r, this.redirectMethod = n, this.redirectTarget = o, this.iframeNotifyParentOrigin = a, this.iframeScriptOrigin = c, this.silent_redirect_uri = l, this.silentRequestTimeoutInSeconds = h || d || 10, this.automaticSilentRenew = u, this.validateSubOnSilentRenew = g, this.includeIdTokenInSilentRenew = p, this.monitorSession = _, this.monitorAnonymousSession = w, this.checkSessionIntervalInSeconds = m, this.stopCheckSessionOnError = S, this.query_status_response_type = f, this.revokeTokenTypes = y, this.revokeTokensOnSignout = v, this.includeIdTokenInSilentSignout = k, this.accessTokenExpiringNotificationTimeInSeconds = b, T) this.userStore = T;
                        else {
                            const e = typeof window < "u" ? window.sessionStorage : new q;
                            this.userStore = new j({
                                store: e
                            })
                        }
                    }
                },
                de = class e extends ie {
                    constructor({
                        silentRequestTimeoutInSeconds: t = 10
                    }) {
                        super(), this._logger = new y("IFrameWindow"), this._timeoutInSeconds = t, this._frame = e.createHiddenIframe(), this._window = this._frame.contentWindow
                    }
                    static createHiddenIframe() {
                        const e = window.document.createElement("iframe");
                        return e.style.visibility = "hidden", e.style.position = "fixed", e.style.left = "-1000px", e.style.top = "0", e.width = "0", e.height = "0", window.document.body.appendChild(e), e
                    }
                    async navigate(e) {
                        this._logger.debug("navigate: Using timeout of:", this._timeoutInSeconds);
                        const t = setTimeout((() => {
                            this._abort.raise(new P("IFrame timed out without a response"))
                        }), 1e3 * this._timeoutInSeconds);
                        return this._disposeHandlers.add((() => clearTimeout(t))), await super.navigate(e)
                    }
                    close() {
                        var e;
                        this._frame && (this._frame.parentNode && (this._frame.addEventListener("load", (e => {
                            var t;
                            const s = e.target;
                            null == (t = s.parentNode) || t.removeChild(s), this._abort.raise(new Error("IFrame removed from DOM"))
                        }), !0), null == (e = this._frame.contentWindow) || e.location.replace("about:blank")), this._frame = null), this._window = null
                    }
                    static notifyParent(e, t) {
                        return super._notifyParent(window.parent, e, !1, t)
                    }
                },
                le = class {
                    constructor(e) {
                        this._settings = e, this._logger = new y("IFrameNavigator")
                    }
                    async prepare({
                        silentRequestTimeoutInSeconds: e = this._settings.silentRequestTimeoutInSeconds
                    }) {
                        return new de({
                            silentRequestTimeoutInSeconds: e
                        })
                    }
                    async callback(e) {
                        this._logger.create("callback"), de.notifyParent(e, this._settings.iframeNotifyParentOrigin)
                    }
                },
                he = class extends ie {
                    constructor({
                        popupWindowTarget: e = ne,
                        popupWindowFeatures: t = {},
                        popupSignal: s
                    }) {
                        super(), this._logger = new y("PopupWindow");
                        const i = E.center({ ...re,
                            ...t
                        });
                        this._window = window.open(void 0, e, E.serialize(i)), s && s.addEventListener("abort", (() => {
                            var e;
                            this._abort.raise(new Error(null != (e = s.reason) ? e : "Popup aborted"))
                        })), t.closePopupWindowAfterInSeconds && t.closePopupWindowAfterInSeconds > 0 && setTimeout((() => {
                            this._window && "boolean" == typeof this._window.closed && !this._window.closed ? this.close() : this._abort.raise(new Error("Popup blocked by user"))
                        }), 1e3 * t.closePopupWindowAfterInSeconds)
                    }
                    async navigate(e) {
                        var t;
                        null == (t = this._window) || t.focus();
                        const s = setInterval((() => {
                            (!this._window || this._window.closed) && this._abort.raise(new Error("Popup closed by user"))
                        }), 500);
                        return this._disposeHandlers.add((() => clearInterval(s))), await super.navigate(e)
                    }
                    close() {
                        this._window && (this._window.closed || (this._window.close(), this._abort.raise(new Error("Popup closed")))), this._window = null
                    }
                    static notifyOpener(e, t) {
                        if (!window.opener) throw new Error("No window.opener. Can't complete notification.");
                        return super._notifyParent(window.opener, e, t)
                    }
                },
                ue = class {
                    constructor(e) {
                        this._settings = e, this._logger = new y("PopupNavigator")
                    }
                    async prepare({
                        popupWindowFeatures: e = this._settings.popupWindowFeatures,
                        popupWindowTarget: t = this._settings.popupWindowTarget,
                        popupSignal: s
                    }) {
                        return new he({
                            popupWindowFeatures: e,
                            popupWindowTarget: t,
                            popupSignal: s
                        })
                    }
                    async callback(e, {
                        keepOpen: t = !1
                    }) {
                        this._logger.create("callback"), he.notifyOpener(e, t)
                    }
                },
                ge = class {
                    constructor(e) {
                        this._settings = e, this._logger = new y("RedirectNavigator")
                    }
                    async prepare({
                        redirectMethod: e = this._settings.redirectMethod,
                        redirectTarget: t = this._settings.redirectTarget
                    }) {
                        var s;
                        this._logger.create("prepare");
                        let i = window.self;
                        "top" === t && (i = null != (s = window.top) ? s : window.self);
                        const r = i.location[e].bind(i.location);
                        let n;
                        return {
                            navigate: async e => {
                                this._logger.create("navigate");
                                const t = new Promise(((e, t) => {
                                    n = t
                                }));
                                return r(e.url), await t
                            },
                            close: () => {
                                this._logger.create("close"), null == n || n(new Error("Redirect aborted")), i.stop()
                            }
                        }
                    }
                    async callback() {}
                },
                pe = class extends U {
                    constructor(e) {
                        super({
                            expiringNotificationTimeInSeconds: e.accessTokenExpiringNotificationTimeInSeconds
                        }), this._logger = new y("UserManagerEvents"), this._userLoaded = new I("User loaded"), this._userUnloaded = new I("User unloaded"), this._silentRenewError = new I("Silent renew error"), this._userSignedIn = new I("User signed in"), this._userSignedOut = new I("User signed out"), this._userSessionChanged = new I("User session changed")
                    }
                    async load(e, t = !0) {
                        super.load(e), t && await this._userLoaded.raise(e)
                    }
                    async unload() {
                        super.unload(), await this._userUnloaded.raise()
                    }
                    addUserLoaded(e) {
                        return this._userLoaded.addHandler(e)
                    }
                    removeUserLoaded(e) {
                        return this._userLoaded.removeHandler(e)
                    }
                    addUserUnloaded(e) {
                        return this._userUnloaded.addHandler(e)
                    }
                    removeUserUnloaded(e) {
                        return this._userUnloaded.removeHandler(e)
                    }
                    addSilentRenewError(e) {
                        return this._silentRenewError.addHandler(e)
                    }
                    removeSilentRenewError(e) {
                        return this._silentRenewError.removeHandler(e)
                    }
                    async _raiseSilentRenewError(e) {
                        await this._silentRenewError.raise(e)
                    }
                    addUserSignedIn(e) {
                        return this._userSignedIn.addHandler(e)
                    }
                    removeUserSignedIn(e) {
                        this._userSignedIn.removeHandler(e)
                    }
                    async _raiseUserSignedIn() {
                        await this._userSignedIn.raise()
                    }
                    addUserSignedOut(e) {
                        return this._userSignedOut.addHandler(e)
                    }
                    removeUserSignedOut(e) {
                        this._userSignedOut.removeHandler(e)
                    }
                    async _raiseUserSignedOut() {
                        await this._userSignedOut.raise()
                    }
                    addUserSessionChanged(e) {
                        return this._userSessionChanged.addHandler(e)
                    }
                    removeUserSessionChanged(e) {
                        this._userSessionChanged.removeHandler(e)
                    }
                    async _raiseUserSessionChanged() {
                        await this._userSessionChanged.raise()
                    }
                },
                _e = class {
                    constructor(e) {
                        this._userManager = e, this._logger = new y("SilentRenewService"), this._isStarted = !1, this._retryTimer = new x("Retry Silent Renew"), this._tokenExpiring = async () => {
                            const e = this._logger.create("_tokenExpiring");
                            try {
                                await this._userManager.signinSilent(), e.debug("silent token renewal successful")
                            } catch (t) {
                                if (t instanceof P) return e.warn("ErrorTimeout from signinSilent:", t, "retry in 5s"), void this._retryTimer.init(5);
                                e.error("Error from signinSilent:", t), await this._userManager.events._raiseSilentRenewError(t)
                            }
                        }
                    }
                    async start() {
                        const e = this._logger.create("start");
                        if (!this._isStarted) {
                            this._isStarted = !0, this._userManager.events.addAccessTokenExpiring(this._tokenExpiring), this._retryTimer.addHandler(this._tokenExpiring);
                            try {
                                await this._userManager.getUser()
                            } catch (t) {
                                e.error("getUser error", t)
                            }
                        }
                    }
                    stop() {
                        this._isStarted && (this._retryTimer.cancel(), this._retryTimer.removeHandler(this._tokenExpiring), this._userManager.events.removeAccessTokenExpiring(this._tokenExpiring), this._isStarted = !1)
                    }
                },
                we = class {
                    constructor(e) {
                        this.refresh_token = e.refresh_token, this.id_token = e.id_token, this.session_state = e.session_state, this.scope = e.scope, this.profile = e.profile, this.data = e.state
                    }
                },
                me = class {
                    constructor(e, t, s, i) {
                        this._logger = new y("UserManager"), this.settings = new ce(e), this._client = new X(e), this._redirectNavigator = t ? ? new ge(this.settings), this._popupNavigator = s ? ? new ue(this.settings), this._iframeNavigator = i ? ? new le(this.settings), this._events = new pe(this.settings), this._silentRenewService = new _e(this), this.settings.automaticSilentRenew && this.startSilentRenew(), this._sessionMonitor = null, this.settings.monitorSession && (this._sessionMonitor = new ee(this))
                    }
                    get events() {
                        return this._events
                    }
                    get metadataService() {
                        return this._client.metadataService
                    }
                    async getUser() {
                        const e = this._logger.create("getUser"),
                            t = await this._loadUser();
                        return t ? (e.info("user loaded"), await this._events.load(t, !1), t) : (e.info("user not found in storage"), null)
                    }
                    async removeUser() {
                        const e = this._logger.create("removeUser");
                        await this.storeUser(null), e.info("user removed from storage"), await this._events.unload()
                    }
                    async signinRedirect(e = {}) {
                        var t;
                        this._logger.create("signinRedirect");
                        const {
                            redirectMethod: s,
                            ...i
                        } = e;
                        let r;
                        null != (t = this.settings.dpop) && t.bind_authorization_code && (r = await this.generateDPoPJkt(this.settings.dpop));
                        const n = await this._redirectNavigator.prepare({
                            redirectMethod: s
                        });
                        await this._signinStart({
                            request_type: "si:r",
                            dpopJkt: r,
                            ...i
                        }, n)
                    }
                    async signinRedirectCallback(e = window.location.href) {
                        const t = this._logger.create("signinRedirectCallback"),
                            s = await this._signinEnd(e);
                        return s.profile && s.profile.sub ? t.info("success, signed in subject", s.profile.sub) : t.info("no subject"), s
                    }
                    async signinResourceOwnerCredentials({
                        username: e,
                        password: t,
                        skipUserInfo: s = !1
                    }) {
                        const i = this._logger.create("signinResourceOwnerCredential"),
                            r = await this._client.processResourceOwnerPasswordCredentials({
                                username: e,
                                password: t,
                                skipUserInfo: s,
                                extraTokenParams: this.settings.extraTokenParams
                            });
                        i.debug("got signin response");
                        const n = await this._buildUser(r);
                        return n.profile && n.profile.sub ? i.info("success, signed in subject", n.profile.sub) : i.info("no subject"), n
                    }
                    async signinPopup(e = {}) {
                        var t;
                        const s = this._logger.create("signinPopup");
                        let i;
                        null != (t = this.settings.dpop) && t.bind_authorization_code && (i = await this.generateDPoPJkt(this.settings.dpop));
                        const {
                            popupWindowFeatures: r,
                            popupWindowTarget: n,
                            popupSignal: o,
                            ...a
                        } = e, c = this.settings.popup_redirect_uri;
                        c || s.throw(new Error("No popup_redirect_uri configured"));
                        const d = await this._popupNavigator.prepare({
                                popupWindowFeatures: r,
                                popupWindowTarget: n,
                                popupSignal: o
                            }),
                            l = await this._signin({
                                request_type: "si:p",
                                redirect_uri: c,
                                display: "popup",
                                dpopJkt: i,
                                ...a
                            }, d);
                        return l && (l.profile && l.profile.sub ? s.info("success, signed in subject", l.profile.sub) : s.info("no subject")), l
                    }
                    async signinPopupCallback(e = window.location.href, t = !1) {
                        const s = this._logger.create("signinPopupCallback");
                        await this._popupNavigator.callback(e, {
                            keepOpen: t
                        }), s.info("success")
                    }
                    async signinSilent(e = {}) {
                        var t, s;
                        const i = this._logger.create("signinSilent"),
                            {
                                silentRequestTimeoutInSeconds: r,
                                ...n
                            } = e;
                        let o, a = await this._loadUser();
                        if (null != a && a.refresh_token) {
                            i.debug("using refresh token");
                            const e = new we(a);
                            return await this._useRefreshToken({
                                state: e,
                                redirect_uri: n.redirect_uri,
                                resource: n.resource,
                                extraTokenParams: n.extraTokenParams,
                                timeoutInSeconds: r
                            })
                        }
                        null != (t = this.settings.dpop) && t.bind_authorization_code && (o = await this.generateDPoPJkt(this.settings.dpop));
                        const c = this.settings.silent_redirect_uri;
                        let d;
                        c || i.throw(new Error("No silent_redirect_uri configured")), a && this.settings.validateSubOnSilentRenew && (i.debug("subject prior to silent renew:", a.profile.sub), d = a.profile.sub);
                        const l = await this._iframeNavigator.prepare({
                            silentRequestTimeoutInSeconds: r
                        });
                        return a = await this._signin({
                            request_type: "si:s",
                            redirect_uri: c,
                            prompt: "none",
                            id_token_hint: this.settings.includeIdTokenInSilentRenew ? null == a ? void 0 : a.id_token : void 0,
                            dpopJkt: o,
                            ...n
                        }, l, d), a && (null != (s = a.profile) && s.sub ? i.info("success, signed in subject", a.profile.sub) : i.info("no subject")), a
                    }
                    async _useRefreshToken(e) {
                        const t = await this._client.useRefreshToken({
                                timeoutInSeconds: this.settings.silentRequestTimeoutInSeconds,
                                ...e
                            }),
                            s = new te({ ...e.state,
                                ...t
                            });
                        return await this.storeUser(s), await this._events.load(s), s
                    }
                    async signinSilentCallback(e = window.location.href) {
                        const t = this._logger.create("signinSilentCallback");
                        await this._iframeNavigator.callback(e), t.info("success")
                    }
                    async signinCallback(e = window.location.href) {
                        const {
                            state: t
                        } = await this._client.readSigninResponseState(e);
                        switch (t.request_type) {
                            case "si:r":
                                return await this.signinRedirectCallback(e);
                            case "si:p":
                                await this.signinPopupCallback(e);
                                break;
                            case "si:s":
                                await this.signinSilentCallback(e);
                                break;
                            default:
                                throw new Error("invalid response_type in state")
                        }
                    }
                    async signoutCallback(e = window.location.href, t = !1) {
                        const {
                            state: s
                        } = await this._client.readSignoutResponseState(e);
                        if (s) switch (s.request_type) {
                            case "so:r":
                                return await this.signoutRedirectCallback(e);
                            case "so:p":
                                await this.signoutPopupCallback(e, t);
                                break;
                            case "so:s":
                                await this.signoutSilentCallback(e);
                                break;
                            default:
                                throw new Error("invalid response_type in state")
                        }
                    }
                    async querySessionStatus(e = {}) {
                        const t = this._logger.create("querySessionStatus"),
                            {
                                silentRequestTimeoutInSeconds: s,
                                ...i
                            } = e,
                            r = this.settings.silent_redirect_uri;
                        r || t.throw(new Error("No silent_redirect_uri configured"));
                        const n = await this._loadUser(),
                            o = await this._iframeNavigator.prepare({
                                silentRequestTimeoutInSeconds: s
                            }),
                            a = await this._signinStart({
                                request_type: "si:s",
                                redirect_uri: r,
                                prompt: "none",
                                id_token_hint: this.settings.includeIdTokenInSilentRenew ? null == n ? void 0 : n.id_token : void 0,
                                response_type: this.settings.query_status_response_type,
                                scope: "openid",
                                skipUserInfo: !0,
                                ...i
                            }, o);
                        try {
                            const e = {},
                                s = await this._client.processSigninResponse(a.url, e);
                            return t.debug("got signin response"), s.session_state && s.profile.sub ? (t.info("success for subject", s.profile.sub), {
                                session_state: s.session_state,
                                sub: s.profile.sub
                            }) : (t.info("success, user not authenticated"), null)
                        } catch (e) {
                            if (this.settings.monitorAnonymousSession && e instanceof C) switch (e.error) {
                                case "login_required":
                                case "consent_required":
                                case "interaction_required":
                                case "account_selection_required":
                                    return t.info("success for anonymous user"), {
                                        session_state: e.session_state
                                    }
                            }
                            throw e
                        }
                    }
                    async _signin(e, t, s) {
                        const i = await this._signinStart(e, t);
                        return await this._signinEnd(i.url, s)
                    }
                    async _signinStart(e, t) {
                        const s = this._logger.create("_signinStart");
                        try {
                            const i = await this._client.createSigninRequest(e);
                            return s.debug("got signin request"), await t.navigate({
                                url: i.url,
                                state: i.state.id,
                                response_mode: i.state.response_mode,
                                scriptOrigin: this.settings.iframeScriptOrigin
                            })
                        } catch (e) {
                            throw s.debug("error after preparing navigator, closing navigator window"), t.close(), e
                        }
                    }
                    async _signinEnd(e, t) {
                        const s = this._logger.create("_signinEnd"),
                            i = await this._client.processSigninResponse(e, {});
                        return s.debug("got signin response"), await this._buildUser(i, t)
                    }
                    async _buildUser(e, t) {
                        const s = this._logger.create("_buildUser"),
                            i = new te(e);
                        if (t) {
                            if (t !== i.profile.sub) throw s.debug("current user does not match user returned from signin. sub from signin:", i.profile.sub), new C({ ...e,
                                error: "login_required"
                            });
                            s.debug("current user matches user returned from signin")
                        }
                        return await this.storeUser(i), s.debug("user stored"), await this._events.load(i), i
                    }
                    async signoutRedirect(e = {}) {
                        const t = this._logger.create("signoutRedirect"),
                            {
                                redirectMethod: s,
                                ...i
                            } = e,
                            r = await this._redirectNavigator.prepare({
                                redirectMethod: s
                            });
                        await this._signoutStart({
                            request_type: "so:r",
                            post_logout_redirect_uri: this.settings.post_logout_redirect_uri,
                            ...i
                        }, r), t.info("success")
                    }
                    async signoutRedirectCallback(e = window.location.href) {
                        const t = this._logger.create("signoutRedirectCallback"),
                            s = await this._signoutEnd(e);
                        return t.info("success"), s
                    }
                    async signoutPopup(e = {}) {
                        const t = this._logger.create("signoutPopup"),
                            {
                                popupWindowFeatures: s,
                                popupWindowTarget: i,
                                popupSignal: r,
                                ...n
                            } = e,
                            o = this.settings.popup_post_logout_redirect_uri,
                            a = await this._popupNavigator.prepare({
                                popupWindowFeatures: s,
                                popupWindowTarget: i,
                                popupSignal: r
                            });
                        await this._signout({
                            request_type: "so:p",
                            post_logout_redirect_uri: o,
                            state: null == o ? void 0 : {},
                            ...n
                        }, a), t.info("success")
                    }
                    async signoutPopupCallback(e = window.location.href, t = !1) {
                        const s = this._logger.create("signoutPopupCallback");
                        await this._popupNavigator.callback(e, {
                            keepOpen: t
                        }), s.info("success")
                    }
                    async _signout(e, t) {
                        const s = await this._signoutStart(e, t);
                        return await this._signoutEnd(s.url)
                    }
                    async _signoutStart(e = {}, t) {
                        var s;
                        const i = this._logger.create("_signoutStart");
                        try {
                            const r = await this._loadUser();
                            i.debug("loaded current user from storage"), this.settings.revokeTokensOnSignout && await this._revokeInternal(r);
                            const n = e.id_token_hint || r && r.id_token;
                            n && (i.debug("setting id_token_hint in signout request"), e.id_token_hint = n), await this.removeUser(), i.debug("user removed, creating signout request");
                            const o = await this._client.createSignoutRequest(e);
                            return i.debug("got signout request"), await t.navigate({
                                url: o.url,
                                state: null == (s = o.state) ? void 0 : s.id,
                                scriptOrigin: this.settings.iframeScriptOrigin
                            })
                        } catch (e) {
                            throw i.debug("error after preparing navigator, closing navigator window"), t.close(), e
                        }
                    }
                    async _signoutEnd(e) {
                        const t = this._logger.create("_signoutEnd"),
                            s = await this._client.processSignoutResponse(e);
                        return t.debug("got signout response"), s
                    }
                    async signoutSilent(e = {}) {
                        var t;
                        const s = this._logger.create("signoutSilent"),
                            {
                                silentRequestTimeoutInSeconds: i,
                                ...r
                            } = e,
                            n = this.settings.includeIdTokenInSilentSignout ? null == (t = await this._loadUser()) ? void 0 : t.id_token : void 0,
                            o = this.settings.popup_post_logout_redirect_uri,
                            a = await this._iframeNavigator.prepare({
                                silentRequestTimeoutInSeconds: i
                            });
                        await this._signout({
                            request_type: "so:s",
                            post_logout_redirect_uri: o,
                            id_token_hint: n,
                            ...r
                        }, a), s.info("success")
                    }
                    async signoutSilentCallback(e = window.location.href) {
                        const t = this._logger.create("signoutSilentCallback");
                        await this._iframeNavigator.callback(e), t.info("success")
                    }
                    async revokeTokens(e) {
                        const t = await this._loadUser();
                        await this._revokeInternal(t, e)
                    }
                    async _revokeInternal(e, t = this.settings.revokeTokenTypes) {
                        const s = this._logger.create("_revokeInternal");
                        if (!e) return;
                        const i = t.filter((t => "string" == typeof e[t]));
                        if (i.length) {
                            for (const t of i) await this._client.revokeToken(e[t], t), s.info(`${t} revoked successfully`), "access_token" !== t && (e[t] = null);
                            await this.storeUser(e), s.debug("user stored"), await this._events.load(e)
                        } else s.debug("no need to revoke due to no token(s)")
                    }
                    startSilentRenew() {
                        this._logger.create("startSilentRenew"), this._silentRenewService.start()
                    }
                    stopSilentRenew() {
                        this._silentRenewService.stop()
                    }
                    get _userStoreKey() {
                        return `user:${this.settings.authority}:${this.settings.client_id}`
                    }
                    async _loadUser() {
                        const e = this._logger.create("_loadUser"),
                            t = await this.settings.userStore.get(this._userStoreKey);
                        return t ? (e.debug("user storageString loaded"), te.fromStorageString(t)) : (e.debug("no user storageString"), null)
                    }
                    async storeUser(e) {
                        const t = this._logger.create("storeUser");
                        if (e) {
                            t.debug("storing user");
                            const s = e.toStorageString();
                            await this.settings.userStore.set(this._userStoreKey, s)
                        } else this._logger.debug("removing user"), await this.settings.userStore.remove(this._userStoreKey), this.settings.dpop && await this.settings.dpop.store.remove(this.settings.client_id)
                    }
                    async clearStaleState() {
                        await this._client.clearStaleState()
                    }
                    async dpopProof(e, t, s, i) {
                        var r, n;
                        const o = await (null == (n = null == (r = this.settings.dpop) ? void 0 : r.store) ? void 0 : n.get(this.settings.client_id));
                        if (o) return await T.generateDPoPProof({
                            url: e,
                            accessToken: null == t ? void 0 : t.access_token,
                            httpMethod: s,
                            keyPair: o.keys,
                            nonce: i
                        })
                    }
                    async generateDPoPJkt(e) {
                        let t = await e.store.get(this.settings.client_id);
                        if (!t) {
                            const s = await T.generateDPoPKeys();
                            t = new Y(s), await e.store.set(this.settings.client_id, t)
                        }
                        return await T.generateDPoPJkt(t.keys)
                    }
                };
            const fe = async e => {
                    const {
                        redirectCallbackUri: t,
                        postLoginRedirectUri: s,
                        postLogoutRedirectUri: i,
                        state: r,
                        login_code: n
                    } = e;
                    localStorage.setItem("config.post_login_redirect_uri", s || window.location.origin), localStorage.setItem("config.post_logout_redirect_uri", i || window.location.origin);
                    try {
                        const e = await Se({
                            redirectCallbackUri: t,
                            postLogoutRedirectUri: i
                        });
                        return await e.signinRedirect({
                            extraQueryParams: {
                                brand: "deriv",
                                ...n ? {
                                    login_code: n
                                } : {}
                            },
                            state: r
                        }), {
                            userManager: e
                        }
                    } catch (e) {
                        throw console.error("Authentication failed:", e), e instanceof Error ? new u(h.AuthenticationRequestFailed, e.message) : new u(h.AuthenticationRequestFailed, "unable to request OIDC authentication")
                    }
                },
                Se = async e => {
                    const {
                        redirectCallbackUri: t,
                        redirectSilentCallbackUri: s,
                        postLogoutRedirectUri: i
                    } = e, {
                        appId: r
                    } = o(), {
                        postLogoutRedirectUri: n
                    } = {
                        postLoginRedirectUri: localStorage.getItem("config.post_login_redirect_uri") || window.location.origin,
                        postLogoutRedirectUri: localStorage.getItem("config.post_logout_redirect_uri") || window.location.origin
                    }, a = t || `${window.location.origin}/callback`, c = i || n || window.location.origin;
                    try {
                        const e = await (async () => {
                            const e = localStorage.getItem("config.oidc_endpoints");
                            if (e) {
                                const {
                                    serverUrl: t
                                } = o();
                                if (JSON.parse(e).issuer.includes(t || "")) return JSON.parse(e)
                            }
                            const {
                                serverUrl: t
                            } = o(), s = `https://${t}/.well-known/openid-configuration`;
                            try {
                                const e = await (await fetch(s)).json();
                                return localStorage.setItem("config.oidc_endpoints", JSON.stringify(e)), e
                            } catch (e) {
                                throw console.error("Failed to fetch OIDC configuration:", e), e instanceof Error ? new u(h.FailedToFetchOIDCConfiguration, e.message) : new u(h.FailedToFetchOIDCConfiguration, "unable to fetch OIDC configuration")
                            }
                        })();
                        return new me({
                            authority: e.issuer,
                            client_id: r,
                            redirect_uri: a,
                            silent_redirect_uri: s,
                            response_type: "code",
                            scope: "openid",
                            stateStore: new j({
                                store: window.localStorage
                            }),
                            post_logout_redirect_uri: c,
                            automaticSilentRenew: !1
                        })
                    } catch (e) {
                        throw console.error("unable to create user manager for OIDC: ", e), e instanceof Error ? new u(h.UserManagerCreationFailed, e.message) : new u(h.UserManagerCreationFailed, "unable to create user manager for OIDC")
                    }
                },
                ye = async e => {
                    const t = localStorage.getItem("config.oidc_endpoints") || "{}";
                    let s = (() => {
                        const {
                            appId: e,
                            serverUrl: t
                        } = o();
                        return e && t ? `https://${t}/oauth2/sessions/logout` : "https://oauth.deriv.com/oauth2/sessions/logout"
                    })() || JSON.parse(t).end_session_endpoint;
                    const i = await (await Se({
                        redirectCallbackUri: e.redirectCallbackUri
                    })).getUser();
                    null != i && i.id_token && (s += `?id_token_hint=${i.id_token}`);
                    const r = () => {
                            const t = document.getElementById("logout-iframe");
                            t && t.remove(), ve({
                                redirectCallbackUri: e.redirectCallbackUri,
                                postLogoutRedirectUri: e.postLogoutRedirectUri
                            })
                        },
                        n = t => {
                            if ("logout_complete" === t.data) {
                                const t = ["deriv.com", "deriv.dev", "binary.sx", "pages.dev", "localhost", "deriv.be", "deriv.me"],
                                    s = window.location.hostname.split(".").slice(-2).join(".");
                                t.includes(s) && c.set("logged_state", "false", {
                                    expires: 30,
                                    path: "/",
                                    domain: s,
                                    secure: !0
                                }), e.WSLogoutAndRedirect(), r(), window.removeEventListener("message", n)
                            }
                        };
                    window.addEventListener("message", n);
                    let a = document.getElementById("logout-iframe");
                    a || (a = document.createElement("iframe"), a.id = "logout-iframe", a.style.display = "none", document.body.appendChild(a)), a.src = s, a.onerror = e => {
                        console.error("There has been a problem with the logout: ", e), r()
                    }
                },
                ve = async e => {
                    try {
                        const t = await Se(e);
                        await t.removeUser(), await t.clearStaleState()
                    } catch (e) {
                        throw e instanceof Error ? new u(h.FailedToRemoveSession, e.message) : new u(h.FailedToRemoveSession, "unable to remove OIDC session")
                    }
                };
            var ke, be = {
                    exports: {}
                },
                Te = {};
            be.exports = function() {
                if (ke) return Te;
                ke = 1;
                var e = i,
                    t = Symbol.for("react.element"),
                    s = Symbol.for("react.fragment"),
                    r = Object.prototype.hasOwnProperty,
                    n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    o = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function a(e, s, i) {
                    var a, c = {},
                        d = null,
                        l = null;
                    for (a in void 0 !== i && (d = "" + i), void 0 !== s.key && (d = "" + s.key), void 0 !== s.ref && (l = s.ref), s) r.call(s, a) && !o.hasOwnProperty(a) && (c[a] = s[a]);
                    if (e && e.defaultProps)
                        for (a in s = e.defaultProps) void 0 === c[a] && (c[a] = s[a]);
                    return {
                        $$typeof: t,
                        type: e,
                        key: d,
                        ref: l,
                        props: c,
                        _owner: n.current
                    }
                }
                return Te.Fragment = s, Te.jsx = a, Te.jsxs = a, Te
            }();
            be.exports;
            var Ie = Object.defineProperty,
                Ee = (e, t, s) => ((e, t, s) => t in e ? Ie(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: s
                }) : e[t] = s)(e, "symbol" != typeof t ? t + "" : t, s),
                xe = (e => (e.FailedFetchSessionsActive = "FailedFetchSessionsActive", e.FailedFetchSessionsRefresh = "FailedFetchSessionsRefresh", e.FailedFetchSessionsLogout = "FailedFetchSessionsLogout", e))(xe || {});
            class Re extends Error {
                constructor(e, t) {
                    super(t), Ee(this, "type"), this.name = e, this.type = e
                }
            }
            const Ce = async () => {
                const {
                    serverUrl: e
                } = o();
                try {
                    return await (await fetch(`https://${e}/oauth2/sessions/active`, {
                        method: "GET",
                        credentials: "include"
                    })).json()
                } catch (e) {
                    throw console.error("unable to request sessions active: ", e), e instanceof Error ? new Re(xe.FailedFetchSessionsActive, e.message) : new Re(xe.FailedFetchSessionsActive, "unable to request sessions active")
                }
            }
        }
    }
]);
//# sourceMappingURL=core.6557.3b91927ada4b6b154a30.js.map