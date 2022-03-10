import styled from "styled-components";

import { Theme } from "@/foundations";

export const Layout = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 64px;
  padding: 0 20px;
  border-bottom: 1px solid ${Theme.borderColor.lightest};

  div {
    display: flex;
    align-items: baseline;
    padding-left: 6px;
  }
`;

export const MenuBox = styled.div`
  cursor: pointer;
`;
