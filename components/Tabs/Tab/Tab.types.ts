import { ChildrenProps, StandardAttrProps } from '@/types/ComponentProps'

export interface TabProps extends ChildrenProps, StandardAttrProps {
  active?: boolean
  onClick?: React.MouseEventHandler
}
