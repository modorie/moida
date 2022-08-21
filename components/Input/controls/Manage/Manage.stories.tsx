import { Story, Meta } from "@storybook/react";

import Manage from "./Manage";

export default {
  title: "Components/Input/Controls",
  component: Manage,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const ManageItem: Story = (args) => <Manage {...args} />;

ManageItem.storyName = "Manage";
