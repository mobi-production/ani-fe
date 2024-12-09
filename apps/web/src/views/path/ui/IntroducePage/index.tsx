'use client'

import FullScreenLayout from '@/shared/ui/layout/full-screen-layout'
import { Divider, Flex, Typography } from '@repo/ui/server'
import { ServerDrivenComponent } from '@repo/sdu/index'
import { GetPathIntroduceResponseType } from '../../api/get-path-introduce'
import { Icon } from '@repo/ui/client'
import { formatDate } from '@repo/util/formatDate'
import IntroduceCurriculumBar from '@/widgets/path/ui/introduce/CurriculumBar'
import IntroduceCurriculumContent from '@/widgets/path/ui/introduce/CurriculumContent'
import NavigationLinks from '@/shared/ui/navigation-links'
import PathIntroduceTobBanner from '@/widgets/path/ui/introduce/TopBanner'

type Props = {
  data: GetPathIntroduceResponseType['data']
}

export function PathIntroducePage({ data }: Props) {
  return (
    <FullScreenLayout>
      {/* 패스 타이틀 바 */}
      <PathIntroduceTobBanner
        thumbnail={data.path.thumbnail}
        title={data.path.title}
        description={data.path.description}
        isSubscribed={data.isSubscribed}
        pathId={data.pathId}
      />

      {/* 패스 상세 정보 */}
      <Flex
        id={'path_information'}
        direction={'column'}
        gap={20}>
        <Typography
          variant='title-3'
          fontWeight={'bold'}>
          패스 상세 정보
        </Typography>
        <Flex gap={24}>
          <Flex
            direction={'column'}
            gap={8}>
            <Typography
              variant='body-1-normal'
              fontWeight={'medium'}
              color='alternative'>
              신청 기한
            </Typography>
            <Typography
              variant='body-1-normal'
              fontWeight={'medium'}
              color='alternative'>
              발표일
            </Typography>
            <Typography
              variant='body-1-normal'
              fontWeight={'medium'}
              color='alternative'>
              패스기한
            </Typography>
            <Typography
              variant='body-1-normal'
              fontWeight={'medium'}
              color='alternative'>
              모집인원
            </Typography>
            <Typography
              variant='body-1-normal'
              fontWeight={'medium'}
              color='alternative'>
              난이도
            </Typography>
          </Flex>
          <Flex
            direction={'column'}
            gap={8}>
            <Typography
              variant='body-1-normal'
              fontWeight={'medium'}>
              {formatDate(data.recruitStartDate, 'yyyy.MM.dd')} -{' '}
              {formatDate(data.recruitEndDate, 'yyyy.MM.dd')}
            </Typography>
            <Typography
              variant='body-1-normal'
              fontWeight={'medium'}>
              {formatDate(data.announcementDate, 'yyyy.MM.dd')}
            </Typography>
            <Typography
              variant='body-1-normal'
              fontWeight={'medium'}>
              {formatDate(data.startDate, 'yyyy.MM.dd')} - {formatDate(data.endDate, 'yyyy.MM.dd')}
            </Typography>
            <Typography
              variant='body-1-normal'
              fontWeight={'medium'}>
              {data.maxStudent}명
            </Typography>
            <Typography
              variant='body-1-normal'
              fontWeight={'medium'}>
              {data.level}
            </Typography>
          </Flex>
        </Flex>
        <Flex
          align={'center'}
          asChild
          gap={4}>
          <Typography
            color='error'
            variant='label-reading'
            fontWeight={'medium'}>
            <Icon name='ExclamationCircleOutlined' />
            패스 신청 후 취소 시 패널티를 받을 수 있습니다.
          </Typography>
        </Flex>
      </Flex>
      {/* 패스 내비게이션 바 */}
      <Flex
        direction={'column'}
        className='sticky top-0 z-10 w-full bg-inherit'>
        <NavigationLinks
          links={[
            { id: 'path_title_banner', title: '패스 정보' },
            { id: 'path_feature', title: '패스 특징' },
            { id: 'path_curriculum', title: '커리큘럼' }
          ]}
        />
        <Divider />
      </Flex>
      {/* 패스 소개 영역, SDUI 구현 */}
      <section id='path_feature'>
        <Flex
          direction={'column'}
          gap={8}>
          <ServerDrivenComponent content={data.path.content} />
        </Flex>
      </section>
      <Divider />
      {/* 패스 커리큘럼 영역 */}
      <section
        id={'path_curriculum'}
        className='flex w-full flex-col gap-[1.5rem]'>
        <Typography
          variant='title-3'
          fontWeight={'bold'}>
          커리큘럼을 보여드려요
        </Typography>
        <Flex className='gap-[1.5rem]'>
          <IntroduceCurriculumBar parts={data.parts} />
          <IntroduceCurriculumContent parts={data.parts} />
        </Flex>
      </section>
    </FullScreenLayout>
  )
}
