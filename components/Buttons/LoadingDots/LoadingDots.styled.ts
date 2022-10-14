import styled, { keyframes } from 'styled-components'

import { LoadingDotsProps } from './LoadingDots'

const dotFlashing = keyframes`
    0% {
      opacity: 0.15;
      transform: scale(0.9);
    }

    50%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
`
export const Layout = styled.div<LoadingDotsProps>`
  position: relative;
  height: 8px;

  > span,
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;

    width: 8px;
    height: 8px;
    border-radius: 50%;

    background-color: ${({ color = 'currentColor', theme }) =>
      color === 'currentColor' ? color : theme.color[color]};
    animation: ${dotFlashing} 0.9s infinite linear alternate;
    opacity: 0;
    transform: scale(0.8);
  }

  &::before {
    left: -14px;
    animation-delay: 0s;
  }

  > span {
    left: 0;
    animation-delay: 0.3s;
  }

  &::after {
    left: 14px;
    animation-delay: 0.6s;
  }
`
