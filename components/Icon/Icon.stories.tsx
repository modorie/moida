import React from "react";
import styled from "styled-components";
import { Story } from "@storybook/react";

import Icon from "./Icon";
import { iconList } from "./assets";
import { Typography } from "@/components";

import type IconProps from "./Icon.types";

export default {
  title: "Components/Icon",
  component: Icon,
};

export const Default: Story<IconProps> = ({ ...args }) => <Icon {...args} />;

Default.args = {
  name: "edit",
};

export const Examples = () => (
  <Layout>
    {iconList.map((icon) => (
      <IconChip key={icon}>
        <Icon name={icon} />
        <Typography size="cap1">{icon}</Typography>
      </IconChip>
    ))}
  </Layout>
);

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const IconChip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 100px;
  height: 100px;
`;
