import { Fn } from '../types'

/**
 * Mock an async function for APIs
 * @param  {boolean} success
 * @param  {number} timeout
 * @param  {any} value
 */
export const mockAsync = (success: boolean, timeout: number, value: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(value)
      } else {
        reject(new Error('Oops'))
      }
    }, timeout)
  })
}

/**
 * Promised `setTimeout`
 *
 * @category Promise
 */
export function sleep(ms: number, callback?: Fn<any>) {
  return new Promise<void>(resolve =>
    setTimeout(async () => {
      await callback?.()
      resolve()
    }, ms),
  )
}
