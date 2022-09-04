import { NavItem } from '@/components/Navbar'

import { Layout } from './NavBody.styled'
import type { NavBodyProps } from '../Navbar.types'

const NavBody = ({ items }: NavBodyProps) => {
  return (
    <Layout>
      {items.map(({ name, url }) => (
        <NavItem key={url}>{name}</NavItem>
      ))}
    </Layout>
  )
}

export default NavBody
