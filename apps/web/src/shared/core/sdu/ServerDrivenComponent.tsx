import { ComponentProps } from 'react'
import SDUButton from './button'
import SDUHeading1 from './heading1'
import SDUHeading2 from './heading2'
import SDUHeading3 from './heading3'
import SDUToggle from './toggle'
import SDUParagraph from './paragraph'
import SDUDivider from './divider'
import { Flex } from '@repo/ui/server'
import SDUBulletedListItem from './bulleted-list-item'
import SDUNumberedListItem from './numbered-list-item'
import SDUImage from './image'
import SDUFile from './file'
import SDUBookmark from './bookmark'
import SDUQuote from './quote'
import SDUCallout from './callout'
import SDUTable from './table'

type ComponentPropsMap = {
  SDUHeading1: ComponentProps<typeof SDUHeading1>
  SDUHeading2: ComponentProps<typeof SDUHeading2>
  SDUHeading3: ComponentProps<typeof SDUHeading3>
  SDUButton: ComponentProps<typeof SDUButton>
  SDUToggle: ComponentProps<typeof SDUToggle>
  SDUParagraph: ComponentProps<typeof SDUParagraph>
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
      order?: number
    }
  | {
      type: 'heading_2'
      props: ComponentPropsMap['SDUHeading2']
      content?: never
      order?: number
    }
  | {
      type: 'heading_3'
      props: ComponentPropsMap['SDUHeading3']
      content?: never
      order?: number
    }
  | {
      type: 'toggle'
      props: ComponentPropsMap['SDUToggle']
      content?: ServerDrivenComponentType[]
      order?: number
    }
  | {
      type: 'paragraph'
      props: ComponentPropsMap['SDUParagraph']
      content?: never
      order?: number
    }
  | {
      type: 'button'
      props: ComponentPropsMap['SDUButton']
      content?: never
      order?: number
    }
  | {
      type: 'divider'
      props?: ComponentPropsMap['SDUDivider']
      content?: never
      order?: number
    }
  | {
      type: 'bulleted_list_item'
      props: ComponentPropsMap['SDUBulletedListItem']
      content?: ServerDrivenComponentType[]
      order?: number
    }
  | {
      type: 'numbered_list_item'
      props: ComponentPropsMap['SDUNumberedListItem']
      content?: ServerDrivenComponentType[]
      order?: number
    }
  | {
      type: 'image'
      props: ComponentPropsMap['SDUImage']
      content?: never
      order?: number
    }
  | {
      type: 'file'
      props: ComponentPropsMap['SDUFile']
      content?: never
      order?: number
    }
  | {
      type: 'bookmark'
      props: ComponentPropsMap['SDUBookmark']
      content?: never
      order?: number
    }
  | {
      type: 'quote'
      props: ComponentPropsMap['SDUQuote']
      content?: never
      order?: number
    }
  | {
      type: 'callout'
      props: ComponentPropsMap['SDUCallout']
      content?: never
      order?: number
    }
  | {
      type: 'table'
      props: ComponentPropsMap['SDUTable']
      content?: never
      order?: number
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

    case 'paragraph':
      return <SDUParagraph {...props} />

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
  const groupedByOrder = content.reduce(
    (acc, component) => {
      const order = component.order ?? 0
      if (!acc[order]) {
        acc[order] = []
      }
      /** @ts-error acc[order]의 타입을 이해하지 못해 오류 발생 */
      acc[order]!.push(component)
      return acc
    },
    {} as Record<number, ServerDrivenComponentType[]>
  )

  return (
    <>
      {Object.entries(groupedByOrder).map(([order, components]) => (
        <Flex
          key={order}
          gap={4}
          className='flex-wrap'>
          {components.map((component, index) => (
            <SDUComponent
              key={index}
              content={component}
            />
          ))}
        </Flex>
      ))}
    </>
  )
}
