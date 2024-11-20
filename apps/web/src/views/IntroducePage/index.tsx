'use client'

import { pathIntroduce } from '@/__mock__/data/path'
import { PathIntroduce } from '@/entities/path/model/path-introduce'
import CurriculumBar from '@/entities/path/ui/curriculum-bar'
import PathApplyButton from '@/features/path/ui/path-apply-button'
import PathCancleButton from '@/features/path/ui/path-cancle-button'
import NavigationLinks from '@/shared/ui/NavigationLinks'
import { Icon } from '@repo/ui/client'
import { Divider, Flex, ImageSection, Typography } from '@repo/ui/server'

type InnerProps = {
  data: PathIntroduce
  isLoggedIn: boolean
}

export function Inner({ data, isLoggedIn }: InnerProps) {
  return (
    <Flex
      asChild
      gap={12}
      direction={'column'}
      align={'start'}
      justify={'center'}>
      <main className='w-max-[82rem] mb-[4.5rem] w-full rounded-[0.75rem] bg-background-normal px-[2.375rem] py-[4.5rem]'>
        <section id='path_info'>
          <Flex className='gap-[2.5rem]'>
            <ImageSection
              size='l'
              src={data.imageUrl}
              alt={data.title}
            />
            <Flex
              className='w-[30rem]'
              direction={'column'}
              justify={'between'}>
              <Flex
                direction={'column'}
                gap={10}>
                <Typography
                  variant='display-2'
                  fontWeight={'bold'}>
                  {data.title}
                </Typography>
                <Typography
                  variant='body-1-normal'
                  fontWeight={'medium'}>
                  {data.description}
                </Typography>
              </Flex>
              {data.isApplied ? (
                <PathCancleButton pathId={data.id} />
              ) : (
                <PathApplyButton
                  pathId={data.id}
                  isLoggedIn={isLoggedIn}
                />
              )}
            </Flex>
          </Flex>
        </section>

        <Flex
          direction={'column'}
          className='sticky top-0 w-full bg-inherit'>
          <NavigationLinks
            links={[
              { id: 'path_info', title: '패스 정보' },
              { id: 'path_feature', title: '패스 특징' },
              { id: 'curriculum', title: '커리큘럼' }
            ]}
          />
          <Divider />
        </Flex>

        <section
          id={'path_feature'}
          className='flex flex-col gap-[1.25rem]'>
          <Typography
            variant='title-3'
            fontWeight={'bold'}>
            패스 상세 정보
          </Typography>
          <Flex className='gap-[1.5rem]'>
            <Flex
              direction={'column'}
              className='gap-[0.75rem]'>
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
              className='gap-[0.75rem]'>
              <Typography
                variant='body-1-normal'
                fontWeight={'medium'}>
                {data.recruitmentStartDate} - {data.applicationDeadline}
              </Typography>
              <Typography
                variant='body-1-normal'
                fontWeight={'medium'}>
                {data.announcementDate}
              </Typography>
              <Typography
                variant='body-1-normal'
                fontWeight={'medium'}>
                {data.pathStartDate} - {data.pathEndDate}
              </Typography>
              <Typography
                variant='body-1-normal'
                fontWeight={'medium'}>
                {data.recruitedPeople}명
              </Typography>
              <Typography
                variant='body-1-normal'
                fontWeight={'medium'}>
                {data.difficultyLevel}
              </Typography>
            </Flex>
          </Flex>
          <Flex
            align={'center'}
            asChild
            className='gap-[0.25rem]'>
            <Typography
              color='error'
              variant='label-reading'
              fontWeight={'medium'}>
              <Icon name='ExclamationCircleOutlined' />
              패스 신청 후 취소 시 패널티를 받을 수 있습니다.
            </Typography>
          </Flex>
        </section>

        <Divider />

        <section
          id='path_feature'
          className='flex flex-col gap-[1.25rem]'>
          <Flex
            direction={'column'}
            gap={4}>
            <Typography
              variant='title-3'
              fontWeight={'bold'}>
              어떤 걸 배울 수 있나요?
            </Typography>
            <Typography
              variant='body-1-normal'
              fontWeight={'medium'}>
              {data.pathDescription.title}
            </Typography>
            {data.pathDescription.subTitle.map((subTitle, index) => (
              <Flex
                key={index}
                direction={'column'}
                className='gap-[0.25rem]'>
                <Typography
                  variant='body-1-normal'
                  fontWeight={'medium'}>
                  {subTitle.title}
                </Typography>
                <Typography
                  variant='body-1-normal'
                  fontWeight={'medium'}
                  color='alternative'>
                  {subTitle.description}
                </Typography>
              </Flex>
            ))}
          </Flex>
        </section>

        <section className='flex flex-col gap-[1.5rem]'>
          <Typography
            variant='title-3'
            fontWeight={'bold'}>
            이런 분들에게 추천해요
          </Typography>
          <Flex
            direction={'column'}
            className='gap-[0.75rem]'>
            {data.pathFeatures.map((feature, index) => (
              <Flex
                key={index}
                align={'center'}
                className='gap-[0.75rem]'>
                <Flex
                  align={'center'}
                  justify={'center'}
                  asChild>
                  <div className='h-12 w-12 rounded-3xl bg-background-alternative px-[0.562rem] py-[0.812rem] text-[1.5rem]'>
                    <Typography>{feature.emoji}</Typography>
                  </div>
                </Flex>
                <Typography variant='heading-1'>{feature.description}</Typography>
              </Flex>
            ))}
          </Flex>
        </section>

        <section
          id='curriculum'
          className='flex flex-col gap-[1.5rem]'>
          <Typography
            variant='title-3'
            fontWeight={'bold'}>
            커리큘럼을 보여드려요
          </Typography>
          <Flex className='gap-[1.5rem]'>
            <CurriculumBar pathContents={data.pathContents} />
            <Flex
              direction={'column'}
              className='gap-[1.5rem]'>
              {data.pathContents.map((content, index) => (
                <Flex
                  key={index}
                  direction={'column'}
                  className='gap-[0.25rem]'>
                  <Typography
                    variant='heading-2'
                    color='alternative'>
                    Part {index + 1}
                  </Typography>
                  <Typography
                    variant='heading-2'
                    fontWeight={'semibold'}>
                    {content.title}
                  </Typography>
                  {content.path.map((path, index) => (
                    <Flex
                      key={index}
                      asChild
                      align={'center'}
                      className='gap-[0.5rem]'>
                      <Typography variant='body-1-normal'>
                        <Icon name={path.type === 'page' ? 'FileOutlined' : 'PlayCircleOutlined'} />
                        {path.title}
                      </Typography>
                    </Flex>
                  ))}
                </Flex>
              ))}
            </Flex>
          </Flex>
        </section>
      </main>
    </Flex>
  )
}

type IntroducePageProps = {
  pathId: string
}

export default function IntroducePage({ pathId }: IntroducePageProps) {
  const data = pathIntroduce(pathId)
  const isLoggedIn = false

  return (
    <Inner
      data={data}
      isLoggedIn={isLoggedIn}
    />
  )
}
