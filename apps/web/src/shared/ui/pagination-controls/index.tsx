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

function LeftButton({ isActive, ...props }: LeftButtonProps) {
  return (
    <button
      disabled={!isActive}
      className={`flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-[4px] border border-solid ${
        isActive ? 'border-line-normal text-neutral-10' : 'border-neutral-99 text-neutral-90'
      }`}
      {...props}>
      <Icon name='LeftOutlined' />
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
        isActive ? 'border-line-normal text-neutral-10' : 'border-neutral-99 text-neutral-90'
      }`}
      {...props}>
      <Icon name='RightOutlined' />
    </button>
  )
}

PaginationControls.LeftButton = LeftButton
PaginationControls.RightButton = RightButton

export default PaginationControls
