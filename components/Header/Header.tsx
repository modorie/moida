import React from "react";

import { Logo, Icon } from "@/components";

import { Layout } from "./Header.styled";

const Header = () => {
  return (
    <Layout>
      <Logo height={21} />
      <Icon name="menu" color="black" />
    </Layout>
  );
};

export default Header;
