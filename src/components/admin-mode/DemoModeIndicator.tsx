/**
 * Demo Mode UI Indicator
 * Shows clear visual indicator when admin demo mode is active
 */

import React, { useState, useEffect } from 'react';
import { demoModeManager } from './DemoModeManager';

export const DemoModeIndicator: React.FC = () => {
    const [status, setStatus] = useState(demoModeManager.getDemoModeStatus());

    useEffect(() => {
        // Update status when demo mode changes
        const handleDemoModeChange = () => {
            setStatus(demoModeManager.getDemoModeStatus());
        };

        const handleBalanceChange = () => {
            setStatus(demoModeManager.getDemoModeStatus());
        };

        window.addEventListener('demo-mode-changed', handleDemoModeChange);
        window.addEventListener('demo-balance-changed', handleBalanceChange);

        // Update status periodically
        const interval = setInterval(() => {
            setStatus(demoModeManager.getDemoModeStatus());
        }, 2000);

        return () => {
            window.removeEventListener('demo-mode-changed', handleDemoModeChange);
            window.removeEventListener('demo-balance-changed', handleBalanceChange);
            clearInterval(interval);
        };
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
                background: 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)',
                color: '#000',
                padding: '12px 20px',
                textAlign: 'center',
                fontWeight: 'bold',
                zIndex: 9999,
                borderBottom: '3px solid #e65100',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                fontFamily: "'Inter', sans-serif",
            }}
        >
            <div style={{ fontSize: '16px', marginBottom: '4px' }}>
                ⚠️ ADMIN DEMO MODE ACTIVE - FOR TESTING ONLY - NOT REAL TRADING ⚠️
            </div>
            <div style={{ fontSize: '13px', opacity: 0.9 }}>
                Account: {status.accountId} | Demo Balance: ${status.balance?.toFixed(2) || '0.00'}
            </div>
        </div>
    );
};
