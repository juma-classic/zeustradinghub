import { useState, useEffect, useCallback, useRef } from 'react';
import { getAutoStrategyController } from '../services/auto-strategy/auto-strategy-controller.service';
import { useDebouncedMultipleUpdates } from './auto-strategy/useDebouncedUpdates';
import type {
    Strategy,
    ConnectionStatus,
    StrategyPriority,
    ActionType,
    ConditionType,
    LogicOperator,
} from '../types/auto-strategy.types';
import type {
    ControllerStatus,
    StrategyPerformance,
    ControllerUpdate,
    StrategyWarning,
} from '../services/auto-strategy/auto-strategy-controller.service';

/**
 * Running bot information for UI display
 */
export interface RunningBotInfo {
    botId: string;
    botName: string;
    strategyId: string;
    strategyName: string;
    startedAt: number;
    currentProfit: number;
    currentLoss: number;
}

/**
 * Condition state for real-time monitoring
 */
export interface ConditionState {
    conditionId: string;
    strategyId: string;
    type: ConditionType;
    status: 'true' | 'false' | 'not_evaluable';
    currentValue: any;
    lastEvaluatedAt: number;
    description: string;
}

/**
 * Hook state interface
 */
interface UseAutoStrategyControllerState {
    // Controller status
    status: ControllerStatus;
    connectionStatus: ConnectionStatus;
    isInitialized: boolean;
    
    // Strategies
    strategies: Strategy[];
    activeStrategies: Strategy[];
    
    // Running bots
    runningBots: RunningBotInfo[];
    
    // Condition states
    conditionStates: Map<string, ConditionState>;
    
    // Error state
    error: Error | null;
}

/**
 * Hook return interface
 */
export interface UseAutoStrategyControllerReturn extends UseAutoStrategyControllerState {
    // Lifecycle methods
    initialize: () => Promise<void>;
    start: () => Promise<void>;
    stop: () => Promise<void>;
    emergencyStop: () => Promise<void>;
    
