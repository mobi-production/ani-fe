import type { Meta, StoryObj } from '@storybook/react'
import ProgressBar from '@ui/components/progress-bar'

const meta = {
  title: 'MDS/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 100 } },
    showPercentage: {
      control: 'boolean'
    }
  },
  decorators: (Story) => (
    <div className='px-40 py-10'>
      <Story />
    </div>
  )
} satisfies Meta<typeof ProgressBar>

export default meta
type Story = StoryObj<typeof meta>

export const ProgressBarWithoutPercentage: Story = {
  args: {
    value: 80,
    showPercentage: false
  }
}

export const ProgressBarWithPercentage: Story = {
  args: {
    value: 40,
    showPercentage: true
  }
}
