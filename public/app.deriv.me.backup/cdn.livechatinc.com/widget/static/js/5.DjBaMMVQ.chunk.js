import { k as e } from './4.C_rgEAoe.chunk.js';
import {
    g as t,
    y as r,
    B as n,
    x as a,
    w as i,
    n as s,
    e as o,
    r as l,
    _ as c,
    c as u,
    D as d,
    h as p,
    p as h,
    E as f,
    f as g,
    A as m,
    F as _,
    G as b,
    H as y,
    I as v,
    t as w,
    s as k,
    J as x,
    l as S,
    j as I,
    K as E,
    a as T,
    L as A,
    M as C,
    k as z,
    b as D,
    N as F,
    i as M,
} from './3.DK8xU-ow.chunk.js';
import { a as O, g as P, f as j, e as R, h as B, d as $, t as q, i as U } from './6.B0_QvnEW.chunk.js';
var N = '__test_storage_support__',
    L = '@@test',
    V = function (e) {
        void 0 === e && (e = 'local');
        try {
            var t = 'session' === e ? window.sessionStorage : window.localStorage;
            return t.setItem(N, L), t.getItem(N) !== L ? !1 : (t.removeItem(N), !0);
        } catch (r) {
            return !1;
        }
    },
    H = (function () {
        var e = Object.create(null);
        return {
            getItem: function (t) {
                var r = e[t];
                return 'string' == typeof r ? r : null;
            },
            setItem: function (t, r) {
                e[t] = r;
            },
            removeItem: function (t) {
                delete e[t];
            },
            clear: function () {
                e = Object.create(null);
            },
        };
    })();
const G = t(e => (t, r) => {
    if (0 !== t) return;
    if ('function' != typeof e) return r(0, () => {}), void r(2);
    let n,
        a = !1;
    r(0, e => {
        a || ((a = 2 === e), a && 'function' == typeof n && n());
    }),
        a ||
            (n = e(
                e => {
                    a || r(1, e);
                },
                e => {
                    a || void 0 === e || ((a = !0), r(2, e));
                },
                () => {
                    a || ((a = !0), r(2));
                }
            ));
});
var Z,
    W = function (e, t) {
        return e === t;
    };

function Y(e) {
    return (
        void 0 === e && (e = W),
        function (t) {
            return function (r, n) {
                if (0 === r) {
                    var a,
                        i,
                        s = !1;
                    t(0, function (t, r) {
                        0 === t && (i = r), 1 === t ? (s && e(a, r) ? i(1) : ((s = !0), (a = r), n(1, r))) : n(t, r);
                    });
                }
            };
        }
    );
}

function Q(e) {
    return function (t) {
        return function (r, n) {
            if (0 === r) {
                var a,
                    i = null,
                    s = function (e, t) {
                        if (0 !== e) return 1 === e ? (n(1, t), void i(1)) : void (2 === e && (i = null));
                        (i = t)(1);
                    },
                    o = function (e, t) {
                        2 === e && null !== i && i(2, t), a(e, t);
                    };
                t(0, function (t, r) {
                    if (0 === t) return (a = r), void n(0, o);
                    if (1 !== t) {
                        if (2 === t) {
                            if ((n(2, r), null === i)) return;
                            i(2, r);
                        }
                    } else {
                        if (null !== i) return;
                        e(r)(0, s);
                    }
                });
            }
        };
    };
}
Z =
    'undefined' != typeof self
        ? self
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof module
              ? module
              : Function('return this')();
var J,
    X,
    K =
        ('function' == typeof (X = Z.Symbol)
            ? X.observable
                ? (J = X.observable)
                : ((J = X('observable')), (X.observable = J))
            : (J = '@@observable'),
        J);
const ee = r(
    Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                default: K,
            },
            Symbol.toStringTag,
            {
                value: 'Module',
            }
        )
    )
).default;
const te = t(e => (t, r) => {
        if (0 !== t) return;
        let n;
        r(0, e => {
            2 === e && n && (n.unsubscribe ? n.unsubscribe() : n());
        }),
            (e = e[ee] ? e[ee]() : e),
            (n = e.subscribe({
                next: e => r(1, e),
                error: e => r(2, e),
                complete: () => r(2),
            }));
    }),
    re = e => (t, r) => {
        if (0 !== t) return;
        let n = !1;
        e.then(
            e => {
                n || (r(1, e), n || r(2));
            },
            e => {
                n || r(2, e);
            }
        ),
            r(0, e => {
                2 === e && (n = !0);
            });
    };
const ne = t(function (...e) {
    let t = e[0];
    for (let r = 1, n = e.length; r < n; r++) t = e[r](t);
    return t;
});
const ae = t(e => t => (r, n) => {
    if (0 !== r) return;
    let a;
    t(0, (t, r) => {
        0 === t
            ? ((a = r),
              n(0, (e, t) => {
                  0 !== e && a(e, t);
              }),
              n(1, e))
            : n(t, r);
    });
});
const ie = t(e => t => (r, n) => {
    0 === r &&
        t(0, (t, r) => {
            n(t, 1 === t ? e(r) : r);
        });
});

function se(e) {
    return t => n(ie(e)(t));
}
var oe = function () {},
    le = {};

function ce(e) {
    var t,
        r,
        n = [],
        a = !1,
        i = le;
    return function (s, o) {
        if (0 === s) {
            if (i !== le) return o(0, oe), a && o(1, r), void o(2, i);
            n.push(o);
            var l = function (e, r) {
                if (2 !== e) i === le && t(e, r);
                else {
                    var a = n.indexOf(o);
                    -1 !== a && n.splice(a, 1);
                }
            };
            1 !== n.length
                ? (o(0, l), a && i === le && o(1, r))
                : e(0, function (e, s) {
                      if (0 === e) return (t = s), void o(0, l);
                      1 === e && ((a = !0), (r = s));
                      var c = n.slice(0);
                      2 === e && ((i = s), (n = null)),
                          c.forEach(function (t) {
                              t(e, s);
                          });
                  });
        }
    };
}
const ue = t(function () {
        let e = [];
        return (t, r) => {
            if (0 === t) {
                const t = r;
                e.push(t),
                    t(0, r => {
                        if (2 === r) {
                            const r = e.indexOf(t);
                            r > -1 && e.splice(r, 1);
                        }
                    });
            } else {
                const n = e.slice(0);
                for (let a, i = 0, s = n.length; i < s; i++) (a = n[i]), e.indexOf(a) > -1 && a(t, r);
            }
        };
    }),
    de = {},
    pe = e => t => (r, n) => {
        if (0 !== r) return;
        let a,
            i,
            s = !1,
            o = de;
        t(0, (t, r) => {
            if (0 === t)
                return (
                    (a = r),
                    e(0, (e, t) =>
                        0 === e
                            ? ((i = t), void i(1))
                            : 1 === e
                              ? ((o = void 0), i(2), a(2), void (s && n(2)))
                              : void (2 === e && ((i = null), t && ((o = t), a(2), s && n(e, t))))
                    ),
                    (s = !0),
                    n(0, (e, t) => {
                        o === de && (2 === e && i && i(2), a(e, t));
                    }),
                    void (o !== de && n(2, o))
                );
            2 === t && i(2), n(t, r);
        });
    },
    he = (e, t, r) => t => (r, n) => {
        0 === r &&
            t(0, (t, r) => {
                1 === t && void 0 !== r && e && e(r), n(t, r);
            });
    };

function fe(e, t) {
    return [].concat(...t.map(e));
}

function ge(e) {
    return 'object' == typeof e && null !== e && !a(e);
}

function me(t, r) {
    return e(r).reduce((e, n) => ((e[n] = t(r[n])), e), {});
}

function _e(e) {
    let t = e.trim();
    if (0 === t.length) return '';
    if (1 === t.length) return t.toLowerCase();
    if (/^[a-z\d]+$/.test(t)) return t;
    return (
        t !== t.toLowerCase() &&
            (t = (function (e) {
                let t = e,
                    r = !1,
                    n = !1,
                    a = !1;
                for (let i = 0; i < t.length; i++) {
                    const e = t[i];
                    r && /[a-zA-Z]/.test(e) && e.toUpperCase() === e
                        ? ((t = t.slice(0, i) + '-' + t.slice(i)), (r = !1), (a = n), (n = !0), i++)
                        : n && a && /[a-zA-Z]/.test(e) && e.toLowerCase() === e
                          ? ((t = t.slice(0, i - 1) + '-' + t.slice(i - 1)), (a = n), (n = !1), (r = !0))
                          : ((r = e.toLowerCase() === e), (a = n), (n = e.toUpperCase() === e));
                }
                return t;
            })(t)),
        (t = t
            .replace(/^[_.\- ]+/, '')
            .toLowerCase()
            .replace(/[_.\- ]+(\w|$)/g, (e, t) => t.toUpperCase())),
        t
    );
}

function be(e) {
    return a(e) ? e : [e];
}

function ye(t) {
    return e(t).map(e => [e, t[e]]);
}

function ve(e, t) {
    for (let r = 0; r < t.length; r++) {
        const n = t[r];
        if (e(n)) return n;
    }
}

function we(e, t) {
    for (let r = 0; r < t.length; r++) if (e(t[r])) return r;
    return -1;
}

function ke(e, t) {
    for (let r = t.length - 1; r >= 0; r--) if (e(t[r])) return t[r];
}

function xe(e, t, r) {
    for (let n = t; n >= 0; n--) if (e(r[n])) return n;
    return -1;
}

function Se(e, t) {
    return xe(e, t.length - 1, t);
}

function Ie(e, t) {
    if (e <= 0) return [];
    const r = [];
    for (; e--; ) r.push(t);
    return r;
}

function Ee(t, r) {
    return e(r).forEach(e => {
        t(r[e], e);
    });
}

function Te() {
    return Math.random().toString(36).substring(2);
}

function Ae(e) {
    const t = Te();
    return i(t, e) ? Ae(e) : t;
}

function Ce(e, t) {
    const r = 'string' == typeof e ? e.split('.') : e;
    let n = 0,
        a = t;
    for (; a && n < r.length; ) a = a[r[n++]];
    return a;
}

function ze(e, t) {
    return -1 !== t.indexOf(e);
}

function De(e) {
    return 0 === (a(e) ? e : Object.keys(e)).length;
}

function Fe(e, t) {
    return t.reduce((t, r) => ((t[r[e]] = r), t), {});
}

function Me(e) {
    return e.length > 0 ? e[e.length - 1] : void 0;
}

function Oe(t, r) {
    return e(r).reduce(
        (e, n) => (
            Object.defineProperty(e, t(n), {
                value: r[n],
                enumerable: !0,
            }),
            e
        ),
        {}
    );
}

function Pe(t, r) {
    return e(r).reduce((e, n) => ((e[n] = t(r[n], n)), e), {});
}

function je(e, t) {
    if (De(t)) return e;
    const r = {};
    return (
        Ee((n, s) => {
            if (i(s, t))
                if (ge(e[s]) && ge(t[s])) r[s] = je(e[s], t[s]);
                else if (a(e[s]) && a(t[s])) {
                    const n = Math.max(e[s].length, t[s].length);
                    r[s] = new Array(n);
                    for (let a = 0; a < n; a++) a in t[s] ? (r[s][a] = t[s][a]) : a in e[s] && (r[s][a] = e[s][a]);
                } else r[s] = t[s];
            else r[s] = e[s];
        }, e),
        Ee((e, n) => {
            i(n, r) || (r[n] = t[n]);
        }, t),
        r
    );
}

function Re(t) {
    return e(t).map(e => t[e]);
}

function Be(e, t) {
    const r = 'function' == typeof e ? e : t => Ce(e, t);
    return (a(t) ? [...t] : Re(t)).sort((e, t) => r(e) - r(t));
}

function $e(t, r) {
    return e(r).reduce((e, n) => (t(r[n], n) || (e[n] = r[n]), e), {});
}

function qe(e, t) {
    return $e((t, r) => -1 !== e.indexOf(r), t);
}

function Ue(e, t) {
    return e.reduce((e, r) => ((e[r] = t[r]), e), {});
}

function Ne(t, r) {
    return e(r).reduce((e, n) => (t(r[n]) && (e[n] = r[n]), e), {});
}

function Le(e, t) {
    return e.reduce((e, r) => (i(r, t) && (e[r] = t[r]), e), {});
}

function Ve(e, t) {
    return t.filter(t => !e(t));
}

function He(e, t) {
    return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
}

function Ge(e, t) {
    if (He(e, t)) return !0;
    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
    const r = Object.keys(e),
        n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let a = 0; a < r.length; a++) if (!i(r[a], t) || !He(e[r[a]], t[r[a]])) return !1;
    return !0;
}

function Ze(e, t) {
    if (t.length <= e) return t;
    const r = t.split(' '),
        n = [];
    let a = 0;
    for (const i of r) {
        if (a + i.length > e) break;
        (a += i.length + 1), n.push(i);
    }
    return n.join(' ') + '...';
}

function We(e, t, r) {
    const n = xe(t => !e(t), t, r);
    return n === t ? [] : r.slice(n + 1, t + 1);
}

function Ye(e, t) {
    let r,
        n = Date.now() - 2 * e;
    const a = function () {
            (n = Date.now()), t(...arguments);
        },
        i = () => clearTimeout(r),
        s = function () {
            const t = Date.now();
            for (var s = arguments.length, o = new Array(s), l = 0; l < s; l++) o[l] = arguments[l];
            t - n >= e ? a(...o) : (i(), (r = setTimeout(a, n - t + e, ...o)));
        };
    return (s.cancel = i), s;
}

function Qe(e, t) {
    return e === t ? 0 : e < t ? -1 : 1;
}
const Je = /\s+$/;

function Xe(e) {
    return e.replace(Je, '');
}

function Ke(e, t) {
    const r = [];
    return t.filter(t => {
        const n = e(t);
        return -1 === r.indexOf(n) && (r.push(n), !0);
    });
}

function et(e, t, r) {
    return [...r.slice(0, e), t, ...r.slice(e + 1, r.length)];
}

function tt() {
    const e = {};
    return (
        (e.promise = new Promise((t, r) => {
            (e.resolve = t), (e.reject = r);
        })),
        e
    );
}
const rt = 'not_initialized';

function nt() {
    return (
        (nt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                  }
                  return e;
              }),
        nt.apply(null, arguments)
    );
}
const at = (e, t) => {
        const r = function (r) {
            const n = Object.create(r);
            n.action = (t, n) => {
                const a = {
                    type: e,
                    payload: t,
                };
                n && (a.meta = n), r.dispatch(a);
            };
            for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++) i[s - 1] = arguments[s];
            return t(n, ...i);
        };
        return (r.toString = () => e), r;
    },
    it = (e, t) => {
        const r = 'REQUEST_' + e,
            n = at(e, t),
            a = function (e) {
                for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
                    i[o - 1] = arguments[o];
                const l = Object.create(e);
                let c;
                if (
                    ((l.action = (t, a) => {
                        const { promise: o, resolve: l, reject: u } = tt();
                        e.dispatch({
                            type: r,
                            payload: nt({}, t, {
                                meta: a,
                                resolve: l,
                                reject: u,
                            }),
                        }),
                            (c = o),
                            c.then(() => {
                                n(e, ...i);
                            }, s);
                    }),
                    t(l, ...i),
                    void 0 === c)
                )
                    throw new Error('You forgot to call `action` handler in ' + r + ' creator.');
                return c;
            };
        return (
            (a.toString = () => r),
            {
                actionMethod: n,
                requestActionMethod: a,
            }
        );
    },
    st = (e, t) => {
        if ('object' != typeof e || null === e || Array.isArray(e))
            throw new Error('bindActionMethods expects a plain object with actionMethods as values.');
        return me(
            e =>
                ((e, t) =>
                    function () {
                        for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                        return e(t, ...n);
                    })(e, t),
            e
        );
    },
    ot = (e, t) => (
        t[void 0] &&
            console.warn(
                ["Reducer contains an 'undefined' action type.", 'Have you misspelled a constant?'].join('\n')
            ),
        function (r, n) {
            return void 0 === r && (r = e), i(n.type, t) ? t[n.type](r, n.payload) : r;
        }
    ),
    lt = (e, t) => {
        if ('object' != typeof e || null === e || Array.isArray(e))
            throw new Error('bindSelectors expects a plain object with selectors as values.');
        return me(
            e =>
                ((e, t) =>
                    function () {
                        for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                        return e(t(), ...n);
                    })(e, t),
            e
        );
    },
    ct = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return (e, r) => t.reduce((e, t) => t(e, r), e);
    },
    ut = e => {
        let { id: t, serverId: r = null, active: n = !0, participants: a = [], properties: i } = e;
        if ('string' != typeof t) throw new Error('Chat ID has to be a string.');
        if (null !== r && t !== r)
            throw new Error('If serverId is given ("' + r + '") it should match id ("' + t + '").');
        return {
            id: t,
            serverId: r,
            active: n,
            participants: a,
            properties: i,
        };
    },
    dt = e => {
        let {
            id: t,
            type: r,
            author: n,
            timestamp: a,
            own: i,
            serverId: s = null,
            thread: o = null,
            serverTimestamp: l = null,
            delivered: c = !0,
            seen: u = !1,
            failed: d = !1,
            properties: p = {},
        } = e;
        if ('string' != typeof t) throw new Error('Event ID has to be a string.');
        if ('string' != typeof r) throw new Error('Event has to have string `type` property.');
        if (null !== s && t !== s)
            throw new Error('If serverId is given ("' + s + '") it should match id ("' + t + '").');
        return {
            id: t,
            serverId: s,
            type: r,
            thread: o,
            author: n,
            own: i,
            timestamp: a,
            serverTimestamp: l,
            delivered: c,
            seen: u,
            failed: d,
            properties: p,
        };
    },
    pt = e => {
        let {
            id: t,
            serverId: r = t,
            type: n = null,
            name: a = null,
            email: i = null,
            avatar: s = null,
            properties: o = {},
        } = e;
        if ('string' != typeof t) throw new Error('User ID has to be a string.');
        return {
            id: t,
            serverId: r,
            type: n,
            name: a,
            email: i,
            avatar: s,
            properties: o,
        };
    };

function ht(e, t) {
    return e === t;
}

function ft(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ht,
        r = null,
        n = null;
    return function () {
        return (
            (function (e, t, r) {
                if (null === t || null === r || t.length !== r.length) return !1;
                for (var n = t.length, a = 0; a < n; a++) if (!e(t[a], r[a])) return !1;
                return !0;
            })(t, r, arguments) || (n = e.apply(null, arguments)),
            (r = arguments),
            n
        );
    };
}
var gt = (function (e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        return function () {
            for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
            var i = 0,
                s = n.pop(),
                o = (function (e) {
                    var t = Array.isArray(e[0]) ? e[0] : e;
                    if (
                        !t.every(function (e) {
                            return 'function' == typeof e;
                        })
                    ) {
                        var r = t
                            .map(function (e) {
                                return typeof e;
                            })
                            .join(', ');
                        throw new Error(
                            'Selector creators expect all input-selectors to be functions, instead received the following types: [' +
                                r +
                                ']'
                        );
                    }
                    return t;
                })(n),
                l = e.apply(
                    void 0,
                    [
                        function () {
                            return i++, s.apply(null, arguments);
                        },
                    ].concat(r)
                ),
                c = ft(function () {
                    for (var e = [], t = o.length, r = 0; r < t; r++) e.push(o[r].apply(null, arguments));
                    return l.apply(null, e);
                });
            return (
                (c.resultFunc = s),
                (c.recomputations = function () {
                    return i;
                }),
                (c.resetRecomputations = function () {
                    return (i = 0);
                }),
                c
            );
        };
    })(ft),
    mt = (function () {
        function e() {
            !(function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            })(this, e),
                (this._cache = {});
        }
        return (
            (e.prototype.set = function (e, t) {
                this._cache[e] = t;
            }),
            (e.prototype.get = function (e) {
                return this._cache[e];
            }),
            (e.prototype.remove = function (e) {
                delete this._cache[e];
            }),
            (e.prototype.clear = function () {
                this._cache = {};
            }),
            e
        );
    })();

function _t() {
    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    var n = mt;
    return function (e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            a = void 0,
            i = void 0;
        'function' == typeof r
            ? (console.warn(
                  '[re-reselect] Deprecation warning: "selectorCreator" argument is discouraged and will be removed in the upcoming major release. Please use "options.selectorCreator" instead.'
              ),
              (a = new n()),
              (i = r))
            : ((a = r.cacheObject || new n()), (i = r.selectorCreator || gt));
        var s = function () {
            var r = e.apply(void 0, arguments);
            if ('string' == typeof r || 'number' == typeof r) {
                var n = a.get(r);
                return void 0 === n && ((n = i.apply(void 0, t)), a.set(r, n)), n.apply(void 0, arguments);
            }
        };
        return (
            (s.getMatchingSelector = function () {
                var t = e.apply(void 0, arguments);
                return a.get(t);
            }),
            (s.removeMatchingSelector = function () {
                var t = e.apply(void 0, arguments);
                a.remove(t);
            }),
            (s.clearCache = function () {
                a.clear();
            }),
            (s.resultFunc = t[t.length - 1]),
            s
        );
    };
}

function bt() {
    return (
        (bt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                  }
                  return e;
              }),
        bt.apply(null, arguments)
    );
}
const yt = (e, t) => t,
    vt = (e, t) => Ce(t.replace(/\//gi, '.'), e.views),
    wt = function (e) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        return Ce(r + '._default', e.views);
    },
    kt = e => e.views.current,
    xt = e => e.session.connectionState,
    St = e => e.entities.chats.byIds,
    It = (e, t) => St(e)[t],
    Et = (e, t, r) => It(e, t).events.byIds[r],
    Tt = (e, t, r) => Et(e, t, It(e, t).events.serverIdsMapping[r]),
    At = (e, t, r) => !!Et(e, t, r),
    Ct = (e, t) => It(e, t).events.byIds,
    zt = _t([(e, t) => It(e, t).events.orderedIds, Ct], (e, t) => e.map(e => t[e]))(yt),
    Dt = _t([It, zt], (e, t) =>
        bt({}, e, {
            events: t,
        })
    )(yt),
    Ft = (e, t) => !!It(e, t),
    Mt = e =>
        me(t => {
            let { id: r } = t;
            return Dt(e, r);
        }, St(e)),
    Ot = e => e.entities.users.byIds,
    Pt = e => Ot(e)[(e => e.session.id)(e)],
    jt = (e, t) => Ot(e)[t],
    Rt = (e, t) => !!jt(e, t),
    Bt = (e, t) => {
        var r;
        return null == (r = e.views) ? void 0 : r.Chat[t].timeline;
    },
    $t = e => Pt(e).id,
    qt = _t([zt, $t], (e, t) =>
        ke(e => {
            let { delivered: r, author: n } = e;
            return r && n === t;
        }, e)
    )(yt),
    Ut = _t([zt, $t], (e, t) =>
        ke(e => {
            let { seen: r, author: n } = e;
            return r && n === t;
        }, e)
    )(yt),
    Nt = {
        boosters: !0,
        form: !0,
        system_message: !0,
    },
    Lt = gt([zt, e => Pt(e).id], (e, t) =>
        Se(e => {
            const r = e.author === t && 'message' === e.type,
                n = !!e.properties && 'file' === e.properties.serverType,
                a = !0 === e.seen && !Nt[e.type] && Boolean(e.serverId);
            return (r && !n) || a;
        }, e)
    ),
    Vt = (e, t) => e.author !== t && !e.seen && !Nt[e.type],
    Ht = (e, t) => {
        const r = Lt(e, t),
            n = Pt(e).id;
        return zt(e, t)
            .slice(r + 1)
            .filter(e => Vt(e, n));
    },
    Gt = (e, t) => Me(Ht(e, t)),
    Zt = _t([(e, t) => It(e, t).participants, Ot], (e, t) => e.map(e => t[e]))(yt);

function Wt(e, t) {
    if (void 0 === t) return e.application;
    const r = t;
    return e.application[r];
}
const Yt = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                getApplicationState: Wt,
                getChat: Dt,
                getChatByServerId: (e, t) => Dt(e, e.entities.chats.serverIdsMapping[t]),
                getChatList: e => {
                    var t;
                    return null == (t = e.views) ? void 0 : t.ChatList;
                },
                getChats: Mt,
                getConnectionState: xt,
                getCurrentView: kt,
                getDefaultView: wt,
                getEvent: Et,
                getEventByServerId: Tt,
                getEvents: zt,
                getIndexedEvents: Ct,
                getLastDeliveredEvent: qt,
                getLastEvent: (e, t) => Me(zt(e, t)),
                getLastSeenAgentEvent: (e, t) => {
                    const r = Lt(e, t);
                    if (-1 === r) return null;
                    const n = Pt(e).id;
                    return ve(e => Vt(e, n), zt(e, t).slice(r + 1));
                },
                getLastSeenEvent: Ut,
                getLastUnseenEvent: Gt,
                getParticipants: Zt,
                getSessionUser: Pt,
                getSessionUserId: $t,
                getTimeline: Bt,
                getUnseenCount: (e, t) => Ht(e, t).length,
                getUser: jt,
                getUserByServerId: (e, t) => jt(e, e.entities.users.serverIdsMapping[t]),
                getUsers: Ot,
                getView: vt,
                hasChat: Ft,
                hasEvent: At,
                hasEventByServerId: (e, t, r) => !!Tt(e, t, r),
                hasUser: Rt,
                localize: (e, t, r, n) => {
                    let a = e.localization[t];
                    const i = e.application.language;
                    if (void 0 === a) return '';
                    if ('object' == typeof a && i) {
                        const e = new Intl.PluralRules(i);
                        if (void 0 === n) return a[e.select(1)];
                        const t = e.select(n);
                        if (!(t in a)) return '';
                        a = a[t];
                    }
                    return r ? Object.keys(r).reduce((e, t) => e.replace(new RegExp('%' + t + '%', 'g'), r[t]), a) : a;
                },
            },
            Symbol.toStringTag,
            {
                value: 'Module',
            }
        )
    ),
    Qt = ['events'];

function Jt() {
    return (
        (Jt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                  }
                  return e;
              }),
        Jt.apply(null, arguments)
    );
}
const Xt = ['delivered', 'failed', 'properties', 'seen', 'serverTimestamp', 'thread'],
    Kt = (e, t) =>
        e.forEach(e => {
            if (i(e, t)) throw new Error('Updating `' + e + '` property is not possible.');
        }),
    er = at('ADD_VIEW', function (e, t, r) {
        let { action: n, getState: a } = e;
        if ((void 0 === r && (r = {}), vt(a(), t)))
            throw new Error('There is already the "' + t + '" view. It has to be unique.');
        return (
            n({
                name: t,
                data: r,
            }),
            vt(a(), t)
        );
    }),
    tr = at('SET_CURRENT_VIEW', (e, t) => {
        let { action: r, getState: n } = e;
        if (!vt(n(), t)) {
            const e = wt(n());
            if (!e) throw new Error('Given view "' + t + '" doesn\'t exist.');
            return (
                r({
                    name: e,
                }),
                kt(n())
            );
        }
        return (
            r({
                name: t,
            }),
            kt(n())
        );
    }),
    rr = at('UPDATE_VIEW', (e, t, r) => {
        let { action: n, getState: a } = e;
        if (!vt(a(), t)) throw new Error('There is no "' + t + '" view. You should add it first.');
        return (
            n({
                name: t,
                data: r,
            }),
            vt(a(), t)
        );
    }),
    nr = at('SET_DEFAULT_VIEW', (e, t, r) => {
        let { action: n, getState: a } = e;
        return (
            n({
                name: r,
                path: t,
            }),
            vt(a(), t + '/' + r)
        );
    }),
    ar = at('ADD_CHAT', (e, t) => {
        let { action: r, getState: n } = e;
        const { events: a = [] } = t,
            i = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                    if ({}.hasOwnProperty.call(e, n)) {
                        if (-1 !== t.indexOf(n)) continue;
                        r[n] = e[n];
                    }
                return r;
            })(t, Qt);
        if (i.id && Ft(n(), i.id))
            throw new Error('There is already a chat with "' + i.id + '" ID. It has to be unique.');
        const s = ve(e => !Rt(n(), e), a.map(e => e.author).concat(i.participants || []));
        if (s) throw new Error('Given user ("' + s + '") doesn\'t exist. You should add it first.');
        const o = i.id || Ae(Mt(n()));
        return (
            r({
                id: o,
                chat: ut(
                    Jt({}, i, {
                        id: o,
                    })
                ),
                events: a.map(dt),
            }),
            Dt(n(), o)
        );
    }),
    ir = at('ADD_EVENT', (e, t, r) => {
        var n;
        let { action: a, getState: i } = e;
        const { id: s, serverId: o } = r,
            l = i();
        if (!s || !o || s === o) {
            if (!Ft(l, t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
            if (!At(l, t, s)) {
                if (!Rt(l, r.author))
                    throw new Error('Specified author ("' + r.author + '") doesn\'t exist. You should add it first.');
                return (
                    a({
                        id: s,
                        chat: t,
                        event: dt(
                            Jt({}, r, {
                                timestamp: null != (n = r.timestamp) ? n : Date.now(),
                                own: r.author === $t(l),
                            })
                        ),
                    }),
                    Et(i(), t, s)
                );
            }
        }
    }),
    sr = at('REMOVE_EVENT', (e, t, r) => {
        let { action: n, getState: a } = e;
        const i = a();
        if (!Ft(i, t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        if (!At(i, t, r)) throw new Error('There is no event with "' + r + '" ID in this chat ("' + t + '").');
        n({
            id: r,
            chat: t,
        });
    }),
    or = at('ADD_HISTORY_EVENTS', (e, t, r) => {
        let { action: n, getState: a } = e;
        const i = a();
        if (!Ft(i, t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        r.forEach(e => {
            if (At(i, t, e.id))
                throw new Error(
                    'There is already an event with "' + e.id + '" ID in this chat ("' + t + '"). It has to be unique.'
                );
            if (!Rt(i, e.author))
                throw new Error('Specified author ("' + e.author + '") doesn\'t exist. You should add it first.');
        });
        const s = $t(i);
        n({
            chat: t,
            events: r.map(e =>
                dt(
                    Jt({}, e, {
                        serverId: e.id,
                        own: e.author === s,
                    })
                )
            ),
        });
    }),
    lr = at('ADD_PARTICIPANT', (e, t, r) => {
        let { action: n, getState: a } = e;
        if (!Ft(a(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        if (!Rt(a(), r)) throw new Error('Given user ("' + r + '") doesn\'t exist. You should add it first.');
        return (
            n({
                chat: t,
                user: r,
            }),
            Zt(a(), t)
        );
    }),
    cr = at('ADD_USER', (e, t) => {
        let { action: r, getState: n } = e;
        const { id: a } = t;
        if (Rt(n(), a)) throw new Error('There is already a user with "' + a + '" ID. It has to be unique.');
        return (
            r({
                id: a,
                user: pt(t),
            }),
            jt(n(), a)
        );
    }),
    ur = at('FLUSH_CHAT', (e, t) => {
        let { action: r, getState: n } = e;
        if (!Ft(n(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        return (
            r({
                id: t,
            }),
            Dt(n(), t)
        );
    }),
    dr = at('RECALCULATE_TIMELINE', (e, t) => {
        let { action: r, getState: n } = e;
        if (!Ft(n(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        return (
            r({
                id: t,
            }),
            Bt(n(), t)
        );
    }),
    pr = at('REMOVE_PARTICIPANT', (e, t, r) => {
        let { action: n, getState: a } = e;
        if (!Ft(a(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        if (!Rt(a(), r)) throw new Error('Given user ("' + r + '") doesn\'t exist. You should add it first.');
        return (
            n({
                chat: t,
                user: r,
            }),
            Zt(a(), t)
        );
    }),
    hr = at('SEND_EVENT', (e, t, r, n) => {
        let { action: a, getState: i } = e;
        if (!Ft(i(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        if (At(i(), t, r.id))
            throw new Error(
                'There is already an event with "' + r.id + '" ID in this chat ("' + t + '"). It has to be unique.'
            );
        const s = r.id || Ae(Ct(i(), t));
        return (
            a(
                {
                    id: s,
                    chat: t,
                    event: dt(
                        Jt({}, r, {
                            author: Pt(i()).id,
                            own: !0,
                            id: s,
                            timestamp: Date.now(),
                            delivered: !1,
                        })
                    ),
                },
                n
            ),
            Et(i(), t, s)
        );
    }),
    fr = at('SET_APPLICATION_STATE', (e, t) => {
        let { action: r, getApplicationState: n } = e;
        if (!t || De(t)) throw new Error('Given data object is empty.');
        return r(t), n();
    }),
    gr = at('UPDATE_FEATURE', (e, t, r) => {
        let { action: n, getApplicationState: a } = e;
        if (!r || !t || De(r)) throw new Error('Given data object is empty.');
        return (
            n({
                feature: t,
                data: r,
            }),
            a()
        );
    }),
    mr = at('SET_CONNECTION_STATE', (e, t) => {
        let { action: r, getState: n } = e;
        return (
            r({
                connectionState: t,
            }),
            xt(n())
        );
    }),
    _r = at('SET_CHAT_SERVER_ID', (e, t, r) => {
        let { action: n, getState: a } = e;
        if (!Ft(a(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        if (null !== Dt(a(), t).serverId) throw new Error('Chat with "' + t + '" ID has already serverId.');
        return (
            n({
                id: t,
                serverId: r,
            }),
            Dt(a(), t)
        );
    }),
    br = at('CLEAR_CHAT_SERVER_ID', (e, t) => {
        let { action: r, getState: n } = e;
        if (!Ft(n(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        return (
            r({
                id: t,
            }),
            Dt(n(), t)
        );
    }),
    yr = at('SET_EVENT_DATA', (e, t, r, n) => {
        let { action: a, getState: i } = e;
        if (!Ft(i(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        if (!At(i(), t, r))
            throw new Error('There is no "' + r + '" event in "' + t + '" chat. You should add it first.');
        return (
            Kt(['id', 'type', 'own'], n),
            a({
                chat: t,
                id: r,
                data: Jt({}, Le(Xt.concat('author', 'serverId', 'timestamp'), n), {
                    own: n.author === $t(i()),
                }),
            }),
            Et(i(), t, r)
        );
    }),
    vr = at('SET_EVENT_SERVER_ID', (e, t, r, n) => {
        let { action: a, getState: i } = e;
        if (!Ft(i(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        if (!At(i(), t, r))
            throw new Error('There is no "' + r + '" event in "' + t + '" chat. You should add it first.');
        if (null !== Et(i(), t, r).serverId) throw new Error('Event with "' + r + '" ID has already serverId.');
        return (
            a({
                chat: t,
                id: r,
                serverId: n,
            }),
            Et(i(), t, r)
        );
    }),
    wr = at('SET_LOCALIZATION', (e, t) => {
        let { action: r } = e;
        r(t);
    }),
    kr = at('SET_USER_SERVER_ID', (e, t, r) => {
        let { action: n, getState: a } = e;
        if (!Rt(a(), t)) throw new Error('There is no "' + t + '" user. You should add it first.');
        if (null !== jt(a(), t).serverId) throw new Error('User with "' + t + '" ID has already serverId.');
        return (
            n({
                id: t,
                serverId: r,
            }),
            jt(a(), t)
        );
    }),
    xr = at('CLEAR_USER_SERVER_ID', (e, t) => {
        let { action: r, getState: n } = e;
        if (!Rt(n(), t)) throw new Error('There is no "' + t + '" user. You should add it first.');
        return (
            r({
                id: t,
            }),
            jt(n(), t)
        );
    }),
    { actionMethod: Sr, requestActionMethod: Ir } = it('SET_USER_PROPERTIES', (e, t, r) => {
        let { action: n, getState: a } = e;
        if (!Rt(a(), t)) throw new Error('There is no user with "' + t + '" ID. You should add it first.');
        return (
            n({
                id: t,
                properties: r,
            }),
            jt(a(), t)
        );
    }),
    { actionMethod: Er, requestActionMethod: Tr } = it('UPDATE_CHAT', (e, t, r, n) => {
        let { action: a, getState: i } = e;
        if (!Ft(i(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        return (
            Kt(['id', 'participants', 'events'], r),
            a(
                {
                    id: t,
                    data: Le(['active', 'properties'], r),
                },
                n
            ),
            Dt(i(), t)
        );
    }),
    { actionMethod: Ar, requestActionMethod: Cr } = it('UPDATE_EVENT', (e, t, r, n) => {
        let { action: a, getState: i } = e;
        if (!Ft(i(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        if (!At(i(), t, r))
            throw new Error('There is no "' + r + '" event in "' + t + '" chat. You should add it first.');
        return (
            Kt(['id', 'type', 'author', 'own', 'timestamp'], n),
            a({
                chat: t,
                id: r,
                data: Le(Xt, n),
            }),
            Et(i(), t, r)
        );
    }),
    { actionMethod: zr, requestActionMethod: Dr } = it('UPDATE_USER', (e, t, r) => {
        let { action: n, getState: a } = e;
        if (!Rt(a(), t)) throw new Error('There is no user with "' + t + '" ID. You should add it first.');
        return (
            Kt(['id', 'type'], r),
            n({
                id: t,
                data: Le(['name', 'email', 'avatar', 'properties'], r),
            }),
            jt(a(), t)
        );
    }),
    Fr = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                addChat: ar,
                addEvent: ir,
                addHistoryEvents: or,
                addParticipant: lr,
                addUser: cr,
                addView: er,
                clearChatServerId: br,
                clearUserServerId: xr,
                flushChat: ur,
                recalculateTimeline: dr,
                removeEvent: sr,
                removeParticipant: pr,
                requestSetUserProperties: Ir,
                requestUpdateChat: Tr,
                requestUpdateEvent: Cr,
                requestUpdateUser: Dr,
                sendEvent: hr,
                setApplicationState: fr,
                setChatServerId: _r,
                setConnectionState: mr,
                setCurrentView: tr,
                setDefaultView: nr,
                setEventData: yr,
                setEventServerId: vr,
                setLocalization: wr,
                setUserProperties: Sr,
                setUserServerId: kr,
                updateChat: Er,
                updateEvent: Ar,
                updateFeature: gr,
                updateUser: zr,
                updateView: rr,
            },
            Symbol.toStringTag,
            {
                value: 'Module',
            }
        )
    );

function Mr() {}

function Or() {}
Or.resetWarningCache = Mr;
!(function () {
    function e(e, t, r, n, a, i) {
        if ('SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED' !== i) {
            var s = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            );
            throw ((s.name = 'Invariant Violation'), s);
        }
    }

    function t() {
        return e;
    }
    e.isRequired = e;
    var r = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: Or,
        resetWarningCache: Mr,
    };
    r.PropTypes = r;
})();
var Pr = function (e) {
        e();
    },
    jr = function () {
        return Pr;
    },
    Rr = {
        exports: {},
    },
    Br = {};
/** @license React v16.7.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(Br, '__esModule', {
    value: !0,
});
var $r = 'function' == typeof Symbol && Symbol.for,
    qr = $r ? Symbol.for('react.element') : 60103,
    Ur = $r ? Symbol.for('react.portal') : 60106,
    Nr = $r ? Symbol.for('react.fragment') : 60107,
    Lr = $r ? Symbol.for('react.strict_mode') : 60108,
    Vr = $r ? Symbol.for('react.profiler') : 60114,
    Hr = $r ? Symbol.for('react.provider') : 60109,
    Gr = $r ? Symbol.for('react.context') : 60110,
    Zr = $r ? Symbol.for('react.async_mode') : 60111,
    Wr = $r ? Symbol.for('react.concurrent_mode') : 60111,
    Yr = $r ? Symbol.for('react.forward_ref') : 60112,
    Qr = $r ? Symbol.for('react.suspense') : 60113,
    Jr = $r ? Symbol.for('react.memo') : 60115,
    Xr = $r ? Symbol.for('react.lazy') : 60116;

function Kr(e) {
    if ('object' == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
            case qr:
                switch ((e = e.type)) {
                    case Zr:
                    case Wr:
                    case Nr:
                    case Vr:
                    case Lr:
                    case Qr:
                        return e;
                    default:
                        switch ((e = e && e.$$typeof)) {
                            case Gr:
                            case Yr:
                            case Hr:
                                return e;
                            default:
                                return t;
                        }
                }
            case Xr:
            case Jr:
            case Ur:
                return t;
        }
    }
}

function en(e) {
    return Kr(e) === Wr;
}
(Br.typeOf = Kr),
    (Br.AsyncMode = Zr),
    (Br.ConcurrentMode = Wr),
    (Br.ContextConsumer = Gr),
    (Br.ContextProvider = Hr),
    (Br.Element = qr),
    (Br.ForwardRef = Yr),
    (Br.Fragment = Nr),
    (Br.Lazy = Xr),
    (Br.Memo = Jr),
    (Br.Portal = Ur),
    (Br.Profiler = Vr),
    (Br.StrictMode = Lr),
    (Br.Suspense = Qr),
    (Br.isValidElementType = function (e) {
        return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === Nr ||
            e === Wr ||
            e === Vr ||
            e === Lr ||
            e === Qr ||
            ('object' == typeof e &&
                null !== e &&
                (e.$$typeof === Xr || e.$$typeof === Jr || e.$$typeof === Hr || e.$$typeof === Gr || e.$$typeof === Yr))
        );
    }),
    (Br.isAsyncMode = function (e) {
        return en(e) || Kr(e) === Zr;
    }),
    (Br.isConcurrentMode = en),
    (Br.isContextConsumer = function (e) {
        return Kr(e) === Gr;
    }),
    (Br.isContextProvider = function (e) {
        return Kr(e) === Hr;
    }),
    (Br.isElement = function (e) {
        return 'object' == typeof e && null !== e && e.$$typeof === qr;
    }),
    (Br.isForwardRef = function (e) {
        return Kr(e) === Yr;
    }),
    (Br.isFragment = function (e) {
        return Kr(e) === Nr;
    }),
    (Br.isLazy = function (e) {
        return Kr(e) === Xr;
    }),
    (Br.isMemo = function (e) {
        return Kr(e) === Jr;
    }),
    (Br.isPortal = function (e) {
        return Kr(e) === Ur;
    }),
    (Br.isProfiler = function (e) {
        return Kr(e) === Vr;
    }),
    (Br.isStrictMode = function (e) {
        return Kr(e) === Lr;
    }),
    (Br.isSuspense = function (e) {
        return Kr(e) === Qr;
    }),
    (Rr.exports = Br);
var tn = Rr.exports,
    rn = {};
(rn[tn.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
}),
    (rn[tn.Memo] = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
    });
var nn,
    an = {},
    sn = 'function' == typeof Symbol && Symbol.for,
    on = sn ? Symbol.for('react.element') : 60103,
    ln = sn ? Symbol.for('react.portal') : 60106,
    cn = sn ? Symbol.for('react.fragment') : 60107,
    un = sn ? Symbol.for('react.strict_mode') : 60108,
    dn = sn ? Symbol.for('react.profiler') : 60114,
    pn = sn ? Symbol.for('react.provider') : 60109,
    hn = sn ? Symbol.for('react.context') : 60110,
    fn = sn ? Symbol.for('react.async_mode') : 60111,
    gn = sn ? Symbol.for('react.concurrent_mode') : 60111,
    mn = sn ? Symbol.for('react.forward_ref') : 60112,
    _n = sn ? Symbol.for('react.suspense') : 60113,
    bn = sn ? Symbol.for('react.suspense_list') : 60120,
    yn = sn ? Symbol.for('react.memo') : 60115,
    vn = sn ? Symbol.for('react.lazy') : 60116,
    wn = sn ? Symbol.for('react.block') : 60121,
    kn = sn ? Symbol.for('react.fundamental') : 60117,
    xn = sn ? Symbol.for('react.responder') : 60118,
    Sn = sn ? Symbol.for('react.scope') : 60119;
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function In(e) {
    if ('object' == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
            case on:
                switch ((e = e.type)) {
                    case fn:
                    case gn:
                    case cn:
                    case dn:
                    case un:
                    case _n:
                        return e;
                    default:
                        switch ((e = e && e.$$typeof)) {
                            case hn:
                            case mn:
                            case vn:
                            case yn:
                            case pn:
                                return e;
                            default:
                                return t;
                        }
                }
            case ln:
                return t;
        }
    }
}

function En(e) {
    return In(e) === gn;
}
(an.AsyncMode = fn),
    (an.ConcurrentMode = gn),
    (an.ContextConsumer = hn),
    (an.ContextProvider = pn),
    (an.Element = on),
    (an.ForwardRef = mn),
    (an.Fragment = cn),
    (an.Lazy = vn),
    (an.Memo = yn),
    (an.Portal = ln),
    (an.Profiler = dn),
    (an.StrictMode = un),
    (an.Suspense = _n),
    (an.isAsyncMode = function (e) {
        return En(e) || In(e) === fn;
    }),
    (an.isConcurrentMode = En),
    (an.isContextConsumer = function (e) {
        return In(e) === hn;
    }),
    (an.isContextProvider = function (e) {
        return In(e) === pn;
    }),
    (an.isElement = function (e) {
        return 'object' == typeof e && null !== e && e.$$typeof === on;
    }),
    (an.isForwardRef = function (e) {
        return In(e) === mn;
    }),
    (an.isFragment = function (e) {
        return In(e) === cn;
    }),
    (an.isLazy = function (e) {
        return In(e) === vn;
    }),
    (an.isMemo = function (e) {
        return In(e) === yn;
    }),
    (an.isPortal = function (e) {
        return In(e) === ln;
    }),
    (an.isProfiler = function (e) {
        return In(e) === dn;
    }),
    (an.isStrictMode = function (e) {
        return In(e) === un;
    }),
    (an.isSuspense = function (e) {
        return In(e) === _n;
    }),
    (an.isValidElementType = function (e) {
        return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === cn ||
            e === gn ||
            e === dn ||
            e === un ||
            e === _n ||
            e === bn ||
            ('object' == typeof e &&
                null !== e &&
                (e.$$typeof === vn ||
                    e.$$typeof === yn ||
                    e.$$typeof === pn ||
                    e.$$typeof === hn ||
                    e.$$typeof === mn ||
                    e.$$typeof === kn ||
                    e.$$typeof === xn ||
                    e.$$typeof === Sn ||
                    e.$$typeof === wn))
        );
    }),
    (an.typeOf = In),
    (nn = o.unstable_batchedUpdates),
    (Pr = nn);
const Tn = 'connected',
    An = 'disconnected',
    Cn = 'fakely_connected',
    zn = 'reconnecting',
    Dn = 'scheduled_reconnecting';
var Fn, Mn, On, Pn, jn, Rn, Bn, $n, qn, Un;

function Nn() {
    return Un
        ? qn
        : ((Un = 1),
          (qn = function (e) {
              var t = {};
              (t.src_Any = (
                  Mn
                      ? Fn
                      : ((Mn = 1),
                        (Fn =
                            /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/))
              ).source),
                  (t.src_Cc = (Pn ? On : ((Pn = 1), (On = /[\0-\x1F\x7F-\x9F]/))).source),
                  (t.src_Z = (Rn ? jn : ((Rn = 1), (jn = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/))).source),
                  (t.src_P = (
                      $n
                          ? Bn
                          : (($n = 1),
                            (Bn =
                                /[!-#%-\*,-/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E49\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/))
                  ).source),
                  (t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join('|')),
                  (t.src_ZCc = [t.src_Z, t.src_Cc].join('|'));
              var r = '[><｜]';
              return (
                  (t.src_pseudo_letter = '(?:(?![><｜]|' + t.src_ZPCc + ')' + t.src_Any + ')'),
                  (t.src_ip4 =
                      '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)'),
                  (t.src_auth = '(?:(?:(?!' + t.src_ZCc + '|[@/\\[\\]()]).)+@)?'),
                  (t.src_port = '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?'),
                  (t.src_host_terminator =
                      '(?=$|[><｜]|' + t.src_ZPCc + ')(?!-|_|:\\d|\\.-|\\.(?!$|' + t.src_ZPCc + '))'),
                  (t.src_path =
                      '(?:[/?#](?:(?!' +
                      t.src_ZCc +
                      '|' +
                      r +
                      '|[()[\\]{}.,"\'?!\\-]).|\\[(?:(?!' +
                      t.src_ZCc +
                      '|\\]).)*\\]|\\((?:(?!' +
                      t.src_ZCc +
                      '|[)]).)*\\)|\\{(?:(?!' +
                      t.src_ZCc +
                      '|[}]).)*\\}|\\"(?:(?!' +
                      t.src_ZCc +
                      '|["]).)+\\"|\\\'(?:(?!' +
                      t.src_ZCc +
                      "|[']).)+\\'|\\'(?=" +
                      t.src_pseudo_letter +
                      '|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!' +
                      t.src_ZCc +
                      '|[.]).|' +
                      (e && e['---'] ? '\\-(?!--(?:[^-]|$))(?:-*)|' : '\\-+|') +
                      '\\,(?!' +
                      t.src_ZCc +
                      ').|\\!(?!' +
                      t.src_ZCc +
                      '|[!]).|\\?(?!' +
                      t.src_ZCc +
                      '|[?]).)+|\\/)?'),
                  (t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+'),
                  (t.src_xn = 'xn--[a-z0-9\\-]{1,59}'),
                  (t.src_domain_root = '(?:' + t.src_xn + '|' + t.src_pseudo_letter + '{1,63})'),
                  (t.src_domain =
                      '(?:' +
                      t.src_xn +
                      '|(?:' +
                      t.src_pseudo_letter +
                      ')|(?:' +
                      t.src_pseudo_letter +
                      '(?:-|' +
                      t.src_pseudo_letter +
                      '){0,61}' +
                      t.src_pseudo_letter +
                      '))'),
                  (t.src_host = '(?:(?:(?:(?:' + t.src_domain + ')\\.)*' + t.src_domain + '))'),
                  (t.tpl_host_fuzzy = '(?:' + t.src_ip4 + '|(?:(?:(?:' + t.src_domain + ')\\.)+(?:%TLDS%)))'),
                  (t.tpl_host_no_ip_fuzzy = '(?:(?:(?:' + t.src_domain + ')\\.)+(?:%TLDS%))'),
                  (t.src_host_strict = t.src_host + t.src_host_terminator),
                  (t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator),
                  (t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator),
                  (t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator),
                  (t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator),
                  (t.tpl_host_fuzzy_test =
                      'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + t.src_ZPCc + '|>|$))'),
                  (t.tpl_email_fuzzy =
                      '(^|[><｜]|\\(|' + t.src_ZCc + ')(' + t.src_email_name + '@' + t.tpl_host_fuzzy_strict + ')'),
                  (t.tpl_link_fuzzy =
                      '(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|' +
                      t.src_ZPCc +
                      '))((?![$+<=>^`|｜])' +
                      t.tpl_host_port_fuzzy_strict +
                      t.src_path +
                      ')'),
                  (t.tpl_link_no_ip_fuzzy =
                      '(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|' +
                      t.src_ZPCc +
                      '))((?![$+<=>^`|｜])' +
                      t.tpl_host_port_no_ip_fuzzy_strict +
                      t.src_path +
                      ')'),
                  t
              );
          }));
}

function Ln(e) {
    return (
        Array.prototype.slice.call(arguments, 1).forEach(function (t) {
            t &&
                Object.keys(t).forEach(function (r) {
                    e[r] = t[r];
                });
        }),
        e
    );
}

function Vn(e) {
    return Object.prototype.toString.call(e);
}

function Hn(e) {
    return '[object Function]' === Vn(e);
}

function Gn(e) {
    return e.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
}
var Zn = {
    fuzzyLink: !0,
    fuzzyEmail: !0,
    fuzzyIP: !1,
};
var Wn = {
        'http:': {
            validate: function (e, t, r) {
                var n = e.slice(t);
                return (
                    r.re.http ||
                        (r.re.http = new RegExp(
                            '^\\/\\/' + r.re.src_auth + r.re.src_host_port_strict + r.re.src_path,
                            'i'
                        )),
                    r.re.http.test(n) ? n.match(r.re.http)[0].length : 0
                );
            },
        },
        'https:': 'http:',
        'ftp:': 'http:',
        '//': {
            validate: function (e, t, r) {
                var n = e.slice(t);
                return (
                    r.re.no_http ||
                        (r.re.no_http = new RegExp(
                            '^' +
                                r.re.src_auth +
                                '(?:localhost|(?:(?:' +
                                r.re.src_domain +
                                ')\\.)+' +
                                r.re.src_domain_root +
                                ')' +
                                r.re.src_port +
                                r.re.src_host_terminator +
                                r.re.src_path,
                            'i'
                        )),
                    r.re.no_http.test(n)
                        ? (t >= 3 && ':' === e[t - 3]) || (t >= 3 && '/' === e[t - 3])
                            ? 0
                            : n.match(r.re.no_http)[0].length
                        : 0
                );
            },
        },
        'mailto:': {
            validate: function (e, t, r) {
                var n = e.slice(t);
                return (
                    r.re.mailto ||
                        (r.re.mailto = new RegExp('^' + r.re.src_email_name + '@' + r.re.src_host_strict, 'i')),
                    r.re.mailto.test(n) ? n.match(r.re.mailto)[0].length : 0
                );
            },
        },
    },
    Yn = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');

function Qn(e) {
    var t = (e.re = Nn()(e.__opts__)),
        r = e.__tlds__.slice();

    function n(e) {
        return e.replace('%TLDS%', t.src_tlds);
    }
    e.onCompile(),
        e.__tlds_replaced__ ||
            r.push(
                'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]'
            ),
        r.push(t.src_xn),
        (t.src_tlds = r.join('|')),
        (t.email_fuzzy = RegExp(n(t.tpl_email_fuzzy), 'i')),
        (t.link_fuzzy = RegExp(n(t.tpl_link_fuzzy), 'i')),
        (t.link_no_ip_fuzzy = RegExp(n(t.tpl_link_no_ip_fuzzy), 'i')),
        (t.host_fuzzy_test = RegExp(n(t.tpl_host_fuzzy_test), 'i'));
    var a = [];

    function i(e, t) {
        throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t);
    }
    (e.__compiled__ = {}),
        Object.keys(e.__schemas__).forEach(function (t) {
            var r = e.__schemas__[t];
            if (null !== r) {
                var n = {
                    validate: null,
                    link: null,
                };
                if (((e.__compiled__[t] = n), '[object Object]' === Vn(r)))
                    return (
                        !(function (e) {
                            return '[object RegExp]' === Vn(e);
                        })(r.validate)
                            ? Hn(r.validate)
                                ? (n.validate = r.validate)
                                : i(t, r)
                            : (n.validate = (function (e) {
                                  return function (t, r) {
                                      var n = t.slice(r);
                                      return e.test(n) ? n.match(e)[0].length : 0;
                                  };
                              })(r.validate)),
                        void (Hn(r.normalize)
                            ? (n.normalize = r.normalize)
                            : r.normalize
                              ? i(t, r)
                              : (n.normalize = function (e, t) {
                                    t.normalize(e);
                                }))
                    );
                !(function (e) {
                    return '[object String]' === Vn(e);
                })(r)
                    ? i(t, r)
                    : a.push(t);
            }
        }),
        a.forEach(function (t) {
            e.__compiled__[e.__schemas__[t]] &&
                ((e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate),
                (e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize));
        }),
        (e.__compiled__[''] = {
            validate: null,
            normalize: function (e, t) {
                t.normalize(e);
            },
        });
    var s = Object.keys(e.__compiled__)
        .filter(function (t) {
            return t.length > 0 && e.__compiled__[t];
        })
        .map(Gn)
        .join('|');
    (e.re.schema_test = RegExp('(^|(?!_)(?:[><｜]|' + t.src_ZPCc + '))(' + s + ')', 'i')),
        (e.re.schema_search = RegExp('(^|(?!_)(?:[><｜]|' + t.src_ZPCc + '))(' + s + ')', 'ig')),
        (e.re.pretest = RegExp('(' + e.re.schema_test.source + ')|(' + e.re.host_fuzzy_test.source + ')|@', 'i')),
        (function (e) {
            (e.__index__ = -1), (e.__text_cache__ = '');
        })(e);
}

function Jn(e, t) {
    var r = e.__index__,
        n = e.__last_index__,
        a = e.__text_cache__.slice(r, n);
    (this.schema = e.__schema__.toLowerCase()),
        (this.index = r + t),
        (this.lastIndex = n + t),
        (this.raw = a),
        (this.text = a),
        (this.url = a);
}

function Xn(e, t) {
    var r = new Jn(e, t);
    return e.__compiled__[r.schema].normalize(r, e), r;
}

function Kn(e, t) {
    if (!(this instanceof Kn)) return new Kn(e, t);
    var r;
    t ||
        ((r = e),
        Object.keys(r || {}).reduce(function (e, t) {
            return e || Zn.hasOwnProperty(t);
        }, !1) && ((t = e), (e = {}))),
        (this.__opts__ = Ln({}, Zn, t)),
        (this.__index__ = -1),
        (this.__last_index__ = -1),
        (this.__schema__ = ''),
        (this.__text_cache__ = ''),
        (this.__schemas__ = Ln({}, Wn, e)),
        (this.__compiled__ = {}),
        (this.__tlds__ = Yn),
        (this.__tlds_replaced__ = !1),
        (this.re = {}),
        Qn(this);
}
(Kn.prototype.add = function (e, t) {
    return (this.__schemas__[e] = t), Qn(this), this;
}),
    (Kn.prototype.set = function (e) {
        return (this.__opts__ = Ln(this.__opts__, e)), this;
    }),
    (Kn.prototype.test = function (e) {
        if (((this.__text_cache__ = e), (this.__index__ = -1), !e.length)) return !1;
        var t, r, n, a, i, s, o, l;
        if (this.re.schema_test.test(e))
            for ((o = this.re.schema_search).lastIndex = 0; null !== (t = o.exec(e)); )
                if ((a = this.testSchemaAt(e, t[2], o.lastIndex))) {
                    (this.__schema__ = t[2]),
                        (this.__index__ = t.index + t[1].length),
                        (this.__last_index__ = t.index + t[0].length + a);
                    break;
                }
        return (
            this.__opts__.fuzzyLink &&
                this.__compiled__['http:'] &&
                (l = e.search(this.re.host_fuzzy_test)) >= 0 &&
                (this.__index__ < 0 || l < this.__index__) &&
                null !== (r = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) &&
                ((i = r.index + r[1].length),
                (this.__index__ < 0 || i < this.__index__) &&
                    ((this.__schema__ = ''), (this.__index__ = i), (this.__last_index__ = r.index + r[0].length))),
            this.__opts__.fuzzyEmail &&
                this.__compiled__['mailto:'] &&
                e.indexOf('@') >= 0 &&
                null !== (n = e.match(this.re.email_fuzzy)) &&
                ((i = n.index + n[1].length),
                (s = n.index + n[0].length),
                (this.__index__ < 0 || i < this.__index__ || (i === this.__index__ && s > this.__last_index__)) &&
                    ((this.__schema__ = 'mailto:'), (this.__index__ = i), (this.__last_index__ = s))),
            this.__index__ >= 0
        );
    }),
    (Kn.prototype.pretest = function (e) {
        return this.re.pretest.test(e);
    }),
    (Kn.prototype.testSchemaAt = function (e, t, r) {
        return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, r, this) : 0;
    }),
    (Kn.prototype.match = function (e) {
        var t = 0,
            r = [];
        this.__index__ >= 0 && this.__text_cache__ === e && (r.push(Xn(this, t)), (t = this.__last_index__));
        for (var n = t ? e.slice(t) : e; this.test(n); )
            r.push(Xn(this, t)), (n = n.slice(this.__last_index__)), (t += this.__last_index__);
        return r.length ? r : null;
    }),
    (Kn.prototype.tlds = function (e, t) {
        return (
            (e = Array.isArray(e) ? e : [e]),
            t
                ? ((this.__tlds__ = this.__tlds__
                      .concat(e)
                      .sort()
                      .filter(function (e, t, r) {
                          return e !== r[t - 1];
                      })
                      .reverse()),
                  Qn(this),
                  this)
                : ((this.__tlds__ = e.slice()), (this.__tlds_replaced__ = !0), Qn(this), this)
        );
    }),
    (Kn.prototype.normalize = function (e) {
        e.schema || (e.url = 'http://' + e.url),
            'mailto:' !== e.schema || /^mailto:/i.test(e.url) || (e.url = 'mailto:' + e.url);
    }),
    (Kn.prototype.onCompile = function () {});
var ea = Kn;
const ta = t(ea);

function ra() {
    return {
        async: !1,
        baseUrl: null,
        breaks: !1,
        extensions: null,
        gfm: !0,
        headerIds: !0,
        headerPrefix: '',
        highlight: null,
        langPrefix: 'language-',
        mangle: !0,
        pedantic: !1,
        renderer: null,
        sanitize: !1,
        sanitizer: null,
        silent: !1,
        smartypants: !1,
        tokenizer: null,
        walkTokens: null,
        xhtml: !1,
    };
}
let na = {
    async: !1,
    baseUrl: null,
    breaks: !1,
    extensions: null,
    gfm: !0,
    headerIds: !0,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: !0,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartypants: !1,
    tokenizer: null,
    walkTokens: null,
    xhtml: !1,
};
const aa = /[&<>"']/,
    ia = new RegExp(aa.source, 'g'),
    sa = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    oa = new RegExp(sa.source, 'g'),
    la = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    },
    ca = e => la[e];

function ua(e, t) {
    if (t) {
        if (aa.test(e)) return e.replace(ia, ca);
    } else if (sa.test(e)) return e.replace(oa, ca);
    return e;
}
const da = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;

function pa(e) {
    return e.replace(da, (e, t) =>
        'colon' === (t = t.toLowerCase())
            ? ':'
            : '#' === t.charAt(0)
              ? 'x' === t.charAt(1)
                  ? String.fromCharCode(parseInt(t.substring(2), 16))
                  : String.fromCharCode(+t.substring(1))
              : ''
    );
}
const ha = /(^|[^\[])\^/g;

function fa(e, t) {
    (e = 'string' == typeof e ? e : e.source), (t = t || '');
    const r = {
        replace: (t, n) => ((n = (n = n.source || n).replace(ha, '$1')), (e = e.replace(t, n)), r),
        getRegex: () => new RegExp(e, t),
    };
    return r;
}
const ga = /[^\w:]/g,
    ma = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

function _a(e, t, r) {
    if (e) {
        let e;
        try {
            e = decodeURIComponent(pa(r)).replace(ga, '').toLowerCase();
        } catch (n) {
            return null;
        }
        if (0 === e.indexOf('javascript:') || 0 === e.indexOf('vbscript:') || 0 === e.indexOf('data:')) return null;
    }
    t &&
        !ma.test(r) &&
        (r = (function (e, t) {
            ba[' ' + e] || (ya.test(e) ? (ba[' ' + e] = e + '/') : (ba[' ' + e] = Ia(e, '/', !0)));
            e = ba[' ' + e];
            const r = -1 === e.indexOf(':');
            return '//' === t.substring(0, 2)
                ? r
                    ? t
                    : e.replace(va, '$1') + t
                : '/' === t.charAt(0)
                  ? r
                      ? t
                      : e.replace(wa, '$1') + t
                  : e + t;
        })(t, r));
    try {
        r = encodeURI(r).replace(/%25/g, '%');
    } catch (n) {
        return null;
    }
    return r;
}
const ba = {},
    ya = /^[^:]+:\/*[^/]*$/,
    va = /^([^:]+:)[\s\S]*$/,
    wa = /^([^:]+:\/*[^/]*)[\s\S]*$/;
const ka = {
    exec: function () {},
};

function xa(e) {
    let t,
        r,
        n = 1;
    for (; n < arguments.length; n++)
        for (r in ((t = arguments[n]), t)) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e;
}

function Sa(e, t) {
    const r = e
        .replace(/\|/g, (e, t, r) => {
            let n = !1,
                a = t;
            for (; --a >= 0 && '\\' === r[a]; ) n = !n;
            return n ? '|' : ' |';
        })
        .split(/ \|/);
    let n = 0;
    if ((r[0].trim() || r.shift(), r.length > 0 && !r[r.length - 1].trim() && r.pop(), r.length > t)) r.splice(t);
    else for (; r.length < t; ) r.push('');
    for (; n < r.length; n++) r[n] = r[n].trim().replace(/\\\|/g, '|');
    return r;
}

function Ia(e, t, r) {
    const n = e.length;
    if (0 === n) return '';
    let a = 0;
    for (; a < n; ) {
        const i = e.charAt(n - a - 1);
        if (i !== t || r) {
            if (i === t || !r) break;
            a++;
        } else a++;
    }
    return e.slice(0, n - a);
}

function Ea(e) {
    e &&
        e.sanitize &&
        !e.silent &&
        console.warn(
            'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options'
        );
}

function Ta(e, t) {
    if (t < 1) return '';
    let r = '';
    for (; t > 1; ) 1 & t && (r += e), (t >>= 1), (e += e);
    return r + e;
}

function Aa(e, t, r, n) {
    const a = t.href,
        i = t.title ? ua(t.title) : null,
        s = e[1].replace(/\\([\[\]])/g, '$1');
    if ('!' !== e[0].charAt(0)) {
        n.state.inLink = !0;
        const e = {
            type: 'link',
            raw: r,
            href: a,
            title: i,
            text: s,
            tokens: n.inlineTokens(s),
        };
        return (n.state.inLink = !1), e;
    }
    return {
        type: 'image',
        raw: r,
        href: a,
        title: i,
        text: ua(s),
    };
}
class Ca {
    constructor(e) {
        this.options = e || na;
    }
    space(e) {
        const t = this.rules.block.newline.exec(e);
        if (t && t[0].length > 0)
            return {
                type: 'space',
                raw: t[0],
            };
    }
    code(e) {
        const t = this.rules.block.code.exec(e);
        if (t) {
            const e = t[0].replace(/^ {1,4}/gm, '');
            return {
                type: 'code',
                raw: t[0],
                codeBlockStyle: 'indented',
                text: this.options.pedantic ? e : Ia(e, '\n'),
            };
        }
    }
    fences(e) {
        const t = this.rules.block.fences.exec(e);
        if (t) {
            const e = t[0],
                r = (function (e, t) {
                    const r = e.match(/^(\s+)(?:```)/);
                    if (null === r) return t;
                    const n = r[1];
                    return t
                        .split('\n')
                        .map(e => {
                            const t = e.match(/^\s+/);
                            if (null === t) return e;
                            const [r] = t;
                            return r.length >= n.length ? e.slice(n.length) : e;
                        })
                        .join('\n');
                })(e, t[3] || '');
            return {
                type: 'code',
                raw: e,
                lang: t[2] ? t[2].trim().replace(this.rules.inline._escapes, '$1') : t[2],
                text: r,
            };
        }
    }
    heading(e) {
        const t = this.rules.block.heading.exec(e);
        if (t) {
            let e = t[2].trim();
            if (/#$/.test(e)) {
                const t = Ia(e, '#');
                this.options.pedantic ? (e = t.trim()) : (t && !/ $/.test(t)) || (e = t.trim());
            }
            return {
                type: 'heading',
                raw: t[0],
                depth: t[1].length,
                text: e,
                tokens: this.lexer.inline(e),
            };
        }
    }
    hr(e) {
        const t = this.rules.block.hr.exec(e);
        if (t)
            return {
                type: 'hr',
                raw: t[0],
            };
    }
    blockquote(e) {
        const t = this.rules.block.blockquote.exec(e);
        if (t) {
            const e = t[0].replace(/^ *>[ \t]?/gm, ''),
                r = this.lexer.state.top;
            this.lexer.state.top = !0;
            const n = this.lexer.blockTokens(e);
            return (
                (this.lexer.state.top = r),
                {
                    type: 'blockquote',
                    raw: t[0],
                    tokens: n,
                    text: e,
                }
            );
        }
    }
    list(e) {
        let t = this.rules.block.list.exec(e);
        if (t) {
            let r,
                n,
                a,
                i,
                s,
                o,
                l,
                c,
                u,
                d,
                p,
                h,
                f = t[1].trim();
            const g = f.length > 1,
                m = {
                    type: 'list',
                    raw: '',
                    ordered: g,
                    start: g ? +f.slice(0, -1) : '',
                    loose: !1,
                    items: [],
                };
            (f = g ? `\\d{1,9}\\${f.slice(-1)}` : `\\${f}`), this.options.pedantic && (f = g ? f : '[*+-]');
            const _ = new RegExp(`^( {0,3}${f})((?:[\t ][^\\n]*)?(?:\\n|$))`);
            for (; e && ((h = !1), (t = _.exec(e))) && !this.rules.block.hr.test(e); ) {
                if (
                    ((r = t[0]),
                    (e = e.substring(r.length)),
                    (c = t[2].split('\n', 1)[0].replace(/^\t+/, e => ' '.repeat(3 * e.length))),
                    (u = e.split('\n', 1)[0]),
                    this.options.pedantic
                        ? ((i = 2), (p = c.trimLeft()))
                        : ((i = t[2].search(/[^ ]/)), (i = i > 4 ? 1 : i), (p = c.slice(i)), (i += t[1].length)),
                    (o = !1),
                    !c && /^ *$/.test(u) && ((r += u + '\n'), (e = e.substring(u.length + 1)), (h = !0)),
                    !h)
                ) {
                    const t = new RegExp(
                            `^ {0,${Math.min(3, i - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`
                        ),
                        n = new RegExp(`^ {0,${Math.min(3, i - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
                        a = new RegExp(`^ {0,${Math.min(3, i - 1)}}(?:\`\`\`|~~~)`),
                        s = new RegExp(`^ {0,${Math.min(3, i - 1)}}#`);
                    for (
                        ;
                        e &&
                        ((d = e.split('\n', 1)[0]),
                        (u = d),
                        this.options.pedantic && (u = u.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ')),
                        !a.test(u)) &&
                        !s.test(u) &&
                        !t.test(u) &&
                        !n.test(e);

                    ) {
                        if (u.search(/[^ ]/) >= i || !u.trim()) p += '\n' + u.slice(i);
                        else {
                            if (o) break;
                            if (c.search(/[^ ]/) >= 4) break;
                            if (a.test(c)) break;
                            if (s.test(c)) break;
                            if (n.test(c)) break;
                            p += '\n' + u;
                        }
                        o || u.trim() || (o = !0), (r += d + '\n'), (e = e.substring(d.length + 1)), (c = u.slice(i));
                    }
                }
                m.loose || (l ? (m.loose = !0) : /\n *\n *$/.test(r) && (l = !0)),
                    this.options.gfm &&
                        ((n = /^\[[ xX]\] /.exec(p)),
                        n && ((a = '[ ] ' !== n[0]), (p = p.replace(/^\[[ xX]\] +/, '')))),
                    m.items.push({
                        type: 'list_item',
                        raw: r,
                        task: !!n,
                        checked: a,
                        loose: !1,
                        text: p,
                    }),
                    (m.raw += r);
            }
            (m.items[m.items.length - 1].raw = r.trimRight()),
                (m.items[m.items.length - 1].text = p.trimRight()),
                (m.raw = m.raw.trimRight());
            const b = m.items.length;
            for (s = 0; s < b; s++)
                if (
                    ((this.lexer.state.top = !1),
                    (m.items[s].tokens = this.lexer.blockTokens(m.items[s].text, [])),
                    !m.loose)
                ) {
                    const e = m.items[s].tokens.filter(e => 'space' === e.type),
                        t = e.length > 0 && e.some(e => /\n.*\n/.test(e.raw));
                    m.loose = t;
                }
            if (m.loose) for (s = 0; s < b; s++) m.items[s].loose = !0;
            return m;
        }
    }
    html(e) {
        const t = this.rules.block.html.exec(e);
        if (t) {
            const e = {
                type: 'html',
                raw: t[0],
                pre: !this.options.sanitizer && ('pre' === t[1] || 'script' === t[1] || 'style' === t[1]),
                text: t[0],
            };
            if (this.options.sanitize) {
                const r = this.options.sanitizer ? this.options.sanitizer(t[0]) : ua(t[0]);
                (e.type = 'paragraph'), (e.text = r), (e.tokens = this.lexer.inline(r));
            }
            return e;
        }
    }
    def(e) {
        const t = this.rules.block.def.exec(e);
        if (t) {
            const e = t[1].toLowerCase().replace(/\s+/g, ' '),
                r = t[2] ? t[2].replace(/^<(.*)>$/, '$1').replace(this.rules.inline._escapes, '$1') : '',
                n = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline._escapes, '$1') : t[3];
            return {
                type: 'def',
                tag: e,
                raw: t[0],
                href: r,
                title: n,
            };
        }
    }
    table(e) {
        const t = this.rules.block.table.exec(e);
        if (t) {
            const e = {
                type: 'table',
                header: Sa(t[1]).map(e => ({
                    text: e,
                })),
                align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, '').split('\n') : [],
            };
            if (e.header.length === e.align.length) {
                e.raw = t[0];
                let r,
                    n,
                    a,
                    i,
                    s = e.align.length;
                for (r = 0; r < s; r++)
                    /^ *-+: *$/.test(e.align[r])
                        ? (e.align[r] = 'right')
                        : /^ *:-+: *$/.test(e.align[r])
                          ? (e.align[r] = 'center')
                          : /^ *:-+ *$/.test(e.align[r])
                            ? (e.align[r] = 'left')
                            : (e.align[r] = null);
                for (s = e.rows.length, r = 0; r < s; r++)
                    e.rows[r] = Sa(e.rows[r], e.header.length).map(e => ({
                        text: e,
                    }));
                for (s = e.header.length, n = 0; n < s; n++) e.header[n].tokens = this.lexer.inline(e.header[n].text);
                for (s = e.rows.length, n = 0; n < s; n++)
                    for (i = e.rows[n], a = 0; a < i.length; a++) i[a].tokens = this.lexer.inline(i[a].text);
                return e;
            }
        }
    }
    lheading(e) {
        const t = this.rules.block.lheading.exec(e);
        if (t)
            return {
                type: 'heading',
                raw: t[0],
                depth: '=' === t[2].charAt(0) ? 1 : 2,
                text: t[1],
                tokens: this.lexer.inline(t[1]),
            };
    }
    paragraph(e) {
        const t = this.rules.block.paragraph.exec(e);
        if (t) {
            const e = '\n' === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
            return {
                type: 'paragraph',
                raw: t[0],
                text: e,
                tokens: this.lexer.inline(e),
            };
        }
    }
    text(e) {
        const t = this.rules.block.text.exec(e);
        if (t)
            return {
                type: 'text',
                raw: t[0],
                text: t[0],
                tokens: this.lexer.inline(t[0]),
            };
    }
    escape(e) {
        const t = this.rules.inline.escape.exec(e);
        if (t)
            return {
                type: 'escape',
                raw: t[0],
                text: ua(t[1]),
            };
    }
    tag(e) {
        const t = this.rules.inline.tag.exec(e);
        if (t)
            return (
                !this.lexer.state.inLink && /^<a /i.test(t[0])
                    ? (this.lexer.state.inLink = !0)
                    : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1),
                !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
                    ? (this.lexer.state.inRawBlock = !0)
                    : this.lexer.state.inRawBlock &&
                      /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) &&
                      (this.lexer.state.inRawBlock = !1),
                {
                    type: this.options.sanitize ? 'text' : 'html',
                    raw: t[0],
                    inLink: this.lexer.state.inLink,
                    inRawBlock: this.lexer.state.inRawBlock,
                    text: this.options.sanitize
                        ? this.options.sanitizer
                            ? this.options.sanitizer(t[0])
                            : ua(t[0])
                        : t[0],
                }
            );
    }
    link(e) {
        const t = this.rules.inline.link.exec(e);
        if (t) {
            const e = t[2].trim();
            if (!this.options.pedantic && /^</.test(e)) {
                if (!/>$/.test(e)) return;
                const t = Ia(e.slice(0, -1), '\\');
                if ((e.length - t.length) % 2 == 0) return;
            } else {
                const e = (function (e, t) {
                    if (-1 === e.indexOf(t[1])) return -1;
                    const r = e.length;
                    let n = 0,
                        a = 0;
                    for (; a < r; a++)
                        if ('\\' === e[a]) a++;
                        else if (e[a] === t[0]) n++;
                        else if (e[a] === t[1] && (n--, n < 0)) return a;
                    return -1;
                })(t[2], '()');
                if (e > -1) {
                    const r = (0 === t[0].indexOf('!') ? 5 : 4) + t[1].length + e;
                    (t[2] = t[2].substring(0, e)), (t[0] = t[0].substring(0, r).trim()), (t[3] = '');
                }
            }
            let r = t[2],
                n = '';
            if (this.options.pedantic) {
                const e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);
                e && ((r = e[1]), (n = e[3]));
            } else n = t[3] ? t[3].slice(1, -1) : '';
            return (
                (r = r.trim()),
                /^</.test(r) && (r = this.options.pedantic && !/>$/.test(e) ? r.slice(1) : r.slice(1, -1)),
                Aa(
                    t,
                    {
                        href: r ? r.replace(this.rules.inline._escapes, '$1') : r,
                        title: n ? n.replace(this.rules.inline._escapes, '$1') : n,
                    },
                    t[0],
                    this.lexer
                )
            );
        }
    }
    reflink(e, t) {
        let r;
        if ((r = this.rules.inline.reflink.exec(e)) || (r = this.rules.inline.nolink.exec(e))) {
            let e = (r[2] || r[1]).replace(/\s+/g, ' ');
            if (((e = t[e.toLowerCase()]), !e)) {
                const e = r[0].charAt(0);
                return {
                    type: 'text',
                    raw: e,
                    text: e,
                };
            }
            return Aa(r, e, r[0], this.lexer);
        }
    }
    emStrong(e, t, r = '') {
        let n = this.rules.inline.emStrong.lDelim.exec(e);
        if (!n) return;
        if (n[3] && r.match(/[\p{L}\p{N}]/u)) return;
        const a = n[1] || n[2] || '';
        if (!a || (a && ('' === r || this.rules.inline.punctuation.exec(r)))) {
            const r = n[0].length - 1;
            let a,
                i,
                s = r,
                o = 0;
            const l = '*' === n[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
            for (l.lastIndex = 0, t = t.slice(-1 * e.length + r); null != (n = l.exec(t)); ) {
                if (((a = n[1] || n[2] || n[3] || n[4] || n[5] || n[6]), !a)) continue;
                if (((i = a.length), n[3] || n[4])) {
                    s += i;
                    continue;
                }
                if ((n[5] || n[6]) && r % 3 && !((r + i) % 3)) {
                    o += i;
                    continue;
                }
                if (((s -= i), s > 0)) continue;
                i = Math.min(i, i + s + o);
                const t = e.slice(0, r + n.index + (n[0].length - a.length) + i);
                if (Math.min(r, i) % 2) {
                    const e = t.slice(1, -1);
                    return {
                        type: 'em',
                        raw: t,
                        text: e,
                        tokens: this.lexer.inlineTokens(e),
                    };
                }
                const l = t.slice(2, -2);
                return {
                    type: 'strong',
                    raw: t,
                    text: l,
                    tokens: this.lexer.inlineTokens(l),
                };
            }
        }
    }
    codespan(e) {
        const t = this.rules.inline.code.exec(e);
        if (t) {
            let e = t[2].replace(/\n/g, ' ');
            const r = /[^ ]/.test(e),
                n = /^ /.test(e) && / $/.test(e);
            return (
                r && n && (e = e.substring(1, e.length - 1)),
                (e = ua(e, !0)),
                {
                    type: 'codespan',
                    raw: t[0],
                    text: e,
                }
            );
        }
    }
    br(e) {
        const t = this.rules.inline.br.exec(e);
        if (t)
            return {
                type: 'br',
                raw: t[0],
            };
    }
    del(e) {
        const t = this.rules.inline.del.exec(e);
        if (t)
            return {
                type: 'del',
                raw: t[0],
                text: t[2],
                tokens: this.lexer.inlineTokens(t[2]),
            };
    }
    autolink(e, t) {
        const r = this.rules.inline.autolink.exec(e);
        if (r) {
            let e, n;
            return (
                '@' === r[2]
                    ? ((e = ua(this.options.mangle ? t(r[1]) : r[1])), (n = 'mailto:' + e))
                    : ((e = ua(r[1])), (n = e)),
                {
                    type: 'link',
                    raw: r[0],
                    text: e,
                    href: n,
                    tokens: [
                        {
                            type: 'text',
                            raw: e,
                            text: e,
                        },
                    ],
                }
            );
        }
    }
    url(e, t) {
        let r;
        if ((r = this.rules.inline.url.exec(e))) {
            let e, n;
            if ('@' === r[2]) (e = ua(this.options.mangle ? t(r[0]) : r[0])), (n = 'mailto:' + e);
            else {
                let t;
                do {
                    (t = r[0]), (r[0] = this.rules.inline._backpedal.exec(r[0])[0]);
                } while (t !== r[0]);
                (e = ua(r[0])), (n = 'www.' === r[1] ? 'http://' + r[0] : r[0]);
            }
            return {
                type: 'link',
                raw: r[0],
                text: e,
                href: n,
                tokens: [
                    {
                        type: 'text',
                        raw: e,
                        text: e,
                    },
                ],
            };
        }
    }
    inlineText(e, t) {
        const r = this.rules.inline.text.exec(e);
        if (r) {
            let e;
            return (
                (e = this.lexer.state.inRawBlock
                    ? this.options.sanitize
                        ? this.options.sanitizer
                            ? this.options.sanitizer(r[0])
                            : ua(r[0])
                        : r[0]
                    : ua(this.options.smartypants ? t(r[0]) : r[0])),
                {
                    type: 'text',
                    raw: r[0],
                    text: e,
                }
            );
        }
    }
}
const za = {
    newline: /^(?: *(?:\n|$))+/,
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
    html: '^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))',
    def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
    table: ka,
    lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    text: /^[^\n]+/,
    _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
    _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
};
(za.def = fa(za.def).replace('label', za._label).replace('title', za._title).getRegex()),
    (za.bullet = /(?:[*+-]|\d{1,9}[.)])/),
    (za.listItemStart = fa(/^( *)(bull) */)
        .replace('bull', za.bullet)
        .getRegex()),
    (za.list = fa(za.list)
        .replace(/bull/g, za.bullet)
        .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
        .replace('def', '\\n+(?=' + za.def.source + ')')
        .getRegex()),
    (za._tag =
        'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'),
    (za._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
    (za.html = fa(za.html, 'i')
        .replace('comment', za._comment)
        .replace('tag', za._tag)
        .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
        .getRegex()),
    (za.paragraph = fa(za._paragraph)
        .replace('hr', za.hr)
        .replace('heading', ' {0,3}#{1,6} ')
        .replace('|lheading', '')
        .replace('|table', '')
        .replace('blockquote', ' {0,3}>')
        .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
        .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
        .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
        .replace('tag', za._tag)
        .getRegex()),
    (za.blockquote = fa(za.blockquote).replace('paragraph', za.paragraph).getRegex()),
    (za.normal = xa({}, za)),
    (za.gfm = xa({}, za.normal, {
        table: '^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
    })),
    (za.gfm.table = fa(za.gfm.table)
        .replace('hr', za.hr)
        .replace('heading', ' {0,3}#{1,6} ')
        .replace('blockquote', ' {0,3}>')
        .replace('code', ' {4}[^\\n]')
        .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
        .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
        .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
        .replace('tag', za._tag)
        .getRegex()),
    (za.gfm.paragraph = fa(za._paragraph)
        .replace('hr', za.hr)
        .replace('heading', ' {0,3}#{1,6} ')
        .replace('|lheading', '')
        .replace('table', za.gfm.table)
        .replace('blockquote', ' {0,3}>')
        .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
        .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
        .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
        .replace('tag', za._tag)
        .getRegex()),
    (za.pedantic = xa({}, za.normal, {
        html: fa(
            '^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))'
        )
            .replace('comment', za._comment)
            .replace(
                /tag/g,
                '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
            )
            .getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: ka,
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: fa(za.normal._paragraph)
            .replace('hr', za.hr)
            .replace('heading', ' *#{1,6} *[^\n]')
            .replace('lheading', za.lheading)
            .replace('blockquote', ' {0,3}>')
            .replace('|fences', '')
            .replace('|list', '')
            .replace('|html', '')
            .getRegex(),
    }));
const Da = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: ka,
    tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(ref)\]/,
    nolink: /^!?\[(ref)\](?:\[\])?/,
    reflinkSearch: 'reflink|nolink(?!\\()',
    emStrong: {
        lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
        rDelimAst:
            /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
        rDelimUnd:
            /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: ka,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\spunctuation])/,
};

function Fa(e) {
    return e
        .replace(/---/g, '—')
        .replace(/--/g, '–')
        .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
        .replace(/'/g, '’')
        .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
        .replace(/"/g, '”')
        .replace(/\.{3}/g, '…');
}

function Ma(e) {
    let t,
        r,
        n = '';
    const a = e.length;
    for (t = 0; t < a; t++)
        (r = e.charCodeAt(t)), Math.random() > 0.5 && (r = 'x' + r.toString(16)), (n += '&#' + r + ';');
    return n;
}
(Da._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~'),
    (Da.punctuation = fa(Da.punctuation)
        .replace(/punctuation/g, Da._punctuation)
        .getRegex()),
    (Da.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
    (Da.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g),
    (Da._comment = fa(za._comment).replace('(?:--\x3e|$)', '--\x3e').getRegex()),
    (Da.emStrong.lDelim = fa(Da.emStrong.lDelim).replace(/punct/g, Da._punctuation).getRegex()),
    (Da.emStrong.rDelimAst = fa(Da.emStrong.rDelimAst, 'g').replace(/punct/g, Da._punctuation).getRegex()),
    (Da.emStrong.rDelimUnd = fa(Da.emStrong.rDelimUnd, 'g').replace(/punct/g, Da._punctuation).getRegex()),
    (Da._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
    (Da._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
    (Da._email =
        /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
    (Da.autolink = fa(Da.autolink).replace('scheme', Da._scheme).replace('email', Da._email).getRegex()),
    (Da._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
    (Da.tag = fa(Da.tag).replace('comment', Da._comment).replace('attribute', Da._attribute).getRegex()),
    (Da._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
    (Da._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
    (Da._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
    (Da.link = fa(Da.link)
        .replace('label', Da._label)
        .replace('href', Da._href)
        .replace('title', Da._title)
        .getRegex()),
    (Da.reflink = fa(Da.reflink).replace('label', Da._label).replace('ref', za._label).getRegex()),
    (Da.nolink = fa(Da.nolink).replace('ref', za._label).getRegex()),
    (Da.reflinkSearch = fa(Da.reflinkSearch, 'g')
        .replace('reflink', Da.reflink)
        .replace('nolink', Da.nolink)
        .getRegex()),
    (Da.normal = xa({}, Da)),
    (Da.pedantic = xa({}, Da.normal, {
        strong: {
            start: /^__|\*\*/,
            middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            endAst: /\*\*(?!\*)/g,
            endUnd: /__(?!_)/g,
        },
        em: {
            start: /^_|\*/,
            middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
            endAst: /\*(?!\*)/g,
            endUnd: /_(?!_)/g,
        },
        link: fa(/^!?\[(label)\]\((.*?)\)/)
            .replace('label', Da._label)
            .getRegex(),
        reflink: fa(/^!?\[(label)\]\s*\[([^\]]*)\]/)
            .replace('label', Da._label)
            .getRegex(),
    })),
    (Da.gfm = xa({}, Da.normal, {
        escape: fa(Da.escape).replace('])', '~|])').getRegex(),
        _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
    })),
    (Da.gfm.url = fa(Da.gfm.url, 'i').replace('email', Da.gfm._extended_email).getRegex()),
    (Da.breaks = xa({}, Da.gfm, {
        br: fa(Da.br).replace('{2,}', '*').getRegex(),
        text: fa(Da.gfm.text)
            .replace('\\b_', '\\b_| {2,}\\n')
            .replace(/\{2,\}/g, '*')
            .getRegex(),
    }));
class Oa {
    constructor(e) {
        (this.tokens = []),
            (this.tokens.links = Object.create(null)),
            (this.options = e || na),
            (this.options.tokenizer = this.options.tokenizer || new Ca()),
            (this.tokenizer = this.options.tokenizer),
            (this.tokenizer.options = this.options),
            (this.tokenizer.lexer = this),
            (this.inlineQueue = []),
            (this.state = {
                inLink: !1,
                inRawBlock: !1,
                top: !0,
            });
        const t = {
            block: za.normal,
            inline: Da.normal,
        };
        this.options.pedantic
            ? ((t.block = za.pedantic), (t.inline = Da.pedantic))
            : this.options.gfm &&
              ((t.block = za.gfm), this.options.breaks ? (t.inline = Da.breaks) : (t.inline = Da.gfm)),
            (this.tokenizer.rules = t);
    }
    static get rules() {
        return {
            block: za,
            inline: Da,
        };
    }
    static lex(e, t) {
        return new Oa(t).lex(e);
    }
    static lexInline(e, t) {
        return new Oa(t).inlineTokens(e);
    }
    lex(e) {
        let t;
        for (e = e.replace(/\r\n|\r/g, '\n'), this.blockTokens(e, this.tokens); (t = this.inlineQueue.shift()); )
            this.inlineTokens(t.src, t.tokens);
        return this.tokens;
    }
    blockTokens(e, t = []) {
        let r, n, a, i;
        for (
            e = this.options.pedantic
                ? e.replace(/\t/g, '    ').replace(/^ +$/gm, '')
                : e.replace(/^( *)(\t+)/gm, (e, t, r) => t + '    '.repeat(r.length));
            e;

        )
            if (
                !(
                    this.options.extensions &&
                    this.options.extensions.block &&
                    this.options.extensions.block.some(
                        n =>
                            !!(r = n.call(
                                {
                                    lexer: this,
                                },
                                e,
                                t
                            )) && ((e = e.substring(r.raw.length)), t.push(r), !0)
                    )
                )
            )
                if ((r = this.tokenizer.space(e)))
                    (e = e.substring(r.raw.length)),
                        1 === r.raw.length && t.length > 0 ? (t[t.length - 1].raw += '\n') : t.push(r);
                else if ((r = this.tokenizer.code(e)))
                    (e = e.substring(r.raw.length)),
                        (n = t[t.length - 1]),
                        !n || ('paragraph' !== n.type && 'text' !== n.type)
                            ? t.push(r)
                            : ((n.raw += '\n' + r.raw),
                              (n.text += '\n' + r.text),
                              (this.inlineQueue[this.inlineQueue.length - 1].src = n.text));
                else if ((r = this.tokenizer.fences(e))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.heading(e))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.hr(e))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.blockquote(e))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.list(e))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.html(e))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.def(e)))
                    (e = e.substring(r.raw.length)),
                        (n = t[t.length - 1]),
                        !n || ('paragraph' !== n.type && 'text' !== n.type)
                            ? this.tokens.links[r.tag] ||
                              (this.tokens.links[r.tag] = {
                                  href: r.href,
                                  title: r.title,
                              })
                            : ((n.raw += '\n' + r.raw),
                              (n.text += '\n' + r.raw),
                              (this.inlineQueue[this.inlineQueue.length - 1].src = n.text));
                else if ((r = this.tokenizer.table(e))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.lheading(e))) (e = e.substring(r.raw.length)), t.push(r);
                else {
                    if (((a = e), this.options.extensions && this.options.extensions.startBlock)) {
                        let t = 1 / 0;
                        const r = e.slice(1);
                        let n;
                        this.options.extensions.startBlock.forEach(function (e) {
                            (n = e.call(
                                {
                                    lexer: this,
                                },
                                r
                            )),
                                'number' == typeof n && n >= 0 && (t = Math.min(t, n));
                        }),
                            t < 1 / 0 && t >= 0 && (a = e.substring(0, t + 1));
                    }
                    if (this.state.top && (r = this.tokenizer.paragraph(a)))
                        (n = t[t.length - 1]),
                            i && 'paragraph' === n.type
                                ? ((n.raw += '\n' + r.raw),
                                  (n.text += '\n' + r.text),
                                  this.inlineQueue.pop(),
                                  (this.inlineQueue[this.inlineQueue.length - 1].src = n.text))
                                : t.push(r),
                            (i = a.length !== e.length),
                            (e = e.substring(r.raw.length));
                    else if ((r = this.tokenizer.text(e)))
                        (e = e.substring(r.raw.length)),
                            (n = t[t.length - 1]),
                            n && 'text' === n.type
                                ? ((n.raw += '\n' + r.raw),
                                  (n.text += '\n' + r.text),
                                  this.inlineQueue.pop(),
                                  (this.inlineQueue[this.inlineQueue.length - 1].src = n.text))
                                : t.push(r);
                    else if (e) {
                        const t = 'Infinite loop on byte: ' + e.charCodeAt(0);
                        if (this.options.silent) {
                            console.error(t);
                            break;
                        }
                        throw new Error(t);
                    }
                }
        return (this.state.top = !0), t;
    }
    inline(e, t = []) {
        return (
            this.inlineQueue.push({
                src: e,
                tokens: t,
            }),
            t
        );
    }
    inlineTokens(e, t = []) {
        let r,
            n,
            a,
            i,
            s,
            o,
            l = e;
        if (this.tokens.links) {
            const e = Object.keys(this.tokens.links);
            if (e.length > 0)
                for (; null != (i = this.tokenizer.rules.inline.reflinkSearch.exec(l)); )
                    e.includes(i[0].slice(i[0].lastIndexOf('[') + 1, -1)) &&
                        (l =
                            l.slice(0, i.index) +
                            '[' +
                            Ta('a', i[0].length - 2) +
                            ']' +
                            l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
        }
        for (; null != (i = this.tokenizer.rules.inline.blockSkip.exec(l)); )
            l =
                l.slice(0, i.index) +
                '[' +
                Ta('a', i[0].length - 2) +
                ']' +
                l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        for (; null != (i = this.tokenizer.rules.inline.escapedEmSt.exec(l)); )
            (l =
                l.slice(0, i.index + i[0].length - 2) +
                '++' +
                l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex)),
                this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
        for (; e; )
            if (
                (s || (o = ''),
                (s = !1),
                !(
                    this.options.extensions &&
                    this.options.extensions.inline &&
                    this.options.extensions.inline.some(
                        n =>
                            !!(r = n.call(
                                {
                                    lexer: this,
                                },
                                e,
                                t
                            )) && ((e = e.substring(r.raw.length)), t.push(r), !0)
                    )
                ))
            )
                if ((r = this.tokenizer.escape(e))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.tag(e)))
                    (e = e.substring(r.raw.length)),
                        (n = t[t.length - 1]),
                        n && 'text' === r.type && 'text' === n.type
                            ? ((n.raw += r.raw), (n.text += r.text))
                            : t.push(r);
                else if ((r = this.tokenizer.link(e))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.reflink(e, this.tokens.links)))
                    (e = e.substring(r.raw.length)),
                        (n = t[t.length - 1]),
                        n && 'text' === r.type && 'text' === n.type
                            ? ((n.raw += r.raw), (n.text += r.text))
                            : t.push(r);
                else if ((r = this.tokenizer.emStrong(e, l, o))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.codespan(e))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.br(e))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.del(e))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.autolink(e, Ma))) (e = e.substring(r.raw.length)), t.push(r);
                else if (this.state.inLink || !(r = this.tokenizer.url(e, Ma))) {
                    if (((a = e), this.options.extensions && this.options.extensions.startInline)) {
                        let t = 1 / 0;
                        const r = e.slice(1);
                        let n;
                        this.options.extensions.startInline.forEach(function (e) {
                            (n = e.call(
                                {
                                    lexer: this,
                                },
                                r
                            )),
                                'number' == typeof n && n >= 0 && (t = Math.min(t, n));
                        }),
                            t < 1 / 0 && t >= 0 && (a = e.substring(0, t + 1));
                    }
                    if ((r = this.tokenizer.inlineText(a, Fa)))
                        (e = e.substring(r.raw.length)),
                            '_' !== r.raw.slice(-1) && (o = r.raw.slice(-1)),
                            (s = !0),
                            (n = t[t.length - 1]),
                            n && 'text' === n.type ? ((n.raw += r.raw), (n.text += r.text)) : t.push(r);
                    else if (e) {
                        const t = 'Infinite loop on byte: ' + e.charCodeAt(0);
                        if (this.options.silent) {
                            console.error(t);
                            break;
                        }
                        throw new Error(t);
                    }
                } else (e = e.substring(r.raw.length)), t.push(r);
        return t;
    }
}
class Pa {
    constructor(e) {
        this.options = e || na;
    }
    code(e, t, r) {
        const n = (t || '').match(/\S*/)[0];
        if (this.options.highlight) {
            const t = this.options.highlight(e, n);
            null != t && t !== e && ((r = !0), (e = t));
        }
        return (
            (e = e.replace(/\n$/, '') + '\n'),
            n
                ? '<pre><code class="' +
                  this.options.langPrefix +
                  ua(n) +
                  '">' +
                  (r ? e : ua(e, !0)) +
                  '</code></pre>\n'
                : '<pre><code>' + (r ? e : ua(e, !0)) + '</code></pre>\n'
        );
    }
    blockquote(e) {
        return `<blockquote>\n${e}</blockquote>\n`;
    }
    html(e) {
        return e;
    }
    heading(e, t, r, n) {
        if (this.options.headerIds) {
            return `<h${t} id="${this.options.headerPrefix + n.slug(r)}">${e}</h${t}>\n`;
        }
        return `<h${t}>${e}</h${t}>\n`;
    }
    hr() {
        return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    }
    list(e, t, r) {
        const n = t ? 'ol' : 'ul';
        return '<' + n + (t && 1 !== r ? ' start="' + r + '"' : '') + '>\n' + e + '</' + n + '>\n';
    }
    listitem(e) {
        return `<li>${e}</li>\n`;
    }
    checkbox(e) {
        return (
            '<input ' +
            (e ? 'checked="" ' : '') +
            'disabled="" type="checkbox"' +
            (this.options.xhtml ? ' /' : '') +
            '> '
        );
    }
    paragraph(e) {
        return `<p>${e}</p>\n`;
    }
    table(e, t) {
        return t && (t = `<tbody>${t}</tbody>`), '<table>\n<thead>\n' + e + '</thead>\n' + t + '</table>\n';
    }
    tablerow(e) {
        return `<tr>\n${e}</tr>\n`;
    }
    tablecell(e, t) {
        const r = t.header ? 'th' : 'td';
        return (t.align ? `<${r} align="${t.align}">` : `<${r}>`) + e + `</${r}>\n`;
    }
    strong(e) {
        return `<strong>${e}</strong>`;
    }
    em(e) {
        return `<em>${e}</em>`;
    }
    codespan(e) {
        return `<code>${e}</code>`;
    }
    br() {
        return this.options.xhtml ? '<br/>' : '<br>';
    }
    del(e) {
        return `<del>${e}</del>`;
    }
    link(e, t, r) {
        if (null === (e = _a(this.options.sanitize, this.options.baseUrl, e))) return r;
        let n = '<a href="' + e + '"';
        return t && (n += ' title="' + t + '"'), (n += '>' + r + '</a>'), n;
    }
    image(e, t, r) {
        if (null === (e = _a(this.options.sanitize, this.options.baseUrl, e))) return r;
        let n = `<img src="${e}" alt="${r}"`;
        return t && (n += ` title="${t}"`), (n += this.options.xhtml ? '/>' : '>'), n;
    }
    text(e) {
        return e;
    }
}
class ja {
    strong(e) {
        return e;
    }
    em(e) {
        return e;
    }
    codespan(e) {
        return e;
    }
    del(e) {
        return e;
    }
    html(e) {
        return e;
    }
    text(e) {
        return e;
    }
    link(e, t, r) {
        return '' + r;
    }
    image(e, t, r) {
        return '' + r;
    }
    br() {
        return '';
    }
}
class Ra {
    constructor() {
        this.seen = {};
    }
    serialize(e) {
        return e
            .toLowerCase()
            .trim()
            .replace(/<[!\/a-z].*?>/gi, '')
            .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
            .replace(/\s/g, '-');
    }
    getNextSafeSlug(e, t) {
        let r = e,
            n = 0;
        if (this.seen.hasOwnProperty(r)) {
            n = this.seen[e];
            do {
                n++, (r = e + '-' + n);
            } while (this.seen.hasOwnProperty(r));
        }
        return t || ((this.seen[e] = n), (this.seen[r] = 0)), r;
    }
    slug(e, t = {}) {
        const r = this.serialize(e);
        return this.getNextSafeSlug(r, t.dryrun);
    }
}
class Ba {
    constructor(e) {
        (this.options = e || na),
            (this.options.renderer = this.options.renderer || new Pa()),
            (this.renderer = this.options.renderer),
            (this.renderer.options = this.options),
            (this.textRenderer = new ja()),
            (this.slugger = new Ra());
    }
    static parse(e, t) {
        return new Ba(t).parse(e);
    }
    static parseInline(e, t) {
        return new Ba(t).parseInline(e);
    }
    parse(e, t = !0) {
        let r,
            n,
            a,
            i,
            s,
            o,
            l,
            c,
            u,
            d,
            p,
            h,
            f,
            g,
            m,
            _,
            b,
            y,
            v,
            w = '';
        const k = e.length;
        for (r = 0; r < k; r++)
            if (
                ((d = e[r]),
                this.options.extensions &&
                    this.options.extensions.renderers &&
                    this.options.extensions.renderers[d.type] &&
                    ((v = this.options.extensions.renderers[d.type].call(
                        {
                            parser: this,
                        },
                        d
                    )),
                    !1 !== v ||
                        ![
                            'space',
                            'hr',
                            'heading',
                            'code',
                            'table',
                            'blockquote',
                            'list',
                            'html',
                            'paragraph',
                            'text',
                        ].includes(d.type)))
            )
                w += v || '';
            else
                switch (d.type) {
                    case 'space':
                        continue;
                    case 'hr':
                        w += this.renderer.hr();
                        continue;
                    case 'heading':
                        w += this.renderer.heading(
                            this.parseInline(d.tokens),
                            d.depth,
                            pa(this.parseInline(d.tokens, this.textRenderer)),
                            this.slugger
                        );
                        continue;
                    case 'code':
                        w += this.renderer.code(d.text, d.lang, d.escaped);
                        continue;
                    case 'table':
                        for (c = '', l = '', i = d.header.length, n = 0; n < i; n++)
                            l += this.renderer.tablecell(this.parseInline(d.header[n].tokens), {
                                header: !0,
                                align: d.align[n],
                            });
                        for (c += this.renderer.tablerow(l), u = '', i = d.rows.length, n = 0; n < i; n++) {
                            for (o = d.rows[n], l = '', s = o.length, a = 0; a < s; a++)
                                l += this.renderer.tablecell(this.parseInline(o[a].tokens), {
                                    header: !1,
                                    align: d.align[a],
                                });
                            u += this.renderer.tablerow(l);
                        }
                        w += this.renderer.table(c, u);
                        continue;
                    case 'blockquote':
                        (u = this.parse(d.tokens)), (w += this.renderer.blockquote(u));
                        continue;
                    case 'list':
                        for (p = d.ordered, h = d.start, f = d.loose, i = d.items.length, u = '', n = 0; n < i; n++)
                            (m = d.items[n]),
                                (_ = m.checked),
                                (b = m.task),
                                (g = ''),
                                m.task &&
                                    ((y = this.renderer.checkbox(_)),
                                    f
                                        ? m.tokens.length > 0 && 'paragraph' === m.tokens[0].type
                                            ? ((m.tokens[0].text = y + ' ' + m.tokens[0].text),
                                              m.tokens[0].tokens &&
                                                  m.tokens[0].tokens.length > 0 &&
                                                  'text' === m.tokens[0].tokens[0].type &&
                                                  (m.tokens[0].tokens[0].text = y + ' ' + m.tokens[0].tokens[0].text))
                                            : m.tokens.unshift({
                                                  type: 'text',
                                                  text: y,
                                              })
                                        : (g += y)),
                                (g += this.parse(m.tokens, f)),
                                (u += this.renderer.listitem(g, b, _));
                        w += this.renderer.list(u, p, h);
                        continue;
                    case 'html':
                        w += this.renderer.html(d.text);
                        continue;
                    case 'paragraph':
                        w += this.renderer.paragraph(this.parseInline(d.tokens));
                        continue;
                    case 'text':
                        for (
                            u = d.tokens ? this.parseInline(d.tokens) : d.text;
                            r + 1 < k && 'text' === e[r + 1].type;

                        )
                            (d = e[++r]), (u += '\n' + (d.tokens ? this.parseInline(d.tokens) : d.text));
                        w += t ? this.renderer.paragraph(u) : u;
                        continue;
                    default: {
                        const e = 'Token with "' + d.type + '" type was not found.';
                        if (this.options.silent) return void console.error(e);
                        throw new Error(e);
                    }
                }
        return w;
    }
    parseInline(e, t) {
        t = t || this.renderer;
        let r,
            n,
            a,
            i = '';
        const s = e.length;
        for (r = 0; r < s; r++)
            if (
                ((n = e[r]),
                this.options.extensions &&
                    this.options.extensions.renderers &&
                    this.options.extensions.renderers[n.type] &&
                    ((a = this.options.extensions.renderers[n.type].call(
                        {
                            parser: this,
                        },
                        n
                    )),
                    !1 !== a ||
                        !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(
                            n.type
                        )))
            )
                i += a || '';
            else
                switch (n.type) {
                    case 'escape':
                    case 'text':
                        i += t.text(n.text);
                        break;
                    case 'html':
                        i += t.html(n.text);
                        break;
                    case 'link':
                        i += t.link(n.href, n.title, this.parseInline(n.tokens, t));
                        break;
                    case 'image':
                        i += t.image(n.href, n.title, n.text);
                        break;
                    case 'strong':
                        i += t.strong(this.parseInline(n.tokens, t));
                        break;
                    case 'em':
                        i += t.em(this.parseInline(n.tokens, t));
                        break;
                    case 'codespan':
                        i += t.codespan(n.text);
                        break;
                    case 'br':
                        i += t.br();
                        break;
                    case 'del':
                        i += t.del(this.parseInline(n.tokens, t));
                        break;
                    default: {
                        const e = 'Token with "' + n.type + '" type was not found.';
                        if (this.options.silent) return void console.error(e);
                        throw new Error(e);
                    }
                }
        return i;
    }
}

function $a(e, t, r) {
    if (null == e) throw new Error('marked(): input parameter is undefined or null');
    if ('string' != typeof e)
        throw new Error(
            'marked(): input parameter is of type ' + Object.prototype.toString.call(e) + ', string expected'
        );
    if (('function' == typeof t && ((r = t), (t = null)), Ea((t = xa({}, $a.defaults, t || {}))), r)) {
        const n = t.highlight;
        let i;
        try {
            i = Oa.lex(e, t);
        } catch (a) {
            return r(a);
        }
        const s = function (e) {
            let s;
            if (!e)
                try {
                    t.walkTokens && $a.walkTokens(i, t.walkTokens), (s = Ba.parse(i, t));
                } catch (a) {
                    e = a;
                }
            return (t.highlight = n), e ? r(e) : r(null, s);
        };
        if (!n || n.length < 3) return s();
        if ((delete t.highlight, !i.length)) return s();
        let o = 0;
        return (
            $a.walkTokens(i, function (e) {
                'code' === e.type &&
                    (o++,
                    setTimeout(() => {
                        n(e.text, e.lang, function (t, r) {
                            if (t) return s(t);
                            null != r && r !== e.text && ((e.text = r), (e.escaped = !0)), o--, 0 === o && s();
                        });
                    }, 0));
            }),
            void (0 === o && s())
        );
    }

    function n(e) {
        if (((e.message += '\nPlease report this to https://github.com/markedjs/marked.'), t.silent))
            return '<p>An error occurred:</p><pre>' + ua(e.message + '', !0) + '</pre>';
        throw e;
    }
    try {
        const r = Oa.lex(e, t);
        if (t.walkTokens) {
            if (t.async)
                return Promise.all($a.walkTokens(r, t.walkTokens))
                    .then(() => Ba.parse(r, t))
                    .catch(n);
            $a.walkTokens(r, t.walkTokens);
        }
        return Ba.parse(r, t);
    } catch (a) {
        n(a);
    }
}
($a.options = $a.setOptions =
    function (e) {
        var t;
        return xa($a.defaults, e), (t = $a.defaults), (na = t), $a;
    }),
    ($a.getDefaults = ra),
    ($a.defaults = na),
    ($a.use = function (...e) {
        const t = $a.defaults.extensions || {
            renderers: {},
            childTokens: {},
        };
        e.forEach(e => {
            const r = xa({}, e);
            if (
                ((r.async = $a.defaults.async || r.async),
                e.extensions &&
                    (e.extensions.forEach(e => {
                        if (!e.name) throw new Error('extension name required');
                        if (e.renderer) {
                            const r = t.renderers[e.name];
                            t.renderers[e.name] = r
                                ? function (...t) {
                                      let n = e.renderer.apply(this, t);
                                      return !1 === n && (n = r.apply(this, t)), n;
                                  }
                                : e.renderer;
                        }
                        if (e.tokenizer) {
                            if (!e.level || ('block' !== e.level && 'inline' !== e.level))
                                throw new Error("extension level must be 'block' or 'inline'");
                            t[e.level] ? t[e.level].unshift(e.tokenizer) : (t[e.level] = [e.tokenizer]),
                                e.start &&
                                    ('block' === e.level
                                        ? t.startBlock
                                            ? t.startBlock.push(e.start)
                                            : (t.startBlock = [e.start])
                                        : 'inline' === e.level &&
                                          (t.startInline ? t.startInline.push(e.start) : (t.startInline = [e.start])));
                        }
                        e.childTokens && (t.childTokens[e.name] = e.childTokens);
                    }),
                    (r.extensions = t)),
                e.renderer)
            ) {
                const t = $a.defaults.renderer || new Pa();
                for (const r in e.renderer) {
                    const n = t[r];
                    t[r] = (...a) => {
                        let i = e.renderer[r].apply(t, a);
                        return !1 === i && (i = n.apply(t, a)), i;
                    };
                }
                r.renderer = t;
            }
            if (e.tokenizer) {
                const t = $a.defaults.tokenizer || new Ca();
                for (const r in e.tokenizer) {
                    const n = t[r];
                    t[r] = (...a) => {
                        let i = e.tokenizer[r].apply(t, a);
                        return !1 === i && (i = n.apply(t, a)), i;
                    };
                }
                r.tokenizer = t;
            }
            if (e.walkTokens) {
                const t = $a.defaults.walkTokens;
                r.walkTokens = function (r) {
                    let n = [];
                    return n.push(e.walkTokens.call(this, r)), t && (n = n.concat(t.call(this, r))), n;
                };
            }
            $a.setOptions(r);
        });
    }),
    ($a.walkTokens = function (e, t) {
        let r = [];
        for (const n of e)
            switch (((r = r.concat(t.call($a, n))), n.type)) {
                case 'table':
                    for (const e of n.header) r = r.concat($a.walkTokens(e.tokens, t));
                    for (const e of n.rows) for (const n of e) r = r.concat($a.walkTokens(n.tokens, t));
                    break;
                case 'list':
                    r = r.concat($a.walkTokens(n.items, t));
                    break;
                default:
                    $a.defaults.extensions &&
                    $a.defaults.extensions.childTokens &&
                    $a.defaults.extensions.childTokens[n.type]
                        ? $a.defaults.extensions.childTokens[n.type].forEach(function (e) {
                              r = r.concat($a.walkTokens(n[e], t));
                          })
                        : n.tokens && (r = r.concat($a.walkTokens(n.tokens, t)));
            }
        return r;
    }),
    ($a.parseInline = function (e, t) {
        if (null == e) throw new Error('marked.parseInline(): input parameter is undefined or null');
        if ('string' != typeof e)
            throw new Error(
                'marked.parseInline(): input parameter is of type ' +
                    Object.prototype.toString.call(e) +
                    ', string expected'
            );
        Ea((t = xa({}, $a.defaults, t || {})));
        try {
            const r = Oa.lexInline(e, t);
            return t.walkTokens && $a.walkTokens(r, t.walkTokens), Ba.parseInline(r, t);
        } catch (r) {
            if (((r.message += '\nPlease report this to https://github.com/markedjs/marked.'), t.silent))
                return '<p>An error occurred:</p><pre>' + ua(r.message + '', !0) + '</pre>';
            throw r;
        }
    }),
    ($a.Parser = Ba),
    ($a.parser = Ba.parse),
    ($a.Renderer = Pa),
    ($a.TextRenderer = ja),
    ($a.Lexer = Oa),
    ($a.lexer = Oa.lex),
    ($a.Tokenizer = Ca),
    ($a.Slugger = Ra),
    ($a.parse = $a),
    $a.options,
    $a.setOptions,
    $a.use,
    $a.walkTokens,
    $a.parseInline,
    Ba.parse,
    Oa.lex;
const qa = /(?:[^:]+:\/\/)?([^/\s]+)/;

function Ua(e) {
    const t = e.match(qa);
    return t && t[1];
}
const Na = (e, t) => O(t)[e],
    La = /^(?:https?:)?\/\/[^/]+\/([^?#]+)/,
    Va = e => {
        const t = e.match(La);
        return '/' + ((t && t[1]) || '');
    },
    Ha = /^((http(s)?:)?\/\/)/,
    Ga = e => e.replace(Ha, ''),
    Za = /^((http(s)?:)?\/\/)/,
    Wa = e => {
        const t = e.match(Za);
        return t ? t[2] : null;
    };

function Ya() {
    return (
        (Ya = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                  }
                  return e;
              }),
        Ya.apply(null, arguments)
    );
}
const Qa = (e, t) => {
        if (0 === Object.keys(t).length) return e;
        const r = P(e),
            n = Va(e),
            a = j(e) ? O(e) : {},
            i = R(Ya({}, a, t));
        return e.indexOf('#') > -1 ? '' + r + n + '?' + i + '#' + e.split('#')[1] : '' + r + n + '?' + i;
    },
    Ja = (e, t) => {
        if (-1 === e.indexOf('?')) return e;
        const r = O(e);
        if (De(r)) return e;
        if (Object.keys(r).every(e => !t.includes(e))) return e;
        t.forEach(e => delete r[e]);
        const [n] = e.split('?'),
            a = Qa(n, r);
        return e.indexOf('#') > -1 ? a + '#' + e.split('#')[1] : a;
    },
    Xa = e => 'https://' + Ga(e);

function Ka() {
    return (
        (Ka = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                  }
                  return e;
              }),
        Ka.apply(null, arguments)
    );
}

function ei(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}

function ti(e, t, r) {
    return (
        t &&
            (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(e, ri(n.key), n);
                }
            })(e.prototype, t),
        Object.defineProperty(e, 'prototype', {
            writable: !1,
        }),
        e
    );
}

function ri(e) {
    var t = (function (e, t) {
        if ('object' != typeof e || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(e, t);
            if ('object' != typeof n) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return String(e);
    })(e, 'string');
    return 'symbol' == typeof t ? t : t + '';
}

function ni(e, t, r) {
    return (
        (t = ii(t)),
        (function (e, t) {
            if (t && ('object' == typeof t || 'function' == typeof t)) return t;
            if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined');
            return (function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            })(e);
        })(e, ai() ? Reflect.construct(t, r || [], ii(e).constructor) : t.apply(e, r))
    );
}

function ai() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (ai = function () {
        return !!e;
    })();
}

function ii(e) {
    return (ii = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}

function si(e, t) {
    if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0,
        },
    })),
        Object.defineProperty(e, 'prototype', {
            writable: !1,
        }),
        t && oi(e, t);
}

function oi(e, t) {
    return (oi = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
              return (e.__proto__ = t), e;
          })(e, t);
}
const li = new ta(),
    { map: ci } = Array.prototype,
    ui = ['A', 'UL', 'OL', 'LI', 'STRONG', 'EM', 'BR', 'DEL', 'CODE', 'PRE'];
let di = (function () {
        function e() {
            return ei(this, e), ni(this, e, arguments);
        }
        return (
            si(e, Pa),
            ti(e, [
                {
                    key: 'link',
                    value: function (e, t, r) {
                        const n = li.match(r);
                        return n && n.length > 1
                            ? r
                            : '<a href="' + e + '" target="_blank" rel="nofollow noopener">' + r + '</a>';
                    },
                },
            ])
        );
    })(),
    pi = (function () {
        function e() {
            return ei(this, e), ni(this, e, arguments);
        }
        return (
            si(e, di),
            ti(e, [
                {
                    key: 'list',
                    value: function (e, t, r) {
                        let n = r;
                        return e.replace(hi, () => (t ? n++ + '. ' : '- '));
                    },
                },
                {
                    key: 'listitem',
                    value: function (e) {
                        return '' + hi + e;
                    },
                },
            ])
        );
    })();
const hi = '%list-item%',
    fi = e => e.replace(/\n+$/, '');

function gi(e, t, r) {
    if (
        (function (e, t) {
            let r = e.parentNode;
            for (; r; ) {
                if (r.nodeName === t) return !0;
                r = r.parentNode;
            }
            return !1;
        })(e, 'A')
    )
        return e.textContent;
    if (null === e.textContent) return null;
    const n = li.match(e.textContent);
    if (!n || 0 === n.length) return e.textContent;
    const [a] = Array.from(n).reduce(
        (t, a, i) => {
            let [s, o] = t;
            return (
                s.push(
                    e.textContent.slice(o, a.index),
                    l.createElement(
                        null != r ? r : 'a',
                        {
                            href: a.url,
                            target: '_blank',
                            rel: 'nofollow noopener',
                        },
                        a.text
                    )
                ),
                i === n.length - 1 && s.push(e.textContent.slice(a.lastIndex)),
                [s, a.lastIndex]
            );
        },
        [[], 0]
    );
    return l.createElement(
        l.Fragment,
        {
            key: t,
        },
        ...a
    );
}

function mi(e) {
    $a.setOptions({
        renderer: new pi(),
    });
    const t = $a.parse(e),
        r = new DOMParser(),
        { body: n } = r.parseFromString(t, 'text/html');
    return n ? fi(n.textContent || '') : '';
}
const _i = e => {
        var t, r;
        let { template: n, root: a, preserveLists: i, limit: s, linkComponent: o = null } = e;
        const c = null != (t = null == a ? void 0 : a.props) ? t : {},
            u = null != (r = null == a ? void 0 : a.component) ? r : l.Fragment,
            d = l.useMemo(() => {
                try {
                    const e = new DOMParser();
                    $a.setOptions({
                        renderer: i ? new pi() : new di(),
                    });
                    const t = fi($a.parse(n)),
                        { body: r } = e.parseFromString(t, 'text/html');
                    return r
                        ? (function (e, t, r) {
                              let n = 0,
                                  a = !1;
                              const i = e =>
                                  ci.call(e, (e, s) => {
                                      if ('#text' === e.nodeName)
                                          return r
                                              ? a
                                                  ? null
                                                  : e.textContent && e.textContent.length + n < r
                                                    ? ((n += e.textContent.length), gi(e, s, t))
                                                    : ((a = !0),
                                                      (e.textContent = Ze(r - n, e.textContent)),
                                                      gi(e, s, t))
                                              : gi(e, s, t);
                                      if (!ze(e.nodeName, ui)) return e.hasChildNodes() ? i(e.childNodes) : null;
                                      const o = Ka(
                                          {
                                              key: s,
                                          },
                                          e.hasChildNodes() && {
                                              children: i(e.childNodes),
                                          }
                                      );
                                      if ('OL' === e.nodeName) {
                                          const t = e.getAttribute('start');
                                          t && (o.start = parseInt(t, 10));
                                      }
                                      if ('A' === e.nodeName) {
                                          let r = e.getAttribute('href');
                                          if (!r || B(r)) return i(e.childNodes);
                                          if ((/\S+@\S+\.\S+/.test(r) || Wa(r) || (r = 'https://' + r), t))
                                              return l.createElement(
                                                  t,
                                                  Ka(
                                                      {
                                                          href: r,
                                                      },
                                                      o
                                                  )
                                              );
                                          const n = Ka({}, o, {
                                              href: r,
                                              target: '_blank',
                                              rel: 'nofollow noopener',
                                          });
                                          return l.createElement('a', n);
                                      }
                                      return l.createElement(e.nodeName.toLowerCase(), o);
                                  });
                              return i(e);
                          })(r.childNodes, o, s)
                        : '';
                } catch (e) {
                    return console.error("ReactMD: error while parsing template: '" + n + "'", e), n;
                }
            }, [n, i, s, o]);
        return l.createElement(u, c, d);
    },
    bi = e => {
        const t = P(e);
        return !!t && /chatbot\.com$/.test(t);
    },
    yi = e => {
        const t = $(q(j(e)));
        if (t.p)
            try {
                return me(decodeURIComponent, JSON.parse(atob(t.p)));
            } catch (r) {
                return null;
            }
        return null;
    },
    vi = /^\s+$/,
    wi =
        /^(?:\s+|[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/;

function ki(e) {
    let t = null,
        r = 0;
    for (; (t = wi.exec(e)); ) {
        const n = t[0];
        if (((e = e.slice(n.length)), vi.test(n) || r++, r > 3)) return !1;
    }
    return !e;
}
const xi = [
        'id',
        'customId',
        'authorId',
        'timestamp',
        'threadId',
        'properties',
        'seen',
        'serverId',
        'type',
        'text',
        'urlDetails',
    ],
    Si = e => {
        let { id: t, authorId: r, timestamp: n, serverId: a = t, threadId: i = null, seen: s = !1 } = e;
        return {
            id: t,
            serverId: a,
            thread: i,
            author: r,
            timestamp: n,
            seen: s,
        };
    },
    Ii = e => u(e, xi),
    Ei = e =>
        i('bb9e5b2f1ab480e4a715977b7b1b4279', e.properties)
            ? {
                  reaction: Ce('bb9e5b2f1ab480e4a715977b7b1b4279.message_reaction', e.properties),
              }
            : null,
    Ti = e =>
        i('aa8151b317737a3e79d8e3384e6082de', e.properties)
            ? {
                  useFixedAnswers: Ce('aa8151b317737a3e79d8e3384e6082de.use_fixed_answers', e.properties),
              }
            : null,
    Ai = e => {
        if (e.urlDetails) {
            const { urlDetails: t } = e;
            return c({}, Si(e), {
                type: 'url_preview',
                properties: {
                    serverType: e.type,
                    title: t.title,
                    description: t.description,
                    image: {
                        url: t.imageUrl,
                        link: t.url,
                    },
                },
            });
        }
        if (ki(e.text)) {
            return c({}, Si(e), {
                type: 'emoji',
                properties: c(
                    {
                        serverType: e.type,
                        text: e.text,
                    },
                    Ii(e)
                ),
            });
        }
        return c({}, Si(e), {
            type: 'message',
            properties: c(
                {
                    serverType: e.type,
                    text: e.text,
                    customId: e.customId,
                },
                Ii(e)
            ),
        });
    },
    Ci = e => {
        switch (e.type) {
            case 'url':
                if (B(e.value)) return null;
                if (bi(e.value)) {
                    const t = yi(e.value);
                    if (t && t.url)
                        return c({}, e, {
                            proxiedValue: t.url,
                        });
                }
                return e;
            case 'webview':
                if (B(e.value)) return null;
                if (bi(e.value)) {
                    const t = yi(e.value);
                    if (t && t.url)
                        return c({}, e, {
                            proxiedValue: t.url,
                        });
                }
                return e;
            default:
                return e;
        }
    },
    zi = e => {
        const t = {};
        return (
            'string' == typeof e.title && (t.title = e.title),
            'string' == typeof e.subtitle && (t.subtitle = e.subtitle),
            e.image &&
                (t.image = c({}, e.image, {
                    link: e.image.url,
                })),
            e.buttons && (t.buttons = e.buttons.map(Ci).filter(Boolean)),
            t
        );
    },
    Di = e => {
        switch (e.template) {
            case 'quick_replies': {
                const t = e.elements[0];
                return c({}, Si(e), {
                    type: 'message',
                    properties: c(
                        {
                            serverType: e.type,
                            text: t.title,
                            quickReplies: t.buttons.map(e =>
                                c(
                                    {
                                        type: e.type,
                                        text: e.text,
                                        value: e.value,
                                        postbackId: e.postbackId,
                                    },
                                    e.buttonId && {
                                        buttonId: e.buttonId,
                                    }
                                )
                            ),
                        },
                        Ei(e),
                        Ti(e)
                    ),
                });
            }
            case 'sticker': {
                const t = e.elements[0].image;
                return c({}, Si(e), {
                    type: 'sticker',
                    properties: c(
                        {
                            serverType: e.type,
                            url: t.url,
                            name: t.name,
                        },
                        Ei(e),
                        Ti(e)
                    ),
                });
            }
            default: {
                if (e.elements.length > 1) {
                    return c({}, Si(e), {
                        type: 'carousel',
                        properties: {
                            serverType: e.type,
                            cards: e.elements.map(zi),
                        },
                    });
                }
                const t = e.elements[0];
                if (1 === Object.keys(t).length && t.image) {
                    const { image: r } = t;
                    return c({}, Si(e), {
                        type: 'image_preview',
                        properties: c(
                            {
                                name: r.name,
                                serverType: e.type,
                                url: r.url,
                            },
                            r.alternativeText && {
                                alternativeText: r.alternativeText,
                            },
                            Ei(e),
                            Ti(e)
                        ),
                    });
                }
                return c({}, Si(e), {
                    type: 'rich_message',
                    properties: c(
                        {
                            serverType: e.type,
                            card: zi(t),
                        },
                        Ei(e),
                        Ti(e)
                    ),
                });
            }
        }
    },
    Fi = e => {
        const t = c({}, Si(e), {
            type: 'system_message',
            properties: {
                serverType: e.type,
                systemMessageType: e.systemMessageType,
                defaultText: e.text,
            },
        });
        return e.textVars && (t.properties.textVariables = e.textVars), t;
    },
    Mi = e => e.replace(/index[0-9]*_/gi, ''),
    Oi = (e, t) => {
        const r = ve(e => 'groupSelect' === e.meta, e);
        return Object.keys(t).reduce(
            (n, i) => {
                const s = t[i];
                if ('rateComment' === i) return (n.rateComment = s), n;
                if ('rating' === i) return (n.rate = null === s ? s : Mi(s)), n;
                const o = ve(e => e.name === i, e),
                    { serverName: l } = o;
                return (
                    r &&
                        l &&
                        l === r.serverName &&
                        ((n.choosenGroupIndex = t[r.name].match(/index([0-9]*)_/)[1]),
                        (n.choosenGroup = parseInt(Mi(s), 10))),
                    o.options ? (n.fields[l] = a(s) ? s.map(Mi) : Mi(s)) : (n.fields[l] = s),
                    n
                );
            },
            {
                fields: {},
            }
        );
    },
    Pi = 'liveChatChatId',
    ji = 'openAIChatId',
    Ri = 'email_prompt',
    Bi = 'message_draft',
    $i = 100,
    qi = 20,
    Ui = 'Invalid `chat.id`',
    Ni = 'Move chat to mobile',
    Li = {
        labs: 'https://mobile-chat.labs.livechat.com/chat-widget-moment/',
        staging: 'https://mobile-chat.staging.livechat.com/chat-widget-moment/',
        production: 'https://mobile-chat.livechat.com/chat-widget-moment/',
    },
    Vi = 1500,
    Hi = 100,
    Gi = 'before_send_message',
    Zi = 800,
    Wi = {
        question: {
            type: 'text',
        },
        checkbox_for_email: {
            type: 'checkbox',
            meta: 'confirm_subscription',
        },
        header: {
            type: 'information',
        },
        skill: {
            type: 'group_select',
        },
    },
    Yi = e =>
        e.map((e, t) => {
            const r = {};
            return (
                i('label', e) && (r.label = e.label),
                i('checked', e) && (r.checked = e.checked),
                (r.value = String(t)),
                i('skill_id', e) && (r.value = String(e.skill_id)),
                i('embedded_chat_hide_when_offline', e) &&
                    (r.ticketFormDisabled = Boolean(e.embedded_chat_hide_when_offline)),
                i('queue_template', e) && (r.queueTemplate = e.queue_template),
                r
            );
        }),
    Qi = e => {
        let t = !1;
        const r = {
            fields: e.fields
                .sort((e, t) => e.order - t.order)
                .map((e, r) => {
                    const n = {};
                    if ('facebookConnect' === e.type) return (t = !0), !1;
                    e.id ? (n.name = e.id) : -1 === ['header', 'information'].indexOf(e.type) && (n.name = String(r)),
                        i('value', e) && (n.value = e.value),
                        i('label', e) && (n.label = e.label),
                        i('required', e) && (n.required = e.required),
                        'rating' === e.type && (n.commentLabel = e.options[0]),
                        e.skills && e.skills.length > 0
                            ? (n.options = Yi(e.skills))
                            : e.options &&
                              e.options.length > 0 &&
                              (e.options_data
                                  ? (n.options = Yi(e.options_data))
                                  : ge(e.options[0])
                                    ? (n.options = e.options.map((e, t) => {
                                          let { label: r } = e;
                                          return {
                                              label: r,
                                              value: String(t),
                                          };
                                      }))
                                    : (n.options = e.options.map((e, t) => ({
                                          label: e,
                                          value: String(t),
                                      })))),
                        e.serverType && (n.serverType = e.serverType);
                    const { type: a, meta: s } = (e => ({
                        type: (Wi[e] && Wi[e].type) || e,
                        meta: (Wi[e] && Wi[e].meta) || !1,
                    }))(e.type);
                    return (n.type = a), s && (n.meta = s), n;
                })
                .filter(Boolean),
        };
        return e.id && (r.id = e.id), t && (r.facebookConnect = !0), r;
    },
    Ji = e =>
        c({}, e, {
            fields: e.fields.map(e => {
                switch (e.type) {
                    case 'name':
                    case 'subject':
                        return c({}, e, {
                            maxLength: 1024,
                        });
                    case 'email':
                    case 'textarea':
                        return c({}, e, {
                            required: !0,
                        });
                    default:
                        return e;
                }
            }),
        }),
    Xi = e => {
        let { hdLicenseID: t, group: r, pageUrl: n, form: a, answers: i, additionalInfo: s } = e;
        const o = ((e, t) => {
                const r = Oe(e => ('message' === e ? 'textarea' : e), e);
                return t.fields
                    .map(e => {
                        if ('information' === e.type) return null;
                        const t = {
                            type: e.type,
                            text: 'undefined' != typeof document ? mi(e.label) : e.label,
                            serverType: e.serverType,
                        };
                        return (
                            (e.name in r || e.type in r) &&
                                ('options' in e
                                    ? (t.value = be(r[e.name])
                                          .map(t => ve(e => e.value === t, e.options).label)
                                          .join(', '))
                                    : e.name in r
                                      ? (t.value = r[e.name])
                                      : (t.value = r[e.type]),
                                (t.value = Xe(t.value)),
                                (t.text = t.text + ' ' + t.value)),
                            t
                        );
                    })
                    .filter(Boolean);
            })(i, a),
            l = ve(e => 'email' === e.type || 'email' === e.serverType, o),
            u = ve(e => 'name' === e.type || 'name' === e.serverType, o);
        if (!l) throw new Error('Missing email');
        if (!ve(e => 'textarea' === e.type, o)) throw new Error('Missing message');
        const d = ve(e => 'subject' === e.type || 'subject' === e.serverType, o),
            p = o
                .filter(e => {
                    let { type: t, serverType: r } = e;
                    return -1 === ['name', 'email', 'subject'].indexOf(r || t);
                })
                .map(e => {
                    let { text: t } = e;
                    return t;
                })
                .join('\n');
        return c(
            {},
            d &&
                d.value && {
                    subject: d.value,
                },
            {
                message: {
                    text: p,
                },
                requester: c(
                    {
                        email: l.value,
                    },
                    u &&
                        u.value && {
                            name: u.value,
                        }
                ),
                integration: c(
                    {
                        type: 'livechat',
                        licenseID: t,
                        teamID: String(r),
                        referenceReason: s.lastDisplayedReason,
                        referenceReasonAt: s.lastDisplayedAt,
                    },
                    n && {
                        referenceURL: n,
                    }
                ),
            }
        );
    },
    Ki = (e, t) => {
        const { requester: r, message: n, subject: a } = t,
            { text: i } = n,
            { name: s, email: o } = r;
        return c(
            {
                id: e,
                text: i,
            },
            a && {
                subject: a,
            },
            {
                visitor: {
                    name: s || null,
                    email: o || null,
                },
            }
        );
    },
    es = ['id'],
    ts = ['properties'],
    rs = ['answers'],
    ns = ['systemMessageType'],
    as = ['formId'];

function is(e) {
    var t = (function (e, t) {
        if ('object' != typeof e || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(e, t);
            if ('object' != typeof n) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return String(e);
    })(e, 'string');
    return 'symbol' == typeof t ? t : t + '';
}
const ss = {
        group_chooser: 'select',
        header: 'information',
        name: 'text',
        question: 'text',
        subject: 'text',
        checkbox_for_email: 'checkbox',
    },
    os = (e, t) => e.getSessionUser().serverId === t.authorId,
    ls = (e, t) => (os(e, t) ? e.getSessionUser().id : t.authorId),
    cs = (e, t) => {
        if ('file' === t.type) return t.id;
        if (os(e, t)) return 'customId' in t && e.hasEvent(Pi, t.customId) ? t.customId : t.id;
        const r = e.getEventByServerId(Pi, t.id);
        return r ? r.id : t.id;
    },
    us = e => (null != e && e.groupIds ? e.groupIds[0] : null),
    ds = e => ('offline' === e ? 'offline' : 'online'),
    ps = (e, t) => {
        const r = e.getSessionUser().serverId,
            n = Me(t.filter(e => e.present && e.id !== r));
        return n ? n.id : null;
    },
    hs = (e, t) => {
        let {
            chat: r,
            chat: { thread: n, users: a },
        } = t;
        return {
            id: r.id,
            active: n.active,
            agent: ps(e, a),
            events: n.events
                .map(t =>
                    xs(
                        e,
                        c({}, t, {
                            seen: !1,
                        })
                    )
                )
                .filter(Boolean),
            group: us(r.access),
            thread: n.id,
            previousThread: n.previousThreadId,
            properties: zs(n),
        };
    },
    fs = e => {
        let { id: t, active: r, access: n, lastThreadId: a } = e;
        return {
            id: t,
            active: r,
            lastThreadId: a,
            group: us(n),
        };
    },
    gs = (e, t) =>
        c({}, t, {
            type: e,
            fields: t.fields.reduce((e, t) => {
                let { id: r } = t,
                    n = u(t, es);
                const a = c({}, n, {
                    type: ss[n.type] || n.type,
                    serverName: r,
                    serverType: n.type,
                });
                if ('information' === a.type) a.value = a.label.replace(/<br(\s)?(\/)?>/gi, '\n');
                else if ('checkbox_for_email' === n.type)
                    (a.meta = 'confirm_subscription'),
                        (a.label = ''),
                        (a.options = [
                            {
                                label: n.label,
                                checked: n.checked,
                                value: 'index0_0',
                                originalValue: '0',
                            },
                        ]),
                        n.checked && (a.defaultValue = [a.options[0].value]);
                else if (n.options) {
                    const e = 'group_chooser' === n.type;
                    e && (a.meta = 'groupSelect'),
                        (a.options = a.options.map((t, r) => {
                            const n = e ? t.groupId : t.id;
                            return c({}, qe(['id', 'checked'], t), {
                                value: 'index' + r + '_' + n,
                                originalValue: String(n),
                            });
                        }));
                }
                return (
                    (a.name = ze(n.type, ['name', 'email', 'rating']) ? n.type : Te() + '_' + r),
                    'rating' === n.type
                        ? [].concat(e, [
                              a,
                              {
                                  name: 'rateComment',
                                  type: 'textarea',
                                  label: a.commentLabel,
                                  required: !1,
                                  dependOn: 'rating',
                              },
                          ])
                        : [].concat(e, [a])
                );
            }, []),
        }),
    ms = e => Ji(gs('ticket', e)),
    _s = (e, t) => {
        const r = e.getSessionUser().serverId,
            { [r]: n } = t;
        return {
            sessionUserSeenUpTo: n,
            latestOtherUserSeenUpTo: Me(
                Re(u(t, [r].map(is)))
                    .filter(Boolean)
                    .sort()
            ),
        };
    },
    bs = e => {
        const t = Se(e => 'systemMessageType' in e && 'rating.chat_commented' === e.systemMessageType, e),
            r = Se(e => 'systemMessageType' in e && 'rating.chat_rated' === e.systemMessageType, e),
            n = Se(e => 'systemMessageType' in e && 'rating.chat_rating_canceled' === e.systemMessageType, e);
        return e.filter((e, a) => {
            const i =
                    'systemMessageType' in e &&
                    ['rating.chat_rated', 'rating.chat_commented', 'rating.chat_rating_canceled'].includes(
                        e.systemMessageType
                    ),
                s = 'filled_form' === e.type && !e.fields.some(e => 'answer' in e && Boolean(e.answer));
            return (!i && !s) || a === t || a === r || (a === n && n > r);
        });
    },
    ys = e => {
        if (!e) return !1;
        const { events: t, active: r } = e;
        if (r) return !0;
        if (!t.length) return !1;
        const n = t[0],
            a = Me(t);
        return (
            2 !== t.length ||
            'filled_form' !== n.type ||
            'system_message' !== a.type ||
            'manual_archived_customer' !== a.systemMessageType ||
            n.fields.some(e => 'answer' in e && Boolean(e.answer))
        );
    },
    vs = (e, t) => {
        let { thread: r, users: n, eventsSeenUpToMap: a } = t;
        const i = e.getSessionUser().serverId,
            s = ps(e, n),
            { sessionUserSeenUpTo: o, latestOtherUserSeenUpTo: l } = _s(e, a);
        if (!ys(r))
            return {
                thread: null,
                eventsSeenUpToMap: a,
            };
        const { id: u, active: d, events: p, access: h } = r;
        return {
            thread: {
                id: u,
                active: d,
                agent: d ? s : null,
                events: (d ? p : bs(p))
                    .map(t => {
                        const r = t.authorId === i ? l >= t.createdAt : o >= t.createdAt;
                        return xs(
                            e,
                            c({}, t, {
                                seen: r,
                            })
                        );
                    })
                    .filter(Boolean),
                group: us(h),
                properties: zs(r),
            },
            eventsSeenUpToMap: a,
        };
    },
    ws = (e, t) => {
        let { thread: r } = t;
        const { id: n, active: a, events: i, access: s } = r,
            { eventsSeenUpToMap: o } = e.getChat(Pi).properties,
            l = e.getSessionUser().serverId,
            { sessionUserSeenUpTo: u, latestOtherUserSeenUpTo: d } = _s(e, o);
        return ys(r)
            ? {
                  id: n,
                  active: a,
                  events: bs(i)
                      .map(t => {
                          const r = t.authorId === l ? d >= t.createdAt : u >= t.createdAt;
                          return xs(
                              e,
                              c({}, t, {
                                  seen: r,
                              })
                          );
                      })
                      .filter(Boolean),
                  group: us(s),
                  properties: zs(r),
              }
            : null;
    },
    ks = e => {
        let { properties: t } = e,
            r = u(e, ts);
        if ('lc2' in t) {
            const e = t.lc2;
            if ('greeting_unique_id' in e)
                return ((e, t) => {
                    const r = Ai(c({}, e));
                    return (
                        (r.properties = c({}, r.properties, {
                            invitation: !0,
                            subtype: e.subtype,
                            id: t.greeting_id,
                            uniqueId: t.greeting_unique_id,
                        })),
                        r
                    );
                })(r, e);
            if (e.welcome_message)
                return ((e, t) => {
                    var r;
                    return Ai(
                        c(
                            {},
                            e,
                            {
                                welcomeMessage: !0,
                            },
                            (null == (r = t.chats) ? void 0 : r.formatting) && {
                                formatting: t.chats.formatting,
                            },
                            'bb9e5b2f1ab480e4a715977b7b1b4279' in t && {
                                reaction: t.bb9e5b2f1ab480e4a715977b7b1b4279.message_reaction,
                            },
                            'aa8151b317737a3e79d8e3384e6082de' in t && {
                                useFixedAnswers: t.aa8151b317737a3e79d8e3384e6082de.use_fixed_answers,
                            }
                        )
                    );
                })(r, t);
        }
        return ((e, t) => {
            var r;
            return Ai(
                c(
                    {},
                    e,
                    t.url_details && {
                        urlDetails: t.url_details,
                    },
                    t.translation && {
                        translation: Os(t.translation),
                    },
                    (null == (r = t.chats) ? void 0 : r.formatting) && {
                        formatting: t.chats.formatting,
                    },
                    'bb9e5b2f1ab480e4a715977b7b1b4279' in t && {
                        reaction: t.bb9e5b2f1ab480e4a715977b7b1b4279.message_reaction,
                    },
                    'aa8151b317737a3e79d8e3384e6082de' in t && {
                        useFixedAnswers: t.aa8151b317737a3e79d8e3384e6082de.use_fixed_answers,
                    }
                )
            );
        })(r, t);
    },
    xs = (e, t) => {
        const r = c({}, t, {
            id: cs(e, t),
            serverId: t.id,
            authorId: ls(e, t),
            timestamp: new Date(t.createdAt).getTime(),
        });
        switch (r.type) {
            case 'form':
                return Is(r);
            case 'filled_form':
                return Es(r);
            case 'message':
                return ks(r);
            case 'rich_message':
                return (e => {
                    if ('lc2' in e.properties && 'greeting_unique_id' in e.properties.lc2) {
                        const t = Di(e);
                        return (
                            (t.properties = c(
                                {},
                                t.properties,
                                {
                                    invitation: !0,
                                    subtype: e.subtype,
                                    id: e.properties.lc2.greeting_id,
                                    uniqueId: e.properties.lc2.greeting_unique_id,
                                },
                                'bb9e5b2f1ab480e4a715977b7b1b4279' in e.properties && {
                                    reaction: e.properties.bb9e5b2f1ab480e4a715977b7b1b4279.message_reaction,
                                }
                            )),
                            t
                        );
                    }
                    const t = Di(e);
                    return (
                        'aa8151b317737a3e79d8e3384e6082de' in e.properties &&
                            (t.properties = c({}, t.properties, {
                                useFixedAnswers: e.properties.aa8151b317737a3e79d8e3384e6082de.use_fixed_answers,
                            })),
                        t
                    );
                })(r);
            case 'file':
                return (e => {
                    if (e.thumbnails) {
                        const { thumbnails: t } = e,
                            r = c({}, Si(e), {
                                type: 'image_preview',
                                properties: c(
                                    {
                                        name: e.name,
                                        serverType: e.type,
                                    },
                                    t.default,
                                    {
                                        link: e.url,
                                        srcSet: t.default.url + ' 1x, ' + t.high.url + ' 2x',
                                    },
                                    Ei(e),
                                    Ti(e)
                                ),
                            });
                        return e.alternativeText && (r.properties.alternativeText = e.alternativeText), r;
                    }
                    return c({}, Si(e), {
                        type: 'message',
                        properties: c(
                            {
                                serverType: e.type,
                                text: e.name,
                                url: e.url,
                            },
                            e.alternativeText && {
                                alternativeText: e.alternativeText,
                            },
                            Ei(e),
                            Ti(e)
                        ),
                    });
                })(r);
            case 'system_message':
                return Ts(r);
            case 'custom':
                return Ss(r);
            default:
                return null;
        }
    },
    Ss = e => {
        const { properties: t, customId: r } = e;
        return c({}, Si(e), {
            type: 'custom',
            properties: c({}, t, {
                customId: r,
            }),
        });
    },
    Is = e => {
        var t;
        const r = c({}, e, {
            fields: e.fields.map(e =>
                e.id
                    ? e
                    : c({}, e, {
                          id: Te(),
                      })
            ),
        });
        return c({}, Si(r), {
            type: 'form',
            properties: {
                answered: !1,
                formType: (null == (t = r.properties.lc2) ? void 0 : t.form_type) || null,
                fields: gs('', r).fields,
                formId: r.formId.replace(/_[0-9]+/, ''),
            },
        });
    },
    Es = e => {
        var t;
        return c({}, Si(e), {
            type: 'form',
            properties: {
                answered: !0,
                formId: e.formId,
                formType: (null == (t = e.properties.lc2) ? void 0 : t.form_type) || null,
                fields: e.fields
                    .filter(e => 'answer' in e || ('answers' in e && 0 !== e.answers.length))
                    .map(e => {
                        if ('string' == typeof e.answer) return e;
                        if ('answers' in e) {
                            const { answers: t } = e,
                                r = u(e, rs);
                            return c({}, r, {
                                answer: t.map(e => {
                                    let { label: t } = e;
                                    return t;
                                }),
                            });
                        }
                        return c({}, e, {
                            answer: e.answer.label,
                        });
                    }),
            },
        });
    },
    Ts = e => {
        switch (e.systemMessageType) {
            case 'archived_customer_disconnected':
            case 'routing.archived_inactive':
                return Fi(
                    c({}, e, {
                        systemMessageType: 'client_inactive',
                    })
                );
            case 'manual_archived_agent':
                return Fi(
                    c({}, e, {
                        systemMessageType: 'operator_closed_session',
                        textVars: {
                            operator: e.textVars.agent,
                        },
                    })
                );
            case 'manual_archived_customer':
                return Fi(
                    c({}, e, {
                        systemMessageType: 'chat_closed_by_customer',
                    })
                );
            case 'system_archived':
            case 'customer_banned':
            case 'routing.archived_deleted':
            case 'routing.archived_disconnected':
            case 'routing.archived_offline':
            case 'routing.archived_other':
            case 'routing.archived_remotely_signed_out':
            case 'routing.archived_signed_out':
                return Fi(
                    c({}, e, {
                        systemMessageType: 'chat_session_closed',
                    })
                );
            case 'routing.assigned_other':
                return Fi(
                    c({}, e, {
                        systemMessageType: 'user_transfer',
                        textVars: {
                            operator: e.textVars.agent,
                        },
                    })
                );
            case 'routing.assigned_deleted':
            case 'routing.assigned_disconnected':
            case 'routing.assigned_inactive':
            case 'routing.assigned_remotely_signed_out':
            case 'routing.assigned_signed_out':
                return Fi(
                    c({}, e, {
                        systemMessageType: 'user_transfer',
                        textVars: {
                            operator: e.textVars.agent_added,
                        },
                    })
                );
            case 'chat_transferred':
                return Fi(
                    c({}, e, {
                        systemMessageType: 'user_transfer',
                        textVars: {
                            operator: e.textVars.targets,
                        },
                    })
                );
            case 'agent_joined':
            case 'agent_added':
                return Fi(
                    c({}, e, {
                        systemMessageType: 'operator_joined_conference',
                        textVars: {
                            operator: e.textVars.agent,
                        },
                    })
                );
            case 'agent_left':
            case 'agent_removed':
                return Fi(
                    c({}, e, {
                        systemMessageType: 'operator_left_conference',
                        textVars: {
                            operator: e.textVars.agent,
                        },
                    })
                );
            case 'rating.chat_rated':
                return Fi(
                    c({}, e, {
                        systemMessageType: 'rate_me_confirmation_' + e.textVars.score,
                    })
                );
            case 'rating.chat_commented':
                return Fi(
                    c({}, e, {
                        systemMessageType: 'rate_me_comment_added',
                        textVars: {
                            comment: e.textVars.comment,
                        },
                    })
                );
            case 'rating.chat_rating_canceled':
                return Fi(
                    c({}, e, {
                        systemMessageType: 'rate_me_cancel',
                    })
                );
            case 'custom': {
                const t = u(e, ns);
                return Fi(t);
            }
            default:
                return null;
        }
    },
    As = e => {
        const { score: t, comment: r } = e;
        return c(
            {},
            'number' == typeof t && {
                rate: 1 === t ? 'good' : 'bad',
            },
            'string' == typeof r && {
                rateComment: r,
            }
        );
    },
    Cs = e => ({
        position: e.position,
        waitingTime: e.waitTime,
    }),
    zs = e =>
        c(
            {},
            'rating' in e.properties && As(e.properties.rating),
            e.queue && {
                queue: Cs(e.queue),
            },
            {
                timestamp: new Date(e.createdAt).getTime(),
            }
        ),
    Ds = (e, t) => {
        const r = {
            event: xs(e, t.event),
            author: c({}, t.agent, {
                type: 'agent',
            }),
        };
        var n;
        return (
            (r.event.properties = c({}, r.event.properties, {
                invitation: !0,
                id: t.id,
                addon: t.addon,
                uniqueId: t.uniqueId,
                accepted: t.accepted,
                type:
                    ((n = r.event),
                    n.properties.quickReplies ? 'quick_replies' : 'rich_message' === n.type ? 'card' : 'plain_text'),
                subtype: t.subtype,
                receivedFirstTime: t.displayedFirstTime,
                isExitIntent: t.isExitIntent,
            })),
            r
        );
    },
    Fs = (e, t) => {
        const r = c({}, t.event, {
                id: Ae(e.getIndexedEvents(Pi)),
            }),
            n = xs(e, r);
        return c({}, n, {
            serverId: null,
            properties: c({}, n.properties, {
                welcomeMessage: !0,
                id: t.id,
            }),
        });
    },
    Ms = (e, t) => {
        const { type: r, id: n } = t;
        switch (r) {
            case 'filled_form': {
                const { formId: e } = t,
                    r = u(t, as);
                return c(
                    {
                        customId: r.customId,
                        formId: e,
                    },
                    r
                );
            }
            case 'emoji':
            case 'message':
            case 'message_draft':
            case 'url_preview': {
                const { text: r, triggeredBy: a } = t.properties,
                    i = {
                        type: 'message',
                        customId: n,
                        text: r,
                    };
                if (a) {
                    const t = e.getEvent(Pi, a.event);
                    t && t.thread && t.serverId
                        ? (i.postback = {
                              id: a.button.postbackId,
                              type: 'message',
                              value: a.button.value,
                              eventId: t.serverId,
                              threadId: t.thread,
                          })
                        : (i.properties = {
                              c5e4f61e1a6c3b1521b541bc5c5a2ac5: {
                                  postback_id: a.button.postbackId,
                              },
                          });
                }
                return i;
            }
            case 'custom_system_message': {
                const { recipients: e, text: r } = t.properties;
                return {
                    type: 'system_message',
                    customId: n,
                    text: r,
                    recipients: e,
                    systemMessageType: 'custom',
                };
            }
            default:
                return;
        }
    },
    Os = e => ({
        sourceLangCode: e.source_lang_code,
        targetLangCode: e.target_lang_code,
        targetMessage: e.target_message,
    }),
    Ps = (e, t) => {
        const r = xs(e, t);
        return (
            (r.id = t.customId),
            (r.properties = c({}, r.properties, {
                isPreview: !0,
            })),
            r
        );
    },
    js = e =>
        'subject' === e.serverType ? 'subject' : 'name' === e.name ? 'name' : 'text' === e.type ? 'question' : e.type,
    Rs = (e, t) => {
        let {
            id: r,
            serverId: n,
            properties: { formType: s, formId: o, fields: l },
        } = e;
        const u = Oi(l, t),
            d = u.fields,
            p = {
                filledForm: c(
                    {
                        type: 'filled_form',
                        formId: o,
                    },
                    !n && {
                        customId: r,
                    },
                    {
                        fields: l
                            .filter(e => void 0 !== e.serverName && 'rating' !== e.type && 'information' !== e.type)
                            .map(e => {
                                if ('groupSelect' === e.meta)
                                    return {
                                        type: 'group_chooser',
                                        id: e.serverName,
                                        label: mi(e.label),
                                        answer: {
                                            id: String(u.choosenGroupIndex),
                                            groupId: u.choosenGroup,
                                            label: e.options[u.choosenGroupIndex].label,
                                        },
                                    };
                                if ('confirm_subscription' === e.meta) {
                                    const t = d[e.serverName];
                                    return {
                                        type: 'checkbox_for_email',
                                        id: e.serverName,
                                        label: e.options[0].label,
                                        answer: !!t && ze(e.options[0].originalValue, t),
                                    };
                                }
                                if (a(e.options)) {
                                    const t = {
                                            type: js(e),
                                            id: e.serverName,
                                            label: mi(e.label),
                                        },
                                        r = i(e.serverName, d) ? be(d[e.serverName]) : [],
                                        n = e.options
                                            .filter(e => ze(e.originalValue, r))
                                            .map(e => ({
                                                label: e.label,
                                                value: e.originalValue,
                                            }));
                                    if ('checkbox' === t.type)
                                        t.answers = n.map(e => {
                                            let { label: t, value: r } = e;
                                            return {
                                                label: t,
                                                id: r,
                                            };
                                        });
                                    else if (n.length) {
                                        const e = n[0];
                                        t.answer = {
                                            id: e.value,
                                            label: e.label,
                                        };
                                    }
                                    return t;
                                }
                                return i(e.serverName, d)
                                    ? {
                                          type: js(e),
                                          id: e.serverName,
                                          label: mi(e.label),
                                          answer: d[e.serverName],
                                      }
                                    : {
                                          type: js(e),
                                          id: e.serverName,
                                          label: mi(e.label),
                                      };
                            }),
                        properties: c(
                            {},
                            s && {
                                lc2: {
                                    form_type: s,
                                },
                            }
                        ),
                    }
                ),
            };
        return void 0 !== u.choosenGroup && (p.choosenGroup = u.choosenGroup), p;
    };

function Bs(e, t) {
    return (
        (t = t || {}),
        new Promise(function (r, n) {
            var a = new XMLHttpRequest(),
                i = [],
                s = [],
                o = {},
                l = function () {
                    return {
                        ok: 2 == ((a.status / 100) | 0),
                        statusText: a.statusText,
                        status: a.status,
                        url: a.responseURL,
                        text: function () {
                            return Promise.resolve(a.responseText);
                        },
                        json: function () {
                            return Promise.resolve(a.responseText).then(JSON.parse);
                        },
                        blob: function () {
                            return Promise.resolve(new Blob([a.response]));
                        },
                        clone: l,
                        headers: {
                            keys: function () {
                                return i;
                            },
                            entries: function () {
                                return s;
                            },
                            get: function (e) {
                                return o[e.toLowerCase()];
                            },
                            has: function (e) {
                                return e.toLowerCase() in o;
                            },
                        },
                    };
                };
            for (var c in (a.open(t.method || 'get', e, !0),
            (a.onload = function () {
                a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (e, t, r) {
                    i.push((t = t.toLowerCase())), s.push([t, r]), (o[t] = o[t] ? o[t] + ',' + r : r);
                }),
                    r(l());
            }),
            (a.onerror = n),
            (a.withCredentials = 'include' == t.credentials),
            t.headers))
                a.setRequestHeader(c, t.headers[c]);
            a.send(t.body || null);
        })
    );
}
const $s = ['xS94WbAZR', 'pJw7AxJZg'],
    qs = ['DfltarqcrRoA5ZoZ', 'UsDoxZQESkzF0qds'];

function Us(e) {
    return $s.includes(e);
}

function Ns(e) {
    return qs.includes(e);
}
const Ls = U ? 1 : 3,
    Vs = '4c8c0751-837f-4a11-928e-047b2d095307',
    Hs = 'not_ready',
    Gs = 'ready',
    Zs = 'bootstrapped',
    Ws = 19196658,
    Ys = () => 'feade1d6c3f17748ae4c8d917a1e1068',
    Qs = () => 'bb9e5b2f1ab480e4a715977b7b1b4279',
    Js = {
        whatsapp: 'ee631a7ff555f8b6e354705201860c81',
        messenger: '0e655920289dbafb0376a0f4491372d9',
        apple: '22cc83ef7905d174b6a0eccb9ce404c0',
        telegram: 'b0c559436b7d82f29d971faab4c6c2aa',
        twilio: 'f14e86a88bd213b7b3717c9f76e5e823',
        instagram: '506038b7a51013790f6c159967b562ae',
    },
    Xs = () => Js,
    Ks = 'chatbotChatId',
    eo = 'chatbot-agent',
    to = 18e5,
    ro = U ? 100 : 1e3,
    no = ['failed', 'cancelled', 'expired'],
    ao = 'openai_bot',
    io = 'https://cdn.files-text.com/api/ow/img/integrations/openai/orb.gif',
    so = 6,
    oo = {
        id: 'textapp_rating_postchat',
        type: 'postchat',
        fields: [
            {
                name: 'rating',
                defaultValue: '',
            },
            {
                name: 'rateComment',
                defaultValue: '',
            },
        ],
    },
    lo = ['client_inactive', 'operator_closed_session', 'chat_closed_by_customer', 'chat_session_closed'],
    co = ['rate_me_confirmation_good', 'rate_me_confirmation_bad', 'rate_me_comment_added'];

function uo(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

function po(e, t) {
    return (po = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
              return (e.__proto__ = t), e;
          })(e, t);
}

function ho(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), po(e, t);
}

function fo(e) {
    return (fo = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}

function go() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (go = function () {
        return !!e;
    })();
}

function mo(e) {
    var t = 'function' == typeof Map ? new Map() : void 0;
    return (
        (mo = function (e) {
            if (
                null === e ||
                !(function (e) {
                    try {
                        return -1 !== Function.toString.call(e).indexOf('[native code]');
                    } catch (t) {
                        return 'function' == typeof e;
                    }
                })(e)
            )
                return e;
            if ('function' != typeof e) throw new TypeError('Super expression must either be null or a function');
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r);
            }

            function r() {
                return (function (e, t, r) {
                    if (go()) return Reflect.construct.apply(null, arguments);
                    var n = [null];
                    n.push.apply(n, t);
                    var a = new (e.bind.apply(e, n))();
                    return r && po(a, r.prototype), a;
                })(e, arguments, fo(this).constructor);
            }
            return (
                (r.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: r,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                    },
                })),
                po(r, e)
            );
        }),
        mo(e)
    );
}
var _o = (function (e) {
    function t(t) {
        return uo(
            e.call(
                this,
                'An error occurred. See https://github.com/styled-components/polished/blob/master/src/internalHelpers/errors.md#' +
                    t +
                    ' for more information.'
            ) || this
        );
    }
    return ho(t, e), t;
})(mo(Error));

function bo(e) {
    return Math.round(255 * e);
}

function yo(e, t, r) {
    return bo(e) + ',' + bo(t) + ',' + bo(r);
}

function vo(e, t, r, n) {
    if ((void 0 === n && (n = yo), 0 === t)) return n(r, r, r);
    var a = (((e % 360) + 360) % 360) / 60,
        i = (1 - Math.abs(2 * r - 1)) * t,
        s = i * (1 - Math.abs((a % 2) - 1)),
        o = 0,
        l = 0,
        c = 0;
    a >= 0 && a < 1
        ? ((o = i), (l = s))
        : a >= 1 && a < 2
          ? ((o = s), (l = i))
          : a >= 2 && a < 3
            ? ((l = i), (c = s))
            : a >= 3 && a < 4
              ? ((l = s), (c = i))
              : a >= 4 && a < 5
                ? ((o = s), (c = i))
                : a >= 5 && a < 6 && ((o = i), (c = s));
    var u = r - i / 2;
    return n(o + u, l + u, c + u);
}
var wo = {
    aliceblue: 'f0f8ff',
    antiquewhite: 'faebd7',
    aqua: '00ffff',
    aquamarine: '7fffd4',
    azure: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '000',
    blanchedalmond: 'ffebcd',
    blue: '0000ff',
    blueviolet: '8a2be2',
    brown: 'a52a2a',
    burlywood: 'deb887',
    cadetblue: '5f9ea0',
    chartreuse: '7fff00',
    chocolate: 'd2691e',
    coral: 'ff7f50',
    cornflowerblue: '6495ed',
    cornsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: '00ffff',
    darkblue: '00008b',
    darkcyan: '008b8b',
    darkgoldenrod: 'b8860b',
    darkgray: 'a9a9a9',
    darkgreen: '006400',
    darkgrey: 'a9a9a9',
    darkkhaki: 'bdb76b',
    darkmagenta: '8b008b',
    darkolivegreen: '556b2f',
    darkorange: 'ff8c00',
    darkorchid: '9932cc',
    darkred: '8b0000',
    darksalmon: 'e9967a',
    darkseagreen: '8fbc8f',
    darkslateblue: '483d8b',
    darkslategray: '2f4f4f',
    darkslategrey: '2f4f4f',
    darkturquoise: '00ced1',
    darkviolet: '9400d3',
    deeppink: 'ff1493',
    deepskyblue: '00bfff',
    dimgray: '696969',
    dimgrey: '696969',
    dodgerblue: '1e90ff',
    firebrick: 'b22222',
    floralwhite: 'fffaf0',
    forestgreen: '228b22',
    fuchsia: 'ff00ff',
    gainsboro: 'dcdcdc',
    ghostwhite: 'f8f8ff',
    gold: 'ffd700',
    goldenrod: 'daa520',
    gray: '808080',
    green: '008000',
    greenyellow: 'adff2f',
    grey: '808080',
    honeydew: 'f0fff0',
    hotpink: 'ff69b4',
    indianred: 'cd5c5c',
    indigo: '4b0082',
    ivory: 'fffff0',
    khaki: 'f0e68c',
    lavender: 'e6e6fa',
    lavenderblush: 'fff0f5',
    lawngreen: '7cfc00',
    lemonchiffon: 'fffacd',
    lightblue: 'add8e6',
    lightcoral: 'f08080',
    lightcyan: 'e0ffff',
    lightgoldenrodyellow: 'fafad2',
    lightgray: 'd3d3d3',
    lightgreen: '90ee90',
    lightgrey: 'd3d3d3',
    lightpink: 'ffb6c1',
    lightsalmon: 'ffa07a',
    lightseagreen: '20b2aa',
    lightskyblue: '87cefa',
    lightslategray: '789',
    lightslategrey: '789',
    lightsteelblue: 'b0c4de',
    lightyellow: 'ffffe0',
    lime: '0f0',
    limegreen: '32cd32',
    linen: 'faf0e6',
    magenta: 'f0f',
    maroon: '800000',
    mediumaquamarine: '66cdaa',
    mediumblue: '0000cd',
    mediumorchid: 'ba55d3',
    mediumpurple: '9370db',
    mediumseagreen: '3cb371',
    mediumslateblue: '7b68ee',
    mediumspringgreen: '00fa9a',
    mediumturquoise: '48d1cc',
    mediumvioletred: 'c71585',
    midnightblue: '191970',
    mintcream: 'f5fffa',
    mistyrose: 'ffe4e1',
    moccasin: 'ffe4b5',
    navajowhite: 'ffdead',
    navy: '000080',
    oldlace: 'fdf5e6',
    olive: '808000',
    olivedrab: '6b8e23',
    orange: 'ffa500',
    orangered: 'ff4500',
    orchid: 'da70d6',
    palegoldenrod: 'eee8aa',
    palegreen: '98fb98',
    paleturquoise: 'afeeee',
    palevioletred: 'db7093',
    papayawhip: 'ffefd5',
    peachpuff: 'ffdab9',
    peru: 'cd853f',
    pink: 'ffc0cb',
    plum: 'dda0dd',
    powderblue: 'b0e0e6',
    purple: '800080',
    rebeccapurple: '639',
    red: 'f00',
    rosybrown: 'bc8f8f',
    royalblue: '4169e1',
    saddlebrown: '8b4513',
    salmon: 'fa8072',
    sandybrown: 'f4a460',
    seagreen: '2e8b57',
    seashell: 'fff5ee',
    sienna: 'a0522d',
    silver: 'c0c0c0',
    skyblue: '87ceeb',
    slateblue: '6a5acd',
    slategray: '708090',
    slategrey: '708090',
    snow: 'fffafa',
    springgreen: '00ff7f',
    steelblue: '4682b4',
    tan: 'd2b48c',
    teal: '008080',
    thistle: 'd8bfd8',
    tomato: 'ff6347',
    turquoise: '40e0d0',
    violet: 'ee82ee',
    wheat: 'f5deb3',
    white: 'fff',
    whitesmoke: 'f5f5f5',
    yellow: 'ff0',
    yellowgreen: '9acd32',
};
var ko = /^#[a-fA-F0-9]{6}$/,
    xo = /^#[a-fA-F0-9]{8}$/,
    So = /^#[a-fA-F0-9]{3}$/,
    Io = /^#[a-fA-F0-9]{4}$/,
    Eo = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,
    To = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,
    Ao = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/i,
    Co = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;

function zo(e) {
    if ('string' != typeof e) throw new _o(3);
    var t = (function (e) {
        if ('string' != typeof e) return e;
        var t = e.toLowerCase();
        return wo[t] ? '#' + wo[t] : e;
    })(e);
    if (t.match(ko))
        return {
            red: parseInt('' + t[1] + t[2], 16),
            green: parseInt('' + t[3] + t[4], 16),
            blue: parseInt('' + t[5] + t[6], 16),
        };
    if (t.match(xo)) {
        var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2));
        return {
            red: parseInt('' + t[1] + t[2], 16),
            green: parseInt('' + t[3] + t[4], 16),
            blue: parseInt('' + t[5] + t[6], 16),
            alpha: r,
        };
    }
    if (t.match(So))
        return {
            red: parseInt('' + t[1] + t[1], 16),
            green: parseInt('' + t[2] + t[2], 16),
            blue: parseInt('' + t[3] + t[3], 16),
        };
    if (t.match(Io)) {
        var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2));
        return {
            red: parseInt('' + t[1] + t[1], 16),
            green: parseInt('' + t[2] + t[2], 16),
            blue: parseInt('' + t[3] + t[3], 16),
            alpha: n,
        };
    }
    var a = Eo.exec(t);
    if (a)
        return {
            red: parseInt('' + a[1], 10),
            green: parseInt('' + a[2], 10),
            blue: parseInt('' + a[3], 10),
        };
    var i = To.exec(t);
    if (i)
        return {
            red: parseInt('' + i[1], 10),
            green: parseInt('' + i[2], 10),
            blue: parseInt('' + i[3], 10),
            alpha: parseFloat('' + i[4]),
        };
    var s = Ao.exec(t);
    if (s) {
        var o =
                'rgb(' +
                vo(parseInt('' + s[1], 10), parseInt('' + s[2], 10) / 100, parseInt('' + s[3], 10) / 100) +
                ')',
            l = Eo.exec(o);
        if (!l) throw new _o(4, t, o);
        return {
            red: parseInt('' + l[1], 10),
            green: parseInt('' + l[2], 10),
            blue: parseInt('' + l[3], 10),
        };
    }
    var c = Co.exec(t);
    if (c) {
        var u =
                'rgb(' +
                vo(parseInt('' + c[1], 10), parseInt('' + c[2], 10) / 100, parseInt('' + c[3], 10) / 100) +
                ')',
            d = Eo.exec(u);
        if (!d) throw new _o(4, t, u);
        return {
            red: parseInt('' + d[1], 10),
            green: parseInt('' + d[2], 10),
            blue: parseInt('' + d[3], 10),
            alpha: parseFloat('' + c[4]),
        };
    }
    throw new _o(5);
}

function Do(e) {
    return (function (e) {
        var t,
            r = e.red / 255,
            n = e.green / 255,
            a = e.blue / 255,
            i = Math.max(r, n, a),
            s = Math.min(r, n, a),
            o = (i + s) / 2;
        if (i === s)
            return void 0 !== e.alpha
                ? {
                      hue: 0,
                      saturation: 0,
                      lightness: o,
                      alpha: e.alpha,
                  }
                : {
                      hue: 0,
                      saturation: 0,
                      lightness: o,
                  };
        var l = i - s,
            c = o > 0.5 ? l / (2 - i - s) : l / (i + s);
        switch (i) {
            case r:
                t = (n - a) / l + (n < a ? 6 : 0);
                break;
            case n:
                t = (a - r) / l + 2;
                break;
            default:
                t = (r - n) / l + 4;
        }
        return (
            (t *= 60),
            void 0 !== e.alpha
                ? {
                      hue: t,
                      saturation: c,
                      lightness: o,
                      alpha: e.alpha,
                  }
                : {
                      hue: t,
                      saturation: c,
                      lightness: o,
                  }
        );
    })(zo(e));
}
var Fo = function (e) {
    return 7 === e.length && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? '#' + e[1] + e[3] + e[5] : e;
};

function Mo(e) {
    var t = e.toString(16);
    return 1 === t.length ? '0' + t : t;
}

function Oo(e) {
    return Mo(Math.round(255 * e));
}

function Po(e, t, r) {
    return Fo('#' + Oo(e) + Oo(t) + Oo(r));
}

function jo(e, t, r) {
    return vo(e, t, r, Po);
}

function Ro(e, t, r) {
    if ('number' == typeof e && 'number' == typeof t && 'number' == typeof r) return Fo('#' + Mo(e) + Mo(t) + Mo(r));
    if ('object' == typeof e && void 0 === t && void 0 === r) return Fo('#' + Mo(e.red) + Mo(e.green) + Mo(e.blue));
    throw new _o(6);
}

function Bo(e, t, r, n) {
    if ('string' == typeof e && 'number' == typeof t) {
        var a = zo(e);
        return 'rgba(' + a.red + ',' + a.green + ',' + a.blue + ',' + t + ')';
    }
    if ('number' == typeof e && 'number' == typeof t && 'number' == typeof r && 'number' == typeof n)
        return n >= 1 ? Ro(e, t, r) : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')';
    if ('object' == typeof e && void 0 === t && void 0 === r && void 0 === n)
        return e.alpha >= 1
            ? Ro(e.red, e.green, e.blue)
            : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')';
    throw new _o(7);
}

function $o(e) {
    if ('object' != typeof e) throw new _o(8);
    if (
        (function (e) {
            return (
                'number' == typeof e.red &&
                'number' == typeof e.green &&
                'number' == typeof e.blue &&
                'number' == typeof e.alpha
            );
        })(e)
    )
        return Bo(e);
    if (
        (function (e) {
            return (
                'number' == typeof e.red &&
                'number' == typeof e.green &&
                'number' == typeof e.blue &&
                ('number' != typeof e.alpha || void 0 === e.alpha)
            );
        })(e)
    )
        return Ro(e);
    if (
        (function (e) {
            return (
                'number' == typeof e.hue &&
                'number' == typeof e.saturation &&
                'number' == typeof e.lightness &&
                'number' == typeof e.alpha
            );
        })(e)
    )
        return (function (e, t, r, n) {
            if ('object' == typeof e && void 0 === t && void 0 === r && void 0 === n)
                return e.alpha >= 1
                    ? jo(e.hue, e.saturation, e.lightness)
                    : 'rgba(' + vo(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')';
            throw new _o(2);
        })(e);
    if (
        (function (e) {
            return (
                'number' == typeof e.hue &&
                'number' == typeof e.saturation &&
                'number' == typeof e.lightness &&
                ('number' != typeof e.alpha || void 0 === e.alpha)
            );
        })(e)
    )
        return (function (e, t, r) {
            if ('object' == typeof e && void 0 === t && void 0 === r) return jo(e.hue, e.saturation, e.lightness);
            throw new _o(1);
        })(e);
    throw new _o(8);
}

function qo(e, t, r) {
    return function () {
        var n = r.concat(Array.prototype.slice.call(arguments));
        return n.length >= t ? e.apply(this, n) : qo(e, t, n);
    };
}

function Uo(e) {
    return qo(e, e.length, []);
}

function No(e, t) {
    if ('transparent' === t) return t;
    var r = Do(t);
    return $o(
        c({}, r, {
            hue: r.hue + parseFloat(e),
        })
    );
}
var Lo = Uo(No);

function Vo(e, t, r) {
    return Math.max(e, Math.min(t, r));
}

function Ho(e, t) {
    if ('transparent' === t) return t;
    var r = Do(t);
    return $o(
        c({}, r, {
            lightness: Vo(0, 1, r.lightness - parseFloat(e)),
        })
    );
}
var Go = Uo(Ho);

function Zo(e, t) {
    if ('transparent' === t) return t;
    var r = Do(t);
    return $o(
        c({}, r, {
            saturation: Vo(0, 1, r.saturation - parseFloat(e)),
        })
    );
}
var Wo = Uo(Zo);

function Yo(e) {
    if ('transparent' === e) return 0;
    var t = zo(e),
        r = Object.keys(t).map(function (e) {
            var r = t[e] / 255;
            return r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
        }),
        n = r[0],
        a = r[1],
        i = r[2];
    return parseFloat((0.2126 * n + 0.7152 * a + 0.0722 * i).toFixed(3));
}

function Qo(e, t) {
    var r = Yo(e),
        n = Yo(t);
    return parseFloat((r > n ? (r + 0.05) / (n + 0.05) : (n + 0.05) / (r + 0.05)).toFixed(2));
}

function Jo(e, t) {
    if ('transparent' === t) return t;
    var r = Do(t);
    return $o(
        c({}, r, {
            lightness: Vo(0, 1, r.lightness + parseFloat(e)),
        })
    );
}
var Xo = Uo(Jo);

function Ko(e, t, r) {
    if ('transparent' === t) return r;
    if ('transparent' === r) return t;
    var n = zo(t),
        a = c({}, n, {
            alpha: 'number' == typeof n.alpha ? n.alpha : 1,
        }),
        i = zo(r),
        s = c({}, i, {
            alpha: 'number' == typeof i.alpha ? i.alpha : 1,
        }),
        o = a.alpha - s.alpha,
        l = 2 * parseFloat(e) - 1,
        u = ((l * o === -1 ? l : l + o) / (1 + l * o) + 1) / 2,
        d = 1 - u;
    return Bo({
        red: Math.floor(a.red * u + s.red * d),
        green: Math.floor(a.green * u + s.green * d),
        blue: Math.floor(a.blue * u + s.blue * d),
        alpha: a.alpha + (s.alpha - a.alpha) * (parseFloat(e) / 1),
    });
}
var el = Uo(Ko);

function tl(e, t) {
    return 'transparent' === t ? t : el(parseFloat(e), 'rgb(0, 0, 0)', t);
}
var rl = Uo(tl);

function nl(e, t) {
    return 'transparent' === t ? t : el(parseFloat(e), 'rgb(255, 255, 255)', t);
}
var al = Uo(nl);

function il(e, t) {
    if ('transparent' === t) return t;
    var r = zo(t),
        n = 'number' == typeof r.alpha ? r.alpha : 1;
    return Bo(
        c({}, r, {
            alpha: Vo(0, 1, (100 * n - 100 * parseFloat(e)) / 100),
        })
    );
}
var sl = Uo(il);

function ol(e) {
    return (
        void 0 === e && (e = -1),
        function (t) {
            return function (r, n) {
                if (0 === r) {
                    var a,
                        i = !1,
                        s = e,
                        o = function (e, t) {
                            a(e, t);
                        };
                    !(function e() {
                        t(0, function (t, r) {
                            return 0 === t
                                ? ((a = r), i ? void o(1) : ((i = !0), void n(0, o)))
                                : 2 === t && r && 0 !== s
                                  ? (s--, void e())
                                  : void n(t, r);
                        });
                    })();
                }
            };
        }
    );
}

function ll() {
    const e = ue();
    return [
        e,
        () => {
            const t = new Error('Destroyed.');
            (t.code = 'DESTROYED'), e(2, t);
        },
    ];
}
const cl = Te();
let ul = 0;
const dl = e => {
    const t = document.createElement('a');
    if (((t.href = e), t.origin)) return 'null' === t.origin ? '*' : t.origin;
    const r = t.protocol.length > 4 ? t.protocol : window.location.protocol;
    let n;
    return (
        (n = t.host.length ? ('80' === t.port || '443' === t.port ? t.hostname : t.host) : window.location.host),
        r + '//' + n
    );
};

function pl(e, t) {
    let { frame: r, targetOrigin: n = dl(r.src), handshakeRetry: a = {} } = e;
    void 0 === t && (t = {});
    const [i, s] = d(t),
        [o, l] = ll(),
        c = ul++,
        u = r.contentWindow,
        z = p(),
        D = (e, t) => b(cl, c, e, t),
        F = e => {
            u.postMessage(e, n);
        },
        M = h(
            f(),
            g(e => e.owner === cl && e.instance === c),
            pe(o),
            m
        ),
        O = _(z, M, D, F),
        P = h(
            y(M, F, D(C, s), null),
            v(a.interval || 500),
            ol(a.count || 5),
            w(1),
            k(e =>
                x in e
                    ? h(
                          y(M, F, D(A)),
                          I(() => e.data)
                      )
                    : S(() => e)
            ),
            pe(o),
            m
        ),
        j = E(O, z.emit, F, i);
    return (
        h(
            P,
            k(() => M),
            T(j)
        ),
        {
            api: O,
            destroy: l,
            handshake$: P,
        }
    );
}

function hl() {
    return new Promise(e => {
        const t = () => {
            document.body ? e(document.body) : setTimeout(t, 100);
        };
        t();
    });
}

function fl(e) {
    const { parentNode: t } = e;
    t && t.removeChild(e);
}
const gl = (e, t) => {
        const r = document.createElement('iframe');
        return e.appendChild(r), (r.src = t), r;
    },
    ml = ['onConnected'];

function _l() {
    return (
        (_l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                  }
                  return e;
              }),
        _l.apply(null, arguments)
    );
}

function bl(e, t) {
    let { onConnected: r } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var r = {};
            for (var n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    r[n] = e[n];
                }
            return r;
        })(e, ml);
    const a = !n.frame,
        i = (e => {
            if (e.frame) return e.frame;
            const { container: t, url: r } = e;
            return gl(t, r);
        })(n),
        [s, o] = ll();
    let l;
    const c = () => {
        a && fl(i), l ? l.destroy() : o();
    };
    return (
        h(
            D(i, 'load'),
            k(() =>
                G((e, r) => {
                    let a = (function (e, t) {
                        const { api: r, destroy: n, handshake$: a } = pl(e, t);
                        return {
                            destroy: n,
                            promise: h(
                                a,
                                I(e => ((r.data = e), (r.destroy = n), r)),
                                z
                            ),
                        };
                    })(
                        _l({}, n, {
                            frame: i,
                        }),
                        t
                    );
                    return a.promise.then(e, r), (l = a), a.destroy;
                })
            ),
            ol(),
            pe(s),
            T(e => {
                (e.destroy = c), (e.frame = i), r(e);
            })
        ),
        {
            destroy: c,
            frame: i,
        }
    );
}

function yl() {
    return (
        (yl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                  }
                  return e;
              }),
        yl.apply(this, arguments)
    );
}
var vl = [
        'allow-forms',
        'allow-pointer-lock',
        'allow-popups',
        'allow-popups-to-escape-sandbox',
        'allow-presentation',
        'allow-same-origin',
        'allow-scripts',
        'function' == typeof document.hasStorageAccess && 'allow-storage-access-by-user-activation',
    ]
        .filter(Boolean)
        .join(' '),
    wl = ['all', 'agents'],
    kl = function (e) {
        return 'number' != typeof e || Number.isNaN(e) ? e : '' + e;
    },
    xl = function (e, t, r) {
        if (!t.length || t.length > r)
            throw new Error(e + ' can not be empty and can only be ' + r + ' characters long.');
    },
    Sl = function (e) {
        if ('string' != typeof (e = kl(e))) throw new Error('`text` must be a string or a number.');
        (e = e.trim()), xl('`text`', e, 1024);
    },
    Il = function (e, t) {
        return new Error('Attribute with key "' + e + '" is invalid. ' + t);
    },
    El = s,
    Tl = Object.freeze({
        sendMessage: function (e) {
            var t = e.text,
                r = e.postback;
            if ((Sl(t), void 0 !== r)) {
                if ('string' != typeof r) throw new Error('`postback` must be a string.');
                xl('`postback`', r, 1024);
            }
        },
        sendSystemMessage: function (e) {
            var t = e.text,
                r = e.recipients;
            if ((Sl(t), void 0 !== r && -1 === wl.indexOf(r)))
                throw new Error('`recipients` can only be one of: ' + wl + '.');
        },
        setAttributes: function (e) {
            if (!e || 'object' != typeof e)
                throw new Error("`attributes` must be a plain object (with shape such as `{ key: 'value' }`).");
            var t = Object.keys(e);
            if (t.length > 99) throw new Error('The maximum number of attributes is 99.');
            t.forEach(function (t) {
                var r = kl(e[t]);
                if (((t = kl(t)), !/^[\w-]{1,128}$/.test(t)))
                    throw Il(
                        t,
                        'Key must be between 1-128 characters long and can only contain alpha-numeric, underscore and dash characters.'
                    );
                if ('string' != typeof r) throw Il(t, 'Value must be a string or a number.');
                xl('Value', r, 1024);
            });
        },
        setExternalLink: function (e) {
            if ('string' == typeof e) {
                if (!/^https:\/\//.test(e)) throw new Error('`externalLink` has to be a HTTPS URL.');
            } else if (null !== e) throw new Error('`externalLink` has to be a string or null.');
        },
        setIsFragile: function (e) {
            if ('boolean' != typeof e)
                throw new Error('`setIsFragile` argument value can not be empty and must be a boolean.');
        },
        getIdentityTransferToken: function () {},
        updateCustomerData: function (e) {
            if (!e) throw new Error('`updateUserData` arguments values can not be empty.');
            if (e.email && 'string' != typeof e.email)
                throw new Error('`updateUserData` argument `email` has to be a string.');
            if (e.name && 'string' != typeof e.name)
                throw new Error('`updateUserData` argument `name` has to be a string.');
        },
        close: El,
        setTitle: function (e) {
            if ('string' != typeof e) throw new Error('`setTitle` argument value has to be a string.');
            xl('`title`', e, 1024);
        },
    }),
    Al = function (e) {
        var t = P(e);
        if (!/chatbot\.com$/.test(t)) return e;
        var r = $(q(j(e)));
        if (!r.p) return e;
        try {
            var n = JSON.parse(atob(r.p));
            return n.url ? decodeURIComponent(n.url) : e;
        } catch (a) {
            return e;
        }
    };

function Cl(e, t) {
    var r,
        n = Al(e.url),
        a = F(function (e) {
            return 'function' == typeof e;
        }, t),
        i = a[0],
        s = a[1],
        o = Pe(function (e, t) {
            return function () {
                return Tl[t].apply(Tl, arguments), e.apply(void 0, arguments);
            };
        }, i),
        l = bl(
            yl({}, e, {
                targetOrigin: '*',
            }),
            yl({}, s, o, {
                supportedMethods: Object.keys(o),
            })
        ),
        c = l.destroy,
        u = l.frame;
    return (
        (u.sandbox = vl),
        {
            destroy: c,
            frame: u,
            title: ((r = n), Na('moment-title', r) || Ua(r)),
        }
    );
}
var zl = [
    'aaa',
    'aarp',
    'abarth',
    'abb',
    'abbott',
    'abbvie',
    'abc',
    'able',
    'abogado',
    'abudhabi',
    'ac',
    'academy',
    'accenture',
    'accountant',
    'accountants',
    'aco',
    'active',
    'actor',
    'ad',
    'adac',
    'ads',
    'adult',
    'ae',
    'aeg',
    'aero',
    'aetna',
    'af',
    'afamilycompany',
    'afl',
    'africa',
    'ag',
    'agakhan',
    'agency',
    'ai',
    'aig',
    'aigo',
    'airbus',
    'airforce',
    'airtel',
    'akdn',
    'al',
    'alfaromeo',
    'alibaba',
    'alipay',
    'allfinanz',
    'allstate',
    'ally',
    'alsace',
    'alstom',
    'am',
    'americanexpress',
    'americanfamily',
    'amex',
    'amfam',
    'amica',
    'amsterdam',
    'analytics',
    'android',
    'anquan',
    'anz',
    'ao',
    'aol',
    'apartments',
    'app',
    'apple',
    'aq',
    'aquarelle',
    'ar',
    'arab',
    'aramco',
    'archi',
    'army',
    'arpa',
    'art',
    'arte',
    'as',
    'asda',
    'asia',
    'associates',
    'at',
    'athleta',
    'attorney',
    'au',
    'auction',
    'audi',
    'audible',
    'audio',
    'auspost',
    'author',
    'auto',
    'autos',
    'avianca',
    'aw',
    'aws',
    'ax',
    'axa',
    'az',
    'azure',
    'ba',
    'baby',
    'baidu',
    'banamex',
    'bananarepublic',
    'band',
    'bank',
    'bar',
    'barcelona',
    'barclaycard',
    'barclays',
    'barefoot',
    'bargains',
    'baseball',
    'basketball',
    'bauhaus',
    'bayern',
    'bb',
    'bbc',
    'bbt',
    'bbva',
    'bcg',
    'bcn',
    'bd',
    'be',
    'beats',
    'beauty',
    'beer',
    'bentley',
    'berlin',
    'best',
    'bestbuy',
    'bet',
    'bf',
    'bg',
    'bh',
    'bharti',
    'bi',
    'bible',
    'bid',
    'bike',
    'bing',
    'bingo',
    'bio',
    'biz',
    'bj',
    'black',
    'blackfriday',
    'blanco',
    'blockbuster',
    'blog',
    'bloomberg',
    'blue',
    'bm',
    'bms',
    'bmw',
    'bn',
    'bnl',
    'bnpparibas',
    'bo',
    'boats',
    'boehringer',
    'bofa',
    'bom',
    'bond',
    'boo',
    'book',
    'booking',
    'bosch',
    'bostik',
    'boston',
    'bot',
    'boutique',
    'box',
    'br',
    'bradesco',
    'bridgestone',
    'broadway',
    'broker',
    'brother',
    'brussels',
    'bs',
    'bt',
    'budapest',
    'bugatti',
    'build',
    'builders',
    'business',
    'buy',
    'buzz',
    'bv',
    'bw',
    'by',
    'bz',
    'bzh',
    'ca',
    'cab',
    'cafe',
    'cal',
    'call',
    'calvinklein',
    'cam',
    'camera',
    'camp',
    'cancerresearch',
    'canon',
    'capetown',
    'capital',
    'capitalone',
    'car',
    'caravan',
    'cards',
    'care',
    'career',
    'careers',
    'cars',
    'cartier',
    'casa',
    'case',
    'caseih',
    'cash',
    'casino',
    'cat',
    'catering',
    'catholic',
    'cba',
    'cbn',
    'cbre',
    'cbs',
    'cc',
    'cd',
    'ceb',
    'center',
    'ceo',
    'cern',
    'cf',
    'cfa',
    'cfd',
    'cg',
    'ch',
    'chanel',
    'channel',
    'chase',
    'chat',
    'cheap',
    'chintai',
    'christmas',
    'chrome',
    'chrysler',
    'church',
    'ci',
    'cipriani',
    'circle',
    'cisco',
    'citadel',
    'citi',
    'citic',
    'city',
    'cityeats',
    'ck',
    'cl',
    'claims',
    'cleaning',
    'click',
    'clinic',
    'clinique',
    'clothing',
    'cloud',
    'club',
    'clubmed',
    'cm',
    'cn',
    'co',
    'coach',
    'codes',
    'coffee',
    'college',
    'cologne',
    'com',
    'comcast',
    'commbank',
    'community',
    'company',
    'compare',
    'computer',
    'comsec',
    'condos',
    'construction',
    'consulting',
    'contact',
    'contractors',
    'cooking',
    'cookingchannel',
    'cool',
    'coop',
    'corsica',
    'country',
    'coupon',
    'coupons',
    'courses',
    'cr',
    'credit',
    'creditcard',
    'creditunion',
    'cricket',
    'crown',
    'crs',
    'cruise',
    'cruises',
    'csc',
    'cu',
    'cuisinella',
    'cv',
    'cw',
    'cx',
    'cy',
    'cymru',
    'cyou',
    'cz',
    'dabur',
    'dad',
    'dance',
    'data',
    'date',
    'dating',
    'datsun',
    'day',
    'dclk',
    'dds',
    'de',
    'deal',
    'dealer',
    'deals',
    'degree',
    'delivery',
    'dell',
    'deloitte',
    'delta',
    'democrat',
    'dental',
    'dentist',
    'desi',
    'design',
    'dev',
    'dhl',
    'diamonds',
    'diet',
    'digital',
    'direct',
    'directory',
    'discount',
    'discover',
    'dish',
    'diy',
    'dj',
    'dk',
    'dm',
    'dnp',
    'do',
    'docs',
    'doctor',
    'dodge',
    'dog',
    'doha',
    'domains',
    'dot',
    'download',
    'drive',
    'dtv',
    'dubai',
    'duck',
    'dunlop',
    'duns',
    'dupont',
    'durban',
    'dvag',
    'dvr',
    'dz',
    'earth',
    'eat',
    'ec',
    'eco',
    'edeka',
    'edu',
    'education',
    'ee',
    'eg',
    'email',
    'emerck',
    'energy',
    'engineer',
    'engineering',
    'enterprises',
    'epost',
    'epson',
    'equipment',
    'er',
    'ericsson',
    'erni',
    'es',
    'esq',
    'estate',
    'esurance',
    'et',
    'etisalat',
    'eu',
    'eurovision',
    'eus',
    'events',
    'everbank',
    'exchange',
    'expert',
    'exposed',
    'express',
    'extraspace',
    'fage',
    'fail',
    'fairwinds',
    'faith',
    'family',
    'fan',
    'fans',
    'farm',
    'farmers',
    'fashion',
    'fast',
    'fedex',
    'feedback',
    'ferrari',
    'ferrero',
    'fi',
    'fiat',
    'fidelity',
    'fido',
    'film',
    'final',
    'finance',
    'financial',
    'fire',
    'firestone',
    'firmdale',
    'fish',
    'fishing',
    'fit',
    'fitness',
    'fj',
    'fk',
    'flickr',
    'flights',
    'flir',
    'florist',
    'flowers',
    'fly',
    'fm',
    'fo',
    'foo',
    'food',
    'foodnetwork',
    'football',
    'ford',
    'forex',
    'forsale',
    'forum',
    'foundation',
    'fox',
    'fr',
    'free',
    'fresenius',
    'frl',
    'frogans',
    'frontdoor',
    'frontier',
    'ftr',
    'fujitsu',
    'fujixerox',
    'fun',
    'fund',
    'furniture',
    'futbol',
    'fyi',
    'ga',
    'gal',
    'gallery',
    'gallo',
    'gallup',
    'game',
    'games',
    'gap',
    'garden',
    'gb',
    'gbiz',
    'gd',
    'gdn',
    'ge',
    'gea',
    'gent',
    'genting',
    'george',
    'gf',
    'gg',
    'ggee',
    'gh',
    'gi',
    'gift',
    'gifts',
    'gives',
    'giving',
    'gl',
    'glade',
    'glass',
    'gle',
    'global',
    'globo',
    'gm',
    'gmail',
    'gmbh',
    'gmo',
    'gmx',
    'gn',
    'godaddy',
    'gold',
    'goldpoint',
    'golf',
    'goo',
    'goodhands',
    'goodyear',
    'goog',
    'google',
    'gop',
    'got',
    'gov',
    'gp',
    'gq',
    'gr',
    'grainger',
    'graphics',
    'gratis',
    'green',
    'gripe',
    'grocery',
    'group',
    'gs',
    'gt',
    'gu',
    'guardian',
    'gucci',
    'guge',
    'guide',
    'guitars',
    'guru',
    'gw',
    'gy',
    'hair',
    'hamburg',
    'hangout',
    'haus',
    'hbo',
    'hdfc',
    'hdfcbank',
    'health',
    'healthcare',
    'help',
    'helsinki',
    'here',
    'hermes',
    'hgtv',
    'hiphop',
    'hisamitsu',
    'hitachi',
    'hiv',
    'hk',
    'hkt',
    'hm',
    'hn',
    'hockey',
    'holdings',
    'holiday',
    'homedepot',
    'homegoods',
    'homes',
    'homesense',
    'honda',
    'honeywell',
    'horse',
    'hospital',
    'host',
    'hosting',
    'hot',
    'hoteles',
    'hotels',
    'hotmail',
    'house',
    'how',
    'hr',
    'hsbc',
    'ht',
    'hu',
    'hughes',
    'hyatt',
    'hyundai',
    'ibm',
    'icbc',
    'ice',
    'icu',
    'id',
    'ie',
    'ieee',
    'ifm',
    'ikano',
    'il',
    'im',
    'imamat',
    'imdb',
    'immo',
    'immobilien',
    'in',
    'industries',
    'infiniti',
    'info',
    'ing',
    'ink',
    'institute',
    'insurance',
    'insure',
    'int',
    'intel',
    'international',
    'intuit',
    'investments',
    'io',
    'ipiranga',
    'iq',
    'ir',
    'irish',
    'is',
    'iselect',
    'ismaili',
    'ist',
    'istanbul',
    'it',
    'itau',
    'itv',
    'iveco',
    'iwc',
    'jaguar',
    'java',
    'jcb',
    'jcp',
    'je',
    'jeep',
    'jetzt',
    'jewelry',
    'jio',
    'jlc',
    'jll',
    'jm',
    'jmp',
    'jnj',
    'jo',
    'jobs',
    'joburg',
    'jot',
    'joy',
    'jp',
    'jpmorgan',
    'jprs',
    'juegos',
    'juniper',
    'kaufen',
    'kddi',
    'ke',
    'kerryhotels',
    'kerrylogistics',
    'kerryproperties',
    'kfh',
    'kg',
    'kh',
    'ki',
    'kia',
    'kim',
    'kinder',
    'kindle',
    'kitchen',
    'kiwi',
    'km',
    'kn',
    'koeln',
    'komatsu',
    'kosher',
    'kp',
    'kpmg',
    'kpn',
    'kr',
    'krd',
    'kred',
    'kuokgroup',
    'kw',
    'ky',
    'kyoto',
    'kz',
    'la',
    'lacaixa',
    'ladbrokes',
    'lamborghini',
    'lamer',
    'lancaster',
    'lancia',
    'lancome',
    'land',
    'landrover',
    'lanxess',
    'lasalle',
    'lat',
    'latino',
    'latrobe',
    'law',
    'lawyer',
    'lb',
    'lc',
    'lds',
    'lease',
    'leclerc',
    'lefrak',
    'legal',
    'lego',
    'lexus',
    'lgbt',
    'li',
    'liaison',
    'lidl',
    'life',
    'lifeinsurance',
    'lifestyle',
    'lighting',
    'like',
    'lilly',
    'limited',
    'limo',
    'lincoln',
    'linde',
    'link',
    'lipsy',
    'live',
    'living',
    'lixil',
    'lk',
    'llc',
    'loan',
    'loans',
    'locker',
    'locus',
    'loft',
    'lol',
    'london',
    'lotte',
    'lotto',
    'love',
    'lpl',
    'lplfinancial',
    'lr',
    'ls',
    'lt',
    'ltd',
    'ltda',
    'lu',
    'lundbeck',
    'lupin',
    'luxe',
    'luxury',
    'lv',
    'ly',
    'ma',
    'macys',
    'madrid',
    'maif',
    'maison',
    'makeup',
    'man',
    'management',
    'mango',
    'map',
    'market',
    'marketing',
    'markets',
    'marriott',
    'marshalls',
    'maserati',
    'mattel',
    'mba',
    'mc',
    'mckinsey',
    'md',
    'me',
    'med',
    'media',
    'meet',
    'melbourne',
    'meme',
    'memorial',
    'men',
    'menu',
    'meo',
    'merckmsd',
    'metlife',
    'mg',
    'mh',
    'miami',
    'microsoft',
    'mil',
    'mini',
    'mint',
    'mit',
    'mitsubishi',
    'mk',
    'ml',
    'mlb',
    'mls',
    'mm',
    'mma',
    'mn',
    'mo',
    'mobi',
    'mobile',
    'mobily',
    'moda',
    'moe',
    'moi',
    'mom',
    'monash',
    'money',
    'monster',
    'mopar',
    'mormon',
    'mortgage',
    'moscow',
    'moto',
    'motorcycles',
    'mov',
    'movie',
    'movistar',
    'mp',
    'mq',
    'mr',
    'ms',
    'msd',
    'mt',
    'mtn',
    'mtr',
    'mu',
    'museum',
    'mutual',
    'mv',
    'mw',
    'mx',
    'my',
    'mz',
    'na',
    'nab',
    'nadex',
    'nagoya',
    'name',
    'nationwide',
    'natura',
    'navy',
    'nba',
    'nc',
    'ne',
    'nec',
    'net',
    'netbank',
    'netflix',
    'network',
    'neustar',
    'new',
    'newholland',
    'news',
    'next',
    'nextdirect',
    'nexus',
    'nf',
    'nfl',
    'ng',
    'ngo',
    'nhk',
    'ni',
    'nico',
    'nike',
    'nikon',
    'ninja',
    'nissan',
    'nissay',
    'nl',
    'no',
    'nokia',
    'northwesternmutual',
    'norton',
    'now',
    'nowruz',
    'nowtv',
    'np',
    'nr',
    'nra',
    'nrw',
    'ntt',
    'nu',
    'nyc',
    'nz',
    'obi',
    'observer',
    'off',
    'office',
    'okinawa',
    'olayan',
    'olayangroup',
    'oldnavy',
    'ollo',
    'om',
    'omega',
    'one',
    'ong',
    'onl',
    'online',
    'onyourside',
    'ooo',
    'open',
    'oracle',
    'orange',
    'org',
    'organic',
    'origins',
    'osaka',
    'otsuka',
    'ott',
    'ovh',
    'pa',
    'page',
    'panasonic',
    'panerai',
    'paris',
    'pars',
    'partners',
    'parts',
    'party',
    'passagens',
    'pay',
    'pccw',
    'pe',
    'pet',
    'pf',
    'pfizer',
    'pg',
    'ph',
    'pharmacy',
    'phd',
    'philips',
    'phone',
    'photo',
    'photography',
    'photos',
    'physio',
    'piaget',
    'pics',
    'pictet',
    'pictures',
    'pid',
    'pin',
    'ping',
    'pink',
    'pioneer',
    'pizza',
    'pk',
    'pl',
    'place',
    'play',
    'playstation',
    'plumbing',
    'plus',
    'pm',
    'pn',
    'pnc',
    'pohl',
    'poker',
    'politie',
    'porn',
    'post',
    'pr',
    'pramerica',
    'praxi',
    'press',
    'prime',
    'pro',
    'prod',
    'productions',
    'prof',
    'progressive',
    'promo',
    'properties',
    'property',
    'protection',
    'pru',
    'prudential',
    'ps',
    'pt',
    'pub',
    'pw',
    'pwc',
    'py',
    'qa',
    'qpon',
    'quebec',
    'quest',
    'qvc',
    'racing',
    'radio',
    'raid',
    're',
    'read',
    'realestate',
    'realtor',
    'realty',
    'recipes',
    'red',
    'redstone',
    'redumbrella',
    'rehab',
    'reise',
    'reisen',
    'reit',
    'reliance',
    'ren',
    'rent',
    'rentals',
    'repair',
    'report',
    'republican',
    'rest',
    'restaurant',
    'review',
    'reviews',
    'rexroth',
    'rich',
    'richardli',
    'ricoh',
    'rightathome',
    'ril',
    'rio',
    'rip',
    'rmit',
    'ro',
    'rocher',
    'rocks',
    'rodeo',
    'rogers',
    'room',
    'rs',
    'rsvp',
    'ru',
    'rugby',
    'ruhr',
    'run',
    'rw',
    'rwe',
    'ryukyu',
    'sa',
    'saarland',
    'safe',
    'safety',
    'sakura',
    'sale',
    'salon',
    'samsclub',
    'samsung',
    'sandvik',
    'sandvikcoromant',
    'sanofi',
    'sap',
    'sapo',
    'sarl',
    'sas',
    'save',
    'saxo',
    'sb',
    'sbi',
    'sbs',
    'sc',
    'sca',
    'scb',
    'schaeffler',
    'schmidt',
    'scholarships',
    'school',
    'schule',
    'schwarz',
    'science',
    'scjohnson',
    'scor',
    'scot',
    'sd',
    'se',
    'search',
    'seat',
    'secure',
    'security',
    'seek',
    'select',
    'sener',
    'services',
    'ses',
    'seven',
    'sew',
    'sex',
    'sexy',
    'sfr',
    'sg',
    'sh',
    'shangrila',
    'sharp',
    'shaw',
    'shell',
    'shia',
    'shiksha',
    'shoes',
    'shop',
    'shopping',
    'shouji',
    'show',
    'showtime',
    'shriram',
    'si',
    'silk',
    'sina',
    'singles',
    'site',
    'sj',
    'sk',
    'ski',
    'skin',
    'sky',
    'skype',
    'sl',
    'sling',
    'sm',
    'smart',
    'smile',
    'sn',
    'sncf',
    'so',
    'soccer',
    'social',
    'softbank',
    'software',
    'sohu',
    'solar',
    'solutions',
    'song',
    'sony',
    'soy',
    'space',
    'spiegel',
    'sport',
    'spot',
    'spreadbetting',
    'sr',
    'srl',
    'srt',
    'st',
    'stada',
    'staples',
    'star',
    'starhub',
    'statebank',
    'statefarm',
    'statoil',
    'stc',
    'stcgroup',
    'stockholm',
    'storage',
    'store',
    'stream',
    'studio',
    'study',
    'style',
    'su',
    'sucks',
    'supplies',
    'supply',
    'support',
    'surf',
    'surgery',
    'suzuki',
    'sv',
    'swatch',
    'swiftcover',
    'swiss',
    'sx',
    'sy',
    'sydney',
    'symantec',
    'systems',
    'sz',
    'tab',
    'taipei',
    'talk',
    'taobao',
    'target',
    'tatamotors',
    'tatar',
    'tattoo',
    'tax',
    'taxi',
    'tc',
    'tci',
    'td',
    'tdk',
    'team',
    'tech',
    'technology',
    'tel',
    'telecity',
    'telefonica',
    'temasek',
    'tennis',
    'teva',
    'tf',
    'tg',
    'th',
    'thd',
    'theater',
    'theatre',
    'tiaa',
    'tickets',
    'tienda',
    'tiffany',
    'tips',
    'tires',
    'tirol',
    'tj',
    'tjmaxx',
    'tjx',
    'tk',
    'tkmaxx',
    'tl',
    'tm',
    'tmall',
    'tn',
    'to',
    'today',
    'tokyo',
    'tools',
    'top',
    'toray',
    'toshiba',
    'total',
    'tours',
    'town',
    'toyota',
    'toys',
    'tr',
    'trade',
    'trading',
    'training',
    'travel',
    'travelchannel',
    'travelers',
    'travelersinsurance',
    'trust',
    'trv',
    'tt',
    'tube',
    'tui',
    'tunes',
    'tushu',
    'tv',
    'tvs',
    'tw',
    'tz',
    'ua',
    'ubank',
    'ubs',
    'uconnect',
    'ug',
    'uk',
    'unicom',
    'university',
    'uno',
    'uol',
    'ups',
    'us',
    'uy',
    'uz',
    'va',
    'vacations',
    'vana',
    'vanguard',
    'vc',
    've',
    'vegas',
    'ventures',
    'verisign',
    'versicherung',
    'vet',
    'vg',
    'vi',
    'viajes',
    'video',
    'vig',
    'viking',
    'villas',
    'vin',
    'vip',
    'virgin',
    'visa',
    'vision',
    'vista',
    'vistaprint',
    'viva',
    'vivo',
    'vlaanderen',
    'vn',
    'vodka',
    'volkswagen',
    'volvo',
    'vote',
    'voting',
    'voto',
    'voyage',
    'vu',
    'vuelos',
    'wales',
    'walmart',
    'walter',
    'wang',
    'wanggou',
    'warman',
    'watch',
    'watches',
    'weather',
    'weatherchannel',
    'webcam',
    'weber',
    'website',
    'wed',
    'wedding',
    'weibo',
    'weir',
    'wf',
    'whoswho',
    'wien',
    'wiki',
    'williamhill',
    'win',
    'windows',
    'wine',
    'winners',
    'wme',
    'wolterskluwer',
    'woodside',
    'work',
    'works',
    'world',
    'wow',
    'ws',
    'wtc',
    'wtf',
    'xbox',
    'xerox',
    'xfinity',
    'xihuan',
    'xin',
    'कॉम',
    'セール',
    '佛山',
    'ಭಾರತ',
    '慈善',
    '集团',
    '在线',
    '한국',
    'ଭାରତ',
    '大众汽车',
    '点看',
    'คอม',
    'ভাৰত',
    'ভারত',
    '八卦',
    'موقع',
    'বাংলা',
    '公益',
    '公司',
    '香格里拉',
    '网站',
    '移动',
    '我爱你',
    'москва',
    'қаз',
    'католик',
    'онлайн',
    'сайт',
    '联通',
    'срб',
    'бг',
    'бел',
    'קום',
    '时尚',
    '微博',
    '淡马锡',
    'ファッション',
    'орг',
    'नेट',
    'ストア',
    '삼성',
    'சிங்கப்பூர்',
    '商标',
    '商店',
    '商城',
    'дети',
    'мкд',
    'ею',
    'ポイント',
    '新闻',
    '工行',
    '家電',
    'كوم',
    '中文网',
    '中信',
    '中国',
    '中國',
    '娱乐',
    '谷歌',
    'భారత్',
    'ලංකා',
    '電訊盈科',
    '购物',
    'クラウド',
    'ભારત',
    '通販',
    'भारतम्',
    'भारत',
    'भारोत',
    '网店',
    'संगठन',
    '餐厅',
    '网络',
    'ком',
    'укр',
    '香港',
    '诺基亚',
    '食品',
    '飞利浦',
    '台湾',
    '台灣',
    '手表',
    '手机',
    'мон',
    'الجزائر',
    'عمان',
    'ارامكو',
    'ایران',
    'العليان',
    'اتصالات',
    'امارات',
    'بازار',
    'پاکستان',
    'الاردن',
    'موبايلي',
    'بارت',
    'بھارت',
    'المغرب',
    'ابوظبي',
    'السعودية',
    'ڀارت',
    'كاثوليك',
    'سودان',
    'همراه',
    'عراق',
    'مليسيا',
    '澳門',
    '닷컴',
    '政府',
    'شبكة',
    'بيتك',
    'عرب',
    'გე',
    '机构',
    '组织机构',
    '健康',
    'ไทย',
    'سورية',
    '招聘',
    'рус',
    'рф',
    '珠宝',
    'تونس',
    '大拿',
    'みんな',
    'グーグル',
    'ελ',
    '世界',
    '書籍',
    'ഭാരതം',
    'ਭਾਰਤ',
    '网址',
    '닷넷',
    'コム',
    '天主教',
    '游戏',
    'vermögensberater',
    'vermögensberatung',
    '企业',
    '信息',
    '嘉里大酒店',
    '嘉里',
    'مصر',
    'قطر',
    '广东',
    'இலங்கை',
    'இந்தியா',
    'հայ',
    '新加坡',
    'فلسطين',
    '政务',
    'xperia',
    'xxx',
    'xyz',
    'yachts',
    'yahoo',
    'yamaxun',
    'yandex',
    'ye',
    'yodobashi',
    'yoga',
    'yokohama',
    'you',
    'youtube',
    'yt',
    'yun',
    'za',
    'zappos',
    'zara',
    'zero',
    'zip',
    'zippo',
    'zm',
    'zone',
    'zuerich',
    'zw',
];
const Dl = t(zl),
    Fl = e => {
        const t = document.createElement('textarea');
        (t.value = e),
            (t.style.position = 'fixed'),
            (t.style.top = '0'),
            (t.style.left = '0'),
            (t.style.opacity = '0'),
            document.body.appendChild(t),
            t.select(),
            document.execCommand('copy'),
            document.body.removeChild(t);
    },
    Ml = e => {
        navigator.clipboard ? navigator.clipboard.writeText(e).catch(Fl) : Fl(e);
    },
    Ol = e => {
        var t, r;
        const n = 'feade1d6c3f17748ae4c8d917a1e1068',
            a = Boolean(null == (t = e.properties.group[n]) ? void 0 : t.forwardTicketFormToHelpdesk),
            i =
                !!e.__unsafeProperties.license &&
                e.__unsafeProperties.license.licenseinboundForwardingToHelpdeskEnabled,
            s = null == (r = e.properties.license[n]) ? void 0 : r.hdLicenseID;
        return 'number' == typeof s && s > -1 && (a || i)
            ? 'helpdesk'
            : e.__unsafeProperties.group.offlineMessagesEnabled
              ? 'offline_message'
              : 'livechat';
    },
    Pl = (e, t) =>
        e().then(e =>
            fetch('https://api.helpdesk.com/v1/externalTickets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + e.accessToken,
                },
                body: JSON.stringify(t),
            })
                .then(e => (e.ok ? e.json() : Promise.reject()))
                .then(e => {
                    let { ID: t } = e;
                    return {
                        id: t,
                    };
                })
        ),
    jl = U ? 100 : 600,
    Rl = 300,
    Bl = U ? 300 : 5e3,
    $l = 304,
    ql = '16px',
    Ul = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                def: '6px',
                lg: '8px',
                md: '6px',
                none: '0px',
                round: '50%',
                sm: '4px',
                xl: '12px',
                xs: '2px',
                xxl: ql,
                xxxl: '24px',
                xxxxl: '32px',
            },
            Symbol.toStringTag,
            {
                value: 'Module',
            }
        )
    ),
    Nl = {
        25: '#EDDDBF',
        50: '#FFFAE5',
        100: '#F7C56E',
        500: '#FFD000',
        700: '#7B664C',
        800: '#3A352C',
    },
    Ll = {
        100: '#FF7C6B',
        500: '#D93311',
    },
    Vl = {
        100: '#77Cf9D',
        500: '#268750',
    },
    Hl = {
        100: '#FA6681',
        500: '#E30D34',
    },
    Gl = '#2000F0',
    Zl = {
        0: '#FFFFFF',
        15: '#F6F6F7',
        25: '#F0F0F0',
        50: '#F8F8F8',
        75: '#EDEDED',
        100: '#E3E3E3',
        200: '#D5D5D5',
        300: '#C0C0C0',
        400: '#B3B3B3',
        425: '#A6A4A4',
        450: '#949494',
        500: '#757575',
        525: '#707070',
        550: '#6E6E6E',
        600: '#575757',
        625: '#474747',
        650: '#333333',
        700: '#2E2E2E',
        800: '#252525',
        900: '#111111',
    },
    Wl = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                accent: Gl,
                brand: {
                    orange: '#FF5100',
                    black: '#1B1B20',
                },
                grayscale: Zl,
                green: Vl,
                red: Ll,
                ruby: Hl,
                webkitOutline: '#3B99FC',
                yellow: Nl,
            },
            Symbol.toStringTag,
            {
                value: 'Module',
            }
        )
    );

function Yl() {
    return (
        (Yl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                  }
                  return e;
              }),
        Yl.apply(null, arguments)
    );
}
const Ql = Yl({}, Wl, {
        border: Zl[500],
        borderSubtle: Zl[100],
        divider: Zl[100],
        error: Ll[500],
        errorContrast: Zl[0],
        errorSurface: '#FFFAFA',
        subtleFeedback: Nl[50],
        subtleFeedbackContrast: Zl[900],
        caution: '#FFAE21',
        cautionDimmed: '#FFF3D6',
        cautionContrast: Zl[900],
        cautionDesaturated: Nl[25],
        chatBackground: '#F6F6F7',
        success: Vl[500],
        successContrast: Zl[0],
        successSurface: Zl[0],
        primaryTextColor: Zl[900],
        secondaryTextColor: Zl[550],
        tertiaryTextColor: Zl[400],
        surface: Zl[0],
        surfaceVariant: Zl[25],
        surfaceVariantHover: '#E6E6E6',
        surfaceInteractive: Zl[50],
        surfaceInteractivePressed: Zl[600],
        surfaceDecorative: Zl[100],
        surfaceDimmed: '#E6E4E1',
        surfaceFade: Zl[15],
        hintSurface: Zl[800],
        floatSurface: Zl[0],
        pressedElement: Zl[300],
        notification: Hl[500],
        notificationContrast: Zl[0],
        widgetBackground: Zl[50],
        disabled: Zl[100],
        disabledContrast: Zl[600],
        inactiveElement: Zl[450],
        formIconColor: Zl[50],
        trademarkFooterText: Zl[600],
        itemHover: Zl[625],
        successHover: '#2FA763',
        inactiveElementHover: Zl[425],
        secondaryButtonBackground: Zl[100],
        secondaryButtonBackgroundHover: Zl[200],
        primaryTimelineSurface: Zl[0],
        decorations: {
            decorOne: '#FFDAB9',
            decorTwo: '#D9CCFA',
            decorThree: '#FACCCC',
            decorFour: '#F4F791',
            decorFive: '#F1C9FC',
        },
    }),
    Jl = Yl({}, Wl, {
        border: Zl[600],
        borderSubtle: Zl[650],
        divider: Zl[700],
        error: Ll[100],
        errorContrast: Zl[900],
        errorSurface: '#570404',
        subtleFeedback: Nl[800],
        subtleFeedbackContrast: Nl[100],
        caution: Nl[100],
        cautionDimmed: '#322B24',
        cautionContrast: Zl[900],
        cautionDesaturated: Nl[700],
        chatBackground: '#1A1A1A',
        success: Vl[100],
        successContrast: Zl[900],
        successSurface: '#042602',
        primaryTextColor: Zl[0],
        secondaryTextColor: Zl[400],
        tertiaryTextColor: Zl[600],
        surface: Zl[800],
        surfaceVariant: Zl[700],
        surfaceVariantHover: '#333333',
        surfaceInteractive: Zl[700],
        surfaceInteractivePressed: Zl[400],
        surfaceDecorative: Zl[700],
        surfaceDimmed: '#1F1E1D',
        surfaceFade: Zl[700],
        hintSurface: Zl[550],
        floatSurface: Zl[700],
        pressedElement: Zl[600],
        notification: Hl[100],
        notificationContrast: Zl[900],
        widgetBackground: Zl[900],
        disabled: Zl[700],
        disabledContrast: Zl[400],
        inactiveElement: Zl[600],
        formIconColor: Zl[900],
        trademarkFooterText: Zl[400],
        itemHover: Zl[525],
        successHover: '#99DBB5',
        inactiveElementHover: Zl[800],
        secondaryButtonBackground: Zl[650],
        secondaryButtonBackgroundHover: Zl[625],
        primaryTimelineSurface: Zl[800],
        decorations: {
            decorOne: '#D7650F',
            decorTwo: '#400CC6',
            decorThree: '#AF3C3C',
            decorFour: '#ACB125',
            decorFive: '#831AA2',
        },
    }),
    Xl = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                dark: Jl,
                light: Ql,
            },
            Symbol.toStringTag,
            {
                value: 'Module',
            }
        )
    ),
    Kl = U ? 500 : 15e3,
    ec = U ? 100 : 1e3,
    tc = U ? 100 : 600,
    rc = Kl,
    nc = 200,
    ac = 60,
    ic = 360,
    sc = 130,
    oc = ql,
    lc = (U ? 300 : 5e3) - ec,
    cc = tc + Kl,
    uc = U ? 500 : 15e3,
    dc = U ? 100 : 1e3,
    pc = U ? 100 : 600,
    hc = uc,
    fc = 200,
    gc = 60,
    mc = 360,
    _c = 95,
    bc = ql,
    yc = (U ? 300 : 5e3) - dc,
    vc = pc + uc,
    wc = 2;

function kc(e, t) {
    return ne(te(e), ae(e.getState()), ie(t), Y(Ge));
}
const xc = (e, t) =>
        ne(
            kc(e, e => e.application.readyState),
            g(e => e === t),
            w(1),
            ce
        ),
    Sc = () => {
        if ((e = window.matchMedia) && /native code/.test(String(e))) {
            return !window.matchMedia('(hover: none)').matches;
        }
        var e;
        return !0;
    },
    Ic = () =>
        ze(navigator.platform, ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod']) &&
        /CriOS/.test(navigator.userAgent),
    Ec = () =>
        /mobile/gi.test(navigator.userAgent) && !('MacIntel' === navigator.platform && ze('iPad', navigator.userAgent)),
    Tc = () => Ec() || ('MacIntel' === navigator.platform && navigator.maxTouchPoints > 0),
    Ac = () => ze('Chrome', navigator.userAgent),
    Cc = () => {
        const e = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        return e ? parseInt(e[2], 10) : 0;
    },
    zc = () => /Firefox/.test(navigator.userAgent),
    Dc = () => !Ac() && /Safari/.test(navigator.userAgent),
    Fc = 200,
    Mc = 8,
    Oc = 8,
    Pc = 8,
    jc = 360,
    Rc = 8,
    Bc = 20,
    $c = {
        recommendations: {
            width: '392px',
            height: '286px',
        },
        mobileRecommendations: {
            width: '100%',
            height: '286px',
        },
    },
    qc = (e, t) => {
        e.getApplicationState('recommendations').products.length > 0 ||
            ne(
                kc(e, e => e.application.page),
                he(t => Zd(e, t.url)),
                ie(() => tf(e)),
                g(e => e.length >= Ls),
                Q(e => {
                    return re(
                        Promise.all([
                            Promise.resolve(e),
                            ((r = t.call),
                            (n = e),
                            r('/v1.0/recommendations/match', 'POST', {
                                pages: n,
                            })),
                        ])
                    );
                    var r, n;
                }),
                w(1),
                se(t => {
                    let [r, n] = t;
                    return ne(
                        xc(e, Gs),
                        ie(() => [r, n])
                    );
                }),
                T(t => {
                    let [r, n] = t;
                    return (function (e, t, r) {
                        let { products: n, id: a } = t;
                        void 0 === r && (r = !0);
                        const { recommendations: i } = e.getApplicationState(),
                            s = null == i ? void 0 : i.hiddenIds.includes(a),
                            o = c({}, i, {
                                id: a,
                                products: n,
                            });
                        if (
                            (e.setApplicationState({
                                recommendations: o,
                            }),
                            !s)
                        ) {
                            const t = !r;
                            e.setApplicationState({
                                recommendations: c({}, o, {
                                    hasSeen: t,
                                    isVisible: t,
                                }),
                            }),
                                Nd(
                                    e,
                                    {},
                                    {
                                        scheduleRerender: t,
                                    }
                                ),
                                Nc(e, 'recommendations');
                        }
                    })(e, {
                        products: n,
                        id: 'h=' + r.join(',') + '&t=' + new Date().getTime(),
                    });
                })
            );
    },
    Uc = {
        visitorCounter: -1,
        recommendations: -1,
        googleReviews: -1,
        contactInvitation: -1,
        chatBotGreeting: -1,
    },
    Nc = (e, t) => {
        var r;
        if ('recommendations' === t)
            return (
                Nd(
                    e,
                    {
                        eventsQueue: [t],
                    },
                    {
                        scheduleRerender: !1,
                    }
                ),
                Vd(e, {
                    transitionState: 'hidden',
                    hidden: !0,
                }),
                Ld(e, {
                    transitionState: 'hidden',
                    hidden: !0,
                }),
                Hd(e, {
                    transitionState: 'hidden',
                    hidden: !0,
                }),
                void Gd(e, {
                    transitionState: 'hidden',
                    hidden: !0,
                })
            );
        const n = null != (r = e.getView('minimized').eventsQueue) ? r : [];
        Nd(
            e,
            {
                eventsQueue: [].concat(n, [t]),
            },
            {
                scheduleRerender: !1,
            }
        );
    },
    Lc = (e, t) => {
        var r;
        const n = null != (r = e.getView('minimized').eventsQueue) ? r : [];
        Nd(
            e,
            {
                eventsQueue: n.filter(e => e !== t),
            },
            {
                scheduleRerender: !1,
            }
        );
    },
    Vc = () => {
        Object.values(Uc).forEach(e => window.clearTimeout(e));
    },
    Hc = (e, t) => {
        function r(t) {
            return () => {
                e.emit('resize-to-theme-size'), e.once('resize-to-theme-size-done', t);
            };
        }
        Vc();
        const n = 'visitorCounter' === t && Boolean(e.getApplicationState('googleReviews')),
            a = e.getApplicationState('contactInvitation').hasSeen;
        switch (t) {
            case 'visitorCounter':
                Uc.visitorCounter = window.setTimeout(
                    r(() => {
                        Ld(e, {
                            transitionState: 'shown',
                        }),
                            (Uc.visitorCounter = window.setTimeout(() => {
                                Ld(e, {
                                    transitionState: 'hidden',
                                });
                            }, vc));
                    }),
                    n ? 0 : yc
                );
                break;
            case 'recommendations':
                (e => {
                    const t = Ec(),
                        r = t ? $c.mobileRecommendations : $c.recommendations,
                        n = e.getApplicationState('recommendations');
                    if (n.hidden) return;
                    Nd(e, {
                        resizeBubbleAnimation: 'shrink',
                    }),
                        e.emit(
                            'resize-request',
                            c({}, r, {
                                maximized: !1,
                                ignoreHorizontalOffset: t,
                            })
                        ),
                        e.once('resize-request-done', () =>
                            e.setApplicationState({
                                recommendations: c({}, n, {
                                    isVisible: !0,
                                    hasSeen: !0,
                                    animation: 'show',
                                }),
                            })
                        );
                })(e);
                break;
            case 'googleReviews':
                Uc.googleReviews = window.setTimeout(
                    r(() => {
                        Vd(e, {
                            transitionState: 'shown',
                        }),
                            (Uc.googleReviews = window.setTimeout(() => {
                                Vd(e, {
                                    transitionState: 'hidden',
                                });
                            }, cc));
                    }),
                    lc
                );
                break;
            case 'contactInvitation':
                Uc.contactInvitation = window.setTimeout(
                    r(() => {
                        Hd(e, {
                            transitionState: 'shown',
                        });
                    }),
                    a ? 0 : Bl
                );
                break;
            case 'chatBotGreeting':
                Uc.chatBotGreeting = window.setTimeout(
                    r(() => {
                        Gd(e, {
                            transitionState: 'shown',
                        });
                    }),
                    0
                );
                break;
            default:
                return;
        }
    },
    Gc = e => {
        ne(
            xc(e, Zs),
            se(() =>
                kc(e, () =>
                    (e => {
                        const t = e.getView('minimized').eventsQueue;
                        return null != t && t.length ? t[0] : null;
                    })(e)
                )
            ),
            g(t => {
                if (!t || !Gh(e, 'minimized')) return !1;
                const r = e.getApplicationState(t);
                return !!r && !r.isVisible;
            }),
            T(t => {
                Hc(e, t);
            })
        ),
            ne(
                kc(e, e => e.application.visibility.state),
                g(e => 'maximized' === e),
                T(Vc)
            ),
            ne(
                kc(e, () => {
                    var t;
                    return null == (t = e.getApplicationState('visitorCounter')) ? void 0 : t.transitionState;
                }),
                g(e => 'hidden' === e),
                T(() => {
                    Lc(e, 'visitorCounter');
                })
            ),
            ne(
                kc(e, () => {
                    var t;
                    return null == (t = e.getApplicationState('googleReviews')) ? void 0 : t.transitionState;
                }),
                g(e => 'hidden' === e),
                T(() => {
                    Lc(e, 'googleReviews');
                })
            ),
            ne(
                kc(e, e => {
                    var t, r;
                    return null != (t = null == (r = e.application.recommendations) ? void 0 : r.hiddenIds) ? t : [];
                }),
                g(t => {
                    const r = e.getApplicationState('recommendations');
                    return r && t.includes(r.id);
                }),
                T(() => {
                    Lc(e, 'recommendations');
                })
            ),
            ne(
                kc(e, () => {
                    var t;
                    return null == (t = e.getApplicationState('contactInvitation')) ? void 0 : t.transitionState;
                }),
                g(e => 'hidden' === e),
                T(() => {
                    Lc(e, 'contactInvitation');
                })
            ),
            ne(
                kc(e, () => {
                    var t;
                    return null == (t = e.getApplicationState('chatBotGreeting')) ? void 0 : t.transitionState;
                }),
                g(e => 'hidden' === e),
                T(() => {
                    Lc(e, 'chatBotGreeting');
                })
            );
    },
    Zc = 16,
    Wc = 24,
    Yc = 8,
    Qc = 60,
    Jc = 8,
    Xc = 60,
    Kc = 296,
    eu = 228,
    tu = U ? 0 : 400,
    ru = {
        width: '320px',
        height: '116px',
    },
    nu = 100,
    au = {
        width: '320px',
        height: '186px',
    },
    iu = 230,
    su = U ? 0 : 150,
    ou = (e, t) =>
        e
            .filter(e => e.serverName in t)
            .map(e => ({
                type: e.type,
                label: e.label,
                value: e.options
                    ? be(t[e.serverName])
                          .map(t => ve(e => e.originalValue === t, e.options).label)
                          .join(', ')
                    : t[e.serverName],
            })),
    lu = (e, t, r, n) => {
        e.emit('on_' + t + '_survey_submitted', {
            form_data: ou(r, n),
        });
    },
    cu = (e, t, r) => {
        lu(e, 'prechat', t, r);
    },
    uu = (e, t, r) => {
        lu(e, 'postchat', t, r);
    },
    du = (e, t) => {
        e.emit('on_rating_comment_submitted', t);
    },
    pu = (e, t) => {
        e.emit('on_rating_submitted', null === t ? 'none' : t);
    },
    hu = (e, t, r) => {
        e.emit('on_message', {
            text: t.properties.text,
            timestamp: r / 1e3,
            user_type: 'visitor',
            visitor_name: e.getSessionUser().name,
        });
    },
    fu = (e, t, r, n) => {
        let {
            id: a,
            text: i,
            visitor: { email: s, name: o },
            subject: l,
        } = n;
        const c = {
            form_data: ou(t, r),
            ticket_id: a,
            text: i,
            visitor_name: o,
            visitor_email: s,
        };
        l && (c.ticket_subject = l), e.emit('on_ticket_created', c);
    },
    gu = ['type', 'license', 'organizationId'],
    mu = V() ? window.localStorage : H,
    _u = '_livechat_has_visited',
    bu = [/sendURLToGuardwareProxy/i, /safari-extension:\/\//],
    yu = !('true' === mu.getItem(_u));
mu.setItem(_u, 'true');
const vu = (e, t, r, n) => {
        const { timeZone: a } = new Intl.DateTimeFormat().resolvedOptions(),
            i = (null == n ? void 0 : n.license) || sp(),
            o = op(),
            l = c(
                {
                    type: e + '_' + r,
                },
                i
                    ? {
                          license: i,
                      }
                    : {},
                o
                    ? {
                          organizationId: o,
                      }
                    : {},
                {
                    userAgent: navigator.userAgent,
                    mobile: Ec(),
                    timeZone: String(a),
                    logVersion: '2024-11-07',
                    firstTimeVisitor: yu,
                    severity: t,
                    lc_env: 'production',
                },
                n
            );
        if (a) {
            const [e] = a.split('/');
            e !== a && (l.timeZoneArea = String(e));
        }
        return (e => {
            let { type: t, license: r, organizationId: n } = e,
                a = u(e, gu);
            if (window.location.href.includes('openwidget.com')) return Promise.resolve();
            const i = c(
                {},
                r
                    ? {
                          licence_id: r.toString(),
                      }
                    : {},
                n
                    ? {
                          organization_id: n,
                      }
                    : {},
                {
                    event_id: t,
                    message: JSON.stringify(a),
                }
            );
            return Bs('https://applog.livechatinc.com/logs', {
                method: 'POST',
                headers: {
                    Accept: '*/*',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: R(i),
            })
                .then(() => Promise.resolve())
                .catch(s);
        })(l);
    },
    wu = function (e, t, r, n) {
        void 0 === n && (n = 'chat_widget');
        const a = {};
        var i;
        if (
            (t instanceof Error
                ? ((a.errorMessage = t.message), (a.stack = t.stack), (a.code = t.code))
                : (a.errorMessage = JSON.stringify({
                      error: t,
                  })),
            (i = a),
            !bu.some(e => e.test(i.errorMessage + ' ' + i.stack)))
        )
            return (
                ge(r) ||
                    (r = {
                        meta: JSON.stringify({
                            info: r,
                        }),
                    }),
                vu(n, 'Error', e, c({}, r, a))
            );
    },
    ku = function (e, t, r) {
        return void 0 === r && (r = 'chat_widget'), vu(r, 'Informational', e, t);
    },
    xu = e => vu('chat_widget', 'Notice', e),
    Su = e => ku('chat_started', e),
    Iu = e => ku('chat_rated', e),
    Eu = e => ku('widget_opened', e),
    Tu = (e, t) => ku('potential_connection_problem_' + e, t),
    Au = () =>
        Ce('webkit.messageHandlers.iosMobileWidget.postMessage', window)
            ? 'ios'
            : !!Ce('androidMobileWidget.postMessage', window) && 'android',
    Cu = e => window.androidMobileWidget.postMessage(JSON.stringify(e)),
    zu = e => window.webkit.messageHandlers.iosMobileWidget.postMessage(e),
    Du = (() => {
        const e = Au();
        return 'android' === e ? Cu : 'ios' === e ? zu : null;
    })(),
    Fu = () => Boolean(Au()),
    Mu = e => {
        Du &&
            (Du({
                messageType: 'uiReady',
            }),
            e.on('add_event', t => {
                let { event: r } = t;
                if ('message' !== r.type) return;
                const n = e.getUser(r.author).name;
                Du({
                    messageType: 'newMessage',
                    text: r.properties.text,
                    id: r.id,
                    timestamp: r.timestamp,
                    author: {
                        name: n,
                    },
                });
            }),
            e.on('mobile_wrapper_minimize_intent', () => {
                Du({
                    messageType: 'hideChatWindow',
                });
            }));
    },
    Ou = {
        light: {
            maxModifier: 0.7,
        },
        dark: {
            maxModifier: 0.5,
        },
    };

function Pu(e, t, r) {
    return Qo(e, r) > Qo(t, r) ? e : t;
}
const ju = function (e, t, r) {
        void 0 === r && (r = 0);
        const n = Qo(e, t),
            a = pp(t),
            { maxModifier: i } = Ou[a ? 'light' : 'dark'];
        if (r >= 5) return e;
        const s = i - (n / 4.5) * 0.5;
        if (n >= 4.5) return e;
        const o = a ? Go(s, e) : Xo(s, e);
        return Qo(o, t) >= 4.5 ? o : ju(o, t, r + 1);
    },
    Ru = (e, t, r) => {
        const n = hp(e) ? Xo : Go;
        return Wo(r, n(t, e));
    },
    Bu = (e, t) => {
        const r = e.variant || 'light',
            n = Xl[r],
            a = e.customJson || {},
            { agentbarBackgroundColor: i, agentMessageColorBackground: s } = e,
            o = hp(e.titlebarBackgroundColor) ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.065)',
            l = hp(i) ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.05)',
            c = hp(i) ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)',
            u = hp(i) ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.1)',
            d = Jl.primaryTextColor,
            p = Ql.primaryTextColor,
            h = Pu(d, p, e.ctaColor),
            f = ju(e.ctaColor, n.surface),
            g = vp(s),
            m = t ? n.chatBackground : e.backgroundColor,
            _ = Pu(d, p, m),
            b = Ru(m, 0.1, 0.3),
            y = Ru(m, 0.15, 0.3),
            v = Pu(d, p, b);
        return je(
            {
                name: e.name,
                variant: r,
                iconTheme: e.name,
                showMessageAvatar: 'modern' !== e.name,
                colors: {
                    agentBarText: e.agentbarText,
                    agentBarBackground: i,
                    cta: e.ctaColor,
                    ctaText: h,
                    minimizedIcon: e.minimizedColorIcon,
                    minimizedBackground: e.minimizedColorBackground,
                    background: m,
                    visitorMessageText: e.visitorMessageColorText,
                    visitorMessageBackground: e.visitorMessageColorBackground,
                    systemMessage: e.systemMessageColor,
                    agentMessageBackground: s,
                    agentMessageText: e.agentMessageColorText,
                    minimizedText: e.minimizedColorText,
                    titleBarText: e.titlebarText,
                    titleBarBackgroundColor: e.titlebarBackgroundColor,
                    quickRepliesColor: f,
                    lighterOppositeTitleBarColor: o,
                    decorativeOppositeAgentBarColor: l,
                    lighterOppositeAgentBarColor: c,
                    codeBlockBackgroundColor: g,
                    adjustedChatBackground: b,
                    adjustedChatBackgroundHover: y,
                    adjustedChatBackgroundTextColor: v,
                },
                AgentBar: {
                    css: {
                        background: i,
                        color: e.agentbarText,
                    },
                    IconButton: {
                        css: {
                            background: {
                                default: 'transparent',
                                active: c,
                            },
                        },
                    },
                },
                Form: {
                    IconButton: {
                        css: {
                            background: {
                                default: 'rgba(0, 0, 0, 0.05)',
                                active: e.ctaColor,
                            },
                            color: {
                                default: n.formIconColor,
                                active: h,
                            },
                        },
                    },
                },
                ChatSummary: {
                    Icon: {
                        color: e.minimizedColorIcon,
                    },
                },
                Maximized: {
                    css: {
                        background: m,
                    },
                },
                Message: {
                    own: {
                        Bubble: {
                            css: {
                                background: 'modern' === e.name ? 'transparent' : e.visitorMessageColorBackground,
                                color: e.visitorMessageColorText,
                            },
                        },
                    },
                    system: {
                        Bubble: {
                            css: {
                                color: e.systemMessageColor,
                            },
                        },
                    },
                    Bubble: {
                        css: {
                            background: 'modern' === e.name ? 'transparent' : s,
                            color: e.agentMessageColorText,
                        },
                    },
                    css: {
                        color: e.systemMessageColor,
                    },
                },
                TypingIndicator: {
                    css: {
                        color: e.systemMessageColor,
                    },
                },
                Minimized: {
                    MinimizedBubble: {
                        css: {
                            color: e.minimizedColorText,
                            backgroundColor: {
                                default: e.minimizedColorBackground,
                                hasAvatar: 'transparent',
                            },
                        },
                        Icon: {
                            color: e.minimizedColorIcon,
                        },
                    },
                    MinimizedBar: {
                        css: {
                            color: e.minimizedColorText,
                            backgroundColor: e.minimizedColorBackground,
                        },
                        Icon: {
                            color: e.minimizedColorIcon,
                        },
                    },
                },
                TitleBar: {
                    css: {
                        background: 'modern' === e.name ? e.titlebarBackgroundColor : 'transparent',
                        color: 'modern' === e.name ? e.titlebarText : _,
                    },
                    HourGlassLabel: {
                        css: {
                            backgroundColor: l,
                        },
                    },
                },
                DividerLabel: {
                    css: {
                        color: e.systemMessageColor,
                        borderColor: u,
                    },
                },
                TextComposer: {
                    IconButton: {
                        css: {
                            background: {
                                active: e.ctaColor,
                            },
                        },
                        active: {
                            Icon: {
                                color: h,
                            },
                        },
                    },
                },
            },
            a
        );
    },
    $u = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
    qu = e =>
        e.replace(/\b(?:\d[ -]*?){8,15}((?:\d[ -]*?){4})\b/g, (e, t) => {
            const r = e.replace(/(-|\s)/g, '');
            return (e => {
                if (/[^0-9-\s]+/.test(e)) return !1;
                const t = e.replace(/\D/g, '');
                let r,
                    n = t.length,
                    a = 1,
                    i = 0;
                for (; n; ) (r = parseInt(t.charAt(--n), 10)), (i += (a ^= 1) ? $u[r] : r);
                return i && i % 10 == 0;
            })(r)
                ? '' +
                      (e => {
                          const t = e % 4,
                              r = t ? 4 - t : 0,
                              n = Math.floor(e / 4) + (t ? 1 : 0) - r - 1,
                              a = Ie(r, 'XXX'),
                              i = Ie(n, 'XXXX');
                          return a.concat(i).join('-').concat('-');
                      })(r.length) +
                      t
                : e;
        }),
    Uu = e => {
        let t = 0;
        return (
            e.split('').forEach(e => {
                const r = e.charCodeAt(0);
                (t = (t << 5) - t + r), (t &= t);
            }),
            t
        );
    },
    Nu = (e, t) => Uu(e) % (1 / t) == 0,
    Lu = ['fields'];
new ta().tlds(Dl);
const Vu = (e, t, r) => {
        const n = we(t => t.name === e, r);
        return -1 !== n
            ? et(
                  n,
                  c({}, r[n], {
                      defaultValue: t,
                  }),
                  r
              )
            : r;
    },
    Hu = (e, t, r) => {
        e.addEvent(
            t,
            c({}, r, {
                serverId: r.serverId || null,
            })
        );
    },
    Gu = (e, t, r) => {
        let { systemMessageType: n, textVariables: a, text: i } = r;
        Hu(e, t, {
            id: Ae(e.getIndexedEvents(Pi)),
            serverId: null,
            type: 'system_message',
            author: 'system',
            seen: !0,
            properties: M({
                systemMessageType: n,
                textVariables: a,
                defaultText: i,
            }),
        });
    },
    Zu = e => {
        e.updateChat(Pi, {
            active: !1,
            properties: {
                ended: !0,
                queued: !1,
                agentActivity: null,
            },
        }),
            e.setApplicationState({
                greetingsMuted: !1,
            });
    },
    Wu = e => {
        e.setApplicationState({
            eyeCatcher: c({}, e.getApplicationState().eyeCatcher, {
                hidden: !0,
            }),
        });
    },
    Yu = (e, t) => {
        const r = e.getApplicationState('lightbox'),
            n = c(
                {},
                r,
                t.link &&
                    t.link !== r.link && {
                        link: t.link,
                    },
                t.alt &&
                    t.alt !== r.alt && {
                        alt: t.alt,
                    },
                t.name &&
                    t.name !== r.name && {
                        name: t.name,
                    },
                t.state &&
                    t.state !== r.state && {
                        state: t.state,
                    }
            );
        e.setApplicationState({
            lightbox: n,
        });
    },
    Qu = e => {
        const t = Dh(e);
        if (!t || !t.properties.uniqueId || Fh(e, t)) return;
        const { invitation: r } = e.getApplicationState();
        var n;
        e.setApplicationState({
            invitation: c({}, r, {
                hiddenIds: [].concat(r.hiddenIds, [t.properties.uniqueId]),
            }),
        }),
            Nu(e.getSessionUser().serverId, 0.01) &&
                ((n = {
                    minimizedType: $p(e),
                    greetingId: t.properties.id,
                    greetingUniqueId: t.properties.uniqueId,
                    greetingType: t.properties.type,
                    greetingSubtype: t.properties.subtype,
                    greetingAddon: t.properties.addon || 'none',
                }),
                ku('greeting_dismissed', n)),
            e.emit('render-minimized');
    },
    Ju = e => {
        const t = Dh(e);
        if (!t || !t.properties.uniqueId || Mh(e)) return;
        const { invitation: r } = e.getApplicationState();
        e.setApplicationState({
            invitation: c({}, r, {
                displayedIds: [].concat(r.displayedIds, [t.properties.uniqueId]),
            }),
        });
    },
    Xu = function (e, t) {
        let { shouldMaintainModality: r = !0 } = void 0 === t ? {} : t;
        Gh(e, 'maximized') ||
            e.setApplicationState({
                visibility: c(
                    {},
                    e.getApplicationState('visibility'),
                    {
                        state: 'maximized',
                    },
                    !r && {
                        interactionModality: 'virtual',
                    }
                ),
            });
    },
    Ku = function (e, t, r) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        const { visibility: n, destroyed: a, isMinimizedForcefullyDisabled: i } = e.getApplicationState();
        (!t && 'hidden' === n.state && n.forced) ||
            'minimized' === n.state ||
            (!Hh(e) || Gp(Pi, e) || a || i
                ? e.setApplicationState({
                      visibility: c({}, e.getApplicationState('visibility'), {
                          state: 'hidden',
                      }),
                  })
                : r || !e.getView('Moment').show
                  ? (e.setApplicationState({
                        visibility: c({}, e.getApplicationState('visibility'), {
                            state: 'minimized',
                        }),
                    }),
                    Nd(e, {
                        bubbleHoverState: !1,
                    }))
                  : e.emit('request_close_moment'));
    },
    ed = e => {
        Gh(e, 'minimized') &&
            e.setApplicationState({
                visibility: {
                    state: 'hidden',
                },
            });
    },
    td = (e, t) => {
        let {
            id: r,
            active: n = !0,
            thread: a,
            previousThread: i,
            group: s,
            agent: o,
            queued: l = !1,
            timestamp: c,
        } = t;
        null === e.getChat(Pi).serverId && e.setChatServerId(Pi, r);
        const u = {
            ended: !1,
            queued: l,
            fakeAgentMessageId: null,
            lastThread: a,
            previousThread: i,
            currentAgent: o,
            timestamp: c,
            starting: !1,
        };
        'number' == typeof s && (u.group = s),
            Wu(e),
            e.updateChat(Pi, {
                active: n,
                properties: u,
            }),
            Fd(e),
            Md(e),
            e.setApplicationState({
                hidden: !1,
            }),
            e.getApplicationState('welcomeMessageId') &&
                e.setApplicationState({
                    welcomeMessageId: null,
                });
        const { readyState: d } = e.getApplicationState();
        d === Hs ||
            Gh(e, 'maximized') ||
            (e.setCurrentView('Chat'),
            Xu(e, {
                shouldMaintainModality: !1,
            }));
    },
    rd = function (e, t, r) {
        void 0 === r && (r = {});
        const n = Dp('creditCardMasking', e).enabled
            ? (e => qu(e.replaceAll(/\/\/(\S*):(\S*)@/g, '//****:****@')))(t)
            : t;
        return {
            type: ki(n) ? 'emoji' : 'message',
            thread: Kh(e),
            properties: M(
                c(
                    {
                        text: n,
                    },
                    r
                )
            ),
        };
    },
    nd = function (e, t, r, n) {
        void 0 === n && (n = void 0),
            e.sendEvent(
                t,
                rd(e, r, {
                    triggeredBy: n,
                })
            );
    },
    ad = (e, t, r) => {
        e.setApplicationState({
            messageDraft: r,
            initialMessageDraft: null,
        });
    },
    id = (e, t, r, n) => {
        const { quickReplies: a } = r.properties,
            i = a[n];
        r.properties.invitation
            ? Rd(e, r.id, i)
            : nd(e, t, i.text, {
                  type: 'quick_reply',
                  event: r.id,
                  button: i,
              });
    },
    sd = (e, t, r) => {
        const n = $h(e, t);
        n
            ? e.updateEvent(t, n.id, {
                  properties: r.properties,
              })
            : Hu(
                  e,
                  t,
                  c({}, r, {
                      seen: !0,
                      type: Bi,
                      author: e.getSessionUserId(),
                      id: Ae(e.getIndexedEvents(Pi)),
                  })
              ),
            n || pd(e),
            e.setCurrentView('Chat');
    },
    od = (e, t) => {
        const r = e.getChat(t).active,
            n = rh(e);
        return Boolean(n && !r);
    },
    ld = function (e, t, r, n) {
        void 0 === n && (n = void 0);
        const a = e.getApplicationState('invitation').current,
            i = e.getEvent(t, a),
            s = rd(
                e,
                r,
                c(
                    {
                        triggeredBy: n,
                    },
                    i && {
                        fromGreeting: c({}, Ue(['id', 'uniqueId'], i.properties)),
                    }
                )
            );
        if (!(Dp('preChatAfterGreeting', e).enabled && od(e, t)))
            return e.setCurrentView('Chat'), void e.sendEvent(t, s);
        sd(e, t, s);
    },
    cd = (e, t, r) => {
        if (of(e) && !Fp(e)) return;
        if (!od(e, t))
            return void e.setApplicationState({
                initialMessageDraft: r,
            });
        const n = rd(e, r);
        sd(e, t, n);
    },
    ud = (e, t, r) => {
        let { text: n, recipients: a = 'all' } = r;
        e.sendEvent(t, {
            type: 'custom_system_message',
            thread: Kh(e),
            properties: {
                text: n.trim(),
                recipients: a,
            },
        });
    },
    dd = (e, t) => {
        e.updateChat(Pi, {
            properties: {
                currentAgent: t,
            },
        });
    },
    pd = e => {
        if (!ih(e, 'prechat')) {
            const t = e.getView('Chat/prechat');
            Ed(e, t);
        }
    },
    hd = (e, t) => {
        const {
            properties: { rate: r, rateComment: n },
        } = e.getChat(Pi);
        let { fields: a } = t,
            i = u(t, Lu);
        r && (a = Vu('rating', r, a)),
            n && (a = Vu('rateComment', n, a)),
            Ed(
                e,
                c({}, i, {
                    fields: a,
                })
            );
    },
    fd = e => {
        const t = Cp(e);
        e.updateChat(t, {
            properties: {
                startChatAgainPending: !0,
            },
        });
    },
    gd = function (e, t, r) {
        let { chatId: n, forced: a } = void 0 === r ? {} : r;
        e.updateChat(Pi, {
            properties: {
                startChatAgainPending: !1,
            },
        }),
            Ad(e);
        const {
            properties: { lastThread: i },
            serverId: s,
        } = e.getChat(Pi);
        if (a || !Mp(e) || (s && n !== s)) e.flushChat(t), n && e.setChatServerId(Pi, n);
        else {
            Dd(e);
            const t = Np(e, Pi);
            t && e.removeEvent(Pi, t.id);
        }
        e.updateChat(t, {
            properties: {
                agentActivity: null,
                ended: !1,
                fakeAgentMessageId: null,
                lastThread: i,
                loadingHistory: !1,
                queued: !1,
                rate: null,
                rateComment: null,
                transcriptSentTo: null,
            },
        }),
            e.setApplicationState({
                greetingsMuted: !1,
            });
    },
    md = e => {
        e.updateChat(Pi, {
            properties: {
                rate: null,
                rateComment: null,
                transcriptSentTo: null,
            },
        });
    },
    _d = (e, t) => {
        var r, n, a, i, s;
        const o = t.getApplicationState('config'),
            l = null != (r = e.__unsafeProperties.enableTextApp) && r;
        t.setApplicationState({
            config: c({}, o, {
                features: c({}, o.features, {
                    homeScreen: {
                        enabled: gp(e),
                    },
                    utmParams: {
                        enabled: mp(e),
                    },
                    addToWebsiteButton: {
                        enabled: _p(e),
                    },
                    fileSharing: {
                        enabled: '1' === e.properties.license.core['attachments.enable_for_visitors'],
                    },
                    agentAvatar: {
                        enabled: e.__unsafeProperties.group.hasAgentAvatarsEnabled,
                    },
                    continuousChat: {
                        enabled: '1' === e.properties.license.core.continuous_chat_widget_enabled,
                    },
                    chatHistory: {
                        enabled: '1' === e.properties.license.core.customer_history_enabled,
                    },
                    rating: {
                        enabled: e.__unsafeProperties.group.ratingEnabled,
                    },
                    emailTranscript: {
                        enabled: e.__unsafeProperties.group.transcriptButtonEnabled,
                    },
                    logo: e.__unsafeProperties.group.logo.enabled
                        ? {
                              enabled: !0,
                              path: e.__unsafeProperties.group.logo.src,
                          }
                        : {
                              enabled: !1,
                              path: void 0,
                          },
                    linksPreview: {
                        enabled: e.__unsafeProperties.group.linksUnfurlingEnabled,
                    },
                    ticketForm: {
                        enabled: 'ticketForm' in e,
                        mode: e.__unsafeProperties.ticketFormMode || Ol(e),
                    },
                    queue: {
                        writingInQueueEnabled: fp(e),
                    },
                    preChatForm: {
                        enabled: 'prechatForm' in e,
                    },
                    preChatAfterGreeting: {
                        enabled: e.__unsafeProperties.group.prechatFormAfterGreetingEnabled,
                    },
                    creditCardMasking: {
                        enabled:
                            !!e.__unsafeProperties.license && e.__unsafeProperties.license.creditCardMaskingEnabled,
                    },
                    hideTrademark: {
                        enabled: e.__unsafeProperties.group.hasHiddenTrademark || !1 === e.isPoweredByEnabled,
                    },
                    disableSounds: {
                        enabled: !e.__unsafeProperties.group.hasSoundsEnabled,
                    },
                    minimized: {
                        enabled: !e.__unsafeProperties.group.disabledMinimized,
                    },
                    mobileMinimized: {
                        enabled: e.__unsafeProperties.group.hasCustomMobileSettings
                            ? !e.__unsafeProperties.group.disabledMinimizedOnMobile
                            : !e.__unsafeProperties.group.disabledMinimized,
                    },
                    hideOnInit: {
                        enabled: e.__unsafeProperties.group.hideOnInit,
                    },
                    textApp: {
                        enabled: l,
                    },
                    privacyPolicy: {
                        enabled:
                            null != (n = null == (a = e.__unsafeProperties.group.privacyPolicy) ? void 0 : a.enabled) &&
                            n,
                        text:
                            null != (i = null == (s = e.__unsafeProperties.group.privacyPolicy) ? void 0 : s.text)
                                ? i
                                : '',
                    },
                }),
                minimizedType: e.__unsafeProperties.group.minimizedType,
                mobileMinimizedType: e.__unsafeProperties.group.minimizedTypeOnMobile,
                theme: je(o.theme, Bu(e.__unsafeProperties.group.theme, l)),
                screenPosition: e.__unsafeProperties.group.screenPosition,
                mobileScreenPosition: e.__unsafeProperties.group.hasCustomMobileSettings
                    ? e.__unsafeProperties.group.screenPositionOnMobile
                    : e.__unsafeProperties.group.screenPosition,
                disabledOnMobile: e.__unsafeProperties.group.disabledOnMobile,
                nonProfitLicense: !!e.__unsafeProperties.license && e.__unsafeProperties.license.nonProfit,
                properties: e.properties,
                screenOffset: {
                    x: e.__unsafeProperties.group.offsetX,
                    y: e.__unsafeProperties.group.offsetY,
                },
            }),
        }),
            t.getApplicationState('config').features.disableSounds.enabled &&
                t.setApplicationState({
                    muted: !0,
                });
    },
    bd = (e, t, r) => {
        const n = e.getApplicationState('config');
        e.setApplicationState({
            config: c({}, n, {
                features: je(n.features, {
                    [t]: r,
                }),
            }),
        });
    },
    yd = (e, t) => {
        bd(e, t, {
            enabled: !1,
        });
    },
    vd = (e, t, r) => {
        bd(
            e,
            t,
            c(
                {
                    enabled: !0,
                },
                r
            )
        );
    },
    wd = (e, t) => {
        try {
            const r = JSON.parse(t).filter(e => {
                let { template_id: t } = e;
                return 'moment' === t || 'links' === t;
            });
            if (De(r)) return;
            vd(e, 'boosters', {
                items: r.map(e => {
                    if ('links' === e.template_id)
                        return {
                            id: e.id,
                            template: e.template_id,
                            links: e.links,
                        };
                    const t = {
                        type: e.action.type,
                        label: e.action.label,
                        url: e.action.url,
                    };
                    return {
                        id: e.id,
                        template: e.template_id,
                        title: e.title,
                        description: e.description,
                        icon: e.icon,
                        action: t,
                    };
                }),
            });
        } catch (r) {}
    },
    kd = (e, t, r) => {
        const n = {
            answered: !0,
        };
        r && ((n.fields = r.properties.fields), r.id && e.setEventServerId(Pi, t, r.id)),
            e.updateEvent(Pi, t, {
                properties: n,
            });
    },
    xd = (e, t) => {
        var r;
        t.properties.receivedFirstTime &&
            Nu(e.getSessionUser().serverId, 0.01) &&
            ((r = {
                minimizedType: $p(e),
                greetingId: t.properties.id,
                greetingUniqueId: t.properties.uniqueId,
                greetingType: t.properties.type,
                greetingSubtype: t.properties.subtype,
                greetingAddon: t.properties.addon || 'none',
            }),
            ku('greeting_displayed', r));
    },
    Sd = (e, t) => {
        const { defaultWidget: r, embedded: n, actingAsDirectLink: a, greetingsMuted: i } = e.getApplicationState();
        dd(e, t.author),
            'openwidget' === r &&
                (e => {
                    const t = e.getApplicationState('recommendations');
                    Vc(),
                        Nd(
                            e,
                            {
                                eventsQueue: [],
                            },
                            {
                                scheduleRerender: !1,
                            }
                        ),
                        Vd(e, {
                            transitionState: 'hidden',
                            hidden: !0,
                        }),
                        Ld(e, {
                            transitionState: 'hidden',
                            hidden: !0,
                        }),
                        Hd(e, {
                            transitionState: 'hidden',
                            hidden: !0,
                        }),
                        e.setApplicationState({
                            recommendations: c({}, t, {
                                isVisible: !1,
                                hiddenIds: [].concat(t.hiddenIds, [t.id]),
                                hidden: !0,
                            }),
                        });
                })(e),
            'bar' !== $p(e) && Wu(e),
            Fd(e),
            Od(e);
        const s = Dh(e);
        var o, l, u, d, p, h;
        if (s)
            if (
                ((h = {
                    minimizedType: $p(e),
                    greetingId: null == (o = s.properties) ? void 0 : o.id,
                    greetingUniqueId: null == (l = s.properties) ? void 0 : l.uniqueId,
                    greetingType: null == (u = s.properties) ? void 0 : u.type,
                    greetingSubtype: null == (d = s.properties) ? void 0 : d.subtype,
                    greetingAddon: (null == (p = s.properties) ? void 0 : p.addon) || 'none',
                }),
                ku('greeting_not_canceled', h),
                Tf(e))
            ) {
                if (Cf(e)) return;
                ep(e, s.id);
            } else e.removeEvent(Pi, s.id);
        be(t.properties.cards || t.properties.card)
            .filter(Boolean)
            .forEach(t => {
                t.title && (t.title = dp(e, t.title)),
                    t.subtitle && (t.subtitle = dp(e, t.subtitle)),
                    t.buttons &&
                        (t.buttons.forEach(e => (e.invitation = !0)),
                        (n && !a) ||
                            t.buttons.filter(e => 'url' === e.type && 'target' in e).forEach(e => (e.target = 'new')));
            }),
            Tf(e) && 'string' == typeof t.properties.addon && (t.properties.addon = null);
        const f = Ae(e.getIndexedEvents(Pi));
        Hu(
            e,
            Pi,
            c({}, t, {
                seen: !i,
                id: f,
                properties: c(
                    {},
                    t.properties,
                    t.properties.text && {
                        text: dp(e, t.properties.text),
                    }
                ),
            })
        ),
            e.updateChat(Pi, {
                properties: {
                    fakeAgentMessageId: f,
                },
            }),
            e.setApplicationState({
                invitation: c({}, e.getApplicationState('invitation'), {
                    current: f,
                }),
            }),
            t.properties.receivedFirstTime && e.setCurrentView('Chat'),
            Gh(e, 'maximized') ||
                (Fh(e, t) && t.properties.receivedFirstTime && !i
                    ? Xu(e, {
                          shouldMaintainModality: !1,
                      })
                    : Fh(e, t) || Ku(e, !0)),
            i || xd(e, t),
            e.emit('render-minimized');
    },
    Id = (e, t) => {
        const r = new Date().toISOString();
        e.setApplicationState({
            config: c({}, e.getApplicationState('config'), {
                features: c({}, e.getApplicationState('config').features, {
                    ticketForm: c({}, e.getApplicationState('config').features.ticketForm, {
                        additionalInfo: {
                            lastDisplayedReason: t,
                            lastDisplayedAt: r,
                        },
                    }),
                }),
            }),
        }),
            Ed(e, e.getView('Chat/ticketForm'));
    },
    Ed = (e, t) => {
        const r = {
            formType: t.type,
            formId: t.id,
            fields: t.fields,
        };
        if (ih(e)) {
            const { id: t } = e.getLastEvent(Pi);
            return e.updateEvent(Pi, t, {
                properties: r,
            });
        }
        const n = {
            id: Ae(e.getIndexedEvents(Pi)),
            type: 'form',
            author: 'system',
            properties: r,
        };
        if (t.id === oo.id) {
            const {
                properties: { lastThread: t },
            } = e.getChat(Pi);
            n.thread = t;
        }
        return Hu(e, Pi, n);
    },
    Td = (e, t) => {
        const r = e.getView('Moment');
        if (r.show && !t.wasTriggeredByGreeting)
            return r.data.url === t.url
                ? void e.emit('request_expand_moment')
                : void e.emit('request_expand_moment', {
                      nextMoment: t,
                  });
        Ip(t.url)
            ? (e.updateView('Moment', {
                  show: !0,
                  data: t,
              }),
              r.show && e.emit('request_expand_moment'))
            : Gu(e, Pi, {
                  text: 'Link attached to the button is invalid.',
              });
    },
    Ad = function (e, t) {
        void 0 === t && (t = !1),
            e.updateView('Moment', {
                show: !1,
                data: {},
            }),
            t && Ku(e);
    },
    Cd = (e, t) => {
        e.requestUpdateUser(e.getSessionUser().id, t);
    },
    zd = (e, t) => {
        const r = e.getSessionUser().id;
        var n;
        null !== e.getUser(r).serverId && e.clearUserServerId(r),
            e.setUserServerId(r, t),
            e.setApplicationState({
                testGroup: ((n = t), Uu(n) % 2 ? 'A' : 'B'),
            });
    },
    Dd = function (e, t) {
        void 0 === t && (t = void 0);
        const r = ah(e, t);
        r && e.removeEvent(Pi, r);
    },
    Fd = e => {
        Dd(e, 'prechat');
    },
    Md = e => {
        Dd(e, 'postchat');
    },
    Od = e => {
        Dd(e, 'ticket');
    },
    Pd = (e, t, r) => {
        const n = Ce('error.details.errors', e);
        if (!n) return void r();
        const a = n.reduce(
            (e, r) =>
                'requester.email' === r.field
                    ? c({}, e, {
                          email: t('invalid_email'),
                      })
                    : 'requester.name' === r.field
                      ? c({}, e, {
                            name: r.message,
                        })
                      : e,
            {}
        );
        De(a) ? r() : r(a);
    },
    jd = e => {
        const t = Ri,
            {
                properties: { lastThread: r },
            } = e.getChat(Pi);
        e.hasEvent(Pi, t) && e.removeEvent(Pi, t);
        !!Eh(e).find(e => 'form' === e.type && 'ask_for_email' === e.properties.formId) ||
            e.addEvent(Pi, {
                id: t,
                serverId: null,
                seen: !0,
                type: Ri,
                author: 'system',
                thread: r,
            });
    },
    Rd = function (e, t, r, n) {
        void 0 === n && (n = !1), ze(r.type, ['message', 'webview']) && Xu(e);
        const a = Cp(e);
        switch (
            (e.emit('rich_greeting_button_clicked', {
                button: r,
                event: e.getEvent(a, t),
            }),
            r.type)
        ) {
            case 'message':
                ld(e, a, r.text, {
                    event: t,
                    button: r,
                });
                break;
            case 'webview':
                Td(e, {
                    url: r.value,
                    wasTriggeredByGreeting: n,
                    source: n ? 'targeted_message' : 'rich_message',
                });
                break;
            case 'cancel':
                Ud(e, a, t);
                break;
            case 'copy':
                return void Ml(r.value);
        }
    },
    Bd = e => {
        e.emit('start_thread');
    },
    $d = function (e, t, r) {
        void 0 === r && (r = 'button');
        const n = e.getChat(Pi),
            a = ze('image', t.type);
        (ze(['clipboard', 'drag'], r) || Math.random() < 0.1) &&
            ku('file_upload_added', {
                uploadSource: r,
            }),
            e.sendEvent(
                Pi,
                {
                    type: 'file',
                    thread: n.properties.lastThread,
                    properties: {
                        name: t.name.substring(0, 255),
                        progress: 0,
                        finished: !1,
                        failed: !1,
                        failReason: null,
                        fileType: a ? 'image' : 'other',
                        url: a ? URL.createObjectURL(t) : null,
                        uploadSource: r,
                    },
                },
                {
                    file: t,
                }
            );
    },
    qd = function (e, t, r) {
        if (
            (void 0 === r &&
                (r = {
                    force: !1,
                }),
            Mh(e) &&
                zh(e) &&
                e.setApplicationState({
                    greetingsMuted: !0,
                }),
            Tf(e))
        ) {
            if (Cf(e) && !r.force) return;
            ep(e, t);
        } else e.removeEvent(Pi, t), setTimeout(() => e.emit('render-minimized'), 0);
    },
    Ud = (e, t, r) => {
        const n = e.getChat(t),
            { mobile: a } = e.getApplicationState(),
            i = e.getEvent(t, r);
        var s;
        !n.active &&
            i &&
            (Nu(e.getSessionUser().serverId, 0.01) &&
                ((s = {
                    mobile: a,
                    greetingId: i.properties.id,
                    greetingUniqueId: i.properties.uniqueId,
                    greetingType: i.properties.type,
                    greetingSubtype: i.properties.subtype,
                    greetingAddon: i.properties.addon || 'none',
                    minimizedType: $p(e),
                }),
                ku('greeting_canceled', s)),
            e.emit('request_cancel_greeting', i));
    },
    Nd = function (e, t, r) {
        let { scheduleRerender: n = !0 } = void 0 === r ? {} : r;
        const a = e.getView('minimized'),
            i = c({}, a, t);
        JSON.stringify(a) !== JSON.stringify(i) &&
            (e.updateView('minimized', i), n && setTimeout(() => e.emit('render-minimized'), 0));
    },
    Ld = (e, t) => {
        const { session: r, transitionState: n } = t,
            a = e.getApplicationState('visitorCounter') || {},
            i = c(
                {},
                a,
                r && {
                    session: r,
                },
                {
                    transitionState: n,
                },
                void 0 !== t.hidden
                    ? {
                          hidden: t.hidden,
                      }
                    : {},
                {
                    isVisible: !!n && 'hidden' !== n,
                }
            );
        e.setApplicationState({
            visitorCounter: i,
        }),
            e.emit('render-minimized');
    },
    Vd = (e, t) => {
        const { transitionState: r } = t,
            n = e.getApplicationState('googleReviews'),
            a = c(
                {},
                n,
                {
                    transitionState: r,
                },
                void 0 !== t.hidden
                    ? {
                          hidden: t.hidden,
                      }
                    : {},
                {
                    isVisible: !!r && 'hidden' !== r,
                }
            );
        e.setApplicationState({
            googleReviews: a,
        }),
            e.emit('render-minimized');
    },
    Hd = (e, t) => {
        var r;
        const n = e.getApplicationState('contactInvitation'),
            a = null != (r = t.transitionState) ? r : n.transitionState,
            i = c(
                {},
                n,
                {
                    transitionState: a,
                },
                void 0 !== t.hidden
                    ? {
                          hidden: t.hidden,
                      }
                    : {},
                {
                    isVisible: !!a && 'hidden' !== a,
                    hasSeen: void 0 !== t.hasSeen ? t.hasSeen : n.hasSeen,
                }
            );
        e.setApplicationState({
            contactInvitation: i,
        }),
            t.transitionState && e.emit('render-minimized');
    },
    Gd = (e, t) => {
        var r;
        const n = e.getApplicationState('chatBotGreeting'),
            a = null != (r = t.transitionState) ? r : n.transitionState,
            i = c({}, n, {
                transitionState: a,
                isVisible: !!a && 'hidden' !== a,
                text: void 0 !== t.text ? t.text : n.text,
                hidden: void 0 !== t.hidden ? t.hidden : n.hidden,
                hasSeen: void 0 !== t.hasSeen ? t.hasSeen : n.hasSeen,
            });
        e.setApplicationState({
            chatBotGreeting: i,
        }),
            t.transitionState && e.emit('render-minimized');
    },
    Zd = (e, t) => {
        const { history: r } = e.getApplicationState('locationHistory'),
            n = new Date().getTime();
        if (r.length && Me(r) === t)
            return void e.setApplicationState({
                locationHistory: {
                    history: r,
                    updatedAt: n,
                },
            });
        const a = [].concat(r.slice(-10), [t]);
        e.setApplicationState({
            locationHistory: {
                history: a,
                updatedAt: n,
            },
        });
    },
    Wd = Ye(500, e => {
        e.emit('scroll_to_bottom');
    }),
    Yd = e => {
        Wd(e);
    },
    Qd = e => {
        e.getApplicationState().isPreview ||
            (e.setApplicationState({
                privacyPolicyBannerState: 'closing',
            }),
            setTimeout(() => {
                e.setApplicationState({
                    privacyPolicyBannerState: 'hidden',
                });
            }, su));
    },
    Jd = (e, t) => {
        const { rate: r, rateComment: n } = t.properties,
            a = Me(t.events);
        return {
            id: Ae(e.getIndexedEvents(Pi)),
            author: 'system',
            own: !1,
            seen: !0,
            serverId: null,
            thread: t.id,
            timestamp: a.timestamp + 1,
            serverTimestamp: null,
            delivered: !1,
            failed: !1,
            type: 'form',
            properties: {
                formId: oo.id,
                answered: !0,
                answers: c(
                    {
                        rating: r,
                    },
                    n && {
                        rateComment: n,
                    }
                ),
            },
        };
    },
    Xd = (e, t) =>
        t.map(t =>
            ((e, t) => {
                if (!kf(t)) return t;
                const r = xf(t.events);
                if (Sf(r)) return t;
                const n = If(t.events);
                return Ef(e, t.id)
                    ? c({}, t, {
                          events: n,
                      })
                    : c({}, t, {
                          events: [].concat(n, [Jd(e, t)]),
                      });
            })(e, t)
        ),
    Kd = function (e, t, r) {
        let { state: n, closed: a, isPrivacyPolicyBannerClosing: i, closingGreetingId: s } = t;
        void 0 === r &&
            (r = {
                render: !0,
                scheduledRender: !1,
            }),
            e.setApplicationState({
                minimizedMessageInput: c(
                    {},
                    e.getApplicationState('minimizedMessageInput'),
                    {
                        state: n,
                        isVisible: 'hidden' !== n,
                    },
                    'boolean' == typeof a && {
                        closed: a,
                    },
                    'boolean' == typeof i && {
                        isPrivacyPolicyBannerClosing: i,
                    },
                    ('string' == typeof s || null === s) && {
                        closingGreetingId: s,
                    }
                ),
            }),
            r.render &&
                (r.scheduledRender ? setTimeout(() => e.emit('render-minimized'), 0) : e.emit('render-minimized'));
    },
    ep = (e, t) => {
        const { closingGreetingId: r, state: n } = e.getApplicationState('minimizedMessageInput');
        return r === t
            ? Promise.resolve()
            : (Kd(e, {
                  state: 'hidden' === n ? 'hiding' : 'classic',
                  closingGreetingId: t,
              }),
              new Promise(r =>
                  setTimeout(() => {
                      e.removeEvent(Pi, t),
                          Kd(
                              e,
                              {
                                  state: 'hidden' === n ? 'hidden' : 'classic',
                                  closingGreetingId: null,
                              },
                              {
                                  render: !0,
                                  scheduledRender: !0,
                              }
                          ),
                          r();
                  }, tu)
              ));
    },
    tp = (e, t) => {
        const r = ((e, t) => {
            if (t.id === e.getSessionUser().serverId || 'customer' === t.type) {
                const e = {
                    id: t.id,
                    type: 'customer',
                };
                return (
                    t.name && 'Customer' !== t.name && (e.name = t.name),
                    t.email && (e.email = t.email),
                    t.sessionFields && (e.properties = t.sessionFields),
                    e
                );
            }
            return {
                id: t.id,
                type: t.type,
                name: t.name,
                avatar: t.avatar ? 'https://' + Ga(t.avatar) : '',
                properties: c(
                    {
                        jobTitle: t.jobTitle,
                        isBot: t.isBot || !1,
                    },
                    t.botType && {
                        botType: t.botType,
                    }
                ),
            };
        })(e, t);
        if (e.getSessionUser().serverId !== r.id)
            return e.getUser(r.id)
                ? r.properties
                    ? (r.properties.isBot &&
                          e.updateUser(r.id, {
                              properties: {
                                  isBot: !0,
                              },
                          }),
                      void (
                          r.properties.botType &&
                          e.updateUser(r.id, {
                              properties: {
                                  botType: r.properties.botType,
                              },
                          })
                      ))
                    : void wu('no_parsed_user_properties', new Error(), {
                          meta: JSON.stringify({
                              user: t,
                              parsedUser: r,
                          }),
                      })
                : void e.addUser(r);
        e.updateUser(e.getSessionUserId(), Le(['name', 'email', 'properties'], r));
    },
    rp = (e, t) => {
        (Lp(e, Pi) && Gh(e, 'maximized')) ||
            (e.setApplicationState({
                disableSendingMessage: !1,
            }),
            e.updateChat(Pi, {
                properties: {
                    agentActivity: null,
                    awaitingWelcomeMessage: !1,
                },
            }),
            bh(e) ||
                rh(e) ||
                (ap(
                    e,
                    c({}, t, {
                        seen: !0,
                    })
                ),
                e.updateChat(Pi, {
                    properties: {
                        fakeAgentMessageId: t.id,
                    },
                })));
    },
    np = (e, t, r) => {
        'message' === t &&
            e.getApplicationState('readyState') !== Hs &&
            ((e, t) => {
                const {
                        author: r,
                        timestamp: n,
                        properties: { text: a },
                    } = e.getEvent(Pi, t),
                    i = e.getUser(r),
                    s = i.type,
                    o = {
                        text: a,
                        timestamp: Math.floor(n / 1e3),
                        user_type: 'agent' === s ? s : 'visitor',
                    };
                'agent' === s ? ((o.agent_name = i.name), (o.agent_login = i.id)) : (o.visitor_name = i.name),
                    e.emit('on_message', o);
            })(e, r);
    },
    ap = (e, t) => {
        Hu(e, Pi, t), np(e, t.properties.serverType, t.id);
    },
    ip = e => {
        const t = e.getApplicationState('isLargeWidget');
        e.setApplicationState({
            isLargeWidget: !t,
        }),
            e.emit('resize-to-theme-size', {
                animated: !0,
            });
    },
    sp = () => {
        const e = O(window.location.search);
        return parseInt(
            (() => {
                const e = String(window.location).match(/licen(?:s|c)e\/g?(\d+)/);
                return e ? e[1] : null;
            })() || e.license_id,
            10
        );
    },
    op = () => O(window.location.search).organization_id || '',
    lp = e => {
        const t = parseInt(e, 10);
        return t > -1 ? t : null;
    },
    cp = e => ('group' in e ? lp(e.group) : 'groups' in e ? lp(e.groups) : null),
    up = () =>
        '1' === Na('unique_groups', window.location.search) || '1' === Na('unique_group', window.location.search),
    dp = function (e, t, r) {
        var n;
        void 0 === r && (r = {});
        const a =
                void 0 !== r.name
                    ? r.name
                    : (e => {
                          const { name: t } = e.getSessionUser();
                          return t || e.localize('client');
                      })(e),
            i =
                void 0 !== r.agent
                    ? r.agent
                    : (() => {
                          try {
                              return (e => {
                                  const t = zp(Pi, e);
                                  if (!t) throw new Error('Current chat agent is undefined');
                                  if (!t.name) throw new Error('Current chat agent name is undefined');
                                  return t.name;
                              })(e);
                          } catch (t) {
                              return '';
                          }
                      })(),
            s = (null == (n = e.getSessionUser()) ? void 0 : n.properties) || {};
        return t
            .replace(/%name%/g, a)
            .replace(/%agent%/g, i)
            .replace(/%customer-field\.([^%]+)%/g, (e, t) => {
                var r;
                return null != (r = s[t]) ? r : '';
            });
    },
    pp = e => Yo(e) > 0.7,
    hp = e => Yo(e) <= 0.179,
    fp = e => {
        var t;
        return Boolean(
            null == (t = e.properties.license.bb9e5b2f1ab480e4a715977b7b1b4279) ? void 0 : t.messaging_in_queue_enabled
        );
    },
    gp = e => {
        var t;
        return Boolean(
            null == (t = e.properties.group.bb9e5b2f1ab480e4a715977b7b1b4279) ? void 0 : t.homescreen_enabled
        );
    },
    mp = e => {
        var t;
        return Boolean(
            null == (t = e.properties.license.bb9e5b2f1ab480e4a715977b7b1b4279) ? void 0 : t.utm_params_enabled
        );
    },
    _p = e => {
        var t;
        return Boolean(
            null == (t = e.properties.license.bb9e5b2f1ab480e4a715977b7b1b4279) ? void 0 : t.add_to_website_enabled
        );
    },
    bp = e => 'https://' + e + '.' + ('api' === e ? 'livechatinc' : 'livechat') + '.com',
    yp = () => {
        const e = document.createElement('video'),
            t = document.createElement('canvas');
        return navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia
            ? navigator.mediaDevices
                  .getDisplayMedia({
                      video: {
                          cursor: 'always',
                          displaySurface: 'browser',
                      },
                      audio: !1,
                  })
                  .then(t => ((e.srcObject = t), e.play()))
                  .then(
                      () =>
                          new Promise(e => {
                              setTimeout(e, 150);
                          })
                  )
                  .then(() => {
                      (t.width = e.videoWidth), (t.height = e.videoHeight);
                      t.getContext('2d').drawImage(e, 0, 0, e.videoWidth, e.videoHeight);
                      const r = ((e, t) => {
                          const [r, n] = e.split(','),
                              a = r.match(/:(.*?);/)[1],
                              i = atob(n);
                          let s = i.length;
                          const o = new Uint8Array(s);
                          for (; s--; ) o[s] = i.charCodeAt(s);
                          return new File([o], t, {
                              type: a,
                          });
                      })(t.toDataURL('image/png'), 'screenshot.png');
                      return e.srcObject.getTracks().forEach(e => e.stop()), r;
                  })
            : Promise.reject(new Error('Screen sharing is not supported'));
    },
    vp = e => (hp(e) ? Wo(0.1, Xo(0.1, e)) : Wo(0.2, Go(0.15, e)));

function wp(e, t, r) {
    if (e.startsWith(r)) return e;
    const n = [e, t],
        a = JSON.stringify(n),
        i = btoa(a),
        s = new URL('/v1.0/t/link', r);
    return s.searchParams.set('d', i), s.toString();
}

function kp(e) {
    return 'https://cdn.livechat-files.com/api/file/lc/main/default/logo/sz2tt7jpJ6VJwBo.png' === Xa(e);
}
const xp = e => {
        const { x: t, y: r, width: n, height: a } = e.target.getBoundingClientRect();
        return {
            x: t,
            y: r,
            width: n,
            height: a,
        };
    },
    Sp = (e, t) => {
        const { name: r, email: n } = me(e => ('string' == typeof e ? Xe(e) : e), Ue(['email', 'name'], e));
        return r === t('client')
            ? {
                  email: n,
              }
            : {
                  email: n,
                  name: r,
              };
    },
    Ip = e =>
        !!e &&
        (e => {
            const t = Wa(e);
            return !t || 'https:' === t || !1;
        })(Al(e)),
    Ep = e => {
        var t;
        return {
            id: e.id,
            name: null != (t = e.title) ? t : '',
            text: e.description,
            icon: e.icon,
            action: {
                label: e.action.label,
                type: 'button',
                value: e.action.url,
            },
            properties: {},
        };
    },
    Tp = (e, t) => {
        var r, n, a, i;
        const s = Dp('logo', e),
            o = s.enabled ? Xa(s.path) : '',
            l = Dp('boosters', e),
            u = null == (r = l.items) ? void 0 : r.find(e => Ns(e.id)),
            d = null == (n = l.items) ? void 0 : n.find(e => Us(e.id)),
            p = null == (a = l.items) ? void 0 : a.find(e => 'links' === e.id),
            h =
                null == (i = e.getApplicationState('config').properties.license.feade1d6c3f17748ae4c8d917a1e1068)
                    ? void 0
                    : i.hdLicenseID,
            f = 'number' == typeof h && h > -1,
            g = e.getApplicationState('config').properties.group,
            m = {
                apps: [],
                channels: [],
            };
        u &&
            m.apps.push(
                c({}, Ep(u), {
                    trademarkLink:
                        'https://www.knowledgebase.com/?utm_source=chat_window&utm_medium=referral&utm_campaign=home_screen',
                    trademarkLinkAnchor: 'Powered by KnowledgeBase',
                })
            ),
            d &&
                f &&
                (m.apps.push(Ep(d)),
                e.on('send_helpdesk_form', r => {
                    t(r)
                        .then(t => e.emit('send_helpdesk_form_success', t))
                        .catch(t => e.emit('send_helpdesk_form_error', t));
                }),
                e.addView('HelpdeskTicketForm', {
                    isLoading: !0,
                    hasFetchingError: !1,
                })),
            De(g) ||
                ye(Xs()).forEach(e => {
                    let [t, r] = e;
                    const n = g[r];
                    n &&
                        m.channels.push({
                            name: t,
                            url: n.button_url_v2,
                        });
                }),
            e.addView('Homescreen', m),
            vd(e, 'livechatIntegration', {
                name: 'livechat_integration',
                enabled: !0,
                properties: {
                    licenseId: e.getApplicationState().license,
                },
            }),
            p &&
                vd(e, 'links', {
                    enabled: !0,
                    name: 'links',
                    properties: {
                        links: p.links,
                    },
                }),
            e.setApplicationState({
                header: {
                    text: '',
                    logo: o,
                    backgroundType: 'gradient',
                },
            });
    },
    Ap = (e, t) => (document.referrer ? Ga(P(document.referrer) || '') : e ? 'lc' + e : 'orgId' + t),
    Cp = e => {
        const { currentChat: t } = e.getApplicationState();
        if (!t) throw new Error('Current chat is not set');
        return t;
    },
    zp = (e, t) => {
        const r = t.getChat(e).properties.currentAgent;
        return r ? cf(t, r) : null;
    },
    Dp = (e, t) => t.getApplicationState('config').features[e],
    Fp = e => Dp('continuousChat', e).enabled,
    Mp = e => Dp('chatHistory', e).enabled,
    Op = e => nh(e) && !Fp(e),
    Pp = (e, t, r) => {
        let { authorPredicate: n, lastSeenPredicate: a } = t;
        const i = r.getEvents(e),
            s = We(e => n(e) || !e.seen, Se(a, i), i);
        return Ve(n, s);
    },
    jp = (e, t, r) => {
        const n = r.getSessionUserId();
        return Pp(
            e,
            {
                authorPredicate: e => e.author !== n,
                lastSeenPredicate: e => (e.serverTimestamp || e.timestamp) <= t,
            },
            r
        );
    },
    Rp = (e, t, r) => {
        const n = r.getSessionUserId();
        return Pp(
            e,
            {
                authorPredicate: e => e.author === n,
                lastSeenPredicate: e => e.timestamp <= t,
            },
            r
        );
    },
    Bp = (e, t, r) => {
        const n = e.getEvent(t, r);
        if (n.type === Bi && null === n.serverId) {
            const r = ke(e => e.type === Bi, e.getEvents(t));
            return n.id === (null == r ? void 0 : r.id) ? e.localize('not_sent_yet') : null;
        }
        if (!n.own) return null;
        if (n.failed) return 'Message not sent';
        if (n.seen) {
            const n = e.getLastSeenEvent(t);
            return n && r === n.id ? e.localize('message_read') : null;
        }
        const a = e.getLastDeliveredEvent(t);
        return a && r === a.id ? e.localize('message_delivered') : null;
    },
    $p = e => {
        const t = e.getApplicationState('config');
        return !0 === e.getApplicationState('mobile') ? t.mobileMinimizedType : t.minimizedType;
    },
    qp = e => {
        const { config: t } = e.getApplicationState();
        return !0 === e.getApplicationState('mobile') ? t.mobileScreenPosition : t.screenPosition;
    },
    Up = (e, t) => Mp(e) && e.getChat(t).properties.hasMoreHistory,
    Np = (e, t) => {
        const { fakeAgentMessageId: r } = e.getChat(t).properties;
        return r ? e.getEvent(t, r) : null;
    },
    Lp = (e, t) => !!Np(e, t),
    Vp = e => {
        const {
            embedded: t,
            actingAsDirectLink: r,
            isInCustomContainer: n,
            isMinimizedForcefullyDisabled: a,
        } = e.getApplicationState();
        return !(!t || r || n || a);
    },
    Hp = (e, t) => {
        const {
            active: r,
            properties: { queued: n },
        } = t.getChat(Pi);
        if (r || n) return !1;
        const {
            availability: a,
            readyState: i,
            minimizedMessageInput: s,
            websiteTextSelection: o,
        } = t.getApplicationState();
        return (
            !(!Fp(t) && 'online' !== a) &&
            (!s.isVisible || !o.text) &&
            !Cf(t) &&
            (i === Hs || !Gh(t, 'maximized') || De(t.getEvents(e)))
        );
    },
    Gp = (e, t) => {
        if (Mp(t)) return !1;
        const {
                availability: r,
                embedded: n,
                actingAsDirectLink: a,
                isInCustomContainer: i,
                defaultWidget: s,
            } = t.getApplicationState(),
            o = t.getChat(e);
        return 'livechat' === s && n && !a && !i && !o.active && !o.properties.ended && 'offline' === r && !nh(t);
    },
    Zp = e => e.getConnectionState() === Tn,
    Wp = e => e.getConnectionState() === An,
    Yp = e => e.getConnectionState() === zn || Wp(e),
    Qp = (e, t) => {
        if (t < 0) return null;
        const r = e[t];
        return r.own && 'message' === r.type
            ? null
            : 'system_message' === r.type || 'rich_message_postback' === r.type
              ? Qp(e, t - 1)
              : r.properties.quickReplies
                ? r
                : null;
    },
    Jp = (e, t) => {
        const r = t.getEvents(e),
            n = Qp(r, r.length - 1);
        return n && (n.properties.invitation || t.getChat(e).active) ? n : null;
    },
    Xp = (e, t) => {
        const { availability: r } = t.getApplicationState(),
            {
                active: n,
                properties: { queued: a, ended: i },
            } = t.getChat(e);
        if (a) return t.localize('embedded_waiting_for_operator');
        const s = zp(e, t);
        return n && s
            ? t.localize('embedded_chat_with', {
                  operator: s.name,
              })
            : i
              ? t.localize('embedded_chat_ended')
              : 'online' === r
                ? t.localize('embedded_chat_now')
                : nh(t) || Fp(t)
                  ? t.localize('embedded_leave_message')
                  : t.localize('agents_not_available');
    },
    Kp = (e, t) => {
        var r;
        const n = e.getChat(t),
            a = Fp(e);
        if (e.getApplicationState().limitReached) return null;
        if (yh(e) && !vh(e)) return null;
        if (
            t === Ks &&
            !n.properties.ended &&
            !1 === (null == (r = Dp('chatbotIntegration', e)) ? void 0 : r.properties.showTextField)
        )
            return n.properties.isAnsweringQuestion ? 'text' : null;
        if (n.active) {
            var i;
            const r = Ah(e),
                n = e.getChat(t).properties.currentAgent;
            return null != r && null != (i = r.properties) && i.useFixedAnswers && (null == r ? void 0 : r.author) === n
                ? null
                : 'text';
        }
        if (qh(e, t)) return null;
        if (ih(e)) {
            if (ff(e)) {
                const t = ke(e => 'form' === e.type, e.getEvents(Pi));
                if (t && t.properties.formId === oo.id) return rh(e) ? 'startChatAgain' : 'text';
            }
            return null;
        }
        return !n.properties.ended || (a && !rh(e) && t !== Ks)
            ? a || 'offline' !== e.getApplicationState().availability
                ? Lp(e, Pi) ||
                  ((e, t) => {
                      const { awaitingWelcomeMessage: r } = e.getChat(t).properties;
                      return !!r;
                  })(e, t)
                    ? rh(e) && Dp('preChatAfterGreeting', e).enabled
                        ? 'requestPrechat'
                        : ((e, t, r) => {
                                const n = zp(t, e);
                                return (
                                    ((null == n ? void 0 : n.properties.isBot) &&
                                        !r &&
                                        'ai_agent' !== (null == n ? void 0 : n.properties.botType)) ||
                                    oh(e)
                                );
                            })(e, t, n.properties.starting)
                          ? 'startChat'
                          : 'text'
                    : a
                      ? rh(e)
                          ? 'offline' === e.getApplicationState().availability
                              ? null
                              : 'requestPrechat'
                          : 'text'
                      : a && n.properties.ended
                        ? 'text'
                        : null
                : null
            : ff(e) && !rh(e)
              ? 'text'
              : 'startChatAgain';
    },
    eh = (e, t) => !!t.getChat(e).properties.starting,
    th = e => e.getApplicationState('config').theme.name,
    rh = e => e.getApplicationState().config.features.preChatForm.enabled,
    nh = e => e.getApplicationState().config.features.ticketForm.enabled,
    ah = (e, t) => {
        const r = ke(e => 'form' === e.type, e.getEvents(Pi));
        if (!r) return null;
        const { properties: n } = r;
        return !n.answered && 'ask_for_email' !== n.formId && ('string' != typeof t || n.formType === t) ? r.id : null;
    },
    ih = (e, t) => !!ah(e, t),
    sh = e =>
        e.getEvents(Pi).filter(e => {
            var t;
            return null == (t = e.properties) ? void 0 : t.isPreview;
        }),
    oh = e => {
        const {
            properties: { groupHasProbableQueue: t },
        } = e.getChat(Pi);
        return !!t;
    },
    lh = e => {
        const {
                active: t,
                properties: { queued: r, ended: n, startChatAgainPending: a, currentAgent: i },
            } = e.getChat(Pi),
            { availability: s, limitReached: o } = e.getApplicationState(),
            l = Fp(e),
            c = nh(e);
        return !(!o || (c && !l)) || ('offline' === s && !(n && !a) && (l ? !i && !r : !t && !r && !c));
    },
    ch = e => {
        const t = Cp(e);
        return (
            Boolean(zp(t, e)) &&
            !('modern' === th(e) && ih(e)) &&
            !((e, t) => !!t.getChat(e).properties.queued)(t, e) &&
            !lh(e)
        );
    },
    uh = e => {
        var t;
        return Boolean(null == (t = e.getView('Homescreen')) || null == (t = t.apps) ? void 0 : t.find(e => Us(e.id)));
    },
    dh = e => {
        const t = e.getApplicationState().defaultWidget,
            r = Cp(e);
        return r === ji || r === Ks
            ? !e.getChat(r).properties.agentActivity && 'Chat' === e.getCurrentView() && jh(e)
            : ('openwidget' !== t || 'Chat' === e.getCurrentView()) &&
                  (!(!yh(e) || e.getView('Chat/queue')) || (!Bh(e) && jh(e)));
    },
    ph = e => {
        const t = e.getLastEvent(Pi);
        return !!t && 'form' === t.type && 'ticket' === t.properties.formType && t.properties.answered;
    },
    hh = e => {
        const { nonProfitLicense: t } = e.getApplicationState('config');
        return t;
    },
    fh = e => {
        const {
            actingAsDirectLink: t,
            isInCustomContainer: r,
            mobileWrapper: n,
            embedded: a,
            hideMinimizeButton: i,
        } = e.getApplicationState();
        return !t && !r && (n || a) && !i;
    },
    gh = e => {
        const {
            actingAsDirectLink: t,
            isInCustomContainer: r,
            embedded: n,
            mobile: a,
            isPreview: i,
            isConfigurator: s,
        } = e.getApplicationState();
        return !t && n && !r && yf(e) && !a && (!i || s);
    },
    mh = e => Boolean(e.getApplicationState('invitation').current),
    _h = e => {
        const { lastThread: t, currentAgent: r, queued: n } = e.getChat(Pi).properties;
        if (!Fp(e) || r || n) return !1;
        return !!!ke(e => {
            let { type: r, thread: n } = e;
            return 'email_prompt' === r && n === t;
        }, e.getEvents(Pi));
    },
    bh = e => {
        const t = Eh(e);
        return !!eh(Pi, e) || (e.getChat(Pi).active && t.some(e => !!e.own || e.properties.welcomeMessage));
    },
    yh = e => e.getChat(Pi).properties.queued,
    vh = e => {
        var t;
        return Boolean(null == (t = Dp('queue', e)) ? void 0 : t.writingInQueueEnabled);
    },
    wh = e => Dp('fileSharing', e).enabled,
    kh = e => !e.getApplicationState('mobile') && Dp('emojiPicker', e).enabled,
    xh = e => {
        const { active: t } = e.getChat(Pi);
        return t && !Yp(e);
    },
    Sh = e => !Yp(e) && !e.getApplicationState('disableSendingMessage'),
    Ih = gt([e => zt(e, Pi), e => Dt(e, Pi).properties.lastThread], (e, t) => {
        return We(e => e.thread === t, (r = e).length - 1, r);
        var r;
    }),
    Eh = e => Ih(e.getState()),
    Th = gt([e => Ih(e), e => $t(e)], (e, t) => ke(e => 'system' !== e.author && e.author !== t, e)),
    Ah = e => Th(e.getState()),
    Ch = (e, t) => {
        if (e.hasEvent(Pi, t)) {
            const { properties: r } = e.getEvent(Pi, t);
            return r.invitation;
        }
        return !1;
    },
    zh = e => !e.getApplicationState().mobile && 'bar' === $p(e),
    Dh = e => {
        const t = Np(e, Pi);
        return t && t.properties.invitation ? t : null;
    },
    Fh = function (e, t) {
        void 0 === t && (t = Dh(e));
        const { availability: r, invitation: n } = e.getApplicationState();
        return !(('offline' !== r || Fp(e)) && !zh(e)) || !t || Boolean(t && ze(t.properties.uniqueId, n.hiddenIds));
    },
    Mh = function (e, t) {
        void 0 === t && (t = Dh(e));
        const { invitation: r } = e.getApplicationState();
        return Boolean(t && ze(t.properties.uniqueId, r.displayedIds));
    },
    Oh = e => {
        const t = Dh(e);
        return !t || Fh(e, t) ? null : t.id;
    },
    Ph = e => {
        const { formType: t, fields: r, answered: n } = e.properties,
            a = r.filter(e => e.answer && e.label);
        return 'ticket' !== t && n && De(a);
    },
    jh = e => {
        const t = Cp(e),
            r = e.getEvents(t);
        return De(r) || r.every(e => 'form' === e.type && Ph(e));
    },
    Rh = e => {
        const t = Cp(e),
            r = e.getEvents(t);
        return (
            De(r) ||
            r.every(e => ('form' === e.type && Ph(e)) || e.properties.invitation || e.properties.welcomeMessage)
        );
    },
    Bh = e => ch(e) || lh(e) || yh(e),
    $h = (e, t) => {
        var r;
        return null != (r = e.getEvents(t).find(e => e.type === Bi && null === e.serverId)) ? r : null;
    },
    qh = (e, t) => Boolean($h(e, t)),
    Uh = e => {
        const { embedded: t, actingAsDirectLink: r } = e.getApplicationState();
        return !t || r ? 'direct_link' : 'code';
    },
    Nh = gt([e => Ih(e)], e => e.filter(e => 'file' === e.type && !e.delivered && !e.properties.canceled)),
    Lh = e => Nh(e.getState()),
    Vh = e => e.getChat(Pi).serverId,
    Hh = e => {
        const { mobile: t } = e.getApplicationState();
        return Dp(t ? 'mobileMinimized' : 'minimized', e).enabled;
    },
    Gh = (e, t) => e.getApplicationState('visibility').state === t,
    Zh = (e, t) => {
        const r = e.getApplicationState('config').properties.license;
        return Object.keys(r).some(e => r[e][t]);
    },
    Wh = e => Dp('hideTrademark', e).enabled || 'Shopify' === e.getApplicationState('integrationName'),
    Yh = (e, t) => e.getApplicationState('config').properties.license[t],
    Qh = e => {
        const { language: t, isPreview: r } = e.getApplicationState();
        if ('en' !== t || r) return !1;
        const n = Yh(e, 'a9f288b2883da20306d30e179067406f');
        return Boolean(null == n ? void 0 : n.transfer_identity_enabled);
    },
    Jh = e => {
        const t = Yh(e, '632cead4b282481a422dd4e1d1567449');
        return {
            url: null == t ? void 0 : t.widget_message_box_moment_url,
            height: null == t ? void 0 : t.widget_message_box_moment_height,
        };
    },
    Xh = e => {
        var t;
        const { url: r } = Jh(e);
        return {
            disabled: !e.getChat(Pi).active || !zp(Pi, e),
            visible: Ip(r) && (null == (t = e.getView('Moment')) || null == (t = t.data) ? void 0 : t.url) !== r,
        };
    },
    Kh = e => (e.getChat(Pi).active ? e.getChat(Pi).properties.lastThread : null),
    ef = e => e.getView('minimized'),
    tf = e => {
        const { history: t, updatedAt: r } = e.getApplicationState('locationHistory');
        return r - new Date().getTime() > 18e5 ? [] : t;
    },
    rf = e => {
        var t;
        return Boolean(null == (t = e.getApplicationState('recommendations')) ? void 0 : t.isVisible);
    },
    nf = e =>
        e.localize(
            e.getApplicationState('limitReached') || !Fp(e) ? 'agents_not_available' : 'agents_not_available_continuous'
        ),
    af = e => {
        const t = e.getView('Chat/queue'),
            r = t && t.numberInQueue,
            n = (e => {
                const t = e.localize('user_in_queue'),
                    { fields: r } = e.getView('Chat/prechat');
                if (!r || De(r)) return t;
                const n = r.find(e => {
                    let { meta: t } = e;
                    return t && 'groupSelect' === t;
                });
                if (!n || !n.options || De(n.options)) return t;
                const a = n.options.find(t => {
                    let { groupNumber: r } = t;
                    return r === e.getApplicationState('group');
                });
                return a && a.queueTemplate ? a.queueTemplate : t;
            })(e),
            a = n.includes('%minutes%');
        let i = n.replace(/%number%/g, '**' + r + '**'),
            s = null;
        return (
            a && ((s = Math.floor(t.waitingTime / 60)), (i = i.replace(/%minutes%/g, '**' + s + '**'))),
            {
                message: i,
                waitingTime: s,
            }
        );
    },
    sf = e => {
        if (e.getApplicationState('isPreview')) return !1;
        if (!Dp('rating', e).enabled) return !1;
        if (Yp(e)) return !1;
        const {
            active: t,
            properties: { rate: r },
        } = e.getChat(Pi);
        if (!t || r) return !1;
        const n =
            (e => {
                const {
                    properties: { timestamp: t },
                } = e.getChat(Pi);
                if (!t) return 0;
                const r = Eh(e);
                if (!r || 0 === (null == r ? void 0 : r.length)) return 0;
                const n = ke(e => 'system_message' !== e.type, r);
                return n ? n.timestamp - t : 0;
            })(e) /
            1e3 /
            60;
        return (
            n > 2 &&
            (e =>
                Eh(e).some(e => {
                    let { author: t, own: r, properties: n } = e;
                    return !r && 'system' !== t && !n.invitation && !n.welcomeMessage;
                }))(e)
        );
    },
    of = e => 'offline' === e.getApplicationState('availability'),
    lf = e => {
        if (ff(e)) return !1;
        if (!Dp('homeScreen', e).enabled) return !1;
        return !('modern' === th(e));
    },
    cf = (e, t) => {
        const r = e.getUser(t);
        var n;
        return r.id === ao
            ? c({}, r, {
                  avatar: null != (n = r.avatar) ? n : io,
              })
            : r;
    },
    uf = (e, t) => {
        if (!t) return '_blank';
        if (Cp(e) !== Ks) return '_blank';
        const { page: r } = e.getApplicationState();
        return Ua(t) === Ua(r.url) ? '_parent' : '_blank';
    },
    df = e => {
        const t = Dh(e);
        return t && t.properties.quickReplies ? t : null;
    },
    pf = e => Re(Xs()).some(t => Boolean(((e, t) => e.getApplicationState('config').properties.group[t])(e, t))),
    hf = e => {
        const { page: t } = e.getApplicationState(),
            r = Ua(t.url);
        return !!r && ('text.com' === r || r.endsWith('.text.com'));
    },
    ff = e => Dp('textApp', e).enabled,
    gf = e =>
        'smooth' === th(e) &&
        ff(e) &&
        !e.getApplicationState('pipMode') &&
        !e.getApplicationState('mobile') &&
        e.getApplicationState('actingAsDirectLink'),
    mf = e =>
        'modern' === th(e)
            ? 'modern'
            : gf(e)
              ? 'full-viewport'
              : yf(e)
                ? e.getApplicationState('isLargeWidget')
                    ? 'ta-large'
                    : 'ta-default'
                : 'default',
    _f = e => {
        const { organizationId: t, group: r } = e.getApplicationState();
        return t === Vs && void 0 !== r && (e => 1 === e || 5 === e)(r);
    },
    bf = e => {
        const { organizationId: t, group: r } = e.getApplicationState();
        return t === Vs && void 0 !== r && (e => 2 === e || 27 === e)(r);
    },
    yf = e => ff(e) || bf(e) || _f(e),
    vf = (e, t) => {
        const r = Kp(e, t),
            n = e.getApplicationState('privacyPolicyBannerState');
        return (
            (Dp('privacyPolicy', e).enabled || _f(e)) &&
            ('visible' === n || 'closing' === n) &&
            !!r &&
            'requestPrechat' !== r
        );
    },
    wf = e =>
        (e =>
            !Eh(e).some(e => {
                let { author: t, own: r } = e;
                return !r && 'system' !== t;
            }))(e),
    kf = e => e.events.length > 0 && Boolean(e.properties.rate),
    xf = e => {
        const t = Se(
                e =>
                    'system_message' === e.type &&
                    e.properties.systemMessageType &&
                    lo.includes(e.properties.systemMessageType),
                e
            ),
            r = we(
                e =>
                    'system_message' === e.type &&
                    e.properties.systemMessageType &&
                    co.includes(e.properties.systemMessageType),
                e
            );
        return {
            lastDeactivationEventIndex: t,
            firstRatingEventIndex: r,
            hasRatingSystemMessages: -1 !== r,
            hasDeactivationEvent: -1 !== t,
        };
    },
    Sf = e => {
        const {
            hasRatingSystemMessages: t,
            hasDeactivationEvent: r,
            firstRatingEventIndex: n,
            lastDeactivationEventIndex: a,
        } = e;
        return t && (!r || n < a);
    },
    If = e =>
        e.filter(
            e =>
                !(
                    'system_message' === e.type &&
                    e.properties.systemMessageType &&
                    co.includes(e.properties.systemMessageType)
                )
        ),
    Ef = (e, t) => e.getEvents(Pi).some(e => e.thread === t && 'form' === e.type && e.properties.formId === oo.id),
    Tf = e =>
        (ff(e) || e.getApplicationState('enableMinimizedMessageInputLayout') || _f(e)) &&
        'circle' === $p(e) &&
        'smooth' === th(e),
    Af = e => {
        const { availability: t, minimizedMessageInput: r } = e.getApplicationState();
        return Tf(e) && !r.closed && 'offline' !== t && !yh(e) && !lh(e) && !Yp(e);
    },
    Cf = e => {
        var t;
        const { minimizedMessageInput: r } = e.getApplicationState();
        return r.isVisible && ('classic' !== r.state || !(null == (t = ef(e)) || !t.messageInput));
    };

function zf(e) {
    const t = (function (e) {
        try {
            return window.localStorage;
        } catch (t) {
            return 'SecurityError' === t.name && e ? e : V() ? window.localStorage : H;
        }
    })(e);
    return {
        setItem: (e, r) => new Promise(n => n(t.setItem(e, r))),
        getItem: e => new Promise(r => r(t.getItem(e))),
        removeItem: e => new Promise(r => r(t.removeItem(e))),
    };
}
zf();
const Df = 'file',
    Ff = 'form',
    Mf = 'filled_form',
    Of = 'message',
    Pf = 'rich_message',
    jf = 'system_message',
    Rf = 'custom',
    Bf = 'accept_greeting',
    $f = 'cancel_greeting',
    qf = 'check_goals',
    Uf = 'deactivate_chat',
    Nf = 'delete_chat_properties',
    Lf = 'delete_event_properties',
    Vf = 'delete_thread_properties',
    Hf = 'get_chat',
    Gf = 'get_customer',
    Zf = 'get_form',
    Wf = 'get_url_info',
    Yf = 'list_chats',
    Qf = 'list_group_statuses',
    Jf = 'list_threads',
    Xf = 'login',
    Kf = 'mark_events_as_seen',
    eg = 'request_welcome_message',
    tg = 'resume_chat',
    rg = 'send_event',
    ng = 'send_greeting_button_clicked',
    ag = 'send_rich_message_postback',
    ig = 'send_sneak_peek',
    sg = 'set_customer_session_fields',
    og = 'start_chat',
    lg = 'update_chat_properties',
    cg = 'update_customer',
    ug = 'update_customer_page',
    dg = 'update_event_properties',
    pg = 'update_thread_properties',
    hg = 'upload_file',
    fg = 'chat_deactivated',
    gg = 'chat_properties_deleted',
    mg = 'chat_properties_updated',
    _g = 'chat_transferred',
    bg = 'customer_disconnected',
    yg = 'customer_side_storage_updated',
    vg = 'customer_updated',
    wg = 'event_properties_deleted',
    kg = 'event_properties_updated',
    xg = 'event_updated',
    Sg = 'events_marked_as_seen',
    Ig = 'greeting_accepted',
    Eg = 'greeting_canceled',
    Tg = 'groups_status_updated',
    Ag = 'incoming_chat',
    Cg = 'incoming_event',
    zg = 'incoming_greeting',
    Dg = 'incoming_multicast',
    Fg = 'incoming_rich_message_postback',
    Mg = 'incoming_typing_indicator',
    Og = 'incoming_welcome_message',
    Pg = 'queue_position_updated',
    jg = 'thread_properties_deleted',
    Rg = 'thread_properties_updated',
    Bg = 'user_added_to_chat',
    $g = 'user_removed_from_chat',
    qg = 'incoming_thinking_indicator',
    Ug = 'incoming_event_preview',
    Ng = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                CHAT_DEACTIVATED: fg,
                CHAT_PROPERTIES_DELETED: gg,
                CHAT_PROPERTIES_UPDATED: mg,
                CHAT_TRANSFERRED: _g,
                CUSTOMER_DISCONNECTED: bg,
                CUSTOMER_SIDE_STORAGE_UPDATED: yg,
                CUSTOMER_UPDATED: vg,
                EVENTS_MARKED_AS_SEEN: Sg,
                EVENT_PROPERTIES_DELETED: wg,
                EVENT_PROPERTIES_UPDATED: kg,
                EVENT_UPDATED: xg,
                GREETING_ACCEPTED: Ig,
                GREETING_CANCELED: Eg,
                GROUPS_STATUS_UPDATED: Tg,
                INCOMING_CHAT: Ag,
                INCOMING_EVENT: Cg,
                INCOMING_EVENT_PREVIEW: Ug,
                INCOMING_GREETING: zg,
                INCOMING_MULTICAST: Dg,
                INCOMING_RICH_MESSAGE_POSTBACK: Fg,
                INCOMING_THINKING_INDICATOR: qg,
                INCOMING_TYPING_INDICATOR: Mg,
                INCOMING_WELCOME_MESSAGE: Og,
                QUEUE_POSITION_UPDATED: Pg,
                THREAD_PROPERTIES_DELETED: jg,
                THREAD_PROPERTIES_UPDATED: Rg,
                USER_ADDED_TO_CHAT: Bg,
                USER_REMOVED_FROM_CHAT: $g,
            },
            Symbol.toStringTag,
            {
                value: 'Module',
            }
        )
    ),
    Lg = 'customer',
    Vg = Object.freeze({
        success: !0,
    }),
    Hg = ['group_id'];

function Gg() {
    return (
        (Gg = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                  }
                  return e;
              }),
        Gg.apply(null, arguments)
    );
}
const Zg = (e, t) => {
        const r = {
            id: t.id,
            authorId: t.author_id,
            createdAt: t.created_at,
            threadId: e,
            properties: t.properties || {},
        };
        return void 0 !== t.custom_id && (r.customId = t.custom_id), r;
    },
    Wg = (e, t) => {
        let r, n, a, i;
        t.height > t.width
            ? ((r = 'height'), (n = 'width'), (a = t.height), (i = t.width))
            : ((r = 'width'), (n = 'height'), (a = t.width), (i = t.height));
        const s = e / a;
        return {
            [r]: Math.ceil(Math.min(a, e)),
            [n]: Math.ceil(Math.min(s * i, i)),
        };
    },
    Yg = (e, t) =>
        void 0 !== t.width && void 0 !== t.height
            ? ((e, t) =>
                  Gg(
                      {},
                      Zg(e, t),
                      {
                          type: Df,
                          contentType: t.content_type,
                          url: t.url,
                          name: t.name,
                          width: t.width,
                          height: t.height,
                          thumbnails: {
                              default: Gg(
                                  {
                                      url: t.thumbnail_url,
                                  },
                                  Wg(300, t)
                              ),
                              high: Gg(
                                  {
                                      url: t.thumbnail2x_url,
                                  },
                                  Wg(600, t)
                              ),
                          },
                      },
                      t.alternative_text && {
                          alternativeText: t.alternative_text,
                      }
                  ))(e, t)
            : Gg({}, Zg(e, t), {
                  type: Df,
                  contentType: t.content_type,
                  url: t.url,
                  name: t.name,
              }),
    Qg = e => {
        const t = {};
        if (
            ('string' == typeof e.title && (t.title = e.title),
            'string' == typeof e.subtitle && (t.subtitle = e.subtitle),
            e.image)
        ) {
            const { image: r } = e;
            t.image = Gg(
                {
                    url: r.url,
                    name: r.name,
                },
                r.alternative_text && {
                    alternativeText: r.alternative_text,
                }
            );
        }
        return (
            e.buttons &&
                (t.buttons = e.buttons.map(e => {
                    switch (e.type) {
                        case 'message':
                        case 'copy':
                        case 'phone':
                            return Gg(
                                {
                                    type: e.type,
                                    text: e.text,
                                    postbackId: e.postback_id,
                                    userIds: e.user_ids,
                                    value: e.value,
                                    role: e.role || 'default',
                                },
                                e.button_id && {
                                    buttonId: e.button_id,
                                }
                            );
                        case 'cancel':
                            return Gg(
                                {
                                    type: e.type,
                                    text: e.text,
                                    postbackId: e.postback_id,
                                    userIds: e.user_ids,
                                    role: e.role || 'default',
                                },
                                e.button_id && {
                                    buttonId: e.button_id,
                                }
                            );
                        case 'url': {
                            const t = Gg(
                                {
                                    type: e.type,
                                    text: e.text,
                                    postbackId: e.postback_id,
                                    userIds: e.user_ids,
                                    value: e.value,
                                    role: e.role || 'default',
                                },
                                e.button_id && {
                                    buttonId: e.button_id,
                                }
                            );
                            return e.target && (t.target = e.target), t;
                        }
                        case 'webview':
                            return Gg(
                                {
                                    type: e.type,
                                    text: e.text,
                                    postbackId: e.postback_id,
                                    userIds: e.user_ids,
                                    value: e.value,
                                    role: e.role || 'default',
                                },
                                e.button_id && {
                                    buttonId: e.button_id,
                                }
                            );
                        default:
                            return Gg(
                                {
                                    text: e.text,
                                    postbackId: e.postback_id,
                                    userIds: e.user_ids,
                                    role: e.role || 'default',
                                },
                                e.button_id && {
                                    buttonId: e.button_id,
                                }
                            );
                    }
                })),
            t
        );
    },
    Jg = (e, t) => {
        switch (t.type) {
            case Df:
                return Yg(e, t);
            case Ff:
                return ((e, t) =>
                    Gg({}, Zg(e, t), {
                        authorId: 'system',
                        type: Ff,
                        formId: t.form_id,
                        fields: t.fields,
                    }))(e, t);
            case Mf:
                return ((e, t) =>
                    Gg({}, Zg(e, t), {
                        type: Mf,
                        formId: t.form_id,
                        fields: t.fields.map(e => {
                            if ('group_chooser' === e.type) {
                                if (!e.answer) return e;
                                const t = e.answer,
                                    { group_id: r } = t;
                                return Gg({}, e, {
                                    answer: Gg(
                                        {},
                                        (function (e, t) {
                                            if (null == e) return {};
                                            var r = {};
                                            for (var n in e)
                                                if ({}.hasOwnProperty.call(e, n)) {
                                                    if (-1 !== t.indexOf(n)) continue;
                                                    r[n] = e[n];
                                                }
                                            return r;
                                        })(t, Hg),
                                        {
                                            groupId: r,
                                        }
                                    ),
                                });
                            }
                            return e;
                        }),
                    }))(e, t);
            case Of:
                return ((e, t) =>
                    Gg({}, Zg(e, t), {
                        type: Of,
                        text: t.text,
                    }))(e, t);
            case Pf:
                return ((e, t) => {
                    switch (t.template_id) {
                        case 'cards':
                        case 'quick_replies':
                        case 'sticker':
                            return Gg({}, Zg(e, t), {
                                type: Pf,
                                template: t.template_id,
                                elements: t.elements.map(Qg),
                            });
                        default:
                            return null;
                    }
                })(e, t);
            case jf:
                return ((e, t) => {
                    const r = Gg(
                        {},
                        Zg(
                            e,
                            Gg({}, t, {
                                author_id: 'system',
                            })
                        ),
                        {
                            type: jf,
                            text: t.text,
                            systemMessageType: t.system_message_type,
                        }
                    );
                    return t.text_vars && (r.textVars = t.text_vars), r;
                })(e, t);
            case Rf:
                return ((e, t) =>
                    Gg(
                        {},
                        Zg(e, t),
                        {
                            type: Rf,
                        },
                        t.content && {
                            content: t.content,
                        }
                    ))(e, t);
            default:
                return null;
        }
    },
    Xg = e => ({
        id: e.id,
        addon: e.addon || null,
        uniqueId: e.unique_id,
        displayedFirstTime: e.displayed_first_time,
        isExitIntent: e.is_exit_intent,
        accepted: e.accepted || !1,
        subtype: e.subtype || 'greeting',
        event: Jg(null, e.event),
        agent: {
            id: e.agent.id,
            name: e.agent.name,
            avatar: e.agent.avatar,
            jobTitle: e.agent.job_title,
            isBot: e.agent.is_bot || !1,
        },
    });

function Kg() {
    return (
        (Kg = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                  }
                  return e;
              }),
        Kg.apply(null, arguments)
    );
}
const em = function (e) {
        return (
            void 0 === e && (e = {}),
            e.group_ids
                ? {
                      groupIds: e.group_ids,
                  }
                : {}
        );
    },
    tm = e => me(e => (e.events_seen_up_to ? e.events_seen_up_to : null), Fe('id', e)),
    rm = (e, t) => {
        const r = t.properties || {};
        return {
            id: t.id,
            chatId: e,
            active: t.active,
            access: em(t.access),
            createdAt: t.created_at,
            userIds: t.user_ids,
            events: t.events.map(e => Jg(t.id, e)).filter(Boolean),
            properties: r,
            previousThreadId: t.previous_thread_id || null,
            nextThreadId: t.next_thread_id || null,
            queue: t.queue ? lm(t.queue) : null,
        };
    },
    nm = e => ({
        id: e.id,
        access: em(e.access),
        users: e.users.map(cm),
        properties: e.properties || {},
        eventsSeenUpToMap: tm(e.users),
    }),
    am = e => {
        const t = Le(['avatar', 'email', 'name'], e);
        return (
            e.session_fields &&
                (t.sessionFields = e.session_fields.reduce((e, t) => {
                    const [r] = Object.keys(t);
                    return (e[r] = t[r]), e;
                }, {})),
            t
        );
    },
    im = e => {
        const t = am(e);
        return Kg(
            {
                id: e.id,
                type: Lg,
            },
            t,
            {
                sessionFields: t.sessionFields || {},
            }
        );
    },
    sm = e => {
        const { statistics: t } = e;
        return Kg({}, im(e), {
            statistics: {
                chatsCount: t.chats_count,
                threadsCount: t.threads_count,
                visitsCount: t.visits_count,
                pageViewsCount: t.page_views_count,
                greetingsShownCount: t.greetings_shown_count,
                greetingsAcceptedCount: t.greetings_accepted_count,
            },
        });
    },
    om = e => ({
        position: e.position,
        waitTime: e.wait_time,
    }),
    lm = e =>
        Kg({}, om(e), {
            queuedAt: e.queued_at,
        }),
    cm = e => {
        return e.type === Lg
            ? Kg({}, im((r = e)), {
                  present: r.present,
              })
            : {
                  id: (t = e).id,
                  type: 'agent',
                  name: t.name,
                  avatar: t.avatar,
                  jobTitle: t.job_title,
                  present: t.present,
              };
        var t, r;
    },
    um = e => ('offline' === e ? 'offline' : 'online'),
    dm = ['group_id'],
    pm = ['comment_label'];

function hm(e, t) {
    if (null == e) return {};
    var r = {};
    for (var n in e)
        if ({}.hasOwnProperty.call(e, n)) {
            if (-1 !== t.indexOf(n)) continue;
            r[n] = e[n];
        }
    return r;
}

function fm() {
    return (
        (fm = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                  }
                  return e;
              }),
        fm.apply(null, arguments)
    );
}
const gm = e => ({
        chatId: e.chat_id,
        properties: e.properties,
    }),
    mm = e => {
        const t = {
            chatId: e.chat_id,
            threadId: e.thread_id,
            transferredTo: fm(
                {},
                e.transferred_to.agent_ids && {
                    agentIds: e.transferred_to.agent_ids,
                },
                e.transferred_to.group_ids && {
                    groupIds: e.transferred_to.group_ids,
                }
            ),
            queue: e.queue ? lm(e.queue) : null,
        };
        return 'manual' === e.reason
            ? fm({}, t, {
                  reason: e.reason,
                  requesterId: e.requester_id,
              })
            : fm({}, t, {
                  reason: e.reason,
              });
    },
    _m = e =>
        fm(
            {
                id: e.id,
            },
            am(e)
        ),
    bm = e => ({
        chatId: e.chat_id,
        threadId: e.thread_id,
        eventId: e.event_id,
        properties: e.properties,
    }),
    ym = e => ({
        chatId: e.chat_id,
        threadId: e.thread_id,
        eventId: e.event_id,
        properties: e.properties,
    }),
    vm = e => {
        const t = e.thread_id;
        return {
            chatId: e.chat_id,
            threadId: t,
            event: Jg(t, e.event),
        };
    },
    wm = e => ({
        chatId: e.chat_id,
        userId: e.user_id,
        seenUpTo: e.seen_up_to,
    }),
    km = e => ({
        uniqueId: e.unique_id,
    }),
    xm = e => {
        const { chat: t } = e;
        return {
            chat: fm({}, nm(t), {
                thread: rm(t.id, t.thread),
            }),
        };
    },
    Sm = e => ({
        chatId: e.chat_id,
        event: Jg(e.thread_id, e.event),
    }),
    Im = e => Xg(e),
    Em = e => ({
        userId: e.user_id,
        chatId: e.chat_id,
        threadId: e.thread_id,
        eventId: e.event_id,
        postback: e.postback,
    }),
    Tm = e => {
        const { chat_id: t, typing_indicator: r } = e;
        return {
            chatId: t,
            typingIndicator: {
                authorId: r.author_id,
                isTyping: r.is_typing,
            },
        };
    },
    Am = e => {
        const { chat_id: t, thread_id: r, author_id: n, sent_at: a, custom_id: i, title: s, description: o } = e;
        return fm(
            {
                chatId: t,
                threadId: r,
                authorId: n,
                sentAt: a,
            },
            i && {
                customId: i,
            },
            s && {
                title: s,
            },
            o && {
                description: o,
            }
        );
    },
    Cm = e => ({
        chatId: e.chat_id,
        threadId: e.thread_id,
        event: Jg(e.thread_id, e.event),
    }),
    zm = e => ({
        id: e.id,
        event: Jg(null, e.event),
    }),
    Dm = e => ({
        chatId: e.chat_id,
        threadId: e.thread_id,
        queue: om(e.queue),
    }),
    Fm = e => ({
        chatId: e.chat_id,
        threadId: e.thread_id,
        properties: e.properties,
    }),
    Mm = e => ({
        chatId: e.chat_id,
        threadId: e.thread_id,
        properties: e.properties,
    }),
    Om = e => ({
        chatId: e.chat_id,
        user: cm(e.user),
        present: e.user.present,
    }),
    Pm = e => ({
        chatId: e.chat_id,
        userId: e.user_id,
        reason: e.reason,
    }),
    jm = e =>
        e.map(e => {
            switch (e.type) {
                case 'group_chooser':
                    return fm({}, e, {
                        options: e.options.map(e => {
                            let { group_id: t } = e;
                            return fm({}, hm(e, dm), {
                                groupId: t,
                            });
                        }),
                    });
                case 'rating': {
                    const { comment_label: t } = e;
                    return fm({}, hm(e, pm), {
                        commentLabel: t,
                    });
                }
                default:
                    return e;
            }
        }),
    Rm = e => {
        const t = e.map((e, t) =>
            fm({}, e, {
                id: String(t),
            })
        );
        return jm(t);
    },
    Bm = e => {
        const t = !('id' in e.fields[0]);
        return {
            id: e.id,
            fields: t ? Rm(e.fields) : jm(e.fields),
        };
    },
    $m = e =>
        e.enabled
            ? fm({}, e, {
                  form: Bm(e.form),
              })
            : e,
    qm = e => {
        const t = {
            url: e.url,
        };
        return (
            e.title && (t.title = e.title),
            e.description && (t.description = e.description),
            e.image_url &&
                ((t.imageUrl = 'https://' + Ga(e.image_url)),
                e.image_width && e.image_height && ((t.imageWidth = e.image_width), (t.imageHeight = e.image_height))),
            t
        );
    },
    Um = e => {
        const { id: t, predicted_agent: r, queue: n } = e;
        return {
            id: t,
            predictedAgent: {
                id: r.id,
                type: r.type,
                name: r.name,
                avatar: r.avatar,
                jobTitle: r.job_title,
                isBot: r.is_bot,
                botType: r.bot_type,
            },
            queue: n,
        };
    },
    Nm = e => {
        let { online_groups_ids: t, customer_groups: r } = e;
        if (!t) return 'offline';
        return ze(r.monitoring.id, t) ? 'online' : 'offline';
    },
    Lm = e => {
        const t = e.chats_summary.map(e => {
            let {
                id: t,
                active: r,
                access: n,
                last_thread_created_at: a,
                last_thread_id: i,
                last_event_per_type: s,
                properties: o = {},
                users: l,
            } = e;
            const c = {
                id: t,
                active: r,
                access: em(n),
                properties: o,
                users: l.map(cm),
                lastThreadId: i || null,
                lastThreadCreatedAt: a || null,
                eventsSeenUpToMap: tm(l),
            };
            if (!s) return c;
            c.lastEventsPerType = me(e => Jg(e.thread_id, e.event), s);
            const u = s,
                d = Me(
                    Object.keys(u)
                        .map(e => u[e])
                        .sort((e, t) =>
                            e.thread_id === t.thread_id
                                ? Qe(e.event.created_at, t.event.created_at)
                                : Qe(e.thread_created_at, t.thread_created_at)
                        )
                );
            return d && c.lastEventsPerType && (c.lastEvent = c.lastEventsPerType[d.event.type]), c;
        });
        return {
            chatsSummary: Be(e => {
                var t;
                let { lastEvent: r, order: n } = e;
                return -1 * (null != (t = void 0 !== r ? r.timestamp : n) ? t : 0);
            }, t),
            totalChats: e.total_chats,
            users: Ke(
                e => e.id,
                fe(e => e.users, t)
            ),
            previousPageId: e.previous_page_id || null,
            nextPageId: e.next_page_id || null,
        };
    },
    Vm = e => e.groups_status,
    Hm = (e, t) => ({
        threads: t.threads.map(t => rm(e.payload.chat_id, t)),
        previousPageId: t.previous_page_id || null,
        nextPageId: t.next_page_id || null,
    }),
    Gm = e => {
        const { __priv_dynamic_config: t, chats: r, greeting: n } = e;
        return fm(
            {
                dynamicConfig: t,
                customer: sm(e.customer),
                availability: Nm(t),
                chats: r.map(t => ({
                    id: t.chat_id,
                    active: 'has_active_thread' in t ? t.has_active_thread : e.has_active_thread,
                    hasUnreadEvents: t.has_unread_events,
                })),
            },
            n && {
                greeting: Xg(n),
            }
        );
    },
    Zm = e => {
        switch (e.action) {
            case fg:
                return {
                    action: e.action,
                    payload: {
                        chatId: e.payload.chat_id,
                    },
                };
            case gg:
                return {
                    action: e.action,
                    payload:
                        ((t = e.payload),
                        {
                            chatId: t.chat_id,
                            properties: t.properties,
                        }),
                };
            case mg:
                return {
                    action: e.action,
                    payload: gm(e.payload),
                };
            case _g:
                return {
                    action: e.action,
                    payload: mm(e.payload),
                };
            case yg:
            case bg:
                return {
                    action: e.action,
                    payload: e.payload,
                };
            case vg:
                return {
                    action: e.action,
                    payload: _m(e.payload),
                };
            case wg:
                return {
                    action: e.action,
                    payload: bm(e.payload),
                };
            case kg:
                return {
                    action: e.action,
                    payload: ym(e.payload),
                };
            case xg:
                return {
                    action: e.action,
                    payload: vm(e.payload),
                };
            case Sg:
                return {
                    action: e.action,
                    payload: wm(e.payload),
                };
            case Ig:
            case Eg:
                return {
                    action: e.action,
                    payload: km(e.payload),
                };
            case Tg:
                return {
                    action: e.action,
                    payload: e.payload,
                };
            case Ag:
                return {
                    action: e.action,
                    payload: xm(e.payload),
                };
            case Cg:
                return {
                    action: e.action,
                    payload: Sm(e.payload),
                };
            case zg:
                return {
                    action: e.action,
                    payload: Im(e.payload),
                };
            case Dg:
                return {
                    action: e.action,
                    payload: e.payload,
                };
            case Fg:
                return {
                    action: e.action,
                    payload: Em(e.payload),
                };
            case Mg:
                return {
                    action: e.action,
                    payload: Tm(e.payload),
                };
            case qg:
                return {
                    action: e.action,
                    payload: Am(e.payload),
                };
            case Ug:
                return {
                    action: e.action,
                    payload: Cm(e.payload),
                };
            case Og:
                return {
                    action: e.action,
                    payload: zm(e.payload),
                };
            case Pg:
                return {
                    action: e.action,
                    payload: Dm(e.payload),
                };
            case jg:
                return {
                    action: e.action,
                    payload: Fm(e.payload),
                };
            case Rg:
                return {
                    action: e.action,
                    payload: Mm(e.payload),
                };
            case Bg:
                return {
                    action: e.action,
                    payload: Om(e.payload),
                };
            case $g:
                return {
                    action: e.action,
                    payload: Pm(e.payload),
                };
        }
        var t;
    },
    Wm = e => {
        let { request: t, response: r } = e;
        switch (r.action) {
            case Bf:
            case $f:
            case Nf:
            case Lf:
            case Vf:
                return {
                    action: r.action,
                    payload: Vg,
                };
            case Hf:
                return {
                    action: r.action,
                    payload:
                        ((n = r.payload),
                        fm({}, nm(n), {
                            thread: n.thread ? rm(n.id, n.thread) : null,
                        })),
                };
            case Gf:
                return {
                    action: r.action,
                    payload: sm(r.payload),
                };
            case Zf:
                return {
                    action: r.action,
                    payload: $m(r.payload),
                };
            case Wf:
                return {
                    action: r.action,
                    payload: qm(r.payload),
                };
            case Yf:
                return {
                    action: r.action,
                    payload: Lm(r.payload),
                };
            case Qf:
                return {
                    action: r.action,
                    payload: Vm(r.payload),
                };
            case Jf:
                return {
                    action: r.action,
                    payload: Hm(t, r.payload),
                };
            case Xf:
                return {
                    action: r.action,
                    payload: Gm(r.payload),
                };
            case Kf:
                return {
                    action: r.action,
                    payload: Vg,
                };
            case eg:
                return {
                    action: r.action,
                    payload: Um(r.payload),
                };
            case ig:
            case sg:
            case ng:
            case ag:
            case lg:
            case cg:
            case ug:
            case dg:
            case pg:
                return {
                    action: r.action,
                    payload: Vg,
                };
        }
        var n;
    },
    Ym = e => ({
        code: e.type.toUpperCase(),
        message: e.message,
    });

function Qm() {
    return (
        (Qm = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                  }
                  return e;
              }),
        Qm.apply(null, arguments)
    );
}
const Jm = {};

function Xm(e, t) {
    let { query: r = {}, jsonpParam: n = 'jsonp', callbackName: a } = void 0 === t ? {} : t;
    return new Promise((t, i) => {
        hl().then(s => {
            const o = document.createElement('script'),
                l = a || Ae(Jm);
            Jm[l] = !0;
            const c = '__' + l;
            (window[c] = e => {
                delete Jm[l], delete window[c], fl(o), t(e);
            }),
                (o.src =
                    e +
                    '?' +
                    R(
                        Qm({}, r, {
                            [n]: c,
                        })
                    )),
                o.addEventListener('error', () => {
                    setTimeout(() => i(new Error('JSONP request failed.')), 100);
                }),
                s.appendChild(o);
        });
    });
}
const Km = ['buttons', 'allowed_domains', 'prechat_form', 'ticket_form', '__priv', 'properties'],
    e_ = /\.([a-z]{1,})$/i,
    t_ = e => {
        let { __priv: t } = e;
        const r = {
            enabled: !0,
            x: parseInt(t.group['embedded_chat.eye_grabber.x']) + 15,
            y: parseInt(t.group['embedded_chat.eye_grabber.y']),
            src: Xa(t.group['embedded_chat.eye_grabber.path']),
        };
        if (-1 !== r.src.indexOf('/default/eyeCatchers/')) {
            const e = r.src.match(e_)[1];
            r.srcset = {
                '1x': r.src,
                '2x': r.src.replace(new RegExp('\\.' + e, 'i'), '-2x.' + e),
            };
        }
        return r;
    },
    r_ = e => {
        var t;
        return {
            'x-region': null != (t = e.region) ? t : '',
        };
    },
    n_ = (e, t) =>
        (e => {
            let { region: t } = e;
            return 'https://api' + (e => ('fra' === e || 'eu-west3' === e ? '-fra' : ''))(t) + '.livechatinc.com';
        })(t) +
        '/v3.6/customer/action/' +
        e,
    a_ = e => {
        let { licenseId: t, organizationId: r } = e;
        return Xm(
            'https://api.livechatinc.com/global-mapper/' +
                (t ? 'lc_license_id/' + t : 'organization_id/' + r) +
                '/region',
            {
                callbackName: 'lc_region',
            }
        )
            .then(e => e.region)
            .catch(() => {
                const e = new Error('Fetch region failed');
                throw ((e.code = 'FETCH_REGION_FAILED'), e);
            });
    },
    i_ = function (e, t) {
        let { validateDefaultWidget: r = !0 } = void 0 === t ? {} : t;
        return Xm(n_('get_dynamic_configuration', e), {
            query: c(
                {},
                r_(e),
                e.organizationId
                    ? {
                          organization_id: e.organizationId,
                      }
                    : {},
                e.licenseId
                    ? {
                          license_id: e.licenseId,
                      }
                    : {},
                {
                    client_id: null != 'c5e4f61e1a6c3b1521b541bc5c5a2ac5' ? 'c5e4f61e1a6c3b1521b541bc5c5a2ac5' : '',
                    url: Ja(e.url, [
                        'cw_configurator',
                        'dev_language',
                        'dev_enable_textapp',
                        'dev_theme_variant',
                        'dev_theme_name',
                        'dev_minimized_type',
                        'dev_screen_position',
                        'dev_offset_x',
                        'dev_offset_y',
                        'dev_show_logo',
                        'dev_show_avatar',
                        'dev_sounds_enabled',
                        'dev_rating_enabled',
                        'dev_transcript_enabled',
                        'dev_company_logo_url',
                        'dev_agent_avatar_url',
                    ]),
                },
                'number' == typeof e.groupId && {
                    group_id: e.groupId,
                },
                e.channelType && {
                    channel_type: e.channelType,
                },
                e.skipCodeInstallationTracking && {
                    test: 1,
                },
                e.productName && {
                    origin: e.productName,
                },
                e.integrationName && {
                    implementation_type: e.integrationName,
                }
            ),
        }).then(t => {
            if (t.error)
                switch (t.error.type) {
                    case 'misdirected_request':
                        return i_(
                            c({}, e, {
                                region: t.error.data.region,
                            })
                        );
                    case 'license_not_found': {
                        if ('direct_link' === e.channelType) {
                            const t = R({
                                utm_source: 'expired_chat_link',
                                utm_medium: 'referral',
                                utm_campaign: 'lc_' + e.licenseId,
                            });
                            window.location.replace('https://www.livechat.com/expired-chat-link/?' + t);
                        }
                        const t = new Error('License not found');
                        throw ((t.code = 'LICENSE_NOT_FOUND'), t);
                    }
                    default: {
                        const e = new Error(t.error.message);
                        throw ((e.code = t.error.type.toUpperCase()), e);
                    }
                }
            if (
                ((e.licenseId !== Ws && e.organizationId !== Vs) || (t.default_widget = 'livechat'),
                r && 'livechat' !== t.default_widget)
            ) {
                const e = new Error("The 'default_widget' is not 'livechat', but instead: '" + t.default_widget + "'");
                throw (
                    ((e.code = 'DEFAULT_WIDGET_NOT_LIVECHAT'),
                    (e.organizationId = t.organization_id),
                    (e.defaultWidget = t.default_widget),
                    e)
                );
            }
            if (!t.livechat_active) {
                if ('direct_link' === e.channelType) {
                    const t = R({
                        utm_source: 'expired_chat_link',
                        utm_medium: 'referral',
                        utm_campaign: 'lc_' + e.licenseId,
                    });
                    window.location.replace('https://www.livechat.com/expired-chat-link/?' + t);
                }
                const t = new Error('License expired');
                throw ((t.code = 'LICENSE_EXPIRED'), t);
            }
            if (!t.livechat.domain_allowed) {
                const e = new Error('Current domain is not added to the allowlist.');
                throw ((e.code = 'DOMAIN_NOT_ALLOWED'), e);
            }
            return (
                (n = t),
                (a = e.region),
                {
                    organizationId: n.organization_id,
                    groupId: n.livechat.group_id,
                    clientLimitExceeded: n.livechat.client_limit_exceeded,
                    configVersion: n.livechat.config_version,
                    localizationVersion: n.livechat.localization_version,
                    onlineGroupIds: n.livechat.online_group_ids || [],
                    region: a || null,
                    language: n.livechat.language,
                }
            );
            var n, a;
        });
    },
    s_ = e => {
        var t, r;
        const n = 'feade1d6c3f17748ae4c8d917a1e1068',
            a = Boolean(null == (t = e.properties.group[n]) ? void 0 : t.forwardTicketFormToHelpdesk),
            i = '1' === e.__priv.license['helpdesk.inbound_forwarding'],
            s = null == (r = e.properties.license[n]) ? void 0 : r.hdLicenseID;
        return 'number' == typeof s && s > -1 && (a || i);
    },
    o_ = (e, t) => (t.includes(e) ? e : t[0]),
    l_ = (e, t) => e,
    c_ = e =>
        Xm(n_('get_configuration', e), {
            callbackName: 'lc_static_config',
            query: c(
                {
                    organization_id: e.organizationId,
                    version: e.version,
                },
                r_(e),
                'number' == typeof e.groupId && {
                    group_id: e.groupId,
                }
            ),
        }).then(e =>
            (e => {
                const { buttons: t, allowed_domains: r, prechat_form: n, ticket_form: a, __priv: i, properties: s } = e,
                    o = u(e, Km),
                    l = i.group,
                    d = l_('boolean' == typeof i.enable_textapp ? i.enable_textapp : void 0),
                    p = l_(o_(l['chat_window.new_theme.name'], ['smooth', 'modern'])),
                    h = l_(o_(l['chat_window.new_theme.variant'], ['light', 'dark'])),
                    f = l['chat_window.new_theme.background_color'],
                    g = l_(o_(l['chat_window.theme.minimized'], ['circle', 'bar'])),
                    m = l_('1' === l['chat_window.display_avatar']),
                    _ = l_('0' === l['chat_window.disable_sounds']),
                    b = l_('1' === l['rate_me.enabled']),
                    y = l_('1' === l['chat_window.display_transcript_button']),
                    v = l_('1' === l['chat_window.display_logo']),
                    w = l_(l['chat_window.logo_path']),
                    k = l_(l.language),
                    x = l_(o_(l['chat_window.screen_position'], ['right', 'left'])),
                    S = l_(parseInt(l['chat_window.offset_x'])),
                    I = l_(parseInt(l['chat_window.offset_y'])),
                    E = '0' === i.group.tickets_enabled,
                    T = !Boolean(i.disable_native_tickets) && Boolean(a),
                    A = s_(e),
                    C = E || A || T;
                return c(
                    {},
                    o,
                    n && {
                        prechatForm: Bm(n),
                    },
                    C &&
                        a && {
                            ticketForm: Bm(a),
                        },
                    {
                        properties: s,
                        buttons: t.map(e =>
                            'image' === e.type
                                ? {
                                      id: e.id,
                                      type: e.type,
                                      onlineValue: Xa(e.online_value),
                                      offlineValue: Xa(e.offline_value),
                                  }
                                : {
                                      id: e.id,
                                      type: e.type,
                                      onlineValue: e.online_value,
                                      offlineValue: e.offline_value,
                                  }
                        ),
                    },
                    r && {
                        allowedDomains: r,
                    },
                    {
                        __unsafeProperties: c(
                            {},
                            i.s && {
                                s: !0,
                            },
                            'boolean' == typeof d
                                ? {
                                      enableTextApp: d,
                                  }
                                : {},
                            {
                                group: {
                                    chatBoosters: i.group.chat_boosters,
                                    disabledMinimized: '1' === i.group['chat_window.disable_minimized'],
                                    disabledMinimizedOnMobile: '1' === i.group['chat_window.mobile_disable_minimized'],
                                    disabledOnMobile: '1' === i.group['chat_window.hide_on_mobile'],
                                    eyeCatcher:
                                        '1' === i.group['embedded_chat.display_eye_catcher']
                                            ? t_(e)
                                            : {
                                                  enabled: !1,
                                              },
                                    hasAgentAvatarsEnabled: m,
                                    hasCustomMobileSettings: '1' === i.group['chat_window.custom_mobile_settings'],
                                    hasHiddenTrademark: '1' === i.group['chat_window.hide_trademark'],
                                    hasSoundsEnabled: _,
                                    initiallyHidden:
                                        '1' === i.group['chat_window.hide_on_init'] ||
                                        '1' === i.group['chat_window.disable_minimized'],
                                    initiallyHiddenOnMobile:
                                        '1' === i.group['chat_window.mobile_hide_on_init'] ||
                                        '1' === i.group['chat_window.mobile_disable_minimized'],
                                    hideOnInit: '1' === i.group['chat_window.hide_on_init'],
                                    language: k,
                                    linksUnfurlingEnabled: '1' === i.group.links_unfurling,
                                    privacyPolicy: {
                                        enabled: '1' === i.group['privacy_policy.enabled'],
                                        text: i.group['privacy_policy.text'],
                                    },
                                    logo: v
                                        ? {
                                              enabled: !0,
                                              src: w,
                                          }
                                        : {
                                              enabled: !1,
                                          },
                                    minimizedType: g,
                                    minimizedTypeOnMobile: i.group['chat_window.mobile_minimized_theme'],
                                    offlineMessagesEnabled: E,
                                    offsetX: S,
                                    offsetXOnMobile: parseInt(i.group['chat_window.mobile_offset_x']),
                                    offsetY: I,
                                    offsetYOnMobile: parseInt(i.group['chat_window.mobile_offset_y']),
                                    prechatFormAfterGreetingEnabled: '1' === i.group.pre_chat_survey_after_greeting,
                                    ratingEnabled: b,
                                    screenPosition: x,
                                    screenPositionOnMobile: o_(i.group['chat_window.mobile_screen_position'], [
                                        'right',
                                        'left',
                                    ]),
                                    transcriptButtonEnabled: y,
                                    theme: {
                                        name: p,
                                        variant: h,
                                        customJson: i.group['chat_window.new_theme.custom_json'],
                                        agentbarBackgroundColor:
                                            i.group['chat_window.new_theme.agentbar_background_color'],
                                        agentbarText: i.group['chat_window.new_theme.agentbar_text'],
                                        agentMessageColorBackground:
                                            i.group['chat_window.new_theme.agent_message_color_background'],
                                        agentMessageColorText:
                                            i.group['chat_window.new_theme.agent_message_color_text'],
                                        backgroundColor: f,
                                        ctaColor: i.group['chat_window.new_theme.cta_color'],
                                        minimizedColorBackground:
                                            i.group['chat_window.new_theme.minimized_color_background'],
                                        minimizedColorIcon: i.group['chat_window.new_theme.minimized_color_icon'],
                                        minimizedColorText: i.group['chat_window.new_theme.minimized_color_text'],
                                        systemMessageColor: i.group['chat_window.new_theme.system_message_color'],
                                        titlebarBackgroundColor:
                                            i.group['chat_window.new_theme.titlebar_background_color'],
                                        titlebarText: i.group['chat_window.new_theme.titlebar_text'],
                                        visitorMessageColorBackground:
                                            i.group['chat_window.new_theme.visitor_message_color_background'],
                                        visitorMessageColorText:
                                            i.group['chat_window.new_theme.visitor_message_color_text'],
                                    },
                                },
                                license: {
                                    creditCardMaskingEnabled: '1' === i.license.mask_credit_cards,
                                    nonProfit: '1' === i.license.non_profit,
                                    licenseinboundForwardingToHelpdeskEnabled:
                                        '1' === i.license['helpdesk.inbound_forwarding'],
                                },
                                helpdeskIntegrationEnabled: A,
                                ticketFormMode:
                                    ((z = e),
                                    s_(z)
                                        ? 'helpdesk'
                                        : '0' === z.__priv.group.tickets_enabled
                                          ? 'offline_message'
                                          : 'livechat'),
                            }
                        ),
                    }
                );
                var z;
            })(e)
        ),
    u_ = e =>
        Xm(n_('get_localization', e), {
            callbackName: 'lc_localization',
            query: c(
                {
                    organization_id: e.organizationId,
                    version: e.version,
                    language: e.language,
                },
                r_(e),
                'number' == typeof e.groupId && {
                    group_id: e.groupId,
                }
            ),
        }).then(e => Oe(e => e.toLowerCase(), e));
export {
    wu as $,
    re as A,
    Gi as B,
    Tn as C,
    xc as D,
    Dt as E,
    Wt as F,
    Eu as G,
    $p as H,
    mh as I,
    Fp as J,
    Au as K,
    Pi as L,
    wc as M,
    up as N,
    Mp as O,
    Up as P,
    Eh as Q,
    zn as R,
    Dn as S,
    Me as T,
    lf as U,
    Su as V,
    zf as W,
    De as X,
    ve as Y,
    Te as Z,
    me as _,
    Qa as a,
    hl as a$,
    ce as a0,
    Y as a1,
    be as a2,
    Hs as a3,
    Mu as a4,
    Tc as a5,
    Fu as a6,
    Le as a7,
    Ae as a8,
    au as a9,
    pl as aA,
    fl as aB,
    ho as aC,
    uo as aD,
    Ye as aE,
    Ws as aF,
    Gl as aG,
    mo as aH,
    Na as aI,
    qp as aJ,
    Xl as aK,
    Pu as aL,
    Ee as aM,
    Ge as aN,
    Xo as aO,
    Oe as aP,
    Ce as aQ,
    je as aR,
    _i as aS,
    zp as aT,
    nh as aU,
    dp as aV,
    yf as aW,
    Xu as aX,
    Ku as aY,
    Bu as aZ,
    Xa as a_,
    ru as aa,
    $c as ab,
    Tf as ac,
    mf as ad,
    Ac as ae,
    Hi as af,
    Fh as ag,
    Dp as ah,
    Gt as ai,
    ze as aj,
    of as ak,
    ld as al,
    rh as am,
    Bd as an,
    cd as ao,
    Ft as ap,
    ji as aq,
    xu as ar,
    ku as as,
    Hh as at,
    Wu as au,
    Qu as av,
    sp as aw,
    cp as ax,
    Zs as ay,
    gl as az,
    Hd as b,
    Fr as b$,
    gs as b0,
    wd as b1,
    Tp as b2,
    uh as b3,
    Ys as b4,
    tt as b5,
    G as b6,
    ge as b7,
    K as b8,
    xr as b9,
    gr as bA,
    Fe as bB,
    pt as bC,
    Re as bD,
    kr as bE,
    yr as bF,
    vr as bG,
    pr as bH,
    we as bI,
    lr as bJ,
    or as bK,
    sr as bL,
    wr as bM,
    rt as bN,
    rr as bO,
    dr as bP,
    er as bQ,
    Mt as bR,
    Be as bS,
    et as bT,
    Pt as bU,
    ke as bV,
    ct as bW,
    Pe as bX,
    lt as bY,
    Yt as bZ,
    st as b_,
    br as ba,
    _r as bb,
    Ir as bc,
    Dr as bd,
    Sr as be,
    zr as bf,
    Ar as bg,
    Er as bh,
    nr as bi,
    vt as bj,
    tr as bk,
    mr as bl,
    xt as bm,
    fr as bn,
    hr as bo,
    Cr as bp,
    Tr as bq,
    ur as br,
    cr as bs,
    ir as bt,
    ar as bu,
    jt as bv,
    Et as bw,
    kt as bx,
    wt as by,
    ot as bz,
    _e as c,
    Kl as c$,
    jr as c0,
    mu as c1,
    $e as c2,
    Ec as c3,
    ue as c4,
    Ne as c5,
    Qo as c6,
    Jl as c7,
    Ql as c8,
    Go as c9,
    Cl as cA,
    Va as cB,
    Ad as cC,
    Cd as cD,
    nd as cE,
    Zh as cF,
    ud as cG,
    Cp as cH,
    Vh as cI,
    Wh as cJ,
    fh as cK,
    mi as cL,
    Sc as cM,
    Gd as cN,
    Us as cO,
    wp as cP,
    $l as cQ,
    Rl as cR,
    jl as cS,
    ac as cT,
    ic as cU,
    oc as cV,
    nc as cW,
    tc as cX,
    ec as cY,
    rc as cZ,
    sc as c_,
    Xe as ca,
    ea as cb,
    zl as cc,
    Yo as cd,
    el as ce,
    Zl as cf,
    rl as cg,
    al as ch,
    pp as ci,
    sl as cj,
    Yu as ck,
    Dc as cl,
    gf as cm,
    uf as cn,
    Ul as co,
    ff as cp,
    Cc as cq,
    zc as cr,
    th as cs,
    Qh as ct,
    Ni as cu,
    xp as cv,
    Td as cw,
    Li as cx,
    Al as cy,
    bp as cz,
    Nc as d,
    Ic as d$,
    Ue as d0,
    Ua as d1,
    ef as d2,
    Nd as d3,
    Ju as d4,
    Rd as d5,
    Mh as d6,
    Ze as d7,
    gc as d8,
    mc as d9,
    Fc as dA,
    Oc as dB,
    jc as dC,
    Rc as dD,
    Pc as dE,
    Mc as dF,
    Oh as dG,
    Xp as dH,
    wh as dI,
    xh as dJ,
    Pl as dK,
    $d as dL,
    V as dM,
    gt as dN,
    Lh as dO,
    Rp as dP,
    ad as dQ,
    Jh as dR,
    Gu as dS,
    kh as dT,
    Xh as dU,
    Sh as dV,
    Yp as dW,
    fd as dX,
    lo as dY,
    id as dZ,
    pd as d_,
    bc as da,
    _c as db,
    uc as dc,
    dc as dd,
    pc as de,
    fc as df,
    hc as dg,
    rf as dh,
    tu as di,
    Wc as dj,
    Kd as dk,
    eu as dl,
    Kc as dm,
    Qc as dn,
    Jc as dp,
    Xc as dq,
    _f as dr,
    Yc as ds,
    Zc as dt,
    iu as du,
    Qd as dv,
    su as dw,
    nu as dx,
    Kp as dy,
    Bc as dz,
    vd as e,
    qg as e$,
    Kh as e0,
    Ch as e1,
    vf as e2,
    Jp as e3,
    _t as e4,
    Bi as e5,
    Ml as e6,
    Zi as e7,
    oo as e8,
    cf as e9,
    Ph as eA,
    qh as eB,
    Bp as eC,
    yp as eD,
    Ah as eE,
    io as eF,
    Rf as eG,
    jf as eH,
    Mf as eI,
    Df as eJ,
    Of as eK,
    rg as eL,
    Lg as eM,
    ng as eN,
    qf as eO,
    Xf as eP,
    ug as eQ,
    bg as eR,
    Ng as eS,
    Yf as eT,
    Ag as eU,
    fg as eV,
    Cg as eW,
    Hf as eX,
    Vg as eY,
    Bg as eZ,
    Ug as e_,
    Bo as ea,
    Ap as eb,
    hf as ec,
    Ks as ed,
    sf as ee,
    ch as ef,
    lh as eg,
    yh as eh,
    Rh as ei,
    af as ej,
    nf as ek,
    kp as el,
    ih as em,
    ip as en,
    gh as eo,
    bf as ep,
    hh as eq,
    dh as er,
    Ve as es,
    Wa as et,
    Ns as eu,
    Op as ev,
    df as ew,
    Lo as ex,
    zo as ey,
    Sp as ez,
    kc as f,
    hu as f$,
    Mg as f0,
    Tg as f1,
    um as f2,
    yg as f3,
    Rg as f4,
    Pg as f5,
    og as f6,
    tg as f7,
    Ym as f8,
    Wm as f9,
    zd as fA,
    Gp as fB,
    ed as fC,
    fe as fD,
    Xd as fE,
    Hu as fF,
    Fd as fG,
    $i as fH,
    qi as fI,
    Md as fJ,
    dd as fK,
    ap as fL,
    td as fM,
    Zu as fN,
    hd as fO,
    Ps as fP,
    Yd as fQ,
    xs as fR,
    Ri as fS,
    Id as fT,
    md as fU,
    Ui as fV,
    Ms as fW,
    Iu as fX,
    pu as fY,
    du as fZ,
    np as f_,
    Zm as fa,
    hg as fb,
    cg as fc,
    sg as fd,
    Jf as fe,
    pg as ff,
    dg as fg,
    lg as fh,
    ig as fi,
    ag as fj,
    eg as fk,
    Kf as fl,
    Qf as fm,
    Wf as fn,
    Zf as fo,
    Gf as fp,
    Vf as fq,
    Lf as fr,
    Nf as fs,
    Uf as ft,
    $f as fu,
    Bf as fv,
    Cf as fw,
    sh as fx,
    wf as fy,
    gd as fz,
    Vd as g,
    Np as g0,
    tp as g1,
    ep as g2,
    Sd as g3,
    Hp as g4,
    xd as g5,
    ph as g6,
    Lp as g7,
    Zp as g8,
    Od as g9,
    jd as gA,
    Qi as gB,
    Ki as gC,
    Pd as gD,
    ms as gE,
    he as gF,
    pe as gG,
    pf as gH,
    Fs as gI,
    rp as gJ,
    Q as gK,
    Dh as gL,
    Vi as gM,
    vs as gN,
    fs as gO,
    Ol as gP,
    ws as gQ,
    ds as gR,
    ao as gS,
    no as gT,
    so as gU,
    eo as gV,
    bi as gW,
    yi as gX,
    to as gY,
    ro as gZ,
    bh as ga,
    Uh as gb,
    Vp as gc,
    Ds as gd,
    Af as ge,
    hs as gf,
    eh as gg,
    jp as gh,
    qd as gi,
    Tu as gj,
    Cn as gk,
    An as gl,
    Os as gm,
    Cs as gn,
    As as go,
    Wp as gp,
    Oi as gq,
    Rs as gr,
    Xi as gs,
    Ji as gt,
    fu as gu,
    kd as gv,
    cu as gw,
    yd as gx,
    uu as gy,
    _h as gz,
    a_ as h,
    Gh as i,
    i_ as j,
    c_ as k,
    u_ as l,
    ie as m,
    Qs as n,
    qe as o,
    ne as p,
    bd as q,
    Ld as r,
    _d as s,
    Gc as t,
    Bs as u,
    qc as v,
    ye as w,
    Gs as x,
    se as y,
    ae as z,
};
