import Color from "color";

const MIN_L = 10;
const MAX_L = 90;

export default function generateShades(hue: number, saturation: number) {
  const shades = [];

  for (let i = 0; i <= 9; i++) {
    const lightness = MAX_L - (i * (MAX_L - MIN_L)) / 9;
    const colour = Color.hsl(hue, saturation, lightness);
    const hex = colour.hex();
    shades.push(hex);
  }

  return shades;
}
