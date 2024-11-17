import type { Meta, StoryObj } from '@storybook/react'
import MainPage from '.'
import { mainData } from '@/__mock__/data/main'

const meta = {
  title: 'Page/MainPage',
  component: MainPage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    data: mainData
  }
}
