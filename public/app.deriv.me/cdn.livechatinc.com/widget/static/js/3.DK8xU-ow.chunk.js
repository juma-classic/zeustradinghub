import { k as e } from './4.C_rgEAoe.chunk.js';

function t(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if ('string' != typeof r && !Array.isArray(r))
            for (const t in r)
                if ('default' !== t && !(t in e)) {
                    const n = Object.getOwnPropertyDescriptor(r, t);
                    n &&
                        Object.defineProperty(
                            e,
                            t,
                            n.get
                                ? n
                                : {
                                      enumerable: !0,
                                      get: () => r[t],
                                  }
                        );
                }
    }
    return Object.freeze(
        Object.defineProperty(e, Symbol.toStringTag, {
            value: 'Module',
        })
    );
}

function n() {
    return (
        (n = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        n.apply(null, arguments)
    );
}
const r = Object.freeze(
    Object.defineProperty(
        {
            __proto__: null,
            get default() {
                return n;
            },
        },
        Symbol.toStringTag,
        {
            value: 'Module',
        }
    )
);
var l =
    'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : {};

function a(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}

function o(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if ('function' == typeof t) {
        var n = function e() {
            return this instanceof e ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
        };
        n.prototype = t.prototype;
    } else n = {};
    return (
        Object.defineProperty(n, '__esModule', {
            value: !0,
        }),
        Object.keys(e).forEach(function (t) {
            var r = Object.getOwnPropertyDescriptor(e, t);
            Object.defineProperty(
                n,
                t,
                r.get
                    ? r
                    : {
                          enumerable: !0,
                          get: function () {
                              return e[t];
                          },
                      }
            );
        }),
        n
    );
}
const u = e => (t, n) => {
    if (0 !== t) return;
    let r, l;

    function a(e, t) {
        1 === e && (l || r)(1, t), 2 === e && (l && l(2), r && r(2));
    }
    e(0, (e, t) => {
        if (0 === e) (r = t), n(0, a);
        else if (1 === e) {
            const e = t;
            l && l(2),
                e(0, (e, t) => {
                    0 === e
                        ? ((l = t), l(1))
                        : 1 === e
                          ? n(1, t)
                          : 2 === e && t
                            ? (r && r(2), n(2, t))
                            : 2 === e && (r ? ((l = void 0), r(1)) : n(2));
                });
        } else 2 === e && t ? (l && l(2), n(2, t)) : 2 === e && (l ? (r = void 0) : n(2));
    });
};
var i = function (e) {
    return u(
        ((t = e),
        (e, n) => {
            if (0 === e) {
                let e = !1;
                n(0, t => {
                    2 === t && (e = !0);
                }),
                    n(1, t()),
                    e || n(2);
            }
        })
    );
    var t;
};
const s = a(e => t => (n, r) => {
    if (0 !== n) return;
    let l;
    t(0, (t, n) => {
        0 === t ? ((l = n), r(t, n)) : 1 === t ? (e(n) ? r(t, n) : l(1)) : r(t, n);
    });
});
const c = a(e => t => {
        let n;
        t(0, (t, r) => {
            0 === t && (n = r), 1 === t && e(r), (1 !== t && 0 !== t) || n(1);
        });
    }),
    f = (e, t, n) => (r, l) => {
        if (0 !== r) return;
        let a = !1;
        const o = e => {
            l(1, e);
        };
        l(0, r => {
            2 === r && ((a = !0), e.removeEventListener(t, o, n));
        }),
            a || e.addEventListener(t, o, n);
    };
const d = a(function (...e) {
        return (t, n) => {
            if (0 !== t) return;
            const r = e.length,
                l = new Array(r);
            let a = 0,
                o = 0;
            const u = e => {
                if (0 !== e) for (let t = 0; t < r; t++) l[t] && l[t](e);
            };
            for (let i = 0; i < r; i++)
                e[i](0, (e, t) => {
                    0 === e
                        ? ((l[i] = t), 1 === ++a && n(0, u))
                        : 2 === e
                          ? ((l[i] = void 0), ++o === r && n(2))
                          : n(e, t);
                });
        };
    }),
    p = e => (t, n) => {
        if (0 === t) {
            let t = !1;
            n(0, e => {
                2 === e && (t = !0);
            }),
                n(1, e()),
                t || n(2);
        }
    };
const h = e => {
    let t,
        n = [];
    return function (r, l) {
        if (0 !== r) return;
        n.push(l);
        const a = (e, r) => {
            if (2 === e) {
                const e = n.indexOf(l);
                e > -1 && n.splice(e, 1), n.length || t(2);
            } else t(e, r);
        };
        1 !== n.length
            ? l(0, a)
            : e(0, (e, r) => {
                  if (0 === e) (t = r), l(0, a);
                  else for (let t of n.slice(0)) t(e, r);
                  2 === e && (n = []);
              });
    };
};
const m = a(e => t => (n, r) => {
    if (0 !== n) return;
    let l,
        a = 0;

    function o(t, n) {
        a < e && l(t, n);
    }
    t(0, (t, n) => {
        0 === t ? ((l = n), r(0, o)) : 1 === t ? a < e && (a++, r(t, n), a === e && (r(2), l(2))) : r(t, n);
    });
});

function v(e) {
    return function (t) {
        return function (n, r) {
            if (0 === n) {
                var l,
                    a,
                    o = e instanceof Date;
                t(0, function (t, n) {
                    if (0 === t)
                        return (
                            (l = n),
                            u(o ? e - Date.now() : e),
                            void r(0, function (e, t) {
                                2 === e && clearTimeout(a), l(e, t);
                            })
                        );
                    2 === t ? clearTimeout(a) : 1 !== t || o || (clearTimeout(a), u(e)), r(t, n);
                });
            }

            function u(e) {
                a = setTimeout(function () {
                    l(2);
                    var e = new Error('Timeout.');
                    (e.code = 'TIMEOUT'), r(2, e);
                }, e);
            }
        };
    };
}

function g(e) {
    return new Promise(function (t, n) {
        (
            (e = {}) =>
            t => {
                'function' == typeof e &&
                    (e = {
                        next: e,
                    });
                let n,
                    { next: r, error: l, complete: a } = e;
                return (
                    t(0, (e, t) => {
                        0 === e && (n = t),
                            1 === e && r && r(t),
                            (1 !== e && 0 !== e) || n(1),
                            2 === e && !t && a && a(),
                            2 === e && t && l && l(t);
                    }),
                    () => {
                        n && n(2);
                    }
                );
            }
        )({
            next: t,
            error: n,
            complete: function () {
                var e = new Error('No elements in sequence.');
                (e.code = 'NO_ELEMENTS'), n(e);
            },
        })(
            (function (e) {
                return function (t, n) {
                    if (0 === t) {
                        var r,
                            l,
                            a = !1,
                            o = !1;
                        e(0, function (e, t) {
                            return 0 === e
                                ? ((r = t),
                                  void n(0, function (e, t) {
                                      2 === e && (o = !0), r(e, t);
                                  }))
                                : 1 === e
                                  ? ((a = !0), (l = t), void r(1))
                                  : void ((2 === e && !t && a && (n(1, l), o)) || n(e, t));
                        });
                    }
                };
            })(e)
        );
    });
}
const { hasOwnProperty: y } = {};

function b(e, t) {
    return y.call(t, e);
}

function w(e) {
    return Array.isArray(e);
}

function k(e) {
    return w(e)
        ? e.filter(e => null != e && !Number.isNaN(e))
        : Object.keys(e).reduce((t, n) => {
              const r = e[n];
              return null == r || Number.isNaN(r) || (t[n] = r), t;
          }, {});
}

function E() {}

function S(e) {
    let t,
        n = !1;
    return function () {
        return n ? t : ((n = !0), (t = e(...arguments)));
    };
}

function x(t, n) {
    return e(n).reduce((e, r) => ((e[t(n[r]) ? 0 : 1][r] = n[r]), e), [{}, {}]);
}

function _(e) {
    return new Promise(t => {
        t(e());
    });
}
const C = ['all'];

function P() {
    return (
        (P = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        P.apply(null, arguments)
    );
}
const N = () => {
    const e = {
            all: (r = r || new Map()),
            on: function (e, t) {
                var n = r.get(e);
                n ? n.push(t) : r.set(e, [t]);
            },
            off: function (e, t) {
                var n = r.get(e);
                n && (t ? n.splice(n.indexOf(t) >>> 0, 1) : r.set(e, []));
            },
            emit: function (e, t) {
                var n = r.get(e);
                n &&
                    n.slice().map(function (e) {
                        e(t);
                    }),
                    (n = r.get('*')) &&
                        n.slice().map(function (n) {
                            n(e, t);
                        });
            },
        },
        { all: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
                if ({}.hasOwnProperty.call(e, r)) {
                    if (-1 !== t.indexOf(r)) continue;
                    n[r] = e[r];
                }
            return n;
        })(e, C);
    var r;
    return P({}, n, {
        off: (e, r) => {
            e ? n.off(e, r) : t.clear();
        },
        once: (e, t) => {
            n.on(e, function r(l, a) {
                n.off(e, r), t(l, a);
            });
        },
    });
};
var T = {
        exports: {},
    },
    O = {},
    z = Object.getOwnPropertySymbols,
    L = Object.prototype.hasOwnProperty,
    M = Object.prototype.propertyIsEnumerable;
var R = (function () {
        try {
            if (!Object.assign) return !1;
            var e = new String('abc');
            if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
            for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
            if (
                '0123456789' !==
                Object.getOwnPropertyNames(t)
                    .map(function (e) {
                        return t[e];
                    })
                    .join('')
            )
                return !1;
            var r = {};
            return (
                'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                    r[e] = e;
                }),
                'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
            );
        } catch (l) {
            return !1;
        }
    })()
        ? Object.assign
        : function (e, t) {
              for (
                  var n,
                      r,
                      l = (function (e) {
                          if (null == e) throw new TypeError('Object.assign cannot be called with null or undefined');
                          return Object(e);
                      })(e),
                      a = 1;
                  a < arguments.length;
                  a++
              ) {
                  for (var o in (n = Object(arguments[a]))) L.call(n, o) && (l[o] = n[o]);
                  if (z) {
                      r = z(n);
                      for (var u = 0; u < r.length; u++) M.call(n, r[u]) && (l[r[u]] = n[r[u]]);
                  }
              }
              return l;
          },
    D = R,
    I = 60103,
    F = 60106;
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(O.Fragment = 60107), (O.StrictMode = 60108), (O.Profiler = 60114);
var U = 60109,
    j = 60110,
    A = 60112;
O.Suspense = 60113;
var V = 60115,
    B = 60116;
if ('function' == typeof Symbol && Symbol.for) {
    var W = Symbol.for;
    (I = W('react.element')),
        (F = W('react.portal')),
        (O.Fragment = W('react.fragment')),
        (O.StrictMode = W('react.strict_mode')),
        (O.Profiler = W('react.profiler')),
        (U = W('react.provider')),
        (j = W('react.context')),
        (A = W('react.forward_ref')),
        (O.Suspense = W('react.suspense')),
        (V = W('react.memo')),
        (B = W('react.lazy'));
}
var $ = 'function' == typeof Symbol && Symbol.iterator;

function H(e) {
    for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
        t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
}
var Q = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    q = {};

function K(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = q), (this.updater = n || Q);
}

function Y() {}

function X(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = q), (this.updater = n || Q);
}
(K.prototype.isReactComponent = {}),
    (K.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e) throw Error(H(85));
        this.updater.enqueueSetState(this, e, t, 'setState');
    }),
    (K.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
    }),
    (Y.prototype = K.prototype);
var G = (X.prototype = new Y());
(G.constructor = X), D(G, K.prototype), (G.isPureReactComponent = !0);
var Z = {
        current: null,
    },
    J = Object.prototype.hasOwnProperty,
    ee = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0,
    };

function te(e, t, n) {
    var r,
        l = {},
        a = null,
        o = null;
    if (null != t)
        for (r in (void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (a = '' + t.key), t))
            J.call(t, r) && !ee.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (1 === u) l.children = n;
    else if (1 < u) {
        for (var i = Array(u), s = 0; s < u; s++) i[s] = arguments[s + 2];
        l.children = i;
    }
    if (e && e.defaultProps) for (r in (u = e.defaultProps)) void 0 === l[r] && (l[r] = u[r]);
    return {
        $$typeof: I,
        type: e,
        key: a,
        ref: o,
        props: l,
        _owner: Z.current,
    };
}

function ne(e) {
    return 'object' == typeof e && null !== e && e.$$typeof === I;
}
var re = /\/+/g;

function le(e, t) {
    return 'object' == typeof e && null !== e && null != e.key
        ? (function (e) {
              var t = {
                  '=': '=0',
                  ':': '=2',
              };
              return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                      return t[e];
                  })
              );
          })('' + e.key)
        : t.toString(36);
}

