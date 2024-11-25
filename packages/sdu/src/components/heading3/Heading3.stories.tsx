import { ServerDrivenComponent, ServerDrivenComponentType } from '@repo/sdu'
import type { Meta, StoryObj } from '@storybook/react'

import example from './example.json'
import heading3Style from './heading3-style.json'

const meta = {
  title: 'SDU/Heading3',
  component: ServerDrivenComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
#### Heading3 텍스트를 표시하는 컴포넌트

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
${JSON.stringify(heading3Style, null, 2)}
\`\`\`
        `
      }
    }
  },
  args: {
    content: [heading3Style as ServerDrivenComponentType]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}