import type { Meta, StoryObj } from '@storybook/react'
import Logo from '.'

const meta = {
  title: 'shared/Logo',
  component: Logo,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
