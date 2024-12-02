import type { Meta, StoryObj } from '@storybook/react'
import CreateQuestionPage from '.'

const meta = {
  title: 'Page/Question/CreateQuestionPage',
  component: CreateQuestionPage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof CreateQuestionPage>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  render: () => (
    <div className='w-[20.938rem]'>
      <CreateQuestionPage />
    </div>
  )
}
