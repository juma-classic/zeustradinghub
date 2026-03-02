# Auto Strategy Controller React Hooks

This directory contains React hooks for integrating with the Auto Strategy Controller service.

## Hooks

### `useAutoStrategyController`

Main hook for accessing and managing the Auto Strategy Controller.

**Features:**
- Access to controller instance
- Real-time state subscription (strategies, running bots, condition states)
- Methods for strategy management actions
- Connection status tracking

**Requirements:** 19.1, 19.2, 20.1, 20.2, 20.3, 20.4

**Example:**
```tsx
import { useAutoStrategyController } from '@/hooks/auto-strategy';

function StrategyDashboard() {
  const {
    status,
    strategies,
    runningBots,
    connectionStatus,
    createStrategy,
    activateStrategy,
    emergencyStop
  } = useAutoStrategyController();

  // Create a new strategy
  const handleCreate = async () => {
    const strategyId = await createStrategy({
      name: 'My Strategy',
      symbol: 'R_100',
      conditions: [...],
      action: {...},
      logicOperator: 'AND',
      priority: 'medium',
      cooldownPeriod: 60,
      isActive: false,
      isPaused: false
    });
  };

  // Emergency stop all bots
  const handleEmergencyStop = async () => {
    await emergencyStop();
  };

  return (
    <div>
      <h1>Status: {status}</h1>
      <h2>Connection: {connectionStatus}</h2>
      <h3>Active Strategies: {strategies.length}</h3>
      <h3>Running Bots: {runningBots.length}</h3>
      <button onClick={handleEmergencyStop}>Emergency Stop</button>
    </div>
  );
}
```

**API:**

```typescript
interface UseAutoStrategyControllerReturn {
  // State
  status: ControllerStatus;
  connectionStatus: ConnectionStatus;
  isInitialized: boolean;
  strategies: Strategy[];
  activeStrategies: Strategy[];
  runningBots: RunningBotInfo[];
  conditionStates: Map<string, ConditionState>;
  error: Error | null;
  
  // Lifecycle methods
  initialize: () => Promise<void>;
  start: () => Promise<void>;
  stop: () => Promise<void>;
  emergencyStop: () => Promise<void>;
  
  // Strategy management
  createStrategy: (strategy: Omit<Strategy, 'id' | 'createdAt' | 'updatedAt'>) => Promise<string>;
  updateStrategy: (id: string, updates: Partial<Strategy>) => Promise<void>;
  deleteStrategy: (id: string) => Promise<void>;
  activateStrategy: (id: string) => Promise<void>;
  deactivateStrategy: (id: string) => Promise<void>;
  pauseStrategy: (id: string) => Promise<void>;
  resumeStrategy: (id: string) => Promise<void>;
  
  // Query methods
  getStrategyById: (id: string) => Strategy | undefined;
  getStrategyPerformance: (id: string) => StrategyPerformance | null;
  getStrategyWarnings: (strategy: Strategy) => StrategyWarning[];
  
  // Import/Export
  exportStrategy: (id: string) => string | null;
  importStrategy: (json: string) => Promise<string>;
  
  // Utility
  refresh: () => void;
}
```

### `useStrategyPerformance`

Hook for fetching and tracking strategy performance with time period filtering.

**Features:**
- Performance data fetching and tracking
- Time period filtering (today, week, month, all time)
- Performance metrics calculation
- Aggregated performance across all strategies

**Requirements:** 21.1, 21.2, 21.3, 21.4, 21.5

**Example:**
```tsx
import { useStrategyPerformance, PerformanceTimePeriod } from '@/hooks/auto-strategy';

function PerformanceView() {
  const {
    performanceData,
    aggregatedPerformance,
    timePeriod,
    setTimePeriod,
    getTopPerformers,
    isLoading
  } = useStrategyPerformance();

  // Change time period
  const handlePeriodChange = (period: PerformanceTimePeriod) => {
    setTimePeriod(period);
  };

  // Get top 5 performers
  const topStrategies = getTopPerformers(5);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <select value={timePeriod} onChange={(e) => handlePeriodChange(e.target.value as PerformanceTimePeriod)}>
        <option value={PerformanceTimePeriod.Today}>Today</option>
        <option value={PerformanceTimePeriod.Week}>This Week</option>
        <option value={PerformanceTimePeriod.Month}>This Month</option>
        <option value={PerformanceTimePeriod.AllTime}>All Time</option>
      </select>

      <h2>Aggregated Performance</h2>
      <p>Total Profit: ${aggregatedPerformance?.totalProfit}</p>
      <p>Total Loss: ${aggregatedPerformance?.totalLoss}</p>
      <p>Net P/L: ${aggregatedPerformance?.netProfitLoss}</p>
      <p>Win Rate: {aggregatedPerformance?.overallWinRate}%</p>

      <h2>Top Performers</h2>
      {topStrategies.map(strategy => (
        <div key={strategy.strategyId}>
          <h3>{strategy.strategyName}</h3>
          <p>Net P/L: ${strategy.netProfitLoss}</p>
          <p>Win Rate: {strategy.winRate}%</p>
        </div>
      ))}
    </div>
  );
}
```

