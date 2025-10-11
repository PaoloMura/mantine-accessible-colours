import { Button, Stack, Title, useComputedColorScheme } from "@mantine/core";
import contrast from "get-contrast";
import color from "color";
import { ComponentResult } from "../components";
import { useState } from "react";

interface AccessibilitySectionProps {
  shades: string[];
  variants: { [key: string]: { shade: number; opacity?: number } };
}

export default function AccessibilitySection({
  shades,
  variants,
}: AccessibilitySectionProps) {
  const [standard, setStandard] = useState<"AA" | "AAA">("AA");
  const computedColourScheme = useComputedColorScheme("light");
  const bgHex = computedColourScheme === "dark" ? "#1A1B1E" : "#ffffff";

  const filledBg = shades[variants.filled.shade];
  const filledColor = "#ffffff";
  const filledContrast =
    Math.round(contrast.ratio(filledColor, filledBg) * 100) / 100;

  const outlineColor = shades[variants.outline.shade];
  const outlineContrast =
    Math.round(contrast.ratio(outlineColor, bgHex) * 100) / 100;

  const lightBg = shades[variants.light.shade];
  const lightBgMixed = color(bgHex)
    .mix(color(lightBg), variants.light.opacity)
    .hex();
  const lightColor = shades[variants.lightColor.shade];
  const lightContrast =
    Math.round(contrast.ratio(lightColor, lightBgMixed) * 100) / 100;

  const defaultBg = computedColourScheme === "dark" ? "#2e2e2e" : "#ffffff";
  const defaultColor = computedColourScheme === "dark" ? "#ffffff" : "#000000";
  const defaultContrast =
    Math.round(contrast.ratio(defaultColor, defaultBg) * 100) / 100;

  const subtleColor = shades[variants.lightColor.shade];
  const subtleContrast =
    Math.round(contrast.ratio(subtleColor, bgHex) * 100) / 100;

  const whiteBg = "#ffffff";
  const whiteColor = shades[variants.filled.shade];
  const whiteContrast =
    Math.round(contrast.ratio(whiteColor, whiteBg) * 100) / 100;

  const textColor = shades[variants.text.shade];
  const textContrast = Math.round(contrast.ratio(textColor, bgHex) * 100) / 100;

  return (
    <Stack gap="lg">
      <Title order={3}>Accessibility ({standard})</Title>
      <ComponentResult
        variant="filled"
        contrastRatio={filledContrast}
        standard={standard}
      />
      <ComponentResult
        variant="outline"
        contrastRatio={outlineContrast}
        standard={standard}
      />
      <ComponentResult
        variant="light"
        contrastRatio={lightContrast}
        standard={standard}
      />
      <ComponentResult
        variant="default"
        contrastRatio={defaultContrast}
        standard={standard}
      />
      <ComponentResult
        variant="subtle"
        contrastRatio={subtleContrast}
        standard={standard}
      />
      <ComponentResult
        variant="white"
        contrastRatio={whiteContrast}
        standard={standard}
      />
      <ComponentResult
        component="text"
        variant="filled"
        contrastRatio={textContrast}
        standard={standard}
      />
      <ComponentResult
        component="title"
        variant="filled"
        contrastRatio={textContrast}
        standard={standard}
      />
      <Button
        variant="outline"
        color="primary"
        onClick={() => setStandard(standard === "AA" ? "AAA" : "AA")}
      >
        Use {standard === "AA" ? "AAA" : "AA"} Standard
      </Button>
    </Stack>
  );
}
