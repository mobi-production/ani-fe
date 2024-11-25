import type { Meta, StoryObj } from '@storybook/react'
import FilterAnsweredQuestions from '.'
import { Flex } from '@repo/ui/server'

const meta = {
  title: 'Feature/FilterAnsweredQuestions',
  component: FilterAnsweredQuestions,
  parameters: {
    layout: 'center',
    docs: {
      description: {
        component: '답변된 질문만 모아볼 수 있게 하는 체크박스 컴포넌트입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof FilterAnsweredQuestions>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  render: () => (
    <Flex
      className='m-auto h-10 w-[20.938rem]'
      justify={'center'}
      direction={'column'}>
      <FilterAnsweredQuestions />
    </Flex>
  )
}
