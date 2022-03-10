import React from "react";

import { Layout } from "./NavItem.styled";
import { Typography, Icon } from "@/components";

import type { NavItemProps } from "./NavItem.types";

const NavItem = ({ children }: NavItemProps) => {
  return (
    <Layout>
      <Typography size="body1" weight="bold" color="darkest">
        {children}
      </Typography>
      <Icon name="chevron-right" size={18} color="darkest" />
    </Layout>
  );
};

export default NavItem;