function ae(e, t, n, r, l) {
    var a = typeof e;
    ('undefined' !== a && 'boolean' !== a) || (e = null);
    var o = !1;
    if (null === e) o = !0;
    else
        switch (a) {
            case 'string':
            case 'number':
                o = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case I:
                    case F:
                        o = !0;
                }
        }
    if (o)
        return (
            (l = l((o = e))),
            (e = '' === r ? '.' + le(o, 0) : r),
            Array.isArray(l)
                ? ((n = ''),
                  null != e && (n = e.replace(re, '$&/') + '/'),
                  ae(l, t, n, '', function (e) {
                      return e;
                  }))
                : null != l &&
                  (ne(l) &&
                      (l = (function (e, t) {
                          return {
                              $$typeof: I,
                              type: e.type,
                              key: t,
                              ref: e.ref,
                              props: e.props,
                              _owner: e._owner,
                          };
                      })(l, n + (!l.key || (o && o.key === l.key) ? '' : ('' + l.key).replace(re, '$&/') + '/') + e)),
                  t.push(l)),
            1
        );
    if (((o = 0), (r = '' === r ? '.' : r + ':'), Array.isArray(e)))
        for (var u = 0; u < e.length; u++) {
            var i = r + le((a = e[u]), u);
            o += ae(a, t, n, i, l);
        }
    else if (
        ((i = (function (e) {
            return null === e || 'object' != typeof e
                ? null
                : 'function' == typeof (e = ($ && e[$]) || e['@@iterator'])
                  ? e
                  : null;
        })(e)),
        'function' == typeof i)
    )
        for (e = i.call(e), u = 0; !(a = e.next()).done; ) o += ae((a = a.value), t, n, (i = r + le(a, u++)), l);
    else if ('object' === a)
        throw (
            ((t = '' + e),
            Error(H(31, '[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t)))
        );
    return o;
}

function oe(e, t, n) {
    if (null == e) return e;
    var r = [],
        l = 0;
    return (
        ae(e, r, '', '', function (e) {
            return t.call(n, e, l++);
        }),
        r
    );
}

function ue(e) {
    if (-1 === e._status) {
        var t = e._result;
        (t = t()),
            (e._status = 0),
            (e._result = t),
            t.then(
                function (t) {
                    0 === e._status && ((t = t.default), (e._status = 1), (e._result = t));
                },
                function (t) {
                    0 === e._status && ((e._status = 2), (e._result = t));
                }
            );
    }
    if (1 === e._status) return e._result;
    throw e._result;
}
var ie = {
    current: null,
};

function se() {
    var e = ie.current;
    if (null === e) throw Error(H(321));
    return e;
}
var ce = {
    ReactCurrentDispatcher: ie,
    ReactCurrentBatchConfig: {
        transition: 0,
    },
    ReactCurrentOwner: Z,
    IsSomeRendererActing: {
        current: !1,
    },
    assign: D,
};
(O.Children = {
    map: oe,
    forEach: function (e, t, n) {
        oe(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            oe(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            oe(e, function (e) {
                return e;
            }) || []
        );
    },
    only: function (e) {
        if (!ne(e)) throw Error(H(143));
        return e;
    },
}),
    (O.Component = K),
    (O.PureComponent = X),
    (O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ce),
    (O.cloneElement = function (e, t, n) {
        if (null == e) throw Error(H(267, e));
        var r = D({}, e.props),
            l = e.key,
            a = e.ref,
            o = e._owner;
        if (null != t) {
            if (
                (void 0 !== t.ref && ((a = t.ref), (o = Z.current)),
                void 0 !== t.key && (l = '' + t.key),
                e.type && e.type.defaultProps)
            )
                var u = e.type.defaultProps;
            for (i in t)
                J.call(t, i) && !ee.hasOwnProperty(i) && (r[i] = void 0 === t[i] && void 0 !== u ? u[i] : t[i]);
        }
        var i = arguments.length - 2;
        if (1 === i) r.children = n;
        else if (1 < i) {
            u = Array(i);
            for (var s = 0; s < i; s++) u[s] = arguments[s + 2];
            r.children = u;
        }
        return {
            $$typeof: I,
            type: e.type,
            key: l,
            ref: a,
            props: r,
            _owner: o,
        };
    }),
    (O.createContext = function (e, t) {
        return (
            void 0 === t && (t = null),
            ((e = {
                $$typeof: j,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
            }).Provider = {
                $$typeof: U,
                _context: e,
            }),
            (e.Consumer = e)
        );
    }),
    (O.createElement = te),
    (O.createFactory = function (e) {
        var t = te.bind(null, e);
        return (t.type = e), t;
    }),
    (O.createRef = function () {
        return {
            current: null,
        };
    }),
    (O.forwardRef = function (e) {
        return {
            $$typeof: A,
            render: e,
        };
    }),
    (O.isValidElement = ne),
    (O.lazy = function (e) {
        return {
            $$typeof: B,
            _payload: {
                _status: -1,
                _result: e,
            },
            _init: ue,
        };
    }),
    (O.memo = function (e, t) {
        return {
            $$typeof: V,
            type: e,
            compare: void 0 === t ? null : t,
        };
    }),
    (O.useCallback = function (e, t) {
        return se().useCallback(e, t);
    }),
    (O.useContext = function (e, t) {
        return se().useContext(e, t);
    }),
    (O.useDebugValue = function () {}),
    (O.useEffect = function (e, t) {
        return se().useEffect(e, t);
    }),
    (O.useImperativeHandle = function (e, t, n) {
        return se().useImperativeHandle(e, t, n);
    }),
    (O.useLayoutEffect = function (e, t) {
        return se().useLayoutEffect(e, t);
    }),
    (O.useMemo = function (e, t) {
        return se().useMemo(e, t);
    }),
    (O.useReducer = function (e, t, n) {
        return se().useReducer(e, t, n);
    }),
    (O.useRef = function (e) {
        return se().useRef(e);
    }),
    (O.useState = function (e) {
        return se().useState(e);
    }),
    (O.version = '17.0.2'),
    (T.exports = O);
var fe = T.exports;
const de = a(fe),
    pe = t(
        {
            __proto__: null,
            default: de,
        },
        [fe]
    );

function he(e, t) {
    if (null == e) return {};
    var n = {};
    for (var r in e)
        if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r];
        }
    return n;
}
var me = {
        exports: {},
    },
    ve = {},
    ge = {
        exports: {},
    },
    ye = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!(function (e) {
    var t, n, r, l;
    if ('object' == typeof performance && 'function' == typeof performance.now) {
        var a = performance;
        e.unstable_now = function () {
            return a.now();
        };
    } else {
        var o = Date,
            u = o.now();
        e.unstable_now = function () {
            return o.now() - u;
        };
    }
    if ('undefined' == typeof window || 'function' != typeof MessageChannel) {
        var i = null,
            s = null,
            c = function () {
                if (null !== i)
                    try {
                        var t = e.unstable_now();
                        i(!0, t), (i = null);
                    } catch (n) {
                        throw (setTimeout(c, 0), n);
                    }
            };
        (t = function (e) {
            null !== i ? setTimeout(t, 0, e) : ((i = e), setTimeout(c, 0));
        }),
            (n = function (e, t) {
                s = setTimeout(e, t);
            }),
            (r = function () {
                clearTimeout(s);
            }),
            (e.unstable_shouldYield = function () {
                return !1;
            }),
            (l = e.unstable_forceFrameRate = function () {});
    } else {
        var f = window.setTimeout,
            d = window.clearTimeout;
        if ('undefined' != typeof console) {
            var p = window.cancelAnimationFrame;
            'function' != typeof window.requestAnimationFrame &&
                console.error(
                    "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                ),
                'function' != typeof p &&
                    console.error(
                        "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                    );
        }
        var h = !1,
            m = null,
            v = -1,
            g = 5,
            y = 0;
        (e.unstable_shouldYield = function () {
            return e.unstable_now() >= y;
        }),
            (l = function () {}),
            (e.unstable_forceFrameRate = function (e) {
                0 > e || 125 < e
                    ? console.error(
                          'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                      )
                    : (g = 0 < e ? Math.floor(1e3 / e) : 5);
            });
        var b = new MessageChannel(),
            w = b.port2;
        (b.port1.onmessage = function () {
            if (null !== m) {
                var t = e.unstable_now();
                y = t + g;
                try {
                    m(!0, t) ? w.postMessage(null) : ((h = !1), (m = null));
                } catch (n) {
                    throw (w.postMessage(null), n);
                }
            } else h = !1;
        }),
            (t = function (e) {
                (m = e), h || ((h = !0), w.postMessage(null));
            }),
            (n = function (t, n) {
                v = f(function () {
                    t(e.unstable_now());
                }, n);
            }),
            (r = function () {
                d(v), (v = -1);
            });
    }

    function k(e, t) {
        var n = e.length;
        e.push(t);
        e: for (;;) {
            var r = (n - 1) >>> 1,
                l = e[r];
            if (!(void 0 !== l && 0 < x(l, t))) break e;
            (e[r] = t), (e[n] = l), (n = r);
        }
    }

    function E(e) {
        return void 0 === (e = e[0]) ? null : e;
    }

    function S(e) {
        var t = e[0];
        if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
                e[0] = n;
                e: for (var r = 0, l = e.length; r < l; ) {
                    var a = 2 * (r + 1) - 1,
                        o = e[a],
                        u = a + 1,
                        i = e[u];
                    if (void 0 !== o && 0 > x(o, n))
                        void 0 !== i && 0 > x(i, o)
                            ? ((e[r] = i), (e[u] = n), (r = u))
                            : ((e[r] = o), (e[a] = n), (r = a));
                    else {
                        if (!(void 0 !== i && 0 > x(i, n))) break e;
                        (e[r] = i), (e[u] = n), (r = u);
                    }
                }
            }
            return t;
        }
        return null;
    }

    function x(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
    }
    var _ = [],
        C = [],
        P = 1,
        N = null,
        T = 3,
        O = !1,
        z = !1,
        L = !1;

    function M(e) {
        for (var t = E(C); null !== t; ) {
            if (null === t.callback) S(C);
            else {
                if (!(t.startTime <= e)) break;
                S(C), (t.sortIndex = t.expirationTime), k(_, t);
            }
            t = E(C);
        }
    }

    function R(e) {
        if (((L = !1), M(e), !z))
            if (null !== E(_)) (z = !0), t(D);
            else {
                var r = E(C);
                null !== r && n(R, r.startTime - e);
            }
    }

    function D(t, l) {
        (z = !1), L && ((L = !1), r()), (O = !0);
        var a = T;
        try {
            for (M(l), N = E(_); null !== N && (!(N.expirationTime > l) || (t && !e.unstable_shouldYield())); ) {
                var o = N.callback;
                if ('function' == typeof o) {
                    (N.callback = null), (T = N.priorityLevel);
                    var u = o(N.expirationTime <= l);
                    (l = e.unstable_now()), 'function' == typeof u ? (N.callback = u) : N === E(_) && S(_), M(l);
                } else S(_);
                N = E(_);
            }
            if (null !== N) var i = !0;
            else {
                var s = E(C);
                null !== s && n(R, s.startTime - l), (i = !1);
            }
            return i;
        } finally {
            (N = null), (T = a), (O = !1);
        }
    }
    var I = l;
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (e) {
            e.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            z || O || ((z = !0), t(D));
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return T;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return E(_);
        }),
        (e.unstable_next = function (e) {
            switch (T) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = T;
            }
            var n = T;
            T = t;
            try {
                return e();
            } finally {
                T = n;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = I),
        (e.unstable_runWithPriority = function (e, t) {
            switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3;
            }
            var n = T;
            T = e;
            try {
                return t();
            } finally {
                T = n;
            }
        }),
        (e.unstable_scheduleCallback = function (l, a, o) {
            var u = e.unstable_now();
            switch (
                ('object' == typeof o && null !== o
                    ? (o = 'number' == typeof (o = o.delay) && 0 < o ? u + o : u)
                    : (o = u),
                l)
            ) {
                case 1:
                    var i = -1;
                    break;
                case 2:
                    i = 250;
                    break;
                case 5:
                    i = 1073741823;
                    break;
                case 4:
                    i = 1e4;
                    break;
                default:
                    i = 5e3;
            }
            return (
                (l = {
                    id: P++,
                    callback: a,
                    priorityLevel: l,
                    startTime: o,
                    expirationTime: (i = o + i),
                    sortIndex: -1,
                }),
                o > u
                    ? ((l.sortIndex = o), k(C, l), null === E(_) && l === E(C) && (L ? r() : (L = !0), n(R, o - u)))
                    : ((l.sortIndex = i), k(_, l), z || O || ((z = !0), t(D))),
                l
            );
        }),
        (e.unstable_wrapCallback = function (e) {
            var t = T;
            return function () {
                var n = T;
                T = t;
                try {
                    return e.apply(this, arguments);
                } finally {
                    T = n;
                }
            };
        });
})(ye),
    (ge.exports = ye);
var be = ge.exports,
    we = fe,
    ke = R,
    Ee = be;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Se(e) {
    for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
        t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
}
if (!we) throw Error(Se(227));
var xe = new Set(),
    _e = {};

function Ce(e, t) {
    Pe(e, t), Pe(e + 'Capture', t);
}

function Pe(e, t) {
    for (_e[e] = t, e = 0; e < t.length; e++) xe.add(t[e]);
}
var Ne = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
    Te =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Oe = Object.prototype.hasOwnProperty,
    ze = {},
    Le = {};

function Me(e, t, n, r, l, a, o) {
    (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = l),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = a),
        (this.removeEmptyString = o);
}
var Re = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        Re[e] = new Me(e, 0, !1, e, null, !1, !1);
    }),
    [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
        var t = e[0];
        Re[t] = new Me(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
        Re[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
        Re[e] = new Me(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function (e) {
            Re[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
        Re[e] = new Me(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
        Re[e] = new Me(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
        Re[e] = new Me(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
        Re[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
var De = /[\-:]([a-z])/g;

function Ie(e) {
    return e[1].toUpperCase();
}

function Fe(e, t, n, r) {
    var l = Re.hasOwnProperty(t) ? Re[t] : null;
    (null !== l
        ? 0 === l.type
        : !r && 2 < t.length && ('o' === t[0] || 'O' === t[0]) && ('n' === t[1] || 'N' === t[1])) ||
        ((function (e, t, n, r) {
            if (
                null == t ||
                (function (e, t, n, r) {
                    if (null !== n && 0 === n.type) return !1;
                    switch (typeof t) {
                        case 'function':
                        case 'symbol':
                            return !0;
                        case 'boolean':
                            return (
                                !r &&
                                (null !== n
                                    ? !n.acceptsBooleans
                                    : 'data-' !== (e = e.toLowerCase().slice(0, 5)) && 'aria-' !== e)
                            );
                        default:
                            return !1;
                    }
                })(e, t, n, r)
            )
                return !0;
            if (r) return !1;
            if (null !== n)
                switch (n.type) {
                    case 3:
                        return !t;
                    case 4:
                        return !1 === t;
                    case 5:
                        return isNaN(t);
                    case 6:
                        return isNaN(t) || 1 > t;
                }
            return !1;
        })(t, n, l, r) && (n = null),
        r || null === l
            ? (function (e) {
                  return !!Oe.call(Le, e) || (!Oe.call(ze, e) && (Te.test(e) ? (Le[e] = !0) : ((ze[e] = !0), !1)));
              })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
            : l.mustUseProperty
              ? (e[l.propertyName] = null === n ? 3 !== l.type && '' : n)
              : ((t = l.attributeName),
                (r = l.attributeNamespace),
                null === n
                    ? e.removeAttribute(t)
                    : ((n = 3 === (l = l.type) || (4 === l && !0 === n) ? '' : '' + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(De, Ie);
        Re[t] = new Me(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
        var t = e.replace(De, Ie);
        Re[t] = new Me(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
        var t = e.replace(De, Ie);
        Re[t] = new Me(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
        Re[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Re.xlinkHref = new Me('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
        Re[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
var Ue = we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    je = 60103,
    Ae = 60106,
    Ve = 60107,
    Be = 60108,
    We = 60114,
    $e = 60109,
    He = 60110,
    Qe = 60112,
    qe = 60113,
    Ke = 60120,
    Ye = 60115,
    Xe = 60116,
    Ge = 60121,
    Ze = 60128,
    Je = 60129,
    et = 60130,
    tt = 60131;
if ('function' == typeof Symbol && Symbol.for) {
    var nt = Symbol.for;
    (je = nt('react.element')),
        (Ae = nt('react.portal')),
        (Ve = nt('react.fragment')),
        (Be = nt('react.strict_mode')),
        (We = nt('react.profiler')),
        ($e = nt('react.provider')),
        (He = nt('react.context')),
        (Qe = nt('react.forward_ref')),
        (qe = nt('react.suspense')),
        (Ke = nt('react.suspense_list')),
        (Ye = nt('react.memo')),
        (Xe = nt('react.lazy')),
        (Ge = nt('react.block')),
        nt('react.scope'),
        (Ze = nt('react.opaque.id')),
        (Je = nt('react.debug_trace_mode')),
        (et = nt('react.offscreen')),
        (tt = nt('react.legacy_hidden'));
}
var rt,
    lt = 'function' == typeof Symbol && Symbol.iterator;

function at(e) {
    return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = (lt && e[lt]) || e['@@iterator'])
          ? e
          : null;
}

function ot(e) {
    if (void 0 === rt)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            rt = (t && t[1]) || '';
        }
    return '\n' + rt + e;
}
var ut = !1;

function it(e, t) {
    if (!e || ut) return '';
    ut = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                    set: function () {
                        throw Error();
                    },
                }),
                'object' == typeof Reflect && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (i) {
                    var r = i;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (i) {
                    r = i;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (i) {
                r = i;
            }
            e();
        }
    } catch (i) {
        if (i && r && 'string' == typeof i.stack) {
            for (
                var l = i.stack.split('\n'), a = r.stack.split('\n'), o = l.length - 1, u = a.length - 1;
                1 <= o && 0 <= u && l[o] !== a[u];

            )
                u--;
            for (; 1 <= o && 0 <= u; o--, u--)
                if (l[o] !== a[u]) {
                    if (1 !== o || 1 !== u)
                        do {
                            if ((o--, 0 > --u || l[o] !== a[u])) return '\n' + l[o].replace(' at new ', ' at ');
                        } while (1 <= o && 0 <= u);
                    break;
                }
        }
    } finally {
        (ut = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? ot(e) : '';
}

function st(e) {
    switch (e.tag) {
        case 5:
            return ot(e.type);
        case 16:
            return ot('Lazy');
        case 13:
            return ot('Suspense');
        case 19:
            return ot('SuspenseList');
        case 0:
        case 2:
        case 15:
            return (e = it(e.type, !1));
        case 11:
            return (e = it(e.type.render, !1));
        case 22:
            return (e = it(e.type._render, !1));
        case 1:
            return (e = it(e.type, !0));
        default:
            return '';
    }
}

function ct(e) {
    if (null == e) return null;
    if ('function' == typeof e) return e.displayName || e.name || null;
    if ('string' == typeof e) return e;
    switch (e) {
        case Ve:
            return 'Fragment';
        case Ae:
            return 'Portal';
        case We:
            return 'Profiler';
        case Be:
            return 'StrictMode';
        case qe:
            return 'Suspense';
        case Ke:
            return 'SuspenseList';
    }
    if ('object' == typeof e)
        switch (e.$$typeof) {
            case He:
                return (e.displayName || 'Context') + '.Consumer';
            case $e:
                return (e._context.displayName || 'Context') + '.Provider';
            case Qe:
                var t = e.render;
                return (
                    (t = t.displayName || t.name || ''),
                    e.displayName || ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
                );
            case Ye:
                return ct(e.type);
            case Ge:
                return ct(e._render);
            case Xe:
                (t = e._payload), (e = e._init);
                try {
                    return ct(e(t));
                } catch (n) {}
        }
    return null;
}

function ft(e) {
    switch (typeof e) {
        case 'boolean':
        case 'number':
        case 'object':
        case 'string':
        case 'undefined':
            return e;
        default:
            return '';
    }
}

function dt(e) {
    var t = e.type;
    return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
}

function pt(e) {
    e._valueTracker ||
        (e._valueTracker = (function (e) {
            var t = dt(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== n && 'function' == typeof n.get && 'function' == typeof n.set) {
                var l = n.get,
                    a = n.set;
                return (
                    Object.defineProperty(e, t, {
                        configurable: !0,
                        get: function () {
                            return l.call(this);
                        },
                        set: function (e) {
                            (r = '' + e), a.call(this, e);
                        },
                    }),
                    Object.defineProperty(e, t, {
                        enumerable: n.enumerable,
                    }),
                    {
                        getValue: function () {
                            return r;
                        },
                        setValue: function (e) {
                            r = '' + e;
                        },
                        stopTracking: function () {
                            (e._valueTracker = null), delete e[t];
                        },
                    }
                );
            }
        })(e));
}

function ht(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = '';
    return e && (r = dt(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0);
}

function mt(e) {
    if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
    try {
        return e.activeElement || e.body;
    } catch (t) {
        return e.body;
    }
}

function vt(e, t) {
    var n = t.checked;
    return ke({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
    });
}

function gt(e, t) {
    var n = null == t.defaultValue ? '' : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
    (n = ft(null != t.value ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
        });
}

function yt(e, t) {
    null != (t = t.checked) && Fe(e, 'checked', t, !1);
}

function bt(e, t) {
    yt(e, t);
    var n = ft(t.value),
        r = t.type;
    if (null != n)
        'number' === r
            ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
    else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
    t.hasOwnProperty('value')
        ? kt(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && kt(e, t.type, ft(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
}

function wt(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type;
        if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return;
        (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    '' !== (n = e.name) && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        '' !== n && (e.name = n);
}

function kt(e, t, n) {
    ('number' === t && mt(e.ownerDocument) === e) ||
        (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}

function Et(e, t) {
    return (
        (e = ke(
            {
                children: void 0,
            },
            t
        )),
        (t = (function (e) {
            var t = '';
            return (
                we.Children.forEach(e, function (e) {
                    null != e && (t += e);
                }),
                t
            );
        })(t.children)) && (e.children = t),
        e
    );
}

function St(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            (l = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== l && (e[n].selected = l),
                l && r && (e[n].defaultSelected = !0);
    } else {
        for (n = '' + ft(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) return (e[l].selected = !0), void (r && (e[l].defaultSelected = !0));
            null !== t || e[l].disabled || (t = e[l]);
        }
        null !== t && (t.selected = !0);
    }
}

function xt(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(Se(91));
    return ke({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: '' + e._wrapperState.initialValue,
    });
}

function _t(e, t) {
    var n = t.value;
    if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(Se(92));
            if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(Se(93));
                n = n[0];
            }
            t = n;
        }
        null == t && (t = ''), (n = t);
    }
    e._wrapperState = {
        initialValue: ft(n),
    };
}

function Ct(e, t) {
    var n = ft(t.value),
        r = ft(t.defaultValue);
    null != n &&
        ((n = '' + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = '' + r);
}

function Pt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
}
var Nt = 'http://www.w3.org/1999/xhtml',
    Tt = 'http://www.w3.org/2000/svg';

function Ot(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}

function zt(e, t) {
    return null == e || 'http://www.w3.org/1999/xhtml' === e
        ? Ot(t)
        : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e;
}
var Lt,
    Mt,
    Rt =
        ((Mt = function (e, t) {
            if (e.namespaceURI !== Tt || 'innerHTML' in e) e.innerHTML = t;
            else {
                for (
                    (Lt = Lt || document.createElement('div')).innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                        t = Lt.firstChild;
                    e.firstChild;

                )
                    e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
        }),
        'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return Mt(e, t);
                  });
              }
            : Mt);

function Dt(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
    }
    e.textContent = t;
}
var It = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    Ft = ['Webkit', 'ms', 'Moz', 'O'];

function Ut(e, t, n) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n || 'number' != typeof t || 0 === t || (It.hasOwnProperty(e) && It[e])
          ? ('' + t).trim()
          : t + 'px';
}

function jt(e, t) {
    for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf('--'),
                l = Ut(n, t[n], r);
            'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
        }
}
Object.keys(It).forEach(function (e) {
    Ft.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (It[t] = It[e]);
    });
});
var At = ke(
    {
        menuitem: !0,
    },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);

function Vt(e, t) {
    if (t) {
        if (At[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(Se(137, e));
        if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(Se(60));
            if ('object' != typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
                throw Error(Se(61));
        }
        if (null != t.style && 'object' != typeof t.style) throw Error(Se(62));
    }
}

function Bt(e, t) {
    if (-1 === e.indexOf('-')) return 'string' == typeof t.is;
    switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
            return !1;
        default:
            return !0;
    }
}

function Wt(e) {
    return (
        (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
    );
}
var $t = null,
    Ht = null,
    Qt = null;

function qt(e) {
    if ((e = wa(e))) {
        if ('function' != typeof $t) throw Error(Se(280));
        var t = e.stateNode;
        t && ((t = Ea(t)), $t(e.stateNode, e.type, t));
    }
}

function Kt(e) {
    Ht ? (Qt ? Qt.push(e) : (Qt = [e])) : (Ht = e);
}

function Yt() {
    if (Ht) {
        var e = Ht,
            t = Qt;
        if (((Qt = Ht = null), qt(e), t)) for (e = 0; e < t.length; e++) qt(t[e]);
    }
}

function Xt(e, t) {
    return e(t);
}

function Gt(e, t, n, r, l) {
    return e(t, n, r, l);
}

function Zt() {}
var Jt = Xt,
    en = !1,
    tn = !1;

function nn() {
    (null === Ht && null === Qt) || (Zt(), Yt());
}

function rn(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = Ea(n);
    if (null === r) return null;
    n = r[t];
    e: switch (t) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
            (r = !r.disabled) ||
                (r = !('button' === (e = e.type) || 'input' === e || 'select' === e || 'textarea' === e)),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && 'function' != typeof n) throw Error(Se(231, t, typeof n));
    return n;
}
var ln = !1;
if (Ne)
    try {
        var an = {};
        Object.defineProperty(an, 'passive', {
            get: function () {
                ln = !0;
            },
        }),
            window.addEventListener('test', an, an),
            window.removeEventListener('test', an, an);
    } catch (Mt) {
        ln = !1;
    }

function on(e, t, n, r, l, a, o, u, i) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s);
    } catch (c) {
        this.onError(c);
    }
}
var un = !1,
    sn = null,
    cn = !1,
    fn = null,
    dn = {
        onError: function (e) {
            (un = !0), (sn = e);
        },
    };

function pn(e, t, n, r, l, a, o, u, i) {
    (un = !1), (sn = null), on.apply(dn, arguments);
}

function hn(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do {
            !!(1026 & (t = e).flags) && (n = t.return), (e = t.return);
        } while (e);
    }
    return 3 === t.tag ? n : null;
}

function mn(e) {
    if (13 === e.tag) {
        var t = e.memoizedState;
        if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
    }
    return null;
}

function vn(e) {
    if (hn(e) !== e) throw Error(Se(188));
}

function gn(e) {
    if (
        ((e = (function (e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = hn(e))) throw Error(Se(188));
                return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
                var l = n.return;
                if (null === l) break;
                var a = l.alternate;
                if (null === a) {
                    if (null !== (r = l.return)) {
                        n = r;
                        continue;
                    }
                    break;
                }
                if (l.child === a.child) {
                    for (a = l.child; a; ) {
                        if (a === n) return vn(l), e;
                        if (a === r) return vn(l), t;
                        a = a.sibling;
                    }
                    throw Error(Se(188));
                }
                if (n.return !== r.return) (n = l), (r = a);
                else {
                    for (var o = !1, u = l.child; u; ) {
                        if (u === n) {
                            (o = !0), (n = l), (r = a);
                            break;
                        }
                        if (u === r) {
                            (o = !0), (r = l), (n = a);
                            break;
                        }
                        u = u.sibling;
                    }
                    if (!o) {
                        for (u = a.child; u; ) {
                            if (u === n) {
                                (o = !0), (n = a), (r = l);
                                break;
                            }
                            if (u === r) {
                                (o = !0), (r = a), (n = l);
                                break;
                            }
                            u = u.sibling;
                        }
                        if (!o) throw Error(Se(189));
                    }
                }
                if (n.alternate !== r) throw Error(Se(190));
            }
            if (3 !== n.tag) throw Error(Se(188));
            return n.stateNode.current === n ? e : t;
        })(e)),
        !e)
    )
        return null;
    for (var t = e; ; ) {
        if (5 === t.tag || 6 === t.tag) return t;
        if (t.child) (t.child.return = t), (t = t.child);
        else {
            if (t === e) break;
            for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return null;
}

function yn(e, t) {
    for (var n = e.alternate; null !== t; ) {
        if (t === e || t === n) return !0;
        t = t.return;
    }
    return !1;
}
var bn,
    wn,
    kn,
    En,
    Sn = !1,
    xn = [],
    _n = null,
    Cn = null,
    Pn = null,
    Nn = new Map(),
    Tn = new Map(),
    On = [],
    zn =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' '
        );

function Ln(e, t, n, r, l) {
    return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: 16 | n,
        nativeEvent: l,
        targetContainers: [r],
    };
}

function Mn(e, t) {
    switch (e) {
        case 'focusin':
        case 'focusout':
            _n = null;
            break;
        case 'dragenter':
        case 'dragleave':
            Cn = null;
            break;
        case 'mouseover':
        case 'mouseout':
            Pn = null;
            break;
        case 'pointerover':
        case 'pointerout':
            Nn.delete(t.pointerId);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            Tn.delete(t.pointerId);
    }
}

function Rn(e, t, n, r, l, a) {
    return null === e || e.nativeEvent !== a
        ? ((e = Ln(t, n, r, l, a)), null !== t && null !== (t = wa(t)) && wn(t), e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== l && -1 === t.indexOf(l) && t.push(l), e);
}

function Dn(e) {
    var t = ba(e.target);
    if (null !== t) {
        var n = hn(t);
        if (null !== n)
            if (13 === (t = n.tag)) {
                if (null !== (t = mn(n)))
                    return (
                        (e.blockedOn = t),
                        void En(e.lanePriority, function () {
                            Ee.unstable_runWithPriority(e.priority, function () {
                                kn(n);
                            });
                        })
                    );
            } else if (3 === t && n.stateNode.hydrate)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
}

function In(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = gr(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) return null !== (t = wa(n)) && wn(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}

function Fn(e, t, n) {
    In(e) && n.delete(t);
}

function Un() {
    for (Sn = !1; 0 < xn.length; ) {
        var e = xn[0];
        if (null !== e.blockedOn) {
            null !== (e = wa(e.blockedOn)) && bn(e);
            break;
        }
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = gr(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) {
                e.blockedOn = n;
                break;
            }
            t.shift();
        }
        null === e.blockedOn && xn.shift();
    }
    null !== _n && In(_n) && (_n = null),
        null !== Cn && In(Cn) && (Cn = null),
        null !== Pn && In(Pn) && (Pn = null),
        Nn.forEach(Fn),
        Tn.forEach(Fn);
}

function jn(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), Sn || ((Sn = !0), Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, Un)));
}

function An(e) {
    function t(t) {
        return jn(t, e);
    }
    if (0 < xn.length) {
        jn(xn[0], e);
        for (var n = 1; n < xn.length; n++) {
            var r = xn[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        null !== _n && jn(_n, e),
            null !== Cn && jn(Cn, e),
            null !== Pn && jn(Pn, e),
            Nn.forEach(t),
            Tn.forEach(t),
            n = 0;
        n < On.length;
        n++
    )
        (r = On[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < On.length && null === (n = On[0]).blockedOn; ) Dn(n), null === n.blockedOn && On.shift();
}

function Vn(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var Bn = {
        animationend: Vn('Animation', 'AnimationEnd'),
        animationiteration: Vn('Animation', 'AnimationIteration'),
        animationstart: Vn('Animation', 'AnimationStart'),
        transitionend: Vn('Transition', 'TransitionEnd'),
    },
    Wn = {},
    $n = {};

function Hn(e) {
    if (Wn[e]) return Wn[e];
    if (!Bn[e]) return e;
    var t,
        n = Bn[e];
    for (t in n) if (n.hasOwnProperty(t) && t in $n) return (Wn[e] = n[t]);
    return e;
}
Ne &&
    (($n = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete Bn.animationend.animation, delete Bn.animationiteration.animation, delete Bn.animationstart.animation),
    'TransitionEvent' in window || delete Bn.transitionend.transition);
var Qn = Hn('animationend'),
    qn = Hn('animationiteration'),
    Kn = Hn('animationstart'),
    Yn = Hn('transitionend'),
    Xn = new Map(),
    Gn = new Map(),
    Zn = [
        'abort',
        'abort',
        Qn,
        'animationEnd',
        qn,
        'animationIteration',
        Kn,
        'animationStart',
        'canplay',
        'canPlay',
        'canplaythrough',
        'canPlayThrough',
        'durationchange',
        'durationChange',
        'emptied',
        'emptied',
        'encrypted',
        'encrypted',
        'ended',
        'ended',
        'error',
        'error',
        'gotpointercapture',
        'gotPointerCapture',
        'load',
        'load',
        'loadeddata',
        'loadedData',
        'loadedmetadata',
        'loadedMetadata',
        'loadstart',
        'loadStart',
        'lostpointercapture',
        'lostPointerCapture',
        'playing',
        'playing',
        'progress',
        'progress',
        'seeking',
        'seeking',
        'stalled',
        'stalled',
        'suspend',
        'suspend',
        'timeupdate',
        'timeUpdate',
        Yn,
        'transitionEnd',
        'waiting',
        'waiting',
    ];

function Jn(e, t) {
    for (var n = 0; n < e.length; n += 2) {
        var r = e[n],
            l = e[n + 1];
        (l = 'on' + (l[0].toUpperCase() + l.slice(1))), Gn.set(r, t), Xn.set(r, l), Ce(l, [r]);
    }
}
(0, Ee.unstable_now)();
var er = 8;

function tr(e) {
    if (1 & e) return (er = 15), 1;
    if (2 & e) return (er = 14), 2;
    if (4 & e) return (er = 13), 4;
    var t = 24 & e;
    return 0 !== t
        ? ((er = 12), t)
        : 32 & e
          ? ((er = 11), 32)
          : 0 !== (t = 192 & e)
            ? ((er = 10), t)
            : 256 & e
              ? ((er = 9), 256)
              : 0 !== (t = 3584 & e)
                ? ((er = 8), t)
                : 4096 & e
                  ? ((er = 7), 4096)
                  : 0 !== (t = 4186112 & e)
                    ? ((er = 6), t)
                    : 0 !== (t = 62914560 & e)
                      ? ((er = 5), t)
                      : 67108864 & e
                        ? ((er = 4), 67108864)
                        : 134217728 & e
                          ? ((er = 3), 134217728)
                          : 0 !== (t = 805306368 & e)
                            ? ((er = 2), t)
                            : 1073741824 & e
                              ? ((er = 1), 1073741824)
                              : ((er = 8), e);
}

function nr(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return (er = 0);
    var r = 0,
        l = 0,
        a = e.expiredLanes,
        o = e.suspendedLanes,
        u = e.pingedLanes;
    if (0 !== a) (r = a), (l = er = 15);
    else if (0 !== (a = 134217727 & n)) {
        var i = a & ~o;
        0 !== i ? ((r = tr(i)), (l = er)) : 0 !== (u &= a) && ((r = tr(u)), (l = er));
    } else 0 !== (a = n & ~o) ? ((r = tr(a)), (l = er)) : 0 !== u && ((r = tr(u)), (l = er));
    if (0 === r) return 0;
    if (((r = n & (((0 > (r = 31 - ir(r)) ? 0 : 1 << r) << 1) - 1)), 0 !== t && t !== r && 0 === (t & o))) {
        if ((tr(t), l <= er)) return t;
        er = l;
    }
    if (0 !== (t = e.entangledLanes))
        for (e = e.entanglements, t &= r; 0 < t; ) (l = 1 << (n = 31 - ir(t))), (r |= e[n]), (t &= ~l);
    return r;
}

function rr(e) {
    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
}

function lr(e, t) {
    switch (e) {
        case 15:
            return 1;
        case 14:
            return 2;
        case 12:
            return 0 === (e = ar(24 & ~t)) ? lr(10, t) : e;
        case 10:
            return 0 === (e = ar(192 & ~t)) ? lr(8, t) : e;
        case 8:
            return 0 === (e = ar(3584 & ~t)) && 0 === (e = ar(4186112 & ~t)) && (e = 512), e;
        case 2:
            return 0 === (t = ar(805306368 & ~t)) && (t = 268435456), t;
    }
    throw Error(Se(358, e));
}

function ar(e) {
    return e & -e;
}

function or(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}

function ur(e, t, n) {
    e.pendingLanes |= t;
    var r = t - 1;
    (e.suspendedLanes &= r), (e.pingedLanes &= r), ((e = e.eventTimes)[(t = 31 - ir(t))] = n);
}
var ir = Math.clz32
        ? Math.clz32
        : function (e) {
              return 0 === e ? 32 : (31 - ((sr(e) / cr) | 0)) | 0;
          },
    sr = Math.log,
    cr = Math.LN2;
var fr = Ee.unstable_UserBlockingPriority,
    dr = Ee.unstable_runWithPriority,
    pr = !0;

function hr(e, t, n, r) {
    en || Zt();
    var l = vr,
        a = en;
    en = !0;
    try {
        Gt(l, e, t, n, r);
    } finally {
        (en = a) || nn();
    }
}

function mr(e, t, n, r) {
    dr(fr, vr.bind(null, e, t, n, r));
}

function vr(e, t, n, r) {
    var l;
    if (pr)
        if ((l = !(4 & t)) && 0 < xn.length && -1 < zn.indexOf(e)) (e = Ln(null, e, t, n, r)), xn.push(e);
        else {
            var a = gr(e, t, n, r);
            if (null === a) l && Mn(e, r);
            else {
                if (l) {
                    if (-1 < zn.indexOf(e)) return (e = Ln(a, e, t, n, r)), void xn.push(e);
                    if (
                        (function (e, t, n, r, l) {
                            switch (t) {
                                case 'focusin':
                                    return (_n = Rn(_n, e, t, n, r, l)), !0;
                                case 'dragenter':
                                    return (Cn = Rn(Cn, e, t, n, r, l)), !0;
                                case 'mouseover':
                                    return (Pn = Rn(Pn, e, t, n, r, l)), !0;
                                case 'pointerover':
                                    var a = l.pointerId;
                                    return Nn.set(a, Rn(Nn.get(a) || null, e, t, n, r, l)), !0;
                                case 'gotpointercapture':
                                    return (a = l.pointerId), Tn.set(a, Rn(Tn.get(a) || null, e, t, n, r, l)), !0;
                            }
                            return !1;
                        })(a, e, t, n, r)
                    )
                        return;
                    Mn(e, r);
                }
                Zl(e, t, r, null, n);
            }
        }
}

function gr(e, t, n, r) {
    var l = Wt(r);
    if (null !== (l = ba(l))) {
        var a = hn(l);
        if (null === a) l = null;
        else {
            var o = a.tag;
            if (13 === o) {
                if (null !== (l = mn(a))) return l;
                l = null;
            } else if (3 === o) {
                if (a.stateNode.hydrate) return 3 === a.tag ? a.stateNode.containerInfo : null;
                l = null;
            } else a !== l && (l = null);
        }
    }
    return Zl(e, t, r, l, n), null;
}
var yr = null,
    br = null,
    wr = null;

function kr() {
    if (wr) return wr;
    var e,
        t,
        n = br,
        r = n.length,
        l = 'value' in yr ? yr.value : yr.textContent,
        a = l.length;
    for (e = 0; e < r && n[e] === l[e]; e++);
    var o = r - e;
    for (t = 1; t <= o && n[r - t] === l[a - t]; t++);
    return (wr = l.slice(e, 1 < t ? 1 - t : void 0));
}

function Er(e) {
    var t = e.keyCode;
    return (
        'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
    );
}

function Sr() {
    return !0;
}

function xr() {
    return !1;
}

function _r(e) {
    function t(t, n, r, l, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = l),
        (this.target = a),
        (this.currentTarget = null),
        e))
            e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(l) : l[o]));
        return (
            (this.isDefaultPrevented = (null != l.defaultPrevented ? l.defaultPrevented : !1 === l.returnValue)
                ? Sr
                : xr),
            (this.isPropagationStopped = xr),
            this
        );
    }
    return (
        ke(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                    (e.preventDefault ? e.preventDefault() : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
                    (this.isDefaultPrevented = Sr));
            },
            stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                    (e.stopPropagation
                        ? e.stopPropagation()
                        : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
                    (this.isPropagationStopped = Sr));
            },
            persist: function () {},
            isPersistent: Sr,
        }),
        t
    );
}
var Cr,
    Pr,
    Nr,
    Tr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Or = _r(Tr),
    zr = ke({}, Tr, {
        view: 0,
        detail: 0,
    }),
    Lr = _r(zr),
    Mr = ke({}, zr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Hr,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return 'movementX' in e
                ? e.movementX
                : (e !== Nr &&
                      (Nr && 'mousemove' === e.type
                          ? ((Cr = e.screenX - Nr.screenX), (Pr = e.screenY - Nr.screenY))
                          : (Pr = Cr = 0),
                      (Nr = e)),
                  Cr);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : Pr;
        },
    }),
    Rr = _r(Mr),
    Dr = _r(
        ke({}, Mr, {
            dataTransfer: 0,
        })
    ),
    Ir = _r(
        ke({}, zr, {
            relatedTarget: 0,
        })
    ),
    Fr = _r(
        ke({}, Tr, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0,
        })
    ),
    Ur = ke({}, Tr, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    jr = _r(Ur),
    Ar = _r(
        ke({}, Tr, {
            data: 0,
        })
    ),
    Vr = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
    },
    Br = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
    },
    Wr = {
        Alt: 'altKey',
        Control: 'ctrlKey',
        Meta: 'metaKey',
        Shift: 'shiftKey',
    };

