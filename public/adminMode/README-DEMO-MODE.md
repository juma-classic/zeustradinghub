# Demo Mode Implementation Guide

## Overview

This is a clean, educational implementation of a demo/testing mode for trading applications. It allows developers and testers to simulate trading scenarios without affecting real accounts or data.

## ⚠️ Important Safeguards

This implementation includes critical safety features:

1. **Virtual Account Only** - Only works with demo/virtual accounts (IDs starting with VR or DEMO)
2. **Clear UI Indicators** - Prominent warning banner when demo mode is active
3. **Separate Storage** - Uses separate localStorage keys to avoid conflicts
4. **Marked Results** - All demo results are flagged with `is_demo: true`
5. **No Production Impact** - Cannot affect real trading or real balances

## Files Included

-   `demo-mode-implementation.js` - Core demo mode logic
-   `demo-mode-ui-component.jsx` - React UI components
-   `demo-mode-integration-example.js` - Integration examples

## Quick Start

### 1. Enable Demo Mode (Browser Console)

```javascript
// Enable demo mode
window.demoMode.enable();

// Check status
window.demoMode.status();

// Set custom balance
window.demoMode.setBalance(10000);

// Disable demo mode
window.demoMode.disable();
```

### 2. Integrate into Your App

```javascript
import demoMode from './demo-mode-implementation';
import DemoModeIndicator from './demo-mode-ui-component';

// In your main App component
function App() {
    return (
        <>
            <DemoModeIndicator />
            {/* Your app content */}
        </>
    );
}

// Process trade results
function handleTradeResult(contract) {
    const processedContract = demoMode.processContractResult(contract);
    // Use processedContract for display
}
```

### 3. Add UI Controls (Optional)

```javascript
import { DemoModeControlPanel } from './demo-mode-ui-component';

// Add to your developer/testing interface
function TestingPanel() {
    return <DemoModeControlPanel />;
}
```

## Features

### Contract Processing

Demo mode can adjust contract results for testing:

```javascript
const contract = {
    contract_type: 'DIGITMATCH',
    buy_price: 10,
    profit: -10, // Original loss
    status: 'lost',
};

const demoContract = demoMode.processContractResult(contract);
// demoContract.profit = 25 (adjusted for demo)
// demoContract.status = 'won'
// demoContract.is_demo = true
```

### Balance Management

Manage demo balances separately:

```javascript
// Set demo balance
demoMode.setDemoBalance('VR12345', 10000);

// Get demo balance
const balance = demoMode.getDemoBalance('VR12345');

// Update after trade
const newBalance = demoMode.updateDemoBalance('VR12345', profitLoss);
```

### Status Checking

```javascript
const status = demoMode.getDemoModeStatus();
// {
//   enabled: true,
//   isVirtualAccount: true,
//   accountId: 'VR12345',
//   balance: 10000
// }
```

## Configuration

### Customize Contract Types

Edit `shouldApplyDemoLogic()` in `demo-mode-implementation.js`:

```javascript
shouldApplyDemoLogic(contractType) {
    const demoContractTypes = [
        'DIGITMATCH',
        'DIGITODD',
        'DIGITEVEN',
        'DIGITOVER',
        'DIGITUNDER'
    ];
    return demoContractTypes.includes(contractType);
}
```

### Customize Profit Calculation

Edit `calculateDemoProfit()` in `demo-mode-implementation.js`:

```javascript
calculateDemoProfit(contract) {
    const buyPrice = parseFloat(contract.buy_price || 0);
    // Adjust multiplier as needed
    return buyPrice * 2.5; // 2.5x return
}
```

## Testing Commands

Open browser console and use these commands:

```javascript
// Enable demo mode
testDemoMode.enable();

// Set balance to $10,000
testDemoMode.setBalance(10000);

// Test a DIGITMATCH trade with $10 stake
testDemoMode.testTrade('DIGITMATCH', 10);

// Check current status
testDemoMode.status();

// Disable demo mode
testDemoMode.disable();
```

## React Hook Usage

```javascript
import { useDemoMode } from './demo-mode-integration-example';

function TradingComponent() {
    const demo = useDemoMode();

    return (
        <div>
            {demo.isEnabled && <div className='demo-warning'>Demo Mode Active - Balance: ${demo.balance}</div>}

            <button onClick={demo.enable}>Enable Demo</button>
            <button onClick={demo.disable}>Disable Demo</button>
        </div>
    );
}
```

## API Integration

```javascript
import { TradingAPI } from './demo-mode-integration-example';

const api = new TradingAPI();

// Place trade (automatically processes through demo mode)
const result = await api.placeTrade({
    contract_type: 'DIGITMATCH',
    amount: 10,
});

// Get balance (returns demo balance if demo mode active)
const balance = await api.getBalance('VR12345');
```

## Best Practices

### ✅ DO:

-   Use only with virtual/demo accounts
-   Display clear warnings when demo mode is active
-   Mark all demo results with `is_demo: true`
-   Keep demo mode separate from production code
-   Use for UI testing and development
-   Document that it's for testing only

### ❌ DON'T:

-   Use with real money accounts
-   Hide that demo mode is active
-   Mix demo and real trading data
-   Deploy to production without safeguards
-   Use to deceive users
-   Bypass account type checks

## Security Considerations

1. **Account Validation** - Always verify account is virtual before enabling
2. **Clear Labeling** - UI must clearly show demo mode is active
3. **Separate Data** - Demo data stored separately from real data
4. **No Real Money** - Cannot be used with real money accounts
5. **Audit Trail** - All demo results are flagged for tracking

## Troubleshooting

### Demo mode won't enable

-   Check that you're using a virtual account (ID starts with VR or DEMO)
-   Check browser console for error messages

### Balance not updating

-   Verify demo mode is enabled: `demoMode.isDemoModeEnabled()`
-   Check account ID is correct
-   Clear localStorage and try again

### Results not being modified

-   Check contract type is in the `demoContractTypes` array
-   Verify `isVirtualAccount()` returns true
-   Check browser console for errors

## License & Disclaimer

This code is provided for educational purposes only. Use responsibly and ensure compliance with all applicable laws and regulations. Never use to deceive users or manipulate real trading outcomes.

## Support

For questions or issues, refer to the integration examples or check the inline code documentation.
