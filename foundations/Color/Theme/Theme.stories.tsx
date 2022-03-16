import React from "react";
import styled from "styled-components";
import { Meta } from "@storybook/react";

import Theme from "./Theme";
import { Typography } from "@/components";

export default {
  title: "Foundations/Color",
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
  },
} as Meta;

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
  ButtonBgColor: "버튼 배경",
  ButtonTextColor: "버튼 텍스트",
  ButtonActiveBgColor: "버튼 활성화 배경",
  ButtonActiveTextColor: "버튼 활성화 텍스트",
  ButtonDisableBgColor: "버튼 비활성화 배경",
  ButtonDisableBorderColor: "버튼 비활성화 테두리",
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
