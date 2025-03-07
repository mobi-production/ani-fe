import type { Meta, StoryObj } from '@storybook/react'

import { ServerDrivenComponent, ServerDrivenComponentType } from '../../'
import example from './example.json'
import heading1WithChild from './heading1-content.json'
import heading1Style from './heading1-style.json'

const meta = {
  title: 'SDU/Heading1',
  component: ServerDrivenComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Heading1 텍스트를 표시하는 컴포넌트

### Props

- \`text\`: 목차와 같이 표시할 텍스트
- \`rich_text\`: 세부적인 스타일을 포함한 텍스트

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

export const WithBold: StoryObj<typeof ServerDrivenComponent> = {
  parameters: {
    docs: {
      description: {
        story: `
#### 예시
\`\`\`json
${JSON.stringify(heading1Style, null, 2)}
}
\`\`\`
        `
      }
    }
  },
  args: {
    content: [heading1Style as ServerDrivenComponentType]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}

export const WithChild: StoryObj<typeof ServerDrivenComponent> = {
  parameters: {
    docs: {
      description: {
        story: `
#### 예시
\`\`\`json
${JSON.stringify(heading1WithChild, null, 2)}
}
\`\`\`
        `
      }
    }
  },
  args: {
    content: [heading1WithChild as ServerDrivenComponentType]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}
