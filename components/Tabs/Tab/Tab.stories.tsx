import { Story, Meta } from "@storybook/react";

import Tab from "./Tab";
import type { TabProps } from "./Tab.types";

export default {
  title: "Components/Tabs/Tab",
  component: Tab,
} as Meta;

export const Default: Story<TabProps> = (args) => <Tab {...args} />;

Default.args = {
  active: true,
  children: "텍스트",
  onClick: () => {},
};

export const Examples = () => (
  <>
    <Tab active>텍스트</Tab>
    <Tab>텍스트</Tab>
  </>
);
