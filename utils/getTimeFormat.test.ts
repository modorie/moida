import { getTimeFormat } from './getTimeFormat'

describe('getTimeFormat(date) >', () => {
  const now = new Date()
  const { year, month, date, day, hour, min, sec, ms, totalMs } =
    getTimeFormat(now)

  it('return object of time formats >', () => {
    expect(year).toBe(now.getFullYear())
    expect(month).toBe(now.getMonth())
    expect(date).toBe(now.getDate())
    expect(day).toBe(now.getDay())
    expect(hour).toBe(now.getHours())
    expect(min).toBe(now.getMinutes())
    expect(sec).toBe(now.getSeconds())
    expect(ms).toBe(now.getMilliseconds())
    expect(totalMs).toBe(now.getTime())
  })

  it('return month between 0 and 11 >', () => {
    expect(getTimeFormat(new Date('2022-01-01')).month).toBe(0)
    expect(getTimeFormat(new Date('2022-12-01')).month).toBe(11)

    expect(getTimeFormat(new Date('January 1, 2022')).month).toBe(0)
    expect(getTimeFormat(new Date('December 1, 2022')).month).toBe(11)

    expect(getTimeFormat(new Date(2022, 1, 1)).month).toBe(1)
    expect(getTimeFormat(new Date(2022, 12, 1)).month).toBe(0)
  })
})
