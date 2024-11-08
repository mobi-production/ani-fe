import { ComponentProps } from 'react'

import { OutlinedButton, SolidButton, TextButton } from '@/components/atom/button'
import ImageSection from '@/components/atom/image-section'
import RadioGroup from '@/components/atom/radio-group'
import SpacingBlock from '@/components/atom/spacing-block'
import Typography from '@/components/atom/typography'

export type ComponentPropsMap = {
  RadioGroup: ComponentProps<typeof RadioGroup>
  RadioGroupItem: ComponentProps<typeof RadioGroup.Item>
  Typography: ComponentProps<typeof Typography>
  SpacingBlock: ComponentProps<typeof SpacingBlock>
  ImageSection: ComponentProps<typeof ImageSection>
  SolidButton: ComponentProps<typeof SolidButton>
  OutlinedButton: ComponentProps<typeof OutlinedButton>
  TextButton: ComponentProps<typeof TextButton>
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
  | { type: 'ImageSection'; props: ComponentPropsMap['ImageSection']; children?: never }
  | { type: 'SolidButton'; props: ComponentPropsMap['SolidButton']; children?: never }
  | { type: 'OutlinedButton'; props: ComponentPropsMap['OutlinedButton']; children?: never }
  | { type: 'TextButton'; props: ComponentPropsMap['TextButton']; children?: never }
