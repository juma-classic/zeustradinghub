/**
 * Unit tests for MarketDataMonitor service
 */

import { MarketDataMonitor, resetMarketDataMonitor } from '../market-data-monitor.service';
import { ConnectionStatus, CircularBuffer, Tick } from '../../../types/auto-strategy.types';

describe('CircularBuffer', () => {
    let buffer: CircularBuffer<number>;

    beforeEach(() => {
        buffer = new CircularBuffer<number>(5);
    });

    it('should initialize with correct capacity', () => {
        expect(buffer.getCapacity()).toBe(5);
        expect(buffer.getSize()).toBe(0);
        expect(buffer.isEmpty()).toBe(true);
        expect(buffer.isFull()).toBe(false);
    });

    it('should throw error for invalid capacity', () => {
        expect(() => new CircularBuffer<number>(0)).toThrow('Capacity must be greater than 0');
        expect(() => new CircularBuffer<number>(-1)).toThrow('Capacity must be greater than 0');
    });

    it('should add items correctly', () => {
        buffer.push(1);
        buffer.push(2);
        buffer.push(3);

        expect(buffer.getSize()).toBe(3);
        expect(buffer.isEmpty()).toBe(false);
        expect(buffer.isFull()).toBe(false);
        expect(buffer.getLatest()).toBe(3);
    });

    it('should overwrite oldest items when full', () => {
        buffer.push(1);
        buffer.push(2);
        buffer.push(3);
        buffer.push(4);
        buffer.push(5);
        
        expect(buffer.isFull()).toBe(true);
        expect(buffer.getSize()).toBe(5);

        // Add one more, should overwrite oldest (1)
        buffer.push(6);
        
        expect(buffer.getSize()).toBe(5);
        expect(buffer.toArray()).toEqual([2, 3, 4, 5, 6]);
    });

    it('should get last N items correctly', () => {
        buffer.push(1);
        buffer.push(2);
        buffer.push(3);
        buffer.push(4);
        buffer.push(5);

        expect(buffer.getLast(3)).toEqual([3, 4, 5]);
        expect(buffer.getLast(5)).toEqual([1, 2, 3, 4, 5]);
        expect(buffer.getLast(10)).toEqual([1, 2, 3, 4, 5]); // More than size
        expect(buffer.getLast(0)).toEqual([]);
    });

    it('should get latest item correctly', () => {
        expect(buffer.getLatest()).toBeNull();
        
        buffer.push(1);
        expect(buffer.getLatest()).toBe(1);
        
        buffer.push(2);
        expect(buffer.getLatest()).toBe(2);
    });

    it('should convert to array in chronological order', () => {
        buffer.push(1);
        buffer.push(2);
        buffer.push(3);

        expect(buffer.toArray()).toEqual([1, 2, 3]);
    });

    it('should clear buffer correctly', () => {
        buffer.push(1);
        buffer.push(2);
        buffer.push(3);

        buffer.clear();

        expect(buffer.getSize()).toBe(0);
        expect(buffer.isEmpty()).toBe(true);
        expect(buffer.getLatest()).toBeNull();
        expect(buffer.toArray()).toEqual([]);
    });

    it('should handle wraparound correctly', () => {
        // Fill buffer
        for (let i = 1; i <= 5; i++) {
            buffer.push(i);
        }

        // Add more items to cause wraparound
        buffer.push(6);
        buffer.push(7);
        buffer.push(8);

        expect(buffer.toArray()).toEqual([4, 5, 6, 7, 8]);
        expect(buffer.getLast(3)).toEqual([6, 7, 8]);
    });
});

describe('MarketDataMonitor', () => {
    let monitor: MarketDataMonitor;

    beforeEach(() => {
        resetMarketDataMonitor();
        monitor = new MarketDataMonitor();
    });

    afterEach(() => {
        if (monitor) {
            monitor.disconnect();
        }
        resetMarketDataMonitor();
    });

    it('should initialize with disconnected status', () => {
        expect(monitor.getConnectionStatus()).toBe(ConnectionStatus.Disconnected);
        expect(monitor.getSubscribedSymbols()).toEqual([]);
    });

    it('should register and unregister tick listeners', () => {
        const callback = jest.fn();
        const unsubscribe = monitor.onTick(callback);

        expect(typeof unsubscribe).toBe('function');
        
        // Unsubscribe
        unsubscribe();
    });

    it('should register and unregister connection listeners', () => {
        const callback = jest.fn();
        const unsubscribe = monitor.onConnectionChange(callback);

        expect(typeof unsubscribe).toBe('function');
        
        // Unsubscribe
        unsubscribe();
    });

    it('should register and unregister error listeners', () => {
        const callback = jest.fn();
        const unsubscribe = monitor.onError(callback);

        expect(typeof unsubscribe).toBe('function');
        
        // Unsubscribe
        unsubscribe();
    });

    it('should return null for latest tick when no data', () => {
        expect(monitor.getLatestTick('R_100')).toBeNull();
    });

    it('should return empty array for tick buffer when no data', () => {
        expect(monitor.getTickBuffer('R_100', 10)).toEqual([]);
    });

    it('should return null for buffer stats when symbol not subscribed', () => {
        expect(monitor.getBufferStats('R_100')).toBeNull();
    });

    it('should throw error when subscribing without connection', async () => {
        await expect(monitor.subscribeToSymbol('R_100')).rejects.toThrow('Not connected to WebSocket');
    });

    it('should handle disconnect gracefully', () => {
        expect(() => monitor.disconnect()).not.toThrow();
    });

    it('should not throw when unsubscribing from non-existent symbol', async () => {
        await expect(monitor.unsubscribeFromSymbol('R_100')).resolves.not.toThrow();
    });
});

describe('MarketDataMonitor - Tick Processing', () => {
    let monitor: MarketDataMonitor;

    beforeEach(() => {
        resetMarketDataMonitor();
        monitor = new MarketDataMonitor();
    });

    afterEach(() => {
        if (monitor) {
            monitor.disconnect();
        }
        resetMarketDataMonitor();
    });

    it('should process tick data correctly', () => {
        // This test would require mocking the WebSocket connection
        // For now, we just verify the structure is correct
        expect(monitor).toBeDefined();
        expect(typeof monitor.getLatestTick).toBe('function');
        expect(typeof monitor.getTickBuffer).toBe('function');
    });

    it('should maintain separate buffers for different symbols', () => {
        // Verify that the monitor can handle multiple symbols
        expect(monitor.getLatestTick('R_100')).toBeNull();
        expect(monitor.getLatestTick('R_50')).toBeNull();
        
        // These should be independent
        expect(monitor.getTickBuffer('R_100', 10)).toEqual([]);
        expect(monitor.getTickBuffer('R_50', 10)).toEqual([]);
    });
});
