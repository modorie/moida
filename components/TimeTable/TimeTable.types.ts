import { StandardAttrProps } from '@/types/ComponentProps'
import { CalendarItem } from '@/utils'

export interface TimeObj {
  hour: number
  minute: number
}

export interface TimeTableProps extends StandardAttrProps {
  selectedDates: CalendarItem[]
  startTime: TimeObj
  endTime: TimeObj
}
