import SDUText, { TextProps } from '../text'

type Props = {
  rich_text: TextProps[]
}

function SDUHeading3({ rich_text, ...props }: Props) {
  return (
    <SDUText
      tag='h3'
      rich_text={rich_text}
      variant='heading-1'
      defaultFontWeight='semibold'
      boldFontWeight='bold'
      {...props}
    />
  )
}

export default SDUHeading3
