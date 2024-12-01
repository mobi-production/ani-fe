'use client'

import { Flex, Modal, Typography } from '@repo/ui/server'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  isEditQuestionModalOpen: boolean
  onCloseEditQuestionModal: () => void
}

function EditQuestionModal({ isEditQuestionModalOpen, onCloseEditQuestionModal }: Props) {
  const onClickEditQuestion = () => {
    onCloseEditQuestionModal()
  }

  const onClickDeleteQuestion = () => {
    onCloseEditQuestionModal()
  }

  return (
    <Modal
      className='absolute top-16 border border-line-normal/15 p-4'
      rounded={'SMALL'}
      xPosition={'RIGHT'}
      withCloseButton={false}
      withBackDrop={false}
      isOpen={isEditQuestionModalOpen}
      onClose={onCloseEditQuestionModal}>
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
    </Modal>
  )
}

export default EditQuestionModal
