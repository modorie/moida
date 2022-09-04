import styled, { css } from 'styled-components'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`

export const Layout = styled.nav`
  position: absolute;
  top: 0;
  right: 0;

  width: 300px;
  height: 100vh;
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.color.white};

  animation: ${({ theme }) =>
    css`
      ${theme.keyframe.slideInLeft} ${theme.transition}
    `};
`

export const CloseBox = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  right: -11px;

  margin-bottom: 66px;
`

export const IconBox = styled.div`
  cursor: pointer;
`
