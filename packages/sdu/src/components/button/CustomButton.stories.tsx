import { ServerDrivenComponent, ServerDrivenComponentType } from '@repo/sdu'
import { IconsMap } from '@repo/ui/client'
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
함수를 호출하는 버튼 컴포넌트입니다.

### props

#### \`text\`: 텍스트 내용을 전달합니다.

#### \`buttonType\`: 버튼 타입을 전달합니다. \`solid\`,\`outlined\`,\`text\`

#### \`style\`: 버튼 스타일을 전달합니다. 세부 설정은 불가능하며, 크기와 속성만 변경할 수 있습니다. 

\`variant\`: \`primary\`, \`secondary\`

\`size\`: \`small\`, \`medium\`, \`large\`

\`fullWidth\`: \`true\` 또는 \`false\`

#### \`leftIcon\`: 왼쪽 아이콘을 전달합니다. 

#### \`rightIcon\`: 오른쪽 아이콘을 전달합니다.

아이콘에 맞는 이름을 전달해야 합니다.

다음 이름을 전달할 수 있으며, 자세한 내용은 [아이콘 문서](https://ant.design/components/icon/)를 참고해주세요.

${Object.keys(IconsMap).join(', ')}

### example
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

#### \`onClick\`: 함수를 호출할 수 있습니다.

다음과 같은 함수를 사용할 수 있습니다.

\`API_CALL\` : API 호출

\`\`\`json
{
  "type": "API_CALL",
  "url": "https://api.example.com/api/endpoint",
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
