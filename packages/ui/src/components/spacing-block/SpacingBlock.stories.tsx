import { SIZE_VARIANTS } from '@repo/ui/variants/size'
import type { Meta, StoryObj } from '@storybook/react'

import Typography from '../typography'
import SpacingBlock from '.'

const meta = {
  title: 'MDS/SpacingBlock',
  component: SpacingBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'select',
      options: Object.values(SIZE_VARIANTS)
    },
    height: {
      control: 'select',
      options: Object.values(SIZE_VARIANTS)
    },
    size: {
      description: 'size가 있다면 width와 height가 모두 적용됩니다.',
      control: 'select',
      options: Object.values(SIZE_VARIANTS)
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
    width: 16,
    height: 16,
    showBlock: true
  }
}

export const Size: Story = {
  args: {
    size: 16,
    showBlock: true
  }
}

export const AsChild: Story = {
  args: {
    asChild: true,
    size: 16
  },
  render: (args: Story['args']) => (
    <SpacingBlock {...args}>
      <Typography variant='body-1-normal'>Spacing</Typography>
    </SpacingBlock>
  )
}
