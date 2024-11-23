import type { Meta, StoryObj } from '@storybook/react'

import { ServerDrivenComponent, ServerDrivenComponentType } from '../ServerDrivenComponent'
import { wrapWithAppRouterContext } from '@/shared/lib/utils/wrap-with-app-router-context'
import example from './example.json'
const meta = {
  title: 'SDU/Paragraph',
  component: ServerDrivenComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
#### Paragraph 텍스트를 표시하는 컴포넌트

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
  "type": "paragraph",
  "props": { "text": "bold 처리", "bold": true },
  "order": 1
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
        props: { ...example.props, text: '기본 ' },
        order: 1
      },
      {
        ...example,
        props: { ...example.props, text: 'bold 처리', bold: true },
        order: 1
      },
      {
        ...example,
        props: { ...example.props, text: ' 기본' },
        order: 1
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
  "type": "paragraph",
  "props": {
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "italic": true,
    "order": 1
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
        props: { ...example.props, italic: true },
        order: 1
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
    "type": "paragraph",
    "props": {
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    "order": 1
  },
  {
    "type": "paragraph",
    "props": {
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "code": true
    },
    "order": 1
  },
  {
    "type": "paragraph",
    "props": { "text": " 텍스트 부분" },
    "order": 1
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
        props: { ...example.props, text: ' 텍스트 부분 ' },
        order: 1
      },
      {
        ...example,
        props: {
          ...example.props,
          text: '코드블럭 부분',
          code: true
        },
        order: 1
      },
      {
        ...example,
        props: { ...example.props, text: ' 텍스트 부분' },
        order: 1
      }
    ] as ServerDrivenComponentType[]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}

export const WithLink: StoryObj<typeof ServerDrivenComponent> = {
  parameters: {
    docs: {
      description: {
        story: `
#### 예시
\`\`\`json
content: [
  {
    "type": "paragraph",
    "props": {
      "text": "https://www.google.com",
      "link": "https://www.google.com",
    },
    "order": 0
  },
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
        props: { ...example.props, text: 'https://www.google.com', link: 'https://www.google.com' },
        order: 0
      }
    ] as ServerDrivenComponentType[]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}

export const TabInBlock: StoryObj<typeof ServerDrivenComponent> = {
  parameters: {
    docs: {
      description: {
        story: `
#### 예시
\`\`\`json
content: [
  {
    "type": "paragraph",
    "props": {
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    "order": 0
  },
  {
    "type": "paragraph",
    "props": {
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "style": { "marginLeft": "40px" }
    },
    "order": 1
  },
  {
    "type": "paragraph",
    "props": {
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "style": { "marginLeft": "20px" }
    },
    "order": 2
  },
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
        props: {
          ...example.props,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        order: 0
      },
      {
        ...example,
        props: {
          ...example.props,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          style: { marginLeft: '40px' }
        },
        order: 1
      },
      {
        ...example,
        props: {
          ...example.props,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          style: { marginLeft: '20px' }
        },
        order: 2
      }
    ] as ServerDrivenComponentType[]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}
