import PathApplyButton from '@/features/path/ui/path-apply-button'
import PathCancleButton from '@/features/path/ui/path-cancle-button'
import { ImageSection, Typography } from '@repo/ui/server'
import Flex from '@repo/ui/components/flex'

type Props = {
  id: string
  thumbnail: string
  title: string
  description: string
  isApplied: boolean
}

function PathTitleBanner({ thumbnail, title, description, isApplied, id }: Props) {
  return (
    <section>
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
          {isApplied ? <PathCancleButton pathId={id} /> : <PathApplyButton pathId={id} />}
        </Flex>
      </Flex>
    </section>
  )
}

export default PathTitleBanner
