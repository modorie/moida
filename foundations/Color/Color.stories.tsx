import React from "react";
import styled from "styled-components";
import { Meta } from "@storybook/react";

import Color, { colorList } from "./Color";
import { Typography } from "@/components";

export default {
  title: "Foundations",
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
  },
} as Meta;

interface PaletteProps {
  color: string;
}

export const PaletteTemplate = () => (
  <Layout>
    {colorList.map((paletteKey) => (
      <ColorChip key={paletteKey}>
        <ColorTile color={Color[paletteKey]} />
        <Typography size="body2" weight="bold" color="darkest">
          {paletteKey}
        </Typography>
        <Typography size="cap1" color="lighter">
          {Color[paletteKey]}
        </Typography>
      </ColorChip>
    ))}
  </Layout>
);

PaletteTemplate.storyName = "Color";

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ColorChip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100px;
  height: 120px;
  margin: 10px;
`;

const ColorTile = styled.div<PaletteProps>`
  width: 80px;
  height: 80px;
  margin-bottom: 4px;
  border-radius: 12px;
  background-color: ${({ color }) => color};
`;
