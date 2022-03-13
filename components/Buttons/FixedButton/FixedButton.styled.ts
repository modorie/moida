import styled, { css } from "styled-components";

import { FontWeight, Theme, Transition } from "@/foundations";

import type { FixedButtonProps } from "./FixedButton.types";
import type { TypoProps } from "@/components/Typography";

export const Layout = styled.div<FixedButtonProps & TypoProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 0;

  width: 100%;
  height: 70px;

  cursor: pointer;

  ${({ styleVariant }) =>
    styleVariant &&
    css`
      background-color: ${Theme.ButtonBgColor[styleVariant]};
      color: ${Theme.ButtonTextColor[styleVariant]};
      border: 1px solid ${Theme.ButtonBorderColor[styleVariant]};
      font-weight: ${styleVariant === "primary"
        ? FontWeight.bold
        : FontWeight.regular};

      :hover,
      :active {
        background-color: ${Theme.ButtonActiveBgColor[styleVariant]};
        color: ${Theme.ButtonActiveTextColor[styleVariant]};
        border: 1px solid ${Theme.ButtonActiveBorderColor[styleVariant]};
        transition: ${Transition};
      }
    `}

  ${({ styleVariant, disabled }) =>
    styleVariant &&
    disabled &&
    css`
      background-color: ${Theme.ButtonDisableBgColor[styleVariant]};
      color: ${Theme.ButtonDisableTextColor[styleVariant]};
      border: 1px solid ${Theme.ButtonDisableBorderColor[styleVariant]};
      pointer-events: none;
    `}
`;

export const LoadingBar = styled.div`
  width: 10px;
  height: 10px;
  border: 1px solid red;
  border-radius: 50%;
`;
