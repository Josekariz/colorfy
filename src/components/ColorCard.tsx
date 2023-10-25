"use client"

import React from 'react';

const ColorCard = ({ color, onRemove }) => {
  const cardStyle = {
    backgroundColor: color,
  };

  return (
    <div className="card w-40 min-h-16 relative" style={cardStyle}>
      <button
        className="absolute top-1 right-1 p-2 rounded-full bg-glass cursor-pointer"
        onClick={() => onRemove(color)}
      >
        X
      </button>
      <div className="card-body">
        <h2 className="card-title text-center">{color}</h2>
      </div>
    </div>
  );
}

export default ColorCard;

// here what i want to do is once a color prop is reveived the components background color is set to that color and the name of that color or code set in the h tag