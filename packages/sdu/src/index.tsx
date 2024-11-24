import { Flex } from '@repo/ui/server'
import { ComponentProps } from 'react'

import SDUBookmark from './components/bookmark'
import SDUBulletedListItem from './components/bulleted-list-item'
import SDUButton from './components/button'
import SDUCallout from './components/callout'
import SDUDivider from './components/divider'
import SDUFile from './components/file'
import SDUHeading1 from './components/heading1'
import SDUHeading2 from './components/heading2'
import SDUHeading3 from './components/heading3'
import SDUImage from './components/image'
import SDUNumberedListItem from './components/numbered-list-item'
import SDUQuote from './components/quote'
import SDUTable from './components/table'
import SDUText from './components/text'
import SDUToggle from './components/toggle'

type ComponentPropsMap = {
  SDUHeading1: ComponentProps<typeof SDUHeading1>
  SDUHeading2: ComponentProps<typeof SDUHeading2>
  SDUHeading3: ComponentProps<typeof SDUHeading3>
  SDUButton: ComponentProps<typeof SDUButton>
  SDUToggle: ComponentProps<typeof SDUToggle>
  SDUText: ComponentProps<typeof SDUText>
  SDUDivider: ComponentProps<typeof SDUDivider>
  SDUBulletedListItem: ComponentProps<typeof SDUBulletedListItem>
  SDUNumberedListItem: ComponentProps<typeof SDUNumberedListItem>
  SDUImage: ComponentProps<typeof SDUImage>
  SDUFile: ComponentProps<typeof SDUFile>
  SDUBookmark: ComponentProps<typeof SDUBookmark>
  SDUQuote: ComponentProps<typeof SDUQuote>
  SDUCallout: ComponentProps<typeof SDUCallout>
  SDUTable: ComponentProps<typeof SDUTable>
}

export type ServerDrivenComponentType =
  | {
      type: 'heading_1'
      props: ComponentPropsMap['SDUHeading1']
      content?: never
    }
  | {
      type: 'heading_2'
      props: ComponentPropsMap['SDUHeading2']
      content?: never
    }
  | {
      type: 'heading_3'
      props: ComponentPropsMap['SDUHeading3']
      content?: never
    }
  | {
      type: 'toggle'
      props: ComponentPropsMap['SDUToggle']
      content?: ServerDrivenComponentType[]
    }
  | {
      type: 'text'
      props: ComponentPropsMap['SDUText']
      content?: never
    }
  | {
      type: 'button'
      props: ComponentPropsMap['SDUButton']
      content?: never
    }
  | {
      type: 'divider'
      props?: ComponentPropsMap['SDUDivider']
      content?: never
    }
  | {
      type: 'bulleted_list_item'
      props: ComponentPropsMap['SDUBulletedListItem']
      content?: ServerDrivenComponentType[]
    }
  | {
      type: 'numbered_list_item'
      props: ComponentPropsMap['SDUNumberedListItem']
      content?: ServerDrivenComponentType[]
    }
  | {
      type: 'image'
      props: ComponentPropsMap['SDUImage']
      content?: never
    }
  | {
      type: 'file'
      props: ComponentPropsMap['SDUFile']
      content?: never
    }
  | {
      type: 'bookmark'
      props: ComponentPropsMap['SDUBookmark']
      content?: never
    }
  | {
      type: 'quote'
      props: ComponentPropsMap['SDUQuote']
      content?: never
    }
  | {
      type: 'callout'
      props: ComponentPropsMap['SDUCallout']
      content?: never
    }
  | {
      type: 'table'
      props: ComponentPropsMap['SDUTable']
      content?: never
    }

export function SDUComponent({ content }: { content: ServerDrivenComponentType }) {
  const { type, props, content: children } = content

  switch (type) {
    case 'button':
      return <SDUButton {...props} />

    case 'heading_1':
      return <SDUHeading1 {...props} />

    case 'heading_2':
      return <SDUHeading2 {...props} />

    case 'heading_3':
      return <SDUHeading3 {...props} />

    case 'text':
      return <SDUText {...props} />

    case 'toggle':
      return (
        <SDUToggle {...props}>
          <ServerDrivenComponent content={children ?? []} />
        </SDUToggle>
      )

    case 'divider':
      return <SDUDivider {...props} />

    case 'bulleted_list_item':
      return (
        <SDUBulletedListItem {...props}>
          <ServerDrivenComponent content={children ?? []} />
        </SDUBulletedListItem>
      )

    case 'numbered_list_item':
      return (
        <SDUNumberedListItem {...props}>
          <ServerDrivenComponent content={children ?? []} />
        </SDUNumberedListItem>
      )

    case 'image':
      return <SDUImage {...props} />

    case 'file':
      return <SDUFile {...props} />

    case 'bookmark':
      return <SDUBookmark {...props} />

    case 'quote':
      return <SDUQuote {...props} />

    case 'callout':
      return <SDUCallout {...props} />

    case 'table':
      return <SDUTable {...props} />

    default:
      console.warn(`Unknown component type: ${type}`)
      return null
  }
}

export function ServerDrivenComponent({ content }: { content: ServerDrivenComponentType[] }) {
  return (
    <Flex
      direction='column'
      gap={4}
      asChild>
      <section>
        {content.map((component, index) => (
          <SDUComponent
            key={index}
            content={component}
          />
        ))}
      </section>
    </Flex>
  )
}
