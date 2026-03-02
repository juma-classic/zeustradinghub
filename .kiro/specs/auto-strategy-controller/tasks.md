# Implementation Plan: Auto Strategy Controller

## Overview

This implementation plan breaks down the Auto Strategy Controller feature into discrete, incremental coding tasks. The system will be built in layers, starting with core data structures and services, then adding the evaluation engine, bot control, risk management, and finally the user interface components. Each task builds on previous work to ensure functional integration at every step.

The implementation follows the TypeScript-based design and integrates with existing systems including the Bot Builder, RobustWebSocketManager, and Deriv API infrastructure.

## Tasks

- [x] 1. Set up core types and data structures
  - Create TypeScript interfaces for Strategy, Condition, Action, and related types
  - Define enums for condition types, operators, and action types
  - Create type definitions for evaluation results and bot control responses
  - Set up storage interfaces for strategy persistence
  - _Requirements: 2.1, 2.2, 2.6_

- [x] 2. Implement Market Data Monitor service
  - [x] 2.1 Create MarketDataMonitor service class with WebSocket integration
    - Integrate with existing RobustWebSocketManager
    - Implement tick subscription and unsubscription methods
    - Create circular buffer for storing last 1000 ticks per symbol
    - Add connection status tracking and event emitters
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 27.1, 27.2_
  
  - [x] 2.2 Write unit tests for MarketDataMonitor
    - Test tick buffering and retrieval
    - Test subscription management
    - Test connection failure handling
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [x] 3. Implement Strategy Evaluator service
  - [x] 3.1 Create StrategyEvaluator service class with condition evaluation logic
    - Implement digit frequency condition evaluator
    - Implement volatility condition evaluator (standard deviation calculation)
    - Implement time-based condition evaluator with timezone support
    - Implement performance condition evaluator
    - Implement signal-based condition evaluator
    - Add AND/OR logic handling for multiple conditions
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 4.1, 4.2, 4.3, 4.4, 5.1, 5.2, 5.3, 5.4, 5.5, 6.1, 6.2, 6.3, 6.4, 7.1, 7.2, 7.3, 7.4, 7.5_
  
  - [x] 3.2 Implement strategy evaluation orchestration
    - Create main evaluateStrategy method with cooldown checking
    - Add "not evaluable" condition handling
    - Implement evaluation result logging
    - Add performance optimization for multiple strategy evaluation
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6_
  
  - [x] 3.3 Write unit tests for condition evaluators
    - Test digit frequency calculation with various tick patterns
    - Test volatility calculation accuracy
    - Test time range evaluation with different timezones
    - Test performance metric calculations
    - Test signal condition evaluation
    - _Requirements: 3.1, 3.2, 3.3, 4.1, 4.2, 5.1, 6.1, 7.1_

- [x] 4. Checkpoint - Verify data monitoring and evaluation
  - Ensure MarketDataMonitor connects to WebSocket successfully
  - Verify tick buffering works correctly
  - Test condition evaluation with sample data
  - Ensure all tests pass, ask the user if questions arise

- [x] 5. Implement Bot Controller service
  - [x] 5.1 Create BotController service class with bot lifecycle management
    - Integrate with existing Bot Builder system and run_panel store
    - Implement startBot method with validation and balance checking
    - Implement stopBot method with graceful shutdown
    - Implement switchBot method with cooldown enforcement
    - Add concurrent bot limit enforcement
    - Create priority queue for bot start actions
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 10.1, 10.2, 10.3, 10.4, 10.5, 11.1, 11.2, 11.3, 11.4, 11.5, 16.1, 16.2, 16.3, 16.4, 16.5_
  
  - [x] 5.2 Implement stake management functionality
    - Add dynamic stake adjustment methods
    - Implement stake validation against account balance
    - Add minimum and maximum stake limit enforcement
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_
  
  - [x] 5.3 Write unit tests for BotController
    - Test bot start/stop/switch operations
    - Test concurrent bot limit enforcement
    - Test queue management and priority handling
    - Test stake adjustment logic
    - _Requirements: 9.1, 10.1, 11.1, 12.1, 16.1_

