import { Slot } from '@radix-ui/react-slot'
import { ComponentProps } from 'react'

import Flex from '../flex'
import { FlexAlign, FlexDirection } from '../flex/variants'
import Typography from '../typography'
import { TypographyColors, TypographyFontWeights, TypographyVariants } from '../typography/variants'
import { ProgressBarValue, ProgressBarValueSchema } from './variants'

type ProgressBarProps = ComponentProps<'div'> & {
  value: ProgressBarValue
  showPercentage?: boolean
  color?: string
  asChild?: boolean
}

function ProgressBar({
  value,
  showPercentage = true,
  color = 'primary-normal',
  asChild,
  className,
  ...props
}: ProgressBarProps) {
  const Component = asChild ? Slot : 'div'

  const { success, data } = ProgressBarValueSchema.safeParse(value)
  const validValue = success ? data : 0

  return (
    <Flex
      direction={FlexDirection.COLUMN}
      align={FlexAlign.END}
      className={`w-[100%] gap-[0.25rem] ${className}`}
      {...props}>
      <PercentageText
        value={validValue}
        showPercentage={showPercentage}
      />
      <Component className='relative min-h-[0.375rem] w-[100%] rounded-[1.875rem] bg-[#17171715]'>
        <div
          className={`absolute right-0 top-0 min-h-[0.375rem] rounded-[1.875rem] bg-${color}`}
          style={{ width: `${validValue}%` }}
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
