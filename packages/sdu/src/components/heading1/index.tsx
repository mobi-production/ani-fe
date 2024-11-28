import { typographyMap } from '@repo/sdu/config/variants'
import { ColorStyle } from '@repo/sdu/types/common'
import { PropsWithChildren } from 'react'

import SDUText, { TextProps } from '../text'

type Props = {
  id: string
  text: string
  rich_text: TextProps[]
  style?: ColorStyle
  depth?: number
}

function SDUHeading1({
  text,
  rich_text,
  style,
  depth = 0,
  id,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <SDUText
      id={`heading1-${depth}-${id}`}
      data-text={text}
      tag='h1'
      rich_text={rich_text}
      variant={typographyMap['heading_1']}
      defaultFontWeight='bold'
      boldFontWeight='extra_bold'
      {...props}
      style={style}
    />
  )
}

export default SDUHeading1
