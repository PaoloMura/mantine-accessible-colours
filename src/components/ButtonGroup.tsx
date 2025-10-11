import {
  useMantineTheme,
  Group,
  Button,
  Tooltip,
  Text,
  Box,
} from "@mantine/core";
import { IconX, IconCheck } from "@tabler/icons-react";

interface ButtonGroupProps {
  variant: string;
  contrastRatio: number;
}

export default function ButtonGroup({
  variant,
  contrastRatio,
}: ButtonGroupProps) {
  const theme = useMantineTheme();

  return (
    <Group justify="space-between" align="center" gap="xs">
      <Button variant={variant} color="newPrimary" flex={1} miw="160px">
        {variant.charAt(0).toUpperCase() + variant.slice(1)} button
      </Button>

      <Group gap='xs'>
        {contrastRatio < 4.5 ? (
          <Tooltip
            label={`Contrast ratio ${contrastRatio}:1 is below the recommended 4.5:1 for normal text`}
            withArrow
            position="right"
          >
            <IconX color={theme.colors.red[6]} />
          </Tooltip>
        ) : (
          <Tooltip
            label={`Contrast ratio ${contrastRatio}:1 meets the recommended 4.5:1 for normal text`}
            withArrow
            position="right"
          >
            <IconCheck color={theme.colors.green[6]} />
          </Tooltip>
        )}
        <Text>{contrastRatio}</Text>
      </Group>
    </Group>
  );
}
