/**
 * Strategy Builder Example
 * 
 * Example usage of the StrategyBuilder component.
 * This can be integrated into the main application navigation.
 */

import React, { useState } from 'react';
import StrategyBuilder from './StrategyBuilder';
import TemplateSelector from './TemplateSelector';
import ImportExportButtons from './ImportExportButtons';
import { Strategy } from '../../types/auto-strategy.types';
import './StrategyBuilderExample.scss';

const StrategyBuilderExample: React.FC = () => {
    const [editingStrategyId, setEditingStrategyId] = useState<string | undefined>(undefined);
    const [showBuilder, setShowBuilder] = useState(false);

    const handleSave = (strategyId: string) => {
        console.log('Strategy saved:', strategyId);
        setShowBuilder(false);
        setEditingStrategyId(undefined);
        alert('Strategy saved successfully!');
    };

    const handleCancel = () => {
        setShowBuilder(false);
        setEditingStrategyId(undefined);
    };

    const handleTemplateSelect = (template: Omit<Strategy, 'id' | 'createdAt' | 'updatedAt'>) => {
        console.log('Template selected:', template);
        // You could pre-fill the builder with template data here
        setShowBuilder(true);
    };

    const handleImportSuccess = (strategyId: string) => {
        console.log('Strategy imported:', strategyId);
        setEditingStrategyId(strategyId);
        setShowBuilder(true);
    };

    return (
        <div className="strategy-builder-example">
            <div className="strategy-builder-example__header">
                <h1>Auto Strategy Controller</h1>
                <p>Create and manage automated trading strategies</p>
            </div>

            {!showBuilder ? (
                <div className="strategy-builder-example__actions">
                    <button
                        className="strategy-builder-example__button strategy-builder-example__button--primary"
                        onClick={() => setShowBuilder(true)}
                    >
                        Create New Strategy
                    </button>

                    <TemplateSelector onSelectTemplate={handleTemplateSelect} />

                    <ImportExportButtons
                        strategyId={editingStrategyId}
                        onImportSuccess={handleImportSuccess}
                    />
                </div>
            ) : (
                <StrategyBuilder
                    strategyId={editingStrategyId}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
};

export default StrategyBuilderExample;
