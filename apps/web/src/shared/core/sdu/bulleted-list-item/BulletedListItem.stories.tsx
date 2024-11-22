import { Meta, StoryObj } from '@storybook/react/*'
import { ServerDrivenComponent, ServerDrivenComponentType } from '../ServerDrivenComponent'
import example from './example.json'

const meta = {
  title: 'SDU/BulletedListItem',
  component: ServerDrivenComponent,
  parameters: {
    docs: {
      description: {
        component: `
#### 기본 BulletedListItem 컴포넌트

#### 예시
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
    content: [example] as ServerDrivenComponentType[]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}
