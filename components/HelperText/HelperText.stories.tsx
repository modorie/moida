import React from "react";
import styled from "styled-components";
import { Story } from "@storybook/react";

import HelperText from "./HelperText";

import type HelperProps from "./HelperText.types";

export default {
  title: "Components/HelperText",
  component: HelperText,
};

export const Default: Story<HelperProps> = ({ ...args }) => (
  <HelperText {...args} />
);

Default.args = {
  children: "텍스트",
  color: "light",
};

export const Examples = () => (
  <Layout>
    <HelperText children="하람" color="light" />
    <HelperText children="중간장소" color="dark" />
  </Layout>
);

const Layout = styled.div`
  display: flex;
  gap: 10px;
`;
