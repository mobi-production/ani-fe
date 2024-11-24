import SDUText, { TextProps } from '../text'

type Props = {
  rich_text: TextProps[]
}

function SDUHeading1({ rich_text, ...props }: Props) {
  return (
    <SDUText
      tag='h1'
      rich_text={rich_text}
      variant='title-2'
      defaultFontWeight='bold'
      boldFontWeight='extra_bold'
      {...props}
    />
  )
}

export default SDUHeading1
