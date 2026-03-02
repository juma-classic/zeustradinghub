import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuditLogViewer from '../AuditLogViewer';
import { getAuditLog, resetAuditLog } from '../../../services/auto-strategy/audit-log.service';

describe('AuditLogViewer', () => {
    beforeEach(() => {
        // Reset audit log before each test
        resetAuditLog();
        localStorage.clear();
    });

    afterEach(() => {
        resetAuditLog();
        localStorage.clear();
    });

    it('renders without crashing', () => {
        render(<AuditLogViewer />);
        expect(screen.getByText('Audit Log')).toBeInTheDocument();
    });

    it('displays empty state when no entries exist', () => {
        render(<AuditLogViewer />);
        expect(screen.getByText('No audit log entries yet')).toBeInTheDocument();
    });

    it('displays entries when audit log has data', async () => {
        const auditLog = getAuditLog();
        
        // Add test entries
        auditLog.logStrategyTrigger({
            strategyId: 'test-strategy-1',
            strategyName: 'Test Strategy',
            conditionsMet: ['condition1'],
            action: 'start_bot',
            botId: 'test-bot-1',
        });

        render(<AuditLogViewer />);

        await waitFor(() => {
            expect(screen.getByText(/Test Strategy/)).toBeInTheDocument();
        });
    });

    it('filters entries by event type', async () => {
        const auditLog = getAuditLog();
        
        // Add different types of entries
        auditLog.logStrategyTrigger({
            strategyId: 'test-strategy-1',
            strategyName: 'Test Strategy',
            conditionsMet: ['condition1'],
            action: 'start_bot',
        });

        auditLog.logBotStarted({
            botId: 'test-bot-1',
            botName: 'Test Bot',
            strategyId: 'test-strategy-1',
            strategyName: 'Test Strategy',
            stake: 10,
        });

        auditLog.logError({
            errorMessage: 'Test error',
            context: 'test context',
        });

        render(<AuditLogViewer />);

        // Initially should show all entries
        await waitFor(() => {
            expect(screen.getAllByText(/Test Strategy/).length).toBeGreaterThan(0);
            expect(screen.getByText(/Test Bot/)).toBeInTheDocument();
            expect(screen.getByText(/Test error/)).toBeInTheDocument();
        });

        // Filter by error type
        const eventTypeSelect = screen.getByRole('combobox', { name: /event type/i });
        fireEvent.change(eventTypeSelect, { target: { value: 'error' } });

        await waitFor(() => {
            expect(screen.queryByText(/Test Strategy/)).not.toBeInTheDocument();
            expect(screen.queryByText(/Test Bot/)).not.toBeInTheDocument();
            expect(screen.getByText(/Test error/)).toBeInTheDocument();
        });
    });

    it('searches entries by text', async () => {
        const auditLog = getAuditLog();
        
        auditLog.logStrategyTrigger({
            strategyId: 'test-strategy-1',
            strategyName: 'Volatility Strategy',
            conditionsMet: ['condition1'],
            action: 'start_bot',
        });

        auditLog.logStrategyTrigger({
            strategyId: 'test-strategy-2',
            strategyName: 'Digit Frequency Strategy',
            conditionsMet: ['condition1'],
            action: 'start_bot',
        });

        render(<AuditLogViewer />);

        // Search for "Volatility"
        const searchInput = screen.getByPlaceholderText(/Search messages/);
        fireEvent.change(searchInput, { target: { value: 'Volatility' } });

        await waitFor(() => {
            expect(screen.getByText(/Volatility Strategy/)).toBeInTheDocument();
            expect(screen.queryByText(/Digit Frequency Strategy/)).not.toBeInTheDocument();
        });
    });

    it('expands and collapses entry details', async () => {
        const auditLog = getAuditLog();
        
        auditLog.logBotStarted({
            botId: 'test-bot-1',
            botName: 'Test Bot',
            strategyId: 'test-strategy-1',
            strategyName: 'Test Strategy',
            stake: 10,
        });

        render(<AuditLogViewer />);

        await waitFor(() => {
            expect(screen.getByText(/Test Bot/)).toBeInTheDocument();
        });

        // Initially details should not be visible
        expect(screen.queryByText('Entry ID:')).not.toBeInTheDocument();

        // Click expand button
        const expandButton = screen.getByTitle(/Expand details/);
        fireEvent.click(expandButton);

        // Details should now be visible
        await waitFor(() => {
            expect(screen.getByText('Entry ID:')).toBeInTheDocument();
            expect(screen.getByText('Strategy ID:')).toBeInTheDocument();
            expect(screen.getByText('Stake:')).toBeInTheDocument();
        });

        // Click collapse button
        const collapseButton = screen.getByTitle(/Collapse/);
        fireEvent.click(collapseButton);

        // Details should be hidden again
        await waitFor(() => {
            expect(screen.queryByText('Entry ID:')).not.toBeInTheDocument();
        });
    });

    it('displays error details including stack trace', async () => {
        const auditLog = getAuditLog();
        
        auditLog.logError({
            errorMessage: 'Test error message',
            stackTrace: 'Error: Test error\n    at test.js:10:5',
            context: 'test context',
        });

        render(<AuditLogViewer />);

        await waitFor(() => {
            expect(screen.getByText(/Test error message/)).toBeInTheDocument();
        });

        // Expand to see details
        const expandButton = screen.getByTitle(/Expand details/);
        fireEvent.click(expandButton);

        await waitFor(() => {
            expect(screen.getByText('Error Message:')).toBeInTheDocument();
            expect(screen.getByText('Stack Trace:')).toBeInTheDocument();
            expect(screen.getByText(/Error: Test error/)).toBeInTheDocument();
        });
    });

    it('clears all filters when clear button is clicked', async () => {
        const auditLog = getAuditLog();
        
        auditLog.logStrategyTrigger({
            strategyId: 'test-strategy-1',
            strategyName: 'Test Strategy',
            conditionsMet: ['condition1'],
            action: 'start_bot',
        });

        render(<AuditLogViewer />);

        // Apply filters
        const searchInput = screen.getByPlaceholderText(/Search messages/);
        fireEvent.change(searchInput, { target: { value: 'test' } });

        const eventTypeSelect = screen.getByRole('combobox', { name: /event type/i });
        fireEvent.change(eventTypeSelect, { target: { value: 'strategy_trigger' } });

        // Clear filters button should appear
        await waitFor(() => {
            expect(screen.getByText('Clear Filters')).toBeInTheDocument();
        });

        // Click clear filters
        const clearButton = screen.getByText('Clear Filters');
        fireEvent.click(clearButton);

        // Filters should be cleared
        await waitFor(() => {
            expect(searchInput).toHaveValue('');
            expect(eventTypeSelect).toHaveValue('');
        });
    });

    it('respects maxEntries prop', async () => {
        const auditLog = getAuditLog();
        
        // Add 10 entries
        for (let i = 0; i < 10; i++) {
            auditLog.logStrategyTrigger({
                strategyId: `test-strategy-${i}`,
                strategyName: `Test Strategy ${i}`,
                conditionsMet: ['condition1'],
                action: 'start_bot',
            });
        }

        render(<AuditLogViewer maxEntries={5} />);

        await waitFor(() => {
            // Should only show 5 entries
            expect(screen.getByText('5 entries')).toBeInTheDocument();
        });
    });

    it('filters by strategy ID when provided', async () => {
        const auditLog = getAuditLog();
        
        auditLog.logStrategyTrigger({
            strategyId: 'strategy-1',
            strategyName: 'Strategy 1',
            conditionsMet: ['condition1'],
            action: 'start_bot',
        });

        auditLog.logStrategyTrigger({
            strategyId: 'strategy-2',
            strategyName: 'Strategy 2',
            conditionsMet: ['condition1'],
            action: 'start_bot',
        });

        render(<AuditLogViewer strategyId="strategy-1" />);

        await waitFor(() => {
            expect(screen.getByText(/Strategy 1/)).toBeInTheDocument();
            expect(screen.queryByText(/Strategy 2/)).not.toBeInTheDocument();
        });
    });

    it('displays correct event type badges', async () => {
        const auditLog = getAuditLog();
        
        auditLog.logStrategyTrigger({
            strategyId: 'test-strategy-1',
            strategyName: 'Test Strategy',
            conditionsMet: ['condition1'],
            action: 'start_bot',
        });

        auditLog.logBotStarted({
            botId: 'test-bot-1',
            botName: 'Test Bot',
            strategyId: 'test-strategy-1',
            strategyName: 'Test Strategy',
            stake: 10,
        });

        auditLog.logError({
            errorMessage: 'Test error',
        });

        render(<AuditLogViewer />);

        await waitFor(() => {
            const badges = screen.getAllByText('Strategy Trigger');
            // Should find at least one in the table (not in the select dropdown)
            expect(badges.length).toBeGreaterThan(0);
            expect(screen.getAllByText('Bot Started').length).toBeGreaterThan(0);
            expect(screen.getAllByText('Error').length).toBeGreaterThan(0);
        });
    });
});
