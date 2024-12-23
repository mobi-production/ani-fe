import { Icon } from '@repo/ui/client'
import { Badge, Flex, ImageSection, TextButton, Typography } from '@repo/ui/server'
import { ComponentProps } from 'react'

type PathProductItemDoneProps = ComponentProps<'div'>

function PathProductItemDone({ ...props }: PathProductItemDoneProps) {
  return (
    <Flex
      direction='column'
      className='max-w-[22.75rem] gap-[0.75rem]'
      {...props}
    />
  )
}

type ContentSectionProps = ComponentProps<'div'> & {
  level: number
  category: string
  title: string
  period: string
}

function ContentSection({ level, category, title, period, ...props }: ContentSectionProps) {
  return (
    <Flex
      direction='row'
      align='center'
      className='w-[100%] gap-[0.75rem]'>
      <ImageSection
        size='xs'
        src='/avif/placeholder.avif'
        alt='Placeholder Image'
      />
      <Flex
        direction='column'
        className='gap-[0.75rem]'
        {...props}>
        <Flex
          direction='row'
          className='gap-[0.75rem]'>
          <Badge>Lv.{level}</Badge>
          <Badge>{category}</Badge>
          <Badge color={'green'}>수료</Badge>
        </Flex>
        <Typography
          variant='label-reading'
          fontWeight='semibold'
          className='line-clamp-2'>
          {title}
        </Typography>
        <Typography
          color='alternative'
          variant='caption-2'>
          {period}
        </Typography>
      </Flex>
    </Flex>
  )
}

type FooterSectionProps = ComponentProps<'div'> & {
  onClick: () => void
}

function FooterSection({ onClick, ...props }: FooterSectionProps) {
  return (
    <Flex
      direction='column'
      className='w-[100%] gap-[0.75rem]'
      {...props}>
      <div className='h-[1px] w-full bg-[#17171715]' />
      <TextButton
        size='small'
        className='w-full justify-between'
        onClick={onClick}
        rightIcon={
          <Icon
            name='RightOutlined'
            size='16'
          />
        }>
        수료증 받기
      </TextButton>
    </Flex>
  )
}

PathProductItemDone.ContentSection = ContentSection
PathProductItemDone.FooterSection = FooterSection

export default PathProductItemDone
