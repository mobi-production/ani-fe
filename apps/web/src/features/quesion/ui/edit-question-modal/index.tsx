'use client'

import { Flex, Typography } from '@repo/ui/server'
import { useEffect, useRef } from 'react'

interface Props {
  isEditQuestionModalOpen: boolean
  onCloseEditQuestionModal: () => void
}

function EditQuestionModal({ isEditQuestionModalOpen, onCloseEditQuestionModal }: Props) {
  const modalRef = useRef<HTMLDivElement>(null)

  const onClickEditQuestion = () => {
    onCloseEditQuestionModal()
  }

  const onClickDeleteQuestion = () => {
    onCloseEditQuestionModal()
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onCloseEditQuestionModal()
      }
    }

    if (isEditQuestionModalOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isEditQuestionModalOpen, onCloseEditQuestionModal])

  if (!isEditQuestionModalOpen) return null

  return (
    <div
      ref={modalRef}
      className='absolute right-0 top-6 transform rounded border border-line-normal/15 bg-background-normal p-4'>
      <Flex
        direction={'column'}
        gap={8}>
        <Typography
          variant={'caption-1'}
          className='cursor-pointer'
          onClick={onClickEditQuestion}>
          수정하기
        </Typography>
        <Typography
          variant={'caption-1'}
          className='cursor-pointer'
          onClick={onClickDeleteQuestion}>
          삭제하기
        </Typography>
      </Flex>
    </div>
  )
}

export default EditQuestionModal
