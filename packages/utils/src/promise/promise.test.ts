import { expect, it } from 'vitest'
import { mockAsync } from '.'

it('should resolve the mock promise if success is true', async () => {
  const mockPromise = mockAsync(true, 1, 'success')
  await expect(mockPromise).resolves.toBe('success')
})

it('should reject the mock promise if success is false', async () => {
  const mockPromise = mockAsync(false, 1, 'success')
  await expect(mockPromise).rejects.toEqual(new Error('Oops'))
})

it('should return a mocked object as data', async () => {
  const mockPromise = mockAsync(true, 1, { name: 'pingui' })
  await expect(mockPromise).resolves.toEqual({ name: 'pingui' })
})
