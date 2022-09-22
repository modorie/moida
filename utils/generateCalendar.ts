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
  const calendar = []

  const {
    month: prevMonthNumber,
    year: prevMonthYear,
    date: prevMonthLastDate,
  } = getTimeFormat(new Date(year, month, 0))

  const { day: currentMonthFirstDayIndex } = getTimeFormat(
    new Date(year, month, 1)
  )

  const { date: currentMonthLastDate, day: currentMonthLastDayIndex } =
    getTimeFormat(new Date(year, month + 1, 0))

  const { month: nextMonthNumber, year: nextMonthYear } = getTimeFormat(
    new Date(year, month + 1, 1)
  )

  for (let i = currentMonthFirstDayIndex; i > 0; i--) {
    calendar.push({
      year: prevMonthYear,
      month: prevMonthNumber,
      date: prevMonthLastDate - i + 1,
      today: false,
      prev: true,
      next: false,
    })
  }

  for (let i = 1; i <= currentMonthLastDate; i++) {
    calendar.push({
      year,
      month,
      date: i,
      today: i === date,
      prev: false,
      next: false,
    })
  }

  for (let i = 1; i <= 6 - currentMonthLastDayIndex; i++) {
    calendar.push({
      year: nextMonthYear,
      month: nextMonthNumber,
      date: i,
      today: false,
      prev: false,
      next: true,
    })
  }

  return calendar
}
