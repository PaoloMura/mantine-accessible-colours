import { Button, Group, TextInput } from "@mantine/core";
import { useState } from "react";
import isValidHex from "../lib/isValidHex";

interface HexInputProps {
  onSubmit: (hex: string) => void;
}

export default function HexInput({ onSubmit }: HexInputProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (isValidHex(value)) {
      setError(false);
      onSubmit(value);
    } else {
      setError(true);
    }
  };

  return (
    <Group align="flex-start" my="md">
      <TextInput
        placeholder="#ff0000"
        mb="md"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        error={error ? "Invalid hex colour" : null}
      />

      <Button color="light-dark(black, white)" c="light-dark(white, black)" onClick={handleSubmit}>Set from Hex</Button>
    </Group>
  );
}
