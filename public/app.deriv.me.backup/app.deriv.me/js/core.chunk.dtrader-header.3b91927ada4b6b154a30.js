'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
    [3317],
    {
        289295: (e, t, s) => {
            s.r(t),
                s.d(t, {
                    default: () => V,
                });
            var i = s(286326),
                n = s(291218),
                r = s(255530),
                o = s.n(r),
                a = s(317691),
                c = s(504377),
                l = s(500309),
                u = s(414646),
                _ = s(919796),
                d = s(121096),
                p = s(766475),
                h = s(989186),
                m = s(592353),
                g = s(461297),
                b = s(647620),
                f = s(594269),
                x = s(526248),
                A = s(788624),
                v = s(33118),
                j = s(281476),
                y = s(699429),
                w = s(47699),
                N = s(836870);
            const T = (0, l.observer)(() => {
                const { ui: e, client: t, modules: s } = (0, u.A)(),
                    {
                        disableApp: r,
                        enableApp: o,
                        is_mobile: a,
                        is_mobile_language_menu_open: l,
                        setMobileLanguageMenuOpen: _,
                        setIsForcedToExitPnv: d,
                    } = e,
                    {
                        account_status: p,
                        has_wallet: h,
                        is_authorize: T,
                        is_logged_in: S,
                        is_virtual: C,
                        logout: E,
                        should_allow_authentication: k,
                        should_allow_poinc_authentication: O,
                        landing_company_shortcode: D,
                        is_proof_of_ownership_enabled: I,
                        is_passkey_supported: U,
                    } = t,
                    { cashier: M } = s,
                    { payment_agent: P } = M,
                    { is_payment_agent_visible: L } = P,
                    z = (0, g.A)(),
                    { isSuccess: F } = (0, b.A)(),
                    { data: R } = (0, f.A)(),
                    { is_p2p_enabled: B } = (0, x.A)(),
                    { pathname: G } = (0, n.useLocation)(),
                    W = G === c.routes.traders_hub || G.startsWith(c.routes.cashier) || G.startsWith(c.routes.account),
                    [V, H] = i.useState(!1),
                    [$, q] = i.useState(!1),
                    [K, X] = i.useState([]),
                    Y = i.useRef(),
                    J = (0, n.useHistory)(),
                    {
                        subscribe: Q,
                        rest: { isSubscribed: Z },
                        p2p_settings: ee,
                    } = (0, A.A)();
                i.useEffect(() => {
                    F && !Z && T && Q();
                }, [F, ee, Q, Z, T]),
                    i.useEffect(
                        () => () => {
                            Y.current && (clearTimeout(Y.current), q(!1), H(!1));
                        },
                        [G]
                    ),
                    i.useEffect(
                        () => (
                            (p || k) &&
                                (() => {
                                    const e = (0, y.A)();
                                    X(ne(e, [c.routes.account]));
                                })(),
                            () => clearTimeout(Y.current)
                        ),
                        [p, k, h, W, a, U, B]
                    );
                const te = i.useCallback(() => {
                        l && _(!1),
                            V
                                ? (q(!0),
                                  (Y.current = setTimeout(() => {
                                      H(!1), q(!1);
                                  }, 400)))
                                : H(!V);
                    }, [V, l, _]),
                    se = i.useCallback(async () => {
                        te(),
                            window.location.pathname.startsWith(c.routes.phone_verification) &&
                                (d(!0), await new Promise(e => setTimeout(e, 0))),
                            J.push(c.routes.traders_hub),
                            await E();
                    }, [J, E, te]),
                    ie = i.useCallback(() => {
                        j.Analytics.trackEvent('ce_passkey_account_settings_form', {
                            action: 'open',
                            form_name: 'ce_passkey_account_settings_form',
                            operating_system: (0, c.getOSNameWithUAParser)(),
                        });
                    }, []),
                    ne = (e, t) => {
                        const s = e.flatMap(e => e.routes || []);
                        return t.map(t => e.find(e => e.path === t) || s.find(e => e.path === t)).filter(e => e);
                    };
                return (0, N.jsxs)(i.Fragment, {
                    children: [
                        (0, N.jsx)('a', {
                            id: 'dt_mobile_drawer_toggle',
                            onClick: te,
                            className: 'header__mobile-drawer-toggle',
                            children: (0, N.jsx)(m.Icon, {
                                icon: 'IcHamburger',
                                width: '16px',
                                height: '16px',
                                className: 'header__mobile-drawer-icon',
                            }),
                        }),
                        (0, N.jsx)(m.MobileDrawer, {
                            alignment: 'left',
                            icon_class: 'header__menu-toggle',
                            is_open: V,
                            transitionExit: $,
                            toggle: te,
                            id: 'dt_mobile_drawer',
                            enableApp: o,
                            disableApp: r,
                            title: (0, N.jsx)('div', {
                                children: (0, v.localize)('Account settings'),
                            }),
                            height: '100vh',
                            width: '295px',
                            className: 'pre-appstore',
                            children: (0, N.jsx)(m.Div100vhContainer, {
                                height_offset: '40px',
                                children: (0, N.jsx)('div', {
                                    className: 'header__menu-mobile-body-wrapper',
                                    children: (0, N.jsx)(i.Fragment, {
                                        children: (0, N.jsxs)(m.MobileDrawer.Body, {
                                            className: 'tradershub-os-header',
                                            children: [
                                                (0, N.jsx)('div', {
                                                    className: 'header__menu-mobile-platform-switcher',
                                                    id: 'mobile_platform_switcher',
                                                }),
                                                K.map((e, t) =>
                                                    ((e, t) => {
                                                        if (e.is_authenticated && !S) return null;
                                                        if (!e.routes)
                                                            return (0, N.jsx)(
                                                                m.MobileDrawer.Item,
                                                                {
                                                                    children: (0, N.jsx)(w.A, {
                                                                        link_to: e.path,
                                                                        icon: e.icon_component,
                                                                        text: e.getTitle(),
                                                                        onClickLink: te,
                                                                    }),
                                                                },
                                                                t
                                                            );
                                                        const s = e.routes.some(e => e.subroutes),
                                                            n = !a || !U,
                                                            r = e =>
                                                                /passkeys/.test(e) ? n : !!/languages/.test(e) && h;
                                                        return (0, N.jsxs)(
                                                            i.Fragment,
                                                            {
                                                                children: [
                                                                    !s &&
                                                                        e.routes.map((e, t) => {
                                                                            if (
                                                                                !e.is_invisible &&
                                                                                (e.path !== c.routes.cashier_pa || L) &&
                                                                                (e.path !==
                                                                                    c.routes.cashier_pa_transfer ||
                                                                                    R) &&
                                                                                (e.path !== c.routes.cashier_p2p ||
                                                                                    B) &&
                                                                                (e.path !==
                                                                                    c.routes.cashier_acc_transfer ||
                                                                                    z)
                                                                            )
                                                                                return (0, N.jsx)(
                                                                                    m.MobileDrawer.Item,
                                                                                    {
                                                                                        children: (0, N.jsx)(w.A, {
                                                                                            link_to: e.path,
                                                                                            icon: e.icon_component,
                                                                                            text: e.getTitle(),
                                                                                            onClickLink: te,
                                                                                        }),
                                                                                    },
                                                                                    t
                                                                                );
                                                                        }),
                                                                    s &&
                                                                        e.routes.map((e, t) =>
                                                                            e.subroutes
                                                                                ? (0, N.jsx)(
                                                                                      m.MobileDrawer.SubMenuSection,
                                                                                      {
                                                                                          section_icon: e.icon,
                                                                                          section_title: e.getTitle(),
                                                                                          children: e.subroutes.map(
                                                                                              (e, t) => {
                                                                                                  return (0, N.jsx)(
                                                                                                      w.A,
                                                                                                      {
                                                                                                          is_disabled:
                                                                                                              ((s =
                                                                                                                  e.path),
                                                                                                              (/financial-assessment/.test(
                                                                                                                  s
                                                                                                              )
                                                                                                                  ? C
                                                                                                                  : /trading-assessment/.test(
                                                                                                                          s
                                                                                                                      )
                                                                                                                    ? C ||
                                                                                                                      'maltainvest' !==
                                                                                                                          D
                                                                                                                    : /proof-of-address/.test(
                                                                                                                            s
                                                                                                                        ) ||
                                                                                                                        /proof-of-identity/.test(
                                                                                                                            s
                                                                                                                        )
                                                                                                                      ? !k
                                                                                                                      : /proof-of-income/.test(
                                                                                                                              s
                                                                                                                          )
                                                                                                                        ? !O
                                                                                                                        : !!/proof-of-ownership/.test(
                                                                                                                              s
                                                                                                                          ) &&
                                                                                                                          (C ||
                                                                                                                              !I)) ||
                                                                                                                  e.is_disabled),
                                                                                                          link_to:
                                                                                                              e.path,
                                                                                                          text: e.getTitle(),
                                                                                                          onClickLink:
                                                                                                              () => {
                                                                                                                  te(),
                                                                                                                      e.path ===
                                                                                                                          c
                                                                                                                              .routes
                                                                                                                              .passkeys &&
                                                                                                                          ie();
                                                                                                              },
                                                                                                          is_hidden: r(
                                                                                                              e.path
                                                                                                          ),
                                                                                                      },
                                                                                                      t
                                                                                                  );
                                                                                                  var s;
                                                                                              }
                                                                                          ),
                                                                                      },
                                                                                      t
                                                                                  )
                                                                                : (0, N.jsx)(
                                                                                      m.MobileDrawer.Item,
                                                                                      {
                                                                                          children: (0, N.jsx)(w.A, {
                                                                                              link_to: e.path,
                                                                                              icon: e.icon_component,
                                                                                              text: e.getTitle(),
                                                                                              onClickLink: te,
                                                                                          }),
                                                                                      },
                                                                                      t
                                                                                  )
                                                                        ),
                                                                ],
                                                            },
                                                            t
                                                        );
                                                    })(e, t)
                                                ),
                                                S &&
                                                    (0, N.jsx)(m.MobileDrawer.Item, {
                                                        onClick: se,
                                                        className: 'dc-mobile-drawer__item',
                                                        children: (0, N.jsx)(w.A, {
                                                            icon: 'IcLogout',
                                                            text: (0, v.localize)('Log out'),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    ],
                });
            });
            T.displayName = 'ToggleMenuDrawerAccountsOS';
            const S = T;
            var C = s(976327),
                E = s(596176);
            const k = e => {
                    const t = (0, N.jsx)(
                        m.Text,
                        {
                            weight: 'bold',
                            size: 'xxxs',
                            color: 'warning',
                        },
                        0
                    );
                    switch (e) {
                        case c.ACCOUNT_BADGE_STATUS.PENDING:
                            return {
                                text: (0, N.jsx)(E.Localize, {
                                    i18n_default_text: 'In review',
                                }),
                                icon: 'IcMt5Pending',
                            };
                        case c.ACCOUNT_BADGE_STATUS.FAILED:
                            return {
                                text: (0, N.jsx)(E.Localize, {
                                    i18n_default_text: 'Failed',
                                }),
                                icon: 'IcMt5Failed',
                                icon_size: '18',
                            };
                        case c.ACCOUNT_BADGE_STATUS.NEEDS_VERIFICATION:
                            return {
                                text: (0, N.jsx)(E.Localize, {
                                    i18n_default_text: 'Needs Verification',
                                }),
                                icon: 'IcMt5Verification',
                                icon_size: '18',
                            };
                        case c.MT5_ACCOUNT_STATUS.UNDER_MAINTENANCE:
                            return {
                                text: (0, N.jsx)(E.Localize, {
                                    i18n_default_text: '<0>Server maintenance</0>',
                                    components: [t],
                                }),
                                icon: 'IcAlertWarning',
                            };
                        case c.TRADING_PLATFORM_STATUS.UNAVAILABLE:
                            return {
                                text: (0, N.jsx)(E.Localize, {
                                    i18n_default_text: '<0>Temporarily unavailable</0>',
                                    components: [t],
                                }),
                                icon: 'IcAlertWarning',
                            };
                        default:
                            return {
                                text: '',
                                icon: '',
                            };
                    }
                },
                O = ['icon'];

            function D(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t &&
                        (i = i.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        s.push.apply(s, i);
                }
                return s;
            }

            function I(e, t, s) {
                return (
                    (t = (function (e) {
                        var t = (function (e, t) {
                            if ('object' != typeof e || !e) return e;
                            var s = e[Symbol.toPrimitive];
                            if (void 0 !== s) {
                                var i = s.call(e, t || 'default');
                                if ('object' != typeof i) return i;
                                throw new TypeError('@@toPrimitive must return a primitive value.');
                            }
                            return ('string' === t ? String : Number)(e);
                        })(e, 'string');
                        return 'symbol' == typeof t ? t : t + '';
                    })(t)) in e
                        ? Object.defineProperty(e, t, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = s),
                    e
                );
            }
            const U = e => {
                let { icon: t } = e,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var s,
                            i,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var s = {};
                                for (var i in e)
                                    if ({}.hasOwnProperty.call(e, i)) {
                                        if (-1 !== t.indexOf(i)) continue;
                                        s[i] = e[i];
                                    }
                                return s;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            for (i = 0; i < r.length; i++)
                                (s = r[i]), -1 === t.indexOf(s) && {}.propertyIsEnumerable.call(e, s) && (n[s] = e[s]);
                        }
                        return n;
                    })(e, O);
                return (0, N.jsx)(
                    m.Icon,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var s = null != arguments[t] ? arguments[t] : {};
                            t % 2
                                ? D(Object(s), !0).forEach(function (t) {
                                      I(e, t, s[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
                                  : D(Object(s)).forEach(function (t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t));
                                    });
                        }
                        return e;
                    })(
                        {
                            icon: `IcCurrency${(0, c.capitalizeFirstLetter)(t.toLowerCase())}`,
                        },
                        s
                    )
                );
            };
            var M = s(263851),
                P = s(478784);
            const L = (0, l.observer)(e => {
                let { is_visible: t } = e;
                const { client: s, traders_hub: i, ui: n } = (0, u.A)(),
                    {
                        account_list: r,
                        accounts: a,
                        switchAccount: l,
                        has_any_real_account: _,
                        account_status: d,
                        loginid: p,
                    } = s,
                    { closeModal: h, selected_region: g } = i,
                    { openRealAccountSignup: b, toggleSetCurrencyModal: f } = n,
                    x = (0, M.A)(),
                    { text: A, icon: j } = k(x),
                    y = (0, P.A)();
                let w;
                return (0, N.jsxs)(m.Modal, {
                    is_open: t,
                    toggleModal: h,
                    width: '422px',
                    height: '422px',
                    children: [
                        (0, N.jsxs)('div', {
                            className: 'currency-selection-modal__header',
                            children: [
                                (0, N.jsx)(m.Text, {
                                    'line-height': 'm',
                                    weight: 'bold',
                                    children: (0, v.localize)('Select account'),
                                }),
                                (0, N.jsx)(m.Icon, {
                                    className: 'close-icon',
                                    icon: 'IcCross',
                                    onClick: () => h(),
                                }),
                            ],
                        }),
                        (0, N.jsx)('div', {
                            className: 'currency-selection-modal__body',
                            children: r
                                .filter(
                                    e =>
                                        !1 == !!e.is_disabled &&
                                        ((!e.is_virtual && 'Non-EU' === g && e.loginid.startsWith('CR')) ||
                                            ('EU' === g && e.loginid.startsWith('MF')))
                                )
                                .map(e => {
                                    let { icon: t, loginid: s } = e;
                                    const { balance: i, currency: n } = a[s],
                                        r = p === s;
                                    return (0, N.jsxs)(
                                        'div',
                                        {
                                            className: o()('currency-item-card', {
                                                'currency-item-card--active': r,
                                            }),
                                            onClick: async () => {
                                                s !== p &&
                                                    ((0, c.startPerformanceEventTimer)('switch_currency_accounts_time'),
                                                    await l(s)),
                                                    h();
                                            },
                                            children: [
                                                (0, N.jsx)(U, {
                                                    className: 'currency-item-card__icons',
                                                    icon: n ? t : 'UNKNOWN',
                                                    size: 32,
                                                }),
                                                (0, N.jsxs)('div', {
                                                    className: 'currency-item-card__details',
                                                    children: [
                                                        (0, N.jsx)(m.Text, {
                                                            size: 'xs',
                                                            children: (0, c.getCurrencyName)(n),
                                                        }),
                                                        (0, N.jsx)(m.Text, {
                                                            color: r ? 'prominent' : 'less-prominent',
                                                            size: 'xxs',
                                                            children: s,
                                                        }),
                                                    ],
                                                }),
                                                (0, N.jsx)('div', {
                                                    className: 'currency-item-card__balance',
                                                    children: x
                                                        ? (0, N.jsx)(m.StatusBadge, {
                                                              account_status: x,
                                                              icon: j,
                                                              text: A,
                                                          })
                                                        : (0, N.jsx)(m.Text, {
                                                              size: 'xs',
                                                              color: 'prominent',
                                                              children: (0, N.jsx)(m.Money, {
                                                                  amount: i,
                                                                  currency: n,
                                                                  show_currency: !0,
                                                              }),
                                                          }),
                                                }),
                                            ],
                                        },
                                        s
                                    );
                                }),
                        }),
                        (0, N.jsx)('div', {
                            className: 'currency-selection-modal__bottom-controls',
                            children: (0, N.jsx)(m.Button, {
                                className: 'block-button',
                                onClick: () => {
                                    clearTimeout(w),
                                        (w = setTimeout(() => {
                                            _ && !y ? f() : b('manage');
                                        }, 500)),
                                        h();
                                },
                                secondary: !0,
                                large: !0,
                                children: (0, v.localize)('Add or manage account'),
                            }),
                        }),
                    ],
                });
            });
            var z = s(203117),
                F = s(652997),
                R = s(878262),
                B = s(674764);
            const G = (0, l.observer)(e => {
                let { onClickDeposit: t, is_traders_hub_routes: s } = e;
                const { client: i, ui: n, notifications: r } = (0, u.A)(),
                    { account_type: o, balance: a, currency: c, is_eu: l, is_logged_in: _, is_virtual: p } = i,
                    {
                        account_switcher_disabled_message: h,
                        disableApp: m,
                        enableApp: g,
                        is_account_switcher_disabled: b,
                        is_accounts_switcher_on: f,
                        openRealAccountSignup: x,
                        toggleAccountsDialog: A,
                    } = n,
                    { is_notifications_visible: v, notifications: j, toggleNotificationsModal: y } = r,
                    w = j.filter(e => !e.only_toast_message);
                return (0, N.jsx)('div', {
                    id: 'dt_core_header_acc-info-container',
                    className: 'acc-info__container',
                    children: (0, N.jsx)(d.Xw, {
                        acc_switcher_disabled_message: h,
                        account_type: o,
                        balance: a,
                        currency: c,
                        disableApp: m,
                        enableApp: g,
                        is_acc_switcher_on: f,
                        is_acc_switcher_disabled: b,
                        is_eu: l,
                        is_notifications_visible: v,
                        is_logged_in: _,
                        is_traders_hub_routes: s,
                        is_virtual: p,
                        onClickDeposit: t,
                        notifications_count: w.length,
                        toggleAccountsDialog: A,
                        toggleNotifications: y,
                        openRealAccountSignup: x,
                    }),
                });
            });
            var W = s(838549);
            const V = (0, l.observer)(() => {
                const { client: e, common: t, ui: s, notifications: r, traders_hub: l } = (0, u.A)(),
                    {
                        currency: m,
                        has_any_real_account: g,
                        has_wallet: b,
                        is_bot_allowed: f,
                        is_dxtrade_allowed: x,
                        is_logged_in: A,
                        is_logging_in: v,
                        is_single_logging_in: j,
                        is_mt5_allowed: y,
                        is_virtual: w,
                        is_switching: T,
                        is_client_store_initialized: E,
                    } = e,
                    { app_routing_history: k, current_language: O, platform: D, is_from_tradershub_os: I } = t,
                    {
                        header_extension: U,
                        is_app_disabled: M,
                        is_route_modal_on: P,
                        toggleReadyToDepositModal: V,
                        is_real_acc_signup_on: H,
                    } = s,
                    { addNotificationMessage: $, client_notifications: q, removeNotificationMessage: K } = r,
                    { setTogglePlatformType: X, modal_data: Y } = l,
                    { isHubRedirectionEnabled: J, isHubRedirectionLoaded: Q } = (0, a.A)(),
                    { isDesktop: Z } = (0, _.Y)(),
                    ee = (0, n.useHistory)(),
                    { pathname: te } = (0, n.useLocation)(),
                    se =
                        [c.routes.traders_hub].includes(te) ||
                        [
                            c.routes.account,
                            c.routes.settings,
                            c.routes.wallets_compare_accounts,
                            c.routes.compare_cfds,
                        ].some(e => te.startsWith(e)),
                    ie = i.useCallback(
                        () =>
                            K({
                                key: 'new_version_available',
                            }),
                        [K]
                    );
                i.useEffect(
                    () => (
                        document.addEventListener('IgnorePWAUpdate', ie),
                        () => document.removeEventListener('IgnorePWAUpdate', ie)
                    ),
                    [ie]
                );
                const ne = e =>
                        e.filter(e =>
                            e.link_to === c.routes.mt5
                                ? !A || y
                                : e.link_to === c.routes.dxtrade
                                  ? x
                                  : (e.href !== c.routes.bot && e.href !== c.routes.smarttrader) || f
                        ),
                    re = [
                        c.routes.trade,
                        c.routes.trader_positions,
                        c.routes.complaints_policy,
                        c.routes.endpoint,
                        c.routes.redirect,
                        c.routes.index,
                        c.routes.error404,
                        c.routes.reports,
                        c.routes.positions,
                        c.routes.profit,
                        c.routes.statement,
                        '/contract',
                    ].some(e => window.location.pathname.includes(e));
                return (!E && !re) || (b && !Q && !re) || (b && Q && !re && J)
                    ? null
                    : (0, N.jsxs)('header', {
                          className: o()('header', {
                              'header--is-disabled': M || P,
                              'header--is-hidden': c.platforms[D] && !I,
                              'header--tradershub_os_mobile': A && I && !Z,
                              'header--tradershub_os_desktop': A && I && Z,
                          }),
                          children: [
                              (0, N.jsxs)('div', {
                                  className: 'header__menu-items',
                                  children: [
                                      (0, N.jsxs)('div', {
                                          className: 'header__menu-left',
                                          children: [
                                              Z
                                                  ? (0, N.jsxs)(i.Fragment, {
                                                        children: [
                                                            (0, N.jsx)(B.A, {}),
                                                            (0, N.jsx)('div', {
                                                                className: 'header__divider',
                                                            }),
                                                            (0, N.jsx)(W.A, {}),
                                                        ],
                                                    })
                                                  : (0, N.jsx)(i.Fragment, {
                                                        children: I
                                                            ? (0, N.jsxs)(N.Fragment, {
                                                                  children: [
                                                                      (0, N.jsx)(S, {
                                                                          platform_config: ne(C.A),
                                                                      }),
                                                                      (0, N.jsx)(B.A, {}),
                                                                  ],
                                                              })
                                                            : (0, N.jsxs)(N.Fragment, {
                                                                  children: [
                                                                      (0, N.jsx)(h.A, {
                                                                          platform_config: ne(C.A),
                                                                      }),
                                                                      (0, N.jsx)(B.A, {}),
                                                                      U &&
                                                                          A &&
                                                                          (0, N.jsx)('div', {
                                                                              className: 'header__menu-left-extensions',
                                                                              children: U,
                                                                          }),
                                                                  ],
                                                              }),
                                                    }),
                                              (0, N.jsx)(d.$2, {
                                                  is_traders_hub_routes: se,
                                              }),
                                              Z &&
                                                  !se &&
                                                  !location.pathname.includes(c.routes.cashier) &&
                                                  (0, N.jsx)(d.ft, {
                                                      app_routing_history: k,
                                                      platform_config: ne(C.A),
                                                      setTogglePlatformType: X,
                                                      current_language: O,
                                                  }),
                                          ],
                                      }),
                                      (0, N.jsx)('div', {
                                          className: o()('header__menu-right', {
                                              'header__menu-right--hidden': !Z && v,
                                          }),
                                          children:
                                              v || j || T
                                                  ? (0, N.jsx)('div', {
                                                        id: 'dt_core_header_acc-info-preloader',
                                                        className: o()('acc-info__preloader', {
                                                            'acc-info__preloader--no-currency': !m,
                                                        }),
                                                        children: (0, N.jsx)(p.sk, {
                                                            is_logged_in: A,
                                                            is_desktop: Z,
                                                            speed: 3,
                                                            is_traders_hub_routes: se,
                                                        }),
                                                    })
                                                  : !I &&
                                                    (0, N.jsx)(G, {
                                                        onClickDeposit: () => {
                                                            !g && w ? V() : ee.push(c.routes.cashier_deposit);
                                                        },
                                                        is_traders_hub_routes: se,
                                                    }),
                                      }),
                                  ],
                              }),
                              H && (0, N.jsx)(F.A, {}),
                              (0, N.jsx)(R.A, {}),
                              (0, N.jsx)(L, {
                                  is_visible: 'currency_selection' === Y.active_modal,
                              }),
                              (0, N.jsx)(z.A, {
                                  onUpdate: () => $(null == q ? void 0 : q.new_version_available),
                              }),
                          ],
                      });
            });
        },
        471879: (e, t, s) => {
            s.d(t, {
                A: () => o,
            });
            var i = s(286326),
                n = s(504377),
                r = s(414646);
            const o = () => {
                var e, t, s, o;
                const { client: a } = (0, r.A)(),
                    { account_status: c, is_logged_in: l, updateAccountStatus: u } = a || {};
                (0, i.useEffect)(() => {
                    !(async function () {
                        !l || (c && window.location.pathname.startsWith(n.routes.trade)) || (await u());
                    })();
                }, []);
                const _ = null == c ? void 0 : c.authentication,
                    d = null == _ || null === (e = _.identity) || void 0 === e ? void 0 : e.status,
                    p =
                        null == _ ||
                        null === (t = _.identity) ||
                        void 0 === t ||
                        null === (t = t.services) ||
                        void 0 === t ||
                        null === (t = t.onfido) ||
                        void 0 === t
                            ? void 0
                            : t.status,
                    h =
                        null == _ ||
                        null === (s = _.identity) ||
                        void 0 === s ||
                        null === (s = s.services) ||
                        void 0 === s ||
                        null === (s = s.manual) ||
                        void 0 === s
                            ? void 0
                            : s.status,
                    m = null == _ || null === (o = _.document) || void 0 === o ? void 0 : o.status,
                    g = 'none',
                    b = 'verified',
                    f = 'pending',
                    x = m && ['rejected', 'expired', 'suspected'].includes(m),
                    A = m === f,
                    v = m === g,
                    j = [p, h].includes(b),
                    y = [p, h].includes(f) && !j,
                    w = [p, h].every(e => e === g),
                    N = d === b && m === b;
                return {
                    mf_account_status:
                        m && p && h
                            ? (!w && !y && !j) || x
                                ? n.ACCOUNT_BADGE_STATUS.FAILED
                                : w || v
                                  ? n.ACCOUNT_BADGE_STATUS.NEEDS_VERIFICATION
                                  : y || A
                                    ? n.ACCOUNT_BADGE_STATUS.PENDING
                                    : null
                            : null,
                    kyc_status: N
                        ? {}
                        : {
                              poi_status: d,
                              poa_status: m,
                              valid_tin: 1,
                              required_tin: 1,
                          },
                };
            };
        },
        526248: (e, t, s) => {
            s.d(t, {
                A: () => l,
            });
            var i = s(286326),
                n = s(394559),
                r = s.n(n),
                o = s(504377),
                a = s(414646),
                c = s(788624);
            const l = () => {
                var e;
                const {
                        p2p_settings: t,
                        rest: { isLoading: s, isSubscribed: n },
                    } = (0, c.A)(),
                    { client: l, traders_hub: u } = (0, a.A)(),
                    { currency: _, email: d, is_virtual: p, loginid: h, setIsP2PEnabled: m } = l,
                    { is_low_risk_cr_eu_real: g } = u,
                    b =
                        Boolean(
                            null == t || null === (e = t.supported_currencies) || void 0 === e
                                ? void 0
                                : e.includes(_.toLocaleLowerCase())
                        ) &&
                        !p &&
                        !g;
                return (
                    i.useEffect(() => {
                        if ((m(b), d && h)) {
                            const e = /deriv\.(com|me|be)/.test(window.location.hostname)
                                ? o.deriv_urls.DERIV_HOST_NAME
                                : window.location.hostname;
                            r().set('is_p2p_disabled', (!b).toString(), {
                                domain: e,
                                secure: !0,
                                sameSite: 'none',
                            });
                        }
                    }, [d, b, h, m]),
                    {
                        is_p2p_enabled: b,
                        is_p2p_enabled_loading: s,
                        is_p2p_enabled_success: n,
                    }
                );
            };
        },
        263851: (e, t, s) => {
            s.d(t, {
                A: () => a,
            });
            var i = s(504377),
                n = s(56752),
                r = s(471879),
                o = s(414646);
            const a = () => {
                const {
                        client: { is_eu: e },
                    } = (0, o.A)(),
                    t = (0, n.A)(),
                    { mf_account_status: s } = (0, r.A)();
                return e &&
                    t &&
                    s &&
                    [
                        i.ACCOUNT_BADGE_STATUS.PENDING,
                        i.ACCOUNT_BADGE_STATUS.FAILED,
                        i.ACCOUNT_BADGE_STATUS.NEEDS_VERIFICATION,
                    ].includes(s)
                    ? s
                    : null;
            };
        },
    },
]);
//# sourceMappingURL=core.chunk.dtrader-header.3b91927ada4b6b154a30.js.map
