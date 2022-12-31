/* eslint-disable no-console */
import { yellow } from 'kolorist'

export interface LoggerComposition {
  info: (message: string) => void
  error: (message: string, error?: Error | ErrorEvent) => void
  warn: (message: string) => void
  log: (name: string, value: any) => void
  table: (value: any, columns: string[]) => void
}

export function useLogger(prefix = process.env.LOGGER_PREFIX || '[AsUse]'): LoggerComposition {
  function error(message: string, error?: Error | ErrorEvent) {
    error ? console.error(`${prefix} ${message}`, error) : console.error(`${prefix} ${message}`)
  }

  function warn(message: string) {
    console.warn(yellow(`${prefix} ${message}`))
  }

  function info(message: string) {
    console.info(`${prefix} ${message}`)
  }

  function log(name: string, value: any) {
    if (process.env.NODE_ENV === 'development') {
      if (value === undefined) {
        console.log(`${prefix} - ${name}`)
      } else {
        console.log(`${prefix} - ${name}:`, value)
      }
    }
  }

  function table(value: any, columns: string[]) {
    if (process.env.NODE_ENV === 'development') {
      console.table(value, columns)
    }
  }

  return {
    info,
    error,
    warn,
    log,
    table,
  }
}
