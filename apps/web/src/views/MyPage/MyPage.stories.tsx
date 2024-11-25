import type { Meta, StoryObj } from '@storybook/react'
import { Inner } from '.'
import { myPageData, myPageProfileData } from '@/__mock__/data/mypage'

const meta = {
  title: 'Page/MyPage',
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
