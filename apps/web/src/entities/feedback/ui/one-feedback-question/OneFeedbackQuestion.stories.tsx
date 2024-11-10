import type { Meta, StoryObj } from '@storybook/react'

import OneFeedbackQuestion from '.'
import { LIKERT_SCALE_MAX_SCORE } from '../../model/likert-scale'

const meta = {
  title: 'Widget/Feedback/OneFeedbackQuestion',
  component: OneFeedbackQuestion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '피드백 개별 문항 컴포넌트입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof LikertScale>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    defaultValue: undefined
  },

  render: (args) => (
    <div className='w-[40rem]'>
      <OneFeedbackQuestion {...args} />
    </div>
  )
}
