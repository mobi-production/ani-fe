import { ComponentProps, useMemo } from 'react'

import { PATH_STATUS_BADGE, PathStatusBadgeType } from './variants'
import { Badge, Flex, ImageSection, ProgressBar, Typography } from '@repo/ui/server'
import cn from '@repo/util/cn'

type PathProductItemProgressProps = ComponentProps<'div'> & {
  fullWidth?: boolean
}

function PathProductItemProgress({ fullWidth = false, ...props }: PathProductItemProgressProps) {
  return (
    <Flex
      direction='row'
      className={cn('min-h-[7.5rem] max-w-[22.75rem] gap-[0.75rem]', fullWidth && 'w-full')}
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
  value: ComponentProps<typeof ProgressBar>['value']
}

function RightSection({ level, category, name, badgeType = 'SCHEDULE', value }: RightSectionProps) {
  const { badgeColor, badgeLabel } = useMemo(() => {
    return {
      badgeColor: PATH_STATUS_BADGE[badgeType].COLOR,
      badgeLabel: PATH_STATUS_BADGE[badgeType].LABEL
    }
  }, [badgeType])

  return (
    <Flex
      direction='column'
      justify='between'
      className='w-[100%]'>
      <div>
        <Flex
          direction='row'
          className='mb-[0.75rem] gap-[0.375rem]'>
          <Badge>Lv.{level}</Badge>
          <Badge>{category}</Badge>
          <Badge color={badgeColor}>{badgeLabel}</Badge>
        </Flex>
        <Typography
          variant='label-reading'
          fontWeight='semibold'
          className='mb-[1rem] line-clamp-2'>
          {name}
        </Typography>
      </div>
      <ProgressBar value={value} />
    </Flex>
  )
}

PathProductItemProgress.Image = Image
PathProductItemProgress.RightSection = RightSection

export default PathProductItemProgress
