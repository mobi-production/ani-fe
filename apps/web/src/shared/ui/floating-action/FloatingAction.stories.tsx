import type { Meta, StoryObj } from '@storybook/react'
import FloatingAction from '.'

const meta = {
  title: 'Shared/FloatingAction',
  component: FloatingAction,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof FloatingAction>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
