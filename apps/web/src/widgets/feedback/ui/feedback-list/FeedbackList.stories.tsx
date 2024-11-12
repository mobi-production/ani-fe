import type { Meta, StoryObj } from '@storybook/react'

import FeedbackList from '.'

const meta = {
  title: 'Widget/Feedback/FeedbackList',
  component: FeedbackList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '피드백 문항 목록 컴포넌트입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof FeedbackList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => (
    <div className='w-[40rem]'>
      <FeedbackList>
        <FeedbackList.ListTitle
          courseName='HTML 개요(1)'
          category='파트'
        />
        <FeedbackList.QuestionTitle
          questionIndex={1}
          title='파트의 내용이 기대에 부합했나요?'
        />
        <FeedbackList.Likert />
        <FeedbackList.QuestionTitle
          questionIndex={2}
          title='추가로 파트에 대해 남기고 싶은 의견이 있다면 자유롭게 기재해주세요.'
        />
        <FeedbackList.OpenEnded
          placeholder='의견을 자유롭게 기재해주세요'
          maxLength={500}
        />
      </FeedbackList>
    </div>
  )
}
