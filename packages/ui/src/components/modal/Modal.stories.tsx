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

export const Primary: Story = {}
