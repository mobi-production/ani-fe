import type { Meta, StoryObj } from '@storybook/react'

import Divider from '.'

const meta = {
  title: 'MDS/Divider',
  component: Divider,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {}
}
