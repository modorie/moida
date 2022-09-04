import { Story, Meta } from '@storybook/react'

import ButtonGroup from './ButtonGroup'

import type { ButtonGroupProps } from './ButtonGroup.types'

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
} as Meta

export const Default: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup {...args} />
)

Default.args = {
  label: '중간 장소 추천',
  name: 'group',
  options: [
    {
      id: 'option1',
      label: '필요해요',
      value: 'true',
      defaultChecked: true,
    },
    {
      id: 'option2',
      label: '다음에 받을래요',
      value: 'false',
    },
  ],
}
