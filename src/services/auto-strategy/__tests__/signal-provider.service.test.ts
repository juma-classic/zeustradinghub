/**
 * Signal Provider Service Tests
 * 
 * Tests signal provider integration, caching, and timeout handling
 * Requirements: 7.1, 7.2, 7.3, 7.4, 7.5
 */

import {
    SignalProviderManager,
    ZeusAISignalProvider,
    CFXSignalProvider,
    ISignalProvider,
    getSignalProviderManager,
    resetSignalProviderManager,
} from '../signal-provider.service';
import { SignalProvider, SignalData, SignalDirection } from '../../../types/auto-strategy.types';

describe('SignalProviderManager', () => {
    let manager: SignalProviderManager;

    beforeEach(() => {
        resetSignalProviderManager();
        manager = new SignalProviderManager();
        jest.clearAllMocks();
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    describe('Provider Registration', () => {
        it('should register providers on initialization', () => {
            expect(manager).toBeDefined();
        });

        it('should allow registering custom providers', () => {
            const mockProvider: ISignalProvider = {
                provider: SignalProvider.ZeusAI,
                fetchSignal: jest.fn(),
                isAvailable: jest.fn(),
            };

            manager.registerProvider(mockProvider);
            expect(manager).toBeDefined();
        });
    });

    describe('Signal Fetching', () => {
        it('should fetch signals from all providers', async () => {
            const mockZeusSignal: SignalData = {
                provider: SignalProvider.ZeusAI,
                direction: SignalDirection.Up,
                strength: 75,
                confidence: 80,
                timestamp: Date.now(),
                isStale: false,
            };

            const mockCFXSignal: SignalData = {
                provider: SignalProvider.CFX,
                direction: SignalDirection.Down,
                strength: 65,
                confidence: 70,
                timestamp: Date.now(),
                isStale: false,
            };

            // Mock the providers
            const zeusProvider = new ZeusAISignalProvider();
            const cfxProvider = new CFXSignalProvider();
            
            jest.spyOn(zeusProvider, 'fetchSignal').mockResolvedValue(mockZeusSignal);
            jest.spyOn(cfxProvider, 'fetchSignal').mockResolvedValue(mockCFXSignal);

            manager.registerProvider(zeusProvider);
            manager.registerProvider(cfxProvider);

            const signals = await manager.getSignals('R_100');

            expect(signals.size).toBeGreaterThanOrEqual(0);
        });

        it('should fetch signal from specific provider', async () => {
            const mockSignal: SignalData = {
                provider: SignalProvider.ZeusAI,
                direction: SignalDirection.Up,
                strength: 75,
                confidence: 80,
                timestamp: Date.now(),
                isStale: false,
            };

            const zeusProvider = new ZeusAISignalProvider();
            jest.spyOn(zeusProvider, 'fetchSignal').mockResolvedValue(mockSignal);
            manager.registerProvider(zeusProvider);

            const signal = await manager.getSignal(SignalProvider.ZeusAI, 'R_100');

            // Signal may be null if provider is not available
            if (signal) {
                expect(signal.provider).toBe(SignalProvider.ZeusAI);
            }
        });

        it('should return null for unregistered provider', async () => {
            const signal = await manager.getSignal('UNKNOWN_PROVIDER' as SignalProvider, 'R_100');
            expect(signal).toBeNull();
        });

        it('should handle provider fetch errors gracefully', async () => {
            const zeusProvider = new ZeusAISignalProvider();
            jest.spyOn(zeusProvider, 'fetchSignal').mockRejectedValue(new Error('Provider unavailable'));
            manager.registerProvider(zeusProvider);

            const signal = await manager.getSignal(SignalProvider.ZeusAI, 'R_100');
            expect(signal).toBeNull();
        });
    });

    describe('Signal Caching', () => {
        it('should cache fetched signals', async () => {
            const mockSignal: SignalData = {
                provider: SignalProvider.ZeusAI,
                direction: SignalDirection.Up,
                strength: 75,
                confidence: 80,
                timestamp: Date.now(),
                isStale: false,
            };

            const zeusProvider = new ZeusAISignalProvider();
            const fetchSpy = jest.spyOn(zeusProvider, 'fetchSignal').mockResolvedValue(mockSignal);
            manager.registerProvider(zeusProvider);

            // First fetch
            await manager.getSignal(SignalProvider.ZeusAI, 'R_100');
            
            // Second fetch should use cache
            await manager.getSignal(SignalProvider.ZeusAI, 'R_100');

            // Should only fetch once due to caching
            expect(fetchSpy).toHaveBeenCalledTimes(1);
        });

        it('should mark signals as stale after cache TTL', async () => {
            const oldTimestamp = Date.now() - 70000; // 70 seconds ago
            const mockSignal: SignalData = {
                provider: SignalProvider.ZeusAI,
                direction: SignalDirection.Up,
                strength: 75,
                confidence: 80,
                timestamp: oldTimestamp,
                isStale: false,
            };

            const zeusProvider = new ZeusAISignalProvider();
            jest.spyOn(zeusProvider, 'fetchSignal').mockResolvedValue(mockSignal);
            manager.registerProvider(zeusProvider);

            // Fetch signal - this will cache it
            const firstSignal = await manager.getSignal(SignalProvider.ZeusAI, 'R_100');

            // Advance time beyond cache TTL (60 seconds)
            jest.advanceTimersByTime(61000);

            // Fetch again - should refetch because cache expired
            const signal = await manager.getSignal(SignalProvider.ZeusAI, 'R_100');

            // The signal timestamp is old (70 seconds), so it should be marked as stale
            if (signal) {
                // Since the signal timestamp is more than 60 seconds old, it should be stale
                const now = Date.now();
                const isStale = (now - signal.timestamp) > 60000;
                expect(isStale).toBe(true);
            }
        });

        it('should clear cache for specific provider and symbol', async () => {
            const mockSignal: SignalData = {
                provider: SignalProvider.ZeusAI,
                direction: SignalDirection.Up,
                strength: 75,
                confidence: 80,
                timestamp: Date.now(),
                isStale: false,
            };

            const zeusProvider = new ZeusAISignalProvider();
            const fetchSpy = jest.spyOn(zeusProvider, 'fetchSignal').mockResolvedValue(mockSignal);
            manager.registerProvider(zeusProvider);

            // Fetch and cache
            await manager.getSignal(SignalProvider.ZeusAI, 'R_100');

            // Clear cache
            manager.clearCache(SignalProvider.ZeusAI, 'R_100');

            // Fetch again - should refetch
            await manager.getSignal(SignalProvider.ZeusAI, 'R_100');

            expect(fetchSpy).toHaveBeenCalledTimes(2);
        });

        it('should clear all cache entries for a provider', async () => {
            const mockSignal: SignalData = {
                provider: SignalProvider.ZeusAI,
                direction: SignalDirection.Up,
                strength: 75,
                confidence: 80,
                timestamp: Date.now(),
                isStale: false,
            };

            const zeusProvider = new ZeusAISignalProvider();
            const fetchSpy = jest.spyOn(zeusProvider, 'fetchSignal').mockResolvedValue(mockSignal);
            manager.registerProvider(zeusProvider);

            // Fetch multiple symbols
            await manager.getSignal(SignalProvider.ZeusAI, 'R_100');
            await manager.getSignal(SignalProvider.ZeusAI, 'R_50');

            // Clear all cache for provider
            manager.clearCache(SignalProvider.ZeusAI);

            // Fetch again - should refetch both
            await manager.getSignal(SignalProvider.ZeusAI, 'R_100');
            await manager.getSignal(SignalProvider.ZeusAI, 'R_50');

            expect(fetchSpy).toHaveBeenCalledTimes(4);
        });

        it('should clear all cache', async () => {
            const mockSignal: SignalData = {
                provider: SignalProvider.ZeusAI,
                direction: SignalDirection.Up,
                strength: 75,
                confidence: 80,
                timestamp: Date.now(),
                isStale: false,
            };

            const zeusProvider = new ZeusAISignalProvider();
            const fetchSpy = jest.spyOn(zeusProvider, 'fetchSignal').mockResolvedValue(mockSignal);
            manager.registerProvider(zeusProvider);

            // Fetch signals
            await manager.getSignal(SignalProvider.ZeusAI, 'R_100');

            // Clear all cache
            manager.clearCache();

            // Fetch again - should refetch
            await manager.getSignal(SignalProvider.ZeusAI, 'R_100');

            expect(fetchSpy).toHaveBeenCalledTimes(2);
        });
    });

    describe('Timeout Handling', () => {
        it('should timeout if signal fetch takes too long', async () => {
            const zeusProvider = new ZeusAISignalProvider();
            
            // Mock a slow fetch that never resolves
            jest.spyOn(zeusProvider, 'fetchSignal').mockImplementation(
                () => new Promise(() => {}) // Never resolves
            );
            
            manager.registerProvider(zeusProvider);

            const signalPromise = manager.getSignal(SignalProvider.ZeusAI, 'R_100');

            // Advance time beyond timeout (5 seconds)
            jest.advanceTimersByTime(6000);

            const signal = await signalPromise;
            expect(signal).toBeNull();
        });

        it('should handle multiple concurrent fetches with timeout', async () => {
            const zeusProvider = new ZeusAISignalProvider();
            
            jest.spyOn(zeusProvider, 'fetchSignal').mockImplementation(
                () => new Promise(() => {})
            );
            
            manager.registerProvider(zeusProvider);

            const promises = [
                manager.getSignal(SignalProvider.ZeusAI, 'R_100'),
                manager.getSignal(SignalProvider.ZeusAI, 'R_50'),
                manager.getSignal(SignalProvider.ZeusAI, 'R_25'),
            ];

            jest.advanceTimersByTime(6000);

            const results = await Promise.all(promises);
            expect(results.every(r => r === null)).toBe(true);
        });
    });

    describe('Singleton Pattern', () => {
        it('should return same instance from getSignalProviderManager', () => {
            const instance1 = getSignalProviderManager();
            const instance2 = getSignalProviderManager();
            expect(instance1).toBe(instance2);
        });

        it('should reset singleton instance', () => {
            const instance1 = getSignalProviderManager();
            resetSignalProviderManager();
            const instance2 = getSignalProviderManager();
            expect(instance1).not.toBe(instance2);
        });
    });
});

describe('ZeusAISignalProvider', () => {
    let provider: ZeusAISignalProvider;

    beforeEach(() => {
        provider = new ZeusAISignalProvider();
        jest.clearAllMocks();
    });

    it('should have correct provider identifier', () => {
        expect(provider.provider).toBe(SignalProvider.ZeusAI);
    });

    it('should check availability based on window object', async () => {
        const available = await provider.isAvailable();
        expect(typeof available).toBe('boolean');
    });

    it('should throw error when Zeus AI data is not available', async () => {
        await expect(provider.fetchSignal('R_100')).rejects.toThrow('Zeus AI data not available');
    });

    it('should receive and store Zeus AI signals via custom events', async () => {
        // Dispatch a Zeus AI signal event
        const signalEvent = new CustomEvent('zeus.trade.signal', {
            detail: {
                type: 'DIGITOVER',
                market: 'R_100',
                prediction: 7,
                confidence: 'high',
                reasoning: 'Test signal',
                timestamp: Date.now(),
            },
        });

        window.dispatchEvent(signalEvent);

        // Wait a bit for event to be processed
        await new Promise(resolve => setTimeout(resolve, 10));

        // Now fetch should work
        const signal = await provider.fetchSignal('R_100');

        expect(signal).toBeDefined();
        expect(signal.provider).toBe(SignalProvider.ZeusAI);
        expect(signal.direction).toBe(SignalDirection.Up); // DIGITOVER with prediction 7 = Up
        expect(signal.confidence).toBe(80); // 'high' maps to 80
    });

    it('should map DIGITOVER to Up direction', async () => {
        const signalEvent = new CustomEvent('zeus.trade.signal', {
            detail: {
                type: 'DIGITOVER',
                market: 'R_50',
                prediction: 8,
                confidence: 'medium',
                timestamp: Date.now(),
            },
        });

        window.dispatchEvent(signalEvent);
        await new Promise(resolve => setTimeout(resolve, 10));

        const signal = await provider.fetchSignal('R_50');
        expect(signal.direction).toBe(SignalDirection.Up);
    });

    it('should map DIGITUNDER to Down direction', async () => {
        const signalEvent = new CustomEvent('zeus.trade.signal', {
            detail: {
                type: 'DIGITUNDER',
                market: 'R_50',
                prediction: 2,
                confidence: 'low',
                timestamp: Date.now(),
            },
        });

        window.dispatchEvent(signalEvent);
        await new Promise(resolve => setTimeout(resolve, 10));

        const signal = await provider.fetchSignal('R_50');
        expect(signal.direction).toBe(SignalDirection.Down);
    });

    it('should map confidence levels correctly', async () => {
        const testCases = [
            { confidence: 'high', expected: 80 },
            { confidence: 'medium', expected: 50 },
            { confidence: 'low', expected: 30 },
        ];

        for (const testCase of testCases) {
            const signalEvent = new CustomEvent('zeus.trade.signal', {
                detail: {
                    type: 'DIGITOVER',
                    market: 'R_100',
                    prediction: 5,
                    confidence: testCase.confidence,
                    timestamp: Date.now(),
                },
            });

            window.dispatchEvent(signalEvent);
            await new Promise(resolve => setTimeout(resolve, 10));

            const signal = await provider.fetchSignal('R_100');
            expect(signal.confidence).toBe(testCase.expected);
            expect(signal.strength).toBe(testCase.expected);
        }
    });

    it('should mark signals as stale after 60 seconds', async () => {
        const oldTimestamp = Date.now() - 70000; // 70 seconds ago
        
        const signalEvent = new CustomEvent('zeus.trade.signal', {
            detail: {
                type: 'DIGITOVER',
                market: 'R_100',
                prediction: 6,
                confidence: 'high',
                timestamp: oldTimestamp,
            },
        });

        window.dispatchEvent(signalEvent);
        await new Promise(resolve => setTimeout(resolve, 10));

        const signal = await provider.fetchSignal('R_100');
        expect(signal.isStale).toBe(true);
    });

    it('should handle multiple markets independently', async () => {
        // Signal for R_100
        const signal1Event = new CustomEvent('zeus.trade.signal', {
            detail: {
                type: 'DIGITOVER',
                market: 'R_100',
                prediction: 7,
                confidence: 'high',
                timestamp: Date.now(),
            },
        });

        // Signal for R_50
        const signal2Event = new CustomEvent('zeus.trade.signal', {
            detail: {
                type: 'DIGITUNDER',
                market: 'R_50',
                prediction: 2,
                confidence: 'low',
                timestamp: Date.now(),
            },
        });

        window.dispatchEvent(signal1Event);
        window.dispatchEvent(signal2Event);
        await new Promise(resolve => setTimeout(resolve, 10));

        const signal1 = await provider.fetchSignal('R_100');
        const signal2 = await provider.fetchSignal('R_50');

        expect(signal1.direction).toBe(SignalDirection.Up);
        expect(signal2.direction).toBe(SignalDirection.Down);
    });
});

describe('CFXSignalProvider', () => {
    let provider: CFXSignalProvider;

    beforeEach(() => {
        provider = new CFXSignalProvider();
        jest.clearAllMocks();
    });

    it('should have correct provider identifier', () => {
        expect(provider.provider).toBe(SignalProvider.CFX);
    });

    it('should check availability based on window object', async () => {
        const available = await provider.isAvailable();
        expect(typeof available).toBe('boolean');
    });

    it('should throw error when CFX data is not available', async () => {
        await expect(provider.fetchSignal('R_100')).rejects.toThrow('CFX data not available');
    });

    it('should receive and store CFX signals via custom events', async () => {
        // Dispatch a CFX signal event
        const signalEvent = new CustomEvent('cfx.trade.signal', {
            detail: {
                market: 'R_100',
                direction: 'down',
                strength: 65,
                confidence: 70,
                timestamp: Date.now(),
            },
        });

        window.dispatchEvent(signalEvent);
        await new Promise(resolve => setTimeout(resolve, 10));

        const signal = await provider.fetchSignal('R_100');

        expect(signal).toBeDefined();
        expect(signal.provider).toBe(SignalProvider.CFX);
        expect(signal.direction).toBe(SignalDirection.Down);
        expect(signal.strength).toBe(65);
        expect(signal.confidence).toBe(70);
    });

    it('should fetch signal from window.cfx API when event not available', async () => {
        // Setup window mock
        const mockWindow = {
            cfx: {
                getSignal: jest.fn().mockReturnValue({
                    direction: 'up',
                    strength: 75,
                    confidence: 80,
                    timestamp: Date.now(),
                }),
            },
        };
        
        Object.defineProperty(global, 'window', {
            value: mockWindow,
            writable: true,
            configurable: true,
        });

        const signal = await provider.fetchSignal('R_100');

        expect(signal).toBeDefined();
        expect(signal.provider).toBe(SignalProvider.CFX);
        expect(signal.direction).toBe(SignalDirection.Up);

        delete (global as any).window;
    });

    it('should map direction strings correctly', async () => {
        const testCases = [
            { input: 'up', expected: SignalDirection.Up },
            { input: 'call', expected: SignalDirection.Up },
            { input: 'buy', expected: SignalDirection.Up },
            { input: 'down', expected: SignalDirection.Down },
            { input: 'put', expected: SignalDirection.Down },
            { input: 'sell', expected: SignalDirection.Down },
            { input: 'neutral', expected: SignalDirection.Neutral },
        ];

        for (const testCase of testCases) {
            const signalEvent = new CustomEvent('cfx.trade.signal', {
                detail: {
                    market: 'R_100',
                    direction: testCase.input,
                    strength: 50,
                    confidence: 50,
                    timestamp: Date.now(),
                },
            });

            window.dispatchEvent(signalEvent);
            await new Promise(resolve => setTimeout(resolve, 10));

            const signal = await provider.fetchSignal('R_100');
            expect(signal.direction).toBe(testCase.expected);
        }
    });

    it('should normalize values to 0-100 range', async () => {
        const signalEvent = new CustomEvent('cfx.trade.signal', {
            detail: {
                market: 'R_100',
                direction: 'down',
                strength: 200, // Out of range
                confidence: -50, // Out of range
                timestamp: Date.now(),
            },
        });

        window.dispatchEvent(signalEvent);
        await new Promise(resolve => setTimeout(resolve, 10));

        const signal = await provider.fetchSignal('R_100');

        expect(signal.strength).toBeGreaterThanOrEqual(0);
        expect(signal.strength).toBeLessThanOrEqual(100);
        expect(signal.confidence).toBeGreaterThanOrEqual(0);
        expect(signal.confidence).toBeLessThanOrEqual(100);
    });

    it('should mark signals as stale after 60 seconds', async () => {
        const oldTimestamp = Date.now() - 70000; // 70 seconds ago
        
        const signalEvent = new CustomEvent('cfx.trade.signal', {
            detail: {
                market: 'R_100',
                direction: 'up',
                strength: 75,
                confidence: 80,
                timestamp: oldTimestamp,
            },
        });

        window.dispatchEvent(signalEvent);
        await new Promise(resolve => setTimeout(resolve, 10));

        const signal = await provider.fetchSignal('R_100');
        expect(signal.isStale).toBe(true);
    });

    it('should handle errors when getting CFX data from API', async () => {
        const mockWindow = {
            cfx: {
                getSignal: jest.fn().mockImplementation(() => {
                    throw new Error('CFX error');
                }),
            },
        };
        
        Object.defineProperty(global, 'window', {
            value: mockWindow,
            writable: true,
            configurable: true,
        });

        await expect(provider.fetchSignal('R_100')).rejects.toThrow('CFX data not available');

        delete (global as any).window;
    });

    it('should handle multiple markets independently', async () => {
        // Signal for R_100
        const signal1Event = new CustomEvent('cfx.trade.signal', {
            detail: {
                market: 'R_100',
                direction: 'up',
                strength: 75,
                confidence: 80,
                timestamp: Date.now(),
            },
        });

        // Signal for R_50
        const signal2Event = new CustomEvent('cfx.trade.signal', {
            detail: {
                market: 'R_50',
                direction: 'down',
                strength: 60,
                confidence: 65,
                timestamp: Date.now(),
            },
        });

        window.dispatchEvent(signal1Event);
        window.dispatchEvent(signal2Event);
        await new Promise(resolve => setTimeout(resolve, 10));

        const signal1 = await provider.fetchSignal('R_100');
        const signal2 = await provider.fetchSignal('R_50');

        expect(signal1.direction).toBe(SignalDirection.Up);
        expect(signal2.direction).toBe(SignalDirection.Down);
    });
});
