import { expect, it, suite } from 'vitest'

import {
  isArray,
  isString,
  isBoolean,
  isFunction,
  isNumber,
  isObject,
  isEvent,
  isPromise,
  isEmpty,
  isDefined,
  hasValue,
} from './'

suite('is Boolean', () => {
  it('should return true if the value is a boolean', () => {
    expect(isBoolean(false)).toBe(true)
  })

  it('should return false if the value is not a boolean', () => {
    expect(isBoolean(1)).toBe(false)
  })
})

suite('is String', () => {
  it('should return true if the value is a string', () => {
    expect(isString('string')).toBe(true)
  })

  it('should return false if the value is not a string', () => {
    expect(isString(1)).toBe(false)
  })
})

suite('isFunction', () => {
  it('should return true if the value is a function', () => {
    const noop = () => {}
    expect(isFunction(noop)).toBe(true)
  })

  it('should return false if the value is not a function', () => {
    expect(isFunction('extreme')).toBe(false)
  })
})

suite('is Number', () => {
  it('should return true if the value is a string', () => {
    expect(isNumber(234)).toBe(true)
  })

  it('should return false if the value is not a string', () => {
    expect(isNumber('1')).toBe(false)
  })
})

suite('is Array', () => {
  it('should return true if the value is an array', () => {
    expect(isArray([1, 2, 3, 4])).toBe(true)
  })

  it('should return false if the value is not an array', () => {
    expect(isArray({ a: 1 })).toBe(false)
  })
})

suite('is Object', () => {
  it('should return true if the value is a object', () => {
    expect(isObject({ b: 1 })).toBe(true)
  })

  it('should return false if the value is not a object', () => {
    expect(isObject([{ a: 1 }, { b: 2 }, { c: 3 }])).toBe(false)
  })
})

suite('isEvent', () => {
  it('should return true if the value is an event', () => {
    expect(isEvent(new Event('click'))).toBe(true)
  })

  it('should return false if the value is not an event', () => {
    expect(isEvent('click')).toBe(false)
  })
})

suite('isPromise', () => {
  it('should return true if the value is a promise', () => {
    const myPromise = new Promise(resolve => {
      setTimeout(() => {
        resolve('foo')
      }, 300)
    })

    expect(isPromise(myPromise)).toBe(true)
  })

  it('should return false if the value is not a promise', () => {
    expect(isPromise('click')).toBe(false)
  })
})

suite('hasValue or isDefined', () => {
  it('should return true if the value is defined', () => {
    expect(isDefined(1)).toBe(true)
  })

  it('should return false if the value is not defined', () => {
    expect(isDefined(undefined)).toBe(false)
  })

  it('should return true if parameter has a value', () => {
    expect(hasValue(1)).toBe(true)
  })

  it('should return false if parameter has no value', () => {
    expect(hasValue(null)).toBe(false)
  })
})

suite('isEmpty', () => {
  it('should return true if the value is an empty array', () => {
    expect(isEmpty([])).toBe(true)
  })

  it('should return true if the value is an empty object', () => {
    expect(isEmpty({})).toBe(true)
  })

  it('should return false if the value is not an empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
  })

  it('should return false if the value is not an empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false)
  })

  it('should return false if the value is not an empty object', () => {
    expect(isEmpty(1)).toBe(false)
  })
})
