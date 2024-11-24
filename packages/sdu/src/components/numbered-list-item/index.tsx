import { Flex } from '@repo/ui/server'
import { ComponentProps, PropsWithChildren } from 'react'

import SDUText from '../text'

type ListItemProps = ComponentProps<typeof SDUText>

function SDUNumberedListItem({ ...props }: ListItemProps) {
  return (
    <li>
      <SDUText
        {...props}
        tag='li'
      />
    </li>
  )
}

type SDUNumberedListProps = {
  text: ListItemProps[]
  number: number
}

function SDUNumberedList({ text, number = 1, children }: PropsWithChildren<SDUNumberedListProps>) {
  return (
    <Flex gap={8}>
      <SDUText
        rich_text={[{ text: number + '.', bold: true }]}
        tag='li'
      />
      <Flex
        asChild
        direction='column'>
        <ul>
          {text.map((item, index) => (
            <SDUNumberedListItem
              key={index}
              {...item}
            />
          ))}
          {children}
        </ul>
      </Flex>
    </Flex>
  )
}

SDUNumberedList.displayName = 'SDUNumberedList'
SDUNumberedList.Item = SDUNumberedListItem

export default SDUNumberedList
