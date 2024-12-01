import { Typography } from '@repo/ui/server'
import { ComponentPropsWithoutRef, CSSProperties, ElementType } from 'react'

import { textVariants, typographyMap } from '../../config/variants'

export type TextProps = {
  text: string
  link?: string | null
  bold?: boolean
  code?: boolean
  italic?: boolean
  strikethrough?: boolean
  underline?: boolean
  style?: CSSProperties
}

type Props = {
  id?: string
  tag: ElementType
  rich_text: TextProps[]
  style?: CSSProperties
  isToggle?: boolean
  variant?: ComponentPropsWithoutRef<typeof Typography>['variant']
  defaultFontWeight?: ComponentPropsWithoutRef<typeof Typography>['fontWeight']
  boldFontWeight?: ComponentPropsWithoutRef<typeof Typography>['fontWeight']
} & ComponentPropsWithoutRef<'span'>

function SDUText({
  id,
  rich_text,
  variant = typographyMap['text'],
  defaultFontWeight = 'medium',
  boldFontWeight = 'semibold',
  tag = 'p',
  style,
  ...props
}: Props) {
  const Component = tag ?? 'span'
  return (
    <Component
      id={id}
      style={style}
      {...props}>
      {rich_text.map(({ text, ...rest }, index) => (
        <Typography
          key={index}
          variant={variant}
          color={rest.style?.color ? undefined : 'inherit'}
          fontWeight={rest.bold ? boldFontWeight : defaultFontWeight}
          className={textVariants({
            code: rest.code,
            italic: rest.italic,
            link: !!rest.link,
            strikethrough: rest.strikethrough,
            underline: rest.underline
          })}
          style={rest.style}
          asChild>
          {rest.link ? <a href={rest.link}>{text}</a> : <span>{text}</span>}
        </Typography>
      ))}
    </Component>
  )
}

export default SDUText
