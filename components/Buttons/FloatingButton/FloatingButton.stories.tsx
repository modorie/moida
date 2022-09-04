import { Meta, Story } from '@storybook/react'
import React from 'react'

import FloatingButton from './FloatingButton'
import type { FloatingButtonProps } from './FloatingButton.types'

export default {
  title: 'Components/Buttons/FloatingButton',
  component: FloatingButton,
  parameters: {
    layout: 'centered',
  },
} as Meta

export const Default: Story<FloatingButtonProps> = (args) => (
  <FloatingButton {...args} />
)

Default.args = {
  children: '시간 수정',
  disabled: false,
}

export const Examples = () => (
  <>
    <FloatingButton>시간 수정</FloatingButton>
    <br />
    <FloatingButton disabled>시간 수정</FloatingButton>
  </>
)
