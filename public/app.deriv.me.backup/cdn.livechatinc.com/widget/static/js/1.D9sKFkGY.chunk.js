import {
    p as e,
    y as t,
    z as n,
    A as i,
    m as r,
    D as o,
    x as a,
    f as s,
    E as l,
    L as c,
    F as u,
    G as d,
    H as p,
    I as f,
    J as m,
    K as h,
    N as g,
    O as y,
    P as v,
    Q as w,
    T as b,
    U as k,
    V as x,
    u as S,
    W as I,
    X as z,
    Y as E,
    Z as _,
    _ as C,
    $ as P,
    a0 as A,
    a1 as F,
    a2 as M,
    a3 as T,
    a4 as O,
    h as D,
    l as N,
    a5 as L,
    a6 as V,
    j as W,
    k as R,
    a7 as j,
    a8 as q,
    a9 as U,
    aa as G,
    ab as B,
    ac as H,
    ad as $,
    i as Z,
    ae as J,
    af as Y,
    ag as X,
    ah as K,
    ai as Q,
    aj as ee,
    ak as te,
    al as ne,
    am as ie,
    an as re,
    ao as oe,
    ap as ae,
    aq as se,
    ar as le,
    as as ce,
    at as ue,
    au as de,
    av as pe,
    aw as fe,
    ax as me,
    ay as he,
} from './5.DjBaMMVQ.chunk.js';
import { g as ge, i as ye, a as ve, d as we } from './6.B0_QvnEW.chunk.js';
import {
    g as be,
    d as ke,
    b as xe,
    m as Se,
    l as Ie,
    f as ze,
    t as Ee,
    a as _e,
    _ as Ce,
    n as Pe,
    r as Ae,
    o as Fe,
    c as Me,
    e as Te,
    h as Oe,
    i as De,
} from './3.DK8xU-ow.chunk.js';
import {
    f as Ne,
    a as Le,
    i as Ve,
    m as We,
    c as Re,
    r as je,
    u as qe,
    C as Ue,
    b as Ge,
    e as Be,
    h as He,
    j as $e,
    k as Ze,
    l as Je,
    n as Ye,
    g as Xe,
    o as Ke,
    q as Qe,
} from './2.duIGFjkW.chunk.js';
import { d as et } from './10.al-9NYxR.chunk.js';
import { i as tt } from './11.DJPUQwQu.chunk.js';
const nt = {};
const it = be((...e) => (t, n) => {
    if (0 !== t) return;
    const i = e.length;
    if (0 === i) return n(0, () => {}), n(1, []), void n(2);
    let r = i,
        o = i,
        a = i;
    const s = new Array(i),
        l = new Array(i),
        c = (e, t) => {
            if (0 !== e) for (let n = 0; n < i; n++) l[n](e, t);
        };
    e.forEach((e, t) => {
        (s[t] = nt),
            e(0, (e, u) => {
                if (0 === e) (l[t] = u), 0 === --r && n(0, c);
                else if (1 === e) {
                    const e = o ? (s[t] === nt ? --o : o) : 0;
                    if (((s[t] = u), 0 === e)) {
                        const e = new Array(i);
                        for (let t = 0; t < i; ++t) e[t] = s[t];
                        n(1, e);
                    }
                } else 2 === e ? 0 === --a && n(2) : n(e, u);
            });
    });
});
const rt = be(e => t => (n, i) => {
    if (0 !== n) return;
    let r,
        o = 0;
    t(0, (t, n) => {
        0 === t ? ((r = n), i(t, n)) : 1 === t && o < e ? (o++, r(1)) : i(t, n);
    });
});

function ot(e, t) {
    return function (t, n) {
        if (0 === t) {
            var i = 0,
                r = setTimeout(
                    function () {
                        n(1, i++), n(2);
                    },
                    e instanceof Date ? e - Date.now() : e
                );
            n(0, function (e) {
                2 === e && clearTimeout(r);
            });
        }
    };
}

function at(e, t) {
    return e + t;
}
const st = (e, t) => u(e, 'visibility').state === t,
    lt = e =>
        w(e).some(e => {
            if ('form' !== e.type) return !1;
            const { fields: t } = e.properties;
            return t.some(e => 'group_chooser' === e.type);
        }),
    ct = n => {
        const i = e(
            s(n, e => st(e, 'maximized')),
            rt(1),
            ze(Boolean)
        );
        e(
            i,
            Ee(1),
            ze(() => !Math.floor(1e3 * Math.random())),
            _e(() =>
                (e => {
                    d({
                        isMessagingModeEnabled: m(e),
                        isCustomerInvited: f(e),
                        groupAvailability: e.getApplicationState().availability,
                        minimizedType: p(e),
                    });
                })(n)
            )
        ),
            e(
                (n =>
                    e(
                        o(n, a),
                        t(() =>
                            e(
                                s(n, e => l(e, c).active),
                                rt(1),
                                ze(Boolean)
                            )
                        )
                    ))(n),
                _e(() =>
                    (e => {
                        const {
                                s: t,
                                embedded: n,
                                testGroup: i,
                                actingAsDirectLink: r,
                                config: o,
                                language: a,
                                integrationName: s,
                                clientChatNumber: l,
                                clientVisitNumber: u,
                                wrapperVersion: d,
                            } = e.getApplicationState(),
                            m = o && o.theme && o.theme.name,
                            S = h() || 'none',
                            I = g(),
                            z = y(e),
                            E = !!v(e, c),
                            _ = !!e.getSessionUser().email,
                            C = f(e) ? 'invitation' : 'other',
                            P = p(e),
                            A = w(e),
                            F = A.find(e => !!e.properties.invitation),
                            M = b(A.filter(e => 'message' === e.type || 'message_draft' === e.type)),
                            T = k(e);
                        x(
                            Ce(
                                {
                                    s: t,
                                    embedded: n,
                                    themeName: m,
                                    testGroup: i,
                                    uniqueGroups: I,
                                    minimizedType: P,
                                    language: a || 'unknown',
                                    integrationName: s || 'none',
                                    mobileBridgeType: S,
                                    chatHistoryEnabled: z,
                                    hasPreviousChatThreads: E,
                                    hasGroupChooser: String(lt(e)),
                                    hasBeenImmediatelyQueued: String(e.getChat(c).properties.queued),
                                    isCustomerEmailSet: _,
                                    actingAsDirectLink: r,
                                    chatWidgetWidth: window.innerWidth,
                                    chatWidgetHeight: window.innerHeight,
                                    clientChatNumber: l + 1,
                                    clientVisitNumber: u,
                                    chatSource: C,
                                    fromGreeting: !!Le(!1, 'properties.fromGreeting', M),
                                    homescreenEnabled: T,
                                },
                                'android' === S &&
                                    d && {
                                        wrapper_version: d,
                                    },
                                'invitation' === C &&
                                    F && {
                                        greetingId: F.properties.id,
                                        greetingUniqueId: F.properties.uniqueId,
                                        greetingType: F.properties.type,
                                        greetingSubtype: F.properties.subtype,
                                        greetingAddon: F.properties.addon || 'none',
                                    }
                            )
                        );
                    })(n)
                )
            );
    },
    ut = e => {
        let { code: t, message: n } = e;
        const i = new Error(n);
        return (i.code = t), i;
    },
    dt = (e, t) =>
        S(
            '' +
                (e =>
                    'https://accounts.livechatinc.com' +
                    (e => {
                        let { uniqueGroups: t, organizationId: n, groupId: i } = e;
                        return t ? '/v2/customer/' + n + '/' + i + '/token' : '/v2/customer/token';
                    })(e))(e),
            {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({
                    response_type: 'token',
                    grant_type: 'cookie',
                    client_id: e.clientId,
                    organization_id: e.organizationId,
                    redirect_uri: ge(String(window.location)) + window.location.pathname,
                }),
            }
        )
            .then(e => e.json())
            .then(t =>
                ((e, t) => {
                    if ('identity_exception' in e)
                        throw ut({
                            code: 'SSO_IDENTITY_EXCEPTION',
                            message: e.identity_exception,
                        });
                    if ('oauth_exception' in e)
                        throw ut({
                            code: 'SSO_OAUTH_EXCEPTION',
                            message: e.oauth_exception,
                        });
                    return {
                        accessToken: e.access_token,
                        entityId: e.entity_id,
                        expiresIn: 1e3 * e.expires_in,
                        tokenType: e.token_type,
                        creationDate: Date.now(),
                        organizationId: t,
                    };
                })(t, e.organizationId)
            ),
    pt = e => {
        let { organizationId: t, clientId: n } = e;
        if ('string' != typeof t || 'string' != typeof n)
            throw new Error('You need to pass valid configuration object: { organizationId, clientId }.');
    },
    ft = (e, t, n) => {
        pt(e);
        const i = I(n),
            r =
                '' +
                (e.tokenStoragePrefix || '@@lc_auth_token:') +
                e.organizationId +
                (e.uniqueGroups ? ':' + e.groupId : '');
        let o = null,
            a = null,
            s = i.getItem(r).then(e => {
                null !== s && ((s = null), e && (a = JSON.parse(e)));
            });
        const l = () => (
                (o = dt(e).then(
                    e => ((o = null), i.setItem(r, JSON.stringify(e)), (a = e), e),
                    e => {
                        throw ((o = null), e);
                    }
                )),
                o
            ),
            c = () =>
                o ||
                (a &&
                !(e => {
                    let { creationDate: t, expiresIn: n } = e;
                    return Date.now() >= t + n;
                })(a)
                    ? Promise.resolve(a)
                    : s
                      ? s.then(c)
                      : l()),
            u = () => (s ? s.then(u) : Promise.resolve(!!a));
        return {
            getFreshToken: l,
            getToken: c,
            hasToken: u,
            invalidate: () => ((a = null), (s = null), i.removeItem(r)),
        };
    };
