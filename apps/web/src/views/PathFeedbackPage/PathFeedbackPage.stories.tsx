import type { Meta, StoryObj } from '@storybook/react'
import PathFeedbackPage from '.'
import { wrapWithAppRouterContext } from '@/shared/lib/utils'

const meta = {
  title: 'Page/PathFeedbackPage',
  component: PathFeedbackPage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [wrapWithAppRouterContext]
} satisfies Meta<typeof PathFeedbackPage>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {}
