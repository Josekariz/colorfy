"use client"
import React, { useState, useCallback, useMemo } from 'react';
import { debounce } from 'lodash';
import chroma from 'chroma-js';
import dynamic from 'next/dynamic';

const ColorCard = dynamic(() => import('@/components/ColorCard'), { ssr: false });

const colorPattern = /#(?:[0-9a-fA-F]{3,6})|\b(AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGray|DarkGrey|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkSlateGrey|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DimGrey|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gray|Grey|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGray|LightGrey|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSlateGrey|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|SlateGrey|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b|rgba?\([^)]*\)|hsla?\([^)]*\)/gi;

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [colorTokens, setColorTokens] = useState<string[]>([]);

  const debouncedSetColorTokens = useMemo(
    () =>
      debounce((text: string) => {
        const tokens = Array.from(new Set(text.match(colorPattern) || [])).map((match) => {
          const trimmedMatch = match.trim();
          return chroma.valid(trimmedMatch) ? trimmedMatch : chroma(trimmedMatch).hex();
        });
        setColorTokens(tokens);
      }, 300),
    []
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputText = e.target.value;
      setInputValue(inputText);
      debouncedSetColorTokens(inputText);
    },
    [debouncedSetColorTokens]
  );

  const removeColor = useCallback((color: string) => {
    setColorTokens((prevTokens) => prevTokens.filter((token) => token !== color));
    setInputValue((prevInput) => prevInput.replace(color, '').trim());
  }, []);

  const generatePalette = useCallback(() => {
    if (colorTokens.length === 0) {
      alert("Please enter at least one color first.");
      return;
    }
  
    // If there's only one color, generate a range of shades and tints
    if (colorTokens.length === 1) {
      const baseColor = colorTokens[0];
      const scale = chroma.scale([chroma(baseColor).darken(2).hex(), baseColor, chroma(baseColor).brighten(2).hex()])
        .mode('lab')
        .colors(5);
      setColorTokens(scale);
    } else {
      // For multiple colors, create a composite scale
      const baseColors = colorTokens;
      const scale = chroma.scale(baseColors)
        .mode('lch')
        .colors(5);
      setColorTokens(scale);
    }
  }, [colorTokens]);
  

  const generateRandomPalette = useCallback(() => {
    const randomColors = Array.from({ length: 5 }, () => chroma.random().hex());
    setColorTokens(randomColors);  // Replace with 5 new random colors
  }, []);

  const clearAll = useCallback(() => {
    setInputValue('');
    setColorTokens([]);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <input
            type="text"
            placeholder="Enter colors (e.g., #ff0000, blue)"
            className="input input-bordered w-full sm:w-96 p-2"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button 
            className="btn btn-primary w-full sm:w-auto"
            onClick={generatePalette}
          >
            Generate Palette
          </button>
          <button 
            className="btn btn-secondary w-full sm:w-auto"
            onClick={generateRandomPalette}
          >
            Random Palette
          </button>
          <button 
            className="btn btn-warning w-full sm:w-auto"
            onClick={clearAll}
          >
            Clear All
          </button>
        </div>
      </div>

      {colorTokens.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {colorTokens.map((token, index) => (
            <ColorCard key={`${token}-${index}`} color={token} onRemove={removeColor} />
          ))}
        </div>
      )}
    </div>
  );
}
