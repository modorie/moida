import { useEffect, useState } from 'react'

import { CalendarItem, generateCalendar } from '@/utils'

const useCalendar = (date: Date) => {
  const [month, setMonth] = useState(date.getMonth())
  const [year, setYear] = useState(date.getFullYear())
  const [selected, setSelected] = useState<CalendarItem[]>([])
  const [calendar, setCalendar] = useState(generateCalendar({ month, year }))
  const sortedSelected = selected.sort((a, b) => (a.id > b.id ? 1 : -1))

  useEffect(() => {
    setCalendar(generateCalendar({ month, year }))
  }, [month, year])

  const handleSelected = (day: CalendarItem) => {
    if (day.prev) prevMonth()
    if (day.next) nextMonth()
    else {
      setSelected((prev) =>
        selected.find((item) => item.id === day.id)
          ? prev.filter((d) => d.id !== day.id)
          : [...prev, { ...day, selected: true }]
      )

      setCalendar((prev) =>
        prev.map((item) =>
          item.id === day.id ? { ...item, selected: !item.selected } : item
        )
      )
    }
  }

  const nextMonth = () =>
    month === 11 ? (setMonth(0), setYear(year + 1)) : setMonth(month + 1)

  const prevMonth = () =>
    month === 0 ? (setMonth(11), setYear(year - 1)) : setMonth(month - 1)

  return {
    month,
    year,
    calendar,
    nextMonth,
    prevMonth,
    selected: sortedSelected,
    setSelected: handleSelected,
  }
}

export default useCalendar
