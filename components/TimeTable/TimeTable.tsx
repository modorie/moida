import { FlexCol, Typography } from '@/components'
import { generateTimeTable, range } from '@/utils'

import { Container } from './TimeTable.styled'
import { TimeTableProps } from './TimeTable.types'

const TimeTable = ({
  selectedDates,
  startTime = { hour: 9, minute: 30 },
  endTime = { hour: 13, minute: 30 },
}: TimeTableProps) => {
  const dummyTable = generateTimeTable(
    [
      {
        id: '2022-01-01',
        year: 2022,
        month: 0,
        date: 1,
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
        today: false,
        prev: false,
        next: false,
        selected: false,
      },
    ],
    { hour: 9, minute: 0 },
    { hour: 15, minute: 0 }
  )

  // const table = generateTimeTable(selectedDates, startTime, endTime)

  console.log(dummyTable)

  window.addEventListener('mousedown', (e) => {
    console.log('omMouseDown')
  })
  window.addEventListener('mouseup', (e) => {
    console.log('omMouseUp')
  })

  return (
    <FlexCol gap={44}>
      {range(startTime.hour, endTime.hour).map((hour) => (
        <Typography key={hour} color="dark">
          {hour > 12 ? `오후 ${hour - 12}` : `오전 ${hour}`}시
        </Typography>
      ))}
    </FlexCol>
  )
}

export default TimeTable
