import styled from "styled-components";
import { Meta } from "@storybook/react";

import FontSize, { fontSizeList } from "./FontSize";
import { FontSizeKey } from "./FontSize.types";

export default {
  title: "Foundations/Font Size",
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
  },
} as Meta;

interface FontWeightProps {
  size: FontSizeKey;
}

export const FontWeightTemplate = () =>
  fontSizeList.map((fontSizeKey) => (
    <Layout size={fontSizeKey} key={fontSizeKey}>
      <Name>{fontSizeKey}</Name>
      <Number>{FontSize[fontSizeKey]}</Number>
      <Text>약속은 간편하게 모임은 한방에</Text>
    </Layout>
  ));

FontWeightTemplate.storyName = "Font Size";

const Layout = styled.div<FontWeightProps>`
  display: flex;
  align-items: center;
  font-size: ${({ size, theme }) => theme.fontSize[size]}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const Name = styled.p`
  width: 150px;
  text-transform: capitalize;
  margin: 1em 0;
`;

const Number = styled.p`
  width: 100px;
  text-transform: capitalize;
  margin: 1em 0;
`;

const Text = styled.p`
  margin: 1em 0;
`;
