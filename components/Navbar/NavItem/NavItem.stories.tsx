import { Story, Meta } from '@storybook/react'

import NavItem from './NavItem'
import type { NavItemProps } from './NavItem.types'

export default {
  title: 'Components/Navbar/NavItem',
  component: NavItem,
} as Meta

export const Default: Story<NavItemProps> = (args) => <NavItem {...args} />

Default.args = {
  children: '로그인',
}
