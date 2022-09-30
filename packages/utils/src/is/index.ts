export const isBrowser = typeof window !== 'undefined'
export const isDefined = <T = any>(val?: T): val is T => typeof val !== 'undefined'
export const hasValue = <T = any>(val?: T): val is T => val !== undefined && val !== null

export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
/* eslint-disable */
export const isFunction = <T extends () => {}>(val: any): val is T => typeof val === 'function'
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isString = (val: unknown): val is string => typeof val === 'string'
export const isWindow = (val: any): val is Window =>
  typeof window !== 'undefined' && toString.call(val) === '[object Window]'

export const isArray = (a: any) => !!a && a.constructor === Array
export const isObject = (a: any) => !!a && a.constructor === Object
export const isEvent = (e: any) => !!e && e.constructor === Event
export const isPromise = (e: any) => !!e && e.constructor.name === 'Promise'

/**
 * Check if value is empty
 * @param  {Object|Array} entry
 */
export const isEmpty = (entry: Array<string | { [key: string]: any }> | { [key: string]: any }): boolean => {
  if (isArray(entry)) {
    return entry.length <= 0
  }
  if (isObject(entry)) {
    return Object.entries(entry).length <= 0
  }
  return false
}

/* export const isSafari = /^((?!chrome|android).)*safari/i.test(
  navigator.userAgent,
)

export const isChrome = /^chrome/i.test(navigator.userAgent) */
