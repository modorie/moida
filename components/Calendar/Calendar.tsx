import { useCalendar } from '@/hooks'
import { chunk } from '@/utils'

import { Layout } from './Calendar.styled'
import { CalendarProps } from './Calendar.types'

const Calendar = ({ id, className, style }: CalendarProps) => {
  const { month, year, calendar, nextMonth, prevMonth, selected, setSelected } =
    useCalendar()

  return (
    <Layout id={id} className={className} style={style}>
      <button onClick={prevMonth}>←</button>

      <span>
        {year}년 {month + 1}월
      </span>

      <button onClick={nextMonth}>→</button>

      <div>
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <span key={day}> {day} </span>
        ))}
      </div>
      <div>
        {chunk(calendar, 7).map((week, index) => (
          <div key={index}>
            {week.map((day) => (
              <button
                key={day.date}
                onClick={() =>
                  setSelected(new Date(day.year, day.month, day.date))
                }
              >
                {' '}
                {day.date}{' '}
              </button>
            ))}
          </div>
        ))}
      </div>

      <h3>selected</h3>
      {selected.map((date) => (
        <div key={date.toISOString()}>
          {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일
        </div>
      ))}
    </Layout>
  )
}

export default Calendar