function $r(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = Wr[e]) && !!t[e];
}

function Hr() {
    return $r;
}
var Qr = ke({}, zr, {
        key: function (e) {
            if (e.key) {
                var t = Vr[e.key] || e.key;
                if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
                ? 13 === (e = Er(e))
                    ? 'Enter'
                    : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? Br[e.keyCode] || 'Unidentified'
                  : '';
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Hr,
        charCode: function (e) {
            return 'keypress' === e.type ? Er(e) : 0;
        },
        keyCode: function (e) {
            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
        which: function (e) {
            return 'keypress' === e.type ? Er(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
    }),
    qr = _r(Qr),
    Kr = _r(
        ke({}, Mr, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
        })
    ),
    Yr = _r(
        ke({}, zr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Hr,
        })
    ),
    Xr = _r(
        ke({}, Tr, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0,
        })
    ),
    Gr = ke({}, Mr, {
        deltaX: function (e) {
            return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                  ? -e.wheelDeltaY
                  : 'wheelDelta' in e
                    ? -e.wheelDelta
                    : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    Zr = _r(Gr),
    Jr = [9, 13, 27, 32],
    el = Ne && 'CompositionEvent' in window,
    tl = null;
Ne && 'documentMode' in document && (tl = document.documentMode);
var nl = Ne && 'TextEvent' in window && !tl,
    rl = Ne && (!el || (tl && 8 < tl && 11 >= tl)),
    ll = String.fromCharCode(32),
    al = !1;

function ol(e, t) {
    switch (e) {
        case 'keyup':
            return -1 !== Jr.indexOf(t.keyCode);
        case 'keydown':
            return 229 !== t.keyCode;
        case 'keypress':
        case 'mousedown':
        case 'focusout':
            return !0;
        default:
            return !1;
    }
}

function ul(e) {
    return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
}
var il = !1;
var sl = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};

function cl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return 'input' === t ? !!sl[e.type] : 'textarea' === t;
}

function fl(e, t, n, r) {
    Kt(r),
        0 < (t = ea(t, 'onChange')).length &&
            ((n = new Or('onChange', 'change', null, n, r)),
            e.push({
                event: n,
                listeners: t,
            }));
}
var dl = null,
    pl = null;

function hl(e) {
    Ql(e, 0);
}

function ml(e) {
    if (ht(ka(e))) return e;
}

function vl(e, t) {
    if ('change' === e) return t;
}
var gl = !1;
if (Ne) {
    var yl;
    if (Ne) {
        var bl = 'oninput' in document;
        if (!bl) {
            var wl = document.createElement('div');
            wl.setAttribute('oninput', 'return;'), (bl = 'function' == typeof wl.oninput);
        }
        yl = bl;
    } else yl = !1;
    gl = yl && (!document.documentMode || 9 < document.documentMode);
}

function kl() {
    dl && (dl.detachEvent('onpropertychange', El), (pl = dl = null));
}

function El(e) {
    if ('value' === e.propertyName && ml(pl)) {
        var t = [];
        if ((fl(t, pl, e, Wt(e)), (e = hl), en)) e(t);
        else {
            en = !0;
            try {
                Xt(e, t);
            } finally {
                (en = !1), nn();
            }
        }
    }
}

function Sl(e, t, n) {
    'focusin' === e ? (kl(), (pl = n), (dl = t).attachEvent('onpropertychange', El)) : 'focusout' === e && kl();
}

function xl(e) {
    if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return ml(pl);
}

function _l(e, t) {
    if ('click' === e) return ml(t);
}

function Cl(e, t) {
    if ('input' === e || 'change' === e) return ml(t);
}
var Pl =
        'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    Nl = Object.prototype.hasOwnProperty;

function Tl(e, t) {
    if (Pl(e, t)) return !0;
    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) if (!Nl.call(t, n[r]) || !Pl(e[n[r]], t[n[r]])) return !1;
    return !0;
}

function Ol(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}

function zl(e, t) {
    var n,
        r = Ol(e);
    for (e = 0; r; ) {
        if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t))
                return {
                    node: r,
                    offset: t - e,
                };
            e = n;
        }
        e: {
            for (; r; ) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e;
                }
                r = r.parentNode;
            }
            r = void 0;
        }
        r = Ol(r);
    }
}

function Ll(e, t) {
    return (
        !(!e || !t) &&
        (e === t ||
            ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                    ? Ll(e, t.parentNode)
                    : 'contains' in e
                      ? e.contains(t)
                      : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
    );
}

function Ml() {
    for (var e = window, t = mt(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = 'string' == typeof t.contentWindow.location.href;
        } catch (r) {
            n = !1;
        }
        if (!n) break;
        t = mt((e = t.contentWindow).document);
    }
    return t;
}

function Rl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        (('input' === t &&
            ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
            'textarea' === t ||
            'true' === e.contentEditable)
    );
}
var Dl = Ne && 'documentMode' in document && 11 >= document.documentMode,
    Il = null,
    Fl = null,
    Ul = null,
    jl = !1;

function Al(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    jl ||
        null == Il ||
        Il !== mt(r) ||
        ('selectionStart' in (r = Il) && Rl(r)
            ? (r = {
                  start: r.selectionStart,
                  end: r.selectionEnd,
              })
            : (r = {
                  anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                      .anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              }),
        (Ul && Tl(Ul, r)) ||
            ((Ul = r),
            0 < (r = ea(Fl, 'onSelect')).length &&
                ((t = new Or('onSelect', 'select', null, t, n)),
                e.push({
                    event: t,
                    listeners: r,
                }),
                (t.target = Il))));
}
Jn(
    'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
        ' '
    ),
    0
),
    Jn(
        'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
            ' '
        ),
        1
    ),
    Jn(Zn, 2);
for (
    var Vl = 'change selectionchange textInput compositionstart compositionend compositionupdate'.split(' '), Bl = 0;
    Bl < Vl.length;
    Bl++
)
    Gn.set(Vl[Bl], 0);
Pe('onMouseEnter', ['mouseout', 'mouseover']),
    Pe('onMouseLeave', ['mouseout', 'mouseover']),
    Pe('onPointerEnter', ['pointerout', 'pointerover']),
    Pe('onPointerLeave', ['pointerout', 'pointerover']),
    Ce('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Ce('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    Ce('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Ce('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Ce('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    Ce('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Wl =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' '
        ),
    $l = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Wl));

function Hl(e, t, n) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = n),
        (function (e, t, n, r, l, a, o, u, i) {
            if ((pn.apply(this, arguments), un)) {
                if (!un) throw Error(Se(198));
                var s = sn;
                (un = !1), (sn = null), cn || ((cn = !0), (fn = s));
            }
        })(r, t, void 0, e),
        (e.currentTarget = null);
}

function Ql(e, t) {
    t = !!(4 & t);
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var a = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var u = r[o],
                        i = u.instance,
                        s = u.currentTarget;
                    if (((u = u.listener), i !== a && l.isPropagationStopped())) break e;
                    Hl(l, u, s), (a = i);
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (
                        ((i = (u = r[o]).instance),
                        (s = u.currentTarget),
                        (u = u.listener),
                        i !== a && l.isPropagationStopped())
                    )
                        break e;
                    Hl(l, u, s), (a = i);
                }
        }
    }
    if (cn) throw ((e = fn), (cn = !1), (fn = null), e);
}

function ql(e, t) {
    var n = Sa(t),
        r = e + '__bubble';
    n.has(r) || (Gl(t, e, 2, !1), n.add(r));
}
var Kl = '_reactListening' + Math.random().toString(36).slice(2);

function Yl(e) {
    e[Kl] ||
        ((e[Kl] = !0),
        xe.forEach(function (t) {
            $l.has(t) || Xl(t, !1, e, null), Xl(t, !0, e, null);
        }));
}

function Xl(e, t, n, r) {
    var l = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
        a = n;
    'selectionchange' === e && 9 !== n.nodeType && (a = n.ownerDocument);
    var o = Sa(a),
        u = e + '__' + (t ? 'capture' : 'bubble');
    o.has(u) || (t && (l |= 4), Gl(a, e, l, t), o.add(u));
}

function Gl(e, t, n, r) {
    var l = Gn.get(t);
    switch (void 0 === l ? 2 : l) {
        case 0:
            l = hr;
            break;
        case 1:
            l = mr;
            break;
        default:
            l = vr;
    }
    (n = l.bind(null, t, n, e)),
        (l = void 0),
        !ln || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (l = !0),
        r
            ? void 0 !== l
                ? e.addEventListener(t, n, {
                      capture: !0,
                      passive: l,
                  })
                : e.addEventListener(t, n, !0)
            : void 0 !== l
              ? e.addEventListener(t, n, {
                    passive: l,
                })
              : e.addEventListener(t, n, !1);
}

function Zl(e, t, n, r, l) {
    var a = r;
    if (!(1 & t || 2 & t || null === r))
        e: for (;;) {
            if (null === r) return;
            var o = r.tag;
            if (3 === o || 4 === o) {
                var u = r.stateNode.containerInfo;
                if (u === l || (8 === u.nodeType && u.parentNode === l)) break;
                if (4 === o)
                    for (o = r.return; null !== o; ) {
                        var i = o.tag;
                        if (
                            (3 === i || 4 === i) &&
                            ((i = o.stateNode.containerInfo) === l || (8 === i.nodeType && i.parentNode === l))
                        )
                            return;
                        o = o.return;
                    }
                for (; null !== u; ) {
                    if (null === (o = ba(u))) return;
                    if (5 === (i = o.tag) || 6 === i) {
                        r = a = o;
                        continue e;
                    }
                    u = u.parentNode;
                }
            }
            r = r.return;
        }
    !(function (e, t, n) {
        if (tn) return e(t, n);
        tn = !0;
        try {
            return Jt(e, t, n);
        } finally {
            (tn = !1), nn();
        }
    })(function () {
        var r = a,
            l = Wt(n),
            o = [];
        e: {
            var u = Xn.get(e);
            if (void 0 !== u) {
                var i = Or,
                    s = e;
                switch (e) {
                    case 'keypress':
                        if (0 === Er(n)) break e;
                    case 'keydown':
                    case 'keyup':
                        i = qr;
                        break;
                    case 'focusin':
                        (s = 'focus'), (i = Ir);
                        break;
                    case 'focusout':
                        (s = 'blur'), (i = Ir);
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        i = Ir;
                        break;
                    case 'click':
                        if (2 === n.button) break e;
                    case 'auxclick':
                    case 'dblclick':
                    case 'mousedown':
                    case 'mousemove':
                    case 'mouseup':
                    case 'mouseout':
                    case 'mouseover':
                    case 'contextmenu':
                        i = Rr;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        i = Dr;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        i = Yr;
                        break;
                    case Qn:
                    case qn:
                    case Kn:
                        i = Fr;
                        break;
                    case Yn:
                        i = Xr;
                        break;
                    case 'scroll':
                        i = Lr;
                        break;
                    case 'wheel':
                        i = Zr;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        i = jr;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        i = Kr;
                }
                var c = !!(4 & t),
                    f = !c && 'scroll' === e,
                    d = c ? (null !== u ? u + 'Capture' : null) : u;
                c = [];
                for (var p, h = r; null !== h; ) {
                    var m = (p = h).stateNode;
                    if (
                        (5 === p.tag &&
                            null !== m &&
                            ((p = m), null !== d && null != (m = rn(h, d)) && c.push(Jl(h, m, p))),
                        f)
                    )
                        break;
                    h = h.return;
                }
                0 < c.length &&
                    ((u = new i(u, s, null, n, l)),
                    o.push({
                        event: u,
                        listeners: c,
                    }));
            }
        }
        if (!(7 & t)) {
            if (
                ((i = 'mouseout' === e || 'pointerout' === e),
                (!(u = 'mouseover' === e || 'pointerover' === e) ||
                    16 & t ||
                    !(s = n.relatedTarget || n.fromElement) ||
                    (!ba(s) && !s[ga])) &&
                    (i || u) &&
                    ((u = l.window === l ? l : (u = l.ownerDocument) ? u.defaultView || u.parentWindow : window),
                    i
                        ? ((i = r),
                          null !== (s = (s = n.relatedTarget || n.toElement) ? ba(s) : null) &&
                              (s !== (f = hn(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                              (s = null))
                        : ((i = null), (s = r)),
                    i !== s))
            ) {
                if (
                    ((c = Rr),
                    (m = 'onMouseLeave'),
                    (d = 'onMouseEnter'),
                    (h = 'mouse'),
                    ('pointerout' !== e && 'pointerover' !== e) ||
                        ((c = Kr), (m = 'onPointerLeave'), (d = 'onPointerEnter'), (h = 'pointer')),
                    (f = null == i ? u : ka(i)),
                    (p = null == s ? u : ka(s)),
                    ((u = new c(m, h + 'leave', i, n, l)).target = f),
                    (u.relatedTarget = p),
                    (m = null),
                    ba(l) === r && (((c = new c(d, h + 'enter', s, n, l)).target = p), (c.relatedTarget = f), (m = c)),
                    (f = m),
                    i && s)
                )
                    e: {
                        for (d = s, h = 0, p = c = i; p; p = ta(p)) h++;
                        for (p = 0, m = d; m; m = ta(m)) p++;
                        for (; 0 < h - p; ) (c = ta(c)), h--;
                        for (; 0 < p - h; ) (d = ta(d)), p--;
                        for (; h--; ) {
                            if (c === d || (null !== d && c === d.alternate)) break e;
                            (c = ta(c)), (d = ta(d));
                        }
                        c = null;
                    }
                else c = null;
                null !== i && na(o, u, i, c, !1), null !== s && null !== f && na(o, f, s, c, !0);
            }
            if (
                'select' === (i = (u = r ? ka(r) : window).nodeName && u.nodeName.toLowerCase()) ||
                ('input' === i && 'file' === u.type)
            )
                var v = vl;
            else if (cl(u))
                if (gl) v = Cl;
                else {
                    v = xl;
                    var g = Sl;
                }
            else
                (i = u.nodeName) &&
                    'input' === i.toLowerCase() &&
                    ('checkbox' === u.type || 'radio' === u.type) &&
                    (v = _l);
            switch (
                (v && (v = v(e, r))
                    ? fl(o, v, n, l)
                    : (g && g(e, u, r),
                      'focusout' === e &&
                          (g = u._wrapperState) &&
                          g.controlled &&
                          'number' === u.type &&
                          kt(u, 'number', u.value)),
                (g = r ? ka(r) : window),
                e)
            ) {
                case 'focusin':
                    (cl(g) || 'true' === g.contentEditable) && ((Il = g), (Fl = r), (Ul = null));
                    break;
                case 'focusout':
                    Ul = Fl = Il = null;
                    break;
                case 'mousedown':
                    jl = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    (jl = !1), Al(o, n, l);
                    break;
                case 'selectionchange':
                    if (Dl) break;
                case 'keydown':
                case 'keyup':
                    Al(o, n, l);
            }
            var y;
            if (el)
                e: {
                    switch (e) {
                        case 'compositionstart':
                            var b = 'onCompositionStart';
                            break e;
                        case 'compositionend':
                            b = 'onCompositionEnd';
                            break e;
                        case 'compositionupdate':
                            b = 'onCompositionUpdate';
                            break e;
                    }
                    b = void 0;
                }
            else
                il
                    ? ol(e, n) && (b = 'onCompositionEnd')
                    : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
            b &&
                (rl &&
                    'ko' !== n.locale &&
                    (il || 'onCompositionStart' !== b
                        ? 'onCompositionEnd' === b && il && (y = kr())
                        : ((br = 'value' in (yr = l) ? yr.value : yr.textContent), (il = !0))),
                0 < (g = ea(r, b)).length &&
                    ((b = new Ar(b, e, null, n, l)),
                    o.push({
                        event: b,
                        listeners: g,
                    }),
                    y ? (b.data = y) : null !== (y = ul(n)) && (b.data = y))),
                (y = nl
                    ? (function (e, t) {
                          switch (e) {
                              case 'compositionend':
                                  return ul(t);
                              case 'keypress':
                                  return 32 !== t.which ? null : ((al = !0), ll);
                              case 'textInput':
                                  return (e = t.data) === ll && al ? null : e;
                              default:
                                  return null;
                          }
                      })(e, n)
                    : (function (e, t) {
                          if (il)
                              return 'compositionend' === e || (!el && ol(e, t))
                                  ? ((e = kr()), (wr = br = yr = null), (il = !1), e)
                                  : null;
                          switch (e) {
                              case 'paste':
                              default:
                                  return null;
                              case 'keypress':
                                  if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                                      if (t.char && 1 < t.char.length) return t.char;
                                      if (t.which) return String.fromCharCode(t.which);
                                  }
                                  return null;
                              case 'compositionend':
                                  return rl && 'ko' !== t.locale ? null : t.data;
                          }
                      })(e, n)) &&
                    0 < (r = ea(r, 'onBeforeInput')).length &&
                    ((l = new Ar('onBeforeInput', 'beforeinput', null, n, l)),
                    o.push({
                        event: l,
                        listeners: r,
                    }),
                    (l.data = y));
        }
        Ql(o, t);
    });
}

function Jl(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n,
    };
}

function ea(e, t) {
    for (var n = t + 'Capture', r = []; null !== e; ) {
        var l = e,
            a = l.stateNode;
        5 === l.tag &&
            null !== a &&
            ((l = a), null != (a = rn(e, n)) && r.unshift(Jl(e, a, l)), null != (a = rn(e, t)) && r.push(Jl(e, a, l))),
            (e = e.return);
    }
    return r;
}

function ta(e) {
    if (null === e) return null;
    do {
        e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
}

function na(e, t, n, r, l) {
    for (var a = t._reactName, o = []; null !== n && n !== r; ) {
        var u = n,
            i = u.alternate,
            s = u.stateNode;
        if (null !== i && i === r) break;
        5 === u.tag &&
            null !== s &&
            ((u = s),
            l
                ? null != (i = rn(n, a)) && o.unshift(Jl(n, i, u))
                : l || (null != (i = rn(n, a)) && o.push(Jl(n, i, u)))),
            (n = n.return);
    }
    0 !== o.length &&
        e.push({
            event: t,
            listeners: o,
        });
}

function ra() {}
var la = null,
    aa = null;

function oa(e, t) {
    switch (e) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
            return !!t.autoFocus;
    }
    return !1;
}

function ua(e, t) {
    return (
        'textarea' === e ||
        'option' === e ||
        'noscript' === e ||
        'string' == typeof t.children ||
        'number' == typeof t.children ||
        ('object' == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
    );
}
var ia = 'function' == typeof setTimeout ? setTimeout : void 0,
    sa = 'function' == typeof clearTimeout ? clearTimeout : void 0;

function ca(e) {
    1 === e.nodeType ? (e.textContent = '') : 9 === e.nodeType && null != (e = e.body) && (e.textContent = '');
}

function fa(e) {
    for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
    }
    return e;
}

function da(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (8 === e.nodeType) {
            var n = e.data;
            if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e;
                t--;
            } else '/$' === n && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var pa = 0;
var ha = Math.random().toString(36).slice(2),
    ma = '__reactFiber$' + ha,
    va = '__reactProps$' + ha,
    ga = '__reactContainer$' + ha,
    ya = '__reactEvents$' + ha;

function ba(e) {
    var t = e[ma];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[ga] || n[ma])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = da(e); null !== e; ) {
                    if ((n = e[ma])) return n;
                    e = da(e);
                }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}

