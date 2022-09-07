import { Icon } from '@/components'

import { NavBody, NavFooter, NavHeader } from './'
import { CloseBox, IconBox, Layout, Overlay } from './Navbar.styled'
import type { NavProps } from './Navbar.types'

const Navbar = ({
  isLogin,
  user,
  topItemsLogin,
  topItemsLogout,
  bottomItems,
  onClickClose,
}: NavProps) => {
  const items = isLogin ? topItemsLogin : topItemsLogout

  return (
    <>
      <Overlay onClick={onClickClose} />
      <Layout>
        <CloseBox>
          <IconBox onClick={onClickClose}>
            <Icon name="x" />
          </IconBox>
        </CloseBox>
        <NavHeader isLogin={isLogin} user={user} />
        <NavBody items={items} />
        <NavFooter isLogin={isLogin} bottomItems={bottomItems} />
      </Layout>
    </>
  )
}

export default Navbar
