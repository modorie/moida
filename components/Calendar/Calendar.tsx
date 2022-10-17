import { useEffect, useState } from 'react'

import { CalendarItem, chunk, generateCalendar, getTimeFormat } from '@/utils'

import { Layout } from './Calendar.styled'
import { CalendarProps } from './Calendar.types'

const Calendar = ({ id, className, style }: CalendarProps) => {
  const now = getTimeFormat(new Date())
  const [date, setDate] = useState<Pick<CalendarItem, 'year' | 'month'>>({
    year: now.year,
    month: now.month,
  })
  const [calendar, setCalendar] = useState(generateCalendar(date))
  const [selected, setSelected] = useState<
    Pick<CalendarItem, 'year' | 'month' | 'date'>[]
  >([])

  const handleSelect = (day: CalendarItem) => {
    const ymd = { year: day.year, month: day.month, date: day.date }

    setSelected((prev) =>
      prev.some((item) => JSON.stringify(item) === JSON.stringify(ymd))
        ? prev.filter((item) => item.date !== ymd.date)
        : [...prev, ymd]
    )
  }

  const handleDate = (type: 'prev' | 'next') => {
    const { year, month } = date
    const newDate = new Date(year, month - 1, 1)

    newDate.setMonth(newDate.getMonth() + (type === 'prev' ? -1 : 1))

    setDate({
      year: newDate.getFullYear(),
      month: newDate.getMonth() + 1,
    })
  }

  useEffect(() => {
    setCalendar(generateCalendar(date))
  }, [date])

  return (
    <Layout id={id} className={className} style={style}>
      <button onClick={() => handleDate('prev')}>←</button>

      <span>
        {date.year}년 {date.month + 1}월
      </span>

      <button onClick={() => handleDate('next')}>→</button>

      <div>
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <span key={day}> {day} </span>
        ))}
      </div>
      <div>
        {chunk(calendar, 7).map((week, index) => (
          <div key={index}>
            {week.map((day) => (
              <button key={day.date} onClick={() => handleSelect(day)}>
                {' '}
                {day.date}{' '}
              </button>
            ))}
          </div>
        ))}
      </div>

      <h3>selected</h3>
      {selected.map(({ year, month, date }) => (
        <span key={`${year}-${month}-${date}`}>
          {year}/{month}/{date},{' '}
        </span>
      ))}
    </Layout>
  )
}

export default Calendar
