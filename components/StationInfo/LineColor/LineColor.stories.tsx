import React from "react";
import styled from "styled-components";

import LineColor, { lineList } from "./LineColor";
import { Typography } from "@/components";

export default {
  title: "Components/StationInfo/LineColor",
  component: LineColor,
};

interface colorProps {
  color: string;
}

export const LineColorTemplate = () => (
  <Layout>
    {lineList.map((colorKey) => (
      <ColorChip>
        <ColorTile color={LineColor[colorKey]} />
        <Typography size="body2" weight="bold" color="darkest">
          {colorKey}
        </Typography>
        <Typography size="cap1" color="lighter">
          {LineColor[colorKey]}
        </Typography>
      </ColorChip>
    ))}
  </Layout>
);

LineColorTemplate.storyName = "LineColor";

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

const ColorTile = styled.div<colorProps>`
  width: 80px;
  height: 80px;
  margin-bottom: 4px;
  border-radius: 12px;
  background-color: ${({ color }) => color};
`;
