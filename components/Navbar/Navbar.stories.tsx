import React from "react";
import { Story, Meta } from "@storybook/react";

import Navbar from "./Navbar";

import type { NavProps } from "./Navbar.types";

export default {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default: Story<NavProps> = ({ ...args }) => <Navbar {...args} />;

Default.args = {
  isLogin: false,
  user: {
    id: "haram",
    email: "moida@gmail.com",
    name: "하람",
  },
  topItemsLogin: [
    {
      name: "모임관리",
      url: "/manage",
    },
  ],
  topItemsLogout: [
    {
      name: "로그인",
      url: "/login",
    },
    {
      name: "회원가입",
      url: "/signup",
    },
  ],
  bottomItems: [
    {
      name: "이용방법",
      url: "/how",
    },
    {
      name: "피드백",
      url: "/feedback",
    },
    {
      name: "이용약관",
      url: "/terms",
    },
  ],
};
