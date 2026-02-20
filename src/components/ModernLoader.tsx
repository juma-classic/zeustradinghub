import React, { useEffect, useState } from 'react';
import './ModernLoader.scss';

interface ModernLoaderProps {
    onFinish: () => void;
}

const ModernLoader: React.FC<ModernLoaderProps> = ({ onFinish }) => {
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('Initializing');
    const [dots, setDots] = useState('');
    const [logoScale, setLogoScale] = useState(1);
    const [logoRotation, setLogoRotation] = useState(0);
    const [logoGlow, setLogoGlow] = useState(0);
    const [tradingTip, setTradingTip] = useState('');
    const [loadingPhase, setLoadingPhase] = useState(0);
    const [logoOpacity, setLogoOpacity] = useState(0);
    const [logoMorphPhase, setLogoMorphPhase] = useState(0);

    // Trading tips and motivational quotes that rotate on each refresh
    const tradingTips = [
        '💡 Risk management is the key to long-term profitability',
        '📈 Successful traders focus on process, not just profits',
        '🎯 Plan your trades and trade your plan',
        '⚡ The market rewards patience and discipline',
        '🧠 Psychology accounts for 80% of trading success',
        '📊 Always use stop losses to protect your capital',
        '💰 Never risk more than 2% of your account per trade',
        '🔍 Technical analysis helps time your entries and exits',
        '⏰ The best traders know when NOT to trade',
        '🎲 Treat trading as a business, not gambling',
        '📚 Continuous learning separates winners from losers',
        '🎪 Master your emotions to master the markets',
        '🔄 Consistency beats perfection in trading',
        '💎 Cut your losses short and let profits run',
        '🎨 Diversification is the only free lunch in trading',
        '⚖️ Risk-reward ratio should be at least 1:2',
        '🚀 Compound growth is the 8th wonder of the world',
        '🎯 Focus on high-probability setups only',
        '📱 Technology gives you an edge in modern markets',
        '🏆 Profitable traders think in probabilities, not certainties',
        '💪 Discipline today creates wealth tomorrow',
        '🔥 The trend is your friend until it ends',
        '⭐ Quality over quantity in trade selection',
        '🎪 Markets are driven by fear and greed - use this',
        '🧭 Have a clear exit strategy before entering',
        '💡 Backtesting validates your trading strategy',
        '🎯 Position sizing determines your success',
        '⚡ Speed of execution can make or break trades',
        '🔍 Always do your homework before trading',
        '🏅 The best traders are students of the market',
    ];

    useEffect(() => {
        // Select a random trading tip on component mount
        const randomTip = tradingTips[Math.floor(Math.random() * tradingTips.length)];
        setTradingTip(randomTip);

        // Logo entrance animation
        setTimeout(() => setLogoOpacity(1), 300);

        // Multi-phase loading system
        const loadingPhases = [
            { duration: 1000, text: 'Initializing Trading Platform', progress: 15 },
            { duration: 800, text: 'Loading Market Data', progress: 30 },
            { duration: 1200, text: 'Connecting to Deriv API', progress: 50 },
            { duration: 900, text: 'Preparing Signal Analysis', progress: 70 },
            { duration: 700, text: 'Loading Bot Strategies', progress: 85 },
            { duration: 600, text: 'Finalizing Interface', progress: 95 },
            { duration: 500, text: 'Ready to Trade', progress: 100 },
        ];

        let currentPhase = 0;
        let totalTime = 0;

        const executePhase = () => {
            if (currentPhase < loadingPhases.length) {
                const phase = loadingPhases[currentPhase];
                setLoadingText(phase.text);
                setLoadingPhase(currentPhase);

                // Smooth progress animation
                const startProgress = progress;
                const targetProgress = phase.progress;
                const duration = phase.duration;
                const startTime = Date.now();

                const animateProgress = () => {
                    const elapsed = Date.now() - startTime;
                    const progressRatio = Math.min(elapsed / duration, 1);
                    const easeOutQuart = 1 - Math.pow(1 - progressRatio, 4);
                    const currentProgress = startProgress + (targetProgress - startProgress) * easeOutQuart;

                    setProgress(currentProgress);

                    if (progressRatio < 1) {
                        requestAnimationFrame(animateProgress);
                    } else {
                        currentPhase++;
                        if (currentPhase < loadingPhases.length) {
                            setTimeout(executePhase, 100);
                        } else {
                            setTimeout(onFinish, 800);
                        }
                    }
                };

                requestAnimationFrame(animateProgress);
                totalTime += duration;
            }
        };

        executePhase();

        // Dots animation
        let dotCount = 0;
        const dotInterval = setInterval(() => {
            dotCount = (dotCount + 1) % 4;
            setDots('.'.repeat(dotCount));
        }, 400);

        // Enhanced logo animations
        const logoAnimationInterval = setInterval(() => {
            setLogoScale(prev => (prev === 1 ? 1.08 : 1));
            setLogoRotation(prev => (prev + 2) % 360);
            setLogoGlow(prev => (prev === 0 ? 1 : 0));
            setLogoMorphPhase(prev => (prev + 1) % 4);
        }, 1500);

        return () => {
            clearInterval(dotInterval);
            clearInterval(logoAnimationInterval);
        };
    }, [onFinish]);

    return (
        <div className='modern-loader'>
            {/* Enhanced background with multiple layers */}
            <div className='modern-loader__background'>
                <div className='modern-loader__gradient-primary' />
                <div className='modern-loader__gradient-secondary' />
                <div className='modern-loader__mesh-overlay' />
            </div>

            {/* Enhanced animated particles with different types */}
            <div className='modern-loader__particles'>
                {/* Floating particles */}
                {Array.from({ length: 15 }).map((_, i) => (
                    <div
                        key={`particle-${i}`}
                        className='modern-loader__particle modern-loader__particle--float'
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${4 + Math.random() * 2}s`,
                        }}
                    />
                ))}

                {/* Trading symbols */}
                {['$', '€', '£', '¥', '₿', '📈', '📊', '💰', '⚡', '🚀'].map((symbol, i) => (
                    <div
                        key={`symbol-${i}`}
                        className='modern-loader__trading-symbol'
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.3}s`,
                            fontSize: `${1.2 + Math.random() * 0.8}rem`,
                        }}
                    >
                        {symbol}
                    </div>
                ))}

                {/* Network connection lines */}
                <div className='modern-loader__network-lines'>
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={`network-${i}`}
                            className='modern-loader__network-line'
                            style={{
                                animationDelay: `${i * 0.4}s`,
                            }}
                        />
                    ))}
                </div>

                {/* Chart lines */}
                <div className='modern-loader__chart-lines'>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div
                            key={`line-${i}`}
                            className='modern-loader__chart-line'
                            style={{
                                animationDelay: `${i * 0.3}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Market ticker tape at bottom */}
            <div className='modern-loader__ticker-tape'>
                <div className='modern-loader__ticker-content'>
                    <span>EUR/USD 1.0845 ↗</span>
                    <span>GBP/USD 1.2634 ↘</span>
                    <span>USD/JPY 149.23 ↗</span>
                    <span>BTC/USD 43,250 ↗</span>
                    <span>GOLD 2,045 ↘</span>
                    <span>OIL 78.45 ↗</span>
                </div>
            </div>

            {/* Main content */}
            <div className='modern-loader__content'>
                {/* Enhanced Logo/Brand with actual ZEUS TRADING HUB logo */}
                <div className='modern-loader__logo'>
                    <div
                        className='modern-loader__logo-container'
                        style={{
                            transform: `scale(${logoScale}) rotate(${logoRotation}deg)`,
                            opacity: logoOpacity,
                        }}
                    >
                        {/* Outer rotating ring with dynamic glow */}
                        <div
                            className='modern-loader__logo-outer-ring'
                            style={{
                                filter: `drop-shadow(0 0 ${10 + logoGlow * 20}px rgba(240, 147, 251, ${0.3 + logoGlow * 0.4}))`,
                            }}
                        >
                            <svg viewBox='0 0 140 140' className='modern-loader__logo-svg'>
                                <circle
                                    cx='70'
                                    cy='70'
                                    r='65'
                                    fill='none'
                                    stroke='url(#outerGradient)'
                                    strokeWidth='2'
                                    strokeDasharray='25 15'
                                    className='modern-loader__logo-outer-circle'
                                />
                                <circle
                                    cx='70'
                                    cy='70'
                                    r='55'
                                    fill='none'
                                    stroke='url(#innerGradient)'
                                    strokeWidth='1'
                                    strokeDasharray='15 10'
                                    className='modern-loader__logo-inner-circle'
                                />
                                <defs>
                                    <linearGradient id='outerGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                                        <stop offset='0%' stopColor='#667eea' />
                                        <stop offset='50%' stopColor='#764ba2' />
                                        <stop offset='100%' stopColor='#f093fb' />
                                    </linearGradient>
                                    <linearGradient id='innerGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                                        <stop offset='0%' stopColor='#f093fb' />
                                        <stop offset='100%' stopColor='#667eea' />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Actual ZEUS TRADING HUB Logo */}
                        <div className='modern-loader__logo-image-container'>
                            <img
                                src='/tradersdenlogo.png'
                                alt='ZEUS TRADING HUB Logo'
                                className='modern-loader__logo-image'
                                style={{
                                    filter: `brightness(${1 + logoGlow * 0.3}) contrast(${1 + logoGlow * 0.2}) drop-shadow(0 0 ${5 + logoGlow * 15}px rgba(255, 255, 255, ${0.3 + logoGlow * 0.4}))`,
                                    transform: `scale(${1 + logoMorphPhase * 0.02})`,
                                }}
                            />

                            {/* Logo overlay effects */}
                            <div className='modern-loader__logo-overlay-effects'>
                                <div className='modern-loader__logo-pulse-overlay' style={{ opacity: logoGlow }} />
                                <div className='modern-loader__logo-scan-line' />
                            </div>
                        </div>

                        {/* Enhanced pulse rings */}
                        <div className='modern-loader__logo-pulse'>
                            <div className='modern-loader__pulse-ring modern-loader__pulse-ring--primary'></div>
                            <div className='modern-loader__pulse-ring modern-loader__pulse-ring--secondary'></div>
                            <div className='modern-loader__pulse-ring modern-loader__pulse-ring--tertiary'></div>
                        </div>

                        {/* Loading progress ring around logo */}
                        <div className='modern-loader__logo-progress-ring'>
                            <svg viewBox='0 0 120 120' className='modern-loader__logo-progress-svg'>
                                <circle
                                    cx='60'
                                    cy='60'
                                    r='55'
                                    fill='none'
                                    stroke='rgba(255, 255, 255, 0.1)'
                                    strokeWidth='2'
                                />
                                <circle
                                    cx='60'
                                    cy='60'
                                    r='55'
                                    fill='none'
                                    stroke='url(#progressGradient)'
                                    strokeWidth='2'
                                    strokeDasharray='345'
                                    strokeDashoffset={345 - (345 * progress) / 100}
                                    className='modern-loader__logo-progress-circle'
                                />
                                <defs>
                                    <linearGradient id='progressGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                                        <stop offset='0%' stopColor='#4ade80' />
                                        <stop offset='50%' stopColor='#f093fb' />
                                        <stop offset='100%' stopColor='#667eea' />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <h1 className='modern-loader__brand'>
                        <span className='modern-loader__brand-main'>Traders</span>
                        <span className='modern-loader__brand-accent'>Den</span>
                    </h1>
                    <p className='modern-loader__tagline'>Advanced Trading Platform</p>
                </div>

                {/* Enhanced loading text with icon */}
                <div className='modern-loader__text-container'>
                    <div className='modern-loader__text-icon'>
                        <svg viewBox='0 0 24 24' fill='currentColor'>
                            <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                        </svg>
                    </div>
                    <div className='modern-loader__text'>
                        {loadingText}
                        {dots}
                    </div>
                </div>

                {/* Enhanced progress bar */}
                <div className='modern-loader__progress-container'>
                    <div className='modern-loader__progress-label'>
                        <span>Loading Progress</span>
                        <span className='modern-loader__progress-percentage'>
                            {Math.round(Math.min(progress, 100))}%
                        </span>
                    </div>
                    <div className='modern-loader__progress-bar'>
                        <div className='modern-loader__progress-fill' style={{ width: `${Math.min(progress, 100)}%` }}>
                            <div className='modern-loader__progress-shine' />
                        </div>
                        <div className='modern-loader__progress-glow' />
                    </div>
                </div>

                {/* Trading Tip */}
                <div className='modern-loader__trading-tip'>
                    <div className='modern-loader__tip-icon'>
                        <svg viewBox='0 0 24 24' fill='currentColor'>
                            <path d='M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z' />
                        </svg>
                    </div>
                    <p className='modern-loader__tip-text'>{tradingTip}</p>
                </div>

                {/* Status indicators */}
                <div className='modern-loader__status-indicators'>
                    <div className={`modern-loader__status-item ${progress > 20 ? 'active' : ''}`}>
                        <div className='modern-loader__status-dot'></div>
                        <span>Platform</span>
                    </div>
                    <div className={`modern-loader__status-item ${progress > 40 ? 'active' : ''}`}>
                        <div className='modern-loader__status-dot'></div>
                        <span>Markets</span>
                    </div>
                    <div className={`modern-loader__status-item ${progress > 60 ? 'active' : ''}`}>
                        <div className='modern-loader__status-dot'></div>
                        <span>Signals</span>
                    </div>
                    <div className={`modern-loader__status-item ${progress > 80 ? 'active' : ''}`}>
                        <div className='modern-loader__status-dot'></div>
                        <span>Ready</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernLoader;
