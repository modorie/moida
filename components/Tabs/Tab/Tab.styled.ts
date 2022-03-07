import styled from "styled-components";

import { Theme, FontWeight } from "@/foundations";

import type { TabProps } from "./Tab.types";

export const Layout = styled.div<TabProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom: 2px solid
    ${({ active }) => (active ? Theme.borderColor.primary : "transparent")};

  color: ${({ active }) => Theme.textColor[active ? "primary" : "lighter"]};
  font-weight: ${({ active }) => FontWeight[active ? "bold" : "regular"]};
`;
