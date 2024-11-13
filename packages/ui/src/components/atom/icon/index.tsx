import { IconsMap, IconsSizes, IconVariantType } from '@ui/components/atom/icon/variants'
import { cva, type VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'

type Props = {
  name: IconVariantType
  className?: string
} & ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof iconVariants>

const iconVariants = cva('text-inherit', {
  variants: {
    size: {
      [IconsSizes['1']]: 'text-[0.25rem]',
      [IconsSizes['2']]: 'text-[0.5rem]',
      [IconsSizes['3']]: 'text-[0.75rem]',
      [IconsSizes['4']]: 'text-[1rem]',
      [IconsSizes['5']]: 'text-[1.25rem]',
      [IconsSizes['6']]: 'text-[1.5rem]',
      [IconsSizes['7']]: 'text-[1.75rem]',
      [IconsSizes['8']]: 'text-[2rem]',
      [IconsSizes['9']]: 'text-[2.25rem]',
      [IconsSizes['10']]: 'text-[2.5rem]',
      [IconsSizes['11']]: 'text-[2.75rem]',
      [IconsSizes['12']]: 'text-[3rem]',
      [IconsSizes['16']]: 'text-[4rem]'
    }
  },
  defaultVariants: {
    size: IconsSizes['4']
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
