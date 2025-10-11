import {
  Box,
  ColorSwatch,
  Group,
  Select,
  SelectProps,
  Text,
  TextInput,
  useComputedColorScheme,
} from "@mantine/core";
import { IconCircleHalf2 } from "@tabler/icons-react";
import { renderedColor } from "../lib";
import { DEFAULT_DARK_VARIANTS, DEFAULT_LIGHT_VARIANTS } from "../constants";

interface VariantInputProps {
  name: string;
  shade: number;
  setShade: (shade: number) => void;
  opacity?: number;
  setOpacity: (opacity: number) => void;
  shades: string[];
}

export default function VariantInput({
  name,
  shade,
  setShade,
  opacity,
  setOpacity,
  shades,
}: VariantInputProps) {
  const colorScheme = useComputedColorScheme("light");
  const finalColour = renderedColor(shade, opacity, shades);

  const renderSelectOption: SelectProps["renderOption"] = ({ option }) => (
    <Group flex={1} gap="xs">
      <ColorSwatch color={shades[Number(option.value)]} size={20} radius="xl" />
      <Text>{option.label}</Text>
    </Group>
  );

  const colourMap =
    colorScheme === "dark" ? DEFAULT_DARK_VARIANTS : DEFAULT_LIGHT_VARIANTS;

  const isModified =
    colourMap[name].shade !== shade || colourMap[name].opacity !== opacity;

  return (
    <Group wrap="nowrap" bd={isModified ? "2px solid red" : undefined} p={4} bdrs='md'>
      <Text miw="80">{name}</Text>

      <Select
        value={shade.toString()}
        onChange={(value) => setShade(Number(value))}
        data={Array.from({ length: 10 }, (_, i) => ({
          value: i.toString(),
          label: `${i}`,
        }))}
        renderOption={renderSelectOption}
        leftSection={
          <ColorSwatch color={shades[shade]} size={20} radius="xl" />
        }
        miw="80"
      />

      {opacity !== undefined ? (
        <TextInput
          value={opacity.toString()}
          onChange={(event) =>
            setOpacity(Number(event.currentTarget.value || 0))
          }
          miw="80"
          type="number"
          min={0}
          max={1}
          leftSection={<IconCircleHalf2 size={16} />}
        />
      ) : (
        <Box miw="80" />
      )}

      <ColorSwatch color={finalColour} size={30} radius="md" />
    </Group>
  );
}
