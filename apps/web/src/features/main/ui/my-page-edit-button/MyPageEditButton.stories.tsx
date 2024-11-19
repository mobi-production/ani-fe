import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from '@repo/ui/server'
import MyPageEditButton from '.'

const meta = {
  title: 'Feature/MyPageEditButton',
  component: MyPageEditButton,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '마이페이지 내 상태 정보를 변경하는 모달을 오픈하는 버튼'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof MyPageEditButton>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
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
