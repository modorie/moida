import React from "react";
import Clear from "./Clear";

export default {
  title: "Components/Input/Controls",
  component: Clear,
  parameters: {
    layout: "centered",
  },
};

export const ClearItem = ({ ...args }) => <Clear {...args} />;

ClearItem.storyName = "Clear";
