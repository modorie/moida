import React from "react";
import styled from "styled-components";
import { Story } from "@storybook/react";

import Logo from "./Logo";
import { Typography } from "@/components";

import type LogoProps from "./Logo.types";

export default {
  title: "Components/Logo",
  component: Logo,
};

export const Default: Story<LogoProps> = ({ ...args }) => <Logo {...args} />;

Default.args = {
  height: 160,
  wordmark: true,
  symbol: false,
};

Default.argTypes = {
  height: { control: { type: "range", min: 20, max: 200, step: 20 } },
};

export const Examples = () => (
  <Layout>
    <Typography size="sub1" weight="bold">
      워드마크만 있는 경우
    </Typography>
    <Logo height={21} />
    <Logo height={42} />
    <Logo height={63} />
    <br />
    <Typography size="sub1" weight="bold">
      심볼만 있는 경우
    </Typography>
    <Logo symbol wordmark={false} height={21} />
    <Logo symbol wordmark={false} height={42} />
    <Logo symbol wordmark={false} height={63} />
    <br />
    <Typography size="sub1" weight="bold">
      모두 있는 경우
    </Typography>
    <Logo symbol height={21} />
    <Logo symbol height={42} />
    <Logo symbol height={63} />
  </Layout>
);

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
