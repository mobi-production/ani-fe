import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef, ElementType } from 'react'

const typographyVariants = cva('', {
  variants: {
    variant: {
      Display1: 'text-d1',
      Display2: 'text-d2',
      Title1: 'text-t1',
      Title2: 'text-t2',
      Title3: 'text-t3',
      Heading1: 'text-h1',
      Heading2: 'text-h2',
      'Body1/Normal': 'text-b1-normal',
      'Body1/Reading': 'text-b1-reading',
      'Body2/Normal': 'text-b2-normal',
      'Body2/Reading': 'text-b2-reading',
      'Label/Normal': 'text-l-normal',
      'Label/Reading': 'text-l-reading',
      Caption1: 'text-c1',
      Caption2: 'text-c2'
    },
    fontWeight: {
      Regular: 'font-normal',
      Medium: 'font-medium',
      Bold: 'font-bold',
      Semibold: 'font-semibold'
    },
    color: {
      Normal: 'text-label-normal',
      Strong: 'text-label-strong',
      Neutral: 'text-label-neutral',
      Alternative: 'text-label-alternative',
      Assistive: 'text-label-assistive',
      Disabled: 'text-label-disabled'
    }
  },
  defaultVariants: {
    variant: 'Body1/Normal',
    fontWeight: 'Regular',
    color: 'Normal'
  }
})

type Props = VariantProps<typeof typographyVariants> & ComponentPropsWithoutRef<'span'>

function Typography({ variant, fontWeight, color, ...props }: Props) {
  const Component: ElementType =
    variant === 'Display1' || variant === 'Display2'
      ? 'h1'
      : variant === 'Title1'
        ? 'h2'
        : variant === 'Title2'
          ? 'h3'
          : variant === 'Title3'
            ? 'h4'
            : variant === 'Heading1'
              ? 'h5'
              : variant === 'Heading2'
                ? 'h6'
                : 'p'

  return (
    <Component
      className={`${typographyVariants({ variant, fontWeight, color })} ${props.className}`}
      {...props}
    />
  )
}

export default Typography
