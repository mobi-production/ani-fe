import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from '@repo/ui/server'
import LoginModal from '.'

const meta = {
  title: 'Feature/LoginModal',
  component: LoginModal,
  parameters: {
    layout: 'center',
    docs: {
      description: {
        component: '로그인을 위한 모달 컴포넌트입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof LoginModal>

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
        className='w-full'>
        <Story />
      </Flex>
    )
  ]
}
