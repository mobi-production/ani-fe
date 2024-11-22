import { Typography } from '@repo/ui/server'
import { ComponentProps } from 'react'

type Props = Omit<ComponentProps<typeof Typography>, 'children'> & {
  text: string
}

function SDUHeading1({ text, ...props }: Props) {
  return (
    <Typography
      variant='title-3'
      fontWeight='semibold'
      {...props}>
      {text}
    </Typography>
  )
}

export default SDUHeading1
