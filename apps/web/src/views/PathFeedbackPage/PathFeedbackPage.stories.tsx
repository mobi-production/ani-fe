import type { Meta, StoryObj } from '@storybook/react'
import PathFeedbackPage from '.'
import { MOCK_PATH_ID } from '@/__mock__/data/feedback'
import { wrapWithAppRouterContext } from '@/shared/utils'

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

export const Preview: Story = {
  args: {
    pathId: MOCK_PATH_ID
  }
}
