# Error Handling and Recovery

This document describes the error handling and recovery mechanisms implemented in the Auto Strategy Controller.

## Overview

The Auto Strategy Controller implements comprehensive error handling with:

1. **Error Boundaries** - React error boundaries that catch component errors
2. **Error Handler** - Centralized error categorization and user-friendly messages
3. **Error Recovery Service** - Automatic recovery from common failures
4. **Feature Fallbacks** - Graceful degradation when features fail

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     React Components                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │           Error Boundary (Component Level)            │  │
│  │  ┌────────────────────────────────────────────────┐  │  │
│  │  │         Feature Component                       │  │  │
│  │  │  (StrategyBuilder, ConditionDashboard, etc.)   │  │  │
│  │  └────────────────────────────────────────────────┘  │  │
│  │                        ↓                              │  │
│  │              Feature Fallback UI                      │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   Error Handler Utilities                    │
│  • Error categorization (network, validation, etc.)         │
│  • User-friendly error messages                             │
│  • Error logging and tracking                               │
│  • Safe async/sync wrappers                                 │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                 Error Recovery Service                       │
│  • Automatic recovery attempts                              │
│  • Recovery state tracking                                  │
│  • Cooldown management                                      │
│  • Service-specific recovery strategies                     │
└─────────────────────────────────────────────────────────────┘
```

## Components

### 1. Error Boundary

**Location**: `src/components/auto-strategy/ErrorBoundary.tsx`

React error boundary that catches errors in child components and displays user-friendly error UI.

**Features**:
- Catches React component errors
- Logs errors to audit log
- Provides retry and reload options
- Shows error details in development mode
- Prevents cascading failures

**Usage**:
```tsx
import ErrorBoundary from './ErrorBoundary';

<ErrorBoundary
  componentName="Strategy Builder"
  onError={(error, errorInfo) => console.error(error)}
  showDetails={process.env.NODE_ENV === 'development'}
>
  <YourComponent />
</ErrorBoundary>
```

### 2. Feature Fallback

**Location**: `src/components/auto-strategy/FeatureFallback.tsx`

Provides graceful degradation UI when specific features fail.

**Features**:
- User-friendly error messages
- Recovery action buttons
- Alternative content display
- Technical details (optional)

**Usage**:
```tsx
import FeatureFallback from './FeatureFallback';

<FeatureFallback
  featureName="Strategy Builder"
  error={errorDetails}
  onRetry={handleRetry}
  onDismiss={handleDismiss}
>
  <p>Alternative content or instructions</p>
</FeatureFallback>
```

### 3. Error Handler

**Location**: `src/utils/error-handler.ts`

Centralized error handling utility that categorizes errors and provides user-friendly messages.

**Error Categories**:
- `NETWORK` - Connection and network errors
- `VALIDATION` - Input validation errors
- `PERMISSION` - Authorization errors
- `DATA` - Data parsing and corruption errors
- `SYSTEM` - System and internal errors
- `UNKNOWN` - Uncategorized errors

**Error Severity Levels**:
- `LOW` - Minor issues, logged only
- `MEDIUM` - Noticeable issues, user notification
- `HIGH` - Significant issues, requires attention
- `CRITICAL` - System-breaking issues, immediate action required

**Usage**:
```typescript
import { ErrorHandler } from '@/utils/error-handler';

try {
  // Your code
} catch (error) {
  const errorDetails = ErrorHandler.handle(error, 'MyComponent');
  console.error(errorDetails.userMessage);
}

// Safe async wrapper
const { data, error } = await ErrorHandler.safeAsync(
  async () => fetchData(),
  'DataFetch',
  fallbackData
);

// Safe sync wrapper
const { data, error } = ErrorHandler.safe(
  () => parseData(),
  'DataParse',
  fallbackData
);
```

### 4. Error Recovery Service

**Location**: `src/services/auto-strategy/error-recovery.service.ts`

Automatic error recovery service that attempts to recover from common failures.

**Features**:
- Automatic recovery attempts with exponential backoff
- Recovery state tracking
- Max attempts limit (default: 3)
- Cooldown period between attempts (default: 5 seconds)
- Service-specific recovery strategies

**Recovery Strategies**:

1. **WebSocket Connection Recovery**
   ```typescript
   await errorRecoveryService.recoverWebSocketConnection(
     async () => await reconnect()
   );
   ```

2. **Data Corruption Recovery**
   ```typescript
   await errorRecoveryService.recoverFromDataCorruption(
     'StrategyStorage',
     () => clearCorruptedData(),
     async () => await reloadData()
   );
   ```

3. **Service Failure Recovery**
   ```typescript
   await errorRecoveryService.recoverFromServiceFailure(
     'MarketDataMonitor',
     async () => await restartService()
   );
   ```

4. **Strategy Evaluation Recovery**
   ```typescript
   await errorRecoveryService.recoverFromEvaluationFailure(
     strategyId,
     () => pauseStrategy(),
     (msg) => notifyUser(msg)
   );
   ```

5. **Bot Control Recovery**
   ```typescript
   await errorRecoveryService.recoverFromBotControlFailure(
     botId,
     async () => await stopBot(),
     (msg) => notifyUser(msg)
   );
   ```

## Error Messages

User-friendly error messages are defined in `ERROR_MESSAGES` constant:

```typescript
import { getUserFriendlyErrorMessage } from '@/utils/error-handler';

