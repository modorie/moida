import { Icon, Typography } from '@/components'

import { Header, HeaderButton } from './CalendarHeader.styled'

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
    <Header>
      <HeaderButton onClick={prevMonth} aria-label="Previous month">
        <Icon name="chevron-left" size={30} color="black" />
      </HeaderButton>

      <Typography size="sub1" weight="bold">
        {year}년 {month + 1}월
      </Typography>

      <HeaderButton onClick={nextMonth} aria-label="Next month">
        <Icon name="chevron-right" size={30} color="black" />
      </HeaderButton>
    </Header>
  )
}

export default CalendarHeader
