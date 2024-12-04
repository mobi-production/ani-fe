import type { Meta, StoryObj } from '@storybook/react'
import { Flex, Typography } from '@repo/ui/server'
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
    onCloseEditQuestionModal: () => {}
  },
  render: (args) => {
    return <EditQuestionModal {...args} />
  }
}
