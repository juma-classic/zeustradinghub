/**
 * Error Handler Utilities
 * 
 * Provides centralized error handling, user-friendly error messages,
 * and error recovery mechanisms for the Auto Strategy Controller.
 */

export enum ErrorSeverity {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
    CRITICAL = 'critical',
}

export enum ErrorCategory {
    NETWORK = 'network',
    VALIDATION = 'validation',
    PERMISSION = 'permission',
    DATA = 'data',
    SYSTEM = 'system',
    UNKNOWN = 'unknown',
}

export interface ErrorDetails {
    code: string;
    message: string;
    userMessage: string;
    severity: ErrorSeverity;
    category: ErrorCategory;
    recoverable: boolean;
    recoveryActions?: RecoveryAction[];
    metadata?: Record<string, any>;
}

export interface RecoveryAction {
    label: string;
    action: () => void | Promise<void>;
    primary?: boolean;
}

/**
 * Error Handler Class
 * Provides methods for handling, categorizing, and recovering from errors
 */
export class ErrorHandler {
    private static errorLog: ErrorDetails[] = [];
    private static maxLogSize = 100;

    /**
     * Handle an error and return user-friendly error details
     */
    static handle(error: unknown, context?: string): ErrorDetails {
        const errorDetails = this.categorizeError(error, context);
        this.logError(errorDetails);
        return errorDetails;
    }

    /**
     * Categorize an error and determine its severity and recovery options
     */
    private static categorizeError(error: unknown, context?: string): ErrorDetails {
        // Network errors
        if (this.isNetworkError(error)) {
            return {
                code: 'NETWORK_ERROR',
                message: this.getErrorMessage(error),
                userMessage: 'Connection issue detected. Please check your internet connection.',
                severity: ErrorSeverity.HIGH,
                category: ErrorCategory.NETWORK,
                recoverable: true,
                recoveryActions: [
                    {
                        label: 'Retry Connection',
                        action: () => window.location.reload(),
                        primary: true,
                    },
                ],
                metadata: { context },
            };
        }

        // Validation errors
        if (this.isValidationError(error)) {
            return {
                code: 'VALIDATION_ERROR',
                message: this.getErrorMessage(error),
                userMessage: 'Invalid input detected. Please check your configuration.',
                severity: ErrorSeverity.MEDIUM,
                category: ErrorCategory.VALIDATION,
                recoverable: true,
                metadata: { context },
            };
        }

        // Permission errors
        if (this.isPermissionError(error)) {
            return {
                code: 'PERMISSION_ERROR',
                message: this.getErrorMessage(error),
                userMessage: 'Permission denied. Please check your account permissions.',
                severity: ErrorSeverity.HIGH,
                category: ErrorCategory.PERMISSION,
                recoverable: false,
                metadata: { context },
            };
        }

        // Data errors
        if (this.isDataError(error)) {
            return {
                code: 'DATA_ERROR',
                message: this.getErrorMessage(error),
                userMessage: 'Data processing error. Your data may be corrupted.',
                severity: ErrorSeverity.MEDIUM,
                category: ErrorCategory.DATA,
                recoverable: true,
                recoveryActions: [
                    {
                        label: 'Clear Cache',
                        action: () => this.clearLocalStorage(),
                        primary: true,
                    },
                ],
                metadata: { context },
            };
        }

        // System errors
        if (this.isSystemError(error)) {
            return {
                code: 'SYSTEM_ERROR',
                message: this.getErrorMessage(error),
                userMessage: 'System error occurred. Please try again or contact support.',
                severity: ErrorSeverity.CRITICAL,
                category: ErrorCategory.SYSTEM,
                recoverable: true,
                recoveryActions: [
                    {
                        label: 'Reload Page',
                        action: () => window.location.reload(),
                        primary: true,
                    },
                ],
                metadata: { context },
            };
        }

        // Unknown errors
        return {
            code: 'UNKNOWN_ERROR',
            message: this.getErrorMessage(error),
            userMessage: 'An unexpected error occurred. Please try again.',
            severity: ErrorSeverity.MEDIUM,
            category: ErrorCategory.UNKNOWN,
            recoverable: true,
            recoveryActions: [
                {
                    label: 'Try Again',
                    action: () => window.location.reload(),
                    primary: true,
                },
            ],
            metadata: { context },
        };
    }

    /**
     * Check if error is a network error
     */
    private static isNetworkError(error: unknown): boolean {
        if (error instanceof Error) {
            return (
                error.message.includes('network') ||
                error.message.includes('fetch') ||
                error.message.includes('connection') ||
                error.message.includes('timeout') ||
                error.name === 'NetworkError'
            );
        }
        return false;
    }

    /**
     * Check if error is a validation error
     */
    private static isValidationError(error: unknown): boolean {
        if (error instanceof Error) {
            return (
                error.message.includes('validation') ||
                error.message.includes('invalid') ||
                error.message.includes('required') ||
                error.name === 'ValidationError'
            );
        }
        return false;
    }

    /**
     * Check if error is a permission error
     */
    private static isPermissionError(error: unknown): boolean {
        if (error instanceof Error) {
            return (
                error.message.includes('permission') ||
                error.message.includes('unauthorized') ||
                error.message.includes('forbidden') ||
                error.name === 'PermissionError'
            );
        }
        return false;
    }

    /**
     * Check if error is a data error
     */
    private static isDataError(error: unknown): boolean {
        if (error instanceof Error) {
            return (
                error.message.includes('parse') ||
                error.message.includes('JSON') ||
                error.message.includes('corrupt') ||
                error.name === 'SyntaxError'
            );
        }
        return false;
    }

