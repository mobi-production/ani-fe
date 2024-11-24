import { cva } from 'class-variance-authority'

export const textVariants = cva('', {
  variants: {
    link: {
      true: 'underline text-label-alternative',
      false: ''
    },
    strikethrough: {
      true: 'line-through',
      false: ''
    },
    underline: {
      true: 'underline',
      false: ''
    },
    italic: {
      true: 'italic',
      false: ''
    },
    code: {
      true: 'bg-background-alternative text-status-error',
      false: ''
    }
  },
  defaultVariants: {
    link: false,
    strikethrough: false,
    underline: false,
    italic: false,
    code: false
  }
})
