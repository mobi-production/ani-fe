import { Typography } from '@repo/ui/server'
import { ComponentProps } from 'react'

type Props = {
  text?: string
  style?: ComponentProps<typeof Typography>
} & ComponentProps<'p'>

function SDUParagraph({ text, style, ...props }: Props) {
  return (
    <Typography
      {...style}
      className='whitespace-pre-wrap'>
      <p {...props}>{text ? text : ' '}</p>
    </Typography>
  )
}

export default SDUParagraph
