import { ServerDrivenComponent, ServerDrivenComponentType } from '@repo/sdu'
import { Flex } from '@repo/ui/server'
import type { Meta, StoryObj } from '@storybook/react'

import example from './example.json'

const meta = {
  title: 'SDU/Button',
  component: ServerDrivenComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
#### 텍스트를 표시하는 컴포넌트

#### 예시
\`\`\`json
{
  "type": "Button",
  "props": {
    "text": "테스트",
    "buttonType": "solid",
    "style": {
      "variant": "primary",
      "size": "medium",
      "fullWidth": false
    },
    "onClick": {
      "type": "NAVIGATE",
      "payload": {
        "type": "PUSH",
        "path": "/path"
      }
    }
  }
}
\`\`\`


#### 다음과 같은 함수를 사용할 수 있습니다.

\`API_CALL\` : API 호출

\`\`\`json
{
  "type": "API_CALL",
  "endpoint": "/api/endpoint",
  "method": "GET",
  "payload": {}
}
\`\`\`

\`NAVIGATE\` : 페이지 이동

\`\`\`json
{
  "type": "NAVIGATE",
  "payload": {
    "type": "PUSH",
    "path": "/path"
  }
}
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof ServerDrivenComponent>

export default meta

export const Solid: StoryObj<typeof ServerDrivenComponent> = {
  args: {
    content: [
      {
        ...example,
        props: {
          ...example.props,
          buttonType: 'solid'
        }
      } as ServerDrivenComponentType
    ]
  },
  render: (args) => (
    <Flex gap={12}>
      <ServerDrivenComponent content={args.content} />
      <ServerDrivenComponent
        content={[
          {
            ...args.content[0],
            props: { ...args.content[0]!.props, variant: 'secondary' }
          } as ServerDrivenComponentType
        ]}
      />
    </Flex>
  )
}

export const Outlined: StoryObj<typeof ServerDrivenComponent> = {
  args: {
    content: [
      {
        ...example,
        props: {
          ...example.props,
          buttonType: 'outlined'
        }
      } as ServerDrivenComponentType
    ]
  },
  render: (args) => (
    <Flex gap={12}>
      <ServerDrivenComponent content={args.content} />
      <ServerDrivenComponent
        content={[
          {
            ...args.content[0],
            props: { ...args.content[0]!.props, variant: 'secondary' }
          } as ServerDrivenComponentType
        ]}
      />
    </Flex>
  )
}

export const Text: StoryObj<typeof ServerDrivenComponent> = {
  args: {
    content: [
      {
        ...example,
        props: {
          ...example.props,
          buttonType: 'text'
        }
      } as ServerDrivenComponentType
    ]
  },
  render: (args) => (
    <Flex gap={12}>
      <ServerDrivenComponent content={args.content} />
      <ServerDrivenComponent
        content={[
          {
            ...args.content[0],
            props: { ...args.content[0]!.props, variant: 'secondary' }
          } as ServerDrivenComponentType
        ]}
      />
    </Flex>
  )
}
