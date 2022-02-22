import React from "react";
import styled from "styled-components";

// TODO : Storybook alias
import { FontWeight } from "./";
import { FontSize } from "../FontSize";

export default {
  title: "Foundations/Font Weight",
  component: FontWeight,
};

interface FontWeightProps {
  fontWeight: number;
}

export const FontWeightTemplate = () =>
  Object.keys(FontWeight).map((fontWeightKey) => (
    <Layout fontWeight={FontWeight[fontWeightKey]}>
      <Name>{fontWeightKey}</Name>
      <Number>{FontWeight[fontWeightKey]}</Number>
      <Text>약속은 간편하게 모임은 한방에</Text>
    </Layout>
  ));

FontWeightTemplate.storyName = "Font Weight";

const Layout = styled.div<FontWeightProps>`
  display: flex;
  align-items: center;

  // TODO : 폰트 패밀리는 글로벌 스타일로 적용해야해요.
  font-family: "Spoqa Han Sans Neo", sans-serif;
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
