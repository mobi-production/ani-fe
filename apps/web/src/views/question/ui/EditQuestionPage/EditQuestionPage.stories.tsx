import type { Meta, StoryObj } from '@storybook/react'
import EditQuestionPage from '.'
import { mockQuestion as data } from '@/__mock__/data/question'

const meta = {
  title: 'Page/Question/EditQuestionPage',
  component: EditQuestionPage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof EditQuestionPage>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    data
  },
  render: (args) => (
    <div className='w-[20.938rem]'>
      <EditQuestionPage {...args} />
    </div>
  )
}
