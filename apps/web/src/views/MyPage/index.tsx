'use client'

import MyPageEditButton from '@/features/main/ui/my-page-edit-button'
import NavigationLinks from '@/shared/ui/NavigationLinks'
import { Icon } from '@repo/ui/client'
import { Divider, Flex, Typography } from '@repo/ui/server'
import Image from 'next/image'
import { useRef } from 'react'

const LINKS = [
  { id: 'my_path', title: '내 패스' },
  { id: 'assignment', title: '과제' },
  { id: 'feedback', title: '피드백' }
] as const

export function Inner() {
  const myPathRef = useRef<HTMLDivElement>(null)
  const assignmentRef = useRef<HTMLDivElement>(null)
  const feedbackRef = useRef<HTMLDivElement>(null)

  return (
    <Flex
      direction='column'
      gap='12'>
      <Flex
        direction='row'
        align='center'
        justify='between'>
        <Flex
          direction='row'
          align='center'
          className='gap-[1.5rem]'>
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
        direction={'column'}
        className='w-full'>
        <NavigationLinks
          links={[
            { ...LINKS[0], ref: myPathRef },
            { ...LINKS[1], ref: assignmentRef },
            { ...LINKS[2], ref: feedbackRef }
          ]}
          firstLinkActive={true}
        />
        <Divider />
      </Flex>
      <section
        className='flex flex-col gap-[16px]'
        ref={myPathRef}
        id={LINKS[0].id}>
        <Flex
          direction='column'
          className='gap-[0.25rem]'>
          <Typography
            variant='title-3'
            fontWeight='bold'>
            내 패스
          </Typography>
          <Typography
            className='text-neutral-60'
            variant='body-2-normal'
            fontWeight='medium'>
            진행 중인 패스와 완료한 패스를 한눈에 확인하세요
          </Typography>
        </Flex>
        <div>InProgressPathList</div>
        <div>CompletedPathList</div>
      </section>

      <section
        ref={assignmentRef}
        id={LINKS[1].id}>
        <Flex
          direction='column'
          className='gap-[0.25rem]'>
          <Typography
            variant='title-3'
            fontWeight='bold'>
            과제
          </Typography>
          <Typography
            className='text-neutral-60'
            variant='body-2-normal'
            fontWeight='medium'>
            진행 중인 패스의 과제 현황을 확인하세요
          </Typography>
        </Flex>
        <div>
          <div>필터 셀렉터</div>
          {/* AssignmentList */}
          <div>전체 과제들</div>
          <Flex
            direction='row'
            align='center'
            className='gap-[0.25rem] text-status-error'>
            <Icon
              name='InfoCircleOutlined'
              size='20'
            />
            <Typography color='inherit'>
              미제출 과제가 3개 이상일 경우, 과정이 미수료 처리될 수 있어요
            </Typography>
          </Flex>
        </div>
      </section>
      <section
        ref={feedbackRef}
        id={LINKS[2].id}>
        <Flex
          direction='column'
          className='gap-[0.25rem]'>
          <Typography
            variant='title-3'
            fontWeight='bold'>
            피드백
          </Typography>
          <Typography
            className='text-neutral-60'
            variant='body-2-normal'
            fontWeight='medium'>
            진행 중인 패스의 멘토 피드백을 받을 수 있어요
          </Typography>
        </Flex>

        <div>
          {/* FeedbackList */}
          패스별 피드백 Section
        </div>
      </section>
    </Flex>
  )
}

export default function MyPage() {
  return <Inner />
}
