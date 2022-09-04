import styled, { css } from 'styled-components'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`

export const LayoutBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
`

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 270px;
  height: 160px;
  padding: 40px 30px 30px 30px;
  border-radius: 6px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  background-color: ${({ theme }) => theme.color.white};
  animation: ${({ theme }) =>
    css`
      ${theme.keyframe.slideInUp} ${theme.transition}
    `};
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`
