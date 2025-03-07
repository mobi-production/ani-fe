import { ColorStyle } from '@repo/sdu/types/common'
import { Divider } from '@repo/ui/server'
import { ComponentProps, memo } from 'react'

type Props = ComponentProps<typeof Divider> & {
  style?: ColorStyle
}

function SDUDivider({ style, ...props }: Props) {
  return (
    <Divider
      style={style}
      {...props}
    />
  )
}

export default memo(SDUDivider)
