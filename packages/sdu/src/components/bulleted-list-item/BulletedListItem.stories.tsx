import { ServerDrivenComponent, ServerDrivenComponentType } from '@repo/sdu'
import type { Meta, StoryObj } from '@storybook/react'

import example from './example.json'
import style from './style.json'
const meta = {
  title: 'SDU/BulletedListItem',
  component: ServerDrivenComponent,
  parameters: {
    docs: {
      description: {
        component: `
순서가 없는 리스트를 나타내는 컴포넌트입니다.

### props

#### \`rich_text\`: 텍스트 내용을 전달합니다.

#### \`style\`: 텍스트의 색상과 배경색을 조절합니다.

#### \`content\`: 하위 컴포넌트를 전달합니다.

### example
\`\`\`json
${JSON.stringify(example, null, 2)}
\`\`\`
        `
      }
    },
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ServerDrivenComponent>

export default meta

export const Default: StoryObj<typeof ServerDrivenComponent> = {
  args: {
    content: [example as unknown as ServerDrivenComponentType]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}

export const Style: StoryObj<typeof ServerDrivenComponent> = {
  parameters: {
    docs: {
      description: {
        story: `
#### 스타일 예시
\`\`\`json
${JSON.stringify(style, null, 2)}
\`\`\`
        `
      }
    }
  },
  args: {
    content: [style as unknown as ServerDrivenComponentType]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}
