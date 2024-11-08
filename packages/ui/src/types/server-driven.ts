import { ComponentProps } from 'react'

import Flex from '@/components/atom/flex'
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
  Flex: ComponentProps<typeof Flex>
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
  | { type: 'Flex'; props: ComponentPropsMap['Flex']; children?: ServerDrivenComponentType[] }
