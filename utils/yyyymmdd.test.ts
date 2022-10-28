import { yyyymmdd } from '@/utils'

describe('yyyymmdd >', () => {
  it('should return a string of yyyymmdd format (< 10) ', () => {
    expect(yyyymmdd(2022, 1, 1)).toBe('2022-01-01')
  })

  it('should return a string of yyyymmdd format (>= 10)', () => {
    expect(yyyymmdd(2022, 12, 31)).toBe('2022-12-31')
  })
})
