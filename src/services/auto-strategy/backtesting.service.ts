/**
 * Backtesting Service
 * 
 * Provides backtesting functionality for Auto Strategy Controller.
 * Allows testing strategies against historical tick data without executing real trades.
 */

import {
    BacktestingConfig,
    BacktestingMode,
    BacktestingProgress,
    BacktestingReport,
    HistoricalTickData,
    SimulatedBotExecution,
    Strategy,
    StrategyBacktestReport,
    Tick,
} from '../../types/auto-strategy.types';
import { StrategyEvaluator } from './strategy-evaluator.service';
import { AuditLogService } from './audit-log.service';

/**
 * Backtesting service for testing strategies against historical data
 */
export class BacktestingService {
    private mode: BacktestingMode = BacktestingMode.Live;
    private isRunning: boolean = false;
    private currentReport: BacktestingReport | null = null;
    private progressCallbacks: ((progress: BacktestingProgress) => void)[] = [];
    private completionCallbacks: ((report: BacktestingReport) => void)[] = [];
    private strategyEvaluator: StrategyEvaluator;
    private auditLog: AuditLogService;

    constructor(strategyEvaluator: StrategyEvaluator, auditLog: AuditLogService) {
        this.strategyEvaluator = strategyEvaluator;
        this.auditLog = auditLog;
    }

    /**
     * Get current backtesting mode
     */
    getMode(): BacktestingMode {
        return this.mode;
    }

    /**
     * Check if backtesting is currently running
     */
    isBacktesting(): boolean {
        return this.isRunning;
    }

    /**
     * Get the most recent backtesting report
     */
    getLastReport(): BacktestingReport | null {
        return this.currentReport;
    }

    /**
     * Enable backtesting mode
     */
    enableBacktestingMode(): void {
        if (this.isRunning) {
            throw new Error('Cannot change mode while backtesting is running');
        }
        this.mode = BacktestingMode.Backtesting;
        this.auditLog.log({
            type: 'system',
            message: 'Backtesting mode enabled',
            timestamp: Date.now(),
        });
    }

    /**
     * Disable backtesting mode (return to live mode)
     */
    disableBacktestingMode(): void {
        if (this.isRunning) {
            throw new Error('Cannot change mode while backtesting is running');
        }
        this.mode = BacktestingMode.Live;
        this.auditLog.log({
            type: 'system',
            message: 'Backtesting mode disabled - returned to live mode',
            timestamp: Date.now(),
        });
    }

    /**
     * Subscribe to backtesting progress updates
     */
    onProgress(callback: (progress: BacktestingProgress) => void): () => void {
        this.progressCallbacks.push(callback);
        return () => {
            this.progressCallbacks = this.progressCallbacks.filter(cb => cb !== callback);
        };
    }

    /**
     * Subscribe to backtesting completion
     */
    onComplete(callback: (report: BacktestingReport) => void): () => void {
        this.completionCallbacks.push(callback);
        return () => {
            this.completionCallbacks = this.completionCallbacks.filter(cb => cb !== callback);
        };
    }

    /**
     * Run backtesting with the provided configuration
     */
    async runBacktest(config: BacktestingConfig): Promise<BacktestingReport> {
        if (this.isRunning) {
            throw new Error('Backtesting is already running');
        }

        if (config.historicalData.length === 0) {
            throw new Error('No historical data provided');
        }

        if (config.strategies.length === 0) {
            throw new Error('No strategies provided');
        }

        this.isRunning = true;
        this.mode = BacktestingMode.Backtesting;

        try {
            this.auditLog.log({
                type: 'backtest_started',
                message: `Backtesting started with ${config.strategies.length} strategies`,
                timestamp: Date.now(),
                metadata: {
                    strategyCount: config.strategies.length,
                    symbols: config.historicalData.map(d => d.symbol),
                },
            });

            const report = await this.executeBacktest(config);
            this.currentReport = report;

            this.auditLog.log({
                type: 'backtest_completed',
                message: 'Backtesting completed successfully',
                timestamp: Date.now(),
                metadata: {
                    duration: report.duration,
                    ticksProcessed: report.ticksProcessed,
                    totalTriggers: report.overall.totalTriggers,
                    netProfitLoss: report.overall.netProfitLoss,
                },
            });

            // Notify completion callbacks
            this.completionCallbacks.forEach(cb => cb(report));

            return report;
        } catch (error) {
            this.auditLog.log({
                type: 'error',
                message: 'Backtesting failed',
                timestamp: Date.now(),
                error: error instanceof Error ? error.message : String(error),
            });
            throw error;
        } finally {
            this.isRunning = false;
        }
    }

