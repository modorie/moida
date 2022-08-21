import { Story, Meta } from "@storybook/react";

import MapMark from "./MapMark";

export default {
  title: "Components/MapMark",
  component: MapMark,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default: Story = (args) => <MapMark {...args} />;

Default.args = {
  children: "중간장소",
};
