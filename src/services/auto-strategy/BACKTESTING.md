# Backtesting Support

## Overview

The backtesting feature allows you to test your Auto Strategy Controller strategies against historical tick data without executing real trades. This helps validate strategy performance before deploying them in live trading.

## Features

- **Historical Data Loading**: Import tick data from JSON files
- **Simulated Bot Execution**: Simulate bot trades with configurable win rates and profit/loss percentages
- **Performance Metrics**: Track triggers, executions, win rate, profit factor, and maximum drawdown
- **Progress Tracking**: Real-time progress updates during backtesting
- **Report Generation**: Detailed reports with strategy-level and overall performance
- **Mode Indicator**: Clear visual indication when in backtesting mode

## Requirements

Implements requirements 37.1-37.5:
- 37.1: Support backtesting mode with historical tick data
- 37.2: Evaluate strategies against historical ticks
- 37.3: Generate backtesting reports with performance metrics
- 37.4: Simulate bot execution without starting actual bots
- 37.5: Display backtesting mode indicator in dashboard

## Usage

### 1. Enable Backtesting Mode

```typescript
import { getAutoStrategyController } from './services/auto-strategy/auto-strategy-controller.service';

const controller = getAutoStrategyController();
const backtestingService = controller.getBacktestingService();

// Enable backtesting mode
backtestingService.enableBacktestingMode();
```

### 2. Load Historical Data

```typescript
// From JSON file
const fileInput = document.querySelector('input[type="file"]');
const file = fileInput.files[0];
const text = await file.text();
const historicalData = await backtestingService.loadHistoricalData(text);

// Or generate sample data
import { generateHistoricalData } from './utils/historical-data-generator';
const historicalData = generateHistoricalData('R_100', 1000, 100, 0.01);
```

### 3. Configure and Run Backtest

```typescript
import { BacktestingConfig } from './types/auto-strategy.types';

const config: BacktestingConfig = {
    historicalData: [historicalData],
    strategies: [strategy1, strategy2],
    initialBalance: 10000,
    tradeDuration: 60, // seconds
    simulatedWinRate: 0.55, // 55% win rate
    profitPercentage: 0.95, // 95% profit on wins
    lossPercentage: 1.0, // 100% loss on losses
};

const report = await backtestingService.runBacktest(config);
```

### 4. View Results

```typescript
console.log('Overall Performance:');
console.log(`Net P/L: ${report.overall.netProfitLoss}`);
console.log(`Win Rate: ${report.overall.overallWinRate}%`);
console.log(`Total Triggers: ${report.overall.totalTriggers}`);

// Strategy-specific results
for (const strategyReport of report.strategyReports) {
    console.log(`\nStrategy: ${strategyReport.strategyName}`);
    console.log(`Triggers: ${strategyReport.triggerCount}`);
    console.log(`Win Rate: ${strategyReport.winRate}%`);
    console.log(`Profit Factor: ${strategyReport.profitFactor}`);
    console.log(`Max Drawdown: ${strategyReport.maxDrawdown}`);
}
```

### 5. Export Report

```typescript
// Export as JSON
const json = backtestingService.exportReport(report);

// Generate text summary
const summary = backtestingService.generateReportSummary(report);
console.log(summary);
```

## React Components

### BacktestingPanel

Full-featured UI for configuring and running backtests:

```tsx
import { BacktestingPanel } from './components/auto-strategy/BacktestingPanel';

<BacktestingPanel
    backtestingService={backtestingService}
    strategies={strategies}
/>
```

### BacktestingModeIndicator

Displays a prominent indicator when in backtesting mode:

```tsx
import { BacktestingModeIndicator } from './components/auto-strategy/BacktestingModeIndicator';

<BacktestingModeIndicator mode={backtestingService.getMode()} />
```

### useBacktesting Hook

React hook for backtesting functionality:

```tsx
import { useBacktesting } from './hooks/useBacktesting';

function MyComponent() {
    const {
        mode,
        isRunning,
        progress,
        report,
        enableBacktestingMode,
        disableBacktestingMode,
        runBacktest,
        stopBacktest,
        exportReport,
    } = useBacktesting(backtestingService);

    // Use the hook values and functions
}
```

## Historical Data Format

Historical data should be in JSON format:

