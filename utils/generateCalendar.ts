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

  const prevMonthCalendar = range(0, currentMonthFirstDay.day, -1).map((i) => ({
    year: prevMonthLastDay.year,
    month: prevMonthLastDay.month,
    date: prevMonthLastDay.date - i + 1,
    today: false,
    prev: true,
    next: false,
  }))

  const currentMonthCalendar = range(1, currentMonthLastDay.date).map((i) => ({
    year: prevMonthLastDay.year,
    month: prevMonthLastDay.month,
    date: prevMonthLastDay.date - i + 1,
    today: false,
    prev: true,
    next: false,
  }))

  const nextMonthCalendar = range(1, 6 - currentMonthLastDay.day).map((i) => ({
    year: nextMonthFirstDay.year,
    month: nextMonthFirstDay.month,
    date: i,
    today: false,
    prev: false,
    next: true,
  }))

  // for (let i = currentMonthFirstDay.day; i > 0; i--) {
  //   calendar.push({
  //     year: prevMonthLastDay.year,
  //     month: prevMonthLastDay.month,
  //     date: prevMonthLastDay.date - i + 1,
  //     today: false,
  //     prev: true,
  //     next: false,
  //   })
  // }

  // for (let i = 1; i <= currentMonthLastDay.date; i++) {
  //   calendar.push({
  //     year,
  //     month,
  //     date: i,
  //     today: i === date,
  //     prev: false,
  //     next: false,
  //   })
  // }

  // for (let i = 1; i <= 6 - currentMonthLastDay.day; i++) {
  //   calendar.push({
  //     year: nextMonthFirstDay.year,
  //     month: nextMonthFirstDay.month,
  //     date: i,
  //     today: false,
  //     prev: false,
  //     next: true,
  //   })
  // }

  return [...prevMonthCalendar, ...currentMonthCalendar, ...nextMonthCalendar]
}
