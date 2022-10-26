import { Icon, Typography } from '@/components'
import { useCalendar } from '@/hooks'
import { chunk } from '@/utils'

import {
  Body,
  BodyHeader,
  CalendarRow,
  DateBox,
  DayBox,
  Divider,
  Header,
  HeaderButton,
  Layout,
} from './Calendar.styled'
import { CalendarProps } from './Calendar.types'

const Calendar = ({ id, className, style }: CalendarProps) => {
  const { month, year, calendar, nextMonth, prevMonth, handleSelected } =
    useCalendar(new Date())

  const CalendarHeader = () => (
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

  const CalendarBody = () => (
    <Body>
      <BodyHeader>
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <DayBox key={day}>
            <Typography size="cap1">{day}</Typography>
          </DayBox>
        ))}
      </BodyHeader>

      <Divider />

      <div>
        {chunk(calendar, 7).map((week, index) => (
          <CalendarRow key={index}>
            {week.map((day) => (
              <DateBox
                key={day.date}
                selected={day.selected}
                today={day.today}
                prev={day.prev}
                next={day.next}
                firstDay={day.date === 1}
                onClick={() => handleSelected(day)}
              >
                {day.date}
              </DateBox>
            ))}
          </CalendarRow>
        ))}
      </div>
    </Body>
  )

  return (
    <Layout id={id} className={className} style={style}>
      <CalendarHeader />
      <CalendarBody />
    </Layout>
  )
}

export default Calendar
