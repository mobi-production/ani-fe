import { ServerDrivenComponent, ServerDrivenComponentType } from '@repo/sdu'
import type { Meta, StoryObj } from '@storybook/react'

import example from './example.json'

const meta = {
  title: 'SDU/Text',
  component: ServerDrivenComponent,
  parameters: {
    docs: {
      description: {
        component: `
#### Text 컴포넌트

기본적인 텍스트 컴포넌트입니다.

\`\`\` typescript
text: Array<{
  type: 'text'
  props: TextProps # Text 컴포넌트 props
}>
\`\`\`

해당 컴포넌트를 이용하여 같은 컴포넌트내에 다른 스타일을 적용할 수 있습니다.

\`\`\` json
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
  render: (args) => <ServerDrivenComponent content={args.content} />
}
