import { Slot } from '@radix-ui/react-slot'
import {
  ComponentProps,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'

export type DropdownMenuContextProps = {
  isOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
  triggerRef: React.RefObject<HTMLButtonElement>
  menuRef: React.RefObject<HTMLDivElement>
}

const DropdownMenuContext = createContext<DropdownMenuContextProps | undefined>(undefined)

const DropdownMenuProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        closeMenu()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <DropdownMenuContext.Provider value={{ isOpen, toggleMenu, closeMenu, triggerRef, menuRef }}>
      {children}
    </DropdownMenuContext.Provider>
  )
}

const useDropdownMenu = (): DropdownMenuContextProps => {
  const context = useContext(DropdownMenuContext)
  if (!context) {
    throw new Error('useDropdownMenu must be used within a DropdownMenuProvider')
  }
  return context
}

type DropdownMenuProps = ComponentProps<'div'>

function DropdownMenu({ ...props }: DropdownMenuProps) {
  return (
    <DropdownMenuProvider>
      <div
        className='relative'
        {...props}
      />
    </DropdownMenuProvider>
  )
}

type TriggerProps = ComponentProps<'button'> & {
  asChild?: boolean
}

function Trigger({ asChild, children, ...props }: TriggerProps) {
  const Component = asChild ? Slot : 'button'
  const { toggleMenu, triggerRef, isOpen } = useDropdownMenu()

  return (
    <Component
      ref={triggerRef}
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation()
        toggleMenu()
      }}
      aria-haspopup='menu'
      aria-expanded={isOpen}
      {...props}>
      {children}
    </Component>
  )
}

type MenuContentProps = ComponentProps<'div'> & {
  triggerHeight?: string
}

function MenuContent({ triggerHeight = '2rem', children, ...props }: MenuContentProps) {
  const { isOpen, menuRef } = useDropdownMenu()

  if (!isOpen) return null
  return (
    <div
      className={`absolute flex w-auto flex-col gap-4 rounded-[4px] border border-solid border-line-normal bg-white p-[20px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.05)]`}
      style={{ top: triggerHeight }}
      ref={menuRef}
      role='menu'
      {...props}>
      {children}
    </div>
  )
}

type MenuItemProps = ComponentProps<'button'> & {
  value: string
  onValueSelect?: (value: string) => void
}

function MenuItem({ value, onValueSelect, children, ...props }: MenuItemProps) {
  const { closeMenu } = useDropdownMenu()

  const handleClick = () => {
    if (onValueSelect) onValueSelect(value)
    closeMenu()
  }

  return (
    <button
      className='w-full whitespace-nowrap text-left'
      role='menuitem'
      data-value={value}
      onClick={handleClick}
      onMouseDown={(e) => e.preventDefault()}
      {...props}>
      {children}
    </button>
  )
}

DropdownMenu.Trigger = Trigger
DropdownMenu.MenuContent = MenuContent
DropdownMenu.MenuItem = MenuItem

export default DropdownMenu
