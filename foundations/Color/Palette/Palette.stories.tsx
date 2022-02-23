import React from "react";
import styled from "styled-components";

import Palette from "./";
import { FontSize, FontWeight } from "@/foundations";

export default {
  title: "Foundations/Color",
  component: Palette,
};

interface PaletteProps {
  color: string;
}

export const PaletteTemplate = () => (
  <Layout>
    {Object.keys(Palette).map((paletteKey) => (
      <ColorChip>
        <ColorTile color={Palette[paletteKey]} />
        <ColorName>{paletteKey}</ColorName>
        <ColorCode>{Palette[paletteKey]}</ColorCode>
      </ColorChip>
    ))}
  </Layout>
);

PaletteTemplate.storyName = "Palette";

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ColorChip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 150px;
  height: 150px;
  margin: 10px;
`;

const ColorTile = styled.div<PaletteProps>`
  width: 100px;
  height: 100px;
  margin-bottom: 4px;
  border-radius: 12px;
  background-color: ${({ color }) => color};
`;

const ColorName = styled.span`
  color: ${Palette.gray900};
  font-size: ${FontSize.body2}px;
  font-weight: ${FontWeight.bold};
  letter-spacing: 0.03rem;
`;

const ColorCode = styled.span`
  color: ${Palette.gray500};
  font-size: ${FontSize.cap1}px;
  font-weight: ${FontWeight.bold};
  letter-spacing: 0.03rem;
`;