    /**
     * Stop the currently running backtest
     */
    stopBacktest(): void {
        if (!this.isRunning) {
            return;
        }
        this.isRunning = false;
        this.auditLog.log({
            type: 'backtest_stopped',
            message: 'Backtesting stopped by user',
            timestamp: Date.now(),
        });
    }

    /**
     * Load historical tick data from JSON
     */
    async loadHistoricalData(json: string): Promise<HistoricalTickData> {
        try {
            const data = JSON.parse(json);
            
            if (!data.symbol || !Array.isArray(data.ticks)) {
                throw new Error('Invalid historical data format');
            }

            // Validate tick structure
            for (const tick of data.ticks) {
                if (!tick.epoch || !tick.quote || !tick.symbol) {
                    throw new Error('Invalid tick data structure');
                }
            }

            const historicalData: HistoricalTickData = {
                symbol: data.symbol,
                ticks: data.ticks,
                startTime: data.ticks[0]?.epoch || Date.now(),
                endTime: data.ticks[data.ticks.length - 1]?.epoch || Date.now(),
            };

            this.auditLog.log({
                type: 'historical_data_loaded',
                message: `Loaded ${data.ticks.length} historical ticks for ${data.symbol}`,
                timestamp: Date.now(),
            });

            return historicalData;
        } catch (error) {
            throw new Error(`Failed to load historical data: ${error instanceof Error ? error.message : String(error)}`);
        }
    }

