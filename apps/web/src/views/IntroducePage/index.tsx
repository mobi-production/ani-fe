'use client'

import { GetPathIntroduceResponseType } from '@/entities/path/lib/types/introduce'
import FullScreenLayout from '@/shared/ui/layout/full-screen-layout'
import NavigationLinks from '@/shared/ui/NavigationLinks'
import PathCurriculum from '@/widgets/path/ui/path-curriculum'
import PathInformationBanner from '@/widgets/path/ui/path-information-banner'
import PathTitleBanner from '@/widgets/path/ui/path-title-banner'
import { Divider, Flex } from '@repo/ui/server'
import { ServerDrivenComponent } from '@repo/sdu'

type Props = {
  data: GetPathIntroduceResponseType['data']
}

export function PathIntroducePage({ data }: Props) {
  return (
    <FullScreenLayout>
      <PathTitleBanner
        description={data.path.description}
        id={data.pathId}
        isApplied={data.isSubscribed}
        thumbnail={data.path.thumbnail}
        title={data.path.title}
      />

      <PathInformationBanner
        startDate={data.startDate}
        endDate={data.endDate}
        recruitStartDate={data.recruitStartDate}
        recruitEndDate={data.recruitEndDate}
        maxStudent={data.maxStudent}
        announcementDate={data.announcementDate}
        level={data.level}
      />

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

      <section id='path_feature'>
        <Flex
          direction={'column'}
          gap={8}>
          <ServerDrivenComponent content={data.path.content} />
        </Flex>
      </section>

      <Divider />

      <PathCurriculum parts={data.parts} />
    </FullScreenLayout>
  )
}
