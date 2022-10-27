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

const generateTimeTable = (
  selectedDates: CalendarItem[],
  { hour: startHour, minute: startMinute }: TimeObj,
  { hour: endHour, minute: endMinute }: TimeObj
): TimeTableItem[] => {
  const createItems = (hour: number): HalfHourItem[] => [
    {
      startTime: { hour, minute: 0 },
      endTime: { hour, minute: 30 },
      select: false,
      members: [],
    },
    {
      startTime: { hour, minute: 30 },
      endTime: { hour: hour + 1, minute: 0 },
      select: false,
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
        totalStartTime: { hour: startHour, minute: startMinute },
        totalEndTime: { hour: endHour, minute: endMinute },
        items: range(startHour, endHour).reduce(
          (items, hour) => [...items, ...createItems(hour)],
          [] as HalfHourItem[]
        ),
      },
    ],
    [] as TimeTableItem[]
  )
}

export default generateTimeTable
