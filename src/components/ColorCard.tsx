"use client"

import React from 'react';

const ColorCard = ({ color, onRemove }) => {
  return (
    <div className="card w-40 min-h-16 bg-primary text-primary-content relative">
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

// {<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4">
//           {colorTokens.map((token, index) => (
//             <ColorCard key={index} color={token} onRemove={removeColor} />
//           ))}
//         </div>}