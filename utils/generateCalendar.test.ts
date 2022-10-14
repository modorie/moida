import { generateCalendar, getTimeFormat } from '@/utils'

describe('generateCalendar(dateObj) >', () => {
  it("should return today's calendar >", () => {
    const { year, month, date } = getTimeFormat(new Date())
    const calendar = generateCalendar({ year, month })

    expect(calendar.filter((obj) => obj.today)).toEqual([
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

  it("should return false if calendar doesn't include today >", () => {
    const past = getTimeFormat(new Date('2001-01-01'))
    const calendar = generateCalendar(past)

    expect(calendar.some((obj) => obj.today)).toBe(false)
  })

  it("should return leap month's calendar >", () => {
    const leapMonth = getTimeFormat(new Date('2020-02-29'))
    const calendar = generateCalendar(leapMonth)

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
      today: false,
      prev: false,
      next: false,
    })
  })

  it('should return 7*6 or 7*5 calendar >', () => {
    const now = getTimeFormat(new Date())
    const calendar = generateCalendar(now)

    calendar.some((dateObj) => dateObj.next)
      ? expect(calendar.length).toBe(42)
      : expect(calendar.length).toBe(35)
  })
})
