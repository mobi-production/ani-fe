import type { Meta, StoryObj } from '@storybook/react'

import { ServerDrivenComponent, ServerDrivenComponentType } from '../../'
import example from './example.json'
import style from './style.json'

const meta = {
  title: 'SDU/Divider',
  component: ServerDrivenComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
구분선을 표시하는 컴포넌트입니다.

### props

#### \`style\`: 컴포넌트의 배경색을 조절합니다.

### example
\`\`\`json
${JSON.stringify(example, null, 2)}
\`\`\`
        `
      }
    }
  },
  decorators: [],
  tags: ['autodocs']
} satisfies Meta<typeof ServerDrivenComponent>

export default meta

export const Default: StoryObj<typeof ServerDrivenComponent> = {
  args: {
    content: [example as ServerDrivenComponentType]
  },
  render: (args) => (
    <div className='w-[300px] p-4'>
      <ServerDrivenComponent content={args.content} />
    </div>
  )
}

export const WithStyle: StoryObj<typeof ServerDrivenComponent> = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: `
컴포넌트의 선 색을 조절합니다.

### example
\`\`\`json
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
    <div className='w-[300px] p-4'>
      <ServerDrivenComponent content={args.content} />
    </div>
  )
}
