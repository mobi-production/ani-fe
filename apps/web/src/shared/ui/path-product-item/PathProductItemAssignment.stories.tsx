import type { Meta, StoryObj } from '@storybook/react'
import PathProductItemAssignment from './PathProductItemAssignment'

const meta = {
  title: 'ProductItem/Assignment',
  component: PathProductItemAssignment,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '패스 컨텐츠를 보여줄 수 있는 Item 컴포넌트 입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof PathProductItemAssignment>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args) => (
    <PathProductItemAssignment {...args}>
      <PathProductItemAssignment.LeftSection
        src='/avif/placeholder.avif'
        alt='placeholder image'
        pathName='HTML & CSS'
        assignmentName='과제 이름 1줄까지 과제 이름 1줄까지'
        endDate='~ 2024.10.06'
      />
      <PathProductItemAssignment.StatusBadge badgeType='SUBMITTED' />
    </PathProductItemAssignment>
  )
}
