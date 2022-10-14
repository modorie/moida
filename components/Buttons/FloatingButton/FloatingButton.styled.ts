import styled, { css } from 'styled-components'

import type { FloatingButtonProps } from './FloatingButton.types'

export const Layout = styled.div<FloatingButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  height: 46px;
  padding: 0 14px;
  box-shadow: 0 2px 10px rgb(143 178 230 / 0.3);

  border: 1px solid ${({ theme }) => theme.color.blue200};
  border-radius: 130px;

  transition: ${({ theme }) => theme.transition};
  cursor: pointer;

  :hover,
  :active {
    background-color: ${({ theme }) => theme.color.blue200};
    color: ${({ theme }) => theme.color.white};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      border: 1px solid ${({ theme }) => theme.color.gray300};
      color: ${({ theme }) => theme.color.gray500};
      pointer-events: none;
    `}
`
