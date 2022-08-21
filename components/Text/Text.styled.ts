import styled, { css } from "styled-components";

import { TitleList } from "@/foundations/FontSize";

import type { TextProps } from "./Text.types";

export const TextStyle = css<TextProps>`
  font-size: ${({ size = "body1", theme }) => theme.fontSize[size]}px;
  font-weight: ${({ weight = "regular", theme }) =>
    weight === "inherit" ? weight : theme.fontWeight[weight]};
  color: ${({ color = "black", theme }) =>
    color === "currentColor" ? color : theme.color[color]};
  line-height: 130%;
  letter-spacing: ${({ size }: any) =>
    TitleList.includes(size) ? "-0.03rem" : "-0.02rem"};
  text-align: ${({ align }) => align};
  white-space: ${({ whiteSpace }) => whiteSpace};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
  user-select: ${({ userSelect }) => userSelect};
  text-overflow: ${({ textOverflow }) => textOverflow};
`;

export const TextView = styled.span<TextProps>`
  ${TextStyle}
`;