- [-] 6. Implement Risk Manager service
  - [x] 6.1 Create RiskManager service class with limit tracking
    - Implement global profit/loss tracking across all bots
    - Implement per-strategy profit/loss tracking
    - Add daily counter reset functionality
    - Create limit checking methods for global and strategy limits
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5, 14.1, 14.2, 14.3, 14.4, 14.5, 15.1, 15.2, 15.3, 15.4, 15.5_
  
  - [-] 6.2 Implement risk enforcement actions
    - Add automatic bot stopping when limits are reached
    - Implement strategy deactivation on limit breach
    - Add user notification for risk events
    - Create audit logging for all risk interventions
    - _Requirements: 13.2, 13.3, 13.5, 14.2, 14.3, 14.5, 15.2, 15.4_
  
  - [x] 6.3 Write unit tests for RiskManager
    - Test profit/loss tracking accuracy
    - Test limit enforcement triggers
    - Test daily counter reset
    - Test strategy deactivation logic
    - _Requirements: 13.1, 13.2, 14.1, 14.2, 15.1, 15.2_

- [x] 7. Implement Audit Log service
  - [x] 7.1 Create AuditLog service class with event logging
    - Implement event recording with timestamps
    - Add structured logging for strategy triggers, bot actions, and risk events
    - Create localStorage persistence with 90-day retention
    - Implement search and filter functionality
    - Add error logging with stack traces
    - _Requirements: 23.1, 23.2, 23.3, 23.4, 23.5, 23.6_
  
  - [x] 7.2 Write unit tests for AuditLog
    - Test event recording and retrieval
    - Test search and filter functionality
    - Test retention policy enforcement
    - _Requirements: 23.1, 23.2, 23.3, 23.4_

- [-] 8. Implement Strategy Storage service
  - [x] 8.1 Create StrategyStorage service class with persistence
    - Implement localStorage-based strategy persistence
    - Add strategy CRUD operations (create, read, update, delete)
    - Implement strategy validation before save
    - Add import/export functionality with JSON serialization
    - Create strategy template library with 10+ pre-configured templates
    - _Requirements: 2.3, 2.4, 18.1, 18.2, 18.3, 18.4, 18.5, 36.1, 36.2, 36.3, 36.4, 36.5_
  
  - [x] 8.2 Write unit tests for StrategyStorage
    - Test CRUD operations
    - Test validation logic
    - Test import/export functionality
    - Test template loading
    - _Requirements: 2.3, 2.4, 36.1, 36.2, 36.3_

- [x] 9. Checkpoint - Verify core services integration
  - Test end-to-end flow: tick → evaluation → bot control → risk check → audit log
  - Verify all services communicate correctly
  - Test error handling across service boundaries
  - Ensure all tests pass, ask the user if questions arise

- [x] 10. Implement Auto Strategy Controller orchestrator
  - [x] 10.1 Create AutoStrategyController main service class
    - Implement initialization and lifecycle management (start, stop, emergencyStop)
    - Wire together all subsystems (MarketDataMonitor, StrategyEvaluator, BotController, RiskManager, AuditLog)
    - Add strategy management methods (create, update, delete, activate, deactivate, pause, resume)
    - Implement tick event handling and strategy evaluation trigger
    - Add connection failure handling and strategy pause on disconnect
    - _Requirements: 1.5, 2.1, 2.2, 2.4, 2.5, 2.6, 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 25.1, 25.2, 25.3, 25.4, 25.5, 35.1, 35.2, 35.3, 35.4, 35.5_
  
  - [x] 10.2 Implement strategy validation and warnings
    - Add validation for strategy configuration before activation
    - Implement risky strategy detection (no loss limit, high stake, no time restrictions)
    - Add warning display and acknowledgment requirement
    - _Requirements: 24.1, 24.2, 24.3, 24.4, 24.5, 32.1, 32.2, 32.3, 32.4, 32.5_
  
  - [x] 10.3 Write integration tests for AutoStrategyController
    - Test full strategy lifecycle (create → activate → trigger → deactivate → delete)
    - Test emergency stop functionality
    - Test connection failure handling
    - Test multi-strategy coordination
    - _Requirements: 2.1, 2.4, 17.1, 25.1, 35.1_

