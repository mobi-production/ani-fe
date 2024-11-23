import { Icon } from '@repo/ui/client'
import { Typography } from '@repo/ui/server'

import { Flex } from '@repo/ui/server'
import { formatDate } from '@repo/util/formatDate'

type Props = {
  startDate: string | Date
  endDate: string | Date
  recruitStartDate: string | Date
  recruitEndDate: string | Date
  announcementDate: string | Date
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
            {formatDate(recruitStartDate, 'yyyy.MM.dd')} -{' '}
            {formatDate(recruitEndDate, 'yyyy.MM.dd')}
          </Typography>
          <Typography
            variant='body-1-normal'
            fontWeight={'medium'}>
            {formatDate(announcementDate, 'yyyy.MM.dd')}
          </Typography>
          <Typography
            variant='body-1-normal'
            fontWeight={'medium'}>
            {formatDate(startDate, 'yyyy.MM.dd')} - {formatDate(endDate, 'yyyy.MM.dd')}
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
  )
}

export default PathInformationBanner
