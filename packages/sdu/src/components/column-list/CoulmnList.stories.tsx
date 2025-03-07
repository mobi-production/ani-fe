import type { Meta, StoryObj } from '@storybook/react'

import { ServerDrivenComponent, ServerDrivenComponentType } from '../..'
import example1 from './example1.json'
import example2 from './example2.json'
const meta = {
  title: 'SDU/ColumnList',
  component: ServerDrivenComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
열을 가지는 컴포넌트입니다.

children 에는 열의 개수와 동일한 개수의 자식 컴포넌트를 전달합니다.

children 의 길이에 따라 열의 개수가 결정됩니다.

### example
\`\`\`json
${JSON.stringify(example1, null, 2)}
\`\`\`
        `
      }
    }
  },
  decorators: [],
  tags: ['autodocs']
} satisfies Meta<typeof ServerDrivenComponent>

export default meta

export const preview: StoryObj<typeof ServerDrivenComponent> = {
  args: {
    content: [example1] as unknown as ServerDrivenComponentType[]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}

const previewContent = [example1, example2, example2]

export const Default: StoryObj<typeof ServerDrivenComponent> = {
  parameters: {
    docs: {
      description: {
        story: `
\`\`\`json
${JSON.stringify(previewContent, null, 2)}
\`\`\`
        `
      }
    }
  },
  args: {
    content: previewContent as unknown as ServerDrivenComponentType[]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}
