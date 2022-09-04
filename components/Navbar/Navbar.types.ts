import { UserProps } from '@/types/UserProps'

interface itemOptions {
  name: string
  url: string
}

type LoginType = boolean

export interface NavHeaderProps {
  isLogin: LoginType
  user?: UserProps
}

export interface NavBodyProps {
  items: itemOptions[]
}

export interface NavFooterProps {
  isLogin: LoginType
  bottomItems: itemOptions[]
}

interface NavOptions {
  onClickClose?: React.MouseEventHandler
}

export interface NavProps
  extends NavHeaderProps,
    NavBodyProps,
    NavFooterProps,
    NavOptions {
  topItemsLogin: itemOptions[]
  topItemsLogout: itemOptions[]
}
