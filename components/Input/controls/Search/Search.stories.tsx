import React from "react";
import { Story, Meta } from "@storybook/react";

import Search from "./Search";

export default {
  title: "Components/Input/Controls",
  component: Search,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const SearchItem: Story = (args) => <Search {...args} />;

SearchItem.storyName = "Search";
