import styled, { css } from "styled-components";

import { Theme, FontWeight, Transition } from "@/foundations";
import { TypoStyle, TypoProps } from "@/components/Typography";

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
  padding: 0 14px 0 16px;
  border-radius: 4px;
  box-sizing: border-box;

  border: 1px solid ${Theme.borderColor.light};
  transition: ${Transition};

  :focus-within,
  :hover {
    border: 1px solid ${Theme.borderColor.primary};
    box-shadow: 0px 0px 8px rgba(122, 215, 255, 0.4);
  }

  ${({ hasError }) => hasError && erroredLayoutStyle}
  ${({ disabled }) => disabled && disabledLayoutStyle}
`;

export const TextField = styled.input`
  width: 100%;
  padding: 0;
  border: none;
  background-color: transparent;

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

  ${({ required }) => !required && optionalLabelStyle}
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

const optionalLabelStyle = css`
  ::after {
    content: " (선택사항)";
    font-weight: ${FontWeight.regular};
  }
`;
