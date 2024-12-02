import type { Meta, StoryObj } from '@storybook/react'
import PartFeedbackPage from '.'
import { MOCK_PART_ID } from '@/__mock__/data/feedback'
import { wrapWithAppRouterContext } from '@/shared/utils'

const meta = {
  title: 'Page/PartFeedbackPage',
  component: PartFeedbackPage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [wrapWithAppRouterContext]
} satisfies Meta<typeof PartFeedbackPage>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    partId: MOCK_PART_ID
  }
}
