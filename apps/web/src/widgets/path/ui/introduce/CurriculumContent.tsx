import { SpacingBlock } from '@repo/ui/server'

import { Flex, Typography } from '@repo/ui/server'
import { Icon } from '@repo/ui/client'
import { BasePageType, BasePartType, BaseVideoPageType } from '@/shared/types/path'

type CurriculumCustomTextProps = {
  type: BasePageType['type'] | BaseVideoPageType['type']
  title: string
  videoLength?: string
}

function CurriculumCustomText({ type, title, videoLength }: CurriculumCustomTextProps) {
  switch (type) {
    case 'QUIZ':
    case 'LEARNING_CONTENTS':
      return (
        <Flex
          asChild
          className='gap-[0.25rem]'>
          <Typography
            variant='body-1-normal'
            className={type === 'QUIZ' ? 'text-primary-normal' : ''}>
            <Icon name={type === 'QUIZ' ? 'QuestionCircleOutlined' : 'FileOutlined'} />
            {title}
          </Typography>
        </Flex>
      )
    case 'VIDEO':
      return (
        <Flex
          asChild
          className='gap-[0.25rem]'>
          <Typography variant='body-1-normal'>
            <Icon name='PlayCircleOutlined' />
            <Flex
              asChild
              className='gap-[0.25rem]'>
              <span>
                {title}
                {videoLength && (
                  <Typography
                    color='alternative'
                    variant='body-2-normal'>
                    {videoLength}
                  </Typography>
                )}
              </span>
            </Flex>
          </Typography>
        </Flex>
      )
  }
}

type Props = {
  parts: BasePartType[]
}

function IntroduceCurriculumContent({ parts }: Props) {
  return (
    <Flex
      gap={24}
      direction={'column'}>
      {parts.map((part, index) => (
        <Flex
          key={index}
          direction={'column'}>
          <Typography
            variant='heading-2'
            color='alternative'>
            Part {index + 1}
          </Typography>
          <SpacingBlock height={4} />
          <Typography
            variant='heading-2'
            fontWeight={'semibold'}>
            {part.title}
          </Typography>
          <SpacingBlock height={16} />
          <Flex
            direction={'column'}
            gap={12}
            className='pl-[1.25rem]'>
            {part.page.map((page, index) => (
              <Flex
                key={index}
                asChild
                gap={8}
                align={'center'}>
                <CurriculumCustomText {...page} />
              </Flex>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}

export default IntroduceCurriculumContent
