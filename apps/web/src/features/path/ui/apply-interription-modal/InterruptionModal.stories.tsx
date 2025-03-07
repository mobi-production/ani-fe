import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SolidButton } from '@repo/ui/server'
import { Icon } from '@repo/ui/client'
import { wrapWithAppRouterContext } from '@/shared/utils'
import PathInterruptionModal from '.'

const meta = {
  title: 'Feature/Path/InterruptionModal',
  component: PathInterruptionModal,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },
  tags: ['autodocs'],
  decorators: [wrapWithAppRouterContext]
} satisfies Meta<typeof PathInterruptionModal>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    isModalOpen: false,
    handleModalClose: () => {},
    pathId: '1'
  },
  render: (args) => {
    const [isModalOpen, setIsModalOpen] = useState(args.isModalOpen)
    const handleModalOpen = () => {
      setIsModalOpen(true)
    }
    const handleModalClose = () => {
      args.handleModalClose()
      setIsModalOpen(false)
    }
    return (
      <>
        <SolidButton
          onClick={handleModalOpen}
          variant='secondary'
          fullWidth
          rightIcon={<Icon name='RightOutlined' />}>
          신청 취소하기
        </SolidButton>
        {isModalOpen ? (
          <PathInterruptionModal
            isModalOpen={isModalOpen}
            handleModalClose={handleModalClose}
            pathId={args.pathId}
          />
        ) : null}
      </>
    )
  }
}
