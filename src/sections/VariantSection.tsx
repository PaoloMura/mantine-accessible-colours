import { Button, ScrollArea, Stack, Title } from "@mantine/core";
import { ThemeButton, VariantInput } from "../components";

type VariantMap = { [key: string]: { shade: number; opacity?: number } };

interface VariantSectionProps {
  shades: string[];
  variants: VariantMap;
  setVariant: (variant: string, shade: number, opacity?: number) => void;
  onReset: () => void;
  onToggleTheme: () => void;
}

export default function VariantSection({
  shades,
  variants,
  setVariant,
  onReset,
  onToggleTheme,
}: VariantSectionProps) {
  return (
    <ScrollArea offsetScrollbars="x" scrollbars={false} w={326}>
      <Stack gap="sm" style={{ overflow: "scroll" }}>
        <Title order={3}>Specify variants</Title>

        {Object.entries(variants).map(([name, { shade, opacity }]) => (
          <VariantInput
            key={name}
            name={name}
            shade={shade}
            setShade={(newShade) => setVariant(name, newShade, opacity)}
            opacity={opacity}
            setOpacity={(newOpacity) => setVariant(name, shade, newOpacity)}
            shades={shades}
          />
        ))}

        <Button color="primary" variant="filled" onClick={onReset}>
          Reset to defaults
        </Button>

        <ThemeButton onToggleTheme={onToggleTheme} />
      </Stack>
    </ScrollArea>
  );
}