- [x] 11. Create React hooks for controller integration
  - [x] 11.1 Create useAutoStrategyController hook
    - Implement hook for accessing controller instance
    - Add real-time state subscription (strategies, running bots, condition states)
    - Create methods for strategy management actions
    - Add connection status tracking
    - _Requirements: 19.1, 19.2, 20.1, 20.2, 20.3, 20.4_
  
  - [x] 11.2 Create useStrategyPerformance hook
    - Implement performance data fetching and tracking
    - Add time period filtering (today, week, month, all time)
    - Create performance metrics calculation
    - _Requirements: 21.1, 21.2, 21.3, 21.4, 21.5_

- [x] 12. Implement Strategy Builder UI component
  - [x] 12.1 Create main StrategyBuilder component
    - Build strategy form layout with Zeus theme styling
    - Add strategy name and description inputs
    - Implement logic operator selection (AND/OR)
    - Add bot selection dropdown (integrate with Bot Builder)
    - Create stake amount input with validation
    - Add priority level selection
    - Add cooldown period configuration
    - _Requirements: 2.1, 2.2, 2.5, 31.1, 31.2, 31.3, 31.4, 31.5, 39.1, 39.2, 39.3, 39.4, 39.5, 40.1, 40.2, 40.3, 40.4, 40.5_
  
  - [x] 12.2 Create condition builder sub-components
    - Build ConditionList component for managing multiple conditions
    - Create DigitFrequencyConditionForm with digit selection and threshold inputs
    - Create VolatilityConditionForm with tick count and threshold inputs
    - Create TimeRangeConditionForm with time picker and day-of-week selection
    - Create PerformanceConditionForm with metric selection and threshold inputs
    - Create SignalConditionForm with signal provider and criteria selection
    - Add condition add/edit/remove functionality
    - _Requirements: 2.1, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2, 5.3, 5.4, 6.1, 6.2, 7.1, 7.2, 7.3_
  
  - [x] 12.3 Create action and limits configuration
    - Build ActionBuilder component for bot action selection (start/stop/switch)
    - Create LimitsBuilder component for profit/loss limits
    - Add global and per-strategy limit inputs
    - Implement validation for all inputs
    - _Requirements: 2.1, 9.1, 10.1, 11.1, 13.1, 14.1, 15.1, 15.2, 15.3_
  
  - [x] 12.4 Add template selection and import/export
    - Create TemplateSelector component with template library
    - Add template preview and description display
    - Implement template loading and customization
    - Add strategy export button with JSON download
    - Add strategy import button with file upload and validation
    - _Requirements: 18.1, 18.2, 18.3, 18.4, 18.5, 36.1, 36.2, 36.3, 36.4, 36.5_
  
  - [x] 12.5 Implement validation and warnings UI
    - Add real-time validation error display
    - Create warning messages for risky configurations
    - Implement confirmation dialog for risky strategy activation
    - Add destructive action confirmations (delete strategy)
    - _Requirements: 24.1, 24.2, 24.3, 24.4, 24.5, 32.1, 32.2, 32.3, 32.4, 32.5, 33.1, 33.2, 33.3, 33.4, 33.5_

- [~] 13. Checkpoint - Verify Strategy Builder functionality
  - Test creating strategies with all condition types
  - Verify validation works correctly
  - Test template loading and customization
  - Test import/export functionality
  - Ensure all tests pass, ask the user if questions arise

