import type { Meta, StoryObj } from '@storybook/react'

import { ServerDrivenComponent, ServerDrivenComponentType } from '../../'
import example from './example.json'

const meta = {
  title: 'SDU/Toggle',
  component: ServerDrivenComponent,
  parameters: {
    docs: {
      description: {
        component: `
토글 기능을 제공하는 컴포넌트입니다.

### Props

#### \`text\` 속성

\`text\` 속성에는 목차와 같이 표시할 텍스트를 전달해주세요.

#### \`variant\` 속성

\`variant\` 속성에는 텍스트 컴포넌트에 정의된 키값을 전달해주세요.

\`heading_1\`, \`heading_2\`, \`heading_3\`, \`text\` 총 4가지 타입을 제공합니다.

#### \`summary\` 속성

\`summary\` 속성에는 텍스트 컴포넌트에 정의된 \`rich_text\` 속성을 전달해주세요.

#### \`style\` 속성

\`style\` 속성에는 \`ColorStyle\` 타입을 전달해주세요.

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
    content: [example] as unknown as ServerDrivenComponentType[]
  }
}

export const DifferentSize: StoryObj<typeof ServerDrivenComponent> = {
  args: {
    content: [
      { ...example, props: { ...example.props, variant: 'heading_1' } },
      { ...example, props: { ...example.props, variant: 'heading_2' } },
      { ...example, props: { ...example.props, variant: 'heading_3' } },
      { ...example, props: { ...example.props, variant: 'text' } }
    ] as unknown as ServerDrivenComponentType[]
  }
}
