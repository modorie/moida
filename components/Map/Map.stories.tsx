import { Meta, Story } from '@storybook/react'

import Map from './Map'
import type { MapProps } from './Map.types'

export default {
  title: 'Components/Map',
  component: Map,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default: Story<MapProps> = (args) => {
  return <Map {...args} />
}

Default.args = {
  latitude: 33.450701,
  longitude: 126.570667,
}
