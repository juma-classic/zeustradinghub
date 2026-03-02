import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import RunningBotCard from '../RunningBotCard';
import type { RunningBotInfo } from '../../../hooks/useAutoStrategyController';

describe('RunningBotCard', () => {
    const mockBot: RunningBotInfo = {
        botId: 'bot-123',
        botName: 'Test Bot',
        strategyId: 'strategy-456',
        strategyName: 'Test Strategy',
        startedAt: Date.now() - 60000, // Started 1 minute ago
        currentProfit: 50.25,
        currentLoss: 20.10,
    };

    const mockOnStop = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders bot information correctly', () => {
        render(<RunningBotCard bot={mockBot} onStop={mockOnStop} />);

        expect(screen.getByText('Test Bot')).toBeInTheDocument();
        expect(screen.getByText(/ID: bot-123/)).toBeInTheDocument();
        expect(screen.getByText('Test Strategy')).toBeInTheDocument();
        expect(screen.getByText('Running')).toBeInTheDocument();
    });

    it('displays auto-started badge', () => {
        render(<RunningBotCard bot={mockBot} onStop={mockOnStop} />);

        expect(screen.getByText('Auto-Started')).toBeInTheDocument();
    });

    it('displays profit and loss correctly', () => {
        render(<RunningBotCard bot={mockBot} onStop={mockOnStop} />);

        expect(screen.getByText('+50.25')).toBeInTheDocument();
        expect(screen.getByText('-20.10')).toBeInTheDocument();
    });

    it('calculates and displays net P&L correctly', () => {
        render(<RunningBotCard bot={mockBot} onStop={mockOnStop} />);

        const netPnL = mockBot.currentProfit - mockBot.currentLoss;
        expect(screen.getByText(`+${netPnL.toFixed(2)}`)).toBeInTheDocument();
    });

    it('updates duration every second', async () => {
        jest.useFakeTimers();
        render(<RunningBotCard bot={mockBot} onStop={mockOnStop} />);

        // Initial duration should be around 1 minute
        expect(screen.getByText(/1m/)).toBeInTheDocument();

        // Fast-forward 5 seconds
        jest.advanceTimersByTime(5000);

        await waitFor(() => {
            expect(screen.getByText(/1m 5s/)).toBeInTheDocument();
        });

        jest.useRealTimers();
    });

    it('shows confirmation dialog when stop button is clicked', () => {
        render(<RunningBotCard bot={mockBot} onStop={mockOnStop} />);

        const stopButton = screen.getByText('Stop Bot');
        fireEvent.click(stopButton);

        expect(screen.getByText('Stop Bot?')).toBeInTheDocument();
        expect(screen.getByText(/Are you sure you want to manually stop/)).toBeInTheDocument();
    });

    it('calls onStop when confirmed', () => {
        render(<RunningBotCard bot={mockBot} onStop={mockOnStop} />);

        // Click stop button
        const stopButton = screen.getByText('Stop Bot');
        fireEvent.click(stopButton);

        // Click confirm button in dialog
        const confirmButton = screen.getAllByText('Stop Bot')[1]; // Second one is in dialog
        fireEvent.click(confirmButton);

        expect(mockOnStop).toHaveBeenCalledTimes(1);
    });

    it('closes confirmation dialog when cancelled', () => {
        render(<RunningBotCard bot={mockBot} onStop={mockOnStop} />);

        // Click stop button
        const stopButton = screen.getByText('Stop Bot');
        fireEvent.click(stopButton);

        // Click cancel button
        const cancelButton = screen.getByText('Cancel');
        fireEvent.click(cancelButton);

        // Dialog should be closed
        expect(screen.queryByText('Stop Bot?')).not.toBeInTheDocument();
        expect(mockOnStop).not.toHaveBeenCalled();
    });

    it('applies correct styling for profit', () => {
        render(<RunningBotCard bot={mockBot} onStop={mockOnStop} />);

        const netPnLElement = screen.getByText(`+${(mockBot.currentProfit - mockBot.currentLoss).toFixed(2)}`);
        expect(netPnLElement).toHaveClass('running-bot-card__value--net-profit');
    });

    it('applies correct styling for loss', () => {
        const losingBot: RunningBotInfo = {
            ...mockBot,
            currentProfit: 10,
            currentLoss: 50,
        };

        render(<RunningBotCard bot={losingBot} onStop={mockOnStop} />);

        const netPnLElement = screen.getByText(`-${(losingBot.currentLoss - losingBot.currentProfit).toFixed(2)}`);
        expect(netPnLElement).toHaveClass('running-bot-card__value--net-loss');
    });

    it('applies correct styling for neutral P&L', () => {
        const neutralBot: RunningBotInfo = {
            ...mockBot,
            currentProfit: 25,
            currentLoss: 25,
        };

        render(<RunningBotCard bot={neutralBot} onStop={mockOnStop} />);

        const netPnLElement = screen.getByText('0.00');
        expect(netPnLElement).toHaveClass('running-bot-card__value--net-neutral');
    });

    it('formats start time correctly', () => {
        const specificTime = new Date('2024-01-15T14:30:45').getTime();
        const botWithSpecificTime: RunningBotInfo = {
            ...mockBot,
            startedAt: specificTime,
        };

        render(<RunningBotCard bot={botWithSpecificTime} onStop={mockOnStop} />);

        // Check that time is displayed (format may vary by locale)
        expect(screen.getByText(/\d{1,2}:\d{2}:\d{2}/)).toBeInTheDocument();
    });
});
