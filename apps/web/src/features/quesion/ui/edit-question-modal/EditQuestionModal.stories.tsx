import type { Meta, StoryObj } from '@storybook/react'
import { Flex, Modal, Typography } from '@repo/ui/server'
import EditQuestionModal from '.'

const meta = {
  title: 'Feature/Question/EditQuestionModal',
  component: EditQuestionModal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '질문 수정 및 삭제를 위한 모달 컴포넌트입니다'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof EditQuestionModal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    isEditQuestionModalOpen: true,
    setIsEditQuestionModalOpen: () => {}
  },
  render: (args) => {
    const onCloseModal = () => args.setIsEditQuestionModalOpen(false)
    return (
      <div className='flex h-screen items-center justify-center'>
        <Modal
          className='rounded p-4'
          withCloseButton={false}
          withBackDrop
          isOpen={args.isEditQuestionModalOpen}
          onClose={onCloseModal}>
          <Flex
            direction={'column'}
            gap={8}>
            <Typography
              variant={'caption-1'}
              className='cursor-pointer'>
              수정하기
            </Typography>
            <Typography
              variant={'caption-1'}
              className='cursor-pointer'>
              삭제하기
            </Typography>
          </Flex>
        </Modal>
      </div>
    )
  }
}
