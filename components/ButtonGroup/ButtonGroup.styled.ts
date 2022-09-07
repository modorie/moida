import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    border: 1px solid ${({ theme }) => theme.color.gray300};
    border-radius: 4px;
    box-sizing: border-box;
    width: 100%;
    height: 46px;
    top: 1px;
  }
`
