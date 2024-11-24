import { Typography } from '@repo/ui/server'
import { ComponentProps } from 'react'
import { VariantProps } from 'class-variance-authority'
import { textVariants } from '../text/variants'

type Props = Omit<ComponentProps<typeof Typography>, 'children'> & {
  text: string
  bold?: boolean
} & VariantProps<typeof textVariants>

function SDUHeading3({
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
      variant='heading-1'
      fontWeight={bold ? 'bold' : 'semibold'}
      className={textVariants({ link: !!link, strikethrough, underline, code, italic })}
      {...props}>
      {text}
    </Typography>
  )
}

export default SDUHeading3
