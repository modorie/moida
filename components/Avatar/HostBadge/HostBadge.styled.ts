import styled from "styled-components";

import { Theme } from "@/foundations";

export const Svg = styled.svg`
  position: absolute;
  right: -4px;
  bottom: 2px;

  circle {
    fill: ${Theme.bgColor.primary};
  }

  path {
    fill: ${Theme.bgColor.white};
    stroke: ${Theme.bgColor.white};
  }
`;
