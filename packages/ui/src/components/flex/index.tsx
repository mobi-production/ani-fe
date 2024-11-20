import { Slot } from '@radix-ui/react-slot'
import { SIZE_VARIANTS } from '@repo/ui/variants/size'
import cn from '@repo/util/cn'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef, ElementType } from 'react'

import { FlexAlign, FlexDirection, FlexJustify, FlexWrap } from './variants'

const flexVariants = cva('flex', {
  variants: {
    align: {
      default: '',
      [FlexAlign.START]: 'items-start',
      [FlexAlign.END]: 'items-end',
      [FlexAlign.CENTER]: 'items-center',
      [FlexAlign.BASELINE]: 'items-baseline',
      [FlexAlign.STRETCH]: 'items-stretch'
    },
    justify: {
      [FlexJustify.START]: 'justify-start',
      [FlexJustify.END]: 'justify-end',
      [FlexJustify.CENTER]: 'justify-center',
      [FlexJustify.BETWEEN]: 'justify-between',
      [FlexJustify.AROUND]: 'justify-around'
    },
    wrap: {
      default: '',
      [FlexWrap.NOWRAP]: 'flex-nowrap',
      [FlexWrap.WRAP]: 'flex-wrap',
      [FlexWrap.WRAP_REVERSE]: 'flex-wrap-reverse'
    },
    gap: {
      default: '',
      [SIZE_VARIANTS['0.0625']]: 'gap-[0.0625rem]',
      [SIZE_VARIANTS['0.125']]: 'gap-[0.125rem]',
      [SIZE_VARIANTS['0.1875']]: 'gap-[0.1875rem]',
      [SIZE_VARIANTS['0.25']]: 'gap-[0.25rem]',
      [SIZE_VARIANTS['0.3125']]: 'gap-[0.3125rem]',
      [SIZE_VARIANTS['0.375']]: 'gap-[0.375rem]',
      [SIZE_VARIANTS['0.4375']]: 'gap-[0.4375rem]',
      [SIZE_VARIANTS['0.5']]: 'gap-[0.5rem]',
      [SIZE_VARIANTS['0.625']]: 'gap-[0.625rem]',
      [SIZE_VARIANTS['0.75']]: 'gap-[0.75rem]',
      [SIZE_VARIANTS['1']]: 'gap-[1rem]',
      [SIZE_VARIANTS['1.0625']]: 'gap-[1.0625rem]',
      [SIZE_VARIANTS['1.125']]: 'gap-[1.125rem]',
      [SIZE_VARIANTS['1.1875']]: 'gap-[1.1875rem]',
      [SIZE_VARIANTS['1.25']]: 'gap-[1.25rem]',
      [SIZE_VARIANTS['1.375']]: 'gap-[1.375rem]',
      [SIZE_VARIANTS['1.5']]: 'gap-[1.5rem]',
      [SIZE_VARIANTS['1.625']]: 'gap-[1.625rem]',
      [SIZE_VARIANTS['1.75']]: 'gap-[1.75rem]',
      [SIZE_VARIANTS['1.875']]: 'gap-[1.875rem]',
      [SIZE_VARIANTS['2']]: 'gap-[2rem]',
      [SIZE_VARIANTS['2.125']]: 'gap-[2.125rem]',
      [SIZE_VARIANTS['2.25']]: 'gap-[2.25rem]',
      [SIZE_VARIANTS['2.5']]: 'gap-[2.5rem]',
      [SIZE_VARIANTS['2.75']]: 'gap-[2.75rem]',
      [SIZE_VARIANTS['3']]: 'gap-[3rem]',
      [SIZE_VARIANTS['4']]: 'gap-[4rem]',
      [SIZE_VARIANTS['5']]: 'gap-[5rem]',
      [SIZE_VARIANTS['6']]: 'gap-[6rem]',
      [SIZE_VARIANTS['7']]: 'gap-[7rem]',
      [SIZE_VARIANTS['8']]: 'gap-[8rem]',
      [SIZE_VARIANTS['9']]: 'gap-[9rem]',
      [SIZE_VARIANTS['10']]: 'gap-[10rem]',
      [SIZE_VARIANTS['11']]: 'gap-[11rem]',
      [SIZE_VARIANTS['12']]: 'gap-[12rem]',
      [SIZE_VARIANTS['16']]: 'gap-[16rem]'
    },
    direction: {
      default: '',
      [FlexDirection.ROW]: 'flex-row',
      [FlexDirection.COLUMN]: 'flex-col'
    }
  },
  defaultVariants: {
    align: 'default',
    justify: 'default',
    wrap: 'default',
    gap: 'default',
    direction: 'default'
  }
})

type FlexProps = VariantProps<typeof flexVariants> &
  ComponentPropsWithoutRef<'div'> & {
    component?: ElementType
    asChild?: boolean
  }

function Flex({
  component = 'div',
  asChild,
  align,
  justify,
  wrap,
  gap,
  direction,
  ...props
}: FlexProps) {
  const { className, ...rest } = props
  const Component = asChild ? Slot : component
  return (
    <Component
      className={cn(flexVariants({ align, justify, wrap, gap, direction }), className)}
      {...rest}
    />
  )
}

export default Flex
