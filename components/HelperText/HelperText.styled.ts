import styled from "styled-components";

import { Theme } from "@/foundations";
import { TypoStyle, TypoProps } from "@/components/Typography";

import type HelperProps from "./HelperText.types";

export const Layout = styled.div<HelperProps & TypoProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;

  height: 30px;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid ${({ color }) => Theme.helperBorderColor[color]};
  background-color: ${({ color }) => Theme.helperBgColor[color]};

  ${TypoStyle}
  color: ${Theme.textColor.white};
  white-space: nowrap;
`;

export const ArrowBox = styled.div`
  position: absolute;
  top: 100%;
  height: 7px;
  overflow: hidden;
`;

export const Arrow = styled.div<HelperProps>`
  position: relative;
  bottom: 6px;

  width: 9px;
  height: 9px;
  border: 1px solid ${({ color }) => Theme.helperBorderColor[color]};
  border-radius: 3px;

  background-color: ${({ color }) => Theme.helperBgColor[color]};
  transform: rotate(45deg) skew(15deg, 15deg);
`;
