/**
 * Demo Mode UI Component
 * Shows clear visual indicator when demo mode is active
 */

import React, { useState, useEffect } from 'react';
import demoMode from './demo-mode-implementation';

const DemoModeIndicator = () => {
    const [status, setStatus] = useState(demoMode.getDemoModeStatus());

    useEffect(() => {
        // Update status periodically
        const interval = setInterval(() => {
            setStatus(demoMode.getDemoModeStatus());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (!status.enabled) {
        return null;
    }

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: '#ff9800',
                color: '#000',
                padding: '10px',
                textAlign: 'center',
                fontWeight: 'bold',
                zIndex: 9999,
                borderBottom: '3px solid #f57c00',
            }}
        >
            ⚠️ DEMO MODE ACTIVE - FOR TESTING ONLY - NOT REAL TRADING ⚠️
            <br />
            <small>
                Account: {status.accountId} | Balance: ${status.balance?.toFixed(2)}
            </small>
        </div>
    );
};

export default DemoModeIndicator;

/**
 * Demo Mode Control Panel (for developers/testers)
 */
export const DemoModeControlPanel = () => {
    const [status, setStatus] = useState(demoMode.getDemoModeStatus());
    const [customBalance, setCustomBalance] = useState('10000');

    const refreshStatus = () => {
        setStatus(demoMode.getDemoModeStatus());
    };

    const handleToggle = () => {
        if (status.enabled) {
            demoMode.disableDemoMode();
        } else {
            demoMode.enableDemoMode();
        }
        refreshStatus();
    };

    const handleSetBalance = () => {
        const balance = parseFloat(customBalance);
        if (!isNaN(balance)) {
            demoMode.setDemoBalance(status.accountId, balance);
            refreshStatus();
        }
    };

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                backgroundColor: '#fff',
                border: '2px solid #333',
                borderRadius: '8px',
                padding: '15px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                minWidth: '300px',
                zIndex: 9998,
            }}
        >
            <h3 style={{ margin: '0 0 10px 0' }}>🧪 Demo Mode Control</h3>

            <div style={{ marginBottom: '10px' }}>
                <strong>Status:</strong> {status.enabled ? '✅ Enabled' : '❌ Disabled'}
            </div>

            <div style={{ marginBottom: '10px' }}>
                <strong>Account Type:</strong> {status.isVirtualAccount ? 'Virtual ✓' : 'Real ⚠️'}
            </div>

            {status.enabled && (
                <>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Account:</strong> {status.accountId}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Balance:</strong> ${status.balance?.toFixed(2)}
                    </div>
                </>
            )}

            <button
                onClick={handleToggle}
                style={{
                    width: '100%',
                    padding: '8px',
                    marginBottom: '10px',
                    backgroundColor: status.enabled ? '#f44336' : '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                }}
            >
                {status.enabled ? 'Disable Demo Mode' : 'Enable Demo Mode'}
            </button>

            {status.enabled && (
                <div>
                    <input
                        type='number'
                        value={customBalance}
                        onChange={e => setCustomBalance(e.target.value)}
                        placeholder='Custom balance'
                        style={{
                            width: '100%',
                            padding: '8px',
                            marginBottom: '5px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    />
                    <button
                        onClick={handleSetBalance}
                        style={{
                            width: '100%',
                            padding: '8px',
                            backgroundColor: '#2196F3',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        Set Balance
                    </button>
                </div>
            )}

            <div
                style={{
                    marginTop: '10px',
                    fontSize: '11px',
                    color: '#666',
                    borderTop: '1px solid #eee',
                    paddingTop: '10px',
                }}
            >
                ⚠️ For testing purposes only. Only works with virtual accounts.
            </div>
        </div>
    );
};
