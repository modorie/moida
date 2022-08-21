import styled from "styled-components";

import Text from "@/components/Text";
import type { LineName } from "@/components/StationInfo";

import { LineColor } from "../LineColor";

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

export const LineNumber = styled(Text)<LayoutProps>`
  font-size: ${(props) => (/^\d/.test(props.text) ? 12.5 : 10)}px;
`;
