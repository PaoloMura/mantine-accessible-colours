import "@mantine/core/styles.css";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Box,
  Container,
  Divider,
  Grid,
  Group,
  MantineProvider,
  Stack,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { generateShades, renderedColor } from "./lib";
import {
  AccessibilitySection,
  ColourInputSection,
  OutputSection,
  ShadesSection,
  VariantSection,
} from "./sections";
import { DEFAULT_LIGHT_VARIANTS, DEFAULT_DARK_VARIANTS } from "./constants";
import { createTheme, Shades } from "./theme";

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

  const theme = createTheme(shades as Shades);

  return (
    <MantineProvider
      theme={theme}
      cssVariablesResolver={() => ({
        variables: {},
        light: {
          "--mantine-color-newPrimary-text":
            shades[lightVariants.text.shade],
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
          "--mantine-color-newPrimary-text":
            shades[darkVariants.text.shade],
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
            <Stack gap="xl">
              <ColourInputSection
                hue={hue}
                setHue={setHue}
                saturation={saturation}
                setSaturation={setSaturation}
              />

              <Divider />

              <Grid grow>
                <Grid.Col span={{ base: 12, sm: 6, md: 2 }} mb="xl">
                  <Group justify="space-between" h="100%">
                    <ShadesSection shades={shades} />
                    <Divider orientation="vertical" visibleFrom="sm" />
                  </Group>
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6, md: 4 }} mb="xl">
                  <Group justify="center" h="100%">
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
                  <Box maw={326} mx="auto">
                    <AccessibilitySection
                      shades={shades}
                      variants={isLightMode ? lightVariants : darkVariants}
                    />
                  </Box>
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
