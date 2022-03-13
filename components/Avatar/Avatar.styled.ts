import styled from "styled-components";

import { AvatarColor } from "./AvatarColor";
import { TypoStyle } from "../Typography";

import type AvatarColorType from "./Avatar.types";

interface LayoutProps {
  color: AvatarColorType;
}

export const Layout = styled.div<LayoutProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 45px;
  height: 45px;
  border-radius: 45px;

  background-color: ${({ color }) => AvatarColor[color]};
`;

export const Emoji = styled.span`
  font-family: emoji;
  ${TypoStyle}
`;
