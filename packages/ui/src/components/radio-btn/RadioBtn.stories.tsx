import type { Meta, StoryObj } from '@storybook/react'

import RadioBtn from '.'

const meta = {
  title: 'MDS/RadioBtn',
  component: RadioBtn,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof RadioBtn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: false
  }
}

export const Active: Story = {
  args: {
    checked: true
  }
}