function wa(e) {
    return !(e = e[ma] || e[ga]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
}

function ka(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(Se(33));
}

function Ea(e) {
    return e[va] || null;
}

function Sa(e) {
    var t = e[ya];
    return void 0 === t && (t = e[ya] = new Set()), t;
}
var xa = [],
    _a = -1;

function Ca(e) {
    return {
        current: e,
    };
}

function Pa(e) {
    0 > _a || ((e.current = xa[_a]), (xa[_a] = null), _a--);
}

function Na(e, t) {
    _a++, (xa[_a] = e.current), (e.current = t);
}
var Ta = {},
    Oa = Ca(Ta),
    za = Ca(!1),
    La = Ta;

function Ma(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ta;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l,
        a = {};
    for (l in n) a[l] = t[l];
    return (
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = a)),
        a
    );
}

function Ra(e) {
    return null != (e = e.childContextTypes);
}

function Da() {
    Pa(za), Pa(Oa);
}

function Ia(e, t, n) {
    if (Oa.current !== Ta) throw Error(Se(168));
    Na(Oa, t), Na(za, n);
}

function Fa(e, t, n) {
    var r = e.stateNode;
    if (((e = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
    for (var l in (r = r.getChildContext())) if (!(l in e)) throw Error(Se(108, ct(t) || 'Unknown', l));
    return ke({}, n, r);
}

function Ua(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ta),
        (La = Oa.current),
        Na(Oa, e),
        Na(za, za.current),
        !0
    );
}

function ja(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(Se(169));
    n ? ((e = Fa(e, t, La)), (r.__reactInternalMemoizedMergedChildContext = e), Pa(za), Pa(Oa), Na(Oa, e)) : Pa(za),
        Na(za, n);
}
var Aa = null,
    Va = null,
    Ba = Ee.unstable_runWithPriority,
    Wa = Ee.unstable_scheduleCallback,
    $a = Ee.unstable_cancelCallback,
    Ha = Ee.unstable_shouldYield,
    Qa = Ee.unstable_requestPaint,
    qa = Ee.unstable_now,
    Ka = Ee.unstable_getCurrentPriorityLevel,
    Ya = Ee.unstable_ImmediatePriority,
    Xa = Ee.unstable_UserBlockingPriority,
    Ga = Ee.unstable_NormalPriority,
    Za = Ee.unstable_LowPriority,
    Ja = Ee.unstable_IdlePriority,
    eo = {},
    to = void 0 !== Qa ? Qa : function () {},
    no = null,
    ro = null,
    lo = !1,
    ao = qa(),
    oo =
        1e4 > ao
            ? qa
            : function () {
                  return qa() - ao;
              };

function uo() {
    switch (Ka()) {
        case Ya:
            return 99;
        case Xa:
            return 98;
        case Ga:
            return 97;
        case Za:
            return 96;
        case Ja:
            return 95;
        default:
            throw Error(Se(332));
    }
}

function io(e) {
    switch (e) {
        case 99:
            return Ya;
        case 98:
            return Xa;
        case 97:
            return Ga;
        case 96:
            return Za;
        case 95:
            return Ja;
        default:
            throw Error(Se(332));
    }
}

function so(e, t) {
    return (e = io(e)), Ba(e, t);
}

function co(e, t, n) {
    return (e = io(e)), Wa(e, t, n);
}

function fo() {
    if (null !== ro) {
        var e = ro;
        (ro = null), $a(e);
    }
    po();
}

function po() {
    if (!lo && null !== no) {
        lo = !0;
        var e = 0;
        try {
            var t = no;
            so(99, function () {
                for (; e < t.length; e++) {
                    var n = t[e];
                    do {
                        n = n(!0);
                    } while (null !== n);
                }
            }),
                (no = null);
        } catch (n) {
            throw (null !== no && (no = no.slice(e + 1)), Wa(Ya, fo), n);
        } finally {
            lo = !1;
        }
    }
}
var ho = Ue.ReactCurrentBatchConfig;

function mo(e, t) {
    if (e && e.defaultProps) {
        for (var n in ((t = ke({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
        return t;
    }
    return t;
}
var vo = Ca(null),
    go = null,
    yo = null,
    bo = null;

function wo() {
    bo = yo = go = null;
}

function ko(e) {
    var t = vo.current;
    Pa(vo), (e.type._context._currentValue = t);
}

function Eo(e, t) {
    for (; null !== e; ) {
        var n = e.alternate;
        if ((e.childLanes & t) === t) {
            if (null === n || (n.childLanes & t) === t) break;
            n.childLanes |= t;
        } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
        e = e.return;
    }
}

function So(e, t) {
    (go = e),
        (bo = yo = null),
        null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 !== (e.lanes & t) && (ei = !0), (e.firstContext = null));
}

function xo(e, t) {
    if (bo !== e && !1 !== t && 0 !== t)
        if (
            (('number' == typeof t && 1073741823 !== t) || ((bo = e), (t = 1073741823)),
            (t = {
                context: e,
                observedBits: t,
                next: null,
            }),
            null === yo)
        ) {
            if (null === go) throw Error(Se(308));
            (yo = t),
                (go.dependencies = {
                    lanes: 0,
                    firstContext: t,
                    responders: null,
                });
        } else yo = yo.next = t;
    return e._currentValue;
}
var _o = !1;

function Co(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
        },
        effects: null,
    };
}

function Po(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}

function No(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}

function To(e, t) {
    if (null !== (e = e.updateQueue)) {
        var n = (e = e.shared).pending;
        null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
    }
}

function Oo(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
        var l = null,
            a = null;
        if (null !== (n = n.firstBaseUpdate)) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                null === a ? (l = a = o) : (a = a.next = o), (n = n.next);
            } while (null !== n);
            null === a ? (l = a = t) : (a = a.next = t);
        } else l = a = t;
        return (
            (n = {
                baseState: r.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
            }),
            void (e.updateQueue = n)
        );
    }
    null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}

function zo(e, t, n, r) {
    var l = e.updateQueue;
    _o = !1;
    var a = l.firstBaseUpdate,
        o = l.lastBaseUpdate,
        u = l.shared.pending;
    if (null !== u) {
        l.shared.pending = null;
        var i = u,
            s = i.next;
        (i.next = null), null === o ? (a = s) : (o.next = s), (o = i);
        var c = e.alternate;
        if (null !== c) {
            var f = (c = c.updateQueue).lastBaseUpdate;
            f !== o && (null === f ? (c.firstBaseUpdate = s) : (f.next = s), (c.lastBaseUpdate = i));
        }
    }
    if (null !== a) {
        for (f = l.baseState, o = 0, c = s = i = null; ; ) {
            u = a.lane;
            var d = a.eventTime;
            if ((r & u) === u) {
                null !== c &&
                    (c = c.next =
                        {
                            eventTime: d,
                            lane: 0,
                            tag: a.tag,
                            payload: a.payload,
                            callback: a.callback,
                            next: null,
                        });
                e: {
                    var p = e,
                        h = a;
                    switch (((u = t), (d = n), h.tag)) {
                        case 1:
                            if ('function' == typeof (p = h.payload)) {
                                f = p.call(d, f, u);
                                break e;
                            }
                            f = p;
                            break e;
                        case 3:
                            p.flags = (-4097 & p.flags) | 64;
                        case 0:
                            if (null == (u = 'function' == typeof (p = h.payload) ? p.call(d, f, u) : p)) break e;
                            f = ke({}, f, u);
                            break e;
                        case 2:
                            _o = !0;
                    }
                }
                null !== a.callback && ((e.flags |= 32), null === (u = l.effects) ? (l.effects = [a]) : u.push(a));
            } else
                (d = {
                    eventTime: d,
                    lane: u,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null,
                }),
                    null === c ? ((s = c = d), (i = f)) : (c = c.next = d),
                    (o |= u);
            if (null === (a = a.next)) {
                if (null === (u = l.shared.pending)) break;
                (a = u.next), (u.next = null), (l.lastBaseUpdate = u), (l.shared.pending = null);
            }
        }
        null === c && (i = f),
            (l.baseState = i),
            (l.firstBaseUpdate = s),
            (l.lastBaseUpdate = c),
            (as |= o),
            (e.lanes = o),
            (e.memoizedState = f);
    }
}

function Lo(e, t, n) {
    if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (null !== l) {
                if (((r.callback = null), (r = n), 'function' != typeof l)) throw Error(Se(191, l));
                l.call(r);
            }
        }
}
var Mo = new we.Component().refs;

function Ro(e, t, n, r) {
    (n = null == (n = n(r, (t = e.memoizedState))) ? t : ke({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n);
}
var Do = {
    isMounted: function (e) {
        return !!(e = e._reactInternals) && hn(e) === e;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Os(),
            l = zs(e),
            a = No(r, l);
        (a.payload = t), null != n && (a.callback = n), To(e, a), Ls(e, l, r);
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Os(),
            l = zs(e),
            a = No(r, l);
        (a.tag = 1), (a.payload = t), null != n && (a.callback = n), To(e, a), Ls(e, l, r);
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Os(),
            r = zs(e),
            l = No(n, r);
        (l.tag = 2), null != t && (l.callback = t), To(e, l), Ls(e, r, n);
    },
};

function Io(e, t, n, r, l, a, o) {
    return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, a, o)
        : !t.prototype || !t.prototype.isPureReactComponent || !Tl(n, r) || !Tl(l, a);
}

function Fo(e, t, n) {
    var r = !1,
        l = Ta,
        a = t.contextType;
    return (
        'object' == typeof a && null !== a
            ? (a = xo(a))
            : ((l = Ra(t) ? La : Oa.current), (a = (r = null != (r = t.contextTypes)) ? Ma(e, l) : Ta)),
        (t = new t(n, a)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = Do),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = l),
            (e.__reactInternalMemoizedMaskedChildContext = a)),
        t
    );
}

function Uo(e, t, n, r) {
    (e = t.state),
        'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Do.enqueueReplaceState(t, t.state, null);
}

function jo(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = Mo), Co(e);
    var a = t.contextType;
    'object' == typeof a && null !== a ? (l.context = xo(a)) : ((a = Ra(t) ? La : Oa.current), (l.context = Ma(e, a))),
        zo(e, n, l, r),
        (l.state = e.memoizedState),
        'function' == typeof (a = t.getDerivedStateFromProps) && (Ro(e, t, a, n), (l.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
            'function' == typeof l.getSnapshotBeforeUpdate ||
            ('function' != typeof l.UNSAFE_componentWillMount && 'function' != typeof l.componentWillMount) ||
            ((t = l.state),
            'function' == typeof l.componentWillMount && l.componentWillMount(),
            'function' == typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount(),
            t !== l.state && Do.enqueueReplaceState(l, l.state, null),
            zo(e, n, l, r),
            (l.state = e.memoizedState)),
        'function' == typeof l.componentDidMount && (e.flags |= 4);
}
var Ao = Array.isArray;

function Vo(e, t, n) {
    if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
        if (n._owner) {
            if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(Se(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(Se(147, e));
            var l = '' + e;
            return null !== t && null !== t.ref && 'function' == typeof t.ref && t.ref._stringRef === l
                ? t.ref
                : (((t = function (e) {
                      var t = r.refs;
                      t === Mo && (t = r.refs = {}), null === e ? delete t[l] : (t[l] = e);
                  })._stringRef = l),
                  t);
        }
        if ('string' != typeof e) throw Error(Se(284));
        if (!n._owner) throw Error(Se(290, e));
    }
    return e;
}

function Bo(e, t) {
    if ('textarea' !== e.type)
        throw Error(
            Se(
                31,
                '[object Object]' === Object.prototype.toString.call(t)
                    ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                    : t
            )
        );
}

function Wo(e) {
    function t(t, n) {
        if (e) {
            var r = t.lastEffect;
            null !== r ? ((r.nextEffect = n), (t.lastEffect = n)) : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.flags = 8);
        }
    }

    function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) t(n, r), (r = r.sibling);
        return null;
    }

    function r(e, t) {
        for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
        return e;
    }

    function l(e, t) {
        return ((e = cc(e, t)).index = 0), (e.sibling = null), e;
    }

    function a(t, n, r) {
        return (
            (t.index = r),
            e ? (null !== (r = t.alternate) ? ((r = r.index) < n ? ((t.flags = 2), n) : r) : ((t.flags = 2), n)) : n
        );
    }

    function o(t) {
        return e && null === t.alternate && (t.flags = 2), t;
    }

    function u(e, t, n, r) {
        return null === t || 6 !== t.tag ? (((t = hc(n, e.mode, r)).return = e), t) : (((t = l(t, n)).return = e), t);
    }

    function i(e, t, n, r) {
        return null !== t && t.elementType === n.type
            ? (((r = l(t, n.props)).ref = Vo(e, t, n)), (r.return = e), r)
            : (((r = fc(n.type, n.key, n.props, null, e.mode, r)).ref = Vo(e, t, n)), (r.return = e), r);
    }

    function s(e, t, n, r) {
        return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = mc(n, e.mode, r)).return = e), t)
            : (((t = l(t, n.children || [])).return = e), t);
    }

    function c(e, t, n, r, a) {
        return null === t || 7 !== t.tag
            ? (((t = dc(n, e.mode, r, a)).return = e), t)
            : (((t = l(t, n)).return = e), t);
    }

    function f(e, t, n) {
        if ('string' == typeof t || 'number' == typeof t) return ((t = hc('' + t, e.mode, n)).return = e), t;
        if ('object' == typeof t && null !== t) {
            switch (t.$$typeof) {
                case je:
                    return ((n = fc(t.type, t.key, t.props, null, e.mode, n)).ref = Vo(e, null, t)), (n.return = e), n;
                case Ae:
                    return ((t = mc(t, e.mode, n)).return = e), t;
            }
            if (Ao(t) || at(t)) return ((t = dc(t, e.mode, n, null)).return = e), t;
            Bo(e, t);
        }
        return null;
    }

    function d(e, t, n, r) {
        var l = null !== t ? t.key : null;
        if ('string' == typeof n || 'number' == typeof n) return null !== l ? null : u(e, t, '' + n, r);
        if ('object' == typeof n && null !== n) {
            switch (n.$$typeof) {
                case je:
                    return n.key === l ? (n.type === Ve ? c(e, t, n.props.children, r, l) : i(e, t, n, r)) : null;
                case Ae:
                    return n.key === l ? s(e, t, n, r) : null;
            }
            if (Ao(n) || at(n)) return null !== l ? null : c(e, t, n, r, null);
            Bo(e, n);
        }
        return null;
    }

    function p(e, t, n, r, l) {
        if ('string' == typeof r || 'number' == typeof r) return u(t, (e = e.get(n) || null), '' + r, l);
        if ('object' == typeof r && null !== r) {
            switch (r.$$typeof) {
                case je:
                    return (
                        (e = e.get(null === r.key ? n : r.key) || null),
                        r.type === Ve ? c(t, e, r.props.children, l, r.key) : i(t, e, r, l)
                    );
                case Ae:
                    return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, l);
            }
            if (Ao(r) || at(r)) return c(t, (e = e.get(n) || null), r, l, null);
            Bo(t, r);
        }
        return null;
    }
    return function (u, i, s, c) {
        var h = 'object' == typeof s && null !== s && s.type === Ve && null === s.key;
        h && (s = s.props.children);
        var m = 'object' == typeof s && null !== s;
        if (m)
            switch (s.$$typeof) {
                case je:
                    e: {
                        for (m = s.key, h = i; null !== h; ) {
                            if (h.key === m) {
                                if (7 === h.tag) {
                                    if (s.type === Ve) {
                                        n(u, h.sibling), ((i = l(h, s.props.children)).return = u), (u = i);
                                        break e;
                                    }
                                } else if (h.elementType === s.type) {
                                    n(u, h.sibling), ((i = l(h, s.props)).ref = Vo(u, h, s)), (i.return = u), (u = i);
                                    break e;
                                }
                                n(u, h);
                                break;
                            }
                            t(u, h), (h = h.sibling);
                        }
                        s.type === Ve
                            ? (((i = dc(s.props.children, u.mode, c, s.key)).return = u), (u = i))
                            : (((c = fc(s.type, s.key, s.props, null, u.mode, c)).ref = Vo(u, i, s)),
                              (c.return = u),
                              (u = c));
                    }
                    return o(u);
                case Ae:
                    e: {
                        for (h = s.key; null !== i; ) {
                            if (i.key === h) {
                                if (
                                    4 === i.tag &&
                                    i.stateNode.containerInfo === s.containerInfo &&
                                    i.stateNode.implementation === s.implementation
                                ) {
                                    n(u, i.sibling), ((i = l(i, s.children || [])).return = u), (u = i);
                                    break e;
                                }
                                n(u, i);
                                break;
                            }
                            t(u, i), (i = i.sibling);
                        }
                        ((i = mc(s, u.mode, c)).return = u), (u = i);
                    }
                    return o(u);
            }
        if ('string' == typeof s || 'number' == typeof s)
            return (
                (s = '' + s),
                null !== i && 6 === i.tag
                    ? (n(u, i.sibling), ((i = l(i, s)).return = u), (u = i))
                    : (n(u, i), ((i = hc(s, u.mode, c)).return = u), (u = i)),
                o(u)
            );
        if (Ao(s))
            return (function (l, o, u, i) {
                for (var s = null, c = null, h = o, m = (o = 0), v = null; null !== h && m < u.length; m++) {
                    h.index > m ? ((v = h), (h = null)) : (v = h.sibling);
                    var g = d(l, h, u[m], i);
                    if (null === g) {
                        null === h && (h = v);
                        break;
                    }
                    e && h && null === g.alternate && t(l, h),
                        (o = a(g, o, m)),
                        null === c ? (s = g) : (c.sibling = g),
                        (c = g),
                        (h = v);
                }
                if (m === u.length) return n(l, h), s;
                if (null === h) {
                    for (; m < u.length; m++)
                        null !== (h = f(l, u[m], i)) &&
                            ((o = a(h, o, m)), null === c ? (s = h) : (c.sibling = h), (c = h));
                    return s;
                }
                for (h = r(l, h); m < u.length; m++)
                    null !== (v = p(h, l, m, u[m], i)) &&
                        (e && null !== v.alternate && h.delete(null === v.key ? m : v.key),
                        (o = a(v, o, m)),
                        null === c ? (s = v) : (c.sibling = v),
                        (c = v));
                return (
                    e &&
                        h.forEach(function (e) {
                            return t(l, e);
                        }),
                    s
                );
            })(u, i, s, c);
        if (at(s))
            return (function (l, o, u, i) {
                var s = at(u);
                if ('function' != typeof s) throw Error(Se(150));
                if (null == (u = s.call(u))) throw Error(Se(151));
                for (
                    var c = (s = null), h = o, m = (o = 0), v = null, g = u.next();
                    null !== h && !g.done;
                    m++, g = u.next()
                ) {
                    h.index > m ? ((v = h), (h = null)) : (v = h.sibling);
                    var y = d(l, h, g.value, i);
                    if (null === y) {
                        null === h && (h = v);
                        break;
                    }
                    e && h && null === y.alternate && t(l, h),
                        (o = a(y, o, m)),
                        null === c ? (s = y) : (c.sibling = y),
                        (c = y),
                        (h = v);
                }
                if (g.done) return n(l, h), s;
                if (null === h) {
                    for (; !g.done; m++, g = u.next())
                        null !== (g = f(l, g.value, i)) &&
                            ((o = a(g, o, m)), null === c ? (s = g) : (c.sibling = g), (c = g));
                    return s;
                }
                for (h = r(l, h); !g.done; m++, g = u.next())
                    null !== (g = p(h, l, m, g.value, i)) &&
                        (e && null !== g.alternate && h.delete(null === g.key ? m : g.key),
                        (o = a(g, o, m)),
                        null === c ? (s = g) : (c.sibling = g),
                        (c = g));
                return (
                    e &&
                        h.forEach(function (e) {
                            return t(l, e);
                        }),
                    s
                );
            })(u, i, s, c);
        if ((m && Bo(u, s), void 0 === s && !h))
            switch (u.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                    throw Error(Se(152, ct(u.type) || 'Component'));
            }
        return n(u, i);
    };
}
var $o = Wo(!0),
    Ho = Wo(!1),
    Qo = {},
    qo = Ca(Qo),
    Ko = Ca(Qo),
    Yo = Ca(Qo);

function Xo(e) {
    if (e === Qo) throw Error(Se(174));
    return e;
}

function Go(e, t) {
    switch ((Na(Yo, t), Na(Ko, e), Na(qo, Qo), (e = t.nodeType))) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : zt(null, '');
            break;
        default:
            t = zt((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
    }
    Pa(qo), Na(qo, t);
}

function Zo() {
    Pa(qo), Pa(Ko), Pa(Yo);
}

function Jo(e) {
    Xo(Yo.current);
    var t = Xo(qo.current),
        n = zt(t, e.type);
    t !== n && (Na(Ko, e), Na(qo, n));
}

function eu(e) {
    Ko.current === e && (Pa(qo), Pa(Ko));
}
var tu = Ca(0);

function nu(e) {
    for (var t = e; null !== t; ) {
        if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data)) return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (64 & t.flags) return t;
        } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var ru = null,
    lu = null,
    au = !1;

function ou(e, t) {
    var n = ic(5, null, null, 0);
    (n.elementType = 'DELETED'),
        (n.type = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        (n.flags = 8),
        null !== e.lastEffect
            ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
            : (e.firstEffect = e.lastEffect = n);
}

function uu(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), !0)
            );
        case 6:
            return null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) && ((e.stateNode = t), !0);
        default:
            return !1;
    }
}

function iu(e) {
    if (au) {
        var t = lu;
        if (t) {
            var n = t;
            if (!uu(e, t)) {
                if (!(t = fa(n.nextSibling)) || !uu(e, t))
                    return (e.flags = (-1025 & e.flags) | 2), (au = !1), void (ru = e);
                ou(ru, n);
            }
            (ru = e), (lu = fa(t.firstChild));
        } else (e.flags = (-1025 & e.flags) | 2), (au = !1), (ru = e);
    }
}

function su(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
    ru = e;
}

