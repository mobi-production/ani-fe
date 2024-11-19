import { Meta, StoryObj } from '@storybook/react/*'
import { myPageData } from '@/__mock__/data/mypage'
import AssignmentList from '.'

const meta = {
  title: 'Widget/MyPage/AssignmentList',
  component: AssignmentList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '마이페이지의 패스별 과제 목록을 나타내는 컴포넌트입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof AssignmentList>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    data: myPageData.assignmentList
  }
}
