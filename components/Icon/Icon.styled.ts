import styled from "styled-components";

import type IconProps from "./Icon.types";

const Svg = styled.svg<IconProps>`
  flex: 0 0 auto;
  color: ${({ color = "gray900", theme }) => theme.color[color]};
`;

export default Svg;
