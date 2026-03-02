/**
 * Signal Provider Service
 * 
 * Provides integration with external signal providers (Zeus AI, CFX)
 * Handles signal fetching, caching, and timeout management
 * 
 * Requirements: 7.1, 7.2, 7.3, 7.4, 7.5
 */

import { SignalProvider, SignalData, SignalDirection } from '../../types/auto-strategy.types';

/**
 * Signal provider interface
 * All signal providers must implement this interface
 */
export interface ISignalProvider {
    /** Provider identifier */
    readonly provider: SignalProvider;
    
    /** Fetch latest signal for a symbol */
    fetchSignal(symbol: string): Promise<SignalData>;
    
    /** Check if provider is available */
    isAvailable(): Promise<boolean>;
}

/**
 * Signal cache entry
 */
interface SignalCacheEntry {
    data: SignalData;
    fetchedAt: number;
}

/**
 * Signal Provider Manager
 * Coordinates multiple signal providers with caching and timeout handling
 */
export class SignalProviderManager {
    private providers: Map<SignalProvider, ISignalProvider> = new Map();
    private cache: Map<string, SignalCacheEntry> = new Map();
    private readonly CACHE_TTL = 60000; // 60 seconds - signals older than this are considered stale
    private readonly FETCH_TIMEOUT = 5000; // 5 seconds timeout for fetching signals

    constructor() {
        // Initialize providers
        this.registerProvider(new ZeusAISignalProvider());
        this.registerProvider(new CFXSignalProvider());
    }

    /**
     * Register a signal provider
     */
    registerProvider(provider: ISignalProvider): void {
        this.providers.set(provider.provider, provider);
    }

    /**
     * Get signals for all registered providers for a symbol
     * Returns a map of provider -> signal data
     */
    async getSignals(symbol: string): Promise<Map<SignalProvider, SignalData>> {
        const signals = new Map<SignalProvider, SignalData>();
        const now = Date.now();

        // Fetch signals from all providers
        const fetchPromises = Array.from(this.providers.entries()).map(async ([providerType, provider]) => {
            try {
                // Check cache first
                const cacheKey = `${providerType}_${symbol}`;
                const cached = this.cache.get(cacheKey);

                if (cached && (now - cached.fetchedAt) < this.CACHE_TTL) {
                    // Use cached data but update staleness
                    const isStale = (now - cached.data.timestamp) > this.CACHE_TTL;
                    signals.set(providerType, {
                        ...cached.data,
                        isStale,
                    });
                    return;
                }

                // Fetch fresh signal with timeout
                const signal = await this.fetchWithTimeout(provider, symbol);
                
                // Update cache
                this.cache.set(cacheKey, {
                    data: signal,
                    fetchedAt: now,
                });

                signals.set(providerType, signal);
            } catch (error) {
                console.warn(`Failed to fetch signal from ${providerType}:`, error);
                // Don't add to signals map if fetch fails
            }
        });

        await Promise.allSettled(fetchPromises);

        return signals;
    }

    /**
     * Get signal from a specific provider
     */
    async getSignal(provider: SignalProvider, symbol: string): Promise<SignalData | null> {
        const providerInstance = this.providers.get(provider);
        if (!providerInstance) {
            console.warn(`Signal provider ${provider} not registered`);
            return null;
        }

        try {
            const now = Date.now();
            const cacheKey = `${provider}_${symbol}`;
            const cached = this.cache.get(cacheKey);

            if (cached && (now - cached.fetchedAt) < this.CACHE_TTL) {
                const isStale = (now - cached.data.timestamp) > this.CACHE_TTL;
                return {
                    ...cached.data,
                    isStale,
                };
            }

            const signal = await this.fetchWithTimeout(providerInstance, symbol);
            
            this.cache.set(cacheKey, {
                data: signal,
                fetchedAt: now,
            });

            return signal;
        } catch (error) {
            console.warn(`Failed to fetch signal from ${provider}:`, error);
            return null;
        }
    }

