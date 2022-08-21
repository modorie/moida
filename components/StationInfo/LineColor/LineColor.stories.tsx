import styled from "styled-components";

import { Text } from "@/components";

import LineColor, { lineList } from "./LineColor";

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
      <ColorChip key={colorKey}>
        <ColorTile color={LineColor[colorKey]} />
        <Text size="body2" weight="bold" color="gray900">
          {colorKey}
        </Text>
        <Text size="cap1" color="gray500">
          {LineColor[colorKey]}
        </Text>
      </ColorChip>
    ))}
  </Layout>
);

LineColorTemplate.storyName = "LineColor";

LineColorTemplate.parameters = {
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
