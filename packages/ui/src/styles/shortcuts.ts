import { UserShortcuts } from 'unocss'
import { btnShortcuts } from '../components/as-button/const'

export const HeadlineShortcuts = [
  {
    'headline-1': 'font-display text-primary-400 dark:text-gray-50 text-4xl',
  },
]

export const ASShortcuts: UserShortcuts<any> = [
  ...btnShortcuts,
  ...HeadlineShortcuts,
]
export default ASShortcuts
