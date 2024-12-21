import type { Meta, StoryObj } from '@storybook/react'
import { Inner } from '.'
const meta = {
  title: 'Widget/Header',
  component: Inner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A-ni 홈페이지 내에서 사용되는 헤더영역 컴포넌트 입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Inner>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    isLoggedIn: true,
    clearSession: () => {}
  },
  parameters: {
    layout: 'fullscreen'
  }
}
