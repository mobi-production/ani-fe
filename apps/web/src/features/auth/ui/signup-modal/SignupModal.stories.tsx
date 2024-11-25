import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from '@repo/ui/server'
import SignupModal from '.'

const meta = {
  title: 'Feature/SignupModal',
  component: SignupModal,
  parameters: {
    layout: 'center',
    docs: {
      description: {
        component: '마이페이지 내 상태 정보를 변경하는 모달을 오픈하는 버튼'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof SignupModal>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {},
  decorators: [
    (Story) => (
      <Flex
        align={'center'}
        justify={'center'}
        className='w-full'>
        <Story />
      </Flex>
    )
  ]
}
