import { SpacingBlock } from '@repo/ui/server'

import { Flex, Typography } from '@repo/ui/server'
import CurriculumCustomText from '../curriculum-custom-text'
import { PartType } from '../../model'

type CurriculumContentProps = {
  parts: PartType[]
}

function CurriculumContent({ parts }: CurriculumContentProps) {
  return (
    <Flex
      direction={'column'}
      className='gap-[1.5rem]'>
      {parts.map((part, index) => (
        <Flex direction={'column'}>
          <Typography
            variant='heading-2'
            color='alternative'>
            Part {index + 1}
          </Typography>
          <SpacingBlock className='h-1' />
          <Typography
            variant='heading-2'
            fontWeight={'semibold'}>
            {part.title}
          </Typography>
          <SpacingBlock height={4} />
          <Flex
            direction={'column'}
            className='gap-[0.75rem] pl-[1.25rem]'>
            {part.page.map((page, index) => (
              <Flex
                key={index}
                asChild
                align={'center'}
                className='gap-[0.5rem]'>
                <CurriculumCustomText
                  variant='body-1-normal'
                  subVariant='body-1-normal'
                  className='gap-[0.25rem]'
                  {...page}
                />
              </Flex>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}

export default CurriculumContent
