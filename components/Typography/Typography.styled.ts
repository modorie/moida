import styled from "styled-components";
import { FontSize, FontWeight, Theme } from "@/foundations";

import type TypoProps from "./Typography.types";

const Text = styled.span<TypoProps>`
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: ${({ size }) => size && FontSize[size]}px;
  font-weight: ${({ weight }) => weight && FontWeight[weight]};
  color: ${({ color }) => color && Theme.textColor[color]};
  line-height: 130%;
  letter-spacing: -0.03rem;
`;

export default Text;
