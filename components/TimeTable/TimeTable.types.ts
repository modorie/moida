import { StandardAttrProps } from '@/types/ComponentProps'
import { CalendarItem, TimeTableItem } from '@/utils'

export interface TimeObj {
  hour: number
  minute: number
}

export interface TimeTableProps extends StandardAttrProps {
  selectedDates: CalendarItem[]
  startTime: TimeObj
  endTime: TimeObj
}

export interface TimeTableLeftProps {
  startHour: number
  endHour: number
}

export interface TimeTableHeaderProps {
  selectedDates: CalendarItem[]
}

export interface TimeTableBodyProps {
  table: TimeTableItem[]
}
