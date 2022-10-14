import { chunk } from '@/utils'

describe('chunk >', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  it('should return an array of chunks', () => {
    expect(chunk(arr, 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  })

  it('should return an array of chunks with remains', () => {
    expect(chunk(arr, 4)).toEqual([[1, 2, 3, 4], [5, 6, 7, 8], [9]])
  })
})
