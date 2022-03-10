import React from "react";

import { Layout, MenuBox } from "./Header.styled";
import { Logo, Icon } from "@/components";

import type { HeaderProps } from "./Header.types";

const Header = ({ onClickMenu }: HeaderProps) => {
  return (
    <Layout>
      <Logo height={21} />
      <MenuBox onClick={onClickMenu}>
        <Icon name="menu" color="black" />
      </MenuBox>
    </Layout>
  );
};

export default Header;
