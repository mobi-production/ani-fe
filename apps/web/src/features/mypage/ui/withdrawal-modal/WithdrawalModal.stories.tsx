import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from '@repo/ui/server'
import WithdrawalModal from '.'

const meta = {
  title: 'Feature/WithdrawalModal',
  component: WithdrawalModal,
  parameters: {
    layout: 'center',
    docs: {
      description: {
        component: '회원 탈퇴 확인을 위한 모달입니다'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof WithdrawalModal>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    isOpen: true,
    onClose: () => {}
  },
  decorators: [
    (Story) => (
      <Flex
        align={'center'}
        justify={'center'}
        className='h-[30rem] w-full'>
        <Story />
      </Flex>
    )
  ]
}