    /**
     * Clear cache for a specific provider and symbol
     */
    clearCache(provider?: SignalProvider, symbol?: string): void {
        if (provider && symbol) {
            this.cache.delete(`${provider}_${symbol}`);
        } else if (provider) {
            // Clear all cache entries for this provider
            const keysToDelete: string[] = [];
            for (const key of this.cache.keys()) {
                if (key.startsWith(`${provider}_`)) {
                    keysToDelete.push(key);
                }
            }
            keysToDelete.forEach(key => this.cache.delete(key));
        } else {
            // Clear all cache
            this.cache.clear();
        }
    }

    /**
     * Fetch signal with timeout
     */
    private async fetchWithTimeout(provider: ISignalProvider, symbol: string): Promise<SignalData> {
        return Promise.race([
            provider.fetchSignal(symbol),
            new Promise<SignalData>((_, reject) => 
                setTimeout(() => reject(new Error('Signal fetch timeout')), this.FETCH_TIMEOUT)
            ),
        ]);
    }
}

/**
 * Zeus AI Signal Provider
 * Integrates with Zeus AI prediction system via custom events
 */
export class ZeusAISignalProvider implements ISignalProvider {
    readonly provider = SignalProvider.ZeusAI;
    private latestSignal: Map<string, {
        direction: SignalDirection;
        strength: number;
        confidence: number;
        timestamp: number;
    }> = new Map();
    private eventListenerAttached = false;

    constructor() {
        this.attachEventListener();
    }

    /**
     * Attach event listener for Zeus AI trade signals
     */
    private attachEventListener(): void {
        if (typeof window === 'undefined' || this.eventListenerAttached) {
            return;
        }

        window.addEventListener('zeus.trade.signal', ((event: CustomEvent) => {
            const signal = event.detail;
            if (signal && signal.market && signal.prediction !== undefined) {
                // Convert trade signal to signal data format
                const direction = this.mapTradeTypeToDirection(signal.type, signal.prediction);
                const confidence = this.mapConfidenceToNumber(signal.confidence);
                
                this.latestSignal.set(signal.market, {
                    direction,
                    strength: confidence, // Use confidence as strength
                    confidence,
                    timestamp: signal.timestamp || Date.now(),
                });

                console.log(`Zeus AI signal received for ${signal.market}:`, {
                    type: signal.type,
                    prediction: signal.prediction,
                    confidence: signal.confidence,
                    direction,
                });
            }
        }) as EventListener);

        this.eventListenerAttached = true;
    }

    async fetchSignal(symbol: string): Promise<SignalData> {
        const zeusData = this.latestSignal.get(symbol);
        
        if (!zeusData) {
            throw new Error(`Zeus AI data not available for ${symbol}`);
        }

        // Check if signal is stale (older than 60 seconds)
        const now = Date.now();
        const isStale = (now - zeusData.timestamp) > 60000;

        return {
            provider: SignalProvider.ZeusAI,
            direction: zeusData.direction,
            strength: zeusData.strength,
            confidence: zeusData.confidence,
            timestamp: zeusData.timestamp,
            isStale,
        };
    }

    async isAvailable(): Promise<boolean> {
        // Zeus AI is available if we're in a browser environment
        // The actual signal availability is checked in fetchSignal
        return typeof window !== 'undefined';
    }

    /**
     * Map trade type and prediction to signal direction
     */
    private mapTradeTypeToDirection(tradeType: string, prediction: number): SignalDirection {
        // DIGITOVER (5-9) suggests upward movement
        // DIGITUNDER (0-4) suggests downward movement
        // DIGITMATCH/DIGITDIFF are neutral
        if (tradeType === 'DIGITOVER' || prediction >= 5) {
            return SignalDirection.Up;
        } else if (tradeType === 'DIGITUNDER' || prediction <= 4) {
            return SignalDirection.Down;
        }
        return SignalDirection.Neutral;
    }

    /**
     * Map confidence string to numeric value (0-100)
     */
    private mapConfidenceToNumber(confidence: string): number {
        switch (confidence.toLowerCase()) {
            case 'high':
                return 80;
            case 'medium':
                return 50;
            case 'low':
                return 30;
            default:
                return 50;
        }
    }
}

/**
 * CFX Signal Provider
 * Integrates with CFX signal system via custom events or API
 */
export class CFXSignalProvider implements ISignalProvider {
    readonly provider = SignalProvider.CFX;
    private latestSignal: Map<string, {
        direction: SignalDirection;
        strength: number;
        confidence: number;
        timestamp: number;
    }> = new Map();
    private eventListenerAttached = false;

