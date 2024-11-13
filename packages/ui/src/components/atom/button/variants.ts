import Typography from '@ui/components/atom/typography'
import { ComponentProps, ComponentPropsWithoutRef } from 'react'

export type CustomButtonProps = ComponentPropsWithoutRef<'button'> & {
  asChild?: boolean
  rightIcon?: React.ReactNode
}

export const ButtonVariant = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
} as const

export const ButtonSize = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small'
} as const

export const SizeMapping: Record<
  (typeof ButtonSize)[keyof typeof ButtonSize],
  {
    fontVariant: ComponentProps<typeof Typography>['variant']
    fontWeight: ComponentProps<typeof Typography>['fontWeight']
  }
> = {
  [ButtonSize.LARGE]: {
    fontVariant: 'body-1-normal',
    fontWeight: 'semibold'
  },
  [ButtonSize.MEDIUM]: {
    fontVariant: 'body-1-reading',
    fontWeight: 'medium'
  },
  [ButtonSize.SMALL]: {
    fontVariant: 'label-reading',
    fontWeight: 'medium'
  }
}
