import type { Meta, StoryObj } from '@storybook/react'
import PaginationControls from '.'

const meta = {
  title: 'shared/PaginationControls',
  component: PaginationControls,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '페이지네이션 컨트롤 컴포넌트 입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof PaginationControls>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => {
    return (
      <PaginationControls>
        <PaginationControls.LeftButton isActive={false} />
        <PaginationControls.RightButton isActive={true} />
      </PaginationControls>
    )
  }
}
