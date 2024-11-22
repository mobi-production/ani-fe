import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from '@repo/ui/server'
import PathCurriculum from '.'

const meta = {
  title: 'Widget/Path/Curriculum',
  component: PathCurriculum,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
#### 패스의 커리큘럼을 표시하는 컴포넌트입니다.

#### 주요 기능
- 커리큘럼 표시

#### 사용 예시

\`\`\`tsx
<PathCurriculum parts={[
      {
        title: '커리큘럼',
        id: 1,
        order: '1',
        page: [
          {
            type: 'LEARNING_CONTENTS',
            title: '커리큘럼 1',
            order: '1',
            id: '1'
          },
          {
            type: 'LEARNING_CONTENTS',
            title: '커리큘럼 2',
            order: '2',
            id: '2'
          },
          {
            type: 'LEARNING_CONTENTS',
            title: '커리큘럼 3',
            order: '3',
            id: '3'
          },
          {
            type: 'QUIZ',
            title: '커리큘럼 4',
            order: '4',
            id: '4'
          },
          {
            type: 'VIDEO',
            videoLength: '10:44',
            title: '커리큘럼 5',
            order: '5',
            id: '5'
          }
        ]
      },
    ]} />
\`\`\`
            `
      },
      argTypes: {}
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof PathCurriculum>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  parameters: {
    layout: 'centered'
  },
  args: {
    parts: [
      {
        title: '커리큘럼',
        id: 1,
        order: '1',
        page: [
          {
            type: 'LEARNING_CONTENTS',
            title: '커리큘럼 1',
            order: '1',
            id: '1'
          },
          {
            type: 'LEARNING_CONTENTS',
            title: '커리큘럼 2',
            order: '2',
            id: '2'
          },
          {
            type: 'LEARNING_CONTENTS',
            title: '커리큘럼 3',
            order: '3',
            id: '3'
          },
          {
            type: 'QUIZ',
            title: '커리큘럼 4',
            order: '4',
            id: '4'
          },
          {
            type: 'VIDEO',
            videoLength: '10:44',
            title: '커리큘럼 5',
            order: '5',
            id: '5'
          }
        ]
      },
      {
        title: '커리큘럼',
        id: 1,
        order: '1',
        page: [
          {
            type: 'LEARNING_CONTENTS',
            title: '커리큘럼 1',
            order: '1',
            id: '1'
          },
          {
            type: 'LEARNING_CONTENTS',
            title: '커리큘럼 2',
            order: '2',
            id: '2'
          },
          {
            type: 'LEARNING_CONTENTS',
            title: '커리큘럼 3',
            order: '3',
            id: '3'
          },
          {
            type: 'QUIZ',
            title: '커리큘럼 4',
            order: '4',
            id: '4'
          },
          {
            type: 'VIDEO',
            videoLength: '10:44',
            title: '커리큘럼 5',
            order: '5',
            id: '5'
          }
        ]
      }
    ]
  }
}
