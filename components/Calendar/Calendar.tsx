import { Icon } from '@/components'
import { useCalendar } from '@/hooks'
import { chunk } from '@/utils'

import {
  Body,
  Header,
  HeaderButton,
  HeaderTitle,
  Layout,
} from './Calendar.styled'
import { CalendarProps } from './Calendar.types'

const Calendar = ({ id, className, style }: CalendarProps) => {
  const { month, year, calendar, nextMonth, prevMonth, selected, setSelected } =
    useCalendar(new Date())

  const CalendarHeader = () => (
    <Header>
      <HeaderButton onClick={prevMonth}>
        <Icon name="chevron-left" size={23} color="black" />
      </HeaderButton>

      <HeaderTitle>
        {year}년 {month + 1}월
      </HeaderTitle>

      <HeaderButton onClick={nextMonth}>
        <Icon name="chevron-right" size={23} color="black" />
      </HeaderButton>
    </Header>
  )

  const CalendarBody = () => (
    <Body>
      <div>
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <span key={day}> {day} </span>
        ))}
      </div>
      <div>
        {chunk(calendar, 7).map((week, index) => (
          <div key={index}>
            {week.map((day) => (
              <button key={day.date} onClick={() => setSelected(day)}>
                {' '}
                {day.date}{' '}
              </button>
            ))}
          </div>
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
