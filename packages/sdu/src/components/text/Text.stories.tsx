import type { Meta, StoryObj } from '@storybook/react'

import { ServerDrivenComponent, ServerDrivenComponentType } from '../../'
import example from './example.json'

const meta = {
  title: 'SDU/Text',
  component: ServerDrivenComponent,
  parameters: {
    docs: {
      description: {
        component: `
기본적인 텍스트 컴포넌트입니다.

### props

#### \`rich_text\`: 텍스트 내용을 전달합니다.

#### \`style\`: 텍스트의 색상과 배경색을 조절합니다.

\`\`\` typescript
rich_text: Array<{
  type: 'text'
  props: TextProps // Text 컴포넌트 props
}>
\`\`\`

#### \`TextProps\`

\`\`\` typescript
text: string
link?: string | null
bold?: boolean
code?: boolean
italic?: boolean
strikethrough?: boolean
underline?: boolean
style?: ColorStyle // { color?: string; backgroundColor?: string }
\`\`\`

#### \`text\`: 텍스트 내용을 전달합니다.

#### \`link\`: 속성을 통해 텍스트에 링크를 추가할 수 있습니다.

#### \`bold\`: 속성을 통해 텍스트를 굵게 표시할 수 있습니다.

#### \`code\`: 속성을 통해 텍스트를 코드 형식으로 표시할 수 있습니다.

#### \`italic\`: 속성을 통해 텍스트를 기울임꼴로 표시할 수 있습니다.

#### \`strikethrough\`: 속성을 통해 텍스트에 줄을 긋을 수 있습니다.

#### \`underline\`: 속성을 통해 텍스트에 밑줄을 추가할 수 있습니다.

#### \`style\`: 속성을 통해 세부적으로 텍스트의 색상과 배경색을 조절할 수 있습니다.

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
