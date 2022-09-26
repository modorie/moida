import { ChildrenProps } from '@/types/ComponentProps'

export interface BottomSheetProps extends ChildrenProps {
  height?: number
  onClickClose?: () => void
}
