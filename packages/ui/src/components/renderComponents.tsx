import { ComponentProps } from 'react'
import RadioGroup from './atom/radio-group/RadioGroup'
import ImageSection from './atom/image-section/ImageSection'

type ComponentPropsMap = {
  RadioGroup: ComponentProps<typeof RadioGroup>
  RadioGroupItem: ComponentProps<typeof RadioGroup.Item>
  ImageSection: ComponentProps<typeof ImageSection>
}

export type ServerDrivenComponentType =
  | {
      type: 'RadioGroup'
      props: ComponentPropsMap['RadioGroup']
      children?: ServerDrivenComponentType[]
    }
  | { type: 'RadioGroupItem'; props: ComponentPropsMap['RadioGroupItem']; children?: never }
  | { type: 'ImageSection'; props: ComponentPropsMap['ImageSection']; children?: never }

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

    case 'ImageSection':
      return <ImageSection {...props} />

    default:
      console.warn(`Unknown component type: ${type}`)
      return null
  }
}
