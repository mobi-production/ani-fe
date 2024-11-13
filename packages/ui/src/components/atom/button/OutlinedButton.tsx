import { Slot } from '@radix-ui/react-slot'
import { cn } from '@repo/util'
import {
  ButtonSize,
  ButtonVariant,
  CustomButtonProps,
  SizeMapping
} from '@ui/components/atom/button/variants'
import Typography from '@ui/components/atom/typography'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'reset-button rounded-lg px-[1rem] bg-inherit flex items-center justify-center gap-[0.25rem] border-[1.5px] border-solid',
  {
    variants: {
      variant: {
        [ButtonVariant.PRIMARY]: ' text-label-normal border-line-strong',
        [ButtonVariant.SECONDARY]: 'text-label-normal border-line-normal'
      },
      size: {
        [ButtonSize.LARGE]: 'min-w-[5rem] h-[3.5rem]',
        [ButtonSize.MEDIUM]: 'min-w-[5rem] h-[3rem]',
        [ButtonSize.SMALL]: 'min-w-[3.75rem] h-[2.5rem]'
      },
      disabled: {
        true: 'cursor-not-allowed text-label-alternative border-line-normal',
        false: 'cursor-pointer hover:opacity-90 active:opacity-100'
      }
    },
    defaultVariants: {
      variant: ButtonVariant.PRIMARY,
      size: ButtonSize.MEDIUM,
      disabled: false
    }
  }
)

type Props = VariantProps<typeof buttonVariants> & CustomButtonProps

function OutlinedButton({
  variant,
  size = ButtonSize.MEDIUM,
  asChild,
  children,
  disabled = false,
  className,
  rightIcon,
  ...props
}: Props) {
  const Component = asChild ? Slot : 'button'

  if (!size) {
    throw new Error('size is required')
  }

  return (
    <Component
      className={cn(buttonVariants({ variant, size, disabled }), className)}
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

export default OutlinedButton
