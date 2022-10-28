import { FlexCol } from '@/components'

import { TimeTableBodyProps } from '../TimeTable.types'
import { Divider } from './TimeTableBody.styled'

const TimeTableBody = ({ table }: TimeTableBodyProps) => {
  const TableCol = (col) => <div>hello</div>

  return (
    <FlexCol gap={3}>
      {table.map((col) => (
        <TableCol col={col} />
      ))}
    </FlexCol>
  )
}

export default TimeTableBody
