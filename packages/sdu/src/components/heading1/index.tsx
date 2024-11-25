import { typographyMap } from '@repo/sdu/config/variants'
import { ColorStyle } from '@repo/sdu/types/common'

import SDUText, { TextProps } from '../text'

type Props = {
  rich_text: TextProps[]
  style?: ColorStyle
}

function SDUHeading1({ rich_text, style, ...props }: Props) {
  return (
    <SDUText
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
