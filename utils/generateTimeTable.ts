import { DateObj } from './getTimeFormat'

interface TimeTableItem {
  year: number
  month: number
  date: number
  totalStartTime: string
  totalEndTime: string
  items: HalfHourItem[]
}

interface HalfHourItem {
  startTime: string
  endTime: string
  select: boolean
  members: string[]
}

interface TimeObj {
  hour: number
  minute: number
}

/**
 * Return array of time table objects
 *
 * - selectedDate - DateObj[]
 */

export const generateTimeTable = (
  selectedDates: DateObj[],
  totalStartTime: TimeObj,
  totalEndTime: TimeObj
): TimeTableItem[] => {
  const timeTable = []

  for (let i = 0; i < selectedDates.length; i++) {
    const { year, month, date } = selectedDates[i]
    const items = []

    for (let j = totalStartTime.hour; j < totalEndTime.hour; j++) {
      items.push(
        {
          startTime: `${j}:0`,
          endTime: `${j}:30`,
          select: false,
          members: [],
        },
        {
          startTime: `${j}:30`,
          endTime: `${j + 1}:0`,
          select: false,
          members: [],
        }
      )
    }

    timeTable.push({
      year,
      month,
      date,
      totalStartTime: `${totalStartTime.hour}:${totalStartTime.minute}`,
      totalEndTime: `${totalEndTime.hour}:${totalEndTime.minute}`,
      items,
    })
  }

  return timeTable
}
