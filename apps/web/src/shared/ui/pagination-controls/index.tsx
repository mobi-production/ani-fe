import { Icon } from '@repo/ui/client'
import { Flex } from '@repo/ui/server'
import { ComponentProps } from 'react'

type PaginationControlsProps = ComponentProps<'div'>

function PaginationControls({ ...props }: PaginationControlsProps) {
  return (
    <Flex
      direction='row'
      className='gap-[0.5rem]'
      {...props}
    />
  )
}

type LeftButtonProps = ComponentProps<'button'> & {
  isActive?: boolean
}

function LeftButton({ isActive = true, ...props }: LeftButtonProps) {
  return (
    <button
      disabled={!isActive}
      className={`flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-[4px] border border-solid ${
        isActive ? 'border-line-normal' : 'border-neutral-99'
      }`}
      {...props}>
      <Icon
        name='LeftOutlined'
        color={isActive ? '' : 'neutral-90'}
      />
    </button>
  )
}

type RightButtonProps = ComponentProps<'button'> & {
  isActive?: boolean
}

function RightButton({ isActive, ...props }: RightButtonProps) {
  return (
    <button
      disabled={!isActive}
      className={`flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-[4px] border border-solid ${
        isActive ? 'border-line-normal' : 'border-neutral-99'
      }`}
      {...props}>
      <Icon
        name='RightOutlined'
        color={isActive ? '' : 'neutral-90'}
      />
    </button>
  )
}

PaginationControls.LeftButton = LeftButton
PaginationControls.RightButton = RightButton

export default PaginationControls
