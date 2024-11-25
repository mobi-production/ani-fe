import type { Meta, StoryObj } from '@storybook/react'

import { ServerDrivenComponent, ServerDrivenComponentType } from '../../'
import columnHeader from './column-header.json'
import example from './example.json'
import rowHeader from './row-header.json'
import tableStyle from './table-style.json'

const meta = {
  title: 'SDU/Table',
  component: ServerDrivenComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
테이블 컴포넌트는 테이블 형식의 데이터를 표시하는 컴포넌트입니다.

### props

#### \`has_column_header\`: \`boolean\` 열 헤더가 있는지 여부

#### \`has_row_header\`: \`boolean\` 행 헤더가 있는지 여부

#### \`rows\`: 테이블 데이터를 전달합니다.

테이블 데이터는 아래와 같습니다.

\`\`\` typescript
rows: Array<{
  type: 'table_row'
  table_row: {
    cells: Array<{
      rich_text: Array<{
        type: 'text'
        props: TextProps
      }>
      style?: ColorStyle
    }>
  }
}>
\`\`\`

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

export const WithColumnHeader: StoryObj<typeof ServerDrivenComponent> = {
  parameters: {
    docs: {
      description: {
        story: `
#### 열 헤더가 있는 테이블

\`\`\`json
${JSON.stringify(columnHeader, null, 2)}
\`\`\`
        `
      }
    }
  },
  args: {
    content: [columnHeader as ServerDrivenComponentType]
  },
  render: (args) => (
    <div className='w-[500px]'>
      <ServerDrivenComponent content={args.content} />
    </div>
  )
}

export const WithRowHeader: StoryObj<typeof ServerDrivenComponent> = {
  parameters: {
    docs: {
      description: {
        story: `
#### 행 헤더가 있는 테이블

\`\`\`json
${JSON.stringify(rowHeader, null, 2)}
\`\`\`
        `
      }
    }
  },
  args: {
    content: [rowHeader as ServerDrivenComponentType]
  },
  render: (args) => (
    <div className='w-[500px]'>
      <ServerDrivenComponent content={args.content} />
    </div>
  )
}

export const WithTableStyle: StoryObj<typeof ServerDrivenComponent> = {
  parameters: {
    docs: {
      description: {
        story: `
#### 테이블 스타일

\`\`\`json
${JSON.stringify(tableStyle, null, 2)}
\`\`\`
        `
      }
    }
  },
  args: {
    content: [tableStyle as ServerDrivenComponentType]
  },
  render: (args) => (
    <div className='w-[500px]'>
      <ServerDrivenComponent content={args.content} />
    </div>
  )
}
