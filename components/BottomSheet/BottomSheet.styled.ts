import styled, { css } from 'styled-components'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  background-color: rgb(0 0 0 / 0.2);
`

export const Layout = styled.div<{ height: number }>`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100vw;
  height: ${({ height }) => height + 'px'};
  border-radius: 20px 20px 0 0;
  box-shadow: 0 0 20px rgb(0 0 0 / 0.1);

  background-color: ${({ theme }) => theme.color.white};
  animation: ${({ theme }) =>
    css`
      ${theme.keyframe.slideInUp} ${theme.transition}
    `};
`
