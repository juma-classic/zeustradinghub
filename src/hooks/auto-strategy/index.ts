/**
 * Auto Strategy Controller React Hooks
 * 
 * This module exports React hooks for integrating with the Auto Strategy Controller service.
 * 
 * @module hooks/auto-strategy
 */

export { useAutoStrategyController } from '../useAutoStrategyController';
export type {
    UseAutoStrategyControllerReturn,
    RunningBotInfo,
    ConditionState,
} from '../useAutoStrategyController';

export { useStrategyPerformance, PerformanceTimePeriod } from '../useStrategyPerformance';
export type {
    UseStrategyPerformanceReturn,
    PerformanceMetrics,
    AggregatedPerformance,
} from '../useStrategyPerformance';
