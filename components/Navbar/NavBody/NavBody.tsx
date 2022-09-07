import { NavItem } from '@/components/Navbar'

import type { NavBodyProps } from '../Navbar.types'
import { Layout } from './NavBody.styled'

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
