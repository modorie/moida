import React from "react";
import styled from "styled-components";

import { FontSize, FontWeight } from "@/foundations";

export default {
  title: "Foundations/Font Size",
  component: FontSize,
};

interface FontWeightProps {
  fontSize: number;
}

export const FontWeightTemplate = () =>
  Object.keys(FontSize).map((fontSizeKey) => (
    <Layout fontSize={FontSize[fontSizeKey]}>
      <Name>{fontSizeKey}</Name>
      <Number>{FontSize[fontSizeKey]}</Number>
      <Text>약속은 간편하게 모임은 한방에</Text>
    </Layout>
  ));

FontWeightTemplate.storyName = "Font Size";

const Layout = styled.div<FontWeightProps>`
  display: flex;
  align-items: center;

  // TODO : 폰트 패밀리는 글로벌 스타일로 적용해야해요.
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: ${FontWeight.regular};
  font-size: ${({ fontSize }) => fontSize}px;
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
