import React from "react";
import { Story, Meta } from "@storybook/react";

import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default: Story = () => <Header />;
