import { DateObj, range } from '@/utils'

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

const generateTimeTable = (
  selectedDates: DateObj[],
  { hour: startHour, minute: startMinute }: TimeObj,
  { hour: endHour, minute: endMinute }: TimeObj
): TimeTableItem[] => {
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

  return selectedDates.reduce(
    (timeTable, { year, month, date }) => [
      ...timeTable,
      {
        year,
        month,
        date,
        totalStartTime: `${startHour}:${startMinute}`,
        totalEndTime: `${endHour}:${endMinute}`,
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
