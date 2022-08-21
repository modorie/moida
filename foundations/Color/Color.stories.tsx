import styled from "styled-components";
import { Meta } from "@storybook/react";

import { Typography } from "@/components";

import Color, { colorList } from "./Color";
import { ColorKey } from "./Color.types";

export default {
  title: "Foundations",
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
  },
} as Meta;

interface PaletteProps {
  color: ColorKey;
}

export const PaletteTemplate = () => (
  <Layout>
    {colorList.map((colorKey) => (
      <ColorChip key={colorKey}>
        <ColorTile color={colorKey} />
        <Typography size="body2" weight="bold" color="darkest">
          {colorKey}
        </Typography>
        <Typography size="cap1" color="lighter">
          {Color[colorKey]}
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
  background-color: ${({ theme, color }) => theme.color[color]};
`;
