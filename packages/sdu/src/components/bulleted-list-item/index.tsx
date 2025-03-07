import cn from '@repo/sdu/libs/cn'
import { ColorStyle } from '@repo/sdu/types/common'
import { Flex } from '@repo/ui/server'
import { PropsWithChildren } from 'react'

import { ServerDrivenComponentType } from '../..'
import SDUText, { TextProps } from '../text'

type SDUBulletedListProps = {
  rich_text: TextProps[]
  depth: number
  content: ServerDrivenComponentType[]
  style?: ColorStyle
}

const Bullet = ({ depth, color }: { depth: number; color?: string }) => {
  const level = depth % 3

  switch (level) {
    case 0:
      return (
        <div
          className={cn('h-2 w-2 rounded-lg', !color && 'bg-label-neutral')}
          style={{ backgroundColor: color }}
        />
      )
    case 1:
      return (
        <div
          className={cn('h-2 w-2 rounded-lg border', !color && 'border-label-neutral')}
          style={{ borderColor: color }}
        />
      )
    case 2:
      return (
        <div
          className={cn('h-2 w-2 rounded-sm', !color && 'bg-label-neutral')}
          style={{ backgroundColor: color }}
        />
      )
  }
}

function SDUBulletedList({
  rich_text,
  depth,
  style,
  children
}: PropsWithChildren<SDUBulletedListProps>) {
  return (
    <Flex
      gap={8}
      style={style}>
      <div className='p-2'>
        <Bullet
          depth={depth}
          color={style?.color}
        />
      </div>
      <Flex
        asChild
        direction='column'>
        <ul>
          <SDUBulletedListItem rich_text={rich_text} />
          {children}
        </ul>
      </Flex>
    </Flex>
  )
}

type SDUBulletedListItemProps = {
  rich_text: TextProps[]
}

function SDUBulletedListItem({ rich_text }: SDUBulletedListItemProps) {
  return (
    <SDUText
      tag='li'
      rich_text={rich_text}
    />
  )
}

SDUBulletedList.displayName = 'SDUBulletedList'
SDUBulletedList.Item = SDUBulletedListItem

export default SDUBulletedList
