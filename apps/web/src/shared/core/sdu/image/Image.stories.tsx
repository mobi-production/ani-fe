import type { Meta, StoryObj } from '@storybook/react'

import { ServerDrivenComponent, ServerDrivenComponentType } from '../ServerDrivenComponent'
import { wrapWithAppRouterContext } from '@/shared/lib/utils/wrap-with-app-router-context'
import example from './example.json'
const meta = {
  title: 'SDU/Image',
  component: ServerDrivenComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
#### Image 컴포넌트

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

export const Default: StoryObj<typeof ServerDrivenComponent> = {
  parameters: {
    docs: {
      description: {
        story: `
이미지 크기를 지정하지 않고 사용할 수 있습니다.

\`\`\`json
{
  "type": "image",
  "props": {
    "url": "/avif/placeholder.avif",
    "alt": "이미지 설명"
  },
  "order": 0
}
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

export const PreviewWithSize: StoryObj<typeof ServerDrivenComponent> = {
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
    content: [
      { ...example, props: { ...example.props, width: 600, height: 400 } }
    ] as ServerDrivenComponentType[]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}
