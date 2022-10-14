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
  const { year, month } = getTimeFormat(dateObj)
  const prevMonthLastDay = getTimeFormat(new Date(year, month, 0))
  const currentMonthFirstDay = getTimeFormat(new Date(year, month, 1))
  const currentMonthLastDay = getTimeFormat(new Date(year, month + 1, 0))
  const nextMonthFirstDay = getTimeFormat(new Date(year, month + 1, 1))

  const isToday = (year: number, month: number, date: number) => {
    const today = getTimeFormat(new Date())

    return today.year === year && today.month === month && today.date === date
  }

  const prevMonthCalendar: CalendarItem[] = range(
    currentMonthFirstDay.day - 1,
    -1,
    -1
  ).map((d) => ({
    year: prevMonthLastDay.year,
    month: prevMonthLastDay.month,
    date: prevMonthLastDay.date - d,
    today: isToday(
      prevMonthLastDay.year,
      prevMonthLastDay.month,
      prevMonthLastDay.date - d
    ),
    prev: true,
    next: false,
  }))

  const currentMonthCalendar: CalendarItem[] = range(
    1,
    currentMonthLastDay.date + 1
  ).map((d) => ({
    year,
    month,
    date: d,
    today: isToday(year, month, d),
    prev: false,
    next: false,
  }))

  const nextMonthCalendar: CalendarItem[] = range(
    1,
    7 - currentMonthLastDay.day
  ).map((d) => ({
    year: nextMonthFirstDay.year,
    month: nextMonthFirstDay.month,
    date: d,
    today: isToday(nextMonthFirstDay.year, nextMonthFirstDay.month, d),
    prev: false,
    next: true,
  }))

  return [...prevMonthCalendar, ...currentMonthCalendar, ...nextMonthCalendar]
}
