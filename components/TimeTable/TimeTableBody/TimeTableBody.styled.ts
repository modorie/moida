import styled from 'styled-components'

export const Layout = styled.div`
  background-color: pink;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;

  background-color: ${({ theme }) => theme.color.gray200};
`
