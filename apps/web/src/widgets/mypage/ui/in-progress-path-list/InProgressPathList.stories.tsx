import { Meta, StoryObj } from '@storybook/react/*'
import InProgressPathList from '.'
import { myPageData } from '@/__mock__/data/mypage'

const meta = {
  title: 'Widget/MyPage/InProgressPathList',
  component: InProgressPathList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '마이페이지의 진행중인 패스 목록을 나타내는 컴포넌트입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof InProgressPathList>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    data: myPageData.inProgressPathList
  }
}
