import React from "react";
import styled from "styled-components";
import { Meta } from "@storybook/react";

import FontWeight, { fontWeightList } from "./FontWeight";
import { FontSize } from "@/foundations";

export default {
  title: "Foundations/Font Weight",
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
  },
} as Meta;

interface FontWeightProps {
  fontWeight: number;
}

export const FontWeightTemplate = () =>
  fontWeightList.map((fontWeightKey) => (
    <Layout fontWeight={FontWeight[fontWeightKey]} key={fontWeightKey}>
      <Name>{fontWeightKey}</Name>
      <Number>{FontWeight[fontWeightKey]}</Number>
      <Text>약속은 간편하게 모임은 한방에</Text>
    </Layout>
  ));

FontWeightTemplate.storyName = "Font Weight";

const Layout = styled.div<FontWeightProps>`
  display: flex;
  align-items: center;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${FontSize.h1}px;
`;

const Name = styled.p`
  width: 150px;
  text-transform: capitalize;
`;

const Number = styled.p`
  width: 100px;
  text-transform: capitalize;
`;

const Text = styled.p``;
