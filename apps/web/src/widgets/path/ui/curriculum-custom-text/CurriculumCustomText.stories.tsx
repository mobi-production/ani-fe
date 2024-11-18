import type { Meta, StoryObj } from '@storybook/react'
import CurriculumBar from '.'
import { pathIntroduce } from '@/__mock__/data/path'
import Flex from '@repo/ui/components/flex'
import { Typography } from '@repo/ui/server'
import { Icon } from '@repo/ui/client'
import CurriculumCustomText from '.'
import { FlexGap } from '@repo/ui/components/flex/variants'

const meta = {
  title: 'Widget/Path/CurriculumCustomText',
  component: CurriculumCustomText,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '패스내에서 커리큘럼 텍스트와 아이콘을 보여주는 컴포넌트'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['page', 'video', 'quiz'],
      control: {
        type: 'select'
      }
    },
    videoLength: {
      control: false
    }
  }
} satisfies Meta<typeof CurriculumBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'body-1-normal',
    subVariant: 'body-1-normal',
    type: 'page',
    videoLength: '23:57',
    title: '페이지 제목',
    direction: 'row'
  },
  render: (args) => (
    <Flex
      direction={'column'}
      className='gap-2'>
      <CurriculumCustomText
        className='flex gap-[0.25rem]'
        {...args}
        type='page'
      />
      <CurriculumCustomText
        className='flex gap-[0.25rem]'
        {...args}
        type='video'
      />
      <CurriculumCustomText
        className='flex gap-[0.25rem]'
        {...args}
        type='quiz'
      />
    </Flex>
  )
}

export const PathList: Story = {
  args: {
    variant: 'body-2-normal',
    subVariant: 'body-1-normal',
    type: 'page',
    videoLength: '23:57',
    title: '페이지 제목',
    direction: 'column'
  },
  render: (args) => (
    <Flex
      direction={'column'}
      className='gap-2'>
      <CurriculumCustomText
        {...args}
        type='page'
        title='정보를 의미하는 태그 살펴보기'
      />
      <CurriculumCustomText
        {...args}
        type='video'
        title='화면에 이미지 출력하기'
      />
      <CurriculumCustomText
        {...args}
        type='quiz'
        title='마무리 퀴즈'
      />
    </Flex>
  )
}
