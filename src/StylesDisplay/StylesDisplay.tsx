import React, { useState, useEffect } from 'react';
import './StylesDisplay.css';
import { STYLE_PROPERTIES } from './constants';
import {
  resetAllHighlights,
  getCorrespondingElements,
  highlightElements,
  getInlineStyles,
  highlightChildren,
} from './helpers';

const StylesDisplay: React.FC = () => {
  const [originalStyles, setOriginalStyles] = useState<{ key: string; value: string }[]>([]);
  const [computedStyles, setComputedStyles] = useState<{ key: string; value: string }[]>([]);

  useEffect(() => {
    const handleInteraction = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const originalRoot = target.closest('.render-root');
      if (!originalRoot) {
        return;
      }

      resetAllHighlights();

      const correspondingElements = getCorrespondingElements(target);
      highlightElements(correspondingElements);

      if (correspondingElements.length >= 2) {
        setOriginalStyles(getInlineStyles(correspondingElements[0], STYLE_PROPERTIES));
        setComputedStyles(getInlineStyles(correspondingElements[1], STYLE_PROPERTIES));
      } else if (correspondingElements.length === 1) {
        setOriginalStyles(getInlineStyles(correspondingElements[0], STYLE_PROPERTIES));
        setComputedStyles([]);
      } else {
        setOriginalStyles([]);
        setComputedStyles([]);
      }

      if (event.type === 'dblclick') {
        correspondingElements.forEach(element => {
          highlightChildren(element);
        });
      }
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('dblclick', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('dblclick', handleInteraction);
      resetAllHighlights();
    };
  }, []);

  return (
    <div className="styles-display">
      <div className="styles-row">
        <div className="styles-column">
          <div className="styles-header">Браузерные стили</div>
          <div className="styles-grid">
            {originalStyles.map(({ key, value }) => (
              <div key={key} className="style-item">
                <span className="style-key">{key}:</span>
                <span className="style-value">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="styles-column-separator"></div>

        <div className="styles-column">
          <div className="styles-header">Yoga Layout</div>
          <div className="styles-grid">
            {computedStyles.map(({ key, value }) => (
              <div key={key} className="style-item">
                <span className="style-key">{key}:</span>
                <span className="style-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylesDisplay;
