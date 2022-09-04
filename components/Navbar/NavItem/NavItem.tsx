import { Text, Icon } from '@/components'

import { Layout } from './NavItem.styled'
import type { NavItemProps } from './NavItem.types'

const NavItem = ({ children }: NavItemProps) => {
  return (
    <Layout>
      <Text size="sub3" weight="bold" color="gray900">
        {children}
      </Text>
      <Icon name="chevron-right" size={18} color="gray900" />
    </Layout>
  )
}

export default NavItem