window.performance && 'function' == typeof window.performance.mark && window.performance.mark('lc_js_loaded');
const mt = e =>
        new Promise(t => {
            const n = performance.getEntriesByName(e);
            if (!z(n)) return void t(n[0]);
            if ('undefined' == typeof PerformanceObserver) return void t(null);
            const i = setTimeout(() => {
                    r.disconnect(), t(null);
                }, 6e4),
                r = new PerformanceObserver(n => {
                    const o = E(t => t.name === e, n.getEntries());
                    o && (r.disconnect(), clearTimeout(i), t(o));
                });
            r.observe({
                entryTypes: ['paint'],
            });
        }),
    ht = () => {
        const e = 'lc_get_time_' + _();
        window.performance && 'function' == typeof window.performance.mark && window.performance.mark(e);
        const [{ startTime: t }] = performance.getEntriesByName(e);
        return performance.clearMarks(e), t;
    },
    gt = () => {
        if ('undefined' == typeof PerformanceObserver) return null;
        const e = ht(),
            t = [],
            n = new PerformanceObserver(e => {
                t.push.apply(t, e.getEntries());
            });
        n.observe({
            entryTypes: ['longtask'],
        });
        const i = () => {
            const n = b(t);
            return n ? ((i = n), ht() - i.startTime + i.duration) : ht() - e;
            var i;
        };
        return {
            disconnect: () => n.disconnect(),
            getLongTasks: () => [].concat(t),
            waitForIdle: e =>
                new Promise(r => {
                    const o = () => {
                        t.push.apply(t, n.takeRecords());
                        const a = i();
                        a >= e ? r() : setTimeout(o, Math.ceil(e - a));
                    };
                    o();
                }),
        };
    },
    yt = 'first-paint',
    vt = (e, t) => {
        if (!e || !t) return null;
        const n = b(e);
        return n ? Math.max(n.startTime + n.duration, t.startTime) : t.startTime;
    },
    wt = () => {
        if (Math.floor(1e3 * Math.random())) return;
        const e = (function (e) {
            const t = gt();
            return t
                ? mt(e).then(e => (e ? t.waitForIdle(5e3).then(() => (t.disconnect(), t.getLongTasks())) : null))
                : Promise.resolve(null);
        })(yt);
        return {
            getLogs: () =>
                Promise.all([e, mt(yt)]).then(e => {
                    let [t, n] = e;
                    return C(
                        e => {
                            return e && ((t = 2), Number(e.toFixed(t)));
                            var t;
                        },
                        {
                            totalBlockingTime: t && ((i = t.map(e => e.duration)), i.reduce(at, 0)),
                            firstContentfulPaint: null == n ? void 0 : n.startTime,
                            timeToInteractive: vt(t, n),
                        }
                    );
                    var i;
                }),
        };
    },
    bt = new RegExp(
        '(' +
            [
                'BetterJsPop',
                'LOCAL_STORAGE is null',
                "Can't find variable: auto",
                "Can't find variable: ext",
                "Can't find variable: $",
                '_avast_submit',
                'No license or organization found in the URL.',
                'getNewsReadStatus4Vivo',
                'is banned!',
                'Object Not Found Matching Id',
            ].join('|') +
            ')'
    ),
    kt = new RegExp('(' + ['chrome-extension://', 'https://www.smybeds.com/'].join('|') + ')'),
    xt = e => {
        if ((e.message && bt.test(e.message)) || (e.stack && kt.test(e.stack))) return !0;
        try {
            const t = JSON.stringify(e);
            if (t && bt.test(t)) return !0;
        } catch (t) {}
        return !1;
    };
window.addEventListener('error', e => {
    let { error: t } = e;
    if (t && !xt(t)) {
        if (t.message && -1 !== t.message.indexOf('Incorrect locale information provided')) {
            const e = navigator.language || navigator.userLanguage || 'en-US';
            return void P('onerror', t, {
                'navigator.language': navigator.language,
                'navigator.userLanguage': navigator.userLanguage,
                locale: e,
                err: (() => {
                    try {
                        return new Intl.Locale(e), !1;
                    } catch (t) {
                        return !0;
                    }
                })(),
            });
        }
        P('onerror', t);
    }
}),
    window.addEventListener('unhandledrejection', e => {
        e && e.reason && (xt(e.reason) || P('unhandledrejection', e.reason));
    });
const St = e => e.some(Ve),
    It = (o, a) => {
        const s = e(
            (function () {
                const e = Ie(() => !!document.hasFocus && document.hasFocus()),
                    t = r(() => !0)(xe(window, 'focus')),
                    n = r(() => !1)(xe(window, 'blur'));
                return Se(e, t, n);
            })(),
            A
        );
        if (!a)
            return void e(
                s,
                _e(e => {
                    o.setApplicationState({
                        pageFocused: e,
                        applicationFocused: e,
                    });
                })
            );
        const l =
            ((c = a),
            e(
                ke(() =>
                    i(
                        Promise.race([
                            c.call('isFocused'),
                            new Promise(e => {
                                return (
                                    (n = 'focus'),
                                    (i = e),
                                    void (t = c).on(n, function e(r) {
                                        t.off(n, e), i(r);
                                    })
                                );
                                var t, n, i;
                            }),
                        ])
                    )
                ),
                t(t => e(Ne(c, 'focus'), n(t)))
            ));
        var c;
        e(
            s,
            _e(e => {
                o.setApplicationState({
                    applicationFocused: e,
                }),
                    a.emit('focus', e);
            })
        ),
            e(
                it(s, l),
                et(50),
                r(St),
                F(),
                _e(e => {
                    o.setApplicationState({
                        pageFocused: e,
                    });
                })
            );
    },
    zt = 'new_message',
    Et = e => 'function' == typeof e.start && 'function' == typeof e.stop,
    _t = e => {
        Et(e) ? e.start(0) : e.noteOn(0);
    },
    Ct = () => {
        const e = new (window.AudioContext || window.webkitAudioContext)();
        let t = !0,
            n = [];
        const i = t =>
                new Promise((n, i) => {
                    e.decodeAudioData(t, n, i);
                }),
            r = t => ({
                play: () => {
                    const n = e.createBufferSource();
                    n.connect(e.destination), (n.buffer = t);
                    return {
                        playback: new Promise((t, i) => {
                            if (((n.onended = () => t()), _t(n), 'running' !== e.state)) {
                                const t = new Error(
                                    "Playback failed, AudioContext is in incorrect state '" + e.state + "'"
                                );
                                (t.name = 'PlaybackError'), i(t);
                            }
                        }),
                        stop() {
                            (e => {
                                Et(e) ? e.stop(0) : e.noteOff(0);
                            })(n);
                        },
                    };
                },
            });
        return {
            preload: e =>
                (e =>
                    new Promise((t, n) => {
                        const i = new XMLHttpRequest();
                        (i.onload = () => {
                            t(i.response);
                        }),
                            (i.onerror = n),
                            i.open('GET', e),
                            (i.responseType = 'arraybuffer'),
                            i.send();
                    }))(e)
                    .then(i)
                    .then(r),
            playSound: e => {
                const i = e.play();
                return t && n.push(i), i.playback;
            },
            unlock: () =>
                new Promise(i => {
                    const r = () => {
                        document.removeEventListener('click', r, !0),
                            t &&
                                (n.forEach(e => {
                                    e.stop();
                                }),
                                (n = []),
                                (t = !1)),
                            e.resume(),
                            (() => {
                                const t = e.createBuffer(1, 1, 22050),
                                    n = e.createBufferSource();
                                (n.buffer = t), n.connect(e.destination), _t(n);
                            })(),
                            i();
                    };
                    document.addEventListener('click', r, !0);
                }),
        };
    },
    Pt = /\.(\w+)$/i,
    At = new Audio(),
    Ft = {
        mp3: 'audio/mpeg',
        ogg: 'audio/ogg',
    },
    Mt = e => {
        const t = (e => {
            const t = e.match(Pt);
            return t ? t[1].toLowerCase() : '';
        })(e);
        return t in Ft && '' !== At.canPlayType(Ft[t]);
    },
    Tt = () => 'function' == typeof window.webkitAudioContext || 'function' == typeof window.AudioContext,
    Ot = e =>
        new Promise((t, n) => {
            const i = new Audio(e);
            (i.onloadeddata = () => {
                t(i);
            }),
                (i.onerror = n);
        }),
    Dt = e => {
        const t = e.play();
        return (n = t) && 'function' == typeof n.then ? t : Promise.resolve();
        var n;
    },
    Nt = () =>
        Tt()
            ? (() => {
                  const e = Ct(),
                      t = We(t => {
                          const n = e.preload(t);
                          return n.catch(Pe), n;
                      });
                  return {
                      play: n => {
                          const i = t(n).then(e.playSound);
                          return i.catch(Pe), i;
                      },
                      preload: t,
                      unlock: () => e.unlock(),
                  };
              })()
            : (() => {
                  const e = We(Ot);
                  return {
                      play: t => e(t).then(Dt),
                      preload: e,
                      unlock: () => Promise.resolve(),
                  };
              })(),
    Lt = e => {
        const t = Nt(),
            n = (e =>
                Object.keys(e).reduce((t, n) => {
                    const i = E(e => Mt(e), M(e[n]));
                    return (t[n] = i), t;
                }, {}))(e);
        return {
            play: e => {
                const i = n[e];
                t.play(i).then(Pe, Pe);
            },
            preload: e => {
                const i = n[e];
                t.preload(i).then(Pe, Pe);
            },
            unlock: () => t.unlock(),
        };
    },
    Vt = () => {
        const e = Lt({
            [zt]: [
                'https://cdn.livechatinc.com/widget/static/media/new_message.CTorF0S8.ogg',
                'https://cdn.livechatinc.com/widget/static/media/new_message.C32z5SiC.mp3',
            ],
        });
        return (
            ye && (window.parent.soundPlayer = e),
            e.unlock().then(() =>
                (function (e, t) {
                    let n = 0;
                    return function () {
                        Date.now() - n >= e && ((n = Date.now()), t(...arguments));
                    };
                })(2e3, t => {
                    e.play(t);
                })
            )
        );
    },
    Wt = {
        isIframeActive: null,
        hasIframeUnlocked: !1,
    };
var Rt = {
        exports: {},
    },
    jt = {},
    qt = Fe,
    Ut = Ae;

