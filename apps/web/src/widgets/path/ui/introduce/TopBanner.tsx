import PathApplyButton from '@/features/path/ui/ApplyButton'
import PathCancleButton from '@/features/path/ui/CancleButton'
import PathInterruptionButton from '@/features/path/ui/InterruptionButton'
import { Flex, ImageSection, Typography } from '@repo/ui/server'

type Props = {
  thumbnail: string
  title: string
  description: string
  isSubscribed: boolean
  pathId: string
}

function PathIntroduceTopBanner({ thumbnail, title, description, isSubscribed, pathId }: Props) {
  return (
    <section
      id='path_title_banner'
      className='w-full'>
      <Flex className='w-full gap-[2.5rem]'>
        <ImageSection
          size='l'
          src={thumbnail}
          alt={title}
        />
        <Flex
          className='flex-1'
          direction={'column'}
          justify={'between'}>
          <Flex
            direction={'column'}
            className='w-full gap-[0.5rem]'>
            <Flex
              align={'center'}
              justify={'between'}>
              <div className='w-[30rem]'>
                <Typography
                  variant='display-2'
                  fontWeight={'bold'}>
                  {title}
                </Typography>
              </div>
              <PathInterruptionButton pathId={pathId} />
            </Flex>
            <Typography
              className='w-[30rem] whitespace-pre-line'
              variant='body-1-normal'
              fontWeight={'medium'}>
              {description}
            </Typography>
          </Flex>

          <div className='w-[30rem]'>
            {isSubscribed ? (
              <PathCancleButton pathId={pathId} />
            ) : (
              <PathApplyButton pathId={pathId} />
            )}
          </div>
        </Flex>
      </Flex>
    </section>
  )
}

export default PathIntroduceTopBanner
