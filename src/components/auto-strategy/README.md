# Auto Strategy Builder UI Components

This directory contains the UI components for the Auto Strategy Controller feature, which allows users to create and manage automated trading strategies.

## Components Overview

### Main Components

#### StrategyBuilder
The main component for creating and editing strategies. Provides a comprehensive form interface with all necessary fields.

**Props:**
- `strategyId?: string` - ID of strategy to edit (optional, omit for new strategy)
- `onSave?: (strategyId: string) => void` - Callback when strategy is saved
- `onCancel?: () => void` - Callback when user cancels

**Features:**
- Strategy name and description
- Trading symbol selection
- Logic operator (AND/OR)
- Priority level selection
- Cooldown period configuration
- Real-time validation
- Warning display for risky configurations

#### ConditionBuilder
Manages the list of conditions for a strategy. Allows adding, editing, and removing conditions.

**Props:**
- `conditions: Condition[]` - Array of current conditions
- `onChange: (conditions: Condition[]) => void` - Callback when conditions change

**Features:**
- Add multiple condition types
- Edit existing conditions
- Remove conditions
- Visual condition list with descriptions

### Condition Form Components

Each condition type has its own form component:

- **DigitFrequencyConditionForm** - Configure digit frequency conditions
- **VolatilityConditionForm** - Configure volatility-based conditions
- **TimeRangeConditionForm** - Configure time-based conditions
- **PerformanceConditionForm** - Configure bot performance conditions
- **SignalConditionForm** - Configure external signal conditions

All condition forms follow the same interface:
```typescript
interface ConditionFormProps {
    condition?: ConditionType;
    onSave: (condition: ConditionType) => void;
    onCancel: () => void;
}
```

### Supporting Components

#### ActionBuilder
Configures the bot action (start/stop/switch) for a strategy.

**Props:**
- `action: StrategyAction` - Current action configuration
- `onChange: (action: StrategyAction) => void` - Callback when action changes

#### LimitsBuilder
Configures profit and loss limits for a strategy.

**Props:**
- `profitLimit?: number` - Current profit limit
- `lossLimit?: number` - Current loss limit
- `onProfitLimitChange: (limit: number | undefined) => void`
- `onLossLimitChange: (limit: number | undefined) => void`

#### TemplateSelector
Displays strategy templates and allows users to select and customize them.

**Props:**
- `onSelectTemplate: (strategy: Omit<Strategy, 'id' | 'createdAt' | 'updatedAt'>) => void`

**Features:**
- Grid display of available templates
- Category-based color coding
- Template preview
- Use case descriptions

#### ImportExportButtons
Provides buttons for importing and exporting strategies as JSON.

**Props:**
- `strategyId?: string` - ID of strategy to export
- `onImportSuccess?: (strategyId: string) => void` - Callback when import succeeds

#### StrategyValidation
Displays validation errors and warnings for strategy configuration.

**Props:**
- `errors: string[]` - Array of validation errors
- `warnings: string[]` - Array of warnings

#### ConfirmationDialog
Displays confirmation dialogs for destructive actions.

**Props:**
- `isVisible: boolean` - Whether dialog is visible
- `title: string` - Dialog title
- `message: string` - Dialog message
- `confirmText?: string` - Confirm button text
- `cancelText?: string` - Cancel button text
- `onConfirm: () => void` - Callback when confirmed
- `onCancel: () => void` - Callback when cancelled

## Usage Example

```typescript
import React, { useState } from 'react';
import { StrategyBuilder } from './components/auto-strategy';

const MyComponent = () => {
    const [editingStrategyId, setEditingStrategyId] = useState<string>();

    const handleSave = (strategyId: string) => {
        console.log('Strategy saved:', strategyId);
        // Navigate or update UI
    };

    const handleCancel = () => {
        // Handle cancel
    };

    return (
        <StrategyBuilder
            strategyId={editingStrategyId}
            onSave={handleSave}
            onCancel={handleCancel}
        />
    );
};
```

## Styling

All components use Zeus theme colors:
- **Gold**: `#FFD700` - Primary accent color
- **Electric Blue**: `#4169E1` - Primary brand color
- **Dark Blue**: `#1e3a8a` - Secondary brand color

Components are fully responsive and adapt to mobile screens (< 768px).

## Integration with Auto Strategy Controller

The components integrate with the Auto Strategy Controller service through the `useAutoStrategyController` hook:

```typescript
import { useAutoStrategyController } from '../../hooks/useAutoStrategyController';

const {
    createStrategy,
    updateStrategy,
    deleteStrategy,
    getStrategyById,
    getStrategyWarnings,
    exportStrategy,
    importStrategy,
} = useAutoStrategyController();
```

## Requirements Coverage

These components fulfill the following requirements from the Auto Strategy Controller spec:

- **2.1, 2.2, 2.5**: Strategy creation and management
- **3.1-7.3**: All condition types (digit frequency, volatility, time range, performance, signal)
- **9.1, 10.1, 11.1**: Bot actions (start, stop, switch)
- **13.1, 14.1, 15.1-15.3**: Profit and loss limits
- **18.1-18.5**: Strategy templates
- **24.1-24.5**: Strategy validation
- **31.1-31.5**: Zeus theme styling
- **32.1-32.5**: Risky strategy warnings
- **33.1-33.5**: Destructive action confirmations
- **36.1-36.5**: Import/export functionality
- **39.1-39.5**: Priority levels
- **40.1-40.5**: Cooldown period configuration

## File Structure

```
src/components/auto-strategy/
├── StrategyBuilder.tsx          # Main builder component
├── StrategyBuilder.scss         # Main builder styles
├── ConditionBuilder.tsx         # Condition list manager
├── ConditionBuilder.scss        # Condition list styles
├── ActionBuilder.tsx            # Bot action configuration
├── ActionBuilder.scss           # Action builder styles
├── LimitsBuilder.tsx            # Profit/loss limits
├── LimitsBuilder.scss           # Limits builder styles
├── TemplateSelector.tsx         # Template selection
├── TemplateSelector.scss        # Template selector styles
├── ImportExportButtons.tsx      # Import/export functionality
├── ImportExportButtons.scss     # Import/export styles
├── StrategyValidation.tsx       # Validation display
├── StrategyValidation.scss      # Validation styles
├── ConfirmationDialog.tsx       # Confirmation dialogs
├── DigitFrequencyConditionForm.tsx
├── VolatilityConditionForm.tsx
├── TimeRangeConditionForm.tsx
├── PerformanceConditionForm.tsx
├── SignalConditionForm.tsx
├── ConditionForms.scss          # Shared condition form styles
├── StrategyBuilderExample.tsx   # Usage example
├── StrategyBuilderExample.scss  # Example styles
├── index.ts                     # Component exports
└── README.md                    # This file
```

## Testing

To test the components:

1. Import `StrategyBuilderExample` into your application
2. Navigate to the component
3. Try creating a new strategy
4. Test all condition types
5. Test template selection
6. Test import/export functionality
7. Verify validation and warnings display correctly
8. Test on mobile devices for responsiveness

## Future Enhancements

Potential improvements for future iterations:

1. Drag-and-drop condition reordering
2. Condition grouping with nested logic operators
3. Visual condition builder (flowchart-style)
4. Strategy backtesting integration
5. Strategy performance charts
6. Bulk strategy import/export
7. Strategy sharing/marketplace
8. Advanced template customization
9. Condition templates/presets
10. Real-time condition preview with live data
