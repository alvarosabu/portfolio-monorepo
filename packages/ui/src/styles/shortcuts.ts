import { UserShortcuts } from 'unocss'
import { btnShortcuts } from '../components/as-button/const'

export const HeadlineShortcuts = [
  {
    'headline-1': 'font-display text-primary-400 dark:text-gray-200 text-4xl',
    'headline-2': 'font-display text-primary-400 dark:text-gray-200 text-2xl',
    'headline-3': 'font-display text-primary-400 dark:text-gray-200 text-xl',
  },
]

export const ASShortcuts: UserShortcuts<any> = [...btnShortcuts, ...HeadlineShortcuts]
export default ASShortcuts
