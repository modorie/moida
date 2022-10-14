import { generateCalendar } from './generateCalendar'
import { getTimeFormat } from './getTimeFormat'

describe('generateCalendar(dateObj) >', () => {
  it("should return today's calendar >", () => {
    const now = new Date()
    const calendar = generateCalendar(now)
    const { year, month, date } = getTimeFormat(now)

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

  it("should return leap month's calendar >", () => {
    const leapMonth = new Date('2020-02-29')
    const calendar = generateCalendar(leapMonth)

    expect(calendar.filter((obj) => obj.today).at(0)).toEqual({
      year: 2020,
      month: 1,
      date: 29,
      today: true,
      prev: false,
      next: false,
    })

    expect(calendar.at(0)).toEqual({
      year: 2020,
      month: 0,
      date: 26,
      today: false,
      prev: true,
      next: false,
    })

    expect(calendar.at(-1)).toEqual({
      year: 2020,
      month: 1,
      date: 29,
      today: true,
      prev: false,
      next: false,
    })
  })

  it('should return 7*6 or 7*5 calendar >', () => {
    const calendar = generateCalendar(new Date())

    calendar.some((dateObj) => dateObj.next)
      ? expect(calendar.length).toBe(42)
      : expect(calendar.length).toBe(35)
  })
})
