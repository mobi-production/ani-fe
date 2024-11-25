import { cva } from 'class-variance-authority'

export const typographyMap = {
  heading_1: 'title-2',
  heading_2: 'title-3',
  heading_3: 'heading-1',
  text: 'body-1-reading'
} as const

export const textVariants = cva('whitespace-pre-wrap inline', {
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
