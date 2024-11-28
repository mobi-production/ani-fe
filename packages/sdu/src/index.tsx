import { Flex } from '@repo/ui/server'
import { ComponentProps } from 'react'

import SDUBookmark from './components/bookmark'
import SDUBulletedListItem from './components/bulleted-list-item'
import SDUButton from './components/button'
import SDUCallout from './components/callout'
import SDUCheckbox from './components/checkbox'
import SDUDivider from './components/divider'
import SDUFile from './components/file'
import SDUHeading1 from './components/heading1'
import SDUHeading2 from './components/heading2'
import SDUHeading3 from './components/heading3'
import SDUImage from './components/image'
import SDUNumberedListItem from './components/numbered-list-item'
import SDUQuote from './components/quote'
import SDUTable from './components/table'
import SDUTableOfContent from './components/table-of-content'
import SDUText from './components/text'
import SDUToggle from './components/toggle'
import ChildrenDepthComponent from './config/ChildrenDepthComponent'
type ComponentPropsMap = {
  SDUHeading1: ComponentProps<typeof SDUHeading1>
  SDUHeading2: ComponentProps<typeof SDUHeading2>
  SDUHeading3: ComponentProps<typeof SDUHeading3>
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
  SDUButton: ComponentProps<typeof SDUButton>
  SDUCheckbox: ComponentProps<typeof SDUCheckbox>
  SDUTableOfContent: ComponentProps<typeof SDUTableOfContent>
}

export type ServerDrivenComponentType =
  | {
      type: 'heading_1'
      props: ComponentPropsMap['SDUHeading1']
      content?: ServerDrivenComponentType[]
    }
  | {
      type: 'heading_2'
      props: ComponentPropsMap['SDUHeading2']
      content?: ServerDrivenComponentType[]
    }
  | {
      type: 'heading_3'
      props: ComponentPropsMap['SDUHeading3']
      content?: ServerDrivenComponentType[]
    }
  | {
      type: 'toggle'
      props: ComponentPropsMap['SDUToggle']
      content?: ServerDrivenComponentType[]
    }
  | {
      type: 'text'
      props: ComponentPropsMap['SDUText']
      content?: ServerDrivenComponentType[]
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
      depth?: number
    }
  | {
      type: 'numbered_list_item'
      props: ComponentPropsMap['SDUNumberedListItem']
      content?: ServerDrivenComponentType[]
      numbered?: number
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
  | {
      type: 'button'
      props: ComponentPropsMap['SDUButton']
      content?: never
    }
  | {
      type: 'checkbox'
      props: ComponentPropsMap['SDUCheckbox']
      content?: ServerDrivenComponentType[]
    }
  | {
      type: 'table_of_content'
      props?: ComponentPropsMap['SDUTableOfContent']
      content?: never
    }

export function SDUComponent({
  content,
  depth,
  numbered
}: {
  content: ServerDrivenComponentType
  depth: number
  numbered: number
}) {
  const { type, props, content: children } = content

  switch (type) {
    case 'button':
      return <SDUButton {...props} />

    case 'heading_1':
      return (
        <>
          <SDUHeading1
            {...props}
            depth={depth}
          />
          {children && (
            <ChildrenDepthComponent>
              <ServerDrivenComponent
                content={children ?? []}
                depth={depth + 1}
                isChild
              />
            </ChildrenDepthComponent>
          )}
        </>
      )

    case 'heading_2':
      return (
        <>
          <SDUHeading2
            {...props}
            depth={depth}
          />
          {children && (
            <ChildrenDepthComponent>
              <ServerDrivenComponent
                content={children ?? []}
                depth={depth + 1}
                isChild
              />
            </ChildrenDepthComponent>
          )}
        </>
      )

    case 'heading_3':
      return (
        <>
          <SDUHeading3
            {...props}
            depth={depth}
          />
          {children && (
            <ChildrenDepthComponent>
              <ServerDrivenComponent
                content={children ?? []}
                depth={depth + 1}
                isChild
              />
            </ChildrenDepthComponent>
          )}
        </>
      )

    case 'text':
      return (
        <>
          <SDUText {...props} />
          {children && (
            <ChildrenDepthComponent>
              <ServerDrivenComponent
                content={children ?? []}
                depth={depth + 1}
                isChild
              />
            </ChildrenDepthComponent>
          )}
        </>
      )

    case 'toggle':
      return (
        <SDUToggle
          {...props}
          depth={depth}>
          <ServerDrivenComponent
            content={children ?? []}
            depth={depth + 1}
            isChild
          />
        </SDUToggle>
      )

    case 'divider':
      return <SDUDivider {...props} />

    case 'bulleted_list_item':
      return (
        <SDUBulletedListItem
          {...props}
          depth={depth}>
          <ServerDrivenComponent
            content={children ?? []}
            depth={depth + 1}
            isChild
          />
        </SDUBulletedListItem>
      )

    case 'numbered_list_item':
      return (
        <SDUNumberedListItem
          {...props}
          numbered={numbered}>
          {children && (
            <ServerDrivenComponent
              content={children}
              numbered={1}
              depth={depth + 1}
              isChild
            />
          )}
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

    case 'checkbox':
      return (
        <SDUCheckbox {...props}>
          <ServerDrivenComponent
            content={children ?? []}
            depth={depth + 1}
            isChild
          />
        </SDUCheckbox>
      )

    case 'table_of_content':
      return <SDUTableOfContent {...props} />

    default:
      console.warn(`Unknown component type: ${type}`)
      return null
  }
}

export function ServerDrivenComponent({
  content,
  depth = 0,
  numbered = 1,
  isChild = false
}: {
  content: ServerDrivenComponentType[]
  depth?: number
  numbered?: number
  isChild?: boolean
}) {
  let currentNumbered = numbered

  const Component = isChild ? 'section' : 'div'

  return (
    <Flex
      direction='column'
      asChild>
      <Component>
        {content.map((component, index) => {
          if (component.type === 'numbered_list_item') {
            const currentComponent = (
              <SDUComponent
                key={index}
                content={component}
                depth={depth}
                numbered={currentNumbered}
              />
            )
            currentNumbered++
            return currentComponent
          }
          currentNumbered = 1

          return (
            <SDUComponent
              key={index}
              content={component}
              depth={depth}
              numbered={currentNumbered}
            />
          )
        })}
      </Component>
    </Flex>
  )
}
