import type { Meta, StoryObj } from '@storybook/react'

import PathProductItemProgress from './PathProductItemProgress'

const meta = {
  title: 'Shared/PathProductItem/Progress',
  component: PathProductItemProgress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '패스 컨텐츠와 진행도를 보여줄 수 있는 Item 컴포넌트 입니다.'
      }
    }
  },
  tags: ['autodocs'],
  decorators: (Story) => (
    <div className='px-40 py-10'>
      <Story />
    </div>
  )
} satisfies Meta<typeof PathProductItemProgress>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args) => (
    <div className='mx-auto w-full max-w-[22.75rem]'>
      <PathProductItemProgress {...args}>
        <PathProductItemProgress.Image
          src='/avif/placeholder.avif'
          alt='Placeholder Image'
        />
        <PathProductItemProgress.RightSection
          badgeType='NOT_COMPLETE'
          level={1}
          category='카테고리'
          name='패스 이름 2줄까지 패스 이름 2줄까지 패스 이름 2줄까지 패스 이름 2줄까지 패스 이름'
          value={80}
        />
      </PathProductItemProgress>
    </div>
  )
}
