"use client"
import React, { useState } from 'react';
const colorPattern = /#(?:[0-9a-fA-F]{3,6})|\b(red|blue|green|yellow|purple|pink|orange|black|white|gray)\b|rgba?\([^)]*\)|hsla?\([^)]*\)/gi;

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [colorTokens, setColorTokens] = useState([]);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    const tokens = Array.from(inputText.matchAll(colorPattern), match => match[0].trim());
    
    setInputValue(inputText);
    setColorTokens(tokens);
  };

  const handleSearch = () => {
    console.log("Input Value:", inputValue);
    console.log("Color Tokens:", colorTokens);
  };

  return (
    <div>
      <div className='flex min-h-screen items-center'>
        <div className="mx-auto">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered max-w-xl"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className="btn btn-outline btn-info max-w-xl"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      
    </div>
  );
}
