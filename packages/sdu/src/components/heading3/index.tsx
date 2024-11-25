import { typographyMap } from '@repo/sdu/config/variants'
import { ColorStyle } from '@repo/sdu/types/common'

import SDUText, { TextProps } from '../text'

type Props = {
  rich_text: TextProps[]
  style?: ColorStyle
}

function SDUHeading3({ rich_text, style, ...props }: Props) {
  return (
    <SDUText
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
