import type { Meta, StoryObj } from '@storybook/react'
import PaginationControls from '.'
import DropdownMenu from '.'

const meta = {
  title: 'shared/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '드롭다운 메뉴 컴포넌트 입니다.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenu.Trigger>Trigger!!</DropdownMenu.Trigger>
      <DropdownMenu.MenuContent>
        <DropdownMenu.MenuItem
          value='MenuItem 1'
          onSelect={() => {}}>
          MenuItem 1
        </DropdownMenu.MenuItem>
        <DropdownMenu.MenuItem
          value='MenuItem 2'
          onSelect={() => {}}>
          MenuItem 2
        </DropdownMenu.MenuItem>
        <DropdownMenu.MenuItem
          value='MenuItem 3'
          onSelect={() => {}}>
          MenuItem 3
        </DropdownMenu.MenuItem>
      </DropdownMenu.MenuContent>
    </DropdownMenu>
  )
}
