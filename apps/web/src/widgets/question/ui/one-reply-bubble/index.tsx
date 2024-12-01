import { Badge, Typography } from '@repo/ui/server'
import cn from '@repo/util/cn'
import { formatDate } from '@repo/util/formatDate'
import { ComponentProps } from 'react'
import { BadgeColors } from '@repo/ui/components/badge/variants'
import Image from 'next/image'
import { Flex } from '@repo/ui/server'

function OneReplyBubble({ children, className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('cursor-pointer', className)}
      {...props}>
      {children}
    </div>
  )
}

type UserProps = {
  isMe: boolean
  nickName: string
  imageUrl?: string
}

function User({ imageUrl, nickName, isMe }: UserProps) {
  return (
    <Flex
      gap={10}
      align={'center'}>
      {isMe && <Typography>Me</Typography>}
      <div className='relative h-[2rem] w-[2rem] overflow-hidden rounded-full'>
        <Image
          src={imageUrl ?? '/avif/placeholder.avif'}
          alt='답변 사용자 이미지'
          fill
          className='object-cover'
        />
      </div>
      {!isMe && <Typography>{nickName}</Typography>}
    </Flex>
  )
}

type ContentsProps = {
  contents: string
  isMe: boolean
} & ComponentProps<'div'>

function Contents({ contents, isMe, className, ...props }: ContentsProps) {
  return (
    <div
      className={cn(
        'min-w-[4.125rem] max-w-[17.5rem] rounded-lg px-[1.25rem] py-[0.625rem]',
        !isMe && 'bg-background-alternative',
        isMe && 'bg-primary-normal',
        className
      )}
      {...props}>
      <Typography
        variant={'body-2-normal'}
        color={isMe ? 'mint99' : 'normal'}>
        {contents}
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
      {...props}>
      {formatDate(date, 'yy.MM.dd')}
    </Typography>
  )
}

type BubbleProps = {
  nickName: string
  contents: string
  date: Date | string
  imageUrl?: string
} & ComponentProps<'div'>

function MentoBubble({ imageUrl, nickName, contents, date }: BubbleProps) {
  return (
    <Flex
      direction={'column'}
      gap={10}>
      <User
        imageUrl={imageUrl}
        nickName={nickName}
        isMe={false}
      />
      <Contents
        contents={contents}
        isMe={false}
      />
      <Date date={date} />
    </Flex>
  )
}

function MentiBubble({ imageUrl, nickName, contents, date }: BubbleProps) {
  return (
    <Flex
      direction={'column'}
      gap={10}
      justify={'end'}
      align={'end'}>
      <User
        imageUrl={imageUrl}
        nickName={nickName}
        isMe
      />
      <Contents
        contents={contents}
        isMe
      />
      <Date date={date} />
    </Flex>
  )
}

OneReplyBubble.Mento = MentoBubble
OneReplyBubble.Menti = MentiBubble

export default OneReplyBubble
