# Auto Strategy Controller

The **AutoStrategyController** is the central orchestrator for the Auto Strategy system. It manages the complete lifecycle of trading strategies, coordinates all subsystems, and handles real-time market data processing.

## Overview

The controller integrates six core subsystems:
- **MarketDataMonitor**: Real-time tick data via WebSocket
- **StrategyEvaluator**: Condition evaluation engine
- **BotController**: Bot lifecycle management
- **RiskManager**: Profit/loss limits and safety controls
- **AuditLog**: Comprehensive event logging
- **StrategyStorage**: Strategy persistence and templates

## Key Features

### Strategy Lifecycle Management
- Create, update, delete strategies
- Activate/deactivate strategies
- Pause/resume strategies
- Import/export strategies as JSON

### Real-Time Processing
- Processes tick data within 1 second
- Evaluates all active strategies on each tick
- Triggers bot actions when conditions are met
- Enforces cooldown periods between actions

### Connection Management
- Automatic reconnection handling
- Pauses strategies after 30 seconds of connection loss
- Resumes when connection is restored

### Risk Management
- Global profit targets and loss limits
- Per-strategy profit and loss limits
- Concurrent bot limit enforcement
- Emergency stop functionality

### Validation & Safety
- Comprehensive strategy validation before activation
- Risky strategy warnings (no loss limit, high stake, 24/7 operation)
- Prevents activation of invalid strategies

## Usage

### Basic Setup

```typescript
import { getAutoStrategyController } from './services/auto-strategy/auto-strategy-controller.service';

// Get controller instance
const controller = getAutoStrategyController();

// Initialize and start
await controller.initialize();
await controller.start();
```

### Creating a Strategy

```typescript
const strategyId = await controller.createStrategy({
    name: 'High Digit Frequency',
    description: 'Start bot when digits 7-9 appear frequently',
    symbol: 'R_100',
    conditions: [
        {
            type: ConditionType.DigitFrequency,
            digits: [7, 8, 9],
            tickCount: 100,
            operator: ComparisonOperator.GreaterThan,
            threshold: 30,
        }
    ],
    logicOperator: LogicOperator.AND,
    action: {
        type: ActionType.StartBot,
        botId: 'my-bot-id',
        stake: 1,
    },
    priority: StrategyPriority.Medium,
    cooldownPeriod: 60,
    isActive: false,
    isPaused: false,
});
```

### Activating a Strategy

```typescript
// Validate before activation
const validation = controller.validateStrategy(strategy);
if (!validation.isValid) {
    console.error('Validation errors:', validation.errors);
    return;
}

// Check for warnings
const warnings = controller.getStrategyWarnings(strategy);
if (warnings.length > 0) {
    console.warn('Strategy warnings:', warnings);
    // User should acknowledge warnings before proceeding
}

// Activate
await controller.activateStrategy(strategyId);
```

### Monitoring

```typescript
// Subscribe to updates
const unsubscribe = controller.onUpdate((update) => {
    console.log('Status:', update.status);
    console.log('Active strategies:', update.strategies.filter(s => s.isActive));
    console.log('Running bots:', update.runningBots);
    console.log('Connection:', update.connectionStatus);
});

// Get strategy performance
const performance = controller.getStrategyPerformance(strategyId);
console.log('Total triggers:', performance.totalTriggers);
console.log('Success rate:', performance.successfulTriggers / performance.totalTriggers);
console.log('Net P/L:', performance.netProfitLoss);
```

### Emergency Stop

```typescript
// Immediately stop all activity
await controller.emergencyStop();
// - Stops all running bots
// - Deactivates all strategies
// - Clears action queue
// - Disconnects from market data
```

## Architecture

### Event Flow

```
Tick Received → Strategy Evaluation → Action Execution → Risk Check → Audit Log
     ↓                    ↓                   ↓              ↓            ↓
MarketDataMonitor  StrategyEvaluator  BotController  RiskManager  AuditLog
```

### Strategy Evaluation Process

1. **Tick arrives** from WebSocket
2. **Filter strategies** for matching symbol
3. **Build context** with tick buffer, bot stats, signals
4. **Evaluate conditions** using StrategyEvaluator
5. **Check cooldown** period
6. **Execute action** if triggered
7. **Update performance** metrics
8. **Check risk limits**
9. **Log to audit**

### Connection Failure Handling

1. **Connection lost** detected
2. **Start timer** (30 seconds)
3. **If timeout exceeded**:
   - Pause all active strategies
   - Log event to audit
   - Notify user
4. **Connection restored**:
   - User manually resumes strategies
   - System ready for operation

## Requirements Coverage

### Implemented Requirements

- **Req 1.5**: Pause strategies when connection lost > 30 seconds ✅
- **Req 2.1-2.6**: Strategy CRUD operations ✅
- **Req 17.1-17.6**: Emergency stop functionality ✅
- **Req 24.1-24.5**: Strategy validation ✅
- **Req 25.1-25.5**: Strategy pause/resume ✅
- **Req 32.1-32.5**: Risky strategy warnings ✅
- **Req 35.1-35.5**: Connection failure handling ✅

## API Reference

### Lifecycle Methods

- `initialize()`: Initialize controller and subsystems
- `start()`: Start processing and activate strategies
- `stop()`: Stop processing and deactivate strategies
- `emergencyStop()`: Immediate halt of all activity

### Strategy Management

- `createStrategy(strategy)`: Create new strategy
- `updateStrategy(id, updates)`: Update existing strategy
- `deleteStrategy(id)`: Delete strategy
- `activateStrategy(id)`: Activate strategy
- `deactivateStrategy(id)`: Deactivate strategy
- `pauseStrategy(id)`: Pause strategy
- `resumeStrategy(id)`: Resume paused strategy

### Monitoring

- `getStatus()`: Get controller status
- `getActiveStrategies()`: Get all active strategies
- `getStrategyPerformance(id)`: Get performance metrics
- `onUpdate(callback)`: Subscribe to state updates

### Validation

- `validateStrategy(strategy)`: Validate strategy configuration
- `getStrategyWarnings(strategy)`: Get risky configuration warnings

### Import/Export

- `exportStrategy(id)`: Export strategy as JSON
- `importStrategy(json)`: Import strategy from JSON

## Error Handling

All methods throw errors for:
- Invalid strategy IDs
- Validation failures
- Connection failures
- Subsystem errors

Errors are logged to the audit log with full context and stack traces.

## Testing

The controller can be tested using the singleton reset function:

```typescript
import { resetAutoStrategyController } from './auto-strategy-controller.service';

// Reset for clean test state
resetAutoStrategyController();
```

## Performance

- **Tick processing**: < 100ms per tick
- **Strategy evaluation**: < 1 second for all active strategies
- **Bot control actions**: < 2 seconds
- **Risk limit checks**: < 100ms

## Future Enhancements

- Bot statistics integration for performance conditions
- Signal provider integration (Zeus AI, CFX)
- Backtesting support
- Multi-symbol strategy support
- Advanced performance analytics
