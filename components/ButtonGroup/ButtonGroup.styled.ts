import styled from "styled-components";

import { Theme } from "@/foundations";
import { TypoStyle, TypoProps } from "@/components/Typography";

export const Layout = styled.div`
  display: flex;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    border: 1px solid ${Theme.borderColor.light};
    border-radius: 4px;
    box-sizing: border-box;
    width: 100%;
    height: 46px;
    top: 1px;
  }
`;

export const Label = styled.span<TypoProps>`
  display: inline-block;
  margin-bottom: 9px;
  ${TypoStyle}
`;
