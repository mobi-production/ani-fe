import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from '@repo/ui/server'
import ProfileEditModal from '.'
import { myPageProfileData } from '@/__mock__/data/mypage'

const meta = {
  title: 'Feature/ProfileEditModal',
  component: ProfileEditModal,
  parameters: {
    layout: 'center',
    docs: {
      description: {
        component: '마이페이지 내 상태 정보를 변경하는 모달입니다'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof ProfileEditModal>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    data: myPageProfileData
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
