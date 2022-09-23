import { generateTimeTable } from './generateTimeTable'
import { getTimeFormat } from './getTimeFormat'

describe('generateTimeTable(dateObj, startTime, endTime) >', () => {
  it('return time table >', () => {
    const timeTable = generateTimeTable(
      [
        getTimeFormat(new Date('2021-01-01')),
        getTimeFormat(new Date('2021-01-03')),
        getTimeFormat(new Date('2021-01-04')),
      ],
      { hour: 10, minute: 0 },
      { hour: 12, minute: 0 }
    )

    expect(timeTable.at(0)).toEqual({
      year: 2021,
      month: 0,
      date: 1,
      totalStartTime: '10:0',
      totalEndTime: '12:0',
      items: [
        {
          startTime: '10:0',
          endTime: '10:30',
          members: [],
          select: false,
        },
        {
          startTime: '10:30',
          endTime: '11:0',
          members: [],
          select: false,
        },
        {
          startTime: '11:0',
          endTime: '11:30',
          members: [],
          select: false,
        },
        {
          startTime: '11:30',
          endTime: '12:0',
          members: [],
          select: false,
        },
      ],
    })
  })
})
