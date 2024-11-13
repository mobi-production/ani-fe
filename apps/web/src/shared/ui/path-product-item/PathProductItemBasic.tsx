import { Slot } from '@radix-ui/react-slot'
import { Badge, ImageSection, Typography } from '@repo/ui/server'
import { ComponentProps, ElementType } from 'react'
import { PATH_STATUS_BADGE, PathStatusBadgeType } from './variants'

type PathProductItemBasicProps = ComponentProps<'div'> & {
  component?: ElementType
  asChild?: boolean
}
function PathProductItemBasic({ component = 'div', asChild, ...props }: PathProductItemBasicProps) {
  const Component = asChild ? Slot : component

  return (
    <Component
      className='flex min-h-[333px] max-w-[18.75rem] flex-col gap-[0.75rem]'
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
  badgeType?: PathStatusBadgeType
}

function BadgeList({ level = 0, category = '', badgeType = 'SCHEDULE' }: BadgeListProps) {
  const badgeColor = PATH_STATUS_BADGE[badgeType].COLOR
  const badgeLabel = PATH_STATUS_BADGE[badgeType].LABEL

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
