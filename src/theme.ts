import {
  createTheme as createMantineTheme,
  defaultVariantColorsResolver,
  VariantColorsResolver,
} from "@mantine/core";

export type Shades = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);

  if (input.variant === "filled" && input.color === "primary") {
    return {
      ...defaultResolvedColors,
      color: "light-dark(white, black)",
      background: "light-dark(black, white)",
      hover: `light-dark(${input.theme.colors.dark[6]}, ${input.theme.colors.gray[3]})`,
    };
  }

  if (input.variant === "outline" && input.color === "primary") {
    return {
      ...defaultResolvedColors,
      color: "light-dark(black, white)",
      border:
        "calc(0.0625rem * var(--mantine-scale)) solid light-dark(black, white)",
    };
  }

  return defaultResolvedColors;
};

export const createTheme = (shades: Shades) =>
  createMantineTheme({
    defaultRadius: "xl",

    colors: {
      newPrimary: shades,
    },

    headings: {
      sizes: {
        h1: { fontSize: "1.4rem", fontWeight: "700", lineHeight: "1.2" },
        h2: { fontSize: "1.2rem", fontWeight: "700", lineHeight: "1.2" },
        h3: { fontSize: "1rem", fontWeight: "700", lineHeight: "1.2" },
      },
    },

    variantColorResolver,
  });
