import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import Check from '.'

const meta = {
  title: 'MDS/Check',
  component: Check,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Check>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: false
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked)
    return (
      <Check
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  }
}

export const Active: Story = {
  args: {
    checked: true
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked)
    return (
      <Check
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  }
}
