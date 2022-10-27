import { generateTimeTable } from '@/utils'

describe('generateTimeTable(dateObj, startTime, endTime) >', () => {
  it('return time table >', () => {
    const timeTable = generateTimeTable(
      [
        {
          id: '2022-01-01',
          year: 2022,
          month: 0,
          date: 1,
          today: false,
          prev: false,
          next: false,
          selected: false,
        },
        {
          id: '2022-01-02',
          year: 2022,
          month: 0,
          date: 2,
          today: false,
          prev: false,
          next: false,
          selected: false,
        },
        {
          id: '2022-01-03',
          year: 2022,
          month: 0,
          date: 3,
          today: false,
          prev: false,
          next: false,
          selected: false,
        },
      ],
      { hour: 10, minute: 0 },
      { hour: 12, minute: 0 }
    )

    expect(timeTable.at(0)).toEqual({
      year: 2022,
      month: 0,
      date: 1,
      totalStartTime: { hour: 10, minute: 0 },
      totalEndTime: { hour: 12, minute: 0 },
      items: [
        {
          startTime: { hour: 10, minute: 0 },
          endTime: { hour: 10, minute: 30 },
          members: [],
          select: false,
        },
        {
          startTime: { hour: 10, minute: 30 },
          endTime: { hour: 11, minute: 0 },
          members: [],
          select: false,
        },
        {
          startTime: { hour: 11, minute: 0 },
          endTime: { hour: 11, minute: 30 },
          members: [],
          select: false,
        },
        {
          startTime: { hour: 11, minute: 30 },
          endTime: { hour: 12, minute: 0 },
          members: [],
          select: false,
        },
      ],
    })
  })
})
