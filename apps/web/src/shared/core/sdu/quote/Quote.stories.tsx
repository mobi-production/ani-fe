import type { Meta, StoryObj } from '@storybook/react'

import { ServerDrivenComponent, ServerDrivenComponentType } from '../ServerDrivenComponent'
import example from './example.json'
import { wrapWithAppRouterContext } from '@/shared/lib/utils/wrap-with-app-router-context'

const meta = {
  title: 'SDU/Quote',
  component: ServerDrivenComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
#### Quote 컴포넌트

#### 예시
\`\`\`json
${JSON.stringify(example, null, 2)}
\`\`\`
        `
      }
    }
  },
  decorators: [wrapWithAppRouterContext],
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