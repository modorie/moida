import { Layout, Overlay } from './BottomSheet.styled'
import type { BottomSheetProps } from './BottomSheet.types'

const BottomSheet = ({
  children,
  height = 300,
  onClickClose,
}: BottomSheetProps) => {
  return (
    <>
      <Overlay onClick={onClickClose} />
      <Layout height={height}>{children}</Layout>
    </>
  )
}

export default BottomSheet
