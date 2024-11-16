import type { Meta, StoryObj } from '@storybook/react'

import Check from '.'

const meta = {
  title: 'MDS/Check',
  component: Check,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Check>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    check: false
  }
}

export const Active: Story = {
  args: {
    check: true
  }
}
