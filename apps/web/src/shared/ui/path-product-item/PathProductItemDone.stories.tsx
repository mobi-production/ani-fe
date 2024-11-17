import type { Meta, StoryObj } from '@storybook/react'

import PathProductItemDone from './PathProductItemDone'

const meta = {
  title: 'Shared/PathProductItem/Done',
  component: PathProductItemDone,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '완료된 패스의 컨텐츠를 보여줄 수 있는 Item 컴포넌트 입니다.'
      }
    }
  },
  tags: ['autodocs'],
  decorators: (Story) => (
    <div className='px-40 py-10'>
      <Story />
    </div>
  )
} satisfies Meta<typeof PathProductItemDone>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args) => (
    <div className='mx-auto w-full max-w-[22.75rem]'>
      <PathProductItemDone>
        <PathProductItemDone.ContentSection
          level={1}
          category='카테고리'
          title='패스 이름 2줄까지 패스 이름 2줄까지 패스 이름 2줄까지 패스 이름 2줄까지 패스 이름'
          period='2024.01.01 ~ 2024.01.01'
        />
        <PathProductItemDone.FooterSection onClick={() => {}} />
      </PathProductItemDone>
    </div>
  )
}
