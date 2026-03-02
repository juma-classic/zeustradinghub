'use strict';
(self.webpackChunk_deriv_trader = self.webpackChunk_deriv_trader || []).push([
    ['src_Modules_Trading_Components_Form_TradeParams_Accumulator_accumulators-info-display_tsx-src-a7086a'],
    {
        './src/App/Components/Form/fieldset.tsx': (e, t, r) => {
            r.d(t, {
                A: () => u,
            });
            var n = r('../../node_modules/classnames/index.js'),
                a = r.n(n),
                o = r('react'),
                i = r.n(o),
                c = r('@deriv/components');

            function l(e) {
                return (
                    (l =
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
                    l(e)
                );
            }

            function s(e, t, r) {
                return (
                    (t = (function (e) {
                        var t = (function (e) {
                            if ('object' != l(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var r = t.call(e, 'string');
                                if ('object' != l(r)) return r;
                                throw new TypeError('@@toPrimitive must return a primitive value.');
                            }
                            return String(e);
                        })(e);
                        return 'symbol' == l(t) ? t : t + '';
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
            const u = function (e) {
                var t = e.children,
                    r = e.className,
                    n = e.header,
                    o = e.header_tooltip,
                    l = e.is_center,
                    u = e.is_tooltip_disabled,
                    m = e.popover_wrapper_class,
                    p = e.onMouseEnter,
                    d = e.onMouseLeave,
                    _ = a()('trade-container__fieldset-header', {
                        'center-text': l,
                        'trade-container__fieldset-header--inline': o,
                    }),
                    f = a()('trade-container__fieldset-info', !l && 'trade-container__fieldset-info--left');
                return i().createElement(
                    'fieldset',
                    {
                        className: r,
                        onMouseEnter: p,
                        onMouseLeave: d,
                    },
                    !!n &&
                        i().createElement(
                            'div',
                            {
                                className: _,
                            },
                            i().createElement(
                                'span',
                                {
                                    className: f,
                                },
                                n
                            ),
                            o &&
                                i().createElement(
                                    'span',
                                    {
                                        className: a()(
                                            s(
                                                {
                                                    'trade-container__fieldset-header--tooltip-disabled': u,
                                                },
                                                m,
                                                !!m
                                            )
                                        ),
                                    },
                                    i().createElement(c.Popover, {
                                        alignment: 'left',
                                        icon: 'info',
                                        is_bubble_hover_enabled: !0,
                                        message: o,
                                        margin: 216,
                                        relative_render: !0,
                                    })
                                )
                        ),
                    t
                );
            };
        },
        './src/App/Components/Form/number-selector.tsx': (e, t, r) => {
            r.d(t, {
                A: () => c,
            });
            var n = r('../../node_modules/classnames/index.js'),
                a = r.n(n),
                o = r('react'),
                i = r.n(o);
            const c = function (e) {
                var t = e.arr_arr_numbers,
                    r = e.name,
                    n = e.onChange,
                    o = e.selected_number,
                    c = e.should_show_in_percents,
                    l = e.is_disabled,
                    s = function (e) {
                        Number(e.currentTarget.getAttribute('data-value')) === o ||
                            l ||
                            n({
                                target: {
                                    name: r,
                                    value: Number(e.currentTarget.getAttribute('data-value')),
                                },
                            });
                    };
                return i().createElement(
                    'div',
                    {
                        className: 'number-selector',
                    },
                    t &&
                        t.map(function (e, t) {
                            return i().createElement(
                                'div',
                                {
                                    className: 'number-selector__row',
                                    key: t.toString() + (null == e ? void 0 : e[0]),
                                },
                                e.map(function (e) {
                                    return i().createElement(
                                        'span',
                                        {
                                            key: e,
                                            className: a()('number-selector__selection', {
                                                'number-selector__selection--selected': o === e,
                                                'number-selector__selection--percentage': c,
                                                'number-selector__selection--disabled': l,
                                            }),
                                            'data-value': e,
                                            onClick: s,
                                        },
                                        c ? ''.concat(100 * e, '%') : e
                                    );
                                })
                            );
                        })
                );
            };
        },
        './src/Modules/Trading/Components/Form/LabeledQuantityInputMobile/index.ts': (e, t, r) => {
            r.d(t, {
                A: () => l,
            });
            var n = r('react'),
                a = r.n(n),
                o = r('@deriv/components'),
                i = r('./src/App/Components/Form/fieldset.tsx'),
                c = ['input_label'];
            const l = a().memo(function (e) {
                var t = e.input_label,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (-1 !== t.indexOf(n)) continue;
                                        r[n] = e[n];
                                    }
                                return r;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < o.length; n++)
                                (r = o[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                        }
                        return a;
                    })(e, c);
                return a().createElement(
                    'div',
                    {
                        className: ''.concat(r.name, '__widget ').concat(r.wrapper_classname),
                        'data-testid': 'dt_'.concat(r.name, '_widget'),
                    },
                    a().createElement(
                        i.A,
                        {
                            className: ''.concat(r.name, '__fields'),
                        },
                        a().createElement(o.InputField, r)
                    ),
                    a().createElement(
                        'h2',
                        {
                            className: ''.concat(r.name, '__widget-title'),
                        },
                        t
                    )
                );
            });
        },
        './src/Modules/Trading/Components/Form/Purchase/value-movement.tsx': (e, t, r) => {
            r.d(t, {
                A: () => l,
            });
            var n = r('../../node_modules/classnames/index.js'),
                a = r.n(n),
                o = r('react'),
                i = r.n(o),
                c = r('@deriv/components');
            const l = function (e) {
                var t,
                    r,
                    n = e.has_error_or_not_loaded,
                    o = e.proposal_info,
                    l = e.currency,
                    s = e.is_vanilla,
                    u = void 0 !== s && s,
                    m = e.value,
                    p = e.show_currency,
                    d = void 0 === p || p;
                return i().createElement(
                    'div',
                    {
                        className: 'price-info--value-container',
                    },
                    i().createElement(
                        'div',
                        {
                            className: 'trade-container__price-info-value',
                        },
                        !n &&
                            i().createElement(c.Money, {
                                amount:
                                    (null == o || null === (t = o.obj_contract_basis) || void 0 === t
                                        ? void 0
                                        : t.value) || m,
                                className: a()('trade-container__price-info-currency', {
                                    'trade-container__price-info-currency--payout-per-point': u,
                                }),
                                currency: l,
                                should_format: !u,
                                show_currency: d,
                            })
                    ),
                    i().createElement(c.ArrowIndicator, {
                        className: 'trade-container__price-info-movement',
                        value:
                            (null == o || null === (r = o.obj_contract_basis) || void 0 === r ? void 0 : r.value) || m,
                    })
                );
            };
        },
        './src/Modules/Trading/Components/Form/TradeParams/Accumulator/accumulators-info-display.tsx': (e, t, r) => {
            r.d(t, {
                A: () => d,
            });
            var n = r('react'),
                a = r.n(n),
                o = r('@deriv/translations'),
                i = r('./src/App/Components/Form/fieldset.tsx'),
                c = r('@deriv/components'),
                l = r('../../node_modules/classnames/index.js'),
                s = r.n(l),
                u = r('mobx-react-lite'),
                m = r('./src/Stores/useTraderStores.tsx'),
                p = r('@deriv/shared');
            const d = (0, u.observer)(function () {
                var e = (0, m.P)(),
                    t = e.currency,
                    r = e.maximum_payout,
                    n = e.maximum_ticks,
                    l = [
                        {
                            label: (0, o.localize)('Max. payout'),
                            value: a().createElement(c.Money, {
                                amount: r,
                                show_currency: !0,
                                currency: t,
                            }),
                            tooltip_text: (0, o.localize)(
                                'Your contract will be automatically closed when your payout reaches this amount.'
                            ),
                            margin: 143,
                        },
                        {
                            label: (0, o.localize)('Max. ticks'),
                            value: ''
                                .concat(n || 0, ' ')
                                .concat(1 === n ? (0, o.localize)('tick') : (0, o.localize)('ticks')),
                            tooltip_text: (0, o.localize)(
                                'Your contract will be automatically closed upon reaching this number of ticks.'
                            ),
                            margin: 175,
                        },
                    ];
                return a().createElement(
                    i.A,
                    {
                        className: s()('trade-container__fieldset', 'accu-info-display'),
                    },
                    l.map(function (e) {
                        var t = e.label,
                            r = e.value,
                            n = e.tooltip_text,
                            o = e.margin;
                        return a().createElement(
                            'div',
                            {
                                key: t,
                                className: 'accu-info-display__row',
                            },
                            a().createElement(
                                c.Text,
                                {
                                    size: 'xxs',
                                    weight: 'bold',
                                    line_height: 'xxs',
                                },
                                t
                            ),
                            a().createElement(
                                c.Text,
                                {
                                    size: 'xxs',
                                    align: 'right',
                                    as: 'div',
                                },
                                a().createElement(
                                    c.Popover,
                                    {
                                        alignment: (0, p.isMobile)() ? 'top' : 'left',
                                        classNameBubble: 'accu-info-display__popover',
                                        is_bubble_hover_enabled: !0,
                                        message: n,
                                        margin: (0, p.isMobile)() ? -5 : o,
                                        zIndex: '9999',
                                    },
                                    r
                                )
                            )
                        );
                    })
                );
            });
        },
        './src/Modules/Trading/Components/Form/TradeParams/Duration/duration-range-text.tsx': (e, t, r) => {
            r.d(t, {
                A: () => l,
            });
            var n = r('react'),
                a = r.n(n),
                o = r('@deriv/components'),
                i = r('@deriv/shared'),
                c = r('@deriv/translations');
            const l = function (e) {
                var t = e.min,
                    r = e.max,
                    n = e.duration_unit_text;
                return a().createElement(
                    o.Text,
                    {
                        as: 'div',
                        size: 'xxxs',
                        line_height: 's',
                        className: 'range-text-container',
                    },
                    a().createElement(c.Localize, {
                        i18n_default_text: 'Range: {{min}} - {{max}} {{duration_unit_text}} ',
                        values: {
                            min: (0, i.addComma)(t),
                            max: (0, i.addComma)(r),
                            duration_unit_text: n,
                        },
                    })
                );
            };
        },
        './src/Modules/Trading/Components/Form/TradeParams/Duration/expiry-text.tsx': (e, t, r) => {
            r.d(t, {
                A: () => c,
            });
            var n = r('react'),
                a = r.n(n),
                o = r('@deriv/components'),
                i = r('@deriv/translations');
            const c = function (e) {
                var t = e.expiry_epoch,
                    r = e.has_error,
                    n = e.fixed_date,
                    c =
                        t && !r
                            ? new Date(1e3 * t)
                                  .toUTCString()
                                  .replace('GMT', 'GMT +0')
                                  .substring(5)
                                  .replace(/(\d{2}) (\w{3} \d{4})/, '$1 $2,')
                            : '';
                return a().createElement(
                    o.Text,
                    {
                        as: 'div',
                        size: 'xxxs',
                        line_height: 's',
                        className: 'expiry-text-container',
                    },
                    a().createElement(i.Localize, {
                        i18n_default_text: 'Expiry: {{date}}',
                        values: {
                            date: n || c,
                        },
                    })
                );
            };
        },
        './src/Modules/Trading/Components/Form/TradeParams/Multiplier/expiration.tsx': (e, t, r) => {
            r.d(t, {
                A: () => p,
            });
            var n = r('react'),
                a = r.n(n),
                o = r('@deriv/translations'),
                i = r('@deriv/shared'),
                c = r('@deriv/components'),
                l = r('./src/App/Components/Form/fieldset.tsx'),
                s = r('mobx-react-lite'),
                u = r('../stores/src/useStore.ts'),
                m = r('./src/Stores/useTraderStores.tsx');
            const p = (0, s.observer)(function (e) {
                var t = e.is_text_only,
                    r = e.text_size,
                    n = (0, m.P)().expiration,
                    s = (0, u.A)().common.server_time,
                    p = (0, i.formatDuration)(
                        (0, i.getDiffDuration)(Number(null == s ? void 0 : s.unix()), Number(n)),
                        'HH:mm'
                    ),
                    d = p.days,
                    _ = p.timestamp,
                    f = (0, i.getDateFromNow)(d, 'day', 'DD MMM YYYY');
                return t
                    ? a().createElement(
                          a().Fragment,
                          null,
                          n
                              ? a().createElement(
                                    c.Text,
                                    {
                                        size: r,
                                        align: 'center',
                                    },
                                    f,
                                    ' at ',
                                    _
                                )
                              : '-'
                      )
                    : a().createElement(
                          l.A,
                          {
                              className: 'trade-container__fieldset trade-container__fieldset__multiplier',
                              is_center: !0,
                              header: a().createElement(o.Localize, {
                                  i18n_default_text: 'Expires on',
                              }),
                              header_tooltip: n
                                  ? a().createElement(o.Localize, {
                                        i18n_default_text:
                                            'Your contract will be closed automatically at the next available asset price on {{date}} at {{timestamp}}.',
                                        values: {
                                            date: f,
                                            timestamp: _,
                                        },
                                    })
                                  : null,
                          },
                          a().createElement(
                              'div',
                              {
                                  className: 'trade-container__fieldset-expiration',
                              },
                              n
                                  ? a().createElement(
                                        c.Text,
                                        {
                                            size: 'xs',
                                            align: 'center',
                                        },
                                        f,
                                        ' at ',
                                        _
                                    )
                                  : '-'
                          )
                      );
            });
        },
        './src/Modules/Trading/Components/Form/TradeParams/Multiplier/info.tsx': (e, t, r) => {
            r.d(t, {
                A: () => f,
            });
            var n = r('../../node_modules/classnames/index.js'),
                a = r.n(n),
                o = r('react'),
                i = r.n(o),
                c = r('@deriv/components'),
                l = r('@deriv/translations'),
                s = r('mobx-react-lite'),
                u = r('./src/Stores/useTraderStores.tsx');

            function m(e) {
                return (
                    (m =
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
                    m(e)
                );
            }
            var p = [
                'className',
                'commission_text_size',
                'stop_out_text_size',
                'is_tooltip_relative',
                'should_show_tooltip',
            ];

            function d() {
                return (
                    (d = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t];
                                  for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                              }
                              return e;
                          }),
                    d.apply(null, arguments)
                );
            }

            function _(e, t, r) {
                return (
                    (t = (function (e) {
                        var t = (function (e) {
                            if ('object' != m(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var r = t.call(e, 'string');
                                if ('object' != m(r)) return r;
                                throw new TypeError('@@toPrimitive must return a primitive value.');
                            }
                            return String(e);
                        })(e);
                        return 'symbol' == m(t) ? t : t + '';
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
            const f = (0, s.observer)(function (e) {
                var t,
                    r,
                    n,
                    o,
                    s = e.className,
                    m = e.commission_text_size,
                    f = e.stop_out_text_size,
                    y = e.is_tooltip_relative,
                    h = e.should_show_tooltip,
                    v = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (-1 !== t.indexOf(n)) continue;
                                        r[n] = e[n];
                                    }
                                return r;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < o.length; n++)
                                (r = o[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                        }
                        return a;
                    })(e, p),
                    b = (0, u.P)(),
                    E = b.currency,
                    g = b.has_stop_loss,
                    x = null !== (t = v.multiplier) && void 0 !== t ? t : b.multiplier || 0,
                    w = null !== (r = v.amount) && void 0 !== r ? r : b.amount || 0,
                    T = null !== (n = v.commission) && void 0 !== n ? n : b.commission || 0,
                    A = null !== (o = v.stop_out) && void 0 !== o ? o : b.stop_out || 0,
                    S = i().createElement(
                        c.Text,
                        {
                            as: 'p',
                            line_height: 's',
                            size: m || 'xxxs',
                            className: a()(_({}, ''.concat(s, '-tooltip-text'), s)),
                        },
                        i().createElement(l.Localize, {
                            i18n_default_text: 'Commission <0/>',
                            components: [
                                i().createElement(c.Money, {
                                    key: 0,
                                    amount: T,
                                    currency: E,
                                    show_currency: !0,
                                }),
                            ],
                        })
                    ),
                    O = i().createElement(
                        c.Text,
                        {
                            as: 'p',
                            line_height: 's',
                            size: f || 'xxxs',
                            className: a()(_({}, ''.concat(s, '-tooltip-text'), s)),
                        },
                        i().createElement(l.Localize, {
                            i18n_default_text: 'Stop out <0/>',
                            components: [
                                i().createElement(c.Money, {
                                    key: 0,
                                    amount: A,
                                    currency: E,
                                    show_currency: !0,
                                }),
                            ],
                        })
                    ),
                    N = i().createElement(l.Localize, {
                        i18n_default_text: '<0>{{commission_percentage}}%</0> of (<1/> * {{multiplier}})',
                        values: {
                            commission_percentage: ((100 * Number(T)) / (x * Number(w))).toFixed(4),
                            multiplier: x,
                        },
                        components: [
                            i().createElement(c.Text, {
                                size: 'xxs',
                                weight: 'bold',
                                key: 0,
                            }),
                            i().createElement(c.Money, {
                                key: 1,
                                amount: w,
                                currency: E,
                            }),
                        ],
                    }),
                    k = i().createElement(l.Localize, {
                        i18n_default_text:
                            'Your contract will be closed automatically when your loss reaches {{stop_out_percentage}}% of your stake.',
                        values: {
                            stop_out_percentage: Math.floor(Math.abs((100 * A) / Number(w))),
                        },
                    }),
                    z = function (e) {
                        var t = e.text,
                            r = e.message,
                            n = e.margin,
                            a = y
                                ? {
                                      alignment: 'left',
                                      relative_render: !0,
                                      margin: n,
                                  }
                                : {
                                      alignment: 'top',
                                      zIndex: '9999',
                                  };
                        return h
                            ? i().createElement(
                                  c.Popover,
                                  d(
                                      {
                                          message: r,
                                      },
                                      a
                                  ),
                                  t
                              )
                            : t;
                    };
                return i().createElement(
                    'div',
                    {
                        className: a()('multipliers-trade-info', s, {
                            'mobile-widget__multiplier-trade-info--no-stop-out': g,
                        }),
                    },
                    z({
                        text: S,
                        message: N,
                        margin: 30,
                    }),
                    !g &&
                        z({
                            text: O,
                            message: k,
                            margin: 160,
                        })
                );
            });
        },
        './src/Modules/Trading/Components/Form/TradeParams/Multiplier/stop-loss.tsx': (e, t, r) => {
            r.d(t, {
                A: () => h,
            });
            var n = r('react'),
                a = r.n(n),
                o = r('../../node_modules/classnames/index.js'),
                i = r.n(o),
                c = r('@deriv/components'),
                l = r('@deriv/translations'),
                s = r('./src/App/Components/Form/fieldset.tsx'),
                u = r('@deriv/shared'),
                m = r('mobx-react-lite'),
                p = r('../stores/src/useStore.ts'),
                d = r('./src/Stores/useTraderStores.tsx');

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

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }

            function y(e, t, r) {
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
            const h = (0, m.observer)(function (e) {
                var t,
                    r,
                    n,
                    o,
                    m,
                    _ = (0, p.A)(),
                    h = _.ui,
                    v = _.client,
                    b = (0, d.P)(),
                    E = h.addToast,
                    g = h.removeToast,
                    x = h.current_focus,
                    w = h.setCurrentFocus,
                    T = v.is_single_currency,
                    A = b.amount,
                    S = b.currency,
                    O = null !== (t = e.validation_errors) && void 0 !== t ? t : b.validation_errors,
                    N = null !== (r = e.stop_loss) && void 0 !== r ? r : b.stop_loss,
                    k = null !== (n = e.has_stop_loss) && void 0 !== n ? n : b.has_stop_loss,
                    z = null !== (o = e.onChangeMultiple) && void 0 !== o ? o : b.onChangeMultiple,
                    L = null !== (m = e.onChange) && void 0 !== m ? m : b.onChange;
                return a().createElement(
                    s.A,
                    {
                        className: 'trade-container__fieldset',
                    },
                    a().createElement(c.InputWithCheckbox, {
                        addToast: E,
                        removeToast: g,
                        classNameBubble: 'dc-popover__trade-params',
                        classNameInlinePrefix: 'trade-container__currency',
                        classNameInput: 'trade-container__input',
                        className: i()({
                            'trade-container__amount trade-container__amount--multipliers': (0, u.isDesktop)(),
                        }),
                        currency: S,
                        current_focus: null != x ? x : '',
                        defaultChecked: k,
                        error_messages: k ? (null == O ? void 0 : O.stop_loss) : void 0,
                        is_single_currency: T,
                        is_negative_disabled: !0,
                        is_input_hidden: !k,
                        label: (0, l.localize)('Stop loss'),
                        max_value: +A,
                        name: 'stop_loss',
                        onChange: function (e) {
                            if ('has_stop_loss' === e.target.name) {
                                var t = e.target.value;
                                z(
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {};
                                            t % 2
                                                ? f(Object(r), !0).forEach(function (t) {
                                                      y(e, t, r[t]);
                                                  })
                                                : Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                                  : f(Object(r)).forEach(function (t) {
                                                        Object.defineProperty(
                                                            e,
                                                            t,
                                                            Object.getOwnPropertyDescriptor(r, t)
                                                        );
                                                    });
                                        }
                                        return e;
                                    })(
                                        y({}, e.target.name, t),
                                        t
                                            ? {
                                                  has_cancellation: !1,
                                              }
                                            : {}
                                    )
                                );
                            } else L(e);
                        },
                        setCurrentFocus: w,
                        tooltip_label: a().createElement(l.Localize, {
                            i18n_default_text:
                                'When your loss reaches or exceeds this amount, your trade will be closed automatically.',
                        }),
                        tooltip_alignment: 'left',
                        error_message_alignment: 'left',
                        value: null != N ? N : '',
                    })
                );
            });
        },
        './src/Modules/Trading/Components/Form/TradeParams/Multiplier/take-profit.tsx': (e, t, r) => {
            r.d(t, {
                A: () => h,
            });
            var n = r('react'),
                a = r.n(n),
                o = r('../../node_modules/classnames/index.js'),
                i = r.n(o),
                c = r('@deriv/components'),
                l = r('@deriv/translations'),
                s = r('@deriv/shared'),
                u = r('./src/App/Components/Form/fieldset.tsx'),
                m = r('mobx-react-lite'),
                p = r('../stores/src/useStore.ts'),
                d = r('./src/Stores/useTraderStores.tsx');

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

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }

            function y(e, t, r) {
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
            const h = (0, m.observer)(function (e) {
                var t,
                    r,
                    n,
                    o,
                    m,
                    _ = (0, p.A)(),
                    h = _.ui,
                    v = _.client,
                    b = (0, d.P)(),
                    E = h.addToast,
                    g = h.removeToast,
                    x = h.current_focus,
                    w = h.setCurrentFocus,
                    T = v.is_single_currency,
                    A = b.is_accumulator,
                    S = b.currency,
                    O = b.has_open_accu_contract,
                    N = null !== (t = e.validation_errors) && void 0 !== t ? t : b.validation_errors,
                    k = null !== (r = e.take_profit) && void 0 !== r ? r : b.take_profit,
                    z = null !== (n = e.has_take_profit) && void 0 !== n ? n : b.has_take_profit,
                    L = null !== (o = e.onChangeMultiple) && void 0 !== o ? o : b.onChangeMultiple,
                    P = null !== (m = e.onChange) && void 0 !== m ? m : b.onChange,
                    I = a().createElement(l.Localize, {
                        i18n_default_text:
                            'When your profit reaches or exceeds this amount, your trade will be closed automatically.',
                    });
                return a().createElement(
                    u.A,
                    {
                        className: 'trade-container__fieldset',
                    },
                    a().createElement(c.InputWithCheckbox, {
                        addToast: E,
                        removeToast: g,
                        classNameBubble: 'dc-popover__trade-params',
                        classNameInlinePrefix: 'trade-container__currency',
                        classNameInput: i()('trade-container__input', {
                            'trade-container__input--accumulator': A,
                        }),
                        className: i()({
                            'trade-container__amount trade-container__amount--multipliers': (0, s.isDesktop)(),
                        }),
                        currency: S,
                        current_focus: null != x ? x : '',
                        defaultChecked: z,
                        error_messages: z ? (null == N ? void 0 : N.take_profit) : void 0,
                        is_disabled: O,
                        is_single_currency: T,
                        is_negative_disabled: !0,
                        is_input_hidden: !z,
                        label: (0, l.localize)('Take profit'),
                        name: 'take_profit',
                        onChange: function (e) {
                            if ('has_take_profit' === e.target.name) {
                                var t = e.target.value;
                                L(
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {};
                                            t % 2
                                                ? f(Object(r), !0).forEach(function (t) {
                                                      y(e, t, r[t]);
                                                  })
                                                : Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                                  : f(Object(r)).forEach(function (t) {
                                                        Object.defineProperty(
                                                            e,
                                                            t,
                                                            Object.getOwnPropertyDescriptor(r, t)
                                                        );
                                                    });
                                        }
                                        return e;
                                    })(
                                        y({}, e.target.name, t),
                                        t
                                            ? {
                                                  has_cancellation: !1,
                                              }
                                            : {}
                                    )
                                );
                            } else P(e);
                        },
                        setCurrentFocus: w,
                        tooltip_label: A
                            ? a().createElement(
                                  a().Fragment,
                                  null,
                                  I,
                                  ' ',
                                  a().createElement(l.Localize, {
                                      i18n_default_text: "Take profit can't be adjusted after your contract starts.",
                                  })
                              )
                            : I,
                        tooltip_alignment: 'left',
                        error_message_alignment: 'left',
                        value: null != k ? k : '',
                    })
                );
            });
        },
        './src/Modules/Trading/Components/Form/TradeParams/Turbos/payout-selector.tsx': (e, t, r) => {
            r.d(t, {
                A: () => E,
            });
            var n = r('react'),
                a = r.n(n),
                o = r('@deriv/components'),
                i = r('@deriv/translations'),
                c = r('mobx-react-lite'),
                l = r('./src/Stores/useTraderStores.tsx'),
                s = r('../../node_modules/@deriv-com/ui/dist/hooks/useDevice.js'),
                u = r('../../node_modules/framer-motion/dist/es/render/dom/motion.mjs');

            function m(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var r =
                            null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != r) {
                            var n,
                                a,
                                o,
                                i,
                                c = [],
                                l = !0,
                                s = !1;
                            try {
                                if (((o = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                } else for (; !(l = (n = o.call(r)).done) && (c.push(n.value), c.length !== t); l = !0);
                            } catch (e) {
                                (s = !0), (a = e);
                            } finally {
                                try {
                                    if (!l && null != r.return && ((i = r.return()), Object(i) !== i)) return;
                                } finally {
                                    if (s) throw a;
                                }
                            }
                            return c;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return p(e, t);
                            var r = {}.toString.call(e).slice(8, -1);
                            return (
                                'Object' === r && e.constructor && (r = e.constructor.name),
                                'Map' === r || 'Set' === r
                                    ? Array.from(e)
                                    : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                      ? p(e, t)
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

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var d = {
                    duration: 0.24,
                    ease: [0, 0, 0, 1],
                },
                _ = {
                    enter: function (e) {
                        return {
                            x: 0,
                            y: 'down' === e ? 30 : -30,
                            opacity: 0,
                            transition: d,
                        };
                    },
                    center: {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        transition: d,
                    },
                    exit: function (e) {
                        return {
                            x: 0,
                            y: 'down' === e ? -30 : 30,
                            opacity: 0,
                            transition: d,
                        };
                    },
                };
            const f = function (e) {
                var t = e.options,
                    r = e.onClick,
                    i = e.defaultValue,
                    c = e.currency,
                    l = m((0, n.useState)(Math.floor(t.length / 2)), 2),
                    s = l[0],
                    p = l[1],
                    d = m((0, n.useState)('down'), 2),
                    f = d[0],
                    y = d[1];
                (0, n.useEffect)(
                    function () {
                        i && p(t.indexOf(i));
                    },
                    [i, t]
                );
                var h = function (e, n) {
                        y(n), p(e), r(t[e]);
                    },
                    v = function () {
                        return [t[s - 1] || '', t[s], t[s + 1] || ''];
                    },
                    b = v().some(function (e) {
                        return void 0 === e;
                    });
                return a().createElement(
                    'div',
                    {
                        className: 'wheel-picker',
                    },
                    a().createElement(
                        'div',
                        {
                            className: 'wheel-picker__wheel',
                            key: s,
                        },
                        t.length > 0 &&
                            !b &&
                            v().map(function (e, t) {
                                return a().createElement(
                                    u.P.div,
                                    {
                                        key: t,
                                        variants: _,
                                        custom: f,
                                        initial: 'enter',
                                        animate: 'center',
                                        exit: 'exit',
                                    },
                                    a().createElement(
                                        o.Text,
                                        {
                                            size: 1 === t ? 'xs' : 'xxs',
                                            line_height: 1 === t ? 'l' : 'm',
                                            weight: 1 === t ? 'bolder' : 'bold',
                                            color: 1 === t ? 'default' : 'disabled-1',
                                            align: 'center',
                                            as: 'p',
                                            className: 1 === t ? '' : 'wheel-picker__wheel__placeholder',
                                        },
                                        e,
                                        ' ',
                                        '' !== e ? c : ''
                                    )
                                );
                            })
                    ),
                    a().createElement(
                        'div',
                        {
                            className: 'wheel-picker__actions',
                        },
                        a().createElement(
                            o.Button,
                            {
                                disabled: 0 === s,
                                small: !0,
                                className: 'wheel-picker__actions__btn',
                                'data-testid': 'dt_up_btn',
                                name: 'up-btn',
                                onClick: function () {
                                    s > 0 && h(s - 1, 'up');
                                },
                            },
                            a().createElement(o.Icon, {
                                icon: 'IcChevronUp',
                                color: 0 === s ? 'disabled' : 'black',
                                className: 'chevron-icon',
                            })
                        ),
                        a().createElement(
                            o.Button,
                            {
                                small: !0,
                                disabled: s === t.length - 1,
                                className: 'wheel-picker__actions__btn  wheel-picker__actions--chevron-up',
                                name: 'down-btn',
                                'data-testid': 'dt_down_btn',
                                onClick: function () {
                                    s < t.length - 1 && h(s + 1, 'down');
                                },
                            },
                            a().createElement(o.Icon, {
                                icon: 'IcChevronUp',
                                color: s === t.length - 1 ? 'disabled' : 'black',
                                className: 'chevron-up',
                            })
                        )
                    )
                );
            };
            var y = r('./src/App/Components/Form/fieldset.tsx'),
                h = r(
                    './node_modules/@deriv/quill-icons/dist/esm/react/LabelPaired/LabelPairedChevronsDownCaptionRegularIcon.js'
                ),
                v = r(
                    './node_modules/@deriv/quill-icons/dist/esm/react/LabelPaired/LabelPairedChevronsUpCaptionRegularIcon.js'
                );
            const b = function (e) {
                    var t = e.payoutOptions,
                        r = e.onPayoutClick,
                        n = e.selectedBarrier,
                        c = e.defaultPayout,
                        l = e.currency,
                        s = e.tooltipText,
                        u = (0, o.useDevice)().is_desktop,
                        m = a().createElement(i.Localize, {
                            i18n_default_text:
                                'The amount you choose to receive at expiry for every point of change between the final price and the barrier.',
                        });
                    return u
                        ? a().createElement(
                              y.A,
                              {
                                  className: 'trade-container__fieldset payout-per-point-input',
                                  header: a().createElement(i.Localize, {
                                      i18n_default_text: 'Payout per Point',
                                  }),
                                  header_tooltip: m,
                                  popover_wrapper_class: 'popover_wrapper_class',
                              },
                              a().createElement(f, {
                                  options: t,
                                  defaultValue: c,
                                  onClick: r,
                                  currency: l,
                              }),
                              a().createElement(
                                  y.A,
                                  {
                                      className: 'actions-wrapper',
                                  },
                                  a().createElement(
                                      o.Text,
                                      {
                                          size: 'xxxs',
                                          line_height: 'l',
                                          color: 'default',
                                          align: 'center',
                                          as: 'p',
                                      },
                                      a().createElement(i.Localize, {
                                          i18n_default_text: 'Barrier',
                                      })
                                  ),
                                  a().createElement(
                                      o.Popover,
                                      {
                                          alignment: 'left',
                                          className: 'popover-icon',
                                          is_bubble_hover_enabled: !0,
                                          margin: 206,
                                          disable_target_icon: !0,
                                          icon: 'info',
                                          zIndex: '9999',
                                          message: s,
                                      },
                                      a().createElement(
                                          'div',
                                          {
                                              className: 'distance-to-current-spot',
                                          },
                                          a().createElement(
                                              o.Text,
                                              {
                                                  size: 'xxxs',
                                                  line_height: 'l',
                                                  color: 'default',
                                                  align: 'center',
                                                  as: 'p',
                                                  className: 'barrier-value',
                                              },
                                              n,
                                              Number(n) < 0
                                                  ? a().createElement(h.A, {
                                                        width: 12,
                                                        height: 12,
                                                        stroke: 'var(--text-prominent)',
                                                        className: 'indicator-icon',
                                                    })
                                                  : a().createElement(v.A, {
                                                        width: 12,
                                                        height: 12,
                                                        stroke: 'var(--text-prominent)',
                                                        className: 'indicator-icon',
                                                    })
                                          )
                                      )
                                  )
                              )
                          )
                        : null;
                },
                E = (0, c.observer)(function () {
                    var e = (0, l.P)(),
                        t = e.barrier_1,
                        r = e.payout_choices,
                        n = e.setPayoutPerPoint,
                        c = e.togglePayoutWheelPicker,
                        u = e.payout_per_point,
                        m = e.currency,
                        p = (0, s.Y)().isMobile,
                        d = a().createElement(
                            'div',
                            {
                                className: 'trade-container__barriers-tooltip',
                            },
                            a().createElement(i.Localize, {
                                i18n_default_text:
                                    'You will receive a payout at expiry if the spot price never breaches the barrier throughout the contract duration. Otherwise, your contract will be terminated early.',
                            })
                        );
                    return p
                        ? a().createElement(
                              'button',
                              {
                                  role: 'button',
                                  className: 'mobile-widget payout-selector',
                                  onClick: c,
                              },
                              a().createElement(
                                  o.Text,
                                  {
                                      size: 'xs',
                                      color: 'prominent',
                                      align: 'center',
                                      className: 'payout-field',
                                  },
                                  t,
                                  Number(t) < 0
                                      ? a().createElement(h.A, {
                                            className: 'indicator-icon',
                                            stroke: 'var(--text-prominent)',
                                        })
                                      : a().createElement(v.A, {
                                            className: 'indicator-icon',
                                            stroke: 'var(--text-prominent)',
                                        })
                              ),
                              a().createElement(
                                  o.Text,
                                  {
                                      size: 'xs',
                                      className: 'payout-value',
                                      color: 'prominent',
                                      align: 'center',
                                      weight: 'bold',
                                  },
                                  u,
                                  ' ',
                                  m
                              ),
                              a().createElement(
                                  o.Text,
                                  {
                                      size: 'xs',
                                      color: 'less-prominent',
                                      align: 'center',
                                  },
                                  a().createElement(i.Localize, {
                                      i18n_default_text: 'Payout per point',
                                  })
                              )
                          )
                        : a().createElement(b, {
                              currency: m,
                              defaultPayout: u,
                              payoutOptions: r,
                              onPayoutClick: function (e) {
                                  return n(e);
                              },
                              tooltipText: d,
                              selectedBarrier: t,
                          });
                });
        },
        './src/Modules/Trading/Components/Form/TradeParams/barrier.tsx': (e, t, r) => {
            r.d(t, {
                A: () => h,
            });
            var n = r('../../node_modules/classnames/index.js'),
                a = r.n(n),
                o = r('react'),
                i = r.n(o),
                c = r('@deriv/components'),
                l = r('./src/App/Components/Form/fieldset.tsx'),
                s = r('./src/Modules/Trading/Components/Form/Purchase/value-movement.tsx'),
                u = r('mobx-react-lite'),
                m = r('../stores/src/useStore.ts'),
                p = r('./src/Stores/useTraderStores.tsx'),
                d = r('@deriv/translations'),
                _ = r('./src/Modules/Trading/Components/Form/LabeledQuantityInputMobile/index.ts');

            function f(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var r =
                            null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != r) {
                            var n,
                                a,
                                o,
                                i,
                                c = [],
                                l = !0,
                                s = !1;
                            try {
                                if (((o = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                } else for (; !(l = (n = o.call(r)).done) && (c.push(n.value), c.length !== t); l = !0);
                            } catch (e) {
                                (s = !0), (a = e);
                            } finally {
                                try {
                                    if (!l && null != r.return && ((i = r.return()), Object(i) !== i)) return;
                                } finally {
                                    if (s) throw a;
                                }
                            }
                            return c;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return y(e, t);
                            var r = {}.toString.call(e).slice(8, -1);
                            return (
                                'Object' === r && e.constructor && (r = e.constructor.name),
                                'Map' === r || 'Set' === r
                                    ? Array.from(e)
                                    : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                      ? y(e, t)
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

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            const h = (0, u.observer)(function (e) {
                var t,
                    r,
                    n,
                    o,
                    u,
                    y = e.is_minimized,
                    h = e.is_absolute_only,
                    v = (0, m.A)().ui,
                    b = v.current_focus,
                    E = v.setCurrentFocus,
                    g = (0, p.P)(),
                    x = g.barrier_1,
                    w = g.barrier_2,
                    T = g.barrier_count,
                    A = g.barrier_pipsize,
                    S = g.duration_unit,
                    O = g.onChange,
                    N = g.validation_errors,
                    k = g.proposal_info,
                    z = g.trade_types,
                    L = f(i().useState(!1), 2),
                    P = L[0],
                    I = L[1],
                    C = Object.keys(z).find(function (e) {
                        var t;
                        return null == k || null === (t = k[e]) || void 0 === t ? void 0 : t.spot;
                    });
                C && (u = null == k ? void 0 : k[C]);
                var R = (null === (t = u) || void 0 === t ? void 0 : t.spot) || '',
                    j = (null === (r = u) || void 0 === r ? void 0 : r.barrier) || '',
                    F = 1 === T ? (0, d.localize)('Barrier') : (0, d.localize)('Barriers'),
                    M =
                        (null === (n = u) || void 0 === n ? void 0 : n.has_error) ||
                        !(null !== (o = u) && void 0 !== o && o.id);
                if (y)
                    return 2 !== T
                        ? i().createElement(
                              'div',
                              {
                                  className: 'fieldset-minimized fieldset-minimized__barrier1',
                              },
                              x
                          )
                        : i().createElement(
                              i().Fragment,
                              null,
                              i().createElement(
                                  'div',
                                  {
                                      className: 'fieldset-minimized fieldset-minimized__barrier1',
                                  },
                                  x
                              ),
                              i().createElement(
                                  'div',
                                  {
                                      className: 'fieldset-minimized fieldset-minimized__barrier2',
                                  },
                                  w
                              )
                          );
                var D = 2 === T ? 'multiple' : 'single',
                    H = 'd' === S || h,
                    U = function (e) {
                        var t = parseFloat(e);
                        return -1 === Math.sign(t) ? t.toFixed(A).toString() : '+'.concat(t.toFixed(A));
                    },
                    Y = function () {
                        I(!P);
                    };
                return i().createElement(
                    i().Fragment,
                    null,
                    i().createElement(
                        c.DesktopWrapper,
                        null,
                        i().createElement(
                            l.A,
                            {
                                className: 'trade-container__fieldset trade-container__barriers',
                                header: F,
                                is_center: !0,
                            },
                            i().createElement(
                                'div',
                                null,
                                i().createElement(c.InputField, {
                                    id: 'dt_barrier_1_input',
                                    type: 'number',
                                    name: 'barrier_1',
                                    value: x,
                                    className: 'trade-container__barriers-'.concat(D),
                                    classNameInput: a()(
                                        'trade-container__input',
                                        'trade-container__barriers-input',
                                        'trade-container__barriers-'.concat(D, '-input')
                                    ),
                                    current_focus: b,
                                    onChange: O,
                                    error_messages: (null == N ? void 0 : N.barrier_1) || [],
                                    is_float: !0,
                                    is_signed: !0,
                                    setCurrentFocus: E,
                                }),
                                2 === T &&
                                    i().createElement(
                                        i().Fragment,
                                        null,
                                        i().createElement(c.InputField, {
                                            id: 'dt_barrier_2_input',
                                            type: 'number',
                                            name: 'barrier_2',
                                            value: w,
                                            className: 'multiple',
                                            classNameInput: 'trade-container__input',
                                            current_focus: b,
                                            onChange: O,
                                            error_messages: null == N ? void 0 : N.barrier_2,
                                            is_float: !0,
                                            is_signed: !0,
                                            setCurrentFocus: E,
                                        }),
                                        i().createElement(c.Icon, {
                                            icon: 'IcArrowUp',
                                            className: 'trade-container__barriers--up',
                                        }),
                                        i().createElement(c.Icon, {
                                            icon: 'IcArrowDown',
                                            className: 'trade-container__barriers--down',
                                        })
                                    )
                            )
                        )
                    ),
                    i().createElement(
                        c.MobileWrapper,
                        null,
                        i().createElement(
                            c.Modal,
                            {
                                id: 'dt_input_barrier_mobile',
                                className: 'barrier',
                                is_open: P,
                                should_header_stick_body: !0,
                                toggleModal: Y,
                                height: 'auto',
                                width: 'calc(100vw - 32px)',
                                title: (0, d.localize)('Barrier'),
                            },
                            i().createElement(
                                'div',
                                {
                                    className: 'barrier__modal-container',
                                },
                                i().createElement(
                                    c.Text,
                                    {
                                        className: 'barrier__modal-text',
                                        as: 'span',
                                        color: 'less-prominent',
                                        size: 'xs',
                                    },
                                    (0, d.localize)('Current Price')
                                ),
                                R &&
                                    i().createElement(s.A, {
                                        has_error_or_not_loaded: M,
                                        value: R,
                                        show_currency: !1,
                                    })
                            ),
                            i().createElement(_.A, {
                                id: 'dt_barrier_input',
                                input_label: (0, d.localize)('Barrier'),
                                type: 'number',
                                name: 1 === T ? 'barrier_1' : 'barrier_2',
                                wrapper_classname: 'barrier__modal-input',
                                value: 1 === T ? x : w,
                                className: 'barrier__fields-'.concat(D),
                                classNameInput: a()(
                                    'barrier__fields-input',
                                    'barrier__fields-barriers-input',
                                    'barrier__fields-barriers-'.concat(D, '-input')
                                ),
                                current_focus: b,
                                onChange: O,
                                error_messages:
                                    (1 === T ? (null == N ? void 0 : N.barrier_1) : null == N ? void 0 : N.barrier_2) ||
                                    [],
                                error_message_alignment: 'top',
                                is_float: !0,
                                is_signed: !0,
                                setCurrentFocus: E,
                            }),
                            i().createElement(
                                c.Text,
                                {
                                    className: 'barrier__modal-price',
                                    as: 'div',
                                    color: 'less-prominent',
                                    size: 'xs',
                                },
                                (0, d.localize)('Barrier Price:'),
                                ' ',
                                j
                            )
                        ),
                        i().createElement(_.A, {
                            input_label: 2 === T ? (0, d.localize)('Barrier 1') : (0, d.localize)('Barrier'),
                            id: 'dt_barrier_1_input',
                            type: 'number',
                            name: 'barrier_1',
                            value: x,
                            is_incrementable: !H,
                            is_incrementable_on_long_press: !H,
                            is_negative_disabled: H,
                            className: 'barrier__fields-'.concat(D),
                            classNameInput: a()(
                                'barrier__fields-input',
                                'barrier__fields-barriers-input',
                                'barrier__fields-barriers-'.concat(D, '-input')
                            ),
                            format: U,
                            onChange: O,
                            onClick: Y,
                            is_float: !0,
                            is_signed: !0,
                            setCurrentFocus: E,
                            is_read_only: !0,
                        }),
                        2 === T &&
                            i().createElement(_.A, {
                                input_label: (0, d.localize)('Barrier 2'),
                                id: 'dt_barrier_2_input',
                                type: 'number',
                                name: 'barrier_2',
                                value: w,
                                is_incrementable: !H,
                                is_incrementable_on_long_press: !H,
                                is_negative_disabled: H,
                                className: 'barrier__fields-'.concat(D),
                                classNameInput: a()(
                                    'barrier__fields-input',
                                    'barrier__fields-barriers-input',
                                    'barrier__fields-barriers-'.concat(D, '-input')
                                ),
                                format: U,
                                onChange: O,
                                onClick: Y,
                                is_float: !0,
                                is_signed: !0,
                                setCurrentFocus: E,
                                is_read_only: !0,
                            })
                    )
                );
            });
        },
        './src/Modules/Trading/Components/Form/TradeParams/last-digit.tsx': (e, t, r) => {
            r.d(t, {
                A: () => d,
            });
            var n = r('react'),
                a = r.n(n),
                o = r('@deriv/shared'),
                i = r('@deriv/translations'),
                c = r('./src/App/Components/Form/number-selector.tsx'),
                l = r('./src/App/Components/Form/fieldset.tsx'),
                s = r('mobx-react-lite'),
                u = r('./src/Stores/useTraderStores.tsx');

            function m(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return p(e);
                    })(e) ||
                    (function (e) {
                        if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
                            return Array.from(e);
                    })(e) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return p(e, t);
                            var r = {}.toString.call(e).slice(8, -1);
                            return (
                                'Object' === r && e.constructor && (r = e.constructor.name),
                                'Map' === r || 'Set' === r
                                    ? Array.from(e)
                                    : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                      ? p(e, t)
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

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            const d = (0, s.observer)(function (e) {
                var t = e.is_minimized,
                    r = (0, u.P)(),
                    n = r.onChange,
                    s = r.last_digit;
                if (t)
                    return a().createElement(
                        'div',
                        {
                            className: 'fieldset-minimized',
                        },
                        ''.concat((0, i.localize)('Last Digit'), ': ').concat(s)
                    );
                var p = m(Array(5).keys());
                return a().createElement(
                    l.A,
                    {
                        className: 'trade-container__fieldset',
                        header: (0, o.isDesktop)() ? (0, i.localize)('Last Digit Prediction') : null,
                        is_center: !0,
                    },
                    a().createElement(c.A, {
                        arr_arr_numbers: [
                            p,
                            p.map(function (e) {
                                return e + 5;
                            }),
                        ],
                        name: 'last_digit',
                        onChange: n,
                        selected_number: +s,
                    })
                );
            });
        },
        './src/Modules/Trading/Components/Form/TradeParams/min-max-stake-info.tsx': (e, t, r) => {
            r.d(t, {
                A: () => m,
            });
            var n = r('../../node_modules/classnames/index.js'),
                a = r.n(n),
                o = r('react'),
                i = r.n(o),
                c = r('@deriv/components'),
                l = r('@deriv/translations'),
                s = r('mobx-react-lite'),
                u = r('../stores/src/useStore.ts');
            const m = (0, s.observer)(function (e) {
                var t = e.className,
                    r = e.currency,
                    n = e.max_stake,
                    o = e.min_stake,
                    s = (0, u.A)().ui.is_mobile;
                return i().createElement(
                    'section',
                    {
                        className: a()('trade-container__stake-field', t),
                    },
                    !isNaN(Number(o)) &&
                        !isNaN(Number(n)) &&
                        ['Min', 'Max'].map(function (e) {
                            return i().createElement(
                                c.Text,
                                {
                                    key: e,
                                    as: 'p',
                                    line_height: 's',
                                    size: s ? 'xxs' : 'xxxs',
                                    className: 'trade-container__stake-field--'.concat(e.toLowerCase()),
                                },
                                i().createElement(l.Localize, {
                                    i18n_default_text: '{{text}}. stake<0/>',
                                    values: {
                                        text: e,
                                    },
                                    components: [
                                        i().createElement(c.Money, {
                                            key: 0,
                                            amount: 'Min' === e ? o : n,
                                            currency: r,
                                            show_currency: !0,
                                        }),
                                    ],
                                })
                            );
                        })
                );
            });
        },
        './src/Modules/Trading/Components/Form/TradeParams/strike.tsx': (e, t, r) => {
            r.d(t, {
                A: () => O,
            });
            var n = r('react'),
                a = r.n(n),
                o = r('../../node_modules/classnames/index.js'),
                i = r.n(o),
                c = r('@deriv/components'),
                l = r('../../node_modules/react-transition-group/esm/CSSTransition.js'),
                s = r('./src/App/Components/Form/fieldset.tsx'),
                u = r('mobx-react-lite'),
                m = r('../stores/src/useStore.ts');

            function p(e) {
                return (
                    (p =
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
                    p(e)
                );
            }

            function d(e, t, r) {
                return (
                    (t = (function (e) {
                        var t = (function (e) {
                            if ('object' != p(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var r = t.call(e, 'string');
                                if ('object' != p(r)) return r;
                                throw new TypeError('@@toPrimitive must return a primitive value.');
                            }
                            return String(e);
                        })(e);
                        return 'symbol' == p(t) ? t : t + '';
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
            var _ = (0, u.observer)(function (e) {
                var t = e.barriers_list,
                    r = e.className,
                    n = e.onClick,
                    o = e.onHover,
                    l = e.selected_item,
                    s = e.subheader,
                    u = (0, m.A)().ui.is_mobile;
                return a().createElement(
                    a().Fragment,
                    null,
                    s &&
                        a().createElement(
                            c.Text,
                            {
                                size: u ? 's' : 'xxs',
                                color: 'disabled',
                                line_height: 'l',
                                as: 'p',
                                className: ''.concat(r, '__text'),
                            },
                            s
                        ),
                    a().createElement(
                        c.ThemedScrollbars,
                        {
                            autohide: !1,
                        },
                        a().createElement(
                            'ul',
                            {
                                className: ''.concat(r, '__list'),
                            },
                            t.map(function (e) {
                                return a().createElement(
                                    c.Text,
                                    {
                                        color: 'prominent',
                                        line_height: u ? 'xl' : 'l',
                                        size: u ? 'xs' : 'xxs',
                                        as: 'li',
                                        key: e,
                                        id: e,
                                        'data-testid': e,
                                        className: i()(
                                            ''.concat(r, '__item'),
                                            d({}, ''.concat(r, '__item--selected'), l === e)
                                        ),
                                        onClick: function () {
                                            return n(e);
                                        },
                                        onMouseEnter: function () {
                                            return (function (e) {
                                                l !== e && 'function' == typeof o && o(e);
                                            })(e);
                                        },
                                        onMouseLeave: function () {
                                            return 'function' == typeof o && o('');
                                        },
                                    },
                                    e
                                );
                            })
                        )
                    )
                );
            });
            const f = a().memo(_);
            var y = ['className', 'header', 'onClickCross', 'show_table'];

            function h() {
                return (
                    (h = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t];
                                  for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                              }
                              return e;
                          }),
                    h.apply(null, arguments)
                );
            }
            const v = a().memo(function (e) {
                var t = e.className,
                    r = e.header,
                    n = e.onClickCross,
                    o = e.show_table,
                    u = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (-1 !== t.indexOf(n)) continue;
                                        r[n] = e[n];
                                    }
                                return r;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < o.length; n++)
                                (r = o[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                        }
                        return a;
                    })(e, y);
                return a().createElement(
                    a().Fragment,
                    null,
                    a().createElement(
                        c.DesktopWrapper,
                        null,
                        a().createElement(
                            l.A,
                            {
                                appear: !0,
                                in: o,
                                timeout: 250,
                                classNames: {
                                    appear: ''.concat(t, '--enter'),
                                    enter: ''.concat(t, '--enter'),
                                    enterDone: ''.concat(t, '--enter-done'),
                                    exit: ''.concat(t, '--exit'),
                                },
                                unmountOnExit: !0,
                            },
                            a().createElement(
                                s.A,
                                {
                                    className: i()('trade-container__fieldset', t),
                                },
                                a().createElement(
                                    'div',
                                    {
                                        className: ''.concat(t, '__header'),
                                    },
                                    a().createElement(
                                        c.Text,
                                        {
                                            color: 'prominent',
                                            weight: 'bold',
                                            size: 'xs',
                                        },
                                        r
                                    ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: ''.concat(t, '__icon-close'),
                                            onClick: n,
                                        },
                                        a().createElement(c.Icon, {
                                            icon: 'IcCross',
                                            data_testid: 'dt_'.concat(t, '__icon_close'),
                                        })
                                    )
                                ),
                                a().createElement(
                                    f,
                                    h(
                                        {
                                            className: t,
                                        },
                                        u
                                    )
                                )
                            )
                        )
                    ),
                    a().createElement(
                        c.MobileWrapper,
                        null,
                        a().createElement(
                            f,
                            h(
                                {
                                    className: t,
                                },
                                u
                            )
                        )
                    )
                );
            });
            var b = r('@deriv/translations'),
                E = r('@deriv/shared');
            const g = function (e) {
                var t = e.contract_type,
                    r = e.is_open,
                    n = e.toggleModal,
                    o = e.strike,
                    l = e.onChange,
                    s = e.name,
                    u = e.strike_price_list;
                return a().createElement(
                    c.Modal,
                    {
                        className: 'trade-params dc-modal-header--title-bar',
                        is_open: r,
                        should_header_stick_body: !1,
                        is_title_centered: !0,
                        toggleModal: n,
                        height: 'auto',
                        width: 'calc(100vw - 32px)',
                        title: (0, b.localize)('Strike'),
                    },
                    a().createElement(
                        c.Div100vhContainer,
                        {
                            className: 'mobile-widget-dialog__wrapper',
                            max_autoheight_offset: '48px',
                        },
                        a().createElement(
                            'div',
                            {
                                className: 'trade-params__vanilla-ic-info-wrapper',
                            },
                            a().createElement(c.Popover, {
                                alignment: 'bottom',
                                icon: 'info',
                                id: 'dt_vanilla-stake__tooltip',
                                zIndex: '9999',
                                is_bubble_hover_enabled: !0,
                                message: a().createElement(b.Localize, {
                                    i18n_default_text:
                                        'If you buy a "<0>{{trade_type}}</0>" option, you receive a payout at expiry if the final price is {{payout_status}} the strike price. Otherwise, your “<0>{{trade_type}}</0>” option will expire worthless.',
                                    components: [
                                        a().createElement('strong', {
                                            key: 0,
                                        }),
                                    ],
                                    values: {
                                        trade_type:
                                            t === E.TRADE_TYPES.VANILLA.CALL
                                                ? (0, b.localize)('Call')
                                                : (0, b.localize)('Put'),
                                        payout_status:
                                            t === E.TRADE_TYPES.VANILLA.CALL
                                                ? (0, b.localize)('above')
                                                : (0, b.localize)('below'),
                                    },
                                }),
                                classNameBubble: 'trade-params--modal-wrapper__content',
                            })
                        ),
                        a().createElement(
                            'div',
                            {
                                className: i()('trade-params__amount-keypad', 'trade-params--mobile-strike'),
                            },
                            a().createElement(
                                c.RadioGroup,
                                {
                                    name: s,
                                    className: 'trade-params__amount--mobile',
                                    onToggle: l,
                                    selected: o,
                                },
                                u.map(function (e) {
                                    return a().createElement(c.RadioGroup.Item, {
                                        key: e.value,
                                        value: String(e.value),
                                        label: e.value,
                                    });
                                })
                            )
                        )
                    )
                );
            };
            var x = r('./src/Stores/useTraderStores.tsx'),
                w = r('../../node_modules/@deriv-com/ui/dist/hooks/useDevice.js');

            function T(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var r =
                            null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != r) {
                            var n,
                                a,
                                o,
                                i,
                                c = [],
                                l = !0,
                                s = !1;
                            try {
                                if (((o = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                } else for (; !(l = (n = o.call(r)).done) && (c.push(n.value), c.length !== t); l = !0);
                            } catch (e) {
                                (s = !0), (a = e);
                            } finally {
                                try {
                                    if (!l && null != r.return && ((i = r.return()), Object(i) !== i)) return;
                                } finally {
                                    if (s) throw a;
                                }
                            }
                            return c;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return A(e, t);
                            var r = {}.toString.call(e).slice(8, -1);
                            return (
                                'Object' === r && e.constructor && (r = e.constructor.name),
                                'Map' === r || 'Set' === r
                                    ? Array.from(e)
                                    : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                      ? A(e, t)
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

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var S = (0, u.observer)(function () {
                var e = (0, m.A)(),
                    t = e.ui,
                    r = e.common,
                    n = (0, x.P)(),
                    o = n.barrier_1,
                    l = n.contract_type,
                    u = n.barrier_choices,
                    p = n.duration_unit,
                    d = n.onChange,
                    _ = n.validation_errors,
                    f = n.expiry_type,
                    y = n.expiry_date,
                    h = t.current_focus,
                    A = t.setCurrentFocus,
                    S = t.advanced_duration_unit,
                    O = r.server_time,
                    N = T(a().useState(!1), 2),
                    k = N[0],
                    z = N[1],
                    L = T(a().useState(!1), 2),
                    P = L[0],
                    I = L[1],
                    C = T(a().useState(o), 2),
                    R = C[0],
                    j = C[1],
                    F = (0, w.Y)().isMobile;
                a().useEffect(
                    function () {
                        j(o);
                    },
                    [o]
                );
                var M = function (e) {
                        (0, E.clickAndKeyEventHandler)(function () {
                            return z(!k);
                        }, e);
                    },
                    D = !!y && (0, E.toMoment)(y).isSame((0, E.toMoment)(O), 'day'),
                    H = 'endtime' === f ? D : 'd' !== S,
                    U = u.map(function (e) {
                        return {
                            text: e,
                            value: e,
                        };
                    }),
                    Y = 'd' !== p;
                return F
                    ? a().createElement(
                          'div',
                          {
                              className: 'mobile-widget__wrapper',
                          },
                          a().createElement(
                              'div',
                              {
                                  className: 'strike-widget',
                                  onClick: M,
                                  onKeyDown: M,
                              },
                              Y &&
                                  a().createElement(
                                      'div',
                                      {
                                          className: 'mobile-widget__spot',
                                      },
                                      a().createElement(
                                          c.Text,
                                          {
                                              size: 'xs',
                                          },
                                          a().createElement(b.Localize, {
                                              i18n_default_text: 'Spot',
                                          })
                                      )
                                  ),
                              a().createElement(
                                  'div',
                                  {
                                      className: 'mobile-widget__amount',
                                  },
                                  o
                              ),
                              a().createElement(
                                  'div',
                                  {
                                      className: 'mobile-widget__type',
                                  },
                                  a().createElement(b.Localize, {
                                      i18n_default_text: 'Strike price',
                                  })
                              )
                          ),
                          a().createElement(g, {
                              contract_type: l,
                              is_open: k,
                              toggleModal: M,
                              strike: o,
                              onChange: d,
                              name: 'barrier_1',
                              strike_price_list: U,
                          })
                      )
                    : a().createElement(
                          a().Fragment,
                          null,
                          a().createElement(
                              s.A,
                              {
                                  className: 'trade-container__fieldset trade-container__barriers',
                                  header: a().createElement(b.Localize, {
                                      i18n_default_text: 'Strike price',
                                  }),
                                  header_tooltip: a().createElement(b.Localize, {
                                      i18n_default_text:
                                          'If you buy a "<0>{{trade_type}}</0>" option, you receive a payout at expiry if the final price is {{payout_status}} the strike price. Otherwise, your “<0>{{trade_type}}</0>” option will expire worthless.',
                                      components: [
                                          a().createElement('strong', {
                                              key: 0,
                                          }),
                                      ],
                                      values: {
                                          trade_type:
                                              l === E.TRADE_TYPES.VANILLA.CALL
                                                  ? (0, b.localize)('Call')
                                                  : (0, b.localize)('Put'),
                                          payout_status:
                                              l === E.TRADE_TYPES.VANILLA.CALL
                                                  ? (0, b.localize)('above')
                                                  : (0, b.localize)('below'),
                                      },
                                  }),
                              },
                              H
                                  ? a().createElement(
                                        'div',
                                        {
                                            className: 'trade-container__strike-field',
                                        },
                                        a().createElement(
                                            c.Text,
                                            {
                                                size: 's',
                                                className: 'strike-field--text',
                                            },
                                            a().createElement(b.Localize, {
                                                i18n_default_text: 'Spot',
                                            })
                                        ),
                                        a().createElement(c.Dropdown, {
                                            classNameDisplay: 'dc-dropdown__display--duration',
                                            disabled: !1,
                                            id: 'strike',
                                            is_alignment_left: !0,
                                            is_nativepicker: !1,
                                            list: U,
                                            name: 'barrier_1',
                                            no_border: !0,
                                            onChange: d,
                                            value: o,
                                        })
                                    )
                                  : a().createElement(c.InputField, {
                                        type: 'number',
                                        name: 'barrier_1',
                                        data_testid: 'dt_strike_input',
                                        value: R,
                                        className: 'trade-container__barriers-single',
                                        classNameInput: i()(
                                            'trade-container__input',
                                            'trade-container__barriers-input',
                                            'trade-container__barriers-single-input'
                                        ),
                                        current_focus: h,
                                        error_messages: (null == _ ? void 0 : _.barrier_1) || [],
                                        is_float: !0,
                                        is_signed: !0,
                                        is_read_only: !0,
                                        setCurrentFocus: A,
                                        onClick: function () {
                                            return I(!0);
                                        },
                                    })
                          ),
                          P &&
                              a().createElement(v, {
                                  className: 'trade-container__barriers-table',
                                  header: a().createElement(b.Localize, {
                                      i18n_default_text: 'Strike Prices',
                                  }),
                                  barriers_list: u,
                                  selected_item: R,
                                  show_table: P,
                                  onClick: function (e) {
                                      j(e),
                                          I(!1),
                                          d({
                                              target: {
                                                  name: 'barrier_1',
                                                  value: e,
                                              },
                                          });
                                  },
                                  onClickCross: function () {
                                      return I(!1);
                                  },
                              })
                      );
            });
            const O = S;
        },
        './src/Modules/Trading/Components/Form/TradeParams/trade-type-tabs.tsx': (e, t, r) => {
            r.d(t, {
                A: () => p,
            });
            var n = r('../../node_modules/classnames/index.js'),
                a = r.n(n),
                o = r('react'),
                i = r.n(o),
                c = r('@deriv/components'),
                l = r('@deriv/shared'),
                s = r('@deriv/translations'),
                u = r('mobx-react-lite'),
                m = r('./src/Stores/useTraderStores.tsx');
            const p = (0, u.observer)(function (e) {
                var t,
                    r,
                    n = e.className,
                    o = (0, m.P)(),
                    u = o.onChange,
                    p = o.contract_type,
                    d = (0, l.isTurbosContract)(p),
                    _ = (0, l.isVanillaContract)(p),
                    f = [
                        {
                            text: (0, s.localize)('Up'),
                            value: l.TRADE_TYPES.TURBOS.LONG,
                            is_displayed: d,
                        },
                        {
                            text: (0, s.localize)('Down'),
                            value: l.TRADE_TYPES.TURBOS.SHORT,
                            is_displayed: d,
                        },
                        {
                            text: (0, s.localize)('Call'),
                            value: l.TRADE_TYPES.VANILLA.CALL,
                            is_displayed: _,
                        },
                        {
                            text: (0, s.localize)('Put'),
                            value: l.TRADE_TYPES.VANILLA.PUT,
                            is_displayed: _,
                        },
                    ];
                return d || _
                    ? i().createElement(
                          'div',
                          {
                              className: a()('trade-container__trade', 'trade-container__trade-type-tabs', n),
                          },
                          i().createElement(c.ButtonToggle, {
                              id: 'dt_advanced_duration_toggle',
                              buttons_arr: f.filter(function (e) {
                                  return e.is_displayed;
                              }),
                              name: 'contract_type',
                              className: 'trade-container__trade-type-tabs--button',
                              is_animated: !0,
                              onChange: u,
                              value:
                                  null !==
                                      (t =
                                          null ===
                                              (r = f.find(function (e) {
                                                  return e.value === p;
                                              })) || void 0 === r
                                              ? void 0
                                              : r.value) && void 0 !== t
                                      ? t
                                      : '',
                          })
                      )
                    : null;
            });
        },
        './src/Modules/Trading/Containers/contract-type.tsx': (e, t, r) => {
            r.d(t, {
                A: () => _t,
            });
            var n = r('react'),
                a = r.n(n),
                o = r('@deriv/components'),
                i = r('@deriv/shared'),
                c = r('./src/Modules/Trading/Helpers/digits.ts'),
                l = r('@deriv/translations'),
                s = r('./src/Modules/Trading/Containers/toast-popup.tsx'),
                u = r('mobx-react-lite'),
                m = r('../stores/src/useStore.ts'),
                p = r('@deriv-com/analytics'),
                d = r('./src/Stores/useTraderStores.tsx'),
                _ = r('./src/Modules/Trading/Helpers/contract-type.tsx'),
                f = r('../../node_modules/@deriv-com/ui/dist/hooks/useDevice.js'),
                y = r('./src/AppV2/Utils/trade-types-utils.tsx'),
                h = r('./src/AppV2/Utils/contract-description-utils.tsx');
            const v = function (e) {
                    var t = e.term,
                        r = e.id,
                        n = e.children,
                        i = e.contract_type,
                        c = a().createElement(
                            'div',
                            {
                                className: 'definition__popover-content',
                            },
                            a().createElement(
                                'div',
                                {
                                    className: 'definition__popover-title',
                                },
                                t
                            ),
                            a().createElement(
                                'div',
                                {
                                    className: 'definition__popover-text',
                                },
                                (0, h.OG)({
                                    term: t,
                                    contract_type: i,
                                })
                            )
                        );
                    return a().createElement(
                        o.Popover,
                        {
                            alignment: 'bottom',
                            className: 'contract-type-info__content-definition',
                            classNameBubble: 'custom-popover-bubble',
                            is_bubble_hover_enabled: !0,
                            message: c,
                            zIndex: '9999',
                            id: r,
                            is_inline_block: !0,
                            background_color: 'var(--icon-black-plus)',
                            arrow_color: 'var(--icon-black-plus)',
                        },
                        n ||
                            a().createElement('span', {
                                className: 'contract-type-info__content-definition',
                            })
                    );
                },
                b = function () {
                    var e = (0, h.H5)(),
                        t = e.INDEX,
                        r = e.STAKE,
                        n = e.GROWTH_RATE,
                        o = e.PAYOUT,
                        i = e.BARRIER_RANGE,
                        c = e.PREVIOUS_SPOT_PRICE,
                        s = e.TAKE_PROFIT,
                        u = e.SLIPPAGE_RISK,
                        m = [
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Accumulators allow you to predict how much an <0>index</0> can move and potentially grow your <1>stake</1> exponentially at a fixed <2>growth rate</2>.',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: t,
                                                id: 'index-accumulator',
                                                contract_type: y.OA.ACCUMULATORS,
                                                key: 0,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                        a().createElement(
                                            v,
                                            {
                                                term: r,
                                                id: 'stake-accumulator',
                                                contract_type: y.OA.ACCUMULATORS,
                                                key: 1,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                        a().createElement(
                                            v,
                                            {
                                                term: n,
                                                id: 'growth-rate-accumulator',
                                                contract_type: y.OA.ACCUMULATORS,
                                                key: 2,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'video',
                                text: y.OA.ACCUMULATORS,
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Your <0>payout</0> is the sum of your initial stake and profit. It keeps growing as long as the spot price stays within a specified <1>barrier range</1> from the <2>previous spot price</2> at each interval.',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: o,
                                                id: 'payout-accumulator',
                                                contract_type: y.OA.ACCUMULATORS,
                                                key: 0,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                        a().createElement(
                                            v,
                                            {
                                                term: i,
                                                id: 'barrier-range-accumulator',
                                                contract_type: y.OA.ACCUMULATORS,
                                                key: 1,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                        a().createElement(
                                            v,
                                            {
                                                term: c,
                                                id: 'previous-spot-price-accumulator',
                                                contract_type: y.OA.ACCUMULATORS,
                                                key: 2,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'If the spot price goes outside the range, you lose your stake and the trade is terminated.',
                                    components: [],
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        '<0>Take profit</0>: Set a target payout to automatically close your contract and secure your gains (not available for ongoing trades).',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: s,
                                                id: 'take-profit-accumulator',
                                                contract_type: y.OA.ACCUMULATORS,
                                                key: 0,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'You can close your trade anytime. However, be aware of <0>slippage risk</0>.',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: u,
                                                id: 'slippage-risk-accumulator',
                                                contract_type: y.OA.ACCUMULATORS,
                                                key: 0,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                        ];
                    return a().createElement(a().Fragment, null, (0, h.ts)(m, !0));
                },
                E = function () {
                    var e = [
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'Asian options settle by comparing the last tick with the average spot over the period.',
                            key: '1',
                        }),
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'If you select "Asian Rise", you will win the payout if the last tick is higher than the average of the ticks.',
                            key: '2',
                        }),
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'If you select "Asian Fall", you will win the payout if the last tick is lower than the average of the ticks.',
                            key: '3',
                        }),
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                "If the last tick is equal to the average of the ticks, you don't win the payout.",
                            key: '4',
                        }),
                    ];
                    return a().createElement(
                        a().Fragment,
                        null,
                        e.map(function (e) {
                            return a().createElement(
                                o.Text,
                                {
                                    as: 'p',
                                    key: e.props.i18n_default_text,
                                },
                                e
                            );
                        })
                    );
                },
                g = function () {
                    var e = [
                        {
                            type: 'heading',
                            text: a().createElement(l.Localize, {
                                i18n_default_text: 'Spread Up',
                            }),
                        },
                        {
                            type: 'paragraph',
                            text: a().createElement(l.Localize, {
                                i18n_default_text:
                                    'Win maximum payout if the exit spot is higher than or equal to the upper barrier.',
                            }),
                        },
                        {
                            type: 'paragraph',
                            text: a().createElement(l.Localize, {
                                i18n_default_text:
                                    'Win up to maximum payout if exit spot is between lower and upper barrier, in proportion to the difference between exit spot and lower barrier.',
                            }),
                        },
                        {
                            type: 'paragraph',
                            text: a().createElement(l.Localize, {
                                i18n_default_text: 'No payout if exit spot is below or equal to the lower barrier.',
                            }),
                        },
                        {
                            type: 'heading',
                            text: a().createElement(l.Localize, {
                                i18n_default_text: 'Spread Down',
                            }),
                        },
                        {
                            type: 'paragraph',
                            text: a().createElement(l.Localize, {
                                i18n_default_text:
                                    'Win maximum payout if the exit spot is lower than or equal to the lower barrier.',
                            }),
                        },
                        {
                            type: 'paragraph',
                            text: a().createElement(l.Localize, {
                                i18n_default_text:
                                    'Win up to maximum payout if exit spot is between lower and upper barrier, in proportion to the difference between upper barrier and exit spot.',
                            }),
                        },
                        {
                            type: 'paragraph',
                            text: a().createElement(l.Localize, {
                                i18n_default_text: 'No payout if exit spot is above or equal to the upper barrier.',
                            }),
                        },
                    ];
                    return a().createElement(
                        a().Fragment,
                        null,
                        e.map(function (e) {
                            var t = e.type,
                                r = e.text;
                            return 'heading' === t
                                ? a().createElement(
                                      o.Text,
                                      {
                                          as: 'h2',
                                          key: r.props.i18n_default_text,
                                          weight: 'bold',
                                          size: 'xs',
                                      },
                                      r
                                  )
                                : a().createElement(
                                      o.Text,
                                      {
                                          as: 'p',
                                          key: r.props.i18n_default_text,
                                      },
                                      r
                                  );
                        })
                    );
                },
                x = function () {
                    var e = [
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'If you select "Ends Between", you win the payout if the exit spot is strictly higher than the Low barrier AND strictly lower than the High barrier.',
                            key: '1',
                        }),
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'If you select "Ends Outside", you win the payout if the exit spot is EITHER strictly higher than the High barrier, OR strictly lower than the Low barrier.',
                            key: '2',
                        }),
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                "If the exit spot is equal to either the Low barrier or the High barrier, you don't win the payout.",
                            key: '3',
                        }),
                    ];
                    return a().createElement(
                        a().Fragment,
                        null,
                        e.map(function (e) {
                            return a().createElement(
                                o.Text,
                                {
                                    as: 'p',
                                    key: e.props.i18n_default_text,
                                },
                                e
                            );
                        })
                    );
                },
                w = function () {
                    var e = (0, h.H5)(),
                        t = e.EXPIRY,
                        r = e.EXIT_SPOT,
                        n = e.PAYOUT,
                        o = [
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Even/Odd lets you predict if the last digit of the last tick’s price will be an even or odd number at contract <0>expiry</0> (<1>exit spot</1>).',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: t,
                                                key: 0,
                                                id: 'even-odd-expiry',
                                                contract_type: y.OA.EVEN_ODD,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                        a().createElement(
                                            v,
                                            {
                                                term: r,
                                                key: 1,
                                                id: 'even-odd-exit-spot',
                                                contract_type: y.OA.EVEN_ODD,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Even',
                                    className: 'contract-type-info__heading',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Earn a <0>payout</0> if the last digit of the exit spot is even (0, 2, 4, 6, or 8).',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: n,
                                                key: 0,
                                                id: 'even-payout',
                                                contract_type: y.OA.EVEN_ODD,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'video',
                                text: 'even',
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Odd',
                                    className: 'contract-type-info__heading',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Earn a payout if the last digit of the exit spot is odd (1, 3, 5, 7, or 9).',
                                }),
                            },
                            {
                                type: 'video',
                                text: 'odd',
                            },
                        ];
                    return a().createElement(a().Fragment, null, (0, h.ts)(o, !0));
                },
                T = function () {
                    var e = (0, h.H5)(),
                        t = e.EXPIRY,
                        r = e.EXIT_SPOT,
                        n = e.PAYOUT,
                        o = [
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Higher/Lower lets you predict if the market price will end higher or lower than a set barrier at contract <0>expiry</0> (<1>exit spot</1>).',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: t,
                                                key: 0,
                                                id: 'higher-lower-expiry',
                                                contract_type: y.OA.HIGHER_LOWER,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                        a().createElement(
                                            v,
                                            {
                                                term: r,
                                                key: 1,
                                                id: 'higher-lower-exit-spot',
                                                contract_type: y.OA.HIGHER_LOWER,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Higher',
                                    className: 'contract-type-info__heading',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Earn a <0>payout</0> if the exit spot is strictly higher than the barrier.',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: n,
                                                key: 0,
                                                id: 'higher-lower-payout',
                                                contract_type: y.OA.HIGHER_LOWER,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'video',
                                text: 'higher',
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Lower',
                                    className: 'contract-type-info__heading',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Earn a payout if the exit spot is strictly lower than the barrier.',
                                }),
                            },
                            {
                                type: 'video',
                                text: 'lower',
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Additional Information',
                                    className: 'contract-type-info__heading',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        "If the exit spot is equal to the barrier, you don't earn the payout.",
                                }),
                            },
                        ];
                    return a().createElement(a().Fragment, null, (0, h.ts)(o, !0));
                },
                A = function () {
                    var e = [
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'By purchasing the "High-to-Low" contract, you\\\'ll win the multiplier times the difference between the high and low over the duration of the contract.',
                            key: '1',
                        }),
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'The high is the highest point ever reached by the market during the contract period.',
                            key: '2',
                        }),
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'The low is the lowest point ever reached by the market during the contract period.',
                            key: '3',
                        }),
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'The close is the latest tick at or before the end time. If you selected a specific end time, the end time is the selected time.',
                            key: '4',
                        }),
                    ];
                    return a().createElement(
                        a().Fragment,
                        null,
                        e.map(function (e) {
                            return a().createElement(
                                o.Text,
                                {
                                    as: 'p',
                                    key: e.props.i18n_default_text,
                                },
                                e
                            );
                        })
                    );
                },
                S = function () {
                    var e = [
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'By purchasing the "High-to-Close" contract, you\\\'ll win the multiplier times the difference between the high and close over the duration of the contract.',
                            key: '1',
                        }),
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'The high is the highest point ever reached by the market during the contract period.',
                            key: '2',
                        }),
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'The low is the lowest point ever reached by the market during the contract period.',
                            key: '3',
                        }),
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'The close is the latest tick at or before the end time. If you selected a specific end time, the end time is the selected time.',
                            key: '4',
                        }),
                    ];
                    return a().createElement(
                        a().Fragment,
                        null,
                        e.map(function (e) {
                            return a().createElement(
                                o.Text,
                                {
                                    as: 'p',
                                    key: e.props.i18n_default_text,
                                },
                                e
                            );
                        })
                    );
                },
                O = function () {
                    var e = [
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'By purchasing the "Close-to-Low" contract, you\\\'ll win the multiplier times the difference between the close and low over the duration of the contract.',
                            key: '1',
                        }),
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'The high is the highest point ever reached by the market during the contract period.',
                            key: '2',
                        }),
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'The low is the lowest point ever reached by the market during the contract period.',
                            key: '3',
                        }),
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'The close is the latest tick at or before the end time. If you selected a specific end time, the end time is the selected time.',
                            key: '4',
                        }),
                    ];
                    return a().createElement(
                        a().Fragment,
                        null,
                        e.map(function (e) {
                            return a().createElement(
                                o.Text,
                                {
                                    as: 'p',
                                    key: e.props.i18n_default_text,
                                },
                                e
                            );
                        })
                    );
                },
                N = function () {
                    var e = (0, h.H5)(),
                        t = e.EXPIRY,
                        r = e.EXIT_SPOT,
                        n = e.PAYOUT,
                        o = [
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Matches/Differs lets you predict whether the last digit of the last tick’s price will match your chosen number at contract <0>expiry</0> (<1>exit spot</1>).',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: t,
                                                key: 0,
                                                id: 'matches-differs-expiry',
                                                contract_type: y.OA.MATCHES_DIFFERS,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                        a().createElement(
                                            v,
                                            {
                                                term: r,
                                                key: 1,
                                                id: 'matches-differs-exit-spot',
                                                contract_type: y.OA.MATCHES_DIFFERS,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Matches',
                                    className: 'contract-type-info__heading',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Earn a <0>payout</0> if the last digit of the exit spot matches your prediction.',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: n,
                                                key: 0,
                                                id: 'matches-differs-payout',
                                                contract_type: y.OA.MATCHES_DIFFERS,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'video',
                                text: 'matches',
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Differs',
                                    className: 'contract-type-info__heading',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Earn a payout if the last digit of the exit spot differs from your prediction.',
                                }),
                            },
                            {
                                type: 'video',
                                text: 'differs',
                            },
                        ];
                    return a().createElement(a().Fragment, null, (0, h.ts)(o, !0));
                },
                k = function () {
                    var e = (0, h.H5)(),
                        t = e.STOP_OUT,
                        r = e.TAKE_PROFIT,
                        n = e.STOP_LOSS,
                        o = e.DEAL_CANCELLATION,
                        i = e.SLIPPAGE_RISK,
                        c = [
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Multipliers let you amplify your potential profit or loss by applying a multiplier to the asset price movement.',
                                }),
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Up',
                                    className: 'contract-type-info__heading',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Earn a profit if the asset price rises above the entry price at the time you close the trade.',
                                }),
                            },
                            {
                                type: 'video',
                                text: 'multipliers_up',
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Down',
                                    className: 'contract-type-info__heading',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Earn a profit if the asset price falls below the entry price at the time you close the trade.',
                                }),
                            },
                            {
                                type: 'video',
                                text: 'multipliers_down',
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Additional Information',
                                    className: 'contract-type-info__heading',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'A fixed commission is charged when you open a Multipliers trade. The amount varies by asset class and market volatility.',
                                }),
                            },
                            {
                                type: 'badge',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Profit/loss = (% of price difference × multiplier × stake) – commission',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Your trade closes automatically if the <0>stop out</0> level is hit.',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: t,
                                                key: 0,
                                                id: 'multipliers-stop-out',
                                                contract_type: y.OA.MULTIPLIERS,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'You can manage risk with features like <0>take profit</0>, <1>stop loss</1>, and <2>deal cancellation</2> (when available).',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: r,
                                                key: 0,
                                                id: 'multipliers-take-profit',
                                                contract_type: y.OA.MULTIPLIERS,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                        a().createElement(
                                            v,
                                            {
                                                term: n,
                                                key: 1,
                                                id: 'multipliers-stop-loss',
                                                contract_type: y.OA.MULTIPLIERS,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                        a().createElement(
                                            v,
                                            {
                                                term: o,
                                                key: 2,
                                                id: 'multipliers-deal-cancellation',
                                                contract_type: y.OA.MULTIPLIERS,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'You can close your trade anytime. However, be aware that <0>slippage risk</0> may affect your final return.',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: i,
                                                key: 0,
                                                id: 'multipliers-slippage-risk',
                                                contract_type: y.OA.MULTIPLIERS,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                        ];
                    return a().createElement(a().Fragment, null, (0, h.ts)(c, !0));
                },
                z = function () {
                    var e = (0, h.H5)(),
                        t = e.EXIT_SPOT,
                        r = e.EXPIRY,
                        n = e.PAYOUT,
                        o = [
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Over/Under lets you predict if the last digit of the <0>exit spot</0> at contract <1>expiry</1> will be over or under your chosen number.',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: t,
                                                key: 0,
                                                id: 'over-under-exit-spot',
                                                contract_type: y.OA.OVER_UNDER,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                        a().createElement(
                                            v,
                                            {
                                                term: r,
                                                key: 1,
                                                id: 'over-under-expiry',
                                                contract_type: y.OA.OVER_UNDER,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Over',
                                    className: 'contract-type-info__heading',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Earn a <0>payout</0> if the last digit of the exit spot is greater than your chosen number.',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: n,
                                                key: 0,
                                                id: 'over-payout',
                                                contract_type: y.OA.OVER_UNDER,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'video',
                                text: 'over',
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Under',
                                    className: 'contract-type-info__heading',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Earn a payout if the last digit of the exit spot is less than your chosen number.',
                                }),
                            },
                            {
                                type: 'video',
                                text: 'under',
                            },
                        ];
                    return a().createElement(a().Fragment, null, (0, h.ts)(o, !0));
                },
                L = function () {
                    var e = (0, h.H5)(),
                        t = e.ENTRY_SPOT,
                        r = e.EXPIRY,
                        n = e.PAYOUT,
                        o = [
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Rise/Fall lets you predict if the market price will end higher or lower than the <0>entry spot</0> at contract <1>expiry</1>.',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: t,
                                                key: 0,
                                                id: 'entry-spot-definition',
                                                contract_type: y.OA.RISE_FALL,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                        a().createElement(
                                            v,
                                            {
                                                term: r,
                                                key: 1,
                                                id: 'expiry-definition',
                                                contract_type: y.OA.RISE_FALL,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Rise',
                                    className: 'contract-type-info__heading',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Earn a <0>payout</0> if the exit spot is strictly higher than the entry spot.',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: n,
                                                key: 0,
                                                id: 'payout-definition',
                                                contract_type: y.OA.RISE_FALL,
                                            },
                                            a().createElement('span', {
                                                id: 'payout-higher-lower',
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'video',
                                text: 'rise',
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Fall',
                                    className: 'contract-type-info__heading',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Earn a payout if the exit spot is strictly lower than the entry spot.',
                                    components: [],
                                }),
                            },
                            {
                                type: 'video',
                                text: 'fall',
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Allow equals',
                                    className: 'contract-type-info__heading',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'For <0>Rise</0>, earn if the exit spot is higher than or equal to the entry spot. For <1>Fall</1>, earn if the exit spot is lower than or equal to the entry spot.',
                                    components: [
                                        a().createElement('span', {
                                            id: 'rise-fall-rise',
                                            className: 'contract-type-info__content-bold',
                                            key: 0,
                                        }),
                                        a().createElement('span', {
                                            id: 'rise-fall-fall',
                                            className: 'contract-type-info__content-bold',
                                            key: 1,
                                        }),
                                    ],
                                }),
                            },
                        ];
                    return a().createElement(a().Fragment, null, (0, h.ts)(o, !0));
                },
                P = function () {
                    var e = [
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'If you select "Only Ups", you win the payout if consecutive ticks rise successively after the entry spot. No payout if any tick falls or is equal to any of the previous ticks.',
                            key: '1',
                        }),
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'If you select "Only Downs", you win the payout if consecutive ticks fall successively after the entry spot. No payout if any tick rises or is equal to any of the previous ticks.',
                            key: '2',
                        }),
                    ];
                    return a().createElement(
                        a().Fragment,
                        null,
                        e.map(function (e) {
                            return a().createElement(
                                o.Text,
                                {
                                    as: 'p',
                                    key: e.props.i18n_default_text,
                                },
                                e
                            );
                        })
                    );
                },
                I = function () {
                    var e = [
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'If you select "Reset-Up”, you win the payout if the exit spot is strictly higher than either the entry spot or the spot at reset time.',
                            key: '1',
                        }),
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'If you select "Reset-Down”, you win the payout if the exit spot is strictly lower than either the entry spot or the spot at reset time.',
                            key: '2',
                        }),
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                "If the exit spot is equal to the barrier or the new barrier (if a reset occurs), you don't win the payout.",
                            key: '3',
                        }),
                    ];
                    return a().createElement(
                        a().Fragment,
                        null,
                        e.map(function (e) {
                            return a().createElement(
                                o.Text,
                                {
                                    as: 'p',
                                    key: e.props.i18n_default_text,
                                },
                                e
                            );
                        })
                    );
                },
                C = function () {
                    var e = [
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'If you select "Stays Between", you win the payout if the market stays between (does not touch) either the High barrier or the Low barrier at any time during the contract period',
                            key: '1',
                        }),
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'If you select "Goes Outside", you win the payout if the market touches either the High barrier or the Low barrier at any time during the contract period.',
                            key: '2',
                        }),
                    ];
                    return a().createElement(
                        a().Fragment,
                        null,
                        e.map(function (e) {
                            return a().createElement(
                                o.Text,
                                {
                                    as: 'p',
                                    key: e.props.i18n_default_text,
                                },
                                e
                            );
                        })
                    );
                },
                R = function () {
                    var e = (0, h.H5)(),
                        t = e.PAYOUT,
                        r = e.EXPIRY,
                        n = e.BARRIER,
                        o = e.PAYOUT_PER_POINT,
                        i = e.SPOT_PRICE,
                        c = e.EXIT_SPOT,
                        s = e.STAKE,
                        u = [
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        "Turbos allow you to predict the direction of the underlying asset's movements.",
                                }),
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Up',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Earn a <0>payout</0> if the <1>spot price</1> never falls below the <2>barrier</2> during the contract period.',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: t,
                                                key: 0,
                                                id: 'turbos-payout',
                                                contract_type: y.OA.TURBOS,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                        a().createElement(
                                            v,
                                            {
                                                term: i,
                                                key: 1,
                                                id: 'turbos-spot-price',
                                                contract_type: y.OA.TURBOS,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                        a().createElement(
                                            v,
                                            {
                                                term: n,
                                                key: 2,
                                                id: 'turbos-barrier',
                                                contract_type: y.OA.TURBOS,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'video',
                                text: 'turbos_up',
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Down',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Earn a payout if the spot price never rises above the barrier during the contract period.',
                                }),
                            },
                            {
                                type: 'video',
                                text: 'turbos_down',
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Additional Information',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'If the barrier is breached at any time, your contract ends early.',
                                }),
                            },
                            {
                                type: 'badge',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Payout = <0>Payout per point</0> × Distance between <1>exit spot</1> and barrier',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: o,
                                                key: 0,
                                                id: 'turbos-payout-per-point',
                                                contract_type: y.OA.TURBOS,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                        a().createElement(
                                            v,
                                            {
                                                term: c,
                                                key: 1,
                                                id: 'turbos-exit-spot',
                                                contract_type: y.OA.TURBOS,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'You make a profit only if your payout is more than your <0>stake</0>.',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: s,
                                                key: 0,
                                                id: 'turbos-stake',
                                                contract_type: y.OA.TURBOS,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        "You may sell your contract up to 15 seconds before <0>expiry</0>. If you do, we'll pay you the contract value.",
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: r,
                                                key: 0,
                                                id: 'turbos-expiry',
                                                contract_type: y.OA.TURBOS,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'If you set your duration in ticks, you cannot close the contract early.',
                                }),
                            },
                        ];
                    return a().createElement(a().Fragment, null, (0, h.ts)(u, !0));
                },
                j = function () {
                    var e = (0, h.H5)(),
                        t = e.PAYOUT,
                        r = e.EXPIRY,
                        n = [
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Touch/No Touch lets you predict if the market price will reach a set barrier at any time during the contract period.',
                                }),
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Touch',
                                    className: 'contract-type-info__heading',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Earn a <0>payout</0> if the market touches the barrier at any time before <1>expiry</1>.',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: t,
                                                key: 0,
                                                id: 'touch-no-touch-payout',
                                                contract_type: y.OA.TOUCH_NO_TOUCH,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                        a().createElement(
                                            v,
                                            {
                                                term: r,
                                                key: 1,
                                                id: 'touch-no-touch-expiry',
                                                contract_type: y.OA.TOUCH_NO_TOUCH,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'video',
                                text: 'touch',
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'No Touch',
                                    className: 'contract-type-info__heading',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Earn a payout if the market never touches the barrier before expiry.',
                                }),
                            },
                            {
                                type: 'video',
                                text: 'no_touch',
                            },
                        ];
                    return a().createElement(a().Fragment, null, (0, h.ts)(n, !0));
                },
                F = function () {
                    var e = [
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'If you select "High Tick", you win the payout if the selected tick is the highest among the next five ticks.',
                            key: '1',
                        }),
                        a().createElement(l.Localize, {
                            i18n_default_text:
                                'If you select "Low Tick", you win the payout if the selected tick is the lowest among the next five ticks.',
                            key: '2',
                        }),
                    ];
                    return a().createElement(
                        a().Fragment,
                        null,
                        e.map(function (e) {
                            return a().createElement(
                                o.Text,
                                {
                                    as: 'p',
                                    key: e.props.i18n_default_text,
                                },
                                e
                            );
                        })
                    );
                },
                M = function () {
                    var e = (0, h.H5)(),
                        t = e.STRIKE_PRICE,
                        r = e.EXPIRY,
                        n = e.EXIT_SPOT,
                        o = e.PAYOUT,
                        i = e.PAYOUT_PER_POINT,
                        c = e.CONTRACT_VALUE,
                        s = [
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Vanillas allow you to predict if the underlying asset’s price will be above or below the <0>strike price</0> at contract <1>expiry</1> (<2>exit spot</2>).',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: t,
                                                key: 0,
                                                id: 'vanillas-strike-price',
                                                contract_type: y.OA.VANILLAS,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                        a().createElement(
                                            v,
                                            {
                                                term: r,
                                                key: 1,
                                                id: 'vanillas-exit-spot',
                                                contract_type: y.OA.VANILLAS,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                        a().createElement(
                                            v,
                                            {
                                                term: n,
                                                key: 2,
                                                id: 'vanillas-expiry',
                                                contract_type: y.OA.VANILLAS,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Call',
                                    className: 'contract-type-info__heading',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Earn a <0>payout</0> if the exit spot is above the strike price at expiry.',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: o,
                                                key: 0,
                                                id: 'vanillas-call-payout',
                                                contract_type: y.OA.VANILLAS,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'video',
                                text: 'vanillas_call',
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Put',
                                    className: 'contract-type-info__heading',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Earn a payout if the exit spot is below the strike price at expiry.',
                                }),
                            },
                            {
                                type: 'video',
                                text: 'vanillas_put',
                            },
                            {
                                type: 'heading',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text: 'Additional Information',
                                    className: 'contract-type-info__heading',
                                }),
                            },
                            {
                                type: 'badge',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'Payout = <0>Payout per point</0> × Difference between exit spot and strike price',
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: i,
                                                key: 0,
                                                id: 'vanillas-payout-per-point',
                                                contract_type: y.OA.VANILLAS,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        'You make a profit only if the payout is greater than your stake.',
                                }),
                            },
                            {
                                type: 'paragraph',
                                text: a().createElement(l.Localize, {
                                    i18n_default_text:
                                        "You may sell your contract up to 60 seconds before expiry. If you do, we'll pay you the <0>contract value</0>.",
                                    components: [
                                        a().createElement(
                                            v,
                                            {
                                                term: c,
                                                key: 0,
                                                id: 'vanillas-contract-value',
                                                contract_type: y.OA.VANILLAS,
                                            },
                                            a().createElement('span', {
                                                className: 'contract-type-info__content-definition',
                                            })
                                        ),
                                    ],
                                }),
                            },
                        ];
                    return a().createElement(a().Fragment, null, (0, h.ts)(s, !0));
                },
                D = function (e) {
                    var t,
                        r = e.category;
                    if ((e.onClick, e.is_vanilla_fx, e.is_multiplier_fx, r))
                        switch (r) {
                            case i.TRADE_TYPES.ACCUMULATOR:
                                t = a().createElement(b, null);
                                break;
                            case i.TRADE_TYPES.RISE_FALL:
                            case i.TRADE_TYPES.RISE_FALL_EQUAL:
                                t = a().createElement(L, null);
                                break;
                            case i.TRADE_TYPES.HIGH_LOW:
                                t = a().createElement(T, null);
                                break;
                            case i.TRADE_TYPES.END:
                                t = a().createElement(x, null);
                                break;
                            case i.TRADE_TYPES.STAY:
                                t = a().createElement(C, null);
                                break;
                            case i.TRADE_TYPES.MATCH_DIFF:
                                t = a().createElement(N, null);
                                break;
                            case i.TRADE_TYPES.EVEN_ODD:
                                t = a().createElement(w, null);
                                break;
                            case i.TRADE_TYPES.OVER_UNDER:
                                t = a().createElement(z, null);
                                break;
                            case i.TRADE_TYPES.TOUCH:
                                t = a().createElement(j, null);
                                break;
                            case i.TRADE_TYPES.ASIAN:
                                t = a().createElement(E, null);
                                break;
                            case i.TRADE_TYPES.RUN_HIGH_LOW:
                                t = a().createElement(P, null);
                                break;
                            case i.TRADE_TYPES.RESET:
                                t = a().createElement(I, null);
                                break;
                            case i.TRADE_TYPES.CALL_PUT_SPREAD:
                                t = a().createElement(g, null);
                                break;
                            case i.TRADE_TYPES.TICK_HIGH_LOW:
                                t = a().createElement(F, null);
                                break;
                            case i.TRADE_TYPES.LB_HIGH_LOW:
                                t = a().createElement(A, null);
                                break;
                            case i.TRADE_TYPES.LB_PUT:
                                t = a().createElement(S, null);
                                break;
                            case i.TRADE_TYPES.LB_CALL:
                                t = a().createElement(O, null);
                                break;
                            case i.TRADE_TYPES.MULTIPLIER:
                                t = a().createElement(k, null);
                                break;
                            case i.TRADE_TYPES.TURBOS.LONG:
                            case i.TRADE_TYPES.TURBOS.SHORT:
                                t = a().createElement(R, null);
                                break;
                            case i.TRADE_TYPES.VANILLA.CALL:
                            case i.TRADE_TYPES.VANILLA.PUT:
                                t = a().createElement(M, null);
                                break;
                            default:
                                t = a().createElement(
                                    o.Text,
                                    {
                                        as: 'p',
                                    },
                                    a().createElement(l.Localize, {
                                        i18n_default_text: 'Description not found.',
                                    })
                                );
                        }
                    return a().createElement(a().Fragment, null, t);
                };
            var H = ['styles'];

            function U() {
                return (
                    (U = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t];
                                  for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                              }
                              return e;
                          }),
                    U.apply(null, arguments)
                );
            }
            const Y = function (e) {
                e.styles;
                var t = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (-1 !== t.indexOf(n)) continue;
                                    r[n] = e[n];
                                }
                            return r;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < o.length; n++)
                            (r = o[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                    }
                    return a;
                })(e, H);
                return a().createElement(
                    'svg',
                    U(
                        {
                            xmlns: 'http://www.w3.org/2000/svg',
                            width: '272',
                            height: '148',
                        },
                        t
                    ),
                    a().createElement(
                        'g',
                        {
                            fill: 'none',
                        },
                        a().createElement('rect', {
                            width: '272',
                            height: '148',
                            fill: '#FFF',
                            rx: '4',
                        }),
                        a().createElement('rect', {
                            width: '272',
                            height: '148',
                            fill: 'var(--general-section-1)',
                            rx: '4',
                        }),
                        a().createElement('path', {
                            fill: 'var(--fill-normal)',
                            d: 'M157.12 89.96h32.77c3.22 0 5.83 2.42 5.83 5.4s-2.61 5.38-5.83 5.38H40.6c-3.21 0-5.82-2.41-5.82-5.39 0-2.97 2.6-5.39 5.83-5.39h64.08c3.22 0 5.83-2.4 5.83-5.38s-2.6-5.4-5.83-5.4H55.16v-.04c-2.91-.34-5.1-2.63-5.1-5.34 0-2.72 2.19-5 5.1-5.35v-.04h20.4c3.21 0 5.82-2.41 5.82-5.39 0-2.97-2.6-5.39-5.83-5.39H48.61c-3.22 0-5.83-2.4-5.83-5.39s2.6-5.38 5.83-5.38h138.37c3.22 0 5.83 2.4 5.83 5.38s-2.61 5.4-5.83 5.4h-53.9c-3.21 0-5.82 2.4-5.82 5.38s2.61 5.39 5.83 5.39h32.04c3.22 0 5.83 2.41 5.83 5.39s-2.61 5.39-5.83 5.39h-17.48c-3.21 0-5.82 2.4-5.82 5.38s2.6 5.4 5.82 5.4h9.47zm-126-43.1c3.23 0 5.84 2.4 5.84 5.39 0 2.97-2.61 5.38-5.83 5.38s-5.83-2.4-5.83-5.38 2.61-5.4 5.83-5.4zM168.05 25.3h40.79c3.21 0 5.82 2.42 5.82 5.4 0 2.97-2.6 5.38-5.82 5.38h-40.79c-3.21 0-5.82-2.41-5.82-5.39s2.6-5.39 5.82-5.39zm-24.76 0c3.22 0 5.83 2.42 5.83 5.4 0 2.97-2.61 5.38-5.83 5.38s-5.82-2.41-5.82-5.39 2.6-5.39 5.82-5.39zm70.64 21.56h10.2c3.22 0 5.83 2.4 5.83 5.39 0 2.97-2.61 5.38-5.83 5.38h-10.2c-3.21 0-5.82-2.4-5.82-5.38s2.6-5.4 5.82-5.4zM188.43 68.4h21.85c3.22 0 5.83 2.41 5.83 5.39s-2.6 5.39-5.83 5.39h-21.84c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.6-5.38 5.83-5.38zm20.4 21.55h32.04c3.22 0 5.83 2.42 5.83 5.4s-2.61 5.38-5.83 5.38h-32.04c-3.22 0-5.83-2.41-5.83-5.39 0-2.97 2.61-5.39 5.83-5.39zm-139.1 21.56h65.54c3.22 0 5.83 2.41 5.83 5.39s-2.61 5.39-5.83 5.39H69.73c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.6-5.38 5.83-5.38zm87.39 0h10.2c3.21 0 5.82 2.41 5.82 5.39s-2.6 5.39-5.82 5.39h-10.2c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.61-5.38 5.83-5.38z',
                        }),
                        a().createElement('path', {
                            fill: '#85ACB0',
                            d: 'M177.83 90.67v8.43h-33.74v-8.43h33.74zm33.74-25.3v8.43h-67.48v-8.44h67.48zm0-25.3v8.43h-67.48v-8.44h67.48z',
                        }),
                        a().createElement('path', {
                            fill: '#FF444F',
                            d: 'M183.8 73.8l19.33 19.36V86.4a8.4 8.4 0 018.4-8.4h.04V99.1a8.43 8.43 0 01-8.44 8.43h-21.08v-.04a8.4 8.4 0 018.37-8.39h6.75l-25.3-25.3h11.92zm-25.31-25.3l12.65 12.65h-11.92L146.57 48.5h11.92z',
                        }),
                        a().createElement('path', {
                            fill: '#85ACB0',
                            d: 'M127.57 99.1v8.44H60.09V99.1h67.48zm0-25.3v8.43H60.09V73.8h67.48zM93.83 48.5v8.43H60.09V48.5h33.74z',
                        }),
                        a().createElement('path', {
                            fill: '#FF444F',
                            d: 'M87.14 86.45L74.5 99.1H62.56l12.65-12.65h11.93zm32-46.39a8.43 8.43 0 018.43 8.44v21.08h-.05a8.4 8.4 0 01-8.39-8.37v-6.75L99.8 73.8H87.9l25.3-25.3h-6.75a8.4 8.4 0 01-8.4-8.4v-.04h21.1z',
                        })
                    )
                );
            };
            var B = ['styles'];

            function V() {
                return (
                    (V = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t];
                                  for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                              }
                              return e;
                          }),
                    V.apply(null, arguments)
                );
            }
            const G = function (e) {
                e.styles;
                var t = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (-1 !== t.indexOf(n)) continue;
                                    r[n] = e[n];
                                }
                            return r;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < o.length; n++)
                            (r = o[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                    }
                    return a;
                })(e, B);
                return a().createElement(
                    'svg',
                    V(
                        {
                            xmlns: 'http://www.w3.org/2000/svg',
                            width: '272',
                            height: '148',
                        },
                        t
                    ),
                    a().createElement(
                        'g',
                        {
                            fill: 'none',
                        },
                        a().createElement('rect', {
                            width: '272',
                            height: '148',
                            fill: '#FFF',
                            rx: '4',
                        }),
                        a().createElement('rect', {
                            width: '272',
                            height: '148',
                            fill: 'var(--general-section-1)',
                            rx: '4',
                        }),
                        a().createElement('path', {
                            fill: 'var(--fill-normal)',
                            d: 'M157.12 89.96h32.77c3.22 0 5.83 2.42 5.83 5.4s-2.61 5.38-5.83 5.38H40.6c-3.21 0-5.82-2.41-5.82-5.39 0-2.97 2.6-5.39 5.83-5.39h64.08c3.22 0 5.83-2.4 5.83-5.38s-2.6-5.4-5.83-5.4H55.16v-.04c-2.91-.34-5.1-2.63-5.1-5.34 0-2.72 2.19-5 5.1-5.35v-.04h20.4c3.21 0 5.82-2.41 5.82-5.39 0-2.97-2.6-5.39-5.83-5.39H48.61c-3.22 0-5.83-2.4-5.83-5.39s2.6-5.38 5.83-5.38h138.37c3.22 0 5.83 2.4 5.83 5.38s-2.61 5.4-5.83 5.4h-53.9c-3.21 0-5.82 2.4-5.82 5.38s2.61 5.39 5.83 5.39h32.04c3.22 0 5.83 2.41 5.83 5.39s-2.61 5.39-5.83 5.39h-17.48c-3.21 0-5.82 2.4-5.82 5.38s2.6 5.4 5.82 5.4h9.47zm-126-43.1c3.23 0 5.84 2.4 5.84 5.39 0 2.97-2.61 5.38-5.83 5.38s-5.83-2.4-5.83-5.38 2.61-5.4 5.83-5.4zM168.05 25.3h40.79c3.21 0 5.82 2.42 5.82 5.4 0 2.97-2.6 5.38-5.82 5.38h-40.79c-3.21 0-5.82-2.41-5.82-5.39s2.6-5.39 5.82-5.39zm-24.76 0c3.22 0 5.83 2.42 5.83 5.4 0 2.97-2.61 5.38-5.83 5.38s-5.82-2.41-5.82-5.39 2.6-5.39 5.82-5.39zm70.64 21.56h10.2c3.22 0 5.83 2.4 5.83 5.39 0 2.97-2.61 5.38-5.83 5.38h-10.2c-3.21 0-5.82-2.4-5.82-5.38s2.6-5.4 5.82-5.4zM188.43 68.4h21.85c3.22 0 5.83 2.41 5.83 5.39s-2.6 5.39-5.83 5.39h-21.84c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.6-5.38 5.83-5.38zm20.4 21.55h32.04c3.22 0 5.83 2.42 5.83 5.4s-2.61 5.38-5.83 5.38h-32.04c-3.22 0-5.83-2.41-5.83-5.39 0-2.97 2.61-5.39 5.83-5.39zm-139.1 21.56h65.54c3.22 0 5.83 2.41 5.83 5.39s-2.61 5.39-5.83 5.39H69.73c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.6-5.38 5.83-5.38zm87.39 0h10.2c3.21 0 5.82 2.41 5.82 5.39s-2.6 5.39-5.82 5.39h-10.2c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.61-5.38 5.83-5.38z',
                        }),
                        a().createElement('path', {
                            fill: '#85ACB0',
                            d: 'M169.74 99.1v8.44h-67.48V99.1h67.48zm-4.22-59.04v54.82h-8.44V40.06h8.44z',
                        }),
                        a().createElement('path', {
                            fill: '#FF444F',
                            d: 'M120.91 86.45l-4.2 4.22-14.45 4.21v-8.43h18.65zm19.3-33.74a8.43 8.43 0 018.44 8.44l-.04 21.08a8.43 8.43 0 01-8.4-8.43V67.1l-16.86 16.9V72.05l10.9-10.9h-6.68a8.46 8.46 0 01-8.44-8.44h21.09z',
                        })
                    )
                );
            };
            var W = ['styles'];

            function q() {
                return (
                    (q = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t];
                                  for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                              }
                              return e;
                          }),
                    q.apply(null, arguments)
                );
            }
            const K = function (e) {
                e.styles;
                var t = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (-1 !== t.indexOf(n)) continue;
                                    r[n] = e[n];
                                }
                            return r;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < o.length; n++)
                            (r = o[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                    }
                    return a;
                })(e, W);
                return a().createElement(
                    'svg',
                    q(
                        {
                            xmlns: 'http://www.w3.org/2000/svg',
                            width: '272',
                            height: '148',
                        },
                        t
                    ),
                    a().createElement(
                        'g',
                        {
                            fill: 'none',
                        },
                        a().createElement('rect', {
                            width: '272',
                            height: '148',
                            fill: '#FFF',
                            rx: '4',
                        }),
                        a().createElement('rect', {
                            width: '272',
                            height: '148',
                            fill: 'var(--general-section-1)',
                            rx: '4',
                        }),
                        a().createElement('path', {
                            fill: 'var(--fill-normal)',
                            d: 'M157.12 89.96h32.77c3.22 0 5.83 2.42 5.83 5.4s-2.61 5.38-5.83 5.38H40.6c-3.21 0-5.82-2.41-5.82-5.39 0-2.97 2.6-5.39 5.83-5.39h64.08c3.22 0 5.83-2.4 5.83-5.38s-2.6-5.4-5.83-5.4H55.16v-.04c-2.91-.34-5.1-2.63-5.1-5.34 0-2.72 2.19-5 5.1-5.35v-.04h20.4c3.21 0 5.82-2.41 5.82-5.39 0-2.97-2.6-5.39-5.83-5.39H48.61c-3.22 0-5.83-2.4-5.83-5.39s2.6-5.38 5.83-5.38h138.37c3.22 0 5.83 2.4 5.83 5.38s-2.61 5.4-5.83 5.4h-53.9c-3.21 0-5.82 2.4-5.82 5.38s2.61 5.39 5.83 5.39h32.04c3.22 0 5.83 2.41 5.83 5.39s-2.61 5.39-5.83 5.39h-17.48c-3.21 0-5.82 2.4-5.82 5.38s2.6 5.4 5.82 5.4h9.47zm-126-43.1c3.23 0 5.84 2.4 5.84 5.39 0 2.97-2.61 5.38-5.83 5.38s-5.83-2.4-5.83-5.38 2.61-5.4 5.83-5.4zM168.05 25.3h40.79c3.21 0 5.82 2.42 5.82 5.4 0 2.97-2.6 5.38-5.82 5.38h-40.79c-3.21 0-5.82-2.41-5.82-5.39s2.6-5.39 5.82-5.39zm-24.76 0c3.22 0 5.83 2.42 5.83 5.4 0 2.97-2.61 5.38-5.83 5.38s-5.82-2.41-5.82-5.39 2.6-5.39 5.82-5.39zm70.64 21.56h10.2c3.22 0 5.83 2.4 5.83 5.39 0 2.97-2.61 5.38-5.83 5.38h-10.2c-3.21 0-5.82-2.4-5.82-5.38s2.6-5.4 5.82-5.4zM188.43 68.4h21.85c3.22 0 5.83 2.41 5.83 5.39s-2.6 5.39-5.83 5.39h-21.84c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.6-5.38 5.83-5.38zm20.4 21.55h32.04c3.22 0 5.83 2.42 5.83 5.4s-2.61 5.38-5.83 5.38h-32.04c-3.22 0-5.83-2.41-5.83-5.39 0-2.97 2.61-5.39 5.83-5.39zm-139.1 21.56h65.54c3.22 0 5.83 2.41 5.83 5.39s-2.61 5.39-5.83 5.39H69.73c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.6-5.38 5.83-5.38zm87.39 0h10.2c3.21 0 5.82 2.41 5.82 5.39s-2.6 5.39-5.82 5.39h-10.2c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.61-5.38 5.83-5.38z',
                        }),
                        a().createElement('path', {
                            fill: '#85ACB0',
                            d: 'M211.57 99.1v8.44h-67.48V99.1h67.48zm-33.74-25.3v8.43h-33.74V73.8h33.74zm33.74 0v8.43h-13.02L207 73.8h4.58z',
                        }),
                        a().createElement('path', {
                            fill: '#FF444F',
                            d: 'M203.13 55.18L189.25 41.3l-.03.03a8.4 8.4 0 000 11.86l3.73 3.74H169.4v8.43h23.55l-3.73 3.74a8.4 8.4 0 000 11.87l.03.03 13.88-13.89a8.43 8.43 0 000-11.93z',
                        }),
                        a().createElement('path', {
                            fill: '#85ACB0',
                            d: 'M127.57 99.1v8.44H60.09V99.1h67.48zm0-59.04v8.44H60.09v-8.44h67.48z',
                        }),
                        a().createElement('path', {
                            fill: '#FF444F',
                            d: 'M125.1 67.84l-13.9-13.9-.02.04a8.38 8.38 0 000 11.87l3.73 3.73H85.4v8.44h29.52l-3.73 3.73a8.38 8.38 0 000 11.87l.03.03 13.89-13.89a8.43 8.43 0 000-11.92z',
                        })
                    )
                );
            };
            var $ = ['styles'];

            function X() {
                return (
                    (X = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t];
                                  for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                              }
                              return e;
                          }),
                    X.apply(null, arguments)
                );
            }
            const Q = function (e) {
                e.styles;
                var t = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (-1 !== t.indexOf(n)) continue;
                                    r[n] = e[n];
                                }
                            return r;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < o.length; n++)
                            (r = o[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                    }
                    return a;
                })(e, $);
                return a().createElement(
                    'svg',
                    X(
                        {
                            xmlns: 'http://www.w3.org/2000/svg',
                            width: '272',
                            height: '148',
                        },
                        t
                    ),
                    a().createElement(
                        'g',
                        {
                            fill: 'none',
                        },
                        a().createElement('rect', {
                            width: '272',
                            height: '148',
                            fill: '#FFF',
                            rx: '4',
                        }),
                        a().createElement('rect', {
                            width: '272',
                            height: '148',
                            fill: 'var(--general-section-1)',
                            rx: '4',
                        }),
                        a().createElement('path', {
                            fill: 'var(--fill-normal)',
                            d: 'M157.12 89.96h32.77c3.22 0 5.83 2.42 5.83 5.4s-2.61 5.38-5.83 5.38H40.6c-3.21 0-5.82-2.41-5.82-5.39 0-2.97 2.6-5.39 5.83-5.39h64.08c3.22 0 5.83-2.4 5.83-5.38s-2.6-5.4-5.83-5.4H55.16v-.04c-2.91-.34-5.1-2.63-5.1-5.34 0-2.72 2.19-5 5.1-5.35v-.04h20.4c3.21 0 5.82-2.41 5.82-5.39 0-2.97-2.6-5.39-5.83-5.39H48.61c-3.22 0-5.83-2.4-5.83-5.39s2.6-5.38 5.83-5.38h138.37c3.22 0 5.83 2.4 5.83 5.38s-2.61 5.4-5.83 5.4h-53.9c-3.21 0-5.82 2.4-5.82 5.38s2.61 5.39 5.83 5.39h32.04c3.22 0 5.83 2.41 5.83 5.39s-2.61 5.39-5.83 5.39h-17.48c-3.21 0-5.82 2.4-5.82 5.38s2.6 5.4 5.82 5.4h9.47zm-126-43.1c3.23 0 5.84 2.4 5.84 5.39 0 2.97-2.61 5.38-5.83 5.38s-5.83-2.4-5.83-5.38 2.61-5.4 5.83-5.4zM168.05 25.3h40.79c3.21 0 5.82 2.42 5.82 5.4 0 2.97-2.6 5.38-5.82 5.38h-40.79c-3.21 0-5.82-2.41-5.82-5.39s2.6-5.39 5.82-5.39zm-24.76 0c3.22 0 5.83 2.42 5.83 5.4 0 2.97-2.61 5.38-5.83 5.38s-5.82-2.41-5.82-5.39 2.6-5.39 5.82-5.39zm70.64 21.56h10.2c3.22 0 5.83 2.4 5.83 5.39 0 2.97-2.61 5.38-5.83 5.38h-10.2c-3.21 0-5.82-2.4-5.82-5.38s2.6-5.4 5.82-5.4zM188.43 68.4h21.85c3.22 0 5.83 2.41 5.83 5.39s-2.6 5.39-5.83 5.39h-21.84c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.6-5.38 5.83-5.38zm20.4 21.55h32.04c3.22 0 5.83 2.42 5.83 5.4s-2.61 5.38-5.83 5.38h-32.04c-3.22 0-5.83-2.41-5.83-5.39 0-2.97 2.61-5.39 5.83-5.39zm-139.1 21.56h65.54c3.22 0 5.83 2.41 5.83 5.39s-2.61 5.39-5.83 5.39H69.73c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.6-5.38 5.83-5.38zm87.39 0h10.2c3.21 0 5.82 2.41 5.82 5.39s-2.6 5.39-5.82 5.39h-10.2c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.61-5.38 5.83-5.38z',
                        }),
                        a().createElement('path', {
                            fill: '#85ACB0',
                            d: 'M165.52 52.71v54.83h-8.44V52.7h8.44zm4.22-12.65v8.44h-67.48v-8.44h67.48z',
                        }),
                        a().createElement('path', {
                            fill: '#FF444F',
                            d: 'M123.35 63.59l16.87 16.9v-6.7a8.43 8.43 0 018.39-8.43l.04 21.09a8.43 8.43 0 01-8.43 8.43h-21.09a8.46 8.46 0 018.44-8.43h6.68l-10.9-10.9V63.58zM102.26 52.7l14.44 4.22 4.21 4.22h-18.65V52.7z',
                        })
                    )
                );
            };
            var J = ['styles'];

            function Z() {
                return (
                    (Z = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t];
                                  for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                              }
                              return e;
                          }),
                    Z.apply(null, arguments)
                );
            }
            const ee = function (e) {
                e.styles;
                var t = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (-1 !== t.indexOf(n)) continue;
                                    r[n] = e[n];
                                }
                            return r;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < o.length; n++)
                            (r = o[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                    }
                    return a;
                })(e, J);
                return a().createElement(
                    'svg',
                    Z(
                        {
                            xmlns: 'http://www.w3.org/2000/svg',
                            width: '272',
                            height: '148',
                        },
                        t
                    ),
                    a().createElement(
                        'g',
                        {
                            fill: 'none',
                        },
                        a().createElement('rect', {
                            width: '272',
                            height: '148',
                            fill: '#FFF',
                            rx: '4',
                        }),
                        a().createElement('rect', {
                            width: '272',
                            height: '148',
                            fill: 'var(--general-section-1)',
                            rx: '4',
                        }),
                        a().createElement('path', {
                            fill: 'var(--fill-normal)',
                            d: 'M157.12 89.96h32.77c3.22 0 5.83 2.42 5.83 5.4s-2.61 5.38-5.83 5.38H40.6c-3.21 0-5.82-2.41-5.82-5.39 0-2.97 2.6-5.39 5.83-5.39h64.08c3.22 0 5.83-2.4 5.83-5.38s-2.6-5.4-5.83-5.4H55.16v-.04c-2.91-.34-5.1-2.63-5.1-5.34 0-2.72 2.19-5 5.1-5.35v-.04h20.4c3.21 0 5.82-2.41 5.82-5.39 0-2.97-2.6-5.39-5.83-5.39H48.61c-3.22 0-5.83-2.4-5.83-5.39s2.6-5.38 5.83-5.38h138.37c3.22 0 5.83 2.4 5.83 5.38s-2.61 5.4-5.83 5.4h-53.9c-3.21 0-5.82 2.4-5.82 5.38s2.61 5.39 5.83 5.39h32.04c3.22 0 5.83 2.41 5.83 5.39s-2.61 5.39-5.83 5.39h-17.48c-3.21 0-5.82 2.4-5.82 5.38s2.6 5.4 5.82 5.4h9.47zm-126-43.1c3.23 0 5.84 2.4 5.84 5.39 0 2.97-2.61 5.38-5.83 5.38s-5.83-2.4-5.83-5.38 2.61-5.4 5.83-5.4zM168.05 25.3h40.79c3.21 0 5.82 2.42 5.82 5.4 0 2.97-2.6 5.38-5.82 5.38h-40.79c-3.21 0-5.82-2.41-5.82-5.39s2.6-5.39 5.82-5.39zm-24.76 0c3.22 0 5.83 2.42 5.83 5.4 0 2.97-2.61 5.38-5.83 5.38s-5.82-2.41-5.82-5.39 2.6-5.39 5.82-5.39zm70.64 21.56h10.2c3.22 0 5.83 2.4 5.83 5.39 0 2.97-2.61 5.38-5.83 5.38h-10.2c-3.21 0-5.82-2.4-5.82-5.38s2.6-5.4 5.82-5.4zM188.43 68.4h21.85c3.22 0 5.83 2.41 5.83 5.39s-2.6 5.39-5.83 5.39h-21.84c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.6-5.38 5.83-5.38zm20.4 21.55h32.04c3.22 0 5.83 2.42 5.83 5.4s-2.61 5.38-5.83 5.38h-32.04c-3.22 0-5.83-2.41-5.83-5.39 0-2.97 2.61-5.39 5.83-5.39zm-139.1 21.56h65.54c3.22 0 5.83 2.41 5.83 5.39s-2.61 5.39-5.83 5.39H69.73c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.6-5.38 5.83-5.38zm87.39 0h10.2c3.21 0 5.82 2.41 5.82 5.39s-2.6 5.39-5.82 5.39h-10.2c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.61-5.38 5.83-5.38z',
                        }),
                        a().createElement('path', {
                            fill: '#85ACB0',
                            d: 'M169.74 99.1v8.44h-67.48V99.1h67.48zm-4.22-46.39v42.17h-8.44V52.71h8.44zm4.22-12.65v8.44h-67.48v-8.44h67.48z',
                        }),
                        a().createElement('path', {
                            fill: '#FF444F',
                            d: 'M120.91 86.45l-4.2 4.22-14.45 4.21v-8.43h18.65zm19.3-33.74a8.43 8.43 0 018.44 8.44l-.04 21.08a8.43 8.43 0 01-8.4-8.43V67.1l-16.86 16.9V72.05l10.9-10.9h-6.68a8.46 8.46 0 01-8.44-8.44h21.09z',
                        })
                    )
                );
            };
            var te = ['styles'];

            function re() {
                return (
                    (re = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t];
                                  for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                              }
                              return e;
                          }),
                    re.apply(null, arguments)
                );
            }
            const ne = function (e) {
                e.styles;
                var t = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (-1 !== t.indexOf(n)) continue;
                                    r[n] = e[n];
                                }
                            return r;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < o.length; n++)
                            (r = o[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                    }
                    return a;
                })(e, te);
                return a().createElement(
                    'svg',
                    re(
                        {
                            xmlns: 'http://www.w3.org/2000/svg',
                            width: '272',
                            height: '148',
                        },
                        t
                    ),
                    a().createElement(
                        'g',
                        {
                            fill: 'none',
                        },
                        a().createElement('rect', {
                            width: '272',
                            height: '148',
                            fill: '#FFF',
                            rx: '4',
                        }),
                        a().createElement('rect', {
                            width: '272',
                            height: '148',
                            fill: 'var(--general-section-1)',
                            rx: '4',
                        }),
                        a().createElement('path', {
                            fill: 'var(--fill-normal)',
                            d: 'M157.12 89.96h32.77c3.22 0 5.83 2.42 5.83 5.4s-2.61 5.38-5.83 5.38H40.6c-3.21 0-5.82-2.41-5.82-5.39 0-2.97 2.6-5.39 5.83-5.39h64.08c3.22 0 5.83-2.4 5.83-5.38s-2.6-5.4-5.83-5.4H55.16v-.04c-2.91-.34-5.1-2.63-5.1-5.34 0-2.72 2.19-5 5.1-5.35v-.04h20.4c3.21 0 5.82-2.41 5.82-5.39 0-2.97-2.6-5.39-5.83-5.39H48.61c-3.22 0-5.83-2.4-5.83-5.39s2.6-5.38 5.83-5.38h138.37c3.22 0 5.83 2.4 5.83 5.38s-2.61 5.4-5.83 5.4h-53.9c-3.21 0-5.82 2.4-5.82 5.38s2.61 5.39 5.83 5.39h32.04c3.22 0 5.83 2.41 5.83 5.39s-2.61 5.39-5.83 5.39h-17.48c-3.21 0-5.82 2.4-5.82 5.38s2.6 5.4 5.82 5.4h9.47zm-126-43.1c3.23 0 5.84 2.4 5.84 5.39 0 2.97-2.61 5.38-5.83 5.38s-5.83-2.4-5.83-5.38 2.61-5.4 5.83-5.4zM168.05 25.3h40.79c3.21 0 5.82 2.42 5.82 5.4 0 2.97-2.6 5.38-5.82 5.38h-40.79c-3.21 0-5.82-2.41-5.82-5.39s2.6-5.39 5.82-5.39zm-24.76 0c3.22 0 5.83 2.42 5.83 5.4 0 2.97-2.61 5.38-5.83 5.38s-5.82-2.41-5.82-5.39 2.6-5.39 5.82-5.39zm70.64 21.56h10.2c3.22 0 5.83 2.4 5.83 5.39 0 2.97-2.61 5.38-5.83 5.38h-10.2c-3.21 0-5.82-2.4-5.82-5.38s2.6-5.4 5.82-5.4zM188.43 68.4h21.85c3.22 0 5.83 2.41 5.83 5.39s-2.6 5.39-5.83 5.39h-21.84c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.6-5.38 5.83-5.38zm20.4 21.55h32.04c3.22 0 5.83 2.42 5.83 5.4s-2.61 5.38-5.83 5.38h-32.04c-3.22 0-5.83-2.41-5.83-5.39 0-2.97 2.61-5.39 5.83-5.39zm-139.1 21.56h65.54c3.22 0 5.83 2.41 5.83 5.39s-2.61 5.39-5.83 5.39H69.73c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.6-5.38 5.83-5.38zm87.39 0h10.2c3.21 0 5.82 2.41 5.82 5.39s-2.6 5.39-5.82 5.39h-10.2c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.61-5.38 5.83-5.38z',
                        }),
                        a().createElement('path', {
                            fill: '#85ACB0',
                            d: 'M177.83 40.06v67.47h-8.44V40.06h8.44zM160.96 99.1v8.44h-16.87V99.1h16.87zm0-59.04v8.44h-16.87v-8.44h16.87zm50.6 0v8.44h-25.3v-8.44h25.3z',
                        }),
                        a().createElement('path', {
                            fill: '#FF444F',
                            d: 'M182.05 72.07l21.08 21.09V86.4a8.4 8.4 0 018.4-8.4h.04V99.1a8.43 8.43 0 01-8.44 8.43h-21.08v-.04a8.4 8.4 0 018.37-8.39h6.75L182.05 84V72.06zm-15.13-15.14l2.48 2.47v11.93l-5.97-5.97H144.1v-8.43h22.83z',
                        }),
                        a().createElement('path', {
                            fill: '#85ACB0',
                            d: 'M76.96 99.1v8.44H60.1V99.1h16.87zm50.6 0v8.44h-25.3V99.1h25.3zM93.84 40.06v67.48h-8.44V40.06h8.44zm-16.87 0v8.44H60.1v-8.44h16.87z',
                        }),
                        a().createElement('path', {
                            fill: '#FF444F',
                            d: 'M85.4 76.27V88.2l-2.48 2.47H60.1v-8.44h19.34l5.96-5.96zm33.73-36.2a8.43 8.43 0 018.44 8.43v21.08h-.05a8.4 8.4 0 01-8.39-8.37v-6.75L98.05 75.54V63.62l15.14-15.12h-6.75a8.4 8.4 0 01-8.4-8.4v-.04z',
                        }),
                        a().createElement('path', {
                            fill: '#85ACB0',
                            d: 'M89.61 82.23v1.75l1.75-1.75z',
                        })
                    )
                );
            };
            var ae = ['styles'];

            function oe() {
                return (
                    (oe = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t];
                                  for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                              }
                              return e;
                          }),
                    oe.apply(null, arguments)
                );
            }
            const ie = function (e) {
                e.styles;
                var t = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (-1 !== t.indexOf(n)) continue;
                                    r[n] = e[n];
                                }
                            return r;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < o.length; n++)
                            (r = o[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                    }
                    return a;
                })(e, ae);
                return a().createElement(
                    'svg',
                    oe(
                        {
                            xmlns: 'http://www.w3.org/2000/svg',
                            width: '272',
                            height: '148',
                        },
                        t
                    ),
                    a().createElement(
                        'g',
                        {
                            fill: 'none',
                        },
                        a().createElement('rect', {
                            width: '272',
                            height: '148',
                            fill: '#FFF',
                            rx: '4',
                        }),
                        a().createElement('rect', {
                            width: '272',
                            height: '148',
                            fill: 'var(--general-section-1)',
                            rx: '4',
                        }),
                        a().createElement('path', {
                            fill: 'var(--fill-normal)',
                            d: 'M157.12 89.96h32.77c3.22 0 5.83 2.42 5.83 5.4s-2.61 5.38-5.83 5.38H40.6c-3.21 0-5.82-2.41-5.82-5.39 0-2.97 2.6-5.39 5.83-5.39h64.08c3.22 0 5.83-2.4 5.83-5.38s-2.6-5.4-5.83-5.4H55.16v-.04c-2.91-.34-5.1-2.63-5.1-5.34 0-2.72 2.19-5 5.1-5.35v-.04h20.4c3.21 0 5.82-2.41 5.82-5.39 0-2.97-2.6-5.39-5.83-5.39H48.61c-3.22 0-5.83-2.4-5.83-5.39s2.6-5.38 5.83-5.38h138.37c3.22 0 5.83 2.4 5.83 5.38s-2.61 5.4-5.83 5.4h-53.9c-3.21 0-5.82 2.4-5.82 5.38s2.61 5.39 5.83 5.39h32.04c3.22 0 5.83 2.41 5.83 5.39s-2.61 5.39-5.83 5.39h-17.48c-3.21 0-5.82 2.4-5.82 5.38s2.6 5.4 5.82 5.4h9.47zm-126-43.1c3.23 0 5.84 2.4 5.84 5.39 0 2.97-2.61 5.38-5.83 5.38s-5.83-2.4-5.83-5.38 2.61-5.4 5.83-5.4zM168.05 25.3h40.79c3.21 0 5.82 2.42 5.82 5.4 0 2.97-2.6 5.38-5.82 5.38h-40.79c-3.21 0-5.82-2.41-5.82-5.39s2.6-5.39 5.82-5.39zm-24.76 0c3.22 0 5.83 2.42 5.83 5.4 0 2.97-2.61 5.38-5.83 5.38s-5.82-2.41-5.82-5.39 2.6-5.39 5.82-5.39zm70.64 21.56h10.2c3.22 0 5.83 2.4 5.83 5.39 0 2.97-2.61 5.38-5.83 5.38h-10.2c-3.21 0-5.82-2.4-5.82-5.38s2.6-5.4 5.82-5.4zM188.43 68.4h21.85c3.22 0 5.83 2.41 5.83 5.39s-2.6 5.39-5.83 5.39h-21.84c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.6-5.38 5.83-5.38zm20.4 21.55h32.04c3.22 0 5.83 2.42 5.83 5.4s-2.61 5.38-5.83 5.38h-32.04c-3.22 0-5.83-2.41-5.83-5.39 0-2.97 2.61-5.39 5.83-5.39zm-139.1 21.56h65.54c3.22 0 5.83 2.41 5.83 5.39s-2.61 5.39-5.83 5.39H69.73c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.6-5.38 5.83-5.38zm87.39 0h10.2c3.21 0 5.82 2.41 5.82 5.39s-2.6 5.39-5.82 5.39h-10.2c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.61-5.38 5.83-5.38z',
                        }),
                        a().createElement('path', {
                            fill: '#85ACB0',
                            d: 'M211.57 40.06v67.47h-8.44V40.06h8.44zm-16.87 0V73.8h-8.44V40.06h8.44zm-44.64 16.87l2.47 2.47 5.96 5.96h-14.4v-8.43h5.97zm27.77-16.87v16.87h-8.44V40.06h8.44zm-16.87 0v8.44h-8.43v-8.44h8.43z',
                        }),
                        a().createElement('path', {
                            fill: '#FF444F',
                            d: 'M194.66 78.02a8.4 8.4 0 00-8.4 8.39v6.75l-25.3-25.3v11.9L180.3 99.1h-6.73a8.4 8.4 0 00-8.4 8.4v.03h21.1a8.43 8.43 0 008.43-8.43V78.02h-.04z',
                        }),
                        a().createElement('path', {
                            fill: '#85ACB0',
                            d: 'M76.96 99.1v8.44h-8.43V99.1h8.43zm50.6-59.04v67.47h-8.43V40.06h8.44zM110.7 73.8v33.74h-8.44V73.8h8.44zM93.83 90.67v16.86h-8.44V90.67h8.44zm-19.34-8.44l-5.96 5.96-2.47 2.48h-5.97v-8.44h14.4z',
                        }),
                        a().createElement('path', {
                            fill: '#FF444F',
                            d: 'M102.26 40.06H81.18v.04a8.4 8.4 0 008.39 8.4h6.75L76.96 67.84v11.92l25.3-25.3v6.75a8.4 8.4 0 008.4 8.37h.04V48.5a8.43 8.43 0 00-8.44-8.44z',
                        })
                    )
                );
            };
            var ce = ['styles'];

            function le() {
                return (
                    (le = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t];
                                  for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                              }
                              return e;
                          }),
                    le.apply(null, arguments)
                );
            }
            const se = function (e) {
                e.styles;
                var t = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (-1 !== t.indexOf(n)) continue;
                                    r[n] = e[n];
                                }
                            return r;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < o.length; n++)
                            (r = o[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                    }
                    return a;
                })(e, ce);
                return a().createElement(
                    'svg',
                    le(
                        {
                            xmlns: 'http://www.w3.org/2000/svg',
                            width: '272',
                            height: '148',
                        },
                        t
                    ),
                    a().createElement(
                        'g',
                        {
                            fill: 'none',
                        },
                        a().createElement('rect', {
                            width: '272',
                            height: '148',
                            fill: '#FFF',
                            rx: '4',
                        }),
                        a().createElement('rect', {
                            width: '272',
                            height: '148',
                            fill: 'var(--general-section-1)',
                            rx: '4',
                        }),
                        a().createElement('path', {
                            fill: 'var(--fill-normal)',
                            d: 'M157.12 90.21h32.77c3.22 0 5.83 2.42 5.83 5.4 0 2.99-2.61 5.4-5.83 5.4H40.6c-3.21 0-5.82-2.41-5.82-5.4 0-2.98 2.6-5.4 5.83-5.4h64.08c3.22 0 5.83-2.42 5.83-5.4s-2.6-5.4-5.83-5.4H55.16v-.05c-2.91-.34-5.1-2.64-5.1-5.36s2.19-5.02 5.1-5.36v-.04h20.4c3.21 0 5.82-2.42 5.82-5.4 0-2.99-2.6-5.41-5.83-5.41H48.61c-3.22 0-5.83-2.42-5.83-5.4 0-2.99 2.6-5.4 5.83-5.4h138.37c3.22 0 5.83 2.41 5.83 5.4 0 2.98-2.61 5.4-5.83 5.4h-53.9c-3.21 0-5.82 2.42-5.82 5.4s2.61 5.4 5.83 5.4h32.04c3.22 0 5.83 2.43 5.83 5.41s-2.61 5.4-5.83 5.4h-17.48c-3.21 0-5.82 2.42-5.82 5.4 0 2.99 2.6 5.41 5.82 5.41h9.47zm-126-43.23c3.23 0 5.84 2.42 5.84 5.4 0 3-2.61 5.41-5.83 5.41s-5.83-2.42-5.83-5.4c0-2.99 2.61-5.4 5.83-5.4zm136.92-21.6h40.79c3.21 0 5.82 2.41 5.82 5.4s-2.6 5.4-5.82 5.4h-40.79c-3.21 0-5.82-2.42-5.82-5.4 0-2.99 2.6-5.4 5.82-5.4zm-24.76 0c3.22 0 5.83 2.41 5.83 5.4s-2.61 5.4-5.83 5.4-5.82-2.42-5.82-5.4c0-2.99 2.6-5.4 5.82-5.4zm70.64 21.6h10.2c3.22 0 5.83 2.42 5.83 5.4 0 3-2.61 5.41-5.83 5.41h-10.2c-3.21 0-5.82-2.42-5.82-5.4 0-2.99 2.6-5.4 5.82-5.4zM188.43 68.6h21.85c3.22 0 5.83 2.42 5.83 5.4 0 2.98-2.6 5.4-5.83 5.4h-21.84c-3.22 0-5.83-2.42-5.83-5.4 0-2.98 2.6-5.4 5.83-5.4zm20.4 21.61h32.04c3.22 0 5.83 2.42 5.83 5.4 0 2.99-2.61 5.4-5.83 5.4h-32.04c-3.22 0-5.83-2.41-5.83-5.4 0-2.98 2.61-5.4 5.83-5.4zm-139.1 21.61h65.54c3.22 0 5.83 2.42 5.83 5.4 0 2.99-2.61 5.4-5.83 5.4H69.73c-3.22 0-5.83-2.41-5.83-5.4s2.6-5.4 5.83-5.4zm87.39 0h10.2c3.21 0 5.82 2.42 5.82 5.4 0 2.99-2.6 5.4-5.82 5.4h-10.2c-3.22 0-5.83-2.41-5.83-5.4s2.61-5.4 5.83-5.4z',
                        }),
                        a().createElement('path', {
                            fill: '#85ACB0',
                            d: 'M165.52 99.37v8.46h-21.09v-8.46h21.09zm29-46.3l14.92 14.95a8.33 8.33 0 011.3 1.75 8.24 8.24 0 010 8.46h-22.39l-8.44-8.46h19.34L194.5 65a8.42 8.42 0 01-2.46-5.95c0-2.23.88-4.37 2.46-5.95l.03-.03zm17.39-12.9v8.46h-67.48v-8.46h67.48z',
                        }),
                        a().createElement('path', {
                            fill: '#FF444F',
                            d: 'M195.04 86.69v6.7l-15.12-15.16-8.44-8.46h-27.05v8.46H168l21.09 21.14h-6.73a8.4 8.4 0 00-8.4 8.42v.04h21.09a8.45 8.45 0 008.43-8.46V86.7h-8.43z',
                        }),
                        a().createElement('path', {
                            fill: '#85ACB0',
                            d: 'M127.57 99.37v8.46H60.09v-8.46h67.48zm-1.17-29.6a8.24 8.24 0 010 8.46 8.32 8.32 0 01-1.3 1.75l-14.91 14.95-.03-.03a8.42 8.42 0 01-2.46-5.95c0-2.23.88-4.37 2.46-5.95l4.75-4.77H95.57l8.44-8.46zm-45.22-29.6v8.46H60.09v-8.46h21.09z',
                        }),
                        a().createElement('path', {
                            fill: '#FF444F',
                            d: 'M110.7 40.17H89.6v.04a8.4 8.4 0 008.4 8.42h6.74L83.67 69.77H60.09v8.46h27.05l8.44-8.46 15.12-15.16v6.7h8.43V48.63a8.45 8.45 0 00-8.43-8.46z',
                        })
                    )
                );
            };
            var ue = ['styles'];

            function me() {
                return (
                    (me = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t];
                                  for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                              }
                              return e;
                          }),
                    me.apply(null, arguments)
                );
            }
            const pe = function (e) {
                e.styles;
                var t = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (-1 !== t.indexOf(n)) continue;
                                    r[n] = e[n];
                                }
                            return r;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < o.length; n++)
                            (r = o[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                    }
                    return a;
                })(e, ue);
                return a().createElement(
                    'svg',
                    me(
                        {
                            xmlns: 'http://www.w3.org/2000/svg',
                            width: '272',
                            height: '148',
                        },
                        t
                    ),
                    a().createElement(
                        'g',
                        {
                            fill: 'none',
                        },
                        a().createElement('rect', {
                            width: '272',
                            height: '148',
                            fill: '#FFF',
                            rx: '4',
                        }),
                        a().createElement('rect', {
                            width: '272',
                            height: '148',
                            fill: 'var(--general-section-1)',
                            rx: '4',
                        }),
                        a().createElement('path', {
                            fill: 'var(--fill-normal)',
                            d: 'M157.12 89.96h32.77c3.22 0 5.83 2.42 5.83 5.4s-2.61 5.38-5.83 5.38H40.6c-3.21 0-5.82-2.41-5.82-5.39 0-2.97 2.6-5.39 5.83-5.39h64.08c3.22 0 5.83-2.4 5.83-5.38s-2.6-5.4-5.83-5.4H55.16v-.04c-2.91-.34-5.1-2.63-5.1-5.34 0-2.72 2.19-5 5.1-5.35v-.04h20.4c3.21 0 5.82-2.41 5.82-5.39 0-2.97-2.6-5.39-5.83-5.39H48.61c-3.22 0-5.83-2.4-5.83-5.39s2.6-5.38 5.83-5.38h138.37c3.22 0 5.83 2.4 5.83 5.38s-2.61 5.4-5.83 5.4h-53.9c-3.21 0-5.82 2.4-5.82 5.38s2.61 5.39 5.83 5.39h32.04c3.22 0 5.83 2.41 5.83 5.39s-2.61 5.39-5.83 5.39h-17.48c-3.21 0-5.82 2.4-5.82 5.38s2.6 5.4 5.82 5.4h9.47zm-126-43.1c3.23 0 5.84 2.4 5.84 5.39 0 2.97-2.61 5.38-5.83 5.38s-5.83-2.4-5.83-5.38 2.61-5.4 5.83-5.4zM168.05 25.3h40.79c3.21 0 5.82 2.42 5.82 5.4 0 2.97-2.6 5.38-5.82 5.38h-40.79c-3.21 0-5.82-2.41-5.82-5.39s2.6-5.39 5.82-5.39zm-24.76 0c3.22 0 5.83 2.42 5.83 5.4 0 2.97-2.61 5.38-5.83 5.38s-5.82-2.41-5.82-5.39 2.6-5.39 5.82-5.39zm70.64 21.56h10.2c3.22 0 5.83 2.4 5.83 5.39 0 2.97-2.61 5.38-5.83 5.38h-10.2c-3.21 0-5.82-2.4-5.82-5.38s2.6-5.4 5.82-5.4zM188.43 68.4h21.85c3.22 0 5.83 2.41 5.83 5.39s-2.6 5.39-5.83 5.39h-21.84c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.6-5.38 5.83-5.38zm20.4 21.55h32.04c3.22 0 5.83 2.42 5.83 5.4s-2.61 5.38-5.83 5.38h-32.04c-3.22 0-5.83-2.41-5.83-5.39 0-2.97 2.61-5.39 5.83-5.39zm-139.1 21.56h65.54c3.22 0 5.83 2.41 5.83 5.39s-2.61 5.39-5.83 5.39H69.73c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.6-5.38 5.83-5.38zm87.39 0h10.2c3.21 0 5.82 2.41 5.82 5.39s-2.6 5.39-5.82 5.39h-10.2c-3.22 0-5.83-2.42-5.83-5.4 0-2.97 2.61-5.38 5.83-5.38z',
                        }),
                        a().createElement('path', {
                            fill: '#85ACB0',
                            d: 'M211.57 99.1v8.44h-25.3l-8.44-8.44h33.74zm-33.74 0l-8.44 8.44h-25.3V99.1h33.74zm33.74-59.04v8.44h-67.48v-8.44h67.48z',
                        }),
                        a().createElement('path', {
                            fill: '#FF444F',
                            d: 'M203.13 56.93h-21.08v.04a8.4 8.4 0 008.39 8.4h6.75L177.83 84.7l-19.34-19.34a8.43 8.43 0 00-11.93 0l-2.47 2.48v11.92l8.44-8.43 19.34 19.34a8.43 8.43 0 0011.92 0l19.34-19.34v6.74a8.4 8.4 0 008.4 8.38h.04V65.36a8.43 8.43 0 00-8.44-8.43z',
                        }),
                        a().createElement('path', {
                            fill: '#85ACB0',
                            d: 'M127.57 99.1v8.44H60.09V99.1h67.48zm0-59.04v8.44H93.83l8.43-8.44h25.3zm-42.17 0l8.43 8.44H60.09v-8.44h25.3z',
                        }),
                        a().createElement('path', {
                            fill: '#FF444F',
                            d: 'M127.52 61.15a8.4 8.4 0 00-8.39 8.39v6.75L99.8 56.93a8.43 8.43 0 00-11.92 0L68.53 76.27l-8.44-8.43v11.92l2.47 2.47a8.43 8.43 0 0011.93 0L93.83 62.9l19.34 19.34h-6.75a8.4 8.4 0 00-8.37 8.4v.04h21.08a8.43 8.43 0 008.44-8.44V61.15h-.05z',
                        })
                    )
                );
            };
            var de = r('./src/Modules/Trading/Helpers/video-config.ts'),
                _e = r('./src/AppV2/Components/Guide/Description/video-preview.tsx');

            function fe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            const ye = a().memo(function (e) {
                    var t = e.data_testid,
                        r = e.selected_contract_type,
                        n = (0, m.A)().ui,
                        i = n.is_dark_mode_on,
                        c = n.is_mobile,
                        l = (function (e, t) {
                            return (
                                (function (e) {
                                    if (Array.isArray(e)) return e;
                                })(e) ||
                                (function (e, t) {
                                    var r =
                                        null == e
                                            ? null
                                            : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                    if (null != r) {
                                        var n,
                                            a,
                                            o,
                                            i,
                                            c = [],
                                            l = !0,
                                            s = !1;
                                        try {
                                            if (((o = (r = r.call(e)).next), 0 === t)) {
                                                if (Object(r) !== r) return;
                                                l = !1;
                                            } else
                                                for (
                                                    ;
                                                    !(l = (n = o.call(r)).done) && (c.push(n.value), c.length !== t);
                                                    l = !0
                                                );
                                        } catch (e) {
                                            (s = !0), (a = e);
                                        } finally {
                                            try {
                                                if (!l && null != r.return && ((i = r.return()), Object(i) !== i))
                                                    return;
                                            } finally {
                                                if (s) throw a;
                                            }
                                        }
                                        return c;
                                    }
                                })(e, t) ||
                                (function (e, t) {
                                    if (e) {
                                        if ('string' == typeof e) return fe(e, t);
                                        var r = {}.toString.call(e).slice(8, -1);
                                        return (
                                            'Object' === r && e.constructor && (r = e.constructor.name),
                                            'Map' === r || 'Set' === r
                                                ? Array.from(e)
                                                : 'Arguments' === r ||
                                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                                  ? fe(e, t)
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
                        })(a().useState(!1), 2),
                        s = l[0],
                        u = l[1];
                    if (!r) return null;
                    var p = (0, de.dv)(r, i);
                    return a().createElement(
                        'div',
                        {
                            className: 'contract-type-info__video',
                        },
                        s
                            ? a().createElement(o.VideoPlayer, {
                                  src: p,
                                  is_mobile: c,
                                  data_testid: t,
                                  should_show_controls: !0,
                                  muted: !0,
                                  hide_volume_control: !0,
                              })
                            : a().createElement(_e.A, {
                                  only_show_thumbnail: !0,
                                  contract_type: r,
                                  toggleVideoPlayer: function () {
                                      u(!s);
                                  },
                                  video_src: p,
                                  custom_width: '518px',
                                  custom_height: '270px',
                              })
                    );
                }),
                he = function (e) {
                    var t = e.category,
                        r = e.selected_contract_type;
                    if (t !== r) return null;
                    switch (t) {
                        case i.TRADE_TYPES.ASIAN:
                            return a().createElement(Y, null);
                        case i.TRADE_TYPES.CALL_PUT_SPREAD:
                            return a().createElement(se, null);
                        case i.TRADE_TYPES.END:
                            return a().createElement(K, null);
                        case i.TRADE_TYPES.EVEN_ODD:
                        case i.TRADE_TYPES.HIGH_LOW:
                            return a().createElement(ye, {
                                selected_contract_type: r,
                            });
                        case i.TRADE_TYPES.LB_CALL:
                            return a().createElement(G, null);
                        case i.TRADE_TYPES.LB_PUT:
                            return a().createElement(Q, null);
                        case i.TRADE_TYPES.LB_HIGH_LOW:
                            return a().createElement(ee, null);
                        case i.TRADE_TYPES.RISE_FALL:
                        case i.TRADE_TYPES.RISE_FALL_EQUAL:
                            return a().createElement(ye, {
                                selected_contract_type: 'rise_fall',
                            });
                        case i.TRADE_TYPES.MATCH_DIFF:
                        case i.TRADE_TYPES.MULTIPLIER:
                        case i.TRADE_TYPES.OVER_UNDER:
                            return a().createElement(ye, {
                                selected_contract_type: r,
                            });
                        case i.TRADE_TYPES.RESET:
                            return a().createElement(ne, null);
                        case i.TRADE_TYPES.RUN_HIGH_LOW:
                            return a().createElement(ie, null);
                        case i.TRADE_TYPES.ACCUMULATOR:
                            return a().createElement(ye, {
                                selected_contract_type: r,
                            });
                        case i.TRADE_TYPES.TICK_HIGH_LOW:
                            return a().createElement(pe, null);
                        case i.TRADE_TYPES.TOUCH:
                            return a().createElement(ye, {
                                selected_contract_type: r,
                            });
                        case i.TRADE_TYPES.TURBOS.LONG:
                        case i.TRADE_TYPES.TURBOS.SHORT:
                            return a().createElement(ye, {
                                selected_contract_type: 'turbos',
                            });
                        case i.TRADE_TYPES.VANILLA.CALL:
                        case i.TRADE_TYPES.VANILLA.PUT:
                            return a().createElement(ye, {
                                selected_contract_type: 'vanilla',
                            });
                        default:
                            return null;
                    }
                };
            var ve = r('../../node_modules/classnames/index.js'),
                be = r.n(ve),
                Ee = r('../../node_modules/@deriv-com/quill-ui/dist/components/Chip/index.js'),
                ge = r('../../node_modules/@deriv-com/quill-ui/dist/components/Typography/text/index.js'),
                xe = r('./node_modules/@deriv/quill-icons/dist/esm/types/index.js');
            const we = (0, n.forwardRef)(({ iconSize: e = 'md', title: t, titleId: r, ...a }, o) =>
                    n.createElement(
                        'svg',
                        {
                            xmlns: 'http://www.w3.org/2000/svg',
                            viewBox: '0 0 32 32',
                            ...xe.L[e],
                            role: 'img',
                            ref: o,
                            'aria-labelledby': r,
                            ...a,
                        },
                        t
                            ? n.createElement(
                                  'title',
                                  {
                                      id: r,
                                  },
                                  t
                              )
                            : null,
                        n.createElement('path', {
                            d: 'M10.531 16.969a.66.66 0 0 1 0-.899l7.5-7.5a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899L11.86 16.5l7.07 7.07a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0z',
                        })
                    )
                ),
                Te = (0, n.forwardRef)(({ iconSize: e = 'md', title: t, titleId: r, ...a }, o) =>
                    n.createElement(
                        'svg',
                        {
                            xmlns: 'http://www.w3.org/2000/svg',
                            viewBox: '0 0 32 32',
                            ...xe.L[e],
                            role: 'img',
                            ref: o,
                            'aria-labelledby': r,
                            ...a,
                        },
                        t
                            ? n.createElement(
                                  'title',
                                  {
                                      id: r,
                                  },
                                  t
                              )
                            : null,
                        n.createElement('path', {
                            d: 'M21.43 16.07a.66.66 0 0 1 0 .899l-7.5 7.5a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l7.07-7.07-7.07-7.031a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0z',
                        })
                    )
                );

            function Ae(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var r =
                            null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != r) {
                            var n,
                                a,
                                o,
                                i,
                                c = [],
                                l = !0,
                                s = !1;
                            try {
                                if (((o = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                } else for (; !(l = (n = o.call(r)).done) && (c.push(n.value), c.length !== t); l = !0);
                            } catch (e) {
                                (s = !0), (a = e);
                            } finally {
                                try {
                                    if (!l && null != r.return && ((i = r.return()), Object(i) !== i)) return;
                                } finally {
                                    if (s) throw a;
                                }
                            }
                            return c;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return Se(e, t);
                            var r = {}.toString.call(e).slice(8, -1);
                            return (
                                'Object' === r && e.constructor && (r = e.constructor.name),
                                'Map' === r || 'Set' === r
                                    ? Array.from(e)
                                    : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                      ? Se(e, t)
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

            function Se(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }

            function Oe(e) {
                return (
                    (Oe =
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
                    Oe(e)
                );
            }

            function Ne(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var r =
                            null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != r) {
                            var n,
                                a,
                                o,
                                i,
                                c = [],
                                l = !0,
                                s = !1;
                            try {
                                if (((o = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                } else for (; !(l = (n = o.call(r)).done) && (c.push(n.value), c.length !== t); l = !0);
                            } catch (e) {
                                (s = !0), (a = e);
                            } finally {
                                try {
                                    if (!l && null != r.return && ((i = r.return()), Object(i) !== i)) return;
                                } finally {
                                    if (s) throw a;
                                }
                            }
                            return c;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return ke(e, t);
                            var r = {}.toString.call(e).slice(8, -1);
                            return (
                                'Object' === r && e.constructor && (r = e.constructor.name),
                                'Map' === r || 'Set' === r
                                    ? Array.from(e)
                                    : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                      ? ke(e, t)
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

            function ke(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }

            function ze(e, t, r) {
                return (
                    (t = (function (e) {
                        var t = (function (e) {
                            if ('object' != Oe(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var r = t.call(e, 'string');
                                if ('object' != Oe(r)) return r;
                                throw new TypeError('@@toPrimitive must return a primitive value.');
                            }
                            return String(e);
                        })(e);
                        return 'symbol' == Oe(t) ? t : t + '';
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
            var Le = (0, u.observer)(function (e) {
                var t,
                    r,
                    n,
                    c,
                    s = e.handleSelect,
                    u = e.item,
                    f = e.selected_value,
                    y = e.list,
                    h = e.info_banner,
                    v = (0, d.P)().cached_multiplier_cancellation_list,
                    b = (0, m.A)(),
                    E = b.ui,
                    g = E.is_mobile,
                    x = E.is_dark_mode_on,
                    w = b.modules.trade.is_vanilla_fx,
                    T = i.TRADE_TYPES.RISE_FALL,
                    A = i.TRADE_TYPES.RISE_FALL_EQUAL,
                    S = i.TRADE_TYPES.TURBOS,
                    O = i.TRADE_TYPES.VANILLA,
                    N = ze(ze(ze({}, A, T), S.SHORT, S.LONG), O.PUT, O.CALL),
                    k = Ne(a().useState('description'), 2),
                    z = (k[0], k[1]),
                    L = Ne(a().useState(null !== (t = N[f]) && void 0 !== t ? t : f), 2),
                    P = L[0],
                    I = L[1],
                    C = (function () {
                        var e = a().useRef(null),
                            t = Ae(a().useState(!1), 2),
                            r = t[0],
                            n = t[1],
                            o = Ae(a().useState(!1), 2),
                            i = o[0],
                            c = o[1],
                            l = a().useCallback(function () {
                                if (e.current) {
                                    n(e.current.scrollLeft > 0);
                                    var t = e.current.scrollLeft + e.current.clientWidth >= e.current.scrollWidth - 1;
                                    c(!t);
                                }
                            }, []),
                            s = a().useCallback(function (t) {
                                if (e.current) {
                                    var r = 200,
                                        n = e.current.scrollLeft,
                                        a = e.current.scrollWidth - e.current.clientWidth;
                                    'right' === t && n + r >= a - 100
                                        ? e.current.scrollTo({
                                              left: a,
                                              behavior: 'smooth',
                                          })
                                        : 'left' === t && n - r <= 50
                                          ? e.current.scrollTo({
                                                left: 0,
                                                behavior: 'smooth',
                                            })
                                          : e.current.scrollTo({
                                                left: 'left' === t ? n - r : n + r,
                                                behavior: 'smooth',
                                            });
                                }
                            }, []);
                        a().useEffect(
                            function () {
                                l();
                                var e = function () {
                                    l();
                                };
                                return (
                                    window.addEventListener('resize', e),
                                    function () {
                                        window.removeEventListener('resize', e);
                                    }
                                );
                            },
                            [l]
                        );
                        var u = a().useCallback(
                            function (t) {
                                if (e.current) {
                                    var r = e.current.querySelector('[data-value="'.concat(t, '"]'));
                                    if (r) {
                                        var n = e.current.getBoundingClientRect(),
                                            a = r.getBoundingClientRect(),
                                            o = e.current.querySelectorAll('[data-value]');
                                        if (o[o.length - 1] === r) {
                                            var i = a.left - n.left - n.width / 2 + a.width / 2;
                                            e.current.scrollTo({
                                                left: i + e.current.scrollLeft,
                                                behavior: 'smooth',
                                            }),
                                                setTimeout(l, 300),
                                                setTimeout(function () {
                                                    var e = document.querySelector('.guide__menu-nav--next');
                                                    e && e.click(), l();
                                                }, 600);
                                        } else {
                                            var c = a.left - n.left - n.width / 2 + a.width / 2;
                                            e.current.scrollTo({
                                                left: c + e.current.scrollLeft,
                                                behavior: 'smooth',
                                            }),
                                                setTimeout(l, 300);
                                        }
                                    }
                                }
                            },
                            [l]
                        );
                        return {
                            menuRef: e,
                            showLeftNav: r,
                            showRightNav: i,
                            updateNavVisibility: l,
                            scrollChips: s,
                            scrollToSelected: u,
                        };
                    })(),
                    R = C.menuRef,
                    j = C.showLeftNav,
                    F = C.showRightNav,
                    M = C.updateNavVisibility,
                    H = C.scrollChips,
                    U = C.scrollToSelected,
                    Y =
                        null === (r = (0, _.iJ)(y, u)) || void 0 === r
                            ? void 0
                            : r.filter(function (e) {
                                  return e.value !== A && e.value !== S.SHORT && e.value !== O.PUT;
                              }),
                    B =
                        /accumulator|vanilla|multiplier|high_low|turbos|match_diff|even_odd|over_under|rise_fall|touch/i.test(
                            P
                        ),
                    V = g ? '328' : '528',
                    G =
                        null == Y ||
                        null ===
                            (n = Y.find(function (e) {
                                return e.value === P;
                            })) ||
                        void 0 === n
                            ? void 0
                            : n.text,
                    W = function (e) {
                        (0, i.clickAndKeyEventHandler)(function () {
                            return z('glossary');
                        }, e);
                    },
                    q = !(
                        null === (c = y[0].contract_categories) ||
                        void 0 === c ||
                        !c.find(function (e) {
                            return (
                                e.is_unavailable &&
                                e.contract_types.find(function (e) {
                                    return e.value === P;
                                })
                            );
                        })
                    ),
                    K = Number(null == Y ? void 0 : Y.length) > 1;
                a().useEffect(
                    function () {
                        U(P);
                    },
                    [P, U]
                );
                var $ =
                    null == Y
                        ? void 0
                        : Y.map(function (e) {
                              return e.value !== P
                                  ? null
                                  : a().createElement(
                                        'div',
                                        {
                                            key: e.value,
                                            className: 'contract-type-info__card',
                                        },
                                        a().createElement(
                                            o.ThemedScrollbars,
                                            {
                                                className: be()('contract-type-info__scrollbars', {
                                                    'contract-type-info__scrollbars--active': !0,
                                                }),
                                                style: {
                                                    left: '-'.concat(V, 'px'),
                                                    transform: 'translate3d('.concat(V, 'px, 0, 0)'),
                                                },
                                                height: g ? '' : '560px',
                                                autohide: !1,
                                            },
                                            a().createElement(
                                                'div',
                                                {
                                                    className: be()('contract-type-info__content', {
                                                        'contract-type-info__gif--has-video': B,
                                                    }),
                                                },
                                                a().createElement(
                                                    a().Fragment,
                                                    null,
                                                    a().createElement(D, {
                                                        category: e.value,
                                                        onClick: W,
                                                        is_vanilla_fx: w,
                                                        is_multiplier_fx: !(null != v && v.length),
                                                    }),
                                                    a().createElement(
                                                        'div',
                                                        {
                                                            className: 'contract-type-info__video-wrapper-border',
                                                        },
                                                        a().createElement(he, {
                                                            category: e.value,
                                                            selected_contract_type: P,
                                                        })
                                                    )
                                                )
                                            )
                                        )
                                    );
                          });
                return a().createElement(
                    a().Fragment,
                    null,
                    K &&
                        a().createElement(
                            'div',
                            {
                                className: 'guide__menu-container',
                            },
                            j &&
                                a().createElement(
                                    'div',
                                    {
                                        className: 'guide__menu-nav guide__menu-nav--prev',
                                        onClick: function () {
                                            return H('left');
                                        },
                                    },
                                    a().createElement(we, {
                                        fill: x ? '#FFFFFF' : '#000000',
                                        iconSize: 'md',
                                    })
                                ),
                            a().createElement(
                                'div',
                                {
                                    className: 'guide__menu',
                                    ref: R,
                                    onScroll: M,
                                },
                                null == Y
                                    ? void 0
                                    : Y.map(function (e) {
                                          var t = e.text,
                                              r = e.value;
                                          return a().createElement(
                                              Ee.v.Selectable,
                                              {
                                                  key: r,
                                                  'data-value': r,
                                                  onChipSelect: function () {
                                                      var e;
                                                      I(r),
                                                          p.Analytics.trackEvent('ce_trade_types_form', {
                                                              action: 'info_switcher',
                                                              trade_type_name:
                                                                  null == Y ||
                                                                  null ===
                                                                      (e = Y.find(function (e) {
                                                                          return e.value === r;
                                                                      })) ||
                                                                  void 0 === e
                                                                      ? void 0
                                                                      : e.text,
                                                          });
                                                  },
                                                  selected: P === r,
                                              },
                                              a().createElement(
                                                  ge.E,
                                                  {
                                                      size: 'sm',
                                                  },
                                                  t
                                              )
                                          );
                                      })
                            ),
                            F &&
                                a().createElement(
                                    'div',
                                    {
                                        className: 'guide__menu-nav guide__menu-nav--next',
                                        onClick: function () {
                                            return H('right');
                                        },
                                    },
                                    a().createElement(Te, {
                                        fill: x ? '#FFFFFF' : '#000000',
                                        iconSize: 'md',
                                    })
                                )
                        ),
                    q &&
                        a().createElement(
                            'div',
                            {
                                className: 'contract-type-info__banner-wrapper',
                            },
                            h
                        ),
                    a().createElement(
                        'div',
                        {
                            className: be()('contract-type-info', {
                                'contract-type-info--has-only-toggle-buttons': !q && !K,
                                'contract-type-info--has-only-dropdown': !q && K,
                                'contract-type-info--has-dropdown-and-info': q && K,
                            }),
                            style: {
                                width: g ? '328px' : '528px',
                            },
                        },
                        $
                    ),
                    a().createElement(
                        'div',
                        {
                            className: 'contract-type-info__trade-type-btn-wrapper',
                        },
                        a().createElement(o.Button, {
                            id: 'dt_contract_info_'.concat(P, '_btn'),
                            className: 'contract-type-info__button',
                            onClick: function (e) {
                                return s(
                                    {
                                        value: P === N[f] ? f : P,
                                    },
                                    e
                                );
                            },
                            text: (0, l.localize)('Choose {{contract_type}}', {
                                contract_type: null != G ? G : '',
                                interpolation: {
                                    escapeValue: !1,
                                },
                            }),
                            black: !0,
                            is_disabled: q,
                        })
                    )
                );
            });
            const Pe = function (e) {
                    var t = e.onClickBack,
                        r = e.onClose,
                        n = e.should_render_arrow,
                        c = void 0 === n || n,
                        l = e.should_render_close,
                        s = void 0 !== l && l,
                        u = e.text_size,
                        m = void 0 === u ? 's' : u,
                        p = e.title;
                    return a().createElement(
                        'div',
                        {
                            className: 'contract-type-info__action-bar',
                        },
                        c &&
                            a().createElement(
                                'span',
                                {
                                    className: 'contract-type-info__icon',
                                    onClick: function (e) {
                                        return (0, i.clickAndKeyEventHandler)(t, e);
                                    },
                                    onKeyDown: function (e) {
                                        return (0, i.clickAndKeyEventHandler)(t, e);
                                    },
                                },
                                a().createElement(o.Icon, {
                                    icon: 'IcArrowLeftBold',
                                })
                            ),
                        a().createElement(
                            o.Text,
                            {
                                size: m,
                                weight: 'bold',
                                color: 'prominent',
                                className: 'contract-type-info__title',
                            },
                            p
                        ),
                        s &&
                            a().createElement(
                                'span',
                                {
                                    className: 'contract-type-info__icon-cross',
                                    onClick: function (e) {
                                        return (0, i.clickAndKeyEventHandler)(r, e);
                                    },
                                    onKeyDown: function (e) {
                                        return (0, i.clickAndKeyEventHandler)(r, e);
                                    },
                                },
                                a().createElement(o.Icon, {
                                    icon: 'IcCross',
                                })
                            )
                    );
                },
                Ie = Le;
            var Ce = r('../../node_modules/react-transition-group/esm/CSSTransition.js'),
                Re = a().forwardRef(function (e, t) {
                    var r = e.onChange,
                        n = e.onClickClearInput,
                        i = e.onBlur,
                        c = e.value;
                    return a().createElement(o.Input, {
                        ref: t,
                        'data-lpignore': 'true',
                        leading_icon: a().createElement(o.Icon, {
                            icon: 'IcSearch',
                        }),
                        trailing_icon: c
                            ? a().createElement(o.Icon, {
                                  icon: 'IcCloseCircle',
                                  onClick: n,
                              })
                            : void 0,
                        placeholder: (0, l.localize)('Search'),
                        type: 'text',
                        onChange: r,
                        onBlur: i,
                        value: c,
                    });
                });
            Re.displayName = 'SearchInput';
            const je = a().memo(Re),
                Fe = function (e) {
                    var t = e.text;
                    return a().createElement(
                        'div',
                        {
                            className: 'no-results-found',
                        },
                        a().createElement(
                            'h2',
                            {
                                className: 'no-results-found__title',
                            },
                            (0, l.localize)('No results for "{{text}}"', {
                                text: t,
                                interpolation: {
                                    escapeValue: !1,
                                },
                            })
                        ),
                        a().createElement(
                            o.Text,
                            {
                                as: 'p',
                                size: 'xxs',
                                align: 'center',
                                color: 'less-prominent',
                                className: 'no-results-found__subtitle',
                            },
                            (0, l.localize)('Try checking your spelling or use a different term')
                        )
                    );
                };

            function Me(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            const De = function (e) {
                    var t,
                        r,
                        n = e.categories,
                        i = e.children,
                        c = e.info_banner,
                        s = e.is_info_dialog_open,
                        u = e.is_open,
                        m = e.item,
                        p = e.onBackButtonClick,
                        d = e.onCategoryClick,
                        f = e.onChangeInput,
                        y = e.onSearchBlur,
                        h = e.onClose,
                        v = e.selected,
                        b = e.show_loading,
                        E = e.learn_more_banner,
                        g = e.hide_back_button,
                        x = e.title,
                        w = a().useRef(null),
                        T = (function (e, t) {
                            return (
                                (function (e) {
                                    if (Array.isArray(e)) return e;
                                })(e) ||
                                (function (e, t) {
                                    var r =
                                        null == e
                                            ? null
                                            : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                    if (null != r) {
                                        var n,
                                            a,
                                            o,
                                            i,
                                            c = [],
                                            l = !0,
                                            s = !1;
                                        try {
                                            if (((o = (r = r.call(e)).next), 0 === t)) {
                                                if (Object(r) !== r) return;
                                                l = !1;
                                            } else
                                                for (
                                                    ;
                                                    !(l = (n = o.call(r)).done) && (c.push(n.value), c.length !== t);
                                                    l = !0
                                                );
                                        } catch (e) {
                                            (s = !0), (a = e);
                                        } finally {
                                            try {
                                                if (!l && null != r.return && ((i = r.return()), Object(i) !== i))
                                                    return;
                                            } finally {
                                                if (s) throw a;
                                            }
                                        }
                                        return c;
                                    }
                                })(e, t) ||
                                (function (e, t) {
                                    if (e) {
                                        if ('string' == typeof e) return Me(e, t);
                                        var r = {}.toString.call(e).slice(8, -1);
                                        return (
                                            'Object' === r && e.constructor && (r = e.constructor.name),
                                            'Map' === r || 'Set' === r
                                                ? Array.from(e)
                                                : 'Arguments' === r ||
                                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                                  ? Me(e, t)
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
                        })(a().useState(''), 2),
                        A = T[0],
                        S = T[1],
                        O = (0, _.my)(n, m),
                        N = v
                            ? {
                                  key: v,
                              }
                            : {
                                  key: O,
                              },
                        k = !(
                            null != n &&
                            null !==
                                (t = n.find(function (e) {
                                    return e.key === N.key;
                                })) &&
                            void 0 !== t &&
                            null !== (r = t.contract_categories) &&
                            void 0 !== r &&
                            r.length
                        ),
                        z = function () {
                            var e;
                            null == w || null === (e = w.current) || void 0 === e || e.focus(),
                                S(''),
                                null == f || f('');
                        },
                        L = function () {
                            return s
                                ? i
                                : a().createElement(
                                      o.ThemedScrollbars,
                                      {
                                          height: 'calc(100vh - 172px)',
                                      },
                                      i
                                  );
                        },
                        P = a().createElement(je, {
                            ref: w,
                            onChange: function (e) {
                                S(e.target.value), null == f || f(e.target.value);
                            },
                            onClickClearInput: z,
                            onBlur: y,
                            value: A,
                        });
                    return a().createElement(
                        Ce.A,
                        {
                            in: u,
                            timeout: 100,
                            classNames: {
                                enter: 'contract-type-dialog--enter',
                                enterDone: 'contract-type-dialog--enterDone',
                                exit: 'contract-type-dialog--exit',
                            },
                            unmountOnExit: !0,
                        },
                        a().createElement(
                            'div',
                            {
                                className: 'contract-type-dialog',
                                'data-testid': 'dt_contract_wrapper',
                            },
                            a().createElement(
                                'div',
                                {
                                    className: 'contract-type-dialog__wrapper',
                                },
                                b
                                    ? a().createElement(o.Loading, {
                                          is_fullscreen: !1,
                                      })
                                    : a().createElement(
                                          a().Fragment,
                                          null,
                                          s
                                              ? a().createElement(
                                                    a().Fragment,
                                                    null,
                                                    a().createElement(
                                                        'div',
                                                        {
                                                            className:
                                                                'dc-vertical-tab__action-bar dc-vertical-tab__action-bar--contract-type-info-header',
                                                        },
                                                        a().createElement(Pe, {
                                                            title: x || m.text || '',
                                                            onClickBack: p,
                                                            onClose: h,
                                                            should_render_arrow: !g,
                                                            should_render_close: g,
                                                        })
                                                    ),
                                                    L()
                                                )
                                              : a().createElement(
                                                    o.VerticalTab.Layout,
                                                    null,
                                                    a().createElement(o.VerticalTab.Headers, {
                                                        header_title: (0, l.localize)('Trade types'),
                                                        items: n,
                                                        selected: N,
                                                        onChange: function (e) {
                                                            s && (null == p || p()), A && z(), d && d(e);
                                                        },
                                                        selectedKey: 'key',
                                                    }),
                                                    a().createElement(
                                                        'div',
                                                        {
                                                            className: 'dc-vertical-tab__content',
                                                        },
                                                        a().createElement(
                                                            'div',
                                                            {
                                                                className: 'dc-vertical-tab__action-bar',
                                                            },
                                                            P
                                                        ),
                                                        a().createElement(
                                                            'div',
                                                            {
                                                                className: 'dc-vertical-tab__content-container',
                                                            },
                                                            k &&
                                                                a().createElement(Fe, {
                                                                    text: A,
                                                                }),
                                                            c,
                                                            E,
                                                            L()
                                                        )
                                                    )
                                                )
                                      )
                            )
                        )
                    );
                },
                He = function (e) {
                    var t,
                        r = e.category,
                        n = e.className;
                    if (r)
                        switch (r) {
                            case i.TRADE_TYPES.RISE_FALL:
                            case i.TRADE_TYPES.RISE_FALL_EQUAL:
                                t = a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeCall',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypePut',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    )
                                );
                                break;
                            case i.TRADE_TYPES.HIGH_LOW:
                                t = a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeCallBarrier',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypePutBarrier',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    )
                                );
                                break;
                            case i.TRADE_TYPES.END:
                                t = a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeExpirymiss',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeExpiryrange',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    )
                                );
                                break;
                            case i.TRADE_TYPES.STAY:
                                t = a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeRange',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeUpordown',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    )
                                );
                                break;
                            case i.TRADE_TYPES.MATCH_DIFF:
                                t = a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeDigitmatch',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeDigitdiff',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    )
                                );
                                break;
                            case i.TRADE_TYPES.EVEN_ODD:
                                t = a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeDigiteven',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeDigitodd',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    )
                                );
                                break;
                            case i.TRADE_TYPES.OVER_UNDER:
                                t = a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeDigitover',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeDigitunder',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    )
                                );
                                break;
                            case i.TRADE_TYPES.TOUCH:
                                t = a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeOnetouch',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeNotouch',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    )
                                );
                                break;
                            case i.TRADE_TYPES.ASIAN:
                                t = a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeAsianu',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeAsiand',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    )
                                );
                                break;
                            case i.TRADE_TYPES.LB_CALL:
                                t = a().createElement(
                                    'div',
                                    {
                                        className: 'category-wrapper',
                                    },
                                    a().createElement(o.Icon, {
                                        icon: 'IcTradetypeLbcall',
                                        className: 'category-type',
                                        color: 'brand',
                                    })
                                );
                                break;
                            case i.TRADE_TYPES.LB_PUT:
                                t = a().createElement(
                                    'div',
                                    {
                                        className: 'category-wrapper',
                                    },
                                    a().createElement(o.Icon, {
                                        icon: 'IcTradetypeLbput',
                                        className: 'category-type',
                                        color: 'brand',
                                    })
                                );
                                break;
                            case i.TRADE_TYPES.LB_HIGH_LOW:
                                t = a().createElement(
                                    'div',
                                    {
                                        className: 'category-wrapper',
                                    },
                                    a().createElement(o.Icon, {
                                        icon: 'IcTradetypeLbhighlow',
                                        className: 'category-type',
                                        color: 'brand',
                                    })
                                );
                                break;
                            case i.TRADE_TYPES.RUN_HIGH_LOW:
                                t = a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeRunhigh',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeRunlow',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    )
                                );
                                break;
                            case i.TRADE_TYPES.RESET:
                                t = a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeResetcall',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeResetput',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    )
                                );
                                break;
                            case i.TRADE_TYPES.TICK_HIGH_LOW:
                                t = a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeTickhigh',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeTicklow',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    )
                                );
                                break;
                            case i.TRADE_TYPES.CALL_PUT_SPREAD:
                                t = a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeCallspread',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypePutspread',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    )
                                );
                                break;
                            case i.TRADE_TYPES.MULTIPLIER:
                                t = a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeMultup',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeMultdown',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    )
                                );
                                break;
                            case i.TRADE_TYPES.ACCUMULATOR:
                                t = a().createElement(
                                    'div',
                                    {
                                        className: 'category-wrapper',
                                    },
                                    a().createElement(o.Icon, {
                                        icon: 'IcTradetypeAccu',
                                        className: 'category-type',
                                        color: 'brand',
                                    })
                                );
                                break;
                            case i.TRADE_TYPES.TURBOS.LONG:
                            case i.TRADE_TYPES.TURBOS.SHORT:
                                t = a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeTurboslong',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeTurbosshort',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    )
                                );
                                break;
                            case i.TRADE_TYPES.VANILLA.CALL:
                            case i.TRADE_TYPES.VANILLA.PUT:
                                t = a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeVanillaLongCall',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: 'category-wrapper',
                                        },
                                        a().createElement(o.Icon, {
                                            icon: 'IcTradetypeVanillaLongPut',
                                            className: 'category-type',
                                            color: 'brand',
                                        })
                                    )
                                );
                                break;
                            default:
                                t = a().createElement(
                                    'div',
                                    {
                                        className: 'category-wrapper',
                                    },
                                    a().createElement(o.Icon, {
                                        icon: 'IcUnknown',
                                        className: 'category-type',
                                        color: 'brand',
                                    })
                                );
                        }
                    return a().createElement(
                        'div',
                        {
                            className: be()('categories-container', n),
                            'data-testid': 'dt-categories-container',
                        },
                        t
                    );
                };

            function Ue(e) {
                return (
                    (Ue =
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
                    Ue(e)
                );
            }

            function Ye(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }

            function Be(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? Ye(Object(r), !0).forEach(function (t) {
                              Ve(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                          : Ye(Object(r)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                            });
                }
                return e;
            }

            function Ve(e, t, r) {
                return (
                    (t = (function (e) {
                        var t = (function (e) {
                            if ('object' != Ue(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var r = t.call(e, 'string');
                                if ('object' != Ue(r)) return r;
                                throw new TypeError('@@toPrimitive must return a primitive value.');
                            }
                            return String(e);
                        })(e);
                        return 'symbol' == Ue(t) ? t : t + '';
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
            const Ge = function (e) {
                var t = e.contract_types,
                    r = e.handleSelect,
                    n = e.value;
                return a().createElement(
                    a().Fragment,
                    null,
                    t.map(function (e) {
                        var t = Be(
                            Be({}, e),
                            {},
                            {
                                value: Array.isArray(e.value) ? e.value[0] : e.value,
                            }
                        );
                        return a().createElement(
                            'div',
                            {
                                id: 'dt_contract_'.concat(t.value, '_item'),
                                'data-testid': 'dt_contract_item',
                                key: t.value,
                                className: be()('contract-type-item', {
                                    'contract-type-item--selected': e.value.includes(null != n ? n : ''),
                                }),
                                onClick: function (e) {
                                    return null == r ? void 0 : r(t, e);
                                },
                            },
                            a().createElement(He, {
                                category: t.value,
                                className: 'contract-type-item__icon-wrapper',
                            }),
                            a().createElement(
                                o.Text,
                                {
                                    size: 'xs',
                                    className: 'contract-type-item__title',
                                },
                                t.text
                            )
                        );
                    })
                );
            };

            function We(e) {
                return (
                    (We =
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
                    We(e)
                );
            }

            function qe(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }

            function Ke(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? qe(Object(r), !0).forEach(function (t) {
                              $e(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                          : qe(Object(r)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                            });
                }
                return e;
            }

            function $e(e, t, r) {
                return (
                    (t = (function (e) {
                        var t = (function (e) {
                            if ('object' != We(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var r = t.call(e, 'string');
                                if ('object' != We(r)) return r;
                                throw new TypeError('@@toPrimitive must return a primitive value.');
                            }
                            return String(e);
                        })(e);
                        return 'symbol' == We(t) ? t : t + '';
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

            function Xe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var Qe = function (e) {
                var t = e.children;
                return a().createElement(a().Fragment, null, t);
            };
            (Qe.Dialog = function (e) {
                var t = e.categories,
                    r = e.children,
                    n = e.info_banner,
                    i = e.is_info_dialog_open,
                    c = e.is_open,
                    s = e.item,
                    u = e.selected,
                    m = e.title,
                    p = e.onBackButtonClick,
                    d = e.onCategoryClick,
                    _ = e.onChangeInput,
                    y = e.onClose,
                    h = e.onSearchBlur,
                    v = e.show_loading,
                    b = e.learn_more_banner,
                    E = e.hide_back_button,
                    g = (0, f.Y)().isMobile,
                    x = i
                        ? a().createElement(Pe, {
                              title: m || (null == s ? void 0 : s.text) || '',
                              onClickBack: p,
                              text_size: 'xs',
                              should_render_arrow: !E,
                          })
                        : (0, l.localize)('Trade types');
                return g
                    ? a().createElement(
                          a().Fragment,
                          null,
                          a().createElement('span', {
                              className: 'contract-type-widget__select-arrow',
                          }),
                          a().createElement(
                              o.MobileDialog,
                              {
                                  info_banner: i ? '' : n,
                                  portal_element_id: 'modal_root',
                                  title: x,
                                  header_classname: 'contract-type-widget__header',
                                  wrapper_classname: i ? 'contracts-modal-info' : 'contracts-modal-list',
                                  visible: c,
                                  onClose: y,
                                  has_content_scroll: !i,
                                  learn_more_banner: i ? '' : b,
                              },
                              r
                          )
                      )
                    : a().createElement(
                          De,
                          {
                              info_banner: n,
                              is_info_dialog_open: i,
                              is_open: c,
                              item: s,
                              selected: u,
                              categories: t,
                              onSearchBlur: h,
                              onClose: y,
                              onBackButtonClick: p,
                              onChangeInput: _,
                              onCategoryClick: d,
                              show_loading: v,
                              learn_more_banner: b,
                              hide_back_button: E,
                              title: m,
                          },
                          r
                      );
            }),
                (Qe.Display = function (e) {
                    var t,
                        r,
                        n,
                        i = e.is_open,
                        c = e.name,
                        l = e.list,
                        s = e.onClick,
                        u = e.value,
                        m = (0, f.Y)().isMobile;
                    return a().createElement(
                        'div',
                        {
                            'data-testid': 'dt_contract_dropdown',
                            className: be()('contract-type-widget__display', {
                                'contract-type-widget__display--clicked': i,
                            }),
                            onClick: s,
                        },
                        a().createElement(He, {
                            category: u,
                            className: 'contract-type-widget__icon-wrapper',
                        }),
                        a().createElement(
                            'span',
                            {
                                'data-name': c,
                                'data-value': u,
                            },
                            null ===
                                (t = (0, _.WW)(l, {
                                    value: u,
                                })) ||
                                void 0 === t ||
                                null === (r = t.contract_types) ||
                                void 0 === r ||
                                null ===
                                    (n = r.find(function (e) {
                                        return e.value.includes(u);
                                    })) ||
                                void 0 === n
                                ? void 0
                                : n.text
                        ),
                        m
                            ? a().createElement(o.Icon, {
                                  icon: 'IcChevronRight',
                                  size: 20,
                                  className: 'contract-type-widget__select-arrow--right',
                              })
                            : a().createElement(o.Icon, {
                                  icon: 'IcChevronDown',
                                  className: be()(
                                      'contract-type-widget__select-arrow',
                                      'contract-type-widget__select-arrow--left'
                                  ),
                              })
                    );
                }),
                (Qe.List = function (e) {
                    var t = e.handleSelect,
                        r = e.list,
                        n = e.should_show_info_banner,
                        c = e.value;
                    return a().createElement(
                        a().Fragment,
                        null,
                        r.map(function (e, r) {
                            var l = e.contract_types,
                                s =
                                    null == l
                                        ? void 0
                                        : l.reduce(function (e, t) {
                                              var r = t.value,
                                                  n = i.TRADE_TYPES.RISE_FALL,
                                                  a = i.TRADE_TYPES.RISE_FALL_EQUAL,
                                                  o = i.TRADE_TYPES.TURBOS,
                                                  c = i.TRADE_TYPES.VANILLA;
                                              return (
                                                  t.value === n &&
                                                      l.some(function (e) {
                                                          return e.value === a;
                                                      }) &&
                                                      (r = [n, a]),
                                                  t.value === o.LONG &&
                                                      l.some(function (e) {
                                                          return e.value === o.SHORT;
                                                      }) &&
                                                      (r = [o.LONG, o.SHORT]),
                                                  t.value === c.CALL &&
                                                      l.some(function (e) {
                                                          return e.value === c.PUT;
                                                      }) &&
                                                      (r = [c.CALL, c.PUT]),
                                                  [o.SHORT, c.PUT, a].includes(t.value)
                                                      ? e
                                                      : [].concat(
                                                            (function (e) {
                                                                return (
                                                                    (function (e) {
                                                                        if (Array.isArray(e)) return Xe(e);
                                                                    })(e) ||
                                                                    (function (e) {
                                                                        if (
                                                                            ('undefined' != typeof Symbol &&
                                                                                null != e[Symbol.iterator]) ||
                                                                            null != e['@@iterator']
                                                                        )
                                                                            return Array.from(e);
                                                                    })(e) ||
                                                                    (function (e, t) {
                                                                        if (e) {
                                                                            if ('string' == typeof e) return Xe(e, t);
                                                                            var r = {}.toString.call(e).slice(8, -1);
                                                                            return (
                                                                                'Object' === r &&
                                                                                    e.constructor &&
                                                                                    (r = e.constructor.name),
                                                                                'Map' === r || 'Set' === r
                                                                                    ? Array.from(e)
                                                                                    : 'Arguments' === r ||
                                                                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                            r
                                                                                        )
                                                                                      ? Xe(e, t)
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
                                                            })(e),
                                                            [
                                                                Ke(
                                                                    Ke({}, t),
                                                                    {},
                                                                    {
                                                                        value: r,
                                                                    }
                                                                ),
                                                            ]
                                                        )
                                              );
                                          }, []);
                            return a().createElement(
                                'div',
                                {
                                    key: e.key,
                                    className: be()('contract-type-list', {
                                        'contract-type-list--unavailable-category': e.is_unavailable,
                                        'contract-type-list--no-top-padding': n && 0 === r,
                                    }),
                                    'data-testid': 'dt_contract_list',
                                },
                                a().createElement(
                                    'div',
                                    {
                                        className: 'contract-type-item__container',
                                    },
                                    a().createElement(
                                        o.Text,
                                        {
                                            size: 'xs',
                                            className: 'contract-type-list__label',
                                        },
                                        e.label
                                    )
                                ),
                                a().createElement(
                                    'div',
                                    {
                                        className: 'contract-type-list__wrapper',
                                    },
                                    a().createElement(Ge, {
                                        contract_types: s,
                                        handleSelect: e.is_unavailable ? void 0 : t,
                                        value: c,
                                    })
                                )
                            );
                        })
                    );
                }),
                (Qe.Info = Ie);
            const Je = Qe;

            function Ze(e) {
                return (
                    (Ze =
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
                    Ze(e)
                );
            }

            function et(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return it(e);
                    })(e) ||
                    (function (e) {
                        if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
                            return Array.from(e);
                    })(e) ||
                    ot(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }

            function tt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }

            function rt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? tt(Object(r), !0).forEach(function (t) {
                              nt(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                          : tt(Object(r)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                            });
                }
                return e;
            }

            function nt(e, t, r) {
                return (
                    (t = (function (e) {
                        var t = (function (e) {
                            if ('object' != Ze(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var r = t.call(e, 'string');
                                if ('object' != Ze(r)) return r;
                                throw new TypeError('@@toPrimitive must return a primitive value.');
                            }
                            return String(e);
                        })(e);
                        return 'symbol' == Ze(t) ? t : t + '';
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

            function at(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var r =
                            null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != r) {
                            var n,
                                a,
                                o,
                                i,
                                c = [],
                                l = !0,
                                s = !1;
                            try {
                                if (((o = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                } else for (; !(l = (n = o.call(r)).done) && (c.push(n.value), c.length !== t); l = !0);
                            } catch (e) {
                                (s = !0), (a = e);
                            } finally {
                                try {
                                    if (!l && null != r.return && ((i = r.return()), Object(i) !== i)) return;
                                } finally {
                                    if (s) throw a;
                                }
                            }
                            return c;
                        }
                    })(e, t) ||
                    ot(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }

            function ot(e, t) {
                if (e) {
                    if ('string' == typeof e) return it(e, t);
                    var r = {}.toString.call(e).slice(8, -1);
                    return (
                        'Object' === r && e.constructor && (r = e.constructor.name),
                        'Map' === r || 'Set' === r
                            ? Array.from(e)
                            : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                              ? it(e, t)
                              : void 0
                    );
                }
            }

            function it(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var ct = (0, u.observer)(function (e) {
                var t,
                    r,
                    n,
                    c,
                    s,
                    u = e.name,
                    f = e.value,
                    y = e.list,
                    h = e.onChange,
                    v = e.languageChanged,
                    b = e.unavailable_trade_types_list,
                    E = void 0 === b ? [] : b,
                    g = (0, m.A)(),
                    x = g.active_symbols.active_symbols,
                    w = g.ui.is_mobile,
                    T = (0, d.P)(),
                    A = T.symbol,
                    S = T.contract_type,
                    O = a().useRef(null),
                    N = at(a().useState(), 2),
                    k = N[0],
                    z = N[1],
                    L = at(a().useState(!1), 2),
                    P = L[0],
                    I = L[1],
                    C = at(a().useState(!1), 2),
                    R = C[0],
                    j = C[1],
                    F = at(a().useState('All'), 2),
                    M = F[0],
                    D = F[1],
                    H = at(a().useState(''), 2),
                    U = H[0],
                    Y = H[1],
                    B = at(a().useState(null), 2),
                    V = B[0],
                    G = B[1],
                    W = a().useRef(),
                    q = a().useCallback(
                        function (e) {
                            var t;
                            w ||
                                !O ||
                                (null !== (t = O.current) && void 0 !== t && t.contains(e.target)) ||
                                !k ||
                                (z(!1),
                                G(
                                    rt(
                                        rt({}, V),
                                        {},
                                        {
                                            value: f,
                                        }
                                    )
                                ));
                        },
                        [V, f, k, w]
                    ),
                    K = function (e) {
                        var t, r;
                        return null === (t = (0, _.iJ)(Q(), e)) ||
                            void 0 === t ||
                            null ===
                                (r = t.find(function (t) {
                                    return t.value === e.value;
                                })) ||
                            void 0 === r
                            ? void 0
                            : r.text;
                    };
                a().useEffect(function () {
                    return function () {
                        clearTimeout(W.current);
                    };
                }, []),
                    a().useEffect(
                        function () {
                            return (
                                document.addEventListener('mousedown', q),
                                function () {
                                    document.removeEventListener('mousedown', q);
                                }
                            );
                        },
                        [q]
                    ),
                    a().useEffect(
                        function () {
                            'boolean' == typeof k &&
                                k &&
                                !P &&
                                p.Analytics.trackEvent('ce_trade_types_form', {
                                    action: 'open',
                                    form_source: 'contract_set_up_form',
                                    form_name: 'default',
                                });
                        },
                        [k]
                    ),
                    a().useEffect(
                        function () {
                            if (S) {
                                var e,
                                    t =
                                        null !==
                                            (e = nt(
                                                nt({}, i.TRADE_TYPES.MULTIPLIER, i.CONTRACT_STORAGE_VALUES.MULTIPLIERS),
                                                i.TRADE_TYPES.ACCUMULATOR,
                                                i.CONTRACT_STORAGE_VALUES.ACCUMULATORS
                                            )[S]) && void 0 !== e
                                            ? e
                                            : i.CONTRACT_STORAGE_VALUES.OPTIONS;
                                localStorage.setItem('contract_type_value', t);
                            }
                        },
                        [S]
                    );
                var $ = function (e, t) {
                        var r = Q(),
                            n = (0, _.WW)(r, e).key;
                        if ('id' in t.target && 'info-icon' !== t.target.id && e) {
                            var a = /_btn$/.test(t.target.id) ? 'info_new' : 'trade_type';
                            z(!1),
                                I(!1),
                                G(e),
                                D(n),
                                h({
                                    target: {
                                        name: u,
                                        value: e.value,
                                    },
                                }),
                                window.hj && window.hj('event', 'selected_'.concat(e.value, '_contract_type')),
                                'trade_type' === a
                                    ? p.Analytics.trackEvent('ce_trade_types_form', {
                                          action: 'choose_trade_type',
                                          subform_name: a,
                                          tab_name: M,
                                          trade_type_name: K(e),
                                          form_name: 'default',
                                      })
                                    : p.Analytics.trackEvent('ce_trade_types_form', {
                                          action: 'choose_trade_type',
                                          subform_name: a,
                                          trade_type_name: K(e),
                                          form_name: 'default',
                                      });
                        }
                    },
                    X = function () {
                        z(!k),
                            (W.current = setTimeout(function () {
                                j(!1), I(!1);
                            }, 200)),
                            G(
                                rt(
                                    rt({}, V),
                                    {},
                                    {
                                        value: f,
                                    }
                                )
                            );
                    },
                    Q = function () {
                        var e = y && (0, _.g)(y),
                            t = (0, _.g)(E),
                            r = null == e ? void 0 : e.concat(t),
                            n =
                                null == r
                                    ? void 0
                                    : r.filter(function (e) {
                                          return e.label === (0, l.localize)('Accumulators');
                                      }),
                            a =
                                null == r
                                    ? void 0
                                    : r.filter(function (e) {
                                          return e.label === (0, l.localize)('Multipliers');
                                      }),
                            o =
                                null == r
                                    ? void 0
                                    : r.filter(function (e) {
                                          var t = e.label;
                                          return (
                                              t !== (0, l.localize)('Multipliers') &&
                                              t !== (0, l.localize)('Accumulators')
                                          );
                                      }),
                            i = [],
                            c = (0, _.PB)();
                        return (
                            y &&
                                y.length > 0 &&
                                i.push({
                                    label: (0, l.localize)('All'),
                                    contract_categories: r,
                                    key: 'All',
                                    icon: '',
                                }),
                            a &&
                                a.length > 0 &&
                                i.push({
                                    label: (0, l.localize)('Multipliers'),
                                    contract_categories: a,
                                    key: 'Multipliers',
                                    icon: '',
                                }),
                            o &&
                                o.length > 0 &&
                                i.push({
                                    label: (0, l.localize)('Options'),
                                    contract_categories: o,
                                    component: null,
                                    key: 'Options',
                                    icon: '',
                                }),
                            n &&
                                n.length > 0 &&
                                i.push({
                                    label: (0, l.localize)('Accumulators'),
                                    contract_categories: n,
                                    component: null,
                                    key: 'Accumulators',
                                    icon: '',
                                }),
                            i.map(function (e) {
                                var t,
                                    r,
                                    n =
                                        null == e || null === (t = e.contract_categories) || void 0 === t
                                            ? void 0
                                            : t.reduce(function (e, t) {
                                                  return [].concat(et(e), et(t.contract_types));
                                              }, []),
                                    a = e.key ? c[e.key] : e.icon,
                                    o = e.contract_categories;
                                return (
                                    U &&
                                        (o =
                                            null == e || null === (r = e.contract_categories) || void 0 === r
                                                ? void 0
                                                : r
                                                      .filter(function (e) {
                                                          return e.contract_types.find(function (e) {
                                                              var t;
                                                              return null === (t = e.text) || void 0 === t
                                                                  ? void 0
                                                                  : t.toLowerCase().includes(U.toLowerCase());
                                                          });
                                                      })
                                                      .map(function (e) {
                                                          return rt(
                                                              rt({}, e),
                                                              {},
                                                              {
                                                                  contract_types: e.contract_types.filter(function (e) {
                                                                      var t;
                                                                      return null === (t = e.text) || void 0 === t
                                                                          ? void 0
                                                                          : t.toLowerCase().includes(U.toLowerCase());
                                                                  }),
                                                              }
                                                          );
                                                      })),
                                    rt(
                                        rt({}, e),
                                        {},
                                        {
                                            contract_types: n,
                                            icon: a,
                                            contract_categories: o,
                                        }
                                    )
                                );
                            })
                        );
                    },
                    J = function () {
                        var e;
                        return (
                            (null === (e = Q()) || void 0 === e
                                ? void 0
                                : e.find(function (e) {
                                      return e.key === M;
                                  })) || Q()[0]
                        ).contract_categories;
                    },
                    Z = !(
                        null === (t = J()) ||
                        void 0 === t ||
                        !t.some(function (e) {
                            return e.is_unavailable;
                        })
                    ),
                    ee =
                        Number(
                            null === (r = Q()[0]) ||
                                void 0 === r ||
                                null === (n = r.contract_categories) ||
                                void 0 === n
                                ? void 0
                                : n.length
                        ) > 1
                            ? (0, l.localize)('Tutorial')
                            : K(
                                  V || {
                                      value: f,
                                  }
                              ),
                    te = a().createElement(o.InlineMessage, {
                        size: w ? 'sm' : 'xs',
                        type: 'information',
                        message: a().createElement(l.Localize, {
                            i18n_default_text: 'Some trade types are unavailable for {{symbol}}.',
                            values: {
                                symbol:
                                    null ===
                                        (c = x.find(function (e) {
                                            return e.symbol === A;
                                        })) || void 0 === c
                                        ? void 0
                                        : c.display_name,
                            },
                            shouldUnescape: !0,
                        }),
                    });
                return a().createElement(
                    a().Fragment,
                    null,
                    a().createElement(
                        o.Text,
                        {
                            as: 'button',
                            line_height: 's',
                            size: 'xxxs',
                            className: 'learn-more_title',
                            onClick: function () {
                                z(!0),
                                    I(!0),
                                    G(
                                        V || {
                                            value: f,
                                        }
                                    ),
                                    p.Analytics.trackEvent('ce_trade_types_form', {
                                        action: 'info_open',
                                        tab_name: M,
                                        trade_type_name: K(
                                            V || {
                                                value: f,
                                            }
                                        ),
                                    }),
                                    j(!0);
                            },
                        },
                        a().createElement(l.Localize, {
                            i18n_default_text: 'Learn about this trade type',
                        })
                    ),
                    a().createElement(
                        'div',
                        {
                            'data-testid': 'dt_contract_widget',
                            id: 'dt_contract_dropdown',
                            className: 'contract-type-widget contract-type-widget--'.concat(f, ' dropdown--left'),
                            ref: O,
                            tabIndex: 0,
                        },
                        a().createElement(Je.Display, {
                            is_open: k || P,
                            list: y,
                            name: null != u ? u : '',
                            onClick: X,
                            value: f,
                        }),
                        a().createElement(
                            Je.Dialog,
                            {
                                is_info_dialog_open: P,
                                is_open: !!k,
                                item: V || {
                                    value: f,
                                },
                                categories: Q(),
                                selected: M || (null === (s = Q()[0]) || void 0 === s ? void 0 : s.key),
                                onBackButtonClick: function () {
                                    I(!1),
                                        G(
                                            rt(
                                                rt({}, V),
                                                {},
                                                {
                                                    value: f,
                                                }
                                            )
                                        );
                                },
                                onSearchBlur: function () {
                                    U &&
                                        p.Analytics.trackEvent('ce_trade_types_form', {
                                            action: 'search',
                                            search_string: U,
                                        });
                                },
                                onClose: function () {
                                    X();
                                },
                                onChangeInput: function (e) {
                                    return Y(e);
                                },
                                onCategoryClick: function (e) {
                                    var t = e.key;
                                    t && D(t);
                                },
                                show_loading: v,
                                title: ee,
                                hide_back_button: R,
                                info_banner: Z && te,
                                learn_more_banner: a().createElement(
                                    'button',
                                    {
                                        onClick: function () {
                                            return (
                                                (e = V || {
                                                    value: f,
                                                }),
                                                I(!P),
                                                G(e),
                                                void p.Analytics.trackEvent('ce_trade_types_form', {
                                                    action: 'info_open',
                                                    tab_name: M,
                                                    trade_type_name: K(e),
                                                })
                                            );
                                            var e;
                                        },
                                        className: 'learn-more',
                                    },
                                    a().createElement(
                                        o.Text,
                                        {
                                            size: w ? 'xxs' : 'xs',
                                            line_height: w ? 'l' : 'xl',
                                        },
                                        a().createElement(l.Localize, {
                                            i18n_default_text: 'Learn more about trade types',
                                        })
                                    ),
                                    a().createElement(o.Icon, {
                                        icon: 'IcChevronRight',
                                        size: 16,
                                    })
                                ),
                            },
                            P
                                ? a().createElement(Je.Info, {
                                      handleSelect: $,
                                      item: V || {
                                          value: f,
                                      },
                                      selected_value: f,
                                      list: Q(),
                                      info_banner: te,
                                  })
                                : a().createElement(Je.List, {
                                      handleSelect: $,
                                      list: J(),
                                      should_show_info_banner: Z,
                                      value: f,
                                  })
                        )
                    )
                );
            });
            const lt = ct;

            function st(e) {
                return (
                    (st =
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
                    st(e)
                );
            }

            function ut(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }

            function mt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? ut(Object(r), !0).forEach(function (t) {
                              pt(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                          : ut(Object(r)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                            });
                }
                return e;
            }

            function pt(e, t, r) {
                return (
                    (t = (function (e) {
                        var t = (function (e) {
                            if ('object' != st(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var r = t.call(e, 'string');
                                if ('object' != st(r)) return r;
                                throw new TypeError('@@toPrimitive must return a primitive value.');
                            }
                            return String(e);
                        })(e);
                        return 'symbol' == st(t) ? t : t + '';
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
            var dt = (0, u.observer)(function () {
                var e = (0, d.P)(),
                    t = e.contract_type,
                    r = e.contract_types_list,
                    n = e.is_mobile_digit_view_selected,
                    u = e.non_available_contract_types_list,
                    p = e.onChange,
                    f = e.symbol,
                    y = (0, m.A)().common.current_language,
                    h = (0, _.Hj)(r, i.unsupported_contract_types_list),
                    v = (0, _.Hj)(u, i.unsupported_contract_types_list).map(function (e) {
                        return mt(
                            mt({}, e),
                            {},
                            {
                                is_unavailable: !0,
                            }
                        );
                    }),
                    b = (0, o.usePrevious)(y);
                return a().createElement(
                    a().Fragment,
                    null,
                    a().createElement(
                        o.MobileWrapper,
                        null,
                        (0, c.E)(t) &&
                            a().createElement(
                                s.u,
                                {
                                    className: 'digits__toast-info',
                                    is_open: n,
                                    type: 'info',
                                    timeout: 3e3,
                                },
                                a().createElement(l.Localize, {
                                    i18n_default_text: 'Last digit stats for latest 1000 ticks for {{underlying_name}}',
                                    values: {
                                        underlying_name: (0, i.getMarketNamesMap)()[
                                            null == f ? void 0 : f.toUpperCase()
                                        ],
                                    },
                                })
                            )
                    ),
                    a().createElement(lt, {
                        list: h,
                        name: 'contract_type',
                        onChange: p,
                        value: t,
                        languageChanged: !(!b || b === y),
                        unavailable_trade_types_list: v,
                    })
                );
            });
            const _t = dt;
        },
        './src/Modules/Trading/Containers/purchase.tsx': (e, t, r) => {
            r.d(t, {
                A: () => L,
            });
            var n = r('react'),
                a = r.n(n),
                o = r('@deriv/shared'),
                i = r('@deriv/components'),
                c = r('@deriv/translations'),
                l = r('./src/App/Components/Form/fieldset.tsx'),
                s = r('mobx-react-lite'),
                u = r('../stores/src/useStore.ts'),
                m = (0, s.observer)(function (e) {
                    var t = e.contract_info,
                        r = e.current_stake,
                        n = e.currency,
                        s = e.is_disabled,
                        m = e.is_sell_requested,
                        p = e.onClick,
                        d = (0, u.A)().ui.is_dark_mode_on,
                        _ = t && (0, o.isValidToSell)(t);
                    return a().createElement(
                        l.A,
                        {
                            className: 'trade-container__fieldset purchase-container__sell-button',
                        },
                        a().createElement(
                            i.Button,
                            {
                                className: 'dc-btn--sell dc-btn__large',
                                is_disabled: s || !_ || m,
                                onClick: p,
                                secondary: !0,
                            },
                            a().createElement(
                                'span',
                                {
                                    className: 'purchase-container__sell-button__stake',
                                },
                                (0, o.getCardLabels)().SELL
                            ),
                            r &&
                                a().createElement(i.Money, {
                                    amount: r,
                                    currency: n,
                                    show_currency: !0,
                                })
                        ),
                        a().createElement(
                            i.Text,
                            {
                                size: 'xxxs',
                                line_height: 's',
                                as: 'p',
                                color: d ? 'less-prominent' : 'disabled',
                                className: 'purchase-container__notification',
                            },
                            a().createElement(c.Localize, {
                                i18n_default_text:
                                    '<0>Note:</0> You can close your trade anytime. Be aware of slippage risk.',
                                components: [
                                    a().createElement(i.Text, {
                                        key: 0,
                                        weight: 'bold',
                                        size: 'xxxs',
                                        line_height: 's',
                                        color: d ? 'less-prominent' : 'disabled',
                                    }),
                                ],
                            })
                        )
                    );
                });
            const p = m;
            var d = r('../../node_modules/classnames/index.js'),
                _ = r.n(d),
                f = r('./src/Stores/useTraderStores.tsx');

            function y(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var r =
                            null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != r) {
                            var n,
                                a,
                                o,
                                i,
                                c = [],
                                l = !0,
                                s = !1;
                            try {
                                if (((o = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                } else for (; !(l = (n = o.call(r)).done) && (c.push(n.value), c.length !== t); l = !0);
                            } catch (e) {
                                (s = !0), (a = e);
                            } finally {
                                try {
                                    if (!l && null != r.return && ((i = r.return()), Object(i) !== i)) return;
                                } finally {
                                    if (s) throw a;
                                }
                            }
                            return c;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return h(e, t);
                            var r = {}.toString.call(e).slice(8, -1);
                            return (
                                'Object' === r && e.constructor && (r = e.constructor.name),
                                'Map' === r || 'Set' === r
                                    ? Array.from(e)
                                    : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                      ? h(e, t)
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

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            const v = (0, s.observer)(function (e) {
                var t = e.proposal_info,
                    r = e.data_testid,
                    n = (0, f.P)(),
                    l = n.currency,
                    s = n.has_cancellation,
                    u = t.id,
                    m = t.cancellation,
                    p = t.has_error,
                    d = null != p ? p : !u,
                    h = y(a().useState(!1), 2),
                    v = h[0],
                    b = h[1],
                    E = a().useRef(null);
                return (
                    a().useEffect(
                        function () {
                            if (E.current) {
                                var e,
                                    t = Number(
                                        null === (e = E.current.parentElement) || void 0 === e ? void 0 : e.clientHeight
                                    );
                                (t > 21 && (0, o.isDesktop)()) ||
                                ((t > 21 || (0, o.getDecimalPlaces)(l) > 2) && (0, o.isMobile)())
                                    ? b(!0)
                                    : b(!1);
                            }
                        },
                        [m, l, v, b]
                    ),
                    s
                        ? a().createElement(
                              'div',
                              {
                                  className: _()('trade-container__cancel-deal-info', {
                                      'trade-container__cancel-deal-info--row-layout': v,
                                  }),
                                  'data-testid': r,
                              },
                              m &&
                                  a().createElement(
                                      a().Fragment,
                                      null,
                                      a().createElement(
                                          'div',
                                          {
                                              className: 'trade-container__price-info-basis',
                                              ref: E,
                                          },
                                          (0, c.localize)('Deal cancel. fee')
                                      ),
                                      a().createElement(
                                          'div',
                                          {
                                              className: 'trade-container__price-info-value',
                                          },
                                          !d &&
                                              a().createElement(i.Money, {
                                                  amount: m.ask_price,
                                                  className: 'trade-container__price-info-currency',
                                                  currency: l,
                                                  show_currency: !0,
                                              })
                                      )
                                  )
                          )
                        : null
                );
            });
            var b = r('./src/Modules/Trading/Components/Form/Purchase/value-movement.tsx'),
                E = r('../../node_modules/@deriv-com/ui/dist/hooks/useDevice.js');
            const g = function (e) {
                var t,
                    r = e.basis,
                    n = e.currency,
                    l = e.growth_rate,
                    s = e.is_accumulator,
                    u = e.is_loading,
                    m = e.is_multiplier,
                    p = e.is_turbos,
                    d = e.is_vanilla_fx,
                    f = e.is_vanilla,
                    y = e.proposal_info,
                    h = e.should_fade,
                    g = e.type,
                    x = (0, E.Y)().isMobile,
                    w = (0, o.getLocalizedBasis)(),
                    T = d ? w.payout_per_pip : w.payout_per_point,
                    A =
                        (c.Localize,
                        d
                            ? a().createElement(c.Localize, {
                                  i18n_default_text:
                                      'The payout at expiry is equal to the payout per pip multiplied by the difference, <0>in pips</0>, between the final price and the strike price.',
                                  components: [
                                      a().createElement('strong', {
                                          key: 0,
                                      }),
                                  ],
                              })
                            : a().createElement(c.Localize, {
                                  i18n_default_text:
                                      'The payout at expiry is equal to the payout per point multiplied by the difference between the final price and the strike price.',
                              })),
                    S = y.has_error || !y.id,
                    O = f
                        ? T
                        : S
                          ? (function () {
                                switch (r) {
                                    case 'stake':
                                        return f ? T : w.payout;
                                    case 'payout':
                                        return w.stake;
                                    default:
                                        return r;
                                }
                            })()
                          : (null == y || null === (t = y.obj_contract_basis) || void 0 === t ? void 0 : t.text) || '',
                    N = y.message,
                    k = y.obj_contract_basis,
                    z = y.stake;
                return a().createElement(
                    'div',
                    {
                        className: 'trade-container__price',
                    },
                    a().createElement(
                        'div',
                        {
                            id: 'dt_purchase_'.concat(g.toLowerCase(), '_price'),
                            'data-testid': 'dt_purchase_'.concat(g.toLowerCase(), '_price'),
                            className: _()('trade-container__price-info', {
                                'trade-container__price-info--disabled': S,
                                'trade-container__price-info--slide': u && !h,
                                'trade-container__price-info--fade': u && h,
                            }),
                        },
                        m || s
                            ? a().createElement(
                                  a().Fragment,
                                  null,
                                  !s &&
                                      !x &&
                                      a().createElement(v, {
                                          proposal_info: y,
                                      }),
                                  x &&
                                      a().createElement(
                                          'div',
                                          {
                                              className: 'trade-container__price-info-wrapper',
                                          },
                                          a().createElement(
                                              'div',
                                              {
                                                  className: 'btn-purchase__text_wrapper',
                                              },
                                              a().createElement(
                                                  i.Text,
                                                  {
                                                      size: 'xs',
                                                      weight: 'bold',
                                                      color: 'colored-background',
                                                  },
                                                  s
                                                      ? !u && ''.concat((0, o.getGrowthRatePercentage)(l), '%')
                                                      : a().createElement(i.Money, {
                                                            amount: z,
                                                            currency: n,
                                                            show_currency: !0,
                                                        })
                                              )
                                          )
                                      )
                              )
                            : !m &&
                                  !s &&
                                  !p &&
                                  k &&
                                  a().createElement(
                                      a().Fragment,
                                      null,
                                      a().createElement(
                                          'div',
                                          {
                                              className: 'trade-container__price-info-basis',
                                          },
                                          O
                                      ),
                                      x
                                          ? a().createElement(
                                                'div',
                                                {
                                                    className: 'trade-container__price-info-wrapper',
                                                },
                                                a().createElement(b.A, {
                                                    has_error_or_not_loaded: S,
                                                    proposal_info: y,
                                                    currency: (0, o.getCurrencyDisplayCode)(n),
                                                    is_vanilla: f,
                                                })
                                            )
                                          : a().createElement(b.A, {
                                                has_error_or_not_loaded: S,
                                                proposal_info: y,
                                                currency: (0, o.getCurrencyDisplayCode)(n),
                                                is_vanilla: f,
                                            })
                                  )
                    ),
                    !m &&
                        !s &&
                        !x &&
                        a().createElement(i.Popover, {
                            alignment: 'left',
                            icon: 'info',
                            id: 'dt_purchase_'.concat(g.toLowerCase(), '_info'),
                            is_bubble_hover_enabled: !0,
                            margin: 216,
                            message: S ? '' : f ? A : N,
                            relative_render: !0,
                        })
                );
            };
            var x = r('../hooks/src/useMFAccountStatus.ts'),
                w = function (e) {
                    var t = e.should_fade,
                        r = e.is_loading,
                        n = e.type,
                        c = e.is_high_low;
                    return a().createElement(
                        'div',
                        {
                            className: 'btn-purchase__text_wrapper',
                        },
                        a().createElement(
                            i.Text,
                            {
                                size: 'xs',
                                weight: 'bold',
                                color: 'colored-background',
                            },
                            !t && r
                                ? ''
                                : (0, o.getContractTypeDisplay)(n, {
                                      isHighLow: c,
                                      showButtonName: !0,
                                  })
                        )
                    );
                },
                T = function (e) {
                    var t = e.type;
                    return a().createElement(
                        'div',
                        {
                            className: 'btn-purchase__icon_wrapper',
                        },
                        a().createElement(i.IconTradeTypes, {
                            type: t,
                            className: 'btn-purchase__icon',
                            color: 'active',
                        })
                    );
                };
            const A = function (e) {
                var t,
                    r = e.basis,
                    n = e.buy_info,
                    c = e.currency,
                    l = e.growth_rate,
                    s = e.has_deal_cancellation,
                    m = e.index,
                    p = e.info,
                    d = e.is_accumulator,
                    f = e.is_disabled,
                    y = e.is_high_low,
                    h = e.is_loading,
                    v = e.is_multiplier,
                    b = e.is_proposal_empty,
                    A = e.is_turbos,
                    S = e.is_vanilla_fx,
                    O = e.is_vanilla,
                    N = e.onClickPurchase,
                    k = e.purchased_states_arr,
                    z = e.setPurchaseState,
                    L = e.should_fade,
                    P = e.type,
                    I = (0, u.A)().ui.setIsMFVericationPendingModal,
                    C = (0, x.A)(),
                    R = (0, E.Y)().isMobile,
                    j = function () {
                        return !L && h ? '' : y ? ''.concat(P.toLowerCase(), '_barrier') : P.toLowerCase();
                    },
                    F = (f && !h) || b;
                return (
                    v
                        ? (t = a().createElement(
                              i.Text,
                              {
                                  size: 'xs',
                                  weight: 'bold',
                                  color: 'colored-background',
                              },
                              a().createElement(i.Money, {
                                  amount: p.stake,
                                  currency: c,
                                  show_currency: !0,
                              })
                          ))
                        : O ||
                          A ||
                          d ||
                          (t = a().createElement(
                              i.Text,
                              {
                                  size: 'xs',
                                  weight: 'bold',
                                  color: 'colored-background',
                              },
                              h || f ? '' : p.returns
                          )),
                    a().createElement(
                        'button',
                        {
                            disabled: f,
                            id: 'dt_purchase_'.concat(P.toLowerCase(), '_button'),
                            className: _()('btn-purchase', {
                                'btn-purchase--disabled': F || !!n.error,
                                'btn-purchase--animated--slide': h && !L,
                                'btn-purchase--animated--fade': h && L,
                                'btn-purchase--swoosh': !!k[m],
                                'btn-purchase--1': 0 === m,
                                'btn-purchase--2': 1 === m,
                                'btn-purchase--accumulator': d,
                                'btn-purchase--multiplier': v,
                                'btn-purchase--multiplier-deal-cancel': s,
                                'btn-purchase--turbos': A,
                                'btn-purchase--has-bottom-gradient-1': 0 === m && (d || O || A),
                                'btn-purchase--has-bottom-gradient-2': 1 === m && (O || A),
                            }),
                            onClick: function () {
                                v && C === o.MT5_ACCOUNT_STATUS.PENDING ? I(!0) : (z(m), N(p.id, p.stake, P, R));
                            },
                        },
                        R
                            ? a().createElement(
                                  a().Fragment,
                                  null,
                                  a().createElement(
                                      'div',
                                      {
                                          className: _()('btn-purchase__top', {
                                              'btn-purchase__top--accumulator': d,
                                              'btn-purchase--vanilla': O,
                                          }),
                                      },
                                      a().createElement(T, {
                                          type: j(),
                                      }),
                                      a().createElement(w, {
                                          should_fade: L,
                                          is_loading: h,
                                          type: P,
                                          is_high_low: y,
                                      })
                                  ),
                                  !A &&
                                      !O &&
                                      !d &&
                                      a().createElement(
                                          'div',
                                          {
                                              className: 'btn-purchase__bottom',
                                          },
                                          a().createElement(g, {
                                              basis: r,
                                              currency: c,
                                              growth_rate: l,
                                              is_accumulator: d,
                                              is_loading: h,
                                              is_multiplier: v,
                                              is_turbos: A,
                                              is_vanilla_fx: S,
                                              is_vanilla: O,
                                              should_fade: L,
                                              proposal_info: p,
                                              type: P,
                                          })
                                      )
                              )
                            : a().createElement(
                                  a().Fragment,
                                  null,
                                  a().createElement(
                                      'div',
                                      {
                                          className: 'btn-purchase__info btn-purchase__info--left',
                                      },
                                      a().createElement(
                                          'div',
                                          {
                                              className: 'btn-purchase__type-wrapper',
                                          },
                                          a().createElement(T, {
                                              type: j(),
                                          }),
                                          a().createElement(w, {
                                              should_fade: L,
                                              is_loading: h,
                                              type: P,
                                              is_high_low: y,
                                          })
                                      )
                                  ),
                                  a().createElement('div', {
                                      className: 'btn-purchase__effect-detail',
                                  }),
                                  a().createElement('div', {
                                      className: 'btn-purchase__effect-detail--arrow',
                                  }),
                                  a().createElement(
                                      'div',
                                      {
                                          className: 'btn-purchase__info btn-purchase__info--right',
                                      },
                                      a().createElement(
                                          'div',
                                          {
                                              className: 'btn-purchase__text_wrapper',
                                          },
                                          t
                                      )
                                  )
                              )
                    )
                );
            };

            function S(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var r =
                            null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != r) {
                            var n,
                                a,
                                o,
                                i,
                                c = [],
                                l = !0,
                                s = !1;
                            try {
                                if (((o = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                } else for (; !(l = (n = o.call(r)).done) && (c.push(n.value), c.length !== t); l = !0);
                            } catch (e) {
                                (s = !0), (a = e);
                            } finally {
                                try {
                                    if (!l && null != r.return && ((i = r.return()), Object(i) !== i)) return;
                                } finally {
                                    if (s) throw a;
                                }
                            }
                            return c;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return O(e, t);
                            var r = {}.toString.call(e).slice(8, -1);
                            return (
                                'Object' === r && e.constructor && (r = e.constructor.name),
                                'Map' === r || 'Set' === r
                                    ? Array.from(e)
                                    : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                      ? O(e, t)
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

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            const N = a().memo(function (e) {
                var t = e.basis,
                    r = e.buy_info,
                    n = e.currency,
                    c = e.growth_rate,
                    s = e.has_cancellation,
                    u = e.index,
                    m = e.info,
                    p = e.is_accumulator,
                    d = e.is_disabled,
                    f = e.is_high_low,
                    y = e.is_loading,
                    h = e.is_market_closed,
                    b = e.is_multiplier,
                    x = e.is_proposal_empty,
                    w = e.is_proposal_error,
                    T = e.is_turbos,
                    O = e.is_vanilla_fx,
                    N = e.is_vanilla,
                    k = e.onClickPurchase,
                    z = e.onHoverPurchase,
                    L = e.purchased_states_arr,
                    P = e.setPurchaseState,
                    I = e.type,
                    C = S(a().useState(!1), 2),
                    R = C[0],
                    j = C[1],
                    F = (0, E.Y)().isMobile;
                a().useEffect(function () {
                    j(!0);
                }, []);
                var M = a().createElement(
                    a().Fragment,
                    null,
                    b &&
                        s &&
                        F &&
                        a().createElement(v, {
                            proposal_info: m,
                        }),
                    a().createElement(A, {
                        buy_info: r,
                        currency: n,
                        info: m,
                        index: u,
                        growth_rate: c,
                        has_deal_cancellation: b && s,
                        is_accumulator: p,
                        is_disabled: d,
                        is_high_low: f,
                        is_loading: y,
                        is_multiplier: b,
                        is_vanilla: N,
                        is_vanilla_fx: O,
                        is_proposal_empty: x,
                        is_turbos: T,
                        purchased_states_arr: L,
                        onClickPurchase: k,
                        setPurchaseState: P,
                        should_fade: R,
                        type: I,
                        basis: t,
                    })
                );
                return a().createElement(
                    l.A,
                    {
                        className: _()('trade-container__fieldset', 'purchase-container__option', {
                            'purchase-container__option--has-cancellation': s,
                            'purchase-container__option--turbos': T,
                        }),
                    },
                    !F &&
                        a().createElement(
                            'div',
                            {
                                className: _()('trade-container__fieldset-wrapper', {
                                    'trade-container__fieldset-wrapper--disabled': w || d,
                                }),
                            },
                            (s || !b) &&
                                !p &&
                                !T &&
                                a().createElement(g, {
                                    basis: t,
                                    currency: n,
                                    is_loading: y,
                                    is_multiplier: b,
                                    is_turbos: T,
                                    is_vanilla: N,
                                    is_vanilla_fx: O,
                                    proposal_info: m,
                                    should_fade: R,
                                    type: I,
                                    is_accumulator: p,
                                    growth_rate: c,
                                }),
                            a().createElement(
                                'div',
                                {
                                    className: _()('btn-purchase__shadow-wrapper', {
                                        'btn-purchase__shadow-wrapper--disabled': w || d,
                                    }),
                                    onMouseEnter: function () {
                                        d || z(!0, I);
                                    },
                                    onMouseLeave: function () {
                                        d || z(!1, I);
                                    },
                                    onClick: function () {
                                        d || z(!1, I);
                                    },
                                },
                                a().createElement('div', {
                                    className: 'btn-purchase__box-shadow',
                                }),
                                w && !h
                                    ? a().createElement(
                                          i.Popover,
                                          {
                                              has_error: !0,
                                              alignment: 'left',
                                              message: m.message,
                                              is_open: w && !h,
                                              relative_render: !0,
                                              margin: 6,
                                          },
                                          M
                                      )
                                    : a().createElement(
                                          a().Fragment,
                                          null,
                                          b && !o.isTabletOs
                                              ? a().createElement(
                                                    i.Popover,
                                                    {
                                                        alignment: 'left',
                                                        is_bubble_hover_enabled: !0,
                                                        margin: 8,
                                                        message: m.message,
                                                        relative_render: !0,
                                                    },
                                                    M
                                                )
                                              : M
                                      )
                            )
                        ),
                    F &&
                        a().createElement(
                            a().Fragment,
                            null,
                            w &&
                                a().createElement(
                                    'div',
                                    {
                                        className: 'btn-purchase__error',
                                    },
                                    m.message
                                ),
                            M
                        )
                );
            });
            var k = function (e, t) {
                    switch ((0, o.getContractTypePosition)(e)) {
                        case 'top':
                            return 0;
                        case 'bottom':
                            return 1;
                        default:
                            return t;
                    }
                },
                z = (0, s.observer)(function (e) {
                    var t = e.is_market_closed,
                        r = (0, u.A)(),
                        n = r.portfolio,
                        i = n.all_positions,
                        c = n.onClickSell,
                        l = r.ui,
                        s = l.purchase_states,
                        m = l.is_mobile,
                        d = l.setPurchaseState,
                        _ = l.setIsTradingDisabledByResidenceModal,
                        y = r.client.is_account_to_be_closed_by_residence,
                        h = (0, f.P)(),
                        v = h.basis,
                        b = h.contract_type,
                        E = h.currency,
                        g = h.growth_rate,
                        x = h.has_cancellation,
                        w = h.has_open_accu_contract,
                        T = h.is_accumulator,
                        A = h.is_multiplier,
                        S = h.is_purchase_enabled,
                        O = h.is_trade_enabled,
                        z = h.is_turbos,
                        L = h.is_vanilla_fx,
                        P = h.is_vanilla,
                        I = h.onHoverPurchase,
                        C = h.onPurchase,
                        R = h.proposal_info,
                        j = h.purchase_info,
                        F = h.symbol,
                        M = h.trade_types,
                        D = h.validation_errors,
                        H = /^high_low$/.test(b.toLowerCase()),
                        U = function (e) {
                            return !(
                                Object.values(D).some(function (e) {
                                    return e.length;
                                }) ||
                                (null != e && e.has_error) ||
                                e.id
                            );
                        },
                        Y = (0, o.isEmptyObject)(R),
                        B = T
                            ? i.find(function (e) {
                                  var t = e.contract_info,
                                      r = e.type;
                                  return (0, o.isAccumulatorContract)(r) && t.underlying === F && !t.is_sold;
                              })
                            : void 0,
                        V =
                            !(null == B || !B.contract_info) &&
                            (0, o.hasContractEntered)(B.contract_info) &&
                            (0, o.isOpen)(B.contract_info),
                        G = (V && B && (0, o.getIndicativePrice)(B.contract_info)) || null,
                        W = function (e) {
                            B && c && (c(B.contract_info.contract_id), e.stopPropagation(), e.preventDefault());
                        },
                        q = [],
                        K = y
                            ? function () {
                                  return _(!0);
                              }
                            : C;
                    return (
                        Object.keys(M).forEach(function (e, r) {
                            var n = (null == R ? void 0 : R[e]) || {},
                                i = !O || !n.id || !S,
                                c = (null == n ? void 0 : n.has_error) && !(null == n || !n.message),
                                l = A || (T && !m) ? c : null == n ? void 0 : n.has_error,
                                u = a().createElement(N, {
                                    basis: v,
                                    buy_info: j,
                                    currency: E,
                                    info: n,
                                    key: e,
                                    index: k(e, r),
                                    growth_rate: g,
                                    has_cancellation: x,
                                    is_accumulator: T,
                                    is_disabled: i,
                                    is_high_low: H,
                                    is_loading: U(n),
                                    is_market_closed: t,
                                    is_multiplier: A,
                                    is_turbos: z,
                                    is_vanilla: P,
                                    is_vanilla_fx: L,
                                    is_proposal_empty: Y,
                                    is_proposal_error: !!l,
                                    purchased_states_arr: s,
                                    onHoverPurchase: I,
                                    onClickPurchase: K,
                                    setPurchaseState: d,
                                    type: e,
                                });
                            P || (T && w)
                                ? b.toUpperCase() === e
                                    ? q.push(u)
                                    : T &&
                                      w &&
                                      q.push(
                                          a().createElement(p, {
                                              is_disabled: !V,
                                              onClick: W,
                                              contract_info: null == B ? void 0 : B.contract_info,
                                              is_sell_requested: null == B ? void 0 : B.is_sell_requested,
                                              current_stake: G,
                                              currency: E,
                                              key: e,
                                          })
                                      )
                                : 'top' === (0, o.getContractTypePosition)(e)
                                  ? q.unshift(u)
                                  : q.push(u);
                        }),
                        q
                    );
                });
            const L = z;
        },
        './src/Stores/Modules/Trading/Helpers/multiplier.ts': (e, t, r) => {
            function n(e) {
                return (
                    (n =
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
                    n(e)
                );
            }

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }

            function o(e, t, r) {
                return (
                    (t = (function (e) {
                        var t = (function (e) {
                            if ('object' != n(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var r = t.call(e, 'string');
                                if ('object' != n(r)) return r;
                                throw new TypeError('@@toPrimitive must return a primitive value.');
                            }
                            return String(e);
                        })(e);
                        return 'symbol' == n(t) ? t : t + '';
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
            r.d(t, {
                N: () => i,
                x: () => c,
            });
            var i = function (e) {
                    var t = !e.has_cancellation;
                    (0, e.onChangeMultiple)(
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2
                                    ? a(Object(r), !0).forEach(function (t) {
                                          o(e, t, r[t]);
                                      })
                                    : Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                      : a(Object(r)).forEach(function (t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                        });
                            }
                            return e;
                        })(
                            {
                                has_cancellation: t,
                            },
                            t
                                ? {
                                      has_stop_loss: !1,
                                      has_take_profit: !1,
                                  }
                                : {
                                      cancellation_price: void 0,
                                  }
                        )
                    );
                },
                c = function (e) {
                    var t = e.event;
                    (0, e.onChangeMultiple)({
                        has_cancellation: !0,
                        has_take_profit: !1,
                        has_stop_loss: !1,
                        cancellation_duration: t.target.value,
                    });
                };
        },
        './node_modules/@deriv/quill-icons/dist/esm/react/LabelPaired/LabelPairedChevronsDownCaptionRegularIcon.js': (
            e,
            t,
            r
        ) => {
            r.d(t, {
                A: () => a,
            });
            var n = r('react');
            const a = (0, n.forwardRef)(({ title: e, titleId: t, ...r }, a) =>
                n.createElement(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: 12,
                        height: 18,
                        viewBox: '0 0 12 18',
                        role: 'img',
                        ref: a,
                        'aria-labelledby': t,
                        ...r,
                    },
                    e
                        ? n.createElement(
                              'title',
                              {
                                  id: t,
                              },
                              e
                          )
                        : null,
                    n.createElement(
                        'g',
                        null,
                        n.createElement('path', {
                            d: 'M1.219 5.281a.397.397 0 0 1 0-.539c.14-.14.398-.14.539 0L6 8.984l4.219-4.242c.14-.14.398-.14.539 0 .14.14.14.399 0 .54l-4.5 4.5a.397.397 0 0 1-.54 0zm0 4.5a.397.397 0 0 1 0-.539c.14-.14.398-.14.539 0L6 13.484l4.219-4.242c.14-.14.398-.14.539 0 .14.14.14.399 0 .54l-4.5 4.5a.397.397 0 0 1-.54 0z',
                        })
                    ),
                    n.createElement(
                        'defs',
                        null,
                        n.createElement(
                            'clipPath',
                            {
                                id: 'ea6ba40f4925c9511af663bcbcf6c5c2__a',
                            },
                            n.createElement('path', {
                                d: 'M0 0h12v18H0z',
                            })
                        )
                    )
                )
            );
        },
        './node_modules/@deriv/quill-icons/dist/esm/react/LabelPaired/LabelPairedChevronsUpCaptionRegularIcon.js': (
            e,
            t,
            r
        ) => {
            r.d(t, {
                A: () => a,
            });
            var n = r('react');
            const a = (0, n.forwardRef)(({ title: e, titleId: t, ...r }, a) =>
                n.createElement(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: 12,
                        height: 18,
                        viewBox: '0 0 12 18',
                        role: 'img',
                        ref: a,
                        'aria-labelledby': t,
                        ...r,
                    },
                    e
                        ? n.createElement(
                              'title',
                              {
                                  id: t,
                              },
                              e
                          )
                        : null,
                    n.createElement(
                        'g',
                        null,
                        n.createElement('path', {
                            d: 'm6.258 4.742 4.5 4.5c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L6 5.538 1.758 9.781a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l4.5-4.5c.141-.14.4-.14.54 0m4.5 9c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L6 10.038l-4.242 4.242a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l4.5-4.5c.141-.14.4-.14.54 0z',
                        })
                    ),
                    n.createElement(
                        'defs',
                        null,
                        n.createElement(
                            'clipPath',
                            {
                                id: '60750b85994a6270e1851cea330b3121__a',
                            },
                            n.createElement('path', {
                                d: 'M0 0h12v18H0z',
                            })
                        )
                    )
                )
            );
        },
    },
]);
