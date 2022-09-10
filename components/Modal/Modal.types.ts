import { ChildrenProps } from '@/types/ComponentProps'

export default interface ModalProps extends ChildrenProps {
  onClickClose?: () => void
}
