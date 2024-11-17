import type { Meta, StoryObj } from '@storybook/react'
import { Inner } from '.'
import { pathIntroduce } from '@/__mock__/data/path'

const meta = {
  title: 'Page/IntroducePage',
  component: Inner,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Inner>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    isLoggedIn: true,
    data: pathIntroduce('1')
  }
}
