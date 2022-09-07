import styled from 'styled-components'

import Text from '@/components/Text'

export const Layout = styled.div`
  padding: 30px 0;
`

export const Title = styled(Text)`
  margin: 0 0 10px;
`

export const ItemBox = styled.ul`
  margin: 0 0 63px;
  padding: 0;
`

export const Logout = styled.a`
  text-decoration-color: ${({ theme }) => theme.color.gray500};
`
