import { getTimeFormat } from './getTimeFormat'

interface calendarDTO {
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

export const generateCalendar = (dateObj: Date): calendarDTO[] => {
  const { year, month, date } = getTimeFormat(dateObj)
  const prevMonthLastDay = getTimeFormat(new Date(year, month, 0))
  const currentMonthFirstDay = getTimeFormat(new Date(year, month, 1))
  const currentMonthLastDay = getTimeFormat(new Date(year, month + 1, 0))
  const nextMonthFirstDay = getTimeFormat(new Date(year, month + 1, 1))
  const calendar = []

  for (let i = currentMonthFirstDay.day; i > 0; i--) {
    calendar.push({
      year: prevMonthLastDay.year,
      month: prevMonthLastDay.month,
      date: prevMonthLastDay.date - i + 1,
      today: false,
      prev: true,
      next: false,
    })
  }

  for (let i = 1; i <= currentMonthLastDay.date; i++) {
    calendar.push({
      year,
      month,
      date: i,
      today: i === date,
      prev: false,
      next: false,
    })
  }

  for (let i = 1; i <= 6 - currentMonthLastDay.day; i++) {
    calendar.push({
      year: nextMonthFirstDay.year,
      month: nextMonthFirstDay.month,
      date: i,
      today: false,
      prev: false,
      next: true,
    })
  }

  return calendar
}