function cu(e) {
    if (e !== ru) return !1;
    if (!au) return su(e), (au = !0), !1;
    var t = e.type;
    if (5 !== e.tag || ('head' !== t && 'body' !== t && !ua(t, e.memoizedProps)))
        for (t = lu; t; ) ou(e, t), (t = fa(t.nextSibling));
    if ((su(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(Se(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ('/$' === n) {
                        if (0 === t) {
                            lu = fa(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
            }
            lu = null;
        }
    } else lu = ru ? fa(e.stateNode.nextSibling) : null;
    return !0;
}

function fu() {
    (lu = ru = null), (au = !1);
}
var du = [];

function pu() {
    for (var e = 0; e < du.length; e++) du[e]._workInProgressVersionPrimary = null;
    du.length = 0;
}
var hu = Ue.ReactCurrentDispatcher,
    mu = Ue.ReactCurrentBatchConfig,
    vu = 0,
    gu = null,
    yu = null,
    bu = null,
    wu = !1,
    ku = !1;

function Eu() {
    throw Error(Se(321));
}

function Su(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Pl(e[n], t[n])) return !1;
    return !0;
}

function xu(e, t, n, r, l, a) {
    if (
        ((vu = a),
        (gu = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (hu.current = null === e || null === e.memoizedState ? Xu : Gu),
        (e = n(r, l)),
        ku)
    ) {
        a = 0;
        do {
            if (((ku = !1), !(25 > a))) throw Error(Se(301));
            (a += 1), (bu = yu = null), (t.updateQueue = null), (hu.current = Zu), (e = n(r, l));
        } while (ku);
    }
    if (((hu.current = Yu), (t = null !== yu && null !== yu.next), (vu = 0), (bu = yu = gu = null), (wu = !1), t))
        throw Error(Se(300));
    return e;
}

function _u() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return null === bu ? (gu.memoizedState = bu = e) : (bu = bu.next = e), bu;
}

function Cu() {
    if (null === yu) {
        var e = gu.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = yu.next;
    var t = null === bu ? gu.memoizedState : bu.next;
    if (null !== t) (bu = t), (yu = e);
    else {
        if (null === e) throw Error(Se(310));
        (e = {
            memoizedState: (yu = e).memoizedState,
            baseState: yu.baseState,
            baseQueue: yu.baseQueue,
            queue: yu.queue,
            next: null,
        }),
            null === bu ? (gu.memoizedState = bu = e) : (bu = bu.next = e);
    }
    return bu;
}

function Pu(e, t) {
    return 'function' == typeof t ? t(e) : t;
}

function Nu(e) {
    var t = Cu(),
        n = t.queue;
    if (null === n) throw Error(Se(311));
    n.lastRenderedReducer = e;
    var r = yu,
        l = r.baseQueue,
        a = n.pending;
    if (null !== a) {
        if (null !== l) {
            var o = l.next;
            (l.next = a.next), (a.next = o);
        }
        (r.baseQueue = l = a), (n.pending = null);
    }
    if (null !== l) {
        (l = l.next), (r = r.baseState);
        var u = (o = a = null),
            i = l;
        do {
            var s = i.lane;
            if ((vu & s) === s)
                null !== u &&
                    (u = u.next =
                        {
                            lane: 0,
                            action: i.action,
                            eagerReducer: i.eagerReducer,
                            eagerState: i.eagerState,
                            next: null,
                        }),
                    (r = i.eagerReducer === e ? i.eagerState : e(r, i.action));
            else {
                var c = {
                    lane: s,
                    action: i.action,
                    eagerReducer: i.eagerReducer,
                    eagerState: i.eagerState,
                    next: null,
                };
                null === u ? ((o = u = c), (a = r)) : (u = u.next = c), (gu.lanes |= s), (as |= s);
            }
            i = i.next;
        } while (null !== i && i !== l);
        null === u ? (a = r) : (u.next = o),
            Pl(r, t.memoizedState) || (ei = !0),
            (t.memoizedState = r),
            (t.baseState = a),
            (t.baseQueue = u),
            (n.lastRenderedState = r);
    }
    return [t.memoizedState, n.dispatch];
}

function Tu(e) {
    var t = Cu(),
        n = t.queue;
    if (null === n) throw Error(Se(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        a = t.memoizedState;
    if (null !== l) {
        n.pending = null;
        var o = (l = l.next);
        do {
            (a = e(a, o.action)), (o = o.next);
        } while (o !== l);
        Pl(a, t.memoizedState) || (ei = !0),
            (t.memoizedState = a),
            null === t.baseQueue && (t.baseState = a),
            (n.lastRenderedState = a);
    }
    return [a, r];
}

function Ou(e, t, n) {
    var r = t._getVersion;
    r = r(t._source);
    var l = t._workInProgressVersionPrimary;
    if (
        (null !== l
            ? (e = l === r)
            : ((e = e.mutableReadLanes), (e = (vu & e) === e) && ((t._workInProgressVersionPrimary = r), du.push(t))),
        e)
    )
        return n(t._source);
    throw (du.push(t), Error(Se(350)));
}

function zu(e, t, n, r) {
    var l = Gi;
    if (null === l) throw Error(Se(349));
    var a = t._getVersion,
        o = a(t._source),
        u = hu.current,
        i = u.useState(function () {
            return Ou(l, t, n);
        }),
        s = i[1],
        c = i[0];
    i = bu;
    var f = e.memoizedState,
        d = f.refs,
        p = d.getSnapshot,
        h = f.source;
    f = f.subscribe;
    var m = gu;
    return (
        (e.memoizedState = {
            refs: d,
            source: t,
            subscribe: r,
        }),
        u.useEffect(
            function () {
                (d.getSnapshot = n), (d.setSnapshot = s);
                var e = a(t._source);
                if (!Pl(o, e)) {
                    (e = n(t._source)),
                        Pl(c, e) || (s(e), (e = zs(m)), (l.mutableReadLanes |= e & l.pendingLanes)),
                        (e = l.mutableReadLanes),
                        (l.entangledLanes |= e);
                    for (var r = l.entanglements, u = e; 0 < u; ) {
                        var i = 31 - ir(u),
                            f = 1 << i;
                        (r[i] |= e), (u &= ~f);
                    }
                }
            },
            [n, t, r]
        ),
        u.useEffect(
            function () {
                return r(t._source, function () {
                    var e = d.getSnapshot,
                        n = d.setSnapshot;
                    try {
                        n(e(t._source));
                        var r = zs(m);
                        l.mutableReadLanes |= r & l.pendingLanes;
                    } catch (a) {
                        n(function () {
                            throw a;
                        });
                    }
                });
            },
            [t, r]
        ),
        (Pl(p, n) && Pl(h, t) && Pl(f, r)) ||
            (((e = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: Pu,
                lastRenderedState: c,
            }).dispatch = s =
                Ku.bind(null, gu, e)),
            (i.queue = e),
            (i.baseQueue = null),
            (c = Ou(l, t, n)),
            (i.memoizedState = i.baseState = c)),
        c
    );
}

function Lu(e, t, n) {
    return zu(Cu(), e, t, n);
}

function Mu(e) {
    var t = _u();
    return (
        'function' == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = (e = t.queue =
            {
                pending: null,
                dispatch: null,
                lastRenderedReducer: Pu,
                lastRenderedState: e,
            }).dispatch =
            Ku.bind(null, gu, e)),
        [t.memoizedState, e]
    );
}

function Ru(e, t, n, r) {
    return (
        (e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null,
        }),
        null === (t = gu.updateQueue)
            ? ((t = {
                  lastEffect: null,
              }),
              (gu.updateQueue = t),
              (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
    );
}

function Du(e) {
    return (
        (e = {
            current: e,
        }),
        (_u().memoizedState = e)
    );
}

function Iu() {
    return Cu().memoizedState;
}

function Fu(e, t, n, r) {
    var l = _u();
    (gu.flags |= e), (l.memoizedState = Ru(1 | t, n, void 0, void 0 === r ? null : r));
}

function Uu(e, t, n, r) {
    var l = Cu();
    r = void 0 === r ? null : r;
    var a = void 0;
    if (null !== yu) {
        var o = yu.memoizedState;
        if (((a = o.destroy), null !== r && Su(r, o.deps))) return void Ru(t, n, a, r);
    }
    (gu.flags |= e), (l.memoizedState = Ru(1 | t, n, a, r));
}

function ju(e, t) {
    return Fu(516, 4, e, t);
}

function Au(e, t) {
    return Uu(516, 4, e, t);
}

function Vu(e, t) {
    return Uu(4, 2, e, t);
}

function Bu(e, t) {
    return 'function' == typeof t
        ? ((e = e()),
          t(e),
          function () {
              t(null);
          })
        : null != t
          ? ((e = e()),
            (t.current = e),
            function () {
                t.current = null;
            })
          : void 0;
}

function Wu(e, t, n) {
    return (n = null != n ? n.concat([e]) : null), Uu(4, 2, Bu.bind(null, t, e), n);
}

function $u() {}

function Hu(e, t) {
    var n = Cu();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Su(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}

function Qu(e, t) {
    var n = Cu();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Su(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}

function qu(e, t) {
    var n = uo();
    so(98 > n ? 98 : n, function () {
        e(!0);
    }),
        so(97 < n ? 97 : n, function () {
            var n = mu.transition;
            mu.transition = 1;
            try {
                e(!1), t();
            } finally {
                mu.transition = n;
            }
        });
}

function Ku(e, t, n) {
    var r = Os(),
        l = zs(e),
        a = {
            lane: l,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null,
        },
        o = t.pending;
    if (
        (null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
        (t.pending = a),
        (o = e.alternate),
        e === gu || (null !== o && o === gu))
    )
        ku = wu = !0;
    else {
        if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer))
            try {
                var u = t.lastRenderedState,
                    i = o(u, n);
                if (((a.eagerReducer = o), (a.eagerState = i), Pl(i, u))) return;
            } catch (s) {}
        Ls(e, l, r);
    }
}
var Yu = {
        readContext: xo,
        useCallback: Eu,
        useContext: Eu,
        useEffect: Eu,
        useImperativeHandle: Eu,
        useLayoutEffect: Eu,
        useMemo: Eu,
        useReducer: Eu,
        useRef: Eu,
        useState: Eu,
        useDebugValue: Eu,
        useDeferredValue: Eu,
        useTransition: Eu,
        useMutableSource: Eu,
        useOpaqueIdentifier: Eu,
        unstable_isNewReconciler: !1,
    },
    Xu = {
        readContext: xo,
        useCallback: function (e, t) {
            return (_u().memoizedState = [e, void 0 === t ? null : t]), e;
        },
        useContext: xo,
        useEffect: ju,
        useImperativeHandle: function (e, t, n) {
            return (n = null != n ? n.concat([e]) : null), Fu(4, 2, Bu.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return Fu(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = _u();
            return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
            var r = _u();
            return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue =
                    {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t,
                    }).dispatch =
                    Ku.bind(null, gu, e)),
                [r.memoizedState, e]
            );
        },
        useRef: Du,
        useState: Mu,
        useDebugValue: $u,
        useDeferredValue: function (e) {
            var t = Mu(e),
                n = t[0],
                r = t[1];
            return (
                ju(
                    function () {
                        var t = mu.transition;
                        mu.transition = 1;
                        try {
                            r(e);
                        } finally {
                            mu.transition = t;
                        }
                    },
                    [e]
                ),
                n
            );
        },
        useTransition: function () {
            var e = Mu(!1),
                t = e[0];
            return Du((e = qu.bind(null, e[1]))), [e, t];
        },
        useMutableSource: function (e, t, n) {
            var r = _u();
            return (
                (r.memoizedState = {
                    refs: {
                        getSnapshot: t,
                        setSnapshot: null,
                    },
                    source: e,
                    subscribe: n,
                }),
                zu(r, e, t, n)
            );
        },
        useOpaqueIdentifier: function () {
            if (au) {
                var e = !1,
                    t = (function (e) {
                        return {
                            $$typeof: Ze,
                            toString: e,
                            valueOf: e,
                        };
                    })(function () {
                        throw (e || ((e = !0), n('r:' + (pa++).toString(36))), Error(Se(355)));
                    }),
                    n = Mu(t)[1];
                return (
                    !(2 & gu.mode) &&
                        ((gu.flags |= 516),
                        Ru(
                            5,
                            function () {
                                n('r:' + (pa++).toString(36));
                            },
                            void 0,
                            null
                        )),
                    t
                );
            }
            return Mu((t = 'r:' + (pa++).toString(36))), t;
        },
        unstable_isNewReconciler: !1,
    },
    Gu = {
        readContext: xo,
        useCallback: Hu,
        useContext: xo,
        useEffect: Au,
        useImperativeHandle: Wu,
        useLayoutEffect: Vu,
        useMemo: Qu,
        useReducer: Nu,
        useRef: Iu,
        useState: function () {
            return Nu(Pu);
        },
        useDebugValue: $u,
        useDeferredValue: function (e) {
            var t = Nu(Pu),
                n = t[0],
                r = t[1];
            return (
                Au(
                    function () {
                        var t = mu.transition;
                        mu.transition = 1;
                        try {
                            r(e);
                        } finally {
                            mu.transition = t;
                        }
                    },
                    [e]
                ),
                n
            );
        },
        useTransition: function () {
            var e = Nu(Pu)[0];
            return [Iu().current, e];
        },
        useMutableSource: Lu,
        useOpaqueIdentifier: function () {
            return Nu(Pu)[0];
        },
        unstable_isNewReconciler: !1,
    },
    Zu = {
        readContext: xo,
        useCallback: Hu,
        useContext: xo,
        useEffect: Au,
        useImperativeHandle: Wu,
        useLayoutEffect: Vu,
        useMemo: Qu,
        useReducer: Tu,
        useRef: Iu,
        useState: function () {
            return Tu(Pu);
        },
        useDebugValue: $u,
        useDeferredValue: function (e) {
            var t = Tu(Pu),
                n = t[0],
                r = t[1];
            return (
                Au(
                    function () {
                        var t = mu.transition;
                        mu.transition = 1;
                        try {
                            r(e);
                        } finally {
                            mu.transition = t;
                        }
                    },
                    [e]
                ),
                n
            );
        },
        useTransition: function () {
            var e = Tu(Pu)[0];
            return [Iu().current, e];
        },
        useMutableSource: Lu,
        useOpaqueIdentifier: function () {
            return Tu(Pu)[0];
        },
        unstable_isNewReconciler: !1,
    },
    Ju = Ue.ReactCurrentOwner,
    ei = !1;

function ti(e, t, n, r) {
    t.child = null === e ? Ho(t, null, n, r) : $o(t, e.child, n, r);
}

function ni(e, t, n, r, l) {
    n = n.render;
    var a = t.ref;
    return (
        So(t, l),
        (r = xu(e, t, n, r, a, l)),
        null === e || ei
            ? ((t.flags |= 1), ti(e, t, r, l), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~l), Si(e, t, l))
    );
}

function ri(e, t, n, r, l, a) {
    if (null === e) {
        var o = n.type;
        return 'function' != typeof o ||
            sc(o) ||
            void 0 !== o.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = fc(n.type, null, r, t, t.mode, a)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = o), li(e, t, o, r, l, a));
    }
    return (
        (o = e.child),
        0 === (l & a) && ((l = o.memoizedProps), (n = null !== (n = n.compare) ? n : Tl)(l, r) && e.ref === t.ref)
            ? Si(e, t, a)
            : ((t.flags |= 1), ((e = cc(o, r)).ref = t.ref), (e.return = t), (t.child = e))
    );
}

function li(e, t, n, r, l, a) {
    if (null !== e && Tl(e.memoizedProps, r) && e.ref === t.ref) {
        if (((ei = !1), 0 === (a & l))) return (t.lanes = e.lanes), Si(e, t, a);
        16384 & e.flags && (ei = !0);
    }
    return ui(e, t, n, r, a);
}

function ai(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        a = null !== e ? e.memoizedState : null;
    if ('hidden' === r.mode || 'unstable-defer-without-hiding' === r.mode)
        if (4 & t.mode) {
            if (!(1073741824 & n))
                return (
                    (e = null !== a ? a.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                    }),
                    As(t, e),
                    null
                );
            (t.memoizedState = {
                baseLanes: 0,
            }),
                As(t, null !== a ? a.baseLanes : n);
        } else
            (t.memoizedState = {
                baseLanes: 0,
            }),
                As(t, n);
    else null !== a ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n), As(t, r);
    return ti(e, t, l, n), t.child;
}

function oi(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) && (t.flags |= 128);
}

function ui(e, t, n, r, l) {
    var a = Ra(n) ? La : Oa.current;
    return (
        (a = Ma(t, a)),
        So(t, l),
        (n = xu(e, t, n, r, a, l)),
        null === e || ei
            ? ((t.flags |= 1), ti(e, t, n, l), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~l), Si(e, t, l))
    );
}

function ii(e, t, n, r, l) {
    if (Ra(n)) {
        var a = !0;
        Ua(t);
    } else a = !1;
    if ((So(t, l), null === t.stateNode))
        null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            Fo(t, n, r),
            jo(t, n, r, l),
            (r = !0);
    else if (null === e) {
        var o = t.stateNode,
            u = t.memoizedProps;
        o.props = u;
        var i = o.context,
            s = n.contextType;
        'object' == typeof s && null !== s ? (s = xo(s)) : (s = Ma(t, (s = Ra(n) ? La : Oa.current)));
        var c = n.getDerivedStateFromProps,
            f = 'function' == typeof c || 'function' == typeof o.getSnapshotBeforeUpdate;
        f ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((u !== r || i !== s) && Uo(t, o, r, s)),
            (_o = !1);
        var d = t.memoizedState;
        (o.state = d),
            zo(t, r, o, l),
            (i = t.memoizedState),
            u !== r || d !== i || za.current || _o
                ? ('function' == typeof c && (Ro(t, n, c, r), (i = t.memoizedState)),
                  (u = _o || Io(t, n, u, r, d, i, s))
                      ? (f ||
                            ('function' != typeof o.UNSAFE_componentWillMount &&
                                'function' != typeof o.componentWillMount) ||
                            ('function' == typeof o.componentWillMount && o.componentWillMount(),
                            'function' == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()),
                        'function' == typeof o.componentDidMount && (t.flags |= 4))
                      : ('function' == typeof o.componentDidMount && (t.flags |= 4),
                        (t.memoizedProps = r),
                        (t.memoizedState = i)),
                  (o.props = r),
                  (o.state = i),
                  (o.context = s),
                  (r = u))
                : ('function' == typeof o.componentDidMount && (t.flags |= 4), (r = !1));
    } else {
        (o = t.stateNode),
            Po(e, t),
            (u = t.memoizedProps),
            (s = t.type === t.elementType ? u : mo(t.type, u)),
            (o.props = s),
            (f = t.pendingProps),
            (d = o.context),
            'object' == typeof (i = n.contextType) && null !== i
                ? (i = xo(i))
                : (i = Ma(t, (i = Ra(n) ? La : Oa.current)));
        var p = n.getDerivedStateFromProps;
        (c = 'function' == typeof p || 'function' == typeof o.getSnapshotBeforeUpdate) ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((u !== f || d !== i) && Uo(t, o, r, i)),
            (_o = !1),
            (d = t.memoizedState),
            (o.state = d),
            zo(t, r, o, l);
        var h = t.memoizedState;
        u !== f || d !== h || za.current || _o
            ? ('function' == typeof p && (Ro(t, n, p, r), (h = t.memoizedState)),
              (s = _o || Io(t, n, s, r, d, h, i))
                  ? (c ||
                        ('function' != typeof o.UNSAFE_componentWillUpdate &&
                            'function' != typeof o.componentWillUpdate) ||
                        ('function' == typeof o.componentWillUpdate && o.componentWillUpdate(r, h, i),
                        'function' == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, h, i)),
                    'function' == typeof o.componentDidUpdate && (t.flags |= 4),
                    'function' == typeof o.getSnapshotBeforeUpdate && (t.flags |= 256))
                  : ('function' != typeof o.componentDidUpdate ||
                        (u === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 4),
                    'function' != typeof o.getSnapshotBeforeUpdate ||
                        (u === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
              (o.props = r),
              (o.state = h),
              (o.context = i),
              (r = s))
            : ('function' != typeof o.componentDidUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
              'function' != typeof o.getSnapshotBeforeUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 256),
              (r = !1));
    }
    return si(e, t, n, r, a, l);
}

function si(e, t, n, r, l, a) {
    oi(e, t);
    var o = !!(64 & t.flags);
    if (!r && !o) return l && ja(t, n, !1), Si(e, t, a);
    (r = t.stateNode), (Ju.current = t);
    var u = o && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
    return (
        (t.flags |= 1),
        null !== e && o ? ((t.child = $o(t, e.child, null, a)), (t.child = $o(t, null, u, a))) : ti(e, t, u, a),
        (t.memoizedState = r.state),
        l && ja(t, n, !0),
        t.child
    );
}

function ci(e) {
    var t = e.stateNode;
    t.pendingContext ? Ia(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ia(0, t.context, !1),
        Go(e, t.containerInfo);
}
var fi,
    di,
    pi,
    hi,
    mi = {
        dehydrated: null,
        retryLane: 0,
    };

function vi(e, t, n) {
    var r,
        l = t.pendingProps,
        a = tu.current,
        o = !1;
    return (
        (r = !!(64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && !!(2 & a)),
        r
            ? ((o = !0), (t.flags &= -65))
            : (null !== e && null === e.memoizedState) ||
              void 0 === l.fallback ||
              !0 === l.unstable_avoidThisFallback ||
              (a |= 1),
        Na(tu, 1 & a),
        null === e
            ? (void 0 !== l.fallback && iu(t),
              (e = l.children),
              (a = l.fallback),
              o
                  ? ((e = gi(t, e, a, n)),
                    (t.child.memoizedState = {
                        baseLanes: n,
                    }),
                    (t.memoizedState = mi),
                    e)
                  : 'number' == typeof l.unstable_expectedLoadTime
                    ? ((e = gi(t, e, a, n)),
                      (t.child.memoizedState = {
                          baseLanes: n,
                      }),
                      (t.memoizedState = mi),
                      (t.lanes = 33554432),
                      e)
                    : (((n = pc(
                          {
                              mode: 'visible',
                              children: e,
                          },
                          t.mode,
                          n,
                          null
                      )).return = t),
                      (t.child = n)))
            : (e.memoizedState,
              o
                  ? ((l = bi(e, t, l.children, l.fallback, n)),
                    (o = t.child),
                    (a = e.child.memoizedState),
                    (o.memoizedState =
                        null === a
                            ? {
                                  baseLanes: n,
                              }
                            : {
                                  baseLanes: a.baseLanes | n,
                              }),
                    (o.childLanes = e.childLanes & ~n),
                    (t.memoizedState = mi),
                    l)
                  : ((n = yi(e, t, l.children, n)), (t.memoizedState = null), n))
    );
}

function gi(e, t, n, r) {
    var l = e.mode,
        a = e.child;
    return (
        (t = {
            mode: 'hidden',
            children: t,
        }),
        2 & l || null === a ? (a = pc(t, l, 0, null)) : ((a.childLanes = 0), (a.pendingProps = t)),
        (n = dc(n, l, r, null)),
        (a.return = e),
        (n.return = e),
        (a.sibling = n),
        (e.child = a),
        n
    );
}

function yi(e, t, n, r) {
    var l = e.child;
    return (
        (e = l.sibling),
        (n = cc(l, {
            mode: 'visible',
            children: n,
        })),
        !(2 & t.mode) && (n.lanes = r),
        (n.return = t),
        (n.sibling = null),
        null !== e && ((e.nextEffect = null), (e.flags = 8), (t.firstEffect = t.lastEffect = e)),
        (t.child = n)
    );
}

function bi(e, t, n, r, l) {
    var a = t.mode,
        o = e.child;
    e = o.sibling;
    var u = {
        mode: 'hidden',
        children: n,
    };
    return (
        2 & a || t.child === o
            ? (n = cc(o, u))
            : (((n = t.child).childLanes = 0),
              (n.pendingProps = u),
              null !== (o = n.lastEffect)
                  ? ((t.firstEffect = n.firstEffect), (t.lastEffect = o), (o.nextEffect = null))
                  : (t.firstEffect = t.lastEffect = null)),
        null !== e ? (r = cc(e, r)) : ((r = dc(r, a, l, null)).flags |= 2),
        (r.return = t),
        (n.return = t),
        (n.sibling = r),
        (t.child = n),
        r
    );
}

function wi(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    null !== n && (n.lanes |= t), Eo(e.return, t);
}

function ki(e, t, n, r, l, a) {
    var o = e.memoizedState;
    null === o
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: l,
              lastEffect: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = l),
          (o.lastEffect = a));
}

