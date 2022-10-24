import { Icon, Typography } from '@/components'
import { useCalendar } from '@/hooks'
import { chunk } from '@/utils'

import {
  Body,
  BodyHeader,
  BodyTable,
  DateButton,
  Header,
  HeaderButton,
  Layout,
} from './Calendar.styled'
import { CalendarProps } from './Calendar.types'

const Calendar = ({ id, className, style }: CalendarProps) => {
  const { month, year, calendar, nextMonth, prevMonth, selected, setSelected } =
    useCalendar(new Date())

  const CalendarHeader = () => (
    <Header>
      <HeaderButton onClick={prevMonth}>
        <Icon name="chevron-left" size={30} color="black" />
      </HeaderButton>

      <Typography size="sub1" weight="bold">
        {year}년 {month + 1}월
      </Typography>

      <HeaderButton onClick={nextMonth}>
        <Icon name="chevron-right" size={30} color="black" />
      </HeaderButton>
    </Header>
  )

  const CalendarBody = () => (
    <Body>
      <BodyHeader>
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <Typography key={day} size="cap1">
            {day}
          </Typography>
        ))}
      </BodyHeader>
      <div>
        {chunk(calendar, 7).map((week, index) => (
          <BodyTable key={index}>
            {week.map((day) => (
              <DateButton
                key={day.date}
                selected={day.selected}
                onClick={() => setSelected(day)}
              >
                {' '}
                {day.date}{' '}
              </DateButton>
            ))}
          </BodyTable>
        ))}
      </div>
    </Body>
  )

  return (
    <Layout id={id} className={className} style={style}>
      <CalendarHeader />
      <CalendarBody />

      <h3>selected</h3>
      {selected.map(({ id, year, month, date }) => (
        <div key={id}>
          {year}년 {month + 1}월 {date}일
        </div>
      ))}
    </Layout>
  )
}

export default Calendar
