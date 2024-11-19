import { Icon } from '@repo/ui/client'
import { Typography } from '@repo/ui/server'

import { Flex } from '@repo/ui/server'
import { formatDate } from '@repo/util/formatDate'

type Props = {
  startDate: string
  endDate: string
  recruitStartDate: string
  recruitEndDate: string
  announcementDate: string
  maxStudent: number
  level: string
}

function PathInformationBanner({
  startDate,
  endDate,
  recruitStartDate,
  recruitEndDate,
  announcementDate,
  maxStudent,
  level
}: Props) {
  return (
    <section
      id={'path_information'}
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
            {formatDate(recruitStartDate)} - {formatDate(recruitEndDate)}
          </Typography>
          <Typography
            variant='body-1-normal'
            fontWeight={'medium'}>
            {formatDate(announcementDate)}
          </Typography>
          <Typography
            variant='body-1-normal'
            fontWeight={'medium'}>
            {formatDate(startDate)} - {formatDate(endDate)}
          </Typography>
          <Typography
            variant='body-1-normal'
            fontWeight={'medium'}>
            {maxStudent}명
          </Typography>
          <Typography
            variant='body-1-normal'
            fontWeight={'medium'}>
            {level}
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
  )
}

export default PathInformationBanner
