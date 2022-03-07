import React from "react";

import Tab from "./Tab";

export default {
  title: "Components/Tabs/Tab",
  component: Tab,
};

export const Default = ({ ...args }) => <Tab {...args} />;

Default.args = {
  active: true,
  children: "텍스트",
  onClick: () => {},
};