    /**
     * Execute the backtesting process
     */
    private async executeBacktest(config: BacktestingConfig): Promise<BacktestingReport> {
        const startTime = Date.now();
        
        // Merge all ticks from all symbols and sort by timestamp
        const allTicks: Tick[] = [];
        for (const historicalData of config.historicalData) {
            allTicks.push(...historicalData.ticks);
        }
        allTicks.sort((a, b) => a.epoch - b.epoch);

        const totalTicks = allTicks.length;
        const symbols = config.historicalData.map(d => d.symbol);

        // Initialize strategy reports
        const strategyReports = new Map<string, StrategyBacktestReport>();
        const strategyExecutions = new Map<string, SimulatedBotExecution[]>();
        const strategyCooldowns = new Map<string, number>();

        for (const strategy of config.strategies) {
            strategyReports.set(strategy.id, {
                strategyId: strategy.id,
                strategyName: strategy.name,
                triggerCount: 0,
                executionCount: 0,
                totalProfit: 0,
                totalLoss: 0,
                netProfitLoss: 0,
                winCount: 0,
                lossCount: 0,
                winRate: 0,
                avgProfit: 0,
                avgLoss: 0,
                profitFactor: 0,
                maxDrawdown: 0,
                executions: [],
            });
            strategyExecutions.set(strategy.id, []);
            strategyCooldowns.set(strategy.id, 0);
        }

        // Build tick buffers for each symbol
        const tickBuffers = new Map<string, Tick[]>();
        for (const symbol of symbols) {
            tickBuffers.set(symbol, []);
        }

        // Process each tick
        for (let i = 0; i < totalTicks; i++) {
            const tick = allTicks[i];
            const currentTime = tick.epoch * 1000; // Convert to milliseconds

            // Add tick to appropriate buffer
            const buffer = tickBuffers.get(tick.symbol) || [];
            buffer.push(tick);
            if (buffer.length > 1000) {
                buffer.shift(); // Keep only last 1000 ticks
            }
            tickBuffers.set(tick.symbol, buffer);

            // Evaluate each strategy
            for (const strategy of config.strategies) {
                // Check cooldown
                const cooldownEnd = strategyCooldowns.get(strategy.id) || 0;
                if (currentTime < cooldownEnd) {
                    continue;
                }

                // Get the appropriate symbol for this strategy
                const strategySymbol = strategy.symbols?.[0] || strategy.symbol;
                const strategyBuffer = tickBuffers.get(strategySymbol) || [];

                if (strategyBuffer.length === 0) {
                    continue;
                }

                // Evaluate strategy
                const evaluationContext = {
                    currentTick: tick,
                    tickBuffer: strategyBuffer,
                    tickBuffers,
                    symbol: strategySymbol,
                    timestamp: currentTime,
                };

                const result = this.strategyEvaluator.evaluateStrategy(strategy, evaluationContext);

                // If strategy triggered, simulate bot execution
                if (result.triggered) {
                    const report = strategyReports.get(strategy.id)!;
                    report.triggerCount++;

                    // Simulate bot execution
                    const execution = this.simulateBotExecution(
                        strategy,
                        tick,
                        config,
                        currentTime
                    );

                    strategyExecutions.get(strategy.id)!.push(execution);
                    report.executionCount++;

                    // Update statistics
                    if (execution.isWin) {
                        report.winCount++;
                        report.totalProfit += execution.profitLoss;
                    } else {
                        report.lossCount++;
                        report.totalLoss += Math.abs(execution.profitLoss);
                    }

                    // Set cooldown
                    strategyCooldowns.set(strategy.id, currentTime + (strategy.cooldownPeriod * 1000));
                }
            }

            // Report progress every 100 ticks
            if (i % 100 === 0 || i === totalTicks - 1) {
                const progress: BacktestingProgress = {
                    currentTick: i + 1,
                    totalTicks,
                    progressPercentage: ((i + 1) / totalTicks) * 100,
                    currentTimestamp: currentTime,
                };
                this.progressCallbacks.forEach(cb => cb(progress));
            }
        }

        // Calculate final statistics for each strategy
        for (const [strategyId, report] of strategyReports) {
            const executions = strategyExecutions.get(strategyId)!;
            report.executions = executions;
            report.netProfitLoss = report.totalProfit - report.totalLoss;
            report.winRate = report.executionCount > 0 
                ? (report.winCount / report.executionCount) * 100 
                : 0;
            report.avgProfit = report.winCount > 0 
                ? report.totalProfit / report.winCount 
                : 0;
            report.avgLoss = report.lossCount > 0 
                ? report.totalLoss / report.lossCount 
                : 0;
            report.profitFactor = report.totalLoss > 0 
                ? report.totalProfit / report.totalLoss 
                : report.totalProfit > 0 ? Infinity : 0;
            
            // Calculate max drawdown
            report.maxDrawdown = this.calculateMaxDrawdown(executions);
        }

        // Calculate overall statistics
        const strategyReportArray = Array.from(strategyReports.values());
        const overall = {
            totalTriggers: strategyReportArray.reduce((sum, r) => sum + r.triggerCount, 0),
            totalExecutions: strategyReportArray.reduce((sum, r) => sum + r.executionCount, 0),
            totalProfit: strategyReportArray.reduce((sum, r) => sum + r.totalProfit, 0),
            totalLoss: strategyReportArray.reduce((sum, r) => sum + r.totalLoss, 0),
            netProfitLoss: 0,
            overallWinRate: 0,
        };
        overall.netProfitLoss = overall.totalProfit - overall.totalLoss;
        overall.overallWinRate = overall.totalExecutions > 0
            ? (strategyReportArray.reduce((sum, r) => sum + r.winCount, 0) / overall.totalExecutions) * 100
            : 0;

        const endTime = Date.now();

        return {
            mode: BacktestingMode.Backtesting,
            startTime: allTicks[0]?.epoch * 1000 || startTime,
            endTime: allTicks[allTicks.length - 1]?.epoch * 1000 || endTime,
            duration: (endTime - startTime) / 1000,
            ticksProcessed: totalTicks,
            symbols,
            strategyReports: strategyReportArray,
            overall,
        };
    }

