import styled from "styled-components";

import { Theme } from "@/foundations";

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Layout = styled.nav`
  position: fixed;
  right: 0;

  width: 300px;
  height: 100vh;
  padding: 20px 30px;
  background-color: ${Theme.bgColor.white};
`;

export const CloseBox = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  right: -11px;

  margin-bottom: 66px;

  svg {
    cursor: pointer;
  }
`;
