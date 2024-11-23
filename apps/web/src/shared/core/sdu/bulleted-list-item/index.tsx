import { Flex } from '@repo/ui/server'
import { ComponentProps, PropsWithChildren } from 'react'
import SDUParagraph from '../paragraph'

type ListItemProps = ComponentProps<typeof SDUParagraph>

function SDUBulletedListItem({ ...props }: ListItemProps) {
  return (
    <li>
      <SDUParagraph {...props} />
    </li>
  )
}

type SDUBulletedListProps = {
  text: ListItemProps[]
  depth: number
}

const Bullet = ({ depth }: { depth: number }) => {
  const level = depth % 3

  switch (level) {
    case 0:
      return <div className='h-2 w-2 rounded-lg bg-label-neutral' />
    case 1:
      return <div className='h-2 w-2 rounded-lg border border-label-neutral' />
    case 2:
      return <div className='h-2 w-2 rounded-sm bg-label-neutral' />
  }
}

function SDUBulletedList({ text, depth = 0, children }: PropsWithChildren<SDUBulletedListProps>) {
  return (
    <Flex gap={8}>
      <div className='p-2'>
        <Bullet depth={depth} />
      </div>
      <Flex
        asChild
        direction='column'>
        <ul>
          {text.map((item) => (
            <SDUBulletedListItem
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

SDUBulletedList.displayName = 'SDUBulletedList'
SDUBulletedList.Item = SDUBulletedListItem

export default SDUBulletedList
