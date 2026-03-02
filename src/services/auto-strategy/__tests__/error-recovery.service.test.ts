/**
 * Unit tests for Error Recovery Service
 */

import { ErrorRecoveryService } from '../error-recovery.service';

describe('ErrorRecoveryService', () => {
    let service: ErrorRecoveryService;

    beforeEach(() => {
        service = new ErrorRecoveryService();
        jest.clearAllMocks();
    });

    describe('attemptRecovery', () => {
        it('should successfully recover from recoverable error', async () => {
            const recoveryFn = jest.fn().mockResolvedValue(undefined);
            const error = new Error('test error');

            const result = await service.attemptRecovery('test', error, recoveryFn);

            expect(result).toBe(true);
            expect(recoveryFn).toHaveBeenCalledTimes(1);
        });

        it('should fail recovery if recovery function throws', async () => {
            const recoveryFn = jest.fn().mockRejectedValue(new Error('recovery failed'));
            const error = new Error('test error');

            const result = await service.attemptRecovery('test', error, recoveryFn);

            expect(result).toBe(false);
            expect(recoveryFn).toHaveBeenCalledTimes(1);
        });

        it('should respect max recovery attempts', async () => {
            const recoveryFn = jest.fn().mockRejectedValue(new Error('recovery failed'));
            const error = new Error('test error');

            // Attempt recovery 4 times (max is 3)
            await service.attemptRecovery('test', error, recoveryFn);
            await service.attemptRecovery('test', error, recoveryFn);
            await service.attemptRecovery('test', error, recoveryFn);
            const result = await service.attemptRecovery('test', error, recoveryFn);

            expect(result).toBe(false);
            expect(recoveryFn).toHaveBeenCalledTimes(3); // Should stop at 3
        });

        it('should reset recovery state after successful recovery', async () => {
            const recoveryFn = jest.fn().mockResolvedValue(undefined);
            const error = new Error('test error');

            await service.attemptRecovery('test', error, recoveryFn);
            expect(service.getRecoveryAttempts('test')).toBe(0);
        });

        it('should track recovery attempts', async () => {
            const recoveryFn = jest.fn().mockRejectedValue(new Error('recovery failed'));
            const error = new Error('test error');

            await service.attemptRecovery('test', error, recoveryFn);
            expect(service.getRecoveryAttempts('test')).toBe(1);

            await service.attemptRecovery('test', error, recoveryFn);
            expect(service.getRecoveryAttempts('test')).toBe(2);
        });
    });

    describe('isRecovering', () => {
        it('should return false when not recovering', () => {
            expect(service.isRecovering('test')).toBe(false);
        });

        it('should return true during recovery', async () => {
            const recoveryFn = jest.fn().mockImplementation(async () => {
                expect(service.isRecovering('test')).toBe(true);
            });
            const error = new Error('test error');

            await service.attemptRecovery('test', error, recoveryFn);
        });
    });

    describe('recoverWebSocketConnection', () => {
        it('should attempt WebSocket reconnection', async () => {
            const reconnectFn = jest.fn().mockResolvedValue(undefined);

            const result = await service.recoverWebSocketConnection(reconnectFn);

            expect(result).toBe(true);
            expect(reconnectFn).toHaveBeenCalledTimes(1);
        });

        it('should wait for connection to stabilize', async () => {
            const reconnectFn = jest.fn().mockResolvedValue(undefined);
            const startTime = Date.now();

            await service.recoverWebSocketConnection(reconnectFn);

            const elapsed = Date.now() - startTime;
            expect(elapsed).toBeGreaterThanOrEqual(1000); // Should wait at least 1 second
        });
    });

    describe('recoverFromDataCorruption', () => {
        it('should clear and reload data', async () => {
            const clearDataFn = jest.fn();
            const reloadDataFn = jest.fn().mockResolvedValue(undefined);

            const result = await service.recoverFromDataCorruption(
                'test',
                clearDataFn,
                reloadDataFn
            );

            expect(result).toBe(true);
            expect(clearDataFn).toHaveBeenCalledTimes(1);
            expect(reloadDataFn).toHaveBeenCalledTimes(1);
        });
    });

    describe('recoverFromServiceFailure', () => {
        it('should restart service', async () => {
            const restartServiceFn = jest.fn().mockResolvedValue(undefined);

            const result = await service.recoverFromServiceFailure(
                'TestService',
                restartServiceFn
            );

            expect(result).toBe(true);
            expect(restartServiceFn).toHaveBeenCalledTimes(1);
        });

        it('should wait for service to initialize', async () => {
            const restartServiceFn = jest.fn().mockResolvedValue(undefined);
            const startTime = Date.now();

            await service.recoverFromServiceFailure('TestService', restartServiceFn);

            const elapsed = Date.now() - startTime;
            expect(elapsed).toBeGreaterThanOrEqual(2000); // Should wait at least 2 seconds
        });
    });

    describe('recoverFromEvaluationFailure', () => {
        it('should pause strategy and notify user', async () => {
            const pauseStrategyFn = jest.fn();
            const notifyUserFn = jest.fn();

            const result = await service.recoverFromEvaluationFailure(
                'strategy-1',
                pauseStrategyFn,
                notifyUserFn
            );

            expect(result).toBe(true);
            expect(pauseStrategyFn).toHaveBeenCalledTimes(1);
            expect(notifyUserFn).toHaveBeenCalledTimes(1);
            expect(notifyUserFn).toHaveBeenCalledWith(
                expect.stringContaining('Strategy evaluation failed')
            );
        });
    });

    describe('recoverFromBotControlFailure', () => {
        it('should stop bot and notify user', async () => {
            const stopBotFn = jest.fn().mockResolvedValue(undefined);
            const notifyUserFn = jest.fn();

            const result = await service.recoverFromBotControlFailure(
                'bot-1',
                stopBotFn,
                notifyUserFn
            );

            expect(result).toBe(true);
            expect(stopBotFn).toHaveBeenCalledTimes(1);
            expect(notifyUserFn).toHaveBeenCalledTimes(1);
            expect(notifyUserFn).toHaveBeenCalledWith(
                expect.stringContaining('Bot control operation failed')
            );
        });

        it('should handle stop bot failure gracefully', async () => {
            const stopBotFn = jest.fn().mockRejectedValue(new Error('stop failed'));
            const notifyUserFn = jest.fn();

            const result = await service.recoverFromBotControlFailure(
                'bot-1',
                stopBotFn,
                notifyUserFn
            );

            expect(result).toBe(true);
            expect(stopBotFn).toHaveBeenCalledTimes(1);
            expect(notifyUserFn).toHaveBeenCalledTimes(1);
        });
    });

    describe('clearAllRecoveryStates', () => {
        it('should clear all recovery states', async () => {
            const recoveryFn = jest.fn().mockRejectedValue(new Error('test'));
            const error = new Error('test error');

            await service.attemptRecovery('test1', error, recoveryFn);
            await service.attemptRecovery('test2', error, recoveryFn);

            expect(service.getAllRecoveryStates().size).toBe(2);

            service.clearAllRecoveryStates();

            expect(service.getAllRecoveryStates().size).toBe(0);
        });
    });
});
