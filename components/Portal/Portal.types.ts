import { ChildrenProps } from '@/types/ComponentProps'

export interface PortalProps extends ChildrenProps {
  id: `${string}-portal`
  element?: keyof HTMLElementTagNameMap
}
