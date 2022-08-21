import styled from "styled-components";

import { AvatarColor } from "./AvatarColor";
import type { AvatarColorName } from "./AvatarColor/AvatarColor.types";

interface LayoutProps {
  color: AvatarColorName;
}

export const Layout = styled.div<LayoutProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 45px;
  height: 45px;
  border-radius: 45px;

  background-color: ${({ color }) => AvatarColor[color]};
`;
