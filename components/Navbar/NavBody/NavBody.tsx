import { NavItem } from "@/components/Navbar";

import { Layout } from "./NavBody.styled";
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
