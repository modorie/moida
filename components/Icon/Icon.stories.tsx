import React from "react";
import styled from "styled-components";
import { Story } from "@storybook/react";

import Icon from "./Icon";
import icons from "./assets";
import { FontSize, Palette } from "@/foundations";

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
  // TODO: any 타입 제거하기
  <Layout>
    {Object.keys(icons).map((icon: any) => (
      <IconChip>
        <Icon name={icon} />
        <IconName>{icon}</IconName>
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

const IconName = styled.span`
  color: ${Palette.black};
  font-size: ${FontSize.cap1}px;
  letter-spacing: 0.03rem;
`;
