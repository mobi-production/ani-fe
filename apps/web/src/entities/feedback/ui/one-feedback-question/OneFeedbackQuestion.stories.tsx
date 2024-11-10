import type { Meta, StoryObj } from '@storybook/react'

import OneFeedbackQuestion from '.'
import { FEEDBACK_RESPONSE_CATEGORY } from '../../model/feedback'

const meta = {
  title: 'Widget/Feedback/OneFeedbackQuestion',
  component: OneFeedbackQuestion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '피드백 개별 문항 컴포넌트입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof OneFeedbackQuestion>

export default meta
type Story = StoryObj<typeof meta>

export const Likert: Story = {
  args: {
    questionIndex: 1,
    title: '파트의 내용이 기대에 부합했나요?',
    responseCategory: FEEDBACK_RESPONSE_CATEGORY.LIKERT
  },

  render: (args) => (
    <div className='w-[40rem]'>
      <OneFeedbackQuestion
        questionIndex={1}
        responseCategory={FEEDBACK_RESPONSE_CATEGORY.LIKERT}
        title='파트의 내용이 기대에 부합했나요?'
      />
    </div>
  )
}

export const OpenEnded: Story = {
  args: {
    questionIndex: 2,
    title: '추가로 파트에 대해 남기고 싶은 의견이 있다면 자유롭게 기재해주세요.',
    responseCategory: FEEDBACK_RESPONSE_CATEGORY.OPEN_ENDED
  },

  render: (args) => (
    <div className='w-[40rem]'>
      <OneFeedbackQuestion
        questionIndex={5}
        responseCategory={FEEDBACK_RESPONSE_CATEGORY.OPEN_ENDED}
        title='추가로 파트에 대해 남기고 싶은 의견이 있다면 자유롭게 기재해주세요.'
      />
    </div>
  )
}
