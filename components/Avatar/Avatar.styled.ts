import styled from "styled-components";

import { AvatarColor } from "./AvatarColor";
import { TypoStyle } from "@/components/Typography";

import type AvatarColorType from "./Avatar.types";

interface LayoutProps {
  color: AvatarColorType;
}

export const Layout = styled.div<LayoutProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 45px;
  height: 45px;
  border-radius: 45px;

  background-color: ${({ color }) => AvatarColor[color]};
`;

export const Emoji = styled.span`
  display: inline-block;
  position: relative;
  top: 1px;

  font-family: emoji;
  ${TypoStyle}
`;
