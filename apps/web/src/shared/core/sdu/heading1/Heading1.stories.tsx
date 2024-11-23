import type { Meta, StoryObj } from '@storybook/react'

import { ServerDrivenComponent, ServerDrivenComponentType } from '../ServerDrivenComponent'
import { wrapWithAppRouterContext } from '@/shared/lib/utils/wrap-with-app-router-context'
import example from './example.json'
const meta = {
  title: 'SDU/Heading1',
  component: ServerDrivenComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
#### Heading1 텍스트를 표시하는 컴포넌트

#### 예시
\`\`\`json
${JSON.stringify(example, null, 2)}
\`\`\`
        `
      }
    }
  },
  decorators: [wrapWithAppRouterContext],
  tags: ['autodocs']
} satisfies Meta<typeof ServerDrivenComponent>

export default meta

export const Preview: StoryObj<typeof ServerDrivenComponent> = {
  args: {
    content: [example as ServerDrivenComponentType]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}

export const WithBold: StoryObj<typeof ServerDrivenComponent> = {
  parameters: {
    docs: {
      description: {
        story: `
#### 예시
\`\`\`json
{
  "type": "heading_1",
  "props": { "text": "bold 처리", "bold": true }
}
\`\`\`
        `
      }
    }
  },
  args: {
    content: [
      {
        ...example,
        props: { ...example.props, text: '기본 ' }
      },
      {
        ...example,
        props: { ...example.props, text: 'bold 처리', bold: true }
      },
      {
        ...example,
        props: { ...example.props, text: ' 기본' }
      }
    ] as ServerDrivenComponentType[]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}

export const WithItalic: StoryObj<typeof ServerDrivenComponent> = {
  parameters: {
    docs: {
      description: {
        story: `
#### 예시
\`\`\`json
{
  "type": "heading_1",
  "props": {
    "text": "프로젝트 예시 - 제목으로 쓰이는 속성",
    "italic": true
  }
}
\`\`\`
        `
      }
    }
  },
  args: {
    content: [
      {
        ...example,
        props: { ...example.props, italic: true }
      } as ServerDrivenComponentType
    ]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}

export const WithCodeBlock: StoryObj<typeof ServerDrivenComponent> = {
  parameters: {
    docs: {
      description: {
        story: `
#### 예시
\`\`\`json
content: [
  {
    "type": "heading_1",
    "props": {
      "text": "프로젝트 예시 - 제목으로 쓰이는 속성"
    }
  },
  {
    "type": "heading_1",
    "props": {
      "text": "코드블럭 부분",
      "code": true
    }
  },
  {
    "type": "heading_1",
    "props": { "text": " 텍스트 부분" }
  }
]
\`\`\`
        `
      }
    }
  },
  args: {
    content: [
      {
        ...example,
        props: { ...example.props, text: ' 텍스트 부분 ' }
      },
      {
        ...example,
        props: {
          ...example.props,
          text: '코드블럭 부분',
          code: true
        }
      },
      {
        ...example,
        props: { ...example.props, text: ' 텍스트 부분' }
      }
    ] as ServerDrivenComponentType[]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}
