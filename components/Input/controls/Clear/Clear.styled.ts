import styled from 'styled-components'

export const Svg = styled.svg`
  cursor: pointer;

  circle {
    fill: ${({ theme }) => theme.color.gray200};
  }

  path {
    stroke: ${({ theme }) => theme.color.gray600};
  }
`
