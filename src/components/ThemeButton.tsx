import {
  Button,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";

interface ThemeButtonProps {
  onToggleTheme: () => void;
}

export default function ThemeButton({ onToggleTheme }: ThemeButtonProps) {
  const computedColourScheme = useComputedColorScheme("light");
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Button
      color="light-dark(black, white)"
      c="light-dark(black, white)"
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
