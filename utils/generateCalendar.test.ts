import { generateCalendar } from './generateCalendar'
import { getTimeFormat } from './getTimeFormat'

describe('generateCalendar(dateObj) >', () => {
  const now = new Date()
  const calendar = generateCalendar(now)
  const { year, month, date } = getTimeFormat(now)

  it('return today object in calendar >', () => {
    expect(calendar.filter((obj) => obj.today === true)).toEqual([
      {
        year,
        month,
        date,
        today: true,
        prev: false,
        next: false,
      },
    ])
  })
})
