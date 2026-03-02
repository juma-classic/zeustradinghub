/**
 * Import/Export Buttons Component
 * 
 * Provides buttons for importing and exporting strategies as JSON.
 * 
 * Requirements: 36.1, 36.2, 36.3, 36.4, 36.5
 */

import React, { useRef } from 'react';
import { useAutoStrategyController } from '../../hooks/useAutoStrategyController';
import Button from '../shared_ui/button/button';
import './ImportExportButtons.scss';

interface ImportExportButtonsProps {
    strategyId?: string;
    onImportSuccess?: (strategyId: string) => void;
}

const ImportExportButtons: React.FC<ImportExportButtonsProps> = ({
    strategyId,
    onImportSuccess,
}) => {
    const { exportStrategy, importStrategy } = useAutoStrategyController();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleExport = () => {
        if (!strategyId) {
            alert('No strategy selected for export');
            return;
        }

        const json = exportStrategy(strategyId);
        if (!json) {
            alert('Failed to export strategy');
            return;
        }

        // Create download link
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `strategy-${strategyId}-${Date.now()}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            const text = await file.text();
            const newStrategyId = await importStrategy(text);
            alert('Strategy imported successfully!');
            onImportSuccess?.(newStrategyId);
        } catch (error) {
            alert(`Failed to import strategy: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }

        // Reset file input
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="import-export-buttons">
            <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />

            <Button
                text="Import Strategy"
                onClick={handleImportClick}
                secondary
            />

            {strategyId && (
                <Button
                    text="Export Strategy"
                    onClick={handleExport}
                    secondary
                />
            )}
        </div>
    );
};

export default ImportExportButtons;
