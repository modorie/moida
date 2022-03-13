import React from "react";
import { Story, Meta } from "@storybook/react";
import FixedButton from "./FixedButton";
import type { FixedButtonProps } from "./FixedButton.types";

export default {
  title: "Components/Buttons/FixedButton",
  component: FixedButton,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default: Story<FixedButtonProps> = (args) => (
  <FixedButton {...args} />
);

Default.args = {
  styleVariant: "primary",
  disabled: false,
  loading: false,
};
