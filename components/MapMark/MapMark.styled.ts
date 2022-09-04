import styled from 'styled-components'

export const Layout = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
`

export const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -48px;
  left: -20px;

  height: 35px;
  padding: 0 16px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color.blue500};

  ::before {
    content: '';
    position: absolute;
    top: 0;
    z-index: -1;

    height: 65px;
    width: 0px;
    border-left: 2px solid ${({ theme }) => theme.color.blue500};
  }
`

export const Mark = styled.div`
  position: absolute;
  top: 13px;
  left: 13px;

  width: 19px;
  height: 19px;
  border-radius: 19px;
  background-color: ${({ theme }) => theme.color.blue200};

  ::after {
    content: '';
    position: absolute;
    transform: translate(-13px, -13px);

    width: 45px;
    height: 45px;
    border-radius: 45px;

    background-color: ${({ theme }) => theme.color.blue200};
    opacity: 0.2;
  }
`
