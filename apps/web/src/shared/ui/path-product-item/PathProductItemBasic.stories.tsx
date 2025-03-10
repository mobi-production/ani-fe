import type { Meta, StoryObj } from '@storybook/react'
import PathProductItemBasic from './PathProductItemBasic'

const meta = {
  title: 'Shared/PathProductItem/Basic',
  component: PathProductItemBasic,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '패스 컨텐츠를 보여줄 수 있는 Item 컴포넌트 입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof PathProductItemBasic>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args) => (
    <PathProductItemBasic {...args}>
      <PathProductItemBasic.Image
        src='/avif/placeholder.avif'
        alt='Placeholder Image'
        isApplied
      />
      <PathProductItemBasic.BadgeList
        level={1}
        category='카테고리'
        badgeType='NOT_COMPLETE'
      />
      <PathProductItemBasic.TextContentList
        name='패스 이름 2줄까지 패스 이름 2줄까지 패스 이름 2줄까지 패스 이름 2줄까지 패스 이름 2줄까지 패스 이름 2줄까지'
        applyPeriod='2024.09.06 ~ 2024.10.06'
        progressPeriod='2024.10.07 ~ 2024.12.07'
      />
    </PathProductItemBasic>
  )
}
