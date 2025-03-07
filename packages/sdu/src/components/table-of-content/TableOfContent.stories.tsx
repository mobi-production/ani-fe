import type { Meta, StoryObj } from '@storybook/react'

import { ServerDrivenComponent, ServerDrivenComponentType } from '../../'
import heading1Example from '../heading1/heading1-content.json'
import heading2Example from '../heading2/example.json'
import heading3Example from '../heading3/example.json'
import textExample from '../text/example.json'
import example from './example.json'
import styleExample from './style.json'

const meta = {
  title: 'SDU/TableOfContent',
  component: ServerDrivenComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
목차를 표시하는 컴포넌트

heading으로 시작하는 id를 가진 모든 요소를 찾아서 목차를 표시합니다.


### props

#### \`style\`: 컴포넌트의 색상과 배경색을 조절합니다.

#### 예시
\`\`\`json
${JSON.stringify(example, null, 2)}
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof ServerDrivenComponent>

export default meta

export const Preview: StoryObj<typeof ServerDrivenComponent> = {
  args: {
    content: [example as ServerDrivenComponentType]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}

const preview = [example, heading1Example, heading2Example, heading3Example, textExample]

export const WithContent: StoryObj<typeof ServerDrivenComponent> = {
  parameters: {
    docs: {
      description: {
        story: `
#### 예시
\`\`\`json
${JSON.stringify(preview, null, 2)}
\`\`\`
        `
      }
    }
  },
  args: {
    content: preview as ServerDrivenComponentType[]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}

export const WithStyle: StoryObj<typeof ServerDrivenComponent> = {
  parameters: {
    docs: {
      description: {
        story: `
#### 예시
\`\`\`json
${JSON.stringify(styleExample, null, 2)}
\`\`\`
        `
      }
    }
  },
  args: {
    content: [styleExample as ServerDrivenComponentType]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}
