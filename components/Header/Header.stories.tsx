import React, { useState } from "react";
import styled from "styled-components";
import { Story, Meta } from "@storybook/react";

import Header from "./Header";
import { Navbar } from "@/components";

import type { HeaderProps } from "./Header.types";
import type { NavProps } from "@/components/Navbar/Navbar.types";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default: Story = () => <Header />;

export const WithNavbar: Story<HeaderProps & NavProps> = (args) => {
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);

  const onClickMenu = () => setIsNavbarOpened(true);
  const onClickClose = () => setIsNavbarOpened(false);

  return (
    <Layout>
      <Header onClickMenu={onClickMenu} />
      {isNavbarOpened && <Navbar onClickClose={onClickClose} {...args} />}
    </Layout>
  );
};

WithNavbar.args = {
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

const Layout = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  overflow: hidden;
`;
