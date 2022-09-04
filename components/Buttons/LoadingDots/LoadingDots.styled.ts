import styled from 'styled-components'

export const Layout = styled.div`
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  /* background-color: #9880ff; */
  /* color: #9880ff; */
  animation: dotFlashing 1s infinite linear alternate;
  animation-delay: 0.5s;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }

  &::before {
    left: -14px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    /* background-color: #9880ff;
    color: #9880ff; */
    animation: dotFlashing 1s infinite alternate;
    animation-delay: 0s;
  }

  &::after {
    left: 14px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    /* background-color: #9880ff;
    color: #9880ff; */
    animation: dotFlashing 1s infinite alternate;
    animation-delay: 1s;
  }

  @keyframes dotFlashing {
    0% {
      opacity: 0.8;
      background-color: white;
      color: white;
    }
    50%,
    100% {
      opacity: 1;
    }
  }
`
