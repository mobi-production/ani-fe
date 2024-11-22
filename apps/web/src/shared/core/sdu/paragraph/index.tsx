import { Typography } from '@repo/ui/server'
import Link from 'next/link'
import { ComponentProps } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

type Props = {
  text?: string | number
  bold?: boolean
  link?: string
} & ComponentProps<typeof Typography> &
  VariantProps<typeof textVariants>

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

function SDUParagraph({
  text,
  bold,
  link,
  strikethrough,
  underline,
  code,
  italic,
  ...props
}: Props) {
  return (
    <Typography
      variant='body-1-reading'
      fontWeight={bold ? 'semibold' : 'medium'}
      className={textVariants({ link: !!link, strikethrough, underline, code, italic })}
      asChild
      {...props}>
      {link ? <Link href={link}>{text}</Link> : <p>{text}</p>}
    </Typography>
  )
}

export default SDUParagraph
