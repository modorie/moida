import React from "react";
import styled from "styled-components";

import Theme from "./Theme";
// TODO : Storybook alias
import { FontWeight } from "../../FontWeight";
import { FontSize } from "../../FontSize";

export default {
  title: "Foundations/Color",
  component: Theme,
};

interface PaletteProps {
  color: string;
}

// TODO : any -> 적절한 타입으로 변경
const title: any = {
  bgColor: "배경",
  selectBgColor: "선택",
  borderColor: "테두리",
  textColor: "텍스트",
};

export const ThemeTemplate = () => (
  <>
    {Object.keys(Theme).map((themeType) => (
      <>
        <TypeTitle>{title[themeType]}</TypeTitle>
        <Layout>
          {Object.keys(Theme[themeType]).map((paletteKey) => (
            <ColorChip>
              <ColorTile color={Theme[themeType][paletteKey]} />
              <ColorName>{paletteKey}</ColorName>
              <ColorCode>{Theme[themeType][paletteKey]}</ColorCode>
            </ColorChip>
          ))}
        </Layout>
      </>
    ))}
  </>
);

ThemeTemplate.storyName = "Theme";

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 80px;
`;

const TypeTitle = styled.h3`
  padding-left: 35px;
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
  color: ${Theme.textColor.darkest};
  font-size: ${FontSize.body2}px;
  font-weight: ${FontWeight.bold};
  letter-spacing: 0.03rem;
`;

const ColorCode = styled.span`
  color: ${Theme.textColor.lighter};
  font-size: ${FontSize.cap1}px;
  font-weight: ${FontWeight.bold};
  letter-spacing: 0.03rem;
`;
