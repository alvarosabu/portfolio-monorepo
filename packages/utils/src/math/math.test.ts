import { clamp } from '.'

describe('it should clamp a number between a min and max', () => {
  it('should clamp a number between a min and max', () => {
    expect(clamp(10, 5, 15)).toBe(10)
    expect(clamp(0, 5, 15)).toBe(5)
    expect(clamp(20, 5, 15)).toBe(15)
  })
})
