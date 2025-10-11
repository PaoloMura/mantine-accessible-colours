import {
  Code,
  ColorSwatch,
  CopyButton,
  Group,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";

interface ShadesSectionProps {
  shades: string[];
}

const ShadeRow = ({ shade, index }: { shade: string; index: number }) => (
  <Group>
    <Text w={20}>{index}</Text>
    <CopyButton value={shade} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? "Copied" : "Copy to clipboard"}>
          <ColorSwatch
            color={shade}
            style={{ cursor: "pointer" }}
            onClick={copy}
          />
        </Tooltip>
      )}
    </CopyButton>
    <Code>{shade}</Code>
  </Group>
);

export default function ShadesSection({ shades }: ShadesSectionProps) {
  return (
    <Stack>
      <Title order={3}>Generated Shades</Title>

      {shades.map((shade, index) => (
        <ShadeRow key={shade} shade={shade} index={index} />
      ))}
    </Stack>
  );
}
