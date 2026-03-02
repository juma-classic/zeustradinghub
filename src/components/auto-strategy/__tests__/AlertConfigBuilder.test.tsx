/**
 * Unit tests for AlertConfigBuilder Component
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AlertConfigBuilder from '../AlertConfigBuilder';
import { AlertType, AlertFilter } from '../../../services/auto-strategy/alert-manager.service';

describe('AlertConfigBuilder', () => {
    const mockStrategyId = 'test-strategy-1';
    const mockOnChange = jest.fn();

    beforeEach(() => {
        mockOnChange.mockClear();
        localStorage.clear();
    });

    it('should render alert type checkboxes', () => {
        render(<AlertConfigBuilder strategyId={mockStrategyId} onChange={mockOnChange} />);

        expect(screen.getAllByText(/Browser Notification/i).length).toBeGreaterThan(0);
        expect(screen.getByText(/Sound Alert/i)).toBeInTheDocument();
        expect(screen.getByText(/Visual Indicator/i)).toBeInTheDocument();
    });

    it('should render alert filter options', () => {
        render(<AlertConfigBuilder strategyId={mockStrategyId} onChange={mockOnChange} />);

        expect(screen.getByText(/All Actions/i)).toBeInTheDocument();
        expect(screen.getByText(/Bot Starts Only/i)).toBeInTheDocument();
        expect(screen.getByText(/Bot Stops Only/i)).toBeInTheDocument();
        expect(screen.getByText(/No Alerts/i)).toBeInTheDocument();
    });

    it('should have all alert types enabled by default', () => {
        render(<AlertConfigBuilder strategyId={mockStrategyId} onChange={mockOnChange} />);

        const checkboxes = screen.getAllByRole('checkbox');
        expect(checkboxes).toHaveLength(3);
        checkboxes.forEach(checkbox => {
            expect(checkbox).toBeChecked();
        });
    });

    it('should toggle alert types when clicked', () => {
        render(<AlertConfigBuilder strategyId={mockStrategyId} onChange={mockOnChange} />);

        const browserNotificationCheckbox = screen.getByRole('checkbox', { name: /Browser Notification/i });
        
        fireEvent.click(browserNotificationCheckbox);
        expect(browserNotificationCheckbox).not.toBeChecked();

        fireEvent.click(browserNotificationCheckbox);
        expect(browserNotificationCheckbox).toBeChecked();
    });

    it('should call onChange when alert types change', () => {
        render(<AlertConfigBuilder strategyId={mockStrategyId} onChange={mockOnChange} />);

        const soundAlertCheckbox = screen.getByRole('checkbox', { name: /Sound Alert/i });
        fireEvent.click(soundAlertCheckbox);

        expect(mockOnChange).toHaveBeenCalled();
        const lastCall = mockOnChange.mock.calls[mockOnChange.mock.calls.length - 1][0];
        expect(lastCall.enabledAlerts).not.toContain(AlertType.SoundAlert);
    });

    it('should call onChange when filter changes', () => {
        render(<AlertConfigBuilder strategyId={mockStrategyId} onChange={mockOnChange} />);

        const botStartsOnlyRadio = screen.getByRole('radio', { name: /Bot Starts Only/i });
        fireEvent.click(botStartsOnlyRadio);

        expect(mockOnChange).toHaveBeenCalled();
        const lastCall = mockOnChange.mock.calls[mockOnChange.mock.calls.length - 1][0];
        expect(lastCall.filter).toBe(AlertFilter.BotStartsOnly);
    });

    it('should show custom sound input when sound alert is enabled', () => {
        render(<AlertConfigBuilder strategyId={mockStrategyId} onChange={mockOnChange} />);

        expect(screen.getByPlaceholderText(/https:\/\/example.com\/alert.mp3/i)).toBeInTheDocument();
    });

    it('should render test alerts button', () => {
        render(<AlertConfigBuilder strategyId={mockStrategyId} onChange={mockOnChange} />);

        expect(screen.getByText(/Test Alerts/i)).toBeInTheDocument();
    });

    it('should disable test button when no alerts are enabled', () => {
        render(<AlertConfigBuilder strategyId={mockStrategyId} onChange={mockOnChange} />);

        // Uncheck all alert types
        const checkboxes = screen.getAllByRole('checkbox');
        checkboxes.forEach(checkbox => {
            fireEvent.click(checkbox);
        });

        const testButton = screen.getByRole('button', { name: /Test Alerts/i });
        expect(testButton).toBeDisabled();
    });
});
