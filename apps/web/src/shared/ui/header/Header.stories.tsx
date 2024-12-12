import type { Meta, StoryObj } from '@storybook/react'
import { HeaderInner } from '.'

const meta = {
  title: 'Widget/Header',
  component: HeaderInner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A-ni 홈페이지 내에서 사용되는 헤더영역 컴포넌트 입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof HeaderInner>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    isLoggedIn: false
  },
  parameters: {
    layout: 'fullscreen'
  }
}
