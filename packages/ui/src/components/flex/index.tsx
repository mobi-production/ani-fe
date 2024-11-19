import { Slot } from '@radix-ui/react-slot'
import cn from '@repo/util/cn'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef, ElementType } from 'react'

import { FlexAlign, FlexDirection, FlexGap, FlexJustify, FlexWrap } from './variants'

const flexVariants = cva('flex', {
  variants: {
    align: {
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
      [FlexWrap.NOWRAP]: 'flex-nowrap',
      [FlexWrap.WRAP]: 'flex-wrap',
      [FlexWrap.WRAP_REVERSE]: 'flex-wrap-reverse'
    },
    gap: {
      [FlexGap.NONE]: 'gap-0',
      [FlexGap['0.25']]: 'gap-1r',
      [FlexGap['0.5']]: 'gap-2r',
      [FlexGap['0.75']]: 'gap-3r',
      [FlexGap['1']]: 'gap-4r',
      [FlexGap['1.25']]: 'gap-5r',
      [FlexGap['1.5']]: 'gap-6r',
      [FlexGap['1.75']]: 'gap-7r',
      [FlexGap['2']]: 'gap-8r',
      [FlexGap['2.25']]: 'gap-9r',
      [FlexGap['2.5']]: 'gap-10r',
      [FlexGap['2.75']]: 'gap-11r',
      [FlexGap['3']]: 'gap-12r',
      [FlexGap['4']]: 'gap-16r',
      [FlexGap['5']]: 'gap-20r',
      [FlexGap['6']]: 'gap-24r',
      [FlexGap['7']]: 'gap-28r',
      [FlexGap['8']]: 'gap-32r',
      [FlexGap['9']]: 'gap-36r',
      [FlexGap['10']]: 'gap-40r',
      [FlexGap['11']]: 'gap-44r',
      [FlexGap['12']]: 'gap-48r',
      [FlexGap['16']]: 'gap-64r'
    },
    direction: {
      [FlexDirection.ROW]: 'flex-row',
      [FlexDirection.COLUMN]: 'flex-col'
    }
  },
  defaultVariants: {
    align: '',
    justify: '',
    wrap: '',
    gap: '',
    direction: ''
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
