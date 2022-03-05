import React from "react";
import Manage from "./Manage";

export default {
  title: "Components/Input/Controls",
  component: Manage,
  parameters: {
    layout: "centered",
  },
};

export const ManageItem = ({ ...args }) => <Manage {...args} />;

ManageItem.storyName = "Manage";
