import styled from "styled-components";

import type { StyledSvgProps } from "./Icon.types";

const Svg = styled.svg<StyledSvgProps>`
  flex: 0 0 auto;
  color: ${({ color = "gray900", theme }) => theme.color[color]};
`;

export default Svg;
