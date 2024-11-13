import { ComponentProps, ElementType, useMemo } from 'react'

import Badge from '../../atom/badge'
import ImageSection from '../../atom/image-section'
import Typography from '../../atom/typography'
import { PATH_STATUS_BADGE, PathStatusBadgeType } from './variants'

type PathProductItemBasicProps = ComponentProps<'div'> & {
  component?: ElementType
}
function PathProductItemBasic({ component = 'div', ...props }: PathProductItemBasicProps) {
  const Component = component

  return (
    <Component
      className='flex min-h-[20.813rem] max-w-[18.75rem] flex-col gap-[0.75rem]'
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
      size='m'
      {...props}
    />
  )
}

type BadgeListProps = ComponentProps<'div'> & {
  level: number
  category: string
  badgeType: PathStatusBadgeType
}

function BadgeList({ level, category, badgeType = 'SCHEDULE' }: BadgeListProps) {
  const { badgeColor, badgeLabel } = useMemo(() => {
    return {
      badgeColor: PATH_STATUS_BADGE[badgeType].COLOR,
      badgeLabel: PATH_STATUS_BADGE[badgeType].LABEL
    }
  }, [badgeType])

  return (
    <div className='flex flex-row gap-[0.375rem]'>
      <Badge>Lv.{level}</Badge>
      <Badge>{category}</Badge>
      <Badge color={badgeColor}>{badgeLabel}</Badge>
    </div>
  )
}

type TextContentListProps = ComponentProps<'div'> & {
  name: string
  period: string
}

function TextContentList({ name, period }: TextContentListProps) {
  return (
    <div className='flex flex-col gap-[0.375rem]'>
      <Typography
        className='line-clamp-2'
        variant='label-normal'
        fontWeight='semibold'>
        {name}
      </Typography>
      <Typography
        color='alternative'
        variant='caption-2'
        fontWeight='regular'>
        {period}
      </Typography>
    </div>
  )
}

PathProductItemBasic.Image = Image
PathProductItemBasic.BadgeList = BadgeList
PathProductItemBasic.TextContentList = TextContentList

export default PathProductItemBasic
