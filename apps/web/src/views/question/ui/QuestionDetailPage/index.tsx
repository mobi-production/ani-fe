'use client'

import { Badge, SpacingBlock, Divider } from '@repo/ui/server'
import { Flex, Typography } from '@repo/ui/server'
import { GetQuestionDetailResponseType } from '../../api/get-question-detail'
import { BadgeColors } from '@repo/ui/components/badge/variants'
import { formatDate } from '@repo/util/formatDate'
import { Icon } from '@repo/ui/client'
import SubmitReplySection from '@/features/quesion/ui/submit-reply-section'
import { useState } from 'react'
import EditQuestionModal from '@/features/quesion/ui/edit-question-modal'

type Props = {
  data: GetQuestionDetailResponseType['data']
}

export default function QuestionDetailPage({ data }: Props) {
  const { tag, title, content, createdDate, answers } = data

  const [isEditQuestionModalOpen, setIsEditQuestionModalOpen] = useState(false)
  const onCloseEditQuestionModal = () => setIsEditQuestionModalOpen(false)

  return (
    <Flex
      direction='column'
      gap={20}>
      <div>
        <div>
          <Badge
            color={BadgeColors['MINT']}
            className='h-[1.5rem]'>
            {tag}
          </Badge>
        </div>
        <SpacingBlock size={8} />
        <Flex
          direction='column'
          gap={6}>
          <div className='overflow-hidden text-ellipsis whitespace-nowrap'>
            <Typography
              variant={'body-2-reading'}
              fontWeight={'semibold'}>
              {title}
            </Typography>
          </div>
          <Flex
            justify='between'
            className='relative'>
            <Typography
              variant={'caption-1'}
              color='alternative'>
              {formatDate(createdDate, 'yyyy.MM.dd')}
            </Typography>
            <Icon
              name='EllipsisOutlined'
              size={12}
              className='rotate-90 cursor-pointer'
              onClick={() => setIsEditQuestionModalOpen((prev: boolean) => !prev)}
            />
            <EditQuestionModal
              isEditQuestionModalOpen={isEditQuestionModalOpen}
              onCloseEditQuestionModal={onCloseEditQuestionModal}
            />
          </Flex>
        </Flex>
      </div>
      <Divider />
      <Typography variant={'body-2-normal'}>{content}</Typography>
      <SubmitReplySection />
    </Flex>
  )
}
