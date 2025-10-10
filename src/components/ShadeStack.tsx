import { Code, ColorSwatch, Group, Stack, Text, Title } from "@mantine/core";

interface ShadeStackProps {
  shades: string[];
}

const ShadeRow = ({ shade, index }: { shade: string; index: number }) => (
  <Group>
    <Text w={20}>{index}</Text>
    <ColorSwatch color={shade} />
    <Code>{shade}</Code>
  </Group>
);

export default function ShadeStack({ shades }: ShadeStackProps) {
  return (
    <Stack>
      <Title order={3}>Generated Shades</Title>

      {shades.map((shade, index) => (
        <ShadeRow key={shade} shade={shade} index={index} />
      ))}
    </Stack>
  );
}
