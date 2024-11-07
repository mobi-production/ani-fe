import type { Meta, StoryObj } from '@storybook/react'

import Typography from '../typography'
import SpacingBlock from '.'
import { SpacingBlockVariants } from './variants'

const meta = {
  title: 'Atom/SpacingBlock',
  component: SpacingBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'select',
      options: Object.values(SpacingBlockVariants)
    },
    height: {
      control: 'select',
      options: Object.values(SpacingBlockVariants)
    },
    size: {
      description: 'size가 있다면 width와 height가 모두 적용됩니다.',
      control: 'select',
      options: Object.values(SpacingBlockVariants)
    },
    asChild: {
      description: 'asChild가 true라면 내부 컴포넌트를 사용합니다.',
      control: 'boolean'
    },
    showBlock: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof SpacingBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    width: SpacingBlockVariants['1'],
    height: SpacingBlockVariants['1'],
    showBlock: true
  }
}

export const Size: Story = {
  args: {
    size: SpacingBlockVariants['1'],
    showBlock: true
  }
}

export const AsChild: Story = {
  args: {
    asChild: true,
    size: '16r'
  },
  render: (args) => (
    <SpacingBlock {...args}>
      <Typography variant='caption-1'>Spacing</Typography>
    </SpacingBlock>
  )
}
