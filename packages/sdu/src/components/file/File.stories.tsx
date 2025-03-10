import { Icon } from '@repo/ui/client'
import { Flex, Typography } from '@repo/ui/server'
import type { Meta, StoryObj } from '@storybook/react'

import { ServerDrivenComponent, ServerDrivenComponentType } from '../../'
import example from './example.json'
import style from './style.json'

const meta = {
  title: 'SDU/File',
  component: ServerDrivenComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
파일을 표시하는 컴포넌트입니다.

### props

#### \`url\`: 파일을 다운로드할 URL을 전달합니다.

#### \`file_size\`: 파일 사이즈를 전달합니다.

#### \`style\`: 컴포넌트의 색상과 배경색을 조절합니다.

### example
\`\`\`json
${JSON.stringify(example, null, 2)}
\`\`\`
        `
      }
    }
  },
  decorators: [],
  tags: ['autodocs']
} satisfies Meta<typeof ServerDrivenComponent>

export default meta

export const Default: StoryObj<typeof ServerDrivenComponent> = {
  args: {
    content: [example as unknown as ServerDrivenComponentType]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}

export const WithStyle: StoryObj<typeof ServerDrivenComponent> = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: `
컴포넌트의 색상과 배경색을 조절합니다.

### example
\`\`\`json
${JSON.stringify(style, null, 2)}
\`\`\`
        `
      }
    }
  },
  args: {
    content: [style as unknown as ServerDrivenComponentType]
  },
  render: (args) => <ServerDrivenComponent content={args.content} />
}

export const FileIcon: StoryObj<typeof ServerDrivenComponent> = {
  render: () => {
    return (
      <Flex
        gap={16}
        direction='column'
        align='start'>
        <Flex gap={8}>
          <Icon
            name='FileImageOutlined'
            size={20}
          />
          <Typography
            variant='body-1-normal'
            fontWeight='medium'>
            avif, webp, png, jpg, jpeg
          </Typography>
        </Flex>
        <Flex gap={8}>
          <Icon
            name='FilePdfOutlined'
            size={20}
          />
          <Typography
            variant='body-1-normal'
            fontWeight='medium'>
            pdf
          </Typography>
        </Flex>
        <Flex gap={8}>
          <Icon
            name='VideoCameraOutlined'
            size={20}
          />
          <Typography
            variant='body-1-normal'
            fontWeight='medium'>
            mp4
          </Typography>
        </Flex>
        <Flex gap={8}>
          <Icon
            name='AudioOutlined'
            size={20}
          />
          <Typography
            variant='body-1-normal'
            fontWeight='medium'>
            mp3, wav, ogg
          </Typography>
        </Flex>
        <Flex gap={8}>
          <Icon
            name='FileOutlined'
            size={20}
          />
          <Typography
            variant='body-1-normal'
            fontWeight='medium'>
            txt, md
          </Typography>
        </Flex>
        <Flex gap={8}>
          <Icon
            name='FileZipOutlined'
            size={20}
          />
          <Typography
            variant='body-1-normal'
            fontWeight='medium'>
            zip
          </Typography>
        </Flex>
        <Flex gap={8}>
          <Icon
            name='FileExcelOutlined'
            size={20}
          />
          <Typography
            variant='body-1-normal'
            fontWeight='medium'>
            excel
          </Typography>
        </Flex>
        <Flex gap={8}>
          <Icon
            name='FilePptOutlined'
            size={20}
          />
          <Typography
            variant='body-1-normal'
            fontWeight='medium'>
            ppt
          </Typography>
        </Flex>
        <Flex gap={8}>
          <Icon
            name='FileWordOutlined'
            size={20}
          />
          <Typography
            variant='body-1-normal'
            fontWeight='medium'>
            docx
          </Typography>
        </Flex>
        <Flex gap={8}>
          <Icon
            name='CodeOutlined'
            size={20}
          />
          <Typography
            variant='body-1-normal'
            fontWeight='medium'>
            code
          </Typography>
        </Flex>
      </Flex>
    )
  }
}
