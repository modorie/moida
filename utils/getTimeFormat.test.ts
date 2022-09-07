import { getTimeFormat } from './getTimeFormat'

describe('getTimeFormat(date) >', () => {
  it('return current time format by default >', () => {
    const now = new Date()
    const { year, month, day, hour, min, sec, ms, totalMs } = getTimeFormat()

    expect(year).toBe(now.getFullYear())
    expect(month).toBe(now.getMonth())
    expect(day).toBe(now.getDate())
    expect(hour).toBe(now.getHours())
    expect(min).toBe(now.getMinutes())
    expect(sec).toBe(now.getSeconds())
    expect(ms).toBe(now.getMilliseconds())
    expect(totalMs).toBe(now.getTime())
  })
})
