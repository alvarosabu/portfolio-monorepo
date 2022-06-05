import { isTruthy, noNull, notNullish, notUndefined } from '.'

describe('Guards', () => {
  it('should remove all nullish values from array', () => {
    const array = [1, 2, null, 3, null, 4, null, 5]
    const result = array.filter(notNullish)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should remove all null values from array', () => {
    const array = [1, 2, null, 3, null, 4, null, 5]
    const result = array.filter(noNull)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should remove all falsy values from array', () => {
    const array = [true, false, true, false, true, false, true]
    const result = array.filter(isTruthy)
    expect(result).toEqual([true, true, true, true])
  })

  it('should remove all undefined values from array', () => {
    const array = [1, 2, undefined, 3, undefined, 4, undefined, 5]
    const result = array.filter(notUndefined)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })
})
