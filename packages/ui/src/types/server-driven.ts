import { ComponentProps } from 'react'

import RadioGroup from '@/components/atom/radio-group'
import SpacingBlock from '@/components/atom/spacing-block'
import Typography from '@/components/atom/typography'

export type ComponentPropsMap = {
  RadioGroup: ComponentProps<typeof RadioGroup>
  RadioGroupItem: ComponentProps<typeof RadioGroup.Item>
  Typography: ComponentProps<typeof Typography>
  SpacingBlock: ComponentProps<typeof SpacingBlock>
}

export type ServerDrivenComponentType =
  | {
      type: 'RadioGroup'
      props: ComponentPropsMap['RadioGroup']
      children?: ServerDrivenComponentType[]
    }
  | { type: 'RadioGroupItem'; props: ComponentPropsMap['RadioGroupItem']; children?: never }
  | { type: 'Typography'; props: ComponentPropsMap['Typography']; children?: never }
  | { type: 'SpacingBlock'; props: ComponentPropsMap['SpacingBlock']; children?: never }
