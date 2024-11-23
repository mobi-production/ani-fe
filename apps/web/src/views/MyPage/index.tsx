'use client'

import { myPageData } from '@/__mock__/data/mypage'
import type { MyPageData } from '@/__mock__/types/mypage'
import MyPageEditButton from '@/features/main/ui/my-page-edit-button'
import NavigationLinks from '@/shared/ui/NavigationLinks'
import AssignmentList from '@/widgets/mypage/ui/assignment-list'
import CompletedPathList from '@/widgets/mypage/ui/completed-path-list'
import FeedbackListSection from '@/widgets/mypage/ui/feedback-list-section'
import InProgressPathList from '@/widgets/mypage/ui/in-progress-path-list'
import { Divider, Flex, Typography } from '@repo/ui/server'
import Image from 'next/image'

const LINKS = [
  { id: 'my_path', title: '내 패스' },
  { id: 'assignment', title: '과제' },
  { id: 'feedback', title: '피드백' }
] as const

type InnerProps = {
  data: MyPageData
}

export function Inner({ data }: InnerProps) {
  return (
    <Flex
      direction='column'
      gap={48}>
      <Flex
        direction='row'
        align='center'
        justify='between'>
        <Flex
          direction='row'
          align='center'
          gap={24}>
          <div className='relative h-[120px] w-[120px] overflow-hidden rounded-full'>
            {/* TODO: 실제 이미지 연동 + 프로필 사진이 없을 경우의 이미지도 연동 */}
            <Image
              src='/avif/placeholder.avif'
              alt='프로필 이미지'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              priority
              sizes='120px'
            />
          </div>
          <Flex direction='column'>
            <Typography
              variant='title-3'
              fontWeight='bold'>{`닉네임`}</Typography>
            <Typography
              className='text-neutral-60'
              variant='heading-1'
              fontWeight='medium'>{`email@naver.com`}</Typography>
          </Flex>
        </Flex>
        <MyPageEditButton />
      </Flex>
      <Flex
        direction='column'
        className='sticky top-0 w-full bg-inherit'>
        <NavigationLinks links={[{ ...LINKS[0] }, { ...LINKS[1] }, { ...LINKS[2] }]} />
        <Divider />
      </Flex>
      <section
        className='flex flex-col gap-[1rem]'
        id={LINKS[0].id}>
        <Flex
          gap={4}
          direction='column'>
          <Typography
            variant='title-3'
            fontWeight='bold'>
            내 패스
          </Typography>
          <Typography
            className='mb-[0.5rem] text-neutral-60'
            variant='body-2-normal'
            fontWeight='medium'>
            진행 중인 패스와 완료한 패스를 한눈에 확인하세요
          </Typography>
        </Flex>
        <InProgressPathList data={data.inProgressPathList} />
        <CompletedPathList data={data.completedPathList} />
      </section>

      <section
        className='flex flex-col gap-[16px]'
        id={LINKS[1].id}>
        <Flex
          gap={4}
          direction='column'>
          <Typography
            variant='title-3'
            fontWeight='bold'>
            과제
          </Typography>
          <Typography
            className='mb-[0.5rem] text-neutral-60'
            variant='body-2-normal'
            fontWeight='medium'>
            진행 중인 패스의 과제 현황을 확인하세요
          </Typography>
        </Flex>
        <AssignmentList data={data.assignmentList} />
      </section>
      <section
        className='flex flex-col gap-[16px]'
        id={LINKS[2].id}>
        <Flex
          gap={4}
          direction='column'>
          <Typography
            variant='title-3'
            fontWeight='bold'>
            피드백
          </Typography>
          <Typography
            className='mb-[0.5rem] text-neutral-60'
            variant='body-2-normal'
            fontWeight='medium'>
            진행 중인 패스의 멘토 피드백을 받을 수 있어요
          </Typography>
        </Flex>

        <FeedbackListSection data={data.feedbackList} />
      </section>
    </Flex>
  )
}

type MyPageProps = {
  data: MyPageData
}

export default function MyPage({ data }: MyPageProps) {
  return <Inner data={data} />
}
