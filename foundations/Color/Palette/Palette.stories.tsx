import React from "react";
import styled from "styled-components";

import Palette, { paletteList } from "./Palette";
import { Typography } from "@/components";

export default {
  title: "Foundations/Color",
  component: Palette,
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
  },
};

interface PaletteProps {
  color: string;
}

export const PaletteTemplate = () => (
  <Layout>
    {paletteList.map((paletteKey) => (
      <ColorChip key={paletteKey}>
        <ColorTile color={Palette[paletteKey]} />
        <Typography size="body2" weight="bold" color="darkest">
          {paletteKey}
        </Typography>
        <Typography size="cap1" color="lighter">
          {Palette[paletteKey]}
        </Typography>
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
