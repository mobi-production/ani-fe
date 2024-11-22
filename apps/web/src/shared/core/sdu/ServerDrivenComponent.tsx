import { ComponentProps } from 'react'
import SDUButton from './button'
import SDUHeading1 from './heading1'
import { Divider } from '@repo/ui/server'
import SDUHeading2 from './heading2'
import SDUHeading3 from './heading3'
import SDUToggle from './toggle'
import SDUParagraph from './paragraph'

type ComponentPropsMap = {
  SDUHeading1: ComponentProps<typeof SDUHeading1>
  SDUHeading2: ComponentProps<typeof SDUHeading2>
  SDUHeading3: ComponentProps<typeof SDUHeading3>
  SDUButton: ComponentProps<typeof SDUButton>
  SDUToggle: ComponentProps<typeof SDUToggle>
  SDUParagraph: ComponentProps<typeof SDUParagraph>
  Divider: ComponentProps<typeof Divider>
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
      type: 'divider'
      props?: ComponentPropsMap['Divider']
      content?: never
    }
  | {
      type: 'toggle'
      props: ComponentPropsMap['SDUToggle']
      content?: ServerDrivenComponentType[]
    }
  | {
      type: 'paragraph'
      props: ComponentPropsMap['SDUParagraph']
      content?: never
    }
  | {
      type: 'button'
      props: ComponentPropsMap['SDUButton']
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

    case 'divider':
      return <Divider {...props} />

    case 'paragraph':
      return <SDUParagraph {...props} />

    case 'toggle':
      return (
        <SDUToggle {...props}>{children?.map((content) => SDUComponent({ content }))}</SDUToggle>
      )

    default:
      console.warn(`Unknown component type: ${type}`)
      return null
  }
}

export function ServerDrivenComponent({ content }: { content: ServerDrivenComponentType[] }) {
  return <>{content.map((content) => SDUComponent({ content }))}</>
}
