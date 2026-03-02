/**
 * Error Recovery Service
 * 
 * Provides automatic error recovery mechanisms for the Auto Strategy Controller.
 * Handles connection failures, data corruption, and service failures.
 */

import { ErrorHandler, ErrorSeverity, ErrorCategory } from '../../utils/error-handler';

export interface RecoveryState {
    isRecovering: boolean;
    recoveryAttempts: number;
    lastRecoveryTime: number;
    maxRecoveryAttempts: number;
}

export class ErrorRecoveryService {
    private recoveryStates: Map<string, RecoveryState> = new Map();
    private readonly MAX_RECOVERY_ATTEMPTS = 3;
    private readonly RECOVERY_COOLDOWN = 5000; // 5 seconds

    /**
     * Attempt to recover from an error
     */
    async attemptRecovery(
        errorContext: string,
        error: unknown,
        recoveryFn: () => Promise<void>
    ): Promise<boolean> {
        const errorDetails = ErrorHandler.handle(error, errorContext);

        // Check if error is recoverable
        if (!errorDetails.recoverable) {
            console.error(`Non-recoverable error in ${errorContext}:`, errorDetails);
            return false;
        }

        // Get or create recovery state
        const state = this.getRecoveryState(errorContext);

        // Check if we've exceeded max attempts
        if (state.recoveryAttempts >= state.maxRecoveryAttempts) {
            console.error(`Max recovery attempts exceeded for ${errorContext}`);
            this.resetRecoveryState(errorContext);
            return false;
        }

        // Check cooldown period
        const timeSinceLastRecovery = Date.now() - state.lastRecoveryTime;
        if (timeSinceLastRecovery < this.RECOVERY_COOLDOWN) {
            console.warn(`Recovery cooldown active for ${errorContext}`);
            return false;
        }

        // Attempt recovery
        state.isRecovering = true;
        state.recoveryAttempts++;
        state.lastRecoveryTime = Date.now();

        try {
            console.log(`Attempting recovery for ${errorContext} (attempt ${state.recoveryAttempts})`);
            await recoveryFn();
            
            // Recovery successful
            console.log(`Recovery successful for ${errorContext}`);
            this.resetRecoveryState(errorContext);
            return true;
        } catch (recoveryError) {
            console.error(`Recovery failed for ${errorContext}:`, recoveryError);
            state.isRecovering = false;
            return false;
        }
    }

    /**
     * Get recovery state for a context
     */
    private getRecoveryState(context: string): RecoveryState {
        if (!this.recoveryStates.has(context)) {
            this.recoveryStates.set(context, {
                isRecovering: false,
                recoveryAttempts: 0,
                lastRecoveryTime: 0,
                maxRecoveryAttempts: this.MAX_RECOVERY_ATTEMPTS,
            });
        }
        return this.recoveryStates.get(context)!;
    }

    /**
     * Reset recovery state for a context
     */
    private resetRecoveryState(context: string): void {
        this.recoveryStates.delete(context);
    }

    /**
     * Check if recovery is in progress
     */
    isRecovering(context: string): boolean {
        const state = this.recoveryStates.get(context);
        return state?.isRecovering || false;
    }

    /**
     * Get recovery attempts count
     */
    getRecoveryAttempts(context: string): number {
        const state = this.recoveryStates.get(context);
        return state?.recoveryAttempts || 0;
    }

    /**
     * Recover from WebSocket connection failure
     */
    async recoverWebSocketConnection(
        reconnectFn: () => Promise<void>
    ): Promise<boolean> {
        return this.attemptRecovery(
            'WebSocket Connection',
            new Error('WebSocket connection failed'),
            async () => {
                await reconnectFn();
                // Wait for connection to stabilize
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        );
    }

    /**
     * Recover from data corruption
     */
    async recoverFromDataCorruption(
        context: string,
        clearDataFn: () => void,
        reloadDataFn: () => Promise<void>
    ): Promise<boolean> {
        return this.attemptRecovery(
            `Data Corruption: ${context}`,
            new Error('Data corruption detected'),
            async () => {
                // Clear corrupted data
                clearDataFn();
                
                // Reload fresh data
                await reloadDataFn();
            }
        );
    }

    /**
     * Recover from service failure
     */
    async recoverFromServiceFailure(
        serviceName: string,
        restartServiceFn: () => Promise<void>
    ): Promise<boolean> {
        return this.attemptRecovery(
            `Service Failure: ${serviceName}`,
            new Error(`${serviceName} service failed`),
            async () => {
                await restartServiceFn();
                // Wait for service to initialize
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
        );
    }

    /**
     * Recover from strategy evaluation failure
     */
    async recoverFromEvaluationFailure(
        strategyId: string,
        pauseStrategyFn: () => void,
        notifyUserFn: (message: string) => void
    ): Promise<boolean> {
        return this.attemptRecovery(
            `Strategy Evaluation: ${strategyId}`,
            new Error('Strategy evaluation failed'),
            async () => {
                // Pause the problematic strategy
                pauseStrategyFn();
                
                // Notify user
                notifyUserFn(
                    `Strategy evaluation failed. The strategy has been paused. Please review and try again.`
                );
            }
        );
    }

    /**
     * Recover from bot control failure
     */
    async recoverFromBotControlFailure(
        botId: string,
        stopBotFn: () => Promise<void>,
        notifyUserFn: (message: string) => void
    ): Promise<boolean> {
        return this.attemptRecovery(
            `Bot Control: ${botId}`,
            new Error('Bot control operation failed'),
            async () => {
                // Attempt to stop the bot safely
                try {
                    await stopBotFn();
                } catch (stopError) {
                    console.error('Failed to stop bot during recovery:', stopError);
                }
                
                // Notify user
                notifyUserFn(
                    `Bot control operation failed. The bot has been stopped for safety. Please check the bot status.`
                );
            }
        );
    }

    /**
     * Clear all recovery states
     */
    clearAllRecoveryStates(): void {
        this.recoveryStates.clear();
    }

    /**
     * Get all recovery states (for debugging)
     */
    getAllRecoveryStates(): Map<string, RecoveryState> {
        return new Map(this.recoveryStates);
    }
}

// Singleton instance
export const errorRecoveryService = new ErrorRecoveryService();
