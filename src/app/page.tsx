"use client"
import React, { useState } from 'react';
import ColorCard from '@/components/ColorCard';


const colorPattern = /#(?:[0-9a-fA-F]{3,6})|\b(red|blue|green|yellow|purple|pink|orange|black|white|gray)\b|rgba?\([^)]*\)|hsla?\([^)]*\)/gi;

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [colorTokens, setColorTokens] = useState([]);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    const tokens = Array.from(new Set(inputText.match(colorPattern))).map((match) =>
      match.trim()
    );

    setInputValue(inputText);
    setColorTokens(tokens);
  };

  const removeColor = (color) => {
    setColorTokens((prevTokens) => prevTokens.filter((token) => token !== color));
    setInputValue((prevInput) => prevInput.replace(color, ''));
  };

  const handleSearch = () => {
    console.log("Input Value:", inputValue);
    console.log("Color Tokens:", colorTokens);
  };

  return (
    <>
      <div className="flex items-center min-h-screen">
        <div className="mx-auto">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered max-w-xl"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="btn btn-outline btn-info" onClick={handleSearch}>
            Lets get Mixing
          </button>
        </div>
      </div>

      {colorTokens.length >= 1 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
          {colorTokens.map((token, index) => (
            <ColorCard key={index} color={token} onRemove={() => removeColor(token)} />
          ))}
        </div>
      )}
    </>
  );
}



