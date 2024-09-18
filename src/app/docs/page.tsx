import React from 'react';

const Docs = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <a 
          href="https://github.com/Josekariz/colorfy" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-600 text-lg"
        >
          <h1 className="text-4xl font-bold mb-6">Colorfy 🌈</h1>
        </a>
        <p className="text-lg mb-2">
          Colorfy is a powerful open-source application designed for managing and generating color palettes. It helps developers tokenize colors from CSS properties, create custom color palettes, and generate random palettes for various uses. Whether you’re working on a design system or just need some color inspiration, Colorfy provides an intuitive interface and flexible functionality. 
        </p>
        <a 
          href="https://github.com/Josekariz/colorfy" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 text-lg mb-6"
        >
          Colorfy 🌈 Github repository.
        </a>

        <h2 className="text-2xl font-semibold my-2 mb-4">Table of Contents</h2>
        <ul className="list-disc list-inside mb-6">
          <li><a href="#features" className="text-blue-600 hover:underline">Features</a></li>
          <li><a href="#technology-stack" className="text-blue-600 hover:underline">Technology Stack</a></li>
          <li><a href="#getting-started" className="text-blue-600 hover:underline">Getting Started</a></li>
          <li><a href="#usage" className="text-blue-600 hover:underline">Usage</a></li>
          <li><a href="#contributing" className="text-blue-600 hover:underline">Contributing</a></li>
          <li><a href="#license" className="text-blue-600 hover:underline">License</a></li>
        </ul>

        <section id="features" className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Color Tokenization:</strong> Extract and save colors from CSS color properties into an array, making it easy to integrate and use these colors in your projects.</li>
            <li><strong>Custom Palette Generation:</strong> Create color palettes with shades of a single color or complementary colors from multiple inputs.</li>
            <li><strong>Random Palette Generation:</strong> Quickly generate a palette with random colors to spark creativity or provide design inspiration.</li>
            <li><strong>Interactive Color Cards:</strong> View and interact with colors. Click to copy hex values to the clipboard and see a visual representation of each color.</li>
            <li><strong>Open Source & Highly Customizable:</strong> Modify and extend Colorfy to fit your specific needs or integrate it into your projects.</li>
          </ul>
        </section>

        <section id="technology-stack" className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
          <p>Colorfy is built using the following technologies:</p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>React:</strong> A JavaScript library for building user interfaces. Used for creating the dynamic and responsive UI.</li>
            <li><strong>Chroma.js:</strong> A color manipulation library used to generate color scales and work with various color formats.</li>
            <li><strong>Lodash:</strong> A utility library providing helpful functions like <code className="bg-gray-100 p-1 rounded">debounce</code> to optimize performance.</li>
            <li><strong>Next.js:</strong> A React framework for server-side rendering and building static websites. Used for dynamic imports and efficient rendering.</li>
          </ul>
        </section>

        <section id="getting-started" className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <h3 className="text-xl font-semibold mb-2">Prerequisites</h3>
          <p>Before you begin, ensure you have the following software installed:</p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Node.js:</strong> JavaScript runtime used for building and running the application. Download from <a href="https://nodejs.org/" className="text-blue-600 hover:underline">nodejs.org</a>.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Installation</h3>
          <p>To set up Colorfy on your local machine, follow these steps:</p>
          <ol className="list-decimal list-inside space-y-2 mt-4">
            <li><strong>Clone the Repository:</strong> <pre className="bg-gray-100 p-2 rounded"><code>git clone https://github.com/yourusername/colorfy.git</code></pre></li>
            <li><strong>Navigate to the Project Directory:</strong> <pre className="bg-gray-100 p-2 rounded"><code>cd colorfy</code></pre></li>
            <li><strong>Install Dependencies:</strong> <pre className="bg-gray-100 p-2 rounded"><code>npm install</code></pre></li>
            <li><strong>Start the Application:</strong> <pre className="bg-gray-100 p-2 rounded"><code>npm start || npm run dev</code></pre></li>
          </ol>
        </section>

        <section id="usage" className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <h3 className="text-xl font-semibold mb-2">Interface Overview</h3>
          <p>Colorfy is designed to be intuitive and user-friendly. Here’s how to make the most out of it:</p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Input Field:</strong> Enter CSS color values (hex, RGB, named colors) here.</li>
            <li><strong>Generate Palette Button:</strong> Click to create a color palette based on the input colors.</li>
            <li><strong>Random Palette Button:</strong> Generate a palette with random colors.</li>
            <li><strong>Clear All Button:</strong> Remove all colors and reset the input field.</li>
            <li><strong>Color Cards:</strong> Displayed color palettes, each represented by a card showing the color and its hex value.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Generating Palettes</h3>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Single Color Input:</strong> If only one color is provided, Colorfy generates a range of shades and tints from that color. This includes darker and lighter variations to create a visually appealing set of related colors.</li>
            <li><strong>Multiple Colors Input:</strong> When multiple colors are provided, Colorfy generates a palette that blends these colors, creating a diverse range of complementary hues. This ensures that the resulting palette maintains visual harmony and richness.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Random Palettes</h3>
          <p>Click the "Random Palette" button to generate a new set of 5 random colors. This feature is great for quick design inspiration or experimenting with new color combinations.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Copying Colors</h3>
          <p>Click on any color card to copy its hex value to the clipboard. A checkmark will briefly appear to indicate that the color has been copied successfully.</p>
        </section>

        <section id="contributing" className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Contributing</h2>
          <p>We welcome contributions from the community! If you’re interested in contributing to Colorfy, please follow these guidelines:</p>
          <ol className="list-decimal list-inside space-y-2 mt-4">
            <li><strong>Fork the Repository:</strong> Click the "Fork" button on the top right of the repository page.</li>
            <li><strong>Create a New Branch:</strong> <pre className="bg-gray-100 p-2 rounded"><code>git checkout -b feature/your-feature-name</code></pre></li>
            <li><strong>Make Your Changes:</strong> Implement the desired feature or fix.</li>
            <li><strong>Commit Your Changes:</strong> <pre className="bg-gray-100 p-2 rounded"><code>git commit -m "Add your feature or fix"</code></pre></li>
            <li><strong>Push Your Changes:</strong> <pre className="bg-gray-100 p-2 rounded"><code>git push origin feature/your-feature-name</code></pre></li>
            <li><strong>Create a Pull Request:</strong> Submit your changes to the main repository for review.</li>
          </ol>
        </section>

        <section id="license" className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">License</h2>
          <p>Colorfy is open-source and licensed under terms that allow for modification and redistribution. For detailed licensing information, please refer to the LICENSE file in the repository.</p>
        </section>
      </main>
    </div>
  );
};

export default Docs;
