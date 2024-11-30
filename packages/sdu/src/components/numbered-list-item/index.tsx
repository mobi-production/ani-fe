import { ColorStyle } from '@repo/sdu/types/common'
import { Flex, Typography } from '@repo/ui/server'
import { PropsWithChildren } from 'react'

import { ServerDrivenComponentType } from '../..'
import SDUText, { TextProps } from '../text'

type SDUBulletedListProps = {
  rich_text: TextProps[]
  numbered: number
  content: ServerDrivenComponentType[]
  style?: ColorStyle
}

function SDUNumberedList({ rich_text, numbered, style }: PropsWithChildren<SDUBulletedListProps>) {
  return (
    <Flex
      gap={8}
      style={style}>
      <div
        className='p-2'
        style={{ color: style?.color }}>
        <Typography
          variant='body-1-normal'
          fontWeight='medium'
          color={style?.color ? 'inherit' : 'normal'}>
          {numbered}.
        </Typography>
      </div>
      <Flex
        asChild
        direction='column'>
        <ul className='pt-2'>
          <SDUNumberedListItem rich_text={rich_text} />
        </ul>
      </Flex>
    </Flex>
  )
}

type SDUNumberedListItemProps = {
  rich_text: TextProps[]
}

function SDUNumberedListItem({ rich_text }: SDUNumberedListItemProps) {
  return (
    <SDUText
      tag='li'
      rich_text={rich_text}
    />
  )
}

export default SDUNumberedList
