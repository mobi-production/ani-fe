import type { Meta, StoryObj } from '@storybook/react'
import PathDetailPage from '.'

const meta = {
  title: 'Page/PathDetailPage',
  component: PathDetailPage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof PathDetailPage>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {}
