import React from "react";
import styled from "styled-components";

import Theme from "./Theme";
import { Typography } from "@/components";

export default {
  title: "Foundations/Color",
  component: Theme,
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
  },
};

interface PaletteProps {
  color: string;
}

const title: { [index: string]: string } = {
  bgColor: "배경",
  selectColor: "선택",
  badgeColor: "뱃지",
  borderColor: "테두리",
  textColor: "텍스트",
  helperBgColor: "도움말 배경",
  helperBorderColor: "도움말 테두리",
};

export const ThemeTemplate = () =>
  Object.keys(Theme).map((themeType) => (
    <React.Fragment key={themeType}>
      <TitleBox>
        <Typography size="h2" weight="bold" color="darkest">
          {title[themeType]}
        </Typography>{" "}
        <Typography color="light">{themeType}</Typography>
      </TitleBox>
      <Layout>
        {Object.keys(Theme[themeType]).map((paletteKey) => (
          <ColorChip key={paletteKey}>
            <ColorTile color={Theme[themeType][paletteKey]} />
            <Typography size="body2" weight="bold" color="darkest">
              {paletteKey}
            </Typography>
            <Typography size="cap1" color="lighter">
              {Theme[themeType][paletteKey]}
            </Typography>
          </ColorChip>
        ))}
      </Layout>
    </React.Fragment>
  ));

ThemeTemplate.storyName = "Theme";

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const TitleBox = styled.div`
  padding-left: 20px;
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
