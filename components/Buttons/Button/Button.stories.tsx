import React from "react";
import { Story, Meta } from "@storybook/react";
import Button from "./Button";
import type { ButtonProps } from "./Button.types";

export default {
  title: "Components/Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  styleVariant: "primary",
  disabled: false,
  loading: false,
};
