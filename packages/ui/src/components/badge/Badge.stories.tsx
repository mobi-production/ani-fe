import type { Meta, StoryObj } from '@storybook/react'

import Badge from '.'
import { BadgeColors, BadgeSizes } from './variants'

const meta = {
  title: 'MDS/Badge',
  component: Badge,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(BadgeSizes)
    },
    color: {
      control: 'select',
      options: Object.values(BadgeColors)
    }
  }
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const GrayBadge: Story = {
  args: {
    size: BadgeSizes.S,
    color: BadgeColors.GRAY,
    children: '카테고리'
  }
}

export const PurpleBadge: Story = {
  args: {
    size: BadgeSizes.S,
    color: BadgeColors.PURPLE,
    children: '진행 예정'
  }
}

export const OrangeBadge: Story = {
  args: {
    size: BadgeSizes.S,
    color: BadgeColors.ORANGE,
    children: '진행 중'
  }
}

export const GreenBadge: Story = {
  args: {
    size: BadgeSizes.S,
    color: BadgeColors.GREEN,
    children: '수료'
  }
}

export const RedBadge: Story = {
  args: {
    size: BadgeSizes.S,
    color: BadgeColors.RED,
    children: '미수료'
  }
}

export const GrayMBadge: Story = {
  args: {
    size: BadgeSizes.M,
    color: BadgeColors.GRAY,
    children: '제출 마감'
  }
}

export const BlueMBadge: Story = {
  args: {
    size: BadgeSizes.M,
    color: BadgeColors.BLUE,
    children: '제출 가능'
  }
}

export const GreenMBadge: Story = {
  args: {
    size: BadgeSizes.M,
    color: BadgeColors.GREEN,
    children: '제출 완료'
  }
}
