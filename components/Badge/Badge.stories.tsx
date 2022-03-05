import React from "react";
import { Story } from "@storybook/react";

import Badge from "./Badge";
import type { BadgeProps } from "./Badge.types";

export default {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
};

export const Default: Story<BadgeProps> = ({ ...args }) => <Badge {...args} />;

Default.args = {
  isOngoing: true,
};

export const Examples = () => (
  <>
    <Badge isOngoing={true} />
    <Badge isOngoing={false} />
  </>
);
