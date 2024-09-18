import React, { useState, useMemo } from 'react';
import chroma from 'chroma-js';

interface ColorCardProps {
  color: string;
  onRemove: (color: string) => void;
}

const ColorCard: React.FC<ColorCardProps> = ({ color, onRemove }) => {
  const [copied, setCopied] = useState(false);

  const { backgroundColor, textColor, displayColor } = useMemo(() => {
    try {
      const chromaColor = chroma(color);
      const textColor = chromaColor.luminance() > 0.5 ? 'black' : 'white';
      const isNamedColor = color.toLowerCase() === chromaColor.name().toLowerCase();
      return { 
        backgroundColor: color, 
        textColor,
        displayColor: isNamedColor ? color : chromaColor.hex(),
      };
    } catch (error) {
      console.error('Invalid color:', color);
      return { 
        backgroundColor: 'gray', 
        textColor: 'white',
        displayColor: 'Invalid Color',
      };
    }
  }, [color]);

  const handleCopy = () => {
    navigator.clipboard.writeText(color).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer"
      style={{ backgroundColor }}
      onClick={handleCopy}
    >
      <button
        className="absolute top-1 right-1 p-1 rounded-full bg-gray-200 bg-opacity-50 hover:bg-opacity-75 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(color);
        }}
        aria-label="Remove color"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="p-4">
        <p className="text-center font-semibold" style={{ color: textColor }}>
          {copied ? '✅ Copied!' : displayColor}
        </p>
      </div>
    </div>
  );
};

export default React.memo(ColorCard);