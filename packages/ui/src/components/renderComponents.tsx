import type { ServerDrivenComponentType } from '@/types/server-driven'

import { OutlinedButton, SolidButton, TextButton } from './atom/button'
import ImageSection from './atom/image-section'
import RadioGroup from './atom/radio-group'
import SpacingBlock from './atom/spacing-block'
import Typography from './atom/typography'

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

    case 'Typography':
      return <Typography {...props}>{props.children}</Typography>

    case 'SpacingBlock':
      return <SpacingBlock {...props}>{props.children}</SpacingBlock>

    case 'ImageSection':
      return <ImageSection {...props} />

    case 'SolidButton':
      return <SolidButton {...props} />

    case 'OutlinedButton':
      return <OutlinedButton {...props} />

    case 'TextButton':
      return <TextButton {...props} />

    default:
      console.warn(`Unknown component type: ${type}`)
      return null
  }
}
