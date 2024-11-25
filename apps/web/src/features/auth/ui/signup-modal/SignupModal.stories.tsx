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
        component: '회원가입을 위한 모달 컴포넌트입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof SignupModal>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    onClick: () => {}
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
