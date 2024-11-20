import type { Meta, StoryObj } from '@storybook/react'
import { Inner } from '.'
import { mainData } from '@/__mock__/data/main'

const meta = {
  title: 'Page/MainPage',
  component: Inner,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '20px',
          boxSizing: 'border-box',
          width: '110vw'
        }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Inner>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    data: mainData
  }
}
