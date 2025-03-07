import type { Meta, StoryObj } from '@storybook/react'
import { myPageData, myPageProfileData } from '@/__mock__/data/mypage'
import { Inner } from '.'

const meta = {
  title: 'Page/MyPage/MainPage',
  component: Inner,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
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
