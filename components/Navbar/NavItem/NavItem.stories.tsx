import React from "react";

import NavItem from "./NavItem";

export default {
  title: "Components/Navbar/NavItem",
  component: NavItem,
};

export const Default = ({ ...args }) => <NavItem {...args} />;

Default.args = {
  children: "로그인",
};
