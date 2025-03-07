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

const NESTED_CHILDREN_COMPONENTS = ['toggle']

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

    const childrenElement = childrenContent && (
      <ChildrenDepthComponent>
        <ServerDrivenComponent
          depth={depth + 1}
          numbered={type === 'numbered_list_item' ? 1 : numbered}
          content={childrenContent}
          isChild
        />
      </ChildrenDepthComponent>
    )

    if ((type as keyof typeof SDUComponents) === 'column_list') {
      return (
        <Component {...{ ...componentProps, columnsLength: childrenContent?.length }}>
          {childrenContent?.map((column, index) => (
            <ServerDrivenComponent
              key={index}
              content={[column]}
              depth={depth + 1}
              numbered={numbered}
              isChild
            />
          ))}
        </Component>
      )
    }

    // 특정 컴포넌트의 경우 내부에서 렌더링 되도록 검사하는 로직
    const shouldNestChildren = NESTED_CHILDREN_COMPONENTS.includes(type)

    return shouldNestChildren ? (
      <Component {...componentProps}>{childrenElement}</Component>
    ) : (
      <>
        <Component {...componentProps} />
        {childrenElement}
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
      gap={12}
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
