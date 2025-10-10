import { Box, ColorSwatch, Group, Title } from "@mantine/core";
import Color from "color";
import { HexInput, SliderInput } from "../components";

interface ColourInputSectionProps {
  hue: number;
  setHue: (hue: number) => void;
  saturation: number;
  setSaturation: (saturation: number) => void;
}

export default function ColourInputSection({
  hue,
  setHue,
  saturation,
  setSaturation,
}: ColourInputSectionProps) {
  const handleSetHex = (hex: string) => {
    const color = Color(hex);
    const hsl = color.hsl();
    const [h, s, _] = hsl.array();
    setHue(Math.round(h));
    setSaturation(Math.round(s));
  };

  return (
    <Box>
      <Title order={2} mb="md">Base Colour</Title>

      <HexInput onSubmit={handleSetHex} />

      <Group justify="space-between">
        <Box flex={1}>
          <SliderInput
            label="Hue"
            value={hue}
            onChange={setHue}
            min={0}
            max={360}
          />

          <SliderInput
            label="Saturation"
            value={saturation}
            onChange={setSaturation}
            min={0}
            max={100}
          />
        </Box>

        <ColorSwatch
          color={`hsl(${hue}, ${saturation}%, 50%)`}
          size={80}
          radius="lg"
        />
      </Group>
    </Box>
  );
}
