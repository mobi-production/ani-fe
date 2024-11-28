import type { Meta, StoryObj } from '@storybook/react'

import { ServerDrivenComponent, ServerDrivenComponentType } from '../..'
import example from './example.json'
const meta = {
  title: 'SDU/Code',
  component: ServerDrivenComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
코드 컴포넌트입니다.

### props

#### \`caption\`: 코드 설명을 전달합니다.

caption은 기존 다른 텍스트들과 똑같은 속성(rich_text)을 가집니다. 키 값만 caption으로 바뀌었습니다.

\`\`\`json
"caption": [
    {
        "text": "변수 name",
        "bold": true,
        "code": true
    },
    {
        "text": "을 입력받아 이름을 출력해주세요!"
    }
],
\`\`\`

#### \`code\`: 코드 내용을 전달합니다.

code는 다음과 같은 속성을 가집니다.

\`text\`: 코드 내용을 전달합니다.

\`blank\`: 빈칸 여부를 전달합니다.

\`language\`: 코드 언어를 전달합니다.

\`\`\`json
"code": {
    "text": [
        {
            "text": "function greet("
        },
        {
            "text": "name"
        },
        {
            "text": ")"
        },
        {
            "text": " {\n  return \`Hello, "
        },
        {
            "text": "${name}",
            "blank": true
        },
        {
            "text": "!\`;\n}"
        }
    ]
}
\`\`\`

\`example\`: 코드 예시를 전달합니다.

    input: 코드 예시 입력 값을 전달합니다.
    output: 코드 예시 출력 값을 전달합니다.

\`\`\`json
"example": {
    "input": "Claude",
    "output": "Hello, Claude!"
}
\`\`\`

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

export const Preview: StoryObj<typeof ServerDrivenComponent> = {
  args: {
    content: [example as ServerDrivenComponentType]
  },
  render: (args) => (
    <div className='w-[500px]'>
      <ServerDrivenComponent content={args.content} />
    </div>
  )
}
