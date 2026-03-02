/**
 * Unit tests for MarketDataMonitor service
 * 
 * Tests cover:
 * - Tick buffering and retrieval
 * - Subscription management
 * - Connection failure handling
 * 
 * Requirements: 1.1, 1.2, 1.3, 1.4
 */

import {
    MarketDataMonitor,
    resetMarketDataMonitor,
} from '../market-data-monitor.service';
import { ConnectionStatus, Tick, CircularBuffer } from '../../../types/auto-strategy.types';

// Mock RobustWebSocketManager
class MockWebSocketManager {
    private callbacks: any = {};
    public connected: boolean = false;
    public sentMessages: any[] = [];

    setCallbacks(callbacks: any) {
        this.callbacks = callbacks;
    }

    connect() {
        this.connected = true;
        // Simulate async connection
        setTimeout(() => {
            if (this.callbacks.onConnected) {
                this.callbacks.onConnected();
            }
        }, 10);
    }

    disconnect() {
        this.connected = false;
        if (this.callbacks.onDisconnected) {
            this.callbacks.onDisconnected({});
        }
    }

    send(message: any): boolean {
        if (!this.connected) return false;
        this.sentMessages.push(message);
        return true;
    }

    // Test helper methods
    simulateMessage(data: any) {
        if (this.callbacks.onMessage) {
            this.callbacks.onMessage(data);
        }
    }

    simulateError(error: any) {
        if (this.callbacks.onError) {
            this.callbacks.onError(error);
        }
    }

    simulateDisconnect() {
        this.connected = false;
        if (this.callbacks.onDisconnected) {
            this.callbacks.onDisconnected({});
        }
    }

    clearSentMessages() {
        this.sentMessages = [];
    }
}

