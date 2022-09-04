import { Story, Meta } from '@storybook/react'

import GpsButton from './GpsButton'

export default {
  title: 'Components/GpsButton',
  component: GpsButton,
  parameters: {
    layout: 'centered',
  },
} as Meta

export const Default: Story = () => <GpsButton />
