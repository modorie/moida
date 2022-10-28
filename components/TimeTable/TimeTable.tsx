import { FlexRow } from '@/components'
import { generateTimeTable } from '@/utils'

import { TimeTableBody, TimeTableHeader, TimeTableLeft } from './'
import { RightBox } from './TimeTable.styled'
import { TimeTableProps } from './TimeTable.types'

const TimeTable = ({
  selectedDates = [
    {
      id: '2022-01-01',
      year: 2022,
      month: 0,
      date: 1,
      day: 6,
      today: false,
      prev: false,
      next: false,
      selected: false,
    },
    {
      id: '2022-01-02',
      year: 2022,
      month: 0,
      date: 2,
      day: 0,
      today: false,
      prev: false,
      next: false,
      selected: false,
    },
    {
      id: '2022-01-03',
      year: 2022,
      month: 0,
      date: 3,
      day: 1,
      today: false,
      prev: false,
      next: false,
      selected: false,
    },
  ],
  startTime = { hour: 9, minute: 30 },
  endTime = { hour: 13, minute: 30 },
}: TimeTableProps) => {
  const dummyTable = generateTimeTable(selectedDates, startTime, endTime)

  // const table = generateTimeTable(selectedDates, startTime, endTime)

  // window.addEventListener('mousedown', (e) => {
  //   console.log('omMouseDown')
  // })
  // window.addEventListener('mouseup', (e) => {
  //   console.log('omMouseUp')
  // })

  return (
    <FlexRow align="stretch">
      <TimeTableLeft startHour={startTime.hour} endHour={endTime.hour} />

      <RightBox>
        <TimeTableHeader selectedDates={selectedDates} />
        <TimeTableBody table={dummyTable} />
      </RightBox>
    </FlexRow>
  )
}

export default TimeTable
