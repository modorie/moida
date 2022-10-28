import { FlexRow, Typography } from '@/components'

import { TimeTableHeaderProps } from '../TimeTable.types'
import { FlexItem } from './TimeTableHeader.styled'

const TimeTableHeader = ({ selectedDates }: TimeTableHeaderProps) => {
  const dayIndex = ['일', '월', '화', '수', '목', '금', '토']

  return (
    <FlexRow>
      {selectedDates.map(({ id, date, day }) => (
        <FlexItem key={id} align="center">
          <Typography size="cap2" color="lighter">
            {dayIndex[day]}
          </Typography>

          <Typography size="body3">{date}</Typography>
        </FlexItem>
      ))}
    </FlexRow>
  )
}

export default TimeTableHeader
