import type { Meta, StoryObj } from '@storybook/react'
import PathTitleBanner from '.'

const meta = {
  title: 'Widget/Path/TitleBanner',
  component: PathTitleBanner,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
#### 패스의 제목, 설명, 아이디, 썸네일, 신청 여부를 표시하는 컴포넌트입니다.

#### 주요 기능
- 패스 제목
- 패스 설명
- 패스 아이디
- 패스 썸네일
- 패스 신청 여부를 판단하여 액션 버튼 표시

#### 사용 예시

\`\`\`tsx
<PathTitleBanner
  title="패스 제목"
  description="패스 설명"
  id="path_id"
  thumbnail="/avif/placeholder.avif"
  isApplied={false} />
\`\`\`
            `
      },
      argTypes: {}
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof PathTitleBanner>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  parameters: {
    layout: 'centered'
  },
  args: {
    title: '패스 제목',
    description: '패스 설명',
    id: 'path_id',
    thumbnail: '/avif/placeholder.avif',
    isApplied: false
  }
}
