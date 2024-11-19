import type { Meta, StoryObj } from '@storybook/react'
import DropdownMenu from '.'
import { OutlinedButton, Typography } from '@repo/ui/server'

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
    <div className='flex items-center justify-center pb-[15rem] pt-[5rem]'>
      <DropdownMenu {...args}>
        <DropdownMenu.Trigger>
          <OutlinedButton>Trigger!!</OutlinedButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.MenuContent triggerHeight='3.5rem'>
          <DropdownMenu.MenuItem
            value='MenuItem 1'
            onSelect={(e) => {
              console.log(e.currentTarget.dataset.value)
            }}>
            <Typography
              variant='body-2-normal'
              fontWeight='medium'>
              MenuItem 1
            </Typography>
          </DropdownMenu.MenuItem>
          <DropdownMenu.MenuItem value='MenuItem 2'>
            <Typography
              variant='body-2-normal'
              fontWeight='medium'>
              MenuItem 2
            </Typography>
          </DropdownMenu.MenuItem>
          <DropdownMenu.MenuItem value='MenuItem 3'>
            <Typography
              variant='body-2-normal'
              fontWeight='medium'>
              MenuItem 3
            </Typography>
          </DropdownMenu.MenuItem>
        </DropdownMenu.MenuContent>
      </DropdownMenu>
    </div>
  )
}
