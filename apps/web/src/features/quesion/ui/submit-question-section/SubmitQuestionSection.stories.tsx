import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from '@repo/ui/server'
import SubmitQuestionSection from '.'

const meta = {
  title: 'Feature/Question/SubmitQuestionSection',
  component: SubmitQuestionSection,
  parameters: {
    layout: 'center',
    docs: {
      description: {
        component: '질문 내용을 작성 후 제출하기 위한 폼 영역입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof SubmitQuestionSection>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  render: () => {
    return (
      <div className='w-[20.938rem]'>
        <SubmitQuestionSection />
      </div>
    )
  }
}
