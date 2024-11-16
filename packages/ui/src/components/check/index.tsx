import cn from 'node_modules/@repo/util/src/cn'
import { ComponentPropsWithoutRef } from 'react'

import Icon from '../icon'

type Props = {
  check: boolean
} & ComponentPropsWithoutRef<'button'>

function CheckBox({ check }: Props) {
  return (
    <Icon
      size='24'
      name='CheckCircleFilled'
      className={cn('transition-colors duration-200', check && 'text-line-normal')}
    />
  )
}

export default CheckBox
