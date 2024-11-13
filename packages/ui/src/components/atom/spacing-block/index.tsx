import { Slot } from '@radix-ui/react-slot'
import { cn } from '@repo/util'
import { SpacingBlockVariants } from '@ui/components/atom/spacing-block/variants'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

const spacingBlockVariants = cva('', {
  variants: {
    width: {
      default: '',
      [SpacingBlockVariants['1']]: 'w-4r',
      [SpacingBlockVariants['2']]: 'w-8r',
      [SpacingBlockVariants['3']]: 'w-12r',
      [SpacingBlockVariants['4']]: 'w-16r',
      [SpacingBlockVariants['5']]: 'w-20r',
      [SpacingBlockVariants['6']]: 'w-24r',
      [SpacingBlockVariants['7']]: 'w-28r',
      [SpacingBlockVariants['8']]: 'w-32r',
      [SpacingBlockVariants['9']]: 'w-36r',
      [SpacingBlockVariants['10']]: 'w-40r',
      [SpacingBlockVariants['11']]: 'w-44r',
      [SpacingBlockVariants['12']]: 'w-48r',
      [SpacingBlockVariants['16']]: 'w-64r'
    },
    height: {
      default: '',
      [SpacingBlockVariants['1']]: 'h-4r',
      [SpacingBlockVariants['2']]: 'h-8r',
      [SpacingBlockVariants['3']]: 'h-12r',
      [SpacingBlockVariants['4']]: 'h-16r',
      [SpacingBlockVariants['5']]: 'h-20r',
      [SpacingBlockVariants['6']]: 'h-24r',
      [SpacingBlockVariants['8']]: 'h-32r',
      [SpacingBlockVariants['12']]: 'h-48r',
      [SpacingBlockVariants['16']]: 'h-64r'
    },
    size: {
      default: '',
      [SpacingBlockVariants['1']]: 'w-4r h-4r',
      [SpacingBlockVariants['2']]: 'w-8r h-8r',
      [SpacingBlockVariants['3']]: 'w-12r h-12r',
      [SpacingBlockVariants['4']]: 'w-16r h-16r',
      [SpacingBlockVariants['5']]: 'w-20r h-20r',
      [SpacingBlockVariants['6']]: 'w-24r h-24r',
      [SpacingBlockVariants['8']]: 'w-32r h-32r',
      [SpacingBlockVariants['12']]: 'w-48r h-48r',
      [SpacingBlockVariants['16']]: 'w-64r h-64r'
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
    showBlock: true
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
