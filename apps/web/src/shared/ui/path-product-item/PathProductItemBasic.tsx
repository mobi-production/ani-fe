import { useMemo } from 'react'
import { ComponentProps } from 'react'
import { PATH_STATUS_BADGE, PathStatusBadgeType } from './variants'
import { Badge, Flex, ImageSection, Typography } from '@repo/ui/server'

type PathProductItemBasicProps = ComponentProps<'div'>
function PathProductItemBasic({ ...props }: PathProductItemBasicProps) {
  return (
    <Flex
      direction='column'
      className='min-h-[20.813rem] max-w-[18.75rem] gap-[0.75rem]'
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

function BadgeList({ level, category, badgeType }: BadgeListProps) {
  const { badgeColor, badgeLabel } = useMemo(() => {
    if (!badgeType) {
      return {
        badgeColor: undefined,
        badgeLabel: undefined
      }
    }
    return {
      badgeColor: PATH_STATUS_BADGE[badgeType].COLOR,
      badgeLabel: PATH_STATUS_BADGE[badgeType].LABEL
    }
  }, [badgeType])

  return (
    <Flex
      direction='row'
      className='gap-[0.375rem]'>
      <Badge>Lv.{level}</Badge>
      <Badge>{category}</Badge>
      {badgeType && <Badge color={badgeColor}>{badgeLabel}</Badge>}
    </Flex>
  )
}

type TextContentListProps = ComponentProps<'div'> & {
  name: string
  period: string
}

function TextContentList({ name, period }: TextContentListProps) {
  return (
    <Flex
      direction='column'
      className='gap-[0.375rem]'>
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
    </Flex>
  )
}

PathProductItemBasic.Image = Image
PathProductItemBasic.BadgeList = BadgeList
PathProductItemBasic.TextContentList = TextContentList

export default PathProductItemBasic
