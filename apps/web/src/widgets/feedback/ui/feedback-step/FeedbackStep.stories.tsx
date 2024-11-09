import type { Meta, StoryObj } from '@storybook/react'

import FeedbackStep from '.'
import { FEEDBACK_STEP } from '@/types/feedback/feedback-step'

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
    defaultValue: FEEDBACK_STEP.PART.VALUE
  },

  render: (args) => (
    <div className='w-[40rem]'>
      <FeedbackStep {...args}>
        <FeedbackStep.Item
          stepLabel={FEEDBACK_STEP.PART.LABEL}
          stepValue={FEEDBACK_STEP.PART.VALUE}
        />
        <FeedbackStep.Divider />
        <FeedbackStep.Item
          stepLabel={FEEDBACK_STEP.MENTO.LABEL}
          stepValue={FEEDBACK_STEP.MENTO.VALUE}
        />
        <FeedbackStep.Divider />
        <FeedbackStep.Item
          stepLabel={FEEDBACK_STEP.PAIR.LABEL}
          stepValue={FEEDBACK_STEP.PAIR.VALUE}
        />
      </FeedbackStep>
    </div>
  )
}
