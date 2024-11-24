import type { Meta, StoryObj } from '@storybook/react'
import { Inner } from '.'
import { myPageData, myPageProfileData } from '@/__mock__/data/mypage'

const meta = {
  title: 'Page/MyPage',
  component: Inner,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '20px',
          boxSizing: 'border-box',
          width: '110vw'
        }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Inner>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    myPageData: myPageData,
    myPageProfileData: myPageProfileData,
    onOpenModal: () => {}
  }
}
