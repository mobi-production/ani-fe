import Badge from '@ui/components/atom/badge'
import { OutlinedButton, SolidButton, TextButton } from '@ui/components/atom/button'
import Flex from '@ui/components/atom/flex'
import Icon from '@ui/components/atom/icon'
import ImageSection from '@ui/components/atom/image-section'
import ProgressBar from '@ui/components/atom/progress-bar'
import RadioGroup from '@ui/components/atom/radio-group'
import SpacingBlock from '@ui/components/atom/spacing-block'
import Typography from '@ui/components/atom/typography'
import { ComponentProps } from 'react'

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
