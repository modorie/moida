import styled from "styled-components";
import { Theme } from "@/foundations";

import type IconProps from "./Icon.types";

const Svg = styled.svg<IconProps>`
  flex: 0 0 auto;
  color: ${({ color }) => color && Theme.textColor[color]};
`;

export default Svg;
