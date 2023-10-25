"use client"
import React, { useState } from 'react';
import ColorCard from '@/components/ColorCard';


const colorPattern = /#(?:[0-9a-fA-F]{3,6})|\b(AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGray|DarkGrey|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkSlateGrey|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DimGrey|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gray|Grey|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGray|LightGrey|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSlateGrey|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|SlateGrey|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b|rgba?\([^)]*\)|hsla?\([^)]*\)/gi;

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
    <div className='grid  grid-rows-2'>
      <div className="flex items-center mt-20">
        <div className="mx-auto">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered rounded-sm max-w-xl"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="btn btn-outline btn-info rounded-sm" onClick={handleSearch}>
            Lets get Mixing
          </button>
        </div>
      </div>

      {colorTokens.length >= 1 && (
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
          {colorTokens.map((token, index) => (
            <ColorCard key={index} color={token} onRemove={() => removeColor(token)} />
          ))}
        </div>
      )}
    </div>
  );
}



