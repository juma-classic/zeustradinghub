type TTabsTitle = {
    [key: string]: string | number;
};

type TDashboardTabIndex = {
    [key: string]: number;
};

export const tabs_title: TTabsTitle = Object.freeze({
    WORKSPACE: 'Workspace',
    CHART: 'Chart',
});

export const DBOT_TABS: TDashboardTabIndex = Object.freeze({
    DASHBOARD: 0,
    AUTO_STRATEGY: 1,
    STRATEGY_BUILDER: 2,
    STRATEGY_MONITOR: 3,
    BOT_BUILDER: 4,
    DCIRCLES: 5,
    CHART: 6,
    TUTORIAL: 7,
    PATEL_SIGNALS: 8,
    PATEL_SIGNAL_CENTER: 9,
    ANALYSIS_TOOL: 10,
    SIGNALS: 11,
    ADVANCED_ALGO: 12,
    FREE_BOTS: 13,
    SIGNAL_SAVVY: 14,
    FAST_LANE: 15,
    ELVIS_ZONE: 16,
    TICKSHARK: 17,
    COPY_TRADING: 18,
    ACCUMULATOR: 19,
    DIGIT_HACKER: 20,
    X_SIGNALS: 21,
    TRACK_SIGNALS: 22,
    TRACK_ANALYZER: 23,
    TRACK_CALCULATOR: 24,
    DIGIT_ANALYSIS: 25,
    HACKS_ANALYSIS: 26,
});

export const MAX_STRATEGIES = 10;

export const TAB_IDS = [
    'id-dbot-dashboard',
    'id-auto-strategy',
    'id-strategy-builder',
    'id-strategy-monitor',
    'id-bot-builder',
    'id-dcircles',
    'id-charts',
    'id-tutorials',
    'id-patel-signals',
    'id-patel-signal-center',
    'id-analysis-tool',
    'id-signals',
    'id-advanced-algo',
    'id-free-bots',
    'id-signal-savvy',
    'id-fast-lane',
    'id-elvis-zone',
    'id-tickshark',
    'id-copy-trading',
    'id-accumulator',
    'id-digit-hacker',
    'id-track-signals',
    'id-track-analyzer',
    'id-track-calculator',
    'id-digit-analysis',
    'id-hacks-analysis',
];

export const DEBOUNCE_INTERVAL_TIME = 500;
