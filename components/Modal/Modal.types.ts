import { ChildrenProps } from '@/types/ComponentProps'

export interface ModalProps extends ChildrenProps {
  onClickClose?: () => void
}
