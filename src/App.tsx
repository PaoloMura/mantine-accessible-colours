import "@mantine/core/styles.css";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Container,
  createTheme,
  Divider,
  Grid,
  Group,
  MantineProvider,
  Stack,
  Title,
} from "@mantine/core";
import { useState } from "react";
import generateShades from "./lib/generateShades";
import ColourInputSection from "./sections/ColourInputSection";
import VariantSection from "./sections/VariantSection";
import AccessibilitySection from "./sections/AccessibilitySection";
import ShadesSection from "./sections/ShadesSection";
import renderedColor from "./lib/renderedColor";
import OutputSection from "./sections/OutputSection";

const DEFAULT_LIGHT_VARIANTS = {
  filled: {
    shade: 6,
  },
  filledHover: {
    shade: 7,
  },
  light: {
    shade: 6,
    opacity: 0.1,
  },
  lightHover: {
    shade: 6,
    opacity: 0.12,
  },
  lightColor: {
    shade: 6,
  },
  outline: {
    shade: 6,
  },
  outlineHover: {
    shade: 6,
    opacity: 0.05,
  },
};

const DEFAULT_DARK_VARIANTS = {
  filled: {
    shade: 6,
  },
  filledHover: {
    shade: 7,
  },
  light: {
    shade: 6,
    opacity: 0.1,
  },
  lightHover: {
    shade: 6,
    opacity: 0.12,
  },
  lightColor: {
    shade: 6,
  },
  outline: {
    shade: 6,
  },
  outlineHover: {
    shade: 6,
    opacity: 0.05,
  },
};

export default function App() {
  const [hue, setHue] = useState(210);
  const [saturation, setSaturation] = useState(100);
  const [lightVariants, setLightVariants] = useState(DEFAULT_LIGHT_VARIANTS);
  const [darkVariants, setDarkVariants] = useState(DEFAULT_DARK_VARIANTS);
  const [isLightMode, setIsLightMode] = useState(true);

  const shades = generateShades(hue, saturation);

  const handleSetVariant = (
    variant: string,
    shade: number,
    opacity?: number
  ) => {
    if (isLightMode) {
      setLightVariants((prev) => ({
        ...prev,
        [variant]: { shade, opacity },
      }));
    } else {
      setDarkVariants((prev) => ({
        ...prev,
        [variant]: { shade, opacity },
      }));
    }
  };

  const handleResetVariants = () => {
    if (isLightMode) {
      setLightVariants(DEFAULT_LIGHT_VARIANTS);
    } else {
      setDarkVariants(DEFAULT_DARK_VARIANTS);
    }
  };

  const theme = createTheme({
    defaultRadius: "xl",
    colors: {
      newPrimary: shades as [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ],
    },
  });

  return (
    <MantineProvider
      theme={theme}
      cssVariablesResolver={() => ({
        variables: {},
        light: {
          "--mantine-color-newPrimary-filled":
            shades[lightVariants.filled.shade],
          "--mantine-color-newPrimary-filled-hover":
            shades[lightVariants.filledHover.shade],
          "--mantine-color-newPrimary-light": renderedColor(
            lightVariants.light.shade,
            lightVariants.light.opacity,
            shades
          ),
          "--mantine-color-newPrimary-light-hover": renderedColor(
            lightVariants.lightHover.shade,
            lightVariants.lightHover.opacity,
            shades
          ),
          "--mantine-color-newPrimary-light-color":
            shades[lightVariants.lightColor.shade],
          "--mantine-color-newPrimary-outline":
            shades[lightVariants.outline.shade],
          "--mantine-color-newPrimary-outline-hover": renderedColor(
            lightVariants.outlineHover.shade,
            lightVariants.outlineHover.opacity,
            shades
          ),
        },
        dark: {
          "--mantine-color-newPrimary-filled":
            shades[darkVariants.filled.shade],
          "--mantine-color-newPrimary-filled-hover":
            shades[darkVariants.filledHover.shade],
          "--mantine-color-newPrimary-light": renderedColor(
            darkVariants.light.shade,
            darkVariants.light.opacity,
            shades
          ),
          "--mantine-color-newPrimary-light-hover": renderedColor(
            darkVariants.lightHover.shade,
            darkVariants.lightHover.opacity,
            shades
          ),
          "--mantine-color-newPrimary-light-color":
            shades[darkVariants.lightColor.shade],
          "--mantine-color-newPrimary-outline":
            shades[darkVariants.outline.shade],
          "--mantine-color-newPrimary-outline-hover": renderedColor(
            darkVariants.outlineHover.shade,
            darkVariants.outlineHover.opacity,
            shades
          ),
        },
      })}
    >
      <AppShell header={{ height: 85 }}>
        <AppShellHeader>
          <Container py="lg">
            <Title order={1}>Mantine Accessible Colours</Title>
          </Container>
        </AppShellHeader>

        <AppShellMain>
          <Container size="md" py="lg">
            <Stack gap="lg">
              <ColourInputSection
                hue={hue}
                setHue={setHue}
                saturation={saturation}
                setSaturation={setSaturation}
              />

              <Divider />

              <Grid grow>
                <Grid.Col span={{ base: 12, sm: 6, md: 2 }} mb="xl">
                  <Group>
                    <ShadesSection shades={shades} />
                    <Divider orientation="vertical" visibleFrom="sm" />
                  </Group>
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6, md: 4 }} mb="xl">
                  <Group h="100%" align="flex-start">
                    <VariantSection
                      shades={shades}
                      variants={isLightMode ? lightVariants : darkVariants}
                      setVariant={handleSetVariant}
                      onReset={handleResetVariants}
                      onToggleTheme={() => setIsLightMode(!isLightMode)}
                    />
                    <Divider orientation="vertical" visibleFrom="md" />
                  </Group>
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6, md: 3 }} mb="xl">
                  <AccessibilitySection
                    shades={shades}
                    variants={isLightMode ? lightVariants : darkVariants}
                  />
                </Grid.Col>
              </Grid>

              <Divider />

              <OutputSection
                shades={shades}
                lightVariants={lightVariants}
                darkVariants={darkVariants}
              />
            </Stack>
          </Container>
        </AppShellMain>
      </AppShell>
    </MantineProvider>
  );
}
