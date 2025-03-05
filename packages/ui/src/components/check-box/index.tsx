import cn from '@repo/util/cn'
import { cva, VariantProps } from 'class-variance-authority'

import Icon from '../icon'
import { CheckBoxSize, CheckBoxSizeMapping } from './variants'

const checkBoxVariants = cva('', {
  variants: {
    size: {
      [CheckBoxSize.S]: 'h-[1rem] w-[1rem]',
      [CheckBoxSize.M]: 'h-[1.25rem] w-[1.25rem]',
      [CheckBoxSize.L]: 'h-[1.5rem] w-[1.5rem]'
    }
  },
  defaultVariants: {
    size: CheckBoxSize.M
  }
})

type Props = VariantProps<typeof checkBoxVariants> & {
  select?: boolean
  disabled?: boolean
}

function CheckBox({ select = false, size = CheckBoxSize.M, disabled = false }: Props) {
  if (!size) {
    size = CheckBoxSize.M
  }

  return (
    <>
      {select ? (
        <Icon
          size={CheckBoxSizeMapping[size]}
          name='CheckCircleFilled'
          className={disabled ? 'text-label-disable' : 'text-primary-normal'}
        />
      ) : (
        <div
          className={cn(
            checkBoxVariants({ size }),
            'box-border rounded-full border-[1.5px]',
            disabled ? 'bg-inherit' : 'border-label-disable bg-interaction-disabled'
          )}
        />
      )}
    </>
  )
}

export default CheckBox
