import type { Meta, StoryObj } from '@storybook/react'
import QuestionListPage from '.'

const meta = {
  title: 'Page/QuestionListPage',
  component: QuestionListPage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof QuestionListPage>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  render: () => (
    <div className='w-[20.938rem]'>
      <QuestionListPage />
    </div>
  )
}
