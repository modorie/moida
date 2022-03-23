import React from "react";
import { Story, Meta } from "@storybook/react";

import Emoji from "./Emoji";
import { Typography } from "@/components";

import type EmojiProps from "./Emoji.types";

export default {
  title: "Components/Emoji",
  component: Emoji,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default: Story<EmojiProps> = (args) => <Emoji {...args} />;

Default.args = {
  size: "h1",
  children: "😎",
};

export const WithText: Story<EmojiProps> = ({ size, children }) => (
  <Typography size={size}>
    Text <Emoji>{children}</Emoji>
  </Typography>
);

WithText.args = {
  size: "h1",
  children: "👋",
};
