import Badge from '@ui/components/atom/badge'
import { OutlinedButton, SolidButton, TextButton } from '@ui/components/atom/button'
import type { ServerDrivenComponentType } from '@ui/types/server-driven'

import Flex from './atom/flex'
import Icon from './atom/icon'
import ImageSection from './atom/image-section'
import ProgressBar from './atom/progress-bar'
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

    case 'Flex':
      return <Flex {...props}>{children?.map((child) => renderComponents(child))}</Flex>

    case 'ProgressBar':
      return <ProgressBar {...props} />

    case 'Badge':
      return <Badge {...props}>{props.children}</Badge>

    case 'Icon':
      return <Icon {...props} />

    default:
      console.warn(`Unknown component type: ${type}`)
      return null
  }
}
