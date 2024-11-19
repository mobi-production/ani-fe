import { Slot } from '@radix-ui/react-slot'
import { ComponentProps } from 'react'

type DropdownMenuProps = ComponentProps<'div'>

function DropdownMenu({ ...props }: DropdownMenuProps) {
  return <div {...props} />
}

type TriggerProps = ComponentProps<'button'> & {
  asChild?: boolean
}

function Trigger({ asChild, children, ...props }: TriggerProps) {
  const Component = asChild ? Slot : 'button'
  return <Component {...props}>{children}</Component>
}

type MenuContentProps = ComponentProps<'div'>

function MenuContent({ children, ...props }: MenuContentProps) {
  return <div {...props}>{children}</div>
}

type MenuItemProps = ComponentProps<'div'> & {
  value: string
  onSelect?: () => void
}

// 다음처럼 값에 접근 가능
// function handleSelect(event: React.MouseEvent<HTMLDivElement>) {
//   console.log(event.currentTarget.dataset.value);
// }
function MenuItem({ value, onSelect, children, ...props }: MenuItemProps) {
  return (
    <div
      role='menuitem'
      data-value={value}
      onClick={onSelect}
      {...props}>
      {children}
    </div>
  )
}

DropdownMenu.Trigger = Trigger
DropdownMenu.MenuContent = MenuContent
DropdownMenu.MenuItem = MenuItem

export default DropdownMenu
