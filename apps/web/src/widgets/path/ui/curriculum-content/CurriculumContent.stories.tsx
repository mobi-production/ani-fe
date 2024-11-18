import type { Meta, StoryObj } from '@storybook/react'
import { pathIntroduce } from '@/__mock__/data/path'
import CurriculumContent from '.'

const meta = {
  title: 'Widget/Path/CurriculumContent',
  component: CurriculumContent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '패스 상세 페이지내에서 커리큘럼 컨텐츠를 보여주는 컴포넌트'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof CurriculumContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    pathContents: pathIntroduce('1').pathContents
  }
}

export const Preview: Story = {
  args: {
    pathContents: pathIntroduce('1').pathContents
  }
}
