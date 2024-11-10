import { Slot } from '@radix-ui/react-slot'
import { ComponentProps } from 'react'

import Flex from '../flex'
import { FlexAlign, FlexDirection } from '../flex/variants'
import Typography from '../typography'
import { TypographyColors, TypographyFontWeights, TypographyVariants } from '../typography/variants'

type ProgressBarProps = ComponentProps<'div'> & {
  value: number
  showPercentage?: boolean
  color?: string
  asChild?: boolean
}

function ProgressBar({
  value = 0,
  showPercentage = true,
  color = 'primary-normal',
  asChild,
  className,
  ...props
}: ProgressBarProps) {
  const Component = asChild ? Slot : 'div'

  if (value === undefined) {
    throw new Error('value is required')
  }

  return (
    <Flex
      direction={FlexDirection.COLUMN}
      align={FlexAlign.END}
      className={`w-[100%] gap-[0.25rem] ${className}`}
      {...props}>
      <PercentageText
        value={value}
        showPercentage={showPercentage}
      />
      <Component className='relative min-h-[0.375rem] w-[100%] rounded-[1.875rem] bg-[#17171715]'>
        <div
          className={`absolute right-0 top-0 min-h-[0.375rem] rounded-[1.875rem] bg-${color}`}
          style={{ width: `${value}%` }}
        />
      </Component>
    </Flex>
  )
}

type PercentageTextProps = {
  value: number
  showPercentage?: boolean
}

function PercentageText({ value, showPercentage = true }: PercentageTextProps) {
  if (!showPercentage) return null
  return (
    <Typography
      variant={TypographyVariants.CAPTION2}
      fontWeight={TypographyFontWeights.REGULAR}
      color={TypographyColors.ALTERNATIVE}>
      {value}%
    </Typography>
  )
}

export default ProgressBar