**API:**

```typescript
interface UseStrategyPerformanceReturn {
  // State
  performanceData: Map<string, PerformanceMetrics>;
  aggregatedPerformance: AggregatedPerformance | null;
  isLoading: boolean;
  error: Error | null;
  timePeriod: PerformanceTimePeriod;
  
  // Query methods
  getPerformanceForStrategy: (strategyId: string) => PerformanceMetrics | undefined;
  getTopPerformers: (limit?: number) => PerformanceMetrics[];
  getWorstPerformers: (limit?: number) => PerformanceMetrics[];
  
  // Filter methods
  setTimePeriod: (period: PerformanceTimePeriod) => void;
  
  // Utility
  refresh: () => void;
}

enum PerformanceTimePeriod {
  Today = 'today',
  Week = 'week',
  Month = 'month',
  AllTime = 'all_time',
}
```

## Types

### `RunningBotInfo`

Information about a running bot for UI display.

```typescript
interface RunningBotInfo {
  botId: string;
  botName: string;
  strategyId: string;
  strategyName: string;
  startedAt: number;
  currentProfit: number;
  currentLoss: number;
}
```

### `ConditionState`

Real-time condition state for monitoring.

```typescript
interface ConditionState {
  conditionId: string;
  strategyId: string;
  type: ConditionType;
  status: 'true' | 'false' | 'not_evaluable';
  currentValue: any;
  lastEvaluatedAt: number;
  description: string;
}
```

### `PerformanceMetrics`

Performance metrics with time period filtering.

```typescript
interface PerformanceMetrics {
  strategyId: string;
  strategyName: string;
  timePeriod: PerformanceTimePeriod;
  
  // Trigger metrics
  totalTriggers: number;
  successfulTriggers: number;
  failedTriggers: number;
  successRate: number;
  
  // Financial metrics
  totalProfit: number;
  totalLoss: number;
  netProfitLoss: number;
  winRate: number;
  averageProfitPerTrigger: number;
  
  // Timing metrics
  lastTriggeredAt?: number;
  firstTriggeredAt?: number;
}
```

### `AggregatedPerformance`

Aggregated performance across all strategies.

```typescript
interface AggregatedPerformance {
  timePeriod: PerformanceTimePeriod;
  totalStrategies: number;
  activeStrategies: number;
  
  // Aggregate metrics
  totalTriggers: number;
  totalProfit: number;
  totalLoss: number;
  netProfitLoss: number;
  overallWinRate: number;
  
  // Top performers
  topProfitableStrategy?: PerformanceMetrics;
  mostActiveStrategy?: PerformanceMetrics;
  highestWinRateStrategy?: PerformanceMetrics;
}
```

## Testing

Both hooks have comprehensive unit tests:

- `src/hooks/__tests__/useAutoStrategyController.test.ts`
- `src/hooks/__tests__/useStrategyPerformance.test.ts`

Run tests with:
```bash
npm test -- useAutoStrategyController.test.ts
npm test -- useStrategyPerformance.test.ts
```

## Best Practices

1. **Initialize the controller before use:**
   ```tsx
   const { initialize, start } = useAutoStrategyController();
   
   useEffect(() => {
     initialize().then(() => start());
   }, []);
   ```

2. **Handle errors gracefully:**
   ```tsx
   const { error, createStrategy } = useAutoStrategyController();
   
   const handleCreate = async () => {
     try {
       await createStrategy(newStrategy);
     } catch (err) {
       console.error('Failed to create strategy:', err);
     }
   };
   
   if (error) {
     return <ErrorMessage error={error} />;
   }
   ```

3. **Use memoization for expensive operations:**
   ```tsx
   const topPerformers = useMemo(
     () => getTopPerformers(10),
     [performanceData, timePeriod]
   );
   ```

4. **Clean up on unmount:**
   The hooks automatically handle cleanup, but ensure you don't trigger async operations after unmount.

## Integration with UI Components

These hooks are designed to be used with the following UI components:

- **Strategy Builder** (`src/components/auto-strategy/StrategyBuilder.tsx`)
- **Condition Dashboard** (`src/components/auto-strategy/ConditionDashboard.tsx`)
- **Performance Charts** (to be implemented)

See the design document for more details on UI component integration.
