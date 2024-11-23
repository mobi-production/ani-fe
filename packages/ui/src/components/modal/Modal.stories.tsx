import type { Meta, StoryObj } from '@storybook/react'

import Modal from '.'

const meta = {
  title: 'MDS/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    withBackDrop: true,
    withCloseButton: true,
    isOpen: true,
    onClose: () => {}
  },
  render: (args) => (
    <Modal {...args}>
      <div className='w-[20rem]'>모달 내부 컨텐츠</div>
    </Modal>
  )
}

export const Simple: Story = {
  args: {
    withBackDrop: false,
    withCloseButton: false,
    isOpen: true,
    onClose: () => {}
  },
  parameters: {
    backgrounds: {
      default: 'gray-background',
      values: [{ name: 'gray-background', value: '#f0f0f0' }]
    }
  },
  render: (args) => (
    <Modal {...args}>
      <div className='w-[20rem]'>모달 내부 컨텐츠</div>
    </Modal>
  )
}
