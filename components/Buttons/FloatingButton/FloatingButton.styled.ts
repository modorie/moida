import styled, { css } from "styled-components";

import { Palette, Transition } from "@/foundations";

import type { FloatingButtonProps } from "./FloatingButton.types";
import { TypoProps, TypoStyle } from "@/components/Typography";

export const Layout = styled.div<FloatingButtonProps & TypoProps>`
  display: flex;
  align-items: center;
  gap: 9px;

  border: 1px solid ${Palette.blue100};
  border-radius: 130px;

  padding: 13px 17px 13px 14px;

  box-shadow: 0px 2px 10px rgba(143, 178, 230, 0.3);

  ${TypoStyle}

  cursor: pointer;

  :hover,
  :active {
    background-color: ${Palette.blue100};
    color: ${Palette.white};
    path {
      stroke: ${Palette.white};
    }
    transition: ${Transition};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      border: 1px solid ${Palette.gray300};
      color: ${Palette.gray600};
      path {
        stroke: ${Palette.gray600};
      }
      pointer-events: none;
    `}
`;
