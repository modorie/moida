import styled, { css } from "styled-components";

import { Theme, FontWeight } from "@/foundations";
import { TypoStyle } from "@/components/Typography/Typography.styled";

import type TypoProps from "@/components/Typography/Typography.types";

interface LayoutProps {
  hasError?: boolean;
  disabled?: boolean;
}

interface LabelProps {
  required?: boolean;
}

export const Layout = styled.div<LayoutProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 46px;
  padding: 0 16px;
  border-radius: 4px;
  box-sizing: border-box;

  border: 1px solid ${Theme.borderColor.light};
  transition: 0.3s;

  :focus-within,
  :hover {
    border: 1px solid ${Theme.borderColor.primary};
    box-shadow: 0px 0px 8px rgba(122, 215, 255, 0.4);
  }

  ${({ hasError }) => hasError && erroredLayoutStyle}
  ${({ disabled }) => disabled && disabledLayoutStyle}
`;

export const TextField = styled.input`
  border: none;
  width: 100%;
  padding: 0;
  ${TypoStyle}

  ::placeholder {
    color: ${Theme.textColor.lightest};
  }

  :focus {
    outline: none;
  }

  ${({ disabled }) => disabled && disabledTextFieldStyle}
`;

export const Label = styled.span<LabelProps & TypoProps>`
  display: inline-block;
  margin-bottom: 9px;
  ${TypoStyle}

  ${({ required }) =>
    !required &&
    css`
      ::after {
        content: " (선택사항)";
        font-weight: ${FontWeight.regular};
      }
    `}
`;

export const ErrorMsg = styled.span`
  display: block;
  margin-top: 6px;
  ${TypoStyle}
`;

export const Description = styled.span`
  display: block;
  margin: -4px 0 12px 0;
  ${TypoStyle}
`;

const erroredLayoutStyle = css`
  border: 1px solid ${Theme.borderColor.warning};
`;

const disabledLayoutStyle = css`
  border: 1px solid ${Theme.borderColor.light};
  background-color: ${Theme.bgColor.lighter};
  pointer-events: none;
`;

const disabledTextFieldStyle = css`
  background: none;

  ::placeholder {
    color: ${Theme.textColor.lighter};
  }
`;
