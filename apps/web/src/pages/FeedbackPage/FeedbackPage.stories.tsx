import type { Meta, StoryObj } from '@storybook/react'
import FeedbackPage from '.'

const meta = {
  title: 'Page/FeedbackPage',
  component: FeedbackPage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof FeedbackPage>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {}