const message = getUserFriendlyErrorMessage('BOT_NOT_FOUND');
// Returns: "The selected bot could not be found. Please check your bot configuration."
```

**Available Error Codes**:
- `BOT_NOT_FOUND`
- `BOT_ALREADY_RUNNING`
- `INSUFFICIENT_BALANCE`
- `BOT_START_FAILED`
- `BOT_STOP_FAILED`
- `STRATEGY_NOT_FOUND`
- `STRATEGY_VALIDATION_FAILED`
- `STRATEGY_SAVE_FAILED`
- `WEBSOCKET_CONNECTION_FAILED`
- `WEBSOCKET_DISCONNECTED`
- `TICK_DATA_UNAVAILABLE`
- `INSUFFICIENT_TICK_DATA`
- `PROFIT_TARGET_REACHED`
- `LOSS_LIMIT_REACHED`
- `MAX_CONCURRENT_BOTS_REACHED`
- `DEMO_MODE_REQUIRED`
- `REAL_MODE_REQUIRED`
- `UNKNOWN_ERROR`
- `OPERATION_FAILED`

## Integration with Services

### Auto Strategy Controller

The main controller integrates error handling:

```typescript
import { ErrorHandler } from '@/utils/error-handler';
import { errorRecoveryService } from './error-recovery.service';

class AutoStrategyController {
  async startStrategy(strategyId: string): Promise<void> {
    const { data, error } = await ErrorHandler.safeAsync(
      async () => {
        // Start strategy logic
      },
      'StartStrategy'
    );

    if (error) {
      // Attempt recovery
      const recovered = await errorRecoveryService.attemptRecovery(
        `StartStrategy:${strategyId}`,
        error,
        async () => {
          // Recovery logic
        }
      );

      if (!recovered) {
        throw new Error(error.userMessage);
      }
    }
  }
}
```

### Market Data Monitor

WebSocket connection errors are handled with automatic recovery:

```typescript
class MarketDataMonitor {
  private async handleConnectionFailure(): Promise<void> {
    const recovered = await errorRecoveryService.recoverWebSocketConnection(
      async () => await this.reconnect()
    );

    if (!recovered) {
      // Pause all strategies
      this.pauseAllStrategies();
      // Notify user
      this.notifyUser('Connection lost. Strategies paused.');
    }
  }
}
```

## Best Practices

1. **Always use Error Boundaries** for React components
   ```tsx
   <ErrorBoundary componentName="MyComponent">
     <MyComponent />
   </ErrorBoundary>
   ```

2. **Use safe wrappers** for async operations
   ```typescript
   const { data, error } = await ErrorHandler.safeAsync(
     async () => riskyOperation(),
     'OperationContext',
     fallbackValue
   );
   ```

3. **Provide context** when handling errors
   ```typescript
   ErrorHandler.handle(error, 'StrategyBuilder:SaveStrategy');
   ```

4. **Implement recovery strategies** for critical operations
   ```typescript
   await errorRecoveryService.attemptRecovery(
     'CriticalOperation',
     error,
     async () => await recover()
   );
   ```

5. **Log errors** to audit log for debugging
   ```typescript
   auditLog.logError({
     component: 'MyComponent',
     error: error.message,
     stack: error.stack,
   });
   ```

6. **Show user-friendly messages** instead of technical errors
   ```typescript
   const userMessage = getUserFriendlyErrorMessage(errorCode);
   notifyUser(userMessage);
   ```

## Testing

Error handling is thoroughly tested:

- **Error Handler Tests**: `src/utils/__tests__/error-handler.test.ts`
- **Error Recovery Tests**: `src/services/auto-strategy/__tests__/error-recovery.service.test.ts`

Run tests:
```bash
npm test error-handler
npm test error-recovery
```

## Monitoring and Debugging

### Error Log

Access error log for debugging:
```typescript
import { ErrorHandler } from '@/utils/error-handler';

const errorLog = ErrorHandler.getErrorLog();
console.log('Recent errors:', errorLog);
```

### Recovery States

Check recovery states:
```typescript
import { errorRecoveryService } from '@/services/auto-strategy/error-recovery.service';

const states = errorRecoveryService.getAllRecoveryStates();
console.log('Recovery states:', states);
```

### Development Mode

In development mode, error boundaries show detailed error information including stack traces.

## Requirements Coverage

This implementation satisfies the following requirements:

- **Requirement 9.4**: Bot start error handling
- **Requirement 35.1**: Connection failure handling
- **Requirement 35.2**: Connection restoration without user intervention
- **Requirement 35.3**: Connection status display
- **Requirement 35.4**: Strategy pause on extended connection loss
- **Requirement 35.5**: Error recovery flows

## Future Enhancements

1. **Error Analytics** - Track error patterns and frequencies
2. **Remote Error Reporting** - Send critical errors to monitoring service
3. **User Error Feedback** - Allow users to report errors with context
4. **Predictive Recovery** - Learn from past errors to prevent future failures
5. **Error Rate Limiting** - Prevent error notification spam
