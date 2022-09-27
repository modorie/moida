import type { DateObj } from './getTimeFormat'
import { range } from './range'

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
  const timeTable: TimeTableItem[] = []

  selectedDates.forEach((dateObj) => {
    const { year, month, date } = dateObj
    const items: HalfHourItem[] = []

    const createItems = (hour: number): HalfHourItem[] => [
      {
        startTime: `${hour}:0`,
        endTime: `${hour}:30`,
        select: false,
        members: [],
      },
      {
        startTime: `${hour}:30`,
        endTime: `${hour + 1}:0`,
        select: false,
        members: [],
      },
    ]

    range(totalStartTime.hour, totalEndTime.hour).forEach((hour) => {
      items.push(...createItems(hour))
    })

    timeTable.push({
      year,
      month,
      date,
      totalStartTime: `${totalStartTime.hour}:${totalStartTime.minute}`,
      totalEndTime: `${totalEndTime.hour}:${totalEndTime.minute}`,
      items,
    })
  })

  return timeTable
}
