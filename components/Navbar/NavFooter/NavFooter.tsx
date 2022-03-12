import React from "react";

import { Layout, Title, ItemBox, Logout } from "./NavFooter.styled";
import { NavItem } from "@/components/Navbar";

import type { NavFooterProps } from "@/components/Navbar/Navbar.types";

const NavFooter = ({ isLogin, bottomItems }: NavFooterProps) => {
  return (
    <Layout>
      <Title size="cap1" weight="regular" color="lighter">
        고객센터
      </Title>
      <ItemBox>
        {bottomItems.map(({ name }) => (
          <NavItem>{name}</NavItem>
        ))}
      </ItemBox>
      {isLogin && (
        <Logout size="body2" weight="bold" color="lighter" href="">
          로그아웃
        </Logout>
      )}
    </Layout>
  );
};

export default NavFooter;
