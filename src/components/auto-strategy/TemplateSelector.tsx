/**
 * Template Selector Component
 * 
 * Displays strategy templates and allows users to select and customize them.
 * 
 * Requirements: 18.1, 18.2, 18.3, 18.4, 18.5
 */

import React, { useState } from 'react';
import { getStrategyStorage, StrategyTemplate } from '../../services/auto-strategy/strategy-storage.service';
import { Strategy } from '../../types/auto-strategy.types';
import Button from '../shared_ui/button/button';
import Modal from '../shared_ui/modal/modal';
import './TemplateSelector.scss';

interface TemplateSelectorProps {
    onSelectTemplate: (strategy: Omit<Strategy, 'id' | 'createdAt' | 'updatedAt'>) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ onSelectTemplate }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState<StrategyTemplate | null>(null);
    const storage = getStrategyStorage();
    const templates = storage.getTemplates();

    const handleSelectTemplate = (template: StrategyTemplate) => {
        setSelectedTemplate(template);
    };

    const handleUseTemplate = () => {
        if (selectedTemplate) {
            onSelectTemplate(selectedTemplate.template);
            setIsModalOpen(false);
            setSelectedTemplate(null);
        }
    };

    const getCategoryColor = (category: string): string => {
        const colors: Record<string, string> = {
            digit_frequency: '#FFD700',
            volatility: '#4169E1',
            time_based: '#32CD32',
            performance: '#FF6347',
            signal: '#9370DB',
            combined: '#FF8C00',
        };
        return colors[category] || '#808080';
    };

    return (
        <>
            <Button
                text="Use Template"
                onClick={() => setIsModalOpen(true)}
                secondary
                large
            />

            <Modal
                is_open={isModalOpen}
                toggleModal={() => setIsModalOpen(false)}
                title="Strategy Templates"
                has_close_icon
                width="800px"
            >
                <Modal.Body>
                    <div className="template-selector">
                        <div className="template-selector__grid">
                            {templates.map((template) => (
                                <div
                                    key={template.id}
                                    className={`template-selector__card ${
                                        selectedTemplate?.id === template.id
                                            ? 'template-selector__card--selected'
                                            : ''
                                    }`}
                                    onClick={() => handleSelectTemplate(template)}
                                >
                                    <div
                                        className="template-selector__category"
                                        style={{ backgroundColor: getCategoryColor(template.category) }}
                                    >
                                        {template.category.replace('_', ' ')}
                                    </div>
                                    <h4 className="template-selector__name">{template.name}</h4>
                                    <p className="template-selector__description">{template.description}</p>
                                    <div className="template-selector__use-case">
                                        <strong>Use Case:</strong> {template.recommendedUseCase}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {selectedTemplate && (
                            <div className="template-selector__preview">
                                <h3>Template Preview</h3>
                                <div className="template-selector__preview-content">
                                    <p><strong>Name:</strong> {selectedTemplate.template.name}</p>
                                    <p><strong>Conditions:</strong> {selectedTemplate.template.conditions.length}</p>
                                    <p><strong>Action:</strong> {selectedTemplate.template.action.type}</p>
                                    <p><strong>Priority:</strong> {selectedTemplate.template.priority}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        text="Cancel"
                        onClick={() => {
                            setIsModalOpen(false);
                            setSelectedTemplate(null);
                        }}
                        secondary
                    />
                    <Button
                        text="Use Template"
                        onClick={handleUseTemplate}
                        is_disabled={!selectedTemplate}
                        primary
                    />
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default TemplateSelector;
