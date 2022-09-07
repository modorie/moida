import styled from 'styled-components'

import type HelperProps from './HelperText.types'

export const Layout = styled.div<HelperProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;

  height: 30px;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid
    ${({ color, theme }) =>
      color === 'light' ? theme.color.blue400 : theme.color.blue700};
  background-color: ${({ color, theme }) =>
    color === 'light' ? theme.color.blue200 : theme.color.blue600};
`

export const ArrowBox = styled.div`
  position: absolute;
  top: 100%;
  height: 7px;
  overflow: hidden;
`

export const Arrow = styled.div<HelperProps>`
  position: relative;
  bottom: 6px;

  width: 9px;
  height: 9px;
  border: 1px solid
    ${({ color, theme }) =>
      color === 'light' ? theme.color.blue400 : theme.color.blue700};
  border-radius: 3px;

  background-color: ${({ color, theme }) =>
    color === 'light' ? theme.color.blue200 : theme.color.blue600};
  transform: rotate(45deg) skew(15deg, 15deg);
`
