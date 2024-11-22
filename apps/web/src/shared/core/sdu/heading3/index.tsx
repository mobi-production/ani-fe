import { Typography } from '@repo/ui/server'
import { ComponentProps } from 'react'

type Props = Omit<ComponentProps<typeof Typography>, 'children'> & {
  text: string
}

function SDUHeading3({ text, ...props }: Props) {
  return (
    <Typography
      variant='heading-2'
      fontWeight='semibold'
      {...props}>
      {text}
    </Typography>
  )
}

export default SDUHeading3
