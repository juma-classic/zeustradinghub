/**
 * Backtesting Service Tests
 */

import { BacktestingService } from '../backtesting.service';
import { StrategyEvaluator } from '../strategy-evaluator.service';
import { AuditLogService } from '../audit-log.service';
import {
    BacktestingMode,
    BacktestingConfig,
    Strategy,
    ConditionType,
    LogicOperator,
    ActionType,
    StrategyPriority,
    ComparisonOperator,
} from '../../../types/auto-strategy.types';
import { generateHistoricalData } from '../../../utils/historical-data-generator';

describe('BacktestingService', () => {
    let backtestingService: BacktestingService;
    let strategyEvaluator: StrategyEvaluator;
    let auditLog: AuditLogService;

    beforeEach(() => {
        strategyEvaluator = new StrategyEvaluator();
        auditLog = new AuditLogService();
        backtestingService = new BacktestingService(strategyEvaluator, auditLog);
    });

    describe('Mode Management', () => {
        it('should start in live mode', () => {
            expect(backtestingService.getMode()).toBe(BacktestingMode.Live);
        });

        it('should enable backtesting mode', () => {
            backtestingService.enableBacktestingMode();
            expect(backtestingService.getMode()).toBe(BacktestingMode.Backtesting);
        });

        it('should disable backtesting mode', () => {
            backtestingService.enableBacktestingMode();
            backtestingService.disableBacktestingMode();
            expect(backtestingService.getMode()).toBe(BacktestingMode.Live);
        });

        it('should not allow mode change while backtesting is running', async () => {
            const historicalData = generateHistoricalData('R_100', 100);
            const strategy: Strategy = createTestStrategy();

            const config: BacktestingConfig = {
                historicalData: [historicalData],
                strategies: [strategy],
                initialBalance: 10000,
                tradeDuration: 60,
                simulatedWinRate: 0.55,
                profitPercentage: 0.95,
                lossPercentage: 1.0,
            };

            // Start backtest (don't await)
            const backtestPromise = backtestingService.runBacktest(config);

            // Try to change mode while running
            expect(() => backtestingService.enableBacktestingMode()).toThrow();

            // Wait for backtest to complete
            await backtestPromise;
        });
    });

    describe('Historical Data Loading', () => {
        it('should load valid historical data from JSON', async () => {
            const historicalData = generateHistoricalData('R_100', 50);
            const json = JSON.stringify(historicalData);

            const loaded = await backtestingService.loadHistoricalData(json);

            expect(loaded.symbol).toBe('R_100');
            expect(loaded.ticks.length).toBe(50);
        });

        it('should reject invalid JSON', async () => {
            await expect(
                backtestingService.loadHistoricalData('invalid json')
            ).rejects.toThrow();
        });

        it('should reject data without required fields', async () => {
            const invalidData = { symbol: 'R_100' }; // Missing ticks
            const json = JSON.stringify(invalidData);

            await expect(
                backtestingService.loadHistoricalData(json)
            ).rejects.toThrow();
        });
    });

    describe('Backtesting Execution', () => {
        it('should run backtest and generate report', async () => {
            const historicalData = generateHistoricalData('R_100', 100);
            const strategy = createTestStrategy();

            const config: BacktestingConfig = {
                historicalData: [historicalData],
                strategies: [strategy],
                initialBalance: 10000,
                tradeDuration: 60,
                simulatedWinRate: 0.55,
                profitPercentage: 0.95,
                lossPercentage: 1.0,
            };

            const report = await backtestingService.runBacktest(config);

            expect(report).toBeDefined();
            expect(report.mode).toBe(BacktestingMode.Backtesting);
            expect(report.ticksProcessed).toBe(100);
            expect(report.strategyReports.length).toBe(1);
        });

        it('should calculate strategy performance metrics', async () => {
            const historicalData = generateHistoricalData('R_100', 200);
            const strategy = createTestStrategy();

            const config: BacktestingConfig = {
                historicalData: [historicalData],
                strategies: [strategy],
                initialBalance: 10000,
                tradeDuration: 60,
                simulatedWinRate: 0.6,
                profitPercentage: 0.95,
                lossPercentage: 1.0,
            };

            const report = await backtestingService.runBacktest(config);
            const strategyReport = report.strategyReports[0];

            expect(strategyReport.strategyId).toBe(strategy.id);
            expect(strategyReport.triggerCount).toBeGreaterThanOrEqual(0);
            expect(strategyReport.winRate).toBeGreaterThanOrEqual(0);
            expect(strategyReport.winRate).toBeLessThanOrEqual(100);
        });

        it('should respect strategy cooldown periods', async () => {
            const historicalData = generateHistoricalData('R_100', 100);
            const strategy = createTestStrategy();
            strategy.cooldownPeriod = 10; // 10 seconds cooldown

            const config: BacktestingConfig = {
                historicalData: [historicalData],
                strategies: [strategy],
                initialBalance: 10000,
                tradeDuration: 60,
                simulatedWinRate: 0.55,
                profitPercentage: 0.95,
                lossPercentage: 1.0,
            };

            const report = await backtestingService.runBacktest(config);
            const strategyReport = report.strategyReports[0];

            // With cooldown, triggers should be limited
            expect(strategyReport.triggerCount).toBeLessThan(100);
        });

        it('should handle multiple strategies', async () => {
            const historicalData = generateHistoricalData('R_100', 100);
            const strategy1 = createTestStrategy();
            const strategy2 = createTestStrategy();
            strategy2.id = 'strategy-2';
            strategy2.name = 'Test Strategy 2';

            const config: BacktestingConfig = {
                historicalData: [historicalData],
                strategies: [strategy1, strategy2],
                initialBalance: 10000,
                tradeDuration: 60,
                simulatedWinRate: 0.55,
                profitPercentage: 0.95,
                lossPercentage: 1.0,
            };

            const report = await backtestingService.runBacktest(config);

            expect(report.strategyReports.length).toBe(2);
        });

        it('should throw error if no historical data provided', async () => {
            const strategy = createTestStrategy();

            const config: BacktestingConfig = {
                historicalData: [],
                strategies: [strategy],
                initialBalance: 10000,
                tradeDuration: 60,
                simulatedWinRate: 0.55,
                profitPercentage: 0.95,
                lossPercentage: 1.0,
            };

            await expect(backtestingService.runBacktest(config)).rejects.toThrow(
                'No historical data provided'
            );
        });

        it('should throw error if no strategies provided', async () => {
            const historicalData = generateHistoricalData('R_100', 100);

            const config: BacktestingConfig = {
                historicalData: [historicalData],
                strategies: [],
                initialBalance: 10000,
                tradeDuration: 60,
                simulatedWinRate: 0.55,
                profitPercentage: 0.95,
                lossPercentage: 1.0,
            };

            await expect(backtestingService.runBacktest(config)).rejects.toThrow(
                'No strategies provided'
            );
        });
    });

    describe('Progress Reporting', () => {
        it('should emit progress updates during backtesting', async () => {
            const historicalData = generateHistoricalData('R_100', 500);
            const strategy = createTestStrategy();

            const config: BacktestingConfig = {
                historicalData: [historicalData],
                strategies: [strategy],
                initialBalance: 10000,
                tradeDuration: 60,
                simulatedWinRate: 0.55,
                profitPercentage: 0.95,
                lossPercentage: 1.0,
            };

            const progressUpdates: number[] = [];
            backtestingService.onProgress((progress) => {
                progressUpdates.push(progress.progressPercentage);
            });

            await backtestingService.runBacktest(config);

            expect(progressUpdates.length).toBeGreaterThan(0);
            expect(progressUpdates[progressUpdates.length - 1]).toBe(100);
        });

        it('should emit completion event', async () => {
            const historicalData = generateHistoricalData('R_100', 100);
            const strategy = createTestStrategy();

            const config: BacktestingConfig = {
                historicalData: [historicalData],
                strategies: [strategy],
                initialBalance: 10000,
                tradeDuration: 60,
                simulatedWinRate: 0.55,
                profitPercentage: 0.95,
                lossPercentage: 1.0,
            };

            let completionCalled = false;
            backtestingService.onComplete(() => {
                completionCalled = true;
            });

            await backtestingService.runBacktest(config);

            expect(completionCalled).toBe(true);
        });
    });

    describe('Report Export', () => {
        it('should export report as JSON', async () => {
            const historicalData = generateHistoricalData('R_100', 100);
            const strategy = createTestStrategy();

            const config: BacktestingConfig = {
                historicalData: [historicalData],
                strategies: [strategy],
                initialBalance: 10000,
                tradeDuration: 60,
                simulatedWinRate: 0.55,
                profitPercentage: 0.95,
                lossPercentage: 1.0,
            };

            const report = await backtestingService.runBacktest(config);
            const json = backtestingService.exportReport(report);

            expect(json).toBeDefined();
            expect(() => JSON.parse(json)).not.toThrow();
        });

        it('should generate report summary', async () => {
            const historicalData = generateHistoricalData('R_100', 100);
            const strategy = createTestStrategy();

            const config: BacktestingConfig = {
                historicalData: [historicalData],
                strategies: [strategy],
                initialBalance: 10000,
                tradeDuration: 60,
                simulatedWinRate: 0.55,
                profitPercentage: 0.95,
                lossPercentage: 1.0,
            };

            const report = await backtestingService.runBacktest(config);
            const summary = backtestingService.generateReportSummary(report);

            expect(summary).toContain('Backtesting Report Summary');
            expect(summary).toContain('Overall Performance');
            expect(summary).toContain('Strategy Performance');
        });
    });
});

// Helper function to create a test strategy
function createTestStrategy(): Strategy {
    return {
        id: 'test-strategy-1',
        name: 'Test Strategy',
        description: 'A test strategy for backtesting',
        symbol: 'R_100',
        conditions: [
            {
                type: ConditionType.Volatility,
                tickCount: 50,
                operator: ComparisonOperator.GreaterThan,
                threshold: 0.01,
            },
        ],
        logicOperator: LogicOperator.AND,
        action: {
            type: ActionType.StartBot,
            botId: 'test-bot',
            stake: 10,
        },
        priority: StrategyPriority.Medium,
        cooldownPeriod: 5,
        isActive: true,
        isPaused: false,
        createdAt: Date.now(),
        updatedAt: Date.now(),
    };
}
