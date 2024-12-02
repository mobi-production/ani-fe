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
    children?: K extends keyof ComponentSpecificProps ? ServerDrivenComponentType[] : never
  } & (K extends keyof ComponentSpecificProps ? ComponentSpecificProps[K] : never)
}[keyof typeof SDUComponents]

type SDUComponentProps = {
  children: ServerDrivenComponentType
  depth: number
  numbered: number
}

function SDUComponent({ children, depth, numbered }: SDUComponentProps) {
  const { type, props, children: childrenContent } = children
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
    } as const

    if (!childrenContent || !children) {
      return <Component {...componentProps} />
    }

    // Toggle의 경우 children으로 전달을 해야하기에 별도 처리합니다.
    if (type === ('toggle' as keyof typeof SDUComponents)) {
      return (
        <Component {...componentProps}>
          {childrenContent && (
            <ChildrenDepthComponent>
              <ServerDrivenComponent
                depth={depth + 1}
                numbered={numbered}
                content={childrenContent}
                isChild
              />
            </ChildrenDepthComponent>
          )}
        </Component>
      )
    }

    return (
      <>
        <Component {...componentProps} />
        <ChildrenDepthComponent>
          <ServerDrivenComponent
            depth={depth + 1}
            numbered={type === 'numbered_list_item' ? 1 : numbered}
            content={childrenContent || []}
            isChild
          />
        </ChildrenDepthComponent>
      </>
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
              depth={depth}
              numbered={componentNumbered}>
              {component}
            </SDUComponent>
          )
        })}
      </Component>
    </Flex>
  )
}
