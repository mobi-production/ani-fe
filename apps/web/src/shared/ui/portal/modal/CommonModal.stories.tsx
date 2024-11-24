import type { Meta, StoryObj } from '@storybook/react'
import CommonModal, { ICON_THEME } from './CommonModal'
import React from 'react'

const meta = {
  title: 'Shared/Portal/CommonModal',
  component: CommonModal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ANI 공용 모달 레이아웃입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof CommonModal>

export default meta
type Story = StoryObj<typeof meta>

export const SuccessConfirm: Story = {
  args: {
    isOpen: true,
    onClose: () => {}
  },
  render: (args) => (
    <CommonModal {...args}>
      <CommonModal.icon iconTheme={ICON_THEME.SUCCESS} />
      <CommonModal.title>정답이에요!</CommonModal.title>
      <CommonModal.buttonSet
        primaryText='다음 문제'
        subText='해설 보기'
        onSubmit={() => {}}
        onCancel={() => {}}
      />
    </CommonModal>
  )
}

export const ErrorConfirm: Story = {
  args: {
    isOpen: true,
    onClose: () => {}
  },
  render: (args) => (
    <CommonModal {...args}>
      <CommonModal.icon iconTheme={ICON_THEME.ERROR} />
      <CommonModal.title>정말 삭제하시겠어요?</CommonModal.title>
      <CommonModal.buttonSet
        primaryText='취소하기'
        subText='삭제하기'
        onSubmit={() => {}}
        onCancel={() => {}}
      />
    </CommonModal>
  )
}

export const NormalConfirm: Story = {
  args: {
    isOpen: true,
    onClose: () => {}
  },
  render: (args) => (
    <CommonModal {...args}>
      <CommonModal.icon
        iconTheme={ICON_THEME.NORMAL}
        iconName='RocketOutlined'
      />
      <CommonModal.title>과제를 제출하시겠어요?</CommonModal.title>
      <CommonModal.description>제출 후에는 수정이 불가능합니다.</CommonModal.description>
      <CommonModal.buttonSet
        primaryText='제출하기'
        subText='취소하기'
        onSubmit={() => {}}
        onCancel={() => {}}
      />
    </CommonModal>
  )
}

export const SuccessAlert: Story = {
  args: {
    isOpen: true,
    onClose: () => {}
  },
  render: (args) => (
    <CommonModal {...args}>
      <CommonModal.icon iconTheme={ICON_THEME.SUCCESS} />
      <CommonModal.title>준비가 완료됐어요</CommonModal.title>
      <CommonModal.button buttonText='과제하러 가기' />
    </CommonModal>
  )
}

export const ErrorAlert: Story = {
  args: {
    isOpen: true,
    onClose: () => {}
  },
  render: (args) => (
    <CommonModal {...args}>
      <CommonModal.icon iconTheme={ICON_THEME.ERROR} />
      <CommonModal.title>오류가 발생했어요</CommonModal.title>
      <CommonModal.description>잠시 후에 다시 시도해주세요</CommonModal.description>
      <CommonModal.button
        buttonText='확인'
        onClick={() => {}}
      />
    </CommonModal>
  )
}

export const NormalAlert: Story = {
  args: {
    isOpen: true,
    onClose: () => {}
  },
  render: (args) => (
    <CommonModal {...args}>
      <CommonModal.icon
        iconTheme={ICON_THEME.NORMAL}
        iconName='LikeOutlined'
      />
      <CommonModal.title>멘토에게 요청이 전달되었어요</CommonModal.title>
      <CommonModal.description>답변까지 시간이 소요될 수 있어요</CommonModal.description>
      <CommonModal.button
        buttonText='확인'
        onClick={() => {}}
      />
    </CommonModal>
  )
}