function Gt(e) {
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
var Bt = 60106,
    Ht = 60107,
    $t = 60108,
    Zt = 60114,
    Jt = 60109,
    Yt = 60110,
    Xt = 60112,
    Kt = 60113,
    Qt = 60120,
    en = 60115,
    tn = 60116,
    nn = 60121,
    rn = 60117,
    on = 60119,
    an = 60129,
    sn = 60131;
if ('function' == typeof Symbol && Symbol.for) {
    var ln = Symbol.for;
    (Bt = ln('react.portal')),
        (Ht = ln('react.fragment')),
        ($t = ln('react.strict_mode')),
        (Zt = ln('react.profiler')),
        (Jt = ln('react.provider')),
        (Yt = ln('react.context')),
        (Xt = ln('react.forward_ref')),
        (Kt = ln('react.suspense')),
        (Qt = ln('react.suspense_list')),
        (en = ln('react.memo')),
        (tn = ln('react.lazy')),
        (nn = ln('react.block')),
        (rn = ln('react.fundamental')),
        (on = ln('react.scope')),
        (an = ln('react.debug_trace_mode')),
        (sn = ln('react.legacy_hidden'));
}

function cn(e) {
    if (null == e) return null;
    if ('function' == typeof e) return e.displayName || e.name || null;
    if ('string' == typeof e) return e;
    switch (e) {
        case Ht:
            return 'Fragment';
        case Bt:
            return 'Portal';
        case Zt:
            return 'Profiler';
        case $t:
            return 'StrictMode';
        case Kt:
            return 'Suspense';
        case Qt:
            return 'SuspenseList';
    }
    if ('object' == typeof e)
        switch (e.$$typeof) {
            case Yt:
                return (e.displayName || 'Context') + '.Consumer';
            case Jt:
                return (e._context.displayName || 'Context') + '.Provider';
            case Xt:
                var t = e.render;
                return (
                    (t = t.displayName || t.name || ''),
                    e.displayName || ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
                );
            case en:
                return cn(e.type);
            case nn:
                return cn(e._render);
            case tn:
                (t = e._payload), (e = e._init);
                try {
                    return cn(e(t));
                } catch (n) {}
        }
    return null;
}
var un = Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    dn = {};

function pn(e, t) {
    for (var n = 0 | e._threadCount; n <= t; n++) (e[n] = e._currentValue2), (e._threadCount = n + 1);
}
for (var fn = new Uint16Array(16), mn = 0; 15 > mn; mn++) fn[mn] = mn + 1;
fn[15] = 0;
var hn =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    gn = Object.prototype.hasOwnProperty,
    yn = {},
    vn = {};

function wn(e) {
    return !!gn.call(vn, e) || (!gn.call(yn, e) && (hn.test(e) ? (vn[e] = !0) : ((yn[e] = !0), !1)));
}

function bn(e, t, n, i, r, o, a) {
    (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = i),
        (this.attributeNamespace = r),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
        (this.removeEmptyString = a);
}
var kn = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        kn[e] = new bn(e, 0, !1, e, null, !1, !1);
    }),
    [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
        var t = e[0];
        kn[t] = new bn(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
        kn[e] = new bn(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
        kn[e] = new bn(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function (e) {
            kn[e] = new bn(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
        kn[e] = new bn(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
        kn[e] = new bn(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
        kn[e] = new bn(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
        kn[e] = new bn(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
var xn = /[\-:]([a-z])/g;

function Sn(e) {
    return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(xn, Sn);
        kn[t] = new bn(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
        var t = e.replace(xn, Sn);
        kn[t] = new bn(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
        var t = e.replace(xn, Sn);
        kn[t] = new bn(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
        kn[e] = new bn(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (kn.xlinkHref = new bn('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
        kn[e] = new bn(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
var In = /["'&<>]/;

function zn(e) {
    if ('boolean' == typeof e || 'number' == typeof e) return '' + e;
    e = '' + e;
    var t = In.exec(e);
    if (t) {
        var n,
            i = '',
            r = 0;
        for (n = t.index; n < e.length; n++) {
            switch (e.charCodeAt(n)) {
                case 34:
                    t = '&quot;';
                    break;
                case 38:
                    t = '&amp;';
                    break;
                case 39:
                    t = '&#x27;';
                    break;
                case 60:
                    t = '&lt;';
                    break;
                case 62:
                    t = '&gt;';
                    break;
                default:
                    continue;
            }
            r !== n && (i += e.substring(r, n)), (r = n + 1), (i += t);
        }
        e = r !== n ? i + e.substring(r, n) : i;
    }
    return e;
}

function En(e, t) {
    var n,
        i = kn.hasOwnProperty(e) ? kn[e] : null;
    return (
        (n = 'style' !== e) &&
            (n =
                null !== i
                    ? 0 === i.type
                    : 2 < e.length && ('o' === e[0] || 'O' === e[0]) && ('n' === e[1] || 'N' === e[1])),
        n ||
        (function (e, t, n) {
            if (
                null == t ||
                (function (e, t, n) {
                    if (null !== n && 0 === n.type) return !1;
                    switch (typeof t) {
                        case 'function':
                        case 'symbol':
                            return !0;
                        case 'boolean':
                            return null !== n
                                ? !n.acceptsBooleans
                                : 'data-' !== (e = e.toLowerCase().slice(0, 5)) && 'aria-' !== e;
                        default:
                            return !1;
                    }
                })(e, t, n)
            )
                return !0;
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
        })(e, t, i)
            ? ''
            : null !== i
              ? ((e = i.attributeName),
                3 === (n = i.type) || (4 === n && !0 === t)
                    ? e + '=""'
                    : (i.sanitizeURL && (t = '' + t), e + '="' + zn(t) + '"'))
              : wn(e)
                ? e + '="' + zn(t) + '"'
                : ''
    );
}
var _n =
        'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    Cn = null,
    Pn = null,
    An = null,
    Fn = !1,
    Mn = !1,
    Tn = null,
    On = 0;

function Dn() {
    if (null === Cn) throw Error(Gt(321));
    return Cn;
}

function Nn() {
    if (0 < On) throw Error(Gt(312));
    return {
        memoizedState: null,
        queue: null,
        next: null,
    };
}

function Ln() {
    return (
        null === An
            ? null === Pn
                ? ((Fn = !1), (Pn = An = Nn()))
                : ((Fn = !0), (An = Pn))
            : null === An.next
              ? ((Fn = !1), (An = An.next = Nn()))
              : ((Fn = !0), (An = An.next)),
        An
    );
}

function Vn(e, t, n, i) {
    for (; Mn; ) (Mn = !1), (On += 1), (An = null), (n = e(t, i));
    return Wn(), n;
}

function Wn() {
    (Cn = null), (Mn = !1), (Pn = null), (On = 0), (An = Tn = null);
}

function Rn(e, t) {
    return 'function' == typeof t ? t(e) : t;
}

function jn(e, t, n) {
    if (((Cn = Dn()), (An = Ln()), Fn)) {
        var i = An.queue;
        if (((t = i.dispatch), null !== Tn && void 0 !== (n = Tn.get(i)))) {
            Tn.delete(i), (i = An.memoizedState);
            do {
                (i = e(i, n.action)), (n = n.next);
            } while (null !== n);
            return (An.memoizedState = i), [i, t];
        }
        return [An.memoizedState, t];
    }
    return (
        (e = e === Rn ? ('function' == typeof t ? t() : t) : void 0 !== n ? n(t) : t),
        (An.memoizedState = e),
        (e = (e = An.queue =
            {
                last: null,
                dispatch: null,
            }).dispatch =
            Un.bind(null, Cn, e)),
        [An.memoizedState, e]
    );
}

function qn(e, t) {
    if (((Cn = Dn()), (t = void 0 === t ? null : t), null !== (An = Ln()))) {
        var n = An.memoizedState;
        if (null !== n && null !== t) {
            var i = n[1];
            e: if (null === i) i = !1;
            else {
                for (var r = 0; r < i.length && r < t.length; r++)
                    if (!_n(t[r], i[r])) {
                        i = !1;
                        break e;
                    }
                i = !0;
            }
            if (i) return n[0];
        }
    }
    return (e = e()), (An.memoizedState = [e, t]), e;
}

function Un(e, t, n) {
    if (!(25 > On)) throw Error(Gt(301));
    if (e === Cn)
        if (
            ((Mn = !0),
            (e = {
                action: n,
                next: null,
            }),
            null === Tn && (Tn = new Map()),
            void 0 === (n = Tn.get(t)))
        )
            Tn.set(t, e);
        else {
            for (t = n; null !== t.next; ) t = t.next;
            t.next = e;
        }
}

function Gn() {}
var Bn = null,
    Hn = {
        readContext: function (e) {
            var t = Bn.threadID;
            return pn(e, t), e[t];
        },
        useContext: function (e) {
            Dn();
            var t = Bn.threadID;
            return pn(e, t), e[t];
        },
        useMemo: qn,
        useReducer: jn,
        useRef: function (e) {
            Cn = Dn();
            var t = (An = Ln()).memoizedState;
            return null === t
                ? ((e = {
                      current: e,
                  }),
                  (An.memoizedState = e))
                : t;
        },
        useState: function (e) {
            return jn(Rn, e);
        },
        useLayoutEffect: function () {},
        useCallback: function (e, t) {
            return qn(function () {
                return e;
            }, t);
        },
        useImperativeHandle: Gn,
        useEffect: Gn,
        useDebugValue: Gn,
        useDeferredValue: function (e) {
            return Dn(), e;
        },
        useTransition: function () {
            return (
                Dn(),
                [
                    function (e) {
                        e();
                    },
                    !1,
                ]
            );
        },
        useOpaqueIdentifier: function () {
            return (Bn.identifierPrefix || '') + 'R:' + (Bn.uniqueID++).toString(36);
        },
        useMutableSource: function (e, t) {
            return Dn(), t(e._source);
        },
    },
    $n = 'http://www.w3.org/1999/xhtml';
var Zn = {
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
    },
    Jn = qt(
        {
            menuitem: !0,
        },
        Zn
    ),
    Yn = {
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
    Xn = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Yn).forEach(function (e) {
    Xn.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yn[t] = Yn[e]);
    });
});
var Kn = /([A-Z])/g,
    Qn = /^ms-/,
    ei = Ut.Children.toArray,
    ti = un.ReactCurrentDispatcher,
    ni = {
        listing: !0,
        pre: !0,
        textarea: !0,
    },
    ii = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
    ri = {},
    oi = {};
var ai = Object.prototype.hasOwnProperty,
    si = {
        children: null,
        dangerouslySetInnerHTML: null,
        suppressContentEditableWarning: null,
        suppressHydrationWarning: null,
    };

function li(e, t) {
    if (void 0 === e) throw Error(Gt(152, cn(t) || 'Component'));
}

function ci(e, t, n) {
    function i(i, r) {
        var o = r.prototype && r.prototype.isReactComponent,
            a = (function (e, t, n, i) {
                if (i && 'object' == typeof (i = e.contextType) && null !== i) return pn(i, n), i[n];
                if ((e = e.contextTypes)) {
                    for (var r in ((n = {}), e)) n[r] = t[r];
                    t = n;
                } else t = dn;
                return t;
            })(r, t, n, o),
            s = [],
            l = !1,
            c = {
                isMounted: function () {
                    return !1;
                },
                enqueueForceUpdate: function () {
                    if (null === s) return null;
                },
                enqueueReplaceState: function (e, t) {
                    (l = !0), (s = [t]);
                },
                enqueueSetState: function (e, t) {
                    if (null === s) return null;
                    s.push(t);
                },
            };
        if (o) {
            if (((o = new r(i.props, a, c)), 'function' == typeof r.getDerivedStateFromProps)) {
                var u = r.getDerivedStateFromProps.call(null, i.props, o.state);
                null != u && (o.state = qt({}, o.state, u));
            }
        } else if (((Cn = {}), (o = r(i.props, a, c)), null == (o = Vn(r, i.props, o, a)) || null == o.render))
            return void li((e = o), r);
        if (
            ((o.props = i.props),
            (o.context = a),
            (o.updater = c),
            void 0 === (c = o.state) && (o.state = c = null),
            'function' == typeof o.UNSAFE_componentWillMount || 'function' == typeof o.componentWillMount)
        )
            if (
                ('function' == typeof o.componentWillMount &&
                    'function' != typeof r.getDerivedStateFromProps &&
                    o.componentWillMount(),
                'function' == typeof o.UNSAFE_componentWillMount &&
                    'function' != typeof r.getDerivedStateFromProps &&
                    o.UNSAFE_componentWillMount(),
                s.length)
            ) {
                c = s;
                var d = l;
                if (((s = null), (l = !1), d && 1 === c.length)) o.state = c[0];
                else {
                    u = d ? c[0] : o.state;
                    var p = !0;
                    for (d = d ? 1 : 0; d < c.length; d++) {
                        var f = c[d];
                        null != (f = 'function' == typeof f ? f.call(o, u, i.props, a) : f) &&
                            (p ? ((p = !1), (u = qt({}, u, f))) : qt(u, f));
                    }
                    o.state = u;
                }
            } else s = null;
        if (
            (li((e = o.render()), r),
            'function' == typeof o.getChildContext && 'object' == typeof (i = r.childContextTypes))
        ) {
            var m = o.getChildContext();
            for (var h in m) if (!(h in i)) throw Error(Gt(108, cn(r) || 'Unknown', h));
        }
        m && (t = qt({}, t, m));
    }
    for (; Ut.isValidElement(e); ) {
        var r = e,
            o = r.type;
        if ('function' != typeof o) break;
        i(r, o);
    }
    return {
        child: e,
        context: t,
    };
}
var ui = (function () {
    function e(e, t, n) {
        Ut.isValidElement(e)
            ? e.type !== Ht
                ? (e = [e])
                : ((e = e.props.children), (e = Ut.isValidElement(e) ? [e] : ei(e)))
            : (e = ei(e)),
            (e = {
                type: null,
                domNamespace: $n,
                children: e,
                childIndex: 0,
                context: dn,
                footer: '',
            });
        var i = fn[0];
        if (0 === i) {
            var r = fn,
                o = 2 * (i = r.length);
            if (!(65536 >= o)) throw Error(Gt(304));
            var a = new Uint16Array(o);
            for (a.set(r), (fn = a)[0] = i + 1, r = i; r < o - 1; r++) fn[r] = r + 1;
            fn[o - 1] = 0;
        } else fn[0] = fn[i];
        (this.threadID = i),
            (this.stack = [e]),
            (this.exhausted = !1),
            (this.currentSelectValue = null),
            (this.previousWasTextNode = !1),
            (this.makeStaticMarkup = t),
            (this.suspenseDepth = 0),
            (this.contextIndex = -1),
            (this.contextStack = []),
            (this.contextValueStack = []),
            (this.uniqueID = 0),
            (this.identifierPrefix = (n && n.identifierPrefix) || '');
    }
    var t = e.prototype;
    return (
        (t.destroy = function () {
            if (!this.exhausted) {
                (this.exhausted = !0), this.clearProviders();
                var e = this.threadID;
                (fn[e] = fn[0]), (fn[0] = e);
            }
        }),
        (t.pushProvider = function (e) {
            var t = ++this.contextIndex,
                n = e.type._context,
                i = this.threadID;
            pn(n, i);
            var r = n[i];
            (this.contextStack[t] = n), (this.contextValueStack[t] = r), (n[i] = e.props.value);
        }),
        (t.popProvider = function () {
            var e = this.contextIndex,
                t = this.contextStack[e],
                n = this.contextValueStack[e];
            (this.contextStack[e] = null),
                (this.contextValueStack[e] = null),
                this.contextIndex--,
                (t[this.threadID] = n);
        }),
        (t.clearProviders = function () {
            for (var e = this.contextIndex; 0 <= e; e--)
                this.contextStack[e][this.threadID] = this.contextValueStack[e];
        }),
        (t.read = function (e) {
            if (this.exhausted) return null;
            var t = Bn;
            Bn = this;
            var n = ti.current;
            ti.current = Hn;
            try {
                for (var i = [''], r = !1; i[0].length < e; ) {
                    if (0 === this.stack.length) {
                        this.exhausted = !0;
                        var o = this.threadID;
                        (fn[o] = fn[0]), (fn[0] = o);
                        break;
                    }
                    var a = this.stack[this.stack.length - 1];
                    if (r || a.childIndex >= a.children.length) {
                        var s = a.footer;
                        if (('' !== s && (this.previousWasTextNode = !1), this.stack.pop(), 'select' === a.type))
                            this.currentSelectValue = null;
                        else if (null != a.type && null != a.type.type && a.type.type.$$typeof === Jt)
                            this.popProvider(a.type);
                        else if (a.type === Kt) {
                            this.suspenseDepth--;
                            var l = i.pop();
                            if (r) {
                                r = !1;
                                var c = a.fallbackFrame;
                                if (!c) throw Error(Gt(303));
                                this.stack.push(c), (i[this.suspenseDepth] += '\x3c!--$!--\x3e');
                                continue;
                            }
                            i[this.suspenseDepth] += l;
                        }
                        i[this.suspenseDepth] += s;
                    } else {
                        var u = a.children[a.childIndex++],
                            d = '';
                        try {
                            d += this.render(u, a.context, a.domNamespace);
                        } catch (p) {
                            if (null != p && 'function' == typeof p.then) throw Error(Gt(294));
                            throw p;
                        }
                        i.length <= this.suspenseDepth && i.push(''), (i[this.suspenseDepth] += d);
                    }
                }
                return i[0];
            } finally {
                (ti.current = n), (Bn = t), Wn();
            }
        }),
        (t.render = function (e, t, n) {
            if ('string' == typeof e || 'number' == typeof e)
                return '' === (n = '' + e)
                    ? ''
                    : this.makeStaticMarkup
                      ? zn(n)
                      : this.previousWasTextNode
                        ? '\x3c!-- --\x3e' + zn(n)
                        : ((this.previousWasTextNode = !0), zn(n));
            if (((e = (t = ci(e, t, this.threadID)).child), (t = t.context), null === e || !1 === e)) return '';
            if (!Ut.isValidElement(e)) {
                if (null != e && null != e.$$typeof) {
                    if ((n = e.$$typeof) === Bt) throw Error(Gt(257));
                    throw Error(Gt(258, n.toString()));
                }
                return (
                    (e = ei(e)),
                    this.stack.push({
                        type: null,
                        domNamespace: n,
                        children: e,
                        childIndex: 0,
                        context: t,
                        footer: '',
                    }),
                    ''
                );
            }
            var i = e.type;
            if ('string' == typeof i) return this.renderDOM(e, t, n);
            switch (i) {
                case sn:
                case an:
                case $t:
                case Zt:
                case Qt:
                case Ht:
                    return (
                        (e = ei(e.props.children)),
                        this.stack.push({
                            type: null,
                            domNamespace: n,
                            children: e,
                            childIndex: 0,
                            context: t,
                            footer: '',
                        }),
                        ''
                    );
                case Kt:
                    throw Error(Gt(294));
                case on:
                    throw Error(Gt(343));
            }
            if ('object' == typeof i && null !== i)
                switch (i.$$typeof) {
                    case Xt:
                        Cn = {};
                        var r = i.render(e.props, e.ref);
                        return (
                            (r = Vn(i.render, e.props, r, e.ref)),
                            (r = ei(r)),
                            this.stack.push({
                                type: null,
                                domNamespace: n,
                                children: r,
                                childIndex: 0,
                                context: t,
                                footer: '',
                            }),
                            ''
                        );
                    case en:
                        return (
                            (e = [
                                Ut.createElement(
                                    i.type,
                                    qt(
                                        {
                                            ref: e.ref,
                                        },
                                        e.props
                                    )
                                ),
                            ]),
                            this.stack.push({
                                type: null,
                                domNamespace: n,
                                children: e,
                                childIndex: 0,
                                context: t,
                                footer: '',
                            }),
                            ''
                        );
                    case Jt:
                        return (
                            (n = {
                                type: e,
                                domNamespace: n,
                                children: (i = ei(e.props.children)),
                                childIndex: 0,
                                context: t,
                                footer: '',
                            }),
                            this.pushProvider(e),
                            this.stack.push(n),
                            ''
                        );
                    case Yt:
                        (i = e.type), (r = e.props);
                        var o = this.threadID;
                        return (
                            pn(i, o),
                            (i = ei(r.children(i[o]))),
                            this.stack.push({
                                type: e,
                                domNamespace: n,
                                children: i,
                                childIndex: 0,
                                context: t,
                                footer: '',
                            }),
                            ''
                        );
                    case rn:
                        throw Error(Gt(338));
                    case tn:
                        return (
                            (i = (r = (i = e.type)._init)(i._payload)),
                            (e = [
                                Ut.createElement(
                                    i,
                                    qt(
                                        {
                                            ref: e.ref,
                                        },
                                        e.props
                                    )
                                ),
                            ]),
                            this.stack.push({
                                type: null,
                                domNamespace: n,
                                children: e,
                                childIndex: 0,
                                context: t,
                                footer: '',
                            }),
                            ''
                        );
                }
            throw Error(Gt(130, null == i ? i : typeof i, ''));
        }),
        (t.renderDOM = function (e, t, n) {
            var i = e.type.toLowerCase();
            if (!ri.hasOwnProperty(i)) {
                if (!ii.test(i)) throw Error(Gt(65, i));
                ri[i] = !0;
            }
            var r = e.props;
            if ('input' === i)
                r = qt(
                    {
                        type: void 0,
                    },
                    r,
                    {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: null != r.value ? r.value : r.defaultValue,
                        checked: null != r.checked ? r.checked : r.defaultChecked,
                    }
                );
            else if ('textarea' === i) {
                var o = r.value;
                if (null == o) {
                    o = r.defaultValue;
                    var a = r.children;
                    if (null != a) {
                        if (null != o) throw Error(Gt(92));
                        if (Array.isArray(a)) {
                            if (!(1 >= a.length)) throw Error(Gt(93));
                            a = a[0];
                        }
                        o = '' + a;
                    }
                    null == o && (o = '');
                }
                r = qt({}, r, {
                    value: void 0,
                    children: '' + o,
                });
            } else if ('select' === i)
                (this.currentSelectValue = null != r.value ? r.value : r.defaultValue),
                    (r = qt({}, r, {
                        value: void 0,
                    }));
            else if ('option' === i) {
                a = this.currentSelectValue;
                var s = (function (e) {
                    if (null == e) return e;
                    var t = '';
                    return (
                        Ut.Children.forEach(e, function (e) {
                            null != e && (t += e);
                        }),
                        t
                    );
                })(r.children);
                if (null != a) {
                    var l = null != r.value ? r.value + '' : s;
                    if (((o = !1), Array.isArray(a))) {
                        for (var c = 0; c < a.length; c++)
                            if ('' + a[c] === l) {
                                o = !0;
                                break;
                            }
                    } else o = '' + a === l;
                    r = qt(
                        {
                            selected: void 0,
                            children: void 0,
                        },
                        r,
                        {
                            selected: o,
                            children: s,
                        }
                    );
                }
            }
            if ((o = r)) {
                if (Jn[i] && (null != o.children || null != o.dangerouslySetInnerHTML)) throw Error(Gt(137, i));
                if (null != o.dangerouslySetInnerHTML) {
                    if (null != o.children) throw Error(Gt(60));
                    if ('object' != typeof o.dangerouslySetInnerHTML || !('__html' in o.dangerouslySetInnerHTML))
                        throw Error(Gt(61));
                }
                if (null != o.style && 'object' != typeof o.style) throw Error(Gt(62));
            }
            (o = r), (a = this.makeStaticMarkup), (s = 1 === this.stack.length), (l = '<' + e.type);
            e: if (-1 === i.indexOf('-')) c = 'string' == typeof o.is;
            else
                switch (i) {
                    case 'annotation-xml':
                    case 'color-profile':
                    case 'font-face':
                    case 'font-face-src':
                    case 'font-face-uri':
                    case 'font-face-format':
                    case 'font-face-name':
                    case 'missing-glyph':
                        c = !1;
                        break e;
                    default:
                        c = !0;
                }
            for (v in o)
                if (ai.call(o, v)) {
                    var u = o[v];
                    if (null != u) {
                        if ('style' === v) {
                            var d = void 0,
                                p = '',
                                f = '';
                            for (d in u)
                                if (u.hasOwnProperty(d)) {
                                    var m = 0 === d.indexOf('--'),
                                        h = u[d];
                                    if (null != h) {
                                        if (m) var g = d;
                                        else if (((g = d), oi.hasOwnProperty(g))) g = oi[g];
                                        else {
                                            var y = g.replace(Kn, '-$1').toLowerCase().replace(Qn, '-ms-');
                                            g = oi[g] = y;
                                        }
                                        (p += f + g + ':'),
                                            (f = d),
                                            (p += m =
                                                null == h || 'boolean' == typeof h || '' === h
                                                    ? ''
                                                    : m ||
                                                        'number' != typeof h ||
                                                        0 === h ||
                                                        (Yn.hasOwnProperty(f) && Yn[f])
                                                      ? ('' + h).trim()
                                                      : h + 'px'),
                                            (f = ';');
                                    }
                                }
                            u = p || null;
                        }
                        (d = null),
                            c
                                ? si.hasOwnProperty(v) || (d = wn((d = v)) && null != u ? d + '="' + zn(u) + '"' : '')
                                : (d = En(v, u)),
                            d && (l += ' ' + d);
                    }
                }
            a || (s && (l += ' data-reactroot=""'));
            var v = l;
            (o = ''), Zn.hasOwnProperty(i) ? (v += '/>') : ((v += '>'), (o = '</' + e.type + '>'));
            e: {
                if (null != (a = r.dangerouslySetInnerHTML)) {
                    if (null != a.__html) {
                        a = a.__html;
                        break e;
                    }
                } else if ('string' == typeof (a = r.children) || 'number' == typeof a) {
                    a = zn(a);
                    break e;
                }
                a = null;
            }
            return (
                null != a
                    ? ((r = []), ni.hasOwnProperty(i) && '\n' === a.charAt(0) && (v += '\n'), (v += a))
                    : (r = ei(r.children)),
                (e = e.type),
                (n =
                    null == n || 'http://www.w3.org/1999/xhtml' === n
                        ? (function (e) {
                              switch (e) {
                                  case 'svg':
                                      return 'http://www.w3.org/2000/svg';
                                  case 'math':
                                      return 'http://www.w3.org/1998/Math/MathML';
                                  default:
                                      return 'http://www.w3.org/1999/xhtml';
                              }
                          })(e)
                        : 'http://www.w3.org/2000/svg' === n && 'foreignObject' === e
                          ? 'http://www.w3.org/1999/xhtml'
                          : n),
                this.stack.push({
                    domNamespace: n,
                    type: i,
                    children: r,
                    childIndex: 0,
                    context: t,
                    footer: o,
                }),
                (this.previousWasTextNode = !1),
                v
            );
        }),
        e
    );
})();
(jt.renderToNodeStream = function () {
    throw Error(Gt(207));
}),
    (jt.renderToStaticMarkup = function (e, t) {
        e = new ui(e, !0, t);
        try {
            return e.read(1 / 0);
        } finally {
            e.destroy();
        }
    }),
    (jt.renderToStaticNodeStream = function () {
        throw Error(Gt(208));
    }),
    (jt.renderToString = function (e, t) {
        e = new ui(e, !1, t);
        try {
            return e.read(1 / 0);
        } finally {
            e.destroy();
        }
    }),
    (jt.version = '17.0.2'),
    (Rt.exports = jt);
var di = Rt.exports,
    pi = {};
Object.defineProperty(pi, '__esModule', {
    value: !0,
});
var fi = function (e) {
        return function (t) {
            for (
                var n,
                    i = new RegExp(e.key + '-([a-zA-Z0-9-_]+)', 'gm'),
                    r = {
                        html: t,
                        ids: [],
                        css: '',
                    },
                    o = {};
                null !== (n = i.exec(t));

            )
                void 0 === o[n[1]] && (o[n[1]] = !0);
            return (
                (r.ids = Object.keys(e.inserted).filter(function (t) {
                    if ((void 0 !== o[t] || void 0 === e.registered[e.key + '-' + t]) && !0 !== e.inserted[t])
                        return (r.css += e.inserted[t]), !0;
                })),
                r
            );
        };
    },
    mi = function (e) {
        return function (t) {
            for (
                var n,
                    i = new RegExp(e.key + '-([a-zA-Z0-9-_]+)', 'gm'),
                    r = {
                        html: t,
                        styles: [],
                    },
                    o = {};
                null !== (n = i.exec(t));

            )
                void 0 === o[n[1]] && (o[n[1]] = !0);
            var a = [],
                s = '';
            return (
                Object.keys(e.inserted).forEach(function (t) {
                    (void 0 === o[t] && void 0 !== e.registered[e.key + '-' + t]) ||
                        !0 === e.inserted[t] ||
                        (e.registered[e.key + '-' + t]
                            ? (a.push(t), (s += e.inserted[t]))
                            : r.styles.push({
                                  key: e.key + '-global',
                                  ids: [t],
                                  css: e.inserted[t],
                              }));
                }),
                r.styles.push({
                    key: e.key,
                    ids: a,
                    css: s,
                }),
                r
            );
        };
    };

function hi(e, t, n, i) {
    return '<style data-emotion="' + e + ' ' + t + '"' + i + '>' + n + '</style>';
}
var gi = function (e, t) {
        return function (n) {
            var i = e.inserted,
                r = e.key,
                o = e.registered,
                a = new RegExp('<|' + r + '-([a-zA-Z0-9-_]+)', 'gm'),
                s = {},
                l = '',
                c = '',
                u = '';
            for (var d in i)
                if (i.hasOwnProperty(d)) {
                    var p = i[d];
                    !0 !== p && void 0 === o[r + '-' + d] && ((u += p), (c += ' ' + d));
                }
            '' !== u && (l = hi(r, c.substring(1), u, t));
            for (var f, m = '', h = '', g = 0; null !== (f = a.exec(n)); )
                if ('<' !== f[0]) {
                    var y = f[1],
                        v = i[y];
                    !0 === v || void 0 === v || s[y] || ((s[y] = !0), (h += v), (m += ' ' + y));
                } else
                    '' !== m && ((l += hi(r, m.substring(1), h, t)), (m = ''), (h = '')),
                        (l += n.substring(g, f.index)),
                        (g = f.index);
            return (l += n.substring(g));
        };
    },
    yi = function (e, t) {
        return function (e) {
            var n = '';
            return (
                e.styles.forEach(function (e) {
                    n += hi(e.key, e.ids.join(' '), e.css, t);
                }),
                n
            );
        };
    };
var vi = (pi.default = function (e) {
    !0 !== e.compat && (e.compat = !0);
    var t = void 0 !== e.nonce ? ' nonce="' + e.nonce + '"' : '';
    return {
        extractCritical: fi(e),
        extractCriticalToChunks: mi(e),
        renderStylesToString: gi(e, t),
        constructStyleTagsFromChunks: yi(0, t),
    };
});
const wi = console.error,
    bi = Re({
        key: 'css',
    }),
    ki = vi(bi),
    xi = bi.insert;

function Si(e, t) {
    je(),
        (qe.static = !0),
        (console.error = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            t.some(e => 'string' == typeof e && e.includes('useLayoutEffect')) || wi.apply(void 0, t);
        });
    const n = di.renderToString(
            Ae.createElement(
                Ue,
                {
                    value: bi,
                },
                e
            )
        ),
        i = ki.constructStyleTagsFromChunks(ki.extractCriticalToChunks(n));
    (qe.static = !1), (console.error = wi);
    return ['\n\t\t' + (t ? '<style>' + t + '</style>' : '') + '\n\t\t' + i + '\n\t', n];
}
bi.insert = (e, t) => {
    let n = '';
    xi(
        e,
        t,
        {
            insert(e) {
                n += e;
            },
        },
        !0
    ),
        (bi.inserted[t.name] = n);
};
const Ii = ['onError'];

function zi(t, n, i, r, o, a) {
    let {
            adapterOptions: l,
            props: { onError: c = Pe },
            onBootstrap: u = Pe,
        } = n,
        d = Me(n.props, Ii);
    Promise.resolve().then(() => {
        o(
            Ce({}, l, {
                model: r ? r.model : {},
            }),
            t,
            i,
            a
        );
        const n = i => {
            let { readyState: o } = i;
            if (o === T) return;
            window.performance &&
                'function' == typeof window.performance.mark &&
                window.performance.mark('lc_sdk_ready'),
                t.off('set_application_state', n),
                t.getApplicationState('embedded') ||
                    (t => {
                        e(
                            s(t, () => t.localize('welcome_title')),
                            _e(e => {
                                document.title = e;
                            })
                        );
                    })(t),
                (t.getApplicationState('embedded') && !Tt()) ||
                    (e => {
                        Vt().then(t => {
                            (Wt.hasIframeUnlocked = !0),
                                !1 !== Wt.isIframeActive && (Wt.isIframeActive = !0),
                                e.on('add_event', n => {
                                    let { event: i } = n;
                                    if (!Wt.isIframeActive) return;
                                    const { muted: r } = e.getApplicationState();
                                    r ||
                                        (((e, t) =>
                                            'system' !== e.author &&
                                            !e.properties.welcomeMessage &&
                                            e.author !== t &&
                                            'custom' !== e.type)(i, e.getSessionUserId()) &&
                                            t(zt));
                                }),
                                e.on('reaction_received', n => {
                                    let { event: i } = n;
                                    if (!Wt.isIframeActive) return;
                                    const { muted: r } = e.getApplicationState();
                                    r || (e.getSessionUserId() === i.author && t(zt));
                                });
                        });
                    })(t),
                O(t),
                ct(t),
                It(t, r);
            const a = document.getElementById('root');
            Ge(
                a,
                Ce({}, d, {
                    onError: (e, t) => {
                        let { componentStack: n } = t;
                        P('react_error', e, {
                            componentStack: n,
                        }),
                            Te.render(null, a),
                            c();
                    },
                    store: t,
                }),
                r,
                Si
            ),
                window.performance &&
                    'function' == typeof window.performance.mark &&
                    window.performance.mark('lc_bootstrap_end'),
                u(t);
        };
        t.on('set_application_state', n);
    });
}
const Ei = (e, t, n) => {
    const { organizationId: i } = t,
        { license: r, group: o, requestedGroup: a, pipMode: s, wrapperVersion: l } = e,
        { language: c } = t.__unsafeProperties.group,
        u = $e(
            {
                application: {
                    organizationId: i,
                    license: r,
                    group: o,
                    requestedGroup: a,
                    region: t.region,
                    rtl: Ze(c),
                    language: c,
                    embedded: !1,
                    mobileWrapper: h(),
                    pipMode: s,
                    wrapperVersion: l,
                    page: {
                        title: document.title,
                        url: String(document.location),
                        referrer: document.referrer,
                    },
                },
            },
            {
                persistKey: n(
                    Ce({}, e, {
                        organizationId: i,
                    })
                ),
            }
        ),
        { clientLimitExceededLifted: d } = u.getApplicationState(),
        p = !d && t.clientLimitExceeded;
    return (
        u.setApplicationState({
            visibility: Ce({}, u.getApplicationState('visibility'), {
                state: 'maximized',
            }),
            clientLimitExceeded: p,
        }),
        u.updateUser(
            u.getSessionUserId(),
            (() => {
                const e = ve(window.location.search),
                    t = j(['name', 'email'], e);
                return e.params && (t.properties = C(e => String(e), we(e.params))), t;
            })()
        ),
        e.initialView && !u.getCurrentView() && u.setCurrentView(e.initialView),
        u
    );
};

function _i(e, t, n) {
    window.performance && 'function' == typeof window.performance.mark && window.performance.mark('lc_config_request');
    const { license: i, organizationId: r, group: o, adapter: a } = e;
    var s;
    ((s = {
        licenseId: i,
        organizationId: r,
        groupId: o,
        url: Be(String(document.location)),
        channelType: 'direct_link',
    }),
    D(s).then(e =>
        W(
            Ce({}, s, {
                region: e,
            })
        ).then(e => {
            const t = e.groupId;
            return Promise.all([
                e,
                R({
                    organizationId: e.organizationId,
                    licenseId: s.licenseId,
                    groupId: t,
                    region: e.region,
                    version: e.configVersion,
                }),
            ]).then(e => {
                let [t, n] = e;
                return Ce({}, t, n);
            });
        })
    )).then(r => {
        window.performance &&
            'function' == typeof window.performance.mark &&
            window.performance.mark('lc_server_config');
        const s = r.groupId,
            l = r.region,
            c = r.organizationId;
        He(r.__unsafeProperties.group.language);
        const u = Ei(
            Ce({}, e, {
                group: s,
                requestedGroup: o,
            }),
            r,
            n
        );
        N({
            organizationId: c,
            region: l,
            groupId: s,
            version: r.localizationVersion,
            language: r.__unsafeProperties.group.language,
        }).then(u.setLocalization);
        const d = {
            adapterOptions: Ce({}, e, {
                organizationId: c,
                group: s,
                requestedGroup: o,
                region: l,
                mobile: L(),
            }),
            props: {},
            onBootstrap: t,
        };
        V() && (d.props.onMinimizeButtonPress = () => u.emit('mobile_wrapper_minimize_intent')),
            zi(u, d, r, null, a, i);
    });
}
/**
  @livechat/postmate - A powerful, simple, promise-based postMessage library
  @version v3.1.0
  @link https://github.com/dollarshaveclub/postmate
  @author Jacob Kelley <jakie8@gmail.com>
  @license MIT
**/
var Ci = 'application/x-postmate-v1+json',
    Pi = 0,
    Ai = {
        handshake: 1,
        'handshake-reply': 1,
        call: 1,
        emit: 1,
        reply: 1,
        request: 1,
    },
    Fi = function (e, t) {
        return (
            ('string' != typeof t || e.origin === t) &&
            !!e.data &&
            'object' == typeof e.data &&
            'postmate' in e.data &&
            e.data.type === Ci &&
            !!Ai[e.data.postmate]
        );
    },
    Mi = (function () {
        function e(e) {
            var t = this;
            (this.parent = e.parent),
                (this.frame = e.frame),
                (this.child = e.child),
                (this.childOrigin = e.childOrigin),
                (this.events = {}),
                (this.listener = function (e) {
                    if (!Fi(e, t.childOrigin)) return !1;
                    var n = ((e || {}).data || {}).value || {},
                        i = n.data,
                        r = n.name;
                    'emit' === e.data.postmate && r in t.events && t.events[r].call(t, i);
                }),
                this.parent.addEventListener('message', this.listener, !1);
        }
        var t = e.prototype;
        return (
            (t.get = function (e) {
                var t = this;
                return new Oi.Promise(function (n) {
                    var i = ++Pi,
                        r = function (e) {
                            e.data.uid === i &&
                                'reply' === e.data.postmate &&
                                (t.parent.removeEventListener('message', r, !1), n(e.data.value));
                        };
                    t.parent.addEventListener('message', r, !1),
                        t.child.postMessage(
                            {
                                postmate: 'request',
                                type: Ci,
                                property: e,
                                uid: i,
                            },
                            t.childOrigin
                        );
                });
            }),
            (t.call = function (e, t) {
                this.child.postMessage(
                    {
                        postmate: 'call',
                        type: Ci,
                        property: e,
                        data: t,
                    },
                    this.childOrigin
                );
            }),
            (t.on = function (e, t) {
                this.events[e] = t;
            }),
            (t.destroy = function () {
                window.removeEventListener('message', this.listener, !1), this.frame.parentNode.removeChild(this.frame);
            }),
            e
        );
    })(),
    Ti = (function () {
        function e(e) {
            var t = this;
            (this.model = e.model),
                (this.parent = e.parent),
                (this.parentOrigin = e.parentOrigin),
                (this.child = e.child),
                this.child.addEventListener('message', function (e) {
                    if (Fi(e, t.parentOrigin)) {
                        var n = e.data,
                            i = n.property,
                            r = n.uid,
                            o = n.data;
                        'call' !== e.data.postmate
                            ? (function (e, t) {
                                  var n = 'function' == typeof e[t] ? e[t]() : e[t];
                                  return Oi.Promise.resolve(n);
                              })(t.model, i).then(function (t) {
                                  return e.source.postMessage(
                                      {
                                          property: i,
                                          postmate: 'reply',
                                          type: Ci,
                                          uid: r,
                                          value: t,
                                      },
                                      e.origin
                                  );
                              })
                            : i in t.model && 'function' == typeof t.model[i] && t.model[i].call(t, o);
                    }
                });
        }
        return (
            (e.prototype.emit = function (e, t) {
                this.parent.postMessage(
                    {
                        postmate: 'emit',
                        type: Ci,
                        value: {
                            name: e,
                            data: t,
                        },
                    },
                    this.parentOrigin
                );
            }),
            e
        );
    })(),
    Oi = (function () {
        function e(e) {
            var t = e.container,
                n = void 0 === t ? (void 0 !== n ? n : document.body) : t,
                i = e.model,
                r = e.url,
                o = e.iframeAllowedProperties;
            return (
                (this.parent = window),
                (this.frame = document.createElement('iframe')),
                o && (this.frame.allow = o),
                n.appendChild(this.frame),
                (this.child = this.frame.contentWindow || this.frame.contentDocument.parentWindow),
                (this.model = i || {}),
                this.sendHandshake(r)
            );
        }
        return (
            (e.prototype.sendHandshake = function (t) {
                var n,
                    i = this,
                    r = (function (e) {
                        var t = document.createElement('a');
                        t.href = e;
                        var n = t.protocol.length > 4 ? t.protocol : window.location.protocol,
                            i = t.host.length
                                ? '80' === t.port || '443' === t.port
                                    ? t.hostname
                                    : t.host
                                : window.location.host;
                        return t.origin || n + '//' + i;
                    })(t),
                    o = 0;
                return new e.Promise(function (e, a) {
                    var s = function (t) {
                        return (
                            !!Fi(t, r) &&
                            ('handshake-reply' === t.data.postmate
                                ? (clearInterval(n),
                                  i.parent.removeEventListener('message', s, !1),
                                  (i.childOrigin = t.origin),
                                  e(new Mi(i)))
                                : a('Failed handshake'))
                        );
                    };
                    i.parent.addEventListener('message', s, !1);
                    var l = function () {
                            o++,
                                i.child.postMessage(
                                    {
                                        postmate: 'handshake',
                                        type: Ci,
                                        model: i.model,
                                    },
                                    r
                                ),
                                5 === o && clearInterval(n);
                        },
                        c = function () {
                            l(), (n = setInterval(l, 500));
                        };
                    i.frame.attachEvent ? i.frame.attachEvent('onload', c) : i.frame.addEventListener('load', c),
                        (i.frame.src = t);
                });
            }),
            e
        );
    })();
(Oi.debug = !1),
    (Oi.Promise = (function () {
        try {
            return window ? window.Promise : Promise;
        } catch (e) {
            return null;
        }
    })()),
    (Oi.Model = (function () {
        function e(e) {
            return (
                (this.child = window), (this.model = e), (this.parent = this.child.parent), this.sendHandshakeReply()
            );
        }
        return (
            (e.prototype.sendHandshakeReply = function () {
                var e = this;
                return new Oi.Promise(function (t, n) {
                    var i = function (r) {
                        if (r.data.postmate) {
                            if ('handshake' === r.data.postmate) {
                                e.child.removeEventListener('message', i, !1),
                                    r.source.postMessage(
                                        {
                                            postmate: 'handshake-reply',
                                            type: Ci,
                                        },
                                        r.origin
                                    ),
                                    (e.parentOrigin = r.origin);
                                var o = r.data.model;
                                return (
                                    o &&
                                        Object.keys(o).forEach(function (t) {
                                            e.model[t] = o[t];
                                        }),
                                    t(new Ti(e))
                                );
                            }
                            return n('Handshake Reply Failed');
                        }
                    };
                    e.child.addEventListener('message', i, !1);
                });
            }),
            e
        );
    })());
const Di = Oi.Model;
Oi.Model = function (e) {
    const t = Oe(),
        n = {};
    return (
        (e.resolveRemoteCall = e => {
            let { id: t, value: i } = e;
            const r = n[t];
            delete n[t], r(i);
        }),
        (e.emitEvent = e => {
            let { event: n, data: i } = e;
            t.emit(n, i);
        }),
        new Di(e).then(
            i => (
                (i.call = function (e) {
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                        r[o - 1] = arguments[o];
                    return new Promise(t => {
                        const o = q(n);
                        (n[o] = t),
                            i.emit('remote-call', {
                                id: o,
                                method: e,
                                args: r,
                            });
                    });
                }),
                (e.remoteCall = t => {
                    let { id: n, method: r, args: o } = t;
                    const a = 'function' == typeof e[r] ? e[r].apply(i, o) : void 0;
                    a && 'function' == typeof a.then
                        ? a.then(e => {
                              i.call('resolveRemoteCall', {
                                  id: n,
                                  value: e,
                              });
                          })
                        : i.call('resolveRemoteCall', {
                              id: n,
                              value: a,
                          });
                }),
                (i.on = t.on),
                (i.off = t.off),
                i
            )
        )
    );
};
const Ni = {
        minimizedContainerSize: void 0,
        minimizedVisibility: void 0,
        maximizedVisibility: void 0,
        viewAnimated: void 0,
        viewNotAnimated: void 0,
        resizeToDimensions: void 0,
    },
    Li = Ce(
        {
            bar: {
                width: '281px',
                height: '63px',
            },
            bubble: {
                width: '84px',
                height: '84px',
            },
            bubblePulse: {
                width: '90px',
                height: '90px',
            },
            mobileGreetingFull: {
                width: '100%',
                height: '50%',
            },
            full: {
                width: '100%',
                height: '100%',
            },
            bubbleWithInput: G,
            bubbleWithInputAndPrivacyPolicyBanner: U,
        },
        B
    ),
    Vi = e => (/px$/.test(e) ? Math.ceil(parseFloat(e)) + 'px' : e),
    Wi = e => s(e, e => e.application.visibility.state),
    Ri = e => {
        const t = Ni[e];
        t && clearTimeout(t);
    },
    ji = (e, t) =>
        e.call(
            'resize',
            (e =>
                Ce({}, e, {
                    width: Vi(e.width),
                    height: Vi(e.height),
                }))(t)
        ),
    qi = (e, t) =>
        e.call('getMinimizedDimensions').then(n => {
            'minimized' === t.getApplicationState().visibility.state &&
                ji(
                    e,
                    Ce({}, n, {
                        ignoreHorizontalOffset: t.getApplicationState('mobile'),
                    })
                );
        }),
    Ui = (e, t, n) => {
        let { transient: i } = n;
        Ri('minimizedContainerSize'), Ri('resizeToDimensions');
        const r = t.getApplicationState('mobile'),
            o = n => {
                ji(e, n).then(() => qi(e, t));
            };
        if (Z(t, 'maximized'))
            return void ji(
                e,
                Ce({}, r ? Li.full : Ye($(t)), {
                    maximized: !0,
                })
            );
        const a = 'bar' === p(t),
            s = !X(t),
            l = t.getApplicationState().defaultWidget,
            c = t.getView('minimized'),
            u = t.getApplicationState().recommendations,
            d = t.getApplicationState().minimizedMessageInput,
            f =
                K('privacyPolicy', t).enabled &&
                'hidden' !== t.getApplicationState('privacyPolicyBannerState') &&
                ['expanding', 'full', 'retracting'].includes(d.state),
            m = t.getApplicationState('websiteTextSelection');
        if (d.isVisible && (s || m.text)) return;
        const h = () => {
            var n, i, p, m, h;
            return (e => {
                let {
                    isBar: t,
                    isMobile: n,
                    isBubblePulse: i,
                    hasGreeting: r,
                    hasMinimizedEvents: o,
                    productRecommendationsState: a,
                    callResize: s,
                    resizeMinimizedWithGreeting: l,
                    getWindowSizeForVariant: c,
                    dimensions: u,
                    defaultWidget: d,
                    resizeToDimensions: p,
                    minimizedMessageInput: f,
                    privacyPolicyBannerVisible: m,
                } = e;
                if (
                    ('livechat' === d &&
                        (n
                            ? r
                                ? l(u.mobileGreetingFull)
                                : t
                                  ? s(u.bar)
                                  : f.isVisible
                                    ? s(m ? u.bubbleWithInputAndPrivacyPolicyBanner : u.bubbleWithInput)
                                    : s(u.bubble)
                            : t
                              ? s(u.bar)
                              : r
                                ? l(c())
                                : f.isVisible
                                  ? s(m ? u.bubbleWithInputAndPrivacyPolicyBanner : u.bubbleWithInput)
                                  : s(u.bubble)),
                    'openwidget' === d)
                ) {
                    if (a.isVisible || a.animation)
                        return a.animation
                            ? void s(
                                  Ce({}, n ? u.mobileRecommendations : u.recommendations, {
                                      ignoreHorizontalOffset: n,
                                  })
                              )
                            : void p();
                    if (i) return void s(u.bubblePulse);
                    if (r) return n ? void l(u.mobileGreetingFull) : void l(c());
                    o || s(u.bubble);
                }
            })({
                isBar: a,
                isMobile: r,
                hasGreeting: s,
                isBubblePulse: c.showPulseAnimation,
                hasMinimizedEvents: !!(
                    (null != (n = t.getApplicationState('visitorCounter')) && n.isVisible) ||
                    (null != (i = t.getApplicationState('googleReviews')) && i.isVisible) ||
                    (null != (p = t.getApplicationState('chatBotGreeting')) && p.isVisible) ||
                    (null != (m = t.getApplicationState('contactInvitation')) && m.isVisible)
                ),
                productRecommendationsState: {
                    isVisible: !(null == u || !u.isVisible),
                    animation: null != (h = null == u ? void 0 : u.animation) ? h : null,
                },
                minimizedMessageInput: d,
                privacyPolicyBannerVisible: f,
                dimensions: Li,
                resizeMinimizedWithGreeting: o,
                getWindowSizeForVariant: () => Ye($(t)),
                defaultWidget: l,
                callResize: t => ji(e, t),
                resizeToDimensions: () => qi(e, t),
            });
        };
        i ? (Ni.minimizedContainerSize = setTimeout(h, 300)) : h();
    },
    Gi = (e, t, n) => {
        let { transient: i } = n;
        if ((Ri('minimizedVisibility'), Ri('maximizedVisibility'), Z(t, 'maximized')))
            e.call('applyFramesStyle', {
                minimizedFrameStyle: {
                    display: 'none',
                },
                maximizedFrameStyle: {
                    display: 'block',
                },
            }),
                J() &&
                    (Ni.maximizedVisibility = setTimeout(() => {
                        e.call('applyFramesStyle', {
                            minimizedFrameStyle: {},
                            maximizedFrameStyle: {
                                visibility: 'visible',
                            },
                        });
                    }, Y));
        else {
            const t = () => {
                e.call('applyFramesStyle', {
                    minimizedFrameStyle: {
                        display: 'block',
                    },
                    maximizedFrameStyle: Ce(
                        {
                            display: 'none',
                        },
                        J() && {
                            visibility: 'hidden',
                        }
                    ),
                });
            };
            i ? (Ni.minimizedVisibility = setTimeout(t, 300)) : t();
        }
    },
    Bi = {
        faq: 'FAQ',
        'form-contact': 'Form-contact',
        'form-feedback': 'Form-feedback',
        'form-bugreport': 'Form-bugreport',
        chat: 'Chat',
    },
    Hi = (t, n, i) => {
        t.hasChat(n)
            ? oe(t, n, i)
            : e(
                  s(t, e => ae(e, n)),
                  _e(e => e && oe(t, n, i))
              );
    },
    $i = (e, t) => {
        const n = t && ee(t, ['click', 'pointerdown', 'pointerup', 'mousedown', 'mouseup', 'touchstart', 'touchend']),
            i = e.getApplicationState('visibility').interactionModality,
            r = n ? i : 'virtual';
        e.setApplicationState({
            visibility: Ce({}, e.getApplicationState('visibility'), {
                state: 'maximized',
                interactionModality: r,
            }),
        });
    },
    Zi = (e, t) => {
        const n = e.getApplicationState('defaultWidget'),
            i = 'openwidget' === n,
            r = ((e, t) => {
                if ('chatbot' === t) throw new Error('Widget type "chatbot" is not supported.');
                const n = 'openwidget' === t,
                    i = 'object' == typeof e && null !== e ? e : {},
                    r = n ? ['feature', 'messageDraft'] : ['messageDraft', 'startChat'];
                for (const s in i)
                    if (!r.includes(s))
                        throw new Error(
                            (n ? 'OpenWidget:' : '[LivechatWidget]') +
                                ' You cannot combine ' +
                                s +
                                ' argument with "maximize" method. You can only use: ' +
                                r.join(', ')
                        );
                const o = 'messageDraft' in i && 'string' == typeof i.messageDraft ? i.messageDraft : void 0,
                    a = 'startChat' in i && 'boolean' == typeof i.startChat ? i.startChat : void 0;
                if (n)
                    return {
                        feature: 'feature' in i && 'string' == typeof i.feature ? i.feature : void 0,
                        messageDraft: o,
                        startChat: a,
                    };
                return {
                    messageDraft: o,
                    startChat: a,
                };
            })(t, n);
        i
            ? ((e, t) => {
                  var n;
                  const { feature: i, messageDraft: r } = t;
                  if (!i) return;
                  if ('string' != typeof i) throw new Error('OpenWidget: Feature name must be a string.');
                  const o = Bi[i];
                  if (!o)
                      throw new Error(
                          'OpenWidget: You cannot combine ' +
                              i +
                              " feature with 'maximize' method. You can only use: " +
                              Object.keys(Bi).join(', ') +
                              '.'
                      );
                  const a = e.getApplicationState('config').features,
                      s = tt(a),
                      l = null == (n = a.livechatIntegration) ? void 0 : n.enabled,
                      u = l || s,
                      d = 'Chat' === o;
                  if (!e.getView(o) || (d && !u)) throw new Error('OpenWidget: Feature ' + i + ' is not enabled.');
                  d && r && Hi(e, l ? c : se, r);
                  e.setCurrentView(o);
              })(e, r)
            : ((e, t) => {
                  const { messageDraft: n, startChat: i } = t;
                  if ((n && ('Chat' !== e.getCurrentView() && e.setCurrentView('Chat'), Hi(e, c, n)), i)) {
                      const t = e.getChat(c).active,
                          n = ie(e);
                      t || n || re(e);
                  }
              })(e, r);
    };

function Ji(e) {
    return {
        hide() {
            Z(e, 'hidden') ||
                e.setApplicationState({
                    visibility: {
                        state: 'hidden',
                        forced: !0,
                    },
                });
        },
        hideGreeting() {
            pe(e);
        },
        hideEyeCatcher() {
            de(e);
        },
        isFocused: () => !!document.hasFocus && document.hasFocus(),
        sendMessage(t) {
            ((e, t) => {
                if (!t || 'object' != typeof t || !('text' in t) || 'string' != typeof t.text) return;
                const n = t.text.trim();
                n && ((te(e) && !m(e)) || ($i(e), ne(e, c, n)));
            })(e, t);
        },
        shouldBridgeHandleAudio: () => !Wt.hasIframeUnlocked && ((Wt.isIframeActive = !1), !0),
        maximize(t, n) {
            try {
                Zi(e, n);
            } catch (i) {
                return void console.error(i.message);
            }
            $i(e, t);
        },
        minimize() {
            e.setApplicationState({
                visibility: Ce({}, e.getApplicationState('visibility'), {
                    state: !e.getApplicationState('isMinimizedForcefullyDisabled') && ue(e) ? 'minimized' : 'hidden',
                    interactionModality: 'virtual',
                }),
            });
        },
        startStateSync() {
            e.startStateSync(this);
        },
        storeMethod(t) {
            let [n, ...i] = t;
            e[n].apply(e, i);
        },
        logInfo() {
            ce.apply(void 0, arguments);
        },
        logError() {
            P.apply(void 0, arguments);
        },
        logNotice() {
            le.apply(void 0, arguments);
        },
        crossFrameEvent(e, t) {
            Ke(
                e,
                Ce({}, JSON.parse(t), {
                    stopPropagation: Pe,
                    preventDefault: Pe,
                })
            );
        },
        setInteractionModality(t) {
            e.setApplicationState({
                visibility: Ce({}, e.getApplicationState('visibility'), {
                    interactionModality: t,
                }),
            });
        },
        getPipConsent(e) {
            const t = window.localStorage.getItem(Xe(e));
            try {
                return t ? JSON.parse(t).pipConsent.value : null;
            } catch (n) {
                return null;
            }
        },
        setPipConsent(t) {
            e.setApplicationState({
                pipConsent: t,
            });
        },
    };
}
const Yi = ['4b57ed6a-6d46-426b-a4a5-088360a6f773'],
    Xi = (e, t, n, i) => {
        const r = e.getApplicationState('visibility');
        return i && 'maximized' !== r.state
            ? {
                  state: 'hidden',
                  forced: !0,
              }
            : n
              ? {
                    state: 'maximized',
                }
              : t
                ? i
                    ? {
                          state: 'hidden',
                          forced: !0,
                      }
                    : {
                          state: 'minimized',
                      }
                : r;
    };

function Ki(t, i, r) {
    const {
            license: o,
            organizationId: a,
            group: l,
            uniqueGroups: u,
            isIdentityProviderEnabled: d,
            shouldUseParentStorage: p,
            adapter: f,
        } = t,
        m = $e(
            {
                application: Ce(
                    {
                        organizationId: a,
                    },
                    o
                        ? {
                              license: o,
                          }
                        : {},
                    {
                        group: l,
                    }
                ),
            },
            {
                persistKey: r(t),
            }
        ),
        h = Ji(m);
    ye && (window.parent.store = m),
        new Oi.Model(h)
            .then(e => Promise.all([e, m.syncing()]))
            .then(t => {
                var r, a;
                let [h] = t;
                window.performance &&
                    'function' == typeof window.performance.mark &&
                    window.performance.mark('lc_postmate_ready');
                const {
                        clientLimitExceeded: g,
                        customer: y,
                        requestedGroup: v,
                        hidden: w,
                        integrationName: b,
                        isInCustomContainer: k,
                        page: x,
                        region: S,
                        serverConfig: I,
                        actingAsDirectLink: z,
                        isMinimizedForcefullyDisabled: E,
                        initMaximized: _,
                        parentWidth: C,
                        parentHeight: P,
                        defaultWidget: A,
                        newMinimizedLayout: F,
                    } = h.model,
                    M = m.getApplicationState('mobile'),
                    T = 'livechat' === A ? I.__unsafeProperties.group.language : I.language,
                    O = z || k || _,
                    { organizationId: D } = I,
                    N =
                        null == I ||
                        null == (r = I.__unsafeProperties) ||
                        null == (r = r.group) ||
                        null == (r = r.theme)
                            ? void 0
                            : r.name,
                    V = null == I || null == (a = I.__unsafeProperties) ? void 0 : a.enableTextApp,
                    W = m.getApplicationState('pipMode'),
                    R = 'smooth' === N && V && z && !W && !M;
                He(T),
                    m.updateUser(m.getSessionUserId(), y),
                    m.setApplicationState({
                        organizationId: D,
                        clientLimitExceeded: !m.getApplicationState('clientLimitExceededLifted') && g,
                        actingAsDirectLink: z,
                        isMinimizedForcefullyDisabled: E,
                        embedded: !0,
                        region: S,
                        isInCustomContainer: k,
                        mobileWrapper: null,
                        page: x,
                        rtl: Ze(T),
                        language: T,
                        integrationName: b,
                        requestedGroup: v,
                        visibility: Xi(m, M, O, w),
                        clientWidth: C,
                        clientHeight: P,
                        defaultWidget: A,
                        enableMinimizedMessageInputLayout: F,
                    });
                const j = {
                    onAnimationEnd: () => m.emit('animation_end'),
                    onError: () => {
                        h.call('kill');
                    },
                    onMinimizedRef: e => {
                        h.minimizedRef = e;
                    },
                };
                zi(
                    m,
                    {
                        adapterOptions: Ce(
                            {
                                organizationId: D,
                                group: l,
                                requestedGroup: v,
                                region: S,
                                uniqueGroups: u,
                                mobile: L(),
                            },
                            d && {
                                identityProvider: () => ({
                                    getToken: () => h.call('callIdentityProvider', 'getToken'),
                                    getFreshToken: () => h.call('callIdentityProvider', 'getFreshToken'),
                                    hasToken: () => h.call('callIdentityProvider', 'hasToken'),
                                    invalidate: () => h.call('callIdentityProvider', 'invalidate'),
                                }),
                            },
                            p && {
                                parentStorage: {
                                    setItem: (e, t) => h.call('callParentStorageMethod', 'setItem', e, t),
                                    getItem: e => h.call('callParentStorageMethod', 'getItem', e),
                                    removeItem: e => h.call('callParentStorageMethod', 'removeItem', e),
                                },
                            }
                        ),
                        props: j,
                        onBootstrap: () => {
                            Qe(h, m);
                            const { visibility: t } = m.getApplicationState();
                            (O || 'hidden' !== t.state) && h.call('show'),
                                M ||
                                    R ||
                                    (t => {
                                        e(
                                            s(t, e => e.application.lightbox.state),
                                            Je,
                                            ze(e => {
                                                let [t, n] = e;
                                                return t !== n;
                                            }),
                                            _e(e => {
                                                let [, n] = e;
                                                'closed' !== n
                                                    ? t.emit('render-image-lightbox')
                                                    : t.emit('remove-image-lightbox');
                                            })
                                        );
                                    })(m),
                                Yi.includes(D) ||
                                    ((t, n) => {
                                        e(
                                            s(n, e => Q(e, c)),
                                            _e(e => {
                                                const i = null == e ? void 0 : e.author;
                                                if (i && n.hasUser(i)) {
                                                    const e = n.getUser(i),
                                                        r = n.localize('embedded_new_message', {
                                                            operator: e.name,
                                                        });
                                                    t.call('setTitleNotification', r);
                                                } else t.call('setTitleNotification', null);
                                            })
                                        );
                                    })(h, m),
                                ((t, i) => {
                                    e(
                                        Wi(i),
                                        n(null),
                                        Je,
                                        ze(e => {
                                            let [t, n] = e;
                                            return 'maximized' === t && 'minimized' === n;
                                        }),
                                        _e(() => {
                                            Ri('viewNotAnimated');
                                            const e = e => {
                                                i.updateView(
                                                    'minimized',
                                                    Ce({}, i.getView('minimized'), {
                                                        animated: e,
                                                    })
                                                ),
                                                    i.emit('render-minimized');
                                            };
                                            e(!0);
                                            const { interactionModality: n } = i.getApplicationState('visibility');
                                            Ni.viewNotAnimated = setTimeout(() => {
                                                e(!1), 'keyboard' === n && t.call('focusMinimized');
                                            }, 500);
                                        })
                                    ),
                                        e(
                                            Wi(i),
                                            rt(1),
                                            _e(() =>
                                                Gi(t, i, {
                                                    transient: !0,
                                                })
                                            )
                                        ),
                                        e(
                                            s(i, e => e.application.ready),
                                            rt(1),
                                            ze(Boolean),
                                            _e(() =>
                                                requestAnimationFrame(() =>
                                                    Gi(t, i, {
                                                        transient: !0,
                                                    })
                                                )
                                            )
                                        ),
                                        Gi(t, i, {
                                            transient: !1,
                                        });
                                })(h, m),
                                ((t, n) => {
                                    e(
                                        Wi(n),
                                        rt(1),
                                        _e(() =>
                                            Ui(t, n, {
                                                transient: !0,
                                            })
                                        )
                                    ),
                                        e(
                                            s(n, e => e.application.invitation.hiddenIds.length),
                                            rt(1),
                                            _e(() =>
                                                Ui(t, n, {
                                                    transient: !0,
                                                })
                                            )
                                        ),
                                        n.on('render-minimized', () =>
                                            Ui(t, n, {
                                                transient: !0,
                                            })
                                        ),
                                        t.on('minimized_frame_fonts_ready', () =>
                                            Ui(t, n, {
                                                transient: !1,
                                            })
                                        ),
                                        n.on('resize-request', e => ji(t, e).then(() => n.emit('resize-request-done'))),
                                        n.on('resize-to-dimensions', () => qi(t, n)),
                                        n.on('resize-to-theme-size', function (e) {
                                            let { animated: i = !1 } = void 0 === e ? {} : e;
                                            const r = n.getApplicationState('mobile'),
                                                o = H(n) ? Li.full : Li.mobileGreetingFull;
                                            return ji(
                                                t,
                                                Ce(
                                                    {},
                                                    r ? o : Ye($(n)),
                                                    {
                                                        ignoreHorizontalOffset: r,
                                                    },
                                                    i
                                                        ? {
                                                              animated: i,
                                                          }
                                                        : {}
                                                )
                                            ).then(() => n.emit('resize-to-theme-size-done'));
                                        }),
                                        t.on('container_became_visible', () =>
                                            Ui(t, n, {
                                                transient: !1,
                                            })
                                        ),
                                        Ui(t, n, {
                                            transient: !1,
                                        });
                                })(h, m),
                                i(m);
                        },
                    },
                    I,
                    h,
                    f,
                    o
                );
            });
}
var Qi, er, tr;
const nr = ve(window.location.search),
    ir = fe(),
    rr = null != (Qi = nr.organization_id) ? Qi : '',
    or = me(nr),
    ar = g(),
    sr = null != (er = nr.initial_view) ? er : null,
    lr = '1' === (null == nr ? void 0 : nr.pip_mode),
    cr = '1' === nr.custom_identity_provider,
    ur = '1' === nr.use_parent_storage,
    dr = null != (tr = nr.wrapper_version) ? tr : null;
if (!ir && !rr) throw new Error('No license or organization found in the URL.');

function pr(e, t) {
    const n = Ce(
            {},
            ir
                ? {
                      license: ir,
                  }
                : {},
            {
                organizationId: rr,
                group: or,
                uniqueGroups: ar,
                isIdentityProviderEnabled: cr,
                shouldUseParentStorage: ur,
                initialView: sr,
                adapter: e,
                pipMode: lr,
                wrapperVersion: dr,
            }
        ),
        i = wt(),
        r = e => {
            e.setApplicationState({
                readyState: he,
            }),
                cr && ce('custom_identity_provider_enabled', {}),
                n.initialView && !e.getCurrentView() && e.setCurrentView(n.initialView),
                i &&
                    i.getLogs().then(e => {
                        ce(
                            'iframe_vitals',
                            De(
                                Ce({}, e, {
                                    isEmbedded: !!nr.embedded,
                                })
                            )
                        );
                    });
        };
    nr.embedded ? Ki(n, r, t) : _i(n, r, t);
}
export { ft as c, st as h, pr as i, rt as s, ot as t, pt as v };
