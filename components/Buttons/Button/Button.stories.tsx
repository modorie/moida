import React from "react";
import { Story, Meta } from "@storybook/react";
import Button from "./Button";
import type { ButtonProps } from "./Button.types";

export default {
  title: "Components/Buttons/Button",
  component: Button,
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
  styleVariant: "primary",
  disabled: false,
  loading: false,
};
