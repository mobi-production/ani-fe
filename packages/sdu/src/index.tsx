import { Flex } from '@repo/ui/server'
import { ComponentProps, useMemo } from 'react'

import { SDUComponents } from './components'
import ChildrenDepthComponent from './config/ChildrenDepthComponent'

type ComponentPropsMap = {
  [K in keyof typeof SDUComponents]: ComponentProps<(typeof SDUComponents)[K]>
}

type BaseComponentType = {
  props: ComponentPropsMap[keyof ComponentPropsMap]
  content?: ServerDrivenComponentType[]
}

type ComponentSpecificProps = {
  bulleted_list_item: { depth?: number }
  numbered_list_item: { numbered?: number }
}

export type ServerDrivenComponentType = {
  [K in keyof typeof SDUComponents]: BaseComponentType & {
    type: K
    props: ComponentPropsMap[K]
    content?: K extends keyof ComponentSpecificProps ? ServerDrivenComponentType[] : never
  } & (K extends keyof ComponentSpecificProps ? ComponentSpecificProps[K] : never)
}[keyof typeof SDUComponents]

type SDUComponentProps = {
  content: ServerDrivenComponentType
  depth: number
  numbered: number
}

function SDUComponent({ content, depth, numbered }: SDUComponentProps) {
  const { type, props, content: children } = content
  const Component = SDUComponents[type]

  return useMemo(() => {
    if (!Component) {
      console.warn(`Unknown component type: ${type}`)
      return null
    }

    const componentProps = {
      ...props,
      depth,
      numbered
    }

    if (!children) {
      return <Component {...componentProps} />
    }

    return (
      <Component {...componentProps}>
        <ChildrenDepthComponent>
          <ServerDrivenComponent
            content={children}
            depth={depth + 1}
            numbered={type === 'numbered_list_item' ? 1 : numbered}
            isChild
          />
        </ChildrenDepthComponent>
      </Component>
    )
  }, [type, props, children, depth, numbered])
}

type ServerDrivenComponentProps = {
  content: ServerDrivenComponentType[]
  depth?: number
  numbered?: number
  isChild?: boolean
}

export function ServerDrivenComponent({
  content,
  depth = 0,
  numbered = 1,
  isChild = false
}: ServerDrivenComponentProps) {
  const Component = isChild ? 'section' : 'div'

  let currentNumbered = numbered

  return (
    <Flex
      direction='column'
      asChild>
      <Component>
        {content.map((component, index) => {
          const isNumberedList = component.type === 'numbered_list_item'
          const componentNumbered = isNumberedList ? currentNumbered++ : 1

          if (isNumberedList) {
            currentNumbered = componentNumbered + 1
          } else {
            currentNumbered = 1
          }

          return (
            <SDUComponent
              key={index}
              content={component}
              depth={depth}
              numbered={componentNumbered}
            />
          )
        })}
      </Component>
    </Flex>
  )
}
