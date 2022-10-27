import { TimeObj } from '@/components/TimeTable/TimeTable.types'
import { CalendarItem, range } from '@/utils'

export interface TimeTableItem {
  year: number
  month: number
  date: number
  totalStartTime: TimeObj
  totalEndTime: TimeObj
  items: HalfHourItem[]
}

interface HalfHourItem {
  startTime: TimeObj
  endTime: TimeObj
  selected: boolean
  members: string[]
}

/**
 * Return array of time table objects
 *
 * - selectedDate - DateObj[]
 */

const generateTimeTable = (
  selectedDates: CalendarItem[],
  startTime: TimeObj,
  endTime: TimeObj
): TimeTableItem[] => {
  const createItems = (hour: number): HalfHourItem[] => [
    {
      startTime: { hour, minute: 0 },
      endTime: { hour, minute: 30 },
      selected: false,
      members: [],
    },
    {
      startTime: { hour, minute: 30 },
      endTime: { hour: hour + 1, minute: 0 },
      selected: false,
      members: [],
    },
  ]

  return selectedDates.reduce(
    (timeTable, { year, month, date }) => [
      ...timeTable,
      {
        year,
        month,
        date,
        totalStartTime: { hour: startTime.hour, minute: startTime.minute },
        totalEndTime: { hour: endTime.hour, minute: endTime.minute },
        items: range(startTime.hour, endTime.hour).reduce(
          (items, hour) => [...items, ...createItems(hour)],
          [] as HalfHourItem[]
        ),
      },
    ],
    [] as TimeTableItem[]
  )
}

export default generateTimeTable
