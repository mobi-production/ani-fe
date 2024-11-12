import type { Meta, StoryObj } from '@storybook/react'

import FeedbackStep from '.'
import { FEEDBACK_STEP } from '../../config/feedback-step'

const meta = {
  title: 'Widget/Feedback/FeedbackStep',
  component: FeedbackStep,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '피드백 페이지 상단에서 현재 진행 중인 피드백의 단계를 표시하는 컴포넌트입니다.'
      }
    }
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
