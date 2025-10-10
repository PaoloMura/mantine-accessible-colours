import { Button, Stack, Title } from "@mantine/core";
import VariantInput from "../components/VariantInput";
import ThemeButton from "../components/ThemeButton";

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
    <Stack gap="sm">
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

      <Button
        color="light-dark(black, white)"
        c="light-dark(white, black)"
        onClick={onReset}
      >
        Reset to defaults
      </Button>

      <ThemeButton onToggleTheme={onToggleTheme} />
    </Stack>
  );
}
