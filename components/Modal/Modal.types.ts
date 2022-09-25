import { ChildrenProps, StandardAttrProps } from '@/types/ComponentProps'

export interface ModalProps extends ChildrenProps, StandardAttrProps {
  onClickClose?: () => void
}
