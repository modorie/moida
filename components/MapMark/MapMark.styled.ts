import styled from "styled-components";

import { TypoStyle } from "@/components/Typography";
import { Theme, Palette } from "@/foundations";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 80px;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  height: 35px;
  padding: 0 16px;
  border-radius: 8px;

  /* TODO : Theme.bgColor에 추가 */
  background-color: ${Palette.blue300};
  ${TypoStyle}

  ::before {
    content: "";
    position: absolute;
    top: 0;
    z-index: -1;

    height: 65px;
    width: 0px;
    border-left: 2px solid ${Palette.blue300};
  }
`;

export const Mark = styled.div`
  position: relative;

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
