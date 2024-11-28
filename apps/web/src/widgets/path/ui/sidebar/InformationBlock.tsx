import { Flex, ImageSection, Typography, ProgressBar, SolidButton, Divider } from '@repo/ui/server'
import { formatDate } from '@repo/util/formatDate'
import Image from 'next/image'

import { PathStatusType } from '@/entities/path/model/apis'

type Props = PathStatusType

function SidebarInformationBlock({
  crews,
  endDate,
  mentors,
  progress,
  startDate,
  status,
  thumbnail,
  title
}: Props) {
  return (
    <Flex
      direction='column'
      gap={48}>
      <ImageSection
        size='m'
        src={thumbnail}
        alt={title}
      />

      <Flex
        direction='column'
        gap={24}>
        <Flex direction='column'>
          <Typography
            variant='title-2'
            fontWeight={'bold'}>
            {title}
          </Typography>
          <Typography
            color='alternative'
            variant='body-1-normal'
            fontWeight={'medium'}>
            {formatDate(startDate, 'yyyy.MM.dd')} - {formatDate(endDate, 'yyyy.MM.dd')}
          </Typography>
        </Flex>
        <ProgressBar
          showPercentage
          value={progress}
        />
      </Flex>

      {status === 'PENDING_REVIEW' && <SolidButton fullWidth>다시 제출하기</SolidButton>}

      {status === 'COMPLETED' && (
        <Flex
          direction='column'
          gap={12}>
          <SolidButton fullWidth>수료증 확인하기</SolidButton>
          <SolidButton
            fullWidth
            variant='secondary'>
            성적 확인하기
          </SolidButton>
        </Flex>
      )}

      <Divider />

      <Flex
        direction='column'
        gap={32}>
        <Flex
          direction='column'
          gap={16}>
          <Typography
            variant='title-3'
            fontWeight={'bold'}>
            멘토
          </Typography>
          <Flex
            direction='column'
            gap={16}>
            {mentors.map((mentor) => (
              <Flex
                direction='row'
                align='center'
                gap={16}>
                <Image
                  className='h-10 w-10 rounded-full border-2 border-line-normal'
                  src={mentor.profileUrl ?? '/avif/placeholder.avif'}
                  alt={mentor.nickname}
                  width={40}
                  height={40}
                />
                <Flex
                  direction='row'
                  gap={2}>
                  <Typography
                    variant='body-1-normal'
                    fontWeight={'semibold'}>
                    {mentor.nickname}
                  </Typography>
                  <Typography
                    color='alternative'
                    variant='body-1-normal'
                    fontWeight={'medium'}>
                    님
                  </Typography>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>

        <Flex
          direction='column'
          gap={16}>
          <Typography
            variant='title-3'
            fontWeight={'bold'}>
            함께하는 사람들
          </Typography>
          <Flex
            direction='column'
            gap={12}>
            {crews.map((crew) => (
              <Flex
                direction='row'
                align='center'
                gap={12}>
                <Image
                  className='h-10 w-10 rounded-full border-2 border-line-normal'
                  src={crew.profileUrl ?? '/avif/placeholder.avif'}
                  alt={crew.nickname}
                  width={40}
                  height={40}
                />
                <Flex
                  direction='row'
                  gap={2}>
                  <Typography
                    variant='body-1-normal'
                    fontWeight={'semibold'}>
                    {crew.nickname}
                  </Typography>
                  <Typography
                    color='alternative'
                    variant='body-1-normal'
                    fontWeight={'medium'}>
                    님
                  </Typography>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SidebarInformationBlock
