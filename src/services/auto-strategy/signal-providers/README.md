# Signal Provider Integration

This directory contains the signal provider integration for the Auto Strategy Controller. Signal providers enable strategies to make decisions based on external trading signals from Zeus AI and CFX.

## Overview

The signal provider system consists of:

1. **Signal Provider Interface** (`ISignalProvider`) - Common interface for all signal providers
2. **Signal Provider Manager** - Coordinates multiple providers with caching and timeout handling
3. **Zeus AI Provider** - Integrates with Zeus AI prediction system
4. **CFX Provider** - Integrates with CFX signal system

## Architecture

```
┌─────────────────────────────────────────┐
│     Strategy Evaluator Service         │
│  (Evaluates signal-based conditions)   │
└──────────────┬──────────────────────────┘
               │
               │ getSignals(symbol)
               ▼
┌─────────────────────────────────────────┐
│    Signal Provider Manager              │
│  - Caching (60s TTL)                    │
│  - Timeout handling (5s)                │
│  - Staleness detection (>60s)           │
└──────────────┬──────────────────────────┘
               │
       ┌───────┴────────┐
       │                │
       ▼                ▼
┌─────────────┐  ┌─────────────┐
│  Zeus AI    │  │    CFX      │
│  Provider   │  │  Provider   │
└─────────────┘  └─────────────┘
       │                │
       │                │
       ▼                ▼
  Custom Events    Custom Events
  zeus.trade.signal  cfx.trade.signal
```

## Usage

### Basic Usage

```typescript
import { getSignalProviderManager } from './signal-providers';

// Get the singleton manager instance
const manager = getSignalProviderManager();

// Fetch signals from all providers for a symbol
const signals = await manager.getSignals('R_100');

// Fetch signal from specific provider
const zeusSignal = await manager.getSignal(SignalProvider.ZeusAI, 'R_100');
```

### Integration with Strategy Evaluator

The Strategy Evaluator automatically uses signal providers when evaluating signal-based conditions:

```typescript
// Example signal condition
const condition: SignalCondition = {
    type: ConditionType.Signal,
    provider: SignalProvider.ZeusAI,
    criteria: SignalCriteria.Direction,
    value: SignalDirection.Up,
};

// The evaluator will:
// 1. Fetch signal from Zeus AI provider
// 2. Check if signal is stale (>60s old)
// 3. Compare signal direction with expected value
// 4. Return evaluation result
```

## Signal Providers

### Zeus AI Provider

**Event**: `zeus.trade.signal`

**Event Data**:
```typescript
{
    type: 'DIGITOVER' | 'DIGITUNDER' | 'DIGITMATCH' | 'DIGITDIFF',
    market: string,           // e.g., 'R_100'
    prediction: number,       // 0-9
    confidence: 'high' | 'medium' | 'low',
    reasoning: string,
    timestamp: number
}
```

**Signal Mapping**:
- `DIGITOVER` or prediction >= 5 → `SignalDirection.Up`
- `DIGITUNDER` or prediction <= 4 → `SignalDirection.Down`
- Confidence: high=80, medium=50, low=30

### CFX Provider

**Event**: `cfx.trade.signal`

**Event Data**:
```typescript
{
    market: string,           // e.g., 'R_100'
    direction: 'up' | 'down' | 'call' | 'put' | 'buy' | 'sell' | 'neutral',
    strength: number,         // 0-100
    confidence: number,       // 0-100
    timestamp: number
}
```

**Alternative**: Can also fetch from `window.cfx.getSignal(symbol)` API

## Caching and Timeout Handling

### Caching (Requirement 7.4)

- **Cache TTL**: 60 seconds
- Signals are cached to avoid excessive API calls
- Cache is automatically invalidated after TTL expires
- Manual cache clearing is supported

```typescript
// Clear cache for specific provider and symbol
manager.clearCache(SignalProvider.ZeusAI, 'R_100');

// Clear all cache for a provider
manager.clearCache(SignalProvider.ZeusAI);

// Clear all cache
manager.clearCache();
```

### Timeout Handling (Requirement 7.4)

- **Fetch Timeout**: 5 seconds
- If a provider takes longer than 5s to respond, the fetch is cancelled
- Returns `null` on timeout (condition marked as "not evaluable")

### Staleness Detection (Requirement 7.4)

- **Stale Threshold**: 60 seconds
- Signals older than 60 seconds are marked as `isStale: true`
- Strategy Evaluator marks stale signals as "not evaluable"
- Prevents strategies from acting on outdated information

## Signal Data Structure

```typescript
interface SignalData {
    provider: SignalProvider;      // 'zeus_ai' | 'cfx'
    direction: SignalDirection;    // 'up' | 'down' | 'neutral'
    strength: number;              // 0-100
    confidence: number;            // 0-100
    timestamp: number;             // Unix timestamp in ms
    isStale: boolean;              // true if >60s old
}
```

## Creating Custom Signal Providers

To add a new signal provider:

1. Implement the `ISignalProvider` interface:

```typescript
export class MyCustomProvider implements ISignalProvider {
    readonly provider = SignalProvider.MyCustom;
    
    async fetchSignal(symbol: string): Promise<SignalData> {
        // Fetch signal from your source
        // Return SignalData
    }
    
    async isAvailable(): Promise<boolean> {
        // Check if provider is available
        return true;
    }
}
```

2. Register with the manager:

```typescript
const manager = getSignalProviderManager();
manager.registerProvider(new MyCustomProvider());
```

## Requirements Coverage

This implementation satisfies the following requirements:

- **7.1**: Zeus AI integration for signal-based condition evaluation
- **7.2**: CFX integration for signal-based condition evaluation
- **7.3**: Signal value checking against specified criteria
- **7.4**: 60-second timeout handling for stale signals
- **7.5**: Support for signal direction, strength, and confidence level

## Testing

Comprehensive tests are available in `__tests__/signal-provider.service.test.ts`:

- Provider registration and management
- Signal fetching from multiple providers
- Caching behavior and TTL
- Timeout handling
- Staleness detection
- Event-based signal reception
- Error handling

Run tests:
```bash
npm test signal-provider.service.test.ts
```

## Notes

- Signal providers use custom events for real-time signal updates
- The system is designed to be extensible for additional providers
- All signal operations are asynchronous
- Providers gracefully handle errors and return `null` on failure
- The singleton pattern ensures consistent state across the application
