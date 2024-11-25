import { ServerDrivenComponent, ServerDrivenComponentType } from '@repo/sdu'
import type { Meta, StoryObj } from '@storybook/react'

import example from './example.json'
import style from './style.json'
const meta = {
  title: 'SDU/NumberedListItem',
  component: ServerDrivenComponent,
  parameters: {
    docs: {
      description: {
        component: `
번호가 붙은 리스트 아이템을 표시하는 컴포넌트입니다.

### props

#### \`rich_text\`: 텍스트를 전달합니다.

#### \`style\`: 컴포넌트의 색상과 배경색을 조절합니다.

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
    content: [example, example] as unknown as ServerDrivenComponentType[]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}

export const WithStyle: StoryObj<typeof ServerDrivenComponent> = {
  parameters: {
    docs: {
      description: {
        story: `
\`\`\`json
### style
${JSON.stringify(style, null, 2)}
\`\`\`
        `
      }
    }
  },
  args: {
    content: [style] as unknown as ServerDrivenComponentType[]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}
