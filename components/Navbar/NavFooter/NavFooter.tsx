import React from "react";

import { Layout, Title, ItemBox, Logout } from "./NavFooter.styled";
import { NavItem } from "@/components/Navbar";
import { Typography } from "@/components";

const NavFooter = () => {
  return (
    <Layout>
      <Title size="cap1" color="lighter">
        고객센터
      </Title>
      <ItemBox>
        <NavItem>이용방법</NavItem>
        <NavItem>피드백</NavItem>
        <NavItem>이용약관</NavItem>
      </ItemBox>
      <Logout size="body2" weight="bold" color="lighter" href="">
        로그아웃
      </Logout>
    </Layout>
  );
};

export default NavFooter;
