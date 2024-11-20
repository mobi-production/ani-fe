import { Slot } from '@radix-ui/react-slot'
import { SIZE_VARIANTS } from '@repo/ui/variants/size'
import cn from '@repo/util/cn'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

const spacingBlockVariants = cva('', {
  variants: {
    width: {
      default: '',
      [SIZE_VARIANTS['0.0625']]: 'w-[0.0625rem]',
      [SIZE_VARIANTS['0.125']]: 'w-[0.125rem]',
      [SIZE_VARIANTS['0.1875']]: 'w-[0.1875rem]',
      [SIZE_VARIANTS['0.25']]: 'w-[0.25rem]',
      [SIZE_VARIANTS['0.3125']]: 'w-[0.3125rem]',
      [SIZE_VARIANTS['0.375']]: 'w-[0.375rem]',
      [SIZE_VARIANTS['0.4375']]: 'w-[0.4375rem]',
      [SIZE_VARIANTS['0.5']]: 'w-[0.5rem]',
      [SIZE_VARIANTS['0.5625']]: 'w-[0.5625rem]',
      [SIZE_VARIANTS['0.625']]: 'w-[0.625rem]',
      [SIZE_VARIANTS['0.6875']]: 'w-[0.6875rem]',
      [SIZE_VARIANTS['0.75']]: 'w-[0.75rem]',
      [SIZE_VARIANTS['0.8125']]: 'w-[0.8125rem]',
      [SIZE_VARIANTS['0.875']]: 'w-[0.875rem]',
      [SIZE_VARIANTS['0.9375']]: 'w-[0.9375rem]',
      [SIZE_VARIANTS['1']]: 'w-[1rem]',
      [SIZE_VARIANTS['1.0625']]: 'w-[1.0625rem]',
      [SIZE_VARIANTS['1.125']]: 'w-[1.125rem]',
      [SIZE_VARIANTS['1.1875']]: 'w-[1.1875rem]',
      [SIZE_VARIANTS['1.25']]: 'w-[1.25rem]',
      [SIZE_VARIANTS['1.375']]: 'w-[1.375rem]',
      [SIZE_VARIANTS['1.5']]: 'w-[1.5rem]',
      [SIZE_VARIANTS['1.625']]: 'w-[1.625rem]',
      [SIZE_VARIANTS['1.75']]: 'w-[1.75rem]',
      [SIZE_VARIANTS['1.875']]: 'w-[1.875rem]',
      [SIZE_VARIANTS['2']]: 'w-[2rem]',
      [SIZE_VARIANTS['2.125']]: 'w-[2.125rem]',
      [SIZE_VARIANTS['2.25']]: 'w-[2.25rem]',
      [SIZE_VARIANTS['2.5']]: 'w-[2.5rem]',
      [SIZE_VARIANTS['2.75']]: 'w-[2.75rem]',
      [SIZE_VARIANTS['3']]: 'w-[3rem]',
      [SIZE_VARIANTS['4']]: 'w-[4rem]',
      [SIZE_VARIANTS['5']]: 'w-[5rem]',
      [SIZE_VARIANTS['6']]: 'w-[6rem]',
      [SIZE_VARIANTS['7']]: 'w-[7rem]',
      [SIZE_VARIANTS['8']]: 'w-[8rem]',
      [SIZE_VARIANTS['9']]: 'w-[9rem]',
      [SIZE_VARIANTS['10']]: 'w-[10rem]',
      [SIZE_VARIANTS['11']]: 'w-[11rem]',
      [SIZE_VARIANTS['12']]: 'w-[12rem]',
      [SIZE_VARIANTS['16']]: 'w-[16rem]',
      full: 'w-full'
    },
    height: {
      default: '',
      [SIZE_VARIANTS['0.0625']]: 'h-[0.0625rem]',
      [SIZE_VARIANTS['0.125']]: 'h-[0.125rem]',
      [SIZE_VARIANTS['0.1875']]: 'h-[0.1875rem]',
      [SIZE_VARIANTS['0.25']]: 'h-[0.25rem]',
      [SIZE_VARIANTS['0.3125']]: 'h-[0.3125rem]',
      [SIZE_VARIANTS['0.375']]: 'h-[0.375rem]',
      [SIZE_VARIANTS['0.4375']]: 'h-[0.4375rem]',
      [SIZE_VARIANTS['0.5']]: 'h-[0.5rem]',
      [SIZE_VARIANTS['0.5625']]: 'h-[0.5625rem]',
      [SIZE_VARIANTS['0.625']]: 'h-[0.625rem]',
      [SIZE_VARIANTS['0.6875']]: 'h-[0.6875rem]',
      [SIZE_VARIANTS['0.75']]: 'h-[0.75rem]',
      [SIZE_VARIANTS['0.8125']]: 'h-[0.8125rem]',
      [SIZE_VARIANTS['0.875']]: 'h-[0.875rem]',
      [SIZE_VARIANTS['0.9375']]: 'h-[0.9375rem]',
      [SIZE_VARIANTS['1']]: 'h-[1rem]',
      [SIZE_VARIANTS['1.0625']]: 'h-[1.0625rem]',
      [SIZE_VARIANTS['1.125']]: 'h-[1.125rem]',
      [SIZE_VARIANTS['1.1875']]: 'h-[1.1875rem]',
      [SIZE_VARIANTS['1.25']]: 'h-[1.25rem]',
      [SIZE_VARIANTS['1.375']]: 'h-[1.375rem]',
      [SIZE_VARIANTS['1.5']]: 'h-[1.5rem]',
      [SIZE_VARIANTS['1.625']]: 'h-[1.625rem]',
      [SIZE_VARIANTS['1.75']]: 'h-[1.75rem]',
      [SIZE_VARIANTS['1.875']]: 'h-[1.875rem]',
      [SIZE_VARIANTS['2']]: 'h-[2rem]',
      [SIZE_VARIANTS['2.125']]: 'h-[2.125rem]',
      [SIZE_VARIANTS['2.25']]: 'h-[2.25rem]',
      [SIZE_VARIANTS['2.5']]: 'h-[2.5rem]',
      [SIZE_VARIANTS['2.75']]: 'h-[2.75rem]',
      [SIZE_VARIANTS['3']]: 'h-[3rem]',
      [SIZE_VARIANTS['4']]: 'h-[4rem]',
      [SIZE_VARIANTS['5']]: 'h-[5rem]',
      [SIZE_VARIANTS['6']]: 'h-[6rem]',
      [SIZE_VARIANTS['7']]: 'h-[7rem]',
      [SIZE_VARIANTS['8']]: 'h-[8rem]',
      [SIZE_VARIANTS['9']]: 'h-[9rem]',
      [SIZE_VARIANTS['10']]: 'h-[10rem]',
      [SIZE_VARIANTS['11']]: 'h-[11rem]',
      [SIZE_VARIANTS['12']]: 'h-[12rem]',
      [SIZE_VARIANTS['16']]: 'h-[16rem]',
      full: 'h-full'
    },
    size: {
      default: '',
      [SIZE_VARIANTS['0.0625']]: 'w-[0.0625rem] h-[0.0625rem]',
      [SIZE_VARIANTS['0.125']]: 'w-[0.125rem] h-[0.125rem]',
      [SIZE_VARIANTS['0.1875']]: 'w-[0.1875rem] h-[0.1875rem]',
      [SIZE_VARIANTS['0.25']]: 'w-[0.25rem] h-[0.25rem]',
      [SIZE_VARIANTS['0.3125']]: 'w-[0.3125rem] h-[0.3125rem]',
      [SIZE_VARIANTS['0.375']]: 'w-[0.375rem] h-[0.375rem]',
      [SIZE_VARIANTS['0.4375']]: 'w-[0.4375rem] h-[0.4375rem]',
      [SIZE_VARIANTS['0.5']]: 'w-[0.5rem] h-[0.5rem]',
      [SIZE_VARIANTS['0.5625']]: 'w-[0.5625rem] h-[0.5625rem]',
      [SIZE_VARIANTS['0.625']]: 'w-[0.625rem] h-[0.625rem]',
      [SIZE_VARIANTS['0.6875']]: 'w-[0.6875rem] h-[0.6875rem]',
      [SIZE_VARIANTS['0.75']]: 'w-[0.75rem] h-[0.75rem]',
      [SIZE_VARIANTS['0.8125']]: 'w-[0.8125rem] h-[0.8125rem]',
      [SIZE_VARIANTS['0.875']]: 'w-[0.875rem] h-[0.875rem]',
      [SIZE_VARIANTS['0.9375']]: 'w-[0.9375rem] h-[0.9375rem]',
      [SIZE_VARIANTS['1']]: 'w-[1rem] h-[1rem]',
      [SIZE_VARIANTS['1.0625']]: 'w-[1.0625rem] h-[1.0625rem]',
      [SIZE_VARIANTS['1.125']]: 'w-[1.125rem] h-[1.125rem]',
      [SIZE_VARIANTS['1.1875']]: 'w-[1.1875rem] h-[1.1875rem]',
      [SIZE_VARIANTS['1.25']]: 'w-[1.25rem] h-[1.25rem]',
      [SIZE_VARIANTS['1.375']]: 'w-[1.375rem] h-[1.375rem]',
      [SIZE_VARIANTS['1.5']]: 'w-[1.5rem] h-[1.5rem]',
      [SIZE_VARIANTS['1.625']]: 'w-[1.625rem] h-[1.625rem]',
      [SIZE_VARIANTS['1.75']]: 'w-[1.75rem] h-[1.75rem]',
      [SIZE_VARIANTS['1.875']]: 'w-[1.875rem] h-[1.875rem]',
      [SIZE_VARIANTS['2']]: 'w-[2rem] h-[2rem]',
      [SIZE_VARIANTS['2.125']]: 'w-[2.125rem] h-[2.125rem]',
      [SIZE_VARIANTS['2.25']]: 'w-[2.25rem] h-[2.25rem]',
      [SIZE_VARIANTS['2.5']]: 'w-[2.5rem] h-[2.5rem]',
      [SIZE_VARIANTS['2.75']]: 'w-[2.75rem] h-[2.75rem]',
      [SIZE_VARIANTS['3']]: 'w-[3rem] h-[3rem]',
      [SIZE_VARIANTS['4']]: 'w-[4rem] h-[4rem]',
      [SIZE_VARIANTS['5']]: 'w-[5rem] h-[5rem]',
      [SIZE_VARIANTS['6']]: 'w-[6rem] h-[6rem]',
      [SIZE_VARIANTS['7']]: 'w-[7rem] h-[7rem]',
      [SIZE_VARIANTS['8']]: 'w-[8rem] h-[8rem]',
      [SIZE_VARIANTS['9']]: 'w-[9rem] h-[9rem]',
      [SIZE_VARIANTS['10']]: 'w-[10rem] h-[10rem]',
      [SIZE_VARIANTS['11']]: 'w-[11rem] h-[11rem]',
      [SIZE_VARIANTS['12']]: 'w-[12rem] h-[12rem]',
      [SIZE_VARIANTS['16']]: 'w-[16rem] h-[16rem]',
      full: 'w-full h-full'
    },
    showBlock: {
      true: 'flex items-center box-border justify-center border-2 border-primary-normal',
      false: ''
    }
  },
  defaultVariants: {
    width: 'default',
    height: 'default',
    size: 'default',
    showBlock: false
  }
})

type SpacingBlockProps = VariantProps<typeof spacingBlockVariants> &
  ComponentProps<'div'> & {
    asChild?: boolean
  }

function SpacingBlock({
  width,
  height,
  size,
  className,
  showBlock,
  asChild,
  ...props
}: SpacingBlockProps) {
  const Component = asChild ? Slot : 'div'

  return (
    <Component
      className={cn(spacingBlockVariants({ width, height, size, showBlock }), className)}
      {...props}
    />
  )
}

export default SpacingBlock
