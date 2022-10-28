import { FlexCol, Typography } from '@/components'
import { range } from '@/utils'

import { TimeTableLeftProps } from '../TimeTable.types'
import { Layout } from './TimeTableLeft.styled'

const TimeTableLeft = ({ startHour, endHour }: TimeTableLeftProps) => {
  return (
    <Layout>
      <FlexCol gap={44}>
        {range(startHour, endHour).map((hour) => (
          <Typography key={hour} color="dark" size="cap2">
            {hour > 12 ? `오후 ${hour - 12}` : `오전 ${hour}`}시
          </Typography>
        ))}
      </FlexCol>
    </Layout>
  )
}

export default TimeTableLeft
