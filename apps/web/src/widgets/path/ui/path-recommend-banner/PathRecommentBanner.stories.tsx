import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from '@repo/ui/server'
import PathRecommendBanner from '.'

const meta = {
  title: 'Widget/Path/RecommendBanner',
  component: PathRecommendBanner,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
#### 패스의 추천 이유를 표시하는 컴포넌트입니다.

#### 주요 기능
- 추천 이유 표시

#### 사용 예시

\`\`\`tsx
<PathRecommendBanner recommendedItems={[
      {
        id: 1,
        emoji: '👍',
        description: '추천 이유 1'
      },
      {
        id: 2,
        emoji: '👍',
        description: '추천 이유 2'
      }
    ]} />
\`\`\`
            `
      },
      argTypes: {}
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof PathRecommendBanner>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  parameters: {
    layout: 'centered'
  },
  args: {
    recommendedItems: [
      {
        id: 1,
        emoji: '👍',
        description: '추천 이유 1'
      },
      {
        id: 2,
        emoji: '👍',
        description: '추천 이유 2'
      }
    ]
  }
}