    /**
     * Check if error is a system error
     */
    private static isSystemError(error: unknown): boolean {
        if (error instanceof Error) {
            return (
                error.message.includes('system') ||
                error.message.includes('internal') ||
                error.name === 'SystemError'
            );
        }
        return false;
    }

    /**
     * Extract error message from various error types
     */
    private static getErrorMessage(error: unknown): string {
        if (error instanceof Error) {
            return error.message;
        }
        if (typeof error === 'string') {
            return error;
        }
        if (error && typeof error === 'object' && 'message' in error) {
            return String(error.message);
        }
        return 'Unknown error';
    }

    /**
     * Log error to internal error log
     */
    private static logError(errorDetails: ErrorDetails): void {
        this.errorLog.push({
            ...errorDetails,
            metadata: {
                ...errorDetails.metadata,
                timestamp: Date.now(),
            },
        });

        // Trim log if it exceeds max size
        if (this.errorLog.length > this.maxLogSize) {
            this.errorLog = this.errorLog.slice(-this.maxLogSize);
        }

        // Log to console based on severity
        const logMethod = this.getLogMethod(errorDetails.severity);
        logMethod(`[${errorDetails.category}] ${errorDetails.message}`, errorDetails);
    }

    /**
     * Get appropriate console log method based on severity
     */
    private static getLogMethod(severity: ErrorSeverity): typeof console.log {
        switch (severity) {
            case ErrorSeverity.CRITICAL:
            case ErrorSeverity.HIGH:
                return console.error;
            case ErrorSeverity.MEDIUM:
                return console.warn;
            case ErrorSeverity.LOW:
            default:
                return console.log;
        }
    }

    /**
     * Get error log
     */
    static getErrorLog(): ErrorDetails[] {
        return [...this.errorLog];
    }

    /**
     * Clear error log
     */
    static clearErrorLog(): void {
        this.errorLog = [];
    }

    /**
     * Clear localStorage (recovery action)
     */
    private static clearLocalStorage(): void {
        try {
            const keysToKeep = ['auth_token', 'user_preferences'];
            const storage: Record<string, string> = {};
            
            keysToKeep.forEach(key => {
                const value = localStorage.getItem(key);
                if (value) {
                    storage[key] = value;
                }
            });

            localStorage.clear();

            Object.entries(storage).forEach(([key, value]) => {
                localStorage.setItem(key, value);
            });

            window.location.reload();
        } catch (error) {
            console.error('Failed to clear localStorage:', error);
        }
    }

    /**
     * Create a safe async wrapper that handles errors
     */
    static async safeAsync<T>(
        fn: () => Promise<T>,
        context?: string,
        fallback?: T
    ): Promise<{ data?: T; error?: ErrorDetails }> {
        try {
            const data = await fn();
            return { data };
        } catch (error) {
            const errorDetails = this.handle(error, context);
            return { error: errorDetails, data: fallback };
        }
    }

    /**
     * Create a safe sync wrapper that handles errors
     */
    static safe<T>(
        fn: () => T,
        context?: string,
        fallback?: T
    ): { data?: T; error?: ErrorDetails } {
        try {
            const data = fn();
            return { data };
        } catch (error) {
            const errorDetails = this.handle(error, context);
            return { error: errorDetails, data: fallback };
        }
    }
}

/**
 * User-friendly error messages for common error codes
 */
export const ERROR_MESSAGES: Record<string, string> = {
    // Bot control errors
    BOT_NOT_FOUND: 'The selected bot could not be found. Please check your bot configuration.',
    BOT_ALREADY_RUNNING: 'This bot is already running. Please stop it before starting again.',
    INSUFFICIENT_BALANCE: 'Insufficient account balance to start this bot.',
    BOT_START_FAILED: 'Failed to start the bot. Please try again.',
    BOT_STOP_FAILED: 'Failed to stop the bot. Please try again.',
    
    // Strategy errors
    STRATEGY_NOT_FOUND: 'Strategy not found. It may have been deleted.',
    STRATEGY_VALIDATION_FAILED: 'Strategy validation failed. Please check your configuration.',
    STRATEGY_SAVE_FAILED: 'Failed to save strategy. Please try again.',
    
    // Connection errors
    WEBSOCKET_CONNECTION_FAILED: 'Failed to connect to market data. Please check your connection.',
    WEBSOCKET_DISCONNECTED: 'Connection to market data lost. Reconnecting...',
    
    // Data errors
    TICK_DATA_UNAVAILABLE: 'Market data is currently unavailable. Please try again later.',
    INSUFFICIENT_TICK_DATA: 'Not enough market data to evaluate conditions.',
    
    // Risk management errors
    PROFIT_TARGET_REACHED: 'Daily profit target reached. All bots have been stopped.',
    LOSS_LIMIT_REACHED: 'Daily loss limit reached. All bots have been stopped.',
    MAX_CONCURRENT_BOTS_REACHED: 'Maximum number of concurrent bots reached.',
    
    // Permission errors
    DEMO_MODE_REQUIRED: 'This action requires demo mode. Please switch to a demo account.',
    REAL_MODE_REQUIRED: 'This action requires a real account. Please switch accounts.',
    
    // Generic errors
    UNKNOWN_ERROR: 'An unexpected error occurred. Please try again.',
    OPERATION_FAILED: 'Operation failed. Please try again.',
};

/**
 * Get user-friendly error message
 */
export function getUserFriendlyErrorMessage(errorCode: string, defaultMessage?: string): string {
    return ERROR_MESSAGES[errorCode] || defaultMessage || ERROR_MESSAGES.UNKNOWN_ERROR;
}