- [~] 14. Implement Condition Dashboard UI component
  - [x] 14.1 Create main ConditionDashboard component layout
    - Build dashboard grid layout with Zeus theme styling
    - Add connection status indicator with visual feedback
    - Create emergency stop button (large, prominent, with confirmation)
    - Implement mobile-responsive layout
    - _Requirements: 17.1, 17.2, 17.3, 17.4, 17.5, 19.3, 30.1, 30.2, 30.3, 30.4, 30.5, 31.1, 31.2, 31.3, 31.4, 31.5, 33.2_
  
  - [x] 14.2 Create strategy monitoring components
    - Build StrategyList component displaying active strategies
    - Create StrategyCard component with condition status indicators
    - Add pause/resume controls for each strategy
    - Implement real-time condition value display
    - Add visual indicators for condition status (true/false/not evaluable)
    - Display last evaluation timestamp
    - Show cooldown timer when strategy is in cooldown
    - _Requirements: 19.1, 19.2, 19.3, 19.4, 19.5, 25.1, 25.2, 25.3, 25.4, 25.5, 40.3, 40.4_
  
  - [x] 14.3 Create bot status monitoring components
    - Build RunningBotsList component displaying active bots
    - Create RunningBotCard component with bot details
    - Display which strategy started each bot and when
    - Show current profit/loss for each bot
    - Add manual stop button for individual bots
    - Implement auto-started bot indicator
    - _Requirements: 20.1, 20.2, 20.3, 20.4, 20.5, 26.4_
  
  - [x] 14.4 Create performance tracking components
    - Build PerformanceMetrics component for strategy performance
    - Display total profit, total loss, win rate, and activation count
    - Add time period selector (today, week, month, all time)
    - Create PerformanceChart component for visual performance display
    - _Requirements: 21.1, 21.2, 21.3, 21.4, 21.5_
  
  - [x] 14.5 Create audit log viewer component
    - Build AuditLogViewer component with table display
    - Implement search functionality for log entries
    - Add filter controls (by type, strategy, date range)
    - Display timestamps, event types, and details
    - Show error messages and stack traces for error events
    - _Requirements: 23.1, 23.2, 23.3, 23.4, 23.5, 23.6_

- [x] 15. Implement alert and notification system
  - [x] 15.1 Create AlertManager service for strategy trigger notifications
    - Implement browser notification support
    - Add sound alert functionality
    - Create visual indicator system
    - Add per-strategy alert configuration
    - Implement alert filtering to reduce notification fatigue
    - _Requirements: 22.1, 22.2, 22.3, 22.4, 22.5_
  
  - [x] 15.2 Integrate alerts into dashboard UI
    - Add alert configuration UI in Strategy Builder
    - Display visual alerts in Condition Dashboard
    - Add notification permission request flow
    - Create alert history display
    - _Requirements: 22.1, 22.2, 22.3, 22.4_

- [-] 16. Implement integration with existing systems
  - [x] 16.1 Integrate with Bot Builder system
    - Connect to run_panel store for bot execution
    - Retrieve available bots list from Bot Builder
    - Respect bot configuration settings from Bot Builder
    - Add auto-started indicator to Bot Builder UI
    - Implement manual override support
    - _Requirements: 26.1, 26.2, 26.3, 26.4, 26.5_
  
  - [x] 16.2 Integrate with authentication and account system
    - Use existing authentication system for user identity
    - Implement account balance checking before bot start
    - Add account type restriction handling (demo vs real)
    - Implement account switching detection and strategy reload
    - Add demo mode indicator and confirmation flow
    - _Requirements: 28.1, 28.2, 28.3, 28.4, 28.5, 29.1, 29.2, 29.3, 29.4, 29.5_
  
  - [x] 16.3 Integrate with signal providers (Zeus AI, CFX)
    - Create signal provider interface
    - Implement Zeus AI signal integration
    - Implement CFX signal integration
    - Add signal data caching and timeout handling
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [x] 17. Add advanced features
  - [x] 17.1 Implement multi-symbol strategy support
    - Add multiple symbol selection in Strategy Builder
    - Update MarketDataMonitor to handle multiple symbol subscriptions
    - Modify StrategyEvaluator to use correct symbol data per condition
    - Add cross-symbol condition comparison support
    - Update BotController to start bots with triggering symbol
    - _Requirements: 38.1, 38.2, 38.3, 38.4, 38.5_
  
  - [x] 17.2 Implement backtesting support (optional)
    - Create backtesting mode toggle
    - Add historical tick data loader
    - Implement simulated bot execution
    - Create backtesting report generator
    - Add backtesting mode indicator in dashboard
    - _Requirements: 37.1, 37.2, 37.3, 37.4, 37.5_

