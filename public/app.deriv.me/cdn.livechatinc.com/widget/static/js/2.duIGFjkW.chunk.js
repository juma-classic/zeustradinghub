import {
    b6 as e,
    b7 as t,
    _ as n,
    aQ as r,
    aR as o,
    b8 as i,
    b9 as a,
    ba as u,
    bb as s,
    bc as l,
    bd as c,
    be as d,
    bf as p,
    bg as D,
    bh as m,
    bi as f,
    bj as h,
    bk as g,
    bl as v,
    bm as C,
    bn as b,
    F as E,
    bo as y,
    bp as x,
    bq as F,
    br as w,
    bs as A,
    bt as B,
    bu as k,
    bv as S,
    bw as T,
    E as L,
    bx as P,
    by as M,
    bz as O,
    bA as I,
    bB as z,
    bC as _,
    bD as R,
    bE as j,
    bF as N,
    bG as W,
    bH as V,
    bI as U,
    bJ as H,
    bK as q,
    bL as G,
    o as K,
    bM as Y,
    bN as Z,
    X,
    bO as $,
    bP as J,
    bQ as Q,
    bR as ee,
    bS as te,
    bT as ne,
    T as re,
    bU as oe,
    bV as ie,
    bW as ae,
    bX as ue,
    bY as se,
    bZ as le,
    b_ as ce,
    Z as de,
    Y as pe,
    b$ as De,
    c0 as me,
    aM as fe,
    aG as he,
    aj as ge,
    c1 as ve,
    c2 as Ce,
    b5 as be,
    c3 as Ee,
    aI as ye,
    L as xe,
    a3 as Fe,
    c4 as we,
    c5 as Ae,
    aC as Be,
    aD as ke,
    c6 as Se,
    c7 as Te,
    c8 as Le,
    aE as Pe,
    c9 as Me,
    aP as Oe,
    ca as Ie,
    p as ze,
    f as _e,
    z as Re,
    cb as je,
    cc as Ne,
    aW as We,
    cd as Ve,
    ce as Ue,
    cf as He,
    cg as qe,
    ch as Ge,
    ci as Ke,
    aO as Ye,
    cj as Ze,
    ck as Xe,
    cl as $e,
    cm as Je,
    aS as Qe,
    cn as et,
    aK as tt,
    co as nt,
    cp as rt,
    a6 as ot,
    aY as it,
    ae as at,
    cq as ut,
    cr as st,
    cs as lt,
    ct,
    cu as dt,
    cv as pt,
    cw as Dt,
    cx as mt,
    cy as ft,
    u as ht,
    cz as gt,
    c as vt,
    cA as Ct,
    as as bt,
    cB as Et,
    cC as yt,
    cD as xt,
    cE as Ft,
    cF as wt,
    cG as At,
    cH as Bt,
    cI as kt,
    cJ as St,
    cK as Tt,
    cL as Lt,
    cM as Pt,
    cN as Mt,
    aX as Ot,
    cO as It,
    cP as zt,
    ah as _t,
    cQ as Rt,
    b as jt,
    cR as Nt,
    cS as Wt,
    cT as Vt,
    cU as Ut,
    cV as Ht,
    cW as qt,
    cX as Gt,
    cY as Kt,
    cZ as Yt,
    c_ as Zt,
    c$ as Xt,
    g as $t,
    d0 as Jt,
    d1 as Qt,
    al as en,
    d2 as tn,
    d3 as nn,
    av as rn,
    d4 as on,
    d5 as an,
    d6 as un,
    d7 as sn,
    aJ as ln,
    d8 as cn,
    d9 as dn,
    da as pn,
    db as Dn,
    dc as mn,
    dd as fn,
    de as hn,
    df as gn,
    dg as vn,
    r as Cn,
    dh as bn,
    di as En,
    dj as yn,
    dk as xn,
    dl as Fn,
    dm as wn,
    dn as An,
    dp as Bn,
    dq as kn,
    dr as Sn,
    ds as Tn,
    dt as Ln,
    du as Pn,
    dv as Mn,
    dw as On,
    dx as In,
    dy as zn,
    aT as _n,
    dz as Rn,
    a as jn,
    dA as Nn,
    dB as Wn,
    dC as Vn,
    dD as Un,
    dE as Hn,
    dF as qn,
    dG as Gn,
    ac as Kn,
    dH as Yn,
    H as Zn,
    dI as Xn,
    dJ as $n,
    at as Jn,
    af as Qn,
} from './5.DjBaMMVQ.chunk.js';
import {
    w as er,
    x as tr,
    h as nr,
    u as rr,
    r as or,
    _ as ir,
    n as ar,
    c as ur,
    y as sr,
    z as lr,
    g as cr,
    e as dr,
    A as pr,
    d as Dr,
    B as mr,
    i as fr,
    v as hr,
    C as gr,
    a as vr,
    f as Cr,
    q as br,
} from './3.DK8xU-ow.chunk.js';
import { k as Er } from './4.C_rgEAoe.chunk.js';
import { i as yr, L as xr, b as Fr, c as wr, e as Ar, g as Br } from './6.B0_QvnEW.chunk.js';

function kr(t, n) {
    return e(
        e => (
            t.on(n, e),
            () => {
                t.off(n, e);
            }
        )
    );
}

function Sr(e) {
    return function (t, n) {
        if (0 === t) {
            var r,
                o,
                i,
                a = 0;
            e(0, function (e, t) {
                if ((0 === e && (i = t), 1 === e)) {
                    var u = [o, t];
                    (r = u[0]), (o = u[1]), ++a < 2 ? i(1) : n(1, [r, o]);
                } else n(e, t);
            });
        }
    };
}

function Tr() {
    return (
        (Tr =
            Object.assign ||
            function (e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                return (
                    n.forEach(t => {
                        for (const n in t) er(n, t) && (e[n] = t[n]);
                    }),
                    e
                );
            }),
        Tr(...arguments)
    );
}

function Lr(e) {
    return tr(e) ? e.map(Lr) : t(e) ? n(Lr, e) : e;
}

function Pr() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.reduce(
        (e, t) =>
            function () {
                return e(t(...arguments));
            }
    );
}

function Mr(e, t) {
    let n;
    return function () {
        clearTimeout(n);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
        n = setTimeout(t, e, ...o);
    };
}

function Or(e) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
    if (!r.length) return e;
    const i = r.shift();
    if (t(e) && t(i))
        for (const a in i)
            t(i[a])
                ? (e[a] ||
                      Object.assign(e, {
                          [a]: {},
                      }),
                  Or(e[a], i[a]))
                : Object.assign(e, {
                      [a]: i[a],
                  });
    return Or(e, ...r);
}

function Ir(e, t) {
    return t.slice(0, -e);
}

function zr(e) {
    return e;
}

function _r(e, t, n) {
    const o = r(t, n);
    return null != o ? o : e;
}

function Rr(e, t) {
    const n = {};
    return function () {
        const r = e(...arguments);
        if (er(r, n)) return n[r];
        const o = t(...arguments);
        return (n[r] = o), o;
    };
}

function jr(e) {
    return Rr(zr, e);
}

function Nr(e, t) {
    return Er(t).reduce((n, r) => (e(t[r], r) && (n[r] = t[r]), n), {});
}

function Wr(e, t) {
    const n = [...t];
    return n.splice(e, 1), n;
}

function Vr() {
    return (
        (Vr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Vr.apply(null, arguments)
    );
}

function Ur(e, t, n) {
    const r = tr(e) ? e : e.split('.'),
        o = r[0];
    let i = t;
    if (r.length > 1) {
        const e = null != n && er(o, n) ? n[o] : {};
        i = Ur(r.slice(1), t, e);
    }
    return Vr({}, n, {
        [o]: i,
    });
}
const Hr = e => {
    let { min: t = 1e3, max: n = 5e3, jitter: r = 0.5 } = e,
        o = 0;
    return {
        duration: () => {
            let e = t * Math.pow(2, o++);
            if (r) {
                const t = Math.random(),
                    n = Math.floor(t * r * e);
                e = 1 & Math.floor(10 * t) ? e + n : e - n;
            }
            return 0 | Math.min(e, n);
        },
        reset: () => {
            o = 0;
        },
    };
};

function qr(e, t) {
    let { retriesCount: n = 1 / 0, minTime: r = 100, maxTime: o = 1e4 } = void 0 === t ? {} : t;
    const i = Hr({
        min: r,
        max: o,
        jitter: 0,
    });
    return new Promise((t, r) => {
        let o = 0;
        const a = () =>
            e().then(t, () => {
                n === 1 / 0 || o++ < n
                    ? setTimeout(a, i.duration())
                    : r(new Error('Maximum retries count (' + n + ') reached'));
            });
        a();
    });
}
const Gr = e => 'media_grid' === e.type;
var Kr = function () {
        return Math.random().toString(36).substring(7).split('').join('.');
    },
    Yr = {
        INIT: '@@redux/INIT' + Kr(),
        REPLACE: '@@redux/REPLACE' + Kr(),
        PROBE_UNKNOWN_ACTION: function () {
            return '@@redux/PROBE_UNKNOWN_ACTION' + Kr();
        },
    };

function Zr(e, t, n) {
    var r;
    if (
        ('function' == typeof t && 'function' == typeof n) ||
        ('function' == typeof n && 'function' == typeof arguments[3])
    )
        throw new Error(
            'It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.'
        );
    if (('function' == typeof t && void 0 === n && ((n = t), (t = void 0)), void 0 !== n)) {
        if ('function' != typeof n) throw new Error('Expected the enhancer to be a function.');
        return n(Zr)(e, t);
    }
    if ('function' != typeof e) throw new Error('Expected the reducer to be a function.');
    var o = e,
        a = t,
        u = [],
        s = u,
        l = !1;

    function c() {
        s === u && (s = u.slice());
    }

    function d() {
        if (l)
            throw new Error(
                'You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.'
            );
        return a;
    }

    function p(e) {
        if ('function' != typeof e) throw new Error('Expected the listener to be a function.');
        if (l)
            throw new Error(
                'You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.'
            );
        var t = !0;
        return (
            c(),
            s.push(e),
            function () {
                if (t) {
                    if (l)
                        throw new Error(
                            'You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.'
                        );
                    (t = !1), c();
                    var n = s.indexOf(e);
                    s.splice(n, 1);
                }
            }
        );
    }

    function D(e) {
        if (
            !(function (e) {
                if ('object' != typeof e || null === e) return !1;
                for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t;
            })(e)
        )
            throw new Error('Actions must be plain objects. Use custom middleware for async actions.');
        if (void 0 === e.type)
            throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (l) throw new Error('Reducers may not dispatch actions.');
        try {
            (l = !0), (a = o(a, e));
        } finally {
            l = !1;
        }
        for (var t = (u = s), n = 0; n < t.length; n++) {
            (0, t[n])();
        }
        return e;
    }
    return (
        D({
            type: Yr.INIT,
        }),
        ((r = {
            dispatch: D,
            subscribe: p,
            getState: d,
            replaceReducer: function (e) {
                if ('function' != typeof e) throw new Error('Expected the nextReducer to be a function.');
                (o = e),
                    D({
                        type: Yr.REPLACE,
                    });
            },
        })[i] = function () {
            var e,
                t = p;
            return (
                ((e = {
                    subscribe: function (e) {
                        if ('object' != typeof e || null === e)
                            throw new TypeError('Expected the observer to be an object.');

                        function n() {
                            e.next && e.next(d());
                        }
                        return (
                            n(),
                            {
                                unsubscribe: t(n),
                            }
                        );
                    },
                })[i] = function () {
                    return this;
                }),
                e
            );
        }),
        r
    );
}

function Xr(e, t) {
    var n = t && t.type;
    return (
        'Given ' +
        ((n && 'action "' + String(n) + '"') || 'an action') +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
    );
}

function $r(e) {
    for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var o = t[r];
        'function' == typeof e[o] && (n[o] = e[o]);
    }
    var i,
        a = Object.keys(n);
    try {
        !(function (e) {
            Object.keys(e).forEach(function (t) {
                var n = e[t];
                if (
                    void 0 ===
                    n(void 0, {
                        type: Yr.INIT,
                    })
                )
                    throw new Error(
                        'Reducer "' +
                            t +
                            '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don\'t want to set a value for this reducer, you can use null instead of undefined.'
                    );
                if (
                    void 0 ===
                    n(void 0, {
                        type: Yr.PROBE_UNKNOWN_ACTION(),
                    })
                )
                    throw new Error(
                        'Reducer "' +
                            t +
                            '" returned undefined when probed with a random type. Don\'t try to handle ' +
                            Yr.INIT +
                            ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
                    );
            });
        })(n);
    } catch (gm) {
        i = gm;
    }
    return function (e, t) {
        if ((void 0 === e && (e = {}), i)) throw i;
        for (var r = !1, o = {}, u = 0; u < a.length; u++) {
            var s = a[u],
                l = n[s],
                c = e[s],
                d = l(c, t);
            if (void 0 === d) {
                var p = Xr(s, t);
                throw new Error(p);
            }
            (o[s] = d), (r = r || d !== c);
        }
        return r ? o : e;
    };
}

function Jr(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function Qr(e, t) {
    var n = Object.keys(e);
    return (
        Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)),
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
        n
    );
}

function eo() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return 0 === t.length
        ? function (e) {
              return e;
          }
        : 1 === t.length
          ? t[0]
          : t.reduce(function (e, t) {
                return function () {
                    return e(t.apply(void 0, arguments));
                };
            });
}

function to() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function (e) {
        return function () {
            var n = e.apply(void 0, arguments),
                r = function () {
                    throw new Error(
                        'Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.'
                    );
                },
                o = {
                    getState: n.getState,
                    dispatch: function () {
                        return r.apply(void 0, arguments);
                    },
                },
                i = t.map(function (e) {
                    return e(o);
                });
            return (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? Qr(n, !0).forEach(function (t) {
                              Jr(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                          : Qr(n).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                }
                return e;
            })({}, n, {
                dispatch: (r = eo.apply(void 0, i)(n.dispatch)),
            });
        };
    };
}
const no = () => {
        const e = [],
            t = t => n => r => {
                const o = n(r);
                return (
                    e.forEach(e => {
                        e(r, t);
                    }),
                    o
                );
            };
        return (
            (t.add = t => {
                e.push(t);
            }),
            t
        );
    },
    ro = (e, t) => {
        let { id: n } = e,
            { getState: r } = t;
        return L(r(), n);
    },
    oo = (e, t) => {
        let { id: n, chat: r } = e,
            { getState: o } = t;
        return {
            chat: r,
            event: T(o(), r, n),
        };
    },
    io = (e, t) => {
        let { id: n } = e,
            { getState: r } = t;
        return S(r(), n);
    },
    ao = e => {
        const t = P(e);
        return {
            view: t,
            default: M(e, t),
        };
    },
    uo = e =>
        ((e, t) => (n, r) => {
            if (!er(n.type, e)) return;
            const o = e[n.type](n.payload, r);
            n.meta && (o.meta = n.meta), t(n.type.toLowerCase(), o);
        })(
            {
                [k]: ro,
                [B]: oo,
                [A]: io,
                [w]: ro,
                [F]: zr,
                [x]: zr,
                [y]: oo,
                [b]: (e, t) => {
                    let { getState: n } = t;
                    return E(n());
                },
                [v]: (e, t) => {
                    let { getState: n } = t;
                    return C(n());
                },
                [g]: (e, t) => {
                    let { name: n } = e,
                        { getState: r } = t;
                    return {
                        name: n,
                        data: h(r(), n),
                        viewInfo: ao(r()),
                    };
                },
                [f]: (e, t) => {
                    let { name: n, path: r } = e,
                        { getState: o } = t;
                    return {
                        name: n,
                        path: r,
                        data: h(o(), r + '/' + n),
                        viewInfo: ao(o()),
                    };
                },
                [m]: ro,
                [D]: oo,
                [p]: io,
                [d]: io,
                [c]: zr,
                [l]: zr,
                [s]: zr,
                [u]: zr,
                [a]: zr,
            },
            e
        );

function so() {
    return (
        (so = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        so.apply(null, arguments)
    );
}
const lo = function (e) {
        return (
            void 0 === e && (e = {}),
            O(e, {
                [I]: (e, t) => {
                    let { feature: n, data: r } = t;
                    return so({}, e, {
                        config: so({}, e.config, {
                            features: so({}, e.config.features, {
                                [n]: so({}, e.config.features[n], r),
                            }),
                        }),
                    });
                },
                [b]: (e, t) => so({}, e, t),
            })
        );
    },
    co = ['properties'];

function po() {
    return (
        (po = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        po.apply(null, arguments)
    );
}
const Do = e =>
        R(e).reduce((e, t) => {
            let { serverId: n, id: r } = t;
            return null === n || (e[n] = r), e;
        }, {}),
    mo = (e, t) =>
        null !== t.serverId
            ? po({}, e, {
                  [t.serverId]: t.id,
              })
            : e,
    fo = (e, t) => {
        let { id: n, chat: r, event: o } = t;
        return po({}, e, {
            chats: po({}, e.chats, {
                byIds: po({}, e.chats.byIds, {
                    [r]: po({}, e.chats.byIds[r], {
                        events: {
                            byIds: po({}, e.chats.byIds[r].events.byIds, {
                                [n]: o,
                            }),
                            orderedIds: e.chats.byIds[r].events.orderedIds.concat(n),
                            serverIdsMapping: mo(e.chats.byIds[r].events.serverIdsMapping, o),
                        },
                    }),
                }),
            }),
        });
    },
    ho = (e, t) => {
        let { id: n, chat: r } = t;
        return po({}, e, {
            chats: po({}, e.chats, {
                byIds: po({}, e.chats.byIds, {
                    [r]: po({}, e.chats.byIds[r], {
                        events: {
                            byIds: K([n], e.chats.byIds[r].events.byIds),
                            orderedIds: e.chats.byIds[r].events.orderedIds.filter(e => e !== n),
                            serverIdsMapping:
                                ((o = e => e === n),
                                (i = e.chats.byIds[r].events.serverIdsMapping),
                                Er(i).reduce((e, t) => (o(i[t]) || (e[t] = i[t]), e), {})),
                        },
                    }),
                }),
            }),
        });
        var o, i;
    },
    go = (e, t) => {
        let { chat: r, events: o } = t;
        return po({}, e, {
            chats: po({}, e.chats, {
                byIds: po({}, e.chats.byIds, {
                    [r]: po({}, e.chats.byIds[r], {
                        events: {
                            byIds: po({}, e.chats.byIds[r].events.byIds, z('id', o)),
                            orderedIds: o
                                .map(e => {
                                    let { id: t } = e;
                                    return t;
                                })
                                .concat(e.chats.byIds[r].events.orderedIds),
                            serverIdsMapping: po(
                                {},
                                e.chats.byIds[r].events.serverIdsMapping,
                                n(
                                    e => {
                                        let { id: t } = e;
                                        return t;
                                    },
                                    z('serverId', o)
                                )
                            ),
                        },
                    }),
                }),
            }),
        });
    },
    vo = (e, t) => {
        let { id: n, user: r } = t;
        return po({}, e, {
            users: po({}, e.users, {
                byIds: po({}, e.users.byIds, {
                    [n]: r,
                }),
                serverIdsMapping: mo(e.users.serverIdsMapping, r),
            }),
        });
    },
    Co = (e, t, n) => {
        let { properties: r } = n,
            o = (function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var r in e)
                    if ({}.hasOwnProperty.call(e, r)) {
                        if (-1 !== t.indexOf(r)) continue;
                        n[r] = e[r];
                    }
                return n;
            })(n, co);
        const i = e.byIds[t];
        return po({}, e, {
            byIds: po({}, e.byIds, {
                [t]: po({}, i, o, {
                    properties: r ? po({}, i.properties, r) : i.properties,
                }),
            }),
        });
    },
    bo = (e, t, n) => {
        const r = e.byIds[t],
            o = po(
                {
                    byIds: po({}, e.byIds, {
                        [t]: po({}, r, n),
                    }),
                },
                n.serverId &&
                    er('serverIdsMapping', e) &&
                    po({}, e.serverIdsMapping, {
                        [n.serverId]: t,
                    })
            );
        return po({}, e, o);
    },
    Eo = function (e) {
        let { users: t = [] } = void 0 === e ? {} : e;
        const n = z('id', t.map(_));
        return O(
            {
                users: {
                    byIds: po({}, n, {
                        system: {
                            id: 'system',
                            type: 'system',
                        },
                    }),
                    serverIdsMapping: Do(n),
                },
                chats: {
                    byIds: {},
                    serverIdsMapping: {},
                },
            },
            {
                [k]: (e, t) => {
                    let { id: n, chat: r, events: o } = t;
                    return po({}, e, {
                        chats: po({}, e.chats, {
                            byIds: po({}, e.chats.byIds, {
                                [n]: po({}, r, {
                                    events: {
                                        byIds: z('id', o),
                                        orderedIds: o.map(e => {
                                            let { id: t } = e;
                                            return t;
                                        }),
                                        serverIdsMapping: Do(o),
                                    },
                                }),
                            }),
                            serverIdsMapping: mo(e.chats.serverIdsMapping, r),
                        }),
                    });
                },
                [B]: fo,
                [G]: ho,
                [q]: go,
                [H]: (e, t) => {
                    let { chat: n, user: r } = t;
                    const { participants: o } = e.chats.byIds[n];
                    return U(e => r === e, o) > -1
                        ? e
                        : po({}, e, {
                              chats: po({}, e.chats, {
                                  byIds: po({}, e.chats.byIds, {
                                      [n]: po({}, e.chats.byIds[n], {
                                          participants: [...o, r],
                                      }),
                                  }),
                              }),
                          });
                },
                [A]: vo,
                [w]: (e, t) => {
                    let { id: n } = t;
                    return po({}, e, {
                        chats: po({}, e.chats, {
                            byIds: po({}, e.chats.byIds, {
                                [n]: po({}, e.chats.byIds[n], {
                                    serverId: null,
                                    events: {
                                        byIds: {},
                                        orderedIds: [],
                                        serverIdsMapping: {},
                                    },
                                    properties: {},
                                }),
                            }),
                        }),
                    });
                },
                [V]: (e, t) => {
                    let { chat: n, user: r } = t;
                    const { participants: o } = e.chats.byIds[n],
                        i = U(e => r === e, o);
                    return -1 === i
                        ? e
                        : po({}, e, {
                              chats: po({}, e.chats, {
                                  byIds: po({}, e.chats.byIds, {
                                      [n]: po({}, e.chats.byIds[n], {
                                          participants: Wr(i, o),
                                      }),
                                  }),
                              }),
                          });
                },
                [y]: fo,
                [s]: (e, t) => {
                    let { id: n, serverId: r } = t;
                    return po({}, e, {
                        chats: po(
                            {},
                            Co(e.chats, n, {
                                serverId: r,
                            }),
                            {
                                serverIdsMapping: po({}, e.chats.serverIdsMapping, {
                                    [r]: n,
                                }),
                            }
                        ),
                    });
                },
                [u]: (e, t) => {
                    let { id: n } = t;
                    const r = e.chats.byIds[n],
                        o = null == r ? void 0 : r.serverId,
                        i = po({}, e.chats.serverIdsMapping);
                    return (
                        o && delete i[o],
                        po({}, e, {
                            chats: po(
                                {},
                                Co(e.chats, n, {
                                    serverId: null,
                                }),
                                {
                                    serverIdsMapping: i,
                                }
                            ),
                        })
                    );
                },
                [W]: (e, t) => {
                    let { id: n, chat: r, serverId: o } = t;
                    return po({}, e, {
                        chats: po({}, e.chats, {
                            byIds: po({}, e.chats.byIds, {
                                [r]: po({}, e.chats.byIds[r], {
                                    events: po(
                                        {},
                                        Co(e.chats.byIds[r].events, n, {
                                            serverId: o,
                                        }),
                                        {
                                            serverIdsMapping: po({}, e.chats.byIds[r].events.serverIdsMapping, {
                                                [o]: n,
                                            }),
                                        }
                                    ),
                                }),
                            }),
                        }),
                    });
                },
                [N]: (e, t) => {
                    let { id: n, chat: r, data: o } = t;
                    return po({}, e, {
                        chats: po({}, e.chats, {
                            byIds: po({}, e.chats.byIds, {
                                [r]: po({}, e.chats.byIds[r], {
                                    events: bo(e.chats.byIds[r].events, n, o),
                                }),
                            }),
                        }),
                    });
                },
                [d]: (e, t) => {
                    let { id: n, properties: r } = t;
                    return po({}, e, {
                        users: bo(e.users, n, {
                            properties: r,
                        }),
                    });
                },
                [j]: (e, t) => {
                    let { id: n, serverId: r } = t;
                    return po({}, e, {
                        users: po(
                            {},
                            Co(e.users, n, {
                                serverId: r,
                            }),
                            {
                                serverIdsMapping: po({}, e.users.serverIdsMapping, {
                                    [r]: n,
                                }),
                            }
                        ),
                    });
                },
                [a]: (e, t) => {
                    let { id: n } = t;
                    const r = e.users.byIds[n],
                        o = null == r ? void 0 : r.serverId,
                        i = po({}, e.users.serverIdsMapping);
                    return (
                        o && delete i[o],
                        po({}, e, {
                            users: po(
                                {},
                                Co(e.users, n, {
                                    serverId: null,
                                }),
                                {
                                    serverIdsMapping: i,
                                }
                            ),
                        })
                    );
                },
                [m]: (e, t) => {
                    let { id: n, data: r } = t;
                    return po({}, e, {
                        chats: Co(e.chats, n, r),
                    });
                },
                [D]: (e, t) => {
                    let { id: n, chat: r, data: o } = t;
                    return po({}, e, {
                        chats: po({}, e.chats, {
                            byIds: po({}, e.chats.byIds, {
                                [r]: po({}, e.chats.byIds[r], {
                                    events: Co(e.chats.byIds[r].events, n, o),
                                }),
                            }),
                        }),
                    });
                },
                [p]: (e, t) => {
                    let { id: n, data: r } = t;
                    return po({}, e, {
                        users: Co(e.users, n, r),
                    });
                },
            }
        );
    };

function yo() {
    return (
        (yo = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        yo.apply(null, arguments)
    );
}
const xo = function (e) {
    return (
        void 0 === e && (e = {}),
        function (t, n) {
            return void 0 === t && (t = e), n.type !== String(Y) ? t : yo({}, t, n.payload);
        }
    );
};

function Fo() {
    return (
        (Fo = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Fo.apply(null, arguments)
    );
}
const wo = e =>
    O(
        (e => {
            let { id: t, connectionState: n = Z } = e;
            return {
                id: t,
                connectionState: n,
            };
        })(e),
        {
            [v]: (e, t) => {
                let { connectionState: n } = t;
                return Fo({}, e, {
                    connectionState: n,
                });
            },
        }
    );

function Ao() {
    return (
        (Ao = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Ao.apply(null, arguments)
    );
}
const Bo = e => +new Date(e).setHours(0, 0, 0, 0),
    ko = (e, t) => Bo(e) === Bo(t),
    So = (e, t) => Math.abs(e - t) <= 2e3,
    To = e => ({
        id: e.id,
        type: e.type,
    }),
    Lo = (e, t, n) => {
        const r = To(t);
        if ('image_preview' !== t.type) return [...e, r];
        for (let o = e.length - 1; o >= 0; o--) {
            const i = e[o],
                a = Gr(i),
                u = n(a ? re(i.items).id : i.id);
            if (!So(u.timestamp, t.timestamp)) return [...e, r];
            if (a || 'image_preview' === u.type)
                return [
                    ...e.slice(0, o),
                    {
                        id: r.id,
                        type: 'media_grid',
                        items: a ? [...i.items, r] : [i, r],
                    },
                    ...e.slice(o + 1),
                ];
        }
        return [...e, r];
    },
    Po = e => {
        let { sessionUserId: t, event: n, showDate: r = !1 } = e;
        return {
            own: n.author === t,
            author: n.author,
            events: [To(n)],
            type: n.type,
            showDate: r,
            timestamp: n.timestamp,
        };
    },
    Mo = (e, t) =>
        Po({
            sessionUserId: oe(e).id,
            event: t,
            showDate: !0,
        }),
    Oo = e =>
        te(e => -1 * _r(0, 'timestamp', re(e.events)), e).map(e => {
            let { id: t } = e;
            return {
                id: t,
            };
        }),
    Io = (e, t) => {
        let { id: n } = t;
        return Ao({}, e, {
            Chat: Ao({}, e.Chat, {
                [n]: Ao({}, e.Chat[n], {
                    timeline: [],
                }),
            }),
        });
    },
    zo = () => !1,
    _o = () => !0,
    Ro = function (e) {
        return (
            void 0 === e && (e = {}),
            function (t) {
                return void 0 === t && (t = e), t;
            }
        );
    },
    jo = (e, t) =>
        ae(
            $r(
                ue((t, n) => t(e[n]), {
                    application: lo,
                    entities: Eo,
                    localization: xo,
                    session: wo,
                    views: Ro,
                })
            ),
            (e => {
                let { shouldAddToTimeline: t = _o, shouldCreateNewGroup: o = zo } = e;
                const i = (e, t) => {
                        const n = oe(e).id,
                            r = n => T(e, t, n);
                        return (e, t) => {
                            const i = re(e),
                                a = r(re(i.events).id);
                            if ('message_draft' === t.type && 'form' === i.type) {
                                const o = ie(e => 'message_draft' === e.type, e);
                                return o
                                    ? [
                                          ...Ir(2, e),
                                          Ao({}, o, {
                                              events: Lo(o.events, t, r),
                                          }),
                                          i,
                                      ]
                                    : [
                                          ...Ir(1, e),
                                          Po({
                                              sessionUserId: n,
                                              event: t,
                                          }),
                                          i,
                                      ];
                            }
                            return ko(a.timestamp, t.timestamp)
                                ? t.timestamp >= i.timestamp + 3e5 || i.author !== t.author || o(t, a)
                                    ? [
                                          ...e,
                                          Po({
                                              sessionUserId: n,
                                              event: t,
                                          }),
                                      ]
                                    : [
                                          ...Ir(1, e),
                                          Ao({}, i, {
                                              events: Lo(i.events, t, r),
                                          }),
                                      ]
                                : [
                                      ...e,
                                      Po({
                                          sessionUserId: n,
                                          event: t,
                                          showDate: !0,
                                      }),
                                  ];
                        };
                    },
                    a = (e, n, r) => {
                        const o = r.filter(t);
                        if (0 === o.length) return [];
                        const [a, ...u] = o,
                            s = Mo(e, a);
                        return u.reduce(i(e, n), [s]);
                    },
                    u = (e, t, r) => {
                        const o = ee(r);
                        return {
                            Chat: n(
                                e => ({
                                    [e.id]: {
                                        timeline: a(r, e.id, e.events),
                                    },
                                }),
                                o
                            ),
                            ChatList: Oo(o),
                            current: null,
                        };
                    },
                    s = (e, t, n) => {
                        let { id: r } = t;
                        return Ao({}, e, {
                            Chat: Ao({}, e.Chat, {
                                [r]: {
                                    timeline: a(n, r, L(n, r).events),
                                },
                            }),
                            ChatList: Oo(ee(n)),
                        });
                    },
                    l = (e, n, r) => {
                        let { chat: o, id: a } = n;
                        const { timeline: u } = e.Chat[o],
                            s = T(r, o, a);
                        return t(s)
                            ? Ao({}, e, {
                                  Chat: Ao({}, e.Chat, {
                                      [o]: Ao({}, e.Chat[o], {
                                          timeline: u.length > 0 ? i(r, o)(u, s) : [Mo(r, s)],
                                      }),
                                  }),
                                  ChatList: Oo(ee(r)),
                              })
                            : e;
                    },
                    c = (e, t) => {
                        let { chat: n, id: r } = t;
                        const { timeline: o } = e.Chat[n],
                            i = U(e => e.events.some(e => e.id === r), o),
                            a = o[i],
                            u = a.events.filter(e => e.id !== r);
                        let s;
                        return (
                            u.length > 0
                                ? (s = ne(
                                      i,
                                      Ao({}, a, {
                                          events: u,
                                      }),
                                      o
                                  ))
                                : ((s =
                                      i + 1 < o.length
                                          ? ne(
                                                i + 1,
                                                Ao({}, o[i + 1], {
                                                    showDate: o[i + 1].showDate || a.showDate,
                                                }),
                                                o
                                            )
                                          : o),
                                  (s = Wr(i, s))),
                            Ao({}, e, {
                                Chat: Ao({}, e.Chat, {
                                    [n]: Ao({}, e.Chat[n], {
                                        timeline: s,
                                    }),
                                }),
                            })
                        );
                    },
                    d = (e, t, n) => {
                        let { chat: r, events: o } = t,
                            [i, ...u] = e.Chat[r].timeline;
                        const s = re(o);
                        i &&
                            ko(s.timestamp, i.timestamp) &&
                            (i = Ao({}, i, {
                                showDate: !ko(Date.now(), i.timestamp),
                            }));
                        const l = a(n, r, o),
                            c = i ? [...l, i, ...u] : l,
                            [d] = o,
                            p = !ko(d.timestamp, Date.now());
                        return Ao({}, e, {
                            Chat: Ao({}, e.Chat, {
                                [r]: Ao({}, e.Chat[r], {
                                    hasDividers: p,
                                    timeline: c,
                                }),
                            }),
                        });
                    },
                    p = (e, t, n) => {
                        let { id: r } = t;
                        return Ao({}, e, {
                            Chat: Ao({}, e.Chat, {
                                [r]: {
                                    timeline: a(n, r, L(n, r).events),
                                },
                            }),
                        });
                    };
                return (e, t) => {
                    let { type: n, payload: o } = t;
                    if (X(e.views))
                        return Ao({}, e, {
                            views: u(e.views, 0, e),
                        });
                    switch (n) {
                        case String(k):
                            return Ao({}, e, {
                                views: s(e.views, o, e),
                            });
                        case String(B):
                        case String(y):
                            return Ao({}, e, {
                                views: l(e.views, o, e),
                            });
                        case String(G):
                            return Ao({}, e, {
                                views: c(e.views, o),
                            });
                        case String(q):
                            return Ao({}, e, {
                                views: d(e.views, o, e),
                            });
                        case String(Q):
                            return Ao({}, e, {
                                views: Ur(o.name.replace(/\//gi, '.'), o.data, e.views),
                            });
                        case String(w):
                            return Ao({}, e, {
                                views: Io(e.views, o),
                            });
                        case String(f):
                            return Ao({}, e, {
                                views: Ur(o.path.replace(/\//gi, '.') + '._default', o.name, e.views),
                            });
                        case String(J):
                            return Ao({}, e, {
                                views: p(e.views, o, e),
                            });
                        case String(g):
                            return Ao({}, e, {
                                views: Ao({}, e.views, {
                                    current: o.name,
                                }),
                            });
                        case String($): {
                            const t = o.name.replace(/\//gi, '.');
                            return Ao({}, e, {
                                views: Ur(t, Ao({}, r(t, e.views), o.data), e.views),
                            });
                        }
                        default:
                            return e;
                    }
                };
            })(t)
        );

function No() {
    return (
        (No = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        No.apply(null, arguments)
    );
}

function Wo(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = {});
    const n = nr(),
        r = zr,
        o = no(),
        i = Zr(
            jo(
                (e => {
                    const { entities: t = {}, session: n = {} } = e,
                        { id: r = 'session_' + de() } = n,
                        { users: o = [] } = t;
                    return No({}, e, {
                        entities: No({}, t, {
                            users: pe(e => e.id === r, o)
                                ? o
                                : [
                                      ...o,
                                      {
                                          id: r,
                                          serverId: null,
                                      },
                                  ],
                        }),
                        session: No({}, n, {
                            id: r,
                        }),
                    });
                })(e),
                t
            ),
            void 0,
            r(to(o))
        );
    o.add(uo(n.emit));
    const a = i.getState();
    let u = a,
        s = a;
    return (
        i.subscribe(() => {
            const e = i.getState();
            s !== e && ([u, s] = [s, e]);
        }),
        Tr(i, ce(De, i), se(le, i.getState), {
            getPreviousState: () => u,
            emit: n.emit,
            on: n.on,
            once: n.once,
            off(e, t) {
                if (!e || !t) throw new Error('.off needs to be called with both type and handler arguments.');
                if ('*' === e) throw new Error(".off('*', ...) is not supported.");
                n.off(e, t);
            },
        }),
        i
    );
}
var Vo = rr.createContext(null),
    Uo = {
        notify: function () {},
    };
var Ho = (function () {
        function e(e, t) {
            (this.store = e),
                (this.parentSub = t),
                (this.unsubscribe = null),
                (this.listeners = Uo),
                (this.handleChangeWrapper = this.handleChangeWrapper.bind(this));
        }
        var t = e.prototype;
        return (
            (t.addNestedSub = function (e) {
                return this.trySubscribe(), this.listeners.subscribe(e);
            }),
            (t.notifyNestedSubs = function () {
                this.listeners.notify();
            }),
            (t.handleChangeWrapper = function () {
                this.onStateChange && this.onStateChange();
            }),
            (t.isSubscribed = function () {
                return Boolean(this.unsubscribe);
            }),
            (t.trySubscribe = function () {
                var e, t, n;
                this.unsubscribe ||
                    ((this.unsubscribe = this.parentSub
                        ? this.parentSub.addNestedSub(this.handleChangeWrapper)
                        : this.store.subscribe(this.handleChangeWrapper)),
                    (this.listeners =
                        ((e = me()),
                        (t = null),
                        (n = null),
                        {
                            clear: function () {
                                (t = null), (n = null);
                            },
                            notify: function () {
                                e(function () {
                                    for (var e = t; e; ) e.callback(), (e = e.next);
                                });
                            },
                            get: function () {
                                for (var e = [], n = t; n; ) e.push(n), (n = n.next);
                                return e;
                            },
                            subscribe: function (e) {
                                var r = !0,
                                    o = (n = {
                                        callback: e,
                                        next: null,
                                        prev: n,
                                    });
                                return (
                                    o.prev ? (o.prev.next = o) : (t = o),
                                    function () {
                                        r &&
                                            null !== t &&
                                            ((r = !1),
                                            o.next ? (o.next.prev = o.prev) : (n = o.prev),
                                            o.prev ? (o.prev.next = o.next) : (t = o.next));
                                    }
                                );
                            },
                        })));
            }),
            (t.tryUnsubscribe = function () {
                this.unsubscribe &&
                    (this.unsubscribe(), (this.unsubscribe = null), this.listeners.clear(), (this.listeners = Uo));
            }),
            e
        );
    })(),
    qo =
        'undefined' != typeof window && void 0 !== window.document && void 0 !== window.document.createElement
            ? or.useLayoutEffect
            : or.useEffect;

function Go(e) {
    var t = e.store,
        n = e.context,
        r = e.children,
        o = or.useMemo(
            function () {
                var e = new Ho(t);
                return (
                    (e.onStateChange = e.notifyNestedSubs),
                    {
                        store: t,
                        subscription: e,
                    }
                );
            },
            [t]
        ),
        i = or.useMemo(
            function () {
                return t.getState();
            },
            [t]
        );
    qo(
        function () {
            var e = o.subscription;
            return (
                e.trySubscribe(),
                i !== t.getState() && e.notifyNestedSubs(),
                function () {
                    e.tryUnsubscribe(), (e.onStateChange = null);
                }
            );
        },
        [o, i]
    );
    var a = n || Vo;
    return rr.createElement(
        a.Provider,
        {
            value: o,
        },
        r
    );
}

function Ko(e, t) {
    return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
}

function Yo(e, t) {
    if (Ko(e, t)) return !0;
    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (var o = 0; o < n.length; o++)
        if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !Ko(e[n[o]], t[n[o]])) return !1;
    return !0;
}

function Zo() {
    return or.useContext(Vo);
}

function Xo(e) {
    void 0 === e && (e = Vo);
    var t =
        e === Vo
            ? Zo
            : function () {
                  return or.useContext(e);
              };
    return function () {
        return t().store;
    };
}
var $o = Xo(),
    Jo = function (e, t) {
        return e === t;
    };

function Qo(e) {
    void 0 === e && (e = Vo);
    var t =
        e === Vo
            ? Zo
            : function () {
                  return or.useContext(e);
              };
    return function (e, n) {
        void 0 === n && (n = Jo);
        var r = t(),
            o = (function (e, t, n, r) {
                var o,
                    i = or.useReducer(function (e) {
                        return e + 1;
                    }, 0)[1],
                    a = or.useMemo(
                        function () {
                            return new Ho(n, r);
                        },
                        [n, r]
                    ),
                    u = or.useRef(),
                    s = or.useRef(),
                    l = or.useRef(),
                    c = or.useRef(),
                    d = n.getState();
                try {
                    if (e !== s.current || d !== l.current || u.current) {
                        var p = e(d);
                        o = void 0 !== c.current && t(p, c.current) ? c.current : p;
                    } else o = c.current;
                } catch (D) {
                    throw (
                        (u.current &&
                            (D.message +=
                                '\nThe error may be correlated with this previous error:\n' + u.current.stack + '\n\n'),
                        D)
                    );
                }
                return (
                    qo(function () {
                        (s.current = e), (l.current = d), (c.current = o), (u.current = void 0);
                    }),
                    qo(
                        function () {
                            function e() {
                                try {
                                    var e = n.getState(),
                                        r = s.current(e);
                                    if (t(r, c.current)) return;
                                    (c.current = r), (l.current = e);
                                } catch (D) {
                                    u.current = D;
                                }
                                i();
                            }
                            return (
                                (a.onStateChange = e),
                                a.trySubscribe(),
                                e(),
                                function () {
                                    return a.tryUnsubscribe();
                                }
                            );
                        },
                        [n, a]
                    ),
                    o
                );
            })(e, n, r.store, r.subscription);
        return or.useDebugValue(o), o;
    };
}
var ei = Qo();
const ti = () => $o(),
    ni = (e, t) => {
        const n = ti();
        return ei(() => e(n), null != t ? t : Yo);
    },
    ri = ['children'];
const oi = or.createContext(void 0),
    ii = e => {
        let { children: t } = e;
        const { localize: n } = ti();
        return (
            ni(e => e.getState().localization),
            or.createElement(
                oi.Provider,
                {
                    value: n,
                },
                t
            )
        );
    },
    ai = e => {
        if ('string' == typeof e.children) {
            const { children: t } = e,
                n = (function (e, t) {
                    if (null == e) return {};
                    var n = {};
                    for (var r in e)
                        if ({}.hasOwnProperty.call(e, r)) {
                            if (-1 !== t.indexOf(r)) continue;
                            n[r] = e[r];
                        }
                    return n;
                })(e, ri);
            return or.createElement(oi.Consumer, null, e => e(t, n));
        }
        return or.createElement(oi.Consumer, e);
    };

function ui(e) {
    let { store: t, children: n } = e;
    return or.createElement(
        Go,
        {
            store: t,
        },
        or.createElement(ii, null, n)
    );
}

function si(e, t) {
    return t || (t = e.slice(0)), (e.raw = t), e;
}
const li = (e, t) => {
        fe((e, n) => {
            t.style[n] = e;
        }, e);
    },
    ci = (e, t) => {
        fe((e, n) => {
            'style' !== n ? t.setAttribute(n, e) : li(e, t);
        }, e);
    };
let di = null;
const pi = () => {
    if (di) return di;
    const e = document.createElement('div'),
        t = e.style;
    (t.width = '50px'), (t.height = '50px'), (t.overflow = 'scroll'), (t.direction = 'rtl');
    const n = document.createElement('div'),
        r = n.style;
    return (
        (r.width = '100px'),
        (r.height = '50px'),
        e.appendChild(n),
        document.body.appendChild(e),
        e.scrollLeft > 0
            ? (di = 'positive-descending')
            : ((e.scrollLeft = 1), (di = 0 === e.scrollLeft ? 'negative' : 'positive-ascending')),
        document.body.removeChild(e),
        di
    );
};
const Di = '0px 0.48px 2.41px -0.38px rgba(0, 0, 0, 0.08), 0px 4px 20px -0.75px rgba(0, 0, 0, 0.25)',
    mi = Di,
    fi = Di,
    hi = '0 0 0 1px ' + he,
    gi = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                enormous:
                    'rgba(0, 0, 0, 0.035) 0px 0.796192px 3.98096px -0.1875px, rgba(0, 0, 0, 0.047) 0px 2.41451px 12.0725px -0.375px, rgba(0, 0, 0, 0.075) 0px 6.38265px 31.9133px -0.5625px, rgba(0, 0, 0, 0.17) 0px 20px 100px -0.75px;',
                floating: Di,
                lg: fi,
                md: mi,
                outline: hi,
                sm: '0px 0.48px 2.22px -1.17px rgba(0, 0, 0, 0.14), 0px 1.83px 8.42px -2.33px rgba(0, 0, 0, 0.12), 0px 8px 36.8px -3.5px rgba(0, 0, 0, 0.06);',
                subtle: 'rgba(0, 0, 0, 0.125) 0px 0.362176px 0.941657px -1px, rgba(0, 0, 0, 0.18) 0px 3px 7.8px -2px',
                xl: 'rgba(0, 0, 0, 0.075) 0px 0.602187px 2.04744px -1.33333px, rgba(0, 0, 0, 0.067) 0px 2.28853px 7.78101px -2.66667px, rgba(0, 0, 0, 0.02) 0px 10px 34px -4px',
                xs: '0px 0.6px 0.54px -1.33px rgba(0, 0, 0, 0.15), 0px 2.29px 2.06px -2.67px rgba(0, 0, 0, 0.13), 0px 10px 9px -4px rgba(0, 0, 0, 0.04);',
            },
            Symbol.toStringTag,
            {
                value: 'Module',
            }
        )
    ),
    vi = e => e / 16 + 'rem',
    Ci = vi(18),
    bi = vi(16),
    Ei = vi(14),
    yi = vi(12),
    xi = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                space0: '0px',
                space1: '2px',
                space2: '4px',
                space3: '8px',
                space4: '10px',
                space5: '12px',
                space6: '16px',
                space7: '24px',
            },
            Symbol.toStringTag,
            {
                value: 'Module',
            }
        )
    ),
    Fi = {
        easeOutStrong: 'cubic-bezier(0.25, 1, 0.5, 1)',
        linear: 'cubic-bezier(0, 0, 1, 1)',
        sharp: 'cubic-bezier(0.33, 0, 0, 1)',
        smooth: 'cubic-bezier(0.33, 0, 0.67, 1)',
        swift: 'cubic-bezier(0.14, 0, 0, 1)',
        spring: 'cubic-bezier(0.18, 0.89, 0.32, 1.28)',
    },
    wi = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                easings: Fi,
            },
            Symbol.toStringTag,
            {
                value: 'Module',
            }
        )
    ),
    Ai = {
        fontSize: bi,
        fontWeight: 'bold',
    },
    Bi = {
        fontSize: Ei,
        fontWeight: 'bold',
    },
    ki = {
        fontSize: Ei,
        fontWeight: 'normal',
    },
    Si = {
        fontSize: Ei,
        fontWeight: 'normal',
    },
    Ti = {
        fontSize: yi,
        fontWeight: 'normal',
    },
    Li = {
        fontSize: Ei,
        fontWeight: 'normal',
    },
    Pi = {
        fontSize: Ei,
        fontWeight: 'normal',
    },
    Mi = {
        fontSize: yi,
        fontWeight: 'normal',
    },
    Oi = {
        fontSize: Ci,
        fontWeight: 'bold',
    },
    Ii = {
        fontSize: Ei,
        fontWeight: 'bold',
    },
    zi = {
        fontSize: yi,
        fontWeight: 'bold',
    },
    _i = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                basic: Li,
                basicContrast: Pi,
                buttonText: Ii,
                caption: Ti,
                code: {
                    fontFamily: 'monospace !important',
                    fontSize: '13px',
                    fontWeight: 'normal',
                },
                errorCaption: Mi,
                heading: Ai,
                heroHeader: Oi,
                input: ki,
                placeholder: Si,
                strongCaption: zi,
                subheading: Bi,
            },
            Symbol.toStringTag,
            {
                value: 'Module',
            }
        )
    ),
    Ri = e => {
        let { organizationId: t, group: n, uniqueGroups: r } = e;
        return t + (r ? ':' + n : '') + ':state';
    },
    ji = e => ge(e, ['ar', 'he', 'fa']),
    Ni = e => {
        document.documentElement.lang = e;
    },
    Wi = e => e.replace(/\?+$/, '');

function Vi(e, t) {
    return 'object' == typeof e && 'object' == typeof t ? Ui(e, t) : e;
}

function Ui(e, t) {
    if (null === e || null === t) return e === t ? null : e;
    let n;
    if (Array.isArray(e)) {
        n = new Array(e.length);
        for (let r = 0; r < e.length; r++) e[r] !== t[r] && (n[r] = Vi(e[r], t[r]));
    } else {
        n = {};
        new Set([...Object.keys(e), ...Object.keys(t)]).forEach(r => {
            e[r] !== t[r] && (n[r] = r in e ? Vi(e[r], t[r]) : void 0);
        });
    }
    return n;
}

function Hi(e, t) {
    let { schema: i, preSave: a } = t;
    const u = n(e => {
            let { defaultValue: t } = e;
            return t;
        }, i),
        s = Object.keys(i),
        l = Pr(
            e => ir({}, u, e),
            e =>
                n(e => {
                    let { value: t } = e;
                    return t;
                }, e),
            e => {
                const t = Date.now();
                return Ce((e, n) => {
                    let { expires: r } = e;
                    return r < t || void 0 === i[n];
                }, e);
            },
            JSON.parse,
            ((c = '{}'),
            e =>
                (function (e) {
                    return null == e;
                })(e)
                    ? c
                    : e),
            e => ve.getItem(e)
        );
    var c;
    const d = Pr(JSON.stringify, e => {
        const t = Date.now() + 18e5;
        return n(
            e => ({
                value: e,
                expires: t,
            }),
            e
        );
    });
    let p;
    return {
        persist: t => (
            t.subscribe(() => {
                const n = ((u = t.getState()), s.reduce((e, t) => ((e[t] = r(i[t].path, u)), e), {}));
                var u;
                const c = Ui(n, p);
                null === c || X(c) || (ve.setItem(e, d(a(o(l(e), c)))), (p = n));
            }),
            t
        ),
        rehydrate() {
            return (p = l(e)), (t = p), s.reduce((e, n) => Ur(i[n].path, t[n], e), {});
            var t;
        },
    };
}
const qi = e => {
        let t;
        const n = [],
            r = be();
        return (
            (e.startStateSync = o => {
                (t = e.getState()), o.emit('state', t);
                const i = () => {
                        n.forEach(e => {
                            let [t, n] = e;
                            o.emit(t, n);
                        }),
                            (n.length = 0);
                    },
                    a = (e, t) => {
                        1 === n.push([e, t]) && setTimeout(i, 0);
                    };
                e.subscribe(() => {
                    const n = e.getState();
                    n !== t && (a('state_diff', Ui(n, t)), (t = n));
                });
                const u = /^request_/;
                e.on('*', (e, t) => {
                    u.test(e) || a('store_event', [e, t]);
                }),
                    r.resolve(void 0);
            }),
            (e.syncing = () => r.promise),
            e
        );
    },
    Gi = {
        application: {
            organizationId: '',
            rtl: !1,
            s: !1,
            region: null,
            actingAsDirectLink: !1,
            availability: null,
            isSendingFileEvents: !1,
            clientLimitExceeded: !1,
            clientLimitExceededLifted: !1,
            limitReached: !1,
            defaultWidget: 'livechat',
            currentChat: xe,
            config: {
                features: {
                    agentAvatar: {
                        enabled: !0,
                    },
                    boosters: {
                        enabled: !1,
                        items: [],
                    },
                    chatHistory: {
                        enabled: !1,
                    },
                    continuousChat: {
                        enabled: !1,
                    },
                    creditCardMasking: {
                        enabled: !1,
                    },
                    disableSounds: {
                        enabled: !1,
                    },
                    emailTranscript: {
                        enabled: !0,
                    },
                    facebookButton: {
                        enabled: !1,
                    },
                    fileSharing: {
                        enabled: !0,
                    },
                    emojiPicker: {
                        enabled: !0,
                    },
                    googlePlusButton: {
                        enabled: !1,
                    },
                    hideOnInit: {
                        enabled: !1,
                    },
                    hideTrademark: {
                        enabled: !1,
                    },
                    linksPreview: {
                        enabled: !0,
                    },
                    logo: {
                        enabled: !0,
                        path: 'https://cdn.livechat-static.com/api/file/lc/main/default/logo/c4bf6633aa89a76af7461279581d8bdb.png',
                    },
                    ticketForm: {
                        enabled: !0,
                        mode: 'livechat',
                    },
                    preChatAfterGreeting: {
                        enabled: !0,
                    },
                    preChatForm: {
                        enabled: !1,
                    },
                    rating: {
                        enabled: !0,
                    },
                    twitterButton: {
                        enabled: !1,
                    },
                    mobileMinimized: {
                        enabled: !0,
                    },
                    minimized: {
                        enabled: !0,
                    },
                    homeScreen: {
                        enabled: !0,
                    },
                    queue: {
                        writingInQueueEnabled: !1,
                    },
                    utmParams: {
                        enabled: !0,
                    },
                    addToWebsiteButton: {
                        enabled: !0,
                    },
                    textApp: {
                        enabled: !1,
                    },
                    privacyPolicy: {
                        enabled: !1,
                        text: '',
                    },
                },
                minimizedType: 'bar',
                mobileMinimizedType: 'bar',
                screenPosition: 'right',
                mobileScreenPosition: 'right',
                disabledOnMobile: !1,
                screenOffset: {
                    x: 0,
                    y: 0,
                },
                properties: {
                    license: {},
                    group: {},
                },
                theme: {},
                nonProfitLicense: !1,
            },
            destroyed: !1,
            eagerFetchingMode: !1,
            embedded: !0,
            requestedGroup: null,
            mobileWrapper: null,
            invitation: {
                current: null,
                hiddenIds: [],
                displayedIds: [],
            },
            isInCustomContainer: !1,
            isMinimizedForcefullyDisabled: !1,
            hasUnseenEvents: !1,
            hidden: !1,
            maximized: !1,
            pageFocused: !1,
            applicationFocused: !1,
            mobile: Ee(),
            muted: !1,
            readyState: Fe,
            loadedInitialHistory: !1,
            integrationName: null,
            language: null,
            localizationVersion: null,
            clientVisitNumber: 0,
            clientChatNumber: 0,
            visibility: {
                state: 'minimized',
                interactionModality: 'virtual',
            },
            greetingsMuted: !1,
            isPreview: !1,
            isConfigurator: !1,
            dropAreaVisible: !1,
            wasActivated: !1,
            isReturning: !1,
            clientLastVisitTimestamp: null,
            clientPageViewsCount: 0,
            page: {
                title: '',
                url: '',
                referrer: '',
            },
            owApiURL: '',
            messageDraft: '',
            initialMessageDraft: null,
            locationHistory: {
                history: [],
                updatedAt: new Date().getTime(),
            },
            recommendations: {
                id: '',
                products: [],
                hiddenIds: [],
            },
            pendingOpenAIRunId: null,
            streamedOpenAIMessage: null,
            contactInvitation: {},
            chatBotGreeting: {},
            lightbox: {
                state: 'closed',
            },
            visitorCounter: {
                session: {
                    sessions: 0,
                },
            },
            googleReviews: {},
            minimizedMessageInput: {
                isVisible: !1,
                state: 'hidden',
                closed: !1,
                isPrivacyPolicyBannerClosing: !1,
                closingGreetingId: null,
            },
            disableSendingMessage: !1,
            clientWidth: 0,
            clientHeight: 0,
            postponedGreeting: null,
            limits: [],
            header: {
                text: '',
                logo: '',
                backgroundType: 'gradient',
            },
            showChatPreviewWarningBanner: !1,
            hideMinimizeButton: !1,
            hideMeatballsMenu: !1,
            textInputMaxLength: null,
            showTextSelectionTracking: !1,
            enableMinimizedMessageInputLayout: !1,
            privacyPolicyBannerState: 'unset',
            websiteTextSelection: {
                text: '',
                state: 'hidden',
            },
            welcomeMessageId: null,
            isExitIntentShadeDisplayed: !1,
            isLargeWidget: !1,
        },
    },
    Ki = {
        boosters: !0,
        carousel: !0,
        emoji: !0,
        form: !0,
        image_preview: !0,
        message: !0,
        rich_message: !0,
        sticker: !0,
        system_message: !0,
        url_preview: !0,
        email_prompt: !0,
        message_draft: !0,
    },
    Yi = {
        boosters: !0,
        carousel: !0,
        form: !0,
    },
    Zi = e =>
        Wo(e, {
            shouldAddToTimeline: e => Ki[e.type],
            shouldCreateNewGroup: (e, t) => !!Yi[e.type] || !(!t || 'carousel' !== t.type),
        }),
    Xi = (e, t) => {
        const { persistKey: n } = t || {},
            r = Hi(n, {
                schema: {
                    messageDraft: {
                        path: ['application', 'messageDraft'],
                        defaultValue: null,
                    },
                    clientLimitExceededLifted: {
                        path: ['application', 'clientLimitExceededLifted'],
                        defaultValue: !1,
                    },
                    eyeCatcherHidden: {
                        path: ['application', 'eyeCatcher', 'hidden'],
                        defaultValue: !1,
                    },
                    invitationHiddenIds: {
                        path: ['application', 'invitation', 'hiddenIds'],
                        defaultValue: [],
                    },
                    invitationDisplayedIds: {
                        path: ['application', 'invitation', 'displayedIds'],
                        defaultValue: [],
                    },
                    maximized: {
                        path: ['application', 'maximized'],
                        defaultValue: !1,
                    },
                    visibility: {
                        path: ['application', 'visibility'],
                        defaultValue: {
                            state: 'minimized',
                        },
                    },
                    muted: {
                        path: ['application', 'muted'],
                        defaultValue: !1,
                    },
                    limitReached: {
                        path: ['application', 'limitReached'],
                        defaultValue: !1,
                    },
                    greetingsMuted: {
                        path: ['application', 'greetingsMuted'],
                        defaultValue: !1,
                    },
                    wasActivated: {
                        path: ['application', 'wasActivated'],
                        defaultValue: !1,
                    },
                    currentView: {
                        path: ['views', 'current'],
                    },
                    locationHistory: {
                        path: ['application', 'locationHistory'],
                        defaultValue: {
                            history: [],
                            updatedAt: new Date().getTime(),
                        },
                    },
                    recommendations: {
                        path: ['application', 'recommendations'],
                        defaultValue: {
                            id: '',
                            products: [],
                            hiddenIds: [],
                        },
                    },
                    pendingOpenAIRunId: {
                        path: ['application', 'pendingOpenAIRunId'],
                        defaultValue: null,
                    },
                    contactInvitation: {
                        path: ['application', 'contactInvitation'],
                        defaultValue: {
                            hidden: !1,
                            hasSeen: !1,
                        },
                    },
                    chatBotGreeting: {
                        path: ['application', 'chatBotGreeting'],
                        defaultValue: {
                            hidden: !1,
                            hasSeen: !1,
                        },
                    },
                    postponedGreeting: {
                        path: ['application', 'postponedGreeting'],
                        defaultValue: null,
                    },
                    pipConsent: {
                        path: ['application', 'pipConsent'],
                        defaultValue: null,
                    },
                    minimizedMessageInput: {
                        path: ['application', 'minimizedMessageInput', 'closed'],
                        defaultValue: !1,
                    },
                    welcomeMessageId: {
                        path: ['application', 'welcomeMessageId'],
                        defaultValue: null,
                    },
                    isLargeWidget: {
                        path: ['application', 'isLargeWidget'],
                        defaultValue: !1,
                    },
                },
                preSave: e =>
                    ir({}, e, {
                        visibility: {
                            state: e.visibility && 'hidden' === e.visibility.state ? 'minimized' : e.visibility.state,
                        },
                    }),
            }),
            i = o(Gi, o(e, r.rehydrate()));
        return Pr(r.persist, qi, Zi)(i);
    },
    $i = e =>
        Zi(
            Or(Gi, e, {
                application: {
                    isPreview: !0,
                },
            })
        ),
    Ji = [
        {
            id: 'iframekb',
            template: 'moment',
            title: 'Knowledge Base',
            description: 'Save time with Knowledge Base - easy to access know-how right in the LiveChat widget',
            icon: 'https://www.knowledgebase.ai/apple-touch-icon.71342b95.png',
            action: {
                type: 'button',
                label: 'Search',
                url: 'https://livechat.kb.help/',
            },
        },
    ],
    Qi = (e, t, n) => {
        const r = !!ye('lc_boosters', window.location.search)
                ? (e =>
                      o(e, {
                          application: {
                              config: {
                                  features: {
                                      boosters: {
                                          enabled: !0,
                                          items: Ji,
                                      },
                                  },
                              },
                          },
                      }))(e)
                : e,
            i = (n ? $i : Xi)(r, t);
        return (
            i.addView('Chat/postchat'),
            i.addView('Chat/prechat'),
            i.addView('Chat/queue'),
            i.addView('minimized', {
                text: 'Chat',
            }),
            i.addView('Chat/ticketForm'),
            i.addView('Moment', {
                show: !1,
                data: {},
            }),
            i.addChat({
                id: xe,
                active: !1,
                properties: {
                    agentActivity: null,
                    ended: !1,
                    fakeAgentMessageId: null,
                    hasMoreHistory: null,
                    lastThread: null,
                    previousThread: null,
                    loadingHistory: !1,
                    queued: !1,
                    rate: null,
                    rateComment: null,
                    starting: !1,
                    startChatAgainPending: !1,
                    eventsSeenUpToMap: {},
                    currentAgent: null,
                },
            }),
            i
        );
    };
var ea = (function () {
        function e(e) {
            var t = this;
            (this._insertTag = function (e) {
                var n;
                (n =
                    0 === t.tags.length
                        ? t.prepend
                            ? t.container.firstChild
                            : t.before
                        : t.tags[t.tags.length - 1].nextSibling),
                    t.container.insertBefore(e, n),
                    t.tags.push(e);
            }),
                (this.isSpeedy = void 0 === e.speedy || e.speedy),
                (this.tags = []),
                (this.ctr = 0),
                (this.nonce = e.nonce),
                (this.key = e.key),
                (this.container = e.container),
                (this.prepend = e.prepend),
                (this.before = null);
        }
        var t = e.prototype;
        return (
            (t.hydrate = function (e) {
                e.forEach(this._insertTag);
            }),
            (t.insert = function (e) {
                this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
                    this._insertTag(
                        (function (e) {
                            var t = document.createElement('style');
                            return (
                                t.setAttribute('data-emotion', e.key),
                                void 0 !== e.nonce && t.setAttribute('nonce', e.nonce),
                                t.appendChild(document.createTextNode('')),
                                t.setAttribute('data-s', ''),
                                t
                            );
                        })(this)
                    );
                var t = this.tags[this.tags.length - 1];
                if (this.isSpeedy) {
                    var n = (function (e) {
                        if (e.sheet) return e.sheet;
                        for (var t = 0; t < document.styleSheets.length; t++)
                            if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
                    })(t);
                    try {
                        n.insertRule(e, n.cssRules.length);
                    } catch (gm) {}
                } else t.appendChild(document.createTextNode(e));
                this.ctr++;
            }),
            (t.flush = function () {
                this.tags.forEach(function (e) {
                    return e.parentNode.removeChild(e);
                }),
                    (this.tags = []),
                    (this.ctr = 0);
            }),
            e
        );
    })(),
    ta = '-ms-',
    na = '-moz-',
    ra = '-webkit-',
    oa = 'comm',
    ia = 'rule',
    aa = 'decl',
    ua = Math.abs,
    sa = String.fromCharCode;

function la(e) {
    return e.trim();
}

function ca(e, t, n) {
    return e.replace(t, n);
}

function da(e, t) {
    return e.indexOf(t);
}

function pa(e, t) {
    return 0 | e.charCodeAt(t);
}

function Da(e, t, n) {
    return e.slice(t, n);
}

function ma(e) {
    return e.length;
}

function fa(e) {
    return e.length;
}

function ha(e, t) {
    return t.push(e), e;
}
var ga = 1,
    va = 1,
    Ca = 0,
    ba = 0,
    Ea = 0,
    ya = '';

function xa(e, t, n, r, o, i, a) {
    return {
        value: e,
        root: t,
        parent: n,
        type: r,
        props: o,
        children: i,
        line: ga,
        column: va,
        length: a,
        return: '',
    };
}

function Fa(e, t, n) {
    return xa(e, t.root, t.parent, n, t.props, t.children, 0);
}

function wa() {
    return (Ea = ba > 0 ? pa(ya, --ba) : 0), va--, 10 === Ea && ((va = 1), ga--), Ea;
}

function Aa() {
    return (Ea = ba < Ca ? pa(ya, ba++) : 0), va++, 10 === Ea && ((va = 1), ga++), Ea;
}

function Ba() {
    return pa(ya, ba);
}

function ka() {
    return ba;
}

function Sa(e, t) {
    return Da(ya, e, t);
}

function Ta(e) {
    switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1;
    }
    return 0;
}

function La(e) {
    return (ga = va = 1), (Ca = ma((ya = e))), (ba = 0), [];
}

function Pa(e) {
    return (ya = ''), e;
}

function Ma(e) {
    return la(Sa(ba - 1, za(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
}

function Oa(e) {
    for (; (Ea = Ba()) && Ea < 33; ) Aa();
    return Ta(e) > 2 || Ta(Ea) > 3 ? '' : ' ';
}

function Ia(e, t) {
    for (; --t && Aa() && !(Ea < 48 || Ea > 102 || (Ea > 57 && Ea < 65) || (Ea > 70 && Ea < 97)); );
    return Sa(e, ka() + (t < 6 && 32 == Ba() && 32 == Aa()));
}

function za(e) {
    for (; Aa(); )
        switch (Ea) {
            case e:
                return ba;
            case 34:
            case 39:
                return za(34 === e || 39 === e ? e : Ea);
            case 40:
                41 === e && za(e);
                break;
            case 92:
                Aa();
        }
    return ba;
}

function _a(e, t) {
    for (; Aa() && e + Ea !== 57 && (e + Ea !== 84 || 47 !== Ba()); );
    return '/*' + Sa(t, ba - 1) + '*' + sa(47 === e ? e : Aa());
}

function Ra(e) {
    for (; !Ta(Ba()); ) Aa();
    return Sa(e, ba);
}

function ja(e) {
    return Pa(Na('', null, null, null, [''], (e = La(e)), 0, [0], e));
}

function Na(e, t, n, r, o, i, a, u, s) {
    for (
        var l = 0, c = 0, d = a, p = 0, D = 0, m = 0, f = 1, h = 1, g = 1, v = 0, C = '', b = o, E = i, y = r, x = C;
        h;

    )
        switch (((m = v), (v = Aa()))) {
            case 34:
            case 39:
            case 91:
            case 40:
                x += Ma(v);
                break;
            case 9:
            case 10:
            case 13:
            case 32:
                x += Oa(m);
                break;
            case 92:
                x += Ia(ka() - 1, 7);
                continue;
            case 47:
                switch (Ba()) {
                    case 42:
                    case 47:
                        ha(Va(_a(Aa(), ka()), t, n), s);
                        break;
                    default:
                        x += '/';
                }
                break;
            case 123 * f:
                u[l++] = ma(x) * g;
            case 125 * f:
            case 59:
            case 0:
                switch (v) {
                    case 0:
                    case 125:
                        h = 0;
                    case 59 + c:
                        D > 0 &&
                            ma(x) - d &&
                            ha(D > 32 ? Ua(x + ';', r, n, d - 1) : Ua(ca(x, ' ', '') + ';', r, n, d - 2), s);
                        break;
                    case 59:
                        x += ';';
                    default:
                        if ((ha((y = Wa(x, t, n, l, c, o, u, C, (b = []), (E = []), d)), i), 123 === v))
                            if (0 === c) Na(x, t, y, y, b, i, d, u, E);
                            else
                                switch (p) {
                                    case 100:
                                    case 109:
                                    case 115:
                                        Na(
                                            e,
                                            y,
                                            y,
                                            r && ha(Wa(e, y, y, 0, 0, o, u, C, o, (b = []), d), E),
                                            o,
                                            E,
                                            d,
                                            u,
                                            r ? b : E
                                        );
                                        break;
                                    default:
                                        Na(x, y, y, y, [''], E, d, u, E);
                                }
                }
                (l = c = D = 0), (f = g = 1), (C = x = ''), (d = a);
                break;
            case 58:
                (d = 1 + ma(x)), (D = m);
            default:
                if (f < 1)
                    if (123 == v) --f;
                    else if (125 == v && 0 == f++ && 125 == wa()) continue;
                switch (((x += sa(v)), v * f)) {
                    case 38:
                        g = c > 0 ? 1 : ((x += '\f'), -1);
                        break;
                    case 44:
                        (u[l++] = (ma(x) - 1) * g), (g = 1);
                        break;
                    case 64:
                        45 === Ba() && (x += Ma(Aa())), (p = Ba()), (c = ma((C = x += Ra(ka())))), v++;
                        break;
                    case 45:
                        45 === m && 2 == ma(x) && (f = 0);
                }
        }
    return i;
}

function Wa(e, t, n, r, o, i, a, u, s, l, c) {
    for (var d = o - 1, p = 0 === o ? i : [''], D = fa(p), m = 0, f = 0, h = 0; m < r; ++m)
        for (var g = 0, v = Da(e, d + 1, (d = ua((f = a[m])))), C = e; g < D; ++g)
            (C = la(f > 0 ? p[g] + ' ' + v : ca(v, /&\f/g, p[g]))) && (s[h++] = C);
    return xa(e, t, n, 0 === o ? ia : u, s, l, c);
}

function Va(e, t, n) {
    return xa(e, t, n, oa, sa(Ea), Da(e, 2, -2), 0);
}

function Ua(e, t, n, r) {
    return xa(e, t, n, aa, Da(e, 0, r), Da(e, r + 1, -1), r);
}

function Ha(e, t) {
    switch (
        (function (e, t) {
            return (((((((t << 2) ^ pa(e, 0)) << 2) ^ pa(e, 1)) << 2) ^ pa(e, 2)) << 2) ^ pa(e, 3);
        })(e, t)
    ) {
        case 5103:
            return ra + 'print-' + e + e;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return ra + e + e;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return ra + e + na + e + ta + e + e;
        case 6828:
        case 4268:
            return ra + e + ta + e + e;
        case 6165:
            return ra + e + ta + 'flex-' + e + e;
        case 5187:
            return ra + e + ca(e, /(\w+).+(:[^]+)/, ra + 'box-$1$2' + ta + 'flex-$1$2') + e;
        case 5443:
            return ra + e + ta + 'flex-item-' + ca(e, /flex-|-self/, '') + e;
        case 4675:
            return ra + e + ta + 'flex-line-pack' + ca(e, /align-content|flex-|-self/, '') + e;
        case 5548:
            return ra + e + ta + ca(e, 'shrink', 'negative') + e;
        case 5292:
            return ra + e + ta + ca(e, 'basis', 'preferred-size') + e;
        case 6060:
            return ra + 'box-' + ca(e, '-grow', '') + ra + e + ta + ca(e, 'grow', 'positive') + e;
        case 4554:
            return ra + ca(e, /([^-])(transform)/g, '$1' + ra + '$2') + e;
        case 6187:
            return ca(ca(ca(e, /(zoom-|grab)/, ra + '$1'), /(image-set)/, ra + '$1'), e, '') + e;
        case 5495:
        case 3959:
            return ca(e, /(image-set\([^]*)/, ra + '$1$`$1');
        case 4968:
            return (
                ca(ca(e, /(.+:)(flex-)?(.*)/, ra + 'box-pack:$3' + ta + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') +
                ra +
                e +
                e
            );
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return ca(e, /(.+)-inline(.+)/, ra + '$1$2') + e;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if (ma(e) - 1 - t > 6)
                switch (pa(e, t + 1)) {
                    case 109:
                        if (45 !== pa(e, t + 4)) break;
                    case 102:
                        return (
                            ca(
                                e,
                                /(.+:)(.+)-([^]+)/,
                                '$1' + ra + '$2-$3$1' + na + (108 == pa(e, t + 3) ? '$3' : '$2-$3')
                            ) + e
                        );
                    case 115:
                        return ~da(e, 'stretch') ? Ha(ca(e, 'stretch', 'fill-available'), t) + e : e;
                }
            break;
        case 4949:
            if (115 !== pa(e, t + 1)) break;
        case 6444:
            switch (pa(e, ma(e) - 3 - (~da(e, '!important') && 10))) {
                case 107:
                    return ca(e, ':', ':' + ra) + e;
                case 101:
                    return (
                        ca(
                            e,
                            /(.+:)([^;!]+)(;|!.+)?/,
                            '$1' + ra + (45 === pa(e, 14) ? 'inline-' : '') + 'box$3$1' + ra + '$2$3$1' + ta + '$2box$3'
                        ) + e
                    );
            }
            break;
        case 5936:
            switch (pa(e, t + 11)) {
                case 114:
                    return ra + e + ta + ca(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
                case 108:
                    return ra + e + ta + ca(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
                case 45:
                    return ra + e + ta + ca(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
            }
            return ra + e + ta + e + e;
    }
    return e;
}

function qa(e, t) {
    for (var n = '', r = fa(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || '';
    return n;
}

function Ga(e, t, n, r) {
    switch (e.type) {
        case '@import':
        case aa:
            return (e.return = e.return || e.value);
        case oa:
            return '';
        case ia:
            e.value = e.props.join(',');
    }
    return ma((n = qa(e.children, r))) ? (e.return = e.value + '{' + n + '}') : '';
}

function Ka(e, t, n, r) {
    if (!e.return)
        switch (e.type) {
            case aa:
                e.return = Ha(e.value, e.length);
                break;
            case '@keyframes':
                return qa([Fa(ca(e.value, '@', '@' + ra), e, '')], r);
            case ia:
                if (e.length)
                    return (function (e, t) {
                        return e.map(t).join('');
                    })(e.props, function (t) {
                        switch (
                            (function (e, t) {
                                return (e = t.exec(e)) ? e[0] : e;
                            })(t, /(::plac\w+|:read-\w+)/)
                        ) {
                            case ':read-only':
                            case ':read-write':
                                return qa([Fa(ca(t, /:(read-\w+)/, ':-moz-$1'), e, '')], r);
                            case '::placeholder':
                                return qa(
                                    [
                                        Fa(ca(t, /:(plac\w+)/, ':' + ra + 'input-$1'), e, ''),
                                        Fa(ca(t, /:(plac\w+)/, ':-moz-$1'), e, ''),
                                        Fa(ca(t, /:(plac\w+)/, ta + 'input-$1'), e, ''),
                                    ],
                                    r
                                );
                        }
                        return '';
                    });
        }
}
var Ya = function (e) {
    var t = new WeakMap();
    return function (n) {
        if (t.has(n)) return t.get(n);
        var r = e(n);
        return t.set(n, r), r;
    };
};

function Za(e) {
    var t = Object.create(null);
    return function (n) {
        return void 0 === t[n] && (t[n] = e(n)), t[n];
    };
}
var Xa = function (e, t) {
        return Pa(
            (function (e, t) {
                var n = -1,
                    r = 44;
                do {
                    switch (Ta(r)) {
                        case 0:
                            38 === r && 12 === Ba() && (t[n] = 1), (e[n] += Ra(ba - 1));
                            break;
                        case 2:
                            e[n] += Ma(r);
                            break;
                        case 4:
                            if (44 === r) {
                                (e[++n] = 58 === Ba() ? '&\f' : ''), (t[n] = e[n].length);
                                break;
                            }
                        default:
                            e[n] += sa(r);
                    }
                } while ((r = Aa()));
                return e;
            })(La(e), t)
        );
    },
    $a = new WeakMap(),
    Ja = function (e) {
        if ('rule' === e.type && e.parent && e.length) {
            for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line; 'rule' !== n.type; )
                if (!(n = n.parent)) return;
            if ((1 !== e.props.length || 58 === t.charCodeAt(0) || $a.get(n)) && !r) {
                $a.set(e, !0);
                for (var o = [], i = Xa(t, o), a = n.props, u = 0, s = 0; u < i.length; u++)
                    for (var l = 0; l < a.length; l++, s++)
                        e.props[s] = o[u] ? i[u].replace(/&\f/g, a[l]) : a[l] + ' ' + i[u];
            }
        }
    },
    Qa = function (e) {
        if ('decl' === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && ((e.return = ''), (e.value = ''));
        }
    },
    eu = [Ka],
    tu = function (e) {
        var t = e.key;
        if ('css' === t) {
            var n = document.querySelectorAll('style[data-emotion]:not([data-s])');
            Array.prototype.forEach.call(n, function (e) {
                -1 !== e.getAttribute('data-emotion').indexOf(' ') &&
                    (document.head.appendChild(e), e.setAttribute('data-s', ''));
            });
        }
        var r,
            o,
            i = e.stylisPlugins || eu,
            a = {},
            u = [];
        (r = e.container || document.head),
            Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function (e) {
                for (var t = e.getAttribute('data-emotion').split(' '), n = 1; n < t.length; n++) a[t[n]] = !0;
                u.push(e);
            });
        var s,
            l,
            c,
            d,
            p = [
                Ga,
                ((d = function (e) {
                    s.insert(e);
                }),
                function (e) {
                    e.root || ((e = e.return) && d(e));
                }),
            ],
            D =
                ((l = [Ja, Qa].concat(i, p)),
                (c = fa(l)),
                function (e, t, n, r) {
                    for (var o = '', i = 0; i < c; i++) o += l[i](e, t, n, r) || '';
                    return o;
                });
        o = function (e, t, n, r) {
            (s = n), qa(ja(e ? e + '{' + t.styles + '}' : t.styles), D), r && (m.inserted[t.name] = !0);
        };
        var m = {
            key: t,
            sheet: new ea({
                key: t,
                container: r,
                nonce: e.nonce,
                speedy: e.speedy,
                prepend: e.prepend,
            }),
            nonce: e.nonce,
            inserted: a,
            registered: {},
            insert: o,
        };
        return m.sheet.hydrate(u), m;
    };

function nu(e, t, n) {
    var r = '';
    return (
        n.split(' ').forEach(function (n) {
            void 0 !== e[n] ? t.push(e[n] + ';') : (r += n + ' ');
        }),
        r
    );
}
var ru = function (e, t, n) {
    var r = e.key + '-' + t.name;
    if ((!1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles), void 0 === e.inserted[t.name])) {
        var o = t;
        do {
            e.insert(t === o ? '.' + r : '', o, e.sheet, !0), (o = o.next);
        } while (void 0 !== o);
    }
};
var ou = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
    },
    iu = /[A-Z]|^ms/g,
    au = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    uu = function (e) {
        return 45 === e.charCodeAt(1);
    },
    su = function (e) {
        return null != e && 'boolean' != typeof e;
    },
    lu = Za(function (e) {
        return uu(e) ? e : e.replace(iu, '-$&').toLowerCase();
    }),
    cu = function (e, t) {
        switch (e) {
            case 'animation':
            case 'animationName':
                if ('string' == typeof t)
                    return t.replace(au, function (e, t, n) {
                        return (
                            (pu = {
                                name: t,
                                styles: n,
                                next: pu,
                            }),
                            t
                        );
                    });
        }
        return 1 === ou[e] || uu(e) || 'number' != typeof t || 0 === t ? t : t + 'px';
    };

function du(e, t, n) {
    if (null == n) return '';
    if (void 0 !== n.__emotion_styles) return n;
    switch (typeof n) {
        case 'boolean':
            return '';
        case 'object':
            if (1 === n.anim)
                return (
                    (pu = {
                        name: n.name,
                        styles: n.styles,
                        next: pu,
                    }),
                    n.name
                );
            if (void 0 !== n.styles) {
                var r = n.next;
                if (void 0 !== r)
                    for (; void 0 !== r; )
                        (pu = {
                            name: r.name,
                            styles: r.styles,
                            next: pu,
                        }),
                            (r = r.next);
                return n.styles + ';';
            }
            return (function (e, t, n) {
                var r = '';
                if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r += du(e, t, n[o]) + ';';
                else
                    for (var i in n) {
                        var a = n[i];
                        if ('object' != typeof a)
                            null != t && void 0 !== t[a]
                                ? (r += i + '{' + t[a] + '}')
                                : su(a) && (r += lu(i) + ':' + cu(i, a) + ';');
                        else if (!Array.isArray(a) || 'string' != typeof a[0] || (null != t && void 0 !== t[a[0]])) {
                            var u = du(e, t, a);
                            switch (i) {
                                case 'animation':
                                case 'animationName':
                                    r += lu(i) + ':' + u + ';';
                                    break;
                                default:
                                    r += i + '{' + u + '}';
                            }
                        } else for (var s = 0; s < a.length; s++) su(a[s]) && (r += lu(i) + ':' + cu(i, a[s]) + ';');
                    }
                return r;
            })(e, t, n);
        case 'function':
            if (void 0 !== e) {
                var o = pu,
                    i = n(e);
                return (pu = o), du(e, t, i);
            }
    }
    if (null == t) return n;
    var a = t[n];
    return void 0 !== a ? a : n;
}
var pu,
    Du = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    mu = function (e, t, n) {
        if (1 === e.length && 'object' == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
        var r = !0,
            o = '';
        pu = void 0;
        var i = e[0];
        null == i || void 0 === i.raw ? ((r = !1), (o += du(n, t, i))) : (o += i[0]);
        for (var a = 1; a < e.length; a++) (o += du(n, t, e[a])), r && (o += i[a]);
        Du.lastIndex = 0;
        for (var u, s = ''; null !== (u = Du.exec(o)); ) s += '-' + u[1];
        var l =
            (function (e) {
                for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4)
                    (t =
                        1540483477 *
                            (65535 &
                                (t =
                                    (255 & e.charCodeAt(r)) |
                                    ((255 & e.charCodeAt(++r)) << 8) |
                                    ((255 & e.charCodeAt(++r)) << 16) |
                                    ((255 & e.charCodeAt(++r)) << 24))) +
                        ((59797 * (t >>> 16)) << 16)),
                        (n =
                            (1540483477 * (65535 & (t ^= t >>> 24)) + ((59797 * (t >>> 16)) << 16)) ^
                            (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
                switch (o) {
                    case 3:
                        n ^= (255 & e.charCodeAt(r + 2)) << 16;
                    case 2:
                        n ^= (255 & e.charCodeAt(r + 1)) << 8;
                    case 1:
                        n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + ((59797 * (n >>> 16)) << 16);
                }
                return (
                    ((n = 1540483477 * (65535 & (n ^= n >>> 13)) + ((59797 * (n >>> 16)) << 16)) ^ (n >>> 15)) >>>
                    0
                ).toString(36);
            })(o) + s;
        return {
            name: l,
            styles: o,
            next: pu,
        };
    },
    fu = Object.prototype.hasOwnProperty,
    hu = or.createContext(
        'undefined' != typeof HTMLElement
            ? tu({
                  key: 'css',
              })
            : null
    ),
    gu = hu.Provider,
    vu = function (e) {
        return or.forwardRef(function (t, n) {
            var r = or.useContext(hu);
            return e(t, r, n);
        });
    },
    Cu = or.createContext({}),
    bu = function () {
        return or.useContext(Cu);
    },
    Eu = Ya(function (e) {
        return Ya(function (t) {
            return (function (e, t) {
                return 'function' == typeof t ? t(e) : ir({}, e, t);
            })(e, t);
        });
    }),
    yu = function (e) {
        var t = or.useContext(Cu);
        return (
            e.theme !== t && (t = Eu(t)(e.theme)),
            or.createElement(
                Cu.Provider,
                {
                    value: t,
                },
                e.children
            )
        );
    },
    xu = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
    Fu = vu(function (e, t, n) {
        var r = e.css;
        'string' == typeof r && void 0 !== t.registered[r] && (r = t.registered[r]);
        var o = e[xu],
            i = [r],
            a = '';
        'string' == typeof e.className
            ? (a = nu(t.registered, i, e.className))
            : null != e.className && (a = e.className + ' ');
        var u = mu(i, void 0, 'function' == typeof r || Array.isArray(r) ? or.useContext(Cu) : void 0);
        ru(t, u, 'string' == typeof o), (a += t.key + '-' + u.name);
        var s = {};
        for (var l in e) fu.call(e, l) && 'css' !== l && l !== xu && (s[l] = e[l]);
        return (s.ref = n), (s.className = a), or.createElement(o, s);
    }),
    wu = function (e, t) {
        var n = arguments;
        if (null == t || !fu.call(t, 'css')) return or.createElement.apply(void 0, n);
        var r = n.length,
            o = new Array(r);
        (o[0] = Fu),
            (o[1] = (function (e, t) {
                var n = {};
                for (var r in t) fu.call(t, r) && (n[r] = t[r]);
                return (n[xu] = e), n;
            })(e, t));
        for (var i = 2; i < r; i++) o[i] = n[i];
        return or.createElement.apply(null, o);
    },
    Au = vu(function (e, t) {
        var n = e.styles,
            r = mu([n], void 0, 'function' == typeof n || Array.isArray(n) ? or.useContext(Cu) : void 0),
            o = or.useRef();
        return (
            or.useLayoutEffect(
                function () {
                    var e = t.key + '-global',
                        n = new ea({
                            key: e,
                            nonce: t.sheet.nonce,
                            container: t.sheet.container,
                            speedy: t.sheet.isSpeedy,
                        }),
                        i = !1,
                        a = document.querySelector('style[data-emotion="' + e + ' ' + r.name + '"]');
                    return (
                        t.sheet.tags.length && (n.before = t.sheet.tags[0]),
                        null !== a && ((i = !0), a.setAttribute('data-emotion', e), n.hydrate([a])),
                        (o.current = [n, i]),
                        function () {
                            n.flush();
                        }
                    );
                },
                [t]
            ),
            or.useLayoutEffect(
                function () {
                    var e = o.current,
                        n = e[0];
                    if (e[1]) e[1] = !1;
                    else {
                        if ((void 0 !== r.next && ru(t, r.next, !0), n.tags.length)) {
                            var i = n.tags[n.tags.length - 1].nextElementSibling;
                            (n.before = i), n.flush();
                        }
                        t.insert('', r, n, !1);
                    }
                },
                [t, r.name]
            ),
            null
        );
    });

function Bu() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return mu(t);
}
var ku = function () {
        var e = Bu.apply(void 0, arguments),
            t = 'animation-' + e.name;
        return {
            name: t,
            styles: '@keyframes ' + t + '{' + e.styles + '}',
            anim: 1,
            toString: function () {
                return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
            },
        };
    },
    Su = function e(t) {
        for (var n = t.length, r = 0, o = ''; r < n; r++) {
            var i = t[r];
            if (null != i) {
                var a = void 0;
                switch (typeof i) {
                    case 'boolean':
                        break;
                    case 'object':
                        if (Array.isArray(i)) a = e(i);
                        else for (var u in ((a = ''), i)) i[u] && u && (a && (a += ' '), (a += u));
                        break;
                    default:
                        a = i;
                }
                a && (o && (o += ' '), (o += a));
            }
        }
        return o;
    };
var Tu = vu(function (e, t) {
    var n = function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            var o = mu(n, t.registered);
            return ru(t, o, !1), t.key + '-' + o.name;
        },
        r = {
            css: n,
            cx: function () {
                for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
                return (function (e, t, n) {
                    var r = [],
                        o = nu(e, r, n);
                    return r.length < 2 ? n : o + t(r);
                })(t.registered, n, Su(r));
            },
            theme: or.useContext(Cu),
        };
    return e.children(r);
});
const Lu = Promise.resolve(),
    Pu = e => {
        Lu.then(e);
    },
    Mu = 'data-lc-id',
    Ou = 'data-lc-focus',
    Iu = 'data-lc-event',
    zu = new Map(),
    _u = new Map(),
    Ru = {
        value: -1,
    };
let ju = [];

function Nu() {
    zu.clear(), (Ru.value = -1), ju.forEach(Pu), (ju = []);
}

function Wu() {
    _u.clear();
}

function Vu(e, t) {
    const n = zu.get(e);
    'function' == typeof n &&
        Pu(() =>
            n(
                ir({}, t, {
                    preventDefault: ar,
                    stopPropagation: ar,
                })
            )
        );
}

function Uu(e) {
    const t = ++Ru.value,
        n = ir({}, e, {
            onFocus: n => {
                e.onFocus && e.onFocus(n), _u.set(t, !0);
            },
            onBlur: n => {
                e.onBlur && e.onBlur(n), _u.delete(t);
            },
        });
    return ir(
        {},
        n,
        {
            [Mu]: String(t),
        },
        _u.has(t) && {
            [Ou]: 'true',
        },
        {
            [Iu]: Object.keys(n)
                .map(e => {
                    let t = e.replace(/^on/, '').toLowerCase();
                    const r = de();
                    return 'press' === t && (t = 'click'), zu.set(r, n[e]), t + ':' + r;
                })
                .join(';'),
        }
    );
}

function Hu(e, t) {
    Hu.static
        ? setTimeout(() => {
              const t = e();
              t && ju.push(t);
          }, 0)
        : or.useEffect(e, t);
}

function qu(e) {
    if (null == e) throw new TypeError('Cannot destructure ' + e);
}

function Gu(e, t, n) {
    let [r, o] = or.useState(e || t),
        i = or.useRef(void 0 !== e),
        a = i.current,
        u = void 0 !== e,
        s = or.useRef(r);
    a !== u &&
        console.warn(
            'WARN: A component changed from ' +
                (a ? 'controlled' : 'uncontrolled') +
                ' to ' +
                (u ? 'controlled' : 'uncontrolled') +
                '.'
        ),
        (i.current = u);
    let l = or.useCallback(
        function (e) {
            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
            let a = function (e) {
                if (n && !Object.is(s.current, e)) {
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                        r[o - 1] = arguments[o];
                    n(e, ...r);
                }
                u || (s.current = e);
            };
            if ('function' == typeof e) {
                let t = function (t) {
                    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                        o[i - 1] = arguments[i];
                    let l = e(u ? s.current : t, ...o);
                    return a(l, ...r), u ? t : l;
                };
                o(t);
            } else u || o(e), a(e, ...r);
        },
        [u, n]
    );
    return u ? (s.current = e) : (e = r), [e, l];
}

function Ku(e) {
    var t,
        n,
        r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
        if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = Ku(e[t])) && (r && (r += ' '), (r += n));
        else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
}

function Yu() {
    for (var e, t, n = 0, r = ''; n < arguments.length; )
        (e = arguments[n++]) && (t = Ku(e)) && (r && (r += ' '), (r += t));
    return r;
}
Hu.static = !1;
const Zu = {
        prefix: Math.round(1e10 * Math.random()),
        current: 0,
    },
    Xu = rr.createContext(Zu);
let $u = Boolean('undefined' != typeof window && window.document && window.document.createElement);

function Ju() {
    let e = or.useContext(Xu) !== Zu,
        [t, n] = or.useState(e);
    return (
        'undefined' != typeof window &&
            e &&
            or.useLayoutEffect(() => {
                n(!1);
            }, []),
        t
    );
}
const Qu = 'undefined' != typeof window ? rr.useLayoutEffect : () => {};
let es = new Map();
const ts = rr.createContext({
    document: document,
    window: window,
});

function ns(e) {
    let { document: t, window: n, children: r } = e,
        o = {
            document: t,
            window: n,
        };
    return rr.createElement(
        ts.Provider,
        {
            value: o,
        },
        r
    );
}

function rs() {
    return rr.useContext(ts);
}

function os(e) {
    let t = or.useRef(!0);
    t.current = !0;
    let [n, r] = or.useState(e),
        o = or.useRef(null),
        i = e => {
            t.current ? (o.current = e) : r(e);
        };
    Qu(() => {
        t.current = !1;
    }, [i]),
        or.useEffect(() => {
            let e = o.current;
            e && (r(e), (o.current = null));
        }, [r, i]);
    let a = (function (e) {
        let t = or.useContext(Xu);
        return (
            t !== Zu ||
                $u ||
                console.warn(
                    'When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.'
                ),
            or.useMemo(() => e || 'react-aria-' + t.prefix + '-' + ++t.current, [e])
        );
    })(n);
    return es.set(a, i), a;
}

function is(e, t) {
    if (e === t) return e;
    let n = es.get(e);
    if (n) return n(t), t;
    let r = es.get(t);
    return r ? (r(e), e) : t;
}

function as() {
    let [e, t] = or.useState(os());
    return (
        Qu(() => {
            es.get(e) && !document.getElementById(e) && t(null);
        }, [e]),
        e
    );
}

function us() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function () {
        for (let e of t) 'function' == typeof e && e(...arguments);
    };
}

function ss() {
    let e = {};
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    for (let o of n) {
        for (let t in e)
            /^on[A-Z]/.test(t) && 'function' == typeof e[t] && 'function' == typeof o[t]
                ? (e[t] = us(e[t], o[t]))
                : 'className' === t && 'string' == typeof e.className && 'string' == typeof o.className
                  ? (e[t] = Yu(e.className, o.className))
                  : 'UNSAFE_className' === t &&
                      'string' == typeof e.UNSAFE_className &&
                      'string' == typeof o.UNSAFE_className
                    ? (e[t] = Yu(e.UNSAFE_className, o.UNSAFE_className))
                    : 'id' === t && e.id && o.id
                      ? (e.id = is(e.id, o.id))
                      : (e[t] = void 0 !== o[t] ? o[t] : e[t]);
        for (let t in o) void 0 === e[t] && (e[t] = o[t]);
    }
    return e;
}
const ls = new Set(['id']),
    cs = new Set(['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details']),
    ds = /^(data-.*)$/;

function ps(e, t) {
    void 0 === t && (t = {});
    let { labelable: n, propNames: r } = t,
        o = {};
    for (const i in e)
        Object.prototype.hasOwnProperty.call(e, i) &&
            (ls.has(i) || (n && cs.has(i)) || (null != r && r.has(i)) || ds.test(i)) &&
            (o[i] = e[i]);
    return o;
}

function Ds(e) {
    if (
        (function () {
            if (null == ms) {
                ms = !1;
                try {
                    document.createElement('div').focus({
                        get preventScroll() {
                            return (ms = !0), !0;
                        },
                    });
                } catch (gm) {}
            }
            return ms;
        })()
    )
        e.focus({
            preventScroll: !0,
        });
    else {
        let t = (function (e) {
            var t = e.parentNode,
                n = [],
                r = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== r; )
                (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) &&
                    n.push({
                        element: t,
                        scrollTop: t.scrollTop,
                        scrollLeft: t.scrollLeft,
                    }),
                    (t = t.parentNode);
            r instanceof HTMLElement &&
                n.push({
                    element: r,
                    scrollTop: r.scrollTop,
                    scrollLeft: r.scrollLeft,
                });
            return n;
        })(e);
        e.focus(),
            (function (e) {
                for (let { element: t, scrollTop: n, scrollLeft: r } of e) (t.scrollTop = n), (t.scrollLeft = r);
            })(t);
    }
}
let ms = null;
let fs = new Map(),
    hs = new Set();

function gs() {
    if ('undefined' == typeof window) return;
    let e = t => {
        let n = fs.get(t.target);
        if (
            n &&
            (n.delete(t.propertyName),
            0 === n.size && (t.target.removeEventListener('transitioncancel', e), fs.delete(t.target)),
            0 === fs.size)
        ) {
            for (let e of hs) e();
            hs.clear();
        }
    };
    document.body.addEventListener('transitionrun', t => {
        let n = fs.get(t.target);
        n || ((n = new Set()), fs.set(t.target, n), t.target.addEventListener('transitioncancel', e)),
            n.add(t.propertyName);
    }),
        document.body.addEventListener('transitionend', e);
}

function vs(e) {
    requestAnimationFrame(() => {
        0 === fs.size ? e() : hs.add(e);
    });
}

function Cs(e, t) {
    let { id: n, 'aria-label': r, 'aria-labelledby': o } = e;
    if (((n = os(n)), o && r)) {
        let e = new Set([...o.trim().split(/\s+/), n]);
        o = [...e].join(' ');
    } else o && (o = o.trim().split(/\s+/).join(' '));
    return {
        id: n,
        'aria-label': r,
        'aria-labelledby': o,
    };
}

function bs(e, t) {
    Qu(() => {
        if (e && e.ref && t)
            return (
                (e.ref.current = t.current),
                () => {
                    e.ref.current = null;
                }
            );
    }, [e, t]);
}

function Es(e) {
    for (; e && !ys(e); ) e = e.parentElement;
    return e || document.scrollingElement || document.documentElement;
}

function ys(e) {
    let t = window.getComputedStyle(e);
    return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}

function xs(e) {
    return 'undefined' != typeof window && null != window.navigator && e.test(window.navigator.platform);
}

function Fs() {
    return xs(/^Mac/);
}

function ws() {
    return xs(/^iPhone/) || xs(/^iPad/) || (Fs() && navigator.maxTouchPoints > 1);
}
'undefined' != typeof document &&
    ('loading' !== document.readyState ? gs() : document.addEventListener('DOMContentLoaded', gs));
let As = 'default',
    Bs = '';

function ks() {
    'default' === As &&
        ((Bs = document.documentElement.style.webkitUserSelect),
        (document.documentElement.style.webkitUserSelect = 'none')),
        (As = 'disabled');
}

function Ss() {
    'disabled' === As &&
        ((As = 'restoring'),
        setTimeout(() => {
            vs(() => {
                'restoring' === As &&
                    ('none' === document.documentElement.style.webkitUserSelect &&
                        (document.documentElement.style.webkitUserSelect = Bs || ''),
                    (Bs = ''),
                    (As = 'default'));
            });
        }, 300));
}

function Ts(e) {
    return !(0 !== e.mozInputSource || !e.isTrusted) || (0 === e.detail && !e.pointerType);
}
const Ls = rr.createContext(null);

function Ps(e) {
    let t = (function (e) {
            let t = or.useContext(Ls);
            if (t) {
                let { register: n } = t;
                (e = ss(ur(t, ['register']), e)), n();
            }
            return bs(t, e.ref), e;
        })(e),
        {
            onPress: n,
            onPressChange: r,
            onPressStart: o,
            onPressEnd: i,
            onPressUp: a,
            isDisabled: u,
            isPressed: s,
            preventFocusOnPress: l,
        } = t,
        c = ur(t, [
            'onPress',
            'onPressChange',
            'onPressStart',
            'onPressEnd',
            'onPressUp',
            'isDisabled',
            'isPressed',
            'preventFocusOnPress',
            'ref',
        ]),
        d = or.useRef(null);
    d.current = {
        onPress: n,
        onPressChange: r,
        onPressStart: o,
        onPressEnd: i,
        onPressUp: a,
        isDisabled: u,
    };
    let [p, D] = or.useState(!1),
        m = or.useRef({
            isPressed: !1,
            ignoreEmulatedMouseEvents: !1,
            ignoreClickAfterPress: !1,
            didFirePressStart: !1,
            activePointerId: null,
            target: null,
            isOverTarget: !1,
            pointerType: null,
        }),
        { addGlobalListener: f, removeAllGlobalListeners: h } = (function () {
            let e = or.useRef(new Map()),
                t = or.useCallback((t, n, r, o) => {
                    e.current.set(r, {
                        type: n,
                        eventTarget: t,
                        options: o,
                    }),
                        t.addEventListener(n, r, o);
                }, []),
                n = or.useCallback((t, n, r, o) => {
                    t.removeEventListener(n, r, o), e.current.delete(r);
                }, []),
                r = or.useCallback(() => {
                    e.current.forEach((e, t) => {
                        n(e.eventTarget, e.type, t, e.options);
                    });
                }, [n]);
            return (
                or.useEffect(() => r, [r]),
                {
                    addGlobalListener: t,
                    removeGlobalListener: n,
                    removeAllGlobalListeners: r,
                }
            );
        })();
    const { document: g, window: v } = rs();
    let C = or.useMemo(() => {
        let e = m.current,
            t = (t, n) => {
                let { onPressStart: r, onPressChange: o, isDisabled: i } = d.current;
                i ||
                    e.didFirePressStart ||
                    (r &&
                        r({
                            type: 'pressstart',
                            pointerType: n,
                            target: t.currentTarget,
                            shiftKey: t.shiftKey,
                            metaKey: t.metaKey,
                            ctrlKey: t.ctrlKey,
                        }),
                    o && o(!0),
                    (e.didFirePressStart = !0),
                    D(!0));
            },
            n = function (t, n, r) {
                void 0 === r && (r = !0);
                let { onPressEnd: o, onPressChange: i, onPress: a, isDisabled: u } = d.current;
                e.didFirePressStart &&
                    ((e.ignoreClickAfterPress = !0),
                    (e.didFirePressStart = !1),
                    o &&
                        o({
                            type: 'pressend',
                            pointerType: n,
                            target: t.currentTarget,
                            shiftKey: t.shiftKey,
                            metaKey: t.metaKey,
                            ctrlKey: t.ctrlKey,
                        }),
                    i && i(!1),
                    D(!1),
                    a &&
                        r &&
                        !u &&
                        a({
                            type: 'press',
                            pointerType: n,
                            target: t.currentTarget,
                            shiftKey: t.shiftKey,
                            metaKey: t.metaKey,
                            ctrlKey: t.ctrlKey,
                        }));
            },
            r = (e, t) => {
                let { onPressUp: n, isDisabled: r } = d.current;
                r ||
                    (n &&
                        n({
                            type: 'pressup',
                            pointerType: t,
                            target: e.currentTarget,
                            shiftKey: e.shiftKey,
                            metaKey: e.metaKey,
                            ctrlKey: e.ctrlKey,
                        }));
            },
            o = t => {
                e.isPressed &&
                    (e.isOverTarget && n(zs(e.target, t), e.pointerType, !1),
                    (e.isPressed = !1),
                    (e.isOverTarget = !1),
                    (e.activePointerId = null),
                    (e.pointerType = null),
                    h(),
                    Ss());
            },
            i = {
                onKeyDown(n) {
                    Os(n.nativeEvent) &&
                        n.currentTarget.contains(n.target) &&
                        (n.preventDefault(),
                        n.stopPropagation(),
                        e.isPressed ||
                            n.repeat ||
                            ((e.target = n.currentTarget), (e.isPressed = !0), t(n, 'keyboard'), f(g, 'keyup', a, !1)));
                },
                onKeyUp(t) {
                    Os(t.nativeEvent) &&
                        !t.repeat &&
                        t.currentTarget.contains(t.target) &&
                        r(zs(e.target, t), 'keyboard');
                },
                onClick(o) {
                    (o && !o.currentTarget.contains(o.target)) ||
                        (o &&
                            0 === o.button &&
                            (o.stopPropagation(),
                            u && o.preventDefault(),
                            e.ignoreClickAfterPress ||
                                e.ignoreEmulatedMouseEvents ||
                                !Ts(o.nativeEvent) ||
                                (u || l || Ds(o.currentTarget), t(o, 'virtual'), r(o, 'virtual'), n(o, 'virtual')),
                            (e.ignoreEmulatedMouseEvents = !1),
                            (e.ignoreClickAfterPress = !1)));
                },
            },
            a = t => {
                e.isPressed &&
                    Os(t) &&
                    (t.preventDefault(),
                    t.stopPropagation(),
                    (e.isPressed = !1),
                    n(zs(e.target, t), 'keyboard', t.target === e.target),
                    h(),
                    ((t.target === e.target && Ms(e.target)) || 'link' === e.target.getAttribute('role')) &&
                        e.target.click());
            };
        if ('undefined' != typeof PointerEvent) {
            (i.onPointerDown = n => {
                var r;
                0 === n.button &&
                    n.currentTarget.contains(n.target) &&
                    (Rs(n.target) && n.preventDefault(),
                    (e.pointerType = 0 === (r = n.nativeEvent).width && 0 === r.height ? 'virtual' : n.pointerType),
                    n.stopPropagation(),
                    e.isPressed ||
                        ((e.isPressed = !0),
                        (e.isOverTarget = !0),
                        (e.activePointerId = n.pointerId),
                        (e.target = n.currentTarget),
                        u || l || Ds(n.currentTarget),
                        ks(),
                        t(n, e.pointerType),
                        f(g, 'pointermove', a, !1),
                        f(g, 'pointerup', s, !1),
                        f(g, 'pointercancel', c, !1)));
            }),
                (i.onMouseDown = e => {
                    e.currentTarget.contains(e.target) &&
                        0 === e.button &&
                        (Rs(e.target) && e.preventDefault(), e.stopPropagation());
                }),
                (i.onPointerUp = t => {
                    t.currentTarget.contains(t.target) &&
                        0 === t.button &&
                        _s(t, t.currentTarget) &&
                        r(t, e.pointerType);
                });
            let a = r => {
                    r.pointerId === e.activePointerId &&
                        (_s(r, e.target)
                            ? e.isOverTarget || ((e.isOverTarget = !0), t(zs(e.target, r), e.pointerType))
                            : e.isOverTarget && ((e.isOverTarget = !1), n(zs(e.target, r), e.pointerType, !1)));
                },
                s = t => {
                    t.pointerId === e.activePointerId &&
                        e.isPressed &&
                        0 === t.button &&
                        (_s(t, e.target)
                            ? n(zs(e.target, t), e.pointerType)
                            : e.isOverTarget && n(zs(e.target, t), e.pointerType, !1),
                        (e.isPressed = !1),
                        (e.isOverTarget = !1),
                        (e.activePointerId = null),
                        (e.pointerType = null),
                        h(),
                        Ss());
                },
                c = e => {
                    o(e);
                };
            i.onDragStart = e => {
                e.currentTarget.contains(e.target) && o(e);
            };
        } else {
            (i.onMouseDown = n => {
                0 === n.button &&
                    n.currentTarget.contains(n.target) &&
                    (Rs(n.target) && n.preventDefault(),
                    n.stopPropagation(),
                    e.ignoreEmulatedMouseEvents ||
                        ((e.isPressed = !0),
                        (e.isOverTarget = !0),
                        (e.target = n.currentTarget),
                        (e.pointerType = Ts(n.nativeEvent) ? 'virtual' : 'mouse'),
                        u || l || Ds(n.currentTarget),
                        t(n, e.pointerType),
                        f(g, 'mouseup', a, !1)));
            }),
                (i.onMouseEnter = n => {
                    n.currentTarget.contains(n.target) &&
                        (n.stopPropagation(),
                        e.isPressed && !e.ignoreEmulatedMouseEvents && ((e.isOverTarget = !0), t(n, e.pointerType)));
                }),
                (i.onMouseLeave = t => {
                    t.currentTarget.contains(t.target) &&
                        (t.stopPropagation(),
                        e.isPressed &&
                            !e.ignoreEmulatedMouseEvents &&
                            ((e.isOverTarget = !1), n(t, e.pointerType, !1)));
                }),
                (i.onMouseUp = t => {
                    t.currentTarget.contains(t.target) &&
                        (e.ignoreEmulatedMouseEvents || 0 !== t.button || r(t, e.pointerType));
                });
            let a = t => {
                0 === t.button &&
                    ((e.isPressed = !1),
                    h(),
                    e.ignoreEmulatedMouseEvents
                        ? (e.ignoreEmulatedMouseEvents = !1)
                        : (_s(t, e.target)
                              ? n(zs(e.target, t), e.pointerType)
                              : e.isOverTarget && n(zs(e.target, t), e.pointerType, !1),
                          (e.isOverTarget = !1)));
            };
            (i.onTouchStart = n => {
                if (!n.currentTarget.contains(n.target)) return;
                n.stopPropagation();
                let r = (function (e) {
                    const { targetTouches: t } = e;
                    if (t.length > 0) return t[0];
                    return null;
                })(n.nativeEvent);
                r &&
                    ((e.activePointerId = r.identifier),
                    (e.ignoreEmulatedMouseEvents = !0),
                    (e.isOverTarget = !0),
                    (e.isPressed = !0),
                    (e.target = n.currentTarget),
                    (e.pointerType = 'touch'),
                    u || l || Ds(n.currentTarget),
                    ks(),
                    t(n, e.pointerType),
                    f(v, 'scroll', s, !0));
            }),
                (i.onTouchMove = r => {
                    if (!r.currentTarget.contains(r.target)) return;
                    if ((r.stopPropagation(), !e.isPressed)) return;
                    let o = Is(r.nativeEvent, e.activePointerId);
                    o && _s(o, r.currentTarget)
                        ? e.isOverTarget || ((e.isOverTarget = !0), t(r, e.pointerType))
                        : e.isOverTarget && ((e.isOverTarget = !1), n(r, e.pointerType, !1));
                }),
                (i.onTouchEnd = t => {
                    if (!t.currentTarget.contains(t.target)) return;
                    if ((t.stopPropagation(), !e.isPressed)) return;
                    let o = Is(t.nativeEvent, e.activePointerId);
                    o && _s(o, t.currentTarget)
                        ? (r(t, e.pointerType), n(t, e.pointerType))
                        : e.isOverTarget && n(t, e.pointerType, !1),
                        (e.isPressed = !1),
                        (e.activePointerId = null),
                        (e.isOverTarget = !1),
                        (e.ignoreEmulatedMouseEvents = !0),
                        Ss(),
                        h();
                }),
                (i.onTouchCancel = t => {
                    t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && o(t));
                });
            let s = t => {
                e.isPressed &&
                    t.target.contains(e.target) &&
                    o({
                        currentTarget: e.target,
                        shiftKey: !1,
                        ctrlKey: !1,
                        metaKey: !1,
                    });
            };
            i.onDragStart = e => {
                e.currentTarget.contains(e.target) && o(e);
            };
        }
        return i;
    }, [f, u, l, h]);
    return (
        or.useEffect(() => () => Ss(), []),
        {
            isPressed: s || p,
            pressProps: ss(c, C),
        }
    );
}

function Ms(e) {
    return 'A' === e.tagName && e.hasAttribute('href');
}

function Os(e) {
    const { key: t, target: n } = e,
        r = n,
        { tagName: o, isContentEditable: i } = r,
        a = r.getAttribute('role');
    return !(
        ('Enter' !== t && ' ' !== t && 'Spacebar' !== t) ||
        'INPUT' === o ||
        'TEXTAREA' === o ||
        !0 === i ||
        (Ms(r) && ('button' !== a || 'Enter' === t)) ||
        ('link' === a && 'Enter' !== t)
    );
}

function Is(e, t) {
    const n = e.changedTouches;
    for (let r = 0; r < n.length; r++) {
        const e = n[r];
        if (e.identifier === t) return e;
    }
    return null;
}

function zs(e, t) {
    return {
        currentTarget: e,
        shiftKey: t.shiftKey,
        ctrlKey: t.ctrlKey,
        metaKey: t.metaKey,
    };
}

function _s(e, t) {
    let n = t.getBoundingClientRect(),
        r = (function (e) {
            let t = e.width / 2 || e.radiusX || 0,
                n = e.height / 2 || e.radiusY || 0;
            return {
                top: e.clientY - n,
                right: e.clientX + t,
                bottom: e.clientY + n,
                left: e.clientX - t,
            };
        })(e);
    return (i = r), !((o = n).left > i.right || i.left > o.right || o.top > i.bottom || i.top > o.bottom);
    var o, i;
}

function Rs(e) {
    return !e.closest('[draggable="true"]');
}
Ls.displayName = 'PressResponderContext';
const js = rr.forwardRef((e, t) => {
    let { children: n } = e,
        r = ur(e, ['children']),
        o = or.useRef(!1),
        i = or.useContext(Ls),
        a = ss(
            i || {},
            ir({}, r, {
                ref: t || (null == i ? void 0 : i.ref),
                register() {
                    (o.current = !0), i && i.register();
                },
            })
        );
    return (
        bs(i, t),
        or.useEffect(() => {
            o.current ||
                console.warn(
                    'A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.'
                );
        }, []),
        rr.createElement(
            Ls.Provider,
            {
                value: a,
            },
            n
        )
    );
});

function Ns(e) {
    if (e.isDisabled)
        return {
            focusProps: {},
        };
    let t, n;
    return (
        (e.onFocus || e.onFocusChange) &&
            (t = t => {
                t.target === t.currentTarget && (e.onFocus && e.onFocus(t), e.onFocusChange && e.onFocusChange(!0));
            }),
        (e.onBlur || e.onFocusChange) &&
            (n = t => {
                t.target === t.currentTarget && (e.onBlur && e.onBlur(t), e.onFocusChange && e.onFocusChange(!1));
            }),
        {
            focusProps: {
                onFocus: t,
                onBlur: n,
            },
        }
    );
}
let Ws = null,
    Vs = new Set(),
    Us = !1,
    Hs = !1;
const qs = {
    Tab: !0,
    Escape: !0,
};

function Gs(e, t) {
    for (let n of Vs) n(e, t);
}

function Ks(e) {
    (Us = !0),
        (function (e) {
            return !(
                e.metaKey ||
                (!Fs() && e.altKey) ||
                e.ctrlKey ||
                ('keyup' === e.type && ('Control' === e.key || 'Shift' === e.key))
            );
        })(e) && ((Ws = 'keyboard'), Gs('keyboard', e));
}

function Ys(e) {
    (Ws = 'pointer'), ('mousedown' !== e.type && 'pointerdown' !== e.type) || ((Us = !0), Gs('pointer', e));
}

function Zs(e) {
    Ts(e) && ((Us = !0), (Ws = 'virtual'));
}

function Xs() {
    (Us = !1), (Hs = !0);
}

function $s(e = window, t = document) {
    const n = e || n,
        r = t || r;
    if (void 0 === n || n.hasSetupGlobalListeners) return;
    let o = n.HTMLElement.prototype.focus;
    (n.HTMLElement.prototype.focus = function () {
        (Us = !0), o.apply(this, arguments);
    }),
        r.addEventListener('keydown', Ks, !0),
        r.addEventListener('keyup', Ks, !0),
        r.addEventListener('click', Zs, !0),
        n.addEventListener(
            'focus',
            e =>
                (function (e, t = widnow, n = document) {
                    e.target !== t &&
                        e.target !== n &&
                        (Us || Hs || ((Ws = 'virtual'), Gs('virtual', e)), (Us = !1), (Hs = !1));
                })(e, n, r),
            !0
        ),
        n.addEventListener('blur', Xs, !1),
        'undefined' != typeof PointerEvent
            ? (r.addEventListener('pointerdown', Ys, !0),
              r.addEventListener('pointermove', Ys, !0),
              r.addEventListener('pointerup', Ys, !0))
            : (r.addEventListener('mousedown', Ys, !0),
              r.addEventListener('mousemove', Ys, !0),
              r.addEventListener('mouseup', Ys, !0)),
        (n.hasSetupGlobalListeners = !0);
}

function Js() {
    return 'pointer' !== Ws;
}

function Qs() {
    return Ws;
}

function el(e) {
    void 0 === e && (e = {});
    let { isTextInput: t, autoFocus: n, skipFocusVisible: r } = e,
        [o, i] = or.useState(n || Js());
    return (
        tl(
            e => {
                i(e);
            },
            [t],
            {
                isTextInput: t,
                skipFocusVisible: r,
            }
        ),
        r
            ? {}
            : {
                  isFocusVisible: o,
              }
    );
}

function tl(e, t, n) {
    const { document: r, window: o } = rs();
    n.skipFocusVisible || $s(o, r),
        or.useEffect(() => {
            if (n.skipFocusVisible) return;
            let t = (t, r) => {
                (function (e, t, n) {
                    return !(e && 'keyboard' === t && n instanceof KeyboardEvent && !qs[n.key]);
                })(null == n ? void 0 : n.isTextInput, t, r) && e(Js());
            };
            return Vs.add(t), () => Vs.delete(t);
        }, t);
}

function nl(e) {
    let t = or.useRef({
        isFocusWithin: !1,
    }).current;
    if (e.isDisabled)
        return {
            focusWithinProps: {},
        };
    return {
        focusWithinProps: {
            onFocus: n => {
                t.isFocusWithin ||
                    (e.onFocusWithin && e.onFocusWithin(n),
                    e.onFocusWithinChange && e.onFocusWithinChange(!0),
                    (t.isFocusWithin = !0));
            },
            onBlur: n => {
                t.isFocusWithin &&
                    !n.currentTarget.contains(n.relatedTarget) &&
                    (e.onBlurWithin && e.onBlurWithin(n),
                    e.onFocusWithinChange && e.onFocusWithinChange(!1),
                    (t.isFocusWithin = !1));
            },
        },
    };
}
'undefined' != typeof document &&
    ('loading' !== document.readyState
        ? $s(window, document)
        : document.addEventListener('DOMContentLoaded', () => $s(window, document)));
let rl = !1,
    ol = 0;

function il() {
    (rl = !0),
        setTimeout(() => {
            rl = !1;
        }, 50);
}

function al(e) {
    'touch' === e.pointerType && il();
}

function ul(e) {
    let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e,
        [i, a] = or.useState(!1),
        u = or.useRef({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: '',
            target: null,
        }).current;
    const { window: s, document: l } = rs();
    or.useEffect(
        () =>
            (function () {
                if ('undefined' != typeof document)
                    return (
                        'undefined' != typeof PointerEvent
                            ? document.addEventListener('pointerup', al)
                            : document.addEventListener('touchend', il),
                        ol++,
                        () => {
                            ol--,
                                ol > 0 ||
                                    ('undefined' != typeof PointerEvent
                                        ? document.removeEventListener('pointerup', al)
                                        : document.removeEventListener('touchend', il));
                        }
                    );
            })(),
        []
    );
    let { hoverProps: c, triggerHoverEnd: d } = or.useMemo(() => {
        let e = (e, r) => {
                if (((u.pointerType = r), o || 'touch' === r || u.isHovered || !e.currentTarget.contains(e.target)))
                    return;
                u.isHovered = !0;
                let i = e.target;
                (u.target = i),
                    t &&
                        t({
                            type: 'hoverstart',
                            target: i,
                            pointerType: r,
                        }),
                    n && n(!0),
                    a(!0);
            },
            i = (e, t) => {
                if (((u.pointerType = ''), (u.target = null), 'touch' === t || !u.isHovered)) return;
                u.isHovered = !1;
                let o = e.target;
                r &&
                    r({
                        type: 'hoverend',
                        target: o,
                        pointerType: t,
                    }),
                    n && n(!1),
                    a(!1);
            },
            s = {};
        return (
            'undefined' != typeof PointerEvent
                ? ((s.onPointerEnter = t => {
                      (rl && 'mouse' === t.pointerType) || e(t, t.pointerType);
                  }),
                  (s.onPointerLeave = e => {
                      !o && e.currentTarget.contains(e.target) && i(e, e.pointerType);
                  }))
                : ((s.onTouchStart = () => {
                      u.ignoreEmulatedMouseEvents = !0;
                  }),
                  (s.onMouseEnter = t => {
                      u.ignoreEmulatedMouseEvents || rl || e(t, 'mouse'), (u.ignoreEmulatedMouseEvents = !1);
                  }),
                  (s.onMouseLeave = e => {
                      !o && e.currentTarget.contains(e.target) && i(e, 'mouse');
                  })),
            {
                hoverProps: s,
                triggerHoverEnd: i,
            }
        );
    }, [t, n, r, o, u]);
    return (
        or.useEffect(() => {
            o &&
                d(
                    {
                        target: u.target,
                    },
                    u.pointerType
                );
        }, [o]),
        {
            hoverProps: c,
            isHovered: i,
        }
    );
}

function sl(e, t) {
    if (e.button > 0) return !1;
    if (e.target) {
        const t = e.target.ownerDocument;
        if (!t || !t.documentElement.contains(e.target)) return !1;
    }
    return t.current && !t.current.contains(e.target);
}

function ll(e) {
    if (!e) return;
    let t = !0;
    return n => {
        let r = ir({}, n, {
            preventDefault() {
                n.preventDefault();
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
                console.error(
                    'stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.'
                );
            },
            continuePropagation() {
                t = !1;
            },
        });
        e(r), t && n.stopPropagation();
    };
}

function cl(e) {
    return e && e.__esModule
        ? e
        : {
              default: e,
          };
}
var dl,
    pl,
    Dl = {
        exports: {},
    };
(dl = Dl),
    ((pl = Dl.exports).__esModule = !0),
    (pl.default = function (e) {
        return (e && e.ownerDocument) || document;
    }),
    (dl.exports = pl.default);
var ml = Dl.exports,
    fl = {
        exports: {},
    },
    hl = {
        exports: {},
    };
!(function (e) {
    (e.exports = function (e) {
        return e && e.__esModule
            ? e
            : {
                  default: e,
              };
    }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
})(hl);
var gl,
    vl = hl.exports,
    Cl = {
        exports: {},
    };

function bl() {
    return (
        gl ||
            ((gl = 1),
            (function (e, t) {
                (t.__esModule = !0),
                    (t.default = function (e) {
                        return e === e.window ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
                    }),
                    (e.exports = t.default);
            })(Cl, Cl.exports)),
        Cl.exports
    );
}
!(function (e, t) {
    var n = vl;
    (t.__esModule = !0),
        (t.default = function (e, t) {
            var n = (0, r.default)(e);
            if (void 0 === t)
                return n ? ('pageYOffset' in n ? n.pageYOffset : n.document.documentElement.scrollTop) : e.scrollTop;
            n
                ? n.scrollTo('pageXOffset' in n ? n.pageXOffset : n.document.documentElement.scrollLeft, t)
                : (e.scrollTop = t);
        });
    var r = n(bl());
    e.exports = t.default;
})(fl, fl.exports);
var El = fl.exports,
    yl = {
        exports: {},
    };
!(function (e, t) {
    var n = vl;
    (t.__esModule = !0),
        (t.default = function (e, t) {
            var n = (0, r.default)(e);
            if (void 0 === t)
                return n ? ('pageXOffset' in n ? n.pageXOffset : n.document.documentElement.scrollLeft) : e.scrollLeft;
            n
                ? n.scrollTo(t, 'pageYOffset' in n ? n.pageYOffset : n.document.documentElement.scrollTop)
                : (e.scrollLeft = t);
        });
    var r = n(bl());
    e.exports = t.default;
})(yl, yl.exports);
var xl = yl.exports,
    Fl = {
        exports: {},
    };
const wl = sr(lr);
var Al,
    Bl,
    kl,
    Sl = {
        exports: {},
    },
    Tl = {
        exports: {},
    },
    Ll = {
        exports: {},
    };

function Pl() {
    return (
        Al ||
            ((Al = 1),
            (function (e, t) {
                (t.__esModule = !0), (t.default = void 0);
                var n = !('undefined' == typeof window || !window.document || !window.document.createElement);
                (t.default = n), (e.exports = t.default);
            })(Ll, Ll.exports)),
        Ll.exports
    );
}

function Ml() {
    return (
        kl ||
            ((kl = 1),
            (function (e, t) {
                var n = vl;
                (t.__esModule = !0),
                    (t.default = function (e) {
                        var t = (0, i.default)(e),
                            n = (0, o.default)(t),
                            a = t && t.documentElement,
                            u = {
                                top: 0,
                                left: 0,
                                height: 0,
                                width: 0,
                            };
                        if (!t) return;
                        if (!(0, r.default)(a, e)) return u;
                        void 0 !== e.getBoundingClientRect && (u = e.getBoundingClientRect());
                        return (u = {
                            top: u.top + (n.pageYOffset || a.scrollTop) - (a.clientTop || 0),
                            left: u.left + (n.pageXOffset || a.scrollLeft) - (a.clientLeft || 0),
                            width: (null == u.width ? e.offsetWidth : u.width) || 0,
                            height: (null == u.height ? e.offsetHeight : u.height) || 0,
                        });
                    });
                var r = n(
                        (Bl ||
                            ((Bl = 1),
                            (function (e, t) {
                                var n = vl;
                                (t.__esModule = !0), (t.default = void 0);
                                var r = n(Pl()).default
                                    ? function (e, t) {
                                          return e.contains
                                              ? e.contains(t)
                                              : e.compareDocumentPosition
                                                ? e === t || !!(16 & e.compareDocumentPosition(t))
                                                : o(e, t);
                                      }
                                    : o;

                                function o(e, t) {
                                    if (t)
                                        do {
                                            if (t === e) return !0;
                                        } while ((t = t.parentNode));
                                    return !1;
                                }
                                (t.default = r), (e.exports = t.default);
                            })(Tl, Tl.exports)),
                        Tl.exports)
                    ),
                    o = n(bl()),
                    i = n(ml);
                e.exports = t.default;
            })(Sl, Sl.exports)),
        Sl.exports
    );
}
var Ol,
    Il,
    zl = {
        exports: {},
    },
    _l = {
        exports: {},
    },
    Rl = {
        exports: {},
    },
    jl = {
        exports: {},
    };

function Nl() {
    return (
        Il ||
            ((Il = 1),
            (function (e, t) {
                var n = vl;
                (t.__esModule = !0),
                    (t.default = function (e) {
                        return (0, r.default)(e.replace(o, 'ms-'));
                    });
                var r = n(
                        (Ol ||
                            ((Ol = 1),
                            (function (e, t) {
                                (t.__esModule = !0),
                                    (t.default = function (e) {
                                        return e.replace(n, function (e, t) {
                                            return t.toUpperCase();
                                        });
                                    });
                                var n = /-(.)/g;
                                e.exports = t.default;
                            })(jl, jl.exports)),
                        jl.exports)
                    ),
                    o = /^-ms-/;
                e.exports = t.default;
            })(Rl, Rl.exports)),
        Rl.exports
    );
}
var Wl,
    Vl,
    Ul = {
        exports: {},
    },
    Hl = {
        exports: {},
    };

function ql() {
    return (
        Vl ||
            ((Vl = 1),
            (function (e, t) {
                var n = vl;
                (t.__esModule = !0),
                    (t.default = function (e) {
                        return (0, r.default)(e).replace(o, '-ms-');
                    });
                var r = n(
                        (Wl ||
                            ((Wl = 1),
                            (function (e, t) {
                                (t.__esModule = !0),
                                    (t.default = function (e) {
                                        return e.replace(n, '-$1').toLowerCase();
                                    });
                                var n = /([A-Z])/g;
                                e.exports = t.default;
                            })(Hl, Hl.exports)),
                        Hl.exports)
                    ),
                    o = /^ms-/;
                e.exports = t.default;
            })(Ul, Ul.exports)),
        Ul.exports
    );
}
var Gl,
    Kl = {
        exports: {},
    };
var Yl,
    Zl = {
        exports: {},
    };
var Xl,
    $l = {};
var Jl,
    Ql,
    ec,
    tc = {
        exports: {},
    };

function nc() {
    return (
        Ql ||
            ((Ql = 1),
            (function (e, t) {
                var n = vl;
                (t.__esModule = !0),
                    (t.default = function (e, t, n) {
                        var l = '',
                            c = '',
                            d = t;
                        if ('string' == typeof t) {
                            if (void 0 === n)
                                return (
                                    e.style[(0, r.default)(t)] || (0, i.default)(e).getPropertyValue((0, o.default)(t))
                                );
                            (d = {})[t] = n;
                        }
                        Object.keys(d).forEach(function (t) {
                            var n = d[t];
                            n || 0 === n
                                ? (0, s.default)(t)
                                    ? (c += t + '(' + n + ') ')
                                    : (l += (0, o.default)(t) + ': ' + n + ';')
                                : (0, a.default)(e, (0, o.default)(t));
                        }),
                            c && (l += u.transform + ': ' + c + ';');
                        e.style.cssText += ';' + l;
                    });
                var r = n(Nl()),
                    o = n(ql()),
                    i = n(
                        (Gl ||
                            ((Gl = 1),
                            (function (e, t) {
                                var n = vl;
                                (t.__esModule = !0),
                                    (t.default = function (e) {
                                        if (!e) throw new TypeError('No Element passed to `getComputedStyle()`');
                                        var t = e.ownerDocument;
                                        return 'defaultView' in t
                                            ? t.defaultView.opener
                                                ? e.ownerDocument.defaultView.getComputedStyle(e, null)
                                                : window.getComputedStyle(e, null)
                                            : {
                                                  getPropertyValue: function (t) {
                                                      var n = e.style;
                                                      'float' == (t = (0, r.default)(t)) && (t = 'styleFloat');
                                                      var a = e.currentStyle[t] || null;
                                                      if (
                                                          (null == a && n && n[t] && (a = n[t]),
                                                          i.test(a) && !o.test(t))
                                                      ) {
                                                          var u = n.left,
                                                              s = e.runtimeStyle,
                                                              l = s && s.left;
                                                          l && (s.left = e.currentStyle.left),
                                                              (n.left = 'fontSize' === t ? '1em' : a),
                                                              (a = n.pixelLeft + 'px'),
                                                              (n.left = u),
                                                              l && (s.left = l);
                                                      }
                                                      return a;
                                                  },
                                              };
                                    });
                                var r = n(Nl()),
                                    o = /^(top|right|bottom|left)$/,
                                    i = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;
                                e.exports = t.default;
                            })(Kl, Kl.exports)),
                        Kl.exports)
                    ),
                    a = n(
                        (Yl ||
                            ((Yl = 1),
                            (function (e, t) {
                                (t.__esModule = !0),
                                    (t.default = function (e, t) {
                                        return 'removeProperty' in e.style
                                            ? e.style.removeProperty(t)
                                            : e.style.removeAttribute(t);
                                    }),
                                    (e.exports = t.default);
                            })(Zl, Zl.exports)),
                        Zl.exports)
                    ),
                    u = (function () {
                        if (Xl) return $l;
                        Xl = 1;
                        var e = vl;
                        ($l.__esModule = !0),
                            ($l.default =
                                $l.animationEnd =
                                $l.animationDelay =
                                $l.animationTiming =
                                $l.animationDuration =
                                $l.animationName =
                                $l.transitionEnd =
                                $l.transitionDuration =
                                $l.transitionDelay =
                                $l.transitionTiming =
                                $l.transitionProperty =
                                $l.transform =
                                    void 0);
                        var t,
                            n,
                            r,
                            o,
                            i,
                            a,
                            u,
                            s,
                            l,
                            c,
                            d,
                            p = e(Pl()),
                            D = 'transform';
                        if (
                            (($l.transform = D),
                            ($l.animationEnd = r),
                            ($l.transitionEnd = n),
                            ($l.transitionDelay = u),
                            ($l.transitionTiming = a),
                            ($l.transitionDuration = i),
                            ($l.transitionProperty = o),
                            ($l.animationDelay = d),
                            ($l.animationTiming = c),
                            ($l.animationDuration = l),
                            ($l.animationName = s),
                            p.default)
                        ) {
                            var m = (function () {
                                for (
                                    var e,
                                        t,
                                        n = document.createElement('div').style,
                                        r = {
                                            O: function (e) {
                                                return 'o' + e.toLowerCase();
                                            },
                                            Moz: function (e) {
                                                return e.toLowerCase();
                                            },
                                            Webkit: function (e) {
                                                return 'webkit' + e;
                                            },
                                            ms: function (e) {
                                                return 'MS' + e;
                                            },
                                        },
                                        o = Object.keys(r),
                                        i = '',
                                        a = 0;
                                    a < o.length;
                                    a++
                                ) {
                                    var u = o[a];
                                    if (u + 'TransitionProperty' in n) {
                                        (i = '-' + u.toLowerCase()),
                                            (e = r[u]('TransitionEnd')),
                                            (t = r[u]('AnimationEnd'));
                                        break;
                                    }
                                }
                                return (
                                    !e && 'transitionProperty' in n && (e = 'transitionend'),
                                    !t && 'animationName' in n && (t = 'animationend'),
                                    (n = null),
                                    {
                                        animationEnd: t,
                                        transitionEnd: e,
                                        prefix: i,
                                    }
                                );
                            })();
                            (t = m.prefix),
                                ($l.transitionEnd = n = m.transitionEnd),
                                ($l.animationEnd = r = m.animationEnd),
                                ($l.transform = D = t + '-' + D),
                                ($l.transitionProperty = o = t + '-transition-property'),
                                ($l.transitionDuration = i = t + '-transition-duration'),
                                ($l.transitionDelay = u = t + '-transition-delay'),
                                ($l.transitionTiming = a = t + '-transition-timing-function'),
                                ($l.animationName = s = t + '-animation-name'),
                                ($l.animationDuration = l = t + '-animation-duration'),
                                ($l.animationTiming = c = t + '-animation-delay'),
                                ($l.animationDelay = d = t + '-animation-timing-function');
                        }
                        var f = {
                            transform: D,
                            end: n,
                            property: o,
                            timing: a,
                            delay: u,
                            duration: i,
                        };
                        return ($l.default = f), $l;
                    })(),
                    s = n(
                        (Jl ||
                            ((Jl = 1),
                            (function (e, t) {
                                (t.__esModule = !0),
                                    (t.default = function (e) {
                                        return !(!e || !n.test(e));
                                    });
                                var n = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
                                e.exports = t.default;
                            })(tc, tc.exports)),
                        tc.exports)
                    );
                e.exports = t.default;
            })(_l, _l.exports)),
        _l.exports
    );
}
!(function (e, t) {
    var n = vl;
    (t.__esModule = !0),
        (t.default = function (e, t) {
            var n,
                l = {
                    top: 0,
                    left: 0,
                };
            'fixed' === (0, s.default)(e, 'position')
                ? (n = e.getBoundingClientRect())
                : ((t = t || (0, i.default)(e)),
                  (n = (0, o.default)(e)),
                  'html' !==
                      (function (e) {
                          return e.nodeName && e.nodeName.toLowerCase();
                      })(t) && (l = (0, o.default)(t)),
                  (l.top += parseInt((0, s.default)(t, 'borderTopWidth'), 10) - (0, a.default)(t) || 0),
                  (l.left += parseInt((0, s.default)(t, 'borderLeftWidth'), 10) - (0, u.default)(t) || 0));
            return (0, r.default)({}, n, {
                top: n.top - l.top - (parseInt((0, s.default)(e, 'marginTop'), 10) || 0),
                left: n.left - l.left - (parseInt((0, s.default)(e, 'marginLeft'), 10) || 0),
            });
        });
    var r = n(wl),
        o = n(Ml()),
        i = n(
            (ec ||
                ((ec = 1),
                (function (e, t) {
                    var n = vl;
                    (t.__esModule = !0),
                        (t.default = function (e) {
                            for (
                                var t = (0, r.default)(e), n = e && e.offsetParent;
                                n && 'html' !== i(e) && 'static' === (0, o.default)(n, 'position');

                            )
                                n = n.offsetParent;
                            return n || t.documentElement;
                        });
                    var r = n(ml),
                        o = n(nc());

                    function i(e) {
                        return e.nodeName && e.nodeName.toLowerCase();
                    }
                    e.exports = t.default;
                })(zl, zl.exports)),
            zl.exports)
        ),
        a = n(El),
        u = n(xl),
        s = n(nc());
    e.exports = t.default;
})(Fl, Fl.exports),
    Ml(),
    nc();
const rc = [];

function oc(e, t) {
    let {
        onClose: n,
        shouldCloseOnBlur: r,
        isOpen: o,
        isDismissable: i = !1,
        isKeyboardDismissDisabled: a = !1,
        shouldCloseOnInteractOutside: u,
    } = e;
    or.useEffect(
        () => (
            o && rc.push(t),
            () => {
                let e = rc.indexOf(t);
                e >= 0 && rc.splice(e, 1);
            }
        ),
        [o, t]
    );
    let s = () => {
        rc[rc.length - 1] === t && n && n();
    };
    !(function (e) {
        let { ref: t, onInteractOutside: n, isDisabled: r, onInteractOutsideStart: o } = e,
            i = or.useRef({
                isPointerDown: !1,
                ignoreEmulatedMouseEvents: !1,
            }).current;
        const { document: a } = rs();
        or.useEffect(() => {
            let e = e => {
                r || (sl(e, t) && n && (o && o(e), (i.isPointerDown = !0)));
            };
            if ('undefined' != typeof PointerEvent) {
                let o = e => {
                    r || (i.isPointerDown && n && sl(e, t) && ((i.isPointerDown = !1), n(e)));
                };
                return (
                    a.addEventListener('pointerdown', e, !0),
                    a.addEventListener('pointerup', o, !0),
                    () => {
                        a.removeEventListener('pointerdown', e, !0), a.removeEventListener('pointerup', o, !0);
                    }
                );
            }
            {
                let o = e => {
                        r ||
                            (i.ignoreEmulatedMouseEvents
                                ? (i.ignoreEmulatedMouseEvents = !1)
                                : i.isPointerDown && n && sl(e, t) && ((i.isPointerDown = !1), n(e)));
                    },
                    u = e => {
                        r ||
                            ((i.ignoreEmulatedMouseEvents = !0),
                            n && i.isPointerDown && sl(e, t) && ((i.isPointerDown = !1), n(e)));
                    };
                return (
                    a.addEventListener('mousedown', e, !0),
                    a.addEventListener('mouseup', o, !0),
                    a.addEventListener('touchstart', e, !0),
                    a.addEventListener('touchend', u, !0),
                    () => {
                        a.removeEventListener('mousedown', e, !0),
                            a.removeEventListener('mouseup', o, !0),
                            a.removeEventListener('touchstart', e, !0),
                            a.removeEventListener('touchend', u, !0);
                    }
                );
            }
        }, [n, t, i.ignoreEmulatedMouseEvents, i.isPointerDown, r]);
    })({
        ref: t,
        onInteractOutside: i
            ? e => {
                  (u && !u(e.target)) || (rc[rc.length - 1] === t && (e.stopPropagation(), e.preventDefault()), s());
              }
            : null,
        onInteractOutsideStart: e => {
            (u && !u(e.target)) || (rc[rc.length - 1] === t && (e.stopPropagation(), e.preventDefault()));
        },
    });
    let { focusWithinProps: l } = nl({
        isDisabled: !r,
        onBlurWithin: e => {
            (u && !u(e.relatedTarget)) || n();
        },
    });
    return {
        overlayProps: ir(
            {
                onKeyDown: e => {
                    'Escape' !== e.key || a || (e.preventDefault(), s());
                },
            },
            l
        ),
        underlayProps: {
            onPointerDown: e => {
                e.target === e.currentTarget && e.preventDefault();
            },
        },
    };
}
const ic = 'undefined' != typeof window && window.visualViewport,
    ac = new Set(['checkbox', 'radio', 'range', 'color', 'file', 'image', 'button', 'submit', 'reset']);

function uc(e) {
    void 0 === e && (e = {});
    let { isDisabled: t } = e;
    Qu(() => {
        if (!t)
            return ws()
                ? (function () {
                      let e,
                          t = 0,
                          n = n => {
                              (e = Es(n.target)),
                                  (e === document.documentElement && e === document.body) ||
                                      (t = n.changedTouches[0].pageY);
                          },
                          r = n => {
                              if (e === document.documentElement || e === document.body) return void n.preventDefault();
                              let r = n.changedTouches[0].pageY,
                                  o = e.scrollTop,
                                  i = e.scrollHeight - e.clientHeight;
                              ((o <= 0 && r > t) || (o >= i && r < t)) && n.preventDefault(), (t = r);
                          },
                          o = e => {
                              let t = e.target;
                              t instanceof HTMLInputElement &&
                                  !ac.has(t.type) &&
                                  (e.preventDefault(),
                                  (t.style.transform = 'translateY(-2000px)'),
                                  t.focus(),
                                  requestAnimationFrame(() => {
                                      t.style.transform = '';
                                  }));
                          },
                          i = e => {
                              let t = e.target;
                              t instanceof HTMLInputElement &&
                                  !ac.has(t.type) &&
                                  ((t.style.transform = 'translateY(-2000px)'),
                                  requestAnimationFrame(() => {
                                      (t.style.transform = ''),
                                          ic &&
                                              (ic.height < window.innerHeight
                                                  ? requestAnimationFrame(() => {
                                                        cc(t);
                                                    })
                                                  : ic.addEventListener('resize', () => cc(t), {
                                                        once: !0,
                                                    }));
                                  }));
                          },
                          a = () => {
                              window.scrollTo(0, 0);
                          },
                          u = window.pageXOffset,
                          s = window.pageYOffset,
                          l = us(
                              sc(
                                  document.documentElement,
                                  'paddingRight',
                                  window.innerWidth - document.documentElement.clientWidth + 'px'
                              ),
                              sc(document.documentElement, 'overflow', 'hidden'),
                              sc(document.body, 'marginTop', '-' + s + 'px')
                          );
                      window.scrollTo(0, 0);
                      let c = us(
                          lc(document, 'touchstart', n, {
                              passive: !1,
                              capture: !0,
                          }),
                          lc(document, 'touchmove', r, {
                              passive: !1,
                              capture: !0,
                          }),
                          lc(document, 'touchend', o, {
                              passive: !1,
                              capture: !0,
                          }),
                          lc(document, 'focus', i, !0),
                          lc(window, 'scroll', a)
                      );
                      return () => {
                          l(), c(), window.scrollTo(u, s);
                      };
                  })()
                : us(
                      sc(
                          document.documentElement,
                          'paddingRight',
                          window.innerWidth - document.documentElement.clientWidth + 'px'
                      ),
                      sc(document.documentElement, 'overflow', 'hidden')
                  );
    }, [t]);
}

function sc(e, t, n) {
    let r = e.style[t];
    return (
        (e.style[t] = n),
        () => {
            e.style[t] = r;
        }
    );
}

function lc(e, t, n, r) {
    return (
        e.addEventListener(t, n, r),
        () => {
            e.removeEventListener(t, n, r);
        }
    );
}

function cc(e) {
    let t = Es(e);
    if (t !== document.documentElement && t !== document.body) {
        let n = t.getBoundingClientRect().top,
            r = e.getBoundingClientRect().top;
        r > n + e.clientHeight && (t.scrollTop += r - n);
    }
}
const dc = rr.createContext(null);

function pc(e) {
    let { children: t } = e,
        n = or.useContext(dc),
        [r, o] = or.useState(0),
        i = or.useMemo(
            () => ({
                parent: n,
                modalCount: r,
                addModal() {
                    o(e => e + 1), n && n.addModal();
                },
                removeModal() {
                    o(e => e - 1), n && n.removeModal();
                },
            }),
            [n, r]
        );
    return rr.createElement(
        dc.Provider,
        {
            value: i,
        },
        t
    );
}

function Dc(e) {
    let t = or.useContext(dc);
    if (!t) throw new Error('Modal is not contained within a provider');
    return (
        or.useEffect(() => {
            if (t && t.parent)
                return (
                    t.parent.addModal(),
                    () => {
                        t && t.parent && t.parent.removeModal();
                    }
                );
        }, [t, t.parent, void 0]),
        {
            modalProps: {
                'data-ismodal': !0,
            },
        }
    );
}
var mc;
mc = JSON.parse('{"dismiss":"تجاهل"}');
var fc;
fc = JSON.parse('{"dismiss":"Отхвърляне"}');
var hc;
hc = JSON.parse('{"dismiss":"Odstranit"}');
var gc;
gc = JSON.parse('{"dismiss":"Luk"}');
var vc;
vc = JSON.parse('{"dismiss":"Schließen"}');
var Cc;
Cc = JSON.parse('{"dismiss":"Απόρριψη"}');
var bc;
bc = JSON.parse('{"dismiss":"Dismiss"}');
var Ec;
Ec = JSON.parse('{"dismiss":"Descartar"}');
var yc;
yc = JSON.parse('{"dismiss":"Lõpeta"}');
var xc;
xc = JSON.parse('{"dismiss":"Hylkää"}');
var Fc;
Fc = JSON.parse('{"dismiss":"Rejeter"}');
var wc;
wc = JSON.parse('{"dismiss":"התעלם"}');
var Ac;
Ac = JSON.parse('{"dismiss":"Odbaci"}');
var Bc;
Bc = JSON.parse('{"dismiss":"Elutasítás"}');
var kc;
kc = JSON.parse('{"dismiss":"Ignora"}');
var Sc;
Sc = JSON.parse('{"dismiss":"閉じる"}');
var Tc;
Tc = JSON.parse('{"dismiss":"무시"}');
var Lc;
Lc = JSON.parse('{"dismiss":"Atmesti"}');
var Pc;
Pc = JSON.parse('{"dismiss":"Nerādīt"}');
var Mc;
Mc = JSON.parse('{"dismiss":"Lukk"}');
var Oc;
Oc = JSON.parse('{"dismiss":"Negeren"}');
var Ic;
Ic = JSON.parse('{"dismiss":"Zignoruj"}');
var zc;
zc = JSON.parse('{"dismiss":"Descartar"}');
var _c;
_c = JSON.parse('{"dismiss":"Dispensar"}');
var Rc;
Rc = JSON.parse('{"dismiss":"Revocare"}');
var jc;
jc = JSON.parse('{"dismiss":"Пропустить"}');
var Nc;
Nc = JSON.parse('{"dismiss":"Zrušiť"}');
var Wc;
Wc = JSON.parse('{"dismiss":"Opusti"}');
var Vc;
Vc = JSON.parse('{"dismiss":"Odbaci"}');
var Uc;
Uc = JSON.parse('{"dismiss":"Avvisa"}');
var Hc;
Hc = JSON.parse('{"dismiss":"Kapat"}');
var qc;
qc = JSON.parse('{"dismiss":"Скасувати"}');
var Gc;
Gc = JSON.parse('{"dismiss":"取消"}');
var Kc;
(Kc = JSON.parse('{"dismiss":"關閉"}')),
    cl(mc).default,
    cl(fc).default,
    cl(hc).default,
    cl(gc).default,
    cl(vc).default,
    cl(Cc).default,
    cl(bc).default,
    cl(Ec).default,
    cl(yc).default,
    cl(xc).default,
    cl(Fc).default,
    cl(wc).default,
    cl(Ac).default,
    cl(Bc).default,
    cl(kc).default,
    cl(Sc).default,
    cl(Tc).default,
    cl(Lc).default,
    cl(Pc).default,
    cl(Mc).default,
    cl(Oc).default,
    cl(Ic).default,
    cl(zc).default,
    cl(_c).default,
    cl(Rc).default,
    cl(jc).default,
    cl(Nc).default,
    cl(Wc).default,
    cl(Vc).default,
    cl(Uc).default,
    cl(Hc).default,
    cl(qc).default,
    cl(Gc).default,
    cl(Kc).default;
var Yc = {
    exports: {},
};

function Zc() {}
Yc.exports = (function () {
    function e(e, t, n, r, o, i) {
        if ('SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED' !== i) {
            var a = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            );
            throw ((a.name = 'Invariant Violation'), a);
        }
    }

    function t() {
        return e;
    }
    e.isRequired = e;
    var n = {
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
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
    };
    return (n.checkPropTypes = Zc), (n.PropTypes = n), n;
})();
var Xc = Yc.exports,
    $c = {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        padding: 0,
        width: '1px',
        position: 'absolute',
    },
    Jc = function (e) {
        var t = e.message,
            n = e['aria-live'];
        return rr.createElement(
            'div',
            {
                style: $c,
                role: 'log',
                'aria-live': n,
            },
            t || ''
        );
    };

function Qc(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
}
Jc.propTypes = {};
var ed = (function (e) {
    function t() {
        var n, r;
        !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, t);
        for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
        return (
            (n = r = Qc(this, e.call.apply(e, [this].concat(i)))),
            (r.state = {
                assertiveMessage1: '',
                assertiveMessage2: '',
                politeMessage1: '',
                politeMessage2: '',
                oldPolitemessage: '',
                oldPoliteMessageId: '',
                oldAssertiveMessage: '',
                oldAssertiveMessageId: '',
                setAlternatePolite: !1,
                setAlternateAssertive: !1,
            }),
            Qc(r, n)
        );
    }
    return (
        (function (e, t) {
            if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                },
            })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(t, e),
        (t.getDerivedStateFromProps = function (e, t) {
            var n = t.oldPolitemessage,
                r = t.oldPoliteMessageId,
                o = t.oldAssertiveMessage,
                i = t.oldAssertiveMessageId,
                a = e.politeMessage,
                u = e.politeMessageId,
                s = e.assertiveMessage,
                l = e.assertiveMessageId;
            return n !== a || r !== u
                ? {
                      politeMessage1: t.setAlternatePolite ? '' : a,
                      politeMessage2: t.setAlternatePolite ? a : '',
                      oldPolitemessage: a,
                      oldPoliteMessageId: u,
                      setAlternatePolite: !t.setAlternatePolite,
                  }
                : o !== s || i !== l
                  ? {
                        assertiveMessage1: t.setAlternateAssertive ? '' : s,
                        assertiveMessage2: t.setAlternateAssertive ? s : '',
                        oldAssertiveMessage: s,
                        oldAssertiveMessageId: l,
                        setAlternateAssertive: !t.setAlternateAssertive,
                    }
                  : null;
        }),
        (t.prototype.render = function () {
            var e = this.state,
                t = e.assertiveMessage1,
                n = e.assertiveMessage2,
                r = e.politeMessage1,
                o = e.politeMessage2;
            return rr.createElement(
                'div',
                null,
                rr.createElement(Jc, {
                    'aria-live': 'assertive',
                    message: t,
                }),
                rr.createElement(Jc, {
                    'aria-live': 'assertive',
                    message: n,
                }),
                rr.createElement(Jc, {
                    'aria-live': 'polite',
                    message: r,
                }),
                rr.createElement(Jc, {
                    'aria-live': 'polite',
                    message: o,
                })
            );
        }),
        t
    );
})(or.Component);
ed.propTypes = {};
var td = rr.createContext({
    announceAssertive: nd,
    announcePolite: nd,
});

function nd() {
    console.warn('Announcement failed, LiveAnnouncer context is missing');
}
var rd = (function (e) {
        function t(n) {
            !(function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            })(this, t);
            var r = (function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
            })(this, e.call(this, n));
            return (
                (r.announcePolite = function (e, t) {
                    r.setState({
                        announcePoliteMessage: e,
                        politeMessageId: t || '',
                    });
                }),
                (r.announceAssertive = function (e, t) {
                    r.setState({
                        announceAssertiveMessage: e,
                        assertiveMessageId: t || '',
                    });
                }),
                (r.state = {
                    announcePoliteMessage: '',
                    politeMessageId: '',
                    announceAssertiveMessage: '',
                    assertiveMessageId: '',
                    updateFunctions: {
                        announcePolite: r.announcePolite,
                        announceAssertive: r.announceAssertive,
                    },
                }),
                r
            );
        }
        return (
            (function (e, t) {
                if ('function' != typeof t && null !== t)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                    },
                })),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
            })(t, e),
            (t.prototype.render = function () {
                var e = this.state,
                    t = e.announcePoliteMessage,
                    n = e.politeMessageId,
                    r = e.announceAssertiveMessage,
                    o = e.assertiveMessageId,
                    i = e.updateFunctions;
                return rr.createElement(
                    td.Provider,
                    {
                        value: i,
                    },
                    this.props.children,
                    rr.createElement(ed, {
                        assertiveMessage: r,
                        assertiveMessageId: o,
                        politeMessage: t,
                        politeMessageId: n,
                    })
                );
            }),
            t
        );
    })(or.Component),
    od = {
        exports: {},
    },
    id =
        ('undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
        ('undefined' != typeof msCrypto &&
            'function' == typeof window.msCrypto.getRandomValues &&
            msCrypto.getRandomValues.bind(msCrypto));
if (id) {
    var ad = new Uint8Array(16);
    od.exports = function () {
        return id(ad), ad;
    };
} else {
    var ud = new Array(16);
    od.exports = function () {
        for (var e, t = 0; t < 16; t++)
            3 & t || (e = 4294967296 * Math.random()), (ud[t] = (e >>> ((3 & t) << 3)) & 255);
        return ud;
    };
}
for (var sd = od.exports, ld = [], cd = 0; cd < 256; ++cd) ld[cd] = (cd + 256).toString(16).substr(1);
var dd = function (e, t) {
        var n = t || 0,
            r = ld;
        return [
            r[e[n++]],
            r[e[n++]],
            r[e[n++]],
            r[e[n++]],
            '-',
            r[e[n++]],
            r[e[n++]],
            '-',
            r[e[n++]],
            r[e[n++]],
            '-',
            r[e[n++]],
            r[e[n++]],
            '-',
            r[e[n++]],
            r[e[n++]],
            r[e[n++]],
            r[e[n++]],
            r[e[n++]],
            r[e[n++]],
        ].join('');
    },
    pd = sd,
    Dd = dd;
var md = function (e, t, n) {
    var r = (t && n) || 0;
    'string' == typeof e && ((t = 'binary' === e ? new Array(16) : null), (e = null));
    var o = (e = e || {}).random || (e.rng || pd)();
    if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t)) for (var i = 0; i < 16; ++i) t[r + i] = o[i];
    return t || Dd(o);
};
const fd = cr(md);

function hd(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
}
var gd = (function (e) {
    function t() {
        var n, r;
        !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, t);
        for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
        return (
            (n = r = hd(this, e.call.apply(e, [this].concat(i)))),
            (r.announce = function () {
                var e = r.props,
                    t = e.message,
                    n = e['aria-live'],
                    o = e.announceAssertive,
                    i = e.announcePolite;
                'assertive' === n && o(t || '', fd()), 'polite' === n && i(t || '', fd());
            }),
            hd(r, n)
        );
    }
    return (
        (function (e, t) {
            if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                },
            })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(t, e),
        (t.prototype.componentDidMount = function () {
            this.announce();
        }),
        (t.prototype.componentDidUpdate = function (e) {
            this.props.message !== e.message && this.announce();
        }),
        (t.prototype.componentWillUnmount = function () {
            var e = this.props,
                t = e.clearOnUnmount,
                n = e.announceAssertive,
                r = e.announcePolite;
            (!0 !== t && 'true' !== t) || (n(''), r(''));
        }),
        (t.prototype.render = function () {
            return null;
        }),
        t
    );
})(or.Component);
gd.propTypes = {};
var vd =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    Cd = function (e) {
        return rr.createElement(td.Consumer, null, function (t) {
            return rr.createElement(gd, vd({}, t, e));
        });
    };
Cd.propTypes = {};
var bd = {},
    Ed = {};
Object.defineProperty(Ed, '__esModule', {
    value: !0,
}),
    (Ed.FrameContextConsumer = Ed.FrameContextProvider = Ed.useFrame = Ed.FrameContext = void 0);
var yd,
    xd =
        (yd = or) && yd.__esModule
            ? yd
            : {
                  default: yd,
              };
var Fd = void 0,
    wd = void 0;
'undefined' != typeof document && (Fd = document), 'undefined' != typeof window && (wd = window);
var Ad = (Ed.FrameContext = xd.default.createContext({
    document: Fd,
    window: wd,
}));
Ed.useFrame = function () {
    return xd.default.useContext(Ad);
};
var Bd = Ad.Provider,
    kd = Ad.Consumer;
(Ed.FrameContextProvider = Bd), (Ed.FrameContextConsumer = kd);
var Sd = {},
    Td = {};
Object.defineProperty(Td, '__esModule', {
    value: !0,
});
var Ld = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    })(),
    Pd = or;
Od(Pd);
var Md = Od(Xc);

function Od(e) {
    return e && e.__esModule
        ? e
        : {
              default: e,
          };
}
var Id = (function () {
    function e() {
        return (
            (function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            })(this, e),
            (function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
            })(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        );
    }
    return (
        (function (e, t) {
            if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                },
            })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(e, Pd.Component),
        Ld(e, [
            {
                key: 'componentDidMount',
                value: function () {
                    this.props.contentDidMount();
                },
            },
            {
                key: 'componentDidUpdate',
                value: function () {
                    this.props.contentDidUpdate();
                },
            },
            {
                key: 'render',
                value: function () {
                    return Pd.Children.only(this.props.children);
                },
            },
        ]),
        e
    );
})();
(Id.propTypes = {
    children: Md.default.element.isRequired,
    contentDidMount: Md.default.func.isRequired,
    contentDidUpdate: Md.default.func.isRequired,
}),
    (Td.default = Id),
    Object.defineProperty(Sd, '__esModule', {
        value: !0,
    });
var zd =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    _d = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    })(),
    Rd = or,
    jd = Hd(Rd),
    Nd = Hd(dr),
    Wd = Hd(Xc),
    Vd = Ed,
    Ud = Hd(Td);

function Hd(e) {
    return e && e.__esModule
        ? e
        : {
              default: e,
          };
}
var qd = (function () {
    function e(t, n) {
        !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, e);
        var r = (function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
        return (
            (r.setRef = function (e) {
                r.node = e;
            }),
            (r.handleLoad = function () {
                r.setState({
                    iframeLoaded: !0,
                });
            }),
            (r._isMounted = !1),
            (r.state = {
                iframeLoaded: !1,
            }),
            r
        );
    }
    return (
        (function (e, t) {
            if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                },
            })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(e, Rd.Component),
        _d(e, [
            {
                key: 'componentDidMount',
                value: function () {
                    this._isMounted = !0;
                    var e = this.getDoc();
                    e && 'complete' === e.readyState
                        ? this.forceUpdate()
                        : this.node.addEventListener('load', this.handleLoad);
                },
            },
            {
                key: 'componentWillUnmount',
                value: function () {
                    (this._isMounted = !1), this.node.removeEventListener('load', this.handleLoad);
                },
            },
            {
                key: 'getDoc',
                value: function () {
                    return this.node ? this.node.contentDocument : null;
                },
            },
            {
                key: 'getMountTarget',
                value: function () {
                    var e = this.getDoc();
                    return this.props.mountTarget ? e.querySelector(this.props.mountTarget) : e.body.children[0];
                },
            },
            {
                key: 'renderFrameContents',
                value: function () {
                    if (!this._isMounted) return null;
                    var e = this.getDoc();
                    if (!e) return null;
                    var t = this.props.contentDidMount,
                        n = this.props.contentDidUpdate,
                        r = e.defaultView || e.parentView,
                        o = jd.default.createElement(
                            Ud.default,
                            {
                                contentDidMount: t,
                                contentDidUpdate: n,
                            },
                            jd.default.createElement(
                                Vd.FrameContextProvider,
                                {
                                    value: {
                                        document: e,
                                        window: r,
                                    },
                                },
                                jd.default.createElement(
                                    'div',
                                    {
                                        className: 'frame-content',
                                    },
                                    this.props.children
                                )
                            )
                        ),
                        i = this.getMountTarget();
                    return [
                        Nd.default.createPortal(this.props.head, this.getDoc().head),
                        Nd.default.createPortal(o, i),
                    ];
                },
            },
            {
                key: 'render',
                value: function () {
                    var e = zd({}, this.props, {
                        srcDoc: this.props.initialContent,
                        children: void 0,
                    });
                    return (
                        delete e.head,
                        delete e.initialContent,
                        delete e.mountTarget,
                        delete e.contentDidMount,
                        delete e.contentDidUpdate,
                        jd.default.createElement(
                            'iframe',
                            zd({}, e, {
                                ref: this.setRef,
                                onLoad: this.handleLoad,
                            }),
                            this.state.iframeLoaded && this.renderFrameContents()
                        )
                    );
                },
            },
        ]),
        e
    );
})();
(qd.propTypes = {
    style: Wd.default.object,
    head: Wd.default.node,
    initialContent: Wd.default.string,
    mountTarget: Wd.default.string,
    contentDidMount: Wd.default.func,
    contentDidUpdate: Wd.default.func,
    children: Wd.default.oneOfType([Wd.default.element, Wd.default.arrayOf(Wd.default.element)]),
}),
    (qd.defaultProps = {
        style: {},
        head: null,
        children: void 0,
        mountTarget: void 0,
        contentDidMount: function () {},
        contentDidUpdate: function () {},
        initialContent: '<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>',
    }),
    (Sd.default = qd),
    (function (e) {
        Object.defineProperty(e, '__esModule', {
            value: !0,
        }),
            (e.useFrame = e.FrameContextConsumer = e.FrameContext = void 0);
        var t = Ed;
        Object.defineProperty(e, 'FrameContext', {
            enumerable: !0,
            get: function () {
                return t.FrameContext;
            },
        }),
            Object.defineProperty(e, 'FrameContextConsumer', {
                enumerable: !0,
                get: function () {
                    return t.FrameContextConsumer;
                },
            }),
            Object.defineProperty(e, 'useFrame', {
                enumerable: !0,
                get: function () {
                    return t.useFrame;
                },
            });
        var n = (function (e) {
            return e && e.__esModule
                ? e
                : {
                      default: e,
                  };
        })(Sd);
        e.default = n.default;
    })(bd);
const Gd = cr(bd);

function Kd(e) {
    var t = or.useRef();
    return (
        t.current ||
            (t.current = {
                v: e(),
            }),
        t.current.v
    );
}
var Yd,
    Zd = function (e, t) {
        'function' != typeof e ? (e.current = t) : e(t);
    },
    Xd = function (e, t) {
        var n = or.useRef();
        return or.useCallback(
            function (r) {
                (e.current = r), n.current && Zd(n.current, null), (n.current = t), t && Zd(t, r);
            },
            [t]
        );
    },
    $d = function (e) {
        var t = or.useRef(e);
        return (
            or.useEffect(function () {
                t.current = e;
            }),
            t
        );
    };
var Jd = 'touchstart',
    Qd = function (e) {
        if (
            e === Jd &&
            (function () {
                if (void 0 !== Yd) return Yd;
                var e = !1,
                    t = {
                        get passive() {
                            e = !0;
                        },
                    },
                    n = function () {};
                return window.addEventListener('t', n, t), window.removeEventListener('t', n, t), (Yd = e), e;
            })()
        )
            return {
                passive: !0,
            };
    },
    ep = document;

function tp(e, t, n) {
    var r = (void 0 === n ? {} : n).document,
        o = void 0 === r ? ep : r,
        i = $d(t),
        a = 'ontouchend' in o ? Jd : 'mousedown';
    or.useEffect(
        function () {
            if (t) {
                var n = function (t) {
                    e.current && i.current && !e.current.contains(t.target) && i.current(t);
                };
                return (
                    o.addEventListener(a, n, Qd(a)),
                    function () {
                        o.removeEventListener(a, n);
                    }
                );
            }
        },
        [!t]
    );
}

function np(e) {
    var t = or.useRef();
    return (
        or.useEffect(function () {
            t.current = e;
        }),
        t.current
    );
}
var rp = (function (e) {
        return function (t) {
            return 1 - e(1 - t);
        };
    })(
        (function (e) {
            return function (t) {
                return Math.pow(t, e);
            };
        })(2)
    ),
    op = function () {
        return (
            (op =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e;
                }),
            op.apply(this, arguments)
        );
    },
    ip = function (e, t) {
        return function (n) {
            return Math.max(Math.min(n, t), e);
        };
    },
    ap = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/i,
    up = {
        test: function (e) {
            return 'number' == typeof e;
        },
        parse: parseFloat,
        transform: function (e) {
            return e;
        },
    };
op({}, up, {
    transform: ip(0, 1),
}),
    op({}, up, {
        default: 1,
    });
var sp,
    lp =
        ((sp = '%'),
        {
            test: function (e) {
                return 'string' == typeof e && e.endsWith(sp) && 1 === e.split(' ').length;
            },
            parse: parseFloat,
            transform: function (e) {
                return '' + e + sp;
            },
        });
op({}, lp, {
    parse: function (e) {
        return lp.parse(e) / 100;
    },
    transform: function (e) {
        return lp.transform(100 * e);
    },
});
var cp = ip(0, 255),
    dp = op({}, up, {
        transform: function (e) {
            return Math.round(cp(e));
        },
    });

function pp(e, t) {
    return e.startsWith(t) && ap.test(e);
}
var Dp,
    mp = {
        test: function (e) {
            return 'string' == typeof e
                ? pp(e, 'rgb')
                : (function (e) {
                      return void 0 !== e.red;
                  })(e);
        },
        parse:
            ((Dp = ['red', 'green', 'blue', 'alpha']),
            function (e) {
                if ('string' != typeof e) return e;
                for (
                    var t,
                        n = {},
                        r = ((t = e), t.substring(t.indexOf('(') + 1, t.lastIndexOf(')'))).split(/,\s*/),
                        o = 0;
                    o < 4;
                    o++
                )
                    n[Dp[o]] = void 0 !== r[o] ? parseFloat(r[o]) : 1;
                return n;
            }),
        transform: function (e) {
            var t,
                n = e.red,
                r = e.green,
                o = e.blue,
                i = e.alpha;
            return (function (e) {
                var t = e.red,
                    n = e.green,
                    r = e.blue,
                    o = e.alpha;
                return 'rgba(' + t + ', ' + n + ', ' + r + ', ' + (void 0 === o ? 1 : o) + ')';
            })({
                red: dp.transform(n),
                green: dp.transform(r),
                blue: dp.transform(o),
                alpha: ((t = i), t % 1 ? Number(t.toFixed(5)) : t),
            });
        },
    };
op({}, mp, {
    test: function (e) {
        return 'string' == typeof e && pp(e, '#');
    },
    parse: function (e) {
        var t = '',
            n = '',
            r = '';
        return (
            e.length > 4
                ? ((t = e.substr(1, 2)), (n = e.substr(3, 2)), (r = e.substr(5, 2)))
                : ((t = e.substr(1, 1)), (n = e.substr(2, 1)), (r = e.substr(3, 1)), (t += t), (n += n), (r += r)),
            {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: 1,
            }
        );
    },
});
var fp,
    hp,
    gp = 0,
    vp =
        'undefined' != typeof window && void 0 !== window.requestAnimationFrame
            ? function (e) {
                  return window.requestAnimationFrame(e);
              }
            : function (e) {
                  var t = Date.now(),
                      n = Math.max(0, 16.7 - (t - gp));
                  (gp = t + n),
                      setTimeout(function () {
                          return e(gp);
                      }, n);
              };
((hp = fp || (fp = {})).Read = 'read'),
    (hp.Update = 'update'),
    (hp.Render = 'render'),
    (hp.PostRender = 'postRender'),
    (hp.FixedUpdate = 'fixedUpdate');
var Cp = (1 / 60) * 1e3,
    bp = !0,
    Ep = !1,
    yp = !1,
    xp = {
        delta: 0,
        timestamp: 0,
    },
    Fp = [fp.Read, fp.Update, fp.Render, fp.PostRender],
    wp = function (e) {
        return (Ep = e);
    },
    Ap = Fp.reduce(
        function (e, t) {
            var n = (function (e) {
                var t = [],
                    n = [],
                    r = 0,
                    o = !1,
                    i = 0,
                    a = new WeakSet(),
                    u = new WeakSet(),
                    s = {
                        cancel: function (e) {
                            var t = n.indexOf(e);
                            a.add(e), -1 !== t && n.splice(t, 1);
                        },
                        process: function (l) {
                            var c, d;
                            if (((o = !0), (t = (c = [n, t])[0]), ((n = c[1]).length = 0), (r = t.length)))
                                for (i = 0; i < r; i++)
                                    (d = t[i])(l), !0 !== u.has(d) || a.has(d) || (s.schedule(d), e(!0));
                            o = !1;
                        },
                        schedule: function (e, i, s) {
                            void 0 === i && (i = !1), void 0 === s && (s = !1);
                            var l = s && o,
                                c = l ? t : n;
                            a.delete(e), i && u.add(e), -1 === c.indexOf(e) && (c.push(e), l && (r = t.length));
                        },
                    };
                return s;
            })(wp);
            return (
                (e.sync[t] = function (e, t, r) {
                    return void 0 === t && (t = !1), void 0 === r && (r = !1), Ep || Lp(), n.schedule(e, t, r), e;
                }),
                (e.cancelSync[t] = function (e) {
                    return n.cancel(e);
                }),
                (e.steps[t] = n),
                e
            );
        },
        {
            steps: {},
            sync: {},
            cancelSync: {},
        }
    ),
    Bp = Ap.steps;
Ap.sync, Ap.cancelSync;
var kp,
    Sp = function (e) {
        return Bp[e].process(xp);
    },
    Tp = function (e) {
        (Ep = !1),
            (xp.delta = bp ? Cp : Math.max(Math.min(e - xp.timestamp, 40), 1)),
            bp || (Cp = xp.delta),
            (xp.timestamp = e),
            (yp = !0),
            Fp.forEach(Sp),
            (yp = !1),
            Ep && ((bp = !1), vp(Tp));
    },
    Lp = function () {
        (Ep = !0), (bp = !0), yp || vp(Tp);
    };

function Pp() {
    if (void 0 !== kp) return kp;
    var e = !1,
        t = {
            get passive() {
                e = !0;
            },
        },
        n = function () {};
    return window.addEventListener('t', n, t), window.removeEventListener('t', n, t), (kp = e), e;
}
const Mp = {};

function Op() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function (e, n) {
        if (0 === e) {
            var r = !1;
            for (
                n(0, function (e) {
                    2 === e && ((r = !0), (t.length = 0));
                });
                0 !== t.length;

            )
                n(1, t.shift());
            r || n(2);
        }
    };
}

function Ip() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function (e) {
        return (
            (...e) =>
            (t, n) => {
                if (0 !== t) return;
                const r = e.length;
                if (0 === r) return n(0, () => {}), void n(2);
                let o,
                    i = 0,
                    a = Mp;
                const u = (e, t) => {
                    1 === e && (a = t), o(e, t);
                };
                !(function t() {
                    i !== r
                        ? e[i](0, (e, r) => {
                              0 === e
                                  ? ((o = r), 0 === i ? n(0, u) : a !== Mp && o(1, a))
                                  : 2 === e && r
                                    ? n(2, r)
                                    : 2 === e
                                      ? (i++, t())
                                      : n(e, r);
                          })
                        : n(2);
                })();
            }
        )(e, Op.apply(void 0, t));
    };
}
var zp = e => t => (n, r) => {
    0 === n &&
        t(0, (t, n) => {
            r(t, 1 === t ? e(n) : n);
        });
};
const _p = cr(zp);
var Rp = pr(function (e, t) {
        var n;
        0 === e &&
            (o(),
            t(0, function (e) {
                2 === e && cancelAnimationFrame(n);
            }));

        function r(e) {
            o(), t(1, e);
        }

        function o() {
            n = requestAnimationFrame(r);
        }
    }),
    jp = Dr(function () {
        var e = Date.now();
        return _p(function () {
            return Date.now() - e;
        })(Rp);
    });
const Np = (e, t, n) => (r, o) => {
    if (0 !== r) return;
    let i = !1;
    const a = e => {
        o(1, e);
    };
    o(0, r => {
        2 === r && ((i = !0), e.removeEventListener(t, a, n));
    }),
        i || e.addEventListener(t, a, n);
};
const Wp = {};
var Vp = [],
    Up = Pp()
        ? {
              passive: !0,
          }
        : void 0;

function Hp(e, t) {
    var n = Kd(we),
        r = or.useRef();
    or.useEffect(function () {
        r.current = ['x' === e ? 'scrollLeft' : 'scrollTop', t.current];
    });
    var o = or.useCallback(function (e, t) {
        var o = void 0 === t ? {} : t,
            i = o.duration,
            a = void 0 === i ? 300 : i,
            u = o.easing,
            s = void 0 === u ? rp : u,
            l = r.current,
            c = l[0],
            d = l[1];
        n(1, [c, d, e, a, s]);
    }, Vp);
    return (
        or.useEffect(function () {
            return (
                (e = {}) =>
                t => {
                    'function' == typeof e &&
                        (e = {
                            next: e,
                        });
                    let n,
                        { next: r, error: o, complete: i } = e;
                    return (
                        t(0, (e, t) => {
                            0 === e && (n = t),
                                1 === e && r && r(t),
                                (1 !== e && 0 !== e) || n(1),
                                2 === e && !t && i && i(),
                                2 === e && t && o && o(t);
                        }),
                        () => {
                            n && n(2);
                        }
                    );
                }
            )(function (e) {
                var t = e[0],
                    n = e[1],
                    r = e[2];
                t[n] = r;
            })(
                mr(
                    _p(function (e) {
                        var t,
                            n,
                            r,
                            o = e[0],
                            i = e[1],
                            a = e[2],
                            u = e[3],
                            s = e[4],
                            l = [i, o, 0],
                            c = i[o],
                            d = Math.max(0, 'function' == typeof u ? u(Math.abs(a - c)) : u);
                        return 0 === d
                            ? ((l[2] = a), Op(l))
                            : ((r = (function (...e) {
                                  return (t, n) => {
                                      if (0 !== t) return;
                                      const r = e.length,
                                          o = new Array(r);
                                      let i = 0,
                                          a = 0,
                                          u = !1;
                                      const s = (e, t) => {
                                          2 === e && (u = !0);
                                          for (let n = 0; n < r; n++) o[n] && o[n](e, t);
                                      };
                                      for (let l = 0; l < r; l++) {
                                          if (u) return;
                                          e[l](0, (e, t) => {
                                              if (0 === e) (o[l] = t), 1 === ++i && n(0, s);
                                              else if (2 === e && t) {
                                                  u = !0;
                                                  for (let e = 0; e < r; e++) e !== l && o[e] && o[e](2);
                                                  n(2, t);
                                              } else 2 === e ? ((o[l] = void 0), ++a === r && n(2)) : n(e, t);
                                          });
                                      }
                                  };
                              })(Np(i, 'wheel', Up), Np(i, 'touchstart', Up))),
                              e => (t, n) => {
                                  if (0 !== t) return;
                                  let o,
                                      i,
                                      a = !1,
                                      u = Wp;
                                  e(0, (e, t) => {
                                      if (0 === e)
                                          return (
                                              (o = t),
                                              r(0, (e, t) =>
                                                  0 === e
                                                      ? ((i = t), void i(1))
                                                      : 1 === e
                                                        ? ((u = void 0), i(2), o(2), void (a && n(2)))
                                                        : void (
                                                              2 === e &&
                                                              ((i = null), (u = t), null != t && (o(2), a && n(e, t)))
                                                          )
                                              ),
                                              (a = !0),
                                              n(0, (e, t) => {
                                                  u === Wp && (2 === e && i && i(2), o(e, t));
                                              }),
                                              void (u !== Wp && n(2, u))
                                          );
                                      2 === e && i(2), u === Wp && n(e, t);
                                  });
                              })(
                                  _p(function (e) {
                                      var t, n, r;
                                      return (l[2] = ((t = c), (n = a), -(r = s(e)) * t + r * n + t)), l;
                                  })(
                                      ((t = d),
                                      Ip(1)(
                                          ((n = function (e) {
                                              return e <= 1;
                                          }),
                                          function (e) {
                                              return function (t, r) {
                                                  var o;
                                                  0 === t &&
                                                      e(0, function (e, t) {
                                                          if ((0 === e && (o = t), 1 === e && !n(t)))
                                                              return o(2), void r(2);
                                                          r(e, t);
                                                      });
                                              };
                                          })(
                                              _p(function (e) {
                                                  return e / t;
                                              })(jp)
                                          )
                                      ))
                                  )
                              );
                    })(n)
                )
            );
        }, Vp),
        o
    );
}
var qp = {
        exports: {},
    },
    Gp = {};
/** @license React v1.1.1
 * use-subscription.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(Gp, '__esModule', {
    value: !0,
});
var Kp = or,
    Yp = Object.getOwnPropertySymbols,
    Zp = Object.prototype.hasOwnProperty,
    Xp = Object.prototype.propertyIsEnumerable,
    $p = (function () {
        try {
            if (!Object.assign) return !1;
            var e = new String('abc');
            if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
            var t = {};
            for (e = 0; 10 > e; e++) t['_' + String.fromCharCode(e)] = e;
            if (
                '0123456789' !==
                Object.getOwnPropertyNames(t)
                    .map(function (e) {
                        return t[e];
                    })
                    .join('')
            )
                return !1;
            var n = {};
            return (
                'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                    n[e] = e;
                }),
                'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, n)).join('')
            );
        } catch (r) {
            return !1;
        }
    })()
        ? Object.assign
        : function (e, t) {
              if (null == e) throw new TypeError('Object.assign cannot be called with null or undefined');
              for (var n, r = Object(e), o = 1; o < arguments.length; o++) {
                  var i = Object(arguments[o]);
                  for (var a in i) Zp.call(i, a) && (r[a] = i[a]);
                  if (Yp) {
                      n = Yp(i);
                      for (var u = 0; u < n.length; u++) Xp.call(i, n[u]) && (r[n[u]] = i[n[u]]);
                  }
              }
              return r;
          };
(Gp.useSubscription = function (e) {
    var t = e.getCurrentValue,
        n = e.subscribe,
        r = Kp.useState(function () {
            return {
                getCurrentValue: t,
                subscribe: n,
                value: t(),
            };
        });
    e = r[0];
    var o = r[1];
    return (
        (r = e.value),
        (e.getCurrentValue === t && e.subscribe === n) ||
            ((r = t()),
            o({
                getCurrentValue: t,
                subscribe: n,
                value: r,
            })),
        Kp.useDebugValue(r),
        Kp.useEffect(
            function () {
                function e() {
                    if (!r) {
                        var e = t();
                        o(function (r) {
                            return r.getCurrentValue !== t || r.subscribe !== n || r.value === e
                                ? r
                                : $p({}, r, {
                                      value: e,
                                  });
                        });
                    }
                }
                var r = !1,
                    i = n(e);
                return (
                    e(),
                    function () {
                        (r = !0), i();
                    }
                );
            },
            [t, n]
        ),
        r
    );
}),
    (qp.exports = Gp);
var Jp = qp.exports;
const Qp = (e, t) => {
        e.forEach(e => {
            if (e !== t.modalElement) {
                if (!t.ancestors.has(e)) {
                    const n = e.getAttribute('aria-hidden');
                    return t.originalValues.set(e, n), void e.setAttribute('aria-hidden', 'true');
                }
                e.children && Qp([].slice.call(e.children), t);
            }
        });
    },
    eD = e => {
        or.useEffect(() => {
            if (!e) return;
            const t = e.current,
                n = t.ownerDocument || document,
                r = ((e, t) => {
                    const n = new Set();
                    let r = e;
                    for (; (r = r.parentElement); ) {
                        if (t.body === r) return n;
                        n.add(r);
                    }
                    return n;
                })(t, n),
                o = new Map();
            return (
                Qp([].slice.call(n.body.children), {
                    ancestors: r,
                    originalValues: o,
                    modalElement: t,
                }),
                () => {
                    o.forEach((e, t) => {
                        null !== e ? t.setAttribute('aria-hidden', e) : t.removeAttribute('aria-hidden');
                    });
                }
            );
        }, [e]);
    };

function tD(e, t, n) {
    or.useEffect(() => (document.addEventListener(e, t, n), () => document.removeEventListener(e, t, n)), [e, t, n]);
}
const nD = (e, t) => {
    or.useEffect(() => {
        const n = t.current;
        if (n) {
            const t = e => {
                e.preventDefault();
            };
            return (
                n.addEventListener(e, t, {
                    passive: !1,
                }),
                () => n.removeEventListener('touchmove', t)
            );
        }
    }, [e, t]);
};

function rD(e) {
    or.useEffect(e, []);
}
const oD = (e, t) => {
        const n = or.useRef(!1);
        or.useEffect(() => {
            n.current ? e() : (n.current = !0);
        }, t);
    },
    iD = {
        duration: 0,
    },
    aD = Pp(),
    uD = ['End', 'Home', 'Space', 'PageUp', 'PageDown', 'ArrowUp', 'ArrowDown'];

function sD(e, t) {
    void 0 === t && (t = {});
    const {
            firstItemKey: n,
            lastItemKey: r,
            topThreshold: o = 20,
            bottomThreshold: i = 20,
            initialScrollTop: a,
            onIsUserScrollingChanged: u,
            onIsScrolledToTopChanged: s,
            onIsScrolledToBottomChanged: l,
            onScrollDeltaChanged: c,
            isScrollingChangedTimeout: d = 300,
        } = t,
        p = or.useRef(0),
        D = or.useRef(0),
        m = or.useRef(!1),
        f = or.useRef(!1),
        h = or.useRef(!1),
        g = or.useRef(!1),
        v = or.useRef(null),
        C = or.useRef({
            timeout: 0,
            value: !1,
        }),
        b = Hp('y', e),
        E = or.useCallback(
            function () {
                (g.current = !0), b(...arguments);
            },
            [b]
        ),
        y = np(n),
        x = np(r),
        F = or.useCallback(() => {
            g.current = !1;
        }, []),
        w = or.useCallback(() => f.current, []),
        A = or.useCallback(() => h.current, []),
        B = or.useCallback(e => E(0, e), [b]),
        k = or.useCallback(
            t => {
                if (e.current) {
                    const { scrollHeight: n, clientHeight: r } = e.current;
                    E(n - r, t);
                }
            },
            [e, E]
        ),
        S = or.useCallback(e => (v.current = e), []),
        T = or.useCallback(() => !!e.current && e.current.scrollHeight > e.current.clientHeight, [e]),
        L = or.useCallback(() => {
            C.current.value || ((C.current.value = !0), u && u(C.current.value)),
                clearTimeout(C.current.timeout),
                (C.current.timeout = window.setTimeout(() => {
                    C.current.value && ((C.current.value = !1), u && u(C.current.value));
                }, d));
        }, [d]),
        P = or.useCallback(() => {
            const t = e.current,
                { scrollTop: n, scrollHeight: r } = t,
                a = p.current > n,
                u = p.current < n,
                d = p.current === n,
                v = r < D.current,
                b = r > D.current,
                E = p.current - n,
                y = r > 1.5 * window.innerHeight;
            if (((p.current = n), (D.current = r), T() && !g.current && L(), d && m.current)) return;
            const x = f.current && a,
                F = h.current && (u || v || b),
                w =
                    x ||
                    (function (e, t) {
                        return void 0 === t && (t = 0), e.scrollTop <= t;
                    })(t, o),
                A =
                    F ||
                    (function (e, t) {
                        return void 0 === t && (t = 0), Math.abs(e.scrollTop + e.clientHeight - e.scrollHeight) <= t;
                    })(t, i);
            s && (!f.current && w ? s(!0) : f.current && !w && s(!1)),
                l && (!h.current && A ? l(!0) : h.current && !A && l(!1)),
                (f.current = w),
                (h.current = A),
                !b &&
                    !f.current &&
                    c &&
                    !h.current &&
                    m.current &&
                    C.current &&
                    aD &&
                    !g.current &&
                    y &&
                    c({
                        deltaX: 0,
                        deltaY: E / 2,
                    });
        }, [s, l, L]),
        M = or.useCallback(
            e => {
                ge(e.key, uD) && F();
            },
            [F]
        ),
        O = () => {
            E(v.current.offsetTop, iD), (v.current = null);
        },
        I = () => {
            v.current
                ? O()
                : (y !== n &&
                      (() => {
                          const { scrollHeight: t } = e.current,
                              n = D.current - p.current;
                          E(t - n, iD);
                      })(),
                  x !== r && h.current && k());
        };
    return (
        tD('keydown', M),
        or.useEffect(() => {
            !1 === m.current
                ? (v.current ? O() : E('number' == typeof a ? a : e.current.scrollHeight, iD), P(), (m.current = !0))
                : I();
        }),
        or.useEffect(() => {
            if (e.current) {
                const t = e.current;
                return (
                    t.addEventListener(
                        'scroll',
                        P,
                        aD
                            ? {
                                  passive: !0,
                              }
                            : void 0
                    ),
                    () => t.removeEventListener('scroll', P)
                );
            }
        }, [e, P]),
        {
            scrollTo: E,
            scrollToTop: B,
            scrollToBottom: k,
            getIsOnTop: w,
            getIsOnBottom: A,
            getIsScrollable: T,
            setScrollTargetNode: S,
            onWheel: F,
            onTouchStart: F,
        }
    );
}
const lD = e =>
        Kd(() => {
            let t = e;
            const n = [];
            return {
                subscribe: e => (
                    n.push(e),
                    () => {
                        n.splice(n.indexOf(e), 1);
                    }
                ),
                next(e) {
                    (t = e), n.forEach(t => t(e));
                },
                get: () => t,
            };
        }),
    cD = (e, t) => {
        or.useEffect(() => {
            const n = setTimeout(e, t);
            return () => clearTimeout(n);
        }, [e, t]);
    };

function dD(e) {
    const [t, n] = or.useState(e);
    return [
        t,
        or.useCallback(() => {
            n(e => !e);
        }, []),
    ];
}
const pD = new Map(),
    DD = or.createContext(pD);

function mD(e) {
    const t = or.useContext(DD);
    if (void 0 === e) return t;
    if (t.has(e)) return t.get(e);
    const n = {},
        r = {
            get: () => n.value,
            set: e => (n.value = e),
            clear: () => delete n.value,
            destroy: () => t.delete(e),
        };
    return t.set(e, r), r;
}
DD.Provider;
const fD = function (e) {
    void 0 === e && (e = !1);
    const [t, n] = or.useState(e),
        { focusWithinProps: r } = nl({
            onFocusWithin: () => {
                n(!0);
            },
            onBlurWithin: () => {
                n(!1);
            },
        });
    return [t, r];
};
var hD =
        /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    gD = Za(function (e) {
        return hD.test(e) || (111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91);
    }),
    vD = gD,
    CD = function (e) {
        return 'theme' !== e;
    },
    bD = function (e) {
        return 'string' == typeof e && e.charCodeAt(0) > 96 ? vD : CD;
    },
    ED = function (e, t, n) {
        var r;
        if (t) {
            var o = t.shouldForwardProp;
            r =
                e.__emotion_forwardProp && o
                    ? function (t) {
                          return e.__emotion_forwardProp(t) && o(t);
                      }
                    : o;
        }
        return 'function' != typeof r && n && (r = e.__emotion_forwardProp), r;
    },
    yD = function e(t, n) {
        var r,
            o,
            i = t.__emotion_real === t,
            a = (i && t.__emotion_base) || t;
        void 0 !== n && ((r = n.label), (o = n.target));
        var u = ED(t, n, i),
            s = u || bD(a),
            l = !s('as');
        return function () {
            var c = arguments,
                d = i && void 0 !== t.__emotion_styles ? t.__emotion_styles.slice(0) : [];
            if ((void 0 !== r && d.push('label:' + r + ';'), null == c[0] || void 0 === c[0].raw)) d.push.apply(d, c);
            else {
                d.push(c[0][0]);
                for (var p = c.length, D = 1; D < p; D++) d.push(c[D], c[0][D]);
            }
            var m = vu(function (e, t, n) {
                var r = (l && e.as) || a,
                    i = '',
                    c = [],
                    p = e;
                if (null == e.theme) {
                    for (var D in ((p = {}), e)) p[D] = e[D];
                    p.theme = or.useContext(Cu);
                }
                'string' == typeof e.className
                    ? (i = nu(t.registered, c, e.className))
                    : null != e.className && (i = e.className + ' ');
                var m = mu(d.concat(c), t.registered, p);
                ru(t, m, 'string' == typeof r), (i += t.key + '-' + m.name), void 0 !== o && (i += ' ' + o);
                var f = l && void 0 === u ? bD(r) : s,
                    h = {};
                for (var g in e) (l && 'as' === g) || (f(g) && (h[g] = e[g]));
                return (h.className = i), (h.ref = n), or.createElement(r, h);
            });
            return (
                (m.displayName =
                    void 0 !== r
                        ? r
                        : 'Styled(' + ('string' == typeof a ? a : a.displayName || a.name || 'Component') + ')'),
                (m.defaultProps = t.defaultProps),
                (m.__emotion_real = m),
                (m.__emotion_base = a),
                (m.__emotion_styles = d),
                (m.__emotion_forwardProp = u),
                Object.defineProperty(m, 'toString', {
                    value: function () {
                        return '.' + o;
                    },
                }),
                (m.withComponent = function (t, r) {
                    return e(
                        t,
                        ir({}, n, r, {
                            shouldForwardProp: ED(m, r, !0),
                        })
                    ).apply(void 0, d);
                }),
                m
            );
        };
    },
    xD = yD.bind();
[
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
].forEach(function (e) {
    xD[e] = xD(e);
});
const FD = e => {
        const t = {};
        if (
            (e.flexFill && ((t.flexGrow = 1), (t.maxWidth = '100%')),
            e.flexFit && (t.flexGrow = 0),
            e.noShrink && (t.flexShrink = 0),
            e.ellipsis && ((t.whiteSpace = 'nowrap'), (t.overflow = 'hidden'), (t.textOverflow = 'ellipsis')),
            e.nowrap && (t.whiteSpace = 'nowrap'),
            'isFocusVisible' in e &&
                (t['&:focus'] = {
                    outlineStyle: e.isFocusVisible ? 'auto' : 'none',
                }),
            e.preserveLines && (t.whiteSpace = 'pre-line'),
            e.textWrap)
        ) {
            const e = 'break-word';
            (t.wordWrap = e), (t.overflowWrap = e), (t.wordBreak = e);
        }
        return t;
    },
    wD = e => e.charAt(0) !== e.charAt(0).toLowerCase(),
    AD = (e, t) => wD(t);
Ce.bind(null, AD);
const BD = Nr.bind(null, AD),
    kD = ['css', 'vars'];

function SD() {
    return (
        (SD = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        SD.apply(null, arguments)
    );
}
const TD = {},
    LD = e =>
        (function (e, t) {
            return Er(t).reduce((n, r) => {
                const o = e(r);
                return (n[o] = n[o] || {}), (n[o][r] = t[r]), n;
            }, {});
        })(n => (wD(n) ? 'components' : t(e[n]) ? 'propsDescriptions' : 'themeProps'), e),
    PD = e => {
        if (!e) return TD;
        const { css: t, vars: n } = e,
            r = (function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var r in e)
                    if ({}.hasOwnProperty.call(e, r)) {
                        if (-1 !== t.indexOf(r)) continue;
                        n[r] = e[r];
                    }
                return n;
            })(e, kD);
        return SD(
            {
                css: t,
                vars: n,
            },
            LD(r)
        );
    },
    MD = or.createContext(),
    OD = e => {
        let { value: t, children: n } = e;
        return or.createElement(
            yu,
            {
                theme: t,
            },
            or.createElement(
                MD.Provider,
                {
                    value: t,
                },
                n
            )
        );
    };

function ID() {
    return (
        (ID = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        ID.apply(null, arguments)
    );
}
const zD = e => t => n => {
    const r = n[e];
    if (!r) return n;
    const { propsDescriptions: i, components: a } = PD(r);
    if (!i && !a) return n;
    const u = (function (e, t, n) {
        void 0 === n && (n = {});
        const r = Nr((e, n) => t[n], n);
        return Object.keys(r).map(t => {
            const n = r[t],
                { themeProps: o, components: i } = PD(n);
            if (!o) return i;
            const a = {
                [e]: o,
            };
            return i ? ID({}, a, i) : a;
        });
    })(e, t, i);
    return (function (e) {
        if (0 === e.length) return {};
        const [t, ...n] = e;
        return n.reduce((e, t) => o(e, t), t);
    })([n, a, ...u].filter(Boolean));
};

function _D() {
    return (
        (_D = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        _D.apply(null, arguments)
    );
}
const RD = (e, n) => {
        const r = Ae(t, n);
        return 0 === Object.keys(r)
            ? n
            : fr(
                  ue((n, r) => {
                      if (!t(n)) return n;
                      if (':' === r[0]) return RD(e, n);
                      return n[pe(t => e[t], Object.keys(n))] || n.default;
                  }, n)
              );
    },
    jD = function (e, t) {
        void 0 === t && (t = {});
        const { displayName: n, displayType: r, mapPropsToStyles: o } = t,
            i = xD(e, t);
        return function () {
            for (var e = arguments.length, a = new Array(e), u = 0; u < e; u++) a[u] = arguments[u];
            if (a.length > 0 && void 0 !== a[0].raw) {
                const e = a;
                a = [e[0][0]];
                for (let t = 1; t < e.length; t++) a.push(e[t], e[0][t]);
            }
            const s = n || r || null,
                l = i(...a, e =>
                    ((e, t, n) => {
                        const { theme: r, style: o } = e,
                            { css: i, vars: a, themeProps: u } = PD(r[t]);
                        return [
                            a ? _D({}, r.vars, a) : r.vars,
                            'function' == typeof n && void 0 !== u && n(u),
                            i && RD(e, i),
                            FD(e),
                            'function' == typeof n && n(_D({}, u, e)),
                            o,
                        ];
                    })(e, s, o)
                );
            return (
                (l.__ui_kit_name = s),
                t.section
                    ? Object.defineProperty(
                          (e => {
                              const t = e.__ui_kit_name,
                                  n = zD(t);
                              return or.forwardRef(function (t, r) {
                                  return or.createElement(
                                      OD,
                                      {
                                          value: n(t),
                                      },
                                      or.createElement(
                                          e,
                                          ID({}, t, {
                                              ref: r,
                                          })
                                      )
                                  );
                              });
                          })(l),
                          'toString',
                          {
                              value: l.toString,
                          }
                      )
                    : l
            );
        };
    };

function ND(e, t) {
    return e
        .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
        .replace(/\s+/g, ' ')
        .replace(/^\s*|\s*$/g, '');
}
const WD = !1,
    VD = rr.createContext(null);
var UD = 'unmounted',
    HD = 'exited',
    qD = 'entering',
    GD = 'entered',
    KD = 'exiting',
    YD = (function (e) {
        function t(t, n) {
            var r;
            r = e.call(this, t, n) || this;
            var o,
                i = n && !n.isMounting ? t.enter : t.appear;
            return (
                (r.appearStatus = null),
                t.in
                    ? i
                        ? ((o = HD), (r.appearStatus = qD))
                        : (o = GD)
                    : (o = t.unmountOnExit || t.mountOnEnter ? UD : HD),
                (r.state = {
                    status: o,
                }),
                (r.nextCallback = null),
                r
            );
        }
        Be(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
                return e.in && t.status === UD
                    ? {
                          status: HD,
                      }
                    : null;
            });
        var n = t.prototype;
        return (
            (n.componentDidMount = function () {
                this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (e) {
                var t = null;
                if (e !== this.props) {
                    var n = this.state.status;
                    this.props.in ? n !== qD && n !== GD && (t = qD) : (n !== qD && n !== GD) || (t = KD);
                }
                this.updateStatus(!1, t);
            }),
            (n.componentWillUnmount = function () {
                this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
                var e,
                    t,
                    n,
                    r = this.props.timeout;
                return (
                    (e = t = n = r),
                    null != r &&
                        'number' != typeof r &&
                        ((e = r.exit), (t = r.enter), (n = void 0 !== r.appear ? r.appear : t)),
                    {
                        exit: e,
                        enter: t,
                        appear: n,
                    }
                );
            }),
            (n.updateStatus = function (e, t) {
                void 0 === e && (e = !1),
                    null !== t
                        ? (this.cancelNextCallback(), t === qD ? this.performEnter(e) : this.performExit())
                        : this.props.unmountOnExit &&
                          this.state.status === HD &&
                          this.setState({
                              status: UD,
                          });
            }),
            (n.performEnter = function (e) {
                var t = this,
                    n = this.props.enter,
                    r = this.context ? this.context.isMounting : e,
                    o = this.props.nodeRef ? [r] : [hr.findDOMNode(this), r],
                    i = o[0],
                    a = o[1],
                    u = this.getTimeouts(),
                    s = r ? u.appear : u.enter;
                (!e && !n) || WD
                    ? this.safeSetState(
                          {
                              status: GD,
                          },
                          function () {
                              t.props.onEntered(i);
                          }
                      )
                    : (this.props.onEnter(i, a),
                      this.safeSetState(
                          {
                              status: qD,
                          },
                          function () {
                              t.props.onEntering(i, a),
                                  t.onTransitionEnd(s, function () {
                                      t.safeSetState(
                                          {
                                              status: GD,
                                          },
                                          function () {
                                              t.props.onEntered(i, a);
                                          }
                                      );
                                  });
                          }
                      ));
            }),
            (n.performExit = function () {
                var e = this,
                    t = this.props.exit,
                    n = this.getTimeouts(),
                    r = this.props.nodeRef ? void 0 : hr.findDOMNode(this);
                t && !WD
                    ? (this.props.onExit(r),
                      this.safeSetState(
                          {
                              status: KD,
                          },
                          function () {
                              e.props.onExiting(r),
                                  e.onTransitionEnd(n.exit, function () {
                                      e.safeSetState(
                                          {
                                              status: HD,
                                          },
                                          function () {
                                              e.props.onExited(r);
                                          }
                                      );
                                  });
                          }
                      ))
                    : this.safeSetState(
                          {
                              status: HD,
                          },
                          function () {
                              e.props.onExited(r);
                          }
                      );
            }),
            (n.cancelNextCallback = function () {
                null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (e, t) {
                (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (n.setNextCallback = function (e) {
                var t = this,
                    n = !0;
                return (
                    (this.nextCallback = function (r) {
                        n && ((n = !1), (t.nextCallback = null), e(r));
                    }),
                    (this.nextCallback.cancel = function () {
                        n = !1;
                    }),
                    this.nextCallback
                );
            }),
            (n.onTransitionEnd = function (e, t) {
                this.setNextCallback(t);
                var n = this.props.nodeRef ? this.props.nodeRef.current : hr.findDOMNode(this),
                    r = null == e && !this.props.addEndListener;
                if (n && !r) {
                    if (this.props.addEndListener) {
                        var o = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                            i = o[0],
                            a = o[1];
                        this.props.addEndListener(i, a);
                    }
                    null != e && setTimeout(this.nextCallback, e);
                } else setTimeout(this.nextCallback, 0);
            }),
            (n.render = function () {
                var e = this.state.status;
                if (e === UD) return null;
                var t = this.props,
                    n = t.children;
                t.in,
                    t.mountOnEnter,
                    t.unmountOnExit,
                    t.appear,
                    t.enter,
                    t.exit,
                    t.timeout,
                    t.addEndListener,
                    t.onEnter,
                    t.onEntering,
                    t.onEntered,
                    t.onExit,
                    t.onExiting,
                    t.onExited,
                    t.nodeRef;
                var r = ur(t, [
                    'children',
                    'in',
                    'mountOnEnter',
                    'unmountOnExit',
                    'appear',
                    'enter',
                    'exit',
                    'timeout',
                    'addEndListener',
                    'onEnter',
                    'onEntering',
                    'onEntered',
                    'onExit',
                    'onExiting',
                    'onExited',
                    'nodeRef',
                ]);
                return rr.createElement(
                    VD.Provider,
                    {
                        value: null,
                    },
                    'function' == typeof n ? n(e, r) : rr.cloneElement(rr.Children.only(n), r)
                );
            }),
            t
        );
    })(rr.Component);

function ZD() {}
(YD.contextType = VD),
    (YD.propTypes = {}),
    (YD.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: ZD,
        onEntering: ZD,
        onEntered: ZD,
        onExit: ZD,
        onExiting: ZD,
        onExited: ZD,
    }),
    (YD.UNMOUNTED = UD),
    (YD.EXITED = HD),
    (YD.ENTERING = qD),
    (YD.ENTERED = GD),
    (YD.EXITING = KD);
var XD = function (e, t) {
        return (
            e &&
            t &&
            t.split(' ').forEach(function (t) {
                return (
                    (r = t),
                    void ((n = e).classList
                        ? n.classList.remove(r)
                        : 'string' == typeof n.className
                          ? (n.className = ND(n.className, r))
                          : n.setAttribute('class', ND((n.className && n.className.baseVal) || '', r)))
                );
                var n, r;
            })
        );
    },
    $D = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
            return (
                ((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
                    appear: {},
                    enter: {},
                    exit: {},
                }),
                (t.onEnter = function (e, n) {
                    var r = t.resolveArguments(e, n),
                        o = r[0],
                        i = r[1];
                    t.removeClasses(o, 'exit'),
                        t.addClass(o, i ? 'appear' : 'enter', 'base'),
                        t.props.onEnter && t.props.onEnter(e, n);
                }),
                (t.onEntering = function (e, n) {
                    var r = t.resolveArguments(e, n),
                        o = r[0],
                        i = r[1] ? 'appear' : 'enter';
                    t.addClass(o, i, 'active'), t.props.onEntering && t.props.onEntering(e, n);
                }),
                (t.onEntered = function (e, n) {
                    var r = t.resolveArguments(e, n),
                        o = r[0],
                        i = r[1] ? 'appear' : 'enter';
                    t.removeClasses(o, i), t.addClass(o, i, 'done'), t.props.onEntered && t.props.onEntered(e, n);
                }),
                (t.onExit = function (e) {
                    var n = t.resolveArguments(e)[0];
                    t.removeClasses(n, 'appear'),
                        t.removeClasses(n, 'enter'),
                        t.addClass(n, 'exit', 'base'),
                        t.props.onExit && t.props.onExit(e);
                }),
                (t.onExiting = function (e) {
                    var n = t.resolveArguments(e)[0];
                    t.addClass(n, 'exit', 'active'), t.props.onExiting && t.props.onExiting(e);
                }),
                (t.onExited = function (e) {
                    var n = t.resolveArguments(e)[0];
                    t.removeClasses(n, 'exit'), t.addClass(n, 'exit', 'done'), t.props.onExited && t.props.onExited(e);
                }),
                (t.resolveArguments = function (e, n) {
                    return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
                }),
                (t.getClassNames = function (e) {
                    var n = t.props.classNames,
                        r = 'string' == typeof n,
                        o = r ? '' + (r && n ? n + '-' : '') + e : n[e];
                    return {
                        baseClassName: o,
                        activeClassName: r ? o + '-active' : n[e + 'Active'],
                        doneClassName: r ? o + '-done' : n[e + 'Done'],
                    };
                }),
                t
            );
        }
        Be(t, e);
        var n = t.prototype;
        return (
            (n.addClass = function (e, t, n) {
                var r = this.getClassNames(t)[n + 'ClassName'],
                    o = this.getClassNames('enter').doneClassName;
                'appear' === t && 'done' === n && o && (r += ' ' + o),
                    'active' === n && e && e.scrollTop,
                    r &&
                        ((this.appliedClasses[t][n] = r),
                        (function (e, t) {
                            e &&
                                t &&
                                t.split(' ').forEach(function (t) {
                                    return (
                                        (r = t),
                                        void ((n = e).classList
                                            ? n.classList.add(r)
                                            : (function (e, t) {
                                                  return e.classList
                                                      ? !!t && e.classList.contains(t)
                                                      : -1 !==
                                                            (' ' + (e.className.baseVal || e.className) + ' ').indexOf(
                                                                ' ' + t + ' '
                                                            );
                                              })(n, r) ||
                                              ('string' == typeof n.className
                                                  ? (n.className = n.className + ' ' + r)
                                                  : n.setAttribute(
                                                        'class',
                                                        ((n.className && n.className.baseVal) || '') + ' ' + r
                                                    )))
                                    );
                                    var n, r;
                                });
                        })(e, r));
            }),
            (n.removeClasses = function (e, t) {
                var n = this.appliedClasses[t],
                    r = n.base,
                    o = n.active,
                    i = n.done;
                (this.appliedClasses[t] = {}), r && XD(e, r), o && XD(e, o), i && XD(e, i);
            }),
            (n.render = function () {
                var e = this.props;
                e.classNames;
                var t = ur(e, ['classNames']);
                return rr.createElement(
                    YD,
                    ir({}, t, {
                        onEnter: this.onEnter,
                        onEntered: this.onEntered,
                        onEntering: this.onEntering,
                        onExit: this.onExit,
                        onExiting: this.onExiting,
                        onExited: this.onExited,
                    })
                );
            }),
            t
        );
    })(rr.Component);

function JD(e, t) {
    var n = Object.create(null);
    return (
        e &&
            or.Children.map(e, function (e) {
                return e;
            }).forEach(function (e) {
                n[e.key] = (function (e) {
                    return t && or.isValidElement(e) ? t(e) : e;
                })(e);
            }),
        n
    );
}

function QD(e, t, n) {
    return null != n[t] ? n[t] : e.props[t];
}

function em(e, t, n) {
    var r = JD(e.children),
        o = (function (e, t) {
            function n(n) {
                return n in t ? t[n] : e[n];
            }
            (e = e || {}), (t = t || {});
            var r,
                o = Object.create(null),
                i = [];
            for (var a in e) a in t ? i.length && ((o[a] = i), (i = [])) : i.push(a);
            var u = {};
            for (var s in t) {
                if (o[s])
                    for (r = 0; r < o[s].length; r++) {
                        var l = o[s][r];
                        u[o[s][r]] = n(l);
                    }
                u[s] = n(s);
            }
            for (r = 0; r < i.length; r++) u[i[r]] = n(i[r]);
            return u;
        })(t, r);
    return (
        Object.keys(o).forEach(function (i) {
            var a = o[i];
            if (or.isValidElement(a)) {
                var u = i in t,
                    s = i in r,
                    l = t[i],
                    c = or.isValidElement(l) && !l.props.in;
                !s || (u && !c)
                    ? s || !u || c
                        ? s &&
                          u &&
                          or.isValidElement(l) &&
                          (o[i] = or.cloneElement(a, {
                              onExited: n.bind(null, a),
                              in: l.props.in,
                              exit: QD(a, 'exit', e),
                              enter: QD(a, 'enter', e),
                          }))
                        : (o[i] = or.cloneElement(a, { in: !1 }))
                    : (o[i] = or.cloneElement(a, {
                          onExited: n.bind(null, a),
                          in: !0,
                          exit: QD(a, 'exit', e),
                          enter: QD(a, 'enter', e),
                      }));
            }
        }),
        o
    );
}
($D.defaultProps = {
    classNames: '',
}),
    ($D.propTypes = {});
var tm =
        Object.values ||
        function (e) {
            return Object.keys(e).map(function (t) {
                return e[t];
            });
        },
    nm = (function (e) {
        function t(t, n) {
            var r,
                o = (r = e.call(this, t, n) || this).handleExited.bind(ke(r));
            return (
                (r.state = {
                    contextValue: {
                        isMounting: !0,
                    },
                    handleExited: o,
                    firstRender: !0,
                }),
                r
            );
        }
        Be(t, e);
        var n = t.prototype;
        return (
            (n.componentDidMount = function () {
                (this.mounted = !0),
                    this.setState({
                        contextValue: {
                            isMounting: !1,
                        },
                    });
            }),
            (n.componentWillUnmount = function () {
                this.mounted = !1;
            }),
            (t.getDerivedStateFromProps = function (e, t) {
                var n,
                    r,
                    o = t.children,
                    i = t.handleExited;
                return {
                    children: t.firstRender
                        ? ((n = e),
                          (r = i),
                          JD(n.children, function (e) {
                              return or.cloneElement(e, {
                                  onExited: r.bind(null, e),
                                  in: !0,
                                  appear: QD(e, 'appear', n),
                                  enter: QD(e, 'enter', n),
                                  exit: QD(e, 'exit', n),
                              });
                          }))
                        : em(e, o, i),
                    firstRender: !1,
                };
            }),
            (n.handleExited = function (e, t) {
                var n = JD(this.props.children);
                e.key in n ||
                    (e.props.onExited && e.props.onExited(t),
                    this.mounted &&
                        this.setState(function (t) {
                            var n = ir({}, t.children);
                            return (
                                delete n[e.key],
                                {
                                    children: n,
                                }
                            );
                        }));
            }),
            (n.render = function () {
                var e = this.props,
                    t = e.component,
                    n = e.childFactory,
                    r = ur(e, ['component', 'childFactory']),
                    o = this.state.contextValue,
                    i = tm(this.state.children).map(n);
                return (
                    delete r.appear,
                    delete r.enter,
                    delete r.exit,
                    null === t
                        ? rr.createElement(
                              VD.Provider,
                              {
                                  value: o,
                              },
                              i
                          )
                        : rr.createElement(
                              VD.Provider,
                              {
                                  value: o,
                              },
                              rr.createElement(t, r, i)
                          )
                );
            }),
            t
        );
    })(rr.Component);
(nm.propTypes = {}),
    (nm.defaultProps = {
        component: 'div',
        childFactory: function (e) {
            return e;
        },
    }),
    Xc.bool,
    Xc.node.isRequired,
    Xc.func,
    Xc.shape(),
    Xc.bool,
    Xc.node.isRequired,
    Xc.func,
    Xc.shape(),
    Xc.node.isRequired,
    Xc.bool,
    Xc.shape();
const rm = jD('div', {
    mapPropsToStyles: e => {
        const t = {};
        return (
            e.verticalAlign &&
                ('top' === e.verticalAlign
                    ? (t.alignItems = 'flex-start')
                    : 'bottom' === e.verticalAlign
                      ? (t.alignItems = 'flex-end')
                      : (t.alignItems = e.verticalAlign)),
            e.justify &&
                (!0 === e.justify
                    ? (t.justifyContent = 'space-between')
                    : 'left' === e.justify
                      ? (t.justifyContent = 'flex-start')
                      : 'right' === e.justify
                        ? (t.justifyContent = 'flex-end')
                        : (t.justifyContent = e.justify)),
            e.reverse && (t.flexDirection = 'row-reverse'),
            t
        );
    },
    target: 'e1kv8om20',
})({
    name: '14u08z3',
    styles: 'display:flex;min-width:0',
});

function om() {
    return (
        (om = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        om.apply(null, arguments)
    );
}
Xc.bool, Xc.node.isRequired;
const im = jD(rm, {
        displayName: 'AgentBar',
        section: !0,
        target: 'e1ftalwb0',
    })({
        name: '66u5jz',
        styles: 'padding:1em',
    }),
    am = or.forwardRef((e, t) =>
        or.createElement(
            im,
            om(
                {
                    verticalAlign: 'center',
                    ref: t,
                },
                e
            )
        )
    );
var um;

function sm() {
    return (
        (sm = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        sm.apply(null, arguments)
    );
}
(am.displayName = 'AgentBar'),
    (am.propTypes = {
        children: Xc.node,
    });
const lm = e => {
        return e(
            um ||
                ((t = [
                    '\n\t&-enter {\n\t\topacity: 0;\n\t\theight: 0;\n\t}\n\n\t&-enter&-enter-active {\n\t\topacity: 1;\n\t\theight: 1.2em;\n\t\ttransition: height 200ms ease-in-out, opacity 100ms ease-in-out 100ms;\n\t}\n\n\t&-exit {\n\t\topacity: 1;\n\t\theight: 1.2em;\n\t}\n\n\t&-exit&-exit-active {\n\t\topacity: 0;\n\t\theight: 0;\n\t\ttransition: height 100ms ease-in-out 100ms, opacity 200ms ease-in-out;\n\t}\n',
                ]),
                n || (n = t.slice(0)),
                (t.raw = n),
                (um = t))
        );
        var t, n;
    },
    cm = e =>
        or.createElement(Tu, null, t => {
            let { css: n } = t;
            return or.createElement(
                $D,
                sm({}, e, {
                    classNames: lm(n),
                    timeout: 200,
                })
            );
        });
var dm;

function pm() {
    return (
        (pm = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        pm.apply(null, arguments)
    );
}
cm.propTypes = {
    children: Xc.node,
};
const Dm = 'cubic-bezier(0.14, 0, 0, 1)',
    mm = e => {
        return e(
            dm ||
                ((t = [
                    '\n\t&-enter {\n\t\topacity: 0;\n\t\ttransform: scale(1.2);\n\t}\n\n\t&-enter-active {\n\t\topacity: 1;\n\t\ttransform: scale(1);\n\t\ttransition: opacity ',
                    'ms ',
                    ', transform ',
                    'ms ',
                    ';\n\t}\n\n\t&-enter-done {\n\t\topacity: 1;\n\t\ttransform: scale(1);\n\t}\n',
                ]),
                n || (n = t.slice(0)),
                (t.raw = n),
                (dm = t)),
            200,
            Dm,
            200,
            Dm
        );
        var t, n;
    },
    fm = e =>
        or.createElement(Tu, null, t => {
            let { css: n } = t;
            return or.createElement(
                $D,
                pm({}, e, {
                    classNames: mm(n),
                    timeout: 500,
                })
            );
        });
var hm;
var gm, vm;
const Cm = Bu(
        'animation:1.5s ease-in-out 0s infinite;animation-name:',
        ku(
            hm ||
                ((gm = [
                    '\n\t0% {\n\t\topacity: 1.0;\n\t}\n\n\t50% {\n\t\topacity: 0.4;\n\t}\n\n\t100% {\n\t\topacity: 1.0;\n\t}\n',
                ]),
                vm || (vm = gm.slice(0)),
                (gm.raw = vm),
                (hm = gm))
        ),
        ';'
    ),
    bm = jD('div', {
        displayName: 'ImgOverlay',
        target: 'elhjse0',
    })(
        'width:100vw;max-width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.surfaceDecorative;
        },
        ';&>svg{width:32px;height:32px;fill:',
        e => {
            let { theme: t } = e;
            return t.colors.secondaryTextColor;
        },
        ';}'
    ),
    Em = e =>
        wu(
            bm,
            e,
            wu(
                'svg',
                {
                    viewBox: '0 0 32 32',
                    css: Cm,
                },
                wu('path', {
                    d: 'M6.1,22.1l5.3-4.8c0.4-0.3,1-0.3,1.3,0l3.2,2.8l6.5-5.8c0.4-0.3,1-0.3,1.3,0l2.3,2.1V9c0-0.6-0.4-1-1-1h-18 c-0.6,0-1,0.4-1,1L6.1,22.1C6.1,22,6.1,22,6.1,22.1z M8,23h8.1l-4.1-3.7L8,23z M19.1,23h5.9c0.6,0,1-0.4,1-1v-3l-3-2.7l-5.7,5.1 L19.1,23z M7.1,6h18c1.7,0,3,1.3,3,3v13c0,1.7-1.3,3-3,3h-18c-1.7,0-3-1.3-3-3V9C4.1,7.3,5.4,6,7.1,6z M15.1,16c-1.7,0-3-1.3-3-3 s1.3-3,3-3s3,1.3,3,3S16.8,16,15.1,16z M15.1,14c0.6,0,1-0.4,1-1s-0.4-1-1-1c-0.6,0-1,0.4-1,1S14.5,14,15.1,14z',
                })
            )
        ),
    ym = e =>
        wu(
            bm,
            e,
            wu(
                'svg',
                {
                    viewBox: '0 0 32 32',
                },
                wu('path', {
                    d: 'M3.6,5.1L3.6,5.1l24.1,21.1c0.4,0.4,0.5,1,0.1,1.4c-0.3,0.4-0.9,0.4-1.3,0.2l-0.1-0.1l-8.1-7.1l-2,1.8  l1.7,1.5h4l2.3,2l-0.1,0L24,26H6c-1.6,0-2.9-1.2-3-2.8L3,23L3,7.3L2.3,6.7c-0.4-0.4-0.5-1-0.1-1.4C2.6,4.9,3.1,4.9,3.6,5.1z   M11,20.3L6.9,24h8.1L11,20.3z M26,5c1.6,0,2.9,1.2,3,2.8L29,8v15.4l0,0l-2-1.7l0-3.7l-3-2.7l-2.2,2L20.3,16l3.1-2.8  c0.3-0.3,0.9-0.3,1.2-0.1l0.1,0.1l2.3,2.1V8c0-0.5-0.4-0.9-0.9-1L26,7H10L7.7,5l0.1,0L8,5H26z M5,9.1l0,14l5.3-4.8  c0.3-0.3,0.9-0.3,1.2-0.1l0.1,0.1l3.2,2.8l1.9-1.7L5,9.1z M20,8c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S18.3,8,20,8z M20,10  c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,10,20,10z',
                })
            )
        ),
    xm = ['children', 'src', 'srcSet', 'className', 'alt'];

function Fm() {
    return (
        (Fm = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Fm.apply(null, arguments)
    );
}
const wm = jD('img', {
        displayName: 'Img',
        target: 'e174eclu0',
    })(
        'display:',
        e => {
            let { isLoaded: t } = e;
            return t ? 'inline-block' : 'none';
        },
        ';'
    ),
    Am = e => {
        let { children: t, src: n, srcSet: r, className: o, alt: i = '' } = e,
            a = (function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var r in e)
                    if ({}.hasOwnProperty.call(e, r)) {
                        if (-1 !== t.indexOf(r)) continue;
                        n[r] = e[r];
                    }
                return n;
            })(e, xm);
        const [u, s] = or.useState('pending'),
            [l, c] = or.useState(!1),
            d = or.useRef(0),
            p = 'loaded' === u;
        let D = null;
        if (t)
            D = t({
                imageStatus: u,
                shouldAnimate: l,
            });
        else
            switch (u) {
                case 'pending':
                    D = or.createElement(Em, a);
                    break;
                case 'failed':
                    D = or.createElement(ym, a);
                    break;
                default:
                    D = null;
            }
        return (
            or.useLayoutEffect(
                () => (s('pending'), c(!1), (d.current = setTimeout(() => c(!0), 400)), () => clearTimeout(d.current)),
                [n, r]
            ),
            or.createElement(
                or.Fragment,
                null,
                or.createElement(
                    fm,
                    { in: l && p },
                    or.createElement(
                        wm,
                        Fm(
                            {
                                alt: i,
                            },
                            a,
                            {
                                src: n,
                                isLoaded: p,
                                srcSet: r,
                                className: o,
                                onLoad: () => {
                                    s('loaded'), clearTimeout(d.current);
                                },
                                onError: () => s('failed'),
                            }
                        )
                    )
                ),
                D
            )
        );
    };

function Bm(e, t) {
    if ('undefined' != typeof Intl && Intl.Segmenter)
        try {
            const n = (function (e) {
                if (null != e)
                    return 'string' == typeof e
                        ? e
                        : Array.isArray(e)
                          ? e.map(e => ('string' == typeof e ? e : String(e)))
                          : String(e);
            })(e);
            return new Intl.Segmenter(n, t);
        } catch (n) {
            return null;
        }
    return null;
}
Am.propTypes = {
    children: Xc.func,
    src: Xc.string.isRequired,
    srcSet: Xc.string,
    className: Xc.string,
};
const km = [
    '#8133cc',
    '#d75b74',
    '#328dff',
    '#23958d',
    '#9146ff',
    '#e66427',
    '#3376db',
    '#a372ff',
    '#c29b00',
    '#9e4eaa',
    '#779e47',
    '#d0810b',
    '#c474ac',
    '#7070aa',
];

function Sm(e, t) {
    void 0 === e && (e = '');
    const n = e.trim();
    if (
        !/(?:[A-Za-z\xA9\xAA\xAE\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203C\u2049\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2122\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3030-\u3035\u303B-\u303D\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3297\u3299\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD40-\uDD59\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC7\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDB0-\uDDDB\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDEA0-\uDEB8\uDEBB-\uDED3\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF2\uDFF3]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD1E\uDD80-\uDDF2]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDEC0-\uDEDE\uDEE0-\uDEE2\uDEE4\uDEE5\uDEE7-\uDEED\uDEF0-\uDEF4\uDEFE\uDEFF\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDC04\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCCF\uDCD0\uDCF6-\uDCFF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAE-\uDDFF\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDE5F\uDE66-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDCFD]|\uD83C[\uDFF7-\uDFFA]|\uD83D[\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDEE5\uDEE9\uDEEB-\uDEF0\uDEF3-\uDEFF\uDFDA-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCBC-\uDCBF\uDCC2-\uDCCF\uDCD9-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDDFF\uDE58-\uDE5F\uDE6E-\uDEFF]|\uD83F[\uDC00-\uDFFD]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79])/.test(
            n
        )
    ) {
        const e = n.match(/\d/g);
        return e ? e[0].toUpperCase() : '';
    }
    const r = n.split(/\s+/),
        o =
            /(?:[A-Za-z\xA9\xAA\xAE\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203C\u2049\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2122\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3030-\u3035\u303B-\u303D\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3297\u3299\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD40-\uDD59\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC7\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDB0-\uDDDB\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDEA0-\uDEB8\uDEBB-\uDED3\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF2\uDFF3]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD1E\uDD80-\uDDF2]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDEC0-\uDEDE\uDEE0-\uDEE2\uDEE4\uDEE5\uDEE7-\uDEED\uDEF0-\uDEF4\uDEFE\uDEFF\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDC04\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCCF\uDCD0\uDCF6-\uDCFF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAE-\uDDFF\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDE5F\uDE66-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDCFD]|\uD83C[\uDFF7-\uDFFA]|\uD83D[\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDEE5\uDEE9\uDEEB-\uDEF0\uDEF3-\uDEFF\uDFDA-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCBC-\uDCBF\uDCC2-\uDCCF\uDCD9-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDDFF\uDE58-\uDE5F\uDE6E-\uDEFF]|\uD83F[\uDC00-\uDFFD]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79])/,
        i = r.filter(e => o.test(e)),
        a = i.map(e => {
            const t = (function (e, t) {
                const { locale: n, granularity: r = 'word' } = null != t ? t : {},
                    o = Bm(n, {
                        granularity: r,
                    });
                if (o)
                    try {
                        return Array.from(o.segment(e), e => e.segment);
                    } catch (i) {}
                return Array.from(e);
            })(e, {
                granularity: 'grapheme',
            }).find(e => o.test(e));
            return null != t ? t : '';
        });
    if (i.length <= t) return a.join('').toUpperCase();
    const u = [a[0]];
    for (let s = i.length - t + 1; s < i.length; s++) u.push(a[s]);
    return u.join('').toUpperCase();
}
const Tm = ['text'];

function Lm() {
    return (
        (Lm = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Lm.apply(null, arguments)
    );
}
const Pm = yD('div', {
    displayName: 'InitialsWrapper',
    target: 'e19r4350',
})(
    'width:100%;height:100%;display:flex;align-items:center;justify-content:center;border-radius:50%;color:',
    e => {
        let { theme: t } = e;
        return t.colors.surface;
    },
    ';background-color:',
    e => {
        let { background: t } = e;
        return t;
    },
    ';font-weight:700;font-size:',
    e => {
        let { fontSize: t } = e;
        return null != t ? t : '16px';
    },
    ';color:',
    e => {
        let { background: t } = e;
        return (function (e, t, n) {
            return Se(e, n) > Se(t, n) ? e : t;
        })(Le.primaryTextColor, Te.primaryTextColor, t);
    },
    ';'
);

function Mm(e) {
    let { text: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
                if ({}.hasOwnProperty.call(e, r)) {
                    if (-1 !== t.indexOf(r)) continue;
                    n[r] = e[r];
                }
            return n;
        })(e, Tm);
    const r = rr.useMemo(() => Sm(t, 1), [t]),
        o = rr.useMemo(
            () =>
                (function (e) {
                    if (!e) return;
                    const t = e.split('').reduce((e, t) => e + t.charCodeAt(0), 0);
                    return km[t % km.length];
                })(t),
            [t]
        );
    return rr.createElement(
        Pm,
        Lm(
            {
                background: o,
            },
            n
        ),
        rr.createElement(
            'span',
            {
                'aria-hidden': !0,
            },
            r
        )
    );
}
var Om;

function Im() {
    return (
        (Im = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Im.apply(null, arguments)
    );
}
Mm.propTypes = {
    style: Xc.shape(),
    text: Xc.string,
    css: Xc.oneOfType([Xc.array, Xc.object, Xc.string]),
    fontSize: Xc.string,
};
const zm = {
        name: 'n7acn9',
        styles: 'border-radius:inherit;width:100%;height:100%;object-fit:cover',
    },
    _m = jD('div', {
        displayName: 'Avatar',
        mapPropsToStyles: e => {
            const t = {},
                n = {},
                { size: r, borderRadius: o = '50%', fontSize: i } = e;
            return (
                r && ((t.width = r), (t.height = r), (t.lineHeight = r)),
                o && ((t.borderRadius = o), (n.borderRadius = o)),
                i && (t.fontSize = i),
                Im({}, t, {
                    '& img': n,
                })
            );
        },
        target: 'eovd9vs1',
    })(
        'text-align:center;text-transform:uppercase;overflow:hidden;',
        e => (e.withBackground ? 'background-color: #fff;' : ''),
        ';'
    ),
    Rm = ku(
        Om ||
            (Om = (function (e, t) {
                return t || (t = e.slice(0)), (e.raw = t), e;
            })(['\n\t50% {\n\t\topacity: 0.0;\n\t}\n']))
    ),
    jm = jD('span', {
        target: 'eovd9vs0',
    })(
        'display:block;height:100%;width:100%;background:',
        e => {
            let { theme: t } = e;
            return t.colors.grayscale[50];
        },
        ';opacity:0.3;animation:',
        Rm,
        ' 1.5s linear 0s infinite;border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.round;
        },
        ';margin-bottom:',
        e => {
            let { theme: t } = e;
            return t.spaces.space2;
        },
        ';'
    ),
    Nm = e => {
        const { imgUrl: t, imgAlt: n = 'avatar', text: r, fontSize: o, imgProps: i = {} } = e;
        let a = null;
        return (
            (a = t
                ? wu(
                      Am,
                      Im({}, i, {
                          src: t,
                          css: zm,
                          alt: n,
                          draggable: !1,
                      }),
                      e => {
                          let { imageStatus: t, shouldAnimate: n } = e;
                          return 'pending' === t && n
                              ? wu(jm, null)
                              : 'failed' === t
                                ? wu(Mm, {
                                      css: zm,
                                      text: r,
                                      fontSize: o,
                                  })
                                : null;
                      }
                  )
                : r
                  ? wu(Mm, {
                        css: zm,
                        text: r,
                        fontSize: o,
                    })
                  : wu(jm, null)),
            wu(_m, e, a)
        );
    };
Nm.propTypes = {
    imgProps: Xc.shape(),
    imgUrl: Xc.string,
    imgAlt: Xc.string,
    text: Xc.string,
    size: Xc.string,
    style: Xc.shape(),
    fontSize: Xc.string,
    borderRadius: Xc.string,
};
const Wm = {
        name: '1oep8ze',
        styles: '&>:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit;border-bottom-right-radius:0;border-bottom-left-radius:0;}&>:last-child{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:inherit;border-bottom-left-radius:inherit;}&>:first-child:last-child{border-top-left-radius:inherit;border-top-right-radius:inherit;border-bottom-right-radius:inherit;border-bottom-left-radius:inherit;}',
    },
    Vm = jD('div', {
        displayName: 'Bubble',
        mapPropsToStyles: e => {
            const { isOwn: t, ovalBorderRadius: n, sharpBorderRadius: r, radiusType: o } = e,
                i = {
                    borderTopLeftRadius: 'single' === o || 'first' === o ? n : r,
                    borderTopRightRadius: n,
                    borderBottomRightRadius: n,
                    borderBottomLeftRadius: 'single' === o || 'last' === o ? n : r,
                };
            return t
                ? (e => {
                      let {
                          borderTopLeftRadius: t,
                          borderTopRightRadius: n,
                          borderBottomRightRadius: r,
                          borderBottomLeftRadius: o,
                      } = e;
                      return {
                          borderTopLeftRadius: n,
                          borderTopRightRadius: t,
                          borderBottomRightRadius: o,
                          borderBottomLeftRadius: r,
                      };
                  })(i)
                : i;
        },
        target: 'ed33afz0',
    })(
        Wm,
        ';border:1px solid rgba(0, 0, 0, 0.05);display:inline-block;max-width:280px;margin-bottom:0.1em;& img{max-width:100%;display:block;}'
    );
Vm.propTypes = {
    children: Xc.node,
    isOwn: Xc.bool,
    radiusType: Xc.oneOf(['single', 'first', 'last']),
};
const Um = jD('div', {
    target: 'e131382t0',
})({
    name: '1ojnsow',
    styles: 'display:flex;flex-direction:column;min-width:0',
});

function Hm() {
    return (
        (Hm = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Hm.apply(null, arguments)
    );
}
const qm = jD('div', {
        mapPropsToStyles: e => ({
            flexShrink: e.shrink ? 1 : 0,
        }),
        target: 'e1nodz7b0',
    })(''),
    Gm = e =>
        or.createElement(
            qm,
            Hm(
                {
                    flexFill: !0,
                },
                e
            )
        );

function Km() {
    return (
        (Km = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Km.apply(null, arguments)
    );
}
(Gm.defaultProps = {
    shrink: !0,
}),
    (Gm.propTypes = {
        shrink: Xc.bool,
    });
const Ym = jD('button', {
        displayName: 'IconButton',
        section: !0,
        target: 'ejbfa1m0',
    })({
        name: '1dor5y1',
        styles: 'appearance:none;background:transparent;border:0;display:inline-block;margin:0;padding:0.5em;color:inherit;cursor:pointer;&:disabled{cursor:not-allowed;}',
    }),
    Zm = or.forwardRef(function (e, t) {
        const n = el(e);
        return or.createElement(
            Ym,
            Km(
                {
                    ref: t,
                },
                n,
                e
            )
        );
    });
var Xm;

function $m() {
    return (
        ($m = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        $m.apply(null, arguments)
    );
}
(Zm.propTypes = {
    active: Xc.bool,
    disabled: Xc.bool,
    children: Xc.node.isRequired,
    color: Xc.string,
    onClick: Xc.func,
}),
    Xc.string.isRequired;
const Jm = e =>
        e(
            Xm ||
                (Xm = (function (e, t) {
                    return t || (t = e.slice(0)), (e.raw = t), e;
                })([
                    '\n\t&-enter {\n\t\topacity: 0;\n\t}\n\n\t&-enter&-enter-active {\n\t\topacity: 1;\n\t\ttransition: opacity 100ms;\n\t}\n\n\t&-exit {\n\t\topacity: 1;\n\t}\n\n\t&-exit&-exit-active {\n\t\topacity: 0;\n\t\ttransition: opacity 100ms;\n\t}\n',
                ]))
        ),
    Qm = e =>
        or.createElement(Tu, null, t => {
            let { css: n } = t;
            return or.createElement(
                $D,
                $m({}, e, {
                    classNames: Jm(n),
                    timeout: 100,
                })
            );
        });
Qm.propTypes = {
    children: Xc.node,
};
const ef = e => e.getBoundingClientRect().top + window.pageYOffset,
    tf = ['active', 'onScroll', 'preList', 'postList', 'gridRef', 'children'];

function nf() {
    return (
        (nf = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        nf.apply(null, arguments)
    );
}
const rf = 20,
    { Provider: of, Consumer: af } = or.createContext({
        registerUnseenListItem: ar,
        isScrollOnBottom: ar,
        scrollToBottom: ar,
    }),
    uf = (function (e) {
        void 0 === e && (e = 0);
        let t = e;
        return () => t++;
    })(),
    sf = jD('div', {
        displayName: 'MessageList',
        target: 'eyglfwq0',
    })('padding:', 20, 'px;overflow-y:auto;height:100%;outline-offset:-5px;'),
    lf = or.forwardRef(function (e, t) {
        let { active: n = !0, onScroll: r, preList: o = null, postList: i = null, gridRef: a, children: u } = e,
            s = (function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var r in e)
                    if ({}.hasOwnProperty.call(e, r)) {
                        if (-1 !== t.indexOf(r)) continue;
                        n[r] = e[r];
                    }
                return n;
            })(e, tf);
        const l = or.useRef(),
            c = Xd(l, t),
            { getAll: d, registerItem: p } = (() => {
                const e = or.useRef([]);
                return {
                    getAll: () => e.current,
                    registerItem: or.useCallback(t => {
                        const n = uf(),
                            r = e.current;
                        return (
                            r.push(
                                nf({}, t, {
                                    id: n,
                                })
                            ),
                            () => {
                                const e = U(e => {
                                    let { id: t } = e;
                                    return t === n;
                                }, r);
                                -1 !== e && r.splice(e, 1);
                            }
                        );
                    }, []),
                };
            })(),
            D = $d(n),
            m = $d(r),
            f = el(),
            h = or.useCallback(() => {
                d().forEach(e => {
                    var t, n;
                    ((t = l.current), (n = e.ref), ef(n) - ef(t) + n.clientHeight <= t.clientHeight) && e.onSeen();
                });
            }, [d]),
            g = or.useMemo(
                () =>
                    Pe(300, () => {
                        D.current && h();
                    }),
                [D, h]
            ),
            v = or.useCallback(
                e => {
                    g(), m.current && m.current(e);
                },
                [m, g]
            );
        or.useEffect(() => {
            n && h();
        }, [n, h]);
        const C = or.useMemo(
            () => ({
                registerUnseenListItem: p,
                isScrollOnBottom: () => {
                    return (e = l.current).scrollTop + e.clientHeight - e.scrollHeight >= -20;
                    var e;
                },
                scrollToBottom: () => {
                    var e;
                    (e = l.current).scrollTop = e.scrollHeight;
                },
            }),
            [p]
        );
        return or.createElement(
            of,
            {
                value: C,
            },
            or.createElement(
                sf,
                nf({}, f, s, {
                    ref: c,
                    onScroll: v,
                }),
                o,
                or.createElement(
                    'div',
                    {
                        role: 'grid',
                        'aria-live': 'polite',
                        'aria-relevant': 'additions',
                        ref: a,
                    },
                    u
                ),
                i
            )
        );
    });
class cf extends or.Component {
    constructor() {
        super(...arguments),
            (this._unregisterFromMessageList = ar),
            (this._registerInMessageList = (function (e) {
                let t,
                    n,
                    r = !1;
                return function () {
                    return (
                        (r && (arguments.length <= 0 ? void 0 : arguments[0]) === n) ||
                            ((r = !0), (n = arguments.length <= 0 ? void 0 : arguments[0]), (t = e(...arguments))),
                        t
                    );
                };
            })(e => t => {
                this._unregisterFromMessageList(),
                    t &&
                        (this._unregisterFromMessageList = e({
                            ref: t,
                            onSeen: this.props.onSeen,
                        }));
            }));
    }
    componentWillUnmount() {
        this._unregisterFromMessageList();
    }
    render() {
        return or.createElement(af, null, e => {
            let { registerUnseenListItem: t } = e;
            return or.createElement(
                'div',
                {
                    ref: this.props.seen ? null : this._registerInMessageList(t),
                    role: 'row',
                },
                or.Children.only(this.props.children)
            );
        });
    }
}
(cf.propTypes = {
    children: Xc.node.isRequired,
    onSeen: Xc.func,
}),
    (cf.defaultProps = {
        onSeen: ar,
    });
const df = ['horizontalAlign', 'increasedAvatarPadding'],
    pf = [
        'children',
        'authorName',
        'deliveryStatus',
        'isOwn',
        'date',
        'messageMetadataPosition',
        'onSeen',
        'seen',
        'enforceDeliveryStatusDisplay',
        'onClick',
        'onKeyUp',
        'isSelected',
        'isFirstInGroup',
        'withoutBackground',
    ];

function Df() {
    return (
        (Df = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Df.apply(null, arguments)
    );
}

function mf(e, t) {
    if (null == e) return {};
    var n = {};
    for (var r in e)
        if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r];
        }
    return n;
}
const ff = jD('div', {
        displayName: 'Message',
        mapPropsToStyles: e => {
            let { horizontalAlign: t, increasedAvatarPadding: n } = e,
                r = mf(e, df);
            return Df(
                {},
                t && {
                    flexDirection: 'left' === t ? 'row' : 'row-reverse',
                },
                n &&
                    'smooth' === r.theme.name && {
                        paddingLeft: 'calc(' + r.theme.Avatar.size + ' + 0.2em)',
                    }
            );
        },
        section: !0,
        target: 'e10kpz9x6',
    })({
        name: '1rjamkv',
        styles: 'align-items:flex-start;font-size:0.9em;margin-bottom:0.3em;margin-top:0;max-width:100%;line-height:1.25em',
    }),
    hf = jD('span', {
        displayName: 'AuthorName',
        target: 'e10kpz9x5',
    })({
        name: '1rawn5e',
        styles: 'font-size:0.8em',
    }),
    gf = jD('span', {
        displayName: 'Time',
        target: 'e10kpz9x4',
    })({
        name: '1rawn5e',
        styles: 'font-size:0.8em',
    }),
    vf = jD('div', {
        displayName: 'MessageMeta',
        target: 'e10kpz9x3',
    })({
        name: 'v86cdg',
        styles: 'text-align:left;margin-bottom:0.1em',
    }),
    Cf = jD('div', {
        displayName: 'NewMessageMeta',
        target: 'e10kpz9x2',
    })(
        'max-width:280px;display:flex;align-items:center;padding:2px;border:1px solid ',
        e => {
            let { theme: t } = e;
            return t.colors.divider;
        },
        ';background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.surface;
        },
        ';color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.md;
        },
        ';position:relative;bottom:',
        e => {
            let { theme: t, withoutBackground: n } = e;
            return n ? t.spaces.space7 : t.spaces.space4;
        },
        ';right:',
        e => {
            let { isOwn: t } = e;
            return t ? '-' : '';
        },
        e => {
            let { theme: t } = e;
            return t.spaces.space2;
        },
        ';z-index:1;'
    ),
    bf = jD('div', {
        displayName: 'Content',
        target: 'e10kpz9x1',
    })({
        name: '65ztgt',
        styles: 'display:flex;flex-direction:column;overflow:visible;align-items:flex-start',
    }),
    Ef = jD('div', {
        displayName: 'Status',
        target: 'e10kpz9x0',
    })({
        name: '5m4wg',
        styles: 'text-align:right;font-size:0.8em',
    }),
    yf = {
        name: 'oldbq4',
        styles: 'user-select:none',
    };
var xf = {
    name: 'a4hmbt',
    styles: 'position:absolute',
};
const Ff = or.forwardRef(function (e, t) {
    let {
            children: n,
            authorName: r,
            deliveryStatus: o = '',
            isOwn: i,
            date: a,
            messageMetadataPosition: u,
            onSeen: s,
            seen: l,
            enforceDeliveryStatusDisplay: c,
            onClick: d = ar,
            onKeyUp: p = ar,
            isSelected: D,
            isFirstInGroup: m,
            withoutBackground: f = !1,
        } = e,
        h = mf(e, pf);
    const g = el(),
        [v, C] = dD(!1);
    return wu(
        cf,
        {
            onSeen: s,
            seen: l,
        },
        wu(
            ff,
            Df(
                {
                    ref: t,
                },
                h,
                {
                    onKeyUp: e => {
                        p(e), 'above' !== u || ('Enter' !== e.key && ' ' !== e.key) || C();
                    },
                    onClick: e => {
                        d(e), 'above' === u && C();
                    },
                    own: i,
                    tabIndex: null,
                }
            ),
            wu(
                bf,
                Df(
                    {
                        role: 'gridcell',
                    },
                    g
                ),
                'above' === u
                    ? wu(
                          nm,
                          null,
                          (m || v) && wu(cm, null, wu(vf, null, r && wu(hf, null, r, ' '), a && wu(gf, null, a)))
                      )
                    : wu(
                          nm,
                          {
                              css: xf,
                          },
                          D &&
                              wu(
                                  Qm,
                                  null,
                                  wu(
                                      Cf,
                                      {
                                          isOwn: i,
                                          withoutBackground: f,
                                      },
                                      !i &&
                                          r &&
                                          wu(
                                              hf,
                                              {
                                                  ellipsis: !0,
                                              },
                                              r,
                                              ' '
                                          ),
                                      a && wu(gf, null, a)
                                  )
                              )
                      ),
                n,
                o
                    ? wu(Ef, null, o)
                    : c
                      ? wu(
                            Ef,
                            {
                                css: yf,
                            },
                            ' '
                        )
                      : null
            )
        )
    );
});
(Ff.propTypes = {
    authorName: Xc.oneOfType([Xc.string, Xc.node]),
    authorOpen: Xc.bool,
    children: Xc.node,
    date: Xc.string,
    deliveryStatus: Xc.string,
    enforceDeliveryStatusDisplay: Xc.bool,
    isOwn: Xc.bool,
    onClick: Xc.func,
    onSeen: Xc.func,
    style: Xc.shape(),
    messageMetadataPosition: Xc.oneOf(['above', 'within']),
    seen: Xc.bool,
    isFirstInGroup: Xc.bool,
    withoutBackground: Xc.bool,
}),
    (Ff.defaultProps = {
        onClick: ar,
        seen: !1,
    });
const wf = jD('div', {
    displayName: 'SubTitle',
    target: 'ex074sh0',
})('');
wf.defaultProps = {
    textWrap: !0,
};
const Af = jD('div', {
    displayName: 'Title',
    target: 'e2ydd6j0',
})({
    name: 'mmvz9h',
    styles: 'font-weight:400',
});
Af.defaultProps = {
    textWrap: !0,
};
const Bf = ['children', 'title', 'subtitle'];
gr(console.warn.bind(console));
const kf = jD('div', {
        displayName: 'MessageTitle',
        target: 'elx7a8b0',
    })({
        name: '1kj42yy',
        styles: 'font-weight:600;padding:1em',
    }),
    Sf = {
        name: '11rcwxl',
        styles: 'margin-bottom:4px',
    },
    Tf = e => {
        let { children: t, title: n, subtitle: r } = e,
            o = (function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var r in e)
                    if ({}.hasOwnProperty.call(e, r)) {
                        if (-1 !== t.indexOf(r)) continue;
                        n[r] = e[r];
                    }
                return n;
            })(e, Bf);
        const i = t || [
            n &&
                wu(
                    Af,
                    {
                        key: 'title',
                        preserveLines: !0,
                        css: Sf,
                    },
                    n
                ),
            r &&
                wu(
                    wf,
                    {
                        key: 'subtitle',
                        preserveLines: !0,
                    },
                    r
                ),
        ];
        return wu(kf, o, i);
    };
Tf.propTypes = {
    children: Xc.oneOfType([Xc.arrayOf(Xc.node), Xc.node]),
    subtitle: Xc.string,
    title: Xc.string,
};
const Lf = jD('div', {
        displayName: 'MessageText',
        target: 'e12hl5pq0',
    })({
        name: 'xao44',
        styles: 'white-space:pre-line;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%;padding:12px 18px 14px',
    }),
    Pf = 'rgba(0, 0, 0, 0.1)',
    Mf = '1px solid ' + Pf,
    Of = jD('div', {
        displayName: 'MessageButtons',
        target: 'esivob70',
    })(
        Wm,
        ';&>:first-child{border-top:',
        Mf,
        ';}&:first-child>:first-child{border-top:0;}&>:last-child{border-bottom:',
        Mf,
        ';}&:last-child>:last-child{border-bottom:0;}>*{border-color:',
        Pf,
        '!important;}'
    );

function If(e) {
    if ('virtual' === Qs()) {
        let t = document.activeElement;
        vs(() => {
            document.activeElement === t && document.contains(e) && Ds(e);
        });
    } else Ds(e);
}

function zf(e, t) {
    return (
        '#comment' !== e.nodeName &&
        (function (e) {
            if (
                !(
                    e instanceof e.ownerDocument.defaultView.HTMLElement ||
                    e instanceof e.ownerDocument.defaultView.SVGElement
                )
            )
                return !1;
            let { display: t, visibility: n } = e.style,
                r = 'none' !== t && 'hidden' !== n && 'collapse' !== n;
            if (r) {
                const { getComputedStyle: t } = e.ownerDocument.defaultView;
                let { display: n, visibility: o } = t(e);
                r = 'none' !== n && 'hidden' !== o && 'collapse' !== o;
            }
            return r;
        })(e) &&
        (function (e, t) {
            return (
                !e.hasAttribute('hidden') &&
                ('DETAILS' !== e.nodeName || !t || 'SUMMARY' === t.nodeName || e.hasAttribute('open'))
            );
        })(e, t) &&
        (!e.parentElement || zf(e.parentElement, e))
    );
}
const _f = rr.createContext(null);
let Rf = null,
    jf = new Set();

function Nf(e) {
    let { children: t, contain: n, restoreFocus: r, autoFocus: o } = e,
        i = or.useRef(),
        a = or.useRef(),
        u = or.useRef([]);
    const { document: s } = rs();
    Qu(() => {
        let e = i.current.nextSibling,
            t = [];
        for (; e && e !== a.current; ) t.push(e), (e = e.nextSibling);
        return (
            (u.current = t),
            jf.add(u),
            () => {
                jf.delete(u);
            }
        );
    }, [t]),
        (function (e, t) {
            let n = or.useRef(),
                r = or.useRef(null);
            const { document: o } = rs();
            or.useEffect(() => {
                let i = e.current;
                if (!t) return;
                let a = e => {
                        if ('Tab' !== e.key || e.altKey || e.ctrlKey || e.metaKey) return;
                        let t = o.activeElement;
                        if (!Gf(t, i)) return;
                        let n = Zf(
                            Hf(i),
                            {
                                tabbable: !0,
                            },
                            i,
                            o
                        );
                        n.currentNode = t;
                        let r = e.shiftKey ? n.previousNode() : n.nextNode();
                        r ||
                            ((n.currentNode = e.shiftKey
                                ? i[i.length - 1].nextElementSibling
                                : i[0].previousElementSibling),
                            (r = e.shiftKey ? n.previousNode() : n.nextNode())),
                            e.preventDefault(),
                            r && Kf(r, !0);
                    },
                    u = t => {
                        qf(t.target, jf)
                            ? ((Rf = e), (n.current = t.target))
                            : n.current
                              ? n.current.focus()
                              : Rf && Yf(Rf.current);
                    },
                    s = t => {
                        r.current = requestAnimationFrame(() => {
                            qf(o.activeElement, jf) || ((Rf = e), (n.current = t.target), n.current.focus());
                        });
                    };
                return (
                    o.addEventListener('keydown', a, !1),
                    o.addEventListener('focusin', u, !1),
                    i.forEach(e => e.addEventListener('focusin', u, !1)),
                    i.forEach(e => e.addEventListener('focusout', s, !1)),
                    () => {
                        o.removeEventListener('keydown', a, !1),
                            o.removeEventListener('focusin', u, !1),
                            i.forEach(e => e.removeEventListener('focusin', u, !1)),
                            i.forEach(e => e.removeEventListener('focusout', s, !1));
                    }
                );
            }, [e, t]),
                or.useEffect(() => () => cancelAnimationFrame(r.current), [r]);
        })(u, n),
        (function (e, t, n) {
            const { document: r } = rs();
            Qu(() => {
                let o = e.current,
                    i = r.activeElement,
                    a = e => {
                        if ('Tab' !== e.key || e.altKey || e.ctrlKey || e.metaKey) return;
                        let t = r.activeElement;
                        if (!Gf(t, o)) return;
                        let n = Zf(
                            r.body,
                            {
                                tabbable: !0,
                            },
                            void 0,
                            r
                        );
                        n.currentNode = t;
                        let a = e.shiftKey ? n.previousNode() : n.nextNode();
                        if (((r.body.contains(i) && i !== r.body) || (i = null), (!a || !Gf(a, o)) && i)) {
                            n.currentNode = i;
                            do {
                                a = e.shiftKey ? n.previousNode() : n.nextNode();
                            } while (Gf(a, o));
                            e.preventDefault(), e.stopPropagation(), a ? Kf(a, !0) : t.blur();
                        }
                    };
                return (
                    n || r.addEventListener('keydown', a, !0),
                    () => {
                        n || r.removeEventListener('keydown', a, !0),
                            t &&
                                i &&
                                Gf(r.activeElement, o) &&
                                requestAnimationFrame(() => {
                                    r.body.contains(i) && Kf(i);
                                });
                    }
                );
            }, [e, t, n]);
        })(u, r, n),
        (function (e, t) {
            const { document: n } = rs();
            or.useEffect(() => {
                t && ((Rf = e), Gf(n.activeElement, Rf.current) || Yf(e.current, n));
            }, [e, t]);
        })(u, o);
    let l = (function (e, t = document) {
        const n = t;
        return {
            focusNext(t) {
                void 0 === t && (t = {});
                let r = e.current,
                    { from: o, tabbable: i, wrap: a } = t,
                    u = o || n.activeElement,
                    s = r[0].previousElementSibling,
                    l = Zf(
                        Hf(r),
                        {
                            tabbable: i,
                        },
                        r,
                        n
                    );
                l.currentNode = Gf(u, r) ? u : s;
                let c = l.nextNode();
                return !c && a && ((l.currentNode = s), (c = l.nextNode())), c && Kf(c, !0), c;
            },
            focusPrevious(t) {
                void 0 === t && (t = {});
                let r = e.current,
                    { from: o, tabbable: i, wrap: a } = t,
                    u = o || n.activeElement,
                    s = r[r.length - 1].nextElementSibling,
                    l = Zf(
                        Hf(r),
                        {
                            tabbable: i,
                        },
                        r,
                        n
                    );
                l.currentNode = Gf(u, r) ? u : s;
                let c = l.previousNode();
                return !c && a && ((l.currentNode = s), (c = l.previousNode())), c && Kf(c, !0), c;
            },
        };
    })(u, s);
    return rr.createElement(
        _f.Provider,
        {
            value: l,
        },
        rr.createElement('span', {
            hidden: !0,
            ref: i,
        }),
        t,
        rr.createElement('span', {
            hidden: !0,
            ref: a,
        })
    );
}
const Wf = [
        'input:not([disabled]):not([type=hidden])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        'button:not([disabled])',
        'a[href]',
        'area[href]',
        'summary',
        'iframe',
        'object',
        'embed',
        'audio[controls]',
        'video[controls]',
        '[contenteditable]',
    ],
    Vf = Wf.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
Wf.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const Uf = Wf.join(':not([hidden]):not([tabindex="-1"]),');

function Hf(e) {
    return e[0].parentElement;
}

function qf(e, t) {
    for (let n of t.values()) if (Gf(e, n.current)) return !0;
    return !1;
}

function Gf(e, t) {
    return t.some(t => t.contains(e));
}

function Kf(e, t) {
    if ((void 0 === t && (t = !1), null == e || t)) {
        if (null != e)
            try {
                e.focus();
            } catch (n) {}
    } else
        try {
            If(e);
        } catch (n) {}
}

function Yf(e, t = document) {
    let n = e[0].previousElementSibling,
        r = Zf(
            Hf(e),
            {
                tabbable: !0,
            },
            e,
            t
        );
    (r.currentNode = n), Kf(r.nextNode());
}

function Zf(e, t, n, r = document) {
    const o = r;
    let i = null != t && t.tabbable ? Uf : Vf,
        a = o.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
                var r;
                return null != t && null != (r = t.from) && r.contains(e)
                    ? NodeFilter.FILTER_REJECT
                    : e.matches(i) && zf(e) && (!n || Gf(e, n))
                      ? NodeFilter.FILTER_ACCEPT
                      : NodeFilter.FILTER_SKIP;
            },
        });
    return null != t && t.from && (a.currentNode = t.from), a;
}

function Xf(e) {
    void 0 === e && (e = {});
    let { autoFocus: t = !1, isTextInput: n, within: r } = e,
        o = or.useRef({
            isFocused: !1,
            isFocusVisible: t || Js(),
        }).current,
        [i, a] = or.useState(() => o.isFocused && o.isFocusVisible),
        u = () => a(o.isFocused && o.isFocusVisible),
        s = e => {
            (o.isFocused = e), u();
        };
    tl(
        e => {
            (o.isFocusVisible = e), u();
        },
        [],
        {
            isTextInput: n,
        }
    );
    let { focusProps: l } = Ns({
            isDisabled: r,
            onFocusChange: s,
        }),
        { focusWithinProps: c } = nl({
            isDisabled: !r,
            onFocusWithinChange: s,
        });
    return {
        isFocused: o.isFocused,
        isFocusVisible: o.isFocused && i,
        focusProps: r ? c : l,
    };
}
let $f = rr.createContext(null);

function Jf(e, t) {
    let { children: n } = e,
        r = ur(e, ['children']),
        o = ir({}, r, {
            ref: t,
        });
    return rr.createElement(
        $f.Provider,
        {
            value: o,
        },
        n
    );
}
let Qf = rr.forwardRef(Jf);

function eh(e, t) {
    let { focusProps: n } = Ns(e),
        { keyboardProps: r } = (function (e) {
            return {
                keyboardProps: e.isDisabled
                    ? {}
                    : {
                          onKeyDown: ll(e.onKeyDown),
                          onKeyUp: ll(e.onKeyUp),
                      },
            };
        })(e),
        o = ss(n, r),
        i = (function (e) {
            let t = or.useContext($f) || {};
            return bs(t, e), t;
        })(t),
        a = e.isDisabled ? {} : i;
    return (
        or.useEffect(() => {
            e.autoFocus && t.current && t.current.focus();
        }, [e.autoFocus, t]),
        {
            focusableProps: ss(
                ir({}, o, {
                    tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0,
                }),
                a
            ),
        }
    );
}

function th(e, t) {
    let n,
        {
            elementType: r = 'button',
            isDisabled: o,
            onPress: i,
            onPressStart: a,
            onPressEnd: u,
            onPressChange: s,
            preventFocusOnPress: l,
            onClick: c,
            href: d,
            target: p,
            rel: D,
            type: m = 'button',
        } = e;
    n =
        'button' === r
            ? {
                  type: m,
                  disabled: o,
              }
            : {
                  role: 'button',
                  tabIndex: o ? void 0 : 0,
                  href: 'a' === r && o ? void 0 : d,
                  target: 'a' === r ? p : void 0,
                  type: 'input' === r ? m : void 0,
                  disabled: 'input' === r ? o : void 0,
                  'aria-disabled': o && 'input' !== r ? o : void 0,
                  rel: 'a' === r ? D : void 0,
              };
    let { pressProps: f, isPressed: h } = Ps({
            onPressStart: a,
            onPressEnd: u,
            onPressChange: s,
            onPress: i,
            isDisabled: o,
            preventFocusOnPress: l,
            ref: t,
        }),
        { focusableProps: g } = eh(e, t),
        v = ss(g, f);
    return (
        (v = ss(
            v,
            ps(e, {
                labelable: !0,
            })
        )),
        {
            isPressed: h,
            buttonProps: ss(n, v, {
                'aria-haspopup': e['aria-haspopup'],
                'aria-expanded': e['aria-expanded'],
                'aria-controls': e['aria-controls'],
                'aria-pressed': e['aria-pressed'],
                onClick: e => {
                    c && (c(e), console.warn('onClick is deprecated, please use onPress'));
                },
            }),
        }
    );
}
const nh = ['href'],
    rh = ['label', 'onPress', 'disabled'];

function oh() {
    return (
        (oh = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        oh.apply(null, arguments)
    );
}

function ih(e, t) {
    if (null == e) return {};
    var n = {};
    for (var r in e)
        if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r];
        }
    return n;
}
const ah = Me(0.2),
    uh = jD(
        or.forwardRef(function (e, t) {
            let { href: n } = e,
                r = ih(e, nh);
            return n
                ? or.createElement(
                      'a',
                      oh(
                          {
                              href: n,
                              rel: 'nofollow noopener',
                          },
                          r,
                          {
                              ref: t,
                          }
                      )
                  )
                : or.createElement(
                      'button',
                      oh({}, r, {
                          ref: t,
                      })
                  );
        }),
        {
            displayName: 'Button',
            mapPropsToStyles: e => {
                const t = e.primary ? e.theme.vars['--primary-color'] : 'black',
                    n = ah(t);
                return {
                    borderColor: t,
                    color: t,
                    '&:hover': {
                        color: n,
                        borderColor: n,
                    },
                };
            },
            shouldForwardProp: gD,
            target: 'e898cdi0',
        }
    )({
        name: '1x6954b',
        styles: 'border-width:1px;border-style:solid;background-color:#fff;font-size:1em;font-family:inherit;line-height:1.4em;text-align:center;text-decoration:none;appearance:none;padding:0.8em;transition:box-shadow 0.1s,color 0.1s,border-color 0.2s;&:hover{cursor:pointer;}&:active{box-shadow:none;outline:none;}&[disabled]{pointer-events:none;}',
    }),
    sh = e => {
        let { label: t, onPress: n, disabled: r } = e,
            o = ih(e, rh);
        const i = el(),
            a = or.useRef(),
            { buttonProps: u } = th(
                oh(
                    {
                        onPress: n,
                        isDisabled: r,
                    },
                    o
                ),
                a
            );
        return or.createElement(
            uh,
            ss(i, u, o, {
                ref: a,
            }),
            t
        );
    };

function lh() {
    return (
        (lh = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        lh.apply(null, arguments)
    );
}
sh.propTypes = {
    label: Xc.oneOfType([Xc.string, Xc.node]),
};
const ch = jD(sh, {
    target: 'es0r3nd0',
})(
    'display:inline-block;width:100%;border-left:0;border-right:0;border-top:0;border-bottom-color:rgba(0, 0, 0, 0.1);box-shadow:none;transition:background-color 0.1s;background:transparent;color:',
    e => (e.disabled ? '#8D9BA9' : 'inherit'),
    ';margin:0;&:hover{border-bottom-color:rgba(0, 0, 0, 0.15);background:rgba(0, 0, 0, 0.02);color:inherit;}&:active{background:rgba(0, 0, 0, 0.04);color:inherit;}'
);
class dh extends or.Component {
    constructor() {
        super(...arguments),
            (this.handleClick = e => {
                e.stopPropagation(), this.props.onClick(e);
            });
    }
    render() {
        return or.createElement(
            ch,
            lh({}, this.props, {
                onClick: this.handleClick,
            })
        );
    }
}
(dh.propTypes = {
    className: Xc.string,
    label: Xc.string,
    onClick: Xc.func,
    primary: Xc.bool,
    value: Xc.oneOfType([Xc.string, Xc.number]),
}),
    (dh.defaultProps = {
        onClick: ar,
    });
const ph = e => or.Children.toArray(e).filter(Boolean),
    Dh = ['avatar', 'avatarLetter', 'avatarAlt', 'children', 'onlyFirstWithMeta', 'withoutBackground'];

function mh() {
    return (
        (mh = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        mh.apply(null, arguments)
    );
}
const fh = {
        radiusType: 'single',
    },
    hh = {
        radiusType: 'first',
    },
    gh = {
        radiusType: 'last',
    },
    vh = {
        authorName: null,
        date: null,
    },
    Ch = jD('div', {
        displayName: 'MessageGroup',
        mapPropsToStyles: e =>
            e.isOwn
                ? {
                      flexDirection: 'row-reverse',
                  }
                : null,
        target: 'e7t81ts1',
    })(
        'display:flex;margin-bottom:1em;margin-top:',
        e => {
            let { withoutBackground: t } = e;
            return t ? '1em' : '0';
        },
        ';'
    ),
    bh = jD('div', {
        target: 'e7t81ts0',
    })(
        'display:flex;flex-direction:column;align-items:center;text-align:center;font-size:0.7em;line-height:1.6em;',
        e => {
            const t = e.theme.isRtl ? '0 8px 0 0' : '0 0 0 8px',
                n = e.theme.isRtl ? '0 0 0 8px' : '0 8px 0 0',
                r = e.isOwn ? t : n;
            return {
                minWidth: e.theme.Avatar.size,
                margin: r,
            };
        },
        ';'
    ),
    Eh = Bu(''),
    yh = e => {
        let {
                avatar: t,
                avatarLetter: n,
                avatarAlt: r = "Agent's avatar",
                children: o,
                onlyFirstWithMeta: i,
                withoutBackground: a = !1,
            } = e,
            u = (function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var r in e)
                    if ({}.hasOwnProperty.call(e, r)) {
                        if (-1 !== t.indexOf(r)) continue;
                        n[r] = e[r];
                    }
                return n;
            })(e, Dh);
        const s = ph(o),
            l = or.Children.count(s);
        return wu(
            Ch,
            mh({}, u, {
                withoutBackground: a,
            }),
            (t || n) &&
                wu(
                    bh,
                    {
                        flexFit: !0,
                        isOwn: u.isOwn,
                    },
                    wu(Nm, {
                        imgUrl: t,
                        imgAlt: r,
                        text: n,
                        fontSize: '10px',
                    })
                ),
            wu(
                Gm,
                {
                    css: Eh,
                },
                or.Children.map(s, (e, t) => {
                    if (1 === l) return or.cloneElement(e, fh);
                    if (0 === t) return or.cloneElement(e, hh);
                    const n = i && t > 0;
                    return t === l - 1 ? or.cloneElement(e, n ? mh({}, gh, vh) : gh) : n ? or.cloneElement(e, vh) : e;
                })
            )
        );
    };
yh.propTypes = {
    avatar: Xc.string,
    avatarLetter: Xc.string,
    avatarAlt: Xc.string,
    children: Xc.node,
    isOwn: Xc.bool,
    onlyFirstWithMeta: Xc.bool,
    withoutBackground: Xc.bool,
};
const xh = '#fff',
    Fh = {
        vars: {
            'primary-color': '#427fe1',
            'secondary-color': '#fbfbfb',
            'tertiary-color': xh,
        },
        AgentBar: {
            Avatar: {
                size: '42px',
            },
            css: {
                backgroundColor: 'var(--secondary-color)',
            },
        },
        Avatar: {
            size: '30px',
        },
        Bubble: {
            sharpBorderRadius: '0.3em',
            ovalBorderRadius: '1.4em',
            css: {
                backgroundColor: {
                    default: 'var(--secondary-color)',
                    bot: 'green',
                },
            },
        },
        Button: {},
        ChatListItem: {
            Avatar: {
                css: {
                    marginRight: '.5em',
                },
            },
        },
        FixedWrapperMaximized: {
            animationDuration: 100,
            width: '400px',
            height: '500px',
        },
        FixedWrapperMinimized: {
            animationDuration: 100,
        },
        FixedWrapperRoot: {
            position: 'right',
            css: {},
        },
        Message: {
            secondaryTextColor: '#000',
            horizontalAlign: 'left',
            own: {
                horizontalAlign: 'right',
                Bubble: {
                    css: {
                        backgroundColor: 'var(--primary-color)',
                        color: xh,
                    },
                },
                Content: {
                    css: {
                        alignItems: 'flex-end',
                    },
                },
                MessageMeta: {
                    css: {
                        textAlign: 'right',
                    },
                },
                Time: {
                    css: {
                        textAlign: 'right',
                    },
                },
            },
            bot: {
                Bubble: {
                    css: {
                        backgroundColor: 'green',
                    },
                },
            },
        },
        MessageButtons: {},
        MessageGroup: {},
        MessageList: {
            css: {
                backgroundColor: 'var(--tertiary-color)',
            },
        },
        MessageMedia: {},
        MessageText: {},
        MessageTitle: {},
        QuickReply: {
            css: {
                backgroundColor: '#fff',
            },
        },
        TextComposer: {
            inputColor: '#000',
            Icon: {
                color: '#aaa',
            },
            IconButton: {
                active: {
                    Icon: {
                        color: 'var(--primary-color)',
                    },
                },
            },
        },
        TitleBar: {
            iconsColor: '#fff',
            behaviour: 'default',
            css: {
                backgroundColor: 'var(--primary-color)',
            },
        },
    };

function wh() {
    return (
        (wh = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        wh.apply(null, arguments)
    );
}
const Ah = e => {
        const t = BD(e);
        return 0 === Object.keys(t).length
            ? wh({}, e, {
                  vars: Oe(e => '--' + e, e.vars || {}),
              })
            : wh(
                  {},
                  e,
                  n(
                      e =>
                          wh({}, Ah(e), {
                              css: e.css || {},
                          }),
                      t
                  ),
                  {
                      vars: Oe(e => '--' + e, e.vars || {}),
                  }
              );
    },
    Bh = e => {
        let { theme: t = {}, children: n } = e;
        const r = Ah(o(Fh, t));
        return or.createElement(
            OD,
            {
                value: r,
            },
            n
        );
    },
    kh = ['value', 'onSelect', 'onClick'];

function Sh() {
    return (
        (Sh = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Sh.apply(null, arguments)
    );
}
const Th = jD('button', {
        displayName: 'QuickReply',
        target: 'esv18m00',
    })({
        name: 'cdfzur',
        styles: 'border-width:1px;border-style:solid;font-size:1em;line-height:1em;appearance:none;transition:box-shadow 0.1s,color 0.1s,border-color 0.2s;margin:0.25em;background-color:#fff;border-radius:1.4em;font-weight:400;overflow:hidden;padding:0.375em 1em 0.5em;word-break:break-word;&:hover{cursor:pointer;}&:active{outline:none;}',
    }),
    Lh = e => {
        const { value: t, onSelect: n = ar, onClick: r = ar } = e,
            o = (function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var r in e)
                    if ({}.hasOwnProperty.call(e, r)) {
                        if (-1 !== t.indexOf(r)) continue;
                        n[r] = e[r];
                    }
                return n;
            })(e, kh),
            i = el(),
            a = or.useCallback(
                e => {
                    n(t), r(e);
                },
                [r, n, t]
            );
        return or.createElement(
            Th,
            Sh(
                {
                    value: t,
                },
                o,
                i,
                Uu({
                    onClick: a,
                })
            )
        );
    },
    Ph = ['children', 'replies', 'onSelect', 'centered'];

function Mh() {
    return (
        (Mh = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Mh.apply(null, arguments)
    );
}
gr(console.warn.bind(console));
const Oh = jD('div', {
    displayName: 'QuickReplies',
    target: 'eul24n40',
})(
    'display:flex;flex-wrap:wrap;text-align:center;justify-content:',
    e => {
        let { centered: t } = e;
        return t ? 'center' : 'flex-start';
    },
    ';width:100%;'
);
let Ih = class extends or.Component {
    constructor() {
        super(...arguments), (this._handleSelect = e => this.props.onSelect(e));
    }
    render() {
        const e = this.props,
            { children: t, replies: n, centered: r = !0 } = e,
            o = (function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var r in e)
                    if ({}.hasOwnProperty.call(e, r)) {
                        if (-1 !== t.indexOf(r)) continue;
                        n[r] = e[r];
                    }
                return n;
            })(e, Ph),
            i = t
                ? ph(t)
                : n.map((e, t) =>
                      or.createElement(
                          Lh,
                          {
                              key: t,
                              value: e,
                          },
                          e
                      )
                  );
        return or.createElement(
            Oh,
            Mh({}, o, {
                role: 'group',
                centered: r,
            }),
            or.Children.map(i, e =>
                or.cloneElement(e, {
                    onSelect: this._handleSelect,
                })
            )
        );
    }
};
(Ih.defaultProps = {
    onSelect: ar,
}),
    (Ih.propTypes = {
        children: Xc.node,
        onSelect: Xc.func,
        replies: Xc.arrayOf(Xc.string),
        centered: Xc.bool,
    });
const zh = ['leftIcons', 'rightIcons', 'title'];

function _h() {
    return (
        (_h = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        _h.apply(null, arguments)
    );
}
const Rh = jD('div', {
        displayName: 'TitleBar',
        section: !0,
        target: 'emevikl1',
    })({
        name: '1rw1ajx',
        styles: 'display:flex;justify-content:center;align-items:center;width:100%;border:#000;color:#fff;position:relative;z-index:2;text-align:center;padding:0.4em',
    }),
    jh = jD('div', {
        displayName: 'TitleBarTitle',
        target: 'emevikl0',
    })(
        'width:100%;margin:0;margin-left:',
        e => {
            let { isIconProvided: t } = e;
            return !t && '32px';
        },
        ';padding:0 2px;text-align:center;font-size:0.9em;flex-grow:1;'
    ),
    Nh = or.forwardRef((e, t) => {
        let { leftIcons: n, rightIcons: r, title: o } = e,
            i = (function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var r in e)
                    if ({}.hasOwnProperty.call(e, r)) {
                        if (-1 !== t.indexOf(r)) continue;
                        n[r] = e[r];
                    }
                return n;
            })(e, zh);
        const [a] = n;
        return or.createElement(
            Rh,
            _h({}, i, {
                ref: t,
            }),
            n,
            or.createElement(
                jh,
                {
                    ellipsis: !0,
                    isIconProvided: a,
                },
                o
            ),
            r
        );
    });
(Nh.displayName = 'TitleBar'),
    (Nh.propTypes = {
        leftIcons: Xc.arrayOf(Xc.node),
        rightIcons: Xc.arrayOf(Xc.node),
        theme: Xc.shape(),
        title: Xc.node,
    });
const Wh = e => 13 === e.which,
    Vh = [
        'active',
        'children',
        'defaultValue',
        'onButtonClick',
        'onChange',
        'onKeyDown',
        'onSend',
        'onValueChange',
        'onBeforeSend',
        'value',
    ];
const Uh = or.createContext(),
    Hh = () => or.useContext(Uh),
    qh = jD('div', {
        displayName: 'TextComposer',
        section: !0,
        target: 'e1016sln0',
    })(
        'padding:0;margin:0 15px;border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.xl;
        },
        ';'
    );
class Gh extends or.Component {
    constructor() {
        super(...arguments),
            (this.state = {
                value: this._getValue({
                    value: this.props.defaultValue,
                }),
            }),
            (this._handleButtonClick = e => {
                this.maybeSend() && this.props.onButtonClick(e);
            }),
            (this._handleChange = e => {
                const { value: t } = e.target;
                this._isControlled() ||
                    this.setState({
                        value: t,
                    }),
                    this.props.onValueChange(t),
                    this.props.onChange(e);
            }),
            (this._handleInputRef = e => {
                this._inputRef = e;
            }),
            (this._handleKeyDown = e => {
                const { onKeyDown: t } = this.props;
                (e => Wh(e) && !e.altKey && !e.shiftKey)(e) && e.preventDefault(),
                    Wh(e) && !(e => Wh(e) && (e.altKey || e.shiftKey))(e) ? (this.maybeSend(), t(e)) : t(e);
            }),
            (this.maybeSend = () => (
                this.props.onBeforeSend(),
                !!this._canSend() &&
                    (this._isControlled() ||
                        this.setState({
                            value: '',
                        }),
                    this.props.onSend(Ie(this._getValue())),
                    !0)
            ));
    }
    _getValue(e, t) {
        return (
            void 0 === e && (e = this.state), void 0 === t && (t = this.props), this._isControlled() ? t.value : e.value
        );
    }
    _canSend() {
        return this.props.active && '' !== this._getValue().trim();
    }
    _isControlled() {
        return 'string' == typeof this.props.value;
    }
    _setCursorAtTheEnd() {
        const e = this._inputRef.value.length;
        this._inputRef.setSelectionRange(e, e);
    }
    componentDidMount() {
        this.props.defaultValue &&
            this._inputRef &&
            document.activeElement === this._inputRef &&
            this._setCursorAtTheEnd();
    }
    componentDidUpdate(e, t) {
        const n = this._getValue();
        n !== this._getValue(t, e) && '' === n && this._inputRef.focus();
    }
    render() {
        const e = this.props,
            { children: t } = e,
            n = (function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var r in e)
                    if ({}.hasOwnProperty.call(e, r)) {
                        if (-1 !== t.indexOf(r)) continue;
                        n[r] = e[r];
                    }
                return n;
            })(e, Vh),
            r = {
                active: this._canSend(),
                inputRef: this._handleInputRef,
                value: this._getValue(),
                maybeSend: this.maybeSend,
                onButtonClick: this._handleButtonClick,
                onChange: this._handleChange,
                onKeyDown: this._handleKeyDown,
            };
        return or.createElement(
            Uh.Provider,
            {
                value: r,
            },
            or.createElement(qh, n, t)
        );
    }
}
(Gh.propTypes = {
    active: Xc.bool,
    children: Xc.node,
    defaultValue: Xc.string,
    onButtonClick: Xc.func,
    onChange: Xc.func,
    onKeyDown: Xc.func,
    onSend: Xc.func,
    onBeforeSend: Xc.func,
    value: Xc.string,
}),
    (Gh.defaultProps = {
        active: !0,
        defaultValue: '',
        onButtonClick: ar,
        onChange: ar,
        onKeyDown: ar,
        onSend: ar,
        onValueChange: ar,
        onBeforeSend: ar,
    });
const Kh = ['children'];
const Yh = e => {
        let { color: t } = e;
        return t
            ? {
                  fill: t,
                  '& *': {
                      fill: t,
                  },
              }
            : null;
    },
    Zh = jr(e =>
        jD(e, {
            displayType: 'Icon',
            mapPropsToStyles: Yh,
            shouldForwardProp: gD,
            target: 'eh4tvav0',
        })({
            name: 'y0b0au',
            styles: '&{display:block;}&,& *{fill:currentColor;}',
        })
    ),
    Xh = e => {
        let { children: t } = e,
            n = (function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var r in e)
                    if ({}.hasOwnProperty.call(e, r)) {
                        if (-1 !== t.indexOf(r)) continue;
                        n[r] = e[r];
                    }
                return n;
            })(e, Kh);
        const r = Zh(t.type);
        return or.createElement(r, n);
    };

function $h() {
    return (
        ($h = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        $h.apply(null, arguments)
    );
}
Xh.propTypes = {
    children: Xc.node.isRequired,
};
const Jh = e =>
        or.createElement(
            'svg',
            $h(
                {
                    width: '8px',
                    height: '13px',
                    viewBox: '0 0 8 13',
                },
                e
            ),
            or.createElement(
                'g',
                {
                    stroke: 'none',
                    strokeWidth: '1',
                    fill: 'none',
                    fillRule: 'evenodd',
                },
                or.createElement(
                    'g',
                    {
                        transform: 'translate(-840.000000, -560.000000)',
                        fill: '#424D57',
                        fillRule: 'nonzero',
                    },
                    or.createElement(
                        'g',
                        {
                            transform:
                                'translate(845.000000, 567.000000) scale(-1, 1) translate(-845.000000, -567.000000) translate(831.000000, 553.000000)',
                        },
                        or.createElement(
                            'g',
                            {
                                transform: 'translate(3.000000, 1.000000)',
                            },
                            or.createElement('polygon', {
                                points: '8.59 17.34 13.17 12.75 8.59 8.16 10 6.75 16 12.75 10 18.75',
                            })
                        )
                    )
                )
            )
        ),
    Qh = e => or.createElement(Xh, e, or.createElement(Jh, null));

function eg() {
    return (
        (eg = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        eg.apply(null, arguments)
    );
}
const tg = e =>
        or.createElement(
            'svg',
            eg(
                {
                    width: '8px',
                    height: '13px',
                    viewBox: '0 0 8 13',
                },
                e
            ),
            or.createElement(
                'g',
                {
                    stroke: 'none',
                    strokeWidth: '1',
                    fill: 'none',
                    fillRule: 'evenodd',
                },
                or.createElement(
                    'g',
                    {
                        transform: 'translate(-1104.000000, -560.000000)',
                        fill: '#424D57',
                        fillRule: 'nonzero',
                    },
                    or.createElement(
                        'g',
                        {
                            transform: 'translate(1094.000000, 553.000000)',
                        },
                        or.createElement(
                            'g',
                            {
                                transform: 'translate(2.000000, 1.000000)',
                            },
                            or.createElement('polygon', {
                                points: '8.59 17.34 13.17 12.75 8.59 8.16 10 6.75 16 12.75 10 18.75',
                            })
                        )
                    )
                )
            )
        ),
    ng = e => or.createElement(Xh, e, or.createElement(tg, null)),
    rg = ['text'],
    og = ['text', 'key', 'showMore'];

function ig() {
    return (
        (ig = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        ig.apply(null, arguments)
    );
}

function ag(e, t) {
    if (null == e) return {};
    var n = {};
    for (var r in e)
        if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r];
        }
    return n;
}
class ug extends or.Component {
    constructor() {
        super(...arguments),
            (this.handleButtonClick = e => t => {
                this.props.onButtonClick(t, e);
            });
    }
    render() {
        let e = null;
        const t = U(e => {
            let { showMore: t } = e;
            return t;
        }, this.props.buttons);
        if (-1 !== t) {
            const n = this.props.buttons[t],
                { text: r } = n,
                o = ag(n, rg);
            e = or.createElement(
                dh,
                ig({}, o, {
                    label: r,
                    'data-variant': 'show-more',
                    onClick: this.handleButtonClick(t),
                })
            );
        }
        return or.createElement(
            or.Fragment,
            null,
            or.createElement(
                Of,
                null,
                this.props.buttons.map((e, n) => {
                    let { text: r, key: o } = e,
                        i = ag(e, og);
                    const a = void 0 !== o ? o : n;
                    return n !== t
                        ? or.createElement(
                              dh,
                              ig(
                                  {
                                      key: a,
                                      label: r.length > 20 ? r.slice(0, 20).trim() + '…' : r,
                                      onClick: this.handleButtonClick(a),
                                  },
                                  i
                              )
                          )
                        : null;
                })
            ),
            e
        );
    }
}
(ug.defaultProps = {
    onButtonClick: ar,
}),
    Xc.string,
    Xc.string.isRequired,
    Xc.string;
const sg = ['children', 'scrollableElementPadding', 'dir', 'nextItemLabel', 'previousItemLabel'];

function lg() {
    return (
        (lg = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        lg.apply(null, arguments)
    );
}
const cg = jD('div', {
        target: 'e19iyixw3',
    })({
        name: '1u909ow',
        styles: 'position:relative;width:100%;display:flex',
    }),
    dg = {
        name: 'fol00x',
        styles: 'scrollbar-width:none;-ms-overflow-style:none;&::-webkit-scrollbar{display:none;}',
    },
    pg = jD('div', {
        target: 'e19iyixw2',
    })(
        'display:flex;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;align-items:flex-start;scroll-snap-type:x mandatory;scroll-behavior:',
        yr ? 'unset' : 'smooth',
        ';',
        dg,
        ' ',
        e => {
            let { padding: t, dir: n } = e;
            return lg(
                {},
                void 0 !== t && {
                    padding: t,
                },
                {
                    '> :not(:last-child)': {
                        ['rtl' === n ? 'marginLeft' : 'marginRight']: 8,
                    },
                }
            );
        },
        ';'
    ),
    Dg = jD('div', {
        target: 'e19iyixw1',
    })({
        name: 'idvx4m',
        styles: 'flex-grow:0;flex-shrink:0;scroll-snap-align:center;scroll-snap-stop:always',
    }),
    mg = jD('button', {
        target: 'e19iyixw0',
    })(
        'position:absolute;width:30px;height:30px;border-radius:50%;background:',
        e => {
            let { theme: t } = e;
            return t.colors.floatSurface;
        },
        ';color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';border:0;box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);text-align:center;top:32%;display:flex;align-items:center;justify-content:center;padding:0;z-index:1;outline:0;-webkit-transform:translate3d(0, 0, 0);&:hover{cursor:pointer;}svg{display:inline;}',
        e => {
            let { variant: t } = e;
            return {
                [t]: '.5em',
            };
        },
        ';'
    ),
    fg = e => {
        let { itemCount: t, itemWidth: n, spacing: r } = e;
        return t * n + (t - 1) * r;
    },
    hg = e => {
        let { clientWidth: t, scrollableElement: n, currentX: r, nextX: o, scrollDirection: i, isRtl: a } = e;
        const u = n.firstElementChild.getBoundingClientRect().width,
            s = ((e, t) => {
                if (e.length < 2) return 0;
                const [n, r] = e,
                    o = n.getBoundingClientRect(),
                    i = r.getBoundingClientRect();
                return t ? o.left - i.right : i.left - o.right;
            })(n.children, a),
            l =
                (a ? n.lastElementChild : n.firstElementChild).getBoundingClientRect().left -
                n.getBoundingClientRect().left +
                r,
            c = (e => {
                let { x: t, scrollDirection: n, leftElementXOffset: r, itemWidth: o, spacing: i } = e;
                const a = (t - r) / (o + i);
                return 1 === n ? Math.floor(a) : Math.ceil(a);
            })({
                x: o,
                scrollDirection: i,
                leftElementXOffset: l,
                itemWidth: u,
                spacing: s,
            });
        if (u > t) {
            return l + (1 === i ? c + 1 : c - 1) * (u + s);
        }
        const d = l + c * (u + s),
            p = Math.floor(t / (u + s)),
            D = fg({
                itemCount: p,
                itemWidth: u,
                spacing: s,
            });
        return (
            d +
            (D + u <= t
                ? fg({
                      itemCount: p + 1,
                      itemWidth: u,
                      spacing: s,
                  })
                : D) /
                2 -
            t / 2
        );
    },
    gg = e => {
        let { children: t, scrollableElementPadding: n, dir: r, nextItemLabel: o, previousItemLabel: i } = e,
            a = (function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var r in e)
                    if ({}.hasOwnProperty.call(e, r)) {
                        if (-1 !== t.indexOf(r)) continue;
                        n[r] = e[r];
                    }
                return n;
            })(e, sg);
        const u = or.useRef(0),
            s = or.useRef(null),
            { isFocusVisible: l } = el(),
            [c, d] = or.useState(!0),
            [p, D] = or.useState(!0),
            [m, f] = fD(),
            h = Hp('x', s),
            g = !(m && l),
            v = or.useCallback(() => {
                const e = s.current;
                e &&
                    (d(
                        !(e => {
                            if ('ltr' === getComputedStyle(e).direction) return e.scrollLeft <= 1;
                            const t = e.scrollWidth - e.clientWidth;
                            switch (pi()) {
                                case 'negative':
                                    return e.scrollLeft <= 1 - t;
                                case 'positive-ascending':
                                    return e.scrollLeft >= t - 1;
                                case 'positive-descending':
                                    return e.scrollLeft <= 1;
                            }
                        })(e)
                    ),
                    D(
                        !(e => {
                            const t = getComputedStyle(e).direction,
                                n = e.scrollWidth - e.clientWidth;
                            if ('ltr' === t) return e.scrollLeft >= n - 1;
                            switch (pi()) {
                                case 'negative':
                                    return e.scrollLeft >= -1;
                                case 'positive-ascending':
                                    return e.scrollLeft <= 1;
                                case 'positive-descending':
                                    return e.scrollLeft >= n - 1;
                            }
                        })(e)
                    ));
            }, []),
            C = or.useMemo(() => Pe(200, v), [v]);
        rD(() => {
            if ('undefined' == typeof ResizeObserver) return;
            const e = requestAnimationFrame(v),
                t = new ResizeObserver(Mr(200, v));
            return (
                t.observe(s.current),
                () => {
                    cancelAnimationFrame(e), t.disconnect();
                }
            );
        }),
            or.useEffect(() => {
                const e = s.current;
                if (!e) return;
                const t = new MutationObserver(e => {
                    e.forEach(e => {
                        'childList' === e.type && (e.addedNodes.length > 0 || e.removedNodes.length > 0) && v();
                    });
                });
                return (
                    t.observe(e, {
                        childList: !0,
                        subtree: !0,
                    }),
                    () => {
                        t.disconnect();
                    }
                );
            }, [v]);
        const b = e => {
            (u.current += e), u.current < 0 ? (u.current = 0) : u.current >= t.length && (u.current = t.length - 1);
            const n = s.current,
                { clientWidth: o, scrollWidth: i } = n,
                a = 'rtl' === r,
                l = ((e, t) => {
                    const n = e.scrollWidth - e.clientWidth;
                    if (t)
                        switch (pi()) {
                            case 'negative':
                                return n + e.scrollLeft;
                            case 'positive-ascending':
                                return n - e.scrollLeft;
                            case 'positive-descending':
                                return e.scrollLeft;
                        }
                    return e.scrollLeft;
                })(n, a),
                c = l + e * o,
                d = 1 === e ? Math.min(c, i - o) : Math.max(c, 0),
                p =
                    c === d
                        ? hg({
                              clientWidth: o,
                              scrollableElement: n,
                              currentX: l,
                              nextX: c,
                              scrollDirection: e,
                              isRtl: a,
                          })
                        : d;
            if (a)
                switch (pi()) {
                    case 'negative':
                        return void h(-i + o + p, {
                            duration: 0,
                        });
                    case 'positive-ascending':
                        return void h(i - o - p, {
                            duration: 0,
                        });
                    case 'positive-descending':
                        return void h(p, {
                            duration: 0,
                        });
                }
            else
                h(p, {
                    duration: 0,
                });
        };
        return or.createElement(
            cg,
            a,
            g &&
                c &&
                or.createElement(
                    mg,
                    {
                        variant: 'left',
                        type: 'button',
                        'aria-label': i || 'Previous item',
                        onClick: e => {
                            e.stopPropagation(), b(-1);
                        },
                    },
                    or.createElement(Qh, {
                        'aria-hidden': !0,
                    })
                ),
            or.createElement(
                pg,
                lg(
                    {
                        dir: r,
                        tabIndex: -1,
                        ref: s,
                        onScroll: C,
                        padding: n,
                    },
                    f
                ),
                or.Children.map(t, (e, t) =>
                    or.createElement(
                        Dg,
                        {
                            onFocus: () => {
                                var e;
                                l &&
                                    m &&
                                    b(
                                        'number' != typeof (e = t - u.current) || isNaN(e)
                                            ? NaN
                                            : Object.is(e, 0)
                                              ? 0
                                              : Object.is(e, -0)
                                                ? -0
                                                : e > 0
                                                  ? 1
                                                  : -1
                                    );
                            },
                        },
                        e
                    )
                )
            ),
            g &&
                p &&
                or.createElement(
                    mg,
                    {
                        variant: 'right',
                        type: 'button',
                        'aria-label': o || 'Next item',
                        onClick: e => {
                            e.stopPropagation(), b(1);
                        },
                    },
                    or.createElement(ng, {
                        'aria-hidden': !0,
                    })
                )
        );
    },
    vg = 430;
let Cg = !1;
const bg = e => !e && (Cg ? ((Cg = !1), !0) : 'function' == typeof document.hasFocus && document.hasFocus()),
    Eg = e => !Ee() && bg(e),
    yg = (e, t) => {
        ze(
            kr(e, 'host_focus_shifted'),
            vr(() => {
                Cg = !1;
            })
        ),
            ze(
                _e(t, e => e.application.visibility),
                Re(null),
                Sr,
                Cr(e => {
                    let [t, n] = e;
                    return (
                        t &&
                        (null == t ? void 0 : t.state) !== (null == n ? void 0 : n.state) &&
                        !!n.interactionModality
                    );
                }),
                vr(e => {
                    let [, t] = e;
                    var n;
                    (n = t.interactionModality), (Ws = n), Gs(n, null), (Cg = 'virtual' !== t.interactionModality);
                })
            );
    },
    xg = or.createContext(!1),
    Fg = () => or.useContext(xg),
    wg = xg.Provider,
    Ag = rr.createContext({
        isDragNDropAllowed: () => !1,
        setModalOpen: ar,
        setMenuOpen: ar,
        setMomentExpand: ar,
    }),
    Bg = e => {
        let { children: t } = e;
        const n = Fg(),
            r = lD(!1),
            o = lD(!1),
            i = lD(!1),
            a = rr.useMemo(
                () => ({
                    isDragNDropAllowed: () => !(n || r.get() || o.get() || i.get()),
                    setModalOpen: e => o.next(e),
                    setMenuOpen: e => r.next(e),
                    setMomentExpand: e => i.next(e),
                }),
                [r, o, i, n]
            );
        return rr.createElement(
            Ag.Provider,
            {
                value: a,
            },
            t
        );
    },
    kg = () => rr.useContext(Ag),
    Sg = (function () {
        const e = 'undefined' != typeof document && document.createElement('link').relList;
        return e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload';
    })(),
    Tg = {},
    Lg = function (e, t, n) {
        let r = Promise.resolve();
        if (t && t.length > 0) {
            document.getElementsByTagName('link');
            const e = document.querySelector('meta[property=csp-nonce]'),
                n = (null == e ? void 0 : e.nonce) || (null == e ? void 0 : e.getAttribute('nonce'));
            r = Promise.allSettled(
                t.map(e => {
                    if (
                        (e = (function (e) {
                            return 'https://cdn.livechatinc.com/widget/' + e;
                        })(e)) in Tg
                    )
                        return;
                    Tg[e] = !0;
                    const t = e.endsWith('.css'),
                        r = t ? '[rel="stylesheet"]' : '';
                    if (document.querySelector(`link[href="${e}"]${r}`)) return;
                    const o = document.createElement('link');
                    return (
                        (o.rel = t ? 'stylesheet' : Sg),
                        t || (o.as = 'script'),
                        (o.crossOrigin = ''),
                        (o.href = e),
                        n && o.setAttribute('nonce', n),
                        document.head.appendChild(o),
                        t
                            ? new Promise((t, n) => {
                                  o.addEventListener('load', t),
                                      o.addEventListener('error', () => n(new Error(`Unable to preload CSS for ${e}`)));
                              })
                            : void 0
                    );
                })
            );
        }

        function o(e) {
            const t = new Event('vite:preloadError', {
                cancelable: !0,
            });
            if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented)) throw e;
        }
        return r.then(t => {
            for (const e of t || []) 'rejected' === e.status && o(e.reason);
            return e().catch(o);
        });
    },
    Pg = ['size', 'label', 'color', 'children'],
    Mg = e =>
        Bu(
            'display:inline-block;flex-shrink:0;width:1em;height:1em;font-size:',
            e ? vi(e) : 'inherit',
            ';user-select:none;fill:currentColor;'
        ),
    Og = e => {
        let { size: t, label: n, color: r = 'inherit', children: o } = e,
            i = ur(e, Pg);
        const a = os(),
            u = n
                ? {
                      'aria-labelledby': a,
                  }
                : {};
        return wu(
            'svg',
            ir(
                {
                    color: r,
                    css: Mg(t),
                },
                i,
                u
            ),
            n &&
                wu(
                    'title',
                    {
                        id: a,
                    },
                    n
                ),
            o
        );
    },
    Ig = (e, t) => or.memo(n => wu(Og, ir({}, t, n), e));
var zg;
const _g = ku(zg || (zg = si(['\n\tto {\n\t\tstroke-dashoffset: 0;\n\t}\n'])));
Ig(
    wu('polyline', {
        css: Bu(
            'fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;animation-fill-mode:forwards;animation-name:',
            _g,
            ';animation-duration:0.5s;animation-iteration-count:1;animation-timing-function:cubic-bezier(0, 0, 1, 1);stroke-dasharray:9.7;stroke-dashoffset:9.7;'
        ),
        points: '4.3,8.1 5.3,9.1 6.8,10.5 9,8.2 11.1,6.1 ',
    }),
    {
        size: 16,
        viewBox: '0 0 16 16',
    }
);
const Rg = Ig(
        or.createElement('path', {
            d: 'M23.7,16.7l-6,6c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-0.9-0.1-1.3l0.1-0.1l4.3-4.3H10c-0.5,0-0.9-0.4-1-0.9L9,16 c0-0.5,0.4-0.9,0.9-1l0.1,0h10.6l-4.3-4.3c-0.4-0.4-0.4-0.9-0.1-1.3l0.1-0.1c0.4-0.4,0.9-0.4,1.3-0.1l0.1,0.1l6,6 C24.1,15.7,24.1,16.2,23.7,16.7L23.7,16.7z',
        }),
        {
            size: 32,
            viewBox: '0 0 32 32',
        }
    ),
    jg = Ig(
        or.createElement('path', {
            d: 'M10.4928932,10.1071068 C10.1023689,9.71658249 9.46920395,9.71658249 9.07867966,10.1071068 C8.68815536,10.4976311 8.68815536,11.1307961 9.07867966,11.5213203 L11.9071068,14.3497475 C12.2976311,14.7402718 12.9307961,14.7402718 13.3213203,14.3497475 L16.1497475,11.5213203 C16.5402718,11.1307961 16.5402718,10.4976311 16.1497475,10.1071068 C15.7592232,9.71658249 15.1260582,9.71658249 14.7355339,10.1071068 L12.6142136,12.2284271 L10.4928932,10.1071068 Z',
        }),
        {
            size: 24,
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'none',
            strokeWidth: 1,
            fillRule: 'evenodd',
        }
    ),
    Ng = Ig(
        or.createElement('path', {
            d: 'M9.70710678,8.29289322 L14,12.585 L18.2928932,8.29289322 C18.6834175,7.90236893 19.3165825,7.90236893 19.7071068,8.29289322 C20.0976311,8.68341751 20.0976311,9.31658249 19.7071068,9.70710678 L15.415,14 L19.7071068,18.2928932 C20.0976311,18.6834175 20.0976311,19.3165825 19.7071068,19.7071068 C19.3165825,20.0976311 18.6834175,20.0976311 18.2928932,19.7071068 L14,15.415 L9.70710678,19.7071068 C9.31658249,20.0976311 8.68341751,20.0976311 8.29289322,19.7071068 C7.90236893,19.3165825 7.90236893,18.6834175 8.29289322,18.2928932 L12.585,14 L8.29289322,9.70710678 C7.90236893,9.31658249 7.90236893,8.68341751 8.29289322,8.29289322 C8.68341751,7.90236893 9.31658249,7.90236893 9.70710678,8.29289322 Z',
            fillRule: 'nonzero',
        }),
        {
            size: 28,
            viewBox: '0 0 28 28',
        }
    ),
    Wg = Ig(
        or.createElement('path', {
            d: 'M8.70710678,7.29289322 L12,10.585 L15.2928932,7.29289322 C15.6834175,6.90236893 16.3165825,6.90236893 16.7071068,7.29289322 C17.0976311,7.68341751 17.0976311,8.31658249 16.7071068,8.70710678 L13.415,12 L16.7071068,15.2928932 C17.0976311,15.6834175 17.0976311,16.3165825 16.7071068,16.7071068 C16.3165825,17.0976311 15.6834175,17.0976311 15.2928932,16.7071068 L12,13.415 L8.70710678,16.7071068 C8.31658249,17.0976311 7.68341751,17.0976311 7.29289322,16.7071068 C6.90236893,16.3165825 6.90236893,15.6834175 7.29289322,15.2928932 L10.585,12 L7.29289322,8.70710678 C6.90236893,8.31658249 6.90236893,7.68341751 7.29289322,7.29289322 C7.68341751,6.90236893 8.31658249,6.90236893 8.70710678,7.29289322 Z',
        }),
        {
            size: 20,
            viewBox: '0 0 24 24',
        }
    ),
    Vg = Ig(
        or.createElement(
            'g',
            null,
            or.createElement('path', {
                d: 'M5.87014298,6.34370573 L5.87014298,7.9487527 L9.65072364,7.9487527 C9.53495965,8.84917256 9.23921768,9.50813989 8.78919821,9.97139007 C8.23630226,10.5325366 7.37470234,11.1458442 5.87014298,11.1458442 C3.54264619,11.1458442 1.72305085,9.24068246 1.72305085,6.87877178 C1.72305085,4.51686111 3.54264619,2.61162379 5.87014298,2.61162379 C7.12395486,2.61162379 8.04336228,3.11403252 8.71842872,3.7599218 L9.83077612,2.63112747 C8.8920747,1.70462711 7.63185632,1 5.87021747,1 C2.68112076,1 0,3.63594493 0,6.87211936 C0,10.108445 2.68119525,12.7443899 5.87021747,12.7443899 C7.59334282,12.7443899 8.8921492,12.1700897 9.90795211,11.10026 C10.9496045,10.0432815 11.2774535,8.54898221 11.2774535,7.34852319 C11.2774535,6.97666816 11.2516785,6.63081803 11.1937965,6.34370573 L5.87014298,6.34370573 Z',
                fill: '#4285F4',
            }),
            or.createElement('path', {
                d: 'M16.0031346,11.1261969 C14.8714932,11.1261969 13.8942783,10.1798904 13.8942783,8.82944965 C13.8942783,7.46570401 14.8714932,6.53285362 16.0031346,6.53285362 C17.1347015,6.53285362 18.1119909,7.46585521 18.1119909,8.82944965 C18.1119909,10.1801172 17.1347015,11.1261969 16.0031346,11.1261969 M16.0031346,5.03878108 C13.9391983,5.03878108 12.254661,6.63074999 12.254661,8.82960084 C12.254661,11.0086456 13.9391983,12.6204206 16.0031346,12.6204206 C18.0670709,12.6204206 19.7515338,11.0153736 19.7515338,8.82960084 C19.7515338,6.63074999 18.0669964,5.03878108 16.0031346,5.03878108',
                fill: '#EA4335',
            }),
            or.createElement('path', {
                d: 'M32.4949065,11.1261969 C31.3634886,11.1261969 30.5017397,10.1475355 30.5017397,8.82944965 C30.5017397,7.49193571 31.3632651,6.53285362 32.4949065,6.53285362 C33.6138094,6.53285362 34.488257,7.51151498 34.488257,8.84260329 C34.4946288,10.1670392 33.6137349,11.1261969 32.4949065,11.1261969 L32.4949065,11.1261969 Z M34.3787903,5.88696434 L34.3209828,5.88696434 C33.9544714,5.44336903 33.2472234,5.03878108 32.353591,5.03878108 C30.4890757,5.03878108 28.8624203,6.68956341 28.8624203,8.82960084 C28.8624203,10.9566358 30.4890757,12.6204206 32.353591,12.6204206 C33.2472234,12.6204206 33.9544714,12.2158327 34.3209828,11.7590081 L34.3787903,11.7590081 L34.3787903,12.2874217 C34.3787903,13.7359101 33.6136604,14.5124287 32.3856235,14.5124287 C31.3827081,14.5124287 30.7589682,13.7817211 30.5017397,13.1619123 L29.0744308,13.7621418 C29.4857133,14.7668837 30.5725092,16 32.3856235,16 C34.3080953,16 35.9347507,14.8518532 35.9347507,12.0526972 L35.9347507,5.23442263 L34.3787903,5.23442263 L34.3787903,5.88696434 Z',
                fill: '#4285F4',
            }),
            or.createElement('path', {
                d: 'M24.3615776,11.1261969 C23.2299362,11.1261969 22.2524978,10.1798904 22.2524978,8.82944965 C22.2524978,7.46570401 23.2297872,6.53285362 24.3615776,6.53285362 C25.4929955,6.53285362 26.4705084,7.46585521 26.4705084,8.82944965 C26.4705084,10.1801172 25.4931445,11.1261969 24.3615776,11.1261969 M24.3615776,5.03878108 C22.2974923,5.03878108 20.6131039,6.63074999 20.6131039,8.82960084 C20.6131039,11.0086456 22.2975668,12.6204206 24.3615776,12.6204206 C26.4252904,12.6204206 28.1098278,11.0153736 28.1098278,8.82960084 C28.1099767,6.63074999 26.4255139,5.03878108 24.3615776,5.03878108',
                fill: '#FBBC05',
            }),
            or.createElement('polygon', {
                fill: '#34A853',
                points: '37.2208111 12.6203299 38.834579 12.6203299 38.834579 1.15655104 37.2208111 1.15655104',
            }),
            or.createElement('path', {
                d: 'M43.7017693,6.4610831 C44.3641717,6.4610831 44.9297317,6.80685763 45.1161907,7.29626391 L41.740784,8.71209495 C41.740784,7.12005044 42.8529079,6.4610831 43.7017693,6.4610831 M43.8174588,11.1261666 C42.9814104,11.1261666 42.3900754,10.7413091 42.0043444,9.97786862 L47,7.88349097 L46.832835,7.45289811 C46.52428,6.60471485 45.5726166,5.03875084 43.6374063,5.03875084 C41.7149345,5.03875084 40.1140541,6.57205753 40.1140541,8.8296462 C40.1140541,10.9566056 41.6956405,12.6203904 43.8176078,12.6203904 C45.5277711,12.6203904 46.517948,11.5570619 46.929305,10.9435275 L45.6561991,10.082115 C45.2318802,10.7085762 44.6532837,11.1261666 43.8174588,11.1261666',
                fill: '#EA4335',
            })
        ),
        {
            viewBox: '0 0 47 16',
        }
    );
var Ug, Hg, qg, Gg, Kg, Yg, Zg, Xg, $g;
Ig(
    wu(
        or.Fragment,
        null,
        wu(
            'g',
            {
                css: Bu(
                    'fill:none;transform:translate(16px, 16px) rotate(0deg) translate(-16px, -16px);animation-fill-mode:backwards;animation-timing-function:cubic-bezier(0, 0, 1, 1);animation-name:',
                    ku(
                        Ug ||
                            (Ug = si([
                                '\n            75% {\n              transform: translate(16px, 16px) rotate(0deg) translate(-16px, -16px);\n            }\n            91.67% {\n              transform: translate(16px, 16px) rotate(180deg) translate(-16px, -16px);\n            }\n            0% {\n              transform: translate(16px, 16px) rotate(0deg) translate(-16px, -16px);\n            }\n            100% {\n              transform: translate(16px, 16px) rotate(180deg) translate(-16px, -16px);\n            }\n          ',
                            ]))
                    ),
                    ';'
                ),
            },
            wu('path', {
                d: 'M22,22 L22,26 L10,26 L10,22 L16,16 L22,22 Z M22,10 L16,16 L10,10 L10,6 L22,6 L22,10 Z',
                strokeLinejoin: 'round',
                css: {
                    name: '9mktyj',
                    styles: 'stroke:currentColor;stroke-width:2',
                },
            })
        ),
        wu(
            'g',
            {
                css: Bu(
                    'transform:translate(16px, 15px) scale(1, 1) translate(-16px, -15px);animation-fill-mode:backwards;animation-name:',
                    ku(
                        Hg ||
                            (Hg = si([
                                '\n            0% {\n              transform: translate(16px, 15px) scale(1, 1) translate(-16px, -15px);\n            }\n            61.67% {\n              transform: translate(16px, 15px) scale(0, 0) translate(-16px, -15px);\n            }\n            63.33% {\n              transform: translate(16px, 15px) scale(1, 1) translate(-16px, -15px);\n            }\n            100% {\n              transform: translate(16px, 15px) scale(1, 1) translate(-16px, -15px);\n            }\n          ',
                            ]))
                    ),
                    ';animation-timing-function:cubic-bezier(0.42, 0, 1, 1);'
                ),
            },
            wu('polygon', {
                points: '12 11 20 11 16 15',
                css: Bu(
                    'fill:currentColor;opacity:1;animation-fill-mode:backwards;animation-timing-function:cubic-bezier(0, 0, 1, 1);animation-name:',
                    ku(
                        qg ||
                            (qg = si([
                                '\n              58.33% {\n                opacity: 1;\n              }\n              60% {\n                opacity: 0;\n              }\n              91.67% {\n                opacity: 0;\n              }\n              96.67% {\n                opacity: 1;\n              }\n              0% {\n                opacity: 1;\n              }\n              100% {\n                opacity: 1;\n              }\n            ',
                            ]))
                    ),
                    ';'
                ),
            })
        ),
        wu('path', {
            d: 'M16,17 L16,23',
            css: Bu(
                'stroke:currentColor;stroke-width:2;stroke-dashoffset:12;stroke-dasharray:6,0,6,6;animation-fill-mode:backwards,backwards;animation-timing-function:cubic-bezier(0.42, 0, 1, 1),cubic-bezier(0, 0, 1, 1);animation-name:',
                ku(
                    Gg ||
                        (Gg = si([
                            '\n            0% {\n              stroke-dashoffset: 12;\n            }\n            68.33% {\n              stroke-dashoffset: -6;\n            }\n            100% {\n              stroke-dashoffset: -6;\n            }\n          ',
                        ]))
                ),
                ',',
                ku(
                    Kg ||
                        (Kg = si([
                            '\n            0% {\n              stroke-dasharray: 6, 0, 6, 6;\n            }\n            100% {\n              stroke-dasharray: 6, 0, 6, 6;\n            }\n          ',
                        ]))
                ),
                ';'
            ),
        }),
        wu(
            'g',
            {
                css: Bu(
                    'transform:translate(16px, 24px) translate(-16px, -24px) translate(0px, 2px);animation-fill-mode:backwards;animation-timing-function:cubic-bezier(0, 0, 1, 1);animation-name:',
                    ku(
                        Yg ||
                            (Yg = si([
                                '\n            0% {\n              transform: translate(16px, 24px) translate(-16px, -24px) translate(0px, 2px);\n            }\n            40% {\n              transform: translate(16px, 24px) translate(-16px, -24px) translate(0px, 0px);\n            }\n            75% {\n              transform: translate(16px, 24px) translate(-16px, -24px) translate(0px, 0px);\n            }\n            76.67% {\n              transform: translate(16px, 24px) translate(-16px, -24px)\n                translate(-2px, 0px);\n            }\n            78.33% {\n              transform: translate(16px, 24px) translate(-16px, -24px)\n                translate(-4px, -1px);\n            }\n            81.67% {\n              transform: translate(16px, 24px) translate(-16px, -24px)\n                translate(-8px, -6px);\n            }\n            83.33% {\n              transform: translate(16px, 24px) translate(-16px, -24px)\n                translate(-8px, -8px);\n            }\n            85% {\n              transform: translate(16px, 24px) translate(-16px, -24px)\n                translate(-8px, -11px);\n            }\n            88.33% {\n              transform: translate(16px, 24px) translate(-16px, -24px)\n                translate(-4px, -13px);\n            }\n            91.67% {\n              transform: translate(16px, 24px) translate(-16px, -24px)\n                translate(0px, -13px);\n            }\n            96.67% {\n              transform: translate(16px, 24px) translate(-16px, -24px)\n                translate(0px, -11px);\n            }\n            100% {\n              transform: translate(16px, 24px) translate(-16px, -24px)\n                translate(0px, -11px);\n            }\n          ',
                            ]))
                    ),
                    ';'
                ),
            },
            wu(
                'g',
                {
                    css: Bu(
                        'transform:translate(16px, 24px) rotate(0deg) translate(-16px, -24px);animation-fill-mode:backwards;animation-timing-function:cubic-bezier(0, 0, 1, 1);animation-name:',
                        ku(
                            Zg ||
                                (Zg = si([
                                    '\n              75% {\n                transform: translate(16px, 24px) rotate(0deg) translate(-16px, -24px);\n              }\n              78.33% {\n                transform: translate(16px, 24px) rotate(36deg) translate(-16px, -24px);\n              }\n              83.33% {\n                transform: translate(16px, 24px) rotate(90deg) translate(-16px, -24px);\n              }\n              91.67% {\n                transform: translate(16px, 24px) rotate(180deg) translate(-16px, -24px);\n              }\n              0% {\n                transform: translate(16px, 24px) rotate(0deg) translate(-16px, -24px);\n              }\n              100% {\n                transform: translate(16px, 24px) rotate(180deg) translate(-16px, -24px);\n              }\n            ',
                                ]))
                        ),
                        ';'
                    ),
                },
                wu(
                    'g',
                    {
                        css: Bu(
                            'transform:translate(16px, 24px) scale(1, 1) translate(-16px, -24px);animation-fill-mode:backwards;animation-timing-function:cubic-bezier(0, 0, 1, 1);animation-name:',
                            ku(
                                Xg ||
                                    (Xg = si([
                                        '\n                0% {\n                  transform: translate(16px, 24px) scale(1, 1) translate(-16px, -24px);\n                }\n                40% {\n                  transform: translate(16px, 24px) scale(1, 1.4) translate(-16px, -24px);\n                }\n                68.33% {\n                  transform: translate(16px, 24px) scale(1, 1.6) translate(-16px, -24px);\n                }\n                86.67% {\n                  transform: translate(16px, 24px) scale(1, 1.6) translate(-16px, -24px);\n                }\n                88.33% {\n                  transform: translate(16px, 24px) scale(1, 1.4) translate(-16px, -24px);\n                }\n                91.67% {\n                  transform: translate(16px, 24px) scale(0.8, 1.3) translate(-16px, -24px);\n                }\n                96.67% {\n                  transform: translate(16px, 24px) scale(0.45, 1.6) translate(-16px, -24px);\n                }\n                100% {\n                  transform: translate(16px, 24px) scale(0.45, 1.6) translate(-16px, -24px);\n                }\n              ',
                                    ]))
                            ),
                            ';'
                        ),
                    },
                    wu('rect', {
                        x: '10',
                        y: '23',
                        width: '12',
                        height: '2',
                        css: Bu(
                            'fill:currentColor;opacity:1;animation-fill-mode:backwards;animation-timing-function:cubic-bezier(0, 0, 1, 1);animation-name:',
                            ku(
                                $g ||
                                    ($g = si([
                                        '\n                  75% {\n                    opacity: 1;\n                  }\n                  0% {\n                    opacity: 1;\n                  }\n                  100% {\n                    opacity: 1;\n                  }\n                ',
                                    ]))
                            ),
                            ';'
                        ),
                    })
                )
            )
        )
    ),
    {
        size: 32,
        viewBox: '0 0 32 32',
        css: {
            name: '2mc0ji',
            styles: '*{animation-duration:2s;animation-iteration-count:infinite;animation-timing-function:cubic-bezier(0, 0, 1, 1);}',
        },
    }
);
const Jg = ['onPress', 'disabled'],
    Qg = ['ref'],
    ev = jD(
        or.forwardRef(function (e, t) {
            let { onPress: n, disabled: r } = e,
                o = ur(e, Jg);
            t = t || or.useRef(null);
            const i = th(
                    ir(
                        {
                            onPress: n,
                            isDisabled: r,
                        },
                        o
                    ),
                    t
                ),
                a = ur(i.buttonProps, Qg);
            return or.createElement(
                Zm,
                ir(
                    {
                        ref: t,
                    },
                    ss(a, o),
                    {
                        onPointerDown: e => {
                            a.onPointerDown(e),
                                o.active ||
                                    document.dispatchEvent(
                                        new MouseEvent(Ee() ? 'touchdown' : 'mousedown', {
                                            relatedTarget: t.current,
                                        })
                                    );
                        },
                    }
                )
            );
        }),
        {
            target: 'e1mwfyk10',
        }
    )(
        'padding:0;display:flex;justify-content:center;align-items:center;border:0;border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.def;
        },
        ';'
    ),
    tv = ['backgroundColor', 'color', 'filled', 'smile'],
    nv = jD('path', {
        target: 'eam5rsy0',
    })(
        e => {
            let { collapsed: t } = e;
            return {
                opacity: t ? 0 : 1,
                transform: 'scale(' + (t ? 0 : 1) + ')',
            };
        },
        ' transform-origin:50% 50%;transition:200ms ',
        e => {
            let { theme: t } = e;
            return t.transitions.easings.spring;
        },
        ' 50ms;'
    ),
    rv = e => {
        let { backgroundColor: t, color: n, filled: r = !1, smile: o = !1 } = e,
            i = ur(e, tv);
        return or.createElement(
            Og,
            ir(
                {
                    viewBox: '0 0 32 32',
                },
                i
            ),
            or.createElement('path', {
                fill: n,
                d: 'M12.63,26.46H8.83a6.61,6.61,0,0,1-6.65-6.07,89.05,89.05,0,0,1,0-11.2A6.5,6.5,0,0,1,8.23,3.25a121.62,121.62,0,0,1,15.51,0A6.51,6.51,0,0,1,29.8,9.19a77.53,77.53,0,0,1,0,11.2,6.61,6.61,0,0,1-6.66,6.07H19.48L12.63,31V26.46',
            }),
            or.createElement(nv, {
                collapsed: r,
                fill: t,
                d: 'M19.57,21.68h3.67a2.08,2.08,0,0,0,2.11-1.81,89.86,89.86,0,0,0,0-10.38,1.9,1.9,0,0,0-1.84-1.74,113.15,113.15,0,0,0-15,0A1.9,1.9,0,0,0,6.71,9.49a74.92,74.92,0,0,0-.06,10.38,2,2,0,0,0,2.1,1.81h3.81V26.5Z',
            }),
            o &&
                or.createElement('path', {
                    style: {
                        zIndex: 1,
                    },
                    d: 'M10.1323 14.052C9.61464 13.873 9 14.1779 9 14.6347V16.9776C9 17.3027 9.21685 17.6019 9.57923 17.7403C10.6835 18.1618 13.228 19 16.0001 19C18.7721 19 21.3166 18.1618 22.4209 17.7403C22.7833 17.6019 23 17.3027 23 16.9776V14.6347C23 14.1779 22.3855 13.873 21.8678 14.052C20.5905 14.4935 18.3791 15.1109 16.0001 15.1109C13.621 15.1109 11.4096 14.4935 10.1323 14.052Z',
                    fill: n,
                })
        );
    },
    ov = Ig(
        or.createElement(
            or.Fragment,
            null,
            or.createElement(
                'defs',
                null,
                or.createElement(
                    'radialGradient',
                    {
                        cx: '16.75%',
                        cy: '99.9972466%',
                        fx: '16.75%',
                        fy: '99.9972466%',
                        r: '110%',
                        id: 'radialGradient-1',
                    },
                    or.createElement('stop', {
                        stopColor: '#0099FF',
                        offset: '0%',
                    }),
                    or.createElement('stop', {
                        stopColor: '#A033FF',
                        offset: '60%',
                    }),
                    or.createElement('stop', {
                        stopColor: '#FF5280',
                        offset: '90%',
                    }),
                    or.createElement('stop', {
                        stopColor: '#FF7061',
                        offset: '100%',
                    })
                )
            ),
            or.createElement(
                'g',
                {
                    stroke: 'none',
                    strokeWidth: '1',
                    fill: 'none',
                    fillRule: 'evenodd',
                },
                or.createElement('path', {
                    d: 'M12,2 C6.3675,2 2,6.12738635 2,11.6997329 C2,14.6146527 3.195,17.1345833 5.14,18.8745354 C5.3025,19.0195314 5.4025,19.2245257 5.4075,19.4445197 L5.4625,21.2244707 C5.47063238,21.4904161 5.61045967,21.7349145 5.83555586,21.8767863 C6.06065205,22.0186582 6.34155568,22.0393349 6.585,21.9319512 L8.57,21.0569753 C8.7375,20.9819773 8.9275,20.9694777 9.105,21.0169764 C10.0175,21.2669695 10.9875,21.4019658 12,21.4019658 C17.6325,21.4019658 22,17.2745794 22,11.7022329 C22,6.12988629 17.6325,2 12,2 Z',
                    fill: 'url(#radialGradient-1)',
                    fillRule: 'nonzero',
                }),
                or.createElement('path', {
                    d: 'M6.07640929,14.3289348 L8.97376539,10.0516937 C9.19412208,9.72612354 9.55082482,9.50121593 9.95744403,9.43146629 C10.3640632,9.36171665 10.7834949,9.45348964 11.1141102,9.68454854 L13.4196659,11.2931033 C13.6311344,11.4404337 13.9219243,11.4394974 14.1322922,11.2908086 L17.2441759,9.09252697 C17.6584362,8.79881084 18.2009199,9.2623316 17.9247464,9.67307525 L15.0249244,13.9480217 C14.8045678,14.2735919 14.447865,14.4984995 14.0412458,14.5682491 C13.6346266,14.6379988 13.2151949,14.5462258 12.8845797,14.3151669 L10.579024,12.7066121 C10.3675554,12.5592817 10.0767655,12.560218 9.86639766,12.7089068 L6.75451391,14.9071884 C6.34025363,15.2009046 5.79776993,14.7396785 6.07640929,14.3289348 L6.07640929,14.3289348 Z',
                    fill: '#FFFFFF',
                    fillRule: 'nonzero',
                })
            )
        ),
        {
            size: 24,
            viewBox: '0 0 24 24',
        }
    ),
    iv = Ig(
        or.createElement('path', {
            d: 'M21,18 C21.5522847,18 22,18.4477153 22,19 C22,19.5522847 21.5522847,20 21,20 L7,20 C6.44771525,20 6,19.5522847 6,19 C6,18.4477153 6.44771525,18 7,18 L21,18 Z',
            fillRule: 'nonzero',
        }),
        {
            size: 28,
            viewBox: '0 0 28 28',
        }
    ),
    av = Ig(
        or.createElement('path', {
            d: 'M9.1,8H12c0.6,0,1,0.4,1,1c0,0.5-0.4,0.9-0.9,1L12,10H9.1C9.1,10,9,10,9,10.1l0,0v12.8 C9,22.9,9,23,9.1,23l0,0h12.8c0.1,0,0.1,0,0.1-0.1l0,0V20c0-0.6,0.4-1,1-1c0.5,0,0.9,0.4,1,0.9l0,0.1v2.9c0,1.1-0.9,2-2,2.1l-0.2,0 H9.1c-1.1,0-2-0.9-2.1-2l0-0.2V10.1C7,9,7.9,8.1,9,8L9.1,8H12H9.1z M23,8L23,8C23,8,23.1,8,23,8L23,8c0.1,0,0.1,0,0.1,0 c0,0,0,0,0.1,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0.1,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0.1,0,0.1,0.1 c0,0,0.1,0.1,0.1,0.1l-0.1-0.1c0.1,0,0.1,0.1,0.2,0.2c0,0,0,0,0,0c0,0,0,0,0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0.1 c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0v6c0,0.6-0.4,1-1,1s-1-0.4-1-1 l0-3.6l-5.3,5.3c-0.4,0.4-0.9,0.4-1.3,0.1l-0.1-0.1c-0.4-0.4-0.4-1,0-1.4l5.3-5.3H17c-0.6,0-1-0.4-1-1s0.4-1,1-1H23z',
        }),
        {
            size: 32,
            viewBox: '0 0 32 32',
        }
    ),
    uv = Ig(
        or.createElement('path', {
            d: 'M6.00016621,0 C7.12163402,0 8.28315426,0.0427726124 9.32451723,0.128317837 C10.6862996,0.256635674 11.8077674,1.3687236 11.9279247,2.86576503 L11.9419904,3.12420162 L11.956542,3.45232027 C11.9709443,3.81219896 11.9854303,4.62906207 12,5.90290962 L11.9924956,6.31600096 C11.977667,7.03775237 11.9551008,7.68450676 11.9279247,8.13434446 C11.8077674,9.63138589 10.6862996,10.7434738 9.32451723,10.8717916 C8.37782362,10.94956 7.33182648,10.9919792 6.30689373,10.999049 L5.99764151,11 C4.87617369,11 3.71465345,10.9572274 2.67329048,10.8716822 C1.31150814,10.7433643 0.190040321,9.6312764 0.0698830554,8.13423497 L0.0558172934,7.87579838 L0.0457550959,7.6562875 C0.0262329791,7.1991234 0.0104183521,6.63676231 5.68434189e-14,6.03503125 L5.68434189e-14,4.96507823 L0.00805921385,4.55536166 C0.0228604772,3.88569725 0.0443346891,3.28876881 0.0698830554,2.86587451 C0.190040321,1.36883308 1.31150814,0.256745158 2.67329048,0.128427321 C3.61998409,0.050658935 4.66598123,0.00823981533 5.69091398,0.00116996205 L6.00016621,0 Z M5.99890396,2.09625899 L5.63224138,2.09797246 L5.27783939,2.1030162 C4.45156521,2.11836672 3.6307937,2.15878976 2.83350017,2.22428533 C2.39292353,2.26705794 2.07250415,2.60923884 2.03245173,3.03696496 L2.01890621,3.19047439 C1.98206093,3.64763807 1.95813669,4.28893573 1.94419461,4.99353581 L1.94419461,6.00657368 L1.95304386,6.39295036 C1.96958774,7.02332583 1.99526556,7.57926478 2.03245173,7.96314452 C2.07250415,8.39087065 2.39292353,8.73305155 2.83350017,8.77582416 C3.6307937,8.84131972 4.45156521,8.88174276 5.27783939,8.89709329 L5.63224138,8.90213703 L6.02318064,8.9038505 L6.36556633,8.90224651 C7.31125721,8.89289 8.25311494,8.85078571 9.16430754,8.77593364 C9.60488418,8.73316103 9.92530356,8.39098013 9.96535598,7.96325401 L9.9789015,7.80974458 C10.0240037,7.25013189 10.0497448,6.41461035 10.0615154,5.52480966 L10.0536131,4.99342632 L10.0447639,4.60704964 C10.02822,3.97667417 10.0025422,3.42073522 9.96535598,3.03685548 C9.92530356,2.60912935 9.60488418,2.26694845 9.16430754,2.22417584 C8.36701402,2.15868028 7.5462425,2.11825724 6.71996832,2.10290671 L6.36556633,2.09786297 L5.99890396,2.09625899 Z',
        }),
        {
            viewBox: '0 0 12 11',
        }
    ),
    sv = Ig(
        or.createElement(
            or.Fragment,
            null,
            or.createElement('path', {
                stroke: 'none',
                d: 'M0 0h24v24H0z',
                fill: 'none',
            }),
            or.createElement('path', {
                d: 'M9 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z',
            }),
            or.createElement('path', {
                d: 'M18 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z',
            })
        ),
        {
            size: 24,
            viewBox: '0 0 24 24',
        }
    ),
    lv = Ig(
        or.createElement('path', {
            d: 'M11.9502208,18.052661 L5.67804212,21.8414879 C4.48334142,22.4397237 3.08952393,21.243252 3.58731589,19.9470744 L5.77760051,14.2638342 L1.99438162,10.5747133 C0.998797707,9.67735963 1.59614806,7.98235815 2.98996554,7.98235815 L8.26656031,7.98235815 L10.5564033,2.89735372 C11.0541953,1.70088209 12.7466879,1.70088209 13.3440383,2.89735372 L15.6338813,7.98235815 L21.0100345,7.98235815 C22.4038519,7.98235815 23.0012023,9.67735963 22.0056184,10.5747133 L18.1228411,14.2638342 L20.3131257,19.9470744 C20.8109177,21.243252 19.4171002,22.4397237 18.1228411,21.7417819 L11.9502208,18.052661 Z M5.9767173,19.2491327 L11.2533121,16.1582476 L11.2533121,16.1582476 C11.6515456,15.9588357 12.248896,15.9588357 12.7466879,16.1582476 L18.0232827,19.2491327 L16.2312317,14.5629521 C16.0321149,13.9647163 16.2312317,13.3664805 16.6294652,12.9676566 L19.8153338,9.97647753 L15.4347645,9.97647753 C14.8374142,9.97647753 14.3396222,9.57765366 14.040947,9.07912381 L12.0497792,4.69206117 L10.0586114,9.07912381 C9.85949458,9.67735963 9.26214423,9.97647753 8.66479387,9.97647753 L4.28422464,9.97647753 L7.37053478,12.9676566 C7.76876835,13.3664805 7.96788513,13.9647163 7.76876835,14.5629521 L5.9767173,19.2491327 Z',
        }),
        {
            size: 24,
            viewBox: '0 0 24 24',
        }
    ),
    cv = Ig(
        or.createElement('path', {
            d: 'M13.3440383,2.89735372 L15.6338813,7.98235815 L21.0100345,7.98235815 C22.4038519,7.98235815 23.0012023,9.67735963 22.0056184,10.5747133 L18.1228411,14.2638342 L20.3131257,19.9470744 C20.8109177,21.243252 19.4171002,22.4397237 18.1228411,21.7417819 L11.9502208,18.052661 L5.67804212,21.8414879 C4.48334142,22.4397237 3.08952393,21.243252 3.58731589,19.9470744 L5.77760051,14.2638342 L1.99438162,10.5747133 C0.998797707,9.67735963 1.59614806,7.98235815 2.98996554,7.98235815 L8.26656031,7.98235815 L10.5564033,2.89735372 C11.0541953,1.70088209 12.7466879,1.70088209 13.3440383,2.89735372 Z M11.9999796,5.90483784 L11.9997933,16.0090226 L11.9997933,16.0090226 C12.2498258,16.0135115 12.5095533,16.0632532 12.7466879,16.1582476 L18.0232827,19.2491327 L16.2312317,14.5629521 C16.0321149,13.9647163 16.2312317,13.3664805 16.6294652,12.9676566 L19.8153338,9.97647753 L15.4347645,9.97647753 C14.8374142,9.97647753 14.3396222,9.57765366 14.040947,9.07912381 L12.4756278,5.79721856 C12.4161888,5.67259651 12.2669778,5.61975524 12.1423557,5.67919428 C12.0553736,5.72068079 11.9999814,5.80846865 11.9999796,5.90483784 Z',
        }),
        {
            size: 24,
            viewBox: '0 0 24 24',
        }
    ),
    dv = Ig(
        or.createElement('path', {
            d: 'M11.9502208,18.052661 L5.67804212,21.8414879 C4.48334142,22.4397237 3.08952393,21.243252 3.58731589,19.9470744 L5.77760051,14.2638342 L1.99438162,10.5747133 C0.998797707,9.67735963 1.59614806,7.98235815 2.98996554,7.98235815 L8.26656031,7.98235815 L10.5564033,2.89735372 C11.0541953,1.70088209 12.7466879,1.70088209 13.3440383,2.89735372 L15.6338813,7.98235815 L21.0100345,7.98235815 C22.4038519,7.98235815 23.0012023,9.67735963 22.0056184,10.5747133 L18.1228411,14.2638342 L20.3131257,19.9470744 C20.8109177,21.243252 19.4171002,22.4397237 18.1228411,21.7417819 L11.9502208,18.052661 Z',
        }),
        {
            size: 24,
            viewBox: '0 0 24 24',
        }
    ),
    pv = Ig(
        or.createElement(
            'g',
            null,
            or.createElement(
                'defs',
                null,
                or.createElement(
                    'linearGradient',
                    {
                        id: 'idIK4UgTvmeg90634330',
                        gradientTransform: 'rotate(40, 0.5, 0.5)',
                    },
                    or.createElement('stop', {
                        offset: '0',
                        stopColor: 'hsl(250, 12%, 92%)',
                        stopOpacity: '1',
                    }),
                    or.createElement('stop', {
                        offset: '1',
                        stopColor: 'hsl(250, 9%, 59%)',
                        stopOpacity: '1',
                    })
                )
            ),
            or.createElement('path', {
                d: 'M 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 Z M 10.909 3.636 C 10.591 2.79 9.394 2.79 9.076 3.636 L 7.784 7.285 L 4.361 7.285 L 4.249 7.291 C 3.413 7.379 3.06 8.455 3.735 9.015 L 6.276 11.134 L 4.983 14.585 L 4.95 14.685 C 4.728 15.52 5.655 16.235 6.417 15.757 L 10 13.518 L 13.584 15.758 L 13.675 15.81 C 14.449 16.193 15.335 15.427 15.018 14.585 L 13.724 11.134 L 16.266 9.015 L 16.348 8.939 C 16.935 8.336 16.517 7.285 15.64 7.285 L 12.216 7.285 Z',
                fill: 'url(#idIK4UgTvmeg90634330)',
            })
        ),
        {
            size: 20,
            viewBox: '0 0 20 20',
        }
    ),
    Dv = Ig(
        or.createElement(
            'g',
            null,
            or.createElement(
                'defs',
                null,
                or.createElement(
                    'linearGradient',
                    {
                        id: 'idBSRHZgMrgg688673678',
                        gradientTransform: 'rotate(40, 0.5, 0.5)',
                    },
                    or.createElement('stop', {
                        offset: '0',
                        stopColor: 'hsl(0, 0%, 60%)',
                        stopOpacity: '1',
                    }),
                    or.createElement('stop', {
                        offset: '1',
                        stopColor: 'hsl(250, 3%, 27%)',
                        stopOpacity: '1',
                    })
                )
            ),
            or.createElement('path', {
                d: 'M 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 Z M 10.909 3.636 C 10.591 2.79 9.394 2.79 9.076 3.636 L 7.784 7.285 L 4.361 7.285 L 4.249 7.291 C 3.413 7.379 3.06 8.455 3.735 9.015 L 6.276 11.134 L 4.983 14.585 L 4.95 14.685 C 4.728 15.52 5.655 16.235 6.417 15.757 L 10 13.518 L 13.584 15.758 L 13.675 15.81 C 14.449 16.193 15.335 15.427 15.018 14.585 L 13.724 11.134 L 16.266 9.015 L 16.348 8.939 C 16.935 8.336 16.517 7.285 15.64 7.285 L 12.216 7.285 Z',
                fill: 'url(#idBSRHZgMrgg688673678)',
            })
        ),
        {
            size: 20,
            viewBox: '0 0 20 20',
        }
    ),
    mv = Ig(
        or.createElement('path', {
            d: 'M16.7071068,8.29289322 L22.7071068,14.2928932 C23.0976311,14.6834175 23.0976311,15.3165825 22.7071068,15.7071068 C22.3466228,16.0675907 21.7793918,16.0953203 21.3871006,15.7902954 L21.2928932,15.7071068 L17,11.414 L17,24 C17,24.5128358 16.6139598,24.9355072 16.1166211,24.9932723 L16,25 C15.4871642,25 15.0644928,24.6139598 15.0067277,24.1166211 L15,24 L15,11.414 L10.7071068,15.7071068 C10.3466228,16.0675907 9.77939176,16.0953203 9.38710056,15.7902954 L9.29289322,15.7071068 C8.93240926,15.3466228 8.90467972,14.7793918 9.20970461,14.3871006 L9.29289322,14.2928932 L15.2928932,8.29289322 C15.6533772,7.93240926 16.2206082,7.90467972 16.6128994,8.20970461 L16.7071068,8.29289322 Z',
        }),
        {
            size: 32,
            viewBox: '0 0 32 32',
        }
    ),
    fv = Ig(
        or.createElement('path', {
            d: 'M13,5 C12.6507226,4.06859359 11.3332476,4.06859359 10.9839702,5 L9.56169322,9.01297783 L5.79696151,9.01349048 L5.67401787,9.01991222 C4.75420744,9.11733992 4.36646985,10.2993421 5.10776433,10.9170875 L7.90379021,13.2470899 L6.48068437,17.042909 L6.44523523,17.1536211 C6.20111897,18.0716011 7.22009485,18.8583236 8.05927515,18.3338359 L11.999026,15.869591 L15.9407249,18.3338359 L16.0421972,18.3905562 C16.8934525,18.812035 17.8667879,17.9695016 17.5193156,17.042909 L16.0953383,13.2470899 L18.8922357,10.9170875 L18.9825725,10.8334476 C19.6268187,10.1697532 19.1679877,9.01349048 18.2030385,9.01349048 L14.4374353,9.01297783 L13,5 Z',
        }),
        {
            size: 24,
            viewBox: '0 0 24 24',
        }
    ),
    hv = Ig(
        or.createElement(
            or.Fragment,
            null,
            or.createElement(
                'defs',
                null,
                or.createElement(
                    'linearGradient',
                    {
                        x1: '48.9819823%',
                        y1: '6.00107933%',
                        x2: '49.4888977%',
                        y2: '91.4572449%',
                        id: 'linearGradient-1',
                    },
                    or.createElement('stop', {
                        stopColor: '#57D163',
                        offset: '0%',
                    }),
                    or.createElement('stop', {
                        stopColor: '#23B33A',
                        offset: '100%',
                    })
                )
            ),
            or.createElement(
                'g',
                {
                    stroke: 'none',
                    strokeWidth: '1',
                    fill: 'none',
                    fillRule: 'evenodd',
                },
                or.createElement('path', {
                    d: 'M7.0758182,19.5104961 L7.40855824,19.7067288 C8.8060664,20.532418 10.4084293,20.9691988 12.0425029,20.9699399 L12.0459271,20.9699399 C17.0641233,20.9699399 21.1481165,16.9050769 21.1502014,11.9089978 C21.151094,9.4879544 20.2049808,7.2112695 18.4860473,5.49867957 C16.7831208,3.79269401 14.4653823,2.8358817 12.0495002,2.84150949 C7.02743319,2.84150949 2.94329115,6.90595273 2.94149516,11.9017354 C2.93903134,13.6076528 3.42157674,15.2794351 4.33335546,16.7238136 L4.54997146,17.0664798 L3.63006063,20.4098467 L7.0758182,19.5104961 Z M1,23 L2.55412674,17.3510469 C1.59565677,15.69789 1.09141046,13.822415 1.09200597,11.9009944 C1.09453688,5.89010752 6.00807254,1 12.046076,1 C14.9761237,1.00148212 17.7263281,2.13663801 19.7946759,4.19722978 C21.8630237,6.25782155 23.0010393,8.99677976 23,11.9097389 C22.9973174,17.9201811 18.0830373,22.8111779 12.0459271,22.8111779 L12.0411631,22.8111779 C10.2080409,22.8104368 8.40677836,22.3526099 6.80679751,21.4840874 L1,23 Z',
                    fill: '#B3B3B3',
                    fillRule: 'nonzero',
                }),
                or.createElement('path', {
                    d: 'M1,23 L2.55412689,17.3510469 C1.59400636,15.6938955 1.08968652,13.8140444 1.09200598,11.9009944 C1.09453689,5.89010752 6.00807303,1 12.0460771,1 C14.9761251,1.00148212 17.7263297,2.13663801 19.7946777,4.19722978 C21.8630257,6.25782155 23.0010414,8.99677976 23,11.9097389 C22.9973195,17.9201811 18.083039,22.8111779 12.0459282,22.8111779 L12.0411641,22.8111779 C10.2080418,22.8104368 8.40677908,22.3526099 6.80679808,21.4840874 L1,23 Z',
                    fill: '#FFFFFF',
                    fillRule: 'nonzero',
                }),
                or.createElement('path', {
                    d: 'M12.0035143,3 C7.03906248,3 3.00177538,7.0356158 3,11.9959654 C2.99756444,13.6897834 3.47457388,15.3497085 4.37589231,16.7838426 L4.5900232,17.1240784 L3.68066596,20.4438793 L7.08703957,19.5507603 L7.41596228,19.7456012 C8.79743766,20.5654341 10.3814176,20.999117 11.9967445,21 L12.0001294,21 C16.9607548,21 20.9980419,16.9639674 21,12.0033235 C21.0075216,9.6151253 20.0591815,7.32317914 18.3663659,5.63847101 C16.6829644,3.944495 14.3917527,2.99441171 12.0035143,3 L12.0035143,3 Z',
                    fill: '#000000',
                    fillRule: 'nonzero',
                }),
                or.createElement('path', {
                    d: 'M12.0035143,3 C7.03906248,3 3.00177538,7.03564906 3,11.9960392 C2.99756444,13.6898709 3.47457388,15.3498096 4.37589231,16.7839554 L4.5900232,17.1243411 L3.68066596,20.4440219 L7.08703957,19.5508956 L7.41596228,19.7457381 C8.79743766,20.5655777 10.3814176,20.999117 11.9967445,21 L12.0001294,21 C16.9607548,21 20.9980419,16.9639345 21,12.0032501 C21.0075216,9.61503244 20.0591815,7.32306758 18.3663659,5.63834571 C16.6829401,3.94440988 14.3917314,2.99437308 12.0035143,3 L12.0035143,3 Z',
                    fill: 'url(#linearGradient-1)',
                    fillRule: 'nonzero',
                }),
                or.createElement('path', {
                    d: 'M9.79681271,7.46450685 C9.59394883,7.02279965 9.38048539,7.01385295 9.18777943,7.00620497 L8.66898967,7 C8.48850265,7 8.19524805,7.06637874 7.94733602,7.33189368 C7.699424,7.59740863 7,8.23911785 7,9.54432584 C7,10.8495338 7.9698601,12.1107298 8.10500454,12.2879322 C8.24014898,12.4651345 9.97729973,15.2289431 12.7283282,16.2923016 C15.014448,17.1760046 15.4796511,17.0002453 15.976064,16.956089 C16.4724769,16.9119327 17.5773343,16.3143798 17.8027222,15.694893 C18.0281102,15.0754062 18.0282574,14.5446649 17.9606851,14.433697 C17.8931129,14.3227291 17.7126259,14.2567832 17.4417482,14.1240258 C17.1708704,13.9912683 15.8404779,13.3495591 15.5924187,13.2609579 C15.3443595,13.1723567 15.1640197,13.1283447 14.9833854,13.3938597 C14.8027512,13.6593746 14.2846975,14.2566389 14.1267346,14.433697 C13.9687716,14.6107551 13.8111031,14.6329775 13.5402254,14.5003643 C13.2693476,14.3677512 12.3978279,14.0875175 11.3637816,13.1837565 C10.5592452,12.4805748 10.0161648,11.6121678 9.85805463,11.3467971 C9.69994447,11.0814265 9.84127199,10.9377021 9.97700529,10.8055218 C10.0984586,10.6866173 10.2475886,10.4957063 10.3831747,10.3408707 C10.5187608,10.1860351 10.5633673,10.0753557 10.6534636,9.89858627 C10.7435599,9.72181681 10.6986589,9.56654828 10.6309395,9.43393511 C10.5632201,9.30132194 10.0373639,7.98933178 9.79681271,7.46465116',
                    fill: '#FFFFFF',
                })
            )
        ),
        {
            size: 24,
            viewBox: '0 0 24 24',
        }
    );
var gv = {};
Object.defineProperty(gv, '__esModule', {
    value: !0,
}),
    (gv.linkify = void 0);
var vv = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    })(),
    Cv = xv(or),
    bv = xv(je),
    Ev = xv(Ne),
    yv = xv(Xc);

function xv(e) {
    return e && e.__esModule
        ? e
        : {
              default: e,
          };
}

function Fv(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
}
var wv = (gv.linkify = new bv.default());
wv.tlds(Ev.default);
var Av = (function () {
    function e() {
        var t, n, r;
        !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, e);
        for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
        return (
            (n = r = Fv(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(i)))),
            (r.parseCounter = 0),
            Fv(r, n)
        );
    }
    return (
        (function (e, t) {
            if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                },
            })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(e, Cv.default.Component),
        vv(e, [
            {
                key: 'getMatches',
                value: function (e) {
                    return wv.match(e);
                },
            },
            {
                key: 'parseString',
                value: function (t) {
                    var n = this,
                        r = [];
                    if ('' === t) return r;
                    var o = this.getMatches(t);
                    if (!o) return t;
                    var i = 0;
                    return (
                        o.forEach(function (o, a) {
                            o.index > i && r.push(t.substring(i, o.index));
                            var u = {
                                href: o.url,
                                key: 'parse' + n.parseCounter + 'match' + a,
                            };
                            for (var s in n.props.properties) {
                                var l = n.props.properties[s];
                                l === e.MATCH && (l = o.url), (u[s] = l);
                            }
                            r.push(Cv.default.createElement(n.props.component, u, o.text)), (i = o.lastIndex);
                        }),
                        i < t.length && r.push(t.substring(i)),
                        1 === r.length ? r[0] : r
                    );
                },
            },
            {
                key: 'parse',
                value: function (e) {
                    var t = this,
                        n = e;
                    return (
                        'string' == typeof e
                            ? (n = this.parseString(e))
                            : Cv.default.isValidElement(e) && 'a' !== e.type && 'button' !== e.type
                              ? (n = Cv.default.cloneElement(
                                    e,
                                    {
                                        key: 'parse' + ++this.parseCounter,
                                    },
                                    this.parse(e.props.children)
                                ))
                              : e instanceof Array &&
                                (n = e.map(function (e) {
                                    return t.parse(e);
                                })),
                        n
                    );
                },
            },
            {
                key: 'render',
                value: function () {
                    this.parseCounter = 0;
                    var e = this.parse(this.props.children);
                    return Cv.default.createElement(
                        'span',
                        {
                            className: this.props.className,
                        },
                        e
                    );
                },
            },
        ]),
        e
    );
})();
(Av.MATCH = 'LINKIFY_MATCH'),
    (Av.propTypes = {
        className: yv.default.string,
        component: yv.default.any,
        properties: yv.default.object,
        urlRegex: yv.default.object,
        emailRegex: yv.default.object,
    }),
    (Av.defaultProps = {
        className: 'Linkify',
        component: 'a',
        properties: {},
    });
var Bv = (gv.default = Av);

function kv(e) {
    return kv
        .raw(e)
        .split(' ')
        .map(function (e) {
            return parseInt(e).toString(16);
        })
        .join(' ');
}
kv.raw = function (e) {
    if (1 === e.length) return e.charCodeAt(0).toString();
    if (e.length > 1) {
        for (var t = [], n = 0; n < e.length; n++)
            e.charCodeAt(n) >= 55296 && e.charCodeAt(n) <= 56319
                ? e.charCodeAt(n + 1) >= 56320 &&
                  e.charCodeAt(n + 1) <= 57343 &&
                  t.push(1024 * (e.charCodeAt(n) - 55296) + (e.charCodeAt(n + 1) - 56320) + 65536)
                : (e.charCodeAt(n) < 55296 || e.charCodeAt(n) > 57343) && t.push(e.charCodeAt(n));
        return t.join(' ');
    }
    return '';
};
const Sv = cr(kv),
    Tv = /\s/g,
    Lv = () => null,
    Pv = {
        name: '14c9nf6',
        styles: 'width:1.75em;height:1.75em;margin:-1px;vertical-align:middle!important;display:inline!important',
    },
    Mv = e => {
        let { emoji: t } = e;
        const n = Sv(t).toUpperCase().replace(Tv, '-');
        return wu(
            Am,
            {
                alt: t,
                css: Pv,
                src: 'https://cdn.livechat-static.com/api/file/lc/img/emoji-fallback/' + n + '.svg',
            },
            Lv
        );
    },
    Ov = or.memo(Mv);
const Iv = cr(function () {
        return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]/g;
    }),
    zv = () => new RegExp('(' + Iv().source + ')');
var _v,
    Rv,
    jv,
    Nv = {
        exports: {},
    };
const Wv = cr(
        (Nv.exports =
            ((_v = function (e) {
                return Array.prototype.toString.call(e);
            }),
            (Rv = function (e, t) {
                try {
                    var n = document.createElement('canvas');
                    (n.width = 1), (n.height = 1);
                    var r = n.getContext('2d');
                    return (
                        (r.textBaseline = 'top'),
                        (r.font = '100px -no-font-family-here-'),
                        (r.fillStyle = t),
                        r.scale(0.01, 0.01),
                        r.fillText(e, 0, 0),
                        r.getImageData(0, 0, 1, 1).data
                    );
                } catch (gm) {
                    return !1;
                }
            }),
            (jv = function (e, t) {
                var n = _v(e);
                return n === _v(t) && '0,0,0,0' !== n;
            }),
            function (e) {
                var t = Rv(e, '#000'),
                    n = Rv(e, '#fff');
                return t && n && jv(t, n);
            }))
    ),
    Vv = 'msCrypto' in window,
    Uv = zv(),
    Hv = e =>
        e.split(Uv).map((e, t) => {
            return t % 2 == 1 && ((n = e), Vv || !Wv(n))
                ? or.createElement(Ov, {
                      key: t,
                      emoji: e,
                  })
                : e;
            var n;
        }),
    qv = e =>
        or.Children.map(e, e => {
            var t;
            return 'string' == typeof e
                ? Hv(e)
                : or.Children.count(null == e || null == (t = e.props) ? void 0 : t.children)
                  ? or.cloneElement(e, void 0, qv(e.props.children))
                  : e;
        }),
    Gv = e => {
        let { children: t } = e;
        return 'string' == typeof t ? Hv(t) : t ? qv(t) : null;
    },
    Kv = or.memo(Gv),
    Yv = [
        'livechat-files.com',
        'join.zoho.in',
        'get.teamviewer.com',
        'lisiewski.com',
        'neat.no',
        'zalaczniki.play.pl',
        'uj.ac.za',
        'wpx.net',
    ];
const Zv = Rr(
        (e, t, n) => e + ':' + t + ':' + n,
        function (e, t, n) {
            if (!e) return e;
            try {
                const r = new URL(e);
                if (Yv.some(e => r.host.includes(e))) return e;
                if (r.searchParams.toString().includes('utm_')) return e;
                const o = () => {
                    try {
                        return t ? new URL(t).host : '';
                    } catch (e) {
                        return '';
                    }
                };
                return (
                    r.searchParams.set('utm_medium', 'chat'),
                    r.searchParams.set('utm_campaign', 'link-shared-in-chat'),
                    r.searchParams.set('utm_source', n ? 'text.com' : 'livechat.com'),
                    r.searchParams.set('utm_content', o()),
                    r.toString()
                );
            } catch (r) {
                return e;
            }
        }
    ),
    Xv = ['href'],
    $v = e => e.stopPropagation(),
    Jv = jD('a', {
        target: 'ecc17ou0',
    })({
        name: 'c5z5om',
        styles: 'color:inherit;&:focus{outline-offset:-1px;}',
    }),
    Qv = e => {
        let { href: t } = e,
            n = ur(e, Xv);
        const r = el(),
            o = ni(e => e.getApplicationState('defaultWidget')),
            i = ni(e => {
                var t;
                return null == (t = e.getApplicationState().page) ? void 0 : t.url;
            }),
            a = ni(e => e.getApplicationState().config.features.utmParams.enabled),
            u = ni(We);
        return or.createElement(
            Jv,
            ir(
                {
                    rel: 'nofollow noopener',
                    target: '_blank',
                    textWrap: !0,
                    href: 'livechat' === o && a ? Zv(t, i, u) : t,
                },
                n,
                {
                    onClick: $v,
                },
                r
            )
        );
    },
    eC = function (e) {
        return (
            void 0 === e && (e = 3),
            Bu(
                '-webkit-line-clamp:',
                e,
                ';-webkit-box-orient:vertical;-webkit-box-pack:center;display:-webkit-box;text-overflow:ellipsis;overflow:hidden;'
            )
        );
    },
    tC = (e, t) => ('light' === e ? qe(0.65, t) : Ge(0.8, t)),
    nC = (e, t) => ('light' === e ? Ue(0.03, t, He[75]) : Ue(0.025, t, He[700])),
    rC = e => Ve(e) > 0.99;

function oC(e) {
    var t;
    const n = window.getComputedStyle(e),
        r = null != (t = e.textContent) ? t : '',
        o = n.fontWeight + ' ' + n.fontStyle + ' ' + n.fontSize + ' ' + n.fontFamily,
        i = document.createElement('canvas'),
        a = i.getContext('2d');
    if (!a) return i.remove(), 0;
    a.font = o;
    const u = a.measureText(r).width;
    return i.remove(), Math.ceil(u);
}
const iC = ['size', 'useCurrentColor', 'adjustToColor', 'ariaLabel', 'progress'];
var aC, uC, sC;
const lC = ku(
        uC ||
            (uC = si([
                '\n  0% {\n    transform: rotate(-90deg);\n  }\n  100% {\n    transform: rotate(270deg);\n  }\n',
            ]))
    ),
    cC = ku(
        sC ||
            (sC = si(['\n  0% {\n    stroke-dasharray: 1 1000;\n  }\n 100% {\n    stroke-dasharray: 100 1000;\n  }\n']))
    ),
    dC = jD('circle', {
        target: 'e5pj4iq3',
    })(
        'animation-duration:1s;transform-origin:center;animation-name:',
        e => {
            return (
                (t = e.animationFactor),
                ku(
                    aC ||
                        (aC = si([
                            '\n  0% {\n    stroke-dasharray: ',
                            ' ',
                            ';\n  }\n  50% {\n    stroke-dasharray: ',
                            ' ',
                            ';\n  }\n  100% {\n    stroke-dasharray: ',
                            ' ',
                            ';\n  }\n',
                        ])),
                    22 * t,
                    1e3 * t,
                    88 * t,
                    1e3 * t,
                    22 * t,
                    1e3 * t
                )
            );
            var t;
        },
        ',',
        lC,
        ';animation-iteration-count:infinite;animation-timing-function:linear;'
    ),
    pC = jD('circle', {
        target: 'e5pj4iq2',
    })(
        'stroke-dasharray:130;transform-origin:center;transform:rotate(-90deg);transition:stroke-dashoffset 100ms ',
        e => {
            let { theme: t } = e;
            return t.transitions.easings.linear;
        },
        ';'
    ),
    DC = jD('circle', {
        target: 'e5pj4iq1',
    })(
        'transform:rotate(-90deg);stroke-dasharray:1 100;animation-duration:',
        e => e.duration,
        'ms;animation-delay:',
        e => e.delay,
        'ms;transform-origin:center;animation-name:',
        cC,
        ';animation-timing-function:linear;animation-fill-mode:forwards;'
    ),
    mC = {
        r: '28',
        cx: '32',
        cy: '32',
        fill: 'none',
        strokeLinecap: 'round',
    },
    fC = {
        small: {
            sideLength: 16,
            strokeWidth: 2,
        },
        medium: {
            sideLength: 24,
            strokeWidth: 3,
        },
        large: {
            sideLength: 32,
            strokeWidth: 4,
        },
        xlarge: {
            sideLength: 56,
            strokeWidth: 4,
        },
    },
    hC = jD('svg', {
        target: 'e5pj4iq0',
    })(''),
    gC = e => {
        let { size: t, progress: n, strokeColor: r } = e;
        const { sideLength: o, strokeWidth: i } = fC[t];
        return void 0 === n
            ? or.createElement(
                  dC,
                  ir({}, mC, {
                      strokeWidth: i,
                      stroke: r,
                      vectorEffect: 'non-scaling-stroke',
                      animationFactor: o / 56,
                  })
              )
            : 'number' == typeof n
              ? or.createElement(
                    pC,
                    ir({}, mC, {
                        strokeWidth: i,
                        stroke: r,
                        vectorEffect: 'non-scaling-stroke',
                    })
                )
              : 'auto' === n.type
                ? or.createElement(
                      DC,
                      ir({}, mC, {
                          strokeWidth: i,
                          stroke: r,
                          vectorEffect: 'non-scaling-stroke',
                          duration: n.duration,
                          delay: n.delay,
                      })
                  )
                : null;
    },
    vC = e => {
        let { size: t, useCurrentColor: n, adjustToColor: r, ariaLabel: o, progress: i } = e,
            a = ur(e, iC);
        const u = bu(),
            s = ti(),
            l = r || u.colors.surface,
            c = Ke(l) ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
            { sideLength: d, strokeWidth: p } = fC[t],
            D = el(),
            m = or.useMemo(() => {
                if (n) return 'currentColor';
                const e = Ke(u.colors.cta) ? qe(0.6, u.colors.cta) : u.colors.cta;
                return Ke(l) ? e : u.colors.grayscale[0];
            }, [l, n, u.colors.cta, u.colors.grayscale]);
        return or.createElement(
            hC,
            ir(
                {
                    height: d + 'px',
                    width: d + 'px',
                    viewBox: '0 0 64 64',
                    role: 'img',
                    'aria-live': 'assertive',
                    'aria-labelledby': 'loader-label',
                },
                a,
                D
            ),
            or.createElement(
                'title',
                {
                    id: 'loader-label',
                },
                null != o ? o : s.localize('loading')
            ),
            or.createElement(
                'circle',
                ir({}, mC, {
                    strokeWidth: p,
                    stroke: c,
                    vectorEffect: 'non-scaling-stroke',
                })
            ),
            or.createElement(gC, {
                progress: i,
                size: t,
                strokeColor: m,
            })
        );
    },
    CC = ['children', 'destructive', 'disabled', 'pending'],
    bC = e => Bu('color:', e.colors.disabledContrast, ';background-color:', e.colors.disabled, ';'),
    EC = (e, t, n) => (e ? t.disabled : n),
    yC = jD('button', {
        displayType: 'Button',
        target: 'esv0owm2',
    })(
        'font-size:inherit;font-weight:700;border:0;font-family:inherit;width:100%;max-width:320px;flex-shrink:0;cursor:pointer;display:flex;justify-content:center;align-items:center;outline-offset:2px;',
        e => {
            let {
                capitalize: t,
                textColor: n,
                backgroundColor: r,
                disabled: o,
                theme: { spaceBase: i, typography: a, borderRadius: u, colors: s, variant: l },
            } = e;
            return ir(
                {
                    borderRadius: u.xl,
                },
                a.basicContrast,
                {
                    fontWeight: 'bold',
                    padding: 1.5 * i + 'px',
                    color: n,
                    backgroundColor: '' + EC(o, s, r),
                },
                o
                    ? {
                          '&:hover': {
                              cursor: 'default',
                          },
                      }
                    : {},
                t
                    ? {
                          textTransform: 'capitalize',
                      }
                    : {},
                'light' === l &&
                    rC(r) && {
                        border: '1px solid ' + s.grayscale[100],
                    },
                'dark' === l &&
                    s.cta === s.surface && {
                        border: '1px solid ' + s.grayscale[600],
                    }
            );
        },
        ' ',
        e => {
            let { disabled: t, theme: n } = e;
            return t && bC(n);
        },
        ';'
    ),
    xC = jD('span', {
        target: 'esv0owm1',
    })(
        'display:flex;',
        e => {
            let { theme: t } = e;
            return Bu('margin-', t.isRtl ? 'right' : 'left', ':0.5em;');
        },
        ';'
    ),
    FC = jD('span', {
        target: 'esv0owm0',
    })(''),
    wC = e => {
        let { children: t, destructive: n, disabled: r = !1, pending: o = !1 } = e,
            i = ur(e, CC);
        const a = bu(),
            u = n ? a.colors.error : a.colors.cta,
            s = n ? a.colors.errorContrast : a.colors.ctaText,
            l = el();
        return or.createElement(
            yC,
            ir({}, l, i, {
                disabled: r || o,
                textColor: s,
                backgroundColor: u,
            }),
            or.createElement(
                FC,
                {
                    ellipsis: !0,
                },
                t
            ),
            o &&
                or.createElement(
                    xC,
                    {
                        'aria-hidden': !0,
                    },
                    or.createElement(vC, {
                        size: 'small',
                        adjustToColor: a.colors.disabled,
                        useCurrentColor: !0,
                    })
                )
        );
    },
    AC = e => {
        let { color: t, backgroundColor: n, hoverBackgroundColor: r } = e;
        return Bu('color:', t, ';background-color:', n, ';&:hover{color:', t, ';background-color:', r, ';}');
    },
    BC = (e, t) => (rC(t) ? qe(0.03, t) : Ke(e) ? qe(0.25, t) : Ye(0.1, t)),
    kC = (e, t) =>
        'light' === e.variant && 'primary' === t && rC(e.colors.cta)
            ? '1px solid ' + e.colors.grayscale[100]
            : 'dark' === e.variant && 'primary' === t && e.colors.cta === e.colors.surface
              ? '1px solid ' + e.colors.grayscale[600]
              : 'none !important',
    SC = jD(sh, {
        target: 'e1osmd0p1',
    })(
        'padding:',
        e => {
            let { theme: t } = e;
            return t.spaces.space3;
        },
        ';padding-bottom:',
        e => {
            let { theme: t } = e;
            return 'calc(' + t.spaces.space3 + ' + 1px)';
        },
        ';overflow:hidden;white-space:nowrap;text-overflow:ellipsis;border:',
        e => {
            let { theme: t, variant: n } = e;
            return kC(t, n);
        },
        ';width:100%;display:block;outline-offset:2px;transition:background-color 300ms ',
        e => {
            let { theme: t } = e;
            return t.transitions.smooth;
        },
        ';',
        e => {
            let { theme: t, variant: n, disabled: r } = e;
            return Bu(
                t.typography.input,
                ';font-weight:700;border-radius:',
                'modern' === t.name ? t.borderRadius.sm : t.borderRadius.xl,
                '!important;',
                (!n || 'default' === n) &&
                    AC(
                        'light' === t.variant
                            ? {
                                  color: tC('light', t.colors.cta),
                                  backgroundColor: nC('light', t.colors.cta),
                                  hoverBackgroundColor: qe(0.07, nC('light', t.colors.cta)),
                              }
                            : {
                                  color: tC('dark', t.colors.cta),
                                  backgroundColor: nC('dark', t.colors.cta),
                                  hoverBackgroundColor: Ye(0.03, nC('dark', t.colors.cta)),
                              }
                    ),
                ' ',
                'primary' === n &&
                    AC({
                        color: t.colors.ctaText,
                        backgroundColor: t.colors.cta,
                        hoverBackgroundColor: BC(t.colors.ctaText, t.colors.cta),
                    }),
                ' ',
                'danger' === n &&
                    AC({
                        color: t.colors.errorContrast,
                        backgroundColor: t.colors.error,
                        hoverBackgroundColor: BC(t.colors.errorContrast, t.colors.error),
                    }),
                ' ',
                'secondary' === n &&
                    AC({
                        color: t.colors.primaryTextColor,
                        backgroundColor: t.colors.secondaryButtonBackground,
                        hoverBackgroundColor: t.colors.secondaryButtonBackgroundHover,
                    }),
                ' ',
                r && bC(t),
                ';'
            );
        },
        ' &:hover{border:',
        e => {
            let { theme: t, variant: n } = e;
            return kC(t, n);
        },
        ';cursor:pointer;}&[disabled]{pointer-events:none;}'
    );
const TC = jD(sh, {
        target: 'e1osmd0p0',
    })(
        'padding:6px 4px;width:100%;height:32px;overflow:hidden;font-weight:400;white-space:nowrap;text-overflow:ellipsis;border:none;',
        e => {
            let { theme: t } = e;
            return AC({
                color: 'light' === t.variant ? qe(0.6, t.colors.cta) : Ye(0.2, t.colors.cta),
                backgroundColor: Ye(0.02, t.colors.surfaceVariant),
                hoverBackgroundColor: Ye(0.01, t.colors.surfaceVariant),
            });
        },
        ';'
    ),
    LC = ['replies', 'onSelect', 'disabled'],
    PC = {
        name: '1yjrpym',
        styles: 'margin:0 5px;margin-bottom:10px;padding:8px;border-radius:6px!important',
    },
    MC = jD(Lh, {
        target: 'ecz5hmt0',
    })(
        'font-family:inherit;font-size:0.9em;',
        e => {
            let { theme: t } = e;
            return Bu(
                'color:',
                t.colors.primaryTextColor,
                ';border-color:',
                t.colors.cta,
                ';background-color:',
                t.colors.surface,
                ';box-shadow:0 5px 12px -3px ',
                Ze('dark' === t.variant ? 0.6 : 0.8, t.colors.cta),
                ';transition:box-shadow 0.1s ease-in,transform 0.1s ease-in;&:hover{box-shadow:0 5px 12px -3px ',
                Ze('dark' === t.variant ? 0.8 : 0.9, t.colors.cta),
                ';transform:scale(1.05);}&:disabled{cursor:not-allowed;transform:none;opacity:0.6;}'
            );
        },
        ';'
    ),
    OC = e => e.stopPropagation(),
    IC = e => {
        let { replies: t, onSelect: n, disabled: r } = e,
            o = ur(e, LC);
        const i = el();
        return wu(
            Ih,
            ir(
                {
                    onSelect: n,
                },
                o,
                i
            ),
            t.map((e, t) => {
                let { text: n } = e;
                return wu(
                    MC,
                    {
                        key: t,
                        onClick: OC,
                        value: t,
                        css: PC,
                        disabled: r,
                    },
                    wu(Kv, null, n.length > 20 ? n.slice(0, 20).trim() + '…' : n)
                );
            })
        );
    },
    zC = jD('li', {
        target: 'e52g9ij3',
    })(
        'margin-bottom:',
        e => {
            let { theme: t } = e;
            return t.spaces.space3;
        },
        ';width:',
        e => {
            let { fullWidth: t } = e;
            return t ? '100%' : 'auto';
        },
        ';',
        e => {
            let { compact: t } = e;
            return t && Bu(PC, ' padding:0;flex-grow:1;');
        },
        ';'
    ),
    _C = jD('ul', {
        target: 'e52g9ij2',
    })(
        'list-style:none;display:flex;flex-direction:column;margin:0;padding:1em;',
        e => {
            let { compact: t, theme: n } = e;
            return t && Bu('flex:1;padding:', n.spaces.space3, ';flex-wrap:wrap;flex-direction:row;');
        },
        ' &>',
        zC,
        ':last-of-type{margin-bottom:',
        e => {
            let { theme: t, compact: n } = e;
            return n ? t.spaces.space3 : 0;
        },
        ';}'
    ),
    RC = jD('div', {
        target: 'e52g9ij1',
    })(
        'margin:0;padding:1em;',
        e => {
            let { compact: t, theme: n } = e;
            return t && Bu('padding:', n.spaces.space3, ';padding-bottom:', n.spaces.space2, ';');
        },
        ';'
    ),
    jC = jD('div', {
        target: 'e52g9ij0',
    })(e => {
        let { compact: t } = e;
        return t && Bu(PC, ' padding:0;');
    }, ';'),
    NC = jD('div', {
        target: 'e7yhn050',
    })(
        'background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.surface;
        },
        ';border-radius:20px;'
    ),
    WC = jD(NC, {
        target: 'ezxewqd1',
    })(
        'display:flex;overflow:hidden;overflow-y:auto;flex-direction:column;width:230px;max-width:100%;margin-bottom:0.1em;',
        e => {
            let { theme: t } = e;
            return 'smooth' === t.name
                ? Bu('box-shadow:', t.boxShadow.xs, ';')
                : Bu('border:1px solid ', t.colors.divider, ';');
        },
        ';'
    ),
    VC = jD('div', {
        target: 'ezxewqd0',
    })(
        'display:flex;flex-direction:column;width:230px;min-width:0%;max-width:100%;color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';',
        e => {
            let { narrow: t } = e;
            return (
                t && {
                    flex: 2,
                }
            );
        },
        ';'
    ),
    UC = jD('div', {
        target: 'eztkvdh2',
    })({
        name: 'o30wb6',
        styles: 'padding:1em;&:active{outline:none;}',
    });
var HC = {
        name: '1ips8vy',
        styles: 'font-size:1.5em;line-height:1.1em',
    },
    qC = {
        name: 'c2kajh',
        styles: 'font-size:1.2em;line-height:1.1em',
    },
    GC = {
        name: '19nvpx5',
        styles: 'font-size:1em;line-height:1.2em',
    };
const KC = e => {
        let { textLength: t, dynamicSizing: n } = e;
        return !n || !t || t >= 40 ? GC : t >= 30 ? qC : HC;
    },
    YC = jD('h2', {
        target: 'eztkvdh1',
    })('margin:0;margin-bottom:8px;font-weight:400;text-wrap:pretty;', KC, ';'),
    ZC = jD('p', {
        target: 'eztkvdh0',
    })(
        'margin:0;color:',
        e => {
            let { theme: t } = e;
            return t.colors.secondaryTextColor;
        },
        ';'
    ),
    XC = jD('div', {
        target: 'epch3w90',
    })(
        'padding:5px;margin-bottom:5px;text-align:center;border:1px solid ',
        e => {
            let { theme: t } = e;
            return t.colors.secondaryTextColor;
        },
        ';border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.sm;
        },
        ';'
    ),
    $C = ['url', 'link', 'alternativeText'],
    JC = {
        name: 'idj2s4',
        styles: 'object-fit:cover;width:100%;height:100%',
    },
    QC = {
        name: 'je8g23',
        styles: 'pointer-events:none',
    },
    eb = jD('div', {
        target: 'ex5d4ma0',
    })(
        'overflow:hidden;width:100%;min-height:150px;border-top-left-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.md;
        },
        ';border-top-right-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.md;
        },
        ';'
    ),
    tb = e => {
        let { url: t, link: n, alternativeText: r = '' } = e,
            o = ur(e, $C);
        const i = wu(
            eb,
            null,
            wu(
                Am,
                ir(
                    {
                        alt: r,
                        src: t,
                        css: JC,
                    },
                    o
                )
            )
        );
        return n
            ? wu(
                  Qv,
                  {
                      href: n,
                      css: QC,
                  },
                  i
              )
            : i;
    },
    nb = ['type', 'value', 'role'],
    rb = ['type', 'value', 'role', 'target'],
    ob = ['type', 'value', 'role'],
    ib = ['type', 'value', 'role'],
    ab = ['type', 'role'];
const ub = ['card', 'flattenActionButtons', 'onButtonClick', 'onShowMoreButtonClick', 'TitleComponent', 'onImageLoad'],
    sb = ['text', 'type', 'value'],
    lb = {
        name: '1y4r7fy',
        styles: 'padding-top:0.5em',
    },
    cb = {
        name: '1p6jvwd',
        styles: 'padding-bottom:0.5em',
    },
    db = e => {
        let {
                card: t,
                flattenActionButtons: n = !1,
                onButtonClick: r = ar,
                onShowMoreButtonClick: o,
                TitleComponent: i = YC,
                onImageLoad: a,
            } = e,
            u = ur(e, ub);
        const s = el(),
            l = or.useRef(null),
            c = or.useMemo(
                () =>
                    n && t.buttons
                        ? ir({}, t, {
                              buttons: t.buttons
                                  .filter(e => 'cancel' !== e.type)
                                  .map(e =>
                                      'primary' === e.role
                                          ? ir({}, e, {
                                                role: 'default',
                                            })
                                          : e
                                  ),
                          })
                        : t,
                [t, n]
            ),
            {
                title: d,
                subtitle: p,
                image: D,
                buttons: m = [],
            } = (function (e) {
                return e.buttons
                    ? ir({}, e, {
                          buttons: e.buttons.map(e => {
                              switch (e.type) {
                                  case 'phone': {
                                      const { value: t, role: n } = e,
                                          r = ur(e, nb);
                                      return ir({}, r, {
                                          href: 'tel:' + t,
                                          target: '_parent',
                                          variant: n,
                                      });
                                  }
                                  case 'url': {
                                      const { value: t, role: n, target: r } = e,
                                          o = ur(e, rb);
                                      return ir(
                                          {},
                                          o,
                                          'invitation' in e
                                              ? {
                                                    variant: n,
                                                }
                                              : {
                                                    href: t,
                                                    target: 'current' === r ? '_parent' : '_blank',
                                                    variant: n,
                                                }
                                      );
                                  }
                                  case 'copy': {
                                      const { type: t, value: n, role: r } = e,
                                          o = ur(e, ob);
                                      return ir({}, o, {
                                          type: t,
                                          value: n,
                                          variant: r,
                                      });
                                  }
                                  default: {
                                      if ('value' in e) {
                                          const { role: t } = e,
                                              n = ur(e, ib);
                                          return ir({}, n, {
                                              variant: t,
                                          });
                                      }
                                      const { role: t } = e,
                                          n = ur(e, ab);
                                      return ir({}, n, {
                                          variant: t,
                                      });
                                  }
                              }
                          }),
                      })
                    : e;
            })(c),
            f = d || p,
            h = !!o,
            g = h && m.length > 3,
            v = m.length > 1,
            C = v ? _C : RC,
            b = v ? zC : jC,
            E = m.find(e => 'copy' === e.type);
        return wu(
            WC,
            ir(
                {
                    ref: l,
                },
                u
            ),
            D &&
                wu(
                    tb,
                    ir(
                        {},
                        D,
                        'function' == typeof a &&
                            Uu({
                                onLoad: a,
                            })
                    )
                ),
            wu(
                VC,
                null,
                f &&
                    wu(
                        Bv,
                        {
                            component: Qv,
                        },
                        wu(
                            UC,
                            ir(
                                {
                                    css: [!X(m) && cb, ''],
                                },
                                s
                            ),
                            E &&
                                wu(
                                    XC,
                                    {
                                        ellipsis: !0,
                                    },
                                    E.value
                                ),
                            d &&
                                wu(
                                    i,
                                    {
                                        textWrap: !0,
                                        preserveLines: !0,
                                        textLength: d.length,
                                        dynamicSizing: !!p,
                                    },
                                    wu(Kv, null, d)
                                ),
                            p &&
                                wu(
                                    ZC,
                                    {
                                        textWrap: !0,
                                        preserveLines: !0,
                                    },
                                    wu(Kv, null, p)
                                )
                        )
                    ),
                !X(m) &&
                    wu(
                        C,
                        {
                            css: f && lb,
                            compact: !!o,
                        },
                        (g ? m.slice(0, 3) : m).map((e, t) => {
                            let { text: n, type: o, value: i } = e,
                                a = ur(e, sb);
                            const u = n.length > 20 ? n.slice(0, 20).trim() + '…' : n;
                            return wu(
                                b,
                                {
                                    key: t,
                                    compact: h,
                                    fullWidth: 'copy' === o,
                                },
                                wu(ai, null, e =>
                                    wu(
                                        SC,
                                        ir(
                                            {
                                                label: wu(Kv, null, u),
                                            },
                                            a,
                                            h && {
                                                isFocusVisible: !0,
                                            },
                                            Uu({
                                                onPress: e => {
                                                    r(t, e);
                                                },
                                            }),
                                            'copy' === o && {
                                                'data-lc-action': 'copy',
                                                'data-lc-action-value': i,
                                                'data-lc-action-success': e('copied') || 'Copied!',
                                            }
                                        )
                                    )
                                )
                            );
                        })
                    ),
                g &&
                    wu(ai, null, e =>
                        wu(
                            TC,
                            ir(
                                {
                                    label: e('show_more'),
                                },
                                Uu({
                                    onPress: () => (null == o ? void 0 : o()),
                                }),
                                h && {
                                    isFocusVisible: !0,
                                }
                            )
                        )
                    )
            )
        );
    },
    pb = 'overlay_portal_container',
    Db = 'tooltip_portal_container',
    mb = 'rate-good-button',
    fb = 'rate-bad-button',
    hb = 'start-chat-button',
    gb = 'agent-bar',
    vb = 'modal',
    Cb = 'minimize',
    bb = 'quick-replies-container',
    Eb = 'privacy-policy-banner-close-button',
    yb = 'notification-plane',
    xb = 'message-list',
    Fb = 'rating-comment-submit-button',
    wb = 'go-back-button',
    Ab = 'add_rate_comment_label',
    Bb = 'toggle-size-button',
    kb = (e, t) => t.getElementById(e),
    Sb = e => {
        let { portalId: t = pb, children: n } = e;
        const { document: r } = bd.useFrame(),
            [o, i] = or.useState(() => kb(t, r));
        return (
            or.useEffect(() => {
                const e = kb(t, r);
                e && e !== o && i(e);
            }, [o, t, r]),
            o ? dr.createPortal(n, o) : null
        );
    };
var Tb, Lb, Pb, Mb;
const Ob = ku(Tb || (Tb = si(['\n\tfrom {\n\t\topacity: 0;\n\t}\n\tto {\n\t\topacity: 1;\n\t}\n']))),
    Ib = ku(
        Lb ||
            (Lb = si([
                '\n\tfrom {\n\t\topacity: 0;\n\t\ttransform: translateY(-30px);\n\t}\n\tto {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t}\n',
            ]))
    ),
    zb = ku(Pb || (Pb = si(['\n    from {\n        opacity: 1;\n    }\n    to {\n        opacity: 0;\n    }\n']))),
    _b = ku(
        Mb ||
            (Mb = si([
                '\n    from {\n        opacity: 1;\n        transform: translateY(0);\n    }\n    to {\n        opacity: 0;\n        transform: translateY(-30px);\n    }\n',
            ]))
    ),
    Rb = e => {
        let { theme: t } = e;
        return Bu(
            'width:40px;height:40px;background:white;border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background 0.2s;color:#000000;box-shadow:',
            t.boxShadow.xl,
            ';&:hover{background:#ffffffcc;}&:focus{outline-style:auto;outline-offset:-1px;}'
        );
    },
    jb = jD(ev, {
        target: 'e19xvutp6',
    })(Rb, ';'),
    Nb = jD(Qv, {
        target: 'e19xvutp5',
    })(Rb, ' text-decoration:none;&:visited{color:inherit;}'),
    Wb = jD('div', {
        target: 'e19xvutp4',
    })(
        'position:fixed;top:0;left:0;width:100%;height:100%;background:#000000cc;display:flex;align-items:center;justify-content:center;z-index:2;outline:none;animation:',
        e => {
            let { shouldFadeOut: t } = e;
            return t ? zb : Ob;
        },
        ' ',
        xr,
        'ms ',
        e => {
            let { theme: t } = e;
            return t.transitions.easings.linear;
        },
        ';'
    ),
    Vb = jD('div', {
        target: 'e19xvutp3',
    })({
        name: '16xrca4',
        styles: 'position:relative;display:flex;align-items:center;justify-content:center;max-width:100%;max-height:100%;cursor:auto',
    }),
    Ub = jD('div', {
        target: 'e19xvutp2',
    })({
        name: 'lli6vz',
        styles: 'width:100%;height:100%;display:flex;justify-content:center;align-items:center;position:fixed',
    }),
    Hb = jD('img', {
        target: 'e19xvutp1',
    })(
        'min-width:300px;max-width:80vw;max-height:80vh;width:auto;height:auto;object-fit:contain;background:',
        e => {
            let { theme: t } = e;
            return t.colors.divider;
        },
        ';display:',
        e => {
            let { transitionState: t } = e;
            return 'loading' === t ? 'none' : 'block';
        },
        ';border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.lg;
        },
        ';box-shadow:',
        e => {
            let { theme: t } = e;
            return t.boxShadow.enormous;
        },
        ';animation:',
        e => {
            let { transitionState: t } = e;
            return 'closing' === t ? _b : Ib;
        },
        ' ',
        Fr,
        'ms ',
        e => {
            let { theme: t } = e;
            return t.transitions.easings.sharp;
        },
        ' ',
        wr,
        'ms both;'
    ),
    qb = jD('div', {
        target: 'e19xvutp0',
    })(
        'position:absolute;bottom:calc(100% + 4px);right:0px;display:flex;gap:5px;animation:',
        e => {
            let { shouldSlideOut: t } = e;
            return t ? _b : Ib;
        },
        ' ',
        Fr,
        'ms ',
        e => {
            let { theme: t } = e;
            return t.transitions.easings.sharp;
        },
        ' ',
        wr,
        'ms both;'
    ),
    Gb = () => {
        const e = ti(),
            { link: t, alt: n, name: r, state: o } = ni(e => e.getApplicationState('lightbox')),
            i = Hu.static,
            a = e.localize,
            u = rr.useCallback(() => {
                requestAnimationFrame(() => {
                    Xe(e, {
                        state: 'closing',
                    });
                });
            }, [e]),
            s = () => {
                'loading' === o &&
                    requestAnimationFrame(() => {
                        Xe(e, {
                            state: 'loaded',
                        });
                    });
            };
        Hu(() => {
            if ('closing' === o) {
                const t = setTimeout(() => {
                    Xe(e, {
                        state: 'closed',
                    });
                }, xr);
                return () => {
                    clearTimeout(t);
                };
            }
        }, [o]),
            Hu(() => {
                const e = new Image();
                $e() && t && ((e.src = t), e.complete ? s() : (e.onload = s));
            }, [t]),
            rr.useEffect(() => {
                const e = e => {
                    'Escape' === e.key && (e.stopPropagation(), u());
                };
                return (
                    document.addEventListener('keydown', e, !0),
                    () => {
                        document.removeEventListener('keydown', e, !0);
                    }
                );
            }, [u]);
        const l = rr.createElement(
            Wb,
            ir(
                {
                    shouldFadeOut: 'closing' === o,
                },
                Uu({
                    onClick: () => {
                        u();
                    },
                })
            ),
            rr.createElement(
                Vb,
                null,
                'loading' === o
                    ? rr.createElement(
                          Ub,
                          null,
                          rr.createElement(vC, {
                              size: 'xlarge',
                          })
                      )
                    : rr.createElement(
                          rr.Fragment,
                          null,
                          rr.createElement(
                              qb,
                              {
                                  shouldSlideOut: 'closing' === o,
                              },
                              rr.createElement(
                                  Nb,
                                  ir(
                                      {
                                          'aria-label': a('open_image_in_new_tab'),
                                          href: t,
                                          target: '_blank',
                                          rel: 'noopener noreferrer',
                                      },
                                      Uu({
                                          onClick: e => e.stopPropagation(),
                                      })
                                  ),
                                  rr.createElement(av, {
                                      'aria-hidden': !0,
                                  })
                              ),
                              rr.createElement(
                                  jb,
                                  ir(
                                      {
                                          'aria-label': a('close_image_preview'),
                                      },
                                      Uu({
                                          onPress: u,
                                      })
                                  ),
                                  rr.createElement(Ng, {
                                      'aria-hidden': !0,
                                  })
                              )
                          )
                      ),
                rr.createElement(
                    Hb,
                    ir(
                        {
                            src: t,
                            alt: n || r,
                            transitionState: o,
                        },
                        Uu({
                            onClick: e => {
                                e.stopPropagation();
                            },
                            onLoad: s,
                        })
                    )
                )
            )
        );
        return i ? l : rr.createElement(Sb, null, l);
    },
    Kb = [
        'url',
        'link',
        'width',
        'height',
        'maxWidth',
        'maxHeight',
        'srcSet',
        'alternativeText',
        'name',
        'fillContainer',
        'withMargin',
    ],
    Yb = jD(Am, {
        target: 'e1f2pv4c1',
    })(
        'width:100%;height:100%;object-fit:',
        e => {
            let { scaleImage: t } = e;
            return t ? 'cover' : 'fill';
        },
        ';cursor:zoom-in;'
    ),
    Zb = jD('div', {
        displayName: 'ImagePreview',
        target: 'e1f2pv4c0',
    })(
        'display:flex;margin:0 auto;align-items:center;justify-content:center;overflow:hidden;background:',
        e => {
            let { theme: t } = e;
            return t.colors.divider;
        },
        ';color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';',
        e => {
            let { withMargin: t } = e;
            return t && 'margin-bottom: 0.1em;';
        },
        ' ',
        e => {
            let { fillContainer: t, dimensions: n } = e;
            return t
                ? {
                      width: '100%',
                      height: '100%',
                  }
                : n;
        },
        ';'
    ),
    Xb = e => {
        let {
                url: t,
                link: n,
                width: r,
                height: o,
                maxWidth: i,
                maxHeight: a,
                srcSet: u,
                alternativeText: s = '',
                name: l = '',
                fillContainer: c = !1,
                withMargin: d = !1,
            } = e,
            p = ur(e, Kb);
        const D = ti(),
            m = ni(e => e.getApplicationState('mobile')),
            f = ni(e => e.getApplicationState('embedded')),
            { state: h } = ni(e => e.getApplicationState('lightbox')),
            g = ni(Je),
            v = () => {
                requestAnimationFrame(() => {
                    Xe(D, {
                        link: n || t,
                        name: l,
                        alt: s,
                        state: 'loading',
                    });
                });
            },
            C = !!r || !!o,
            b = (function (e) {
                let { width: t = 230, height: n = 150, maxWidth: r = 200, maxHeight: o = 300 } = void 0 === e ? {} : e;
                const i = t / n;
                return (
                    t > r && ((t = r), (n = t / i)),
                    n > o && ((n = o), (t = n * i)),
                    {
                        width: t,
                        height: n,
                    }
                );
            })({
                width: r,
                height: o,
                maxWidth: i,
                maxHeight: a,
            });
        return or.createElement(
            or.Fragment,
            null,
            or.createElement(
                Zb,
                {
                    dimensions: b,
                    fillContainer: c,
                    withMargin: d,
                    role: 'button',
                    tabIndex: 0,
                    'aria-label': D.localize('open_image_preview'),
                    onKeyDown: e => {
                        ('Enter' !== e.key && ' ' !== e.key) || (e.preventDefault(), v());
                    },
                    onClick: v,
                },
                or.createElement(
                    Yb,
                    ir({}, p, {
                        alt: s || l,
                        src: t,
                        srcSet: u,
                        scaleImage: !C,
                    })
                )
            ),
            (!f || m || g) && 'closed' !== h && or.createElement(Gb, null)
        );
    },
    $b = jD('div', {
        target: 'e1faam643',
    })(
        'position:relative;height:18.5px;margin-top:',
        e => {
            let { withMarginTop: t } = e;
            return t ? 6 : 0;
        },
        'px;transition:margin-top 200ms ',
        e => {
            let { theme: t } = e;
            return t.transitions.easings.swift;
        },
        ';transition-delay:300ms;will-change:margin-top;'
    ),
    Jb = jD('div', {
        target: 'e1faam642',
    })(
        'display:flex;flex-direction:row;align-items:center;position:absolute;white-space:nowrap;overflow:visible;',
        e => {
            let { side: t } = e;
            return Bu(t, ':0;');
        },
        ';'
    ),
    Qb = jD('span', {
        target: 'e1faam641',
    })(
        e => {
            let { theme: t } = e;
            return t.typography.caption;
        },
        ';color:',
        e => {
            let { theme: t } = e;
            return t.colors.secondaryTextColor;
        },
        ';'
    ),
    eE = jD('button', {
        target: 'e1faam640',
    })(
        'background:none;border:none;cursor:pointer;appearance:none;',
        e => {
            let { theme: t } = e;
            return t.typography.caption;
        },
        ';color:',
        e => {
            let { theme: t } = e;
            return t.colors.cta;
        },
        ';'
    ),
    tE = e => {
        let { visible: t, onToggle: n, withMarginTop: r, side: o } = e;
        const i = el();
        return or.createElement(
            $b,
            {
                withMarginTop: r,
            },
            or.createElement(
                Jb,
                {
                    side: o,
                },
                t && or.createElement(Qb, null, 'Text translated'),
                or.createElement(
                    eE,
                    ir({}, i, {
                        onClick: e => {
                            e.stopPropagation(), n();
                        },
                    }),
                    t ? 'Show original' : 'Show translation'
                )
            )
        );
    };

function nE(e, t) {
    const n = e[t];
    return '*' === n || '_' === n;
}

function rE(e, t) {
    return '[' === e[t];
}

function oE(e, t) {
    return '-' === e[t] && '-' === e[t + 1] && '-' === e[t + 2];
}

function iE(e, t) {
    let n = t;
    for (; n < e.length && '-' === e[n]; ) n++;
    return {
        chars: [e.slice(t, n)],
        nextIndex: n,
    };
}

function aE(e, t) {
    const n = e[t],
        r = e[t + 1] === n ? n + n : n,
        o = r.length,
        i = t + o,
        a = e.indexOf(r, i);
    if (-1 === a) {
        return {
            chars: (function (e) {
                const t = e.match(/\[([^\]]+)\]\([^)]*$/);
                if (t) return t[1].split('');
                const n = e.match(/\[([^\]]+)$/);
                if (n) return n[1].split('');
                return e.split('');
            })(e.slice(i)),
            nextIndex: e.length,
        };
    }
    return {
        chars: ['' + r + e.slice(i, a) + r],
        nextIndex: a + o,
    };
}

function uE(e, t) {
    const n = e.indexOf(']', t + 1);
    if (-1 === n) {
        return {
            chars: e.slice(t + 1).split(''),
            nextIndex: e.length,
        };
    }
    if ('(' !== e[n + 1])
        return {
            chars: [e[t]],
            nextIndex: t + 1,
        };
    const r = e.indexOf(')', n + 2);
    if (-1 === r) {
        return {
            chars: e.slice(t + 1, n).split(''),
            nextIndex: e.length,
        };
    }
    return {
        chars: ['[' + e.slice(t + 1, n) + '](' + e.slice(n + 2, r) + ')'],
        nextIndex: r + 1,
    };
}

function sE(e) {
    let { text: t, interval: n, onAnimatingChange: r } = e;
    const [o, i] = or.useState(0),
        a = or.useRef(null),
        u = or.useMemo(
            () =>
                (function (e) {
                    const t = [];
                    let n = 0;
                    for (; n < e.length; )
                        if (oE(e, n)) {
                            const r = iE(e, n);
                            t.push.apply(t, r.chars), (n = r.nextIndex);
                        } else if (nE(e, n)) {
                            const r = aE(e, n);
                            t.push.apply(t, r.chars), (n = r.nextIndex);
                        } else if (rE(e, n)) {
                            const r = uE(e, n);
                            t.push.apply(t, r.chars), (n = r.nextIndex);
                        } else t.push(e[n]), n++;
                    return t;
                })(t),
            [t]
        );
    or.useEffect(
        () => (
            a.current && clearInterval(a.current),
            r(!0),
            (a.current = setInterval(() => {
                i(e =>
                    e >= u.length ? (a.current && (clearInterval(a.current), (a.current = null)), r(!1), e) : e + 1
                );
            }, n)),
            () => {
                a.current && (clearInterval(a.current), (a.current = null)), r(!1);
            }
        ),
        [u, r, n]
    );
    return u.slice(0, o).join('');
}
const lE = e => {
        let { text: t, children: n, setIsAnimating: r } = e;
        const o = sE({
            text: t,
            interval: 3,
            onAnimatingChange: r,
        });
        return or.createElement(or.Fragment, null, n(o));
    },
    cE = ['children', 'href'],
    dE = e => e.stopPropagation(),
    pE = {
        name: 'opde7s',
        styles: 'color:inherit',
    },
    DE = jD('div', {
        target: 'e4c3y4j1',
    })({
        name: '1ohivhk',
        styles: 'ul,ol{margin:8px 0;display:inline-block;white-space:normal;width:100%;padding-left:24px;}',
    }),
    mE = jD(Lf, {
        target: 'e4c3y4j0',
    })(
        'padding:',
        e => {
            let { theme: t, withoutPaddings: n } = e;
            return n ? t.spaces.space1 + ' 0 0 0' : void 0;
        },
        ';margin-bottom:',
        e => {
            let { theme: t, withoutPaddings: n } = e;
            return n ? t.spaces.space1 : void 0;
        },
        ';',
        e => {
            let { withoutPaddings: t } = e;
            return t && 'text-wrap: pretty;';
        },
        ';'
    ),
    fE = e => {
        let { children: t, href: n } = e,
            r = ur(e, cE);
        const o = ni(e => et(e, n)),
            i = ni(e => e.getApplicationState().defaultWidget),
            a = ni(e => {
                var t;
                return null == (t = e.getApplicationState().page) ? void 0 : t.url;
            }),
            u = ni(e => e.getApplicationState().config.features.utmParams.enabled),
            s = ni(We);
        return wu(
            'a',
            ir({}, r, {
                href: 'livechat' === i && u ? Zv(n, a, s) : n,
                onClick: dE,
                css: pE,
                rel: 'nofollow noopener',
                target: o,
            }),
            t
        );
    },
    hE = e => {
        let {
            text: t,
            url: n,
            eventId: r,
            shouldUseMarkdown: o = !1,
            isStreamingPreview: i = !1,
            scrollToBottom: a,
            withoutPaddings: u = !1,
        } = e;
        const [s, l] = or.useState(!1),
            c = or.useCallback(
                e => {
                    l(e), e || 'function' != typeof a || a();
                },
                [a]
            ),
            d = e =>
                o
                    ? wu(
                          DE,
                          null,
                          wu(Qe, {
                              root: {
                                  component: Kv,
                              },
                              template: e,
                              linkComponent: fE,
                          })
                      )
                    : wu(
                          Bv,
                          {
                              component: fE,
                          },
                          wu(Kv, null, e)
                      ),
            p =
                i || s
                    ? wu(
                          lE,
                          {
                              text: t,
                              setIsAnimating: c,
                          },
                          e => d(e)
                      )
                    : d(t);
        return wu(
            mE,
            ir(
                {},
                r
                    ? {
                          id: r,
                      }
                    : {},
                {
                    withoutPaddings: u,
                }
            ),
            n
                ? wu(
                      fE,
                      {
                          href: n,
                      },
                      t
                  )
                : wu(or.Fragment, null, p)
        );
    },
    gE = e =>
        'smooth' === e.name
            ? Bu('color:', e.colors.primaryTextColor, ';background-color:', e.colors.surfaceDecorative, ';')
            : Bu('color:', e.colors.secondaryTextColor, ';'),
    vE = {
        name: '1jwcxx3',
        styles: 'font-style:italic',
    },
    CE = e =>
        Bu(
            'pre{margin:',
            e.spaces.space1,
            ' ',
            e.spaces.space0,
            ';display:inline-block;white-space:pre-wrap;background-color:',
            e.colors.codeBlockBackgroundColor,
            ';border-radius:',
            e.borderRadius.sm,
            ';padding:',
            e.spaces.space3,
            ';}code{',
            e.typography.code,
            ';color:inherit;background-color:',
            e.colors.codeBlockBackgroundColor,
            ';border-radius:',
            e.borderRadius.sm,
            ';padding:',
            e.spaces.space0,
            ' ',
            e.spaces.space1,
            ';}'
        ),
    bE = e => Bu('box-shadow:none;background-color:transparent;max-width:400px;color:', e.colors.primaryTextColor, ';');
var EE = {
    name: '1eclne9',
    styles: 'max-width:360px',
};
const yE = e => {
        let {
            text: t,
            url: n,
            translation: r,
            reaction: o,
            formatting: i,
            radiusType: a = 'single',
            draft: u = !1,
            own: s = !1,
            eventId: l = '',
            isStreamingPreview: c = !1,
            scrollToBottom: d,
            withoutBackground: p = !1,
            size: D = 'default',
        } = e;
        const m = bu(),
            [f, h] = dD(!s),
            g = 'modern' === m.name,
            v = m.isRtl ? 'left' : 'right',
            C = m.isRtl ? 'right' : 'left',
            b = s && !g ? v : C;
        return wu(
            or.Fragment,
            null,
            wu(
                Vm,
                {
                    radiusType: a,
                    css: ['large' === D && EE, u && gE(m), !!r && f && vE, CE(m), p && bE(m), ''],
                },
                wu(hE, {
                    text: r && f ? r.targetMessage : t,
                    url: n,
                    eventId: l,
                    shouldUseMarkdown: !s && 'commonmark' === i,
                    isStreamingPreview: c,
                    scrollToBottom: d,
                    withoutPaddings: p,
                })
            ),
            r &&
                wu(tE, {
                    visible: f,
                    onToggle: h,
                    side: b,
                    withMarginTop: !!o && !g,
                })
        );
    },
    xE = jD('div', {
        target: 'erkouar1',
    })({
        name: 'olzfrd',
        styles: 'max-width:300px;max-height:300px',
    }),
    FE = jD('img', {
        target: 'erkouar0',
    })({
        name: '14j4j9s',
        styles: 'display:block;width:auto;height:auto;max-width:100%;max-height:100%',
    }),
    wE = e => {
        let { url: t, name: n } = e;
        return or.createElement(
            xE,
            null,
            or.createElement(FE, {
                alt: n,
                src: t,
            })
        );
    },
    AE = {
        spaceBase: 8,
        typography: _i,
        colors: tt,
        transitions: wi,
        borderRadius: nt,
        boxShadow: gi,
        spaces: xi,
    };
var BE;
const kE = ku(BE || (BE = si(['\n\t100% {\n\t\topacity: 0.3;\n\t}\n'])));
var SE, TE;
new Date().toISOString();
const LE = ku(
        TE || (TE = si(['\n\t0% {\n\t\ttransform: scale(0);\n\t}\n\n\t100% {\n\t\ttransform: scale(1);\n\t}\n']))
    ),
    PE = jD('div', {
        target: 'eyqxlol0',
    })(
        'display:flex;align-items:center;justify-content:center;width:auto;min-width:1.5em;border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.xl;
        },
        ';padding:0 4px;flex-shrink:0;background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.notification;
        },
        ';color:',
        e => {
            let { theme: t } = e;
            return t.colors.notificationContrast;
        },
        ';height:1.5em;line-height:1.5em;text-align:center;font-size:0.8em;box-shadow:',
        e => {
            let { theme: t } = e;
            return t.boxShadow.xs;
        },
        ';font-weight:bold;',
        e => {
            let { animated: t, theme: n, minScale: r, maxScale: o, animationKind: i = 'spring' } = e;
            return (
                !yr &&
                t &&
                ('spring' === i
                    ? Bu(
                          'animation-name:',
                          (function (e, t) {
                              return (
                                  void 0 === e && (e = 0),
                                  void 0 === t && (t = 1.3),
                                  ku(
                                      SE ||
                                          (SE = si([
                                              '\n\t0% {\n\t\ttransform: scale(',
                                              ');\n\t}\n\n\t25% {\n\t\ttransform: scale(',
                                              ');\n\t}\n\n\t50% {\n\t\ttransform: scale(',
                                              ');\n\t}\n\n\t100% {\n\t\ttransform: scale(1.0);\n\t}\n',
                                          ])),
                                      e,
                                      e,
                                      t
                                  )
                              );
                          })(r, o),
                          ';animation-duration:0.625s;animation-timing-function:',
                          n.transitions.easings.spring,
                          ';'
                      )
                    : Bu(
                          'animation-name:',
                          LE,
                          ';animation-duration:0.15s;animation-timing-function:',
                          n.transitions.easings.swift,
                          ';'
                      ))
            );
        },
        ';'
    );
const ME = 1500;
let OE = {},
    IE = 0,
    zE = !1,
    _E = null,
    RE = null;

function jE(e) {
    void 0 === e && (e = {});
    let { delay: t = ME } = e,
        {
            isOpen: n,
            open: r,
            close: o,
        } = (function (e) {
            let [t, n] = Gu(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
            return {
                isOpen: t,
                open() {
                    n(!0);
                },
                close() {
                    n(!1);
                },
                toggle() {
                    n(!t);
                },
            };
        })(e),
        i = or.useMemo(() => '' + ++IE, []),
        a = or.useRef(),
        u = () => {
            OE[i] = c;
        },
        s = () => {
            for (let e in OE) e !== i && (OE[e](!0), delete OE[e]);
        },
        l = () => {
            clearTimeout(a.current),
                (a.current = null),
                s(),
                u(),
                (zE = !0),
                r(),
                _E && (clearTimeout(_E), (_E = null)),
                RE && (clearTimeout(RE), (RE = null));
        },
        c = e => {
            e
                ? (clearTimeout(a.current), (a.current = null), o())
                : a.current ||
                  (a.current = setTimeout(() => {
                      (a.current = null), o();
                  }, 500)),
                _E && (clearTimeout(_E), (_E = null)),
                zE &&
                    (RE && clearTimeout(RE),
                    (RE = setTimeout(() => {
                        delete OE[i], (RE = null), (zE = !1);
                    }, 500)));
        };
    return (
        or.useEffect(
            () => () => {
                clearTimeout(a.current), OE[i] && delete OE[i];
            },
            [i]
        ),
        {
            isOpen: n,
            open: e => {
                !e && t > 0 && !a.current
                    ? (s(),
                      u(),
                      n || _E || zE
                          ? n || l()
                          : (_E = setTimeout(() => {
                                (_E = null), (zE = !0), l();
                            }, t)))
                    : l();
            },
            close: c,
        }
    );
}
const NE = [
        'children',
        'description',
        'allowTouch',
        'controlsRef',
        'animated',
        'placement',
        'trigger',
        'onOpenChange',
        'kind',
    ],
    WE = 10,
    VE = jD('div', {
        displayName: 'Tooltip',
        target: 'ezqijrk2',
    })(
        'display:inline-block;background-color:',
        e => {
            let { theme: t, kind: n } = e;
            return t.colors[n + 'Surface'];
        },
        ';color:',
        e => {
            let { theme: t, kind: n } = e;
            return 'hint' === n ? t.colors.grayscale[0] : t.colors.primaryTextColor;
        },
        ';padding:1em;position:fixed;border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.lg;
        },
        ';z-index:9;font-size:0.8em;font-weight:normal;margin-top:0.5em;margin-bottom:0.5em;box-shadow:',
        e => {
            let { theme: t } = e;
            return t.boxShadow.floating;
        },
        ';transition:',
        e => {
            let { theme: t } = e;
            return 'opacity 200ms ' + t.transitions.easings.swift + ', transform 300ms ' + t.transitions.easings.swift;
        },
        ';',
        e => {
            let { position: t } = e;
            return {
                left: t.left ? t.left - WE + 'px' : 'auto',
                right: t.right ? t.right - WE + 'px' : 'auto',
                top: t.top ? t.top + 'px' : 'auto',
                bottom: t.bottom ? t.bottom : 'auto',
                marginRight: t.right ? 0 : '10px',
                marginLeft: t.left ? 0 : '10px',
            };
        },
        ';'
    ),
    UE = jD('svg', {
        displayName: 'TooltipArrow',
        target: 'ezqijrk1',
    })(
        'position:absolute;fill:',
        e => {
            let { theme: t, kind: n } = e;
            return t.colors[n + 'Surface'];
        },
        ';margin-top:-1.5em;margin-bottom:-1.5em;',
        e => {
            let { position: t, horizontalFactor: n, placement: r = 'top', theme: o } = e;
            const i = n - WE + ('modern' === o.name ? 3 : -1),
                a = t.clampOffset || 0;
            return ir(
                {
                    left: t.left ? i - a + 'px' : 'auto',
                    right: t.right ? i - a + 'px' : 'auto',
                },
                'bottom' === r
                    ? {
                          top: 0,
                      }
                    : {
                          bottom: 0,
                          transform: 'rotate(180deg)',
                      }
            );
        },
        ';'
    ),
    HE = jD('div', {
        target: 'ezqijrk0',
    })({
        name: 'bjn8wh',
        styles: 'position:relative',
    }),
    qE = (e, t, n) => {
        const { left: r, right: o, bottom: i, top: a } = e.getBoundingClientRect(),
            { innerWidth: u, innerHeight: s, pageXOffset: l, pageYOffset: c } = n.window,
            d =
                'top' === t
                    ? {
                          bottom: s - (a + c),
                      }
                    : {
                          top: i + c,
                      };
        let p;
        if (r + l > u / 2) {
            const e = u - (o + l),
                t = Math.max(e, WE);
            p = {
                right: t,
                clampOffset: e < WE ? t - e : 0,
            };
        } else {
            const e = r + l,
                t = Math.max(e, WE);
            p = {
                left: t,
                clampOffset: e < WE ? t - e : 0,
            };
        }
        return ir({}, d, p);
    },
    GE = {
        position: {
            top: 0,
            left: 0,
        },
        targetWidth: 0,
    };

function KE(e) {
    let {
            children: t,
            description: n,
            allowTouch: r,
            controlsRef: o,
            animated: i = !1,
            placement: a = 'bottom',
            trigger: u = 'hover',
            onOpenChange: s = ar,
            kind: l = 'hint',
        } = e,
        c = ur(e, NE);
    const d = or.useRef(null);
    !(function () {
        const { window: e, document: t } = rs();
        $s(e, t);
        let [n, r] = or.useState(Ws);
        or.useEffect(() => {
            let e = () => {
                r(Ws);
            };
            return (
                Vs.add(e),
                () => {
                    Vs.delete(e);
                }
            );
        }, []);
    })();
    const p = or.useRef(null),
        D = or.useRef(!1),
        [m, f] = or.useState(GE),
        [h, g] = or.useState(!1),
        { isFocusVisible: v, focusProps: C } = Xf(),
        [b, E] = or.useState(v),
        y = bd.useFrame();
    or.useEffect(() => {
        if ((E(v), v)) {
            const e = e => {
                'Escape' === e.key && E(!1);
            };
            return document.addEventListener('keydown', e), () => document.removeEventListener('keydown', e);
        }
    }, [v]);
    const x = jE(
        ir(
            {
                isDisabled: v,
                onOpenChange: e => {
                    if (!p.current) return;
                    i && requestAnimationFrame(() => g(e));
                    const t = () => {
                        s(e, D.current), (D.current = !1);
                    };
                    e
                        ? (f({
                              position: qE(p.current, a, y),
                              targetWidth: p.current.offsetWidth,
                          }),
                          requestAnimationFrame(t))
                        : t();
                },
            },
            c
        )
    );
    null != o &&
        o.current &&
        (o.current = {
            open: () => {
                (D.current = !0), x.open(!0);
            },
            close: () => {
                (D.current = !0), x.close(!0);
            },
        });
    const { tooltipProps: F, triggerProps: w } = (function (e, t, n) {
            let { isDisabled: r, trigger: o } = e,
                i = os(),
                a = or.useRef(!1),
                u = or.useRef(!1);
            const { document: s } = rs();
            let l = () => {
                    (a.current || u.current) && t.open(u.current);
                },
                c = e => {
                    a.current || u.current || t.close(e);
                };
            or.useEffect(() => {
                let e = e => {
                    n && n.current && 'Escape' === e.key && t.close(!0);
                };
                if (t.isOpen)
                    return (
                        s.addEventListener('keydown', e, !0),
                        () => {
                            s.removeEventListener('keydown', e, !0);
                        }
                    );
            }, [n, t]);
            let { hoverProps: d } = ul({
                    isDisabled: r,
                    onHoverStart: () => {
                        'focus' !== o && ('pointer' === Qs() ? (a.current = !0) : (a.current = !1), l());
                    },
                    onHoverEnd: () => {
                        'focus' !== o && ((u.current = !1), (a.current = !1), c());
                    },
                }),
                { pressProps: p } = Ps({
                    onPressStart: () => {
                        (u.current = !1), (a.current = !1), c(!0);
                    },
                }),
                { focusableProps: D } = eh(
                    {
                        isDisabled: r,
                        onFocus: () => {
                            Js() && ((u.current = !0), l());
                        },
                        onBlur: () => {
                            (u.current = !1), (a.current = !1), c(!0);
                        },
                    },
                    n
                );
            return {
                triggerProps: ir(
                    {
                        'aria-describedby': t.isOpen ? i : void 0,
                    },
                    ss(D, d, p)
                ),
                tooltipProps: {
                    id: i,
                },
            };
        })(c, x, p),
        { tooltipProps: A } = (function (e, t) {
            let n = ps(e, {
                    labelable: !0,
                }),
                { hoverProps: r } = ul({
                    onHoverStart: () => (null == t ? void 0 : t.open(!0)),
                    onHoverEnd: () => (null == t ? void 0 : t.close()),
                });
            return {
                tooltipProps: ss(n, r, {
                    role: 'tooltip',
                }),
            };
        })(F, x),
        { pressProps: B } = Ps({
            onPress: () => {
                x.open(!0);
            },
        });
    return (
        tp(
            d,
            e => {
                p.current.contains(e.target) || x.close(!0);
            },
            y
        ),
        c.isDisabled && x.isOpen && x.close(),
        or.createElement(
            Qf,
            ir({}, 'press' === u ? B : ss(w, r ? B : C), {
                ref: p,
            }),
            t,
            (x.isOpen || b) &&
                or.createElement(
                    Sb,
                    {
                        portalId: Db,
                    },
                    or.createElement(
                        VE,
                        ir(
                            {
                                ref: d,
                                position: m.position,
                                kind: l,
                            },
                            'hover' === u && A,
                            i && {
                                style: {
                                    opacity: (k = h) ? 1 : 0,
                                    transform: 'translateY(' + (k ? 0 : 8) + 'px)',
                                },
                            }
                        ),
                        or.createElement(
                            HE,
                            null,
                            or.createElement(
                                UE,
                                {
                                    placement: a,
                                    kind: l,
                                    horizontalFactor: m.targetWidth / 2,
                                    height: '10',
                                    position: m.position,
                                    width: '16',
                                },
                                or.createElement('polygon', {
                                    points: '0,10 16,10 8,0',
                                })
                            ),
                            n
                        )
                    )
                )
        )
    );
    var k;
}
const YE = ['iconColor', 'onPress', 'withBackground', 'size', 'iconVariant'],
    ZE = jD(ev, {
        target: 'ea5qvgz0',
    })(
        'border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.round;
        },
        ';',
        e => {
            let { size: t } = e;
            return t && Bu('width:', t, 'px;height:', t, 'px;');
        },
        ' ',
        e => {
            let { withBackground: t, theme: n } = e;
            return Bu(
                'background-color:',
                t ? n.colors.adjustedChatBackground : 'transparent',
                ';transition:transform 200ms ',
                n.transitions.easings.swift,
                ',background-color 200ms ',
                n.transitions.easings.swift,
                ';'
            );
        },
        ' &:hover{',
        e => {
            let { withBackground: t, theme: n } = e;
            return Bu(
                'background-color:',
                t ? n.colors.adjustedChatBackgroundHover : n.colors.lighterOppositeTitleBarColor,
                ';'
            );
        },
        ';}'
    ),
    XE = e => {
        let { iconColor: t, onPress: n, withBackground: r, size: o, iconVariant: i = 'minimize' } = e,
            a = ur(e, YE);
        const u = ti(),
            s = Fg(),
            l = Ee(),
            c = or.useRef(null),
            d = mD('is-minimize-button-focused'),
            { focusProps: p } = Ns({
                onFocusChange: d.set,
            }),
            D = ni(e => rt(e)),
            { interactionModality: m } = u.getApplicationState('visibility') || {},
            f = d.get() && 'keyboard' === m,
            h = u.localize('embedded_minimize_window'),
            g = u.localize('embedded_minimize_window'),
            v = 'close' === i ? Ng : iv;
        return or.createElement(
            KE,
            {
                description: h,
            },
            or.createElement(
                ZE,
                ir(
                    {
                        ref: c,
                        onPress:
                            null != n
                                ? n
                                : () => {
                                      (s && l) || (ot() ? u.emit('mobile_wrapper_minimize_intent') : it(u));
                                  },
                        'aria-label': g,
                        withBackground: r,
                        id: Cb,
                        size: o,
                        isTextApp: D,
                    },
                    f && {
                        autoFocus: !0,
                    },
                    ss(p, a)
                ),
                or.createElement(
                    v,
                    ir(
                        {
                            'aria-hidden': !0,
                        },
                        t && {
                            color: t,
                        },
                        o && {
                            size: o,
                        }
                    )
                )
            )
        );
    },
    $E = jD('h2', {
        target: 'e5gms8x0',
    })(
        'flex-grow:1;flex-basis:100%;font-weight:700;font-size:14px;margin:0 8px;',
        e => {
            let { theme: t } = e;
            return t.typography.heading;
        },
        ';'
    ),
    JE = jD(rm, {
        target: 'e1txcupw0',
    })({
        name: 'dyzzbf',
        styles: 'padding:0 0.8em;height:48px;display:flex;align-items:center',
    }),
    QE = ['zIndex'];
var ey;
const ty = 300,
    ny = 100,
    ry = 999,
    oy = e => ({
        enter: ty,
        exit: e + ty,
    }),
    iy = e => ('light' === e ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.7)'),
    ay = (e, t, n, r) =>
        e(
            ey ||
                (ey = si([
                    '\n\t&-enter,\n\t&-appear {\n\t\tbackground-color: rgba(0, 0, 0, 0);\n\t}\n\n\t&-enter-active,\n\t&-appear-active,\n\t&-enter-done,\n\t&-appear-done {\n\t\tbackground-color: ',
                    ';\n\t\ttransition: background-color ',
                    'ms ',
                    ';\n\t}\n\n\t&-exit {\n\t\tbackground-color: ',
                    ';\n\t}\n\n\t&-exit-active,\n\t&-exit-done {\n\t\tbackground-color: rgba(0, 0, 0, 0);\n\t\ttransition: background-color ',
                    'ms ',
                    ';\n\t\ttransition-delay: ',
                    'ms;\n\t}\n',
                ])),
            r ? n.colors.widgetBackground : iy(n.variant),
            ty,
            n.transitions.easings.smooth,
            r ? n.colors.widgetBackground : iy(n.variant),
            ty,
            n.transitions.easings.smooth,
            t
        ),
    uy = e => {
        let { zIndex: t } = e;
        return Bu('z-index:', t, ';position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;');
    },
    sy = e => {
        let { zIndex: t } = e,
            n = ur(e, QE);
        const r = or.useRef(null);
        return (
            nD('touchmove', r),
            wu(
                'div',
                ir(
                    {
                        ref: r,
                        css: uy({
                            zIndex: t,
                        }),
                    },
                    n
                )
            )
        );
    },
    ly = e => {
        let { shown: t, fullCover: n = !1, onPress: r, exitDelay: o = ny, zIndex: i = ry } = e;
        const { pressProps: a } = Ps({
            onPress: r,
        });
        return wu(Tu, null, e => {
            let { css: r, theme: u } = e;
            return wu(
                nm,
                {
                    appear: !0,
                    component: null,
                },
                t &&
                    wu(
                        $D,
                        {
                            classNames: ay(r, o, u, n),
                            timeout: oy(o),
                        },
                        wu(
                            sy,
                            ir(
                                {
                                    zIndex: i,
                                },
                                a
                            )
                        )
                    )
            );
        });
    },
    cy = or.memo(ly);
var dy;
const py = 400,
    Dy = function (e, t, n) {
        return (
            void 0 === n &&
                (n = {
                    x: 50,
                    y: 200,
                    width: 200,
                    height: 50,
                }),
            e(
                dy ||
                    (dy = si([
                        '\n\t&-enter,\n\t&-appear {\n\t\tclip-path: inset(\n\t\t\t',
                        'px ',
                        'px ',
                        'px ',
                        'px round 16px\n\t\t);\n\t}\n\t&-enter-active,\n\t&-appear-active,\n\t&-enter-done,\n\t&-appear-done {\n\t\tclip-path: inset(0% 0% 0% 0% round 16px);\n\t\ttransition: clip-path ',
                        'ms ',
                        ';\n\t}\n\n\t&-exit {\n\t\tclip-path: inset(0% 0% 0% 0% round 16px);\n\t\topacity: 1;\n\t}\n\n\t&-exit-active {\n\t\tclip-path: inset(\n\t\t\t',
                        'px ',
                        'px ',
                        'px ',
                        'px round 16px\n\t\t);\n\t\topacity: 0;\n\t\ttransition: clip-path ',
                        'ms ',
                        ',\n\t\t\topacity ',
                        'ms ',
                        ';\n\t}\n',
                    ])),
                n.y,
                n.x,
                window.innerHeight - 100 - n.y - n.height,
                n.x,
                py,
                t.transitions.easings.swift,
                n.y,
                n.x,
                window.innerHeight - 100 - n.y - n.height,
                n.x,
                py,
                t.transitions.easings.swift,
                py,
                t.transitions.easings.swift
            )
        );
    },
    my = e => {
        let { show: t, onTransitionStart: n, onTransitionEnd: r, children: o, nodeRef: i, target: a } = e;
        return or.createElement(Tu, null, e => {
            let { css: u, theme: s } = e;
            return or.createElement(
                nm,
                {
                    appear: !0,
                    component: null,
                },
                t &&
                    or.createElement(
                        $D,
                        {
                            timeout: py,
                            onExited: r,
                            onEntered: r,
                            onExiting: n,
                            onEntering: n,
                            classNames: Dy(u, s, a),
                            nodeRef: i,
                        },
                        o
                    )
            );
        });
    };
var fy = 'data-focus-lock',
    hy = 'data-focus-lock-disabled';

function gy(e, t) {
    return (
        (n = t),
        (r = function (t) {
            return e.forEach(function (e) {
                return (function (e, t) {
                    return 'function' == typeof e ? e(t) : e && (e.current = t), e;
                })(e, t);
            });
        }),
        ((o = or.useState(function () {
            return {
                value: n,
                callback: r,
                facade: {
                    get current() {
                        return o.value;
                    },
                    set current(e) {
                        var t = o.value;
                        t !== e && ((o.value = e), o.callback(e, t));
                    },
                },
            };
        })[0]).callback = r),
        o.facade
    );
    var n, r, o;
}
var vy = {
        width: '1px',
        height: '0px',
        padding: 0,
        overflow: 'hidden',
        position: 'fixed',
        top: '1px',
        left: '1px',
    },
    Cy = function () {
        return (
            (Cy =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e;
                }),
            Cy.apply(this, arguments)
        );
    };
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function by(e) {
    return e;
}

function Ey(e, t) {
    void 0 === t && (t = by);
    var n = [],
        r = !1;
    return {
        read: function () {
            if (r)
                throw new Error(
                    'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
                );
            return n.length ? n[n.length - 1] : e;
        },
        useMedium: function (e) {
            var o = t(e, r);
            return (
                n.push(o),
                function () {
                    n = n.filter(function (e) {
                        return e !== o;
                    });
                }
            );
        },
        assignSyncMedium: function (e) {
            for (r = !0; n.length; ) {
                var t = n;
                (n = []), t.forEach(e);
            }
            n = {
                push: function (t) {
                    return e(t);
                },
                filter: function () {
                    return n;
                },
            };
        },
        assignMedium: function (e) {
            r = !0;
            var t = [];
            if (n.length) {
                var o = n;
                (n = []), o.forEach(e), (t = n);
            }
            var i = function () {
                    var n = t;
                    (t = []), n.forEach(e);
                },
                a = function () {
                    return Promise.resolve().then(i);
                };
            a(),
                (n = {
                    push: function (e) {
                        t.push(e), a();
                    },
                    filter: function (e) {
                        return (t = t.filter(e)), n;
                    },
                });
        },
    };
}

function yy(e, t) {
    return void 0 === t && (t = by), Ey(e, t);
}
var xy = yy({}, function (e) {
        return {
            target: e.target,
            currentTarget: e.currentTarget,
        };
    }),
    Fy = yy(),
    wy = yy(),
    Ay = (function (e) {
        void 0 === e && (e = {});
        var t = Ey(null);
        return (
            (t.options = Cy(
                {
                    async: !0,
                    ssr: !1,
                },
                e
            )),
            t
        );
    })({
        async: !0,
    }),
    By = [],
    ky = or.forwardRef(function (e, t) {
        var n,
            r = or.useState(),
            o = r[0],
            i = r[1],
            a = or.useRef(),
            u = or.useRef(!1),
            s = or.useRef(null),
            l = e.children,
            c = e.disabled,
            d = e.noFocusGuards,
            p = e.persistentFocus,
            D = e.crossFrame,
            m = e.autoFocus;
        e.allowTextSelection;
        var f = e.group,
            h = e.className,
            g = e.whiteList,
            v = e.shards,
            C = void 0 === v ? By : v,
            b = e.as,
            E = void 0 === b ? 'div' : b,
            y = e.lockProps,
            x = void 0 === y ? {} : y,
            F = e.sideCar,
            w = e.returnFocus,
            A = e.onActivation,
            B = e.onDeactivation,
            k = or.useState({})[0],
            S = or.useCallback(
                function () {
                    (s.current = s.current || (document && document.activeElement)),
                        a.current && A && A(a.current),
                        (u.current = !0);
                },
                [A]
            ),
            T = or.useCallback(
                function () {
                    (u.current = !1), B && B(a.current);
                },
                [B]
            ),
            L = or.useCallback(
                function (e) {
                    var t = s.current;
                    if (Boolean(w) && t && t.focus) {
                        var n = 'object' == typeof w ? w : void 0;
                        (s.current = null),
                            e
                                ? Promise.resolve().then(function () {
                                      return t.focus(n);
                                  })
                                : t.focus(n);
                    }
                },
                [w]
            ),
            P = or.useCallback(function (e) {
                u.current && xy.useMedium(e);
            }, []),
            M = Fy.useMedium,
            O = or.useCallback(function (e) {
                a.current !== e && ((a.current = e), i(e));
            }, []),
            I = ir((((n = {})[hy] = c && 'disabled'), (n[fy] = f), n), x),
            z = !0 !== d,
            _ = z && 'tail' !== d,
            R = gy([t, O]);
        return or.createElement(
            or.Fragment,
            null,
            z && [
                or.createElement('div', {
                    key: 'guard-first',
                    'data-focus-guard': !0,
                    tabIndex: c ? -1 : 0,
                    style: vy,
                }),
                or.createElement('div', {
                    key: 'guard-nearest',
                    'data-focus-guard': !0,
                    tabIndex: c ? -1 : 1,
                    style: vy,
                }),
            ],
            !c &&
                or.createElement(F, {
                    id: k,
                    sideCar: Ay,
                    observed: o,
                    disabled: c,
                    persistentFocus: p,
                    crossFrame: D,
                    autoFocus: m,
                    whiteList: g,
                    shards: C,
                    onActivation: S,
                    onDeactivation: T,
                    returnFocus: L,
                }),
            or.createElement(
                E,
                ir(
                    {
                        ref: R,
                    },
                    I,
                    {
                        className: h,
                        onBlur: M,
                        onFocus: P,
                    }
                ),
                l
            ),
            _ &&
                or.createElement('div', {
                    'data-focus-guard': !0,
                    tabIndex: c ? -1 : 0,
                    style: vy,
                })
        );
    });

function Sy(e) {
    return (Sy =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
              })(e);
}

function Ty(e) {
    var t = (function (e, t) {
        if ('object' != Sy(e) || !e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t);
            if ('object' != Sy(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == Sy(t) ? t : t + '';
}

function Ly(e, t, n) {
    return (
        (t = Ty(t)) in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
(ky.propTypes = {}),
    (ky.defaultProps = {
        children: void 0,
        disabled: !1,
        returnFocus: !1,
        noFocusGuards: !1,
        autoFocus: !0,
        persistentFocus: !1,
        crossFrame: !0,
        allowTextSelection: void 0,
        group: void 0,
        className: void 0,
        whiteList: void 0,
        shards: void 0,
        as: 'div',
        lockProps: {},
        onActivation: void 0,
        onDeactivation: void 0,
    });
var Py = function (e) {
        for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
        return t;
    },
    My = function (e) {
        return Array.isArray(e) ? e : [e];
    },
    Oy = function (e) {
        return e.parentNode ? Oy(e.parentNode) : e;
    },
    Iy = function (e) {
        return My(e)
            .filter(Boolean)
            .reduce(function (e, t) {
                var n = t.getAttribute(fy);
                return (
                    e.push.apply(
                        e,
                        n
                            ? (function (e) {
                                  for (var t = new Set(), n = e.length, r = 0; r < n; r += 1)
                                      for (var o = r + 1; o < n; o += 1) {
                                          var i = e[r].compareDocumentPosition(e[o]);
                                          (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o),
                                              (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
                                      }
                                  return e.filter(function (e, n) {
                                      return !t.has(n);
                                  });
                              })(Py(Oy(t).querySelectorAll('[' + fy + '="' + n + '"]:not([' + hy + '="disabled"])')))
                            : [t]
                    ),
                    e
                );
            }, []);
    },
    zy = function (e) {
        return (
            !e ||
            e === document ||
            (e && e.nodeType === Node.DOCUMENT_NODE) ||
            (!(
                (t = window.getComputedStyle(e, null)) &&
                t.getPropertyValue &&
                ('none' === t.getPropertyValue('display') || 'hidden' === t.getPropertyValue('visibility'))
            ) &&
                zy(
                    e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                        ? e.parentNode.host
                        : e.parentNode
                ))
        );
        var t;
    },
    _y = function (e) {
        return Boolean(e && e.dataset && e.dataset.focusGuard);
    },
    Ry = function (e) {
        return !_y(e);
    },
    jy = function (e) {
        return Boolean(e);
    },
    Ny = function (e, t) {
        var n = e.tabIndex - t.tabIndex,
            r = e.index - t.index;
        if (n) {
            if (!e.tabIndex) return 1;
            if (!t.tabIndex) return -1;
        }
        return n || r;
    },
    Wy = function (e, t, n) {
        return Py(e)
            .map(function (e, t) {
                return {
                    node: e,
                    index: t,
                    tabIndex: n && -1 === e.tabIndex ? ((e.dataset || {}).focusGuard ? 0 : -1) : e.tabIndex,
                };
            })
            .filter(function (e) {
                return !t || e.tabIndex >= 0;
            })
            .sort(Ny);
    },
    Vy = [
        'button:enabled',
        'select:enabled',
        'textarea:enabled',
        'input:enabled',
        'a[href]',
        'area[href]',
        'summary',
        'iframe',
        'object',
        'embed',
        'audio[controls]',
        'video[controls]',
        '[tabindex]',
        '[contenteditable]',
        '[autofocus]',
    ].join(','),
    Uy = Vy + ', [data-focus-guard]',
    Hy = function (e, t) {
        return e.reduce(function (e, n) {
            return e.concat(
                Py(n.querySelectorAll(t ? Uy : Vy)),
                n.parentNode
                    ? Py(n.parentNode.querySelectorAll(Vy)).filter(function (e) {
                          return e === n;
                      })
                    : []
            );
        }, []);
    },
    qy = function (e) {
        return Py(e)
            .filter(function (e) {
                return zy(e);
            })
            .filter(function (e) {
                return (function (e) {
                    return !(('INPUT' === e.tagName || 'BUTTON' === e.tagName) && ('hidden' === e.type || e.disabled));
                })(e);
            });
    },
    Gy = function (e, t) {
        return Wy(qy(Hy(e, t)), !0, t);
    },
    Ky = function (e) {
        return Wy(qy(Hy(e)), !1);
    },
    Yy = function (e) {
        return qy(
            ((t = e.querySelectorAll('[data-autofocus-inside]')),
            Py(t)
                .map(function (e) {
                    return Hy([e]);
                })
                .reduce(function (e, t) {
                    return e.concat(t);
                }, []))
        );
        var t;
    },
    Zy = function (e, t) {
        return void 0 === t && (t = []), t.push(e), e.parentNode && Zy(e.parentNode, t), t;
    },
    Xy = function (e, t) {
        for (var n = Zy(e), r = Zy(t), o = 0; o < n.length; o += 1) {
            var i = n[o];
            if (r.indexOf(i) >= 0) return i;
        }
        return !1;
    },
    $y = function (e, t, n) {
        var r = My(e),
            o = My(t),
            i = r[0],
            a = !1;
        return (
            o.filter(Boolean).forEach(function (e) {
                (a = Xy(a || e, e) || a),
                    n.filter(Boolean).forEach(function (e) {
                        var t = Xy(i, e);
                        t && (a = !a || t.contains(a) ? t : Xy(t, a));
                    });
            }),
            a
        );
    },
    Jy = function (e) {
        return Boolean(
            Py(e.querySelectorAll('iframe')).some(function (e) {
                return e === document.activeElement;
            })
        );
    },
    Qy = function (e) {
        var t = document && document.activeElement;
        return (
            !(!t || (t.dataset && t.dataset.focusGuard)) &&
            Iy(e).reduce(function (e, n) {
                return e || n.contains(t) || Jy(n);
            }, !1)
        );
    },
    ex = function (e) {
        return 'INPUT' === e.tagName && 'radio' === e.type;
    },
    tx = function (e, t) {
        return ex(e) && e.name
            ? (function (e, t) {
                  return (
                      t
                          .filter(ex)
                          .filter(function (t) {
                              return t.name === e.name;
                          })
                          .filter(function (e) {
                              return e.checked;
                          })[0] || e
                  );
              })(e, t)
            : e;
    },
    nx = function (e) {
        return e[0] && e.length > 1 ? tx(e[0], e) : e[0];
    },
    rx = function (e, t) {
        return e.length > 1 ? e.indexOf(tx(e[t], e)) : t;
    },
    ox = 'NEW_FOCUS',
    ix = function (e, t, n, r) {
        var o = e.length,
            i = e[0],
            a = e[o - 1],
            u = _y(n);
        if (!(e.indexOf(n) >= 0)) {
            var s,
                l,
                c = t.indexOf(n),
                d = r ? t.indexOf(r) : c,
                p = r ? e.indexOf(r) : -1,
                D = c - d,
                m = t.indexOf(i),
                f = t.indexOf(a),
                h =
                    ((s = t),
                    (l = new Set()),
                    s.forEach(function (e) {
                        return l.add(tx(e, s));
                    }),
                    s.filter(function (e) {
                        return l.has(e);
                    })),
                g = h.indexOf(n) - (r ? h.indexOf(r) : c),
                v = rx(e, 0),
                C = rx(e, o - 1);
            return -1 === c || -1 === p
                ? ox
                : !D && p >= 0
                  ? p
                  : c <= m && u && Math.abs(D) > 1
                    ? C
                    : c >= f && u && Math.abs(D) > 1
                      ? v
                      : D && Math.abs(g) > 1
                        ? p
                        : c <= m
                          ? C
                          : c > f
                            ? v
                            : D
                              ? Math.abs(D) > 1
                                  ? p
                                  : (o + p + D) % o
                              : void 0;
        }
    },
    ax = function (e, t) {
        var n = document && document.activeElement,
            r = Iy(e).filter(Ry),
            o = $y(n || e, e, r),
            i = Ky(r),
            a = Gy(r).filter(function (e) {
                var t = e.node;
                return Ry(t);
            });
        if (a[0] || (a = i)[0]) {
            var u,
                s,
                l,
                c,
                d = Ky([o]).map(function (e) {
                    return e.node;
                }),
                p =
                    ((u = d),
                    (s = a),
                    (l = new Map()),
                    s.forEach(function (e) {
                        return l.set(e.node, e);
                    }),
                    u
                        .map(function (e) {
                            return l.get(e);
                        })
                        .filter(jy)),
                D = p.map(function (e) {
                    return e.node;
                }),
                m = ix(D, d, n, t);
            if (m === ox) {
                var f = i
                    .map(function (e) {
                        return e.node;
                    })
                    .filter(
                        ((c = (function (e) {
                            return e.reduce(function (e, t) {
                                return e.concat(Yy(t));
                            }, []);
                        })(r)),
                        function (e) {
                            return e.autofocus || (e.dataset && !!e.dataset.autofocus) || c.indexOf(e) >= 0;
                        })
                    );
                return {
                    node: f && f.length ? nx(f) : nx(D),
                };
            }
            return void 0 === m ? m : p[m];
        }
    },
    ux = 0,
    sx = !1,
    lx = function (e, t) {
        var n,
            r = ax(e, t);
        if (!sx && r) {
            if (ux > 2)
                return (
                    console.error(
                        'FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting'
                    ),
                    (sx = !0),
                    void setTimeout(function () {
                        sx = !1;
                    }, 1)
                );
            ux++, (n = r.node).focus(), 'contentWindow' in n && n.contentWindow && n.contentWindow.focus(), ux--;
        }
    };

function cx(e) {
    var t = window.setImmediate;
    void 0 !== t ? t(e) : setTimeout(e, 1);
}
var dx = function () {
        return (
            (document && document.activeElement === document.body) ||
            (document &&
                Py(document.querySelectorAll('[data-no-focus-lock]')).some(function (e) {
                    return e.contains(document.activeElement);
                }))
        );
    },
    px = null,
    Dx = null,
    mx = null,
    fx = !1,
    hx = function () {
        return !0;
    };

function gx(e, t, n, r) {
    var o = null,
        i = e;
    do {
        var a = r[i];
        if (a.guard) a.node.dataset.focusAutoGuard && (o = a);
        else {
            if (!a.lockItem) break;
            if (i !== e) return;
            o = null;
        }
    } while ((i += n) !== t);
    o && (o.node.tabIndex = 0);
}
var vx = function (e) {
        return e && 'current' in e ? e.current : e;
    },
    Cx = function () {
        var e,
            t,
            n,
            r,
            o,
            i,
            a = !1;
        if (px) {
            var u = px,
                s = u.observed,
                l = u.persistentFocus,
                c = u.autoFocus,
                d = u.shards,
                p = u.crossFrame,
                D = s || (mx && mx.portaledElement),
                m = document && document.activeElement;
            if (D) {
                var f = [D].concat(d.map(vx).filter(Boolean));
                if (
                    ((m &&
                        !(function (e) {
                            return (px.whiteList || hx)(e);
                        })(m)) ||
                        ((l || (p ? Boolean(fx) : 'meanwhile' === fx) || !dx() || (!Dx && c)) &&
                            (!D ||
                                Qy(f) ||
                                ((i = m), mx && mx.portaledElement === i) ||
                                (document && !Dx && m && !c
                                    ? (m.blur && m.blur(), document.body.focus())
                                    : ((a = lx(f, Dx)), (mx = {}))),
                            (fx = !1),
                            (Dx = document && document.activeElement))),
                    document)
                ) {
                    var h = document && document.activeElement,
                        g =
                            ((t = Iy((e = f)).filter(Ry)),
                            (n = $y(e, e, t)),
                            (r = Gy([n], !0)),
                            (o = Gy(t)
                                .filter(function (e) {
                                    var t = e.node;
                                    return Ry(t);
                                })
                                .map(function (e) {
                                    return e.node;
                                })),
                            r.map(function (e) {
                                var t = e.node;
                                return {
                                    node: t,
                                    index: e.index,
                                    lockItem: o.indexOf(t) >= 0,
                                    guard: _y(t),
                                };
                            })),
                        v = g
                            .map(function (e) {
                                return e.node;
                            })
                            .indexOf(h);
                    v > -1 &&
                        (g
                            .filter(function (e) {
                                var t = e.guard,
                                    n = e.node;
                                return t && n.dataset.focusAutoGuard;
                            })
                            .forEach(function (e) {
                                return e.node.removeAttribute('tabIndex');
                            }),
                        gx(v, g.length, 1, g),
                        gx(v, -1, -1, g));
                }
            }
        }
        return a;
    },
    bx = function (e) {
        Cx() && e && (e.stopPropagation(), e.preventDefault());
    },
    Ex = function () {
        return cx(Cx);
    },
    yx = function () {
        (fx = 'just'),
            setTimeout(function () {
                fx = 'meanwhile';
            }, 0);
    };
xy.assignSyncMedium(function (e) {
    var t = e.target,
        n = e.currentTarget;
    n.contains(t) ||
        (mx = {
            observerNode: n,
            portaledElement: t,
        });
}),
    Fy.assignMedium(Ex),
    wy.assignMedium(function (e) {
        return e({
            moveFocusInside: lx,
            focusInside: Qy,
        });
    });
const xx = ((Fx = function (e) {
    return e.filter(function (e) {
        return !e.disabled;
    });
}),
(wx = function (e) {
    var t = e.slice(-1)[0];
    t &&
        !px &&
        (document.addEventListener('focusin', bx, !0),
        document.addEventListener('focusout', Ex),
        window.addEventListener('blur', yx));
    var n = px,
        r = n && t && t.id === n.id;
    (px = t),
        n &&
            !r &&
            (n.onDeactivation(),
            e.filter(function (e) {
                return e.id === n.id;
            }).length || n.returnFocus(!t)),
        t
            ? ((Dx = null), (r && n.observed === t.observed) || t.onActivation(), Cx(), cx(Cx))
            : (document.removeEventListener('focusin', bx, !0),
              document.removeEventListener('focusout', Ex),
              window.removeEventListener('blur', yx),
              (Dx = null));
}),
function (e) {
    var t,
        n = [];

    function r() {
        (t = Fx(
            n.map(function (e) {
                return e.props;
            })
        )),
            wx(t);
    }
    var o = (function (o) {
        function i() {
            return o.apply(this, arguments) || this;
        }
        Be(i, o),
            (i.peek = function () {
                return t;
            });
        var a = i.prototype;
        return (
            (a.componentDidMount = function () {
                n.push(this), r();
            }),
            (a.componentDidUpdate = function () {
                r();
            }),
            (a.componentWillUnmount = function () {
                var e = n.indexOf(this);
                n.splice(e, 1), r();
            }),
            (a.render = function () {
                return rr.createElement(e, this.props);
            }),
            i
        );
    })(or.PureComponent);
    return (
        Ly(
            o,
            'displayName',
            'SideEffect(' +
                (function (e) {
                    return e.displayName || e.name || 'Component';
                })(e) +
                ')'
        ),
        o
    );
})(function () {
    return null;
});
var Fx,
    wx,
    Ax = or.forwardRef(function (e, t) {
        return or.createElement(
            ky,
            ir(
                {
                    sideCar: xx,
                    ref: t,
                },
                e
            )
        );
    }),
    Bx = ky.propTypes || {};
Bx.sideCar, ur(Bx, ['sideCar']), (Ax.propTypes = {});
const kx = ['children', 'animationEnded', 'onTransitionEnd', 'isFooterHidden'],
    Sx = 'transform, height, bottom, min-height, max-height, box-shadow, z-index, border-radius';
var Tx = {
        name: 'dig7ox',
        styles: 'height:calc(100% - 36px);bottom:35px',
    },
    Lx = {
        name: '1vljhnn',
        styles: 'height:calc(100% - 100px);bottom:100px',
    };
const Px = or.forwardRef(function (e, t) {
        let { children: n, animationEnded: r, onTransitionEnd: o } = e,
            i = ur(e, kx);
        const a = or.useRef(null),
            u = Xd(a, t),
            s = Fg();
        nD('touchmove', a), eD(s ? null : a);
        const l = ni(e => e.getApplicationState('defaultWidget')),
            c = ni(e => e.getCurrentView()),
            d = ni(e => lt(e)),
            p = 'livechat' === l && 'Chat' !== c && 'modern' !== d;
        return wu(
            Ax,
            {
                autoFocus: !1,
                returnFocus: !0,
                crossFrame: !1,
                css: e =>
                    (e => {
                        let { animationEnded: t, theme: n, areTabsVisible: r } = e;
                        return Bu(
                            'position:absolute;z-index:1500;display:flex;flex-direction:column;max-height:100%;left:10px;right:10px;border-radius:inherit;color:',
                            n.colors.primaryTextColor,
                            ';box-shadow:none;',
                            t && {
                                transitionProperty: Sx,
                                transitionDuration: '300ms',
                                transitionTimingFunction: '' + n.transitions.easings.swift,
                                willChange: Sx,
                            },
                            ' ',
                            r ? Lx : Tx,
                            ';'
                        );
                    })({
                        animationEnded: r,
                        theme: e,
                        areTabsVisible: p,
                    }),
                ref: u,
                lockProps: ir(
                    {
                        role: 'dialog',
                        'aria-modal': !0,
                        onTransitionEnd: o,
                    },
                    i
                ),
            },
            n
        );
    }),
    Mx = [].concat(Object.values(mt), ['https://customer-mobile-app.ngrok.io/chat-widget-moment/']),
    Ox = e => {
        const t = ft(e);
        return Mx.some(e => 0 === t.lastIndexOf(e, 0));
    },
    Ix = (e, t) => {
        const n = e.getView('Moment');
        return {
            available: ct(e),
            disabled: n.show && !!n.data.url && !Ox(n.data.url),
            showMoment: n => {
                const r = Ar({
                        source: t,
                        'moment-title': dt,
                    }),
                    o = {
                        url: mt.production + '?' + r,
                    };
                n && (o.triggeredTarget = pt(n)), Dt(e, o);
            },
        };
    },
    zx = {
        scrolling: 'yes',
        style: {
            position: 'absolute',
            minWidth: '100%',
            minHeight: '100%',
            height: '1px',
            width: '1px',
            margin: '0',
            padding: '0',
            background: 'none',
            border: '0',
        },
    },
    _x = (e, t) =>
        ir(
            {
                moment_url: Br(e) + Et(e),
                moment_origin: Br(e) || '',
            },
            t && {
                ui_source: t,
            }
        ),
    Rx = e =>
        Bu(
            'flex-grow:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch;display:',
            e ? 'none' : 'block',
            ';background-color:#ffffff;'
        ),
    jx = (e, t, n) => {
        const r = document.createElement('iframe');
        return (r.allow = n), (r.src = t), e.appendChild(r), r;
    },
    Nx = e => {
        let {
            id: t,
            url: n,
            close: r,
            hidden: o,
            sendMessage: i,
            sendSystemMessage: a,
            setAttributes: u,
            onLoadingChanged: s,
            onMomentDataChanged: l,
            iframeAllowedProperties: c,
            getCustomerToken: d,
            updateCustomerData: p,
            licenseId: D,
            chatId: m,
            groupId: f,
            source: h,
        } = e;
        const g = or.useRef(void 0),
            v = or.useRef(ar),
            C = or.useRef(ar),
            b = or.createRef();
        return (
            (v.current = () => {
                if (!n || !b.current) return;
                const e = () => {
                        g.current && (s(!1), g.current.frame.removeEventListener('load', e));
                    },
                    t = {
                        close: r,
                        sendMessage: i,
                        setAttributes: u,
                        updateCustomerData: p,
                        licenseId: D,
                        chatId: m,
                        groupId: f,
                        setExternalLink(e) {
                            l({
                                externalLink: e,
                            });
                        },
                        setIsFragile() {},
                        setTitle(e) {
                            l({
                                title: e,
                            });
                        },
                        getIdentityTransferToken() {
                            if (Ox(n))
                                return d()
                                    .then(e =>
                                        (e => {
                                            let { accessToken: t } = e;
                                            return ht(gt('accounts') + '/customer/identity_transfer', {
                                                method: 'POST',
                                                headers: {
                                                    Authorization: 'Bearer ' + t,
                                                },
                                                body: JSON.stringify({
                                                    bearer_type: 'customer',
                                                    client_id: 'c5e4f61e1a6c3b1521b541bc5c5a2ac5',
                                                }),
                                            })
                                                .then(e => e.json())
                                                .then(e => Oe(vt, e));
                                        })(e)
                                    )
                                    .catch(e => e);
                            throw new Error('Moment App not authorized');
                        },
                    };
                if (
                    (a && (t.sendSystemMessage = a),
                    (g.current = Ct(
                        {
                            frame: jx(b.current, n, c),
                            url: n,
                            onConnected: e => {
                                let { data: t } = e;
                                s(!1), l(t);
                            },
                        },
                        t
                    )),
                    b.current)
                ) {
                    const e = b.current.querySelector('iframe');
                    e && e.setAttribute('data-testid', 'moment-app');
                }
                ci(zx, g.current.frame),
                    s(!0),
                    g.current.frame.addEventListener('load', e),
                    l({
                        title: g.current.title,
                    }),
                    bt('moment_opened', _x(ft(n), h));
            }),
            (C.current = () => {
                g.current &&
                    (g.current.destroy(),
                    b.current && (b.current.innerHTML = ''),
                    l(null),
                    s(!1),
                    (g.current = void 0)),
                    n && bt('moment_closed', _x(ft(n)));
            }),
            or.useEffect(() => (v.current(), () => C.current()), [n]),
            wu('div', {
                id: t,
                ref: b,
                css: Rx(o),
                onScroll: e => {
                    (e => {
                        if (!e) return;
                        const t = e.scrollTop,
                            n = e.scrollHeight - e.offsetHeight;
                        0 === t ? (e.scrollTop = 1) : t === n && (e.scrollTop = n - 1);
                    })(e.currentTarget);
                },
            })
        );
    },
    Wx = 'set_can_be_shown',
    Vx = 'main_transition_start',
    Ux = 'main_transition_end',
    Hx = 'drawer_transition_end',
    qx = 'reset_collapsed',
    Gx = () => ({
        type: Wx,
    }),
    Kx = () => ({
        type: Vx,
    }),
    Yx = () => ({
        type: Ux,
    }),
    Zx = () => ({
        type: Hx,
    }),
    Xx = () => ({
        type: qx,
    }),
    $x = (e, t) => {
        switch (t.type) {
            case Wx:
                return ir({}, e, {
                    canBeShown: !0,
                });
            case qx:
                return ir({}, e, {
                    animationEnded: !1,
                });
            case Vx:
                return ir({}, e, {
                    isAnimating: !0,
                });
            case Ux:
                return ir({}, e, {
                    isAnimating: !1,
                    animationEnded: !0,
                });
            case Hx:
                return ir({}, e, {
                    isExpanding: !1,
                });
            default:
                return e;
        }
    },
    Jx = ['url'],
    Qx = jD($E, {
        target: 'e1crrbvm4',
    })(
        'text-align:left;',
        e => {
            let { theme: t } = e;
            return t.typography.basic;
        },
        ';'
    ),
    eF = {
        name: 'zjik7',
        styles: 'display:flex',
    },
    tF = jD('div', {
        target: 'e1crrbvm3',
    })(
        'background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.floatSurface;
        },
        ';display:flex;flex-grow:1;border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.xxl;
        },
        ';overflow:hidden;'
    ),
    nF = Bu(
        Qx,
        ';background-color:transparent;color:inherit;display:flex;align-items:center;border:none;padding:0;padding-right:10px;position:relative;&:hover{color:inherit;}'
    ),
    rF = jD('div', {
        target: 'e1crrbvm2',
    })({
        name: '1sqak2y',
        styles: 'position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;z-index:1',
    }),
    oF = jD(JE, {
        target: 'e1crrbvm1',
    })({
        name: '1g8u6m8',
        styles: 'padding:0;justify-content:space-between',
    }),
    iF = jD('div', {
        target: 'e1crrbvm0',
    })(
        'width:8px;height:8px;border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.round;
        },
        ';background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.notification;
        },
        ';position:absolute;top:5px;left:20px;'
    ),
    aF = e => {
        const t = e.getView('Moment'),
            {
                show: n,
                data: { url: r },
            } = t,
            o = ur(t.data, Jx),
            i = e.getApplicationState('license'),
            a = e.getApplicationState('group'),
            u = Bt(e),
            s = u ? e.getUnseenCount(u) : 0,
            l = u === xe ? kt(e) : null;
        return {
            show: n,
            momentData: o,
            url: r,
            licenseId: String(i),
            isFooterHidden: St(e),
            updateMomentData: t => {
                const n = e.getView('Moment');
                e.updateView('Moment', {
                    data: ir({}, n.data, t),
                });
            },
            chatId: u,
            chatServerId: l,
            unseenCount: s,
            groupId: null != a ? a : 0,
        };
    };
var uF = {
    name: '21xn5r',
    styles: 'transform:rotate(180deg)',
};
const sF = e => {
        let { onSendMessage: t } = e;
        const {
                show: n,
                url: r,
                licenseId: o,
                isFooterHidden: i,
                updateMomentData: a,
                chatId: u,
                chatServerId: s,
                groupId: l,
                unseenCount: c,
                momentData: d,
            } = ni(aF),
            p = ti(),
            D = {
                canBeShown: !1,
                isExpanding: !0,
                isAnimating: !1,
                animationEnded: !1,
            },
            [{ canBeShown: m, isAnimating: f, animationEnded: h }, g] = or.useReducer($x, D, () => ir({}, D)),
            v = or.useRef(null),
            [C, b] = or.useState(!1),
            [E, y] = or.useState({}),
            x = or.useCallback(() => yt(p), [p]),
            [F, w] = (function (e, t) {
                const [n, r] = or.useState(e),
                    o = or.useRef(null);
                return (
                    or.useEffect(() => {
                        (o.current = e ? document.activeElement : null), r(e);
                    }, [e, o]),
                    [
                        n,
                        () => {
                            t(), o.current instanceof HTMLElement && o.current.focus();
                        },
                    ]
                );
            })(m && n, () => x()),
            A = f || C,
            B = os(),
            k = p.localize,
            S = or.useCallback(
                e =>
                    xt(p, {
                        properties: e,
                    }),
                [p]
            ),
            T = or.useCallback(
                e => {
                    ['email', 'name'].forEach(t => {
                        ((e[t] && 'string' != typeof e[t]) || '' === e[t]) && delete e[t];
                    }),
                        (e.email || e.name) && xt(p, e);
                },
                [p]
            ),
            L = or.useCallback(e => u && Ft(p, u, e), [p, u]),
            P = or.useMemo(
                () =>
                    (e => {
                        let {
                                allowAutoplay: t,
                                allowVideoConferencing: n,
                                allowClipboardWrite: r,
                                allowDisplayCapture: o,
                            } = e,
                            i = ['clipboard-read; clipboard-write;'];
                        if ((t && !st() && i.push('autoplay;'), o && i.push('display-capture *;'), n)) {
                            const e = {
                                'display-capture *;': !at() || ut() >= 94,
                                'picture-in-picture *;': 'PictureInPictureEvent' in window,
                                'fullscreen *;': 'function' == typeof Element.prototype.requestFullscreen,
                            };
                            i = [].concat(i, ['microphone *;', 'camera *;'], Object.keys(Ae(Boolean, e)));
                        }
                        return r && !st() && i.push('clipboard-write *;'), i.join(' ');
                    })({
                        allowVideoConferencing: wt(p, 'microphone'),
                        allowClipboardWrite: wt(p, 'clipboard_write'),
                    }),
                [p]
            ),
            M = or.useCallback(e => u && At(p, u, e), [p, u]),
            O = or.useCallback(
                () =>
                    new Promise((e, t) => {
                        p.once('customer_token_response', e),
                            p.once('customer_token_error', t),
                            p.emit('request_customer_token');
                    }),
                [p]
            ),
            I = or.useCallback(e => (p.on('request_close_moment', e), () => p.off('request_close_moment', e)), [p]),
            z = or.useCallback(e => (p.on('request_expand_moment', e), () => p.off('request_expand_moment', e)), [p]),
            _ = or.useCallback(
                e =>
                    p.updateView('Moment', {
                        show: !0,
                        data: e,
                    }),
                [p]
            ),
            R = or.useCallback(
                function (e) {
                    return void 0 === e && (e = !1), it(p, !1, e);
                },
                [p]
            );
        return (
            X(E) && !X(d) && y(ir({}, E, d)),
            cD(
                or.useCallback(() => g(Gx()), []),
                300
            ),
            or.useEffect(() => {
                d.wasTriggeredByGreeting &&
                    h &&
                    _(
                        ir({}, d, {
                            url: r,
                            wasTriggeredByGreeting: !1,
                        })
                    );
            }, [h, r, d, _]),
            or.useEffect(() => {
                const e = I(() => {
                    R(!0);
                });
                return () => e();
            }, [R, I]),
            or.useEffect(() => {
                const e = z(e => {
                    null != e && e.nextMoment && (w(), _(e.nextMoment));
                });
                return () => e();
            }, [z, w, _]),
            or.useEffect(() => {
                !F && h && g(Xx());
            }, [F, h]),
            wu(
                or.Fragment,
                null,
                wu(cy, {
                    fullCover: !0,
                    shown: n,
                    zIndex: 99,
                }),
                wu(
                    my,
                    {
                        target: E.triggeredTarget,
                        show: F,
                        nodeRef: v,
                        onTransitionEnd: () => {
                            g(Yx());
                        },
                        onTransitionStart: () => {
                            g(Kx());
                        },
                    },
                    wu(
                        Px,
                        {
                            ref: v,
                            animationEnded: h,
                            isFooterHidden: i,
                            onTransitionEnd: () => g(Zx()),
                        },
                        wu(
                            oF,
                            {
                                noShrink: !0,
                            },
                            wu(sh, {
                                onPress: w,
                                css: nF,
                                autoFocus: !0,
                                label: wu(
                                    or.Fragment,
                                    null,
                                    wu(Rg, {
                                        'aria-hidden': !0,
                                        css: uF,
                                    }),
                                    c > 0 && wu(iF, null),
                                    wu('span', null, k('go_back_to_homescreen') || k('back'))
                                ),
                            }),
                            E.externalLink &&
                                wu(
                                    or.Fragment,
                                    null,
                                    wu(
                                        Qv,
                                        {
                                            href: E.externalLink,
                                            rel: 'nofollow noopener noreferrer',
                                            css: eF,
                                            'aria-label': k('open_new_tab'),
                                        },
                                        wu(av, {
                                            'aria-hidden': !0,
                                        })
                                    )
                                )
                        ),
                        wu(
                            tF,
                            null,
                            wu(
                                Nx,
                                ir(
                                    {
                                        id: B,
                                        hidden: A,
                                        close: w,
                                        url: r,
                                        licenseId: o,
                                        groupId: l,
                                        source: E.source,
                                        sendMessage: e => {
                                            let { text: n } = e;
                                            L(n), t && t(n);
                                        },
                                        sendSystemMessage: M,
                                        setAttributes: S,
                                        setTitle: e =>
                                            y(t =>
                                                ir({}, t, {
                                                    title: e,
                                                })
                                            ),
                                        updateCustomerData: T,
                                        onMomentDataChanged: e => {
                                            e && (e.title || e.icon) && a(e), y(t => (e ? ir({}, t, e) : {}));
                                        },
                                        onLoadingChanged: b,
                                        iframeAllowedProperties: P,
                                        getCustomerToken: O,
                                    },
                                    s && {
                                        chatId: s,
                                    }
                                )
                            )
                        ),
                        A &&
                            wu(
                                rF,
                                null,
                                wu(vC, {
                                    size: 'xlarge',
                                    style: {
                                        margin: 'auto',
                                    },
                                })
                            )
                    )
                )
            )
        );
    },
    lF = or.createContext({}),
    cF = () => or.useContext(lF),
    dF = e => {
        let { children: t } = e;
        const n = lD(!0),
            r = lD(!0),
            o = lD(!1),
            i = lD(0),
            a = or.useMemo(
                () => ({
                    isAgentBarExpandedSource: n,
                    isOnBottomSource: r,
                    dynamicIslandAbsoluteTopSource: i,
                    isCollapseOnScrollLocked: o,
                }),
                [i, n, o, r]
            );
        return or.createElement(
            lF.Provider,
            {
                value: a,
            },
            t
        );
    },
    pF = or.lazy(() => qr(() => Lg(() => import('./19.BHfCfdhJ.chunk.js').then(e => e.M), []))),
    DF = jD('div', {
        displayName: 'ApplicationWrapper',
        target: 'edvz03i3',
    })({
        name: 'jcdn5o',
        styles: 'position:absolute;top:0;left:auto;right:0;bottom:0;width:100%;height:100%;will-change:tranform,opacity;backface-visibility:hidden',
    }),
    mF = jD('div', {
        displayName: 'Maximized',
        target: 'edvz03i2',
    })(
        'position:relative;display:flex;flex-direction:column;min-width:0;height:100%;box-shadow:',
        e => {
            let { theme: t } = e;
            return t.boxShadow.floating;
        },
        ';overflow:auto;background:',
        e => {
            let { theme: t } = e;
            return t.colors.surface;
        },
        ';isolation:isolate;',
        e => {
            let { theme: t } = e;
            return (
                'dark' === t.variant && {
                    colorScheme: 'dark',
                }
            );
        },
        ';',
        e => {
            let { expandToEdge: t, theme: n } = e;
            return {
                borderRadius: t ? n.borderRadius.none + ' !important' : n.borderRadius.xxxl,
            };
        },
        ';'
    ),
    fF = jD('div', {
        target: 'edvz03i1',
    })({
        name: 'dhssmq',
        styles: 'flex-grow:1;display:flex;align-items:center;justify-content:center',
    }),
    hF = jD(XE, {
        target: 'edvz03i0',
    })({
        name: 'us6u8p',
        styles: 'position:absolute;top:0.8em;right:0.8em',
    }),
    gF = () => {
        const e = bu(),
            { defaultWidget: t } = ni(e => e.getApplicationState()),
            n = ni(e => Tt(e)),
            [r, o] = or.useState(!1);
        return (
            cD(() => o(!0), 500),
            r
                ? wu(
                      fF,
                      null,
                      n &&
                          wu(hF, {
                              primaryColor: !0,
                          }),
                      'openwidget' === t
                          ? wu(uv, {
                                size: 64,
                                css: Cm,
                                color: e.colors.border,
                            })
                          : wu(rv, {
                                size: 64,
                                css: Cm,
                                color: e.colors.border,
                                backgroundColor: e.colors.surface,
                            })
                  )
                : null
        );
    },
    vF = or.forwardRef(function (e, t) {
        let {
            dir: n,
            showMinimizedButton: r,
            isMainViewVisible: o,
            expandToEdge: i,
            onMinimizeButtonPress: a,
            onDragEnter: u,
        } = e;
        const s = Fg();
        return wu(
            DF,
            ir(
                {},
                s && {
                    id: 'chat-widget-maximized',
                },
                {
                    dir: n,
                    expandToEdge: i,
                    ref: t,
                    onDragEnter: u,
                }
            ),
            wu(
                mF,
                {
                    expandToEdge: i,
                    role: 'main',
                },
                o
                    ? wu(
                          or.Suspense,
                          {
                              fallback: wu(gF, null),
                          },
                          wu(
                              dF,
                              null,
                              wu(pF, {
                                  showMinimizedButton: r,
                                  onMinimizeButtonPress: a,
                              })
                          )
                      )
                    : wu(gF, null),
                wu(sF, null)
            )
        );
    }),
    CF = e => {
        let { message: t, 'aria-live': n, clearOnUnmount: r } = e;
        const o = ti(),
            i = Hu.static,
            a = Lt(t);
        return (
            Hu(() => {
                if (i)
                    return (
                        o.emit('set-live-announcer-message', {
                            message: a,
                            ariaLevel: n,
                        }),
                        r
                            ? () => {
                                  o.emit('set-live-announcer-message', {
                                      message: '',
                                      ariaLevel: n,
                                  });
                              }
                            : void 0
                    );
            }, [o]),
            i
                ? null
                : rr.createElement(Cd, {
                      message: a,
                      'aria-live': n,
                      clearOnUnmount: r,
                  })
        );
    },
    bF = ['mobile'],
    EF = jD(ev, {
        target: 'e241ssi0',
    })(
        'width:',
        vi(24),
        ';height:',
        vi(24),
        ';border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.round;
        },
        ';background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.surface;
        },
        ';margin-bottom:',
        e => {
            let { theme: t } = e;
            return 0.5 * t.spaceBase;
        },
        'px;opacity:',
        e => {
            let { mobile: t } = e;
            return !Pt() || t ? '1' : '0';
        },
        ';color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';&:focus{opacity:1;}'
    ),
    yF = Bu('font-size:', vi(24), ';'),
    xF = e => {
        let { mobile: t = !1 } = e,
            n = ur(e, bF);
        return wu(
            EF,
            ir(
                {
                    skipFocusVisible: !0,
                    mobile: t,
                },
                n
            ),
            wu(Ng, {
                css: yF,
                'aria-hidden': !0,
            })
        );
    };
var FF, wF;
const AF = ku(
        FF ||
            (FF = si([
                '\n\tfrom {\n\t\topacity: 0;\n    transform: translateY(50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n',
            ]))
    ),
    BF = ku(
        wF ||
            (wF = si([
                '\n\tfrom {\n    opacity: 1;\n    transform: translateY(0);\n\t}\n\tto {\n    opacity: 0;\n    transform: translateY(50px);\n\t}\n',
            ]))
    ),
    kF = yr ? 100 : 600,
    SF = yr ? 0 : 300,
    TF = jD('div', {
        target: 'eu700o11',
    })(
        'opacity:',
        e => {
            let { shouldUseEnterTransition: t } = e;
            return t ? 0 : 1;
        },
        ';display:inline-flex;flex-direction:column;white-space:nowrap;cursor:default;z-index:2;margin-bottom:',
        e => {
            let { theme: t } = e;
            return t.spaces.space4;
        },
        ';&:hover{flex-direction:column;',
        EF,
        '{opacity:1;}}',
        Vm,
        '{color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.surface;
        },
        ';box-shadow:',
        e => {
            let { theme: t } = e;
            return t.boxShadow.subtle;
        },
        ';}',
        e => {
            let { theme: t, transitionState: n, shouldUseEnterTransition: r } = e;
            return r && 'shown' === n
                ? Bu(
                      'animation:',
                      AF,
                      ';animation-duration:',
                      kF,
                      'ms;animation-delay:',
                      SF,
                      'ms;animation-timing-function:',
                      t.transitions.easings.swift,
                      ';animation-fill-mode:forwards;'
                  )
                : 'closed' === n
                  ? Bu(
                        'animation:',
                        BF,
                        ';animation-duration:',
                        kF,
                        'ms;animation-timing-function:',
                        t.transitions.easings.swift,
                        ';animation-fill-mode:forwards;'
                    )
                  : void 0;
        },
        ';'
    ),
    LF = jD(rm, {
        target: 'eu700o10',
    })(e => {
        let { theme: t } = e;
        return t.typography.basic;
    }, ' max-width:100%;cursor:pointer;'),
    PF = e => {
        var t;
        let { transitionState: n, screenPosition: r, text: o, mobile: i } = e;
        const a = ti(),
            u = Fg(),
            { hasSeen: s } = null == (t = a.getApplicationState()) ? void 0 : t.chatBotGreeting;
        Hu(() => {
            s &&
                (a.emit(
                    'resize-request',
                    i
                        ? {
                              width: '100%',
                          }
                        : {
                              width: '360px',
                          }
                ),
                a.once('resize-request-done', () => a.emit('resize-to-dimensions')));
        }, [a, s]);
        return rr.createElement(
            TF,
            ir(
                {
                    transitionState: n,
                    shouldUseEnterTransition: !s,
                },
                Uu({
                    onAnimationStart: gr(() => {
                        a.emit(
                            'resize-request',
                            i
                                ? {
                                      width: '100%',
                                  }
                                : {
                                      width: '360px',
                                  }
                        ),
                            a.once('resize-request-done', () => a.emit('resize-to-dimensions'));
                    }),
                    onAnimationEnd: gr(() => {
                        Mt(a, {
                            hasSeen: !0,
                        });
                    }),
                })
            ),
            rr.createElement(CF, {
                message: o,
                clearOnUnmount: !0,
                'aria-live': 'polite',
            }),
            rr.createElement(
                rm,
                {
                    reverse: 'right' === r,
                },
                rr.createElement(
                    xF,
                    ir(
                        {},
                        Uu({
                            onClick: e => {
                                if (u) return null == e || e.preventDefault(), void (null == e || e.stopPropagation());
                                Mt(a, {
                                    transitionState: 'closed',
                                    hidden: !0,
                                }),
                                    setTimeout(() => {
                                        Mt(a, {
                                            transitionState: 'hidden',
                                            text: null,
                                        });
                                    }, kF);
                            },
                        }),
                        {
                            'aria-label': a.localize('hide_invitation'),
                            mobile: i,
                        }
                    )
                )
            ),
            rr.createElement(
                LF,
                Uu({
                    onClick: () => {
                        'Chat' !== a.getCurrentView() && a.setCurrentView('Chat'),
                            Ot(a),
                            u ||
                                Mt(a, {
                                    hidden: !0,
                                    transitionState: 'hidden',
                                    hasSeen: !0,
                                });
                    },
                }),
                rr.createElement(yE, {
                    text: o,
                })
            )
        );
    },
    MF = jD('svg', {
        target: 'exnyfh40',
    })(
        'height:',
        e => {
            let { height: t } = e;
            return t;
        },
        'px;max-width:',
        e => {
            let { maxWidth: t } = e;
            return t;
        },
        'px;'
    ),
    OF = e => {
        const t = e.getView('Moment');
        var n, r;
        return null != t && t.show
            ? {
                  trademarkLink: null == (n = t.data) ? void 0 : n.trademarkLink,
                  title: null != (r = t.data.trademarkLinkAnchor) ? r : t.data.title,
                  icon: t.data.icon,
              }
            : (e => {
                  if ('HelpdeskTicketForm' === e.getCurrentView()) {
                      var t, n;
                      const r = (null != (t = null == (n = e.getView('Homescreen')) ? void 0 : n.apps) ? t : []).find(
                          e => It(e.id)
                      );
                      return r
                          ? {
                                trademarkLink:
                                    'https://helpdesk.com?utm_source=chat_window&utm_medium=referral&utm_campaign=home_screen',
                                title: 'Powered by HelpDesk',
                                icon: null == r ? void 0 : r.icon,
                            }
                          : null;
                  }
                  return null;
              })(e);
    },
    IF = e => {
        let { fill: t, maxWidth: n, height: r, className: o } = e;
        return or.createElement(
            MF,
            {
                fill: 'none',
                width: n,
                height: r,
                viewBox: '0 0 160 160',
                maxWidth: n,
                className: o,
            },
            or.createElement('path', {
                d: 'M35.7456021,1.53601172 C64.2568137,-0.511998205 95.8777154,-0.512005929 124.388706,1.53600068 C142.54061,2.83986826 157.41875,17.0089937 158.905019,35.5119454 C160.387978,53.9744005 160.322878,80.9824003 158.962396,99.4327175 C157.468403,119.698759 140.208039,134.042483 120.933985,134.042483 L100.142216,134.028138 L59.9969477,160 L59.9969477,134.000552 L38.9871476,133.985104 C19.713535,133.985104 2.41363717,119.698759 0.919254708,99.4327175 C-0.441234423,80.9824003 -0.253326741,53.9744005 1.22978567,35.5119454 C2.71613212,17.0089937 17.5939187,2.8398793 35.7456021,1.53601172 Z M122.52618,27.469242 C95.2551815,25.5102902 64.8793476,25.5102902 37.6082384,27.469242 C31.8996185,27.8792833 27.5742109,32.2505937 27.1449914,37.5939316 C25.7683994,54.7297108 25.5852363,80.4024279 26.8475169,97.520552 C27.2644888,103.174731 32.2285397,108.028248 38.9442256,108.028248 L59.9969477,108.028248 L59.9969477,134.000552 L100.141885,108.028248 L120.937296,108.028248 C127.653644,108.028248 132.617805,103.174731 133.034887,97.520552 C134.297168,80.4023176 134.365578,54.7297108 132.989648,37.5939316 C132.560428,32.2505937 128.235131,27.8792833 122.52618,27.469242 Z M111.847551,58.9209384 C114.657891,57.7246901 117.993445,59.7626487 117.993445,62.8168832 L117.993445,78.4793383 C117.993445,80.6531314 116.817229,82.6535727 114.849881,83.5783727 L111.821429,84.9321033 C104.883971,87.8828772 92.8935125,92.0000003 79.9959302,92.0000003 C64.9486406,92.0000003 51.1362674,86.3961382 45.1420896,83.5783727 C43.1749621,82.6535727 41.9978634,80.6531314 41.9978634,78.4793383 L41.9978634,62.8168832 C41.9978634,59.7626487 45.3343005,57.7246901 48.1443093,58.9209384 C55.0775841,61.8724418 67.0820493,66.0000004 79.9959302,66.0000004 C92.9098112,66.0000004 104.914166,61.8724418 111.847551,58.9209384 Z',
                fill: t,
            })
        );
    },
    zF = e => {
        let { fill: t, maxWidth: n, height: r, className: o } = e;
        return or.createElement(
            MF,
            {
                width: n,
                height: r,
                viewBox: '0 0 460 80',
                className: o,
            },
            or.createElement(
                'g',
                {
                    stroke: 'none',
                    strokeWidth: '1',
                },
                or.createElement('path', {
                    d: 'M32.6948136,80 C51.606052,80 63.2518726,67.1431476 64,51.8216941 L50.1106641,51.8216941 C49.1484145,60.2859741 43.806629,67.6789077 32.6948136,67.6789077 C20.1942379,67.6789077 14.8515855,59.1074409 14.8515855,47.1073874 L14.8515855,34.8930472 C14.8515855,22.8929937 20.1942379,14.321527 32.6948136,14.321527 C43.806629,14.321527 49.1484145,21.7143736 50.1106641,30.1787405 L64,30.1787405 C63.2518726,14.8572002 51.606052,2 32.6948136,2 C10.1504328,2 0,16.4643937 0,35.6430071 L0,46.3573406 C0,65.536041 10.1504328,80 32.6948136,80 Z M72,78 L86.2697453,78 L86.2697453,45.0903608 C86.2697453,37.6109171 90.3620174,33.764346 96.7622051,33.764346 C103.686803,33.764346 106.730255,38.3589048 106.730255,44.7698566 L106.730255,78 L121,78 L121,42.4191743 C121,29.2766798 113.550141,21.1561409 101.693874,21.1561409 C94.6637131,21.1561409 89.1029223,24.2548109 86.2697453,29.0629814 L86.2697453,0 L72,0 L72,78 Z M150.019299,79 C156.420919,79 163.462267,76.3347791 166.022915,72.6028642 L166.022915,77.7205901 L180,77.7205901 L180,42.3234976 C180,29.4228248 170.504481,21 156.633873,21 C144.684184,21 136.042214,26.7573444 132.840972,37.5257539 L146.284805,37.5257539 C147.778083,34.5404642 150.872849,32.3014537 155.886801,32.3014537 C161.861646,32.3014537 165.489663,36.1396833 165.489663,41.2573227 L165.489663,48.8272076 C162.929015,46.6948579 158.020674,44.1360382 151.4061,44.1360382 C138.06961,44.1360382 129,49.6801475 129,61.7278804 C129,72.49629 137.535492,79 150.019299,79 Z M152.952169,69 C146.709655,69 142,66.0133333 142,60.8933333 C142,55.7733333 146.380868,53 153.390256,53 C160.071746,53 165,55.8800433 165,60.7867099 C165,65.4800433 159.523471,69 152.952169,69 Z M207.021821,78 L217.2389,78 L217.2389,66.2023444 L211.261226,66.2023444 C207.348133,66.2023444 205.93441,64.7008356 205.93441,61.0543144 L205.93441,34.0271572 L218,34.0271572 L218,22.2295886 L205.93441,22.2295886 L205.93441,7 L191.043139,7 L191.043139,22.2295886 L183,22.2295886 L183,34.0271572 L191.043139,34.0271572 L191.043139,62.1268207 C191.043139,71.993878 196.152119,78 207.021821,78 Z M224,78 L257.850074,78 C272.706189,78 283,69.4284944 283,56.8928381 C283,46.714235 276.844893,40.8214282 269.204605,39.2142437 C274.404031,36.2142472 278.542735,30.5357258 278.542735,21.9643072 C278.542735,10.7142768 270.372087,3 257.319713,3 L224,3 L224,78 Z M239,66 L239,45 L257.749674,45 C264.821332,45 269,49.0680269 269,55.4450038 C269,61.9319731 265.035177,66 257.857466,66 L239,66 Z M239,35 L239,15 L254.949751,15 C261.286221,15 265,18.7777778 265,24.6667117 C265,30.6667117 261.504261,35 255.058771,35 L239,35 Z M312.999569,79 C329.554534,79 339,68.1249297 339,53.9448471 L339,46.0551529 C339,31.8749838 329.554534,21 312.999569,21 C296.444605,21 287,31.8749838 287,46.0551529 L287,53.9448471 C287,68.1249297 296.444605,79 312.999569,79 Z M325,55.0181376 C325,62.4363194 321.17706,68 312.999569,68 C304.82294,68 301,62.4363194 301,55.0181376 L301,44.9817739 C301,37.5635921 304.82294,32 312.999569,32 C321.17706,32 325,37.5635921 325,44.9817739 L325,55.0181376 Z M365.021821,78 L375.2389,78 L375.2389,66.2023444 L369.261226,66.2023444 C365.348133,66.2023444 363.935292,64.7008356 363.935292,61.0543144 L363.935292,34.0271572 L376,34.0271572 L376,22.2295886 L363.935292,22.2295886 L363.935292,7 L349.043139,7 L349.043139,22.2295886 L341,22.2295886 L341,34.0271572 L349.043139,34.0271572 L349.043139,62.1268207 C349.043139,71.993878 354.152119,78 365.021821,78 Z',
                    fill: t,
                })
            )
        );
    },
    _F = jD('span', {
        target: 'e11crs6s0',
    })(
        'display:inline-flex;position:relative;height:',
        e => {
            let { height: t } = e;
            return t;
        },
        'px;gap:',
        e => {
            let { horizontalGap: t } = e;
            return t;
        },
        'px;'
    ),
    RF = e => {
        let { maxWidth: t = 58, colors: n, className: r } = e;
        const o = bu(),
            i = (null == n ? void 0 : n.signet) || '#0066FF',
            a = (null == n ? void 0 : n.letters) || o.colors.primaryTextColor,
            u = Math.round(t / 5),
            s = Math.round(t / 15),
            l = Math.round(u / 12),
            c = Math.round(t - (u + s)),
            d = Math.round(u + l);
        return or.createElement(
            _F,
            {
                horizontalGap: s,
                verticalGap: l,
                height: d,
                className: r,
                'aria-label': 'ChatBot',
                role: 'img',
            },
            or.createElement(IF, {
                maxWidth: u,
                height: u,
                fill: i,
            }),
            or.createElement(zF, {
                maxWidth: c,
                height: u,
                fill: a,
            })
        );
    },
    jF = jD('div', {
        target: 'e1fdxphr1',
    })(
        'width:100%;height:100%;padding:6px;padding-top:',
        e => {
            let { theme: t } = e;
            return t.spaces.space3;
        },
        ';display:flex;justify-content:center;align-items:center;border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.round;
        },
        ';background:#0066ff;'
    ),
    NF = jD(IF, {
        target: 'e1fdxphr0',
    })({
        name: '18kjo4j',
        styles: 'height:100%;width:100%;fill:white',
    }),
    WF = e =>
        e.imgUrl || 'ChatBot' !== e.text
            ? rr.createElement(Nm, e)
            : rr.createElement(jF, e, rr.createElement(NF, null)),
    VF = jD(sh, {
        target: 'egnkqwt2',
    })(
        'padding:',
        e => {
            let { theme: t } = e;
            return t.spaces.space5;
        },
        ';border:none;border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.md;
        },
        ';color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.surfaceVariant;
        },
        ';display:grid;grid-template-columns:',
        e => {
            let { showChevron: t } = e;
            return t ? '20px 1fr 20px' : '20px min-content';
        },
        ';grid-template-rows:min-content 1fr;grid-column-gap:',
        e => {
            let { theme: t } = e;
            return t.spaces.space3;
        },
        ';align-items:center;line-height:1.2;',
        e => {
            let { theme: t } = e;
            return t.typography.buttonText;
        },
        ';justify-content:center;text-align:center;text-decoration:inherit;&:hover{color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.surfaceVariantHover;
        },
        ';}'
    ).withComponent('a', {
        target: 'egnkqwt3',
    }),
    UF = jD('span', {
        target: 'egnkqwt1',
    })({
        name: '7fko3c',
        styles: 'justify-self:start',
    }),
    HF = jD(jg, {
        target: 'egnkqwt0',
    })({
        name: 'cz33k0',
        styles: 'rotate:-90deg;margin-left:auto',
    }),
    qF = (e, t, n, r, o) => {
        const i = 'https://wa.me/' + t + e;
        return !o && n ? zt(i, n, r) : i;
    },
    GF = (e, t, n, r) => {
        const o = 'https://m.me/' + encodeURI(e) + '?ref=openwidget';
        return !r && t ? zt(o, t, n) : o;
    },
    KF = ['pageName', 'showChevron'],
    YF = e => {
        let { pageName: t, showChevron: n } = e,
            r = ur(e, KF);
        const { localize: o } = ti(),
            i = Fg(),
            { organizationId: a, owApiURL: u } = ni(e => e.getApplicationState()),
            s = GF(t, a, u, i);
        return a
            ? rr.createElement(
                  VF,
                  ir(
                      {
                          href: s,
                          target: '_blank',
                          rel: 'noreferrer',
                          showChevron: n,
                      },
                      r
                  ),
                  rr.createElement(ov, null),
                  rr.createElement(UF, null, o('contact_us_on_messenger')),
                  n &&
                      rr.createElement(HF, {
                          'aria-hidden': !0,
                      })
              )
            : (console.error('Messenger button is not displayed because organizationId is not available'), null);
    },
    ZF = ['phoneNumber', 'countryCode', 'showChevron'],
    XF = e => {
        let { phoneNumber: t, countryCode: n, showChevron: r = !1 } = e,
            o = ur(e, ZF);
        const { localize: i } = ti(),
            a = Fg(),
            { organizationId: u, owApiURL: s } = ni(e => e.getApplicationState()),
            l = qF(t, n, u, s, a);
        return u
            ? rr.createElement(
                  VF,
                  ir(
                      {
                          href: l,
                          target: '_blank',
                          rel: 'noreferrer',
                          showChevron: r,
                      },
                      o
                  ),
                  rr.createElement(hv, null),
                  rr.createElement(UF, null, i('contact_us_on_whatsapp')),
                  r &&
                      rr.createElement(HF, {
                          'aria-hidden': !0,
                      })
              )
            : (console.error('WhatsApp button is not displayed because organizationId is not available'), null);
    },
    $F = jD('div', {
        target: 'e1jb6k2h6',
    })(
        'opacity:',
        e => {
            let { shouldUseEnterTransition: t } = e;
            return t ? 0 : 1;
        },
        ';white-space:nowrap;overflow:hidden;cursor:default;z-index:2;padding:',
        e => {
            let { theme: t } = e;
            return t.spaces.space4;
        },
        ';width:',
        Rt,
        'px;&:hover{',
        EF,
        '{opacity:1;}}',
        e => {
            let { theme: t, transitionState: n, shouldUseEnterTransition: r } = e;
            return r && 'shown' === n
                ? Bu(
                      'animation:',
                      AF,
                      ';animation-duration:',
                      Wt,
                      'ms;animation-delay:',
                      Nt,
                      'ms;animation-timing-function:',
                      t.transitions.easings.swift,
                      ';animation-fill-mode:forwards;'
                  )
                : 'closed' === n
                  ? Bu(
                        'animation:',
                        BF,
                        ';animation-duration:',
                        Wt,
                        'ms;animation-timing-function:',
                        t.transitions.easings.swift,
                        ';animation-fill-mode:forwards;'
                    )
                  : void 0;
        },
        ';'
    ),
    JF = jD(rm, {
        target: 'e1jb6k2h5',
    })(
        'display:flex;flex-direction:column;justify-content:space-between;background:',
        e => {
            let { theme: t } = e;
            return t.colors.surface;
        },
        ';border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.xxl;
        },
        ';box-shadow:',
        e => {
            let { theme: t } = e;
            return t.boxShadow.subtle;
        },
        ';white-space:nowrap;overflow:hidden;cursor:pointer;'
    ),
    QF = jD(WF, {
        target: 'e1jb6k2h4',
    })({
        name: '1kzq5ms',
        styles: 'height:100%;width:100%',
    }),
    ew = jD('div', {
        target: 'e1jb6k2h3',
    })(
        'width:24px;height:24px;flex-shrink:0;display:flex;margin-right:',
        e => {
            let { theme: t } = e;
            return t.spaces.space3;
        },
        ';'
    ),
    tw = jD('p', {
        target: 'e1jb6k2h2',
    })(
        'margin:3px 0 0;line-height:1.2;white-space:pre-wrap;word-wrap:break-word;word-break:break-word;',
        e => {
            let { theme: t } = e;
            return t.typography.basic;
        },
        ';color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';'
    ),
    nw = jD('div', {
        target: 'e1jb6k2h1',
    })(
        'position:relative;display:flex;max-width:100%;padding:',
        e => {
            let { theme: t } = e;
            return t.spaces.space5;
        },
        ' ',
        e => {
            let { theme: t } = e;
            return t.spaces.space5;
        },
        ' 0;border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.lg;
        },
        ';word-break:break-word;'
    ),
    rw = jD('div', {
        target: 'e1jb6k2h0',
    })(
        'display:flex;flex-direction:column;gap:',
        e => {
            let { theme: t } = e;
            return t.spaces.space3;
        },
        ';padding:',
        e => {
            let { theme: t } = e;
            return t.spaces.space4;
        },
        ' ',
        e => {
            let { theme: t } = e;
            return t.spaces.space5;
        },
        ';'
    ),
    ow = e => {
        var t, n, r;
        let { screenPosition: o, transitionState: i } = e;
        const a = ti(),
            u = Fg(),
            s = _t('messenger', a),
            l = _t('whatsapp', a),
            c = _t('forms', a),
            d = ni(e => e.getApplicationState('contactInvitation').hasSeen),
            p = ni(e => e.getApplicationState('mobile'));
        Hu(() => {
            d &&
                (a.emit(
                    'resize-request',
                    p
                        ? {
                              width: '100%',
                          }
                        : {
                              width: Rt + 'px',
                          }
                ),
                a.once('resize-request-done', () => a.emit('resize-to-dimensions')));
        }, [a, d]);
        const D = e => {
            e.stopPropagation();
        };
        return rr.createElement(
            $F,
            ir(
                {
                    transitionState: i,
                    shouldUseEnterTransition: !d,
                },
                Uu({
                    onAnimationStart: gr(() => {
                        a.emit(
                            'resize-request',
                            p
                                ? {
                                      width: '100%',
                                  }
                                : {
                                      width: Rt + 'px',
                                  }
                        ),
                            a.once('resize-request-done', () => a.emit('resize-to-dimensions'));
                    }),
                    onAnimationEnd: gr(() => {
                        jt(a, {
                            hasSeen: !0,
                        });
                    }),
                })
            ),
            rr.createElement(CF, {
                message:
                    (null == c ? void 0 : c.properties.message) +
                    ' ' +
                    (null != l && l.enabled ? a.localize('contact_us_on_whatsapp') : '') +
                    ' ' +
                    (null != s && s.enabled ? a.localize('contact_us_on_messenger') : ''),
                'aria-live': 'polite',
                clearOnUnmount: !0,
            }),
            rr.createElement(
                rm,
                {
                    reverse: 'right' === o,
                },
                rr.createElement(
                    xF,
                    ir(
                        {},
                        Uu({
                            onClick: e => {
                                if (u) return null == e || e.preventDefault(), void (null == e || e.stopPropagation());
                                jt(a, {
                                    hidden: !0,
                                    transitionState: 'closed',
                                }),
                                    setTimeout(() => {
                                        jt(a, {
                                            transitionState: 'hidden',
                                        });
                                    }, Wt);
                            },
                        }),
                        {
                            'aria-label': a.localize('hide_invitation'),
                        }
                    )
                )
            ),
            rr.createElement(
                JF,
                Uu({
                    onClick: () => {
                        Ot(a),
                            u ||
                                jt(a, {
                                    hidden: !0,
                                    transitionState: 'hidden',
                                });
                    },
                }),
                rr.createElement(
                    nw,
                    null,
                    rr.createElement(
                        ew,
                        null,
                        rr.createElement(QF, {
                            imgUrl: null == c ? void 0 : c.properties.agent.avatarUrl,
                            text: null == c ? void 0 : c.properties.agent.name,
                        })
                    ),
                    rr.createElement(tw, null, null == c ? void 0 : c.properties.message)
                ),
                rr.createElement(
                    rw,
                    null,
                    (null == l ? void 0 : l.enabled) &&
                        rr.createElement(
                            XF,
                            ir(
                                {
                                    phoneNumber: null == (t = l.properties) ? void 0 : t.phoneNumber,
                                    countryCode: null == (n = l.properties) ? void 0 : n.countryCode,
                                },
                                Uu({
                                    onClick: D,
                                })
                            )
                        ),
                    (null == s ? void 0 : s.enabled) &&
                        rr.createElement(
                            YF,
                            ir(
                                {
                                    pageName: null == (r = s.properties) ? void 0 : r.pageName,
                                },
                                Uu({
                                    onClick: D,
                                })
                            )
                        )
                )
            )
        );
    },
    iw = ['delay', 'duration'],
    aw = yD('button', {
        target: 'e6evvm21',
    })(
        'display:flex;align-items:center;justify-content:center;position:relative;border:0;background-color:transparent;cursor:pointer;padding:',
        e => {
            let { theme: t } = e;
            return t.spaces.space5;
        },
        ';border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.xl;
        },
        ';'
    ),
    uw = yD(vC, {
        target: 'e6evvm20',
    })({
        name: 'a4hmbt',
        styles: 'position:absolute',
    }),
    sw = e => {
        let { delay: t, duration: n } = e,
            r = ur(e, iw);
        const o = bu(),
            i = Fg();
        return rr.createElement(
            aw,
            r,
            rr.createElement(uw, {
                size: 'large',
                progress: i
                    ? 100
                    : {
                          type: 'auto',
                          delay: t,
                          duration: n,
                      },
                adjustToColor: 'light' === o.variant ? o.colors.grayscale[0] : void 0,
            }),
            rr.createElement(Ng, {
                size: 24,
                color: o.colors.primaryTextColor,
            })
        );
    };
var lw, cw, dw;
const pw = ku(
        lw ||
            (lw = si([
                '\n\tfrom {\n\t\tmax-width: ',
                'px;\n\t\topacity: 0;\n\t\tborder-radius: ',
                'px;\n  }\n  to {\n    max-width: calc(',
                'px - 1em);\n    opacity: 1;\n    border-radius: ',
                ';\n  }\n',
            ])),
        Vt,
        Vt,
        Ut,
        Ht
    ),
    Dw = ku(
        cw ||
            (cw = si([
                '\n\tfrom {\n\t\tmax-width: calc(',
                'px - 1em);\n    opacity: 1;\n    border-radius: ',
                ';\n\t}\n\tto {\n\t  max-width: ',
                'px;\n    opacity: 0;\n    border-radius: ',
                ';\n\t}\n',
            ])),
        Ut,
        Ht,
        Vt,
        Vt
    ),
    mw = ku(
        dw ||
            (dw = si([
                '\n\tfrom {\n    opacity: 1;\n    border-radius: ',
                ';\n\t}\n\tto {\n    opacity: 0;\n    border-radius: ',
                ';\n\t}\n',
            ])),
        Ht,
        Vt
    );
var fw = {
        name: '1m2k91r',
        styles: 'right:0.5em;justify-content:space-between',
    },
    hw = {
        name: '14ltnho',
        styles: 'left:0.5em;flex-direction:row-reverse;justify-content:flex-end',
    };
const gw = jD('div', {
        target: 'e17nbi8r0',
    })(
        'display:flex;opacity:0;pointer-events:none;position:absolute;background:',
        e => {
            let { theme: t } = e;
            return t.colors.surface;
        },
        ';border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.xxl;
        },
        ';box-shadow:',
        e => {
            let { theme: t } = e;
            return t.boxShadow.md;
        },
        ';align-items:flex-start;white-space:nowrap;overflow:hidden;cursor:default;z-index:2;',
        e => {
            let { screenPosition: t } = e;
            return 'left' === t ? hw : fw;
        },
        ';',
        e => {
            let { theme: t, transitionState: n, isPreview: r, isAnotherMinimizedElementComing: o } = e;
            return 'shown' === n
                ? Bu(
                      'pointer-events:all;animation:',
                      r ? pw : Bu(pw, ',', o ? mw : Dw, ';'),
                      ';animation-delay:',
                      r ? '0s' : Kt + 'ms, ' + Yt + 'ms',
                      ';animation-duration:',
                      Gt,
                      'ms,',
                      o ? qt : Gt,
                      'ms;animation-timing-function:',
                      t.transitions.easings.swift,
                      ';animation-fill-mode:forwards;'
                  )
                : 'closed' === n
                  ? Bu(
                        'animation:',
                        Dw,
                        ';animation-duration:',
                        Gt,
                        'ms;animation-timing-function:',
                        t.transitions.easings.swift,
                        ';animation-fill-mode:forwards;'
                    )
                  : void 0;
        },
        ';'
    ),
    vw = jD('div', {
        target: 'er6lqub1',
    })(
        'display:flex;align-items:center;color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';',
        e => {
            let { theme: t } = e;
            return t.typography.caption;
        },
        ';'
    ),
    Cw = jD('span', {
        target: 'er6lqub0',
    })(
        'color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';margin-right:',
        e => {
            let { theme: t } = e;
            return t.spaces.space2;
        },
        ';font-size:24px;font-weight:700;'
    ),
    bw = e => {
        let { rating: t } = e;
        const n = Math.floor(t),
            r = Number((t - n).toFixed(2)),
            o = n + (r >= 0.8 ? 1 : 0),
            i = r > 0.2 && r < 0.8,
            a = Array.from(
                {
                    length: 5,
                },
                (e, t) =>
                    t < o
                        ? rr.createElement(dv, {
                              label: 'Full Star Icon',
                              role: 'img',
                          })
                        : t === o && i
                          ? rr.createElement(cv, {
                                label: 'Half Star Icon',
                                role: 'img',
                            })
                          : rr.createElement(lv, {
                                label: 'Empty Star Icon',
                                role: 'img',
                            })
            );
        return rr.createElement(
            vw,
            null,
            rr.createElement(Cw, null, t.toFixed(1)),
            a.map((e, t) =>
                rr.createElement(
                    rr.Fragment,
                    {
                        key: t,
                    },
                    e
                )
            )
        );
    },
    Ew = rr.memo(bw),
    yw = jD('div', {
        target: 'e1yihp563',
    })(
        'display:flex;flex-direction:column;min-width:0;overflow:hidden;gap:6px;padding:',
        e => {
            let { theme: t } = e;
            return t.spaces.space5;
        },
        ';',
        e => {
            let { screenPosition: t, theme: n } = e;
            return t && Bu('padding-', 'left' === t ? 'right' : 'left', ':', n.spaces.space6, ';');
        },
        ';'
    ),
    xw = jD('div', {
        target: 'e1yihp562',
    })(
        'color:',
        e => {
            let { theme: t } = e;
            return t.colors.secondaryTextColor;
        },
        ';',
        e => {
            let { theme: t } = e;
            return t.typography.caption;
        },
        ';'
    ),
    Fw = jD('a', {
        target: 'e1yihp561',
    })(
        'border:0;padding:0;margin:0;text-decoration:none;background-color:transparent;width:max-content;display:flex;flex-wrap:wrap;align-items:center;gap:',
        e => {
            let { theme: t } = e;
            return t.spaces.space2;
        },
        ';color:',
        e => {
            let { theme: t } = e;
            return t.colors.secondaryTextColor;
        },
        ';',
        e => {
            let { theme: t } = e;
            return t.typography.caption;
        },
        ';strong{color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';}'
    ),
    ww = jD(Vg, {
        target: 'e1yihp560',
    })({
        name: '5w6j9d',
        styles: 'height:14px;width:auto',
    }),
    Aw = e => {
        let { rating: t, name: n, screenPosition: r, url: o, label: i, linkProps: a } = e;
        return rr.createElement(
            yw,
            {
                screenPosition: r,
            },
            rr.createElement(Ew, {
                rating: t,
            }),
            rr.createElement(
                xw,
                {
                    ellipsis: !0,
                },
                n
            ),
            rr.createElement(
                xw,
                null,
                rr.createElement(
                    Fw,
                    ir(
                        {
                            href: o,
                            rel: 'noreferrer',
                            target: '_blank',
                        },
                        a
                    ),
                    i,
                    rr.createElement(ww, {
                        'aria-label': 'Google',
                    })
                )
            )
        );
    },
    Bw = e => {
        var t;
        let { screenPosition: n } = e;
        const r = ti(),
            { organizationId: o, owApiURL: i } = ni(e => e.getApplicationState()),
            {
                name: a,
                rating: u,
                url: s,
                userRatingsTotal: l,
            } = null == (t = _t('googleReviews', r)) ? void 0 : t.properties,
            c = o && zt(s, o, i),
            d = r.localize(
                'check_x_reviews_on_google',
                {
                    count: l,
                },
                l
            );
        return rr.createElement(Aw, {
            screenPosition: n,
            name: a,
            rating: u,
            url: c,
            label: rr.createElement(Qe, {
                template: d,
            }),
            linkProps: Uu({
                onClick: e => {
                    e.stopPropagation();
                },
            }),
        });
    },
    kw = ['screenPosition'],
    Sw = e => {
        var t;
        let { screenPosition: n } = e,
            r = ur(e, kw);
        const o = ti(),
            i = Ee(),
            a = rr.useRef(0),
            u = Fg(),
            s = ni(e => {
                var t, n;
                return (
                    null !=
                        (t =
                            null == (n = e.getView('minimized').eventsQueue) ? void 0 : n.includes('visitorCounter')) &&
                    t
                );
            }),
            { name: l, userRatingsTotal: c } = null == (t = _t('googleReviews', o)) ? void 0 : t.properties,
            d = o.localize(
                'check_x_reviews_on_google',
                {
                    count: c,
                },
                c
            );
        return rr.createElement(
            gw,
            ir(
                {
                    screenPosition: n,
                    isPreview: u,
                    isAnotherMinimizedElementComing: s,
                },
                r,
                Uu({
                    onClick: () => {
                        Ot(o);
                    },
                    onAnimationStart: gr(() => {
                        o.emit(
                            'resize-request',
                            i
                                ? {
                                      width: '100%',
                                      height: Zt + 'px',
                                  }
                                : {
                                      width: Ut + 'px',
                                      height: Zt + 'px',
                                  }
                        );
                    }),
                })
            ),
            rr.createElement(CF, {
                message: l + ' ' + d + ' Google',
                clearOnUnmount: !0,
                'aria-live': 'polite',
            }),
            rr.createElement(Bw, {
                screenPosition: n,
            }),
            rr.createElement(
                sw,
                ir(
                    {
                        duration: Xt,
                        delay: Kt + Gt,
                    },
                    Uu({
                        onClick: () => {
                            u ||
                                (window.clearTimeout(a.current),
                                $t(o, {
                                    transitionState: 'closed',
                                    hidden: !0,
                                }),
                                setTimeout(() => {
                                    $t(o, {
                                        transitionState: 'hidden',
                                    });
                                }, Gt));
                        },
                    }),
                    {
                        'aria-label': o.localize('hide_google_reviews'),
                    }
                )
            )
        );
    },
    Tw = jD('span', {
        target: 'e18wkano0',
    })({
        name: '1i2clz5',
        styles: 'font-size:2.5em;line-height:1',
    }),
    Lw = e => {
        let { event: t, radiusType: n } = e;
        return or.createElement(
            Vm,
            {
                radiusType: n,
            },
            or.createElement(Lf, null, or.createElement(Tw, null, or.createElement(Kv, null, t.properties.text)))
        );
    },
    Pw = e => {
        const t = bu();
        let n, r;
        return (
            t && 'modern' === t.name && ((n = 150), (r = 250)),
            or.createElement(
                Xb,
                ir(
                    {
                        maxWidth: n,
                        maxHeight: r,
                    },
                    e,
                    {
                        withMargin: !0,
                    }
                )
            )
        );
    };
let Mw = (function (e) {
    function t() {
        return e.apply(this, arguments) || this;
    }
    Be(t, e);
    var n = t.prototype;
    return (
        (n.componentDidUpdate = function (e, t, n) {
            n && this._messageListContext.scrollToBottom();
        }),
        (n.getSnapshotBeforeUpdate = function (e) {
            return (
                !this.shouldRenderPreview(e) &&
                this.shouldRenderPreview() &&
                this._messageListContext.isScrollOnBottom()
            );
        }),
        (n.shouldRenderPreview = function (e) {
            return void 0 === e && (e = this.props), Boolean(e.urlPreview.properties.title);
        }),
        (n.render = function () {
            return or.createElement(af, null, e => {
                this._messageListContext = e;
                const {
                        urlPreview: { properties: t },
                        radiusType: n,
                    } = this.props,
                    r = Jt(['url', 'link'], t.image);
                return this.shouldRenderPreview()
                    ? or.createElement(
                          Vm,
                          {
                              radiusType: n,
                          },
                          or.createElement(Pw, r),
                          or.createElement(Tf, {
                              subtitle: t.description,
                              title: t.title,
                          })
                      )
                    : or.createElement(
                          Vm,
                          {
                              radiusType: n,
                          },
                          or.createElement(hE, {
                              text: t.text,
                          })
                      );
            });
        }),
        t
    );
})(or.Component);
const Ow = ['card', 'disabledButtons', 'eventId', 'onActionButtonClick', 'onShowMoreButtonClick', 'pageUrl'],
    Iw = function (e, t, n, r) {
        return (
            void 0 === n && (n = []),
            void 0 === r && (r = ''),
            e.buttons
                ? ir({}, e, {
                      buttons: e.buttons.map((e, o) => {
                          const i = ((e, t) => {
                              if ('url' === e.type && e.proxiedValue && Qt(t) === Qt(e.proxiedValue)) return 'current';
                          })(e, r);
                          return ir(
                              {},
                              e,
                              {
                                  disabled: ge(o, n),
                              },
                              t && {
                                  'aria-disabled': 'true',
                              },
                              i && {
                                  target: i,
                              }
                          );
                      }),
                  })
                : e
        );
    },
    zw = e => {
        let {
                card: t,
                disabledButtons: n,
                eventId: r,
                onActionButtonClick: o,
                onShowMoreButtonClick: i,
                pageUrl: a,
            } = e,
            u = ur(e, Ow);
        const [s, l] = or.useState(!1);
        return (
            or.useEffect(() => {
                if (s) {
                    const e = setTimeout(() => {
                        l(!1);
                    }, 1e3);
                    return () => clearTimeout(e);
                }
            }, [s]),
            or.createElement(
                db,
                ir(
                    {
                        card: Iw(t, s, n, a),
                        onButtonClick: (e, n) => {
                            s ||
                                (l(!0),
                                o({
                                    button: t.buttons[e],
                                    event: r,
                                    browserEvent: n,
                                }));
                        },
                        onShowMoreButtonClick: i,
                    },
                    u
                )
            )
        );
    },
    _w = jD('div', {
        target: 'e1kfksj70',
    })({
        name: 'yoe8zv',
        styles: 'margin:0;margin-bottom:4px;font-size:1em;font-weight:400',
    }),
    Rw = e => {
        let {
            event: t,
            mobile: n,
            radiusType: r,
            areChatInteractionButtonsActive: o,
            onActionButtonClick: i,
            onShowMoreButtonClick: a,
            onShow: u = ar,
            rtl: s,
            pageUrl: l,
            isStreamingPreview: c = !1,
            scrollToBottom: d,
            onImageLoad: p,
            flattenActionButtons: D = !1,
            withoutBackground: m = !1,
            simpleMessageSize: f = 'default',
        } = e;
        rD(u);
        const h = bu(),
            { localize: g } = ti(),
            v = or.useCallback(
                e => {
                    var n;
                    if (void 0 === o || (t.properties.invitation && !t.thread)) return [];
                    return (
                        (null == e || null == (n = e.buttons)
                            ? void 0
                            : n.reduce(
                                  (e, t, n) => (
                                      (e => 'cancel' === e.type || (['webview', 'message'].includes(e.type) && !o))(
                                          t
                                      ) && e.push(n),
                                      e
                                  ),
                                  []
                              )) || []
                    );
                },
                [o, t.properties.invitation, t.thread]
            );
        switch (t.type) {
            case 'carousel':
                return or.createElement(
                    gg,
                    {
                        dir: s ? 'rtl' : 'ltr',
                        mobile: n,
                        scrollableElementPadding: h.spaces.space5,
                        nextItemLabel: g('next_item'),
                        previousItemLabel: g('previous_item'),
                    },
                    t.properties.cards.map((e, n) =>
                        or.createElement(zw, {
                            key: n,
                            card: e,
                            eventId: t.id,
                            disabledButtons: v(e),
                            onActionButtonClick: i,
                            TitleComponent: _w,
                            onShowMoreButtonClick: a,
                            pageUrl: l,
                        })
                    )
                );
            case 'message':
            case 'message_draft':
                return or.createElement(
                    yE,
                    ir({}, t.properties, {
                        own: t.own,
                        radiusType: r,
                        draft: 'message_draft' === t.type && null === t.serverId,
                        eventId: t.properties.quickReplies && t.id,
                        isStreamingPreview: c,
                        scrollToBottom: d,
                        withoutBackground: m,
                        size: f,
                    })
                );
            case 'emoji':
                return or.createElement(Lw, {
                    event: t,
                    radiusType: r,
                });
            case 'rich_message':
                return or.createElement(zw, {
                    eventId: t.id,
                    card: t.properties.card,
                    disabledButtons: v(t.properties.card),
                    onActionButtonClick: i,
                    onShowMoreButtonClick: a,
                    pageUrl: l,
                    onImageLoad: p,
                    flattenActionButtons: D,
                });
            case 'sticker':
                return or.createElement(wE, t.properties);
            case 'url_preview':
                return or.createElement(Mw, {
                    radiusType: r,
                    urlPreview: t,
                });
            case 'image_preview': {
                const e = Jt(['url', 'link', 'width', 'height', 'srcSet', 'alternativeText', 'name'], t.properties);
                return or.createElement(Pw, e);
            }
        }
        return null;
    },
    jw = ['delay'];
var Nw;
const Ww = e => Bu('transition-delay:', e, 'ms;'),
    Vw = e =>
        e(
            Nw ||
                (Nw = si([
                    '\n\t&-enter,\n\t&-appear {\n\t\topacity: 0;\n\t\ttransform: translateY(8px);\n\t}\n\n\t&-enter-active,\n\t&-appear-active {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t\ttransition: opacity 100ms ease-in, transform 200ms ease-in;\n\t}\n\n\t&-exit {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t}\n\n\t&-exit-active {\n\t\topacity: 0;\n\t\ttransform: translateY(8px);\n\t\ttransition: opacity 100ms ease-in, transform 200ms ease-in;\n\t}\n',
                ]))
        ),
    Uw = e => {
        let { delay: t = 0 } = e,
            n = ur(e, jw);
        return wu(Tu, null, e => {
            let { css: r } = e;
            return wu(
                $D,
                ir({}, n, {
                    timeout: 200 + t,
                    classNames: Vw(r),
                    css: Ww(t),
                })
            );
        });
    },
    Hw = ['reverse', 'noMargin', 'children', 'animated'];
var qw;
const Gw = ku(
        qw ||
            (qw = si([
                '\n\t0% {\n\t\topacity: 0;\n\t\ttransform: translateY(8px);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t}\n',
            ]))
    ),
    Kw = jD(rm, {
        target: 'e1wumze50',
    })(
        'width:100%;margin-bottom:',
        e => (e.noMargin ? 0 : 8),
        'px;',
        e => {
            let { animated: t } = e;
            return (
                t &&
                Bu(
                    'opacity:0;transform:translateY(8px);animation:',
                    Gw,
                    ' 200ms ease-in forwards;animation-delay:200ms;'
                )
            );
        },
        ';'
    ),
    Yw = e => {
        let { reverse: t, noMargin: n, children: r, animated: o } = e,
            i = ur(e, Hw);
        return or.createElement(
            Uw,
            i,
            or.createElement(
                Kw,
                {
                    reverse: t,
                    noMargin: n,
                    animated: o,
                },
                r
            )
        );
    };
var Zw;
const Xw = ku(
        Zw ||
            (Zw = si([
                '\n\t0% {\n\t\topacity: 0;\n\t\ttransform: translateY(30px);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t}\n',
            ]))
    ),
    $w = jD(Um, {
        displayName: 'Invitation',
        section: !0,
        target: 'efsb37y0',
    })(
        'line-height:1.35;max-width:',
        e => {
            let { maxWidth: t } = e;
            return t;
        },
        ';width:100%;margin-bottom:8px;align-items:',
        e => {
            let { reverse: t } = e;
            return t ? 'flex-end' : 'flex-start';
        },
        ';&:hover{',
        EF,
        '{opacity:1;}}',
        WC,
        ',',
        Vm,
        '{color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.surface;
        },
        ';box-shadow:',
        e => {
            let { theme: t } = e;
            return t.boxShadow.subtle;
        },
        ';}',
        e => {
            let { animated: t, theme: n } = e;
            return (
                t &&
                Bu(
                    'opacity:0;transform:translateY(30px);animation:',
                    Xw,
                    ' 300ms ',
                    n.transitions.easings.smooth,
                    ' forwards;animation-delay:400ms;'
                )
            );
        },
        ';'
    ),
    Jw = jD(rm, {
        target: 'e1svly570',
    })(
        e => {
            let { theme: t } = e;
            return t.typography.basic;
        },
        ' color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';max-width:100%;margin-bottom:10px;cursor:pointer;box-shadow:none;'
    ),
    Qw = jD(Vm, {
        target: 'e1r3j30a1',
    })(
        'width:100%;box-shadow:',
        e => {
            let { theme: t } = e;
            return t.boxShadow.subtle;
        },
        ';transition:border-color 100ms ease-in-out;background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.surface;
        },
        ';',
        e =>
            'modern' === e.theme.name && {
                padding: 0,
            },
        ' border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.xl;
        },
        ';'
    ),
    eA = jD(Lf, {
        target: 'e1r3j30a0',
    })('padding:', '8px', ';'),
    tA = e => {
        let { children: t } = e;
        return or.createElement(Qw, null, or.createElement(eA, null, t));
    },
    nA = ['children'],
    rA = jD(Vm, {
        target: 'ejca6bd0',
    })(
        'max-width:255px;cursor:pointer;background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.surface;
        },
        ';box-shadow:',
        e => {
            let { theme: t } = e;
            return t.boxShadow.floating;
        },
        ';'
    ),
    oA = e => {
        let { children: t } = e,
            n = ur(e, nA);
        return or.createElement(rA, n, or.createElement(Lf, null, t));
    },
    iA = jD('input', {
        target: 'e19y96k30',
    })(
        'width:',
        e => {
            let { mobile: t } = e;
            return t ? '290px' : '240px';
        },
        ';margin:-8px;padding:14px 10px;',
        e => {
            let { theme: t } = e;
            const n = t.isRtl ? 'left' : 'right';
            return Bu('margin-', n, ':-40px;padding-', n, ':40px;');
        },
        ';min-width:0;flex:1;outline:none;font-family:inherit;border:1px solid transparent;color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.surface;
        },
        ';',
        e => {
            let { theme: t } = e;
            return t.typography.input;
        },
        ';border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.xl;
        },
        ';&::placeholder{color:',
        e => {
            let { theme: t } = e;
            return t.colors.secondaryTextColor;
        },
        ';}&:focus{border-color:',
        e => e.theme.colors.cta,
        ';}'
    ),
    aA = ['disabled', 'mobile', 'children', 'onPress'],
    uA = e =>
        Bu(
            'display:flex;flex-shrink:0;color:',
            e.colors.ctaText,
            ';background-color:',
            e.colors.cta,
            ';transition:background-color 100ms ease-in-out;&:disabled{background-color:',
            e.colors.disabled,
            ';color:',
            e.colors.disabledContrast,
            ';}'
        ),
    sA = e => {
        let { disabled: t, mobile: n, children: r, onPress: o } = e,
            i = ur(e, aA);
        const { localize: a } = ti();
        return wu(
            ev,
            ir(
                {
                    skipFocusVisible: !0,
                    type: 'submit',
                    disabled: t,
                    mobile: n,
                    css: uA,
                    onPress: o,
                    'aria-label': a('send_message'),
                },
                i
            ),
            r
        );
    };
var lA, cA, dA, pA;
const DA = ['0px, 0px', '0px, -8px', '0px, -10px', '0px, -6px', '0px, -2px', '0px, 3px', '0px, 2px', '0px, -1px'],
    mA = [9, 30, 51],
    fA = [
        ['0%, 66.67%, 100%', '6.67%', '13.33%, 20%', '26.67%', '33.33%', '40%', '46.67%', '53.33%'],
        ['0%, 6.67%, 73.33%, 100%', '13.33%', '20%, 26.67%', '33.33%', '40%', '46.67%', '53.33%', '60%'],
        ['0%, 13.33%, 80%, 100%', '20%', '26.67%, 33.33%', '40%', '46.67%', '53.33%', '60%', '66.67%'],
    ].map((e, t) =>
        ((e, t) => {
            const n = mA[t] - 30;
            return ku(
                lA || (lA = si(['\n        ', '\n    '])),
                e.map((e, t) => e + ' { transform: translateX(' + n + 'px) translate(' + DA[t] + '); }')
            );
        })(e, t)
    ),
    hA = ['height', 'width', 'animationDuration', 'animationIterationCount', 'color', 'mode'],
    gA = [210, 90, 330],
    vA = e => Bu('min-width:', e, ';'),
    CA = (e, t, n, r) => {
        return t
            ? 'rotating' === n
                ? ((a = mA[e]),
                  (u = gA[e]),
                  ku(
                      dA ||
                          (dA = si([
                              '\n\tfrom { transform: translateX(',
                              'px); }\n\tto { transform: rotate(',
                              'deg) translateX(12px) rotate(-',
                              'deg); }\n',
                          ])),
                      a - 30,
                      u,
                      u
                  ))
                : ((o = gA[e]),
                  (i = mA[e]),
                  ku(
                      pA ||
                          (pA = si([
                              '\n\tfrom { transform: rotate(',
                              'deg) translateX(12px) rotate(-',
                              'deg); }\n\tto { transform: translateX(',
                              'px); }\n',
                          ])),
                      o,
                      o,
                      i - 30
                  ))
            : 'rotating' === r
              ? ((s = gA[e]),
                ku(
                    cA ||
                        (cA = si([
                            '\n\tfrom { transform: rotate(',
                            'deg) translateX(12px) rotate(-',
                            'deg); }\n\tto { transform: rotate(',
                            'deg) translateX(12px) rotate(-',
                            'deg); }\n',
                        ])),
                    s,
                    s,
                    s + 360,
                    s + 360
                ))
              : fA[e];
        var o, i, a, u, s;
    },
    bA = e => {
        let {
                height: t,
                width: n,
                animationDuration: r = 2,
                animationIterationCount: o,
                color: i,
                mode: a = 'typing',
            } = e,
            u = ur(e, hA);
        const s = bu(),
            [l, c] = or.useState(!1),
            [d, p] = or.useState(a),
            D = np(a);
        return (
            or.useEffect(() => {
                a !== D &&
                    (c(!0),
                    setTimeout(() => {
                        p(a), c(!1);
                    }, 300));
            }, [a, D]),
            wu(
                'svg',
                ir(
                    {
                        viewBox: '0 0 60 40',
                        height: t,
                        width: n,
                        fill: i || s.colors.primaryTextColor,
                    },
                    n && {
                        css: vA(n),
                    },
                    u
                ),
                [0, 1, 2].map(e => {
                    const t = CA(e, l, a, d),
                        n = l ? 0.3 : r,
                        u = l ? 1 : o;
                    return wu('circle', {
                        key: e,
                        r: '6',
                        cx: 30,
                        cy: 20,
                        fill: i || s.colors.primaryTextColor,
                        css: Bu(
                            'transform-box:fill-box;transform-origin:',
                            30,
                            'px ',
                            20,
                            'px;animation-timing-function:',
                            l ? 'ease-out' : s.transitions.easings.linear,
                            ';animation-name:',
                            t,
                            ';animation-duration:',
                            n,
                            's;animation-iteration-count:',
                            u || 'infinite',
                            ';animation-delay:0ms;animation-fill-mode:',
                            l || 'typing' === d ? 'both' : 'none',
                            ';'
                        ),
                    });
                })
            )
        );
    },
    EA = ['onClose', 'onAnimationStart', 'rowReverse'],
    yA = jD($w, {
        target: 'e1u2equ40',
    })({
        name: 'kvqlxk',
        styles: 'width:255px',
    }),
    xA = e => {
        let { onClose: t, onAnimationStart: n, rowReverse: r = !1 } = e,
            o = ur(e, EA);
        return or.createElement(
            yA,
            ir(
                {
                    animated: !0,
                    reverse: r,
                },
                Uu({
                    onAnimationStart: n,
                })
            ),
            or.createElement(
                Um,
                null,
                or.createElement(
                    rm,
                    {
                        reverse: r,
                    },
                    or.createElement(
                        xF,
                        Uu({
                            onClick: t,
                        })
                    )
                ),
                or.createElement(
                    rm,
                    {
                        reverse: r,
                    },
                    or.createElement(
                        oA,
                        o,
                        or.createElement(bA, {
                            width: '32px',
                            height: '21px',
                        })
                    )
                )
            )
        );
    },
    FA = jD('form', {
        target: 'e1gikzvv0',
    })({
        name: 'ti75j2',
        styles: 'margin:0',
    }),
    wA = e => {
        var t;
        let { type: n, mobile: r, greetingEvent: o, animated: i = !1 } = e;
        const a = ti(),
            u = ni(e => e.getApplicationState('language')),
            s = a.localize,
            l = 'en' === u ? 'Type your email…' : s('forms_email').replace(':', ''),
            c = or.useCallback(() => Ot(a), [a]),
            d = or.useCallback(e => Dt(a, e), [a]),
            p = or.useCallback(e => en(a, xe, e), [a]),
            D = or.useCallback(() => tn(a), [a]),
            m = or.useCallback((e, t) => nn(a, e, t), [a]),
            f = or.useCallback(
                e => {
                    switch (n) {
                        case 'message_input':
                            return void p(e);
                        case 'email_input': {
                            var t;
                            const n =
                                null == (t = o.properties) || null == (t = t.card)
                                    ? void 0
                                    : t.buttons.find(e => 'webview' === e.type);
                            if (!n) return;
                            const r = new URL(n.value);
                            return (
                                r.searchParams.set('email', e),
                                void d({
                                    url: r.toString(),
                                })
                            );
                        }
                        default:
                            return;
                    }
                },
                [o, p, d, n]
            ),
            h = e => {
                m(
                    {
                        messageInput: e.target.value,
                    },
                    {
                        scheduleRerender: !1,
                    }
                );
            },
            { inputProps: g, buttonIcon: v } = ((e, t, n) => {
                switch (e) {
                    case 'message_input': {
                        const e = n('write_a_message');
                        return {
                            buttonIcon: or.createElement(mv, null),
                            inputProps: {
                                placeholder: e,
                                'aria-label': e,
                            },
                        };
                    }
                    case 'email_input':
                        return {
                            buttonIcon: or.createElement(Rg, null),
                            inputProps: {
                                type: 'email',
                                placeholder: t,
                                'aria-label': t,
                            },
                        };
                    default:
                        return {
                            buttonIcon: null,
                            inputProps: {},
                        };
                }
            })(n, l, s);
        return or.createElement(
            Yw,
            {
                animated: i,
                delay: 750,
            },
            or.createElement(
                tA,
                null,
                or.createElement(
                    FA,
                    Uu({
                        onSubmit: e => {
                            var t;
                            e.preventDefault();
                            const n = null == (t = D().messageInput) ? void 0 : t.trim();
                            n &&
                                (c(),
                                m({
                                    messageInput: '',
                                }),
                                f(n));
                        },
                    }),
                    or.createElement(
                        rm,
                        null,
                        or.createElement(
                            iA,
                            ir(
                                {
                                    mobile: r,
                                },
                                g,
                                Uu({
                                    onKeyUp: h,
                                    onChange: h,
                                }),
                                {
                                    value: D().messageInput,
                                }
                            )
                        ),
                        or.createElement(
                            sA,
                            {
                                disabled: !(null != (t = D().messageInput) && t.trim()),
                                'data-lc-prop': 'disabled:!messageInput',
                            },
                            v
                        )
                    )
                )
            )
        );
    },
    AA = jD(Jw, {
        target: 'e14hu3ox0',
    })(e => {
        let { maxHeight: t } = e;
        return t && Bu('max-height:', t, 'px;');
    }, ';'),
    BA = (e, t) => {
        if (0 === e) return null;
        const n = e - t;
        return n > 401 && n <= 525 ? 210 : n <= 400 ? 130 : null;
    },
    kA = yr ? 100 : 1200,
    SA = e => {
        const { children: t, screenPosition: n, onClose: r, onPress: o, onShow: i } = e,
            { showIndicator: a } = ni(e => tn(e)),
            u = ti(),
            s = or.useCallback(e => nn(u, e), [u]);
        return (
            Hu(() => {
                if (
                    (void 0 === a &&
                        (u.emit('resize-to-theme-size'),
                        u.once('resize-to-theme-size-done', () =>
                            s({
                                showIndicator: !0,
                            })
                        )),
                    a)
                ) {
                    const e = setTimeout(() => {
                        u.emit('resize-to-theme-size'),
                            u.once('resize-to-theme-size-done', () => {
                                s({
                                    showIndicator: !1,
                                }),
                                    setTimeout(i, 0);
                            });
                    }, kA);
                    return () => clearTimeout(e);
                }
            }, [u, a, s, i]),
            a
                ? or.createElement(
                      xA,
                      ir(
                          {
                              onClose: r,
                              rowReverse: 'right' === n,
                          },
                          Uu({
                              onClick: o,
                          }),
                          {
                              onAnimationStart: gr(() => u.emit('resize-to-dimensions')),
                          }
                      )
                  )
                : void 0 === a
                  ? null
                  : t
        );
    },
    TA = e => {
        var t;
        let { id: n, onResize: r, onPress: o, hideCloseButton: i, disableTransitions: a } = e;
        const u = ti(),
            {
                clientHeight: s,
                isPreview: l,
                screenOffset: c,
                wasDisplayed: d,
                event: p,
                mobile: D,
                screenPosition: m,
                rtl: f,
                isExitIntent: h,
            } = ni(e =>
                ((e, t) => {
                    const {
                            mobile: n,
                            clientHeight: r,
                            isPreview: o,
                            rtl: i,
                            config: { screenOffset: a },
                        } = e.getApplicationState(),
                        u = e.getEvent(xe, t),
                        s = Lr(u),
                        l = un(e, u);
                    return (
                        u.properties.card &&
                            u.properties.card.image &&
                            (s.properties.card.image = K(['link'], u.properties.card.image)),
                        u.properties.text && (s.properties.text = sn(200, u.properties.text)),
                        {
                            clientHeight: r,
                            isPreview: o,
                            screenOffset: a,
                            mobile: n,
                            wasDisplayed: l,
                            rtl: i,
                            event: s,
                            screenPosition: ln(e),
                            isExitIntent: s.properties.isExitIntent,
                        }
                    );
                })(e, n)
            ),
            { quickReplies: g, addon: v } = p.properties,
            C = Kd(() => !d && !h && !a),
            b = !(null == p || null == (t = p.properties) || null == (t = t.card) || !t.image),
            E = or.useMemo(() => g && !X(g), [g]),
            y = or.useCallback(() => {
                l || rn(u);
            }, [u, l]),
            x = or.useCallback(() => {
                l || on(u);
            }, [u, l]),
            F = or.useCallback(
                e => {
                    let { event: t, button: n } = e;
                    an(u, t, n, !0);
                },
                [u]
            ),
            w = or.useCallback(
                e => {
                    F({
                        event: p.id,
                        button: g[e],
                    });
                },
                [p.id, F, g]
            );
        Hu(() => {
            h && u.emit('resize-to-theme-size');
        }, [u, h]);
        const A = or.createElement(
            $w,
            ir(
                {
                    animated: C,
                    reverse: 'right' === m,
                    maxWidth: 'message' === p.type ? '255px' : '230px',
                },
                Uu({
                    onAnimationStart: gr(() => u.emit('resize-to-dimensions')),
                })
            ),
            !i &&
                or.createElement(
                    rm,
                    {
                        reverse: 'right' === m,
                    },
                    or.createElement(
                        xF,
                        ir(
                            {
                                mobile: D,
                                'aria-label': u.localize('hide_greeting'),
                            },
                            Uu({
                                onClick: y,
                            })
                        )
                    )
                ),
            or.createElement(
                AA,
                ir(
                    {
                        reverse: 'right' === m,
                        maxHeight: BA(s, c.y),
                    },
                    Uu({
                        onClick: o,
                    })
                ),
                or.createElement(Rw, {
                    event: p,
                    mobile: D,
                    onActionButtonClick: F,
                    onShowMoreButtonClick: o,
                    rtl: f,
                    onImageLoad: gr(() => u.emit('resize-to-dimensions')),
                })
            ),
            E &&
                or.createElement(
                    rm,
                    {
                        reverse: 'right' === m,
                    },
                    or.createElement(IC, {
                        'aria-labelledby': p.id,
                        replies: g,
                        onSelect: w,
                    })
                ),
            v &&
                ge('input', v) &&
                or.createElement(
                    Jw,
                    {
                        reverse: 'right' === m,
                        fullWidth: D && b,
                    },
                    or.createElement(wA, {
                        mobile: D,
                        type: v,
                        greetingEvent: p,
                        animated: C,
                    })
                )
        );
        return C
            ? or.createElement(
                  SA,
                  {
                      screenPosition: m,
                      onResize: r,
                      onClose: y,
                      onPress: o,
                      onShow: x,
                  },
                  A
              )
            : A;
    },
    LA = e => {
        let { width: t, height: n } = e;
        return rr.createElement(
            'svg',
            {
                viewBox: '0 0 16 16',
                height: n,
                width: t,
            },
            rr.createElement(
                'g',
                null,
                rr.createElement(
                    'g',
                    null,
                    rr.createElement(
                        'defs',
                        null,
                        rr.createElement(
                            'linearGradient',
                            {
                                id: 'idMxj8N4CLSg262406917',
                                gradientTransform: 'rotate(90, 0.5, 0.5)',
                            },
                            rr.createElement('stop', {
                                offset: '0',
                                stopColor: '#77Cf9D',
                                stopOpacity: '1',
                            }),
                            rr.createElement('stop', {
                                offset: '1',
                                stopColor: '#268750',
                                stopOpacity: '1',
                            })
                        )
                    ),
                    rr.createElement('path', {
                        d: 'M 16 8 C 16 7.453 15.692 6.838 15.076 6.156 C 14.614 5.644 14.343 4.988 14.308 4.299 C 14.262 3.38 14.045 2.728 13.658 2.342 C 13.272 1.955 12.62 1.738 11.701 1.692 C 11.012 1.657 10.356 1.387 9.844 0.925 C 9.162 0.308 8.547 0 8 0 C 7.454 0 6.843 0.306 6.166 0.92 C 5.653 1.385 4.994 1.657 4.303 1.692 C 3.382 1.738 2.728 1.955 2.342 2.342 C 1.955 2.728 1.74 3.379 1.696 4.297 C 1.663 4.989 1.391 5.649 0.926 6.163 C 0.307 6.842 0 7.454 0 8 C 0 8.546 0.308 9.158 0.923 9.839 L 0.925 9.837 C 1.39 10.351 1.662 11.011 1.696 11.703 C 1.74 12.621 1.955 13.273 2.342 13.658 C 2.728 14.045 3.38 14.262 4.299 14.308 C 4.988 14.343 5.644 14.613 6.156 15.075 C 6.838 15.692 7.453 16 8 16 C 8.547 16 9.162 15.692 9.844 15.076 C 10.356 14.614 11.012 14.343 11.701 14.308 C 12.62 14.262 13.272 14.045 13.658 13.658 C 14.045 13.272 14.262 12.62 14.308 11.701 C 14.343 11.012 14.613 10.356 15.075 9.844 C 15.692 9.162 16 8.547 16 8 Z',
                        fill: 'url(#idMxj8N4CLSg262406917)',
                    })
                ),
                rr.createElement('path', {
                    d: 'M 6.86 11.278 L 3.94 8.36 L 5.041 7.252 L 6.806 9.016 L 10.552 4.934 L 11.7 5.994 Z',
                    fill: 'rgb(247,255,247)',
                })
            )
        );
    },
    PA = (e, t) => {
        const n = new URL(t);
        return (
            'https://openwidget.com/verified?' +
            Ar({
                sessions: e,
                domain: n.hostname,
            })
        );
    },
    MA = jD('div', {
        target: 'e1arqr0l2',
    })(
        'display:flex;flex-direction:column;min-width:0;overflow:hidden;gap:6px;padding:',
        e => {
            let { theme: t } = e;
            return t.spaces.space5;
        },
        ';',
        e => {
            let { screenPosition: t, theme: n } = e;
            return t && Bu('padding-', 'left' === t ? 'right' : 'left', ':', n.spaces.space6, ';');
        },
        ';'
    ),
    OA = jD('div', {
        target: 'e1arqr0l1',
    })(
        'text-align:left;color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';',
        e => {
            let { theme: t } = e;
            return t.typography.caption;
        },
        ';'
    ),
    IA = jD('a', {
        target: 'e1arqr0l0',
    })(
        'border:0;padding:0;margin:0;text-decoration:none;background-color:transparent;display:flex;align-items:center;gap:',
        e => {
            let { theme: t } = e;
            return t.spaces.space2;
        },
        ';color:',
        e => {
            let { theme: t } = e;
            return t.colors.secondaryTextColor;
        },
        ';',
        e => {
            let { theme: t } = e;
            return t.typography.caption;
        },
        ';'
    ),
    zA = e => {
        let { sessions: t, url: n, screenPosition: r, announce: o = !1 } = e;
        const { localize: i } = ti(),
            a = i(
                'x_people_are_browsing_website',
                {
                    count: t,
                },
                t
            );
        return rr.createElement(
            MA,
            {
                screenPosition: r,
            },
            o &&
                rr.createElement(CF, {
                    message: a + ' Verified by OpenWidget',
                    'aria-live': 'polite',
                    clearOnUnmount: !0,
                }),
            rr.createElement(
                OA,
                null,
                rr.createElement(Qe, {
                    template: a,
                })
            ),
            rr.createElement(
                IA,
                ir(
                    {
                        href: PA(t, n),
                        rel: 'noreferrer',
                        target: '_blank',
                    },
                    Uu({
                        onClick: e => {
                            e.stopPropagation();
                        },
                    })
                ),
                rr.createElement(LA, {
                    width: '16',
                    height: '16',
                    'aria-hidden': !0,
                }),
                ' ',
                rr.createElement('span', null, 'Verified by OpenWidget')
            )
        );
    };
var _A, RA, jA;
const NA = ku(
        _A ||
            (_A = si([
                ' \n\t0% {\n\t\tmax-width: ',
                'px;\n\t\topacity: 0;\n\t\tborder-radius: ',
                'px;\n\t\tmax-height: 60px;\n\t\twhite-space: nowrap;\n\t} \n\t50% {\n\t\twhite-space: nowrap;\n\t} \n\t100% {\n\t\twhite-space: normal;\n\t\tmax-width: calc(',
                'px - 1em);\n\t\topacity: 1;\n\t\tborder-radius: ',
                ';\n\t\tmax-height: 100px;\n\t}\n',
            ])),
        cn,
        cn,
        dn,
        pn
    ),
    WA = ku(
        RA ||
            (RA = si([
                ' \n\t0% {\n\t\twhite-space: nowrap;\n\t\tmax-width: calc(',
                'px - 1em);\n\t\tmax-height: 100px;\n\t\topacity: 1;\n\t\tborder-radius: ',
                ';\n\t} \n\t50% {\n\t\t\twhite-space: nowrap;\n\t} \n\t100% {\n\t\twhite-space: normal;\n\t\tmax-width: ',
                'px;\n\t\tmax-height: 60px;\n\t\topacity: 0;\n\t\tborder-radius: ',
                ';\n\t}\n',
            ])),
        dn,
        pn,
        cn,
        cn
    ),
    VA = ku(
        jA ||
            (jA = si([
                ' \n\tfrom {\n\t\tmax-width: calc(',
                'px - 1em);\n\t\ttransform: translateY(50px);\n\t\topacity: 0;\n\t\tborder-radius: ',
                'px;\n\t} \n\tto {\n\t\tmax-width: calc(',
                'px - 1em);\n\t\ttransform: translateY(0px);\n\t\topacity: 1;\n\t\tborder-radius: ',
                ';\n\t}\n',
            ])),
        dn,
        cn,
        dn,
        pn
    ),
    UA = ['session', 'screenPosition'];
var HA = {
        name: '1m2k91r',
        styles: 'right:0.5em;justify-content:space-between',
    },
    qA = {
        name: '14ltnho',
        styles: 'left:0.5em;flex-direction:row-reverse;justify-content:flex-end',
    };
const GA = jD('div', {
        target: 'eepg5sj0',
    })(
        'display:flex;opacity:0;pointer-events:none;position:absolute;background:',
        e => {
            let { theme: t } = e;
            return t.colors.surface;
        },
        ';border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.xxl;
        },
        ';box-shadow:',
        e => {
            let { theme: t } = e;
            return t.boxShadow.md;
        },
        ';width:max-content;overflow:hidden;cursor:default;z-index:2;',
        e => {
            let { screenPosition: t } = e;
            return 'left' === t ? qA : HA;
        },
        ';',
        e => {
            let { theme: t, transitionState: n, isPreview: r, wasOtherMinimizedElementPreviously: o } = e;
            return 'shown' === n
                ? Bu(
                      'pointer-events:all;animation:',
                      r ? NA : Bu(o ? VA : NA, ',', WA, ';'),
                      ';animation-delay:',
                      r ? '0s' : (o ? 0 : fn) + 'ms, ' + vn + 'ms',
                      ';animation-duration:',
                      o ? gn : hn,
                      'ms,',
                      hn,
                      'ms;animation-timing-function:',
                      t.transitions.easings.swift,
                      ';animation-fill-mode:forwards;'
                  )
                : 'closed' === n
                  ? Bu(
                        'animation:',
                        WA,
                        ';animation-duration:',
                        hn,
                        'ms;animation-timing-function:',
                        t.transitions.easings.swift,
                        ';animation-fill-mode:forwards;'
                    )
                  : void 0;
        },
        ';'
    ),
    KA = e => {
        let { session: t, screenPosition: n } = e,
            r = ur(e, UA);
        const o = ti(),
            i = Ee(),
            a = rr.useRef(0),
            u = ni(e => e.getApplicationState('page')),
            { sessions: s } = t,
            l = Fg(),
            c = ni(e => {
                var t;
                return Boolean(
                    'hidden' === (null == (t = e.getApplicationState('googleReviews')) ? void 0 : t.transitionState)
                );
            });
        return rr.createElement(
            GA,
            ir(
                {
                    screenPosition: n,
                    isPreview: l,
                    wasOtherMinimizedElementPreviously: c,
                },
                r,
                Uu({
                    onClick: () => {
                        Ot(o);
                    },
                    onAnimationStart: gr(() => {
                        o.emit(
                            'resize-request',
                            i
                                ? {
                                      width: '100%',
                                      height: Dn + 'px',
                                  }
                                : {
                                      width: dn + 'px',
                                      height: Dn + 'px',
                                  }
                        );
                    }),
                })
            ),
            rr.createElement(zA, {
                sessions: s,
                url: u.url,
                screenPosition: n,
                announce: !0,
            }),
            rr.createElement(
                sw,
                ir(
                    {
                        duration: mn,
                        delay: fn + hn,
                    },
                    Uu({
                        onClick: () => {
                            l ||
                                (window.clearTimeout(a.current),
                                Cn(o, {
                                    transitionState: 'closed',
                                }),
                                setTimeout(() => {
                                    Cn(o, {
                                        transitionState: 'hidden',
                                    });
                                }, hn));
                        },
                    }),
                    {
                        'aria-label': o.localize('hide_visitor_counter'),
                    }
                )
            )
        );
    },
    YA = jD('p', {
        target: 'ejp8d810',
    })({
        name: 'oelr46',
        styles: 'margin:1em 0',
    });
var ZA, XA, $A, JA, QA;
const eB = ku(
        ZA || (ZA = si(['\n\t0% {\n\t\ttransform: scale(1.0);\n\t}\n\n\t100% {\n\t\ttransform: scale(1.05);\n\t}\n']))
    ),
    tB = ku(
        XA || (XA = si(['\n\t0% {\n\t\ttransform: scale(1.05);\n\t}\n\n\t100% {\n\t\ttransform: scale(1.0);\n\t}\n']))
    ),
    nB = ku(
        $A ||
            ($A = si([
                '\n\t0% {\n\t\topacity: 1;\n\t\ttransform: scale(1);\n\t}\n\n\t100% {\n\t\topacity: 0;\n\t\ttransform: scale(0.8);\n\n\t}\n',
            ]))
    ),
    rB = ku(
        JA ||
            (JA = si([
                '\n\t0% {\n\t\topacity: 0;\n\t\ttransform: scale(0.8);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform: scale(1);\n\t}\n',
            ]))
    ),
    oB = ku(
        QA ||
            (QA = si([
                '\n\t0% {\n\t\topacity: 0;\n\t\ttransform: scale(0);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform: scale(1.3);\n\t}\n',
            ]))
    ),
    iB = ['height', 'width', 'color'],
    aB = e => {
        let { height: t, width: n, color: r } = e,
            o = ur(e, iB);
        const i = bu();
        return or.createElement(
            'svg',
            ir(
                {
                    preserveAspectRatio: 'xMidYMid',
                    viewBox: '0 0 58 52',
                    height: t,
                    width: n,
                },
                o
            ),
            or.createElement('path', {
                d: 'M29.481017,9 L26.7193716,9.00780269 L25.0166328,9.03077059 C21.0467647,9.10067287 17.1033343,9.28474889 13.272705,9.58299863 C11.1559364,9.77777398 9.61646844,11.3359767 9.42403494,13.2837302 L9.35895495,13.9827722 C9.18193028,16.0645766 9.0669853,18.9848792 9,22.1934446 L9,29.8065554 L9.04251657,31.5660142 C9.1220023,34.4365801 9.24537246,36.9681814 9.42403494,38.7162698 C9.61646844,40.6640233 11.1559364,42.222226 13.272705,42.4170014 C17.1033343,42.7152511 21.0467647,42.8993271 25.0166328,42.9692294 L26.7193716,42.9921973 L29.5976553,43 L31.2426614,42.9926959 C35.7862719,42.9500888 40.3114659,42.7583568 44.6893281,42.4174999 C46.8060966,42.2227246 48.3455646,40.6645218 48.5379981,38.7167684 L48.6030781,38.0177264 C48.8197734,35.4693959 48.9434478,29.6646482 49,25.6127275 L48.962033,22.192946 L48.9195164,20.4334872 C48.8400307,17.5629214 48.7166605,15.0313201 48.5379981,13.2832316 C48.3455646,11.3354782 46.8060966,9.77727542 44.6893281,9.58250007 C40.8586987,9.28425033 36.9152683,9.10017431 32.9454002,9.03027203 L31.2426614,9.00730413 L29.481017,9 Z',
                fill: r || i.colors.minimizedBackground,
            })
        );
    },
    uB = ['height', 'width', 'color'],
    sB = e => {
        let { height: t, width: n, color: r } = e,
            o = ur(e, uB);
        const i = bu();
        return or.createElement(
            'svg',
            ir(
                {
                    preserveAspectRatio: 'xMidYMid',
                    viewBox: '0 0 58 52',
                    height: t,
                    width: n,
                },
                o
            ),
            or.createElement('path', {
                d: 'M29.0008033,0 C34.4212311,0 40.0352456,0.194420965 45.0684999,0.583262896 C51.650448,1.16652579 57.0708757,6.22147089 57.6516358,13.0262047 L57.7196204,14.2009165 L57.7899531,15.6923649 C57.859564,17.3281771 57.9295796,21.7078579 58,28.8314074 L57.9637288,30.7090953 C57.8920573,33.9897835 57.782987,36.9295762 57.6516358,38.974293 C57.0708757,45.7790268 51.650448,50.8339719 45.0684999,51.4172348 C40.4928142,51.7707274 35.4371613,51.9635416 30.4833197,51.9956773 L28.9886006,52 C23.5681728,52 17.9541584,51.805579 12.920904,51.4167371 C6.33895599,50.8334742 0.91852822,45.7785291 0.337768101,38.9737953 L0.269783585,37.7990835 L0.22114963,36.8013068 C0.126792732,34.7232882 0.0503553685,32.1671014 0,29.4319602 L0,22.5685374 L0.0389528669,20.7061894 C0.110492307,17.6622602 0.21428433,14.9489491 0.337768101,13.0267023 C0.91852822,6.22196854 6.33895599,1.16702345 12.920904,0.583760551 C17.4965898,0.230267886 22.5522426,0.0374537061 27.5060842,0.00531800931 L29.0008033,0 Z',
                fill: r || i.colors.ctaText,
            })
        );
    },
    lB = ['height', 'width', 'color'],
    cB = e => {
        let { height: t, width: n, color: r } = e,
            o = ur(e, lB);
        const i = bu();
        return or.createElement(
            'svg',
            ir(
                {
                    viewBox: '0 0 58 52',
                    height: t,
                    width: n,
                },
                o
            ),
            or.createElement('path', {
                d: 'M28.5109686,35 L26.5109686,35 C25.1302567,35 24.0109686,36.1192881 24.0109686,37.5 L24.0109686,39.5 C24.0109686,40.8807119 25.1302567,42 26.5109686,42 L28.5109686,42 C29.8916804,42 31.0109686,40.8807119 31.0109686,39.5 L31.0109686,37.5 C31.0109686,36.1192881 29.8916804,35 28.5109686,35 Z M24.2180929,7.00002757 L24.1267943,7.0035235 C20.2549106,7.32941625 17.3553549,9.56561273 17.047887,12.9874285 L17.0275374,13.3466047 L17.0094313,14.0213331 C17.0050362,14.2844884 17.0022361,14.5864297 17.0008954,14.9287777 L17.0008954,15.9493215 L17.0110107,17.5091836 C17.013122,18.8237491 18.1881183,19.9979219 19.5093967,19.9999988 L21.5109686,20 L21.6691026,19.9944262 C22.9274186,19.9057695 24.0109686,18.7721183 24.0109686,17.5 L24.0062874,16.0062677 C24.0029832,14.9519111 24.8161499,14.0855552 25.8507654,14.0059633 L26.0062776,14 L31.0264559,14 C32.1206394,14 33.011709,14.8792827 33.0262786,15.9733692 L33.0657015,18.9338062 C33.0716182,19.4056689 32.9104738,19.8644183 32.6085881,20.2271337 L32.2944303,20.5975878 C32.0115119,20.9223892 31.6757925,21.2874147 31.2872723,21.6926643 L30.9447052,22.0400403 L31,22 C30.6427514,22.27188 30.266987,22.5220304 29.7475087,22.8381107 L28.724449,23.4442306 C25.7855457,25.172701 24.6451012,27.6378256 24.4474136,30.0331331 C24.4419067,30.0989938 24.4391785,30.1661675 24.439274,30.2334264 C24.441164,31.5638952 25.3552045,32.3864983 26.6788053,32.3846167 L29.1441007,32.3848707 C30.2347844,32.3831295 31.0828877,31.6446446 31.4354641,30.6172352 L31.4895952,30.4434019 C31.7323113,29.5779052 32.3932452,28.8757375 33.8585487,27.841307 L35.2493394,26.8890547 C38.4189615,24.7057033 39.9000188,22.8283919 39.9669365,19.6772614 L39.9990321,16.3132808 L40.0063004,15.2416415 L40.0109634,13.7873075 C39.6977061,10.2540552 36.8323239,7.51973947 33.2524784,7.10691418 L32.956295,7.07993622 L24.6087214,7.00293535 C24.4800723,7.0019754 24.3498647,7.00100617 24.2180929,7.00002757 Z',
                fill: r || i.colors.minimizedBackground,
            })
        );
    },
    dB = ['hoverState', 'mobileBubble', 'small', 'showRecommendationsIcon'],
    pB = (e, t) => (e ? (t ? 16 : 24) : t ? 24 : 32),
    DB = (e, t) =>
        Bu('display:flex;width:', pB(e, t), 'px;height:', pB(e, t), 'px;align-items:center;justify-content:center;'),
    mB = jD('div', {
        target: 'e1dmt1bi3',
    })(
        'position:relative;',
        e => {
            let { mobileBubble: t, small: n } = e;
            return DB(t, n);
        },
        ' ',
        e => {
            let { hoverState: t, theme: n } = e;
            return 'in' === t
                ? Bu('transform:scale(1);animation:', eB, ' 200ms ', n.transitions.easings.spring, ' forwards;')
                : 'out' === t
                  ? Bu('transform:scale(1.25);animation:', tB, ' 200ms ', n.transitions.easings.spring, ' forwards;')
                  : void 0;
        },
        ';'
    ),
    fB = jD('div', {
        target: 'e1dmt1bi2',
    })(
        'position:absolute;z-index:1;left:0;right:0;bottom:1px;transition:opacity 150ms ',
        e => {
            let { theme: t } = e;
            return t.transitions.easings.smooth;
        },
        ' 50ms;',
        e => {
            let { mobileBubble: t } = e;
            return DB(t);
        },
        ' ',
        e => {
            let { isVisible: t } = e;
            return {
                opacity: t ? 1 : 0,
            };
        },
        ' ',
        e => {
            let { hoverState: t, theme: n } = e;
            return 'in' === t
                ? Bu('transform:scale(1);animation:', eB, ' 200ms ', n.transitions.easings.spring, ' forwards;')
                : 'out' === t
                  ? Bu('transform:scale(1.25);animation:', tB, ' 200ms ', n.transitions.easings.spring, ' forwards;')
                  : void 0;
        },
        ';'
    ),
    hB = jD('div', {
        target: 'e1dmt1bi1',
    })(
        'position:absolute;z-index:1;left:0;right:0;bottom:0;top:0;display:flex;align-items:center;justify-content:center;',
        e => {
            let { hoverState: t, theme: n } = e;
            return 'in' === t
                ? Bu('animation:', nB, ' 1000ms ', n.transitions.easings.spring, ' forwards;')
                : 'out' === t
                  ? Bu('animation:', rB, ' 400ms ', n.transitions.easings.spring, ' forwards;')
                  : void 0;
        },
        ';'
    ),
    gB = jD('div', {
        target: 'e1dmt1bi0',
    })(
        'position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;',
        e => {
            let { mobileBubble: t, small: n } = e;
            return DB(t, n);
        },
        ' ',
        e => {
            let { active: t, theme: n } = e;
            return t && Bu('animation:', oB, ' 400ms ', n.transitions.easings.spring, ' forwards;');
        },
        ';'
    ),
    vB = e => {
        let { hoverState: t, mobileBubble: n, small: r, showRecommendationsIcon: o } = e;
        const i = r ? '24px' : '30px',
            a = {
                width: r ? '24px' : '30px',
                height: r ? '20px' : '24px',
            },
            u = {
                width: r ? '20px' : '22px',
                height: r ? '16px' : '18px',
            },
            s = bu();
        return or.createElement(
            or.Fragment,
            null,
            or.createElement(sB, {
                width: i,
                height: i,
                color: s.colors.minimizedIcon,
            }),
            or.createElement(
                hB,
                {
                    hoverState: t,
                },
                o
                    ? or.createElement(fv, {
                          color: s.colors.minimizedBackground,
                      })
                    : or.createElement(cB, {
                          height: a.height,
                          width: a.width,
                      })
            ),
            or.createElement(
                gB,
                {
                    mobileBubble: n,
                    small: r,
                    active: 'in' === t,
                },
                'in' === t &&
                    or.createElement(aB, {
                        height: u.height,
                        width: u.width,
                    })
            )
        );
    },
    CB = e => {
        let { hoverState: t, mobileBubble: n = !1, small: r = !1, showRecommendationsIcon: o = !1 } = e,
            i = ur(e, dB);
        const a = ti(),
            { getApplicationState: u } = a,
            s = bu(),
            l = 'in' === t,
            { defaultWidget: c } = u(),
            d = _t('chatbotIntegration', a);
        return or.createElement(
            mB,
            ir(
                {
                    hoverState: t,
                    small: r,
                    mobileBubble: n,
                },
                i
            ),
            'openwidget' !== c || (null != d && d.enabled)
                ? or.createElement(
                      or.Fragment,
                      null,
                      or.createElement(rv, {
                          filled: l,
                          smile: !(null == d || !d.enabled),
                          size: n ? 24 : 32,
                          color: s.colors.minimizedIcon,
                          backgroundColor: s.colors.minimizedBackground,
                      }),
                      or.createElement(
                          fB,
                          {
                              isVisible: l,
                              mobileBubble: n,
                          },
                          l &&
                              or.createElement(bA, {
                                  width: n ? '14px' : '18px',
                                  animationDuration: 1,
                                  animationIterationCount: 1,
                                  color: s.colors.minimizedBackground,
                              })
                      )
                  )
                : or.createElement(vB, {
                      hoverState: t,
                      mobileBubble: n,
                      small: r,
                      showRecommendationsIcon: o,
                  })
        );
    },
    bB = {
        bar: 255,
        bubble: 60,
    },
    EB = (e, t, n) => (e ? 4 : t ? (n ? 9 : 7) : 5),
    yB = e => {
        let { color: t, minimizedType: n, isModern: r = !1, mobileBubble: o = !1 } = e;
        const i = o ? 8 : 12,
            a = EB(o, 'bar' === n, r);
        return (
            'radial-gradient(circle ' +
            (i + 2) +
            'px at ' +
            ((o ? 40 : bB[n]) - i + a) +
            'px ' +
            (i - a) +
            'px, transparent 98%, ' +
            t +
            ') top right'
        );
    },
    xB = (e, t, n) =>
        Bu(
            'height:',
            e ? 16 : 24,
            'px;width:',
            e ? 16 : 24,
            'px;font-size:',
            e ? 0.6 : 0.8,
            'em;z-index:1;position:absolute;right:-',
            EB(e, t, n),
            'px;top:-',
            EB(e, t, n),
            'px;'
        ),
    FB = e => {
        let { mobileBubble: t = !1, unseenEventsCount: n = 0, bar: r } = e;
        const { localize: o } = ti(),
            { animateUnseenEventIndicator: i } = ni(e => tn(e)),
            a = 'modern' === bu().name;
        return wu(
            PE,
            {
                animated: i,
                animationKind: 'swift',
                css: xB(t, r, a),
                'aria-label': o('new_messages_notification'),
                tabIndex: 0,
                role: 'img',
            },
            n > 9 ? '9+' : n
        );
    },
    wB = jD('div', {
        displayName: 'MinimizedBar',
        section: !0,
        target: 'e16i86ec1',
    })(
        'position:relative;width:255px;height:50px;box-shadow:',
        e => {
            let { theme: t } = e;
            return t.boxShadow.subtle;
        },
        ';border-radius:',
        e => {
            let { theme: t } = e;
            return [t.borderRadius.lg, t.borderRadius.lg, t.borderRadius.none, t.borderRadius.none].join(' ');
        },
        ';display:flex;padding:0 0.9em;align-items:center;background:',
        e => {
            let { theme: t, hasUnseenEvents: n } = e;
            return n
                ? yB({
                      color: t.colors.minimizedBackground,
                      minimizedType: 'bar',
                      isModern: 'modern' === t.name,
                  }) + ' !important'
                : t.colors.surface;
        },
        ';&:hover{cursor:pointer;}'
    ),
    AB = jD(YA, {
        target: 'e16i86ec0',
    })(
        'flex-grow:1;font-weight:700;font-size:0.9em;',
        e => {
            let { theme: t } = e;
            return Bu('margin-', t.isRtl ? 'left' : 'right', ':', t.spaces.space2, ';');
        },
        ';'
    ),
    BB = e => {
        let { text: t, hasUnseenEvents: n, unseenEventsCount: r, onClick: o } = e;
        const i = el(),
            a = ti(),
            u = Ee(),
            { bubbleHoverState: s = !1, animated: l } = tn(a);
        return or.createElement(
            wB,
            ir(
                {
                    hasUnseenEvents: n,
                },
                ss(
                    i,
                    Uu({
                        onClick: o,
                        onMouseLeave: () => {
                            l ||
                                u ||
                                (nn(a, {
                                    bubbleHoverState: 'out',
                                }),
                                setTimeout(
                                    () =>
                                        nn(a, {
                                            bubbleHoverState: !1,
                                        }),
                                    200
                                ));
                        },
                        onMouseEnter: () => {
                            l ||
                                u ||
                                nn(a, {
                                    bubbleHoverState: 'in',
                                });
                        },
                    })
                )
            ),
            n
                ? or.createElement(FB, {
                      bar: !0,
                      key: r,
                      unseenEventsCount: r,
                  })
                : null,
            or.createElement(
                AB,
                {
                    ellipsis: !0,
                },
                or.createElement(Kv, null, t)
            ),
            or.createElement(
                ev,
                {
                    onPress: o,
                    'aria-label': a.localize('launch_livechat_widget'),
                },
                or.createElement(CB, {
                    mobileBubble: !0,
                    hoverState: s,
                })
            )
        );
    };
var kB, SB;
const TB = (e, t) => (e ? (t ? '25px' : '40px') : t ? '38px' : '60px'),
    LB = (e, t) =>
        ku(
            kB ||
                (kB = si([
                    '\n\tfrom {\n\t\twidth: ',
                    ';\n\t\theight: ',
                    ';\n\t}\n\tto {\n\t\twidth: ',
                    ';\n\t\theight: ',
                    ';\n\t}\n',
                ])),
            e,
            e,
            t,
            t
        ),
    PB = jD('div', {
        target: 'e1ybl9g12',
    })(
        'z-index:-1;position:absolute;top:0;left:0;width:',
        e => {
            let { mobile: t } = e;
            return t ? 40 : 60;
        },
        'px;height:',
        e => {
            let { mobile: t } = e;
            return t ? 40 : 60;
        },
        'px;border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.round;
        },
        ';background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.cta;
        },
        ';animation-name:',
        e => {
            let { scaleTo: t } = e;
            return (e =>
                ku(
                    SB ||
                        (SB = si([
                            '\n\tfrom {\n\t\ttransform: scale(1);\n\t\topacity: 0.6;\n\t}\n\tto {\n\t\ttransform: scale(',
                            ');\n\t\topacity: 0;\n\t}\n',
                        ])),
                    e
                ))(t);
        },
        ';animation-duration:0.9s;animation-delay:',
        e => {
            let { delay: t } = e;
            return null != t ? t : 0;
        },
        's;animation-iteration-count:1;animation-timing-function:',
        e => {
            let { theme: t } = e;
            return t.transitions.easings.swift;
        },
        ';'
    ),
    MB = jD('div', {
        displayName: 'MinimizedBubble',
        section: !0,
        target: 'e1ybl9g11',
    })(
        'display:flex;width:',
        e => {
            let { mobile: t, small: n } = e;
            return TB(t, n);
        },
        ';height:',
        e => {
            let { mobile: t, small: n } = e;
            return TB(t, n);
        },
        ';box-shadow:',
        e => {
            let { theme: t } = e;
            return t.boxShadow.subtle;
        },
        ';border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.round;
        },
        ';justify-content:center;position:relative;overflow:visible;background:',
        e => {
            let { theme: t, hasUnseenEvents: n, hasAvatar: r, mobile: o } = e;
            return n && !r
                ? yB({
                      color: t.colors.minimizedBackground,
                      minimizedType: 'bubble',
                      mobileBubble: o,
                  }) + ' !important'
                : t.colors.surface;
        },
        ';',
        e => {
            let { theme: t, mobile: n, screenPosition: r } = e;
            return n
                ? t.isRtl
                    ? Bu('margin-bottom:24px;margin-', 'left' === r ? 'left' : 'right', ':8px;')
                    : Bu('margin-bottom:24px;margin-', 'left' === r ? 'right' : 'left', ':8px;')
                : Bu('margin-', 'left' === r ? 'right' : 'left', ':auto;');
        },
        ' ',
        e => {
            let { theme: t, mobile: n, resizeAnimation: r } = e;
            return 'shrink' === r
                ? Bu(
                      'animation-name:',
                      LB(TB(n, !1), TB(n, !0)),
                      ';animation-duration:600ms;animation-timing-function:',
                      t.transitions.easings.swift,
                      ';'
                  )
                : 'grow' === r
                  ? Bu(
                        'animation-name:',
                        LB(TB(n, !0), TB(n, !1)),
                        ';animation-duration:300ms;animation-timing-function:',
                        t.transitions.easings.swift,
                        ';animation-fill-mode:forwards;animation-iteration-count:1;'
                    )
                  : void 0;
        },
        ' &:hover{cursor:pointer;}'
    ),
    OB = {
        name: '1btxy8w',
        styles: 'padding:0;width:100%;display:flex;justify-content:center;align-items:center',
    },
    IB = jD(WF, {
        target: 'e1ybl9g10',
    })(
        'pointer-events:none;',
        e => {
            let { hasUnseenEvents: t, mobileBubble: n } = e;
            return (
                t &&
                Bu(
                    'img{mask:',
                    yB({
                        color: 'black',
                        minimizedType: 'bubble',
                        mobileBubble: n,
                    }),
                    ';}'
                )
            );
        },
        ';'
    ),
    zB = e => {
        let {
            mobileBubble: t,
            avatar: n,
            agentName: r,
            hasUnseenEvents: o,
            unseenEventsCount: i,
            screenPosition: a,
            onClick: u,
        } = e;
        const s = ti(),
            l = Ee(),
            c = ni(e => bn(e)),
            {
                defaultWidget: d,
                visitorCounter: p,
                googleReviews: D,
                contactInvitation: m,
                chatBotGreeting: f,
                minimizedMessageInput: h,
            } = ni(e => e.getApplicationState()),
            g = os(),
            v = 'livechat' === d && Boolean(n),
            {
                bubbleHoverState: C = !1,
                animated: b,
                resizeBubbleAnimation: E,
                showPulseAnimation: y,
                showAvatarFallback: x,
            } = ni(e => tn(e));
        return wu(
            MB,
            ir(
                {
                    mobile: t,
                    small: c,
                    resizeAnimation: E,
                    hasAvatar: v && !x,
                    screenPosition: a,
                    hasUnseenEvents: o,
                },
                Uu(
                    ir(
                        {
                            onClick: u,
                            onAnimationEnd: () => {
                                if (!E) return;
                                nn(
                                    s,
                                    ir(
                                        {
                                            resizeBubbleAnimation: null,
                                        },
                                        'grow' === E &&
                                            !y && {
                                                showPulseAnimation: !0,
                                            }
                                    )
                                );
                            },
                        },
                        !n && {
                            onMouseLeave: () => {
                                b ||
                                    E ||
                                    y ||
                                    l ||
                                    (null != p && p.isVisible) ||
                                    (null != D && D.isVisible) ||
                                    (null != m && m.isVisible) ||
                                    (null != f && f.isVisible) ||
                                    h.isVisible ||
                                    (nn(s, {
                                        bubbleHoverState: 'out',
                                    }),
                                    setTimeout(
                                        () =>
                                            nn(s, {
                                                bubbleHoverState: !1,
                                            }),
                                        200
                                    ));
                            },
                        },
                        !n && {
                            onMouseEnter: () => {
                                b ||
                                    E ||
                                    y ||
                                    l ||
                                    (null != p && p.isVisible) ||
                                    (null != D && D.isVisible) ||
                                    (null != m && m.isVisible) ||
                                    (null != f && f.isVisible) ||
                                    h.isVisible ||
                                    nn(s, {
                                        bubbleHoverState: 'in',
                                    });
                            },
                        }
                    )
                )
            ),
            o &&
                wu(FB, {
                    mobileBubble: t,
                    key: i,
                    unseenEventsCount: i,
                }),
            y &&
                wu(
                    or.Fragment,
                    null,
                    wu(PB, {
                        mobile: t,
                        scaleTo: 1.5,
                    }),
                    wu(
                        PB,
                        ir(
                            {
                                mobile: t,
                                delay: 0.3,
                                scaleTo: 1.3,
                            },
                            Uu({
                                onAnimationEnd: () => {
                                    nn(s, {
                                        showPulseAnimation: !1,
                                    });
                                },
                            })
                        )
                    )
                ),
            wu(
                ev,
                ir(
                    {
                        skipFocusVisible: !0,
                        css: OB,
                        'aria-label': s.localize(
                            'livechat' === d ? 'launch_livechat_widget' : 'launch_openwidget_widget'
                        ),
                    },
                    Uu({
                        onPress: u,
                    })
                ),
                v && !x
                    ? wu(IB, {
                          'aria-hidden': !0,
                          imgUrl: n,
                          imgAlt: s.localize('current_agent_avatar'),
                          size: t ? '40px' : '60px',
                          hasUnseenEvents: o,
                          mobileBubble: t,
                          imgProps: ir(
                              {},
                              Uu({
                                  onError: () => {
                                      s.emit('call-element-method', ['#' + g, 'remove']),
                                          nn(s, {
                                              showAvatarFallback: !0,
                                          });
                                  },
                              }),
                              {
                                  id: g,
                              }
                          ),
                          text: r,
                          fontSize: '24px',
                      })
                    : wu(CB, {
                          'aria-hidden': !0,
                          mobileBubble: t,
                          small: c,
                          hoverState: C,
                          showRecommendationsIcon: y,
                      })
            )
        );
    },
    _B = (e, t) => (e ? [].concat(t).reverse() : t);
var RB, jB;
const NB = ku(
        RB ||
            (RB = si([
                '\n    0%, 50% {\n        transform: translateY(20px);\n        opacity: 0;\n    }\n    100% {\n        transform: translateY(0);\n        opacity: 1;\n    }\n',
            ]))
    ),
    WB = ku(
        jB ||
            (jB = si([
                '\n    0% {\n\t\ttransform: translateY(0);\n\t\topacity: 1;\n    }\n    50%, 100% {\n\t\ttransform: translateY(20px);\n\t\topacity: 0;\n    }\n',
            ]))
    ),
    VB = jD('div', {
        target: 'e169ghge0',
    })(
        'grid-area:greeting;justify-self:start;margin-bottom:-16px;',
        e => {
            let { animate: t, isClosing: n, theme: r } = e;
            return (
                t &&
                Bu(
                    'animation:',
                    n ? WB : NB,
                    ';animation-duration:',
                    En,
                    'ms;animation-timing-function:',
                    r.transitions.easings.swift,
                    ';animation-fill-mode:forwards;'
                )
            );
        },
        ';'
    ),
    UB = e => {
        let { visibleGreetingId: t, animate: n, isClosing: r, maximize: o, onResize: i } = e;
        const a = ti();
        return rr.createElement(
            VB,
            ir(
                {
                    animate: !!t && n,
                    isClosing: r,
                },
                n &&
                    Uu(
                        ir(
                            {
                                onAnimationStart: gr(() => a.emit('resize-to-theme-size')),
                            },
                            !r && {
                                onAnimationEnd: gr(() => a.emit('resize-to-dimensions')),
                            }
                        )
                    )
            ),
            rr.createElement(TA, {
                id: t,
                onPress: o,
                onResize: i,
                hideCloseButton: !0,
                disableTransitions: !0,
            })
        );
    },
    HB = e => ('left' === e ? 'right' : 'left'),
    qB = e => {
        var t, n;
        return null != (t = null == e || null == (n = e.properties) ? void 0 : n.type) ? t : null;
    };
var GB, KB;
const YB = {
        name: '1i466jw',
        styles: 'opacity:1;filter:blur(0px);transform:translate(0, 0)',
    },
    ZB = (e, t) =>
        Bu(
            'opacity:0;filter:blur(8px);transform:translate(\n\t\t',
            ('right' === e && !t) || ('left' === e && t) ? '5px' : '-5px',
            ',\n\t\t10px\n\t);'
        ),
    XB = (e, t) =>
        ku(GB || (GB = si(['\n    from {\n        ', '\n    }\n    to {\n        ', '\n    }\n'])), ZB(e, t), YB),
    $B = (e, t) =>
        ku(KB || (KB = si(['\n    from {\n        ', '\n    }\n    to {\n        ', '\n    }\n'])), YB, ZB(e, t)),
    JB = jD(ev, {
        target: 'e16og39o0',
    })(
        'position:absolute;',
        e => {
            let { theme: t, screenPosition: n } = e;
            return t.isRtl ? n : HB(n);
        },
        ':0;top:-',
        yn + 8,
        'px;height:',
        yn,
        'px;width:',
        yn,
        'px;color:',
        e => {
            let { theme: t } = e;
            return t.colors.secondaryTextColor;
        },
        ';background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.surfaceVariant;
        },
        ';border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.xl;
        },
        ';transition:opacity ',
        En,
        'ms ',
        e => {
            let { theme: t } = e;
            return t.transitions.easings.swift;
        },
        ',transform ',
        En,
        'ms ',
        e => {
            let { theme: t } = e;
            return t.transitions.easings.swift;
        },
        ',filter ',
        En,
        'ms ',
        e => {
            let { theme: t } = e;
            return t.transitions.easings.swift;
        },
        ';',
        e => {
            let { theme: t, screenPosition: n, mobile: r, hidden: o } = e;
            return (Pt() && !r) || o ? ZB(n, t.isRtl) : YB;
        },
        ';',
        e => {
            let { theme: t, state: n, mobile: r, screenPosition: o } = e;
            return (
                ('hiding' === n || 'expanding' === n || 'retracting' === n) &&
                Bu(
                    'animation:',
                    {
                        expanding: $B(o, t.isRtl),
                        retracting: !Pt() || r ? XB(o, t.isRtl) : 'none',
                        hiding: $B(o, t.isRtl),
                    }[n],
                    ';animation-duration:',
                    En,
                    'ms;animation-timing-function:',
                    t.transitions.easings.swift,
                    ';animation-fill-mode:forwards;'
                )
            );
        },
        ' ',
        e => {
            let { hidden: t } = e;
            return !t && Bu('&:focus{', YB, ';}');
        },
        ' ',
        e => {
            let { withGreeting: t } = e;
            return t && Bu('top:auto;right:0;left:auto;bottom:auto;', YB, ';');
        },
        ';'
    ),
    QB = JB.toString(),
    ek = e => {
        let {
            mobile: t,
            screenPosition: n,
            hidden: r,
            visibleGreetingId: o,
            withSelectedText: i,
            minimizedMessageInputState: a,
        } = e;
        const u = ti(),
            s = rr.useRef(null);
        return rr.createElement(
            JB,
            ir(
                {},
                Uu({
                    onClick: () => {
                        s.current && clearTimeout(s.current),
                            i &&
                                u.setApplicationState({
                                    websiteTextSelection: ir({}, u.getApplicationState('websiteTextSelection'), {
                                        state: 'exit',
                                    }),
                                }),
                            xn(
                                u,
                                ir(
                                    {
                                        state: 'hiding',
                                    },
                                    o && {
                                        closingGreetingId: o,
                                    }
                                )
                            ),
                            (s.current = setTimeout(() => {
                                i &&
                                    u.setApplicationState({
                                        websiteTextSelection: {
                                            text: '',
                                            state: 'hidden',
                                        },
                                    }),
                                    xn(
                                        u,
                                        {
                                            state: 'hidden',
                                            closed: !0,
                                            closingGreetingId: null,
                                        },
                                        {
                                            render: !o,
                                        }
                                    ),
                                    o && rn(u);
                            }, En));
                    },
                }),
                {
                    mobile: t,
                    state: a,
                    screenPosition: n,
                    hidden: r,
                    tabIndex: r ? -1 : 0,
                    withGreeting: !!o || i,
                    'aria-label': o || i ? u.localize('hide_greeting') : u.localize('close_message_input'),
                }
            ),
            rr.createElement(Wg, {
                size: 20,
                'aria-hidden': !0,
            })
        );
    };
var tk, nk, rk, ok, ik, ak;
const uk = ku(
        tk || (tk = si(['\n    from {\n        width: ', 'px;\n    }\n    to {\n        width: ', 'px;\n    }\n'])),
        Fn,
        wn
    ),
    sk = ku(
        nk || (nk = si(['\n    from {\n        width: ', 'px;\n    }\n    to {\n        width: ', 'px;\n    }\n'])),
        wn,
        Fn
    ),
    lk = ku(rk || (rk = si(['\n    from {\n        opacity: 1;\n    }\n    to {\n        opacity: 0;\n    }\n']))),
    ck = ku(
        ok ||
            (ok = si([
                '\n    from {\n        width: ',
                'px;\n    }\n    to {\n        width: ',
                'px;\n        padding: 24px;\n    }\n',
            ])),
        Fn,
        An
    );
var dk, pk, Dk, mk, fk, hk, gk, vk, Ck;
const bk = 370,
    Ek = ku(
        dk ||
            (dk = si([
                '\n    0%, 49% {\n        display: none;\n    }\n    50% {\n        display: flex;\n        max-height: 0;\n\t\topacity: 0;\n\t\tfilter: blur(24px);\n    }\n    100% {\n\t\tmax-height: ',
                'px;\n\t\topacity: 1;\n\t\tfilter: blur(0px);\n    }\n',
            ])),
        bk
    ),
    yk = ku(
        pk ||
            (pk = si([
                '\n    0% {\n\t\tmax-height: ',
                'px;\n\t\topacity: 1;\n\t\tfilter: blur(0px);\n    }\n    49% {\n        max-height: 0;\n\t\topacity: 0;\n\t\tfilter: blur(24px);\n\n    }\n    50%, 100% {\n\t\tdisplay: none;\n    }\n',
            ])),
        bk
    ),
    xk = ku(
        Dk ||
            (Dk = si([
                '\n    0% {\n\t\tmax-height: 0;\n\t\topacity: 0;\n\t\tfilter: blur(24px);\n    }\n    100% {\n\t\tmax-height: ',
                'px;\n\t\topacity: 1;\n\t\tfilter: blur(0px);\n    }\n',
            ])),
        bk
    ),
    Fk = ku(
        mk ||
            (mk = si([
                '\n    0% {\n\t\tmax-height: ',
                'px;\n\t\topacity: 1;\n\t\tfilter: blur(0px);\n    }\n    100% {\n\t\tmax-height: 0;\n\t\topacity: 0;\n\t\tfilter: blur(24px);\n    }\n',
            ])),
        bk
    ),
    wk = (e, t, n, r, o, i) => {
        const a = i + kn + 56;
        return e
            ? t && !r
                ? ((e, t) =>
                      ku(
                          vk ||
                              (vk = si([
                                  '\n    0% {\n        max-height: ',
                                  'px;\n\t\ttransform: translateX(0);\n\t\tborder-radius: 26px;\n    }\n\t100% {\n\t\tmax-height: ',
                                  'px;\n\t\ttransform: translateX(',
                                  '',
                                  'px);\n\t\tborder-radius: 30px;\n\t}\n',
                              ])),
                          t,
                          kn,
                          'right' === e ? '-' : '',
                          An + Bn
                      ))(n, a)
                : ((e, t) =>
                      ku(
                          hk ||
                              (hk = si([
                                  '\n    0% {\n        max-height: ',
                                  'px;\n\t\tmax-width: ',
                                  'px;\n\t\ttransform: translateX(0);\n    }\n    100% {\n\t\tmax-height: ',
                                  'px;\n\t\tmax-width: ',
                                  'px;\n\t\ttransform: ',
                                  ';\n\t}\n',
                              ])),
                          bk,
                          Fn,
                          kn,
                          An,
                          t
                              ? 'translateX(' + ('right' === e ? '-' : '') + Fn + 'px)'
                              : 'translateX(' + ('right' === e ? '' : '-') + (Fn - An - Bn) + 'px)'
                      ))(n, o)
            : t
              ? ((e, t) =>
                    ku(
                        gk ||
                            (gk = si([
                                '\n    0% {\n\t\tmax-height: ',
                                'px;\n\t\ttransform: translateX(',
                                '',
                                'px);\n\t\tborder-radius: 30px;\n\t}\n\t100% {\n\t\tmax-height: ',
                                'px;\n\t\ttransform: translateX(0);\n\t\tborder-radius: 26px;\n\t}\n',
                            ])),
                        kn,
                        'right' === e ? '-' : '',
                        An + Bn,
                        t
                    ))(n, a)
              : ((e, t) =>
                    ku(
                        fk ||
                            (fk = si([
                                '\n    0% {\n        transform: ',
                                ';\n        max-height: ',
                                'px;\n    }\n    40% {\n\t\tmax-height: ',
                                'px;\n\t\tborder-radius: 30px;\n    }\n\t80% {\n\t\ttransform: translateX(0);\n\t}\n    100% {\n        max-height: ',
                                'px;\n\t\tborder-radius: 26px;\n    }\n',
                            ])),
                        t
                            ? 'translateX(' + ('right' === e ? '' : '-') + Fn + 'px)'
                            : 'translateX(' + ('right' === e ? '-' : '') + (An + Bn) + 'px)',
                        kn,
                        kn,
                        bk
                    ))(n, o);
    },
    Ak = jD('div', {
        target: 'e1nbjj3t5',
    })(
        'grid-area:greeting;position:relative;min-height:',
        kn,
        'px;background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.surface;
        },
        ';box-shadow:',
        e => {
            let { theme: t } = e;
            return t.boxShadow.subtle;
        },
        ';border-radius:26px;border:1px solid ',
        e => {
            let { theme: t } = e;
            return t.colors.borderSubtle;
        },
        ';overflow:hidden;animation:',
        e => {
            let {
                animate: t,
                screenPosition: n,
                isClosing: r,
                withTextSelection: o,
                isInputHiding: i,
                isInputHidden: a,
                textHeight: u,
            } = e;
            return t ? wk(r, o, n, i, a, u) : 'none';
        },
        ';animation-duration:',
        En,
        'ms;animation-timing-function:',
        e => {
            let { theme: t } = e;
            return t.transitions.easings.swift;
        },
        ';animation-fill-mode:forwards;&:focus-within{border:1px solid ',
        e => {
            let { theme: t } = e;
            return t.colors.cta;
        },
        ';}'
    );
var Bk = {
    name: 'sag1w3',
    styles: "padding-bottom:0;div[role='group']{margin-top:8px;margin-left:-5px;}",
};
const kk = jD('div', {
        target: 'e1nbjj3t4',
    })(
        'color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.surfaceVariant;
        },
        ';padding:',
        e => {
            let { theme: t } = e;
            return t.spaces.space6;
        },
        ';margin:6px;margin-bottom:',
        kn,
        'px;border-top-left-radius:22px;border-top-right-radius:22px;border-bottom-right-radius:6px;border-bottom-left-radius:6px;display:flex;flex-direction:column;gap:6px;overflow:hidden;max-height:',
        bk,
        'px;overflow-y:auto;animation:',
        e => {
            let { animate: t, isClosing: n, withTextSelection: r } = e;
            return t ? ((e, t) => (e ? (t ? Fk : yk) : t ? xk : Ek))(n, r) : 'none';
        },
        ';animation-duration:',
        En,
        'ms;animation-timing-function:',
        e => {
            let { theme: t } = e;
            return t.transitions.easings.swift;
        },
        ';animation-fill-mode:forwards;',
        e => {
            let { theme: t } = e;
            return t.typography.basic;
        },
        ';',
        e => {
            let { withQuickReplies: t } = e;
            return t && Bk;
        },
        ';'
    ),
    Sk = jD('div', {
        target: 'e1nbjj3t3',
    })('position:absolute;bottom:0;min-height:', kn, 'px;'),
    Tk = ku(
        Ck ||
            (Ck = si([
                '\n\t0% {\n\t\tvisibility: visible;\n\t\topacity: 0;\n\t\ttransform: translateY(10px);\n\t}\n\t100% {\n\t\tvisibility: visible;\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t}\n',
            ]))
    ),
    Lk = jD('span', {
        target: 'e1nbjj3t2',
    })(
        'display:flex;gap:10px;',
        e => {
            let { theme: t, animate: n } = e;
            return (
                n &&
                Bu(
                    'visibility:hidden;animation:',
                    Tk,
                    ';animation-duration:',
                    0.5 * En,
                    'ms;animation-timing-function:',
                    t.transitions.easings.swift,
                    ';animation-fill-mode:forwards;animation-delay:',
                    0.7 * En,
                    'ms;'
                )
            );
        },
        ';'
    ),
    Pk = jD('span', {
        target: 'e1nbjj3t1',
    })({
        name: 'hkh81z',
        styles: 'margin-top:8px',
    }),
    Mk = jD('span', {
        target: 'e1nbjj3t0',
    })(
        'display:inline-block;width:100%;color:',
        e => {
            let { theme: t } = e;
            return t.colors.secondaryTextColor;
        },
        ';'
    ),
    Ok = e => {
        let {
            greeting: t,
            maximize: n,
            animate: r,
            screenPosition: o,
            children: i,
            isGreetingClosing: a,
            isInputHiding: u,
            isInputHidden: s,
            withSelectedText: l,
            selectedText: c,
        } = e;
        const d = ti(),
            { localize: p } = d,
            D = qB(t),
            m = rr.useCallback(
                e => {
                    t && an(d, t.id, t.properties.quickReplies[e]);
                },
                [d, t]
            );
        if ('plain_text' !== D && 'quick_replies' !== D && !l) return rr.createElement(rr.Fragment, null, i);
        const f = t ? t.properties.text : sn(260, c),
            h = (function (e, t, n, r) {
                return void 0 === n && (n = 9), void 0 === r && (r = 17), Math.ceil((e.length * n) / t) * r;
            })(f, 150);
        return rr.createElement(
            Ak,
            {
                animate: r,
                screenPosition: o,
                isClosing: a,
                isInputHiding: u,
                isInputHidden: s,
                withTextSelection: l,
                textHeight: h,
            },
            rr.createElement(
                kk,
                ir(
                    {},
                    Uu(
                        ir(
                            {
                                onClick: n,
                            },
                            r && {
                                onAnimationStart: gr(() => d.emit('resize-to-theme-size')),
                            },
                            r &&
                                !a && {
                                    onAnimationEnd: gr(() => d.emit('resize-to-dimensions')),
                                }
                        )
                    ),
                    {
                        withQuickReplies: 'quick_replies' === D,
                        withTextSelection: l,
                        animate: r,
                        isClosing: a,
                    }
                ),
                rr.createElement(
                    Lk,
                    {
                        animate: l,
                    },
                    l && rr.createElement(Pk, null, rr.createElement(sv, null)),
                    rr.createElement(
                        'span',
                        null,
                        l && rr.createElement(Mk, null, p('ask_about')),
                        rr.createElement('span', null, f)
                    )
                ),
                t &&
                    'quick_replies' === D &&
                    rr.createElement(IC, {
                        replies: t.properties.quickReplies,
                        onSelect: m,
                        centered: !1,
                    })
            ),
            rr.createElement(Sk, null, i)
        );
    },
    Ik = jD('form', {
        target: 'e1s02csw2',
    })({
        name: 'wxsp6u',
        styles: 'position:relative;margin:0;z-index:1',
    }),
    zk = jD('input', {
        target: 'e1s02csw1',
    })(
        'height:',
        kn,
        'px;width:',
        e => {
            let { state: t } = e;
            return 'full' === t ? wn + 'px' : Fn + 'px';
        },
        ';padding:',
        e => {
            let { theme: t } = e;
            return t.spaces.space7;
        },
        ';padding-',
        e => {
            let { theme: t } = e;
            return t.isRtl ? 'right' : 'left';
        },
        ':18px;padding-',
        e => {
            let { theme: t } = e;
            return t.isRtl ? 'left' : 'right';
        },
        ':55px;outline:none;font-family:inherit;border:',
        e => {
            let { theme: t, plain: n } = e;
            return '1px solid ' + (n ? 'transparent' : t.colors.borderSubtle);
        },
        ';border-radius:30px;color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.surface;
        },
        ';box-shadow:',
        e => {
            let { theme: t, plain: n } = e;
            return n ? 'none' : t.boxShadow.subtle;
        },
        ';text-overflow:ellipsis;',
        e => {
            let { theme: t } = e;
            return t.typography.input;
        },
        ';',
        e => {
            var t;
            let { theme: n, state: r } = e;
            return Bu(
                'animation:',
                null !=
                    (t = {
                        expanding: uk,
                        retracting: sk,
                        hiding: ck,
                    }[r])
                    ? t
                    : 'none',
                ';animation-duration:',
                En,
                'ms;animation-timing-function:',
                n.transitions.easings.swift,
                ';animation-fill-mode:forwards;'
            );
        },
        ';&::placeholder{color:',
        e => {
            let { theme: t } = e;
            return t.colors.secondaryTextColor;
        },
        ';}',
        e => {
            let { plain: t, theme: n } = e;
            return !t && Bu('&:focus{border-color:', n.colors.cta, ';}');
        },
        ';'
    ),
    _k = jD(ev, {
        target: 'e1s02csw0',
    })(
        'position:absolute;top:10px;',
        e => {
            let { theme: t } = e;
            return t.isRtl ? 'left' : 'right';
        },
        ':10px;height:40px;width:40px;display:flex;flex-shrink:0;color:',
        e => {
            let { theme: t } = e;
            return t.colors.ctaText;
        },
        ';background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.cta;
        },
        ';border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.round;
        },
        ';&:disabled{background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.disabled;
        },
        ';color:',
        e => {
            let { theme: t } = e;
            return t.colors.disabledContrast;
        },
        ';}'
    ),
    Rk = e => {
        let {
            state: t,
            mobile: n,
            withGreeting: r,
            plain: o,
            isInputHidden: i,
            isSelectedTextAnimating: a,
            selectedText: u,
            onChange: s,
            onSubmit: l,
        } = e;
        const c = ti(),
            d = c.localize,
            p = ni(Sn),
            D = or.useRef(null),
            m = or.useCallback(() => {
                D.current && (clearTimeout(D.current), (D.current = null));
            }, []),
            f = or.useCallback(() => Ot(c), [c]),
            h = or.useCallback(() => {
                var e;
                return null != (e = tn(c).messageInput) ? e : '';
            }, [c]),
            g = or.useCallback(e => en(c, xe, e), [c]),
            v = or.useCallback((e, t) => nn(c, e, t), [c]),
            C = e => {
                const t = e.target.value,
                    n = h().trim().length > 0,
                    r = t.trim().length > 0;
                s(n, r),
                    v(
                        {
                            messageInput: t,
                        },
                        {
                            scheduleRerender: !1,
                        }
                    );
            };
        return or.createElement(
            Ik,
            ir(
                {
                    key: 'message-input',
                },
                Uu({
                    onSubmit: e => {
                        e.preventDefault();
                        const t = h().trim();
                        (t || u) &&
                            (l(),
                            (p || Math.random() < 0.01) &&
                                bt('minimized_message_input_message_sent', {
                                    withSelectedText: Boolean(u),
                                }),
                            f(),
                            i ||
                                xn(c, {
                                    state: 'classic',
                                }),
                            v({
                                messageInput: '',
                            }),
                            g((u ? '"' + u + '"' + (t ? '\n\n' : '') : '') + t));
                    },
                })
            ),
            or.createElement(
                zk,
                ir(
                    {
                        state: t,
                        plain: o,
                        placeholder: d('write_a_message'),
                        'aria-label': d('write_a_message'),
                    },
                    Uu({
                        onChange: C,
                        onKeyUp: C,
                        onFocus: () => {
                            'classic' !== t ||
                                r ||
                                (m(),
                                xn(
                                    c,
                                    {
                                        state: 'expanding',
                                    },
                                    {
                                        render: !0,
                                        scheduledRender: n,
                                    }
                                ),
                                (D.current = setTimeout(() => {
                                    xn(c, {
                                        state: 'full',
                                    });
                                }, En)));
                        },
                        onBlur: () => {
                            'full' !== t ||
                                h().trim() ||
                                r ||
                                (Wu(),
                                m(),
                                xn(c, {
                                    state: 'retracting',
                                }),
                                (D.current = setTimeout(() => {
                                    xn(c, {
                                        state: 'classic',
                                    });
                                }, En)));
                        },
                    }),
                    {
                        value: h(),
                    },
                    ('full' === t || 'expanding' === t) && {
                        'data-lc-focus': !0,
                    }
                )
            ),
            or.createElement(
                _k,
                ir(
                    {
                        skipFocusVisible: !0,
                        type: 'submit',
                        disabled: ('full' !== t && 'classic' !== t) || a,
                        'aria-label': d('send_message'),
                    },
                    !u && {
                        'data-lc-prop': 'disabled:!messageInput',
                    }
                ),
                or.createElement(mv, {
                    'aria-hidden': !0,
                })
            )
        );
    };
var jk = {
    name: '1f60if8',
    styles: 'justify-content:flex-end',
};
const Nk = jD('div', {
        target: 'ewmlddx1',
    })(
        'grid-area:message-input;position:relative;height:',
        kn,
        'px;width:',
        e => {
            let { state: t } = e;
            return 'full' === t ? wn : Fn;
        },
        'px;display:flex;align-items:center;justify-self:',
        e => {
            let { screenPosition: t } = e;
            return 'right' === t ? 'end' : 'start';
        },
        ';',
        e => {
            let { state: t, screenPosition: n } = e;
            return (('left' === n && 'hiding' !== t) || ('right' === n && 'hiding' === t)) && jk;
        },
        ' ',
        e => {
            let {
                theme: t,
                withGreeting: n,
                withGreetingTransition: r,
                screenPosition: o,
                isGreetingClosing: i,
                isInputHidden: a,
            } = e;
            return (
                n &&
                r &&
                Bu(
                    'animation:',
                    i
                        ? ((e, t) =>
                              ku(
                                  ak ||
                                      (ak = si([
                                          '\n    0%, 50% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: ',
                                          ';\n    }\n',
                                      ])),
                                  t
                                      ? 'translateX(' + ('right' === e ? '' : '-') + Fn + 'px)'
                                      : 'translateX(' + ('right' === e ? '-' : '') + (An + Bn) + 'px)'
                              ))(o, a)
                        : ((e, t) =>
                              ku(
                                  ik ||
                                      (ik = si([
                                          '\n    from {\n        transform: ',
                                          ';\n    }\n    to {\n        transform: translateX(0);\n    }\n',
                                      ])),
                                  t
                                      ? 'translateX(' + ('right' === e ? '' : '-') + Fn + 'px)'
                                      : 'translateX(' + ('right' === e ? '-' : '') + (An + Bn) + 'px)'
                              ))(o, a),
                    ';animation-duration:',
                    En,
                    'ms;animation-timing-function:',
                    t.transitions.easings.swift,
                    ';animation-fill-mode:forwards;'
                )
            );
        },
        ';'
    ),
    Wk = jD('div', {
        target: 'ewmlddx0',
    })(
        'display:flex;align-items:center;justify-content:flex-start;gap:',
        Tn,
        'px;',
        e => {
            let { theme: t, state: n } = e;
            return (
                'hiding' === n &&
                Bu(
                    'animation:',
                    lk,
                    ';animation-duration:',
                    0.7 * En,
                    'ms;animation-timing-function:',
                    t.transitions.easings.swift,
                    ';animation-fill-mode:forwards;'
                )
            );
        },
        ' ',
        e => {
            let { theme: t, screenPosition: n, state: r, withGreeting: o } = e;
            return (
                'classic' === r &&
                !o &&
                Bu(
                    "&::before{content:'';position:absolute;top:-",
                    yn,
                    'px;left:0;right:0;',
                    t.isRtl ? n : HB(n),
                    ':',
                    Ln,
                    'px;bottom:0;}&:hover{',
                    QB,
                    '{',
                    YB,
                    ';}}'
                )
            );
        },
        ';'
    ),
    Vk = e => {
        let {
            screenPosition: t,
            minimizedMessageInputState: n,
            greeting: r,
            mobile: o,
            withGreetingTransition: i,
            isGreetingClosing: a,
            isInputHiding: u,
            isInputHidden: s,
            isSelectedTextAnimating: l,
            closeButton: c,
            withSelectedText: d,
            selectedText: p,
            maximize: D,
            onSubmit: m,
            onChange: f,
        } = e;
        const h = qB(r),
            g = !!r || d;
        return rr.createElement(
            Ok,
            {
                greeting: r,
                maximize: D,
                animate: i,
                screenPosition: t,
                isGreetingClosing: a,
                isInputHiding: u,
                isInputHidden: s,
                withSelectedText: d,
                selectedText: p,
            },
            rr.createElement(
                Nk,
                {
                    screenPosition: t,
                    state: n,
                    withGreeting: g,
                    withGreetingTransition: i && 'card' === h,
                    isGreetingClosing: a,
                    isInputHidden: s,
                },
                rr.createElement(
                    Wk,
                    {
                        screenPosition: t,
                        state: n,
                        withGreeting: g,
                    },
                    _B('left' === t, [
                        !g && c,
                        rr.createElement(Rk, {
                            key: 'message-input',
                            withGreeting: g,
                            mobile: o,
                            state: n,
                            isInputHidden: s,
                            selectedText: p,
                            isSelectedTextAnimating: l,
                            plain: 'plain_text' === h || 'quick_replies' === h || d,
                            onChange: f,
                            onSubmit: m,
                        }),
                    ])
                )
            )
        );
    };
var Uk, Hk;
const qk = ku(
        Uk ||
            (Uk = si([
                '\n    from {\n        opacity: 1;\n        scale: 1;\n        filter: blur(0px);\n    }\n    to {\n        opacity: 0;\n        scale: 0.2;\n        filter: blur(8px);\n    }\n',
            ]))
    ),
    Gk = ku(
        Hk ||
            (Hk = si([
                '\n    from {\n        opacity: 0;\n        scale: 0.2;\n        filter: blur(8px);\n    }\n    to {\n        opacity: 1;\n        scale: 1;\n        filter: blur(0px);\n    }\n',
            ]))
    ),
    Kk = jD('div', {
        target: 'emxxp8t0',
    })(
        'animation:',
        e => {
            let { state: t } = e;
            return 'expanding' === t ? qk : Gk;
        },
        ';animation-duration:500ms;animation-timing-function:',
        e => {
            let { theme: t } = e;
            return t.transitions.easings.swift;
        },
        ';animation-fill-mode:forwards;'
    ),
    Yk = e => {
        let { children: t } = e;
        const { state: n } = ni(e => e.getApplicationState('minimizedMessageInput'));
        return 'expanding' !== n && 'retracting' !== n
            ? or.createElement(or.Fragment, null, t)
            : or.createElement(
                  Kk,
                  {
                      state: n,
                  },
                  t
              );
    };
var Zk, Xk;
const $k = ku(
        Zk ||
            (Zk = si([
                '\n    0%, 50% {\n        transform: translateY(20px);\n        opacity: 0;\n    }\n    100% {\n        transform: translateY(0);\n        opacity: 1;\n    }\n',
            ]))
    ),
    Jk = ku(
        Xk ||
            (Xk = si([
                '\n    0% {\n\t\ttransform: translateY(0);\n\t\topacity: 1;\n    }\n    50%, 100% {\n\t\ttransform: translateY(20px);\n\t\topacity: 0;\n    }\n',
            ]))
    ),
    Qk = jD('div', {
        target: 'el8ixke3',
    })(
        'grid-area:bubble;justify-self:start;align-self:end;',
        e => {
            let { theme: t, withGreeting: n, animate: r, isClosing: o } = e;
            return (
                n &&
                Bu(
                    'grid-area:bubble-greeting;align-self:end;display:flex;justify-content:space-between;align-items:flex-end;position:relative;width:100%;animation:',
                    r ? (o ? Jk : $k) : 'none',
                    ';animation-duration:',
                    En,
                    'ms;animation-timing-function:',
                    t.transitions.easings.swift,
                    ';animation-fill-mode:forwards;'
                )
            );
        },
        ';'
    ),
    eS = jD('div', {
        target: 'el8ixke2',
    })(
        'max-width:',
        (Pn - yn - Tn) / 0.4,
        'px;display:flex;flex-shrink:0;align-items:center;justify-content:center;gap:',
        e => {
            let { theme: t } = e;
            return t.spaces.space5;
        },
        ';background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.surface;
        },
        ';box-shadow:',
        e => {
            let { theme: t } = e;
            return t.boxShadow.subtle;
        },
        ';border-radius:40px;padding:',
        e => {
            let { theme: t } = e;
            return t.spaces.space3;
        },
        ';padding-right:',
        e => {
            let { withAgentTitle: t } = e;
            return t ? '20px' : '8px';
        },
        ';cursor:pointer;scale:',
        0.4,
        ';transform-origin:left bottom;'
    ),
    tS = jD('span', {
        target: 'el8ixke1',
    })(
        'font-size:32px;color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'
    ),
    nS = jD('div', {
        target: 'el8ixke0',
    })({
        name: 'zdz8xi',
        styles: 'height:30px',
    }),
    rS = e => {
        let {
            children: t,
            withGreeting: n,
            withSelectedText: r,
            animate: o,
            animateWidget: i,
            maximize: a,
            agentTitle: u,
            closeButton: s,
            isGreetingClosing: l,
        } = e;
        const c = i ? Yk : or.Fragment;
        return n || r
            ? or.createElement(
                  Qk,
                  {
                      withGreeting: !0,
                      animate: o,
                      isClosing: l,
                  },
                  r
                      ? or.createElement(nS, null)
                      : or.createElement(
                            eS,
                            ir(
                                {},
                                Uu({
                                    onClick: a,
                                }),
                                {
                                    withAgentTitle: !!u,
                                }
                            ),
                            or.createElement(c, null, t),
                            u && or.createElement(tS, null, u)
                        ),
                  s
              )
            : or.createElement(Qk, null, or.createElement(c, null, t));
    };
var oS;
const iS = (e, t) =>
        e(
            oS ||
                (oS = si([
                    '\n\t&-enter,\n\t&-appear,\n\t&-enter-active,\n\t&-appear-active,\n\t&-exit {\n\t\topacity: 1;\n\t}\n\n\t&-exit-active {\n\t\topacity: 0;\n\t\ttransition: opacity ',
                    'ms ',
                    ';\n\t}\n',
                ])),
            On,
            t.transitions.easings.swift
        ),
    aS = jD('div', {
        target: 'e66mxe52',
    })(
        'width:',
        e => {
            let { withSideSpace: t } = e;
            return t ? 'calc(100% - 30px)' : '100%';
        },
        ';min-height:38px;position:absolute;bottom:',
        e => {
            let { withBottomSpace: t } = e;
            return t ? '12px' : '0';
        },
        ';background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.surface;
        },
        ';padding:',
        e => {
            let { theme: t } = e;
            return t.spaces.space5;
        },
        ' ',
        e => {
            let { theme: t } = e;
            return t.spaces.space6;
        },
        ';padding-right:40px;margin:0 ',
        e => {
            let { withSideSpace: t } = e;
            return t ? '15px' : '0';
        },
        ';border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.xxl;
        },
        ';box-shadow:',
        e => {
            let { theme: t } = e;
            return t.boxShadow.sm;
        },
        ';z-index:2;',
        e => {
            let { limitMaxHeight: t } = e;
            return t && Bu('max-height:', In, 'px;', uS, '{max-height:calc(', In, 'px - 24px);overflow-y:auto;}');
        },
        ';'
    ),
    uS = jD('p', {
        target: 'e66mxe51',
    })(
        e => {
            let { theme: t } = e;
            return t.typography.caption;
        },
        ';color:',
        e => {
            let { theme: t } = e;
            return t.colors.secondaryTextColor;
        },
        ';margin:0;max-width:460px;a{color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';}'
    ),
    sS = jD(ev, {
        target: 'e66mxe50',
    })(
        'height:24px;width:24px;border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.round;
        },
        ';color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.surfaceVariant;
        },
        ';display:flex;align-items:center;justify-content:center;position:absolute;right:7px;top:7px;&:hover{background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.surfaceVariantHover;
        },
        ';}'
    ),
    lS = or.forwardRef((e, t) => {
        let { chatId: n = xe, onClose: r } = e;
        const o = ti(),
            { localize: i } = o,
            { text: a } = ni(e => _t('privacyPolicy', e)),
            u = ni(e => e.getApplicationState('privacyPolicyBannerState')),
            s = ni(Sn)
                ? 'By chatting here, you agree we and authorized partners may process, monitor, and record this chat and your data in line with [Privacy Policy](https://www.text.com/legal/privacy-policy/).'
                : a,
            l = ni(e => zn(e, n)),
            c = 'startChat' === l || 'startChatAgain' === l,
            d = Hu.static,
            p = or.useCallback(() => {
                'function' == typeof r ? r() : Mn(o);
            }, [o, r]);
        return wu(Tu, null, e => {
            let { css: n, theme: r } = e;
            return wu(
                $D,
                { in: 'visible' === u, timeout: On, classNames: iS(n, r), unmountOnExit: !0 },
                wu(
                    aS,
                    {
                        ref: t,
                        withBottomSpace: !c,
                        withSideSpace: !d,
                        limitMaxHeight: d,
                    },
                    wu(Qe, {
                        preserveLists: !0,
                        template: s,
                        root: {
                            component: uS,
                        },
                        linkComponent: Qv,
                    }),
                    wu(
                        sS,
                        ir(
                            {
                                id: Eb,
                            },
                            d
                                ? Uu({
                                      onClick: p,
                                  })
                                : {
                                      onPress: p,
                                  },
                            {
                                'aria-label': i('close_privacy_policy_banner'),
                            }
                        ),
                        wu(Wg, {
                            'aria-hidden': !0,
                        })
                    )
                )
            );
        });
    });
var cS, dS;
lS.displayName = 'PrivacyPolicyBanner';
const pS = {
        name: '1wgldsk',
        styles: 'opacity:1;scale:1;filter:blur(0px);transform:translateY(0)',
    },
    DS = {
        name: '1mthhq0',
        styles: 'opacity:0;scale:0.9;filter:blur(8px);transform:translateY(18px)',
    },
    mS = ku(cS || (cS = si(['\n    0% {\n        ', '\n    }\n    100% {\n        ', '\n    }\n'])), DS, pS),
    fS = ku(dS || (dS = si(['\n    from {\n        ', '\n    }\n    to {\n        ', '\n    }\n'])), pS, DS),
    hS = jD('div', {
        target: 'e19chl8e0',
    })(
        'grid-area:privacy-banner;justify-self:',
        e => {
            let { screenPosition: t } = e;
            return 'right' === t ? 'end' : 'start';
        },
        ';width:',
        wn,
        'px;margin-bottom:-12px;',
        e => {
            let { theme: t, closing: n } = e;
            return Bu(
                'animation:',
                n ? fS : mS,
                ';animation-duration:',
                En,
                'ms;animation-timing-function:',
                t.transitions.easings.swift,
                ';animation-fill-mode:forwards;'
            );
        },
        ';'
    ),
    gS = e => {
        let { screenPosition: t, isClosing: n, onClose: r } = e;
        return (
            Wu(),
            rr.createElement(
                hS,
                {
                    screenPosition: t,
                    closing: n,
                },
                rr.createElement(lS, {
                    onClose: r,
                })
            )
        );
    },
    vS = jD('div', {
        target: 'e1i1x7u0',
    })(
        'position:relative;display:grid;grid-template-columns:',
        e => {
            let { withGreeting: t, expanded: n } = e;
            return t ? Pn + 'px' : 'auto ' + (n ? '' : 'auto');
        },
        ';grid-template-rows:auto;grid-template-areas:',
        e => {
            let { withGreeting: t, screenPosition: n, withTextGreeting: r, expanded: o } = e;
            if (t) return "'bubble-greeting' 'greeting' " + (r ? '' : "'message-input'");
            if (o) return "'privacy-banner' 'message-input'";
            return (
                "'privacy-banner privacy-banner' '" +
                ('right' === n ? 'message-input bubble' : 'bubble message-input') +
                "'"
            );
        },
        ';flex-shrink:0;gap:',
        e => {
            let { theme: t } = e;
            return t.spaces.space3;
        },
        ';'
    ),
    CS = e => {
        var t, n;
        let { screenPosition: r, minimizedWidget: o, visibleGreetingId: i, maximize: a, onResize: u } = e;
        const s = ti(),
            {
                state: l,
                isPrivacyPolicyBannerClosing: c,
                closingGreetingId: d,
                isVisible: p,
            } = ni(e => e.getApplicationState('minimizedMessageInput')),
            D = ni(e => e.getApplicationState('mobile')),
            m = ni(
                e => _t('privacyPolicy', e).enabled && 'visible' === e.getApplicationState('privacyPolicyBannerState')
            ),
            f = ni(e => _n(xe, e)),
            h = null == f || null == (t = f.properties) ? void 0 : t.jobTitle,
            g = ni(e => (i ? e.getEvent(xe, i) : null)),
            v = qB(g),
            C = or.useRef(null),
            b = ni(e => un(e, g)),
            E = ni(e => e.getApplicationState('websiteTextSelection')),
            y = !!g && g.properties.isExitIntent,
            x = i ? d === i : 'exit' === E.state,
            F = p && !!E.text && !i,
            w = (i || F) && 'hiding' !== l ? 'classic' : l,
            A = 'hidden' === l,
            B = 'hiding' === l,
            k = or.useCallback(() => {
                C.current && (clearTimeout(C.current), (C.current = null));
            }, []),
            S = or.useCallback(() => tn(s), [s]),
            T = (!b && !y && !F) || x || (F && ('enter' === E.state || 'exit' === E.state));
        Hu(() => {
            i && T && !x && on(s);
        }, [s, i, T, x]),
            Hu(() => {
                'enter' === E.state &&
                    s.setApplicationState({
                        websiteTextSelection: ir({}, E, {
                            state: 'visible',
                        }),
                    });
            }, [s, E.state]),
            Hu(() => {
                i &&
                    !T &&
                    (s.emit('resize-to-theme-size'),
                    setTimeout(() => {
                        s.emit('resize-to-dimensions');
                    }, En));
            }, [s, T, i]);
        const L = function (e) {
                let { temporary: t } = void 0 === e ? {} : e;
                k(),
                    xn(
                        s,
                        {
                            state: 'full',
                            isPrivacyPolicyBannerClosing: !0,
                        },
                        {
                            render: !t,
                        }
                    ),
                    (C.current = setTimeout(() => {
                        t ||
                            s.setApplicationState({
                                privacyPolicyBannerState: 'hidden',
                            }),
                            xn(s, {
                                state: 'full',
                                isPrivacyPolicyBannerClosing: !1,
                            });
                    }, En));
            },
            P =
                (m && 'hidden' !== w && 'hiding' !== w && !(null == (n = S().messageInput) || !n.trim()) && !i && !F) ||
                c,
            M = or.createElement(ek, {
                key: 'close-button',
                mobile: D,
                screenPosition: r,
                hidden: P || (D && 'full' === w),
                visibleGreetingId: i,
                withSelectedText: F,
                minimizedMessageInputState: w,
            });
        return or.createElement(
            vS,
            {
                expanded: 'full' === w,
                withGreeting: !!i || F,
                withTextGreeting: 'plain_text' === v || 'quick_replies' === v || F,
                screenPosition: r,
            },
            _B(!!i || F || 'left' === r, [
                or.createElement(
                    or.Fragment,
                    {
                        key: 'minimized-message-input-fragment',
                    },
                    !!i &&
                        'card' === v &&
                        or.createElement(UB, {
                            visibleGreetingId: i,
                            animate: T,
                            isClosing: x,
                            maximize: a,
                            onResize: u,
                        }),
                    P &&
                        or.createElement(gS, {
                            screenPosition: r,
                            isClosing: c,
                            onClose: L,
                        }),
                    (p || !!i) &&
                        or.createElement(Vk, {
                            screenPosition: r,
                            minimizedMessageInputState: w,
                            greeting: g,
                            mobile: D,
                            withGreetingTransition: T,
                            isGreetingClosing: x,
                            isInputHiding: B,
                            isInputHidden: A,
                            closeButton: M,
                            maximize: a,
                            withSelectedText: F,
                            selectedText: F ? E.text : '',
                            isSelectedTextAnimating: F && 'exit' === E.state,
                            onSubmit: () => {
                                !m ||
                                    i ||
                                    F ||
                                    s.setApplicationState({
                                        privacyPolicyBannerState: 'hidden',
                                    }),
                                    F &&
                                        s.setApplicationState({
                                            websiteTextSelection: {
                                                text: '',
                                                state: 'hidden',
                                            },
                                        });
                            },
                            onChange: (e, t) => {
                                !m ||
                                    c ||
                                    i ||
                                    x ||
                                    F ||
                                    (e &&
                                        !t &&
                                        L({
                                            temporary: !0,
                                        }),
                                    e !== t && 'expanding' !== w && setTimeout(() => s.emit('render-minimized'), 0));
                            },
                        })
                ),
                'full' !== w &&
                    or.createElement(
                        rS,
                        {
                            key: 'minimized-widget-wrapper',
                            withGreeting: !!i,
                            withSelectedText: F,
                            isGreetingClosing: x,
                            animate: T,
                            animateWidget: p,
                            agentTitle: h,
                            maximize: a,
                            closeButton: M,
                        },
                        o
                    ),
            ])
        );
    },
    bS = (e, t) => {
        e.on('track-event', e =>
            ((e, t) => {
                let { name: n, eventProperties: r } = t;
                e('/v1.0/t/event', 'POST', {
                    name: n,
                    eventProperties: r,
                });
            })(t.call, e)
        );
    };
var ES, yS;
const xS = (e, t, n) =>
        ku(
            ES ||
                (ES = si([
                    '\n    from {\n        transform: translate(',
                    ', ',
                    'px);\n        width: 30px;\n        height: 30px;\n        opacity: 0;\n    }\n    to {\n        transform: translate(0, 0);\n        width: ',
                    'px;\n        height: 220px;\n        opacity: 1;\n    }\n',
                ])),
            ((e, t) => ('right' === e ? '-' : '') + pB(t, !1) / 2 + 'px')(t, n),
            Rn,
            e
        ),
    FS = ku(yS || (yS = si(['\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n']))),
    wS = jD('div', {
        target: 'e11wgx213',
    })({
        name: '1etdpvc',
        styles: 'overflow-x:auto;display:flex',
    }),
    AS = jD('button', {
        target: 'e11wgx212',
    })(
        'position:absolute;width:30px;height:30px;border-radius:50%;background:',
        e => {
            let { theme: t } = e;
            return t.colors.floatSurface;
        },
        ';color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';border:0;box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);text-align:center;top:32%;display:flex;align-items:center;justify-content:center;padding:0;z-index:1;outline:0;-webkit-transform:translate3d(0, 0, 0);&:hover{cursor:pointer;}svg{display:inline;}',
        e => {
            let { variant: t } = e;
            return {
                [t]: '0.5em',
            };
        },
        ';'
    ),
    BS = jD(Rg, {
        target: 'e11wgx211',
    })({
        name: '21xn5r',
        styles: 'transform:rotate(180deg)',
    }),
    kS = jD('div', {
        target: 'e11wgx210',
    })({
        name: 'pw7jst',
        styles: 'position:relative;width:100%',
    }),
    SS = (e, t, n) =>
        new Promise(r => {
            e.emit('get-element-properties-request', ['#' + t, n]),
                e.once('get-element-properties-response', e => r(e));
        }),
    TS = function (e, t, n, r) {
        void 0 === r && (r = !0);
        const o = e.getView('minimized')[t];
        nn(
            e,
            {
                [t]: ir({}, o, n),
            },
            {
                scheduleRerender: r,
            }
        );
    },
    LS = e => {
        let { children: t, storeName: n, galleryStyles: r, isMeasurable: o, onArrowClick: i } = e;
        const a = ti(),
            { isPreview: u } = ni(e => e.getApplicationState()),
            s = 'carousel-gallery-' + n,
            l = ni(e => e.getView('minimized')),
            c = 'carousel-' + n,
            d = l[c],
            p = e => {
                null == i || i(e);
                const t = {
                    top: 0,
                    left: 'right' === e ? 200 : -200,
                    behavior: 'smooth',
                };
                var n;
                u
                    ? null == (n = document.getElementById(s)) || n.scrollBy(t)
                    : a.emit('call-element-method', ['#' + s, 'scrollBy', t]);
            };
        return (
            Hu(() => {
                !o ||
                    (d && er('showButtons', d)) ||
                    SS(a, s, ['scrollWidth', 'clientWidth']).then(e => {
                        let { scrollWidth: t, clientWidth: n } = e;
                        t > n &&
                            TS(a, c, {
                                showButtons: !0,
                            });
                    });
            }, [d, c, s, o, a]),
            Hu(() => {
                const e = null == d ? void 0 : d.scrollPosition;
                e && a.emit('call-element-method', ['#' + s, 'scrollTo', e, 0]);
            }, []),
            wu(
                kS,
                null,
                (null == d ? void 0 : d.showButtons) &&
                    wu(
                        AS,
                        ir(
                            {
                                variant: 'left',
                                'aria-hidden': !0,
                                tabIndex: -1,
                            },
                            Uu({
                                onClick: () => p('left'),
                            })
                        ),
                        wu(BS, null)
                    ),
                wu(
                    wS,
                    ir(
                        {
                            id: s,
                            css: r,
                        },
                        Uu({
                            onScroll: () => {
                                SS(a, s, ['scrollLeft']).then(e => {
                                    let { scrollLeft: t } = e;
                                    'number' == typeof t &&
                                        TS(
                                            a,
                                            c,
                                            {
                                                scrollPosition: t,
                                            },
                                            !1
                                        );
                                });
                            },
                        })
                    ),
                    or.Children.map(t, e => wu('div', null, e))
                ),
                (null == d ? void 0 : d.showButtons) &&
                    wu(
                        AS,
                        ir(
                            {
                                variant: 'right',
                                'aria-hidden': !0,
                                tabIndex: -1,
                            },
                            Uu({
                                onClick: () => p('right'),
                            })
                        ),
                        wu(Rg, null)
                    )
            )
        );
    },
    PS = () => ('dark' === bu().variant ? or.createElement(pv, null) : or.createElement(Dv, null)),
    MS = yD('h2', {
        target: 'e185lfs00',
    })(
        e => {
            let { theme: t } = e;
            return t.typography.subheading;
        },
        ';color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';display:flex;align-items:center;gap:6px;margin:0;'
    ),
    OS = e => {
        const { localize: t } = ti();
        return or.createElement(MS, e, or.createElement(PS, null), t('you_may_be_interested_in'));
    },
    IS = Ee(),
    zS = jD('div', {
        target: 'edgbg0i3',
    })(
        'width:200px;height:140px;border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.md;
        },
        ';border:1px solid ',
        e => {
            let { theme: t } = e;
            return t.colors.divider;
        },
        ';overflow:hidden;transition:height 300ms ',
        e => {
            let { theme: t } = e;
            return t.transitions.easings.swift;
        },
        ';'
    ),
    _S = jD(Am, {
        target: 'edgbg0i2',
    })(
        'width:100%;height:100%;object-fit:cover;transform:scale(1);transition:transform 300ms ',
        e => {
            let { theme: t } = e;
            return t.transitions.easings.swift;
        },
        ';will-change:transform;'
    ),
    RS = jD('p', {
        target: 'edgbg0i1',
    })(
        'color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';font-size:',
        vi(14),
        ';margin-bottom:0;margin-top:6px;padding:0 12px;max-height:20px;max-width:100%;overflow:hidden;word-break:break-word;',
        eC(2),
        ';'
    ),
    jS = Bu(zS, '{height:120px;}', RS, '{max-height:40px;}'),
    NS = jD('a', {
        target: 'edgbg0i0',
    })(
        'display:flex;text-decoration:none;text-align:left;flex-direction:column;max-width:212px;height:180px;cursor:pointer;text-decoration:none;transition-property:opacity,transform;transition-duration:300ms;transition-timing-function:',
        e => {
            let { theme: t } = e;
            return t.transitions.easings.swift;
        },
        ' 0.2s;opacity:1;transform:scale(1);will-change:opacity,transform;padding:0 ',
        e => {
            let { theme: t } = e;
            return t.spaces.space2;
        },
        ' 12px;',
        e => {
            let { isMultiline: t } = e;
            return t && IS && jS;
        },
        ';',
        e => {
            let { isMultiline: t } = e;
            return t && !IS && Bu('&:hover,:focus{', jS, ';}');
        },
        ' &:hover{',
        _S,
        '{transform:scale(1.05);}}:focus{outline-offset:-2px;}'
    ),
    WS = e => {
        let { name: t, image: n, link: r, onClick: o, isPreview: i } = e;
        const a = i
            ? r
            : jn(r, {
                  widgetSource: 'minimized',
              });
        return or.createElement(
            NS,
            ir(
                {
                    isMultiline: t.length > 27,
                    href: a,
                    target: '_parent',
                    referrerpolicy: 'origin',
                },
                Uu({
                    onClick: o,
                })
            ),
            or.createElement(
                zS,
                null,
                or.createElement(_S, {
                    src: n,
                })
            ),
            or.createElement(RS, null, t)
        );
    };
WS.parentStyles = Bu(
    '>div:first-child{& ',
    NS,
    '{padding-left:8px;}}>div:last-child{',
    NS,
    '{padding-right:8px;}}&:hover{',
    NS,
    ':not(:hover){opacity:0.6;transform:scale(0.97);}}'
);
const VS = Ee(),
    US = jD('div', {
        target: 'e5hftou2',
    })(
        'width:',
        e => {
            let { width: t } = e;
            return t;
        },
        'px;background-color:',
        e => {
            let { theme: t } = e;
            return t.colors.surface;
        },
        ';border-radius:',
        e => {
            let { theme: t } = e;
            return t.borderRadius.xxl;
        },
        ';overflow:hidden;box-shadow:',
        e => {
            let { theme: t } = e;
            return t.boxShadow.floating;
        },
        ';',
        e => {
            let { animation: t, width: n, screenPosition: r, theme: o } = e;
            return 'hide' === t
                ? Bu(
                      'animation-name:',
                      xS(n, r, VS),
                      ';animation-duration:300ms;animation-iteration-count:1;animation-timing-function:',
                      o.transitions.easings.swift,
                      ';animation-direction:reverse;animation-fill-mode:forwards;'
                  )
                : 'show' === t
                  ? Bu(
                        'animation-name:',
                        xS(n, r, VS),
                        ';animation-duration:600ms;animation-iteration-count:1;animation-timing-function:',
                        o.transitions.easings.swift,
                        ';animation-fill-mode:forwards;'
                    )
                  : void 0;
        },
        ';'
    ),
    HS = jD('div', {
        target: 'e5hftou1',
    })(
        'display:flex;width:100%;flex-direction:column;opacity:',
        e => {
            let { animation: t } = e;
            return t ? 0 : 1;
        },
        ';',
        e => {
            let { animation: t, theme: n } = e;
            return (
                t &&
                Bu(
                    'animation-name:',
                    FS,
                    ';animation-duration:',
                    'show' === t ? 0.4 : 0.2,
                    's;animation-delay:',
                    'show' === t ? 0.2 : 0,
                    's;animation-iteration-count:1;animation-timing-function:',
                    n.transitions.easings.swift,
                    ';animation-fill-mode:forwards;animation-direction:',
                    'show' === t ? 'normal' : 'reverse',
                    ';'
                )
            );
        },
        ';'
    ),
    qS = jD('div', {
        target: 'e5hftou0',
    })(
        'padding:',
        e => {
            let { theme: t } = e;
            return t.spaces.space5;
        },
        ';padding-bottom:',
        e => {
            let { theme: t } = e;
            return t.spaces.space3;
        },
        ';display:flex;justify-content:space-between;color:',
        e => {
            let { theme: t } = e;
            return t.colors.primaryTextColor;
        },
        ';'
    ),
    GS = () => {
        const e = ti(),
            { clientWidth: t, config: n, isPreview: r, recommendations: o } = ni(e => e.getApplicationState()),
            i = (e => {
                let { mobile: t, productsCount: n, clientWidth: r } = e;
                if (!t) return 1 === n ? Nn + 2 * Wn : Vn;
                const o = n * Nn + (n - 1) * qn + 2 * Wn;
                return Math.min(o, r - (Un + 2 * Hn));
            })({
                mobile: VS,
                productsCount: o.products.length,
                clientWidth: t,
            }),
            a = (() => {
                const { emit: e } = ti();
                return or.useCallback(t => e('track-event', t), [e]);
            })(),
            u = t => {
                if (r) return null == t || t.preventDefault(), void (null == t || t.stopPropagation());
                e.setApplicationState({
                    recommendations: ir({}, o, {
                        isVisible: !1,
                        animation: 'hide',
                        hiddenIds: [].concat(o.hiddenIds, [o.id]),
                    }),
                }),
                    nn(e, {
                        resizeBubbleAnimation: 'grow',
                    });
            };
        return or.createElement(
            US,
            ir(
                {
                    width: i,
                    screenPosition: n.screenPosition,
                    animation: o.animation,
                },
                Uu({
                    onAnimationEnd: () => {
                        e.setApplicationState({
                            recommendations: ir({}, o, {
                                animation: null,
                            }),
                        }),
                            e.emit('render-minimized');
                    },
                })
            ),
            or.createElement(CF, {
                message: e.localize('you_may_be_interested_in') + ' ' + o.products.map(e => e.name).join(', '),
                clearOnUnmount: !0,
                'aria-live': 'polite',
            }),
            or.createElement(
                HS,
                ir(
                    {},
                    Uu({
                        onAnimationEnd: ar,
                    }),
                    {
                        animation: o.animation,
                    }
                ),
                or.createElement(
                    qS,
                    null,
                    or.createElement(OS, null),
                    or.createElement(
                        ev,
                        ir(
                            {
                                'aria-label': e.localize('close_recommendations'),
                            },
                            Uu({
                                onClick: () => {
                                    u(),
                                        r ||
                                            a({
                                                name: 'Product recommendations dismissed',
                                            });
                                },
                            })
                        ),
                        or.createElement(Ng, {
                            size: 24,
                        })
                    )
                ),
                or.createElement(
                    LS,
                    {
                        storeName: 'recommendations',
                        galleryStyles: WS.parentStyles,
                        isMeasurable: !o.animation,
                        onArrowClick: e =>
                            'right' === e &&
                            a({
                                name: 'Product recommendations arrow clicked',
                            }),
                    },
                    o.products.map(e =>
                        or.createElement(
                            WS,
                            ir({}, e, {
                                key: e.id,
                                onClick: u,
                                isPreview: r,
                            })
                        )
                    )
                )
            )
        );
    };
var KS;
const YS = ku(
        KS ||
            (KS = si([
                '\n\t0% {\n\t\topacity: 0;\n \t\ttransform: translate3d(0, 100%, 0);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform: translate3d(0, 0%, 0);\n\t}\n',
            ]))
    ),
    ZS = e => {
        let { minimizedType: t, position: n, evenSidePadding: r } = e;
        return 'bar' === t
            ? '0.8em 0.8em 0 0.8em'
            : r
              ? '0.5em 0.5em 1em 0.5em'
              : 'left' === n
                ? '0.5em 1em 1em 0.5em'
                : '0.5em 0.5em 1em 1em';
    },
    XS = jD('div', {
        displayName: 'Minimized',
        section: !0,
        target: 'e1rkp0hl1',
    })(
        'max-width:100%;position:absolute;bottom:0;z-index:2;display:flex;align-items:flex-end;will-change:width,height,transform,opacity;backface-visibility:hidden;',
        e => ({
            padding: ZS(e),
            [e.position]: 0,
            justifyContent: 'right' === e.position && 'flex-end',
        }),
        ' ',
        e => {
            let { animated: t } = e;
            return t && Bu('animation:', YS, ' 200ms ease forwards;');
        },
        ';'
    ),
    $S = jD(rm, {
        target: 'e1rkp0hl0',
    })(
        'position:relative;bottom:-',
        Rn,
        'px;',
        e => {
            let { side: t } = e;
            return Bu(t, ':', Un, 'px;margin-', 'left' === t ? 'right' : 'left', ':', Un, 'px;');
        },
        ';'
    ),
    JS = e => {
        var t;
        const {
                availability: n,
                eagerFetchingMode: r,
                hasUnseenEvents: o,
                mobile: i,
                defaultWidget: a,
                visitorCounter: u,
                googleReviews: s,
                contactInvitation: l,
                chatBotGreeting: c,
                recommendations: d,
            } = e.getApplicationState(),
            p = 'online' === n,
            D = e.getChat(xe).active,
            m = Gn(e),
            f = _t('agentAvatar', e).enabled && (p || D),
            h = _n(xe, e),
            g = e.getLastEvent(xe),
            v = g && (null == (t = g.properties) ? void 0 : t.invitation) && !g.seen,
            C = Kn(e);
        return {
            mobile: i,
            visibleGreetingId: m,
            getMinimizedView: () => e.getView('minimized'),
            productRecommendationsVisible: Boolean(
                (null == d ? void 0 : d.isVisible) || (null == d ? void 0 : d.animation)
            ),
            avatar: f ? _r(null, 'avatar', h) : null,
            agentName: _r('', 'name', h),
            minimizedType: Zn(e),
            screenPosition: ln(e),
            minimizedText: 'livechat' === a ? Yn(xe, e) : '',
            hasUnseenEvents: (r ? e.getUnseenCount(xe) > 0 : v || o) && (!C || !m),
            unseenEventsCount: r ? e.getUnseenCount(xe) : v || o ? 1 : 0,
            newMessageAlert: e.localize('new_message'),
            defaultWidget: a,
            visitorCounter: u,
            googleReviews: s,
            contactInvitation: l,
            chatBotGreeting: c,
            shouldUseMinimizedMessageInputLayout: C,
        };
    },
    QS = e => {
        let { dir: t, onMaximize: n, innerRef: r = ar, onResize: o = ar } = e;
        const {
            mobile: i,
            visibleGreetingId: a,
            getMinimizedView: u,
            productRecommendationsVisible: s,
            avatar: l,
            agentName: c,
            minimizedType: d,
            screenPosition: p,
            minimizedText: D,
            hasUnseenEvents: m,
            unseenEventsCount: f,
            newMessageAlert: h,
            defaultWidget: g,
            visitorCounter: v,
            googleReviews: C,
            contactInvitation: b,
            chatBotGreeting: E,
            shouldUseMinimizedMessageInputLayout: y,
        } = ni(JS);
        let x = null,
            F = null;
        if (
            (a &&
                (x = or.createElement(TA, {
                    key: a,
                    id: a,
                    onPress: n,
                    onResize: o,
                })),
            'circle' === d)
        ) {
            const e = 'livechat' === g && !!a && i && !y;
            F = or.createElement(zB, {
                avatar: l,
                agentName: c,
                onClick: n,
                hasUnseenEvents: m,
                unseenEventsCount: f,
                mobileBubble: e,
                screenPosition: p,
            });
        }
        'bar' === d &&
            (F = or.createElement(BB, {
                text: D,
                hasUnseenEvents: m,
                unseenEventsCount: f,
                onClick: n,
            }));
        let w = null;
        return (
            'livechat' === g &&
                (w = y
                    ? or.createElement(CS, {
                          screenPosition: p,
                          minimizedWidget: F,
                          visibleGreetingId: a,
                          maximize: n,
                          onResize: o,
                      })
                    : i && 'circle' === d
                      ? _B('left' === p, [
                            or.createElement(
                                Um,
                                {
                                    key: 'greeting-column',
                                },
                                or.createElement(rm, null, x)
                            ),
                            or.createElement(
                                Um,
                                {
                                    key: 'bubble-column',
                                    noShrink: !0,
                                },
                                or.createElement(rm, null, F)
                            ),
                        ])
                      : or.createElement(
                            Um,
                            {
                                noShrink: !0,
                            },
                            or.createElement(rm, null, x),
                            or.createElement(rm, null, F)
                        )),
            'openwidget' === g &&
                (w = or.createElement(
                    or.Fragment,
                    null,
                    or.createElement(
                        Um,
                        null,
                        s &&
                            or.createElement(
                                $S,
                                {
                                    side: p,
                                },
                                or.createElement(GS, null)
                            ),
                        (null == b ? void 0 : b.isVisible) &&
                            or.createElement(
                                rm,
                                null,
                                or.createElement(
                                    ow,
                                    ir(
                                        {
                                            screenPosition: p,
                                        },
                                        b
                                    )
                                )
                            ),
                        (null == E ? void 0 : E.isVisible) &&
                            E.text &&
                            or.createElement(
                                rm,
                                null,
                                or.createElement(
                                    PF,
                                    ir(
                                        {
                                            mobile: i,
                                            screenPosition: p,
                                        },
                                        E,
                                        {
                                            text: E.text,
                                        }
                                    )
                                )
                            ),
                        x && or.createElement(Um, null, or.createElement(rm, null, x)),
                        or.createElement(rm, null, F)
                    ),
                    (null == v ? void 0 : v.isVisible) &&
                        or.createElement(
                            KA,
                            ir(
                                {
                                    screenPosition: p,
                                },
                                v
                            )
                        ),
                    (null == C ? void 0 : C.isVisible) &&
                        or.createElement(
                            Sw,
                            ir(
                                {
                                    screenPosition: p,
                                },
                                C
                            )
                        )
                )),
            or.createElement(
                XS,
                ir(
                    {
                        dir: t,
                        role: 'main',
                        ref: r,
                        minimizedType: d,
                        position: p,
                        animated: !!u().animated,
                        evenSidePadding: s,
                    },
                    Uu({
                        onMouseOver: () => {
                            Lg(() => import('./19.BHfCfdhJ.chunk.js').then(e => e.M), []).catch(ar),
                                'openwidget' === g && Lg(() => import('./20.gQdiZMdB.chunk.js'), []).catch(ar);
                        },
                    })
                ),
                or.createElement(
                    or.Fragment,
                    null,
                    m &&
                        or.createElement(CF, {
                            key: f,
                            message: h,
                            'aria-live': 'polite',
                            clearOnUnmount: !0,
                        }),
                    w
                )
            )
        );
    };
var eT, tT;
const nT = e =>
        e(
            eT ||
                (eT = si([
                    '\n\t&-enter {\n\t\topacity: 0;\n\t\ttransform: translate3d(0, 100%, 0);\n\t}\n\n\t&-enter&-enter-active {\n\t\topacity: 1;\n\t\ttransform: translate3d(0, 0%, 0);\n\t\ttransition: opacity 140ms ease 200ms, transform 140ms ease 200ms;\n\t}\n\n\t&-exit {\n\t\topacity: 1;\n\t\ttransform: translate3d(0, 0%, 0);\n\t}\n\n\t&-exit&-exit-active {\n\t\topacity: 0;\n\t\ttransform: translate3d(0, 100%, 0);\n\t\ttransition: opacity 140ms ease, transform 140ms ease;\n\t}\n',
                ]))
        ),
    rT = (e, t, n) =>
        e(
            tT ||
                (tT = si([
                    '\n\t&-enter {\n\t\ttransform: translate3d(',
                    "40%, 40%, 0) scale(0.1);\n\n\t\t[role='main'] > * {\n\t\t\topacity: 0;\n\t\t\ttransform: translate3d(0, 20%, 0);\n\t\t}\n\t}\n\n\t&-enter&-enter-active {\n\t\ttransform: translate3d(0%, 0%, 0) scale(1);\n\t\ttransition: transform ",
                    'ms ',
                    ";\n\n\t\t[role='main'] > * {\n\t\t\topacity: 1;\n\t\t\ttransform: translate3d(0, 0%, 0);\n\t\t\ttransition: opacity 160ms ",
                    ' 270ms,\n\t\t\t\ttransform 160ms ',
                    " 270ms;\n\t\t}\n\t}\n\n\t&-exit {\n\t\ttransform: translate3d(0%, 0%, 0) scale(1);\n\t\topacity: 1;\n\t\t[role='main'] > * {\n\t\t\topacity: 1;\n\t\t\ttransform: translate3d(0, 0%, 0);\n\t\t}\n\t}\n\n\t&-exit&-exit-active {\n\t\topacity: 0;\n\t\ttransform: translate3d(",
                    '40%, 40%, 0) scale(0.1);\n\t\ttransition: transform ',
                    'ms ',
                    ", opacity 300ms ease;\n\t\t[role='main'] > * {\n\t\t\topacity: 0;\n\t\t\ttransform: translate3d(0, 10%, 0);\n\t\t\ttransition: opacity 160ms ",
                    ', transform 160ms ',
                    ';\n\t\t}\n\t}\n',
                ])),
            'right' === t ? '' : '-',
            vg,
            n.transitions.easings.sharp,
            n.transitions.easings.sharp,
            n.transitions.easings.sharp,
            'right' === t ? '' : '-',
            vg,
            n.transitions.easings.sharp,
            n.transitions.easings.sharp,
            n.transitions.easings.sharp
        ),
    oT = e => {
        const {
                mobile: t,
                embedded: n,
                actingAsDirectLink: r,
                isInCustomContainer: o,
                rtl: i,
                isMinimizedForcefullyDisabled: a,
            } = e.getApplicationState(),
            u = Je(e);
        return {
            embedded: n,
            expandToEdge: t || !n || o || u,
            visibilityState: e.getApplicationState('visibility').state,
            showMinimized: !r && Jn(e) && !a,
            screenPosition: ln(e),
            dir: i ? 'rtl' : 'ltr',
            showMinimizedButton: Tt(e),
            isFileUploadAvailable: Xn(e) && $n(e),
        };
    };

function iT(e) {
    let {
        onAnimationEnd: t = ar,
        onMinimizeButtonPress: n = ar,
        onMaximizeButtonPress: r = ar,
        onMinimizedRef: o = ar,
        onMinimizedResize: i,
    } = e;
    const {
            embedded: a,
            expandToEdge: u,
            visibilityState: s,
            showMinimized: l,
            screenPosition: c,
            dir: d,
            showMinimizedButton: p,
            isFileUploadAvailable: D,
        } = ni(oT),
        m = ti(),
        f = or.useRef(),
        h = or.useRef(),
        { isDragNDropAllowed: g } = kg(),
        v = Fg(),
        [C, b] = or.useState('maximized' === s),
        [E, y] = or.useState('maximized' === s),
        x = or.useCallback(
            e =>
                m.setApplicationState({
                    dropAreaVisible: e,
                }),
            [m]
        ),
        F = or.useCallback(
            e => {
                e ? Ot(m) : it(m);
            },
            [m]
        ),
        w = or.useCallback(
            e => {
                D && g() && (e.preventDefault(), e.stopPropagation(), x(!0));
            },
            [D, g, x]
        );
    oD(() => {
        if ('maximized' === s) {
            const e = setTimeout(() => y(!0), Qn);
            return () => clearTimeout(e);
        }
        y(!1);
    }, [s]);
    const A = or.useCallback(() => {
        a && F(!1), n();
    }, [a, n, F]);
    return or.createElement(Tu, null, e => {
        let { css: n, theme: a } = e;
        return or.createElement(
            nm,
            {
                appear: !0,
                component: null,
            },
            E &&
                or.createElement(
                    $D,
                    {
                        classNames: rT(n, c, a),
                        nodeRef: h,
                        onExited: t,
                        onEntered: () => b(!0),
                        onExit: () => b(!1),
                        timeout: vg,
                    },
                    or.createElement(vF, {
                        dir: d,
                        ref: h,
                        isMainViewVisible: C,
                        showMinimizedButton: p,
                        expandToEdge: u,
                        onMinimizeButtonPress: A,
                        onDragEnter: w,
                    })
                ),
            v &&
                ge(s, ['minimized', 'hidden']) &&
                l &&
                or.createElement(
                    $D,
                    {
                        classNames: nT(n),
                        nodeRef: f,
                        onExited: t,
                        timeout: vg,
                    },
                    or.createElement(
                        Nf,
                        {
                            autoFocus: bg(v),
                        },
                        or.createElement(QS, {
                            dir: d,
                            onMaximize: () => {
                                F(!0), r();
                            },
                            innerRef: e => {
                                (f.current = e), o(e);
                            },
                            onResize: i,
                        })
                    )
                )
        );
    });
}
let aT = (function (e) {
    function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
        return (
            ((t = e.call.apply(e, [this].concat(r)) || this).state = {
                crashed: !1,
            }),
            t
        );
    }
    Be(t, e);
    var n = t.prototype;
    return (
        (n.componentDidCatch = function (e, t) {
            this.setState({
                crashed: !0,
            }),
                this.props.onError(e, t);
        }),
        (n.render = function () {
            return this.state.crashed ? null : this.props.children;
        }),
        t
    );
})(or.Component);
aT.defaultProps = {
    onError: ar,
};
const uT = ['store', 'onError'],
    sT = 'widget-global-' + de(),
    lT =
        '\n* {\n\tfont-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\t-webkit-tap-highlight-color: transparent;\n}\nbody {\n\tmargin: 0;\n}\n';

function cT(e) {
    let { children: t } = e;
    return or.createElement(
        or.Fragment,
        null,
        or.createElement(Au, {
            styles: Bu('#' + sT + ' ' + lT, ''),
        }),
        or.createElement(
            'div',
            {
                id: sT,
            },
            t
        )
    );
}
const dT = (e, t) => {
        return 'modern' === e
            ? ir({}, (n = t), {
                  borderRadius: ir({}, n.borderRadius, {
                      def: n.borderRadius.sm,
                  }),
                  TitleBar: {
                      css: {
                          textAlign: 'center',
                          minHeight: '42px',
                          justifyContent: 'flex-start',
                      },
                      TitleBarTitle: {
                          css: {
                              fontWeight: '700',
                              textAlign: 'center',
                              fontSize: vi(14),
                          },
                      },
                      Avatar: {
                          css: {
                              border: '0',
                          },
                      },
                  },
                  IconButton: {
                      css: {
                          padding: '0 .5em',
                      },
                  },
                  MessageList: {
                      css: {
                          backgroundColor: n.colors.surface,
                          padding: '0.5em',
                      },
                  },
                  Maximized: {
                      css: {
                          borderRadius: [
                              n.borderRadius.sm,
                              n.borderRadius.sm,
                              n.borderRadius.none,
                              n.borderRadius.none,
                          ].join(' '),
                      },
                  },
                  Footer: {
                      css: {
                          position: 'relative',
                          right: 0,
                          bottom: 0,
                          fontSize: '0.6em',
                          backgroundColor: n.colors.surfaceVariant,
                          textAlign: 'center',
                          padding: '1em',
                      },
                      FooterLink: {
                          css: {
                              textDecoration: 'none',
                              fontWeight: 'bold',
                              padding: '0.2em',
                          },
                      },
                  },
                  ApplicationWrapper: {
                      css: {
                          padding: {
                              default: '1em 1em 0 1em',
                              expandToEdge: '0',
                          },
                      },
                  },
                  AgentBar: {
                      css: {
                          padding: '0.6em',
                          paddingBottom: '0.6em',
                      },
                      Avatar: {
                          size: '60px',
                          css: {
                              borderRadius: n.borderRadius.none,
                              marginRight: '0.6em',
                          },
                      },
                      SubTitle: {
                          css: {
                              fontSize: '.8em',
                              fontWeight: 'normal',
                          },
                      },
                      Title: {
                          css: {
                              fontSize: '1em',
                              fontWeight: 'bold',
                          },
                      },
                      IconButton: {
                          css: {
                              fontSize: vi(24),
                              backgroundColor: 'transparent !important',
                              color: {
                                  default: 'inherit',
                              },
                              opacity: {
                                  default: '0.3',
                                  disabled: '0.15',
                                  active: '0.6',
                              },
                          },
                      },
                  },
                  Button: {
                      css: {
                          boxShadow: 'none',
                      },
                  },
                  Message: {
                      horizontalAlign: 'left',
                      own: {
                          horizontalAlign: 'left',
                          Content: {
                              css: {
                                  alignItems: 'flex-start',
                              },
                          },
                      },
                      system: {
                          MessageText: {
                              css: {
                                  fontSize: '.9em',
                              },
                          },
                      },
                      css: {
                          flexDirection: 'row',
                          margin: '0.3em',
                      },
                      Bubble: {
                          sharpBorderRadius: '0px',
                          ovalBorderRadius: '0px',
                          css: {
                              border: '0',
                              padding: '0',
                              background: 'transparent',
                              boxShadow: 'none',
                          },
                      },
                      ImagePreview: {
                          css: {
                              maxWidth: '150px',
                              maxHeight: '250px',
                              borderRadius: n.borderRadius.none,
                          },
                      },
                      Button: {
                          css: {
                              borderTop: '0!important',
                          },
                      },
                  },
                  MessageText: {
                      css: {
                          padding: '0',
                          fontSize: '14px',
                      },
                  },
                  MessageGroup: {
                      css: {
                          marginBottom: '.5em',
                      },
                  },
                  Minimized: {
                      Img: {
                          css: {
                              display: 'block',
                          },
                      },
                      ImgOverlay: {
                          css: {
                              display: 'none',
                          },
                      },
                  },
                  MinimizedBar: {
                      css: {
                          borderRadius: [
                              n.borderRadius.sm,
                              n.borderRadius.sm,
                              n.borderRadius.none,
                              n.borderRadius.none,
                          ].join(' '),
                          height: '40px',
                      },
                      Icon: {
                          css: {
                              transform: 'scale(0.8)',
                          },
                      },
                  },
                  MinimizedBubble: {
                      css: {
                          position: 'relative',
                      },
                  },
                  View: {
                      Bubble: {
                          css: {
                              border: '0',
                              padding: '0',
                              background: 'transparent',
                              boxShadow: 'none',
                          },
                      },
                      ViewContent: {
                          css: {
                              paddingTop: '.5em',
                          },
                      },
                      css: {
                          paddingBottom: '0',
                      },
                  },
                  TextInput: {
                      css: {
                          lineHeight: '1.1em',
                      },
                  },
                  Form: {
                      css: {
                          fontSize: '0.9em',
                      },
                  },
                  Tooltip: {
                      css: {
                          padding: '0.5em 0.8em',
                          fontSize: '.7em',
                      },
                  },
                  TooltipArrow: {
                      css: {
                          marginTop: '-1em',
                      },
                  },
                  Invitation: {
                      Bubble: {
                          sharpBorderRadius: '6px',
                          ovalBorderRadius: '6px',
                          css: {
                              padding: '.5em',
                          },
                      },
                  },
                  InformationField: {
                      css: {
                          fontSize: '1.1em',
                      },
                  },
                  SystemCard: {
                      css: {
                          maxWidth: '368px',
                          width: 'calc(100% - 0.6em)',
                          margin: '0.3em',
                          boxShadow: 'none',
                          border: '1px solid ' + n.colors.divider,
                          padding: '8px',
                      },
                  },
                  TextComposer: {
                      IconButton: {
                          css: {
                              opacity: {
                                  active: 1,
                                  default: 0.4,
                              },
                          },
                      },
                      css: {
                          borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                          margin: 0,
                          borderRadius: 0,
                      },
                  },
                  NewMessageHorizontalDivider: {
                      css: {
                          margin: '8px -0.5em',
                      },
                  },
                  BoosterContainer: {
                      css: {
                          border: '1px solid ' + n.colors.divider,
                          maxWidth: '368px',
                          width: 'calc(100% - 0.6em)',
                          margin: '0.3em',
                          boxShadow: 'none',
                          borderRadius: n.borderRadius.md,
                      },
                  },
                  BoosterButton: {
                      css: {
                          boxShadow: 'none',
                      },
                  },
              })
            : (e =>
                  ir({}, e, {
                      borderRadius: ir({}, e.borderRadius, {
                          def: e.borderRadius.md,
                      }),
                      vars: {
                          'primary-color': e.colors.accent,
                          'secondary-color': e.colors.grayscale[0],
                          'tertiary-color': e.colors.divider,
                      },
                      ApplicationWrapper: {
                          css: {
                              padding: {
                                  default: '1em 1em 1em 1em',
                                  expandToEdge: '0',
                              },
                          },
                      },
                      AgentBar: {
                          Avatar: {
                              size: '40px',
                          },
                          IconButton: {
                              css: {
                                  width: '40px',
                                  height: '40px',
                                  textAlign: 'center',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  marginLeft: '6px',
                                  fontSize: vi(32),
                                  opacity: {
                                      default: '1',
                                      disabled: '0.15',
                                  },
                              },
                          },
                          Title: {
                              css: {
                                  fontSize: vi(16),
                                  fontWeight: 'bold',
                              },
                          },
                          SubTitle: {
                              css: {
                                  fontSize: vi(16),
                                  fontWeight: 'normal',
                                  opacity: '1',
                              },
                          },
                          css: {
                              backgroundColor: e.colors.surface,
                              zIndex: '1',
                              color: e.colors.primaryTextColor,
                              padding: '1rem',
                          },
                      },
                      Avatar: {
                          size: '20px',
                          css: {
                              border: 0,
                          },
                      },
                      Bubble: {
                          sharpBorderRadius: '10px',
                          ovalBorderRadius: '10px',
                          css: {
                              boxShadow: e.boxShadow.xs,
                              border: '0',
                          },
                      },
                      ImagePreview: {
                          css: {
                              maxWidth: '200px',
                              maxHeight: '300px',
                              borderRadius: e.borderRadius.md,
                          },
                      },
                      IconButton: {
                          css: {
                              padding: '0 .5em',
                          },
                      },
                      Footer: {
                          css: {
                              fontSize: '0.65em',
                              padding: '0.3em 0',
                              minHeight: '36px',
                              width: '100%',
                              textAlign: 'center',
                          },
                          FooterLink: {
                              css: {
                                  textDecoration: 'none',
                                  padding: '8px',
                                  borderRadius: e.borderRadius.md,
                              },
                          },
                      },
                      MessageButtons: {
                          css: {
                              color: e.colors.accent,
                          },
                      },
                      MessageText: {
                          css: {
                              fontSize: '14px',
                          },
                      },
                      Message: {
                          css: {
                              animation: {
                                  default: 'none',
                                  sending: kE + ' 2s 2s forwards',
                              },
                              opacity: {
                                  default: '1',
                                  failed: '0.7',
                              },
                              color: e.colors.primaryTextColor,
                              justifyContent: {
                                  default: 'flex-start',
                                  system: 'center',
                              },
                          },
                          Bubble: {
                              sharpBorderRadius: '10px',
                              ovalBorderRadius: '10px',
                              css: {
                                  boxShadow: e.boxShadow.xs,
                                  border: '0',
                              },
                          },
                          system: {
                              Bubble: {
                                  css: {
                                      background: 'transparent',
                                      textAlign: 'center',
                                      border: '0',
                                      width: '100%',
                                      boxShadow: 'none',
                                  },
                              },
                              MessageText: {
                                  css: {
                                      padding: '0 1em',
                                  },
                              },
                          },
                          fullWidth: {
                              Content: {
                                  css: {
                                      width: '100%',
                                  },
                              },
                          },
                      },
                      MinimizedBar: {
                          Icon: {
                              color: 'var(--primary-color)',
                          },
                          css: {
                              position: 'relative',
                          },
                      },
                      MinimizedBubble: {
                          css: {
                              position: 'relative',
                              background: {
                                  default: 'var(--primary-color)',
                                  hasAvatar: 'transparent',
                              },
                          },
                      },
                      Minimized: {
                          Avatar: {
                              css: {
                                  border: '0',
                                  backgroundColor: 'transparent',
                              },
                          },
                          Img: {
                              css: {
                                  display: 'block',
                              },
                          },
                          ImgOverlay: {
                              css: {
                                  display: 'none',
                              },
                          },
                      },
                      Invitation: {
                          IconButton: {
                              css: {
                                  visibility: {
                                      mobile: 'visible',
                                  },
                              },
                          },
                          Bubble: {
                              sharpBorderRadius: '10px',
                              ovalBorderRadius: '10px',
                              css: {
                                  border: '0',
                              },
                          },
                      },
                      TextComposer: {
                          css: {
                              fontSize: {
                                  default: '14px',
                                  mobile: '16px',
                              },
                          },
                          IconButton: {
                              css: {
                                  opacity: {
                                      active: 1,
                                      default: 0.4,
                                  },
                              },
                          },
                          Icon: {
                              color: 'unset',
                          },
                      },
                      View: {
                          css: {
                              color: e.colors.primaryTextColor,
                          },
                          Bubble: {
                              sharpBorderRadius: '10px',
                              ovalBorderRadius: '10px',
                              css: {
                                  boxShadow: e.boxShadow.xs,
                                  border: '0',
                              },
                          },
                      },
                      SystemCard: {
                          css: {
                              backgroundColor: e.colors.primaryTimelineSurface,
                              border: '1px solid ' + e.colors.borderSubtle,
                              boxShadow: 'none',
                          },
                      },
                  }))(t);
        var n;
    },
    pT = e => {
        let { children: t } = e;
        const n = ni(e => e.getApplicationState('isPreview')),
            {
                mobile: r,
                rtl: i,
                config: { theme: a },
            } = ni(e => e.getApplicationState(), n ? null : () => !0),
            u = AE.colors[a.variant],
            s = ir({}, AE, {
                variant: a.variant,
                colors: u,
                isRtl: i,
            }),
            l = o(dT(a.name, s), a);
        return or.createElement(
            Bh,
            {
                theme: r
                    ? o(l, {
                          typography: {
                              input: {
                                  fontSize: '16px',
                              },
                              placeholder: {
                                  fontSize: '16px',
                              },
                          },
                      })
                    : l,
            },
            t
        );
    },
    DT = () => {
        let e = null;
        const t = (t, n) => e[n] || t;
        return (n, r, o, i) => {
            if (!e) {
                e = {};
                try {
                    return (
                        i(n, r, o, i),
                        ((a = n).value = ''),
                        (a.root = null),
                        (a.parent = null),
                        (a.type = ''),
                        (a.props = []),
                        (a.children = []),
                        (a.length = 0),
                        void (a.return = '')
                    );
                } finally {
                    e = null;
                }
            }
            var a;
            if (n.type === aa)
                if (45 === n.props.charCodeAt(0) && 45 === n.props.charCodeAt(1)) {
                    const t = n.props.trim(),
                        r = n.children;
                    (e[t] = r), (n.return = ''), (n.value = '');
                } else n.children.indexOf('var(') > -1 && (n.value = n.value.replace(/var\((.*)\)/g, t));
        };
    },
    mT = function (e, t) {
        void 0 === t && (t = 'lc');
        const n = tu({
            key: t,
            container: e,
            stylisPlugins: [DT(), Ka],
        });
        return (n.compat = !0), n;
    },
    fT = e => {
        let { store: t, onError: n } = e,
            r = ur(e, uT);
        const o = bd.useFrame(),
            i = !t || t.getApplicationState('isPreview'),
            a = Kd(() => mT(o.document.head)),
            u = or.createElement(
                wg,
                {
                    value: i,
                },
                or.createElement(
                    rd,
                    null,
                    or.createElement(
                        gu,
                        {
                            value: a,
                        },
                        or.createElement(
                            pT,
                            {
                                isPreview: i,
                            },
                            or.createElement(
                                cT,
                                null,
                                or.createElement(pc, null, or.createElement(Bg, null, or.createElement(iT, r)))
                            )
                        )
                    )
                )
            );
        return t
            ? or.createElement(
                  aT,
                  {
                      onError: n,
                  },
                  or.createElement(
                      ui,
                      {
                          store: t,
                      },
                      u
                  )
              )
            : or.createElement(
                  aT,
                  {
                      onError: n,
                  },
                  u
              );
    };

function hT(e) {
    const { rtl: t } = e.store.getApplicationState();
    return or.createElement(
        ui,
        {
            store: e.store,
        },
        or.createElement(
            pT,
            null,
            or.createElement(QS, {
                dir: t ? 'rtl' : 'ltr',
                innerRef: e.onMinimizedRef,
                onResize: e.onMinimizedResize,
                onMaximize: () => {
                    e.store.setApplicationState({
                        pageFocused: !0,
                        applicationFocused: !0,
                        visibility: ir({}, e.store.getApplicationState('visibility'), {
                            state: 'maximized',
                        }),
                    });
                },
            })
        )
    );
}

function gT(e) {
    return or.createElement(
        ui,
        {
            store: e.store,
        },
        or.createElement(pT, null, or.createElement(Gb, null))
    );
}
const vT = (e, t, n, r, o) => {
        let i = ir({}, (qu(t), t));
        if (n && r) {
            const e = () => {
                n.call('renderCrossFrameMarkup', r(or.createElement(hT, i), lT));
            };
            e();
            const t = e => {
                    let [t, r, ...o] = e;
                    n.call('callElementMethod', [t, r].concat(o));
                },
                o = e => {
                    let [t, r] = e;
                    n.call('getElementProperties', [t, r]).then(e => {
                        i.store.emit('get-element-properties-response', e);
                    });
                },
                a = e => {
                    let { message: t, ariaLevel: r } = e;
                    n.call('setLiveAnnouncerMessage', {
                        message: t,
                        ariaLevel: r,
                    });
                },
                u = () => {
                    n.call('renderLightboxMarkup', r(or.createElement(gT, i)));
                },
                s = () => {
                    n.call('removeLightboxMarkup');
                };
            i.store.on('render-image-lightbox', u),
                i.store.on('remove-image-lightbox', s),
                i.store.on('render-minimized', e),
                i.store.on('call-element-method', t),
                i.store.on('get-element-properties-request', o),
                i.store.on('set-live-announcer-message', a);
        }
        dr.render(or.createElement(fT, i), e);
    },
    CT = 300,
    bT = Fi.easeOutStrong,
    ET = 'width 300ms ' + bT + ', height 300ms ' + bT,
    yT = e => {
        switch (e) {
            case 'ta-large':
                return {
                    width: '640px',
                    height: 'max(calc(100vh - 100px), 800px)',
                };
            case 'ta-default':
                return {
                    width: '420px',
                    height: '800px',
                };
            case 'modern':
                return {
                    width: '400px',
                    height: '465px',
                };
            case 'full-viewport':
                return {
                    width: '100%',
                    height: '100%',
                };
            default:
                return {
                    width: '392px',
                    height: '714px',
                };
        }
    };
export {
    mT as $,
    li as A,
    Kd as B,
    gu as C,
    Bu as D,
    Sy as E,
    Yu as F,
    Au as G,
    ti as H,
    ni as I,
    Tu as J,
    si as K,
    yD as L,
    jD as M,
    Qv as N,
    Ig as O,
    Mr as P,
    os as Q,
    ss as R,
    bu as S,
    nm as T,
    el as U,
    ul as V,
    np as W,
    ET as X,
    Gd as Y,
    ns as Z,
    Lg as _,
    _r as a,
    oc as a$,
    Bh as a0,
    rd as a1,
    Cd as a2,
    fT as a3,
    ui as a4,
    Jp as a5,
    tD as a6,
    Xh as a7,
    Hh as a8,
    Zm as a9,
    Gh as aA,
    rm as aB,
    mv as aC,
    rD as aD,
    hb as aE,
    cF as aF,
    lD as aG,
    sD as aH,
    lf as aI,
    xb as aJ,
    yh as aK,
    bb as aL,
    IC as aM,
    lS as aN,
    rf as aO,
    XE as aP,
    YA as aQ,
    Nm as aR,
    am as aS,
    as as aT,
    rs as aU,
    If as aV,
    ps as aW,
    kg as aX,
    cy as aY,
    Sb as aZ,
    uc as a_,
    Xd as aa,
    Ng as ab,
    Rg as ac,
    Kv as ad,
    PE as ae,
    oC as af,
    wu as ag,
    Vm as ah,
    Lf as ai,
    bA as aj,
    Ff as ak,
    ku as al,
    vC as am,
    ai as an,
    ev as ao,
    eC as ap,
    KE as aq,
    eh as ar,
    wC as as,
    CF as at,
    gg as au,
    yb as av,
    Uw as aw,
    mD as ax,
    Fg as ay,
    Eg as az,
    vT as b,
    Rw as b$,
    Dc as b0,
    vb as b1,
    Nf as b2,
    oD as b3,
    Ix as b4,
    WF as b5,
    Ab as b6,
    mb as b7,
    fb as b8,
    wf as b9,
    Ur as bA,
    $E as bB,
    JE as bC,
    hv as bD,
    ov as bE,
    Am as bF,
    zv as bG,
    OS as bH,
    zA as bI,
    Bw as bJ,
    Nh as bK,
    GD as bL,
    qD as bM,
    KD as bN,
    VD as bO,
    qu as bP,
    NC as bQ,
    tC as bR,
    rC as bS,
    fD as bT,
    Ds as bU,
    Gu as bV,
    Ps as bW,
    hE as bX,
    Xb as bY,
    dD as bZ,
    Gr as b_,
    Um as ba,
    Af as bb,
    Xf as bc,
    gb as bd,
    Bb as be,
    jg as bf,
    vi as bg,
    wb as bh,
    Cb as bi,
    Fb as bj,
    Eb as bk,
    tp as bl,
    CT as bm,
    MF as bn,
    OF as bo,
    RF as bp,
    sh as bq,
    VC as br,
    WC as bs,
    SC as bt,
    BC as bu,
    Bv as bv,
    nl as bw,
    js as bx,
    Js as by,
    av as bz,
    tu as c,
    qF as c0,
    GF as c1,
    Db as c2,
    bg as c3,
    pb as c4,
    Ju as c5,
    Cs as c6,
    Zf as c7,
    no as c8,
    Zr as c9,
    to as ca,
    Hr as cb,
    Or as d,
    Wi as e,
    kr as f,
    Ri as g,
    Ni as h,
    zr as i,
    Qi as j,
    ji as k,
    Sr as l,
    jr as m,
    yT as n,
    Vu as o,
    qr as p,
    yg as q,
    Nu as r,
    bS as s,
    ci as t,
    Hu as u,
    $d as v,
    bd as w,
    Ly as x,
    Xc as y,
    $D as z,
};
