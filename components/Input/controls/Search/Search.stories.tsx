import React from "react";
import Search from "./Search";

export default {
  title: "Components/Input/Controls",
  component: Search,
  parameters: {
    layout: "centered",
  },
};

export const SearchItem = ({ ...args }) => <Search {...args} />;

SearchItem.storyName = "Search";
