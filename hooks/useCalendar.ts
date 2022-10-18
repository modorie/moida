import { useEffect, useState } from 'react'

import { generateCalendar } from '@/utils'

const useCalendar = (date: Date) => {
  const [month, setMonth] = useState(date.getMonth())
  const [year, setYear] = useState(date.getFullYear())
  const [selected, setSelected] = useState<Date[]>([])
  const [calendar, setCalendar] = useState(generateCalendar({ month, year }))

  useEffect(() => {
    setCalendar(generateCalendar({ month, year }))
  }, [month, year])

  const handleSelected = (date: Date) => {
    const isSelected = selected.find((d) => d.getTime() === date.getTime())

    setSelected((prev) =>
      isSelected
        ? prev.filter((d) => d.getTime() !== date.getTime())
        : [...prev, date]
    )
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
    selected,
    setSelected: handleSelected,
  }
}

export default useCalendar
