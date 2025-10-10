# Mantine Accessible Colours

A web application for generating accessible color palettes with real-time contrast ratio calculations and WCAG compliance checking. Built with React, Mantine UI, and TypeScript.

## Features

- 🎨 **Color Palette Generation**: Generate 10 shades of any color from lightest to darkest
- 🔍 **Real-time Color Picker**: Interactive HSL color selection with live preview
- ♿ **Accessibility Testing**: WCAG contrast ratio calculations with AA/AAA compliance indicators
- 🎛️ **Variant Configuration**: Customize different UI variants (filled, light, hover states) with opacity controls
- 📊 **Visual Contrast Analysis**: Side-by-side comparison of colors with accessibility scores
- 🌈 **Dynamic Theme Integration**: Live Mantine theme updates based on your color choices

## Technology Stack

- **React 19** - Modern React with the latest features
- **Mantine 8.3** - Comprehensive React components library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **CSS Custom Properties** - Dynamic theme variables

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PaoloMura/mantine-accessible-colours.git
cd mantine-accessible-colours
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

1. **Select a Base Color**: Use the color picker to choose your primary color
2. **Adjust Hue and Saturation**: Fine-tune the color using the HSL controls
3. **Configure Variants**: Set different shades for filled, hover, and light variants
4. **Check Accessibility**: Review contrast ratios and WCAG compliance scores
5. **Export Colors**: Copy hex values for use in your design system

## Project Structure

```
src/
├── components/          # Reusable UI components
├── lib/                 # Utility functions
│   ├── contrastRatio.ts # WCAG contrast calculations
│   ├── generateShades.ts # Color palette generation
│   ├── hexToHsl.ts     # Color format conversions
│   └── hslToRgb.ts     # Color format conversions
├── sections/           # Main app sections
│   ├── AccessibilitySection.tsx
│   ├── ColourInputSection.tsx
│   └── VariantSection.tsx
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## Color Accessibility Standards

This tool helps ensure your colors meet WCAG (Web Content Accessibility Guidelines) standards:

- **AA Normal**: Minimum contrast ratio of 4.5:1 for normal text
- **AA Large**: Minimum contrast ratio of 3:1 for large text
- **AAA Normal**: Enhanced contrast ratio of 7:1 for normal text
- **AAA Large**: Enhanced contrast ratio of 4.5:1 for large text

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Mantine](https://mantine.dev/) - React components library
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/) - Web accessibility standards
- [get-contrast](https://www.npmjs.com/package/get-contrast) - Contrast ratio calculations
