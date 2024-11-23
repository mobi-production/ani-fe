import type { Meta, StoryObj } from '@storybook/react'
import Pagination from '.'
import { action } from '@storybook/addon-actions'
import { useState } from 'react'

const meta = {
  title: 'shared/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '페이지네이션 컴포넌트 입니다.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description: '현재 선택된 페이지 번호',
      defaultValue: 1
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: '전체 페이지 수',
      defaultValue: 10
    }
  }
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: action('onPageChange')
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage)

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  }
}
