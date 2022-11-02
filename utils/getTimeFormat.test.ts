import { getTimeFormat } from '@/utils'

describe('getTimeFormat(dateObj) >', () => {
  const now = new Date()
  const { year, month, date, day, hour, minute, second } = getTimeFormat(now)

  it('return object of time formats >', () => {
    expect(year).toBe(now.getFullYear())
    expect(month).toBe(now.getMonth())
    expect(date).toBe(now.getDate())
    expect(day).toBe(now.getDay())
    expect(hour).toBe(now.getHours())
    expect(minute).toBe(now.getMinutes())
    expect(second).toBe(now.getSeconds())
  })

  it('return month between 0 and 11 >', () => {
    expect(getTimeFormat(new Date('2022-01-01')).month).toBe(0)
    expect(getTimeFormat(new Date('2022-12-01')).month).toBe(11)

    expect(getTimeFormat(new Date('January 1, 2022')).month).toBe(0)
    expect(getTimeFormat(new Date('December 1, 2022')).month).toBe(11)

    expect(getTimeFormat(new Date(2022, 1, 1)).month).toBe(1)
    expect(getTimeFormat(new Date(2022, 12, 1)).month).toBe(0)
  })

  it('match toLocaleDateString >', () => {
    expect(`${year}. ${month + 1}. ${date}.`).toBe(now.toLocaleDateString())
  })
})
