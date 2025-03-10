'use client'

import type { MainData } from '@/__mock__/types/main'
import AssignmentList from '@/widgets/main/ui/assignment-list'
import LeaningSummaryList from '@/widgets/main/ui/leaning-summary-list'
import OpenSoonPathList from '@/widgets/main/ui/open-soon-path-list'
import RecruitingPathList from '@/widgets/main/ui/recruiting-path-list'
import { Icon } from '@repo/ui/client'
import { Flex, Typography } from '@repo/ui/server'

import Image from 'next/image'
import Link from 'next/link'

export function Inner({ data }: { data: MainData }) {
  return (
    <Flex
      className='w-full'
      direction='column'
      align='center'
      justify='center'>
      <Flex
        direction='column'
        className='max-w-[82rem] gap-[3.5rem]'>
        <div className='max-h-[29.75rem] overflow-hidden rounded-[0.75rem]'>
          <Image
            src={data?.mainBanner[0] ? data?.mainBanner[0].image : '/avif/placeholder.avif'}
            alt='mainBanner'
            width={1312}
            height={476}
          />
        </div>
        <Flex
          direction='column'
          gap={26}>
          <Flex
            align='center'
            justify='between'>
            <Typography
              className='text-primary-normal'
              variant='title-3'
              fontWeight='bold'>
              유저닉네임
              <Typography
                variant='title-3'
                fontWeight='bold'>
                님의 학습요약
              </Typography>
            </Typography>
            <Link href='/'>
              <Icon
                name='RightOutlined'
                size={24}
              />
            </Link>
          </Flex>
          <LeaningSummaryList userData={data?.userData || []} />
          <AssignmentList userData={data?.userData || []} />
        </Flex>
        <RecruitingPathList pathData={data?.pathData || []} />
        <OpenSoonPathList pathData={data?.pathData || []} />
      </Flex>
    </Flex>
  )
}

export default function MainPage({ data }: { data: MainData }) {
  return <Inner data={data} />
}
