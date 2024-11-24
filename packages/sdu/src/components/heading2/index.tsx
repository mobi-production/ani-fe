import SDUText, { TextProps } from '../text'

type Props = {
  rich_text: TextProps[]
}

function SDUHeading2({ rich_text, ...props }: Props) {
  return (
    <SDUText
      tag='h2'
      rich_text={rich_text}
      variant='title-3'
      defaultFontWeight='bold'
      boldFontWeight='extra_bold'
      {...props}
    />
  )
}

export default SDUHeading2
