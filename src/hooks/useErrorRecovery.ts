/**
 * useErrorRecovery Hook
 * 
 * Provides error recovery capabilities to React components.
 * Handles errors gracefully with automatic retry and fallback mechanisms.
 */

import { useState, useCallback, useEffect } from 'react';
import { getErrorRecovery } from '../services/auto-strategy/error-recovery.service';

export interface UseErrorRecoveryOptions {
  component: string;
  onError?: (error: Error) => void;
  onRecovery?: (success: boolean) => void;
  showNotifications?: boolean;
}

export interface ErrorState {
  hasError: boolean;
  error: Error | null;
  isRecovering: boolean;
  recoveryAttempts: number;
  userMessage: string | null;
}

export function useErrorRecovery(options: UseErrorRecoveryOptions) {
  const { component, onError, onRecovery, showNotifications = true } = options;

  const errorRecovery = getErrorRecovery();

  const [errorState, setErrorState] = useState<ErrorState>({
    hasError: false,
    error: null,
    isRecovering: false,
    recoveryAttempts: 0,
    userMessage: null,
  });

  /**
   * Handle error with automatic recovery
   */
  const handleError = useCallback(
    async (error: Error, operation: string, strategyKey?: string) => {
      console.error(`[${component}] Error in ${operation}:`, error);

      // Get user-friendly message
      const userMessage = errorRecovery.getUserFriendlyMessage(error);

      // Update error state
      setErrorState(prev => ({
        hasError: true,
        error,
        isRecovering: !!strategyKey,
        recoveryAttempts: prev.recoveryAttempts + 1,
        userMessage,
      }));

      // Call custom error handler
      if (onError) {
        onError(error);
      }

      // Show notification if enabled
      if (showNotifications) {
        window.dispatchEvent(
          new CustomEvent('auto-strategy-notification', {
            detail: {
              message: userMessage,
              type: 'error',
            },
          })
        );
      }

      // Attempt recovery if strategy key provided
      if (strategyKey) {
        const recovered = await errorRecovery.recover(strategyKey, {
          component,
          operation,
          error,
        });

        setErrorState(prev => ({
          ...prev,
          isRecovering: false,
          hasError: !recovered,
        }));

        if (onRecovery) {
          onRecovery(recovered);
        }

        return recovered;
      }

      return false;
    },
    [component, errorRecovery, onError, onRecovery, showNotifications]
  );

  /**
   * Clear error state
   */
  const clearError = useCallback(() => {
    setErrorState({
      hasError: false,
      error: null,
      isRecovering: false,
      recoveryAttempts: 0,
      userMessage: null,
    });
  }, []);

  /**
   * Wrap async operation with error handling
   */
  const withErrorHandling = useCallback(
    async <T,>(
      operation: () => Promise<T>,
      operationName: string,
      recoveryStrategy?: string
    ): Promise<T | null> => {
      try {
        return await operation();
      } catch (error) {
        await handleError(error as Error, operationName, recoveryStrategy);
        return null;
      }
    },
    [handleError]
  );

  /**
   * Wrap sync operation with error handling
   */
  const withErrorHandlingSync = useCallback(
    <T,>(
      operation: () => T,
      operationName: string
    ): T | null => {
      try {
        return operation();
      } catch (error) {
        handleError(error as Error, operationName);
        return null;
      }
    },
    [handleError]
  );

  /**
   * Check system health
   */
  const checkHealth = useCallback(async () => {
    return await errorRecovery.healthCheck();
  }, [errorRecovery]);

  return {
    errorState,
    handleError,
    clearError,
    withErrorHandling,
    withErrorHandlingSync,
    checkHealth,
  };
}
