import type { Meta, StoryObj } from '@storybook/react'
import FeedbackPage from '.'
import { wrapWithAppRouterContext } from '@/shared/lib/utils'

const meta = {
  title: 'Page/FeedbackPage',
  component: FeedbackPage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [wrapWithAppRouterContext]
} satisfies Meta<typeof FeedbackPage>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {}
