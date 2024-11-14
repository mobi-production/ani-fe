import type { Meta, StoryObj } from '@storybook/react'
import IntroducePage from '.'

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

export const Preview: Story = {}
