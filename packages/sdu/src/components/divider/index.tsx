import { ColorStyle } from '@repo/sdu/types/common'
import { Divider } from '@repo/ui/server'
import { ComponentProps, memo } from 'react'

type Props = ComponentProps<typeof Divider> & {
  id?: string
  style?: ColorStyle
}

function SDUDivider({ id, style }: Props) {
  return (
    <Divider
      id={id}
      style={style}
    />
  )
}

export default memo(SDUDivider)
