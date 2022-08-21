import styled from "styled-components";

import type { TabProps } from "./Tab.types";

export const Layout = styled.div<TabProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;

  height: 50px;
  border-bottom: 2px solid
    ${({ active, theme }) => (active ? theme.color.blue200 : "transparent")};

  color: ${({ active, theme }) =>
    active ? theme.color.blue200 : theme.color.gray500};
  font-weight: ${({ active, theme }) =>
    theme.fontWeight[active ? "bold" : "regular"]};

  cursor: pointer;
  transition: ${({ theme }) => theme.transition};

  :hover {
    color: ${({ active, theme }) =>
      active ? theme.color.blue200 : theme.color.gray700};
  }
`;
