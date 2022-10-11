import { Meta, Story } from '@storybook/react'

import TimeTable from './TimeTable'
import type { TimeTableProps } from './TimeTable.types'

export default {
  title: 'Components/TimeTable',
  component: TimeTable,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default: Story<TimeTableProps> = (args) => {
  return <TimeTable {...args} />
}

Default.args = {}
