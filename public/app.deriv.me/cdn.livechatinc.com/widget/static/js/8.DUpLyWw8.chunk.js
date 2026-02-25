import { _ as e, x as t, i as n, n as r } from './3.DK8xU-ow.chunk.js';
import {
    bB as s,
    gN as o,
    O as a,
    u as i,
    T as c,
    gO as u,
    $ as l,
    k as d,
    gP as p,
    gQ as h,
    gR as m,
    J as g,
    c5 as I,
    Y as v,
    X as f,
    fW as C,
    L as S,
    e5 as w,
    gf as k,
    cI as y,
    g0 as T,
    b0 as _,
    gE as F,
} from './5.DjBaMMVQ.chunk.js';
import './6.B0_QvnEW.chunk.js';

function M(e, t) {
    let n,
        r = Date.now() - 2 * e;
    const s = function () {
            return (r = Date.now()), t(...arguments);
        },
        o = () => clearTimeout(n),
        a = function () {
            const t = Date.now();
            t - r >= e && (r = Date.now()), o();
            for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++) i[c] = arguments[c];
            n = setTimeout(s, r - t + e, ...i);
        };
    return (a.cancel = o), a;
}
const U = {
        connectionStateFetcherContext: {},
        pendingAsyncFlows: {
            acceptingGreeting: !1,
            requestingPredictedWelcomeMessage: !1,
        },
        historyIterator: null,
        latestSeen: 0,
        eventQueue: [],
        uploadsInProgress: {},
        reportConnectionUnsuccessfulTimerId: null,
        minimizedTimeouts: {
            indicatorNotAnimated: -1,
        },
        localizationPromise: null,
    },
    x = {
        getConnectionStateFetcherContext: () => U.connectionStateFetcherContext,
        setConnectionStateFetcherContext: e => {
            U.connectionStateFetcherContext = e;
        },
        updateConnectionStateFetcherContext: t => {
            U.connectionStateFetcherContext = e({}, U.connectionStateFetcherContext, t);
        },
        clearConnectionStateFetcherContext: () => {
            U.connectionStateFetcherContext = {};
        },
        setPendingAsyncFlow: (e, t) => {
            U.pendingAsyncFlows[e] = t;
        },
        getIsPendingAsyncFlow: e => U.pendingAsyncFlows[e],
        getHistoryIterator: () => U.historyIterator,
        setHistoryIterator: e => {
            U.historyIterator = e;
        },
        getLatestSeen: () => U.latestSeen,
        updateLatestSeen: e => {
            U.latestSeen = Math.max(U.latestSeen, e);
        },
        getEventQueue: () => U.eventQueue,
        addToEventQueue: e => {
            U.eventQueue.push(e);
        },
        clearEventQueue: () => {
            const e = U.eventQueue;
            return (U.eventQueue = []), e;
        },
        getUploadInProgress: e => U.uploadsInProgress[e],
        setUploadInProgress: (e, t) => {
            U.uploadsInProgress[e] = t;
        },
        removeUploadInProgress: e => {
            delete U.uploadsInProgress[e];
        },
        getReportConnectionUnsuccessfulTimerId: () => U.reportConnectionUnsuccessfulTimerId,
        setReportConnectionUnsuccessfulTimerId: e => {
            U.reportConnectionUnsuccessfulTimerId = e;
        },
        getMinimizedTimeouts: () => U.minimizedTimeouts,
        setMinimizedTimeout: (e, t) => {
            U.minimizedTimeouts[e] = t;
        },
        setLocalizationPromise: e => {
            U.localizationPromise = e;
        },
        getLocalizationPromise: () => U.localizationPromise,
    },
    P = e => {
        const { region: t } = e;
        return 'https://api' + (t && 'dal' !== t ? '-' + t : '') + '.livechatinc.com';
    },
    b = e =>
        e.fields
            .map(e => {
                switch (e.type) {
                    case 'question':
                    case 'textarea': {
                        const t = e.answer;
                        return t ? e.label + ' ' + t : e.label;
                    }
                    case 'radio':
                    case 'select': {
                        var t;
                        const n = null == (t = e.answer) ? void 0 : t.label;
                        return n ? e.label + ' ' + n : e.label;
                    }
                    case 'checkbox': {
                        var n;
                        const t = null == (n = e.answers) ? void 0 : n.map(e => e.label).join(', ');
                        return t ? e.label + ' ' + t : e.label;
                    }
                    default:
                        return '';
                }
            })
            .filter(Boolean)
            .join('\n'),
    z = e => ('good' === e ? 1 : 'bad' === e ? 0 : null),
    A = (t, n) => {
        const r = T(t, S);
        return r
            ? e({}, n, {
                  events: n.events.map(t =>
                      t.properties.welcomeMessage || t.properties.invitation
                          ? e({}, t, {
                                id: r.id,
                            })
                          : t
                  ),
              })
            : n;
    },
    E = t =>
        e({}, t, {
            properties: e({}, t.properties, {
                accepted: !0,
            }),
        }),
    q = (e, t) => {
        let { sdk: n } = e;
        const { uniqueId: r, id: s } = t.event.properties;
        return n
            .acceptGreeting({
                greetingId: s,
                uniqueId: r,
            })
            .then(
                () => E(t),
                e => {
                    if ('INTERNAL' === e.code) return E(t);
                    throw e;
                }
            );
    },
    D = function (n, r) {
        var s;
        let { sdk: o, store: a } = n,
            { group: i, customerStartingEvent: c, agentFakeEvent: u } = void 0 === r ? {} : r;
        const d = {
            chat: {
                thread: {
                    properties: {},
                },
                properties: {},
            },
        };
        g(a) &&
            ((d.continuous = !0),
            (d.chat.properties.routing = {
                email_follow_up: !0,
            })),
            'number' == typeof i &&
                (d.chat.access = {
                    groupIds: [i],
                });
        let p = {};
        if ('filled_form' === (null == c ? void 0 : c.type)) {
            var h, m;
            const t = I(Boolean, {
                name: null == (h = v(e => 'name' === e.type, c.fields)) ? void 0 : h.answer,
                email: null == (m = v(e => 'email' === e.type, c.fields)) ? void 0 : m.answer,
            });
            p = e({}, t);
        }
        const y = a.getSessionUser();
        (y.name && 'Customer' !== y.name) || ((p.name = a.localize('client')), (p.nameIsDefault = !0));
        const T = f(p) ? Promise.resolve() : o.updateCustomer(p).catch(e => l('update_customer_request_failed', e));
        if ('ticket' === (null == c || null == (s = c.properties.lc2) ? void 0 : s.form_type))
            (d.active = !1),
                (d.chat.thread.properties.routing = {
                    offline_message: !0,
                }),
                (d.chat.thread.events = [C(a, c)]);
        else {
            const e = a.getEvents(S).filter(e => e.type === w && null === e.serverId);
            if ((f(e) || (d.chat.thread.events = e.map(e => C(a, e))), c)) {
                const e = C(a, c);
                t(d.chat.thread.events) ? d.chat.thread.events.push(e) : (d.chat.thread.events = [e]);
            }
            if (u) {
                const { properties: e } = u;
                e.invitation
                    ? (d.chat.thread.properties = (e => ({
                          lc2: {
                              welcome_author_id: e.author,
                              greeting_id: e.properties.id,
                              greeting_unique_id: e.properties.uniqueId,
                          },
                      }))(u))
                    : e.id && (d.welcomeMessageId = e.id);
            }
        }
        const _ = a.getChat(S).serverId;
        return _
            ? T.then(() =>
                  o.resumeChat(
                      e({}, d, {
                          chat: e({}, d.chat, {
                              id: _,
                          }),
                      })
                  )
              ).then(e => A(a, k(a, e)))
            : T.then(() => o.startChat(d)).then(e => A(a, k(a, e)));
    },
    Q = e => {
        let { sdk: t } = e;
        return t.listChats().then(e => {
            let { chatsSummary: t } = e;
            const n = c(t);
            return n ? u(n) : null;
        });
    },
    N = (e, t) => {
        let { sdk: n } = e,
            { groupIds: r } = t;
        return n
            .listGroupStatuses({
                groupIds: r,
            })
            .then(e =>
                r.reduce((t, n) => {
                    const r = e[n];
                    return (t[n] = r ? m(r) : 'not_found'), t;
                }, {})
            );
    },
    H = (e, t) => {
        let { groupId: n } = t;
        return N(e, {
            groupIds: [n],
        }).then(e => {
            let { [n]: t } = e;
            return t;
        });
    },
    j = function (e, t, n) {
        let { sdk: r } = e;
        return (
            void 0 === n && (n = _),
            r
                .getForm(t)
                .then(e =>
                    e.enabled
                        ? {
                              enabled: !0,
                              form: n(t.type, e.form),
                          }
                        : e
                )
                .catch(
                    e => (
                        l('get_form_request_failed', e),
                        {
                            enabled: !1,
                        }
                    )
                )
        );
    },
    O = e => {
        let { sdk: t, store: n } = e;
        const r = n.getApplicationState('welcomeMessageId');
        return t
            .requestWelcomeMessage(
                r
                    ? {
                          id: r,
                      }
                    : {}
            )
            .then(e => {
                let { id: t, predictedAgent: n, queue: r } = e;
                return {
                    welcomeMessageId: t,
                    agent: n,
                    groupHasQueue: r,
                };
            });
    },
    L = (e, t) =>
        j(e, {
            groupId: t,
            type: 'postchat',
        }),
    R = (e, t) =>
        j(
            e,
            {
                groupId: t,
                type: 'ticket',
            },
            (e, t) => F(t)
        ),
    G = (e, t) => {
        let { store: n } = e,
            { groupId: r } = t;
        const { license: s, region: o, organizationId: a } = n.getApplicationState();
        return d({
            organizationId: a,
            groupId: r,
            region: o,
            version: 'tfm',
        }).then(e => e.__unsafeProperties.ticketFormMode || p(e));
    },
    B = (e, t) => {
        let { sdk: n } = e,
            { chatId: r } = t;
        return n
            .getChat({
                chatId: r,
            })
            .then(e => {
                let { users: t, eventsSeenUpToMap: n } = e;
                return {
                    users: t,
                    eventsSeenUpToMap: n,
                };
            });
    },
    W = (e, t) => {
        let { sdk: n, store: r } = e,
            { chatId: s, threadId: a } = t;
        return n
            .getChat({
                chatId: s,
                threadId: a,
            })
            .then(e =>
                o(r, {
                    thread: e.thread,
                    users: e.users,
                    eventsSeenUpToMap: e.eventsSeenUpToMap,
                })
            );
    },
    Z = (e, t) =>
        t
            .next()
            .then(t => {
                let { value: n, done: r } = t;
                return n
                    ? {
                          value: n.threads.map(t =>
                              h(e, {
                                  thread: t,
                              })
                          ),
                          done: r,
                      }
                    : {
                          value: n,
                          done: r,
                      };
            })
            .catch(e => {
                if ('NOT_FOUND' === e.code)
                    return {
                        value: [],
                        done: !0,
                    };
                throw e;
            }),
    $ = (e, t, n) => {
        const { store: r } = e;
        a(r) &&
            !x.getHistoryIterator() &&
            x.setHistoryIterator(
                n ||
                    ((e, t) => {
                        let { sdk: n, store: r } = e;
                        const s = n.getChatHistory({
                            chatId: t,
                        });
                        return {
                            next: () => Z(r, s),
                        };
                    })(e, t)
            );
    },
    J = (e, t) => {
        let { sdk: n, store: r } = e;
        const a = n.getChatHistory({
            chatId: t,
        });
        return Promise.all([
            a.next(),
            B(
                {
                    sdk: n,
                },
                {
                    chatId: t,
                }
            ),
        ])
            .then(e => {
                let [{ value: t, done: n }, { users: i, eventsSeenUpToMap: c }] = e;
                const u = s('id', i);
                if (t && t.threads.some(e => e.events.some(e => 'system' !== e.authorId && !(e.authorId in u)))) {
                    const e = new Error();
                    throw ((e.code = 'MISSING_USER'), e);
                }
                return {
                    threads:
                        t &&
                        t.threads
                            .map(
                                e =>
                                    o(r, {
                                        thread: e,
                                        users: i,
                                        eventsSeenUpToMap: c,
                                    }).thread
                            )
                            .filter(Boolean),
                    eventsSeenUpToMap: c,
                    hasMore: !n,
                    iterator: {
                        next: () => Z(r, a),
                    },
                };
            })
            .catch(e => {
                if ('NOT_FOUND' === e.code)
                    return {
                        threads: [],
                        hasMore: !1,
                    };
                throw e;
            });
    },
    X = async (e, t) => {
        const n = await i('https://api.helpdesk.com/v1/contactForms/formSettings?licenseID=' + e + '&lcGroupID=' + t);
        if (!n.ok) throw new Error('Failed to fetch HelpDesk ticket form configuration');
        return n.json();
    },
    Y = (e, t) => {
        let { sdk: s, store: o } = e;
        return s
            .rateChat({
                chatId: y(o),
                rating: n({
                    comment: t.rateComment,
                    score: z(t.rating),
                }),
            })
            .then(() => {
                o.updateChat(S, {
                    properties: n({
                        rate: t.rating,
                        rateComment: t.rateComment,
                    }),
                });
            })
            .catch(r);
    },
    K = (e, t) => {
        let { sdk: n, store: s } = e;
        return n
            .cancelRate({
                chatId: y(s),
                properties: t,
            })
            .then(() => {
                s.updateChat(S, {
                    properties: t.reduce(
                        (e, t) => ('comment' === t ? (e.rateComment = null) : 'score' === t && (e.rate = null), e),
                        {}
                    ),
                });
            })
            .catch(r);
    },
    V = M(300, (e, t) => {
        const { store: n, sdk: s } = e,
            o = y(n),
            a = new Date(t).toISOString().replace(/Z$/, '999Z');
        o &&
            s
                .markEventsAsSeen({
                    chatId: o,
                    seenUpTo: a,
                })
                .catch(r);
    });
export {
    J as a,
    W as b,
    x as c,
    D as d,
    R as e,
    X as f,
    L as g,
    K as h,
    V as i,
    q as j,
    O as k,
    N as l,
    $ as m,
    Q as n,
    P as o,
    H as p,
    G as q,
    z as r,
    b as s,
    M as t,
    Y as u,
};
