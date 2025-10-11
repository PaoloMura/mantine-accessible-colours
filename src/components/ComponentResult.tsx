import { useMantineTheme, Group, Button, Tooltip, Text } from "@mantine/core";
import { IconX, IconCheck } from "@tabler/icons-react";

interface ComponentResultProps {
  component?: "button" | "text" | "title";
  variant: string;
  contrastRatio: number;
  standard: "AA" | "AAA";
}

export default function ComponentResult({
  component = "button",
  variant,
  contrastRatio,
  standard,
}: ComponentResultProps) {
  const theme = useMantineTheme();

  let minContrast = 0;
  let meetsStandard = false;

  if (standard === "AA") {
    if (component === "button" || component === "text") minContrast = 4.5;
    else if (component === "title") minContrast = 3.0;
  } else if (standard === "AAA") {
    if (component === "button" || component === "text") minContrast = 7.0;
    else if (component === "title") minContrast = 4.5;
  }

  meetsStandard = contrastRatio >= minContrast;

  return (
    <Group justify="space-between" align="center" gap="xs">
      {component === "button" && (
        <Button variant={variant} color="newPrimary" flex={1} miw="160px">
          {variant.charAt(0).toUpperCase() + variant.slice(1)} button
        </Button>
      )}

      {component === "text" && (
        <Text c="var(--mantine-color-newPrimary-text)" flex={1} miw="160px">
          Text
        </Text>
      )}

      {component === "title" && (
        <Text c="var(--mantine-color-newPrimary-text)" fz="19px" fw={700}>
          Title
        </Text>
      )}

      {meetsStandard ? (
        <Tooltip
          label={`Contrast ratio ${contrastRatio}:1 meets the recommended ${minContrast}:1 for ${component}${
            component !== "text" ? "s" : ""
          }`}
          withArrow
          position="right"
        >
          <Group justify="space-between" gap="xs" miw={70}>
            <IconCheck color={theme.colors.green[6]} />
            <Text>{contrastRatio}</Text>
          </Group>
        </Tooltip>
      ) : (
        <Tooltip
          label={`Contrast ratio ${contrastRatio}:1 is below the recommended ${minContrast}:1 for ${component}${
            component !== "text" ? "s" : ""
          }`}
          withArrow
          position="right"
        >
          <Group justify="space-between" gap="xs" miw={70}>
            <IconX color={theme.colors.red[6]} />
            <Text>{contrastRatio}</Text>
          </Group>
        </Tooltip>
      )}
    </Group>
  );
}
