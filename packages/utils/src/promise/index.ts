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
        reject({ message: 'Error' })
      }
    }, timeout)
  })
}
