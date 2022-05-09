export type ButtonType = 'button' | 'submit' | 'reset'
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
export type ButtonSize = 'default' | 'block' | 'sm' | 'md' | 'lg'

export enum btnType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export enum btnVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum btnSize {
  DEFAULT = 'default',
  BLOCK = 'block',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}

export const btnShortcuts = [
  [
    /^btn-(?!.*(outline|flat|block|sm|md|lg|default))(.*)/,
    ([, , c]: [any, any, string]) =>
      `bg-${c}-400 text-white hover:bg-${c}-500 border-transparent `,
  ],
  [
    /^btn-outline-(.*)$/,
    ([, c]: [any, string]) =>
      `bg-transparent border-${c}-400 text-${c}-400 hover:text-${c}-500`,
  ],
  [
    /^btn-flat-(.*)$/,
    ([, c]: [any, string]) =>
      `bg-gray-50 border-transparent text-${c}-400 hover:text-${c}-500`,
  ],
]

export const btnSafelist = [
  ...Object.values(btnVariant).map(v => `btn-${v}`),
  ...Object.values(btnVariant).map(v => `btn-outline-${v}`),
  ...Object.values(btnVariant).map(v => `btn-flat-${v}`),
  ...Object.values(btnSize).map(v => `btn-${v}`),
]

export const btnVariantList = Object.values(btnVariant)
const AsBtnConsts = {
  btnType,
  btnVariant,
  btnSize,
  btnShortcuts,
  btnSafelist,
  btnVariantList,
}
export default AsBtnConsts
