import { Group, Slider, Text } from "@mantine/core";

interface SliderInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
}

export default function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
}: SliderInputProps) {
  return (
    <Group h={40}>
      <Text w={70}>{label}</Text>
      <Slider
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        marks={[
          { value: min, label: String(min) },
          { value: max, label: String(max) },
        ]}
        thumbLabel={label}
        flex={1}
        color="light-dark(black, white)"
      />
    </Group>
  );
}
