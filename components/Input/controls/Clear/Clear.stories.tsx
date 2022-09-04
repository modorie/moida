import { Meta, Story } from '@storybook/react'

import Clear from './Clear'

export default {
  title: 'Components/Input/Controls',
  component: Clear,
  parameters: {
    layout: 'centered',
  },
} as Meta

export const ClearItem: Story = () => <Clear />

ClearItem.storyName = 'Clear'
