'use client'

import type { MyPageData, MyPageProfileData } from '@/__mock__/types/mypage'
import MyPageEditButton from '@/features/main/ui/my-page-edit-button'
import ProfileEditModal from '@/features/mypage/ui/profile-edit-modal'
import NavigationLinks from '@/shared/ui/NavigationLinks'
import AssignmentList from '@/widgets/mypage/ui/assignment-list'
import CompletedPathList from '@/widgets/mypage/ui/completed-path-list'
import FeedbackListSection from '@/widgets/mypage/ui/feedback-list-section'
import InProgressPathList from '@/widgets/mypage/ui/in-progress-path-list'
import { Divider, Flex, Typography } from '@repo/ui/server'
import Image from 'next/image'
import { useState } from 'react'

const LINKS = [
  { id: 'my_path', title: '내 패스' },
  { id: 'assignment', title: '과제' },
  { id: 'feedback', title: '피드백' }
] as const

type InnerProps = {
  myPageData: MyPageData
  myPageProfileData: MyPageProfileData
  onOpenModal: () => void
}

export function Inner({ myPageData, myPageProfileData, onOpenModal }: InnerProps) {
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
            <Image
              src={myPageProfileData?.image || '/avif/placeholder.avif'}
              alt='프로필 이미지'
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
              sizes='120px'
            />
          </div>
          <Flex direction='column'>
            <Typography
              variant='title-3'
              fontWeight='bold'>
              {myPageProfileData.nickname}
            </Typography>
            <Typography
              className='text-neutral-60'
              variant='heading-1'
              fontWeight='medium'>
              {myPageProfileData.email}
            </Typography>
          </Flex>
        </Flex>
        <MyPageEditButton onClick={onOpenModal} />
      </Flex>
      <Flex
        direction='column'
        className='sticky top-0 w-full bg-neutral-99'>
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
        <InProgressPathList data={myPageData.inProgressPathList} />
        <CompletedPathList data={myPageData.completedPathList} />
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
        <AssignmentList data={myPageData.assignmentList} />
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

        <FeedbackListSection data={myPageData.feedbackList} />
      </section>
    </Flex>
  )
}

type MyPageProps = {
  myPageData: MyPageData
  myPageProfileData: MyPageProfileData
}

export default function MyPage({ myPageData, myPageProfileData }: MyPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Inner
        myPageData={myPageData}
        myPageProfileData={myPageProfileData}
        onOpenModal={() => {
          setIsModalOpen(true)
        }}
      />
      <ProfileEditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={myPageProfileData}
      />
    </>
  )
}
