import React from "react";
import { Story } from "@storybook/react";

import Tabs from "./Tabs";

import type { TabsProps } from "./Tabs.types";

export default {
  title: "Components/Tabs",
  component: Tabs,
};

export const Default: Story<TabsProps> = ({ ...args }) => <Tabs {...args} />;

Default.args = {
  tabItems: ["주 단위로 보기", "일 단위로 보기"],
};
