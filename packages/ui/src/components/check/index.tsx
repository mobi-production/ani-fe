import cn from '@repo/util/cn'
import { ComponentPropsWithoutRef } from 'react'

import Icon from '../icon'

type Props = {
  checked: boolean
} & Omit<ComponentPropsWithoutRef<'input'>, 'type'>

function CheckBox({ checked, ...props }: Props) {
  return (
    <label>
      <input
        {...props}
        checked={checked}
        type='checkbox'
        className='hidden'
      />
      <Icon
        size='24'
        name='CheckCircleFilled'
        className={cn(checked ? 'text-primary-normal' : 'text-label-disable')}
      />
    </label>
  )
}

export default CheckBox
