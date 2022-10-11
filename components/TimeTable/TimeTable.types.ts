import { StandardAttrProps } from '@/types/ComponentProps'
import { TimeTableItem } from '@/utils/generateTimeTable'

export interface TimeTableProps extends StandardAttrProps {
  timeTable: TimeTableItem[]
}
