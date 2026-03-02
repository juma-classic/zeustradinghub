/**
 * Unit tests for Error Handler
 */

import { ErrorHandler, ErrorSeverity, ErrorCategory, getUserFriendlyErrorMessage } from '../error-handler';

describe('ErrorHandler', () => {
    beforeEach(() => {
        ErrorHandler.clearErrorLog();
    });

    describe('handle', () => {
        it('should categorize network errors correctly', () => {
            const error = new Error('network connection failed');
            const result = ErrorHandler.handle(error, 'test');

            expect(result.category).toBe(ErrorCategory.NETWORK);
            expect(result.severity).toBe(ErrorSeverity.HIGH);
            expect(result.recoverable).toBe(true);
        });

        it('should categorize validation errors correctly', () => {
            const error = new Error('validation failed: invalid input');
            const result = ErrorHandler.handle(error, 'test');

            expect(result.category).toBe(ErrorCategory.VALIDATION);
            expect(result.severity).toBe(ErrorSeverity.MEDIUM);
            expect(result.recoverable).toBe(true);
        });

        it('should categorize permission errors correctly', () => {
            const error = new Error('permission denied');
            const result = ErrorHandler.handle(error, 'test');

            expect(result.category).toBe(ErrorCategory.PERMISSION);
            expect(result.severity).toBe(ErrorSeverity.HIGH);
            expect(result.recoverable).toBe(false);
        });

        it('should categorize data errors correctly', () => {
            const error = new SyntaxError('JSON parse error');
            const result = ErrorHandler.handle(error, 'test');

            expect(result.category).toBe(ErrorCategory.DATA);
            expect(result.severity).toBe(ErrorSeverity.MEDIUM);
            expect(result.recoverable).toBe(true);
        });

        it('should categorize system errors correctly', () => {
            const error = new Error('system internal error');
            const result = ErrorHandler.handle(error, 'test');

            expect(result.category).toBe(ErrorCategory.SYSTEM);
            expect(result.severity).toBe(ErrorSeverity.CRITICAL);
            expect(result.recoverable).toBe(true);
        });

        it('should handle unknown errors', () => {
            const error = new Error('some random error');
            const result = ErrorHandler.handle(error, 'test');

            expect(result.category).toBe(ErrorCategory.UNKNOWN);
            expect(result.code).toBe('UNKNOWN_ERROR');
        });

        it('should handle string errors', () => {
            const error = 'string error message';
            const result = ErrorHandler.handle(error, 'test');

            expect(result.message).toBe('string error message');
        });

        it('should handle object errors with message property', () => {
            const error = { message: 'object error' };
            const result = ErrorHandler.handle(error, 'test');

            expect(result.message).toBe('object error');
        });
    });

    describe('error logging', () => {
        it('should log errors to internal log', () => {
            const error = new Error('test error');
            ErrorHandler.handle(error, 'test');

            const log = ErrorHandler.getErrorLog();
            expect(log.length).toBe(1);
            expect(log[0].message).toBe('test error');
        });

        it('should limit log size to max', () => {
            // Create more than max errors
            for (let i = 0; i < 150; i++) {
                ErrorHandler.handle(new Error(`error ${i}`), 'test');
            }

            const log = ErrorHandler.getErrorLog();
            expect(log.length).toBeLessThanOrEqual(100);
        });

        it('should clear error log', () => {
            ErrorHandler.handle(new Error('test'), 'test');
            expect(ErrorHandler.getErrorLog().length).toBe(1);

            ErrorHandler.clearErrorLog();
            expect(ErrorHandler.getErrorLog().length).toBe(0);
        });
    });

    describe('safeAsync', () => {
        it('should return data on success', async () => {
            const fn = async () => 'success';
            const result = await ErrorHandler.safeAsync(fn, 'test');

            expect(result.data).toBe('success');
            expect(result.error).toBeUndefined();
        });

        it('should return error on failure', async () => {
            const fn = async () => {
                throw new Error('async error');
            };
            const result = await ErrorHandler.safeAsync(fn, 'test');

            expect(result.data).toBeUndefined();
            expect(result.error).toBeDefined();
            expect(result.error?.message).toBe('async error');
        });

        it('should return fallback on failure', async () => {
            const fn = async () => {
                throw new Error('async error');
            };
            const result = await ErrorHandler.safeAsync(fn, 'test', 'fallback');

            expect(result.data).toBe('fallback');
            expect(result.error).toBeDefined();
        });
    });

    describe('safe', () => {
        it('should return data on success', () => {
            const fn = () => 'success';
            const result = ErrorHandler.safe(fn, 'test');

            expect(result.data).toBe('success');
            expect(result.error).toBeUndefined();
        });

        it('should return error on failure', () => {
            const fn = () => {
                throw new Error('sync error');
            };
            const result = ErrorHandler.safe(fn, 'test');

            expect(result.data).toBeUndefined();
            expect(result.error).toBeDefined();
            expect(result.error?.message).toBe('sync error');
        });

        it('should return fallback on failure', () => {
            const fn = () => {
                throw new Error('sync error');
            };
            const result = ErrorHandler.safe(fn, 'test', 'fallback');

            expect(result.data).toBe('fallback');
            expect(result.error).toBeDefined();
        });
    });

    describe('getUserFriendlyErrorMessage', () => {
        it('should return predefined message for known error code', () => {
            const message = getUserFriendlyErrorMessage('BOT_NOT_FOUND');
            expect(message).toBe('The selected bot could not be found. Please check your bot configuration.');
        });

        it('should return default message for unknown error code', () => {
            const message = getUserFriendlyErrorMessage('UNKNOWN_CODE', 'Custom default');
            expect(message).toBe('Custom default');
        });

        it('should return generic message if no default provided', () => {
            const message = getUserFriendlyErrorMessage('UNKNOWN_CODE');
            expect(message).toBe('An unexpected error occurred. Please try again.');
        });
    });
});
