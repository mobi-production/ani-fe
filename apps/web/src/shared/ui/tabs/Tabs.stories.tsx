import type { Meta, StoryObj } from '@storybook/react'
import Tabs from '.'
import Link from 'next/link'

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '탭에 해당하는 콘텐츠를 보여줄 수 있는 컴포넌트 입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args) => (
    <div className='flex items-center justify-center py-[5rem]'>
      <Tabs
        defaultValue='tab1'
        lazyMount
        {...args}>
        <Tabs.List {...args}>
          <Tabs.Trigger value='tab1'>Tab 1</Tabs.Trigger>
          <Tabs.Trigger value='tab2'>Tab 2</Tabs.Trigger>
          <Tabs.Trigger
            asChild
            value='tab3'>
            <Link href='#'>Tab 3</Link>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value='tab1'>1. Tab1 내용</Tabs.Content>
        <Tabs.Content value='tab2'>2. Tab2 내용</Tabs.Content>
        <Tabs.Content value='tab3'>3. Tab3 내용 + 링크 이동</Tabs.Content>
      </Tabs>
    </div>
  )
}
