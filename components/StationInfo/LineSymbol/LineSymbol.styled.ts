import styled from "styled-components";

import { LineColor } from "../LineColor";
import { FontWeight, Palette } from "@/foundations";

import type { LineName } from "../StationInfo.types";

interface LayoutProps {
  text: LineName;
}

export const Layout = styled.div<LayoutProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  height: 20px;
  width: 20px;
  border-radius: 20px;

  background-color: ${(props) => LineColor[props.text]};
  transform: scale(0.8);
`;

export const LineNumber = styled.span<LayoutProps>`
  font-size: ${(props) => (/^\d/.test(props.text) ? 12.5 : 10)}px;
  font-weight: ${FontWeight.bold};
  color: ${Palette.white};
`;
