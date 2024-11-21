import { SIZE_VARIANTS } from '@repo/ui/variants/size'
import { cva, type VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'

import { IconsMap, IconVariantType } from './variants'

type Props = {
  name: IconVariantType
  className?: string
} & ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof iconVariants>

const iconVariants = cva('text-inherit', {
  variants: {
    size: {
      default: 'text-inherit',
      [SIZE_VARIANTS['0.0625']]: 'text-[0.0625rem]',
      [SIZE_VARIANTS['0.125']]: 'text-[0.125rem]',
      [SIZE_VARIANTS['0.1875']]: 'text-[0.1875rem]',
      [SIZE_VARIANTS['0.25']]: 'text-[0.25rem]',
      [SIZE_VARIANTS['0.3125']]: 'text-[0.3125rem]',
      [SIZE_VARIANTS['0.375']]: 'text-[0.375rem]',
      [SIZE_VARIANTS['0.4375']]: 'text-[0.4375rem]',
      [SIZE_VARIANTS['0.5']]: 'text-[0.5rem]',
      [SIZE_VARIANTS['0.625']]: 'text-[0.625rem]',
      [SIZE_VARIANTS['0.75']]: 'text-[0.75rem]',
      [SIZE_VARIANTS['0.875']]: 'text-[0.875rem]',
      [SIZE_VARIANTS['0.9375']]: 'text-[0.9375rem]',
      [SIZE_VARIANTS['1']]: 'text-[1rem]',
      [SIZE_VARIANTS['1.125']]: 'text-[1.125rem]',
      [SIZE_VARIANTS['1.25']]: 'text-[1.25rem]',
      [SIZE_VARIANTS['1.5']]: 'text-[1.5rem]',
      [SIZE_VARIANTS['1.75']]: 'text-[1.75rem]',
      [SIZE_VARIANTS['2']]: 'text-[2rem]',
      [SIZE_VARIANTS['2.25']]: 'text-[2.25rem]',
      [SIZE_VARIANTS['2.5']]: 'text-[2.5rem]',
      [SIZE_VARIANTS['2.75']]: 'text-[2.75rem]'
    }
  },
  defaultVariants: {
    size: 'default'
  }
})

function Icon({ name, size, className, ...props }: Props) {
  const IconComponent = IconsMap[name]

  return (
    <IconComponent
      className={`${iconVariants({ size })} ${className}`}
      {...props}
    />
  )
}

export default Icon
