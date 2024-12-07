'use client'

import { Icon } from '@repo/ui/client'
import { SolidButton } from '@repo/ui/server'
import { useState } from 'react'
import PathApplyModal from './apply-modal'

function PathApplyButton({ pathId }: { pathId: string }) {
  const isLoggedIn = true
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => {
    if (isLoggedIn) {
      setIsModalOpen(true)
    } else {
      alert('로그인 후 이용해주세요.')
    }
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <SolidButton
        onClick={handleModalOpen}
        variant='primary'
        fullWidth
        rightIcon={<Icon name='RightOutlined' />}>
        신청하기
      </SolidButton>
      {isModalOpen ? (
        <PathApplyModal
          isModalOpen={isModalOpen}
          handleModalClose={handleModalClose}
          pathId={pathId}
        />
      ) : null}
    </>
  )
}

export default PathApplyButton
