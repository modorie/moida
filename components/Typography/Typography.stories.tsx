import React from "react";
import styled from "styled-components";
import { Story } from "@storybook/react";

import Typography from "./Typography";
import { FontSize } from "@/foundations";
import { fontSizeList } from "@/foundations/FontSize";
import { fontWeightList } from "@/foundations/FontWeight";

import type TypoProps from "./Typography.types";

export default {
  title: "Components/Typography",
  component: Typography,
};

export const Default: Story<TypoProps> = ({ ...args }) => (
  <Typography {...args} />
);

Default.args = {
  children: "약속은 간편하게 모임은 한방에",
  size: "body2",
  weight: "regular",
  color: "black",
};

export const Examples = () =>
  fontSizeList.map((size) =>
    fontWeightList.map((weight) => (
      <Layout key={weight}>
        <Info>
          <Typography size={size} weight={weight}>
            {size}
          </Typography>
        </Info>
        <Weight>
          <Typography size={size} weight={weight}>
            {weight}
          </Typography>
        </Weight>
        <Info>
          <Typography size={size} weight={weight}>
            {FontSize[size]}
          </Typography>
        </Info>
        <Typography size={size} weight={weight}>
          약속은 간편하게 모임은 한방에
        </Typography>
      </Layout>
    ))
  );

const Layout = styled.div`
  display: flex;
  align-items: center;
`;

const Info = styled.p`
  width: 100px;
  text-transform: capitalize;
`;

const Weight = styled.p`
  width: 150px;
  text-transform: capitalize;
`;
