import { Badge, ImageSection, Typography } from '@repo/ui/server'
import { ComponentProps, ElementType, useMemo } from 'react'
import { ASSIGNMENT_STATUS_BADGE, AssignmentStatusBadgeType } from './variants'

type PathProductItemAssignmentProps = ComponentProps<'div'> & {
  component?: ElementType
}

function PathProductItemAssignment({
  component = 'div',
  ...props
}: PathProductItemAssignmentProps) {
  const Component = component

  return (
    <Component
      className='flex min-h-[5rem] w-[22.75rem] flex-row items-center justify-between'
      {...props}
    />
  )
}

type LeftSectionProps = ComponentProps<typeof ImageSection> & {
  pathName: string
  assignmentName: string
  endDate: string
}

function LeftSection({
  src,
  alt = 'path-assignment-image',
  pathName = '',
  assignmentName = '',
  endDate = '',
  ...props
}: LeftSectionProps) {
  return (
    <div className='flex w-[16.75rem] flex-row items-center gap-[0.75rem]'>
      <ImageSection
        src={src}
        alt={alt}
        size='xxs'
        {...props}
      />
      <div className='flex flex-col'>
        <Typography
          color='alternative'
          variant='caption-1'
          className='mb-[0.25rem]'>
          {pathName}
        </Typography>
        <Typography
          variant='label-reading'
          fontWeight='semibold'
          className='mb-[0.5rem] line-clamp-1'>
          {assignmentName}
        </Typography>
        <Typography
          color='alternative'
          variant='caption-1'>
          {endDate}
        </Typography>
      </div>
    </div>
  )
}
type StatusBadgeProps = ComponentProps<typeof Badge> & {
  badgeType: AssignmentStatusBadgeType
}

function StatusBadge({ badgeType, ...props }: StatusBadgeProps) {
  const { badgeColor, badgeLabel } = useMemo(() => {
    return {
      badgeColor: ASSIGNMENT_STATUS_BADGE[badgeType].COLOR,
      badgeLabel: ASSIGNMENT_STATUS_BADGE[badgeType].LABEL
    }
  }, [badgeType])

  return (
    <Badge
      color={badgeColor}
      size='m'
      {...props}>
      {badgeLabel}
    </Badge>
  )
}

PathProductItemAssignment.LeftSection = LeftSection
PathProductItemAssignment.StatusBadge = StatusBadge

export default PathProductItemAssignment
