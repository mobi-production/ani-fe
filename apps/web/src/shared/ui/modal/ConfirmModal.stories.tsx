import type { Meta, StoryObj } from '@storybook/react'
import ConfirmModal, { ICON_THEME } from './ConfirmModal'

const meta = {
  title: 'Shared/Modal/ConfirmModal',
  component: ConfirmModal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '확인 / 취소 버튼이 있는 공용 모달 레이아웃입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof ConfirmModal>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    isOpen: true,
    onClose: () => {}
  },
  render: (args) => (
    <ConfirmModal {...args}>
      <ConfirmModal.icon iconTheme={ICON_THEME.SUCCESS} />
      <ConfirmModal.title>정답이에요!</ConfirmModal.title>
      <ConfirmModal.buttons
        primaryText='다음 문제'
        subText='해설 보기'
        onSubmit={() => {}}
        onCancel={() => {}}
      />
    </ConfirmModal>
  )
}

export const Error: Story = {
  args: {
    isOpen: true,
    onClose: () => {}
  },
  render: (args) => (
    <ConfirmModal {...args}>
      <ConfirmModal.icon iconTheme={ICON_THEME.ERROR} />
      <ConfirmModal.title>정말 삭제하시겠어요?</ConfirmModal.title>
      <ConfirmModal.buttons
        primaryText='취소하기'
        subText='삭제하기'
        onSubmit={() => {}}
        onCancel={() => {}}
      />
    </ConfirmModal>
  )
}

export const Normal: Story = {
  args: {
    isOpen: true,
    onClose: () => {}
  },
  render: (args) => (
    <ConfirmModal {...args}>
      <ConfirmModal.icon
        iconTheme={ICON_THEME.NORMAL}
        iconName='RocketOutlined'
      />
      <ConfirmModal.title>과제를 제출하시겠어요?</ConfirmModal.title>
      <ConfirmModal.description>제출 후에는 수정이 불가능합니다.</ConfirmModal.description>
      <ConfirmModal.buttons
        primaryText='제출하기'
        subText='취소하기'
        onSubmit={() => {}}
        onCancel={() => {}}
      />
    </ConfirmModal>
  )
}
