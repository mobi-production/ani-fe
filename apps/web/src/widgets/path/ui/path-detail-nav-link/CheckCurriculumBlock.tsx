'use client'

import { Flex, Typography, SpacingBlock } from '@repo/ui/server'
import { Icon } from '@repo/ui/client'
import { GetPathSidebarStatusResponseType } from '@/entities/path/lib/types/apis'
import CheckBox from '@repo/ui/components/check'
import { notFound, useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { memo, useCallback, useMemo, useState } from 'react'
import cn from 'node_modules/@repo/util/src/cn'

type PageTypeProps = {
  type: 'QUIZ' | 'LEARNING_CONTENTS' | 'VIDEO'
  title: string
  videoLength?: string
  checked: boolean
  active: boolean
}

const PageTypeCustomText = memo(({ active, checked, title, type, videoLength }: PageTypeProps) => {
  const iconMap = {
    QUIZ: 'QuestionCircleOutlined',
    LEARNING_CONTENTS: 'FileOutlined',
    VIDEO: 'PlayCircleOutlined'
  } as const

  if (type === 'VIDEO') {
    return (
      <Flex justify='between'>
        <Flex
          asChild
          align='start'
          gap={8}>
          <Typography
            variant='body-2-normal'
            fontWeight={active ? 'semibold' : 'regular'}>
            <Icon
              name={iconMap[type]}
              className='pt-1'
            />
            <Flex
              asChild
              direction='column'>
              <span>
                {title}
                {videoLength && (
                  <Typography
                    color='alternative'
                    variant='label-normal'
                    fontWeight={'regular'}>
                    {videoLength}
                  </Typography>
                )}
              </span>
            </Flex>
          </Typography>
        </Flex>
        <CheckBox checked={checked} />
      </Flex>
    )
  }

  return (
    <Flex
      align='center'
      justify='between'>
      <Flex
        asChild
        gap={8}>
        <Typography
          variant='body-1-normal'
          fontWeight={active ? 'medium' : 'regular'}
          className={type === 'QUIZ' ? 'text-primary-normal' : ''}>
          <Icon name={iconMap[type]} />
          {title}
        </Typography>
      </Flex>
      <CheckBox checked={checked} />
    </Flex>
  )
})

type PartBlockProps = {
  part: GetPathSidebarStatusResponseType['data']['curriculum']['parts'][number]
  updateParams: (partId: string, pageId: string) => void
  currentPageId: string
  currentPartId: string
}

const PartBlock = memo(({ part, currentPartId, currentPageId, updateParams }: PartBlockProps) => {
  const [isOpen, setIsOpen] = useState(() => part.id === Number(currentPartId))
  const [isAnimating, setIsAnimating] = useState(false)

  const handleToggle = useCallback(
    (e: React.MouseEvent<HTMLDetailsElement>) => {
      e.preventDefault()

      setIsAnimating(true)
      setIsOpen(!isOpen)

      setTimeout(() => {
        setIsAnimating(false)
      }, 200)
    },
    [isOpen, setIsOpen, setIsAnimating]
  )

  return (
    <Flex direction='column'>
      <Typography
        variant='body-2-normal'
        color='alternative'>
        Part {part.order}
      </Typography>
      <SpacingBlock height={4} />
      <details
        className='group overflow-hidden'
        open={isOpen || isAnimating}>
        <Flex
          asChild
          gap={4}
          align='center'>
          <summary
            onClick={handleToggle}
            className="marker:content-[' '] flex w-full cursor-pointer select-none">
            <Flex
              align='center'
              justify='between'
              className='w-full pr-1'>
              <Typography
                variant='heading-2'
                fontWeight={currentPartId === String(part.id) ? 'bold' : 'semibold'}>
                {part.title}
              </Typography>
              <Icon
                name='DownOutlined'
                className={cn(
                  'transition-transform duration-200',
                  isOpen ? 'rotate-180' : 'rotate-0'
                )}
              />
            </Flex>
          </summary>
        </Flex>
        <SpacingBlock height={16} />
        <Flex
          direction='column'
          gap={12}
          className={cn(
            'transition-all duration-200',
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          )}>
          {part.page.map((page) => (
            <a
              href='#'
              onClick={(e) => {
                e.preventDefault()
                updateParams(String(part.id), String(page.id))
              }}
              key={page.id}>
              <PageTypeCustomText
                {...page}
                active={page.id === Number(currentPageId)}
              />
            </a>
          ))}
        </Flex>
      </details>
    </Flex>
  )
})

type Props = GetPathSidebarStatusResponseType['data']['curriculum']

function CheckCurriculumBlock({ parts }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const partId = searchParams.get('partId')!
  const pageId = searchParams.get('pageId')!

  if (!partId || !pageId) {
    return notFound()
  }

  const updateParams = useCallback(
    (partId: string, pageId: string) => {
      const params = new URLSearchParams(searchParams)
      params.set('partId', partId)
      params.set('pageId', pageId)
      router.push(`?${params.toString()}`)
    },
    [router, searchParams]
  )

  const sortedParts = useMemo(() => {
    const currentPartId = Number(partId)
    return parts.sort(
      (a, b) => (a.id === currentPartId ? -1 : 0) - (b.id === currentPartId ? -1 : 0)
    )
  }, [parts, partId])

  return (
    <Flex
      gap={24}
      direction={'column'}>
      {sortedParts.map((part) => (
        <PartBlock
          key={part.id}
          part={part}
          currentPageId={pageId}
          currentPartId={partId}
          updateParams={updateParams}
        />
      ))}
    </Flex>
  )
}

export default CheckCurriculumBlock