import type { Meta, StoryObj } from '@storybook/react'

import FeedbackStep from '.'

const meta = {
  title: 'Widget/Feedback/FeedbackStep',
  component: FeedbackStep,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof FeedbackStep>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    defaultValue: 'Part'
  },

  render: (args) => (
    <div className='w-[40rem]'>
      <FeedbackStep {...args}>
        <FeedbackStep.Item
          label='파트'
          value='Part'
        />
        <FeedbackStep.Divider />
        <FeedbackStep.Item
          label='멘토'
          value='Mento'
        />
        <FeedbackStep.Divider />
        <FeedbackStep.Item
          label='페어'
          value='Pair'
        />
      </FeedbackStep>
    </div>
  )
}
