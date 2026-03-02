# Bot Controller Service

The Bot Controller service manages bot lifecycle (start, stop, switch) and integrates with the existing Bot Builder system. It enforces concurrent bot limits, validates account balance, and implements cooldown periods.

## Features

### Bot Lifecycle Management
- **Start Bot**: Start a bot with validation and balance checking
- **Stop Bot**: Stop a bot gracefully (allows current trade to complete)
- **Switch Bot**: Switch from one bot to another with cooldown enforcement
- **Stop All Bots**: Emergency stop all running bots

### Concurrent Bot Limit Enforcement
- Configurable maximum concurrent bots (default: 5)
- Priority queue for bot start actions when limit is reached
- Automatic processing of queued actions when slots become available

### Stake Management
- Dynamic stake adjustment with multiple methods:
  - **Fixed**: Use a fixed stake amount
  - **Percentage of Balance**: Calculate stake as percentage of account balance
  - **Multiplier**: Multiply a base stake by a factor
- Configurable minimum and maximum stake limits
- Stake validation against account balance

### Cooldown Period
- Minimum 5-second cooldown between bot actions
- Prevents excessive bot switching
- Queues actions during cooldown period

### Audit Logging
- Comprehensive logging of all bot control actions
- Tracks which strategy started each bot
- Records stake adjustments and queue operations

## Usage

### Basic Usage

```typescript
import { getBotController } from '@/services/auto-strategy/bot-controller.service';
import { StakeAdjustmentMethod } from '@/types/auto-strategy.types';

// Get controller instance
const botController = getBotController();

// Configure maximum concurrent bots
botController.setMaxConcurrentBots(3);

// Set stake limits
botController.setStakeLimits({
    minStake: 0.35,
    maxStake: 100,
});

// Start a bot
const result = await botController.startBot({
    botId: 'my-bot-123',
    strategyId: 'strategy-456',
    stake: 1.0,
    priority: 1, // High priority
});

if (result.success) {
    console.log('Bot started successfully');
} else if (result.queued) {
    console.log('Bot start queued:', result.reason);
} else {
    console.error('Failed to start bot:', result.reason);
}

// Stop a bot
await botController.stopBot('my-bot-123', 'strategy_condition_changed');

// Switch bots
await botController.switchBot('old-bot-123', {
    botId: 'new-bot-456',
    strategyId: 'strategy-789',
    stake: 2.0,
    priority: 2,
});
```

### Stake Management

```typescript
// Calculate dynamic stake
const stake = await botController.calculateDynamicStake(
    StakeAdjustmentMethod.PercentageOfBalance,
    5, // 5% of balance
);

// Validate stake
const validation = await botController.validateStake(stake);
if (validation.valid) {
    // Use the stake
} else {
    console.error('Invalid stake:', validation.reason);
}

// Adjust stake for running bot
await botController.adjustStake('my-bot-123', 2.5);
```

### Queue Management

```typescript
// Get queued actions
const queuedActions = botController.getQueuedActions();
console.log(`${queuedActions.length} actions in queue`);

// Clear queue
botController.clearQueue();
```

### Bot Status

```typescript
// Check if bot is running
const isRunning = botController.isBotRunning('my-bot-123');

// Get bot status
const status = botController.getBotStatus('my-bot-123');
if (status?.isRunning) {
    console.log(`Bot started by strategy: ${status.startedBy}`);
    console.log(`Current stake: ${status.stake}`);
}

// Get all running bots
const runningBots = botController.getRunningBots();
runningBots.forEach(bot => {
    console.log(`Bot ${bot.botId} running with stake ${bot.stake}`);
});
```

### Integration with Run Panel Store

```typescript
import { getBotController } from '@/services/auto-strategy/bot-controller.service';

// Inject run panel store reference
const botController = getBotController();
botController.setRunPanelStore(runPanelStore);
```

### Audit Logging

```typescript
// Set audit log callback
botController.setAuditLogCallback((entry) => {
    console.log('Audit log entry:', entry);
    // Store in audit log service
});
```

## Integration Points

### Bot Builder System
The Bot Controller integrates with the existing Bot Builder system through the `run_panel` store:
- Uses `onRunButtonClick()` to start bots
- Uses `onStopButtonClick()` to stop bots
- Respects bot configuration from Bot Builder

### Account Balance
The Bot Controller validates account balance before starting bots:
- Checks sufficient balance for stake amount
- Considers pending trades
- Prevents starting bots with insufficient funds

### Strategy System
The Bot Controller tracks which strategy started each bot:
- Records strategy ID with each running bot
- Enables strategy-level performance tracking
- Supports strategy-based bot management

## Requirements Mapping

- **9.1-9.6**: Automated bot starting with validation
- **10.1-10.5**: Automated bot stopping with graceful shutdown
- **11.1-11.5**: Bot switching with cooldown enforcement
- **12.1-12.5**: Dynamic stake adjustment and validation
- **16.1-16.5**: Concurrent bot limit enforcement with priority queue

## Future Enhancements

### Planned Integrations
1. **Bot Builder Integration**: Complete integration with Bot Builder API
2. **Account Balance API**: Real-time balance checking
3. **Bot Configuration**: Load and apply bot configurations
4. **Trade Monitoring**: Track active trades and P&L

### Potential Features
1. **Bot Health Monitoring**: Track bot performance and errors
2. **Auto-restart**: Automatically restart failed bots
3. **Smart Queueing**: Intelligent queue prioritization based on strategy performance
4. **Resource Management**: CPU and memory usage monitoring

## Testing

The Bot Controller includes comprehensive error handling and validation:
- Validates bot existence before starting
- Checks account balance before starting
- Enforces stake limits
- Handles concurrent bot limits
- Implements cooldown periods
- Logs all actions for audit

## Notes

- The Bot Controller uses a singleton pattern for global access
- All bot control operations are asynchronous
- Queue processing is automatic when slots become available
- Cooldown periods prevent excessive bot switching
- Stake validation ensures safe trading practices
