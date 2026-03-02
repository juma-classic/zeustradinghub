# Auto Strategy Controller - Market Data Monitor

## Overview

The Market Data Monitor service provides real-time market data monitoring for the Auto Strategy Controller. It integrates with the existing `RobustWebSocketManager` to receive tick data from the Deriv API and maintains circular buffers for efficient data storage and retrieval.

## Components

### 1. Types (`src/types/auto-strategy.types.ts`)

#### Tick Interface
```typescript
interface Tick {
    epoch: number;        // Unix timestamp in seconds
    quote: number;        // Current price quote
    symbol: string;       // Trading symbol (e.g., "R_100")
    ask: number;          // Ask price
    bid: number;          // Bid price
    id: string;           // Unique tick identifier
    pip_size: number;     // Number of decimal places
}
```

#### ConnectionStatus Enum
```typescript
enum ConnectionStatus {
    Connected = 'connected',
    Connecting = 'connecting',
    Disconnected = 'disconnected',
    Reconnecting = 'reconnecting',
    Error = 'error',
}
```

#### CircularBuffer Class
A high-performance circular buffer implementation that stores a fixed number of items with O(1) operations:
- Automatically overwrites oldest items when capacity is reached
- Efficient memory usage (pre-allocated array)
- Methods: `push()`, `getLast()`, `getLatest()`, `toArray()`, `clear()`

### 2. Market Data Monitor Service (`src/services/auto-strategy/market-data-monitor.service.ts`)

#### Key Features

1. **WebSocket Integration**
   - Uses existing `RobustWebSocketManager` for reliable connection management
   - Automatic reconnection with exponential backoff
   - Connection status tracking and event emission

2. **Tick Subscription Management**
   - Subscribe to multiple symbols simultaneously
   - Automatic resubscription after reconnection
   - Clean unsubscription with proper cleanup

3. **Data Storage**
   - Circular buffer for each subscribed symbol (1000 ticks max)
   - O(1) insertion and retrieval operations
   - Memory-efficient storage

4. **Performance**
   - Sub-100ms tick processing (monitored and logged)
   - Event-driven architecture for real-time updates
   - Minimal overhead on WebSocket message handling

5. **Event Emitters**
   - `onTick()`: Notified on each new tick
   - `onConnectionChange()`: Notified on connection status changes
   - `onError()`: Notified on errors

#### Usage Example

```typescript
import { getMarketDataMonitor } from './services/auto-strategy/market-data-monitor.service';

// Get singleton instance
const monitor = getMarketDataMonitor();

// Connect to WebSocket
await monitor.connect();

// Subscribe to symbols
await monitor.subscribeToSymbol('R_100');
await monitor.subscribeToSymbol('frxEURUSD');

// Listen for ticks
const unsubscribe = monitor.onTick((tick) => {
    console.log(`New tick for ${tick.symbol}: ${tick.quote}`);
});

// Get latest tick
const latestTick = monitor.getLatestTick('R_100');

// Get last 100 ticks
const recentTicks = monitor.getTickBuffer('R_100', 100);

// Check connection status
const status = monitor.getConnectionStatus();

// Unsubscribe from events
unsubscribe();

// Unsubscribe from symbol
await monitor.unsubscribeFromSymbol('R_100');

// Disconnect
monitor.disconnect();
```

## Integration with RobustWebSocketManager

The service integrates with the existing `RobustWebSocketManager` (located at `public/ai/robust-websocket-manager.js`) which provides:

- Automatic reconnection with exponential backoff
- Connection health monitoring
- Network status detection
- Multiple server failover
- Ping/pong heartbeat mechanism

The MarketDataMonitor wraps this functionality and adds:
- Symbol-specific tick buffering
- Subscription management
- Type-safe interfaces
- Event-driven architecture

## WebSocket Message Flow

### Subscription Request
```json
{
    "ticks": "R_100",
    "subscribe": 1
}
```

### Tick Response
```json
{
    "tick": {
        "epoch": 1234567890,
        "quote": 123.45,
        "symbol": "R_100",
        "ask": 123.46,
        "bid": 123.44,
        "id": "abc123",
        "pip_size": 2
    },
    "subscription": {
        "id": "sub123"
    }
}
```

### Unsubscription Request
```json
{
    "forget": "sub123"
}
```

## Requirements Satisfied

- **Requirement 1.1**: WebSocket connection established on activation ✓
- **Requirement 1.2**: Tick processing within 100ms ✓
- **Requirement 1.3**: Reconnection with exponential backoff (via RobustWebSocketManager) ✓
- **Requirement 1.4**: Rolling buffer of last 1000 ticks ✓
- **Requirement 27.1**: Uses existing RobustWebSocketManager ✓
- **Requirement 27.2**: Subscribe/unsubscribe to tick streams ✓

## Testing

Unit tests are located in `src/services/auto-strategy/__tests__/market-data-monitor.test.ts`

Run tests:
```bash
npm test -- src/services/auto-strategy/__tests__/market-data-monitor.test.ts --no-watch
```

Test coverage includes:
- CircularBuffer operations (push, get, wraparound, clear)
- MarketDataMonitor initialization
- Event listener registration/unregistration
- Data retrieval methods
- Error handling

## Next Steps

The following components need to be implemented to complete the Auto Strategy Controller:

1. **Strategy Evaluator** (Task 3.1-3.3)
   - Digit frequency condition evaluation
   - Volatility condition evaluation
   - Time-based condition evaluation
   - Performance condition evaluation
   - Signal-based condition evaluation

2. **Bot Controller** (Task 5.1-5.3)
   - Bot lifecycle management (start/stop/switch)
   - Integration with Bot Builder
   - Stake management

3. **Risk Manager** (Task 6.1-6.3)
   - Profit/loss tracking
   - Limit enforcement
   - Safety controls

4. **UI Components** (Tasks 12-14)
   - Strategy Builder
   - Condition Dashboard
   - Performance tracking

## Architecture Notes

- **Singleton Pattern**: The service uses a singleton pattern to ensure only one instance manages WebSocket connections
- **Event-Driven**: All updates are pushed via event emitters for reactive UI updates
- **Type Safety**: Full TypeScript support with comprehensive type definitions
- **Performance**: Optimized for high-frequency tick processing with minimal overhead
- **Reliability**: Leverages battle-tested RobustWebSocketManager for connection stability
