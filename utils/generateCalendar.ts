import { getTimeFormat, range } from '@/utils'

export interface CalendarItem {
  id: string
  year: number
  month: number
  date: number
  today: boolean
  prev: boolean
  next: boolean
  selected: boolean
}

/**
 * Return array of calendar objects
 *
 * - dateObj - Date object
 * - date - 일
 * - day - 요일
 */

const generateCalendar = ({
  year,
  month,
}: Pick<CalendarItem, 'year' | 'month'>): CalendarItem[] => {
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
    id: `${prevMonthLastDay.year}-${prevMonthLastDay.month + 1}-${String(
      prevMonthLastDay.date - d
    ).padStart(2, '0')}`,
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
    selected: false,
  }))

  const currentMonthCalendar: CalendarItem[] = range(
    1,
    currentMonthLastDay.date + 1
  ).map((d) => ({
    id: `${currentMonthFirstDay.year}-${
      currentMonthFirstDay.month + 1
    }-${String(d).padStart(2, '0')}`,
    year,
    month,
    date: d,
    today: isToday(year, month, d),
    prev: false,
    next: false,
    selected: false,
  }))

  const nextMonthCalendar: CalendarItem[] = range(
    1,
    7 - currentMonthLastDay.day
  ).map((d) => ({
    id: `${nextMonthFirstDay.year}-${nextMonthFirstDay.month + 1}-${String(
      d
    ).padStart(2, '0')}`,
    year: nextMonthFirstDay.year,
    month: nextMonthFirstDay.month,
    date: d,
    today: isToday(nextMonthFirstDay.year, nextMonthFirstDay.month, d),
    prev: false,
    next: true,
    selected: false,
  }))

  return [...prevMonthCalendar, ...currentMonthCalendar, ...nextMonthCalendar]
}

export default generateCalendar
