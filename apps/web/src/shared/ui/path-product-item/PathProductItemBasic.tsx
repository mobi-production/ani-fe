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

type ImageProps = ComponentProps<typeof ImageSection> & {
  isApplied?: boolean
}

function Image({ src, alt, isApplied = false, className, ...props }: ImageProps) {
  return (
    <div className='relative'>
      <ImageSection
        src={src}
        alt={alt}
        className={className}
        size='m'
        {...props}
      />
      {isApplied && (
        <Badge
          className='absolute left-[0.875rem] top-[1rem]'
          color='green'>
          신청완료
        </Badge>
      )}
    </div>
  )
}

type BadgeListProps = ComponentProps<'div'> & {
  level: number
  category: string
  badgeType?: PathStatusBadgeType
}

function BadgeList({ level = 0, category = '', badgeType }: BadgeListProps) {
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
  applyPeriod: string
  progressPeriod: string
}

function TextContentList({
  name = '',
  applyPeriod = '',
  progressPeriod = ''
}: TextContentListProps) {
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
        {`신청 기간 | ${applyPeriod}`}
      </Typography>
      <Typography
        color='alternative'
        variant='caption-2'
        fontWeight='regular'>
        {`진행 기간 | ${progressPeriod}`}
      </Typography>
    </Flex>
  )
}

PathProductItemBasic.Image = Image
PathProductItemBasic.BadgeList = BadgeList
PathProductItemBasic.TextContentList = TextContentList

export default PathProductItemBasic
