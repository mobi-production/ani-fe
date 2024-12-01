import type { Meta, StoryObj } from '@storybook/react'
import QuestionFormPage from '.'

const meta = {
  title: 'Page/QuestionFormPage',
  component: QuestionFormPage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof QuestionFormPage>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  render: () => (
    <div className='w-[20.938rem]'>
      <QuestionFormPage />
    </div>
  )
}
