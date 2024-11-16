import type { Meta, StoryObj } from '@storybook/react'
import IntroducePage from '.'
import { pathIntroduce } from '@/__mock__/data/path'

const meta = {
  title: 'Page/IntroducePage',
  component: IntroducePage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof IntroducePage>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    isLoggedIn: true,
    data: pathIntroduce
  }
}
