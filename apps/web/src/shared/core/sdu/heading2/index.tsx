import { Typography } from '@repo/ui/server'
import { ComponentProps } from 'react'

type Props = Omit<ComponentProps<typeof Typography>, 'children'> & {
  text: string
}

function SDUHeading2({ text, ...props }: Props) {
  return (
    <Typography
      variant='heading-1'
      fontWeight='semibold'
      {...props}>
      {text}
    </Typography>
  )
}

export default SDUHeading2
