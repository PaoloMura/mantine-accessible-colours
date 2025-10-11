import { Button, Group, TextInput } from "@mantine/core";
import { useState } from "react";
import { isValidHex } from "../lib/";

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
    <Group
      justify="space-between"
      align="flex-start"
      gap="xs"
      my="md"
      maw={400}
    >
      <TextInput
        placeholder="#ff0000"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        error={error ? "Invalid hex colour" : null}
        mb="md"
        flex={1}
      />

      <Button variant="filled" color="primary" onClick={handleSubmit} flex={1}>
        Set from Hex
      </Button>
    </Group>
  );
}
