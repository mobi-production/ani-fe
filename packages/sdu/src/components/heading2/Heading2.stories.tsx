import type { Meta, StoryObj } from '@storybook/react'

import { ServerDrivenComponent, ServerDrivenComponentType } from '../../'
import example from './example.json'
import heading2Style from './heading2-style.json'

const meta = {
  title: 'SDU/Heading2',
  component: ServerDrivenComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
#### Heading2 텍스트를 표시하는 컴포넌트

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
${JSON.stringify(heading2Style, null, 2)}
\`\`\`
        `
      }
    }
  },
  args: {
    content: [heading2Style as ServerDrivenComponentType]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}
