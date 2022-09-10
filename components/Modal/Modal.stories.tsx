import { useState } from 'react'
import { Story, Meta } from '@storybook/react'

import { Portal } from '@/components'

import Modal from './Modal'
import type ModalProps from './Modal.types'

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default: Story<ModalProps> = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const onClickClose = () => setIsModalOpen(false)

  return (
    <Portal id="modal-portal">
      {isModalOpen && <Modal {...args} onClickClose={onClickClose} />}
    </Portal>
  )
}

Default.args = {
  children: '비밀번호 재설정이 \n완료되었어요.',
}
