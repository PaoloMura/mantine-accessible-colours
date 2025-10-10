export default function contrastRatio(hex1: string, hex2: string, bgHex: string, opacity1: number = 1, opacity2: number = 1) {
  // Extract background color RGB values
  const bgR = parseInt(bgHex.slice(1, 3), 16) / 255;
  const bgG = parseInt(bgHex.slice(3, 5), 16) / 255;
  const bgB = parseInt(bgHex.slice(5, 7), 16) / 255;

  const luminance = (hex: string, opacity: number) => {
    // Expect 6-character hex values (#ffffff)
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    // Blend the color with the actual background color
    // finalColor = opacity * color + (1 - opacity) * background
    const finalR = opacity * r + (1 - opacity) * bgR;
    const finalG = opacity * g + (1 - opacity) * bgG;
    const finalB = opacity * b + (1 - opacity) * bgB;

    const luminance = 0.2126 * finalR + 0.7152 * finalG + 0.0722 * finalB;

    return luminance;
  };

  const lum1 = luminance(hex1, opacity1);
  const lum2 = luminance(hex2, opacity2);

  const ratio = lum1 > lum2
    ? (lum1 + 0.05) / (lum2 + 0.05)
    : (lum2 + 0.05) / (lum1 + 0.05);
  
  return Math.round(ratio * 100) / 100;
}
