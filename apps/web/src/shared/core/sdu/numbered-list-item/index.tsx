import { Flex } from '@repo/ui/server'
import { ComponentProps, PropsWithChildren } from 'react'
import SDUParagraph from '../paragraph'

type ListItemProps = ComponentProps<typeof SDUParagraph>

function SDUNumberedListItem({ ...props }: ListItemProps) {
  return (
    <li>
      <SDUParagraph {...props} />
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
      <SDUParagraph
        text={number + '.'}
        bold
      />
      <Flex
        asChild
        direction='column'>
        <ul>
          {text.map((item) => (
            <SDUNumberedListItem
              key={item.text}
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
