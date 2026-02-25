'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
    [4773],
    {
        527671: (e, i, c) => {
            c.r(i),
                c.d(i, {
                    default: () => F,
                });
            var s = c(286326),
                a = c(597598),
                t = c.n(a),
                n = c(255530),
                l = c.n(n),
                r = c(557344),
                o = c(592353),
                _ = c(33118),
                d = c(504377),
                u = c(919796),
                h = c(291218),
                g = c(500309),
                p = c(414646),
                v = c(478784),
                x = c(922087),
                m = c(852691),
                b = c(836870);
            const y = e => {
                    let { currency: i, loginid: c, is_virtual: s } = e;
                    return 'MF' === c.replace(/\d/g, '')
                        ? (0, b.jsx)(_.Localize, {
                              i18n_default_text: 'Multipliers',
                          })
                        : s
                          ? (0, b.jsx)(_.Localize, {
                                i18n_default_text: 'Demo',
                            })
                          : i
                            ? (0, d.getCurrencyName)(i)
                            : (0, b.jsx)(_.Localize, {
                                  i18n_default_text: 'No currency assigned',
                              });
                },
                w = e => {
                    var i, c;
                    let {
                        has_error: a,
                        market_type: t,
                        sub_account_type: n,
                        platform: r,
                        server: u,
                        product: h,
                        is_dark_mode_on: g,
                        is_eu: p,
                        shortcode: v,
                        should_show_server_name: x,
                    } = e;
                    const m = (0, d.getCFDAccountDisplay)({
                            market_type: t,
                            sub_account_type: n,
                            platform: r,
                            is_eu: p,
                            shortcode: v,
                            product: h,
                        }),
                        y = s.useCallback(e => {
                            if (e) {
                                var i;
                                const a =
                                    null === (i = e.server_info) ||
                                    void 0 === i ||
                                    null === (i = i.geolocation) ||
                                    void 0 === i
                                        ? void 0
                                        : i.region;
                                var c, s;
                                if (a)
                                    return `${a} ${1 === (null == e || null === (c = e.server_info) || void 0 === c || null === (c = c.geolocation) || void 0 === c ? void 0 : c.sequence) ? '' : null == e || null === (s = e.server_info) || void 0 === s || null === (s = s.geolocation) || void 0 === s ? void 0 : s.sequence}`;
                            }
                            return '';
                        }, []);
                    if (a)
                        return (0, b.jsxs)('div', {
                            children: [
                                (0, b.jsx)(o.Text, {
                                    color: 'disabled',
                                    size: 'xs',
                                    children: (0, b.jsx)(_.Localize, {
                                        i18n_default_text: 'Unavailable',
                                    }),
                                }),
                                (null == u || null === (i = u.server_info) || void 0 === i ? void 0 : i.geolocation) &&
                                    x &&
                                    'synthetic' === t &&
                                    'svg' === v &&
                                    (0, b.jsx)(o.Text, {
                                        color: 'less-prominent',
                                        size: 'xxs',
                                        className: 'badge-server badge-server--disabled',
                                        children: y(u),
                                    }),
                            ],
                        });
                    const w = (0, d.isBot)();
                    return (0, b.jsxs)('div', {
                        children: [
                            'dxtrade' === r && m === (0, _.localize)('Derived') ? (0, _.localize)('Synthetic') : m,
                            (null == u || null === (c = u.server_info) || void 0 === c ? void 0 : c.geolocation) &&
                                x &&
                                'synthetic' === t &&
                                'svg' === v &&
                                (0, b.jsx)(o.Text, {
                                    color: g ? 'general' : 'colored-background',
                                    size: 'xxs',
                                    className: l()('badge-server', {
                                        'badge-server-bot': w,
                                    }),
                                    children: y(u),
                                }),
                        ],
                    });
                },
                j = e => {
                    let {
                        balance: i,
                        currency: c,
                        currency_icon: a,
                        display_type: t,
                        has_balance: n,
                        has_error: r,
                        has_reset_balance: u,
                        is_dark_mode_on: h,
                        is_disabled: g,
                        is_virtual: p,
                        is_eu: v,
                        product: x,
                        loginid: m,
                        market_type: j,
                        redirectAccount: f,
                        onClickResetVirtualBalance: N,
                        selected_loginid: k,
                        server: C,
                        shortcode: z,
                        sub_account_type: D,
                        platform: A,
                        should_show_server_name: T,
                    } = e;
                    const I = c ? a : 'IcCurrencyUnknown';
                    return (0, b.jsx)(s.Fragment, {
                        children: (0, b.jsx)('div', {
                            id: `dt_${m}`,
                            className: l()('acc-switcher__account', {
                                'acc-switcher__account--selected': m === k,
                                'acc-switcher__account--disabled': g,
                            }),
                            onClick: () => {
                                g || f();
                            },
                            children: (0, b.jsxs)('span', {
                                className: 'acc-switcher__id',
                                children: [
                                    (0, b.jsx)(o.Icon, {
                                        icon: p ? 'IcCurrencyVirtual' : I,
                                        className: 'acc-switcher__id-icon',
                                        size: 24,
                                    }),
                                    (0, b.jsxs)('span', {
                                        children: [
                                            'currency' === t
                                                ? (0, b.jsx)(y, {
                                                      currency: c,
                                                      loginid: m,
                                                      is_virtual: p,
                                                  })
                                                : (0, b.jsx)(w, {
                                                      is_eu: v,
                                                      market_type: j,
                                                      server: C,
                                                      sub_account_type: D,
                                                      has_error: r,
                                                      platform: A,
                                                      product: x,
                                                      is_dark_mode_on: h,
                                                      shortcode: z,
                                                      should_show_server_name: T,
                                                  }),
                                            (0, b.jsx)('div', {
                                                className: l()('acc-switcher__loginid-text', {
                                                    'acc-switcher__loginid-text--disabled': r,
                                                }),
                                                children: m,
                                            }),
                                        ],
                                    }),
                                    u
                                        ? (0, b.jsx)(o.Button, {
                                              is_disabled: g,
                                              onClick: e => {
                                                  e.stopPropagation(), N();
                                              },
                                              className: 'acc-switcher__reset-account-btn',
                                              secondary: !0,
                                              small: !0,
                                              children: (0, _.localize)('Reset balance'),
                                          })
                                        : n &&
                                          (0, b.jsx)(o.Text, {
                                              size: 'xs',
                                              color: 'prominent',
                                              styles: {
                                                  fontWeight: 'inherit',
                                              },
                                              className: 'acc-switcher__balance',
                                              children:
                                                  c &&
                                                  (0, b.jsx)(o.Money, {
                                                      currency: (0, d.getCurrencyDisplayCode)(c),
                                                      amount: (0, d.formatMoney)(c, i, !0),
                                                      should_format: !1,
                                                      show_currency: !0,
                                                  }),
                                          }),
                                ],
                            }),
                        }),
                    });
                },
                f = e => {
                    let { children: i, header: c, is_visible: s, toggleVisibility: a } = e;
                    return (0, b.jsx)(o.ContentExpander, {
                        className: 'acc-switcher',
                        title: c,
                        is_expanded: s,
                        onToggle: a,
                        is_title_spaced: !0,
                        children: i,
                    });
                };
            f.propTypes = {
                children: t().node,
                header: t().oneOfType([t().object, t().string]),
                is_visible: t().bool,
                toggleVisibility: t().func,
            };
            const N = f,
                k = (e, i) =>
                    [...e].sort((e, c) => {
                        if (e.is_virtual || c.is_virtual) return e.is_virtual ? 1 : -1;
                        const s = parseFloat(i[e.loginid].balance);
                        return parseFloat(i[c.loginid].balance) - s;
                    }),
                C = e =>
                    [...e].sort((e, i) => {
                        const c = z(e),
                            s = z(i);
                        return c && !s
                            ? 1
                            : (s && !c) || 'gaming' === e.market_type || 'synthetic' === e.market_type
                              ? -1
                              : 'financial' === e.sub_account_type
                                ? 'gaming' === i.market_type || 'synthetic' === i.market_type
                                    ? 1
                                    : -1
                                : 1;
                    }),
                z = e => 'demo' === e.account_type,
                D = (0, g.observer)(e => {
                    var i, c, a;
                    let { history: t, is_mobile: n, is_visible: r } = e;
                    const { client: u, ui: h, traders_hub: g } = (0, p.A)(),
                        {
                            available_crypto_currencies: y,
                            loginid: w,
                            accounts: f,
                            account_type: D,
                            account_list: A,
                            currency: T,
                            is_eu: I,
                            is_landing_company_loaded: S,
                            is_low_risk: M,
                            is_high_risk: R,
                            is_logged_in: F,
                            is_virtual: L,
                            has_fiat: W,
                            mt5_login_list: $,
                            obj_total_balance: B,
                            switchAccount: U,
                            resetVirtualBalance: V,
                            has_active_real_account: E,
                            upgradeable_landing_companies: O,
                            real_account_creation_unlock_date: q,
                            has_any_real_account: P,
                            virtual_account_loginid: G,
                            has_maltainvest_account: H,
                        } = u,
                        { show_eu_related_content: K, content_flag: Y, selectRegion: J, setTogglePlatformType: Q } = g,
                        {
                            is_dark_mode_on: X,
                            openRealAccountSignup: Z,
                            toggleAccountsDialog: ee,
                            toggleSetCurrencyModal: ie,
                            should_show_real_accounts_list: ce,
                            setShouldShowCooldownModal: se,
                        } = h,
                        [ae, te] = s.useState(!L || ce ? 0 : 1),
                        [ne, le] = s.useState(!0),
                        [re, oe] = s.useState(!0),
                        [_e, de] = s.useState(!0),
                        [ue, he] = s.useState(!0),
                        ge = s.useRef(),
                        pe = s.useRef(null),
                        ve = B.currency,
                        xe = null === (i = A.find(e => e.is_virtual)) || void 0 === i ? void 0 : i.loginid,
                        me = f[xe] ? f[xe].currency : 'USD',
                        be = e => {
                            switch (e) {
                                case 'demo_deriv':
                                    return le(!ne);
                                case 'real_deriv':
                                    return oe(!re);
                                case 'non-eu-regulator':
                                    return de(!_e);
                                case 'eu-regulator':
                                    return he(!ue);
                                default:
                                    return !1;
                            }
                        },
                        ye = () => {
                            ee(!1);
                        };
                    (0, o.useOnClickOutside)(ge, ye, e => r && !e.target.classList.contains('acc-info'));
                    const we = async e => {
                            ye(), w !== e && (await U(e));
                        },
                        je = async () => {
                            ye(), V();
                        },
                        fe = 0 === ae,
                        Ne = 1 === ae,
                        ke = () => (K || L || !((y.length < 1 && !W) || !L) || M ? O : []),
                        Ce = (0, v.A)();
                    if (!F) return !1;
                    const ze = e => (null == e ? void 0 : e.is_virtual) && 1e4 !== (null == e ? void 0 : e.balance),
                        De = () => {
                            const e = [];
                            return (
                                (() => {
                                    if (S)
                                        return Y === d.ContentFlag.LOW_RISK_CR_NON_EU
                                            ? C($).filter(e => !z(e) && 'maltainvest' !== e.landing_company_short)
                                            : C($).filter(e => !z(e));
                                    return [];
                                })().map(i => {
                                    'svg' === i.landing_company_short &&
                                        'synthetic' === i.market_type &&
                                        (e.length
                                            ? e.forEach(c => (c.server !== i.server && e.push(i), e))
                                            : e.push(i));
                                }),
                                e.length > 1
                            );
                        },
                        Ae = e => k(A, f).filter(i => !i.is_virtual && i.loginid.startsWith(e)).length > 1,
                        Te =
                            null ===
                                (c = A.find(e => {
                                    var i;
                                    return null === (i = e.loginid) || void 0 === i ? void 0 : i.startsWith('CR');
                                })) || void 0 === c
                                ? void 0
                                : c.loginid,
                        Ie = (0, b.jsx)('div', {
                            className: 'acc-switcher__list-wrapper',
                            children:
                                xe &&
                                (0, b.jsx)(N, {
                                    header: (0, _.localize)('Deriv account'),
                                    is_visible: ne,
                                    toggleVisibility: () => {
                                        be('demo_deriv');
                                    },
                                    children: (0, b.jsx)('div', {
                                        className: 'acc-switcher__accounts',
                                        children: k(A, f)
                                            .filter(e => e.is_virtual)
                                            .map(e =>
                                                (0, b.jsx)(
                                                    j,
                                                    {
                                                        is_dark_mode_on: X,
                                                        balance: f[e.loginid].balance,
                                                        currency: f[e.loginid].currency,
                                                        currency_icon: `IcCurrency-${e.icon}`,
                                                        display_type: 'currency',
                                                        has_balance: 'balance' in f[e.loginid],
                                                        has_reset_balance: ze(f[w]),
                                                        is_disabled: e.is_disabled,
                                                        is_virtual: e.is_virtual,
                                                        loginid: e.loginid,
                                                        product: e.product,
                                                        redirectAccount: e.is_disabled ? void 0 : () => we(e.loginid),
                                                        onClickResetVirtualBalance: je,
                                                        selected_loginid: w,
                                                    },
                                                    e.loginid
                                                )
                                            ),
                                    }),
                                }),
                        }),
                        Se = (0, b.jsx)('div', {
                            ref: pe,
                            className: 'acc-switcher__list-wrapper',
                            children: (0, b.jsxs)(s.Fragment, {
                                children: [
                                    !I || M
                                        ? (0, b.jsxs)(N, {
                                              className: 'acc-switcher__title',
                                              header:
                                                  M && H
                                                      ? (0, _.localize)(
                                                            'Non-EU Deriv ' + (Ae('CR') ? 'accounts' : 'account')
                                                        )
                                                      : (0, _.localize)('Deriv ' + (Ae('CR') ? 'accounts' : 'account')),
                                              is_visible: _e,
                                              toggleVisibility: () => {
                                                  be('real_deriv');
                                              },
                                              children: [
                                                  (0, b.jsx)('div', {
                                                      className: 'acc-switcher__accounts',
                                                      children: k(A, f)
                                                          .filter(e => !e.is_virtual && e.loginid.startsWith('CR'))
                                                          .map(e =>
                                                              (0, b.jsx)(
                                                                  j,
                                                                  {
                                                                      account_type: D,
                                                                      is_dark_mode_on: X,
                                                                      balance: f[e.loginid].balance,
                                                                      currency: f[e.loginid].currency,
                                                                      currency_icon: `IcCurrency-${e.icon}`,
                                                                      display_type: 'currency',
                                                                      has_balance: 'balance' in f[e.loginid],
                                                                      is_disabled: e.is_disabled,
                                                                      is_virtual: e.is_virtual,
                                                                      is_eu: I,
                                                                      loginid: e.loginid,
                                                                      redirectAccount: e.is_disabled
                                                                          ? void 0
                                                                          : () => we(e.loginid),
                                                                      selected_loginid: w,
                                                                      should_show_server_name: De(),
                                                                  },
                                                                  e.loginid
                                                              )
                                                          ),
                                                  }),
                                                  !Te &&
                                                      ke()
                                                          .filter(e => 'svg' === e)
                                                          .map((e, i) =>
                                                              (0, b.jsxs)(
                                                                  'div',
                                                                  {
                                                                      className: 'acc-switcher__new-account',
                                                                      children: [
                                                                          (0, b.jsx)(o.Icon, {
                                                                              icon: 'IcDeriv',
                                                                              size: 24,
                                                                          }),
                                                                          (0, b.jsx)(o.Text, {
                                                                              size: 'xs',
                                                                              color: 'general',
                                                                              className:
                                                                                  'acc-switcher__new-account-text',
                                                                              children: (0, x.S)(e),
                                                                          }),
                                                                          (0, b.jsx)(o.Button, {
                                                                              id: 'dt_core_account-switcher_add-new-account',
                                                                              onClick: () => {
                                                                                  q
                                                                                      ? (ye(), se(!0))
                                                                                      : (J('Non-EU'), Z('svg'));
                                                                              },
                                                                              className:
                                                                                  'acc-switcher__new-account-btn',
                                                                              secondary: !0,
                                                                              small: !0,
                                                                              children: (0, _.localize)('Add'),
                                                                          }),
                                                                      ],
                                                                  },
                                                                  i
                                                              )
                                                          ),
                                              ],
                                          })
                                        : null,
                                    (!R && H) || I
                                        ? (0, b.jsxs)(N, {
                                              header:
                                                  M && H
                                                      ? (0, _.localize)(
                                                            'EU Deriv ' + (Ae('MF') ? 'accounts' : 'account')
                                                        )
                                                      : (0, _.localize)('Deriv ' + (Ae('MF') ? 'accounts' : 'account')),
                                              is_visible: ue,
                                              toggleVisibility: () => {
                                                  be('real_deriv');
                                              },
                                              children: [
                                                  (0, b.jsx)('div', {
                                                      className: 'acc-switcher__accounts',
                                                      children: k(A, f)
                                                          .filter(e => !e.is_virtual && e.loginid.startsWith('MF'))
                                                          .map(e =>
                                                              (0, b.jsx)(
                                                                  j,
                                                                  {
                                                                      account_type: D,
                                                                      is_dark_mode_on: X,
                                                                      balance: f[e.loginid].balance,
                                                                      currency: f[e.loginid].currency,
                                                                      currency_icon: `IcCurrency-${e.icon}`,
                                                                      display_type: 'currency',
                                                                      has_balance: 'balance' in f[e.loginid],
                                                                      is_disabled: e.is_disabled,
                                                                      is_virtual: e.is_virtual,
                                                                      is_eu: I,
                                                                      loginid: e.loginid,
                                                                      redirectAccount: e.is_disabled
                                                                          ? void 0
                                                                          : () => we(e.loginid),
                                                                      selected_loginid: w,
                                                                      should_show_server_name: De(),
                                                                  },
                                                                  e.loginid
                                                              )
                                                          ),
                                                  }),
                                                  ke()
                                                      .filter(e => 'maltainvest' === e)
                                                      .map((e, i) =>
                                                          (0, b.jsxs)(
                                                              'div',
                                                              {
                                                                  className: 'acc-switcher__new-account',
                                                                  children: [
                                                                      (0, b.jsx)(o.Icon, {
                                                                          icon: 'IcDeriv',
                                                                          size: 24,
                                                                      }),
                                                                      (0, b.jsx)(o.Text, {
                                                                          size: 'xs',
                                                                          color: 'general',
                                                                          className: 'acc-switcher__new-account-text',
                                                                          children: (0, x.S)(e),
                                                                      }),
                                                                      (0, b.jsx)(o.Button, {
                                                                          id: 'dt_core_account-switcher_add-new-account',
                                                                          onClick: () => {
                                                                              q
                                                                                  ? (ye(), se(!0))
                                                                                  : (J('EU'), Z('maltainvest'));
                                                                          },
                                                                          className: 'acc-switcher__new-account-btn',
                                                                          secondary: !0,
                                                                          small: !0,
                                                                          children: (0, _.localize)('Add'),
                                                                      }),
                                                                  ],
                                                              },
                                                              i
                                                          )
                                                      ),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                        }),
                        Me =
                            null == A || null === (a = A.find(e => /^(CR|MF)/.test(e.loginid))) || void 0 === a
                                ? void 0
                                : a.loginid,
                        Re = () => {
                            const e = () =>
                                (0, b.jsx)(s.Fragment, {
                                    children: (0, b.jsx)('div', {
                                        className: 'acc-switcher__traders-hub',
                                        children: (0, b.jsx)(m.Sm, {
                                            onClick: async () => {
                                                !L && Ne ? await U(G) : L && fe && (await U(Me)),
                                                    ee(!1),
                                                    localStorage.setItem('redirect_to_th_os', 'home'),
                                                    t.push(d.routes.traders_hub),
                                                    Q('cfd');
                                            },
                                            className: 'acc-switcher__traders-hub--link',
                                            children: (0, b.jsx)(o.Text, {
                                                size: 'xs',
                                                align: 'center',
                                                className: 'acc-switcher__traders-hub--text',
                                                children: (0, b.jsx)(_.Localize, {
                                                    i18n_default_text: "Looking for CFD accounts? Go to Trader's Hub",
                                                }),
                                            }),
                                        }),
                                    }),
                                });
                            return (fe && P) || Ne ? (0, b.jsx)(e, {}) : null;
                        };
                    return (0, b.jsx)('div', {
                        className: 'acc-switcher__list',
                        ref: ge,
                        'data-testid': 'acc-switcher',
                        children: S
                            ? (0, b.jsxs)(s.Fragment, {
                                  children: [
                                      (0, b.jsxs)(o.Tabs, {
                                          active_index: ae,
                                          className: 'acc-switcher__list-tabs',
                                          onTabItemClick: e => te(e),
                                          top: !0,
                                          children: [
                                              (0, b.jsxs)('div', {
                                                  label: (0, _.localize)('Real'),
                                                  id: 'real_account_tab',
                                                  children: [
                                                      (0, b.jsx)(o.DesktopWrapper, {
                                                          children: (0, b.jsx)(o.ThemedScrollbars, {
                                                              height: '354px',
                                                              children: Se,
                                                          }),
                                                      }),
                                                      (0, b.jsx)(o.MobileWrapper, {
                                                          children: (0, b.jsx)(o.Div100vhContainer, {
                                                              className: 'acc-switcher__list-container',
                                                              max_autoheight_offset: '234px',
                                                              children: Se,
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                              (0, b.jsxs)('div', {
                                                  label: (0, _.localize)('Demo'),
                                                  id: 'dt_core_account-switcher_demo-tab',
                                                  children: [
                                                      (0, b.jsx)(o.DesktopWrapper, {
                                                          children: (0, b.jsx)(o.ThemedScrollbars, {
                                                              height: '354px',
                                                              children: Ie,
                                                          }),
                                                      }),
                                                      (0, b.jsx)(o.MobileWrapper, {
                                                          children: (0, b.jsx)(o.Div100vhContainer, {
                                                              className: 'acc-switcher__list-container',
                                                              max_autoheight_offset: '234px',
                                                              children: Ie,
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      (0, b.jsx)('div', {
                                          className: l()('acc-switcher__separator', {
                                              'acc-switcher__separator--auto-margin': n,
                                          }),
                                      }),
                                      (0, b.jsxs)('div', {
                                          className: 'acc-switcher__total',
                                          children: [
                                              (0, b.jsx)(o.Text, {
                                                  line_height: 's',
                                                  size: 'xs',
                                                  weight: 'bold',
                                                  color: 'prominent',
                                                  children: (0, b.jsx)(_.Localize, {
                                                      i18n_default_text: 'Total assets',
                                                  }),
                                              }),
                                              (0, b.jsx)(o.Text, {
                                                  size: 'xs',
                                                  color: 'prominent',
                                                  className: 'acc-switcher__balance',
                                                  children: (0, b.jsx)(o.Money, {
                                                      currency: fe ? ve : me,
                                                      amount: (0, d.formatMoney)(
                                                          fe ? ve : me,
                                                          fe ? B.amount_real : f[xe] ? f[xe].balance : 0,
                                                          !0
                                                      ),
                                                      show_currency: !0,
                                                      should_format: !1,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, b.jsx)(o.Text, {
                                          color: 'less-prominent',
                                          line_height: 'xs',
                                          size: 'xxxs',
                                          className: 'acc-switcher__total-subtitle',
                                          children: (0, _.localize)('Total assets in your Deriv accounts.'),
                                      }),
                                      (0, b.jsx)('div', {
                                          className: 'acc-switcher__separator',
                                      }),
                                      (0, b.jsx)(Re, {}),
                                      fe &&
                                          E &&
                                          !L &&
                                          (0, b.jsxs)(b.Fragment, {
                                              children: [
                                                  (0, b.jsx)('div', {
                                                      className: 'acc-switcher__separator',
                                                  }),
                                                  (0, b.jsx)('div', {
                                                      className: 'acc-switcher__footer',
                                                      children: (0, b.jsx)(o.Button, {
                                                          className: 'acc-switcher__btn--traders_hub',
                                                          secondary: !0,
                                                          onClick:
                                                              !P || (Ce && T)
                                                                  ? () => Z('manage')
                                                                  : () => {
                                                                        ye(), ie();
                                                                    },
                                                          children: (0, _.localize)('Manage accounts'),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, b.jsx)(o.Loading, {
                                  is_fullscreen: !1,
                              }),
                    });
                });
            D.propTypes = {
                is_visible: t().bool,
                history: t().object,
            };
            const A = (0, h.withRouter)(D),
                T = e => {
                    const { disableApp: i, enableApp: c, is_visible: s, is_upgrade_enabled: a, toggle: t } = e;
                    return (0, b.jsx)(o.Modal, {
                        id: 'dt_account_switcher_modal',
                        className: 'accounts-switcher',
                        enableApp: c,
                        is_open: s,
                        is_vertical_top: !0,
                        disableApp: i,
                        has_close_icon: !1,
                        toggleModal: t,
                        height: 'auto',
                        width: 'calc(100vw - 32px)',
                        children: (0, b.jsx)(o.Div100vhContainer, {
                            className: l()('acc-switcher__wrapper', 'acc-switcher__wrapper--is-mobile'),
                            max_autoheight_offset: '48px',
                            children: (0, b.jsx)(A, {
                                is_mobile: !0,
                                is_visible: !0,
                                toggle: t,
                                is_upgrade_enabled: a,
                            }),
                        }),
                    });
                };
            T.propTypes = {
                children: t().any,
                disableApp: t().func,
                enableApp: t().func,
                is_visible: t().bool,
                is_upgrade_enabled: t().bool,
                onClose: t().func,
                title: t().string,
                toggle: t().func,
                visible: t().bool,
                wrapperClassName: t().string,
            };
            const I = T;
            var S = c(141929);
            const M = e => {
                    let { is_virtual: i, currency: c } = e;
                    return (0, b.jsx)(o.Icon, {
                        data_testid: 'dt_icon',
                        icon: `IcCurrency-${i ? 'virtual' : null != c ? c : 'Unknown'}`,
                        className: `acc-info__id-icon acc-info__id-icon--${i ? 'virtual' : c}`,
                        size: 24,
                    });
                },
                R = e => {
                    let {
                        acc_switcher_disabled_message: i,
                        balance: c,
                        currency: s,
                        disableApp: a,
                        enableApp: t,
                        is_dialog_on: n,
                        is_virtual: h,
                        toggleDialog: g,
                        is_disabled: p,
                        is_mobile: v,
                    } = e;
                    const x = null == s ? void 0 : s.toLowerCase(),
                        { isDesktop: m } = (0, u.Y)();
                    return (0, b.jsxs)('div', {
                        className: 'acc-info__wrapper',
                        children: [
                            m &&
                                (0, b.jsx)('div', {
                                    className: 'acc-info__separator',
                                }),
                            (0, b.jsx)(S.A, {
                                is_disabled: p,
                                disabled_message: i,
                                is_mobile: v,
                                children: (0, b.jsxs)('div', {
                                    'data-testid': 'dt_acc_info',
                                    id: 'dt_core_account-info_acc-info',
                                    className: l()('acc-info', {
                                        'acc-info--show': n,
                                        'acc-info--is-virtual': h,
                                        'acc-info--is-disabled': p,
                                    }),
                                    onClick: p ? void 0 : () => g(),
                                    children: [
                                        (0, b.jsx)('span', {
                                            className: 'acc-info__id',
                                            children:
                                                (m || h || s) &&
                                                (0, b.jsx)(M, {
                                                    is_virtual: h,
                                                    currency: x,
                                                }),
                                        }),
                                        (0, b.jsxs)('div', {
                                            className: 'acc-info__content',
                                            children: [
                                                (0, b.jsxs)('div', {
                                                    className: 'acc-info__account-type-header',
                                                    children: [
                                                        (0, b.jsx)(o.Text, {
                                                            as: 'p',
                                                            size: 'xxs',
                                                            className: 'acc-info__account-type',
                                                            children: h
                                                                ? (0, _.localize)('Demo')
                                                                : (0, _.localize)('Real'),
                                                        }),
                                                        p
                                                            ? (0, b.jsx)(o.Icon, {
                                                                  data_testid: 'dt_lock_icon',
                                                                  icon: 'IcLock',
                                                                  className: 'acc-info__select-arrow',
                                                                  size: 12,
                                                              })
                                                            : (0, b.jsx)(o.Icon, {
                                                                  data_testid: 'dt_select_arrow',
                                                                  icon: 'IcChevronDownBold',
                                                                  className: 'acc-info__select-arrow',
                                                                  size: 12,
                                                              }),
                                                    ],
                                                }),
                                                (void 0 !== c || !s) &&
                                                    (0, b.jsx)('div', {
                                                        className: 'acc-info__balance-section',
                                                        children: (0, b.jsx)('p', {
                                                            'data-testid': 'dt_balance',
                                                            className: l()('acc-info__balance', {
                                                                'acc-info__balance--no-currency': !s && !h,
                                                            }),
                                                            children: s
                                                                ? `${c} ${(0, d.getCurrencyDisplayCode)(s)}`
                                                                : (0, b.jsx)(_.Localize, {
                                                                      i18n_default_text: 'No currency assigned',
                                                                  }),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, b.jsx)('div', {
                                className: 'acc-info__separator',
                            }),
                            m
                                ? (0, b.jsx)(r.A, {
                                      in: n,
                                      timeout: 200,
                                      classNames: {
                                          enter: 'acc-switcher__wrapper--enter',
                                          enterDone: 'acc-switcher__wrapper--enter-done',
                                          exit: 'acc-switcher__wrapper--exit',
                                      },
                                      unmountOnExit: !0,
                                      children: (0, b.jsx)('div', {
                                          className: 'acc-switcher__wrapper',
                                          children: (0, b.jsx)(A, {
                                              is_visible: n,
                                              toggle: g,
                                          }),
                                      }),
                                  })
                                : (0, b.jsx)(I, {
                                      is_visible: n,
                                      disableApp: a,
                                      enableApp: t,
                                      toggle: g,
                                  }),
                        ],
                    });
                };
            R.propTypes = {
                acc_switcher_disabled_message: t().string,
                balance: t().string,
                currency: t().string,
                disableApp: t().func,
                enableApp: t().func,
                is_dialog_on: t().bool,
                is_disabled: t().bool,
                is_virtual: t().bool,
                is_mobile: t().bool,
                loginid: t().string,
                toggleDialog: t().func,
            };
            const F = R;
        },
    },
]);
//# sourceMappingURL=core.chunk.account-info.3b91927ada4b6b154a30.js.map
