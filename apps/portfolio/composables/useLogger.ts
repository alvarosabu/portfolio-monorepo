/* eslint-disable no-console */
interface LoggerComposition {
  logError: (message: string, error: Error) => void
  logWarning: (message: string) => void
  logMessage: (name: string, value: any) => void
}

const logPrefix = 'AsUI'

export function useLogger(): LoggerComposition {
  function logError(message: string, error: Error) {
    console.error(`${logPrefix} ${message}`, error)
  }

  function logWarning(message: string) {
    console.warn(`${logPrefix} ${message}`)
  }

  function logMessage(name: string, value: any) {
    console.log(`${logPrefix} - ${name}:`, value)
  }

  return {
    logError,
    logWarning,
    logMessage,
  }
}
