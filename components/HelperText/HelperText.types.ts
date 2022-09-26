import { ChildrenProps, StandardAttrProps } from '@/types/ComponentProps'

export default interface HelperProps extends ChildrenProps, StandardAttrProps {
  color: 'dark' | 'light'
}
