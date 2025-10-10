export default function mixColours(
  foregroundHex: string,
  backgroundHex: string,
  foregroundOpacity: number
) {
  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  const rgbToHex = (rgb: { r: number; g: number; b: number }) => {
    const toHex = (c: number) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return "#" + toHex(rgb.r) + toHex(rgb.g) + toHex(rgb.b);
  };

  const fgRgb = hexToRgb(foregroundHex);
  const bgRgb = hexToRgb(backgroundHex);

  const r = Math.round(
    fgRgb.r * foregroundOpacity + bgRgb.r * (1 - foregroundOpacity)
  );
  const g = Math.round(
    fgRgb.g * foregroundOpacity + bgRgb.g * (1 - foregroundOpacity)
  );
  const b = Math.round(
    fgRgb.b * foregroundOpacity + bgRgb.b * (1 - foregroundOpacity)
  );

  return rgbToHex({ r, g, b });
}
