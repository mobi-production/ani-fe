import type { Meta, StoryObj } from '@storybook/react'

import OneQuestionPreview from '.'
import { BadgeColors } from '@repo/ui/components/badge/variants'

const meta = {
  title: 'Widget/Question/OneQuestionPreview',
  component: OneQuestionPreview,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '개별 질문 미리보기 컴포넌트입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof OneQuestionPreview>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => (
    <div className='w-[20.938rem]'>
      <OneQuestionPreview>
        <OneQuestionPreview.Tag
          label='HTML/CSS'
          theme={'MINT'}
        />
        <OneQuestionPreview.Title>
          What's the difference between SCSS and Sass?
        </OneQuestionPreview.Title>
        <OneQuestionPreview.Contents>
          From what I've been reading, Sass is a language that makes CSS more powerful djshfho
        </OneQuestionPreview.Contents>
        <OneQuestionPreview.Date date={'2024-09-09'} />
      </OneQuestionPreview>
    </div>
  )
}
