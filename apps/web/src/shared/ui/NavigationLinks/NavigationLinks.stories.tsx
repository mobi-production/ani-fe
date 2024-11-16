import type { Meta, StoryObj } from '@storybook/react'
import NavigationLinks from '.'

const meta = {
  title: 'Shared/NavigationLinks',
  component: NavigationLinks,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'id를 이용해 페이지 내 이동 링크를 구성합니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof NavigationLinks>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    links: [
      { id: 'path_info', title: '패스 정보' },
      { id: 'path_feature', title: '패스 특징' },
      { id: 'recommend_target', title: '추천 대상' },
      { id: 'curriculum', title: '커리큘럼' }
    ]
  }
}
