import { Meta, Story } from '@storybook/react'

import Modal from './Modal'
import type ModalProps from './Modal.types'

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default: Story<ModalProps> = (args) => <Modal {...args} />

Default.args = {
  children: '비밀번호 재설정이 \n완료되었어요.',
}
