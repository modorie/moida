import styled from "styled-components";

import { TypoStyle } from "@/components/Typography";
import { Theme } from "@/foundations";

import type { TypoProps } from "@/components/Typography";
import type { BadgeProps } from "./Badge.types";

export const Layout = styled.div<BadgeProps & TypoProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 20px;
  border-radius: 20px;
  background-color: ${({ isOngoing }) =>
    Theme.badgeColor[isOngoing ? "ongoing" : "closed"]};

  ${TypoStyle}
  color: ${Theme.textColor.white};
  user-select: none;
`;
