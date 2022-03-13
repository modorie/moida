import React from "react";
import { Story, Meta } from "@storybook/react";
import FloatingButton from "./FloatingButton";
import type { FloatingButtonProps } from "./FloatingButton.types";

export default {
  title: "Components/Buttons/FloatingButton",
  component: FloatingButton,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default: Story<FloatingButtonProps> = (args) => (
  <FloatingButton {...args} />
);

Default.args = {
  children: "시간 수정",
  disabled: false,
};
