import type { Meta, StoryObj } from '@storybook/react'
import CurriculumBar from '.'
import { pathIntroduce } from '@/__mock__/data/path'
import Flex from '@repo/ui/components/flex'
import CurriculumContent from '../curriculum-content'

const meta = {
  title: 'Widget/Path/CurriculumBar',
  component: CurriculumBar,
  parameters: {
    layout: 'centered',
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
        <CurriculumContent pathContents={args.pathContents} />
      </Flex>
    </section>
  )
}
