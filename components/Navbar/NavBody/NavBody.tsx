import React from "react";

import { Layout } from "./NavBody.styled";
import { NavItem } from "@/components/Navbar";

import type { NavBodyProps } from "../Navbar.types";

const NavBody = ({ isLogin, topItemsLogin, topItemsLogout }: NavBodyProps) => {
  return (
    <Layout>
      {isLogin
        ? topItemsLogin.map(({ name }) => <NavItem>{name}</NavItem>)
        : topItemsLogout.map(({ name }) => <NavItem>{name}</NavItem>)}
    </Layout>
  );
};

export default NavBody;
