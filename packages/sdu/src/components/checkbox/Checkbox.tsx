import type { Meta, StoryObj } from '@storybook/react'

import { ServerDrivenComponent, ServerDrivenComponentType } from '../..'
import example from './example.json'
import style from './style.json'

const meta = {
  title: 'SDU/Checkbox',
  component: ServerDrivenComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
체크박스 컴포넌트입니다.

### props

#### \`rich_text\`: 텍스트를 전달합니다.

#### \`checked\`: 체크 여부를 전달합니다.

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
    content: [example as unknown as ServerDrivenComponentType]
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
    content: [style as unknown as ServerDrivenComponentType]
  },
  render: (args) => (
    <div className='w-[500px]'>
      <ServerDrivenComponent content={args.content} />
    </div>
  )
}
