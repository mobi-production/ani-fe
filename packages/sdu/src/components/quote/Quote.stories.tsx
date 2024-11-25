import { ServerDrivenComponent, ServerDrivenComponentType } from '@repo/sdu'
import type { Meta, StoryObj } from '@storybook/react'

import example from './example.json'
import style from './style.json'
const meta = {
  title: 'SDU/Quote',
  component: ServerDrivenComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
인용구를 표시하는 컴포넌트입니다.

### props

#### \`rich_text\`: 텍스트를 전달합니다.

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
  render: (args) => (
    <div className='w-[500px]'>
      <ServerDrivenComponent content={args.content} />
    </div>
  )
}

export const WithStyle: StoryObj<typeof ServerDrivenComponent> = {
  args: {
    content: [style as ServerDrivenComponentType]
  }
}
