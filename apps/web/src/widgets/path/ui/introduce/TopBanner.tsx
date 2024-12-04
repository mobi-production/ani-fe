'use client'

import PathApplyButton from '@/features/path/ui/ApplyButton'
import PathCancleButton from '@/features/path/ui/CancleButton'
import { Flex, ImageSection, Typography } from '@repo/ui/server'

type PathStatusButtonProps = {
  isSubscribed: boolean
  pathId: string | number
}

function PathStatusButton({ isSubscribed, pathId }: PathStatusButtonProps) {
  return isSubscribed ? <PathCancleButton pathId={pathId} /> : <PathApplyButton pathId={pathId} />
}

type Props = {
  thumbnail: string
  title: string
  description: string
  isSubscribed: boolean
  pathId: string | number
}

function PathIntroduceTopBanner({ thumbnail, title, description, isSubscribed, pathId }: Props) {
  return (
    <section id='path_title_banner'>
      <Flex className='gap-[2.5rem]'>
        <ImageSection
          size='l'
          src={thumbnail}
          alt={title}
        />
        <Flex
          className='w-[30rem]'
          direction={'column'}
          justify={'between'}>
          <Flex
            direction={'column'}
            className='gap-[0.5rem]'>
            <Typography
              variant='display-2'
              fontWeight={'bold'}>
              {title}
            </Typography>
            <Typography
              className='whitespace-pre-line'
              variant='body-1-normal'
              fontWeight={'medium'}>
              {description}
            </Typography>
          </Flex>

          <PathStatusButton
            isSubscribed={isSubscribed}
            pathId={pathId}
          />
        </Flex>
      </Flex>
    </section>
  )
}

export default PathIntroduceTopBanner
