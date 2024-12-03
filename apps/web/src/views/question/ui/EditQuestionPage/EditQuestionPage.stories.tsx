import type { Meta, StoryObj } from '@storybook/react'
import EditQuestionPage from '.'

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
    data: {
      id: '1111',
      pathName: 'HTML/CSS',
      title: '제목 입력 중 활성화 ~',
      contents:
        "From what I've been reading, Sass is a language that makes CSS more powerful djshfho"
    }
  },
  render: (args) => (
    <div className='w-[20.938rem]'>
      <EditQuestionPage {...args} />
    </div>
  )
}
