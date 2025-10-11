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

export const LINK = {
  EAA: "https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en",
  WCAG: "https://www.w3.org/WAI/standards-guidelines/wcag/",
};
