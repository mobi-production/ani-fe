import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef, ElementType } from 'react'

import { BadgeColors, BadgeSizes } from './variants'

export const badgeVariants = cva(
  'rounded-[0.25rem] inline-flex font-medium flex items-center justify-center',
  {
    variants: {
      size: {
        [BadgeSizes.M]: 'h-[2rem] px-[0.625rem] text-l-reading',
        [BadgeSizes.S]: 'h-[1.5rem] px-[0.375rem] text-c1'
      },
      color: {
        [BadgeColors.GRAY]: 'bg-neutral-99 text-neutral-10',
        [BadgeColors.PURPLE]: 'bg-purple-95 text-accent-purple',
        [BadgeColors.ORANGE]: 'bg-orange-95 text-orange-50',
        [BadgeColors.GREEN]: 'bg-green-95 text-green-50',
        [BadgeColors.BLUE]: 'bg-blue-95 text-blue-50',
        [BadgeColors.RED]: 'bg-red-95 text-red-50',
        [BadgeColors.MINT]: 'bg-mint-95 text-primary-normal'
      }
    },
    defaultVariants: {
      size: BadgeSizes.S,
      color: BadgeColors.GRAY
    }
  }
)

type BadgeProps = VariantProps<typeof badgeVariants> &
  ComponentPropsWithoutRef<'span'> & {
    component?: ElementType
    asChild?: boolean
  }

function Badge({ component = 'div', size, color, className, asChild, ...props }: BadgeProps) {
  const Component = asChild ? Slot : component

  return (
    <Component
      className={`flex-shrink-0 ${badgeVariants({ size, color })} ${className}`}
      {...props}
    />
  )
}

export default Badge
