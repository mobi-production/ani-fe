import type { Meta, StoryObj } from '@storybook/react'
import { wrapWithAppRouterContext } from '@/shared/lib/utils'
import PartFeedbackPage from '.'

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

export const Preview: Story = {}
