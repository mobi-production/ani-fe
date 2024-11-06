import RadioGroup from './atom/radio-group/RadioGroup'
import { ServerDrivenComponentType } from '@/types/server-driven'

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
