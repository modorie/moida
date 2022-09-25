import { Icon, Logo } from '@/components'

import { Layout, MenuBox } from './Header.styled'
import type { HeaderProps } from './Header.types'

const Header = ({ onClickMenu, id, className, style }: HeaderProps) => {
  return (
    <Layout id={id} className={className} style={style}>
      <Logo height={21} />
      <MenuBox onClick={onClickMenu}>
        <Icon name="menu" color="black" />
      </MenuBox>
    </Layout>
  )
}

export default Header
