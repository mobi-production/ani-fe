import type { Meta, StoryObj } from '@storybook/react'
import CurriculumBar from '.'
import { pathIntroduce } from '@/__mock__/data/path'
import Flex from '@repo/ui/components/flex'
import { Typography } from '@repo/ui/server'
import { Icon } from '@repo/ui/client'

const meta = {
  title: 'Entities/PathCurriculumBar',
  component: CurriculumBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '패스 상세 페이지내에서 커리큘럼 바를 보여주는 컴포넌트'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof CurriculumBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    pathContents: pathIntroduce('1').pathContents
  }
}

export const Preview: Story = {
  args: {
    pathContents: pathIntroduce('1').pathContents
  },
  render: (args) => (
    <section className='flex w-full flex-col items-center gap-[1.5rem]'>
      <Flex className='gap-[1.5rem]'>
        <CurriculumBar pathContents={args.pathContents} />
        <Flex
          direction={'column'}
          className='gap-[1.5rem]'>
          {args.pathContents.map((content, index) => (
            <Flex
              key={index}
              direction={'column'}
              className='gap-[0.25rem]'>
              <Typography
                variant='heading-2'
                color='alternative'>
                Part {index + 1}
              </Typography>
              <Typography
                variant='heading-2'
                fontWeight={'semibold'}>
                {content.title}
              </Typography>
              {content.path.map((path, index) => (
                <Flex
                  key={index}
                  asChild
                  align={'center'}
                  className='gap-[0.5rem]'>
                  <Typography variant='body-1-normal'>
                    <Icon name={path.type === 'page' ? 'FileOutlined' : 'PlayCircleOutlined'} />
                    {path.title}
                  </Typography>
                </Flex>
              ))}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </section>
  )
}
