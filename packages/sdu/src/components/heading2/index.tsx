import { typographyMap } from '@repo/sdu/config/variants'
import { ColorStyle } from '@repo/sdu/types/common'

import SDUText, { TextProps } from '../text'

type Props = {
  rich_text: TextProps[]
  style?: ColorStyle
}

function SDUHeading2({ rich_text, style, ...props }: Props) {
  return (
    <SDUText
      tag='h2'
      rich_text={rich_text}
      variant={typographyMap['heading_2']}
      defaultFontWeight='bold'
      boldFontWeight='extra_bold'
      style={style}
      {...props}
    />
  )
}

export default SDUHeading2
