import { getTimeFormat } from './getTimeFormat'
import { range } from './range'

interface CalendarItem {
  year: number
  month: number
  date: number
  today: boolean
  prev: boolean
  next: boolean
}

/**
 * Return array of calendar objects
 *
 * - dateObj - Date object
 * - date - 일
 * - day - 요일
 */

export const generateCalendar = (dateObj: Date): CalendarItem[] => {
  const { year, month, date } = getTimeFormat(dateObj)
  const prevMonthLastDay = getTimeFormat(new Date(year, month, 0))
  const currentMonthFirstDay = getTimeFormat(new Date(year, month, 1))
  const currentMonthLastDay = getTimeFormat(new Date(year, month + 1, 0))
  const nextMonthFirstDay = getTimeFormat(new Date(year, month + 1, 1))

  const prevMonthCalendar = range(currentMonthFirstDay.day, -1, -1).map(
    (d) => ({
      year: prevMonthLastDay.year,
      month: prevMonthLastDay.month,
      date: prevMonthLastDay.date - d + 1,
      today: false,
      prev: true,
      next: false,
    })
  )

  const currentMonthCalendar = range(1, currentMonthLastDay.date + 1).map(
    (d) => ({
      year,
      month,
      date: d,
      today: d === date,
      prev: false,
      next: false,
    })
  )

  const nextMonthCalendar = range(1, 7 - currentMonthLastDay.day).map((d) => ({
    year: nextMonthFirstDay.year,
    month: nextMonthFirstDay.month,
    date: d,
    today: false,
    prev: false,
    next: true,
  }))

  return [...prevMonthCalendar, ...currentMonthCalendar, ...nextMonthCalendar]
}
