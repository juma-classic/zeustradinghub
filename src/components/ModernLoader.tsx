import React, { useEffect, useState, useRef } from 'react';
import './ModernLoader.scss';

interface ModernLoaderProps {
    onFinish: () => void;
}

const ModernLoader: React.FC<ModernLoaderProps> = ({ onFinish }) => {
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('Initializing');
    const [dots, setDots] = useState('');
    const [tradingTip, setTradingTip] = useState('');
    const [lightningActive, setLightningActive] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Trading tips and motivational quotes
    const tradingTips = [
        '⚡ Zeus commands the markets with lightning speed',
        '� Thunder brings profits to the prepared trader',
        '🔱 Master the power of algorithmic trading',
        '⚡ Strike fast, strike smart with Zeus',
        '💎 Divine precision in every trade execution',
        '🌩️ Harness the storm of market volatility',
        '⚡ Lightning-fast execution, godlike returns',
        '� Money flows like thunder from Olympus',
        '🔱 Zeus Trading Hub - Where mortals become legends',
        '⚡ Electrify your portfolio with divine strategies',
    ];

    // Matrix-style falling characters (money symbols and code)
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const characters = '$€£¥₿01{}<>[]();=+-*/%&|^~!@#'.split('');
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops: number[] = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100;
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const char = characters[Math.floor(Math.random() * characters.length)];
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                // Color gradient: gold to electric blue
                const gradient = ctx.createLinearGradient(x, y - 20, x, y + 20);
                gradient.addColorStop(0, '#FFD700');
                gradient.addColorStop(0.5, '#4169E1');
                gradient.addColorStop(1, '#00BFFF');
                ctx.fillStyle = gradient;

                ctx.fillText(char, x, y);

                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Select random tip
        const randomTip = tradingTips[Math.floor(Math.random() * tradingTips.length)];
        setTradingTip(randomTip);

        // Multi-phase loading system
        const loadingPhases = [
            { duration: 1000, text: 'Summoning Zeus Power', progress: 15 },
            { duration: 800, text: 'Charging Lightning Bolts', progress: 30 },
            { duration: 1200, text: 'Connecting to Olympus', progress: 50 },
            { duration: 900, text: 'Activating Thunder Signals', progress: 70 },
            { duration: 700, text: 'Loading Divine Strategies', progress: 85 },
            { duration: 600, text: 'Preparing Storm', progress: 95 },
            { duration: 500, text: 'Zeus Awakens', progress: 100 },
        ];

        let currentPhase = 0;

        const executePhase = () => {
            if (currentPhase < loadingPhases.length) {
                const phase = loadingPhases[currentPhase];
                setLoadingText(phase.text);

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
            }
        };

        executePhase();

        // Dots animation
        let dotCount = 0;
        const dotInterval = setInterval(() => {
            dotCount = (dotCount + 1) % 4;
            setDots('.'.repeat(dotCount));
        }, 400);

        // Lightning strike effect
        const lightningInterval = setInterval(() => {
            setLightningActive(true);
            setTimeout(() => setLightningActive(false), 200);
        }, 2000);

        return () => {
            clearInterval(dotInterval);
            clearInterval(lightningInterval);
        };
    }, [onFinish]);

    return (
        <div className='modern-loader zeus-loader'>
            {/* Matrix-style falling money and code background */}
            <canvas ref={canvasRef} className='zeus-loader__matrix-canvas' />

            {/* Lightning flash overlay */}
            <div className={`zeus-loader__lightning-flash ${lightningActive ? 'active' : ''}`} />

            {/* Dark storm clouds background */}
            <div className='zeus-loader__storm-bg'>
                <div className='zeus-loader__cloud zeus-loader__cloud--1' />
                <div className='zeus-loader__cloud zeus-loader__cloud--2' />
                <div className='zeus-loader__cloud zeus-loader__cloud--3' />
            </div>

            {/* Main content */}
            <div className='zeus-loader__content'>
                {/* Zeus Lightning Bolt Icon */}
                <div className='zeus-loader__lightning-container'>
                    {/* Animated lightning bolt with intricate parts */}
                    <svg
                        className='zeus-loader__lightning-bolt'
                        viewBox='0 0 200 300'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <defs>
                            <linearGradient id='lightningGradient' x1='0%' y1='0%' x2='0%' y2='100%'>
                                <stop offset='0%' stopColor='#FFD700' />
                                <stop offset='50%' stopColor='#FFA500' />
                                <stop offset='100%' stopColor='#FF6B00' />
                            </linearGradient>
                            <filter id='glow'>
                                <feGaussianBlur stdDeviation='4' result='coloredBlur' />
                                <feMerge>
                                    <feMergeNode in='coloredBlur' />
                                    <feMergeNode in='SourceGraphic' />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Main lightning bolt */}
                        <path
                            className='zeus-loader__bolt-main'
                            d='M100 10 L80 100 L120 100 L90 180 L130 120 L100 120 L110 60 Z'
                            fill='url(#lightningGradient)'
                            filter='url(#glow)'
                        />

                        {/* Electric arcs - animated parts */}
                        <path
                            className='zeus-loader__bolt-arc zeus-loader__bolt-arc--1'
                            d='M85 50 Q70 60 75 80'
                            stroke='#4169E1'
                            strokeWidth='2'
                            fill='none'
                            opacity='0.8'
                        />
                        <path
                            className='zeus-loader__bolt-arc zeus-loader__bolt-arc--2'
                            d='M115 70 Q130 80 125 100'
                            stroke='#00BFFF'
                            strokeWidth='2'
                            fill='none'
                            opacity='0.8'
                        />
                        <path
                            className='zeus-loader__bolt-arc zeus-loader__bolt-arc--3'
                            d='M95 130 Q80 140 85 160'
                            stroke='#FFD700'
                            strokeWidth='2'
                            fill='none'
                            opacity='0.8'
                        />

                        {/* Energy particles */}
                        {[...Array(8)].map((_, i) => (
                            <circle
                                key={i}
                                className='zeus-loader__energy-particle'
                                cx={100 + Math.cos((i * Math.PI) / 4) * 40}
                                cy={100 + Math.sin((i * Math.PI) / 4) * 40}
                                r='3'
                                fill='#FFD700'
                                style={{ animationDelay: `${i * 0.1}s` }}
                            />
                        ))}

                        {/* Rotating energy ring */}
                        <circle
                            className='zeus-loader__energy-ring'
                            cx='100'
                            cy='100'
                            r='60'
                            fill='none'
                            stroke='#4169E1'
                            strokeWidth='2'
                            strokeDasharray='10 5'
                            opacity='0.5'
                        />
                    </svg>

                    {/* Pulsing glow effect */}
                    <div className='zeus-loader__lightning-glow' />
                    <div className='zeus-loader__lightning-glow zeus-loader__lightning-glow--secondary' />
                </div>

                {/* Brand name */}
                <h1 className='zeus-loader__brand'>
                    <span className='zeus-loader__brand-zeus'>ZEUS</span>
                    <span className='zeus-loader__brand-trading'>TRADING</span>
                    <span className='zeus-loader__brand-hub'>HUB</span>
                </h1>

                <p className='zeus-loader__tagline'>⚡ God of Thunder Trading ⚡</p>

                {/* Loading text */}
                <div className='zeus-loader__text-container'>
                    <div className='zeus-loader__text'>
                        {loadingText}
                        {dots}
                    </div>
                </div>

                {/* Progress bar with electric effect */}
                <div className='zeus-loader__progress-container'>
                    <div className='zeus-loader__progress-label'>
                        <span>Power Level</span>
                        <span className='zeus-loader__progress-percentage'>{Math.round(Math.min(progress, 100))}%</span>
                    </div>
                    <div className='zeus-loader__progress-bar'>
                        <div className='zeus-loader__progress-fill' style={{ width: `${Math.min(progress, 100)}%` }}>
                            <div className='zeus-loader__progress-lightning' />
                        </div>
                    </div>
                </div>

                {/* Trading Tip */}
                <div className='zeus-loader__trading-tip'>
                    <div className='zeus-loader__tip-icon'>⚡</div>
                    <p className='zeus-loader__tip-text'>{tradingTip}</p>
                </div>
            </div>
        </div>
    );
};

export default ModernLoader;
