import { Divider } from '@repo/ui/server'
import { ComponentProps, memo } from 'react'

type Props = ComponentProps<typeof Divider>

function SDUDivider({ ...props }: Props) {
  return <Divider {...props} />
}

export default memo(SDUDivider)
