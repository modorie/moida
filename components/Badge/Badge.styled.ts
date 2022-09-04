import styled from 'styled-components'

import type { BadgeProps } from './Badge.types'

export const Layout = styled.div<BadgeProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 20px;
  border-radius: 20px;
  background-color: ${({ isOngoing, theme }) =>
    theme.color[isOngoing ? 'coral200' : 'gray400']};

  user-select: none;
`
