import React from "react";

import { Layout } from "./Tab.styled";
import { Typography } from "@/components";

import type { TabProps } from "./Tab.types";

const Tab = ({ children, active, onClick }: TabProps) => (
  <Layout active={active} onClick={onClick}>
    <Typography>{children}</Typography>
  </Layout>
);

export default Tab;
