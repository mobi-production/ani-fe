import type { Meta, StoryObj } from '@storybook/react'
import { pathIntroduceMock } from '@/__mock__/data/path'
import { PathIntroducePage } from '.'

const meta = {
  title: 'Page/Path/IntroducePage',
  component: PathIntroducePage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof PathIntroducePage>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    data: pathIntroduceMock('1')
  }
}
