# Colorfy 🌈

Colorfy is a powerful open-source application designed for managing and generating color palettes. It helps developers tokenize colors from CSS properties, create custom color palettes, and generate random palettes for various uses. Whether you’re working on a design system or just need some color inspiration, Colorfy provides an intuitive interface and flexible functionality.

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Interface Overview](#interface-overview)
  - [Generating Palettes](#generating-palettes)
  - [Random Palettes](#random-palettes)
  - [Copying Colors](#copying-colors)
- [Contributing](#contributing)
- [License](#license)

## Features

🌟 Colorfy provides the following features:

- **Color Tokenization**: Extract and save colors from CSS color properties into an array, making it easy to integrate and use these colors in your projects.
- **Custom Palette Generation**: Create color palettes with shades of a single color or complementary colors from multiple inputs.
- **Random Palette Generation**: Quickly generate a palette with random colors to spark creativity or provide design inspiration.
- **Interactive Color Cards**: View and interact with colors. Click to copy hex values to the clipboard and see a visual representation of each color.
- **Open Source & Highly Customizable**: Modify and extend Colorfy to fit your specific needs or integrate it into your projects.

## Technology Stack

Colorfy is built using the following technologies:

- **React**: A JavaScript library for building user interfaces. Used for creating the dynamic and responsive UI.
- **Chroma.js**: A color manipulation library used to generate color scales and work with various color formats.
- **Lodash**: A utility library providing helpful functions like `debounce` to optimize performance.
- **Next.js**: A React framework for server-side rendering and building static websites. Used for dynamic imports and efficient rendering.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following software installed:

- **Node.js**: JavaScript runtime used for building and running the application. Download from [nodejs.org](https://nodejs.org/).

### Installation

To set up Colorfy on your local machine, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/colorfy.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd colorfy
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Start the Application**:

   ```bash
   npm start || npm run dev
   ```

   The app will launch in your default web browser, typically at `http://localhost:3000`.

## Usage

Colorfy is designed to be intuitive and user-friendly. Here’s how to make the most out of it:

### Interface Overview

- **Input Field**: Enter CSS color values (hex, RGB, named colors) here.
- **Generate Palette Button**: Click to create a color palette based on the input colors.
- **Random Palette Button**: Generate a palette with random colors.
- **Clear All Button**: Remove all colors and reset the input field.
- **Color Cards**: Displayed color palettes, each represented by a card showing the color and its hex value.

### Generating Palettes

1. **Single Color Input**: If only one color is provided, Colorfy generates a range of shades and tints from that color. This includes darker and lighter variations to create a visually appealing set of related colors.

2. **Multiple Colors Input**: When multiple colors are provided, Colorfy generates a palette that blends these colors, creating a diverse range of complementary hues. This ensures that the resulting palette maintains visual harmony and richness.

### Random Palettes

- Click the "Random Palette" button to generate a new set of 5 random colors. This feature is great for quick design inspiration or experimenting with new color combinations.

### Copying Colors

- Click on any color card to copy its hex value to the clipboard. A checkmark will briefly appear to indicate that the color has been copied successfully.

## Contributing

We welcome contributions from the community! If you’re interested in contributing to Colorfy, please follow these guidelines:

1. **Fork the Repository**: Click the "Fork" button on the top right of the repository page.

2. **Create a New Branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**: Implement the desired feature or fix.

4. **Commit Your Changes**:

   ```bash
   git commit -m "Add your feature or fix"
   ```

5. **Push Your Changes**:

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**: Submit your changes to the main repository for review.

## License

Colorfy is open-source and licensed under terms that allow for modification and redistribution. For detailed licensing information, please refer to the LICENSE file in the repository.