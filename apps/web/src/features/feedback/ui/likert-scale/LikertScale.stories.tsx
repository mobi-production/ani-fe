import type { Meta, StoryObj } from '@storybook/react'

import LikertScale from '.'
import { LIKERT_SCALE_MAX_SCORE } from '../../model/likert-scale'

const meta = {
  title: 'Widget/Feedback/LikertScale',
  component: LikertScale,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '각 질문에 대해 사용자의 리커트 척도 응답을 수집하고 제출 받기 위한 컴포넌트입니다.'
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
      <LikertScale {...args}>
        {Array.from({ length: LIKERT_SCALE_MAX_SCORE }, (_, index) => (
          <LikertScale.Score
            key={index}
            scoreValue={index + 1}
            isReverseCoded={false}
          />
        ))}
      </LikertScale>
    </div>
  )
}
