import { Text } from '@/components'
import { NavItem } from '@/components/Navbar'
import type { NavFooterProps } from '@/components/Navbar/Navbar.types'

import { ItemBox, Layout, Logout, Title } from './NavFooter.styled'

const NavFooter = ({ isLogin, bottomItems }: NavFooterProps) => {
  return (
    <Layout>
      <Title size="cap1" weight="regular" color="gray500">
        고객센터
      </Title>
      <ItemBox>
        {bottomItems.map(({ name, url }) => (
          <NavItem key={url}>{name}</NavItem>
        ))}
      </ItemBox>
      {isLogin && (
        <Logout href="">
          <Text size="body2" weight="bold" color="gray500">
            로그아웃
          </Text>
        </Logout>
      )}
    </Layout>
  )
}

export default NavFooter
