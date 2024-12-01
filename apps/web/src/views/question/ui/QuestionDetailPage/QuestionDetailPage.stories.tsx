import type { Meta, StoryObj } from '@storybook/react'
import QuestionDetailPage from '.'
import { mockQuestion as data } from '@/__mock__/data/question'

const meta = {
  title: 'Page/QuestionDetailPage',
  component: QuestionDetailPage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof QuestionDetailPage>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    data
  },
  render: (args) => (
    <div className='w-[20.938rem]'>
      <QuestionDetailPage {...args} />
    </div>
  )
}
