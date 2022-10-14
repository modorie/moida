import styled, { css } from 'styled-components'

import type { ButtonProps } from './Button.types'

export const Layout = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 54px;
  border-radius: 4px;

  transition: ${({ theme }) => theme.transition};
  pointer-events: ${({ loading }) => (loading ? 'none' : 'auto')};
  cursor: pointer;

  ${({ styleVariant = 'primary', theme }) =>
    styleVariant === 'primary'
      ? css`
          border: 1px solid ${theme.color.blue200};
          background-color: ${theme.color.blue200};
          color: ${theme.color.white};

          :hover,
          :active {
            border: 1px solid ${theme.color.blue300};
            background-color: ${theme.color.blue300};
          }

          :disabled {
            border: 1px solid ${theme.color.gray200};
            background-color: ${theme.color.gray200};
            color: ${theme.color.gray400};
            pointer-events: none;
          }
        `
      : css`
          border: 1px solid ${theme.color.blue200};
          background-color: ${theme.color.white};
          color: ${theme.color.blue200};

          /* stylelint-disable no-duplicate-selectors */
          :hover,
          :active {
            border: 1px solid ${theme.color.blue400};
            color: ${theme.color.blue400};
          }

          :disabled {
            border: 1px solid ${theme.color.gray400};
            color: ${theme.color.gray400};
            pointer-events: none;
          }
        `}
`
