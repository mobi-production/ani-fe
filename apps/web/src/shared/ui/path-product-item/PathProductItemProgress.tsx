import { ComponentProps, ElementType, useMemo } from 'react'

import { PATH_STATUS_BADGE, PathStatusBadgeType } from './variants'
import { Badge, ImageSection, ProgressBar, Typography } from '@repo/ui/src/server'

type PathProductItemProgressProps = ComponentProps<'div'> & {
  component?: ElementType
}
function PathProductItemProgress({ component = 'div', ...props }: PathProductItemProgressProps) {
  const Component = component

  return (
    <Component
      className='flex min-h-[7.5rem] max-w-[22.75rem] flex-row gap-[0.75rem]'
      {...props}
    />
  )
}

type ImageProps = ComponentProps<typeof ImageSection>

function Image({ src, alt, className, ...props }: ImageProps) {
  return (
    <ImageSection
      src={src}
      alt={alt}
      className={className}
      size='xs'
      {...props}
    />
  )
}

type RightSectionProps = ComponentProps<'div'> & {
  level: number
  category: string
  name: string
  badgeType: PathStatusBadgeType
} & ProgressBarProps

function RightSection({ level, category, name, badgeType = 'SCHEDULE', value }: RightSectionProps) {
  const { badgeColor, badgeLabel } = useMemo(() => {
    return {
      badgeColor: PATH_STATUS_BADGE[badgeType].COLOR,
      badgeLabel: PATH_STATUS_BADGE[badgeType].LABEL
    }
  }, [badgeType])

  return (
    <div className='flex w-[100%] flex-col justify-between'>
      <div>
        <div className='mb-[0.75rem] flex flex-row gap-[0.375rem]'>
          <Badge>Lv.{level}</Badge>
          <Badge>{category}</Badge>
          <Badge color={badgeColor}>{badgeLabel}</Badge>
        </div>
        <Typography
          variant='label-reading'
          fontWeight='semibold'
          className='mb-[1rem] line-clamp-2'>
          {name}
        </Typography>
      </div>
      <ProgressBar value={value} />
    </div>
  )
}

PathProductItemProgress.Image = Image
PathProductItemProgress.RightSection = RightSection

export default PathProductItemProgress
