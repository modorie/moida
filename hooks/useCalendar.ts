import { useEffect, useState } from 'react'

import { generateCalendar } from '@/utils'

const useCalendar = () => {
  const date = new Date()
  const [month, setMonth] = useState(date.getMonth())
  const [year, setYear] = useState(date.getFullYear())
  const [selected, setSelected] = useState<Date[]>([])
  const [calendar, setCalendar] = useState(generateCalendar({ month, year }))

  useEffect(() => {
    setCalendar(generateCalendar({ month, year }))
  }, [month, year])

  const handleSelected = (date: Date) => {
    const isSelected = selected.find((d) => d.getTime() === date.getTime())
    if (isSelected) {
      setSelected(selected.filter((d) => d.getTime() !== date.getTime()))
    } else {
      setSelected([...selected, date])
    }
  }

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0)
      setYear(year + 1)
    } else {
      setMonth(month + 1)
    }
  }

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11)
      setYear(year - 1)
    } else {
      setMonth(month - 1)
    }
  }

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
