import { ServerDrivenComponent, ServerDrivenComponentType } from '@repo/sdu'
import type { Meta, StoryObj } from '@storybook/react'

import example from './example.json'
import sizeExample from './size-example.json'
const meta = {
  title: 'SDU/Image',
  component: ServerDrivenComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
이미지를 표시하는 컴포넌트입니다.

### props

#### \`url\`: 이미지를 표시할 URL을 전달합니다.

#### \`alt\`: 이미지의 설명을 전달합니다.

#### \`width\`: 이미지의 너비를 전달합니다.

#### \`height\`: 이미지의 높이를 전달합니다.

#### \`style\`: 이미지의 스타일을 전달합니다.

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

export const Default: StoryObj<typeof ServerDrivenComponent> = {
  parameters: {
    docs: {
      description: {
        story: `
이미지 크기를 지정하지 않고 사용할 수 있습니다.

\`\`\`json
${JSON.stringify(example, null, 2)}
\`\`\`
        `
      }
    }
  },
  args: {
    content: [example as ServerDrivenComponentType]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}

export const WithSize: StoryObj<typeof ServerDrivenComponent> = {
  parameters: {
    docs: {
      description: {
        story: `
이미지 크기를 지정할 수 있습니다.

\`\`\`json
{
  "type": "image",
  "props": {
    "url": "/avif/placeholder.avif",
    "alt": "이미지 설명",
    "width": 600,
    "height": 400
  },
  "order": 0
}
\`\`\`
        `
      }
    }
  },
  args: {
    content: [sizeExample as ServerDrivenComponentType]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}
