import type { Meta, StoryObj } from '@storybook/react'
import SubmitReplySection from '.'

const meta = {
  title: 'Feature/Question/SubmitReplySection',
  component: SubmitReplySection,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '멘토 답변에 대한 재답변을 제출할 수 있는 컴포넌트입니다.'
      }
    }
  },

  tags: ['autodocs']
} satisfies Meta<typeof SubmitReplySection>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  render: () => {
    return (
      <div className='w-[20.938rem]'>
        <SubmitReplySection />
      </div>
    )
  }
}
