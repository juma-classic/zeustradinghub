/*! For license information please see trader.hooks_src_useMFAccountStatus_ts-src_AppV2_Components_Guide_Description_video-preview_tsx-src_-6b1461.d90e933419b4d99e8e30.js.LICENSE.txt */
'use strict';
(self.webpackChunk_deriv_trader = self.webpackChunk_deriv_trader || []).push([
    ['hooks_src_useMFAccountStatus_ts-src_AppV2_Components_Guide_Description_video-preview_tsx-src_-6b1461'],
    {
        '../hooks/src/useMFAccountStatus.ts': (e, t, r) => {
            r.d(t, {
                A: () => u,
            });
            var n = r('@deriv/shared'),
                o = r('../stores/src/useStore.ts');
            var a = r('react');

            function i(e) {
                return (
                    (i =
                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e &&
                                      'function' == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof e;
                              }),
                    i(e)
                );
            }

            function c() {
                c = function () {
                    return t;
                };
                var e,
                    t = {},
                    r = Object.prototype,
                    n = r.hasOwnProperty,
                    o =
                        Object.defineProperty ||
                        function (e, t, r) {
                            e[t] = r.value;
                        },
                    a = 'function' == typeof Symbol ? Symbol : {},
                    l = a.iterator || '@@iterator',
                    u = a.asyncIterator || '@@asyncIterator',
                    s = a.toStringTag || '@@toStringTag';

                function f(e, t, r) {
                    return (
                        Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                        }),
                        e[t]
                    );
                }
                try {
                    f({}, '');
                } catch (e) {
                    f = function (e, t, r) {
                        return (e[t] = r);
                    };
                }

                function d(e, t, r, n) {
                    var a = t && t.prototype instanceof g ? t : g,
                        i = Object.create(a.prototype),
                        c = new k(n || []);
                    return (
                        o(i, '_invoke', {
                            value: x(e, r, c),
                        }),
                        i
                    );
                }

                function p(e, t, r) {
                    try {
                        return {
                            type: 'normal',
                            arg: e.call(t, r),
                        };
                    } catch (e) {
                        return {
                            type: 'throw',
                            arg: e,
                        };
                    }
                }
                t.wrap = d;
                var h = 'suspendedStart',
                    m = 'suspendedYield',
                    v = 'executing',
                    y = 'completed',
                    _ = {};

                function g() {}

                function E() {}

                function b() {}
                var A = {};
                f(A, l, function () {
                    return this;
                });
                var T = Object.getPrototypeOf,
                    S = T && T(T(N([])));
                S && S !== r && n.call(S, l) && (A = S);
                var w = (b.prototype = g.prototype = Object.create(A));

                function L(e) {
                    ['next', 'throw', 'return'].forEach(function (t) {
                        f(e, t, function (e) {
                            return this._invoke(t, e);
                        });
                    });
                }

                function O(e, t) {
                    function r(o, a, c, l) {
                        var u = p(e[o], e, a);
                        if ('throw' !== u.type) {
                            var s = u.arg,
                                f = s.value;
                            return f && 'object' == i(f) && n.call(f, '__await')
                                ? t.resolve(f.__await).then(
                                      function (e) {
                                          r('next', e, c, l);
                                      },
                                      function (e) {
                                          r('throw', e, c, l);
                                      }
                                  )
                                : t.resolve(f).then(
                                      function (e) {
                                          (s.value = e), c(s);
                                      },
                                      function (e) {
                                          return r('throw', e, c, l);
                                      }
                                  );
                        }
                        l(u.arg);
                    }
                    var a;
                    o(this, '_invoke', {
                        value: function (e, n) {
                            function o() {
                                return new t(function (t, o) {
                                    r(e, n, t, o);
                                });
                            }
                            return (a = a ? a.then(o, o) : o());
                        },
                    });
                }

                function x(t, r, n) {
                    var o = h;
                    return function (a, i) {
                        if (o === v) throw Error('Generator is already running');
                        if (o === y) {
                            if ('throw' === a) throw i;
                            return {
                                value: e,
                                done: !0,
                            };
                        }
                        for (n.method = a, n.arg = i; ; ) {
                            var c = n.delegate;
                            if (c) {
                                var l = P(c, n);
                                if (l) {
                                    if (l === _) continue;
                                    return l;
                                }
                            }
                            if ('next' === n.method) n.sent = n._sent = n.arg;
                            else if ('throw' === n.method) {
                                if (o === h) throw ((o = y), n.arg);
                                n.dispatchException(n.arg);
                            } else 'return' === n.method && n.abrupt('return', n.arg);
                            o = v;
                            var u = p(t, r, n);
                            if ('normal' === u.type) {
                                if (((o = n.done ? y : m), u.arg === _)) continue;
                                return {
                                    value: u.arg,
                                    done: n.done,
                                };
                            }
                            'throw' === u.type && ((o = y), (n.method = 'throw'), (n.arg = u.arg));
                        }
                    };
                }

                function P(t, r) {
                    var n = r.method,
                        o = t.iterator[n];
                    if (o === e)
                        return (
                            (r.delegate = null),
                            ('throw' === n &&
                                t.iterator.return &&
                                ((r.method = 'return'), (r.arg = e), P(t, r), 'throw' === r.method)) ||
                                ('return' !== n &&
                                    ((r.method = 'throw'),
                                    (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
                            _
                        );
                    var a = p(o, t.iterator, r.arg);
                    if ('throw' === a.type) return (r.method = 'throw'), (r.arg = a.arg), (r.delegate = null), _;
                    var i = a.arg;
                    return i
                        ? i.done
                            ? ((r[t.resultName] = i.value),
                              (r.next = t.nextLoc),
                              'return' !== r.method && ((r.method = 'next'), (r.arg = e)),
                              (r.delegate = null),
                              _)
                            : i
                        : ((r.method = 'throw'),
                          (r.arg = new TypeError('iterator result is not an object')),
                          (r.delegate = null),
                          _);
                }

                function I(e) {
                    var t = {
                        tryLoc: e[0],
                    };
                    1 in e && (t.catchLoc = e[1]),
                        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                        this.tryEntries.push(t);
                }

                function R(e) {
                    var t = e.completion || {};
                    (t.type = 'normal'), delete t.arg, (e.completion = t);
                }

                function k(e) {
                    (this.tryEntries = [
                        {
                            tryLoc: 'root',
                        },
                    ]),
                        e.forEach(I, this),
                        this.reset(!0);
                }

                function N(t) {
                    if (t || '' === t) {
                        var r = t[l];
                        if (r) return r.call(t);
                        if ('function' == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var o = -1,
                                a = function r() {
                                    for (; ++o < t.length; )
                                        if (n.call(t, o)) return (r.value = t[o]), (r.done = !1), r;
                                    return (r.value = e), (r.done = !0), r;
                                };
                            return (a.next = a);
                        }
                    }
                    throw new TypeError(i(t) + ' is not iterable');
                }
                return (
                    (E.prototype = b),
                    o(w, 'constructor', {
                        value: b,
                        configurable: !0,
                    }),
                    o(b, 'constructor', {
                        value: E,
                        configurable: !0,
                    }),
                    (E.displayName = f(b, s, 'GeneratorFunction')),
                    (t.isGeneratorFunction = function (e) {
                        var t = 'function' == typeof e && e.constructor;
                        return !!t && (t === E || 'GeneratorFunction' === (t.displayName || t.name));
                    }),
                    (t.mark = function (e) {
                        return (
                            Object.setPrototypeOf
                                ? Object.setPrototypeOf(e, b)
                                : ((e.__proto__ = b), f(e, s, 'GeneratorFunction')),
                            (e.prototype = Object.create(w)),
                            e
                        );
                    }),
                    (t.awrap = function (e) {
                        return {
                            __await: e,
                        };
                    }),
                    L(O.prototype),
                    f(O.prototype, u, function () {
                        return this;
                    }),
                    (t.AsyncIterator = O),
                    (t.async = function (e, r, n, o, a) {
                        void 0 === a && (a = Promise);
                        var i = new O(d(e, r, n, o), a);
                        return t.isGeneratorFunction(r)
                            ? i
                            : i.next().then(function (e) {
                                  return e.done ? e.value : i.next();
                              });
                    }),
                    L(w),
                    f(w, s, 'Generator'),
                    f(w, l, function () {
                        return this;
                    }),
                    f(w, 'toString', function () {
                        return '[object Generator]';
                    }),
                    (t.keys = function (e) {
                        var t = Object(e),
                            r = [];
                        for (var n in t) r.push(n);
                        return (
                            r.reverse(),
                            function e() {
                                for (; r.length; ) {
                                    var n = r.pop();
                                    if (n in t) return (e.value = n), (e.done = !1), e;
                                }
                                return (e.done = !0), e;
                            }
                        );
                    }),
                    (t.values = N),
                    (k.prototype = {
                        constructor: k,
                        reset: function (t) {
                            if (
                                ((this.prev = 0),
                                (this.next = 0),
                                (this.sent = this._sent = e),
                                (this.done = !1),
                                (this.delegate = null),
                                (this.method = 'next'),
                                (this.arg = e),
                                this.tryEntries.forEach(R),
                                !t)
                            )
                                for (var r in this)
                                    't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e);
                        },
                        stop: function () {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ('throw' === e.type) throw e.arg;
                            return this.rval;
                        },
                        dispatchException: function (t) {
                            if (this.done) throw t;
                            var r = this;

                            function o(n, o) {
                                return (
                                    (c.type = 'throw'),
                                    (c.arg = t),
                                    (r.next = n),
                                    o && ((r.method = 'next'), (r.arg = e)),
                                    !!o
                                );
                            }
                            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                var i = this.tryEntries[a],
                                    c = i.completion;
                                if ('root' === i.tryLoc) return o('end');
                                if (i.tryLoc <= this.prev) {
                                    var l = n.call(i, 'catchLoc'),
                                        u = n.call(i, 'finallyLoc');
                                    if (l && u) {
                                        if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                        if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                                    } else if (l) {
                                        if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                    } else {
                                        if (!u) throw Error('try statement without catch or finally');
                                        if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                                    }
                                }
                            }
                        },
                        abrupt: function (e, t) {
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var o = this.tryEntries[r];
                                if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                                    var a = o;
                                    break;
                                }
                            }
                            a &&
                                ('break' === e || 'continue' === e) &&
                                a.tryLoc <= t &&
                                t <= a.finallyLoc &&
                                (a = null);
                            var i = a ? a.completion : {};
                            return (
                                (i.type = e),
                                (i.arg = t),
                                a ? ((this.method = 'next'), (this.next = a.finallyLoc), _) : this.complete(i)
                            );
                        },
                        complete: function (e, t) {
                            if ('throw' === e.type) throw e.arg;
                            return (
                                'break' === e.type || 'continue' === e.type
                                    ? (this.next = e.arg)
                                    : 'return' === e.type
                                      ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                                      : 'normal' === e.type && t && (this.next = t),
                                _
                            );
                        },
                        finish: function (e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), R(r), _;
                            }
                        },
                        catch: function (e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.tryLoc === e) {
                                    var n = r.completion;
                                    if ('throw' === n.type) {
                                        var o = n.arg;
                                        R(r);
                                    }
                                    return o;
                                }
                            }
                            throw Error('illegal catch attempt');
                        },
                        delegateYield: function (t, r, n) {
                            return (
                                (this.delegate = {
                                    iterator: N(t),
                                    resultName: r,
                                    nextLoc: n,
                                }),
                                'next' === this.method && (this.arg = e),
                                _
                            );
                        },
                    }),
                    t
                );
            }

            function l(e, t, r, n, o, a, i) {
                try {
                    var c = e[a](i),
                        l = c.value;
                } catch (e) {
                    return void r(e);
                }
                c.done ? t(l) : Promise.resolve(l).then(n, o);
            }
            const u = function () {
                var e = (0, o.A)().client.is_eu,
                    t = (0, o.A)().client.active_accounts.some(function (e) {
                        return 'maltainvest' === e.landing_company_shortcode;
                    }),
                    r = (function () {
                        var e,
                            t,
                            r,
                            i,
                            u,
                            s,
                            f,
                            d,
                            p = (0, o.A)().client || {},
                            h = p.account_status,
                            m = p.is_logged_in,
                            v = p.updateAccountStatus;
                        (0, a.useEffect)(function () {
                            function e() {
                                var t;
                                return (
                                    (t = c().mark(function e() {
                                        return c().wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (
                                                            !m ||
                                                            (h && window.location.pathname.startsWith(n.routes.trade))
                                                        ) {
                                                            e.next = 3;
                                                            break;
                                                        }
                                                        return (e.next = 3), v();
                                                    case 3:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    })),
                                    (e = function () {
                                        var e = this,
                                            r = arguments;
                                        return new Promise(function (n, o) {
                                            var a = t.apply(e, r);

                                            function i(e) {
                                                l(a, n, o, i, c, 'next', e);
                                            }

                                            function c(e) {
                                                l(a, n, o, i, c, 'throw', e);
                                            }
                                            i(void 0);
                                        });
                                    }),
                                    e.apply(this, arguments)
                                );
                            }
                            !(function () {
                                e.apply(this, arguments);
                            })();
                        }, []);
                        var y = null == h ? void 0 : h.authentication,
                            _ = null == y || null === (e = y.identity) || void 0 === e ? void 0 : e.status,
                            g =
                                null == y ||
                                null === (t = y.identity) ||
                                void 0 === t ||
                                null === (r = t.services) ||
                                void 0 === r ||
                                null === (i = r.onfido) ||
                                void 0 === i
                                    ? void 0
                                    : i.status,
                            E =
                                null == y ||
                                null === (u = y.identity) ||
                                void 0 === u ||
                                null === (s = u.services) ||
                                void 0 === s ||
                                null === (f = s.manual) ||
                                void 0 === f
                                    ? void 0
                                    : f.status,
                            b = null == y || null === (d = y.document) || void 0 === d ? void 0 : d.status,
                            A = 'none',
                            T = 'verified',
                            S = 'pending',
                            w = b && ['rejected', 'expired', 'suspected'].includes(b),
                            L = b === S,
                            O = b === A,
                            x = [g, E].includes(T),
                            P = [g, E].includes(S) && !x,
                            I = [g, E].every(function (e) {
                                return e === A;
                            }),
                            R = _ === T && b === T;
                        return {
                            mf_account_status:
                                b && g && E
                                    ? (!I && !P && !x) || w
                                        ? n.ACCOUNT_BADGE_STATUS.FAILED
                                        : I || O
                                          ? n.ACCOUNT_BADGE_STATUS.NEEDS_VERIFICATION
                                          : P || L
                                            ? n.ACCOUNT_BADGE_STATUS.PENDING
                                            : null
                                    : null,
                            kyc_status: R
                                ? {}
                                : {
                                      poi_status: _,
                                      poa_status: b,
                                      valid_tin: 1,
                                      required_tin: 1,
                                  },
                        };
                    })().mf_account_status;
                return e &&
                    t &&
                    r &&
                    [
                        n.ACCOUNT_BADGE_STATUS.PENDING,
                        n.ACCOUNT_BADGE_STATUS.FAILED,
                        n.ACCOUNT_BADGE_STATUS.NEEDS_VERIFICATION,
                    ].includes(r)
                    ? r
                    : null;
            };
        },
        './src/AppV2/Components/Guide/Description/video-preview.tsx': (e, t, r) => {
            r.d(t, {
                A: () => u,
            });
            var n = r('react'),
                o = r.n(n),
                a = r('../../node_modules/@cloudflare/stream-react/dist/stream-react.esm.js'),
                i = r('../../node_modules/@deriv-com/quill-ui/dist/components/Typography/caption/index.js'),
                c = r('./node_modules/@deriv/quill-icons/dist/esm/react/LabelPaired/LabelPairedPlayMdFillIcon.js'),
                l = r('@deriv/translations');
            const u = function (e) {
                var t = e.contract_type,
                    r = e.toggleVideoPlayer,
                    n = e.video_src,
                    u = e.only_show_thumbnail,
                    s = void 0 !== u && u,
                    f = e.custom_width,
                    d = e.custom_height;
                return o().createElement(
                    'div',
                    {
                        className: 'guide-video__wrapper',
                        onClick: r,
                        onKeyDown: r,
                    },
                    o().createElement(
                        'div',
                        {
                            className: 'guide-video__preview',
                            'data-testid': 'dt_video_preview',
                        },
                        o().createElement(a.Z, {
                            className: 'guide-video',
                            letterboxColor: 'transparent',
                            muted: !0,
                            preload: 'auto',
                            responsive: !1,
                            src: n,
                            width: f || '112px',
                            height: d || '73px',
                        }),
                        o().createElement(
                            'div',
                            {
                                className: 'guide-video__preview__icon__wrapper',
                            },
                            o().createElement(c.A, {
                                className: 'guide-video__preview__icon',
                            })
                        )
                    ),
                    !s &&
                        o().createElement(
                            'div',
                            {
                                className: 'guide-video__description',
                            },
                            o().createElement(
                                i.O,
                                {
                                    bold: !0,
                                    color: 'quill-typography__color--default',
                                },
                                o().createElement(l.Localize, {
                                    i18n_default_text: 'How to trade ',
                                }),
                                t,
                                '?'
                            ),
                            o().createElement(
                                i.O,
                                {
                                    color: 'quill-typography__color--default',
                                },
                                o().createElement(l.Localize, {
                                    i18n_default_text: 'Watch this video to learn about this trade type.',
                                })
                            )
                        )
                );
            };
        },
        './src/AppV2/Utils/contract-description-utils.tsx': (e, t, r) => {
            r.d(t, {
                ts: () => T,
                gl: () => w,
                H5: () => E,
                OG: () => b,
            });
            var n = r('react'),
                o = r.n(n),
                a = r('@deriv/translations'),
                i = r('../../node_modules/@deriv-com/quill-ui/dist/components/Typography/text/index.js'),
                c = r('../../node_modules/classnames/index.js'),
                l = r.n(c),
                u = r('@deriv/components'),
                s = r('../../node_modules/@deriv-com/ui/dist/hooks/useDevice.js'),
                f = r('@deriv/shared'),
                d = r('./src/AppV2/Utils/trade-types-utils.tsx'),
                p = r('../../node_modules/@lottiefiles/dotlottie-react/dist/index.js');

            function h(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var r =
                            null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != r) {
                            var n,
                                o,
                                a,
                                i,
                                c = [],
                                l = !0,
                                u = !1;
                            try {
                                if (((a = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                } else for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0);
                            } catch (e) {
                                (u = !0), (o = e);
                            } finally {
                                try {
                                    if (!l && null != r.return && ((i = r.return()), Object(i) !== i)) return;
                                } finally {
                                    if (u) throw o;
                                }
                            }
                            return c;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return m(e, t);
                            var r = {}.toString.call(e).slice(8, -1);
                            return (
                                'Object' === r && e.constructor && (r = e.constructor.name),
                                'Map' === r || 'Set' === r
                                    ? Array.from(e)
                                    : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                      ? m(e, t)
                                      : void 0
                            );
                        }
                    })(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            const v = function (e) {
                var t = e.contract_type,
                    r = e.is_mobile_forced,
                    n = void 0 !== r && r,
                    a = h(o().useState(!0), 2),
                    i = a[0],
                    c = a[1],
                    m = h(o().useState(null), 2),
                    v = m[0],
                    y = m[1],
                    _ = (0, s.Y)().isMobile,
                    g = o().useCallback(
                        function (e) {
                            return (0, f.getUrlBase)(
                                '/public/videos/'
                                    .concat(t.toLowerCase(), '_')
                                    .concat(n || _ ? 'mobile' : 'desktop', '.')
                                    .concat(e)
                            );
                        },
                        [t, _]
                    ),
                    E = o().useMemo(
                        function () {
                            return g('lottie');
                        },
                        [g]
                    );
                return (
                    o().useEffect(
                        function () {
                            var e = function () {
                                return c(!1);
                            };
                            return (
                                v && v.addEventListener('load', e),
                                function () {
                                    v && v.removeEventListener('load', e);
                                }
                            );
                        },
                        [v]
                    ),
                    o().createElement(
                        'div',
                        {
                            className: l()('video-fragment__wrapper', {
                                'video-fragment__wrapper--accumulator':
                                    t.toLowerCase() === d.OA.ACCUMULATORS.toLowerCase(),
                            }),
                        },
                        i &&
                            o().createElement(u.Skeleton, {
                                width: 248,
                                height: 161,
                                className: 'skeleton-video-loader',
                            }),
                        o().createElement(p.GL, {
                            className: 'video-fragment__wrapper--lottie',
                            autoplay: !0,
                            dotLottieRefCallback: function (e) {
                                return y(e);
                            },
                            src: E,
                            loop: !0,
                        })
                    )
                );
            };
            var y = r('./src/Modules/Trading/Helpers/video-config.ts');

            function _(e) {
                return (
                    (_ =
                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e &&
                                      'function' == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof e;
                              }),
                    _(e)
                );
            }

            function g(e, t, r) {
                return (
                    (t = (function (e) {
                        var t = (function (e) {
                            if ('object' != _(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var r = t.call(e, 'string');
                                if ('object' != _(r)) return r;
                                throw new TypeError('@@toPrimitive must return a primitive value.');
                            }
                            return String(e);
                        })(e);
                        return 'symbol' == _(t) ? t : t + '';
                    })(t)) in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            var E = function () {
                    return {
                        BARRIER: (0, a.localize)('Barrier'),
                        CONTRACT_VALUE: (0, a.localize)('Contract value'),
                        DEAL_CANCELLATION: (0, a.localize)('Deal cancellation'),
                        ENTRY_SPOT: (0, a.localize)('Entry spot'),
                        EXIT_SPOT: (0, a.localize)('Exit spot'),
                        EXPIRY: (0, a.localize)('Expiry'),
                        FINAL_PRICE: (0, a.localize)('Final price'),
                        GROWTH_RATE: (0, a.localize)('Growth rate'),
                        INDEX: (0, a.localize)('Index price'),
                        STAKE: (0, a.localize)('Stake'),
                        PAYOUT: (0, a.localize)('Payout'),
                        PAYOUT_PER_POINT: (0, a.localize)('Payout per point'),
                        PREVIOUS_SPOT_PRICE: (0, a.localize)('Previous spot price'),
                        RANGE: (0, a.localize)('Range'),
                        SLIPPAGE_RISK: (0, a.localize)('Slippage risk'),
                        STOP_OUT: (0, a.localize)('Stop out'),
                        STOP_LOSS: (0, a.localize)('Stop loss'),
                        STRIKE_PRICE: (0, a.localize)('Strike price'),
                        TAKE_PROFIT: (0, a.localize)('Take profit'),
                        BARRIER_RANGE: (0, a.localize)('Barrier range'),
                        SPOT_PRICE: (0, a.localize)('Spot price'),
                    };
                },
                b = function (e) {
                    var t = e.contract_type,
                        r = e.term;
                    if (t && r) {
                        var n,
                            i,
                            c,
                            l,
                            u,
                            s,
                            f,
                            p,
                            h,
                            m,
                            v,
                            y,
                            _,
                            b,
                            A,
                            T,
                            S,
                            w,
                            L,
                            O,
                            x,
                            P,
                            I,
                            R = ((i = E()),
                            (c = i.BARRIER),
                            (l = i.CONTRACT_VALUE),
                            (u = i.DEAL_CANCELLATION),
                            (s = i.ENTRY_SPOT),
                            (f = i.EXIT_SPOT),
                            (p = i.EXPIRY),
                            (h = i.FINAL_PRICE),
                            (m = i.GROWTH_RATE),
                            (v = i.PAYOUT),
                            (y = i.PAYOUT_PER_POINT),
                            (_ = i.PREVIOUS_SPOT_PRICE),
                            (b = i.RANGE),
                            (A = i.SLIPPAGE_RISK),
                            (T = i.STOP_OUT),
                            (S = i.STOP_LOSS),
                            (w = i.STRIKE_PRICE),
                            (L = i.TAKE_PROFIT),
                            (O = i.INDEX),
                            (x = i.STAKE),
                            (P = i.BARRIER_RANGE),
                            (I = i.SPOT_PRICE),
                            g(
                                g(
                                    g(
                                        g(
                                            g(
                                                g(
                                                    g(
                                                        g(
                                                            g(
                                                                g(
                                                                    (n = {}),
                                                                    c,
                                                                    o().createElement(a.Localize, {
                                                                        i18n_default_text:
                                                                            'The corresponding price level based on the payout per point you’ve selected.',
                                                                    })
                                                                ),
                                                                I,
                                                                o().createElement(a.Localize, {
                                                                    i18n_default_text:
                                                                        'The real-time price of an asset for immediate buying and selling.',
                                                                })
                                                            ),
                                                            l,
                                                            function (e) {
                                                                return e === d.OA.VANILLAS
                                                                    ? o().createElement(a.Localize, {
                                                                          i18n_default_text:
                                                                              'The current value of a trade contract, based on the initial buy price and the current profit/loss.',
                                                                      })
                                                                    : o().createElement(a.Localize, {
                                                                          i18n_default_text:
                                                                              'This is the resale value of your contract, based on the prevailing market conditions (e.g, the current spot), including additional commissions if any.',
                                                                      });
                                                            }
                                                        ),
                                                        u,
                                                        o().createElement(a.Localize, {
                                                            i18n_default_text:
                                                                'A feature that lets you cancel your trade and get your stake back if the price moves against you.',
                                                        })
                                                    ),
                                                    s,
                                                    o().createElement(a.Localize, {
                                                        i18n_default_text:
                                                            'The specific price level at which a trader decides to buy or sell an asset.',
                                                    })
                                                ),
                                                f,
                                                o().createElement(a.Localize, {
                                                    i18n_default_text:
                                                        'The specific price level at which a trader closes their positions in a market, either to realise profits or limit losses.',
                                                })
                                            ),
                                            p,
                                            o().createElement(a.Localize, {
                                                i18n_default_text:
                                                    'The moment when a contract ends — the exact time at which it matures. It marks the final point when the outcome of the contract is determined.',
                                            })
                                        ),
                                        h,
                                        o().createElement(a.Localize, {
                                            i18n_default_text: 'This is the spot price of the last tick at expiry.',
                                        })
                                    ),
                                    m,
                                    o().createElement(a.Localize, {
                                        i18n_default_text:
                                            'A feature that lets you select a percentage gain for your stake (1%, 2%, 3%, 4%, or 5%).',
                                    })
                                ),
                                v,
                                o().createElement(a.Localize, {
                                    i18n_default_text: 'The sum of your initial stake and profit.',
                                })
                            ),
                            g(
                                g(
                                    g(
                                        g(
                                            g(
                                                g(
                                                    g(
                                                        g(
                                                            g(
                                                                g(
                                                                    n,
                                                                    y,
                                                                    o().createElement(a.Localize, {
                                                                        i18n_default_text:
                                                                            'The money you make or lose for every one-point change in an asset’s price.',
                                                                    })
                                                                ),
                                                                _,
                                                                o().createElement(a.Localize, {
                                                                    i18n_default_text:
                                                                        'The price from the trading period that just ended.',
                                                                })
                                                            ),
                                                            b,
                                                            o().createElement(a.Localize, {
                                                                i18n_default_text:
                                                                    'It is a percentage of the previous spot price. The percentage rate is based on your choice of the index and the growth rate.',
                                                            })
                                                        ),
                                                        A,
                                                        o().createElement(a.Localize, {
                                                            i18n_default_text:
                                                                'The chance that your order will be executed at a worse price than you expected.',
                                                        })
                                                    ),
                                                    T,
                                                    o().createElement(a.Localize, {
                                                        i18n_default_text:
                                                            'An automated action to close a trader’s open positions when their account’s equity falls to a predetermined level.',
                                                    })
                                                ),
                                                S,
                                                o().createElement(a.Localize, {
                                                    i18n_default_text:
                                                        'An order placed to automatically sell an asset once it reaches a certain price.',
                                                })
                                            ),
                                            w,
                                            o().createElement(a.Localize, {
                                                i18n_default_text:
                                                    'The agreed-upon price in the contract that decides whether your trade wins or loses.',
                                            })
                                        ),
                                        L,
                                        o().createElement(a.Localize, {
                                            i18n_default_text:
                                                'An order set by a trader to automatically close a profitable position when an asset’s price reaches a specified level.',
                                        })
                                    ),
                                    O,
                                    o().createElement(a.Localize, {
                                        i18n_default_text: 'A measure of a section of shares in the stock market.',
                                    })
                                ),
                                x,
                                o().createElement(a.Localize, {
                                    i18n_default_text: 'The amount of money risked in your trade.',
                                })
                            ),
                            g(
                                n,
                                P,
                                o().createElement(a.Localize, {
                                    i18n_default_text:
                                        'The maximum amount the price is allowed to move from its previous value at each step. If the price goes beyond that amount, the contract ends.',
                                })
                            ))[r];
                        return 'function' == typeof R ? R(t) : null != R ? R : '';
                    }
                },
                A = function (e) {
                    var t = e.children;
                    return o().createElement(
                        'div',
                        {
                            className: 'description__badge',
                        },
                        t
                    );
                },
                T = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return e.map(function (e, r) {
                        var n = e.type,
                            a = e.text;
                        return 'heading' === n && 'string' != typeof a
                            ? o().createElement(
                                  i.E,
                                  {
                                      key: a.props.i18n_default_text,
                                      bold: !0,
                                      size: 'md',
                                      className: 'description__heading',
                                  },
                                  a
                              )
                            : ('paragraph' !== n && 'general' !== n) || 'string' == typeof a
                              ? 'video' === n && 'string' == typeof a
                                  ? o().createElement(v, {
                                        contract_type: a,
                                        key: a + r,
                                        is_mobile_forced: t,
                                    })
                                  : 'badge' === n && 'string' != typeof a
                                    ? o().createElement(
                                          A,
                                          {
                                              key: 'badge-'.concat(r),
                                          },
                                          a
                                      )
                                    : void 0
                              : o().createElement(
                                    i.E,
                                    {
                                        as: 'p',
                                        key: a.props.i18n_default_text,
                                        size: 'sm',
                                        className: 'description__'.concat(n),
                                        color: 'quill-typography__color--default',
                                    },
                                    a
                                );
                    });
                },
                S = g(
                    g(
                        g(
                            g(
                                g(
                                    g(
                                        g(
                                            g(
                                                g(
                                                    g({}, d.OA.ACCUMULATORS, y.fm.accumulator),
                                                    d.OA.EVEN_ODD,
                                                    y.fm.even_odd
                                                ),
                                                d.OA.HIGHER_LOWER,
                                                y.fm.high_low
                                            ),
                                            d.OA.MATCHES_DIFFERS,
                                            y.fm.match_diff
                                        ),
                                        d.OA.MULTIPLIERS,
                                        y.fm.multiplier
                                    ),
                                    d.OA.OVER_UNDER,
                                    y.fm.over_under
                                ),
                                d.OA.RISE_FALL,
                                y.fm.rise_fall
                            ),
                            d.OA.TOUCH_NO_TOUCH,
                            y.fm.touch
                        ),
                        d.OA.VANILLAS,
                        y.fm.vanilla
                    ),
                    d.OA.TURBOS,
                    y.fm.turbos
                ),
                w = function () {
                    var e,
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return null === (e = S[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '']) ||
                        void 0 === e
                        ? void 0
                        : e[t ? 'dark' : 'light'];
                };
        },
        './src/Modules/Trading/Helpers/video-config.ts': (e, t, r) => {
            r.d(t, {
                Jz: () => o,
                dv: () => a,
                fm: () => n,
            });
            var n = {
                    accumulator: {
                        light: 'c1d64d5ffaf449e3326d387a70621a4c',
                        dark: '9657e4adcfd9274d41a042b7b6c42d60',
                    },
                    even_odd: {
                        light: 'a3930b0a535c4f23daea5cf98a718941',
                        dark: 'e311e25dd68761d6ab73e8158ec83ea4',
                    },
                    high_low: {
                        light: 'f528c662c377601908a741ae2aedaec6',
                        dark: '4c05445e1bd28f3f9f95b0ab566c4f9b',
                    },
                    turbos: {
                        light: '63f8b8f93e83e98481f20aa971ef7723',
                        dark: 'ce0158579fcee186de1ddeb97646f892',
                    },
                    match_diff: {
                        light: '8693a02397d284ffcf0608e4fda702d9',
                        dark: '2e56ad7ea67bf3f9a869de6336df1796',
                    },
                    multiplier: {
                        light: 'bca032791da88023e81ebf7341226f83',
                        dark: '3d10e25e2e0eaaf96d1874aae257029f',
                    },
                    over_under: {
                        light: '9e2be907cba9b38352890e52cfd8cbaf',
                        dark: '4b31fc188c2f365faa310f7e34715af7',
                    },
                    rise_fall: {
                        light: '7719c7e5436f58e59ab47510445108ba',
                        dark: 'b72ef7ec914afe3dbb2a1601cad3a76f',
                    },
                    touch: {
                        light: 'c781a6844f37a3308fe8774b4450dfc9',
                        dark: 'c91f2b9859dc95ce8eecf7df327aaf00',
                    },
                    vanilla: {
                        light: '9b8b6ae67d3a720e4aee2665889d17fb',
                        dark: '8f04e9d768b8e08a1d87830c95c6b9c8',
                    },
                    trade_type_selection: {
                        light: 'ffd6ce15fe1d47014262a00f562f5d7b',
                        dark: '194a02d2924a27fdbc7420da44d392cc',
                    },
                },
                o = {
                    accumulator_stats: '26d1401d2e3f6ae16913a21ec0579fc1',
                },
                a = function () {
                    var e,
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return null === (e = n[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '']) ||
                        void 0 === e
                        ? void 0
                        : e[t ? 'dark' : 'light'];
                };
        },
        './src/Stores/Modules/Trading/Helpers/allow-equals.ts': (e, t, r) => {
            r.d(t, {
                KM: () => u,
                jZ: () => s,
                tP: () => f,
            });
            var n = r('@deriv/shared'),
                o = r('./src/Stores/Modules/Trading/Helpers/contract-type.ts');

            function a(e) {
                return (
                    (a =
                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e &&
                                      'function' == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof e;
                              }),
                    a(e)
                );
            }

            function i(e, t, r) {
                return (
                    (t = (function (e) {
                        var t = (function (e) {
                            if ('object' != a(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var r = t.call(e, 'string');
                                if ('object' != a(r)) return r;
                                throw new TypeError('@@toPrimitive must return a primitive value.');
                            }
                            return String(e);
                        })(e);
                        return 'symbol' == a(t) ? t : t + '';
                    })(t)) in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }

            function c(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return l(e);
                    })(e) ||
                    (function (e) {
                        if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
                            return Array.from(e);
                    })(e) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return l(e, t);
                            var r = {}.toString.call(e).slice(8, -1);
                            return (
                                'Object' === r && e.constructor && (r = e.constructor.name),
                                'Map' === r || 'Set' === r
                                    ? Array.from(e)
                                    : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                      ? l(e, t)
                                      : void 0
                            );
                        }
                    })(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var u = function (e) {
                    var t, r;
                    return (
                        !(0, n.isEmptyObject)(e) &&
                        !(
                            null === (t = (0, n.getPropertyValue)(e, 'Ups & Downs')) ||
                            void 0 === t ||
                            null === (r = t.categories) ||
                            void 0 === r ||
                            !r.some(function (e) {
                                return e.value === n.TRADE_TYPES.RISE_FALL_EQUAL;
                            })
                        )
                    );
                },
                s = function (e, t, r) {
                    if (!e || !t || !r) return !1;
                    var a = Object.keys(e || {})
                        .reduce(function (t, r) {
                            var n = e[r];
                            return [].concat(
                                c(t),
                                c(
                                    n.categories.map(function (e) {
                                        return e.value;
                                    })
                                )
                            );
                        }, [])
                        .map(function (e) {
                            return i(
                                {},
                                e,
                                (0, n.getPropertyValue)(o.h.getFullContractTypes(), [
                                    e,
                                    'config',
                                    'durations',
                                    'units_display',
                                    r,
                                ])
                            );
                        });
                    if (u(e)) {
                        var l = a.filter(function (e) {
                            return null == e ? void 0 : e.rise_fall_equal;
                        });
                        if (l.length > 0)
                            return l[0].rise_fall_equal.some(function (e) {
                                return e.value === t;
                            });
                    }
                    return !1;
                },
                f = function (e) {
                    return /^(rise_fall|rise_fall_equal)$/.test(e);
                };
        },
    },
]);
