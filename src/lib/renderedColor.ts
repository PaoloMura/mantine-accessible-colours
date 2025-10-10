import Color from "color";

export default function renderedColor(
  shade: number,
  opacity: number | undefined,
  shades: string[]
) {
  if (opacity === undefined) {
    return shades[shade];
  }

  const colour = Color(shades[shade]).alpha(opacity);
  return colour.rgb().string();
}
