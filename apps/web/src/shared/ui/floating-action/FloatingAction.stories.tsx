import type { Meta, StoryObj } from '@storybook/react'
import FloatingAction from '.'

const meta = {
  title: 'Shared/FloatingAction',
  component: FloatingAction,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof FloatingAction>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args) => {
    return (
      <div className='h-20 w-20'>
        <FloatingAction {...args} />
      </div>
    )
  }
}
