import { range } from '@/utils'

describe('range >', () => {
  it('should return range list', () => {
    expect(range(5)).toEqual([0, 1, 2, 3, 4])
    expect(range(5, 10)).toEqual([5, 6, 7, 8, 9])
  })

  it('should return range list with step', () => {
    expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8])
  })

  it('should return range list with negative step', () => {
    expect(range(10, 0, -2)).toEqual([10, 8, 6, 4, 2])
  })

  it('should return empty array if start is equal to end', () => {
    expect(range(5, 5)).toEqual([])
  })

  it('should return empty array if start is greater than end', () => {
    expect(range(5, 1)).toEqual([])
  })

  it('should return empty array if step is 0', () => {
    expect(range(1, 5, 0)).toEqual([])
  })
})