    /**
     * Simulate a bot execution with random outcome
     */
    private simulateBotExecution(
        strategy: Strategy,
        tick: Tick,
        config: BacktestingConfig,
        currentTime: number
    ): SimulatedBotExecution {
        const stake = strategy.action.stake || 10;
        const isWin = Math.random() < config.simulatedWinRate;
        const profitLoss = isWin
            ? stake * config.profitPercentage
            : -stake * config.lossPercentage;

        return {
            id: `sim_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            botId: strategy.action.botId,
            strategyId: strategy.id,
            startedAt: currentTime,
            stoppedAt: currentTime + (config.tradeDuration * 1000),
            stake,
            symbol: tick.symbol,
            profitLoss,
            isWin,
            entryPrice: tick.quote,
            exitPrice: tick.quote * (1 + (isWin ? config.profitPercentage : -config.lossPercentage)),
            duration: config.tradeDuration,
        };
    }

    /**
     * Calculate maximum drawdown from execution history
     */
    private calculateMaxDrawdown(executions: SimulatedBotExecution[]): number {
        if (executions.length === 0) return 0;

        let peak = 0;
        let maxDrawdown = 0;
        let runningBalance = 0;

        for (const execution of executions) {
            runningBalance += execution.profitLoss;
            
            if (runningBalance > peak) {
                peak = runningBalance;
            }
            
            const drawdown = peak - runningBalance;
            if (drawdown > maxDrawdown) {
                maxDrawdown = drawdown;
            }
        }

        return maxDrawdown;
    }

    /**
     * Export backtesting report as JSON
     */
    exportReport(report: BacktestingReport): string {
        return JSON.stringify(report, null, 2);
    }

    /**
     * Generate a summary of the backtesting report
     */
    generateReportSummary(report: BacktestingReport): string {
        const lines: string[] = [];
        lines.push('=== Backtesting Report Summary ===');
        lines.push('');
        lines.push(`Duration: ${new Date(report.startTime).toLocaleString()} - ${new Date(report.endTime).toLocaleString()}`);
        lines.push(`Ticks Processed: ${report.ticksProcessed.toLocaleString()}`);
        lines.push(`Symbols: ${report.symbols.join(', ')}`);
        lines.push('');
        lines.push('=== Overall Performance ===');
        lines.push(`Total Triggers: ${report.overall.totalTriggers}`);
        lines.push(`Total Executions: ${report.overall.totalExecutions}`);
        lines.push(`Net P/L: ${report.overall.netProfitLoss.toFixed(2)}`);
        lines.push(`Win Rate: ${report.overall.overallWinRate.toFixed(2)}%`);
        lines.push('');
        lines.push('=== Strategy Performance ===');
        
        for (const strategyReport of report.strategyReports) {
            lines.push('');
            lines.push(`Strategy: ${strategyReport.strategyName}`);
            lines.push(`  Triggers: ${strategyReport.triggerCount}`);
            lines.push(`  Executions: ${strategyReport.executionCount}`);
            lines.push(`  Win Rate: ${strategyReport.winRate.toFixed(2)}%`);
            lines.push(`  Net P/L: ${strategyReport.netProfitLoss.toFixed(2)}`);
            lines.push(`  Profit Factor: ${strategyReport.profitFactor === Infinity ? '∞' : strategyReport.profitFactor.toFixed(2)}`);
            lines.push(`  Max Drawdown: ${strategyReport.maxDrawdown.toFixed(2)}`);
        }

        return lines.join('\n');
    }
}
