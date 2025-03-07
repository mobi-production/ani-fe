import type { Meta, StoryObj } from '@storybook/react'
import { Inner } from '.'
import { mainData } from '@/__mock__/data/main'

const meta = {
  title: 'Page/Main/MainPage',
  component: Inner,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Inner>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    data: mainData
  }
}
