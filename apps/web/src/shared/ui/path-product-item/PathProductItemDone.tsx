import { Icon } from '@repo/ui/client'
import { Badge, Flex, ImageSection, TextButton, Typography } from '@repo/ui/server'
import { ComponentProps } from 'react'

type PathProductItemDoneProps = ComponentProps<'div'>

function PathProductItemDone({ ...props }: PathProductItemDoneProps) {
  return (
    <Flex
      direction='column'
      gap={12}
      className='max-w-[22.75rem]'
      {...props}
    />
  )
}

type ContentSectionProps = ComponentProps<'div'> & {
  src: string
  level: number
  category: string
  title: string
  period: string
}

function ContentSection({ src, level, category, title, period, ...props }: ContentSectionProps) {
  return (
    <Flex
      direction='row'
      align='center'
      gap={12}
      className='w-[100%]'>
      <ImageSection
        size='xs'
        src={src}
        alt={`${title} 이미지`}
      />
      <Flex
        direction='column'
        gap={12}
        {...props}>
        <Flex
          direction='row'
          gap={12}>
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
      gap={12}
      className='w-[100%]'
      {...props}>
      <div className='h-[1px] w-full bg-[#17171715]' />
      <TextButton
        size='small'
        className='w-full justify-between'
        onClick={onClick}
        rightIcon={
          <Icon
            name='RightOutlined'
            size={16}
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