function Ei(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        a = r.tail;
    if ((ti(e, t, r.children, n), 2 & (r = tu.current))) (r = (1 & r) | 2), (t.flags |= 64);
    else {
        if (null !== e && 64 & e.flags)
            e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && wi(e, n);
                else if (19 === e.tag) wi(e, n);
                else if (null !== e.child) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                    if (null === e.return || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((Na(tu, r), 2 & t.mode))
        switch (l) {
            case 'forwards':
                for (n = t.child, l = null; null !== n; )
                    null !== (e = n.alternate) && null === nu(e) && (l = n), (n = n.sibling);
                null === (n = l) ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
                    ki(t, !1, l, n, a, t.lastEffect);
                break;
            case 'backwards':
                for (n = null, l = t.child, t.child = null; null !== l; ) {
                    if (null !== (e = l.alternate) && null === nu(e)) {
                        t.child = l;
                        break;
                    }
                    (e = l.sibling), (l.sibling = n), (n = l), (l = e);
                }
                ki(t, !0, n, null, a, t.lastEffect);
                break;
            case 'together':
                ki(t, !1, null, null, void 0, t.lastEffect);
                break;
            default:
                t.memoizedState = null;
        }
    else t.memoizedState = null;
    return t.child;
}

function Si(e, t, n) {
    if ((null !== e && (t.dependencies = e.dependencies), (as |= t.lanes), 0 !== (n & t.childLanes))) {
        if (null !== e && t.child !== e.child) throw Error(Se(153));
        if (null !== t.child) {
            for (n = cc((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
                (e = e.sibling), ((n = n.sibling = cc(e, e.pendingProps)).return = t);
            n.sibling = null;
        }
        return t.child;
    }
    return null;
}

function xi(e, t) {
    if (!au)
        switch (e.tailMode) {
            case 'hidden':
                t = e.tail;
                for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
            case 'collapsed':
                n = e.tail;
                for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
                null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
}

function _i(e, t, n) {
    var r = t.pendingProps;
    switch (t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return null;
        case 1:
        case 17:
            return Ra(t.type) && Da(), null;
        case 3:
            return (
                Zo(),
                Pa(za),
                Pa(Oa),
                pu(),
                (r = t.stateNode).pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) || (cu(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
                di(t),
                null
            );
        case 5:
            eu(t);
            var l = Xo(Yo.current);
            if (((n = t.type), null !== e && null != t.stateNode))
                pi(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 128);
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(Se(166));
                    return null;
                }
                if (((e = Xo(qo.current)), cu(t))) {
                    (r = t.stateNode), (n = t.type);
                    var a = t.memoizedProps;
                    switch (((r[ma] = t), (r[va] = a), n)) {
                        case 'dialog':
                            ql('cancel', r), ql('close', r);
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            ql('load', r);
                            break;
                        case 'video':
                        case 'audio':
                            for (e = 0; e < Wl.length; e++) ql(Wl[e], r);
                            break;
                        case 'source':
                            ql('error', r);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            ql('error', r), ql('load', r);
                            break;
                        case 'details':
                            ql('toggle', r);
                            break;
                        case 'input':
                            gt(r, a), ql('invalid', r);
                            break;
                        case 'select':
                            (r._wrapperState = {
                                wasMultiple: !!a.multiple,
                            }),
                                ql('invalid', r);
                            break;
                        case 'textarea':
                            _t(r, a), ql('invalid', r);
                    }
                    for (var o in (Vt(n, a), (e = null), a))
                        a.hasOwnProperty(o) &&
                            ((l = a[o]),
                            'children' === o
                                ? 'string' == typeof l
                                    ? r.textContent !== l && (e = ['children', l])
                                    : 'number' == typeof l && r.textContent !== '' + l && (e = ['children', '' + l])
                                : _e.hasOwnProperty(o) && null != l && 'onScroll' === o && ql('scroll', r));
                    switch (n) {
                        case 'input':
                            pt(r), wt(r, a, !0);
                            break;
                        case 'textarea':
                            pt(r), Pt(r);
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            'function' == typeof a.onClick && (r.onclick = ra);
                    }
                    (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                    switch (
                        ((o = 9 === l.nodeType ? l : l.ownerDocument),
                        e === Nt && (e = Ot(n)),
                        e === Nt
                            ? 'script' === n
                                ? (((e = o.createElement('div')).innerHTML = '<script></script>'),
                                  (e = e.removeChild(e.firstChild)))
                                : 'string' == typeof r.is
                                  ? (e = o.createElement(n, {
                                        is: r.is,
                                    }))
                                  : ((e = o.createElement(n)),
                                    'select' === n &&
                                        ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
                            : (e = o.createElementNS(e, n)),
                        (e[ma] = t),
                        (e[va] = r),
                        fi(e, t, !1, !1),
                        (t.stateNode = e),
                        (o = Bt(n, r)),
                        n)
                    ) {
                        case 'dialog':
                            ql('cancel', e), ql('close', e), (l = r);
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            ql('load', e), (l = r);
                            break;
                        case 'video':
                        case 'audio':
                            for (l = 0; l < Wl.length; l++) ql(Wl[l], e);
                            l = r;
                            break;
                        case 'source':
                            ql('error', e), (l = r);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            ql('error', e), ql('load', e), (l = r);
                            break;
                        case 'details':
                            ql('toggle', e), (l = r);
                            break;
                        case 'input':
                            gt(e, r), (l = vt(e, r)), ql('invalid', e);
                            break;
                        case 'option':
                            l = Et(e, r);
                            break;
                        case 'select':
                            (e._wrapperState = {
                                wasMultiple: !!r.multiple,
                            }),
                                (l = ke({}, r, {
                                    value: void 0,
                                })),
                                ql('invalid', e);
                            break;
                        case 'textarea':
                            _t(e, r), (l = xt(e, r)), ql('invalid', e);
                            break;
                        default:
                            l = r;
                    }
                    Vt(n, l);
                    var u = l;
                    for (a in u)
                        if (u.hasOwnProperty(a)) {
                            var i = u[a];
                            'style' === a
                                ? jt(e, i)
                                : 'dangerouslySetInnerHTML' === a
                                  ? null != (i = i ? i.__html : void 0) && Rt(e, i)
                                  : 'children' === a
                                    ? 'string' == typeof i
                                        ? ('textarea' !== n || '' !== i) && Dt(e, i)
                                        : 'number' == typeof i && Dt(e, '' + i)
                                    : 'suppressContentEditableWarning' !== a &&
                                      'suppressHydrationWarning' !== a &&
                                      'autoFocus' !== a &&
                                      (_e.hasOwnProperty(a)
                                          ? null != i && 'onScroll' === a && ql('scroll', e)
                                          : null != i && Fe(e, a, i, o));
                        }
                    switch (n) {
                        case 'input':
                            pt(e), wt(e, r, !1);
                            break;
                        case 'textarea':
                            pt(e), Pt(e);
                            break;
                        case 'option':
                            null != r.value && e.setAttribute('value', '' + ft(r.value));
                            break;
                        case 'select':
                            (e.multiple = !!r.multiple),
                                null != (a = r.value)
                                    ? St(e, !!r.multiple, a, !1)
                                    : null != r.defaultValue && St(e, !!r.multiple, r.defaultValue, !0);
                            break;
                        default:
                            'function' == typeof l.onClick && (e.onclick = ra);
                    }
                    oa(n, r) && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 128);
            }
            return null;
        case 6:
            if (e && null != t.stateNode) hi(e, t, e.memoizedProps, r);
            else {
                if ('string' != typeof r && null === t.stateNode) throw Error(Se(166));
                (n = Xo(Yo.current)),
                    Xo(qo.current),
                    cu(t)
                        ? ((r = t.stateNode), (n = t.memoizedProps), (r[ma] = t), r.nodeValue !== n && (t.flags |= 4))
                        : (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[ma] = t),
                          (t.stateNode = r));
            }
            return null;
        case 13:
            return (
                Pa(tu),
                (r = t.memoizedState),
                64 & t.flags
                    ? ((t.lanes = n), t)
                    : ((r = null !== r),
                      (n = !1),
                      null === e ? void 0 !== t.memoizedProps.fallback && cu(t) : (n = null !== e.memoizedState),
                      r &&
                          !n &&
                          2 & t.mode &&
                          ((null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback) || 1 & tu.current
                              ? 0 === ns && (ns = 3)
                              : ((0 !== ns && 3 !== ns) || (ns = 4),
                                null === Gi || (!(134217727 & as) && !(134217727 & os)) || Is(Gi, Ji))),
                      (r || n) && (t.flags |= 4),
                      null)
            );
        case 4:
            return Zo(), di(t), null === e && Yl(t.stateNode.containerInfo), null;
        case 10:
            return ko(t), null;
        case 19:
            if ((Pa(tu), null === (r = t.memoizedState))) return null;
            if (((a = !!(64 & t.flags)), null === (o = r.rendering)))
                if (a) xi(r, !1);
                else {
                    if (0 !== ns || (null !== e && 64 & e.flags))
                        for (e = t.child; null !== e; ) {
                            if (null !== (o = nu(e))) {
                                for (
                                    t.flags |= 64,
                                        xi(r, !1),
                                        null !== (a = o.updateQueue) && ((t.updateQueue = a), (t.flags |= 4)),
                                        null === r.lastEffect && (t.firstEffect = null),
                                        t.lastEffect = r.lastEffect,
                                        r = n,
                                        n = t.child;
                                    null !== n;

                                )
                                    (e = r),
                                        ((a = n).flags &= 2),
                                        (a.nextEffect = null),
                                        (a.firstEffect = null),
                                        (a.lastEffect = null),
                                        null === (o = a.alternate)
                                            ? ((a.childLanes = 0),
                                              (a.lanes = e),
                                              (a.child = null),
                                              (a.memoizedProps = null),
                                              (a.memoizedState = null),
                                              (a.updateQueue = null),
                                              (a.dependencies = null),
                                              (a.stateNode = null))
                                            : ((a.childLanes = o.childLanes),
                                              (a.lanes = o.lanes),
                                              (a.child = o.child),
                                              (a.memoizedProps = o.memoizedProps),
                                              (a.memoizedState = o.memoizedState),
                                              (a.updateQueue = o.updateQueue),
                                              (a.type = o.type),
                                              (e = o.dependencies),
                                              (a.dependencies =
                                                  null === e
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext: e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return Na(tu, (1 & tu.current) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    null !== r.tail && oo() > cs && ((t.flags |= 64), (a = !0), xi(r, !1), (t.lanes = 33554432));
                }
            else {
                if (!a)
                    if (null !== (e = nu(o))) {
                        if (
                            ((t.flags |= 64),
                            (a = !0),
                            null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                            xi(r, !0),
                            null === r.tail && 'hidden' === r.tailMode && !o.alternate && !au)
                        )
                            return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null;
                    } else
                        2 * oo() - r.renderingStartTime > cs &&
                            1073741824 !== n &&
                            ((t.flags |= 64), (a = !0), xi(r, !1), (t.lanes = 33554432));
                r.isBackwards
                    ? ((o.sibling = t.child), (t.child = o))
                    : (null !== (n = r.last) ? (n.sibling = o) : (t.child = o), (r.last = o));
            }
            return null !== r.tail
                ? ((n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = oo()),
                  (n.sibling = null),
                  (t = tu.current),
                  Na(tu, a ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
        case 23:
        case 24:
            return (
                Vs(),
                null !== e &&
                    (null !== e.memoizedState) != (null !== t.memoizedState) &&
                    'unstable-defer-without-hiding' !== r.mode &&
                    (t.flags |= 4),
                null
            );
    }
    throw Error(Se(156, t.tag));
}

function Ci(e) {
    switch (e.tag) {
        case 1:
            Ra(e.type) && Da();
            var t = e.flags;
            return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
        case 3:
            if ((Zo(), Pa(za), Pa(Oa), pu(), 64 & (t = e.flags))) throw Error(Se(285));
            return (e.flags = (-4097 & t) | 64), e;
        case 5:
            return eu(e), null;
        case 13:
            return Pa(tu), 4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null;
        case 19:
            return Pa(tu), null;
        case 4:
            return Zo(), null;
        case 10:
            return ko(e), null;
        case 23:
        case 24:
            return Vs(), null;
        default:
            return null;
    }
}

function Pi(e, t) {
    try {
        var n = '',
            r = t;
        do {
            (n += st(r)), (r = r.return);
        } while (r);
        var l = n;
    } catch (a) {
        l = '\nError generating stack: ' + a.message + '\n' + a.stack;
    }
    return {
        value: e,
        source: t,
        stack: l,
    };
}

function Ni(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
(fi = function (e, t) {
    for (var n = t.child; null !== n; ) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
        else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
}),
    (di = function () {}),
    (pi = function (e, t, n, r) {
        var l = e.memoizedProps;
        if (l !== r) {
            (e = t.stateNode), Xo(qo.current);
            var a,
                o = null;
            switch (n) {
                case 'input':
                    (l = vt(e, l)), (r = vt(e, r)), (o = []);
                    break;
                case 'option':
                    (l = Et(e, l)), (r = Et(e, r)), (o = []);
                    break;
                case 'select':
                    (l = ke({}, l, {
                        value: void 0,
                    })),
                        (r = ke({}, r, {
                            value: void 0,
                        })),
                        (o = []);
                    break;
                case 'textarea':
                    (l = xt(e, l)), (r = xt(e, r)), (o = []);
                    break;
                default:
                    'function' != typeof l.onClick && 'function' == typeof r.onClick && (e.onclick = ra);
            }
            for (s in (Vt(n, r), (n = null), l))
                if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && null != l[s])
                    if ('style' === s) {
                        var u = l[s];
                        for (a in u) u.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
                    } else
                        'dangerouslySetInnerHTML' !== s &&
                            'children' !== s &&
                            'suppressContentEditableWarning' !== s &&
                            'suppressHydrationWarning' !== s &&
                            'autoFocus' !== s &&
                            (_e.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
            for (s in r) {
                var i = r[s];
                if (((u = null != l ? l[s] : void 0), r.hasOwnProperty(s) && i !== u && (null != i || null != u)))
                    if ('style' === s)
                        if (u) {
                            for (a in u)
                                !u.hasOwnProperty(a) || (i && i.hasOwnProperty(a)) || (n || (n = {}), (n[a] = ''));
                            for (a in i) i.hasOwnProperty(a) && u[a] !== i[a] && (n || (n = {}), (n[a] = i[a]));
                        } else n || (o || (o = []), o.push(s, n)), (n = i);
                    else
                        'dangerouslySetInnerHTML' === s
                            ? ((i = i ? i.__html : void 0),
                              (u = u ? u.__html : void 0),
                              null != i && u !== i && (o = o || []).push(s, i))
                            : 'children' === s
                              ? ('string' != typeof i && 'number' != typeof i) || (o = o || []).push(s, '' + i)
                              : 'suppressContentEditableWarning' !== s &&
                                'suppressHydrationWarning' !== s &&
                                (_e.hasOwnProperty(s)
                                    ? (null != i && 'onScroll' === s && ql('scroll', e), o || u === i || (o = []))
                                    : 'object' == typeof i && null !== i && i.$$typeof === Ze
                                      ? i.toString()
                                      : (o = o || []).push(s, i));
            }
            n && (o = o || []).push('style', n);
            var s = o;
            (t.updateQueue = s) && (t.flags |= 4);
        }
    }),
    (hi = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
    });
var Ti = 'function' == typeof WeakMap ? WeakMap : Map;

function Oi(e, t, n) {
    ((n = No(-1, n)).tag = 3),
        (n.payload = {
            element: null,
        });
    var r = t.value;
    return (
        (n.callback = function () {
            hs || ((hs = !0), (ms = r)), Ni(0, t);
        }),
        n
    );
}

function zi(e, t, n) {
    (n = No(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ('function' == typeof r) {
        var l = t.value;
        n.payload = function () {
            return Ni(0, t), r(l);
        };
    }
    var a = e.stateNode;
    return (
        null !== a &&
            'function' == typeof a.componentDidCatch &&
            (n.callback = function () {
                'function' != typeof r && (null === vs ? (vs = new Set([this])) : vs.add(this), Ni(0, t));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: null !== e ? e : '',
                });
            }),
        n
    );
}
var Li = 'function' == typeof WeakSet ? WeakSet : Set;

function Mi(e) {
    var t = e.ref;
    if (null !== t)
        if ('function' == typeof t)
            try {
                t(null);
            } catch (n) {
                lc(e, n);
            }
        else t.current = null;
}

function Ri(e, t) {
    switch (t.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
        case 5:
        case 6:
        case 4:
        case 17:
            return;
        case 1:
            if (256 & t.flags && null !== e) {
                var n = e.memoizedProps,
                    r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : mo(t.type, n), r)),
                    (e.__reactInternalSnapshotBeforeUpdate = t);
            }
            return;
        case 3:
            return void (256 & t.flags && ca(t.stateNode.containerInfo));
    }
    throw Error(Se(163));
}

function Di(e, t, n) {
    switch (n.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
            if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                e = t = t.next;
                do {
                    if (!(3 & ~e.tag)) {
                        var r = e.create;
                        e.destroy = r();
                    }
                    e = e.next;
                } while (e !== t);
            }
            if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                e = t = t.next;
                do {
                    var l = e;
                    (r = l.next), 4 & (l = l.tag) && 1 & l && (tc(n, e), ec(n, e)), (e = r);
                } while (e !== t);
            }
            return;
        case 1:
            return (
                (e = n.stateNode),
                4 & n.flags &&
                    (null === t
                        ? e.componentDidMount()
                        : ((r = n.elementType === n.type ? t.memoizedProps : mo(n.type, t.memoizedProps)),
                          e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
                void (null !== (t = n.updateQueue) && Lo(n, t, e))
            );
        case 3:
            if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                    switch (n.child.tag) {
                        case 5:
                        case 1:
                            e = n.child.stateNode;
                    }
                Lo(n, t, e);
            }
            return;
        case 5:
            return (e = n.stateNode), void (null === t && 4 & n.flags && oa(n.type, n.memoizedProps) && e.focus());
        case 6:
        case 4:
        case 12:
        case 19:
        case 17:
        case 20:
        case 21:
        case 23:
        case 24:
            return;
        case 13:
            return void (
                null === n.memoizedState &&
                ((n = n.alternate),
                null !== n && ((n = n.memoizedState), null !== n && ((n = n.dehydrated), null !== n && An(n))))
            );
    }
    throw Error(Se(163));
}

function Ii(e, t) {
    for (var n = e; ; ) {
        if (5 === n.tag) {
            var r = n.stateNode;
            if (t)
                'function' == typeof (r = r.style).setProperty
                    ? r.setProperty('display', 'none', 'important')
                    : (r.display = 'none');
            else {
                r = n.stateNode;
                var l = n.memoizedProps.style;
                (l = null != l && l.hasOwnProperty('display') ? l.display : null), (r.style.display = Ut('display', l));
            }
        } else if (6 === n.tag) n.stateNode.nodeValue = t ? '' : n.memoizedProps;
        else if (((23 !== n.tag && 24 !== n.tag) || null === n.memoizedState || n === e) && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === e) break;
        for (; null === n.sibling; ) {
            if (null === n.return || n.return === e) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
}

function Fi(e, t) {
    if (Va && 'function' == typeof Va.onCommitFiberUnmount)
        try {
            Va.onCommitFiberUnmount(Aa, t);
        } catch (a) {}
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = (e = e.next);
                do {
                    var r = n,
                        l = r.destroy;
                    if (((r = r.tag), void 0 !== l))
                        if (4 & r) tc(t, n);
                        else {
                            r = t;
                            try {
                                l();
                            } catch (a) {
                                lc(r, a);
                            }
                        }
                    n = n.next;
                } while (n !== e);
            }
            break;
        case 1:
            if ((Mi(t), 'function' == typeof (e = t.stateNode).componentWillUnmount))
                try {
                    (e.props = t.memoizedProps), (e.state = t.memoizedState), e.componentWillUnmount();
                } catch (a) {
                    lc(t, a);
                }
            break;
        case 5:
            Mi(t);
            break;
        case 4:
            Wi(e, t);
    }
}

function Ui(e) {
    (e.alternate = null),
        (e.child = null),
        (e.dependencies = null),
        (e.firstEffect = null),
        (e.lastEffect = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.return = null),
        (e.updateQueue = null);
}

function ji(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}

function Ai(e) {
    e: {
        for (var t = e.return; null !== t; ) {
            if (ji(t)) break e;
            t = t.return;
        }
        throw Error(Se(160));
    }
    var n = t;
    switch (((t = n.stateNode), n.tag)) {
        case 5:
            var r = !1;
            break;
        case 3:
        case 4:
            (t = t.containerInfo), (r = !0);
            break;
        default:
            throw Error(Se(161));
    }
    16 & n.flags && (Dt(t, ''), (n.flags &= -17));
    e: t: for (n = e; ; ) {
        for (; null === n.sibling; ) {
            if (null === n.return || ji(n.return)) {
                n = null;
                break e;
            }
            n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
            if (2 & n.flags) continue t;
            if (null === n.child || 4 === n.tag) continue t;
            (n.child.return = n), (n = n.child);
        }
        if (!(2 & n.flags)) {
            n = n.stateNode;
            break e;
        }
    }
    r ? Vi(e, n, t) : Bi(e, n, t);
}

function Vi(e, t, n) {
    var r = e.tag,
        l = 5 === r || 6 === r;
    if (l)
        (e = l ? e.stateNode : e.stateNode.instance),
            t
                ? 8 === n.nodeType
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = ra));
    else if (4 !== r && null !== (e = e.child))
        for (Vi(e, t, n), e = e.sibling; null !== e; ) Vi(e, t, n), (e = e.sibling);
}

function Bi(e, t, n) {
    var r = e.tag,
        l = 5 === r || 6 === r;
    if (l) (e = l ? e.stateNode : e.stateNode.instance), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (4 !== r && null !== (e = e.child))
        for (Bi(e, t, n), e = e.sibling; null !== e; ) Bi(e, t, n), (e = e.sibling);
}

function Wi(e, t) {
    for (var n, r, l = t, a = !1; ; ) {
        if (!a) {
            a = l.return;
            e: for (;;) {
                if (null === a) throw Error(Se(160));
                switch (((n = a.stateNode), a.tag)) {
                    case 5:
                        r = !1;
                        break e;
                    case 3:
                    case 4:
                        (n = n.containerInfo), (r = !0);
                        break e;
                }
                a = a.return;
            }
            a = !0;
        }
        if (5 === l.tag || 6 === l.tag) {
            e: for (var o = e, u = l, i = u; ; )
                if ((Fi(o, i), null !== i.child && 4 !== i.tag)) (i.child.return = i), (i = i.child);
                else {
                    if (i === u) break e;
                    for (; null === i.sibling; ) {
                        if (null === i.return || i.return === u) break e;
                        i = i.return;
                    }
                    (i.sibling.return = i.return), (i = i.sibling);
                }
            r
                ? ((o = n), (u = l.stateNode), 8 === o.nodeType ? o.parentNode.removeChild(u) : o.removeChild(u))
                : n.removeChild(l.stateNode);
        } else if (4 === l.tag) {
            if (null !== l.child) {
                (n = l.stateNode.containerInfo), (r = !0), (l.child.return = l), (l = l.child);
                continue;
            }
        } else if ((Fi(e, l), null !== l.child)) {
            (l.child.return = l), (l = l.child);
            continue;
        }
        if (l === t) break;
        for (; null === l.sibling; ) {
            if (null === l.return || l.return === t) return;
            4 === (l = l.return).tag && (a = !1);
        }
        (l.sibling.return = l.return), (l = l.sibling);
    }
}

function $i(e, t) {
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
            var n = t.updateQueue;
            if (null !== (n = null !== n ? n.lastEffect : null)) {
                var r = (n = n.next);
                do {
                    !(3 & ~r.tag) && ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()), (r = r.next);
                } while (r !== n);
            }
            return;
        case 1:
        case 12:
        case 17:
            return;
        case 5:
            if (null != (n = t.stateNode)) {
                r = t.memoizedProps;
                var l = null !== e ? e.memoizedProps : r;
                e = t.type;
                var a = t.updateQueue;
                if (((t.updateQueue = null), null !== a)) {
                    for (
                        n[va] = r,
                            'input' === e && 'radio' === r.type && null != r.name && yt(n, r),
                            Bt(e, l),
                            t = Bt(e, r),
                            l = 0;
                        l < a.length;
                        l += 2
                    ) {
                        var o = a[l],
                            u = a[l + 1];
                        'style' === o
                            ? jt(n, u)
                            : 'dangerouslySetInnerHTML' === o
                              ? Rt(n, u)
                              : 'children' === o
                                ? Dt(n, u)
                                : Fe(n, o, u, t);
                    }
                    switch (e) {
                        case 'input':
                            bt(n, r);
                            break;
                        case 'textarea':
                            Ct(n, r);
                            break;
                        case 'select':
                            (e = n._wrapperState.wasMultiple),
                                (n._wrapperState.wasMultiple = !!r.multiple),
                                null != (a = r.value)
                                    ? St(n, !!r.multiple, a, !1)
                                    : e !== !!r.multiple &&
                                      (null != r.defaultValue
                                          ? St(n, !!r.multiple, r.defaultValue, !0)
                                          : St(n, !!r.multiple, r.multiple ? [] : '', !1));
                    }
                }
            }
            return;
        case 6:
            if (null === t.stateNode) throw Error(Se(162));
            return void (t.stateNode.nodeValue = t.memoizedProps);
        case 3:
            return void ((n = t.stateNode).hydrate && ((n.hydrate = !1), An(n.containerInfo)));
        case 13:
            return null !== t.memoizedState && ((ss = oo()), Ii(t.child, !0)), void Hi(t);
        case 19:
            return void Hi(t);
        case 23:
        case 24:
            return void Ii(t, null !== t.memoizedState);
    }
    throw Error(Se(163));
}

function Hi(e) {
    var t = e.updateQueue;
    if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new Li()),
            t.forEach(function (t) {
                var r = oc.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
            });
    }
}

function Qi(e, t) {
    return (
        null !== e &&
        (null === (e = e.memoizedState) || null !== e.dehydrated) &&
        null !== (t = t.memoizedState) &&
        null === t.dehydrated
    );
}
var qi = Math.ceil,
    Ki = Ue.ReactCurrentDispatcher,
    Yi = Ue.ReactCurrentOwner,
    Xi = 0,
    Gi = null,
    Zi = null,
    Ji = 0,
    es = 0,
    ts = Ca(0),
    ns = 0,
    rs = null,
    ls = 0,
    as = 0,
    os = 0,
    us = 0,
    is = null,
    ss = 0,
    cs = 1 / 0;

function fs() {
    cs = oo() + 500;
}
var ds,
    ps = null,
    hs = !1,
    ms = null,
    vs = null,
    gs = !1,
    ys = null,
    bs = 90,
    ws = [],
    ks = [],
    Es = null,
    Ss = 0,
    xs = null,
    _s = -1,
    Cs = 0,
    Ps = 0,
    Ns = null,
    Ts = !1;

function Os() {
    return 48 & Xi ? oo() : -1 !== _s ? _s : (_s = oo());
}

function zs(e) {
    if (!(2 & (e = e.mode))) return 1;
    if (!(4 & e)) return 99 === uo() ? 1 : 2;
    if ((0 === Cs && (Cs = ls), 0 !== ho.transition)) {
        0 !== Ps && (Ps = null !== is ? is.pendingLanes : 0), (e = Cs);
        var t = 4186112 & ~Ps;
        return 0 === (t &= -t) && 0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192), t;
    }
    return (
        (e = uo()),
        4 & Xi && 98 === e
            ? (e = lr(12, Cs))
            : (e = lr(
                  (e = (function (e) {
                      switch (e) {
                          case 99:
                              return 15;
                          case 98:
                              return 10;
                          case 97:
                          case 96:
                              return 8;
                          case 95:
                              return 2;
                          default:
                              return 0;
                      }
                  })(e)),
                  Cs
              )),
        e
    );
}

function Ls(e, t, n) {
    if (50 < Ss) throw ((Ss = 0), (xs = null), Error(Se(185)));
    if (null === (e = Ms(e, t))) return null;
    ur(e, t, n), e === Gi && ((os |= t), 4 === ns && Is(e, Ji));
    var r = uo();
    1 === t
        ? 8 & Xi && !(48 & Xi)
            ? Fs(e)
            : (Rs(e, n), 0 === Xi && (fs(), fo()))
        : (!(4 & Xi) || (98 !== r && 99 !== r) || (null === Es ? (Es = new Set([e])) : Es.add(e)), Rs(e, n)),
        (is = e);
}

function Ms(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        (e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return);
    return 3 === n.tag ? n.stateNode : null;
}

function Rs(e, t) {
    for (
        var n = e.callbackNode, r = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes;
        0 < o;

    ) {
        var u = 31 - ir(o),
            i = 1 << u,
            s = a[u];
        if (-1 === s) {
            if (0 === (i & r) || 0 !== (i & l)) {
                (s = t), tr(i);
                var c = er;
                a[u] = 10 <= c ? s + 250 : 6 <= c ? s + 5e3 : -1;
            }
        } else s <= t && (e.expiredLanes |= i);
        o &= ~i;
    }
    if (((r = nr(e, e === Gi ? Ji : 0)), (t = er), 0 === r))
        null !== n && (n !== eo && $a(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else {
        if (null !== n) {
            if (e.callbackPriority === t) return;
            n !== eo && $a(n);
        }
        15 === t
            ? ((n = Fs.bind(null, e)), null === no ? ((no = [n]), (ro = Wa(Ya, po))) : no.push(n), (n = eo))
            : 14 === t
              ? (n = co(99, Fs.bind(null, e)))
              : ((n = (function (e) {
                    switch (e) {
                        case 15:
                        case 14:
                            return 99;
                        case 13:
                        case 12:
                        case 11:
                        case 10:
                            return 98;
                        case 9:
                        case 8:
                        case 7:
                        case 6:
                        case 4:
                        case 5:
                            return 97;
                        case 3:
                        case 2:
                        case 1:
                            return 95;
                        case 0:
                            return 90;
                        default:
                            throw Error(Se(358, e));
                    }
                })(t)),
                (n = co(n, Ds.bind(null, e)))),
            (e.callbackPriority = t),
            (e.callbackNode = n);
    }
}

function Ds(e) {
    if (((_s = -1), (Ps = Cs = 0), 48 & Xi)) throw Error(Se(327));
    var t = e.callbackNode;
    if (Js() && e.callbackNode !== t) return null;
    var n = nr(e, e === Gi ? Ji : 0);
    if (0 === n) return null;
    var r = n,
        l = Xi;
    Xi |= 16;
    var a = $s();
    for ((Gi === e && Ji === r) || (fs(), Bs(e, r)); ; )
        try {
            qs();
            break;
        } catch (u) {
            Ws(e, u);
        }
    if ((wo(), (Ki.current = a), (Xi = l), null !== Zi ? (r = 0) : ((Gi = null), (Ji = 0), (r = ns)), 0 !== (ls & os)))
        Bs(e, 0);
    else if (0 !== r) {
        if (
            (2 === r &&
                ((Xi |= 64), e.hydrate && ((e.hydrate = !1), ca(e.containerInfo)), 0 !== (n = rr(e)) && (r = Hs(e, n))),
            1 === r)
        )
            throw ((t = rs), Bs(e, 0), Is(e, n), Rs(e, oo()), t);
        switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)) {
            case 0:
            case 1:
                throw Error(Se(345));
            case 2:
            case 5:
                Xs(e);
                break;
            case 3:
                if ((Is(e, n), (62914560 & n) === n && 10 < (r = ss + 500 - oo()))) {
                    if (0 !== nr(e, 0)) break;
                    if (((l = e.suspendedLanes) & n) !== n) {
                        Os(), (e.pingedLanes |= e.suspendedLanes & l);
                        break;
                    }
                    e.timeoutHandle = ia(Xs.bind(null, e), r);
                    break;
                }
                Xs(e);
                break;
            case 4:
                if ((Is(e, n), (4186112 & n) === n)) break;
                for (r = e.eventTimes, l = -1; 0 < n; ) {
                    var o = 31 - ir(n);
                    (a = 1 << o), (o = r[o]) > l && (l = o), (n &= ~a);
                }
                if (
                    ((n = l),
                    10 <
                        (n =
                            (120 > (n = oo() - n)
                                ? 120
                                : 480 > n
                                  ? 480
                                  : 1080 > n
                                    ? 1080
                                    : 1920 > n
                                      ? 1920
                                      : 3e3 > n
                                        ? 3e3
                                        : 4320 > n
                                          ? 4320
                                          : 1960 * qi(n / 1960)) - n))
                ) {
                    e.timeoutHandle = ia(Xs.bind(null, e), n);
                    break;
                }
                Xs(e);
                break;
            default:
                throw Error(Se(329));
        }
    }
    return Rs(e, oo()), e.callbackNode === t ? Ds.bind(null, e) : null;
}

function Is(e, t) {
    for (t &= ~us, t &= ~os, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - ir(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}

function Fs(e) {
    if (48 & Xi) throw Error(Se(327));
    if ((Js(), e === Gi && 0 !== (e.expiredLanes & Ji))) {
        var t = Ji,
            n = Hs(e, t);
        0 !== (ls & os) && (n = Hs(e, (t = nr(e, t))));
    } else n = Hs(e, (t = nr(e, 0)));
    if (
        (0 !== e.tag &&
            2 === n &&
            ((Xi |= 64), e.hydrate && ((e.hydrate = !1), ca(e.containerInfo)), 0 !== (t = rr(e)) && (n = Hs(e, t))),
        1 === n)
    )
        throw ((n = rs), Bs(e, 0), Is(e, t), Rs(e, oo()), n);
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Xs(e), Rs(e, oo()), null;
}

function Us(e, t) {
    var n = Xi;
    Xi |= 1;
    try {
        return e(t);
    } finally {
        0 === (Xi = n) && (fs(), fo());
    }
}

function js(e, t) {
    var n = Xi;
    (Xi &= -2), (Xi |= 8);
    try {
        return e(t);
    } finally {
        0 === (Xi = n) && (fs(), fo());
    }
}

function As(e, t) {
    Na(ts, es), (es |= t), (ls |= t);
}

function Vs() {
    (es = ts.current), Pa(ts);
}

function Bs(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), sa(n)), null !== Zi))
        for (n = Zi.return; null !== n; ) {
            var r = n;
            switch (r.tag) {
                case 1:
                    null != (r = r.type.childContextTypes) && Da();
                    break;
                case 3:
                    Zo(), Pa(za), Pa(Oa), pu();
                    break;
                case 5:
                    eu(r);
                    break;
                case 4:
                    Zo();
                    break;
                case 13:
                case 19:
                    Pa(tu);
                    break;
                case 10:
                    ko(r);
                    break;
                case 23:
                case 24:
                    Vs();
            }
            n = n.return;
        }
    (Gi = e), (Zi = cc(e.current, null)), (Ji = es = ls = t), (ns = 0), (rs = null), (us = os = as = 0);
}

function Ws(e, t) {
    for (;;) {
        var n = Zi;
        try {
            if ((wo(), (hu.current = Yu), wu)) {
                for (var r = gu.memoizedState; null !== r; ) {
                    var l = r.queue;
                    null !== l && (l.pending = null), (r = r.next);
                }
                wu = !1;
            }
            if (((vu = 0), (bu = yu = gu = null), (ku = !1), (Yi.current = null), null === n || null === n.return)) {
                (ns = 1), (rs = t), (Zi = null);
                break;
            }
            e: {
                var a = e,
                    o = n.return,
                    u = n,
                    i = t;
                if (
                    ((t = Ji),
                    (u.flags |= 2048),
                    (u.firstEffect = u.lastEffect = null),
                    null !== i && 'object' == typeof i && 'function' == typeof i.then)
                ) {
                    var s = i;
                    if (!(2 & u.mode)) {
                        var c = u.alternate;
                        c
                            ? ((u.updateQueue = c.updateQueue),
                              (u.memoizedState = c.memoizedState),
                              (u.lanes = c.lanes))
                            : ((u.updateQueue = null), (u.memoizedState = null));
                    }
                    var f = !!(1 & tu.current),
                        d = o;
                    do {
                        var p;
                        if ((p = 13 === d.tag)) {
                            var h = d.memoizedState;
                            if (null !== h) p = null !== h.dehydrated;
                            else {
                                var m = d.memoizedProps;
                                p = void 0 !== m.fallback && (!0 !== m.unstable_avoidThisFallback || !f);
                            }
                        }
                        if (p) {
                            var v = d.updateQueue;
                            if (null === v) {
                                var g = new Set();
                                g.add(s), (d.updateQueue = g);
                            } else v.add(s);
                            if (!(2 & d.mode)) {
                                if (((d.flags |= 64), (u.flags |= 16384), (u.flags &= -2981), 1 === u.tag))
                                    if (null === u.alternate) u.tag = 17;
                                    else {
                                        var y = No(-1, 1);
                                        (y.tag = 2), To(u, y);
                                    }
                                u.lanes |= 1;
                                break e;
                            }
                            (i = void 0), (u = t);
                            var b = a.pingCache;
                            if (
                                (null === b
                                    ? ((b = a.pingCache = new Ti()), (i = new Set()), b.set(s, i))
                                    : void 0 === (i = b.get(s)) && ((i = new Set()), b.set(s, i)),
                                !i.has(u))
                            ) {
                                i.add(u);
                                var w = ac.bind(null, a, s, u);
                                s.then(w, w);
                            }
                            (d.flags |= 4096), (d.lanes = t);
                            break e;
                        }
                        d = d.return;
                    } while (null !== d);
                    i = Error(
                        (ct(u.type) || 'A React component') +
                            ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.'
                    );
                }
                5 !== ns && (ns = 2), (i = Pi(i, u)), (d = o);
                do {
                    switch (d.tag) {
                        case 3:
                            (a = i), (d.flags |= 4096), (t &= -t), (d.lanes |= t), Oo(d, Oi(0, a, t));
                            break e;
                        case 1:
                            a = i;
                            var k = d.type,
                                E = d.stateNode;
                            if (
                                !(
                                    64 & d.flags ||
                                    ('function' != typeof k.getDerivedStateFromError &&
                                        (null === E ||
                                            'function' != typeof E.componentDidCatch ||
                                            (null !== vs && vs.has(E))))
                                )
                            ) {
                                (d.flags |= 4096), (t &= -t), (d.lanes |= t), Oo(d, zi(d, a, t));
                                break e;
                            }
                    }
                    d = d.return;
                } while (null !== d);
            }
            Ys(n);
        } catch (S) {
            (t = S), Zi === n && null !== n && (Zi = n = n.return);
            continue;
        }
        break;
    }
}

function $s() {
    var e = Ki.current;
    return (Ki.current = Yu), null === e ? Yu : e;
}

function Hs(e, t) {
    var n = Xi;
    Xi |= 16;
    var r = $s();
    for ((Gi === e && Ji === t) || Bs(e, t); ; )
        try {
            Qs();
            break;
        } catch (l) {
            Ws(e, l);
        }
    if ((wo(), (Xi = n), (Ki.current = r), null !== Zi)) throw Error(Se(261));
    return (Gi = null), (Ji = 0), ns;
}

function Qs() {
    for (; null !== Zi; ) Ks(Zi);
}

function qs() {
    for (; null !== Zi && !Ha(); ) Ks(Zi);
}

function Ks(e) {
    var t = ds(e.alternate, e, es);
    (e.memoizedProps = e.pendingProps), null === t ? Ys(e) : (Zi = t), (Yi.current = null);
}

function Ys(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), 2048 & t.flags)) {
            if (null !== (n = Ci(t))) return (n.flags &= 2047), void (Zi = n);
            null !== e && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
        } else {
            if (null !== (n = _i(n, t, es))) return void (Zi = n);
            if ((24 !== (n = t).tag && 23 !== n.tag) || null === n.memoizedState || 1073741824 & es || !(4 & n.mode)) {
                for (var r = 0, l = n.child; null !== l; ) (r |= l.lanes | l.childLanes), (l = l.sibling);
                n.childLanes = r;
            }
            null !== e &&
                !(2048 & e.flags) &&
                (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                    (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect), (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                    (null !== e.lastEffect ? (e.lastEffect.nextEffect = t) : (e.firstEffect = t), (e.lastEffect = t)));
        }
        if (null !== (t = t.sibling)) return void (Zi = t);
        Zi = t = e;
    } while (null !== t);
    0 === ns && (ns = 5);
}

