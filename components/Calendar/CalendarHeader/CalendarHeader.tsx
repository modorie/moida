import { Icon, Typography } from '@/components'

import { Layout, MonthButton } from './CalendarHeader.styled'

interface CalendarHeaderProps {
  month: number
  year: number
  nextMonth: () => void
  prevMonth: () => void
}

const CalendarHeader = ({
  month,
  year,
  prevMonth,
  nextMonth,
}: CalendarHeaderProps) => {
  return (
    <Layout>
      <MonthButton onClick={prevMonth} aria-label="Previous month">
        <Icon name="chevron-left" size={30} color="black" />
      </MonthButton>

      <Typography size="sub1" weight="bold">
        {year}년 {month + 1}월
      </Typography>

      <MonthButton onClick={nextMonth} aria-label="Next month">
        <Icon name="chevron-right" size={30} color="black" />
      </MonthButton>
    </Layout>
  )
}

export default CalendarHeader
