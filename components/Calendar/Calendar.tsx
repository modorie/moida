import { useState } from 'react'

import { chunk, generateCalendar, getTimeFormat } from '@/utils'

import { Layout } from './Calendar.styled'
import { CalendarProps } from './Calendar.types'

const Calendar = ({ id, className, style }: CalendarProps) => {
  const now = getTimeFormat(new Date())
  const [date, setDate] = useState({ year: now.year, month: now.month })
  const calendar = generateCalendar(date.year, date.month)

  return (
    <Layout id={id} className={className} style={style}>
      <button
        onClick={() => setDate({ year: date.year, month: date.month - 1 })}
      >
        ←
      </button>

      <span>
        {date.year}년 {date.month}월
      </span>

      <button
        onClick={() => setDate({ year: date.year, month: date.month + 1 })}
      >
        →
      </button>

      <div>
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <span key={day}> {day} </span>
        ))}
      </div>
      <div>
        {chunk(calendar, 7).map((week, index) => (
          <div key={index}>
            {week.map((day) => (
              <button key={day.date}> {day.date} </button>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Calendar
