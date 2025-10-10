export default function isValidHex(hex: string) {
  const hexRegex = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/;
  return hexRegex.test(hex);
}
