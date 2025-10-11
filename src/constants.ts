export type VariantMap = {
  [key: string]: {
    shade: number;
    opacity?: number;
  };
};

export const DEFAULT_LIGHT_VARIANTS: VariantMap = {
  text: {
    shade: 6,
  },
  filled: {
    shade: 6,
  },
  filledHover: {
    shade: 7,
  },
  light: {
    shade: 6,
    opacity: 0.1,
  },
  lightHover: {
    shade: 6,
    opacity: 0.12,
  },
  lightColor: {
    shade: 6,
  },
  outline: {
    shade: 6,
  },
  outlineHover: {
    shade: 6,
    opacity: 0.05,
  },
};

export const DEFAULT_DARK_VARIANTS: VariantMap = {
  text: {
    shade: 4,
  },
  filled: {
    shade: 8,
  },
  filledHover: {
    shade: 9,
  },
  light: {
    shade: 6,
    opacity: 0.15,
  },
  lightHover: {
    shade: 6,
    opacity: 0.2,
  },
  lightColor: {
    shade: 3,
  },
  outline: {
    shade: 4,
  },
  outlineHover: {
    shade: 4,
    opacity: 0.05,
  },
};
