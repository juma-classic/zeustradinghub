(self.webpackChunk = self.webpackChunk || []).push([
    [3195], {
        630965: (e, t, r) => {
            var n;
            self, e.exports = (n = r(286326), (() => {
                "use strict";
                var e = {
                        "../../../node_modules/object-assign/index.js": e => {
                            var t = Object.getOwnPropertySymbols,
                                r = Object.prototype.hasOwnProperty,
                                n = Object.prototype.propertyIsEnumerable;
                            e.exports = function() {
                                try {
                                    if (!Object.assign) return !1;
                                    var e = new String("abc");
                                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                                    for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                                            return t[e]
                                        })).join("")) return !1;
                                    var n = {};
                                    return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                                        n[e] = e
                                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                                } catch (e) {
                                    return !1
                                }
                            }() ? Object.assign : function(e, o) {
                                for (var i, a, s = function(e) {
                                        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                                        return Object(e)
                                    }(e), c = 1; c < arguments.length; c++) {
                                    for (var l in i = Object(arguments[c])) r.call(i, l) && (s[l] = i[l]);
                                    if (t) {
                                        a = t(i);
                                        for (var u = 0; u < a.length; u++) n.call(i, a[u]) && (s[a[u]] = i[a[u]])
                                    }
                                }
                                return s
                            }
                        },
                        "../../../node_modules/react/cjs/react-jsx-runtime.production.min.js": (e, t, r) => {
                            r("../../../node_modules/object-assign/index.js");
                            var n = r("react"),
                                o = 60103;
                            if ("function" == typeof Symbol && Symbol.for) {
                                var i = Symbol.for;
                                o = i("react.element"), i("react.fragment")
                            }
                            var a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                                s = Object.prototype.hasOwnProperty,
                                c = {
                                    key: !0,
                                    ref: !0,
                                    __self: !0,
                                    __source: !0
                                };

                            function l(e, t, r) {
                                var n, i = {},
                                    l = null,
                                    u = null;
                                for (n in void 0 !== r && (l = "" + r), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (u = t.ref), t) s.call(t, n) && !c.hasOwnProperty(n) && (i[n] = t[n]);
                                if (e && e.defaultProps)
                                    for (n in t = e.defaultProps) void 0 === i[n] && (i[n] = t[n]);
                                return {
                                    $$typeof: o,
                                    type: e,
                                    key: l,
                                    ref: u,
                                    props: i,
                                    _owner: a.current
                                }
                            }
                            t.jsx = l, t.jsxs = l
                        },
                        "../../../node_modules/react/jsx-runtime.js": (e, t, r) => {
                            e.exports = r("../../../node_modules/react/cjs/react-jsx-runtime.production.min.js")
                        },
                        react: e => {
                            e.exports = n
                        }
                    },
                    t = {};

                function r(n) {
                    var o = t[n];
                    if (void 0 !== o) return o.exports;
                    var i = t[n] = {
                        exports: {}
                    };
                    return e[n](i, i.exports, r), i.exports
                }
                r.d = (e, t) => {
                    for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
                var o = {};

                function i(e) {
                    var t, r, n = "";
                    if ("string" == typeof e || "number" == typeof e) n += e;
                    else if ("object" == typeof e)
                        if (Array.isArray(e)) {
                            var o = e.length;
                            for (t = 0; t < o; t++) e[t] && (r = i(e[t])) && (n && (n += " "), n += r)
                        } else
                            for (r in e) e[r] && (n && (n += " "), n += r);
                    return n
                }
                r.d(o, {
                    default: () => c
                }), r("react");
                const a = function() {
                    for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)(e = arguments[r]) && (t = i(e)) && (n && (n += " "), n += t);
                    return n
                };
                var s = r("../../../node_modules/react/jsx-runtime.js");
                const c = e => {
                    let {
                        children: t,
                        label: r,
                        className: n,
                        is_title_enabled: o = !0,
                        is_fiat: i,
                        item_count: c,
                        description: l
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: n,
                        children: [o && (0, s.jsx)("h2", {
                            className: a(`${n}--is-header`, {
                                "currency-selector__is-crypto": !i
                            }),
                            children: r
                        }), i && (0, s.jsx)("div", {
                            className: "currency-selector__description",
                            children: l
                        }), (0, s.jsx)("div", {
                            className: a("currency-list__items", {
                                "currency-list__items__center": c < 4,
                                "currency-list__items__is-fiat": i,
                                "currency-list__items__is-crypto": !i
                            }),
                            children: t
                        })]
                    })
                };
                return o.default
            })())
        },
        960923: (e, t, r) => {
            var n, o, i, a;
            self, e.exports = (n = r(592353), o = r(504377), i = r(33118), a = r(286326), (() => {
                "use strict";
                var e = {
                        "../../../node_modules/object-assign/index.js": e => {
                            var t = Object.getOwnPropertySymbols,
                                r = Object.prototype.hasOwnProperty,
                                n = Object.prototype.propertyIsEnumerable;
                            e.exports = function() {
                                try {
                                    if (!Object.assign) return !1;
                                    var e = new String("abc");
                                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                                    for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                                            return t[e]
                                        })).join("")) return !1;
                                    var n = {};
                                    return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                                        n[e] = e
                                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                                } catch (e) {
                                    return !1
                                }
                            }() ? Object.assign : function(e, o) {
                                for (var i, a, s = function(e) {
                                        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                                        return Object(e)
                                    }(e), c = 1; c < arguments.length; c++) {
                                    for (var l in i = Object(arguments[c])) r.call(i, l) && (s[l] = i[l]);
                                    if (t) {
                                        a = t(i);
                                        for (var u = 0; u < a.length; u++) n.call(i, a[u]) && (s[a[u]] = i[a[u]])
                                    }
                                }
                                return s
                            }
                        },
                        "../../../node_modules/react/cjs/react-jsx-runtime.production.min.js": (e, t, r) => {
                            r("../../../node_modules/object-assign/index.js");
                            var n = r("react"),
                                o = 60103;
                            if ("function" == typeof Symbol && Symbol.for) {
                                var i = Symbol.for;
                                o = i("react.element"), i("react.fragment")
                            }
                            var a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                                s = Object.prototype.hasOwnProperty,
                                c = {
                                    key: !0,
                                    ref: !0,
                                    __self: !0,
                                    __source: !0
                                };

                            function l(e, t, r) {
                                var n, i = {},
                                    l = null,
                                    u = null;
                                for (n in void 0 !== r && (l = "" + r), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (u = t.ref), t) s.call(t, n) && !c.hasOwnProperty(n) && (i[n] = t[n]);
                                if (e && e.defaultProps)
                                    for (n in t = e.defaultProps) void 0 === i[n] && (i[n] = t[n]);
                                return {
                                    $$typeof: o,
                                    type: e,
                                    key: l,
                                    ref: u,
                                    props: i,
                                    _owner: a.current
                                }
                            }
                            t.jsx = l, t.jsxs = l
                        },
                        "../../../node_modules/react/jsx-runtime.js": (e, t, r) => {
                            e.exports = r("../../../node_modules/react/cjs/react-jsx-runtime.production.min.js")
                        },
                        "@deriv/components": e => {
                            e.exports = n
                        },
                        "@deriv/shared": e => {
                            e.exports = o
                        },
                        "@deriv/translations": e => {
                            e.exports = i
                        },
                        react: e => {
                            e.exports = a
                        }
                    },
                    t = {};

                function r(n) {
                    var o = t[n];
                    if (void 0 !== o) return o.exports;
                    var i = t[n] = {
                        exports: {}
                    };
                    return e[n](i, i.exports, r), i.exports
                }
                r.n = e => {
                    var t = e && e.__esModule ? () => e.default : () => e;
                    return r.d(t, {
                        a: t
                    }), t
                }, r.d = (e, t) => {
                    for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
                var s = {};
                r.d(s, {
                    default: () => f
                });
                var c = r("react"),
                    l = r.n(c);

                function u(e) {
                    var t, r, n = "";
                    if ("string" == typeof e || "number" == typeof e) n += e;
                    else if ("object" == typeof e)
                        if (Array.isArray(e)) {
                            var o = e.length;
                            for (t = 0; t < o; t++) e[t] && (r = u(e[t])) && (n && (n += " "), n += r)
                        } else
                            for (r in e) e[r] && (n && (n += " "), n += r);
                    return n
                }
                const d = function() {
                    for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)(e = arguments[r]) && (t = u(e)) && (n && (n += " "), n += t);
                    return n
                };
                var _ = r("@deriv/components"),
                    h = r("@deriv/shared"),
                    m = r("@deriv/translations"),
                    p = r("../../../node_modules/react/jsx-runtime.js");
                const g = e => {
                        let t, {
                            id: r
                        } = e;
                        return t = /^UST$/i.test(r) ? (0, p.jsx)(m.Localize, {
                            i18n_default_text: "Tether as an Omni token (USDT) is a version of Tether that is hosted on the Omni layer on the Bitcoin blockchain.",
                            components: [(0, p.jsx)("br", {}, 0)]
                        }) : /^tUSDT$/i.test(r) ? (0, p.jsx)(m.Localize, {
                            i18n_default_text: "Tether as a TRC20 token (tUSDT) is a version of Tether that is hosted on Tron."
                        }) : (0, p.jsx)(m.Localize, {
                            i18n_default_text: "Tether as an ERC20 token (eUSDT) is a version of Tether that is hosted on Ethereum."
                        }), (0, p.jsx)(_.Popover, {
                            alignment: "top",
                            className: "currency-list__popover",
                            disable_message_icon: !0,
                            icon: "info",
                            is_bubble_hover_enabled: !0,
                            message: t,
                            zIndex: "9999"
                        })
                    },
                    f = e => {
                        let {
                            field: {
                                name: t,
                                value: r,
                                onChange: n,
                                onBlur: o
                            },
                            icon: i,
                            id: a,
                            label: s,
                            second_line_label: c,
                            onClick: u,
                            className: m,
                            ...f
                        } = e;
                        return (0, p.jsxs)(l().Fragment, {
                            children: [(0, p.jsx)("input", {
                                name: t,
                                id: a,
                                type: "radio",
                                value: a,
                                checked: a === r,
                                onChange: n,
                                onBlur: o,
                                disabled: f.selected,
                                className: d(m, "currency-list__radio-button"),
                                ...f
                            }), (0, p.jsx)("label", {
                                htmlFor: a,
                                className: d("currency-list__item", {
                                    "currency-list__item--selected": a === r,
                                    "currency-list__item--current": f.selected
                                }),
                                onClick: u,
                                children: i ? (0, p.jsxs)(l().Fragment, {
                                    children: [(0, p.jsx)(_.Icon, {
                                        className: "currency-list__icon",
                                        icon: i
                                    }), (0, p.jsxs)("div", {
                                        className: "label currency-list__item-text",
                                        children: [(0, p.jsx)("div", {
                                            className: "currency-list__item-label",
                                            children: s
                                        }), (0, p.jsx)("div", {
                                            className: "currency-list__item-code",
                                            children: c
                                        })]
                                    })]
                                }) : (0, p.jsxs)(l().Fragment, {
                                    children: [(0, p.jsx)(_.Icon, {
                                        className: "currency-list__icon",
                                        icon: `IcCurrency-${a?.toLowerCase()}`
                                    }), a && /^(UST|eUSDT|tUSDT)$/i.test(a) && (0, p.jsx)(g, {
                                        id: a
                                    }), (0, p.jsxs)("div", {
                                        className: "label currency-list__item-text",
                                        children: [(0, p.jsx)("div", {
                                            className: "currency-list__item-label",
                                            children: s
                                        }), (0, p.jsxs)("div", {
                                            className: "currency-list__item-code",
                                            children: ["(", (0, h.getCurrencyDisplayCode)(a), ")"]
                                        })]
                                    })]
                                })
                            })]
                        })
                    };
                return s.default
            })())
        },
        370611: (e, t, r) => {
            var n, o;
            self, e.exports = (n = r(504377), o = r(33118), (() => {
                "use strict";
                var e = {
                        "@deriv/shared": e => {
                            e.exports = n
                        },
                        "@deriv/translations": e => {
                            e.exports = o
                        }
                    },
                    t = {};

                function r(n) {
                    var o = t[n];
                    if (void 0 !== o) return o.exports;
                    var i = t[n] = {
                        exports: {}
                    };
                    return e[n](i, i.exports, r), i.exports
                }
                r.n = e => {
                    var t = e && e.__esModule ? () => e.default : () => e;
                    return r.d(t, {
                        a: t
                    }), t
                }, r.d = (e, t) => {
                    for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
                var i = {};
                r.d(i, {
                    default: () => l
                });
                var a = r("@deriv/shared"),
                    s = r("@deriv/translations");
                const c = {
                        currency: {
                            supported_in: ["maltainvest", "svg"],
                            default_value: "",
                            rules: [
                                ["req", (0, s.localize)("Select an item")]
                            ]
                        }
                    },
                    l = (e, t) => {
                        let {
                            real_account_signup_target: r
                        } = e;
                        return {
                            header: {
                                active_title: (0, s.localize)("Select your preferred currency"),
                                title: (0, s.localize)("Account currency")
                            },
                            body: t,
                            form_value: (0, a.getDefaultFields)(r, c),
                            props: {
                                validate: (0, a.generateValidationFunction)(r, c)
                            },
                            passthrough: ["legal_allowed_currencies"],
                            icon: "IcDashboardCurrency"
                        }
                    };
                return i.default
            })())
        },
        622831: (e, t, r) => {
            var n, o, i;
            self, e.exports = (n = r(596176), o = r(592353), i = r(286326), (() => {
                "use strict";
                var e = {
                        "../../../node_modules/object-assign/index.js": e => {
                            var t = Object.getOwnPropertySymbols,
                                r = Object.prototype.hasOwnProperty,
                                n = Object.prototype.propertyIsEnumerable;
                            e.exports = function() {
                                try {
                                    if (!Object.assign) return !1;
                                    var e = new String("abc");
                                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                                    for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                                            return t[e]
                                        })).join("")) return !1;
                                    var n = {};
                                    return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                                        n[e] = e
                                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                                } catch (e) {
                                    return !1
                                }
                            }() ? Object.assign : function(e, o) {
                                for (var i, a, s = function(e) {
                                        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                                        return Object(e)
                                    }(e), c = 1; c < arguments.length; c++) {
                                    for (var l in i = Object(arguments[c])) r.call(i, l) && (s[l] = i[l]);
                                    if (t) {
                                        a = t(i);
                                        for (var u = 0; u < a.length; u++) n.call(i, a[u]) && (s[a[u]] = i[a[u]])
                                    }
                                }
                                return s
                            }
                        },
                        "../../../node_modules/react/cjs/react-jsx-runtime.production.min.js": (e, t, r) => {
                            r("../../../node_modules/object-assign/index.js");
                            var n = r("react"),
                                o = 60103;
                            if ("function" == typeof Symbol && Symbol.for) {
                                var i = Symbol.for;
                                o = i("react.element"), i("react.fragment")
                            }
                            var a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                                s = Object.prototype.hasOwnProperty,
                                c = {
                                    key: !0,
                                    ref: !0,
                                    __self: !0,
                                    __source: !0
                                };

                            function l(e, t, r) {
                                var n, i = {},
                                    l = null,
                                    u = null;
                                for (n in void 0 !== r && (l = "" + r), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (u = t.ref), t) s.call(t, n) && !c.hasOwnProperty(n) && (i[n] = t[n]);
                                if (e && e.defaultProps)
                                    for (n in t = e.defaultProps) void 0 === i[n] && (i[n] = t[n]);
                                return {
                                    $$typeof: o,
                                    type: e,
                                    key: l,
                                    ref: u,
                                    props: i,
                                    _owner: a.current
                                }
                            }
                            t.jsx = l, t.jsxs = l
                        },
                        "../../../node_modules/react/jsx-runtime.js": (e, t, r) => {
                            e.exports = r("../../../node_modules/react/cjs/react-jsx-runtime.production.min.js")
                        },
                        "@deriv-com/translations": e => {
                            e.exports = n
                        },
                        "@deriv/components": e => {
                            e.exports = o
                        },
                        react: e => {
                            e.exports = i
                        },
                        "../../../node_modules/@deriv-com/ui/dist/hooks/useDevice.js": (e, t, n) => {
                            n.d(t, {
                                Y: () => d
                            });
                            var o = n("react"),
                                i = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof r.g < "u" ? r.g : typeof self < "u" ? self : {},
                                a = "object" == typeof i && i && i.Object === Object && i,
                                s = "object" == typeof self && self && self.Object === Object && self;
                            a || s || Function("return this")();
                            var c = typeof window < "u" ? o.useLayoutEffect : o.useEffect,
                                l = typeof window > "u";

                            function u(e, {
                                defaultValue: t = !1,
                                initializeWithValue: r = !0
                            } = {}) {
                                const n = e => l ? t : window.matchMedia(e).matches,
                                    [i, a] = (0, o.useState)((() => r ? n(e) : t));

                                function s() {
                                    a(n(e))
                                }
                                return c((() => {
                                    const t = window.matchMedia(e);
                                    return s(), t.addListener ? t.addListener(s) : t.addEventListener("change", s), () => {
                                        t.removeListener ? t.removeListener(s) : t.removeEventListener("change", s)
                                    }
                                }), [e]), i
                            }
                            const d = () => ({
                                isDesktop: u("(min-width: 1280px)"),
                                isMobile: u("(max-width: 600px)"),
                                isTablet: u("(min-width: 601px) and (max-width: 1279px)"),
                                isTabletPortrait: u("(min-width: 601px) and (max-width: 1279px) and (orientation: portrait)"),
                                isMobileOrTabletLandscape: u("(max-width: 1279px) and (orientation: landscape)")
                            })
                        }
                    },
                    t = {};

                function a(r) {
                    var n = t[r];
                    if (void 0 !== n) return n.exports;
                    var o = t[r] = {
                        exports: {}
                    };
                    return e[r](o, o.exports, a), o.exports
                }
                a.n = e => {
                    var t = e && e.__esModule ? () => e.default : () => e;
                    return a.d(t, {
                        a: t
                    }), t
                }, a.d = (e, t) => {
                    for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }, a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
                var s = {};
                a.d(s, {
                    default: () => m
                });
                var c = a("react"),
                    l = a.n(c),
                    u = a("@deriv/components"),
                    d = a("@deriv-com/translations"),
                    _ = a("../../../node_modules/@deriv-com/ui/dist/hooks/useDevice.js"),
                    h = a("../../../node_modules/react/jsx-runtime.js");
                const m = e => {
                    let {
                        show_risk_modal: t,
                        handleAcceptRisk: r,
                        title: n,
                        button_text: o,
                        body_content: i,
                        has_sub_header: a = !1
                    } = e;
                    const {
                        isDesktop: s
                    } = (0, _.Y)(), {
                        localize: c
                    } = (0, d.useTranslations)();
                    return (0, h.jsx)(l().Fragment, {
                        children: s ? (0, h.jsxs)(u.Modal, {
                            width: "44rem",
                            title: n,
                            height: "41rem",
                            is_open: t,
                            className: "center-risk-modal",
                            toggleModal: r,
                            has_close_icon: !1,
                            children: [(0, h.jsxs)(u.Modal.Body, {
                                children: [(0, h.jsx)(u.Icon, {
                                    icon: "IcRedWarning",
                                    size: "63"
                                }), (0, h.jsx)(u.Text, {
                                    as: "p",
                                    size: "xs",
                                    align: "center",
                                    line_height: "s",
                                    className: "risk-acceptance__text",
                                    children: i
                                })]
                            }), (0, h.jsx)(u.Modal.Footer, {
                                children: (0, h.jsx)(u.Button, {
                                    type: "button",
                                    large: !0,
                                    text: o ? ? c("OK"),
                                    primary: !0,
                                    onClick: r
                                })
                            })]
                        }) : (0, h.jsxs)(u.MobileDialog, {
                            visible: t,
                            title: a ? c("Trading Experience Assessment") : n,
                            portal_element_id: "modal_root",
                            has_close_icon: !1,
                            children: [(0, h.jsxs)(u.Modal.Body, {
                                className: "risk-tolerance-modal",
                                children: [a ? (0, h.jsxs)(u.Text, {
                                    size: "xs",
                                    line_height: "s",
                                    weight: "bold",
                                    as: "p",
                                    className: "risk-tolerance-modal__title",
                                    children: [n, (0, h.jsx)("div", {
                                        className: "risk-tolerance-modal__title--separator"
                                    })]
                                }) : null, (0, h.jsxs)("div", {
                                    className: "risk-tolerance-modal__wrapper",
                                    children: [(0, h.jsx)(u.Icon, {
                                        icon: "IcRedWarning",
                                        size: "65"
                                    }), (0, h.jsx)(u.Text, {
                                        as: "p",
                                        size: "xs",
                                        align: "center",
                                        line_height: "l",
                                        className: "risk-acceptance__text",
                                        children: i
                                    })]
                                })]
                            }), (0, h.jsx)(u.Modal.Footer, {
                                className: "risk-tolerance-modal__footer",
                                children: (0, h.jsx)(u.Button, {
                                    type: "button",
                                    large: !0,
                                    text: o ? ? c("OK"),
                                    primary: !0,
                                    onClick: r
                                })
                            })]
                        })
                    })
                };
                return s.default
            })())
        },
        697845: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => k
            });
            var n = r(286326),
                o = r(237064),
                i = r(824223),
                a = r(592353),
                s = r(504377),
                c = r(500309),
                l = r(414646),
                u = r(33118),
                d = r(836870);
            const _ = e => {
                    let t, {
                        id: r
                    } = e;
                    return t = /^UST$/i.test(r) ? (0, d.jsx)(u.Localize, {
                        i18n_default_text: "Tether as an Omni token (USDT) is a version of Tether that is hosted on the Omni layer on the Bitcoin blockchain.",
                        components: [(0, d.jsx)("br", {}, 0)]
                    }) : /^tUSDT$/i.test(r) ? (0, d.jsx)(u.Localize, {
                        i18n_default_text: "Tether as a TRC20 token (tUSDT) is a version of Tether that is hosted on Tron."
                    }) : (0, d.jsx)(u.Localize, {
                        i18n_default_text: "Tether as an ERC20 token (eUSDT) is a version of Tether that is hosted on Ethereum."
                    }), (0, d.jsx)(a.Popover, {
                        alignment: "top",
                        className: "currency-list__popover",
                        disable_message_icon: !0,
                        icon: "info",
                        is_bubble_hover_enabled: !0,
                        message: t,
                        zIndex: "9999"
                    })
                },
                h = ["field", "icon", "id", "label", "second_line_label", "onClick", "className"];

            function m(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(r), !0).forEach((function(t) {
                        g(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function g(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const f = e => {
                    let {
                        field: {
                            name: t,
                            value: r,
                            onChange: i,
                            onBlur: c
                        },
                        icon: l,
                        id: u,
                        label: m,
                        second_line_label: g,
                        onClick: f,
                        className: b
                    } = e, y = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = function(e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (-1 !== t.indexOf(n)) continue;
                                    r[n] = e[n]
                                }
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < i.length; n++) r = i[n], -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                    }(e, h);
                    return (0, d.jsxs)(n.Fragment, {
                        children: [(0, d.jsx)("input", p({
                            name: t,
                            id: u,
                            type: "radio",
                            value: u,
                            checked: u === r,
                            onChange: i,
                            onBlur: c,
                            disabled: y.selected,
                            className: (0, o.A)(b, "currency-list__radio-button")
                        }, y)), (0, d.jsx)("label", {
                            htmlFor: u,
                            className: (0, o.A)("currency-list__item", {
                                "currency-list__item--selected": u === r,
                                "currency-list__item--current": y.selected
                            }),
                            onClick: f,
                            children: l ? (0, d.jsxs)(n.Fragment, {
                                children: [(0, d.jsx)(a.Icon, {
                                    className: "currency-list__icon",
                                    icon: l
                                }), (0, d.jsxs)("div", {
                                    className: "label currency-list__item-text",
                                    children: [(0, d.jsx)("div", {
                                        className: "currency-list__item-label",
                                        children: m
                                    }), (0, d.jsx)("div", {
                                        className: "currency-list__item-code",
                                        children: g
                                    })]
                                })]
                            }) : (0, d.jsxs)(n.Fragment, {
                                children: [(0, d.jsx)(a.Icon, {
                                    className: "currency-list__icon",
                                    icon: `IcCurrency-${null==u?void 0:u.toLowerCase()}`
                                }), u && /^(UST|eUSDT|tUSDT)$/i.test(u) && (0, d.jsx)(_, {
                                    id: u
                                }), (0, d.jsxs)("div", {
                                    className: "label currency-list__item-text",
                                    children: [(0, d.jsx)("div", {
                                        className: "currency-list__item-label",
                                        children: m
                                    }), (0, d.jsxs)("div", {
                                        className: "currency-list__item-code",
                                        children: ["(", (0, s.getCurrencyDisplayCode)(u), ")"]
                                    })]
                                })]
                            })
                        })]
                    })
                },
                b = e => {
                    let {
                        children: t,
                        label: r,
                        className: n,
                        is_title_enabled: i = !0,
                        is_fiat: a,
                        item_count: s,
                        description: c
                    } = e;
                    return (0, d.jsxs)("div", {
                        className: n,
                        children: [i && (0, d.jsx)("h2", {
                            className: (0, o.A)(`${n}--is-header`, {
                                "currency-selector__is-crypto": !a
                            }),
                            children: r
                        }), a && (0, d.jsx)("div", {
                            className: "currency-selector__description",
                            children: c
                        }), (0, d.jsx)("div", {
                            className: (0, o.A)("currency-list__items", {
                                "currency-list__items__center": s < 4,
                                "currency-list__items__is-fiat": a,
                                "currency-list__items__is-crypto": !a
                            }),
                            children: t
                        })]
                    })
                };
            var y = r(628977),
                x = r(919796);

            function v(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(r), !0).forEach((function(t) {
                        w(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function w(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const O = () => (0, d.jsx)("div", {
                    className: "currency-hr"
                }),
                k = (0, c.observer)((e => {
                    let {
                        getCurrentStep: t,
                        goToNextStep: r,
                        goToStep: c,
                        onSubmit: _,
                        onSave: h,
                        onCancel: m,
                        goToPreviousStep: p,
                        set_currency: g,
                        validate: v,
                        has_cancel: w = !1,
                        has_wallet_account: k,
                        value: N
                    } = e;
                    const {
                        client: S,
                        ui: C
                    } = (0, l.A)(), {
                        currency: A,
                        has_active_real_account: P,
                        upgradeable_currencies: z,
                        available_crypto_currencies: I,
                        has_fiat: D,
                        accounts: T
                    } = S, L = Boolean(A), {
                        real_account_signup: E,
                        real_account_signup_target: M,
                        resetRealAccountSignupParams: F
                    } = C, {
                        isMobile: R,
                        isDesktop: B
                    } = (0, x.Y)(), U = z.filter((e => String(e.type) === s.CURRENCY_TYPE.CRYPTO)), W = z.filter((e => String(e.type) === s.CURRENCY_TYPE.FIAT)), [$, Y] = n.useState(!1), H = !!Object.values(T).filter((e => e.landing_company_shortcode === M)).length;
                    n.useEffect((() => {
                        null != E && E.error_code && Y(!0)
                    }), [null == E ? void 0 : E.error_code]), n.useEffect((() => {
                        if ($ && null != E && E.error_details) {
                            const e = Object.keys(null == E ? void 0 : E.error_details),
                                t = Object.keys((0, s.getAddressDetailsFields)()).filter((t => e.includes(t)));
                            (null == t ? void 0 : t.length) > 0 ? c(3) : r(), F(), Y(!1)
                        }
                    }), [$]);
                    return (0, d.jsx)(i.Formik, {
                        initialValues: N,
                        onSubmit: (e, n) => {
                            _(t ? t() - 1 : null, e, n.setSubmitting, r)
                        },
                        validate: e => {
                            const r = ((null == t ? void 0 : t()) || 1) - 1;
                            null == h || h(r, e);
                            const {
                                errors: n
                            } = (0, y.E)(v(e));
                            return n
                        },
                        children: e => {
                            let {
                                handleSubmit: r,
                                values: c
                            } = e;
                            return (0, d.jsx)(a.AutoHeightWrapper, {
                                default_height: 450,
                                children: e => {
                                    var l, _;
                                    let {
                                        setRef: y,
                                        height: x
                                    } = e;
                                    return (0, d.jsxs)("form", {
                                        ref: y,
                                        onSubmit: r,
                                        className: "currency-selector",
                                        "data-testid": "currency_selector_form",
                                        children: [(0, d.jsx)(a.Div100vhContainer, {
                                            className: (0, o.A)("currency-selector__container", {
                                                "currency-selector__container--no-top-margin": !L && P && R
                                            }),
                                            height_offset: !L && P ? "89px" : "159px",
                                            is_disabled: B,
                                            children: (0, d.jsxs)(a.ThemedScrollbars, {
                                                height: x,
                                                children: [!(null == W || !W.length) && (0, d.jsxs)(n.Fragment, {
                                                    children: [(0, d.jsx)(b, {
                                                        className: "currency-selector__radio-group currency-selector__radio-group--with-margin",
                                                        is_fiat: !0,
                                                        item_count: W.length,
                                                        children: (0, s.reorderCurrencies)(W).map((e => (0, d.jsx)(i.Field, {
                                                            component: f,
                                                            name: "currency",
                                                            id: e.value,
                                                            label: e.name,
                                                            selected: H && D
                                                        }, e.value)))
                                                    }), !(null === (l = (0, s.reorderCurrencies)(U, "crypto")) || void 0 === l || !l.length) && (0, d.jsx)(O, {})]
                                                }), !(null === (_ = (0, s.reorderCurrencies)(U, "crypto")) || void 0 === _ || !_.length) && (0, d.jsx)(n.Fragment, {
                                                    children: (0, d.jsx)(b, {
                                                        is_title_enabled: !1,
                                                        className: "currency-selector__radio-group currency-selector__radio-group--with-margin",
                                                        item_count: (0, s.reorderCurrencies)(U, "crypto").length,
                                                        children: (0, s.reorderCurrencies)(U, "crypto").map((e => {
                                                            var t;
                                                            return (0, d.jsx)(i.Field, {
                                                                component: f,
                                                                selected: 0 === (null == I || null === (t = I.filter((t => t.value === e.value))) || void 0 === t ? void 0 : t.length),
                                                                name: "currency",
                                                                id: e.value,
                                                                label: e.name
                                                            }, e.value)
                                                        }))
                                                    })
                                                })]
                                            })
                                        }), (0, d.jsx)(a.Modal.Footer, {
                                            has_separator: !0,
                                            is_bypassed: R,
                                            children: (0, d.jsx)(a.FormSubmitButton, j({
                                                className: g ? "currency-selector--set-currency" : "currency-selector--deriv-account",
                                                is_disabled: !c.currency,
                                                is_center: !1,
                                                is_absolute: g,
                                                label: g ? (0, u.localize)("Set currency") : k ? (0, u.localize)("Finish") : (0, u.localize)("Next")
                                            }, w ? {
                                                cancel_label: (0, u.localize)("Previous"),
                                                has_cancel: !0,
                                                onCancel: () => (e => {
                                                    const r = t() - 1;
                                                    null == h || h(r, e), m(r, p)
                                                })(c)
                                            } : {}))
                                        })]
                                    })
                                }
                            })
                        }
                    })
                }))
        },
        628977: (e, t, r) => {
            "use strict";

            function n(e) {
                const t = {},
                    r = {};
                return Object.keys(e).forEach((n => {
                    const o = e[n];
                    Array.isArray(o) && ("warn" === o[0] ? t[n] = o[1] : "error" === o[0] && (r[n] = o[1]))
                })), {
                    warnings: t,
                    errors: r
                }
            }
            r.d(t, {
                E: () => n
            })
        },
        766475: (e, t, r) => {
            "use strict";
            r.d(t, {
                sk: () => c
            });
            var n = r(10578),
                o = r(286326),
                i = r(597598),
                a = r.n(i),
                s = r(836870);
            const c = e => {
                    let {
                        is_desktop: t,
                        is_logged_in: r,
                        is_traders_hub_routes: o,
                        speed: i
                    } = e;
                    return (0, s.jsx)(n.Ay, {
                        height: t ? 47 : 39,
                        width: t ? 350 : 161,
                        speed: i,
                        backgroundColor: "var(--general-section-1)",
                        foregroundColor: "var(--general-hover)",
                        children: r ? (0, s.jsx)(u, {
                            is_desktop: t,
                            is_traders_hub_routes: o
                        }) : (0, s.jsx)(l, {
                            is_desktop: t
                        })
                    })
                },
                l = e => {
                    let {
                        is_desktop: t
                    } = e;
                    return (0, s.jsxs)(o.Fragment, {
                        children: [(0, s.jsx)("rect", {
                            x: t ? 172 : 0,
                            y: "8",
                            rx: "4",
                            ry: "4",
                            width: "66",
                            height: "30"
                        }), (0, s.jsx)("rect", {
                            x: t ? 254 : 74,
                            y: "8",
                            rx: "4",
                            ry: "4",
                            width: "80",
                            height: "30"
                        })]
                    })
                },
                u = e => {
                    let {
                        is_desktop: t,
                        is_traders_hub_routes: r
                    } = e;
                    return (0, s.jsx)(s.Fragment, {
                        children: t ? (0, s.jsxs)(o.Fragment, {
                            children: [!r && (0, s.jsxs)(o.Fragment, {
                                children: [(0, s.jsx)("rect", {
                                    x: "0",
                                    y: "6",
                                    rx: "4",
                                    ry: "4",
                                    width: "82",
                                    height: "32"
                                }), (0, s.jsx)("rect", {
                                    x: "98",
                                    y: "6",
                                    rx: "4",
                                    ry: "4",
                                    width: "1",
                                    height: "30"
                                }), (0, s.jsx)("circle", {
                                    cx: "128",
                                    cy: "22",
                                    r: "13"
                                }), (0, s.jsx)("rect", {
                                    x: "157",
                                    y: "18",
                                    rx: "4",
                                    ry: "4",
                                    width: "76",
                                    height: "7"
                                }), (0, s.jsx)("rect", {
                                    x: "249",
                                    y: "6",
                                    rx: "4",
                                    ry: "4",
                                    width: "1",
                                    height: "30"
                                })]
                            }), (0, s.jsx)("circle", {
                                cx: "279",
                                cy: "20",
                                r: "13"
                            }), (0, s.jsx)("circle", {
                                cx: "321",
                                cy: "20",
                                r: "13"
                            })]
                        }) : (0, s.jsxs)(o.Fragment, {
                            children: [!r && (0, s.jsxs)(o.Fragment, {
                                children: [(0, s.jsx)("circle", {
                                    cx: "13",
                                    cy: "20",
                                    r: "13"
                                }), (0, s.jsx)("rect", {
                                    x: "34",
                                    y: "17",
                                    rx: "4",
                                    ry: "4",
                                    width: "76",
                                    height: "7"
                                }), (0, s.jsx)("rect", {
                                    x: "118",
                                    y: "6",
                                    rx: "4",
                                    ry: "4",
                                    width: "1",
                                    height: "30"
                                })]
                            }), (0, s.jsx)("circle", {
                                cx: "140",
                                cy: "20",
                                r: "13"
                            })]
                        })
                    })
                };
            c.propTypes = {
                speed: a().number,
                is_desktop: a().bool,
                is_logged_in: a().bool
            };
            a().number;
            r(273398)
        },
        273398: (e, t, r) => {
            "use strict";
            r.d(t, {
                i: () => i
            });
            var n = r(10578),
                o = (r(286326), r(836870));
            const i = e => {
                let {
                    is_mobile: t,
                    speed: r
                } = e;
                const i = t ? 16 : 8,
                    a = t ? 40 : 32,
                    s = 16 + a + i,
                    c = t ? 12 : 8,
                    l = 32 + a + i + 90;
                return (0, o.jsxs)(n.Ay, {
                    height: a,
                    width: l,
                    speed: r,
                    backgroundColor: "var(--general-section-1)",
                    foregroundColor: "var(--general-hover)",
                    children: [(0, o.jsx)("rect", {
                        x: 16,
                        y: "0",
                        rx: "4",
                        ry: "4",
                        width: a,
                        height: a
                    }), (0, o.jsx)("rect", {
                        x: s,
                        y: c,
                        rx: "4",
                        ry: "4",
                        width: 90,
                        height: 16
                    })]
                })
            }
        },
        141929: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r(286326),
                o = r(592353),
                i = r(504377),
                a = r(836870);
            const s = e => {
                let {
                    is_disabled: t,
                    is_mobile: r,
                    is_dtrader_v2: s,
                    disabled_message: c,
                    children: l
                } = e;
                return t && c ? (0, a.jsx)(o.Popover, {
                    alignment: ((0, i.isBot)() || s) && r ? "bottom" : "left",
                    message: c,
                    zIndex: "99999",
                    children: l
                }) : (0, a.jsx)(n.Fragment, {
                    children: l
                })
            }
        },
        121096: (e, t, r) => {
            "use strict";
            r.d(t, {
                Xw: () => T,
                $2: () => x,
                ft: () => o.A
            });
            var n = r(332996),
                o = r(608028),
                i = r(286326),
                a = r(140994),
                s = r(291218),
                c = r(592353),
                l = r(919796),
                u = r(852691),
                d = r(500309),
                _ = r(414646),
                h = r(504377),
                m = r(33118),
                p = r(673285),
                g = r(836870);
            const f = e => {
                    let {
                        id: t,
                        text: r,
                        icon: n,
                        link_to: o,
                        handleClickCashier: i
                    } = e;
                    return (0, g.jsx)(u.Sm, {
                        id: t,
                        to: o,
                        className: "header__menu-link",
                        active_class: "header__menu-link--active",
                        onClick: i,
                        children: (0, g.jsxs)(c.Text, {
                            size: "m",
                            line_height: "xs",
                            title: r,
                            className: "header__menu-link-text",
                            children: [n, r]
                        })
                    }, n)
                },
                b = () => (0, g.jsx)(f, {
                    id: "dt_reports_tab",
                    icon: (0, g.jsx)(c.Icon, {
                        icon: "IcReports",
                        className: "header__icon"
                    }),
                    text: (0, m.localize)("Reports"),
                    link_to: h.routes.reports
                }),
                y = (0, d.observer)((() => {
                    const {
                        client: e,
                        ui: t
                    } = (0, _.A)(), {
                        has_any_real_account: r,
                        is_virtual: n
                    } = e, {
                        toggleReadyToDepositModal: o,
                        toggleNeedRealAccountForCashierModal: i
                    } = t, a = (0, p.A)(), l = (0, s.useHistory)(), u = window.location.pathname === h.routes.traders_hub || window.location.pathname === h.routes.bot, d = u && !r && n || a;
                    return (0, g.jsx)(f, {
                        id: "dt_cashier_tab",
                        icon: (0, g.jsx)(g.Fragment, {
                            children: (0, g.jsx)(c.Icon, {
                                icon: "IcCashier",
                                className: "header__icon"
                            })
                        }),
                        text: (0, m.localize)("Cashier"),
                        link_to: d ? null : h.routes.cashier,
                        handleClickCashier: () => {
                            !r && n || a ? u && !r ? o() : window.location.pathname === h.routes.traders_hub && i() : ((0, h.startPerformanceEventTimer)("load_cashier_time"), l.push(h.routes.cashier_deposit))
                        }
                    })
                })),
                x = (0, d.observer)((e => {
                    let {
                        is_traders_hub_routes: t = !1
                    } = e;
                    const {
                        isDesktop: r
                    } = (0, l.Y)(), {
                        i18n: n
                    } = (0, a.B)(), o = (0, s.useLocation)(), {
                        client: i
                    } = (0, _.A)(), {
                        has_wallet: c,
                        is_logged_in: u
                    } = i;
                    return u ? (0, g.jsxs)("div", {
                        className: "header__menu-links",
                        children: [r && !c && (0, g.jsx)(y, {}), !t && !o.pathname.includes(h.routes.cashier) && (0, g.jsx)(b, {})]
                    }, `menu-links__${n.language}`) : (0, g.jsx)(g.Fragment, {})
                }));
            var v = r(391049),
                j = r(357076),
                w = r(514378);

            function O(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(r), !0).forEach((function(t) {
                        N(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function N(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const S = i.lazy((() => r.e(4773).then(r.bind(r, 527671)))),
                C = () => {
                    const {
                        redirect_url: e
                    } = (0, v.A)(), t = (0, g.jsx)("a", {
                        className: "account-settings-toggle",
                        href: e,
                        children: (0, g.jsx)(c.Icon, {
                            icon: "IcUserOutline"
                        })
                    });
                    return h.isTabletOs ? t : (0, g.jsx)(c.Popover, {
                        classNameBubble: "account-settings-toggle__tooltip",
                        alignment: "bottom",
                        message: (0, g.jsx)(m.Localize, {
                            i18n_default_text: "Manage account settings"
                        }),
                        should_disable_pointer_events: !0,
                        zIndex: "9999",
                        children: t
                    })
                },
                A = e => {
                    let {
                        count: t,
                        is_visible: r,
                        toggleDialog: o
                    } = e;
                    return (0, g.jsx)(n.A, {
                        count: t,
                        is_visible: r,
                        toggleDialog: o,
                        tooltip_message: (0, g.jsx)(m.Localize, {
                            i18n_default_text: "View notifications"
                        }),
                        should_disable_pointer_events: !0,
                        showPopover: !h.isTabletOs
                    })
                },
                P = e => {
                    let {
                        openRealAccountSignup: t
                    } = e;
                    return (0, g.jsx)("div", {
                        className: "set-currency",
                        children: (0, g.jsx)(c.Button, {
                            onClick: () => t("set_currency"),
                            has_effect: !0,
                            type: "button",
                            text: (0, m.localize)("Set currency"),
                            primary: !0
                        })
                    })
                },
                z = e => {
                    let {
                        onClickDeposit: t
                    } = e;
                    return (0, g.jsx)(c.Button, {
                        className: "acc-info__button",
                        has_effect: !0,
                        text: (0, m.localize)("Deposit"),
                        onClick: t,
                        primary: !0
                    })
                },
                I = () => (0, g.jsxs)(g.Fragment, {
                    children: [(0, g.jsx)(j.M, {
                        className: "acc-info__button"
                    }), (0, g.jsx)(w.X, {
                        className: "acc-info__button"
                    })]
                }),
                D = e => {
                    let {
                        acc_switcher_disabled_message: t,
                        account_type: r,
                        balance: n,
                        currency: o,
                        disableApp: a,
                        enableApp: c,
                        is_acc_switcher_on: u,
                        is_acc_switcher_disabled: d,
                        is_eu: _,
                        is_logged_in: m,
                        is_notifications_visible: p,
                        is_traders_hub_routes: f,
                        is_virtual: b,
                        notifications_count: y,
                        onClickDeposit: x,
                        openRealAccountSignup: v,
                        toggleAccountsDialog: j,
                        toggleNotifications: w
                    } = e;
                    const {
                        isDesktop: O
                    } = (0, l.Y)(), N = (0, s.useLocation)(), D = O && !f && o && !N.pathname.includes(h.routes.cashier), T = O && !f && !b && !o, L = null != n ? (0, h.formatMoney)(o, n, !0) : void 0;
                    return m ? (0, g.jsxs)(i.Fragment, {
                        children: [T && (0, g.jsx)(P, {
                            openRealAccountSignup: v
                        }), D && (0, g.jsx)(z, {
                            onClickDeposit: x
                        }), !f && (0, g.jsx)(i.Suspense, {
                            fallback: (0, g.jsx)("div", {}),
                            children: (0, g.jsx)(S, k({
                                acc_switcher_disabled_message: t,
                                account_type: r,
                                balance: L,
                                is_disabled: d,
                                is_eu: _,
                                is_virtual: b,
                                currency: o,
                                is_dialog_on: u,
                                toggleDialog: j
                            }, !O && {
                                disableApp: a,
                                enableApp: c,
                                is_mobile: !0
                            }))
                        }), (0, g.jsx)(A, {
                            count: y,
                            is_visible: p,
                            toggleDialog: w
                        }), O && (0, g.jsx)(C, {})]
                    }) : (0, g.jsx)(I, {})
                };
            D.displayName = "AccountActions";
            const T = i.memo(D);
            r(564702)
        },
        357076: (e, t, r) => {
            "use strict";
            r.d(t, {
                M: () => h
            });
            r(286326);
            var n = r(192299),
                o = r.n(n),
                i = r(597598),
                a = r.n(i),
                s = r(592353),
                c = r(160756),
                l = r(504377),
                u = r(33118),
                d = r(351185),
                _ = r(836870);
            const h = e => {
                let {
                    className: t
                } = e;
                const r = /deriv\.(com)/.test(window.location.hostname) || /localhost:8443/.test(window.location.host),
                    n = o().get("wallet_account"),
                    {
                        isTmbEnabled: i
                    } = (0, c.A)();
                return (0, _.jsx)(s.Button, {
                    id: "dt_login_button",
                    className: t,
                    has_effect: !0,
                    text: (0, u.localize)("Log in"),
                    onClick: async () => {
                        var e;
                        n && ((0, l.isStaging)() ? location.href = `https://staging-hub.${(0,l.getDomainUrl)()}/tradershub/login` : location.href = `https://hub.${(0,l.getDomainUrl)()}/tradershub/login`);
                        const t = await i();
                        if (r && !t) try {
                            await (0, d.ZF)({
                                redirectCallbackUri: `${window.location.origin}/callback`,
                                postLoginRedirectUri: window.location.href
                            }).catch((e => {
                                console.error(e)
                            }))
                        } catch (e) {
                            console.error(e)
                        }
                        null === (e = window.LiveChatWidget) || void 0 === e || e.call("hide"), (0, l.redirectToLogin)(!1, (0, u.getLanguage)())
                    },
                    tertiary: !0
                })
            };
            h.propTypes = {
                className: a().string
            }
        },
        47699: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => p
            });
            r(286326);
            var n = r(255530),
                o = r.n(n),
                i = r(592353),
                a = r(673285),
                s = r(504377),
                c = r(978513),
                l = r(500309),
                u = r(414646),
                d = r(33118),
                _ = r(852691),
                h = r(919796),
                m = r(836870);
            const p = (0, l.observer)((e => {
                let {
                    data_testid: t,
                    icon: r = "",
                    is_active: n,
                    is_disabled: l,
                    is_hidden: p,
                    link_to: g = "",
                    onClickLink: f,
                    suffix_icon: b = "",
                    text: y
                } = e;
                const {
                    ui: x,
                    client: v
                } = (0, u.A)(), {
                    isDesktop: j
                } = (0, h.Y)(), {
                    has_any_real_account: w,
                    is_virtual: O
                } = v, {
                    setMobileLanguageMenuOpen: k,
                    toggleReadyToDepositModal: N,
                    toggleNeedRealAccountForCashierModal: S
                } = x, C = (0, a.A)(), A = y === (0, d.localize)("Trade"), P = (0, s.getStaticUrl)(g), z = window.location.pathname === s.routes.traders_hub, I = !j && g === s.routes.languages, D = P && (0, c.isExternalLink)(g), T = [s.routes.cashier_deposit, s.routes.cashier_withdrawal, s.routes.cashier_acc_transfer].includes(g);
                if (p) return null;
                if (I) return (0, m.jsxs)("div", {
                    className: o()("header__menu-mobile-link", {
                        "header__menu-mobile-link--disabled": l
                    }),
                    onClick: () => k(!0),
                    "data-testid": t,
                    children: [(0, m.jsx)(i.Icon, {
                        className: "header__menu-mobile-link-icon",
                        icon: r
                    }), (0, m.jsx)("span", {
                        className: "header__menu-mobile-link-text",
                        children: y
                    }), b && (0, m.jsx)(i.Icon, {
                        className: "header__menu-mobile-link-suffix-icon",
                        icon: b
                    })]
                });
                if (C && T && z) {
                    const e = () => {
                        null == f || f(), S()
                    };
                    return (0, m.jsxs)("div", {
                        className: o()("header__menu-mobile-link", {
                            "header__menu-mobile-link--disabled": l
                        }),
                        onClick: e,
                        "data-testid": t,
                        children: [(0, m.jsx)(i.Icon, {
                            className: "header__menu-mobile-link-icon",
                            icon: r
                        }), (0, m.jsx)("span", {
                            className: "header__menu-mobile-link-text",
                            children: y
                        }), b && (0, m.jsx)(i.Icon, {
                            className: "header__menu-mobile-link-suffix-icon",
                            icon: b
                        })]
                    })
                }
                if (T && O && !w) {
                    const e = () => {
                        z && N(), null == f || f()
                    };
                    return (0, m.jsxs)("div", {
                        className: o()("header__menu-mobile-link", {
                            "header__menu-mobile-link--disabled": l
                        }),
                        onClick: e,
                        "data-testid": t,
                        children: [(0, m.jsx)(i.Icon, {
                            className: "header__menu-mobile-link-icon",
                            icon: r
                        }), (0, m.jsx)("span", {
                            className: "header__menu-mobile-link-text",
                            children: y
                        }), b && (0, m.jsx)(i.Icon, {
                            className: "header__menu-mobile-link-suffix-icon",
                            icon: b
                        })]
                    })
                }
                return g ? D ? (0, m.jsxs)("a", {
                    className: o()("header__menu-mobile-link", {
                        "header__menu-mobile-link--disabled": l,
                        "header__menu-mobile-link--active": n
                    }),
                    href: g,
                    "data-testid": t,
                    children: [(0, m.jsx)(i.Icon, {
                        className: "header__menu-mobile-link-icon",
                        icon: r
                    }), (0, m.jsx)(i.Text, {
                        className: A ? "" : "header__menu-mobile-link-text",
                        as: "h3",
                        size: "xs",
                        weight: window.location.pathname === s.routes.trade && A ? "bold" : void 0,
                        children: y
                    }), b && (0, m.jsx)(i.Icon, {
                        className: "header__menu-mobile-link-suffix-icon",
                        icon: b
                    })]
                }) : (0, m.jsxs)(_.Sm, {
                    to: g,
                    className: o()("header__menu-mobile-link", {
                        "header__menu-mobile-link--disabled": l,
                        "header__menu-mobile-link--active": n
                    }),
                    onClick: f,
                    "data-testid": t,
                    children: [(0, m.jsx)(i.Icon, {
                        className: "header__menu-mobile-link-icon",
                        icon: r
                    }), (0, m.jsx)(i.Text, {
                        className: A ? "" : "header__menu-mobile-link-text",
                        as: "h3",
                        size: "xs",
                        weight: window.location.pathname === s.routes.trade && A ? "bold" : void 0,
                        children: y
                    }), b && (0, m.jsx)(i.Icon, {
                        className: "header__menu-mobile-link-suffix-icon",
                        icon: b
                    })]
                }) : (0, m.jsxs)("div", {
                    className: o()("header__menu-mobile-link", {
                        "header__menu-mobile-link--disabled": l
                    }),
                    "data-testid": t,
                    children: [(0, m.jsx)(i.Icon, {
                        className: "header__menu-mobile-link-icon",
                        icon: r
                    }), (0, m.jsx)("span", {
                        className: "header__menu-mobile-link-text",
                        children: y
                    }), b && (0, m.jsx)(i.Icon, {
                        className: "header__menu-mobile-link-suffix-icon",
                        icon: b
                    })]
                })
            }))
        },
        608028: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => k
            });
            var n = r(919796),
                o = r(592353),
                i = r(504377),
                a = r(557344),
                s = r(286326),
                c = r(735623),
                l = r(852691),
                u = r(33118),
                d = r(291218),
                _ = r(317691),
                h = r(414646),
                m = r(836870);
            const p = e => {
                    let {
                        platform: {
                            icon: t,
                            description: r
                        }
                    } = e;
                    return (0, m.jsxs)(s.Fragment, {
                        children: [(0, m.jsx)("div", {
                            className: "platform-dropdown__list-platform-background"
                        }), (0, m.jsxs)("div", {
                            className: "platform-switcher__dropdown",
                            "data-testid": "dt_platform_box_icon",
                            children: [(0, m.jsx)(o.Icon, {
                                icon: t,
                                height: 42,
                                width: 150,
                                description: t
                            }), (0, m.jsx)("p", {
                                className: "platform-dropdown__list-platform-description",
                                children: r()
                            })]
                        })]
                    })
                },
                g = (e, t) => {
                    const {
                        is_virtual: r,
                        currency: n
                    } = t;
                    let o = e;
                    r ? o = `${o}${o.includes("?")?"&":"?"}account=demo` : n && (o = `${o}${o.includes("?")?"&":"?"}account=${n}`);
                    try {
                        const e = JSON.parse(sessionStorage.getItem("trade_store") || "{}");
                        null != e && e.symbol && (o = `${o}${o.includes("?")?"&":"?"}symbol=${e.symbol}`)
                    } catch (e) {}
                    return o
                },
                f = e => {
                    let {
                        platform: t,
                        app_routing_history: r,
                        client: n
                    } = e;
                    return t.link_to && (0, m.jsx)(l.Sm, {
                        "data-testid": "dt_platform_dropdown",
                        to: g(t.link_to, n),
                        exact: t.link_to === i.routes.trade,
                        className: "platform-dropdown__list-platform",
                        isActive: () => (0, i.getActivePlatform)(r) === t.name,
                        onClick: e => window.location.pathname.startsWith(t.link_to) && e.preventDefault(),
                        children: (0, m.jsx)(p, {
                            platform: t
                        })
                    }) || (0, m.jsx)("a", {
                        "data-testid": "dt_platform_dropdown_link",
                        href: g(t.href, n),
                        className: "platform-dropdown__list-platform " + ((0, i.getActivePlatform)(r) === t.name ? "active" : ""),
                        children: (0, m.jsx)(p, {
                            platform: t
                        })
                    })
                },
                b = e => {
                    let {
                        app_routing_history: t,
                        closeDrawer: r,
                        platform_config: a,
                        setTogglePlatformType: p
                    } = e;
                    const g = (0, d.useHistory)(),
                        {
                            isDesktop: b
                        } = (0, n.Y)(),
                        {
                            isHubRedirectionEnabled: y
                        } = (0, _.A)(),
                        {
                            client: x
                        } = (0, h.A)(),
                        {
                            has_wallet: v
                        } = x,
                        j = () => (0, m.jsx)("div", {
                            className: "platform-dropdown__cta",
                            children: (0, m.jsx)(l.Sm, {
                                onClick: () => {
                                    if (y && v) return localStorage.setItem("redirect_to_th_os", "home"), void window.location.assign(i.platforms.tradershub_os.url);
                                    b || (g.push(i.routes.traders_hub), p("cfd")), g.push(i.routes.traders_hub)
                                },
                                children: (0, m.jsx)(o.Text, {
                                    size: "xs",
                                    weight: "bold",
                                    align: "center",
                                    className: "platform-dropdown__cta--link",
                                    children: (0, m.jsx)(u.Localize, {
                                        i18n_default_text: "Looking for CFDs? Go to Trader's Hub"
                                    })
                                })
                            })
                        });
                    s.useEffect((() => (window.addEventListener("popstate", r), () => {
                        window.removeEventListener("popstate", r)
                    })), [r]);
                    const w = s.useRef();
                    (0, o.useOnClickOutside)(w, (e => {
                        e.target.closest(".platform-dropdown__list") || e.target.closest(".platform-switcher") || r()
                    }), (() => b));
                    const O = (0, m.jsx)("div", {
                        className: "platform-dropdown",
                        children: (0, m.jsxs)(o.Div100vhContainer, {
                            className: "platform-dropdown__list",
                            height_offset: "15rem",
                            is_disabled: b,
                            children: [a.map((e => (0, m.jsx)("div", {
                                onClick: r,
                                ref: w,
                                children: (0, m.jsx)(f, {
                                    platform: e,
                                    app_routing_history: t,
                                    client: x
                                })
                            }, e.name))), (0, m.jsx)(j, {})]
                        })
                    });
                    return b ? c.createPortal(O, document.getElementById("deriv_app")) : c.createPortal(O, document.getElementById("mobile_platform_switcher"))
                };
            var y = r(273398),
                x = r(597598),
                v = r.n(x),
                j = r(255530),
                w = r.n(j);
            const O = e => {
                let {
                    toggleDrawer: t,
                    app_routing_history: r,
                    platform_config: c = [],
                    current_language: l,
                    is_landing_company_loaded: u,
                    is_logged_in: d,
                    is_logging_in: _,
                    setTogglePlatformType: h
                } = e;
                const [p, g] = s.useState(!1), f = s.useRef(!1), {
                    isDesktop: x
                } = (0, n.Y)();
                s.useEffect((() => {
                    f.current && "function" == typeof t && t(), f.current = !1
                }));
                return (d || _ ? u : 0 !== r.length) ? (0, m.jsxs)(s.Fragment, {
                    children: [(0, m.jsxs)("div", {
                        "data-testid": "dt_platform_switcher",
                        className: w()("platform-switcher", {
                            "platform-switcher--active": p
                        }, {
                            "platform-switcher--is-mobile": !x
                        }),
                        onClick: () => g(!p),
                        children: [(0, m.jsx)(o.Icon, {
                            className: "platform-switcher__icon",
                            icon: (0, i.getPlatformInformation)(r).icon,
                            description: (0, i.getPlatformInformation)(r).header,
                            width: 120,
                            height: 25
                        }), (0, m.jsx)(o.Icon, {
                            className: "platform-switcher__arrow",
                            icon: "IcChevronDownBold"
                        })]
                    }), (0, m.jsx)(a.A, {
                        mountOnEnter: !0,
                        appear: !0,
                        in: p,
                        classNames: {
                            enterDone: "platform-dropdown--enter-done"
                        },
                        timeout: x && p ? 0 : 250,
                        unmountOnExit: !0,
                        children: (0, m.jsx)(b, {
                            platform_config: c,
                            closeDrawer: () => {
                                g(!1), f.current = !0
                            },
                            current_language: l,
                            app_routing_history: r,
                            setTogglePlatformType: h
                        })
                    })]
                }) : (0, m.jsx)("div", {
                    "data-testid": "dt_platform_switcher_preloader",
                    className: w()("platform-switcher__preloader", {
                        "platform-switcher__preloader--is-mobile": !x
                    }),
                    children: (0, m.jsx)(y.i, {
                        is_mobile: !x,
                        speed: 3
                    })
                })
            };
            O.propTypes = {
                platform_config: v().array,
                toggleDrawer: v().func,
                current_language: v().string,
                app_routing_history: v().array,
                is_landing_company_loaded: v().bool,
                is_logged_in: v().bool,
                is_logging_in: v().bool,
                setTogglePlatformType: v().func
            };
            const k = (0, d.withRouter)(O)
        },
        514378: (e, t, r) => {
            "use strict";
            r.d(t, {
                X: () => l
            });
            r(286326);
            var n = r(597598),
                o = r.n(n),
                i = r(592353),
                a = r(504377),
                s = r(33118),
                c = r(836870);
            const l = e => {
                let {
                    className: t
                } = e;
                return (0, c.jsx)(i.Button, {
                    id: "dt_signup_button",
                    className: t,
                    has_effect: !0,
                    text: (0, s.localize)("Sign up"),
                    onClick: a.redirectToSignUp,
                    primary: !0
                })
            };
            l.propTypes = {
                className: o().string
            }
        },
        989186: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => D
            });
            var n = r(286326),
                o = r(291218),
                i = r(255530),
                a = r.n(i),
                s = r(425400),
                c = r(592353),
                l = r(461297),
                u = r(391049),
                d = r(647620),
                _ = r(594269),
                h = r(788624),
                m = r(317691),
                p = r(504377),
                g = r(500309),
                f = r(414646),
                b = r(33118),
                y = r(281476),
                x = r(597351),
                v = r(206022),
                j = r(211509),
                w = r(699429),
                O = r(223753),
                k = r(836870);
            const N = (0, g.observer)((() => {
                const {
                    common: e,
                    ui: t
                } = (0, f.A)(), {
                    current_language: r
                } = e, {
                    is_mobile_language_menu_open: o,
                    setMobileLanguageMenuOpen: i
                } = t;
                return (0, k.jsxs)(n.Fragment, {
                    children: [(0, k.jsx)("div", {
                        children: (0, b.localize)("Menu")
                    }), (0, k.jsx)("div", {
                        className: "settings-language__language-button_wrapper",
                        onClick: () => {
                            o || i(!0)
                        },
                        children: !o && (0, k.jsxs)(n.Fragment, {
                            children: [p.TranslationFlag[r] ? p.TranslationFlag[r](22, 16) : (0, k.jsx)(c.Icon, {
                                icon: `IcFlag${r}`,
                                data_testid: "dt_icon",
                                size: 18
                            }), (0, k.jsx)(c.Text, {
                                weight: "bold",
                                size: "xxs",
                                className: "ic-settings-language__text",
                                children: (0, k.jsx)(b.Localize, {
                                    i18n_default_text: r
                                })
                            })]
                        })
                    })]
                })
            }));
            var S = r(596176),
                C = r(852691);
            const A = (0, g.observer)((e => {
                let {
                    expandSubMenu: t,
                    toggleDrawer: r
                } = e;
                const {
                    common: n,
                    ui: o
                } = (0, f.A)(), {
                    is_language_changing: i
                } = n, {
                    is_mobile_language_menu_open: s,
                    setMobileLanguageMenuOpen: l
                } = o, u = Object.keys((0, S.getAllowedLanguages)(p.UNSUPPORTED_LANGUAGES));
                return (0, k.jsx)(c.MobileDrawer.SubMenu, {
                    is_expanded: s,
                    has_subheader: !0,
                    submenu_title: (0, b.localize)("Select language"),
                    onToggle: e => {
                        t(e), l(!1)
                    },
                    submenu_toggle_class: "dc-mobile-drawer__submenu-toggle--hidden",
                    children: (0, k.jsx)("div", {
                        className: a()("settings-language__language-container", {
                            "settings-language__language-container--disabled": i
                        }),
                        children: u.map((e => (0, k.jsx)(C.H6, {
                            is_clickable: !0,
                            lang: e,
                            toggleModal: () => {
                                r(), l(!1)
                            }
                        }, e)))
                    })
                })
            }));
            var P = r(47699),
                z = r(608028);
            const I = (0, g.observer)((e => {
                let {
                    platform_config: t
                } = e;
                const {
                    common: r,
                    ui: i,
                    client: g,
                    traders_hub: S,
                    modules: C
                } = (0, f.A)(), {
                    app_routing_history: I,
                    current_language: D
                } = r, {
                    disableApp: T,
                    enableApp: L,
                    is_mobile: E,
                    is_mobile_language_menu_open: M,
                    is_dark_mode_on: F,
                    setDarkMode: R,
                    setMobileLanguageMenuOpen: B,
                    setIsForcedToExitPnv: U
                } = i, {
                    account_status: W,
                    has_wallet: $,
                    is_authorize: Y,
                    is_logged_in: H,
                    is_logging_in: V,
                    is_virtual: G,
                    logout: q,
                    setIsLoggingOut: K,
                    should_allow_authentication: X,
                    should_allow_poinc_authentication: J,
                    landing_company_shortcode: Z,
                    is_landing_company_loaded: Q,
                    is_proof_of_ownership_enabled: ee,
                    is_eu: te,
                    is_passkey_supported: re,
                    is_p2p_available: ne
                } = g, {
                    cashier: oe
                } = C, {
                    payment_agent: ie
                } = oe, {
                    is_payment_agent_visible: ae
                } = ie, {
                    show_eu_related_content: se,
                    setTogglePlatformType: ce
                } = S, le = (0, l.A)(), {
                    mobile_redirect_url: ue
                } = (0, u.A)(), {
                    isSuccess: de
                } = (0, d.A)(), {
                    data: _e
                } = (0, _.A)(), {
                    pathname: he
                } = (0, o.useLocation)(), me = he === p.routes.traders_hub || he.startsWith(p.routes.cashier) || he.startsWith(p.routes.account), pe = te && se && !G, ge = he === p.routes.traders_hub, fe = he.startsWith(p.routes.wallets) || he.startsWith(p.routes.wallets_compare_accounts), {
                    data: be
                } = (0, s.A)(!0), {
                    cs_chat_livechat: ye,
                    cs_chat_whatsapp: xe
                } = be, [ve, je] = n.useState(!1), [we, Oe] = n.useState(!1), [ke, Ne] = n.useState([]), [Se, Ce] = n.useState(!1), Ae = n.useRef(), Pe = (0, o.useHistory)(), {
                    subscribe: ze,
                    rest: {
                        isSubscribed: Ie
                    },
                    p2p_settings: De
                } = (0, h.A)(), {
                    isHubRedirectionEnabled: Te
                } = (0, m.A)();
                n.useEffect((() => {
                    de && !Ie && Y && ze()
                }), [de, De, ze, Ie, Y]), n.useEffect((() => () => {
                    Ae.current && (clearTimeout(Ae.current), Oe(!1), je(!1))
                }), [he]), n.useEffect((() => ((W || X) && (() => {
                    const e = (0, w.A)();
                    let t = [];
                    t = me ? $ ? [p.routes.reports, p.routes.account] : [p.routes.account, p.routes.cashier] : $ ? [p.routes.reports, p.routes.account] : [p.routes.reports, p.routes.account, p.routes.cashier], Ne(Fe(e, t))
                })(), () => clearTimeout(Ae.current))), [W, X, $, me, E, re, ne]);
                const Le = n.useCallback((() => {
                        M && B(!1), ve ? (Oe(!0), Ae.current = setTimeout((() => {
                            je(!1), Oe(!1)
                        }), 400)) : je(!ve), Ce(!1)
                    }), [Ce, ve, M, B]),
                    Ee = n.useCallback((async () => {
                        K(!0), Le(), window.location.pathname.startsWith(p.routes.phone_verification) && (U(!0), await new Promise((e => setTimeout(e, 0)))), Pe.push(p.routes.traders_hub), await q()
                    }), [Pe, q, Le]),
                    Me = n.useCallback((() => {
                        y.Analytics.trackEvent("ce_passkey_account_settings_form", {
                            action: "open",
                            form_name: "ce_passkey_account_settings_form",
                            operating_system: (0, p.getOSNameWithUAParser)()
                        })
                    }), []),
                    Fe = (e, t) => {
                        const r = e.flatMap((e => e.routes || []));
                        return t.map((t => e.find((e => e.path === t)) || r.find((e => e.path === t)))).filter((e => e))
                    };
                return (0, k.jsxs)(n.Fragment, {
                    children: [(0, k.jsx)("a", {
                        id: "dt_mobile_drawer_toggle",
                        onClick: Le,
                        className: "header__mobile-drawer-toggle",
                        children: (0, k.jsx)(c.Icon, {
                            icon: "IcHamburger",
                            width: "16px",
                            height: "16px",
                            className: "header__mobile-drawer-icon"
                        })
                    }), (0, k.jsx)(c.MobileDrawer, {
                        alignment: "left",
                        icon_class: "header__menu-toggle",
                        is_open: ve,
                        transitionExit: we,
                        toggle: Le,
                        id: "dt_mobile_drawer",
                        enableApp: L,
                        disableApp: T,
                        title: (0, k.jsx)(N, {}),
                        height: "100vh",
                        width: "295px",
                        className: "pre-appstore",
                        children: (0, k.jsx)(c.Div100vhContainer, {
                            height_offset: "40px",
                            children: (0, k.jsx)("div", {
                                className: "header__menu-mobile-body-wrapper",
                                children: (0, k.jsxs)(n.Fragment, {
                                    children: [!(ge || fe) && (0, k.jsx)(c.MobileDrawer.SubHeader, {
                                        className: a()({
                                            "dc-mobile-drawer__subheader--hidden": Se
                                        }),
                                        children: (0, k.jsx)(z.A, {
                                            app_routing_history: I,
                                            is_mobile: !0,
                                            is_landing_company_loaded: Q,
                                            is_logged_in: H,
                                            is_logging_in: V,
                                            platform_config: t,
                                            toggleDrawer: Le,
                                            current_language: D,
                                            setTogglePlatformType: ce
                                        })
                                    }), (0, k.jsxs)(c.MobileDrawer.Body, {
                                        className: ge || fe ? "no-padding" : "",
                                        children: [(0, k.jsx)("div", {
                                            className: "header__menu-mobile-platform-switcher",
                                            id: "mobile_platform_switcher"
                                        }), (0, k.jsx)(c.MobileDrawer.Item, {
                                            children: (0, k.jsx)(P.A, {
                                                link_to: (0, p.getStaticUrl)("/"),
                                                icon: "IcDerivShortLogo",
                                                text: "Deriv.com",
                                                onClickLink: Le
                                            })
                                        }), (0, k.jsx)(c.MobileDrawer.Item, {
                                            children: (0, k.jsx)(P.A, {
                                                link_to: (() => {
                                                    if (Te && $) {
                                                        const e = `https://hub.${(0,p.getDomainUrl)()}/tradershub`,
                                                            t = ((0, p.getDomainUrl)(), e),
                                                            r = window.location.search,
                                                            n = new URLSearchParams(r).get("account") || window.sessionStorage.getItem("account");
                                                        return `${t}/redirect?action=redirect_to&redirect_to=home${n?`&account=${n}`:""}`
                                                    }
                                                    return p.routes.traders_hub
                                                })(),
                                                icon: "IcAppstoreTradersHubHome",
                                                text: (0, b.localize)("Trader's Hub"),
                                                onClickLink: Le,
                                                is_active: he === p.routes.traders_hub
                                            })
                                        }), he !== p.routes.traders_hub && (0, k.jsx)(c.MobileDrawer.Item, {
                                            children: (0, k.jsx)(P.A, {
                                                link_to: p.routes.trade,
                                                icon: "IcTrade",
                                                text: (0, b.localize)("Trade"),
                                                onClickLink: Le,
                                                is_active: he === p.routes.trade
                                            })
                                        }), ke.map(((e, t) => ((e, t) => {
                                            if (e.is_authenticated && !H) return null;
                                            if (e.path === p.routes.account && ue !== p.routes.account) return (0, k.jsx)(c.MobileDrawer.Item, {
                                                children: (0, k.jsx)(P.A, {
                                                    link_to: ue,
                                                    icon: e.icon_component,
                                                    text: e.getTitle(),
                                                    onClickLink: Le
                                                })
                                            }, t);
                                            if (!e.routes) return (0, k.jsx)(c.MobileDrawer.Item, {
                                                children: (0, k.jsx)(P.A, {
                                                    link_to: e.path,
                                                    icon: e.icon_component,
                                                    text: e.getTitle(),
                                                    onClickLink: Le
                                                })
                                            }, t);
                                            const r = e.routes.some((e => e.subroutes)),
                                                n = !E || !re,
                                                o = e => /passkeys/.test(e) ? n : !!/languages/.test(e) && $;
                                            return (0, k.jsxs)(c.MobileDrawer.SubMenu, {
                                                has_subheader: !0,
                                                submenu_icon: e.icon_component,
                                                submenu_title: e.getTitle(),
                                                submenu_suffix_icon: "IcChevronRight",
                                                onToggle: Ce,
                                                route_config_path: e.path,
                                                children: [!r && e.routes.map(((e, t) => {
                                                    if (!e.is_invisible && (e.path !== p.routes.cashier_pa || ae) && (e.path !== p.routes.cashier_pa_transfer || _e) && (e.path !== p.routes.cashier_p2p || ne) && (e.path !== p.routes.cashier_acc_transfer || le)) return (0, k.jsx)(c.MobileDrawer.Item, {
                                                        children: (0, k.jsx)(P.A, {
                                                            link_to: e.path,
                                                            icon: e.icon_component,
                                                            text: e.getTitle(),
                                                            onClickLink: Le
                                                        })
                                                    }, t)
                                                })), r && e.routes.map(((e, t) => e.subroutes ? (0, k.jsx)(c.MobileDrawer.SubMenuSection, {
                                                    section_icon: e.icon,
                                                    section_title: e.getTitle(),
                                                    children: e.subroutes.map(((e, t) => {
                                                        return (0, k.jsx)(P.A, {
                                                            is_disabled: (r = e.path, (/financial-assessment/.test(r) ? G : /trading-assessment/.test(r) ? G || "maltainvest" !== Z : /proof-of-address/.test(r) || /proof-of-identity/.test(r) ? !X : /proof-of-income/.test(r) ? !J : !!/proof-of-ownership/.test(r) && (G || !ee)) || e.is_disabled),
                                                            link_to: e.path,
                                                            text: e.getTitle(),
                                                            onClickLink: () => {
                                                                Le(), e.path === p.routes.passkeys && Me()
                                                            },
                                                            is_hidden: o(e.path)
                                                        }, t);
                                                        var r
                                                    }))
                                                }, t) : (0, k.jsx)(c.MobileDrawer.Item, {
                                                    children: (0, k.jsx)(P.A, {
                                                        link_to: e.path,
                                                        icon: e.icon_component,
                                                        text: e.getTitle(),
                                                        onClickLink: Le
                                                    })
                                                }, t)))]
                                            }, t)
                                        })(e, t))), !$ && (0, k.jsx)(c.MobileDrawer.Item, {
                                            className: "header__menu-mobile-theme",
                                            onClick: e => {
                                                e.preventDefault(), R(!F)
                                            },
                                            children: (0, k.jsxs)("div", {
                                                className: a()("header__menu-mobile-link"),
                                                children: [(0, k.jsx)(c.Icon, {
                                                    className: "header__menu-mobile-link-icon",
                                                    icon: "IcTheme"
                                                }), (0, k.jsx)("span", {
                                                    className: "header__menu-mobile-link-text",
                                                    children: (0, b.localize)("Dark theme")
                                                }), (0, k.jsx)(c.ToggleSwitch, {
                                                    id: "dt_mobile_drawer_theme_toggler",
                                                    handleToggle: () => R(!F),
                                                    is_enabled: F
                                                })]
                                            })
                                        }), (0, k.jsx)(c.MobileDrawer.Item, {
                                            className: a()({
                                                "header__menu-mobile-theme": Re
                                            }),
                                            children: (0, k.jsx)(P.A, {
                                                link_to: (0, p.getStaticUrl)("/help-centre"),
                                                icon: "IcHelpCentre",
                                                text: (0, b.localize)("Help centre"),
                                                onClickLink: Le
                                            })
                                        }), H ? (0, k.jsxs)(n.Fragment, {
                                            children: [(0, k.jsx)(c.MobileDrawer.Item, {
                                                className: pe ? "" : "header__menu-mobile-theme--trader-hub",
                                                children: (0, k.jsx)(P.A, {
                                                    link_to: (0, p.getStaticUrl)("/responsible"),
                                                    icon: "IcVerification",
                                                    text: (0, b.localize)("Responsible trading"),
                                                    onClickLink: Le
                                                })
                                            }), pe && (0, k.jsx)(c.MobileDrawer.Item, {
                                                className: "header__menu-mobile-theme--trader-hub",
                                                children: (0, k.jsx)(P.A, {
                                                    link_to: (0, p.getStaticUrl)("/regulatory"),
                                                    icon: "IcRegulatoryInformation",
                                                    text: (0, b.localize)("Regulatory information"),
                                                    onClickLink: Le
                                                })
                                            })]
                                        }) : (0, k.jsx)(c.MobileDrawer.Item, {
                                            className: "header__menu-mobile-theme--trader-hub",
                                            children: (0, k.jsx)(P.A, {
                                                link_to: (0, p.getStaticUrl)("/responsible"),
                                                icon: "IcVerification",
                                                text: (0, b.localize)("Responsible trading"),
                                                onClickLink: Le
                                            })
                                        }), xe && (0, k.jsx)(c.MobileDrawer.Item, {
                                            className: "header__menu-mobile-whatsapp",
                                            children: (0, k.jsx)(v.A, {
                                                onClick: Le
                                            })
                                        }), ye && (0, k.jsx)(c.MobileDrawer.Item, {
                                            className: "header__menu-mobile-livechat",
                                            children: (0, k.jsx)(x.A, {})
                                        }), H && (0, k.jsx)(c.MobileDrawer.Item, {
                                            onClick: Ee,
                                            className: "dc-mobile-drawer__item",
                                            children: (0, k.jsx)(P.A, {
                                                icon: "IcLogout",
                                                text: (0, b.localize)("Log out")
                                            })
                                        })]
                                    }), (0, k.jsxs)(c.MobileDrawer.Footer, {
                                        className: H ? "dc-mobile-drawer__footer--servertime" : "",
                                        children: [(0, k.jsx)(O.A, {
                                            is_mobile: !0
                                        }), (0, k.jsx)(j.Ay, {
                                            is_mobile: !0
                                        })]
                                    }), M && (0, k.jsx)(A, {
                                        expandSubMenu: Ce,
                                        toggleDrawer: Le
                                    })]
                                })
                            })
                        })
                    })]
                });
                var Re
            }));
            I.displayName = "ToggleMenuDrawer";
            const D = I
        },
        332996: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => w
            });
            var n = r(255530),
                o = r.n(n),
                i = r(286326),
                a = r(592353),
                s = r(557344),
                c = r(281476),
                l = r(500309),
                u = r(414646),
                d = r(33118),
                _ = r(919796),
                h = r(836870);
            const m = () => (0, h.jsx)("div", {
                    className: "notifications-empty__container",
                    children: (0, h.jsxs)("div", {
                        className: "notifications-empty",
                        children: [(0, h.jsx)(a.Icon, {
                            data_testid: "dt_ic_box_icon",
                            icon: "IcBox",
                            className: "notifications-empty__icon",
                            size: 64,
                            color: "secondary"
                        }), (0, h.jsxs)("div", {
                            className: "notifications-empty__content",
                            children: [(0, h.jsx)(a.Text, {
                                as: "h4",
                                size: "xs",
                                weight: "bold",
                                align: "center",
                                color: "less-prominent",
                                className: "notifications-empty__header",
                                children: (0, h.jsx)(d.Localize, {
                                    i18n_default_text: "No notifications"
                                })
                            }), (0, h.jsx)(a.Text, {
                                size: "xxs",
                                color: "less-prominent",
                                align: "center",
                                children: (0, h.jsx)(d.Localize, {
                                    i18n_default_text: "You have yet to receive any notifications"
                                })
                            })]
                        })]
                    })
                }),
                p = (0, l.observer)((e => {
                    let {
                        clearNotifications: t
                    } = e;
                    const {
                        notifications: r,
                        ui: n
                    } = (0, u.A)(), {
                        is_notifications_empty: s
                    } = r, {
                        is_mobile: c
                    } = n;
                    return (0, h.jsxs)(i.Fragment, {
                        children: [(0, h.jsx)("div", {
                            className: "notifications-dialog__separator"
                        }), (0, h.jsx)("div", {
                            "data-testid": "dt_clear_all_footer_button",
                            className: o()("notifications-dialog__footer", {
                                "notifications-dialog__content--empty": s,
                                "notifications-dialog__content--sticky": c
                            }),
                            children: (0, h.jsx)(a.Button, {
                                className: o()("dc-btn--secondary", "notifications-dialog__clear"),
                                disabled: s,
                                onClick: t,
                                children: (0, h.jsx)(a.Text, {
                                    size: "xxs",
                                    color: "prominent",
                                    weight: "bold",
                                    children: (0, h.jsx)(d.Localize, {
                                        i18n_default_text: "Clear All"
                                    })
                                })
                            })
                        })]
                    })
                }));
            var g = r(504377),
                f = r(852691),
                b = r(291218);
            const y = (0, l.observer)((() => {
                    const {
                        notifications: e
                    } = (0, u.A)(), {
                        notifications: t,
                        toggleNotificationsModal: r
                    } = e, n = (0, b.useHistory)(), s = e => {
                        const {
                            type: t
                        } = e;
                        return ["contract_sold", "info", "news", "promotions"].includes(t) ? "IcAlertInfo" : `IcAlert${(0,g.toTitleCase)(t)}`
                    }, l = e => {
                        switch (["action", "secondary_btn", "cta_btn", "primary_btn"].find((t => !(0, g.isEmptyObject)(e[t])))) {
                            case "primary_btn":
                                return e.primary_btn;
                            case "cta_btn":
                                return e.cta_btn;
                            case "secondary_btn":
                                return e.secondary_btn;
                            case "action":
                                return e.action;
                            default:
                                return
                        }
                    }, d = e => {
                        c.Analytics.trackEvent("ce_notification_form", {
                            action: "click_cta",
                            form_name: "ce_notification_form",
                            notification_key: e
                        })
                    }, _ = t.filter((e => !e.only_toast_message));
                    return (0, h.jsx)(i.Fragment, {
                        children: _.length > 0 ? _.map((e => {
                            var t, c, u, _, m;
                            return (0, h.jsxs)("div", {
                                className: "notifications-item",
                                children: [(0, h.jsxs)(a.Text, {
                                    as: "h2",
                                    className: "notifications-item__title",
                                    weight: "bold",
                                    size: "xs",
                                    color: "prominent",
                                    children: [e.type && (0, h.jsx)(a.Icon, {
                                        icon: s(e),
                                        className: o()("notifications-item__title-icon", {
                                            [`notifications-item__title-icon--${e.type}`]: e.type
                                        })
                                    }), e.header]
                                }), (0, h.jsx)("div", {
                                    className: "notifications-item__message",
                                    children: e.message
                                }), (0, h.jsx)("div", {
                                    className: "notifications-item__action",
                                    children: !!l(e) && (0, h.jsx)(i.Fragment, {
                                        children: null === (t = l(e)) || void 0 === t || !t.route || null !== (c = l(e)) && void 0 !== c && c.onClick ? (0, h.jsx)(a.Button, {
                                            className: o()("dc-btn--secondary", "notifications-item__cta-button"),
                                            onClick: () => {
                                                var t, r, o;
                                                (null === (t = l(e)) || void 0 === t || t.onClick(), d(e.key), null !== (r = l(e)) && void 0 !== r && r.route) && n.push(null === (o = l(e)) || void 0 === o ? void 0 : o.route)
                                            },
                                            children: (0, h.jsx)(a.Text, {
                                                weight: "bold",
                                                size: "xxs",
                                                children: null === (m = l(e)) || void 0 === m ? void 0 : m.text
                                            })
                                        }) : (0, h.jsx)(f.Sm, {
                                            onClick: () => {
                                                const t = l(e);
                                                null != t && t.onClick && t.onClick(), r(), d(e.key)
                                            },
                                            active_class: "notifications-item",
                                            className: o()("dc-btn", "dc-btn--secondary", "notifications-item__cta-button"),
                                            to: null === (u = l(e)) || void 0 === u ? void 0 : u.route,
                                            children: (0, h.jsx)(a.Text, {
                                                weight: "bold",
                                                size: "xxs",
                                                children: null === (_ = l(e)) || void 0 === _ ? void 0 : _.text
                                            })
                                        })
                                    })
                                })]
                            }, e.key)
                        })) : (0, h.jsx)(m, {})
                    })
                })),
                x = i.forwardRef(((e, t) => {
                    let {
                        clearNotifications: r
                    } = e;
                    const {
                        notifications: n,
                        ui: i
                    } = (0, u.A)(), {
                        is_notifications_empty: s
                    } = n, {
                        is_mobile: c
                    } = i;
                    return (0, h.jsxs)("div", {
                        "data-testid": "dt_notifications_list_wrapper",
                        className: "notifications-dialog",
                        ref: t,
                        children: [(0, h.jsx)("div", {
                            className: "notifications-dialog__header",
                            children: (0, h.jsx)(a.Text, {
                                as: "h2",
                                className: "notifications-dialog__header-text",
                                weight: "bold",
                                color: "prominent",
                                styles: {
                                    lineHeight: "1.6rem"
                                },
                                children: (0, h.jsx)(d.Localize, {
                                    i18n_default_text: "Notifications"
                                })
                            })
                        }), (0, h.jsx)("div", {
                            className: o()("notifications-dialog__content", {
                                "notifications-dialog__content--empty": s
                            }),
                            children: (0, h.jsx)(a.ThemedScrollbars, {
                                is_bypassed: c || s,
                                children: s ? (0, h.jsx)(m, {}) : (0, h.jsx)(y, {})
                            })
                        }), (0, h.jsx)(p, {
                            clearNotifications: r
                        })]
                    })
                }));
            x.displayName = "NotificationListWrapper";
            const v = (0, l.observer)(x),
                j = (0, l.observer)((() => {
                    const {
                        client: e,
                        notifications: t
                    } = (0, u.A)(), {
                        loginid: r
                    } = e, {
                        is_notifications_visible: n,
                        notifications: o,
                        removeNotifications: l,
                        removeNotificationMessage: m,
                        removeNotificationMessageByKey: p,
                        toggleNotificationsModal: g
                    } = t, f = i.useRef(null), {
                        isMobile: b
                    } = (0, _.Y)(), y = () => {
                        c.Analytics.trackEvent("ce_notification_form", {
                            action: "clear_all",
                            form_name: "ce_notification_form",
                            notification_num: o.length
                        }), o.forEach((e => {
                            let {
                                key: t,
                                should_show_again: r
                            } = e;
                            p({
                                key: t
                            }), m({
                                key: t,
                                should_show_again: r
                            }), l(!0)
                        }))
                    };
                    return (0, a.useOnClickOutside)(f, (e => {
                        var t, r;
                        const o = !(null != e && null !== (t = e.target) && void 0 !== t && t.classList.contains("notifications-toggle__icon-wrapper"));
                        null != f && null !== (r = f.current) && void 0 !== r && r.contains(e.target) || !n || !o || g()
                    })), b ? (0, h.jsx)(a.MobileDialog, {
                        portal_element_id: "modal_root",
                        title: (0, h.jsx)(d.Localize, {
                            i18n_default_text: "Notifications"
                        }),
                        wrapper_classname: "notifications-mobile-dialog",
                        visible: n,
                        onClose: g,
                        children: (0, h.jsx)(v, {
                            clearNotifications: y,
                            ref: f
                        })
                    }) : (0, h.jsx)(s.A, { in: n,
                        classNames: {
                            enter: "notifications-dialog--enter",
                            enterDone: "notifications-dialog--enter-done",
                            exit: "notifications-dialog--exit"
                        },
                        timeout: 150,
                        unmountOnExit: !0,
                        children: (0, h.jsx)(v, {
                            clearNotifications: y,
                            ref: f
                        })
                    })
                })),
                w = e => {
                    let {
                        count: t,
                        is_visible: r,
                        toggleDialog: n,
                        tooltip_message: i,
                        should_disable_pointer_events: s = !1,
                        showPopover: c = !0
                    } = e;
                    const {
                        isMobile: l
                    } = (0, _.Y)(), u = (0, h.jsxs)("div", {
                        className: o()("notifications-toggle__icon-wrapper", {
                            "notifications-toggle__icon-wrapper--active": r
                        }),
                        onClick: n,
                        children: [(0, h.jsx)(a.Icon, {
                            className: "notifications-toggle__icon",
                            icon: "IcBell"
                        }), !!t && (0, h.jsx)(a.Counter, {
                            count: t,
                            className: "notifications-toggle__step"
                        })]
                    });
                    return l ? (0, h.jsxs)("div", {
                        className: o()("notifications-toggle", {
                            "notifications-toggle--active": r
                        }),
                        children: [u, (0, h.jsx)(j, {
                            is_visible: r,
                            toggleDialog: n
                        })]
                    }) : (0, h.jsxs)("div", {
                        className: o()("notifications-toggle", {
                            "notifications-toggle--active": r
                        }),
                        children: [c ? (0, h.jsx)(a.Popover, {
                            classNameBubble: "notifications-toggle__tooltip",
                            alignment: "bottom",
                            message: i,
                            should_disable_pointer_events: s,
                            zIndex: "9999",
                            children: u
                        }) : u, (0, h.jsx)(j, {
                            is_visible: r,
                            toggleDialog: n
                        })]
                    })
                }
        },
        564702: (e, t, r) => {
            "use strict";
            r.d(t, {
                $: () => U
            });
            var n = r(286326),
                o = r(291218),
                i = r(504377),
                a = r(592353),
                s = r(391049),
                c = r(317691),
                l = r(919796),
                u = r(33118),
                d = r(500309),
                _ = r(414646),
                h = r(357076),
                m = r(514378),
                p = r(332996),
                g = r(836870);
            const f = (0, d.observer)((() => {
                const e = (0, o.useHistory)(),
                    {
                        ui: t
                    } = (0, _.A)(),
                    {
                        is_dark_mode_on: r,
                        is_mobile: n,
                        setIsWalletsOnboardingTourGuideVisible: s
                    } = t,
                    c = (0, g.jsx)(a.Icon, {
                        data_testid: "dt_traders_hub_onboarding_icon",
                        icon: r ? "IcAppstoreTradingHubOnboardingDark" : "IcAppstoreTradingHubOnboarding",
                        size: 20,
                        onClick: () => {
                            s(!0), e.location.pathname !== i.routes.traders_hub && e.push(i.routes.traders_hub)
                        }
                    });
                return (0, g.jsx)("div", {
                    "data-testid": "dt_traders_hub_onboarding",
                    className: "traders-hub-onboarding__toggle",
                    children: i.isTabletOs ? c : (0, g.jsx)(a.Popover, {
                        classNameBubble: "account-settings-toggle__tooltip",
                        alignment: "bottom",
                        message: !n && (0, g.jsx)(u.Localize, {
                            i18n_default_text: "View tutorial"
                        }),
                        should_disable_pointer_events: !0,
                        zIndex: "9999",
                        children: c
                    })
                })
            }));
            var b = r(255530),
                y = r.n(b),
                x = r(557344),
                v = r(159859),
                j = r(298497);
            const w = e => {
                    var t;
                    let {
                        is_demo: r,
                        label: n
                    } = e;
                    return r ? (0, g.jsx)(a.Badge, {
                        type: "contained",
                        background_color: "blue",
                        label: (0, u.localize)("Demo"),
                        custom_color: "colored-background"
                    }) : (0, g.jsx)(a.Badge, {
                        type: "bordered",
                        label: null !== (t = null == n ? void 0 : n.toUpperCase()) && void 0 !== t ? t : ""
                    })
                },
                O = (0, d.observer)((e => {
                    var t, r;
                    let {
                        closeAccountsDialog: n,
                        account: o,
                        show_badge: s = !1
                    } = e;
                    const {
                        currency: c,
                        dtrade_loginid: l,
                        dtrade_balance: d,
                        gradients: h,
                        icons: m,
                        is_virtual: p,
                        loginid: f,
                        landing_company_name: b,
                        icon_type: x
                    } = o, {
                        ui: {
                            is_dark_mode_on: v
                        },
                        client: {
                            switchAccount: j,
                            loginid: O,
                            is_eu: k
                        }
                    } = (0, _.A)(), N = v ? "dark" : "light", S = v ? "IcWalletOptionsDark" : "IcWalletOptionsLight", C = l === O, A = async () => {
                        n(), C || (await j(l), localStorage.setItem("active_wallet_loginid", f), sessionStorage.setItem("active_wallet_loginid", f))
                    };
                    return (0, g.jsxs)("div", {
                        className: y()("acc-switcher-wallet-item__container", {
                            "acc-switcher-wallet-item__container--active": C
                        }),
                        "data-testid": "account-switcher-wallet-item",
                        onClick: A,
                        role: "button",
                        onKeyDown: e => {
                            "Enter" === e.key && A()
                        },
                        children: [(0, g.jsx)("div", {
                            children: (0, g.jsx)(a.AppLinkedWithWalletIcon, {
                                app_icon: S,
                                gradient_class: null !== (t = null == h ? void 0 : h.card[N]) && void 0 !== t ? t : "",
                                type: x,
                                wallet_icon: null !== (r = null == m ? void 0 : m[N]) && void 0 !== r ? r : "",
                                hide_watermark: !0
                            })
                        }), (0, g.jsxs)("div", {
                            className: "acc-switcher-wallet-item__content",
                            children: [(0, g.jsx)(a.Text, {
                                size: "xxxs",
                                children: k ? (0, g.jsx)(u.Localize, {
                                    i18n_default_text: "Multipliers"
                                }) : (0, g.jsx)(u.Localize, {
                                    i18n_default_text: "Options"
                                })
                            }), (0, g.jsx)(a.Text, {
                                size: "xxxs",
                                children: p ? (0, g.jsx)(u.Localize, {
                                    i18n_default_text: "Demo Wallet"
                                }) : (0, g.jsx)(u.Localize, {
                                    i18n_default_text: "{{currency}} Wallet",
                                    values: {
                                        currency: (0, i.getCurrencyDisplayCode)(c)
                                    }
                                })
                            }), (0, g.jsx)(a.Text, {
                                size: "xs",
                                weight: "bold",
                                children: `${(0,i.formatMoney)(c||"",d||0,!0)} ${(0,i.getCurrencyDisplayCode)(c)}`
                            })]
                        }), s && (0, g.jsx)(w, {
                            is_demo: Boolean(p),
                            label: b
                        })]
                    })
                })),
                k = e => {
                    let {
                        wallets: t,
                        closeAccountsDialog: r
                    } = e;
                    const n = [...t || []].sort(((e, t) => {
                        if (e.is_virtual || t.is_virtual) return e.is_virtual ? 1 : -1;
                        const r = e.dtrade_balance || 0;
                        return (t.dtrade_balance || 0) - r
                    }));
                    return (0, g.jsx)("div", {
                        className: "account-switcher-wallet-list",
                        children: null == n ? void 0 : n.map((e => e.is_dtrader_account_disabled ? null : (0, g.jsx)(O, {
                            account: e,
                            closeAccountsDialog: r,
                            show_badge: null == e ? void 0 : e.is_virtual
                        }, e.dtrade_loginid)))
                    })
                },
                N = (0, d.observer)((e => {
                    let {
                        is_visible: t,
                        toggle: r
                    } = e;
                    const {
                        data: s
                    } = (0, v.A)(), l = null == s ? void 0 : s.filter((e => e.dtrade_loginid)), d = (0, o.useHistory)(), _ = n.useRef(null), {
                        isHubRedirectionEnabled: h
                    } = (0, c.A)(), m = window.location.search, p = new URLSearchParams(m).get("account") || window.sessionStorage.getItem("account"), f = n.useCallback((() => {
                        r(!1)
                    }), [r]);
                    (0, a.useOnClickOutside)(_, f, (e => {
                        const r = e => {
                            var t;
                            if (null != e && null !== (t = e.classList) && void 0 !== t && t.contains("acc-info__wallets")) return !0;
                            const n = null == e ? void 0 : e.parentNode;
                            return !!n && r(n)
                        };
                        return t && !r(e.target)
                    }));
                    return (0, g.jsxs)("div", {
                        className: "account-switcher-wallet",
                        ref: _,
                        children: [(0, g.jsx)("div", {
                            className: "account-switcher-wallet__header",
                            children: (0, g.jsx)(a.Text, {
                                as: "h4",
                                weight: "bold",
                                size: "xs",
                                children: (0, g.jsx)(u.Localize, {
                                    i18n_default_text: "Options accounts"
                                })
                            })
                        }), (0, g.jsx)(a.ThemedScrollbars, {
                            height: 450,
                            children: (0, g.jsx)(k, {
                                wallets: l,
                                closeAccountsDialog: f
                            })
                        }), (0, g.jsxs)("button", {
                            className: "account-switcher-wallet__looking-for-cfds",
                            onClick: async () => {
                                h ? window.location.assign(`${i.platforms.tradershub_os.url}/redirect?action=redirect_to&redirect_to=cfds${p?`&account=${p}`:""}`) : (f(), d.push(i.routes.traders_hub))
                            },
                            type: "button",
                            children: [(0, g.jsx)(a.Text, {
                                size: "xs",
                                line_height: "xl",
                                children: (0, g.jsx)(u.Localize, {
                                    i18n_default_text: "Looking for CFDs? Go to Trader’s Hub"
                                })
                            }), (0, g.jsx)(a.Icon, {
                                data_testid: "dt_go_to_arrow",
                                icon: "IcChevronDownBold",
                                className: "account-switcher-wallet__arrow"
                            })]
                        })]
                    })
                }));
            var S = r(768429);
            const C = (0, d.observer)((e => {
                let {
                    is_visible: t,
                    toggle: r,
                    loginid: s
                } = e;
                const l = (0, o.useHistory)(),
                    d = (0, S.A)(),
                    {
                        data: _
                    } = (0, v.A)(),
                    h = null == _ ? void 0 : _.filter((e => e.dtrade_loginid)),
                    {
                        isHubRedirectionEnabled: m
                    } = (0, c.A)(),
                    p = n.useCallback((() => {
                        r(!1)
                    }), [r]),
                    f = (0, g.jsxs)(n.Fragment, {
                        children: [(0, g.jsx)("hr", {
                            className: "account-switcher-wallet-mobile__divider"
                        }), (0, g.jsxs)("button", {
                            className: "account-switcher-wallet-mobile__footer",
                            onClick: () => {
                                const e = window.location.search,
                                    t = new URLSearchParams(e).get("account") || window.sessionStorage.getItem("account");
                                m ? window.location.assign(`${i.platforms.tradershub_os.url}/redirect?action=redirect_to&redirect_to=cfds${t?`&account=${t}`:""}`) : (p(), l.push(i.routes.traders_hub))
                            },
                            type: "button",
                            children: [(0, g.jsx)(a.Text, {
                                weight: "normal",
                                size: "xs",
                                children: (0, g.jsx)(u.Localize, {
                                    i18n_default_text: "Looking for CFDs? Go to Trader’s Hub"
                                })
                            }), (0, g.jsx)(a.Icon, {
                                icon: d ? "IcChevronLeftBold" : "IcChevronRightBold"
                            })]
                        })]
                    });
                return (0, g.jsx)(a.MobileDialog, {
                    portal_element_id: "deriv_app",
                    footer: f,
                    visible: t,
                    onClose: p,
                    has_close_icon: !0,
                    has_full_height: !0,
                    title: (0, g.jsx)(u.Localize, {
                        i18n_default_text: "Options accounts"
                    }),
                    children: (0, g.jsxs)("div", {
                        className: "account-switcher-wallet-mobile",
                        children: [(0, g.jsx)(k, {
                            wallets: h,
                            closeAccountsDialog: p
                        }), (0, g.jsx)(a.Button, {
                            className: "account-switcher-wallet-mobile__button",
                            has_effect: !0,
                            primary: !0,
                            large: !0,
                            onClick: () => {
                                if (p(), m) {
                                    const e = `https://hub.${(0,i.getDomainUrl)()}/tradershub`,
                                        t = ((0, i.getDomainUrl)(), e),
                                        r = window.location.search,
                                        n = new URLSearchParams(r),
                                        o = window.sessionStorage.getItem("account") || n.get("account");
                                    window.location.href = `${t}/redirect?action=redirect_to&redirect_to=wallet${o?`&account=${o}`:""}`
                                } else {
                                    var e;
                                    l.push(i.routes.wallets_transfer, {
                                        toAccountLoginId: s,
                                        is_from_dtrader: null === (e = window.location.pathname) || void 0 === e ? void 0 : e.includes("dtrader")
                                    })
                                }
                            },
                            children: (0, g.jsx)(u.Localize, {
                                i18n_default_text: "Manage funds"
                            })
                        })]
                    })
                })
            }));
            var A = r(766475),
                P = r(141929);
            const z = e => {
                    let {
                        is_disabled: t = !1
                    } = e;
                    return t ? (0, g.jsx)(a.Icon, {
                        data_testid: "dt_lock_icon",
                        icon: "IcLock"
                    }) : (0, g.jsx)(a.Icon, {
                        data_testid: "dt_select_arrow",
                        icon: "IcChevronDownBold",
                        className: "acc-info__select-arrow"
                    })
                },
                I = e => {
                    let {
                        balance: t,
                        currency: r,
                        is_virtual: n,
                        display_code: o
                    } = e;
                    return void 0 === t && r ? null : (0, g.jsx)("div", {
                        className: "acc-info__wallets-account-type-and-balance",
                        children: (0, g.jsx)(a.Text, {
                            as: "p",
                            "data-testid": "dt_balance",
                            className: y()("acc-info__balance acc-info__wallets-balance", {
                                "acc-info__balance--no-currency": !r && !n
                            }),
                            children: r ? `${(0,i.formatMoney)(r,null!=t?t:0,!0)} ${o}` : (0, g.jsx)(u.Localize, {
                                i18n_default_text: "No currency assigned"
                            })
                        })
                    })
                },
                D = (0, d.observer)((e => {
                    var t, r;
                    let {
                        gradients: n,
                        icons: o,
                        icon_type: i
                    } = e;
                    const {
                        ui: {
                            is_dark_mode_on: s
                        }
                    } = (0, _.A)(), c = s ? "dark" : "light", l = s ? "IcWalletOptionsDark" : "IcWalletOptionsLight";
                    return (0, g.jsx)("div", {
                        className: "acc-info__wallets-container",
                        children: (0, g.jsx)(a.AppLinkedWithWalletIcon, {
                            app_icon: l,
                            gradient_class: null !== (t = null == n ? void 0 : n.card[c]) && void 0 !== t ? t : "",
                            size: "small",
                            type: i,
                            wallet_icon: null !== (r = null == o ? void 0 : o[c]) && void 0 !== r ? r : "",
                            hide_watermark: !0
                        })
                    })
                })),
                T = (0, d.observer)((e => {
                    var t;
                    let {
                        gradients: r,
                        icons: n,
                        icon_type: o
                    } = e;
                    const {
                        ui: i
                    } = (0, _.A)(), {
                        is_dark_mode_on: s
                    } = i, c = s ? "dark" : "light";
                    return (0, g.jsxs)("div", {
                        className: "acc-info__wallets-container",
                        children: [(0, g.jsx)(a.Icon, {
                            icon: s ? "IcWalletOptionsDark" : "IcWalletOptionsLight",
                            size: 24,
                            data_testid: "dt_ic_wallet_options"
                        }), (0, g.jsx)(a.WalletIcon, {
                            icon: null !== (t = null == n ? void 0 : n[c]) && void 0 !== t ? t : "",
                            type: o,
                            gradient_class: null == r ? void 0 : r.card[c],
                            size: "small",
                            has_bg: !0,
                            hide_watermark: !0
                        })]
                    })
                })),
                L = (0, d.observer)((e => {
                    var t;
                    let {
                        is_dialog_on: r,
                        toggleDialog: n
                    } = e;
                    const {
                        client: o,
                        ui: a
                    } = (0, _.A)(), {
                        switchAccount: s,
                        is_logged_in: c,
                        loginid: u,
                        accounts: d
                    } = o, {
                        account_switcher_disabled_message: h
                    } = a, {
                        data: m
                    } = (0, v.A)(), p = (0, j.A)(), {
                        isDesktop: f
                    } = (0, l.Y)(), b = null == d ? void 0 : d[null != u ? u : ""], O = sessionStorage.getItem("active_wallet_loginid") || localStorage.getItem("active_wallet_loginid"), k = null !== (t = null == m ? void 0 : m.find((e => e.loginid === O))) && void 0 !== t ? t : null == m ? void 0 : m.find((e => e.loginid === u));
                    let S = u;
                    var L;
                    k && (S = sessionStorage.getItem("active_loginid") || k.dtrade_loginid || (null === (L = p.dtrade) || void 0 === L || null === (L = L[0]) || void 0 === L ? void 0 : L.loginid), S && S !== u && s(S));
                    const E = null == m ? void 0 : m.find((e => e.dtrade_loginid === S));
                    if (!E) return (0, g.jsx)(A.sk, {
                        is_logged_in: c,
                        is_mobile: !f,
                        speed: 3
                    });
                    const M = E.is_virtual;
                    return (0, g.jsxs)("div", {
                        className: "acc-info__wrapper",
                        children: [f && (0, g.jsx)("div", {
                            className: "acc-info__separator"
                        }), (0, g.jsx)(P.A, {
                            is_mobile: !f,
                            is_disabled: Boolean(null == b ? void 0 : b.is_disabled),
                            disabled_message: h,
                            children: (0, g.jsxs)("div", {
                                "data-testid": "dt_acc_info",
                                id: "dt_core_account-info_acc-info",
                                className: y()("acc-info acc-info__wallets", {
                                    "acc-info--show": r,
                                    "acc-info--is-disabled": null == b ? void 0 : b.is_disabled
                                }),
                                onClick: null != b && b.is_disabled ? void 0 : () => n(),
                                onKeyDown: null != b && b.is_disabled ? void 0 : () => n(),
                                children: [f ? (0, g.jsx)(T, {
                                    gradients: E.gradients,
                                    icons: E.icons,
                                    icon_type: E.icon_type
                                }) : (0, g.jsx)(D, {
                                    gradients: E.gradients,
                                    icons: E.icons,
                                    icon_type: E.icon_type
                                }), (0, g.jsx)(I, {
                                    balance: null == b ? void 0 : b.balance,
                                    currency: null == b ? void 0 : b.currency,
                                    is_virtual: Boolean(null == b ? void 0 : b.is_virtual),
                                    display_code: (0, i.getCurrencyDisplayCode)(null == b ? void 0 : b.currency)
                                }), M && (0, g.jsx)(w, {
                                    is_demo: Boolean(null == E ? void 0 : E.is_virtual),
                                    label: null == E ? void 0 : E.landing_company_name
                                }), (0, g.jsx)(z, {
                                    is_disabled: Boolean(null == b ? void 0 : b.is_disabled)
                                })]
                            })
                        }), (0, g.jsx)("div", {
                            className: "acc-info__separator"
                        }), f ? (0, g.jsx)(x.A, { in: r,
                            timeout: 200,
                            classNames: {
                                enter: "acc-switcher__wrapper--enter",
                                enterDone: "acc-switcher__wrapper--enter-done",
                                exit: "acc-switcher__wrapper--exit"
                            },
                            unmountOnExit: !0,
                            children: (0, g.jsx)("div", {
                                className: "acc-switcher__wrapper acc-switcher__wrapper--wallets",
                                children: (0, g.jsx)(N, {
                                    is_visible: r,
                                    toggle: n
                                })
                            })
                        }) : (0, g.jsx)(C, {
                            is_visible: r,
                            toggle: n,
                            loginid: u
                        })]
                    })
                })),
                E = () => {
                    const {
                        redirect_url: e
                    } = (0, s.A)(), t = (0, g.jsx)("a", {
                        className: "account-settings-toggle",
                        href: e,
                        children: (0, g.jsx)(a.Icon, {
                            icon: "IcUserOutline"
                        })
                    });
                    return i.isTabletOs ? t : (0, g.jsx)(a.Popover, {
                        classNameBubble: "account-settings-toggle__tooltip",
                        alignment: "bottom",
                        message: (0, g.jsx)(u.Localize, {
                            i18n_default_text: "Manage account settings"
                        }),
                        should_disable_pointer_events: !0,
                        zIndex: "9999",
                        children: t
                    })
                },
                M = e => {
                    let {
                        count: t,
                        is_visible: r,
                        toggleDialog: n,
                        is_mobile: o = !1
                    } = e;
                    return (0, g.jsx)(p.A, {
                        count: t,
                        is_visible: r,
                        toggleDialog: n,
                        tooltip_message: o ? void 0 : (0, g.jsx)(u.Localize, {
                            i18n_default_text: "View notifications"
                        }),
                        should_disable_pointer_events: !o,
                        showPopover: !o && !i.isTabletOs
                    })
                },
                F = e => {
                    let {
                        openRealAccountSignup: t
                    } = e;
                    return (0, g.jsx)("div", {
                        className: "set-currency",
                        children: (0, g.jsx)(a.Button, {
                            onClick: () => t("set_currency"),
                            has_effect: !0,
                            type: "button",
                            text: (0, u.localize)("Set currency"),
                            primary: !0
                        })
                    })
                },
                R = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, g.jsx)(a.Button, {
                        className: "acc-info__button",
                        has_effect: !0,
                        text: (0, u.localize)("Manage funds"),
                        onClick: t,
                        primary: !0
                    })
                },
                B = () => (0, g.jsxs)(g.Fragment, {
                    children: [(0, g.jsx)(h.M, {
                        className: "acc-info__button"
                    }), (0, g.jsx)(m.X, {
                        className: "acc-info__button"
                    })]
                }),
                U = (0, d.observer)((e => {
                    let {
                        is_traders_hub_routes: t
                    } = e;
                    const {
                        client: r,
                        ui: n,
                        notifications: a
                    } = (0, _.A)(), {
                        is_logged_in: s,
                        accounts: u,
                        loginid: d,
                        has_wallet: h
                    } = r, {
                        openRealAccountSignup: m,
                        toggleAccountsDialog: p,
                        is_accounts_switcher_on: b
                    } = n, {
                        isDesktop: y
                    } = (0, l.Y)(), {
                        isHubRedirectionEnabled: x
                    } = (0, c.A)(), {
                        is_notifications_visible: v,
                        notifications: j,
                        toggleNotificationsModal: w
                    } = a, O = null == j ? void 0 : j.length, k = null == u ? void 0 : u[null != d ? d : ""], N = null == k ? void 0 : k.is_virtual, S = null == k ? void 0 : k.currency, C = y && !t && !N && !S, A = y && !t && S, P = (0, o.useHistory)();
                    return s ? (0, g.jsxs)(g.Fragment, {
                        children: [C && (0, g.jsx)(F, {
                            openRealAccountSignup: m
                        }), A && (0, g.jsx)(R, {
                            onClick: () => {
                                if (x) {
                                    const e = `https://hub.${(0,i.getDomainUrl)()}/tradershub`,
                                        t = ((0, i.getDomainUrl)(), e),
                                        r = window.location.search,
                                        n = new URLSearchParams(r),
                                        o = window.sessionStorage.getItem("account") || n.get("account");
                                    window.location.href = `${t}/redirect?action=redirect_to&redirect_to=wallet${o?`&account=${o}`:""}`
                                } else {
                                    var e;
                                    P.push(i.routes.wallets_transfer, {
                                        toAccountLoginId: d,
                                        is_from_dtrader: null === (e = window.location.pathname) || void 0 === e ? void 0 : e.includes("dtrader")
                                    })
                                }
                            }
                        }), !t && (0, g.jsx)(L, {
                            is_dialog_on: b,
                            toggleDialog: p
                        }), t && (0, g.jsx)(f, {}), (0, g.jsx)(M, {
                            count: O,
                            is_visible: v,
                            toggleDialog: w,
                            is_mobile: !y
                        }), y && (0, g.jsx)(E, {})]
                    }) : (0, g.jsx)(B, {})
                }))
        },
        976327: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r(504377),
                o = r(33118);
            const i = [{
                icon: (0, n.getPlatformSettings)("trader").icon,
                title: () => (0, n.getPlatformSettings)("trader").name,
                name: (0, n.getPlatformSettings)("trader").name,
                description: () => (0, o.localize)("A whole new trading experience on a powerful yet easy to use platform."),
                link_to: n.routes.trade
            }, {
                icon: (0, n.getPlatformSettings)("dbot").icon,
                title: () => (0, n.getPlatformSettings)("dbot").name,
                name: (0, n.getPlatformSettings)("dbot").name,
                description: () => (0, o.localize)("Automated trading at your fingertips. No coding needed."),
                href: n.routes.bot
            }, {
                icon: (0, n.getPlatformSettings)("smarttrader").icon,
                title: () => (0, n.getPlatformSettings)("smarttrader").name,
                name: (0, n.getPlatformSettings)("smarttrader").name,
                description: () => (0, o.localize)("Trade the world’s markets with our popular user-friendly platform."),
                href: n.routes.smarttrader
            }]
        },
        674764: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => u
            });
            r(286326);
            var n = r(592353),
                o = r(836870);
            const i = ["styles"];

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach((function(t) {
                        c(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function c(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const l = e => {
                    let {
                        styles: t = {}
                    } = e, r = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = function(e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (-1 !== t.indexOf(n)) continue;
                                    r[n] = e[n]
                                }
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < i.length; n++) r = i[n], -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                    }(e, i);
                    return (0, o.jsxs)("svg", s(s({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "none"
                    }, r), {}, {
                        children: [(0, o.jsx)("path", {
                            d: "M0 9.33A9.33 9.33 0 019.33 0h5.34A9.33 9.33 0 0124 9.33v5.34A9.33 9.33 0 0114.67 24H9.33A9.33 9.33 0 010 14.67V9.33z",
                            fill: "#FF444F"
                        }), (0, o.jsx)("path", {
                            d: "M15.06 4.97l-.78 4.4H11.6c-2.51 0-4.9 2.02-5.34 4.53l-.19 1.06c-.44 2.51 1.23 4.54 3.74 4.54h2.24a4.11 4.11 0 003.89-3.3L18 4.5l-2.94.47zm-1.91 10.81c-.1.57-.6 1.03-1.17 1.03h-1.36c-1.13 0-1.88-.92-1.69-2.05l.12-.66a2.55 2.55 0 012.4-2.04h2.36l-.66 3.72z",
                            fill: "#fff"
                        })]
                    }))
                },
                u = () => (0, o.jsx)("div", {
                    className: "header__menu-left-logo",
                    children: (0, o.jsx)(n.StaticUrl, {
                        href: "/",
                        children: (0, o.jsx)(l, {})
                    })
                })
        },
        838549: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => h
            });
            r(286326);
            var n = r(291218),
                o = r(255530),
                i = r.n(o),
                a = r(592353),
                s = r(504377),
                c = r(500309),
                l = r(414646),
                u = r(33118),
                d = r(317691),
                _ = r(836870);
            const h = (0, c.observer)((() => {
                const {
                    client: e
                } = (0, l.A)(), t = (0, n.useHistory)(), r = (0, n.useLocation)(), {
                    isHubRedirectionEnabled: o
                } = (0, d.A)(), {
                    has_wallet: c
                } = e, {
                    pathname: h
                } = r;
                return (0, _.jsxs)("div", {
                    "data-testid": "dt_traders_hub_home_button",
                    className: i()("traders-hub-header__tradershub", {
                        "traders-hub-header__tradershub--active": h === s.routes.traders_hub || h === s.routes.traders_hub_v2
                    }),
                    onClick: () => {
                        if (o && c) {
                            const e = `https://hub.${(0,s.getDomainUrl)()}/tradershub`,
                                t = ((0, s.getDomainUrl)(), e),
                                r = window.location.search,
                                n = new URLSearchParams(r).get("account") || window.sessionStorage.getItem("account");
                            window.location.href = `${t}/redirect?action=redirect_to&redirect_to=home${n?`&account=${n}`:""}`
                        } else t.push(s.routes.traders_hub)
                    },
                    children: [(0, _.jsx)("div", {
                        className: "traders-hub-header__tradershub--home-logo",
                        children: (0, _.jsx)(a.Icon, {
                            icon: "IcAppstoreTradersHubHome",
                            size: 16
                        })
                    }), (0, _.jsx)(a.Text, {
                        className: "traders-hub-header__tradershub--text",
                        children: (0, _.jsx)(u.Localize, {
                            i18n_default_text: "Trader's Hub"
                        })
                    })]
                })
            }))
        },
        922087: (e, t, r) => {
            "use strict";
            r.d(t, {
                S: () => i,
                fN: () => o,
                yt: () => a
            });
            var n = r(33118);
            const o = {
                    SUCCESS: 1,
                    WARN: 0,
                    DANGER: -1,
                    PENDING: -2
                },
                i = e => {
                    switch (e) {
                        case "svg":
                            return (0, n.localize)("Options & Multipliers");
                        case "maltainvest":
                            return (0, n.localize)("Multipliers");
                        default:
                            return (0, n.localize)("Deriv")
                    }
                },
                a = e => {
                    const {
                        landing_company_shortcode: t = ""
                    } = e;
                    return o.SUCCESS
                }
        },
        652997: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => We
            });
            var n = r(286326),
                o = r(291218),
                i = r(255530),
                a = r.n(i),
                s = r(919796),
                c = r(622831),
                l = r.n(c),
                u = r(109582),
                d = r.n(u),
                _ = r(592353),
                h = r(504377),
                m = r(33118),
                p = r(500309),
                g = r(414646),
                f = r(824223),
                b = r(597598),
                y = r.n(b),
                x = r(427596),
                v = r(630965),
                j = r.n(v),
                w = r(960923),
                O = r.n(w),
                k = r(836870);
            const N = () => [(0, k.jsx)(m.Localize, {
                    i18n_default_text: "Choose your preferred cryptocurrency"
                }, 0), (0, k.jsx)(m.Localize, {
                    i18n_default_text: "You can open an account for each cryptocurrency."
                }, 1), (0, k.jsx)(m.Localize, {
                    i18n_default_text: "Add a real account"
                }, 2), (0, k.jsx)(m.Localize, {
                    i18n_default_text: "Choose a currency you would like to trade with."
                }, 3), (0, k.jsx)(m.Localize, {
                    i18n_default_text: "Choose a currency"
                }, 4)],
                S = e => {
                    let {
                        heading: t,
                        subheading: r
                    } = e;
                    return (0, k.jsxs)(n.Fragment, {
                        children: [(0, k.jsx)(_.Text, {
                            as: "h1",
                            color: "prominent",
                            align: "center",
                            weight: "bold",
                            className: "add-crypto-currency__title",
                            children: t
                        }), (0, k.jsx)(_.Text, {
                            as: "h3",
                            size: "xxs",
                            color: "prominent",
                            align: "center",
                            className: "add-crypto-currency__sub-title",
                            children: r
                        })]
                    })
                },
                C = "crypto",
                A = (0, p.observer)((e => {
                    let {
                        form_error: t,
                        is_add_fiat: r,
                        onClickBack: n,
                        onSubmit: o,
                        should_show_crypto_only: i,
                        should_show_fiat_only: a,
                        value: c,
                        hasNoAvailableCrypto: l
                    } = e;
                    const {
                        isDesktop: u
                    } = (0, s.Y)(), {
                        client: d,
                        ui: p
                    } = (0, g.A)(), {
                        available_crypto_currencies: b,
                        upgradeable_currencies: y,
                        has_fiat: x
                    } = d, {
                        should_show_cancel: v
                    } = p, w = () => (0, h.reorderCurrencies)(y.filter((e => "fiat" === e.type))), A = () => {
                        const e = y.filter((e => e.type === C));
                        return (0, h.reorderCurrencies)(e, C)
                    }, P = () => !x && !i, z = e => -1 === b.map((e => e.value)).indexOf(e.value);
                    return (0, k.jsx)(f.Formik, {
                        initialValues: {
                            currency: c.currency
                        },
                        onSubmit: o,
                        children: e => {
                            let {
                                handleSubmit: o,
                                values: i,
                                errors: s,
                                touched: c,
                                isSubmitting: d
                            } = e;
                            return (0, k.jsxs)("form", {
                                onSubmit: o,
                                children: [!P() && (0, k.jsx)(S, {
                                    heading: N()[0],
                                    subheading: N()[1]
                                }), P() && (0, k.jsx)(S, {
                                    heading: r ? N()[4] : N()[2],
                                    subheading: N()[3]
                                }), P() && (0, k.jsx)(_.ThemedScrollbars, {
                                    children: (0, k.jsx)(j(), {
                                        id: "fiat_currency",
                                        is_fiat: !0,
                                        className: "currency-selector__radio-group currency-selector__radio-group--with-margin",
                                        value: i.currency,
                                        error: s.currency,
                                        touched: c.currency,
                                        is_title_enabled: P(),
                                        item_count: w().length,
                                        children: w().map((e => (0, k.jsx)(f.Field, {
                                            component: O(),
                                            name: "currency",
                                            id: e.value,
                                            label: e.name
                                        }, e.value)))
                                    })
                                }), P() && (0, k.jsx)(_.Text, {
                                    as: "p",
                                    color: "prominent",
                                    size: "xxs",
                                    align: "center",
                                    className: "currency-selector__deposit-warn",
                                    children: (0, k.jsx)(m.Localize, {
                                        i18n_default_text: "You’ll not be able to change currency once you have made a deposit."
                                    })
                                }), l() && (0, k.jsx)("div", {
                                    className: "account-wizard--disabled-message",
                                    children: (0, k.jsx)(_.Text, {
                                        as: "p",
                                        align: "center",
                                        size: "xxs",
                                        className: "account-wizard--disabled-message-description",
                                        children: (0, m.localize)("You already have an account for each of the cryptocurrencies available on {{deriv}}.", {
                                            deriv: h.website_name
                                        })
                                    })
                                }), !a && (0 !== b.length ? (0, k.jsx)(k.Fragment, {
                                    children: (0, k.jsx)(_.ThemedScrollbars, {
                                        height: (0, h.isMobile)() ? window.innerHeight - 240 : "460px",
                                        children: (0, k.jsx)(j(), {
                                            id: "crypto_currency",
                                            className: "currency-selector__radio-group currency-selector__radio-group--with-margin",
                                            label: (0, m.localize)("Cryptocurrencies"),
                                            value: i.currency,
                                            error: s.currency,
                                            touched: c.currency,
                                            is_title_enabled: P(),
                                            item_count: A().length,
                                            children: A().map((e => (0, k.jsx)(f.Field, {
                                                component: O(),
                                                name: "currency",
                                                id: e.value,
                                                label: e.name,
                                                selected: z(e)
                                            }, e.value)))
                                        })
                                    })
                                }) : (0, k.jsx)(_.ThemedScrollbars, {
                                    children: (0, k.jsx)(j(), {
                                        id: "crypto_currency",
                                        className: "currency-selector__radio-group currency-selector__radio-group--with-margin",
                                        label: (0, m.localize)("Cryptocurrencies"),
                                        is_title_enabled: P(),
                                        item_count: A().length,
                                        children: A().map((e => (0, k.jsx)(f.Field, {
                                            component: O(),
                                            name: "currency",
                                            id: e.value,
                                            label: e.name,
                                            selected: !0
                                        }, e.value)))
                                    })
                                })), (0, k.jsx)(_.FormSubmitButton, {
                                    className: "currency-selector__button",
                                    is_disabled: d || !i.currency,
                                    label: (0, m.localize)("Add account"),
                                    is_absolute: u,
                                    form_error: t,
                                    has_cancel: v,
                                    cancel_label: (0, m.localize)("Back"),
                                    cancel_icon: (0, k.jsx)(_.Icon, {
                                        icon: "IcArrowLeftBold"
                                    }),
                                    onCancel: () => n()
                                })]
                            })
                        }
                    })
                }));
            A.propTypes = {
                hasNoAvailableCrypto: y().func,
                form_error: y().string,
                onSubmit: y().func,
                should_show_crypto_only: y().bool,
                should_show_fiat_only: y().bool,
                value: y().shape({
                    crypto: y().string,
                    fiat: y().string,
                    currency: y().string
                }),
                onClickBack: y().func,
                is_add_fiat: y().bool
            };
            const P = A,
                z = e => {
                    let {
                        message: t
                    } = e;
                    return (0, k.jsx)("div", {
                        className: "add-currency__note-wrapper",
                        children: (0, k.jsx)(_.Text, {
                            as: "p",
                            color: "prominent",
                            align: "center",
                            size: "xxs",
                            className: "add-currency__note",
                            children: t
                        })
                    })
                };

            function I(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? I(Object(r), !0).forEach((function(t) {
                        T(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : I(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function T(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const L = (e, t, r) => {
                    const n = [];
                    return e.forEach((e => {
                        n.push(D(D({}, e), {}, {
                            has_payment_agent: !(null == t || !t.filter((t => t.currencies === e.value)).length),
                            is_disabled: null == r ? void 0 : r.some((t => t.title === e.value && t.is_disabled))
                        }))
                    })), n
                },
                E = "crypto",
                M = (0, p.observer)((e => {
                    let {
                        onSubmit: t,
                        hasNoAvailableCrypto: r,
                        is_add_crypto: o,
                        is_add_fiat: i
                    } = e;
                    const {
                        client: s,
                        modules: c,
                        ui: l
                    } = (0, g.A)(), {
                        available_crypto_currencies: u,
                        has_fiat: d,
                        upgradeable_currencies: p
                    } = s, {
                        cashier: b
                    } = c, y = b.general_store.setShouldShowAllAvailableCurrencies, v = b.general_store.deposit_target, {
                        openRealAccountSignup: w
                    } = l, [N] = n.useState(""), [S] = n.useState({
                        crypto: "",
                        fiat: ""
                    }), {
                        data: C,
                        isLoading: A
                    } = (0, x.A)(), I = n.useMemo((() => {
                        const e = L(p, C);
                        return {
                            crypto: (0, h.reorderCurrencies)(null == e ? void 0 : e.filter((e => e.type === E && u.some((t => t.value === e.value)))), E),
                            fiat: (0, h.reorderCurrencies)(null == e ? void 0 : e.filter((e => "fiat" === e.type && !u.some((t => t.value === e.value)))))
                        }
                    }), [C, u, p]), D = () => {
                        w("choose"), v === h.routes.cashier_pa && y(!0)
                    }, T = () => (0, k.jsxs)("div", {
                        children: [(0, k.jsx)(_.Text, {
                            as: "h1",
                            color: "prominent",
                            align: "center",
                            weight: "bold",
                            className: "add-currency__title",
                            children: (0, m.localize)("Fiat currencies")
                        }), !!d && (0, k.jsx)(_.Text, {
                            as: "p",
                            color: "prominent",
                            align: "center",
                            size: "xxs",
                            className: "add-currency__sub-title",
                            children: (0, m.localize)("You are limited to one fiat account only.")
                        }), A ? (0, k.jsx)(_.Loading, {
                            is_fullscreen: !1
                        }) : (0, k.jsx)(j(), {
                            id: "crypto_currency",
                            className: "currency-selector__radio-group currency-selector__radio-group--with-margin",
                            item_count: I.fiat.length,
                            children: I.fiat.map((e => (0, k.jsx)(f.Field, {
                                component: O(),
                                name: "currency",
                                id: e.value,
                                label: e.name,
                                icon: e.icon,
                                second_line_label: e.second_line_label,
                                onClick: e.onClick,
                                selected: d
                            }, e.value)))
                        })]
                    }), M = () => (0, k.jsxs)("div", {
                        children: [(0, k.jsx)(_.Text, {
                            as: "h1",
                            color: "prominent",
                            align: "center",
                            weight: "bold",
                            className: "add-currency__title",
                            children: (0, m.localize)("Cryptocurrencies")
                        }), (0, k.jsx)(_.Text, {
                            as: "p",
                            color: "prominent",
                            align: "center",
                            size: "xxs",
                            className: "add-currency__sub-title",
                            children: (0, m.localize)("You can open an account for each cryptocurrency.")
                        }), A ? (0, k.jsx)(_.Loading, {
                            is_fullscreen: !1
                        }) : (0, k.jsx)(j(), {
                            id: "crypto_currency",
                            className: "currency-selector__radio-group currency-selector__radio-group--with-margin",
                            item_count: I.crypto.length,
                            children: I.crypto.map((e => (0, k.jsx)(f.Field, {
                                component: O(),
                                name: "currency",
                                id: e.value,
                                label: e.name,
                                icon: e.icon,
                                second_line_label: e.second_line_label,
                                onClick: e.onClick,
                                selected: v === h.routes.cashier_pa && !e.has_payment_agent
                            }, e.value)))
                        })]
                    });
                    return o ? (0, k.jsx)(_.ThemedScrollbars, {
                        autohide: !1,
                        children: (0, k.jsx)("div", {
                            className: a()("add-crypto-currency cashier-deposit", {
                                "account-wizard--disabled": r()
                            }),
                            children: (0, k.jsx)(P, {
                                className: "account-wizard__body",
                                onSubmit: t,
                                onClickBack: D,
                                value: S,
                                form_error: N,
                                should_show_crypto_only: !0,
                                hasNoAvailableCrypto: r
                            })
                        })
                    }) : i ? (0, k.jsx)(_.ThemedScrollbars, {
                        autohide: !1,
                        children: (0, k.jsx)("div", {
                            className: "change-currency",
                            children: (0, k.jsx)(P, {
                                className: "account-wizard__body",
                                onSubmit: t,
                                value: S,
                                form_error: N,
                                should_show_fiat_only: !0,
                                hasNoAvailableCrypto: r,
                                is_add_fiat: !0
                            })
                        })
                    }) : (0, k.jsx)(f.Formik, {
                        initialValues: {
                            currency: S.currency
                        },
                        onSubmit: t,
                        children: e => {
                            let {
                                handleSubmit: t,
                                values: r,
                                isSubmitting: n
                            } = e;
                            return (0, k.jsxs)("form", {
                                onSubmit: t,
                                children: [(0, k.jsx)(_.ThemedScrollbars, {
                                    height: (0, h.isMobile)() ? window.innerHeight - 190 : "460px",
                                    children: (0, k.jsxs)("div", {
                                        children: [(0, k.jsx)(_.Text, {
                                            as: "p",
                                            color: "prominent",
                                            weight: "bold",
                                            align: "center",
                                            className: "add-currency__wizard-header",
                                            children: (0, m.localize)("Choose your currency")
                                        }), (0, k.jsx)(T, {}), (0, k.jsx)("div", {
                                            className: "add-currency__underline"
                                        }), (0, k.jsx)(M, {})]
                                    })
                                }), (0, k.jsx)(z, {
                                    message: (0, m.localize)("Some currencies may not be supported by payment agents in your country.")
                                }), (0, k.jsx)(_.FormSubmitButton, {
                                    className: "currency-selector__button",
                                    is_disabled: n || !r.currency,
                                    label: (0, m.localize)("Add account"),
                                    is_absolute: !0,
                                    form_error: N,
                                    has_cancel: !0,
                                    cancel_label: (0, m.localize)("Back"),
                                    cancel_icon: (0, k.jsx)(_.Icon, {
                                        icon: "IcArrowLeftBold"
                                    }),
                                    onCancel: () => D()
                                })]
                            })
                        }
                    })
                }));
            M.propTypes = {
                onSubmit: y().func,
                is_add_crypto: y().bool,
                is_add_fiat: y().bool,
                hasNoAvailableCrypto: y().func
            };
            const F = M;
            var R = r(391289),
                B = r(978513);
            const U = (0, p.observer)((e => {
                var t;
                let {
                    value: r,
                    onSubmit: n,
                    form_error: o,
                    can_change_fiat_currency: i,
                    current_currency_type: a
                } = e;
                const {
                    client: s,
                    ui: c
                } = (0, g.A)(), {
                    upgradeable_currencies: l,
                    currency: u,
                    current_fiat_currency: d
                } = s, {
                    closeRealAccountSignup: p
                } = c, b = () => (0, h.reorderCurrencies)(l.filter((e => "fiat" === e.type))), y = "fiat" === a, x = (0, k.jsx)(m.Localize, {
                    i18n_default_text: "If you want to change your account currency, please contact us via <0>live chat</0>.",
                    components: [(0, k.jsx)("span", {
                        className: "link link--orange",
                        onClick: () => {
                            p(), B.Chat.open()
                        }
                    }, 0)]
                }), v = (0, k.jsx)(m.Localize, {
                    i18n_default_text: "Please switch to your {{fiat_currency}} account to change currencies.",
                    values: {
                        fiat_currency: null == d || null === (t = d.toUpperCase) || void 0 === t ? void 0 : t.call(d)
                    }
                }), w = y ? x : v;
                return (0, k.jsx)(f.Formik, {
                    initialValues: {
                        fiat: r.fiat
                    },
                    onSubmit: n,
                    children: e => {
                        let {
                            handleSubmit: t,
                            values: r,
                            errors: n,
                            touched: a,
                            isSubmitting: s
                        } = e;
                        return (0, k.jsxs)("form", {
                            onSubmit: e => {
                                e.preventDefault(), t()
                            },
                            children: [(0, k.jsx)(_.Text, {
                                as: "h1",
                                color: "prominent",
                                weight: "bold",
                                align: "center",
                                className: "change-currency__title",
                                children: (0, k.jsx)(m.Localize, {
                                    i18n_default_text: "Change your currency"
                                })
                            }), (0, k.jsx)(_.Text, {
                                as: "h3",
                                size: "xxs",
                                align: "center",
                                className: "change-currency__sub-title",
                                children: (0, k.jsx)(m.Localize, {
                                    i18n_default_text: "Choose the currency you would like to trade with."
                                })
                            }), !i && (0, k.jsx)("div", {
                                className: "account-wizard--disabled-message",
                                children: (0, k.jsx)(_.Text, {
                                    as: "p",
                                    align: "center",
                                    size: "xxs",
                                    className: "account-wizard--disabled-message-description",
                                    children: w
                                })
                            }), (0, k.jsx)(j(), {
                                id: "fiat",
                                label: (0, m.localize)("Cryptocurrencies"),
                                className: "currency-selector__radio-group currency-selector__radio-group--with-margin",
                                value: r.fiat,
                                error: n.fiat,
                                touched: a.fiat,
                                is_title_enabled: !1,
                                item_count: b().length,
                                children: b().map((e => (0, k.jsx)(f.Field, {
                                    component: O(),
                                    name: "fiat",
                                    id: e.value,
                                    label: e.name,
                                    selected: e.value === u
                                }, e.value)))
                            }), (0, k.jsx)(_.FormSubmitButton, {
                                className: "change-currency__button",
                                is_disabled: s || !r.fiat,
                                label: (0, m.localize)("Change currency"),
                                is_absolute: !(0, h.isMobile)(),
                                form_error: o
                            })]
                        })
                    }
                })
            }));
            U.propTypes = {
                onSubmit: y().func,
                closeModal: y().func,
                value: y().shape({
                    crypto: y().string,
                    fiat: y().string
                }),
                form_error: y().string,
                can_change_fiat_currency: y().bool,
                current_currency_type: y().string,
                current_fiat_currency: y().string
            };
            const W = U;
            var $ = r(945331);
            const Y = (0, p.observer)((e => {
                const {
                    deposit_target: t,
                    is_add_crypto: r,
                    is_add_currency: o,
                    is_add_fiat: i,
                    is_loading: s,
                    onError: c,
                    onSuccessSetAccountCurrency: l,
                    setLoading: u,
                    onClose: d
                } = e, {
                    client: p,
                    modules: f,
                    ui: b,
                    traders_hub: y
                } = (0, g.A)(), {
                    available_crypto_currencies: x,
                    can_change_fiat_currency: v,
                    current_currency_type: j,
                    has_fiat: w,
                    setAccountCurrency: O,
                    createCryptoAccount: N,
                    is_low_risk: S,
                    loginid: C
                } = p, {
                    cashier: A
                } = f, {
                    show_eu_related_content: z
                } = y, {
                    manage_real_account_tab_index: I,
                    setShouldShowCancel: D,
                    resetRealAccountSignupTarget: T
                } = b, L = A.general_store.setIsDeposit, E = (null != I ? I : w && 0 === (null == x ? void 0 : x.length)) ? 1 : 0, [M, B] = n.useState(E), [U] = n.useState(""), [Y] = n.useState({
                    crypto: "",
                    fiat: ""
                });
                n.useEffect((() => ((async () => {
                    u(!0), await R.WS.mt5LoginList(), u(!1)
                })(), () => D(!1))), []);
                const H = e => {
                        u(!0), Object.entries(e).map((e => {
                            let [r, n] = e;
                            r === h.CURRENCY_TYPE.FIAT ? O(n).then((e => {
                                l(e.passthrough.previous_currency, e.echo_req.set_account_currency, t)
                            })).catch((e => {
                                c(e)
                            })).finally((() => u(!1))) : N(n).then((() => {
                                l("", n, t), T(), L(!0)
                            })).catch((e => {
                                c(e)
                            })).finally((() => u(!1)))
                        }))
                    },
                    V = () => 0 === x.length && w;
                if (s) return (0, k.jsx)($.A, {});
                const G = w && (0, k.jsx)("div", {
                    className: a()("change-currency", {
                        "account-wizard--disabled": !v
                    }),
                    children: (0, k.jsx)(W, {
                        className: "account-wizard__body",
                        onSubmit: H,
                        value: Y,
                        form_error: U,
                        can_change_fiat_currency: v,
                        current_currency_type: j,
                        closeModal: d
                    })
                });
                if (o || r || i) return (0, k.jsx)(F, {
                    onSubmit: H,
                    value: Y,
                    form_error: U,
                    should_show_crypto_only: !0,
                    hasNoAvailableCrypto: V,
                    is_add_crypto: r,
                    is_add_fiat: i,
                    is_add_currency: o
                });
                const q = null == C ? void 0 : C.startsWith("MF");
                return (0, k.jsx)(_.ThemedScrollbars, {
                    is_bypassed: (0, h.isMobile)(),
                    autohide: !1,
                    children: z && !S && w || q ? G : (0, k.jsxs)(_.Tabs, {
                        active_index: M,
                        className: "account-wizard add-or-manage tabs--desktop",
                        onTabItemClick: e => {
                            B(e)
                        },
                        top: !0,
                        header_fit_content: (0, h.isDesktop)(),
                        children: [(0, k.jsx)("div", {
                            label: (0, m.localize)("Cryptocurrencies"),
                            children: (0, k.jsx)("div", {
                                className: a()("add-crypto-currency", {
                                    "account-wizard--disabled": V()
                                }),
                                children: (0, k.jsx)(P, {
                                    className: "account-wizard__body",
                                    onSubmit: H,
                                    value: Y,
                                    form_error: U,
                                    should_show_crypto_only: !0,
                                    hasNoAvailableCrypto: V
                                })
                            })
                        }), (0, k.jsx)("div", {
                            label: (0, m.localize)("Fiat currencies"),
                            children: w ? G : (0, k.jsx)(P, {
                                className: "account-wizard__body",
                                onSubmit: H,
                                value: Y,
                                form_error: U,
                                should_show_fiat_only: !0,
                                hasNoAvailableCrypto: V
                            })
                        })]
                    })
                })
            }));
            Y.propTypes = {
                onClose: y().func,
                onError: y().func,
                onSuccessSetAccountCurrency: y().func,
                is_loading: y().bool,
                is_add_crypto: y().bool,
                setLoading: y().func,
                is_add_fiat: y().bool,
                is_add_currency: y().bool,
                deposit_target: y().string
            };
            const H = Y,
                V = "crypto",
                G = (0, p.observer)((() => {
                    const {
                        client: e,
                        modules: t,
                        ui: r
                    } = (0, g.A)(), {
                        account_list: o,
                        available_crypto_currencies: i,
                        currency: a,
                        has_fiat: s,
                        upgradeable_currencies: c,
                        switchAccount: l
                    } = e, {
                        cashier: u
                    } = t, {
                        closeRealAccountSignup: d,
                        continueRouteAfterChooseCrypto: p,
                        openRealAccountSignup: b,
                        setShouldShowCancel: y
                    } = r, v = u.general_store.deposit_target, w = u.general_store.should_show_all_available_currencies, N = u.general_store.setShouldShowAllAvailableCurrencies, [S] = n.useState(""), [C] = n.useState({
                        crypto: ""
                    }), {
                        data: A,
                        isLoading: P
                    } = (0, x.A)();
                    n.useEffect((() => () => N(!1)), [N]);
                    const z = n.useMemo((() => {
                            const e = () => 0 === (null == c ? void 0 : c.filter((e => e.type === V && !o.some((t => t.title === e.value)))).length),
                                t = L(c, A, o),
                                r = (() => {
                                    var e;
                                    let r;
                                    r = w ? t : null == t ? void 0 : t.filter((e => e.type === V && !i.some((t => t.value === e.value))));
                                    const n = null === (e = r) || void 0 === e ? void 0 : e.filter((e => o.some((t => t.title === e.value))));
                                    return (0, h.reorderCurrencies)(n, V)
                                })();
                            return (v !== h.routes.cashier_pa || s) && e() || r.push({
                                value: "plus",
                                name: v === h.routes.cashier_pa ? (0, m.localize)("Add a new") : (0, m.localize)("Add new"),
                                second_line_label: v === h.routes.cashier_pa ? (0, m.localize)("account") : (0, m.localize)("crypto account"),
                                icon: "IcAddAccount",
                                onClick: () => (b(v === h.routes.cashier_pa ? "add_currency" : "add_crypto"), void y(!0)),
                                has_payment_agent: !0
                            }), r
                        }), [o, A, i, v, s, c, w, b, y]),
                        I = async e => {
                            Object.entries(e).map((e => {
                                let [t, r] = e;
                                t && (d(), r !== a && (async e => {
                                    const t = o.filter((t => t.title === e)).map((e => e.loginid))[0];
                                    t && await l(t)
                                })(r), p())
                            }))
                        };
                    return (0, k.jsx)(f.Formik, {
                        initialValues: {
                            currency: C.currency
                        },
                        onSubmit: e => {
                            I(e)
                        },
                        children: e => {
                            let {
                                handleSubmit: t,
                                values: r,
                                isSubmitting: n
                            } = e;
                            return (0, k.jsxs)("form", {
                                onSubmit: t,
                                children: [(0, k.jsx)(_.Text, {
                                    as: "h1",
                                    color: "prominent",
                                    align: "center",
                                    weight: "bold",
                                    className: "add-crypto-currency__title",
                                    children: v === h.routes.cashier_pa ? (0, m.localize)("Choose an account or add a new one") : (0, m.localize)("Choose one of your accounts or add a new cryptocurrency account")
                                }), (0, k.jsx)(_.ThemedScrollbars, {
                                    children: P ? (0, k.jsx)(_.Loading, {
                                        is_fullscreen: !1,
                                        className: "currency-list__loading-wrapper"
                                    }) : (0, k.jsx)(j(), {
                                        id: "crypto_currency",
                                        className: "currency-selector__radio-group currency-selector__radio-group--with-margin",
                                        item_count: z.length,
                                        children: z.map((e => (0, k.jsx)(f.Field, {
                                            component: O(),
                                            name: "currency",
                                            id: e.value,
                                            label: e.name,
                                            icon: e.icon,
                                            second_line_label: e.second_line_label,
                                            onClick: e.onClick,
                                            selected: !(!e.is_disabled && v !== h.routes.cashier_pa) && !e.has_payment_agent
                                        }, e.value)))
                                    })
                                }), (0, k.jsx)(_.FormSubmitButton, {
                                    className: "currency-selector__button",
                                    is_disabled: n || !r.currency,
                                    label: (0, m.localize)("Continue"),
                                    is_absolute: !0,
                                    form_error: S
                                })]
                            })
                        }
                    })
                })),
                q = e => {
                    let {
                        current: t,
                        closeRealAccountSignup: r,
                        deposit_target: o,
                        redirectToLegacyPlatform: i,
                        deposit_real_account_signup_target: c,
                        history: l,
                        onSubmit: u,
                        setIsDeposit: d
                    } = e;
                    const {
                        isDesktop: p
                    } = (0, s.Y)(), g = () => (0, k.jsx)(_.Icon, {
                        icon: `IcCurrency-${t.toLowerCase()}`,
                        height: 120,
                        width: 90
                    }), f = e => {
                        let {
                            className: t
                        } = e;
                        return (0, k.jsx)(_.Icon, {
                            className: t,
                            icon: "IcCheckmarkCircle",
                            color: "green"
                        })
                    }, b = () => {
                        r(), d(!1), i()
                    };
                    return (0, k.jsxs)(n.Fragment, {
                        children: [p && (0, k.jsx)("div", {
                            onClick: b,
                            className: "finished-add-currency__close",
                            children: (0, k.jsx)(_.Icon, {
                                icon: "IcCross"
                            })
                        }), (0, k.jsxs)(_.Div100vhContainer, {
                            className: "finished-add-currency__dialog",
                            is_disabled: p,
                            height_offset: "40px",
                            children: [(0, k.jsxs)("div", {
                                className: a()("status-dialog__header", {
                                    "status-dialog__header--center": !p
                                }),
                                children: [(0, k.jsx)(g, {}), (0, k.jsx)(f, {
                                    className: "bottom-right-overlay"
                                })]
                            }), (0, k.jsxs)("div", {
                                className: a()("status-dialog__body", {
                                    "status-dialog__body--no-grow": !p
                                }),
                                children: [(0, k.jsx)(_.Text, {
                                    as: "h2",
                                    align: "center",
                                    className: "status-dialog__message-header",
                                    weight: "bold",
                                    children: (0, k.jsx)(m.Localize, {
                                        i18n_default_text: "Your account is ready"
                                    })
                                }), (0, k.jsx)(_.Text, {
                                    as: "p",
                                    align: "center",
                                    children: (0, k.jsx)(m.Localize, {
                                        i18n_default_text: "Fund your account to start trading."
                                    })
                                })]
                            }), (0, k.jsxs)("div", {
                                className: "finished-add-currency__footer",
                                children: [(0, k.jsx)(_.Button, {
                                    onClick: b,
                                    text: (0, m.localize)("Maybe later"),
                                    secondary: !0
                                }), (0, k.jsx)(_.Button, {
                                    onClick: ["add_crypto", "add_fiat", "add_currency"].includes(c) ? () => {
                                        r(), l.push(o), o === h.routes.cashier_deposit && d(!0), i()
                                    } : u,
                                    text: (0, m.localize)("Deposit now"),
                                    primary: !0
                                })]
                            })]
                        })]
                    })
                },
                K = n.memo(q),
                X = e => {
                    let {
                        prev: t,
                        current: r
                    } = e;
                    return t ? (0, k.jsx)(m.Localize, {
                        i18n_default_text: "<0>You have successfully changed your currency to {{currency}}.</0><0>Make a deposit now to start trading.</0>",
                        values: {
                            currency: (0, h.getCurrencyDisplayCode)(r)
                        },
                        components: [(0, k.jsx)(_.Text, {
                            as: "p",
                            align: "center",
                            className: "status-dialog__message-text",
                            color: "general",
                            size: "xs"
                        }, r)]
                    }) : (0, k.jsx)(m.Localize, {
                        i18n_default_text: "<0>You have added a {{currency}} account.</0><0> Make a deposit now to start trading.</0>",
                        values: {
                            currency: (0, h.getCurrencyDisplayCode)(r)
                        },
                        components: [(0, k.jsx)(_.Text, {
                            as: "p",
                            align: "center",
                            className: "status-dialog__message-text",
                            color: "general",
                            size: "xs"
                        }, r)]
                    })
                },
                J = e => {
                    let {
                        current: t,
                        closeRealAccountSignup: r,
                        deposit_target: n,
                        deposit_real_account_signup_target: o,
                        history: i,
                        onCancel: s,
                        onSubmit: c,
                        prev: l,
                        setIsDeposit: u
                    } = e;
                    const d = () => l ? (0, k.jsx)(_.Icon, {
                            icon: `IcCurrency-${l.toLowerCase()}`,
                            height: 120,
                            width: 90
                        }) : null,
                        p = () => (0, k.jsx)(_.Icon, {
                            icon: `IcCurrency-${t.toLowerCase()}`,
                            height: 120,
                            width: 90
                        }),
                        g = () => l ? (0, k.jsx)(_.Icon, {
                            icon: "IcArrowPointerRight",
                            color: "red",
                            width: 50,
                            height: 20
                        }) : null,
                        f = e => {
                            let {
                                className: t
                            } = e;
                            return (0, k.jsx)(_.Icon, {
                                className: t,
                                icon: "IcCheckmarkCircle",
                                color: "green"
                            })
                        };
                    return (0, k.jsxs)(_.Div100vhContainer, {
                        className: "status-dialog",
                        is_disabled: (0, h.isDesktop)(),
                        height_offset: "40px",
                        children: [(0, k.jsxs)("div", {
                            className: a()("status-dialog__header", {
                                "status-dialog__header--center": (0, h.isMobile)(),
                                "status-dialog__header--set-currency": l
                            }),
                            children: [(0, k.jsx)(d, {}), (0, k.jsx)(g, {}), (0, k.jsx)(p, {}), (0, k.jsx)(f, {
                                className: "bottom-right-overlay"
                            })]
                        }), (0, k.jsxs)("div", {
                            className: a()("status-dialog__body", {
                                "status-dialog__body--no-grow": (0, h.isMobile)()
                            }),
                            children: [(0, k.jsx)(_.Text, {
                                as: "h2",
                                align: "center",
                                className: "status-dialog__message-header",
                                weight: "bold",
                                children: (0, k.jsx)(m.Localize, {
                                    i18n_default_text: "Success!"
                                })
                            }), (0, k.jsx)(X, {
                                prev: l,
                                current: t
                            })]
                        }), (0, k.jsxs)("div", {
                            className: "status-dialog__footer",
                            children: [(0, k.jsx)(_.Button, {
                                onClick: () => {
                                    s(), u(!1)
                                },
                                text: (0, m.localize)("Maybe later"),
                                secondary: !0
                            }), (0, k.jsx)(_.Button, {
                                onClick: ["add_crypto", "add_fiat", "add_currency"].includes(o) ? () => {
                                    r(), i.push(n), n === h.routes.cashier_deposit && u(!0)
                                } : c,
                                text: (0, m.localize)("Deposit now"),
                                primary: !0
                            })]
                        })]
                    })
                },
                Z = n.memo(J);
            var Q = r(370611),
                ee = r.n(Q),
                te = r(697845);
            const re = ["setLoading", "onSuccessSetAccountCurrency", "onError", "is_loading"];

            function ne(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function oe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ne(Object(r), !0).forEach((function(t) {
                        ie(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ne(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function ie(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const ae = (0, p.observer)((e => {
                    let {
                        setLoading: t,
                        onSuccessSetAccountCurrency: r,
                        onError: o,
                        is_loading: i
                    } = e, s = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = function(e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (-1 !== t.indexOf(n)) continue;
                                    r[n] = e[n]
                                }
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < i.length; n++) r = i[n], -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                    }(e, re);
                    const {
                        client: c
                    } = (0, g.A)(), {
                        available_crypto_currencies: l,
                        has_fiat: u,
                        landing_company_shortcode: d,
                        setAccountCurrency: p
                    } = c, f = n.useState(""), b = n.useState({
                        currency: ""
                    }), y = () => 0 === l.length && u && s.currency;
                    return i ? (0, k.jsx)($.A, {}) : (0, k.jsxs)("div", {
                        className: a()("set-currency-modal", {
                            "set-currency-modal--disabled": y()
                        }),
                        children: [y() && (0, k.jsx)("div", {
                            className: "set-currency-modal--disabled-message",
                            children: (0, k.jsx)("p", {
                                children: (0, m.localize)("You already have an account for each of the cryptocurrencies available on {{deriv}}.", {
                                    deriv: h.website_name
                                })
                            })
                        }), (0, k.jsxs)("div", {
                            className: "set-currency-modal__heading-container",
                            children: [(0, k.jsx)(_.Text, {
                                as: "p",
                                size: "xs",
                                line_height: "s",
                                align: "center",
                                className: "set-currency-modal__heading-container__main-heading",
                                children: (0, m.localize)("You have an account that do not have currency assigned. Please choose a currency to trade with this account.")
                            }), (0, k.jsx)(_.Text, {
                                as: "p",
                                weight: "bold",
                                align: "center",
                                className: "set-currency-modal__heading-container__sub-heading",
                                children: (0, m.localize)("Select your preferred currency")
                            })]
                        }), (0, k.jsx)(te.A, oe({
                            className: "account-wizard__body",
                            onSubmit: (e, n, i) => {
                                ((e, n) => {
                                    t(!0);
                                    const {
                                        currency: i
                                    } = e;
                                    i && p(i).then((e => {
                                        n(!1), r("", e.echo_req.set_account_currency)
                                    })).catch((e => {
                                        o(e)
                                    })).finally((() => t(!1)))
                                })(n, i)
                            },
                            value: b,
                            form_error: f,
                            set_currency: !0,
                            validate: (0, h.generateValidationFunction)(d, ee())
                        }, s))]
                    })
                })),
                se = ["text", "onConfirm"];

            function ce(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function le(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ce(Object(r), !0).forEach((function(t) {
                        ue(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ce(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function ue(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const de = e => {
                    let {
                        code: t
                    } = e;
                    switch (t) {
                        case "DuplicateAccount":
                            return (0, k.jsx)(_.Text, {
                                as: "h1",
                                align: "center",
                                weight: "bold",
                                children: (0, k.jsx)(m.Localize, {
                                    i18n_default_text: "Account already exists"
                                })
                            });
                        case "InvalidAccount":
                            return (0, k.jsx)(_.Text, {
                                as: "h2",
                                size: (0, h.isMobile)() ? "xs" : "s",
                                align: "center",
                                weight: "bold",
                                line_height: "xxl",
                                children: (0, k.jsx)(m.Localize, {
                                    i18n_default_text: "You can’t add another real account"
                                })
                            });
                        case "InputValidationFailed":
                        case "PoBoxInAddress":
                        case "InvalidPhone":
                            return (0, k.jsx)(_.Text, {
                                as: "h1",
                                align: "center",
                                weight: "bold",
                                line_height: "xxl",
                                children: (0, k.jsx)(m.Localize, {
                                    i18n_default_text: "Invalid inputs"
                                })
                            });
                        default:
                            return (0, k.jsx)(_.Text, {
                                as: "h1",
                                align: "center",
                                weight: "bold",
                                children: (0, k.jsx)(m.Localize, {
                                    i18n_default_text: "Something’s not right"
                                })
                            })
                    }
                },
                _e = e => {
                    let {
                        code: t,
                        message: r,
                        details: n
                    } = e;
                    switch ("PoBoxInAddress" === t ? n.error_details = {
                        address_line_1: r
                    } : "InvalidPhone" === t && (n.error_details = {
                        phone: r
                    }), t) {
                        case "DuplicateAccount":
                            return (0, k.jsx)("p", {
                                children: (0, k.jsx)(m.Localize, {
                                    i18n_default_text: "Your details match an existing account. If you need help, contact us via <0>live chat</0>.",
                                    components: [(0, k.jsx)("span", {
                                        className: "chat-inline",
                                        onClick: B.Chat.open
                                    }, 0)]
                                })
                            });
                        case "InvalidAccount":
                            return (0, k.jsx)(_.Text, {
                                size: (0, h.isMobile)() ? "xxs" : "xs",
                                align: "center",
                                children: r
                            });
                        case "InputValidationFailed":
                        case "PoBoxInAddress":
                        case "InvalidPhone":
                            return (0, k.jsxs)("div", {
                                className: "input_validation_failed",
                                children: [(0, k.jsx)(_.Text, {
                                    align: "center",
                                    weight: "normal",
                                    line_height: "xxl",
                                    children: (0, k.jsx)(m.Localize, {
                                        i18n_default_text: "We don’t accept the following inputs for:"
                                    })
                                }), Object.keys(null == n ? void 0 : n.error_details).map((e => (0, k.jsxs)("div", {
                                    className: "invalid_fields_input",
                                    children: [(0, k.jsx)(_.Text, {
                                        size: "xs",
                                        weight: "bold",
                                        children: (0, h.getSignupFormFields)()[e]
                                    }), (0, k.jsx)(_.Text, {
                                        size: "xs",
                                        weight: "bold",
                                        children: " : "
                                    }), (0, k.jsx)(_.Text, {
                                        size: "xs",
                                        children: n[e]
                                    })]
                                }, e)))]
                            });
                        default:
                            return (0, k.jsx)("p", {
                                children: r
                            })
                    }
                },
                he = e => {
                    let {
                        text: t,
                        onConfirm: r
                    } = e, n = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = function(e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (-1 !== t.indexOf(n)) continue;
                                    r[n] = e[n]
                                }
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < i.length; n++) r = i[n], -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                    }(e, se);
                    return (0, k.jsx)(_.Button, le(le({
                        primary: !0,
                        onClick: r,
                        large: !0
                    }, n), {}, {
                        children: t
                    }))
                },
                me = e => {
                    let {
                        code: t,
                        onConfirm: r
                    } = e;
                    switch (t) {
                        case "DuplicateCurrency":
                        case "CurrencyTypeNotAllowed":
                            return (0, k.jsx)(he, {
                                text: (0, m.localize)("Try a different currency"),
                                onConfirm: r
                            });
                        case "DuplicateAccount":
                            return (0, k.jsx)(he, {
                                text: (0, m.localize)("Go to live chat"),
                                onConfirm: () => B.Chat.open()
                            });
                        case "InputValidationFailed":
                        case "PoBoxInAddress":
                        case "InvalidPhone":
                            return (0, k.jsx)(he, {
                                text: (0, m.localize)("Let’s try again"),
                                onConfirm: r
                            });
                        case "InvalidAccount":
                            return (0, k.jsx)(he, {
                                text: (0, m.localize)("OK"),
                                onConfirm: r
                            });
                        default:
                            return (0, k.jsx)(_.StaticUrl, {
                                href: "help-centre/" + ("InvalidAccount" === t ? "account#who-can-open-an-account" : ""),
                                type: "button",
                                className: "dc-btn dc-btn--primary",
                                children: (0, k.jsx)(_.Text, {
                                    weight: "bold",
                                    color: "white",
                                    size: "xxs",
                                    children: (0, k.jsx)(m.Localize, {
                                        i18n_default_text: "OK"
                                    })
                                })
                            })
                    }
                },
                pe = e => {
                    let {
                        message: t,
                        code: r,
                        onConfirm: n,
                        className: o,
                        error_field: i = {}
                    } = e;
                    const s = ["InputValidationFailed", "PoBoxInAddress", "InvalidPhone"].includes(r);
                    return (0, k.jsxs)("div", {
                        className: a()("account-wizard--error", {
                            [`account-wizard--error__${o}`]: o
                        }),
                        children: [(0, k.jsx)(_.Icon, {
                            icon: s ? "IcInvalidError" : "IcAccountError",
                            size: s ? "64" : "InvalidAccount" === r ? "96" : "115"
                        }), (0, k.jsx)(de, {
                            code: r
                        }), (0, k.jsx)(_e, {
                            code: r,
                            message: t,
                            details: i
                        }), (0, k.jsx)("div", {
                            className: "account-wizard--error__cta",
                            children: (0, k.jsx)(me, {
                                code: r,
                                onConfirm: n
                            })
                        })]
                    })
                };
            pe.propTypes = {
                code: y().string,
                error_field: y().object,
                message: y().string,
                onConfirm: y().func,
                className: y().string
            };
            const ge = pe;
            var fe = r(922087);
            const be = () => (0, k.jsx)(_.Text, {
                    as: "h2",
                    align: "center",
                    className: "status-dialog__message-header",
                    weight: "bold",
                    children: (0, k.jsx)(m.Localize, {
                        i18n_default_text: "Your account is ready"
                    })
                }),
                ye = e => {
                    let {
                        is_fully_authenticated: t,
                        landing_company_shortcode: r,
                        status: n = fe.fN.SUCCESS
                    } = e, o = "";
                    if ("maltainvest" === r) o = t ? [(0, k.jsx)(m.Localize, {
                        i18n_default_text: "You have added a Deriv Financial account."
                    }, 0), (0, k.jsx)(m.Localize, {
                        i18n_default_text: "Make a deposit now to start trading."
                    }, 1)] : (0, k.jsx)(m.Localize, {
                        i18n_default_text: "We need proof of your identity and address before you can start trading."
                    });
                    else switch (n) {
                        case fe.fN.WARN:
                            o = (0, k.jsx)(m.Localize, {
                                i18n_default_text: "To get trading, please confirm where you live."
                            });
                            break;
                        case fe.fN.DANGER:
                            o = (0, k.jsx)(m.Localize, {
                                i18n_default_text: "To get trading, please confirm who you are, and where you live."
                            });
                            break;
                        case fe.fN.PENDING:
                            o = (0, k.jsx)(m.Localize, {
                                i18n_default_text: "You'll be able to get trading as soon as verification is complete."
                            });
                            break;
                        default:
                            o = (0, k.jsx)(m.Localize, {
                                i18n_default_text: "Fund your account to start trading."
                            })
                    }
                    return Array.isArray(o) ? (0, k.jsx)(k.Fragment, {
                        children: o.map(((e, t) => (0, k.jsx)(_.Text, {
                            as: "p",
                            align: "center",
                            className: "status-dialog__message-text",
                            color: "general",
                            size: "xs",
                            children: e
                        }, t)))
                    }) : (0, k.jsx)(_.Text, {
                        as: "p",
                        align: "center",
                        className: "status-dialog__message-text",
                        color: "general",
                        size: "xs",
                        children: o
                    })
                };
            ye.propTypes = {
                is_fully_authenticated: y().bool,
                landing_company_shortcode: y().string,
                status: y().number
            };
            const xe = e => {
                    let {
                        status: t,
                        landing_company_shortcode: r,
                        closeModal: n,
                        closeModalAndOpenCashier: o,
                        closeModalAndOpenPOI: i,
                        closeModalAndOpenPOA: a,
                        is_fully_authenticated: s
                    } = e;
                    const {
                        label: c,
                        action: l
                    } = (e => {
                        let {
                            landing_company_shortcode: t,
                            is_fully_authenticated: r,
                            closeModalAndOpenCashier: n,
                            closeModalAndOpenPOI: o
                        } = e;
                        return "maltainvest" === t ? r ? {
                            label: (0, m.localize)("Deposit"),
                            action: n
                        } : {
                            label: (0, m.localize)("Submit proof"),
                            action: o
                        } : {
                            label: (0, m.localize)("Deposit"),
                            action: n
                        }
                    })({
                        status: t,
                        landing_company_shortcode: r,
                        is_fully_authenticated: s,
                        closeModal: n,
                        closeModalAndOpenCashier: o,
                        closeModalAndOpenPOI: i,
                        closeModalAndOpenPOA: a
                    });
                    return (0, k.jsx)(_.Button, {
                        primary: !0,
                        text: c,
                        onClick: l
                    })
                },
                ve = e => {
                    let {
                        closeModal: t,
                        is_bypassed: r
                    } = e;
                    return r ? null : (0, k.jsx)(_.Button, {
                        secondary: !0,
                        text: (0, m.localize)("Maybe later"),
                        onClick: t
                    })
                },
                je = e => {
                    let {
                        status: t,
                        landing_company_shortcode: r,
                        is_fully_authenticated: n,
                        closeModal: o,
                        closeModalAndOpenCashier: i,
                        closeModalAndOpenPOA: a,
                        closeModalAndOpenPOI: s
                    } = e;
                    return (0, k.jsxs)("div", {
                        className: "status-dialog__footer",
                        children: [(0, k.jsx)(ve, {
                            closeModal: o,
                            is_bypassed: t === fe.fN.PENDING
                        }), (0, k.jsx)(xe, {
                            status: t,
                            landing_company_shortcode: r,
                            closeModal: o,
                            closeModalAndOpenCashier: i,
                            closeModalAndOpenPOI: s,
                            closeModalAndOpenPOA: a,
                            is_fully_authenticated: n
                        })]
                    })
                };
            je.propTypes = {
                status: y().number,
                landing_company_shortcode: y().string,
                is_fully_authenticated: y().bool,
                closeModal: y().func,
                closeModalAndOpenCashier: y().func,
                closeModalAndOpenPOA: y().func,
                closeModalAndOpenPOI: y().func
            };
            const we = e => {
                    let {
                        currency: t
                    } = e;
                    return (0, k.jsx)(_.Icon, {
                        icon: `IcCurrency-${t.toLowerCase()}`,
                        size: 120
                    })
                },
                Oe = e => {
                    let {
                        className: t
                    } = e;
                    return (0, k.jsx)(_.Icon, {
                        className: t,
                        icon: "IcCheckmarkCircle",
                        color: "green",
                        size: 24
                    })
                },
                ke = e => {
                    let {
                        className: t
                    } = e;
                    return (0, k.jsx)(_.Icon, {
                        className: t,
                        icon: "IcAlertDanger",
                        size: 24
                    })
                },
                Ne = e => {
                    let {
                        className: t
                    } = e;
                    return (0, k.jsx)(_.Icon, {
                        className: t,
                        icon: "IcCrossCircle",
                        size: 24,
                        color: "red"
                    })
                },
                Se = e => {
                    let {
                        closeModal: t
                    } = e;
                    return (0, k.jsx)("div", {
                        onClick: t,
                        className: "status-dialog__close",
                        children: (0, k.jsx)(_.Icon, {
                            icon: "IcCross"
                        })
                    })
                },
                Ce = (0, p.observer)((e => {
                    let {
                        closeModal: t,
                        currency: r,
                        history: n,
                        icon_size: o
                    } = e;
                    const {
                        isDesktop: i
                    } = (0, s.Y)(), {
                        client: c
                    } = (0, g.A)(), {
                        landing_company_shortcode: l,
                        is_fully_authenticated: u
                    } = c, d = () => (0, fe.yt)({
                        landing_company_shortcode: l
                    });
                    return (0, k.jsxs)(_.Div100vhContainer, {
                        className: "status-dialog",
                        is_disabled: i,
                        height_offset: "40px",
                        children: [i && (0, k.jsx)(Se, {
                            closeModal: t
                        }), (0, k.jsxs)("div", {
                            className: a()("status-dialog__header", {
                                "status-dialog__header--large": "large" === o,
                                "status-dialog__header--xlarge": "xlarge" === o
                            }),
                            children: [(0, k.jsx)(we, {
                                currency: r
                            }), d() === fe.fN.SUCCESS && (0, k.jsx)(Oe, {
                                className: "bottom-right-overlay"
                            }), d() === fe.fN.WARN && (0, k.jsx)(ke, {
                                className: "bottom-right-overlay"
                            }), d() === fe.fN.DANGER && (0, k.jsx)(Ne, {
                                className: "bottom-right-overlay"
                            })]
                        }), (0, k.jsxs)("div", {
                            className: a()("status-dialog__body", {
                                "status-dialog__body--no-grow": !i
                            }),
                            children: [(0, k.jsx)(be, {}), (0, k.jsx)(ye, {
                                is_fully_authenticated: u,
                                landing_company_shortcode: l,
                                status: d()
                            })]
                        }), (0, k.jsx)(je, {
                            closeModal: t,
                            closeModalAndOpenPOI: () => {
                                t(), n.push(h.routes.proof_of_identity)
                            },
                            closeModalAndOpenPOA: () => {
                                t(), n.push(h.routes.proof_of_address)
                            },
                            closeModalAndOpenCashier: () => {
                                t(), n.push(h.routes.cashier_deposit)
                            },
                            is_fully_authenticated: u,
                            landing_company_shortcode: l,
                            status: d()
                        })]
                    })
                }));
            Ce.defaultProps = {
                icon_size: "large"
            }, Ce.propTypes = {
                closeModal: y().func,
                currency: y().string,
                history: y().object,
                icon: y().object,
                icon_size: y().string
            };
            const Ae = (0, o.withRouter)(Ce),
                Pe = e => {
                    let {
                        icon: t,
                        color: r
                    } = e;
                    return (0, k.jsx)(_.Icon, {
                        className: "status-container__body-status-icon",
                        icon: t,
                        color: r,
                        size: 32
                    })
                },
                ze = (0, p.observer)((e => {
                    let {
                        closeModal: t,
                        currency: r
                    } = e;
                    const {
                        isDesktop: n
                    } = (0, s.Y)(), {
                        client: o,
                        ui: i
                    } = (0, g.A)(), {
                        landing_company_shortcode: a
                    } = o, {
                        setShouldShowOneTimeDepositModal: c
                    } = i, l = () => (0, fe.yt)({
                        landing_company_shortcode: a
                    });
                    return (0, k.jsxs)(_.Div100vhContainer, {
                        className: "status-container",
                        is_disabled: n,
                        height_offset: "40px",
                        children: [n && (0, k.jsx)("div", {
                            onClick: t,
                            className: "status-container__header",
                            children: (0, k.jsx)(_.Icon, {
                                icon: "IcCross"
                            })
                        }), (0, k.jsxs)("div", {
                            className: "status-container__body",
                            children: [(0, k.jsxs)("div", {
                                className: "status-container__body-icon",
                                children: [(0, k.jsx)(_.Icon, {
                                    icon: `IcCurrency-${r.toLowerCase()}`,
                                    size: 96
                                }), l() === fe.fN.SUCCESS && (0, k.jsx)(Pe, {
                                    icon: "IcCheckmarkCircle",
                                    color: "green"
                                }), l() === fe.fN.WARN && (0, k.jsx)(Pe, {
                                    icon: "IcAlertDanger"
                                }), l() === fe.fN.DANGER && (0, k.jsx)(Pe, {
                                    icon: "IcCrossCircle",
                                    color: "red"
                                })]
                            }), (0, k.jsx)(_.Text, {
                                className: "status-container__body-text",
                                as: "h2",
                                align: "center",
                                weight: "bold",
                                size: "s",
                                line_height: "m",
                                children: (0, k.jsx)(m.Localize, {
                                    i18n_default_text: "Deposit now to start trading"
                                })
                            }), (0, k.jsx)(_.Text, {
                                as: "p",
                                align: "center",
                                size: "xs",
                                line_height: "sm",
                                children: (0, k.jsx)(m.Localize, {
                                    i18n_default_text: "Your {{ currency }} account is ready.",
                                    values: {
                                        currency: r
                                    }
                                })
                            })]
                        }), (0, k.jsxs)("div", {
                            className: "status-container__footer",
                            children: [l() !== fe.fN.PENDING && (0, k.jsx)(_.Button, {
                                secondary: !0,
                                text: (0, m.localize)("Maybe later"),
                                wide: !n,
                                onClick: t
                            }), (0, k.jsx)(_.Button, {
                                className: "status-container__button",
                                primary: !0,
                                text: (0, m.localize)("Deposit"),
                                onClick: () => {
                                    t(), c(!0)
                                },
                                wide: !n
                            })]
                        })]
                    })
                }));
            ze.propTypes = {
                closeModal: y().func,
                currency: y().string,
                closeModalAndOpenDeposit: y().func
            };
            const Ie = (0, o.withRouter)(ze);
            var De = r(281476);

            function Te(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Le(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Te(Object(r), !0).forEach((function(t) {
                        Ee(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Te(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function Ee(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const Me = n.lazy((() => (0, h.moduleLoader)((() => Promise.all([r.e(1627), r.e(9636)]).then(r.bind(r, 852783)))))),
                Fe = {
                    account_wizard: 0,
                    add_or_manage_account: 1,
                    finished_set_currency: 2,
                    status_dialog: 3,
                    new_status_dialog: 11,
                    set_currency: 4,
                    signup_error: 5,
                    choose_crypto_currency: 6,
                    add_currency: 7,
                    finished_add_currency: 8,
                    restricted_country_signup_error: 9,
                    invalid_input_error: 10
                };
            let Re = 0;
            const Be = e => {
                    let {
                        currency: t,
                        real_account_signup_target: r
                    } = e;
                    const n = "deposit_cash" === r;
                    return !("maltainvest" === r) && !t || Re === Fe.set_currency ? (0, k.jsx)(m.Localize, {
                        i18n_default_text: "Set a currency for your real account"
                    }) : n ? (0, k.jsx)(m.Localize, {
                        i18n_default_text: "Add a Deriv Gaming account"
                    }) : "maltainvest" === r ? (0, k.jsx)(m.Localize, {
                        i18n_default_text: "Setup your account"
                    }) : (0, k.jsx)(m.Localize, {
                        i18n_default_text: "Add a Deriv account"
                    })
                },
                Ue = (0, p.observer)((e => {
                    let {
                        history: t,
                        state_index: r,
                        is_trading_experience_incomplete: o
                    } = e;
                    const {
                        isDesktop: i
                    } = (0, s.Y)(), {
                        ui: c,
                        client: u,
                        traders_hub: p,
                        modules: f
                    } = (0, g.A)(), {
                        available_crypto_currencies: b,
                        currency: y,
                        fetchAccountSettings: x,
                        has_fiat: v,
                        has_active_real_account: j,
                        is_from_restricted_country: w,
                        realAccountSignup: O,
                        redirectToLegacyPlatform: N
                    } = u, {
                        closeRealAccountSignup: S,
                        deposit_real_account_signup_target: C,
                        is_real_acc_signup_on: A,
                        real_account_signup_target: P,
                        setIsTradingAssessmentForNewUserEnabled: z,
                        setIsClosingCreateRealAccountModal: I,
                        setRealAccountSignupParams: D,
                        setShouldShowAppropriatenessWarningModal: T,
                        setShouldShowRiskWarningModal: L,
                        should_show_appropriateness_warning_modal: E,
                        should_show_risk_warning_modal: M,
                        setShouldShowOneTimeDepositModal: R,
                        toggleAccountSuccessModal: B,
                        real_account_signup: U,
                        is_trading_assessment_for_new_user_enabled: W
                    } = c, {
                        show_eu_related_content: $
                    } = p, {
                        deposit_target: Y,
                        setDepositTarget: V
                    } = f.cashier.general_store, q = f.cashier.general_store.setIsDeposit, X = f.cashier.general_store.should_show_all_available_currencies, [J, Q] = n.useState(null), [ee, te] = n.useState(!1), [re, ne] = n.useState(null), [oe, ie] = n.useState(!1), [se, ce] = n.useState({}), [le, ue] = n.useState(""), [de] = n.useState([{
                        action: "signup",
                        body: e => (0, k.jsx)(n.Suspense, {
                            fallback: (0, k.jsx)(_.UILoader, {}),
                            children: (0, k.jsx)(Me, {
                                setIsRiskWarningVisible: ie,
                                onFinishSuccess: fe,
                                onNewFinishSuccess: be,
                                onOpenDepositModal: pe,
                                onOpenWelcomeModal: ye,
                                is_loading: e.is_loading,
                                setLoading: je,
                                onError: we,
                                onClose: ke,
                                realAccountSignup: O,
                                setRealAccountFormData: ce
                            })
                        }),
                        title: Be
                    }, {
                        action: "multi",
                        body: e => (0, k.jsx)(H, {
                            onSuccessSetAccountCurrency: ve,
                            is_loading: e.is_loading,
                            setLoading: je,
                            onError: we,
                            is_add_crypto: "add_crypto" === e.real_account_signup_target,
                            is_add_fiat: "add_fiat" === e.real_account_signup_target,
                            is_add_currency: "add_currency" === e.real_account_signup_target,
                            deposit_target: e.deposit_target,
                            onClose: ke
                        }),
                        title: e => {
                            var t;
                            return "add_crypto" === e.real_account_signup_target ? (0, m.localize)("Create a cryptocurrency account") : "add_fiat" === e.real_account_signup_target ? (0, m.localize)("Add a Deriv real account") : "add_currency" === e.real_account_signup_target ? (0, m.localize)("Create a new account") : e.has_fiat && 0 === (null === (t = e.available_crypto_currencies) || void 0 === t ? void 0 : t.length) ? (0, m.localize)("Manage account") : (0, m.localize)("Add or manage account")
                        }
                    }, {
                        body: e => (0, k.jsx)(Z, {
                            prev: e.state_value.previous_currency,
                            current: e.state_value.current_currency,
                            onCancel: Oe,
                            onSubmit: xe,
                            deposit_real_account_signup_target: e.deposit_real_account_signup_target,
                            deposit_target: e.deposit_target,
                            closeRealAccountSignup: S,
                            setIsDeposit: q,
                            history: t
                        }),
                        title: e => {
                            var t;
                            return e.has_fiat && 0 === (null === (t = e.available_crypto_currencies) || void 0 === t ? void 0 : t.length) ? (0, m.localize)("Manage account") : (0, m.localize)("Add or manage account")
                        }
                    }, {
                        body: e => (0, k.jsx)(Ae, {
                            currency: e.state_value.currency,
                            closeModal: Oe
                        })
                    }, {
                        body: e => (0, k.jsx)(ae, {
                            is_loading: e.is_loading,
                            setLoading: je,
                            onError: we,
                            onClose: ke,
                            onSuccessSetAccountCurrency: ve
                        }),
                        title: Be
                    }, {
                        body: e => {
                            var t;
                            return (0, k.jsx)(ge, {
                                message: e.state_value.error_message || (null === (t = e.state_value.error_code) || void 0 === t ? void 0 : t.message_to_client),
                                code: e.state_value.error_code,
                                onConfirm: () => Ne(e.state_value.error_code)
                            })
                        },
                        title: e => {
                            var t;
                            return "add_crypto" === (null == e ? void 0 : e.real_account_signup_target) ? (0, m.localize)("Create a cryptocurrency account") : "add_fiat" === (null == e ? void 0 : e.real_account_signup_target) ? (0, m.localize)("Add a Deriv real account") : "add_currency" === (null == e ? void 0 : e.real_account_signup_target) ? (0, m.localize)("Create a new account") : null != e && e.has_fiat && 0 === (null == e || null === (t = e.available_crypto_currencies) || void 0 === t ? void 0 : t.length) ? (0, m.localize)("Manage account") : Ye ? null : (0, m.localize)("Add or manage account")
                        }
                    }, {
                        body: () => (0, k.jsx)(G, {
                            className: "account-wizard__body",
                            onError: we
                        }),
                        title: e => e.should_show_all_available_currencies ? (0, m.localize)("Choose an account") : (0, m.localize)("Choose a cryptocurrency account")
                    }, {
                        body: () => (0, k.jsx)(F, {
                            className: "account-wizard__body",
                            onError: we
                        }),
                        title: () => (0, m.localize)("Create a new account")
                    }, {
                        body: e => (0, k.jsx)(K, {
                            redirectToLegacyPlatform: N,
                            prev: e.state_value.previous_currency,
                            current: e.state_value.current_currency,
                            onSubmit: xe,
                            deposit_real_account_signup_target: e.deposit_real_account_signup_target,
                            deposit_target: e.deposit_target,
                            closeRealAccountSignup: S,
                            setIsDeposit: q,
                            history: t
                        })
                    }, {
                        body: e => {
                            var t;
                            return (0, k.jsx)(ge, {
                                message: e.state_value.error_message || (null === (t = e.state_value.error_code) || void 0 === t ? void 0 : t.message_to_client),
                                code: e.state_value.error_code,
                                onConfirm: S,
                                className: "restricted-country-error"
                            })
                        }
                    }, {
                        body: e => {
                            var t;
                            return (0, k.jsx)(ge, {
                                message: e.state_value.error_message || (null === (t = e.state_value.error_code) || void 0 === t ? void 0 : t.message_to_client),
                                code: e.state_value.error_code,
                                onConfirm: Ne,
                                error_field: e.state_value,
                                className: "invalid-input-error"
                            })
                        }
                    }, {
                        body: e => (0, k.jsx)(Ie, {
                            currency: e.state_value.currency,
                            closeModal: Oe
                        })
                    }]), [_e, he] = n.useState(!1), me = n.useCallback((e => {
                        "maltainvest" !== P && De.Analytics.trackEvent("ce_real_account_signup_form", Le({
                            form_source: document.referrer,
                            form_name: "real_account_signup_form",
                            landing_company: P
                        }, e))
                    }), [P]);
                    n.useEffect((() => {
                        A && "svg" === P && me({
                            action: "open"
                        })
                    }), [A, P, me]);
                    const pe = () => {
                            S(), u.is_mf_account ? B() : R(!0)
                        },
                        fe = e => {
                            D({
                                active_modal_index: Fe.status_dialog,
                                currency: e
                            })
                        },
                        be = e => {
                            D({
                                active_modal_index: Fe.new_status_dialog,
                                currency: e
                            })
                        },
                        ye = e => {
                            S(), D({
                                currency: e
                            })
                        },
                        xe = () => {
                            S(), t.push(h.routes.cashier_deposit)
                        },
                        ve = (e, t, r) => {
                            D({
                                previous_currency: e,
                                current_currency: t,
                                active_modal_index: r ? Fe.finished_add_currency : Fe.finished_set_currency
                            })
                        },
                        je = e => {
                            te(e)
                        },
                        we = (e, t) => {
                            var r;
                            t && (e => {
                                localStorage.setItem("real_account_signup_wizard", JSON.stringify(e.map((e => "object" == typeof e.form_value && e.form_value))))
                            })(t), Q(null === (r = de[Se()]) || void 0 === r ? void 0 : r.action), ne(e), me({
                                action: "other_error",
                                real_signup_error_message: e
                            })
                        };
                    n.useEffect((() => (ue((0, m.localize)("Risk Tolerance Warning")), () => z(o))), []), n.useEffect((() => {
                        re && D(Le({
                            active_modal_index: ["InputValidationFailed", "PoBoxInAddress", "InvalidPhone"].includes(re.code) ? Fe.invalid_input_error : Fe.signup_error,
                            error_message: re.message,
                            error_code: re.code
                        }, "InputValidationFailed" === re.code && {
                            error_details: re.details
                        }))
                    }), [re]), n.useEffect((() => {
                        w && D({
                            active_modal_index: Fe.restricted_country_signup_error,
                            error_message: (0, m.localize)("Adding more real accounts has been restricted for your country."),
                            error_code: "InvalidAccount"
                        })
                    }), [w, A]);
                    const Oe = e => {
                            "noopener noreferrer" === (null == e ? void 0 : e.target.getAttribute("rel")) || null != e && e.target.closest(".redirect-notice") || null != e && e.target.closest(".dc-popover__bubble") || (Se() === Fe.status_dialog && Se() === Fe.new_status_dialog || (sessionStorage.removeItem("post_real_account_signup"), localStorage.removeItem("real_account_signup_wizard")), S())
                        },
                        ke = e => {
                            !e || "noopener noreferrer" === (null == e ? void 0 : e.target.getAttribute("rel")) || null != e && e.target.closest(".redirect-notice") || null != e && e.target.closest(".dc-popover__bubble") || (Se() === Fe.status_dialog && Se() === Fe.new_status_dialog || (sessionStorage.removeItem("post_real_account_signup"), localStorage.removeItem("real_account_signup_wizard")), Y === h.routes.cashier_onramp && V(""), "signup" !== de[Se()].action ? (S(), N()) : I(!0))
                        },
                        Ne = e => {
                            je(!0), D({
                                active_modal_index: "multi" === J || ["CurrencyTypeNotAllowed", "DuplicateCurrency"].includes(e) ? Fe.add_or_manage_account : Fe.account_wizard
                            })
                        },
                        Se = () => "choose" === P ? (Re = Fe.choose_crypto_currency, Re) : ["add_crypto", "add_fiat", "add_currency"].includes(P) ? (Re = Fe.add_or_manage_account, Re) : (Re = -1 === U.active_modal_index ? j && y && "manage" === P ? Fe.add_or_manage_account : "set_currency" === P ? Fe.set_currency : Fe.account_wizard : U.active_modal_index, Re),
                        {
                            title: Ce,
                            body: Pe
                        } = de[Se()],
                        {
                            account_wizard: ze,
                            add_or_manage_account: Te,
                            finished_set_currency: Ee,
                            status_dialog: Ue,
                            new_status_dialog: We,
                            set_currency: $e,
                            signup_error: Ye,
                            restricted_country_signup_error: He,
                            invalid_input_error: Ve
                        } = Fe,
                        Ge = [ze, Te, $e, Ye].includes(Se()),
                        qe = async () => {
                            je(!0);
                            try {
                                const e = await O(Le(Le({}, se), {}, {
                                    accept_risk: 1
                                }));
                                h.WS.authorized.getAccountStatus().then((t => {
                                    var r;
                                    const {
                                        get_account_status: n
                                    } = t;
                                    var o, i;
                                    (T(!1), "maltainvest" !== P || null != n && null !== (r = n.status) && void 0 !== r && r.includes("cashier_locked")) ? (fe(null == e || null === (o = e.new_account_maltainvest) || void 0 === o ? void 0 : o.currency.toLowerCase()), be(null == e || null === (i = e.new_account_maltainvest) || void 0 === i ? void 0 : i.currency.toLowerCase())) : pe()
                                }))
                            } catch (e) {} finally {
                                x(), je(!1)
                            }
                        },
                        Ke = async () => {
                            je(!0), he(!0);
                            try {
                                await O(Le(Le({}, se), {}, {
                                    accept_risk: 0
                                }))
                            } catch (e) {
                                ue((0, m.localize)("24-hour Cool Down Warning")), "AppropriatenessTestFailed" === e.code && (T(!1), L(!0))
                            } finally {
                                x(), je(!1)
                            }
                        },
                        Xe = () => {
                            S(), L(!1), he(!1)
                        };
                    return _e ? (0, k.jsx)(l(), {
                        show_risk_modal: _e,
                        title: le,
                        handleAcceptRisk: Xe,
                        body_content: (0, k.jsx)(m.Localize, {
                            i18n_default_text: "CFDs and other financial instruments come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs and other financial instruments work and whether you can afford to take the risk of losing your money. <0/><0/> As you have declined our previous warning, you would need to wait 24 hours before you can proceed further.",
                            components: [(0, k.jsx)("br", {}, 0)]
                        })
                    }) : W && M ? (0, k.jsx)(l(), {
                        show_risk_modal: M,
                        title: le,
                        handleAcceptRisk: Xe,
                        body_content: (0, k.jsx)(m.Localize, {
                            i18n_default_text: "CFDs and other financial instruments come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs and other financial instruments work and whether you can afford to take the high risk of losing your money. <0/><0/> To continue, kindly note that you would need to wait 24 hours before you can proceed further.",
                            components: [(0, k.jsx)("br", {}, 0)]
                        })
                    }) : E ? (0, k.jsx)(d(), {
                        show_risk_modal: E,
                        body_content: (0, k.jsxs)(_.Text, {
                            as: "p",
                            size: "xs",
                            children: [(0, k.jsx)(m.Localize, {
                                i18n_default_text: "In providing our services to you, we are required to ask you for some information to assess if a given product or service is appropriate for you and whether you have the experience and knowledge to understand the risks involved.<0/><0/>",
                                components: [(0, k.jsx)("br", {}, 0)]
                            }), (0, k.jsx)(m.Localize, {
                                i18n_default_text: "On the basis of the information provided in relation to your knowledge and experience, we consider that the investments available via this website are not appropriate for you.<0/><0/>",
                                components: [(0, k.jsx)("br", {}, 0)]
                            }), (0, k.jsx)(m.Localize, {
                                i18n_default_text: "By clicking ‘Accept’ and proceeding with the account opening, you should note that you may be exposing yourself to risks. These risks, which may be significant, include the risk of losing the entire sum invested, and you may not have the knowledge and experience to properly assess or mitigate them."
                            })]
                        }),
                        footer_content: (0, k.jsxs)(n.Fragment, {
                            children: [(0, k.jsx)(_.Button, {
                                type: "button",
                                large: !0,
                                text: (0, m.localize)("Decline"),
                                secondary: !0,
                                onClick: Ke
                            }), (0, k.jsx)(_.Button, {
                                type: "button",
                                large: !0,
                                text: (0, m.localize)("Accept"),
                                primary: !0,
                                onClick: qe,
                                is_loading: ee
                            })]
                        })
                    }) : (0, k.jsx)(n.Fragment, {
                        children: A && (0, k.jsx)(n.Fragment, {
                            children: i ? (0, k.jsx)(_.Modal, {
                                id: "real_account_signup_modal",
                                className: a()("real-account-signup-modal", {
                                    "dc-modal__container_real-account-signup-modal--error": [Ye, He, Ve].includes(Se()),
                                    "dc-modal__container_real-account-signup-modal--success": [Ee, Ue].includes(Se())
                                }),
                                is_open: A,
                                is_risk_warning_visible: oe,
                                has_close_icon: "samoa" !== P,
                                is_title_centered: "samoa" === P,
                                renderTitle: () => Ce && ![Ee, Ue].includes(Se()) ? (0, k.jsx)(Ce, {
                                    available_crypto_currencies: b,
                                    currency: y,
                                    has_fiat: v,
                                    is_eu: $,
                                    real_account_signup_target: P,
                                    should_show_all_available_currencies: X
                                }) : null,
                                toggleModal: ke,
                                height: (() => {
                                    if (w) return "304px";
                                    if ([Ve, Ue, We, Ye].includes(Se())) return "auto";
                                    if (!y || Se() === Fe.set_currency) return "688px";
                                    if (j && y) {
                                        if ($ && Se() === Fe.add_or_manage_account) return "420px";
                                        if ([Fe.finished_set_currency, Fe.finished_add_currency].includes(Se())) return "auto"
                                    }
                                    return "740px"
                                })(),
                                width: w || [Fe.invalid_input_error, Fe.signup_error].includes(Se()) ? "440px" : Ge ? "955px" : "auto",
                                elements_to_ignore: [document.querySelector(".modal-root")],
                                children: (0, k.jsx)(Pe, {
                                    state_value: U,
                                    passthrough: r,
                                    is_loading: ee,
                                    real_account_signup_target: P,
                                    deposit_real_account_signup_target: C,
                                    deposit_target: Y
                                })
                            }) : (0, k.jsx)(_.MobileDialog, {
                                portal_element_id: "modal_root",
                                wrapper_classname: "account-signup-mobile-dialog",
                                visible: A,
                                onClose: ke,
                                has_full_height: Se() === Fe.signup_error,
                                renderTitle: () => Ce ? (0, k.jsx)(Ce, {
                                    currency: y,
                                    real_account_signup_target: P,
                                    should_show_all_available_currencies: X
                                }) : null,
                                children: (0, k.jsx)(Pe, {
                                    state_value: U,
                                    passthrough: r,
                                    is_loading: ee,
                                    real_account_signup_target: P,
                                    deposit_real_account_signup_target: C,
                                    deposit_target: Y
                                })
                            })
                        })
                    })
                })),
                We = (0, o.withRouter)(Ue)
        },
        945331: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => c
            });
            r(286326);
            var n = r(592353),
                o = r(836870);

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach((function(t) {
                        s(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function s(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const c = e => (0, o.jsx)("div", {
                className: "account-signup-loader",
                children: (0, o.jsx)(n.Loading, a(a({}, e), {}, {
                    is_fullscreen: !1
                }))
            })
        },
        878262: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => l
            });
            r(286326);
            var n = r(592353),
                o = r(478784),
                i = r(33118),
                a = r(500309),
                s = r(414646),
                c = r(836870);
            const l = (0, a.observer)((() => {
                const {
                    client: e,
                    ui: t
                } = (0, s.A)(), {
                    is_virtual: r
                } = e, {
                    is_set_currency_modal_visible: a,
                    openRealAccountSignup: l,
                    toggleSetCurrencyModal: u
                } = t, d = (0, o.A)();
                return (0, c.jsxs)(n.Modal, {
                    id: "dt_set_account_currency_modal",
                    has_close_icon: !1,
                    is_open: a,
                    small: !0,
                    toggleModal: u,
                    title: d ? (0, i.localize)("You have an account that needs action") : (0, i.localize)("No currency assigned to your account"),
                    children: [(0, c.jsx)(n.Modal.Body, {
                        children: (0, i.localize)("Please set a currency for your existing real account before creating another account.")
                    }), (0, c.jsx)(n.Modal.Footer, {
                        children: r ? (0, c.jsx)(n.Button, {
                            has_effect: !0,
                            text: (0, i.localize)("OK"),
                            onClick: u,
                            primary: !0
                        }) : (0, c.jsxs)(c.Fragment, {
                            children: [(0, c.jsx)(n.Button, {
                                has_effect: !0,
                                text: (0, i.localize)("Cancel"),
                                onClick: u,
                                secondary: !0
                            }), (0, c.jsx)(n.Button, {
                                has_effect: !0,
                                text: (0, i.localize)("Set currency"),
                                onClick: () => {
                                    u(), setTimeout((() => {
                                        l("set_currency")
                                    }), 250)
                                },
                                primary: !0
                            })]
                        })
                    })]
                })
            }))
        },
        203117: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r(286326);
            const o = e => {
                let {
                    onUpdate: t
                } = e;
                return n.useEffect((() => {
                    const e = () => {
                            document.removeEventListener("UpdateAvailable", t)
                        },
                        r = () => {
                            document.addEventListener("UpdateAvailable", t)
                        };
                    return document.addEventListener("UpdateAvailable", t), document.addEventListener("IgnorePWAUpdate", e), document.addEventListener("ListenPWAUpdate", r), () => {
                        document.removeEventListener("IgnorePWAUpdate", e), document.removeEventListener("ListenPWAUpdate", r), document.removeEventListener("UpdateAvailable", t)
                    }
                }), []), null
            }
        },
        461297: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r(414646),
                o = r(56752);
            const i = () => {
                const {
                    client: e
                } = (0, n.A)(), {
                    landing_company_shortcode: t,
                    residence: r
                } = e, i = (0, o.A)();
                return "im" !== r && ("malta" !== t || i)
            }
        },
        647620: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => u
            });
            var n = r(286326),
                o = r(773835),
                i = r(414646);
            const a = ["data"];

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach((function(t) {
                        l(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function l(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const u = e => {
                var t;
                const {
                    client: r
                } = (0, i.A)(), {
                    accounts: s,
                    loginid: l = ""
                } = r, u = null === (t = s[l || ""]) || void 0 === t ? void 0 : t.token, d = (0, o.A)("authorize", {
                    payload: {
                        authorize: null != e ? e : u
                    },
                    options: {
                        enabled: Boolean(null != e ? e : u),
                        refetchOnWindowFocus: !1
                    }
                }), {
                    data: _
                } = d, h = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = function(e, t) {
                        if (null == e) return {};
                        var r = {};
                        for (var n in e)
                            if ({}.hasOwnProperty.call(e, n)) {
                                if (-1 !== t.indexOf(n)) continue;
                                r[n] = e[n]
                            }
                        return r
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < i.length; n++) r = i[n], -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                    return o
                }(d, a), m = (0, n.useMemo)((() => c({}, null == _ ? void 0 : _.authorize)), [null == _ ? void 0 : _.authorize]);
                return c({
                    data: m
                }, h)
            }
        },
        56752: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r(414646);
            const o = () => {
                const {
                    client: e
                } = (0, n.A)(), {
                    active_accounts: t
                } = e;
                return t.some((e => "maltainvest" === e.landing_company_shortcode))
            }
        },
        132870: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r(414646);
            const o = () => {
                const {
                    client: e
                } = (0, n.A)(), {
                    active_accounts: t
                } = e;
                return t.some((e => "svg" === e.landing_company_shortcode))
            }
        },
        673285: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r(414646),
                o = r(56752),
                i = r(132870);
            const a = () => {
                const {
                    traders_hub: e
                } = (0, n.A)(), {
                    is_eu_user: t,
                    is_real: r
                } = e, a = (0, i.A)(), s = (0, o.A)();
                return (a && !s && t || !a && s && !t) && r
            }
        },
        788624: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r(286326),
                o = r(959259);
            const i = () => {
                const e = (0, n.useContext)(o.A);
                if (!e) throw new Error("useP2PSettingsContext must be used within a P2PSettingsProvider");
                return e
            }
        },
        427596: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => c
            });
            var n = r(773835),
                o = r(414646);
            const i = ["data"];

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function s(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const c = e => {
                var t;
                const {
                    client: r
                } = (0, o.A)(), {
                    residence: c
                } = r, l = (0, n.A)("paymentagent_list", {
                    payload: {
                        paymentagent_list: c,
                        currency: e
                    },
                    options: {
                        enabled: Boolean(c)
                    }
                }), {
                    data: u
                } = l, d = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = function(e, t) {
                        if (null == e) return {};
                        var r = {};
                        for (var n in e)
                            if ({}.hasOwnProperty.call(e, n)) {
                                if (-1 !== t.indexOf(n)) continue;
                                r[n] = e[n]
                            }
                        return r
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < i.length; n++) r = i[n], -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                    return o
                }(l, i);
                return function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? a(Object(r), !0).forEach((function(t) {
                            s(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }({
                    data: null == u || null === (t = u.paymentagent_list) || void 0 === t ? void 0 : t.list
                }, d)
            }
        },
        594269: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => u
            });
            var n = r(773835),
                o = r(504377),
                i = r(414646),
                a = r(286326);
            const s = ["data"];

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function l(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const u = () => {
                var e;
                const {
                    client: t
                } = (0, i.A)(), {
                    is_authorize: r,
                    is_logged_in: u
                } = t, [d, _] = (0, a.useState)(!1);
                (0, a.useEffect)((() => {
                    (async () => {
                        try {
                            await o.WS.wait("authorize") && _(r && u)
                        } catch (e) {
                            console.error("Error while authorizing:", e)
                        }
                    })()
                }), [r, u]);
                const h = (0, n.A)("get_settings", {
                        options: {
                            enabled: Boolean(d),
                            refetchOnWindowFocus: !1
                        }
                    }),
                    {
                        data: m
                    } = h,
                    p = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = function(e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (-1 !== t.indexOf(n)) continue;
                                    r[n] = e[n]
                                }
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < i.length; n++) r = i[n], -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                    }(h, s);
                return function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? c(Object(r), !0).forEach((function(t) {
                            l(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }({
                    data: Boolean(null == m || null === (e = m.get_settings) || void 0 === e ? void 0 : e.is_authenticated_payment_agent)
                }, p)
            }
        },
        298497: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r(286326),
                o = r(159859);
            const i = () => {
                const {
                    data: e
                } = (0, o.A)();
                return (0, n.useMemo)((() => {
                    const t = {
                        ctrader: [],
                        derivez: [],
                        dtrade: [],
                        dxtrade: [],
                        mt5: []
                    };
                    return null == e || e.forEach((e => {
                        const r = e.linked_to;
                        null == r || r.forEach((e => {
                            null != e && e.platform && null != e && e.loginid && t[e.platform].push(e)
                        }))
                    })), t
                }), [e])
            }
        },
        159859: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => l
            });
            var n = r(286326),
                o = r(414646);

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach((function(t) {
                        s(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function s(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const c = {
                    Demo: {
                        dark: "IcWalletDerivDemoDark",
                        light: "IcWalletDerivDemoLight"
                    },
                    USD: {
                        dark: "IcWalletCurrencyUsd",
                        light: "IcWalletCurrencyUsd"
                    },
                    EUR: {
                        dark: "IcWalletCurrencyEur",
                        light: "IcWalletCurrencyEur"
                    },
                    AUD: {
                        dark: "IcWalletCurrencyAud",
                        light: "IcWalletCurrencyAud"
                    },
                    GBP: {
                        dark: "IcWalletCurrencyGbp",
                        light: "IcWalletCurrencyGbp"
                    },
                    BTC: {
                        dark: "IcWalletBitcoinDark",
                        light: "IcWalletBitcoinLight"
                    },
                    ETH: {
                        dark: "IcWalletEthereumDark",
                        light: "IcWalletEthereumLight"
                    },
                    USDT: {
                        dark: "IcWalletTetherDark",
                        light: "IcWalletTetherLight"
                    },
                    eUSDT: {
                        dark: "IcWalletTetherDark",
                        light: "IcWalletTetherLight"
                    },
                    tUSDT: {
                        dark: "IcWalletTetherDark",
                        light: "IcWalletTetherLight"
                    },
                    UST: {
                        dark: "IcWalletTetherDark",
                        light: "IcWalletTetherLight"
                    },
                    LTC: {
                        dark: "IcWalletLiteCoinDark",
                        light: "IcWalletLiteCoinLight"
                    },
                    USDC: {
                        dark: "IcWalletUsdCoinDark",
                        light: "IcWalletUsdCoinLight"
                    },
                    XRP: {
                        dark: "IcWalletXrpDark",
                        light: "IcWalletXrpLight"
                    }
                },
                l = () => {
                    const {
                        client: e
                    } = (0, o.A)(), {
                        accounts: t,
                        is_crypto: r
                    } = e, i = (0, n.useMemo)((() => {
                        var e;
                        return null === (e = Object.keys(t)) || void 0 === e || null === (e = e.filter((e => "wallet" === (null == t ? void 0 : t[e].account_category)))) || void 0 === e ? void 0 : e.map((e => {
                            var n, o, i, s;
                            const l = null == t ? void 0 : t[e],
                                u = e,
                                d = l.currency,
                                _ = Boolean(l.is_disabled),
                                h = Boolean(l.is_virtual),
                                m = r(d) ? "crypto" : "fiat",
                                p = h ? "demo" : m,
                                g = null === (n = l.landing_company_name) || void 0 === n ? void 0 : n.replace("maltainvest", "malta"),
                                f = "malta" === g,
                                b = null == l || null === (o = l.linked_to) || void 0 === o || null === (o = o.find((e => "dtrade" === (null == e ? void 0 : e.platform)))) || void 0 === o ? void 0 : o.loginid,
                                y = null == t || null === (i = t[null != b ? b : ""]) || void 0 === i ? void 0 : i.balance,
                                x = Boolean(null == t || null === (s = t[null != b ? b : ""]) || void 0 === s ? void 0 : s.is_disabled),
                                v = h ? "Demo" : d || "",
                                j = c[v],
                                w = {
                                    header: {
                                        dark: `wallet-header__${v.toLowerCase()}-bg--dark`,
                                        light: `wallet-header__${v.toLowerCase()}-bg`
                                    },
                                    card: {
                                        dark: `wallet-card__${v.toLowerCase()}-bg--dark`,
                                        light: `wallet-card__${v.toLowerCase()}-bg`
                                    }
                                };
                            return a(a({}, l), {}, {
                                dtrade_loginid: b,
                                dtrade_balance: y,
                                icons: j,
                                icon_type: p,
                                is_disabled: _,
                                is_virtual: h,
                                is_malta_wallet: f,
                                landing_company_name: g,
                                loginid: u,
                                gradients: w,
                                is_dtrader_account_disabled: x
                            })
                        }))
                    }), [t, r]), s = (0, n.useMemo)((() => {
                        if (i) return [...i].sort(((e, t) => e.is_virtual !== t.is_virtual ? e.is_virtual ? 1 : -1 : r(e.currency) !== r(t.currency) ? r(e.currency) ? 1 : -1 : (e.currency || "USD").localeCompare(t.currency || "USD")))
                    }), [r, i]);
                    return {
                        data: s,
                        has_wallet: s && s.length > 0
                    }
                }
        }
    }
]);
//# sourceMappingURL=core.chunk.3195.3b91927ada4b6b154a30.js.map