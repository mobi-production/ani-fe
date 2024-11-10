import type { Meta, StoryObj } from '@storybook/react'

import PassProductItemBasic from './PassProductItemBasic'

const meta = {
  title: 'Molecule/PassProductItem/PassProductItemBasic',
  component: PassProductItemBasic,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '패스 컨텐츠를 보여줄 수 있는 Item 컴포넌트 입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof PassProductItemBasic>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args) => (
    <PassProductItemBasic {...args}>
      <PassProductItemBasic.Image
        src='/avif/placeholder.avif'
        alt='Placeholder Image'
      />
      <PassProductItemBasic.BadgeList
        level={1}
        category='카테고리'
        badgeType='IN_PROGRESS'
      />
      <PassProductItemBasic.TextContentList
        name='패스 이름'
        period='2024.09.06 ~ 2024.10.06'
      />
    </PassProductItemBasic>
  )
}