    // Strategy management methods
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

/**
 * React hook for accessing and managing the Auto Strategy Controller
 * 
 * This hook provides:
 * - Access to the controller instance
 * - Real-time state subscription (strategies, running bots, condition states)
 * - Methods for strategy management actions
 * - Connection status tracking
 * 
 * Requirements: 19.1, 19.2, 20.1, 20.2, 20.3, 20.4
 * 
 * @example
 * ```tsx
 * const {
 *   status,
 *   strategies,
 *   runningBots,
 *   connectionStatus,
 *   createStrategy,
 *   activateStrategy,
 *   emergencyStop
 * } = useAutoStrategyController();
 * 
 * // Create a new strategy
 * const handleCreate = async () => {
 *   const strategyId = await createStrategy({
 *     name: 'My Strategy',
 *     conditions: [...],
 *     action: {...}
 *   });
 * };
 * 
 * // Emergency stop all bots
 * const handleEmergencyStop = async () => {
 *   await emergencyStop();
 * };
 * ```
 */
export function useAutoStrategyController(): UseAutoStrategyControllerReturn {
    const controllerRef = useRef(getAutoStrategyController());
    
    // Use debounced updates for high-frequency state changes
    const {
        debouncedValues: state,
        immediateValues: immediateState,
        updateValues: updateState,
    } = useDebouncedMultipleUpdates<UseAutoStrategyControllerState>({
        status: 'stopped' as ControllerStatus,
        connectionStatus: 'disconnected' as ConnectionStatus,
        isInitialized: false,
        strategies: [],
        activeStrategies: [],
        runningBots: [],
        conditionStates: new Map(),
        error: null,
    }, {
        delay: 100, // 100ms debounce for UI updates
        maxWait: 500, // Force update after 500ms max
        trailing: true,
    });

    // Update state from controller (debounced)
    const refreshState = useCallback(() => {
        const controller = controllerRef.current;
        updateState({
            status: controller.getStatus(),
            strategies: controller['strategyStorage'].getAllStrategies(),
            activeStrategies: controller.getActiveStrategies(),
        });
    }, [updateState]);

    // Subscribe to controller updates with debouncing
    useEffect(() => {
        const controller = controllerRef.current;
        
        const unsubscribe = controller.onUpdate((update: ControllerUpdate) => {
            // Use debounced updates for high-frequency changes
            updateState({
                status: update.status,
                strategies: update.strategies,
                activeStrategies: update.strategies.filter(s => s.isActive),
                runningBots: update.runningBots.map(bot => ({
                    botId: bot.botId || '',
                    botName: bot.botName || bot.botId || 'Unknown Bot',
                    strategyId: bot.strategyId || '',
                    strategyName: bot.strategyName || 'Unknown Strategy',
                    startedAt: bot.startedAt || Date.now(),
                    currentProfit: bot.currentProfit || 0,
                    currentLoss: bot.currentLoss || 0,
                })),
                conditionStates: update.conditionStates,
                connectionStatus: update.connectionStatus,
            });
        });

        // Initial state update
        refreshState();

        return () => {
            unsubscribe();
        };
    }, [updateState, refreshState]);

    // Lifecycle methods
    const initialize = useCallback(async () => {
        try {
            await controllerRef.current.initialize();
            updateState({ isInitialized: true, error: null });
        } catch (error) {
            updateState({ error: error as Error });
            throw error;
        }
    }, [updateState]);

    const start = useCallback(async () => {
        try {
            await controllerRef.current.start();
            updateState({ error: null });
        } catch (error) {
            updateState({ error: error as Error });
            throw error;
        }
    }, [updateState]);

    const stop = useCallback(async () => {
        try {
            await controllerRef.current.stop();
            updateState({ error: null });
        } catch (error) {
            updateState({ error: error as Error });
            throw error;
        }
    }, [updateState]);

    const emergencyStop = useCallback(async () => {
        try {
            await controllerRef.current.emergencyStop();
            updateState({ error: null });
        } catch (error) {
            updateState({ error: error as Error });
            throw error;
        }
    }, [updateState]);

    // Strategy management methods
    const createStrategy = useCallback(async (strategy: Omit<Strategy, 'id' | 'createdAt' | 'updatedAt'>) => {
        try {
            const id = await controllerRef.current.createStrategy(strategy);
            refreshState();
            return id;
        } catch (error) {
            updateState({ error: error as Error });
            throw error;
        }
    }, [refreshState, updateState]);

    const updateStrategy = useCallback(async (id: string, updates: Partial<Strategy>) => {
        try {
            await controllerRef.current.updateStrategy(id, updates);
            refreshState();
        } catch (error) {
            updateState({ error: error as Error });
            throw error;
        }
    }, [refreshState, updateState]);

    const deleteStrategy = useCallback(async (id: string) => {
        try {
            await controllerRef.current.deleteStrategy(id);
            refreshState();
        } catch (error) {
            updateState({ error: error as Error });
            throw error;
        }
    }, [refreshState, updateState]);

    const activateStrategy = useCallback(async (id: string) => {
        try {
            await controllerRef.current.activateStrategy(id);
            refreshState();
        } catch (error) {
            updateState({ error: error as Error });
            throw error;
        }
    }, [refreshState, updateState]);

    const deactivateStrategy = useCallback(async (id: string) => {
        try {
            await controllerRef.current.deactivateStrategy(id);
            refreshState();
        } catch (error) {
            updateState({ error: error as Error });
            throw error;
        }
    }, [refreshState, updateState]);

    const pauseStrategy = useCallback(async (id: string) => {
        try {
            await controllerRef.current.pauseStrategy(id);
            refreshState();
        } catch (error) {
            updateState({ error: error as Error });
            throw error;
        }
    }, [refreshState, updateState]);

    const resumeStrategy = useCallback(async (id: string) => {
        try {
            await controllerRef.current.resumeStrategy(id);
            refreshState();
        } catch (error) {
            updateState({ error: error as Error });
            throw error;
        }
    }, [refreshState, updateState]);

    // Query methods
    const getStrategyById = useCallback((id: string) => {
        return state.strategies.find(s => s.id === id);
    }, [state.strategies]);

    const getStrategyPerformance = useCallback((id: string) => {
        return controllerRef.current.getStrategyPerformance(id);
    }, []);

    const getStrategyWarnings = useCallback((strategy: Strategy) => {
        return controllerRef.current.getStrategyWarnings(strategy);
    }, []);

    // Import/Export
    const exportStrategy = useCallback((id: string) => {
        return controllerRef.current.exportStrategy(id);
    }, []);

    const importStrategy = useCallback(async (json: string) => {
        try {
            const id = await controllerRef.current.importStrategy(json);
            refreshState();
            return id;
        } catch (error) {
            updateState({ error: error as Error });
            throw error;
        }
    }, [refreshState, updateState]);

    // Utility
    const refresh = useCallback(() => {
        refreshState();
    }, [refreshState]);

    return {
        // State
        ...state,
        
        // Lifecycle methods
        initialize,
        start,
        stop,
        emergencyStop,
        
        // Strategy management
        createStrategy,
        updateStrategy,
        deleteStrategy,
        activateStrategy,
        deactivateStrategy,
        pauseStrategy,
        resumeStrategy,
        
        // Query methods
        getStrategyById,
        getStrategyPerformance,
        getStrategyWarnings,
        
        // Import/Export
        exportStrategy,
        importStrategy,
        
        // Utility
        refresh,
    };
}
