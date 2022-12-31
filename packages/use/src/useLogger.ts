/* eslint-disable no-console */
interface LoggerComposition {
  error: (message: string) => void
  warn: (message: string) => void
  log: (name: string, value: any) => void
}

export function useLogger(prefix = '[AsUse]'): LoggerComposition {
  function error(message: string) {
    console.error(`${prefix} ${message}`)
  }

  function warn(message: string) {
    console.warn(`${prefix} ${message}`)
  }

  function log(name: string, value: any) {
    if (process.env.NODE_ENV === 'development') {
      if (value === undefined) {
        console.log(`${prefix} - ${name}:`)
      } else {
        console.log(`${prefix} - ${name}:`, value)
      }
    }
  }

  return {
    error,
    warn,
    log,
  }
}
