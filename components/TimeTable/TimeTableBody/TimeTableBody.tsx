import { TimeTableBodyProps } from '../TimeTable.types'
import { Layout } from './TimeTableBody.styled'

const TimeTableBody = ({ table }: TimeTableBodyProps) => {
  console.log(table)
  return <Layout>body</Layout>
}

export default TimeTableBody
