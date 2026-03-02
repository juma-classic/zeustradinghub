/**
 * Market Data Monitor Service
 * 
 * Manages WebSocket connection and processes real-time market data for the Auto Strategy Controller.
 * Integrates with RobustWebSocketManager for reliable connection management.
 * 
 * Key Features:
 * - Real-time tick data subscription and processing
 * - Circular buffer storage (last 1000 ticks per symbol)
 * - Connection status tracking and event emission
 * - Automatic reconnection handling
 * - Sub-100ms tick processing
 * 
 * Requirements: 1.1, 1.2, 1.3, 1.4, 27.1, 27.2
 */

import {
    Tick,
    ConnectionStatus,
    CircularBuffer,
    TickCallback,
    ConnectionStatusCallback,
    ErrorCallback,
    TickSubscription,
} from '../../types/auto-strategy.types';
import { getPerformanceOptimizer } from './performance-optimizer.service';

/**
 * Interface for Market Data Monitor
 */
export interface IMarketDataMonitor {
    connect(): Promise<void>;
    disconnect(): void;
    subscribeToSymbol(symbol: string): Promise<void>;
    unsubscribeFromSymbol(symbol: string): Promise<void>;
    getLatestTick(symbol: string): Tick | null;
    getTickBuffer(symbol: string, count: number): Tick[];
    getConnectionStatus(): ConnectionStatus;
    onTick(callback: TickCallback): () => void;
    onConnectionChange(callback: ConnectionStatusCallback): () => void;
    onError(callback: ErrorCallback): () => void;
}

/**
 * Market Data Monitor Service Implementation
 */
export class MarketDataMonitor implements IMarketDataMonitor {
    private wsManager: any; // RobustWebSocketManager instance
    private tickBuffers: Map<string, CircularBuffer<Tick>>;
    private subscriptions: Map<string, TickSubscription>;
    private connectionStatus: ConnectionStatus;
    
    // Event listeners
    private tickListeners: Set<TickCallback>;
    private connectionListeners: Set<ConnectionStatusCallback>;
    private errorListeners: Set<ErrorCallback>;
    
    // Configuration
    private readonly BUFFER_SIZE = 1000;
    private readonly PROCESSING_TIMEOUT = 100; // 100ms requirement
    
    // Connection state
    private isInitialized: boolean = false;
    private connectionPromise: Promise<void> | null = null;

    constructor() {
        this.tickBuffers = new Map();
        this.subscriptions = new Map();
        this.connectionStatus = ConnectionStatus.Disconnected;
        
        this.tickListeners = new Set();
        this.connectionListeners = new Set();
        this.errorListeners = new Set();
        
        console.log('📊 MarketDataMonitor initialized');
    }

    /**
     * Connect to WebSocket and initialize monitoring
     */
    async connect(): Promise<void> {
        if (this.isInitialized && this.connectionStatus === ConnectionStatus.Connected) {
            console.log('📊 Already connected to WebSocket');
            return;
        }

        if (this.connectionPromise) {
            console.log('📊 Connection already in progress, waiting...');
            return this.connectionPromise;
        }

        this.connectionPromise = this._performConnect();
        
        try {
            await this.connectionPromise;
        } finally {
            this.connectionPromise = null;
        }
    }

    /**
     * Internal connection logic
     */
    private async _performConnect(): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                // Get RobustWebSocketManager from window
                if (typeof window === 'undefined' || !window.RobustWebSocketManager) {
                    throw new Error('RobustWebSocketManager not available');
                }

                // Create WebSocket manager instance
                this.wsManager = new window.RobustWebSocketManager();

                // Set up callbacks
                this.wsManager.setCallbacks({
                    onConnected: () => {
                        console.log('📊 MarketDataMonitor: WebSocket connected');
                        this.handleConnected();
                        resolve();
                    },
                    onDisconnected: (event: any) => {
                        console.log('📊 MarketDataMonitor: WebSocket disconnected', event);
                        this.handleDisconnected();
                    },
                    onMessage: (data: any) => {
                        this.handleMessage(data);
                    },
                    onError: (error: any) => {
                        console.error('📊 MarketDataMonitor: WebSocket error', error);
                        this.handleError(error);
                        if (!this.isInitialized) {
                            reject(new Error('Failed to connect to WebSocket'));
                        }
                    },
                });

