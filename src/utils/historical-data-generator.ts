/**
 * Historical Data Generator Utility
 * 
 * Generates sample historical tick data for backtesting purposes
 */

import { Tick, HistoricalTickData } from '../types/auto-strategy.types';

/**
 * Generate random historical tick data for testing
 */
export function generateHistoricalData(
    symbol: string,
    tickCount: number,
    startPrice: number = 100,
    volatility: number = 0.01,
    startTime?: number
): HistoricalTickData {
    const ticks: Tick[] = [];
    const baseTime = startTime || Date.now() - (tickCount * 2000); // 2 seconds per tick
    let currentPrice = startPrice;

    for (let i = 0; i < tickCount; i++) {
        // Random walk with volatility
        const change = (Math.random() - 0.5) * 2 * volatility * currentPrice;
        currentPrice = Math.max(currentPrice + change, 0.01); // Prevent negative prices

        const epoch = Math.floor((baseTime + i * 2000) / 1000); // Convert to seconds
        const quote = Number(currentPrice.toFixed(5));
        const spread = quote * 0.0001; // 0.01% spread

        ticks.push({
            epoch,
            quote,
            symbol,
            ask: Number((quote + spread / 2).toFixed(5)),
            bid: Number((quote - spread / 2).toFixed(5)),
            id: `${symbol}_${epoch}_${i}`,
            pip_size: 5,
        });
    }

    return {
        symbol,
        ticks,
        startTime: ticks[0].epoch * 1000,
        endTime: ticks[ticks.length - 1].epoch * 1000,
    };
}

/**
 * Generate historical data with a specific pattern (trending up)
 */
export function generateTrendingUpData(
    symbol: string,
    tickCount: number,
    startPrice: number = 100,
    trendStrength: number = 0.0005
): HistoricalTickData {
    const ticks: Tick[] = [];
    const baseTime = Date.now() - (tickCount * 2000);
    let currentPrice = startPrice;

    for (let i = 0; i < tickCount; i++) {
        // Upward trend with some noise
        const trend = currentPrice * trendStrength;
        const noise = (Math.random() - 0.5) * 0.005 * currentPrice;
        currentPrice = currentPrice + trend + noise;

        const epoch = Math.floor((baseTime + i * 2000) / 1000);
        const quote = Number(currentPrice.toFixed(5));
        const spread = quote * 0.0001;

        ticks.push({
            epoch,
            quote,
            symbol,
            ask: Number((quote + spread / 2).toFixed(5)),
            bid: Number((quote - spread / 2).toFixed(5)),
            id: `${symbol}_${epoch}_${i}`,
            pip_size: 5,
        });
    }

    return {
        symbol,
        ticks,
        startTime: ticks[0].epoch * 1000,
        endTime: ticks[ticks.length - 1].epoch * 1000,
    };
}

/**
 * Generate historical data with a specific pattern (trending down)
 */
export function generateTrendingDownData(
    symbol: string,
    tickCount: number,
    startPrice: number = 100,
    trendStrength: number = 0.0005
): HistoricalTickData {
    const ticks: Tick[] = [];
    const baseTime = Date.now() - (tickCount * 2000);
    let currentPrice = startPrice;

    for (let i = 0; i < tickCount; i++) {
        // Downward trend with some noise
        const trend = -currentPrice * trendStrength;
        const noise = (Math.random() - 0.5) * 0.005 * currentPrice;
        currentPrice = Math.max(currentPrice + trend + noise, 0.01);

        const epoch = Math.floor((baseTime + i * 2000) / 1000);
        const quote = Number(currentPrice.toFixed(5));
        const spread = quote * 0.0001;

        ticks.push({
            epoch,
            quote,
            symbol,
            ask: Number((quote + spread / 2).toFixed(5)),
            bid: Number((quote - spread / 2).toFixed(5)),
            id: `${symbol}_${epoch}_${i}`,
            pip_size: 5,
        });
    }

    return {
        symbol,
        ticks,
        startTime: ticks[0].epoch * 1000,
        endTime: ticks[ticks.length - 1].epoch * 1000,
    };
}

/**
 * Generate historical data with high volatility
 */
export function generateVolatileData(
    symbol: string,
    tickCount: number,
    startPrice: number = 100,
    volatility: number = 0.03
): HistoricalTickData {
    return generateHistoricalData(symbol, tickCount, startPrice, volatility);
}

/**
 * Generate historical data with specific digit patterns
 * Useful for testing digit frequency conditions
 */
export function generateDigitPatternData(
    symbol: string,
    tickCount: number,
    targetDigit: number,
    frequency: number = 0.5
): HistoricalTickData {
    const ticks: Tick[] = [];
    const baseTime = Date.now() - (tickCount * 2000);
    let currentPrice = 100;

    for (let i = 0; i < tickCount; i++) {
        // Adjust price to have target digit at desired frequency
        if (Math.random() < frequency) {
            // Force the last digit to be the target digit
            const basePrice = Math.floor(currentPrice * 10) / 10;
            currentPrice = basePrice + (targetDigit / 10);
        } else {
            // Random digit
            const basePrice = Math.floor(currentPrice * 10) / 10;
            let randomDigit = Math.floor(Math.random() * 10);
            while (randomDigit === targetDigit) {
                randomDigit = Math.floor(Math.random() * 10);
            }
            currentPrice = basePrice + (randomDigit / 10);
        }

        // Add some variation to the integer part
        currentPrice += (Math.random() - 0.5) * 0.5;
        currentPrice = Math.max(currentPrice, 0.1);

        const epoch = Math.floor((baseTime + i * 2000) / 1000);
        const quote = Number(currentPrice.toFixed(5));
        const spread = quote * 0.0001;

        ticks.push({
            epoch,
            quote,
            symbol,
            ask: Number((quote + spread / 2).toFixed(5)),
            bid: Number((quote - spread / 2).toFixed(5)),
            id: `${symbol}_${epoch}_${i}`,
            pip_size: 5,
        });
    }

    return {
        symbol,
        ticks,
        startTime: ticks[0].epoch * 1000,
        endTime: ticks[ticks.length - 1].epoch * 1000,
    };
}

/**
 * Export historical data as JSON string
 */
export function exportHistoricalDataAsJSON(data: HistoricalTickData): string {
    return JSON.stringify(data, null, 2);
}

/**
 * Download historical data as JSON file
 */
export function downloadHistoricalData(data: HistoricalTickData, filename?: string): void {
    const json = exportHistoricalDataAsJSON(data);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || `historical-data-${data.symbol}-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
}
