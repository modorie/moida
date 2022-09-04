import styled, { css } from 'styled-components'

import { TypoProps, TypoStyle } from '@/components/Typography'
import { Theme, Transition } from '@/foundations'

import type { FloatingButtonProps } from './FloatingButton.types'

export const Layout = styled.div<FloatingButtonProps & TypoProps>`
  display: flex;
  align-items: center;
  gap: 6px;

  padding: 10px 16px 10px 14px;
  box-shadow: 0px 2px 10px rgba(143, 178, 230, 0.3);

  border: 1px solid ${Theme.textColor.primary};
  border-radius: 130px;

  ${TypoStyle}

  cursor: pointer;

  :hover,
  :active {
    background-color: ${Theme.bgColor.primary};
    color: ${Theme.textColor.white};
    path {
      stroke: ${Theme.textColor.white};
    }
    transition: ${Transition};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      border: 1px solid ${Theme.borderColor.light};
      color: ${Theme.textColor.light};
      path {
        stroke: ${Theme.textColor.light};
      }
      pointer-events: none;
    `}
`
