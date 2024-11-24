import type { Meta, StoryObj } from '@storybook/react'

import Pagination from '.'

const meta = {
  title: 'MDS/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '페이지네이션 컴포넌트 입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    totalItems: 15,
    itemsPerPage: 5
  },
  render: (args) => (
    <div className='flex items-center justify-center pb-[15rem] pt-[5rem]'>
      <Pagination
        className='gap-[0.75rem]'
        {...args}>
        <Pagination.Prev />
        <Pagination.PageButtonList />
        <Pagination.Next />
      </Pagination>
    </div>
  )
}
