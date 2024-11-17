import { Slot } from '@radix-ui/react-slot'
import cn from '@repo/util/cn'
import { cva, type VariantProps } from 'class-variance-authority'

import Typography from '../typography'
import { ButtonSize, ButtonVariant, CustomButtonProps, SizeMapping } from './variants'

const buttonVariants = cva('reset-button flex items-center justify-center gap-[0.25rem]', {
  variants: {
    variant: {
      [ButtonVariant.PRIMARY]: 'text-label-normal',
      [ButtonVariant.SECONDARY]: 'text-label-normal'
    },
    disabled: {
      true: 'cursor-not-allowed text-label-disable',
      false: 'cursor-pointer hover:opacity-90 active:opacity-100'
    },
    fullWidth: {
      true: 'w-full',
      false: ''
    }
  },
  defaultVariants: {
    variant: ButtonVariant.PRIMARY,
    disabled: false,
    fullWidth: false
  }
})

type Props = VariantProps<typeof buttonVariants> &
  CustomButtonProps & {
    size?: (typeof ButtonSize)[keyof typeof ButtonSize]
  }

function TextButton({
  variant,
  asChild,
  size = ButtonSize.MEDIUM,
  children,
  disabled = false,
  className,
  rightIcon,
  fullWidth = false,
  ...props
}: Props) {
  const Component = asChild ? Slot : 'button'

  return (
    <Component
      className={cn(buttonVariants({ variant, disabled, fullWidth }), className)}
      {...props}>
      <Typography
        variant={SizeMapping[size].fontVariant}
        fontWeight={SizeMapping[size].fontWeight}
        color='inherit'>
        {children}
      </Typography>
      {rightIcon}
    </Component>
  )
}

export default TextButton
