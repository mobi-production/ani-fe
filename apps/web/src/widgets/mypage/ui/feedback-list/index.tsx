import type { FeedbackItem } from '@/__mock__/types/mypage'
// import Pagination from '@/shared/ui/pagination'
import { Flex, Typography } from '@repo/ui/server'
import Image from 'next/image'
// import { useState } from 'react'

type FeedbackListProps = {
  data: FeedbackItem[]
}

function FeedbackList({ data }: FeedbackListProps) {
  // const [currentPage, setCurrentPage] = useState(1)

  if (!data) return null
  return (
    <Flex
      direction='column'
      align='center'
      gap={24}>
      <Flex
        direction='row'
        gap={16}>
        {data.map((feedback) => (
          <Flex
            key={feedback.id}
            className='w-[38rem] rounded-[8px] border border-line-normal p-[1.25rem]'
            direction='column'
            gap={24}>
            <Flex
              direction='row'
              align='center'
              gap={12}>
              <div className='relative h-[2.5rem] w-[2.5rem] overflow-hidden rounded-full'>
                {/* TODO: 실제 이미지 연동 + 프로필 사진이 없을 경우의 이미지도 연동 */}
                <Image
                  src='/avif/placeholder.avif'
                  alt='프로필 이미지'
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  priority
                  sizes='2.5rem'
                />
              </div>
              <div>
                <Typography
                  variant='body-1-normal'
                  fontWeight='bold'>
                  {feedback.authorNickname}
                </Typography>
                <Typography
                  variant='body-1-normal'
                  fontWeight='medium'>
                  {' '}
                  님의 피드백
                </Typography>
              </div>
            </Flex>
            <Typography
              variant='body-2-normal'
              fontWeight='medium'
              className='whitespace-pre-line'
              key={feedback.id}>
              {feedback.description}
            </Typography>
          </Flex>
        ))}
      </Flex>
      {/* <Pagination
        currentPage={currentPage}
        totalPages={3}
        onPageChange={setCurrentPage}
      /> */}
    </Flex>
  )
}

export default FeedbackList