describe('MarketDataMonitor', () => {
    let monitor: MarketDataMonitor;
    let mockWsManager: MockWebSocketManager;

    beforeEach(() => {
        // Reset singleton
        resetMarketDataMonitor();

        // Create mock WebSocket manager
        mockWsManager = new MockWebSocketManager();

        // Mock window.RobustWebSocketManager - ensure it's properly set on global
        if (typeof global.window === 'undefined') {
            (global as any).window = {};
        }
        
        (global.window as any).RobustWebSocketManager = jest.fn(() => mockWsManager);

        // Create new monitor instance
        monitor = new MarketDataMonitor();
    });

    afterEach(() => {
        if (monitor) {
            monitor.disconnect();
        }
        resetMarketDataMonitor();
        jest.clearAllMocks();
    });

    // ========================================================================
    // Connection Management Tests
    // ========================================================================

    describe('Connection Management', () => {
        it('should initialize with disconnected status', () => {
            expect(monitor.getConnectionStatus()).toBe(ConnectionStatus.Disconnected);
        });

        it('should connect to WebSocket successfully', async () => {
            await monitor.connect();
            expect(monitor.getConnectionStatus()).toBe(ConnectionStatus.Connected);
        });

        it('should handle connection failure', async () => {
            // Override mock to simulate connection failure
            mockWsManager.connect = function() {
                setTimeout(() => {
                    if (this.callbacks.onError) {
                        this.callbacks.onError(new Error('Connection failed'));
                    }
                }, 10);
            };

            await expect(monitor.connect()).rejects.toThrow('Failed to connect to WebSocket');
        });

        it('should not connect multiple times if already connected', async () => {
            await monitor.connect();
            const connectSpy = jest.spyOn(mockWsManager, 'connect');
            
            await monitor.connect();
            
            expect(connectSpy).not.toHaveBeenCalled();
        });

        it('should disconnect and clean up resources', async () => {
            await monitor.connect();
            await monitor.subscribeToSymbol('R_100');
            
            monitor.disconnect();
            
            expect(monitor.getConnectionStatus()).toBe(ConnectionStatus.Disconnected);
            expect(monitor.getSubscribedSymbols()).toHaveLength(0);
        });

        it('should update connection status on disconnect', async () => {
            await monitor.connect();
            
            const statusCallback = jest.fn();
            monitor.onConnectionChange(statusCallback);
            
            mockWsManager.simulateDisconnect();
            
            expect(statusCallback).toHaveBeenCalledWith(ConnectionStatus.Reconnecting);
        });

        it('should handle connection timeout', async () => {
            // Override mock to never call onConnected
            mockWsManager.connect = function() {
                // Do nothing - simulate timeout
            };

            await expect(monitor.connect()).rejects.toThrow('Connection timeout');
        }, 15000);
    });

    // ========================================================================
    // Subscription Management Tests
    // ========================================================================

    describe('Subscription Management', () => {
        beforeEach(async () => {
            await monitor.connect();
        });

        it('should subscribe to a symbol successfully', async () => {
            await monitor.subscribeToSymbol('R_100');
            
            expect(mockWsManager.sentMessages).toContainEqual({
                ticks: 'R_100',
                subscribe: 1,
            });
        });

        it('should not subscribe to the same symbol twice', async () => {
            await monitor.subscribeToSymbol('R_100');
            
            // Simulate subscription confirmation
            mockWsManager.simulateMessage({
                tick: createMockTick('R_100', 100.5),
                subscription: { id: 'sub_123' },
            });
            
            mockWsManager.clearSentMessages();
            
            await monitor.subscribeToSymbol('R_100');
            
            expect(mockWsManager.sentMessages).toHaveLength(0);
        });

        it('should throw error when subscribing while disconnected', async () => {
            monitor.disconnect();
            
            await expect(monitor.subscribeToSymbol('R_100')).rejects.toThrow('Not connected to WebSocket');
        });

        it('should unsubscribe from a symbol', async () => {
            await monitor.subscribeToSymbol('R_100');
            
            // Simulate subscription confirmation
            mockWsManager.simulateMessage({
                tick: createMockTick('R_100', 100.5),
                subscription: { id: 'sub_123' },
            });
            
            mockWsManager.clearSentMessages();
            
            await monitor.unsubscribeFromSymbol('R_100');
            
            expect(mockWsManager.sentMessages).toContainEqual({
                forget: 'sub_123',
            });
            expect(monitor.getSubscribedSymbols()).not.toContain('R_100');
        });

        it('should handle unsubscribe from non-subscribed symbol gracefully', async () => {
            await monitor.unsubscribeFromSymbol('R_100');
            
            expect(mockWsManager.sentMessages).toHaveLength(0);
        });

        it('should track subscribed symbols', async () => {
            await monitor.subscribeToSymbol('R_100');
            await monitor.subscribeToSymbol('frxEURUSD');
            
            // Simulate subscription confirmations
            mockWsManager.simulateMessage({
                tick: createMockTick('R_100', 100.5),
                subscription: { id: 'sub_123' },
            });
            mockWsManager.simulateMessage({
                tick: createMockTick('frxEURUSD', 1.1234),
                subscription: { id: 'sub_456' },
            });
            
            const subscribed = monitor.getSubscribedSymbols();
            expect(subscribed).toContain('R_100');
            expect(subscribed).toContain('frxEURUSD');
        });

        it('should resubscribe to symbols after reconnection', async () => {
            await monitor.subscribeToSymbol('R_100');
            
            // Simulate subscription confirmation
            mockWsManager.simulateMessage({
                tick: createMockTick('R_100', 100.5),
                subscription: { id: 'sub_123' },
            });
            
            mockWsManager.clearSentMessages();
            
            // Simulate disconnect and reconnect
            mockWsManager.simulateDisconnect();
            mockWsManager.connect();
            
            // Wait for reconnection
            await new Promise(resolve => setTimeout(resolve, 50));
            
            // Should have sent resubscription request
            expect(mockWsManager.sentMessages).toContainEqual({
                ticks: 'R_100',
                subscribe: 1,
            });
        });
    });

    // ========================================================================
    // Tick Buffering Tests
    // ========================================================================

    describe('Tick Buffering', () => {
        beforeEach(async () => {
            await monitor.connect();
            await monitor.subscribeToSymbol('R_100');
        });

        it('should store ticks in circular buffer', () => {
            const tick = createMockTick('R_100', 100.5);
            mockWsManager.simulateMessage({ tick });
            
            const latestTick = monitor.getLatestTick('R_100');
            expect(latestTick).toMatchObject({
                symbol: 'R_100',
                quote: 100.5,
            });
        });

        it('should maintain buffer of last 1000 ticks', () => {
            // Send 1500 ticks
            for (let i = 0; i < 1500; i++) {
                const tick = createMockTick('R_100', 100 + i);
                mockWsManager.simulateMessage({ tick });
            }
            
            const stats = monitor.getBufferStats('R_100');
            expect(stats?.size).toBe(1000);
            expect(stats?.capacity).toBe(1000);
            expect(stats?.isFull).toBe(true);
        });

        it('should retrieve latest tick correctly', () => {
            mockWsManager.simulateMessage({ tick: createMockTick('R_100', 100.5) });
            mockWsManager.simulateMessage({ tick: createMockTick('R_100', 101.2) });
            mockWsManager.simulateMessage({ tick: createMockTick('R_100', 99.8) });
            
            const latestTick = monitor.getLatestTick('R_100');
            expect(latestTick?.quote).toBe(99.8);
        });

        it('should return null for non-existent symbol', () => {
            const latestTick = monitor.getLatestTick('NON_EXISTENT');
            expect(latestTick).toBeNull();
        });

        it('should retrieve last N ticks', () => {
            // Send 10 ticks
            for (let i = 0; i < 10; i++) {
                mockWsManager.simulateMessage({ tick: createMockTick('R_100', 100 + i) });
            }
            
            const last5 = monitor.getTickBuffer('R_100', 5);
            expect(last5).toHaveLength(5);
            expect(last5[0].quote).toBe(105);
            expect(last5[4].quote).toBe(109);
        });

        it('should return empty array for non-existent symbol buffer', () => {
            const buffer = monitor.getTickBuffer('NON_EXISTENT', 10);
            expect(buffer).toEqual([]);
        });

        it('should handle buffer retrieval when fewer ticks than requested', () => {
            mockWsManager.simulateMessage({ tick: createMockTick('R_100', 100.5) });
            mockWsManager.simulateMessage({ tick: createMockTick('R_100', 101.2) });
            
            const buffer = monitor.getTickBuffer('R_100', 10);
            expect(buffer).toHaveLength(2);
        });

        it('should maintain separate buffers for different symbols', async () => {
            await monitor.subscribeToSymbol('frxEURUSD');
            
            mockWsManager.simulateMessage({ tick: createMockTick('R_100', 100.5) });
            mockWsManager.simulateMessage({ tick: createMockTick('frxEURUSD', 1.1234) });
            
            const r100Tick = monitor.getLatestTick('R_100');
            const eurUsdTick = monitor.getLatestTick('frxEURUSD');
            
            expect(r100Tick?.quote).toBe(100.5);
            expect(eurUsdTick?.quote).toBe(1.1234);
        });

        it('should process ticks within 100ms requirement', () => {
            const startTime = performance.now();
            
            // Process 100 ticks
            for (let i = 0; i < 100; i++) {
                mockWsManager.simulateMessage({ tick: createMockTick('R_100', 100 + i) });
            }
            
            const processingTime = performance.now() - startTime;
            
            // Each tick should be processed well under 100ms
            // Total time for 100 ticks should be reasonable
            expect(processingTime).toBeLessThan(1000); // 1 second for 100 ticks
        });
    });

    // ========================================================================
    // Event Listener Tests
    // ========================================================================

    describe('Event Listeners', () => {
        beforeEach(async () => {
            await monitor.connect();
            await monitor.subscribeToSymbol('R_100');
        });

        it('should notify tick listeners when tick is received', () => {
            const tickCallback = jest.fn();
            monitor.onTick(tickCallback);
            
            const tick = createMockTick('R_100', 100.5);
            mockWsManager.simulateMessage({ tick });
            
            expect(tickCallback).toHaveBeenCalledWith(expect.objectContaining({
                symbol: 'R_100',
                quote: 100.5,
            }));
        });

        it('should allow multiple tick listeners', () => {
            const callback1 = jest.fn();
            const callback2 = jest.fn();
            
            monitor.onTick(callback1);
            monitor.onTick(callback2);
            
            const tick = createMockTick('R_100', 100.5);
            mockWsManager.simulateMessage({ tick });
            
            expect(callback1).toHaveBeenCalled();
            expect(callback2).toHaveBeenCalled();
        });

        it('should unsubscribe tick listener', () => {
            const tickCallback = jest.fn();
            const unsubscribe = monitor.onTick(tickCallback);
            
            unsubscribe();
            
            const tick = createMockTick('R_100', 100.5);
            mockWsManager.simulateMessage({ tick });
            
            expect(tickCallback).not.toHaveBeenCalled();
        });

        it('should notify connection status listeners', async () => {
            const statusCallback = jest.fn();
            monitor.onConnectionChange(statusCallback);
            
            mockWsManager.simulateDisconnect();
            
            expect(statusCallback).toHaveBeenCalledWith(ConnectionStatus.Reconnecting);
        });

        it('should unsubscribe connection status listener', () => {
            const statusCallback = jest.fn();
            const unsubscribe = monitor.onConnectionChange(statusCallback);
            
            unsubscribe();
            
            mockWsManager.simulateDisconnect();
            
            expect(statusCallback).not.toHaveBeenCalled();
        });

        it('should notify error listeners', () => {
            const errorCallback = jest.fn();
            monitor.onError(errorCallback);
            
            const error = new Error('Test error');
            mockWsManager.simulateError(error);
            
            expect(errorCallback).toHaveBeenCalledWith(error);
        });

        it('should unsubscribe error listener', () => {
            const errorCallback = jest.fn();
            const unsubscribe = monitor.onError(errorCallback);
            
            unsubscribe();
            
            const error = new Error('Test error');
            mockWsManager.simulateError(error);
            
            expect(errorCallback).not.toHaveBeenCalled();
        });

        it('should handle errors in tick listeners gracefully', () => {
            const faultyCallback = jest.fn(() => {
                throw new Error('Listener error');
            });
            const goodCallback = jest.fn();
            
            monitor.onTick(faultyCallback);
            monitor.onTick(goodCallback);
            
            const tick = createMockTick('R_100', 100.5);
            
            // Should not throw
            expect(() => {
                mockWsManager.simulateMessage({ tick });
            }).not.toThrow();
            
            // Good callback should still be called
            expect(goodCallback).toHaveBeenCalled();
        });
    });

    // ========================================================================
    // Connection Failure Handling Tests
    // ========================================================================

    describe('Connection Failure Handling', () => {
        it('should update status to reconnecting on disconnect', async () => {
            await monitor.connect();
            
            const statusCallback = jest.fn();
            monitor.onConnectionChange(statusCallback);
            
            mockWsManager.simulateDisconnect();
            
            expect(statusCallback).toHaveBeenCalledWith(ConnectionStatus.Reconnecting);
        });

        it('should update status to error on WebSocket error', async () => {
            await monitor.connect();
            
            const statusCallback = jest.fn();
            monitor.onConnectionChange(statusCallback);
            
            mockWsManager.simulateError(new Error('WebSocket error'));
            
            expect(statusCallback).toHaveBeenCalledWith(ConnectionStatus.Error);
        });

        it('should handle message processing errors gracefully', async () => {
            await monitor.connect();
            
            const errorCallback = jest.fn();
            monitor.onError(errorCallback);
            
            // Send malformed message
            mockWsManager.simulateMessage({ invalid: 'data' });
            
            // Should not throw and should continue processing
            const tick = createMockTick('R_100', 100.5);
            mockWsManager.simulateMessage({ tick });
            
            const latestTick = monitor.getLatestTick('R_100');
            expect(latestTick?.quote).toBe(100.5);
        });

        it('should handle subscription confirmation correctly', async () => {
            await monitor.connect();
            await monitor.subscribeToSymbol('R_100');
            
            // Simulate subscription confirmation
            mockWsManager.simulateMessage({
                tick: createMockTick('R_100', 100.5),
                subscription: { id: 'sub_123' },
            });
            
            const subscription = monitor.getSubscription('R_100');
            expect(subscription).toBeDefined();
            expect(subscription?.subscriptionId).toBe('sub_123');
        });

        it('should clear buffers on disconnect', async () => {
            await monitor.connect();
            await monitor.subscribeToSymbol('R_100');
            
            mockWsManager.simulateMessage({ tick: createMockTick('R_100', 100.5) });
            
            monitor.disconnect();
            
            const latestTick = monitor.getLatestTick('R_100');
            expect(latestTick).toBeNull();
        });
    });

    // ========================================================================
    // Buffer Statistics Tests
    // ========================================================================

    describe('Buffer Statistics', () => {
        beforeEach(async () => {
            await monitor.connect();
            await monitor.subscribeToSymbol('R_100');
        });

        it('should return buffer statistics', () => {
            for (let i = 0; i < 50; i++) {
                mockWsManager.simulateMessage({ tick: createMockTick('R_100', 100 + i) });
            }
            
            const stats = monitor.getBufferStats('R_100');
            expect(stats).toEqual({
                size: 50,
                capacity: 1000,
                isFull: false,
            });
        });

        it('should indicate when buffer is full', () => {
            for (let i = 0; i < 1000; i++) {
                mockWsManager.simulateMessage({ tick: createMockTick('R_100', 100 + i) });
            }
            
            const stats = monitor.getBufferStats('R_100');
            expect(stats?.isFull).toBe(true);
        });

        it('should return null for non-existent symbol', () => {
            const stats = monitor.getBufferStats('NON_EXISTENT');
            expect(stats).toBeNull();
        });
    });
});

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Create a mock tick for testing
 */
function createMockTick(symbol: string, quote: number): Tick {
    return {
        epoch: Math.floor(Date.now() / 1000),
        quote,
        symbol,
        ask: quote + 0.001,
        bid: quote - 0.001,
        id: `tick_${Date.now()}_${Math.random()}`,
        pip_size: 2,
    };
}