- [x] 18. Implement iframe compatibility and error handling
  - [x] 18.1 Add iframe environment compatibility
    - Implement postMessage API communication where needed
    - Handle cross-origin restrictions
    - Add iframe resize event handling
    - Ensure CSP compliance
    - _Requirements: 34.1, 34.2, 34.3, 34.4, 34.5_
  
  - [x] 18.2 Enhance error handling and recovery
    - Add comprehensive error boundaries in React components
    - Implement graceful degradation for feature failures
    - Add user-friendly error messages
    - Create error recovery flows
    - _Requirements: 9.4, 35.1, 35.2, 35.3, 35.4, 35.5_

- [x] 19. Add styling and theme consistency
  - [x] 19.1 Apply Zeus theme to all components
    - Use Zeus color palette (gold #FFD700, electric blue #4169E1)
    - Apply consistent typography and spacing
    - Use existing UI component library where possible
    - Ensure light/dark theme support if applicable
    - Use consistent iconography
    - _Requirements: 31.1, 31.2, 31.3, 31.4, 31.5_
  
  - [x] 19.2 Implement mobile-responsive styles
    - Create responsive layouts for Strategy Builder
    - Optimize Condition Dashboard for mobile screens
    - Ensure touch gesture support
    - Prioritize critical information on mobile
    - Make emergency stop easily accessible on mobile
    - _Requirements: 30.1, 30.2, 30.3, 30.4, 30.5_

- [x] 20. Final integration and testing
  - [x] 20.1 Wire Auto Strategy Controller into main application
    - Add navigation menu item for Auto Strategy Controller
    - Create route for Strategy Builder page
    - Create route for Condition Dashboard page
    - Add controller initialization to app startup
    - Ensure proper cleanup on app shutdown
    - _Requirements: 2.1, 26.1_
  
  - [ ]* 20.2 Perform end-to-end integration testing
    - Test complete user flow: create strategy → activate → monitor → bot triggers → risk limits → audit log
    - Test emergency stop across all scenarios
    - Test connection failure and recovery
    - Test account switching
    - Test demo mode vs real mode
    - Verify all requirements are met
    - _Requirements: All requirements_
  
  - [x] 20.3 Performance optimization
    - Profile strategy evaluation performance
    - Optimize tick buffer operations
    - Reduce unnecessary re-renders in dashboard
    - Implement memoization where appropriate
    - _Requirements: 1.2, 8.1_

- [ ] 21. Final checkpoint - Complete system verification
  - Verify all core functionality works end-to-end
  - Test with multiple concurrent strategies
  - Verify risk management enforcement
  - Test all UI components for usability
  - Ensure mobile responsiveness
  - Verify Zeus theme consistency
  - Ensure all tests pass, ask the user if questions arise

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP delivery
- Each task references specific requirements for traceability
- The implementation follows a bottom-up approach: data layer → services → orchestrator → UI
- Checkpoints ensure incremental validation and allow for user feedback
- Integration with existing systems (Bot Builder, WebSocket Manager) is prioritized
- All code should follow TypeScript best practices and include proper error handling
- Zeus theme consistency must be maintained throughout all UI components
- Mobile responsiveness is a core requirement, not an afterthought
