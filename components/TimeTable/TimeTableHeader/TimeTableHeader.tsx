import { TimeTableHeaderProps } from '../TimeTable.types'
import { Layout } from './TimeTableHeader.styled'

const TimeTableHeader = ({ selectedDates }: TimeTableHeaderProps) => {
  console.log('selectedDates', selectedDates)
  return <Layout>TimeTableHeader</Layout>
}

export default TimeTableHeader
