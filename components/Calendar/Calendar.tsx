import { useCalendar } from '@/hooks'

import { CalendarBody, CalendarHeader } from './'
import { Layout } from './Calendar.styled'
import { CalendarProps } from './Calendar.types'

const Calendar = ({ id, className, style }: CalendarProps) => {
  const { month, year, calendar, nextMonth, prevMonth, handleSelected } =
    useCalendar(new Date())

  return (
    <Layout id={id} className={className} style={style}>
      <CalendarHeader
        month={month}
        year={year}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <CalendarBody calendar={calendar} handleSelected={handleSelected} />
    </Layout>
  )
}

export default Calendar
