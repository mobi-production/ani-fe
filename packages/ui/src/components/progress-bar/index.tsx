import { FlexAlign, FlexDirection } from '@repo/ui/components/flex/variants'
import {
  TypographyColors,
  TypographyFontWeights,
  TypographyVariants
} from '@repo/ui/components/typography/variants'
import { ComponentProps } from 'react'

import Flex from '../flex'
import Typography from '../typography'
import {
  PROGRESS_BAR_VALUE_MAX_VALUE,
  PROGRESS_BAR_VALUE_MIN_VALUE,
  ProgressBarValue,
  ProgressBarValueSchema
} from './variants'

export type ProgressBarProps = ComponentProps<'div'> & {
  value: ProgressBarValue
  showPercentage?: boolean
  color?: string
}

function ProgressBar({
  value,
  showPercentage = true,
  color = 'primary-normal',
  className,
  ...props
}: ProgressBarProps) {
  const parseResult = ProgressBarValueSchema.safeParse(value)

  if (!parseResult.success) {
    const errorMessages = parseResult.error.issues.map((issue) => issue.message).join('; ')
    throw new Error(`ProgressBar value error: ${errorMessages}`)
  }

  const validValue = Math.min(
    PROGRESS_BAR_VALUE_MAX_VALUE,
    Math.max(PROGRESS_BAR_VALUE_MIN_VALUE, value)
  )

  return (
    <Flex
      direction={FlexDirection.COLUMN}
      align={FlexAlign.END}
      className={`w-[100%] gap-[0.25rem] ${className}`}
      {...props}>
      {showPercentage && (
        <Typography
          variant={TypographyVariants.CAPTION2}
          fontWeight={TypographyFontWeights.REGULAR}
          color={TypographyColors.ALTERNATIVE}>
          {validValue}%
        </Typography>
      )}
      <div className='relative min-h-[0.375rem] w-[100%] overflow-hidden rounded-[1.875rem] bg-[#17171715]'>
        <div
          className={`absolute right-0 top-0 min-h-[0.375rem] w-[100%] rounded-[1.875rem] bg-${color}`}
          style={{
            transform: `scaleX(${validValue / 100})`,
            transformOrigin: 'center left',
            transition: 'transform 1.5s ease'
          }}
        />
      </div>
    </Flex>
  )
}

export default ProgressBar
