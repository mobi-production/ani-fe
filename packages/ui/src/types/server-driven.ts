import { ComponentProps } from 'react'

import Badge from '@/components/atom/badge'
import { OutlinedButton, SolidButton, TextButton } from '@/components/atom/button'
import Flex from '@/components/atom/flex'
import Icon from '@/components/atom/icon'
import ImageSection from '@/components/atom/image-section'
import ProgressBar from '@/components/atom/progress-bar'
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
  Flex: ComponentProps<typeof Flex>
  ProgressBar: ComponentProps<typeof ProgressBar>
  Badge: ComponentProps<typeof Badge>
  Icon: ComponentProps<typeof Icon>
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
  | { type: 'Flex'; props: ComponentPropsMap['Flex']; children?: ServerDrivenComponentType[] }
  | { type: 'ProgressBar'; props: ComponentPropsMap['ProgressBar']; children?: never }
  | { type: 'Badge'; props: ComponentPropsMap['Badge']; children?: never }
  | { type: 'Icon'; props: ComponentPropsMap['Icon']; children?: never }
