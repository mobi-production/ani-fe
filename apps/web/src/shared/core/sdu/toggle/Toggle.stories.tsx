import { Meta, StoryObj } from '@storybook/react/*'
import { ServerDrivenComponent, ServerDrivenComponentType } from '../ServerDrivenComponent'
import example from './example.json'

const meta = {
  title: 'SDU/Toggle',
  component: ServerDrivenComponent,
  parameters: {
    docs: {
      description: {
        component: `
#### 기본 Toggle 컴포넌트

#### 예시
\`\`\`json
${JSON.stringify(example, null, 2)}
\`\`\`
        `
      }
    },
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ServerDrivenComponent>

export default meta

export const Default: StoryObj<typeof ServerDrivenComponent> = {
  args: {
    content: [example] as ServerDrivenComponentType[]
  }
}