                // Update status
                this.updateConnectionStatus(ConnectionStatus.Connecting);

                // Initiate connection
                this.wsManager.connect();

                // Set timeout for connection
                setTimeout(() => {
                    if (!this.isInitialized) {
                        reject(new Error('Connection timeout'));
                    }
                }, 10000);

            } catch (error) {
                console.error('📊 Failed to initialize WebSocket connection:', error);
                this.updateConnectionStatus(ConnectionStatus.Error);
                reject(error);
            }
        });
    }

    /**
     * Disconnect from WebSocket
     */
    disconnect(): void {
        console.log('📊 Disconnecting MarketDataMonitor...');

        // Unsubscribe from all symbols
        const symbols = Array.from(this.subscriptions.keys());
        symbols.forEach(symbol => {
            this.unsubscribeFromSymbol(symbol).catch(err => {
                console.error(`Failed to unsubscribe from ${symbol}:`, err);
            });
        });

        // Disconnect WebSocket
        if (this.wsManager) {
            this.wsManager.disconnect();
            this.wsManager = null;
        }

        // Clear state
        this.tickBuffers.clear();
        this.subscriptions.clear();
        this.isInitialized = false;
        this.updateConnectionStatus(ConnectionStatus.Disconnected);

        console.log('📊 MarketDataMonitor disconnected');
    }

    /**
     * Subscribe to tick stream for a symbol
     */
    async subscribeToSymbol(symbol: string): Promise<void> {
        if (!this.isInitialized || this.connectionStatus !== ConnectionStatus.Connected) {
            throw new Error('Not connected to WebSocket');
        }

        if (this.subscriptions.has(symbol)) {
            console.log(`📊 Already subscribed to ${symbol}`);
            return;
        }

        console.log(`📊 Subscribing to ${symbol}...`);

        // Create buffer for this symbol
        if (!this.tickBuffers.has(symbol)) {
            this.tickBuffers.set(symbol, new CircularBuffer<Tick>(this.BUFFER_SIZE));
        }

        // Send subscription request
        const subscribeRequest = {
            ticks: symbol,
            subscribe: 1,
        };

        const success = this.wsManager.send(subscribeRequest);
        
        if (!success) {
            throw new Error(`Failed to send subscription request for ${symbol}`);
        }

        // Note: We'll store the subscription info when we receive the first tick with subscription ID
        console.log(`📊 Subscription request sent for ${symbol}`);
    }

    /**
     * Subscribe to multiple symbols at once
     * Requirements: 38.2
     */
    async subscribeToSymbols(symbols: string[]): Promise<void> {
        console.log(`📊 Subscribing to ${symbols.length} symbols: ${symbols.join(', ')}`);
        
        const subscriptionPromises = symbols.map(symbol => 
            this.subscribeToSymbol(symbol).catch(err => {
                console.error(`Failed to subscribe to ${symbol}:`, err);
                return null;
            })
        );
        
        await Promise.all(subscriptionPromises);
        console.log(`📊 Completed subscription requests for ${symbols.length} symbols`);
    }

    /**
     * Unsubscribe from tick stream for a symbol
     */
    async unsubscribeFromSymbol(symbol: string): Promise<void> {
        const subscription = this.subscriptions.get(symbol);
        
        if (!subscription) {
            console.log(`📊 Not subscribed to ${symbol}`);
            return;
        }

        console.log(`📊 Unsubscribing from ${symbol}...`);

        // Send forget request
        const forgetRequest = {
            forget: subscription.subscriptionId,
        };

        if (this.wsManager) {
            this.wsManager.send(forgetRequest);
        }

        // Remove subscription and buffer
        this.subscriptions.delete(symbol);
        this.tickBuffers.delete(symbol);

        console.log(`📊 Unsubscribed from ${symbol}`);
    }

    /**
     * Get the most recent tick for a symbol
     */
    getLatestTick(symbol: string): Tick | null {
        const buffer = this.tickBuffers.get(symbol);
        if (!buffer) {
            return null;
        }
        return buffer.getLatest();
    }

    /**
     * Get last N ticks for a symbol
     */
    getTickBuffer(symbol: string, count: number): Tick[] {
        const buffer = this.tickBuffers.get(symbol);
        if (!buffer) {
            return [];
        }
        return buffer.getLast(count);
    }

    /**
     * Get current connection status
     */
    getConnectionStatus(): ConnectionStatus {
        return this.connectionStatus;
    }

    /**
     * Register callback for tick events
     */
    onTick(callback: TickCallback): () => void {
        this.tickListeners.add(callback);
        
        // Return unsubscribe function
        return () => {
            this.tickListeners.delete(callback);
        };
    }

    /**
     * Register callback for connection status changes
     */
    onConnectionChange(callback: ConnectionStatusCallback): () => void {
        this.connectionListeners.add(callback);
        
        // Return unsubscribe function
        return () => {
            this.connectionListeners.delete(callback);
        };
    }

    /**
     * Register callback for errors
     */
    onError(callback: ErrorCallback): () => void {
        this.errorListeners.add(callback);
        
        // Return unsubscribe function
        return () => {
            this.errorListeners.delete(callback);
        };
    }

    /**
     * Get subscribed symbols
     */
    getSubscribedSymbols(): string[] {
        return Array.from(this.subscriptions.keys());
    }

    /**
     * Get subscription info for a symbol
     */
    getSubscription(symbol: string): TickSubscription | undefined {
        return this.subscriptions.get(symbol);
    }

    /**
     * Get buffer statistics for a symbol
     */
    getBufferStats(symbol: string): { size: number; capacity: number; isFull: boolean } | null {
        const buffer = this.tickBuffers.get(symbol);
        if (!buffer) {
            return null;
        }
        
        return {
            size: buffer.getSize(),
            capacity: buffer.getCapacity(),
            isFull: buffer.isFull(),
        };
    }

    // ========================================================================
    // Private Methods - Event Handlers
    // ========================================================================

    /**
     * Handle WebSocket connected event
     */
    private handleConnected(): void {
        this.isInitialized = true;
        this.updateConnectionStatus(ConnectionStatus.Connected);
        
        // Resubscribe to symbols if reconnecting
        if (this.subscriptions.size > 0) {
            console.log('📊 Resubscribing to symbols after reconnection...');
            const symbols = Array.from(this.subscriptions.keys());
            
            // Clear old subscriptions
            this.subscriptions.clear();
            
            // Resubscribe
            symbols.forEach(symbol => {
                this.subscribeToSymbol(symbol).catch(err => {
                    console.error(`Failed to resubscribe to ${symbol}:`, err);
                });
            });
        }
    }

    /**
     * Handle WebSocket disconnected event
     */
    private handleDisconnected(): void {
        const wasConnected = this.connectionStatus === ConnectionStatus.Connected;
        
        if (wasConnected) {
            this.updateConnectionStatus(ConnectionStatus.Reconnecting);
        } else {
            this.updateConnectionStatus(ConnectionStatus.Disconnected);
        }
    }

    /**
     * Handle WebSocket message
     */
    private handleMessage(data: any): void {
        const startTime = performance.now();

        try {
            // Handle tick data
            if (data.tick) {
                this.processTick(data);
            }

            // Handle subscription confirmation
            if (data.subscription && data.tick) {
                this.handleSubscriptionConfirmation(data);
            }

            // Handle forget confirmation
            if (data.msg_type === 'forget') {
                console.log('📊 Unsubscription confirmed');
            }

            // Check processing time
            const processingTime = performance.now() - startTime;
            if (processingTime > this.PROCESSING_TIMEOUT) {
                console.warn(`⚠️ Tick processing took ${processingTime.toFixed(2)}ms (exceeds ${this.PROCESSING_TIMEOUT}ms requirement)`);
            }

        } catch (error) {
            console.error('📊 Error handling WebSocket message:', error);
            this.notifyError(error instanceof Error ? error : new Error(String(error)));
        }
    }

    /**
     * Process incoming tick data
     */
    private processTick(data: any): void {
        const performanceOptimizer = getPerformanceOptimizer();
        const startTime = performance.now();
        
        const tickData = data.tick;
        
        const tick: Tick = {
            epoch: tickData.epoch,
            quote: tickData.quote,
            symbol: tickData.symbol,
            ask: tickData.ask,
            bid: tickData.bid,
            id: tickData.id,
            pip_size: tickData.pip_size,
        };

        // Store in buffer with optimization
        let buffer = this.tickBuffers.get(tick.symbol);
        if (!buffer) {
            buffer = new CircularBuffer<Tick>(this.BUFFER_SIZE);
            this.tickBuffers.set(tick.symbol, buffer);
        }
        
        buffer.push(tick);

        // Optimize buffer if it's getting too large
        if (buffer.size() > this.BUFFER_SIZE * 1.2) {
            const optimizedTicks = performanceOptimizer.optimizeTickBuffer(
                buffer.toArray(), 
                this.BUFFER_SIZE
            );
            
            // Replace buffer with optimized version
            const newBuffer = new CircularBuffer<Tick>(this.BUFFER_SIZE);
            optimizedTicks.forEach(t => newBuffer.push(t));
            this.tickBuffers.set(tick.symbol, newBuffer);
        }

        // Track processing time
        const processingTime = performance.now() - startTime;
        if (processingTime > 100) {
            console.warn(`⚠️ Tick processing took ${processingTime.toFixed(2)}ms (exceeds 100ms requirement)`);
        }

        // Notify listeners
        this.notifyTickListeners(tick);
    }

    /**
     * Handle subscription confirmation
     */
    private handleSubscriptionConfirmation(data: any): void {
        const symbol = data.tick.symbol;
        const subscriptionId = data.subscription.id;

        if (!this.subscriptions.has(symbol)) {
            const subscription: TickSubscription = {
                symbol,
                subscriptionId,
                subscribedAt: Date.now(),
            };
            
            this.subscriptions.set(symbol, subscription);
            console.log(`📊 Subscription confirmed for ${symbol} (ID: ${subscriptionId})`);
        }
    }

    /**
     * Handle WebSocket error
     */
    private handleError(error: any): void {
        this.updateConnectionStatus(ConnectionStatus.Error);
        this.notifyError(error instanceof Error ? error : new Error(String(error)));
    }

    /**
     * Update connection status and notify listeners
     */
    private updateConnectionStatus(status: ConnectionStatus): void {
        if (this.connectionStatus === status) {
            return;
        }

        console.log(`📊 Connection status changed: ${this.connectionStatus} -> ${status}`);
        this.connectionStatus = status;
        this.notifyConnectionListeners(status);
    }

    /**
     * Notify tick listeners
     */
    private notifyTickListeners(tick: Tick): void {
        this.tickListeners.forEach(listener => {
            try {
                listener(tick);
            } catch (error) {
                console.error('Error in tick listener:', error);
            }
        });
    }

    /**
     * Notify connection status listeners
     */
    private notifyConnectionListeners(status: ConnectionStatus): void {
        this.connectionListeners.forEach(listener => {
            try {
                listener(status);
            } catch (error) {
                console.error('Error in connection listener:', error);
            }
        });
    }

    /**
     * Notify error listeners
     */
    private notifyError(error: Error): void {
        this.errorListeners.forEach(listener => {
            try {
                listener(error);
            } catch (err) {
                console.error('Error in error listener:', err);
            }
        });
    }
}

// Export singleton instance
let instance: MarketDataMonitor | null = null;

/**
 * Get singleton instance of MarketDataMonitor
 */
export function getMarketDataMonitor(): MarketDataMonitor {
    if (!instance) {
        instance = new MarketDataMonitor();
    }
    return instance;
}

/**
 * Reset singleton instance (for testing)
 */
export function resetMarketDataMonitor(): void {
    if (instance) {
        instance.disconnect();
        instance = null;
    }
}
