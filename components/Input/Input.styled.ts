import styled, { css } from 'styled-components'

import Text, { TextStyle } from '@/components/Text'

interface LayoutProps {
  hasError?: boolean
  disabled?: boolean
}

interface LabelProps {
  required?: boolean
}

export const Layout = styled.label<LayoutProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 46px;
  padding: 0 14px 0 16px;
  border-radius: 4px;
  box-sizing: border-box;

  border: 1px solid ${({ theme }) => theme.color.gray300};
  transition: ${({ theme }) => theme.transition};

  :focus-within,
  :hover {
    border: 1px solid ${({ theme }) => theme.color.blue200};
    box-shadow: 0 0 8px rgb(122 215 255 / 0.4);
  }

  ${({ hasError }) => hasError && erroredLayoutStyle}
  ${({ disabled }) => disabled && disabledLayoutStyle}
`

export const TextField = styled.input`
  width: 100%;
  padding: 0;
  border: none;
  background-color: transparent;

  ${TextStyle}

  ::placeholder {
    color: ${({ theme }) => theme.color.gray400};
  }

  :focus {
    outline: none;
  }

  ${({ disabled }) => disabled && disabledTextFieldStyle}
`

export const Label = styled(Text)<LabelProps>`
  display: inline-block;
  margin-bottom: 9px;

  ${({ required }) => !required && optionalLabelStyle}
`

export const ErrorMsg = styled(Text)`
  display: block;
  margin-top: 6px;
`

export const Description = styled(Text)`
  display: block;
  margin: -4px 0 12px;
`

const erroredLayoutStyle = css`
  border: 1px solid ${({ theme }) => theme.color.coral100};
`

const disabledLayoutStyle = css`
  border: 1px solid ${({ theme }) => theme.color.gray300};
  background-color: ${({ theme }) => theme.color.gray100};
  pointer-events: none;
`

const disabledTextFieldStyle = css`
  background: none;

  ::placeholder {
    color: ${({ theme }) => theme.color.gray500};
  }
`

const optionalLabelStyle = css`
  ::after {
    content: ' (선택사항)';
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`
