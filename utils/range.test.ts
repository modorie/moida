import { range } from './range'

describe('range >', () => {
  it('one argument (start) >', () => {
    expect(range(5)).toEqual([0, 1, 2, 3, 4])
  })

  it('two arguments (start, end) >', () => {
    expect(range(5, 10)).toEqual([5, 6, 7, 8, 9])
  })

  describe('three arguments (start, end, step) >', () => {
    it('positive step >', () => {
      expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8])
    })

    it('negative step >', () => {
      expect(range(10, 0, -2)).toEqual([10, 8, 6, 4, 2])
    })

    it('no step >', () => {
      expect(range(0, 10, 0)).toEqual([])
    })

    it('wrong step >', () => {
      expect(range(10, 0, 2)).toEqual([])
      expect(range(0, 10, -2)).toEqual([])
    })
  })
})
