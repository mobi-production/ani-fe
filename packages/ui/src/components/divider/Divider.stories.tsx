import type { Meta, StoryObj } from '@storybook/react'

import Divider from '.'

const meta = {
  title: 'MDS/Divider',
  component: Divider,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {},
  render: (args) => (
    <div className='w-[200px] bg-background-alternative p-4'>
      <Divider {...args} />
    </div>
  )
}
