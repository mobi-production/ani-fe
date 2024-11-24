import { Typography } from '@repo/ui/server'
import { ComponentPropsWithoutRef, ElementType } from 'react'

import { textVariants } from '../../config/variants'

export type TextProps = {
  text: string
  link?: string | null
  bold?: boolean
  code?: boolean
  italic?: boolean
  strikethrough?: boolean
  underline?: boolean
  style?: {
    color?: string
    backgroundColor?: string
  }
}

type Props = {
  tag: ElementType
  rich_text: TextProps[]
  isToggle?: boolean
  variant?: ComponentPropsWithoutRef<typeof Typography>['variant']
  defaultFontWeight?: ComponentPropsWithoutRef<typeof Typography>['fontWeight']
  boldFontWeight?: ComponentPropsWithoutRef<typeof Typography>['fontWeight']
}

function SDUText({
  rich_text,
  variant = 'body-1-reading',
  defaultFontWeight = 'medium',
  boldFontWeight = 'semibold',
  tag = 'p'
}: Props) {
  const Component = tag ?? 'span'
  return (
    <Component>
      {rich_text.map(({ text, ...rest }, index) => (
        <Typography
          key={index}
          variant={variant}
          fontWeight={rest.bold ? boldFontWeight : defaultFontWeight}
          className={`${textVariants({
            code: rest.code,
            italic: rest.italic,
            link: !!rest.link,
            strikethrough: rest.strikethrough,
            underline: rest.underline
          })} whitespace-pre-wrap`}
          style={rest.style}
          asChild>
          {rest.link ? <a href={rest.link}>{text}</a> : <span>{text}</span>}
        </Typography>
      ))}
    </Component>
  )
}

export default SDUText
