import { wrapWithAppRouterContext } from '@/shared/lib/utils/wrap-with-app-router-context'
import { ServerDrivenComponent, ServerDrivenComponentType } from '../ServerDrivenComponent'
import { Meta, StoryObj } from '@storybook/react/*'
import example from './example.json'
import tableExample from './table-example.json'
const meta = {
  title: 'SDU/Text',
  component: ServerDrivenComponent,
  decorators: [wrapWithAppRouterContext],
  parameters: {
    docs: {
      description: {
        component: `
#### Text 컴포넌트

텍스트 컴포넌트는 임의로 호출할 수 없습니다. rich_text 속성을 가지는 table 컴포넌트에서 매핑되어 사용됩니다.

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
    content: tableExample as ServerDrivenComponentType[]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}
