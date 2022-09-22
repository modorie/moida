import { getTimeFormat } from './getTimeFormat'

export const generateCalendar = (dateObj: Date) => {
  const { year, month, date } = getTimeFormat(dateObj)
  const calendar = []

  const prevMonthLastDay = getTimeFormat(new Date(year, month, 0))
  const prevMonthFirstDay = getTimeFormat(new Date(year, month - 1, 1))
  const currentMonthFirstDay = getTimeFormat(new Date(year, month, 1))
  const currentMonthLastDay = getTimeFormat(new Date(year, month + 1, 0))
  const nextMonthFirstDay = getTimeFormat(new Date(year, month + 1, 1))
  const prevMonthDays = prevMonthLastDay.date
  const thisMonthDays = currentMonthLastDay.date
  const firstDayIndex = currentMonthFirstDay.day
  const lastDayIndex = currentMonthLastDay.day

  console.log('prevMonthLastDay', prevMonthLastDay)
  console.log('prevMonthFirstDay', prevMonthFirstDay)
  console.log('currentMonthFirstDay', currentMonthFirstDay)
  console.log('currentMonthLastDay', currentMonthLastDay)
  console.log('nextMonthFirstDay', nextMonthFirstDay)

  for (let i = firstDayIndex; i > 0; i--) {
    calendar.push({
      date: prevMonthDays - i + 1,
      month: prevMonthFirstDay.month,
      year: prevMonthFirstDay.year,
      today: false,
      prev: true,
      next: false,
    })
  }

  for (let i = 1; i <= thisMonthDays; i++) {
    calendar.push({
      date: i,
      month,
      year,
      today: i === date,
      prev: false,
      next: false,
    })
  }

  for (let i = 1; i <= 6 - lastDayIndex; i++) {
    calendar.push({
      date: i,
      month: nextMonthFirstDay.month,
      year: nextMonthFirstDay.year,
      today: false,
      prev: false,
      next: true,
    })
  }

  return calendar
}
