import styled, { css } from "styled-components";

import { Palette, Theme, Transition } from "@/foundations";

import type { FloatingButtonProps } from "./FloatingButton.types";
import { TypoProps, TypoStyle } from "@/components/Typography";

export const Layout = styled.div<FloatingButtonProps & TypoProps>`
  display: flex;
  align-items: center;
  gap: 6px;

  border: 1px solid ${Theme.textColor.primary};
  border-radius: 130px;

  padding: 10px 16px 10px 14px;

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
