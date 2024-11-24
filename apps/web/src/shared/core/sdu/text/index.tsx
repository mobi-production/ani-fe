import { Typography } from '@repo/ui/server'
import { ComponentPropsWithoutRef } from 'react'
import { textVariants } from './variants'
import { VariantProps } from 'class-variance-authority'

type TextProps = {
  text: string
  variant?: ComponentPropsWithoutRef<typeof Typography>['variant']
  defaultFontWeight?: ComponentPropsWithoutRef<typeof Typography>['fontWeight']
  boldFontWeight?: ComponentPropsWithoutRef<typeof Typography>['fontWeight']
  link?: string | null
  bold?: boolean
  style?: {
    color?: string
    backgroundColor?: string
  }
} & Omit<VariantProps<typeof textVariants>, 'link'>

function SDUText({ text, style, ...props }: TextProps) {
  return (
    <Typography
      variant={props.variant}
      fontWeight={props.bold ? props.boldFontWeight : props.defaultFontWeight}
      className={textVariants({
        code: props.code,
        italic: props.italic,
        link: !!props.link,
        strikethrough: props.strikethrough,
        underline: props.underline
      })}
      style={style}>
      {text}
    </Typography>
  )
}

export default SDUText
