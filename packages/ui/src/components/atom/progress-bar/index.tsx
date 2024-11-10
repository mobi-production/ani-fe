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
  className,
  ...props
}: ProgressBarProps) {
  const { success, data } = ProgressBarValueSchema.safeParse(value)
  const validValue = success ? data : 0

  if (!success) {
    throw new Error('ProgressBar Value must be an between 0 and 100.')
  }

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
      <div className='relative min-h-[0.375rem] w-[100%] rounded-[1.875rem] bg-[#17171715]'>
        <div
          className={`absolute right-0 top-0 min-h-[0.375rem] w-[100%] rounded-[1.875rem] bg-${color}`}
          style={{
            transform: `scaleX(${validValue / 100})`,
            transformOrigin: 'center right',
            transition: 'transform 1.5s ease'
          }}
        />
      </div>
    </Flex>
  )
}

export default ProgressBar
