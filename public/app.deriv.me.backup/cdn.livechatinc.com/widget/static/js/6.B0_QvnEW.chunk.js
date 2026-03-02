import { k as t } from './4.C_rgEAoe.chunk.js';

function a(t) {
    return t.reduce((t, a) => {
        let [e, n] = a;
        return (t[e] = n), t;
    }, {});
}

function e(a) {
    return t(a).map(t => [t, a[t]]);
}
const n = t =>
        e(t)
            .map(t => t.map(encodeURIComponent).join('='))
            .join('&'),
    r = t =>
        a(
            t
                .split('&')
                .filter(Boolean)
                .map(t => t.split('=').map(t => decodeURIComponent(t.replace('+', '%20'))))
                .map(t => (2 === t.length ? t : [t[0], '']))
        ),
    s = /[^:]+:\/\/[^(/|?)\s]+/,
    c = t => {
        const a = t.match(s);
        return a && a[0];
    },
    o = /.*?\?([^#]+)/,
    p = t => {
        const a = t.match(o);
        return a ? '?' + a[1] : '';
    },
    u = t => t.replace(/^\?/, ''),
    i = t => {
        if (null === c(t)) return r(u(t));
        const a = u(p(t));
        return a ? r(a) : {};
    },
    m = t => t.replace(/\w/g, '$&[\\r\\n\\t]*'),
    l = new RegExp('^[\0-]*(' + m('javascript') + '|' + m('data') + '):', 'i'),
    d = t => l.test(t),
    f = (() => {
        try {
            return !1;
        } catch (t) {
            return !1;
        }
    })(),
    h = 200,
    j = 350,
    g = 100,
    k = 'ta';
export {
    h as L,
    k as T,
    i as a,
    j as b,
    g as c,
    r as d,
    n as e,
    p as f,
    c as g,
    d as h,
    f as i,
    e as j,
    a as k,
    u as t,
};
