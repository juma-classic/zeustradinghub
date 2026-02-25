/**
 * INTEGRATION EXAMPLE
 * How to integrate demo mode into your trading application
 */

import demoMode from './demo-mode-implementation';

// ============================================
// EXAMPLE 1: Processing Trade Results
// ============================================

function processTrade(contract) {
    // Get the original contract result from your API
    const originalContract = {
        contract_id: '12345',
        contract_type: 'DIGITMATCH',
        buy_price: 10,
        sell_price: 15,
        profit: -10, // Original loss
        status: 'lost',
    };

    // Apply demo mode processing
    const processedContract = demoMode.processContractResult(originalContract);

    // processedContract will have adjusted values if demo mode is enabled
    console.log('Original profit:', originalContract.profit);
    console.log('Demo profit:', processedContract.profit);
    console.log('Is demo result:', processedContract.is_demo);

    return processedContract;
}

// ============================================
// EXAMPLE 2: Updating Account Balance
// ============================================

function updateAccountBalance(accountId, tradeResult) {
    const profitLoss = tradeResult.profit;

    // Check if demo mode should adjust balance
    if (demoMode.isDemoModeEnabled() && demoMode.isVirtualAccount()) {
        // Use demo balance
        const newBalance = demoMode.updateDemoBalance(accountId, profitLoss);
        return {
            balance: newBalance,
            isDemo: true,
        };
    } else {
        // Use real balance from API
        const realBalance = getRealBalanceFromAPI(accountId, profitLoss);
        return {
            balance: realBalance,
            isDemo: false,
        };
    }
}

// ============================================
// EXAMPLE 3: Trade Statistics with Demo Mode
// ============================================

class TradeStatistics {
    constructor() {
        this.trades = [];
    }

    addTrade(contract) {
        // Process through demo mode first
        const processedContract = demoMode.processContractResult(contract);

        this.trades.push({
            ...processedContract,
            timestamp: Date.now(),
        });

        return this.getStatistics();
    }

    getStatistics() {
        const stats = {
            totalTrades: this.trades.length,
            wins: 0,
            losses: 0,
            totalProfit: 0,
            isDemoMode: demoMode.isDemoModeEnabled(),
        };

        this.trades.forEach(trade => {
            if (trade.profit > 0) {
                stats.wins++;
            } else {
                stats.losses++;
            }
            stats.totalProfit += trade.profit;
        });

        stats.winRate = stats.totalTrades > 0 ? ((stats.wins / stats.totalTrades) * 100).toFixed(2) : 0;

        return stats;
    }
}

// ============================================
// EXAMPLE 4: React Hook for Demo Mode
// ============================================

import { useState, useEffect } from 'react';

export function useDemoMode() {
    const [status, setStatus] = useState(demoMode.getDemoModeStatus());

    useEffect(() => {
        const interval = setInterval(() => {
            setStatus(demoMode.getDemoModeStatus());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return {
        isEnabled: status.enabled,
        isVirtual: status.isVirtualAccount,
        accountId: status.accountId,
        balance: status.balance,
        enable: () => demoMode.enableDemoMode(),
        disable: () => demoMode.disableDemoMode(),
        setBalance: amount => demoMode.setDemoBalance(status.accountId, amount),
        processContract: contract => demoMode.processContractResult(contract),
    };
}

// ============================================
// EXAMPLE 5: API Interceptor Pattern
// ============================================

class TradingAPI {
    async placeTrade(tradeParams) {
        // Make actual API call
        const result = await fetch('/api/trade', {
            method: 'POST',
            body: JSON.stringify(tradeParams),
        }).then(r => r.json());

        // Apply demo mode processing
        return demoMode.processContractResult(result);
    }

    async getBalance(accountId) {
        // Check demo mode first
        if (demoMode.isDemoModeEnabled() && demoMode.isVirtualAccount()) {
            return {
                balance: demoMode.getDemoBalance(accountId),
                currency: 'USD',
                isDemo: true,
            };
        }

        // Otherwise get real balance
        return await fetch(`/api/balance/${accountId}`).then(r => r.json());
    }
}

// ============================================
// EXAMPLE 6: Console Commands for Testing
// ============================================

// Add these to browser console for easy testing
if (typeof window !== 'undefined') {
    window.testDemoMode = {
        // Enable demo mode
        enable: () => {
            demoMode.enableDemoMode();
            console.log('✅ Demo mode enabled');
        },

        // Disable demo mode
        disable: () => {
            demoMode.disableDemoMode();
            console.log('❌ Demo mode disabled');
        },

        // Set custom balance
        setBalance: amount => {
            const accountId = demoMode.getCurrentAccountId();
            demoMode.setDemoBalance(accountId, amount);
            console.log(`💰 Balance set to $${amount}`);
        },

        // Test a trade
        testTrade: (contractType = 'DIGITMATCH', buyPrice = 10) => {
            const testContract = {
                contract_type: contractType,
                buy_price: buyPrice,
                profit: -buyPrice, // Simulate loss
                status: 'lost',
            };

            const result = demoMode.processContractResult(testContract);
            console.log('Original:', testContract);
            console.log('Demo Result:', result);
            return result;
        },

        // Get current status
        status: () => {
            const status = demoMode.getDemoModeStatus();
            console.table(status);
            return status;
        },
    };

    console.log('🧪 Demo mode testing commands available:');
    console.log('  testDemoMode.enable()');
    console.log('  testDemoMode.disable()');
    console.log('  testDemoMode.setBalance(10000)');
    console.log('  testDemoMode.testTrade()');
    console.log('  testDemoMode.status()');
}

// ============================================
// Helper function (implement based on your API)
// ============================================

function getRealBalanceFromAPI(accountId, profitLoss) {
    // Replace with your actual API call
    return 0;
}

export { processTrade, updateAccountBalance, TradeStatistics, TradingAPI };
