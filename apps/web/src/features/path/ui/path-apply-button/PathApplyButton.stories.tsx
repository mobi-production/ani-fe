import type { Meta, StoryObj } from '@storybook/react'
import PathApplyButton from '.'
import { Flex } from '@repo/ui/server'

const meta = {
  title: 'Feature/PathApplyButton',
  component: PathApplyButton,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '패스 상세 페이지내에서 로그인, 지원 상태에 따라 다르게 보여지는 버튼'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof PathApplyButton>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    pathId: '1'
  },
  decorators: [
    (Story) => (
      <Flex
        align={'center'}
        justify={'center'}
        className='h-[20rem] w-full'>
        <div className='w-[30rem]'>
          <Story />
        </div>
      </Flex>
    )
  ]
}
