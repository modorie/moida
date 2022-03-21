import styled, { css } from "styled-components";

import { Theme, Transition } from "@/foundations";
import { TypoStyle, TypoProps } from "@/components/Typography";
import type { CheckBoxProps } from "./CheckBox.types";

export const Layout = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const HiddenCheckBox = styled.input`
  display: none;
`;

export const StyledCheckBox = styled.div<CheckBoxProps>`
  display: inline-block;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  ${({ checked }) =>
    checked
      ? css`
          border: 7px solid ${Theme.borderColor.primary};
        `
      : css`
          border: 1.5px solid ${Theme.borderColor.lighter};
        `}

  ${({ hasError }) =>
    hasError &&
    css`
      border: 1.5px solid ${Theme.borderColor.warning};
    `}

    transition: ${Transition};
`;

export const Label = styled.div<CheckBoxProps & TypoProps>`
  color: ${({ checked }) =>
    checked ? Theme.textColor.dark : Theme.textColor.lighter};

  ${TypoStyle}
`;

export const ErrorText = styled.div<TypoProps>`
  margin-top: 14px;
  color: ${Theme.textColor.warning};

  ${TypoStyle}
`;