function Xs(e) {
    var t = uo();
    return so(99, Gs.bind(null, e, t)), null;
}

function Gs(e, t) {
    do {
        Js();
    } while (null !== ys);
    if (48 & Xi) throw Error(Se(327));
    var n = e.finishedWork;
    if (null === n) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(Se(177));
    e.callbackNode = null;
    var r = n.lanes | n.childLanes,
        l = r,
        a = e.pendingLanes & ~l;
    (e.pendingLanes = l),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= l),
        (e.mutableReadLanes &= l),
        (e.entangledLanes &= l),
        (l = e.entanglements);
    for (var o = e.eventTimes, u = e.expirationTimes; 0 < a; ) {
        var i = 31 - ir(a),
            s = 1 << i;
        (l[i] = 0), (o[i] = -1), (u[i] = -1), (a &= ~s);
    }
    if (
        (null !== Es && !(24 & r) && Es.has(e) && Es.delete(e),
        e === Gi && ((Zi = Gi = null), (Ji = 0)),
        1 < n.flags
            ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                : (r = n)
            : (r = n.firstEffect),
        null !== r)
    ) {
        if (((l = Xi), (Xi |= 32), (Yi.current = null), (la = pr), Rl((o = Ml())))) {
            if ('selectionStart' in o)
                u = {
                    start: o.selectionStart,
                    end: o.selectionEnd,
                };
            else
                e: if (
                    ((u = ((u = o.ownerDocument) && u.defaultView) || window),
                    (s = u.getSelection && u.getSelection()) && 0 !== s.rangeCount)
                ) {
                    (u = s.anchorNode), (a = s.anchorOffset), (i = s.focusNode), (s = s.focusOffset);
                    try {
                        u.nodeType, i.nodeType;
                    } catch (_) {
                        u = null;
                        break e;
                    }
                    var c = 0,
                        f = -1,
                        d = -1,
                        p = 0,
                        h = 0,
                        m = o,
                        v = null;
                    t: for (;;) {
                        for (
                            var g;
                            m !== u || (0 !== a && 3 !== m.nodeType) || (f = c + a),
                                m !== i || (0 !== s && 3 !== m.nodeType) || (d = c + s),
                                3 === m.nodeType && (c += m.nodeValue.length),
                                null !== (g = m.firstChild);

                        )
                            (v = m), (m = g);
                        for (;;) {
                            if (m === o) break t;
                            if (
                                (v === u && ++p === a && (f = c),
                                v === i && ++h === s && (d = c),
                                null !== (g = m.nextSibling))
                            )
                                break;
                            v = (m = v).parentNode;
                        }
                        m = g;
                    }
                    u =
                        -1 === f || -1 === d
                            ? null
                            : {
                                  start: f,
                                  end: d,
                              };
                } else u = null;
            u = u || {
                start: 0,
                end: 0,
            };
        } else u = null;
        (aa = {
            focusedElem: o,
            selectionRange: u,
        }),
            (pr = !1),
            (Ns = null),
            (Ts = !1),
            (ps = r);
        do {
            try {
                Zs();
            } catch (_) {
                if (null === ps) throw Error(Se(330));
                lc(ps, _), (ps = ps.nextEffect);
            }
        } while (null !== ps);
        (Ns = null), (ps = r);
        do {
            try {
                for (o = e; null !== ps; ) {
                    var y = ps.flags;
                    if ((16 & y && Dt(ps.stateNode, ''), 128 & y)) {
                        var b = ps.alternate;
                        if (null !== b) {
                            var w = b.ref;
                            null !== w && ('function' == typeof w ? w(null) : (w.current = null));
                        }
                    }
                    switch (1038 & y) {
                        case 2:
                            Ai(ps), (ps.flags &= -3);
                            break;
                        case 6:
                            Ai(ps), (ps.flags &= -3), $i(ps.alternate, ps);
                            break;
                        case 1024:
                            ps.flags &= -1025;
                            break;
                        case 1028:
                            (ps.flags &= -1025), $i(ps.alternate, ps);
                            break;
                        case 4:
                            $i(ps.alternate, ps);
                            break;
                        case 8:
                            Wi(o, (u = ps));
                            var k = u.alternate;
                            Ui(u), null !== k && Ui(k);
                    }
                    ps = ps.nextEffect;
                }
            } catch (_) {
                if (null === ps) throw Error(Se(330));
                lc(ps, _), (ps = ps.nextEffect);
            }
        } while (null !== ps);
        if (
            ((w = aa),
            (b = Ml()),
            (y = w.focusedElem),
            (o = w.selectionRange),
            b !== y && y && y.ownerDocument && Ll(y.ownerDocument.documentElement, y))
        ) {
            null !== o &&
                Rl(y) &&
                ((b = o.start),
                void 0 === (w = o.end) && (w = b),
                'selectionStart' in y
                    ? ((y.selectionStart = b), (y.selectionEnd = Math.min(w, y.value.length)))
                    : (w = ((b = y.ownerDocument || document) && b.defaultView) || window).getSelection &&
                      ((w = w.getSelection()),
                      (u = y.textContent.length),
                      (k = Math.min(o.start, u)),
                      (o = void 0 === o.end ? k : Math.min(o.end, u)),
                      !w.extend && k > o && ((u = o), (o = k), (k = u)),
                      (u = zl(y, k)),
                      (a = zl(y, o)),
                      u &&
                          a &&
                          (1 !== w.rangeCount ||
                              w.anchorNode !== u.node ||
                              w.anchorOffset !== u.offset ||
                              w.focusNode !== a.node ||
                              w.focusOffset !== a.offset) &&
                          ((b = b.createRange()).setStart(u.node, u.offset),
                          w.removeAllRanges(),
                          k > o
                              ? (w.addRange(b), w.extend(a.node, a.offset))
                              : (b.setEnd(a.node, a.offset), w.addRange(b))))),
                (b = []);
            for (w = y; (w = w.parentNode); )
                1 === w.nodeType &&
                    b.push({
                        element: w,
                        left: w.scrollLeft,
                        top: w.scrollTop,
                    });
            for ('function' == typeof y.focus && y.focus(), y = 0; y < b.length; y++)
                ((w = b[y]).element.scrollLeft = w.left), (w.element.scrollTop = w.top);
        }
        (pr = !!la), (aa = la = null), (e.current = n), (ps = r);
        do {
            try {
                for (y = e; null !== ps; ) {
                    var E = ps.flags;
                    if ((36 & E && Di(y, ps.alternate, ps), 128 & E)) {
                        b = void 0;
                        var S = ps.ref;
                        if (null !== S) {
                            var x = ps.stateNode;
                            ps.tag, (b = x), 'function' == typeof S ? S(b) : (S.current = b);
                        }
                    }
                    ps = ps.nextEffect;
                }
            } catch (_) {
                if (null === ps) throw Error(Se(330));
                lc(ps, _), (ps = ps.nextEffect);
            }
        } while (null !== ps);
        (ps = null), to(), (Xi = l);
    } else e.current = n;
    if (gs) (gs = !1), (ys = e), (bs = t);
    else
        for (ps = r; null !== ps; )
            (t = ps.nextEffect),
                (ps.nextEffect = null),
                8 & ps.flags && (((E = ps).sibling = null), (E.stateNode = null)),
                (ps = t);
    if (
        (0 === (r = e.pendingLanes) && (vs = null),
        1 === r ? (e === xs ? Ss++ : ((Ss = 0), (xs = e))) : (Ss = 0),
        (n = n.stateNode),
        Va && 'function' == typeof Va.onCommitFiberRoot)
    )
        try {
            Va.onCommitFiberRoot(Aa, n, void 0, !(64 & ~n.current.flags));
        } catch (_) {}
    if ((Rs(e, oo()), hs)) throw ((hs = !1), (e = ms), (ms = null), e);
    return 8 & Xi || fo(), null;
}

function Zs() {
    for (; null !== ps; ) {
        var e = ps.alternate;
        Ts ||
            null === Ns ||
            (8 & ps.flags ? yn(ps, Ns) && (Ts = !0) : 13 === ps.tag && Qi(e, ps) && yn(ps, Ns) && (Ts = !0));
        var t = ps.flags;
        256 & t && Ri(e, ps),
            !(512 & t) ||
                gs ||
                ((gs = !0),
                co(97, function () {
                    return Js(), null;
                })),
            (ps = ps.nextEffect);
    }
}

function Js() {
    if (90 !== bs) {
        var e = 97 < bs ? 97 : bs;
        return (bs = 90), so(e, nc);
    }
    return !1;
}

function ec(e, t) {
    ws.push(t, e),
        gs ||
            ((gs = !0),
            co(97, function () {
                return Js(), null;
            }));
}

function tc(e, t) {
    ks.push(t, e),
        gs ||
            ((gs = !0),
            co(97, function () {
                return Js(), null;
            }));
}

function nc() {
    if (null === ys) return !1;
    var e = ys;
    if (((ys = null), 48 & Xi)) throw Error(Se(331));
    var t = Xi;
    Xi |= 32;
    var n = ks;
    ks = [];
    for (var r = 0; r < n.length; r += 2) {
        var l = n[r],
            a = n[r + 1],
            o = l.destroy;
        if (((l.destroy = void 0), 'function' == typeof o))
            try {
                o();
            } catch (i) {
                if (null === a) throw Error(Se(330));
                lc(a, i);
            }
    }
    for (n = ws, ws = [], r = 0; r < n.length; r += 2) {
        (l = n[r]), (a = n[r + 1]);
        try {
            var u = l.create;
            l.destroy = u();
        } catch (i) {
            if (null === a) throw Error(Se(330));
            lc(a, i);
        }
    }
    for (u = e.current.firstEffect; null !== u; )
        (e = u.nextEffect), (u.nextEffect = null), 8 & u.flags && ((u.sibling = null), (u.stateNode = null)), (u = e);
    return (Xi = t), fo(), !0;
}

function rc(e, t, n) {
    To(e, (t = Oi(0, (t = Pi(n, t)), 1))), (t = Os()), null !== (e = Ms(e, 1)) && (ur(e, 1, t), Rs(e, t));
}

