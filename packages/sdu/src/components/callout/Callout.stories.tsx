import { ServerDrivenComponent, ServerDrivenComponentType } from '@repo/sdu'
import type { Meta, StoryObj } from '@storybook/react'

import example from './example.json'
import style from './style.json'
const meta = {
  title: 'SDU/Callout',
  component: ServerDrivenComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
도움말 또는 주의사항을 표시하는 컴포넌트입니다.

### props

#### \`rich_text\`: 텍스트를 전달합니다.

#### \`icon\`: 아이콘을 전달합니다.

#### \`style\`: 컴포넌트의 색상과 배경색을 조절합니다.

### example
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
  render: (args) => (
    <div className='w-[500px]'>
      <ServerDrivenComponent content={args.content} />
    </div>
  )
}

export const WithStyle: StoryObj<typeof ServerDrivenComponent> = {
  parameters: {
    docs: {
      description: {
        story: `\`\`\`json
${JSON.stringify(style, null, 2)}
\`\`\`
        `
      }
    }
  },
  args: {
    content: [style as ServerDrivenComponentType]
  },
  render: (args) => (
    <div className='w-[500px]'>
      <ServerDrivenComponent content={args.content} />
    </div>
  )
}
