import { getTimeFormat } from './getTimeFormat'

describe('getTimeFormat(date) >', () => {
  it('return current time format by default >', () => {
    const now = new Date()
    const { year, month, date, day } = getTimeFormat()

    expect(year).toBe(now.getFullYear())
    expect(month).toBe(now.getMonth())
    expect(date).toBe(now.getDate())
    expect(day).toBe(now.getDay())
  })
})
