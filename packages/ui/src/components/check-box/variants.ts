export const CheckBoxSize = {
  S: 's',
  M: 'm',
  L: 'l'
} as const

export const CheckBoxSizeMapping = {
  [CheckBoxSize.S]: '16',
  [CheckBoxSize.M]: '20',
  [CheckBoxSize.L]: '24'
} as const
