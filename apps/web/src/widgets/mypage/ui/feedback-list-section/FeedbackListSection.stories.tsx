import { Meta, StoryObj } from '@storybook/react/*'
import { myPageData } from '@/__mock__/data/mypage'
import FeedbackListSection from '.'

const meta = {
  title: 'Widget/MyPage/FeedbackListSection',
  component: FeedbackListSection,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '마이페이지의 각 패스마다의 피드백을 나타내는 리스트 컴포넌트입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof FeedbackListSection>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    data: myPageData.feedbackList
  }
}
