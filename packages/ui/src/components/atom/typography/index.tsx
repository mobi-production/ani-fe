import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef, ElementType } from 'react'

import { TypographyColors, TypographyFontWeights, TypographyVariants } from './variants'

export const typographyVariants = cva('', {
  variants: {
    variant: {
      [TypographyVariants.DISPLAY1]: 'text-d1',
      [TypographyVariants.DISPLAY2]: 'text-d2',
      [TypographyVariants.TITLE1]: 'text-t1',
      [TypographyVariants.TITLE2]: 'text-t2',
      [TypographyVariants.TITLE3]: 'text-t3',
      [TypographyVariants.HEADING1]: 'text-h1',
      [TypographyVariants.HEADING2]: 'text-h2',
      [TypographyVariants.BODY1_NORMAL]: 'text-b1-normal',
      [TypographyVariants.BODY1_READING]: 'text-b1-reading',
      [TypographyVariants.BODY2_NORMAL]: 'text-b2-normal',
      [TypographyVariants.BODY2_READING]: 'text-b2-reading',
      [TypographyVariants.LABEL_NORMAL]: 'text-l-normal',
      [TypographyVariants.LABEL_READING]: 'text-l-reading',
      [TypographyVariants.CAPTION1]: 'text-c1',
      [TypographyVariants.CAPTION2]: 'text-c2'
    },
    fontWeight: {
      [TypographyFontWeights.REGULAR]: 'font-normal',
      [TypographyFontWeights.MEDIUM]: 'font-medium',
      [TypographyFontWeights.SEMIBOLD]: 'font-semibold',
      [TypographyFontWeights.BOLD]: 'font-bold'
    },
    color: {
      [TypographyColors.INHERIT]: 'text-inherit',
      [TypographyColors.NORMAL]: 'text-label-normal',
      [TypographyColors.STRONG]: 'text-label-strong',
      [TypographyColors.NEUTRAL]: 'text-label-neutral',
      [TypographyColors.ALTERNATIVE]: 'text-label-alternative',
      [TypographyColors.ASSISTIVE]: 'text-label-assistive',
      [TypographyColors.DISABLE]: 'text-label-disable'
    }
  },
  defaultVariants: {
    variant: TypographyVariants.BODY1_NORMAL,
    fontWeight: TypographyFontWeights.REGULAR,
    color: TypographyColors.NORMAL
  }
})

type TypographyProps = VariantProps<typeof typographyVariants> &
  ComponentPropsWithoutRef<'span'> & {
    component?: ElementType
    asChild?: boolean
  }

function Typography({
  component = 'span',
  variant,
  fontWeight,
  color,
  className = '',
  asChild,
  ...props
}: TypographyProps) {
  const Component = asChild ? Slot : component

  return (
    <Component
      className={`${typographyVariants({ variant, fontWeight, color })} ${className}`}
      {...props}
    />
  )
}

export default Typography
