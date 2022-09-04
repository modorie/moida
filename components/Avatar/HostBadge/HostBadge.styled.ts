import styled from 'styled-components'

export const Svg = styled.svg`
  position: absolute;
  right: -4px;
  bottom: 2px;

  circle {
    fill: ${({ theme }) => theme.color.blue200};
  }

  path {
    fill: ${({ theme }) => theme.color.white};
    stroke: ${({ theme }) => theme.color.white};
  }
`
