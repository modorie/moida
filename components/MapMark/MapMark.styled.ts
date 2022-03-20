import styled from "styled-components";

import { TypoStyle } from "@/components/Typography";
import { Theme } from "@/foundations";

export const Layout = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -48px;
  left: -20px;

  height: 35px;
  padding: 0 16px;
  border-radius: 8px;

  background-color: ${Theme.bgColor.point};
  ${TypoStyle}
  white-space: nowrap;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    z-index: -1;

    height: 65px;
    width: 0px;
    border-left: 2px solid ${Theme.bgColor.point};
  }
`;

export const Mark = styled.div`
  position: absolute;
  top: 13px;
  left: 13px;

  width: 19px;
  height: 19px;
  border-radius: 19px;
  background-color: ${Theme.bgColor.primary};

  ::after {
    content: "";
    position: absolute;
    transform: translate(-13px, -13px);

    width: 45px;
    height: 45px;
    border-radius: 45px;

    background-color: ${Theme.bgColor.primary};
    opacity: 0.2;
  }
`;
