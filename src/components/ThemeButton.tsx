import {
  Button,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useEffect } from "react";

interface ThemeButtonProps {
  onToggleTheme: () => void;
}

export default function ThemeButton({ onToggleTheme }: ThemeButtonProps) {
  const computedColourScheme = useComputedColorScheme("light");
  const { setColorScheme } = useMantineColorScheme();

  useEffect(() => {
    setColorScheme('light')
  }, []);

  return (
    <Button
      color="primary"
      variant="outline"
      onClick={() => {
        setColorScheme(computedColourScheme === "dark" ? "light" : "dark");
        onToggleTheme();
      }}
    >
      {computedColourScheme === "dark" ? "Switch to light" : "Switch to dark"}
    </Button>
  );
}
