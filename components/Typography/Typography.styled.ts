import styled, { css } from "styled-components";
import { FontSize, FontWeight, Theme } from "@/foundations";

import type TypoProps from "./Typography.types";

export const TypoStyle = css<TypoProps>`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: ${({ size }) => (size ? FontSize[size] : FontSize.body2)}px;
  font-weight: ${({ weight }) => weight && FontWeight[weight]};
  color: ${({ color }) => color && Theme.textColor[color]};
  line-height: 130%;
  letter-spacing: -0.03rem;
`;

const Typography = styled.span<TypoProps>`
  ${TypoStyle}
`;

export default Typography;
