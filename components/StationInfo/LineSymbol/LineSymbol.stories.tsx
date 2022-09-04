import { Story } from '@storybook/react'

import LineSymbol from './LineSymbol'
import { lineList } from '../LineColor'

import type LineType from './LineSymbol.types'

export default {
  title: 'Components/StationInfo/LineSymbol',
  component: LineSymbol,
  parameters: {
    layout: 'centered',
  },
}

export const Default: Story<LineType> = (args) => <LineSymbol {...args} />

Default.args = {
  name: '01호선',
}

export const Examples = () =>
  lineList.map((name) => <LineSymbol name={name} key={name} />)
