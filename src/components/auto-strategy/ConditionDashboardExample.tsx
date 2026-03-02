import React from 'react';
import ConditionDashboard from './ConditionDashboard';
import './ConditionDashboardExample.scss';

/**
 * Example component demonstrating the ConditionDashboard
 * 
 * This component shows how to use the ConditionDashboard in your application.
 * The dashboard provides real-time monitoring of:
 * - Active strategies and their conditions
 * - Running bots and their performance
 * - Connection status
 * - Emergency stop functionality
 */
const ConditionDashboardExample: React.FC = () => {
    return (
        <div className="condition-dashboard-example">
            <div className="condition-dashboard-example__header">
                <h1 className="condition-dashboard-example__title">
                    ⚡ Auto Strategy Controller Dashboard
                </h1>
                <p className="condition-dashboard-example__description">
                    Monitor and control your automated trading strategies in real-time.
                    This dashboard provides a comprehensive view of all active strategies,
                    running bots, performance metrics, and audit logs.
                </p>
            </div>

            <div className="condition-dashboard-example__content">
                <ConditionDashboard />
            </div>

            <div className="condition-dashboard-example__info">
                <div className="info-card">
                    <h3 className="info-card__title">🎯 Features</h3>
                    <ul className="info-card__list">
                        <li>Real-time connection status monitoring</li>
                        <li>Active strategy tracking with condition states</li>
                        <li>Running bot monitoring with P&L display</li>
                        <li>Performance metrics and analytics</li>
                        <li>Comprehensive audit log</li>
                        <li>Emergency stop with confirmation</li>
                        <li>Mobile-responsive design</li>
                        <li>Zeus theme with electric blue and gold styling</li>
                    </ul>
                </div>

                <div className="info-card">
                    <h3 className="info-card__title">🚀 Usage</h3>
                    <pre className="info-card__code">
{`import { ConditionDashboard } from '@/components/auto-strategy';

function MyApp() {
  return <ConditionDashboard />;
}`}
                    </pre>
                </div>

                <div className="info-card">
                    <h3 className="info-card__title">📱 Responsive Design</h3>
                    <p className="info-card__text">
                        The dashboard automatically adapts to different screen sizes:
                    </p>
                    <ul className="info-card__list">
                        <li><strong>Desktop (1024px+):</strong> 2-column grid layout</li>
                        <li><strong>Tablet (768px-1024px):</strong> Single column layout</li>
                        <li><strong>Mobile (below 768px):</strong> Optimized touch interface</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ConditionDashboardExample;
