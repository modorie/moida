import React from "react";
import styled from "styled-components";

import AvatarColor, { AvatarColorList } from "./AvatarColor";
import { Typography } from "@/components";

export default {
  title: "Components/Avatar/AvatarColor",
};

interface colorProps {
  color: string;
}

export const AvatarColorTemplate = () => (
  <Layout>
    {AvatarColorList.map((colorKey) => (
      <ColorChip key={colorKey}>
        <ColorTile color={AvatarColor[colorKey]} />
        <Typography size="body2" weight="bold" color="darkest">
          {colorKey}
        </Typography>
        <Typography size="cap1" color="lighter">
          {AvatarColor[colorKey]}
        </Typography>
      </ColorChip>
    ))}
  </Layout>
);

AvatarColorTemplate.storyName = "AvatarColor";

AvatarColorTemplate.parameters = {
  viewport: {
    defaultViewport: "responsive",
  },
};

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
