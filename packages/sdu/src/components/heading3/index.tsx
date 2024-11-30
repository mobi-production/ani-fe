import { typographyMap } from '@repo/sdu/config/variants'
import { ColorStyle } from '@repo/sdu/types/common'

import SDUText, { TextProps } from '../text'

type Props = {
  id: string
  text: string
  rich_text: TextProps[]
  style?: ColorStyle
  depth?: number
}

function SDUHeading3({ text, rich_text, style, depth = 0, id, ...props }: Props) {
  return (
    <SDUText
      id={`heading3-${depth}-${id}`}
      data-text={text}
      tag='h3'
      rich_text={rich_text}
      variant={typographyMap['heading_3']}
      defaultFontWeight='semibold'
      boldFontWeight='bold'
      style={style}
      {...props}
    />
  )
}

export default SDUHeading3
