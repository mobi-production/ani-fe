import { Flex, Typography } from '@repo/ui/server'
import { PartType } from '../../model'
import CurriculumBar from './CurriculumBar'
import CurriculumContent from './CurriculumContent'

type Props = {
  parts: PartType[]
}

function PathCurriculum({ parts }: Props) {
  return (
    <section
      id={'path_curriculum'}
      className='flex w-full flex-col gap-[1.5rem]'>
      <Typography
        variant='title-3'
        fontWeight={'bold'}>
        커리큘럼을 보여드려요
      </Typography>
      <Flex className='gap-[1.5rem]'>
        <CurriculumBar parts={parts} />
        <CurriculumContent parts={parts} />
      </Flex>
    </section>
  )
}

export default PathCurriculum
