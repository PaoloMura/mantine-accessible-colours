function rgbToHsl(r: number, g: number, b: number) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  if (max === min) {
    h = 0; // achromatic
  } else if (max === r) {
    h = (60 * (g - b)) / (max - min);
    if (g < b) h += 360;
  } else if (max === g) {
    h = (60 * (b - r)) / (max - min) + 120;
  } else if (max === b) {
    h = (60 * (r - g)) / (max - min) + 240;
  }

  const l = (max + min) / 2;
  const s = max === 0 ? 0 : (max - min) / (1 - Math.abs(2 * l - 1));

  return {
    h: Math.round((h / 360) * 100) / 100, // Convert degrees to 0-1 range
    s: Math.round(s * 100) / 100,
    l: Math.round(l * 100) / 100,
  };
}

export default function hexToHsl(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const { h, s, l } = rgbToHsl(r, g, b);
  return { h, s, l };
}
