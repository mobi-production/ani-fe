import { Icon } from '@repo/ui/client'
import { Flex, Typography } from '@repo/ui/server'
import { PathIntroduce } from '../../model/path-introduce'
import { ComponentProps } from 'react'
import cn from '@repo/util/cn'

type CurriculumCustomTextProps = {
  variant: ComponentProps<typeof Typography>['variant']
  subVariant: ComponentProps<typeof Typography>['variant']
  active?: boolean
  direction?: 'row' | 'column'
  type: PathIntroduce['pathContents'][number]['path'][number]['type']
  title: string
  videoLength?: string
} & ComponentProps<typeof Typography>

function CurriculumCustomText({ subVariant, type, title, videoLength }: CurriculumCustomTextProps) {
  switch (type) {
    case 'quiz':
    case 'page':
      return (
        <Flex
          asChild
          className='gap-[0.25rem]'>
          <Typography
            variant='body-1-normal'
            className={type === 'quiz' ? 'text-primary-normal' : ''}>
            <Icon name={type === 'page' ? 'FileOutlined' : 'QuestionCircleOutlined'} />
            {title}
          </Typography>
        </Flex>
      )
    case 'video':
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
