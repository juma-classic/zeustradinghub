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
    BOT_BUILDER: 3,
    DCIRCLES: 4,
    CHART: 5,
    TUTORIAL: 6,
    PATEL_SIGNALS: 7,
    PATEL_SIGNAL_CENTER: 8,
    ANALYSIS_TOOL: 9,
    SIGNALS: 10,
    ADVANCED_ALGO: 11,
    FREE_BOTS: 12,
    SIGNAL_SAVVY: 13,
    FAST_LANE: 14,
    ELVIS_ZONE: 15,
    TICKSHARK: 16,
    COPY_TRADING: 17,
    ACCUMULATOR: 18,
    DIGIT_HACKER: 19,
    X_SIGNALS: 20,
    TRACK_SIGNALS: 21,
    TRACK_ANALYZER: 22,
    TRACK_CALCULATOR: 23,
    DIGIT_ANALYSIS: 24,
    HACKS_ANALYSIS: 25,
});

export const MAX_STRATEGIES = 10;

export const TAB_IDS = [
    'id-dbot-dashboard',
    'id-auto-strategy',
    'id-strategy-builder',
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
