import { Box, Button, Modal, Text, Title } from "@mantine/core";
import { LINK } from "../constants";
import { useState } from "react";

export default function DescriptionSection() {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Title order={2} mb="md">
        Description
      </Title>

      <Text mb="sm">
        This tool helps you generate <strong>accessible colour palettes</strong>{" "}
        for your Mantine projects, according to{" "}
        <a href={LINK.WCAG}>WCAG standards</a>. This is important to ensure your
        application is usable to people with <strong>visual impairments</strong>
        , provides a <strong>better experience</strong> for non-visually
        impaired people, and meets <strong>legal requirements</strong> (such as{" "}
        <a href={LINK.EAA}>EAA</a>).
      </Text>

      <Button
        variant="outline"
        color="primary"
        onClick={() => setOpen((o) => !o)}
      >
        How to use
      </Button>

      <Modal opened={open} onClose={() => setOpen(false)} title="How to use">
        <ol>
          <Text component="li" mb="sm">
            Set the <strong>base colour</strong> to lock in the{" "}
            <strong>hue</strong> and <strong>saturation</strong>.
          </Text>

          <Text component="li" mb="sm">
            The tool will generate a set of <strong>10 shades</strong> of this
            colour, covering a spread of <strong>lightness values</strong>.
          </Text>

          <Text component="li" mb="sm">
            Choose which shade to use for <strong>each variant</strong>. Do this
            for <strong>both light and dark modes</strong>.
          </Text>

          <Text component="li" mb="sm">
            The tool will calculate the <strong>contrast ratio</strong> for each
            component and show whether it{" "}
            <strong>meets the selected standard (AA or AAA)</strong>.
          </Text>

          <Text component="li" mb="sm">
            Adjust the <strong>shades</strong> and <strong>variants</strong>{" "}
            until all components <strong>meet the selected standard</strong>.
          </Text>

          <Text component="li" mb="sm">
            Once happy with the result,{" "}
            <strong>copy the generated CSS variables</strong> into your project
            and use the new colour in your Mantine theme.
          </Text>
        </ol>
      </Modal>
    </Box>
  );
}
