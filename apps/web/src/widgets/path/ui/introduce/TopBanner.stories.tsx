import type { Meta, StoryObj } from '@storybook/react'
import { pathIntroduceMock } from '@/__mock__/data/path'
import PathIntroduceTopBanner from './TopBanner'

const meta = {
  title: 'Widget/Path/IntroduceTopBanner',
  component: PathIntroduceTopBanner,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof PathIntroduceTopBanner>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    thumbnail: pathIntroduceMock('1').path.thumbnail,
    title: pathIntroduceMock('1').path.title,
    description: pathIntroduceMock('1').path.description,
    isSubscribed: pathIntroduceMock('1').isSubscribed,
    pathId: pathIntroduceMock('1').pathId
  }
}
