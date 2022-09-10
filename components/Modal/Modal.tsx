import { Text } from '@/components'

import { Button, Footer, Layout, LayoutBox, Overlay } from './Modal.styled'
import type ModalProps from './Modal.types'

const Modal = ({ children, onClickClose }: ModalProps) => {
  return (
    <>
      <Overlay />
      <LayoutBox>
        <Layout>
          <Text
            as="div"
            size="sub3"
            weight="bold"
            color="gray900"
            whiteSpace="pre-wrap"
          >
            {children}
          </Text>
          <Footer>
            <Button onClick={onClickClose}>
              <Text size="sub2" weight="bold" color="blue200">
                확인
              </Text>
            </Button>
          </Footer>
        </Layout>
      </LayoutBox>
    </>
  )
}

export default Modal
