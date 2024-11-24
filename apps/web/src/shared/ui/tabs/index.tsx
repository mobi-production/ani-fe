import { Slot } from '@radix-ui/react-slot'
import { Flex, Typography } from '@repo/ui/server'
import cn from '@repo/util/cn'
import React, { ComponentProps, createContext, useCallback, useContext, useState } from 'react'

type TabsContextType = {
  value: string
  onChange: (value: string) => void
  lazyMount?: boolean
}

const TabsContext = createContext<TabsContextType | null>(null)

type TabsProps = ComponentProps<'div'> & {
  lazyMount?: boolean
  unmountOnExit?: boolean
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
}

function Tabs({
  lazyMount = false,
  defaultValue,
  value: controlledValue,
  onChange: controlledOnChange,
  children,
  ...props
}: TabsProps) {
  const [value, setValue] = useState(defaultValue || '')

  const isControlled = controlledValue !== undefined && controlledOnChange !== undefined

  const currentValue = isControlled ? controlledValue : value
  const handleChange = isControlled ? controlledOnChange : setValue

  return (
    <TabsContext.Provider value={{ value: currentValue, onChange: handleChange, lazyMount }}>
      <Flex
        className='w-full'
        direction='column'
        gap={32}
        {...props}>
        {children}
      </Flex>
    </TabsContext.Provider>
  )
}

type ListProps = ComponentProps<'div'>

function List({ className, ...props }: ListProps) {
  return (
    <Flex
      className={cn('h-[3.75rem] border-b border-[#17171715]', className)}
      gap={48}
      {...props}
    />
  )
}

type TriggerProps = ComponentProps<'button'> & {
  asChild?: boolean
  disabled?: boolean
  value: string
}

function Trigger({
  asChild,
  disabled = false,
  value,
  className,
  children,
  ...props
}: TriggerProps) {
  const context = useContext(TabsContext)

  if (!context) {
    throw new Error('Trigger 컴포넌트는 Tabs 컴포넌트 내에서 사용되어야 합니다.')
  }

  const { value: currentValue, onChange } = context

  const handleClick = useCallback(() => {
    if (!disabled) {
      onChange(value)
    }
  }, [disabled, onChange, value])

  const ariaSelected = currentValue === value

  const Component = asChild ? Slot : 'button'

  return (
    <Component
      {...props}
      className={cn(
        `flex h-[3.75rem] items-center justify-center border-b-2 border-transparent px-[0.5rem] transition-colors duration-300 ease-in-out ${
          ariaSelected ? 'border-neutral-10 text-neutral-10' : 'text-neutral-90'
        }`,
        className
      )}
      onClick={handleClick}
      aria-selected={ariaSelected}
      role='tab'
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}>
      <Typography
        color='inherit'
        variant='heading-1'
        fontWeight='semibold'>
        {children}
      </Typography>
    </Component>
  )
}

type ContentProps = ComponentProps<'div'> & {
  value: string
}

function Content({ value, children, ...props }: ContentProps) {
  const context = useContext(TabsContext)

  if (!context) {
    throw new Error('Content 컴포넌트는 Tabs 컴포넌트 내에서 사용되어야 합니다.')
  }

  const { value: currentValue, lazyMount } = context

  const isActive = currentValue === value

  if (!isActive && lazyMount) {
    return null
  }

  return (
    <div
      {...props}
      hidden={!isActive}
      role='tabpanel'>
      {children}
    </div>
  )
}

Tabs.List = List
Tabs.Trigger = Trigger
Tabs.Content = Content

export default Tabs
