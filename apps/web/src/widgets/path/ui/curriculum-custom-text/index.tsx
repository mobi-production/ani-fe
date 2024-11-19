import { Icon } from '@repo/ui/client'
import { Flex, Typography } from '@repo/ui/server'
import { ComponentProps } from 'react'
import { PageType, PartType } from '../../model'
type CurriculumCustomTextProps = {
  variant: ComponentProps<typeof Typography>['variant']
  subVariant: ComponentProps<typeof Typography>['variant']
  active?: boolean
  direction?: 'row' | 'column'
  type: PageType['type']
  title: string
  videoLength?: string
} & ComponentProps<typeof Typography>

function CurriculumCustomText({ subVariant, type, title, videoLength }: CurriculumCustomTextProps) {
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
                    variant={subVariant}>
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

export default CurriculumCustomText
