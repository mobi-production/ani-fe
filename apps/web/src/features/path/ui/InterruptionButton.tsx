import { Icon } from '@repo/ui/client'

import { useState } from 'react'
import PathInterruptionModal from './apply-interription-modal'
import DropdownMenu from '@/shared/ui/dropdown-menu'
import { Flex, Typography } from '@repo/ui/server'

type Props = {
  pathId: string
}

function PathInterruptionButton({ pathId }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <DropdownMenu className='cursor-pointer'>
        <DropdownMenu.Trigger className='flex h-9 w-9 items-center justify-center'>
          <Icon
            name='MoreOutlined'
            size={20}
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.MenuContent
          className='right-0'
          triggerHeight='2.5rem'>
          <DropdownMenu.MenuItem
            value='cancel'
            onClick={handleClick}>
            <Typography
              variant='body-2-normal'
              fontWeight='medium'>
              패스 취소하기
            </Typography>
          </DropdownMenu.MenuItem>
        </DropdownMenu.MenuContent>
      </DropdownMenu>
      {isModalOpen ? (
        <PathInterruptionModal
          isModalOpen={isModalOpen}
          handleModalClose={handleModalClose}
          pathId={pathId}
        />
      ) : null}
    </>
  )
}

export default PathInterruptionButton