function lc(e, t) {
    if (3 === e.tag) rc(e, e, t);
    else
        for (var n = e.return; null !== n; ) {
            if (3 === n.tag) {
                rc(n, e, t);
                break;
            }
            if (1 === n.tag) {
                var r = n.stateNode;
                if (
                    'function' == typeof n.type.getDerivedStateFromError ||
                    ('function' == typeof r.componentDidCatch && (null === vs || !vs.has(r)))
                ) {
                    var l = zi(n, (e = Pi(t, e)), 1);
                    if ((To(n, l), (l = Os()), null !== (n = Ms(n, 1)))) ur(n, 1, l), Rs(n, l);
                    else if ('function' == typeof r.componentDidCatch && (null === vs || !vs.has(r)))
                        try {
                            r.componentDidCatch(t, e);
                        } catch (a) {}
                    break;
                }
            }
            n = n.return;
        }
}

function ac(e, t, n) {
    var r = e.pingCache;
    null !== r && r.delete(t),
        (t = Os()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Gi === e &&
            (Ji & n) === n &&
            (4 === ns || (3 === ns && (62914560 & Ji) === Ji && 500 > oo() - ss) ? Bs(e, 0) : (us |= n)),
        Rs(e, t);
}

function oc(e, t) {
    var n = e.stateNode;
    null !== n && n.delete(t),
        0 === (t = 0) &&
            (2 & (t = e.mode)
                ? 4 & t
                    ? (0 === Cs && (Cs = ls), 0 === (t = ar(62914560 & ~Cs)) && (t = 4194304))
                    : (t = 99 === uo() ? 1 : 2)
                : (t = 1)),
        (n = Os()),
        null !== (e = Ms(e, t)) && (ur(e, t, n), Rs(e, n));
}

function uc(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.flags = 0),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}

function ic(e, t, n, r) {
    return new uc(e, t, n, r);
}

function sc(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
}

function cc(e, t) {
    var n = e.alternate;
    return (
        null === n
            ? (((n = ic(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.nextEffect = null),
              (n.firstEffect = null),
              (n.lastEffect = null)),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            null === t
                ? null
                : {
                      lanes: t.lanes,
                      firstContext: t.firstContext,
                  }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}

function fc(e, t, n, r, l, a) {
    var o = 2;
    if (((r = e), 'function' == typeof e)) sc(e) && (o = 1);
    else if ('string' == typeof e) o = 5;
    else
        e: switch (e) {
            case Ve:
                return dc(n.children, l, a, t);
            case Je:
                (o = 8), (l |= 16);
                break;
            case Be:
                (o = 8), (l |= 1);
                break;
            case We:
                return ((e = ic(12, n, t, 8 | l)).elementType = We), (e.type = We), (e.lanes = a), e;
            case qe:
                return ((e = ic(13, n, t, l)).type = qe), (e.elementType = qe), (e.lanes = a), e;
            case Ke:
                return ((e = ic(19, n, t, l)).elementType = Ke), (e.lanes = a), e;
            case et:
                return pc(n, l, a, t);
            case tt:
                return ((e = ic(24, n, t, l)).elementType = tt), (e.lanes = a), e;
            default:
                if ('object' == typeof e && null !== e)
                    switch (e.$$typeof) {
                        case $e:
                            o = 10;
                            break e;
                        case He:
                            o = 9;
                            break e;
                        case Qe:
                            o = 11;
                            break e;
                        case Ye:
                            o = 14;
                            break e;
                        case Xe:
                            (o = 16), (r = null);
                            break e;
                        case Ge:
                            o = 22;
                            break e;
                    }
                throw Error(Se(130, null == e ? e : typeof e, ''));
        }
    return ((t = ic(o, n, t, l)).elementType = e), (t.type = r), (t.lanes = a), t;
}

function dc(e, t, n, r) {
    return ((e = ic(7, e, r, t)).lanes = n), e;
}

function pc(e, t, n, r) {
    return ((e = ic(23, e, r, t)).elementType = et), (e.lanes = n), e;
}

function hc(e, t, n) {
    return ((e = ic(6, e, null, t)).lanes = n), e;
}

function mc(e, t, n) {
    return (
        ((t = ic(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}

function vc(e, t, n) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.pendingContext = this.context = null),
        (this.hydrate = n),
        (this.callbackNode = null),
        (this.callbackPriority = 0),
        (this.eventTimes = or(0)),
        (this.expirationTimes = or(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = or(0)),
        (this.mutableSourceEagerHydrationData = null);
}

function gc(e, t, n, r) {
    var l = t.current,
        a = Os(),
        o = zs(l);
    e: if (n) {
        t: {
            if (hn((n = n._reactInternals)) !== n || 1 !== n.tag) throw Error(Se(170));
            var u = n;
            do {
                switch (u.tag) {
                    case 3:
                        u = u.stateNode.context;
                        break t;
                    case 1:
                        if (Ra(u.type)) {
                            u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                            break t;
                        }
                }
                u = u.return;
            } while (null !== u);
            throw Error(Se(171));
        }
        if (1 === n.tag) {
            var i = n.type;
            if (Ra(i)) {
                n = Fa(n, i, u);
                break e;
            }
        }
        n = u;
    } else n = Ta;
    return (
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = No(a, o)).payload = {
            element: e,
        }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        To(l, t),
        Ls(l, o, a),
        o
    );
}

function yc(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
}

function bc(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
    }
}

function wc(e, t) {
    bc(e, t), (e = e.alternate) && bc(e, t);
}

function kc(e, t, n) {
    var r = (null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources) || null;
    if (
        ((n = new vc(e, t, null != n && !0 === n.hydrate)),
        (t = ic(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
        (n.current = t),
        (t.stateNode = n),
        Co(t),
        (e[ga] = n.current),
        Yl(8 === e.nodeType ? e.parentNode : e),
        r)
    )
        for (e = 0; e < r.length; e++) {
            var l = (t = r[e])._getVersion;
            (l = l(t._source)),
                null == n.mutableSourceEagerHydrationData
                    ? (n.mutableSourceEagerHydrationData = [t, l])
                    : n.mutableSourceEagerHydrationData.push(t, l);
        }
    this._internalRoot = n;
}

function Ec(e) {
    return !(
        !e ||
        (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
    );
}

function Sc(e, t, n, r, l) {
    var a = n._reactRootContainer;
    if (a) {
        var o = a._internalRoot;
        if ('function' == typeof l) {
            var u = l;
            l = function () {
                var e = yc(o);
                u.call(e);
            };
        }
        gc(t, o, e, l);
    } else {
        if (
            ((a = n._reactRootContainer =
                (function (e, t) {
                    if (
                        (t ||
                            (t = !(
                                !(t = e ? (9 === e.nodeType ? e.documentElement : e.firstChild) : null) ||
                                1 !== t.nodeType ||
                                !t.hasAttribute('data-reactroot')
                            )),
                        !t)
                    )
                        for (var n; (n = e.lastChild); ) e.removeChild(n);
                    return new kc(
                        e,
                        0,
                        t
                            ? {
                                  hydrate: !0,
                              }
                            : void 0
                    );
                })(n, r)),
            (o = a._internalRoot),
            'function' == typeof l)
        ) {
            var i = l;
            l = function () {
                var e = yc(o);
                i.call(e);
            };
        }
        js(function () {
            gc(t, o, e, l);
        });
    }
    return yc(o);
}

function xc(e, t) {
    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!Ec(t)) throw Error(Se(200));
    return (function (e, t, n) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
            $$typeof: Ae,
            key: null == r ? null : '' + r,
            children: e,
            containerInfo: t,
            implementation: n,
        };
    })(e, t, null, n);
}
(ds = function (e, t, n) {
    var r = t.lanes;
    if (null !== e)
        if (e.memoizedProps !== t.pendingProps || za.current) ei = !0;
        else {
            if (0 === (n & r)) {
                switch (((ei = !1), t.tag)) {
                    case 3:
                        ci(t), fu();
                        break;
                    case 5:
                        Jo(t);
                        break;
                    case 1:
                        Ra(t.type) && Ua(t);
                        break;
                    case 4:
                        Go(t, t.stateNode.containerInfo);
                        break;
                    case 10:
                        r = t.memoizedProps.value;
                        var l = t.type._context;
                        Na(vo, l._currentValue), (l._currentValue = r);
                        break;
                    case 13:
                        if (null !== t.memoizedState)
                            return 0 !== (n & t.child.childLanes)
                                ? vi(e, t, n)
                                : (Na(tu, 1 & tu.current), null !== (t = Si(e, t, n)) ? t.sibling : null);
                        Na(tu, 1 & tu.current);
                        break;
                    case 19:
                        if (((r = 0 !== (n & t.childLanes)), 64 & e.flags)) {
                            if (r) return Ei(e, t, n);
                            t.flags |= 64;
                        }
                        if (
                            (null !== (l = t.memoizedState) &&
                                ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
                            Na(tu, tu.current),
                            r)
                        )
                            break;
                        return null;
                    case 23:
                    case 24:
                        return (t.lanes = 0), ai(e, t, n);
                }
                return Si(e, t, n);
            }
            ei = !!(16384 & e.flags);
        }
    else ei = !1;
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            if (
                ((r = t.type),
                null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (l = Ma(t, Oa.current)),
                So(t, n),
                (l = xu(null, t, r, e, l, n)),
                (t.flags |= 1),
                'object' == typeof l && null !== l && 'function' == typeof l.render && void 0 === l.$$typeof)
            ) {
                if (((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), Ra(r))) {
                    var a = !0;
                    Ua(t);
                } else a = !1;
                (t.memoizedState = null !== l.state && void 0 !== l.state ? l.state : null), Co(t);
                var o = r.getDerivedStateFromProps;
                'function' == typeof o && Ro(t, r, o, e),
                    (l.updater = Do),
                    (t.stateNode = l),
                    (l._reactInternals = t),
                    jo(t, r, e, n),
                    (t = si(null, t, r, !0, a, n));
            } else (t.tag = 0), ti(null, t, l, n), (t = t.child);
            return t;
        case 16:
            l = t.elementType;
            e: {
                switch (
                    (null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                    (e = t.pendingProps),
                    (l = (a = l._init)(l._payload)),
                    (t.type = l),
                    (a = t.tag =
                        (function (e) {
                            if ('function' == typeof e) return sc(e) ? 1 : 0;
                            if (null != e) {
                                if ((e = e.$$typeof) === Qe) return 11;
                                if (e === Ye) return 14;
                            }
                            return 2;
                        })(l)),
                    (e = mo(l, e)),
                    a)
                ) {
                    case 0:
                        t = ui(null, t, l, e, n);
                        break e;
                    case 1:
                        t = ii(null, t, l, e, n);
                        break e;
                    case 11:
                        t = ni(null, t, l, e, n);
                        break e;
                    case 14:
                        t = ri(null, t, l, mo(l.type, e), r, n);
                        break e;
                }
                throw Error(Se(306, l, ''));
            }
            return t;
        case 0:
            return (r = t.type), (l = t.pendingProps), ui(e, t, r, (l = t.elementType === r ? l : mo(r, l)), n);
        case 1:
            return (r = t.type), (l = t.pendingProps), ii(e, t, r, (l = t.elementType === r ? l : mo(r, l)), n);
        case 3:
            if ((ci(t), (r = t.updateQueue), null === e || null === r)) throw Error(Se(282));
            if (
                ((r = t.pendingProps),
                (l = null !== (l = t.memoizedState) ? l.element : null),
                Po(e, t),
                zo(t, r, null, n),
                (r = t.memoizedState.element) === l)
            )
                fu(), (t = Si(e, t, n));
            else {
                if (
                    ((a = (l = t.stateNode).hydrate) &&
                        ((lu = fa(t.stateNode.containerInfo.firstChild)), (ru = t), (a = au = !0)),
                    a)
                ) {
                    if (null != (e = l.mutableSourceEagerHydrationData))
                        for (l = 0; l < e.length; l += 2)
                            ((a = e[l])._workInProgressVersionPrimary = e[l + 1]), du.push(a);
                    for (n = Ho(t, null, r, n), t.child = n; n; ) (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                } else ti(e, t, r, n), fu();
                t = t.child;
            }
            return t;
        case 5:
            return (
                Jo(t),
                null === e && iu(t),
                (r = t.type),
                (l = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (o = l.children),
                ua(r, l) ? (o = null) : null !== a && ua(r, a) && (t.flags |= 16),
                oi(e, t),
                ti(e, t, o, n),
                t.child
            );
        case 6:
            return null === e && iu(t), null;
        case 13:
            return vi(e, t, n);
        case 4:
            return (
                Go(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = $o(t, null, r, n)) : ti(e, t, r, n),
                t.child
            );
        case 11:
            return (r = t.type), (l = t.pendingProps), ni(e, t, r, (l = t.elementType === r ? l : mo(r, l)), n);
        case 7:
            return ti(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
            return ti(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                (r = t.type._context), (l = t.pendingProps), (o = t.memoizedProps), (a = l.value);
                var u = t.type._context;
                if ((Na(vo, u._currentValue), (u._currentValue = a), null !== o))
                    if (
                        ((u = o.value),
                        0 ===
                            (a = Pl(u, a)
                                ? 0
                                : 0 |
                                  ('function' == typeof r._calculateChangedBits
                                      ? r._calculateChangedBits(u, a)
                                      : 1073741823)))
                    ) {
                        if (o.children === l.children && !za.current) {
                            t = Si(e, t, n);
                            break e;
                        }
                    } else
                        for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                            var i = u.dependencies;
                            if (null !== i) {
                                o = u.child;
                                for (var s = i.firstContext; null !== s; ) {
                                    if (s.context === r && 0 !== (s.observedBits & a)) {
                                        1 === u.tag && (((s = No(-1, n & -n)).tag = 2), To(u, s)),
                                            (u.lanes |= n),
                                            null !== (s = u.alternate) && (s.lanes |= n),
                                            Eo(u.return, n),
                                            (i.lanes |= n);
                                        break;
                                    }
                                    s = s.next;
                                }
                            } else o = 10 === u.tag && u.type === t.type ? null : u.child;
                            if (null !== o) o.return = u;
                            else
                                for (o = u; null !== o; ) {
                                    if (o === t) {
                                        o = null;
                                        break;
                                    }
                                    if (null !== (u = o.sibling)) {
                                        (u.return = o.return), (o = u);
                                        break;
                                    }
                                    o = o.return;
                                }
                            u = o;
                        }
                ti(e, t, l.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (l = t.type),
                (r = (a = t.pendingProps).children),
                So(t, n),
                (r = r((l = xo(l, a.unstable_observedBits)))),
                (t.flags |= 1),
                ti(e, t, r, n),
                t.child
            );
        case 14:
            return (a = mo((l = t.type), t.pendingProps)), ri(e, t, l, (a = mo(l.type, a)), r, n);
        case 15:
            return li(e, t, t.type, t.pendingProps, r, n);
        case 17:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : mo(r, l)),
                null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                Ra(r) ? ((e = !0), Ua(t)) : (e = !1),
                So(t, n),
                Fo(t, r, l),
                jo(t, r, l, n),
                si(null, t, r, !0, e, n)
            );
        case 19:
            return Ei(e, t, n);
        case 23:
        case 24:
            return ai(e, t, n);
    }
    throw Error(Se(156, t.tag));
}),
    (kc.prototype.render = function (e) {
        gc(e, this._internalRoot, null, null);
    }),
    (kc.prototype.unmount = function () {
        var e = this._internalRoot,
            t = e.containerInfo;
        gc(null, e, null, function () {
            t[ga] = null;
        });
    }),
    (bn = function (e) {
        13 === e.tag && (Ls(e, 4, Os()), wc(e, 4));
    }),
    (wn = function (e) {
        13 === e.tag && (Ls(e, 67108864, Os()), wc(e, 67108864));
    }),
    (kn = function (e) {
        if (13 === e.tag) {
            var t = Os(),
                n = zs(e);
            Ls(e, n, t), wc(e, n);
        }
    }),
    (En = function (e, t) {
        return t();
    }),
    ($t = function (e, t, n) {
        switch (t) {
            case 'input':
                if ((bt(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                    for (n = e; n.parentNode; ) n = n.parentNode;
                    for (
                        n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var l = Ea(r);
                            if (!l) throw Error(Se(90));
                            ht(r), bt(r, l);
                        }
                    }
                }
                break;
            case 'textarea':
                Ct(e, n);
                break;
            case 'select':
                null != (t = n.value) && St(e, !!n.multiple, t, !1);
        }
    }),
    (Xt = Us),
    (Gt = function (e, t, n, r, l) {
        var a = Xi;
        Xi |= 4;
        try {
            return so(98, e.bind(null, t, n, r, l));
        } finally {
            0 === (Xi = a) && (fs(), fo());
        }
    }),
    (Zt = function () {
        !(49 & Xi) &&
            ((function () {
                if (null !== Es) {
                    var e = Es;
                    (Es = null),
                        e.forEach(function (e) {
                            (e.expiredLanes |= 24 & e.pendingLanes), Rs(e, oo());
                        });
                }
                fo();
            })(),
            Js());
    }),
    (Jt = function (e, t) {
        var n = Xi;
        Xi |= 2;
        try {
            return e(t);
        } finally {
            0 === (Xi = n) && (fs(), fo());
        }
    });
var _c = {
        Events: [
            wa,
            ka,
            Ea,
            Kt,
            Yt,
            Js,
            {
                current: !1,
            },
        ],
    },
    Cc = {
        findFiberByHostInstance: ba,
        bundleType: 0,
        version: '17.0.2',
        rendererPackageName: 'react-dom',
    },
    Pc = {
        bundleType: Cc.bundleType,
        version: Cc.version,
        rendererPackageName: Cc.rendererPackageName,
        rendererConfig: Cc.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Ue.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return null === (e = gn(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
            Cc.findFiberByHostInstance ||
            function () {
                return null;
            },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
    };
if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var Nc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nc.isDisabled && Nc.supportsFiber)
        try {
            (Aa = Nc.inject(Pc)), (Va = Nc);
        } catch (Mt) {}
}
(ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _c),
    (ve.createPortal = xc),
    (ve.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
            if ('function' == typeof e.render) throw Error(Se(188));
            throw Error(Se(268, Object.keys(e)));
        }
        return (e = null === (e = gn(t)) ? null : e.stateNode);
    }),
    (ve.flushSync = function (e, t) {
        var n = Xi;
        if (48 & n) return e(t);
        Xi |= 1;
        try {
            if (e) return so(99, e.bind(null, t));
        } finally {
            (Xi = n), fo();
        }
    }),
    (ve.hydrate = function (e, t, n) {
        if (!Ec(t)) throw Error(Se(200));
        return Sc(null, e, t, !0, n);
    }),
    (ve.render = function (e, t, n) {
        if (!Ec(t)) throw Error(Se(200));
        return Sc(null, e, t, !1, n);
    }),
    (ve.unmountComponentAtNode = function (e) {
        if (!Ec(e)) throw Error(Se(40));
        return (
            !!e._reactRootContainer &&
            (js(function () {
                Sc(null, null, e, !1, function () {
                    (e._reactRootContainer = null), (e[ga] = null);
                });
            }),
            !0)
        );
    }),
    (ve.unstable_batchedUpdates = Us),
    (ve.unstable_createPortal = function (e, t) {
        return xc(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
    }),
    (ve.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!Ec(n)) throw Error(Se(200));
        if (null == e || void 0 === e._reactInternals) throw Error(Se(38));
        return Sc(e, t, n, !1, r);
    }),
    (ve.version = '17.0.2'),
    (function e() {
        if (
            'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
                console.error(t);
            }
    })(),
    (me.exports = ve);
var Tc = me.exports;
const Oc = a(Tc);
const zc = a(e => t => (n, r) => {
    0 === n &&
        t(0, (t, n) => {
            r(t, 1 === t ? e(n) : n);
        });
});

function Lc() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.reduce((e, t) => t(e));
}
const Mc = 'call',
    Rc = 'emit',
    Dc = '@@livechat/postmessenger',
    Ic = '@@livechat/4way',
    Fc = 'handshake',
    Uc = 'handshake_echo',
    jc = 'response',
    Ac = e => !!e.data && e.data[Dc],
    Vc = () =>
        Lc(
            d(p(E), f(document, 'readystatechange')),
            s(() => 'complete' === document.readyState),
            h
        ),
    Bc = S(() =>
        Lc(
            f(window, 'message'),
            s(Ac),
            zc(e => ((e.data.origin = e.origin), e.data)),
            h
        )
    );

function Wc(e) {
    return t =>
        (e => (t, n) => {
            if (0 !== t) return;
            let r,
                l = !1,
                a = [];
            const o = () => {
                a.forEach(e => {
                    e(2);
                });
            };

            function u(e) {
                2 === e && (o(), r && r(2));
            }
            e(0, (e, t) => {
                if (0 === e) (r = t), n(0, u);
                else if (1 === e) {
                    const e = t,
                        r = a.length;
                    e(0, (e, t) => {
                        if (0 === e) return void a.push(t);
                        if (l) return void n(e, t);
                        let o = a.splice(r, 1);
                        (l = !0), u(2), (a = o), n(e, t);
                    });
                } else 2 === e && t ? ((r = null), o(), n(2, t)) : 2 === e && ((r = null), a.length || n(2));
            });
        })(zc(e)(t));
}

function $c(e) {
    return t => u(zc(e)(t));
}

function Hc(e) {
    return function (t, n) {
        if (0 === t) {
            var r = !1;
            n(0, function (e) {
                2 === e && (r = !0);
            }),
                r || n(2, e || new Error());
        }
    };
}
let Qc = 0;
const qc = function (e, t, n, r) {
    return (
        void 0 === r && (r = Qc++),
        i(
            () => (
                (n.request = r),
                t(n),
                Lc(
                    e,
                    s(e => e.type === jc && e.request === r),
                    $c(e => {
                        if (!e.data.error) return p(() => e.data.result);
                        const { real: t, error: n } = e.data.result;
                        if (!t) return Hc(n);
                        const r = new Error(n.message);
                        return b('code', n) && (r.code = n.code), Hc(r);
                    }),
                    m(1)
                )
            )
        )
    );
};

function Kc() {
    return (
        (Kc = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Kc.apply(null, arguments)
    );
}
const Yc = function (e, t, n, r, l) {
        return (
            void 0 === l && (l = null),
            Kc({}, e, {
                call: function (e) {
                    for (var l = arguments.length, a = new Array(l > 1 ? l - 1 : 0), o = 1; o < l; o++)
                        a[o - 1] = arguments[o];
                    return Lc(
                        qc(
                            t,
                            r,
                            n(Mc, {
                                method: e,
                                args: a,
                            })
                        ),
                        g
                    );
                },
                emit(e, t) {
                    r(
                        n(Rc, {
                            event: e,
                            arg: t,
                        })
                    );
                },
                data: l,
            })
        );
    },
    Xc = (e, t, n, r) => ({
        [Dc]: !0,
        owner: e,
        instance: t,
        type: n,
        data: r,
    }),
    Gc = (e, t, n, r) => l => {
        switch (l.type) {
            case Mc:
                return void _(() => {
                    const { method: t, args: n } = l.data;
                    return r[t].apply(e, n);
                }).then(
                    e => {
                        (l.type = jc),
                            (l.data = {
                                error: !1,
                                result: e,
                            }),
                            n(l);
                    },
                    e => {
                        let t;
                        (l.type = jc),
                            e instanceof Error
                                ? ((t = {
                                      real: !0,
                                      error: {
                                          message: e.message,
                                      },
                                  }),
                                  b('code', e) && (t.error.code = e.code))
                                : (t = {
                                      real: !1,
                                      error: e,
                                  }),
                            (l.data = {
                                error: !0,
                                result: t,
                            }),
                            n(l);
                    }
                );
            case Rc:
                {
                    const { event: e, arg: n } = l.data;
                    t(e, n);
                }
                return;
            default:
                return;
        }
    },
    Zc = e => x(e => 'function' == typeof e, e);
export {
    h as A,
    u as B,
    S as C,
    Zc as D,
    Bc as E,
    Yc as F,
    Xc as G,
    qc as H,
    v as I,
    Ic as J,
    Gc as K,
    Uc as L,
    Fc as M,
    x as N,
    Vc as O,
    Wc as P,
    jc as Q,
    pe as R,
    _ as S,
    n as _,
    c as a,
    f as b,
    he as c,
    i as d,
    Tc as e,
    s as f,
    a as g,
    N as h,
    k as i,
    zc as j,
    g as k,
    p as l,
    d as m,
    E as n,
    R as o,
    Lc as p,
    l as q,
    fe as r,
    $c as s,
    m as t,
    de as u,
    Oc as v,
    b as w,
    w as x,
    o as y,
    r as z,
};
