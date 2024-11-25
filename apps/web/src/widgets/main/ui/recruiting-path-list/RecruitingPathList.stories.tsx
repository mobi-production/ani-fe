import { Meta, StoryObj } from '@storybook/react'
import RecruitingPathList from '.'
import { mainData } from '@/__mock__/data/main'

const meta = {
  title: 'Widget/Main/RecruitingPathList',
  component: RecruitingPathList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '현재 모집 중인 패스 목록을 나타내는 컴포넌트입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof RecruitingPathList>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    pathData: mainData.pathData
  }
}
