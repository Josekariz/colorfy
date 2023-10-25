"use client"

import React from 'react';
import chroma from 'chroma-js';


const ColorCard = ({ color, onRemove }: { color: string; onRemove: () => void }) => {
  const cardStyle = {
    backgroundColor: color,
  };

  const oppositeColor = isBlackColor(color) ? '#ffffff' : calculateOppositeColor(color);

  const textStyles = {
    color: oppositeColor, // Set text color to the opposite color
  };

  const buttonStyle = {
    backgroundColor: oppositeColor, // Set button background color to the opposite color
  };

  function calculateOppositeColor(cssColor: string) {
    try {
      chroma
      const chromaColor = chroma(cssColor);
      // Calculate the opposite color by inverting
      const invertedColor = chromaColor.luminance() > 0.5 ? chromaColor.darken() : chromaColor.brighten();
      // Convert to a CSS color string
      return invertedColor.css();
    } catch (error) {
      console.error('Error calculating opposite color:', error);
      return cssColor; // Default to returning the input color on error
    }
  }
  

  function isBlackColor(hexColor: string) {
    // Check if the color is black
    return hexColor === '#000000';
  }

  return (
    <div className="flex flex-row-reverse card w-40 min-h-16 relative rounded-md border" style={cardStyle}>
      <button
        className="glass p-2 rounded-sm cursor-pointer"
        
        onClick={() => (onRemove as (color: string) => void)(color)}
      >
        X
      </button>
      <div className="card-body">
        <p className="card-title text-center" style={textStyles}>
          {color}
        </p>
      </div>
    </div>
  );
}

export default ColorCard;
