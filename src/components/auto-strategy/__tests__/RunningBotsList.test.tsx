import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RunningBotsList from '../RunningBotsList';
import type { RunningBotInfo } from '../../../hooks/useAutoStrategyController';

describe('RunningBotsList', () => {
    const mockBots: RunningBotInfo[] = [
        {
            botId: 'bot-1',
            botName: 'Bot One',
            strategyId: 'strategy-1',
            strategyName: 'Strategy One',
            startedAt: Date.now() - 120000,
            currentProfit: 100,
            currentLoss: 50,
        },
        {
            botId: 'bot-2',
            botName: 'Bot Two',
            strategyId: 'strategy-2',
            strategyName: 'Strategy Two',
            startedAt: Date.now() - 60000,
            currentProfit: 75,
            currentLoss: 25,
        },
        {
            botId: 'bot-3',
            botName: 'Bot Three',
            strategyId: 'strategy-3',
            strategyName: 'Strategy Three',
            startedAt: Date.now() - 30000,
            currentProfit: 50,
            currentLoss: 75,
        },
    ];

    const mockOnStopBot = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders empty state when no bots are running', () => {
        render(<RunningBotsList bots={[]} onStopBot={mockOnStopBot} />);

        expect(screen.getByText('No bots running')).toBeInTheDocument();
        expect(screen.getByText('Bots will appear here when strategies trigger')).toBeInTheDocument();
    });

    it('renders all bot cards when bots are provided', () => {
        render(<RunningBotsList bots={mockBots} onStopBot={mockOnStopBot} />);

        expect(screen.getByText('Bot One')).toBeInTheDocument();
        expect(screen.getByText('Bot Two')).toBeInTheDocument();
        expect(screen.getByText('Bot Three')).toBeInTheDocument();
    });

    it('renders correct number of bot cards', () => {
        render(<RunningBotsList bots={mockBots} onStopBot={mockOnStopBot} />);

        const botCards = screen.getAllByText(/Bot (One|Two|Three)/);
        expect(botCards).toHaveLength(3);
    });

    it('passes correct bot data to each card', () => {
        render(<RunningBotsList bots={mockBots} onStopBot={mockOnStopBot} />);

        expect(screen.getByText('Strategy One')).toBeInTheDocument();
        expect(screen.getByText('Strategy Two')).toBeInTheDocument();
        expect(screen.getByText('Strategy Three')).toBeInTheDocument();
    });

    it('calls onStopBot with correct botId when stop is clicked', () => {
        render(<RunningBotsList bots={mockBots} onStopBot={mockOnStopBot} />);

        // Click stop button on first bot
        const stopButtons = screen.getAllByText('Stop Bot');
        fireEvent.click(stopButtons[0]);

        // Confirm in dialog
        const confirmButtons = screen.getAllByText('Stop Bot');
        const confirmButton = confirmButtons.find(btn => 
            btn.className.includes('confirm-button--confirm')
        );
        if (confirmButton) {
            fireEvent.click(confirmButton);
        }

        expect(mockOnStopBot).toHaveBeenCalledWith('bot-1');
    });

    it('applies custom className when provided', () => {
        const { container } = render(
            <RunningBotsList 
                bots={mockBots} 
                onStopBot={mockOnStopBot} 
                className="custom-class"
            />
        );

        const listElement = container.querySelector('.running-bots-list');
        expect(listElement).toHaveClass('custom-class');
    });

    it('renders grid layout for multiple bots', () => {
        const { container } = render(
            <RunningBotsList bots={mockBots} onStopBot={mockOnStopBot} />
        );

        const gridElement = container.querySelector('.running-bots-list__grid');
        expect(gridElement).toBeInTheDocument();
    });

    it('handles single bot correctly', () => {
        const singleBot = [mockBots[0]];
        render(<RunningBotsList bots={singleBot} onStopBot={mockOnStopBot} />);

        expect(screen.getByText('Bot One')).toBeInTheDocument();
        expect(screen.queryByText('Bot Two')).not.toBeInTheDocument();
        expect(screen.queryByText('Bot Three')).not.toBeInTheDocument();
    });

    it('updates when bots list changes', () => {
        const { rerender } = render(
            <RunningBotsList bots={[mockBots[0]]} onStopBot={mockOnStopBot} />
        );

        expect(screen.getByText('Bot One')).toBeInTheDocument();
        expect(screen.queryByText('Bot Two')).not.toBeInTheDocument();

        // Update with more bots
        rerender(<RunningBotsList bots={mockBots} onStopBot={mockOnStopBot} />);

        expect(screen.getByText('Bot One')).toBeInTheDocument();
        expect(screen.getByText('Bot Two')).toBeInTheDocument();
        expect(screen.getByText('Bot Three')).toBeInTheDocument();
    });

    it('transitions from empty state to bot list', () => {
        const { rerender } = render(
            <RunningBotsList bots={[]} onStopBot={mockOnStopBot} />
        );

        expect(screen.getByText('No bots running')).toBeInTheDocument();

        // Add bots
        rerender(<RunningBotsList bots={mockBots} onStopBot={mockOnStopBot} />);

        expect(screen.queryByText('No bots running')).not.toBeInTheDocument();
        expect(screen.getByText('Bot One')).toBeInTheDocument();
    });

    it('transitions from bot list to empty state', () => {
        const { rerender } = render(
            <RunningBotsList bots={mockBots} onStopBot={mockOnStopBot} />
        );

        expect(screen.getByText('Bot One')).toBeInTheDocument();

        // Remove all bots
        rerender(<RunningBotsList bots={[]} onStopBot={mockOnStopBot} />);

        expect(screen.queryByText('Bot One')).not.toBeInTheDocument();
        expect(screen.getByText('No bots running')).toBeInTheDocument();
    });
});
