import { Typography } from '@repo/ui/server'
import { ComponentProps } from 'react'
import { textVariants } from '../paragraph'
import { VariantProps } from 'class-variance-authority'

type Props = Omit<ComponentProps<typeof Typography>, 'children'> & {
  text: string
  bold?: boolean
} & VariantProps<typeof textVariants>

function SDUHeading1({
  text,
  bold,
  link,
  strikethrough,
  underline,
  italic,
  code,
  ...props
}: Props) {
  return (
    <Typography
      variant='title-2'
      fontWeight={bold ? 'extra_bold' : 'bold'}
      className={textVariants({ link: !!link, strikethrough, underline, italic, code })}
      {...props}>
      {text}
    </Typography>
  )
}

export default SDUHeading1
