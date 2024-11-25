import { Badge, Typography } from '@repo/ui/server'
import cn from '@repo/util/cn'
import { formatDate } from '@repo/util/formatDate'
import { ComponentProps } from 'react'
import { BadgeColors } from '@repo/ui/components/badge/variants'

function OneQuestionPreview({ children, className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('cursor-pointer', className)}
      {...props}>
      {children}
    </div>
  )
}

type LabelProps = {
  label: string
  theme: keyof typeof BadgeColors
}

function Tag({ label, theme }: LabelProps) {
  return (
    <Badge
      color={BadgeColors[theme]}
      className='mb-[0.5rem]'>
      {label}
    </Badge>
  )
}

function Title({ children, className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('overflow-hidden text-ellipsis whitespace-nowrap', className)}
      {...props}>
      <Typography
        variant={'body-2-reading'}
        fontWeight={'semibold'}>
        {children}
      </Typography>
    </div>
  )
}

function Contents({ children, ...props }: ComponentProps<'div'>) {
  return (
    <div {...props}>
      <Typography
        className='line-clamp-2 overflow-hidden text-ellipsis'
        variant={'body-2-normal'}
        fontWeight={'regular'}>
        {children}
      </Typography>
    </div>
  )
}

type DateProps = {
  date: Date | string
}

function Date({ date, ...props }: DateProps) {
  return (
    <Typography
      variant={'caption-1'}
      color='alternative'
      fontWeight={'regular'}
      {...props}>
      {formatDate(date, 'yyyy.MM.dd')}
    </Typography>
  )
}

OneQuestionPreview.Tag = Tag
OneQuestionPreview.Title = Title
OneQuestionPreview.Contents = Contents
OneQuestionPreview.Date = Date

export default OneQuestionPreview
