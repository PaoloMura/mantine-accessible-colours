import { Box, Code, Title } from "@mantine/core";
import { renderedColor } from "../lib";

interface OutputSectionProps {
  shades: string[];
  lightVariants: { [key: string]: { shade: number; opacity?: number } };
  darkVariants: { [key: string]: { shade: number; opacity?: number } };
}

export default function OutputSection({
  shades,
  lightVariants,
  darkVariants,
}: OutputSectionProps) {
  return (
    <Box>
      <Title order={2} mb="md">
        Generated code
      </Title>

      <Code block>
        {JSON.stringify(
          {
            colors: {
              yourColorKeyHere: shades,
            },
          },
          null,
          2
        )}
        {`

cssVariablesResolver: () => ({
  variables: {},
  light: {
    "--mantine-color-yourColorKeyHere-filled": 
      var(--mantine-color-yourColorKeyHere-${lightVariants.filled.shade}),
    "--mantine-color-yourColorKeyHere-filled-hover": 
      var(--mantine-color-yourColorKeyHere-${lightVariants.filledHover.shade}),
    "--mantine-color-yourColorKeyHere-light": ${renderedColor(
      lightVariants.light.shade,
      lightVariants.light.opacity,
      shades
    )},
    "--mantine-color-yourColorKeyHere-light-hover": ${renderedColor(
      lightVariants.lightHover.shade,
      lightVariants.lightHover.opacity,
      shades
    )},
    "--mantine-color-yourColorKeyHere-light-color": 
      var(--mantine-color-yourColorKeyHere-${lightVariants.lightColor.shade}),
    "--mantine-color-yourColorKeyHere-outline": 
      var(--mantine-color-yourColorKeyHere-${lightVariants.outline.shade}),
    "--mantine-color-yourColorKeyHere-outline-hover": ${renderedColor(
      lightVariants.outlineHover.shade,
      lightVariants.outlineHover.opacity,
      shades
    )},
  },
  dark: {
    "--mantine-color-yourColorKeyHere-filled": 
      var(--mantine-color-yourColorKeyHere-${darkVariants.filled.shade}),
    "--mantine-color-yourColorKeyHere-filled-hover": 
      var(--mantine-color-yourColorKeyHere-${darkVariants.filledHover.shade}),
    "--mantine-color-yourColorKeyHere-light": ${renderedColor(
      darkVariants.light.shade,
      darkVariants.light.opacity,
      shades
    )},
    "--mantine-color-yourColorKeyHere-light-hover": ${renderedColor(
      darkVariants.lightHover.shade,
      darkVariants.lightHover.opacity,
      shades
    )},
    "--mantine-color-yourColorKeyHere-light-color": 
      var(--mantine-color-yourColorKeyHere-${darkVariants.lightColor.shade}),
    "--mantine-color-yourColorKeyHere-outline": 
      var(--mantine-color-yourColorKeyHere-${darkVariants.outline.shade}),
    "--mantine-color-yourColorKeyHere-outline-hover": ${renderedColor(
      darkVariants.outlineHover.shade,
      darkVariants.outlineHover.opacity,
      shades
    )},
  },
})
        `}
      </Code>
    </Box>
  );
}
