import cn from 'node_modules/@repo/util/src/cn'
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
        className={cn('transition-colors duration-200', checked && 'text-line-normal')}
      />
    </label>
  )
}

export default CheckBox
