import { ComponentProps } from 'react'
import RadioGroup from './atom/radio-group/RadioGroup'

type ComponentPropsMap = {
  RadioGroup: ComponentProps<typeof RadioGroup>
  RadioGroupItem: ComponentProps<typeof RadioGroup.Item>
}

export type ServerDrivenComponentType =
  | {
      type: 'RadioGroup'
      props: ComponentPropsMap['RadioGroup']
      children?: ServerDrivenComponentType[]
    }
  | { type: 'RadioGroupItem'; props: ComponentPropsMap['RadioGroupItem']; children?: never }

export function renderComponents(componentData: ServerDrivenComponentType) {
  const { type, props, children } = componentData

  switch (type) {
    case 'RadioGroup':
      return <RadioGroup {...props}>{children?.map((child) => renderComponents(child))}</RadioGroup>

    case 'RadioGroupItem':
      return (
        <RadioGroup.Item
          key={props.label}
          {...props}>
          {props.children}
        </RadioGroup.Item>
      )

    default:
      console.warn(`Unknown component type: ${type}`)
      return null
  }
}