```json
{
    "symbol": "R_100",
    "ticks": [
        {
            "epoch": 1234567890,
            "quote": 100.12345,
            "symbol": "R_100",
            "ask": 100.12350,
            "bid": 100.12340,
            "id": "tick_1",
            "pip_size": 5
        },
        ...
    ],
    "startTime": 1234567890000,
    "endTime": 1234569890000
}
```

## Generating Test Data

Use the historical data generator utilities:

```typescript
import {
    generateHistoricalData,
    generateTrendingUpData,
    generateTrendingDownData,
    generateVolatileData,
    generateDigitPatternData,
    downloadHistoricalData,
} from './utils/historical-data-generator';

// Random walk data
const randomData = generateHistoricalData('R_100', 1000);

// Trending up
const upTrendData = generateTrendingUpData('R_100', 1000, 100, 0.0005);

// Trending down
const downTrendData = generateTrendingDownData('R_100', 1000, 100, 0.0005);

// High volatility
const volatileData = generateVolatileData('R_100', 1000, 100, 0.03);

// Specific digit patterns (for testing digit frequency conditions)
const digitData = generateDigitPatternData('R_100', 1000, 7, 0.6);

// Download as JSON file
downloadHistoricalData(randomData, 'test-data.json');
```

## Performance Metrics

The backtesting report includes:

### Overall Metrics
- **Total Triggers**: Number of times strategies triggered
- **Total Executions**: Number of simulated bot executions
- **Net P/L**: Total profit minus total loss
- **Overall Win Rate**: Percentage of winning trades

### Strategy-Level Metrics
- **Trigger Count**: Times the strategy triggered
- **Execution Count**: Number of bot executions
- **Win Rate**: Percentage of winning trades
- **Total Profit**: Sum of all winning trades
- **Total Loss**: Sum of all losing trades
- **Net P/L**: Profit minus loss
- **Average Profit**: Average profit per winning trade
- **Average Loss**: Average loss per losing trade
- **Profit Factor**: Total profit divided by total loss
- **Max Drawdown**: Maximum peak-to-trough decline

## Limitations

1. **Simulated Execution**: Bot execution is simulated with configurable win rates and profit/loss percentages. Real bot performance may differ.

2. **No Slippage**: The simulation doesn't account for slippage or execution delays.

3. **Fixed Trade Duration**: All simulated trades use the same duration.

4. **No Market Impact**: The simulation assumes trades don't affect market prices.

5. **Simplified P/L**: Profit and loss calculations are simplified and may not reflect actual trading costs.

## Best Practices

1. **Test Multiple Scenarios**: Run backtests with different historical data periods and market conditions.

2. **Realistic Parameters**: Use realistic win rates and profit/loss percentages based on your bot's historical performance.

3. **Sufficient Data**: Use at least 500-1000 ticks for meaningful results.

4. **Multiple Strategies**: Test strategies individually and in combination.

5. **Validate Assumptions**: Compare backtesting results with forward testing in demo mode.

6. **Consider Cooldowns**: Ensure cooldown periods are realistic for your trading style.

## Integration with Live Trading

When switching from backtesting to live mode:

```typescript
// Disable backtesting mode
backtestingService.disableBacktestingMode();

// Verify mode changed
if (backtestingService.getMode() === BacktestingMode.Live) {
    console.log('Now in live mode - real trades will execute');
}
```

The system automatically prevents real bot execution while in backtesting mode, providing a safe environment for strategy testing.

## Troubleshooting

### Backtest Not Running
- Ensure historical data is loaded
- Verify at least one strategy is selected
- Check that strategies have valid conditions

### No Triggers
- Verify strategy conditions are appropriate for the historical data
- Check cooldown periods aren't too long
- Ensure tick buffer has sufficient data for condition evaluation

### Unexpected Results
- Review strategy configuration
- Check historical data quality
- Verify simulation parameters (win rate, profit/loss percentages)
- Examine individual executions in the report

## API Reference

See the TypeScript interfaces in `src/types/auto-strategy.types.ts` for complete API documentation:
- `BacktestingService`
- `BacktestingConfig`
- `BacktestingReport`
- `StrategyBacktestReport`
- `SimulatedBotExecution`
- `BacktestingProgress`
