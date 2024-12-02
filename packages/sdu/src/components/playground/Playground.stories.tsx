import type { Meta, StoryObj } from '@storybook/react'

import Playground from './Playground'

const sampleJson = [
  {
    type: 'text',
    props: {
      rich_text: [
        {
          text: '샘플 텍스트입니다.'
        }
      ]
    }
  },
  {
    type: 'heading_1',
    props: {
      text: '프로젝트 예시 - 제목으로 쓰이는 속성',
      rich_text: [
        {
          text: '프로젝트 예시 - 제목으로 쓰이는'
        },
        {
          text: ' '
        },
        {
          text: '속성',
          bold: true,
          style: {
            color: '#000000',
            backgroundColor: '#FFFFFF'
          }
        }
      ]
    }
  }
]

const meta = {
  title: 'SDU/Playground',
  component: Playground,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
백엔드에서 전달받은 JSON을 시각적으로 확인할 수 있는 플레이그라운드입니다.

### Props
- \`defaultContent\`: 초기에 표시될 콘텐츠를 설정합니다.

### 사용 예시
\`\`\`json
${JSON.stringify(sampleJson, null, 2)}
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Playground>

export default meta

type Story = StoryObj<typeof Playground>

export const Default: Story = {
  args: {}
}