    constructor() {
        this.attachEventListener();
    }

    /**
     * Attach event listener for CFX trade signals
     */
    private attachEventListener(): void {
        if (typeof window === 'undefined' || this.eventListenerAttached) {
            return;
        }

        // Listen for CFX signals via custom events
        window.addEventListener('cfx.trade.signal', ((event: CustomEvent) => {
            const signal = event.detail;
            if (signal && signal.market && signal.direction) {
                const direction = this.mapDirection(signal.direction);
                const strength = this.normalizeValue(signal.strength || 50, 0, 100);
                const confidence = this.normalizeValue(signal.confidence || 50, 0, 100);
                
                this.latestSignal.set(signal.market, {
                    direction,
                    strength,
                    confidence,
                    timestamp: signal.timestamp || Date.now(),
                });

                console.log(`CFX signal received for ${signal.market}:`, {
                    direction: signal.direction,
                    strength: signal.strength,
                    confidence: signal.confidence,
                });
            }
        }) as EventListener);

        this.eventListenerAttached = true;
    }

    async fetchSignal(symbol: string): Promise<SignalData> {
        // Try to get signal from event listener cache first
        let cfxData = this.latestSignal.get(symbol);
        
        // If not in cache, try to get from window.cfx API
        if (!cfxData) {
            const apiData = this.getCFXDataFromAPI(symbol);
            if (apiData) {
                cfxData = apiData;
                this.latestSignal.set(symbol, apiData);
            }
        }
        
        if (!cfxData) {
            throw new Error(`CFX data not available for ${symbol}`);
        }

        // Check if signal is stale (older than 60 seconds)
        const now = Date.now();
        const isStale = (now - cfxData.timestamp) > 60000;

        return {
            provider: SignalProvider.CFX,
            direction: cfxData.direction,
            strength: cfxData.strength,
            confidence: cfxData.confidence,
            timestamp: cfxData.timestamp,
            isStale,
        };
    }

    async isAvailable(): Promise<boolean> {
        // CFX is available if we're in a browser environment
        // The actual signal availability is checked in fetchSignal
        return typeof window !== 'undefined';
    }

    /**
     * Get CFX data from API (window.cfx)
     */
    private getCFXDataFromAPI(symbol: string): {
        direction: SignalDirection;
        strength: number;
        confidence: number;
        timestamp: number;
    } | null {
        if (typeof window === 'undefined') {
            return null;
        }

        const cfx = (window as any).cfx;
        if (!cfx || !cfx.getSignal) {
            return null;
        }

        try {
            const signal = cfx.getSignal(symbol);
            if (!signal) {
                return null;
            }

            return {
                direction: this.mapDirection(signal.direction),
                strength: this.normalizeValue(signal.strength, 0, 100),
                confidence: this.normalizeValue(signal.confidence, 0, 100),
                timestamp: signal.timestamp || Date.now(),
            };
        } catch (error) {
            console.error('Error getting CFX data from API:', error);
            return null;
        }
    }

    /**
     * Map direction string to SignalDirection enum
     */
    private mapDirection(direction: string): SignalDirection {
        const normalized = direction.toLowerCase();
        if (normalized === 'up' || normalized === 'call' || normalized === 'buy') {
            return SignalDirection.Up;
        } else if (normalized === 'down' || normalized === 'put' || normalized === 'sell') {
            return SignalDirection.Down;
        }
        return SignalDirection.Neutral;
    }

    /**
     * Normalize value to 0-100 range
     */
    private normalizeValue(value: number, min: number, max: number): number {
        return Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
    }
}

// Singleton instance
let signalProviderManagerInstance: SignalProviderManager | null = null;

/**
 * Get the singleton SignalProviderManager instance
 */
export function getSignalProviderManager(): SignalProviderManager {
    if (!signalProviderManagerInstance) {
        signalProviderManagerInstance = new SignalProviderManager();
    }
    return signalProviderManagerInstance;
}

/**
 * Reset the SignalProviderManager instance (for testing)
 */
export function resetSignalProviderManager(): void {
    signalProviderManagerInstance = null;
}
