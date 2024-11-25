import type { Meta, StoryObj } from '@storybook/react'
import QuestionSearchBar from '.'

const meta = {
  title: 'Feature/QuestionSearchBar',
  component: QuestionSearchBar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '질문을 검색할 수 있는 검색창 컴포넌트입니다.'
      }
    }
  },

  tags: ['autodocs']
} satisfies Meta<typeof QuestionSearchBar>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  render: () => {
    return (
      <div className='w-[20.938rem]'>
        <QuestionSearchBar />
      </div>
    )
  }
}
