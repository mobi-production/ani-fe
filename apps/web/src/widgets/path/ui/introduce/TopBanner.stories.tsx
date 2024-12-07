import type { Meta, StoryObj } from '@storybook/react'
import { pathIntroduceMock } from '@/__mock__/data/path'
import PathIntroduceTopBanner from './TopBanner'
import FullScreenLayout from '@/shared/ui/layout/full-screen-layout'
import { wrapWithAppRouterContext } from '@/shared/utils'

const meta = {
  title: 'Widget/Path/IntroduceTopBanner',
  component: PathIntroduceTopBanner,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/path/3/introduce'
      }
    }
  },
  tags: ['autodocs'],
  decorators: [wrapWithAppRouterContext]
} satisfies Meta<typeof PathIntroduceTopBanner>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    thumbnail: pathIntroduceMock('1').path.thumbnail,
    title: pathIntroduceMock('1').path.title,
    description: pathIntroduceMock('1').path.description,
    isSubscribed: pathIntroduceMock('1').isSubscribed,
    pathId: pathIntroduceMock('1').pathId.toString()
  },
  render: (args) => {
    return (
      <FullScreenLayout>
        <PathIntroduceTopBanner {...args} />
      </FullScreenLayout>
    )
  }
}
